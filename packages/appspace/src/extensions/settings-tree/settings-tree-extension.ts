import { customElement, state, property } from "lit/decorators.js";
import { css, html, TemplateResult } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { KPart } from "../../parts/k-part";
import { EditorInput, editorRegistry } from "../../core/editorregistry";
import { appSettings, TOPIC_SETTINGS_CHANGED } from "../../core/settingsservice";
import { subscribe } from "../../core/events";
import { commandRegistry } from "../../core/commandregistry";
import { promptDialog, confirmDialog } from "../../dialogs";

interface TreeNode {
    key: string;
    value: any;
    path: string;
    type: 'object' | 'array' | 'primitive';
    parent?: TreeNode;
    expanded?: boolean;
}

@customElement('k-settings-tree')
export class KSettingsTree extends KPart {
    @property({ attribute: false })
    public input?: EditorInput;

    @state()
    private settings: Record<string, any> = {};

    @state()
    private treeNodes: TreeNode[] = [];

    @state()
    private editingPath: string | null = null;

    @state()
    private editKey: string = '';

    @state()
    private editValue: string = '';

    private treeRef = createRef<HTMLElement>();

    protected async doInitUI() {
        await this.loadSettings();
        subscribe(TOPIC_SETTINGS_CHANGED, () => {
            this.loadSettings();
        });
    }

    private async loadSettings() {
        this.settings = await appSettings.getAll() || {};
        this.buildTree();
    }

    private buildTree() {
        this.treeNodes = this.objectToTreeNodes(this.settings, '');
    }

    private objectToTreeNodes(obj: any, parentPath: string): TreeNode[] {
        if (obj === null || obj === undefined) {
            return [];
        }

        const isFirstLevel = parentPath === '';
        
        if (Array.isArray(obj)) {
            return obj.map((item, index) => {
                const path = parentPath ? `${parentPath}[${index}]` : `[${index}]`;
                const type = this.getType(item);
                return {
                    key: String(index),
                    value: item,
                    path,
                    type,
                    expanded: isFirstLevel
                };
            });
        }

        if (typeof obj === 'object') {
            return Object.entries(obj).map(([key, value]) => {
                const isArrayParent = parentPath.endsWith(']');
                const path = isArrayParent
                    ? `${parentPath}.${key}`
                    : parentPath ? `${parentPath}.${key}` : key;
                const type = this.getType(value);
                return {
                    key,
                    value,
                    path,
                    type,
                    expanded: isFirstLevel
                };
            });
        }

        return [];
    }

    private getType(value: any): 'object' | 'array' | 'primitive' {
        if (Array.isArray(value)) {
            return 'array';
        }
        if (value !== null && typeof value === 'object') {
            return 'object';
        }
        return 'primitive';
    }


    private startEditKey(node: TreeNode, e: Event) {
        e.stopPropagation();
        this.editingPath = node.path;
        this.editKey = node.key;
        this.editValue = '';
    }

    private startEditValue(node: TreeNode, e: Event) {
        e.stopPropagation();
        this.editingPath = node.path;
        this.editKey = '';
        this.editValue = this.formatValue(node.value);
    }

    private formatValue(value: any): string {
        if (value === null) {
            return 'null';
        }
        if (value === undefined) {
            return '';
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number' || typeof value === 'boolean') {
            return String(value);
        }
        return JSON.stringify(value);
    }

    private formatPreview(value: any, maxLength: number = 50): string {
        if (Array.isArray(value)) {
            const length = value.length;
            if (length === 0) {
                return 'Array []';
            }
            const preview = value.slice(0, 3).map((item, idx) => {
                if (item === null) return 'null';
                if (typeof item === 'string') return `"${item}"`;
                if (typeof item === 'object') return 'Object';
                return String(item);
            }).join(', ');
            const suffix = length > 3 ? ` … +${length - 3} more` : '';
            return `Array [${length}] { ${preview}${suffix} }`;
        }
        
        if (value !== null && typeof value === 'object') {
            const keys = Object.keys(value);
            if (keys.length === 0) {
                return 'Object {}';
            }
            const preview = keys.slice(0, 3).map(key => {
                const val = value[key];
                let valStr = '';
                if (val === null) valStr = 'null';
                else if (typeof val === 'string') valStr = `"${val}"`;
                else if (typeof val === 'object') valStr = Array.isArray(val) ? 'Array' : 'Object';
                else valStr = String(val);
                return `${key}: ${valStr}`;
            }).join(', ');
            const suffix = keys.length > 3 ? ` … +${keys.length - 3} more` : '';
            return `Object { ${preview}${suffix} }`;
        }
        
        return String(value);
    }

