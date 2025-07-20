export * from "./gs-model.ts"
export * from "./gs-gs2ol.ts"
export * from "./gs-ol2gs.ts"
export * from "./gs-ol-adapters.ts"
export * from "./gs-style-loader.ts"

export const rtUtils = {
    standalone: true,
    async resolveUrl(url: string) {
        return url
    }
};