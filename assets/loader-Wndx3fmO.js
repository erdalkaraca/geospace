import{a as g,c as b,f as y,b as c,g as C,t as w}from"./webawesome-BTZM3ZZM.js";import{L as x,f as m,V as i,d as u,r as d,w as _,t as h,F as v,b as A}from"./geospace-app-Chey6HF-.js";import"./chunk.FSRXYGSW-CMgxtNeZ.js";import"./preload-helper-WQhrSmCl.js";var I=Object.defineProperty,T=Object.getOwnPropertyDescriptor,p=(e,t,o,a)=>{for(var r=a>1?void 0:a?T(t,o):t,s=e.length-1,l;s>=0;s--)(l=e[s])&&(r=(a?l(t,o,r):l(r))||r);return a&&r&&I(t,o,r),r};const $="catalog.root";let n=class extends x{constructor(){super(...arguments),this.treeRef=y()}doBeforeUI(){const e=m.getContributions($);this.rootNodes=this.toTreeNodes(e)}renderToolbar(){const e=i.get()instanceof n&&u.get()!==void 0;return c`
            <lyra-command
                cmd="checkout"
                icon="file-arrow-down"
                ?disabled=${!e}
                title="Checkout"
            ></lyra-command>
            <lyra-command
                cmd="refresh_catalog"
                icon="arrows-rotate"
                title="Refresh Catalog"
            ></lyra-command>
            <lyra-command
                cmd="catalog_expand_all"
                icon="angles-down"
                slot="end"
                title="Expand All"
            ></lyra-command>
            <lyra-command
                cmd="catalog_collapse_all"
                icon="angles-up"
                slot="end"
                title="Collapse All"
            ></lyra-command>
        `}toTreeNodes(e){return e.map(t=>{const o={data:t.state,icon:t.icon,label:t.label,leaf:!1};if(t.contributionId){const a=m.getContributions(t.contributionId);o.leaf=a.length===0,o.children=this.toTreeNodes(a)}return o})}onItemDblClicked(e){const t=e.currentTarget.model.data.url;this.executeCommand("checkout",{url:t})}onSelectionChanged(e){const t=e.detail.selection[0].model;u.set(t.data)}setAllExpanded(e){const t=this.treeRef.value;t&&t.querySelectorAll("wa-tree-item").forEach(o=>{o.expanded=e})}refresh(){this.requestUpdate()}createTreeItems(e,t=!1){return e?c`
            <wa-tree-item
                @dblclick=${this.nobubble(this.onItemDblClicked)}
                .model=${e}
                ?expanded=${t}
            >
                <span><lyra-icon name="${e.icon}"></lyra-icon> ${e.label}</span>
                ${e.children?.map(o=>this.createTreeItems(o))}
            </wa-tree-item>
        `:c``}render(){return c`
            <wa-tree
                ${C(this.treeRef)}
                @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                style="--indent-guide-width: 1px;"
            >
                ${this.rootNodes?.map(e=>this.createTreeItems(e,!0))}
            </wa-tree>
        `}};n.styles=g`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;p([b()],n.prototype,"rootNodes",2);n=p([w("gs-catalog")],n);async function k(e,t){if(!e||t.includes("/"))return t;const a=(await e.listChildren(!1))[0];return a?`${a.getName()}/${t}`:t}d({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async e=>{let t=e.params&&e.params.url;if(!t){const a=u.get();if(!a||!("url"in a))return;t=a.url}const o=await _.getWorkspace();if(!o){h("No workspace selected.");return}fetch(t,{method:"GET"}).then(a=>a.blob()).then(async a=>{const r=new URL(t).pathname.split("/"),s=r[r.length-1],l=await k(o,s);return o.getResource(l,{create:!0}).then(f=>f.saveContents(a,{contentType:v.BINARY}).then(()=>{A("File checked out: "+s)}))}).catch(a=>{h(String(a))})}}});d({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async()=>{const e=i.get();e instanceof n&&e.refresh()}}});d({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async()=>{const e=i.get();e instanceof n&&e.setAllExpanded(!0)}}});d({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async()=>{const e=i.get();e instanceof n&&e.setAllExpanded(!1)}}});m.registerContribution("system.fastviews-bottomend",{name:"catalog",label:"Catalog",icon:"book",component:e=>c`<gs-catalog id="${e}"></gs-catalog>`});
