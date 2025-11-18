// Dynamic imports for Node.js modules to avoid bundling in browser builds
import {
    BuildOptions,
    FileSystem,
    ProgressCallback,
    buildMap,
    calculateTotalSteps
} from '../src/base-map-builder'
import {GsMap} from '../src/gs-model'

/**
 * Create a Node.js file system implementation
 */
export async function createNodeFileSystem(projectRoot: string): Promise<FileSystem> {
    // Dynamic imports to avoid bundling Node.js modules in browser builds
    const path = await import('path')
    const fs = await import('fs/promises')
    
    return {
        async readFile(filePath: string): Promise<string | Uint8Array> {
            const fullPath = path.resolve(projectRoot, filePath)
            return await fs.readFile(fullPath)
        },
        async writeFile(filePath: string, content: string | Uint8Array): Promise<void> {
            const fullPath = path.resolve(projectRoot, filePath)
            await fs.mkdir(path.dirname(fullPath), { recursive: true })
            await fs.writeFile(fullPath, content)
        },
        async ensureDir(dirPath: string): Promise<void> {
            const fullPath = path.resolve(projectRoot, dirPath)
            await fs.mkdir(fullPath, { recursive: true })
        },
        async exists(filePath: string): Promise<boolean> {
            const fullPath = path.resolve(projectRoot, filePath)
            try {
                await fs.access(fullPath)
                return true
            } catch {
                return false
            }
        },
        async deleteDir(dirPath: string): Promise<void> {
            const fullPath = path.resolve(projectRoot, dirPath)
            await fs.rm(fullPath, { recursive: true, force: true })
        }
    }
}

/**
 * Create an esbuild plugin that resolves modules from a Node.js file system
 */
export async function createNodeResolvePlugin(projectRoot: string, gsLibPath: string): Promise<any> {
    // Dynamic imports to avoid bundling Node.js modules in browser builds
    const path = await import('path')
    const fs = await import('fs/promises')
    const esbuild = await import('esbuild')
    
    return {
        name: 'node-resolve',
        setup(build: any) {
            build.onResolve({ filter: /.*/ }, (args: any) => {
                // Skip external URLs
                if (args.path.startsWith('http://') || args.path.startsWith('https://')) {
                    return
                }
                
                let resolvedPath = args.path
                
                // Resolve @kispace-io/gs-lib to the provided path
                if (args.path === '@kispace-io/gs-lib') {
                    return { path: path.resolve(projectRoot, gsLibPath), namespace: 'file' }
                }
                if (args.path.startsWith('@kispace-io/gs-lib/')) {
                    const subpath = args.path.replace('@kispace-io/gs-lib/', '')
                    return { path: path.resolve(projectRoot, gsLibPath.replace('index.js', subpath)), namespace: 'file' }
                }
                
                // Handle relative paths
                if (args.path.startsWith('./') || args.path.startsWith('../')) {
                    if (args.importer) {
                        const importerDir = path.dirname(args.importer)
                        resolvedPath = path.resolve(importerDir, args.path)
                    } else {
                        resolvedPath = path.resolve(projectRoot, args.path)
                    }
                } else if (!path.isAbsolute(args.path)) {
                    // Bare specifier - resolve relative to project root
                    resolvedPath = path.resolve(projectRoot, args.path)
                }
                
                return { path: resolvedPath, namespace: 'file' }
            })
            
            build.onLoad({ filter: /.*/, namespace: 'file' }, async (args: any) => {
                try {
                    const contents = await fs.readFile(args.path, 'utf-8')
                    const ext = path.extname(args.path)
                    const loader = ext === '.ts' ? 'ts' : ext === '.js' ? 'js' : ext === '.json' ? 'json' : 'js'
                    return { contents, loader }
                } catch (error: any) {
                    throw new Error(`Failed to load ${args.path}: ${error.message}`)
                }
            })
        }
    }
}


/**
 * Build a complete .geospace project for CI/CD
 * This function can be used in Node.js without geospace or appspace packages
 * 
 * @param projectRoot - Root directory of the .geospace project
 * @param mapFile - Path to the .geospace map file (relative to projectRoot)
 * @param options - Build configuration options
 * @param progress - Optional progress callback
 */
export async function buildProject(
    projectRoot: string,
    mapFile: string,
    options: {
        title?: string,
        version?: string,
        env?: Record<string, string>,
        gsLibPackagePath?: string,
        outputDir?: string,
        cleanAfterBuild?: boolean
    } = {},
    progress?: ProgressCallback
): Promise<void> {
    const {
        title,
        version,
        env,
        gsLibPackagePath,
        outputDir,
        cleanAfterBuild
    } = options
    
    if (!version) {
        throw new Error('version is required')
    }
    if (!env) {
        throw new Error('env is required')
    }
    if (!gsLibPackagePath) {
        throw new Error('gsLibPackagePath is required')
    }
    
    // Dynamic imports to avoid bundling Node.js modules in browser builds
    const path = await import('path')
    const nodeFs = await import('fs/promises')
    
    const fs = await createNodeFileSystem(projectRoot)
    const gsLibDistPath = path.join(gsLibPackagePath, 'dist')
    const gsLibPublicPath = path.join(gsLibPackagePath, 'public')
    const buildGsLibPath = '__build/gs-lib/index.js'
    
    // Calculate total steps early
    const hasAssets = await fs.exists('assets')
    const totalSteps = calculateTotalSteps(true, hasAssets, true, cleanAfterBuild ?? true)
    
    // Read map file
    let step = 0
    if (progress) progress(++step, "Reading map file...", totalSteps)
    const mapContent = Buffer.from(await fs.readFile(mapFile)).toString('utf-8')
    const gsMap: GsMap = JSON.parse(mapContent)
    
    const buildTitle = title || path.basename(mapFile, '.geospace')
    
    // Create Node.js-specific copyAssets function using native fs.cp()
    const copyAssets = async (fileSys: FileSystem, outputDir: string) => {
        const assetsSrc = path.resolve(projectRoot, 'assets')
        const assetsDest = path.resolve(projectRoot, outputDir, 'assets')
        
        // Check if assets directory exists
        try {
            await nodeFs.access(assetsSrc)
        } catch {
            // Assets directory doesn't exist, skip copying
            return
        }
        
        // Use Node.js native fs.cp() for recursive directory copy (available since v16.7.0)
        await nodeFs.cp(assetsSrc, assetsDest, { recursive: true })
    }
    
    // Build using unified function
    // Dynamic import to avoid bundling esbuild in browser builds
    const esbuild = await import('esbuild')
    
    await buildMap(
        {
            title: buildTitle,
            gsMap,
            env,
            version
        },
        fs,
        await createNodeResolvePlugin(projectRoot, buildGsLibPath),
        esbuild, // Pass Node.js esbuild instance
        {
            outputDir,
            gsLibPackagePath,
            cleanAfterBuild,
            copyAssets,
            startingStep: step,
            totalSteps
        } as any,
        progress
    )
}

