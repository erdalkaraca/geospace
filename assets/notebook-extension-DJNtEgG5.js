import{Y as O,Z as _,$ as M,a0 as S,a1 as b,a2 as k,a3 as x,a4 as z,a5 as R,F as P,x as h,w as D,o as U,e as T,d as V,b as q,a as j,n as F,c as g,t as H}from"./index-DRpudhBi.js";import{d as L,e as E,P as N,m as B,f as I}from"./main-BTeV3ONx.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=(e,t,n)=>{const i=new Map;for(let o=t;o<=n;o++)i.set(e[o],o);return i},J=O(class extends _{constructor(e){if(super(e),e.type!==M.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;n===void 0?n=t:t!==void 0&&(i=t);const o=[],l=[];let s=0;for(const a of e)o[s]=i?i(a,s):s,l[s]=n(a,s),s++;return{values:l,keys:o}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){const o=S(e),{values:l,keys:s}=this.dt(t,n,i);if(!Array.isArray(o))return this.ut=s,l;const a=this.ut??(this.ut=[]),u=[];let w,v,r=0,d=o.length-1,c=0,p=l.length-1;for(;r<=d&&c<=p;)if(o[r]===null)r++;else if(o[d]===null)d--;else if(a[r]===s[c])u[c]=b(o[r],l[c]),r++,c++;else if(a[d]===s[p])u[p]=b(o[d],l[p]),d--,p--;else if(a[r]===s[p])u[p]=b(o[r],l[p]),k(e,u[p+1],o[r]),r++,p--;else if(a[d]===s[c])u[c]=b(o[d],l[c]),k(e,o[r],o[d]),d--,c++;else if(w===void 0&&(w=A(s,c,p),v=A(a,r,d)),w.has(a[r]))if(w.has(a[d])){const y=v.get(s[c]),C=y!==void 0?o[y]:null;if(C===null){const $=k(e,o[r]);b($,l[c]),u[c]=$}else u[c]=b(C,l[c]),k(e,o[r],C),o[y]=null;c++}else x(o[d]),d--;else x(o[r]),r++;for(;c<=p;){const y=k(e,u[p+1]);b(y,l[c]),u[c++]=y}for(;r<=d;){const y=o[r++];y!==null&&x(y)}return this.ut=s,R(e,u),z}});var W=Object.defineProperty,K=Object.getOwnPropertyDescriptor,m=(e,t,n,i)=>{for(var o=i>1?void 0:i?K(t,n):t,l=e.length-1,s;l>=0;l--)(s=e[l])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&W(t,n,o),o};let f=class extends L{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.cancelRunAll=!1,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.pyConnected=!1,this.pyVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.monacoEditors.forEach((n,i)=>{const o=this.notebook.cells[i];o&&o.cell_type==="code"&&(o.source=this.stringToSourceArray(n.getValue()))}),this.notebook.cells.forEach((n,i)=>{if(n.cell_type==="code"){const o=this.cellOutputs.get(i);o?o.type==="execute_result"?n.outputs=[{output_type:"execute_result",data:{"text/plain":o.data},execution_count:n.execution_count,metadata:{}}]:o.type==="error"&&(n.outputs=[{output_type:"error",ename:"Error",evalue:o.data,traceback:[o.data]}]):n.outputs=[]}});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}async doAfterUI(){var n;const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(i){console.error("Failed to parse notebook:",i),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if((n=this.notebook)!=null&&n.cells){const i=this.notebook.cells.filter(o=>o.cell_type==="code").map(o=>o.execution_count??0).reduce((o,l)=>Math.max(o,l),0);this.executionCounter=i,this.notebook.cells.forEach((o,l)=>{var s;if(o.cell_type==="code"&&o.outputs&&o.outputs.length>0){const a=o.outputs[0];a.output_type==="execute_result"&&a.data?this.cellOutputs.set(l,{type:"execute_result",data:a.data["text/plain"]||""}):a.output_type==="error"&&this.cellOutputs.set(l,{type:"error",data:a.evalue||((s=a.traceback)==null?void 0:s.join(`
`))||"Unknown error"})}})}this.setupThemeObserver()}setupThemeObserver(){const e=document.documentElement;let t=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const n=this.getMonacoTheme();n!==t&&(t=n,E.setTheme(n))}),this.themeObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}renderCellActions(e,t){return h`
            <div class="cell-actions">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(e,"code")} title="Add code cell before">
                    <wa-icon name="code"></wa-icon><wa-icon name="arrow-up" style="font-size: 0.7em;"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(e,"markdown")} title="Add markdown cell before">
                    <wa-icon name="font"></wa-icon><wa-icon name="arrow-up" style="font-size: 0.7em;"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(e,"code")} title="Add code cell after">
                    <wa-icon name="code"></wa-icon><wa-icon name="arrow-down" style="font-size: 0.7em;"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(e,"markdown")} title="Add markdown cell after">
                    <wa-icon name="font"></wa-icon><wa-icon name="arrow-down" style="font-size: 0.7em;"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.deleteCell(e)} title="Delete cell" ?disabled=${this.notebook.cells.length<=1}>
                    <wa-icon name="trash"></wa-icon>
                </wa-button>
                ${t||""}
            </div>
        `}stringToSourceArray(e){if(!e)return[""];const t=e.split(`
