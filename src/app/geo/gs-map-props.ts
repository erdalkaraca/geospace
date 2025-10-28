import {css, html} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {KPart} from "../../parts/k-part.ts";
import {when} from "lit/directives/when.js";
import {GsMapEditor} from "./gs-map-editor.ts";
import {activePartSignal} from "../../core/appstate.ts";
import {SignalPort, watching} from "../../core/signals.ts";
import {mapChangedSignal} from "./gs-signals.ts";
import '../../widgets/k-icon.ts';
import {GsLayer, GsControl, GsOverlay} from "../rt/gs-model.ts";
import {getOriginalUri} from "./utils.ts";
import {commandRegistry} from "../../core/commandregistry.ts";
import "../../components/k-action.ts";
import {confirmDialog} from "../../core/dialog.ts";

@customElement('gs-map-props')
export class GsMapProps extends KPart {
    private mapEditor?: GsMapEditor;

    @state()
    private selectedLayerIndex?: number;

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

    private toggleVisible(index: number) {
        const gsMap = this.mapEditor!.getGsMap()
        const layer = gsMap!.layers[index]
        const currentVisible = layer.visible !== false
        const newVisible = !currentVisible
        
        this.mapEditor?.mapOperations?.setLayerVisible(index, newVisible)
        this.updateLater()
    }

    private async confirmAction(message: string, action: () => void) {
        if (await confirmDialog(message)) {
            action();
        }
    }

    private selectLayer(index: number) {
        this.selectedLayerIndex = index;
        this.updateToolbar();
        this.updateContextMenu();
    }

    private renameLayer(index?: number) {
        if (!this.mapEditor) return;

        const layerIndex = index !== undefined ? index : this.selectedLayerIndex;
        if (layerIndex === undefined) return;

        const context = commandRegistry.createExecutionContext(this, {
            index: layerIndex + 1
        });
        context.activeEditor = this.mapEditor;
        commandRegistry.execute("rename_layer", context);
    }

    private deleteLayer(index?: number) {
        if (!this.mapEditor) return;

        const layerIndex = index !== undefined ? index : this.selectedLayerIndex;
        if (layerIndex === undefined) return;

        const gsMap = this.mapEditor.getGsMap();
        const layer = gsMap?.layers[layerIndex];
        if (!layer) return;

        this.confirmAction(
            `Delete layer "${layer.name || `Layer ${layerIndex + 1}`}"?`,
            () => this.withRefresh(() => this.mapEditor?.mapOperations?.deleteLayer(layerIndex))
        );
    }

    private moveLayerUp(index: number) {
        if (!this.mapEditor || index <= 0) return;
        
        this.withRefresh(() => this.mapEditor?.mapOperations?.moveLayer(index, index - 1));
        this.selectedLayerIndex = index - 1;
    }

    private moveLayerDown(index: number) {
        if (!this.mapEditor) return;
        
        const gsMap = this.mapEditor.getGsMap();
        if (!gsMap || index >= gsMap.layers.length - 1) return;
        
        this.withRefresh(() => this.mapEditor?.mapOperations?.moveLayer(index, index + 1));
        this.selectedLayerIndex = index + 1;
    }

    protected renderToolbar() {
        const hasSelection = this.selectedLayerIndex !== undefined;
        
        return html`
            <k-action ?disabled=${!hasSelection} 
                      title="Rename selected layer" 
                      icon="pen"
                      .action=${() => this.renameLayer()}>
            </k-action>
            <k-action ?disabled=${!hasSelection} 
                      title="Delete selected layer" 
                      icon="trash"
                      .action=${() => this.deleteLayer()}>
            </k-action>
        `;
    }

    protected renderContextMenu() {
        const hasSelection = this.selectedLayerIndex !== undefined;
        
        return html`
            <k-action ?disabled=${!hasSelection} 
                      icon="pen"
                      .action=${() => this.renameLayer()}>
                Rename
            </k-action>
            <k-action ?disabled=${!hasSelection} 
                      icon="trash"
                      .action=${() => this.deleteLayer()}>
                Delete
            </k-action>
        `;
    }

    render() {
        return when(!this.mapEditor, () => html`
                    <k-no-content message="Select a map."></k-no-content>`,
            () => html`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor!.getGsMap()?.layers.map((layer: GsLayer, i: number) => html`
                            <wa-tree-item @click="${() => this.selectLayer(i)}" 
                                          class="${this.selectedLayerIndex === i ? 'selected' : ''}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${layer.name ?? `Layer ${i + 1}`}${i == 0 ? html`
                                            <small>(basemap)</small>` : ""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-action size="small"
                                                  icon="${layer.visible !== false ? "eye" : "eye-slash"}"
                                                  title="${layer.visible !== false ? 'Hide layer' : 'Show layer'}"
                                                  .action=${() => this.toggleVisible(i)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${i === 0}"
                                                  .action=${() => this.moveLayerUp(i)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${i === this.mapEditor!.getGsMap()!.layers.length - 1}"
                                                  .action=${() => this.moveLayerDown(i)}>
                                        </k-action>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${this.mapEditor?.getGsMap()?.controls.map((control: GsControl, i: number) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(control.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${() => this.confirmAction(`Delete control "${getOriginalUri(control.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeControl(i)))}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map((overlay: GsOverlay, i: number) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(overlay.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${() => this.confirmAction(`Delete overlay "${getOriginalUri(overlay.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeOverlay(i)))}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="highlighter"></k-icon> Styles
                        <wa-tree-item>
                            <span>Defined Styles: ${Object.keys(this.mapEditor!.getGsMap()?.styles || {}).length}</span>
                        </wa-tree-item>
                        <wa-tree-item>
                            <span>Style Rules: ${this.mapEditor!.getGsMap()?.styleRules?.length || 0}</span>
                        </wa-tree-item>
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
        
        wa-tree-item.selected {
            background-color: var(--wa-color-primary-50);
        }
        
        .layer-item {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 4px;
        }
        
        .layer-name {
            flex: 1;
        }
        
        .layer-actions {
            display: flex;
            gap: 2px;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'gs-map-props': GsMapProps
    }
}