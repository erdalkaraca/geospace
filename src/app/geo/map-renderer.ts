import {GsMap} from "../rt";

/**
 * Sync event types that describe what changed in the map
 */
export type MapSyncEvent = 
    | { type: 'viewChanged', view: { center: [number, number], zoom: number, rotation?: number } }
    | { type: 'featuresChanged', layerIndex: number, features: any[] }
    | { type: 'featureSelected', layerIndex: number, feature: any, metrics?: { length?: number, area?: number } }
    | { type: 'featureDeselected' };

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
    getViewExtent(): number[];
    getOperations(): MapOperations;
    setOnDirty(callback: () => void): void;
    triggerDirty(): void;
    setOnSync(callback: (event: MapSyncEvent) => void): void;
    triggerSync(event: MapSyncEvent): void;
    setOnClick?(callback: () => void): void;
    destroy(): void;
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
    deleteLayer(index: number): Promise<void>;
    renameLayer(index: number, newName: string): Promise<void>;
    moveLayer(fromIndex: number, toIndex: number): Promise<void>;
    setLayerVisible(index: number, visible: boolean): Promise<void>;
    applyStyles(layerIdentifier: string | number, stylesPath: string): Promise<void>;
    
    // Marker operations
    addMarker(marker: any, layerName?: string): Promise<void>;
    
    // Control operations
    addControlFromModule(src: string): Promise<void>;
    removeControl(index: number): Promise<void>;
    
    // Overlay operations
    addOverlayFromModule(src: string, position?: string): Promise<void>;
    removeOverlay(index: number): Promise<void>;
    
    // Drawing operations (UI-only, no domain model changes until features are added)
    enableDrawing(geometryType: 'Point' | 'LineString' | 'Polygon', layerIndex: number): Promise<void>;
    disableDrawing(): Promise<void>;
    
    // Feature selection and deletion
    enableFeatureSelection(layerIndex: number): Promise<void>;
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