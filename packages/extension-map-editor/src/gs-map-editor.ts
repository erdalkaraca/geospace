import { css, html, customElement, property, createRef, ref, Ref, when, keyed } from '@kispace-io/core/externals/lit';
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
import { mapChangedSignal, MapEvents, FeatureSelection } from "./gs-signals";
import { loadEnvs, replaceUris, revertBlobUris } from "./utils";
import { WorkspaceModuleResolver } from "./workspace-module-resolver";
import { IFrameMapRenderer, RendererType } from "./iframe-map-renderer";
import { DomainMapOperations } from "./domain-map-operations";
import { SignalingMapOperations } from "./signaling-map-operations";
import {
    CommandStack,
    KPart,
    EditorInput,
    File,
    toastError,
    toastInfo,
    promptDialog,
    activePartSignal,
    createLogger
} from "@kispace-io/core/api";

const logger = createLogger('GsMapEditor');

@customElement('gs-map')
export class GsMapEditor extends KPart {
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

    protected doBeforeUI() {
        this.watch(mapChangedSignal, ({ part, event }: { part: KPart, event: MapEvents }) => {
            this.onMapChanged({ part, event });
        });
    }

    protected onMapChanged({ part, event }: { part: KPart, event: MapEvents }) {
        if (part !== this) return;
        if (event === MapEvents.LAYER_ADDED ||
            event === MapEvents.LAYER_DELETED ||
            event === MapEvents.LAYER_UPDATED) {
            this.updateToolbar();
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
        const hasActiveLayer = this.activeDrawingLayerUuid !== undefined;

        return html`
            <k-command cmd="zoom_in" icon="magnifying-glass-plus" title="Zoom in"></k-command>
            <k-command cmd="zoom_out" icon="magnifying-glass-minus" title="Zoom out"></k-command>
            <k-command cmd="reset_view" icon="house" title="Reset view"></k-command>
            <k-command cmd="refresh_map" icon="rotate" title="Refresh map"></k-command>
            <wa-divider orientation="vertical"></wa-divider>
            <k-command cmd="capture_map_screenshot" icon="camera" title="Capture screenshot"></k-command>
            <wa-divider orientation="vertical"></wa-divider>
            <k-command cmd="toggle_color_mode" icon="circle-half-stroke" title="Toggle dark/light mode"></k-command>
            <k-command cmd="toggle_mobile_view" icon="mobile" title="Toggle mobile view"></k-command>
            <wa-divider orientation="vertical"></wa-divider>
            <k-command icon="plus" title="Create Drawing Layer" .action=${() => this.handleCreateDrawingLayer()}></k-command>
            ${when(drawableLayers.length > 0, () => {
                const layerKey = drawableLayers.map((layer) => `${layer.uuid}:${layer.name}`).join('|');
                return html`
                    ${keyed(layerKey, html`
                        <wa-select placeholder="Drawing layer" size="small" value="${this.activeDrawingLayerUuid ?? ''}"
                            @change=${(e: any) => {
                                const newUuid = e.target.value || undefined;
                                this.activeDrawingLayerUuid = newUuid;
                                if (newUuid === undefined || e.target.value === '') {
                                    this.operations?.disableDrawing();
                                    this.interactionMode = 'none';
                                }
                                this.updateToolbar();
                            }}>
                            <wa-option value="">Select layer</wa-option>
                            ${drawableLayers.map((layer) => html`<wa-option value="${layer.uuid}">${layer.name || 'Layer'}</wa-option>`)}
                        </wa-select>
                    `)}
                    <k-command icon="location-dot" title="Draw Point" ?disabled=${!hasActiveLayer} .action=${() => this.handleDrawPoint()}></k-command>
                    <k-command icon="minus" title="Draw LineString" ?disabled=${!hasActiveLayer} .action=${() => this.handleDrawLine()}></k-command>
                    <k-command icon="draw-polygon" title="Draw Polygon" ?disabled=${!hasActiveLayer} .action=${() => this.handleDrawPolygon()}></k-command>
                    <k-command icon="trash" title="Delete Selected Features" ?disabled=${this.interactionMode !== 'select'} .action=${() => this.handleDeleteSelected()}></k-command>
                    <wa-divider orientation="vertical"></wa-divider>
                `;
            })}
            <k-command icon="hand-pointer" title="Select Features" .action=${() => this.handleSelectFeatures()}></k-command>
            <wa-divider orientation="vertical"></wa-divider>
            <wa-select size="small" value="${this.selectedRenderer}" title="Map Renderer" @change=${(e: any) => this.handleRendererChange(e.target.value)}>
                <wa-option value="openlayers">OpenLayers</wa-option>
                <wa-option value="maplibre">MapLibre</wa-option>
            </wa-select>
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
        const env = await loadEnvs(".env");
        env["BUILD_TIME"] = new Date();
        const textContents = await file.getContents();
        let gsMap = (textContents && textContents.trim() ? JSON.parse(textContents) : DEFAULT_GSMAP)! as GsMap;
        gsMap = this.migrateGsMap(gsMap);
        ensureUuidsRecursive(gsMap);
        await replaceUris(gsMap, "url");
        await replaceUris(gsMap, "src", this.moduleResolver);
        this.gsMap = gsMap;
        if (gsMap.view) {
            this.initialView = { center: [...gsMap.view.center] as [number, number], zoom: gsMap.view.zoom };
        }
        this.selectedRenderer = (gsMap.state?.renderer as RendererType) || 'openlayers';
        this.renderer = new IFrameMapRenderer(gsMap, env, this.selectedRenderer);
        const iframeOps = this.renderer.getOperations();
        const domainOps = new DomainMapOperations(gsMap, this.renderer);
        const signalingOps = new SignalingMapOperations(this);
        this.operations = createProxy([domainOps, iframeOps, signalingOps]);
        try {
            if (!this.mapContainer.value) throw new Error('Map container not available');
            await this.renderer.render(this.mapContainer.value);
            this.setupRendererCallbacks();
            this.updateToolbar();
            mapChangedSignal.set({ part: this, event: MapEvents.LOADED });
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
                    break;
                case 'featureSelected':
                    mapChangedSignal.set({ part: this, event: MapEvents.FEATURE_SELECTED, payload: { feature: event.feature, layerUuid: event.layerUuid, metrics: event.metrics } });
                    break;
                case 'featureDeselected':
                    mapChangedSignal.set({ part: this, event: MapEvents.FEATURE_SELECTED, payload: null });
                    if (this.interactionMode === 'select') { this.interactionMode = 'none'; this.updateToolbar(); }
                    break;
                case 'drawingDisabled':
                    if (this.interactionMode === 'draw') { this.interactionMode = 'none'; this.updateToolbar(); }
                    break;
            }
            this.markDirty(true);
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
        await revertBlobUris(this.gsMap, "url");
        await revertBlobUris(this.gsMap, "src");
        this.moduleResolver.clear();
        await replaceUris(this.gsMap, "url");
        await replaceUris(this.gsMap, "src", this.moduleResolver);
        await this.renderer.modelToUI(this.gsMap);
    }

    async resetView() {
        if (!this.operations || !this.initialView) return;
        await this.operations.setCenter(this.initialView.center);
        await this.operations.setZoom(this.initialView.zoom);
    }

    private async handleDrawPoint() { if (!this.activeDrawingLayerUuid) return; await this.operations?.enableDrawing('Point', this.activeDrawingLayerUuid); this.interactionMode = 'draw'; this.updateToolbar(); }
    private async handleDrawLine() { if (!this.activeDrawingLayerUuid) return; await this.operations?.enableDrawing('LineString', this.activeDrawingLayerUuid); this.interactionMode = 'draw'; this.updateToolbar(); }
    private async handleDrawPolygon() { if (!this.activeDrawingLayerUuid) return; await this.operations?.enableDrawing('Polygon', this.activeDrawingLayerUuid); this.interactionMode = 'draw'; this.updateToolbar(); }
    private async handleSelectFeatures() { await this.operations?.enableFeatureSelection(); this.interactionMode = 'select'; this.updateToolbar(); }
    private async handleDeleteSelected() {
        if (this.interactionMode !== 'select') return;
        try { await this.operations?.deleteSelectedFeatures(); toastInfo('Selected features deleted'); } catch (error: any) { toastError(error.message); }
    }

    private async handleRendererChange(newRenderer: RendererType) {
        if (newRenderer === this.selectedRenderer) return;
        this.selectedRenderer = newRenderer;
        if (this.gsMap) { if (!this.gsMap.state) this.gsMap.state = {}; this.gsMap.state.renderer = newRenderer; }
        if (this.renderer && this.gsMap && this.mapContainer.value) {
            const env = (this.renderer as IFrameMapRenderer).getEnv();
            this.renderer.destroy();
            this.renderer = new IFrameMapRenderer(this.gsMap, env, newRenderer);
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
        this.updateToolbar();
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
        const addedLayer = this.gsMap?.layers.find(layer => layer.uuid === newLayer.uuid);
        if (addedLayer?.uuid) this.activeDrawingLayerUuid = addedLayer.uuid;
        await this.updateComplete;
        this.updateToolbar();
        toastInfo(`Created drawing layer: ${layerName}`);
    }

    protected doClose() {
        this.renderer?.destroy();
        this.renderer = undefined;
        this.input = undefined;
        this.moduleResolver.clear();
    }

    render() {
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
