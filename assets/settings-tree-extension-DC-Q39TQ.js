import{x as l,e as f,d as m,b as g,n as v,r as p,t as w}from"./index-DoDY4M9O.js";import{v as u,p as x,k as $,s as E,B as b,C as y,E as P,H as k}from"./main-CEvzTj27.js";var A=Object.defineProperty,K=Object.getOwnPropertyDescriptor,h=(t,r,e,i)=>{for(var s=i>1?void 0:i?K(r,e):r,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=(i?n(r,e,s):n(s))||s);return i&&s&&A(r,e,s),s};let c=class extends ${constructor(){super(...arguments),this.settings={},this.treeNodes=[],this.editingPath=null,this.editKey="",this.editValue="",this.treeRef=f()}async doInitUI(){await this.loadSettings(),E(b,()=>{this.loadSettings()})}async loadSettings(){this.settings=await y.getAll()||{},this.buildTree()}buildTree(){this.treeNodes=this.objectToTreeNodes(this.settings,"")}objectToTreeNodes(t,r){if(t==null)return[];const e=r==="";return Array.isArray(t)?t.map((i,s)=>{const a=r?`${r}[${s}]`:`[${s}]`,n=this.getType(i);return{key:String(s),value:i,path:a,type:n,expanded:e}}):typeof t=="object"?Object.entries(t).map(([i,s])=>{const n=r.endsWith("]")?`${r}.${i}`:r?`${r}.${i}`:i,o=this.getType(s);return{key:i,value:s,path:n,type:o,expanded:e}}):[]}getType(t){return Array.isArray(t)?"array":t!==null&&typeof t=="object"?"object":"primitive"}startEditKey(t,r){r.stopPropagation(),this.editingPath=t.path,this.editKey=t.key,this.editValue=""}startEditValue(t,r){r.stopPropagation(),this.editingPath=t.path,this.editKey="",this.editValue=this.formatValue(t.value)}formatValue(t){return t===null?"null":t===void 0?"":typeof t=="string"?t:typeof t=="number"||typeof t=="boolean"?String(t):JSON.stringify(t)}formatPreview(t,r=50){if(Array.isArray(t)){const e=t.length;if(e===0)return"Array []";const i=t.slice(0,3).map((a,n)=>a===null?"null":typeof a=="string"?`"${a}"`:typeof a=="object"?"Object":String(a)).join(", "),s=e>3?` … +${e-3} more`:"";return`Array [${e}] { ${i}${s} }`}if(t!==null&&typeof t=="object"){const e=Object.keys(t);if(e.length===0)return"Object {}";const i=e.slice(0,3).map(a=>{const n=t[a];let o="";return n===null?o="null":typeof n=="string"?o=`"${n}"`:typeof n=="object"?o=Array.isArray(n)?"Array":"Object":o=String(n),`${a}: ${o}`}).join(", "),s=e.length>3?` … +${e.length-3} more`:"";return`Object { ${i}${s} }`}return String(t)}parseValue(t,r){if(t.trim()==="null")return null;if(t==="")return r===null?null:r;if(typeof r=="string")return t;if(typeof r=="number"){const e=Number(t);return isNaN(e)?r:e}if(typeof r=="boolean"){const e=t.toLowerCase();return e==="true"?!0:e==="false"?!1:r}if(r===null)try{return JSON.parse(t)}catch{return t}try{return JSON.parse(t)}catch{return r}}cancelEdit(){this.editingPath=null,this.editKey="",this.editValue=""}async saveEditKey(){if(!this.editingPath||!this.editKey){this.cancelEdit();return}const t=this.findNodeByPath(this.editingPath);if(!t||this.editKey===t.key){this.cancelEdit();return}const r=this.parsePath(this.editingPath),e=this.traversePath(r,!0);if(!e||typeof e.lastPart=="number"){this.cancelEdit();return}const{parent:i,lastPart:s}=e;if(i[s]!==void 0){const a=i[s];delete i[s],i[this.editKey]=a,this.markDirty(!0),this.buildTree()}this.cancelEdit()}async saveEditValue(){if(!this.editingPath){this.cancelEdit();return}const t=this.findNodeByPath(this.editingPath);if(!t){this.cancelEdit();return}const r=this.parseValue(this.editValue,t.value);await this.updateValue(this.editingPath,r),this.cancelEdit()}async updateValue(t,r){const e=this.parsePath(t),i=this.traversePath(e,!0);if(!i)throw new Error(`Invalid path: ${t}`);const{parent:s,lastPart:a}=i;if(typeof a=="number"){if(!Array.isArray(s))throw new Error(`Invalid array access at path: ${t}`);s[a]=r}else s[a]=r;this.markDirty(!0),this.buildTree()}traversePath(t,r=!1){if(t.length===0)return null;let e=this.settings;const i=t.length-1;for(let s=0;s<i;s++){const a=t[s];if(typeof a=="number"){if(!Array.isArray(e)||e[a]===void 0)if(r)e[a]=[];else return null;e=e[a]}else{if(e[a]===void 0)if(r)e[a]={};else return null;e=e[a]}}return{parent:e,lastPart:t[i]}}parsePath(t){const r=[];let e="";for(let i=0;i<t.length;i++){const s=t[i];if(s==="["){e&&(r.push(e),e="");let a="";for(i++;i<t.length&&t[i]!=="]";)a+=t[i],i++;const n=parseInt(a);isNaN(n)||r.push(n)}else s==="."?e&&(r.push(e),e=""):e+=s}return e&&r.push(e),r}async addKey(t,r){if(r.stopPropagation(),t&&t.type==="array"){const e=this.parsePath(t.path),i=this.traversePath(e,!1);i&&Array.isArray(i.parent)&&i.parent.push(null)}else{const e=await P("Enter new key name:","");if(!e||e.trim()==="")return;if(t){const i=this.parsePath(t.path),s=this.traversePath(i,!0);s&&(s.parent[e]=null)}else this.settings[e]=null}this.markDirty(!0),this.buildTree()}async deleteKey(t,r){if(r.stopPropagation(),!await k(`Delete "${t.key}"?`))return;const e=this.parsePath(t.path),i=this.traversePath(e,!1);if(!i)return;const{parent:s,lastPart:a}=i;typeof a=="number"?Array.isArray(s)&&s.splice(a,1):delete s[a],this.markDirty(!0),this.buildTree()}async save(){try{await y.setAll(this.settings),this.markDirty(!1)}catch(t){throw console.error("Failed to save settings:",t),t}}findNodeByPath(t,r=this.treeNodes){for(const e of r){if(e.path===t)return e;if(e.type==="object"||e.type==="array"){const i=this.objectToTreeNodes(e.value,e.path),s=this.findNodeByPath(t,i);if(s)return s}}return null}expandAll(){const t=this.treeRef.value;t&&t.querySelectorAll("wa-tree-item").forEach(e=>{e.expanded=!0});for(const r of this.treeNodes)this.setExpandedRecursive(r,!0);this.requestUpdate()}collapseAll(){const t=this.treeRef.value;t&&t.querySelectorAll("wa-tree-item").forEach(e=>{e.expanded=!1});for(const r of this.treeNodes)this.setExpandedRecursive(r,!1);this.requestUpdate()}setExpandedRecursive(t,r){if(t.expanded=r,t.type==="object"||t.type==="array"){const e=this.objectToTreeNodes(t.value,t.path);for(const i of e)this.setExpandedRecursive(i,r)}}renderTreeNode(t){const r=this.editingPath===t.path,e=(t.type==="object"||t.type==="array")&&(Array.isArray(t.value)?t.value.length>0:t.value!==null&&typeof t.value=="object"&&Object.keys(t.value).length>0),i=e?this.objectToTreeNodes(t.value,t.path):[],s=t.expanded??!1,a=()=>{if(t.type==="primitive"){if(r&&!this.editKey)return l`
                        <wa-input
                            .value=${this.editValue}
                            @input=${d=>this.editValue=d.target.value}
                            @keydown=${d=>{d.key==="Enter"?(d.preventDefault(),this.saveEditValue()):d.key==="Escape"&&(d.preventDefault(),this.cancelEdit())}}
                            @blur=${()=>this.saveEditValue()}
                            size="small"
                            style="width: 200px;"
                        ></wa-input>
                    `;const o=this.formatValue(t.value);return l`
                    <span class="value" @dblclick=${d=>this.startEditValue(t,d)}>
                        ${o}
                    </span>
                `}const n=this.formatPreview(t.value);return l`
                <span class="preview">${n}</span>
            `};return l`
            <wa-tree-item ?expanded=${s}>
                <div class="node-content">
                    ${r&&this.editKey?l`
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
                            <k-command
                                size="small"
                                variant="neutral"
                                appearance="plain"
                                icon="pencil"
                                title="Edit value"
                                .action=${n=>this.startEditValue(t,n)}>
                            </k-command>
                        `:""}
                        <k-command
                            size="small"
                            variant="neutral"
                            appearance="plain"
                            icon="plus"
                            title="Add key"
                            .action=${n=>this.addKey(t,n)}>
                        </k-command>
                        <k-command
                            size="small"
                            variant="neutral"
                            appearance="plain"
                            icon="trash"
                            title="Delete key"
                            .action=${n=>this.deleteKey(t,n)}>
                        </k-command>
                    </div>
                </div>
                
                ${e?i.map(n=>this.renderTreeNode(n)):""}
            </wa-tree-item>
        `}renderToolbar(){return l`
            <k-command 
                size="small" 
                icon="plus"
                title="Add Key"
                .action=${()=>this.addKey(null,new Event("click"))}>
                Add Key
            </k-command>
            <k-command 
                size="small" 
                icon="chevron-down"
                title="Expand All"
                .action=${()=>this.expandAll()}>
                Expand All
            </k-command>
            <k-command 
                size="small" 
                icon="chevron-right"
                title="Collapse All"
                .action=${()=>this.collapseAll()}>
                Collapse All
            </k-command>
        `}render(){return l`
            <div class="settings-tree-container">
                <div class="tree-container">
                    ${this.treeNodes.length===0?l`
                        <div class="empty-state">
                            <wa-icon name="gear" style="font-size: 48px; opacity: 0.3;"></wa-icon>
                            <p>No settings found. Click "Add Key" to create a new setting.</p>
                        </div>
                    `:l`
                        <wa-tree ${m(this.treeRef)} style="--indent-guide-width: 1px;">
                            ${this.treeNodes.map(t=>this.renderTreeNode(t))}
                        </wa-tree>
                    `}
                </div>
            </div>
        `}};c.styles=g`
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
    `;h([v({attribute:!1})],c.prototype,"input",2);h([p()],c.prototype,"settings",2);h([p()],c.prototype,"treeNodes",2);h([p()],c.prototype,"editingPath",2);h([p()],c.prototype,"editKey",2);h([p()],c.prototype,"editValue",2);c=h([w("k-settings-tree")],c);const j=t=>{u.registerEditorInputHandler({ranking:1e3,canHandle:r=>r.key===".system.settings",handle:async r=>(r.editorId="settings-tree",r.widgetFactory=()=>l`
                <k-settings-tree .input=${r}></k-settings-tree>
            `,r)}),x.registerHandler("open_settings",{ranking:100,execute:r=>{const e={title:"Settings",data:{},key:".system.settings",icon:"gear",state:{}};u.loadEditor(e).then()}})};export{c as KSettingsTree,j as default};
