import{d as L,F as T,n as S,s as f,t as p,L as q,B as O,c as R,y as v,v as y}from"./config-BnnWtrGw-B7Dvw4S0.js";import{b as l,i as C,n as g,c,d as k,h as A,e as z,a as U,u as _,p as P,f as M,t as I}from"./webawesome-C6zoK8ho.js";var Q=Object.defineProperty,B=Object.getOwnPropertyDescriptor,b=(e,t,n,a)=>{for(var i=a>1?void 0:a?B(t,n):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(a?s(t,n,i):s(i))||i);return a&&i&&Q(t,n,i),i};let d=class extends k{constructor(){super(...arguments),this.open=!1,this.db=null,this.databaseLabel="",this.extensions=[],this.loading=!1,this.updatingId=null,this.error=null,this.filterText=""}configure(e){this.db=e.db,this.databaseLabel=e.databaseLabel,this.extensions=[],this.error=null,this.refreshExtensions()}show(){!this.db||!this.db.listDbExtensions||(this.open=!0)}hide(){this.open=!1}async refreshExtensions(){if(!this.db||!this.db.listDbExtensions){this.extensions=[];return}this.loading=!0,this.error=null;try{const e=await f.runAsync("Loading database extensions",async()=>this.db.listDbExtensions());this.extensions=Array.isArray(e)?e:[]}catch(e){const t=e instanceof Error?e.message:String(e);this.error=t,p(t)}finally{this.loading=!1}}async enableExtension(e){if(!(!this.db||!this.db.enableDbExtension)){this.updatingId=e.id,this.error=null;try{await f.runAsync(`Enabling extension ${e.label||e.id}`,async()=>this.db.enableDbExtension(e.id)),await this.refreshExtensions()}catch(t){const n=t instanceof Error?t.message:String(t);this.error=n,p(n)}finally{this.updatingId=null}}}async disableExtension(e){if(!(!this.db||!this.db.disableDbExtension)){this.updatingId=e.id,this.error=null;try{await f.runAsync(`Disabling extension ${e.label||e.id}`,async()=>this.db.disableDbExtension(e.id)),await this.refreshExtensions()}catch(t){const n=t instanceof Error?t.message:String(t);this.error=n,p(n)}finally{this.updatingId=null}}}renderExtensionRow(e){const t=!!e.installed,n=t&&!!this.db?.disableDbExtension,a=this.updatingId===e.id;return l`
      <div class="extension-item">
        <div class="extension-main">
          <div class="extension-name">${e.label||e.id}</div>
          ${e.description?l`<div class="extension-desc">${e.description}</div>`:null}
        </div>
        <div class="extension-meta">
          <span
            class=${t?"badge badge-installed":"badge badge-available"}
          >
            ${t?"Installed":"Available"}
          </span>
          <div class="extension-actions">
            ${t?l`
                  <wa-button
                    size="small"
                    appearance="plain"
                    ?disabled=${!n||a}
                    @click=${()=>{this.disableExtension(e)}}
                  >
                    <wa-icon
                      name="circle-minus"
                      label="Disable"
                    ></wa-icon>
                  </wa-button>
                `:l`
                  <wa-button
                    size="small"
                    appearance="plain"
                    ?disabled=${a}
                    @click=${()=>{this.enableExtension(e)}}
                  >
                    <wa-icon
                      name="plug-circle-plus"
                      label="Enable"
                    ></wa-icon>
                  </wa-button>
                `}
          </div>
        </div>
      </div>
    `}render(){const e=!!(this.db&&this.db.listDbExtensions),t=this.filterText.trim().toLowerCase(),n=t?this.extensions.filter(i=>`${i.label??""} ${i.id} ${i.description??""}`.toLowerCase().includes(t)):this.extensions,a=n.length>0;return l`
      <wa-dialog
        label="Database extensions"
        ?open=${this.open}
        @wa-after-hide=${()=>{this.open=!1,this.dispatchEvent(new CustomEvent("hide",{bubbles:!0,composed:!0}))}}
      >
        <div class="extension-manager">
          <p class="extension-manager-description">
            Database:
            <strong>${this.databaseLabel||"Current connection"}</strong>
          </p>

          ${e?null:l`
                <wa-alert variant="warning" open>
                  <wa-icon slot="icon" name="triangle-exclamation"></wa-icon>
                  The current SQL engine does not expose any extension information.
                </wa-alert>
              `}

          ${this.error?l`
                <wa-alert
                  variant="danger"
                  open
                  closable
                  @wa-after-hide=${()=>{this.error=null}}
                >
                  <wa-icon slot="icon" name="circle-exclamation"></wa-icon>
                  ${this.error}
                </wa-alert>
              `:null}

          <wa-input
              size="small"
              placeholder="Filter extensions…"
              .value=${this.filterText}
              @input=${i=>{const o=i.target;this.filterText=o?.value??""}}
              @wa-clear=${()=>{this.filterText=""}}
              with-clear
            >
              <wa-icon slot="prefix" name="magnifying-glass"></wa-icon>
            </wa-input>

          <div class="extension-list">
            ${this.loading?l`<div class="extension-list-empty">Loading extensions…</div>`:a?A(n,i=>i.id,i=>this.renderExtensionRow(i)):l`
                      <div class="extension-list-empty">
                        No extensions available for this connection.
                      </div>
                    `}
          </div>
        </div>
        <div slot="footer" class="extension-manager-footer">
          <wa-button variant="default" @click=${()=>this.hide()}>
            Close
          </wa-button>
        </div>
      </wa-dialog>
    `}};d.styles=C`
    :host {
      display: contents;
    }

    .extension-manager {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      height: 420px;
      box-sizing: border-box;
    }

    .extension-toolbar {
      display: flex;
      justify-content: flex-end;
    }

    .extension-manager-description {
      margin: 0;
      font-size: 0.95rem;
      opacity: 0.9;
    }

    .extension-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
      min-height: 0;
      max-height: 100%;
      overflow-y: auto;
    }

    .extension-list-empty {
      font-size: 0.9rem;
      opacity: 0.8;
      padding: 0.5rem 0;
    }

    .extension-item {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--wa-color-neutral-200, #e5e7eb);
    }

    .extension-main {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      min-width: 0;
    }

    .extension-name {
      font-weight: 500;
      font-size: 0.95rem;
    }

    .extension-desc {
      font-size: 0.85rem;
      opacity: 0.8;
    }

    .extension-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.35rem;
    }

    .extension-actions {
      display: flex;
      gap: 0.25rem;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 0.15rem 0.4rem;
      border-radius: 999px;
      font-size: 0.75rem;
      border: 1px solid var(--wa-color-neutral-200, #e5e7eb);
    }

    .badge-installed {
      background-color: var(--wa-color-success-50, #ecfdf3);
    }

    .badge-available {
      background-color: var(--wa-color-neutral-50, #f9fafb);
    }

    .extension-manager-footer {
      display: flex;
      justify-content: flex-end;
      padding-top: 1rem;
      border-top: 1px solid var(--wa-color-neutral-200, #e5e7eb);
    }
  `;b([g({type:Boolean})],d.prototype,"open",2);b([g({attribute:!1})],d.prototype,"db",2);b([g()],d.prototype,"databaseLabel",2);b([c()],d.prototype,"extensions",2);b([c()],d.prototype,"loading",2);b([c()],d.prototype,"updatingId",2);b([c()],d.prototype,"error",2);b([c()],d.prototype,"filterText",2);d=b([I("lyra-sql-extension-manager")],d);class N{constructor(){this.managerInstance=null}showExtensionManager(t){return!t.db||!t.db.listDbExtensions?(p("The current SQL engine does not support extensions."),null):(this.managerInstance||(this.managerInstance=document.createElement("lyra-sql-extension-manager"),document.body.appendChild(this.managerInstance)),this.managerInstance.configure(t),this.managerInstance.show(),this.managerInstance)}getManager(){return this.managerInstance}}const E=new N;S.put("sqlExtensionManagerService",E);var j=Object.defineProperty,F=Object.getOwnPropertyDescriptor,u=(e,t,n,a)=>{for(var i=a>1?void 0:a?F(t,n):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(a?s(t,n,i):s(i))||i);return a&&i&&j(t,n,i),i};const x=28;function W(e){const t=e.replace(/\s+/g," ").trim();return t.length<=x?t:`${t.slice(0,x)}…`}let r=class extends q{constructor(){super(...arguments),this.readOnly=!1,this.initialContent=void 0,this.initialUri=void 0,this.running=!1,this.availableAdapters=[],this.selectedEngineId=null,this.availableConnections=[],this.selectedConnectionId=null,this.widgetRef=z(),this.databases=new Map,this._onContentChange=()=>{this.markDirty(!0)}}async doInitUI(){const e=this.input.data,t=await e.getContents();this.initialContent=t,this.initialUri=e.getWorkspacePath(),this.unsubscribeContributionsToken=U(O,n=>{n?.target==="system.sqladapters"&&this.refreshAdapters()}),await this.refreshAdapters(),this.requestUpdate()}async refreshAdapters(){const e=R.getContributions("system.sqladapters");if(this.availableAdapters=e,!e.length){this.selectedEngineId=null,this.availableConnections=[],this.selectedConnectionId=null,await this.updateComplete,this.updateToolbar();return}if(!this.selectedEngineId){const t=e.find(n=>n.id==="duckdb");this.selectedEngineId=(t??e[0]).id}this.requestUpdate(),await this.refreshConnections(),await this.updateComplete,this.updateToolbar()}async getOrLoadDatabase(e){const t=this.databases.get(e);if(t)return t;const n=this.availableAdapters.find(a=>a.id===e);if(!n)return null;try{const a=n.label||n.id,i=await f.runAsync(`Opening ${a} database`,async o=>(o.message=`Connecting to ${a}…`,n.loader()));return this.databases.set(e,i),i}catch(a){return p(a instanceof Error?a.message:String(a)),null}}async refreshConnections(){const e=this.selectedEngineId;if(!e){this.availableConnections=[],this.selectedConnectionId=null,await this.updateComplete,this.updateToolbar();return}const t=await this.getOrLoadDatabase(e);if(!t){this.availableConnections=[],this.selectedConnectionId=null,await this.updateComplete,this.updateToolbar();return}const n=await t.listConnections();this.availableConnections=n;const a=t.currentConnectionId;if(a!==null){this.selectedConnectionId=a,await this.updateComplete,this.updateToolbar();return}const i=n.find(o=>o.isDefault)??n[0];this.selectedConnectionId=i?i.id:null,i&&await t.selectConnection(i.id??null),await this.updateComplete,this.updateToolbar()}async onEngineChange(e){const n=e.target?.value??"";this.selectedEngineId!==n&&(this.selectedEngineId=n||null,await this.refreshConnections(),this.requestUpdate(),this.updateToolbar())}async onConnectionChange(e){const n=e.target?.value??"",a=n===""?null:n;if(this.selectedConnectionId===a)return;this.selectedConnectionId=a;const i=this.selectedEngineId;if(!i)return;const o=await this.getOrLoadDatabase(i);o&&(await o.selectConnection(a),this.requestUpdate(),this.updateToolbar())}async onEngineDropdownSelect(e){const t=e.detail?.item?.value??"";this.selectedEngineId!==t&&(this.selectedEngineId=t||null,await this.refreshConnections(),this.requestUpdate(),this.updateToolbar())}async onConnectionDropdownSelect(e){const t=e.detail?.item?.value??"",n=t===""?null:t;if(this.selectedConnectionId===n)return;this.selectedConnectionId=n;const a=this.selectedEngineId;if(!a)return;const i=await this.getOrLoadDatabase(a);i&&(await i.selectConnection(n),this.requestUpdate(),this.updateToolbar())}async deleteConnectionById(e,t){e.stopPropagation(),e.preventDefault();const n=this.selectedEngineId;if(!n)return;const a=await this.getOrLoadDatabase(n);if(!a||!a.deleteConnection)return;const i=this.availableConnections.find(s=>s.id===t)?.label??(t===null?"In-memory":t??"Current connection");await v(`Delete connection "${i}"?`)&&(t!==null?await a.deleteConnection(t):await a.selectConnection(null),await this.refreshConnections(),this.requestUpdate(),this.updateToolbar())}save(){const e=this.widgetRef.value?.getContent()??"";this.input?.data.saveContents(e),this.markDirty(!1)}async doClose(){this.unsubscribeContributionsToken&&(_(this.unsubscribeContributionsToken),this.unsubscribeContributionsToken=void 0),this.widgetRef.value?.dispose();for(const e of this.databases.values())await e.close();this.databases.clear()}getLanguage(){return"sql"}isLanguage(e){return e.toLowerCase()==="sql"}getContent(){return this.widgetRef.value?.getContent()??null}getSelection(){return this.widgetRef.value?.getSelection()??null}getSnippet(e=5){return this.widgetRef.value?.getSnippet(e)??null}getFilePath(){return this.input?.data?.getWorkspacePath()??null}async runQuery(e=!1){const t=this.getSelection()?.trim(),n=this.getContent()?.trim(),a=e?t:n;if(!a){p(e?"No selection to run":"No SQL to run");return}if(this.running)return;const i=this.selectedEngineId;if(!i){p("No SQL engine available");return}const o=await this.getOrLoadDatabase(i);if(!o){p("Could not initialize SQL engine");return}if(!this.selectedConnectionId&&this.availableConnections.length){const h=this.availableConnections.find(w=>w.isDefault)??this.availableConnections[0];this.selectedConnectionId=h.id,await o.selectConnection(h.id??null)}this.running=!0;const s=W(a);this.requestUpdate(),this.updateToolbar();const $=window.setTimeout(()=>this.clearRunningState(),6e4);try{const h=await o.runQuery(a),w=this.availableAdapters.find(D=>D.id===i);P("dataview/publish",{title:s,data:{columns:h.columns,rows:h.rows},source:w?.label??i})}catch(h){p(h instanceof Error?h.message:String(h))}finally{window.clearTimeout($),this.running=!1,this.requestUpdate(),this.updateToolbar()}}clearRunningState(){this.running&&(this.running=!1,this.requestUpdate(),this.updateToolbar())}async createConnection(){const e=this.selectedEngineId;if(!e)return;const t=await this.getOrLoadDatabase(e);if(!t||!t.createConnection)return;const n=await t.createConnection();n&&(await this.refreshConnections(),this.selectedConnectionId=n.id,await t.selectConnection(n.id??null),y(`Connection "${n.label}" created`),this.requestUpdate(),this.updateToolbar())}async deleteConnection(){const e=this.selectedEngineId;if(!e)return;const t=await this.getOrLoadDatabase(e);if(!t||!t.deleteConnection)return;const n=this.selectedConnectionId,a=this.availableConnections.find(o=>o.id===n)?.label??(n===null?"In-memory":n??"Current connection");await v(`Delete connection "${a}"?`)&&(n!==null?await t.deleteConnection(n):await t.selectConnection(null),await this.refreshConnections(),this.requestUpdate(),this.updateToolbar())}getCurrentConnectionLabel(){const e=this.selectedConnectionId;return e===null?"In-memory":e?this.availableConnections.find(n=>n.id===e)?.label??e:null}async openExtensionManager(){const e=this.selectedEngineId;if(!e)return;const t=await this.getOrLoadDatabase(e);if(!t||!t.listDbExtensions){y("Extensions are not available for the selected SQL engine.");return}const a=(this.availableAdapters.find(s=>s.id===e)??null)?.label??e,i=this.getCurrentConnectionLabel(),o=i?`${a} – ${i}`:a;E.showExtensionManager({db:t,databaseLabel:o})}renderToolbar(){const e=this.availableAdapters,t=e.length>0,n=this.availableConnections.length>0,a=this.selectedEngineId,o=!!(a?this.databases.get(a):null)?.listDbExtensions;return l`
      <wa-dropdown
        class="engine-select"
        placement="bottom-start"
        distance="4"
        size="small"
        @wa-select=${s=>{this.onEngineDropdownSelect(s)}}
      >
        <wa-button
          slot="trigger"
          appearance="plain"
          size="small"
          with-caret
          title="SQL engine"
        >
          ${this.selectedEngineId?e.find(s=>s.id===this.selectedEngineId)?.label??this.selectedEngineId:"Select engine"}
        </wa-button>
        ${e.map(s=>l`
            <wa-dropdown-item
              value=${s.id}
              type="checkbox"
              ?checked=${s.id===this.selectedEngineId}
            >
              ${s.label}
            </wa-dropdown-item>
          `)}
      </wa-dropdown>
      <wa-dropdown
        class="connection-select"
        placement="bottom-start"
        distance="4"
        size="small"
        @wa-select=${s=>{this.onConnectionDropdownSelect(s)}}
      >
        <wa-button
          slot="trigger"
          appearance="plain"
          size="small"
          with-caret
          title="Connection"
          ?disabled=${!t||!n}
        >
          ${this.selectedConnectionId===null?"In-memory":this.availableConnections.find(s=>s.id===this.selectedConnectionId)?.label??"Select connection"}
        </wa-button>
        ${this.availableConnections.map(s=>l`
            <wa-dropdown-item
              value=${s.id??""}
              type="checkbox"
              ?checked=${s.id===this.selectedConnectionId}
            >
              ${s.label}
              <wa-button
                slot="details"
                appearance="plain"
                size="small"
                title=${s.id===null?"Reset in-memory connection":"Delete connection"}
                @click=${m=>this.deleteConnectionById(m,s.id)}
              >
                <wa-icon
                  name=${s.id===null?"rotate-right":"trash"}
                  label=${s.id===null?"Reset":"Delete"}
                ></wa-icon>
              </wa-button>
            </wa-dropdown-item>
          `)}
      </wa-dropdown>
      <wa-button
        size="small"
        appearance="plain"
        title="New connection"
        @click=${()=>{this.createConnection()}}
      >
        <wa-icon name="plus" label="New"></wa-icon>
      </wa-button>
      ${o?l`
            <wa-button
              size="small"
              appearance="plain"
              title="Manage extensions"
              ?disabled=${!t||!n}
              @click=${()=>{this.openExtensionManager()}}
            >
              <wa-icon name="puzzle-piece" label="Extensions"></wa-icon>
              Extensions
            </wa-button>
          `:null}
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${this.running}
        @click=${()=>{this.runQuery(!0)}}
        title="Run selection only"
      >
        <wa-icon name="i-cursor" label="Run selection"></wa-icon>
        ${this.running?"Running…":"Run selection"}
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${this.running}
        @click=${()=>{this.runQuery(!1)}}
        title="Run all SQL"
      >
        <wa-icon name="play" label="Run"></wa-icon>
        ${this.running?"Running…":"Run all"}
      </wa-button>
    `}render(){return this.initialContent===void 0?l`<div class="editor-placeholder"></div>`:l`
      <div class="editor-area">
        <lyra-monaco-widget
          .value=${this.initialContent}
          .uri=${this.initialUri}
          .language=${"sql"}
          .readOnly=${this.readOnly}
          @content-change=${this._onContentChange}
          ${M(this.widgetRef)}
        ></lyra-monaco-widget>
      </div>
    `}};r.styles=C`
    :host {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      height: 100%;
    }
    .engine-select {
      max-width: 10rem;
    }
    .connection-select {
      max-width: 12rem;
    }
    .editor-area {
      flex: 1;
      min-height: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .editor-area lyra-monaco-widget,
    .editor-area monaco-widget {
      flex: 1;
      min-height: 0;
    }
    .editor-placeholder {
      flex: 1;
      min-height: 0;
    }
  `;u([g({attribute:!1})],r.prototype,"input",2);u([g({type:Boolean})],r.prototype,"readOnly",2);u([c()],r.prototype,"initialContent",2);u([c()],r.prototype,"initialUri",2);u([c()],r.prototype,"running",2);u([c()],r.prototype,"availableAdapters",2);u([c()],r.prototype,"selectedEngineId",2);u([c()],r.prototype,"availableConnections",2);u([c()],r.prototype,"selectedConnectionId",2);r=u([I("lyra-sql-editor")],r);function X(){L.registerEditorInputHandler({editorId:"system.sqleditor",label:"SQL Editor",icon:"database",canHandle:e=>e instanceof T&&e.getName().toLowerCase().endsWith(".sql"),ranking:900,handle:async e=>{const t={title:e.getWorkspacePath(),data:e,key:e.getWorkspacePath(),icon:"database",noOverflow:!1,state:{},component:()=>null};return t.component=()=>l`<lyra-sql-editor .input=${t}></lyra-sql-editor>`,t}})}export{X as default};
