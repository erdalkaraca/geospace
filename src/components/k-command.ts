import { css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { KWidget } from '../widgets/k-widget.ts'
import { icon } from '../core/k-utils.ts'
import { keyBindingManager } from '../core/keybindings.ts'
import { contributionRegistry, Contribution, CommandContribution, HTMLContribution, TOPIC_CONTRIBUTEIONS_CHANGED } from '../core/contributionregistry.ts'
import { subscribe } from '../core/events.ts'
import { Signal } from '@lit-labs/signals'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

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

    @property()
    dropdown?: string

    @property()
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' = 'bottom-start'

    @state()
    private dropdownContributions: Contribution[] = []

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

    protected doBeforeUI() {
        if (this.dropdown) {
            this.loadDropdownContributions()
            
            subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, () => {
                if (this.dropdown) {
                    this.loadDropdownContributions()
                }
            })
        }
    }

    private loadDropdownContributions() {
        if (!this.dropdown) return
        this.dropdownContributions = contributionRegistry.getContributions(this.dropdown)
        this.requestUpdate()
    }

    private renderContribution(contribution: Contribution) {
        if ('command' in contribution) {
            const commandContribution = contribution as CommandContribution
            const disabled = (commandContribution.disabled as Signal.Computed<boolean>)?.get()
            return html`
                <k-command 
                    cmd="${commandContribution.command}"
                    icon="${commandContribution.icon || ''}"
                    ?disabled="${disabled}">
                    ${commandContribution.label}
                </k-command>
            `
        }
        
        if ('html' in contribution) {
            const htmlContribution = contribution as HTMLContribution
            const contents = htmlContribution.html
            if (contents instanceof Function) {
                return contents()
            }
            return unsafeHTML(contents)
        }
        
        return nothing
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

        if (this.dropdown) {
            return html`
                <wa-dropdown placement=${this.placement}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        title=${keybinding ? `${this.title} (${keybinding})` : this.title}>
                        ${icon(this.icon, this.title)}
                        <slot></slot>
                    </wa-button>
                    
                    ${this.dropdownContributions.map(c => this.renderContribution(c))}
                    
                    ${this.cmd ? html`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon || ''}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                        </k-command>
                    ` : nothing}
                </wa-dropdown>
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

