import{Z as y,$ as h,a1 as u,s as k,x as l,u as v,q as g,ae as m,z as P,A as w,ap as C,ax as d,an as b,w as x,X as E,a0 as W}from"./index-Bz1SaEj3.js";import{U as L,e as p,m as R}from"./editor.main-BQC7qDWR.js";import{pythonPackageManagerService as $}from"./package-manager-extension-5ffK1nv3-DbWYkcl0.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.LTSJC6DR-BCCP1Gxs.js";function I(e){return new Worker("/assets/editor.worker-BDzEcYpU.js",{type:"module",name:e?.name})}function S(e){return new Worker("/assets/json.worker-CbPvaBPT.js",{type:"module",name:e?.name})}function q(e){return new Worker("/assets/css.worker-BL6kSyU1.js",{type:"module",name:e?.name})}function M(e){return new Worker("/assets/html.worker-BJUDQ4P_.js",{type:"module",name:e?.name})}function j(e){return new Worker("/assets/ts.worker-PWN95GIA.js",{type:"module",name:e?.name})}const N=`**Python Programming Assistant:**

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

`,O=`**JavaScript Programming Assistant:**

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

`;var _=Object.defineProperty,J=Object.getOwnPropertyDescriptor,c=(e,t,n,i)=>{for(var a=i>1?void 0:i?J(t,n):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(i?o(t,n,a):o(a))||a);return i&&a&&_(t,n,a),a};let s=class extends P{constructor(){super(...arguments),this.readOnly=!1,this.editorRef=w(),this.canExecute=!1,this.requiredPackages=[]}doBeforeUI(){const e=this.input.data;this.canExecute=e.getName().endsWith(".py")}updated(e){super.updated(e),(e.has("canExecute")||e.has("pyenv"))&&this.updateToolbar()}async doInitUI(){const e=this.input.data,t=await e.getContents(),n=this.editorRef.value,i=L.file(e.getName());this.model=p.createModel(t,void 0,i),this.editor=p.create(n,{theme:"vs-dark",automaticLayout:!1}),this.model.onDidChangeContent(a=>{this.readOnly||this.markDirty(!0)}),this.editor.setModel(this.model),this.canExecute&&(this.requiredPackages=this.parsePackagesFromContent(t))}getEditor(){return this.editor}save(){const e=this.model.getValue();this.input?.data.saveContents(e),this.markDirty(!1)}doClose(){this.model?.dispose(),this.editor?.dispose(),this.model=void 0,this.editor=void 0,this.pyenv?.close(),this.pyenv=void 0}async onRunCode(){this.canExecute&&(this.pyenv||await this.toggleConnection(),this.pyenv?.execCode(this.model.getValue()))}getLanguage(){return this.model?.getLanguageId()?.toLowerCase()||null}getContent(){return this.model?this.model.getValue():null}getSelection(){if(!this.editor||!this.model)return null;try{const e=this.editor.getSelection();return!e||e.isEmpty()?null:this.model.getValueInRange(e)||null}catch{return null}}getSnippet(e=5){if(!this.editor||!this.model)return null;try{const t=this.editor.getPosition();if(!t)return null;(isNaN(e)||e<0)&&(e=5);const n=t.lineNumber,i=this.model.getLineCount(),a=Math.max(1,n-e),r=Math.min(i,n+e);return{snippet:this.model.getValueInRange({startLineNumber:a,startColumn:1,endLineNumber:r,endColumn:this.model.getLineMaxColumn(r)}),cursorLine:n}}catch{return null}}getFilePath(){return this.input?.data?.getWorkspacePath()||null}renderToolbar(){return this.canExecute?l`
            <wa-button @click=${()=>this.onRunCode()} title="Run code"
                       ?disabled="${!this.canExecute}" appearance="plain" size="small">
                <wa-icon name="play" label="Run code"></wa-icon>
            </wa-button>
            <wa-button @click=${()=>this.toggleConnection()}
                       style="${C({color:this.pyenv?"var(--wa-color-success-fill-loud)":"var(--wa-color-danger-fill-loud)"})}"
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
        `:l``}async toggleConnection(){if(this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.model.getLanguageId()!=="python"){d.error("Language not supported: "+this.model.getLanguageId());return}this.pyenv=new b;const e=await x.getWorkspace();if(await this.pyenv.init(e),this.requiredPackages.length>0)try{await this.pyenv.loadPackages(this.requiredPackages)}catch(t){d.error("Failed to load required packages: "+String(t))}}parsePackagesFromContent(e){const t=e.split(`
`),n=/^#\s*@gs-packages:\s*(.+)$/i;for(const i of t){const a=i.match(n);if(a)return a[1].split(",").map(r=>r.trim()).filter(r=>r.length>0)}return[]}updatePackagesInContent(){if(!this.model)return;const e=this.model.getValue(),t=e.split(`
`),n=/^#\s*@gs-packages:/i;let i=-1;for(let o=0;o<t.length;o++)if(n.test(t[o])){i=o;break}const a=this.requiredPackages.length>0?`# @gs-packages: ${this.requiredPackages.join(", ")}`:null;if(a)if(i>=0)t[i]=a;else{const o=t[0]?.startsWith("#!")?1:0;t.splice(o,0,a)}else i>=0&&t.splice(i,1);const r=t.join(`
`);r!==e&&this.model.setValue(r)}openPackageManager(){$.showPackageManager({packages:this.requiredPackages,pyenv:this.pyenv,onPackageAdded:e=>{this.requiredPackages.includes(e)||(this.requiredPackages=[...this.requiredPackages,e],this.updatePackagesInContent())},onPackageRemoved:e=>{this.requiredPackages=this.requiredPackages.filter(t=>t!==e),this.updatePackagesInContent()}})}render(){return l`
            <style>
                ${R}
            </style>
            <div class="monaco-editor-container" ${E(this.editorRef)}>
            </div>
        `}};s.styles=y`
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
    `;c([h({attribute:!1})],s.prototype,"input",2);c([h()],s.prototype,"readOnly",2);c([u()],s.prototype,"canExecute",2);c([u()],s.prototype,"pyenv",2);c([u()],s.prototype,"requiredPackages",2);s=c([W("k-monaco-editor")],s);self.MonacoEnvironment={getWorker(e,t){return t==="json"?new S:t==="css"||t==="scss"||t==="less"?new q:t==="html"||t==="handlebars"||t==="razor"?new M:t==="typescript"||t==="javascript"?new j:new I}};k.registerEditorInputHandler({canHandle:e=>e instanceof v,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return t.widgetFactory=()=>l`
            <k-monaco-editor .input=${t}></k-monaco-editor>`,t}});function f(e,t){const n=e.activeEditor;return n&&typeof n.getEditor=="function"&&typeof n.getLanguage=="function"&&n.getLanguage()===t}const A={priority:50,enhance:async(e,t)=>f(t,"python")?`${e}

${N}`:e},D={priority:50,enhance:async(e,t)=>f(t,"javascript")?`${e}

${O}`:e};g.registerContribution(m,{label:"Python Programming Enhancer",enhancer:A});g.registerContribution(m,{label:"JavaScript Programming Enhancer",enhancer:D});