    private parseValue(value: string, originalValue: any): any {
        if (value.trim() === 'null') {
            return null;
        }
        if (value === '') {
            return originalValue === null ? null : originalValue;
        }
        if (typeof originalValue === 'string') {
            return value;
        }
        if (typeof originalValue === 'number') {
            const num = Number(value);
            return isNaN(num) ? originalValue : num;
        }
        if (typeof originalValue === 'boolean') {
            const lower = value.toLowerCase();
            if (lower === 'true') return true;
            if (lower === 'false') return false;
            return originalValue;
        }
        if (originalValue === null) {
            try {
                return JSON.parse(value);
            } catch {
                return value;
            }
        }
        try {
            return JSON.parse(value);
        } catch {
            return originalValue;
        }
    }

    private cancelEdit() {
        this.editingPath = null;
        this.editKey = '';
        this.editValue = '';
    }

    private async saveEditKey() {
        if (!this.editingPath || !this.editKey) {
            this.cancelEdit();
            return;
        }

        const node = this.findNodeByPath(this.editingPath);
        if (!node || this.editKey === node.key) {
            this.cancelEdit();
            return;
        }

        const pathParts = this.parsePath(this.editingPath);
        const result = this.traversePath(pathParts, true);
        if (!result || typeof result.lastPart === 'number') {
            this.cancelEdit();
            return;
        }

        const { parent, lastPart } = result;
        if (parent[lastPart] !== undefined) {
            const value = parent[lastPart];
            delete parent[lastPart];
            parent[this.editKey] = value;
            this.markDirty(true);
            this.buildTree();
        }

        this.cancelEdit();
    }

    private async saveEditValue() {
        if (!this.editingPath) {
            this.cancelEdit();
            return;
        }

        const node = this.findNodeByPath(this.editingPath);
        if (!node) {
            this.cancelEdit();
            return;
        }

        const newValue = this.parseValue(this.editValue, node.value);
        await this.updateValue(this.editingPath, newValue);
        this.cancelEdit();
    }

    private async updateValue(path: string, value: any) {
        const pathParts = this.parsePath(path);
        const result = this.traversePath(pathParts, true);
        if (!result) {
            throw new Error(`Invalid path: ${path}`);
        }

        const { parent, lastPart } = result;
        if (typeof lastPart === 'number') {
            if (!Array.isArray(parent)) {
                throw new Error(`Invalid array access at path: ${path}`);
            }
            parent[lastPart] = value;
        } else {
            parent[lastPart] = value;
        }

        this.markDirty(true);
        this.buildTree();
    }

    /**
     * Traverses the settings object using path parts to get to the target location.
     * Returns the parent object and the last part of the path.
     * @param pathParts The parsed path parts
     * @param createIfMissing Whether to create missing objects during traversal
     * @returns Object containing parent object and the last path part
     */
    private traversePath(pathParts: (string | number)[], createIfMissing: boolean = false): { parent: any; lastPart: string | number } | null {
        if (pathParts.length === 0) {
            return null;
        }

        let current: any = this.settings;
        const lastIndex = pathParts.length - 1;

        for (let i = 0; i < lastIndex; i++) {
            const part = pathParts[i];
            if (typeof part === 'number') {
                if (!Array.isArray(current) || current[part] === undefined) {
                    if (createIfMissing) {
                        current[part] = [];
                    } else {
                        return null;
                    }
                }
                current = current[part];
            } else {
                if (current[part] === undefined) {
                    if (createIfMissing) {
                        current[part] = {};
                    } else {
                        return null;
                    }
                }
                current = current[part];
            }
        }

        return { parent: current, lastPart: pathParts[lastIndex] };
    }

    private parsePath(path: string): (string | number)[] {
        const parts: (string | number)[] = [];
        let current = '';

        for (let i = 0; i < path.length; i++) {
            const char = path[i];

            if (char === '[') {
                if (current) {
                    parts.push(current);
                    current = '';
                }
                let indexStr = '';
                i++;
                while (i < path.length && path[i] !== ']') {
                    indexStr += path[i];
                    i++;
                }
                const index = parseInt(indexStr);
                if (!isNaN(index)) {
                    parts.push(index);
                }
            } else if (char === '.') {
                if (current) {
                    parts.push(current);
                    current = '';
                }
            } else {
                current += char;
            }
        }

        if (current) {
            parts.push(current);
        }

        return parts;
    }

