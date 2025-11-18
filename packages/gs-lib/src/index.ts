export * from "./gs-model"
export * from "./gs-gs2ol"
export * from "./gs-ol2gs"
export * from "./gs-ol-adapters"
export * from "./gs-lib"
// Re-export OpenLayers for convenience
export * from "./gs-olns"
// map-builder is only used by build service - export explicitly to avoid tree-shaking issues
export { buildMap, generateAppJs, processServiceWorker, processManifest, processHtml, bundleApp, type BuildOptions, type FileSystem, type GsLibFileCopier, type ProgressCallback } from "./base-map-builder"

export const rtUtils = {
    async resolveUrl(url: string) {
        return url
    }
};