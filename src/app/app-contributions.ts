import {html} from "lit";
import '../core/init.ts'  // Initialize core services
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

import APP_SYS_PROMPT from "../app/geospace-sysprompt.txt?raw"
import {CID_PROMPTS, SysPromptContribution} from "../core/chatservice.ts";

import {
    SIDEBAR_MAIN,
    SIDEBAR_MAIN_BOTTOM,
    SIDEBAR_AUXILIARY,
    PANEL_BOTTOM,
    TOOLBAR_MAIN,
    TOOLBAR_BOTTOM,
    TOOLBAR_BOTTOM_END
} from "../core/constants.ts";

import {contributionRegistry, HTMLContribution, TabContribution} from "../core/contributionregistry.ts";
import {Extension, extensionRegistry} from "../core/extensionregistry.ts";
import {workspaceService} from "../core/filesys.ts";
import {editorRegistry} from "../core/editorregistry.ts";
import {KPart} from "../parts/k-part.ts";

import {version as appVersion} from "../../package.json"
import {registerAll} from "../core/commandregistry.ts";
import {createLogger} from "../core/logger.ts";

const logger = createLogger('App');

// Core extensions to enable on startup
const coreExtensions = [
    "system.mdeditor",
    "system.monaco",
    "system.download",
    "system.commandpalette",
    "system.memoryusage"
];

logger.info('Initializing geo!space...');

coreExtensions.forEach(extId => {
    extensionRegistry.enable(extId);
});

logger.info('Application initialized successfully');
logger.info('geo!space is ready!');

contributionRegistry.registerContribution(TOOLBAR_MAIN, {
    slot: "start",
    html: `<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>`
} as HTMLContribution)

// Left sidebar tabs (top)
contributionRegistry.registerContribution(SIDEBAR_MAIN, {
    name: "filebrowser",
    label: "Workspace",
    icon: "folder-open",
    component: (id) => html`<k-filebrowser id="${id}"></k-filebrowser>`
} as TabContribution)

contributionRegistry.registerContribution(SIDEBAR_MAIN, {
    name: "catalog",
    label: "Catalog",
    icon: "book",
    component: (id) => html`<gs-catalog id="${id}"></gs-catalog>`
} as TabContribution)

// Left sidebar tabs (bottom)
contributionRegistry.registerContribution(SIDEBAR_MAIN_BOTTOM, {
    name: "map-props",
    label: "Map Properties",
    icon: "fg map-options",
    component: (id) => html`<gs-map-props id="${id}"></gs-map-props>`
} as TabContribution)

// Right sidebar (auxiliary) tabs
contributionRegistry.registerContribution(SIDEBAR_AUXILIARY, {
    name: "assistant",
    label: "AI",
    icon: "robot",
    component: (id) => html`<k-aiassist id="${id}"></k-aiassist>`
} as TabContribution)

// Bottom panel tabs
contributionRegistry.registerContribution(PANEL_BOTTOM, {
    name: "log-terminal",
    label: "Log",
    icon: "list",
    component: (id) => html`<k-log-terminal id="${id}"></k-log-terminal>`
} as TabContribution)

extensionRegistry.registerExtension({
    id: "geospace.mapBuilder",
    name: "geo!space Map Builder",
    description: "Compile a geo!space file to an interactive website",
    loader: () => import("./extensions/mapbuilder-extension.ts"),
    icon: "earth",
})

extensionRegistry.registerExtension({
    id: "geospace.overpass",
    name: "OpenStreetMap Overpass",
    description: "OpenStreetMap Overpass API Integration for use with LLMs",
    loader: () => import("./extensions/overpass-extension.ts"),
    icon: "table",
})

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


contributionRegistry.registerContribution(TOOLBAR_BOTTOM, {
    target: TOOLBAR_BOTTOM,
    slot: "start",
    label: "Workspace",
    html: `<k-workspace-name></k-workspace-name>`
} as HTMLContribution)

registerAll({
    command: {
        "id": "show_version_info",
        "name": "Show Version Info",
        "description": "Shows application version information",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            alert(`geo!space\nVersion: ${appVersion}\nAlpha Release\n\nA geospatial IDE for working with spatial data.`)
        }
    },
    contribution: {
        target: TOOLBAR_BOTTOM_END,
        label: `v${appVersion}`,
        icon: "circle-info"
    }
})