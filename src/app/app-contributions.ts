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
    TABS_LEFT_END,
    TABS_LEFT_START,
    TABS_RIGHT,
    TABS_EDITING_LEFT,
    TABS_EDITING_RIGHT,
    TOOLBAR_MAIN,
    TOOLBAR_BOTTOM,
    TOOLBAR_BOTTOM_END,
    TOOLBAR_MAIN_RIGHT,
    SYSTEM_VIEWS
} from "../core/constants.ts";

import {contributionRegistry, HTMLContribution, TabContribution} from "../core/contributionregistry.ts";
import {Extension, extensionRegistry} from "../core/extensionregistry.ts";
import {workspaceService} from "../core/filesys.ts";
import {editorRegistry} from "../core/editorregistry.ts";
import {KPart} from "../parts/k-part.ts";

import {version as appVersion} from "../../package.json"
import {registerAll} from "../core/commandregistry.ts";

contributionRegistry.registerContribution(TOOLBAR_MAIN, {
    slot: "start",
    html: `<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>`
} as HTMLContribution)

contributionRegistry.registerContribution(TOOLBAR_MAIN_RIGHT, {
    slot: "end",
    html: `<k-perspective-switcher></k-perspective-switcher>`
} as HTMLContribution)

// Register views (shared across perspectives)
contributionRegistry.registerContribution(SYSTEM_VIEWS, {
    name: "assistant",
    label: "AI",
    icon: "robot",
    component: (id) => html`<k-aiassist id="${id}"></k-aiassist>`
} as TabContribution)

contributionRegistry.registerContribution(SYSTEM_VIEWS, {
    name: "filebrowser",
    label: "Workspace",
    icon: "folder-open",
    component: (id) => html`<k-filebrowser id="${id}"></k-filebrowser>`
} as TabContribution)

contributionRegistry.registerContribution(SYSTEM_VIEWS, {
    name: "catalog",
    label: "Catalog",
    icon: "book",
    component: (id) => html`<gs-catalog id="${id}"></gs-catalog>`
} as TabContribution)

contributionRegistry.registerContribution(SYSTEM_VIEWS, {
    name: "map-props",
    label: "Map Properties",
    icon: "fg map-options",
    component: (id) => html`<gs-map-props id="${id}"></gs-map-props>`
} as TabContribution)

// Geospace perspective - reference views
contributionRegistry.registerContribution(TABS_LEFT_START, {
    name: "filebrowser",
    view: "filebrowser"
} as TabContribution)

contributionRegistry.registerContribution(TABS_LEFT_START, {
    name: "catalog",
    view: "catalog"
} as TabContribution)

contributionRegistry.registerContribution(TABS_LEFT_END, {
    name: "map-props",
    view: "map-props"
} as TabContribution)

contributionRegistry.registerContribution(TABS_RIGHT, {
    name: "assistant",
    view: "assistant"
} as TabContribution)

// Editing perspective - reference views
contributionRegistry.registerContribution(TABS_EDITING_LEFT, {
    name: "filebrowser",
    view: "filebrowser"
} as TabContribution)

contributionRegistry.registerContribution(TABS_EDITING_RIGHT, {
    name: "assistant",
    view: "assistant"
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