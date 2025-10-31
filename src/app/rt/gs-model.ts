import { v4 as uuidv4 } from 'uuid'

export const KEY_LABEL = "label";
export const KEY_NAME = "name";
export const KEY_URL = "url";
export const KEY_FORMAT = "format";
export const KEY_ICON_PATH = "iconPath";
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

export function ensureUuid<T extends GsState>(obj: T): T {
    if (!obj.uuid) {
        obj.uuid = uuidv4()
    }
    return obj
}

export function ensureUuidsRecursive<T extends GsState>(obj: T): T {
    ensureUuid(obj)
    
    if ('geometry' in obj && (obj as any).geometry) {
        ensureUuid((obj as any).geometry)
    }
    
    if ('source' in obj && (obj as any).source) {
        const source = (obj as any).source
        ensureUuid(source)
        if (source.features && Array.isArray(source.features)) {
            source.features.forEach((feature: any) => ensureUuidsRecursive(feature))
        }
    }
    
    if ('layers' in obj && Array.isArray((obj as any).layers)) {
        (obj as any).layers.forEach((layer: any) => ensureUuidsRecursive(layer))
    }
    
    if ('overlays' in obj && Array.isArray((obj as any).overlays)) {
        (obj as any).overlays.forEach((overlay: any) => ensureUuid(overlay))
    }
    
    if ('controls' in obj && Array.isArray((obj as any).controls)) {
        (obj as any).controls.forEach((control: any) => ensureUuid(control))
    }
    
    if ('interactions' in obj && Array.isArray((obj as any).interactions)) {
        (obj as any).interactions.forEach((interaction: any) => ensureUuid(interaction))
    }
    
    if ('view' in obj && (obj as any).view) {
        ensureUuid((obj as any).view)
    }
    
    return obj
}

export interface GsState {
    uuid?: string
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

export interface GsStrokeStyle {
    color?: string
    width?: number
    lineDash?: number[]
    lineCap?: 'butt' | 'round' | 'square'
    lineJoin?: 'bevel' | 'round' | 'miter'
    miterLimit?: number
}

export interface GsFillStyle {
    color?: string
}

export interface GsImageStyle {
    type: 'circle' | 'icon' | 'regular-shape'
    
    radius?: number
    fill?: GsFillStyle
    stroke?: GsStrokeStyle
    
    src?: string
    scale?: number
    anchor?: [number, number]
    anchorXUnits?: 'fraction' | 'pixels'
    anchorYUnits?: 'fraction' | 'pixels'
    anchorOrigin?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
    color?: string
    crossOrigin?: string
    offset?: [number, number]
    offsetOrigin?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
    size?: [number, number]
    
    points?: number
    radius1?: number
    radius2?: number
    angle?: number
    
