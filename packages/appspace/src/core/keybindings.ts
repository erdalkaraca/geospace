/**
 * Key Binding Manager for geo!space
 * 
 * Handles keyboard shortcuts and binds them to commands.
 * Supports standard modifiers: CTRL, ALT, SHIFT, META (CMD on Mac)
 */

import logger from "./logger";
import { commandRegistry } from "./commandregistry";
import { rootContext } from "./di";

import type { Command } from "./commandregistry";

export interface KeyBinding {
    commandId: string;
    key: string;
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
    meta?: boolean;
}

export class KeyBindingManager {
    private bindings: Map<string, KeyBinding[]> = new Map();
    private enabled: boolean = true;

    constructor() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this), true);
        this.registerExistingCommandBindings();
        this.watchCommandRegistry();
    }

    /**
     * Register key bindings from commands that were already registered
     */
    private registerExistingCommandBindings() {
        const commands = commandRegistry.listCommands();
        Object.values(commands).forEach((command: Command) => {
            if (command.keyBinding) {
                this.registerKeyBinding(command.id, command.keyBinding);
            }
        });
    }

    /**
     * Watch the command registry for new commands with key bindings
     */
    private watchCommandRegistry() {
        // Intercept command registration by wrapping the method
        const originalRegister = commandRegistry.registerCommand.bind(commandRegistry);
        commandRegistry.registerCommand = (command: Command) => {
            originalRegister(command);
            
            // Auto-register key binding if present
            if (command.keyBinding) {
                this.registerKeyBinding(command.id, command.keyBinding);
            }
        };
    }

    /**
     * Parse a key binding string like "CTRL+SHIFT+P" or "ALT+S"
     */
    parseKeyBinding(keyBindingString: string): KeyBinding | null {
        if (!keyBindingString || keyBindingString.trim() === '') {
            return null;
        }

        const parts = keyBindingString.toUpperCase().split('+').map(p => p.trim());
        
        if (parts.length === 0) {
            return null;
        }

        const binding: Partial<KeyBinding> = {
            ctrl: false,
            alt: false,
            shift: false,
            meta: false
        };

        // Last part is the key, everything else is modifiers
        const key = parts[parts.length - 1];
        const modifiers = parts.slice(0, -1);

        for (const modifier of modifiers) {
            switch (modifier) {
                case 'CTRL':
                case 'CONTROL':
                    binding.ctrl = true;
                    break;
                case 'ALT':
                case 'OPTION':
                    binding.alt = true;
                    break;
                case 'SHIFT':
                    binding.shift = true;
                    break;
                case 'META':
                case 'CMD':
                case 'COMMAND':
                case 'WIN':
                case 'WINDOWS':
                    binding.meta = true;
                    break;
                default:
                    logger.warn(`Unknown modifier: ${modifier}`);
            }
        }

        // Normalize key
        binding.key = this.normalizeKey(key);

        return binding as KeyBinding;
    }

    /**
     * Normalize key names for consistency
     */
    private normalizeKey(key: string): string {
        const keyMap: { [key: string]: string } = {
            'SPACE': ' ',
            'ESC': 'ESCAPE',
            'RETURN': 'ENTER',
            'LEFT': 'ARROWLEFT',
            'RIGHT': 'ARROWRIGHT',
            'UP': 'ARROWUP',
            'DOWN': 'ARROWDOWN',
            'DEL': 'DELETE',
            'INS': 'INSERT',
            'PAGEUP': 'PAGEUP',
            'PAGEDOWN': 'PAGEDOWN',
        };

        return keyMap[key] || key;
    }

    /**
     * Create a unique key for a binding
     */
    private getBindingKey(binding: KeyBinding): string {
        const modifiers = [];
        if (binding.ctrl) modifiers.push('ctrl');
        if (binding.alt) modifiers.push('alt');
        if (binding.shift) modifiers.push('shift');
        if (binding.meta) modifiers.push('meta');
        
        modifiers.sort(); // Ensure consistent ordering
        
        return `${modifiers.join('+')}+${binding.key.toUpperCase()}`;
    }

    /**
     * Register a key binding for a command
     */
    registerKeyBinding(commandId: string, keyBindingString: string): boolean {
        const binding = this.parseKeyBinding(keyBindingString);
        
        if (!binding) {
            logger.error(`Invalid key binding: ${keyBindingString}`);
            return false;
        }

        binding.commandId = commandId;
        
        const bindingKey = this.getBindingKey(binding);
        
        if (!this.bindings.has(bindingKey)) {
            this.bindings.set(bindingKey, []);
        }
        
        const existing = this.bindings.get(bindingKey)!;
        
        // Check for conflicts
        const conflict = existing.find(b => b.commandId === commandId);
        if (conflict) {
            logger.error(`Key binding ${keyBindingString} already registered for command ${commandId}`);
            return false;
        }
        
        existing.push(binding);
        logger.debug(`Key binding registered: ${keyBindingString} -> ${commandId}`);
        
        return true;
    }

    /**
     * Unregister a key binding
     */
    unregisterKeyBinding(commandId: string, keyBindingString?: string): void {
        if (keyBindingString) {
            const binding = this.parseKeyBinding(keyBindingString);
            if (binding) {
                const bindingKey = this.getBindingKey(binding);
                const bindings = this.bindings.get(bindingKey);
                if (bindings) {
                    const filtered = bindings.filter(b => b.commandId !== commandId);
                    if (filtered.length === 0) {
                        this.bindings.delete(bindingKey);
                    } else {
                        this.bindings.set(bindingKey, filtered);
                    }
                }
            }
        } else {
            // Remove all bindings for this command
            for (const [key, bindings] of this.bindings.entries()) {
                const filtered = bindings.filter(b => b.commandId !== commandId);
                if (filtered.length === 0) {
                    this.bindings.delete(key);
                } else {
                    this.bindings.set(key, filtered);
                }
            }
        }
    }

    /**
     * Get all key bindings for a command
     */
    getKeyBindingsForCommand(commandId: string): string[] {
        const result: string[] = [];
        
        for (const bindings of this.bindings.values()) {
            for (const binding of bindings) {
                if (binding.commandId === commandId) {
                    result.push(this.formatKeyBinding(binding));
                }
            }
        }
        
        return result;
    }

    /**
     * Format a key binding for display
     */
    formatKeyBinding(binding: KeyBinding): string {
        const parts: string[] = [];
        
        if (binding.ctrl) parts.push('Ctrl');
        if (binding.alt) parts.push('Alt');
        if (binding.shift) parts.push('Shift');
        if (binding.meta) parts.push('Cmd');
        
        // Format the key nicely
        let key = binding.key;
        if (key.length === 1) {
            key = key.toUpperCase();
        } else {
            // Capitalize first letter for special keys
            key = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
        }
        
        parts.push(key);
        
        return parts.join('+');
    }

    /**
     * Handle keyboard events
     */
    private handleKeyDown(event: KeyboardEvent): void {
        if (!this.enabled) {
            return;
        }

        // Don't intercept if user is typing in an input field
        const target = event.target as HTMLElement;
        if (target && (
            target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable
        )) {
            // Allow certain global shortcuts even in input fields
            const key = event.key.toUpperCase();
            const isGlobalShortcut = (
                (event.ctrlKey || event.metaKey) && 
                event.shiftKey && 
                key === 'P'
            );
            
            if (!isGlobalShortcut) {
                return;
            }
        }

        // Create binding from event
        const eventBinding: KeyBinding = {
            commandId: '', // Will be filled later
            key: this.normalizeKey(event.key.toUpperCase()),
            ctrl: event.ctrlKey,
            alt: event.altKey,
            shift: event.shiftKey,
            meta: event.metaKey
        };

        const bindingKey = this.getBindingKey(eventBinding);
        const bindings = this.bindings.get(bindingKey);

        if (bindings && bindings.length > 0) {
            // Execute the first matching command
            // TODO: Handle multiple bindings (show picker?)
            const binding = bindings[0];
            
            try {
                event.preventDefault();
                event.stopPropagation();
                
                const context = commandRegistry.createExecutionContext({});
                
                commandRegistry.execute(binding.commandId, context);
                logger.info(`Executed command via key binding: ${binding.commandId}`);
            } catch (error: any) {
                logger.error(`Failed to execute command ${binding.commandId}: ${error.message}`);
            }
        }
    }

    /**
     * Enable or disable key binding handling
     */
    setEnabled(enabled: boolean): void {
        this.enabled = enabled;
    }

    /**
     * Check if key binding handling is enabled
     */
    isEnabled(): boolean {
        return this.enabled;
    }

    /**
     * Get all registered key bindings
     */
    getAllBindings(): Map<string, KeyBinding[]> {
        return new Map(this.bindings);
    }

    /**
     * Clear all key bindings
     */
    clearAll(): void {
        this.bindings.clear();
    }
}

logger.debug('KeyBindingManager initializing...');
export const keyBindingManager = new KeyBindingManager();
logger.debug('KeyBindingManager initialized');
rootContext.put("keyBindingManager", keyBindingManager);

