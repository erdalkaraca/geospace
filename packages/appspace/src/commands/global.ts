import { commandRegistry, registerAll } from "../core/commandregistry";
import { workspaceService } from "../core/filesys";
import { TOOLBAR_MAIN_RIGHT } from "../core/constants";
import { PyEnv } from "../core/pyservice";
import { EditorInput, editorRegistry } from "../core/editorregistry";
import { html } from "lit";
import { toastError, toastInfo } from "../core/toast";
import { activeEditorSignal, activePartSignal } from "../core/appstate";
import { appSettings } from "../core/settingsservice";
import { extensionRegistry } from "../core/extensionregistry";
import type { Extension } from "../core/extensionregistry";
import "./files";
import "./version-info";

registerAll({
    command: {
        "id": "python",
        "name": "Run Python Script",
        "description": "Executes a Python script given its file path",
        "parameters": [
            {
                "name": "script",
                "description": "the path to a Python script to run",
                "required": false
            }
        ]
    },
    handler: {
        execute: async context => {
            const script: string = context.params!["script"]
            if (!script) {
                return
            }
            const pyenv = new PyEnv()
            const workspace = await workspaceService.getWorkspace()
            await pyenv.init(workspace!, context)
            await pyenv.installDependencies()
            await pyenv.execScript(script)
        }
    }
})

registerAll({
    command: {
        "id": "js",
        "name": "Run JavaScript file",
        "description": "Executes a JavaScript file given its path",
        "parameters": [
            {
                "name": "script",
                "description": "the path to a JavaScript file to run",
                "required": false
            }
        ]
    }
})

registerAll({
    command: {
        "id": "save",
        "name": "Save editor",
        "description": "Saves the active/focused editor",
        "keyBinding": "CTRL+S",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            const part = activeEditorSignal.get() || activePartSignal.get()
            if (part && part.isDirty()) {
                part.save()
            }
        }
    },
    contribution: {
        target: "toolbar:.system.editors",
        icon: "floppy-disk",
        label: "Save active editor",
        slot: "start",
        disabled: () => {
            const part = activePartSignal.get()
            return !part || !part.isDirty()
        }
    }
})

registerAll({
    command: {
        "id": "run_python",
        "name": "Run Python Cell",
        "description": "Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",
        "keyBinding": "CTRL+R",
        "parameters": []
    }
})

const THEME_SETTINGS_KEY = "theme"

async function applyTheme(themeClass: 'wa-dark' | 'wa-light'): Promise<void> {
    const root = document.documentElement
    root.classList.remove('wa-dark', 'wa-light')
    root.classList.add(themeClass)
}

async function loadTheme(): Promise<void> {
    const theme = await appSettings.get(THEME_SETTINGS_KEY)
    await applyTheme(theme || 'wa-dark')
}

async function saveTheme(themeClass: 'wa-dark' | 'wa-light'): Promise<void> {
    await appSettings.set(THEME_SETTINGS_KEY, themeClass)
}

registerAll({
    command: {
        "id": "switch_theme",
        "name": "Switch theme",
        "description": "Switches between dark and light theme",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            const isDark = document.documentElement.classList.contains("wa-dark")
            const newTheme = isDark ? 'wa-light' : 'wa-dark'
            await applyTheme(newTheme)
            await saveTheme(newTheme)
        }
    },
    contribution: {
        target: TOOLBAR_MAIN_RIGHT,
        icon: "circle-half-stroke",
        label: "Theme Switcher",
    }
})

// Load theme on module initialization
loadTheme().catch(err => {
    console.error('Failed to load theme preference:', err)
})

registerAll({
    command: {
        "id": "fullscreen",
        "name": "Toggle fullscreen",
        "description": "Toggles fullscreen mode",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            if (document.fullscreenElement === document.body) {
                await document.exitFullscreen()
            } else {
                await document.body.requestFullscreen()
            }
        }
    },
    contribution: {
        target: TOOLBAR_MAIN_RIGHT,
        icon: "expand",
        label: "Fullscreen",
    }
})

registerAll({
    command: {
        "id": "open_settings",
        "name": "Open Settings",
        "description": "Opens the settings file in an editor",
        "parameters": []
    },
    handler: {
        execute: _context => {
            const editorInput = {
                title: "settings.json",
                data: {
                    async getContents() {
                        const obj = await appSettings.getAll()
                        return JSON.stringify(obj, undefined, 2)
                    },
                    getName() {
                        return editorInput.key
                    },
                    saveContents(contents: string) {
                        const obj = JSON.parse(contents)
                        return appSettings.setAll(obj)
                    }
                },
                key: "setting.json",
                editorId: "monaco-editor",
                icon: "gear",
                state: {},
            } as EditorInput
            editorInput.widgetFactory = () => html`
                <k-monaco-editor .input=${editorInput}></k-monaco-editor>`
            editorRegistry.loadEditor(editorInput).then()
        }
    },
    contribution: {
        target: TOOLBAR_MAIN_RIGHT,
        icon: "gear",
        label: "Open Settings",
    }
})

registerAll({
    command: {
        "id": "open_extensions",
        "name": "Open Extensions",
        "description": "Opens the extensions registry",
        "parameters": []
    },
    handler: {
        execute: _context => {
            const editorInput = {
                title: "Extensions",
                data: {},
                key: "system.extensions",
                editorId: "extensions-editor",
                icon: "puzzle-piece",
                state: {},
                noOverflow: true,
            } as EditorInput
            editorInput.widgetFactory = () => html`
                <k-extensions></k-extensions>`
            editorRegistry.loadEditor(editorInput).then()
        }
    },
    contribution: {
        target: TOOLBAR_MAIN_RIGHT,
        icon: "puzzle-piece",
        label: "Open Extensions",
    }
})

registerAll({
    command: {
        "id": "list_extensions",
        "name": "List extensions",
        "description": "Lists all available extensions with their status (enabled/disabled)",
        "parameters": [],
        "output": [
            {
                "name": "extensions",
                "description": "array of extension objects with id, name, description, experimental flag, and enabled status"
            }
        ]
    },
    handler: {
        execute: async (_context: any) => {
            const extensions = extensionRegistry.getExtensions().map((e: Extension) => {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    experimental: e.experimental,
                    enabled: extensionRegistry.isEnabled(e.id)
                }
            });
            return extensions;
        }
    }
})

registerAll({
    command: {
        "id": "toast_message",
        "name": "Toast message to user",
        "description": "Shows a toast message",
        "parameters": [
            {
                "name": "message",
                "description": "the message to toast",
                "required": true
            },
            {
                "name": "type",
                "description": "the toast type: info (default), or error",
                "required": false
            }
        ]
    },
    handler: {
        execute: ({ params: { message, type } }: any) => {
            if (!message) {
                return
            }
            if (type === "error") {
                toastError(message)
            } else {
                toastInfo(message)
            }
        }
    }
})