`).map(n=>n+`
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async initPyodide(){if(!this.pyenv){this.pyenv=new N;const e=await D.getWorkspace();if(e){await this.pyenv.init(e),this.pyConnected=!0;try{const t=await this.pyenv.execCode("import sys; sys.version.split()[0]");this.pyVersion=(t==null?void 0:t.result)||"Unknown"}catch(t){console.error("Failed to get Python version:",t),this.pyVersion="Unknown"}}}}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type==="code"){this.executingCells.add(e),this.requestUpdate();try{await this.initPyodide();const n=this.monacoEditors.get(e),i=n?n.getValue():this.getCellSource(t),o=await this.pyenv.execCode(i),l=[];if(o&&typeof o=="object"&&"console"in o){const a=o.console;if(Array.isArray(a)&&a.length>0){const u=a.filter(w=>w&&w.trim());u.length>0&&l.push(...u)}}const s=o&&typeof o=="object"?o.result:o;if(s!=null&&String(s)!=="undefined"){const a=String(s);a&&a!=="undefined"&&l.push(a)}this.cellOutputs.set(e,{type:"execute_result",data:l.length>0?l.join(`
`):"(no output)"}),this.executionCounter++,t.execution_count=this.executionCounter,this.markDirty(!0)}catch(n){this.executingCells.has(e)&&this.cellOutputs.set(e,{type:"error",data:String(n)})}finally{this.executingCells.delete(e),this.requestUpdate()}}}async cancelExecution(e){if(this.pyenv)if(this.pyenv.canInterrupt())this.pyenv.interrupt();else{this.cellOutputs.set(e,{type:"error",data:"Execution cancelled by user (worker terminated - SharedArrayBuffer not available for graceful interrupt)"}),this.executingCells.delete(e),this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0;try{await this.initPyodide()}catch(t){console.error("Failed to reinitialize Python after cancellation:",t)}this.requestUpdate()}}clearAllOutputs(){var e;this.cellOutputs.clear(),this.executionCounter=0,(e=this.notebook)!=null&&e.cells&&this.notebook.cells.forEach(t=>{t.cell_type==="code"&&(t.execution_count=null,t.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async runAllCells(){var e;if((e=this.notebook)!=null&&e.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let t=0;t<this.notebook.cells.length&&!this.cancelRunAll;t++)this.notebook.cells[t].cell_type==="code"&&await this.executeCell(t)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const i=t.target.value;if(this.notebook&&this.notebook.cells[e]){const o=this.notebook.cells[e],l=this.getCellSource(o);o.source=this.stringToSourceArray(i),l!==i&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const n=this.getCellSource(e);if(this.editingMarkdownCells.has(t))return h`
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
                            @click=${s=>{var u;const a=(u=s.target.closest(".markdown-cell"))==null?void 0:u.querySelector("textarea");a&&this.saveMarkdownEdit(t,{target:a})}}
                            title="Save changes">
                            <wa-icon name="check"></wa-icon>
                        </wa-button>
                    </div>
                    <textarea 
                        class="markdown-editor"
                        .value=${n}
                        @blur=${s=>this.saveMarkdownEdit(t,s)}
                        placeholder="Enter markdown..."></textarea>
                </div>
            `;const o=B.parse(n),l=h`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.toggleMarkdownEdit(t)}
                title="Edit markdown">
                <wa-icon name="pencil"></wa-icon>
            </wa-button>
        `;return h`
            <div class="cell markdown-cell" @dblclick=${()=>this.toggleMarkdownEdit(t)}>
                <div class="cell-header">
                    <span class="cell-label"></span>
                    ${this.renderCellActions(t,l)}
                </div>
                <div class="cell-content">
                    ${U(o)}
                </div>
            </div>
        `}renderCodeCell(e,t){const n=this.cellOutputs.get(t),i=this.executingCells.has(t);this.cellRefs.has(t)||this.cellRefs.set(t,T());const o=this.cellRefs.get(t);return h`
            <div class="cell code-cell ${i?"executing":""}">
                <div class="cell-header">
                    <wa-button 
                        size="small" 
                        appearance="plain"
                        @click=${()=>i?this.cancelExecution(t):this.executeCell(t)}
                        title=${i?"Stop execution":"Run cell"}
                        class="run-button-left">
                        ${i?h`
                            <wa-icon name="stop" style="color: var(--wa-color-danger-500);"></wa-icon>
                        `:h`
                            <wa-icon name="play"></wa-icon>
                        `}
                    </wa-button>
                    <span class="cell-label">
                        ${i?h`
                            In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${i}>
                                <span class="executing-indicator">*</span>
                            </wa-animation>]:
                        `:h`
                            In [${e.execution_count??" "}]:
                        `}
                    </span>
                    ${this.renderCellActions(t)}
                </div>
                <div class="cell-input monaco-container" ${V(o)} data-cell-index="${t}"></div>
                ${n?h`
                    <div class="cell-output ${n.type==="error"?"output-error":""}">
                        <div class="output-label">Out [${t+1}]:</div>
                        <pre><code>${n.data}</code></pre>
                    </div>
                `:""}
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const n=this.getCellSource(e);return h`
                <div class="cell raw-cell">
                    <pre><code>${n}</code></pre>
                </div>
            `}}async connectPython(){try{await this.initPyodide()}catch(e){console.error("Failed to initialize Pyodide:",e)}}addCellBefore(e,t="code"){this.addCell(e,t)}addCellAfter(e,t="code"){this.addCell(e+1,t)}addCell(e,t="code"){this.notebook&&(this.notebook.cells.splice(e,0,this.createCell(t)),this.resetCellState())}resetCellState(){this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0),this.requestUpdate()}deleteCell(e){!this.notebook||this.notebook.cells.length<=1||(this.notebook.cells.splice(e,1),this.cleanupCellOutputs(),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.resetCellState())}cleanupCellOutputs(){if(!this.notebook)return;const e=new Set(this.notebook.cells.map((n,i)=>i));Array.from(this.cellOutputs.keys()).forEach(n=>{e.has(n)||this.cellOutputs.delete(n)})}getMonacoTheme(){const e=document.documentElement;return e.classList.contains("wa-dark")?"vs-dark":e.classList.contains("wa-light")?"vs":"vs-dark"}updated(e){super.updated(e),this.notebook&&this.notebook.cells&&this.notebook.cells.forEach((t,n)=>{if(t.cell_type==="code"){const i=this.cellRefs.get(n);if(i&&i.value&&!this.monacoEditors.has(n)){const o=i.value,l=this.getCellSource(t),s=l.split(`
`).length,a=19,u=10,w=100,v=Math.max(w,s*a+u);o.style.height=`${v}px`;const r=E.create(o,{value:l,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});r.onDidContentSizeChange(()=>{const d=r.getContentHeight();o.style.height=`${Math.max(w,d+u)}px`,r.layout()}),r.onDidChangeModelContent(()=>{const d=r.getValue(),c=this.getCellSource(t);d!==c&&this.markDirty(!0)}),this.monacoEditors.set(n,r)}}})}render(){return this.notebook?h`
            <style>
                ${I}
            </style>
            <div class="notebook-toolbar">
                <div class="python-status">
                    <wa-icon 
                        name="circle" 
                        @click=${this.connectPython}
                        style="${q({color:this.pyConnected?"var(--wa-color-green-40)":"var(--wa-color-red-40)",cursor:"pointer"})}"
                        title="${this.pyConnected?"Python Connected":"Python Disconnected - Click to connect"}">
                    </wa-icon>
                    ${this.pyConnected&&this.pyVersion?h`
                        <span class="python-version">Python ${this.pyVersion}</span>
                    `:""}
                </div>
                ${this.isRunningAll?h`
                    <wa-button 
                        size="small" 
                        appearance="plain"
                        @click=${this.cancelAllCells}
                        title="Cancel running all cells">
                        <wa-icon name="stop"></wa-icon>
                        Cancel All
                    </wa-button>
                `:h`
                    <wa-button 
                        size="small" 
                        appearance="plain"
                        @click=${this.runAllCells}
                        title="Run all code cells sequentially">
                        <wa-icon name="play"></wa-icon>
                        Run All
                    </wa-button>
                `}
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${this.clearAllOutputs}
                    title="Clear all outputs and reset execution counter">
                    <wa-icon name="eraser"></wa-icon>
                    Clear Outputs
                </wa-button>
            </div>
            <wa-scroller orientation="vertical" class="notebook-scroller">
                <div class="notebook-cells">
                    ${J(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
                </div>
            </wa-scroller>
        `:h`<div class="loading">Loading notebook...</div>`}};f.styles=j`
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

        .python-status {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .python-version {
            font-size: 0.9rem;
            opacity: 0.8;
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
            gap: 0.15rem;
            align-items: center;
            opacity: 0.5;
            transition: opacity 0.2s;
        }

        .cell-header:hover .cell-actions {
            opacity: 1;
        }

        .markdown-cell {
            cursor: pointer;
            transition: opacity 0.2s;
        }

        .markdown-cell:hover:not(.editing) {
            opacity: 0.9;
        }
        
        .markdown-cell .cell-content {
            padding: 1rem;
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
            justify-content: space-between;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            flex-wrap: nowrap;
        }
        
        .run-button-left {
            margin-right: 0.25rem;
        }

        .cell-label {
            font-family: monospace;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .executing-indicator {
            display: inline-block;
            color: var(--wa-color-primary-500);
            font-weight: bold;
            font-size: 1.2em;
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

        /* Minimal markdown styling - let browser defaults + CSS vars handle the rest */
        .markdown-cell img {
            max-width: 100%;
            height: auto;
        }
        
        .markdown-cell pre {
            overflow-x: auto;
        }
    `;m([F({attribute:!1})],f.prototype,"input",2);m([g()],f.prototype,"notebook",2);m([g()],f.prototype,"cellOutputs",2);m([g()],f.prototype,"executingCells",2);m([g()],f.prototype,"pyenv",2);m([g()],f.prototype,"pyConnected",2);m([g()],f.prototype,"pyVersion",2);m([g()],f.prototype,"editingMarkdownCells",2);m([g()],f.prototype,"executionCounter",2);m([g()],f.prototype,"isRunningAll",2);f=m([H("k-notebook-editor")],f);const G=({editorRegistry:e})=>{e.registerEditorInputHandler({canHandle:t=>t instanceof P&&t.getName().toLowerCase().endsWith(".ipynb"),handle:async t=>{const n={title:t.getName(),data:t,key:t.getName(),icon:"book",noOverflow:!0,state:{}};return n.widgetFactory=()=>h`
                <k-notebook-editor .input=${n}></k-notebook-editor>`,n},ranking:100})};export{f as KNotebookEditor,G as default};
