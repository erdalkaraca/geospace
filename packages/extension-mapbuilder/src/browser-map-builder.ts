import * as esbuild from "esbuild-wasm";
import { OnLoadArgs, OnResolveArgs } from "esbuild-wasm";
import wasmUrl from "esbuild-wasm/esbuild.wasm?url";
import {
    type BuildOptions,
    buildMap,
    type FileSystem,
    type GsLibFileCopier,
} from "@kispace-io/gs-lib";
import { loadEnvs } from "@kispace-io/geospace/geo";
import {
    Directory,
    File,
    workspaceService,
    toastError,
    toastInfo,
    taskService,
    ProgressMonitor,
} from "@kispace-io/core/api";
import { rootContext } from "@kispace-io/core/api";

export type { BuildOptions };

function resolveWorkspacePath(relativePath: string, basePath: string): string {
    if (relativePath.startsWith("/")) {
        return relativePath.slice(1);
    }

    const baseParts = basePath.split("/").filter((p) => p);
    const pathParts = relativePath.split("/").filter((p) => p);

    const isRelative =
        relativePath.startsWith("./") || relativePath.startsWith("../");

    if (isRelative || !relativePath.startsWith("/")) {
        const baseDirParts = baseParts.slice(0, -1);
        baseParts.length = 0;
        baseParts.push(...baseDirParts);
    }

    for (const part of pathParts) {
        if (part === ".") {
            continue;
        } else if (part === "..") {
            if (baseParts.length > 0) {
                baseParts.pop();
            }
        } else {
            baseParts.push(part);
        }
    }

    return baseParts.join("/");
}

const GS_LIB_BASE = "../../gs-lib";

let workspacePlugin = {
    name: "workspace",
    setup(build: any) {
        build.onResolve({ filter: /.*/ }, (args: OnResolveArgs) => {
            if (
                args.path.startsWith("http://") ||
                args.path.startsWith("https://") ||
                args.path.startsWith("data:")
            ) {
                return;
            }

            let resolvedPath = args.path;

            if (resolvedPath.startsWith("/")) {
                resolvedPath = resolvedPath.slice(1);
            }

            if (args.importer && args.importer !== "") {
                let importerPath = args.importer;
                if (importerPath.startsWith("virtual-workspace:")) {
                    importerPath = importerPath.slice(
                        "virtual-workspace:".length
                    );
                }

                const isRelative =
                    args.path.startsWith("./") || args.path.startsWith("../");
                const hasPathSeparator = resolvedPath.includes("/");
                const isGeneratedBuildFile =
                    importerPath.startsWith("__build/");

                if (isRelative) {
                    resolvedPath = resolveWorkspacePath(
                        args.path,
                        importerPath
                    );
                } else if (!hasPathSeparator && !isGeneratedBuildFile) {
                    resolvedPath = resolveWorkspacePath(
                        resolvedPath,
                        importerPath
                    );
                }
            }

            return { path: resolvedPath, namespace: "virtual-workspace" };
        });
        build.onLoad({ filter: /.*/ }, async (args: OnLoadArgs) => {
            if (!/^(?!https?:\/\/).+/.test(args.path)) return;
            const workspacePath = args.path;
            const workspace = (await workspaceService.getWorkspace())!;
            let resource = (await workspace.getResource(
                workspacePath
            ))! as File;
            if (!resource) {
                await workspace.listChildren(true);
                resource = (await workspace.getResource(
                    workspacePath
                ))! as File;
            }
            if (!resource) {
                throw new Error(`Module not found: ${workspacePath}`);
            }
            const contents = (await resource.getContents()) as string;

            const ext = workspacePath.split(".").pop()?.toLowerCase();
            let loader: string | undefined = undefined;
            if (ext === "ts" || ext === "tsx") {
                loader = ext === "tsx" ? "tsx" : "ts";
            } else if (ext === "js" || ext === "jsx") {
                loader = ext === "jsx" ? "jsx" : "js";
            } else if (ext === "json") {
                loader = "json";
            } else if (ext === "css") {
                loader = "css";
            }

            return { contents: contents, loader: loader };
        });
    },
};

export class BrowserMapBuilder {
    private initialized = false;
    private workspaceCache: any = null;

    private async getWorkspace() {
        if (!this.workspaceCache) {
            this.workspaceCache = (await workspaceService.getWorkspace())!;
        }
        return this.workspaceCache;
    }

    public async init() {
        if (!this.initialized) {
            await esbuild.initialize({
                wasmURL: wasmUrl,
            });
            this.initialized = true;
        }
    }

