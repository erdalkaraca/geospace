import {KContainer} from "./k-container";
import {property} from "lit/decorators.js";
import {PropertyValues, TemplateResult, nothing} from "lit";
import {partDirtySignal, activePartSignal} from "../core/appstate";
import {CommandStack} from "../core/commandregistry";
import {TabContribution} from "../core/contributionregistry";

export abstract class KPart extends KContainer {
    @property()
    private dirty: boolean = false

    public tabContribution?: TabContribution;
    
    public isEditor: boolean = false;

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

    /**
     * Override this method to provide context menu content for this part.
     * This is a lightweight alternative to registering context menu contributions
     * for actions that are scoped to this part instance.
     * 
     * IMPORTANT: Event handlers MUST use arrow functions to preserve the component's 'this' context.
     * The context menu is rendered in a different component (k-contextmenu), so direct method 
     * references lose their binding.
     * 
     * ✅ Correct:
     *   @click=${() => this.myMethod()}
     *   @click=${(e) => this.handleClick(e)}
     * 
     * ❌ Wrong (this will be bound to the context menu, not your component):
     *   @click=${this.myMethod}
     * 
     * Example:
     * ```typescript
     * protected renderContextMenu() {
     *     return html`
     *         <wa-dropdown-item @click=${() => this.open()}>
     *             <wa-icon name="folder-open"></wa-icon>
     *             Open
     *         </wa-dropdown-item>
     *         <wa-divider></wa-divider>
     *         <wa-dropdown-item @click=${() => this.delete()}>
     *             <wa-icon name="trash"></wa-icon>
     *             Delete
     *         </wa-dropdown-item>
     *     `;
     * }
     * ```
     * 
     * @returns TemplateResult with context menu items, or nothing if no context menu needed
     */
    protected renderContextMenu(): TemplateResult | typeof nothing {
        return nothing;
    }

    /**
     * Call this method to update the context menu when the component's state changes.
     * This triggers a re-render of the context menu with the latest content from renderContextMenu().
     */
    protected updateContextMenu(): void {
        this.dispatchEvent(new CustomEvent('part-contextmenu-changed', {
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
}