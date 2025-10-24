import {commandRegistry, ExecutionContext} from "../../core/commandregistry.ts";
import {fromLonLat} from "ol/proj";

import {MapOperations} from "./map-renderer.ts";
import {replaceUris} from "./utils.ts";
import {mapChangedSignal, MapEvents} from "./gs-signals.ts";
import {
    GsGeometry,
    GsGeometryType,
    GsLayer,
    GsSourceType,
    toGsLayerType,
    toGsSourceType,
    toSourceUrl
} from "../rt";
import {activePartSignal} from "../../core/appstate.ts";
import {GsMapEditor} from "./gs-map-editor.ts";

const canExecute = (context: ExecutionContext) => {
    return context.source instanceof GsMapEditor;
}

/**
 * Helper method to extract MapOperations from GsMapEditor renderer in context.source
 * This ensures consistent access to map operations across all command handlers
 * and provides proper error handling if renderer is not available
 */
const getMapOperations = (context: ExecutionContext): MapOperations => {
    if (!context.source || !(context.source as any).renderer) {
        throw new Error('GsMapEditor with renderer not available in context.source');
    }
    return (context.source as any).renderer.getOperations();
}

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
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);

            await operations.setZoom(Number(context.params!["zoom"]).valueOf());
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "zoom_in",
        "name": "Zoom In",
        "description": "Zooms the map in by one level",
        "parameters": []
    },
    handler: {
        canExecute: _context => activePartSignal.get() instanceof GsMapEditor,
        execute: async _context => {
            const editor = activePartSignal.get() as GsMapEditor;
            const gsMap = editor.getGsMap();
            if (gsMap?.view?.zoom !== undefined) {
                const operations = editor.mapOperations;
                await operations?.setZoom(gsMap.view.zoom + 1);
            }
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "zoom_out",
        "name": "Zoom Out",
        "description": "Zooms the map out by one level",
        "parameters": []
    },
    handler: {
        canExecute: _context => activePartSignal.get() instanceof GsMapEditor,
        execute: async _context => {
            const editor = activePartSignal.get() as GsMapEditor;
            const gsMap = editor.getGsMap();
            if (gsMap?.view?.zoom !== undefined) {
                const operations = editor.mapOperations;
                await operations?.setZoom(gsMap.view.zoom - 1);
            }
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
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const coords = fromLonLat([Number(context.params!["lon"]).valueOf(), Number(context.params!["lat"]).valueOf()]);

            await operations.setCenter([coords[0], coords[1]]);
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
            },
            {
                "name": "layerName",
                "description": "the name of the layer to add the marker to; if not provided, markers will be added to the default 'geocoded-markers' layer",
                "required": false
            }
        ]
    },
    handler: {
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const coords = fromLonLat([Number(context.params!["lon"]).valueOf(), Number(context.params!["lat"]).valueOf()]);
            const iconPath = context.params!["iconPath"] || "marker.png"

            // Create marker in domain model format
            const marker = {
                state: {
                    name: context.params!["name"],
                    description: context.params!["description"],
                },
                style: iconPath,
                geometry: {
                    type: GsGeometryType.Point,
                    coordinates: [...coords]
                } as GsGeometry
            };

            await operations.addMarker(marker, context.params!["layerName"]);

            // Trigger map change signal
            mapChangedSignal.set({part: operations, event: MapEvents.LAYER_ADDED});
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
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const source = context.params!["source"]?.trim().toLowerCase()
            const url = context.params!["url"] as string
            const sourceType = toGsSourceType(source)
            const isBasemap = context?.params && context.params["basemap"] == true

            // Create layer in domain model format
            const gsLayer = {
                type: toGsLayerType(source),
                source: {
                    type: sourceType,
                    url: url ?? toSourceUrl(sourceType)
                }
            } as GsLayer

            await replaceUris(gsLayer, "url");
            await operations.addLayer(gsLayer, isBasemap);

            // Trigger map change signal
            mapChangedSignal.set({part: operations, event: MapEvents.LAYER_ADDED});
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
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const index = parseInt(context.params!["index"]) - 1

            if (index < 0) {
                return;
            }

            await operations.deleteLayer(index);
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
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const layer = context.params!["layer"]
            const stylesPath = context.params!["stylesPath"]?.trim().toLowerCase()

            await operations.applyStyles(layer, stylesPath);
        }
    }
})

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
        canExecute,
        execute: async context => {
            const operations: MapOperations = context.source!;
            const mode = context.params?.["mode"];

            await operations.switchColorMode(mode);
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
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const src = context.params!["src"] as string
            const position = context.params!["position"]

            await operations.addOverlayFromModule(src, position);
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
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const src = context.params!["src"] as string

            await operations.addControlFromModule(src);
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "view_extents",
        "name": "View extents",
        "description": "Stores the extent of the current view as a variable",
        "parameters": [
            {
                "name": "latlon",
                "description": "set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",
                "required": false
            }
        ],
        "output": [
            {
                "name": "viewExtent",
                "description": "the current view's extent as lat/lon coordinates",
                "type": "number[]"
            }
        ]
    },
    handler: {
        canExecute,
        execute: async context => {
            const latlon = context.params!["latlon"]
            const renderer = (context.source as any).renderer;

            const extent = renderer.getViewExtent();

            if (!extent) {
                throw new Error("Failed to get view extent");
            }

            // Transform extent if latlon parameter is set
            let extent4326 = extent;
            if (latlon || latlon === undefined) {
                // Transform from map projection to WGS84 (EPSG:4326)
                const {transformExtent} = await import("ol/proj");
                extent4326 = transformExtent(extent, 'EPSG:3857', 'EPSG:4326');

                // Reverse coordinates to lat/lon if requested
                [extent4326[0], extent4326[1]] = [extent4326[1], extent4326[0]];
                [extent4326[2], extent4326[3]] = [extent4326[3], extent4326[2]];
            }

            // Store the result in the context
            context["viewExtent"] = extent4326;
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "toggle_mobile_view",
        "name": "Toggle Mobile View",
        "description": "Toggles between desktop and mobile view for the map",
        "parameters": []
    },
    handler: {
        canExecute: _context => activePartSignal.get() instanceof GsMapEditor,
        execute: async _context => {
            const renderer = (activePartSignal.get() as any).renderer;

            if (!renderer || !('toggleMobileView' in renderer)) {
                throw new Error('Mobile view toggle not available on this renderer');
            }

            (renderer as any).toggleMobileView();
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "refresh_map",
        "name": "Refresh Map",
        "description": "Refreshes the currently active map editor",
        "parameters": []
    },
    handler: {
        canExecute: _context => activePartSignal.get() instanceof GsMapEditor,
        execute: async _context => {
            const part = activePartSignal.get();
            if (part instanceof GsMapEditor) {
                await part.refresh();
            }
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "reset_view",
        "name": "Reset View",
        "description": "Resets the map view to the initial center and zoom level",
        "parameters": []
    },
    handler: {
        canExecute: _context => activePartSignal.get() instanceof GsMapEditor,
        execute: async _context => {
            const part = activePartSignal.get();
            if (part instanceof GsMapEditor) {
                await part.resetView();
            }
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "toggle_color_mode",
        "name": "Toggle Color Mode",
        "description": "Toggles between dark and light mode for the map",
        "parameters": []
    },
    handler: {
        canExecute: _context => activePartSignal.get() instanceof GsMapEditor,
        execute: async _context => {
            const editor = activePartSignal.get() as GsMapEditor;
            const operations = editor.mapOperations;
            if (operations) {
                await operations.switchColorMode();
            }
        }
    }
})