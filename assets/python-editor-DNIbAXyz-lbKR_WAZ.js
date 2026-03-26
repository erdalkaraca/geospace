import{I as e,a as t,w as n}from"./dist-XDM-k8NY.js";import{I as r,N as i,P as a,Q as o,U as s,n as c,r as l,w as u}from"./repeat-D7ZcYN9W.js";import{t as d}from"./pyservice-DoyHFuGG-CJprZ3XA.js";import{t as f}from"./package-manager-CicT90vE-Dd5LAvKp.js";import"./api-BKSQgj-C-C5_mgUrm.js";import{n as p,t as m}from"./editor-python-run-Cs68X5JL-Dk-pHwir.js";var h=class extends t{constructor(...e){super(...e),this.readOnly=!1,this.initialContent=void 0,this.initialUri=void 0,this.pyConnected=!1,this.pyConnecting=!1,this.widgetRef=c(),this._onContentChange=()=>{this.markDirty(!0)}}async doInitUI(){let e=this.input.data;this.initialContent=await e.getContents(),this.initialUri=e.getName(),this.requestUpdate()}save(){let e=this.widgetRef.value?.getContent()??``;this.input?.data.saveContents(e),this.markDirty(!1)}doClose(){this.widgetRef.value?.dispose(),this.pyenv&&=(this.pyenv.close(),void 0),this.pyConnected=!1,this.pyVersion=void 0}getLanguage(){return`python`}isLanguage(e){return e.toLowerCase()===`python`}getContent(){return this.widgetRef.value?.getContent()??null}getSelection(){return this.widgetRef.value?.getSelection()??null}getSnippet(e=5){return this.widgetRef.value?.getSnippet(e)??null}getFilePath(){return this.input?.data?.getWorkspacePath()??null}getPyEnv(){return this.pyenv}async initPyEnv(){if(!this.pyenv){this.pyenv=new d,await this.pyenv.init(),this.pyConnected=!0;try{this.pyVersion=(await this.pyenv.execCode(`import sys; sys.version.split()[0]`))?.result||`Unknown`}catch{this.pyVersion=`Unknown`}}}async connectPython(){if(!(this.pyConnecting||this.pyConnected))try{this.pyConnecting=!0,await this.initPyEnv()}catch(t){e(t instanceof Error?t.message:String(t))}finally{this.pyConnecting=!1}}async runScript(){if((!this.pyConnected||!this.pyenv)&&(await this.connectPython(),!this.pyenv))return;let t=this.getContent()?.trim();if(!t){e(`No content to run`);return}try{let e=p(t);e.length>0&&await this.pyenv.loadPackages(e),await this.pyenv.execCode(t)}catch(t){e(t instanceof Error?t.message:String(t))}}updateEditorPackagesLine(e){let t=this.getContent()??``,n=m(t,e);n!==t&&(this.widgetRef.value?.getModel()?.setValue(n),this.markDirty(!0))}openPackageManager(){if(!this.pyConnected||!this.pyenv)return;let e=p(this.getContent()??``);f.showPackageManager({packages:e,pyenv:this.pyenv,onPackageAdded:e=>{let t=[...p(this.getContent()??``),e];this.updateEditorPackagesLine(t)},onPackageRemoved:e=>{let t=p(this.getContent()??``).filter(t=>t!==e);this.updateEditorPackagesLine(t)}})}renderToolbar(){let e=this.pyConnecting?`Connecting to Python...`:this.pyConnected?`Python Connected`:`Python Disconnected - Click to connect`,t=this.pyConnecting?`Connecting...`:this.pyConnected&&this.pyVersion?`Python ${this.pyVersion}`:`Not connected`,n=this.pyConnected?`var(--wa-color-green-40)`:this.pyConnecting?`var(--wa-color-warning-500)`:`var(--wa-color-red-40)`;return s`
            <wa-button
                appearance="plain"
                size="small"
                style=${u({display:`flex`,alignItems:`center`,gap:`0.5rem`})}
                ?disabled=${this.pyConnecting}
                @click=${()=>this.connectPython()}
                title=${e}
            >
                <wa-icon name="circle" label="Python status" style=${u({color:n})}></wa-icon>
                ${t}
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
        `}updated(e){super.updated(e),e.has(`pyConnected`)||e.has(`pyConnecting`)||e.has(`pyVersion`)}renderContent(){return this.initialContent===void 0?s`<div class="monaco-editor-placeholder"></div>`:s`
            <lyra-monaco-widget
                .value=${this.initialContent}
                .uri=${this.initialUri}
                .language=${`python`}
                .readOnly=${this.readOnly}
                @content-change=${this._onContentChange}
                ${l(this.widgetRef)}
            ></lyra-monaco-widget>
        `}static{this.styles=o`
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
    `}};n([a({attribute:!1})],h.prototype,`input`,void 0),n([a({type:Boolean})],h.prototype,`readOnly`,void 0),n([i()],h.prototype,`initialContent`,void 0),n([i()],h.prototype,`initialUri`,void 0),n([i()],h.prototype,`pyenv`,void 0),n([i()],h.prototype,`pyConnected`,void 0),n([i()],h.prototype,`pyConnecting`,void 0),n([i()],h.prototype,`pyVersion`,void 0),h=n([r(`lyra-python-editor`)],h);