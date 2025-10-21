/**
 * k-perspectives: A container component that allows dynamic perspective contributions
 * 
 * Similar to k-tabs, this component allows contributions to be registered dynamically.
 * Each perspective is a container for other contributions such as split panes or k-tabs.
 * 
 * Example usage:
 * 
 * // In HTML:
 * <k-perspectives id="perspectives-main"></k-perspectives>
 * 
 * // Register perspectives via contribution registry:
 * contributionRegistry.registerContribution<PerspectiveContribution>(PERSPECTIVES_MAIN, {
 *     name: "default",
 *     label: "Default Layout",
 *     icon: "grip",
 *     component: () => html`
 *         <k-split-pane id="my-split-pane" orientation="horizontal"></k-split-pane>
 *     `
 * });
 * 
 * contributionRegistry.registerContribution<PerspectiveContribution>(PERSPECTIVES_MAIN, {
 *     name: "editing",
 *     label: "Editing",
 *     icon: "pencil",
 *     component: () => html`
 *         <k-tabs id="editing-tabs"></k-tabs>
 *     `
 * });
 */
import {customElement, state} from "lit/decorators.js";
import {html, render as litRender} from "lit";
import {KContainer} from "./k-container.ts";
import {contributionRegistry, PerspectiveContribution, TOPIC_CONTRIBUTEIONS_CHANGED} from "../core/contributionregistry.ts";
import {createRef, ref} from "lit/directives/ref.js";
import {subscribe} from "../core/events.ts";

@customElement('k-perspectives')
export class KPerspectives extends KContainer {
    @state()
    private contributions: PerspectiveContribution[] = [];

    @state()
    private activePerspective: string = "";

    private containerRef = createRef();
    private perspectiveElements: Map<string, HTMLElement> = new Map();
    private editorArea?: HTMLElement;  // Shared editor area created and managed internally

    createRenderRoot() {
        return this;
    }
    
    protected doBeforeUI() {
        // Create the shared editor area once
        if (!this.editorArea) {
            this.editorArea = document.createElement('k-tabs');
            // Get editor area ID from first perspective or use a default
            const editorId = this.getAttribute('editor-id') || 'editor-area-main';
            this.editorArea.id = editorId;
        }
    }

    protected doAfterUI() {
        if (this.getAttribute("id")) {
            const id = this.getAttribute("id")!
            this.contributions = contributionRegistry.getContributions(id) as PerspectiveContribution[]
            if (this.contributions.length > 0 && !this.activePerspective) {
                this.activePerspective = this.contributions[0].name;
            }
        }
    }

    protected doInitUI() {
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, () => {
            if (this.getAttribute("id")) {
                const id = this.getAttribute("id")!
                this.contributions = contributionRegistry.getContributions(id) as PerspectiveContribution[]
                if (this.contributions.length > 0 && !this.activePerspective) {
                    this.activePerspective = this.contributions[0].name;
                }
                this.requestUpdate()
            }
        })
    }

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
        this.contributions.push(contribution)
        this.requestUpdate()
        if (!this.activePerspective) {
            this.activePerspective = contribution.name;
        }
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        if (changedProperties.has('contributions') || changedProperties.has('activePerspective')) {
            this.updatePerspectiveVisibility();
        }
    }

    private updatePerspectiveVisibility() {
        const container = this.containerRef.value as HTMLElement;
        if (!container) return;
        
        // Clear all perspectives and render only the active one
        // This ensures the editor area moves to the active perspective
        container.innerHTML = '';
        this.perspectiveElements.clear();
        
        const activePerspectiveContrib = this.contributions.find(p => p.name === this.activePerspective);
        if (activePerspectiveContrib) {
            this.renderPerspective(activePerspectiveContrib, container);
        }
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
        
        // Give tabs time to initialize their content
        requestAnimationFrame(() => {
            this.updateComplete.then(() => {
                // Trigger updates on all tab components in this perspective
                const tabComponents = wrapper.querySelectorAll('k-tabs');
                tabComponents.forEach(tab => {
                    if ('requestUpdate' in tab && typeof tab.requestUpdate === 'function') {
                        tab.requestUpdate();
                    }
                });
            });
        });
    }

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

