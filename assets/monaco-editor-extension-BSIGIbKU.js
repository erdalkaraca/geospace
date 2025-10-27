import{U as p,e as u,s as m}from"./editor.main-BKQ42CJE.js";import{e as f,x as i,c as y,z as v,f as g,F as w,b as k,n as l,d as h,t as x}from"./index-CNuu7pZ0.js";import{f as W,k as C,P as E,j as $}from"./main-GT0Tb3r4.js";function j(e){return new Worker("/assets/editor.worker-BKDaejSB.js",{type:"module",name:e==null?void 0:e.name})}function R(e){return new Worker("/assets/json.worker-bnpFxRku.js",{type:"module",name:e==null?void 0:e.name})}function I(e){return new Worker("/assets/css.worker-BAVIDzD3.js",{type:"module",name:e==null?void 0:e.name})}function b(e){return new Worker("/assets/html.worker-De8bSgst.js",{type:"module",name:e==null?void 0:e.name})}function D(e){return new Worker("/assets/ts.worker-8yPRNxAu.js",{type:"module",name:e==null?void 0:e.name})}var L=Object.defineProperty,O=Object.getOwnPropertyDescriptor,s=(e,t,r,o)=>{for(var n=o>1?void 0:o?O(t,r):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&L(t,r,n),n};self.MonacoEnvironment={getWorker(e,t){return t==="json"?new R:t==="css"||t==="scss"||t==="less"?new I:t==="html"||t==="handlebars"||t==="razor"?new b:t==="typescript"||t==="javascript"?new D:new j}};$.registerEditorInputHandler({canHandle:e=>e instanceof w,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return t.widgetFactory=()=>i`
            <k-monaco-editor .input=${t}></k-monaco-editor>`,t}});let a=class extends W{constructor(){super(...arguments),this.readOnly=!1,this.editorRef=f(),this.canExecute=!1,this.chatContext={history:[]}}doBeforeUI(){const e=this.input.data;this.canExecute=e.getName().endsWith(".py")}updated(e){super.updated(e),(e.has("canExecute")||e.has("pyenv"))&&this.updateToolbar()}async doInitUI(){const e=this.input.data,t=await e.getContents(),r=this.editorRef.value,o=p.file(e.getName());this.model=u.createModel(t,void 0,o),this.editor=u.create(r,{theme:"vs-dark",automaticLayout:!1}),this.model.onDidChangeContent(n=>{this.readOnly||this.markDirty(!0)}),this.editor.setModel(this.model)}getEditor(){return this.editor}save(){var t;const e=this.model.getValue();(t=this.input)==null||t.data.saveContents(e),this.markDirty(!1)}doClose(){var e,t,r;(e=this.model)==null||e.dispose(),(t=this.editor)==null||t.dispose(),this.model=void 0,this.editor=void 0,(r=this.pyenv)==null||r.close(),this.pyenv=void 0}async onRunCode(){var e;this.canExecute&&(this.pyenv||await this.toggleConnection(),(e=this.pyenv)==null||e.execCode(this.model.getValue()))}getLanguage(){var e;return(e=this.model.getLanguageId())==null?void 0:e.toLowerCase()}renderToolbar(){return this.canExecute?i`
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
        `:i``}async toggleConnection(){if(this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.model.getLanguageId()!=="python"){C.error("Language not supported: "+this.model.getLanguageId());return}this.pyenv=new E;const e=await v.getWorkspace();await this.pyenv.init(e)}render(){return i`
            <style>
                ${m}
            </style>
            <div class="monaco-editor-container" ${g(this.editorRef)}>
            </div>
        `}};a.styles=k`
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
    `;s([l({attribute:!1})],a.prototype,"input",2);s([l()],a.prototype,"readOnly",2);s([h()],a.prototype,"canExecute",2);s([h()],a.prototype,"pyenv",2);a=s([x("k-monaco-editor")],a);export{a as KMonacoEditor};
