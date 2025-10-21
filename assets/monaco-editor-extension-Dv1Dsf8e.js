import{U as p,e as l,s as y}from"./editor.main-C0i0UykO.js";import{e as f,w as g,f as v,d as w,b as k,x as d,F as x,a as W,n as h,c as m,t as C}from"./index-CWmBQ8ze.js";import{e as E,t as u,c as $,P as j,i as P}from"./main-BT42FCUR.js";function R(e){return new Worker("/assets/editor.worker-BKDaejSB.js",{type:"module",name:e==null?void 0:e.name})}function D(e){return new Worker("/assets/json.worker-bnpFxRku.js",{type:"module",name:e==null?void 0:e.name})}function I(e){return new Worker("/assets/css.worker-BAVIDzD3.js",{type:"module",name:e==null?void 0:e.name})}function O(e){return new Worker("/assets/html.worker-De8bSgst.js",{type:"module",name:e==null?void 0:e.name})}function _(e){return new Worker("/assets/ts.worker-8yPRNxAu.js",{type:"module",name:e==null?void 0:e.name})}var b=Object.defineProperty,L=Object.getOwnPropertyDescriptor,s=(e,t,o,a)=>{for(var r=a>1?void 0:a?L(t,o):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(r=(a?c(t,o,r):c(r))||r);return a&&r&&b(t,o,r),r};self.MonacoEnvironment={getWorker(e,t){return t==="json"?new D:t==="css"||t==="scss"||t==="less"?new I:t==="html"||t==="handlebars"||t==="razor"?new O:t==="typescript"||t==="javascript"?new _:new R}};P.registerEditorInputHandler({canHandle:e=>e instanceof x,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),icon:"file-pen",noOverflow:!1,state:{}};return t.widgetFactory=()=>d`
            <k-monaco-editor .input=${t}></k-monaco-editor>`,t}});let n=class extends E{constructor(){super(...arguments),this.readOnly=!1,this.editorRef=f(),this.canExecute=!1,this.chatContext={history:[]}}async doInitUI(){const e=this.input.data,t=await e.getContents(),o=this.editorRef.value,a=p.file(e.getName());this.model=l.createModel(t,void 0,a),this.editor=l.create(o,{theme:"vs-dark",automaticLayout:!1}),this.model.onDidChangeContent(r=>{this.readOnly||this.markDirty(!0)}),this.editor.setModel(this.model),this.canExecute=e.getName().endsWith(".py")}getEditor(){return this.editor}save(){var t;const e=this.model.getValue();(t=this.input)==null||t.data.saveContents(e),this.markDirty(!1)}doClose(){var e;this.model.dispose(),this.editor.dispose(),this.model=void 0,this.editor=void 0,(e=this.pyenv)==null||e.close(),this.pyenv=void 0}async onRunCode(){var e;this.canExecute&&(this.pyenv||await this.toggleConnection(),u("Executing Python code..."),(e=this.pyenv)==null||e.execCode(this.model.getValue()),u("Executed Python code!"))}getLanguage(){var e;return(e=this.model.getLanguageId())==null?void 0:e.toLowerCase()}async toggleConnection(){if(this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.model.getLanguageId()!=="python"){$("Language not supported: "+this.model.getLanguageId());return}this.pyenv=new j;const e=await g.getWorkspace();await this.pyenv.init(e)}render(){return d`
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
        `}};n.styles=W`
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
    `;s([h({attribute:!1})],n.prototype,"input",2);s([h()],n.prototype,"readOnly",2);s([m()],n.prototype,"canExecute",2);s([m()],n.prototype,"pyenv",2);n=s([C("k-monaco-editor")],n);export{n as KMonacoEditor};
