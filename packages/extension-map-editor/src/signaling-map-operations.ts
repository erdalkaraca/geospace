import { MapOperations } from "@kispace-io/gs-lib";
import { mapChangedSignal, MapEvents } from "./gs-signals";

export class SignalingMapOperations implements MapOperations {
    constructor(private source: any) {}

    async setZoom(_zoom: number): Promise<void> {}
    async setCenter(_center: [number, number]): Promise<void> {}
    async switchColorMode(_mode?: 'dark' | 'light'): Promise<void> {}

    async addLayer(_layer: any, _isBasemap?: boolean): Promise<void> {
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_ADDED });
    }

    async deleteLayer(_uuid: string): Promise<void> {
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_DELETED });
    }

    async renameLayer(_uuid: string, _newName: string): Promise<void> {
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_UPDATED });
    }

    async moveLayer(_uuid: string, _targetUuid?: string): Promise<void> {
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_UPDATED });
    }

    async setLayerVisible(_uuid: string, _visible: boolean): Promise<void> {}
    async addControlFromModule(_src: string): Promise<void> {}
    async removeControl(_uuid: string): Promise<void> {}
    async addOverlayFromModule(_src: string, _position?: string): Promise<void> {}
    async removeOverlay(_uuid: string): Promise<void> {}
    async enableDrawing(_geometryType: 'Point' | 'LineString' | 'Polygon', _layerUuid: string): Promise<void> {}
    async disableDrawing(): Promise<void> {}
    async enableFeatureSelection(): Promise<void> {}
    async disableSelection(): Promise<void> {}

    async deleteSelectedFeatures(): Promise<void> {
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_UPDATED });
    }
}
