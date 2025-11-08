import {
    DEFAULT_GSMAP,
    GsControl,
    GsFeature,
    GsFillStyle,
    GsGeometry,
    GsIcon,
    GsImageStyle,
    GsLayer,
    GsLayerType,
    GsMap,
    GsOverlay,
    GsSource,
    GsSourceType,
    GsState,
    GsStrokeStyle,
    GsStyle,
    GsTextStyle,
    KEY_ENV,
    KEY_FORMAT,
    KEY_GS_MANAGED,
    KEY_LABEL,
    KEY_NAME,
    KEY_SETTINGS,
    KEY_SOURCETYPE,
    KEY_SRC,
    KEY_STATE,
    KEY_UUID,
    KEY_URL
} from "./gs-model";
import {Feature, Map, Overlay, View} from "ol";
import {MapOptions} from "ol/Map";
import BaseObject from "ol/Object";
import * as olGeom from "ol/geom";
import {Circle as CircleStyle, Fill, Icon, RegularShape, Stroke, Style, Text} from "ol/style";
import {GeoTIFF, OSM, Source, TileWMS, WMTS, XYZ} from "ol/source";
import {optionsFromCapabilities} from "ol/source/WMTS";
import FeatureFormat from "ol/format/Feature";
import WMTSCapabilities from "ol/format/WMTSCapabilities";
import VectorSource from "ol/source/Vector";
import {GeoJSON, GPX} from "ol/format";
import TileLayer from "ol/layer/Tile";
import TileSource from "ol/source/Tile";
import VectorLayer from "ol/layer/Vector";
import BaseLayer from "ol/layer/Base";
import {apply as applyMapboxStyle} from "ol-mapbox-style";
import LayerGroup from "ol/layer/Group";
import {Control} from "ol/control";
import {html} from "lit";
import {when} from "lit/directives/when.js";
import * as ol from "./gs-olns"
import {createRef, ref} from "lit/directives/ref.js";
import {v4 as uuidv4} from 'uuid'
import PubSub from 'pubsub-js'
import {GsControlAdapter, GsOverlayAdapter} from "./gs-ol-adapters";
import {rtUtils} from "./index";
import Layer from "ol/layer/Layer";

