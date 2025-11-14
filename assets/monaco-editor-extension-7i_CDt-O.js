import{U as p,e as u,s as m}from"./editor.main-CmQ74xH8.js";import{e as f,x as l,c as k,d as v,b as y,n as h,r as d,t as w}from"./index-CmA8t-CU.js";import{k as P,g,P as b,w as C,v as x,F as q}from"./main-D_a0cemo.js";import{pythonPackageManagerService as E}from"./package-manager-extension-DlNrGs9L.js";var I=Object.defineProperty,M=Object.getOwnPropertyDescriptor,c=(e,t,n,o)=>{for(var a=o>1?void 0:o?M(t,n):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=(o?i(t,n,a):i(a))||a);return o&&a&&I(t,n,a),a};function R(e){let t;switch(e){case"json":t="monaco-editor/esm/vs/language/json/json.worker";break;case"css":case"scss":case"less":t="monaco-editor/esm/vs/language/css/css.worker";break;case"html":case"handlebars":case"razor":t="monaco-editor/esm/vs/language/html/html.worker";break;case"typescript":case"javascript":t="monaco-editor/esm/vs/language/typescript/ts.worker";break;default:t="monaco-editor/esm/vs/editor/editor.worker";break}if(typeof import.meta.resolve=="function")return import.meta.resolve(t);throw new Error("import.meta.resolve is required for Monaco Editor worker loading. This should be available in Vite and other modern bundlers.")}self.MonacoEnvironment={getWorkerUrl(e,t){return R(t)}};x.registerEditorInputHandler({canHandle:e=>e instanceof q,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return t.widgetFactory=()=>l`
            <k-monaco-editor .input=${t}></k-monaco-editor>`,t}});let r=class extends P{constructor(){super(...arguments),this.readOnly=!1,this.editorRef=f(),this.canExecute=!1,this.requiredPackages=[]}doBeforeUI(){const e=this.input.data;this.canExecute=e.getName().endsWith(".py")}updated(e){super.updated(e),(e.has("canExecute")||e.has("pyenv"))&&this.updateToolbar()}async doInitUI(){const e=this.input.data,t=await e.getContents(),n=this.editorRef.value,o=p.file(e.getName());this.model=u.createModel(t,void 0,o),this.editor=u.create(n,{theme:"vs-dark",automaticLayout:!1}),this.model.onDidChangeContent(a=>{this.readOnly||this.markDirty(!0)}),this.editor.setModel(this.model),this.canExecute&&(this.requiredPackages=this.parsePackagesFromContent(t))}getEditor(){return this.editor}save(){const e=this.model.getValue();this.input?.data.saveContents(e),this.markDirty(!1)}doClose(){this.model?.dispose(),this.editor?.dispose(),this.model=void 0,this.editor=void 0,this.pyenv?.close(),this.pyenv=void 0}async onRunCode(){this.canExecute&&(this.pyenv||await this.toggleConnection(),this.pyenv?.execCode(this.model.getValue()))}getLanguage(){return this.model.getLanguageId()?.toLowerCase()}renderToolbar(){return this.canExecute?l`
            <wa-button @click=${()=>this.onRunCode()} title="Run code"
                       ?disabled="${!this.canExecute}" appearance="plain" size="small">
                <wa-icon name="play" label="Run code"></wa-icon>
            </wa-button>
            <wa-button @click=${()=>this.toggleConnection()}
                       style="${k({color:this.pyenv?"var(--wa-color-success-fill-loud)":"var(--wa-color-danger-fill-loud)"})}"
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
        `:l``}async toggleConnection(){if(this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.model.getLanguageId()!=="python"){g.error("Language not supported: "+this.model.getLanguageId());return}this.pyenv=new b;const e=await C.getWorkspace();if(await this.pyenv.init(e),this.requiredPackages.length>0)try{await this.pyenv.loadPackages(this.requiredPackages)}catch(t){g.error("Failed to load required packages: "+String(t))}}parsePackagesFromContent(e){const t=e.split(`
`),n=/^#\s*@gs-packages:\s*(.+)$/i;for(const o of t){const a=o.match(n);if(a)return a[1].split(",").map(s=>s.trim()).filter(s=>s.length>0)}return[]}updatePackagesInContent(){if(!this.model)return;const e=this.model.getValue(),t=e.split(`
`),n=/^#\s*@gs-packages:/i;let o=-1;for(let i=0;i<t.length;i++)if(n.test(t[i])){o=i;break}const a=this.requiredPackages.length>0?`# @gs-packages: ${this.requiredPackages.join(", ")}`:null;if(a)if(o>=0)t[o]=a;else{const i=t[0]?.startsWith("#!")?1:0;t.splice(i,0,a)}else o>=0&&t.splice(o,1);const s=t.join(`
`);s!==e&&this.model.setValue(s)}openPackageManager(){E.showPackageManager({packages:this.requiredPackages,pyenv:this.pyenv,onPackageAdded:e=>{this.requiredPackages.includes(e)||(this.requiredPackages=[...this.requiredPackages,e],this.updatePackagesInContent())},onPackageRemoved:e=>{this.requiredPackages=this.requiredPackages.filter(t=>t!==e),this.updatePackagesInContent()}})}render(){return l`
            <style>
                ${m}
            </style>
            <div class="monaco-editor-container" ${v(this.editorRef)}>
            </div>
        `}};r.styles=y`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
        }

        input.prompt {
            flex: 1;
            font-size: large;
        }

        div.monaco-editor-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    `;c([h({attribute:!1})],r.prototype,"input",2);c([h()],r.prototype,"readOnly",2);c([d()],r.prototype,"canExecute",2);c([d()],r.prototype,"pyenv",2);c([d()],r.prototype,"requiredPackages",2);r=c([w("k-monaco-editor")],r);export{r as KMonacoEditor};
