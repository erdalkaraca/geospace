import {Feature, Map, Overlay} from "ol";
import BaseLayer from "ol/layer/Base";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import {OSM, Source, TileWMS, WMTS, XYZ} from "ol/source";
import VectorSource from "ol/source/Vector";
import * as olGeom from "ol/geom";
import {
    GsControl,
    GsFeature,
    GsGeometry,
    GsLayer,
    GsLayerType,
    GsMap,
    GsOverlay,
    GsSource,
    GsSourceType,
    GsState,
    KEY_FORMAT, KEY_GS_MANAGED,
    KEY_NAME, KEY_SOURCETYPE,
    KEY_SRC,
    KEY_STATE,
    KEY_STYLE,
    KEY_STYLES_PATH,
    KEY_URL
} from "./gs-model.ts";
import BaseObject from "ol/Object";
import FeatureFormat from "ol/format/Feature";
import LayerGroup from "ol/layer/Group";
import {GsOlControl} from "./gs-gs2ol.ts";

const sourceTypes = Object.values(GsSourceType)

export const toGsLayerType = (tag: string) => {
    switch (tag?.toLowerCase()) {
        case "osm":
        case "bing":
        case "google":
        case "geotiff":
        case "wms":
        case "wmts":
        case "xyz":
            return GsLayerType.TILE
        case "bm":
        case "basemap.de":
            return GsLayerType.GROUP
        default:
            return GsLayerType.VECTOR
    }
}

export const toGsSourceType = (tag: string) => {
    if (tag) {
        tag = tag.toLowerCase()
        const hit = sourceTypes.find(t => tag === t.toLowerCase())
        if (hit) {
            return hit
        }
    }
    throw new Error("Unsupported source type: " + tag)
}

export const toSourceUrl = (sourceType: GsSourceType) => {
    switch (sourceType) {
        case GsSourceType.BM:
            return "https://sgx.geodatenzentrum.de/gdz_basemapworld_vektor/styles/bm_web_wld_col.json"
    }
    return undefined
}


interface Rule {
    matches: (context: any) => boolean,
    apply: (context: any) => any
}

const withGsState = <T extends GsState>(olObj: BaseObject, gsState: T): T => {
    gsState.state = olObj.get(KEY_STATE)
    return gsState
}

export function toGsGeometry(geometry: olGeom.SimpleGeometry): GsGeometry {
    return withGsState(geometry, {
        type: geometry.getType(),
        coordinates: geometry.getCoordinates()
    } as GsGeometry)
}

export function toGsFeature(feature: Feature) {
    return withGsState(feature, {
        style: feature.get(KEY_STYLE),
        geometry: toGsGeometry(feature.getGeometry() as olGeom.SimpleGeometry)
    } as GsFeature)
}

const GS_SOURCES: Rule[] = [
    {
        matches: (context: Source) => context instanceof OSM,
        apply: (_context: VectorLayer): GsSource => {
            return {
                type: GsSourceType.OSM
            } as GsSource
        }
    } as Rule,
    {
        matches: (context: Source) => context instanceof XYZ,
        apply: (context: XYZ): GsSource => {
            return {
                type: GsSourceType.XYZ,
                url: context.get(KEY_URL)
            } as GsSource
        }
    } as Rule,
    {
        matches: (context: Source) => context instanceof TileWMS,
        apply: (context: TileWMS): GsSource => {
            return {
                type: GsSourceType.WMS,
                url: context.get(KEY_URL)
            } as GsSource
        }
    } as Rule,
    {
        matches: (context: Source) => context instanceof WMTS,
        apply: (context: WMTS): GsSource => {
            return {
                type: GsSourceType.WMTS,
                url: context.get(KEY_URL)
            } as GsSource
        }
    } as Rule,
    {
        matches: (context: Source) => context instanceof VectorSource && context.getFormat() instanceof FeatureFormat,
        apply: (context: VectorSource): GsSource => {
            return {
                type: context.get(KEY_FORMAT),
                url: context.get(KEY_URL)
            } as GsSource
        }
    } as Rule,
    {
        matches: (context: Source) => context instanceof VectorSource && !context.getFormat(),
        apply: (context: VectorSource): GsSource => {
            return {
                type: GsSourceType.Features,
                features: context.getFeatures().map(feature => toGsFeature(feature))
            } as GsSource
        }
    } as Rule,
]

export const toGsSource = (source: Source): GsSource => {
    const sourceRule = GS_SOURCES.find((rule: Rule) => rule.matches(source))
    return withGsState(source, sourceRule?.apply(source) as GsSource)
}

const GS_LAYERS: Rule[] = [
    {
        matches: (context: BaseLayer) => context instanceof VectorLayer,
        apply: (context: VectorLayer): GsLayer => {
            return {
                stylesPath: context.get(KEY_STYLES_PATH),
                type: GsLayerType.VECTOR,
                source: toGsSource(context.getSource() as Source)
            } as GsLayer
        }
    } as Rule,
    {
        matches: (context: BaseLayer) => context instanceof TileLayer,
        apply: (context: TileLayer): GsLayer => {
            return {
                type: GsLayerType.TILE,
                source: toGsSource(context.getSource() as Source)
            } as GsLayer
        }
    } as Rule,
    {
        matches: (context: BaseLayer) => context instanceof LayerGroup,
        apply: (context: LayerGroup): GsLayer => {
            return {
                type: GsLayerType.GROUP,
                source: {
                    type: toGsSourceType(context.get(KEY_SOURCETYPE)),
                    url: context.get(KEY_URL)
                }
            } as GsLayer
        }
    } as Rule
]

export const toGsLayer = (layer: BaseLayer): GsLayer => {
    const gsLayer = GS_LAYERS.find((rule: Rule) => rule.matches(layer))?.apply(layer) as GsLayer
    gsLayer.visible = layer.getVisible()
    gsLayer.name = layer.get(KEY_NAME)
    gsLayer.stylesPath = layer.get(KEY_STYLES_PATH)
    return withGsState(layer, gsLayer)
}

export const toGsOverlay = (olOverlay: Overlay): GsOverlay => {
    return withGsState(olOverlay, {
        src: olOverlay.get(KEY_SRC),
        position: olOverlay.getPositioning()
    } as GsOverlay)
}

export const toGsControl = (olControl: GsOlControl): GsControl => {
    return withGsState(olControl, {
        src: olControl.get(KEY_SRC),
    } as GsControl)
}

export const olMapToGsMap = (gsMap: GsMap, olMap: Map) => {
    const view = olMap.getView()
    gsMap.view.zoom = view.getZoom() || 0
    gsMap.view.center = view.getCenter() || [0, 0]
    gsMap.view.projection = view.getProjection().getCode()
    gsMap.layers = []
    gsMap.overlays = []
    gsMap.controls = []
    olMap.getLayers().forEach(layer => {
        const gsLayer = toGsLayer(layer)
        if (layer.get(KEY_GS_MANAGED) === true) {
            gsMap.layers.push(gsLayer)
        }
    })
    olMap.getOverlays().forEach(overlay => {
        const gsOverlay = toGsOverlay(overlay)
        gsMap.overlays.push(gsOverlay)
    })
    olMap.getControls().getArray().filter(c => c instanceof GsOlControl).forEach(olControl => {
        const gsControl = toGsControl(olControl)
        gsMap.controls.push(gsControl)
    })
    withGsState(olMap, gsMap)
}
