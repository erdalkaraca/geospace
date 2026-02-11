/**
 * GsMap to MapLibre conversion utilities
 * Converts the geo!space domain model to MapLibre GL structures
 */

import {
    Map,
    LngLatLike,
    StyleSpecification,
    LayerSpecification,
    SourceSpecification
} from 'maplibre-gl';
import { v4 as uuidv4 } from '@kispace-io/core/externals/third-party';
import { subscribe, publish } from '@kispace-io/core/core/events';
import { GsMlControl, GsMlControlAdapter, GsMlOverlayAdapter } from './gs-ml-adapters';

import {
    GsMap,
    GsLayer,
    GsSource,
    GsSourceType,
    GsLayerType,
    GsFeature,
    GsStyle,
    KEY_UUID
} from '../gs-model';
import { lit } from '../gs-litns';
import { rtUtils } from '../index';
import proj4 from 'proj4';

// Key constants for MapLibre
export const ML_KEY_GS_LAYER_UUID = 'gs-layer-uuid';
export const ML_KEY_GS_SOURCE_UUID = 'gs-source-uuid';

// Standard projection identifiers
export const EPSG_3857 = 'EPSG:3857';  // Web Mercator (meters)
export const EPSG_4326 = 'EPSG:4326';  // WGS84 (lon/lat degrees)

/**
 * Convert coordinates to EPSG:4326 (WGS84)
 * MapLibre uses WGS84 (lon/lat in degrees)
 * Uses proj4js for accurate coordinate transformation
 * 
 * @param coords - Source coordinates
 * @param sourceProjection - Source projection (default: EPSG:3857)
 */
export function toWgs84(coords: [number, number], sourceProjection: string = EPSG_3857): [number, number] {
    if (sourceProjection === EPSG_4326) {
        return coords; // Already in WGS84
    }
    return proj4(sourceProjection, EPSG_4326, coords) as [number, number];
}

/**
 * Convert coordinates to EPSG:3857 (Web Mercator)
 * GsMap stores coordinates in Web Mercator (meters)
 * Uses proj4js for accurate coordinate transformation
 * 
 * @param coords - Source coordinates
 * @param sourceProjection - Source projection (default: EPSG:4326)
 */
export function toWebMercator(coords: [number, number], sourceProjection: string = EPSG_4326): [number, number] {
    if (sourceProjection === EPSG_3857) {
        return coords; // Already in Web Mercator
    }
    return proj4(sourceProjection, EPSG_3857, coords) as [number, number];
}

/**
 * Generic coordinate transformation between any two projections
 * Uses proj4js for accurate coordinate transformation
 * 
 * @param coords - Source coordinates
 * @param fromProjection - Source projection
 * @param toProjection - Target projection
 */
export function transformCoords(
    coords: [number, number],
    fromProjection: string,
    toProjection: string
): [number, number] {
    if (fromProjection === toProjection) {
        return coords;
    }
    return proj4(fromProjection, toProjection, coords) as [number, number];
}

/**
 * Convert coordinates to WGS84 for any geometry type
 * 
 * @param coords - Geometry coordinates
 * @param geometryType - GeoJSON geometry type
 * @param sourceProjection - Source projection (default: EPSG:3857)
 */
function convertCoordinatesToWgs84(coords: any, geometryType: string, sourceProjection: string = EPSG_3857): any {
    switch (geometryType) {
        case 'Point':
            return toWgs84(coords as [number, number], sourceProjection);
        case 'LineString':
        case 'MultiPoint':
            return (coords as [number, number][]).map(c => toWgs84(c, sourceProjection));
        case 'Polygon':
        case 'MultiLineString':
            return (coords as [number, number][][]).map(ring => ring.map(c => toWgs84(c, sourceProjection)));
        case 'MultiPolygon':
            return (coords as [number, number][][][]).map(poly => poly.map(ring => ring.map(c => toWgs84(c, sourceProjection))));
        default:
            return coords;
    }
}

/**
 * Convert GsFeature to GeoJSON Feature (with coordinate conversion to WGS84)
 */
/**
 * Convert GsFeature to GeoJSON Feature (with coordinate conversion to WGS84)
 * 
 * @param feature - GsFeature to convert
 * @param sourceProjection - Source projection of coordinates (default: EPSG:3857)
 */
