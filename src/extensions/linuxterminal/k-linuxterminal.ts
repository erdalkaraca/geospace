import {css, html, unsafeCSS} from 'lit'
import {customElement} from 'lit/decorators.js'
import {createRef, ref} from "lit/directives/ref.js";
import styles from "@xterm/xterm/css/xterm.css?raw";
import {KElement} from "../../parts/k-element";

// @ts-ignore
const CheerpX = window.CheerpX;

@customElement('k-linux-terminal')
export class KLinuxTerminal extends KElement {
    private consoleRef = createRef()

    protected async doInitUI() {
// The read-only disk image from Leaning Technologies' fast cloud backend
        const cloudDevice = await CheerpX.CloudDevice.create(
            "wss://disks.webvm.io/debian_large_20230522_5044875331.ext2"
        );
        // Read-write local storage for disk blocks, it is used both as a cache and as persisteny writable storage
        const idbDevice = await CheerpX.IDBDevice.create("block1");
        // A device to overlay the local changes to the disk with the remote read-only image
        const overlayDevice = await CheerpX.OverlayDevice.create(
            cloudDevice,
            idbDevice
        );
        // Direct acces to files in your HTTP server
        const webDevice = await CheerpX.WebDevice.create("");
        // Convenient access to JavaScript binary data and strings
        const dataDevice = await CheerpX.DataDevice.create();

        const cx = await CheerpX.Linux.create({
            mounts: [
                {type: "ext2", path: "/", dev: overlayDevice},
                {type: "dir", path: "/app", dev: webDevice},
                {type: "dir", path: "/data", dev: dataDevice},
                {type: "devs", path: "/dev"},
            ],
        });

        // Interact with a console
        cx.setConsole(this.consoleRef.value);

        // Run a full-featured shell in your browser.
        await cx.run("/bin/bash", ["--login"], {
            env: [
                "HOME=/home/user",
                "HOME=/home/user",
                "USER=user",
                "SHELL=/bin/bash",
                "EDITOR=vim",
                "LANG=en_US.UTF-8",
                "LC_ALL=C",
            ],
            cwd: "/home/user",
            uid: 1000,
            gid: 1000,
        });
    }

    render() {
        return html`
            <pre class="console" ${ref(this.consoleRef)}></pre>
        `;
    }

    static styles = [unsafeCSS(styles),
        css`
            :host {
                display: flex;
                flex: 1;
            }

            pre.console {
                flex: 1;
            }
        `]
}

declare global {
    interface HTMLElementTagNameMap {
        'k-linux-terminal': KLinuxTerminal
    }
}
