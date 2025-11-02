import { css, html, PropertyValues, TemplateResult } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { KPart } from "../../parts/k-part";
import { marked } from "marked";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
    ChatHistory,
    ChatMessage,
    ChatProvider,
    TOPIC_AICONFIG_CHANGED,
    aiService,
    AIServiceOptions,
    StreamChunk,
    UserAttentionRequest,
    UserAttentionType,
    AgentWorkflowOptions,
    AgentWorkflowResult,
    AgentContribution
} from "./aiservice";
import { toastError, toastInfo } from "../../core/toast";
import { when } from "lit/directives/when.js";
import { topic } from "../../core/events";
import { taskService } from "../../core/taskservice";
import { activePartSignal } from "../../core/appstate";
import {
    commandRegistry as globalCommandRegistry,
    CommandRegistry,
    type ExecutionContext
} from "../../core/commandregistry";
import { uiContext } from "../../core/di";
import { watching } from "../../core/signals";
import { appSettings } from "../../core/settingsservice";

interface AIViewSettings {
    providerName?: string;
    model?: string;
}

interface ModelInfo {
    id: string;
    name?: string;
}

interface StreamingMessage {
    message: ChatMessage;
    isStreaming: boolean;
    timestamp: Date;
}

interface AgentResponseGroup {
    id: string;
    userMessageIndex: number; // Index of user message in history
    userMessage: ChatMessage;
    timestamp: Date;
    agents: Map<string, AgentResponseInfo>;
    messageIndices: Map<string, number>; // role -> message index in history
}

interface AgentResponseInfo {
    role: string;
    label: string;
    icon: string;
    status: 'streaming' | 'completed' | 'error';
    message?: ChatMessage;
    messageIndex?: number;
}

@customElement('k-aiview')
export class KAView extends KPart {
    private defaultChatContext: ChatHistory = {
        history: []
    }

    @state()
    private chatContext: ChatHistory = this.defaultChatContext

    @state()
    private providers?: ChatProvider[]
    
    @state()
    private selectedProvider?: ChatProvider
    
    @state()
    private busy: boolean = false

    @state()
    private inputValue: string = ''

    @state()
    private settingsDialogOpen: boolean = false

    @state()
    private settingsProviderName?: string

    @state()
    private settingsModel?: string

    @state()
    private availableModels: ModelInfo[] = []

    @state()
    private loadingModels: boolean = false

    @state()
    private streamingMessages: Map<number, StreamingMessage> = new Map()

    @state()
    private currentStreamingIndex: number = -1

    @state()
    private pendingAttentionRequests: Map<string, UserAttentionRequest[]> = new Map()

    @state()
    private pausedWorkflows: Map<string, { token: string; options: AgentWorkflowOptions; results: AgentWorkflowResult }> = new Map()

    @state()
    private activeAttentionDialog?: { messageIndex: number; request: UserAttentionRequest; message: ChatMessage }

    @state()
    private attentionInputValue: string = ''

    @state()
    private agentResponseGroups: Map<string, AgentResponseGroup> = new Map()

    private currentUserMessageIndex: number = -1
    private currentGroupId?: string

    private abortController?: AbortController
    private updateAnimationFrame?: number
    private pendingUpdate = false

    @query('.chat-messages')
    private messagesContainer?: HTMLElement

    @query('wa-textarea')
    private textareaElement?: any

    private readonly SETTINGS_KEY = 'aiViewChat'

    @topic(TOPIC_AICONFIG_CHANGED)
    public onAIConfigChanged() {
        this.doBeforeUI()
    }

    @watching(activePartSignal)
    protected onPartChanged(part: KPart) {
        if (!!part && "chatContext" in part) {
            this.chatContext = part.chatContext as ChatHistory
        } else {
            this.chatContext = this.defaultChatContext
        }
    }

    private getAgentMetadata(role: string): { label: string; icon: string } {
        const contributions = aiService.getAgentContributions()
        const contrib = contributions.find(c => c.role === role)
        return {
            label: contrib?.label || role,
            icon: contrib?.icon || 'robot'
        }
    }

    private renderStatusIcon(status: 'streaming' | 'completed' | 'error'): TemplateResult {
        switch (status) {
            case 'streaming':
                return html`<wa-icon name="spinner" class="spinning"></wa-icon>`
            case 'completed':
                return html`<wa-icon name="check-circle" class="status-success"></wa-icon>`
            case 'error':
                return html`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`
        }
    }

    private findStreamingMessage(role: string): ChatMessage | undefined {
        const streamingMsg = Array.from(this.streamingMessages.values()).find(m => m.message.role === role)
        return streamingMsg?.message
    }

    private updateAgentGroup(groupId: string | undefined, role: string, update: (agentInfo: AgentResponseInfo) => void) {
        if (!groupId) return
        const group = this.agentResponseGroups.get(groupId)
        if (group) {
            const agentInfo = group.agents.get(role)
            if (agentInfo) {
                update(agentInfo)
                this.requestUpdate()
            }
        }
    }

    protected async doBeforeUI() {
        this.providers = await aiService.getProviders() || []
        await this.loadSettings()
    }

