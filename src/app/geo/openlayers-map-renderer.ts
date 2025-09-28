import {MapRenderer, MapOperations} from "./map-renderer.ts";
import {GsMap} from "../rt/gs-model.ts";
import {toOlMap} from "../rt/gs-gs2ol.ts";
import {olMapToGsMap} from "../rt/gs-ol2gs.ts";
import {stylesLoader} from "../rt/gs-style-loader.ts";
import {defaults as defaultInteractions} from 'ol/interaction/defaults.js';
import {defaults as defaultControls} from 'ol/control/defaults';
import {Map} from "ol";

/**
 * OpenLayers map renderer that manages OpenLayers maps
 * Provides complete isolation between the host app and the rendering engine
 * User modules are handled by the toOlMap() function
 */
export class OpenLayersMapRenderer implements MapRenderer {
    public olMap?: Map; // Made public for backward compatibility
    private gsMap: GsMap;
    private container?: HTMLElement;
    private env?: any;
    private onDirtyCallback?: () => void;
    private isDestroyed: boolean = false;

    constructor(gsMap: GsMap, env?: any) {
        this.gsMap = gsMap;
        this.env = env;
    }

    async render(container: HTMLElement): Promise<void> {
        this.container = container;

        try {
            // Convert GsMap to OpenLayers map
            this.olMap = await toOlMap(this.gsMap, {
                interactions: defaultInteractions({keyboard: false}),
                controls: defaultControls({zoom: false, attribution: false})
            }, this.env);

            // Bind styles to layers
            this.olMap.getLayers().getArray().forEach((olLayer) => {
                stylesLoader.bindToLayer(olLayer);
            });

            // Set target
            this.olMap.setTarget(container);
            
            this.olMap.once('rendercomplete', () => {
                this.setupEventListeners();
            });

        } catch (error) {
            console.error('Failed to render map:', error);
            throw error;
        }
    }

    async syncModels(): Promise<void> {
        if (!this.olMap) {
            throw new Error('Map not initialized');
        }

        // TODO: Implement incremental updates
        // For now, we'll recreate the map
        await this.render(this.container!);
    }

    getGsMap(): GsMap {
        if (!this.olMap || !this.gsMap) {
            throw new Error('Map not initialized');
        }

        // Convert OpenLayers map back to GsMap
        const updatedGsMap = JSON.parse(JSON.stringify(this.gsMap));
        olMapToGsMap(updatedGsMap, this.olMap);

        return updatedGsMap;
    }

    getView(): any {
        if (!this.olMap) {
            throw new Error('Map not initialized');
        }
        return this.olMap.getView();
    }

    getLayers(): any[] {
        if (!this.olMap) {
            return [];
        }
        return this.olMap.getLayers().getArray();
    }

    getViewExtent(): number[] {
        if (!this.olMap) {
            throw new Error("OpenLayers map not available for extent calculation");
        }

        const view = this.olMap.getView();
        const extent = view.calculateExtent();
        return extent;
    }

    setOnDirty(callback: () => void): void {
        this.onDirtyCallback = callback;
    }

    public triggerDirty(): void {
        if (this.isDestroyed || !this.onDirtyCallback) return;
        this.onDirtyCallback();
    }
    
    private setupEventListeners(): void {
        if (!this.olMap) return;
        
        this.olMap.getView().on('change:center', () => this.triggerDirty());
        this.olMap.getView().on('change:resolution', () => this.triggerDirty());
        this.olMap.getView().on('change:rotation', () => this.triggerDirty());
        
        this.olMap.getLayers().on('add', () => this.triggerDirty());
        this.olMap.getLayers().on('remove', () => this.triggerDirty());
        
        this.olMap.getLayers().getArray().forEach(layer => {
            layer.on('change:visible', () => this.triggerDirty());
            layer.on('change:opacity', () => this.triggerDirty());
            layer.on('change:zIndex', () => this.triggerDirty());
        });
        
        this.olMap.getControls().on('add', () => this.triggerDirty());
        this.olMap.getControls().on('remove', () => this.triggerDirty());
        
        this.olMap.getOverlays().on('add', () => this.triggerDirty());
        this.olMap.getOverlays().on('remove', () => this.triggerDirty());
    }
    
    destroy(): void {
        this.isDestroyed = true;
        this.olMap?.dispose();
        this.olMap = undefined;
        this.container = undefined;
    }

}

/**
 * OpenLayers-specific map operations implementation that works with the domain model
 * This bridges the gap between command intents and the GsMap domain model
 */
export class OpenLayersMapOperations implements MapOperations {
    constructor(
        private renderer: OpenLayersMapRenderer
    ) {
    }

    async setZoom(zoom: number): Promise<void> {
        const gsMap = this.renderer.getGsMap();
        gsMap.view.zoom = zoom;
        await this.renderer.syncModels();
    }

    async setCenter(center: [number, number]): Promise<void> {
        const gsMap = this.renderer.getGsMap();
        gsMap.view.center = center;
        await this.renderer.syncModels();
    }

    async getViewExtent(): Promise<number[]> {
        if (!this.renderer.olMap) {
            throw new Error("OpenLayers map not available for extent calculation");
        }

        // Use the renderer's getViewExtent method
        return this.renderer.getViewExtent();
    }

