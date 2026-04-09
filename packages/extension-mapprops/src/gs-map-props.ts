import {css, html, customElement, state, when} from '@eclipse-docks/core/externals/lit';
import {GsMapEditor, mapChangedSignal, getOriginalUri} from "@kispace-io/extension-map-editor/geo";
import {GsLayer, GsLayerType, GsScriptedVectorLayer, GsControl, GsOverlay, findLayerByUuid, findLayerIndexByUuid} from "@kispace-io/gs-lib";
import {
    DocksPart,
    commandRegistry,
    confirmDialog,
    activeEditorSignal,
    icon,
} from "@eclipse-docks/core";

@customElement('gs-map-props')
export class GsMapProps extends DocksPart {
    private mapEditor?: GsMapEditor;

    @state()
    private selectedLayerUuid?: string;

    @state()
    private draggedLayerUuid?: string;

    @state()
    private dropTargetLayerUuid?: string;

    @state()
    private dropPosition: 'before' | 'after' = 'before';

    protected doBeforeUI() {
        this.watch(activeEditorSignal, (part: DocksPart) => {
            this.onPartChanged(part);
        });
        this.watch(mapChangedSignal, ({part}: any) => {
            this.onMapChanged({part});
        });
    }

    protected onPartChanged(part: DocksPart) {
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

    private layerLabel(layer: GsLayer | GsScriptedVectorLayer, index: number) {
        if (layer.type === GsLayerType.SCRIPTED) {
            return layer.name ?? `Scripted Layer ${index + 1}`
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

    private isCommandEvent(event: Event): boolean {
        return event.composedPath().some(
            (el) => el instanceof HTMLElement && el.tagName === 'LYRA-COMMAND'
        );
    }

    private onLayerDragStart(event: DragEvent, uuid?: string) {
        if (!uuid || this.isCommandEvent(event) || !event.dataTransfer) {
            event.preventDefault();
            return;
        }
        this.draggedLayerUuid = uuid;
        this.dropTargetLayerUuid = undefined;
        this.selectedLayerUuid = uuid;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', uuid);
    }

    private onLayerDragOver(event: DragEvent, targetUuid?: string) {
        if (!targetUuid || !this.draggedLayerUuid || targetUuid === this.draggedLayerUuid) return;
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
        const targetElement = event.currentTarget as HTMLElement | null;
        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            this.dropPosition = event.clientY < rect.top + rect.height / 2 ? 'before' : 'after';
        }
        this.dropTargetLayerUuid = targetUuid;
    }

    private dropLayerAtPosition(draggedUuid: string, targetUuid: string, position: 'before' | 'after') {
        const gsMap = this.mapEditor?.getGsMap();
        if (!gsMap) return;
        const layers = gsMap.layers;
        const fromIndex = findLayerIndexByUuid(gsMap, draggedUuid);
        const targetIndex = findLayerIndexByUuid(gsMap, targetUuid);
        if (fromIndex < 0 || targetIndex < 0) return;

        const desiredIndex = position === 'before' ? targetIndex : targetIndex + 1;
        const finalIndex = Math.min(desiredIndex, layers.length - 1);
        if (finalIndex === fromIndex) return;
        const finalTargetUuid = layers[finalIndex]?.uuid;
        if (!finalTargetUuid) return;

        this.withRefresh(() => this.mapEditor?.mapOperations?.moveLayer(draggedUuid, finalTargetUuid));
        this.selectedLayerUuid = draggedUuid;
    }

    private onLayerDrop(event: DragEvent, targetUuid?: string) {
        event.preventDefault();
        const draggedUuid = this.draggedLayerUuid;
        const dropPosition = this.dropPosition;
        this.draggedLayerUuid = undefined;
        this.dropTargetLayerUuid = undefined;
        this.dropPosition = 'before';
        if (!draggedUuid || !targetUuid || draggedUuid === targetUuid) return;
        this.dropLayerAtPosition(draggedUuid, targetUuid, dropPosition);
    }

    private onLayerDragEnd() {
        this.draggedLayerUuid = undefined;
        this.dropTargetLayerUuid = undefined;
        this.dropPosition = 'before';
    }

    protected renderToolbar() {
        const hasSelection = this.selectedLayerUuid !== undefined;
        const gsMap = this.mapEditor?.getGsMap();
        const selectedIndex = hasSelection && gsMap && this.selectedLayerUuid
            ? findLayerIndexByUuid(gsMap, this.selectedLayerUuid)
            : -1;
        const canMoveUp = selectedIndex > 0;
        const canMoveDown = selectedIndex >= 0 && !!gsMap && selectedIndex < gsMap.layers.length - 1;

        return html`
            <docks-command ?disabled=${!hasSelection}
                      title="Rename selected layer"
                      icon="pen"
                      .action=${() => this.renameLayer()}>
            </docks-command>
            <docks-command ?disabled=${!hasSelection}
                      title="Delete selected layer"
                      icon="trash"
                      .action=${() => this.deleteLayer()}>
            </docks-command>
            <docks-command ?disabled=${!canMoveUp}
                      title="Move selected layer up"
                      icon="arrow-up"
                      .action=${() => this.selectedLayerUuid && this.moveLayerUp(this.selectedLayerUuid)}>
            </docks-command>
            <docks-command ?disabled=${!canMoveDown}
                      title="Move selected layer down"
                      icon="arrow-down"
                      .action=${() => this.selectedLayerUuid && this.moveLayerDown(this.selectedLayerUuid)}>
            </docks-command>
        `;
    }

    protected renderContextMenu() {
        const hasSelection = this.selectedLayerUuid !== undefined;
        const gsMap = this.mapEditor?.getGsMap();
        const selectedIndex = hasSelection && gsMap && this.selectedLayerUuid
            ? findLayerIndexByUuid(gsMap, this.selectedLayerUuid)
            : -1;
        const canMoveUp = selectedIndex > 0;
        const canMoveDown = selectedIndex >= 0 && !!gsMap && selectedIndex < gsMap.layers.length - 1;

        return html`
            <docks-command ?disabled=${!canMoveUp}
                      icon="arrow-up"
                      .action=${() => this.selectedLayerUuid && this.moveLayerUp(this.selectedLayerUuid)}>
                Move Up
            </docks-command>
            <docks-command ?disabled=${!canMoveDown}
                      icon="arrow-down"
                      .action=${() => this.selectedLayerUuid && this.moveLayerDown(this.selectedLayerUuid)}>
                Move Down
            </docks-command>
            <docks-command ?disabled=${!hasSelection}
                      icon="pen"
                      .action=${() => this.renameLayer()}>
                Rename
            </docks-command>
            <docks-command ?disabled=${!hasSelection}
                      icon="trash"
                      .action=${() => this.deleteLayer()}>
                Delete
            </docks-command>
        `;
    }

    protected renderContent() {
        return when(!this.mapEditor, () => html`
                    <docks-no-content message="Select a map."></docks-no-content>`,
            () => html`
                <wa-tree>
                    <wa-tree-item expanded>
                        ${icon('fg layers')} Layers
                        ${this.mapEditor!.getGsMap()?.layers.map((layer: GsLayer | GsScriptedVectorLayer, i: number) => html`
                            <wa-tree-item @click="${() => layer.uuid && this.selectLayer(layer.uuid)}"
                                          draggable="true"
                                          @dragstart=${(event: DragEvent) => this.onLayerDragStart(event, layer.uuid)}
                                          @dragover=${(event: DragEvent) => this.onLayerDragOver(event, layer.uuid)}
                                          @drop=${(event: DragEvent) => this.onLayerDrop(event, layer.uuid)}
                                          @dragend=${() => this.onLayerDragEnd()}
                                          class="${this.selectedLayerUuid === layer.uuid ? 'selected' : ''} ${this.draggedLayerUuid === layer.uuid ? 'dragging' : ''} ${this.dropTargetLayerUuid === layer.uuid ? 'drop-target' : ''} ${this.dropTargetLayerUuid === layer.uuid && this.dropPosition === 'before' ? 'drop-before' : ''} ${this.dropTargetLayerUuid === layer.uuid && this.dropPosition === 'after' ? 'drop-after' : ''}">
                                <div class="layer-item">
                                    <div class="layer-main">
                                        <docks-command size="small"
                                                  icon="${layer.visible !== false ? "eye" : "eye-slash"}"
                                                  title="${layer.visible !== false ? 'Hide layer' : 'Show layer'}"
                                                  .action=${() => layer.uuid && this.toggleVisible(layer.uuid)}>
                                        </docks-command>
                                        <div class="layer-name">
                                            <span>${this.layerLabel(layer, i)}${i == 0 ? html`
                                                <small>(basemap)</small>` : ""}
                                                ${layer.type === GsLayerType.SCRIPTED ? html`
                                                <small class="lang-badge">${(layer as GsScriptedVectorLayer).lang ?? 'js'}</small>` : ""}
                                            </span>
                                        </div>
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
                                <docks-command size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${() => {
                                              if (control.uuid) {
                                                  this.confirmAction(`Delete control "${getOriginalUri(control.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeControl(control.uuid!)))
                                              }
                                          }}>
                                </docks-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${icon('fg map-poi')} Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map((overlay: GsOverlay) => html`
                            <wa-tree-item>
                                <span>${getOriginalUri(overlay.src)}</span>
                                <docks-command size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${() => {
                                              if (overlay.uuid) {
                                                  this.confirmAction(`Delete overlay "${getOriginalUri(overlay.src)}"?`, () => this.withRefresh(() => this.mapEditor?.mapOperations?.removeOverlay(overlay.uuid!)))
                                              }
                                          }}>
                                </docks-command>
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
            display: block;
            min-height: 0;
            /* Align with docks-toolbar: tree docks-commands are not inside docks-toolbar. */
            --wa-form-control-padding-inline: var(--wa-space-2xs);
        }

        wa-tree {
            display: block;
            min-height: 0;
        }

        wa-tree-item.selected {
            background-color: var(--wa-color-primary-50);
        }

        wa-tree-item.dragging {
            opacity: 0.6;
        }

        wa-tree-item.drop-target {
            background-color: var(--wa-color-brand-fill-quiet);
        }

        wa-tree-item.drop-before {
            box-shadow: inset 0 2px 0 var(--wa-color-brand-fill-loud);
        }

        wa-tree-item.drop-after {
            box-shadow: inset 0 -2px 0 var(--wa-color-brand-fill-loud);
        }

        .layer-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
        }

        .layer-main {
            display: flex;
            align-items: center;
            flex: 1;
            min-width: 0;
            gap: 4px;
        }

        .layer-name {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
