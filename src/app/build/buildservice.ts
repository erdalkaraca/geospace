import * as esbuild from 'esbuild-wasm'
import {OnLoadArgs, OnResolveArgs} from 'esbuild-wasm'
import wasmUrl from '../../../node_modules/esbuild-wasm/esbuild.wasm?url'
import manifestJson from "../../../public/pwa/manifest.json"
import {GsMap, GsScript} from "../rt";
import {GsMapEditor} from "../geo/gs-map-editor";
import {loadEnvs} from "../geo/utils";
import {
    Directory,
    File,
    workspaceService,
    activePartSignal,
    toastError,
    toastInfo,
    taskService
} from "../../api/index";
import {rootContext} from "../../core/di";

const indexHtml = (vars: any) => `
<!doctype html>
<html lang="en" translate="no">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="google" content="notranslate">
    
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="geospace-app" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    
    <link rel="icon" href="/assets/icons/icon_24.png" type="image/png" />
    <link rel="manifest" href="manifest.json" />
    
    <title>${vars.title}</title>
    <link rel="stylesheet" href="app.css" />
    <style>
        html, body, .map-container {
            height: 100dvh;
            width: 100dvw;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        
        * {
            touch-action: none;
        }
    </style>
</head>
<body>
<div class="map-container"></div>
<script type="module">
    import {renderMap} from "./app.js"
    renderMap("div.map-container")
</script>
<script>
    if ('serviceWorker' in navigator) {
      window.onload = () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  if (confirm('A new version of the app is available. Reload to update?')) {
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                  }
                }
              });
            }
          });
          
          // Listen for service worker messages
          navigator.serviceWorker.addEventListener('message', event => {
            if (event.data && event.data.type === 'RELOAD') {
              window.location.reload();
            }
          });
        });
      }
    }
  </script>
</body>
</html>
`

const appJs = (vars: any) => {
    const mods: any = {}
    return `
import {gsLib} from "${vars.libPath}"
${[...vars.gsMap.controls, ...vars.gsMap.overlays].map((script: GsScript, index: number) => {
        const src = script.src
        const modName = `map_mod${index}`
        mods[src] = modName
        return `import ${modName} from '${src}'`
    }).join("\n")}
    
export const renderMap = (mapContainerSelector) => gsLib({
    containerSelector: mapContainerSelector,
    gsMap: ${JSON.stringify(vars.gsMap)},
    mapOptions: {
        controls: {zoom: false, attribution: false}
    },
    env: ${JSON.stringify(vars.env || {})},
    modules: {${Object.entries(mods).map(([k, v]) => `"${k}":${v}`).join(",")}}
})
`
}

export interface BuildOptions {
    title: string,
    gsMap: GsMap,
    env: any,
    version: string
}

let workspacePlugin = {
    name: 'workspace',
    setup(build: any) {
        build.onResolve({filter: /.*/}, (args: OnResolveArgs) => {
            if (!/^(?!https?:\/\/).+/.test(args.path)) return;
            return {path: args.path, namespace: "virtual-workspace"};
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
            const contents = await resource.getContents() as string
            return {contents: contents};
        })
    },
}

export class BuildService {
    private initialized = false

    public async init() {
        if (!this.initialized) {
            await esbuild.initialize({
                wasmURL: wasmUrl,
            })
            this.initialized = true
        }
    }

    private async downloadFile(fromDlLink: string, toWsPath: any) {
        const workspace = (await workspaceService.getWorkspace())!
        const link = (import.meta.env.VITE_BASE_PATH || "") + fromDlLink
        await fetch(link).then(async response => response.blob())
            .then(async contents => {
                await workspace.getResource(toWsPath, {
                    create: true
                }).then((resource) => resource as File)
                    .then(file => file.saveContents(contents))
            })
    }

