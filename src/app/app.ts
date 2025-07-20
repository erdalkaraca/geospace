import {html, render} from "lit";
import '../parts/index.ts'
import '../components/index.ts'
import '../widgets/index.ts'
import '../components/k-aiassist.ts'
import "./geo/gs-map-editor-contributions.ts"
import './geo/gs-map-editor.ts'
import './geo/gs-map-props.ts'
import './geo/gs-catalog-contributions.ts'
import './geo/gs-catalog.ts'

import '../editors/k-md-editor.ts'
import "../editors/monaco-init.ts"
import "./build/build-init.ts"

import {EDITOR_AREA_MAIN, TOOLBAR_MAIN, TOOLBAR_MAIN_CENTER, TOOLBAR_MAIN_RIGHT} from "../core/constants.ts";

import APP_SYS_PROMPT from "../app/sysprompt-appsupport.txt?raw"
import {defaultChatContext} from "../core/chatservice.ts";
import {commandRegistry} from "../core/commandregistry.ts";

import {version as appVersion} from "../../package.json"
import {icon} from "../core/k-utils.ts";
defaultChatContext.sysPrompt = APP_SYS_PROMPT.replace("${commandsJson}", JSON.stringify(commandRegistry.listCommands(), null, 2))

export const GEOSPACE_LOGO = html`<span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span>`

render(html`
    <k-app id="gs-app">
        <div style="width: 100%; display: grid; grid-template-columns: 1fr 2fr 1fr; align-items: center; border-bottom: solid 1px grey;">
            <k-toolbar id=${TOOLBAR_MAIN}><span slot="start" style="margin-right: 1rem;">${GEOSPACE_LOGO}</span>
            </k-toolbar>
            <k-toolbar id=${TOOLBAR_MAIN_CENTER}>
            </k-toolbar>
            <k-toolbar style="justify-self: end;" id=${TOOLBAR_MAIN_RIGHT} align="right">
                <wa-badge variant="warning" style="margin-left: 1rem;"><i>v${appVersion} alpha release</i></wa-badge>
            </k-toolbar>
        </div>
        <wa-split-panel position="20" style="height: 100%;">
            <wa-split-panel slot="start" position="50" style="height: 100%;" orientation="vertical">
                <wa-tab-group slot="start">
                    <wa-tab panel="filebrowser">
                        <wa-icon name="folder-open"></wa-icon>
                        Workspace
                    </wa-tab>
                    <wa-tab-panel name="filebrowser">
                        <k-filebrowser></k-filebrowser>
                    </wa-tab-panel>

                    <wa-tab panel="catalog">
                        <wa-icon name="book"></wa-icon>
                        Catalog
                    </wa-tab>
                    <wa-tab-panel name="catalog">
                        <gs-catalog></gs-catalog>
                    </wa-tab-panel>
                </wa-tab-group>
                <wa-tab-group slot="end">
                    <wa-tab panel="map-props">
                        ${icon("fg map-options")}
                        Map Properties
                    </wa-tab>
                    <wa-tab-panel name="map-props">
                        <gs-map-props></gs-map-props>
                    </wa-tab-panel>
                </wa-tab-group>
            </wa-split-panel>
            <wa-split-panel slot="end" position="75">
                <wa-tab-group slot="start" id=${EDITOR_AREA_MAIN} active="welcome">
                </wa-tab-group>

                <wa-tab-group slot="end">
                    <wa-tab panel="assistant">
                        <wa-icon name="robot"></wa-icon>
                        AI
                    </wa-tab>
                    <wa-tab-panel name="assistant">
                        <k-ai-assist></k-ai-assist>
                    </wa-tab-panel>
                </wa-tab-group>
            </wa-split-panel>
        </wa-split-panel>
    </k-app>`, document.body)
