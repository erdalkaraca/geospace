import { css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { KWidget } from '../widgets/k-widget.ts'
import { icon } from '../core/k-utils.ts'

@customElement('k-action')
export class KAction extends KWidget {
    @property({ type: Object, attribute: false })
    action?: (event?: Event) => void

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

    private handleClick(event: Event) {
        if (!this.disabled && this.action) {
            event.stopPropagation()
            this.action(event)
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
                    @click=${(e: Event) => this.handleClick(e)}>
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
                @click=${(e: Event) => this.handleClick(e)}>
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
        'k-action': KAction
    }
}

