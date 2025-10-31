import {commandRegistry, registerAll} from "../core/commandregistry";
import {workspaceService} from "../core/filesys";
import {TOOLBAR_MAIN_RIGHT} from "../core/constants";
import {PyEnv} from "../core/pyservice";
import {EditorInput, editorRegistry} from "../core/editorregistry";
import {html} from "lit";
import {toastError, toastInfo} from "../core/toast";
import {activePartSignal} from "../core/appstate";
import {appSettings} from "../core/settingsservice";
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
            const part = activePartSignal.get()
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

registerAll({
    command: {
        "id": "switch_theme",
        "name": "Switch theme",
        "description": "Switches between dark and light theme",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            const dark = document.documentElement.classList.toggle("wa-dark")
            if (!dark) {
                document.documentElement.classList.toggle("wa-light")
            }
        }
    },
    contribution: {
        target: TOOLBAR_MAIN_RIGHT,
        icon: "circle-half-stroke",
        label: "Theme Switcher",
    }
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

commandRegistry.registerAll({
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
        execute: ({params: {message, type}}: any) => {
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

