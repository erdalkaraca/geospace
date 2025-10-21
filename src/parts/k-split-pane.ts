import {html, nothing} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {KElement} from "./k-element.ts";
import {
    PaneContribution,
    TOPIC_CONTRIBUTEIONS_CHANGED
} from "../core/contributionregistry.ts";
import {contributionRegistry} from "../core/contributionregistry.ts";
import {SignalWatcher} from '@lit-labs/signals';
import {subscribe} from "../core/events.ts";
import {styleMap} from 'lit/directives/style-map.js';
import {ref, createRef, Ref} from 'lit/directives/ref.js';

interface PaneState {
    contribution: PaneContribution;
    size: number;
    element?: HTMLElement;
}

@customElement('k-split-pane')
export class KSplitPane extends SignalWatcher(KElement) {
    @property()
    orientation: 'horizontal' | 'vertical' = 'horizontal';

    @state()
    private panes: PaneState[] = [];

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

    protected doBeforeUI() {
        if (this.getAttribute("id")) {
            const id = this.getAttribute("id")!
            this.loadPanes(id);
        }
    }

    protected doAfterUI() {
        if (this.getAttribute("id")) {
            const id = this.getAttribute("id")!
            this.loadPanes(id);
        }
    }

    protected doInitUI() {
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, () => {
            if (this.getAttribute("id")) {
                this.loadPanes(this.getAttribute("id")!);
            }
        });
    }

    private loadPanes(id: string) {
        const contributions = contributionRegistry.getContributions(id) as PaneContribution[];
        
        const sortedContributions = [...contributions].sort((a, b) => {
            const orderA = a.order ?? 0;
            const orderB = b.order ?? 0;
            return orderA - orderB;
        });

        this.panes = sortedContributions.map(contribution => ({
            contribution,
            size: contribution.size ?? 100 / sortedContributions.length
        }));
        
        this.requestUpdate();
    }

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
        
        const delta = currentPos - this.resizing.startPos;
        const deltaPercent = (delta / containerSize) * 100;

        const newSize = this.resizing.startSize + deltaPercent;
        const nextNewSize = this.resizing.nextStartSize - deltaPercent;

        const pane = this.panes[this.resizing.paneIndex];
        const nextPane = this.panes[this.resizing.paneIndex + 1];

        const minSize = pane.contribution.minSize ?? 5;
        const maxSize = pane.contribution.maxSize ?? 95;
        const nextMinSize = nextPane.contribution.minSize ?? 5;
        const nextMaxSize = nextPane.contribution.maxSize ?? 95;

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
        }
    }

    private stopResize = () => {
        this.resizing = null;
        document.removeEventListener('mousemove', this.handleResize);
        document.removeEventListener('mouseup', this.stopResize);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.resizing) {
            this.stopResize();
        }
    }

    render() {
        if (this.panes.length === 0) {
            return nothing;
        }

        const containerStyle = {
            display: 'flex',
            flexDirection: this.orientation === 'horizontal' ? 'row' : 'column',
            height: '100%',
            width: '100%',
            overflow: 'hidden'
        } as const;

        return html`
            <div ${ref(this.containerRef)} style=${styleMap(containerStyle)}>
                ${this.panes.map((pane, index) => {
                    const paneStyle = {
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: `${pane.size}%`,
                        overflow: 'hidden',
                        position: 'relative',
                        minWidth: this.orientation === 'horizontal' ? `${pane.contribution.minSize ?? 5}%` : undefined,
                        minHeight: this.orientation === 'vertical' ? `${pane.contribution.minSize ?? 5}%` : undefined,
                        maxWidth: this.orientation === 'horizontal' ? `${pane.contribution.maxSize ?? 95}%` : undefined,
                        maxHeight: this.orientation === 'vertical' ? `${pane.contribution.maxSize ?? 95}%` : undefined,
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
                        <div style=${styleMap(paneStyle)} data-pane-name="${pane.contribution.name}">
                            ${pane.contribution.component()}
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

    connectedCallback() {
        super.connectedCallback();
        this.style.display = 'block';
        this.style.height = '100%';
        this.style.width = '100%';
        this.style.overflow = 'hidden';
    }
}

