/**
 * Command Palette Extension for geo!space
 * 
 * Provides a VS Code-style command palette at the top center of the interface
 * for quick command execution.
 */

import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { css } from "lit";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { KPart } from "../../parts/k-part";
import { TOOLBAR_MAIN_CENTER } from "../../core/constants";
import { subscribe } from "../../core/events";
import { CommandRegistry, ExecutionContext, commandRegistry } from "../../api";
import { SYSTEM_LANGUAGE_BUNDLES, i18n } from "../../core/i18n";
import commandpaletteBundle from "./commandpalette.json";

const t = i18n('commandpalette');

// Event topic for opening the command palette
const TOPIC_OPEN_COMMAND_PALETTE = "commandpalette/open";

@customElement('k-command-palette')
export class KCommandPalette extends KPart {
    @state()
    private inputValue: string = '';

    @state()
    private filteredCommands: any[] = [];

    @state()
    private allCommands: any[] = [];

    @state()
    private showParameterPrompt: boolean = false;

    @state()
    private selectedCommand: any = null;

    @state()
    private parameterValues: { [key: string]: string } = {};

    @state()
    private isPaletteOpen: boolean = false;

    private inputRef: Ref<any> = createRef();
    private dialogRef: Ref<any> = createRef();
    private boundDocumentClickHandler?: (e: MouseEvent) => void;
    private executionContext: ExecutionContext | undefined;

    protected async doInitUI() {
        // Subscribe to open command palette event
        subscribe(TOPIC_OPEN_COMMAND_PALETTE, () => {
            this.openPalette();
        });

        // Add click-outside listener to close palette
        this.boundDocumentClickHandler = this.handleDocumentClick.bind(this);
        document.addEventListener('click', this.boundDocumentClickHandler);
    }

    private async handleDocumentClick(e: MouseEvent) {
        if (!this.isPaletteOpen && !this.showParameterPrompt) return;

        await this.updateComplete;
        const target = e.target as Node;

        // Check if click is inside the component
        if (this.contains(target)) return;

        // Check if click is inside the dialog element
        if (this.dialogRef.value) {
            const dialog = this.dialogRef.value as HTMLElement;
            if (dialog.contains(target)) return;
        }

        // Check if the target is inside any wa-dialog (in case of shadow DOM)
        let element = target as HTMLElement;
        while (element) {
            if (element.tagName === 'WA-DIALOG') return;
            element = element.parentElement as HTMLElement;
        }

        // Click is outside, close everything
        this.closePalette();
        this.closeParameterPrompt();
    }

    private handleDialogClick(e: Event) {
        e.stopPropagation();
    }

    private handleInputFocus() {
        // Use requestAnimationFrame to prevent interrupting the focus
        requestAnimationFrame(() => {
            this.isPaletteOpen = true;
        });
    }

    private handleInputClick(e: Event) {
        e.stopPropagation();
        this.openPalette();
    }

    private handleInputMouseDown(e: Event) {
        e.stopPropagation();
    }

    private updateCommandList() {
        const commands = commandRegistry.listCommands(this.executionContext || {});
        this.allCommands = Object.values(commands)
            .filter((cmd: any) => cmd.id !== 'commandpalette.open')
            .map((cmd: any) => ({
                id: cmd.id,
                name: cmd.name,
                description: cmd.description,
                icon: cmd.icon,
                keyBinding: cmd.keyBinding
            }));

        this.filteredCommands = [...this.allCommands];
    }

    public async openPalette() {
        this.executionContext = commandRegistry.createExecutionContext();
        this.inputValue = '';
        this.updateCommandList();
        this.showParameterPrompt = false;
        this.isPaletteOpen = true;

        await this.updateComplete;

        if (this.inputRef.value) {
            this.inputRef.value.focus();
        }
    }

    private closePalette() {
        this.isPaletteOpen = false;
        this.inputValue = '';
        this.showParameterPrompt = false;
        this.executionContext = undefined;
    }

    private handleInputChange(e: Event) {
        const input = e.target as any;
        this.inputValue = input.value;
        this.filterCommands();
    }

    private filterCommands() {
        if (!this.inputValue.trim()) {
            this.filteredCommands = [...this.allCommands];
        } else {
            const searchLower = this.inputValue.toLowerCase();
            this.filteredCommands = this.allCommands.filter(cmd =>
                cmd.name.toLowerCase().includes(searchLower) ||
                cmd.id.toLowerCase().includes(searchLower) ||
                (cmd.description && cmd.description.toLowerCase().includes(searchLower))
            );
        }
    }

