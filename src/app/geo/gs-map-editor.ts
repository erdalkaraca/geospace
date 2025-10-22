import { css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { CommandStack } from "../../core/commandregistry.ts";
import { KPart } from "../../parts/k-part.ts";
import { EditorInput } from "../../core/editorregistry.ts";
import { DEFAULT_GSMAP, GsMap } from "../rt";
import { mapChangedSignal, MapEvents } from "./gs-signals.ts";
import olCSS from "../../../node_modules/ol/ol.css?raw";
import { loadEnvs, replaceUris, revertBlobUris } from "./utils.ts";
import { File } from '../../core/filesys.ts';
import { toastError, toastInfo } from "../../core/toast.ts";
import { ChatContext } from "../../core/chatservice.ts";
import {MapRenderer, MapOperations, createProxy} from "./map-renderer.ts";
import { IFrameMapRenderer } from "./proxy-map-renderer.ts";
import { DomainMapOperations } from "./domain-map-operations.ts";

@customElement('gs-map')
export class GsMapEditor extends KPart {
    @property({ attribute: false })
    public input?: EditorInput;

    private mapContainer: Ref<HTMLElement> = createRef();
    private renderer?: MapRenderer;
    private operations?: MapOperations;
    private gsMap?: GsMap;
    private isFirstConnection = true;

    chatContext: ChatContext = {
        history: []
    }

    constructor() {
        super();
        this.commandStack = new CommandStack()
    }

    async connectedCallback() {
        super.connectedCallback();
        
        // Skip on first connection (initial render)
        if (this.isFirstConnection) {
            this.isFirstConnection = false;
            return;
        }
        
        // On subsequent connections (perspective switches), recreate the iframe
        if (this.renderer?.reattached) {
            await this.renderer.reattached();
        }
    }

    protected async doInitUI() {
        const file = this.input?.data as File

        const env = await loadEnvs(".env", "envs/.env", "env", "envs/env", "default.env", "envs/default.env", "dev.env", "envs/dev.env")
        env["BUILD_TIME"] = new Date()

        const textContents = await file.getContents();
        let gsMap = (textContents && textContents.trim() ? JSON.parse(textContents) : DEFAULT_GSMAP)! as GsMap

        // Migrate old map structure to new view field
        gsMap = this.migrateGsMap(gsMap);

        // Replace all workspace relative URLs with blob URLs
        await replaceUris(gsMap, "url");
        await replaceUris(gsMap, "src");

        this.gsMap = gsMap;

        // Create iframe renderer for isolation
        this.renderer = new IFrameMapRenderer(gsMap, env);

        const iframeOps = this.renderer.getOperations();
        const domainOps = new DomainMapOperations(gsMap, this.renderer);

        // Create composite operations that combine domain model and iframe operations
        this.operations = createProxy([domainOps, iframeOps]);

        try {
            if (!this.mapContainer.value) {
                throw new Error('Map container not available');
            }
            await this.renderer.render(this.mapContainer.value);

            this.renderer.setOnDirty(() => this.markDirty(true));
            this.renderer.setOnSync((updatedGsMap: GsMap) => {
                this.gsMap!.view = updatedGsMap.view;
                this.markDirty(true);
            });

            mapChangedSignal.set({ part: this, event: MapEvents.LOADED });
        } catch (error: any) {
            console.error('Failed to render map:', error);
            toastError(`Failed to render map: ${error.message}`);
        }
    }

    /**
     * Migrates old GsMap structure to new view field structure
     * Handles maps that still have center, zoom, projection as direct properties
     */
    private migrateGsMap(gsMap: any): GsMap {
        // Check if this map already has the new view structure
        if (gsMap.view) {
            // Already has new structure, no migration needed
            return gsMap as GsMap;
        }

        // Create view object if it doesn't exist
        console.log('Creating view field and migrating old properties...');
        const migratedMap: any = {
            ...gsMap,
            view: {}
        };

        // Check each old field and transfer it to the view
        if (gsMap.center !== undefined) {
            migratedMap.view.center = gsMap.center;
            delete migratedMap.center;
        }

        if (gsMap.zoom !== undefined) {
            migratedMap.view.zoom = gsMap.zoom;
            delete migratedMap.zoom;
        }

        if (gsMap.projection !== undefined) {
            migratedMap.view.projection = gsMap.projection;
            delete migratedMap.projection;
        }

        if (migratedMap.view.center === undefined) {
            migratedMap.view.center = [0, 0];
        }
        if (migratedMap.view.zoom === undefined) {
            migratedMap.view.zoom = 0;
        }
        if (migratedMap.view.projection === undefined) {
            migratedMap.view.projection = 'EPSG:3857';
        }

        return migratedMap as GsMap;
    }

    getGsMap(): GsMap | undefined {
        return this.gsMap;
    }


    async save() {
        if (!this.renderer) {
            toastError('Map not initialized');
            return;
        }

        try {
            if (!this.gsMap) {
                toastError('Map not initialized');
                return;
            }
            const mapClone = JSON.parse(JSON.stringify(this.gsMap));
            await revertBlobUris(mapClone, "url");
            await revertBlobUris(mapClone, "src");
            this.input?.data.saveContents(JSON.stringify(mapClone, null, 2));
            this.markDirty(false);
        } catch (error: any) {
            toastError(`Save failed: ${error.message}`);
        }
    }

    public get mapOperations(): MapOperations | undefined {
        return this.operations;
    }

    edit() {
        toastInfo("not yet implemented")
    }

    protected doClose() {
        // Clean up renderer (this will clean up all user modules and OpenLayers)
        this.renderer?.destroy();
        this.renderer = undefined;
        this.input = undefined;
    }

    render() {
        return html`
            <div class="gc-map-container" ${ref(this.mapContainer)}>
            </div>
        `
    }

    static styles = [unsafeCSS(olCSS), css`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
        }

        .gc-map-container {
            flex: 1;
        }

        input.prompt {
            flex: 1;
            font-size: large;
        }
    `];
}

declare global {
    interface HTMLElementTagNameMap {
        'gs-map': GsMapEditor
    }
}