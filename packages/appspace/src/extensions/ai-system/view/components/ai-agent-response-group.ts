import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { repeat } from 'lit/directives/repeat.js';
import type { ChatMessage } from '../../core/types';
import { t } from '../../ai-system-extension';
import './ai-agent-response-card';

interface AgentResponseInfo {
    role: string;
    label: string;
    icon: string;
    status: 'streaming' | 'completed' | 'error';
    message?: ChatMessage;
    messageIndex?: number;
}

interface AgentResponseGroup {
    id: string;
    userMessageIndex: number;
    userMessage: ChatMessage;
    timestamp: Date;
    agents: Map<string, AgentResponseInfo>;
    messageIndices: Map<string, number>;
}

@customElement('ai-agent-response-group')
export class AIAgentResponseGroup extends LitElement {
    @property({ type: Object, attribute: false })
    public group?: AgentResponseGroup;

    @property({ type: Function, attribute: false })
    public findStreamingMessage?: (role: string) => ChatMessage | undefined;

    private handleAction(action: () => void | Promise<void>) {
        const result = action();
        if (result instanceof Promise) {
            result.catch((err: any) => {
                console.error('Action failed:', err);
            });
        }
    }

    render() {
        if (!this.group) {
            return html``;
        }

        const agents = Array.from(this.group.agents.values());
        const completedCount = agents.filter(a => a.status === 'completed').length;
        const streamingCount = agents.filter(a => a.status === 'streaming').length;
        const errorCount = agents.filter(a => a.status === 'error').length;
        const allCompleted = agents.length > 0 && completedCount + errorCount === agents.length;
        const isSingleAgent = agents.length === 1;

        const quickActions = agents
            .filter(a => a.message && a.message.actions && a.message.actions.length > 0)
            .flatMap(a => a.message!.actions!.map(action => ({ ...action, agentRole: a.role, agentLabel: a.label })))
            .sort((a, b) => {
                const aPriority = a.requiresAttention ? 1 : 0;
                const bPriority = b.requiresAttention ? 1 : 0;
                return bPriority - aPriority;
            });

        return html`
            <div class="agent-response-group">
                ${when(!isSingleAgent, () => html`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="${t('MULTIPLE_AGENTS')}"></wa-icon>
                            <span>${t('MULTIPLE_AGENTS')}</span>
                            ${when(!allCompleted, () => html`
                                <span class="agent-status-badge">
                                    ${when(streamingCount > 0, () => html`
                                        <span class="status-streaming">${streamingCount} responding</span>
                                    `)}
                                    ${when(completedCount > 0, () => html`
                                        <span class="status-completed">${completedCount}/${agents.length} completed</span>
                                    `)}
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
                    ${repeat(agents, (agentInfo) => agentInfo.role, (agentInfo) => {
                        const message = agentInfo.message || 
                            (agentInfo.status === 'streaming' && this.findStreamingMessage 
                                ? this.findStreamingMessage(agentInfo.role) 
                                : undefined);
                        return html`
                            <ai-agent-response-card
                                .agentInfo="${agentInfo}"
                                .message="${message}"
                                .isStreaming="${agentInfo.status === 'streaming'}"
                                .groupId="${this.group!.id}">
                            </ai-agent-response-card>
                        `;
                    })}
                </div>
                ${when(quickActions.length > 0 && allCompleted, () => html`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="${t('QUICK_ACTIONS')}"></wa-icon>
                            <span>${t('QUICK_ACTIONS')}</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${repeat(quickActions, (action, index) => index.toString(), (action) => html`
                                <wa-button
                                    variant="${action.requiresAttention ? 'brand' : 'neutral'}"
                                    appearance="${action.requiresAttention ? 'filled' : 'plain'}"
                                    size="small"
                                    title="${action.label}"
                                    @click="${() => this.handleAction(action.action)}">
                                    <wa-icon name="${action.icon}" label="${action.label}"></wa-icon>
                                </wa-button>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        .agent-response-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            overflow: visible;
        }

        .agent-group-header {
            padding: 0.5rem 0.75rem;
            background-color: var(--wa-color-surface-lowered);
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
        }

        .agent-group-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
        }

        .agent-status-badge {
            display: flex;
            gap: 0.5rem;
            margin-left: auto;
            font-size: 0.875rem;
        }

        .status-streaming {
            color: var(--wa-color-brand-50);
        }

        .status-completed {
            color: var(--wa-color-success-60);
        }

        .status-all-completed {
            color: var(--wa-color-success-70);
            font-weight: 600;
        }

        .agent-group-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        .quick-actions-bar {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            padding: 0.75rem;
            background-color: var(--wa-color-surface-lowered);
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            border-top: none;
        }

        .quick-actions-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--wa-color-text-quiet);
            flex-shrink: 0;
        }

        .quick-actions-buttons {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: flex-end;
            margin-left: auto;
        }
    `;
}

