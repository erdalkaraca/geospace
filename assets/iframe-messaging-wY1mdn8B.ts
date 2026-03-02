import {
    MapRenderer,
    rtUtils
} from '@kispace-io/gs-lib';
import { OpenLayersMapRenderer } from '@kispace-io/gs-lib/ol';
import { MapLibreMapRenderer } from '@kispace-io/gs-lib/ml';

export type RendererType = 'openlayers' | 'maplibre';

rtUtils.resolveUrl = async (path: string) => {
    try {
        return await resolveAssetInHost(path);
    } catch (error) {
        console.warn('Failed to resolve asset via host:', error);
        return path;
    }
};

let mapRenderer: MapRenderer;

function createMapRenderer(gsMap: any, env: any, rendererType: RendererType = 'openlayers'): MapRenderer {
    switch (rendererType) {
        case 'maplibre':
            return new MapLibreMapRenderer(gsMap, env);
        case 'openlayers':
        default:
            return new OpenLayersMapRenderer(gsMap, env);
    }
}

const pendingAssetRequests = new Map<string, { resolve: (value: string) => void; reject: (reason: any) => void; timeout: ReturnType<typeof setTimeout> }>();
let assetRequestCounter = 0;

window.addEventListener('message', (event: MessageEvent) => {
    const { id, success, assetUrl, error } = event.data;
    if (pendingAssetRequests.has(id)) {
        const { resolve, reject, timeout } = pendingAssetRequests.get(id)!;
        clearTimeout(timeout);
        pendingAssetRequests.delete(id);
        if (success) {
            resolve(assetUrl);
        } else {
            reject(new Error(error));
        }
    }
});

async function resolveAssetInHost(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const id = `asset_${++assetRequestCounter}`;
        const timeout = setTimeout(() => {
            pendingAssetRequests.delete(id);
            reject(new Error('Asset resolution timeout'));
        }, 5000);
        pendingAssetRequests.set(id, { resolve, reject, timeout });
        window.parent.postMessage({ type: 'resolveAsset', id, path }, '*');
    });
}

async function handleOperation(method: string, params: any) {
    switch (method) {
        case 'render':
            const rendererType = params.renderer as RendererType || 'openlayers';
            mapRenderer = createMapRenderer(params.gsMap, params.env, rendererType);
            mapRenderer.setOnDirty(() => {
                window.parent.postMessage({ type: 'dirty' }, '*');
            });
            mapRenderer.setOnSync((event) => {
                window.parent.postMessage({ type: 'sync', event }, '*');
            });
            await mapRenderer.render('#map-container');
            return { success: true, renderer: rendererType };
        case 'modelToUI':
            if (mapRenderer) {
                await mapRenderer.modelToUI(params);
            }
            return { success: true };
        case 'getViewExtent':
            if (mapRenderer) {
                return { extent: await mapRenderer.getViewExtent() };
            }
            return { extent: [0, 0, 0, 0] };
        case 'captureScreenshot':
            if (mapRenderer) {
                return await mapRenderer.captureScreenshot();
            }
            return { success: false, error: 'Map renderer not available' };
        case 'resolveAsset':
            try {
                const resolvedUrl = await resolveAssetInHost(params.path);
                return { success: true, assetUrl: resolvedUrl };
            } catch (error: any) {
                return { success: false, error: error.message };
            }
        default:
            if (mapRenderer && mapRenderer.getOperations) {
                const operations: any = mapRenderer.getOperations();
                if (operations[method] && typeof operations[method] === 'function') {
                    await operations[method](...Object.values(params || {}));
                    return { success: true };
                }
            }
            throw new Error(`Unknown method: ${method}`);
    }
}

window.addEventListener('message', async (event: MessageEvent<any>) => {
    const { id, method, params } = event.data;
    let result;
    try {
        result = await handleOperation(method, params);
    } catch (error: any) {
        result = { error: error.message };
    }
    (event.source as any).postMessage({ id, ...result }, event.origin);
});

document.addEventListener('click', () => {
    window.parent.postMessage({ type: 'iframeClicked' }, '*');
}, true);

window.parent.postMessage({ type: 'rendererReady' }, '*');
