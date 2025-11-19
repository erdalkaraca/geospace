import { css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { KWidget } from '../widgets/k-widget'
import '../widgets/k-icon'
import { contributionRegistry, TabContribution, ContributionChangeEvent, TOPIC_CONTRIBUTEIONS_CHANGED } from '../core/contributionregistry'
import { subscribe } from '../core/events'
import { Signal } from '@lit-labs/signals'
import { KTabs } from '../parts/k-tabs'
import { i18n } from '../core/i18n'

const t = i18n('fastviews');

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

    @state()
    private drawerSize: string = '50vw'

    private drawerRef: Ref<HTMLElement> = createRef()
    private tabsRef: Ref<KTabs> = createRef()
    private resizeHandleRef: Ref<HTMLElement> = createRef()

    private resizing: {
        startX: number
        startSize: number
        handleMouseMove: (e: MouseEvent) => void
        handleMouseUp: () => void
        rafId: number | null
    } | null = null

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

    private startResize(e: MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        
        const drawer = this.drawerRef.value as any
        if (!drawer) return

        const getDrawerSize = (): number => {
            const drawerPanel = drawer.shadowRoot?.querySelector('[part="panel"]') as HTMLElement
            if (drawerPanel && drawerPanel.offsetWidth > 0) {
                return drawerPanel.offsetWidth
            }
            const computedStyle = window.getComputedStyle(drawer)
            const sizeValue = computedStyle.getPropertyValue('--size') || this.drawerSize
            const match = sizeValue.match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/)
            if (match) {
                const value = parseFloat(match[1])
                const unit = match[2]
                if (unit === 'px') return value
                if (unit === 'vw') return (value / 100) * window.innerWidth
                if (unit === 'vh') return (value / 100) * window.innerHeight
                if (unit === '%') return (value / 100) * window.innerWidth
            }
            return 0
        }
        
        let currentSize = getDrawerSize()
        if (currentSize === 0) {
            currentSize = window.innerWidth * 0.5
        }
        
        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!this.resizing) return
            
            moveEvent.preventDefault()
            moveEvent.stopPropagation()

            if (this.resizing.rafId !== null) {
                cancelAnimationFrame(this.resizing.rafId)
            }

            this.resizing.rafId = requestAnimationFrame(() => {
                if (!this.resizing) return
                
                const delta = this.resizing.startX - moveEvent.clientX
                const newSize = Math.round(this.resizing.startSize + delta)
                const minSize = 200
                const maxSize = Math.round(window.innerWidth * 0.9)

                if (newSize >= minSize && newSize <= maxSize) {
                    this.drawerSize = `${newSize}px`
                    
                    const drawer = this.drawerRef.value as any
                    if (drawer) {
                        drawer.style.setProperty('--size', this.drawerSize)
                        drawer.style.setProperty('transition', 'none')
                    }
                }
                this.resizing.rafId = null
            })
        }

        const handleMouseUp = () => {
            if (this.resizing) {
                if (this.resizing.rafId !== null) {
                    cancelAnimationFrame(this.resizing.rafId)
                    this.resizing.rafId = null
                }
                
                document.removeEventListener('mousemove', this.resizing.handleMouseMove)
                document.removeEventListener('mouseup', this.resizing.handleMouseUp)
                document.body.style.cursor = ''
                document.body.style.userSelect = ''
                
                const drawer = this.drawerRef.value as any
                if (drawer) {
                    drawer.style.removeProperty('transition')
                }
                
                this.resizing = null
            }
        }

        this.resizing = {
            startX: e.clientX,
            startSize: currentSize,
            handleMouseMove,
            handleMouseUp,
            rafId: null
        }

        document.addEventListener('mousemove', handleMouseMove, { passive: false })
        document.addEventListener('mouseup', handleMouseUp, { passive: false })
        document.body.style.cursor = 'col-resize'
        document.body.style.userSelect = 'none'
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
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                ` : nothing}
                
                ${this.tabContributions.map(c => this.renderTabContribution(c))}
            </wa-dropdown>

            ${!this.containerId ? html`
                <wa-drawer 
                    ${ref(this.drawerRef)}
                    label="${this.title || t('FAST_VIEWS')}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${ref(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
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

        wa-drawer {
            position: relative;
        }

        wa-drawer::part(panel) {
            position: relative;
        }

        .resize-handle {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            cursor: col-resize;
            z-index: 1000;
            background: transparent;
            transition: background-color 0.2s;
            user-select: none;
            touch-action: none;
        }

        .resize-handle:hover {
            background: var(--wa-color-brand-fill-loud);
        }

        .resize-handle:active {
            background: var(--wa-color-brand-fill-loud);
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-fastviews': KFastViews
    }
}

