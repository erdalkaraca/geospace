import{n as e}from"./events-B_ZxkU_G-T3WMQWFe.js";import{Q as t,U as n,_ as r,b as i,n as a,r as o,t as s,v as c}from"./repeat-jF3QiNU_.js";import{C as l,F as u,P as d,S as f,T as p,a as m,g as h,n as g,u as _,v}from"./dist-Bs3vRgSi.js";var y,b=class extends m{static{y=this}constructor(...e){super(...e),this.settings={},this.categoryTree=[],this.selectedPath=null,this.detailRows=[],this.detailTitle=``,this.searchQuery=``,this.detailForPath=null,this.treeRef=a()}async doInitUI(){await this.loadSettings(),e(h,()=>this.loadSettings())}async loadSettings(){this.isDirty()||(this.settings=await v.getAll()??{},this.buildCategoryTree(),this.selectedPath&&this.updateDetailForPath(this.selectedPath))}buildCategoryTree(){let e=v.getCategories(),t=new Set(e.map(e=>e.id)),n=[];for(let t of e){let e=t.schema?.properties,r=this.settings[t.id],i=this.buildChildNodes(`${t.id}`,e,r),a=t.schema?.title??t.label;this.matchesSearch(a,t.id)&&n.push({path:t.id,label:a,children:i,expanded:!0})}for(let e of Object.keys(this.settings)){if(t.has(e))continue;let r=this.settings[e],i=this.buildChildNodes(e,void 0,r);this.matchesSearch(e,e)&&n.push({path:e,label:e,children:i,expanded:!0})}this.categoryTree=n}buildChildNodes(e,t,n){let r=[];if(t)for(let[i,a]of Object.entries(t)){let t=`${e}.${i}`,o=a?.title??i,s=y.isRecord(n)?n[i]:void 0,c=this.buildChildNodes(t,a?.properties,s);this.matchesSearch(o,t)&&r.push({path:t,label:o,children:c,expanded:!1})}if(y.isRecord(n)&&!t)for(let[t,i]of Object.entries(n)){let n=`${e}.${t}`,a=this.buildChildNodes(n,void 0,i);this.matchesSearch(t,n)&&r.push({path:n,label:t,children:a,expanded:!1})}return r}matchesSearch(e,t){if(!this.searchQuery.trim())return!0;let n=this.searchQuery.toLowerCase();return e.toLowerCase().includes(n)||t.toLowerCase().includes(n)}static isRecord(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}refreshAfterEdit(){this.markDirty(!0),this.selectedPath&&this.updateDetailForPath(this.selectedPath)}getValueAtPath(e){let t=e.split(`.`).filter(Boolean);if(t.length===0)return this.settings;let n=this.settings;for(let e of t){if(typeof n!=`object`||!n)return;n=n[e]}return n}setAtInMemory(e,t){let n=e.split(`.`).filter(Boolean);n.length!==0&&(this.settings=this.deepSet(this.settings,n,t))}deepSet(e,t,n){if(t.length===1){let r=t[0];if(Array.isArray(e)){let t=parseInt(r,10);if(isNaN(t)||t<0)return e;let i=[...e];return i[t]=n,i}return{...e,[r]:n}}let[r,...i]=t;if(Array.isArray(e)){let t=parseInt(r,10);if(isNaN(t)||t<0)return e;let a=[...e],o=a[t],s=typeof o==`object`&&o?o:{};return a[t]=this.deepSet(s,i,n),a}let a=e,o=a[r],s=typeof o==`object`&&o?o:{};return{...a,[r]:this.deepSet(s,i,n)}}getArrayItemLabel(e,t){if(y.isRecord(e)){if(typeof e.id==`string`)return e.id;if(typeof e.name==`string`)return e.name}return`Item ${t}`}async updateDetailForPath(e){let t=v.getSchemaForSettingKey(e),n=this.getValueAtPath(e),r=y.isRecord(n)?n:null,i=Array.isArray(n),a;if(i){let t=n,r=[];t.forEach((t,n)=>{let i=`${e}.${n}`,a=this.getArrayItemLabel(t,n);y.isRecord(t)?Object.keys(t).forEach(e=>{r.push({key:e,path:`${i}.${e}`,title:e,description:``,schema:void 0,value:t[e],parentPath:i,groupLabel:a})}):r.push({key:String(n),path:i,title:a,description:`Array element ${n}.`,schema:void 0,value:t,parentPath:e,groupLabel:a})}),a=r}else if(r!==null){let n=t?.properties;a=Object.keys(n||r).map(t=>{let i=`${e}.${t}`,a=n?.[t],o=r[t];return{key:t,path:i,title:a?.title??t,description:a?.description??``,schema:a,value:o,parentPath:e}})}else if(n!=null&&typeof n!=`object`){let t=e.split(`.`).pop()??e;a=[{key:t,path:e,title:t,description:`Edit value (no schema).`,schema:void 0,value:n}]}else a=[];if(a.forEach(e=>{e.title===void 0&&(e.title=e.key)}),this.selectedPath!==e)return;let o=v.getCategories().find(t=>t.id===e);this.detailForPath=e,this.detailTitle=o?.label??t?.title??e,this.detailRows=a}selectPath(e){this.selectedPath=e,this.updateDetailForPath(e)}updated(e){super.updated?.(e),e.has(`selectedPath`)&&this.selectedPath!==this.detailForPath&&(this.selectedPath?this.updateDetailForPath(this.selectedPath):(this.detailForPath=null,this.detailRows=[],this.detailTitle=``))}setRowValue(e,t){this.setAtInMemory(e.path,t),this.refreshAfterEdit()}setRowValueFromJson(e,t){try{this.setRowValue(e,JSON.parse(t))}catch{this.refreshAfterEdit()}}renameKey(e,t,n){if(n.trim()===``||n===t)return;let r=this.getValueAtPath(e);if(!y.isRecord(r))return;let i=r[t],a={...r};delete a[t],a[n.trim()]=i,this.setAtInMemory(e,a),this.refreshAfterEdit()}deleteKey(e,t){let n=this.getValueAtPath(e);if(!y.isRecord(n))return;let r={...n};delete r[t],this.setAtInMemory(e,r),this.refreshAfterEdit()}async addKeyToGroup(e){let t=await l(`New key name:`,``);t?.trim()&&(this.setAtInMemory(`${e}.${t.trim()}`,null),this.refreshAfterEdit())}deleteTopLevelKey(e){if(!(e in this.settings))return;let t={...this.settings};delete t[e],this.settings=t,this.markDirty(!0),this.selectedPath===e&&(this.selectedPath=null,this.detailForPath=null,this.detailRows=[],this.detailTitle=``),this.buildCategoryTree(),this.selectedPath&&this.updateDetailForPath(this.selectedPath)}renderDetailControl(e){let t=e.schema,r=t?.type,i=t?.enum,a=e.value;if(i&&Array.isArray(i)&&i.length>0){let r=i.map(e=>String(e));return n`
                <wa-select
                    value=${a==null?t?.default===void 0?r[0]:String(t.default):String(a)}
                    @change=${t=>this.setRowValue(e,t.target.value)}
                    size="small">
                    ${r.map(e=>n`<wa-option value=${e}>${e}</wa-option>`)}
                </wa-select>
            `}if(r===`boolean`)return n`
                <wa-switch
                    ?checked=${a===!0||a===void 0&&t?.default===!0}
                    @change=${t=>this.setRowValue(e,t.target.checked)}
                    size="small">
                </wa-switch>
            `;if(r===`number`){let r=typeof a==`number`?a:typeof t?.default==`number`?t.default:0;return n`
                <wa-number-input
                    .value=${String(r)}
                    @change=${t=>this.setRowValue(e,Number(t.target.value))}
                    size="small">
                </wa-number-input>
            `}let o=typeof a==`object`&&!!a;return o&&!t&&y.isRecord(a)?this.renderObjectFields(e.path,a,0):o?n`
                <wa-textarea
                    .value=${JSON.stringify(a,null,2)}
                    @blur=${t=>this.setRowValueFromJson(e,t.target.value)}
                    rows="3">
                </wa-textarea>
            `:this.renderPrimitiveControl(e,a)}renderPrimitiveControl(e,t){return typeof t==`boolean`?n`
                <wa-switch
                    ?checked=${t}
                    @change=${t=>this.setRowValue(e,t.target.checked)}
                    size="small">
                </wa-switch>
            `:typeof t==`number`?n`
                <wa-number-input
                    .value=${String(t)}
                    @change=${t=>this.setRowValue(e,Number(t.target.value))}
                    size="small">
                </wa-number-input>
            `:n`
                <wa-input
                .value=${t==null?``:String(t)}
                @input=${t=>this.setRowValue(e,t.target.value)}
                size="small">
            </wa-input>
        `}renderObjectFields(e,t,r){if(r>=2){let r=JSON.stringify(t,null,2),i={key:``,path:e,title:``,description:``,value:t};return n`
                <wa-textarea
                    .value=${r}
                    @blur=${e=>this.setRowValueFromJson(i,e.target.value)}
                    rows="3">
                </wa-textarea>
            `}return n`
            <div class="nested-object" >
                ${Object.entries(t).map(([t,i])=>{let a=`${e}.${t}`,o={key:t,path:a,title:t,description:``,value:i,parentPath:e};return n`
                        <div class="nested-row">
                            <wa-input
                                .value=${t}
                                size="small"
                                style="width: 140px;"
                                @blur=${n=>{let r=n.target.value.trim();r&&r!==t&&this.renameKey(e,t,r)}}>
                            </wa-input>
                            <span class="nested-sep">:</span>
                            ${y.isRecord(i)?this.renderObjectFields(a,i,r+1):Array.isArray(i)?n`
                                        <wa-textarea
                                            .value=${JSON.stringify(i,null,2)}
                                            rows="2"
                                            style="min-width: 200px;"
                                            @blur=${e=>this.setRowValueFromJson(o,e.target.value)}>
                                        </wa-textarea>
                                    `:this.renderPrimitiveControl(o,i)}
                        </div>
                    `})}
            </div>
        `}renderDetailPanel(){if(!this.selectedPath)return n`
                <div class="detail-placeholder">
                    ${f(`docks settings`,{label:`Settings`})}
                    <p>Select a category from the tree</p>
                </div>
            `;if(this.detailForPath!==this.selectedPath)return n`
                <div class="detail-panel">
                    <div class="detail-heading-row">
                        <h2 class="detail-heading">${this.selectedPath}</h2>
                    </div>
                    <div class="detail-placeholder">
                        <p>Loading…</p>
                    </div>
                </div>
            `;let e=this.detailRows.filter(e=>{if(!this.searchQuery.trim())return!0;let t=this.searchQuery.toLowerCase();return e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)}),t=this.selectedPath?this.getValueAtPath(this.selectedPath):void 0,r=y.isRecord(t),i=this.selectedPath!==null&&!this.selectedPath.includes(`.`),a=r||i;return n`
            <div class="detail-panel">
                <div class="detail-heading-row">
                    <h2 class="detail-heading">${this.detailTitle}</h2>
                    ${a?n`
                        <docks-command size="small" icon="plus" title="Add setting" .action=${()=>this.addKeyToGroup(this.selectedPath)}>Add</docks-command>
                    `:``}
                    ${i?n`
                        <docks-command size="small" icon="trash" title="Delete category" .action=${()=>this.deleteTopLevelKey(this.selectedPath)}></docks-command>
                    `:``}
                </div>
                <wa-scroller class="detail-scroller" orientation="vertical">
                    ${e.length===0?n`
                        <div class="detail-empty">
                            ${this.detailRows.length===0?n`<p>No settings in this category. Add keys in the JSON file or register a JSON Schema for this path.</p>`:n`<p>No matching settings for the current search.</p>`}
                        </div>
                    `:s(e,e=>e.path,(t,r)=>{let i=r>0?e[r-1]:null,a=t.groupLabel&&i?.groupLabel!==t.groupLabel,o=!!t.groupLabel;return n`
                                    ${a?n`
                                        <div class="detail-group-header">
                                            <span>${t.groupLabel}</span>
                                            <docks-command size="small" icon="plus" title="Add setting" .action=${()=>this.addKeyToGroup(t.parentPath)}>Add</docks-command>
                                        </div>
                                    `:``}
                                    <div class="setting-row ${o?`setting-row-in-group`:``}">
                                        <div class="setting-meta">
                                            ${t.parentPath==null?n`<span class="setting-title">${t.title}</span>`:n`
                                                <wa-input
                                                    .value=${t.key}
                                                    size="small"
                                                    class="editable-key setting-control-key"
                                                    @blur=${e=>{let n=e.target.value.trim();n&&n!==t.key&&this.renameKey(t.parentPath,t.key,n)}}>
                                                </wa-input>
                                            `}
                                            ${t.description?n`<p class="setting-description">${t.description}</p>`:``}
                                        </div>
                                        <div class="setting-control">${this.renderDetailControl(t)}</div>
                                        ${t.parentPath==null?``:n`
                                            <docks-command size="small" icon="trash" title="Delete setting" .action=${()=>this.deleteKey(t.parentPath,t.key)}></docks-command>
                                        `}
                                    </div>
                                `})}
                </wa-scroller>
            </div>
        `}renderCategoryNode(e){let t=e.children.length>0,r=this.selectedPath===e.path;return n`
            <wa-tree-item ?expanded=${e.expanded}>
                <div
                    class="tree-node-content ${r?`selected`:``}"
                    @click=${()=>this.selectPath(e.path)}
                    role="button"
                    tabindex="0"
                    @keydown=${t=>t.key===`Enter`&&this.selectPath(e.path)}>
                    <span class="tree-node-label">${e.label}</span>
                </div>
                ${t?e.children.map(e=>this.renderCategoryNode(e)):``}
            </wa-tree-item>
        `}setAllExpanded(e){let t=this.treeRef.value;t&&t.querySelectorAll(`wa-tree-item`).forEach(t=>{t.expanded=e}),this.categoryTree=this.categoryTree.map(t=>this.setExpanded(t,e)),this.requestUpdate()}setExpanded(e,t){return{...e,expanded:t,children:e.children.map(e=>this.setExpanded(e,t))}}async addKey(){let e=await l(`Enter new top-level key name:`,``);e?.trim()&&(this.setAtInMemory(e.trim(),null),this.markDirty(!0),this.buildCategoryTree())}save(){v.setAll(this.settings).then(()=>{this.markDirty(!1)}).catch(e=>{console.error(`Failed to save settings:`,e)})}renderToolbar(){return n`
            <wa-input
                placeholder="Search settings"
                .value=${this.searchQuery}
                @input=${e=>{this.searchQuery=e.target.value,this.buildCategoryTree()}}
                size="small"
                class="toolbar-search">
            </wa-input>
            <docks-command size="small" icon="plus" title="Add Key" .action=${()=>this.addKey()}>Add Key</docks-command>
            <docks-command size="small" icon="chevron-down" title="Expand All" .action=${()=>this.setAllExpanded(!0)}>Expand All</docks-command>
            <docks-command size="small" icon="chevron-right" title="Collapse All" .action=${()=>this.setAllExpanded(!1)}>Collapse All</docks-command>
        `}renderContent(){return n`
            <div class="settings-editor-container">
                <wa-split-panel position="25" class="split-panel-fill">
                    <div slot="start" class="left-panel">
                        <wa-scroller class="tree-scroller" orientation="vertical">
                            ${this.categoryTree.length===0?n`
                                <div class="empty-state">
                                    ${f(`docks settings`,{label:`Settings`})}
                                    <p>No settings.</p>
                                </div>
                            `:n`
                                <wa-tree ${o(this.treeRef)}>
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
        `}static{this.styles=t`
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

        .setting-row command {
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
    `}};p([c({attribute:!1})],b.prototype,`input`,void 0),p([r()],b.prototype,`settings`,void 0),p([r()],b.prototype,`categoryTree`,void 0),p([r()],b.prototype,`selectedPath`,void 0),p([r()],b.prototype,`detailRows`,void 0),p([r()],b.prototype,`detailTitle`,void 0),p([r()],b.prototype,`searchQuery`,void 0),b=y=p([i(`docks-settings-tree`)],b);var x=e=>{g.registerEditorInputHandler({editorId:`system.settings-tree`,label:`Settings`,ranking:1e3,canHandle:e=>e.key===`.system.settings`,handle:async e=>(e.component=t=>n`
                <docks-settings-tree id="${t}" .input=${e}></docks-settings-tree>
            `,e)}),d.registerHandler(`open_settings`,{ranking:100,execute:()=>{g.loadEditor({title:`Settings`,data:{},key:`.system.settings`,icon:`docks settings`,state:{}})}}),u.registerContribution(_,{command:`open_settings`,icon:`docks settings`,label:`Settings`})};export{x as default};