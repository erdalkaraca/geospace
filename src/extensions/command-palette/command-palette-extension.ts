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
    private selectedIndex: number = 0;

    @state()
    private allCommands: any[] = [];

    @state()
    private showParameterPrompt: boolean = false;

    @state()
    private selectedCommand: any = null;

    @state()
    private parameterValues: { [key: string]: string } = {};

    private commandRegistry: any;
    private inputRef: Ref<HTMLInputElement> = createRef();
    private dialogRef: Ref<any> = createRef();

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
        if (this.dialogRef.value?.open) {
            this.closePalette();
        } else {
            this.openPalette();
        }
    }

    public async openPalette() {
        this.inputValue = '';
        this.updateCommandList();
        this.selectedIndex = 0;
        this.showParameterPrompt = false;
        
        // Wait for Lit to complete the render cycle
        await this.updateComplete;
        
        // Open the dialog using the ref
        if (this.dialogRef.value) {
            this.dialogRef.value.open = true;
            // Wait for dialog to open
            await this.dialogRef.value.updateComplete;
            // Focus the input
            this.inputRef.value?.focus();
        }
    }

    private closePalette() {
        // Close the dialog using the ref
        if (this.dialogRef.value) {
            this.dialogRef.value.open = false;
        }
        this.inputValue = '';
        this.selectedIndex = 0;
        this.showParameterPrompt = false;
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
        this.selectedIndex = 0;
    }

    private handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredCommands.length - 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            this.executeSelectedCommand();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            this.closePalette();
        }
    }

    private executeSelectedCommand() {
        const command = this.filteredCommands[this.selectedIndex];
        this.runCommand(command);
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
        // Cleanup if needed
    }

    static styles = css`
        :host {
            display: block;
        }

        wa-dialog::part(panel) {
            max-width: 600px;
            width: 90vw;
        }

        wa-dialog::part(body) {
            padding: 0;
        }

        .dialog-content {
            display: flex;
            flex-direction: column;
            max-height: 70vh;
        }

        .input-container {
            padding: 12px;
            border-bottom: 1px solid var(--wa-panel-border-color, #3e3e3e);
            flex-shrink: 0;
        }

        .input-container wa-input {
            width: 100%;
        }

        .command-list-scroller {
            flex: 1;
            min-height: 200px;
            max-height: 400px;
        }

        .command-list-content {
            padding: 4px;
        }

        .command-item {
            padding: 10px 16px;
            cursor: pointer;
            border-radius: 4px;
            margin-bottom: 2px;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.15s ease;
            position: relative;
            border-left: 3px solid transparent;
        }

        .command-item:hover {
            background: var(--wa-color-primary-900);
            transform: translateX(4px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border-left-color: var(--wa-color-primary-600);
        }

        .command-item.selected {
            background: var(--wa-color-primary-800);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            border-left-color: var(--wa-color-primary-600);
        }

        .command-item.selected:hover {
            transform: translateX(4px);
            border-left-color: var(--wa-color-primary-600);
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
            color: var(--wa-color-neutral-50);
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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
            padding: 40px 20px;
            text-align: center;
            color: var(--wa-color-neutral-400);
        }

        .parameter-prompt {
            padding: 20px;
        }

        .parameter-prompt-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--wa-color-neutral-50);
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

        .results-count {
            padding: 8px 16px;
            font-size: 11px;
            opacity: 0.5;
            border-bottom: 1px solid var(--wa-panel-border-color, #3e3e3e);
        }
    `;

    render() {
        return html`
            <wa-button @click=${this.togglePalette} appearance="plain">
                <wa-icon slot="start" name="terminal"></wa-icon>
                Run Command
            </wa-button>

            <wa-dialog 
                ${ref(this.dialogRef)}
                label="Command Palette"
                @wa-request-close=${this.handleDialogClose}
            >
                <div class="dialog-content">
                    ${!this.showParameterPrompt ? html`
                        <div class="input-container">
                            <wa-input
                                ${ref(this.inputRef)}
                                placeholder="Type a command name..."
                                .value=${this.inputValue}
                                @input=${this.handleInputChange}
                                @keydown=${this.handleKeyDown}
                            >
                                <wa-icon slot="start" name="magnifying-glass"></wa-icon>
                            </wa-input>
                        </div>
                    ` : ''}
                    
                    ${this.showParameterPrompt && this.selectedCommand ? html`
                        <div class="parameter-prompt">
                            <div class="parameter-prompt-title">
                                ${this.selectedCommand.name} - Parameters
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
                        </div>
                    ` : ''}
                    
                    ${!this.showParameterPrompt && this.filteredCommands.length > 0 ? html`
                        <div class="results-count">
                            ${this.filteredCommands.length} command${this.filteredCommands.length !== 1 ? 's' : ''}
                        </div>
                        <wa-scroller orientation="vertical" class="command-list-scroller">
                            <div class="command-list-content">
                                ${this.filteredCommands.map((cmd, index) => html`
                                    <div 
                                        class="command-item ${index === this.selectedIndex ? 'selected' : ''}"
                                        @click=${(e: Event) => { e.preventDefault(); this.runCommand(cmd); }}
                                        @mouseenter=${() => this.selectedIndex = index}
                                    >
                                        ${cmd.icon ? html`
                                            <div class="command-icon">
                                                <wa-icon name="${cmd.icon}"></wa-icon>
                                            </div>
                                        ` : html`
                                            <div class="command-icon">
                                                <wa-icon name="terminal"></wa-icon>
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
                            </div>
                        </wa-scroller>
                    ` : !this.showParameterPrompt ? html`
                        <div class="no-results">
                            <wa-icon name="search" style="font-size: 32px; margin-bottom: 8px; opacity: 0.3;"></wa-icon>
                            <div>No commands found</div>
                        </div>
                    ` : ''}
                </div>
            </wa-dialog>
        `;
    }

    private handleDialogClose(e: Event) {
        e.preventDefault();
        this.closePalette();
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

