import { css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { CommandStack } from "../../core/commandregistry.ts";
import { KPart } from "../../parts/k-part.ts";
import { EditorInput } from "../../core/editorregistry.ts";
import { contributionRegistry } from "../../core/contributionregistry.ts";
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
import { SignalingMapOperations } from "./signaling-map-operations.ts";
import { activePartSignal } from "../../core/appstate.ts";
import logger from '../../core/logger.ts';

@customElement('gs-map')
export class GsMapEditor extends KPart {
    @property({ attribute: false })
    public input?: EditorInput;

    private mapContainer: Ref<HTMLElement> = createRef();
    private renderer?: MapRenderer;
    private operations?: MapOperations;
    private gsMap?: GsMap;
    private isFirstConnection = true;
    private initialView?: { center: [number, number], zoom: number };

    chatContext: ChatContext = {
        history: []
    }

    constructor() {
        super();
        this.commandStack = new CommandStack()
    }

    getOperations(): MapOperations {
        return this.operations!;
    }

    protected doBeforeUI() {
        this.registerToolbarActions();
    }

    private registerToolbarActions() {
        // Zoom controls
        this.registerToolbarContribution({
            label: "Zoom in",
            icon: "magnifying-glass-plus",
            command: "zoom_in",
            slot: "start"
        });
        
        this.registerToolbarContribution({
            label: "Zoom out",
            icon: "magnifying-glass-minus",
            command: "zoom_out",
            slot: "start"
        });
        
        // Navigation controls
        this.registerToolbarContribution({
            label: "Reset view",
            icon: "house",
            command: "reset_view",
            slot: "start"
        });
        
        this.registerToolbarDivider();
        
        // Display mode controls
        this.registerToolbarContribution({
            label: "Toggle dark/light mode",
            icon: "circle-half-stroke",
            command: "toggle_color_mode",
            slot: "start"
        });
        
        this.registerToolbarContribution({
            label: "Toggle mobile view",
            icon: "mobile",
            command: "toggle_mobile_view",
            slot: "start"
        });
        
        this.registerToolbarDivider();
        
        // Action controls
        this.registerToolbarContribution({
            label: "Refresh map",
            icon: "rotate",
            command: "refresh_map",
            slot: "start"
        });
    }
    
    private registerToolbarDivider() {
        const id = this.getAttribute('id');
        if (!id) return;
        
        const toolbarTarget = `toolbar.${id}`;
        contributionRegistry.registerContribution(toolbarTarget, {
            label: "",
            html: `<wa-divider orientation="vertical"></wa-divider>`,
            target: toolbarTarget,
            slot: "start"
        });
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
            // Re-setup click handler after reattachment
            if (this.renderer.setOnClick) {
                this.renderer.setOnClick(() => {
                    activePartSignal.set(this);
                });
            }
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
        
        // Store initial view for reset functionality
        if (gsMap.view) {
            this.initialView = {
                center: [...gsMap.view.center] as [number, number],
                zoom: gsMap.view.zoom
            };
        }

        // Create iframe renderer for isolation
        this.renderer = new IFrameMapRenderer(gsMap, env);

        const iframeOps = this.renderer.getOperations();
        const domainOps = new DomainMapOperations(gsMap, this.renderer);
        const signalingOps = new SignalingMapOperations(this);

        // Create composite operations chain: domain model -> iframe -> signaling
        this.operations = createProxy([domainOps, iframeOps, signalingOps]);

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
            this.renderer.setOnClick?.(() => {
                activePartSignal.set(this);
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

    async refresh() {
        if (!this.renderer) {
            logger.error('Map not initialized');
            return;
        }
        
        await this.renderer.modelToUI();
    }

    async resetView() {
        if (!this.operations || !this.initialView) {
            return;
        }
        
        await this.operations.setCenter(this.initialView.center);
        await this.operations.setZoom(this.initialView.zoom);
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