    private async addKey(parentNode: TreeNode | null, e: Event) {
        e.stopPropagation();

        if (parentNode && parentNode.type === 'array') {
            const pathParts = this.parsePath(parentNode.path);
            const result = this.traversePath(pathParts, false);
            if (result && Array.isArray(result.parent)) {
                result.parent.push(null);
            }
        } else {
            const newKey = await promptDialog('Enter new key name:', '');
            if (!newKey || newKey.trim() === '') {
                return;
            }

            if (parentNode) {
                const pathParts = this.parsePath(parentNode.path);
                const result = this.traversePath(pathParts, true);
                if (result) {
                    result.parent[newKey] = null;
                }
            } else {
                this.settings[newKey] = null;
            }
        }

        this.markDirty(true);
        this.buildTree();
    }

    private async deleteKey(node: TreeNode, e: Event) {
        e.stopPropagation();

        if (!(await confirmDialog(`Delete "${node.key}"?`))) {
            return;
        }

        const pathParts = this.parsePath(node.path);
        const result = this.traversePath(pathParts, false);
        if (!result) {
            return;
        }

        const { parent, lastPart } = result;
        if (typeof lastPart === 'number') {
            if (Array.isArray(parent)) {
                parent.splice(lastPart, 1);
            }
        } else {
            delete parent[lastPart];
        }

        this.markDirty(true);
        this.buildTree();
    }

    async save() {
        try {
            await appSettings.setAll(this.settings);
            this.markDirty(false);
        } catch (error) {
            console.error('Failed to save settings:', error);
            throw error;
        }
    }

    private findNodeByPath(path: string, nodes: TreeNode[] = this.treeNodes): TreeNode | null {
        for (const node of nodes) {
            if (node.path === path) {
                return node;
            }
            if (node.type === 'object' || node.type === 'array') {
                const children = this.objectToTreeNodes(node.value, node.path);
                const found = this.findNodeByPath(path, children);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }

    private expandAll() {
        const tree = this.treeRef.value;
        if (tree) {
            const allItems = tree.querySelectorAll("wa-tree-item");
            allItems.forEach((item: any) => {
                item.expanded = true;
            });
        }
        for (const node of this.treeNodes) {
            this.setExpandedRecursive(node, true);
        }
        this.requestUpdate();
    }

    private collapseAll() {
        const tree = this.treeRef.value;
        if (tree) {
            const allItems = tree.querySelectorAll("wa-tree-item");
            allItems.forEach((item: any) => {
                item.expanded = false;
            });
        }
        for (const node of this.treeNodes) {
            this.setExpandedRecursive(node, false);
        }
        this.requestUpdate();
    }

    private setExpandedRecursive(node: TreeNode, expanded: boolean) {
        node.expanded = expanded;
        if (node.type === 'object' || node.type === 'array') {
            const children = this.objectToTreeNodes(node.value, node.path);
            for (const child of children) {
                this.setExpandedRecursive(child, expanded);
            }
        }
    }

    private renderTreeNode(node: TreeNode): TemplateResult {
        const isEditing = this.editingPath === node.path;
        const hasChildren = (node.type === 'object' || node.type === 'array') &&
            (Array.isArray(node.value) ? node.value.length > 0 :
                node.value !== null && typeof node.value === 'object' && Object.keys(node.value).length > 0);

        const children = hasChildren ? this.objectToTreeNodes(node.value, node.path) : [];
        const isExpanded = node.expanded ?? false;

        const renderValue = () => {
            if (node.type === 'primitive') {
                if (isEditing && !this.editKey) {
                    return html`
                        <wa-input
                            .value=${this.editValue}
                            @input=${(e: Event) => this.editValue = (e.target as any).value}
                            @keydown=${(e: KeyboardEvent) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                this.saveEditValue();
                            } else if (e.key === 'Escape') {
                                e.preventDefault();
                                this.cancelEdit();
                            }
                        }}
                            @blur=${() => this.saveEditValue()}
                            size="small"
                            style="width: 200px;"
                        ></wa-input>
                    `;
                }
                const displayValue = this.formatValue(node.value);
                return html`
                    <span class="value" @dblclick=${(e: Event) => this.startEditValue(node, e)}>
                        ${displayValue}
                    </span>
                `;
            }
            const preview = this.formatPreview(node.value);
            return html`
                <span class="preview">${preview}</span>
            `;
        };

        return html`
            <wa-tree-item ?expanded=${isExpanded}>
                <div class="node-content">
                    ${isEditing && this.editKey ? html`
                        <wa-input
                            .value=${this.editKey}
                            @input=${(e: Event) => this.editKey = (e.target as any).value}
                            @keydown=${(e: KeyboardEvent) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.saveEditKey();
                    } else if (e.key === 'Escape') {
                        e.preventDefault();
                        this.cancelEdit();
                    }
                }}
                            @blur=${() => this.saveEditKey()}
                            size="small"
                            style="width: 150px; margin-right: 8px;"
                        ></wa-input>
                    ` : html`
                        <span 
                            class="key" 
                            @dblclick=${(e: Event) => this.startEditKey(node, e)}
                        >
                            ${node.key}
                        </span>
                    `}
                    
                    <span class="separator">:</span>
                    
                    ${renderValue()}
                    
                    <div class="node-actions">
                        ${node.type === 'primitive' ? html`
                            <k-command
                                size="small"
                                variant="neutral"
                                appearance="plain"
                                icon="pencil"
                                title="Edit value"
                                .action=${(e: Event) => this.startEditValue(node, e)}>
                            </k-command>
                        ` : ''}
                        <k-command
                            size="small"
                            variant="neutral"
                            appearance="plain"
                            icon="plus"
                            title="Add key"
                            .action=${(e: Event) => this.addKey(node, e)}>
                        </k-command>
                        <k-command
                            size="small"
                            variant="neutral"
                            appearance="plain"
                            icon="trash"
                            title="Delete key"
                            .action=${(e: Event) => this.deleteKey(node, e)}>
                        </k-command>
                    </div>
                </div>
                
                ${hasChildren ? children.map(child => this.renderTreeNode(child)) : ''}
            </wa-tree-item>
        `;
    }

