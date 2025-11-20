import { css, html, PropertyValues, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { KPart } from "../../../parts/k-part";
import { when } from "lit/directives/when.js";
import { repeat } from "lit/directives/repeat.js";
import './components';
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
import { confirmDialog } from "../../../dialogs";
import { t } from "../ai-system-extension";

@customElement('k-aiview')
export class KAView extends KPart {
    private sessionManager = new SessionManager();
    private scrollDebounceTimer?: ReturnType<typeof setTimeout>;
    
    private streamManager = new StreamManager(() => {
        this.requestUpdate();
        // Debounce scroll during streaming - only scroll every 100ms
        if (this.scrollDebounceTimer) {
            clearTimeout(this.scrollDebounceTimer);
        }
        this.scrollDebounceTimer = setTimeout(async () => {
            await this.updateComplete;
            this.scrollToBottom();
            this.scrollDebounceTimer = undefined;
        }, 100);
    });
    private providerManager = new ProviderManager(aiService);
    private agentGroupManager = new AgentGroupManager();

    @state()
    private busy: boolean = false;

    @state()
    private inputValue: string = '';

    @state()
    private requireToolApproval: boolean = true;
    private toolApprovalAllowlist: Set<string> = new Set();

    @state()
    private pendingToolApprovals = new Map<string, {
        role: string;
        request: import("../core/interfaces").ToolApprovalRequest;
        resolve: (approved: boolean) => void;
        allowListSelections: Map<string, boolean>;
    }>();

    private abortController?: AbortController;

    @topic(TOPIC_AICONFIG_CHANGED)
    public onAIConfigChanged() {
        this.doBeforeUI();
    }

    protected async doBeforeUI() {
        this.sessionManager.setSaveCallback(() => this.sessionManager.persistSessions());
        await this.sessionManager.loadSessions();
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
        const allowlist = await this.providerManager.loadToolApprovalAllowlist();
        this.toolApprovalAllowlist = new Set(allowlist);
    }

    private createNewSession(): void {
        this.sessionManager.createSession();
        this.inputValue = '';
        this.requestUpdate();
    }

    private async deleteSession(sessionId: string): Promise<void> {
        if (!(await this.sessionManager.deleteSession(sessionId))) {
            toastError('Cannot delete the last session');
            return;
        }
        this.inputValue = '';
        this.requestUpdate();
    }

    private async scrollToBottom(): Promise<void> {
        await this.updateComplete;
        const activeSessionId = this.sessionManager.getActiveSessionId();
        if (!activeSessionId) return;
        
        const tabPanel = this.shadowRoot?.querySelector(`wa-tab-panel[name="${activeSessionId}"]`);
        const scroller = tabPanel?.querySelector('wa-scroller.chat-messages') as any;
        if (scroller) {
            // Try multiple methods to scroll
            const scrollContainer = scroller.shadowRoot?.querySelector('.scroll-container') as HTMLElement;
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight;
            } else if (scroller.scrollTo) {
                scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' });
            } else if (scroller.scrollTop !== undefined) {
                scroller.scrollTop = scroller.scrollHeight;
            }
        }
    }

    protected updated(changedProperties: PropertyValues) {
        super.updated(changedProperties);
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
        
        const context = currentCommandRegistry.createExecutionContext(params);
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

        await this.sessionManager.persistSessions();
        this.requestUpdate();
        await this.updateComplete;
        this.scrollToBottom();
        this.busy = true;

        this.abortController = new AbortController();
        const streamingAgents = new Map<string, number>();

        const chatContext: ChatHistory = { history: [...session.history] };

        taskService.runAsync("Calling AI assistant", async () => {
            const execContext = globalCommandRegistry.createExecutionContext();
            const callContext = uiContext.createChild({ ...execContext });

            const contributions = aiService.getAgentContributions();
            if (contributions.length === 0) {
                throw new Error('No agents are registered. The App Support agent should be available from the AI system extension.');
            }
            
            const matchingAgents = contributions.filter(contrib => {
                if (contrib.canHandle) {
                    return contrib.canHandle({ ...callContext.getProxy(), userPrompt: prompt });
                }
                return true;
            }).sort((a, b) => (b.priority || 0) - (a.priority || 0));

            if (matchingAgents.length === 0) {
                throw new Error(`No agents can handle the current context. Available agents: ${contributions.map(c => c.role).join(', ')}`);
            }

            const roles = matchingAgents.map(a => a.role);

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
                    const { ToolExecutor } = await import("../tools/tool-executor");
                    const executor = new ToolExecutor();
                    const execContext = globalCommandRegistry.createExecutionContext();
                    
                    const allAllowed = request.toolCalls.every(tc => {
                        const command = executor.findCommand(tc, execContext);
                        return command && this.toolApprovalAllowlist.has(command.id);
                    });
                    
                    if (allAllowed) {
                        return true;
                    }
                    
                    return new Promise<boolean>((resolve) => {
                        const approvalId = `approval-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                        this.pendingToolApprovals.set(approvalId, { 
                            role, 
                            request, 
                            resolve,
                            allowListSelections: new Map()
                        });
                        this.requestUpdate();
                    });
                },
                onAgentStart: async (role: string) => {
                    const streamIndex = this.streamManager.createStreamingMessage(role, sessionId);
                    streamingAgents.set(role, streamIndex);
                    
                    this.agentGroupManager.updateAgentStatus(groupId, role, 'streaming');
                    this.requestUpdate();
                    await this.updateComplete;
                    this.scrollToBottom();
                },
                onToken: (role: string, token: string) => {
                    const streamIndex = streamingAgents.get(role);
                    if (streamIndex !== undefined) {
                        this.streamManager.updateStreamingMessage(streamIndex, token);
                    }
                    this.requestUpdate();
                },
                onAgentComplete: async (role: string, message: ChatMessage) => {
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
                        await this.sessionManager.persistSessions();
                        this.requestUpdate();
                        await this.updateComplete;
                        this.scrollToBottom();
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
        }).finally(async () => {
            this.busy = false;
            this.abortController = undefined;
            this.streamManager.clearForSession(sessionId);
            this.agentGroupManager.clearCurrentGroup();
            await this.sessionManager.persistSessions();
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
        const { commandRegistry } = await import("../../../core/commandregistry");
        commandRegistry.execute("open_ai_config", {});
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
                                    <span>${this.sessionManager.getSessionTitle(sessionId) || `${t('CHAT')} ${index + 1}`}</span>
                                    ${when(sessionIds.length > 1, () => html`
                                        <wa-icon 
                                            name="xmark" 
                                            label="${t('CLOSE')}"
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
                        ${when(this.sessionManager.getArchivedSessionCount() > 0, () => html`
                            <wa-dropdown 
                                slot="nav"
                                placement="bottom-end">
                                <wa-button 
                                    slot="trigger"
                                    variant="neutral"
                                    appearance="plain"
                                    size="small"
                                    title="${t('ARCHIVED_SESSIONS')}"
                                    with-caret>
                                    <wa-icon name="clock-rotate-left" label="${t('ARCHIVED_SESSIONS')}"></wa-icon>
                                    <span style="margin-left: 0.25rem;">${this.sessionManager.getArchivedSessionCount()}</span>
                                </wa-button>
                                <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                                    ${t('ARCHIVED_SESSIONS')}
                                </h6>
                                ${this.sessionManager.getArchivedSessions().map(archived => html`
                                    <wa-dropdown-item 
                                        @click="${async () => {
                                            await this.sessionManager.restoreSession(archived.id);
                                            this.requestUpdate();
                                        }}">
                                        <wa-icon name="history" label="${t('RESTORE')}" slot="icon"></wa-icon>
                                        <span style="flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis;">
                                            ${archived.title}
                                        </span>
                                        <span style="font-size: 0.75rem; color: var(--wa-color-neutral-50); margin-left: 0.5rem;">
                                            ${new Date(archived.updatedAt).toLocaleDateString()}
                                        </span>
                                    </wa-dropdown-item>
                                `)}
                                <wa-divider></wa-divider>
                                <wa-dropdown-item 
                                    @click="${async () => {
                                        const count = this.sessionManager.getArchivedSessionCount();
                                        const plural = count > 1 ? 's' : '';
                                        if (await confirmDialog(t('DELETE_ALL_CONFIRM', { count: count.toString(), plural }))) {
                                            for (const archived of this.sessionManager.getArchivedSessions()) {
                                                await this.sessionManager.permanentlyDeleteSession(archived.id);
                                            }
                                            this.requestUpdate();
                                        }
                                    }}">
                                    <wa-icon name="trash" label="${t('DELETE_ALL_ARCHIVED')}" slot="icon"></wa-icon>
                                    <span>${t('DELETE_ALL_ARCHIVED')}</span>
                                </wa-dropdown-item>
                            </wa-dropdown>
                        `)}
                        <wa-button 
                            slot="nav"
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${t('NEW_CHAT')}"
                            @click="${() => {
                                this.createNewSession();
                                this.requestUpdate();
                            }}">
                            <wa-icon name="plus" label="${t('NEW_CHAT')}"></wa-icon>
                        </wa-button>
                    </wa-tab-group>
                `)}
                
                ${when(!selectedProvider, () => html`
                    <ai-empty-state
                        message="${t('NO_PROVIDER_CONFIGURED')}"
                        hint="${t('CLICK_SETTINGS_TO_CONFIGURE')}">
                    </ai-empty-state>
                `)}

                ${when(sessionIds.length > 0, () => html`
                    ${this.pendingToolApprovals.size > 0 ? html`
                        <div class="tool-approval-section">
                            ${Array.from(this.pendingToolApprovals.entries()).map(([approvalId, approval]) => {
                                const toolCalls = approval.request.toolCalls;
                                const toolCount = toolCalls.length;
                                const toolList = toolCalls.map(tc => {
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
                                
                                const plural = toolCount > 1 ? 's' : '';
                                const more = toolCount > 1 ? ', ...' : '';
                                const summaryText = t('TOOL_EXECUTION_PENDING', { 
                                    toolCount: toolCount.toString(), 
                                    plural, 
                                    toolName: toolCalls[0]?.function.name || '',
                                    more 
                                });
                                
                                return html`
                                    <wa-details class="approval-details">
                                        <span slot="summary" class="approval-summary">
                                            <span class="approval-summary-text">${summaryText}</span>
                                            <div class="approval-actions-inline">
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="brand"
                                                    @click="${(e: Event) => {
                                                        e.stopPropagation();
                                                        approval.resolve(false);
                                                        this.pendingToolApprovals.delete(approvalId);
                                                        this.requestUpdate();
                                                    }}">
                                                    <wa-icon name="xmark" label="${t('CANCEL')}"></wa-icon>
                                                </wa-button>
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="success"
                                                    @click="${async (e: Event) => {
                                                        e.stopPropagation();
                                                        for (const [toolCallId, isAllowed] of approval.allowListSelections.entries()) {
                                                            if (isAllowed) {
                                                                const toolCall = approval.request.toolCalls.find(tc => tc.id === toolCallId);
                                                                if (toolCall) {
                                                                    const { ToolExecutor } = await import("../tools/tool-executor");
                                                                    const executor = new ToolExecutor();
                                                                    const execContext = globalCommandRegistry.createExecutionContext();
                                                                    const command = executor.findCommand(toolCall, execContext);
                                                                    if (command) {
                                                                        this.toolApprovalAllowlist.add(command.id);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        
                                                        if (approval.allowListSelections.size > 0) {
                                                            const providerName = await this.providerManager.getSettingsProviderName();
                                                            const model = await this.providerManager.getSettingsModel();
                                                            await this.providerManager.saveSettings(
                                                                providerName || '',
                                                                model || '',
                                                                undefined,
                                                                this.requireToolApproval,
                                                                Array.from(this.toolApprovalAllowlist)
                                                            );
                                                        }
                                                        
                                                        approval.resolve(true);
                                                        this.pendingToolApprovals.delete(approvalId);
                                                        this.requestUpdate();
                                                    }}">
                                                    <wa-icon name="check" label="${t('APPROVE')}"></wa-icon>
                                                </wa-button>
                                            </div>
                                        </span>
                                        <div class="approval-content">
                                            <div class="approval-message">
                                                <strong>${t('AGENT_WANTS_TO_EXECUTE', { role: approval.role })}</strong>
                                                <ul class="tool-list">
                                                    ${toolCalls.map(tc => {
                                                        const args = tc.function.arguments || "{}";
                                                        let parsedArgs: any = {};
                                                        try {
                                                            parsedArgs = JSON.parse(args);
                                                        } catch (e) {
                                                            parsedArgs = {};
                                                        }
                                                        const argsStr = Object.entries(parsedArgs).length > 0
                                                            ? `(${Object.entries(parsedArgs).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join(", ")})`
                                                            : "()";
                                                        
                                                        const isSelected = approval.allowListSelections.get(tc.id) || false;
                                                        
                                                        return html`
                                                            <li class="tool-list-item">
                                                                <label class="tool-item-label">
                                                                    <wa-checkbox
                                                                        ?checked="${isSelected}"
                                                                        @change="${(e: Event) => {
                                                                            const checked = (e.target as HTMLInputElement).checked;
                                                                            approval.allowListSelections.set(tc.id, checked);
                                                                            this.requestUpdate();
                                                                        }}">
                                                                    </wa-checkbox>
                                                                    <span>${t('ALWAYS_ALLOW')}</span>
                                                                </label>
                                                                <code>${tc.function.name}${argsStr}</code>
                                                            </li>
                                                        `;
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </wa-details>
                                `;
                            })}
                        </div>
                    ` : ''}
                `)}
                
                ${when(sessionIds.length > 0, () => html`
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

        .chat-messages {
            margin-right: 0.5rem;
        }

        .toolbar {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }


        .tool-approval-section {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-warning-border-normal);
            background-color: var(--wa-color-warning-fill-quiet);
        }

        .approval-details {
            width: 100%;
        }

        .approval-summary {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            width: 100%;
        }

        .approval-summary-text {
            flex: 1;
            min-width: 0;
        }

        .approval-actions-inline {
            display: flex;
            gap: 0.5rem;
            flex-shrink: 0;
        }

        .approval-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0.75rem 0;
        }

        .approval-message {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.875rem;
        }

        .approval-message strong {
            color: var(--wa-color-text-normal);
        }

        .tool-list {
            margin: 0.5rem 0 0 1.5rem;
            padding: 0;
            list-style: disc;
        }

        .tool-list li {
            margin: 0.25rem 0;
        }

        .tool-list-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0.5rem 0;
        }

        .tool-item-label {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-size: 0.875rem;
            cursor: pointer;
        }

        .tool-list code {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            padding: 0.125rem 0.25rem;
            background-color: var(--wa-color-neutral-fill-subtle);
            border-radius: var(--wa-border-radius-s);
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

