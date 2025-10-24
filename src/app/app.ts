import {html, render} from "lit";

import "./app-contributions.ts"

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
} from "../core/constants.ts";

import {extensionRegistry} from "../core/extensionregistry.ts";
import {createLogger} from "../core/logger.ts";

const logger = createLogger('App');

const coreExtensions = [
    "system.mdeditor",
    "system.monaco",
    "system.download",
    "system.commandpalette",
    "system.memoryusage"
];

logger.info('Initializing geo!space...');

coreExtensions.forEach(extId => {
    extensionRegistry.enable(extId);
});

logger.info('Application initialized successfully');
logger.info('geo!space is ready!');

render(html`
    <div id="gs-app" style="display: flex; flex-direction: column; height: 100vh; width: 100%;">
        <!-- TOP TOOLBAR -->
        <div style="width: 100%; display: grid; grid-template-columns: 1fr 2fr 1fr; align-items: center; border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud); flex-shrink: 0;">
            <k-toolbar id=${TOOLBAR_MAIN}></k-toolbar>
            <k-toolbar id=${TOOLBAR_MAIN_CENTER}></k-toolbar>
            <k-toolbar style="justify-self: end;" id=${TOOLBAR_MAIN_RIGHT} align="right"></k-toolbar>
        </div>
        
        <!-- MAIN CONTENT AREA (VS Code style layout) -->
        <k-resizable-grid 
            id="main-layout" 
            orientation="horizontal" 
            sizes="15%, 65%, 20%"
            style="flex: 1; min-height: 0;">
            
            <!-- LEFT SIDEBAR (split vertically) -->
            <k-resizable-grid 
                id="left-sidebar-split" 
                orientation="vertical" 
                sizes="50%, 50%">
                <k-tabs id="${SIDEBAR_MAIN}"></k-tabs>
                <k-tabs id="${SIDEBAR_MAIN_BOTTOM}"></k-tabs>
            </k-resizable-grid>
            
            <!-- CENTER: Editor + Bottom Panel -->
            <k-resizable-grid 
                id="center-layout" 
                orientation="vertical" 
                sizes="70%, 30%">
                
                <!-- Editor Area (fixed, never moves) -->
                <k-tabs id="${EDITOR_AREA_MAIN}"></k-tabs>
                
                <!-- Bottom Panel (terminal, output, etc.) -->
                <k-tabs id="${PANEL_BOTTOM}"></k-tabs>
            </k-resizable-grid>
            
            <!-- RIGHT SIDEBAR (auxiliary) -->
            <k-tabs id="${SIDEBAR_AUXILIARY}"></k-tabs>
        </k-resizable-grid>
        
        <!-- BOTTOM TOOLBAR (status bar) -->
        <div style="width: 100%; border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud); display: grid; grid-template-columns: 1fr 2fr auto; align-items: center; flex-shrink: 0; min-height: 32px; padding: 0 var(--wa-space-xs);">
            <k-toolbar id=${TOOLBAR_BOTTOM}></k-toolbar>
            <k-toolbar id=${TOOLBAR_BOTTOM_CENTER}></k-toolbar>
            <k-toolbar id=${TOOLBAR_BOTTOM_END} style="justify-self: end;"></k-toolbar>
        </div>
    </div>`, document.body)