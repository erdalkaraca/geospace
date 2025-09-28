import {css, html, unsafeCSS} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {createRef, ref, Ref} from 'lit/directives/ref.js'
import {CommandStack} from "../../core/commandregistry.ts";
import {KPart} from "../../parts/k-part.ts";
import {EditorInput} from "../../core/editorregistry.ts";
import {DEFAULT_GSMAP, GsMap} from "../rt";
import {mapChangedSignal, MapEvents} from "./gs-signals.ts";
import olCSS from "../../../node_modules/ol/ol.css?raw";
import {loadEnvs, replaceUris, revertBlobUris} from "./utils.ts";
import {File} from '../../core/filesys.ts';
import {toastError, toastInfo} from "../../core/toast.ts";
import {ChatContext} from "../../core/chatservice.ts";
import {MapRenderer, MapOperations} from "./map-renderer.ts";
import {OpenLayersMapRenderer, OpenLayersMapOperations} from "./openlayers-map-renderer.ts";

@customElement('gs-map')
export class GsMapEditor extends KPart {
    @property({attribute: false})
    public input?: EditorInput;

    private mapContainer: Ref<HTMLElement> = createRef();
    private renderer?: MapRenderer;
    private operations?: MapOperations;
    
   
    chatContext: ChatContext = {
        history: []
    }

    protected doBeforeUI() {
        this.commandStack = new CommandStack()
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

        // Create OpenLayers renderer with the gsMap and env
        this.renderer = new OpenLayersMapRenderer(gsMap, env);
        this.operations = new OpenLayersMapOperations(this.renderer as OpenLayersMapRenderer);

        try {
            if (!this.mapContainer.value) {
                throw new Error('Map container not available');
            }
            await this.renderer.render(this.mapContainer.value);
            
            // Set up event listeners for dirty state
            this.setupEventListeners();
            
            mapChangedSignal.set({part: this, event: MapEvents.LOADED});
        } catch (error: any) {
            console.error('Failed to render map:', error);
            toastError(`Failed to render map: ${error.message}`);
        }
    }
    
    private setupEventListeners() {
        if (!this.renderer) return;
        
        // Set up dirty callback
        this.renderer.setOnDirty(() => this.markDirty(true));
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
        if (!this.renderer) {
            return undefined
        }
        return this.renderer.getGsMap();
    }


    async save() {
        if (!this.renderer) {
            toastError('Map not initialized');
            return;
        }

        try {
            const gsMap = this.renderer.getGsMap();
            const mapClone = JSON.parse(JSON.stringify(gsMap));
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