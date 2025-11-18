import { html, render } from "@kispace-io/appspace/externals/lit-exports";
import {GsMapEditor} from "../../geo/gs-map-editor";
import {buildService} from "./buildservice";
import {
    activePartSignal,
    activeSelectionSignal,
    File,
    Directory,
    workspaceService,
    toastInfo,
    toastError,
    taskService,
    ProgressMonitor,
    type CommandRegistry,
    contributionRegistry
} from "@kispace-io/appspace/api";

const GEOSPACE_EXTENSION = ".geospace";
const ENV_EXTENSION = ".env";

// Folders to skip when collecting files (case-insensitive)
const SKIP_FOLDERS = [
    "node_modules",
    ".git",
    "dist",
    "build",
    ".next",
    ".cache",
    ".vscode",
    ".idea",
    "coverage",
    ".nyc_output",
    ".parcel-cache",
    ".turbo",
    ".yarn",
    ".pnp",
    ".svelte-kit",
    ".nuxt",
    ".output",
    "target",
    "out",
    ".temp",
    ".tmp"
];

function shouldSkipDirectory(dirName: string): boolean {
    const lowerName = dirName.toLowerCase();
    return SKIP_FOLDERS.some(skipFolder => lowerName === skipFolder.toLowerCase());
}

async function collectFilesByExtension(
    directory: Directory, 
    extension: string, 
    progressMonitor?: ProgressMonitor,
    processedCount: { value: number } = { value: 0 }
): Promise<string[]> {
    const files: string[] = [];
    const children = await directory.listChildren(true);
    
    for (const child of children) {
        processedCount.value++;
        const childPath = child.getWorkspacePath();
        
        if (progressMonitor) {
            progressMonitor.message = `Scanning: ${childPath}`;
            // Use current step to show progress, but don't set totalSteps since we don't know the total
            progressMonitor.currentStep = processedCount.value;
        }
        
        if (child instanceof File && child.getName().toLowerCase().endsWith(extension)) {
            files.push(childPath);
        } else if (child instanceof Directory) {
            // Skip directories that match the skip list
            if (!shouldSkipDirectory(child.getName())) {
                const subFiles = await collectFilesByExtension(child, extension, progressMonitor, processedCount);
                files.push(...subFiles);
            }
        }
    }
    
    return files.sort();
}

function getDialogContainer(): HTMLElement {
    let container = document.getElementById('global-dialog-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'global-dialog-container';
        document.body.appendChild(container);
    }
    return container;
}

async function showFileSelectionDialog(
    geospaceFiles: string[],
    envFiles: string[],
    defaultGeospace?: string,
    defaultEnv?: string
): Promise<{ geospaceFile: string | null, envFile: string | null }> {
    return new Promise((resolve) => {
        const container = getDialogContainer();
        let selectedGeospace = defaultGeospace || "";
        let selectedEnv = defaultEnv || "";

        const cleanup = () => {
            render(html``, container);
        };

        const handleConfirm = () => {
            cleanup();
            resolve({
                geospaceFile: selectedGeospace || null,
                envFile: selectedEnv || null
            });
        };

        const handleCancel = () => {
            cleanup();
            resolve({ geospaceFile: null, envFile: null });
        };

        const template = html`
            <wa-dialog label="Select Files" open @wa-request-close=${handleCancel}>
                <style>
                    .dialog-content {
                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;
                        padding: 1rem;
                        min-width: 400px;
                    }
                    
                    .dialog-field {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    
                    .dialog-field label {
                        font-weight: 500;
                        color: var(--wa-color-neutral-700);
                    }
                    
                    .dialog-actions {
                        display: flex;
                        gap: 0.5rem;
                        justify-content: flex-end;
                        margin-top: 0.5rem;
                    }
                </style>
                
                <div class="dialog-content">
                    <div class="dialog-field">
                        <label>Geospace File:</label>
                        <wa-select 
                            value="${selectedGeospace}"
                            @change=${(e: Event) => {
                                selectedGeospace = (e.target as any).value;
                            }}>
                            <wa-option value="">None</wa-option>
                            ${geospaceFiles.map(file => html`
                                <wa-option value="${file}">${file}</wa-option>
                            `)}
                        </wa-select>
                    </div>
                    
                    <div class="dialog-field">
                        <label>Environment File:</label>
                        <wa-select 
                            value="${selectedEnv}"
                            @change=${(e: Event) => {
                                selectedEnv = (e.target as any).value;
                            }}>
                            <wa-option value="">None (use .env)</wa-option>
                            ${envFiles.map(file => html`
                                <wa-option value="${file}">${file}</wa-option>
                            `)}
                        </wa-select>
                    </div>
                    
                    <div class="dialog-actions">
                        <wa-button variant="default" @click=${handleCancel}>
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click=${handleConfirm}>
                            OK
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `;

        render(template, container);
    });
}

