import {customElement, state} from "lit/decorators.js";
import {css, html, nothing} from "lit";
import {KContainer} from "./k-container";
import {contributionRegistry, ContributionChangeEvent, TabContribution, TOPIC_CONTRIBUTEIONS_CHANGED} from "../core/contributionregistry";
import {when} from "lit/directives/when.js";
import {repeat} from "lit/directives/repeat.js";
import '../widgets/k-icon';
import {createRef, ref} from "lit/directives/ref.js";
import {subscribe} from "../core/events";
import {KPart} from "./k-part";
import {KToolbar} from "./k-toolbar";
import {KContextMenu} from "./k-contextmenu";
import {MouseButton, EDITOR_AREA_MAIN} from "../core/constants";
import {activePartSignal} from "../core/appstate";
import {confirmDialog} from "../core/dialog";

/**
 * KTabs - A dynamic tab container component
 * 
 * Architecture:
 * - Fixed layout (VS Code style) - each tab is registered to a specific container
 * - Tabs are created/destroyed as needed (no instance reuse)
 * - Support for both static (views) and dynamic (editors) tabs
 * 
 * Lifecycle:
 * 1. doInitUI():      Load contributions, activate first tab
 * 2. render():        Create tab UI from contributions
 * 3. open/closeTab(): Dynamic tab operations
 */
@customElement('k-tabs')
export class KTabs extends KContainer {
    /** Tab contributions for this container */
    @state()
    private contributions: TabContribution[] = [];

    /** Reference to the underlying wa-tab-group element */
    private tabGroup = createRef()

    /** Cached container ID (this element's 'id' attribute) */
    private containerId: string | null = null;

    // ============= Lifecycle Methods =============

    protected doBeforeUI() {
        this.containerId = this.getAttribute("id");
        if (!this.containerId) {
            throw new Error("k-tabs requires an 'id' attribute to function");
        }

        this.loadAndResolveContributions();
    }

