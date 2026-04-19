import{m as e,n as t}from"./fs-access-D-fDaJ8V-4fi1R5VX.js";import{n,r,t as i}from"./events-B_ZxkU_G-T3WMQWFe.js";import{L as a,Q as o,U as s,_ as c,b as l,n as u,r as d,t as f,u as p,v as m}from"./repeat-jF3QiNU_.js";import{A as h,F as g,R as _,T as v,a as y,n as b,w as x,y as S,z as C}from"./dist-Bs3vRgSi.js";import"./lit-CjwmRm-7.js";var w=class extends a{constructor(...e){super(...e),this.open=!1,this.db=null,this.databaseLabel=``,this.extensions=[],this.loading=!1,this.updatingId=null,this.error=null,this.filterText=``}configure(e){this.db=e.db,this.databaseLabel=e.databaseLabel,this.extensions=[],this.error=null,this.refreshExtensions()}show(){!this.db||!this.db.listDbExtensions||(this.open=!0)}hide(){this.open=!1}async refreshExtensions(){if(!this.db||!this.db.listDbExtensions){this.extensions=[];return}this.loading=!0,this.error=null;try{let e=await x.runAsync(`Loading database extensions`,async()=>this.db.listDbExtensions());this.extensions=Array.isArray(e)?e:[]}catch(e){let t=e instanceof Error?e.message:String(e);this.error=t,_(t)}finally{this.loading=!1}}async enableExtension(e){if(!(!this.db||!this.db.enableDbExtension)){this.updatingId=e.id,this.error=null;try{await x.runAsync(`Enabling extension ${e.label||e.id}`,async()=>this.db.enableDbExtension(e.id)),await this.refreshExtensions()}catch(e){let t=e instanceof Error?e.message:String(e);this.error=t,_(t)}finally{this.updatingId=null}}}async disableExtension(e){if(!(!this.db||!this.db.disableDbExtension)){this.updatingId=e.id,this.error=null;try{await x.runAsync(`Disabling extension ${e.label||e.id}`,async()=>this.db.disableDbExtension(e.id)),await this.refreshExtensions()}catch(e){let t=e instanceof Error?e.message:String(e);this.error=t,_(t)}finally{this.updatingId=null}}}renderExtensionRow(e){let t=!!e.installed,n=t&&!!this.db?.disableDbExtension,r=this.updatingId===e.id;return s`
      <div class="extension-item">
        <div class="extension-main">
          <div class="extension-name">${e.label||e.id}</div>
          ${e.description?s`<div class="extension-desc">${e.description}</div>`:null}
        </div>
        <div class="extension-meta">
          <span
            class=${t?`badge badge-installed`:`badge badge-available`}
          >
            ${t?`Installed`:`Available`}
          </span>
          <div class="extension-actions">
            ${t?s`
                  <wa-button
                    size="small"
                    appearance="plain"
                    ?disabled=${!n||r}
                    @click=${()=>void this.disableExtension(e)}
                  >
                    <wa-icon
                      name="circle-minus"
                      label="Disable"
                    ></wa-icon>
                  </wa-button>
                `:s`
                  <wa-button
                    size="small"
                    appearance="plain"
                    ?disabled=${r}
                    @click=${()=>void this.enableExtension(e)}
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
    `}render(){let e=!!(this.db&&this.db.listDbExtensions),t=this.filterText.trim().toLowerCase(),n=t?this.extensions.filter(e=>`${e.label??``} ${e.id} ${e.description??``}`.toLowerCase().includes(t)):this.extensions,r=n.length>0;return s`
      <wa-dialog
        label="Database extensions"
        ?open=${this.open}
        @wa-after-hide=${()=>{this.open=!1,this.dispatchEvent(new CustomEvent(`hide`,{bubbles:!0,composed:!0}))}}
      >
        <div class="extension-manager">
          <p class="extension-manager-description">
            Database:
            <strong>${this.databaseLabel||`Current connection`}</strong>
          </p>

          ${e?null:s`
                <wa-alert variant="warning" open>
                  <wa-icon slot="icon" name="triangle-exclamation"></wa-icon>
                  The current SQL engine does not expose any extension information.
                </wa-alert>
              `}

          ${this.error?s`
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
              @input=${e=>{this.filterText=e.target?.value??``}}
              @wa-clear=${()=>{this.filterText=``}}
              with-clear
            >
              <wa-icon slot="prefix" name="magnifying-glass"></wa-icon>
            </wa-input>

          <div class="extension-list">
            ${this.loading?s`<div class="extension-list-empty">Loading extensions…</div>`:r?f(n,e=>e.id,e=>this.renderExtensionRow(e)):s`
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
    `}static{this.styles=o`
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
  `}};v([m({type:Boolean})],w.prototype,`open`,void 0),v([m({attribute:!1})],w.prototype,`db`,void 0),v([m()],w.prototype,`databaseLabel`,void 0),v([c()],w.prototype,`extensions`,void 0),v([c()],w.prototype,`loading`,void 0),v([c()],w.prototype,`updatingId`,void 0),v([c()],w.prototype,`error`,void 0),v([c()],w.prototype,`filterText`,void 0),w=v([l(`docks-sql-extension-manager`)],w);var T=new class{constructor(){this.managerInstance=null}showExtensionManager(e){return!e.db||!e.db.listDbExtensions?(_(`The current SQL engine does not support extensions.`),null):(this.managerInstance||(this.managerInstance=document.createElement(`docks-sql-extension-manager`),document.body.appendChild(this.managerInstance)),this.managerInstance.configure(e),this.managerInstance.show(),this.managerInstance)}getManager(){return this.managerInstance}};e.put(`sqlExtensionManagerService`,T);var E=28;function D(e){let t=e.replace(/\s+/g,` `).trim();return t.length<=E?t:`${t.slice(0,E)}…`}var O=class extends y{constructor(...e){super(...e),this.readOnly=!1,this.initialContent=void 0,this.initialUri=void 0,this.running=!1,this.availableAdapters=[],this.selectedEngineId=null,this.availableConnections=[],this.selectedConnectionId=void 0,this.sqlEngineLoading=!1,this.dbVersion=void 0,this.sqlVersionLoading=!1,this.widgetRef=u(),this.databases=new Map,this._onContentChange=()=>{this.markDirty(!0)}}async doInitUI(){let e=this.input.data,t=await e.getContents();this.initialContent=typeof t==`string`?t:t==null?``:String(t),this.initialUri=e.getWorkspacePath(),this.unsubscribeContributionsToken=n(h,e=>{e?.target===`system.sqladapters`&&this.refreshAdapters()}),await this.updateComplete,this.refreshAdapters().catch(e=>{_(e instanceof Error?e.message:String(e))})}async refreshAdapters(){let e=g.getContributions(`system.sqladapters`);if(this.availableAdapters=e,!e.length){this.selectedEngineId=null,this.availableConnections=[],this.selectedConnectionId=void 0,this.dbVersion=void 0,this.sqlVersionLoading=!1,await this.updateComplete;return}this.selectedEngineId||=(e.find(e=>e.id===`duckdb`)??e[0]).id,this.requestUpdate(),await this.refreshConnections(),await this.updateComplete}async getOrLoadDatabase(e){let t=this.databases.get(e);if(t)return t;let n=this.availableAdapters.find(t=>t.id===e);if(!n)return null;try{let t=n.label||n.id,r=await x.runAsync(`Opening ${t} database`,async e=>(e.message=`Connecting to ${t}…`,n.loader()));return this.databases.set(e,r),r}catch(e){return _(e instanceof Error?e.message:String(e)),null}}async refreshConnections(){let e=this.selectedEngineId;if(!e){this.availableConnections=[],this.selectedConnectionId=void 0,this.dbVersion=void 0,this.sqlEngineLoading=!1,this.sqlVersionLoading=!1,await this.updateComplete;return}this.sqlEngineLoading=!0,this.dbVersion=void 0,this.requestUpdate();try{let t=await this.getOrLoadDatabase(e);if(!t){this.availableConnections=[],this.selectedConnectionId=void 0;return}this.availableConnections=await t.listConnections();let n=t.currentConnectionId;n==null?this.selectedConnectionId=void 0:(this.selectedConnectionId=n,await this.updateDbVersion())}finally{this.sqlEngineLoading=!1,await this.updateComplete,this.requestUpdate()}}async updateDbVersion(){this.dbVersion=void 0,this.sqlVersionLoading=!1;let e=this.selectedEngineId;if(!e||this.selectedConnectionId===void 0)return;let t=this.databases.get(e);if(t?.readVersion){this.sqlVersionLoading=!0;try{this.dbVersion=await t.readVersion()}catch{this.dbVersion=void 0}finally{this.sqlVersionLoading=!1}this.requestUpdate()}}async onEngineChange(e){let t=e.target?.value??``;this.selectedEngineId!==t&&(this.selectedEngineId=t||null,this.selectedConnectionId=void 0,this.dbVersion=void 0,this.sqlVersionLoading=!1,await this.refreshConnections(),this.requestUpdate())}async onConnectionChange(e){let t=e.target?.value??``,n=t===``?null:t;if(this.selectedConnectionId===n)return;this.selectedConnectionId=n,this.dbVersion=void 0,this.sqlVersionLoading=!1;let r=this.selectedEngineId;if(!r)return;let i=await this.getOrLoadDatabase(r);i&&(await i.selectConnection(n),await this.updateDbVersion(),this.requestUpdate())}async onEngineDropdownSelect(e){let t=e.detail?.item?.value??``;this.selectedEngineId!==t&&(this.selectedEngineId=t||null,this.selectedConnectionId=void 0,this.dbVersion=void 0,this.sqlVersionLoading=!1,await this.refreshConnections(),this.requestUpdate())}async onConnectionDropdownSelect(e){let t=e.detail?.item?.value??``,n=t===``?null:t;if(this.selectedConnectionId===n)return;this.selectedConnectionId=n,this.dbVersion=void 0,this.sqlVersionLoading=!1;let r=this.selectedEngineId;if(!r)return;let i=await this.getOrLoadDatabase(r);i&&(await i.selectConnection(n),await this.updateDbVersion(),this.requestUpdate())}async deleteConnectionById(e,t){e.stopPropagation(),e.preventDefault();let n=this.selectedEngineId;if(!n)return;let r=await this.getOrLoadDatabase(n);!r||!r.deleteConnection||await S(`Delete connection "${this.availableConnections.find(e=>e.id===t)?.label??(t===null?`In-memory`:t??`Current connection`)}"?`)&&(t===null?await r.selectConnection(null):await r.deleteConnection(t),await this.refreshConnections(),this.requestUpdate())}save(){let e=this.widgetRef.value?.getContent()??``;this.input?.data.saveContents(e),this.markDirty(!1)}async doClose(){this.unsubscribeContributionsToken&&=(r(this.unsubscribeContributionsToken),void 0),this.widgetRef.value?.dispose();for(let e of this.databases.values())await e.close();this.databases.clear()}getLanguage(){return`sql`}isLanguage(e){return e.toLowerCase()===`sql`}getContent(){return this.widgetRef.value?.getContent()??null}getSelection(){return this.widgetRef.value?.getSelection()??null}getSnippet(e=5){return this.widgetRef.value?.getSnippet(e)??null}getFilePath(){return this.input?.data?.getWorkspacePath()??null}async runQuery(e=!1){let t=this.getSelection()?.trim(),n=this.getContent()?.trim(),r=e?t:n;if(!r){_(e?`No selection to run`:`No SQL to run`);return}if(this.running)return;let a=this.selectedEngineId;if(!a){_(`No SQL engine available`);return}let o=await this.getOrLoadDatabase(a);if(!o){_(`Could not initialize SQL engine`);return}if(this.selectedConnectionId===void 0){_(`Select a connection`);return}this.running=!0;let s=D(r);this.requestUpdate();let c=window.setTimeout(()=>this.clearRunningState(),6e4);try{let e=await o.runQuery(r),t=this.availableAdapters.find(e=>e.id===a);i(`dataview/publish`,{title:s,data:{columns:e.columns,rows:e.rows},source:t?.label??a})}catch(e){_(e instanceof Error?e.message:String(e))}finally{window.clearTimeout(c),this.running=!1,this.requestUpdate()}}clearRunningState(){this.running&&(this.running=!1,this.requestUpdate())}async createConnection(){let e=this.selectedEngineId;if(!e)return;let t=await this.getOrLoadDatabase(e);if(!t||!t.createConnection)return;let n=await t.createConnection();n&&(await this.refreshConnections(),this.selectedConnectionId=n.id,await t.selectConnection(n.id??null),await this.updateDbVersion(),C(`Connection "${n.label}" created`),this.requestUpdate())}async deleteConnection(){let e=this.selectedEngineId;if(!e||this.selectedConnectionId===void 0)return;let t=await this.getOrLoadDatabase(e);if(!t||!t.deleteConnection)return;let n=this.selectedConnectionId;await S(`Delete connection "${this.availableConnections.find(e=>e.id===n)?.label??(n===null?`In-memory`:n??`Current connection`)}"?`)&&(n===null?await t.selectConnection(null):await t.deleteConnection(n),await this.refreshConnections(),this.requestUpdate())}getCurrentConnectionLabel(){let e=this.selectedConnectionId;return e===void 0?null:e===null?`In-memory`:this.availableConnections.find(t=>t.id===e)?.label??e}async openExtensionManager(){let e=this.selectedEngineId;if(!e)return;if(this.selectedConnectionId===void 0){_(`Select a connection`);return}let t=await this.getOrLoadDatabase(e);if(!t||!t.listDbExtensions){C(`Extensions are not available for the selected SQL engine.`);return}let n=(this.availableAdapters.find(t=>t.id===e)??null)?.label??e,r=this.getCurrentConnectionLabel(),i=r?`${n} – ${r}`:n;T.showExtensionManager({db:t,databaseLabel:i})}renderToolbar(){let e=this.availableAdapters,t=e.length>0,n=this.availableConnections.length>0,r=this.selectedEngineId,i=r?this.databases.get(r):null,a=!!i?.listDbExtensions,o=this.sqlEngineLoading?`Loading…`:this.selectedConnectionId===void 0?`Select connection`:this.selectedConnectionId===null?`In-memory`:this.availableConnections.find(e=>e.id===this.selectedConnectionId)?.label??`Connection`,c=this.running||this.sqlEngineLoading||this.sqlVersionLoading||this.selectedConnectionId===void 0,l=!!i?.readVersion,u=this.selectedConnectionId!==void 0&&l&&(this.sqlEngineLoading||this.sqlVersionLoading||!this.dbVersion),d=this.sqlEngineLoading||u,f=this.selectedConnectionId!==void 0&&!d,m=d?`Connecting…`:f?`SQL engine connected`:`No connection selected`,h=d?`var(--wa-color-warning-500)`:f?`var(--wa-color-green-40)`:`var(--wa-color-red-40)`,g=d?``:this.dbVersion?this.dbVersion:f?`Connected`:`Not connected`;return s`
      <div class="sql-toolbar-part" style=${p({display:`flex`,flex:`1`,minWidth:`0`,alignItems:`center`,gap:`var(--wa-space-2xs)`,flexWrap:`nowrap`})}>
        <div class="sql-toolbar-lead" style=${p({display:`flex`,flex:`1`,minWidth:`0`,flexWrap:`nowrap`,alignItems:`center`,gap:`var(--wa-space-2xs)`,overflowX:`auto`})}>
      <wa-dropdown
        class="engine-select"
        placement="bottom-start"
        distance="4"
        size="small"
        @wa-select=${e=>void this.onEngineDropdownSelect(e)}
      >
        <wa-button
          slot="trigger"
          appearance="plain"
          size="small"
          with-caret
          title="SQL engine"
        >
          ${this.selectedEngineId?e.find(e=>e.id===this.selectedEngineId)?.label??this.selectedEngineId:`Select engine`}
        </wa-button>
        ${e.map(e=>s`
            <wa-dropdown-item
              value=${e.id}
              type="checkbox"
              ?checked=${e.id===this.selectedEngineId}
            >
              ${e.label}
            </wa-dropdown-item>
          `)}
      </wa-dropdown>
      <wa-dropdown
        class="connection-select"
        placement="bottom-start"
        distance="4"
        size="small"
        @wa-select=${e=>void this.onConnectionDropdownSelect(e)}
      >
        <wa-button
          slot="trigger"
          appearance="plain"
          size="small"
          with-caret
          title="Connection"
          ?disabled=${!t||!n||this.sqlEngineLoading}
        >
          ${o}
        </wa-button>
        ${this.availableConnections.map(e=>s`
            <wa-dropdown-item
              value=${e.id??``}
              type="checkbox"
              ?checked=${e.id===this.selectedConnectionId}
            >
              ${e.label}
              <wa-button
                slot="details"
                appearance="plain"
                size="small"
                title=${e.id===null?`Reset in-memory connection`:`Delete connection`}
                @click=${t=>this.deleteConnectionById(t,e.id)}
              >
                <wa-icon
                  name=${e.id===null?`rotate-right`:`trash`}
                  label=${e.id===null?`Reset`:`Delete`}
                ></wa-icon>
              </wa-button>
            </wa-dropdown-item>
          `)}
      </wa-dropdown>
      <wa-button
        size="small"
        appearance="plain"
        title="New connection"
        ?disabled=${this.sqlEngineLoading}
        @click=${()=>void this.createConnection()}
      >
        <wa-icon name="plus" label="New"></wa-icon>
      </wa-button>
      ${a?s`
            <wa-button
              size="small"
              appearance="plain"
              title="Manage extensions"
              ?disabled=${!t||!n||this.selectedConnectionId===void 0||this.sqlEngineLoading}
              @click=${()=>void this.openExtensionManager()}
            >
              <wa-icon name="puzzle-piece" label="Extensions"></wa-icon>
              Extensions
            </wa-button>
          `:null}
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${c}
        @click=${()=>void this.runQuery(!0)}
        title="Run selection only"
      >
        <wa-icon name="i-cursor" label="Run selection"></wa-icon>
        ${this.running?`Running…`:`Run selection`}
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${c}
        @click=${()=>void this.runQuery(!1)}
        title="Run all SQL"
      >
        <wa-icon name="play" label="Run"></wa-icon>
        ${this.running?`Running…`:`Run all`}
      </wa-button>
        </div>
      <span
        class="sql-toolbar-status"
        aria-live="polite"
        title=${m}
        style=${p({flexShrink:`0`,display:`inline-flex`,alignItems:`center`,gap:`0.5rem`,minHeight:`1.25rem`,whiteSpace:`nowrap`})}
      >
        <wa-icon
          name="circle"
          label="SQL engine status"
          style=${p({color:h})}
        ></wa-icon>
        ${d?s`<wa-spinner style="font-size: 0.9rem"></wa-spinner>`:s`<span
              class="sql-toolbar-version"
              style=${p({fontSize:`0.8rem`,opacity:`0.85`,whiteSpace:`nowrap`,maxWidth:`14rem`,overflow:`hidden`,textOverflow:`ellipsis`})}
              >${g}</span
            >`}
      </span>
      </div>
    `}renderContent(){return this.initialContent===void 0?s`<div class="editor-placeholder"></div>`:s`
      <div class="editor-area">
        <docks-monaco-widget
          .value=${this.initialContent}
          .uri=${this.initialUri}
          .language=${`sql`}
          .readOnly=${this.readOnly}
          @content-change=${this._onContentChange}
          ${d(this.widgetRef)}
        ></docks-monaco-widget>
      </div>
    `}static{this.styles=o`
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
    .editor-area docks-monaco-widget,
    .editor-area monaco-widget {
      flex: 1;
      min-height: 0;
    }
    .editor-placeholder {
      flex: 1;
      min-height: 0;
    }
  `}};v([m({attribute:!1})],O.prototype,`input`,void 0),v([m({type:Boolean})],O.prototype,`readOnly`,void 0),v([c()],O.prototype,`initialContent`,void 0),v([c()],O.prototype,`initialUri`,void 0),v([c()],O.prototype,`running`,void 0),v([c()],O.prototype,`availableAdapters`,void 0),v([c()],O.prototype,`selectedEngineId`,void 0),v([c()],O.prototype,`availableConnections`,void 0),v([c()],O.prototype,`selectedConnectionId`,void 0),v([c()],O.prototype,`sqlEngineLoading`,void 0),v([c()],O.prototype,`dbVersion`,void 0),v([c()],O.prototype,`sqlVersionLoading`,void 0),O=v([l(`docks-sql-editor`)],O);function k(){b.registerEditorInputHandler({editorId:`system.sqleditor`,label:`SQL Editor`,icon:`database`,canHandle:e=>e instanceof t&&e.getName().toLowerCase().endsWith(`.sql`),ranking:900,handle:async e=>{let t={title:e.getWorkspacePath(),data:e,key:e.getWorkspacePath(),icon:`database`,state:{},component:()=>null};return t.component=e=>s`<docks-sql-editor id="${e}" .input=${t}></docks-sql-editor>`,t}})}export{k as default};