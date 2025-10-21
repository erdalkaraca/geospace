import {registerAll} from "../core/commandregistry.ts";
import {File, workspaceService} from "../core/filesys.ts";
import {toastError, toastInfo} from "../core/toast.ts";
import {activeSelectionSignal} from "../core/appstate.ts";
import {editorRegistry} from "../core/editorregistry.ts";

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
            },
            {
                "name": "contents",
                "description": "the textual contents of the file",
                "required": false
            }
        ]
    },
    handler: {
        execute: async ({params: {path, contents}}: any) => {
            if (!path) {
                return
            }
            const workspaceDir = await workspaceService.getWorkspace()
            const createdResource = await workspaceDir!.getResource(path, {create: true})
            if (!createdResource) {
                console.log("could not create file: " + path)
            } else {
                if (contents) {
                    await (createdResource as File).saveContents(contents)
                }
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

