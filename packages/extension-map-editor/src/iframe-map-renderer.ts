import {
    MapOperations,
    MapRenderer,
    MapSyncEvent,
    ScreenshotResult,
    GsMap
} from "@kispace-io/gs-lib";

import iframeMessagingUrl from "./iframe-messaging.ts?url";

const IFRAME_HTML = (scriptUrl: string) => `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Map Renderer</title><style>html,body,#map-container{height:100%;width:100%;margin:0;padding:0;overflow:hidden}</style></head><body><div id="map-container"></div><script type="module" src="${scriptUrl}"><\/script></body></html>`;

export type RendererType = 'openlayers' | 'maplibre';

export class IFrameMapRenderer implements MapRenderer {
    private iframe?: HTMLIFrameElement;
    private messageId = 0;
    private pendingMessages = new Map<number, { resolve: (value: any) => void; reject: (error: any) => void }>();
    private gsMap: GsMap;
    private env?: any;
    private rendererType: RendererType;
    private operations: MapOperations;
    private onDirtyCallback?: () => void;
    private onSyncCallback?: (event: MapSyncEvent) => void;
    private onClickCallback?: () => void;
    private isMobileView: boolean = false;
    private targetElement?: HTMLElement;

    constructor(gsMap: GsMap, env?: any, rendererType: RendererType = 'openlayers') {
        this.gsMap = gsMap;
        this.env = env;
        this.rendererType = rendererType;
        this.operations = this.createProxy(this);
    }

    getRendererType(): RendererType {
        return this.rendererType;
    }

    getEnv(): any {
        return this.env;
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
        if (!this.targetElement) {
            console.warn('No target element stored, cannot reattach');
            return;
        }
        if (this.iframe && this.iframe.parentElement) {
            this.iframe.remove();
        }
        await this.render(this.targetElement);
    }

    async render(container: string | HTMLElement): Promise<void> {
        this.iframe = document.createElement('iframe');
        this.iframe.style.overflow = 'hidden';
        this.updateIframeStyles();
        this.iframe.srcdoc = IFRAME_HTML(iframeMessagingUrl);
        this.targetElement = typeof container === 'string'
            ? document.querySelector(container) as HTMLElement
            : container;
        if (!this.targetElement) {
            throw new Error('Container element not found');
        }
        this.targetElement.innerHTML = '';
        this.targetElement.appendChild(this.iframe);
        await this.waitRendererReady();
        this.setupMessageListener();
        await this.sendMessage('render', { gsMap: this.gsMap, env: this.env, renderer: this.rendererType });
    }

    async modelToUI(updatedGsMap?: GsMap): Promise<void> {
        await this.sendMessage('modelToUI', updatedGsMap ?? this.gsMap);
    }

    getOperations(): MapOperations {
        return this.operations;
    }

    async getViewExtent(): Promise<number[]> {
        const result = await this.sendMessage('getViewExtent', {});
        return result?.extent || [0, 0, 0, 0];
    }

    async captureScreenshot(): Promise<ScreenshotResult> {
        const result = await this.sendMessage('captureScreenshot', {});
        return result as ScreenshotResult;
    }

    setOnDirty(callback: () => void): void {
        this.onDirtyCallback = callback;
    }

    triggerDirty() {
        this.onDirtyCallback?.();
    }

    setOnSync(callback: (event: MapSyncEvent) => void): void {
        this.onSyncCallback = callback;
    }

    setOnClick(callback: () => void): void {
        this.onClickCallback = callback;
    }

    triggerSync(event: MapSyncEvent) {
        this.onSyncCallback?.(event);
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
            this.iframe.style.width = '375px';
            this.iframe.style.height = '667px';
            this.iframe.style.border = '2px solid rgb(168, 168, 168)';
            this.iframe.style.borderRadius = '20px';
            this.iframe.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.51)';
            this.iframe.style.margin = '20px auto';
            this.iframe.style.display = 'block';
        } else {
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
            const { toBlobUri } = await import('./utils');
            const assetUrl = await toBlobUri(path);
            this.iframe!.contentWindow!.postMessage({ id, success: true, assetUrl }, '*');
        } catch (error) {
            this.iframe!.contentWindow!.postMessage({
                id,
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
            if (event.source !== this.iframe?.contentWindow) {
                return;
            }
            const { id, result, error, type, event: syncEvent } = event.data;
            if (id !== undefined && this.pendingMessages.has(id)) {
                const { resolve, reject } = this.pendingMessages.get(id)!;
                this.pendingMessages.delete(id);
                if (error) {
                    reject(new Error(error));
                } else {
                    const responseData = result ?? Object.fromEntries(
                        Object.entries(event.data).filter(([key]) =>
                            !['id', 'type', 'event', 'error'].includes(key)
                        )
                    );
                    resolve(responseData);
                }
            }
            if (type === 'dirty') {
                this.onDirtyCallback?.();
            } else if (type === 'sync') {
                this.onSyncCallback?.(syncEvent);
            } else if (type === 'iframeClicked') {
                this.onClickCallback?.();
            } else if (type === 'resolveAsset') {
                this.handleAssetResolution(id, event.data.path);
            }
        };
        window.addEventListener('message', this.messageListener);
    }

    private async waitRendererReady(): Promise<void> {
        return new Promise((resolve) => {
            const listener = (event: MessageEvent) => {
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
            this.iframe!.contentWindow!.postMessage({ id, method, params }, '*');
            setTimeout(() => {
                if (this.pendingMessages.has(id)) {
                    this.pendingMessages.delete(id);
                    reject(new Error('Message timeout'));
                }
            }, 5000);
        });
    }
}