    private handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            e.preventDefault();
            this.closePalette();
        }
    }

    private handleCommandClick(e: Event, command: any) {
        if (!command) return;
        e.stopPropagation();
        this.inputValue = '';
        this.filterCommands();
        this.runCommand(command);
    }

    private handleContainerClick(e: Event) {
        e.stopPropagation();
    }

    private runCommand(command: any) {
        if (!command || !commandRegistry) return;

        // Get the full command details from registry
        const fullCommand = commandRegistry.getCommand(command.id);

        // Check if command has any parameters (required or optional)
        const hasParameters = fullCommand?.parameters && fullCommand.parameters.length > 0;

        if (hasParameters) {
            // Show parameter prompt for any command with parameters
            this.selectedCommand = fullCommand;
            this.parameterValues = {};
            this.showParameterPrompt = true;
        } else {
            // Execute directly without parameters
            this.executeCommandWithParams(command.id, {});
        }
    }

    private executeCommandWithParams(commandId: string, params: any) {
        try {
            commandRegistry.execute(commandId, { ...(this.executionContext || {}), params });
            this.closePalette();
            this.closeParameterPrompt();
        } catch (error: any) {
            console.error('Failed to execute command:', error);
        }
    }

    private closeParameterPrompt() {
        this.showParameterPrompt = false;
        this.selectedCommand = null;
        this.parameterValues = {};
    }

    private handleParameterInput(paramName: string, value: string) {
        this.parameterValues = {
            ...this.parameterValues,
            [paramName]: value
        };
    }

    private executeWithParameters() {
        if (!this.selectedCommand) return;

        // Validate required parameters
        const missingParams = this.selectedCommand.parameters
            ?.filter((p: any) => p.required && !this.parameterValues[p.name])
            .map((p: any) => p.name);

        if (missingParams && missingParams.length > 0) {
            if ((this as any).toastError) {
                (this as any).toastError(t('MISSING_REQUIRED_PARAMS', { params: missingParams.join(', ') }));
            }
            return;
        }

        this.executeCommandWithParams(this.selectedCommand.id, this.parameterValues);
    }

    protected doClose() {
        if (this.boundDocumentClickHandler) {
            document.removeEventListener('click', this.boundDocumentClickHandler);
        }
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            max-width: 600px;
            position: relative;
        }

        wa-input {
            max-width: 300px;
        }

        .commands-container {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            margin-top: 4px;
            background: var(--wa-color-neutral-05);
            border: 1px solid var(--wa-color-neutral-25);
            border-radius: 4px;
            max-height: 400px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);
            display: none;
        }

        :host-context(.wa-light) .commands-container {
            background: var(--wa-color-neutral-95);
            border: 1px solid var(--wa-color-neutral-75);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .commands-container.open {
            display: block;
        }

        .command-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 16px;
            cursor: pointer;
            transition: background-color 0.15s;
            border-bottom: 1px solid var(--wa-color-neutral-15);
        }

        :host-context(.wa-light) .command-item {
            border-bottom: 1px solid var(--wa-color-neutral-85);
        }

        .command-item:last-child {
            border-bottom: none;
        }

        .command-item:hover {
            background: var(--wa-color-neutral-20);
        }

        :host-context(.wa-light) .command-item:hover {
            background: var(--wa-color-neutral-80);
        }

        .command-icon {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.7;
        }

        .command-info {
            flex: 1;
            min-width: 0;
        }

        .command-name {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 2px;
        }

        .command-id {
            font-size: 11px;
            opacity: 0.5;
            font-family: monospace;
            margin-bottom: 2px;
        }

        .command-description {
            font-size: 12px;
            opacity: 0.7;
        }

        .command-keybinding {
            flex-shrink: 0;
            margin-left: auto;
            padding: 2px 8px;
            background: var(--wa-color-neutral-15);
            border: 1px solid var(--wa-color-neutral-25);
            border-radius: 3px;
            font-size: 11px;
            font-family: monospace;
            opacity: 0.7;
        }

        :host-context(.wa-light) .command-keybinding {
            background: var(--wa-color-neutral-85);
            border: 1px solid var(--wa-color-neutral-75);
        }

        .no-results {
            padding: 20px;
            text-align: center;
            color: var(--wa-color-neutral-60);
        }

        :host-context(.wa-light) .no-results {
            color: var(--wa-color-neutral-40);
        }

        wa-dialog::part(panel) {
            max-width: 600px;
            width: 90vw;
        }

        wa-dialog::part(body) {
            padding: 20px;
        }

        .parameter-prompt-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .parameter-field {
            margin-bottom: 12px;
        }

        .parameter-field wa-input {
            width: 100%;
        }

        .parameter-actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            margin-top: 20px;
        }
    `;

    render() {
        return html`
            <wa-input
                ${ref(this.inputRef)}
                placeholder="${t('PLACEHOLDER')}"
                .value=${this.inputValue}
                @input=${this.handleInputChange}
                @keydown=${this.handleKeyDown}
                @focus=${this.handleInputFocus}
                @click=${this.handleInputClick}
                @mousedown=${this.handleInputMouseDown}
                autocomplete="off"
                size="small"
            >
                <wa-icon slot="start" name="terminal" label="Terminal"></wa-icon>
            </wa-input>

            <div class="commands-container ${this.isPaletteOpen ? 'open' : ''}" @click=${this.handleContainerClick}>
                ${this.filteredCommands.length > 0 ? html`
                    ${this.filteredCommands.map(cmd => html`
                        <div class="command-item" @click=${(e: Event) => this.handleCommandClick(e, cmd)}>
                            ${cmd.icon ? html`
                                <div class="command-icon">
                                    <wa-icon name="${cmd.icon}" label="${cmd.name}"></wa-icon>
                                </div>
                            ` : html`
                                <div class="command-icon">
                                    <wa-icon name="terminal" label="Command"></wa-icon>
                                </div>
                            `}
                            <div class="command-info">
                                <div class="command-name">${cmd.name}</div>
                                <div class="command-id">${cmd.id}</div>
                                ${cmd.description ? html`
                                    <div class="command-description">${cmd.description}</div>
                                ` : ''}
                            </div>
                            ${cmd.keyBinding ? html`
                                <div class="command-keybinding">${cmd.keyBinding}</div>
                            ` : ''}
                        </div>
                    `)}
                ` : html`
                    <div class="no-results">
                        <wa-icon name="search" label="${t('NO_COMMANDS_FOUND')}" style="font-size: 24px; margin-bottom: 4px; opacity: 0.3;"></wa-icon>
                        <div>${t('NO_COMMANDS_FOUND')}</div>
                    </div>
                `}
            </div>

            ${this.showParameterPrompt && this.selectedCommand ? html`
                <wa-dialog 
                    ${ref(this.dialogRef)}
                    label="${this.selectedCommand.name} - ${t('PARAMETERS')}"
                    open
                    @wa-request-close=${this.closeParameterPrompt}
                    @click=${this.handleDialogClick}
                >
                    <div class="parameter-prompt-title">
                        ${t('ENTER_PARAMETERS', { commandName: this.selectedCommand.name })}
                    </div>
                    ${this.selectedCommand.parameters?.map((param: any) => html`
                        <div class="parameter-field">
                            <wa-input
                                label="${param.name}${param.required ? ' *' : ''}"
                                hint=${param.description || ''}
                                placeholder=${param.description || t('ENTER_PARAM', { paramName: param.name })}
                                .value=${this.parameterValues[param.name] || ''}
                                @input=${(e: Event) => this.handleParameterInput(param.name, (e.target as any).value)}
                            ></wa-input>
                        </div>
                    `)}
                    <div class="parameter-actions">
                        <wa-button variant="default" @click=${this.closeParameterPrompt}>
                            ${t('CANCEL')}
                        </wa-button>
                        <wa-button variant="primary" @click=${this.executeWithParameters}>
                            ${t('EXECUTE')}
                        </wa-button>
                    </div>
                </wa-dialog>
            ` : ''}
        `;
    }
}

export default ({ contributionRegistry, commandRegistry, toastInfo, toastError, html, publish }: any) => {
    // Register language bundle
    contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
        commandpaletteBundle as any);

    // Register command to open palette using events
    commandRegistry.registerHandler('commandpalette.open', {
        execute: () => {
            // Publish event to open the palette
            publish(TOPIC_OPEN_COMMAND_PALETTE, null);
        }
    });

    commandRegistry.registerCommand({
        id: 'commandpalette.open',
        name: t('OPEN_COMMAND_PALETTE'),
        description: t('OPEN_COMMAND_PALETTE_DESC'),
        icon: 'terminal',
        keyBinding: 'CTRL+SHIFT+P'
    });

    // Create the command palette element once and reuse it
    const commandPaletteElement = (() => {
        const element = document.createElement('k-command-palette') as any;
        element.commandRegistry = commandRegistry;
        element.toastInfo = toastInfo;
        element.toastError = toastError;
        return element;
    })();

    // Register UI component at the top center
    contributionRegistry.registerContribution(TOOLBAR_MAIN_CENTER, {
        label: "Command Palette",
        icon: "terminal",
        html: () => html`${commandPaletteElement}`
    });

}