    protected renderToolbar() {
        return html`
            <k-command 
                size="small" 
                icon="plus"
                title="Add Key"
                .action=${() => this.addKey(null, new Event('click'))}>
                Add Key
            </k-command>
            <k-command 
                size="small" 
                icon="chevron-down"
                title="Expand All"
                .action=${() => this.expandAll()}>
                Expand All
            </k-command>
            <k-command 
                size="small" 
                icon="chevron-right"
                title="Collapse All"
                .action=${() => this.collapseAll()}>
                Collapse All
            </k-command>
        `;
    }

    render() {
        return html`
            <div class="settings-tree-container">
                <div class="tree-container">
                    ${this.treeNodes.length === 0 ? html`
                        <div class="empty-state">
                            <wa-icon name="gear" style="font-size: 48px; opacity: 0.3;"></wa-icon>
                            <p>No settings found. Click "Add Key" to create a new setting.</p>
                        </div>
                    ` : html`
                        <wa-tree ${ref(this.treeRef)} style="--indent-guide-width: 1px;">
                            ${this.treeNodes.map(node => this.renderTreeNode(node))}
                        </wa-tree>
                    `}
                </div>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .settings-tree-container {
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: hidden;
        }

        .tree-container {
            flex: 1;
            overflow-y: auto;
            padding: 8px;
        }

        .tree-node {
            display: flex;
            align-items: center;
            width: 100%;
        }

        .node-content {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 1;
            min-width: 0;
        }

        .key {
            font-weight: 500;
            color: var(--wa-color-primary-600);
            cursor: pointer;
            user-select: none;
        }

        :host-context(.wa-light) .key {
            color: var(--wa-color-primary-700);
        }

        .key:hover {
            text-decoration: underline;
        }

        .separator {
            color: var(--wa-color-neutral-50);
            margin: 0 4px;
        }

        .value {
            color: var(--wa-color-neutral-80);
            user-select: none;
            font-family: monospace;
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        :host-context(.wa-light) .value {
            color: var(--wa-color-neutral-20);
        }

        .preview {
            color: var(--wa-color-neutral-60);
            font-family: monospace;
            font-size: 12px;
            font-style: italic;
        }

        :host-context(.wa-light) .preview {
            color: var(--wa-color-neutral-40);
        }

        .node-actions {
            display: flex;
            gap: 4px;
            margin-left: auto;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .node-content:hover .node-actions {
            opacity: 1;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: var(--wa-color-neutral-50);
            text-align: center;
            padding: 32px;
        }

        :host-context(.wa-light) .empty-state {
            color: var(--wa-color-neutral-40);
        }

        .empty-state p {
            margin-top: 16px;
            font-size: 14px;
        }

        wa-tree-item {
            --indent-size: 16px;
        }
    `;
}

export default (uiContext: any) => {
    editorRegistry.registerEditorInputHandler({
        ranking: 1000,
        canHandle: (input: EditorInput) => {
            return input.key === '.system.settings';
        },
        handle: async (input: EditorInput) => {
            input.editorId = "settings-tree";
            input.widgetFactory = () => html`
                <k-settings-tree .input=${input}></k-settings-tree>
            `;
            return input;
        }
    });

    commandRegistry.registerHandler("open_settings", {
        ranking: 100,
        execute: _context => {
            const editorInput = {
                title: "Settings",
                data: {},
                key: ".system.settings",
                icon: "gear",
                state: {},
            } as EditorInput
            editorRegistry.loadEditor(editorInput).then()
        }
    })
};

