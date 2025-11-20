import {registerAll, type ExecutionContext} from "../core/commandregistry";
import {File, workspaceService, Directory} from "../core/filesys";
import {toastError, toastInfo} from "../core/toast";
import {promptDialog, confirmDialog} from "../dialogs";
import {activeSelectionSignal} from "../core/appstate";
import {editorRegistry, EditorContentProvider} from "../core/editorregistry";
import logger from "../core/logger";

async function getWorkspaceAndPath(params: any, requirePath: boolean = true): Promise<{workspace: Directory, path: string} | null> {
    const workspace = await workspaceService.getWorkspace()
    if (!workspace) {
        return null
    }

    const path = params?.path
    if (requirePath && !path) {
        return null
    }

    return { workspace, path: path || '' }
}

/**
 * Type guard to check if an editor implements EditorContentProvider
 */
function isEditorContentProvider(editor: any): editor is EditorContentProvider {
    return editor &&
        typeof editor.getContent === 'function' &&
        typeof editor.getSelection === 'function' &&
        typeof editor.getSnippet === 'function' &&
        typeof editor.getLanguage === 'function' &&
        typeof editor.getFilePath === 'function';
}

/**
 * Helper to get a resource from path or active selection
 */
async function getResourceFromContext(context: ExecutionContext, params?: any): Promise<any> {
    let resource = undefined
    const path = params?.path || context.params?.["path"]
    
    if (path) {
        const workspaceDir = await workspaceService.getWorkspace()
        if (workspaceDir) {
            resource = await workspaceDir.getResource(path)
        }
    }

    if (!resource) {
        resource = activeSelectionSignal.get()
    }

    return resource
}

/**
 * Helper to read text file contents with error handling
 */
async function readTextFile(file: File): Promise<string | null> {
    try {
        const contents = await file.getContents()
        if (typeof contents !== 'string') {
            toastError("File is not a text file")
            return null
        }
        return contents
    } catch (err: any) {
        toastError(`Failed to read file: ${err.message}`)
        return null
    }
}

/**
 * Helper to create null editor response
 */
function createNullEditorResponse(includeCursorLine: boolean = false) {
    const base = {
        filePath: null,
        language: null
    }
    if (includeCursorLine) {
        return { ...base, snippet: null, cursorLine: null }
    }
    return base
}

async function getWorkspaceAndFile(params: any, requirePath: boolean = true): Promise<{workspace: Directory, path: string, file: File} | null> {
    const result = await getWorkspaceAndPath(params, requirePath)
    if (!result) {
        return null
    }

    const { workspace, path } = result

    if (!path) {
        return null
    }

    try {
        const resource = await workspace.getResource(path)
        if (!resource || !(resource instanceof File)) {
            return null
        }

        return { workspace, path, file: resource }
    } catch (err: any) {
        return null
    }
}

registerAll({
    command: {
        "id": "create_file",
        "name": "Create new file",
        "description": "Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",
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
        ],
        "output": [
            {
                "name": "path",
                "description": "the path of the created file"
            }
        ]
    },
    handler: {
        execute: async ({params}: any) => {
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

            const result = await getWorkspaceAndPath({path}, true)
            if (!result) {
                return
            }
            const { workspace: workspaceDir } = result

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
                logger.info("File created: " + path)
            }

            return path
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
            const resource = await getResourceFromContext(context)
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
            const resource = await getResourceFromContext(context)
            if (!resource) {
                toastError("No resource to delete provided!")
                return
            }
            const path = resource.getWorkspacePath()
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
            const result = await getWorkspaceAndFile({path: context.params?.["path"]})
            if (!result) {
                return
            }

            const { file } = result
            await editorRegistry.loadEditor(file)
        }
    }
})

registerAll({
    command: {
        "id": "head_file",
        "name": "Head - Show first lines",
        "description": "Shows the first N lines of a file",
        "parameters": [
            {
                "name": "path",
                "description": "the path of the file to read",
                "required": true
            },
            {
                "name": "lines",
                "description": "number of lines to show from the beginning (default: 10)",
                "type": "number",
                "required": false
            }
        ],
        "output": [
            {
                "name": "content",
                "description": "the first N lines of the file"
            }
        ]
    },
    handler: {
        execute: async ({params}: any) => {
            const result = await getWorkspaceAndFile(params)
            if (!result) {
                return
            }

            const { file } = result
            const numLines = params?.lines ? parseInt(params.lines, 10) : 10
            if (isNaN(numLines) || numLines < 1) {
                toastError("Number of lines must be a positive integer")
                return
            }

            const contents = await readTextFile(file)
            if (!contents) {
                return
            }

            const lines = contents.split('\n')
            const headLines = lines.slice(0, numLines).join('\n')
            return headLines
        }
    }
})

