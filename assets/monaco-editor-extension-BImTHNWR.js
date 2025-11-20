import{U as y,e as u,s as v}from"./editor.main-DWtnWMCC.js";import{H as P,x as l,E as k,J as w,u as b,y as g,z as d,A as C}from"./index-BPuo-xLZ.js";import{m as x,g as h,P as E,w as R,x as L,F as q,e as p,C as m}from"./geospace-app-DOqKRYZp.js";import{pythonPackageManagerService as I}from"./package-manager-extension-D33sO317.js";import"./preload-helper-WQhrSmCl.js";const M=`**Python Programming Assistant:**

You are helping with Python code. Python code is executed in the browser using Pyodide.

**Python-Specific Responsibilities:**
- Explain Python code and help debug Python errors
- Help with \`js\` module interaction: calling JavaScript functions from Python and passing data between Python and JavaScript
- Provide Python code examples
- Remember code runs in a browser environment (Pyodide) - be mindful of browser limitations

**Python Environment:**
- Working directory is \`/workspace\` (linked to user's local file system)
- Install packages by adding them to \`requirements.txt\` in the workspace
- Packages in \`requirements.txt\` are automatically installed before code execution

`,S=`**JavaScript Programming Assistant:**

You are helping with JavaScript code. JavaScript code is executed in a worker.

**JavaScript-Specific Focus:**
- Help with JavaScript, OpenLayers usage, and module patterns
- When a user requests a starter module, provide this template:

\`\`\`javascript
export default function ({ map, env, render, html, style, when, ref, createRef, events, settings }) {
    const state = {};
    return () => html\`
        <div>
            <h3>Hello!</h3>
            <button @click=\${() => {}}>Click me</button>
        </div>
    \`;
}
\`\`\`

`;var $=Object.defineProperty,O=Object.getOwnPropertyDescriptor,c=(e,t,n,i)=>{for(var a=i>1?void 0:i?O(t,n):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(a=(i?r(t,n,a):r(a))||a);return i&&a&&$(t,n,a),a};function j(e){let t;switch(e){case"json":t="monaco-editor/esm/vs/language/json/json.worker";break;case"css":case"scss":case"less":t="monaco-editor/esm/vs/language/css/css.worker";break;case"html":case"handlebars":case"razor":t="monaco-editor/esm/vs/language/html/html.worker";break;case"typescript":case"javascript":t="monaco-editor/esm/vs/language/typescript/ts.worker";break;default:t="monaco-editor/esm/vs/editor/editor.worker";break}if(typeof import.meta.resolve=="function")return import.meta.resolve(t);throw new Error("import.meta.resolve is required for Monaco Editor worker loading. This should be available in Vite and other modern bundlers.")}self.MonacoEnvironment={getWorkerUrl(e,t){return j(t)}};L.registerEditorInputHandler({canHandle:e=>e instanceof q,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return t.widgetFactory=()=>l`
            <k-monaco-editor .input=${t}></k-monaco-editor>`,t}});let s=class extends x{constructor(){super(...arguments),this.readOnly=!1,this.editorRef=P(),this.canExecute=!1,this.requiredPackages=[]}doBeforeUI(){const e=this.input.data;this.canExecute=e.getName().endsWith(".py")}updated(e){super.updated(e),(e.has("canExecute")||e.has("pyenv"))&&this.updateToolbar()}async doInitUI(){const e=this.input.data,t=await e.getContents(),n=this.editorRef.value,i=y.file(e.getName());this.model=u.createModel(t,void 0,i),this.editor=u.create(n,{theme:"vs-dark",automaticLayout:!1}),this.model.onDidChangeContent(a=>{this.readOnly||this.markDirty(!0)}),this.editor.setModel(this.model),this.canExecute&&(this.requiredPackages=this.parsePackagesFromContent(t))}getEditor(){return this.editor}save(){const e=this.model.getValue();this.input?.data.saveContents(e),this.markDirty(!1)}doClose(){this.model?.dispose(),this.editor?.dispose(),this.model=void 0,this.editor=void 0,this.pyenv?.close(),this.pyenv=void 0}async onRunCode(){this.canExecute&&(this.pyenv||await this.toggleConnection(),this.pyenv?.execCode(this.model.getValue()))}getLanguage(){return this.model?.getLanguageId()?.toLowerCase()||null}getContent(){return this.model?this.model.getValue():null}getSelection(){if(!this.editor||!this.model)return null;try{const e=this.editor.getSelection();return!e||e.isEmpty()?null:this.model.getValueInRange(e)||null}catch{return null}}getSnippet(e=5){if(!this.editor||!this.model)return null;try{const t=this.editor.getPosition();if(!t)return null;(isNaN(e)||e<0)&&(e=5);const n=t.lineNumber,i=this.model.getLineCount(),a=Math.max(1,n-e),o=Math.min(i,n+e);return{snippet:this.model.getValueInRange({startLineNumber:a,startColumn:1,endLineNumber:o,endColumn:this.model.getLineMaxColumn(o)}),cursorLine:n}}catch{return null}}getFilePath(){return this.input?.data?.getWorkspacePath()||null}renderToolbar(){return this.canExecute?l`
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
        `:l``}async toggleConnection(){if(this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.model.getLanguageId()!=="python"){h.error("Language not supported: "+this.model.getLanguageId());return}this.pyenv=new E;const e=await R.getWorkspace();if(await this.pyenv.init(e),this.requiredPackages.length>0)try{await this.pyenv.loadPackages(this.requiredPackages)}catch(t){h.error("Failed to load required packages: "+String(t))}}parsePackagesFromContent(e){const t=e.split(`
`),n=/^#\s*@gs-packages:\s*(.+)$/i;for(const i of t){const a=i.match(n);if(a)return a[1].split(",").map(o=>o.trim()).filter(o=>o.length>0)}return[]}updatePackagesInContent(){if(!this.model)return;const e=this.model.getValue(),t=e.split(`
`),n=/^#\s*@gs-packages:/i;let i=-1;for(let r=0;r<t.length;r++)if(n.test(t[r])){i=r;break}const a=this.requiredPackages.length>0?`# @gs-packages: ${this.requiredPackages.join(", ")}`:null;if(a)if(i>=0)t[i]=a;else{const r=t[0]?.startsWith("#!")?1:0;t.splice(r,0,a)}else i>=0&&t.splice(i,1);const o=t.join(`
`);o!==e&&this.model.setValue(o)}openPackageManager(){I.showPackageManager({packages:this.requiredPackages,pyenv:this.pyenv,onPackageAdded:e=>{this.requiredPackages.includes(e)||(this.requiredPackages=[...this.requiredPackages,e],this.updatePackagesInContent())},onPackageRemoved:e=>{this.requiredPackages=this.requiredPackages.filter(t=>t!==e),this.updatePackagesInContent()}})}render(){return l`
            <style>
                ${v}
            </style>
            <div class="monaco-editor-container" ${w(this.editorRef)}>
            </div>
        `}};s.styles=b`
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
    `;c([g({attribute:!1})],s.prototype,"input",2);c([g()],s.prototype,"readOnly",2);c([d()],s.prototype,"canExecute",2);c([d()],s.prototype,"pyenv",2);c([d()],s.prototype,"requiredPackages",2);s=c([C("k-monaco-editor")],s);function f(e,t){const n=e.activeEditor;return n&&typeof n.getEditor=="function"&&typeof n.getLanguage=="function"&&n.getLanguage()===t}const N={priority:50,enhance:async(e,t)=>f(t,"python")?`${e}

${M}`:e},_={priority:50,enhance:async(e,t)=>f(t,"javascript")?`${e}

${S}`:e};p.registerContribution(m,{label:"Python Programming Enhancer",enhancer:N});p.registerContribution(m,{label:"JavaScript Programming Enhancer",enhancer:_});export{s as KMonacoEditor};
