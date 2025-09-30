import {MapOperations, MapRenderer} from "./map-renderer.ts";
import {GsFeature, gsLib, GsMap, KEY_NAME, stylesLoader, toOlFeature, toOlLayer} from "../rt/gs-lib.ts";
import {Map} from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

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
    private onSyncCallback?: (gsMap: GsMap) => void;
    private isDestroyed: boolean = false;
    private operations?: OpenLayersMapOperations;

    constructor(gsMap: GsMap, env?: any) {
        this.gsMap = gsMap;
        this.env = env;
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
            this.operations = new OpenLayersMapOperations(this.olMap);
            
            // Bind styles to layers
            if (this.olMap) {
            this.olMap.getLayers().getArray().forEach((olLayer) => {
                stylesLoader.bindToLayer(olLayer);
            });
            
                // Set up event listeners after the map is rendered
                this.olMap.once('rendercomplete', () => {
                    this.setupEventListeners();
                });
            }
            
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

    setOnSync(callback: (gsMap: GsMap) => void): void {
        this.onSyncCallback = callback;
    }

    triggerDirty(): void {
        if (this.isDestroyed || !this.onDirtyCallback) return;
        this.onDirtyCallback();
    }

    triggerSync(): void {
        if (this.isDestroyed || !this.onSyncCallback) return;
        this.onSyncCallback(this.gsMap);
    }

    private syncViewToModel(): void {
        if (!this.olMap) return;

        const view = this.olMap.getView();
        const center = view.getCenter();
        const zoom = view.getZoom();
        const projection = view.getProjection().getCode();

        // Update the domain model with current OpenLayers view state
        if (center) {
            this.gsMap.view.center = center;
        }
        if (zoom !== undefined) {
            this.gsMap.view.zoom = zoom;
        }
        if (projection) {
            this.gsMap.view.projection = projection;
        }

        // Trigger sync callback to update the host's domain model
        this.triggerSync();
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
    constructor(
        private olMap: Map
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
        stylesLoader.bindToLayer(olLayer);
    }

    async deleteLayer(index: number): Promise<void> {
        this.olMap.getLayers().removeAt(index);
    }

    async setLayerVisible(index: number, visible: boolean): Promise<void> {
        const olLayers = this.olMap.getLayers();
        if (index >= 0 && index < olLayers.getLength()) {
            olLayers.item(index).setVisible(visible);
        }
    }

    async applyStyles(layerIdentifier: string | number, _stylesPath: string): Promise<void> {
        const olLayers = this.olMap.getLayers();
        let olLayer: any;

        // Find layer by index or name
        if (typeof layerIdentifier === "number" || (typeof layerIdentifier === "string" && layerIdentifier.trim().match(/\d+/))) {
            const index = parseInt(layerIdentifier.toString()) - 1; // Convert to 0-based index
            if (index >= 0 && index < olLayers.getLength()) {
                olLayer = olLayers.item(index);
            }
        } else {
            const layerName = layerIdentifier.toString().trim().toLowerCase();
            for (let i = 0; i < olLayers.getLength(); i++) {
                const layer = olLayers.item(i);
                if (layer.get(KEY_NAME) === layerName) {
                    olLayer = layer;
                    break;
                }
            }
        }

        if (!olLayer) {
            throw new Error(`Layer not found: ${layerIdentifier}`);
        }

        stylesLoader.bindToLayer(olLayer);
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
}
