import { html } from "@kispace-io/appspace/externals/lit-exports";
import geospacePackageJson from "../package.json";
const appVersion = geospacePackageJson.version;

// Framework API imports
import {
    AppDefinition,
    appLoaderService,
    createLogger,
    packageInfoService,
    contributionRegistry,
    editorRegistry,
    commandRegistry,
    registerAll,
    activeSelectionSignal,
    SIDEBAR_MAIN_BOTTOM,
    TOOLBAR_MAIN,
    TOOLBAR_MAIN_RIGHT,
    File,
    StringFile,
    type IconContribution
} from "@kispace-io/appspace/api";

// App-specific imports
import "./geo/gs-map-editor-contributions"
import './geo/gs-map-editor'
import './geo/gs-map-props'
import './geo/gs-catalog-contributions'
import './geo/gs-command-handlers'
import './geo/gs-catalog'

import { registerGeospacePromptEnhancer } from "./geo/geospace-prompt-enhancer"
import README from "../../../README.md?raw"
import { getSourceTypeFromFile, isSupportedSpatialFile } from "./geo/utils";
import { DEFAULT_GSMAP } from "@kispace-io/gs-lib";

const logger = createLogger('GeoSpaceApp');

const GEOSPACE_EXTENSIONS = [
    "geospace.styleEditor",
    "system.mdeditor",
    "system.monaco",
    "system.download",
    "system.commandpalette",
    "system.memoryusage",
    "system.pythonpackagemanager",
    "system.settings-tree",
    "system.ai-system",
    "system.howto"
];

const GEOSPACE_UI_CONTRIBUTIONS = [
    {
        target: TOOLBAR_MAIN,
        slot: "start",
        label: "Brand",
        html: `<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>`
    },
    {
        target: "system.fastviews-bottomend",
        name: "catalog",
        label: "Catalog",
        icon: "book",
        component: (id: string) => html`<gs-catalog id="${id}"></gs-catalog>`
    },
    {
        target: SIDEBAR_MAIN_BOTTOM,
        name: "map-props",
        label: "Map Properties",
        icon: "fg map-options",
        component: (id: string) => html`<gs-map-props id="${id}"></gs-map-props>`
    },
    {
        target: "contextmenu:filebrowser",
        label: "Add as Map Layer",
        icon: "layer-group",
        command: "add_layer_from_selection",
        disabled: () => {
            const selection = activeSelectionSignal.get();
            if (!(selection instanceof File)) {
                return true;
            }
            return !isSupportedSpatialFile(selection);
        }
    },
    {
        target: "filebrowser.create",
        label: "geo!space map",
        icon: "earth",
        command: "create_map_file"
    }
] as any[];

const GEOSPACE_EXTENSION_CONTRIBUTIONS = [
    {
        id: "geospace.mapBuilder",
        name: "geo!space Map Builder",
        description: "Compile a geo!space file to an interactive website",
        loader: () => import("./extensions/build/mapbuilder-extension"),
        icon: "earth"
    },
    {
        id: "geospace.styleEditor",
        name: "Style Editor",
        description: "Visual editor for defining and managing map styles and rules",
        loader: () => import("./extensions/style-editor/style-editor-extension"),
        icon: "palette"
    },
    {
        id: "geospace.overpass",
        name: "OpenStreetMap Overpass",
        description: "OpenStreetMap Overpass API Integration for use with LLMs",
        loader: () => import("./extensions/overpass-extension"),
        icon: "table"
    },
    {
        id: "geospace.gtfs",
        name: "GTFS to GeoJSON Converter",
        description: "Convert GTFS zip archives to GeoJSON files",
        loader: () => import("./extensions/gtfs/gtfs-extension"),
        icon: "map-location-dot"
    }
];

export const geospaceApp: AppDefinition = {
    id: "geospace",
    name: "🌐geo!space",
    version: appVersion,
    description: "An IDE for working with geospatial data.",
    metadata: {
        github: {
            owner: 'erdalkaraca',
            repo: 'geospace'
        },
        favicon: '/geospace.svg'
    },
    extensions: GEOSPACE_EXTENSIONS,
    contributions: {
        ui: GEOSPACE_UI_CONTRIBUTIONS,
        extensions: GEOSPACE_EXTENSION_CONTRIBUTIONS
    },

    async initialize() {
        packageInfoService.addPackage({
            name: geospacePackageJson.name,
            version: geospacePackageJson.version,
            dependencies: geospacePackageJson.dependencies,
            devDependencies: geospacePackageJson.devDependencies
        });

        // Register prompt enhancer to add geo!space-specific context to the default App Support agent
        registerGeospacePromptEnhancer();

        contributionRegistry.registerContribution<IconContribution>('system.icons', {
            label: 'geo!space File Icons',
            mappings: {
                'geospace': 'earth'
            },
            priority: 1
        })

        registerAll({
            command: {
                "id": "add_layer_from_selection",
                "name": "Add Layer from Selected File",
                "description": "Adds the selected file as a map layer",
                "parameters": []
            },
            handler: {
                execute: async _context => {
                    const selection = activeSelectionSignal.get();
                    if (!(selection instanceof File)) {
                        return;
                    }

                    const sourceType = getSourceTypeFromFile(selection);
                    if (!sourceType) {
                        logger.warn(`Unsupported file type: ${selection.getName()}`);
                        return;
                    }

                    const filePath = selection.getWorkspacePath();
                    const commandContext = commandRegistry.createExecutionContext({
                        source: sourceType,
                        url: filePath
                    })

                    // Call add_layer command with proper parameters
                    await commandRegistry.execute('add_layer', commandContext);
                }
            }
        })

        registerAll({
            command: {
                "id": "create_map_file",
                "name": "Create Geospace map file",
                "description": "Creates a new .geospace map file with default map structure. This is specifically for creating geospace map files, not general files.",
                "parameters": [
                    {
                        "name": "path",
                        "description": "the path including name of the map file to be created (e.g., 'my-map.geospace' or 'my map'). The .geospace extension will be added automatically if missing. Must be relative to the workspace.",
                        "required": false
                    }
                ],
                "output": [
                    {
                        "name": "path",
                        "description": "the path of the created file"
                    }
                ]
            },
            handler: {
                execute: async context => {
                    const gsMap = {
                        ...DEFAULT_GSMAP,
                        chatHistory: [],
                        view: {
                            center: [1105600, 6120800],
                            zoom: 5,
                            projection: 'EPSG:3857'
                        }
                    }
                    const path = context.params?.["path"] || "map.geospace";
                    const finalPath = path.endsWith(".geospace") ? path : `${path}.geospace`;
                    return await commandRegistry.execute("create_file", {
                        params: {
                            path: finalPath,
                            contents: JSON.stringify(gsMap, null, 2),
                            extension: ".geospace",
                            ask: !path || path === "map.geospace"
                        }
                    })
                }
            }
        })

        registerAll({
            command: {
                "id": "help",
                "name": "Show welcome",
                "description": "Shows the welcome page.",
                "parameters": []
            },
            handler: {
                execute: async _context => {
                    const readmeFile = new StringFile(README, "README.md");
                    await editorRegistry.loadEditor(readmeFile);
                }
            },
            contribution: {
                target: TOOLBAR_MAIN_RIGHT,
                icon: "question-circle",
                label: "Welcome"
            }
        })

        logger.info('geo!space is ready!');
    },
};

appLoaderService.registerApp(geospaceApp, {
    defaultAppId: 'geospace',
    autoStart: true,
    container: document.body
});
