import{b as o,a as x,n as $,c as f,f as P,s as A,j as k,g as S,t as R}from"./default-xvQdiKMn.js";import{g as w,j as C,f as T,k as N,K as O,l as E,m as y,p as b}from"./geospace-app-CCGOW35A.js";import"./chunk.IVRNYRHD-Htfh_CZj.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.2PWIIYRH-COD9mzAh.js";var D=Object.defineProperty,F=Object.getOwnPropertyDescriptor,m=(e,t,s,i)=>{for(var r=i>1?void 0:i?F(t,s):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(r=(i?n(t,s,r):n(r))||r);return i&&r&&D(t,s,r),r};let h=class extends O{constructor(){super(...arguments),this.settings={},this.categoryTree=[],this.selectedPath=null,this.detailRows=[],this.detailTitle="",this.searchQuery="",this.detailForPath=null,this.treeRef=P()}async doInitUI(){await this.loadSettings(),A(E,()=>this.loadSettings())}async loadSettings(){this.isDirty()||(this.settings=await y.getAll()??{},this.buildCategoryTree(),this.selectedPath&&this.updateDetailForPath(this.selectedPath))}buildCategoryTree(){const e=y.getCategories(),t=new Set(e.map(i=>i.id)),s=[];for(const i of e){const r=i.schema?.properties,a=this.settings[i.id],n=this.buildChildNodes(`${i.id}`,r,a),l=i.schema?.title??i.label;this.matchesSearch(l,i.id)&&s.push({path:i.id,label:l,children:n,expanded:!0})}for(const i of Object.keys(this.settings)){if(t.has(i))continue;const r=this.settings[i],a=this.buildChildNodes(i,void 0,r);this.matchesSearch(i,i)&&s.push({path:i,label:i,children:a,expanded:!0})}this.categoryTree=s}buildChildNodes(e,t,s){const i=[];if(t)for(const[r,a]of Object.entries(t)){const n=`${e}.${r}`,l=a?.title??r,c=h.isRecord(s)?s[r]:void 0,d=this.buildChildNodes(n,a?.properties,c);this.matchesSearch(l,n)&&i.push({path:n,label:l,children:d,expanded:!1})}if(h.isRecord(s)&&!t)for(const[r,a]of Object.entries(s)){const n=`${e}.${r}`,l=this.buildChildNodes(n,void 0,a);this.matchesSearch(r,n)&&i.push({path:n,label:r,children:l,expanded:!1})}return i}matchesSearch(e,t){if(!this.searchQuery.trim())return!0;const s=this.searchQuery.toLowerCase();return e.toLowerCase().includes(s)||t.toLowerCase().includes(s)}static isRecord(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}refreshAfterEdit(){this.markDirty(!0),this.selectedPath&&this.updateDetailForPath(this.selectedPath)}getValueAtPath(e){const t=e.split(".").filter(Boolean);if(t.length===0)return this.settings;let s=this.settings;for(const i of t){if(s==null||typeof s!="object")return;s=s[i]}return s}setAtInMemory(e,t){const s=e.split(".").filter(Boolean);s.length!==0&&(this.settings=this.deepSet(this.settings,s,t))}deepSet(e,t,s){if(t.length===1){const c=t[0];if(Array.isArray(e)){const d=parseInt(c,10);if(isNaN(d)||d<0)return e;const p=[...e];return p[d]=s,p}return{...e,[c]:s}}const[i,...r]=t;if(Array.isArray(e)){const c=parseInt(i,10);if(isNaN(c)||c<0)return e;const d=[...e],p=d[c],u=p!==null&&typeof p=="object"?p:{};return d[c]=this.deepSet(u,r,s),d}const a=e,n=a[i],l=n!==null&&typeof n=="object"?n:{};return{...a,[i]:this.deepSet(l,r,s)}}getArrayItemLabel(e,t){if(h.isRecord(e)){if(typeof e.id=="string")return e.id;if(typeof e.name=="string")return e.name}return`Item ${t}`}async updateDetailForPath(e){const t=y.getSchemaForSettingKey(e),s=this.getValueAtPath(e),i=h.isRecord(s)?s:null,r=Array.isArray(s);let a;if(r){const l=s,c=[];l.forEach((d,p)=>{const u=`${e}.${p}`,g=this.getArrayItemLabel(d,p);h.isRecord(d)?Object.keys(d).forEach(v=>{c.push({key:v,path:`${u}.${v}`,title:v,description:"",schema:void 0,value:d[v],parentPath:u,groupLabel:g})}):c.push({key:String(p),path:u,title:g,description:`Array element ${p}.`,schema:void 0,value:d,parentPath:e,groupLabel:g})}),a=c}else if(i!==null){const l=t?.properties;a=Object.keys(l||i).map(d=>{const p=`${e}.${d}`,u=l?.[d],g=i[d];return{key:d,path:p,title:u?.title??d,description:u?.description??"",schema:u,value:g,parentPath:e}})}else if(s!=null&&typeof s!="object"){const l=e.split(".").pop()??e;a=[{key:l,path:e,title:l,description:"Edit value (no schema).",schema:void 0,value:s}]}else a=[];if(a.forEach(l=>{l.title===void 0&&(l.title=l.key)}),this.selectedPath!==e)return;const n=y.getCategories().find(l=>l.id===e);this.detailForPath=e,this.detailTitle=n?.label??t?.title??e,this.detailRows=a}selectPath(e){this.selectedPath=e,this.updateDetailForPath(e)}updated(e){super.updated?.(e),e.has("selectedPath")&&this.selectedPath!==this.detailForPath&&(this.selectedPath?this.updateDetailForPath(this.selectedPath):(this.detailForPath=null,this.detailRows=[],this.detailTitle=""))}setRowValue(e,t){this.setAtInMemory(e.path,t),this.refreshAfterEdit()}setRowValueFromJson(e,t){try{this.setRowValue(e,JSON.parse(t))}catch{this.refreshAfterEdit()}}renameKey(e,t,s){if(s.trim()===""||s===t)return;const i=this.getValueAtPath(e);if(!h.isRecord(i))return;const r=i[t],a={...i};delete a[t],a[s.trim()]=r,this.setAtInMemory(e,a),this.refreshAfterEdit()}deleteKey(e,t){const s=this.getValueAtPath(e);if(!h.isRecord(s))return;const i={...s};delete i[t],this.setAtInMemory(e,i),this.refreshAfterEdit()}async addKeyToGroup(e){const t=await b("New key name:","");t?.trim()&&(this.setAtInMemory(`${e}.${t.trim()}`,null),this.refreshAfterEdit())}deleteTopLevelKey(e){if(!(e in this.settings))return;const t={...this.settings};delete t[e],this.settings=t,this.markDirty(!0),this.selectedPath===e&&(this.selectedPath=null,this.detailForPath=null,this.detailRows=[],this.detailTitle=""),this.buildCategoryTree(),this.selectedPath&&this.updateDetailForPath(this.selectedPath)}renderDetailControl(e){const t=e.schema,s=t?.type,i=t?.enum,r=e.value;if(i&&Array.isArray(i)&&i.length>0){const n=i.map(c=>String(c)),l=r!=null?String(r):t?.default!==void 0?String(t.default):n[0];return o`
                <wa-select
                    value=${l}
                    @change=${c=>this.setRowValue(e,c.target.value)}
                    size="small">
                    ${n.map(c=>o`<wa-option value=${c}>${c}</wa-option>`)}
                </wa-select>
            `}if(s==="boolean"){const n=r===!0||r===void 0&&t?.default===!0;return o`
                <wa-switch
                    ?checked=${n}
                    @change=${l=>this.setRowValue(e,l.target.checked)}
                    size="small">
                </wa-switch>
            `}if(s==="number"){const n=typeof r=="number"?r:typeof t?.default=="number"?t.default:0;return o`
                <wa-number-input
                    .value=${String(n)}
                    @change=${l=>this.setRowValue(e,Number(l.target.value))}
                    size="small">
                </wa-number-input>
            `}const a=r!==null&&typeof r=="object";if(a&&!t&&h.isRecord(r))return this.renderObjectFields(e.path,r,0);if(a){const n=JSON.stringify(r,null,2);return o`
                <wa-textarea
                    .value=${n}
                    @blur=${l=>this.setRowValueFromJson(e,l.target.value)}
                    rows="3">
                </wa-textarea>
            `}return this.renderPrimitiveControl(e,r)}renderPrimitiveControl(e,t){const s=t!=null?String(t):"";return typeof t=="boolean"?o`
                <wa-switch
                    ?checked=${t}
                    @change=${i=>this.setRowValue(e,i.target.checked)}
                    size="small">
                </wa-switch>
            `:typeof t=="number"?o`
                <wa-number-input
                    .value=${String(t)}
                    @change=${i=>this.setRowValue(e,Number(i.target.value))}
                    size="small">
                </wa-number-input>
            `:o`
                <wa-input
                .value=${s}
                @input=${i=>this.setRowValue(e,i.target.value)}
                size="small">
            </wa-input>
        `}renderObjectFields(e,t,s){if(s>=2){const a=JSON.stringify(t,null,2),n={key:"",path:e,title:"",description:"",value:t};return o`
                <wa-textarea
                    .value=${a}
                    @blur=${l=>this.setRowValueFromJson(n,l.target.value)}
                    rows="3">
                </wa-textarea>
            `}const r=Object.entries(t);return o`
            <div class="nested-object" >
                ${r.map(([a,n])=>{const l=`${e}.${a}`,c={key:a,path:l,title:a,description:"",value:n,parentPath:e},d=h.isRecord(n),p=Array.isArray(n);return o`
                        <div class="nested-row">
                            <wa-input
                                .value=${a}
                                size="small"
                                style="width: 140px;"
                                @blur=${u=>{const g=u.target.value.trim();g&&g!==a&&this.renameKey(e,a,g)}}>
                            </wa-input>
                            <span class="nested-sep">:</span>
                            ${d?this.renderObjectFields(l,n,s+1):p?o`
                                        <wa-textarea
                                            .value=${JSON.stringify(n,null,2)}
                                            rows="2"
                                            style="min-width: 200px;"
                                            @blur=${u=>this.setRowValueFromJson(c,u.target.value)}>
                                        </wa-textarea>
                                    `:this.renderPrimitiveControl(c,n)}
                        </div>
                    `})}
            </div>
        `}renderDetailPanel(){if(!this.selectedPath)return o`
                <div class="detail-placeholder">
                    <wa-icon name="gear"></wa-icon>
                    <p>Select a category from the tree</p>
                </div>
            `;if(this.detailForPath!==this.selectedPath)return o`
                <div class="detail-panel">
                    <div class="detail-heading-row">
                        <h2 class="detail-heading">${this.selectedPath}</h2>
                    </div>
                    <div class="detail-placeholder">
                        <p>Loading…</p>
                    </div>
                </div>
            `;const e=this.detailRows.filter(a=>{if(!this.searchQuery.trim())return!0;const n=this.searchQuery.toLowerCase();return a.title.toLowerCase().includes(n)||a.description.toLowerCase().includes(n)}),t=this.selectedPath?this.getValueAtPath(this.selectedPath):void 0,s=h.isRecord(t),i=this.selectedPath!==null&&!this.selectedPath.includes("."),r=s||i;return o`
            <div class="detail-panel">
                <div class="detail-heading-row">
                    <h2 class="detail-heading">${this.detailTitle}</h2>
                    ${r?o`
                        <k-command size="small" icon="plus" title="Add setting" .action=${()=>this.addKeyToGroup(this.selectedPath)}>Add</k-command>
                    `:""}
                    ${i?o`
                        <k-command size="small" icon="trash" title="Delete category" .action=${()=>this.deleteTopLevelKey(this.selectedPath)}></k-command>
                    `:""}
                </div>
                <wa-scroller class="detail-scroller" orientation="vertical">
                    ${e.length===0?o`
                        <div class="detail-empty">
                            ${this.detailRows.length===0?o`<p>No settings in this category. Add keys in the JSON file or register a JSON Schema for this path.</p>`:o`<p>No matching settings for the current search.</p>`}
                        </div>
                    `:k(e,a=>a.path,(a,n)=>{const l=n>0?e[n-1]:null,c=a.groupLabel&&l?.groupLabel!==a.groupLabel,d=!!a.groupLabel;return o`
                                    ${c?o`
                                        <div class="detail-group-header">
                                            <span>${a.groupLabel}</span>
                                            <k-command size="small" icon="plus" title="Add setting" .action=${()=>this.addKeyToGroup(a.parentPath)}>Add</k-command>
                                        </div>
                                    `:""}
                                    <div class="setting-row ${d?"setting-row-in-group":""}">
                                        <div class="setting-meta">
                                            ${a.parentPath!=null?o`
                                                <wa-input
                                                    .value=${a.key}
                                                    size="small"
                                                    class="editable-key setting-control-key"
                                                    @blur=${p=>{const u=p.target.value.trim();u&&u!==a.key&&this.renameKey(a.parentPath,a.key,u)}}>
                                                </wa-input>
                                            `:o`<span class="setting-title">${a.title}</span>`}
                                            ${a.description?o`<p class="setting-description">${a.description}</p>`:""}
                                        </div>
                                        <div class="setting-control">${this.renderDetailControl(a)}</div>
                                        ${a.parentPath!=null?o`
                                            <k-command size="small" icon="trash" title="Delete setting" .action=${()=>this.deleteKey(a.parentPath,a.key)}></k-command>
                                        `:""}
                                    </div>
                                `})}
                </wa-scroller>
            </div>
        `}renderCategoryNode(e){const t=e.children.length>0,s=this.selectedPath===e.path;return o`
            <wa-tree-item ?expanded=${e.expanded}>
                <div
                    class="tree-node-content ${s?"selected":""}"
                    @click=${()=>this.selectPath(e.path)}
                    role="button"
                    tabindex="0"
                    @keydown=${i=>i.key==="Enter"&&this.selectPath(e.path)}>
                    <span class="tree-node-label">${e.label}</span>
                </div>
                ${t?e.children.map(i=>this.renderCategoryNode(i)):""}
            </wa-tree-item>
        `}setAllExpanded(e){const t=this.treeRef.value;t&&t.querySelectorAll("wa-tree-item").forEach(s=>{s.expanded=e}),this.categoryTree=this.categoryTree.map(s=>this.setExpanded(s,e)),this.requestUpdate()}setExpanded(e,t){return{...e,expanded:t,children:e.children.map(s=>this.setExpanded(s,t))}}async addKey(){const e=await b("Enter new top-level key name:","");e?.trim()&&(this.setAtInMemory(e.trim(),null),this.markDirty(!0),this.buildCategoryTree())}save(){y.setAll(this.settings).then(()=>{this.markDirty(!1)}).catch(e=>{console.error("Failed to save settings:",e)})}renderToolbar(){return o`
            <wa-input
                placeholder="Search settings"
                .value=${this.searchQuery}
                @input=${e=>{this.searchQuery=e.target.value,this.buildCategoryTree()}}
                size="small"
                class="toolbar-search">
            </wa-input>
            <k-command size="small" icon="plus" title="Add Key" .action=${()=>this.addKey()}>Add Key</k-command>
            <k-command size="small" icon="chevron-down" title="Expand All" .action=${()=>this.setAllExpanded(!0)}>Expand All</k-command>
            <k-command size="small" icon="chevron-right" title="Collapse All" .action=${()=>this.setAllExpanded(!1)}>Collapse All</k-command>
        `}render(){return o`
            <div class="settings-editor-container">
                <wa-split-panel position="25" class="split-panel-fill">
                    <div slot="start" class="left-panel">
                        <wa-scroller class="tree-scroller" orientation="vertical">
                            ${this.categoryTree.length===0?o`
                                <div class="empty-state">
                                    <wa-icon name="gear"></wa-icon>
                                    <p>No settings.</p>
                                </div>
                            `:o`
                                <wa-tree ${S(this.treeRef)}>
                                    ${this.categoryTree.map(e=>this.renderCategoryNode(e))}
                                </wa-tree>
                            `}
                        </wa-scroller>
                    </div>
                    <div slot="end" class="right-panel">
                        ${this.renderDetailPanel()}
                    </div>
                </wa-split-panel>
            </div>
        `}};h.styles=x`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .settings-editor-container {
            flex: 1;
            min-height: 0;
            display: flex;
            flex-direction: column;
        }

        .left-panel, .right-panel {
            display: flex;
            flex-direction: column;
            min-height: 0;
            overflow: hidden;
        }

        .tree-scroller, .detail-scroller {
            flex: 1;
            min-height: 0;
        }

        .tree-node-content {
            cursor: pointer;
            user-select: none;
        }

        .tree-node-content.selected {
            font-weight: 600;
        }

        .detail-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            padding: 32px;
        }

        .detail-panel {
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: hidden;
        }

        .detail-heading-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
            padding: 0 16px;
        }

        .detail-heading {
            margin: 0;
            flex: 1;
        }

        .detail-scroller {
            padding: 0 16px 16px;
        }

        .detail-empty {
            padding: 24px 0;
        }

        .detail-group-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 12px;
            margin-bottom: 4px;
        }

        .detail-group-header:first-child {
            margin-top: 0;
        }

        .nested-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 6px;
        }

        .setting-row {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: flex-start;
            padding: 12px 0;
        }

        .setting-row-in-group {
            padding-left: 20px;
        }

        .setting-meta {
            flex: 0 0 auto;
            min-width: 140px;
        }

        .setting-title {
            font-weight: 600;
            display: block;
            margin-bottom: 4px;
        }

        .setting-control {
            flex: 1;
            min-width: 0;
            display: flex;
        }

        .setting-row k-command {
            flex-shrink: 0;
        }

        .setting-control wa-input,
        .setting-control wa-textarea,
        .setting-control wa-number-input,
        .setting-control wa-select {
            flex: 1;
            min-width: 0;
            width: 100%;
        }

        .setting-meta .setting-control-key {
            width: 160px;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 32px;
            text-align: center;
        }

        .nested-object {
            margin-left: 8px;
            padding-left: 8px;
            border-left: 2px solid var(--wa-color-neutral-85);
        }

        .toolbar-search {
            width: 200px;
            margin-right: 8px;
        }

        .split-panel-fill {
            height: 100%;
        }
    `;m([$({attribute:!1})],h.prototype,"input",2);m([f()],h.prototype,"settings",2);m([f()],h.prototype,"categoryTree",2);m([f()],h.prototype,"selectedPath",2);m([f()],h.prototype,"detailRows",2);m([f()],h.prototype,"detailTitle",2);m([f()],h.prototype,"searchQuery",2);h=m([R("k-settings-tree")],h);const K=e=>{w.registerEditorInputHandler({editorId:"system.settings-tree",label:"Settings",ranking:1e3,canHandle:t=>t.key===".system.settings",handle:async t=>(t.widgetFactory=()=>o`
                <k-settings-tree .input=${t}></k-settings-tree>
            `,t)}),C.registerHandler("open_settings",{ranking:100,execute:()=>{const t={title:"Settings",data:{},key:".system.settings",icon:"gear",state:{}};w.loadEditor(t)}}),T.registerContribution(N,{command:"open_settings",icon:"gear",label:"Settings"})};export{K as default};
