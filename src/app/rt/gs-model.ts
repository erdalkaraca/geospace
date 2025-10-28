export const KEY_LABEL = "label";
export const KEY_NAME = "name";
export const KEY_URL = "url";
export const KEY_FORMAT = "format";
export const KEY_ICON_PATH = "iconPath";
export const KEY_STYLE = "style"
export const KEY_STYLES_PATH = "stylePath";
export const KEY_STATE = "_state";
export const KEY_SRC = "src";
export const KEY_SOURCETYPE = "sourceType"
export const KEY_ENV = "_env"
export const KEY_GS_MANAGED = "gsManaged"
export const KEY_SETTINGS = "settings"

export const LAYER_GEOCODED_MARKERS = "geocoded-markers"

export interface GsBag {
    [key: string]: any
}

export interface GsState {
    state?: GsBag
}

export enum GsSourceType {
    OSM = "OSM", GeoJSON = "GeoJSON", Features = "Features", KML = "KML", GeoTIFF = "GeoTIFF", GPX = "GPX", BM = "BM", WMS = "WMS", WMTS = "WMTS", XYZ = "XYZ"
}

export enum GsLayerType {
    TILE = "TILE", VECTOR = "VECTOR", GROUP = "GROUP"
}

export enum GsGeometryType {
    Point = "Point",
    MultiPoint = "MultiPoint",
    Polygon = "Polygon",
    MultiPolygon = "MultiPolygon",
    LineString = "LineString",
    MultiLineString = "MultiLineString",
    Circle = "Circle",
    LinearRing = "LinearRing"
}

export interface GsGeometry extends GsState {
    type: GsGeometryType,
    coordinates: number[]
}

export interface GsResource {
}

export interface GsIcon extends GsResource {
    src: string
}

export interface GsFeature extends GsState {
    style?: string,
    geometry: GsGeometry
}

export interface GsSource extends GsState {
    type: GsSourceType
    url?: string
    features?: GsFeature[]
}

export interface GsLayer extends GsState {
    name?: string
    type: GsLayerType,
    source: GsSource,
    stylesPath?: string,
    visible?: boolean
}

export interface GsScript extends GsState {
    src: string,
}

export interface GsOverlay extends GsScript {
    position: "bottom-left" | "bottom-center" | "bottom-right" | "center-left" | "center-center" | "center-right" | "top-left" | "top-center" | "top-right",
}

export interface GsControl extends GsScript {
}

export interface GsInteraction extends GsState {

}

export interface GsView extends GsState {
    center: number[],
    zoom: number,
    projection: string
}

export interface GsStyle {
}

export interface GsStylesMap {
    [key: string]: GsStyle
}

export interface GsMap extends GsState {
    view: GsView,
    layers: GsLayer[],
    overlays: GsOverlay[],
    controls: GsControl[],
    interactions: GsInteraction[],
    styles: GsStylesMap,
    chatHistory: any[]
}

export const DEFAULT_GSMAP = {
    view: {
        center: [0, 0],
        zoom: 0,
        projection: 'EPSG:3857'
    } as GsView,
    layers: [{
        type: GsLayerType.TILE,
        source: {
            type: GsSourceType.OSM
        } as GsSource,
    } as GsLayer],
    overlays: [] as GsOverlay[],
    controls: [] as GsControl[],
    interactions: [] as GsInteraction[],
    state: {},
    styles: {}
} as GsMap