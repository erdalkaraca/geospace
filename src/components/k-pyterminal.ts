import {css, html, unsafeCSS} from 'lit'
import {customElement} from 'lit/decorators.js'
import {KElement} from "../parts/k-element.ts";
import {createRef, ref} from "lit/directives/ref.js";
import {Terminal} from '@xterm/xterm';
import styles from "@xterm/xterm/css/xterm.css?raw";
import {workspaceService} from "../core/filesys.ts";
import {PyEnv} from "../core/pyservice.ts";

@customElement('k-pyterminal')
export class KPyTerminal extends KElement {

    private terminalDiv = createRef()
    private terminal = new Terminal({
        allowTransparency: true,
        cursorBlink: true,
        fontSize: 14,
        theme: {
            background: '#000000',
            foreground: '#ffffff',
            cursor: '#ffffff',
        }
    })
    private pyenv?: PyEnv
    private currentLine: string = ""

    private prompt(message: string = "") {
        this.terminal.write(!!message ? message + "\n\r" : "\n\r>> ")
    }

    protected async doInitUI() {
        this.terminal.open(<HTMLElement>this.terminalDiv.value!)
        this.terminal.onKey(({key}) => {
            this.currentLine += key;

            if (key.charCodeAt(0) === 13) {
                console.log("Running command: " + this.currentLine)
                this.currentLine = ""
                this.prompt()
            } else {
                this.terminal.write(key)
            }
        });

        this.prompt("Loading Python...")
        const workspace = (await workspaceService.getWorkspace())!
        this.pyenv = new PyEnv()
        await this.pyenv.init(workspace)
        this.prompt(`Pyodide v${this.pyenv.getVersion()}`)
        this.prompt("Python implementation: " + this.pyenv.execCode("import sys;sys.version"))
        this.prompt()
    }

    render() {
        return html`
            <div class="terminal" ${ref(this.terminalDiv)}></div>
        `;
    }

    static styles = [unsafeCSS(styles),
        css`
            :host {
                display: flex;
                flex: 1;
                width: 100%;
                height: 100%;
            }

            .terminal {
                display: flex;
                flex: 1;
            }

            .terminal,
            .terminal-container,
            .xterm-screen {
                width: 100% !important;
                height: 100% !important;
                overflow: hidden;
            }

            .xterm .xterm-viewport {
                /* see : https://github.com/xtermjs/xterm.js/issues/3564#issuecomment-1004417440 */
                width: initial !important;
            }
        `]
}

declare global {
    interface HTMLElementTagNameMap {
        'k-pyterminal': KPyTerminal
    }
}