const withState = <T extends BaseObject>(state: GsState, olObject: T): T => {
    if (state.uuid) {
        olObject.set(KEY_UUID, state.uuid)
    }
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

export const toOlStroke = (gsStroke: GsStrokeStyle): Stroke => {
    return new Stroke({
        color: gsStroke.color,
        width: gsStroke.width,
        lineDash: gsStroke.lineDash,
        lineCap: gsStroke.lineCap,
        lineJoin: gsStroke.lineJoin,
        miterLimit: gsStroke.miterLimit
    })
}

export const toOlFill = (gsFill: GsFillStyle): Fill => {
    return new Fill({
        color: gsFill.color
    })
}

export const toOlCircleImage = (gsImage: GsImageStyle): CircleStyle => {
    return new CircleStyle({
        radius: gsImage.radius || 5,
        fill: gsImage.fill ? toOlFill(gsImage.fill) : undefined,
        stroke: gsImage.stroke ? toOlStroke(gsImage.stroke) : undefined,
        displacement: gsImage.displacement,
        scale: gsImage.scale,
        rotation: gsImage.rotation,
        rotateWithView: gsImage.rotateWithView,
        declutterMode: undefined
    })
}

export const toOlIconImage = (gsImage: GsImageStyle): Icon => {
    if (!gsImage.src) {
        throw new Error('Icon image requires src property')
    }
    return new Icon({
        src: gsImage.src,
        anchor: gsImage.anchor || [0.5, 1],
        anchorXUnits: gsImage.anchorXUnits || 'fraction',
        anchorYUnits: gsImage.anchorYUnits || 'fraction',
        anchorOrigin: gsImage.anchorOrigin,
        scale: gsImage.scale || 1,
        opacity: gsImage.opacity,
        rotation: gsImage.rotation,
        rotateWithView: gsImage.rotateWithView,
        displacement: gsImage.displacement,
        offset: gsImage.offset,
        offsetOrigin: gsImage.offsetOrigin,
        size: gsImage.size,
        color: gsImage.color,
        crossOrigin: gsImage.crossOrigin,
        declutterMode: undefined
    })
}

export const toOlRegularShapeImage = (gsImage: GsImageStyle): RegularShape => {
    return new RegularShape({
        points: gsImage.points || 3,
        radius: gsImage.radius || gsImage.radius1 || 5,
        radius2: gsImage.radius2,
        angle: gsImage.angle || 0,
        displacement: gsImage.displacement,
        fill: gsImage.fill ? toOlFill(gsImage.fill) : undefined,
        stroke: gsImage.stroke ? toOlStroke(gsImage.stroke) : undefined,
        rotation: gsImage.rotation,
        rotateWithView: gsImage.rotateWithView,
        scale: gsImage.scale,
        declutterMode: undefined
    })
}

export const toOlImage = (gsImage: GsImageStyle): CircleStyle | Icon | RegularShape => {
    switch (gsImage.type) {
        case 'circle':
            return toOlCircleImage(gsImage)
        case 'icon':
            return toOlIconImage(gsImage)
        case 'regular-shape':
            return toOlRegularShapeImage(gsImage)
        default:
            throw new Error(`Unknown image type: ${gsImage.type}`)
    }
}

export const toOlText = (gsText: GsTextStyle): Text => {
    return new Text({
        text: gsText.text,
        font: gsText.font,
        maxAngle: gsText.maxAngle,
        offsetX: gsText.offsetX,
        offsetY: gsText.offsetY,
        overflow: gsText.overflow,
        placement: gsText.placement,
        repeat: gsText.repeat,
        scale: gsText.scale,
        rotateWithView: gsText.rotateWithView,
        rotation: gsText.rotation,
        textAlign: gsText.textAlign,
        justify: gsText.justify,
        textBaseline: gsText.textBaseline,
        fill: gsText.fill ? toOlFill(gsText.fill) : undefined,
        stroke: gsText.stroke ? toOlStroke(gsText.stroke) : undefined,
        backgroundFill: gsText.backgroundFill ? toOlFill(gsText.backgroundFill) : undefined,
        backgroundStroke: gsText.backgroundStroke ? toOlStroke(gsText.backgroundStroke) : undefined,
        padding: gsText.padding,
        declutterMode: undefined
    })
}

export const toOlStyle = (gsStyle: GsStyle): Style => {
    const styleOptions: any = {}
    
    if (gsStyle.stroke) {
        styleOptions.stroke = toOlStroke(gsStyle.stroke)
    }
    
    if (gsStyle.fill) {
        styleOptions.fill = toOlFill(gsStyle.fill)
    }
    
    if (gsStyle.image) {
        styleOptions.image = toOlImage(gsStyle.image)
    }
    
    if (gsStyle.text) {
        styleOptions.text = toOlText(gsStyle.text)
    }
    
    if (gsStyle.zIndex !== undefined) {
        styleOptions.zIndex = gsStyle.zIndex
    }
    
    return new Style(styleOptions)
}

export const toOlFeature = (feature: GsFeature): Feature => {
    return withState(feature, new Feature({
        geometry: toOLGeometry(feature.geometry),
    }))
}

export const OL_SOURCES: any = {}
OL_SOURCES[GsSourceType.OSM] = (source: GsSource) => {
    const olSource = new OSM();
    olSource.set(KEY_LABEL, source.type)
    return olSource
}
OL_SOURCES[GsSourceType.XYZ] = (source: GsSource) => {
    const olSource = new XYZ({
        url: source.url!,
        crossOrigin: 'anonymous'
    });
    olSource.set(KEY_URL, source.url!)
    olSource.set(KEY_LABEL, `${source.type}@${source.url}`)
    return olSource
}
OL_SOURCES[GsSourceType.WMS] = (source: GsSource) => {
    const olSource = new TileWMS({
        url: source.url!,
        params: {
            'LAYERS': '',  // Will be overridden by source.state
            ...source.state || {}
        },
        crossOrigin: 'anonymous'  // Required for COEP, same as OSM default
    })
    olSource.set(KEY_URL, source.url!)
    olSource.set(KEY_LABEL, `${source.type}@${source.url}`)
    return olSource
}
OL_SOURCES[GsSourceType.WMTS] = (source: GsSource, olLayer?: Layer) => {
    const state = source.state || {}
    const parser = new WMTSCapabilities()
    
    // Create a minimal placeholder source
    const olSource = new WMTS({
        url: source.url!,
        layer: state['LAYER'] || '',
        matrixSet: state['MATRIXSET'] || 'GLOBAL_WEBMERCATOR',
        style: state['STYLE'] || 'default',
        crossOrigin: 'anonymous'
    } as any)

    // Fetch and parse capabilities, then replace the source on the layer
    fetch(source.url!)
        .then(response => response.text())
        .then(text => {
            const result = parser.read(text)
            const options = optionsFromCapabilities(result, {
                layer: state['LAYER'] || '',
                matrixSet: state['MATRIXSET'] || 'GLOBAL_WEBMERCATOR',
            })
            
            if (options) {
                // Create a new WMTS source with proper options
                const newSource = new WMTS({
                    ...options,
                    crossOrigin: 'anonymous'
                })
                newSource.set(KEY_URL, source.url!)
                newSource.set(KEY_LABEL, `${source.type}@${source.url}`)
                
                // Replace the source on the layer
                if (olLayer && olLayer.setSource) {
                    olLayer.setSource(newSource)
                }
            }
        })
        .catch(error => {
            console.error('Failed to fetch WMTS capabilities:', error)
        })

    olSource.set(KEY_URL, source.url!)
    olSource.set(KEY_LABEL, `${source.type}@${source.url}`)
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

export const toOlSource = (source: GsSource, olLayer?: TileLayer<TileSource>) => {
    return withState(source, OL_SOURCES[source.type](source, olLayer))
}

export const OL_LAYERS: any = {}
OL_LAYERS[GsLayerType.TILE] = (layer: GsLayer) => {
    const tileLayer = new TileLayer()
    const source = toOlSource(layer.source, tileLayer) as TileSource
    tileLayer.setSource(source)
    return tileLayer
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
            const templateFunction = mod instanceof Function ? mod : mod.default
            if (templateFunction) {
                const component = templateFunction(vars)
                adapter.render(component)
            }
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
        center: gsMap.view.center && gsMap.view.center.length == 2 ? gsMap.view.center : DEFAULT_GSMAP.view.center,
        zoom: gsMap.view.zoom || DEFAULT_GSMAP.view.zoom,
        projection: gsMap.view.projection || DEFAULT_GSMAP.view.projection
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

    return olMap
}