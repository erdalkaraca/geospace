import { css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { KWidget } from '../widgets/k-widget.ts'
import { icon } from '../core/k-utils.ts'
import { keyBindingManager } from '../core/keybindings.ts'

@customElement('k-command')
export class KCommand extends KWidget {
    @property()
    cmd: string = ''

    @property()
    title: string = ''

    @property()
    icon?: string

    @property({ type: Boolean })
    disabled: boolean = false

    @property()
    appearance: 'default' | 'plain' | 'outline' = 'plain'

    @property()
    size: 'small' | 'medium' | 'large' = 'small'

    @property({ type: Object, attribute: false })
    params: Record<string, any> = {}

    private handleClick() {
        if (!this.disabled && this.cmd) {
            this.executeCommand(this.cmd, this.params)
        }
    }

    private isInDropdown(): boolean {
        return !!this.closest('wa-dropdown, wa-dropdown-menu')
    }

    private getKeybinding(): string | null {
        if (!this.cmd) return null
        const keybindings = keyBindingManager.getKeyBindingsForCommand(this.cmd)
        return keybindings.length > 0 ? keybindings[0] : null
    }

    render() {
        const keybinding = this.getKeybinding()

        if (this.isInDropdown()) {
            return html`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${() => this.handleClick()}>
                    ${icon(this.icon, this.title)}
                    <slot></slot>
                    ${keybinding ? html`<span class="keybinding">${keybinding}</span>` : ''}
                </wa-dropdown-item>
            `
        }

        return html`
            <wa-button 
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${keybinding ? `${this.title} (${keybinding})` : this.title}
                @click=${() => this.handleClick()}>
                ${icon(this.icon, this.title)}
                <slot></slot>
            </wa-button>
        `
    }

    static styles = css`
        :host {
            display: inline-block;
        }

        .keybinding {
            margin-left: auto;
            padding: 2px 6px;
            background: var(--wa-color-neutral-15);
            border: 1px solid var(--wa-color-neutral-25);
            border-radius: 3px;
            font-size: 10px;
            font-family: monospace;
            opacity: 0.7;
        }

        :host-context(.wa-light) .keybinding {
            background: var(--wa-color-neutral-85);
            border: 1px solid var(--wa-color-neutral-75);
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-command': KCommand
    }
}

