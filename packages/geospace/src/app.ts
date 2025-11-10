import {html} from "lit";
import {customElement} from "lit/decorators.js";

import {
    EDITOR_AREA_MAIN,
    SIDEBAR_MAIN,
    SIDEBAR_MAIN_BOTTOM,
    SIDEBAR_AUXILIARY,
    PANEL_BOTTOM,
    TOOLBAR_MAIN,
    TOOLBAR_MAIN_CENTER,
    TOOLBAR_MAIN_RIGHT,
    TOOLBAR_BOTTOM,
    TOOLBAR_BOTTOM_CENTER,
    TOOLBAR_BOTTOM_END,
    KContainer
} from "@kispace-io/appspace/api";

@customElement('gs-app')
export class GSApp extends KContainer {
    createRenderRoot() {
        // intentionally disabling shadow DOM for the application root
        return this;
    }

    render() {
        return html`
            <style>
                gs-app {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                gs-app .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                gs-app .toolbar-bottom {
                    width: 100%;
                    border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    display: grid;
                    grid-template-columns: 1fr 2fr auto;
                    align-items: center;
                    flex-shrink: 0;
                    min-height: 32px;
                    padding: 0 var(--wa-space-s);
                    box-sizing: border-box;
                }
                
                gs-app .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                gs-app .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <!-- TOP TOOLBAR -->
            <div class="toolbar-top">
                <k-toolbar id=${TOOLBAR_MAIN}></k-toolbar>
                <k-toolbar id=${TOOLBAR_MAIN_CENTER}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${TOOLBAR_MAIN_RIGHT}></k-toolbar>
            </div>
            
            <!-- MAIN CONTENT AREA (VS Code style layout) -->
            <k-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes="15%, 65%, 20%">
                
                <!-- LEFT SIDEBAR (split vertically) -->
                <k-resizable-grid 
                    id="left-sidebar-split" 
                    orientation="vertical" 
                    sizes="50%, 50%">
                    <k-tabs id="${SIDEBAR_MAIN}"></k-tabs>
                    <k-tabs id="${SIDEBAR_MAIN_BOTTOM}"></k-tabs>
                </k-resizable-grid>
                
                <!-- Editor Area (fixed, never moves) -->
                <k-tabs id="${EDITOR_AREA_MAIN}"></k-tabs>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${SIDEBAR_AUXILIARY}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${TOOLBAR_BOTTOM}></k-toolbar>
                <k-toolbar id=${TOOLBAR_BOTTOM_CENTER}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${TOOLBAR_BOTTOM_END}></k-toolbar>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'gs-app': GSApp;
    }
}