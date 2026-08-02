// MapLibre renderer exports
// Import from '@kispace-io/gs-lib-ml' for MapLibre-specific functionality

// Core model and renderer interface
export * from "@kispace-io/gs-lib"

// MapLibre-specific exports
export * from "./gs-ml-lib"
export * from "./gs-ml2gs"
export * from "./gs-ml-adapters"
export {
    toGeoJsonFeature,
    toGeoJsonFeatureCollection,
    toMlSource,
    toMlLayers,
    toMlFillPaint,
    toMlLinePaint,
    toMlCirclePaint,
    toMlFillExtrusionPaint,
    buildInitialStyle,
    toWgs84,
    toWebMercator,
    transformCoords,
    EPSG_3857,
    EPSG_4326,
    importMlControlSource,
    importMlOverlaySource,
    ML_KEY_GS_LAYER_UUID,
    ML_KEY_GS_SOURCE_UUID,
    type MlImporter
} from "./gs-gs2ml"

// MapLibre namespace
export * as ml from "./gs-mlns"

// MapLibre renderer implementation
export { MapLibreMapRenderer } from "./maplibre-map-renderer"

