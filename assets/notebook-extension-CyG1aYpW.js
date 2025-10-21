import{Y as O,Z as _,$ as M,a0 as S,a1 as b,a2 as v,a3 as x,a4 as z,a5 as R,F as P,x as d,w as T,o as U,e as D,d as q,b as V,a as j,n as H,c as g,t as B}from"./index-CWmBQ8ze.js";import{e as F,P as L,m as N}from"./main-ra-59-xe.js";import{e as A,s as K}from"./editor.main-C0i0UykO.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=(e,t,i)=>{const n=new Map;for(let o=t;o<=i;o++)n.set(e[o],o);return n},I=O(class extends _{constructor(e){if(super(e),e.type!==M.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let n;i===void 0?i=t:t!==void 0&&(n=t);const o=[],s=[];let l=0;for(const a of e)o[l]=n?n(a,l):l,s[l]=i(a,l),l++;return{values:s,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,n]){const o=S(e),{values:s,keys:l}=this.dt(t,i,n);if(!Array.isArray(o))return this.ut=l,s;const a=this.ut??(this.ut=[]),u=[];let h,k,r=0,p=o.length-1,c=0,m=s.length-1;for(;r<=p&&c<=m;)if(o[r]===null)r++;else if(o[p]===null)p--;else if(a[r]===l[c])u[c]=b(o[r],s[c]),r++,c++;else if(a[p]===l[m])u[m]=b(o[p],s[m]),p--,m--;else if(a[r]===l[m])u[m]=b(o[r],s[m]),v(e,u[m+1],o[r]),r++,m--;else if(a[p]===l[c])u[c]=b(o[p],s[c]),v(e,o[r],o[p]),p--,c++;else if(h===void 0&&(h=E(l,c,m),k=E(a,r,p)),h.has(a[r]))if(h.has(a[p])){const w=k.get(l[c]),C=w!==void 0?o[w]:null;if(C===null){const $=v(e,o[r]);b($,s[c]),u[c]=$}else u[c]=b(C,s[c]),v(e,o[r],C),o[w]=null;c++}else x(o[p]),p--;else x(o[r]),r++;for(;c<=m;){const w=v(e,u[m+1]);b(w,s[c]),u[c++]=w}for(;r<=p;){const w=o[r++];w!==null&&x(w)}return this.ut=l,R(e,u),z}});var J=Object.defineProperty,W=Object.getOwnPropertyDescriptor,f=(e,t,i,n)=>{for(var o=n>1?void 0:n?W(t,i):t,s=e.length-1,l;s>=0;s--)(l=e[s])&&(o=(n?l(t,i,o):l(o))||o);return n&&o&&J(t,i,o),o};let y=class extends F{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.cancelRunAll=!1,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.pyConnected=!1,this.pyVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.saveEditorContents(),this.notebook.cells.forEach((i,n)=>{if(i.cell_type==="code"){const o=this.cellOutputs.get(n);o?o.type==="execute_result"?i.outputs=[{output_type:"execute_result",data:{"text/plain":o.data},execution_count:i.execution_count,metadata:{}}]:o.type==="error"&&(i.outputs=[{output_type:"error",ename:"Error",evalue:o.data,traceback:[o.data]}]):i.outputs=[]}});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}async doAfterUI(){var i;const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(n){console.error("Failed to parse notebook:",n),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if((i=this.notebook)!=null&&i.cells){const n=this.notebook.cells.filter(o=>o.cell_type==="code").map(o=>o.execution_count??0).reduce((o,s)=>Math.max(o,s),0);this.executionCounter=n,this.notebook.cells.forEach((o,s)=>{var l;if(o.cell_type==="code"&&o.outputs&&o.outputs.length>0){const a=o.outputs[0];a.output_type==="execute_result"&&a.data?this.cellOutputs.set(s,{type:"execute_result",data:a.data["text/plain"]||""}):a.output_type==="error"&&this.cellOutputs.set(s,{type:"error",data:a.evalue||((l=a.traceback)==null?void 0:l.join(`
`))||"Unknown error"})}})}this.setupThemeObserver()}setupThemeObserver(){const e=document.documentElement;let t=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const i=this.getMonacoTheme();i!==t&&(t=i,A.setTheme(i))}),this.themeObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}renderTopActions(e){return d`
            <div class="cell-actions-top">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(e,"code")} title="Add code cell">
                    <wa-icon name="code"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(e,"markdown")} title="Add markdown cell">
                    <wa-icon name="font"></wa-icon>
                </wa-button>
            </div>
        `}renderBottomActions(e){return d`
            <div class="cell-actions-bottom">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(e,"code")} title="Add code cell">
                    <wa-icon name="code"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(e,"markdown")} title="Add markdown cell">
                    <wa-icon name="font"></wa-icon>
                </wa-button>
            </div>
        `}renderHeaderActions(e,t){return d`
            <div class="cell-header-actions">
                ${t||""}
                <wa-button size="small" appearance="plain" @click=${()=>this.deleteCell(e)} title="Delete cell" ?disabled=${this.notebook.cells.length<=1}>
                    <wa-icon name="trash"></wa-icon>
                </wa-button>
            </div>
        `}stringToSourceArray(e){if(!e)return[""];const t=e.split(`
