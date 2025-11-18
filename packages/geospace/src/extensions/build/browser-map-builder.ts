import * as esbuild from 'esbuild-wasm'
import {OnLoadArgs, OnResolveArgs} from 'esbuild-wasm'
import wasmUrl from 'esbuild-wasm/esbuild.wasm?url'
import {
    type BuildOptions,
    buildMap,
    type FileSystem,
    type GsLibFileCopier
} from "@kispace-io/gs-lib";
import {loadEnvs} from "../../geo/utils";
import {
    Directory,
    File,
    workspaceService,
    toastError,
    toastInfo,
    taskService,
    ProgressMonitor
} from "@kispace-io/appspace/api";
import {rootContext} from "@kispace-io/appspace/api";

// Lit and WebAwesome are direct dependencies of gs-lib and are bundled automatically
// No runtime imports needed - they're included when gs-lib is imported

export type { BuildOptions }

function resolveWorkspacePath(relativePath: string, basePath: string): string {
    if (relativePath.startsWith('/')) {
        return relativePath.slice(1);
    }

    const baseParts = basePath.split('/').filter(p => p);
    const pathParts = relativePath.split('/').filter(p => p);

    const isRelative = relativePath.startsWith('./') || relativePath.startsWith('../');
    
    if (isRelative || !relativePath.startsWith('/')) {
        const baseDirParts = baseParts.slice(0, -1);
        baseParts.length = 0;
        baseParts.push(...baseDirParts);
    }

    for (const part of pathParts) {
        if (part === '.') {
            continue;
        } else if (part === '..') {
            if (baseParts.length > 0) {
                baseParts.pop();
            }
        } else {
            baseParts.push(part);
        }
    }

    return baseParts.join('/');
}

let workspacePlugin = {
    name: 'workspace',
    setup(build: any) {
        build.onResolve({filter: /.*/}, (args: OnResolveArgs) => {
            if (!/^(?!https?:\/\/).+/.test(args.path)) return;
            
            let resolvedPath = args.path;
            
            // If path starts with '/', remove it to make it workspace-relative
            if (resolvedPath.startsWith('/')) {
                resolvedPath = resolvedPath.slice(1);
            }
            
            if (args.importer && args.importer !== '') {
                let importerPath = args.importer;
                if (importerPath.startsWith('virtual-workspace:')) {
                    importerPath = importerPath.slice('virtual-workspace:'.length);
                }
                
                const isRelative = args.path.startsWith('./') || args.path.startsWith('../');
                const hasPathSeparator = resolvedPath.includes('/');
                const isGeneratedBuildFile = importerPath.startsWith('__build/');
                
                // Only resolve relative to importer if:
                // 1. It's explicitly relative (./ or ../), OR
                // 2. It's a bare specifier (no '/') in user modules (not generated build files)
                if (isRelative) {
                    // Always resolve relative imports
                    resolvedPath = resolveWorkspacePath(args.path, importerPath);
                } else if (!hasPathSeparator && !isGeneratedBuildFile) {
                    // Bare specifiers (no '/') in user modules: resolve relative to importer
                    resolvedPath = resolveWorkspacePath(resolvedPath, importerPath);
                }
                // Otherwise (paths with '/' or in generated build files): treat as workspace-absolute
            }
            
            return {path: resolvedPath, namespace: "virtual-workspace"};
        })
        build.onLoad({filter: /.*/}, async (args: OnLoadArgs) => {
            if (!/^(?!https?:\/\/).+/.test(args.path)) return;
            const workspacePath = args.path
            const workspace = (await workspaceService.getWorkspace())!
            let resource = (await workspace.getResource(workspacePath))! as File
            if (!resource) {
                await workspace.listChildren(true)
                resource = (await workspace.getResource(workspacePath))! as File
            }
            if (!resource) {
                throw new Error(`Module not found: ${workspacePath}`);
            }
            const contents = await resource.getContents() as string
            return {contents: contents};
        })
    },
}

export class BrowserMapBuilder {
    private initialized = false
    private workspaceCache: any = null

    private async getWorkspace() {
        if (!this.workspaceCache) {
            this.workspaceCache = (await workspaceService.getWorkspace())!
        }
        return this.workspaceCache
    }

    public async init() {
        if (!this.initialized) {
            await esbuild.initialize({
                wasmURL: wasmUrl,
            })
            this.initialized = true
        }
    }

