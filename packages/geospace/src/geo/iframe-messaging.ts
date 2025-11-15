import { OpenLayersMapRenderer } from './openlayers-map-renderer';
import { rtUtils } from '../rt/index';

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

let mapRenderer: OpenLayersMapRenderer;

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
            mapRenderer = new OpenLayersMapRenderer(params.gsMap, params.env);

            // Set up event listeners for dirty and sync events
            mapRenderer.setOnDirty(() => {
                window.parent.postMessage({ type: 'dirty' }, '*');
            });

            mapRenderer.setOnSync((event) => {
                window.parent.postMessage({ type: 'sync', event }, '*');
            });

            await mapRenderer.render('#map-container');
            return { success: true };

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
            if (mapRenderer && mapRenderer.olMap) {
                const olMap = mapRenderer.olMap;
                
                // Wait for the map to finish rendering
                await new Promise<void>((resolve) => {
                    // Trigger a render to ensure we get a fresh rendercomplete event
                    olMap.renderSync();
                    
                    // Wait for rendercomplete event
                    olMap.once('rendercomplete', () => {
                        resolve();
                    });
                    
                    // Fallback timeout in case rendercomplete doesn't fire
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                });

                // Get the map size
                const size = olMap.getSize();
                const width = size ? size[0] : olMap.getViewport().clientWidth;
                const height = size ? size[1] : olMap.getViewport().clientHeight;

                // Capture the canvas as base64
                try {
                    const canvas = olMap.getViewport().querySelector('canvas');
                    if (!canvas) {
                        return { success: false, error: 'Map canvas not found' };
                    }
                    
                    const dataUrl = canvas.toDataURL('image/png');
                    
                    return {
                        success: true,
                        dataUrl,
                        width,
                        height
                    };
                } catch (error: any) {
                    return { success: false, error: `Failed to capture canvas: ${error.message}` };
                }
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