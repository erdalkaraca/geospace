import { html } from "@kispace-io/core/externals/lit";
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
    TOOLBAR_MAIN,
    TOOLBAR_MAIN_RIGHT,
    File,
    StringFile,
    type IconContribution
} from "@kispace-io/core/api";
import '@kispace-io/extension-in-browser-ml';
import '@kispace-io/extension-ai-system';
import '@kispace-io/extension-mapbuilder';
import '@kispace-io/extension-style-editor';
import '@kispace-io/extension-overpass';
import '@kispace-io/extension-gtfs';
import '@kispace-io/extension-catalog';
import '@kispace-io/extension-mapprops';

// App-specific imports
import "./geo/gs-map-editor-contributions"
import './geo/gs-map-editor'
import './geo/gs-command-handlers'

import { registerGeospacePromptEnhancer } from "./geo/geospace-prompt-enhancer"
import README from "../../../README.md?raw"
import { getSourceTypeFromFile, isSupportedSpatialFile } from "./geo/utils";
import { DEFAULT_GSMAP } from "@kispace-io/gs-lib";

const logger = createLogger('GeoSpaceApp');

const GEOSPACE_UI_CONTRIBUTIONS = [
    {
        target: TOOLBAR_MAIN,
        slot: "start",
        label: "Brand",
        html: `<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>`
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
    extensions: [
        "geospace.catalog",
        "geospace.mapProps",
        "geospace.styleEditor",
        "system.mdeditor",
        "system.monaco",
        "system.utils",
        "system.commandpalette",
        "system.github-service",
        "system.memoryusage",
        "system.settings-tree",
        "system.ai-system",
    ],
    contributions: {
        ui: GEOSPACE_UI_CONTRIBUTIONS,
    },
    releaseHistory: [],

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
    render: () => html`<k-standard-layout show-bottom-sidebar="true"></k-standard-app>`
};

appLoaderService.registerApp(geospaceApp, {
    autoStart: true,
});
