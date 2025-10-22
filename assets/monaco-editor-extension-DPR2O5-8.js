import{U as p,e as l,s as y}from"./editor.main-V90s_O0y.js";import{e as f,w as g,f as v,d as w,b as k,x as d,F as x,a as W,n as h,c as m,t as C}from"./index-DUZ9xzhO.js";import{e as E,t as u,c as $,P as j,i as P}from"./main-C3Mn2iI8.js";function R(e){return new Worker("/assets/editor.worker-BKDaejSB.js",{type:"module",name:e==null?void 0:e.name})}function D(e){return new Worker("/assets/json.worker-bnpFxRku.js",{type:"module",name:e==null?void 0:e.name})}function I(e){return new Worker("/assets/css.worker-BAVIDzD3.js",{type:"module",name:e==null?void 0:e.name})}function O(e){return new Worker("/assets/html.worker-De8bSgst.js",{type:"module",name:e==null?void 0:e.name})}function _(e){return new Worker("/assets/ts.worker-8yPRNxAu.js",{type:"module",name:e==null?void 0:e.name})}var b=Object.defineProperty,L=Object.getOwnPropertyDescriptor,s=(e,t,r,o)=>{for(var n=o>1?void 0:o?L(t,r):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&b(t,r,n),n};self.MonacoEnvironment={getWorker(e,t){return t==="json"?new D:t==="css"||t==="scss"||t==="less"?new I:t==="html"||t==="handlebars"||t==="razor"?new O:t==="typescript"||t==="javascript"?new _:new R}};P.registerEditorInputHandler({canHandle:e=>e instanceof x,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),icon:"file-pen",noOverflow:!1,state:{}};return t.widgetFactory=()=>d`
            <k-monaco-editor .input=${t}></k-monaco-editor>`,t}});let a=class extends E{constructor(){super(...arguments),this.readOnly=!1,this.editorRef=f(),this.canExecute=!1,this.chatContext={history:[]}}async doInitUI(){const e=this.input.data,t=await e.getContents(),r=this.editorRef.value,o=p.file(e.getName());this.model=l.createModel(t,void 0,o),this.editor=l.create(r,{theme:"vs-dark",automaticLayout:!1}),this.model.onDidChangeContent(n=>{this.readOnly||this.markDirty(!0)}),this.editor.setModel(this.model),this.canExecute=e.getName().endsWith(".py")}getEditor(){return this.editor}save(){var t;const e=this.model.getValue();(t=this.input)==null||t.data.saveContents(e),this.markDirty(!1)}doClose(){var e,t,r;(e=this.model)==null||e.dispose(),(t=this.editor)==null||t.dispose(),this.model=void 0,this.editor=void 0,(r=this.pyenv)==null||r.close(),this.pyenv=void 0}async onRunCode(){var e;this.canExecute&&(this.pyenv||await this.toggleConnection(),u("Executing Python code..."),(e=this.pyenv)==null||e.execCode(this.model.getValue()),u("Executed Python code!"))}getLanguage(){var e;return(e=this.model.getLanguageId())==null?void 0:e.toLowerCase()}async toggleConnection(){if(this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.model.getLanguageId()!=="python"){$("Language not supported: "+this.model.getLanguageId());return}this.pyenv=new j;const e=await g.getWorkspace();await this.pyenv.init(e)}render(){return d`
            <style>
                ${y}
            </style>
            ${v(this.canExecute,()=>d`
                <k-toolbar>
                    <wa-button @click=${this.onRunCode} title="Run code"
                               ?disabled="${!this.canExecute}" appearance="plain" size="small">
                        <wa-icon name="play"></wa-icon>
                    </wa-button>
                    <wa-button @click=${this.toggleConnection}
                               style="${k({color:this.pyenv?"var(--wa-color-success-fill-loud)":"var(--wa-color-danger-fill-loud)"})}"
                               title="(Re)Connect to execution environment"
                               ?disabled="${!this.canExecute}"
                               appearance="plain" size="small">
                        <wa-icon name="circle"></wa-icon>
                    </wa-button>
                </k-toolbar>
            `)}
            <div class="monaco-editor-container" ${w(this.editorRef)}>
            </div>
        `}};a.styles=W`
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
    `;s([h({attribute:!1})],a.prototype,"input",2);s([h()],a.prototype,"readOnly",2);s([m()],a.prototype,"canExecute",2);s([m()],a.prototype,"pyenv",2);a=s([C("k-monaco-editor")],a);export{a as KMonacoEditor};
