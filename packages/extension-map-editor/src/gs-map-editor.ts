import { css, html, customElement, property, createRef, ref, Ref, unsafeHTML, when } from '@eclipse-lyra/core/externals/lit';
import {
    DEFAULT_GSMAP,
    ensureUuidsRecursive,
    GsMap,
    GsLayerType,
    GsSourceType,
    DEFAULT_STYLES,
    DEFAULT_STYLE_RULES,
    findLayerByUuid,
    MapRenderer,
    MapOperations,
    createProxy,
    MapSyncEvent
} from "@kispace-io/gs-lib";
import { mapChangedSignal, MapEvents } from "./gs-signals";
import { loadEnvs, replaceUris, revertBlobUris } from "./utils";
import { WorkspaceModuleResolver } from "./workspace-module-resolver";
import { IFrameMapRenderer, RendererType } from "./iframe-map-renderer";
import { DomainMapOperations } from "./domain-map-operations";
import { SignalingMapOperations } from "./signaling-map-operations";
import {
    CommandStack,
    LyraPart,
    EditorInput,
    File,
    contributionRegistry,
    toastError,
    toastInfo,
    promptDialog,
    activePartSignal
} from "@eclipse-lyra/core";
import type { MapEditorToolbarExtensionContribution } from "./map-editor-toolbar-extension";
import {
    GS_MAP_EDITOR_TOOLBAR_CONTEXT,
    type GsMapEditorToolbarContextDetail,
    type GsMapEditorToolbarContextReason,
} from "./gs-map-editor-toolbar-events";

@customElement('gs-map')
export class GsMapEditor extends LyraPart {
    @property({ attribute: false })
    public input?: EditorInput;

    private mapContainer: Ref<HTMLElement> = createRef();
    private renderer?: MapRenderer;
    private operations?: MapOperations;
    private gsMap?: GsMap;
    private isFirstConnection = true;
    private initialView?: { center: [number, number], zoom: number };
    private moduleResolver = new WorkspaceModuleResolver();

    @property({ type: String })
    private activeDrawingLayerUuid?: string;

    @property({ type: String })
    private interactionMode: 'draw' | 'select' | 'none' = 'none';

    @property({ type: String })
    private selectedRenderer: RendererType = 'openlayers';

    @property({ type: Boolean })
    private hasSelectedFeature = false;

    constructor() {
        super();
        this.commandStack = new CommandStack()
    }

    getRenderer(): MapRenderer {
        return this.renderer!;
    }

    getOperations(): MapOperations {
        return this.operations!;
    }

    getActiveDrawingLayerUuid(): string | undefined {
        return this.activeDrawingLayerUuid;
    }

    public emitToolbarContextChange(reason?: GsMapEditorToolbarContextReason): void {
        this.dispatchEvent(
            new CustomEvent<GsMapEditorToolbarContextDetail>(GS_MAP_EDITOR_TOOLBAR_CONTEXT, {
                bubbles: true,
                composed: true,
                detail: { reason },
            }),
        );
    }

    protected doBeforeUI() {
        this.watch(mapChangedSignal, ({ part, event }: { part: LyraPart, event: MapEvents }) => {
            this.onMapChanged({ part, event });
        });
    }

    protected onMapChanged({ part, event }: { part: LyraPart, event: MapEvents }) {
        if (part !== this) return;
        if (event === MapEvents.LAYER_ADDED ||
            event === MapEvents.LAYER_DELETED ||
            event === MapEvents.LAYER_UPDATED) {
            const hasActiveLayer = this.gsMap?.layers.some(layer =>
                layer.uuid === this.activeDrawingLayerUuid &&
                layer.type === GsLayerType.VECTOR &&
                layer.source?.type === GsSourceType.Features
            );
            if (!hasActiveLayer && this.activeDrawingLayerUuid) {
                this.setActiveDrawingLayer(undefined);
            }
            this.emitToolbarContextChange("layers");
        }
    }

