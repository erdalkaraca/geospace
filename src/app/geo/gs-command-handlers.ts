import {CommandRegistry} from "../../core/commandregistry.ts";
import {fromLonLat} from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import {GsMapEditor} from "./gs-map-editor.ts";
import {findOlLayer, replaceUris} from "./utils.ts";
import {stylesLoader} from "../rt/gs-style-loader.ts";
import {toastError} from "../../core/toast.ts";
import {mapChangedSignal, MapEvents} from "./gs-signals.ts";
import {
    GsControl,
    GsGeometry,
    GsGeometryType,
    GsIcon,
    GsLayer,
    GsLayerType,
    GsOverlay,
    GsSourceType,
    GsStyle,
    GsStyleType,
    importControlSource,
    importOverlaySource,
    KEY_STYLES_PATH,
    LAYER_GEOCODED_MARKERS,
    olMapToGsMap,
    toGsLayerType,
    toGsSourceType,
    toOlControl,
    toOlFeature,
    toOlLayer,
    toOlOverlay,
    toSourceUrl
} from "../rt";

export const registerCommands = (commandRegistry: CommandRegistry) => {

    commandRegistry.registerAll({
        command: {
            "id": "zoom_to_level",
            "name": "Zoom to Level",
            "description": "Zooms the map to the provided level",
            "parameters": [
                {
                    "name": "zoom",
                    "description": "the zoom level, an interger between 0 and 12",
                    "required": true
                }
            ]
        },
        handler: {
            execute: context => {
                const controller: GsMapEditor = context.source;
                controller.getView().setZoom(Number(context.params!["zoom"]).valueOf())
            }
        }
    })

    commandRegistry.registerAll({
        command: {
            "id": "center_location",
            "name": "Center to a location",
            "description": "Centers the map to the provided location coordinates",
            "parameters": [
                {
                    "name": "lat",
                    "description": "the latitude of the map",
                    "required": true
                },
                {
                    "name": "lon",
                    "description": "the longitude of the map",
                    "required": true
                }
            ]
        },
        handler: {
            execute: context => {
                const controller: GsMapEditor = context.source;
                const coords = fromLonLat([Number(context.params!["lon"]).valueOf(), Number(context.params!["lat"]).valueOf()]);
                controller.getView().setCenter(coords)
            }
        }
    })

    commandRegistry.registerAll({
        command: {
            "id": "add_marker",
            "name": "Add a marker",
            "description": "Add a marker to the map",
            "parameters": [
                {
                    "name": "lat",
                    "description": "the latitude of the marker",
                    "required": true
                },
                {
                    "name": "lon",
                    "description": "the longitude of the marker",
                    "required": true
                },
                {
                    "name": "name",
                    "description": "a short name of the marker",
                    "required": true
                },
                {
                    "name": "description",
                    "description": "a description of the marker",
                    "required": true
                },
                {
                    "name": "iconPath",
                    "description": "the path within the workspace to the icon file in any graphics format such as png, jpg or svg; if no icon path provided, a marker.png file will be assumed to be located in the root of the workspace",
                    "required": false
                }
            ]
        },
        handler: {
            execute: context => {
                const controller: GsMapEditor = context.source;
                const coords = fromLonLat([Number(context.params!["lon"]).valueOf(), Number(context.params!["lat"]).valueOf()]);
                const iconPath = context.params!["iconPath"] || "marker.png"
                const marker = toOlFeature({
                    state: {
                        name: context.params!["name"],
                        description: context.params!["description"],
                    },
                    style: iconPath,
                    geometry: {
                        type: GsGeometryType.Point,
                        coordinates: [...coords]
                    } as GsGeometry
                })

                const olmap = controller.olMap!
                const gsmap = controller.gsMap!
                gsmap.styles[iconPath] = {
                    type: GsStyleType.IMAGE,
                    resource: {
                        src: iconPath
                    } as GsIcon
                } as GsStyle

                const markersLayer = findOlLayer(LAYER_GEOCODED_MARKERS, olmap, () => {
                    const layer = toOlLayer({
                        name: LAYER_GEOCODED_MARKERS,
                        type: GsLayerType.VECTOR,
                        source: {
                            type: GsSourceType.Features,
                            features: []
                        }
                    }) as VectorLayer;
                    layer.setZIndex(olmap.getLayers().getLength())
                    olmap.addLayer(layer);
                    stylesLoader.bindToLayer(layer)
                    return layer
                }) as VectorLayer
                const source = (<VectorLayer>markersLayer).getSource()!
                source.addFeature(marker)

                stylesLoader.cacheStyle(iconPath, gsmap.styles[iconPath]).then(() => {
                    olmap.render()
                    mapChangedSignal.set({part: controller, event: MapEvents.LAYER_ADDED})
                })
            }
        }
    })

    commandRegistry.registerAll({
        command: {
            "id": "add_layer",
            "name": "Add new layer",
            "description": "Adds a new layer to the map or set the basemap",
            "parameters": [
                {
                    "name": "source",
                    "description": `the source of the layer, one of: ${Object.values(GsSourceType).join(", ")}`,
                    "required": true
                },
                {
                    "name": "basemap",
                    "description": "if set to true, the new layer will be used as the basemap or basemap layer",
                    "required": false
                },
                {
                    "name": "url",
                    "description": "the URL or path within the workspace to load the features/geometries from",
                    "required": false
                },
                {
                    "name": "stylePath",
                    "description": "the path within the workspace to the style json file if source is of type vector, for example, geojson",
                    "required": false
                }
            ]
        },
        handler: {
            execute: context => {
                const controller: GsMapEditor = context.source;
                const source = context.params!["source"]?.trim().toLowerCase()
                const url = context.params!["url"] as string
                const sourceType = toGsSourceType(source)
                const gsLayer = {
                    type: toGsLayerType(source),
                    source: {
                        type: sourceType,
                        url: url ?? toSourceUrl(sourceType)
                    }
                } as GsLayer
                replaceUris(gsLayer, "url").then(() => {
                    const newLayer = toOlLayer(gsLayer)
                    if (newLayer) {
                        const olMap = controller.olMap!
                        const basemap = context?.params && context.params["basemap"] == true
                        if (basemap) {
                            const layers = olMap.getLayers()
                            if (layers.getLength() > 0) {
                                olMap.removeLayer(layers.item(0))
                            }
                            layers.insertAt(0, newLayer)
                        } else {
                            olMap.addLayer(newLayer)
                        }
                        stylesLoader.bindToLayer(newLayer)
                        const gsMap = controller.gsMap!
                        olMapToGsMap(gsMap, olMap)
                        olMap.render()
                    }
                })
            }
        }
    })

    commandRegistry.registerAll({
        command: {
            "id": "delete_layer",
            "name": "Delete a layer",
            "description": "Delete a layer given its index (starting with 1 for the first layer)",
            "parameters": [
                {
                    "name": "index",
                    "description": "the index of the layer to delete, starts with 1 for the first layer",
                    "required": true
                }
            ]
        },
        handler: {
            execute: context => {
                const controller: GsMapEditor = context.source;
                const olMap = controller.olMap!
                const index = parseInt(context.params!["index"]) - 1

                if (index < 0 || index >= olMap.getLayers().getLength()) {
                    return;
                }
                const layer = olMap.getLayers().item(index)
                olMap.removeLayer(layer)
                const gsMap = controller.gsMap!
                olMapToGsMap(gsMap, olMap)
            }
        }
    })

    commandRegistry.registerAll({
        command: {
            "id": "apply_styles",
            "name": "Apply styles",
            "description": "Applies a styles json file to a layer",
            "parameters": [
                {
                    "name": "stylesPath",
                    "description": "the path to the json file containing style definitions",
                    "required": true
                },
                {
                    "name": "layer",
                    "description": "the layer to apply the styles to: can be either a name or the index pointing to a layer in the layers stack",
                    "required": true
                }
            ]
        },
        handler: {
            execute: context => {
                const controller: GsMapEditor = context.source;
                const layer = context.params!["layer"]
                const stylesPath = context.params!["stylesPath"]?.trim().toLowerCase()
                const olmap = controller.olMap!
                const gsmap = controller.gsMap!

                let gsLayer = undefined
                let olLayer: VectorLayer | undefined = undefined
                if (typeof layer === "number" || layer?.trim().match(/\d+/)) {
                    const index = parseInt(layer) - 1
                    if (index >= 0 || index < gsmap.layers.length - 1) {
                        gsLayer = gsmap.layers[index]
                        olLayer = olmap.getLayers().item(index) as VectorLayer
                    }
                } else {
                    const layerName = layer?.trim().toLowerCase()
                    gsLayer = gsmap.layers.find(l => l.name === layerName) as GsLayer
                    olLayer = findOlLayer(layer, olmap) as VectorLayer
                }

                if (gsLayer === undefined || !gsLayer || !olLayer) {
                    toastError("Layer not found: " + layer)
                    return
                }

                gsLayer.stylesPath = stylesPath
                olLayer.set(KEY_STYLES_PATH, stylesPath)
                stylesLoader.cacheStylesFromPath(layer.stylesPath).then(() => {
                    olLayer.getSource()?.refresh()
                })
            }
        }
    })

    const KEY_DARKMODELISTENER = "darkmodelistener"
    commandRegistry.registerAll({
        command: {
            "id": "switch_color_mode",
            "name": "Switch color mode",
            "description": "Switches the current color mode to either dark or light (default)",
            "parameters": [
                {
                    "name": "mode",
                    "description": "the mode to switch to, will be toggled if not provided",
                    "required": false
                }
            ]
        },
        handler: {
            execute: context => {
                const controller: GsMapEditor = context.source!;
                const olmap = controller.olMap!
                let darkmode: boolean = olmap.get("darkmode") ?? false
                if (!context.params || !("mode" in context.params)) {
                    darkmode = !darkmode
                } else {
                    darkmode = context.params!["mode"] == "dark"
                }
                olmap.set("darkmode", darkmode)
                let listener = olmap.get(KEY_DARKMODELISTENER)
                if (!listener) {
                    listener = () => {
                        controller.renderRoot.querySelectorAll('canvas').forEach(canvas => {
                            const darkMode = olmap.get("darkmode")
                            canvas.style.filter = darkMode ? "invert(100%)" : "";
                        })
                    }
                    olmap.set(KEY_DARKMODELISTENER, listener);
                    olmap.on("postcompose", listener)
                }
                olmap.render()
            }
        }
    })

    commandRegistry.registerAll({
        command: {
            "id": "add_overlay",
            "name": "Add overlay",
            "description": "Adds an overlay JavaScript module to the map",
            "parameters": [
                {
                    "name": "src",
                    "description": "the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",
                    "required": true
                }
            ]
        },
        handler: {
            execute: context => {
                const controller: GsMapEditor = context.source;
                const olMap = controller.olMap!
                const src = context.params!["src"] as string
                const pos = context.params!["position"]
                const olOverlay = toOlOverlay({
                    src: src,
                    position: pos || "bottom-left"
                } as GsOverlay)
                olMap.addOverlay(olOverlay)
                importOverlaySource(olOverlay, src)
            }
        }
    })

    commandRegistry.registerAll({
        command: {
            "id": "add_control",
            "name": "Add control",
            "description": "Adds a control JavaScript module to the map",
            "parameters": [
                {
                    "name": "src",
                    "description": "the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",
                    "required": true
                }
            ]
        },
        handler: {
            execute: context => {
                const controller: GsMapEditor = context.source;
                const olMap = controller.olMap!
                const src = context.params!["src"] as string
                const olControl = toOlControl({
                    src: src,
                } as GsControl)
                olMap.addControl(olControl)
                importControlSource(olControl, src)
            }
        }
    })
}