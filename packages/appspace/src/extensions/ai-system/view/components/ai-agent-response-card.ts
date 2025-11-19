import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import type { ChatMessage } from '../../core/types';
import { t } from '../../ai-system-extension';
import './ai-chat-message';

interface AgentResponseInfo {
    role: string;
    label: string;
    icon: string;
    status: 'streaming' | 'completed' | 'error';
    message?: ChatMessage;
    messageIndex?: number;
}

@customElement('ai-agent-response-card')
export class AIAgentResponseCard extends LitElement {
    @property({ type: Object, attribute: false })
    public agentInfo?: AgentResponseInfo;

    @property({ type: Object, attribute: false })
    public message?: ChatMessage;

    @property({ type: Boolean })
    public isStreaming: boolean = false;

    @property({ type: String })
    public groupId: string = '';

    private renderStatusIcon(status: 'streaming' | 'completed' | 'error') {
        switch (status) {
            case 'streaming':
                return html`<wa-icon name="spinner" class="spinning"></wa-icon>`;
            case 'completed':
                return html`<wa-icon name="check-circle" class="status-success"></wa-icon>`;
            case 'error':
                return html`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`;
        }
    }

    private copyToClipboard(text: string) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Failed to copy:', err);
        });
    }

    render() {
        if (!this.agentInfo) {
            return html``;
        }

        const hasAttention = this.message?.requiresAttention && (this.message.attentionRequests?.length || 0) > 0;

        if (!this.message) {
            return html`
                <div class="agent-response-card status-${this.agentInfo.status}">
                    <div class="agent-card-header">
                        <div class="agent-card-title">
                            <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                            <span>${this.agentInfo.label}</span>
                            ${this.renderStatusIcon(this.agentInfo.status)}
                        </div>
                    </div>
                    <div class="agent-card-content">
                        <div class="agent-loading">Waiting for response...</div>
                    </div>
                </div>
            `;
        }

        return html`
            <div class="agent-response-card status-${this.agentInfo.status} ${hasAttention ? 'requires-attention' : ''}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                        <span>${this.agentInfo.label}</span>
                        ${this.renderStatusIcon(this.agentInfo.status)}
                        ${when(hasAttention, () => html`
                            <wa-icon name="bell" class="attention-indicator"></wa-icon>
                        `)}
                    </div>
                    <div class="agent-card-actions">
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${t('COPY')}"
                            @click="${() => this.copyToClipboard(this.message?.content || '')}">
                            <wa-icon name="copy" label="${t('COPY')}"></wa-icon>
                        </wa-button>
                    </div>
                </div>
                <div class="agent-card-content">
                    <ai-chat-message
                        .message="${this.message}"
                        .isStreaming="${this.isStreaming}"
                        .showHeader="${false}"
                        .messageIndex="${this.agentInfo.messageIndex}">
                    </ai-chat-message>
                </div>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
        }

        .agent-response-card {
            display: flex;
            flex-direction: column;
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            background-color: var(--wa-color-surface-default);
            margin-bottom: 0.5rem;
        }

        .agent-response-card.status-streaming {
            border-color: var(--wa-color-brand-border-quiet);
        }

        .agent-response-card.status-completed {
            border-color: var(--wa-color-success-border-quiet);
        }

        .agent-response-card.status-error {
            border-color: var(--wa-color-danger-border-quiet);
        }

        .agent-response-card.requires-attention {
            border-color: var(--wa-color-warning-border-normal);
        }

        .agent-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.375rem 0.5rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            background-color: var(--wa-color-surface-lowered);
        }

        .agent-card-title {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-weight: 500;
            font-size: 0.875rem;
            flex: 1;
        }

        .agent-card-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 1;
        }

        .attention-indicator {
            color: var(--wa-color-warning-50);
        }

        .agent-card-content {
            padding: 0.375rem;
        }

        .agent-card-content .message-content {
            border: none;
            box-shadow: none;
            border-radius: 0;
        }

        .agent-loading {
            padding: 1rem;
            text-align: center;
            color: var(--wa-color-text-quiet);
        }

        .spinning {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .status-success {
            color: var(--wa-color-success-60);
        }

        .status-error {
            color: var(--wa-color-danger-60);
        }
    `;
}

