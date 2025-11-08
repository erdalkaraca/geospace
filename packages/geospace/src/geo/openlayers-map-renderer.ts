import {MapOperations, MapRenderer, MapSyncEvent} from "./map-renderer";
import {gsLib, GsMap, GsSourceType, KEY_NAME, toOlLayer, KEY_STATE, KEY_UUID} from "../rt/gs-lib";
import {toGsFeature} from "../rt/gs-ol2gs";
import {cleanupEventSubscriptions, toOlStyle} from "../rt/gs-gs2ol";
import {ensureUuid, getStyleForFeature, GsFeature, GsGeometry} from "../rt/gs-model";
import {v4 as uuidv4} from 'uuid';
import {Map as OlMap} from "ol";
import {Feature} from "ol";
import BaseLayer from "ol/layer/Base";
import type {FeatureLike} from "ol/Feature";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Draw from "ol/interaction/Draw.js";
import Select from "ol/interaction/Select.js";
import {click} from "ol/events/condition.js";
import {Style, Stroke, Fill, Circle as CircleStyle} from "ol/style.js";
import {getLength, getArea} from "ol/sphere.js";
import LineString from "ol/geom/LineString.js";
import type {Geometry} from "ol/geom";

/**
 * Lightweight helper to extract minimal GsFeature data for style evaluation
 * Avoids the overhead of full toGsFeature() conversion
 */
function getFeatureStyleData(feature: Feature): GsFeature {
    const geometry = feature.getGeometry() as Geometry;
    return ensureUuid({
        geometry: ensureUuid({
            type: geometry.getType(),
            coordinates: []  // Not needed for style rules
        } as GsGeometry),
        state: feature.get(KEY_STATE)
    } as GsFeature);
}

/**
 * OpenLayers map renderer that manages OpenLayers maps
 * Provides complete isolation between the host app and the rendering engine
 * User modules are handled by the toOlMap() function
 */
export class OpenLayersMapRenderer implements MapRenderer {
    public olMap?: OlMap; // Made public for backward compatibility
    gsMap: GsMap;
    private env?: any;
    private onDirtyCallback?: () => void;
    private onSyncCallback?: (event: MapSyncEvent) => void;
    private isDestroyed: boolean = false;
    private operations?: OpenLayersMapOperations;
    private styleCache: Map<string, Style> = new Map();

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
            
            // Apply styling to all vector layers
            this.applyStylesToLayers();
            