    opacity?: number
    rotation?: number
    rotateWithView?: boolean
    displacement?: [number, number]
}

export interface GsTextStyle {
    text?: string
    font?: string
    maxAngle?: number
    offsetX?: number
    offsetY?: number
    overflow?: boolean
    placement?: 'point' | 'line'
    repeat?: number
    scale?: number
    rotateWithView?: boolean
    rotation?: number
    textAlign?: 'left' | 'center' | 'right' | 'end' | 'start'
    justify?: 'left' | 'center' | 'right'
    textBaseline?: 'bottom' | 'top' | 'middle' | 'alphabetic' | 'hanging' | 'ideographic'
    fill?: GsFillStyle
    stroke?: GsStrokeStyle
    backgroundFill?: GsFillStyle
    backgroundStroke?: GsStrokeStyle
    padding?: [number, number, number, number]
}

export interface GsStyle {
    id?: string
    stroke?: GsStrokeStyle
    fill?: GsFillStyle
    image?: GsImageStyle
    text?: GsTextStyle
    zIndex?: number
}

export interface GsStylesMap {
    [key: string]: GsStyle
}

export const DEFAULT_STYLES: GsStylesMap = {
    'default-point': {
        id: 'default-point',
        image: {
            type: 'circle',
            radius: 5,
            fill: { color: 'rgba(0, 100, 255, 0.8)' },
            stroke: { color: 'white', width: 2 }
        }
    },
    'default-line': {
        id: 'default-line',
        stroke: {
            color: 'rgba(0, 100, 255, 0.8)',
            width: 2
        }
    },
    'default-polygon': {
        id: 'default-polygon',
        fill: { color: 'rgba(0, 100, 255, 0.3)' },
        stroke: {
            color: 'rgba(0, 100, 255, 0.8)',
            width: 2
        }
    },
    'selection': {
        id: 'selection',
        image: {
            type: 'circle',
            radius: 7,
            fill: { color: 'rgba(255, 255, 0, 0.3)' },
            stroke: { color: 'rgba(255, 255, 0, 1)', width: 3 }
        },
        stroke: {
            color: 'rgba(255, 255, 0, 1)',
            width: 3
        },
        fill: {
            color: 'rgba(255, 255, 0, 0.3)'
        }
    }
}

export interface GsStyleRule {
    id?: string
    condition: {
        geometryType?: GsGeometryType | GsGeometryType[]
        layerName?: string
        property?: {
            key: string
            value?: any
            operator?: 'equals' | 'not-equals' | 'contains' | 'greater-than' | 'less-than' | 'exists'
        }
    }
    styleId: string
    priority?: number
}

export function evaluateStyleRule(rule: GsStyleRule, feature: GsFeature, layerName?: string): boolean {
    const condition = rule.condition
    
    if (condition.geometryType) {
        const types = Array.isArray(condition.geometryType) ? condition.geometryType : [condition.geometryType]
        if (!types.includes(feature.geometry.type)) {
            return false
        }
    }
    
    if (condition.layerName && condition.layerName !== layerName) {
        return false
    }
    
    if (condition.property) {
        const prop = condition.property
        const featureValue = feature.state?.[prop.key]
        
        if (!prop.operator || prop.operator === 'exists') {
            return featureValue !== undefined
        }
        
        if (prop.operator === 'equals') {
            return featureValue === prop.value
        }
        
        if (prop.operator === 'not-equals') {
            return featureValue !== prop.value
        }
        
        if (prop.operator === 'contains' && typeof featureValue === 'string' && typeof prop.value === 'string') {
            return featureValue.includes(prop.value)
        }
        
        if (prop.operator === 'greater-than' && typeof featureValue === 'number' && typeof prop.value === 'number') {
            return featureValue > prop.value
        }
        
        if (prop.operator === 'less-than' && typeof featureValue === 'number' && typeof prop.value === 'number') {
            return featureValue < prop.value
        }
    }
    
    return true
}

export function getStyleForFeature(feature: GsFeature, rules: GsStyleRule[], stylesMap: GsStylesMap, layerName?: string): GsStyle | undefined {
    const sortedRules = [...rules].sort((a, b) => (b.priority || 0) - (a.priority || 0))
    
    for (const rule of sortedRules) {
        if (evaluateStyleRule(rule, feature, layerName)) {
            return stylesMap[rule.styleId]
        }
    }
    
    return undefined
}

export interface GsMap extends GsState {
    view: GsView,
    layers: GsLayer[],
    overlays: GsOverlay[],
    controls: GsControl[],
    interactions: GsInteraction[],
    styles: GsStylesMap,
    styleRules: GsStyleRule[],
    chatHistory: any[]
}

export const DEFAULT_STYLE_RULES: GsStyleRule[] = [
    {
        id: 'default-points',
        condition: {
            geometryType: [GsGeometryType.Point, GsGeometryType.MultiPoint]
        },
        styleId: 'default-point',
        priority: 0
    },
    {
        id: 'default-lines',
        condition: {
            geometryType: [GsGeometryType.LineString, GsGeometryType.MultiLineString]
        },
        styleId: 'default-line',
        priority: 0
    },
    {
        id: 'default-polygons',
        condition: {
            geometryType: [GsGeometryType.Polygon, GsGeometryType.MultiPolygon, GsGeometryType.Circle]
        },
        styleId: 'default-polygon',
        priority: 0
    }
]

export const DEFAULT_GSMAP = ensureUuid({
    view: ensureUuid({
        center: [0, 0],
        zoom: 0,
        projection: 'EPSG:3857'
    } as GsView),
    layers: [ensureUuid({
        type: GsLayerType.TILE,
        source: ensureUuid({
            type: GsSourceType.OSM
        } as GsSource),
    } as GsLayer)],
    overlays: [] as GsOverlay[],
    controls: [] as GsControl[],
    interactions: [] as GsInteraction[],
    state: {},
    styles: { ...DEFAULT_STYLES },
    styleRules: [...DEFAULT_STYLE_RULES]
} as GsMap)