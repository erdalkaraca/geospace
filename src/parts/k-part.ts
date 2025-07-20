import {KContainer} from "./k-container.ts";
import {property} from "lit/decorators.js";
import {PropertyValues} from "lit";
import {activePartDirtySignal, activePartSignal} from "../core/appstate.ts";

export abstract class KPart extends KContainer {
    @property()
    private dirty: boolean = false

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
        activePartDirtySignal.set(null as unknown as KPart)
        activePartDirtySignal.set(this)
        activePartSignal.set(null as unknown as KPart)
        activePartSignal.set(this)
    }
}