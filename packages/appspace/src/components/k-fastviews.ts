import { css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { KWidget } from '../widgets/k-widget'
import '../widgets/k-icon'
import { contributionRegistry, TabContribution, ContributionChangeEvent, TOPIC_CONTRIBUTEIONS_CHANGED } from '../core/contributionregistry'
import { subscribe } from '../core/events'
import { Signal } from '@lit-labs/signals'
import { KTabs } from '../parts/k-tabs'

@customElement('k-fastviews')
export class KFastViews extends KWidget {
    @property()
    target: string = ''

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

    @property()
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' = 'bottom-start'

    @property()
    containerId?: string

    @state()
    private tabContributions: TabContribution[] = []

    @state()
    private drawerOpen: boolean = false

    private drawerRef: Ref<HTMLElement> = createRef()
    private tabsRef: Ref<KTabs> = createRef()

    private getDrawerTabsId(): string {
        return `fastviews-drawer-tabs-${this.target}`
    }

    private handleTabClick(contribution: TabContribution) {
        if (this.disabled) return

        if (this.containerId) {
            const tabContainer = document.querySelector(`k-tabs#${this.containerId}`) as KTabs | null
            if (!tabContainer) {
                console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`)
                return
            }
            tabContainer.open(contribution)
        } else {
            this.drawerOpen = true
            
            this.updateComplete.then(() => {
                const tabsContainer = this.tabsRef.value
                if (tabsContainer) {
                    tabsContainer.open(contribution)
                }
            })
        }
    }

    private handleDrawerHide() {
        this.drawerOpen = false
    }

    protected doBeforeUI() {
        if (this.target) {
            this.loadTabContributions()
            
            subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: ContributionChangeEvent) => {
                if (this.target && event.target === this.target) {
                    this.loadTabContributions()
                }
            })
        }
    }

    private loadTabContributions() {
        if (!this.target) return
        
        const allContributions = contributionRegistry.getContributions(this.target)
        this.tabContributions = allContributions.filter((c): c is TabContribution => 'name' in c)
        this.requestUpdate()
    }

    private renderTabContribution(contribution: TabContribution) {
        const disabled = (contribution.disabled as Signal.Computed<boolean>)?.get()
        return html`
            <wa-dropdown-item 
                ?disabled=${disabled}
                @click=${() => this.handleTabClick(contribution)}>
                <k-icon name="${contribution.icon || ''}" label="${contribution.label}" slot="icon"></k-icon>
                ${contribution.label}
            </wa-dropdown-item>
        `
    }

    render() {
        if (!this.target) {
            return nothing
        }

        if (this.tabContributions.length === 0) {
            return nothing
        }

        return html`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                    <slot></slot>
                </wa-button>
                
                ${this.title ? html`
                    <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                ` : nothing}
                
                ${this.tabContributions.map(c => this.renderTabContribution(c))}
            </wa-dropdown>

            ${!this.containerId ? html`
                <wa-drawer 
                    ${ref(this.drawerRef)}
                    label="${this.title || 'Fast Views'}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: 50vw;">
                    <k-tabs 
                        ${ref(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            ` : nothing}
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
        'k-fastviews': KFastViews
    }
}

