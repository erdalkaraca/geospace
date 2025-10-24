import {html} from "lit";
import {AppDefinition, appLoaderService} from "../core/apploader.ts";
import {createLogger} from "../core/logger.ts";
import {version as appVersion} from "../../package.json";

// Side-effect imports: Initialize core services and register components
import '../core/init.ts'
import '../parts/index.ts'
import '../components'
import '../widgets/index.ts'
import "./geo/gs-map-editor-contributions.ts"
import './geo/gs-map-editor.ts'
import './geo/gs-map-props.ts'
import './geo/gs-catalog-contributions.ts'
import './geo/gs-command-handlers.ts'
import './geo/gs-catalog.ts'
import "./../extensions"
import "./../sysprompts"
import "./app.ts" // Registers gs-app component

import APP_SYS_PROMPT from "./geospace-sysprompt.txt?raw"
import {CID_PROMPTS, SysPromptContribution} from "../core/chatservice.ts";
import {contributionRegistry} from "../core/contributionregistry.ts";
import {Extension, extensionRegistry} from "../core/extensionregistry.ts";
import {workspaceService, File} from "../core/filesys.ts";
import {editorRegistry} from "../core/editorregistry.ts";
import {KPart} from "../parts/k-part.ts";
import {registerAll} from "../core/commandregistry.ts";
import {activeSelectionSignal} from "../core/appstate.ts";
import {GsSourceType} from "./rt/gs-model.ts";

import {
    SIDEBAR_MAIN,
    SIDEBAR_MAIN_BOTTOM,
    SIDEBAR_AUXILIARY,
    PANEL_BOTTOM,
    TOOLBAR_MAIN,
    TOOLBAR_BOTTOM,
    TOOLBAR_BOTTOM_END
} from "../core/constants.ts";

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
    
    extensions: [
        "system.mdeditor",
        "system.monaco",
        "system.download",
        "system.commandpalette",
        "system.memoryusage"
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
                target: SIDEBAR_MAIN,
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
                name: "assistant",
                label: "AI",
                icon: "robot",
                component: (id: string) => html`<k-aiassist id="${id}"></k-aiassist>`
            },
            {
                target: PANEL_BOTTOM,
                name: "log-terminal",
                label: "Log",
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
                command: "show_version_info"
            },
            {
                target: "contextmenu.filebrowser",
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
            }
        ] as any[],
        
        extensions: [
            {
                id: "geospace.mapBuilder",
                name: "geo!space Map Builder",
                description: "Compile a geo!space file to an interactive website",
                loader: () => import("./extensions/mapbuilder-extension.ts"),
                icon: "earth"
            },
            {
                id: "geospace.overpass",
                name: "OpenStreetMap Overpass",
                description: "OpenStreetMap Overpass API Integration for use with LLMs",
                loader: () => import("./extensions/overpass-extension.ts"),
                icon: "table"
            }
        ]
    },
    
    async initialize() {
        contributionRegistry.registerContribution(CID_PROMPTS, {
            label: "App Support",
            description: "General app support",
            role: "appsupport",
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
            canHandle: ({activeEditor}: { activeEditor: KPart }) => {
                return activeEditor === undefined
            },
            promptDecorator: async ({userPrompt}: any) => {
                return workspaceService.getWorkspace().then(workspace => {
                    const appState = {
                        workspace: workspace?.getName(),
                        activeEditor: editorRegistry.getEditorArea()?.getActiveEditor()
                    }
                    const appStateStr = `***App's state:***\n${JSON.stringify(appState, null, 2)}`
                    return `${appStateStr}\n\n${userPrompt}`
                })
            }
        } as SysPromptContribution)

        registerAll({
            command: {
                "id": "show_version_info",
                "name": "Show Version Info",
                "description": "Shows application version information",
                "parameters": []
            },
            handler: {
                execute: async _context => {
                    alert(`${geospaceApp.name}\nVersion: ${geospaceApp.version}\nAlpha Release\n\n${geospaceApp.description}`)
                }
            }
        })

        registerAll({
            command: {
                "id": "add_layer_from_selection",
                "name": "Add Layer from Selected File",
                "description": "Adds the selected file as a map layer",
                "parameters": []
            },
            handler: {
                execute: async context => {
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
                    
                    // Call add_layer command with proper parameters
                    await context.commandRegistry!.execute('add_layer', {
                        source: context,
                        params: {
                            source: sourceType,
                            url: filePath
                        }
                    });
                }
            }
        })
        
        logger.info('geo!space is ready!');
    },
    
    render() {
        return html`<gs-app></gs-app>`;
    },
};

// Self-bootstrap: load and render the app
appLoaderService.loadApp(geospaceApp, document.body);