    private async loadSettings() {
        const settings: AIViewSettings = await appSettings.get(this.SETTINGS_KEY) || {}
        
        if (settings.providerName) {
            const provider = this.providers?.find(p => p.name === settings.providerName)
            if (provider) {
                this.selectedProvider = {
                    ...provider,
                    model: settings.model || provider.model
                }
            }
        }
        
        if (!this.selectedProvider && this.providers && this.providers.length > 0) {
            const defaultProvider = await aiService.getDefaultProvider()
            this.selectedProvider = defaultProvider
            await this.saveSettings(defaultProvider.name, defaultProvider.model)
        }
    }

    private async saveSettings(providerName: string, model: string) {
        const settings: AIViewSettings = {
            providerName,
            model
        }
        await appSettings.set(this.SETTINGS_KEY, settings)
    }

    protected updated(changedProperties: PropertyValues) {
        super.updated(changedProperties)
        
        if (changedProperties.has('chatContext') || changedProperties.has('busy') || changedProperties.has('streamingMessages')) {
            this.scrollToBottom()
        }
    }

    private scrollToBottom() {
        if (!this.messagesContainer) return
        
        requestAnimationFrame(() => {
            if (this.messagesContainer) {
                this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight
            }
        })
    }

    private onInput(event: Event) {
        const textarea = event.target as any
        this.inputValue = textarea.value
    }