    protected renderToolbar() {
        const gsMap = this.getGsMap();
        const drawableLayers = gsMap?.layers
            .filter((layer) => {
                const isVector = layer.type === GsLayerType.VECTOR;
                const isFeatures = layer.source?.type === GsSourceType.Features;
                return isVector && isFeatures;
            }) || [];
        const hasDrawableLayers = drawableLayers.length > 0;
        const hasActiveLayer = this.activeDrawingLayerUuid !== undefined;
        const activeDrawingLayer = drawableLayers.find((layer) => layer.uuid === this.activeDrawingLayerUuid);
        const drawingLayerLabel = activeDrawingLayer?.name || 'Drawing layer';
        const extensionContributions = contributionRegistry.getContributions<MapEditorToolbarExtensionContribution>('mapeditor.toolbar.extensions');
        const extensionNodes = extensionContributions.map((c) => {
            const { component } = c;
            if (typeof component === 'string') {
                return unsafeHTML(component);
            }
            return component(this);
        });
        const hasExtensions = extensionContributions.length > 0;

        return html`
            <lyra-command cmd="zoom_in" icon="magnifying-glass-plus" title="Zoom in"></lyra-command>
            <lyra-command cmd="zoom_out" icon="magnifying-glass-minus" title="Zoom out"></lyra-command>
            <lyra-command cmd="reset_view" icon="house" title="Reset view"></lyra-command>
            <lyra-command cmd="refresh_map" icon="rotate" title="Refresh map"></lyra-command>
            <wa-divider orientation="vertical"></wa-divider>
            <wa-dropdown placement="bottom-start" @wa-select=${(event: any) => this.handleDrawingLayerSelection(event)}>
                <wa-button slot="trigger" appearance="plain" size="small" with-caret title="Drawing layer">${drawingLayerLabel}</wa-button>
                <wa-dropdown-item value="__create_drawing_layer__">Create Drawing Layer</wa-dropdown-item>
                <wa-divider></wa-divider>
                <wa-dropdown-item type="checkbox" ?checked=${!this.activeDrawingLayerUuid} value="">Disable drawing</wa-dropdown-item>
                ${drawableLayers.map((layer) => html`
                    <wa-dropdown-item type="checkbox" ?checked=${this.activeDrawingLayerUuid === layer.uuid} value="${layer.uuid}">
                        ${layer.name || 'Layer'}
                    </wa-dropdown-item>
                `)}
            </wa-dropdown>
            ${when(hasDrawableLayers, () => html`
                <lyra-command icon="fg point" title="Draw Point" ?disabled=${!hasActiveLayer} .action=${() => this.handleDrawPoint()}></lyra-command>
                <lyra-command icon="fg polyline-pt" title="Draw LineString" ?disabled=${!hasActiveLayer} .action=${() => this.handleDrawLine()}></lyra-command>
                <lyra-command icon="fg polygon" title="Draw Polygon" ?disabled=${!hasActiveLayer} .action=${() => this.handleDrawPolygon()}></lyra-command>
                <lyra-command icon="fg select-extent" title="Select Features" .action=${() => this.handleSelectFeatures()}></lyra-command>
                <lyra-command icon="trash" title="Delete Selected Features" ?disabled=${!this.hasSelectedFeature} .action=${() => this.handleDeleteSelected()}></lyra-command>
                <wa-divider orientation="vertical"></wa-divider>
            `)}
            ${when(hasExtensions, () => html`${extensionNodes}<wa-divider orientation="vertical"></wa-divider>`)}
            <lyra-command icon="ellipsis-vertical" title="Misc tools" slot="end" dropdown="mapeditor.toolbar.misc" placement="bottom-end"></lyra-command>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        if (this.isFirstConnection) {
            this.isFirstConnection = false;
            return;
        }
        if (this.renderer?.reattached) {
            await this.renderer.reattached();
            if (this.renderer.setOnClick) {
                this.renderer.setOnClick(() => activePartSignal.set(this));
            }
        }
    }

    protected async doInitUI() {
        const file = this.input?.data as File;
        const basePath = file?.getWorkspacePath?.();
        const env = await loadEnvs([".env"], basePath);
        env["BUILD_TIME"] = new Date();
        const textContents = await file.getContents();
        let gsMap = (textContents && textContents.trim() ? JSON.parse(textContents) : DEFAULT_GSMAP)! as GsMap;
        gsMap = this.migrateGsMap(gsMap);
        ensureUuidsRecursive(gsMap);
        await replaceUris(gsMap, "url", undefined, basePath);
        await replaceUris(gsMap, "src", this.moduleResolver, basePath);
        this.gsMap = gsMap;
        const storedDrawingLayerUuid = gsMap.state?.activeDrawingLayerUuid as string | undefined;
        if (storedDrawingLayerUuid && gsMap.layers.some(layer =>
            layer.uuid === storedDrawingLayerUuid &&
            layer.type === GsLayerType.VECTOR &&
            layer.source?.type === GsSourceType.Features)
        ) {
            this.activeDrawingLayerUuid = storedDrawingLayerUuid;
        } else {
            this.setActiveDrawingLayer(undefined, false);
        }
        if (gsMap.view) {
            this.initialView = { center: [...gsMap.view.center] as [number, number], zoom: gsMap.view.zoom };
        }
        this.selectedRenderer = (gsMap.state?.renderer as RendererType) || 'openlayers';
        this.renderer = new IFrameMapRenderer(gsMap, env, this.selectedRenderer, basePath);
        const iframeOps = this.renderer.getOperations();
        const domainOps = new DomainMapOperations(gsMap, this.renderer);
        const signalingOps = new SignalingMapOperations(this);
        this.operations = createProxy([domainOps, iframeOps, signalingOps]);
        try {
            if (!this.mapContainer.value) throw new Error('Map container not available');
            await this.renderer.render(this.mapContainer.value);
            this.setupRendererCallbacks();
            mapChangedSignal.set({ part: this, event: MapEvents.LOADED });
            this.emitToolbarContextChange("map-loaded");
        } catch (error: any) {
            console.error('Failed to render map:', error);
            toastError(`Failed to render map: ${error.message}`);
        }
    }

    private migrateGsMap(gsMap: any): GsMap {
        const migratedMap: any = { ...gsMap };
        if (!gsMap.view) {
            migratedMap.view = {};
            if (gsMap.center !== undefined) { migratedMap.view.center = gsMap.center; delete migratedMap.center; }
            if (gsMap.zoom !== undefined) { migratedMap.view.zoom = gsMap.zoom; delete migratedMap.zoom; }
            if (gsMap.projection !== undefined) { migratedMap.view.projection = gsMap.projection; delete migratedMap.projection; }
            if (migratedMap.view.center === undefined) migratedMap.view.center = [0, 0];
            if (migratedMap.view.zoom === undefined) migratedMap.view.zoom = 0;
            if (migratedMap.view.projection === undefined) migratedMap.view.projection = 'EPSG:3857';
        }
        if (!gsMap.styles || Object.keys(gsMap.styles).length === 0) {
            migratedMap.styles = { ...DEFAULT_STYLES };
        }
        if (!gsMap.styleRules || gsMap.styleRules.length === 0) {
            migratedMap.styleRules = [...DEFAULT_STYLE_RULES];
        }
        return migratedMap as GsMap;
    }

    getGsMap(): GsMap | undefined {
        return this.gsMap;
    }

    private setupRendererCallbacks(): void {
        if (!this.renderer) return;
        this.renderer.setOnDirty(() => this.markDirty(true));
        this.renderer.setOnSync((event: MapSyncEvent) => {
            if (!this.gsMap) return;
            let shouldMarkDirty = true;
            switch (event.type) {
                case 'viewChanged':
                    this.gsMap.view.center = event.view.center;
                    this.gsMap.view.zoom = event.view.zoom;
                    if (event.view.rotation !== undefined) this.gsMap.view.rotation = event.view.rotation;
                    if (event.view.pitch !== undefined) this.gsMap.view.pitch = event.view.pitch;
                    if (event.view.bearing !== undefined) this.gsMap.view.bearing = event.view.bearing;
                    break;
                case 'featuresChanged':
                    const layer = findLayerByUuid(this.gsMap, event.layerUuid);
                    if (layer && layer.source?.type === GsSourceType.Features) {
                        (layer.source as any).features = event.features;
                    }
                    this.emitToolbarContextChange("features");
                    break;
                case 'featureSelected':
                    shouldMarkDirty = false;
                    this.hasSelectedFeature = true;
                    this.interactionMode = 'select';
                    mapChangedSignal.set({ part: this, event: MapEvents.FEATURE_SELECTED, payload: { feature: event.feature, layerUuid: event.layerUuid, metrics: event.metrics } });
                    this.emitToolbarContextChange("selection");
                    break;
                case 'featureDeselected':
                    shouldMarkDirty = false;
                    this.hasSelectedFeature = false;
                    mapChangedSignal.set({ part: this, event: MapEvents.FEATURE_SELECTED, payload: null });
                    if (this.interactionMode === 'select') { this.interactionMode = 'none'; }
                    this.emitToolbarContextChange("selection");
                    break;
                case 'drawingDisabled':
                    shouldMarkDirty = false;
                    if (this.interactionMode === 'draw') { this.interactionMode = 'none'; }
                    break;
            }
            if (shouldMarkDirty) this.markDirty(true);
        });
        this.renderer.setOnClick?.(() => activePartSignal.set(this));
    }

    async save() {
        if (!this.renderer || !this.gsMap) { toastError('Map not initialized'); return; }
        try {
            const mapClone = JSON.parse(JSON.stringify(this.gsMap));
            await revertBlobUris(mapClone, "url");
            await revertBlobUris(mapClone, "src");
            this.input?.data.saveContents(JSON.stringify(mapClone, null, 2));
            this.markDirty(false);
        } catch (error: any) {
            toastError(`Save failed: ${error.message}`);
        }
    }

    public get mapOperations(): MapOperations | undefined {
        return this.operations;
    }

    edit() {
        toastInfo("not yet implemented");
    }

    async refresh() {
        if (!this.renderer || !this.gsMap) return;
        const file = this.input?.data as File;
        const basePath = file?.getWorkspacePath?.();
        await revertBlobUris(this.gsMap, "url");
        await revertBlobUris(this.gsMap, "src");
        this.moduleResolver.clear();
        await replaceUris(this.gsMap, "url", undefined, basePath);
        await replaceUris(this.gsMap, "src", this.moduleResolver, basePath);
        await this.renderer.modelToUI(this.gsMap);
    }

    async resetView() {
        if (!this.operations || !this.initialView) return;
        await this.operations.setCenter(this.initialView.center);
        await this.operations.setZoom(this.initialView.zoom);
    }

    private async handleDrawPoint() { if (!this.activeDrawingLayerUuid) return; await this.operations?.enableDrawing('Point', this.activeDrawingLayerUuid); this.interactionMode = 'draw'; }
    private async handleDrawLine() { if (!this.activeDrawingLayerUuid) return; await this.operations?.enableDrawing('LineString', this.activeDrawingLayerUuid); this.interactionMode = 'draw'; }
    private async handleDrawPolygon() { if (!this.activeDrawingLayerUuid) return; await this.operations?.enableDrawing('Polygon', this.activeDrawingLayerUuid); this.interactionMode = 'draw'; }
    private async handleSelectFeatures() { await this.operations?.enableFeatureSelection(); this.interactionMode = 'select'; this.hasSelectedFeature = false; }
    private async handleDrawingLayerSelection(event: any) {
        const selectedUuid = event?.detail?.item?.value as string | undefined;
        if (selectedUuid === '__create_drawing_layer__') {
            await this.handleCreateDrawingLayer();
            return;
        }
        const newUuid = selectedUuid || undefined;
        this.setActiveDrawingLayer(newUuid);
        if (newUuid) return;
        await this.operations?.disableDrawing();
        this.interactionMode = 'none';
    }

    private async handleDeleteSelected() {
        if (!this.hasSelectedFeature) return;
        try {
            await this.operations?.deleteSelectedFeatures();
            this.hasSelectedFeature = false;
            this.interactionMode = 'none';
            this.emitToolbarContextChange("features");
            toastInfo('Selected features deleted');
        } catch (error: any) {
            toastError(error.message);
        }
    }

    private async handleRendererChange(newRenderer: RendererType) {
        if (newRenderer === this.selectedRenderer) return;
        this.selectedRenderer = newRenderer;
        if (this.gsMap) { if (!this.gsMap.state) this.gsMap.state = {}; this.gsMap.state.renderer = newRenderer; }
        if (this.renderer && this.gsMap && this.mapContainer.value) {
            const env = (this.renderer as IFrameMapRenderer).getEnv();
            const basePath = (this.input?.data as File)?.getWorkspacePath?.();
            this.renderer.destroy();
            this.renderer = new IFrameMapRenderer(this.gsMap, env, newRenderer, basePath);
            const iframeOps = this.renderer.getOperations();
            const domainOps = new DomainMapOperations(this.gsMap, this.renderer);
            const signalingOps = new SignalingMapOperations(this);
            this.operations = createProxy([domainOps, iframeOps, signalingOps]);
            try {
                await this.renderer.render(this.mapContainer.value);
                this.setupRendererCallbacks();
                toastInfo(`Switched to ${newRenderer === 'maplibre' ? 'MapLibre' : 'OpenLayers'} renderer`);
            } catch (error: any) {
                toastError(`Failed to switch renderer: ${error.message}`);
            }
        }
        this.markDirty(true);
        this.emitToolbarContextChange("renderer");
    }

    public async setRenderer(newRenderer: RendererType) {
        await this.handleRendererChange(newRenderer);
    }

    private async handleCreateDrawingLayer() {
        if (!this.gsMap) { toastError('Map not initialized'); return; }
        const layerName = await promptDialog('Enter name for new drawing layer:', 'Drawing Layer');
        if (!layerName) return;
        const newLayer = ensureUuidsRecursive({
            name: layerName,
            type: GsLayerType.VECTOR,
            source: { type: GsSourceType.Features, features: [] },
            visible: true
        } as any);
        await this.operations?.addLayer(newLayer, false);
        if (newLayer.uuid) this.setActiveDrawingLayer(newLayer.uuid);
        await this.updateComplete;
        toastInfo(`Created drawing layer: ${layerName}`);
    }

    private setActiveDrawingLayer(uuid?: string, markDirty = true) {
        this.activeDrawingLayerUuid = uuid;
        if (this.gsMap) {
            if (!this.gsMap.state) this.gsMap.state = {};
            if (uuid) {
                this.gsMap.state.activeDrawingLayerUuid = uuid;
            } else {
                delete this.gsMap.state.activeDrawingLayerUuid;
            }
            mapChangedSignal.set({
                part: this,
                event: MapEvents.DRAWING_LAYER_CHANGED,
                payload: { uuid }
            });
        }
        if (markDirty) this.markDirty(true);
        this.emitToolbarContextChange("drawing-layer");
    }

    protected doClose() {
        this.renderer?.destroy();
        this.renderer = undefined;
        this.input = undefined;
        this.moduleResolver.clear();
    }

    protected renderContent() {
        return html`<div class="gc-map-container" ${ref(this.mapContainer)}></div>`;
    }

    static styles = [css`
        :host { display: flex; flex-direction: column; position: relative; width: 100%; height: 100%; overflow: hidden; }
        .gc-map-container { position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; }
    `];
}

declare global {
    interface HTMLElementTagNameMap {
        'gs-map': GsMapEditor
    }
}
