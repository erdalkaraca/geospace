import { css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { KPart } from '../parts/k-part.ts';
import { createRef, ref, Ref } from 'lit/directives/ref.js';
import { registerLogHandler, unregisterLogHandler, type LogLevel } from '../core/logger.ts';

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
        
        // Auto-scroll to bottom
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

    render() {
        const filteredMessages = this.getFilteredMessages();

        return html`
            <div class="log-terminal">
                <!-- Toolbar -->
                <div class="toolbar">
                    <div class="filters">
                        <wa-button-group>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter === 'all' ? 'primary' : 'default'}"
                                @click=${() => this.filter = 'all'}>
                                All (${this.messages.length})
                            </wa-button>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter === 'info' ? 'primary' : 'default'}"
                                @click=${() => this.filter = 'info'}>
                                <wa-icon name="circle-info" label="Info"></wa-icon> Info
                            </wa-button>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter === 'warning' ? 'primary' : 'default'}"
                                @click=${() => this.filter = 'warning'}>
                                <wa-icon name="triangle-exclamation" label="Warnings"></wa-icon> Warnings
                            </wa-button>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter === 'error' ? 'primary' : 'default'}"
                                @click=${() => this.filter = 'error'}>
                                <wa-icon name="circle-xmark" label="Errors"></wa-icon> Errors
                            </wa-button>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter === 'debug' ? 'primary' : 'default'}"
                                @click=${() => this.filter = 'debug'}>
                                <wa-icon name="bug" label="Debug"></wa-icon> Debug
                            </wa-button>
                        </wa-button-group>
                    </div>
                    
                    <div class="actions">
                        <wa-button 
                            size="small" 
                            appearance="plain"
                            variant="${this.autoScroll ? 'primary' : 'default'}"
                            @click=${() => this.autoScroll = !this.autoScroll}>
                            <wa-icon name="arrow-down" label="Auto-scroll"></wa-icon>
                            ${this.autoScroll ? 'Auto-scroll' : 'Manual'}
                        </wa-button>
                        <wa-button 
                            size="small" 
                            appearance="plain"
                            @click=${() => this.clear()}>
                            <wa-icon name="trash" label="Clear logs"></wa-icon>
                            Clear
                        </wa-button>
                    </div>
                </div>

                <!-- Messages -->
                <div class="messages" ${ref(this.containerRef)}>
                    ${filteredMessages.length === 0 
                        ? html`<div class="empty-state">No log messages</div>`
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

        .toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem;
            border-bottom: 1px solid var(--wa-color-neutral-border);
            flex-shrink: 0;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .filters, .actions {
            display: flex;
            gap: 0.5rem;
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
}

declare global {
    interface HTMLElementTagNameMap {
        'k-log-terminal': KLogTerminal;
    }
    
    interface Window {
        logToTerminal?: (source: string, message: string, level?: LogLevel) => void;
    }
}

