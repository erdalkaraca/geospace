import {html, render} from "lit";

import "./app-contributions.ts"

import {
    EDITOR_AREA_MAIN,
    TABS_LEFT_END,
    TABS_LEFT_START,
    TABS_RIGHT,
    TOOLBAR_MAIN,
    TOOLBAR_MAIN_CENTER,
    TOOLBAR_MAIN_RIGHT
} from "../core/constants.ts";

import APP_SYS_PROMPT from "../app/sysprompt-appsupport.txt?raw"
import {defaultChatContext} from "../core/chatservice.ts";
import {commandRegistry} from "../core/commandregistry.ts";

import {version as appVersion} from "../../package.json"

defaultChatContext.sysPrompt = APP_SYS_PROMPT.replace("${commandsJson}", JSON.stringify(commandRegistry.listCommands(), null, 2))

render(html`
    <k-app id="gs-app">
        <div style="width: 100%; display: grid; grid-template-columns: 1fr 2fr 1fr; align-items: center; border-bottom: solid 1px grey;">
            <k-toolbar id=${TOOLBAR_MAIN}></k-toolbar>
            <k-toolbar id=${TOOLBAR_MAIN_CENTER}>
            </k-toolbar>
            <k-toolbar style="justify-self: end;" id=${TOOLBAR_MAIN_RIGHT} align="right">
                <wa-badge variant="warning" style="margin-left: 1rem;"><i>v${appVersion} alpha release</i></wa-badge>
            </k-toolbar>
        </div>
        <wa-split-panel position="20" style="height: 100%;">
            <wa-split-panel slot="start" position="50" style="height: 100%;" orientation="vertical">
                <k-tabs id="${TABS_LEFT_START}" slot="start">
                </k-tabs>
                <k-tabs id="${TABS_LEFT_END}" slot="end">
                </k-tabs>
            </wa-split-panel>
            <wa-split-panel slot="end" position="75">
                <k-tabs slot="start" id=${EDITOR_AREA_MAIN}>
                </k-tabs>
                <k-tabs id="${TABS_RIGHT}" slot="end">
                </k-tabs>
            </wa-split-panel>
        </wa-split-panel>
    </k-app>`, document.body)