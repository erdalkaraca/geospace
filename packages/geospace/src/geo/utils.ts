import BaseLayer from "ol/layer/Base";
import {Map} from "ol";
import jsonata from "jsonata";
import {parse} from "dotenv";
import {KEY_NAME} from "../rt";
import {
    File,
    workspaceService,
    toastError,
    contributionRegistry,
    TreeContribution
} from "@kispace/appspace/api";
import { WorkspaceModuleResolver } from "./workspace-module-resolver";

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

export const toBlobUri = async (uri: string) => {
    const workspace = await workspaceService.getWorkspace()
    const resource = await workspace!.getResource(uri) as File
    if (!resource) {
        toastError("Invalid URL: " + uri)
    }
    return await resource.getContents({uri: true}) as string
}

export const isAbsoluteResource = (url: string) => {
    return url.startsWith("blob:") || url.startsWith("http:") || url.startsWith("https:");
}

export const _blobsLookup: any = {}

export const replaceUris = async (obj: any, propName: string, resolver?: WorkspaceModuleResolver) => {
    const urlObjects = await jsonata(`[**[${propName}!='']]`).evaluate(obj)
    for (const obj of urlObjects) {
        const url = obj[propName] as string
        if (isAbsoluteResource(url)) {
            continue
        }
        
        let blobUri: string;
        if (propName === "src" && resolver) {
            try {
                const resolved = await resolver.resolveWorkspaceModule(url);
                blobUri = resolved.blobUrl;
            } catch (error) {
                blobUri = await toBlobUri(url);
            }
        } else {
            blobUri = await toBlobUri(url);
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

export interface CatalogContribution extends TreeContribution {
    items?: CatalogContribution[]
}

export const registerCatalog = (catalog: CatalogContribution) => {
    contributionRegistry.registerContribution("catalog.root", {
        label: catalog.label,
        icon: catalog.icon,
        contributionId: catalog.contributionId
    } as TreeContribution)

    const contributionId = catalog.contributionId ?? catalog.label
    catalog.items?.forEach((item: any) => {
        contributionRegistry.registerContribution(contributionId, {
            label: item.label,
            icon: item.icon,
            contributionId: item.contributionId
        } as TreeContribution)

        const url = (import.meta.env.VITE_BASE_PATH || "") + "/."
        const base = import.meta.resolve(url)
        item.items.forEach((child: any) => {
            const contribution = {
                label: child.label,
                icon: child.icon,
                state: {
                    ...child.state
                }
            } as TreeContribution
            if (contribution.state?.url) {
                contribution.state.url = contribution.state.url.replace("${baseURL}/", base)
            }
            contributionRegistry.registerContribution(item.contributionId, contribution)
        })
    })
}

export const replaceVars = (env: any) => {
    Object.entries(env).forEach(([key, value]) => {
        const placeholderRegex = /\${([a-zA-Z0-9_]+)}/g;
        env[key] = (value as string).replace(placeholderRegex, (match: any, key: string) => {
            const replacementValue = env[key];
            return replacementValue !== undefined ? replacementValue : match; // Use replacement or keep original if not found
        });
    })
}

export const loadEnvs = async (...envs: string[]) => {
    const workspace = await workspaceService.getWorkspace()
    const finalEnv: any = {}
    for (const envName of envs) {
        const envFile = (await workspace?.getResource(envName)) as File
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