import {css, html, TemplateResult, customElement, state, createRef, ref} from '@kispace-io/appspace/externals/lit';
import {
    KPart,
    TreeContribution,
    TreeNode,
    contributionRegistry,
    activePartSignal,
    activeSelectionSignal
} from "@kispace-io/appspace/api";

export const CID_CATALOG_ROOT = "catalog.root"

@customElement('gs-catalog')
export class GsCatalog extends KPart {
    @state()
    private rootNodes?: TreeNode[];
    
    private treeRef = createRef<HTMLElement>();

    protected doBeforeUI() {
        const contributions = contributionRegistry.getContributions(CID_CATALOG_ROOT) as TreeContribution[]
        this.rootNodes = this.toTreeNodes(contributions)
    }

    protected renderToolbar() {
        const isActiveAndHasSelection = (activePartSignal.get() instanceof GsCatalog) && 
                                       activeSelectionSignal.get() !== undefined;
        
        return html`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!isActiveAndHasSelection} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `;
    }

    private toTreeNodes(contributions: TreeContribution[]) {
        return contributions.map(c => {
            const node = {
                data: c.state,
                icon: c.icon,
                label: c.label,
                leaf: false
            } as TreeNode
            if (c.contributionId) {
                const children = contributionRegistry.getContributions(c.contributionId) as TreeContribution[]
                node.leaf = children.length === 0
                node.children = this.toTreeNodes(children)
            }
            return node
        })
    }


    onItemDblClicked(event: Event) {
        // @ts-ignore
        const url = event.currentTarget.model.data.url
        this.executeCommand("checkout", {
            url
        })
    }

    onSelectionChanged(event: Event) {
        //@ts-ignore
        const node: TreeNode = event.detail.selection[0].model
        activeSelectionSignal.set(node.data)
    }

    public setAllExpanded(expanded: boolean) {
        const tree = this.treeRef.value
        if (tree) {
            tree.querySelectorAll("wa-tree-item").forEach((item: any) => {
                item.expanded = expanded
            })
        }
    }

    public refresh() {
        this.requestUpdate()
    }

    createTreeItems(node: TreeNode, expanded = false): TemplateResult {
        if (!node) {
            return html``
        }
        return html`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${node} ?expanded=${expanded}>
                <span><k-icon name="${node.icon}"></k-icon> ${node.label}</span>
                ${node.children?.map(child => this.createTreeItems(child))}
            </wa-tree-item>`
    }

    render() {
        return html`
            <wa-tree ${ref(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${this.rootNodes?.map(node => this.createTreeItems(node, true))}
            </wa-tree>
        `
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'gs-catalog': GsCatalog
    }
}