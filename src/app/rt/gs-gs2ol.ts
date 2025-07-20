import {
    DEFAULT_GSMAP,
    GsControl,
    GsFeature,
    GsGeometry,
    GsIcon,
    GsLayer,
    GsLayerType,
    GsMap,
    GsOverlay,
    GsSource,
    GsSourceType,
    GsState,
    GsStyle,
    KEY_ENV,
    KEY_FORMAT,
    KEY_GS_MANAGED,
    KEY_LABEL,
    KEY_NAME,
    KEY_SETTINGS,
    KEY_SOURCETYPE,
    KEY_SRC,
    KEY_STATE,
    KEY_STYLES_PATH,
    KEY_URL
} from "./gs-model.ts";
import {Feature, Map, Overlay, View} from "ol";
import {MapOptions} from "ol/Map";
import BaseObject from "ol/Object";
import * as olGeom from "ol/geom";
import {Icon, Style} from "ol/style";
import {GeoTIFF, OSM, Source} from "ol/source";
import FeatureFormat from "ol/format/Feature";
import VectorSource from "ol/source/Vector";
import {GeoJSON, GPX} from "ol/format";
import TileLayer from "ol/layer/Tile";
import TileSource from "ol/source/Tile";
import VectorLayer from "ol/layer/Vector";
import BaseLayer from "ol/layer/Base";
import {apply as applyMapboxStyle} from "ol-mapbox-style";
import {stylesLoader} from "./gs-style-loader.ts";
import LayerGroup from "ol/layer/Group";
import {Control} from "ol/control";
import {html} from "lit";
import {when} from "lit/directives/when.js";
import * as ol from "./gs-olns.ts"
import {createRef, ref} from "lit/directives/ref.js";
import {v4 as uuidv4} from 'uuid'
import {GsControlAdapter, GsOverlayAdapter} from "./gs-ol-adapters.ts";
import {rtUtils} from "./index.ts";

const withState = <T extends BaseObject>(state: GsState, olObject: T): T => {
    if (state.state) {
        // add as properties for easy access via get(...)
        for (let stateKey in state.state) {
            olObject.set(stateKey, state.state[stateKey])
        }
        // add states as object as it is not possible to differentiate own state keys from OL keys
        olObject.set(KEY_STATE, state.state)
    }
    return olObject
}

export const toOLGeometry = (geometry: GsGeometry) => {
    return withState(geometry, new olGeom[geometry.type](geometry.coordinates));
}

export const toOlResource = (resource: GsIcon) => {
    return new Icon({
        src: resource.src
    })
}

export const toOlStyle = (style: GsStyle) => {
    const options: any = {}
    options[style.type] = toOlResource(style.resource as GsIcon)
    return new Style(options)
}

export const toOlFeature = (feature: GsFeature): Feature => {
    return withState(feature, new Feature({
        style: feature.style,
        geometry: toOLGeometry(feature.geometry),
    }));
}

export const OL_SOURCES: any = {}
OL_SOURCES[GsSourceType.OSM] = (source: GsSource) => {
    const olSource = new OSM();
    olSource.set(KEY_LABEL, source.type)
    return olSource
}

const formatSource = (source: GsSource, format: FeatureFormat): Source => {
    const olSource = new VectorSource({
        format: format,
        url: source.url!
    })

    olSource.set(KEY_FORMAT, source.type)
    olSource.set(KEY_URL, source.url!)
    olSource.set(KEY_LABEL, `${source.type}@${source.url}`)
    return olSource
}

OL_SOURCES[GsSourceType.GeoJSON] = (source: GsSource) => {
    return formatSource(source, new GeoJSON())
}
OL_SOURCES[GsSourceType.GPX] = (source: GsSource) => {
    return formatSource(source, new GPX())
}
OL_SOURCES[GsSourceType.GeoTIFF] = (source: GsSource) => {
    const olSource = new GeoTIFF({
        sources: [
            {
                url: source.url!
            }
        ]
    })

    olSource.set(KEY_URL, source.url!)
    olSource.set(KEY_LABEL, `${source.type}@${source.url}`)
    return olSource
}
OL_SOURCES[GsSourceType.Features] = (source: GsSource) => {
    const features = (source.features || [])
        .map(feature => toOlFeature(feature))!
    const olSource = new VectorSource({
        features: features
    })
    olSource.set(KEY_LABEL, source.type)
    return olSource
}

export const toOlSource = (source: GsSource) => {
    return withState(source, OL_SOURCES[source.type](source))
}

export const OL_LAYERS: any = {}
OL_LAYERS[GsLayerType.TILE] = (layer: GsLayer) => {
    return new TileLayer({
        source: toOlSource(layer.source) as TileSource,
    })
}
OL_LAYERS[GsLayerType.VECTOR] = (layer: GsLayer) => {
    return new VectorLayer({
        source: toOlSource(layer.source) as VectorSource,
    });
}
OL_LAYERS[GsLayerType.GROUP] = (layer: GsLayer) => {
    const group = new LayerGroup();
    group.set(KEY_URL, layer.source.url)
    group.set(KEY_SOURCETYPE, layer.source.type)
    applyMapboxStyle(group, layer.source.url).then()
    return group
}
export const toOlLayer = (layer: GsLayer) => {
    const olLayer: BaseLayer = withState(layer, OL_LAYERS[layer.type](layer))
    olLayer.set(KEY_LABEL, layer.type)
    olLayer.set(KEY_NAME, layer.name)
    olLayer.set(KEY_STYLES_PATH, layer.stylesPath)
    olLayer.set(KEY_GS_MANAGED, true)
    olLayer.setVisible(layer.visible ?? true)
    return olLayer
}

