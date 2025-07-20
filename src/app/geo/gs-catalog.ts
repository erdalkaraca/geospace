import {css, html, TemplateResult} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {KPart} from "../../parts/k-part.ts";
import {TreeContribution, TreeNode} from "../../core/tree-utils.ts";
import {contributionRegistry} from "../../core/contributionregistry.ts";
import {activeSelectionSignal} from "../../core/appstate.ts";
import {icon} from "../../core/k-utils.ts";

export const CID_CATALOG_ROOT = "catalog.root"

@customElement('gs-catalog')
export class GsCatalog extends KPart {
    @state()
    private rootNodes?: TreeNode[];

    protected doAfterUI() {
        const contributions = contributionRegistry.getContributions(CID_CATALOG_ROOT) as TreeContribution[]
        this.rootNodes = this.toTreeNodes(contributions)
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

    createTreeItems(node: TreeNode, expanded = false): TemplateResult {
        if (!node) {
            return html``
        }
        return html`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${node} ?expanded=${expanded}>
                <span>${icon(node.icon)} ${node.label}</span>
                ${node.children?.map(child => this.createTreeItems(child))}
            </wa-tree-item>`
    }

    render() {
        return html`
            <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
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