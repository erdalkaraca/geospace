import {css, html} from 'lit'
import {when} from "lit/directives/when.js";
import {customElement, state} from 'lit/decorators.js'
import {KPart} from "../parts/k-part.ts";
import {Extension, extensionRegistry, TOPIC_EXTENSIONS_CHANGED} from "../core/extensionregistry.ts";
import '../widgets/k-icon.ts';
import {subscribe} from "../core/events.ts";


@customElement('k-extensions')
export class KExtensions extends KPart {
    @state()
    private selectedExtension?: Extension;

    protected doInitUI() {
        subscribe(TOPIC_EXTENSIONS_CHANGED, () => {
            this.requestUpdate()
        })
    }

    onExtensionDblClick() {

    }

    enable(extension: Extension) {
        extensionRegistry.enable(extension.id, true);
        this.requestUpdate()
    }

    disable(extension: Extension) {
        extensionRegistry.disable(extension.id, true);
        this.requestUpdate()
    }

    selectionChanged(e: CustomEvent) {
        // @ts-ignore
        this.selectedExtension = e.detail.selection[0].model
    }

    render() {
        return html`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree style="--indent-guide-width: 1px;" slot="start"
                         @wa-selection-change="${this.selectionChanged}">
                    ${extensionRegistry.getExtensions().map(e => html`
                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${e} expanded>
                            <span><k-icon name="${e.icon}"></k-icon> ${e.name}</span>
                        </wa-tree-item>`)}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${when(this.selectedExtension, (e) => html`
                        <h1><k-icon name="${e.icon}"></k-icon> ${e.name}</h1>
                        <hr>
                        <div>
                            ${when(extensionRegistry.isEnabled(e.id), () => html`
                                <wa-button title="Disable this extension" @click="${() => this.disable(e)}"
                                           variant="danger" appearance="plain">
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>`, () => html`
                                <wa-button title="Enable this extension" @click="${() => this.enable(e)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${when(e.experimental, () => html`
                            <div>
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}
                        ${e.description}
                    `)}
                </div>
            </wa-split-panel>
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
