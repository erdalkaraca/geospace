import {proj} from "@kispace-io/gs-lib";
import {MapOperations} from "./map-renderer";
import {replaceUris} from "./utils";
import {
    ensureUuid,
    GsLayer,
    GsSource,
    GsSourceType,
    toGsLayerType,
    toGsSourceType,
    toSourceUrl
} from "@kispace-io/gs-lib";
import {GsMapEditor} from "./gs-map-editor";
import {IFrameMapRenderer} from "./proxy-map-renderer";
import {
    commandRegistry,
    activePartSignal,
    promptDialog,
    createLogger,
    workspaceService,
    type ExecutionContext,
    File,
    FileContentType,
    toastInfo,
    toastError,
    taskService
} from "@kispace-io/appspace/api";

const logger = createLogger('GsCommandHandlers');

const canExecute = (context: ExecutionContext) => {
    return context.activeEditor instanceof GsMapEditor;
}

/**
 * Helper method to extract MapOperations from GsMapEditor in context.activeEditor
 * This ensures consistent access to map operations across all command handlers
 * and provides proper error handling if renderer is not available
 */
const getMapOperations = (context: ExecutionContext): MapOperations => {
    const editor = context.activeEditor as GsMapEditor;
    if (!(editor instanceof GsMapEditor) || !(editor  as GsMapEditor).getOperations()) {
        logger.error('GsMapEditor with renderer not available in context.activeEditor');
        throw new Error('GsMapEditor with renderer not available in context.activeEditor');
    }
    return (editor  as GsMapEditor).getOperations();
}

commandRegistry.registerAll({
    command: {
        "id": "zoom_to_level",
        "name": "Zoom to Level",
        "description": "Zooms the map to the provided level",
        "parameters": [
            {
                "name": "zoom",
                "description": "the zoom level (typically 0-20, where 0=world view, 5-9=country/region, 10-12=city, 13-15=street, 16-20=building detail)",
                "required": true
            }
        ]
    },
    handler: {
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const zoom = Number(context.params!["zoom"]).valueOf();
            await operations.setZoom(zoom);
            return { zoom };
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "zoom_in",
        "name": "Zoom In",
        "description": "Zooms the map in by one level",
        "parameters": [],
        "output": [
            {
                "name": "zoom",
                "description": "the new zoom level",
                "type": "number"
            }
        ]
    },
    handler: {
        canExecute: _context => activePartSignal.get() instanceof GsMapEditor,
        execute: async _context => {
            const editor = activePartSignal.get() as GsMapEditor;
            const gsMap = editor.getGsMap();
            if (gsMap?.view?.zoom !== undefined) {
                const operations = editor.mapOperations;
                const newZoom = gsMap.view.zoom + 1;
                await operations?.setZoom(newZoom);
                return newZoom;
            }
            return gsMap?.view?.zoom;
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "zoom_out",
        "name": "Zoom Out",
        "description": "Zooms the map out by one level",
        "parameters": [],
        "output": [
            {
                "name": "zoom",
                "description": "the new zoom level",
                "type": "number"
            }
        ]
    },
    handler: {
        canExecute: _context => activePartSignal.get() instanceof GsMapEditor,
        execute: async _context => {
            const editor = activePartSignal.get() as GsMapEditor;
            const gsMap = editor.getGsMap();
            if (gsMap?.view?.zoom !== undefined) {
                const operations = editor.mapOperations;
                const newZoom = gsMap.view.zoom - 1;
                await operations?.setZoom(newZoom);
                return newZoom;
            }
            return gsMap?.view?.zoom;
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
                "description": "the latitude of the location (e.g., 52.52 for Berlin). Use your knowledge of city coordinates or approximate values.",
                "type": "number",
                "required": true
            },
            {
                "name": "lon",
                "description": "the longitude of the location (e.g., 13.405 for Berlin). Use your knowledge of city coordinates or approximate values.",
                "type": "number",
                "required": true
            }
        ]
    },
    handler: {
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const coords = proj.fromLonLat([Number(context.params!["lon"]).valueOf(), Number(context.params!["lat"]).valueOf()]);

            await operations.setCenter([coords[0], coords[1]]);
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

            let name: string | undefined;
            if (url) {
                name = url.split('/').pop();
            }
            // Fallback to sourceType if name not derived from url
            if (!name && sourceType) {
                name = sourceType;
            }

            // Create layer in domain model format
            const gsLayer = ensureUuid({
                name,
                type: toGsLayerType(source),
                source: ensureUuid({
                    type: sourceType,
                    url: url ?? toSourceUrl(sourceType)
                } as GsSource)
            } as GsLayer)

            await replaceUris(gsLayer, "url");
            await operations.addLayer(gsLayer, isBasemap);
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
            const editor = context.activeEditor as GsMapEditor;
            const gsMap = editor.getGsMap();
            const index = parseInt(context.params!["index"]) - 1

            if (index < 0 || !gsMap || index >= gsMap.layers.length) {
                return;
            }

            const layer = gsMap.layers[index];
            if (layer?.uuid) {
                await operations.deleteLayer(layer.uuid);
            }
        }
    }
})

