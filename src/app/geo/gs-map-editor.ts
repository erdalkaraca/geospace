import { css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { when } from 'lit/directives/when.js'
import { keyed } from 'lit/directives/keyed.js'
import { CommandStack } from "../../core/commandregistry.ts";
import { KPart } from "../../parts/k-part.ts";
import { EditorInput } from "../../core/editorregistry.ts";
import { DEFAULT_GSMAP, GsMap, GsLayerType, GsSourceType, DEFAULT_STYLES, DEFAULT_STYLE_RULES } from "../rt";
import { mapChangedSignal, MapEvents, FeatureSelection } from "./gs-signals.ts";
import { watching } from "../../core/signals.ts";
import olCSS from "../../../node_modules/ol/ol.css?raw";
import { loadEnvs, replaceUris, revertBlobUris } from "./utils.ts";
import { File } from '../../core/filesys.ts';
import { toastError, toastInfo } from "../../core/toast.ts";
import { promptDialog } from "../../core/dialog.ts";
import { ChatContext } from "../../core/chatservice.ts";
import {MapRenderer, MapOperations, createProxy, MapSyncEvent} from "./map-renderer.ts";
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
    
    @property({ type: Number })
    private activeDrawingLayerIndex?: number;
    
    @property({ type: String })
    private interactionMode: 'draw' | 'select' | 'none' = 'none';

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

    @watching(mapChangedSignal)
    protected onMapChanged({ part, event }: { part: KPart, event: MapEvents }) {
        // Only respond to layer changes on this map editor
        if (part !== this) return;
        
        // Update toolbar when layers are added, deleted, renamed, or moved
        if (event === MapEvents.LAYER_ADDED || 
            event === MapEvents.LAYER_DELETED || 
            event === MapEvents.LAYER_UPDATED) {
            this.updateToolbar();
        }
    }

    protected renderToolbar() {
        const gsMap = this.getGsMap();
        
        const drawableLayers = gsMap?.layers
            .map((l, idx) => ({ layer: l, index: idx }))
            .filter(({ layer }) => {
                const isVector = layer.type === GsLayerType.VECTOR;
                const isFeatures = layer.source?.type === GsSourceType.Features;
                return isVector && isFeatures;
            }) || [];
        
        const hasActiveLayer = this.activeDrawingLayerIndex !== undefined;
        
        return html`
            <k-command cmd="zoom_in" icon="magnifying-glass-plus" title="Zoom in"></k-command>
            <k-command cmd="zoom_out" icon="magnifying-glass-minus" title="Zoom out"></k-command>
            <k-command cmd="reset_view" icon="house" title="Reset view"></k-command>
            <k-command cmd="refresh_map" icon="rotate" title="Refresh map"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command cmd="toggle_color_mode" icon="circle-half-stroke" title="Toggle dark/light mode"></k-command>
            <k-command cmd="toggle_mobile_view" icon="mobile" title="Toggle mobile view"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-action icon="plus" 
                      title="Create Drawing Layer"
                      .action=${() => this.handleCreateDrawingLayer()}>
            </k-action>
            
            ${when(drawableLayers.length > 0, () => {
                // Create a key based on layer names to force wa-select to re-render when names change
                const layerKey = drawableLayers.map(({ layer, index }) => `${index}:${layer.name}`).join('|');
                return html`
                ${keyed(layerKey, html`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerIndex ?? ''}"
                        @change=${(e: any) => {
                            const newIndex = e.target.value ? parseInt(e.target.value) : undefined;
                            this.activeDrawingLayerIndex = newIndex;
                            if (newIndex === undefined || newIndex === null || e.target.value === '') {
                                this.operations?.disableDrawing();
                                this.interactionMode = 'none';
                            }
                            this.updateToolbar();
                        }}>
                        <wa-option value="">Select layer</wa-option>
                        ${drawableLayers.map(({ layer, index }) => html`
                            <wa-option value="${index}">${layer.name || `Layer ${index + 1}`}</wa-option>
                        `)}
                    </wa-select>
                `)}
                
                <k-action icon="location-dot" 
                          title="Draw Point"
                          ?disabled=${!hasActiveLayer}
                          .action=${() => this.handleDrawPoint()}>
                </k-action>
                <k-action icon="minus" 
                          title="Draw LineString"
                          ?disabled=${!hasActiveLayer}
                          .action=${() => this.handleDrawLine()}>
                </k-action>
                <k-action icon="draw-polygon" 
                          title="Draw Polygon"
                          ?disabled=${!hasActiveLayer}
                          .action=${() => this.handleDrawPolygon()}>
                </k-action>
                
                <k-action icon="trash" 
                          title="Delete Selected Features"
                          ?disabled=${this.interactionMode !== 'select'}
                          .action=${() => this.handleDeleteSelected()}>
                </k-action>

                <wa-divider orientation="vertical"></wa-divider>
            `
            })}
            
            <k-action icon="hand-pointer" 
                      title="Select Features"
                      .action=${() => this.handleSelectFeatures()}>
            </k-action>

            <wa-divider orientation="vertical"></wa-divider>
        `;
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
            
            // Handle sync events from iframe
            this.renderer.setOnSync((event: MapSyncEvent) => {
                if (!this.gsMap) return;
                
                switch (event.type) {
                    case 'viewChanged':
                        // Update view from user interaction
                        this.gsMap.view.center = event.view.center;
                        this.gsMap.view.zoom = event.view.zoom;
                        if (event.view.rotation !== undefined && event.view.rotation !== 0) {
                            (this.gsMap.view as any).rotation = event.view.rotation;
                        }
                        break;
                        
                    case 'featuresChanged':
                        // Update features for specific layer (drawing/deleting)
                        const layer = this.gsMap.layers[event.layerIndex];
                        if (layer && layer.source?.type === GsSourceType.Features) {
                            (layer.source as any).features = event.features;
                        }
                        break;
                        
                    case 'featureSelected':
                        // Emit feature selection event
                        const selectionPayload = {
                            feature: event.feature,
                            layerIndex: event.layerIndex,
                            metrics: event.metrics
                        } as FeatureSelection;
                        console.info('Feature metrics:', selectionPayload.metrics);
                        mapChangedSignal.set({ 
                            part: this, 
                            event: MapEvents.FEATURE_SELECTED,
                            payload: selectionPayload
                        });
                        break;
                        
                    case 'featureDeselected':
                        // Emit feature deselection (null payload)
                        console.info('Feature deselected');
                        mapChangedSignal.set({ 
                            part: this, 
                            event: MapEvents.FEATURE_SELECTED,
                            payload: null
                        });
                        break;
                }
                
                this.markDirty(true);
            });
            this.renderer.setOnClick?.(() => {
                activePartSignal.set(this);
            });

            // Update toolbar after map is fully loaded
            this.updateToolbar();

            mapChangedSignal.set({ part: this, event: MapEvents.LOADED });
        } catch (error: any) {
            console.error('Failed to render map:', error);
            toastError(`Failed to render map: ${error.message}`);
        }
    }

    /**
     * Migrates old GsMap structure to current version
     * Handles:
     * - Old center, zoom, projection as direct properties -> view field
     * - Missing styles and styleRules -> apply defaults
     */
    private migrateGsMap(gsMap: any): GsMap {
        const migratedMap: any = { ...gsMap };
        let migrationPerformed = false;

        // Migrate view structure
        if (!gsMap.view) {
            console.log('Creating view field and migrating old properties...');
            migrationPerformed = true;
            migratedMap.view = {};

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
        }

        // Migrate styling system
        if (!gsMap.styles || Object.keys(gsMap.styles).length === 0) {
            console.log('Adding default styles to map...');
            migrationPerformed = true;
            migratedMap.styles = { ...DEFAULT_STYLES };
        }

        if (!gsMap.styleRules || gsMap.styleRules.length === 0) {
            console.log('Adding default style rules to map...');
            migrationPerformed = true;
            migratedMap.styleRules = [...DEFAULT_STYLE_RULES];
        }

        if (migrationPerformed) {
            console.log('Map migration completed');
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

    private async handleDrawPoint() {
        if (this.activeDrawingLayerIndex === undefined) return;
        await this.operations?.enableDrawing('Point', this.activeDrawingLayerIndex);
        this.interactionMode = 'draw';
        this.updateToolbar();
    }

    private async handleDrawLine() {
        if (this.activeDrawingLayerIndex === undefined) return;
        await this.operations?.enableDrawing('LineString', this.activeDrawingLayerIndex);
        this.interactionMode = 'draw';
        this.updateToolbar();
    }

    private async handleDrawPolygon() {
        if (this.activeDrawingLayerIndex === undefined) return;
        await this.operations?.enableDrawing('Polygon', this.activeDrawingLayerIndex);
        this.interactionMode = 'draw';
        this.updateToolbar();
    }

    private async handleSelectFeatures() {
        await this.operations?.enableFeatureSelection(this.activeDrawingLayerIndex ?? -1);
        this.interactionMode = 'select';
        this.updateToolbar();
    }

    private async handleDeleteSelected() {
        if (this.interactionMode !== 'select') return;
        try {
            await this.operations?.deleteSelectedFeatures();
            toastInfo('Selected features deleted');
        } catch (error: any) {
            toastError(error.message);
        }
    }

    private async handleCreateDrawingLayer() {
        if (!this.gsMap) {
            toastError('Map not initialized');
            return;
        }
        
        const layerName = await promptDialog('Enter name for new drawing layer:', 'Drawing Layer');
        
        if (!layerName) {
            return;
        }
        
        const newLayer = {
            name: layerName,
            type: GsLayerType.VECTOR,
            source: {
                type: GsSourceType.Features,
                features: []
            },
            visible: true
        };
        
        await this.operations?.addLayer(newLayer, false);
        
        const newLayerIndex = this.gsMap.layers.length - 1;
        this.activeDrawingLayerIndex = newLayerIndex;
        
        this.updateToolbar();
        
        toastInfo(`Created drawing layer: ${layerName}`);
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