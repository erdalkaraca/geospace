import { html } from "lit";
import geospacePackageJson from "../package.json";
const appVersion = geospacePackageJson.version;

// Framework API imports
import {
    AppDefinition,
    appLoaderService,
    createLogger,
    packageInfoService,
    CID_AGENTS,
    contributionRegistry,
    extensionRegistry,
    workspaceService,
    editorRegistry,
    commandRegistry,
    registerAll,
    activeSelectionSignal,
    SIDEBAR_MAIN,
    SIDEBAR_MAIN_BOTTOM,
    SIDEBAR_AUXILIARY,
    TOOLBAR_MAIN,
    TOOLBAR_BOTTOM,
    TOOLBAR_BOTTOM_END,
    TOOLBAR_MAIN_RIGHT,
    File,
    StringFile,
    type AgentContribution,
    type PromptEnhancer,
    type Extension,
    type ExecutionContext
} from "@kispace-io/appspace/api";

// App-specific imports
import "./geo/gs-map-editor-contributions"
import './geo/gs-map-editor'
import './geo/gs-map-props'
import './geo/gs-catalog-contributions'
import './geo/gs-command-handlers'
import './geo/gs-catalog'
import "./app" // Registers gs-app component

import APP_SYS_PROMPT from "./geospace-sysprompt.txt?raw"
import README from "../../../README.md?raw"
import { GsSourceType, DEFAULT_GSMAP } from "./rt/gs-model";

const logger = createLogger('GeoSpaceApp');

// Map file extensions to GsSourceType
const FILE_EXTENSION_TO_SOURCE_TYPE: Record<string, GsSourceType> = {
    '.geojson': GsSourceType.GeoJSON,
    '.json': GsSourceType.GeoJSON,
    '.kml': GsSourceType.KML,
    '.gpx': GsSourceType.GPX,
    '.tif': GsSourceType.GeoTIFF,
    '.tiff': GsSourceType.GeoTIFF,
    '.geotiff': GsSourceType.GeoTIFF
};

const getSourceTypeFromFile = (file: File): GsSourceType | null => {
    const fileName = file.getName().toLowerCase();
    for (const [ext, sourceType] of Object.entries(FILE_EXTENSION_TO_SOURCE_TYPE)) {
        if (fileName.endsWith(ext)) {
            return sourceType;
        }
    }
    return null;
};

const isSupportedSpatialFile = (file: File): boolean => {
    return getSourceTypeFromFile(file) !== null;
};

export const geospaceApp: AppDefinition = {
    id: "geospace",
    name: "geo!space",
    version: appVersion,
    description: "A geospatial IDE for working with spatial data",
    metadata: {
        github: {
            owner: 'erdalkaraca',
            repo: 'geospace'
        }
    },
    extensions: [
        "geospace.styleEditor",
        "system.mdeditor",
        "system.monaco",
        "system.download",
        "system.commandpalette",
        "system.memoryusage",
        "system.pythonpackagemanager",
        "system.settings-tree",
        "system.ai-system"
    ],

    contributions: {
        ui: [
            {
                target: TOOLBAR_MAIN,
                slot: "start",
                label: "Brand",
                html: `<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>`
            },
            {
                target: SIDEBAR_MAIN,
                name: "filebrowser",
                label: "Workspace",
                icon: "folder-open",
                component: (id: string) => html`<k-filebrowser id="${id}"></k-filebrowser>`
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
                target: SIDEBAR_AUXILIARY,
                name: "aiview",
                label: "AI",
                icon: "robot",
                component: (id: string) => html`<k-aiview id="${id}"></k-aiview>`
            },
            {
                target: "system.fastviews-bottomend",
                name: "log-terminal",
                label: "Log Messages",
                icon: "list",
                component: (id: string) => html`<k-log-terminal id="${id}"></k-log-terminal>`
            },
            {
                target: TOOLBAR_BOTTOM,
                slot: "start",
                label: "Workspace",
                html: `<k-workspace-name></k-workspace-name>`
            },
            {
                target: TOOLBAR_BOTTOM_END,
                label: `v${appVersion}`,
                icon: "circle-info",
                command: "show_version_info",
                showLabel: true,
            },
            {
                target: TOOLBAR_BOTTOM_END,
                label: `Fast Views`,
                html: `<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>`
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
        ] as any[],

        extensions: [
            {
                id: "geospace.mapBuilder",
                name: "geo!space Map Builder",
                description: "Compile a geo!space file to an interactive website",
                loader: () => import("./extensions/mapbuilder-extension"),
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
            },
            {
                id: "geospace.tendermatch",
                name: "TenderMatch",
                description: "Ausschreibungsmatching für Logistikunternehmen",
                loader: () => import("./extensions/tendermatch/tendermatch-extension"),
                icon: "handshake"
            }
        ]
    },

    async initialize() {
        packageInfoService.addPackage({
            name: geospacePackageJson.name,
            version: geospacePackageJson.version,
            dependencies: geospacePackageJson.dependencies,
            devDependencies: geospacePackageJson.devDependencies
        });

        const appSupportPromptEnhancer: PromptEnhancer = {
            enhance: async (prompt: string, _context: ExecutionContext) => {
                return workspaceService.getWorkspace().then(workspace => {
                    const appState = {
                        workspace: workspace?.getName(),
                        activeEditor: editorRegistry.getEditorArea()?.getActiveEditor()
                    }
                    const appStateStr = `***App's state:***\n${JSON.stringify(appState, null, 2)}`
                    return `${appStateStr}\n\n${prompt}`
                })
            }
        }

        contributionRegistry.registerContribution(CID_AGENTS, {
            label: "App Support",
            description: "General app support",
            role: "appsupport",
            priority: 100,
            icon: "question-circle",
            sysPrompt: () => {
                const extensions = extensionRegistry.getExtensions().map((e: Extension) => {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description,
                        experimental: e.experimental,
                        installedAndEnabled: extensionRegistry.isEnabled(e.id)
                    }
                })
                const extensionsStr = `***Available Extensions:***\n${JSON.stringify(extensions, null, 2)}`
                return `${APP_SYS_PROMPT}\n\n${extensionsStr}`
            },
            promptEnhancers: [appSupportPromptEnhancer],
            tools: {
                enabled: true,
            }
        } as AgentContribution)

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

    render() {
        return html`<gs-app></gs-app>`;
    },
};

appLoaderService.registerApp(geospaceApp, {
    defaultAppId: 'geospace',
    autoStart: true,
    container: document.body
});
