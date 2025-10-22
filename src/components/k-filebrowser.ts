
import {css, html, TemplateResult} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {KPart} from "../parts/k-part.ts";
import {
    Directory,
    File,
    Resource,
    TOPIC_WORKSPACE_CHANGED,
    TOPIC_WORKSPACE_CONNECTED,
    workspaceService
} from "../core/filesys.ts";
import {when} from "lit/directives/when.js";
import {topic} from "../core/events.ts";
import {createRef, ref} from "lit/directives/ref.js";
import {HIDE_DOT_RESOURCE} from "../core/constants.ts";

import {commandRegistry} from "../core/commandregistry.ts";
import {TreeNode, treeNodeComparator} from "../core/tree-utils.ts";
import {activeSelectionSignal} from "../core/appstate.ts";


@customElement('k-filebrowser')
export class KFileBrowser extends KPart {

    @state()
    private root?: TreeNode;
    private workspaceDir?: Directory
    private treeRef = createRef<HTMLElement>();

    protected doBeforeUI() {
        // Start loading workspace asynchronously
        this.initializeWorkspace();
        this.registerToolbarActions();
    }

    private async initializeWorkspace() {
        const workspaceDir = await workspaceService.getWorkspace()
        if (workspaceDir) {
            await this.loadWorkspace(workspaceDir!)
        } else {
            commandRegistry.execute("help")
        }
    }

    private registerToolbarActions() {
        this.registerToolbarContribution({
            label: "Load workspace folder",
            icon: "folder-open",
            command: "load_workspace",
            slot: "start"
        })
        
        this.registerToolbarContribution({
            label: "Reload workspace folder",
            icon: "repeat",
            command: "reload_workspace",
            slot: "start"
        })
        
        this.registerToolbarContribution({
            label: "Create new file...",
            icon: "plus",
            command: "create_file",
            slot: "start"
        })
        
        this.registerToolbarContribution({
            label: "Delete selected resource",
            icon: "trash",
            command: "delete_resource",
            slot: "start",
            disabled: () => {
                return !(activeSelectionSignal.get() instanceof Resource)
            }
        })
    }

    @topic(TOPIC_WORKSPACE_CHANGED)
    async onWorkspaceChanged(workspaceDir: Directory) {
        await this.loadWorkspace(workspaceDir)
    }

    @topic(TOPIC_WORKSPACE_CONNECTED)
    async onWorkspaceConnected(workspaceDir: Directory) {
        await this.loadWorkspace(workspaceDir)
    }

    async loadWorkspace(workspaceDir?: Directory) {
        this.workspaceDir = workspaceDir
        if (!workspaceDir) {
            this.root = undefined
        } else {
            this.root = await this.resourceToTreeNode(workspaceDir)
        }
    }

    async resourceToTreeNode(resource: Resource): Promise<TreeNode> {
        const isFile = resource instanceof File;
        const node: TreeNode = {
            data: resource,
            label: resource.getName(),
            icon: isFile ? "file" : "folder-open",
            leaf: isFile,
            children: []
        };

        if (resource instanceof Directory) {
            for (const childResource of await resource.listChildren(true)) {
                // do not show hidden files/folders
                if (HIDE_DOT_RESOURCE && childResource.getName().startsWith(".")) {
                    continue
                }
                const child = await this.resourceToTreeNode(childResource);
                node.children.push(child);
            }
            node.children.sort(treeNodeComparator)
        }

        return node;
    }

    createTreeItems(node: TreeNode, expanded = false): TemplateResult {
        if (!node) {
            return html``
        }

        return html`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${node} ?expanded=${expanded}>
                <span><wa-icon name=${node.icon} label="${node.leaf ? 'File' : 'Folder'}"></wa-icon> ${node.label}</span>
                ${node.children.map(child => this.createTreeItems(child))}
            </wa-tree-item>`
    }

    async onFileDoubleClicked(event: Event) {
        // @ts-ignore
        const node: TreeNode = event.currentTarget.model
        const filePath = (node.data as Resource).getWorkspacePath()
        this.executeCommand("open_editor", {
            "path": filePath
        })
    }

    onSelectionChanged(event: Event) {
        // @ts-ignore
        const node: TreeNode = event.detail.selection[0].model
        activeSelectionSignal.set(node.data)
    }

    render() {
        return html`
            <div class="tree" ${ref(this.treeRef)}>
                ${when(!this.workspaceDir, () => html`
                    <k-no-content message="Select a workspace."></k-no-content>`, () => html`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root!, true)}
                </wa-tree>
            </div>
        `
    }

    static styles = css`
        :host {
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-filebrowser': KFileBrowser
    }
}
