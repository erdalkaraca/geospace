import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { when } from 'lit/directives/when.js';
import { marked } from 'marked';
import type { ChatMessage } from '../../core/types';
import { t } from '../../ai-system-extension';

@customElement('ai-chat-message')
export class AIChatMessage extends LitElement {
    @property({ type: Object, attribute: false })
    public message?: ChatMessage;

    @property({ type: Boolean })
    public isStreaming: boolean = false;

    @property({ type: Boolean })
    public showHeader: boolean = true;

    @property({ type: Number, attribute: false })
    public messageIndex?: number;

    @state()
    private attentionInputValue: string = '';

    private formatTimestamp(): string {
        const now = new Date();
        return now.toLocaleTimeString();
    }

    private copyToClipboard(text: string) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Failed to copy:', err);
        });
    }

    private processMarkdownContent(markdownHtml: string): string {
        if (markdownHtml.includes('code-block-wrapper')) {
            return markdownHtml;
        }
        
        return markdownHtml.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi, (match, attrs, codeText) => {
            return `<div class="code-block-wrapper">
                <div class="code-block-header">
                    <wa-copy-button value="${this.escapeHtmlAttribute(codeText.trim())}" size="small" label="${t('COPY_CODE')}"></wa-copy-button>
                </div>
                <div class="code-block-content">
                    <pre><code${attrs}>${codeText}</code></pre>
                </div>
            </div>`;
        });
    }

    private escapeHtmlAttribute(text: string): string {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    private handleResend(e?: Event) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (!this.message) {
            return;
        }
        this.dispatchEvent(new CustomEvent('resend', {
            detail: { 
                message: this.message,
                messageIndex: this.messageIndex
            },
            bubbles: true,
            composed: true
        }));
    }

    private getAttentionIcon(type: string): string {
        switch (type) {
            case 'confirmation': return 'check-circle';
            case 'input': return 'input';
            case 'approval': return 'hand';
            case 'execution': return 'play';
            case 'info': return 'info-circle';
            default: return 'bell';
        }
    }

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
        if (_changedProperties.has('attentionInputValue')) {
            this.dispatchEvent(new CustomEvent('attention-input-change', {
                detail: { value: this.attentionInputValue },
                bubbles: true,
                composed: true
            }));
        }
        if (_changedProperties.has('message') || !this.hasAttribute('data-is-user')) {
            this.updateAlignment();
        }
    }

    private updateAlignment() {
        if (this.message) {
            const isUser = this.message.role === 'user';
            this.setAttribute('data-is-user', String(isUser));
        }
    }

    private handleAttentionResponse(requestIndex: number, request: any, response: any) {
        if (!this.message) return;
        this.dispatchEvent(new CustomEvent('attention-response', {
            detail: { 
                messageIndex: this.messageIndex, 
                requestIndex, 
                request, 
                response 
            },
            bubbles: true,
            composed: true
        }));
    }

    private handleAction(action: () => void | Promise<void>) {
        const result = action();
        if (result instanceof Promise) {
            result.catch((err: any) => {
                console.error('Action failed:', err);
            });
        }
    }

    render() {
        if (!this.message) {
            return html``;
        }

        const message = this.message;
        const isUser = message.role === 'user';
        const hasAttention = message.requiresAttention && (message.attentionRequests?.length || 0) > 0;

        return html`
            <div class="message-wrapper ${isUser ? 'user' : 'assistant'} ${this.isStreaming ? 'streaming' : ''} ${hasAttention ? 'requires-attention' : ''}">
                ${when(this.showHeader && !isUser, () => html`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="robot" 
                                label="${message.role}">
                            </wa-icon>
                            <span class="role-name">${message.role}</span>
                            ${when(hasAttention, () => html`
                                <wa-icon name="bell" label="${t('REQUIRES_ATTENTION')}"></wa-icon>
                            `)}
                            <span class="timestamp">${this.formatTimestamp()}</span>
                        </div>
                        <div class="message-actions">
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                title="${t('COPY')}"
                                @click="${() => this.copyToClipboard(message.content)}">
                                <wa-icon slot="label" name="copy" label="${t('COPY')}"></wa-icon>
                            </wa-button>
                            ${when(message.actions?.length, () => html`
                                ${message.actions!.map(a => html`
                                    <wa-button
                                        variant="neutral"
                                        appearance="plain"
                                        size="small"
                                        title="${a.label}"
                                        @click="${() => this.handleAction(a.action)}">
                                        <wa-icon slot="label" name="${a.icon}" label="${a.label}"></wa-icon>
                                    </wa-button>
                                `)}
                            `)}
                        </div>
                    </div>
                `)}
                <div class="message-content-wrapper ${isUser ? 'user' : ''}">
                    <div class="message-content">
                        ${unsafeHTML(this.processMarkdownContent(marked.parse(message.content || '') as string))}
                        ${when(this.isStreaming, () => html`
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
                                @click="${() => this.handleAttentionResponse(reqIndex, request, true)}">
                                ${t('CONFIRM')}
                            </wa-button>
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${() => this.handleAttentionResponse(reqIndex, request, false)}">
                                ${t('CANCEL')}
                            </wa-button>
                                        `)}
                                        ${when(request.type === 'input', () => html`
                                            <div class="input-group">
                                                <wa-input
                                                    value="${this.attentionInputValue}"
                                                    @input="${(e: Event) => { this.attentionInputValue = (e.target as HTMLInputElement).value }}"
                                                    placeholder="${t('ENTER_RESPONSE')}">
                                                </wa-input>
                                                <wa-button
                                                    variant="brand"
                                                    appearance="filled"
                                                    size="small"
                                                    ?disabled="${!this.attentionInputValue.trim()}"
                                                    @click="${() => this.handleAttentionResponse(reqIndex, request, this.attentionInputValue)}">
                                                    ${t('SUBMIT')}
                                                </wa-button>
                                            </div>
                                        `)}
                                        ${when(request.type === 'approval', () => html`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(reqIndex, request, true)}">
                                                ${t('APPROVE')}
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(reqIndex, request, false)}">
                                                ${t('REJECT')}
                                            </wa-button>
                                        `)}
                                        ${when(request.type === 'execution', () => html`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(reqIndex, request, true)}">
                                                ${t('EXECUTE')}
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${() => this.handleAttentionResponse(reqIndex, request, false)}">
                                                ${t('CANCEL')}
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
                                    @click="${() => this.dispatchEvent(new CustomEvent('continue-workflow', {
                                        detail: { message },
                                        bubbles: true,
                                        composed: true
                                    }))}">
                                    ${t('CONTINUE_WORKFLOW')}
                                </wa-button>
                            </div>
                        `)}
                    </div>
                    ${when(isUser, () => html`
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${t('COPY')}"
                            @click="${() => this.copyToClipboard(message.content)}">
                            <wa-icon name="copy" label="${t('COPY')}"></wa-icon>
                        </wa-button>
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${t('RESEND')}"
                            @click="${(e: Event) => this.handleResend(e)}">
                            <wa-icon name="rotate-right" label="${t('RESEND')}"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 85%;
            box-sizing: border-box;
            animation: slideIn 0.2s ease-out;
        }

        :host([data-is-user="true"]) {
            align-self: flex-end;
        }

        :host([data-is-user="false"]) {
            align-self: flex-start;
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

        .message-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            box-sizing: border-box;
            margin: 0;
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
            font-size: 0.875rem;
            color: var(--wa-color-text-quiet);
        }

        .role-name {
            text-transform: capitalize;
        }

        .timestamp {
            font-size: 0.75rem;
            opacity: 0.7;
        }


        .message-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .message-wrapper:hover .message-actions,
        :host:hover .message-actions {
            opacity: 1;
        }

        .message-content-wrapper {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            width: 100%;
        }

        .message-content-wrapper.user {
            flex-direction: row;
            align-items: center;
        }

        .message-content {
            padding: 0.5rem 0.75rem;
            border-radius: 0.25rem;
            background-color: var(--wa-color-surface-default);
            word-break: break-word;
            overflow-wrap: break-word;
            max-width: 100%;
            box-sizing: border-box;
            line-height: 1.3;
            font-size: 0.9rem;
        }

        .message-content-wrapper.user .message-content {
            padding: 0.0625rem 0.75rem;
            background-color: var(--wa-color-brand-fill-quiet);
            color: var(--wa-color-text-normal);
            line-height: 1.4;
            flex: 1;
        }

        .message-content p {
            margin: 0;
            padding: 0;
        }

        .message-content ul,
        .message-content ol {
            margin: 0.25rem 0;
            padding-left: 1.25rem;
        }

        .message-content li {
            margin: 0.125rem 0;
            padding: 0;
            line-height: 1.3;
        }

        .message-content li p {
            margin: 0;
            padding: 0;
        }

        .message-content-wrapper.user .message-content p {
            margin: 0.25rem 0;
        }

        .message-content :first-child {
            margin-top: 0;
            padding-top: 0;
        }

        .message-content :last-child {
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .message-content pre {
            white-space: pre-wrap;
            word-break: break-all;
            max-width: 100%;
            box-sizing: border-box;
            overflow-x: auto;
            margin: 0;
        }

        .message-content code {
            font-family: 'Courier New', monospace;
            background-color: var(--wa-color-surface-lowered);
            padding: 0.125rem 0.25rem;
            border-radius: 0.125rem;
        }

        .message-content pre code {
            background-color: transparent;
            padding: 0;
            display: block;
        }

        .code-block-wrapper {
            margin: 0.75rem 0;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
            background-color: var(--wa-color-surface-lowered);
            overflow: hidden;
        }

        .code-block-header {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0.375rem 0.5rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }

        .code-block-content {
            padding: 0.75rem;
            overflow-x: auto;
        }

        .code-block-content pre {
            margin: 0;
            background-color: transparent;
        }

        .code-block-content code {
            background-color: transparent;
            padding: 0;
        }

        .requires-attention {
            border-color: var(--wa-color-warning-border-normal);
        }

        .attention-requests {
            margin-top: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .attention-request {
            padding: 0.75rem;
            border-radius: 0.25rem;
            border: solid var(--wa-border-width-s);
            background-color: var(--wa-color-overlay-inline);
        }

        .attention-request.attention-confirmation {
            border-color: var(--wa-color-warning-border-normal);
            background-color: var(--wa-color-warning-50);
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

        .attention-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .attention-message {
            margin-bottom: 0.5rem;
            color: var(--wa-color-text-normal);
        }

        .priority-badge {
            padding: 0.125rem 0.375rem;
            border-radius: 0.125rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .priority-badge.priority-urgent {
            background-color: var(--wa-color-danger-fill-normal);
            color: var(--wa-color-danger-on-normal);
        }

        .priority-badge.priority-high {
            background-color: var(--wa-color-warning-fill-normal);
            color: var(--wa-color-warning-on-normal);
        }

        .attention-actions {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        .input-group {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            width: 100%;
        }
    `;
}

