import {KContainer} from "./k-container.ts";
import {property} from "lit/decorators.js";
import {PropertyValues} from "lit";
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
        this.doClose()
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