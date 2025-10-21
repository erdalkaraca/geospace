import {html, render} from "lit";

import "./app-contributions.ts"

import {
    EDITOR_AREA_MAIN,
    TABS_LEFT_END,
    TABS_LEFT_START,
    TABS_RIGHT,
    TABS_EDITING_LEFT,
    TABS_EDITING_RIGHT,
    TOOLBAR_MAIN,
    TOOLBAR_MAIN_CENTER,
    TOOLBAR_MAIN_RIGHT,
    TOOLBAR_BOTTOM,
    TOOLBAR_BOTTOM_CENTER,
    TOOLBAR_BOTTOM_END,
    PERSPECTIVES_MAIN
} from "../core/constants.ts";

import {extensionRegistry} from "../core/extensionregistry.ts";
import {contributionRegistry, PerspectiveContribution} from "../core/contributionregistry.ts";

const coreExtensions = [
    "system.mdeditor",
    "system.monaco",
    "system.download",
    "system.commandpalette",
    "system.memoryusage"
];

coreExtensions.forEach(extId => {
    extensionRegistry.enable(extId);
});

contributionRegistry.registerContribution<PerspectiveContribution>(PERSPECTIVES_MAIN, {
    name: "geospace",
    label: "Geo",
    icon: "earth",
    component: (editorArea) => html`
        <div style="display: flex; flex-direction: row; height: 100%; width: 100%;">
            <!-- Left: 20% -->
            <div style="flex: 0 0 20%; display: flex; flex-direction: column; overflow: hidden;">
                <div style="flex: 1; overflow: hidden;">
                    <k-tabs id="${TABS_LEFT_START}"></k-tabs>
                </div>
                <div style="flex: 1; overflow: hidden;">
                    <k-tabs id="${TABS_LEFT_END}"></k-tabs>
                </div>
            </div>
            
            <!-- Center: 60% -->
            <div style="flex: 0 0 60%; overflow: hidden;">
                ${editorArea}
            </div>
            
            <!-- Right: 20% -->
            <div style="flex: 0 0 20%; overflow: hidden;">
                <k-tabs id="${TABS_RIGHT}"></k-tabs>
            </div>
        </div>
    `
});

contributionRegistry.registerContribution<PerspectiveContribution>(PERSPECTIVES_MAIN, {
    name: "editing",
    label: "Editing",
    icon: "pencil",
    component: (editorArea) => html`
        <div style="display: flex; flex-direction: row; height: 100%; width: 100%;">
            <!-- Left: 20% -->
            <div style="flex: 0 0 20%; overflow: hidden;">
                <k-tabs id="${TABS_EDITING_LEFT}"></k-tabs>
            </div>
            
            <!-- Center: 55% -->
            <div style="flex: 0 0 55%; overflow: hidden;">
                ${editorArea}
            </div>
            
            <!-- Right: 25% -->
            <div style="flex: 0 0 25%; overflow: hidden;">
                <k-tabs id="${TABS_EDITING_RIGHT}"></k-tabs>
            </div>
        </div>
    `
});

render(html`
    <div id="gs-app" style="display: flex; flex-direction: column; flex: 1; min-height: 0; width: 100%; box-sizing: border-box;">
        <div style="width: 100%; display: grid; grid-template-columns: 1fr 2fr 1fr; align-items: center; border-bottom: solid 1px grey; flex-shrink: 0;">
            <k-toolbar id=${TOOLBAR_MAIN}></k-toolbar>
            <k-toolbar id=${TOOLBAR_MAIN_CENTER}>
            </k-toolbar>
            <k-toolbar style="justify-self: end;" id=${TOOLBAR_MAIN_RIGHT} align="right">
            </k-toolbar>
        </div>
        <k-perspectives 
            id="${PERSPECTIVES_MAIN}"
            editor-id="${EDITOR_AREA_MAIN}"
            style="flex: 1 1 auto; min-height: 0; overflow: hidden;">
        </k-perspectives>
        <div style="width: 100%; border-top: solid 1px grey; display: grid; grid-template-columns: 1fr 2fr auto; align-items: center; flex-shrink: 0; min-height: 32px; padding: 0 0.5rem;">
            <k-toolbar id=${TOOLBAR_BOTTOM}></k-toolbar>
            <k-toolbar id=${TOOLBAR_BOTTOM_CENTER}></k-toolbar>
            <k-toolbar id=${TOOLBAR_BOTTOM_END} style="justify-self: end;"></k-toolbar>
        </div>
    </div>`, document.body)