registerAll({
    command: {
        "id": "tail_file",
        "name": "Tail - Show last lines",
        "description": "Shows the last N lines of a file",
        "parameters": [
            {
                "name": "path",
                "description": "the path of the file to read",
                "required": true
            },
            {
                "name": "lines",
                "description": "number of lines to show from the end (default: 10)",
                "type": "number",
                "required": false
            }
        ],
        "output": [
            {
                "name": "content",
                "description": "the last N lines of the file"
            }
        ]
    },
    handler: {
        execute: async ({params}: any) => {
            const result = await getWorkspaceAndFile(params)
            if (!result) {
                return
            }

            const { file } = result
            const numLines = params?.lines ? parseInt(params.lines, 10) : 10
            if (isNaN(numLines) || numLines < 1) {
                toastError("Number of lines must be a positive integer")
                return
            }

            const contents = await readTextFile(file)
            if (!contents) {
                return
            }

            const lines = contents.split('\n')
            const tailLines = lines.slice(-numLines).join('\n')
            return tailLines
        }
    }
})

registerAll({
    command: {
        "id": "cat_file",
        "name": "Cat - Show file contents",
        "description": "Shows the complete contents of a file",
        "parameters": [
            {
                "name": "path",
                "description": "the path of the file to read",
                "required": true
            }
        ],
        "output": [
            {
                "name": "content",
                "description": "the complete contents of the file"
            }
        ]
    },
    handler: {
        execute: async ({params}: any) => {
            const result = await getWorkspaceAndFile(params)
            if (!result) {
                return
            }

            const { file } = result

            return await readTextFile(file)
        }
    }
})

registerAll({
    command: {
        "id": "wc_file",
        "name": "Word count",
        "description": "Counts lines, words, and characters in a file",
        "parameters": [
            {
                "name": "path",
                "description": "the path of the file to analyze",
                "required": true
            }
        ],
        "output": [
            {
                "name": "lines",
                "description": "number of lines in the file"
            },
            {
                "name": "words",
                "description": "number of words in the file"
            },
            {
                "name": "characters",
                "description": "number of characters in the file"
            }
        ]
    },
    handler: {
        execute: async ({params}: any) => {
            const result = await getWorkspaceAndFile(params)
            if (!result) {
                return
            }

            const { file } = result

            const contents = await readTextFile(file)
            if (!contents) {
                return
            }

            const lines = contents.split('\n')
            const lineCount = lines.length
            const wordCount = contents.trim() === '' ? 0 : contents.trim().split(/\s+/).filter(w => w.length > 0).length
            const charCount = contents.length

            return {
                lines: lineCount,
                words: wordCount,
                characters: charCount
            }
        }
    }
})

registerAll({
    command: {
        "id": "file_exists",
        "name": "Check if file exists",
        "description": "Checks if a file exists at the given path",
        "parameters": [
            {
                "name": "path",
                "description": "the path of the file to check, relative to the workspace",
                "required": true
            }
        ],
        "output": [
            {
                "name": "exists",
                "description": "true if the file exists, false otherwise"
            }
        ]
    },
    handler: {
        execute: async ({params}: any) => {
            const result = await getWorkspaceAndPath(params)
            if (!result) {
                return false
            }

            const { workspace, path } = result

            try {
                const resource = await workspace.getResource(path)
                return resource instanceof File
            } catch (err: any) {
                return false
            }
        }
    }
})

async function collectFilesRecursive(directory: Directory): Promise<string[]> {
    const files: string[] = []
    const children = await directory.listChildren(true)
    
    for (const child of children) {
        if (child instanceof File) {
            files.push(child.getWorkspacePath())
        } else if (child instanceof Directory) {
            const subFiles = await collectFilesRecursive(child)
            files.push(...subFiles)
        }
    }
    
    return files
}

