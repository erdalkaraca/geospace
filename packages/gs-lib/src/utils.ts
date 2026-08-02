import { GsLayer, GsLayerType, GsSourceType, ensureUuidsRecursive } from "./gs-model";

export interface ToGsLayerOptions {
    source: string;
    url?: string;
    name?: string;
    lang?: string;
    params?: Record<string, any>;
}

export const resolveScriptLang = (src: string, lang?: string): string => {
    if (lang) return lang
    const ext = src.split('?')[0].split('.').pop()?.toLowerCase() ?? ''
    if (ext === 'py') return 'python'
    return 'javascript'
}

export const toGsLayerType = (tag: string): GsLayerType => {
    switch (tag?.toLowerCase()) {
        case "osm":
        case "bing":
        case "google":
        case "geotiff":
        case "wms":
        case "wmts":
        case "xyz":
            return GsLayerType.TILE;
        case "bm":
        case "basemap.de":
            return GsLayerType.GROUP;
        case "scripted":
            return GsLayerType.SCRIPTED;
        default:
            return GsLayerType.VECTOR;
    }
}

export const toGsSourceType = (tag: string): GsSourceType => {
    if (tag) {
        const normalized = tag.toLowerCase();
        const sourceTypes = Object.values(GsSourceType);
        const hit = sourceTypes.find(t => normalized === t.toLowerCase());
        if (hit) {
            return hit;
        }
    }
    throw new Error("Unsupported source type: " + tag);
}

export const toSourceUrl = (sourceType: GsSourceType): string | undefined => {
    switch (sourceType) {
        case GsSourceType.BM:
            return "https://sgx.geodatenzentrum.de/gdz_basemapworld_vektor/styles/bm_web_wld_col.json";
    }
    return undefined;
}

export const toGsLayer = ({ source, url, name, lang, params }: ToGsLayerOptions): GsLayer => {
    const sourceType = toGsSourceType(source);
    const layerType = toGsLayerType(source);
    const resolvedUrl = url ?? toSourceUrl(sourceType);

    return ensureUuidsRecursive({
        name: name ?? (resolvedUrl ? resolvedUrl.split('/').pop() : sourceType),
        type: layerType,
        lang,
        params,
        source: {
            type: sourceType,
            url: resolvedUrl
        }
    } as GsLayer);
}
