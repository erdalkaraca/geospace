import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

@customElement('ai-chat-input')
export class AIChatInput extends LitElement {
    @property({ type: String })
    public value: string = '';

    @property({ type: Boolean })
    public disabled: boolean = false;

    @property({ type: Boolean })
    public busy: boolean = false;

    @property({ type: Boolean })
    public hasProvider: boolean = true;

    @query('wa-textarea')
    private textareaElement?: any;

    private onInput(event: Event) {
        const textarea = event.target as any;
        this.value = textarea.value;
        this.dispatchEvent(new CustomEvent('input-change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }

    private onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.send();
        }
    }

    private async send() {
        if (!this.value.trim() || this.disabled || !this.hasProvider) {
            return;
        }
        const messageValue = this.value;
        this.value = '';
        this.requestUpdate();
        await this.updateComplete;
        if (this.textareaElement) {
            this.textareaElement.value = '';
            this.textareaElement.focus();
        }
        this.dispatchEvent(new CustomEvent('send', {
            detail: { value: messageValue },
            bubbles: true,
            composed: true
        }));
    }

    private cancel() {
        this.dispatchEvent(new CustomEvent('cancel', {
            bubbles: true,
            composed: true
        }));
    }

    private openSettings() {
        this.dispatchEvent(new CustomEvent('open-settings', {
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
            <div class="input-container">
                <div class="input-row">
                    <wa-textarea
                        placeholder="Type your message..."
                        resize="auto"
                        rows="1"
                        .value="${this.value}"
                        ?disabled="${this.disabled || !this.hasProvider}"
                        @input="${this.onInput}"
                        @keydown="${this.onKeyDown}">
                    </wa-textarea>
                    
                    ${when(this.busy, () => html`
                        <wa-button
                            appearance="plain"
                            size="medium"
                            @click="${this.cancel}">
                            <wa-icon name="stop" label="Stop"></wa-icon>
                        </wa-button>
                    `, () => html`
                        <wa-button
                            appearance="plain"
                            size="medium"
                            ?disabled="${!this.value.trim() || !this.hasProvider}"
                            @click="${this.send}">
                            <wa-icon name="paper-plane" label="Send"></wa-icon>
                        </wa-button>
                    `)}

                    <wa-button
                        appearance="plain"
                        size="medium"
                        @click="${this.openSettings}">
                        <wa-icon name="gear" label="Settings"></wa-icon>
                    </wa-button>
                </div>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
        }

        .input-container {
            padding: 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }

        .input-row {
            display: flex;
            gap: 0.5rem;
            align-items: flex-end;
        }

        wa-textarea {
            flex: 1;
            min-width: 0;
        }
    `;
}

