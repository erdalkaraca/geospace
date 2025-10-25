import {html, nothing} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {KElement} from "./k-element.ts";
import {
    contributionRegistry,
    ContributionChangeEvent,
    PaneContribution,
    TOPIC_CONTRIBUTEIONS_CHANGED
} from "../core/contributionregistry.ts";
import {SignalWatcher} from '@lit-labs/signals';
import {subscribe} from "../core/events.ts";
import {styleMap} from 'lit/directives/style-map.js';
import {ref, createRef, Ref} from 'lit/directives/ref.js';

interface PaneState {
    contribution?: PaneContribution;
    element?: HTMLElement;
    size: number;
    minSize?: number;
    maxSize?: number;
    name: string;
}

/**
 * KSplitPane - A resizable split pane container
 * 
 * Supports two modes:
 * 1. Contribution-based: Uses 'id' attribute to load panes from contributionRegistry
 * 2. Direct children: Uses 'ratios' attribute to create panes from direct child elements
 * 
 * Features:
 * - Interactive resize handles between panes
 * - Configurable min/max sizes per pane
 * - Horizontal or vertical orientation
 * - Maintains proportions on resize
 */
@customElement('k-split-pane')
export class KSplitPane extends SignalWatcher(KElement) {
    @property()
    orientation: 'horizontal' | 'vertical' = 'horizontal';

    @property()
    ratios?: string;

    @state()
    private panes: PaneState[] = [];

    private containerId: string | null = null;
    private useDirectChildren = false;
    private childObserver?: MutationObserver;

    private containerRef: Ref<HTMLDivElement> = createRef();
    private resizing: {
        paneIndex: number;
        startPos: number;
        startSize: number;
        nextStartSize: number;
    } | null = null;

    createRenderRoot() {
        return this;
    }

    // ============= Lifecycle Methods =============

    protected doBeforeUI() {
        this.containerId = this.getAttribute("id");
        
        if (this.ratios) {
            // Direct children mode: create panes from child elements
            this.useDirectChildren = true;
            this.checkAndLoadChildren();
        } else if (this.containerId) {
            // Contribution mode: load panes from registry
            this.loadPanes(this.containerId);
        }
    }