registerAll({
    command: {
        "id": "ls",
        "name": "List files",
        "description": "Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",
        "parameters": [
            {
                "name": "path",
                "description": "the path of the directory to list, relative to the workspace. If not provided, uses workspace root",
                "required": false
            },
            {
                "name": "recursive",
                "description": "whether to recursively traverse all subdirectories",
                "type": "boolean",
                "required": false
            }
        ],
        "output": [
            {
                "name": "files",
                "description": "array of file objects with path and size information"
            }
        ]
    },
    handler: {
        execute: async ({params}: any) => {
            const result = await getWorkspaceAndPath(params, false)
            if (!result) {
                toastError("No workspace available")
                return []
            }

            const { workspace, path } = result
            const recursive = params?.recursive === true || params?.recursive === "true"

            try {
                let targetDir: Directory = workspace
                
                if (path) {
                    const resource = await workspace.getResource(path)
                    if (!resource) {
                        toastError(`Path not found: ${path}`)
                        return []
                    }
                    if (!(resource instanceof Directory)) {
                        toastError(`Path is not a directory: ${path}`)
                        return []
                    }
                    targetDir = resource
                }

                if (recursive) {
                    const files = await collectFilesRecursive(targetDir)
                    const result = []
                    for (const filePath of files) {
                        const file = await workspace.getResource(filePath)
                        if (file instanceof File) {
                            const size = await file.size()
                            result.push({
                                path: filePath,
                                size: size
                            })
                        }
                    }
                    return result
                } else {
                    const children = await targetDir.listChildren(true)
                    const result = []
                    for (const child of children) {
                        if (child instanceof File) {
                            const size = await child.size()
                            result.push({
                                path: child.getWorkspacePath(),
                                size: size
                            })
                        }
                    }
                    return result
                }
            } catch (err: any) {
                toastError(`Failed to list files: ${err.message}`)
                return []
            }
        }
    }
})

registerAll({
    command: {
        "id": "get_active_editor_content",
        "name": "Get active editor content",
        "description": "Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",
        "parameters": [],
        "output": [
            {
                "name": "content",
                "description": "the complete contents of the active editor, or null if no editor is active"
            },
            {
                "name": "filePath",
                "description": "the workspace path of the file in the active editor, or null if no editor is active"
            },
            {
                "name": "language",
                "description": "the programming language of the active editor, or null if no editor is active"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            const activeEditor = context.activeEditor as any
            if (!isEditorContentProvider(activeEditor)) {
                return { ...createNullEditorResponse(), content: null }
            }

            try {
                return {
                    content: activeEditor.getContent(),
                    filePath: activeEditor.getFilePath(),
                    language: activeEditor.getLanguage()
                }
            } catch (err: any) {
                return { ...createNullEditorResponse(), content: null }
            }
        }
    }
})

registerAll({
    command: {
        "id": "get_active_editor_selection",
        "name": "Get active editor selection",
        "description": "Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",
        "parameters": [],
        "output": [
            {
                "name": "selection",
                "description": "the selected text in the active editor, or null if no selection exists or no editor is active"
            },
            {
                "name": "filePath",
                "description": "the workspace path of the file in the active editor, or null if no editor is active"
            },
            {
                "name": "language",
                "description": "the programming language of the active editor, or null if no editor is active"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            const activeEditor = context.activeEditor as any
            if (!isEditorContentProvider(activeEditor)) {
                return { ...createNullEditorResponse(), selection: null }
            }

            try {
                return {
                    selection: activeEditor.getSelection(),
                    filePath: activeEditor.getFilePath(),
                    language: activeEditor.getLanguage()
                }
            } catch (err: any) {
                return { ...createNullEditorResponse(), selection: null }
            }
        }
    }
})

registerAll({
    command: {
        "id": "get_active_editor_snippet",
        "name": "Get active editor snippet around cursor",
        "description": "Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",
        "parameters": [
            {
                "name": "lines",
                "description": "number of lines to include before and after the cursor position (default: 5)",
                "type": "number",
                "required": false
            }
        ],
        "output": [
            {
                "name": "snippet",
                "description": "the code snippet with n lines before and after the cursor, or null if no editor is active"
            },
            {
                "name": "filePath",
                "description": "the workspace path of the file in the active editor, or null if no editor is active"
            },
            {
                "name": "language",
                "description": "the programming language of the active editor, or null if no editor is active"
            },
            {
                "name": "cursorLine",
                "description": "the line number where the cursor is positioned (1-based), or null if no editor is active"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            const activeEditor = context.activeEditor as any
            if (!isEditorContentProvider(activeEditor)) {
                return createNullEditorResponse(true)
            }

            try {
                const numLines = context.params?.lines ? parseInt(context.params.lines, 10) : 5
                if (isNaN(numLines) || numLines < 0) {
                    return createNullEditorResponse(true)
                }

                const snippetResult = activeEditor.getSnippet(numLines)
                if (!snippetResult) {
                    return createNullEditorResponse(true)
                }

                return {
                    snippet: snippetResult.snippet,
                    filePath: activeEditor.getFilePath(),
                    language: activeEditor.getLanguage(),
                    cursorLine: snippetResult.cursorLine
                }
            } catch (err: any) {
                return createNullEditorResponse(true)
            }
        }
    }
})

