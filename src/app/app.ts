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
        <k-resizable-grid orientation="horizontal" sizes="20%, 60%, 20%">
            <!-- Left: 20% - nested vertical grid -->
            <k-resizable-grid orientation="vertical" sizes="50%, 50%">
                <k-tabs id="${TABS_LEFT_START}"></k-tabs>
                <k-tabs id="${TABS_LEFT_END}"></k-tabs>
            </k-resizable-grid>
            
            <!-- Center: 60% -->
            ${editorArea}
            
            <!-- Right: 20% -->
            <k-tabs id="${TABS_RIGHT}"></k-tabs>
        </k-resizable-grid>
    `
});

contributionRegistry.registerContribution<PerspectiveContribution>(PERSPECTIVES_MAIN, {
    name: "editing",
    label: "Editing",
    icon: "pencil",
    component: (editorArea) => html`
        <k-resizable-grid orientation="horizontal" sizes="20%, 55%, 25%">
            <k-tabs id="${TABS_EDITING_LEFT}"></k-tabs>
            ${editorArea}
            <k-tabs id="${TABS_EDITING_RIGHT}"></k-tabs>
        </k-resizable-grid>
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