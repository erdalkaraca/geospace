/**
 * KPerspectives - A container component for managing different UI layouts (perspectives)
 * 
 * Architecture:
 * - Perspectives are registered as contributions via the contribution registry
 * - Each perspective defines a complete UI layout using other components (k-tabs, k-split-pane, etc.)
 * - Only the active perspective is rendered (lazy loading + memory efficiency)
 * - Shared editor area is managed internally and injected into each perspective
 * 
 * Features:
 * - Dynamic perspective switching with lazy loading
 * - Shared editor area across all perspectives (preserves state)
 * - Contribution-based registration
 * - Event dispatching on perspective switch
 * 
 * IMPORTANT - IFrame Limitation:
 * ================================
 * When the shared editor area moves between perspectives, any iframes within it are detached 
 * and reattached to the DOM. This causes browsers to destroy the iframe's JavaScript context 
 * and reload the iframe content. This is a well-documented browser behavior (see WebKit bug 
 * #32848, Mozilla bug #254144).
 * 
 * Current behavior:
 * - When switching perspectives, iframes in the editor area reload (~1 second for OpenLayers)
 * - The map state (GsMap model) is preserved, but the rendering context is recreated
 * - The IFrameMapRenderer uses MutationObserver to automatically detect and handle reattachment
 * - A perspectiveSwitchedSignal is emitted for components that need to react to switches
 * 
 * Potential optimization (not implemented):
 * - Keep the editor area in a fixed DOM position (e.g., always as a direct child of <body>)
 * - Only move the surrounding panels (left/right/bottom views) around it
 * - Use absolute positioning or grid layout to visually arrange everything
 * - This would eliminate iframe reloads during perspective switches
 * 
 * Caveat:
 * - This optimization only helps if views (tabs) don't contain iframes
 * - If individual tabs use iframes, moving tabs between perspectives would still trigger reloads
 * - The current architecture is simpler and the reload delay is acceptable for typical usage
 * 
 * Example usage:
 * 
 * // In HTML:
 * <k-perspectives id="perspectives-main" editor-id="editor-area-main"></k-perspectives>
 * 
 * // Register perspectives via contribution registry:
 * contributionRegistry.registerContribution<PerspectiveContribution>(PERSPECTIVES_MAIN, {
 *     name: "default",
 *     label: "Default Layout",
 *     icon: "grip",
 *     component: (editorArea) => html`
 *         <k-split-pane id="my-split-pane" orientation="horizontal">
 *             <k-tabs id="left-tabs"></k-tabs>
 *             ${editorArea}
 *             <k-tabs id="right-tabs"></k-tabs>
 *         </k-split-pane>
 *     `
 * });
 */
import {customElement, state} from "lit/decorators.js";
import {html, render as litRender} from "lit";
import {KContainer} from "./k-container.ts";
import {contributionRegistry, PerspectiveContribution, TOPIC_CONTRIBUTEIONS_CHANGED} from "../core/contributionregistry.ts";
import {createRef, ref} from "lit/directives/ref.js";
import {subscribe} from "../core/events.ts";
import {perspectiveSwitchedSignal} from "../core/appstate.ts";

@customElement('k-perspectives')
export class KPerspectives extends KContainer {
    @state()
    private contributions: PerspectiveContribution[] = [];

    @state()
    private activePerspective: string = "";

    private containerId: string | null = null;
    private containerRef = createRef();
    private perspectiveElements: Map<string, HTMLElement> = new Map();
    private editorArea?: HTMLElement;  // Shared editor area created and managed internally

    createRenderRoot() {
        return this;
    }
    
    // ============= Lifecycle Methods =============

    protected doBeforeUI() {
        // Create the shared editor area once
        if (!this.editorArea) {
            this.editorArea = document.createElement('k-tabs');
            // Get editor area ID from first perspective or use a default
            const editorId = this.getAttribute('editor-id') || 'editor-area-main';
            this.editorArea.id = editorId;
        }
    }