    protected doInitUI() {
        this.updateComplete.then(() => {
            this.activateNextAvailableTab();
            
            if (!this.tabGroup.value) return;
            
            // @ts-ignore
            this.tabGroup.value.addEventListener("wa-tab-show", (event: CustomEvent) => {
                const tabPanel = this.getTabPanel(event.detail.name);
                if (tabPanel) {
                    // Update toolbar from component's renderToolbar() method
                    this.updateToolbarFromComponent(tabPanel);
                    this.dispatchEvent(new CustomEvent('tab-shown', {detail: tabPanel}));
                }
            });

            // Listen for toolbar update requests from components
            this.tabGroup.value.addEventListener("part-toolbar-changed", (event: Event) => {
                const component = event.target as HTMLElement;
                const tabPanel = component.closest('wa-tab-panel') as HTMLElement | null;
                if (tabPanel) {
                    this.updateToolbarFromComponent(tabPanel);
                }
            });

            // Listen for context menu update requests from components
            this.tabGroup.value.addEventListener("part-contextmenu-changed", (event: Event) => {
                const component = event.target as HTMLElement;
                const tabPanel = component.closest('wa-tab-panel') as HTMLElement | null;
                if (tabPanel) {
                    this.updateContextMenuFromComponent(tabPanel);
                }
            });

            // Update active part signal when clicking anywhere in tab content or tab title
            this.tabGroup.value.addEventListener('click', (event: Event) => {
                const target = event.target as HTMLElement;
                
                // Handle clicks on tab titles
                const tab = target.closest('wa-tab');
                if (tab) {
                    const panelName = tab.getAttribute('panel');
                    if (panelName) {
                        const tabPanel = this.getTabPanel(panelName);
                        if (tabPanel) {
                            const contentDiv = tabPanel.querySelector('.tab-content');
                            if (contentDiv && contentDiv.firstElementChild) {
                                const part = contentDiv.firstElementChild;
                                if (part instanceof KPart) {
                                    activePartSignal.set(part);
                                }
                            }
                        }
                    }
                    return;
                }
                
                // Handle clicks on tab content
                const scroller = target.closest('wa-scroller.tab-content');
                if (!scroller) return;
                
                const tabPanel = scroller.closest('wa-tab-panel') as HTMLElement;
                if (!tabPanel) return;
                
                const contentDiv = tabPanel.querySelector('.tab-content');
                if (contentDiv && contentDiv.firstElementChild) {
                    const part = contentDiv.firstElementChild;
                    if (part instanceof KPart) {
                        activePartSignal.set(part);
                    }
                }
            });

            // Automatically wire up context menus for all tab content
            this.tabGroup.value.addEventListener('contextmenu', (event: Event) => {
                const mouseEvent = event as MouseEvent;
                const scroller = (mouseEvent.target as HTMLElement).closest('wa-scroller.tab-content');
                if (!scroller) return;
                
                mouseEvent.preventDefault();
                
                const tabPanel = scroller.closest('wa-tab-panel') as HTMLElement;
                if (!tabPanel) return;
                
                // Trigger a left click to update selection before showing context menu
                const clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                    clientX: mouseEvent.clientX,
                    clientY: mouseEvent.clientY,
                    button: 0
                });
                mouseEvent.target!.dispatchEvent(clickEvent);
                
                // Wait for selection to update before showing context menu
                requestAnimationFrame(() => {
                    this.updateContextMenuFromComponent(tabPanel);
                    
                    const contextMenu = tabPanel.querySelector('k-contextmenu') as KContextMenu;
                    if (contextMenu) {
                        contextMenu.show({ x: mouseEvent.clientX, y: mouseEvent.clientY });
                    }
                });
            });
        });
        
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: ContributionChangeEvent) => {
            if (!this.containerId || event.target !== this.containerId) return;
            
            this.loadAndResolveContributions();
            this.requestUpdate();
            
            this.updateComplete.then(() => {
                this.activateNextAvailableTab();
            });
        });
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        if (changedProperties.has('contributions')) {
            const isEditorArea = this.containerId === EDITOR_AREA_MAIN;
            this.contributions.forEach(contribution => {
                const tabPanel = this.getTabPanel(contribution.name);
                if (!tabPanel) return;
                
                const contentDiv = tabPanel.querySelector('.tab-content');
                if (contentDiv && contentDiv.firstElementChild) {
                    const part = contentDiv.firstElementChild;
                    if (part instanceof KPart) {
                        part.tabContribution = contribution;
                        part.isEditor = isEditorArea;
                    }
                }
            });
        }
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
            this.activate(contribution.name);
            // Update toolbar after component is rendered
            const tabPanel = this.getTabPanel(contribution.name);
            if (tabPanel) {
                const contentDiv = tabPanel.querySelector('.tab-content');
                if (contentDiv && contentDiv.firstElementChild) {
                    const part = contentDiv.firstElementChild;
                    if (part instanceof KPart) {
                        part.tabContribution = contribution;
                        part.isEditor = this.containerId === EDITOR_AREA_MAIN;
                    }
                }
                
                // Give component time to initialize
                requestAnimationFrame(() => {
                    this.updateToolbarFromComponent(tabPanel);
                });
            }
        });
    }

    handleTabAuxClick(event: MouseEvent, contribution: TabContribution): void {
        if (event.button === MouseButton.MIDDLE && contribution.closable) {
            this.closeTab(event, contribution.name);
        }
    }

    async closeTab(event: Event, tabName: string): Promise<void> {
        event.stopPropagation();
        
        if (this.isDirty(tabName) && !await confirmDialog("Unsaved changes will be lost: Do you really want to close?")) {
            return;
        }
        
        const tabPanel = this.getTabPanel(tabName);
        if (!tabPanel) return;
        
        const contribution = this.contributions.find(c => c.name === tabName);
        if (!contribution) return;
        
        this.cleanupTabInstance(tabPanel);
        
        const index = this.contributions.indexOf(contribution);
        if (index > -1) {
            this.contributions.splice(index, 1);
        }
        
        this.dispatchEvent(new CustomEvent('tab-closed', {detail: tabPanel}));
        
        this.requestUpdate();
        
        this.updateComplete.then(() => {
            this.activateNextAvailableTab();
        });
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
     * Loads tab contributions from the registry.
     */
    private loadAndResolveContributions(): void {
        this.contributions = contributionRegistry.getContributions(this.containerId!) as TabContribution[];
        this.requestUpdate();
    }

    /**
     * Cleans up a tab instance when the tab is closed.
     * 
     * Cleanup Process:
     * 1. Call component's close() method if available (disposes resources)
     * 2. DOM element is removed by caller (closeTab method)
     */
    private cleanupTabInstance(tabPanel: HTMLElement): void {
        // Explicitly close the component inside the tab before removing
        // This allows components to dispose resources (e.g., Monaco editor models, event listeners)
        const contentDiv = tabPanel.querySelector('.tab-content');
        if (contentDiv && contentDiv.firstElementChild) {
            const component = contentDiv.firstElementChild;
            if ('close' in component && typeof component.close === 'function') {
                component.close();
            }
        }
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

    /**
     * Updates the toolbar for a tab panel by querying the component for its toolbar content.
     * This allows KPart components to provide their own toolbar items directly.
     */
    private updateToolbarFromComponent(tabPanel: HTMLElement): void {
        const contentDiv = tabPanel.querySelector('.tab-content');
        if (!contentDiv || !contentDiv.firstElementChild) return;
        
        const component = contentDiv.firstElementChild;
        if (!(component instanceof KPart)) return;
        
        // Check if component has renderToolbar method
        if (!component['renderToolbar']) return;
        
        // Query for k-toolbar directly since there's only one per tab panel
        const toolbar = tabPanel.querySelector('k-toolbar') as KToolbar | null;
        if (toolbar) {
            // Pass a bound render function to maintain component context
            toolbar.partToolbarRenderer = () => component['renderToolbar']();
            toolbar.requestUpdate();
        }
    }

    /**
     * Updates the context menu for a tab panel by querying the component for its context menu content.
     * This allows KPart components to provide their own context menu items directly.
     */
    private updateContextMenuFromComponent(tabPanel: HTMLElement): void {
        const contentDiv = tabPanel.querySelector('.tab-content');
        if (!contentDiv || !contentDiv.firstElementChild) return;
        
        const component = contentDiv.firstElementChild;
        if (!(component instanceof KPart)) return;
        
        // Check if component has renderContextMenu method
        if (!component['renderContextMenu']) return;
        
        // Query for k-contextmenu directly since there's only one per tab panel
        const contextMenu = tabPanel.querySelector('k-contextmenu') as KContextMenu | null;
        if (contextMenu) {
            // Pass a bound render function to maintain component context
            contextMenu.partContextMenuRenderer = () => component['renderContextMenu']();
            contextMenu.requestUpdate();
        }
    }

    // ============= Render Method =============

    render() {
        return html`
            <wa-tab-group ${ref(this.tabGroup)}>
                ${repeat(
                    this.contributions,
                    (c) => c.name,
                    (c) => html`
                        <wa-tab panel="${c.name}"
                                @auxclick="${(e: MouseEvent) => this.handleTabAuxClick(e, c)}">
                            <k-icon name="${c.icon!}"></k-icon>
                            ${c.label}
                            ${when(c.closable, () => html`
                                <wa-icon name="xmark" label="Close"  @click="${(e: Event) => this.closeTab(e, c.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${c.name}">
                            <k-toolbar id="toolbar:${c.editorId ?? c.name}" 
                                       class="tab-toolbar"
                                       ?is-editor="${this.containerId === EDITOR_AREA_MAIN}"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${c.component ? c.component(c.name) : nothing}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu:${c.name}"
                                           ?is-editor="${this.containerId === EDITOR_AREA_MAIN}"></k-contextmenu>
                        </wa-tab-panel>
                    `
                )}
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
            overflow: hidden;
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
