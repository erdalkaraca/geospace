import {GsMap, GsScript} from './gs-model'

// esbuild types (without importing the implementation to avoid bundling Node.js version in browser)
type EsbuildPlugin = {
    name: string
    setup: (build: any) => void
}

// Type for esbuild instance (works with both esbuild and esbuild-wasm)
type EsbuildInstance = {
    build: (options: any) => Promise<{ 
        outputFiles?: Array<{ path?: string; contents: Uint8Array }>;
        metafile?: {
            outputs?: Record<string, { entryPoint?: string; [key: string]: any }>;
            [key: string]: any;
        };
    }>
}

export interface BuildOptions {
    title: string,
    gsMap: GsMap,
    env: any,
    version: string
}

export interface FileSystem {
    readFile(path: string): Promise<string | Uint8Array>
    writeFile(path: string, content: string | Uint8Array): Promise<void>
    ensureDir(path: string): Promise<void>
    exists(path: string): Promise<boolean>
    deleteDir?(path: string): Promise<void>
}

export interface ProgressCallback {
    (step: number, message: string, totalSteps?: number): void
}


/**
 * Generate the entry point JavaScript code for the map application
 */
export function generateAppJs(vars: {
    gsMap: GsMap,
    gsLibPath: string,
    env: any
}): string {
    // Collect all script paths from controls and overlays
    const allScripts = [...(vars.gsMap.controls || []), ...(vars.gsMap.overlays || [])]
    const scriptPaths = allScripts
        .map((script: GsScript) => script.src)
        .filter((src: string) => src) // Filter out empty src
    
    // Generate static imports for all scripts so esbuild can bundle them
    // Static imports ensure esbuild bundles them, and they'll be available at runtime
    const scriptImports = scriptPaths.map((src: string, index: number) => {
        // Escape the src for use in template string
        const escapedSrc = src.replace(/`/g, '\\`').replace(/\$/g, '\\$')
        return `import script${index} from '${escapedSrc}'`
    })
    
    // Create a modules map that maps src to the imported module
    // This allows gs-lib to properly parameterize user modules at runtime
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

/**
 * Generate precache manifest for Workbox
 */
export function generatePrecacheManifest(assets: Array<{ url: string, revision?: string | null }>): string {
    return JSON.stringify(assets, null, 2)
}

/**
 * Process service worker content by injecting precache manifest
 */
export function processServiceWorker(
    content: string, 
    precacheManifest?: Array<{ url: string, revision?: string | null }>
): string {
    // Inject precache manifest if provided
    if (precacheManifest) {
        const manifestJson = generatePrecacheManifest(precacheManifest)
        // Replace the __WB_MANIFEST placeholder or inject before precacheAndRoute
        if (content.includes('self.__WB_MANIFEST')) {
            return content.replace(
                'self.__WB_MANIFEST || []',
                `${manifestJson}`
            )
        } else {
            // Inject manifest before precacheAndRoute line
            return content.replace(
                /workbox\.precaching\.precacheAndRoute\(/,
                `self.__WB_MANIFEST = ${manifestJson};\nworkbox.precaching.precacheAndRoute(`
            )
        }
    }
    
    return content
}

/**
 * Process manifest content by updating title and version
 */
export function processManifest(content: string, title: string, version: string): string {
    const manifest = JSON.parse(content)
    manifest.name = title
    manifest.short_name = title
    manifest.description = title
    manifest.version = version
    return JSON.stringify(manifest, null, 2)
}

/**
 * Process HTML template by replacing title placeholder and app.js reference
 */
export function processHtml(content: string, title: string, appJsFilename?: string): string {
    let processed = content.replace(/\$TITLE/g, title)
    if (appJsFilename) {
        // Replace the app.js import with the hashed filename
        processed = processed.replace(/\.\/app\.js/g, `./${appJsFilename}`)
    }
    return processed
}

/**
 * Bundle the application code using esbuild with hashed filenames
 * @param esbuildInstance - The esbuild instance to use (esbuild-wasm for browser, esbuild for Node.js)
 * @returns The actual output filename with hash
 */
export async function bundleApp(
    entryPointPath: string,
    outputDir: string,
    gsLibPath: string,
    fileSys: FileSystem,
    resolvePlugin: EsbuildPlugin,
    esbuildInstance: EsbuildInstance,
    progress?: ProgressCallback,
    currentStep?: { value: number },
    totalSteps?: number
): Promise<string> {
    const updateProgress = (message: string) => {
        if (progress) {
            if (currentStep !== undefined) {
                progress(++currentStep.value, message, totalSteps)
            } else {
                progress(0, message, totalSteps)
            }
        }
    }
    
    updateProgress("Bundling and minifying code...")
    
    const result = await esbuildInstance.build({
        entryPoints: [entryPointPath],
        bundle: true,
        outdir: outputDir,
        format: "esm",
        minify: true,
        plugins: [resolvePlugin],
        entryNames: '[name]-[hash]',
        // Runtime dependencies (lit, webawesome) are bundled with gs-lib
        external: [],
        // Bundle all dependencies
        packages: 'bundle',
        write: false, // Don't write to disk, we'll handle it
        metafile: true // Generate metafile to get output information
    })
    
    updateProgress("Saving bundled output...")
    
    if (!result.outputFiles || result.outputFiles.length === 0) {
        throw new Error('No output files generated by esbuild')
    }
    
    // Write all output files and find the main entry file
    let mainOutputFile: string | null = null
    
    // Try to use metafile to find the entry point output
    if (result.metafile && result.metafile.outputs) {
        // Find the output file that corresponds to our entry point
        const entryName = 'app' // Our entry point is app.js
        for (const [outputPath, output] of Object.entries(result.metafile.outputs)) {
            if (output && typeof output === 'object' && 'entryPoint' in output && outputPath.includes(entryName) && outputPath.endsWith('.js')) {
                mainOutputFile = outputPath
                break
            }
        }
    }
    
    // Write output files and find the main entry file (fallback if metafile didn't work)
    for (const file of result.outputFiles) {
        let filePath = file.path || ''
        
        // esbuild returns paths relative to outdir, but may be absolute
        // Extract just the filename if it's a full path, or use as-is if relative
        const path = await import('path')
        let relativePath: string
        let filename: string
        
        if (filePath.startsWith('/') || (filePath.length > 2 && filePath[1] === ':')) {
            // Absolute path - extract filename and build relative path
            filename = path.basename(filePath)
            relativePath = `${outputDir}/${filename}`
        } else {
            // Relative path - ensure it's under outputDir
            filename = path.basename(filePath)
            relativePath = filePath.startsWith(outputDir) ? filePath : `${outputDir}/${filePath}`
        }
        
        await fileSys.writeFile(relativePath, file.contents)
        
        // The entry file will be named app-[hash].js
        if (!mainOutputFile && filename.includes('app-') && filename.endsWith('.js')) {
            mainOutputFile = filename
        }
    }
    
    if (!mainOutputFile) {
        throw new Error('Could not find main output file')
    }
    
    // Extract filename from path (handle both / and \ separators)
    const lastSlash = Math.max(mainOutputFile.lastIndexOf('/'), mainOutputFile.lastIndexOf('\\'))
    return lastSlash >= 0 ? mainOutputFile.substring(lastSlash + 1) : mainOutputFile
}

/**
 * Interface for copying files from gs-lib package
 * This abstracts the difference between browser (import promises) and Node.js (file system)
 */
export interface GsLibFileCopier {
    /**
     * Copy a text file from gs-lib
     * @param srcPath - Source path relative to gs-lib package (e.g., "dist/index.js", "public/index.html")
     * @param destPath - Destination path in the project
     * @param processor - Optional function to process content before saving
     */
    copyTextFile(srcPath: string, destPath: string, processor?: (content: string) => string | Promise<string>): Promise<void>
    
    /**
     * Copy a binary file from gs-lib
     * @param srcPath - Source path relative to gs-lib package
     * @param destPath - Destination path in the project
     */
    copyBinaryFile(srcPath: string, destPath: string): Promise<void>
}

/**
 * Create a standard GsLibFileCopier that uses FileSystem to read from gs-lib package
 */
export function createFileSystemGsLibCopier(
    fs: FileSystem,
    gsLibPackagePath: string
): GsLibFileCopier {
    const copyFile = async (
        srcPath: string,
        destPath: string,
        asText: boolean,
        processor?: (content: string) => string | Promise<string>
    ): Promise<void> => {
        const fullSrcPath = `${gsLibPackagePath}/${srcPath}`
        let content: string | Uint8Array = await fs.readFile(fullSrcPath)
        
        if (asText) {
            // Convert to string if needed
            if (content instanceof Uint8Array) {
                content = new TextDecoder().decode(content)
            } else {
                content = content as string
            }
            
            if (processor) {
                content = await processor(content)
            }
        }
        
        await fs.writeFile(destPath, content)
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

/**
 * Recursively copy a directory
 */
async function copyDirectory(fs: FileSystem, src: string, dest: string): Promise<void> {
    // This is a simplified version - would need full directory traversal
    // For now, we'll handle specific known directories
    await fs.ensureDir(dest)
}

/**
 * Calculate total build steps based on configuration
 */
export function calculateTotalSteps(
    hasReadStep: boolean,
    hasAssets: boolean,
    cleanBeforeBuild: boolean,
    cleanAfterBuild: boolean
): number {
    const baseSteps = 9  // buildMap base steps
    const bundleSteps = 2  // bundling steps
    const completedStep = 1  // build completed step
    const readStep = hasReadStep ? 1 : 0
    const assetsStep = hasAssets ? 1 : 0
    const cleanupBeforeStep = cleanBeforeBuild ? 1 : 0
    const cleanupAfterStep = cleanAfterBuild ? 1 : 0
    
    return readStep + cleanupBeforeStep + baseSteps + bundleSteps + completedStep + assetsStep + cleanupAfterStep
}

/**
 * Create a standard copyAssets function that works with FileSystem
 */
export function createCopyAssetsFunction(fs: FileSystem): (fs: FileSystem, outputDir: string, progress?: ProgressCallback) => Promise<void> {
    return async (fileSys: FileSystem, outputDir: string, progress?: ProgressCallback) => {
        if (await fileSys.exists('assets')) {
            await copyDirectory(fileSys, 'assets', `${outputDir}/assets`)
        }
    }
}

/**
 * Unified build function that works in both browser and Node.js
 * This is the single source of truth for the build process
 */
export async function buildMap(
    options: BuildOptions,
    fs: FileSystem,
    resolvePlugin: EsbuildPlugin,
    esbuildInstance: EsbuildInstance,
    config: {
        outputDir?: string,
        buildDir?: string,
        gsLibPath?: string,
        gsLibPackagePath?: string,
        gsLibCopier?: GsLibFileCopier,
        cleanBeforeBuild?: boolean,
        cleanAfterBuild?: boolean,
        copyAssets?: (fs: FileSystem, outputDir: string, progress?: ProgressCallback) => Promise<void>
    } = {},
    progress?: ProgressCallback
): Promise<void> {
    const {
        outputDir = 'dist',
        buildDir = '__build',
        gsLibPath = `${buildDir}/gs-lib/index.js`,
        gsLibPackagePath,
        gsLibCopier: providedGsLibCopier,
        cleanBeforeBuild = true,
        cleanAfterBuild = true,
        copyAssets
    } = config
    
    // Create gsLibCopier if not provided, using FileSystem
    const gsLibCopier = providedGsLibCopier || (gsLibPackagePath ? createFileSystemGsLibCopier(fs, gsLibPackagePath) : null)
    if (!gsLibCopier) {
        throw new Error('Either gsLibCopier or gsLibPackagePath must be provided')
    }
    
    const buildGsLibPath = gsLibPath
    
    let step = (config as any).startingStep ?? 0
    const totalSteps = (config as any).totalSteps
    const updateProgress = (message: string) => {
        if (progress) progress(++step, message, totalSteps)
    }
    
    // Clean up build directories before starting
    if (cleanBeforeBuild) {
        updateProgress("Cleaning build directories...")
        const cleanupPromises: Promise<void>[] = []
        if (fs.deleteDir) {
            cleanupPromises.push(
                fs.deleteDir(buildDir).catch(() => {}), // Ignore errors if directory doesn't exist
                fs.deleteDir(outputDir).catch(() => {})
            )
        } else {
            // Fallback: try to use Node.js fs if available
            try {
                const nodeFs = await import('fs/promises')
                const path = await import('path')
                const projectRoot = process.cwd()
                cleanupPromises.push(
                    nodeFs.rm(path.resolve(projectRoot, buildDir), { recursive: true, force: true }).catch(() => {}),
                    nodeFs.rm(path.resolve(projectRoot, outputDir), { recursive: true, force: true }).catch(() => {})
                )
            } catch {
                // If Node.js fs is not available, skip cleanup
            }
        }
        await Promise.all(cleanupPromises)
    }
    
    // Ensure directories exist
    updateProgress("Preparing build directories...")
    await Promise.all([
        fs.ensureDir(`${outputDir}/assets/icons/`),
        fs.ensureDir(`${buildDir}/gs-lib/`)
    ])
    
    // Copy gs-lib package files
    updateProgress("Copying gs-lib package...")
    await Promise.all([
        gsLibCopier.copyTextFile('dist/index.js', `${buildDir}/gs-lib/index.js`),
        gsLibCopier.copyTextFile('dist/gs-lib.css', `${outputDir}/app.css`)
    ])
    
    // Copy and process PWA files
    updateProgress("Copying PWA core files...")
    await gsLibCopier.copyTextFile('public/pwa/staticwebapp.config.json', `${outputDir}/staticwebapp.config.json`)
    
    updateProgress("Creating manifest file...")
    await gsLibCopier.copyTextFile('public/pwa/manifest.json', `${outputDir}/manifest.json`, (content) => processManifest(content, options.title, options.version))
    
    // Copy PWA icons
    updateProgress("Copying PWA icons...")
    const iconFiles = [
        '24x24.png', '48x48.png', '192x192.png', '512x512.png',
        'icon_24.png', 'icon_48.png', 'icon_192.png', 'icon_512.png'
    ]
    await Promise.all(iconFiles.map(icon =>
        gsLibCopier.copyBinaryFile(`public/pwa/assets/icons/${icon}`, `${outputDir}/assets/icons/${icon}`)
    ))
    
    // Copy workspace assets if provided
    if (copyAssets) {
        updateProgress("Copying workspace assets...")
        await copyAssets(fs, outputDir, progress)
    }
    
    // Generate entry point
    updateProgress("Generating application code...")
    const entryPointContent = generateAppJs({
        gsMap: options.gsMap,
        gsLibPath: buildGsLibPath,
        env: { ...options.env, BUILD_TIME: new Date() }
    })
    await fs.writeFile(`${buildDir}/app.js`, entryPointContent)
    
    // Bundle with hashed filenames
    const stepRef = { value: step }
    const appJsFilename = await bundleApp(`${buildDir}/app.js`, outputDir, buildGsLibPath, fs, resolvePlugin, esbuildInstance, progress, stepRef, totalSteps)
    step = stepRef.value
    
    // Copy and process HTML with hashed app.js filename
    updateProgress("Generating HTML file...")
    await gsLibCopier.copyTextFile('public/index.html', `${outputDir}/index.html`, (content) => processHtml(content, options.title, appJsFilename))
    
    // Generate precache manifest after all assets are created
    // Hashed filenames naturally handle cache invalidation, so we can use null revision
    // For non-hashed assets, we can also use null since Workbox will check file content
    const precacheManifest: Array<{ url: string, revision: string | null }> = [
        { url: `/${appJsFilename}`, revision: null }, // Hashed filename handles versioning
        { url: '/index.html', revision: null }, // HTML references hashed app.js, so it's versioned
        { url: '/app.css', revision: null }, // Workbox will check file content
        { url: '/manifest.json', revision: null }, // Workbox will check file content
        ...iconFiles.map(icon => ({ url: `/assets/icons/${icon}`, revision: null })) // Workbox will check file content
    ]
    
    // Process and inject service worker with precache manifest
    updateProgress("Processing service worker...")
    await gsLibCopier.copyTextFile('public/pwa/sw.js', `${outputDir}/sw.js`, (content) => 
        processServiceWorker(content, precacheManifest)
    )
    
    // Cleanup
    if (cleanAfterBuild) {
        updateProgress("Cleaning up temporary files...")
        if (fs.deleteDir) {
            await fs.deleteDir(buildDir)
        } else {
            // Fallback: try to use Node.js fs if available (for CLI usage)
            try {
                const nodeFs = await import('fs/promises')
                const path = await import('path')
                const fullPath = path.resolve(process.cwd(), buildDir)
                await nodeFs.rm(fullPath, { recursive: true, force: true })
            } catch (error) {
                // If Node.js fs is not available (browser context), skip cleanup
                // The browser FileSystem should implement deleteDir
            }
        }
    }
    
    updateProgress("Build completed!")
}

