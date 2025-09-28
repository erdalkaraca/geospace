import {GsLayer, GsMap} from "../rt/gs-model.ts";

/**
 * Abstract interface for map rendering
 * The host app only knows about this interface and the GsMap domain model
 * 
 * This interface is focused purely on rendering and map state management.
 * For operations, use MapOperations interface instead.
 */
export interface MapRenderer {
    render(container: HTMLElement): Promise<void>;
    modelToUI(): Promise<void>;
    getGsMap(): GsMap;
    getView(): any;
    getLayers(): any[];
    getViewExtent(): number[];
    setOnDirty(callback: () => void): void;
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
    getViewExtent(): Promise<number[]>;
    
    // Display operations
    switchColorMode(mode?: 'dark' | 'light'): Promise<void>;
    
    // Layer operations
    addLayer(layer: any, isBasemap?: boolean): Promise<void>;
    deleteLayer(index: number): Promise<void>;
    setLayerVisible(index: number | GsLayer, visible: boolean): Promise<void>;
    applyStyles(layerIdentifier: string | number, stylesPath: string): Promise<void>;
    
    // Marker operations
    addMarker(marker: any, layerName?: string): Promise<void>;
    
    // Control operations
    addControl(control: any): Promise<void>;
    addControlFromModule(src: string): Promise<void>;
    removeControl(index: number): Promise<void>;
    
    // Overlay operations
    addOverlay(overlay: any): Promise<void>;
    addOverlayFromModule(src: string, position?: string): Promise<void>;
    removeOverlay(index: number): Promise<void>;
}

