import {customElement, state} from "lit/decorators.js";
import {css, html, nothing} from "lit";
import {KContainer} from "./k-container.ts";
import {contributionRegistry, TabContribution, TOPIC_CONTRIBUTEIONS_CHANGED} from "../core/contributionregistry.ts";
import {when} from "lit/directives/when.js";
import {icon, observeOverflow} from "../core/k-utils.ts";
import {createRef, ref} from "lit/directives/ref.js";
import {subscribe} from "../core/events.ts";
import {tabInstanceManager} from "../core/tabinstancemanager.ts";

/**
 * KTabs - A dynamic tab container component supporting the View Registry Pattern
 * 
 * Architecture Overview:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ View Registry Pattern (Define Once, Reference Everywhere)       │
 * │  SYSTEM_VIEWS: { filebrowser, assistant, catalog, ... }         │
 * │      ↓ resolve                                                   │
 * │  Tab Containers: { view: "filebrowser" } → Full Definition      │
 * └─────────────────────────────────────────────────────────────────┘
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Instance Management (Singleton Tabs Share DOM Elements)         │
 * │  tabInstanceManager: Tracks instances by key                    │
 * │    - singleton=true:  key = name (shared across containers)     │
 * │    - singleton=false: key = containerId-name (per-container)    │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * Lifecycle:
 * 1. doAfterUI():     Load contributions, resolve view references, activate first tab
 * 2. render():        Create tab UI from contributions
 * 3. updated():       Manage instance lifecycle (capture or move DOM elements)
 * 4. open/closeTab(): Dynamic tab operations
 * 
 * Key Features:
 * - View reusability across multiple tab containers
 * - Singleton tabs preserve state when moved between containers
 * - Support for both static (views) and dynamic (editors) tabs
 * - Integration with Eclipse RCP-style perspectives
 */
@customElement('k-tabs')
export class KTabs extends KContainer {
    /** Resolved tab contributions (view references expanded to full definitions) */
    @state()
    private contributions: TabContribution[] = [];

    /** Reference to the underlying wa-tab-group element */
    private tabGroup = createRef()
    
    /** Cached container ID (this element's 'id' attribute) - used for instance management */
    private containerId: string | null = null;

    // ============= Lifecycle Methods =============
    
    protected doInitUI() {
        this.containerId = this.getAttribute("id");
        if (!this.containerId) {
            throw new Error("k-tabs requires an 'id' attribute to function");
        }

        this.loadAndResolveContributions();
        
        this.updateComplete.then(() => {
            this.activateNextAvailableTab();
            
            if (!this.tabGroup.value) return;
            
            // @ts-ignore
            this.tabGroup.value.addEventListener("wa-tab-show", (event: CustomEvent) => {
                const tabPanel = this.getTabPanel(event.detail.name);
                this.dispatchEvent(new CustomEvent('tab-shown', {detail: tabPanel}));
            });
        });
        
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, () => {
            if (!this.containerId) return;
            
            this.loadAndResolveContributions();
            this.requestUpdate();
            
            this.updateComplete.then(() => {
                this.activateNextAvailableTab();
            });
        });
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        // Only manage instances when contributions actually change
        if (!changedProperties.has('contributions')) return;
        
        // And only after initialization is complete
        if (!this.containerId || !this.tabGroup.value) return;
        
