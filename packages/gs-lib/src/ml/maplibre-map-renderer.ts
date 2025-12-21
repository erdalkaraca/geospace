/**
 * MapLibre GL map renderer implementation
 */

import { MapOperations, MapRenderer, MapSyncEvent, ScreenshotResult } from '../map-renderer';
import {
    GsMap,
    GsSourceType,
    GsLayerType,
    GsFeature,
    GsGeometry,
    KEY_UUID,
    ensureUuid
} from '../gs-model';
import { mlLib } from './gs-ml-lib';
import {
    toGeoJsonFeatureCollection,
    toMlFillPaint,
    toMlLinePaint,
    toMlCirclePaint,
    toWgs84,
    toWebMercator,
    ML_KEY_GS_LAYER_UUID
} from './gs-gs2ml';
import { toGsFeature } from './gs-ml2gs';
import { v4 as uuidv4 } from 'uuid';
import { Map, MapMouseEvent, GeoJSONSource, LngLatLike } from 'maplibre-gl';

/**
 * MapLibre map renderer that implements the MapRenderer interface
 */
export class MapLibreMapRenderer implements MapRenderer {
    private map?: Map;
    private gsMap: GsMap;
    private env?: any;
    private onDirtyCallback?: () => void;
    private onSyncCallback?: (event: MapSyncEvent) => void;
    private isDestroyed: boolean = false;
    private operations?: MapLibreMapOperations;

    constructor(gsMap: GsMap, env?: any) {
        this.gsMap = gsMap;
        this.env = env;
    }

    async reattached(): Promise<void> {}

    async render(container: string | HTMLElement): Promise<void> {
        try {
            this.map = await mlLib({
                containerSelector: container,
                gsMap: this.gsMap,
                env: this.env
            });

            this.operations = new MapLibreMapOperations(this.map, this);
            this.setupEventListeners();

        } catch (error) {
            console.error('Failed to render map:', error);
            throw error;
        }
    }

    async modelToUI(updatedGsMap?: GsMap): Promise<void> {
        if (!this.map) throw new Error('Map not initialized');
        if (updatedGsMap) this.gsMap = updatedGsMap;

        const container = this.map.getContainer();
        if (!container) throw new Error('Map container not found');

        this.destroy();
        container.innerHTML = '';
        this.isDestroyed = false;
        await this.render(container);
    }

    getOperations(): MapOperations {
        if (!this.operations) throw new Error('Operations not available - map not rendered yet');
        return this.operations;
    }

    async getViewExtent(): Promise<number[]> {
        if (!this.map) throw new Error('Map not available for extent calculation');
        const bounds = this.map.getBounds();
        return [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()];
    }

    async captureScreenshot(): Promise<ScreenshotResult> {
        if (!this.map) return { success: false, error: 'Map not available' };

        try {
            this.map.triggerRepaint();
            await new Promise(resolve => requestAnimationFrame(resolve));

            const canvas = this.map.getCanvas();
            if (!canvas) return { success: false, error: 'Map canvas not found' };

            const dataUrl = canvas.toDataURL('image/png');
            return { success: true, dataUrl, width: canvas.width, height: canvas.height };
        } catch (error: any) {
            return { success: false, error: `Failed to capture canvas: ${error.message}` };
        }
    }

    setOnDirty(callback: () => void): void { this.onDirtyCallback = callback; }
    setOnSync(callback: (event: MapSyncEvent) => void): void { this.onSyncCallback = callback; }

    triggerDirty(): void {
        if (this.isDestroyed || !this.onDirtyCallback) return;
        this.onDirtyCallback();
    }

    triggerSync(event: MapSyncEvent): void {
        if (this.isDestroyed || !this.onSyncCallback) return;
        this.onSyncCallback(event);
    }

    private syncViewToModel(): void {
        if (!this.map) return;
        const center = this.map.getCenter();
        const zoom = this.map.getZoom();
        const pitch = this.map.getPitch();
        const bearing = this.map.getBearing();
        const centerMercator = toWebMercator([center.lng, center.lat]);

        this.triggerSync({
            type: 'viewChanged',
            view: { center: centerMercator, zoom, pitch, bearing }
        });
    }

    syncLayerFeaturesToModel(layerUuid: string): void {
        if (!this.map) return;

        const source = this.map.getSource(layerUuid) as GeoJSONSource;
        if (!source) return;

        const features = this.map.querySourceFeatures(layerUuid);
        const gsFeatures = features.map(f => toGsFeature(f as unknown as GeoJSON.Feature));

        this.triggerSync({ type: 'featuresChanged', layerUuid, features: gsFeatures });
    }

    private setupEventListeners(): void {
        if (!this.map) return;

        this.map.on('moveend', () => {
            this.syncViewToModel();
            this.triggerDirty();
        });

        this.map.on('zoomend', () => {
            this.syncViewToModel();
            this.triggerDirty();
        });

        this.map.on('pitchend', () => {
            this.syncViewToModel();
            this.triggerDirty();
        });

        this.map.on('rotateend', () => {
            this.syncViewToModel();
            this.triggerDirty();
        });
    }

