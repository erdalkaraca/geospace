import {MapOperations, MapRenderer, MapSyncEvent} from "./map-renderer.ts";
import {GsFeature, gsLib, GsMap, GsSourceType, KEY_NAME, toOlFeature, toOlLayer} from "../rt/gs-lib.ts";
import {toGsFeature} from "../rt/gs-ol2gs.ts";
import {Map} from "ol";
import type {Feature} from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Draw from "ol/interaction/Draw.js";
import Select from "ol/interaction/Select.js";
import {click} from "ol/events/condition.js";
import {Style, Stroke, Fill, Circle as CircleStyle} from "ol/style.js";
import {getLength, getArea} from "ol/sphere.js";
import LineString from "ol/geom/LineString.js";

/**
 * OpenLayers map renderer that manages OpenLayers maps
 * Provides complete isolation between the host app and the rendering engine
 * User modules are handled by the toOlMap() function
 */
export class OpenLayersMapRenderer implements MapRenderer {
    public olMap?: Map; // Made public for backward compatibility
    gsMap: GsMap;
    private env?: any;
    private onDirtyCallback?: () => void;
    private onSyncCallback?: (event: MapSyncEvent) => void;
    private isDestroyed: boolean = false;
    private operations?: OpenLayersMapOperations;

    constructor(gsMap: GsMap, env?: any) {
        this.gsMap = gsMap;
        this.env = env;
    }

    async reattached(): Promise<void> {
        // OpenLayers doesn't need special handling for reattachment
        // The map stays attached to its container element
    }

    async render(container: string | HTMLElement): Promise<void> {
        try {
            // Use the runtime library to render the map
            this.olMap = await gsLib({
                containerSelector: container,
                gsMap: this.gsMap,
                env: this.env,
                mapOptions: {
                    controls: { zoom: false, attribution: false }
                }
            });
            
            // Create operations after map is available
            this.operations = new OpenLayersMapOperations(this.olMap, this);
            
            // Set up event listeners after the map is rendered
            this.olMap.once('rendercomplete', () => {
                this.setupEventListeners();
            });
            
        } catch (error) {
            console.error('Failed to render map:', error);
            throw error;
        }
    }
    
    async modelToUI(updatedGsMap?: GsMap): Promise<void> {
        if (!this.olMap) {
            throw new Error('Map not initialized');
        }
        
        // Update the gsMap if provided
        if (updatedGsMap) {
            this.gsMap = updatedGsMap;
        }
        
        // Get the container before destroying the map
        const target = this.olMap.getTarget();
        if (!target || typeof target === 'string') {
            throw new Error('Map container not found or invalid');
        }

        this.destroy();

        // Clear the DOM container
        target.innerHTML = '';

        this.isDestroyed = false;
        await this.render(target);
    }
    

    getOperations(): MapOperations {
        if (!this.operations) {
            throw new Error("Operations not available - map not rendered yet");
        }
        return this.operations;
    }

    getViewExtent(): number[] {
        if (!this.olMap) {
            throw new Error("OpenLayers map not available for extent calculation");
        }

        const view = this.olMap.getView();
        return view.calculateExtent();
    }

    setOnDirty(callback: () => void): void {
        this.onDirtyCallback = callback;
    }

    setOnSync(callback: (event: MapSyncEvent) => void): void {
        this.onSyncCallback = callback;
    }

    triggerDirty(): void {
        if (this.isDestroyed || !this.onDirtyCallback) return;
        this.onDirtyCallback();
    }

    triggerSync(event: MapSyncEvent): void {
        if (this.isDestroyed || !this.onSyncCallback) return;
        this.onSyncCallback(event);
    }

    private syncViewToModel(): void {
        if (!this.olMap) return;

        const view = this.olMap.getView();
        const center = view.getCenter();
        const zoom = view.getZoom();
        const rotation = view.getRotation();

        // Notify host with specific view change event
        if (center && zoom !== undefined) {
            this.triggerSync({
                type: 'viewChanged',
                view: { center: center as [number, number], zoom, rotation }
            });
        }
    }

