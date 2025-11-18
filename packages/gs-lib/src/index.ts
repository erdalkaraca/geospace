export * from "./gs-model"
export * from "./gs-gs2ol"
export * from "./gs-ol2gs"
export * from "./gs-ol-adapters"
export * from "./gs-lib"
// Re-export OpenLayers for convenience
export * from "./gs-olns"

export const rtUtils = {
    async resolveUrl(url: string) {
        return url
    }
};