import{Y as z,Z as O,$ as A,a0 as S,a1 as b,a2 as y,a3 as $,a4 as _,a5 as P,F as D,w as R,x as h,o as T,e as j,d as H,b as L,a as q,n as F,c as k,t as N}from"./index-BWCrRnvf.js";import{d as U,e as E,P as B,m as I,f as V}from"./main-Dy0maaU_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=(e,t,a)=>{const l=new Map;for(let o=t;o<=a;o++)l.set(e[o],o);return l},J=z(class extends O{constructor(e){if(super(e),e.type!==A.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let l;a===void 0?a=t:t!==void 0&&(l=t);const o=[],n=[];let i=0;for(const r of e)o[i]=l?l(r,i):i,n[i]=a(r,i),i++;return{values:n,keys:o}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,l]){const o=S(e),{values:n,keys:i}=this.dt(t,a,l);if(!Array.isArray(o))return this.ut=i,n;const r=this.ut??(this.ut=[]),u=[];let m,v,s=0,d=o.length-1,c=0,p=n.length-1;for(;s<=d&&c<=p;)if(o[s]===null)s++;else if(o[d]===null)d--;else if(r[s]===i[c])u[c]=b(o[s],n[c]),s++,c++;else if(r[d]===i[p])u[p]=b(o[d],n[p]),d--,p--;else if(r[s]===i[p])u[p]=b(o[s],n[p]),y(e,u[p+1],o[s]),s++,p--;else if(r[d]===i[c])u[c]=b(o[d],n[c]),y(e,o[s],o[d]),d--,c++;else if(m===void 0&&(m=M(i,c,p),v=M(r,s,d)),m.has(r[s]))if(m.has(r[d])){const f=v.get(i[c]),C=f!==void 0?o[f]:null;if(C===null){const x=y(e,o[s]);b(x,n[c]),u[c]=x}else u[c]=b(C,n[c]),y(e,o[s],C),o[f]=null;c++}else $(o[d]),d--;else $(o[s]),s++;for(;c<=p;){const f=y(e,u[p+1]);b(f,n[c]),u[c++]=f}for(;s<=d;){const f=o[s++];f!==null&&$(f)}return this.ut=i,P(e,u),_}});var W=Object.defineProperty,K=Object.getOwnPropertyDescriptor,g=(e,t,a,l)=>{for(var o=l>1?void 0:l?K(t,a):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(l?i(t,a,o):i(o))||o);return l&&o&&W(t,a,o),o};let w=class extends U{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.editingMarkdownCells=new Set,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0)}async save(){if(!(!this.notebook||!this.input))try{this.monacoEditors.forEach((a,l)=>{const o=this.notebook.cells[l];o&&o.cell_type==="code"&&(o.source=this.stringToSourceArray(a.getValue()))});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}async doAfterUI(){const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(a){console.error("Failed to parse notebook:",a),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}this.setupThemeObserver()}setupThemeObserver(){const e=document.documentElement;let t=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const a=this.getMonacoTheme();a!==t&&(t=a,E.setTheme(a))}),this.themeObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}stringToSourceArray(e){if(!e)return[""];const t=e.split(`
`).map(a=>a+`
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async initPyodide(){if(!this.pyenv){this.pyenv=new B;const e=await R.getWorkspace();e&&(await this.pyenv.init(e),this.pyConnected=!0)}}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type==="code"){this.executingCells.add(e),this.requestUpdate();try{await this.initPyodide();const a=this.monacoEditors.get(e),l=a?a.getValue():this.getCellSource(t),o=await this.pyenv.execCode(l),n=[];if(o&&typeof o=="object"&&"console"in o){const r=o.console;if(Array.isArray(r)&&r.length>0){const u=r.filter(m=>m&&m.trim());u.length>0&&n.push(...u)}}const i=o&&typeof o=="object"?o.result:o;if(i!=null&&String(i)!=="undefined"){const r=String(i);r&&r!=="undefined"&&n.push(r)}this.cellOutputs.set(e,{type:"execute_result",data:n.length>0?n.join(`
`):"(no output)"})}catch(a){this.cellOutputs.set(e,{type:"error",data:String(a)})}finally{this.executingCells.delete(e),this.requestUpdate()}}}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const l=t.target.value;if(this.notebook&&this.notebook.cells[e]){const o=this.notebook.cells[e],n=this.getCellSource(o);o.source=this.stringToSourceArray(l),n!==l&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const a=this.getCellSource(e);if(this.editingMarkdownCells.has(t))return h`
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
                            @click=${n=>{var r;const i=(r=n.target.closest(".markdown-cell"))==null?void 0:r.querySelector("textarea");i&&this.saveMarkdownEdit(t,{target:i})}}
                            title="Save changes">
                            <wa-icon name="check"></wa-icon>
                        </wa-button>
                    </div>
                    <textarea 
                        class="markdown-editor"
                        .value=${a}
                        @blur=${n=>this.saveMarkdownEdit(t,n)}
                        placeholder="Enter markdown..."></textarea>
                </div>
            `;const o=I.parse(a);return h`
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
        `}renderCodeCell(e,t){const a=this.cellOutputs.get(t),l=this.executingCells.has(t);this.cellRefs.has(t)||this.cellRefs.set(t,j());const o=this.cellRefs.get(t);return h`
            <div class="cell code-cell ${l?"executing":""}">
                <div class="cell-header">
                    <span class="cell-label">
                        ${l?h`
                            In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${l}>
                                <span class="executing-indicator">*</span>
                            </wa-animation>]:
                        `:h`
                            In [${e.execution_count??" "}]:
                        `}
                    </span>
                    <wa-button 
                        size="small" 
                        appearance="plain"
                        @click=${()=>this.executeCell(t)}
                        ?disabled=${l}
                        title="Run cell">
                        ${l?h`
                            <wa-icon name="spinner" class="spinning"></wa-icon>
                        `:h`
                            <wa-icon name="play"></wa-icon>
                        `}
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
                ${a?h`
                    <div class="cell-output ${a.type==="error"?"output-error":""}">
                        <div class="output-label">Out [${t+1}]:</div>
                        <pre><code>${a.data}</code></pre>
                    </div>
                `:""}
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const a=this.getCellSource(e);return h`
                <div class="cell raw-cell">
                    <pre><code>${a}</code></pre>
                </div>
            `}}async runAll(){if(this.notebook)for(let e=0;e<this.notebook.cells.length;e++)this.notebook.cells[e].cell_type==="code"&&await this.executeCell(e)}async connectPython(){try{await this.initPyodide()}catch(e){console.error("Failed to initialize Pyodide:",e)}}addCellBefore(e,t="code"){this.addCell(e,t)}addCellAfter(e,t="code"){this.addCell(e+1,t)}addCell(e,t="code"){if(!this.notebook)return;const a=this.createCell(t);this.notebook.cells.splice(e,0,a),this.monacoEditors.forEach(l=>l.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0),this.requestUpdate()}deleteCell(e){if(!this.notebook||this.notebook.cells.length<=1)return;const t=this.monacoEditors.get(e);t&&t.dispose(),this.notebook.cells.splice(e,1),this.monacoEditors.forEach(a=>a.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.cleanupCellOutputs(),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.markDirty(!0),this.requestUpdate()}cleanupCellOutputs(){if(!this.notebook)return;const e=new Set(this.notebook.cells.map((a,l)=>l));Array.from(this.cellOutputs.keys()).forEach(a=>{e.has(a)||this.cellOutputs.delete(a)})}getMonacoTheme(){const e=document.documentElement;return e.classList.contains("wa-dark")?"vs-dark":e.classList.contains("wa-light")?"vs":"vs-dark"}updated(e){super.updated(e),this.notebook&&this.notebook.cells&&this.notebook.cells.forEach((t,a)=>{if(t.cell_type==="code"){const l=this.cellRefs.get(a);if(l&&l.value&&!this.monacoEditors.has(a)){const o=l.value,n=this.getCellSource(t),i=n.split(`