    public syncLayerFeaturesToModel(layerIndex: number): void {
        if (!this.olMap) return;

        const olLayers = this.olMap.getLayers();
        const olLayer = olLayers.item(layerIndex);

        if (!(olLayer instanceof VectorLayer)) return;

        const source = olLayer.getSource();
        if (!source) return;

        // Convert OpenLayers features back to GsFeatures
        const olFeatures = source.getFeatures();
        const gsFeatures = olFeatures.map((olFeature: Feature) => toGsFeature(olFeature));

        // Notify host with features change event
        // Host decides whether to apply based on its own layer structure
        this.triggerSync({
            type: 'featuresChanged',
            layerIndex,
            features: gsFeatures
        });
    }

    private setupEventListeners(): void {
        if (!this.olMap) return;

        // Sync view changes back to domain model before triggering dirty
        this.olMap.getView().on('change:center', () => {
            this.syncViewToModel();
            this.triggerDirty();
        });
        this.olMap.getView().on('change:resolution', () => {
            this.syncViewToModel();
            this.triggerDirty();
        });
        this.olMap.getView().on('change:rotation', () => {
            this.syncViewToModel();
            this.triggerDirty();
        });

        this.olMap.getLayers().on('add', () => this.triggerDirty());
        this.olMap.getLayers().on('remove', () => this.triggerDirty());

        this.olMap.getControls().on('add', () => this.triggerDirty());
        this.olMap.getControls().on('remove', () => this.triggerDirty());

        this.olMap.getOverlays().on('add', () => this.triggerDirty());
        this.olMap.getOverlays().on('remove', () => this.triggerDirty());
    }

    
    destroy(): void {
        this.isDestroyed = true;
        this.olMap?.dispose();
        this.olMap = undefined;
    }

}

/**
 * OpenLayers-specific map operations implementation that works with the domain model
 * This bridges the gap between command intents and the GsMap domain model
 */
export class OpenLayersMapOperations implements MapOperations {
    private drawInteraction?: Draw;
    private selectInteraction?: Select;
    private activeSelectionLayer?: VectorLayer<VectorSource>;
    private activeDrawingLayerIndex?: number;

    constructor(
        private olMap: Map,
        private renderer?: OpenLayersMapRenderer
    ) {
        if (!olMap) {
            throw new Error("OpenLayers map is required for operations");
        }
    }

    async setZoom(zoom: number): Promise<void> {
        this.olMap.getView().setZoom(zoom);
    }

    async setCenter(center: [number, number]): Promise<void> {
        this.olMap.getView().setCenter(center);
    }


    async switchColorMode(mode?: 'dark' | 'light'): Promise<void> {
        const olMap = this.olMap;
        let darkMode: boolean = olMap.get("darkmode") ?? false;

        // Determine new mode
        if (mode === 'dark') {
            darkMode = true;
        } else if (mode === 'light') {
            darkMode = false;
        } else {
            // Toggle if no mode specified
            darkMode = !darkMode;
        }

        // Set the dark mode property
        olMap.set("darkmode", darkMode);

        // Apply canvas filter for dark mode
        const canvasElements = document.querySelectorAll('canvas');
        canvasElements.forEach(canvas => {
            canvas.style.filter = darkMode ? "invert(100%)" : "";
        });

        // Trigger re-render
        olMap.render();
    }

    async addLayer(layer: any, isBasemap?: boolean): Promise<void> {
        const olLayer = toOlLayer(layer);
        if (isBasemap) {
            this.olMap.getLayers().insertAt(0, olLayer);
        } else {
            this.olMap.getLayers().push(olLayer);
        }
    }

    async deleteLayer(index: number): Promise<void> {
        this.olMap.getLayers().removeAt(index);
    }

    async renameLayer(index: number, newName: string): Promise<void> {
        const olLayers = this.olMap.getLayers();
        if (index >= 0 && index < olLayers.getLength()) {
            olLayers.item(index).set(KEY_NAME, newName);
        }
    }

    async moveLayer(fromIndex: number, toIndex: number): Promise<void> {
        const olLayers = this.olMap.getLayers();
        if (fromIndex >= 0 && fromIndex < olLayers.getLength() &&
            toIndex >= 0 && toIndex < olLayers.getLength() &&
            fromIndex !== toIndex) {
            const layer = olLayers.item(fromIndex);
            olLayers.removeAt(fromIndex);
            olLayers.insertAt(toIndex, layer);
        }
    }