    public async build(options: BuildOptions, cleanAfterBuild = undefined) {
        await this.init()

        const libPath = "build/gs-lib.js"
        const buildAppJs = "build/app.js"
        const distIndexHtml = "dist/index.html"
        const distAppJs = "dist/app.js"

        const workspace = (await workspaceService.getWorkspace())!
        if (await workspace.getResource("build")) {
            await (await workspace.getResource("build") as Directory).delete()
        }
        if (await workspace.getResource("dist")) {
            await (await workspace.getResource("dist") as Directory).delete()
        }

        await this.downloadFile("/lib/gs-lib.js", libPath)
        await this.downloadFile("/lib/gs-lib.css", "dist/app.css")
        await this.downloadFile("/pwa/staticwebapp.config.json", "dist/staticwebapp.config.json")
        await this.downloadFile("/pwa/sw.js", "dist/sw.js")

        const vars = {
            ...options,
            libPath: libPath
        }

        // Read the downloaded service worker and inject version
        const swFile = await workspace.getResource("dist/sw.js") as File
        const swContent = await swFile.getContents()
        await this.createFile("dist/sw.js", (vars: any) => {
            return swContent.replace(/\$PWA_VERSION/g, vars["version"])
        }, vars)

        await this.createFile("dist/manifest.json", (vars: any) => {
            const manifest = JSON.parse(JSON.stringify(manifestJson))
            manifest.name = vars["title"]
            manifest.short_name = vars["title"]
            manifest.description = vars["title"]
            manifest.version = vars["version"]
            return JSON.stringify(manifest)
        }, vars)

        await this.downloadFile("/pwa/assets/icons/24x24.png", "dist/assets/icons/24x24.png")
        await this.downloadFile("/pwa/assets/icons/48x48.png", "dist/assets/icons/48x48.png")
        await this.downloadFile("/pwa/assets/icons/192x192.png", "dist/assets/icons/192x192.png")
        await this.downloadFile("/pwa/assets/icons/512x512.png", "dist/assets/icons/512x512.png")
        await this.downloadFile("/pwa/assets/icons/icon_24.png", "dist/assets/icons/icon_24.png")
        await this.downloadFile("/pwa/assets/icons/icon_48.png", "dist/assets/icons/icon_48.png")
        await this.downloadFile("/pwa/assets/icons/icon_192.png", "dist/assets/icons/icon_192.png")
        await this.downloadFile("/pwa/assets/icons/icon_512.png", "dist/assets/icons/icon_512.png")

        const assetDir = await workspace.getResource("assets") as Directory
        if (assetDir) {
            await assetDir.copyTo("dist/assets")
        }

        await this.createFile(buildAppJs, appJs, vars)
        await this.createFile(distIndexHtml, indexHtml, vars)

        const outFile = await workspace.getResource(distAppJs, {
            create: true
        }) as File
        const result = await esbuild.build({
            entryPoints: [buildAppJs],
            bundle: true,
            outfile: "app.js",
            format: "esm",
            minify: true,
            plugins: [workspacePlugin]
        })
        await outFile.saveContents(result.outputFiles![0].contents);
        if (cleanAfterBuild === undefined || cleanAfterBuild) {
            await (await workspace.getResource("build") as Directory).delete()
        }
        workspace.touch()
    }

    private async createFile(fileName: string, contentCreator: (vars: any) => string, vars: {}) {
        const workspace = (await workspaceService.getWorkspace())!
        const entryFile = (await workspace.getResource(fileName, {
            create: true
        }))! as File
        await entryFile.saveContents(contentCreator(vars))
    }

    public async buildActiveMap() {
        const gsMapEditor = activePartSignal.get() as GsMapEditor
        if (gsMapEditor.isDirty()) {
            await gsMapEditor.save()
            toastInfo("Map saved automatically to run build.")
        }
        const file = gsMapEditor.input!.data as File
        const gsMap = JSON.parse(await file.getContents())
        const env = await loadEnvs(".env", "envs/.env", "env", "envs/env",
            "default.env", "envs/default.env", "prod.env", "envs/prod.env")
        env["BUILD_TIME"] = new Date()
        taskService.runAsync("Building map", () => buildService.build({
            title: file.getName(),
            gsMap: gsMap,
            env: env,
            version: env["VERSION"] || "0.0.0"
        }))
            .then(() => {
                toastInfo("🚀 Map files copied to 'dist' folder in your workspace!")
            }).catch(err => {
            toastError(`💥 Map could not be built: ${err}`)
        })
    }
}

export const buildService = new BuildService();
rootContext.put("buildService", buildService);