            // Set up event listeners after the map is rendered
            this.olMap.once('rendercomplete', () => {
                this.setupEventListeners();
            });
            
        } catch (error) {
            console.error('Failed to render map:', error);
            throw error;
        }
    }
    
    private applyStylesToLayers(): void {
        if (!this.olMap) return;
        
        const layers = this.olMap.getLayers().getArray();
        layers.forEach(layer => {
            if (layer instanceof VectorLayer) {
                this.applyStyleToVectorLayer(layer);
            }
        });
    }
    
    private applyStyleToVectorLayer(layer: VectorLayer): void {
        const layerName = layer.get(KEY_NAME);
        
        // Create a style function that applies rules to each feature
        const styleFunction = (feature: FeatureLike) => {
            // Only process actual Feature objects (not RenderFeature)
            if (!(feature instanceof Feature)) {
                return undefined;
            }
            
            // Extract minimal data needed for style evaluation (lightweight, no coordinate conversion)
            const featureStyleData = getFeatureStyleData(feature);
            const styleRules = this.gsMap.styleRules;
            const stylesMap = this.gsMap.styles;
            
            if (styleRules && stylesMap) {
                // TODO: Optimize performance - this is called for every feature every frame
                // Consider caching: 1) rule evaluation results by feature ID, 2) sorted rules array
                // Current cost: O(n log n) sort + O(n) rule iteration per call
                const gsStyle = getStyleForFeature(featureStyleData, styleRules, stylesMap, layerName);
                if (gsStyle && gsStyle.id) {
                    // Check cache first
                    let olStyle = this.styleCache.get(gsStyle.id);
                    if (!olStyle) {
                        // Convert and cache
                        olStyle = toOlStyle(gsStyle);
                        this.styleCache.set(gsStyle.id, olStyle);
                    }
                    return olStyle;
                } else if (gsStyle) {
                    // Style without ID - can't cache, convert directly
                    return toOlStyle(gsStyle);
                }
            }
            
            // Return undefined to use default OpenLayers styling
            return undefined;
        };
        
        layer.setStyle(styleFunction);
    }
    
    private clearStyleCache(): void {
        this.styleCache.clear();
    }
    
    async modelToUI(updatedGsMap?: GsMap): Promise<void> {
        if (!this.olMap) {
            throw new Error('Map not initialized');
        }
        
        // Update the gsMap if provided
        if (updatedGsMap) {
            this.gsMap = updatedGsMap;
        }
        
        // Clear style cache when model changes (styles/rules may have changed)
        this.clearStyleCache();
        
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

    async getViewExtent(): Promise<number[]> {
        console.debug("Getting view extent");
        if (!this.olMap) {
            throw new Error("OpenLayers map not available for extent calculation");
        }

        const view = this.olMap.getView();
        const extent = view.calculateExtent();
        console.debug(`View extent: ${extent}`);
        return extent;
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

    public syncLayerFeaturesToModel(layerUuid: string): void {
        if (!this.olMap) return;

        const layers = this.olMap.getLayers();
        let olLayer: BaseLayer | undefined;
        for (let i = 0; i < layers.getLength(); i++) {
            const layer = layers.item(i);
            if (layer.get(KEY_UUID) === layerUuid) {
                olLayer = layer;
                break;
            }
        }
        
        if (!olLayer || !(olLayer instanceof VectorLayer)) return;

        const source = olLayer.getSource();
        if (!source) return;

        // Convert OpenLayers features back to GsFeatures
        const olFeatures = source.getFeatures();
        const gsFeatures = olFeatures.map((olFeature: Feature) => toGsFeature(olFeature));

        // Notify host with features change event
        // Host decides whether to apply based on its own layer structure
        this.triggerSync({
            type: 'featuresChanged',
            layerUuid,
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
        this.clearStyleCache();
        // Cleanup operations (removes keyboard listeners) before destroying map
        if (this.operations) {
            const ops = this.operations as any;
            if (ops.cleanup) {
                ops.cleanup();
            }
        }
        // Cleanup event subscriptions before disposing map
        if (this.olMap) {
            cleanupEventSubscriptions(this.olMap);
        }
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
    private activeDrawingLayerUuid?: string;
    private keyDownListener?: (event: KeyboardEvent) => void;

    constructor(
        private olMap: OlMap,
        private renderer?: OpenLayersMapRenderer
    ) {
        if (!olMap) {
            throw new Error("OpenLayers map is required for operations");
        }
        
        // Setup ESC key handler to disable drawing/selection when iframe is focused
        this.keyDownListener = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                if (this.drawInteraction) {
                    this.disableDrawing();
                    // Notify parent that drawing was disabled
                    this.renderer?.triggerSync({
                        type: 'drawingDisabled'
                    } as any);
                }
                if (this.selectInteraction) {
                    this.disableSelection();
                    // featureDeselected event already sent by disableSelection()
                    // Parent will update interaction mode when it receives the event
                }
            }
        };
        
        // Listen on the map's target element (the container, in the iframe)
        const target = this.olMap.getTargetElement();
        if (target && target instanceof HTMLElement) {
            // Make the target focusable for keyboard events
            target.setAttribute('tabindex', '-1');
            target.addEventListener('keydown', this.keyDownListener);
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

    async deleteLayer(uuid: string): Promise<void> {
        const layers = this.olMap.getLayers();
        for (let i = 0; i < layers.getLength(); i++) {
            const layer = layers.item(i);
            if (layer.get(KEY_UUID) === uuid) {
                layers.removeAt(i);
                return;
            }
        }
    }

    async renameLayer(uuid: string, newName: string): Promise<void> {
        const layers = this.olMap.getLayers();
        for (let i = 0; i < layers.getLength(); i++) {
            const layer = layers.item(i);
            if (layer.get(KEY_UUID) === uuid) {
                layer.set(KEY_NAME, newName);
                return;
            }
        }
    }

    async moveLayer(uuid: string, targetUuid?: string): Promise<void> {
        const layers = this.olMap.getLayers();
        let fromIndex = -1;
        let toIndex = -1;
        
        for (let i = 0; i < layers.getLength(); i++) {
            const layer = layers.item(i);
            if (layer.get(KEY_UUID) === uuid) {
                fromIndex = i;
            }
            if (targetUuid && layer.get(KEY_UUID) === targetUuid) {
                toIndex = i;
            }
        }
        
        if (fromIndex < 0) return;
        
        if (targetUuid) {
            if (toIndex < 0 || fromIndex === toIndex) return;
        } else {
            toIndex = fromIndex > 0 ? fromIndex - 1 : fromIndex + 1;
        }

        if (toIndex >= 0 && toIndex < layers.getLength() && fromIndex !== toIndex) {
            const layer = layers.item(fromIndex);
            layers.removeAt(fromIndex);
            layers.insertAt(toIndex, layer);
        }
    }

    async setLayerVisible(uuid: string, visible: boolean): Promise<void> {
        const layers = this.olMap.getLayers();
        for (let i = 0; i < layers.getLength(); i++) {
            const layer = layers.item(i);
            if (layer.get(KEY_UUID) === uuid) {
                layer.setVisible(visible);
                return;
            }
        }
    }

    async addControlFromModule(_src: string): Promise<void> {
        // UI does not support control creation
    }

    async removeControl(_uuid: string): Promise<void> {
        // UI does not support control removal
    }

    async addOverlayFromModule(_src: string, _position?: string): Promise<void> {
        // UI does not support overlay creation
    }

    async removeOverlay(_uuid: string): Promise<void> {
        // UI does not support overlay removal
    }

    private setCursor(cursor: string): void {
        const viewport = this.olMap.getViewport();
        if (viewport) {
            (viewport as HTMLElement).style.cursor = cursor;
        }
    }

    async enableDrawing(geometryType: 'Point' | 'LineString' | 'Polygon', layerUuid: string): Promise<void> {
        this.disableSelection();
        
        if (this.drawInteraction) {
            this.olMap.removeInteraction(this.drawInteraction);
        }
        
        this.activeDrawingLayerUuid = layerUuid;
        this.setCursor('crosshair');
        
        const layers = this.olMap.getLayers();
        let layer: BaseLayer | undefined;
        for (let i = 0; i < layers.getLength(); i++) {
            const l = layers.item(i);
            if (l.get(KEY_UUID) === layerUuid) {
                layer = l;
                break;
            }
        }
        
        if (!layer || !(layer instanceof VectorLayer)) {
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
        const onFeatureAdded = (event: any) => {
            // Assign UUID to newly drawn features (app-managed features)
            const feature = event.feature;
            if (feature && !feature.get(KEY_UUID)) {
                const uuid = uuidv4();
                feature.set(KEY_UUID, uuid);
                // Also store in state
                const state = feature.get(KEY_STATE) || {};
                state.uuid = uuid;
                feature.set(KEY_STATE, state);
            }
            
            if (this.renderer && this.activeDrawingLayerUuid) {
                this.renderer.syncLayerFeaturesToModel(this.activeDrawingLayerUuid);
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
    
    // Cleanup method to remove event listeners
    // Called by OpenLayersMapRenderer.destroy() to prevent memory leaks
    cleanup(): void {
        if (this.keyDownListener) {
            const target = this.olMap.getTargetElement();
            if (target && target instanceof HTMLElement) {
                target.removeEventListener('keydown', this.keyDownListener);
            }
            this.keyDownListener = undefined;
        }
    }

    async enableFeatureSelection(): Promise<void> {
        this.disableDrawing();
        this.disableSelection();
        
        const olLayers = this.olMap.getLayers();
        
        // Get all vector layers to enable selection across all of them
        const vectorLayers = olLayers.getArray().filter(layer => layer instanceof VectorLayer) as VectorLayer<VectorSource>[];
        
        if (vectorLayers.length === 0) {
            throw new Error('No vector layers available for selection');
        }
        
        const gsMap = this.renderer?.gsMap;
        const selectionStyle = gsMap?.styles?.['selection'];
        
        const selectOptions: any = {
            condition: click,
            layers: vectorLayers,
            hitTolerance: 5,
            style: selectionStyle ? toOlStyle(selectionStyle) : (_feature: any) => {
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
                let featureLayerUuid: string | undefined;
                olLayers.getArray().forEach((layer) => {
                    if (layer instanceof VectorLayer) {
                        const source = layer.getSource();
                        if (source && source.hasFeature(selectedFeature)) {
                            const uuid = layer.get(KEY_UUID);
                            if (uuid) {
                                featureLayerUuid = uuid;
                            }
                        }
                    }
                });
                
                if (featureLayerUuid && this.renderer) {
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
                        layerUuid: featureLayerUuid,
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
        
        // Track which layers have features deleted so we can sync them
        const layersToSync = new Set<string>();
        
        const olLayers = this.olMap.getLayers();
        
        // Delete features from their respective sources
        selectedFeatures.forEach((feature: any) => {
            // Find which layer this feature belongs to
            for (let i = 0; i < olLayers.getLength(); i++) {
                const layer = olLayers.item(i);
                if (layer instanceof VectorLayer) {
                    const source = layer.getSource();
                    if (source && source.hasFeature(feature)) {
                        source.removeFeature(feature);
                        const layerUuid = layer.get(KEY_UUID);
                        if (layerUuid) {
                            layersToSync.add(layerUuid);
                        }
                        break;
                    }
                }
            }
        });
        
        selectedFeatures.clear();
        
        // Sync features back to domain model for each affected layer
        if (this.renderer && layersToSync.size > 0) {
            layersToSync.forEach(layerUuid => {
                this.renderer!.syncLayerFeaturesToModel(layerUuid);
            });
        }
        this.renderer?.triggerDirty();
    }

    async disableSelection(): Promise<void> {
        if (this.selectInteraction) {
            this.olMap.removeInteraction(this.selectInteraction);
            this.selectInteraction = undefined;
            this.setCursor('');
            // Clear selection when disabling
            this.renderer?.triggerSync({
                type: 'featureDeselected'
            });
        }
    }
}
