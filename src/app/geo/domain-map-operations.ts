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

    async renameLayer(index: number, newName: string): Promise<void> {
        if (index >= 0 && index < this.gsMap.layers.length) {
            this.gsMap.layers[index].name = newName;
        }
        this.triggerDirty();
    }

    async moveLayer(fromIndex: number, toIndex: number): Promise<void> {
        if (fromIndex >= 0 && fromIndex < this.gsMap.layers.length &&
            toIndex >= 0 && toIndex < this.gsMap.layers.length &&
            fromIndex !== toIndex) {
            const [layer] = this.gsMap.layers.splice(fromIndex, 1);
            this.gsMap.layers.splice(toIndex, 0, layer);
        }
        this.triggerDirty();
    }

    async setLayerVisible(index: number, visible: boolean): Promise<void> {
        if (index >= 0 && index < this.gsMap.layers.length) {
            this.gsMap.layers[index].visible = visible;
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

    async enableDrawing(_geometryType: 'Point' | 'LineString' | 'Polygon', _layerIndex: number): Promise<void> {
        // No domain model changes - this is UI-only
    }

    async disableDrawing(): Promise<void> {
        // No domain model changes - this is UI-only
    }

    async enableFeatureSelection(_layerIndex: number): Promise<void> {
        // No domain model changes - this is UI-only
    }

    async disableSelection(): Promise<void> {
        // No domain model changes - this is UI-only
    }

    async deleteSelectedFeatures(): Promise<void> {
        // Features are removed from OpenLayers source, changes will sync
        this.triggerDirty();
    }
}
