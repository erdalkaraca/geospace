import * as esbuild from 'esbuild-wasm'
import {OnLoadArgs, OnResolveArgs} from 'esbuild-wasm'
import wasmUrl from 'esbuild-wasm/esbuild.wasm?url'
import {GsMap, GsScript} from "@kispace-io/gs-lib";
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


const appJs = (vars: any) => {
    // Collect all script paths from controls and overlays
    const allScripts = [...(vars.gsMap.controls || []), ...(vars.gsMap.overlays || [])]
    const scriptPaths = allScripts
        .map((script: GsScript) => script.src)
        .filter((src: string) => src) // Filter out empty src
    
    // Generate imports for all scripts so esbuild can bundle them
    // Use dynamic import() so they're bundled but not executed until needed
    const scriptImports = scriptPaths.map((src: string, index: number) => {
        // Escape the src for use in template string
        const escapedSrc = src.replace(/`/g, '\\`').replace(/\$/g, '\\$')
        return `const script${index} = () => import('${escapedSrc}')`
    })
    
    // Create a modules map that maps src to the import function
    const modulesMap = scriptPaths.map((src: string, index: number) => {
        const escapedSrc = JSON.stringify(src)
        return `${escapedSrc}: script${index}`
    }).join(',\n        ')
    
    return `
import {gsLib} from "${vars.gsLibPath}"

${scriptImports.join('\n')}

export const renderMap = (mapContainerSelector) => {
    const modules = {
        ${modulesMap}
    }
    return gsLib({
        containerSelector: mapContainerSelector,
        gsMap: ${JSON.stringify(vars.gsMap)},
        mapOptions: {
            controls: {zoom: false, attribution: false}
        },
        env: ${JSON.stringify(vars.env || {})},
        modules: modules
    })
}
`
}

export interface BuildOptions {
    title: string,
    gsMap: GsMap,
    env: any,
    version: string
}

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

export class BuildService {
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

    private async deleteDirectoryIfExists(path: string) {
        const workspace = await this.getWorkspace()
        const resource = await workspace.getResource(path)
        if (resource) {
            await (resource as Directory).delete()
        }
    }

    /**
     * Helper function to copy files from gs-lib to workspace.
     * Handles memory management and error handling consistently.
     * 
     * @param importPromise - Promise from import() call (e.g., import("../../../../gs-lib/dist/index.js?raw")) so Vite can analyze it
     * @param destPath - Destination path in workspace
     * @param options - Optional configuration
     * @param options.processor - Optional function to process content before saving (for text files)
     * @param options.binary - If true, uses ?url and fetches as blob; if false, uses ?raw for text
     * @param options.errorContext - Context for error messages
     */
    private async copyFileFromGsLib(
        importPromise: Promise<any>,
        destPath: string,
        options: {
            processor?: (content: string) => string | Promise<string>;
            binary?: boolean;
            errorContext?: string;
        } = {}
    ): Promise<void> {
        const workspace = await this.getWorkspace()
        const { processor, binary = false, errorContext = "file" } = options
        
        // Use block scope to limit lifetime of large variables
        {
            let content: string | Blob;
            
            try {
                const module = await importPromise
                
                if (binary) {
                    // For binary files, module.default is a URL - fetch it
                    const url = module.default
                    const response = await fetch(url)
                    if (!response.ok) {
                        throw new Error(`Failed to fetch: ${response.statusText}`)
                    }
                    content = await response.blob()
                } else {
                    // For text files, module.default is the content
                    content = module.default as string
                    
                    // Process content if processor provided
                    if (processor) {
                        content = await processor(content as string)
                    }
                }
                
                // Save to workspace
                const destFile = await workspace.getResource(destPath, { create: true }) as File
                await destFile.saveContents(content)
            } catch (error) {
                throw new Error(`Failed to copy ${errorContext}: ${error}. Make sure gs-lib is built (run: npm run build --workspace=@kispace-io/gs-lib)`)
            } finally {
                // Explicitly clear reference to allow garbage collection
                content = undefined as any;
            }
        }
    }

    private async cleanBuildDirectories(updateProgress: (step: number, message: string) => void, currentStep: { value: number }) {
        updateProgress(++currentStep.value, "Cleaning build directories...")
        await Promise.all([
            this.deleteDirectoryIfExists("__build"),
            this.deleteDirectoryIfExists("dist")
        ])
    }

    private async copyGsLibPackage(updateProgress: (step: number, message: string) => void, currentStep: { value: number }) {
        updateProgress(++currentStep.value, "Copying gs-lib package...")
        
        // Ensure directories exist first to avoid race conditions
        const workspace = await this.getWorkspace()
        await Promise.all([
            workspace.getResource("__build/gs-lib/", { create: true }),
            workspace.getResource("dist/", { create: true })
        ])
        
        // Copy files in parallel
        await Promise.all([
            this.copyFileFromGsLib(import("../../../../gs-lib/dist/index.js?raw"), "__build/gs-lib/index.js", { errorContext: "gs-lib package" }),
            this.copyFileFromGsLib(import("../../../../gs-lib/dist/gs-lib.css?raw"), "dist/app.css", { errorContext: "gs-lib CSS" })
        ])
    }

    private async copyPwaCoreFiles(vars: any, updateProgress: (step: number, message: string) => void, currentStep: { value: number }) {
        updateProgress(++currentStep.value, "Copying PWA core files...")
        await this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/staticwebapp.config.json?raw"), "dist/staticwebapp.config.json", {
            errorContext: "PWA config"
        })
        
        // Process and copy service worker
        updateProgress(++currentStep.value, "Processing service worker...")
        await this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/sw.js?raw"), "dist/sw.js", {
            processor: (content: string) => content.replace(/\$PWA_VERSION/g, vars["version"]),
            errorContext: "service worker"
        })
        
        // Process and copy manifest
        updateProgress(++currentStep.value, "Creating manifest file...")
        await this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/manifest.json?raw"), "dist/manifest.json", {
            processor: (content: string) => {
                const manifest = JSON.parse(content)
                manifest.name = vars["title"]
                manifest.short_name = vars["title"]
                manifest.description = vars["title"]
                manifest.version = vars["version"]
                return JSON.stringify(manifest, null, 2)
            },
            errorContext: "manifest"
        })
        
        // Copy PWA icons in parallel
        // Ensure directory exists first to avoid race conditions when creating files in parallel
        updateProgress(++currentStep.value, "Copying PWA icons...")
        const workspace = await this.getWorkspace()
        await workspace.getResource("dist/assets/icons/", { create: true })
        
        await Promise.all([
            this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/assets/icons/24x24.png?url"), "dist/assets/icons/24x24.png", { binary: true, errorContext: "icon 24x24.png" }),
            this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/assets/icons/48x48.png?url"), "dist/assets/icons/48x48.png", { binary: true, errorContext: "icon 48x48.png" }),
            this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/assets/icons/192x192.png?url"), "dist/assets/icons/192x192.png", { binary: true, errorContext: "icon 192x192.png" }),
            this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/assets/icons/512x512.png?url"), "dist/assets/icons/512x512.png", { binary: true, errorContext: "icon 512x512.png" }),
            this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/assets/icons/icon_24.png?url"), "dist/assets/icons/icon_24.png", { binary: true, errorContext: "icon icon_24.png" }),
            this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/assets/icons/icon_48.png?url"), "dist/assets/icons/icon_48.png", { binary: true, errorContext: "icon icon_48.png" }),
            this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/assets/icons/icon_192.png?url"), "dist/assets/icons/icon_192.png", { binary: true, errorContext: "icon icon_192.png" }),
            this.copyFileFromGsLib(import("../../../../gs-lib/public/pwa/assets/icons/icon_512.png?url"), "dist/assets/icons/icon_512.png", { binary: true, errorContext: "icon icon_512.png" })
        ])
    }

    private async copyWorkspaceAssets(updateProgress: (step: number, message: string) => void, currentStep: { value: number }) {
        updateProgress(++currentStep.value, "Copying workspace assets...")
        const workspace = await this.getWorkspace()
        const assetDir = await workspace.getResource("assets") as Directory
        if (assetDir) {
            await assetDir.copyTo("dist/assets")
        }
    }

    private async generateBuildFiles(buildAppJs: string, distIndexHtml: string, vars: any, updateProgress: (step: number, message: string) => void, currentStep: { value: number }) {
        updateProgress(++currentStep.value, "Generating application code...")
        await this.createFile(buildAppJs, appJs, vars)
        updateProgress(++currentStep.value, "Generating HTML file...")
        
        // Copy and process HTML template from gs-lib
        await this.copyFileFromGsLib(import("../../../../gs-lib/public/index.html?raw"), distIndexHtml, {
            processor: (content: string) => content.replace(/\$TITLE/g, vars["title"]),
            errorContext: "index HTML"
        })
    }

    private async bundleCode(buildAppJs: string, distAppJs: string, updateProgress: (step: number, message: string) => void, currentStep: { value: number }) {
        updateProgress(++currentStep.value, "Bundling and minifying code...")
        const workspace = await this.getWorkspace()
        const outFile = await workspace.getResource(distAppJs, { create: true }) as File
        const result = await esbuild.build({
            entryPoints: [buildAppJs],
            bundle: true,
            outfile: "app.js",
            format: "esm",
            minify: true,
            plugins: [workspacePlugin],
            // Runtime dependencies (lit, webawesome) are imported from CDN in the generated code
            // Mark CDN URLs and node_modules as external - they'll be loaded at runtime
            external: [
                // CDN URLs are already external (imported as URLs)
                // node_modules packages should be external since we're using CDN
            ],
            // Bundle @kispace-io/gs-lib, but keep other packages external
            packages: 'bundle'
        })
        updateProgress(++currentStep.value, "Saving bundled output...")
        await outFile.saveContents(result.outputFiles![0].contents)
    }

    private async cleanupBuild(cleanAfterBuild: boolean | undefined, updateProgress: (step: number, message: string) => void, currentStep: { value: number }) {
        if (cleanAfterBuild === undefined || cleanAfterBuild) {
            updateProgress(++currentStep.value, "Cleaning up temporary files...")
            await this.deleteDirectoryIfExists("__build")
        }
    }

    public async build(options: BuildOptions, cleanAfterBuild = undefined, progressMonitor?: ProgressMonitor) {
        const updateProgress = (step: number, message: string) => {
            if (progressMonitor) {
                progressMonitor.currentStep = step
                progressMonitor.message = message
            }
        }

        const totalSteps = 22  // Maximum steps (includes conditional cleanup)
        if (progressMonitor) {
            progressMonitor.totalSteps = totalSteps
        }

        const currentStep = { value: 0 }

        // Build phase 1: Initialization
        updateProgress(++currentStep.value, "Initializing build system...")
        await this.init()

        const buildAppJs = "__build/app.js"
        const distIndexHtml = "dist/index.html"
        const distAppJs = "dist/app.js"

        // Build phase 2: Cleanup
        await this.cleanBuildDirectories(updateProgress, currentStep)

        // Build phase 3: Copy gs-lib package to workspace
        await this.copyGsLibPackage(updateProgress, currentStep)

        const vars = {
            ...options,
            gsLibPath: "__build/gs-lib/index.js"
        }
        
        // Build phase 4: Copy PWA core files from gs-lib (includes service worker, manifest, icons)
        await this.copyPwaCoreFiles(vars, updateProgress, currentStep)

        // Build phase 6: Copy assets
        await this.copyWorkspaceAssets(updateProgress, currentStep)

        // Build phase 7: Generate build files
        await this.generateBuildFiles(buildAppJs, distIndexHtml, vars, updateProgress, currentStep)

        // Build phase 8: Bundle code
        await this.bundleCode(buildAppJs, distAppJs, updateProgress, currentStep)

        // Build phase 9: Cleanup
        await this.cleanupBuild(cleanAfterBuild, updateProgress, currentStep)

        // Build phase 10: Finalize
        updateProgress(++currentStep.value, "Finalizing build...")
        const workspace = await this.getWorkspace()
        workspace.touch()
        
        if (progressMonitor) {
            progressMonitor.message = "Build completed successfully!"
        }
    }

    private async createFile(fileName: string, contentCreator: (vars: any) => string, vars: {}) {
        const workspace = await this.getWorkspace()
        const entryFile = (await workspace.getResource(fileName, {
            create: true
        }))! as File
        await entryFile.saveContents(contentCreator(vars))
    }

    public async buildMapFile(mapFile: File, envPath?: string) {
        const gsMap = JSON.parse(await mapFile.getContents())
        const env = await loadEnvs(envPath || ".env")
        env["BUILD_TIME"] = new Date()
        taskService.runAsync("Building map", async (progressMonitor) => {
            await buildService.build({
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

export const buildService = new BuildService();
rootContext.put("buildService", buildService);