export default ({commandRegistry}: { commandRegistry: CommandRegistry }) => {
    commandRegistry.registerAll({
        command: {
            "id": "build_map",
            "name": "Build map",
            "description": "Builds a publishable map from a .geospace file",
            "parameters": [
                {
                    "name": "file",
                    "description": "Path to the .geospace file relative to workspace root. If not provided, uses the active map editor or selected file.",
                    "required": false
                },
                {
                    "name": "env",
                    "description": "Path to the environment file relative to workspace root (e.g., 'dev.env', 'prod.env'). Defaults to '.env' if not specified.",
                    "required": false
                },
                {
                    "name": "ask",
                    "description": "If true, prompts for missing files (map file or env file) when not provided.",
                    "required": false
                }
            ]
        },
        handler: {
            execute: async (context: any) => {
                let envPath = context.params?.["env"] as string | undefined;
                let filePath = context.params?.["file"] as string | undefined;
                const ask = context.params?.["ask"] === true || context.params?.["ask"] === "true";
                
                const workspace = await workspaceService.getWorkspace();
                if (!workspace) {
                    toastError("No workspace available");
                    return;
                }
                
                let mapFile: File | undefined;
                
                if (filePath) {
                    const resource = await workspace.getResource(filePath);
                    if (!resource || !(resource instanceof File)) {
                        toastError(`File not found: ${filePath}`);
                        return;
                    }
                    if (!resource.getName().toLowerCase().endsWith(GEOSPACE_EXTENSION)) {
                        toastError(`File is not a .geospace file: ${filePath}`);
                        return;
                    }
                    mapFile = resource;
                } else {
                    const gsMapEditor = activePartSignal.get() as GsMapEditor;
                    if (gsMapEditor && gsMapEditor.input) {
                        if (gsMapEditor.isDirty()) {
                            await gsMapEditor.save();
                            toastInfo("Map saved automatically to run build.");
                        }
                        mapFile = gsMapEditor.input.data as File;
                    } else {
                        const selection = activeSelectionSignal.get();
                        if (selection instanceof File && selection.getName().toLowerCase().endsWith(GEOSPACE_EXTENSION)) {
                            mapFile = selection;
                        }
                    }
                }
                
                if (ask && (!mapFile || !envPath)) {
                    let geospaceFiles: string[] = [];
                    let envFiles: string[] = [];
                    
                    // Collect files with progress reporting
                    await taskService.runAsync("Collecting files", async (progressMonitor) => {
                        progressMonitor.message = "Scanning workspace for .geospace files...";
                        const geospaceCount = { value: 0 };
                        geospaceFiles = await collectFilesByExtension(workspace, GEOSPACE_EXTENSION, progressMonitor, geospaceCount);
                        
                        progressMonitor.message = "Scanning workspace for .env files...";
                        progressMonitor.currentStep = 0;
                        const envCount = { value: 0 };
                        envFiles = await collectFilesByExtension(workspace, ENV_EXTENSION, progressMonitor, envCount);
                        
                        progressMonitor.message = `Found ${geospaceFiles.length} .geospace files and ${envFiles.length} .env files`;
                    });
                    
                    const currentGeospacePath = mapFile?.getWorkspacePath();
                    const result = await showFileSelectionDialog(
                        geospaceFiles,
                        envFiles,
                        currentGeospacePath,
                        envPath || ".env"
                    );
                    
                    if (result.geospaceFile === null && result.envFile === null) {
                        return;
                    }
                    
                    if (result.geospaceFile && !mapFile) {
                        filePath = result.geospaceFile;
                        const resource = await workspace.getResource(filePath);
                        if (!resource || !(resource instanceof File)) {
                            toastError(`File not found: ${filePath}`);
                            return;
                        }
                        if (!resource.getName().toLowerCase().endsWith(GEOSPACE_EXTENSION)) {
                            toastError(`File is not a .geospace file: ${filePath}`);
                            return;
                        }
                        mapFile = resource;
                    }
                    
                    if (result.envFile !== null) {
                        envPath = result.envFile || ".env";
                    }
                } else if (!mapFile) {
                    toastError("No map editor active, no .geospace file selected, and no file path provided");
                    return;
                }
                
                if (!mapFile) {
                    toastError("No map file available");
                    return;
                }
                
                return buildService.buildMapFile(mapFile, envPath);
            }
        },
        contribution: {
            target: "toolbar:map-editor",
            icon: "hammer",
            label: "Build map",
            disabled: () => {
                return !(activePartSignal.get() instanceof GsMapEditor)
            }
        }
    })

    contributionRegistry.registerContribution("contextmenu:filebrowser", {
        command: "build_map",
        icon: "hammer",
        label: "Build map",
        params: { ask: true },
        disabled: () => {
            const selection = activeSelectionSignal.get();
            if (!(selection instanceof File)) {
                return true;
            }
            return !selection.getName().toLowerCase().endsWith(GEOSPACE_EXTENSION);
        }
    })
}