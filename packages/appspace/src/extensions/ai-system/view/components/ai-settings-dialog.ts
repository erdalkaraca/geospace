import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { repeat } from 'lit/directives/repeat.js';
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

    @property({ type: Array, attribute: false })
    public toolApprovalAllowlist: string[] = [];

    @state()
    private availableCommands: Array<{id: string, name: string}> = [];

    @state()
    private apiKey: string = '';

    private onProviderChange(event: Event) {
        const select = event.target as HTMLSelectElement;
        this.selectedProviderName = select.value;
        
        const currentProvider = this.providers.find(p => p.name === select.value);
        this.apiKey = currentProvider?.apiKey || '';
        
        this.dispatchEvent(new CustomEvent('provider-change', {
            detail: { providerName: select.value },
            bubbles: true,
            composed: true
        }));
        this.requestUpdate();
    }

    private onApiKeyChange(event: Event) {
        const input = event.target as HTMLInputElement;
        this.apiKey = input.value;
    }

    private async onPasteApiKey(): Promise<void> {
        try {
            const text = await navigator.clipboard.readText();
            this.apiKey = text;
            this.requestUpdate();
        } catch (error) {
            console.error('Failed to read from clipboard:', error);
        }
    }

    private async onCopyApiKey(): Promise<void> {
        if (!this.apiKey) {
            return;
        }
        try {
            await navigator.clipboard.writeText(this.apiKey);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
        }
    }

    protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
        if (changedProperties.has('selectedProviderName') || changedProperties.has('providers')) {
            const currentProvider = this.providers.find(p => p.name === this.selectedProviderName);
            if (currentProvider) {
                this.apiKey = currentProvider.apiKey || '';
            }
        }
        if (changedProperties.has('toolApprovalAllowlist')) {
            this.loadAllowedCommands();
        }
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

    private onAllowlistChange(event: Event, commandId: string) {
        const checkbox = event.target as HTMLInputElement;
        if (checkbox.checked) {
            if (!this.toolApprovalAllowlist.includes(commandId)) {
                this.toolApprovalAllowlist = [...this.toolApprovalAllowlist, commandId];
            }
        } else {
            this.toolApprovalAllowlist = this.toolApprovalAllowlist.filter(id => id !== commandId);
        }
        this.dispatchEvent(new CustomEvent('allowlist-change', {
            detail: { allowlist: [...this.toolApprovalAllowlist] },
            bubbles: true,
            composed: true
        }));
        this.requestUpdate();
    }

    protected async firstUpdated(): Promise<void> {
        await this.loadAllowedCommands();
    }

    private async loadAllowedCommands(): Promise<void> {
        if (this.toolApprovalAllowlist.length === 0) {
            this.availableCommands = [];
            return;
        }
        
        const { commandRegistry } = await import('../../../../core/commandregistry');
        const execContext = commandRegistry.createExecutionContext();
        const availableCommands = commandRegistry.listCommands(execContext);
        const commandArray = Object.values(availableCommands);
        
        this.availableCommands = this.toolApprovalAllowlist.map(commandId => {
            const command = commandArray.find((cmd: any) => cmd.id === commandId);
            return {
                id: commandId,
                name: command?.name || commandId
            };
        }).sort((a, b) => a.name.localeCompare(b.name));
    }


    private save() {
        this.dispatchEvent(new CustomEvent('save', {
            detail: { 
                providerName: this.selectedProviderName,
                model: this.selectedModel,
                apiKey: this.apiKey
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
                        <label>API Key:</label>
                        <wa-input
                            type="password"
                            value="${this.apiKey || ''}"
                            placeholder="Enter API key for ${this.selectedProviderName || 'provider'}"
                            @input="${this.onApiKeyChange}">
                            <wa-button
                                slot="end"
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${this.onCopyApiKey}"
                                title="Copy API key to clipboard"
                                ?disabled="${!this.apiKey}">
                                <wa-icon name="copy" label="Copy"></wa-icon>
                            </wa-button>
                            <wa-button
                                slot="end"
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${this.onPasteApiKey}"
                                title="Paste from clipboard">
                                <wa-icon name="paste" label="Paste"></wa-icon>
                            </wa-button>
                        </wa-input>
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

                    ${when(this.requireToolApproval, () => html`
                        <div class="settings-field">
                            <label>Commands allowed without approval:</label>
                            <div class="allowlist-container">
                                ${repeat(this.availableCommands, (cmd) => cmd.id, (cmd) => html`
                                    <label class="allowlist-item">
                                        <wa-checkbox
                                            ?checked="${this.toolApprovalAllowlist.includes(cmd.id)}"
                                            @change="${(e: Event) => this.onAllowlistChange(e, cmd.id)}">
                                        </wa-checkbox>
                                        <span>${cmd.name}</span>
                                    </label>
                                `)}
                            </div>
                        </div>
                    `)}

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

        .allowlist-container {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 200px;
            overflow-y: auto;
            padding: 0.5rem;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
            background-color: var(--wa-color-surface-lowered);
        }

        .allowlist-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem;
            cursor: pointer;
        }

        .allowlist-item span {
            flex: 1;
            font-size: 0.875rem;
        }

        .settings-actions {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            margin-top: 1rem;
        }
    `;
}