    private createBrowserFileCopier(): GsLibFileCopier {
        const workspace = this.getWorkspace.bind(this);

        const importMap: Record<string, () => Promise<any>> = {
            "dist/index.js": () =>
                import(`${GS_LIB_BASE}/dist/index.js?raw`),
            "dist/gs-lib.css": () =>
                import(`${GS_LIB_BASE}/dist/gs-lib.css?raw`),
            "public/pwa/staticwebapp.config.json": () =>
                import(`${GS_LIB_BASE}/public/pwa/staticwebapp.config.json?raw`),
            "public/pwa/sw.js": () =>
                import(`${GS_LIB_BASE}/public/pwa/sw.js?raw`),
            "public/pwa/manifest.json": () =>
                import(`${GS_LIB_BASE}/public/pwa/manifest.json?raw`),
            "public/index.html": () =>
                import(`${GS_LIB_BASE}/public/index.html?raw`),
            "public/pwa/assets/icons/24x24.png": () =>
                import(`${GS_LIB_BASE}/public/pwa/assets/icons/24x24.png?url`),
            "public/pwa/assets/icons/48x48.png": () =>
                import(`${GS_LIB_BASE}/public/pwa/assets/icons/48x48.png?url`),
            "public/pwa/assets/icons/192x192.png": () =>
                import(`${GS_LIB_BASE}/public/pwa/assets/icons/192x192.png?url`),
            "public/pwa/assets/icons/512x512.png": () =>
                import(`${GS_LIB_BASE}/public/pwa/assets/icons/512x512.png?url`),
            "public/pwa/assets/icons/icon_24.png": () =>
                import(`${GS_LIB_BASE}/public/pwa/assets/icons/icon_24.png?url`),
            "public/pwa/assets/icons/icon_48.png": () =>
                import(`${GS_LIB_BASE}/public/pwa/assets/icons/icon_48.png?url`),
            "public/pwa/assets/icons/icon_192.png": () =>
                import(`${GS_LIB_BASE}/public/pwa/assets/icons/icon_192.png?url`),
            "public/pwa/assets/icons/icon_512.png": () =>
                import(`${GS_LIB_BASE}/public/pwa/assets/icons/icon_512.png?url`),
        };

        const copyFile = async (
            srcPath: string,
            destPath: string,
            asText: boolean,
            processor?: (content: string) => string | Promise<string>
        ): Promise<void> => {
            const getImport = importMap[srcPath];
            if (!getImport) {
                throw new Error(
                    `No import mapping for ${srcPath}. Make sure gs-lib is built.`
                );
            }

            let content: string | Blob;
            try {
                const module = await getImport();

                if (asText) {
                    content = module.default as string;
                    if (processor) {
                        content = await processor(content);
                    }
                } else {
                    const url = module.default;
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(
                            `Failed to fetch: ${response.statusText}`
                        );
                    }
                    content = await response.blob();
                }
            } catch (error) {
                throw new Error(
                    `Failed to copy ${srcPath}: ${error}. Make sure gs-lib is built (run: npm run build --workspace=@kispace-io/gs-lib)`
                );
            }

            const ws = await workspace();
            const destFile = (await ws.getResource(destPath, {
                create: true,
            })) as File;
            await destFile.saveContents(content);

            content = undefined as any;
        };

        return {
            async copyTextFile(
                srcPath: string,
                destPath: string,
                processor?: (content: string) => string | Promise<string>
            ): Promise<void> {
                await copyFile(srcPath, destPath, true, processor);
            },
            async copyBinaryFile(
                srcPath: string,
                destPath: string
            ): Promise<void> {
                await copyFile(srcPath, destPath, false);
            },
        };
    }

    public async build(
        options: BuildOptions,
        cleanAfterBuild = undefined,
        progressMonitor?: ProgressMonitor
    ) {
        const updateProgress = (step: number, message: string) => {
            if (progressMonitor) {
                progressMonitor.currentStep = step;
                progressMonitor.message = message;
            }
        };

        updateProgress(0, "Initializing build system...");
        await this.init();

        const workspace = await this.getWorkspace();

        const workspaceFs: FileSystem = {
            async readFile(path: string): Promise<string | Uint8Array> {
                const resource = (await workspace.getResource(path)) as File;
                if (!resource) {
                    throw new Error(`File not found: ${path}`);
                }
                return (await resource.getContents()) as string;
            },
            async writeFile(
                path: string,
                content: string | Uint8Array
            ): Promise<void> {
                const file = (await workspace.getResource(path, {
                    create: true,
                })) as File;
                await file.saveContents(content);
            },
            async ensureDir(path: string): Promise<void> {
                await workspace.getResource(
                    path.endsWith("/") ? path : path + "/",
                    { create: true }
                );
            },
            async exists(path: string): Promise<boolean> {
                const resource = await workspace.getResource(path);
                return resource !== null;
            },
            async deleteDir(path: string): Promise<void> {
                const resource = await workspace.getResource(path);
                if (resource instanceof Directory) {
                    await resource.delete();
                }
            },
        };

        const gsLibCopier = this.createBrowserFileCopier();

        const copyAssets = async (
            _fs: FileSystem,
            outputDir: string
        ) => {
            const assetDir = (await workspace.getResource(
                "assets"
            )) as Directory;
            if (assetDir) {
                await assetDir.copyTo(`${outputDir}/assets`);
            }
        };

        await buildMap(
            options,
            workspaceFs,
            workspacePlugin,
            esbuild,
            {
                gsLibCopier,
                cleanAfterBuild,
                copyAssets,
            },
            updateProgress
        );

        updateProgress(0, "Finalizing build...");
        workspace.touch();

        if (progressMonitor) {
            progressMonitor.message = "Build completed successfully!";
        }
    }

    public async buildMapFile(mapFile: File, envPath?: string) {
        const gsMap = JSON.parse(await mapFile.getContents());
        const env = await loadEnvs(envPath || ".env");
        taskService
            .runAsync("Building map", async (progressMonitor) => {
                await browserMapBuilder.build(
                    {
                        title: mapFile.getName(),
                        gsMap: gsMap,
                        env: env,
                        version: env["VERSION"] || "0.0.0",
                    },
                    undefined,
                    progressMonitor
                );
            })
            .then(() => {
                toastInfo(
                    "🚀 Map files copied to 'dist' folder in your workspace!"
                );
            })
            .catch((err) => {
                toastError(
                    `💥 Map could not be built: ${err}`
                );
            });
    }
}

export const browserMapBuilder = new BrowserMapBuilder();
rootContext.put("buildService", browserMapBuilder);
