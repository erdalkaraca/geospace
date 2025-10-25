import {customElement} from "lit/decorators.js";
import {KElement} from "../parts/k-element.ts";
import {html} from "lit";
import {activePartSignal} from "../core/appstate.ts";
import {SignalWatcher} from "@lit-labs/signals";
import {contributionRegistry, HTMLContribution} from "../core/contributionregistry.ts";
import {TOOLBAR_BOTTOM_CENTER} from "../core/constants.ts";
import '../widgets/k-icon.ts';

const NO_PART_LABEL = "<no part>";

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_CENTER, {
    html: "<k-part-name></k-part-name>"
} as HTMLContribution)

@customElement('k-part-name')
export class KPartName extends SignalWatcher(KElement) {
    
    private getPartName(): string {
        const activePart = activePartSignal.get();
        if (!activePart) {
            return NO_PART_LABEL;
        }

        return activePart.tabContribution?.label || activePart.getAttribute('id') || NO_PART_LABEL;
    }

    protected render() {
        const activePart = activePartSignal.get();
        const partIcon = activePart?.tabContribution?.icon || "box";
        
        return html`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${partIcon}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-part-name': KPartName
    }
}

