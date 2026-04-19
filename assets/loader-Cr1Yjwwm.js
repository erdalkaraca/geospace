import{n as e,r as t}from"./events-B_ZxkU_G-T3WMQWFe.js";import{Q as n,U as r,_ as i,b as a,n as o,r as s}from"./repeat-jF3QiNU_.js";import{A as c,F as l,M as u,N as d,S as f,T as p,a as m,c as h}from"./dist-Bs3vRgSi.js";import"./lit-CjwmRm-7.js";var g,_=`catalog.root`,v=`No catalog entries yet. Install or enable extensions that contribute catalog items.`,y=class extends m{static{g=this}constructor(...e){super(...e),this.treeRef=o()}doBeforeUI(){this.rebuildTree(),this.contributionsSubscriptionToken=e(c,e=>{(e.target===`catalog.root`||e.target?.startsWith(`catalog.`))&&this.rebuildTree()})}doClose(){this.contributionsSubscriptionToken&&=(t(this.contributionsSubscriptionToken),void 0),super.doClose()}rebuildTree(){let e=l.getContributions(_);this.rootNodes=this.toTreeNodes(e),this.requestUpdate()}renderToolbar(){return r`
            <docks-command
                icon="file-arrow-down"
                title="Checkout"
                ?disabled=${!(u.get()instanceof g&&d.get()!==void 0)}
                .action=${()=>this.runWgetForSelection()}
            ></docks-command>
            <docks-command icon="arrows-rotate" title="Refresh Catalog" .action=${()=>this.refresh()}></docks-command>
            <docks-command icon="angles-down" slot="end" title="Expand All" .action=${()=>this.setAllExpanded(!0)}></docks-command>
            <docks-command icon="angles-up" slot="end" title="Collapse All" .action=${()=>this.setAllExpanded(!1)}></docks-command>
        `}toTreeNodes(e){return e.map(e=>{let t={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){let n=l.getContributions(e.contributionId);t.leaf=n.length===0,t.children=this.toTreeNodes(n)}return t})}wgetParamsFromCatalogData(e){if(!e?.url)return null;let t={url:e.url};return typeof e.filename==`string`&&e.filename.trim()&&(t.filename=e.filename.trim()),t}onItemDblClicked(e){let t=e.currentTarget,n=t?.model;if(!n)return;let r=this.wgetParamsFromCatalogData(n.data);if(r){this.executeCommand(`wget`,r);return}!n.leaf&&`expanded`in t&&(t.expanded=!t.expanded)}runWgetForSelection(){let e=d.get(),t=e&&this.wgetParamsFromCatalogData(e);t&&this.executeCommand(`wget`,t)}onSelectionChanged(e){let t=e.detail.selection[0].model;d.set(t.data)}renderContextMenu(){let e=u.get()instanceof g?d.get():void 0;return r`
            <docks-command
                icon="file-arrow-down"
                title="Checkout"
                ?disabled=${!(e&&`url`in e&&e.url)}
                .action=${()=>this.runWgetForSelection()}
            >Checkout</docks-command>
        `}setAllExpanded(e){let t=this.treeRef.value;t&&t.querySelectorAll(`wa-tree-item`).forEach(t=>{t.expanded=e})}refresh(){this.rebuildTree()}createTreeItems(e,t=!1){return e?r`
            <wa-tree-item
                @dblclick=${this.nobubble(this.onItemDblClicked)}
                .model=${e}
                ?expanded=${t}
            >
                <span>${f(e.icon)} ${e.label}</span>
                ${e.children?.map(e=>this.createTreeItems(e))}
            </wa-tree-item>
        `:r``}renderContent(){return r`
            <div class="catalog-root">
                ${(this.rootNodes?.length??0)>0?r`
                          <wa-tree
                              ${s(this.treeRef)}
                              @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                              style="--indent-guide-width: 1px;"
                          >
                              ${this.rootNodes.map(e=>this.createTreeItems(e,!0))}
                          </wa-tree>
                      `:r`
                          <docks-no-content
                              message=${v}
                              icon="book"
                          ></docks-no-content>
                      `}
            </div>
        `}static{this.styles=n`
        :host {
            display: flex;
            flex-direction: column;
        }

        .catalog-root {
            height: 100%;
            min-height: 0;
            display: flex;
            flex-direction: column;
        }

        .catalog-root wa-tree {
            flex: 1;
            min-height: 0;
        }
    `}};p([i()],y.prototype,`rootNodes`,void 0),y=g=p([a(`docks-catalog`)],y),l.registerContribution(h,{name:`catalog`,label:`Catalog`,icon:`book`,component:e=>r`<docks-catalog id="${e}"></docks-catalog>`});