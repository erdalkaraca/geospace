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
import {KElement} from "./k-element";

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
        currentSizes?: number[];
    } | null = null;
    
    private resizeOverlay: HTMLDivElement | null = null;
    private childrenLoaded = false;
    private childStylesApplied = false;
    private mutationObserver?: MutationObserver;
    private settingsLoaded = false;

    createRenderRoot() {
        // intentionally disabling shadow DOM for the resizable grid
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

    private async loadChildren() {
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

        // Load persisted sizes once if available
        if (!this.settingsLoaded) {
            this.settingsLoaded = true;
            const persisted = await this.getDialogSetting();
            if (persisted && Array.isArray(persisted.sizes) && persisted.sizes.length === this.gridChildren.length) {
                this.gridSizes = persisted.sizes;
                this.requestUpdate();
                return;
            }
        }

        // Use sizes attribute or equal distribution (only if not restored from settings)
        if (this.sizes) {
            this.gridSizes = this.sizes.split(',').map(s => s.trim());
        } else {
            const equalSize = `${100 / this.gridChildren.length}%`;
            this.gridSizes = this.gridChildren.map(() => equalSize);
        }

        this.requestUpdate();
    }

    private async saveSizes() {
        if (this.gridSizes.length === 0) {
            return;
        }

        await this.setDialogSetting({
            sizes: this.gridSizes,
            orientation: this.orientation
        });
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        // Only apply child styles once when children are first loaded
        // This prevents interfering with nested resizable grids during resize operations
        if (changedProperties.has('gridChildren') && !this.childStylesApplied && this.gridChildren.length > 0) {
            this.childStylesApplied = true;
            
            /**
             * Direct style manipulation is intentionally used here.
             * 
             * Reasoning:
             * - Grid positioning (gridColumn/gridRow) must be computed dynamically based on
             *   the number of children and orientation at runtime
             * - Shadow DOM is disabled (see createRenderRoot), so we cannot use ::slotted()
             *   or scoped CSS selectors to style children
             * - CSS classes alone cannot express the dynamic grid positioning logic
             *   (e.g., child at index 0 → column 1, index 1 → column 3, etc.)
             * - This is a layout container whose primary job is to programmatically position
             *   its children within a CSS grid system
             */
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

        // Create overlay to prevent iframes from capturing mouse events
        this.resizeOverlay = document.createElement('div');
        this.resizeOverlay.style.position = 'fixed';
        this.resizeOverlay.style.top = '0';
        this.resizeOverlay.style.left = '0';
        this.resizeOverlay.style.width = '100%';
        this.resizeOverlay.style.height = '100%';
        this.resizeOverlay.style.zIndex = '9999';
        this.resizeOverlay.style.cursor = this.orientation === 'horizontal' ? 'col-resize' : 'row-resize';
        document.body.appendChild(this.resizeOverlay);

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
            this.resizing.currentSizes = newSizes;
            
            // Update visual preview directly without triggering requestUpdate()
            const gridTemplate = newSizes.map((size, index) => {
                const percent = (size / containerSize) * 100;
                const sizeStr = `${percent.toFixed(2)}%`;
                if (index === newSizes.length - 1) {
                    return sizeStr;
                }
                return `${sizeStr} 4px`;
            }).join(' ');
            
            if (this.orientation === 'horizontal') {
                this.style.gridTemplateColumns = gridTemplate;
            } else {
                this.style.gridTemplateRows = gridTemplate;
            }
        }
    }

    private stopResize = async () => {
        if (this.resizing?.currentSizes) {
            const containerSize = this.orientation === 'horizontal' 
                ? this.offsetWidth 
                : this.offsetHeight;
            
            this.gridSizes = this.resizing.currentSizes.map(size => {
                const percent = (size / containerSize) * 100;
                return `${percent.toFixed(2)}%`;
            });
            
            await this.saveSizes();
            this.requestUpdate();
        }
        
        // Remove overlay
        if (this.resizeOverlay) {
            document.body.removeChild(this.resizeOverlay);
            this.resizeOverlay = null;
        }
        
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
            <style>
                .resize-handle {
                    position: relative;
                    z-index: 10;
                    background-color: var(--wa-color-neutral-border-quiet);
                    transition: background-color var(--wa-transition-fast);
                }
                
                .resize-handle:hover {
                    background-color: var(--wa-color-brand-fill-normal);
                }
            </style>
            
            ${this.gridChildren.map((_, index) => {
                if (index < this.gridChildren.length - 1) {
                    const gridCol = this.orientation === 'horizontal' ? `${index * 2 + 2}` : '1';
                    const gridRow = this.orientation === 'vertical' ? `${index * 2 + 2}` : '1';
                    return html`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation === 'horizontal' ? 'col-resize' : 'row-resize'};
                                grid-column: ${gridCol};
                                grid-row: ${gridRow};
                            "
                            @mousedown=${(e: MouseEvent) => this.startResize(e, index)}
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

