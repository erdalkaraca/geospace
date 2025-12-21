import {
    MapRenderer,
    rtUtils
} from '@kispace-io/gs-lib';
import { OpenLayersMapRenderer } from '@kispace-io/gs-lib/ol';
import { MapLibreMapRenderer } from '@kispace-io/gs-lib/ml';

// Supported renderer types
export type RendererType = 'openlayers' | 'maplibre';

// Override asset resolution to use the existing resolveAssetInHost function
rtUtils.resolveUrl = async (path: string) => {
    try {
        // Use the existing resolveAssetInHost function from iframe-messaging.ts
        return await resolveAssetInHost(path);
    } catch (error) {
        console.warn('Failed to resolve asset via host:', error);
        return path; // Fallback to original path
    }
};

// Renderer instance - uses MapRenderer interface for abstraction
let mapRenderer: MapRenderer;

/**
 * Factory function to create the appropriate renderer
 * @param gsMap - The GsMap domain model
 * @param env - Environment variables
 * @param rendererType - Which renderer to use ('openlayers' or 'maplibre')
 */
function createMapRenderer(gsMap: any, env: any, rendererType: RendererType = 'openlayers'): MapRenderer {
    switch (rendererType) {
        case 'maplibre':
            return new MapLibreMapRenderer(gsMap, env);
        case 'openlayers':
        default:
            return new OpenLayersMapRenderer(gsMap, env);
    }
}

// Single listener for all asset resolution responses
const pendingAssetRequests = new Map<string, { resolve: (value: string) => void; reject: (reason: any) => void; timeout: NodeJS.Timeout }>();

// Global counter for unique IDs
let assetRequestCounter = 0;

// Set up single listener for asset resolution responses
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

// Function to resolve assets by asking the host
async function resolveAssetInHost(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        // Generate unique ID using global counter
        const id = `asset_${++assetRequestCounter}`;

        // Set timeout
        const timeout = setTimeout(() => {
            pendingAssetRequests.delete(id);
            reject(new Error('Asset resolution timeout'));
        }, 5000);

        // Store the promise resolvers
        pendingAssetRequests.set(id, { resolve, reject, timeout });

        // Request asset resolution from host
        window.parent.postMessage({
            type: 'resolveAsset',
            id: id,
            path: path
        }, '*');
    });
}

async function handleOperation(method: string, params: any) {
    switch (method) {
        case 'render':
            // Create renderer based on specified type (defaults to openlayers)
            const rendererType = params.renderer as RendererType || 'openlayers';
            mapRenderer = createMapRenderer(params.gsMap, params.env, rendererType);

            // Set up event listeners for dirty and sync events
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
            } else {
                return { extent: [0, 0, 0, 0] };
            }

        case 'captureScreenshot':
            if (mapRenderer) {
                return await mapRenderer.captureScreenshot();
            } else {
                return { success: false, error: 'Map renderer not available' };
            }

        case 'resolveAsset':
            // Forward asset resolution to the host
            try {
                const resolvedUrl = await resolveAssetInHost(params.path);
                return { success: true, assetUrl: resolvedUrl };
            } catch (error: any) {
                return { success: false, error: error.message };
            }

        default:
            // Try to call method on renderer operations
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

    // Send response back to parent
    // @ts-ignore
    event.source!.postMessage({ id, ...result }, event.origin);
});

// Notify parent when iframe is clicked to activate the part
document.addEventListener('click', () => {
    window.parent.postMessage({ type: 'iframeClicked' }, '*');
}, true); // Use capture phase to catch all clicks

// Notify parent that iframe is ready
window.parent.postMessage({ type: 'rendererReady' }, '*');