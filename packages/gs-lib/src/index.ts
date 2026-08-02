// Core exports - renderer-agnostic model and utilities
// For renderer-specific functionality, import from '@kispace-io/gs-lib-ol' or '@kispace-io/gs-lib-ml'
export * from "./gs-model"
export * from "./scripted-runtime-registry"

// Map renderer interface (no implementation)
export * from "./map-renderer"
export * from "./utils"

// map-builder is only used by build service - export explicitly to avoid tree-shaking issues
export { buildMap, generateAppJs, processServiceWorker, processManifest, processHtml, bundleApp, type BuildOptions, type FileSystem, type GsLibFileCopier, type ProgressCallback } from "./base-map-builder"

export * from "./gs-litns"

export const rtUtils = {
    async resolveUrl(url: string) {
        return url
    }
};

// Renderer-specific functionality is intentionally not re-exported from the root package.
// Import renderer implementations explicitly from '@kispace-io/gs-lib/ol' or '@kispace-io/gs-lib/ml'.
