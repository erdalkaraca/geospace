import { css, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { KPart } from '../../../../parts/k-part';
import { EditorInput } from '../../../../core/editorregistry';
import { appSettings, TOPIC_SETTINGS_CHANGED } from '../../../../core/settingsservice';
import { KEY_AI_CONFIG, TOPIC_AICONFIG_CHANGED, CID_CHAT_PROVIDERS } from '../../core/constants';
import { subscribe } from '../../../../core/events';
import { confirmDialog } from '../../../../dialogs';
import { contributionRegistry } from '../../../../core/contributionregistry';
import { ProviderFactory } from '../../providers/provider-factory';
import type { AIConfig, ChatProvider } from '../../core/types';
import type { ChatProviderContribution } from '../../core/interfaces';
import { t } from '../../ai-system-extension';

@customElement('k-ai-config-editor')
export class KAIConfigEditor extends KPart {
    @property({ attribute: false })
    public input?: EditorInput;

    @state()
    private aiConfig?: AIConfig;

    @state()
    private providers: ChatProvider[] = [];

    @state()
    private defaultProvider: string = '';

    @state()
    private editingCell: { rowIndex: number; field: string } | null = null;

    @state()
    private editingValue: string = '';

    @state()
    private hasChanges: boolean = false;

    @state()
    private availableModels: Array<{ id: string; name?: string }> = [];

    @state()
    private loadingModels: boolean = false;


    @state()
    private requireToolApproval: boolean = true;

    @state()
    private toolApprovalAllowlist: string[] = [];

    @state()
    private smartToolDetection: boolean = false;

    @state()
    private availableCommands: Array<{ id: string; name: string; description?: string }> = [];

    private providerFactory: ProviderFactory = new ProviderFactory();

    protected async doInitUI() {
        await this.loadAvailableCommands();
        await this.loadConfig();
        subscribe(TOPIC_AICONFIG_CHANGED, () => {
            this.loadConfig();
        });
        subscribe(TOPIC_SETTINGS_CHANGED, () => {
            this.loadConfig();
        });
    }

    private async loadConfig() {
        const config = await appSettings.get(KEY_AI_CONFIG) as AIConfig | undefined;
        this.aiConfig = config;
        
        // Merge contributed providers with config providers
        const contributedProviders = this.getContributedProviders();
        const configProviders = config?.providers || [];
        this.providers = this.mergeProviders(configProviders, contributedProviders);
        
        const savedDefaultProvider = config?.defaultProvider || '';
        // Validate that the default provider still exists in the providers list
        if (savedDefaultProvider && !this.providers.find(p => p.name === savedDefaultProvider)) {
            this.defaultProvider = '';
        } else {
            this.defaultProvider = savedDefaultProvider;
        }
        // Load requireToolApproval from config, default to true if missing
        if (config?.requireToolApproval !== undefined) {
            this.requireToolApproval = config.requireToolApproval;
        } else {
            this.requireToolApproval = true; // Default to true if missing
        }
        this.toolApprovalAllowlist = config?.toolApprovalAllowlist || [];
        // Load smartToolDetection from config, default to false if missing
        if (config?.smartToolDetection !== undefined) {
            this.smartToolDetection = config.smartToolDetection;
        } else {
            this.smartToolDetection = false; // Default to false if missing
        }
        this.hasChanges = false;
        this.markDirty(false);
        this.editingCell = null;
        
        // Ensure checkboxes are properly synced after render
        await this.updateComplete;
        this.syncCheckboxStates();
        this.syncToolApprovalCheckbox();
        this.syncSmartToolDetectionCheckbox();
    }

    private async loadAvailableCommands() {
        const { commandRegistry } = await import('../../../../core/commandregistry');
        const allCommands = commandRegistry.listCommands();
        this.availableCommands = Object.entries(allCommands).map(([id, cmd]: [string, any]) => ({
            id,
            name: cmd.name || id,
            description: cmd.description
        })).sort((a, b) => a.name.localeCompare(b.name));
    }

    private getContributedProviders(): ChatProvider[] {
        const contributions = contributionRegistry.getContributions(CID_CHAT_PROVIDERS) as ChatProviderContribution[];
        return contributions.map(contrib => contrib.provider);
    }

    private mergeProviders(existing: ChatProvider[], contributed: ChatProvider[]): ChatProvider[] {
        const existingNames = new Set(existing.map(p => p.name));
        const missing = contributed.filter(provider => !existingNames.has(provider.name));
        return missing.length > 0 ? [...existing, ...missing] : existing;
    }


    private syncCheckboxStates() {
        const rows = this.shadowRoot?.querySelectorAll('tbody tr') as NodeListOf<HTMLElement>;
        if (rows && this.providers) {
            rows.forEach((row, index) => {
                const checkbox = row.querySelector('td:first-child wa-checkbox') as any;
                const provider = this.providers[index];
                if (checkbox && provider) {
                    checkbox.checked = this.defaultProvider === provider.name;
                }
            });
        }
    }

    private syncToolApprovalCheckbox() {
        const checkbox = this.shadowRoot?.querySelector('.tool-approval-controls wa-checkbox') as any;
        if (checkbox) {
            checkbox.checked = this.requireToolApproval;
        }
    }

    private syncSmartToolDetectionCheckbox() {
        const checkbox = this.shadowRoot?.querySelector('.tool-detection-section wa-checkbox') as any;
        if (checkbox) {
            checkbox.checked = this.smartToolDetection;
        }
    }

    private async saveConfig() {
        if (!this.aiConfig) {
            return;
        }

        const updatedConfig: AIConfig = {
            ...this.aiConfig,
            defaultProvider: this.defaultProvider,
            providers: this.providers,
            requireToolApproval: this.requireToolApproval,
            toolApprovalAllowlist: this.toolApprovalAllowlist,
            smartToolDetection: this.smartToolDetection
        };

        await appSettings.set(KEY_AI_CONFIG, updatedConfig);
        this.hasChanges = false;
        this.markDirty(false);
    }

    async save() {
        if (!this.hasChanges) {
            return;
        }
        try {
            await this.saveConfig();
        } catch (error) {
            console.error('Failed to save AI config:', error);
            throw error;
        }
    }

    private async startCellEditing(rowIndex: number, field: string) {
        const provider = this.providers[rowIndex];
        if (!provider) return;

        const value = this.getProviderFieldValue(provider, field);
        
        this.editingCell = { rowIndex, field };
        this.editingValue = value;
        
        // Special handling for model field - fetch available models
        // Do this after setting editing state so the spinner can render
        if (field === 'model') {
            await this.updateComplete; // Wait for editing state to render
            await this.fetchModels(provider);
        }
    }

    private async fetchModels(provider: ChatProvider): Promise<void> {
        this.loadingModels = true;
        this.availableModels = []; // Clear previous models
        await this.updateComplete; // Wait for the update to complete so spinner can render

        try {
            // Get the provider instance - it handles model listing itself
            const providerInstance = this.providerFactory.getProvider(provider);
            
            if (providerInstance.getAvailableModels) {
                const models = await providerInstance.getAvailableModels(provider);
                this.availableModels = Array.isArray(models) ? models : [];
            } else {
                // Provider doesn't support model listing
                this.availableModels = [];
            }
        } catch (error) {
            this.availableModels = [];
        } finally {
            this.loadingModels = false;
        }
    }

    private cancelCellEditing() {
        this.editingCell = null;
        this.editingValue = '';
        this.availableModels = [];
        this.loadingModels = false;
    }

    private saveCellEditing() {
        if (!this.editingCell) return;

        const { rowIndex, field } = this.editingCell;
        this.updateProviderField(rowIndex, field as keyof ChatProvider, this.editingValue);
        this.cancelCellEditing();
    }

    private markDirtyAndUpdate() {
        this.hasChanges = true;
        this.markDirty(true);
    }

    private getProviderFieldValue(provider: ChatProvider, field: string): string {
        const fieldMap: Record<string, keyof ChatProvider> = {
            'name': 'name',
            'model': 'model',
            'chatApiEndpoint': 'chatApiEndpoint',
            'apiKey': 'apiKey',
            'ocrApiEndpoint': 'ocrApiEndpoint',
            'ocrModel': 'ocrModel'
        };
        const key = fieldMap[field];
        if (!key) return '';
        const value = provider[key];
        return typeof value === 'string' ? value : '';
    }

    private updateProviderField(index: number, field: keyof ChatProvider, value: any) {
        this.providers = this.providers.map((p, i) => {
            if (i === index) {
                const updated = { ...p };
                if (field === 'ocrApiEndpoint' || field === 'ocrModel') {
                    updated[field] = value || undefined;
                } else {
                    (updated as any)[field] = value;
                }
                return updated;
            }
            return p;
        });
        this.markDirtyAndUpdate();
    }

    private updateProviderParameter(index: number, paramKey: string, value: any) {
        this.providers = this.providers.map((p, i) => {
            if (i === index) {
                const parameters = { ...(p.parameters || {}), [paramKey]: value };
                return { ...p, parameters };
            }
            return p;
        });
        this.markDirtyAndUpdate();
    }

    private async deleteProvider(index: number) {
        const providerToDelete = this.providers[index];
        const confirmed = await confirmDialog(t('DELETE_PROVIDER_CONFIRM', { name: providerToDelete.name }));
        if (confirmed) {
            // Clear default provider if it's the one being deleted
            if (this.defaultProvider === providerToDelete.name) {
                this.defaultProvider = '';
            }
            this.providers = this.providers.filter((_, i) => i !== index);
            this.markDirtyAndUpdate();
        }
    }

    private addProvider() {
        const newProvider: ChatProvider = {
            name: 'new-provider',
            model: '',
            apiKey: '',
            chatApiEndpoint: ''
        };
        this.providers = [...this.providers, newProvider];
        this.markDirtyAndUpdate();
    }

    private setDefaultProvider(providerName: string) {
        // Only set if it's different from current
        if (this.defaultProvider !== providerName) {
            this.defaultProvider = providerName;
            this.markDirtyAndUpdate();
        }
    }

    private createInputHandlers() {
        return {
            onInput: (e: Event) => {
                const input = e.target as HTMLInputElement;
                this.editingValue = input.value;
            },
            onKeydown: (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.saveCellEditing();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    this.cancelCellEditing();
                }
            },
            onBlur: () => {
                this.saveCellEditing();
            }
        };
    }

    private renderEditableCell(
        index: number,
        field: string,
        displayValue: string | TemplateResult,
        inputType: 'text' | 'password' = 'text',
        placeholder?: string,
        customInput?: TemplateResult
    ): TemplateResult {
        const isEditing = this.editingCell?.rowIndex === index && this.editingCell?.field === field;
        const handlers = this.createInputHandlers();

        if (isEditing && customInput) {
            return customInput;
        }

        if (isEditing) {
            return html`
                <wa-input
                    type="${inputType}"
                    .value="${this.editingValue}"
                    placeholder="${placeholder || ''}"
                    @input="${handlers.onInput}"
                    @keydown="${handlers.onKeydown}"
                    @blur="${handlers.onBlur}"
                    autofocus>
                </wa-input>
            `;
        }

        return html`<span>${displayValue}</span>`;
    }

    private renderModelCell(index: number, provider: ChatProvider): TemplateResult {
        const isEditing = this.editingCell?.rowIndex === index && this.editingCell?.field === 'model';
        
        if (!isEditing) {
            return html`<span>${provider.model}</span>`;
        }

        return html`
            ${when(this.loadingModels, () => html`
                <wa-input
                    .value="${this.editingValue}"
                    placeholder="${t('LOADING_MODELS')}"
                    readonly>
                    <wa-animation name="spinner" play slot="start"></wa-animation>
                </wa-input>
            `, () => html`
                ${when(this.availableModels.length > 0, () => html`
                    <wa-dropdown
                        @wa-select="${(e: CustomEvent) => {
                            const selectedValue = e.detail.item.value;
                            if (selectedValue) {
                                this.editingValue = selectedValue;
                                this.saveCellEditing();
                            }
                        }}"
                        placement="bottom-start">
                        <wa-input
                            slot="trigger"
                            .value="${this.editingValue}"
                            placeholder="${t('SELECT_MODEL')}"
                            readonly
                            @keydown="${(e: KeyboardEvent) => {
                                if (e.key === 'Escape') {
                                    e.preventDefault();
                                    this.cancelCellEditing();
                                }
                            }}">
                        </wa-input>
                        ${this.availableModels.map(model => html`
                            <wa-dropdown-item value="${model.id}">
                                ${model.name || model.id}
                            </wa-dropdown-item>
                        `)}
                    </wa-dropdown>
                `, () => html`
                    ${this.renderEditableCell(index, 'model', provider.model)}
                `)}
            `)}
        `;
    }

    render() {
        return html`
            <div class="ai-config-editor">
                <div class="editor-header">
                    <h2>${t('PROVIDERS')}</h2>
                    <div class="header-actions">
                        <wa-button 
                            variant="brand" 
                            appearance="filled"
                            @click="${() => this.addProvider()}">
                            ${t('ADD_PROVIDER')}
                        </wa-button>
                    </div>
                </div>

                <div class="table-container">
                    <table class="providers-table">
                        <thead>
                            <tr>
                                <th>${t('DEFAULT')}</th>
                                <th>${t('NAME')}</th>
                                <th>${t('MODEL')}</th>
                                <th>${t('API_ENDPOINT')}</th>
                                <th>${t('API_KEY')}</th>
                                <th>${t('OCR_ENDPOINT')}</th>
                                <th>${t('OCR_MODEL')}</th>
                                <th>${t('ACTIONS')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${repeat(this.providers, (provider, index) => index, (provider, index) => html`
                                <tr class="${this.editingCell?.rowIndex === index ? 'editing' : ''}">
                                    <td>
                                        <wa-checkbox
                                            .checked="${this.defaultProvider === provider.name}"
                                            @change="${async (e: Event) => {
                                                const checkbox = e.target as any;
                                                if (checkbox.checked) {
                                                    // When checking, uncheck all others and set this as default
                                                    this.setDefaultProvider(provider.name);
                                                    // Wait for update to complete, then ensure other default checkboxes are unchecked
                                                    await this.updateComplete;
                                                    // Select only checkboxes in the first column (Default column)
                                                    const rows = this.shadowRoot?.querySelectorAll('tbody tr') as NodeListOf<HTMLElement>;
                                                    if (rows) {
                                                        rows.forEach((row) => {
                                                            const cb = row.querySelector('td:first-child wa-checkbox') as any;
                                                            if (cb && cb !== checkbox) {
                                                                cb.checked = false;
                                                            }
                                                        });
                                                    }
                                                } else {
                                                    // Prevent unchecking if this is already the default
                                                    if (this.defaultProvider === provider.name) {
                                                        // Re-check the checkbox to prevent unsetting the default
                                                        checkbox.checked = true;
                                                    }
                                                }
                                            }}">
                                        </wa-checkbox>
                                    </td>
                                    <td class="editable-cell" @dblclick="${() => this.startCellEditing(index, 'name')}">
                                        ${this.renderEditableCell(index, 'name', provider.name)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${() => this.startCellEditing(index, 'model')}">
                                        ${this.renderModelCell(index, provider)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${() => this.startCellEditing(index, 'chatApiEndpoint')}">
                                        ${this.renderEditableCell(index, 'chatApiEndpoint', html`<span class="endpoint-text">${provider.chatApiEndpoint}</span>`)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${() => this.startCellEditing(index, 'apiKey')}">
                                        ${this.renderEditableCell(index, 'apiKey', html`<span class="api-key-text">${provider.apiKey ? '••••••••' : ''}</span>`, 'password', t('API_KEY'))}
                                    </td>
                                    <td class="editable-cell" @dblclick="${() => this.startCellEditing(index, 'ocrApiEndpoint')}">
                                        ${this.renderEditableCell(index, 'ocrApiEndpoint', provider.ocrApiEndpoint || '-', 'text', t('OPTIONAL'))}
                                    </td>
                                    <td class="editable-cell" @dblclick="${() => this.startCellEditing(index, 'ocrModel')}">
                                        ${this.renderEditableCell(index, 'ocrModel', provider.ocrModel || '-', 'text', t('OPTIONAL'))}
                                    </td>
                                    <td>
                                        <wa-button
                                            variant="danger"
                                            appearance="plain"
                                            size="small"
                                            @click="${() => this.deleteProvider(index)}">
                                            ${t('DELETE_PROVIDER')}
                                        </wa-button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>

                ${when(this.providers.length === 0, () => html`
                    <div class="empty-state">
                        <p>${t('NO_PROVIDERS_CONFIGURED')}</p>
                    </div>
                `)}

                <div class="tool-approval-section">
                    <h3>${t('TOOL_APPROVALS')}</h3>
                    <div class="tool-approval-controls">
                        <wa-checkbox
                            .checked="${this.requireToolApproval}"
                            @change="${(e: Event) => {
                                const checkbox = e.target as any;
                                this.requireToolApproval = checkbox.checked;
                                this.markDirtyAndUpdate();
                            }}">
                            ${t('REQUIRE_APPROVAL_BEFORE_EXECUTING')}
                        </wa-checkbox>
                    </div>

                    <div class="tool-detection-section" style="margin-top: 1.5rem;">
                        <wa-checkbox
                            .checked="${this.smartToolDetection}"
                            @change="${(e: Event) => {
                                const checkbox = e.target as any;
                                this.smartToolDetection = checkbox.checked;
                                this.markDirtyAndUpdate();
                            }}">
                            ${t('SMART_TOOL_DETECTION')}
                        </wa-checkbox>
                        <p class="hint" style="margin-top: 0.5rem; margin-left: 1.75rem; color: var(--wa-color-text-secondary, #666); font-size: 0.875rem;">
                            ${t('SMART_TOOL_DETECTION_HINT')}
                        </p>
                    </div>

                    <div class="allowlist-section">
                        <h4>
                            ${t('APPROVED_COMMANDS')}
                            <span class="command-stats">
                                (${this.toolApprovalAllowlist.length}/${this.availableCommands.length})
                            </span>
                        </h4>
                        <p class="hint">
                            ${this.requireToolApproval 
                                ? t('SELECT_COMMANDS_WITHOUT_APPROVAL')
                                : t('COMMANDS_AUTO_APPROVED')}
                        </p>
                        <div class="commands-list ${!this.requireToolApproval ? 'disabled' : ''}">
                            ${this.availableCommands.map(cmd => html`
                                <div class="command-item">
                                    <wa-checkbox
                                        .checked="${this.toolApprovalAllowlist.includes(cmd.id)}"
                                        ?disabled="${!this.requireToolApproval}"
                                        @change="${(e: Event) => {
                                            const checkbox = e.target as any;
                                            if (checkbox.checked) {
                                                if (!this.toolApprovalAllowlist.includes(cmd.id)) {
                                                    this.toolApprovalAllowlist = [...this.toolApprovalAllowlist, cmd.id];
                                                    this.markDirtyAndUpdate();
                                                }
                                            } else {
                                                this.toolApprovalAllowlist = this.toolApprovalAllowlist.filter(id => id !== cmd.id);
                                                this.markDirtyAndUpdate();
                                            }
                                        }}">
                                        <div class="command-label">
                                            ${cmd.name}
                                            ${cmd.description ? html`
                                                <span class="command-description">${cmd.description}</span>
                                            ` : ''}
                                        </div>
                                    </wa-checkbox>
                                </div>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            height: 100%;
            overflow: auto;
        }

        .ai-config-editor {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 1rem;
        }

        .editor-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
        }

        .editor-header h2 {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--wa-color-text-normal);
        }

        .header-actions {
            display: flex;
            gap: 0.5rem;
        }

        .table-container {
            flex: 1;
            overflow: auto;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
        }

        .providers-table {
            width: 100%;
            border-collapse: collapse;
            background-color: var(--wa-color-surface-raised);
        }

        .providers-table thead {
            position: sticky;
            top: 0;
            background-color: var(--wa-color-surface-raised);
            z-index: 1;
        }

        .providers-table th {
            padding: 0.75rem;
            text-align: left;
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            white-space: nowrap;
        }

        .providers-table td {
            padding: 0.75rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
            vertical-align: middle;
        }

        .providers-table tbody tr:hover {
            background-color: var(--wa-color-surface-lowered);
        }

        .providers-table tbody tr.editing {
            background-color: var(--wa-color-surface-brand-subtle);
        }

        .providers-table tbody tr:last-child td {
            border-bottom: none;
        }

        .providers-table wa-input {
            width: 100%;
            min-width: 150px;
        }

        .providers-table wa-dropdown {
            width: 100%;
            min-width: 150px;
        }

        .providers-table wa-dropdown wa-input {
            width: 100%;
        }

        .providers-table wa-checkbox {
            display: flex;
            justify-content: center;
        }

        .editable-cell {
            cursor: pointer;
            position: relative;
        }

        .editable-cell:hover {
            background-color: var(--wa-color-surface-lowered);
        }

        .editable-cell span {
            display: block;
            min-height: 1.5rem;
            padding: 0.25rem 0;
        }

        .endpoint-text {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
            word-break: break-all;
            max-width: 200px;
            display: inline-block;
        }

        .api-key-text {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
        }

        .empty-state {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3rem;
            color: var(--wa-color-text-subtle);
        }

        .empty-state p {
            margin: 0;
        }

        .tool-approval-section {
            margin-top: 2rem;
            padding-top: 2rem;
        }

        .tool-approval-section h3 {
            margin: 0 0 1rem 0;
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--wa-color-text-normal);
        }

        .tool-approval-controls {
            margin-bottom: 1rem;
        }

        .allowlist-section {
            margin-top: 1.5rem;
        }

        .allowlist-section h4 {
            margin: 0 0 0.5rem 0;
            font-size: 1rem;
            font-weight: 500;
            color: var(--wa-color-text-normal);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .command-stats {
            font-size: 0.875rem;
            font-weight: normal;
            color: var(--wa-color-text-subtle);
        }

        .allowlist-section .hint {
            margin: 0 0 1rem 0;
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
        }

        .commands-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 300px;
            overflow-y: auto;
            padding: 0.5rem;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
            border-radius: var(--wa-border-radius-m);
            background-color: var(--wa-color-surface-raised);
        }

        .commands-list.disabled {
            opacity: 0.6;
        }

        .command-item {
            padding: 0.25rem 0;
        }

        .command-item wa-checkbox {
            width: 100%;
        }

        .command-label {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
        }

        .command-description {
            font-size: 0.75rem;
            color: var(--wa-color-text-subtle);
            font-weight: normal;
        }

    `;
}

