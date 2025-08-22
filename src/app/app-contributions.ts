import {html} from "lit";
import '../parts/index.ts'
import '../components'
import '../widgets/index.ts'
import "./geo/gs-map-editor-contributions.ts"
import './geo/gs-map-editor.ts'
import './geo/gs-map-props.ts'
import './geo/gs-catalog-contributions.ts'
import './geo/gs-catalog.ts'

import '../editors/k-md-editor.ts'
import "../editors/monaco-init.ts"
import "./build/build-init.ts"
import "./../extensions"

import {TABS_LEFT_END, TABS_LEFT_START, TABS_RIGHT, TOOLBAR_MAIN} from "../core/constants.ts";

import {contributionRegistry, HTMLContribution, TabContribution} from "../core/contributionregistry.ts";

contributionRegistry.registerContribution(TOOLBAR_MAIN, {
    slot: "start",
    html: `<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>`
} as HTMLContribution)

contributionRegistry.registerContribution(TABS_RIGHT, {
    name: "assistant",
    label: "AI",
    icon: "robot",
    component: () => html`
        <k-aiassist></k-aiassist>`
} as TabContribution)

contributionRegistry.registerContribution(TABS_LEFT_START, {
    name: "filebrowser",
    label: "Workspace",
    icon: "folder-open",
    component: () => html`
        <k-filebrowser></k-filebrowser>`
} as TabContribution)

contributionRegistry.registerContribution(TABS_LEFT_START, {
    name: "catalog",
    label: "Catalog",
    icon: "book",
    component: () => html`
        <gs-catalog></gs-catalog>`
} as TabContribution)

contributionRegistry.registerContribution(TABS_LEFT_END, {
    name: "map-props",
    label: "Map Properties",
    icon: "fg map-options",
    component: () => html`
        <gs-map-props></gs-map-props>`
} as TabContribution)

contributionRegistry.registerContribution(TABS_RIGHT, {
    name: "extensions",
    label: "Extensions",
    icon: "puzzle-piece",
    component: () => html`
        <k-extensions></k-extensions>`
} as TabContribution)