`).length,r=19,u=10,m=100,v=Math.max(m,i*r+u);o.style.height=`${v}px`;const s=E.create(o,{value:n,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});s.onDidContentSizeChange(()=>{const d=s.getContentHeight();o.style.height=`${Math.max(m,d+u)}px`,s.layout()}),s.onDidChangeModelContent(()=>{const d=s.getValue(),c=this.getCellSource(t);d!==c&&this.markDirty(!0)}),this.monacoEditors.set(a,s)}}})}render(){return this.notebook?h`
            <style>
                ${V}
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
                    ${J(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
                </div>
            </wa-scroller>
        `:h`<div class="loading">Loading notebook...</div>`}};w.styles=q`
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
            transition: all 0.3s ease;
        }
        
        .code-cell.executing {
            border-left: 4px solid var(--wa-color-primary-500);
            box-shadow: 0 0 0 2px var(--wa-color-primary-500, rgba(59, 130, 246, 0.3));
            animation: pulse-cell 2s ease-in-out infinite;
        }
        
        @keyframes pulse-cell {
            0%, 100% {
                box-shadow: 0 0 0 2px var(--wa-color-primary-500, rgba(59, 130, 246, 0.3));
                opacity: 1;
            }
            50% {
                box-shadow: 0 0 0 4px var(--wa-color-primary-500, rgba(59, 130, 246, 0.5));
                opacity: 0.95;
            }
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
        
        .executing-indicator {
            display: inline-block;
            color: var(--wa-color-primary-500);
            font-weight: bold;
            font-size: 1.2em;
        }
        
        .spinning {
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
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
    `;g([F({attribute:!1})],w.prototype,"input",2);g([k()],w.prototype,"notebook",2);g([k()],w.prototype,"cellOutputs",2);g([k()],w.prototype,"executingCells",2);g([k()],w.prototype,"pyenv",2);g([k()],w.prototype,"pyConnected",2);g([k()],w.prototype,"editingMarkdownCells",2);w=g([N("k-notebook-editor")],w);const G=({editorRegistry:e})=>{e.registerEditorInputHandler({canHandle:t=>t instanceof D&&t.getName().toLowerCase().endsWith(".ipynb"),handle:async t=>{const a={title:t.getName(),data:t,key:t.getName(),icon:"book",noOverflow:!0,state:{}};return a.widgetFactory=()=>h`
                <k-notebook-editor .input=${a}></k-notebook-editor>`,a},ranking:100})};export{w as KNotebookEditor,G as default};
