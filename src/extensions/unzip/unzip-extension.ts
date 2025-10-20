import {registerAll} from "../../core/commandregistry.ts";
import {File, FileContentType, workspaceService} from "../../core/filesys.ts";
import {TOOLBAR_MAIN} from "../../core/constants.ts";
import {activeSelectionSignal} from "../../core/appstate.ts";
import {toastError, toastInfo} from "../../core/toast.ts";
import JSZip from "jszip";

registerAll({
    command: {
        "id": "unzip",
        "name": "Unzip Archive",
        "description": "Extract a zip archive to the workspace",
        "parameters": [
            {
                "name": "file",
                "description": "the zip file to extract, if not provided, the current selection will be used",
                "required": false
            }
        ]
    },
    handler: {
        canExecute: context => {
            let filePath: string = context.params && context.params["file"]
            
            if (!filePath) {
                const selectedItem = activeSelectionSignal.get()
                if (!selectedItem || !("path" in selectedItem)) {
                    return false
                }
                filePath = selectedItem.path
            }

            return filePath.toLowerCase().endsWith('.zip')
        },
        execute: async context => {
            let filePath: string = context.params && context.params["file"]
            
            if (!filePath) {
                const selectedItem = activeSelectionSignal.get()
                filePath = (selectedItem as any).path
            }

            const workspaceDir = await workspaceService.getWorkspace()
            if (!workspaceDir) {
                toastError("No workspace selected.")
                return
            }

            try {
                const fileResource = await workspaceDir.getResource(filePath)
                if (!fileResource) {
                    toastError("File not found: " + filePath)
                    return
                }

                const file = fileResource as File
                const blob = await file.getContents()
                
                const zip = await JSZip.loadAsync(blob)
                let extractedCount = 0
                
                for (const [relativePath, zipEntry] of Object.entries(zip.files)) {
                    if (zipEntry.dir) {
                        continue
                    }
                    
                    const entryBlob = await zipEntry.async("blob")
                    const pathSegments = relativePath.split("/")
                    let currentDir = workspaceDir
                    
                    for (let i = 0; i < pathSegments.length - 1; i++) {
                        const dirName = pathSegments[i]
                        const nextResource = await currentDir.getResource(dirName, {create: true})
                        currentDir = nextResource as any
                    }
                    
                    const fileName = pathSegments[pathSegments.length - 1]
                    const fileResource = await currentDir.getResource(fileName, {create: true})
                    const newFile = fileResource as File
                    await newFile.saveContents(entryBlob, {
                        contentType: FileContentType.BINARY
                    })
                    extractedCount++
                }
                
                toastInfo(`Archive extracted: ${extractedCount} file(s)`)
            } catch (err) {
                toastError("Failed to extract archive: " + err)
            }
        }
    },
    contribution: {
        target: TOOLBAR_MAIN,
        icon: "box-archive",
        label: "Unzip",
        disabled: () => {
            const selectedItem = activeSelectionSignal.get()
            return !selectedItem || !("path" in selectedItem) || !selectedItem.path.toLowerCase().endsWith('.zip')
        }
    }
})
