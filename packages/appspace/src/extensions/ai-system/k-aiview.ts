import { css, html, PropertyValues, TemplateResult } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { KPart } from "../../parts/k-part";
import { when } from "lit/directives/when.js";
import { repeat } from "lit/directives/repeat.js";
import './components';
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
import { topic } from "../../core/events";
import { taskService } from "../../core/taskservice";
import {
    commandRegistry as globalCommandRegistry,
    CommandRegistry,
    type ExecutionContext
} from "../../core/commandregistry";
import { uiContext } from "../../core/di";
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
    sessionId: string; // Session this group belongs to
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

    private chatSessions: Map<string, ChatHistory> = new Map()

    @state()
    private activeSessionId: string = ''

    @state()
    private sessionIds: string[] = []

    private get chatContext(): ChatHistory {
        if (!this.activeSessionId || !this.chatSessions.has(this.activeSessionId)) {
            return this.defaultChatContext
        }
        return this.chatSessions.get(this.activeSessionId)!
    }

    private set chatContext(value: ChatHistory) {
        if (this.activeSessionId) {
            this.chatSessions.set(this.activeSessionId, value)
        }
    }

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
    private agentResponseGroups: Map<string, AgentResponseGroup> = new Map()

    private currentUserMessageIndex: number = -1
    private currentGroupId?: string

    private abortController?: AbortController
    private updateAnimationFrame?: number
    private pendingUpdate = false



    private readonly SETTINGS_KEY = 'aiViewChat'

    @topic(TOPIC_AICONFIG_CHANGED)
    public onAIConfigChanged() {
        this.doBeforeUI()
    }


    private getAgentMetadata(role: string): { label: string; icon: string } {
        const contributions = aiService.getAgentContributions()
        const contrib = contributions.find(c => c.role === role)
        return {
            label: contrib?.label || role,
            icon: contrib?.icon || 'robot'
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
        if (this.chatSessions.size === 0) {
            this.createNewSession()
        }
        this.providers = await aiService.getProviders() || []
        await this.loadSettings()
    }

    private createNewSession(): string {
        const sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        this.chatSessions.set(sessionId, { history: [] })
        this.sessionIds = Array.from(this.chatSessions.keys())
        this.activeSessionId = sessionId
        this.requestUpdate()
        return sessionId
    }

    private deleteSession(sessionId: string) {
        if (this.chatSessions.size <= 1) {
            toastError('Cannot delete the last session')
            return
        }
        this.chatSessions.delete(sessionId)
        this.sessionIds = Array.from(this.chatSessions.keys())
        if (this.activeSessionId === sessionId) {
            const firstSession = this.sessionIds[0]
            this.activeSessionId = firstSession
            this.inputValue = ''
        }
        this.requestUpdate()
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
        
        if (changedProperties.has('chatSessions') || changedProperties.has('activeSessionId') || changedProperties.has('busy') || changedProperties.has('streamingMessages')) {
            this.scrollToBottom()
        }
    }

    private scrollToBottom() {
        if (!this.activeSessionId) return
        
        requestAnimationFrame(() => {
            const tabPanel = this.shadowRoot?.querySelector(`wa-tab-panel[name="${this.activeSessionId}"]`)
            const scroller = tabPanel?.querySelector('wa-scroller.chat-messages') as any
            if (scroller) {
                const scrollContainer = scroller.shadowRoot?.querySelector('.scroll-container') as HTMLElement
                if (scrollContainer) {
                    scrollContainer.scrollTop = scrollContainer.scrollHeight
                } else if (scroller.scrollTo) {
                    scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' })
                }
            }
        })
    }


    private async sendMessage() {
        const prompt = this.inputValue.trim()
        if (!prompt || this.busy) return

        await this.updateActiveSessionFromTabGroup()

        if (!this.activeSessionId && this.sessionIds.length > 0) {
            this.activeSessionId = this.sessionIds[0]
        }

        this.inputValue = ''
        this.requestUpdate()
        

        await this.handlePrompt(prompt)
    }

    private async updateActiveSessionFromTabGroup() {
        await this.updateComplete
        const tabGroup = this.shadowRoot?.querySelector('wa-tab-group') as any
        if (tabGroup?.active && this.chatSessions.has(tabGroup.active)) {
            this.activeSessionId = tabGroup.active
        }
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

        await this.updateActiveSessionFromTabGroup()

        if (!this.activeSessionId) {
            if (this.sessionIds.length > 0) {
                this.activeSessionId = this.sessionIds[0]
            } else {
                this.createNewSession()
            }
        }

        const message = aiService.createMessage(prompt)
        const currentSessionId = this.activeSessionId
        if (!currentSessionId) {
            console.error('No active session ID when adding message')
            return
        }
        const sessionContext = this.chatSessions.get(currentSessionId)
        if (!sessionContext) {
            this.chatSessions.set(currentSessionId, { history: [] })
        }
        const activeContext = this.chatSessions.get(currentSessionId)!
        activeContext.history.push(message)
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
            
            const currentSessionId = this.activeSessionId || this.sessionIds[0] || ''
            if (!currentSessionId || !this.chatSessions.has(currentSessionId)) {
                console.error('No active session found when creating agent group')
                return
            }

            const groupId = `group-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
            this.currentGroupId = groupId
            const sessionContext = this.chatSessions.get(currentSessionId)!
            this.currentUserMessageIndex = sessionContext.history.length - 1

            const roles = matchingAgents.length > 0 
                ? matchingAgents.map(a => a.role)
                : ['assistant']

            const group: AgentResponseGroup = {
                id: groupId,
                sessionId: currentSessionId,
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



    private renderMessage(context: ChatHistory, message: ChatMessage, index?: number, isStreaming?: boolean, showHeader: boolean = true) {
        const messageIndex = index ?? context.history.indexOf(message);
        return html`
            <ai-chat-message
                .message="${message}"
                .isStreaming="${isStreaming || false}"
                .showHeader="${showHeader}"
                .messageIndex="${messageIndex}"
                @attention-response="${(e: CustomEvent) => {
                    this.handleAttentionResponse(e.detail.messageIndex, e.detail.requestIndex, e.detail.request, e.detail.response);
                }}"
                @resend="${(e: CustomEvent) => {
                    this.handleResend(e.detail.message);
                }}">
            </ai-chat-message>
        `;
    }

    private async handleResend(message: ChatMessage) {
        if (!message || message.role !== 'user') return;
        await this.handlePrompt(message.content);
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
                <ai-settings-dialog
                    .open="${this.settingsDialogOpen}"
                    .providers="${this.providers || []}"
                    .selectedProviderName="${this.settingsProviderName || ''}"
                    .selectedModel="${this.settingsModel || ''}"
                    .availableModels="${this.availableModels}"
                    .loadingModels="${this.loadingModels}"
                    @provider-change="${(e: CustomEvent) => this.onProviderChange(e.detail.providerName)}"
                    @model-change="${(e: CustomEvent) => this.onModelChange(e.detail.model)}"
                    @save="${(e: CustomEvent) => {
                        this.settingsProviderName = e.detail.providerName;
                        this.settingsModel = e.detail.model;
                        this.saveSettingsAndClose();
                    }}"
                    @cancel="${() => this.closeSettingsDialog()}">
                </ai-settings-dialog>
                
                ${when(!this.selectedProvider, () => html`
                    <ai-empty-state
                        message="No AI provider configured"
                        hint="Click the settings button to configure">
                    </ai-empty-state>
                `)}

                ${when(this.sessionIds.length > 0, () => html`
                    <wa-tab-group 
                        active="${this.activeSessionId || this.sessionIds[0] || ''}" 
                        @wa-tab-show="${(e: CustomEvent) => {
                            const panel = e.detail.panel as string
                            if (panel && this.chatSessions.has(panel)) {
                                this.activeSessionId = panel
                                this.inputValue = ''
                                this.requestUpdate()
                            }
                        }}"
                        @wa-tab-hide="${(e: CustomEvent) => {
                            const panel = e.detail.panel as string
                            if (panel === this.activeSessionId) {
                                const nextSession = this.sessionIds.find(id => id !== panel)
                                if (nextSession) {
                                    this.activeSessionId = nextSession
                                    this.requestUpdate()
                                }
                            }
                        }}">
                        ${repeat(this.sessionIds, (sessionId) => sessionId, (sessionId, index) => html`
                            <wa-tab panel="${sessionId}">
                                <span>Chat ${index + 1}</span>
                                ${when(this.sessionIds.length > 1, () => html`
                                    <wa-icon 
                                        name="xmark" 
                                        label="Close"
                                        @click="${(e: Event) => {
                                            e.stopPropagation()
                                            this.deleteSession(sessionId)
                                        }}">
                                    </wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${sessionId}">
                                <wa-scroller class="chat-messages" orientation="vertical">
                                    ${(() => {
                                        const sessionContext = this.chatSessions.get(sessionId) || { history: [] }
                                        return html`
                                            <div class="chat-content">
                                                ${sessionContext.history.map((message, index) => {
                                                    if (message.role === "user") {
                                                        const group = Array.from(this.agentResponseGroups.values()).find(g => 
                                                            g.sessionId === sessionId && g.userMessageIndex === index && g.userMessage === message
                                                        )
                                                        if (group) {
                                                            return html`
                                                                <ai-chat-message
                                                                    .message="${message}"
                                                                    .isStreaming="${false}"
                                                                    .showHeader="${true}"
                                                                    .messageIndex="${index}"
                                                                    @resend="${(e: CustomEvent) => {
                                                                        this.handleResend(e.detail.message);
                                                                    }}">
                                                                </ai-chat-message>
                                                                <ai-agent-response-group
                                                                    .group="${group}"
                                                                    .findStreamingMessage="${(role: string) => this.findStreamingMessage(role)}">
                                                                </ai-agent-response-group>
                                                            `
                                                        }
                                                    }
                                                    
                                                    const group = Array.from(this.agentResponseGroups.values()).find(g => 
                                                        g.sessionId === sessionId && g.messageIndices.get(message.role) === index
                                                    )
                                                    if (group) {
                                                        return html``
                                                    }
                                                    return this.renderMessage(sessionContext, message, index)
                                                })}
                                                ${when(this.activeSessionId === sessionId, () => html`
                                                    ${Array.from(this.streamingMessages.values()).map(msg => {
                                                        const inGroup = Array.from(this.agentResponseGroups.values()).some(g => 
                                                            g.sessionId === sessionId && g.agents.has(msg.message.role)
                                                        )
                                                        if (inGroup) {
                                                            return html``
                                                        }
                                                        const sessionContext = this.chatSessions.get(sessionId) || { history: [] }
                                                        return this.renderMessage(sessionContext, msg.message, -1, msg.isStreaming)
                                                    })}
                                                    ${when(this.busy && this.streamingMessages.size === 0, () => html`
                                                        <ai-loading-indicator></ai-loading-indicator>
                                                    `)}
                                                `)}
                                            </div>
                                        `
                                    })()}
                                </wa-scroller>
                            </wa-tab-panel>
                        `)}
                        <wa-button 
                            slot="nav"
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="New Chat"
                            @click="${() => {
                                this.createNewSession()
                                this.requestUpdate()
                            }}">
                            <wa-icon name="plus" label="New Chat"></wa-icon>
                        </wa-button>
                    </wa-tab-group>
                    <ai-chat-input
                        .value="${this.inputValue}"
                        .disabled="${this.busy}"
                        .busy="${this.busy}"
                        .hasProvider="${!!this.selectedProvider}"
                        @input-change="${(e: CustomEvent) => { this.inputValue = e.detail.value }}"
                        @send="${() => this.sendMessage()}"
                        @cancel="${() => this.cancelStream()}"
                        @open-settings="${() => this.openSettingsDialog()}">
                    </ai-chat-input>
                `)}
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

        wa-scroller.chat-messages {
            position: absolute;
            top: 0;
            left: 0;
            right: var(--wa-scrollbar-width, 15px);
            bottom: 0;
        }

        .chat-content {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        wa-tab-group {
            flex: 1;
            min-height: 0;
            display: flex;
            flex-direction: column;
        }

        wa-tab-group::part(base) {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            height: 100%;
            width: 100%;
        }

        wa-tab-panel[active] {
            display: grid;
            grid-template-rows: minmax(0, 1fr);
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
            --wa-scrollbar-width: 10px;
        }

        wa-tab::part(base) {
            padding: 3px 0.5rem;
        }

        wa-tab-panel {
            --padding: 0px;
        }

        ai-chat-input {
            flex-shrink: 0;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-aiview': KAView
    }
}

