import {customElement} from "lit/decorators.js";
import {KElement} from "../parts/k-element";
import {html} from "lit";
import {workspaceService, TOPIC_WORKSPACE_CONNECTED} from "../core/filesys";
import {subscribe} from "../core/events";
import {commandRegistry} from "../core/commandregistry";

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

    private handleLoadWorkspace() {
        commandRegistry.execute("load_workspace", {
            source: this
        });
    }

    protected render() {
        return html`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-workspace-name': KWorkspaceName
    }
}