export class GsOlControl extends Control {
    constructor(options?: any) {
        const element = document.createElement('div');
        element.style.margin = "0"
        element.style.padding = "0"
        super({
            ...options,
            element: element,
        });
    }

    public getElement() {
        return this.element;
    }
}

export class GsOlOverlay extends Overlay {
    constructor(options?: any) {
        const element = document.createElement('div');
        element.style.margin = "0"
        element.style.padding = "0"
        super({
            ...options
        });
    }

    public getElement() {
        return this.element;
    }
}

export const toOlOverlay = (overlay: GsOverlay) => {
    const olOverlay = withState(overlay, new GsOlOverlay({
        positioning: overlay.position,
        stopEvent: true
    }))
    olOverlay.set(KEY_SRC, overlay.src)
    return olOverlay
}

export const toOlControl = (control: GsControl) => {
    const olControl = withState(control, new GsOlControl())
    olControl.set(KEY_SRC, control.src)
    return olControl
}

const importSrc = async (adapter: GsControlAdapter | GsOverlayAdapter, src: string, importer?: Importer) => {
    const olMap = adapter.getMap()!;
    return (importer || DefaultImporter)(src).then((mod) => {
        const init = () => {
            olMap.removeEventListener("rendercomplete", init)
            const vars: any = {
                html: html,
                when: when,
                style: adapter.style.bind(adapter),
                render: adapter.render.bind(adapter),
                map: olMap,
                element: adapter.getElement(),
                querySelector: adapter.getElement().querySelector.bind(adapter.getElement()),
                querySelectorAll: adapter.getElement().querySelector.bind(adapter.getElement()),
                ol: ol,
                ref: ref,
                createRef: createRef,
                env: olMap.get(KEY_ENV) || {},
                utils: {
                    uuid: uuidv4
                },
                asset: (path: string) => {
                    return rtUtils.resolveUrl(`assets/${path}`)
                },
                signal: (_name: string) => {
                },
                events: (topic: string, callback: Function | any) => {
                    if (callback instanceof Function) {
                        return PubSub.subscribe(topic, (_message: string, data: any) => callback(data));
                    } else {
                        return PubSub.publish(topic, callback);
                    }
                },
                settings: (key: string, callback?: Function | any) => {
                    const settings: any = olMap.get(KEY_SETTINGS)
                    // if no callback, assume caller wants the key value
                    if (callback === undefined) {
                        return settings[key]
                    }
                    // if a function, register as event topic and return value
                    if (callback instanceof Function) {
                        vars.events(key, callback)
                        return settings[key]
                    }
                    settings[key] = callback
                    // publish as event to inform settings listeners
                    return PubSub.publish(key, callback);
                }
            }
            const objectType = adapter instanceof GsControlAdapter ? "control" : "overlay"
            vars[objectType] = adapter
            const component = new (mod instanceof Function ? mod : mod.default)(vars)
            adapter.render(component)
            if (adapter instanceof GsControlAdapter) {
                adapter.rendered()
            }
            olMap.render()
        }
        olMap.on("rendercomplete", init)
    })
}

export const importOverlaySource = async (olOverlay: GsOlOverlay, src: string, importer?: Importer) => {
    const overlayAdapter = new GsOverlayAdapter(olOverlay)
    return importSrc(overlayAdapter, src, importer)
}

export const importControlSource = async (olControl: GsOlControl, src: string, importer?: Importer) => {
    const controlAdapter = new GsControlAdapter(olControl)
    return importSrc(controlAdapter, src, importer)
}

export type Importer = (src: string) => Promise<any>
export const DefaultImporter: Importer = (src: string) => import(src)

export const toOlMap = async (gsMap: GsMap, options?: MapOptions, env?: any, importer?: Importer) => {
    const olMap = withState(gsMap, new Map(options));
    olMap.set(KEY_ENV, env)
    olMap.set(KEY_SETTINGS, {})
    olMap.setView(new View({
        center: gsMap.center && gsMap.center.length == 2 ? gsMap.center : DEFAULT_GSMAP.center,
        zoom: gsMap.zoom || DEFAULT_GSMAP.zoom,
        projection: gsMap.projection || DEFAULT_GSMAP.projection
    }))
    for (const layer of gsMap.layers || []) {
        const olLayer = toOlLayer(layer)
        olMap.addLayer(olLayer)
    }

    for (const overlay of gsMap.overlays || []) {
        const olOverlay = toOlOverlay(overlay)
        olMap.addOverlay(olOverlay)
        await importOverlaySource(olOverlay, overlay.src, importer)
    }

    for (const control of gsMap.controls || []) {
        const olControl = toOlControl(control)
        olMap.addControl(olControl)
        await importControlSource(olControl, control.src, importer)
    }

    if (gsMap.styles) {
        stylesLoader.cacheStylesMap(gsMap.styles).then()
    }

    return olMap
}