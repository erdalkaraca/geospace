import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import type { ChatProvider } from '../../core/types';

interface ModelInfo {
    id: string;
    name?: string;
}

@customElement('ai-settings-dialog')
export class AISettingsDialog extends LitElement {
    @property({ type: Boolean })
    public open: boolean = false;

    @property({ type: Array, attribute: false })
    public providers: ChatProvider[] = [];

    @property({ type: String })
    public selectedProviderName: string = '';

    @property({ type: String })
    public selectedModel: string = '';

    @property({ type: Array, attribute: false })
    public availableModels: ModelInfo[] = [];

    @property({ type: Boolean })
    public loadingModels: boolean = false;

    @property({ type: Boolean })
    public requireToolApproval: boolean = true;

    private onProviderChange(event: Event) {
        const select = event.target as HTMLSelectElement;
        this.selectedProviderName = select.value;
        this.dispatchEvent(new CustomEvent('provider-change', {
            detail: { providerName: select.value },
            bubbles: true,
            composed: true
        }));
    }

    private onModelChange(event: Event) {
        const select = event.target as HTMLSelectElement;
        this.selectedModel = select.value;
        this.dispatchEvent(new CustomEvent('model-change', {
            detail: { model: select.value },
            bubbles: true,
            composed: true
        }));
    }

    private onToolApprovalChange(event: Event) {
        const checkbox = event.target as HTMLInputElement;
        this.requireToolApproval = checkbox.checked;
        this.dispatchEvent(new CustomEvent('tool-approval-change', {
            detail: { value: checkbox.checked },
            bubbles: true,
            composed: true
        }));
    }

    private save() {
        this.dispatchEvent(new CustomEvent('save', {
            detail: { 
                providerName: this.selectedProviderName,
                model: this.selectedModel
            },
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

    render() {
        if (!this.open) {
            return html``;
        }

        const currentProvider = this.providers.find(p => p.name === this.selectedProviderName);

        return html`
            <wa-dialog label="AI View Settings" open @wa-request-close="${this.cancel}">
                <div class="settings-dialog-content">
                    <div class="settings-field">
                        <label>Provider:</label>
                        <wa-select 
                            value="${this.selectedProviderName || ''}"
                            @change="${this.onProviderChange}">
                            ${this.providers.map(provider => html`
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
                                    value="${this.selectedModel || ''}"
                                    @change="${this.onModelChange}">
                                    ${this.availableModels.map(model => html`
                                        <wa-option value="${model.id}">
                                            ${model.name || model.id}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `, () => html`
                                <wa-select 
                                    value="${this.selectedModel || ''}"
                                    @change="${this.onModelChange}">
                                    ${when(currentProvider, () => html`
                                        <wa-option value="${currentProvider!.model}">
                                            ${currentProvider!.model}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `)}
                        `)}
                    </div>

                    <div class="settings-field">
                        <label>
                            <wa-checkbox
                                ?checked="${this.requireToolApproval}"
                                @change="${this.onToolApprovalChange}">
                            </wa-checkbox>
                            <span>Require approval before executing tools</span>
                        </label>
                    </div>

                    <div class="settings-actions">
                        <wa-button variant="neutral" appearance="outlined" @click="${this.cancel}">
                            Cancel
                        </wa-button>
                        <wa-button variant="brand" appearance="filled" @click="${this.save}">
                            Save
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `;
    }

    static styles = css`
        :host {
            display: block;
        }

        .settings-dialog-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .settings-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .settings-field label {
            font-weight: 500;
            color: var(--wa-color-text-normal);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .settings-field label span {
            flex: 1;
        }

        .settings-actions {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            margin-top: 1rem;
        }
    `;
}

