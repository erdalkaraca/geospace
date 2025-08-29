import {css, html} from 'lit'
import {when} from "lit/directives/when.js";
import {customElement} from 'lit/decorators.js'
import {KPart} from "../parts/k-part.ts";
import {Extension, extensionRegistry, TOPIC_EXTENSIONS_CHANGED} from "../core/extensionregistry.ts";
import {icon} from "../core/k-utils.ts";
import {subscribe} from "../core/events.ts";


@customElement('k-extensions')
export class KExtensions extends KPart {

    protected doInitUI() {
        subscribe(TOPIC_EXTENSIONS_CHANGED, () => {
            this.requestUpdate()
        })
    }

    onExtensionDblClick() {

    }

    enable(extension: Extension) {
        extensionRegistry.enable(extension.id);
        this.requestUpdate()
    }

    disable(extension: Extension) {
        extensionRegistry.disable(extension.id);
        this.requestUpdate()
    }

    render() {
        return html`
            <div>
                <wa-tree style="--indent-guide-width: 1px;">
                    ${extensionRegistry.getExtensions().map(e => html`
                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${e} expanded>
                            <div>${icon(e.icon)} ${e.name}
                            </div>
                            <wa-tree-item>
                                ${when(extensionRegistry.isEnabled(e.id), () => html`
                                    <wa-button title="Disable this extension" @click="${() => this.disable(e)}"
                                               size="small" variant="danger" appearance="plain">
                                        <wa-icon name="xmark"></wa-icon>
                                    </wa-button>`, () => html`
                                    <wa-button title="Enable this extension" @click="${() => this.enable(e)}"
                                               size="small" variant="brand" appearance="plain">
                                        <wa-icon name="download"></wa-icon>
                                    </wa-button>`)}
                                <small><i>${e.description}</i></small>
                            </wa-tree-item>
                        </wa-tree-item>`)}
                </wa-tree>
            </div>
        `
    }

    static styles = css`
        :host {
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-extensions': KExtensions
    }
}
