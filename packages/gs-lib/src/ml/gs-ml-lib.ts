import {GsMap} from "../gs-model";
import "maplibre-gl/dist/maplibre-gl.css";
import {
    Map,
    LngLatLike,
    StyleSpecification
} from 'maplibre-gl';
import {
    buildInitialStyle,
    importMlControlSource,
    importMlOverlaySource,
    toWgs84,
    EPSG_3857,
    MlImporter
} from "./gs-gs2ml";
import {
    GsMlControl,
    GsMlOverlayAdapter
} from "./gs-ml-adapters";
import {GsLayerType, GsSourceType} from "../gs-model";

export * from "../gs-model";
export * from "./gs-gs2ml";

export interface MlLibOptions {
    containerSelector: string | HTMLElement;
    gsMap: GsMap;
    env?: any;
    modules?: any;
    importer?: MlImporter;
}

/**
 * Main entry point to create a MapLibre map from GsMap
 */
export async function mlLib(options: MlLibOptions): Promise<Map> {
    const gsMap = options.gsMap;

    // Check for GROUP layer with BM source (external style)
    const bmLayer = gsMap.layers.find(
        l => l.type === GsLayerType.GROUP && l.source.type === GsSourceType.BM
    );

    let style: StyleSpecification | string;
    if (bmLayer?.source.url) {
        // Use external style URL
        style = bmLayer.source.url;
    } else {
        // Build style from GsMap
        style = buildInitialStyle(gsMap);
    }

    // Handle container
    const container = typeof options.containerSelector === 'string'
        ? document.querySelector(options.containerSelector) as HTMLElement
        : options.containerSelector;

    if (!container) {
        throw new Error('Container not found');
    }

    // Convert center to WGS84 for MapLibre using the view's projection
    const sourceProjection = gsMap.view.projection || EPSG_3857;
    const centerWgs84 = toWgs84([gsMap.view.center[0], gsMap.view.center[1]], sourceProjection);

    // Get pitch and bearing from view if available (for 3D viewing)
    const pitch = gsMap.view.pitch || 0;
    const bearing = gsMap.view.bearing || 0;

    // Create map with 3D support
    const map = new Map({
        container,
        style,
        center: centerWgs84 as LngLatLike,
        zoom: gsMap.view.zoom,
        pitch,
        bearing,
        maxPitch: 85  // Allow steep viewing angles for 3D buildings
    });

    // Store environment
    (map as any)._gsEnv = options.env;
    (map as any)._gsMap = gsMap;

    // Set up importer
    let importer: MlImporter | undefined = options.importer;
    if (!importer && options.modules) {
        importer = async (src: string) => {
            const module = options.modules[src];
            if (module) {
                if (typeof module === 'string') {
                    return import(module);
                }
                return module;
            }
            throw new Error(`Module not found: ${src}`);
        };
    }

    // Wait for map to load before adding controls/overlays
    await new Promise<void>((resolve) => {
        if (map.loaded()) {
            resolve();
        } else {
            map.on('load', () => resolve());
        }
    });

    // Add controls
    for (const control of gsMap.controls || []) {
        const mlControl = new GsMlControl();
        map.addControl(mlControl, 'top-right');
        await importMlControlSource(map, mlControl, control.src, options.env, importer);
    }

    // Add overlays
    for (const overlay of gsMap.overlays || []) {
        const overlayAdapter = new GsMlOverlayAdapter(map);
        await importMlOverlaySource(map, overlayAdapter, overlay.src, options.env, importer);
    }

    return map;
}