export function toGeoJsonFeature(feature: GsFeature, sourceProjection: string = EPSG_3857): GeoJSON.Feature {
    const convertedCoords = convertCoordinatesToWgs84(
        feature.geometry.coordinates,
        feature.geometry.type,
        sourceProjection
    );

    return {
        type: 'Feature',
        id: feature.uuid,
        geometry: {
            type: feature.geometry.type,
            coordinates: convertedCoords
        } as GeoJSON.Geometry,
        properties: {
            ...feature.state,
            [KEY_UUID]: feature.uuid
        }
    };
}

/**
 * Convert array of GsFeatures to GeoJSON FeatureCollection
 */
/**
 * Convert array of GsFeatures to GeoJSON FeatureCollection
 * 
 * @param features - Array of GsFeatures
 * @param sourceProjection - Source projection of coordinates (default: EPSG:3857)
 */
export function toGeoJsonFeatureCollection(features: GsFeature[], sourceProjection: string = EPSG_3857): GeoJSON.FeatureCollection {
    return {
        type: 'FeatureCollection',
        features: features.map(f => toGeoJsonFeature(f, sourceProjection))
    };
}

/**
 * Build WMS tile URL from GsSource
 */
function buildWmsTileUrl(source: GsSource): string {
    const baseUrl = source.url!;
    const params = new URLSearchParams({
        SERVICE: 'WMS',
        VERSION: '1.1.1',
        REQUEST: 'GetMap',
        FORMAT: 'image/png',
        TRANSPARENT: 'true',
        SRS: 'EPSG:3857',
        WIDTH: '256',
        HEIGHT: '256',
        BBOX: '{bbox-epsg-3857}',
        ...source.state
    });
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${params.toString()}`;
}

/**
 * Convert GsSource to MapLibre SourceSpecification
 */
export function toMlSource(source: GsSource, _layer?: GsLayer): SourceSpecification | null {
    switch (source.type) {
        case GsSourceType.OSM:
            return {
                type: 'raster',
                tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution: '© OpenStreetMap contributors'
            };

        case GsSourceType.XYZ:
            return {
                type: 'raster',
                tiles: [source.url!],
                tileSize: 256
            };

        case GsSourceType.GeoJSON:
            return {
                type: 'geojson',
                data: source.url!
            };

        case GsSourceType.Features:
            return {
                type: 'geojson',
                data: toGeoJsonFeatureCollection(source.features || [])
            };

        case GsSourceType.WMS:
            return {
                type: 'raster',
                tiles: [buildWmsTileUrl(source)],
                tileSize: 256
            };

        case GsSourceType.WMTS:
            // WMTS needs tile URL construction - simplified for now
            return {
                type: 'raster',
                tiles: [source.url!],
                tileSize: 256
            };

        case GsSourceType.BM:
            // Basemap.de style - handled separately as full style
            return null;

        case GsSourceType.GeoTIFF:
            // GeoTIFF requires special handling with maplibre-gl-cog
            console.warn('GeoTIFF source type not yet supported in MapLibre renderer');
            return null;

        case GsSourceType.GPX:
        case GsSourceType.KML:
            // These need format conversion - would require togeojson library
            console.warn(`${source.type} source type requires conversion to GeoJSON`);
            return null;

        default:
            console.warn(`Unknown source type: ${source.type}`);
            return null;
    }
}

/**
 * Convert GsStyle to MapLibre paint properties for fill layers
 */
export function toMlFillPaint(style?: GsStyle): Record<string, any> {
    const paint: Record<string, any> = {};

    if (style?.fill?.color) {
        paint['fill-color'] = style.fill.color;
    } else {
        paint['fill-color'] = 'rgba(0, 100, 255, 0.3)';
    }

    if (style?.stroke?.color) {
        paint['fill-outline-color'] = style.stroke.color;
    }

    return paint;
}

/**
 * Convert GsStyle to MapLibre paint properties for line layers
 */
export function toMlLinePaint(style?: GsStyle): Record<string, any> {
    const paint: Record<string, any> = {};

    if (style?.stroke?.color) {
        paint['line-color'] = style.stroke.color;
    } else {
        paint['line-color'] = 'rgba(0, 100, 255, 0.8)';
    }

    if (style?.stroke?.width) {
        paint['line-width'] = style.stroke.width;
    } else {
        paint['line-width'] = 2;
    }

    if (style?.stroke?.lineDash) {
        paint['line-dasharray'] = style.stroke.lineDash;
    }

    return paint;
}

/**
 * Convert GsStyle to MapLibre paint properties for circle layers
 */
export function toMlCirclePaint(style?: GsStyle): Record<string, any> {
    const paint: Record<string, any> = {};

    const image = style?.image;
    if (image?.type === 'circle') {
        paint['circle-radius'] = image.radius || 5;

        if (image.fill?.color) {
            paint['circle-color'] = image.fill.color;
        } else {
            paint['circle-color'] = 'rgba(0, 100, 255, 0.8)';
        }

        if (image.stroke?.color) {
            paint['circle-stroke-color'] = image.stroke.color;
        } else {
            paint['circle-stroke-color'] = 'white';
        }

        if (image.stroke?.width) {
            paint['circle-stroke-width'] = image.stroke.width;
        } else {
            paint['circle-stroke-width'] = 2;
        }
    } else {
        // Default circle style
        paint['circle-radius'] = 5;
        paint['circle-color'] = 'rgba(0, 100, 255, 0.8)';
        paint['circle-stroke-color'] = 'white';
        paint['circle-stroke-width'] = 2;
    }

    return paint;
}

/**
 * Convert GsStyle to MapLibre paint properties for fill-extrusion layers (3D buildings)
 * Uses data-driven styling to get height and color from feature properties
 */
export function toMlFillExtrusionPaint(style?: GsStyle): Record<string, any> {
    const paint: Record<string, any> = {};

    // Use data-driven color from feature properties, or fall back to style/default
    paint['fill-extrusion-color'] = [
        'case',
        ['has', 'color'],
        ['get', 'color'],
        style?.fill?.color || 'rgba(74, 144, 217, 0.8)'
    ];

    // Get height from feature properties, default to 10 meters
    paint['fill-extrusion-height'] = [
        'case',
        ['has', 'height'],
        ['get', 'height'],
        10
    ];

    // Base height (for floating buildings), default to 0
    paint['fill-extrusion-base'] = [
        'case',
        ['has', 'base_height'],
        ['get', 'base_height'],
        0
    ];

    // Opacity
    paint['fill-extrusion-opacity'] = 0.85;

    return paint;
}

/**
 * Convert GsLayer to MapLibre LayerSpecification(s)
 * Returns an array because vector layers may need multiple MapLibre layers
 * (one for each geometry type: fill, line, circle, fill-extrusion)
 */
export function toMlLayers(layer: GsLayer, sourceId: string, defaultStyle?: GsStyle): LayerSpecification[] {
    const layers: LayerSpecification[] = [];
    const baseId = layer.uuid || sourceId;

    if (layer.type === GsLayerType.TILE) {
        layers.push({
            id: baseId,
            type: 'raster',
            source: sourceId,
            layout: {
                visibility: layer.visible !== false ? 'visible' : 'none'
            }
        } as LayerSpecification);
    } else if (layer.type === GsLayerType.VECTOR) {
        // Add fill layer for polygons WITHOUT height property (flat 2D polygons)
        layers.push({
            id: `${baseId}-fill`,
            type: 'fill',
            source: sourceId,
            filter: ['all',
                ['any',
                    ['==', ['geometry-type'], 'Polygon'],
                    ['==', ['geometry-type'], 'MultiPolygon']
                ],
                ['!', ['has', 'height']]
            ],
            paint: toMlFillPaint(defaultStyle),
            layout: {
                visibility: layer.visible !== false ? 'visible' : 'none'
            },
            metadata: { [ML_KEY_GS_LAYER_UUID]: layer.uuid }
        } as LayerSpecification);

        // Add fill-extrusion layer for polygons WITH height property (3D buildings)
        layers.push({
            id: `${baseId}-extrusion`,
            type: 'fill-extrusion',
            source: sourceId,
            filter: ['all',
                ['any',
                    ['==', ['geometry-type'], 'Polygon'],
                    ['==', ['geometry-type'], 'MultiPolygon']
                ],
                ['has', 'height']
            ],
            paint: toMlFillExtrusionPaint(defaultStyle),
            layout: {
                visibility: layer.visible !== false ? 'visible' : 'none'
            },
            metadata: { [ML_KEY_GS_LAYER_UUID]: layer.uuid }
        } as LayerSpecification);

        // Add line layer for linestrings
        layers.push({
            id: `${baseId}-line`,
            type: 'line',
            source: sourceId,
            filter: ['any',
                ['==', ['geometry-type'], 'LineString'],
                ['==', ['geometry-type'], 'MultiLineString']
            ],
            paint: toMlLinePaint(defaultStyle),
            layout: {
                visibility: layer.visible !== false ? 'visible' : 'none'
            },
            metadata: { [ML_KEY_GS_LAYER_UUID]: layer.uuid }
        } as LayerSpecification);

        // Add circle layer for points
        layers.push({
            id: `${baseId}-circle`,
            type: 'circle',
            source: sourceId,
            filter: ['any',
                ['==', ['geometry-type'], 'Point'],
                ['==', ['geometry-type'], 'MultiPoint']
            ],
            paint: toMlCirclePaint(defaultStyle),
            layout: {
                visibility: layer.visible !== false ? 'visible' : 'none'
            },
            metadata: { [ML_KEY_GS_LAYER_UUID]: layer.uuid }
        } as LayerSpecification);
    } else if (layer.type === GsLayerType.GROUP) {
        // GROUP layers with BM source use external style URL
        // This is handled separately by loading the style
        console.log('GROUP layer detected - style URL:', layer.source.url);
    }

    return layers;
}

/**
 * Build initial MapLibre style from GsMap
 */
export function buildInitialStyle(gsMap: GsMap): StyleSpecification {
    const sources: Record<string, SourceSpecification> = {};
    const layers: LayerSpecification[] = [];

    // Get default style for features (using point style as default for all geometry types)
    const defaultStyle = gsMap.styles?.['default-point'];

    // Process each layer
    gsMap.layers.forEach((layer, index) => {
        // Skip GROUP layers - they load external styles
        if (layer.type === GsLayerType.GROUP && layer.source.type === GsSourceType.BM) {
            return;
        }

        const sourceId = layer.uuid || `layer-${index}`;
        const source = toMlSource(layer.source, layer);

        if (source) {
            sources[sourceId] = source;
            const mlLayers = toMlLayers(layer, sourceId, defaultStyle);
            layers.push(...mlLayers);
        }
    });

    return {
        version: 8,
        sources,
        layers,
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf'
    };
}


export type MlImporter = (src: string) => Promise<any>;
export const DefaultMlImporter: MlImporter = (src: string) => import(src);

/**
 * Import and initialize a control module for MapLibre
 */
export async function importMlControlSource(
    map: Map,
    control: GsMlControl,
    src: string,
    env?: any,
    importer?: MlImporter
): Promise<void> {
    const adapter = control.getAdapter();
    const ml = await import('./gs-mlns');

    return (importer || DefaultMlImporter)(src).then((mod) => {
        const init = () => {
            const vars: any = {
                ...lit,
                lit: lit,
                style: adapter.style.bind(adapter),
                render: adapter.render.bind(adapter),
                map: map,
                element: adapter.getElement(),
                querySelector: adapter.getElement().querySelector.bind(adapter.getElement()),
                querySelectorAll: adapter.getElement().querySelectorAll.bind(adapter.getElement()),
                ml: ml,
                env: env || {},
                utils: {
                    uuid: uuidv4
                },
                asset: (path: string) => {
                    return rtUtils.resolveUrl(`assets/${path}`);
                },
                signal: (_name: string) => {},
                events: (topic: string, callback: Function | any) => {
                    if (callback instanceof Function) {
                        const token = subscribe(topic, callback);
                        return token;
                    } else {
                        return publish(topic, callback);
                    }
                },
                settings: (key: string, callback?: Function | any) => {
                    const storageKey = 'gs-settings';

                    const loadSettings = (): any => {
                        try {
                            const stored = localStorage.getItem(storageKey);
                            return stored ? JSON.parse(stored) : {};
                        } catch {
                            return {};
                        }
                    };

                    const saveSettings = (settings: any): void => {
                        try {
                            localStorage.setItem(storageKey, JSON.stringify(settings));
                        } catch (error) {
                            console.error('Failed to save settings:', error);
                        }
                    };

                    const settings = loadSettings();

                    if (callback === undefined) {
                        return settings[key];
                    }
                    if (callback instanceof Function) {
                        vars.events(key, callback);
                        callback(settings[key]);
                        return settings[key];
                    }
                    settings[key] = callback;
                    saveSettings(settings);
                    return publish(key, callback);
                },
                control: adapter,
                state: <T>(initialValue: T) => {
                    if (typeof initialValue === 'object' && initialValue !== null && !Array.isArray(initialValue)) {
                        const values: any = { ...initialValue };
                        return new Proxy({} as any, {
                            get(_target, prop: string) {
                                return values[prop];
                            },
                            set(_target, prop: string, newValue: any) {
                                if (values[prop] !== newValue) {
                                    values[prop] = newValue;
                                    adapter.render();
                                }
                                return true;
                            }
                        });
                    } else {
                        let value = initialValue;
                        return {
                            get value() { return value; },
                            set value(newValue: any) {
                                if (value !== newValue) {
                                    value = newValue;
                                    adapter.render();
                                }
                            }
                        };
                    }
                }
            };

            const templateFunction = mod instanceof Function ? mod : mod.default;
            if (templateFunction) {
                const component = templateFunction(vars);
                if (component instanceof Function) {
                    adapter.render(component);
                } else {
                    adapter.render(component);
                }
            }
        };

        // Initialize after map is loaded
        if (map.loaded()) {
            init();
        } else {
            map.on('load', init);
        }
    });
}

/**
 * Import and initialize an overlay module for MapLibre
 */
export async function importMlOverlaySource(
    map: Map,
    adapter: GsMlOverlayAdapter,
    src: string,
    env?: any,
    importer?: MlImporter
): Promise<void> {
    const ml = await import('./gs-mlns');

    return (importer || DefaultMlImporter)(src).then((mod) => {
        const init = () => {
            const vars: any = {
                ...lit,
                lit: lit,
                style: adapter.style.bind(adapter),
                render: adapter.render.bind(adapter),
                map: map,
                element: adapter.getElement(),
                querySelector: adapter.getElement().querySelector.bind(adapter.getElement()),
                querySelectorAll: adapter.getElement().querySelectorAll.bind(adapter.getElement()),
                ml: ml,
                env: env || {},
                utils: {
                    uuid: uuidv4
                },
                asset: (path: string) => {
                    return rtUtils.resolveUrl(`assets/${path}`);
                },
                signal: (_name: string) => {},
                events: (topic: string, callback: Function | any) => {
                    if (callback instanceof Function) {
                        return subscribe(topic, callback);
                    } else {
                        return publish(topic, callback);
                    }
                },
                overlay: adapter,
                state: <T>(initialValue: T) => {
                    if (typeof initialValue === 'object' && initialValue !== null && !Array.isArray(initialValue)) {
                        const values: any = { ...initialValue };
                        return new Proxy({} as any, {
                            get(_target, prop: string) {
                                return values[prop];
                            },
                            set(_target, prop: string, newValue: any) {
                                if (values[prop] !== newValue) {
                                    values[prop] = newValue;
                                    adapter.render();
                                }
                                return true;
                            }
                        });
                    } else {
                        let value = initialValue;
                        return {
                            get value() { return value; },
                            set value(newValue: any) {
                                if (value !== newValue) {
                                    value = newValue;
                                    adapter.render();
                                }
                            }
                        };
                    }
                }
            };

            const templateFunction = mod instanceof Function ? mod : mod.default;
            if (templateFunction) {
                const component = templateFunction(vars);
                if (component instanceof Function) {
                    adapter.render(component);
                } else {
                    adapter.render(component);
                }
            }
        };

        if (map.loaded()) {
            init();
        } else {
            map.on('load', init);
        }
    });
}