    /**
     * Create a browser-specific file copier that uses import() promises
     */
    private createBrowserFileCopier(): GsLibFileCopier {
        const workspace = this.getWorkspace.bind(this)
        
        // Map of source paths to import promises for Vite optimization
        const importMap: Record<string, () => Promise<any>> = {
            'dist/index.js': () => import("../../../../gs-lib/dist/index.js?raw"),
            'dist/gs-lib.css': () => import("../../../../gs-lib/dist/gs-lib.css?raw"),
            'public/pwa/staticwebapp.config.json': () => import("../../../../gs-lib/public/pwa/staticwebapp.config.json?raw"),
            'public/pwa/sw.js': () => import("../../../../gs-lib/public/pwa/sw.js?raw"),
            'public/pwa/manifest.json': () => import("../../../../gs-lib/public/pwa/manifest.json?raw"),
            'public/index.html': () => import("../../../../gs-lib/public/index.html?raw"),
            'public/pwa/assets/icons/24x24.png': () => import("../../../../gs-lib/public/pwa/assets/icons/24x24.png?url"),
            'public/pwa/assets/icons/48x48.png': () => import("../../../../gs-lib/public/pwa/assets/icons/48x48.png?url"),
            'public/pwa/assets/icons/192x192.png': () => import("../../../../gs-lib/public/pwa/assets/icons/192x192.png?url"),
            'public/pwa/assets/icons/512x512.png': () => import("../../../../gs-lib/public/pwa/assets/icons/512x512.png?url"),
            'public/pwa/assets/icons/icon_24.png': () => import("../../../../gs-lib/public/pwa/assets/icons/icon_24.png?url"),
            'public/pwa/assets/icons/icon_48.png': () => import("../../../../gs-lib/public/pwa/assets/icons/icon_48.png?url"),
            'public/pwa/assets/icons/icon_192.png': () => import("../../../../gs-lib/public/pwa/assets/icons/icon_192.png?url"),
            'public/pwa/assets/icons/icon_512.png': () => import("../../../../gs-lib/public/pwa/assets/icons/icon_512.png?url"),
        }
        
        const copyFile = async (
            srcPath: string,
            destPath: string,
            asText: boolean,
            processor?: (content: string) => string | Promise<string>
        ): Promise<void> => {
            const getImport = importMap[srcPath]
            if (!getImport) {
                throw new Error(`No import mapping for ${srcPath}. Make sure gs-lib is built.`)
            }
            
            let content: string | Blob
            try {
                const module = await getImport()
                
                if (asText) {
                    content = module.default as string
                    if (processor) {
                        content = await processor(content)
                    }
                } else {
                    const url = module.default
                    const response = await fetch(url)
                    if (!response.ok) {
                        throw new Error(`Failed to fetch: ${response.statusText}`)
                    }
                    content = await response.blob()
                }
            } catch (error) {
                throw new Error(`Failed to copy ${srcPath}: ${error}. Make sure gs-lib is built (run: npm run build --workspace=@kispace-io/gs-lib)`)
            }
            
            const ws = await workspace()
            const destFile = await ws.getResource(destPath, { create: true }) as File
            await destFile.saveContents(content)
            
            // Clear reference for GC
            content = undefined as any
        }
        
        return {
            async copyTextFile(srcPath: string, destPath: string, processor?: (content: string) => string | Promise<string>): Promise<void> {
                await copyFile(srcPath, destPath, true, processor)
            },
            async copyBinaryFile(srcPath: string, destPath: string): Promise<void> {
                await copyFile(srcPath, destPath, false)
            }
        }
    }

    public async build(options: BuildOptions, cleanAfterBuild = undefined, progressMonitor?: ProgressMonitor) {
        const updateProgress = (step: number, message: string) => {
            if (progressMonitor) {
                progressMonitor.currentStep = step
                progressMonitor.message = message
            }
        }

        // Build phase 1: Initialization
        updateProgress(0, "Initializing build system...")
        await this.init()

        const workspace = await this.getWorkspace()
        
        // Create FileSystem adapter for workspace
        const workspaceFs: FileSystem = {
            async readFile(path: string): Promise<string | Uint8Array> {
                const resource = await workspace.getResource(path) as File
                if (!resource) {
                    throw new Error(`File not found: ${path}`)
                }
                return await resource.getContents() as string
            },
            async writeFile(path: string, content: string | Uint8Array): Promise<void> {
                const file = await workspace.getResource(path, { create: true }) as File
                await file.saveContents(content)
            },
            async ensureDir(path: string): Promise<void> {
                await workspace.getResource(path.endsWith('/') ? path : path + '/', { create: true })
            },
            async exists(path: string): Promise<boolean> {
                const resource = await workspace.getResource(path)
                return resource !== null
            },
            async deleteDir(path: string): Promise<void> {
                const resource = await workspace.getResource(path)
                if (resource instanceof Directory) {
                    await resource.delete()
                }
            }
        }
        
        // Create browser-specific file copier (uses import() for Vite optimization)
        const gsLibCopier = this.createBrowserFileCopier()
        
        // Copy assets helper
        const copyAssets = async (_fs: FileSystem, outputDir: string) => {
            const assetDir = await workspace.getResource("assets") as Directory
            if (assetDir) {
                await assetDir.copyTo(`${outputDir}/assets`)
            }
        }
        
        // Use unified build function
        await buildMap(
            options,
            workspaceFs,
            workspacePlugin,
            esbuild, // Pass esbuild-wasm instance for browser
            {
                gsLibCopier,
                cleanAfterBuild,
                copyAssets
            },
            updateProgress
        )

        // Finalize
        updateProgress(0, "Finalizing build...")
        workspace.touch()
        
        if (progressMonitor) {
            progressMonitor.message = "Build completed successfully!"
        }
    }

    public async buildMapFile(mapFile: File, envPath?: string) {
        const gsMap = JSON.parse(await mapFile.getContents())
        const env = await loadEnvs(envPath || ".env")
        env["BUILD_TIME"] = new Date()
        taskService.runAsync("Building map", async (progressMonitor) => {
            await browserMapBuilder.build({
                title: mapFile.getName(),
                gsMap: gsMap,
                env: env,
                version: env["VERSION"] || "0.0.0"
            }, undefined, progressMonitor)
        })
            .then(() => {
                toastInfo("🚀 Map files copied to 'dist' folder in your workspace!")
            }).catch(err => {
            toastError(`💥 Map could not be built: ${err}`)
        })
    }
}

export const browserMapBuilder = new BrowserMapBuilder();
rootContext.put("buildService", browserMapBuilder);

