import {registerAll} from "../../core/commandregistry";
import {File, FileContentType, workspaceService} from "../../core/filesys";
import {toastError, toastInfo} from "../../core/toast";
import {taskService} from "../../core/taskservice";

registerAll({
    command: {
        "id": "download",
        "name": "Download File",
        "description": "Download a file from a URL to the workspace",
        "parameters": [
            {
                "name": "url",
                "description": "the URL of the file to download",
                "required": true
            },
            {
                "name": "filename",
                "description": "optional filename to save as (will be auto-detected if not provided)",
                "required": false
            }
        ]
    },
    handler: {
        canExecute: context => {
            const url = context.params && context.params["url"]
            if (!url) {
                return false
            }
            return url.startsWith('http://') || url.startsWith('https://')
        },
        execute: async context => {
            const url = context.params && context.params["url"]
            
            if (!url) {
                toastError("No URL provided.")
                return
            }

            const workspaceDir = await workspaceService.getWorkspace()
            if (!workspaceDir) {
                toastError("No workspace selected.")
                return
            }

            await taskService.runAsync("Downloading file", async (progress) => {
                progress.message = "Starting download..."
                progress.progress = 0
                
                try {
                const response = await fetch(url, {
                    mode: 'cors',
                    credentials: 'omit'
                })
                
                if (!response.ok) {
                    toastError("Failed to download file: " + response.statusText)
                    return
                }
                
                let fileName = context.params && context.params["filename"]
                
                if (!fileName) {
                    // Try to get filename from Content-Disposition header
                    const contentDisposition = response.headers.get('content-disposition')
                    if (contentDisposition) {
                        // Try to match filename="..." (quoted)
                        let filenameMatch = contentDisposition.match(/filename="([^"]+)"/)
                        if (filenameMatch && filenameMatch[1]) {
                            fileName = filenameMatch[1]
                        } else {
                            // Try to match filename=... (unquoted)
                            filenameMatch = contentDisposition.match(/filename=([^;]+)/)
                            if (filenameMatch && filenameMatch[1]) {
                                fileName = filenameMatch[1].trim()
                            }
                        }
                    }
                    
                    // Fallback to extracting from URL path
                    if (!fileName) {
                        const urlSegments = new URL(url).pathname.split("/").filter(s => s.length > 0)
                        // Use the last segment if it looks like a filename (has an extension)
                        const lastSegment = urlSegments[urlSegments.length - 1]
                        if (lastSegment && lastSegment.includes('.')) {
                            fileName = lastSegment
                        } else {
                            const now = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '_').slice(0, -5)
                            fileName = `downloaded-file-${now}`
                        }
                    }
                }
                
                const downloadedFile = await workspaceDir.getResource(fileName, {create: true}) as File
                
                    // Pass response.body directly - saveContents will handle streaming
                    progress.message = `Downloading ${fileName}...`
                    progress.progress = 50
                    
                    await downloadedFile.saveContents(response.body, {
                        contentType: FileContentType.BINARY
                    })
                    
                    progress.progress = 100
                    toastInfo(`File downloaded: ${fileName}`)
                } catch (err) {
                    toastError("Failed to download file: " + err)
                    throw err
                }
            })
        }
    }
})
