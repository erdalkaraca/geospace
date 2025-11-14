import { css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { KWidget } from '../widgets/k-widget'
import '../widgets/k-icon'
import { keyBindingManager } from '../core/keybindings'
import { contributionRegistry, Contribution, CommandContribution, HTMLContribution, ContributionChangeEvent, TOPIC_CONTRIBUTEIONS_CHANGED } from '../core/contributionregistry'
import { subscribe } from '../core/events'
import { Signal } from '@lit-labs/signals'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('k-command')
export class KCommand extends KWidget {
    @property()
    cmd: string = ''

    @property({ type: Object, attribute: false })
    action?: (event?: Event) => void

    @property()
    title: string = ''

    @property()
    label?: boolean = false

    @property()
    icon?: string

    @property({ type: Boolean })
    disabled: boolean = false

    @property()
    appearance: 'default' | 'plain' | 'outline' | 'accent' | 'filled-outlined' | 'filled' | 'outlined' = 'plain'

    @property()
    variant: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' = 'neutral'

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

    private handleClick(event?: Event) {
        if (this.disabled) return

        if (event) {
            event.stopPropagation()
        }

        if (this.action) {
            this.action(event)
            return
        }

        if (this.cmd) {
            const dropdown = this.closest('wa-dropdown') as any;
            if (dropdown && dropdown.open !== undefined) {
                dropdown.open = false;
            }
            this.executeCommand(this.cmd, this.params);
        }
    }

    private handleSelect(event: CustomEvent) {
        // Close dropdown immediately when any item is selected
        // This ensures the dropdown is hidden before the command executes
        const dropdown = event.target as any;
        if (dropdown && dropdown.open !== undefined) {
            dropdown.open = false;
        }
    }

    private isInDropdown(): boolean {
        return !!this.closest('wa-dropdown, wa-dropdown-menu')
    }

    private getKeybinding(): string | null {
        if (!this.cmd || this.action) return null
        const keybindings = keyBindingManager.getKeyBindingsForCommand(this.cmd)
        return keybindings.length > 0 ? keybindings[0] : null
    }

    protected doBeforeUI() {
        if (this.dropdown) {
            this.loadDropdownContributions()
            
            subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: ContributionChangeEvent) => {
                if (this.dropdown && event.target === this.dropdown) {
                    this.dropdownContributions = event.contributions;
                    this.requestUpdate();
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
                    .params=${commandContribution.params || {}}
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
                    @click=${(e: Event) => this.handleClick(e)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${keybinding ? html`<span class="keybinding">${keybinding}</span>` : ''}
                </wa-dropdown-item>
            `
        }

        if (this.dropdown) {
            return html`
                <wa-dropdown 
                    placement=${this.placement}
                    @wa-select=${(e: CustomEvent) => this.handleSelect(e)}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        variant=${this.variant}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${keybinding ? `${this.title} (${keybinding})` : this.title}>
                        <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                        <slot></slot>
                        ${this.label ? this.title : nothing}
                    </wa-button>
                    
                    ${this.title ? html`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    ` : nothing}
                    
                    ${this.dropdownContributions.map(c => this.renderContribution(c))}
                    
                    ${this.cmd ? html`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon || ''}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                            ${this.title}
                        </k-command>
                    ` : nothing}
                </wa-dropdown>
            `
        }

        return html`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${keybinding ? `${this.title} (${keybinding})` : this.title}
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

