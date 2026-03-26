import{A as e,N as t,O as n,a as r,c as i,j as a,w as o,x as s}from"./dist-XDM-k8NY.js";import{I as c,N as l,Q as u,U as d,n as f,r as p}from"./repeat-D7ZcYN9W.js";import{n as m,r as h}from"./events-B_ZxkU_G-CIQGcfIC.js";import"./lit-D5_fOPyp.js";var g,_=`catalog.root`,v=class extends r{static{g=this}constructor(...e){super(...e),this.treeRef=f()}doBeforeUI(){this.rebuildTree(),this.contributionsSubscriptionToken=m(n,e=>{(e.target===`catalog.root`||e.target?.startsWith(`catalog.`))&&this.rebuildTree()})}doClose(){this.contributionsSubscriptionToken&&=(h(this.contributionsSubscriptionToken),void 0),super.doClose()}rebuildTree(){let e=t.getContributions(_);this.rootNodes=this.toTreeNodes(e),this.requestUpdate()}renderToolbar(){return d`
            <lyra-command
                icon="file-arrow-down"
                title="Checkout"
                ?disabled=${!(e.get()instanceof g&&a.get()!==void 0)}
                .action=${()=>this.runWgetForSelection()}
            ></lyra-command>
            <lyra-command icon="arrows-rotate" title="Refresh Catalog" .action=${()=>this.refresh()}></lyra-command>
            <lyra-command icon="angles-down" slot="end" title="Expand All" .action=${()=>this.setAllExpanded(!0)}></lyra-command>
            <lyra-command icon="angles-up" slot="end" title="Collapse All" .action=${()=>this.setAllExpanded(!1)}></lyra-command>
        `}toTreeNodes(e){return e.map(e=>{let n={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){let r=t.getContributions(e.contributionId);n.leaf=r.length===0,n.children=this.toTreeNodes(r)}return n})}onItemDblClicked(e){let t=e.currentTarget,n=t?.model;if(n){if(n.data?.url){this.executeCommand(`wget`,{url:n.data.url});return}!n.leaf&&`expanded`in t&&(t.expanded=!t.expanded)}}runWgetForSelection(){let e=a.get();e&&`url`in e&&e.url&&this.executeCommand(`wget`,{url:e.url})}onSelectionChanged(e){let t=e.detail.selection[0].model;a.set(t.data)}renderContextMenu(){let t=e.get()instanceof g?a.get():void 0;return d`
            <lyra-command
                icon="file-arrow-down"
                title="Checkout"
                ?disabled=${!(t&&`url`in t&&t.url)}
                .action=${()=>this.runWgetForSelection()}
            >Checkout</lyra-command>
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
    `}};o([l()],v.prototype,`rootNodes`,void 0),v=g=o([c(`lyra-catalog`)],v),t.registerContribution(i,{name:`catalog`,label:`Catalog`,icon:`book`,component:e=>d`<lyra-catalog id="${e}"></lyra-catalog>`});