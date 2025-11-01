import{U as g,e as u,s as m}from"./editor.main-702eHgXz.js";import{j as f,o as k,y as p,P as y,w,x as v,F as P,n as h,d as l,e as C}from"./main-BLllCBv8.js";import{j as x,x as d,k as W,h as q}from"./index-CBe0mDof.js";import{pythonPackageManagerService as $}from"./package-manager-extension-Bkxv3Db-.js";function j(e){return new Worker("/assets/editor.worker-Ba5z4c26.js",{type:"module",name:e?.name})}function E(e){return new Worker("/assets/json.worker-De6w3Aj2.js",{type:"module",name:e?.name})}function I(e){return new Worker("/assets/css.worker-Brt0-qFL.js",{type:"module",name:e?.name})}function b(e){return new Worker("/assets/html.worker-DA9W98Qi.js",{type:"module",name:e?.name})}function R(e){return new Worker("/assets/ts.worker-C1ZVYqYQ.js",{type:"module",name:e?.name})}var L=Object.defineProperty,M=Object.getOwnPropertyDescriptor,c=(e,t,r,n)=>{for(var a=n>1?void 0:n?M(t,r):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(a=(n?o(t,r,a):o(a))||a);return n&&a&&L(t,r,a),a};self.MonacoEnvironment={getWorker(e,t){return t==="json"?new E:t==="css"||t==="scss"||t==="less"?new I:t==="html"||t==="handlebars"||t==="razor"?new b:t==="typescript"||t==="javascript"?new R:new j}};v.registerEditorInputHandler({canHandle:e=>e instanceof P,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return t.widgetFactory=()=>d`
            <k-monaco-editor .input=${t}></k-monaco-editor>`,t}});let i=class extends f{constructor(){super(...arguments),this.readOnly=!1,this.editorRef=x(),this.canExecute=!1,this.requiredPackages=[],this.chatContext={history:[]}}doBeforeUI(){const e=this.input.data;this.canExecute=e.getName().endsWith(".py")}updated(e){super.updated(e),(e.has("canExecute")||e.has("pyenv"))&&this.updateToolbar()}async doInitUI(){const e=this.input.data,t=await e.getContents(),r=this.editorRef.value,n=g.file(e.getName());this.model=u.createModel(t,void 0,n),this.editor=u.create(r,{theme:"vs-dark",automaticLayout:!1}),this.model.onDidChangeContent(a=>{this.readOnly||this.markDirty(!0)}),this.editor.setModel(this.model),this.canExecute&&(this.requiredPackages=this.parsePackagesFromContent(t))}getEditor(){return this.editor}save(){const e=this.model.getValue();this.input?.data.saveContents(e),this.markDirty(!1)}doClose(){this.model?.dispose(),this.editor?.dispose(),this.model=void 0,this.editor=void 0,this.pyenv?.close(),this.pyenv=void 0}async onRunCode(){this.canExecute&&(this.pyenv||await this.toggleConnection(),this.pyenv?.execCode(this.model.getValue()))}getLanguage(){return this.model.getLanguageId()?.toLowerCase()}renderToolbar(){return this.canExecute?d`
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
        `:d``}async toggleConnection(){if(this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.model.getLanguageId()!=="python"){p.error("Language not supported: "+this.model.getLanguageId());return}this.pyenv=new y;const e=await w.getWorkspace();if(await this.pyenv.init(e),this.requiredPackages.length>0)try{await this.pyenv.loadPackages(this.requiredPackages)}catch(t){p.error("Failed to load required packages: "+String(t))}}parsePackagesFromContent(e){const t=e.split(`
`),r=/^#\s*@gs-packages:\s*(.+)$/i;for(const n of t){const a=n.match(r);if(a)return a[1].split(",").map(s=>s.trim()).filter(s=>s.length>0)}return[]}updatePackagesInContent(){if(!this.model)return;const e=this.model.getValue(),t=e.split(`
`),r=/^#\s*@gs-packages:/i;let n=-1;for(let o=0;o<t.length;o++)if(r.test(t[o])){n=o;break}const a=this.requiredPackages.length>0?`# @gs-packages: ${this.requiredPackages.join(", ")}`:null;if(a)if(n>=0)t[n]=a;else{const o=t[0]?.startsWith("#!")?1:0;t.splice(o,0,a)}else n>=0&&t.splice(n,1);const s=t.join(`
`);s!==e&&this.model.setValue(s)}openPackageManager(){$.showPackageManager({packages:this.requiredPackages,pyenv:this.pyenv,onPackageAdded:e=>{this.requiredPackages.includes(e)||(this.requiredPackages=[...this.requiredPackages,e],this.updatePackagesInContent())},onPackageRemoved:e=>{this.requiredPackages=this.requiredPackages.filter(t=>t!==e),this.updatePackagesInContent()}})}render(){return d`
            <style>
                ${m}
            </style>
            <div class="monaco-editor-container" ${W(this.editorRef)}>
            </div>
        `}};i.styles=q`
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
    `;c([h({attribute:!1})],i.prototype,"input",2);c([h()],i.prototype,"readOnly",2);c([l()],i.prototype,"canExecute",2);c([l()],i.prototype,"pyenv",2);c([l()],i.prototype,"requiredPackages",2);i=c([C("k-monaco-editor")],i);export{i as KMonacoEditor};
