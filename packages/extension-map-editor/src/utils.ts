import {GsSourceType, KEY_NAME, scriptedRuntimeRegistry} from "@kispace-io/gs-lib";
import {BaseLayer, Map, resolveScriptLang} from "@kispace-io/gs-lib/ol";
import jsonata from "jsonata";
import {parse} from "dotenv";
import {File, workspaceService} from "@eclipse-docks/core";
import { resolveWorkspacePath as resolveWorkspacePathImpl, WorkspaceModuleResolver } from "./workspace-module-resolver";

export { resolveWorkspacePath } from "./workspace-module-resolver";

export const FILE_EXTENSION_TO_SOURCE_TYPE: Record<string, GsSourceType> = {
    '.geojson': GsSourceType.GeoJSON,
    '.json': GsSourceType.GeoJSON,
    '.kml': GsSourceType.KML,
    '.gpx': GsSourceType.GPX,
    '.tif': GsSourceType.GeoTIFF,
    '.tiff': GsSourceType.GeoTIFF,
    '.geotiff': GsSourceType.GeoTIFF
};

export const getSourceTypeFromFile = (file: File): GsSourceType | null => {
    const fileName = file.getName().toLowerCase();
    for (const [ext, sourceType] of Object.entries(FILE_EXTENSION_TO_SOURCE_TYPE)) {
        if (fileName.endsWith(ext)) {
            return sourceType;
        }
    }
    const lang = resolveScriptLang(fileName)
    if (scriptedRuntimeRegistry.get(lang)) {
        return GsSourceType.Scripted
    }
    return null;
};

export const isSupportedSpatialFile = (file: File): boolean => {
    return getSourceTypeFromFile(file) !== null;
};

export const findOlLayer = (name: string, olMap: Map, notFound?: Function) => {
    const layers = olMap.getLayers()
    let markersLayer: BaseLayer | undefined;
    for (let i = 0; i < layers.getLength(); i++) {
        const layer = layers.item(i)
        if (layer.get(KEY_NAME) === name) {
            markersLayer = layer as BaseLayer
            break
        }
    }
    if (!markersLayer && notFound) {
        markersLayer = notFound()
    }
    return markersLayer
}

export const isAbsoluteResource = (url: string) => {
    return url.startsWith("blob:") || url.startsWith("http:") || url.startsWith("https:") || url.startsWith("data:");
}

export const toBlobUri = async (uri: string, basePath?: string) => {
    const workspace = await workspaceService.getWorkspace()
    if (!workspace) {
        throw new Error("No workspace available")
    }
    const path = basePath && !isAbsoluteResource(uri) ? resolveWorkspacePathImpl(uri, basePath) : uri
    const resource = await workspace.getResource(path) as File
    if (!resource) {
        throw new Error("Invalid URL: " + uri)
    }
    return await resource.getContents({uri: true}) as string
}

export const _blobsLookup: any = {}

export const replaceUris = async (obj: any, propName: string, resolver?: WorkspaceModuleResolver, basePath?: string) => {
    const urlObjects = await jsonata(`[**[${propName}!='']]`).evaluate(obj)
    for (const obj of urlObjects) {
        const url = obj[propName] as string
        if (isAbsoluteResource(url)) {
            continue
        }
        let blobUri: string;
        if (propName === "src" && resolver) {
            try {
                const resolved = basePath
                    ? await resolver.resolveWorkspaceModule(url, basePath)
                    : await resolver.resolveWorkspaceModule(url);
                blobUri = resolved.blobUrl;
            } catch (error) {
                blobUri = await toBlobUri(url, basePath);
            }
        } else {
            blobUri = await toBlobUri(url, basePath);
        }
        _blobsLookup[blobUri] = obj[propName]
        obj[propName] = blobUri
    }
}

export const getOriginalUri = (blobUri: string) => {
    return _blobsLookup[blobUri]
}

export const revertBlobUris = async (obj: any, propName: string) => {
    const urlObjects = await jsonata(`[**[${propName}!='']]`).evaluate(obj)
    for (const obj of urlObjects) {
        const blobUri = obj[propName]
        if (!blobUri || !blobUri.startsWith("blob:")) {
            continue
        }
        obj[propName] = _blobsLookup[blobUri]
    }
}

export const replaceVars = (env: any) => {
    Object.entries(env).forEach(([key, value]) => {
        const placeholderRegex = /\${([a-zA-Z0-9_]+)}/g;
        env[key] = (value as string).replace(placeholderRegex, (match: any, key: string) => {
            const replacementValue = env[key];
            return replacementValue !== undefined ? replacementValue : match;
        });
    })
}

export const loadEnvs = async (envNames: string[], basePath?: string) => {
    const workspace = await workspaceService.getWorkspace()
    const finalEnv: any = {}
    for (const envName of envNames) {
        const path = basePath ? resolveWorkspacePathImpl(envName, basePath) : envName
        const envFile = (await workspace?.getResource(path)) as File
        if (!envFile) {
            continue
        }
        const envContents = await (envFile).getContents()
        const env = parse(envContents || "")
        replaceVars(env)
        Object.assign(finalEnv, env)
    }
    replaceVars(finalEnv)
    return finalEnv
}
