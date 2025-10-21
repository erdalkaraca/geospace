import {html, render} from "lit";

import "./app-contributions.ts"

import {
    EDITOR_AREA_MAIN,
    TABS_LEFT_END,
    TABS_LEFT_START,
    TABS_RIGHT,
    TOOLBAR_MAIN,
    TOOLBAR_MAIN_CENTER,
    TOOLBAR_MAIN_RIGHT,
    TOOLBAR_BOTTOM,
    TOOLBAR_BOTTOM_CENTER,
    TOOLBAR_BOTTOM_END,
    SPLIT_PANE_MAIN,
    SPLIT_PANE_LEFT,
    SPLIT_PANE_CENTER
} from "../core/constants.ts";

import {extensionRegistry} from "../core/extensionregistry.ts";
import {contributionRegistry, PaneContribution} from "../core/contributionregistry.ts";

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

contributionRegistry.registerContribution<PaneContribution>(SPLIT_PANE_MAIN, {
    name: "left-sidebar",
    label: "Left Sidebar",
    size: 20,
    minSize: 10,
    maxSize: 40,
    order: 0,
    component: () => html`
        <k-split-pane id="${SPLIT_PANE_LEFT}" orientation="vertical"></k-split-pane>
    `
});

contributionRegistry.registerContribution<PaneContribution>(SPLIT_PANE_MAIN, {
    name: "center-area",
    label: "Center Area",
    size: 80,
    minSize: 40,
    order: 1,
    component: () => html`
        <k-split-pane id="${SPLIT_PANE_CENTER}" orientation="horizontal"></k-split-pane>
    `
});

contributionRegistry.registerContribution<PaneContribution>(SPLIT_PANE_LEFT, {
    name: "file-browser",
    label: "File Browser",
    size: 50,
    minSize: 20,
    order: 0,
    component: () => html`
        <k-tabs id="${TABS_LEFT_START}"></k-tabs>
    `
});

contributionRegistry.registerContribution<PaneContribution>(SPLIT_PANE_LEFT, {
    name: "bottom-panel",
    label: "Bottom Panel",
    size: 50,
    minSize: 20,
    order: 1,
    component: () => html`
        <k-tabs id="${TABS_LEFT_END}"></k-tabs>
    `
});

contributionRegistry.registerContribution<PaneContribution>(SPLIT_PANE_CENTER, {
    name: "editor-area",
    label: "Editor Area",
    size: 75,
    minSize: 30,
    order: 0,
    component: () => html`
        <k-tabs id="${EDITOR_AREA_MAIN}"></k-tabs>
    `
});

contributionRegistry.registerContribution<PaneContribution>(SPLIT_PANE_CENTER, {
    name: "right-sidebar",
    label: "Right Sidebar",
    size: 25,
    minSize: 15,
    maxSize: 50,
    order: 1,
    component: () => html`
        <k-tabs id="${TABS_RIGHT}"></k-tabs>
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
        <k-split-pane id="${SPLIT_PANE_MAIN}" orientation="horizontal" style="flex: 1 1 auto; min-height: 0; overflow: hidden;"></k-split-pane>
        <div style="width: 100%; border-top: solid 1px grey; display: grid; grid-template-columns: 1fr 2fr auto; align-items: center; flex-shrink: 0; min-height: 32px; padding: 0 0.5rem;">
            <k-toolbar id=${TOOLBAR_BOTTOM}></k-toolbar>
            <k-toolbar id=${TOOLBAR_BOTTOM_CENTER}></k-toolbar>
            <k-toolbar id=${TOOLBAR_BOTTOM_END} style="justify-self: end;"></k-toolbar>
        </div>
    </div>`, document.body)