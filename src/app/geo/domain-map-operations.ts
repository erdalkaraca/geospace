import { MapOperations, MapRenderer } from "./map-renderer.ts";
import { GsMap } from "../rt/gs-model.ts";

/**
 * Domain model operations that only update the GsMap domain model
 * This is used by the client side (host app) for iframe communication
 */
export class DomainMapOperations implements MapOperations {
    constructor(
        private gsMap: GsMap,
        private renderer: MapRenderer
    ) {}

    private triggerDirty(): void {
        this.renderer.triggerDirty()
    }

    async setZoom(zoom: number): Promise<void> {
        this.gsMap.view.zoom = zoom;
        this.triggerDirty();
    }

    async setCenter(center: [number, number]): Promise<void> {
        this.gsMap.view.center = center;
        this.triggerDirty();
    }


    async switchColorMode(mode?: 'dark' | 'light'): Promise<void> {
        // Store color mode preference in domain model
        (this.gsMap.view as any).colorMode = mode;
        this.triggerDirty();
    }

    async addLayer(layer: any, isBasemap?: boolean): Promise<void> {
        if (isBasemap) {
            this.gsMap.layers.unshift(layer);
        } else {
            this.gsMap.layers.push(layer);
        }
        this.triggerDirty();
    }

    async deleteLayer(index: number): Promise<void> {
        if (index >= 0 && index < this.gsMap.layers.length) {
            this.gsMap.layers.splice(index, 1);
        }
        this.triggerDirty();
    }

    async setLayerVisible(index: number, visible: boolean): Promise<void> {
        if (index >= 0 && index < this.gsMap.layers.length) {
            this.gsMap.layers[index].visible = visible;
        }
        this.triggerDirty();
    }

    async applyStyles(layerIdentifier: string | number, stylesPath: string): Promise<void> {
        // Store style information in domain model
        const layer = typeof layerIdentifier === 'number' 
            ? this.gsMap.layers[layerIdentifier]
            : this.gsMap.layers.find(l => l.name === layerIdentifier);
        
        if (layer) {
            layer.stylesPath = stylesPath;
        }
        this.triggerDirty();
    }

    async addMarker(marker: any, layerName?: string): Promise<void> {
        // Find or create markers layer
        let markersLayer = this.gsMap.layers.find(layer => layer.name === (layerName || 'Markers'));
        if (!markersLayer) {
            markersLayer = {
                name: layerName || 'Markers',
                type: 'vector' as any,
                source: { type: 'features' as any, features: [] },
                visible: true
            };
            this.gsMap.layers.push(markersLayer);
        }
        if (markersLayer.source && (markersLayer.source as any).features) {
            (markersLayer.source as any).features.push(marker);
        }
        this.triggerDirty();
    }

    async addControlFromModule(src: string): Promise<void> {
        this.gsMap.controls.push({ src, type: 'module' } as any);
        this.triggerDirty();
        await this.renderer.modelToUI();
    }

    async removeControl(index: number): Promise<void> {
        if (index >= 0 && index < this.gsMap.controls.length) {
            this.gsMap.controls.splice(index, 1);
        }
        this.triggerDirty();
        await this.renderer.modelToUI();
    }

    async addOverlayFromModule(src: string, position?: string): Promise<void> {
        this.gsMap.overlays.push({ src, position: position || 'bottom-left', type: 'module' } as any);
        this.triggerDirty();
        await this.renderer.modelToUI();
    }

    async removeOverlay(index: number): Promise<void> {
        if (index >= 0 && index < this.gsMap.overlays.length) {
            this.gsMap.overlays.splice(index, 1);
        }
        this.triggerDirty();
        await this.renderer.modelToUI();
    }
}
