import { MapOperations } from "@kispace-io/gs-lib";
import { mapChangedSignal, MapEvents } from "./gs-signals";

/**
 * MapOperations implementation that automatically triggers mapChangedSignal
 * for operations that modify the map state.
 * 
 * This should be added to the createProxy chain to automatically signal
 * when map-changing operations occur.
 */
export class SignalingMapOperations implements MapOperations {
    constructor(private source: any) {}

    async setZoom(_zoom: number): Promise<void> {
        // No-op - view changes don't need signaling
    }

    async setCenter(_center: [number, number]): Promise<void> {
        // No-op - view changes don't need signaling
    }

    async switchColorMode(_mode?: 'dark' | 'light'): Promise<void> {
        // No-op - UI preference change doesn't need signaling
    }

    async addLayer(_layer: any, _isBasemap?: boolean): Promise<void> {
        // Trigger signal after layer is added by other operations
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_ADDED });
    }

    async deleteLayer(_uuid: string): Promise<void> {
        // Trigger signal after layer is deleted by other operations
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_DELETED });
    }

    async renameLayer(_uuid: string, _newName: string): Promise<void> {
        // Trigger signal after layer is renamed by other operations
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_UPDATED });
    }

    async moveLayer(_uuid: string, _targetUuid?: string): Promise<void> {
        // Trigger signal after layer is moved by other operations
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_UPDATED });
    }

    async setLayerVisible(_uuid: string, _visible: boolean): Promise<void> {
        // No-op - visibility changes don't need signaling
    }

    async addControlFromModule(_src: string): Promise<void> {
        // No-op - controls don't need signaling
    }

    async removeControl(_uuid: string): Promise<void> {
        // No-op - controls don't need signaling
    }

    async addOverlayFromModule(_src: string, _position?: string): Promise<void> {
        // No-op - overlays don't need signaling
    }

    async removeOverlay(_uuid: string): Promise<void> {
        // No-op - overlays don't need signaling
    }

    async enableDrawing(_geometryType: 'Point' | 'LineString' | 'Polygon', _layerUuid: string): Promise<void> {
        // No-op - drawing is a UI interaction, doesn't need signaling
    }

    async disableDrawing(): Promise<void> {
        // No-op - drawing is a UI interaction, doesn't need signaling
    }

    async enableFeatureSelection(): Promise<void> {
        // No-op - selection is a UI interaction, doesn't need signaling
    }

    async disableSelection(): Promise<void> {
        // No-op - selection is a UI interaction, doesn't need signaling
    }

    async deleteSelectedFeatures(): Promise<void> {
        // Trigger signal after features are deleted
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_UPDATED });
    }
}

