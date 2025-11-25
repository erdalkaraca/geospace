import{Z as y,$ as m,a1 as p,s as I,x as l,u as v,q as u,ae as h,z as w,A as Z,ap as W,ax as g,an as J,w as C,X as G,a0 as H}from"./index-BgkfMran.js";import{U as f,e as d,m as L}from"./editor.main-BQC7qDWR.js";import{pythonPackageManagerService as R}from"./package-manager-extension-Bb1gA_o0-Dqa3LTk3.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.LTSJC6DR-BCCP1Gxs.js";const P=`**Python Programming Assistant:**

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

`,N=`**JavaScript Programming Assistant:**

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

`;var X=Object.defineProperty,F=Object.getOwnPropertyDescriptor,c=(e,t,a,i)=>{for(var n=i>1?void 0:i?F(t,a):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(n=(i?o(t,a,n):o(n))||n);return i&&n&&X(t,a,n),n};let r=class extends w{constructor(){super(...arguments),this.readOnly=!1,this.editorRef=Z(),this.canExecute=!1,this.requiredPackages=[]}doBeforeUI(){const e=this.input.data;this.canExecute=e.getName().endsWith(".py")}updated(e){super.updated(e),(e.has("canExecute")||e.has("pyenv"))&&this.updateToolbar()}async doInitUI(){const e=this.input.data,t=await e.getContents(),a=this.editorRef.value,i=f.file(e.getName());this.model=d.createModel(t,void 0,i),this.editor=d.create(a,{theme:"vs-dark",automaticLayout:!1}),this.model.onDidChangeContent(n=>{this.readOnly||this.markDirty(!0)}),this.editor.setModel(this.model),this.canExecute&&(this.requiredPackages=this.parsePackagesFromContent(t))}getEditor(){return this.editor}save(){const e=this.model.getValue();this.input?.data.saveContents(e),this.markDirty(!1)}doClose(){this.model?.dispose(),this.editor?.dispose(),this.model=void 0,this.editor=void 0,this.pyenv?.close(),this.pyenv=void 0}async onRunCode(){this.canExecute&&(this.pyenv||await this.toggleConnection(),this.pyenv?.execCode(this.model.getValue()))}getLanguage(){return this.model?.getLanguageId()?.toLowerCase()||null}getContent(){return this.model?this.model.getValue():null}getSelection(){if(!this.editor||!this.model)return null;try{const e=this.editor.getSelection();return!e||e.isEmpty()?null:this.model.getValueInRange(e)||null}catch{return null}}getSnippet(e=5){if(!this.editor||!this.model)return null;try{const t=this.editor.getPosition();if(!t)return null;(isNaN(e)||e<0)&&(e=5);const a=t.lineNumber,i=this.model.getLineCount(),n=Math.max(1,a-e),s=Math.min(i,a+e);return{snippet:this.model.getValueInRange({startLineNumber:n,startColumn:1,endLineNumber:s,endColumn:this.model.getLineMaxColumn(s)}),cursorLine:a}}catch{return null}}getFilePath(){return this.input?.data?.getWorkspacePath()||null}renderToolbar(){return this.canExecute?l`
            <wa-button @click=${()=>this.onRunCode()} title="Run code"
                       ?disabled="${!this.canExecute}" appearance="plain" size="small">
                <wa-icon name="play" label="Run code"></wa-icon>
            </wa-button>
            <wa-button @click=${()=>this.toggleConnection()}
                       style="${W({color:this.pyenv?"var(--wa-color-success-fill-loud)":"var(--wa-color-danger-fill-loud)"})}"
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
        `:l``}async toggleConnection(){if(this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.model.getLanguageId()!=="python"){g.error("Language not supported: "+this.model.getLanguageId());return}this.pyenv=new J;const e=await C.getWorkspace();if(await this.pyenv.init(e),this.requiredPackages.length>0)try{await this.pyenv.loadPackages(this.requiredPackages)}catch(t){g.error("Failed to load required packages: "+String(t))}}parsePackagesFromContent(e){const t=e.split(`
`),a=/^#\s*@gs-packages:\s*(.+)$/i;for(const i of t){const n=i.match(a);if(n)return n[1].split(",").map(s=>s.trim()).filter(s=>s.length>0)}return[]}updatePackagesInContent(){if(!this.model)return;const e=this.model.getValue(),t=e.split(`
`),a=/^#\s*@gs-packages:/i;let i=-1;for(let o=0;o<t.length;o++)if(a.test(t[o])){i=o;break}const n=this.requiredPackages.length>0?`# @gs-packages: ${this.requiredPackages.join(", ")}`:null;if(n)if(i>=0)t[i]=n;else{const o=t[0]?.startsWith("#!")?1:0;t.splice(o,0,n)}else i>=0&&t.splice(i,1);const s=t.join(`
`);s!==e&&this.model.setValue(s)}openPackageManager(){R.showPackageManager({packages:this.requiredPackages,pyenv:this.pyenv,onPackageAdded:e=>{this.requiredPackages.includes(e)||(this.requiredPackages=[...this.requiredPackages,e],this.updatePackagesInContent())},onPackageRemoved:e=>{this.requiredPackages=this.requiredPackages.filter(t=>t!==e),this.updatePackagesInContent()}})}render(){return l`
            <style>
                ${L}
            </style>
            <div class="monaco-editor-container" ${G(this.editorRef)}>
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
    `;c([m({attribute:!1})],r.prototype,"input",2);c([m()],r.prototype,"readOnly",2);c([p()],r.prototype,"canExecute",2);c([p()],r.prototype,"pyenv",2);c([p()],r.prototype,"requiredPackages",2);r=c([H("k-monaco-editor")],r);const S={json:new URL("data:text/javascript;base64,aW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0IHsgSlNPTldvcmtlciB9IGZyb20gJy4vanNvbldvcmtlci5qcyc7CgpzZWxmLm9ubWVzc2FnZSA9ICgpID0+IHsKICBpbml0aWFsaXplKChjdHgsIGNyZWF0ZURhdGEpID0+IHsKICAgIHJldHVybiBuZXcgSlNPTldvcmtlcihjdHgsIGNyZWF0ZURhdGEpOwogIH0pOwp9Owo=",import.meta.url).href,css:new URL("data:text/javascript;base64,aW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0IHsgQ1NTV29ya2VyIH0gZnJvbSAnLi9jc3NXb3JrZXIuanMnOwoKc2VsZi5vbm1lc3NhZ2UgPSAoKSA9PiB7CiAgaW5pdGlhbGl6ZSgoY3R4LCBjcmVhdGVEYXRhKSA9PiB7CiAgICByZXR1cm4gbmV3IENTU1dvcmtlcihjdHgsIGNyZWF0ZURhdGEpOwogIH0pOwp9Owo=",import.meta.url).href,scss:new URL("data:text/javascript;base64,aW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0IHsgQ1NTV29ya2VyIH0gZnJvbSAnLi9jc3NXb3JrZXIuanMnOwoKc2VsZi5vbm1lc3NhZ2UgPSAoKSA9PiB7CiAgaW5pdGlhbGl6ZSgoY3R4LCBjcmVhdGVEYXRhKSA9PiB7CiAgICByZXR1cm4gbmV3IENTU1dvcmtlcihjdHgsIGNyZWF0ZURhdGEpOwogIH0pOwp9Owo=",import.meta.url).href,less:new URL("data:text/javascript;base64,aW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0IHsgQ1NTV29ya2VyIH0gZnJvbSAnLi9jc3NXb3JrZXIuanMnOwoKc2VsZi5vbm1lc3NhZ2UgPSAoKSA9PiB7CiAgaW5pdGlhbGl6ZSgoY3R4LCBjcmVhdGVEYXRhKSA9PiB7CiAgICByZXR1cm4gbmV3IENTU1dvcmtlcihjdHgsIGNyZWF0ZURhdGEpOwogIH0pOwp9Owo=",import.meta.url).href,html:new URL("data:text/javascript;base64,aW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0IHsgSFRNTFdvcmtlciB9IGZyb20gJy4vaHRtbFdvcmtlci5qcyc7CgpzZWxmLm9ubWVzc2FnZSA9ICgpID0+IHsKICBpbml0aWFsaXplKChjdHgsIGNyZWF0ZURhdGEpID0+IHsKICAgIHJldHVybiBuZXcgSFRNTFdvcmtlcihjdHgsIGNyZWF0ZURhdGEpOwogIH0pOwp9Owo=",import.meta.url).href,handlebars:new URL("data:text/javascript;base64,aW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0IHsgSFRNTFdvcmtlciB9IGZyb20gJy4vaHRtbFdvcmtlci5qcyc7CgpzZWxmLm9ubWVzc2FnZSA9ICgpID0+IHsKICBpbml0aWFsaXplKChjdHgsIGNyZWF0ZURhdGEpID0+IHsKICAgIHJldHVybiBuZXcgSFRNTFdvcmtlcihjdHgsIGNyZWF0ZURhdGEpOwogIH0pOwp9Owo=",import.meta.url).href,razor:new URL("data:text/javascript;base64,aW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0IHsgSFRNTFdvcmtlciB9IGZyb20gJy4vaHRtbFdvcmtlci5qcyc7CgpzZWxmLm9ubWVzc2FnZSA9ICgpID0+IHsKICBpbml0aWFsaXplKChjdHgsIGNyZWF0ZURhdGEpID0+IHsKICAgIHJldHVybiBuZXcgSFRNTFdvcmtlcihjdHgsIGNyZWF0ZURhdGEpOwogIH0pOwp9Owo=",import.meta.url).href,typescript:new URL("data:text/javascript;base64,aW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0ICogYXMgdHlwZXNjcmlwdFNlcnZpY2VzIGZyb20gJy4vbGliL3R5cGVzY3JpcHRTZXJ2aWNlcy5qcyc7CmV4cG9ydCB7IHR5cGVzY3JpcHRTZXJ2aWNlcyBhcyB0cyB9OwppbXBvcnQgeyBjcmVhdGUgfSBmcm9tICcuL3RzV29ya2VyLmpzJzsKZXhwb3J0IHsgVHlwZVNjcmlwdFdvcmtlciB9IGZyb20gJy4vdHNXb3JrZXIuanMnOwpleHBvcnQgeyBsaWJGaWxlTWFwIH0gZnJvbSAnLi9saWIvbGliLmpzJzsKCnNlbGYub25tZXNzYWdlID0gKCkgPT4gewogIGluaXRpYWxpemUoKGN0eCwgY3JlYXRlRGF0YSkgPT4gewogICAgcmV0dXJuIGNyZWF0ZShjdHgsIGNyZWF0ZURhdGEpOwogIH0pOwp9OwoKZXhwb3J0IHsgY3JlYXRlLCBpbml0aWFsaXplIH07Cg==",import.meta.url).href,javascript:new URL("data:text/javascript;base64,aW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0ICogYXMgdHlwZXNjcmlwdFNlcnZpY2VzIGZyb20gJy4vbGliL3R5cGVzY3JpcHRTZXJ2aWNlcy5qcyc7CmV4cG9ydCB7IHR5cGVzY3JpcHRTZXJ2aWNlcyBhcyB0cyB9OwppbXBvcnQgeyBjcmVhdGUgfSBmcm9tICcuL3RzV29ya2VyLmpzJzsKZXhwb3J0IHsgVHlwZVNjcmlwdFdvcmtlciB9IGZyb20gJy4vdHNXb3JrZXIuanMnOwpleHBvcnQgeyBsaWJGaWxlTWFwIH0gZnJvbSAnLi9saWIvbGliLmpzJzsKCnNlbGYub25tZXNzYWdlID0gKCkgPT4gewogIGluaXRpYWxpemUoKGN0eCwgY3JlYXRlRGF0YSkgPT4gewogICAgcmV0dXJuIGNyZWF0ZShjdHgsIGNyZWF0ZURhdGEpOwogIH0pOwp9OwoKZXhwb3J0IHsgY3JlYXRlLCBpbml0aWFsaXplIH07Cg==",import.meta.url).href};self.MonacoEnvironment={getWorkerUrl(e,t){return S[t]||new URL("data:text/javascript;base64,aW1wb3J0IHsgaXNXb3JrZXJJbml0aWFsaXplZCB9IGZyb20gJy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKZXhwb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL2NvbW1vbi9pbml0aWFsaXplLmpzJzsKaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuL2VkaXRvci53b3JrZXIuc3RhcnQuanMnOwoKc2VsZi5vbm1lc3NhZ2UgPSAoKSA9PiB7CiAgaWYgKCFpc1dvcmtlckluaXRpYWxpemVkKCkpIHsKICAgIHN0YXJ0KCgpID0+IHsKICAgICAgcmV0dXJuIHt9OwogICAgfSk7CiAgfQp9Owo=",import.meta.url).href}};I.registerEditorInputHandler({canHandle:e=>e instanceof v,handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return t.widgetFactory=()=>l`
            <k-monaco-editor .input=${t}></k-monaco-editor>`,t}});function b(e,t){const a=e.activeEditor;return a&&typeof a.getEditor=="function"&&typeof a.getLanguage=="function"&&a.getLanguage()===t}const k={priority:50,enhance:async(e,t)=>b(t,"python")?`${e}

${P}`:e},B={priority:50,enhance:async(e,t)=>b(t,"javascript")?`${e}

${N}`:e};u.registerContribution(h,{label:"Python Programming Enhancer",enhancer:k});u.registerContribution(h,{label:"JavaScript Programming Enhancer",enhancer:B});
