/**
 * KResizableGrid - A simple resizable grid layout component
 * 
 * Uses CSS Grid with explicit column/row templates and manual resize handles.
 * Much simpler and more predictable than flex-based layouts.
 * 
 * Features:
 * - Horizontal or vertical orientation
 * - Custom size distribution via 'sizes' attribute
 * - Interactive resize handles between children
 * - Min size constraints (5% of container)
 * 
 * Example usage:
 * <k-resizable-grid orientation="horizontal" sizes="20%, 60%, 20%">
 *   <div>Left</div>
 *   <div>Center</div>
 *   <div>Right</div>
 * </k-resizable-grid>
 */
import {customElement, property, state} from "lit/decorators.js";
import {html, nothing} from "lit";
import {KElement} from "./k-element.ts";

@customElement('k-resizable-grid')
export class KResizableGrid extends KElement {
    @property()
    orientation: 'horizontal' | 'vertical' = 'horizontal';

    @property()
    sizes?: string; // e.g., "20%, 60%, 20%"

    @state()
    private gridSizes: string[] = [];

    @state()
    private gridChildren: HTMLElement[] = [];

    private resizing: {
        handleIndex: number;
        startPos: number;
        startSizes: number[];
    } | null = null;
    
    private childrenLoaded = false;
    private childStylesApplied = false;
    private mutationObserver?: MutationObserver;

    createRenderRoot() {
        return this;
    }

    // ============= Lifecycle Methods =============

    protected doBeforeUI() {
        // Only set up observer if children not yet loaded
        if (!this.childrenLoaded) {
            // Use MutationObserver to detect when children are added
            this.mutationObserver = new MutationObserver(() => {
                if (!this.childrenLoaded) {
                    this.loadChildren();
                }
            });
            
            this.mutationObserver.observe(this, { childList: true, subtree: false });
            
            // Also try to load immediately
            this.loadChildren();
        }
    }

    private loadChildren() {
        const potentialChildren = Array.from(this.children).filter(
            child => child.tagName !== 'STYLE' && 
                     child.tagName !== 'SCRIPT' && 
                     !child.classList.contains('resize-handle')
        ) as HTMLElement[];

        if (potentialChildren.length === 0) {
            return;
        }

        // Mark as loaded and disconnect observer
        this.childrenLoaded = true;
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
            this.mutationObserver = undefined;
        }

        // Store children references
        this.gridChildren = potentialChildren;

        // Parse sizes or use equal distribution
        if (this.sizes) {
            this.gridSizes = this.sizes.split(',').map(s => s.trim());
        } else {
            const equalSize = `${100 / this.gridChildren.length}%`;
            this.gridSizes = this.gridChildren.map(() => equalSize);
        }

