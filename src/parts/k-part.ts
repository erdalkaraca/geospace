import {KContainer} from "./k-container.ts";
import {property} from "lit/decorators.js";
import {PropertyValues, TemplateResult, nothing} from "lit";
import {partDirtySignal, activePartSignal} from "../core/appstate.ts";
import {CommandStack} from "../core/commandregistry.ts";
import {CommandContribution, contributionRegistry} from "../core/contributionregistry.ts";

export abstract class KPart extends KContainer {
    @property()
    private dirty: boolean = false

    protected commandStack?: CommandStack;

    public getCommandStack(): CommandStack | undefined {
        return this.commandStack;
    }

    /**
     * Override this method to provide toolbar content for this part.
     * This is a lightweight alternative to registering toolbar contributions
     * for actions that are scoped to this part instance.
     * 
     * IMPORTANT: Event handlers MUST use arrow functions to preserve the component's 'this' context.
     * The toolbar template is rendered in a different component (k-toolbar), so direct method 
     * references lose their binding.
     * 
     * ✅ Correct:
     *   @click=${() => this.myMethod()}
     *   @click=${(e) => this.handleClick(e)}
     * 
     * ❌ Wrong (this will be bound to the toolbar, not your component):
     *   @click=${this.myMethod}
     * 
     * Example:
     * ```typescript
     * protected renderToolbar() {
     *     return html`
     *         <wa-button @click=${() => this.save()} title="Save">
     *             <wa-icon name="save"></wa-icon>
     *         </wa-button>
     *     `;
     * }
     * ```
     * 
     * @returns TemplateResult with toolbar items, or nothing if no toolbar needed
     */
    protected renderToolbar(): TemplateResult | typeof nothing {
        return nothing;
    }

    /**
     * Call this method to update the toolbar when the component's state changes.
     * This triggers a re-render of the toolbar with the latest content from renderToolbar().
     */
    protected updateToolbar(): void {
        this.dispatchEvent(new CustomEvent('part-toolbar-changed', {
            bubbles: true,
            composed: true
        }));
    }

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);

        if (_changedProperties.has("dirty")) {
            const dirty = _changedProperties.get("dirty")
            if (dirty !== undefined) {
                this.dispatchEvent(new CustomEvent("dirty", {detail: this.dirty, bubbles: true}))
            }
        }
    }

    protected doClose() {
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Don't automatically close when disconnected - the element might just be moving
        // Call close() explicitly when actually closing the part
    }

    public close() {
        this.doClose()
    }

    connectedCallback() {
        super.connectedCallback();
        (this.parentElement as HTMLElement).addEventListener("click", (_event: MouseEvent) => {
            activePartSignal.set(this)
        })
    }

    save() {
    }

    public isDirty() {
        return this.dirty
    }

    public markDirty(dirty: boolean) {
        this.dirty = dirty
        partDirtySignal.set(null as unknown as KPart)
        partDirtySignal.set(this)
        activePartSignal.set(null as unknown as KPart)
        activePartSignal.set(this)
    }

    protected registerToolbarContribution(contribution: Omit<CommandContribution, 'target'>) {
        const id = this.getAttribute('id')
        if (!id) {
            return
        }
        const toolbarTarget = `toolbar.${id}`
        contributionRegistry.registerContribution(toolbarTarget, {
            ...contribution,
            target: toolbarTarget
        } as CommandContribution)
    }
}