`).map(i=>i+`
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async initPyodide(){if(!this.pyenv){this.pyenv=new L;const e=await T.getWorkspace();if(e){await this.pyenv.init(e),this.pyConnected=!0;try{const t=await this.pyenv.execCode("import sys; sys.version.split()[0]");this.pyVersion=(t==null?void 0:t.result)||"Unknown"}catch(t){console.error("Failed to get Python version:",t),this.pyVersion="Unknown"}}}}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type==="code"){this.executingCells.add(e),this.requestUpdate();try{await this.initPyodide();const i=this.monacoEditors.get(e),n=i?i.getValue():this.getCellSource(t),o=await this.pyenv.execCode(n),s=[];if(o&&typeof o=="object"&&"console"in o){const a=o.console;if(Array.isArray(a)&&a.length>0){const u=a.filter(h=>h&&h.trim());u.length>0&&s.push(...u)}}const l=o&&typeof o=="object"?o.result:o;if(l!=null&&String(l)!=="undefined"){const a=String(l);a&&a!=="undefined"&&s.push(a)}this.cellOutputs.set(e,{type:"execute_result",data:s.length>0?s.join(`
`):"(no output)"}),this.executionCounter++,t.execution_count=this.executionCounter,this.markDirty(!0)}catch(i){this.executingCells.has(e)&&this.cellOutputs.set(e,{type:"error",data:String(i)})}finally{this.executingCells.delete(e),this.requestUpdate()}}}async cancelExecution(e){if(this.pyenv)if(this.pyenv.canInterrupt())this.pyenv.interrupt();else{this.cellOutputs.set(e,{type:"error",data:"Execution cancelled by user (worker terminated - SharedArrayBuffer not available for graceful interrupt)"}),this.executingCells.delete(e),this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0;try{await this.initPyodide()}catch(t){console.error("Failed to reinitialize Python after cancellation:",t)}this.requestUpdate()}}clearAllOutputs(){var e;this.cellOutputs.clear(),this.executionCounter=0,(e=this.notebook)!=null&&e.cells&&this.notebook.cells.forEach(t=>{t.cell_type==="code"&&(t.execution_count=null,t.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async restartKernel(){if(this.pyenv)try{this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0,this.requestUpdate(),await this.initPyodide(),this.requestUpdate()}catch(e){console.error("Failed to restart kernel:",e)}}async runAllCells(){var e;if((e=this.notebook)!=null&&e.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let t=0;t<this.notebook.cells.length&&!this.cancelRunAll;t++)this.notebook.cells[t].cell_type==="code"&&await this.executeCell(t)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const n=t.target.value;if(this.notebook&&this.notebook.cells[e]){const o=this.notebook.cells[e],s=this.getCellSource(o);o.source=this.stringToSourceArray(n),s!==n&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const i=this.getCellSource(e),n=!i||i.trim()==="";if(this.editingMarkdownCells.has(t))return d`
                <div class="cell-wrapper">
                    ${this.renderTopActions(t)}
                    <div class="cell markdown-cell editing">
                        <div class="cell-header">
                            <span class="cell-label">Markdown</span>
                            <div class="markdown-edit-buttons">
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
                                    @click=${a=>{var h;const u=(h=a.target.closest(".markdown-cell"))==null?void 0:h.querySelector("textarea");u&&this.saveMarkdownEdit(t,{target:u})}}
                                    title="Save changes">
                                    <wa-icon name="check"></wa-icon>
                                </wa-button>
                            </div>
                        </div>
                        <textarea 
                            class="markdown-editor"
                            .value=${i}
                            @blur=${a=>this.saveMarkdownEdit(t,a)}
                            placeholder="Enter markdown content here... (# for headings, ** for bold, etc.)"></textarea>
                    </div>
                    ${this.renderBottomActions(t)}
                </div>
            `;const s=N.parse(i),l=d`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.toggleMarkdownEdit(t)}
                title="Edit markdown">
                <wa-icon name="pencil"></wa-icon>
            </wa-button>
        `;return d`
            <div class="cell-wrapper">
                ${this.renderTopActions(t)}
                <div class="cell markdown-cell ${n?"empty":""}" @dblclick=${()=>this.toggleMarkdownEdit(t)}>
                    <div class="cell-header">
                        <span class="cell-label"></span>
                        ${this.renderHeaderActions(t,l)}
                    </div>
                    <div class="cell-content">
                        ${n?d`
                            <div class="markdown-placeholder">
                                <wa-icon name="font"></wa-icon>
                                <span>Double-click or click the pencil icon to edit markdown</span>
                            </div>
                        `:U(s)}
                    </div>
                </div>
                ${this.renderBottomActions(t)}
            </div>
        `}renderCodeCell(e,t){const i=this.cellOutputs.get(t),n=this.executingCells.has(t);this.cellRefs.has(t)||this.cellRefs.set(t,D());const o=this.cellRefs.get(t),s=d`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>n?this.cancelExecution(t):this.executeCell(t)}
                title=${n?"Stop execution":"Run cell"}
                class="run-button-left">
                ${n?d`
                    <wa-icon name="stop" style="color: var(--wa-color-danger-500);"></wa-icon>
                `:d`
                    <wa-icon name="play"></wa-icon>
                `}
            </wa-button>
        `;return d`
            <div class="cell-wrapper">
                ${this.renderTopActions(t)}
                <div class="cell code-cell ${n?"executing":""}">
                    <div class="cell-header">
                        ${s}
                        <span class="cell-label">
                            ${n?d`
                                In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${n}>
                                    <span class="executing-indicator">*</span>
                                </wa-animation>]:
                            `:d`
                                In [${e.execution_count??" "}]:
                            `}
                        </span>
                        ${this.renderHeaderActions(t)}
                    </div>
                    <div class="cell-input monaco-container" ${q(o)} data-cell-index="${t}"></div>
                    ${i?d`
                        <div class="cell-output ${i.type==="error"?"output-error":""}">
                            <div class="output-label">Out [${t+1}]:</div>
                            <pre><code>${i.data}</code></pre>
                        </div>
                    `:""}
                </div>
                ${this.renderBottomActions(t)}
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const i=this.getCellSource(e);return d`
                <div class="cell raw-cell">
                    <pre><code>${i}</code></pre>
                </div>
            `}}async connectPython(){try{await this.initPyodide()}catch(e){console.error("Failed to initialize Pyodide:",e)}}addCellBefore(e,t="code"){this.addCell(e,t)}addCellAfter(e,t="code"){this.addCell(e+1,t)}addCell(e,t="code"){this.notebook&&(this.saveEditorContents(),this.notebook.cells.splice(e,0,this.createCell(t)),t==="markdown"&&this.editingMarkdownCells.add(e),this.resetCellState())}saveEditorContents(){this.monacoEditors.forEach((e,t)=>{const i=this.notebook.cells[t];i&&i.cell_type==="code"&&(i.source=this.stringToSourceArray(e.getValue()))})}resetCellState(){this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0),this.requestUpdate()}deleteCell(e){!this.notebook||this.notebook.cells.length<=1||(this.saveEditorContents(),this.notebook.cells.splice(e,1),this.cleanupCellOutputs(),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.resetCellState())}cleanupCellOutputs(){if(!this.notebook)return;const e=new Set(this.notebook.cells.map((i,n)=>n));Array.from(this.cellOutputs.keys()).forEach(i=>{e.has(i)||this.cellOutputs.delete(i)})}getMonacoTheme(){const e=document.documentElement;return e.classList.contains("wa-dark")?"vs-dark":e.classList.contains("wa-light")?"vs":"vs-dark"}updated(e){super.updated(e),this.notebook&&this.notebook.cells&&this.notebook.cells.forEach((t,i)=>{if(t.cell_type==="code"){const n=this.cellRefs.get(i);if(n&&n.value&&!this.monacoEditors.has(i)){const o=n.value,s=this.getCellSource(t),l=s.split(`
`).length,a=19,u=10,h=100,k=Math.max(h,l*a+u);o.style.height=`${k}px`;const r=A.create(o,{value:s,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});r.onDidContentSizeChange(()=>{const p=r.getContentHeight();o.style.height=`${Math.max(h,p+u)}px`,r.layout()}),r.onDidChangeModelContent(()=>{const p=r.getValue(),c=this.getCellSource(t);p!==c&&this.markDirty(!0)}),this.monacoEditors.set(i,r)}}})}render(){return this.notebook?d`
            <style>
                ${K}
            </style>
            <div class="notebook-toolbar">
                <div class="python-status">
                    <wa-icon 
                        name="circle" 
                        @click=${this.connectPython}
                        style="${V({color:this.pyConnected?"var(--wa-color-green-40)":"var(--wa-color-red-40)",cursor:"pointer"})}"
                        title="${this.pyConnected?"Python Connected":"Python Disconnected - Click to connect"}">
                    </wa-icon>
                    ${this.pyConnected&&this.pyVersion?d`
                        <span class="python-version">Python ${this.pyVersion}</span>
                    `:""}
                </div>
                ${this.isRunningAll?d`
                    <wa-button 
                        size="small" 
                        appearance="plain"
                        @click=${this.cancelAllCells}
                        title="Cancel running all cells">
                        <wa-icon name="stop"></wa-icon>
                        Cancel All
                    </wa-button>
                `:d`
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
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${this.restartKernel}
                    title="Restart Python kernel (clears all variables and state)"
                    ?disabled=${!this.pyConnected}>
                    <wa-icon name="arrows-rotate"></wa-icon>
                    Restart Kernel
                </wa-button>
            </div>
            <wa-scroller orientation="vertical" class="notebook-scroller">
                <div class="notebook-cells">
                    ${I(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
                </div>
            </wa-scroller>
        `:d`<div class="loading">Loading notebook...</div>`}};y.styles=j`
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
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
            width: 100%;
            box-sizing: border-box;
        }

        .cell-wrapper {
            position: relative;
        }

        .cell {
            border-radius: 4px;
            overflow: hidden;
            opacity: 0.9;
            position: relative;
        }

        .cell-actions-top,
        .cell-actions-bottom {
            display: flex;
            gap: 0.25rem;
            align-items: center;
            justify-content: center;
            padding: 0.25rem;
            opacity: 0;
            transition: opacity 0.2s;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 5;
        }

        .cell-actions-top {
            top: -1.5rem;
        }

        .cell-actions-bottom {
            bottom: -1.5rem;
        }

        .cell-wrapper:hover .cell-actions-top,
        .cell-wrapper:hover .cell-actions-bottom {
            opacity: 0.7;
        }

        .cell-actions-top:hover,
        .cell-actions-bottom:hover {
            opacity: 1 !important;
        }

        .cell-header-actions {
            display: flex;
            gap: 0.25rem;
            align-items: center;
            opacity: 0.5;
            transition: opacity 0.2s;
        }

        .cell-header:hover .cell-header-actions {
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

        .markdown-placeholder {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            padding: 3rem 1rem;
            opacity: 0.5;
            font-style: italic;
            transition: opacity 0.2s;
        }

        .markdown-cell.empty:hover .markdown-placeholder {
            opacity: 0.8;
        }

        .markdown-placeholder wa-icon {
            font-size: 1.5rem;
        }

        .markdown-edit-buttons {
            display: flex;
            gap: 0.25rem;
            align-items: center;
        }
    `;f([H({attribute:!1})],y.prototype,"input",2);f([g()],y.prototype,"notebook",2);f([g()],y.prototype,"cellOutputs",2);f([g()],y.prototype,"executingCells",2);f([g()],y.prototype,"pyenv",2);f([g()],y.prototype,"pyConnected",2);f([g()],y.prototype,"pyVersion",2);f([g()],y.prototype,"editingMarkdownCells",2);f([g()],y.prototype,"executionCounter",2);f([g()],y.prototype,"isRunningAll",2);y=f([B("k-notebook-editor")],y);const G=({editorRegistry:e})=>{e.registerEditorInputHandler({canHandle:t=>t instanceof P&&t.getName().toLowerCase().endsWith(".ipynb"),handle:async t=>{const i={title:t.getName(),data:t,key:t.getName(),icon:"book",noOverflow:!0,state:{}};return i.widgetFactory=()=>d`
                <k-notebook-editor .input=${i}></k-notebook-editor>`,i},ranking:100})};export{y as KNotebookEditor,G as default};
