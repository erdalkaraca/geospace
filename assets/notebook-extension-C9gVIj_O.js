import{Y as z,Z as O,$ as S,a0 as A,a1 as b,a2 as y,a3 as $,a4 as _,a5 as P,F as D,w as R,x as w,o as T,e as j,d as H,b as L,a as N,n as q,c as k,t as F}from"./index-BofjxFF3.js";import{d as U,e as x,P as B,m as V,f as J}from"./main-Ar6HDKDo.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=(e,t,l)=>{const n=new Map;for(let o=t;o<=l;o++)n.set(e[o],o);return n},I=z(class extends O{constructor(e){if(super(e),e.type!==S.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,l){let n;l===void 0?l=t:t!==void 0&&(n=t);const o=[],a=[];let i=0;for(const r of e)o[i]=n?n(r,i):i,a[i]=l(r,i),i++;return{values:a,keys:o}}render(e,t,l){return this.dt(e,t,l).values}update(e,[t,l,n]){const o=A(e),{values:a,keys:i}=this.dt(t,l,n);if(!Array.isArray(o))return this.ut=i,a;const r=this.ut??(this.ut=[]),u=[];let g,v,s=0,d=o.length-1,c=0,h=a.length-1;for(;s<=d&&c<=h;)if(o[s]===null)s++;else if(o[d]===null)d--;else if(r[s]===i[c])u[c]=b(o[s],a[c]),s++,c++;else if(r[d]===i[h])u[h]=b(o[d],a[h]),d--,h--;else if(r[s]===i[h])u[h]=b(o[s],a[h]),y(e,u[h+1],o[s]),s++,h--;else if(r[d]===i[c])u[c]=b(o[d],a[c]),y(e,o[s],o[d]),d--,c++;else if(g===void 0&&(g=M(i,c,h),v=M(r,s,d)),g.has(r[s]))if(g.has(r[d])){const m=v.get(i[c]),C=m!==void 0?o[m]:null;if(C===null){const E=y(e,o[s]);b(E,a[c]),u[c]=E}else u[c]=b(C,a[c]),y(e,o[s],C),o[m]=null;c++}else $(o[d]),d--;else $(o[s]),s++;for(;c<=h;){const m=y(e,u[h+1]);b(m,a[c]),u[c++]=m}for(;s<=d;){const m=o[s++];m!==null&&$(m)}return this.ut=i,P(e,u),_}});var W=Object.defineProperty,K=Object.getOwnPropertyDescriptor,f=(e,t,l,n)=>{for(var o=n>1?void 0:n?K(t,l):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(o=(n?i(t,l,o):i(o))||o);return n&&o&&W(t,l,o),o};let p=class extends U{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.editingMarkdownCells=new Set,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0)}async save(){if(!(!this.notebook||!this.input))try{this.monacoEditors.forEach((l,n)=>{const o=this.notebook.cells[n];o&&o.cell_type==="code"&&(o.source=this.stringToSourceArray(l.getValue()))});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}async doAfterUI(){const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(l){console.error("Failed to parse notebook:",l),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}this.setupThemeObserver()}setupThemeObserver(){const e=document.documentElement;let t=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const l=this.getMonacoTheme();l!==t&&(t=l,x.setTheme(l))}),this.themeObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}stringToSourceArray(e){if(!e)return[""];const t=e.split(`
`).map(l=>l+`
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async initPyodide(){if(!this.pyenv){this.pyenv=new B;const e=await R.getWorkspace();e&&(await this.pyenv.init(e),this.pyConnected=!0)}}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type!=="code")return;this.executingCells.add(e),this.requestUpdate();const l=[],n={log:console.log,info:console.info,error:console.error,warn:console.warn},o=(...a)=>{const i=a.map(r=>{if(typeof r=="object")try{return JSON.stringify(r)}catch{return String(r)}return String(r)}).join(" ");l.push(i),n.log(...a)};console.log=o,console.info=o,console.error=o,console.warn=o;try{await this.initPyodide();const a=this.monacoEditors.get(e),i=a?a.getValue():this.getCellSource(t),r=await this.pyenv.execCode(i),u=[...l];r!=null&&String(r)!=="undefined"&&u.push(String(r)),this.cellOutputs.set(e,{type:"execute_result",data:u.length>0?u.join(`
`):"(no output)"})}catch(a){this.cellOutputs.set(e,{type:"error",data:String(a)})}finally{console.log=n.log,console.info=n.info,console.error=n.error,console.warn=n.warn,this.executingCells.delete(e),this.requestUpdate()}}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const n=t.target.value;if(this.notebook&&this.notebook.cells[e]){const o=this.notebook.cells[e],a=this.getCellSource(o);o.source=this.stringToSourceArray(n),a!==n&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const l=this.getCellSource(e);if(this.editingMarkdownCells.has(t))return w`
                <div class="cell markdown-cell editing">
                    <div class="cell-header">
                        <span class="cell-label">Markdown</span>
                        <wa-button 
                            size="small" 
                            appearance="plain"
                            @click=${()=>this.toggleMarkdownEdit(t)}
                            title="Cancel editing">
                            <wa-icon name="xmark"></wa-icon>
                        </wa-button>
                        <wa-button 
                            size="small" 
                            appearance="plain"
                            @click=${a=>{var r;const i=(r=a.target.closest(".markdown-cell"))==null?void 0:r.querySelector("textarea");i&&this.saveMarkdownEdit(t,{target:i})}}
                            title="Save changes">
                            <wa-icon name="check"></wa-icon>
                        </wa-button>
                    </div>
                    <textarea 
                        class="markdown-editor"
                        .value=${l}
                        @blur=${a=>this.saveMarkdownEdit(t,a)}
                        placeholder="Enter markdown..."></textarea>
                </div>
            `;const o=V.parse(l);return w`
            <div class="cell markdown-cell" @dblclick=${()=>this.toggleMarkdownEdit(t)}>
                <div class="cell-actions">
                    <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(t,"code")} title="Add code cell before">
                        <wa-icon name="plus"></wa-icon> <wa-icon name="code"></wa-icon> ↑
                    </wa-button>
                    <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(t,"markdown")} title="Add markdown cell before">
                        <wa-icon name="plus"></wa-icon> <wa-icon name="font"></wa-icon> ↑
                    </wa-button>
                    <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(t,"code")} title="Add code cell after">
                        <wa-icon name="plus"></wa-icon> <wa-icon name="code"></wa-icon> ↓
                    </wa-button>
                    <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(t,"markdown")} title="Add markdown cell after">
                        <wa-icon name="plus"></wa-icon> <wa-icon name="font"></wa-icon> ↓
                    </wa-button>
                    <wa-button size="small" appearance="plain" @click=${()=>this.deleteCell(t)} title="Delete cell" ?disabled=${this.notebook.cells.length<=1}>
                        <wa-icon name="trash"></wa-icon>
                    </wa-button>
                </div>
                <div class="cell-content">
                    ${T(o)}
                </div>
            </div>
        `}renderCodeCell(e,t){const l=this.cellOutputs.get(t),n=this.executingCells.has(t);this.cellRefs.has(t)||this.cellRefs.set(t,j());const o=this.cellRefs.get(t);return w`
            <div class="cell code-cell">
                <div class="cell-header">
                    <span class="cell-label">In [${e.execution_count??" "}]:</span>
                    <wa-button 
                        size="small" 
                        appearance="plain"
                        @click=${()=>this.executeCell(t)}
                        ?disabled=${n}
                        title="Run cell">
                        <wa-icon name=${n?"spinner":"play"}></wa-icon>
                    </wa-button>
                </div>
                <div class="cell-actions">
                    <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(t,"code")} title="Add code cell before">
                        <wa-icon name="plus"></wa-icon> <wa-icon name="code"></wa-icon> ↑
                    </wa-button>
                    <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(t,"markdown")} title="Add markdown cell before">
                        <wa-icon name="plus"></wa-icon> <wa-icon name="font"></wa-icon> ↑
                    </wa-button>
                    <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(t,"code")} title="Add code cell after">
                        <wa-icon name="plus"></wa-icon> <wa-icon name="code"></wa-icon> ↓
                    </wa-button>
                    <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(t,"markdown")} title="Add markdown cell after">
                        <wa-icon name="plus"></wa-icon> <wa-icon name="font"></wa-icon> ↓
                    </wa-button>
                    <wa-button size="small" appearance="plain" @click=${()=>this.deleteCell(t)} title="Delete cell" ?disabled=${this.notebook.cells.length<=1}>
                        <wa-icon name="trash"></wa-icon>
                    </wa-button>
                </div>
                <div class="cell-input monaco-container" ${H(o)} data-cell-index="${t}"></div>
                ${l?w`
                    <div class="cell-output ${l.type==="error"?"output-error":""}">
                        <div class="output-label">Out [${t+1}]:</div>
                        <pre><code>${l.data}</code></pre>
                    </div>
                `:""}
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const l=this.getCellSource(e);return w`
                <div class="cell raw-cell">
                    <pre><code>${l}</code></pre>
                </div>
            `}}async runAll(){if(this.notebook)for(let e=0;e<this.notebook.cells.length;e++)this.notebook.cells[e].cell_type==="code"&&await this.executeCell(e)}async connectPython(){try{await this.initPyodide()}catch(e){console.error("Failed to initialize Pyodide:",e)}}addCellBefore(e,t="code"){this.addCell(e,t)}addCellAfter(e,t="code"){this.addCell(e+1,t)}addCell(e,t="code"){if(!this.notebook)return;const l=this.createCell(t);this.notebook.cells.splice(e,0,l),this.monacoEditors.forEach(n=>n.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0),this.requestUpdate()}deleteCell(e){if(!this.notebook||this.notebook.cells.length<=1)return;const t=this.monacoEditors.get(e);t&&t.dispose(),this.notebook.cells.splice(e,1),this.monacoEditors.forEach(l=>l.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.cleanupCellOutputs(),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.markDirty(!0),this.requestUpdate()}cleanupCellOutputs(){if(!this.notebook)return;const e=new Set(this.notebook.cells.map((l,n)=>n));Array.from(this.cellOutputs.keys()).forEach(l=>{e.has(l)||this.cellOutputs.delete(l)})}getMonacoTheme(){const e=document.documentElement;return e.classList.contains("wa-dark")?"vs-dark":e.classList.contains("wa-light")?"vs":"vs-dark"}updated(e){super.updated(e),this.notebook&&this.notebook.cells&&this.notebook.cells.forEach((t,l)=>{if(t.cell_type==="code"){const n=this.cellRefs.get(l);if(n&&n.value&&!this.monacoEditors.has(l)){const o=n.value,a=this.getCellSource(t),i=a.split(`
`).length,r=19,u=10,g=100,v=Math.max(g,i*r+u);o.style.height=`${v}px`;const s=x.create(o,{value:a,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});s.onDidContentSizeChange(()=>{const d=s.getContentHeight();o.style.height=`${Math.max(g,d+u)}px`,s.layout()}),s.onDidChangeModelContent(()=>{const d=s.getValue(),c=this.getCellSource(t);d!==c&&this.markDirty(!0)}),this.monacoEditors.set(l,s)}}})}render(){return this.notebook?w`
            <style>
                ${J}
            </style>
            <div class="notebook-toolbar">
                <wa-button 
                    size="small" 
                    @click=${this.runAll}
                    title="Run all cells">
                    <wa-icon name="forward"></wa-icon>
                    Run All
                </wa-button>
                <wa-button 
                    size="small" 
                    @click=${this.connectPython}
                    style="${L({color:this.pyConnected?"var(--wa-color-success-fill-loud)":"var(--wa-color-danger-fill-loud)"})}"
                    title="Connect to Python environment">
                    <wa-icon name="circle"></wa-icon>
                    Python ${this.pyConnected?"Connected":"Disconnected"}
                </wa-button>
            </div>
            <wa-scroller orientation="vertical" class="notebook-scroller">
                <div class="notebook-cells">
                    ${I(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
                </div>
            </wa-scroller>
        `:w`<div class="loading">Loading notebook...</div>`}};p.styles=N`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }

        .notebook-toolbar {
            display: flex;
            gap: 0.5rem;
            padding: 1rem;
            border-radius: 4px;
            flex-shrink: 0;
            z-index: 10;
            opacity: 0.95;
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            box-sizing: border-box;
        }

        .notebook-scroller {
            flex: 1;
            width: 100%;
            min-height: 0;
        }

        .notebook-cells {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
            width: 100%;
            box-sizing: border-box;
        }

        .cell {
            border-radius: 4px;
            overflow: hidden;
            opacity: 0.9;
            position: relative;
        }

        .cell-actions {
            display: flex;
            gap: 0.25rem;
            padding: 0.5rem;
            opacity: 0;
            transition: opacity 0.2s;
            flex-wrap: wrap;
            justify-content: center;
        }

        .cell:hover .cell-actions {
            opacity: 1;
        }

        .markdown-cell {
            padding: 1rem;
            cursor: pointer;
            transition: opacity 0.2s;
        }

        .markdown-cell:hover:not(.editing) {
            opacity: 0.8;
        }

        .markdown-cell.editing {
            cursor: default;
            padding: 0;
        }
        
        .markdown-cell.editing .cell-actions {
            display: none;
        }

        .markdown-cell .cell-content {
            line-height: 1.6;
        }

        .markdown-editor {
            width: 100%;
            min-height: 200px;
            padding: 1rem;
            font-family: monospace;
            font-size: 0.95rem;
            line-height: 1.6;
            border: none;
            outline: none;
            resize: vertical;
            background: transparent;
            color: inherit;
        }

        .code-cell {
            border-left: 3px solid var(--wa-color-primary-500);
        }

        .cell-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
        }

        .cell-label {
            font-family: monospace;
            font-weight: bold;
            flex: 1;
        }

        .cell-input {
            margin: 0;
        }

        .monaco-container {
            min-height: 100px;
            height: auto;
            width: 100%;
        }

        .cell-output {
            padding: 1rem;
        }

        .output-label {
            font-family: monospace;
            font-weight: bold;
            margin-bottom: 0.5rem;
            opacity: 0.7;
        }

        .cell-output pre {
            margin: 0;
            overflow-x: auto;
        }

        .cell-output code {
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
        }

        .output-error {
            border-left: 3px solid var(--wa-color-danger-500);
        }

        .raw-cell {
            padding: 1rem;
        }

        .raw-cell pre {
            margin: 0;
        }

        .loading {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-size: 1.2rem;
        }

        /* Markdown styling */
        .markdown-cell h1 {
            font-size: 2rem;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
        }

        .markdown-cell h2 {
            font-size: 1.5rem;
            margin-top: 0.8rem;
            margin-bottom: 0.4rem;
        }

        .markdown-cell h3 {
            font-size: 1.25rem;
            margin-top: 0.6rem;
            margin-bottom: 0.3rem;
        }

        .markdown-cell p {
            margin: 0.5rem 0;
        }

        .markdown-cell code {
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-family: monospace;
            opacity: 0.9;
        }

        .markdown-cell pre {
            padding: 1rem;
            border-radius: 4px;
            overflow-x: auto;
        }

        .markdown-cell pre code {
            padding: 0;
        }

        .markdown-cell ul, .markdown-cell ol {
            margin: 0.5rem 0;
            padding-left: 2rem;
        }

        .markdown-cell blockquote {
            border-left: 4px solid var(--wa-color-primary-500);
            padding-left: 1rem;
            margin: 1rem 0;
            opacity: 0.8;
        }

        .markdown-cell img {
            max-width: 100%;
            height: auto;
        }

        .markdown-cell table {
            border-collapse: collapse;
            width: 100%;
            margin: 1rem 0;
        }

        .markdown-cell th, .markdown-cell td {
            padding: 0.5rem;
            text-align: left;
        }

        .markdown-cell th {
            font-weight: bold;
            opacity: 0.9;
        }
    `;f([q({attribute:!1})],p.prototype,"input",2);f([k()],p.prototype,"notebook",2);f([k()],p.prototype,"cellOutputs",2);f([k()],p.prototype,"executingCells",2);f([k()],p.prototype,"pyenv",2);f([k()],p.prototype,"pyConnected",2);f([k()],p.prototype,"editingMarkdownCells",2);p=f([F("k-notebook-editor")],p);const G=({editorRegistry:e})=>{e.registerEditorInputHandler({canHandle:t=>t instanceof D&&t.getName().toLowerCase().endsWith(".ipynb"),handle:async t=>{const l={title:t.getName(),data:t,key:t.getName(),icon:"book",noOverflow:!0,state:{}};return l.widgetFactory=()=>w`
                <k-notebook-editor .input=${l}></k-notebook-editor>`,l},ranking:100})};export{p as KNotebookEditor,G as default};
