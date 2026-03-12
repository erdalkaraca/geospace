import{f as C,F as w,L as m,E as v,c as y,q as I,t as h,u as $,x as E}from"./config-ByP2ak92-zMGYTrLw.js";import{b as d,H as L,n as b,r as c,G as T,s as q,a1 as R,p as O,U as S,t as D}from"./webawesome-Bcy1vMqC.js";import"./preload-helper-BXl3LOEh.js";import"./chunk.FSRXYGSW-CMgxtNeZ.js";var U=Object.defineProperty,A=Object.getOwnPropertyDescriptor,l=(e,t,n,i)=>{for(var a=i>1?void 0:i?A(t,n):t,s=e.length-1,u;s>=0;s--)(u=e[s])&&(a=(i?u(t,n,a):u(a))||a);return i&&a&&U(t,n,a),a};const g=28;function x(e){const t=e.replace(/\s+/g," ").trim();return t.length<=g?t:`${t.slice(0,g)}…`}let o=class extends m{constructor(){super(...arguments),this.readOnly=!1,this.initialContent=void 0,this.initialUri=void 0,this.running=!1,this.availableAdapters=[],this.selectedEngineId=null,this.availableConnections=[],this.selectedConnectionId=null,this.widgetRef=T(),this.databases=new Map,this._onContentChange=()=>{this.markDirty(!0)}}async doInitUI(){const e=this.input.data,t=await e.getContents();this.initialContent=t,this.initialUri=e.getName(),this.unsubscribeContributionsToken=q(v,n=>{n?.target==="system.sqladapters"&&this.refreshAdapters()}),await this.refreshAdapters(),this.requestUpdate()}async refreshAdapters(){const e=y.getContributions("system.sqladapters");if(this.availableAdapters=e,!e.length){this.selectedEngineId=null,this.availableConnections=[],this.selectedConnectionId=null,await this.updateComplete,this.updateToolbar();return}if(!this.selectedEngineId){const t=e.find(n=>n.id==="duckdb");this.selectedEngineId=(t??e[0]).id}this.requestUpdate(),await this.refreshConnections(),await this.updateComplete,this.updateToolbar()}async getOrLoadDatabase(e){const t=this.databases.get(e);if(t)return t;const n=this.availableAdapters.find(i=>i.id===e);if(!n)return null;try{const i=n.label||n.id,a=await I.runAsync(`Opening ${i} database`,async s=>(s.message=`Connecting to ${i}…`,n.loader()));return this.databases.set(e,a),a}catch(i){return h(i instanceof Error?i.message:String(i)),null}}async refreshConnections(){const e=this.selectedEngineId;if(!e){this.availableConnections=[],this.selectedConnectionId=null,await this.updateComplete,this.updateToolbar();return}const t=await this.getOrLoadDatabase(e);if(!t){this.availableConnections=[],this.selectedConnectionId=null,await this.updateComplete,this.updateToolbar();return}const n=await t.listConnections();this.availableConnections=n;const i=t.currentConnectionId;if(i!==null){this.selectedConnectionId=i,await this.updateComplete,this.updateToolbar();return}const a=n.find(s=>s.isDefault)??n[0];this.selectedConnectionId=a?a.id:null,a&&await t.selectConnection(a.id??null),await this.updateComplete,this.updateToolbar()}async onEngineChange(e){const n=e.target?.value??"";this.selectedEngineId!==n&&(this.selectedEngineId=n||null,await this.refreshConnections(),this.requestUpdate(),this.updateToolbar())}async onConnectionChange(e){const n=e.target?.value??"",i=n===""?null:n;if(this.selectedConnectionId===i)return;this.selectedConnectionId=i;const a=this.selectedEngineId;if(!a)return;const s=await this.getOrLoadDatabase(a);s&&(await s.selectConnection(i),this.requestUpdate(),this.updateToolbar())}save(){const e=this.widgetRef.value?.getContent()??"";this.input?.data.saveContents(e),this.markDirty(!1)}async doClose(){this.unsubscribeContributionsToken&&(R(this.unsubscribeContributionsToken),this.unsubscribeContributionsToken=void 0),this.widgetRef.value?.dispose();for(const e of this.databases.values())await e.close();this.databases.clear()}getLanguage(){return"sql"}isLanguage(e){return e.toLowerCase()==="sql"}getContent(){return this.widgetRef.value?.getContent()??null}getSelection(){return this.widgetRef.value?.getSelection()??null}getSnippet(e=5){return this.widgetRef.value?.getSnippet(e)??null}getFilePath(){return this.input?.data?.getWorkspacePath()??null}async runQuery(e=!1){const t=e?this.getSelection()?.trim():this.getSelection()?.trim()||this.getContent()?.trim();if(!t){h(e?"No selection to run":"No SQL to run");return}if(this.running)return;const n=this.selectedEngineId;if(!n){h("No SQL engine available");return}const i=await this.getOrLoadDatabase(n);if(!i){h("Could not initialize SQL engine");return}if(!this.selectedConnectionId&&this.availableConnections.length){const r=this.availableConnections.find(p=>p.isDefault)??this.availableConnections[0];this.selectedConnectionId=r.id,await i.selectConnection(r.id??null)}this.running=!0;const a=x(t);this.requestUpdate(),this.updateToolbar();const u=window.setTimeout(()=>this.clearRunningState(),6e4);try{const r=await i.runQuery(t),p=this.availableAdapters.find(f=>f.id===n);O("dataview/publish",{title:a,data:{columns:r.columns,rows:r.rows},source:p?.label??n})}catch(r){h(r instanceof Error?r.message:String(r))}finally{window.clearTimeout(u),this.running=!1,this.requestUpdate(),this.updateToolbar()}}clearRunningState(){this.running&&(this.running=!1,this.requestUpdate(),this.updateToolbar())}async createConnection(){const e=this.selectedEngineId;if(!e)return;const t=await this.getOrLoadDatabase(e);if(!t||!t.createConnection)return;const n=await t.createConnection();n&&(await this.refreshConnections(),this.selectedConnectionId=n.id,await t.selectConnection(n.id??null),$(`Connection "${n.label}" created`),this.requestUpdate(),this.updateToolbar())}async deleteConnection(){const e=this.selectedEngineId;if(!e)return;const t=await this.getOrLoadDatabase(e);if(!t||!t.deleteConnection)return;const n=this.selectedConnectionId,i=this.availableConnections.find(s=>s.id===n)?.label??(n===null?"In-memory":n??"Current connection");await E(`Delete connection "${i}"?`)&&(n!==null?await t.deleteConnection(n):await t.selectConnection(null),await this.refreshConnections(),this.requestUpdate(),this.updateToolbar())}renderToolbar(){const e=this.selectedEngineId??"",t=this.selectedConnectionId??"",n=this.availableAdapters,i=n.length>0,a=this.availableConnections.length>0;return d`
      <wa-select
        class="engine-select"
        size="small"
        .value=${e}
        title="SQL engine"
        @change=${s=>{this.onEngineChange(s)}}
      >
        ${n.map(s=>d`<wa-option value=${s.id}>${s.label}</wa-option>`)}
      </wa-select>
      <wa-select
        class="connection-select"
        size="small"
        .value=${t}
        title="Connection"
        ?disabled=${!i||!a}
        @change=${s=>{this.onConnectionChange(s)}}
      >
        ${this.availableConnections.map(s=>d`<wa-option value=${s.id??""}>${s.label}</wa-option>`)}
      </wa-select>
      <wa-button
        size="small"
        appearance="plain"
        title="New connection"
        @click=${()=>{this.createConnection()}}
      >
        <wa-icon name="plus" label="New"></wa-icon>
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        title="Delete connection"
        @click=${()=>{this.deleteConnection()}}
      >
        <wa-icon name="trash" label="Delete"></wa-icon>
      </wa-button>
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
    `}render(){return this.initialContent===void 0?d`<div class="editor-placeholder"></div>`:d`
      <div class="editor-area">
        <lyra-monaco-widget
          .value=${this.initialContent}
          .uri=${this.initialUri}
          .language=${"sql"}
          .readOnly=${this.readOnly}
          @content-change=${this._onContentChange}
          ${S(this.widgetRef)}
        ></lyra-monaco-widget>
      </div>
    `}};o.styles=L`
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
  `;l([b({attribute:!1})],o.prototype,"input",2);l([b({type:Boolean})],o.prototype,"readOnly",2);l([c()],o.prototype,"initialContent",2);l([c()],o.prototype,"initialUri",2);l([c()],o.prototype,"running",2);l([c()],o.prototype,"availableAdapters",2);l([c()],o.prototype,"selectedEngineId",2);l([c()],o.prototype,"availableConnections",2);l([c()],o.prototype,"selectedConnectionId",2);o=l([D("lyra-sql-editor")],o);function P(){C.registerEditorInputHandler({editorId:"system.sqleditor",label:"SQL Editor",icon:"database",canHandle:e=>e instanceof w&&e.getName().toLowerCase().endsWith(".sql"),ranking:900,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),icon:"database",noOverflow:!1,state:{},component:()=>null};return t.component=()=>d`<lyra-sql-editor .input=${t}></lyra-sql-editor>`,t}})}export{P as default};
