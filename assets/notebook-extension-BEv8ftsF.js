import{F as b,x as a,y as k,o as v,k as C,l as x,b as $,a as A,n as E,c as p,t as O}from"./index-BBymxG1x.js";import{e as _,P as S,m as M,f as z}from"./main-DJKOehCJ.js";import{e as w,s as R}from"./editor.main-DRCUfrNX.js";var P=Object.defineProperty,U=Object.getOwnPropertyDescriptor,d=(e,t,o,l)=>{for(var i=l>1?void 0:l?U(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(l?r(t,o,i):r(i))||i);return l&&i&&P(t,o,i),i};let c=class extends _{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.cancelRunAll=!1,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.pyConnected=!1,this.pyVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.saveEditorContents(),this.notebook.cells.forEach((o,l)=>{if(o.cell_type==="code"){const i=this.cellOutputs.get(l);i?i.type==="execute_result"?o.outputs=[{output_type:"execute_result",data:{"text/plain":i.data},execution_count:o.execution_count,metadata:{}}]:i.type==="error"&&(o.outputs=[{output_type:"error",ename:"Error",evalue:i.data,traceback:[i.data]}]):o.outputs=[]}});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}doBeforeUI(){this.loadNotebook()}doInitUI(){this.setupThemeObserver()}async loadNotebook(){var o;const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(l){console.error("Failed to parse notebook:",l),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if((o=this.notebook)!=null&&o.cells){const l=this.notebook.cells.filter(i=>i.cell_type==="code").map(i=>i.execution_count??0).reduce((i,n)=>Math.max(i,n),0);this.executionCounter=l,this.notebook.cells.forEach((i,n)=>{var r;if(i.cell_type==="code"&&i.outputs&&i.outputs.length>0){const s=i.outputs[0];s.output_type==="execute_result"&&s.data?this.cellOutputs.set(n,{type:"execute_result",data:s.data["text/plain"]||""}):s.output_type==="error"&&this.cellOutputs.set(n,{type:"error",data:s.evalue||((r=s.traceback)==null?void 0:r.join(`
`))||"Unknown error"})}})}}setupThemeObserver(){const e=document.documentElement;let t=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const o=this.getMonacoTheme();o!==t&&(t=o,w.setTheme(o))}),this.themeObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}renderTopActions(e){return a`
            <div class="cell-actions-top">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(e,"code")} title="Add code cell">
                    <wa-icon name="code" label="Add code cell"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(e,"markdown")} title="Add markdown cell">
                    <wa-icon name="font" label="Add markdown cell"></wa-icon>
                </wa-button>
            </div>
        `}renderBottomActions(e){return a`
            <div class="cell-actions-bottom">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(e,"code")} title="Add code cell">
                    <wa-icon name="code" label="Add code cell"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(e,"markdown")} title="Add markdown cell">
                    <wa-icon name="font" label="Add markdown cell"></wa-icon>
                </wa-button>
            </div>
        `}renderHeaderActions(e,t){return a`
            <div class="cell-header-actions">
                ${t||""}
                <wa-button size="small" appearance="plain" @click=${()=>this.deleteCell(e)} title="Delete cell" ?disabled=${this.notebook.cells.length<=1}>
                    <wa-icon name="trash" label="Delete cell"></wa-icon>
                </wa-button>
            </div>
        `}stringToSourceArray(e){if(!e)return[""];const t=e.split(`
`).map(o=>o+`
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async initPyodide(){if(!this.pyenv){this.pyenv=new S;const e=await k.getWorkspace();if(e){await this.pyenv.init(e),this.pyConnected=!0;try{const t=await this.pyenv.execCode("import sys; sys.version.split()[0]");this.pyVersion=(t==null?void 0:t.result)||"Unknown"}catch(t){console.error("Failed to get Python version:",t),this.pyVersion="Unknown"}}}}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type==="code"){this.executingCells.add(e),this.requestUpdate();try{await this.initPyodide();const o=this.monacoEditors.get(e),l=o?o.getValue():this.getCellSource(t),i=await this.pyenv.execCode(l),n=[];if(i&&typeof i=="object"&&"console"in i){const s=i.console;if(Array.isArray(s)&&s.length>0){const u=s.filter(h=>h&&h.trim());u.length>0&&n.push(...u)}}const r=i&&typeof i=="object"?i.result:i;if(r!=null&&String(r)!=="undefined"){const s=String(r);s&&s!=="undefined"&&n.push(s)}this.cellOutputs.set(e,{type:"execute_result",data:n.length>0?n.join(`
`):"(no output)"}),this.executionCounter++,t.execution_count=this.executionCounter,this.markDirty(!0)}catch(o){this.executingCells.has(e)&&this.cellOutputs.set(e,{type:"error",data:String(o)})}finally{this.executingCells.delete(e),this.requestUpdate()}}}async cancelExecution(e){if(this.pyenv)if(this.pyenv.canInterrupt())this.pyenv.interrupt();else{this.cellOutputs.set(e,{type:"error",data:"Execution cancelled by user (worker terminated - SharedArrayBuffer not available for graceful interrupt)"}),this.executingCells.delete(e),this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0;try{await this.initPyodide()}catch(t){console.error("Failed to reinitialize Python after cancellation:",t)}this.requestUpdate()}}clearAllOutputs(){var e;this.cellOutputs.clear(),this.executionCounter=0,(e=this.notebook)!=null&&e.cells&&this.notebook.cells.forEach(t=>{t.cell_type==="code"&&(t.execution_count=null,t.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async restartKernel(){if(this.pyenv)try{this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0,this.requestUpdate(),await this.initPyodide(),this.requestUpdate()}catch(e){console.error("Failed to restart kernel:",e)}}async runAllCells(){var e;if((e=this.notebook)!=null&&e.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let t=0;t<this.notebook.cells.length&&!this.cancelRunAll;t++)this.notebook.cells[t].cell_type==="code"&&await this.executeCell(t)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const l=t.target.value;if(this.notebook&&this.notebook.cells[e]){const i=this.notebook.cells[e],n=this.getCellSource(i);i.source=this.stringToSourceArray(l),n!==l&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const o=this.getCellSource(e),l=!o||o.trim()==="";if(this.editingMarkdownCells.has(t))return a`
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
                                <wa-icon name="xmark" label="Cancel"></wa-icon>
                            </wa-button>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                @click=${s=>{var h;const u=(h=s.target.closest(".markdown-cell"))==null?void 0:h.querySelector("textarea");u&&this.saveMarkdownEdit(t,{target:u})}}
                                title="Save changes">
                                <wa-icon name="check" label="Save"></wa-icon>
                            </wa-button>
                        </div>
                    </div>
                        <textarea 
                            class="markdown-editor"
                            .value=${o}
                            @blur=${s=>this.saveMarkdownEdit(t,s)}
                            placeholder="Enter markdown content here... (# for headings, ** for bold, etc.)"></textarea>
                    </div>
                    ${this.renderBottomActions(t)}
                </div>
            `;const n=M.parse(o),r=a`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.toggleMarkdownEdit(t)}
                title="Edit markdown">
                <wa-icon name="pencil" label="Edit"></wa-icon>
            </wa-button>
        `;return a`
            <div class="cell-wrapper">
                ${this.renderTopActions(t)}
                <div class="cell markdown-cell ${l?"empty":""}" @dblclick=${()=>this.toggleMarkdownEdit(t)}>
                    <div class="cell-header">
                        <span class="cell-label"></span>
                        ${this.renderHeaderActions(t,r)}
                    </div>
                    <div class="cell-content">
                        ${l?a`
                            <div class="markdown-placeholder">
                                <wa-icon name="font" label="Markdown"></wa-icon>
                                <span>Double-click or click the pencil icon to edit markdown</span>
                            </div>
                        `:v(n)}
                    </div>
                </div>
                ${this.renderBottomActions(t)}
            </div>
        `}renderCodeCell(e,t){const o=this.cellOutputs.get(t),l=this.executingCells.has(t);this.cellRefs.has(t)||this.cellRefs.set(t,C());const i=this.cellRefs.get(t),n=a`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>l?this.cancelExecution(t):this.executeCell(t)}
                title=${l?"Stop execution":"Run cell"}
                class="run-button-left">
                ${l?a`
                    <wa-icon name="stop" label="Stop" style="color: var(--wa-color-danger-500);"></wa-icon>
                `:a`
                    <wa-icon name="play" label="Run"></wa-icon>
                `}
            </wa-button>
        `;return a`
            <div class="cell-wrapper">
                ${this.renderTopActions(t)}
                <div class="cell code-cell ${l?"executing":""}">
                    <div class="cell-header">
                        ${n}
                        <span class="cell-label">
                            ${l?a`
                                In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${l}>
                                    <span class="executing-indicator">*</span>
                                </wa-animation>]:
                            `:a`
                                In [${e.execution_count??" "}]:
                            `}
                        </span>
                        ${this.renderHeaderActions(t)}
                    </div>
                    <div class="cell-input monaco-container" ${x(i)} data-cell-index="${t}"></div>
                    ${o?a`
                        <div class="cell-output ${o.type==="error"?"output-error":""}">
                            <div class="output-label">Out [${t+1}]:</div>
                            <pre><code>${o.data}</code></pre>
                        </div>
                    `:""}
                </div>
                ${this.renderBottomActions(t)}
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const o=this.getCellSource(e);return a`
                <div class="cell raw-cell">
                    <pre><code>${o}</code></pre>
                </div>
            `}}async connectPython(){try{await this.initPyodide()}catch(e){console.error("Failed to initialize Pyodide:",e)}}addCellBefore(e,t="code"){this.addCell(e,t)}addCellAfter(e,t="code"){this.addCell(e+1,t)}addCell(e,t="code"){this.notebook&&(this.saveEditorContents(),this.notebook.cells.splice(e,0,this.createCell(t)),t==="markdown"&&this.editingMarkdownCells.add(e),this.resetCellState())}saveEditorContents(){this.monacoEditors.forEach((e,t)=>{const o=this.notebook.cells[t];o&&o.cell_type==="code"&&(o.source=this.stringToSourceArray(e.getValue()))})}resetCellState(){this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0),this.requestUpdate()}deleteCell(e){!this.notebook||this.notebook.cells.length<=1||(this.saveEditorContents(),this.notebook.cells.splice(e,1),this.cleanupCellOutputs(),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.resetCellState())}cleanupCellOutputs(){if(!this.notebook)return;const e=new Set(this.notebook.cells.map((o,l)=>l));Array.from(this.cellOutputs.keys()).forEach(o=>{e.has(o)||this.cellOutputs.delete(o)})}getMonacoTheme(){const e=document.documentElement;return e.classList.contains("wa-dark")?"vs-dark":e.classList.contains("wa-light")?"vs":"vs-dark"}updated(e){super.updated(e),this.notebook&&this.notebook.cells&&this.notebook.cells.forEach((t,o)=>{if(t.cell_type==="code"){const l=this.cellRefs.get(o);if(l&&l.value&&!this.monacoEditors.has(o)){const i=l.value,n=this.getCellSource(t),r=n.split(`
`).length,s=19,u=10,h=100,f=Math.max(h,r*s+u);i.style.height=`${f}px`;const m=w.create(i,{value:n,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});m.onDidContentSizeChange(()=>{const y=m.getContentHeight();i.style.height=`${Math.max(h,y+u)}px`,m.layout()}),m.onDidChangeModelContent(()=>{const y=m.getValue(),g=this.getCellSource(t);y!==g&&this.markDirty(!0)}),this.monacoEditors.set(o,m)}}})}render(){return this.notebook?a`
            <style>
                ${R}
            </style>
            <div class="notebook-toolbar">
                <div class="python-status">
                    <wa-icon 
                        name="circle" 
                        label="Python status"
                        @click=${this.connectPython}
                        style="${$({color:this.pyConnected?"var(--wa-color-green-40)":"var(--wa-color-red-40)",cursor:"pointer"})}"
                        title="${this.pyConnected?"Python Connected":"Python Disconnected - Click to connect"}">
                    </wa-icon>
                    ${this.pyConnected&&this.pyVersion?a`
                        <span class="python-version">Python ${this.pyVersion}</span>
                    `:""}
                </div>
                ${this.isRunningAll?a`
                    <wa-button 
                        size="small" 
                        appearance="plain"
                        @click=${this.cancelAllCells}
                        title="Cancel running all cells">
                        <wa-icon name="stop" label="Stop"></wa-icon>
                        Cancel All
                    </wa-button>
                `:a`
                    <wa-button 
                        size="small" 
                        appearance="plain"
                        @click=${this.runAllCells}
                        title="Run all code cells sequentially">
                        <wa-icon name="play" label="Run"></wa-icon>
                        Run All
                    </wa-button>
                `}
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${this.clearAllOutputs}
                    title="Clear all outputs and reset execution counter">
                    <wa-icon name="eraser" label="Clear"></wa-icon>
                    Clear Outputs
                </wa-button>
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${this.restartKernel}
                    title="Restart Python kernel (clears all variables and state)"
                    ?disabled=${!this.pyConnected}>
                    <wa-icon name="arrows-rotate" label="Restart"></wa-icon>
                    Restart Kernel
                </wa-button>
            </div>
            <wa-scroller orientation="vertical" class="notebook-scroller">
                <div class="notebook-cells">
                    ${z(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
                </div>
            </wa-scroller>
        `:a`<div class="loading">Loading notebook...</div>`}};c.styles=A`
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
    `;d([E({attribute:!1})],c.prototype,"input",2);d([p()],c.prototype,"notebook",2);d([p()],c.prototype,"cellOutputs",2);d([p()],c.prototype,"executingCells",2);d([p()],c.prototype,"pyenv",2);d([p()],c.prototype,"pyConnected",2);d([p()],c.prototype,"pyVersion",2);d([p()],c.prototype,"editingMarkdownCells",2);d([p()],c.prototype,"executionCounter",2);d([p()],c.prototype,"isRunningAll",2);c=d([O("k-notebook-editor")],c);const V=({editorRegistry:e})=>{e.registerEditorInputHandler({canHandle:t=>t instanceof b&&t.getName().toLowerCase().endsWith(".ipynb"),handle:async t=>{const o={title:t.getName(),data:t,key:t.getName(),icon:"book",noOverflow:!0,state:{}};return o.widgetFactory=()=>a`
                <k-notebook-editor .input=${o}></k-notebook-editor>`,o},ranking:100})};export{c as KNotebookEditor,V as default};