    getMap(): Map | undefined { return this.map; }
    getGsMap(): GsMap { return this.gsMap; }

    destroy(): void {
        this.isDestroyed = true;
        if (this.operations) this.operations.cleanup();
        this.map?.remove();
        this.map = undefined;
    }
}

/**
 * MapLibre-specific map operations implementation
 */
export class MapLibreMapOperations implements MapOperations {
    private selectedFeatureId?: string | number;
    private selectedLayerId?: string;
    private drawMode?: 'Point' | 'LineString' | 'Polygon';
    private clickHandler?: (e: MapMouseEvent) => void;
    private keyHandler?: (e: KeyboardEvent) => void;

    constructor(private map: Map, private renderer: MapLibreMapRenderer) {
        this.keyHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (this.drawMode) {
                    this.disableDrawing();
                    this.renderer.triggerSync({ type: 'drawingDisabled' } as any);
                }
                if (this.selectedFeatureId !== undefined) {
                    this.disableSelection();
                }
            }
        };
        document.addEventListener('keydown', this.keyHandler);
    }

    async setZoom(zoom: number): Promise<void> { this.map.setZoom(zoom); }

    async setCenter(center: [number, number]): Promise<void> {
        const centerWgs84 = toWgs84(center);
        this.map.setCenter(centerWgs84 as LngLatLike);
    }

    async switchColorMode(mode?: 'dark' | 'light'): Promise<void> {
        let darkMode: boolean = (this.map as any)._darkMode ?? false;

        if (mode === 'dark') darkMode = true;
        else if (mode === 'light') darkMode = false;
        else darkMode = !darkMode;

        (this.map as any)._darkMode = darkMode;
        const canvas = this.map.getCanvas();
        if (canvas) canvas.style.filter = darkMode ? 'invert(100%)' : '';
    }

    async addLayer(layer: any, isBasemap?: boolean): Promise<void> {
        const sourceId = layer.uuid;

        let sourceSpec: any;
        if (layer.source.type === GsSourceType.Features) {
            sourceSpec = { type: 'geojson', data: toGeoJsonFeatureCollection(layer.source.features || []) };
        } else if (layer.source.type === GsSourceType.GeoJSON) {
            sourceSpec = { type: 'geojson', data: layer.source.url };
        } else if (layer.source.type === GsSourceType.OSM) {
            sourceSpec = { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256 };
        } else if (layer.source.type === GsSourceType.XYZ) {
            sourceSpec = { type: 'raster', tiles: [layer.source.url], tileSize: 256 };
        }

        if (sourceSpec) {
            this.map.addSource(sourceId, sourceSpec);

            if (layer.type === GsLayerType.TILE) {
                this.map.addLayer({
                    id: sourceId,
                    type: 'raster',
                    source: sourceId
                }, isBasemap ? this.getFirstLayerId() : undefined);
            } else if (layer.type === GsLayerType.VECTOR) {
                this.map.addLayer({ id: `${sourceId}-fill`, type: 'fill', source: sourceId,
                    filter: ['any', ['==', ['geometry-type'], 'Polygon'], ['==', ['geometry-type'], 'MultiPolygon']],
                    paint: toMlFillPaint() });
                this.map.addLayer({ id: `${sourceId}-line`, type: 'line', source: sourceId,
                    filter: ['any', ['==', ['geometry-type'], 'LineString'], ['==', ['geometry-type'], 'MultiLineString']],
                    paint: toMlLinePaint() });
                this.map.addLayer({ id: `${sourceId}-circle`, type: 'circle', source: sourceId,
                    filter: ['any', ['==', ['geometry-type'], 'Point'], ['==', ['geometry-type'], 'MultiPoint']],
                    paint: toMlCirclePaint() });
            }
        }
    }

    private getFirstLayerId(): string | undefined {
        return this.map.getStyle()?.layers?.[0]?.id;
    }

    async deleteLayer(uuid: string): Promise<void> {
        const suffixes = ['', '-fill', '-line', '-circle', '-extrusion'];
        for (const suffix of suffixes) {
            const layerId = `${uuid}${suffix}`;
            if (this.map.getLayer(layerId)) this.map.removeLayer(layerId);
        }
        if (this.map.getSource(uuid)) this.map.removeSource(uuid);
    }

    async renameLayer(_uuid: string, _newName: string): Promise<void> {}

    async moveLayer(uuid: string, targetUuid?: string): Promise<void> {
        const suffixes = ['', '-fill', '-line', '-circle', '-extrusion'];
        for (const suffix of suffixes) {
            const layerId = `${uuid}${suffix}`;
            const beforeId = targetUuid ? `${targetUuid}${suffix}` : undefined;
            if (this.map.getLayer(layerId)) this.map.moveLayer(layerId, beforeId);
        }
    }

    async setLayerVisible(uuid: string, visible: boolean): Promise<void> {
        const visibility = visible ? 'visible' : 'none';
        const suffixes = ['', '-fill', '-line', '-circle', '-extrusion'];
        for (const suffix of suffixes) {
            const layerId = `${uuid}${suffix}`;
            if (this.map.getLayer(layerId)) this.map.setLayoutProperty(layerId, 'visibility', visibility);
        }
    }

    async addControlFromModule(_src: string): Promise<void> { console.warn('Dynamic control adding not yet implemented for MapLibre'); }
    async removeControl(_uuid: string): Promise<void> { console.warn('Control removal not yet implemented for MapLibre'); }
    async addOverlayFromModule(_src: string, _position?: string): Promise<void> { console.warn('Dynamic overlay adding not yet implemented for MapLibre'); }
    async removeOverlay(_uuid: string): Promise<void> { console.warn('Overlay removal not yet implemented for MapLibre'); }

    async enableDrawing(geometryType: 'Point' | 'LineString' | 'Polygon', layerUuid: string): Promise<void> {
        this.disableSelection();
        this.disableDrawing();

        this.drawMode = geometryType;
        this.map.getCanvas().style.cursor = 'crosshair';

        if (geometryType === 'Point') {
            this.clickHandler = (e: MapMouseEvent) => {
                const coords = [e.lngLat.lng, e.lngLat.lat];
                this.addFeatureToLayer(layerUuid, { type: 'Point', coordinates: coords });
            };
            this.map.on('click', this.clickHandler);
        } else {
            console.warn(`${geometryType} drawing requires maplibre-gl-draw or custom implementation`);
        }
    }

    private addFeatureToLayer(layerUuid: string, geometry: any): void {
        const source = this.map.getSource(layerUuid) as GeoJSONSource;
        if (!source) return;

        const uuid = uuidv4();
        const gsMap = this.renderer.getGsMap();
        const layer = gsMap.layers.find(l => l.uuid === layerUuid);
        if (layer?.source?.type === GsSourceType.Features) {
            const features = layer.source.features || [];
            const coordsMercator = toWebMercator(geometry.coordinates as [number, number]);
            
            const gsFeature = ensureUuid({
                geometry: ensureUuid({ type: geometry.type, coordinates: coordsMercator } as GsGeometry),
                uuid
            } as GsFeature);

            features.push(gsFeature);
            source.setData(toGeoJsonFeatureCollection(features));

            this.renderer.syncLayerFeaturesToModel(layerUuid);
            this.renderer.triggerDirty();
        }
    }

    async disableDrawing(): Promise<void> {
        if (this.clickHandler) {
            this.map.off('click', this.clickHandler);
            this.clickHandler = undefined;
        }
        this.drawMode = undefined;
        this.map.getCanvas().style.cursor = '';
    }

    async enableFeatureSelection(): Promise<void> {
        this.disableDrawing();
        this.disableSelection();

        this.map.getCanvas().style.cursor = 'pointer';

        this.clickHandler = (e: MapMouseEvent) => {
            const features = this.map.queryRenderedFeatures(e.point);

            if (features.length > 0) {
                const feature = features[0];
                this.selectedFeatureId = feature.id;
                this.selectedLayerId = feature.layer.id;

                const gsFeature = toGsFeature(feature as unknown as GeoJSON.Feature);
                const layerUuid = (feature.layer as any).metadata?.[ML_KEY_GS_LAYER_UUID] ||
                    feature.layer.id.replace(/-(?:fill|line|circle|extrusion)$/, '');

                this.renderer.triggerSync({ type: 'featureSelected', layerUuid, feature: gsFeature });
            }
        };

        this.map.on('click', this.clickHandler);
    }

    async disableSelection(): Promise<void> {
        if (this.clickHandler) {
            this.map.off('click', this.clickHandler);
            this.clickHandler = undefined;
        }

        if (this.selectedFeatureId !== undefined) {
            this.renderer.triggerSync({ type: 'featureDeselected' });
        }

        this.selectedFeatureId = undefined;
        this.selectedLayerId = undefined;
        this.map.getCanvas().style.cursor = '';
    }

    async deleteSelectedFeatures(): Promise<void> {
        if (this.selectedFeatureId === undefined || !this.selectedLayerId) {
            throw new Error('No features selected');
        }

        const layerUuid = this.selectedLayerId.replace(/-(?:fill|line|circle|extrusion)$/, '');
        const source = this.map.getSource(layerUuid) as GeoJSONSource;

        if (!source) throw new Error('Source not found');

        const gsMap = this.renderer.getGsMap();
        const layer = gsMap.layers.find(l => l.uuid === layerUuid);

        if (layer?.source?.type === GsSourceType.Features && layer.source.features) {
            const featureId = this.selectedFeatureId.toString();
            layer.source.features = layer.source.features.filter(f => f.uuid !== featureId);

            source.setData(toGeoJsonFeatureCollection(layer.source.features));

            this.renderer.syncLayerFeaturesToModel(layerUuid);
            this.renderer.triggerDirty();
        }

        this.selectedFeatureId = undefined;
        this.selectedLayerId = undefined;
    }

    cleanup(): void {
        if (this.keyHandler) {
            document.removeEventListener('keydown', this.keyHandler);
            this.keyHandler = undefined;
        }
        if (this.clickHandler) {
            this.map.off('click', this.clickHandler);
            this.clickHandler = undefined;
        }
    }
}

