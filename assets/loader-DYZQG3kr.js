import{A as e,N as t,O as n,a as r,c as i,j as a,w as o,x as s}from"./dist-C1LXzuY9.js";import{I as c,N as l,Q as u,U as d,n as f,r as p}from"./repeat-D7ZcYN9W.js";import{n as m,r as h}from"./events-B_ZxkU_G-CIQGcfIC.js";import"./lit-D5_fOPyp.js";var g,_=`catalog.root`,v=class extends r{static{g=this}constructor(...e){super(...e),this.treeRef=f()}doBeforeUI(){this.rebuildTree(),this.contributionsSubscriptionToken=m(n,e=>{(e.target===`catalog.root`||e.target?.startsWith(`catalog.`))&&this.rebuildTree()})}doClose(){this.contributionsSubscriptionToken&&=(h(this.contributionsSubscriptionToken),void 0),super.doClose()}rebuildTree(){let e=t.getContributions(_);this.rootNodes=this.toTreeNodes(e),this.requestUpdate()}renderToolbar(){return d`
            <docks-command
                icon="file-arrow-down"
                title="Checkout"
                ?disabled=${!(e.get()instanceof g&&a.get()!==void 0)}
                .action=${()=>this.runWgetForSelection()}
            ></docks-command>
            <docks-command icon="arrows-rotate" title="Refresh Catalog" .action=${()=>this.refresh()}></docks-command>
            <docks-command icon="angles-down" slot="end" title="Expand All" .action=${()=>this.setAllExpanded(!0)}></docks-command>
            <docks-command icon="angles-up" slot="end" title="Collapse All" .action=${()=>this.setAllExpanded(!1)}></docks-command>
        `}toTreeNodes(e){return e.map(e=>{let n={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){let r=t.getContributions(e.contributionId);n.leaf=r.length===0,n.children=this.toTreeNodes(r)}return n})}wgetParamsFromCatalogData(e){if(!e?.url)return null;let t={url:e.url};return typeof e.filename==`string`&&e.filename.trim()&&(t.filename=e.filename.trim()),t}onItemDblClicked(e){let t=e.currentTarget,n=t?.model;if(!n)return;let r=this.wgetParamsFromCatalogData(n.data);if(r){this.executeCommand(`wget`,r);return}!n.leaf&&`expanded`in t&&(t.expanded=!t.expanded)}runWgetForSelection(){let e=a.get(),t=e&&this.wgetParamsFromCatalogData(e);t&&this.executeCommand(`wget`,t)}onSelectionChanged(e){let t=e.detail.selection[0].model;a.set(t.data)}renderContextMenu(){let t=e.get()instanceof g?a.get():void 0;return d`
            <docks-command
                icon="file-arrow-down"
                title="Checkout"
                ?disabled=${!(t&&`url`in t&&t.url)}
                .action=${()=>this.runWgetForSelection()}
            >Checkout</docks-command>
        `}setAllExpanded(e){let t=this.treeRef.value;t&&t.querySelectorAll(`wa-tree-item`).forEach(t=>{t.expanded=e})}refresh(){this.rebuildTree()}createTreeItems(e,t=!1){return e?d`
            <wa-tree-item
                @dblclick=${this.nobubble(this.onItemDblClicked)}
                .model=${e}
                ?expanded=${t}
            >
                <span>${s(e.icon)} ${e.label}</span>
                ${e.children?.map(e=>this.createTreeItems(e))}
            </wa-tree-item>
        `:d``}renderContent(){return d`
            <wa-tree
                ${p(this.treeRef)}
                @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                style="--indent-guide-width: 1px;"
            >
                ${this.rootNodes?.map(e=>this.createTreeItems(e,!0))}
            </wa-tree>
        `}static{this.styles=u`
        :host {
            display: flex;
            flex-direction: column;
        }
    `}};o([l()],v.prototype,`rootNodes`,void 0),v=g=o([c(`docks-catalog`)],v),t.registerContribution(i,{name:`catalog`,label:`Catalog`,icon:`book`,component:e=>d`<docks-catalog id="${e}"></docks-catalog>`});