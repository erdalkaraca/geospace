import { css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { KWidget } from '../widgets/k-widget'
import '../widgets/k-icon'

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
    appearance: 'accent' | 'filled-outlined' | 'filled' | 'outlined' | 'plain' = 'plain'

    @property()
    variant: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' = 'neutral'

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
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                </wa-dropdown-item>
            `
        }

        return html`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${this.title}
                @click=${(e: Event) => this.handleClick(e)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
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