    async setLayerVisible(index: number, visible: boolean): Promise<void> {
        const olLayers = this.olMap.getLayers();
        if (index >= 0 && index < olLayers.getLength()) {
            olLayers.item(index).setVisible(visible);
        }
    }

    async addMarker(marker: GsFeature, layerName?: string): Promise<void> {
        const targetLayerName = layerName || 'geocoded-markers';
        const olLayers = this.olMap.getLayers();
        
        // Find existing markers layer
        let olLayer = olLayers.getArray().find((layer: any) => layer.get(KEY_NAME) === targetLayerName) as VectorLayer;
        
        if (!olLayer) {
            // Create new markers layer
            olLayer = new VectorLayer({
                source: new VectorSource(),
                [KEY_NAME]: targetLayerName
            } as any);
            olLayers.push(olLayer);
        }

        const olFeature = toOlFeature(marker);
        olLayer.getSource()?.addFeature(olFeature);
    }

    async addControlFromModule(_src: string): Promise<void> {
        // UI does not support control creation
    }

    async removeControl(_index: number): Promise<void> {
        // UI does not support control removal
    }

    async addOverlayFromModule(_src: string, _position?: string): Promise<void> {
        // UI does not support overlay creation
    }

    async removeOverlay(_index: number): Promise<void> {
        // UI does not support overlay removal
    }

    private setCursor(cursor: string): void {
        const viewport = this.olMap.getViewport();
        if (viewport) {
            (viewport as HTMLElement).style.cursor = cursor;
        }
    }

    async enableDrawing(geometryType: 'Point' | 'LineString' | 'Polygon', layerIndex: number): Promise<void> {
        this.disableSelection();
        
        if (this.drawInteraction) {
            this.olMap.removeInteraction(this.drawInteraction);
        }
        
        this.activeDrawingLayerIndex = layerIndex;
        this.setCursor('crosshair');
        
        const olLayers = this.olMap.getLayers();
        const layer = olLayers.item(layerIndex);
        
        if (!(layer instanceof VectorLayer)) {
            throw new Error('Drawing only supported on vector layers');
        }
        
        const source = layer.getSource();
        if (!source) {
            throw new Error('Layer has no source');
        }
        
        const layerSourceType = layer.get('sourceType');
        if (layerSourceType && layerSourceType !== GsSourceType.Features) {
            throw new Error('Drawing only supported on layers with in-memory features, not URL-loaded data');
        }
        
        this.drawInteraction = new Draw({
            source: source,
            type: geometryType
        });
        
        // Listen to the source's addfeature event which fires AFTER the feature is added
        const onFeatureAdded = () => {
            if (this.renderer && this.activeDrawingLayerIndex !== undefined) {
                this.renderer.syncLayerFeaturesToModel(this.activeDrawingLayerIndex);
            }
            this.renderer?.triggerDirty();
        };
        
        source.on('addfeature', onFeatureAdded);
        
        // Store the listener so we can remove it later
        (this.drawInteraction as any)._featureAddedListener = onFeatureAdded;
        (this.drawInteraction as any)._sourceRef = source;
        
        this.olMap.addInteraction(this.drawInteraction);
    }

    async disableDrawing(): Promise<void> {
        if (this.drawInteraction) {
            // Remove the addfeature listener
            const listener = (this.drawInteraction as any)._featureAddedListener;
            const source = (this.drawInteraction as any)._sourceRef;
            if (listener && source) {
                source.un('addfeature', listener);
            }
            
            this.olMap.removeInteraction(this.drawInteraction);
            this.drawInteraction = undefined;
            this.setCursor('');
        }
    }