    protected doInitUI() {
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: ContributionChangeEvent) => {
            if (!this.useDirectChildren && this.containerId && event.target === this.containerId) {
                this.loadPanes(this.containerId);
            }
        });
    }

    private checkAndLoadChildren() {
        if (this.children.length > 0) {
            this.loadPanesFromChildren();
            return;
        }
        
        // No children yet - set up observer to wait for dynamic children
        this.childObserver = new MutationObserver(() => {
            if (this.children.length > 0) {
                this.loadPanesFromChildren();
                this.childObserver?.disconnect();
            }
        });
        this.childObserver.observe(this, { childList: true });
    }

    // ============= Pane Loading Methods =============

    private loadPanes(id: string) {
        const contributions = contributionRegistry.getContributions(id) as PaneContribution[];
        
        const sortedContributions = [...contributions].sort((a, b) => {
            const orderA = a.order ?? 0;
            const orderB = b.order ?? 0;
            return orderA - orderB;
        });

        this.panes = sortedContributions.map(contribution => ({
            contribution,
            size: contribution.size ?? 100 / sortedContributions.length,
            minSize: contribution.minSize,
            maxSize: contribution.maxSize,
            name: contribution.name
        }));
        
        this.requestUpdate();
    }

    private loadPanesFromChildren() {
        const childElements = Array.from(this.children) as HTMLElement[];

        const ratioValues = this.ratios 
            ? this.ratios.split(',').map(r => parseFloat(r.trim()))
            : childElements.map(() => 100 / childElements.length);

        this.panes = childElements.map((element, index) => ({
            element,
            size: ratioValues[index] || 100 / childElements.length,
            minSize: 5,
            maxSize: 95,
            name: `pane-${index}`
        }));

        this.requestUpdate();
    }

    // ============= Resize Handling Methods =============

    private startResize(e: MouseEvent, paneIndex: number) {
        e.preventDefault();
        
        if (paneIndex >= this.panes.length - 1) return;

        const startPos = this.orientation === 'horizontal' ? e.clientX : e.clientY;
        
        this.resizing = {
            paneIndex,
            startPos,
            startSize: this.panes[paneIndex].size,
            nextStartSize: this.panes[paneIndex + 1].size
        };

        document.addEventListener('mousemove', this.handleResize);
        document.addEventListener('mouseup', this.stopResize);
        
        document.body.style.cursor = this.orientation === 'horizontal' ? 'col-resize' : 'row-resize';
        document.body.style.userSelect = 'none';
    }

    private handleResize = (e: MouseEvent) => {
        if (!this.resizing || !this.containerRef.value) return;

        const currentPos = this.orientation === 'horizontal' ? e.clientX : e.clientY;
        const containerSize = this.orientation === 'horizontal' 
            ? this.containerRef.value.offsetWidth 
            : this.containerRef.value.offsetHeight;
        
        // Account for splitter widths: available space = container - (splitters * 4px)
        const splitterCount = this.panes.length - 1;
        const splitterTotalPx = splitterCount * 4;
        const availableSpace = containerSize - splitterTotalPx;
        
        const delta = currentPos - this.resizing.startPos;
        const deltaPercent = (delta / availableSpace) * 100;

        const newSize = this.resizing.startSize + deltaPercent;
        const nextNewSize = this.resizing.nextStartSize - deltaPercent;

        const pane = this.panes[this.resizing.paneIndex];
        const nextPane = this.panes[this.resizing.paneIndex + 1];

        const minSize = pane.minSize ?? 5;
        const maxSize = pane.maxSize ?? 95;
        const nextMinSize = nextPane.minSize ?? 5;
        const nextMaxSize = nextPane.maxSize ?? 95;

        if (newSize >= minSize && newSize <= maxSize && 
            nextNewSize >= nextMinSize && nextNewSize <= nextMaxSize) {
            
            this.panes = this.panes.map((p, idx) => {
                if (idx === this.resizing!.paneIndex) {
                    return { ...p, size: newSize };
                } else if (idx === this.resizing!.paneIndex + 1) {
                    return { ...p, size: nextNewSize };
                }
                return p;
            });
            
            // Ensure total is exactly 100% to prevent rounding errors
            const total = this.panes.reduce((sum, p) => sum + p.size, 0);
            if (Math.abs(total - 100) > 0.01) {
                // Adjust the last pane to compensate for rounding errors
                const lastPane = this.panes[this.panes.length - 1];
                lastPane.size += (100 - total);
            }
        }
    }

    private stopResize = () => {
        this.resizing = null;
        document.removeEventListener('mousemove', this.handleResize);
        document.removeEventListener('mouseup', this.stopResize);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }

    // ============= Cleanup Methods =============

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.resizing) {
            this.stopResize();
        }
        if (this.childObserver) {
            this.childObserver.disconnect();
        }
    }

    // ============= Render Methods =============

    render() {
        if (this.panes.length === 0) {
            return nothing;
        }

        const containerStyle = {
            display: 'flex',
            flexDirection: this.orientation === 'horizontal' ? 'row' : 'column',
            flexWrap: 'nowrap',
            height: '100%',
            width: '100%',
            overflow: 'hidden'
        } as const;

        // Calculate splitter adjustment for flex-basis
        const splitterCount = this.panes.length - 1;
        const splitterTotalPx = splitterCount * 4;
        
        return html`
            <div ${ref(this.containerRef)} style=${styleMap(containerStyle)}>
                ${this.panes.map((pane, index) => {
                    // Adjust flex-basis to account for splitters: each pane loses its proportional share
                    const adjustedBasis = `calc(${pane.size}% - ${(pane.size / 100) * splitterTotalPx}px)`;
                    
                    const paneStyle = {
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: adjustedBasis,
                        overflow: 'hidden',
                        position: 'relative',
                        minWidth: this.orientation === 'horizontal' ? `${pane.minSize ?? 5}%` : undefined,
                        minHeight: this.orientation === 'vertical' ? `${pane.minSize ?? 5}%` : undefined,
                        maxWidth: this.orientation === 'horizontal' ? `${pane.maxSize ?? 95}%` : undefined,
                        maxHeight: this.orientation === 'vertical' ? `${pane.maxSize ?? 95}%` : undefined,
                    } as const;

                    const splitterStyle = {
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: '4px',
                        backgroundColor: 'var(--wa-color-neutral-border-subtle, rgba(128, 128, 128, 0.2))',
                        cursor: this.orientation === 'horizontal' ? 'col-resize' : 'row-resize',
                        zIndex: 10,
                        position: 'relative',
                        transition: 'background-color 0.15s ease'
                    } as const;

                    const splitterHoverStyle = 'background-color: var(--wa-color-primary-fill, rgba(0, 102, 204, 0.4));';

                    return html`
                        <div style=${styleMap(paneStyle)} data-pane-name="${pane.name}">
                            ${this.useDirectChildren ? nothing : pane.contribution?.component()}
                        </div>
                        ${index < this.panes.length - 1 ? html`
                            <div 
                                style=${styleMap(splitterStyle)}
                                @mousedown=${(e: MouseEvent) => this.startResize(e, index)}
                                @mouseenter=${(e: Event) => (e.target as HTMLElement).style.cssText += splitterHoverStyle}
                                @mouseleave=${(e: Event) => (e.target as HTMLElement).style.backgroundColor = 'var(--wa-color-neutral-border-subtle, rgba(128, 128, 128, 0.2))'}
                            ></div>
                        ` : nothing}
                    `;
                })}
            </div>
        `;
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        // Only manage pane elements when panes actually change
        if (!changedProperties.has('panes')) return;
        
        if (this.useDirectChildren && this.panes.length > 0) {
            this.panes.forEach((pane) => {
                if (pane.element) {
                    const paneDiv = this.querySelector(`[data-pane-name="${pane.name}"]`);
                    if (paneDiv && !paneDiv.contains(pane.element)) {
                        const element = pane.element as HTMLElement;
                        element.style.height = '100%';
                        element.style.width = '100%';
                        element.style.display = 'block';
                        paneDiv.appendChild(element);
                    }
                }
            });
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.style.display = 'block';
        this.style.height = '100%';
        this.style.width = '100%';
        this.style.overflow = 'hidden';
    }
}

