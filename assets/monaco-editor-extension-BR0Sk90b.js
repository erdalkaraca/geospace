import{U as m,e as h,s as f}from"./editor.main-Bd4z_I5w.js";import{e as k,x as l,b as y,d as w,a as v,n as p,r as u,t as P}from"./index-D0ONUd71.js";import{h as C,p as g,P as x,w as W,o as $,F as q}from"./main-ZIq_vygL.js";import{pythonPackageManagerService as I}from"./package-manager-extension-CIo2m4pI.js";function b(e){return new Worker("/assets/editor.worker-BKDaejSB.js",{type:"module",name:e==null?void 0:e.name})}function E(e){return new Worker("/assets/json.worker-bnpFxRku.js",{type:"module",name:e==null?void 0:e.name})}function R(e){return new Worker("/assets/css.worker-BAVIDzD3.js",{type:"module",name:e==null?void 0:e.name})}function j(e){return new Worker("/assets/html.worker-De8bSgst.js",{type:"module",name:e==null?void 0:e.name})}function M(e){return new Worker("/assets/ts.worker-8yPRNxAu.js",{type:"module",name:e==null?void 0:e.name})}var D=Object.defineProperty,L=Object.getOwnPropertyDescriptor,d=(e,t,n,r)=>{for(var a=r>1?void 0:r?L(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(a=(r?o(t,n,a):o(a))||a);return r&&a&&D(t,n,a),a};self.MonacoEnvironment={getWorker(e,t){return t==="json"?new E:t==="css"||t==="scss"||t==="less"?new R:t==="html"||t==="handlebars"||t==="razor"?new j:t==="typescript"||t==="javascript"?new M:new b}};$.registerEditorInputHandler({canHandle:e=>e instanceof q,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return t.widgetFactory=()=>l`
            <k-monaco-editor .input=${t}></k-monaco-editor>`,t}});let i=class extends C{constructor(){super(...arguments),this.readOnly=!1,this.editorRef=k(),this.canExecute=!1,this.requiredPackages=[],this.chatContext={history:[]}}doBeforeUI(){const e=this.input.data;this.canExecute=e.getName().endsWith(".py")}updated(e){super.updated(e),(e.has("canExecute")||e.has("pyenv"))&&this.updateToolbar()}async doInitUI(){const e=this.input.data,t=await e.getContents(),n=this.editorRef.value,r=m.file(e.getName());this.model=h.createModel(t,void 0,r),this.editor=h.create(n,{theme:"vs-dark",automaticLayout:!1}),this.model.onDidChangeContent(a=>{this.readOnly||this.markDirty(!0)}),this.editor.setModel(this.model),this.canExecute&&(this.requiredPackages=this.parsePackagesFromContent(t))}getEditor(){return this.editor}save(){var t;const e=this.model.getValue();(t=this.input)==null||t.data.saveContents(e),this.markDirty(!1)}doClose(){var e,t,n;(e=this.model)==null||e.dispose(),(t=this.editor)==null||t.dispose(),this.model=void 0,this.editor=void 0,(n=this.pyenv)==null||n.close(),this.pyenv=void 0}async onRunCode(){var e;this.canExecute&&(this.pyenv||await this.toggleConnection(),(e=this.pyenv)==null||e.execCode(this.model.getValue()))}getLanguage(){var e;return(e=this.model.getLanguageId())==null?void 0:e.toLowerCase()}renderToolbar(){return this.canExecute?l`
            <wa-button @click=${()=>this.onRunCode()} title="Run code"
                       ?disabled="${!this.canExecute}" appearance="plain" size="small">
                <wa-icon name="play" label="Run code"></wa-icon>
            </wa-button>
            <wa-button @click=${()=>this.toggleConnection()}
                       style="${y({color:this.pyenv?"var(--wa-color-success-fill-loud)":"var(--wa-color-danger-fill-loud)"})}"
                       title="(Re)Connect to execution environment"
                       ?disabled="${!this.canExecute}"
                       appearance="plain" size="small">
                <wa-icon name="circle" label="Connection status"></wa-icon>
            </wa-button>
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.openPackageManager()}
                title="Manage required Python packages">
                <wa-icon name="box" label="Packages"></wa-icon>
                Packages
            </wa-button>
        `:l``}async toggleConnection(){if(this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.model.getLanguageId()!=="python"){g.error("Language not supported: "+this.model.getLanguageId());return}this.pyenv=new x;const e=await W.getWorkspace();if(await this.pyenv.init(e),this.requiredPackages.length>0)try{await this.pyenv.loadPackages(this.requiredPackages)}catch(t){g.error("Failed to load required packages: "+String(t))}}parsePackagesFromContent(e){const t=e.split(`
`),n=/^#\s*@gs-packages:\s*(.+)$/i;for(const r of t){const a=r.match(n);if(a)return a[1].split(",").map(s=>s.trim()).filter(s=>s.length>0)}return[]}updatePackagesInContent(){var o;if(!this.model)return;const e=this.model.getValue(),t=e.split(`
`),n=/^#\s*@gs-packages:/i;let r=-1;for(let c=0;c<t.length;c++)if(n.test(t[c])){r=c;break}const a=this.requiredPackages.length>0?`# @gs-packages: ${this.requiredPackages.join(", ")}`:null;if(a)if(r>=0)t[r]=a;else{const c=(o=t[0])!=null&&o.startsWith("#!")?1:0;t.splice(c,0,a)}else r>=0&&t.splice(r,1);const s=t.join(`
`);s!==e&&this.model.setValue(s)}openPackageManager(){I.showPackageManager({packages:this.requiredPackages,pyenv:this.pyenv,onPackageAdded:e=>{this.requiredPackages.includes(e)||(this.requiredPackages=[...this.requiredPackages,e],this.updatePackagesInContent())},onPackageRemoved:e=>{this.requiredPackages=this.requiredPackages.filter(t=>t!==e),this.updatePackagesInContent()}})}render(){return l`
            <style>
                ${f}
            </style>
            <div class="monaco-editor-container" ${w(this.editorRef)}>
            </div>
        `}};i.styles=v`
        :host {
            display: flex;
            flex-direction: column;

            --editor-width: 100%;
            --editor-height: 100vh;
        }

        input.prompt {
            flex: 1;
            font-size: large;
        }

        div.monaco-editor-container {
            width: var(--editor-width);
            height: var(--editor-height);
        }
    `;d([p({attribute:!1})],i.prototype,"input",2);d([p()],i.prototype,"readOnly",2);d([u()],i.prototype,"canExecute",2);d([u()],i.prototype,"pyenv",2);d([u()],i.prototype,"requiredPackages",2);i=d([P("k-monaco-editor")],i);export{i as KMonacoEditor};
