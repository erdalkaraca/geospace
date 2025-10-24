import {css, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import {KPart} from "../../parts/k-part.ts";
import {when} from "lit/directives/when.js";
import {GsMapEditor} from "./gs-map-editor.ts";
import {activePartSignal} from "../../core/appstate.ts";
import {SignalPort, watching} from "../../core/signals.ts";
import {mapChangedSignal} from "./gs-signals.ts";
import {icon} from "../../core/k-utils.ts";
import {GsLayer, GsControl, GsOverlay} from "../rt/gs-model.ts";
import {getOriginalUri} from "./utils.ts";

@customElement('gs-map-props')
export class GsMapProps extends KPart {
    private mapEditor?: GsMapEditor;

    @watching(activePartSignal)
    protected onPartChanged(part: KPart) {
        if (part == this || part == this.mapEditor || !(part instanceof GsMapEditor)) {
            return
        }
        this.mapEditor = part
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
        const index: number = event.currentTarget.index
        const gsMap = this.mapEditor!.getGsMap()
        const layer = gsMap!.layers[index]
        const currentVisible = layer.visible !== false // true if undefined or true, false if false
        const newVisible = !currentVisible
        
        // Use operations directly to update both OpenLayers map and domain model
        this.mapEditor?.mapOperations?.setLayerVisible(index, newVisible)
        
        this.updateLater()
    }

    private confirmAction(message: string, action: () => void) {
        if (confirm(message)) {
            action();
        }
    }

    render() {
        return when(!this.mapEditor, () => html`
                    <k-no-content message="Select a map."></k-no-content>`,
            () => html`
                <wa-tree>
                    <wa-tree-item expanded>
                        ${icon("fg layers")} Layers
                        ${this.mapEditor!.getGsMap()?.layers.map((layer: GsLayer, i: number) => html`
                            <wa-tree-item>
                                <wa-button .index="${i}" @click="${this.toggleVisible}" appearance="plain"
                                           size="small">
                                    <wa-icon name="${layer.visible !== false ? "eye" : "eye-slash"}" label="${layer.visible !== false ? 'Hide layer' : 'Show layer'}"></wa-icon>
                                </wa-button>
                                <span>${layer.name ?? `Layer ${i + 1}`}${i == 0 ? html`
                                    <small>(basemap)</small>` : ""}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${() => this.confirmAction(`Delete layer "${layer.name || `Layer ${i + 1}`}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.deleteLayer(i)))}">
                                    <wa-icon name="trash" label="Delete layer"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${icon("fg map-control")} Controls
                        ${this.mapEditor?.getGsMap()?.controls.map((control: GsControl, i: number) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(control.src)}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${() => this.confirmAction(`Delete control "${getOriginalUri(control.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeControl(i)))}">
                                    <wa-icon name="trash" label="Delete control"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${icon("fg map-poi")} Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map((overlay: GsOverlay, i: number) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(overlay.src)}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${() => this.confirmAction(`Delete overlay "${getOriginalUri(overlay.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeOverlay(i)))}">
                                    <wa-icon name="trash" label="Delete overlay"></wa-icon>
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