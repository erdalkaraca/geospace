import { html } from "lit";
import { AppDefinition, appLoaderService } from "../core/apploader.ts";
import { createLogger } from "../core/logger.ts";
import { version as appVersion } from "../../package.json";
import { infoDialog, navigableInfoDialog, NavigableDialogAction } from "../core/dialog.ts";
import { fetchReleases, isNewerVersion } from "../core/github-service.ts";

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
import { CID_PROMPTS, SysPromptContribution } from "../core/chatservice.ts";
import { contributionRegistry } from "../core/contributionregistry.ts";
import { Extension, extensionRegistry } from "../core/extensionregistry.ts";
import { workspaceService, File } from "../core/filesys.ts";
import { editorRegistry } from "../core/editorregistry.ts";
import { KPart } from "../parts/k-part.ts";
import { commandRegistry, registerAll } from "../core/commandregistry.ts";
import { activeSelectionSignal } from "../core/appstate.ts";
import { GsSourceType, DEFAULT_GSMAP } from "./rt/gs-model.ts";

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
        "geospace.styleEditor",
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
                command: "create_geospace_file"
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
                id: "geospace.styleEditor",
                name: "Style Editor",
                description: "Visual editor for defining and managing map styles and rules",
                loader: () => import("./extensions/style-editor/style-editor-extension.ts"),
                icon: "palette"
            },
            {
                id: "geospace.overpass",
                name: "OpenStreetMap Overpass",
                description: "OpenStreetMap Overpass API Integration for use with LLMs",
                loader: () => import("./extensions/overpass-extension.ts"),
                icon: "table"
            },
            {
                id: "geospace.gtfs",
                name: "GTFS to GeoJSON Converter",
                description: "Convert GTFS zip archives to GeoJSON files",
                loader: () => import("./extensions/gtfs/gtfs-extension.ts"),
                icon: "map-location-dot"
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
            canHandle: ({ activeEditor }: { activeEditor: KPart }) => {
                return activeEditor === undefined
            },
            promptDecorator: async ({ userPrompt }: any) => {
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
                    const isDev = geospaceApp.version === '0.0.0';
                    
                    if (isDev) {
                        await infoDialog(
                            geospaceApp.name,
                            `**Development Build**\n\n${geospaceApp.description}`,
                            true
                        );
                        return;
                    }

                    const releases = await fetchReleases();
                    if (releases.length === 0) {
                        await infoDialog(
                            geospaceApp.name,
                            `**Version:** ${geospaceApp.version}\n\n${geospaceApp.description}`,
                            true
                        );
                        return;
                    }

                    const currentIndex = releases.findIndex(r => r.tag_name === geospaceApp.version);
                    const startIndex = currentIndex >= 0 ? currentIndex : 0;
                    
                    let currentReleaseIndex = startIndex;
                    
                    const buildReleaseContent = (index: number) => {
                        const release = releases[index];
                        const isCurrentVersion = release.tag_name === geospaceApp.version;
                        
                        let message = `**Version:** ${release.tag_name}`;
                        if (isCurrentVersion) {
                            message += ` (Current)`;
                        }
                        message += `\n\n`;
                        
                        const publishDate = new Date(release.published_at).toLocaleDateString();
                        message += `**Released:** ${publishDate}\n\n`;
                        
                        if (!isCurrentVersion && isNewerVersion(geospaceApp.version, release.tag_name)) {
                            message += `⚠️ **Update available**\n\n`;
                        }
                        
                        if (release.body) {
                            message += `---\n\n${release.body}`;
                        }
                        
                        return message;
                    };
                    
                    const buildActions = (index: number, actionsArray: NavigableDialogAction[]): NavigableDialogAction[] => {
                        const actions: NavigableDialogAction[] = [];
                        
                        // Previous = older release (higher index in the array)
                        actions.push({
                            label: '← Previous',
                            variant: 'default',
                            disabled: index === releases.length - 1,
                            callback: () => {
                                if (index < releases.length - 1) {
                                    currentReleaseIndex = index + 1;
                                    const message = buildReleaseContent(currentReleaseIndex);
                                    const newActions = buildActions(currentReleaseIndex, actionsArray);
                                    const updateDialog = (actionsArray as any).updateDialog;
                                    if (updateDialog) {
                                        updateDialog(geospaceApp.name, message, newActions);
                                    }
                                }
                            }
                        });
                        
                        // Next = newer release (lower index in the array)
                        actions.push({
                            label: 'Next →',
                            variant: 'default',
                            disabled: index === 0,
                            callback: () => {
                                if (index > 0) {
                                    currentReleaseIndex = index - 1;
                                    const message = buildReleaseContent(currentReleaseIndex);
                                    const newActions = buildActions(currentReleaseIndex, actionsArray);
                                    const updateDialog = (actionsArray as any).updateDialog;
                                    if (updateDialog) {
                                        updateDialog(geospaceApp.name, message, newActions);
                                    }
                                }
                            }
                        });
                        
                        actions.push({
                            label: 'Close',
                            variant: 'primary',
                            callback: () => {}
                        });
                        
                        return actions;
                    };
                    
                    const initialMessage = buildReleaseContent(startIndex);
                    const initialActions: NavigableDialogAction[] = [];
                    
                    // Build actions with reference to the same array that will receive updateDialog
                    const actionsWithCallbacks = buildActions(startIndex, initialActions);
                    initialActions.push(...actionsWithCallbacks);
                    
                    await navigableInfoDialog(
                        geospaceApp.name,
                        initialMessage,
                        initialActions,
                        true
                    );
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
                    const commandContext = commandRegistry.createExecutionContext(context.source, {
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
                "id": "create_geospace_file",
                "name": "Create GeoSpace Map File",
                "description": "Creates a new .geospace map file",
                "parameters": []
            },
            handler: {
                execute: async () => {
                    const gsMap = { 
                        ...DEFAULT_GSMAP, 
                        chatHistory: [],
                        view: {
                            center: [1105600, 6120800],
                            zoom: 5,
                            projection: 'EPSG:3857'
                        }
                    }
                    await commandRegistry.execute("create_file", {
                        params: {
                            path: "map.geospace",
                            contents: JSON.stringify(gsMap, null, 2),
                            extension: ".geospace",
                            ask: true
                        }
                    })
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