        this.contributions.forEach(c => {
            this.manageTabInstance(c);
        });
    }

    // ============= Public API Methods =============
    
    has(key: string): boolean {
        return !!this.getTabPanel(key);
    }

    activate(key: string): void {
        this.tabGroup.value!.setAttribute("active", key);
    }

    public getActiveEditor(): string | null {
        return this.tabGroup.value!.getAttribute("active");
    }

    open(contribution: TabContribution): void {
        // Check if contribution already exists, if so just activate it
        const existing = this.contributions.find(c => c.name === contribution.name);
        if (existing) {
            this.activate(contribution.name);
            return;
        }
        
        this.contributions.push(contribution);
        this.requestUpdate();
        
        this.updateComplete.then(() => {
            // Make sure the panel contents do not overflow
            // FIXME: Find better way to handle overflow
            if (contribution.noOverflow !== false) {
                const tabPanel = this.getTabPanel(contribution.name);
                if (tabPanel) {
                    observeOverflow(tabPanel);
                }
            }
            this.activate(contribution.name);
        });
    }

    closeTab(event: Event, tabName: string): void {
        event.stopPropagation();
        
        if (this.isDirty(tabName) && !confirm("Unsaved changes will be lost: Do you really want to close?")) {
            return;
        }
        
        const tab = (event.currentTarget as HTMLElement).parentElement;
        if (!tab) return;
        
        tab.remove();
        const tabPanel = this.getTabPanel(tabName);
        if (!tabPanel) return;
        
        // Find and cleanup the contribution
        const contribution = this.contributions.find(c => c.name === tabName);
        if (contribution && this.containerId) {
            this.cleanupTabInstance(contribution, tabPanel);
            
            // Remove the contribution from the array
            const index = this.contributions.indexOf(contribution);
            if (index > -1) {
                this.contributions.splice(index, 1);
            }
        }
        
        this.dispatchEvent(new CustomEvent('tab-closed', {detail: tabPanel}));
        tabPanel.remove();
        this.requestUpdate();
        
        this.activateNextAvailableTab();
    }

    markDirty(name: string, dirty: boolean): void {
        const tab = this.getTab(name);
        tab!.classList.toggle("part-dirty", dirty);
    }

    isDirty(name: string): boolean {
        const tab = this.getTab(name);
        return tab!.classList.contains("part-dirty");
    }

    // ============= Private Helper Methods =============
    
    /**
     * Loads and resolves tab contributions using the View Registry Pattern.
     * 
     * View Registry Pattern:
     * - Views are reusable tab templates registered once in SYSTEM_VIEWS
     * - Tab containers reference views by name (lightweight)
     * - This method resolves references by merging view definitions with contributions
     * 
     * Example:
     * View definition (registered once):
     *   { name: "filebrowser", label: "Workspace", icon: "folder-open", component: ... }
     * 
     * View reference (in multiple containers):
     *   { name: "filebrowser", view: "filebrowser" }
     * 
     * After resolution:
     *   { name: "filebrowser", label: "Workspace", icon: "folder-open", component: ..., view: "filebrowser" }
     * 
     * Benefits:
     * - DRY: Define complex tabs once, reference everywhere
     * - Consistency: All instances use same configuration
     * - Flexibility: Can override properties per-instance
     * - Works with singleton instance manager for memory efficiency
     */
    private loadAndResolveContributions(): void {
        const rawContributions = contributionRegistry.getContributions(this.containerId!) as TabContribution[];
        
        // Resolve view references: transform lightweight references into full tab definitions
        this.contributions = rawContributions.map(c => {
            // Check if this contribution is a view reference
            if (c.view) {
                // Lookup the full view definition from the registry
                const view = contributionRegistry.getView(c.view);
                if (view) {
                    // Merge: spread view first (base), then contribution (overrides)
                    // This allows contributions to customize specific properties while keeping the rest
                    // Example: { ...view, ...c } means c.label would override view.label if provided
                    return { ...view, ...c, name: c.name || view.name };
                }
            }
            // No view reference, return as-is (direct contribution)
            return c;
        });
        
        this.requestUpdate();
    }

    /**
     * Manages tab instance lifecycle for singleton tabs (views).
     * 
     * Instance Management:
     * - Singleton tabs (like filebrowser, AI assistant) should only exist once in DOM
     * - When a tab appears in multiple containers (e.g., across perspectives), 
     *   the same DOM element is reused by moving it between containers
     * - Instance key determines uniqueness:
     *   * For singleton=true (default): key = contribution.name (shared across containers)
     *   * For singleton=false: key = containerId + name (unique per container)
     * 
     * Lifecycle:
     * 1. First render: Capture the newly created element, register as instance
     * 2. Subsequent renders: Move existing instance to new container
     * 3. On close: Instance is removed from manager (see cleanupTabInstance)
     * 
     * Benefits:
     * - Memory efficient: One filebrowser instance, not one per container
     * - State preservation: Component state maintained when switching perspectives
     * - Works seamlessly with View Registry Pattern
     */
    private manageTabInstance(contribution: TabContribution): void {
        const instanceKey = tabInstanceManager.getInstanceKey(contribution, this.containerId!);
        let instance = tabInstanceManager.getInstance(instanceKey);
        const tabPanel = this.getTabPanel(contribution.name);
        
        if (!tabPanel) return;
        
        const contentDiv = tabPanel.querySelector('.tab-content') as HTMLElement;
        if (!contentDiv) return;
        
        if (!instance) {
            // First time rendering - capture the newly created element from Lit template
            const content = contentDiv.firstElementChild as HTMLElement;
            if (content) {
                instance = tabInstanceManager.createInstance(instanceKey, contribution);
                instance.element = content;
                tabInstanceManager.moveToContainer(instanceKey, this.containerId!);
            }
        } else {
            // Instance exists - move the DOM element from previous container to this one
            if (instance.element && !contentDiv.contains(instance.element)) {
                contentDiv.appendChild(instance.element);
                instance.element.style.display = '';
                
                // Trigger re-render on the moved element if it's a Lit component
                // This ensures the component updates after being moved to new container
                if ('requestUpdate' in instance.element && typeof instance.element.requestUpdate === 'function') {
                    instance.element.requestUpdate();
                }
            }
            tabInstanceManager.moveToContainer(instanceKey, this.containerId!);
        }
    }

    /**
     * Cleans up a tab instance when the tab is closed.
     * 
     * Cleanup Process:
     * 1. Call component's close() method if available (disposes resources)
     * 2. Remove instance from tabInstanceManager
     * 3. DOM element is removed by caller (closeTab method)
     * 
     * Important: After cleanup, if the same view is opened again, a fresh
     * instance will be created. This ensures proper initialization and prevents
     * stale state from a previously closed tab.
     */
    private cleanupTabInstance(contribution: TabContribution, tabPanel: HTMLElement): void {
        const instanceKey = tabInstanceManager.getInstanceKey(contribution, this.containerId!);
        
        // Explicitly close the component inside the tab before removing
        // This allows components to dispose resources (e.g., Monaco editor models, event listeners)
        const contentDiv = tabPanel.querySelector('.tab-content');
        if (contentDiv && contentDiv.firstElementChild) {
            const component = contentDiv.firstElementChild;
            if ('close' in component && typeof component.close === 'function') {
                component.close();
            }
        }
        
        // Remove the instance from the manager so it can be recreated next time
        tabInstanceManager.removeInstance(instanceKey);
    }

    private activateNextAvailableTab(): void {
        // Guard: Component might not be fully initialized yet
        if (!this.tabGroup.value) return;
        
        const allRemainingTabs = this.tabGroup.value.querySelectorAll("wa-tab");
        if (allRemainingTabs.length > 0) {
            const newActive = allRemainingTabs.item(0).getAttribute("panel");
            if (newActive) {
                this.tabGroup.value.setAttribute("active", newActive);
            }
        } else {
            this.tabGroup.value.removeAttribute("active");
        }
    }

    private getTabPanel(name: string): HTMLElement | null {
        return this.tabGroup.value!.querySelector(`wa-tab-panel[name='${name}']`) as HTMLElement | null;
    }

    private getTab(name: string): HTMLElement | null {
        return this.tabGroup.value!.querySelector(`wa-tab[panel='${name}']`) as HTMLElement | null;
    }

    // ============= Render Method =============

    render() {
        const containerId = this.containerId || "";
        
        return html`
            <wa-tab-group ${ref(this.tabGroup)}>
                ${this.contributions.map(c => {
                    const instanceKey = tabInstanceManager.getInstanceKey(c, containerId);
                    const existingInstance = tabInstanceManager.getInstance(instanceKey);
                    
                    return html`
                    <wa-tab panel="${c.name}">
                        ${icon(c.icon!)}
                        ${c.label}
                        ${when(c.closable, () => html`
                            <wa-button for="${c.name}" tabindex="-1" title="Close Tab" appearance="plain" size="small"
                                       @click="${(e: Event) => this.closeTab(e, c.name)}">
                                <wa-icon name="xmark"></wa-icon>
                            </wa-button>
                        `)}
                    </wa-tab>
                    <wa-tab-panel name="${c.name}">
                        <k-toolbar id="toolbar.${c.name}" class="tab-toolbar"></k-toolbar>
                            <div class="tab-content" style="height: 100%; width: 100%;">
                                ${existingInstance ? nothing : (c.component ? c.component(c.name) : nothing)}
                            </div>
                    </wa-tab-panel>
                    `;
                })}
            </wa-tab-group>
        `;
    }

    static styles = css`
        :host {
            height: 100%;
            width: 100%;
        }

        wa-tab-group {
            height: 100%;
            width: 100%;
        }

        wa-tab::part(base) {
            padding: 3px 0.5rem;
        }

        wa-tab-group::part(base) {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            height: 100%;
            width: 100%;
        }

        wa-tab-panel[active] {
            display: grid;
            grid-template-rows: minmax(0, 1fr);
            height: 100%;
            width: 100%;
        }

        wa-tab-panel {
            --padding: 0px;
        }

        .part-dirty::part(base) {
            font-style: italic;
            color: var(--wa-color-danger-fill-loud)
        }
    `
}
