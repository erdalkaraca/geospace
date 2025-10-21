import {customElement} from "lit/decorators.js";
import {KElement} from "../parts/k-element.ts";
import {html} from "lit";
import {workspaceService, TOPIC_WORKSPACE_CONNECTED} from "../core/filesys.ts";
import {subscribe} from "../core/events.ts";

const NO_WORKSPACE_LABEL = "<no workspace>";

@customElement('k-workspace-name')
export class KWorkspaceName extends KElement {
    
    private workspaceName = NO_WORKSPACE_LABEL;

    protected doInitUI() {
        this.updateWorkspaceName();
        
        subscribe(TOPIC_WORKSPACE_CONNECTED, () => {
            this.updateWorkspaceName();
        });
    }

    private updateWorkspaceName() {
        workspaceService.getWorkspace().then(workspace => {
            this.workspaceName = workspace?.getName() || NO_WORKSPACE_LABEL;
            this.requestUpdate();
        });
    }

    protected render() {
        return html`
            <span style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.85em; color: var(--wa-color-neutral-text);">
                <wa-icon name="folder-open"></wa-icon>
                <span>${this.workspaceName}</span>
            </span>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-workspace-name': KWorkspaceName
    }
}

