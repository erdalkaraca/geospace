import{x as l,e as f,c as g,a as m,n as v,r as d,t as w}from"./index-B-or_cqe.js";import{i as u,x,K as $,v as E,E as P,m as y,H as b,I as k}from"./main-DquB_0Uw.js";var A=Object.defineProperty,K=Object.getOwnPropertyDescriptor,p=(t,i,e,r)=>{for(var s=r>1?void 0:r?K(i,e):i,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=(r?n(i,e,s):n(s))||s);return r&&s&&A(i,e,s),s};let c=class extends ${constructor(){super(...arguments),this.settings={},this.treeNodes=[],this.editingPath=null,this.editKey="",this.editValue="",this.treeRef=f()}async doInitUI(){await this.loadSettings(),E(P,()=>{this.loadSettings()})}async loadSettings(){this.settings=await y.getAll()||{},this.buildTree()}buildTree(){this.treeNodes=this.objectToTreeNodes(this.settings,"")}objectToTreeNodes(t,i){if(t==null)return[];const e=i==="";return Array.isArray(t)?t.map((r,s)=>{const a=i?`${i}[${s}]`:`[${s}]`,n=this.getType(r);return{key:String(s),value:r,path:a,type:n,expanded:e}}):typeof t=="object"?Object.entries(t).map(([r,s])=>{const n=i.endsWith("]")?`${i}.${r}`:i?`${i}.${r}`:r,o=this.getType(s);return{key:r,value:s,path:n,type:o,expanded:e}}):[]}getType(t){return Array.isArray(t)?"array":t!==null&&typeof t=="object"?"object":"primitive"}startEditKey(t,i){i.stopPropagation(),this.editingPath=t.path,this.editKey=t.key,this.editValue=""}startEditValue(t,i){i.stopPropagation(),this.editingPath=t.path,this.editKey="",this.editValue=this.formatValue(t.value)}formatValue(t){return t===null?"null":t===void 0?"":typeof t=="string"?t:typeof t=="number"||typeof t=="boolean"?String(t):JSON.stringify(t)}formatPreview(t,i=50){if(Array.isArray(t)){const e=t.length;if(e===0)return"Array []";const r=t.slice(0,3).map((a,n)=>a===null?"null":typeof a=="string"?`"${a}"`:typeof a=="object"?"Object":String(a)).join(", "),s=e>3?` … +${e-3} more`:"";return`Array [${e}] { ${r}${s} }`}if(t!==null&&typeof t=="object"){const e=Object.keys(t);if(e.length===0)return"Object {}";const r=e.slice(0,3).map(a=>{const n=t[a];let o="";return n===null?o="null":typeof n=="string"?o=`"${n}"`:typeof n=="object"?o=Array.isArray(n)?"Array":"Object":o=String(n),`${a}: ${o}`}).join(", "),s=e.length>3?` … +${e.length-3} more`:"";return`Object { ${r}${s} }`}return String(t)}parseValue(t,i){if(t.trim()==="null")return null;if(t==="")return i===null?null:i;if(typeof i=="string")return t;if(typeof i=="number"){const e=Number(t);return isNaN(e)?i:e}if(typeof i=="boolean"){const e=t.toLowerCase();return e==="true"?!0:e==="false"?!1:i}if(i===null)try{return JSON.parse(t)}catch{return t}try{return JSON.parse(t)}catch{return i}}cancelEdit(){this.editingPath=null,this.editKey="",this.editValue=""}async saveEditKey(){if(!this.editingPath||!this.editKey){this.cancelEdit();return}const t=this.findNodeByPath(this.editingPath);if(!t||this.editKey===t.key){this.cancelEdit();return}const i=this.parsePath(this.editingPath),e=this.traversePath(i,!0);if(!e||typeof e.lastPart=="number"){this.cancelEdit();return}const{parent:r,lastPart:s}=e;if(r[s]!==void 0){const a=r[s];delete r[s],r[this.editKey]=a,this.markDirty(!0),this.buildTree()}this.cancelEdit()}async saveEditValue(){if(!this.editingPath){this.cancelEdit();return}const t=this.findNodeByPath(this.editingPath);if(!t){this.cancelEdit();return}const i=this.parseValue(this.editValue,t.value);await this.updateValue(this.editingPath,i),this.cancelEdit()}async updateValue(t,i){const e=this.parsePath(t),r=this.traversePath(e,!0);if(!r)throw new Error(`Invalid path: ${t}`);const{parent:s,lastPart:a}=r;if(typeof a=="number"){if(!Array.isArray(s))throw new Error(`Invalid array access at path: ${t}`);s[a]=i}else s[a]=i;this.markDirty(!0),this.buildTree()}traversePath(t,i=!1){if(t.length===0)return null;let e=this.settings;const r=t.length-1;for(let s=0;s<r;s++){const a=t[s];if(typeof a=="number"){if(!Array.isArray(e)||e[a]===void 0)if(i)e[a]=[];else return null;e=e[a]}else{if(e[a]===void 0)if(i)e[a]={};else return null;e=e[a]}}return{parent:e,lastPart:t[r]}}parsePath(t){const i=[];let e="";for(let r=0;r<t.length;r++){const s=t[r];if(s==="["){e&&(i.push(e),e="");let a="";for(r++;r<t.length&&t[r]!=="]";)a+=t[r],r++;const n=parseInt(a);isNaN(n)||i.push(n)}else s==="."?e&&(i.push(e),e=""):e+=s}return e&&i.push(e),i}async addKey(t,i){if(i.stopPropagation(),t&&t.type==="array"){const e=this.parsePath(t.path),r=this.traversePath(e,!1);r&&Array.isArray(r.parent)&&r.parent.push(null)}else{const e=await b("Enter new key name:","");if(!e||e.trim()==="")return;if(t){const r=this.parsePath(t.path),s=this.traversePath(r,!0);s&&(s.parent[e]=null)}else this.settings[e]=null}this.markDirty(!0),this.buildTree()}async deleteKey(t,i){if(i.stopPropagation(),!await k(`Delete "${t.key}"?`))return;const e=this.parsePath(t.path),r=this.traversePath(e,!1);if(!r)return;const{parent:s,lastPart:a}=r;typeof a=="number"?Array.isArray(s)&&s.splice(a,1):delete s[a],this.markDirty(!0),this.buildTree()}async save(){try{await y.setAll(this.settings),this.markDirty(!1)}catch(t){throw console.error("Failed to save settings:",t),t}}findNodeByPath(t,i=this.treeNodes){for(const e of i){if(e.path===t)return e;if(e.type==="object"||e.type==="array"){const r=this.objectToTreeNodes(e.value,e.path),s=this.findNodeByPath(t,r);if(s)return s}}return null}expandAll(){const t=this.treeRef.value;t&&t.querySelectorAll("wa-tree-item").forEach(e=>{e.expanded=!0});for(const i of this.treeNodes)this.setExpandedRecursive(i,!0);this.requestUpdate()}collapseAll(){const t=this.treeRef.value;t&&t.querySelectorAll("wa-tree-item").forEach(e=>{e.expanded=!1});for(const i of this.treeNodes)this.setExpandedRecursive(i,!1);this.requestUpdate()}setExpandedRecursive(t,i){if(t.expanded=i,t.type==="object"||t.type==="array"){const e=this.objectToTreeNodes(t.value,t.path);for(const r of e)this.setExpandedRecursive(r,i)}}renderTreeNode(t){const i=this.editingPath===t.path,e=(t.type==="object"||t.type==="array")&&(Array.isArray(t.value)?t.value.length>0:t.value!==null&&typeof t.value=="object"&&Object.keys(t.value).length>0),r=e?this.objectToTreeNodes(t.value,t.path):[],s=t.expanded??!1,a=()=>{if(t.type==="primitive"){if(i&&!this.editKey)return l`
                        <wa-input
                            .value=${this.editValue}
                            @input=${h=>this.editValue=h.target.value}
                            @keydown=${h=>{h.key==="Enter"?(h.preventDefault(),this.saveEditValue()):h.key==="Escape"&&(h.preventDefault(),this.cancelEdit())}}
                            @blur=${()=>this.saveEditValue()}
                            size="small"
                            style="width: 200px;"
                        ></wa-input>
                    `;const o=this.formatValue(t.value);return l`
                    <span class="value" @dblclick=${h=>this.startEditValue(t,h)}>
                        ${o}
                    </span>
                `}const n=this.formatPreview(t.value);return l`
                <span class="preview">${n}</span>
            `};return l`
            <wa-tree-item ?expanded=${s}>
                <div class="node-content">
                    ${i&&this.editKey?l`
                        <wa-input
                            .value=${this.editKey}
                            @input=${n=>this.editKey=n.target.value}
                            @keydown=${n=>{n.key==="Enter"?(n.preventDefault(),this.saveEditKey()):n.key==="Escape"&&(n.preventDefault(),this.cancelEdit())}}
                            @blur=${()=>this.saveEditKey()}
                            size="small"
                            style="width: 150px; margin-right: 8px;"
                        ></wa-input>
                    `:l`
                        <span 
                            class="key" 
                            @dblclick=${n=>this.startEditKey(t,n)}
                        >
                            ${t.key}
                        </span>
                    `}
                    
                    <span class="separator">:</span>
                    
                    ${a()}
                    
                    <div class="node-actions">
                        ${t.type==="primitive"?l`
                            <k-action
                                size="small"
                                variant="neutral"
                                appearance="plain"
                                icon="pencil"
                                title="Edit value"
                                .action=${n=>this.startEditValue(t,n)}>
                            </k-action>
                        `:""}
                        <k-action
                            size="small"
                            variant="neutral"
                            appearance="plain"
                            icon="plus"
                            title="Add key"
                            .action=${n=>this.addKey(t,n)}>
                        </k-action>
                        <k-action
                            size="small"
                            variant="neutral"
                            appearance="plain"
                            icon="trash"
                            title="Delete key"
                            .action=${n=>this.deleteKey(t,n)}>
                        </k-action>
                    </div>
                </div>
                
                ${e?r.map(n=>this.renderTreeNode(n)):""}
            </wa-tree-item>
        `}renderToolbar(){return l`
            <k-action 
                size="small" 
                icon="plus"
                title="Add Key"
                .action=${()=>this.addKey(null,new Event("click"))}>
                Add Key
            </k-action>
            <k-action 
                size="small" 
                icon="chevron-down"
                title="Expand All"
                .action=${()=>this.expandAll()}>
                Expand All
            </k-action>
            <k-action 
                size="small" 
                icon="chevron-right"
                title="Collapse All"
                .action=${()=>this.collapseAll()}>
                Collapse All
            </k-action>
        `}render(){return l`
            <div class="settings-tree-container">
                <div class="tree-container">
                    ${this.treeNodes.length===0?l`
                        <div class="empty-state">
                            <wa-icon name="gear" style="font-size: 48px; opacity: 0.3;"></wa-icon>
                            <p>No settings found. Click "Add Key" to create a new setting.</p>
                        </div>
                    `:l`
                        <wa-tree ${g(this.treeRef)} style="--indent-guide-width: 1px;">
                            ${this.treeNodes.map(t=>this.renderTreeNode(t))}
                        </wa-tree>
                    `}
                </div>
            </div>
        `}};c.styles=m`
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
    `;p([v({attribute:!1})],c.prototype,"input",2);p([d()],c.prototype,"settings",2);p([d()],c.prototype,"treeNodes",2);p([d()],c.prototype,"editingPath",2);p([d()],c.prototype,"editKey",2);p([d()],c.prototype,"editValue",2);c=p([w("k-settings-tree")],c);const j=t=>{u.registerEditorInputHandler({ranking:1e3,canHandle:i=>i.key===".system.settings",handle:async i=>(i.editorId="settings-tree",i.widgetFactory=()=>l`
                <k-settings-tree .input=${i}></k-settings-tree>
            `,i)}),x.registerHandler("open_settings",{ranking:100,execute:i=>{const e={title:"Settings",data:{},key:".system.settings",icon:"gear",state:{}};u.loadEditor(e).then()}})};export{c as KSettingsTree,j as default};
