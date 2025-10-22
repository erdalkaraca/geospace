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
import { KPart } from "../../parts/k-part.ts";
import { TOOLBAR_MAIN_CENTER } from "../../core/constants.ts";
import { subscribe } from "../../core/events.ts";

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
    private dropdownOpen: boolean = false;

    private commandRegistry: any;
    private inputRef: Ref<any> = createRef();
    private dropdownRef: Ref<any> = createRef();
    private dialogRef: Ref<any> = createRef();
    private typingTimeout: any = null;

    protected async doInitUI() {
        // Get command registry from context
        this.commandRegistry = (this as any).commandRegistry;
        
        // Load all commands
        this.updateCommandList();
        
        // Subscribe to open command palette event
        subscribe(TOPIC_OPEN_COMMAND_PALETTE, () => {
            this.openPalette();
        });
    }

    private updateCommandList() {
        if (!this.commandRegistry) return;
        
        const commands = this.commandRegistry.listCommands({});
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

    public togglePalette() {
        if (this.dropdownOpen) {
            this.closePalette();
        } else {
            this.openPalette();
        }
    }

    public async openPalette() {
        this.inputValue = '';
        this.updateCommandList();
        this.showParameterPrompt = false;
        
        await this.updateComplete;
        
        if (this.dropdownRef.value) {
            this.dropdownRef.value.open = true;
            this.dropdownOpen = true;
        }
        
        if (this.inputRef.value) {
            this.inputRef.value.focus();
        }
    }

    private closePalette() {
        if (this.dropdownRef.value) {
            this.dropdownRef.value.open = false;
        }
        this.dropdownOpen = false;
        this.inputValue = '';
        this.showParameterPrompt = false;
        
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
            this.typingTimeout = null;
        }
    }

    private handleInputChange(e: Event) {
        const input = e.target as any;
        this.inputValue = input.value;
        this.filterCommands();
        
        // Clear existing timeout
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
        }
        
        // Close dropdown while typing
        if (this.dropdownOpen && this.dropdownRef.value) {
            this.dropdownRef.value.open = false;
            this.dropdownOpen = false;
        }
        
        // Open dropdown after user stops typing (300ms delay)
        if (this.inputValue.trim()) {
            this.typingTimeout = setTimeout(() => {
                if (this.dropdownRef.value && !this.dropdownOpen) {
                    this.dropdownRef.value.open = true;
                    this.dropdownOpen = true;
                }
            }, 300);
        }
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

    private handleDropdownSelect(e: CustomEvent) {
        const commandId = e.detail.item.value;
        const command = this.allCommands.find(cmd => cmd.id === commandId);
        if (command) {
            e.preventDefault();
            this.inputValue = '';
            this.filterCommands();
            this.runCommand(command);
        }
    }

    private runCommand(command: any) {
        if (!command || !this.commandRegistry) return;

        // Get the full command details from registry
        const fullCommand = this.commandRegistry.getCommand(command.id);
        
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
            this.commandRegistry.execute(commandId, { params });
            this.closePalette();
            this.closeParameterPrompt();
            
            // Show success toast if available
            if ((this as any).toastInfo) {
                const cmd = this.commandRegistry.getCommand(commandId);
                (this as any).toastInfo(`Executed: ${cmd?.name || commandId}`);
            }
        } catch (error: any) {
            console.error('Failed to execute command:', error);
            if ((this as any).toastError) {
                const cmd = this.commandRegistry.getCommand(commandId);
                (this as any).toastError(`Failed to execute: ${cmd?.name || commandId}`);
            }
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
                (this as any).toastError(`Missing required parameters: ${missingParams.join(', ')}`);
            }
            return;
        }

        this.executeCommandWithParams(this.selectedCommand.id, this.parameterValues);
    }

    protected doClose() {
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
            this.typingTimeout = null;
        }
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            max-width: 600px;
        }

        wa-input {
            max-width: 300px;
        }

        wa-dropdown::part(menu) {
            max-width: 600px;
            min-width: 400px;
            max-height: 400px;
            overflow-y: auto;
        }

        wa-dropdown-item {
            --wa-spacing-medium: 12px;
        }

        wa-dropdown-item::part(base) {
            padding: 10px 16px;
        }

        .command-content {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
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
            background: var(--wa-color-neutral-800);
            border: 1px solid var(--wa-color-neutral-700);
            border-radius: 3px;
            font-size: 11px;
            font-family: monospace;
            opacity: 0.7;
        }

        .no-results {
            padding: 20px;
            text-align: center;
            color: var(--wa-color-neutral-400);
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
                placeholder="Type a command name..."
                .value=${this.inputValue}
                @input=${this.handleInputChange}
                @keydown=${this.handleKeyDown}
                autocomplete="off"
            >
                <wa-icon slot="start" name="terminal" label="Terminal"></wa-icon>
                
                <wa-dropdown 
                    slot="end"
                    ${ref(this.dropdownRef)}
                    placement="bottom-end"
                    distance="4"
                    @wa-select=${this.handleDropdownSelect}
                    @wa-show=${() => this.dropdownOpen = true}
                    @wa-hide=${() => this.dropdownOpen = false}
                >
                    <wa-button slot="trigger" appearance="plain" size="small">
                        <wa-icon name="list" label="Show all commands"></wa-icon>
                    </wa-button>

                    ${this.filteredCommands.length > 0 ? html`
                        ${this.filteredCommands.map(cmd => html`
                            <wa-dropdown-item value="${cmd.id}">
                                <div class="command-content">
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
                            </wa-dropdown-item>
                        `)}
                    ` : html`
                        <wa-dropdown-item disabled>
                            <div class="no-results">
                                <wa-icon name="search" label="No results" style="font-size: 24px; margin-bottom: 4px; opacity: 0.3;"></wa-icon>
                                <div>No commands found</div>
                            </div>
                        </wa-dropdown-item>
                    `}
                </wa-dropdown>
            </wa-input>

            ${this.showParameterPrompt && this.selectedCommand ? html`
                <wa-dialog 
                    ${ref(this.dialogRef)}
                    label="${this.selectedCommand.name} - Parameters"
                    open
                    @wa-request-close=${this.closeParameterPrompt}
                >
                    <div class="parameter-prompt-title">
                        Enter parameters for ${this.selectedCommand.name}
                    </div>
                    ${this.selectedCommand.parameters?.map((param: any) => html`
                        <div class="parameter-field">
                            <wa-input
                                label="${param.name}${param.required ? ' *' : ''}"
                                hint=${param.description || ''}
                                placeholder=${param.description || `Enter ${param.name}`}
                                .value=${this.parameterValues[param.name] || ''}
                                @input=${(e: Event) => this.handleParameterInput(param.name, (e.target as any).value)}
                            ></wa-input>
                        </div>
                    `)}
                    <div class="parameter-actions">
                        <wa-button variant="default" @click=${this.closeParameterPrompt}>
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click=${this.executeWithParameters}>
                            Execute
                        </wa-button>
                    </div>
                </wa-dialog>
            ` : ''}
        `;
    }
}

export default ({ contributionRegistry, commandRegistry, toastInfo, toastError, html, publish }: any) => {
    // Register command to open palette using events
    commandRegistry.registerHandler('commandpalette.open', {
        execute: () => {
            // Publish event to open the palette
            publish(TOPIC_OPEN_COMMAND_PALETTE, null);
        }
    });

    commandRegistry.registerCommand({
        id: 'commandpalette.open',
        name: 'Open Command Palette',
        description: 'Opens the command palette to execute commands',
        icon: 'terminal',
        keyBinding: 'CTRL+SHIFT+P'
    });

    // Register UI component at the top center
    contributionRegistry.registerContribution(TOOLBAR_MAIN_CENTER, {
        label: "Command Palette",
        icon: "terminal",
        html: () => {
            // Create element and inject dependencies
            const element = document.createElement('k-command-palette') as any;
            element.commandRegistry = commandRegistry;
            element.toastInfo = toastInfo;
            element.toastError = toastError;
            return html`${element}`;
        }
    });

}

