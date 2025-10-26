import {registerAll} from "../core/commandregistry.ts";
import {File, workspaceService} from "../core/filesys.ts";
import {toastError, toastInfo} from "../core/toast.ts";
import {promptDialog, confirmDialog} from "../core/dialog.ts";
import {activeSelectionSignal} from "../core/appstate.ts";
import {editorRegistry} from "../core/editorregistry.ts";

registerAll({
    command: {
        "id": "create_file",
        "name": "Create new file",
        "description": "Creates a new file within the workspace",
        "keyBinding": "CTRL+N",
        "parameters": [
            {
                "name": "path",
                "description": "the path including name of the file to be created, must be relative to the workspace",
                "required": false
            },
            {
                "name": "contents",
                "description": "the textual contents of the file",
                "required": false
            },
            {
                "name": "ask",
                "description": "whether to prompt the user for the file path",
                "required": false
            },
            {
                "name": "extension",
                "description": "required file extension (e.g., '.geospace'), will be appended if missing",
                "required": false
            }
        ]
    },
    handler: {
        execute: async ({params}: any) => {
            const workspaceDir = await workspaceService.getWorkspace()
            if (!workspaceDir) {
                toastError("Please select a workspace!")
                return
            }

            let path = params?.path
            const contents = params?.contents
            const ask = params?.ask
            const extension = params?.extension

            if (ask || !path) {
                path = await promptDialog("Enter path to new file (directories will be created if not exist):", path || "")
                if (!path) {
                    return
                }
            }

            if (extension && !path.endsWith(extension)) {
                path += extension
            }

            const existingResource = await workspaceDir.getResource(path)
            if (existingResource) {
                const overwrite = await confirmDialog(`File "${path}" already exists. Do you want to overwrite it?`)
                if (!overwrite) {
                    return
                }
            }

            const createdResource = await workspaceDir.getResource(path, {create: true})
            if (!createdResource) {
                toastError("Could not create file: " + path)
            } else {
                if (contents) {
                    await (createdResource as File).saveContents(contents)
                }
                toastInfo("File created: " + path)
            }
        }
    }
})

registerAll({
    command: {
        "id": "rename_resource",
        "name": "Rename a resource (file or directory)",
        "description": "Renames a resource (file or directory)",
        "keyBinding": "F2",
        "parameters": [
            {
                "name": "path",
                "description": "the path of the resource within the workspace to rename or the currently active selection",
                "required": false
            },
            {
                "name": "newName",
                "description": "the new name for the resource",
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
                toastError("No resource to rename provided!")
                return
            }

            const currentName = resource.getName()
            const newName = context.params?.newName || 
                           await promptDialog(`Enter new name for "${currentName}":`, currentName)
            
            if (!newName || newName === currentName) {
                return
            }

            try {
                await resource.rename(newName)
                toastInfo(`Resource renamed to: ${newName}`)
            } catch (err: any) {
                toastError(`Failed to rename ${currentName}: ${err.message}`)
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
            const confirmParam = context.params && context.params["confirm"]
            let yes = true
            if (confirmParam === undefined || confirmParam === true) {
                yes = await confirmDialog(`Are you sure you want to delete ${path}?`)
            }

            if (yes) {
                try {
                    await resource.delete()
                    toastInfo("Resource deleted: " + path)
                } catch (err: any) {
                    toastError(`Resource ${path} could not be deleted: ${err.message || err}`)
                }
            }
        }
    }
})

// Register local filesystem workspace contribution
registerAll({
    command: {
        "id": "load_workspace",
        "name": "Local Folder",
        "description": "Connect to a local folder using File System Access API",
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
        target: "filebrowser.connections",
        label: "Local Folder",
        icon: "folder-open"
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

