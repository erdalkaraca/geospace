import { css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { KWidget } from '../widgets/k-widget.ts'
import { icon } from '../core/k-utils.ts'

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

    render() {
        if (this.isInDropdown()) {
            return html`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${() => this.handleClick()}>
                    ${icon(this.icon, this.title)}
                    <slot></slot>
                </wa-dropdown-item>
            `
        }

        return html`
            <wa-button 
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${this.title}
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
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-command': KCommand
    }
}

