import {commandRegistry, registerAll} from "./commandregistry.ts";
import {Resource, workspaceService} from "./filesys.ts";
import {TOOLBAR_MAIN, TOOLBAR_MAIN_RIGHT} from "./constants.ts";
import {PyEnv} from "./pyservice.ts";
import {EditorInput, editorRegistry} from "./editorregistry.ts";
import {html} from "lit";
import README from "../../README.md?raw"
import {toastError, toastInfo} from "./toast.ts";
import {activePartSignal, activeSelectionSignal} from "./appstate.ts";
import {SETTINGS_FILE_PATH} from "./settingsservice.ts";
import {GsMapEditor} from "../app/geo/gs-map-editor.ts";

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
        "id": "touch",
        "name": "Create a file",
        "description": "Creates a new file within the workspace",
        "parameters": [
            {
                "name": "path",
                "description": "the path including name of the file to be created, must be relative to the workspace",
                "required": true
            }
        ]
    },
    handler: {
        execute: async context => {
            const path: string = context.params!["path"]
            if (!path) {
                return
            }
            const workspaceDir = await workspaceService.getWorkspace()
            const createdResource = await workspaceDir!.getResource(path, {create: true})
            if (!createdResource) {
                console.log("could not create file: " + path)
            }
        }
    }
})

registerAll({
    command: {
        "id": "create_file",
        "name": "Create new file",
        "description": "Shows a popup to create a new file",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            const workspaceDir = await workspaceService.getWorkspace()
            if (!workspaceDir) {
                toastError("Please select a workspace!")
                return
            }

            const path = prompt("Enter path to new file (directories will be created if not exist):")
            if (path) {
                await workspaceDir.getResource(path, {create: true})
            }
        }
    },
    contribution: {
        target: TOOLBAR_MAIN,
        icon: "plus",
        label: "Create new file...",
    }
})

registerAll({
    command: {
        "id": "delete_resource",
        "name": "Delete a resource (file or directory)",
        "description": "Deletes a resource (file or directory)",
        "parameters": [
            {
                "name": "path",
                "description": "the path of the resource within the workspace to delete or the currently active selection",
                "required": false
            },
            {
                "name": "confirm",
                "description": "whether to ask the user to confirm the deletion, true by default",
                "required": false
            }
        ]
    },
    handler: {
        execute: async context => {
            let resource = undefined
            let path = context.params && context.params["path"]
            if (path) {
                const workspaceDir = await workspaceService.getWorkspace()
                if (workspaceDir) {
                    resource = await workspaceDir.getResource(path)
                }
            }

            if (!resource) {
                resource = activeSelectionSignal.get()
            }

            if (!resource) {
                toastError("No resource to delete provided!")
                return
            }
            path = resource.getWorkspacePath()
            const confirm = context.params && context.params["confirm"]
            let yes = true
            if (confirm === undefined || confirm === true) {
                yes = window.confirm(`Are you sure you want to delete ${path}?`)
            }

            if (yes) {
                resource.delete().then(() => {
                    toastInfo("Resource deleted: " + path)
                }).catch((err: Error) => {
                    toastError(`Resource ${path} could not be deleted: ` + err)
                })
            }
        }
    },
    contribution: {
        target: TOOLBAR_MAIN,
        icon: "trash",
        label: "Delete selected resource",
        disabled: () => {
            return !(activeSelectionSignal.get() instanceof Resource)
        }
    }
})

registerAll({
    command: {
        "id": "save",
        "name": "Save editor",
        "description": "Saves the active/focused editor",
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
        target: TOOLBAR_MAIN,
        icon: "floppy-disk",
        label: "Save active editor",
        slot: "end",
        disabled: () => {
            const part = activePartSignal.get()
            return !part || !part.isDirty()
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
            const editorInput = {
                title: "Welcome!",
                data: README,
                key: "readme.md",
                icon: "bullhorn",
                state: {},
            } as EditorInput
            editorInput.widgetFactory = () => html`
                <k-md-editor .input=${editorInput}></k-md-editor>`
            await editorRegistry.loadEditor(editorInput)
        }
    },
    contribution: {
        target: TOOLBAR_MAIN_RIGHT,
        icon: "question-circle",
        label: "Welcome"
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
        "id": "load_workspace",
        "name": "Load workspace",
        "description": "Loads a workspace",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            // @ts-ignore
            await window.showDirectoryPicker({
                mode: "readwrite"
            }).then((dirHandle: FileSystemDirectoryHandle) => {
                return workspaceService.connectWorkspace(dirHandle);
            }).catch((err: Error) => {
                toastError(err.message)
            });
        }
    },
    contribution: {
        target: TOOLBAR_MAIN,
        icon: "folder-open",
        label: "Load workspace folder",
    }
})

registerAll({
    command: {
        "id": "reload_workspace",
        "name": "Reload workspace folder",
        "description": "Reloads the active workspace folder",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            const workspace = await workspaceService.getWorkspace()
            if (!workspace) {
                toastError("No workspace selected.")
            }
            workspace!.touch()
        }
    },
    contribution: {
        target: TOOLBAR_MAIN,
        icon: "repeat",
        label: "Reload workspace folder",
    }
})

registerAll({
    command: {
        "id": "open_editor",
        "name": "Open editor",
        "description": "Opens a file in an editor",
        "parameters": [
            {
                "name": "path",
                "description": "tha path of the file to open within the workspace",
                "required": true
            }
        ]
    },
    handler: {
        execute: async context => {
            const workspace = await workspaceService.getWorkspace()
            if (!workspace) {
                toastError("No workspace selected.")
            }
            const path = context.params!["path"]
            const file = await workspace?.getResource(path)
            await editorRegistry.loadEditor(file)
        }
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
            commandRegistry.execute("open_editor", {
                params: {
                    path: SETTINGS_FILE_PATH
                }
            })
        }
    },
    contribution: {
        target: TOOLBAR_MAIN_RIGHT,
        icon: "gear",
        label: "Open Settings",
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