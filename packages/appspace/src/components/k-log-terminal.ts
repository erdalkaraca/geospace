import { css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { KPart } from '../parts/k-part';
import { createRef, ref, Ref } from 'lit/directives/ref.js';
import { registerLogHandler, unregisterLogHandler, type LogLevel } from '../core/logger';
import { i18n } from '../core/i18n';

const t = i18n('logterminal');

export interface LogMessage {
    timestamp: Date;
    level: LogLevel;
    source: string;
    message: string;
}

@customElement('k-log-terminal')
export class KLogTerminal extends KPart {
    @state()
    private messages: LogMessage[] = [];

    @state()
    private autoScroll: boolean = true;

    @state()
    private filter: LogLevel | 'all' = 'all';

    private containerRef: Ref<HTMLDivElement> = createRef();

    connectedCallback() {
        super.connectedCallback();
        // Load persisted settings
        this.loadSettings();
        // Register this terminal as the log handler
        registerLogHandler(this.log.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Unregister log handler
        unregisterLogHandler();
    }

    public log(source: string, message: string, level: LogLevel = 'info') {
        const logMessage: LogMessage = {
            timestamp: new Date(),
            level,
            source,
            message
        };
        
        this.messages = [...this.messages, logMessage];
        this.updateToolbar();
        
        if (this.autoScroll) {
            this.updateComplete.then(() => {
                const container = this.containerRef.value;
                if (container) {
                    container.scrollTop = container.scrollHeight;
                }
            });
        }
    }

    public clear() {
        this.messages = [];
        this.updateToolbar();
    }

    private getFilteredMessages() {
        if (this.filter === 'all') {
            return this.messages;
        }
        return this.messages.filter(m => m.level === this.filter);
    }

    private formatTimestamp(date: Date): string {
        return date.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
    }

    private getLevelIcon(level: LogLevel): string {
        switch (level) {
            case 'info': return 'circle-info';
            case 'warning': return 'triangle-exclamation';
            case 'error': return 'circle-xmark';
            case 'debug': return 'bug';
        }
    }

    private getLevelColor(level: LogLevel): string {
        switch (level) {
            case 'info': return 'var(--wa-color-primary-text, #0066cc)';
            case 'warning': return 'var(--wa-color-warning-text, #ff9800)';
            case 'error': return 'var(--wa-color-danger-text, #dc3545)';
            case 'debug': return 'var(--wa-color-neutral-text-subtle, #6c757d)';
        }
    }

    protected renderToolbar() {
        const infoCount = this.messages.filter(m => m.level === 'info').length;
        const warningCount = this.messages.filter(m => m.level === 'warning').length;
        const errorCount = this.messages.filter(m => m.level === 'error').length;
        const debugCount = this.messages.filter(m => m.level === 'debug').length;

        return html`
            <k-command 
                icon="list"
                title="${t('ALL_LOGS')}"
                appearance="${this.filter === 'all' ? 'filled' : 'plain'}"
                variant="${this.filter === 'all' ? 'brand' : 'neutral'}"
                .action=${() => {
                    this.filter = 'all';
                    this.saveSettings();
                    this.updateToolbar();
                }}>
                ${t('ALL')} (${this.messages.length})
            </k-command>

            <k-command 
                icon="circle-info"
                title="${t('INFO_LOGS')}"
                appearance="${this.filter === 'info' ? 'filled' : 'plain'}"
                variant="${this.filter === 'info' ? 'brand' : 'neutral'}"
                .action=${() => {
                    this.filter = 'info';
                    this.saveSettings();
                    this.updateToolbar();
                }}>
                ${t('INFO')}${infoCount > 0 ? ` (${infoCount})` : ''}
            </k-command>

            <k-command 
                icon="triangle-exclamation"
                title="${t('WARNING_LOGS')}"
                appearance="${this.filter === 'warning' ? 'filled' : 'plain'}"
                variant="${this.filter === 'warning' ? 'brand' : 'neutral'}"
                .action=${() => {
                    this.filter = 'warning';
                    this.saveSettings();
                    this.updateToolbar();
                }}>
                ${t('WARNINGS')}${warningCount > 0 ? ` (${warningCount})` : ''}
            </k-command>

            <k-command 
                icon="circle-xmark"
                title="${t('ERROR_LOGS')}"
                appearance="${this.filter === 'error' ? 'filled' : 'plain'}"
                variant="${this.filter === 'error' ? 'brand' : 'neutral'}"
                .action=${() => {
                    this.filter = 'error';
                    this.saveSettings();
                    this.updateToolbar();
                }}>
                ${t('ERRORS')}${errorCount > 0 ? ` (${errorCount})` : ''}
            </k-command>

            <k-command 
                icon="bug"
                title="${t('DEBUG_LOGS')}"
                appearance="${this.filter === 'debug' ? 'filled' : 'plain'}"
                variant="${this.filter === 'debug' ? 'brand' : 'neutral'}"
                .action=${() => {
                    this.filter = 'debug';
                    this.saveSettings();
                    this.updateToolbar();
                }}>
                ${t('DEBUG')}${debugCount > 0 ? ` (${debugCount})` : ''}
            </k-command>

            <wa-divider orientation="vertical"></wa-divider>

            <k-command 
                icon="arrow-down" 
                title="${this.autoScroll ? t('AUTO_SCROLL_ENABLED') : t('AUTO_SCROLL_DISABLED')}"
                appearance="${this.autoScroll ? 'filled' : 'plain'}"
                variant="${this.autoScroll ? 'brand' : 'neutral'}"
                .action=${() => {
                    this.autoScroll = !this.autoScroll;
                    this.saveSettings();
                    this.updateToolbar();
                }}>
                ${this.autoScroll ? t('AUTO_SCROLL') : t('MANUAL')}
            </k-command>

            <k-command 
                icon="trash" 
                title="${t('CLEAR_LOGS')}"
                .action=${() => this.clear()}>
                ${t('CLEAR')}
            </k-command>
        `;
    }

    render() {
        const filteredMessages = this.getFilteredMessages();

        return html`
            <div class="log-terminal">
                <div class="messages" ${ref(this.containerRef)}>
                    ${filteredMessages.length === 0 
                        ? html`<div class="empty-state">${t('NO_LOG_MESSAGES')}</div>`
                        : filteredMessages.map(msg => html`
                            <div class="message" data-level="${msg.level}">
                                <span class="timestamp">${this.formatTimestamp(msg.timestamp)}</span>
                                <wa-icon 
                                    name="${this.getLevelIcon(msg.level)}" 
                                    label="${msg.level}"
                                    style="color: ${this.getLevelColor(msg.level)}">
                                </wa-icon>
                                <span class="source">[${msg.source}]</span>
                                <span class="text">${msg.message}</span>
                            </div>
                        `)
                    }
                </div>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .log-terminal {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .messages {
            flex: 1;
            overflow-y: auto;
            padding: 0.5rem;
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            line-height: 1.5;
        }

        .message {
            display: flex;
            gap: 0.5rem;
            padding: 0.25rem 0.5rem;
            align-items: baseline;
            border-radius: var(--wa-border-radius-small);
        }

        .message:hover {
            background: var(--wa-color-neutral-background-hover);
        }

        .timestamp {
            color: var(--wa-color-neutral-text-subtle);
            font-size: 0.75rem;
            white-space: nowrap;
        }

        .source {
            color: var(--wa-color-primary-text);
            font-weight: 500;
            white-space: nowrap;
        }

        .text {
            color: var(--wa-color-neutral-text);
            word-break: break-word;
        }

        .message[data-level="error"] .text {
            color: var(--wa-color-danger-text);
        }

        .message[data-level="warning"] .text {
            color: var(--wa-color-warning-text);
        }

        .message[data-level="debug"] .text {
            color: var(--wa-color-neutral-text-subtle);
        }

        .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: var(--wa-color-neutral-text-subtle);
            font-style: italic;
        }

        wa-icon {
            flex-shrink: 0;
        }
    `;

    private async loadSettings() {
        const persisted = await this.getDialogSetting();
        
        if (persisted) {
            if (typeof persisted.filter === 'string' && 
                (persisted.filter === 'all' || ['info', 'warning', 'error', 'debug'].includes(persisted.filter))) {
                this.filter = persisted.filter;
            }
            if (typeof persisted.autoScroll === 'boolean') {
                this.autoScroll = persisted.autoScroll;
            }
            this.updateToolbar();
        }
    }

    private async saveSettings() {
        await this.setDialogSetting({
            filter: this.filter,
            autoScroll: this.autoScroll
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-log-terminal': KLogTerminal;
    }
    
    interface Window {
        logToTerminal?: (source: string, message: string, level?: LogLevel) => void;
    }
}

