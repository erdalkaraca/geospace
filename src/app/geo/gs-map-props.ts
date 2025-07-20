import {css, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import {KPart} from "../../parts/k-part.ts";
import {when} from "lit/directives/when.js";
import {GsMapEditor} from "./gs-map-editor.ts";
import {activePartSignal} from "../../core/appstate.ts";
import BaseLayer from "ol/layer/Base";
import {SignalPort, watching} from "../../core/signals.ts";
import {mapChangedSignal} from "./gs-signals.ts";
import {icon} from "../../core/k-utils.ts";
import {GsOlControl, GsOlOverlay, KEY_SRC} from "../rt";
import {getOriginalUri} from "./utils.ts";

@customElement('gs-map-props')
export class GsMapProps extends KPart {
    private mapEditor?: GsMapEditor;

    @watching(activePartSignal)
    protected onPartChanged(part: KPart) {
        if (part == this || part == this.mapEditor) {
            return
        }
        this.mapEditor = part instanceof GsMapEditor ? part : undefined
        this.updateLater()
    }

    @watching(mapChangedSignal)
    protected onMapChanged({part}: SignalPort) {
        if (part == this.mapEditor) {
            this.updateLater()
        }
    }

    private toggleVisible(event: Event) {
        // @ts-ignore
        const layer: BaseLayer = event.target.model
        layer.setVisible(!layer.getVisible())
        this.updateLater()
    }

    render() {
        return when(!this.mapEditor, () => html`
                    <k-no-content message="Select a map."></k-no-content>`,
            () => html`
                <wa-tree>
                    <wa-tree-item expanded>
                        ${icon("fg layers")} Layers
                        ${this.mapEditor!.getLayers().map((layer: BaseLayer, i: number) => html`
                            <wa-tree-item>
                                <wa-button .model="${layer}" @click="${this.toggleVisible}" appearance="plain"
                                           size="small">
                                    <wa-icon name="${layer.getVisible() ? "eye" : "eye-slash"}"></wa-icon>
                                </wa-button>
                                <span>${layer.get("name") ?? html`Layer ${i + 1}`}${i == 0 ? html`
                                    <small>(basemap)</small>` : ""}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${() => this.withRefresh(() => this.mapEditor?.executeMapCommand("delete_layer", {index: i + 1}))}">
                                    <wa-icon name="trash"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${icon("fg map-control")} Controls
                        ${this.mapEditor?.olMap?.getControls().getArray().filter(c => c instanceof GsOlControl).map((control: GsOlControl, i: number) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(control.get(KEY_SRC))}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${() => this.withRefresh(() => this.mapEditor?.executeMapCommand("remove_control", {index: i + 1}))}">
                                    <wa-icon name="trash"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${icon("fg map-poi")} Overlays
                        ${this.mapEditor?.olMap?.getOverlays().getArray().filter(c => c instanceof GsOlOverlay).map((overlay: GsOlOverlay, i: number) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(overlay.get(KEY_SRC))}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${() => this.withRefresh(() => this.mapEditor?.executeMapCommand("remove_overlay", {index: i + 1}))}">
                                    <wa-icon name="trash"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${icon("highlighter")} Styles
                    </wa-tree-item>
                </wa-tree>
            `
        )
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'gs-map-props': GsMapProps
    }
}