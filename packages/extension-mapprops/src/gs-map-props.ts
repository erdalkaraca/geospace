import {css, html, customElement, state, when} from '@eclipse-lyra/core/externals/lit';
import {GsMapEditor, mapChangedSignal, getOriginalUri} from "@kispace-io/extension-map-editor/geo";
import {GsLayer, GsLayerType, GsScriptedVectorLayer, GsControl, GsOverlay, findLayerByUuid, findLayerIndexByUuid} from "@kispace-io/gs-lib";
import {
    LyraPart,
    commandRegistry,
    confirmDialog,
    activeEditorSignal,
    icon,
} from "@eclipse-lyra/core";

@customElement('gs-map-props')
export class GsMapProps extends LyraPart {
    private mapEditor?: GsMapEditor;

    @state()
    private selectedLayerUuid?: string;

    protected doBeforeUI() {
        this.watch(activeEditorSignal, (part: LyraPart) => {
            this.onPartChanged(part);
        });
        this.watch(mapChangedSignal, ({part}: any) => {
            this.onMapChanged({part});
        });
    }

    protected onPartChanged(part: LyraPart) {
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

    protected onMapChanged({part}: any) {
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

    private layerIcon(layer: GsLayer | GsScriptedVectorLayer) {
        if (layer.type === GsLayerType.SCRIPTED) return 'code'
        return 'layers'
    }

    private layerLabel(layer: GsLayer | GsScriptedVectorLayer, index: number) {
        if (layer.type === GsLayerType.SCRIPTED) {
            const scripted = layer as GsScriptedVectorLayer
            return layer.name ?? scripted.src?.split('/').pop() ?? `Scripted Layer ${index + 1}`
        }
        return layer.name ?? `Layer ${index + 1}`
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
            <lyra-command ?disabled=${!hasSelection}
                      title="Rename selected layer"
                      icon="pen"
                      .action=${() => this.renameLayer()}>
            </lyra-command>
            <lyra-command ?disabled=${!hasSelection}
                      title="Delete selected layer"
                      icon="trash"
                      .action=${() => this.deleteLayer()}>
            </lyra-command>
        `;
    }

    protected renderContextMenu() {
        const hasSelection = this.selectedLayerUuid !== undefined;

        return html`
            <lyra-command ?disabled=${!hasSelection}
                      icon="pen"
                      .action=${() => this.renameLayer()}>
                Rename
            </lyra-command>
            <lyra-command ?disabled=${!hasSelection}
                      icon="trash"
                      .action=${() => this.deleteLayer()}>
                Delete
            </lyra-command>
        `;
    }

    render() {
        return when(!this.mapEditor, () => html`
                    <lyra-no-content message="Select a map."></lyra-no-content>`,
            () => html`
                <wa-tree>
                    <wa-tree-item expanded>
                        ${icon('fg layers')} Layers
                        ${this.mapEditor!.getGsMap()?.layers.map((layer: GsLayer | GsScriptedVectorLayer, i: number) => html`
                            <wa-tree-item @click="${() => layer.uuid && this.selectLayer(layer.uuid)}"
                                          class="${this.selectedLayerUuid === layer.uuid ? 'selected' : ''}">
                                ${icon(this.layerIcon(layer))}
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${this.layerLabel(layer, i)}${i == 0 ? html`
                                            <small>(basemap)</small>` : ""}
                                            ${layer.type === GsLayerType.SCRIPTED ? html`
                                            <small class="lang-badge">${(layer as GsScriptedVectorLayer).lang ?? 'js'}</small>` : ""}
                                        </span>
                                    </div>
                                    <div class="layer-actions">
                                        <lyra-command size="small"
                                                  icon="${layer.visible !== false ? "eye" : "eye-slash"}"
                                                  title="${layer.visible !== false ? 'Hide layer' : 'Show layer'}"
                                                  .action=${() => layer.uuid && this.toggleVisible(layer.uuid)}>
                                        </lyra-command>
                                        <lyra-command size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${i === 0}"
                                                  .action=${() => layer.uuid && this.moveLayerUp(layer.uuid)}>
                                        </lyra-command>
                                        <lyra-command size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${i === this.mapEditor!.getGsMap()!.layers.length - 1}"
                                                  .action=${() => layer.uuid && this.moveLayerDown(layer.uuid)}>
                                        </lyra-command>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${icon('fg map-control')} Controls
                        ${this.mapEditor?.getGsMap()?.controls.map((control: GsControl) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(control.src)}</span>
                                <lyra-command size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${() => {
                                              if (control.uuid) {
                                                  this.confirmAction(`Delete control "${getOriginalUri(control.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeControl(control.uuid!)))
                                              }
                                          }}>
                                </lyra-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${icon('fg map-poi')} Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map((overlay: GsOverlay) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(overlay.src)}</span>
                                <lyra-command size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${() => {
                                              if (overlay.uuid) {
                                                  this.confirmAction(`Delete overlay "${getOriginalUri(overlay.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeOverlay(overlay.uuid!)))
                                              }
                                          }}>
                                </lyra-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${icon('highlighter')} Styles
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

        .lang-badge {
            display: inline-block;
            padding: 0 4px;
            border-radius: 3px;
            background: var(--wa-color-primary-100);
            color: var(--wa-color-primary-700);
            font-size: 0.7em;
            vertical-align: middle;
            margin-left: 4px;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'gs-map-props': GsMapProps
    }
}
