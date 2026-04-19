import{Q as e,U as t,_ as n,b as r,n as i,r as a,u as o,v as s}from"./repeat-jF3QiNU_.js";import{R as c,T as l,a as u}from"./dist-Bs3vRgSi.js";import{t as d}from"./pyservice-DyVO8QVd-CK9Jkr7N.js";import{t as f}from"./package-manager-DcDiJbD3-Tbz48VBR.js";import"./api-CpA1OGOM-YCwcmp13.js";import{n as p,t as m}from"./editor-python-run-Cs68X5JL-Dk-pHwir.js";var h=class extends u{constructor(...e){super(...e),this.readOnly=!1,this.initialContent=void 0,this.initialUri=void 0,this.pyConnected=!1,this.pyConnecting=!1,this.widgetRef=i(),this._onContentChange=()=>{this.markDirty(!0)}}async doInitUI(){let e=this.input.data;this.initialContent=await e.getContents(),this.initialUri=e.getName(),this.requestUpdate()}save(){let e=this.widgetRef.value?.getContent()??``;this.input?.data.saveContents(e),this.markDirty(!1)}doClose(){this.widgetRef.value?.dispose(),this.pyenv&&=(this.pyenv.close(),void 0),this.pyConnected=!1,this.pyVersion=void 0}getLanguage(){return`python`}isLanguage(e){return e.toLowerCase()===`python`}getContent(){return this.widgetRef.value?.getContent()??null}getSelection(){return this.widgetRef.value?.getSelection()??null}getSnippet(e=5){return this.widgetRef.value?.getSnippet(e)??null}getFilePath(){return this.input?.data?.getWorkspacePath()??null}getPyEnv(){return this.pyenv}async initPyEnv(){if(!this.pyenv){this.pyenv=new d,await this.pyenv.init(),this.pyConnected=!0;try{this.pyVersion=(await this.pyenv.execCode(`import sys; sys.version.split()[0]`))?.result||`Unknown`}catch{this.pyVersion=`Unknown`}}}async connectPython(){if(!(this.pyConnecting||this.pyConnected))try{this.pyConnecting=!0,await this.initPyEnv()}catch(e){c(e instanceof Error?e.message:String(e))}finally{this.pyConnecting=!1}}async runScript(){if((!this.pyConnected||!this.pyenv)&&(await this.connectPython(),!this.pyenv))return;let e=this.getContent()?.trim();if(!e){c(`No content to run`);return}try{let t=p(e);t.length>0&&await this.pyenv.loadPackages(t),await this.pyenv.execCode(e)}catch(e){c(e instanceof Error?e.message:String(e))}}updateEditorPackagesLine(e){let t=this.getContent()??``,n=m(t,e);n!==t&&(this.widgetRef.value?.getModel()?.setValue(n),this.markDirty(!0))}openPackageManager(){if(!this.pyConnected||!this.pyenv)return;let e=p(this.getContent()??``);f.showPackageManager({packages:e,pyenv:this.pyenv,onPackageAdded:e=>{let t=[...p(this.getContent()??``),e];this.updateEditorPackagesLine(t)},onPackageRemoved:e=>{let t=p(this.getContent()??``).filter(t=>t!==e);this.updateEditorPackagesLine(t)}})}renderToolbar(){let e=this.pyConnecting?`Connecting to Python...`:this.pyConnected?`Python Connected`:`Python Disconnected - Click to connect`,n=this.pyConnecting?`Connecting...`:this.pyConnected&&this.pyVersion?`Python ${this.pyVersion}`:`Not connected`,r=this.pyConnected?`var(--wa-color-green-40)`:this.pyConnecting?`var(--wa-color-warning-500)`:`var(--wa-color-red-40)`;return t`
            <wa-button
                appearance="plain"
                size="small"
                style=${o({display:`flex`,alignItems:`center`,gap:`0.5rem`})}
                ?disabled=${this.pyConnecting}
                @click=${()=>this.connectPython()}
                title=${e}
            >
                <wa-icon name="circle" label="Python status" style=${o({color:r})}></wa-icon>
                ${n}
            </wa-button>
            <wa-button
                size="small"
                appearance="plain"
                ?disabled=${!this.pyConnected}
                @click=${()=>this.runScript()}
                title="Run Python script"
            >
                <wa-icon name="play" label="Run"></wa-icon>
                Run
            </wa-button>
            <wa-button
                size="small"
                appearance="plain"
                ?disabled=${!this.pyConnected}
                @click=${()=>this.openPackageManager()}
                title="Manage packages"
            >
                <wa-icon name="box" label="Packages"></wa-icon>
                Packages
            </wa-button>
        `}updated(e){super.updated(e),e.has(`pyConnected`)||e.has(`pyConnecting`)||e.has(`pyVersion`)}renderContent(){return this.initialContent===void 0?t`<div class="monaco-editor-placeholder"></div>`:t`
            <docks-monaco-widget
                .value=${this.initialContent}
                .uri=${this.initialUri}
                .language=${`python`}
                .readOnly=${this.readOnly}
                @content-change=${this._onContentChange}
                ${a(this.widgetRef)}
            ></docks-monaco-widget>
        `}static{this.styles=e`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
        }
        .monaco-editor-placeholder {
            flex: 1;
            min-height: 0;
        }
    `}};l([s({attribute:!1})],h.prototype,`input`,void 0),l([s({type:Boolean})],h.prototype,`readOnly`,void 0),l([n()],h.prototype,`initialContent`,void 0),l([n()],h.prototype,`initialUri`,void 0),l([n()],h.prototype,`pyenv`,void 0),l([n()],h.prototype,`pyConnected`,void 0),l([n()],h.prototype,`pyConnecting`,void 0),l([n()],h.prototype,`pyVersion`,void 0),h=l([r(`docks-python-editor`)],h);