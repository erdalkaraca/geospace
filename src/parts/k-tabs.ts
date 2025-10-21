import {customElement, state} from "lit/decorators.js";
import {css, html, nothing} from "lit";
import {KContainer} from "./k-container.ts";
import {contributionRegistry, TabContribution, TOPIC_CONTRIBUTEIONS_CHANGED} from "../core/contributionregistry.ts";
import {when} from "lit/directives/when.js";
import {icon, observeOverflow} from "../core/k-utils.ts";
import {createRef, ref} from "lit/directives/ref.js";
import {subscribe} from "../core/events.ts";
import {tabInstanceManager} from "../core/tabinstancemanager.ts";

@customElement('k-tabs')
export class KTabs extends KContainer {
    @state()
    private contributions: TabContribution[] = [];

    private tabGroup = createRef()

    protected doAfterUI() {
        if (this.getAttribute("id")) {
            const id = this.getAttribute("id")!
            const rawContributions = contributionRegistry.getContributions(id) as TabContribution[]
            
            // Resolve view references
            this.contributions = rawContributions.map(c => {
                if (c.view) {
                    const view = contributionRegistry.getView(c.view);
                    if (view) {
                        // Merge view with contribution (contribution properties override view)
                        return { ...view, ...c, name: c.name || view.name };
                    }
                }
                return c;
            });
            
            // Trigger re-render after contributions are loaded
            this.requestUpdate();
        }

        // @ts-ignore
        this.tabGroup.value!.addEventListener("wa-tab-show", (event: CustomEvent) => {
            const tabPanel = this.getTabPanel(event.detail.name)
            this.dispatchEvent(new CustomEvent('tab-shown', {detail: tabPanel}))
        })
    }

    protected doInitUI() {
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, () => {
            if (this.getAttribute("id")) {
                const id = this.getAttribute("id")!
                const rawContributions = contributionRegistry.getContributions(id) as TabContribution[]
                
                // Resolve view references
                this.contributions = rawContributions.map(c => {
                    if (c.view) {
                        const view = contributionRegistry.getView(c.view);
                        if (view) {
                            return { ...view, ...c, name: c.name || view.name };
                        }
                    }
                    return c;
                });
            }
            this.requestUpdate()
        })
    }

    has(key: string) {
        return !!this.getTabPanel(key)
    }

    activate(key: string) {
        this.tabGroup.value!.setAttribute("active", key)
    }

    public getActiveEditor() {
        return this.tabGroup.value!.getAttribute("active")
    }

    closeTab(event: Event, tabName: string) {
        event.stopPropagation();
        if (this.isDirty(tabName) && !confirm("Unsaved changes will be lost: Do you really want to close?")) {
            return
        }
        const tab = (<HTMLElement>event.currentTarget!).parentElement!
        tab.remove();
        const tabPanel = this.getTabPanel(tabName)
        this.dispatchEvent(new CustomEvent('tab-closed', {detail: tabPanel}))
        tabPanel.remove()

        const tabGroup = this.tabGroup.value!
        const allRemainingTabs = tabGroup.querySelectorAll("wa-tab")
        if (allRemainingTabs.length > 0) {
            const newActive = allRemainingTabs.item(0).getAttribute("panel")!
            tabGroup.setAttribute("active", newActive)
        } else {
            tabGroup.removeAttribute("active")
        }
    }

    private getTabPanel(name: string) {
        return <HTMLElement>this.tabGroup.value!.querySelector(`wa-tab-panel[name='${name}']`)
    }

    open(contribution: TabContribution) {
        this.contributions.push(contribution)
        this.requestUpdate()
        this.updateComplete.then(() => {
            // make sure the panel contents do not overflow, but instead the scrollbar will handle it
            // FIXME this is not optimal, find better way to handle overflow
            if (contribution.noOverflow === undefined || contribution.noOverflow) {
                const tabPanel = this.getTabPanel(contribution.name)
                observeOverflow(tabPanel)
            }
            this.activate(contribution.name)
        })
    }

    markDirty(name: string, dirty: boolean) {
        const tab = this.tabGroup.value!.querySelector(`wa-tab[panel='${name}']`) as HTMLElement
        if (dirty) {
            tab.classList.add("part-dirty")
        } else {
            tab.classList.remove("part-dirty")
        }
    }

    isDirty(name: string) {
        const tab = this.tabGroup.value!.querySelector(`wa-tab[panel='${name}']`) as HTMLElement
        return !!tab && tab.classList.contains("part-dirty")
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        if (this.getAttribute("id")) {
            const containerId = this.getAttribute("id")!;
            
            this.contributions.forEach(c => {
                const instanceKey = tabInstanceManager.getInstanceKey(c, containerId);
                let instance = tabInstanceManager.getInstance(instanceKey);
                const tabPanel = this.getTabPanel(c.name);
                
                if (!tabPanel) return;
                
                const contentDiv = tabPanel.querySelector('.tab-content') as HTMLElement;
                if (!contentDiv) return;
                
                if (!instance) {
                    // First time rendering - capture the content as instance
                    const content = contentDiv.firstElementChild as HTMLElement;
                    if (content) {
                        instance = tabInstanceManager.createInstance(instanceKey, c);
                        instance.element = content;
                        tabInstanceManager.moveToContainer(instanceKey, containerId);
                    }
                } else {
                    // Instance exists - move it to this container
                    if (instance.element && !contentDiv.contains(instance.element)) {
                        contentDiv.appendChild(instance.element);
                        instance.element.style.display = '';
                        
                        // Request update on the moved element if it's a Lit component
                        if ('requestUpdate' in instance.element && typeof instance.element.requestUpdate === 'function') {
                            instance.element.requestUpdate();
                        }
                    }
                    tabInstanceManager.moveToContainer(instanceKey, containerId);
                }
            });
        }
    }

    render() {
        const containerId = this.getAttribute("id") || "";
        
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

declare global {
    interface HTMLElementTagNameMap {
        'k-tabs': KTabs
    }
}