    private onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            this.sendMessage()
        }
    }

    private async sendMessage() {
        const prompt = this.inputValue.trim()
        if (!prompt || this.busy) return

        this.inputValue = ''
        this.requestUpdate()
        
        await this.updateComplete
        if (this.textareaElement) {
            this.textareaElement.value = ''
            this.textareaElement.focus()
        }

        await this.handlePrompt(prompt)
    }

    async runCommand(prompt: string, commandRegistry?: CommandRegistry) {
        const currentCommandRegistry = commandRegistry || globalCommandRegistry
        const splits = prompt.trim().split(/\s+/)
        if (splits.length === 0) return

        const commandId = splits.shift()!
        const command = currentCommandRegistry.getCommand(commandId)
        
        if (!command) {
            toastError("Command not found: " + commandId)
            return
        }
        
        const params: Record<string, string> = {}
        if (command.parameters) {
            splits.forEach((c, i) => {
                if (command.parameters && command.parameters[i]) {
                    params[command.parameters[i].name] = c
                }
            })
        }
        
        const context = currentCommandRegistry.createExecutionContext(this, params)
        
        currentCommandRegistry.execute(commandId, context)
        this.requestUpdate()
    }

    public async handlePrompt(prompt: string) {
        if (prompt.startsWith("/")) {
            await this.runCommand(prompt.substring(1), globalCommandRegistry);
            return
        }

        if (!this.selectedProvider) {
            toastError('Please configure AI provider in settings')
            return
        }

        const message = aiService.createMessage(prompt)
        this.chatContext.history.push(message)
        this.requestUpdate()
        this.busy = true

        this.abortController = new AbortController()

        const execContext = globalCommandRegistry.createExecutionContext(this)
        const callContext = uiContext.createChild({
            ...execContext
        })

        const streamingAgents = new Map<string, number>()

        taskService.runAsync("Calling AI assistant", async _progress => {
            const agentContext: ExecutionContext = {
                ...callContext.getProxy(),
                userPrompt: prompt
            }

            const contributions = aiService.getAgentContributions()
            const matchingAgents = contributions.filter(contrib => {
                if (contrib.canHandle) {
                    return contrib.canHandle(agentContext)
                }
                return true
            }).sort((a, b) => (b.priority || 0) - (a.priority || 0))
            
            const groupId = `group-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
            this.currentGroupId = groupId
            this.currentUserMessageIndex = this.chatContext.history.length - 1

            const roles = matchingAgents.length > 0 
                ? matchingAgents.map(a => a.role)
                : ['assistant']

            const group: AgentResponseGroup = {
                id: groupId,
                userMessageIndex: this.currentUserMessageIndex,
                userMessage: message,
                timestamp: new Date(),
                agents: new Map(),
                messageIndices: new Map()
            }
            roles.forEach(role => {
                const { label, icon } = this.getAgentMetadata(role)
                group.agents.set(role, {
                    role,
                    label,
                    icon,
                    status: 'streaming'
                })
            })
            this.agentResponseGroups.set(groupId, group)
            this.requestUpdate()

            return aiService.executeAgentWorkflow({
                        chatContext: this.chatContext,
                        chatConfig: this.selectedProvider,
                        callContext: callContext,
                        execution: 'parallel',
                        stream: true,
                        signal: this.abortController!.signal,
                        roles,
                        onAgentStart: (role: string) => {
                            const agentStreamIndex = ++this.currentStreamingIndex
                            const agentStreamMessage: StreamingMessage = {
                                message: {
                                    role: role,
                                    content: ''
                                },
                                isStreaming: true,
                                timestamp: new Date()
                            }
                            streamingAgents.set(role, agentStreamIndex)
                            this.streamingMessages.set(agentStreamIndex, agentStreamMessage)
                            
                            this.updateAgentGroup(this.currentGroupId, role, (agentInfo) => {
                                agentInfo.status = 'streaming'
                            })
                        },
                        onToken: (role: string, token: string) => {
                            const streamIndex = streamingAgents.get(role)
                            if (streamIndex !== undefined) {
                                const agentMsg = this.streamingMessages.get(streamIndex)
                                if (agentMsg) {
                                    agentMsg.message.content += token
                                    this.scheduleStreamingUpdate()
                                }
                            }
                            if (this.currentGroupId) {
                                this.requestUpdate()
                            }
                        },
                        onAgentComplete: (role: string, message: ChatMessage) => {
                            const streamIndex = streamingAgents.get(role)
                            if (streamIndex !== undefined) {
                                const agentMsg = this.streamingMessages.get(streamIndex)
                                if (agentMsg) {
                                    agentMsg.isStreaming = false
                                    agentMsg.message = message
                                    const messageIndex = this.chatContext.history.length
                                    this.chatContext.history.push(message)
                                    streamingAgents.delete(role)
                                    this.streamingMessages.delete(streamIndex)
                                    
                                    this.updateAgentGroup(this.currentGroupId, role, (agentInfo) => {
                                        agentInfo.status = 'completed'
                                        agentInfo.message = message
                                        agentInfo.messageIndex = messageIndex
                                    })
                                    if (this.currentGroupId) {
                                        const group = this.agentResponseGroups.get(this.currentGroupId)
                                        group?.messageIndices.set(role, messageIndex)
                                    }
                                    
                                    if (message.requiresAttention) {
                                        if (message.attentionRequests) {
                                            this.pendingAttentionRequests.set(message.role, message.attentionRequests)
                                        }
                                        if (message.canContinue) {
                                            toastInfo('Workflow paused - awaiting your response')
                                        }
                                    }
                                    this.requestUpdate()
                                }
                            }
                        },
                        onAgentError: (role: string, error: Error) => {
                            const streamIndex = streamingAgents.get(role)
                            if (streamIndex !== undefined) {
                                const agentMsg = this.streamingMessages.get(streamIndex)
                                if (agentMsg) {
                                    agentMsg.isStreaming = false
                                    agentMsg.message.content = `Error: ${error.message}`
                                    streamingAgents.delete(role)
                                    this.streamingMessages.delete(streamIndex)
                                }
                            }
                            
                            this.updateAgentGroup(this.currentGroupId, role, (agentInfo) => {
                                agentInfo.status = 'error'
                                agentInfo.message = {
                                    role,
                                    content: `Error: ${error.message}`
                                }
                            })
                            
                            this.requestUpdate()
                            toastError(`Agent ${role} error: ${error.message}`)
                        }
                }).then(workflowResult => {
                    this.currentGroupId = undefined
                    const messages = Array.from(workflowResult.messages.values())
                    return messages[0] || messages
                })
        }).catch((error: any) => {
            if (error?.name !== 'AbortError') {
                toastError(`${error}`)
            }
        }).finally(() => {
            this.busy = false
            callContext.destroy()
            this.abortController = undefined
            this.currentGroupId = undefined
            if (this.updateAnimationFrame) {
                cancelAnimationFrame(this.updateAnimationFrame)
                this.updateAnimationFrame = undefined
                this.pendingUpdate = false
            }
            for (const [index, msg] of this.streamingMessages.entries()) {
                if (msg && msg.isStreaming) {
                    msg.isStreaming = false
                    this.streamingMessages.delete(index)
                }
            }
            this.requestUpdate()
        })
    }

    private scheduleStreamingUpdate() {
        if (!this.pendingUpdate) {
            this.pendingUpdate = true
            this.updateAnimationFrame = requestAnimationFrame(() => {
                this.pendingUpdate = false
                this.requestUpdate()
            })
        }
    }

    private cancelStream() {
        if (this.abortController) {
            this.abortController.abort()
            this.abortController = undefined
            this.busy = false
        }
        if (this.updateAnimationFrame) {
            cancelAnimationFrame(this.updateAnimationFrame)
            this.updateAnimationFrame = undefined
            this.pendingUpdate = false
        }
    }

    private async openSettingsDialog() {
        const currentSettings: AIViewSettings = await appSettings.get(this.SETTINGS_KEY) || {}
        this.settingsProviderName = currentSettings.providerName || this.selectedProvider?.name || this.providers?.[0]?.name
        this.settingsModel = currentSettings.model || this.selectedProvider?.model
        
        this.settingsDialogOpen = true
        
        if (this.settingsProviderName) {
            this.fetchModels(this.settingsProviderName).catch(error => {
                toastError(`Failed to fetch models: ${error}`)
            })
        }
    }

    private async closeSettingsDialog() {
        this.settingsDialogOpen = false
        this.availableModels = []
    }

    private async onProviderChange(event: Event) {
        const target = event.target as any
        const providerName = target.value
        this.settingsProviderName = providerName
        this.settingsModel = undefined
        this.availableModels = []
        await this.fetchModels(providerName)
    }

    private async fetchModels(providerName: string) {
        const provider = this.providers?.find(p => p.name === providerName)
        if (!provider) return

        this.loadingModels = true
        
        try {
            const baseUrl = provider.chatApiEndpoint.replace('/v1/chat/completions', '')
            const modelsUrl = `${baseUrl}/v1/models`
            
            const response = await fetch(modelsUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${provider.apiKey}`,
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error(`Failed to fetch models: ${response.statusText}`)
            }

            const data = await response.json()
            const models = data.data || []
            
            this.availableModels = models.map((m: any) => ({
                id: m.id,
                name: m.name || m.id
            }))
            
            if (!this.settingsModel && this.availableModels.length > 0) {
                this.settingsModel = this.availableModels[0].id
            }
        } catch (error) {
            toastError(`Failed to fetch models: ${error}`)
            this.availableModels = []
        } finally {
            this.loadingModels = false
        }
    }

    private async onModelChange(event: Event) {
        const target = event.target as any
        this.settingsModel = target.value
    }

    private async saveSettingsAndClose() {
        if (!this.settingsProviderName || !this.settingsModel) {
            toastError('Please select both provider and model')
            return
        }

        await this.saveSettings(this.settingsProviderName, this.settingsModel)
        
        const provider = this.providers?.find(p => p.name === this.settingsProviderName)
        if (provider) {
            this.selectedProvider = {
                ...provider,
                model: this.settingsModel
            }
            await aiService.setDefaultProvider(this.settingsProviderName)
        }
        
        this.settingsDialogOpen = false
        toastInfo('Settings saved')
    }

    private copyToClipboard(text: string) {
        navigator.clipboard.writeText(text).then(() => {
        }).catch((err) => {
            toastError(`Failed to copy: ${err}`)
        })
    }

    private formatTimestamp(date: Date = new Date()): string {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    private renderAgentResponseGroup(group: AgentResponseGroup) {
        const agents = Array.from(group.agents.values())
        const completedCount = agents.filter(a => a.status === 'completed').length
        const streamingCount = agents.filter(a => a.status === 'streaming').length
        const errorCount = agents.filter(a => a.status === 'error').length
        const allCompleted = agents.length > 0 && completedCount + errorCount === agents.length
        const isSingleAgent = agents.length === 1

        const quickActions = agents
            .filter(a => a.message && a.message.actions && a.message.actions.length > 0)
            .flatMap(a => a.message!.actions!.map(action => ({ ...action, agentRole: a.role, agentLabel: a.label })))
            .sort((a, b) => {
                const aPriority = a.requiresAttention ? 1 : 0
                const bPriority = b.requiresAttention ? 1 : 0
                return bPriority - aPriority
            })

        return html`
            <div class="agent-response-group">
                ${when(!isSingleAgent, () => html`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="Multiple Agents"></wa-icon>
                            <span>Multiple Agents Responded</span>
                        ${when(!allCompleted, () => html`
                            <span class="agent-status-badge">
                                ${streamingCount > 0 ? html`<span class="status-streaming">${streamingCount} responding</span>` : ''}
                                ${completedCount > 0 ? html`<span class="status-completed">${completedCount}/${agents.length} completed</span>` : ''}
                            </span>
                        `)}
                            ${when(allCompleted, () => html`
                                <span class="agent-status-badge status-all-completed">
                                    All completed (${completedCount})
                                </span>
                            `)}
                        </div>
                    </div>
                `)}
                <div class="agent-group-content">
                    ${agents.map(agentInfo => {
                        const message = agentInfo.message || (agentInfo.status === 'streaming' ? this.findStreamingMessage(agentInfo.role) : undefined)
                        
                        if (!message) {
                            return html`
                                <div class="agent-response-card status-${agentInfo.status}">
                                    <div class="agent-card-header">
                                        <div class="agent-card-title">
                                            <wa-icon name="${agentInfo.icon}" label="${agentInfo.label}"></wa-icon>
                                            <span>${agentInfo.label}</span>
                                            ${this.renderStatusIcon(agentInfo.status)}
                                        </div>
                                    </div>
                                    <div class="agent-card-content">
                                        <div class="agent-loading">Waiting for response...</div>
                                    </div>
                                </div>
                            `
                        }

                        return this.renderAgentResponseCard(group.id, agentInfo, message, agentInfo.status === 'streaming')
                    })}
                </div>
                ${when(quickActions.length > 0 && allCompleted, () => html`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="Quick Actions"></wa-icon>
                            <span>Quick Actions</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${quickActions.map(action => html`
                                <wa-button
                                    variant="${action.requiresAttention ? 'brand' : 'neutral'}"
                                    appearance="${action.requiresAttention ? 'filled' : 'plain'}"
                                    size="small"
                                    title="${action.label}"
                                    @click="${() => action.action()}">
                                    <wa-icon name="${action.icon}" label="${action.label}"></wa-icon>
                                </wa-button>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        `
    }

    private renderAgentResponseCard(groupId: string, agentInfo: AgentResponseInfo, message: ChatMessage, isStreaming: boolean) {
        const messageIndex = agentInfo.messageIndex ?? -1
        const hasAttention = message.requiresAttention && (message.attentionRequests?.length || 0) > 0
        
        return html`
            <div class="agent-response-card status-${agentInfo.status} ${hasAttention ? 'requires-attention' : ''}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${agentInfo.icon}" label="${agentInfo.label}"></wa-icon>
                        <span>${agentInfo.label}</span>
                        ${this.renderStatusIcon(agentInfo.status)}
                        ${when(hasAttention, () => html`
                            <wa-icon name="bell" class="attention-indicator"></wa-icon>
                        `)}
                    </div>
                </div>
                <div class="agent-card-content">
                    ${this.renderMessage(message, messageIndex, isStreaming, false)}
                </div>
            </div>
        `
    }

    private renderMessage(message: ChatMessage, index?: number, isStreaming?: boolean, showHeader: boolean = true) {
        const isUser = message.role === "user"
        const roleName = message.role
        const hasAttention = message.requiresAttention && (message.attentionRequests?.length || 0) > 0
        const messageIndex = index ?? this.chatContext.history.indexOf(message)
        
        return html`
            <div class="message-wrapper ${isUser ? 'user' : 'assistant'} ${isStreaming ? 'streaming' : ''} ${hasAttention ? 'requires-attention' : ''}">
                ${when(showHeader, () => html`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="${isUser ? 'user' : 'robot'}" 
                                label="${roleName}">
                            </wa-icon>
                            <span class="role-name">${roleName}</span>
                            ${when(hasAttention, () => html`
                                <wa-icon name="bell" label="Requires attention" class="attention-indicator"></wa-icon>
                            `)}
                            <span class="timestamp">${this.formatTimestamp()}</span>
                        </div>
                        <div class="message-actions">
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                title="Copy"
                                @click="${() => this.copyToClipboard(message.content)}">
                                <wa-icon slot="label" name="copy" label="Copy"></wa-icon>
                            </wa-button>
                            ${when(message.actions?.length, () => html`
                                ${message.actions?.map(a => html`
                                    <wa-button
                                        variant="neutral"
                                        appearance="plain"
                                        size="small"
                                        title="${a.label}"
                                        @click="${() => a.action()}">
                                        <wa-icon slot="label" name="${a.icon}" label="${a.label}"></wa-icon>
                                    </wa-button>
                                `)}
                            `)}
                        </div>
                    </div>
                `)}
                <div class="message-content">
                    ${unsafeHTML(marked.parse(message.content || '') as string)}
                    ${when(isStreaming, () => html`
                        <span class="streaming-cursor">▋</span>
                    `)}
                    ${when(hasAttention && message.attentionRequests, () => html`
                        <div class="attention-requests">
                            ${message.attentionRequests!.map((request, reqIndex) => html`
                                <div class="attention-request attention-${request.type}">
                                    <div class="attention-header">
                                        <wa-icon name="${this.getAttentionIcon(request.type)}" label="${request.type}"></wa-icon>
                                        <strong>${request.title}</strong>
                                        ${when(request.priority === 'urgent' || request.priority === 'high', () => html`
                                            <span class="priority-badge priority-${request.priority}">${request.priority}</span>
                                        `)}
                                    </div>
                                    <div class="attention-message">${request.message}</div>
                                    <div class="attention-actions">
                                        ${when(request.type === 'confirmation', () => html`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(messageIndex, reqIndex, request, true)}">
                                                Confirm
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(messageIndex, reqIndex, request, false)}">
                                                Cancel
                                            </wa-button>
                                        `)}
                                        ${when(request.type === 'input', () => html`
                                            <div class="input-group">
                                                <wa-input
                                                    value="${this.attentionInputValue}"
                                                    @input="${(e: Event) => { this.attentionInputValue = (e.target as HTMLInputElement).value }}"
                                                    placeholder="Enter your response...">
                                                </wa-input>
                                                <wa-button
                                                    variant="brand"
                                                    appearance="filled"
                                                    size="small"
                                                    ?disabled="${!this.attentionInputValue.trim()}"
                                                    @click="${() => this.handleAttentionResponse(messageIndex, reqIndex, request, this.attentionInputValue)}">
                                                    Submit
                                                </wa-button>
                                            </div>
                                        `)}
                                        ${when(request.type === 'approval', () => html`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(messageIndex, reqIndex, request, true)}">
                                                Approve
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(messageIndex, reqIndex, request, false)}">
                                                Reject
                                            </wa-button>
                                        `)}
                                        ${when(request.type === 'execution', () => html`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(messageIndex, reqIndex, request, true)}">
                                                Execute
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(messageIndex, reqIndex, request, false)}">
                                                Skip
                                            </wa-button>
                                        `)}
                                        ${when(request.type === 'info', () => html`
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(messageIndex, reqIndex, request, true)}">
                                                Acknowledge
                                            </wa-button>
                                        `)}
                                    </div>
                                </div>
                            `)}
                        </div>
                    `)}
                    ${when(message.canContinue && !hasAttention, () => html`
                        <div class="continue-workflow">
                            <wa-button
                                variant="brand"
                                appearance="filled"
                                size="small"
                                @click="${() => this.continuePausedWorkflow(message)}">
                                Continue Workflow
                            </wa-button>
                        </div>
                    `)}
                </div>
            </div>
        `
    }

    private getAttentionIcon(type: UserAttentionType): string {
        switch (type) {
            case 'confirmation': return 'check-circle'
            case 'input': return 'keyboard'
            case 'approval': return 'thumbs-up'
            case 'execution': return 'play'
            case 'info': return 'info-circle'
            default: return 'bell'
        }
    }

    private async handleAttentionResponse(
        messageIndex: number,
        requestIndex: number,
        request: UserAttentionRequest,
        response: boolean | string | null
    ) {
        const message = this.chatContext.history[messageIndex]
        if (!message) return

        if (message.attentionRequests) {
            const request = message.attentionRequests[requestIndex]
            if (request) {
                request.metadata = request.metadata || {}
                request.metadata.userResponse = response
            }
        }

        this.attentionInputValue = ''

        if (message.canContinue) {
            await this.continuePausedWorkflow(message, response)
        } else {
            this.requestUpdate()
        }
    }

    private async continuePausedWorkflow(message: ChatMessage, userResponse?: any) {
        if (!message.canContinue) return

        const workflow = Array.from(this.pausedWorkflows.values())[0]
        if (!workflow) {
            toastError('No paused workflow found to continue')
            return
        }

        const userResponses = new Map<string, any>()
        if (userResponse !== undefined) {
            userResponses.set('user_response', userResponse)
        }

        if (message.attentionRequests) {
            for (const request of message.attentionRequests) {
                if (request.metadata?.userResponse !== undefined) {
                    userResponses.set(`attention_${request.type}_result`, request.metadata.userResponse)
                }
            }
        }

        this.busy = true
        try {
            const results = await aiService.continueWorkflow(
                workflow.token,
                userResponses,
                workflow.options
            )

            if (results.paused && results.continuationToken) {
                this.pausedWorkflows.set(results.continuationToken, {
                    token: results.continuationToken,
                    options: workflow.options,
                    results
                })
            } else {
                this.pausedWorkflows.clear()
            }

            if (results.messages) {
                for (const [role, msg] of results.messages) {
                    this.chatContext.history.push(msg)
                }
            }

            this.requestUpdate()
        } catch (error: any) {
            toastError(`Failed to continue workflow: ${error}`)
        } finally {
            this.busy = false
        }
    }

    private renderLoadingIndicator() {
        return html`
            <div class="message-wrapper assistant loading">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-animation name="flip" duration="2000" play>
                            <wa-icon name="robot" label="AI Assistant"></wa-icon>
                        </wa-animation>
                        <span class="role-name">AI Assistant</span>
                    </div>
                </div>
                <div class="message-content loading-dots">
                    <span>Thinking</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                </div>
            </div>
        `
    }

    private renderSettingsDialog(): TemplateResult {
        if (!this.settingsDialogOpen) return html``

        return html`
            <wa-dialog label="AI View Settings" open @wa-request-close="${this.closeSettingsDialog}">
                <div class="settings-dialog-content">
                    <div class="settings-field">
                        <label>Provider:</label>
                        <wa-select 
                            value="${this.settingsProviderName || ''}"
                            @change="${this.onProviderChange}">
                            ${this.providers?.map(provider => html`
                                <wa-option value="${provider.name}">
                                    ${provider.name}
                                </wa-option>
                            `)}
                        </wa-select>
                    </div>

                    <div class="settings-field">
                        <label>Model:</label>
                        ${when(this.loadingModels, () => html`
                            <div>Loading models...</div>
                        `, () => html`
                            ${when(this.availableModels.length > 0, () => html`
                                <wa-select 
                                    value="${this.settingsModel || ''}"
                                    @change="${this.onModelChange}">
                                    ${this.availableModels.map(model => html`
                                        <wa-option value="${model.id}">
                                            ${model.name || model.id}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `, () => html`
                                <wa-select 
                                    value="${this.settingsModel || ''}"
                                    @change="${this.onModelChange}">
                                    ${this.providers?.find(p => p.name === this.settingsProviderName) && html`
                                        <wa-option value="${this.providers!.find(p => p.name === this.settingsProviderName)!.model}">
                                            ${this.providers!.find(p => p.name === this.settingsProviderName)!.model}
                                        </wa-option>
                                    `}
                                </wa-select>
                            `)}
                        `)}
                    </div>

                    <div class="settings-actions">
                        <wa-button variant="neutral" appearance="outlined" @click="${this.closeSettingsDialog}">
                            Cancel
                        </wa-button>
                        <wa-button variant="brand" appearance="filled" @click="${this.saveSettingsAndClose}">
                            Save
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `
    }

    render() {
        return html`
            <div class="chat-container">
                ${this.renderSettingsDialog()}
                
                ${when(!this.selectedProvider, () => html`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Click the settings button to configure</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map((message, index) => {
                        if (message.role === "user") {
                            const group = Array.from(this.agentResponseGroups.values()).find(g => 
                                g.userMessageIndex === index
                            )
                            if (group) {
                                return html`
                                    ${this.renderMessage(message, index)}
                                    ${this.renderAgentResponseGroup(group)}
                                `
                            }
                        }
                        
                        const group = Array.from(this.agentResponseGroups.values()).find(g => 
                            g.messageIndices.get(message.role) === index
                        )
                        if (group) {
                            return html``
                        }
                        return this.renderMessage(message, index)
                    })}
                    ${Array.from(this.streamingMessages.values()).map(msg => {
                        const inGroup = Array.from(this.agentResponseGroups.values()).some(g => 
                            g.agents.has(msg.message.role)
                        )
                        if (inGroup) {
                            return html``
                        }
                        return this.renderMessage(msg.message, -1, msg.isStreaming)
                    })}
                    ${when(this.busy && this.streamingMessages.size === 0, () => this.renderLoadingIndicator())}
                </div>

                <div class="input-container">
                    <div class="input-row">
                        <wa-textarea
                            placeholder="Type your message..."
                            resize="auto"
                            rows="1"
                            .value="${this.inputValue}"
                            ?disabled="${this.busy || !this.selectedProvider}"
                            @input="${this.onInput}"
                            @keydown="${this.onKeyDown}">
                        </wa-textarea>
                        
                        ${when(this.busy, () => html`
                            <wa-button
                                appearance="plain"
                                size="medium"
                                @click="${this.cancelStream}">
                                <wa-icon name="stop" label="Stop"></wa-icon>
                            </wa-button>
                        `, () => html`
                            <wa-button
                                appearance="plain"
                                size="medium"
                                ?disabled="${!this.inputValue.trim() || !this.selectedProvider}"
                                @click="${this.sendMessage}">
                                <wa-icon name="paper-plane" label="Send"></wa-icon>
                            </wa-button>
                        `)}

                        <wa-button
                            appearance="plain"
                            size="medium"
                            @click="${this.openSettingsDialog}">
                            <wa-icon name="gear" label="Settings"></wa-icon>
                        </wa-button>
                    </div>
                </div>
            </div>
        `
    }

    static styles = css`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .chat-container {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            min-height: 0;
            overflow: hidden;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            color: var(--wa-color-text-quiet);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }

        .empty-state p {
            margin: 0.5rem 0;
        }

        .empty-state .hint {
            font-size: 0.875rem;
            opacity: 0.7;
        }

        .chat-messages {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            min-height: 0;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            scroll-behavior: smooth;
        }

        .message-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-width: 85%;
            width: 100%;
            box-sizing: border-box;
            animation: slideIn 0.2s ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .message-wrapper.user {
            align-self: flex-end;
        }

        .message-wrapper.assistant {
            align-self: flex-start;
        }

        .message-wrapper.streaming .message-content {
            position: relative;
        }

        .streaming-cursor {
            display: inline-block;
            animation: blink 1s infinite;
            color: var(--wa-color-brand-50);
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        .message-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.5rem;
            padding: 0 0.5rem;
        }

        .message-meta {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.75rem;
            color: var(--wa-color-text-quiet);
        }

        .role-name {
            font-weight: 600;
        }

        .timestamp {
            opacity: 0.7;
        }

        .message-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .message-wrapper:hover .message-actions {
            opacity: 1;
        }

        .message-content {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
            line-height: 1.5;
            word-wrap: break-word;
            word-break: break-word;
            overflow-wrap: break-word;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            border: 1px solid;
            max-width: 100%;
            box-sizing: border-box;
        }

        .agent-card-content .message-content {
            border-radius: 0;
            box-shadow: none;
        }

        .message-wrapper.user .message-content {
            background-color: var(--wa-color-brand-fill-quiet);
            color: var(--wa-color-text-normal);
            border-color: var(--wa-color-brand-border-quiet);
        }

        .message-wrapper.assistant .message-content {
            background-color: var(--wa-color-surface-default);
            color: var(--wa-color-text-normal);
            border-color: var(--wa-color-surface-border);
        }

        .message-content :first-child {
            margin-top: 0;
        }

        .message-content :last-child {
            margin-bottom: 0;
        }

        .message-content p {
            margin: 0.5rem 0;
        }

        .message-content pre {
            margin: 0.5rem 0;
            padding: 0.75rem;
            background-color: var(--wa-color-surface-lowered);
            color: var(--wa-color-text-normal);
            border-radius: 0.375rem;
            overflow-x: auto;
            overflow-y: visible;
            word-wrap: break-word;
            word-break: break-all;
            white-space: pre-wrap;
            max-width: 100%;
            box-sizing: border-box;
        }

        .message-content code {
            font-family: 'Courier New', monospace;
            font-size: 0.875em;
        }

        .message-content pre code {
            background: none;
            padding: 0;
        }

        .message-content :not(pre) > code {
            background-color: var(--wa-color-overlay-inline);
            padding: 0.125rem 0.25rem;
            border-radius: 0.25rem;
        }

        .message-wrapper.user .message-content :not(pre) > code {
            background-color: var(--wa-color-overlay-inline);
        }

        .loading-dots {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .dot {
            animation: blink 1.4s infinite;
        }

        .dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        .dot:nth-child(4) {
            animation-delay: 0.6s;
        }

        @keyframes blink {
            0%, 60%, 100% {
                opacity: 0;
            }
            30% {
                opacity: 1;
            }
        }

        .input-container {
            padding: 1rem;
            border-top: 1px solid var(--wa-color-surface-border);
        }

        .input-row {
            display: flex;
            align-items: flex-end;
            gap: 0.5rem;
        }

        wa-textarea {
            flex: 1;
        }

        wa-textarea::part(base) {
            max-height: 200px;
        }

        .settings-dialog-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            min-width: 400px;
        }

        .settings-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .settings-field label {
            font-weight: 600;
            font-size: 0.875rem;
        }

        .settings-actions {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            margin-top: 0.5rem;
        }

        .message-wrapper.requires-attention {
            border-left: 3px solid var(--wa-color-warning-border-normal);
            padding-left: 0.5rem;
        }

        .attention-indicator {
            color: var(--wa-color-warning-50);
            margin-left: 0.5rem;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .attention-requests {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 2px solid var(--wa-color-surface-border);
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .attention-request {
            padding: 1rem;
            border-radius: 0.5rem;
            border: 1px solid;
            background-color: var(--wa-color-surface-default);
            border-color: var(--wa-color-surface-border);
        }

        .attention-request.attention-confirmation {
            border-color: var(--wa-color-brand-border-quiet);
            background-color: var(--wa-color-brand-fill-quiet);
        }

        .attention-request.attention-input {
            border-color: var(--wa-color-brand-border-quiet);
            background-color: var(--wa-color-brand-fill-quiet);
        }

        .attention-request.attention-approval {
            border-color: var(--wa-color-success-border-quiet);
            background-color: var(--wa-color-success-fill-quiet);
        }

        .attention-request.attention-execution {
            border-color: var(--wa-color-warning-border-quiet);
            background-color: var(--wa-color-warning-fill-quiet);
        }

        .attention-request.attention-info {
            border-color: var(--wa-color-neutral-border-quiet);
            background-color: var(--wa-color-neutral-fill-quiet);
        }

        .attention-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
        }

        .attention-header strong {
            flex: 1;
            font-size: 1rem;
            color: var(--wa-color-text-normal);
        }

        .priority-badge {
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .priority-badge.priority-high {
            background-color: var(--wa-color-warning-fill-normal);
            color: var(--wa-color-warning-on-normal);
        }

        .priority-badge.priority-urgent {
            background-color: var(--wa-color-danger-fill-normal);
            color: var(--wa-color-danger-on-normal);
        }

        .attention-message {
            margin-bottom: 1rem;
            color: var(--wa-color-text-quiet);
            line-height: 1.5;
        }

        .attention-actions {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .attention-actions .input-group {
            display: flex;
            gap: 0.5rem;
            flex: 1;
            min-width: 100%;
        }

        .attention-actions .input-group wa-input {
            flex: 1;
        }

        .continue-workflow {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px dashed var(--wa-color-surface-border);
        }

        .message-wrapper.user .attention-requests,
        .message-wrapper.user .continue-workflow {
            background-color: var(--wa-color-overlay-inline);
        }

        .agent-response-group {
            margin: 1rem 0;
            border: 1px solid var(--wa-color-surface-border);
            background: var(--wa-color-surface-default);
            overflow: visible;
            max-width: 100%;
        }

        .agent-group-header {
            padding: 0.75rem 1rem;
            background: var(--wa-color-surface-raised);
            border-bottom: 1px solid var(--wa-color-surface-border);
        }

        .agent-group-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            color: var(--wa-color-text-normal);
        }

        .agent-status-badge {
            display: flex;
            gap: 0.5rem;
            margin-left: auto;
            font-size: 0.75rem;
        }

        .agent-status-badge .status-streaming {
            color: var(--wa-color-brand-60);
        }

        .agent-status-badge .status-completed {
            color: var(--wa-color-success-60);
        }

        .agent-status-badge .status-all-completed {
            color: var(--wa-color-success-70);
            font-weight: 600;
        }

        .agent-group-content {
            display: flex;
            flex-direction: column;
        }

        .agent-response-card {
            border-bottom: 1px solid var(--wa-color-surface-border);
            transition: all 0.2s ease;
        }

        .agent-response-card:last-child {
            border-bottom: none;
        }

        .agent-response-card.requires-attention {
            border-left: 3px solid var(--wa-color-warning-border-normal);
        }

        .agent-response-card.status-streaming {
            background: var(--wa-color-brand-fill-quiet);
        }

        .agent-response-card.status-completed {
            background: var(--wa-color-surface-default);
        }

        .agent-response-card.status-error {
            background: var(--wa-color-danger-fill-quiet);
        }

        .agent-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1rem;
            user-select: none;
        }

        .agent-card-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
            color: var(--wa-color-text-normal);
        }

        .agent-card-title .spinning {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .agent-card-title .status-success {
            color: var(--wa-color-success-60);
        }

        .agent-card-title .status-error {
            color: var(--wa-color-danger-60);
        }


        .agent-card-content {
            padding: 0;
            max-width: 100%;
            box-sizing: border-box;
            overflow-x: hidden;
            overflow-y: visible;
        }

        .agent-card-content .message-wrapper {
            margin: 0;
            border: none;
            border-radius: 0;
            max-width: 100%;
            width: 100%;
        }

        .quick-actions-bar {
            padding: 0.5rem 0.75rem;
            background: var(--wa-color-surface-raised);
            border-top: 2px solid var(--wa-color-surface-border);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .quick-actions-label {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--wa-color-text-normal);
            white-space: nowrap;
        }

        .quick-actions-buttons {
            display: flex;
            gap: 0.375rem;
            flex: 1;
            justify-content: flex-end;
        }

        .quick-actions-buttons wa-button {
            min-width: 2rem;
            width: 2rem;
            height: 2rem;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .agent-loading {
            padding: 1rem;
            color: var(--wa-color-text-quiet);
            text-align: center;
            font-style: italic;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-aiview': KAView
    }
}