        this.requestUpdate();
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        // Only apply child styles once when children are first loaded
        // This prevents interfering with nested resizable grids during resize operations
        if (changedProperties.has('gridChildren') && !this.childStylesApplied && this.gridChildren.length > 0) {
            this.childStylesApplied = true;
            
            // Apply grid positioning and styling to children
            this.gridChildren.forEach((child, index) => {
                child.style.overflow = 'hidden';
                child.style.height = '100%';
                child.style.width = '100%';
                child.style.gridColumn = this.orientation === 'horizontal' ? `${index * 2 + 1}` : '1';
                child.style.gridRow = this.orientation === 'vertical' ? `${index * 2 + 1}` : '1';
                child.style.display = 'flex';
                child.style.flexDirection = 'column';
            });
        }
    }

    // ============= Resize Handling Methods =============

    private startResize(e: MouseEvent, handleIndex: number) {
        e.preventDefault();
        
        if (handleIndex >= this.gridChildren.length - 1) return;

        const startPos = this.orientation === 'horizontal' ? e.clientX : e.clientY;
        
        // Convert all sizes to pixels at the start of resize
        const containerSize = this.orientation === 'horizontal' 
            ? this.offsetWidth 
            : this.offsetHeight;
        
        const startSizes = this.gridSizes.map(size => {
            if (size.endsWith('%')) {
                return (parseFloat(size) / 100) * containerSize;
            } else if (size.endsWith('px')) {
                return parseFloat(size);
            } else {
                return parseFloat(size);
            }
        });

        this.resizing = {
            handleIndex,
            startPos,
            startSizes
        };

        document.addEventListener('mousemove', this.handleResize);
        document.addEventListener('mouseup', this.stopResize);
        
        document.body.style.cursor = this.orientation === 'horizontal' ? 'col-resize' : 'row-resize';
        document.body.style.userSelect = 'none';
    }

    private handleResize = (e: MouseEvent) => {
        if (!this.resizing) return;

        const currentPos = this.orientation === 'horizontal' ? e.clientX : e.clientY;
        const delta = currentPos - this.resizing.startPos;

        const newSizes = [...this.resizing.startSizes];
        newSizes[this.resizing.handleIndex] += delta;
        newSizes[this.resizing.handleIndex + 1] -= delta;

        // Apply min constraints (5% of container)
        const containerSize = this.orientation === 'horizontal' 
            ? this.offsetWidth 
            : this.offsetHeight;
        const minSize = containerSize * 0.05;

        if (newSizes[this.resizing.handleIndex] >= minSize && 
            newSizes[this.resizing.handleIndex + 1] >= minSize) {
            
            // Convert back to percentages for storage
            this.gridSizes = newSizes.map(size => {
                const percent = (size / containerSize) * 100;
                return `${percent.toFixed(2)}%`;
            });
            
            this.requestUpdate();
        }
    }

    private stopResize = () => {
        this.resizing = null;
        document.removeEventListener('mousemove', this.handleResize);
        document.removeEventListener('mouseup', this.stopResize);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }

    // ============= Render Methods =============

    render() {
        if (this.gridChildren.length === 0 || this.gridSizes.length === 0) {
            // Show children with default styling while grid is initializing
            return nothing;
        }

        // Build grid template with resize handles
        // For 3 children: "size1 4px size2 4px size3"
        const gridTemplate = this.gridSizes.flatMap((size, index) => {
            if (index === this.gridSizes.length - 1) {
                return [size];
            }
            return [size, '4px'];
        }).join(' ');

        // Apply grid layout to the custom element itself
        this.style.display = 'grid';
        if (this.orientation === 'horizontal') {
            this.style.gridTemplateColumns = gridTemplate;
            this.style.gridTemplateRows = '100%';
        } else {
            this.style.gridTemplateColumns = '100%';
            this.style.gridTemplateRows = gridTemplate;
        }
        this.style.overflow = 'hidden';

        // Render resize handles
        // Child styling is applied in updated() when gridChildren/gridSizes change
        return html`
            ${this.gridChildren.map((_, index) => {
                if (index < this.gridChildren.length - 1) {
                    const gridCol = this.orientation === 'horizontal' ? `${index * 2 + 2}` : '1';
                    const gridRow = this.orientation === 'vertical' ? `${index * 2 + 2}` : '1';
                    return html`
                        <div 
                            class="resize-handle"
                            style="
                                background-color: var(--wa-color-neutral-border-subtle, rgba(128, 128, 128, 0.2));
                                cursor: ${this.orientation === 'horizontal' ? 'col-resize' : 'row-resize'};
                                position: relative;
                                z-index: 10;
                                grid-column: ${gridCol};
                                grid-row: ${gridRow};
                            "
                            @mousedown=${(e: MouseEvent) => this.startResize(e, index)}
                            @mouseenter=${(e: Event) => {
                                (e.target as HTMLElement).style.backgroundColor = 'var(--wa-color-primary-fill, rgba(0, 102, 204, 0.4))';
                            }}
                            @mouseleave=${(e: Event) => {
                                (e.target as HTMLElement).style.backgroundColor = 'var(--wa-color-neutral-border-subtle, rgba(128, 128, 128, 0.2))';
                            }}
                        ></div>
                    `;
                }
                return nothing;
            })}
        `;
    }

    // ============= Cleanup Methods =============

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.resizing) {
            this.stopResize();
        }
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
            this.mutationObserver = undefined;
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.style.height = '100%';
        this.style.width = '100%';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-resizable-grid': KResizableGrid
    }
}

