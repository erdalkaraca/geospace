import {css, html} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {when} from "lit/directives/when.js";
import {GsMapEditor} from "./gs-map-editor";
import {mapChangedSignal} from "./gs-signals";
import {GsLayer, GsControl, GsOverlay} from "../rt/gs-model";
import {getOriginalUri} from "./utils";
import {findLayerByUuid, findLayerIndexByUuid} from "./map-renderer";
import {
    KPart,
    SignalPort,
    watching,
    commandRegistry,
    confirmDialog,
    activeEditorSignal
} from "@kispace/appspace/api";

@customElement('gs-map-props')
export class GsMapProps extends KPart {
    private mapEditor?: GsMapEditor;

    @state()
    private selectedLayerUuid?: string;

    @watching(activeEditorSignal)
    protected onPartChanged(part: KPart) {
        if (part == this || part == this.mapEditor) {
            return
        }
        if (!(part instanceof GsMapEditor)) {
            this.mapEditor = undefined;
            this.requestUpdate()
            return;
        }
        this.mapEditor = part
        this.requestUpdate()
    }

    @watching(mapChangedSignal)
    protected onMapChanged({part}: SignalPort) {
        if (part == this.mapEditor) {
            this.requestUpdate()
        }
    }

    private toggleVisible(uuid: string) {
        const gsMap = this.mapEditor!.getGsMap()
        const layer = findLayerByUuid(gsMap!, uuid)
        if (!layer) return
        
        const currentVisible = layer.visible !== false
        const newVisible = !currentVisible
        
        this.mapEditor?.mapOperations?.setLayerVisible(uuid, newVisible)
        this.updateLater()
    }

    private async confirmAction(message: string, action: () => void) {
        if (await confirmDialog(message)) {
            action();
        }
    }

    private selectLayer(uuid: string) {
        this.selectedLayerUuid = uuid;
        this.updateToolbar();
        this.updateContextMenu();
    }

    private renameLayer(uuid?: string) {
        if (!this.mapEditor) return;

        const layerUuid = uuid || this.selectedLayerUuid;
        if (!layerUuid) return;

        const gsMap = this.mapEditor.getGsMap();
        const layer = findLayerByUuid(gsMap!, layerUuid);
        if (!layer) return;

        const layerIndex = findLayerIndexByUuid(gsMap!, layerUuid);
        const context = commandRegistry.createExecutionContext({
            index: layerIndex + 1
        });
        commandRegistry.execute("rename_layer", context);
    }

    private deleteLayer(uuid?: string) {
        if (!this.mapEditor) return;

        const layerUuid = uuid || this.selectedLayerUuid;
        if (!layerUuid) return;

        const gsMap = this.mapEditor.getGsMap();
        const layer = findLayerByUuid(gsMap!, layerUuid);
        if (!layer) return;

        this.confirmAction(
            `Delete layer "${layer.name || 'Layer'}"?`,
            () => this.withRefresh(() => this.mapEditor?.mapOperations?.deleteLayer(layerUuid))
        );
    }

    private moveLayerUp(uuid: string) {
        if (!this.mapEditor) return;
        
        const gsMap = this.mapEditor.getGsMap();
        if (!gsMap) return;
        
        const currentIndex = findLayerIndexByUuid(gsMap, uuid);
        if (currentIndex <= 0) return;
        
        const targetUuid = gsMap.layers[currentIndex - 1]?.uuid;
        if (targetUuid) {
            this.withRefresh(() => this.mapEditor?.mapOperations?.moveLayer(uuid, targetUuid));
            this.selectedLayerUuid = targetUuid;
        }
    }

    private moveLayerDown(uuid: string) {
        if (!this.mapEditor) return;
        
        const gsMap = this.mapEditor.getGsMap();
        if (!gsMap) return;
        
        const currentIndex = findLayerIndexByUuid(gsMap, uuid);
        if (currentIndex < 0 || currentIndex >= gsMap.layers.length - 1) return;
        
        const targetUuid = gsMap.layers[currentIndex + 1]?.uuid;
        if (targetUuid) {
            this.withRefresh(() => this.mapEditor?.mapOperations?.moveLayer(uuid, targetUuid));
            this.selectedLayerUuid = targetUuid;
        }
    }

    protected renderToolbar() {
        const hasSelection = this.selectedLayerUuid !== undefined;
        
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
        const hasSelection = this.selectedLayerUuid !== undefined;
        
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
                            <wa-tree-item @click="${() => layer.uuid && this.selectLayer(layer.uuid)}" 
                                          class="${this.selectedLayerUuid === layer.uuid ? 'selected' : ''}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${layer.name ?? `Layer ${i + 1}`}${i == 0 ? html`
                                            <small>(basemap)</small>` : ""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-action size="small"
                                                  icon="${layer.visible !== false ? "eye" : "eye-slash"}"
                                                  title="${layer.visible !== false ? 'Hide layer' : 'Show layer'}"
                                                  .action=${() => layer.uuid && this.toggleVisible(layer.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${i === 0}"
                                                  .action=${() => layer.uuid && this.moveLayerUp(layer.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${i === this.mapEditor!.getGsMap()!.layers.length - 1}"
                                                  .action=${() => layer.uuid && this.moveLayerDown(layer.uuid)}>
                                        </k-action>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${this.mapEditor?.getGsMap()?.controls.map((control: GsControl) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(control.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${() => {
                                              if (control.uuid) {
                                                  this.confirmAction(`Delete control "${getOriginalUri(control.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeControl(control.uuid!)))
                                              }
                                          }}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map((overlay: GsOverlay) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(overlay.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${() => {
                                              if (overlay.uuid) {
                                                  this.confirmAction(`Delete overlay "${getOriginalUri(overlay.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeOverlay(overlay.uuid!)))
                                              }
                                          }}>
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