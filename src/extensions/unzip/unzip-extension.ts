import {registerAll} from "../../core/commandregistry";
import {File, FileContentType, workspaceService} from "../../core/filesys";
import {TOOLBAR_MAIN} from "../../core/constants";
import {activeSelectionSignal} from "../../core/appstate";
import {toastError, toastInfo} from "../../core/toast";
import JSZip from "jszip";
import {taskService} from "../../core/taskservice";

registerAll({
    command: {
        "id": "unzip",
        "name": "Unzip Archive",
        "description": "Extract a zip archive from the workspace",
        "parameters": [
            {
                "name": "file",
                "description": "the zip file to extract, if not provided, the current selection will be used",
                "required": false
            },
            {
                "name": "target",
                "description": "target folder to extract into, defaults to the zip filename without extension",
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

            await taskService.runAsync("Extracting archive", async (progress) => {
                try {
                    const fileResource = await workspaceDir.getResource(filePath)
                    if (!fileResource) {
                        toastError("File not found: " + filePath)
                        return
                    }

                    // Determine target folder
                    let targetFolder = context.params && context.params["target"]
                    if (!targetFolder) {
                        // Use zip filename without extension as default
                        const fileName = filePath.split("/").pop() || "extracted"
                        // Ensure trailing slash so getResource creates a directory, not a file
                        targetFolder = fileName.replace(/\.zip$/i, "") + "/"
                    }
                    
                    progress.message = "Loading archive..."
                    progress.progress = 0
                    
                    // Create target folder first
                    await workspaceDir.getResource(targetFolder, {create: true})

                    const file = fileResource as File
                    const blob = await file.getContents({blob: true})
                    
                    const zip = await JSZip.loadAsync(blob)
                    const totalFiles = Object.values(zip.files).filter(entry => !entry.dir).length
                    let extractedCount = 0
                    
                    progress.message = `Extracting to ${targetFolder.replace(/\/$/, '')}...`
                    
                    for (const [relativePath, zipEntry] of Object.entries(zip.files)) {
                        if (zipEntry.dir) {
                            continue
                        }
                        
                        const entryBlob = await zipEntry.async("blob")
                        
                        // Build full path from workspace root to avoid triggering workspace changes
                        const fullPath = `${targetFolder}${relativePath}`
                        const fileResource = await workspaceDir.getResource(fullPath, {create: true})
                        const newFile = fileResource as File
                        await newFile.saveContents(entryBlob, {
                            contentType: FileContentType.BINARY
                        })
                        extractedCount++
                        
                        progress.progress = Math.round((extractedCount / totalFiles) * 100)
                        progress.message = `Extracting ${extractedCount}/${totalFiles} files...`
                    }
                    
                    progress.progress = 100
                    toastInfo(`Archive extracted to ${targetFolder.replace(/\/$/, '')}: ${extractedCount} file(s)`)
                } catch (err) {
                    toastError("Failed to extract archive: " + err)
                    throw err
                }
            })
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
