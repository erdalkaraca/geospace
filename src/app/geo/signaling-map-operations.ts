import { MapOperations } from "./map-renderer.ts";
import { mapChangedSignal, MapEvents } from "./gs-signals.ts";

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

    async deleteLayer(_index: number): Promise<void> {
        // Trigger signal after layer is deleted by other operations
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_DELETED });
    }

    async renameLayer(_index: number, _newName: string): Promise<void> {
        // Trigger signal after layer is renamed by other operations
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_UPDATED });
    }

    async moveLayer(_fromIndex: number, _toIndex: number): Promise<void> {
        // Trigger signal after layer is moved by other operations
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_UPDATED });
    }

    async setLayerVisible(_index: number, _visible: boolean): Promise<void> {
        // No-op - visibility changes don't need signaling
    }

    async applyStyles(_layerIdentifier: string | number, _stylesPath: string): Promise<void> {
        // No-op - style changes don't need signaling
    }

    async addMarker(_marker: any, _layerName?: string): Promise<void> {
        // Trigger signal after marker is added by other operations
        mapChangedSignal.set({ part: this.source, event: MapEvents.LAYER_ADDED });
    }

    async addControlFromModule(_src: string): Promise<void> {
        // No-op - controls don't need signaling
    }

    async removeControl(_index: number): Promise<void> {
        // No-op - controls don't need signaling
    }

    async addOverlayFromModule(_src: string, _position?: string): Promise<void> {
        // No-op - overlays don't need signaling
    }

    async removeOverlay(_index: number): Promise<void> {
        // No-op - overlays don't need signaling
    }
}

