import {
    MapOperations,
    MapRenderer,
    findLayerByUuid,
    findLayerIndexByUuid,
    findControlIndexByUuid,
    findOverlayIndexByUuid,
    GsMap
} from "@kispace-io/gs-lib";

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

    async deleteLayer(uuid: string): Promise<void> {
        const index = findLayerIndexByUuid(this.gsMap, uuid);
        if (index >= 0) {
            this.gsMap.layers.splice(index, 1);
            this.triggerDirty();
        }
    }

    async renameLayer(uuid: string, newName: string): Promise<void> {
        const layer = findLayerByUuid(this.gsMap, uuid);
        if (layer) {
            layer.name = newName;
            this.triggerDirty();
        }
    }

    async moveLayer(uuid: string, targetUuid?: string): Promise<void> {
        const fromIndex = findLayerIndexByUuid(this.gsMap, uuid);
        if (fromIndex < 0) return;

        let toIndex: number;
        if (targetUuid) {
            toIndex = findLayerIndexByUuid(this.gsMap, targetUuid);
            if (toIndex < 0 || fromIndex === toIndex) return;
        } else {
            toIndex = fromIndex > 0 ? fromIndex - 1 : fromIndex + 1;
        }

        if (toIndex >= 0 && toIndex < this.gsMap.layers.length && fromIndex !== toIndex) {
            const [layer] = this.gsMap.layers.splice(fromIndex, 1);
            this.gsMap.layers.splice(toIndex, 0, layer);
            this.triggerDirty();
        }
    }

    async setLayerVisible(uuid: string, visible: boolean): Promise<void> {
        const layer = findLayerByUuid(this.gsMap, uuid);
        if (layer) {
            layer.visible = visible;
            this.triggerDirty();
        }
    }

    async addControlFromModule(src: string): Promise<void> {
        this.gsMap.controls.push({ src, type: 'module' } as any);
        this.triggerDirty();
        await this.renderer.modelToUI();
    }

    async removeControl(uuid: string): Promise<void> {
        const index = findControlIndexByUuid(this.gsMap, uuid);
        if (index >= 0) {
            this.gsMap.controls.splice(index, 1);
            this.triggerDirty();
            await this.renderer.modelToUI();
        }
    }

    async addOverlayFromModule(src: string, position?: string): Promise<void> {
        this.gsMap.overlays.push({ src, position: position || 'bottom-left', type: 'module' } as any);
        this.triggerDirty();
        await this.renderer.modelToUI();
    }

    async removeOverlay(uuid: string): Promise<void> {
        const index = findOverlayIndexByUuid(this.gsMap, uuid);
        if (index >= 0) {
            this.gsMap.overlays.splice(index, 1);
            this.triggerDirty();
            await this.renderer.modelToUI();
        }
    }

    async enableDrawing(_geometryType: 'Point' | 'LineString' | 'Polygon', _layerUuid: string): Promise<void> {}

    async disableDrawing(): Promise<void> {}

    async enableFeatureSelection(): Promise<void> {}

    async disableSelection(): Promise<void> {}

    async deleteSelectedFeatures(): Promise<void> {
        this.triggerDirty();
    }
}
