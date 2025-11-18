import {GsMap, GsLayer, GsControl, GsOverlay} from "@kispace-io/gs-lib";

/**
 * Sync event types that describe what changed in the map
 */
export type MapSyncEvent = 
    | { type: 'viewChanged', view: { center: [number, number], zoom: number, rotation?: number } }
    | { type: 'featuresChanged', layerUuid: string, features: any[] }
    | { type: 'featureSelected', layerUuid: string, feature: any, metrics?: { length?: number, area?: number } }
    | { type: 'featureDeselected' }
    | { type: 'drawingDisabled' };

/**
 * Abstract interface for map rendering
 * The host app only knows about this interface and the GsMap domain model
 * 
 * This interface is focused purely on rendering and map state management.
 * For operations, use MapOperations interface instead.
 */
export interface MapRenderer {
    render(container: string | HTMLElement): Promise<void>;
    reattached?(): Promise<void>;
    modelToUI(updatedGsMap?: GsMap): Promise<void>;
    getViewExtent(): Promise<number[]>;
    getOperations(): MapOperations;
    setOnDirty(callback: () => void): void;
    triggerDirty(): void;
    setOnSync(callback: (event: MapSyncEvent) => void): void;
    triggerSync(event: MapSyncEvent): void;
    setOnClick?(callback: () => void): void;
    destroy(): void;
}

export function findLayerByUuid(gsMap: GsMap, uuid: string): GsLayer | undefined {
    return gsMap.layers.find(layer => layer.uuid === uuid);
}

export function findLayerIndexByUuid(gsMap: GsMap, uuid: string): number {
    return gsMap.layers.findIndex(layer => layer.uuid === uuid);
}

export function findControlByUuid(gsMap: GsMap, uuid: string): GsControl | undefined {
    return gsMap.controls.find(control => control.uuid === uuid);
}

export function findControlIndexByUuid(gsMap: GsMap, uuid: string): number {
    return gsMap.controls.findIndex(control => control.uuid === uuid);
}

export function findOverlayByUuid(gsMap: GsMap, uuid: string): GsOverlay | undefined {
    return gsMap.overlays.find(overlay => overlay.uuid === uuid);
}

export function findOverlayIndexByUuid(gsMap: GsMap, uuid: string): number {
    return gsMap.overlays.findIndex(overlay => overlay.uuid === uuid);
}

/**
 * Map operations interface for high-level map commands
 * These operations work with the domain model and are framework-agnostic
 */
export interface MapOperations {
    // View operations
    setZoom(zoom: number): Promise<void>;
    setCenter(center: [number, number]): Promise<void>;
    
    // Display operations
    switchColorMode(mode?: 'dark' | 'light'): Promise<void>;
    
    // Layer operations
    addLayer(layer: any, isBasemap?: boolean): Promise<void>;
    deleteLayer(uuid: string): Promise<void>;
    renameLayer(uuid: string, newName: string): Promise<void>;
    moveLayer(uuid: string, targetUuid?: string): Promise<void>;
    setLayerVisible(uuid: string, visible: boolean): Promise<void>;
    
    // Control operations
    addControlFromModule(src: string): Promise<void>;
    removeControl(uuid: string): Promise<void>;
    
    // Overlay operations
    addOverlayFromModule(src: string, position?: string): Promise<void>;
    removeOverlay(uuid: string): Promise<void>;
    
    // Drawing operations (UI-only, no domain model changes until features are added)
    enableDrawing(geometryType: 'Point' | 'LineString' | 'Polygon', layerUuid: string): Promise<void>;
    disableDrawing(): Promise<void>;
    
    // Feature selection and deletion
    enableFeatureSelection(): Promise<void>;
    disableSelection(): Promise<void>;
    deleteSelectedFeatures(): Promise<void>;
}

export const createProxy = (operations: MapOperations[]): MapOperations => {
    return new Proxy({}, {
        get: (_, prop: string) => {
            return async (...args: any[]) => {
                // Execute the operation on all registered operations
                for (const operation of operations) {
                    await (operation as any)[prop](...args);
                }
            };
        }
    }) as MapOperations;
}