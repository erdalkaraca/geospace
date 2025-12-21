// Core exports - renderer-agnostic model and utilities
// For renderer-specific functionality, import from '@kispace-io/gs-lib/ol' or '@kispace-io/gs-lib/ml'
export * from "./gs-model"

// Map renderer interface (no implementation)
export * from "./map-renderer"

// map-builder is only used by build service - export explicitly to avoid tree-shaking issues
export { buildMap, generateAppJs, processServiceWorker, processManifest, processHtml, bundleApp, type BuildOptions, type FileSystem, type GsLibFileCopier, type ProgressCallback } from "./base-map-builder"

export const rtUtils = {
    async resolveUrl(url: string) {
        return url
    }
};

export * from "./ol/index"

// Backward compatibility: export olLib as gsLib for generated build code
export { olLib as gsLib } from "./ol/gs-ol-lib"