    async enableFeatureSelection(layerIndex: number): Promise<void> {
        this.disableDrawing();
        this.disableSelection();
        
        const olLayers = this.olMap.getLayers();
        
        // Get all vector layers to enable selection across all of them
        const vectorLayers = olLayers.getArray().filter(layer => layer instanceof VectorLayer) as VectorLayer<VectorSource>[];
        
        if (vectorLayers.length === 0) {
            throw new Error('No vector layers available for selection');
        }
        
        // Track the active layer for deletion purposes (if valid layer index provided)
        if (layerIndex >= 0 && layerIndex < olLayers.getLength()) {
            this.activeDrawingLayerIndex = layerIndex;
            const activeLayer = olLayers.item(layerIndex);
            if (activeLayer instanceof VectorLayer) {
                this.activeSelectionLayer = activeLayer;
            }
        }
        
        const selectOptions: any = {
            condition: click,
            layers: vectorLayers,
            hitTolerance: 5,
            style: (_feature: any) => {
                const stroke = new Stroke({
                    color: 'rgba(255, 255, 0, 1)',
                    width: 3
                });
                const fill = new Fill({
                    color: 'rgba(255, 255, 0, 0.3)'
                });
                return new Style({
                    image: new CircleStyle({
                        radius: 7,
                        fill: fill,
                        stroke: stroke
                    }),
                    stroke: stroke,
                    fill: fill
                });
            }
        };
        
        this.selectInteraction = new Select(selectOptions);
        
        // Listen for feature selection events
        this.selectInteraction.on('select', (event: any) => {
            if (event.selected.length > 0) {
                const selectedFeature = event.selected[0];
                // Find which layer this feature belongs to
                let featureLayerIndex = -1;
                olLayers.getArray().forEach((layer, index) => {
                    if (layer instanceof VectorLayer) {
                        const source = layer.getSource();
                        if (source && source.hasFeature(selectedFeature)) {
                            featureLayerIndex = index;
                        }
                    }
                });
                
                if (featureLayerIndex >= 0 && this.renderer) {
                    const gsFeature = toGsFeature(selectedFeature);
                    
                    // Calculate metrics based on geometry type
                    const geometry = selectedFeature.getGeometry();
                    const metrics: { length?: number, area?: number } = {};
                    
                    if (geometry) {
                        const geometryType = geometry.getType();
                        
                        try {
                            if (geometryType === 'LineString' || geometryType === 'MultiLineString') {
                                metrics.length = getLength(geometry, { projection: this.olMap.getView().getProjection() });
                            } else if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
                                metrics.area = getArea(geometry, { projection: this.olMap.getView().getProjection() });
                                // For polygons, also calculate perimeter
                                const coordinates = geometryType === 'Polygon' 
                                    ? (geometry as any).getCoordinates()[0]
                                    : (geometry as any).getCoordinates()[0][0];
                                
                                if (coordinates && coordinates.length > 0) {
                                    // Calculate perimeter by measuring the outer ring
                                    const perimeterLine = new LineString(coordinates);
                                    metrics.length = getLength(perimeterLine, { projection: this.olMap.getView().getProjection() });
                                }
                            }
                        } catch (error) {
                            console.warn('Error calculating feature metrics:', error);
                        }
                    }
                    
                    this.renderer.triggerSync({
                        type: 'featureSelected',
                        layerIndex: featureLayerIndex,
                        feature: gsFeature,
                        metrics
                    });
                }
            } else if (event.deselected.length > 0) {
                this.renderer?.triggerSync({
                    type: 'featureDeselected'
                });
            }
        });
        
        this.olMap.addInteraction(this.selectInteraction);
        this.setCursor('pointer');
    }

    async deleteSelectedFeatures(): Promise<void> {
        if (!this.selectInteraction) {
            throw new Error('No selection interaction active');
        }
        
        const selectedFeatures = this.selectInteraction.getFeatures();
        
        if (selectedFeatures.getLength() === 0) {
            throw new Error('No features selected');
        }
        
        const source = this.activeSelectionLayer?.getSource();
        if (!source) {
            throw new Error('No active layer source');
        }
        
        selectedFeatures.forEach((feature: any) => {
            source.removeFeature(feature);
        });
        
        selectedFeatures.clear();
        
        // Sync features back to domain model
        if (this.renderer && this.activeDrawingLayerIndex !== undefined) {
            this.renderer.syncLayerFeaturesToModel(this.activeDrawingLayerIndex);
        }
        this.renderer?.triggerDirty();
    }

    async disableSelection(): Promise<void> {
        if (this.selectInteraction) {
            this.olMap.removeInteraction(this.selectInteraction);
            this.selectInteraction = undefined;
            this.activeSelectionLayer = undefined;
            this.setCursor('');
            // Clear selection when disabling
            this.renderer?.triggerSync({
                type: 'featureDeselected'
            });
        }
    }
}
