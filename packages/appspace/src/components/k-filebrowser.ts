
import {css, html, TemplateResult} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {KPart} from "../parts/k-part";
import {
    Directory,
    File,
    Resource,
    TOPIC_WORKSPACE_CHANGED,
    TOPIC_WORKSPACE_CONNECTED,
    workspaceService
} from "../core/filesys";
import {when} from "lit/directives/when.js";
import {topic} from "../core/events";
import {createRef, ref} from "lit/directives/ref.js";
import {HIDE_DOT_RESOURCE} from "../core/constants";

import {commandRegistry} from "../core/commandregistry";
import {TreeNode, treeNodeComparator} from "../core/tree-utils";
import {activeSelectionSignal} from "../core/appstate";
import {confirmDialog} from "../core/dialog";


@customElement('k-filebrowser')
export class KFileBrowser extends KPart {

    @state()
    private root?: TreeNode;
    private workspaceDir?: Directory
    private treeRef = createRef<HTMLElement>();
    private loadingNodes = new Set<TreeNode>();

    protected doBeforeUI() {
        this.initializeWorkspace();
    }

    protected firstUpdated(changedProperties: Map<string, any>) {
        super.firstUpdated(changedProperties);
        this.setupDragAndDrop();
    }

    protected updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        if (changedProperties.has('workspaceDir') && this.workspaceDir) {
            this.setupDragAndDrop();
        }
    }

    private async initializeWorkspace() {
        const workspaceDir = await workspaceService.getWorkspace()
        if (workspaceDir) {
            await this.loadWorkspace(workspaceDir!)
        } else {
            commandRegistry.execute("help")
        }
    }

    protected renderToolbar() {
        const canModify = activeSelectionSignal.get() instanceof Resource;
        
        return html`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!canModify} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!canModify} title="Delete selected resource"></k-command>
        `;
    }

    protected renderContextMenu() {
        const canModify = activeSelectionSignal.get() instanceof Resource;
        
        return html`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!canModify}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!canModify}>Delete</k-command>
        `;
    }

    @topic(TOPIC_WORKSPACE_CHANGED)
    async onWorkspaceChanged(workspaceDir: Directory) {
        activeSelectionSignal.set(undefined)
        await this.loadWorkspace(workspaceDir)
        await this.syncTreeSelection()
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
            this.root = await this.resourceToTreeNode(workspaceDir, true)
        }
    }

    private async syncTreeSelection() {
        await this.updateComplete
        const waTree = this.treeRef.value?.querySelector('wa-tree')
        // @ts-ignore
        const selectedItems = waTree?.selectedItems || []
        if (selectedItems.length > 0) {
            // @ts-ignore
            activeSelectionSignal.set(selectedItems[0].model?.data)
        }
    }

    async resourceToTreeNode(resource: Resource, loadChildren: boolean = false): Promise<TreeNode> {
        const isFile = resource instanceof File;
        const node: TreeNode = {
            data: resource,
            label: resource.getName(),
            icon: isFile ? "file" : "folder-open",
            leaf: isFile,
            children: []
        };

        if (resource instanceof Directory && loadChildren) {
            for (const childResource of await resource.listChildren(false)) {
                if (HIDE_DOT_RESOURCE && childResource.getName().startsWith(".")) {
                    continue
                }
                const child = await this.resourceToTreeNode(childResource, false);
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

        const isLazy = !node.leaf && node.children.length === 0;
        return html`
            <wa-tree-item 
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble((e: Event) => this.onLazyLoad(e, node))}
                .model=${node} 
                ?expanded=${expanded}
                ?lazy=${isLazy}>
                <span><wa-icon name=${node.icon} label="${node.leaf ? 'File' : 'Folder'}"></wa-icon> ${node.label}</span>
                ${node.children.map(child => this.createTreeItems(child, false))}
            </wa-tree-item>`
    }

    private async onLazyLoad(event: Event, node: TreeNode) {
        const resource = node.data as Resource;
        if (resource instanceof Directory && node.children.length === 0) {
            await this.loadNodeChildren(node, resource);
        }
    }

    private async loadNodeChildren(node: TreeNode, resource: Directory) {
        if (this.loadingNodes.has(node)) {
            return;
        }
        
        this.loadingNodes.add(node);
        try {
            for (const childResource of await resource.listChildren(false)) {
                if (HIDE_DOT_RESOURCE && childResource.getName().startsWith(".")) {
                    continue
                }
                const child = await this.resourceToTreeNode(childResource, false);
                node.children.push(child);
            }
            node.children.sort(treeNodeComparator);
            this.requestUpdate();
        } catch (error) {
            console.error('Failed to load directory children:', error);
        } finally {
            this.loadingNodes.delete(node);
        }
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
        const selection = event.detail.selection
        if (selection && selection.length > 0) {
            const node: TreeNode = selection[0].model
            activeSelectionSignal.set(node.data)
        } else {
            activeSelectionSignal.set(undefined)
        }
    }

    private currentDropTarget?: HTMLElement;

    private setupDragAndDrop() {
        const treeElement = this.treeRef.value;
        if (!treeElement) return;

        const dragOverHandler = (e: DragEvent) => {
            if (!e.dataTransfer?.types.includes('Files')) return;
            
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            
            treeElement.classList.add('drag-over');
            
            const target = e.target as HTMLElement;
            const treeItem = target.closest('wa-tree-item') as HTMLElement;
            
            if (treeItem && treeItem !== this.currentDropTarget) {
                this.currentDropTarget?.classList.remove('drop-target');
                this.currentDropTarget = treeItem;
                treeItem.classList.add('drop-target');
            }
        };

        const dragEnterHandler = (e: DragEvent) => {
            if (!e.dataTransfer?.types.includes('Files')) return;
            
            e.preventDefault();
            treeElement.classList.add('drag-over');
        };

        const dragLeaveHandler = (e: DragEvent) => {
            const rect = treeElement.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
            
            if (x <= rect.left || x >= rect.right || y <= rect.top || y >= rect.bottom) {
                treeElement.classList.remove('drag-over');
                this.currentDropTarget?.classList.remove('drop-target');
                this.currentDropTarget = undefined;
            }
        };

        const dropHandler = async (e: DragEvent) => {
            e.preventDefault();
            treeElement.classList.remove('drag-over');
            this.currentDropTarget?.classList.remove('drop-target');
            this.currentDropTarget = undefined;

            if (!e.dataTransfer || !this.workspaceDir) return;

            const files = Array.from(e.dataTransfer.files);
            if (files.length === 0) return;

            const targetDir = await this.getDropTarget(e);
            await this.handleFilesDrop(files, targetDir);
        };

        treeElement.removeEventListener('dragover', dragOverHandler as any);
        treeElement.removeEventListener('dragenter', dragEnterHandler as any);
        treeElement.removeEventListener('dragleave', dragLeaveHandler as any);
        treeElement.removeEventListener('drop', dropHandler as any);

        treeElement.addEventListener('dragover', dragOverHandler);
        treeElement.addEventListener('dragenter', dragEnterHandler);
        treeElement.addEventListener('dragleave', dragLeaveHandler);
        treeElement.addEventListener('drop', dropHandler);
    }

    private async getDropTarget(e: DragEvent): Promise<Directory> {
        const target = e.target as HTMLElement;
        const treeItem = target.closest('wa-tree-item');
        
        if (treeItem) {
            const node: TreeNode = (treeItem as any).model;
            const resource = node.data as Resource;
            
            if (resource instanceof Directory) {
                return resource;
            }
            const parent = resource.getParent();
            if (parent) {
                return parent;
            }
        }
        
        return this.workspaceDir!;
    }

    private async handleFilesDrop(files: globalThis.File[], targetDir: Directory) {
        const total = files.length;
        let processed = 0;
        let failed = 0;
        let skipped = 0;
        
        for (const file of files) {
            try {
                const targetPath = this.buildTargetPath(targetDir, file.name);
                
                const existingFile = await this.workspaceDir!.getResource(targetPath);
                if (existingFile) {
                    const overwrite = await confirmDialog(`File "${file.name}" already exists. Do you want to overwrite it?`);
                    if (!overwrite) {
                        skipped++;
                        continue;
                    }
                }
                
                const workspaceFile = await this.workspaceDir!.getResource(
                    targetPath, 
                    { create: true }
                ) as File;
                
                await workspaceFile.saveContents(file);
                
                processed++;
            } catch (error) {
                console.error(`Failed to upload ${file.name}:`, error);
                failed++;
            }
        }
        
        console.log(`Uploaded ${processed}/${total} files${skipped > 0 ? `, ${skipped} skipped` : ''}${failed > 0 ? `, ${failed} failed` : ''}`);
        
        await this.loadWorkspace(this.workspaceDir);
    }

    private buildTargetPath(targetDir: Directory, fileName: string): string {
        const dirPath = targetDir.getWorkspacePath();
        return dirPath ? `${dirPath}/${fileName}` : fileName;
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
        
        .tree {
            height: 100%;
            position: relative;
            transition: all 0.2s ease;
        }
        
        .tree.drag-over {
            background-color: var(--wa-color-brand-fill-quiet);
            outline: 2px dashed var(--wa-color-brand-border-normal);
            outline-offset: -4px;
            border-radius: var(--wa-border-radius-medium);
        }
        
        .tree.drag-over::before {
            content: '📁 Drop files here';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            padding: var(--wa-spacing-large);
            border-radius: var(--wa-border-radius-large);
            font-weight: bold;
            pointer-events: none;
            z-index: 1000;
            opacity: 0.3;
        }
        
        wa-tree-item.drop-target {
            background-color: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            border-radius: var(--wa-border-radius-small);
            outline: 2px solid var(--wa-color-brand-border-loud);
            outline-offset: -2px;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-filebrowser': KFileBrowser
    }
}
