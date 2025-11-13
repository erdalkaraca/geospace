import {html} from "lit";
import {customElement, property} from "lit/decorators.js";

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
    TOOLBAR_BOTTOM_END
} from "../core/constants";
import {KContainer} from "../parts/k-container";

@customElement('k-standard-app')
export class KStandardApp extends KContainer {
    @property({type: Boolean, attribute: 'show-bottom-sidebar'})
    showBottomSidebar: boolean = true;

    @property({type: Boolean, attribute: 'show-bottom-panel'})
    showBottomPanel: boolean = false;

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                }
                
                html {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }
                
                body {
                    height: 100%;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                
                k-standard-app {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                k-standard-app .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                k-standard-app .toolbar-bottom {
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
                
                k-standard-app .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                k-standard-app .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <div class="toolbar-top">
                <k-toolbar id=${TOOLBAR_MAIN}></k-toolbar>
                <k-toolbar id=${TOOLBAR_MAIN_CENTER}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${TOOLBAR_MAIN_RIGHT}></k-toolbar>
            </div>
            
            <k-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes="15%, 65%, 20%">
                
                ${this.showBottomSidebar
                    ? html`
                        <k-resizable-grid 
                            id="left-sidebar-split" 
                            orientation="vertical" 
                            sizes="50%, 50%">
                            <k-tabs id="${SIDEBAR_MAIN}"></k-tabs>
                            <k-tabs id="${SIDEBAR_MAIN_BOTTOM}"></k-tabs>
                        </k-resizable-grid>
                    `
                    : html`<k-tabs id="${SIDEBAR_MAIN}"></k-tabs>`
                }
                
                ${this.showBottomPanel
                    ? html`
                        <k-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <k-tabs id="${EDITOR_AREA_MAIN}"></k-tabs>
                            <k-tabs id="${PANEL_BOTTOM}"></k-tabs>
                        </k-resizable-grid>
                    `
                    : html`<k-tabs id="${EDITOR_AREA_MAIN}"></k-tabs>`
                }
                
                <k-tabs id="${SIDEBAR_AUXILIARY}"></k-tabs>
            </k-resizable-grid>
            
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
        'k-standard-app': KStandardApp;
    }
}

