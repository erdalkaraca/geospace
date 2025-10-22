import {MapOperations, MapRenderer} from "./map-renderer.ts";
import {GsMap} from "../rt";

const iframeSrc = "iframe-map-renderer.html";

/**
 * IFrame map renderer that communicates with an iframe-based renderer
 * This allows the host app to interact with a map renderer running in isolation
 */
export class IFrameMapRenderer implements MapRenderer {
    private iframe?: HTMLIFrameElement;
    private messageId = 0;
    private pendingMessages = new Map<number, { resolve: (value: any) => void; reject: (error: any) => void }>();
    private gsMap: GsMap;
    private env?: any;
    private operations: MapOperations;
    private onDirtyCallback?: () => void;
    private onSyncCallback?: (gsMap: GsMap) => void;
    private isMobileView: boolean = false;
    private targetElement?: HTMLElement;

    constructor(gsMap: GsMap, env?: any) {
        this.gsMap = gsMap;
        this.env = env;
        this.operations = this.createProxy(this);
    }

    createProxy(renderer: IFrameMapRenderer): MapOperations {
        return new Proxy({}, {
            get(_, prop: string) {
                return async (...args: any[]) => {
                    return await renderer.sendMessage(prop, { ...args });
                };
            }
        }) as MapOperations;
    }

    async reattached(): Promise<void> {
        // When the editor area moves between perspectives, the iframe's JavaScript context is destroyed
        // We need to recreate the iframe with a fresh context
        if (!this.targetElement) {
            console.warn('No target element stored, cannot reattach');
            return;
        }
        
        // Clean up the old broken iframe
        if (this.iframe && this.iframe.parentElement) {
            this.iframe.remove();
        }
        
        // Re-render with a fresh iframe
        await this.render(this.targetElement);
    }

    async render(container: string | HTMLElement): Promise<void> {
        // Create iframe for isolated rendering
        this.iframe = document.createElement('iframe');
        this.iframe.style.overflow = 'hidden';
        
        // Apply initial styles
        this.updateIframeStyles();

        // Set up iframe content
        this.iframe.src = iframeSrc;

        // Append to container
        this.targetElement = typeof container === 'string'
            ? document.querySelector(container) as HTMLElement
            : container;

        if (!this.targetElement) {
            throw new Error('Container element not found');
        }

        this.targetElement.innerHTML = '';
        this.targetElement.appendChild(this.iframe);

        // Wait for iframe to load and initialize
        await this.waitRendererReady();

        this.setupMessageListener();

        // Send initial render command
        await this.sendMessage('render', { gsMap: this.gsMap, env: this.env });
    }

    async modelToUI(updatedGsMap?: GsMap): Promise<void> {
        await this.sendMessage('modelToUI', updatedGsMap ?? this.gsMap);
    }

    getOperations(): MapOperations {
        return this.operations;
    }

    getViewExtent(): number[] {
        // This would need to be implemented as an async call to the iframe
        // For now, return a placeholder
        return [0, 0, 0, 0];
    }

    setOnDirty(callback: () => void): void {
        this.onDirtyCallback = callback;
    }

    triggerDirty() {
        if (this.onDirtyCallback) {
            this.onDirtyCallback()
        }
    }

    setOnSync(callback: (gsMap: GsMap) => void): void {
        this.onSyncCallback = callback;
    }

    triggerSync() {
        if (this.onSyncCallback) {
            this.onSyncCallback(this.gsMap)
        }
    }

    toggleMobileView(): void {
        this.isMobileView = !this.isMobileView;
        this.updateIframeStyles();
    }

    isInMobileView(): boolean {
        return this.isMobileView;
    }

    private updateIframeStyles(): void {
        if (!this.iframe) return;

        if (this.isMobileView) {
            // Mobile simulation styles
            this.iframe.style.width = '375px';
            this.iframe.style.height = '667px';
            this.iframe.style.border = '2px solid rgb(168, 168, 168)';
            this.iframe.style.borderRadius = '20px';
            this.iframe.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.51)';
            this.iframe.style.margin = '20px auto';
            this.iframe.style.display = 'block';
        } else {
            // Desktop styles
            this.iframe.style.width = '100%';
            this.iframe.style.height = '100%';
            this.iframe.style.border = 'none';
            this.iframe.style.borderRadius = '0';
            this.iframe.style.boxShadow = 'none';
            this.iframe.style.margin = '0';
        }
    }

    private async handleAssetResolution(id: string, path: string): Promise<void> {
        try {
            // Import the toBlobUri function from the host context
            const { toBlobUri } = await import('./utils.ts');
            const assetUrl = await toBlobUri(path);
            
            // Send the resolved URL back to the iframe with the same ID
            this.iframe!.contentWindow!.postMessage({
                id: id,
                success: true,
                assetUrl: assetUrl
            }, '*');
        } catch (error) {
            // Send error back to iframe with the same ID
            this.iframe!.contentWindow!.postMessage({
                id: id,
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            }, '*');
        }
    }

    destroy(): void {
        if (this.messageListener) {
            window.removeEventListener('message', this.messageListener);
            this.messageListener = undefined;
        }
        if (this.iframe) {
            this.iframe.remove();
            this.iframe = undefined;
        }
        this.pendingMessages.clear();
    }

    private messageListener?: (event: MessageEvent) => void;

    private setupMessageListener(): void {
        this.messageListener = (event: MessageEvent) => {
            // Only handle messages from our iframe
            if (event.source !== this.iframe?.contentWindow) {
                return;
            }

            const { id, result, error, type, gsMap } = event.data;
            
            // Handle async responses to our messages
            if (id !== undefined && this.pendingMessages.has(id)) {
                const { resolve, reject } = this.pendingMessages.get(id)!;
                this.pendingMessages.delete(id);

                if (error) {
                    reject(new Error(error));
                } else {
                    resolve(result);
                }
            }
            
            // Handle events from iframe
            if (type === 'dirty') {
                this.onDirtyCallback?.();
            } else if (type === 'sync') {
                this.onSyncCallback?.(gsMap);
            } else if (type === 'resolveAsset') {
                // Handle asset resolution requests from iframe
                this.handleAssetResolution(id, event.data.path);
            }
        };

        window.addEventListener('message', this.messageListener);
    }

    private async waitRendererReady(): Promise<void> {
        return new Promise((resolve) => {
            const listener = (event: MessageEvent) => {
                // Only handle messages from our iframe
                if (event.source !== this.iframe?.contentWindow) {
                    return;
                }
                if (event.data.type === 'rendererReady') {
                    window.removeEventListener('message', listener);
                    resolve();
                }
            };
            window.addEventListener('message', listener);
        });
    }

    async sendMessage(method: string, params: any): Promise<any> {
        if (!this.iframe) {
            throw new Error('Iframe not initialized');
        }

        const id = ++this.messageId;

        return new Promise((resolve, reject) => {
            this.pendingMessages.set(id, { resolve, reject });

            this.iframe!.contentWindow!.postMessage({
                id,
                method,
                params
            }, '*');

            // Set timeout for message response
            setTimeout(() => {
                if (this.pendingMessages.has(id)) {
                    this.pendingMessages.delete(id);
                    reject(new Error('Message timeout'));
                }
            }, 5000);
        });
    }
}