    protected doInitUI() {
        this.containerId = this.getAttribute("id");
        if (!this.containerId) return;
        
        this.contributions = contributionRegistry.getContributions(this.containerId) as PerspectiveContribution[];
        if (this.contributions.length > 0 && !this.activePerspective) {
            this.activePerspective = this.contributions[0].name;
        }
        
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, () => {
            if (!this.containerId) return;
            
            this.contributions = contributionRegistry.getContributions(this.containerId) as PerspectiveContribution[];
            if (this.contributions.length > 0 && !this.activePerspective) {
                this.activePerspective = this.contributions[0].name;
            }
            this.requestUpdate();
        });
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        // Only update visibility when contributions or active perspective change
        if (changedProperties.has('contributions') || changedProperties.has('activePerspective')) {
            this.updatePerspectiveVisibility();
        }
    }

    // ============= Public API Methods =============

    switchPerspective(perspectiveName: string) {
        // Render the new perspective if it hasn't been rendered yet (lazy loading)
        const container = this.containerRef.value as HTMLElement;
        if (container) {
            const perspectiveContrib = this.contributions.find(p => p.name === perspectiveName);
            if (perspectiveContrib && !this.perspectiveElements.has(perspectiveName)) {
                this.renderPerspective(perspectiveContrib, container);
            }
        }
        
        this.activePerspective = perspectiveName;
        
        // Emit signal for perspective switch
        perspectiveSwitchedSignal.set({
            name: perspectiveName,
            timestamp: Date.now()
        });
        
        this.dispatchEvent(new CustomEvent('perspective-switched', {
            detail: {name: perspectiveName}
        }))
    }

    getActivePerspective() {
        return this.activePerspective;
    }

    getPerspectives() {
        return this.contributions;
    }

    addPerspective(contribution: PerspectiveContribution) {
        this.contributions.push(contribution);
        this.requestUpdate();
        if (!this.activePerspective) {
            this.activePerspective = contribution.name;
        }
    }

    // ============= Private Helper Methods =============

    private updatePerspectiveVisibility() {
        const container = this.containerRef.value as HTMLElement;
        if (!container) return;
        
        // Render only the active perspective (lazy loading)
        const isNewPerspective = this.activePerspective && !this.perspectiveElements.has(this.activePerspective);
        if (isNewPerspective) {
            const activePerspectiveContrib = this.contributions.find(p => p.name === this.activePerspective);
            if (activePerspectiveContrib) {
                this.renderPerspective(activePerspectiveContrib, container);
            }
        }
        
        // Move editor area to active perspective if needed
        if (!isNewPerspective && this.activePerspective && this.editorArea) {
            const activePerspectiveElement = this.perspectiveElements.get(this.activePerspective);
            if (activePerspectiveElement && !activePerspectiveElement.contains(this.editorArea)) {
                // Find the grid where editor should be
                const grid = activePerspectiveElement.querySelector('k-resizable-grid');
                if (grid) {
                    // Find correct position: editor should be the middle child in the grid
                    const children = Array.from(grid.children).filter(c => !c.hasAttribute('data-resize-handle'));
                    if (children.length >= 2) {
                        // Insert after first child (left panel)
                        children[0].insertAdjacentElement('afterend', this.editorArea);
                    }
                }
            }
        }
        
        // Show only the active perspective, hide others
        this.perspectiveElements.forEach((element, name) => {
            const isActive = name === this.activePerspective;
            element.style.display = isActive ? 'flex' : 'none';
            
            // When showing a perspective, trigger instance re-management on all k-tabs
            if (isActive && !isNewPerspective) {
                requestAnimationFrame(() => {
                    const tabComponents = element.querySelectorAll('k-tabs');
                    tabComponents.forEach(tab => {
                        // Force re-management by creating a new array reference
                        if ('contributions' in tab && Array.isArray(tab.contributions)) {
                            tab.contributions = [...tab.contributions];
                        }
                    });
                });
            }
        });
    }


    private renderPerspective(p: PerspectiveContribution, container: HTMLElement) {
        const wrapper = document.createElement('div');
        wrapper.className = 'perspective-content';
        wrapper.setAttribute('data-perspective', p.name);
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.height = '100%';
        wrapper.style.width = '100%';
        
        container.appendChild(wrapper);
        this.perspectiveElements.set(p.name, wrapper);
        
        // Render the perspective content into the wrapper
        const template = p.component(this.editorArea);
        litRender(template, wrapper);
        
        // Trigger updates on all tab components in this perspective after render
        this.updateComplete.then(() => {
            const tabComponents = wrapper.querySelectorAll('k-tabs');
            tabComponents.forEach(tab => {
                if ('requestUpdate' in tab && typeof tab.requestUpdate === 'function') {
                    tab.requestUpdate();
                }
            });
        });
    }

    // ============= Render Methods =============

    render() {
        return html`
            <div class="perspectives-container" ${ref(this.containerRef)} style="display: flex; flex-direction: column; height: 100%; width: 100%;">
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.style.display = 'flex';
        this.style.flexDirection = 'column';
        this.style.height = '100%';
        this.style.width = '100%';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-perspectives': KPerspectives
    }
}