    async switchColorMode(mode?: 'dark' | 'light'): Promise<void> {
        if (!this.renderer.olMap) {
            throw new Error("OpenLayers map not available for color mode switching");
        }

        const olMap = this.renderer.olMap;
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
        const gsMap = this.renderer.getGsMap();

        if (isBasemap) {
            // For basemap layers, insert at the beginning (index 0)
            gsMap.layers.unshift(layer);
        } else {
            // For regular layers, add at the end
            gsMap.layers.push(layer);
        }

        await this.renderer.syncModels();
    }

    async deleteLayer(index: number): Promise<void> {
        const gsMap = this.renderer.getGsMap();
        if (index >= 0 && index < gsMap.layers.length) {
            gsMap.layers.splice(index, 1);
            await this.renderer.syncModels();
            this.renderer.triggerDirty();
        }
    }

    async setLayerVisible(index: number, visible: boolean): Promise<void> {
        const gsMap = this.renderer.getGsMap();
        if (index >= 0 && index < gsMap.layers.length) {
            gsMap.layers[index].visible = visible;
            await this.renderer.syncModels();
            this.renderer.triggerDirty();
        }
    }

    async applyStyles(layerIdentifier: string | number, stylesPath: string): Promise<void> {
        const gsMap = this.renderer.getGsMap();

        let targetLayer: any = undefined;

        // Find layer by index or name
        if (typeof layerIdentifier === "number" || (typeof layerIdentifier === "string" && layerIdentifier.trim().match(/\d+/))) {
            const index = parseInt(layerIdentifier.toString()) - 1; // Convert to 0-based index
            if (index >= 0 && index < gsMap.layers.length) {
                targetLayer = gsMap.layers[index];
            }
        } else {
            const layerName = layerIdentifier.toString().trim().toLowerCase();
            targetLayer = gsMap.layers.find(layer => layer.name === layerName);
        }

        if (!targetLayer) {
            throw new Error(`Layer not found: ${layerIdentifier}`);
        }

        // Apply styles to the layer
        targetLayer.stylesPath = stylesPath;

        await this.renderer.syncModels();
    }

    async addMarker(marker: any, layerName?: string): Promise<void> {
        const gsMap = this.renderer.getGsMap();

        // Use provided layer name or default to 'geocoded-markers'
        const targetLayerName = layerName || 'geocoded-markers';

        // Find or create the markers layer
        let markersLayer = gsMap.layers.find(layer => layer.name === targetLayerName);
        if (!markersLayer) {
            markersLayer = {
                name: targetLayerName,
                type: 'vector' as any, // Will be converted to proper type by renderer
                source: {
                    type: 'features' as any, // Will be converted to proper type by renderer
                    features: []
                },
                visible: true
            };
            gsMap.layers.push(markersLayer);
        }

        // Add the marker to the layer's features
        if (markersLayer.source && (markersLayer.source as any).features) {
            (markersLayer.source as any).features.push(marker);
        }

        await this.renderer.syncModels();
    }

    async addControl(control: any): Promise<void> {
        const gsMap = this.renderer.getGsMap();
        gsMap.controls.push(control);
        await this.renderer.syncModels();
    }

    async addControlFromModule(src: string): Promise<void> {
        if (!this.renderer.olMap) {
            throw new Error("OpenLayers map not available for control creation");
        }

        // Create control from module source
        // This is a simplified version - the actual implementation would need
        // to import the module and create the OpenLayers control
        const control = {
            src: src,
            type: 'module'
        };

        // Add to domain model
        const gsMap = this.renderer.getGsMap();
        gsMap.controls.push(control);

        // Note: The actual OpenLayers control creation and module import
        // would need to be handled by the renderer or a specialized service
        // For now, we just update the domain model
        await this.renderer.syncModels();
    }

    async removeControl(index: number): Promise<void> {
        const gsMap = this.renderer.getGsMap();
        if (index >= 0 && index < gsMap.controls.length) {
            gsMap.controls.splice(index, 1);
            await this.renderer.syncModels();
            this.renderer.triggerDirty();
        }
    }

    async addOverlay(overlay: any): Promise<void> {
        const gsMap = this.renderer.getGsMap();
        gsMap.overlays.push(overlay);
        await this.renderer.syncModels();
    }

    async addOverlayFromModule(src: string, position?: string): Promise<void> {
        if (!this.renderer.olMap) {
            throw new Error("OpenLayers map not available for overlay creation");
        }

        // Create overlay from module source
        // This is a simplified version - the actual implementation would need
        // to import the module and create the OpenLayers overlay
        const overlay = {
            src: src,
            position: (position || "bottom-left") as any, // Will be converted to proper type by renderer
            type: 'module'
        };

        // Add to domain model
        const gsMap = this.renderer.getGsMap();
        gsMap.overlays.push(overlay);

        // Note: The actual OpenLayers overlay creation and module import
        // would need to be handled by the renderer or a specialized service
        // For now, we just update the domain model
        await this.renderer.syncModels();
    }

    async removeOverlay(index: number): Promise<void> {
        const gsMap = this.renderer.getGsMap();
        if (index >= 0 && index < gsMap.overlays.length) {
            gsMap.overlays.splice(index, 1);
            await this.renderer.syncModels();
            this.renderer.triggerDirty();
        }
    }
}
