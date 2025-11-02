import { css, html, PropertyValues, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { KPart } from "../../../parts/k-part";
import { when } from "lit/directives/when.js";
import { repeat } from "lit/directives/repeat.js";
import '../../ai-system/components';
import {
    ChatMessage,
    ChatHistory,
    ChatProvider,
    TOPIC_AICONFIG_CHANGED,
} from "../core";
import { aiService } from "../service/ai-service";
import { toastError, toastInfo } from "../../../core/toast";
import { topic } from "../../../core/events";
import { taskService } from "../../../core/taskservice";
import {
    commandRegistry as globalCommandRegistry,
    CommandRegistry,
} from "../../../core/commandregistry";
import { uiContext } from "../../../core/di";

import { SessionManager } from "./session-manager";
import { StreamManager } from "./stream-manager";
import { ProviderManager } from "./provider-manager";
import { AgentGroupManager } from "./agent-group-manager";
import { confirmDialog } from "../../../core/dialog";

@customElement('k-aiview')
export class KAView extends KPart {
    private sessionManager = new SessionManager();
    private streamManager = new StreamManager(() => this.requestUpdate());
    private providerManager = new ProviderManager(aiService);
    private agentGroupManager = new AgentGroupManager();

    @state()
    private busy: boolean = false;

    @state()
    private inputValue: string = '';

    @state()
    private settingsDialogOpen: boolean = false;

    @state()
    private requireToolApproval: boolean = true;

    @state()
    private pendingToolApprovals = new Map<string, {
        role: string;
        request: import("../core/interfaces").ToolApprovalRequest;
        resolve: (approved: boolean) => void;
    }>();

    private abortController?: AbortController;

    @topic(TOPIC_AICONFIG_CHANGED)
    public onAIConfigChanged() {
        this.doBeforeUI();
    }

    protected async doBeforeUI() {
        if (this.sessionManager.getSessionCount() === 0) {
            this.sessionManager.createSession();
        }
        await this.providerManager.initialize();
        await this.loadSettings();
        this.requestUpdate();
    }

    private async loadSettings(): Promise<void> {
        const { appSettings } = await import("../../../core/settingsservice");
        const settings: import("./provider-manager").AIViewSettings = 
            await appSettings.get('aiViewChat') || {};
        this.requireToolApproval = settings.requireToolApproval !== undefined ? settings.requireToolApproval : true;
    }

    private createNewSession(): void {
        this.sessionManager.createSession();
        this.inputValue = '';
        this.requestUpdate();
    }

    private deleteSession(sessionId: string): void {
        if (!this.sessionManager.deleteSession(sessionId)) {
            toastError('Cannot delete the last session');
            return;
        }
        this.inputValue = '';
        this.requestUpdate();
    }

    private scrollToBottom(): void {
        requestAnimationFrame(() => {
            const activeSessionId = this.sessionManager.getActiveSessionId();
            if (!activeSessionId) return;
            
            const tabPanel = this.shadowRoot?.querySelector(`wa-tab-panel[name="${activeSessionId}"]`);
            const scroller = tabPanel?.querySelector('wa-scroller.chat-messages') as any;
            if (scroller) {
                const scrollContainer = scroller.shadowRoot?.querySelector('.scroll-container') as HTMLElement;
                if (scrollContainer) {
                    scrollContainer.scrollTop = scrollContainer.scrollHeight;
                } else if (scroller.scrollTo) {
                    scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' });
                }
            }
        });
    }

    protected updated(changedProperties: PropertyValues) {
        super.updated(changedProperties);
        if (changedProperties.has('busy')) {
            this.scrollToBottom();
        }
    }

    private async sendMessage(): Promise<void> {
        const prompt = this.inputValue.trim();
        if (!prompt || this.busy) return;

        let activeSessionId = this.sessionManager.getActiveSessionId();
        
        if (!activeSessionId) {
            this.createNewSession();
            activeSessionId = this.sessionManager.getActiveSessionId();
        } else {
            const tabGroup = this.shadowRoot?.querySelector('wa-tab-group') as any;
            if (tabGroup?.active) {
                activeSessionId = tabGroup.active;
                this.sessionManager.setActiveSession(activeSessionId);
            }
        }

        if (!activeSessionId) return;

        this.inputValue = '';
        this.requestUpdate();

        await this.handlePrompt(prompt);
    }

    private async runCommand(prompt: string, commandRegistry?: CommandRegistry): Promise<void> {
        const currentCommandRegistry = commandRegistry || globalCommandRegistry;
        const splits = prompt.trim().split(/\s+/);
        if (splits.length === 0) return;

        const commandId = splits.shift()!;
        const command = currentCommandRegistry.getCommand(commandId);
        
        if (!command) {
            toastError("Command not found: " + commandId);
            return;
        }
        
        const params: Record<string, string> = {};
        if (command.parameters) {
            splits.forEach((c, i) => {
                if (command.parameters && command.parameters[i]) {
                    params[command.parameters[i].name] = c;
                }
            });
        }
        
        const context = currentCommandRegistry.createExecutionContext(this, params);
        await currentCommandRegistry.execute(commandId, context);
        this.requestUpdate();
    }

    public async handlePrompt(prompt: string): Promise<void> {
        if (prompt.startsWith("/")) {
            await this.runCommand(prompt.substring(1), globalCommandRegistry);
            return;
        }

        const selectedProvider = this.providerManager.getSelectedProvider();
        if (!selectedProvider) {
            toastError('Please configure AI provider in settings');
            return;
        }

        let activeSessionId = this.sessionManager.getActiveSessionId();
        
        if (!activeSessionId) {
            this.createNewSession();
            activeSessionId = this.sessionManager.getActiveSessionId();
        } else {
            const tabGroup = this.shadowRoot?.querySelector('wa-tab-group') as any;
            if (tabGroup?.active) {
                activeSessionId = tabGroup.active;
                this.sessionManager.setActiveSession(activeSessionId);
            }
        }
        
        if (!activeSessionId) {
            return;
        }

        const message = aiService.createMessage(prompt);
        const sessionId = activeSessionId;
        const session = this.sessionManager.getSession(sessionId);
        if (!session) return;

        session.history.push(message);

        if (session.history.length === 1) {
            const title = this.sessionManager.generateTitle(prompt);
            this.sessionManager.setSessionTitle(sessionId, title);
        }

        this.requestUpdate();
        this.busy = true;

        this.abortController = new AbortController();
        const streamingAgents = new Map<string, number>();

        const chatContext: ChatHistory = { history: [...session.history] };

        taskService.runAsync("Calling AI assistant", async () => {
            const execContext = globalCommandRegistry.createExecutionContext(this);
            const callContext = uiContext.createChild({ ...execContext });

            const contributions = aiService.getAgentContributions();
            const matchingAgents = contributions.filter(contrib => {
                if (contrib.canHandle) {
                    return contrib.canHandle({ ...callContext.getProxy(), userPrompt: prompt });
                }
                return true;
            }).sort((a, b) => (b.priority || 0) - (a.priority || 0));

            const roles = matchingAgents.length > 0 
                ? matchingAgents.map(a => a.role)
                : ['assistant'];

            const currentSession = this.sessionManager.getSession(sessionId);
            if (!currentSession) return;

            const groupId = this.agentGroupManager.createGroup(
                sessionId,
                currentSession.history.length - 1,
                message,
                roles,
                (role: string) => {
                    const contrib = contributions.find(c => c.role === role);
                    return {
                        label: contrib?.label || role,
                        icon: contrib?.icon || 'robot'
                    };
                }
            );

            return aiService.executeAgentWorkflow({
                chatContext: chatContext,
                chatConfig: selectedProvider,
                callContext: callContext,
                execution: 'parallel',
                stream: true,
                signal: this.abortController!.signal,
                roles,
                requireToolApproval: this.requireToolApproval,
                onToolApprovalRequest: async (role: string, request: import("../core/interfaces").ToolApprovalRequest): Promise<boolean> => {
                    return new Promise<boolean>((resolve) => {
                        const approvalId = `approval-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                        this.pendingToolApprovals.set(approvalId, { role, request, resolve });
                        this.requestUpdate();
                    });
                },
                onAgentStart: (role: string) => {
                    const streamIndex = this.streamManager.createStreamingMessage(role, sessionId);
                    streamingAgents.set(role, streamIndex);
                    
                    this.agentGroupManager.updateAgentStatus(groupId, role, 'streaming');
                    this.requestUpdate();
                },
                onToken: (role: string, token: string) => {
                    const streamIndex = streamingAgents.get(role);
                    if (streamIndex !== undefined) {
                        this.streamManager.updateStreamingMessage(streamIndex, token);
                    }
                    this.requestUpdate();
                },
                onAgentComplete: (role: string, message: ChatMessage) => {
                    const targetSession = this.sessionManager.getSession(sessionId);
                    if (!targetSession) return;
                    
                    const streamIndex = streamingAgents.get(role);
                    if (streamIndex !== undefined) {
                        this.streamManager.completeStreamingMessage(streamIndex, message);
                        const messageIndex = targetSession.history.length;
                        targetSession.history.push(message);
                        streamingAgents.delete(role);
                        this.streamManager.removeStreamingMessage(streamIndex);
                        
                        this.agentGroupManager.updateAgentStatus(groupId, role, 'completed', message, messageIndex);
                        this.requestUpdate();
                    }
                },
                onAgentError: (role: string, error: Error) => {
                    const targetSession = this.sessionManager.getSession(sessionId);
                    if (!targetSession) return;
                    
                    const streamIndex = streamingAgents.get(role);
                    if (streamIndex !== undefined) {
                        this.streamManager.removeStreamingMessage(streamIndex);
                        streamingAgents.delete(role);
                    }
                    
                    this.agentGroupManager.updateAgentStatus(groupId, role, 'error', {
                        role,
                        content: `Error: ${error.message}`
                    });
                    
                    this.requestUpdate();
                    toastError(`Agent ${role} error: ${error.message}`);
                }
            }).then(() => {
                this.agentGroupManager.clearCurrentGroup();
            });
        }).catch((error: any) => {
            if (error?.name !== 'AbortError') {
                toastError(`${error}`);
            }
        }).finally(() => {
            this.busy = false;
            this.abortController = undefined;
            this.streamManager.clearForSession(sessionId);
            this.agentGroupManager.clearCurrentGroup();
            this.requestUpdate();
        });
    }

    private cancelStream(): void {
        if (this.abortController) {
            this.abortController.abort();
            this.abortController = undefined;
            this.busy = false;
        }
        this.streamManager.cancelUpdates();
    }

    private async openSettingsDialog(): Promise<void> {
        this.settingsDialogOpen = true;
        const selectedProvider = this.providerManager.getSelectedProvider();
        const providerName = selectedProvider?.name || this.providerManager.getProviders()[0]?.name;
        
        if (providerName) {
            this.providerManager.setSettingsProviderName(providerName);
            if (selectedProvider?.model) {
                this.providerManager.setSettingsModel(selectedProvider.model);
            }
            try {
                await this.providerManager.fetchModels(providerName);
            } catch (error) {
                toastError(`Failed to fetch models: ${error}`);
            }
        }
        this.requestUpdate();
    }

    private closeSettingsDialog(): void {
        this.settingsDialogOpen = false;
        this.providerManager.resetModelSelection();
        this.requestUpdate();
    }

    private async onProviderChange(providerName: string): Promise<void> {
        this.providerManager.setSettingsProviderName(providerName);
        this.providerManager.setSettingsModel(undefined);
        this.providerManager.resetModelSelection();
        try {
            await this.providerManager.fetchModels(providerName);
        } catch (error) {
            toastError(`Failed to fetch models: ${error}`);
        }
        this.requestUpdate();
    }

    private async onModelChange(event: Event): Promise<void> {
        const target = event.target as any;
        this.providerManager.setSettingsModel(target.value);
    }

    private async saveSettingsAndClose(): Promise<void> {
        const providerName = this.providerManager.getSettingsProviderName();
        const model = this.providerManager.getSettingsModel();
        
        if (!providerName || !model) {
            toastError('Please select both provider and model');
            return;
        }

        await this.providerManager.saveSettings(providerName, model, this.requireToolApproval);
        this.settingsDialogOpen = false;
        toastInfo('Settings saved');
        this.requestUpdate();
    }

    private renderMessage(session: any, message: ChatMessage, index: number, isStreaming?: boolean): TemplateResult {
        return html`
            <ai-chat-message
                .message="${message}"
                .isStreaming="${isStreaming || false}"
                .showHeader="${true}"
                .messageIndex="${index}"
                @resend="${(e: CustomEvent) => {
                    this.handleResend(e.detail.message);
                }}">
            </ai-chat-message>
        `;
    }

    private async handleResend(message: ChatMessage): Promise<void> {
        if (!message || message.role !== 'user') return;
        
        let activeSessionId = this.sessionManager.getActiveSessionId();
        
        if (!activeSessionId) {
            this.createNewSession();
            activeSessionId = this.sessionManager.getActiveSessionId();
        } else {
            const tabGroup = this.shadowRoot?.querySelector('wa-tab-group') as any;
            if (tabGroup?.active) {
                activeSessionId = tabGroup.active;
                this.sessionManager.setActiveSession(activeSessionId);
            }
        }
        
        if (!activeSessionId) return;
        
        await this.handlePrompt(message.content);
    }

    render() {
        const sessionIds = this.sessionManager.getAllSessionIds();
        const activeSessionId = this.sessionManager.getActiveSessionId();
        const selectedProvider = this.providerManager.getSelectedProvider();

        return html`
            <div class="chat-container">
                ${when(this.settingsDialogOpen, () => html`
                    <ai-settings-dialog
                        .open="${this.settingsDialogOpen}"
                        .providers="${this.providerManager.getProviders()}"
                        .selectedProviderName="${this.providerManager.getSettingsProviderName() || ''}"
                        .selectedModel="${this.providerManager.getSettingsModel() || ''}"
                        .availableModels="${this.providerManager.getAvailableModels()}"
                        .loadingModels="${this.providerManager.isLoadingModels()}"
                        .requireToolApproval="${this.requireToolApproval}"
                        @provider-change="${(e: CustomEvent) => this.onProviderChange(e.detail.providerName)}"
                        @model-change="${(e: CustomEvent) => this.onModelChange(e)}"
                        @tool-approval-change="${(e: CustomEvent) => {
                            this.requireToolApproval = e.detail.value;
                            this.requestUpdate();
                        }}"
                        @save="${(e: CustomEvent) => {
                            this.providerManager.setSettingsProviderName(e.detail.providerName);
                            this.providerManager.setSettingsModel(e.detail.model);
                            this.saveSettingsAndClose();
                        }}"
                        @cancel="${() => this.closeSettingsDialog()}">
                    </ai-settings-dialog>
                `)}
                
                ${when(!selectedProvider, () => html`
                    <ai-empty-state
                        message="No AI provider configured"
                        hint="Click the settings button to configure">
                    </ai-empty-state>
                `)}

                ${when(sessionIds.length > 0, () => html`
                    <wa-tab-group 
                        active="${activeSessionId || sessionIds[0] || ''}" 
                        @wa-tab-show="${(e: CustomEvent) => {
                            const panel = e.detail.panel as string;
                            const session = this.sessionManager.getSession(panel);
                            if (session) {
                                this.sessionManager.setActiveSession(panel);
                                this.inputValue = '';
                                this.requestUpdate();
                            }
                        }}">
                        ${repeat(sessionIds, (sessionId) => sessionId, (sessionId, index) => {
                            const session = this.sessionManager.getSession(sessionId);
                            if (!session) return html``;
                            
                            return html`
                                <wa-tab panel="${sessionId}">
                                    <span>${this.sessionManager.getSessionTitle(sessionId) || `Chat ${index + 1}`}</span>
                                    ${when(sessionIds.length > 1, () => html`
                                        <wa-icon 
                                            name="xmark" 
                                            label="Close"
                                            @click="${(e: Event) => {
                                                e.stopPropagation();
                                                this.deleteSession(sessionId);
                                            }}">
                                        </wa-icon>
                                    `)}
                                </wa-tab>
                                <wa-tab-panel name="${sessionId}">
                                    <wa-scroller class="chat-messages" orientation="vertical">
                                        <div class="chat-content">
                                            ${session.history.map((message: ChatMessage, idx: number) => {
                                                const group = this.agentGroupManager.findGroupForUserMessage(sessionId, idx, message);
                                                if (group && message.role === "user") {
                                                    return html`
                                                        <ai-chat-message
                                                            .message="${message}"
                                                            .isStreaming="${false}"
                                                            .showHeader="${true}"
                                                            .messageIndex="${idx}"
                                                            @resend="${(e: CustomEvent) => {
                                                                this.handleResend(e.detail.message);
                                                            }}">
                                                        </ai-chat-message>
                                                        <ai-agent-response-group
                                                            .group="${group}"
                                                            .findStreamingMessage="${(role: string) => this.streamManager.findStreamingMessage(role)}">
                                                        </ai-agent-response-group>
                                                    `;
                                                }
                                                
                                                const msgGroup = this.agentGroupManager.findGroupForMessage(sessionId, message.role, idx);
                                                if (msgGroup) {
                                                    return html``;
                                                }
                                                
                                                return this.renderMessage(session, message, idx);
                                            })}
                                            ${this.streamManager.getAllStreamingMessages()
                                                .filter(msg => msg.sessionId === sessionId && 
                                                    !Array.from(this.agentGroupManager.getAllGroups())
                                                        .some(g => g.sessionId === sessionId && g.agents.has(msg.message.role)))
                                                .map(msg => {
                                                    const session = this.sessionManager.getSession(sessionId);
                                                    return this.renderMessage(session, msg.message, -1, msg.isStreaming);
                                                })}
                                            ${when(activeSessionId === sessionId && this.busy && this.streamManager.getAllStreamingMessages().filter(msg => msg.sessionId === sessionId).length === 0, () => html`
                                                <ai-loading-indicator></ai-loading-indicator>
                                            `)}
                                        </div>
                                    </wa-scroller>
                                </wa-tab-panel>
                            `;
                        })}
                        <wa-button 
                            slot="nav"
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="New Chat"
                            @click="${() => {
                                this.createNewSession();
                                this.requestUpdate();
                            }}">
                            <wa-icon name="plus" label="New Chat"></wa-icon>
                        </wa-button>
                    </wa-tab-group>
                    ${this.pendingToolApprovals.size > 0 ? html`
                        <div class="tool-approval-banner">
                            ${Array.from(this.pendingToolApprovals.entries()).map(([approvalId, approval]) => {
                                const toolList = approval.request.toolCalls.map(tc => {
                                    const args = tc.function.arguments || "{}";
                                    let parsedArgs: any = {};
                                    try {
                                        parsedArgs = JSON.parse(args);
                                    } catch (e) {
                                        parsedArgs = {};
                                    }
                                    const argsStr = Object.entries(parsedArgs).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join(", ");
                                    return `${tc.function.name}${argsStr ? `(${argsStr})` : "()"}`;
                                }).join(", ");
                                
                                return html`
                                    <div class="approval-notification">
                                        <div class="approval-content">
                                            <wa-icon name="question-circle" class="approval-icon"></wa-icon>
                                            <div class="approval-message">
                                                <strong>Tool execution pending:</strong>
                                                <span class="tool-list">${toolList}</span>
                                            </div>
                                        </div>
                                        <div class="approval-actions">
                                            <wa-button
                                                variant="default"
                                                size="small"
                                                @click="${() => {
                                                    approval.resolve(false);
                                                    this.pendingToolApprovals.delete(approvalId);
                                                    this.requestUpdate();
                                                }}">
                                                Cancel
                                            </wa-button>
                                            <wa-button
                                                variant="brand"
                                                size="small"
                                                @click="${() => {
                                                    approval.resolve(true);
                                                    this.pendingToolApprovals.delete(approvalId);
                                                    this.requestUpdate();
                                                }}">
                                                Approve
                                            </wa-button>
                                        </div>
                                    </div>
                                `;
                            })}
                        </div>
                    ` : ''}
                    <ai-chat-input
                        .value="${this.inputValue}"
                        .disabled="${this.busy}"
                        .busy="${this.busy}"
                        .hasProvider="${!!selectedProvider}"
                        @input-change="${(e: CustomEvent) => { this.inputValue = e.detail.value }}"
                        @send="${() => this.sendMessage()}"
                        @cancel="${() => this.cancelStream()}"
                        @open-settings="${() => this.openSettingsDialog()}">
                    </ai-chat-input>
                `)}
            </div>
        `;
    }

    static styles = css`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .toolbar {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }

        .toolbar wa-button {
            flex-shrink: 0;
        }

        .tool-approval-banner {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            background-color: var(--wa-color-warning-fill-quiet);
            border-top: solid var(--wa-border-width-s) var(--wa-color-warning-border-normal);
        }

        .approval-notification {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 0.5rem;
            background-color: var(--wa-color-surface-default);
            border-radius: 0.25rem;
            border: solid var(--wa-border-width-s) var(--wa-color-warning-border-normal);
        }

        .approval-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex: 1;
            min-width: 0;
        }

        .approval-icon {
            color: var(--wa-color-warning-60);
            flex-shrink: 0;
        }

        .approval-message {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.875rem;
            min-width: 0;
        }

        .approval-message strong {
            color: var(--wa-color-text-normal);
        }

        .approval-message .tool-list {
            color: var(--wa-color-text-quiet);
            font-family: monospace;
            font-size: 0.8125rem;
            word-break: break-all;
        }

        .approval-actions {
            display: flex;
            gap: 0.5rem;
            flex-shrink: 0;
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
        'k-aiview': KAView;
    }
}