commandRegistry.registerAll({
    command: {
        "id": "rename_layer",
        "name": "Rename a layer",
        "description": "Rename a layer given its index (starting with 1 for the first layer)",
        "parameters": [
            {
                "name": "index",
                "description": "the index of the layer to rename, starts with 1 for the first layer",
                "required": true
            },
            {
                "name": "newName",
                "description": "the new name for the layer",
                "required": false
            }
        ]
    },
    handler: {
        canExecute,
        execute: async context => {
            const operations = getMapOperations(context);
            const editor = context.activeEditor as GsMapEditor;
            const gsMap = editor.getGsMap();
            const index = parseInt(context.params!["index"]) - 1

            if (index < 0 || !gsMap || index >= gsMap.layers.length) {
                return;
            }

            const layer = gsMap.layers[index];
            if (!layer?.uuid) {
                return;
            }

            const currentName = layer.name || `Layer ${index + 1}`;
            const newName = context.params?.newName || 
                           await promptDialog(`Enter new name for "${currentName}":`, currentName);
            
            if (!newName || newName === currentName) {
                return;
            }

            await operations.renameLayer(layer.uuid, newName);
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
            const operations = getMapOperations(context);
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
                "description": "the current view's extent as lat/lon coordinates in WGS84 (EPSG:4326) format",
                "type": "number[]"
            }
        ]
    },
    handler: {
        canExecute,
        execute: async context => {
            const editor = context.activeEditor as GsMapEditor;
            const latlon = context.params!["latlon"]
            const renderer = editor.getRenderer()!;

            const extent = await renderer.getViewExtent();

            if (!extent) {
                throw new Error("Failed to get view extent");
            }

            // Transform extent if latlon parameter is set
            let extent4326 = extent;
            if (latlon || latlon === undefined) {
                extent4326 = proj.transformExtent(extent, 'EPSG:3857', 'EPSG:4326');

                // Reverse coordinates to lat/lon if requested
                [extent4326[0], extent4326[1]] = [extent4326[1], extent4326[0]];
                [extent4326[2], extent4326[3]] = [extent4326[3], extent4326[2]];
            }

            // Store the result in the context
            context["viewExtent"] = extent4326;
            return extent4326;
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

commandRegistry.registerAll({
    command: {
        "id": "capture_map_screenshot",
        "name": "Capture map screenshot",
        "description": "Takes a screenshot of the currently visible OpenLayers map and returns it as a base64-encoded data URL. Useful for analyzing map imagery with ML tools.",
        "parameters": [
            {
                "name": "filePath",
                "description": "Optional path for the screenshot file. If provided, the screenshot will be saved to this path. If not provided, a unique filename based on date and time will be generated and the screenshot will be saved (e.g., 'screenshot-2024-01-15-14-30-45.png').",
                "type": "string",
                "required": false
            }
        ],
        "output": [
            {
                "name": "dataUrl",
                "description": "Base64-encoded data URL of the map screenshot (format: data:image/png;base64,...)",
                "type": "string"
            },
            {
                "name": "width",
                "description": "Width of the captured image in pixels",
                "type": "number"
            },
            {
                "name": "height",
                "description": "Height of the captured image in pixels",
                "type": "number"
            },
            {
                "name": "filePath",
                "description": "Path of the saved file (always present as screenshot is always saved)",
                "type": "string"
            }
        ]
    },
    handler: {
        canExecute: (context: ExecutionContext) => {
            return context.activeEditor instanceof GsMapEditor;
        },
        execute: async (context: ExecutionContext) => {
            try {
                const editor = context.activeEditor as GsMapEditor;
                if (!(editor instanceof GsMapEditor)) {
                    return { error: "Active editor is not a map editor" };
                }

                const renderer = editor.getRenderer();
                if (!renderer || !(renderer instanceof IFrameMapRenderer)) {
                    return { error: "Map renderer not available" };
                }

                return await taskService.runAsync("Capturing map screenshot", async (progress) => {
                    try {
                        progress.message = "Capturing screenshot from map...";
                        progress.progress = 10;
                        
                        logger.info('Capturing map screenshot...');
                        const result = await (renderer as any).sendMessage('captureScreenshot', {});
                        
                        if (!result) {
                            logger.error('No result from captureScreenshot');
                            toastError('Failed to capture screenshot: No result from iframe');
                            throw new Error("No result from screenshot capture");
                        }
                        
                        if (!result.success) {
                            logger.error(`Screenshot capture failed: ${result.error || 'Unknown error'}`);
                            toastError(`Failed to capture screenshot: ${result.error || 'Unknown error'}`);
                            throw new Error(result.error || "Failed to capture screenshot");
                        }

                        progress.message = "Preparing to save screenshot...";
                        progress.progress = 50;
                        
                        logger.info('Screenshot captured, saving to workspace...');
                        const workspace = await workspaceService.getWorkspace();
                        if (!workspace) {
                            logger.error('No workspace available');
                            toastError('Failed to save screenshot: No workspace available');
                            throw new Error("No workspace available");
                        }

                        // Determine filename
                        let filename = context.params?.filePath;
                        
                        if (!filename) {
                            // Get map file name as prefix
                            let mapFileName = "map";
                            if (editor.input?.data instanceof File) {
                                const mapFile = editor.input.data as File;
                                const fullName = mapFile.getName();
                                // Remove .geospace extension if present
                                mapFileName = fullName.replace(/\.geospace$/i, '');
                                // Sanitize filename (remove invalid characters)
                                mapFileName = mapFileName.replace(/[^a-zA-Z0-9_-]/g, '_');
                            }
                            
                            // Generate unique filename based on date and time
                            const now = new Date();
                            const year = now.getFullYear();
                            const month = String(now.getMonth() + 1).padStart(2, '0');
                            const day = String(now.getDate()).padStart(2, '0');
                            const hours = String(now.getHours()).padStart(2, '0');
                            const minutes = String(now.getMinutes()).padStart(2, '0');
                            const seconds = String(now.getSeconds()).padStart(2, '0');
                            filename = `${mapFileName}-screenshot-${year}-${month}-${day}-${hours}-${minutes}-${seconds}.png`;
                        }

                        // Ensure .png extension
                        const finalFilename = filename.endsWith('.png') ? filename : `${filename}.png`;
                        
                        progress.message = `Saving screenshot to ${finalFilename}...`;
                        progress.progress = 70;
                        
                        logger.info(`Saving screenshot to: ${finalFilename}`);
                        
                        // Convert base64 data URL to Blob
                        if (!result.dataUrl) {
                            logger.error('No dataUrl in screenshot result');
                            toastError('Failed to save screenshot: No image data received');
                            throw new Error("No image data in screenshot result");
                        }
                        
                        const base64Data = result.dataUrl.split(',')[1]; // Remove data:image/png;base64, prefix
                        if (!base64Data) {
                            logger.error('Invalid dataUrl format');
                            toastError('Failed to save screenshot: Invalid image data format');
                            throw new Error("Invalid image data format");
                        }
                        
                        progress.message = "Converting image data...";
                        progress.progress = 80;
                        
                        const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
                        const blob = new Blob([binaryData], { type: 'image/png' });
                        
                        // Create file and save
                        const file = await workspace.getResource(finalFilename, { create: true }) as File;
                        if (!file) {
                            logger.error(`Failed to create file resource: ${finalFilename}`);
                            toastError(`Failed to save screenshot: Could not create file ${finalFilename}`);
                            throw new Error(`Failed to create file: ${finalFilename}`);
                        }

                        progress.message = "Writing file to workspace...";
                        progress.progress = 90;
                        
                        logger.info(`Saving blob (size: ${blob.size} bytes) to file...`);
                        // Save as binary data
                        await file.saveContents(blob, {
                            contentType: FileContentType.BINARY
                        });

                        progress.message = "Screenshot saved successfully";
                        progress.progress = 100;

                        logger.info(`Screenshot saved successfully to: ${finalFilename}`);
                        toastInfo(`Screenshot saved: ${finalFilename}`);
                        return {
                            dataUrl: result.dataUrl,
                            width: result.width,
                            height: result.height,
                            filePath: finalFilename
                        };
                    } catch (error: any) {
                        logger.error(`Screenshot capture failed: ${error.message}`);
                        toastError(`Failed to capture screenshot: ${error.message}`);
                        throw error;
                    }
                });
            } catch (error: any) {
                logger.error(`Failed to capture map screenshot: ${error.message}`);
                toastError(`Failed to capture screenshot: ${error.message}`);
                return { error: `Failed to capture map screenshot: ${error.message}` };
            }
        }
    }
})
