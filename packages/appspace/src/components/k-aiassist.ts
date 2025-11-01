import {css, html, PropertyValues, TemplateResult} from 'lit'
import {customElement, state, query} from 'lit/decorators.js'
import {KPart} from "../parts/k-part";

import {marked} from "marked";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {
    ChatContext,
    ChatMessage,
    ChatProvider,
    chatService,
    TOPIC_AICONFIG_CHANGED
} from "../core/chatservice";
import {toastError, toastInfo} from "../core/toast";
import {when} from "lit/directives/when.js";
import {topic} from "../core/events";
import {taskService} from "../core/taskservice";
import {activePartSignal} from "../core/appstate";
import {
    commandRegistry as globalCommandRegistry,
    CommandRegistry
} from "../core/commandregistry";
import {uiContext} from "../core/di";
import {watching} from "../core/signals";
import {appSettings} from "../core/settingsservice";

interface AIAssistSettings {
    providerName?: string;
    model?: string;
}

interface ModelInfo {
    id: string;
    name?: string;
}

@customElement('k-aiassist')
export class KAIAssist extends KPart {
    private defaultChatContext: ChatContext = {
        history: []
    }

    @state()
    private chatContext: ChatContext = this.defaultChatContext

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

    @query('.chat-messages')
    private messagesContainer?: HTMLElement

    @query('wa-textarea')
    private textareaElement?: any

    private readonly SETTINGS_KEY = 'aiAssistChat'

    @topic(TOPIC_AICONFIG_CHANGED)
    public onAIConfigChanged() {
        this.doBeforeUI()
    }

    @watching(activePartSignal)
    protected onPartChanged(part: KPart) {
        if (!!part && "chatContext" in part) {
            this.chatContext = part.chatContext as ChatContext
        } else {
            this.chatContext = this.defaultChatContext
        }
    }

    protected async doBeforeUI() {
        this.providers = await chatService.getProviders() || []
        await this.loadSettings()
    }

    private async loadSettings() {
        const settings: AIAssistSettings = await appSettings.get(this.SETTINGS_KEY) || {}
        
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
            const defaultProvider = await chatService.getDefaultProvider()
            this.selectedProvider = defaultProvider
            await this.saveSettings(defaultProvider.name, defaultProvider.model)
        }
    }

    private async saveSettings(providerName: string, model: string) {
        const settings: AIAssistSettings = {
            providerName,
            model
        }
        await appSettings.set(this.SETTINGS_KEY, settings)
    }

    protected updated(changedProperties: PropertyValues) {
        super.updated(changedProperties)
        
        if (changedProperties.has('chatContext') || changedProperties.has('busy')) {
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
        
        const params = {}
        splits.forEach((c, i) => {
            // @ts-ignore
            params[command.parameters[i].name] = c
        })
        
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

        const message = chatService.createMessage(prompt)
        this.chatContext.history.push(message)
        this.requestUpdate()
        this.busy = true

        const activePart = activePartSignal.get();
        const callContext = uiContext.createChild({
            activePart: activePart,
            activeEditor: activePart?.isEditor ? activePart : null
        })
        
        taskService.runAsync("Calling AI assistant", _progress => 
            chatService.handleUserPrompt({
                chatContext: this.chatContext,
                chatConfig: this.selectedProvider,
                callContext: callContext
            }).then(_message => {
                this.requestUpdate()
            })
        ).catch((error: Response) => {
            toastError(`${error}`)
        }).finally(() => {
            this.busy = false
            callContext.destroy()
        })
    }

    private async openSettingsDialog() {
        const currentSettings: AIAssistSettings = await appSettings.get(this.SETTINGS_KEY) || {}
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
            await chatService.setDefaultProvider(this.settingsProviderName)
        }
        
        this.settingsDialogOpen = false
        toastInfo('Settings saved')
    }

    private copyToClipboard(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            // Could add a toast notification here
        }).catch((err) => {
            toastError(`Failed to copy: ${err}`)
        })
    }

    private formatTimestamp(date: Date = new Date()): string {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    private renderMessage(message: ChatMessage) {
        const isUser = message.role === "user"
        const contribution = chatService.getPromptContribution(message.role)
        const roleName = contribution?.label || message.role
        
        return html`
            <div class="message-wrapper ${isUser ? 'user' : 'assistant'}">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-icon 
                            name="${isUser ? 'user' : 'robot'}" 
                            label="${roleName}">
                        </wa-icon>
                        <span class="role-name">${roleName}</span>
                        <span class="timestamp">${this.formatTimestamp()}</span>
                    </div>
                    <div class="message-actions">
                        <wa-button
                            appearance="plain"
                            size="small"
                            @click="${() => this.copyToClipboard(message.content)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                        ${when(message.actions?.length, () => html`
                            ${message.actions?.map(a => html`
                                <wa-button
                                    appearance="plain"
                                    size="small"
                                    @click="${() => a.action()}">
                                    <wa-icon name="${a.icon}" label="${a.label}"></wa-icon>
                                </wa-button>
                            `)}
                        `)}
                    </div>
                </div>
                <div class="message-content">
                    ${unsafeHTML(marked.parse(message.content) as string)}
                </div>
            </div>
        `
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
            <wa-dialog label="AI Assistant Settings" open @wa-request-close="${this.closeSettingsDialog}">
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
                        <wa-button variant="default" @click="${this.closeSettingsDialog}">
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click="${this.saveSettingsAndClose}">
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
                    ${this.chatContext.history.map((message) => 
                        this.renderMessage(message)
                    )}
                    ${when(this.busy, () => this.renderLoadingIndicator())}
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
                        
                        <wa-button
                            appearance="plain"
                            size="medium"
                            ?disabled="${!this.inputValue.trim() || this.busy || !this.selectedProvider}"
                            @click="${this.sendMessage}">
                            <wa-icon name="paper-plane" label="Send"></wa-icon>
                        </wa-button>

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
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            color: var(--wa-color-neutral-60);
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
            color: var(--wa-color-neutral-60);
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
            border-radius: 0.75rem;
            font-size: 0.9rem;
            line-height: 1.5;
            word-wrap: break-word;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            border: 1px solid;
        }

        .message-wrapper.user .message-content {
            background-color: var(--wa-color-blue-50);
            color: white;
            border-color: var(--wa-color-blue-95);
        }

        .message-wrapper.assistant .message-content {
            background-color: var(--wa-color-gray-05);
            color: var(--wa-color-gray-90);
            border-color: var(--wa-color-gray-20);
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
            background-color: var(--wa-color-neutral-90);
            color: var(--wa-color-neutral-05);
            border-radius: 0.375rem;
            overflow-x: auto;
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
            background-color: rgba(0, 0, 0, 0.1);
            padding: 0.125rem 0.25rem;
            border-radius: 0.25rem;
        }

        .message-wrapper.user .message-content :not(pre) > code {
            background-color: rgba(255, 255, 255, 0.2);
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
            border-top: 1px solid var(--wa-color-neutral-20);
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
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-aiassist': KAIAssist
    }
}
