import {customElement} from "lit/decorators.js";
import {KElement} from "../parts/k-element";
import {html} from "lit";
import {activePartSignal} from "../core/appstate";
import {contributionRegistry, HTMLContribution} from "../core/contributionregistry";
import {TOOLBAR_BOTTOM_CENTER} from "../core/constants";
import '../widgets/k-icon';
import {i18n} from "../core/i18n";

const t = i18n('partname');

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_CENTER, {
    html: "<k-part-name></k-part-name>"
} as HTMLContribution)

@customElement('k-part-name')
export class KPartName extends KElement {
    protected doBeforeUI() {
        this.watch(activePartSignal, () => {
            this.requestUpdate();
        });
    }
    
    private getPartName(): string {
        const activePart = activePartSignal.get();
        if (!activePart) {
            return t('NO_PART');
        }

        return activePart.tabContribution?.label || activePart.getAttribute('id') || t('NO_PART');
    }

    protected render() {
        const activePart = activePartSignal.get();
        const partIcon = activePart?.tabContribution?.icon || "box";
        
        return html`
            <wa-button 
                appearance="plain"
                size="small"
                title="${t('ACTIVE_PART')}">
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

