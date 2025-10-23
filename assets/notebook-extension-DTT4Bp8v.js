import{F as b,b as k,x as s,z as C,o as v,l as $,q as x,a as _,n as E,c as p,t as S}from"./index-C1DvjuJF.js";import{e as A,P as O,m as M,f as R}from"./main-Ci7DRhcV.js";import{e as y,s as T}from"./editor.main-DU6ZLs7V.js";var z=Object.defineProperty,D=Object.getOwnPropertyDescriptor,h=(e,t,i,l)=>{for(var o=l>1?void 0:l?D(t,i):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(o=(l?c(t,i,o):c(o))||o);return l&&o&&z(t,i,o),o};let d=class extends A{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.pyConnecting=!1,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.highlightedCellIndex=-1,this.cancelRunAll=!1,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.pyConnected=!1,this.pyVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.saveEditorContents(),this.notebook.cells.forEach((i,l)=>{if(i.cell_type==="code"){const o=this.cellOutputs.get(l);if(o)if(o.type==="execute_result"){const n={};o.imageData&&(n["image/png"]=o.imageData),o.data&&(n["text/plain"]=o.data),i.outputs=[{output_type:"execute_result",data:n,execution_count:i.execution_count,metadata:{}}]}else o.type==="error"&&(i.outputs=[{output_type:"error",ename:"Error",evalue:o.data,traceback:[o.data]}]);else i.outputs=[]}});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}doBeforeUI(){this.loadNotebook()}renderToolbar(){const e=this.pyConnecting?"Connecting to Python...":this.pyConnected?"Python Connected":"Python Disconnected - Click to connect",t=this.pyConnecting?"Connecting...":this.pyConnected&&this.pyVersion?`Python ${this.pyVersion}`:"Not connected",i=this.pyConnected?"var(--wa-color-green-40)":this.pyConnecting?"var(--wa-color-warning-500)":"var(--wa-color-red-40)";return s`
            <wa-button 
                appearance="plain" 
                size="small"
                style="display: flex; align-items: center; gap: 0.5rem;"
                ?disabled=${this.pyConnecting}
                @click=${()=>this.connectPython()}
                title=${e}>
                <wa-icon 
                    name="circle"
                    label="Python status"
                    style=${k({color:i})}
                ></wa-icon>
                ${t}
            </wa-button>
            ${this.isRunningAll?s`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${()=>this.cancelAllCells()}
                    title="Cancel running all cells">
                    <wa-icon name="stop" label="Stop"></wa-icon>
                    Cancel All
                </wa-button>
            `:s`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${()=>this.runAllCells()}
                    title="Run all code cells sequentially">
                    <wa-icon name="play" label="Run"></wa-icon>
                    Run All
                </wa-button>
            `}
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.clearAllOutputs()}
                title="Clear all outputs and reset execution counter">
                <wa-icon name="eraser" label="Clear"></wa-icon>
                Clear Outputs
            </wa-button>
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.restartKernel()}
                title="Restart Python kernel (clears all variables and state)"
                ?disabled=${!this.pyConnected||this.pyConnecting}>
                <wa-icon name="arrows-rotate" label="Restart"></wa-icon>
                Restart Kernel
            </wa-button>
        `}doInitUI(){this.setupThemeObserver()}async loadNotebook(){var i;const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(l){console.error("Failed to parse notebook:",l),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if((i=this.notebook)!=null&&i.cells){const l=this.notebook.cells.filter(o=>o.cell_type==="code").map(o=>o.execution_count??0).reduce((o,n)=>Math.max(o,n),0);this.executionCounter=l,this.notebook.cells.forEach((o,n)=>{var c;if(o.cell_type==="code"&&o.outputs&&o.outputs.length>0){const a=o.outputs[0];a.output_type==="execute_result"&&a.data?this.cellOutputs.set(n,{type:"execute_result",data:a.data["text/plain"]||"",imageData:a.data["image/png"]||void 0}):a.output_type==="error"&&this.cellOutputs.set(n,{type:"error",data:a.evalue||((c=a.traceback)==null?void 0:c.join(`
`))||"Unknown error"})}})}}setupThemeObserver(){const e=document.documentElement;let t=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const i=this.getMonacoTheme();i!==t&&(t=i,y.setTheme(i))}),this.themeObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}renderHeaderActions(e,t){return s`
            <div class="cell-header-actions">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(e,"code")} title="Add code cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="code" label="Code"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellBefore(e,"markdown")} title="Add markdown cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="font" label="Markdown"></wa-icon>
                </wa-button>
                <span class="divider"></span>
                ${t||""}
                <wa-button size="small" appearance="plain" @click=${()=>this.deleteCell(e)} title="Delete cell" ?disabled=${this.notebook.cells.length<=1}>
                    <wa-icon name="trash" label="Delete cell"></wa-icon>
                </wa-button>
            </div>
        `}renderFooterActions(e){return s`
            <div class="cell-footer">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(e,"code")} title="Add code cell after">
                    <wa-icon name="code" label="Code"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCellAfter(e,"markdown")} title="Add markdown cell after">
                    <wa-icon name="font" label="Markdown"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
            </div>
        `}stringToSourceArray(e){if(!e)return[""];const t=e.split(`
`).map(i=>i+`
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async initPyodide(){if(!this.pyenv){this.pyenv=new O;const e=await C.getWorkspace();if(e){await this.pyenv.init(e),this.pyConnected=!0;try{const t=await this.pyenv.execCode("import sys; sys.version.split()[0]");this.pyVersion=(t==null?void 0:t.result)||"Unknown"}catch(t){console.error("Failed to get Python version:",t),this.pyVersion="Unknown"}try{await this.pyenv.execCode(`
try:
    import matplotlib
    matplotlib.use('agg')
    
    import matplotlib.pyplot as plt
    import io
    import base64
    
    _original_show = plt.show
    _display_data = None
    
    def _patched_show(*args, **kwargs):
        """Patched plt.show() that captures the current figure for notebook display."""
        global _display_data
        if plt.get_fignums():
            fig = plt.gcf()
            buffer = io.BytesIO()
            fig.savefig(buffer, format='png', bbox_inches='tight', dpi=100)
            buffer.seek(0)
            _display_data = base64.b64encode(buffer.read()).decode('utf-8')
            plt.close(fig)
        # Don't call original show() as it would try to display in a window
    
    plt.show = _patched_show
except ImportError:
    # matplotlib not installed - skip configuration
    pass
`)}catch(t){console.error("Failed to configure matplotlib:",t)}}}}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type==="code"){this.executingCells.add(e),this.requestUpdate();try{await this.initPyodide();const i=this.monacoEditors.get(e);let l=i?i.getValue():this.getCellSource(t);const o=await this.pyenv.execCode(l),n=[];if(o&&typeof o=="object"&&"console"in o){const a=o.console;if(Array.isArray(a)&&a.length>0){const r=a.filter(u=>u&&u.trim());r.length>0&&n.push(...r)}}let c;try{const a=await this.pyenv.execCode('_display_data if "_display_data" in dir() else None'),r=a&&typeof a=="object"?a.result:a;r&&String(r)!=="None"&&String(r)!=="undefined"&&(c=String(r),await this.pyenv.execCode("_display_data = None"))}catch(a){console.debug("No display data to retrieve:",a)}if(!c){const a=o&&typeof o=="object"?o.result:o;if(a!=null&&String(a)!=="undefined"){const r=String(a);r&&r!=="undefined"&&n.push(r)}}this.cellOutputs.set(e,{type:"execute_result",data:n.length>0?n.join(`
`):void 0,imageData:c}),this.executionCounter++,t.execution_count=this.executionCounter,this.markDirty(!0)}catch(i){this.executingCells.has(e)&&this.cellOutputs.set(e,{type:"error",data:String(i)})}finally{this.executingCells.delete(e),this.requestUpdate()}}}async cancelExecution(e){if(this.pyenv)if(this.pyenv.canInterrupt())this.pyenv.interrupt();else{this.cellOutputs.set(e,{type:"error",data:"Execution cancelled by user (worker terminated - SharedArrayBuffer not available for graceful interrupt)"}),this.executingCells.delete(e),this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0;try{await this.initPyodide()}catch(t){console.error("Failed to reinitialize Python after cancellation:",t)}this.requestUpdate()}}clearAllOutputs(){var e;this.cellOutputs.clear(),this.executionCounter=0,(e=this.notebook)!=null&&e.cells&&this.notebook.cells.forEach(t=>{t.cell_type==="code"&&(t.execution_count=null,t.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async restartKernel(){if(!(!this.pyenv||this.pyConnecting))try{this.pyConnecting=!0,this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0,this.requestUpdate(),await this.initPyodide(),this.requestUpdate()}catch(e){console.error("Failed to restart kernel:",e)}finally{this.pyConnecting=!1}}async runAllCells(){var e;if((e=this.notebook)!=null&&e.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let t=0;t<this.notebook.cells.length&&!this.cancelRunAll;t++)this.notebook.cells[t].cell_type==="code"&&await this.executeCell(t)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const l=t.target.value;if(this.notebook&&this.notebook.cells[e]){const o=this.notebook.cells[e],n=this.getCellSource(o);o.source=this.stringToSourceArray(l),n!==l&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const i=this.getCellSource(e),l=!i||i.trim()==="";if(this.editingMarkdownCells.has(t)){const a=s`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${r=>{var f;const u=(f=r.target.closest(".markdown-cell"))==null?void 0:f.querySelector("textarea");u&&this.saveMarkdownEdit(t,{target:u})}}
                    title="Save changes">
                    <wa-icon name="check" label="Save"></wa-icon>
                </wa-button>
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${()=>this.toggleMarkdownEdit(t)}
                    title="Cancel editing">
                    <wa-icon name="xmark" label="Cancel"></wa-icon>
                </wa-button>
            `;return s`
                <div class="cell-wrapper">
                    <wa-animation 
                        name="bounce" 
                        duration="1000" 
                        iterations="1"
                        ?play=${this.highlightedCellIndex===t}
                        @wa-finish=${()=>this.highlightedCellIndex=-1}>
                        <div class="cell markdown-cell editing">
                            <div class="cell-header">
                                <span class="cell-label">Markdown</span>
                                ${this.renderHeaderActions(t,a)}
                            </div>
                            <textarea 
                                class="markdown-editor"
                                .value=${i}
                                @blur=${r=>this.saveMarkdownEdit(t,r)}
                                placeholder="Enter markdown content here... (# for headings, ** for bold, etc.)"></textarea>
                            ${this.renderFooterActions(t)}
                        </div>
                    </wa-animation>
                </div>
            `}const n=M.parse(i),c=s`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.toggleMarkdownEdit(t)}
                title="Edit markdown">
                <wa-icon name="pencil" label="Edit"></wa-icon>
            </wa-button>
        `;return s`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===t}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell markdown-cell ${l?"empty":""}" @dblclick=${()=>this.toggleMarkdownEdit(t)}>
                        <div class="cell-header">
                            <span class="cell-label"></span>
                            ${this.renderHeaderActions(t,c)}
                        </div>
                        <div class="cell-content">
                            ${l?s`
                                <div class="markdown-placeholder">
                                    <wa-icon name="font" label="Markdown"></wa-icon>
                                    <span>Double-click or click the pencil icon to edit markdown</span>
                                </div>
                            `:v(n)}
                        </div>
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCodeCell(e,t){const i=this.cellOutputs.get(t),l=this.executingCells.has(t);this.cellRefs.has(t)||this.cellRefs.set(t,$());const o=this.cellRefs.get(t),n=s`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>l?this.cancelExecution(t):this.executeCell(t)}
                title=${l?"Stop execution":"Run cell"}
                class="run-button-left">
                ${l?s`
                    <wa-icon name="stop" label="Stop" style="color: var(--wa-color-danger-500);"></wa-icon>
                `:s`
                    <wa-icon name="play" label="Run"></wa-icon>
                `}
            </wa-button>
        `;return s`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===t}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell code-cell ${l?"executing":""}">
                        <div class="cell-header">
                            ${n}
                            <span class="cell-label">
                                ${l?s`
                                    In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${l}>
                                        <span class="executing-indicator">*</span>
                                    </wa-animation>]:
                                `:s`
                                    In [${e.execution_count??" "}]:
                                `}
                            </span>
                            ${this.renderHeaderActions(t)}
                        </div>
                        <div class="cell-input monaco-container" ${x(o)} data-cell-index="${t}"></div>
                        ${i?s`
                            <div class="cell-output ${i.type==="error"?"output-error":""}">
                                <div class="output-label">Out [${t+1}]:</div>
                                ${i.imageData?s`
                                    <img src="data:image/png;base64,${i.imageData}" alt="Output image" class="output-image" />
                                `:""}
                                ${i.data?s`<pre><code>${i.data}</code></pre>`:""}
                            </div>
                        `:""}
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const i=this.getCellSource(e);return s`
                <div class="cell raw-cell">
                    <pre><code>${i}</code></pre>
                </div>
            `}}async connectPython(){if(!(this.pyConnecting||this.pyConnected))try{this.pyConnecting=!0,await this.initPyodide()}catch(e){console.error("Failed to initialize Pyodide:",e)}finally{this.pyConnecting=!1}}addCellBefore(e,t="code"){this.addCell(e,t)}addCellAfter(e,t="code"){this.addCell(e+1,t)}addCell(e,t="code"){this.notebook&&(this.saveEditorContents(),this.shiftIndicesUp(e),this.notebook.cells.splice(e,0,this.createCell(t)),t==="markdown"&&this.editingMarkdownCells.add(e),this.resetCellState(),this.highlightedCellIndex=e,this.updateComplete.then(()=>{this.scrollToCell(e)}))}scrollToCell(e){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelectorAll(".cell-wrapper")[e];if(!t)return;const i=this.closest("wa-scroller");if(!i){t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});return}const l=i.getBoundingClientRect(),o=t.getBoundingClientRect(),c=i.scrollTop+(o.top-l.top)-l.height/2+o.height/2;i.scrollTo({top:c,behavior:"smooth"})}saveEditorContents(){this.monacoEditors.forEach((e,t)=>{const i=this.notebook.cells[t];i&&i.cell_type==="code"&&(i.source=this.stringToSourceArray(e.getValue()))})}resetCellState(){this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0)}deleteCell(e){!this.notebook||this.notebook.cells.length<=1||(this.saveEditorContents(),this.cellOutputs.delete(e),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.notebook.cells.splice(e,1),this.shiftIndicesDown(e),this.resetCellState())}shiftIndicesUp(e){Array.from(this.cellOutputs.keys()).filter(o=>o>=e).sort((o,n)=>n-o).forEach(o=>{const n=this.cellOutputs.get(o);this.cellOutputs.delete(o),this.cellOutputs.set(o+1,n)}),Array.from(this.executingCells).filter(o=>o>=e).sort((o,n)=>n-o).forEach(o=>{this.executingCells.delete(o),this.executingCells.add(o+1)}),Array.from(this.editingMarkdownCells).filter(o=>o>=e).sort((o,n)=>n-o).forEach(o=>{this.editingMarkdownCells.delete(o),this.editingMarkdownCells.add(o+1)})}shiftIndicesDown(e){Array.from(this.cellOutputs.keys()).filter(o=>o>e).sort((o,n)=>o-n).forEach(o=>{const n=this.cellOutputs.get(o);this.cellOutputs.delete(o),this.cellOutputs.set(o-1,n)}),Array.from(this.executingCells).filter(o=>o>e).sort((o,n)=>o-n).forEach(o=>{this.executingCells.delete(o),this.executingCells.add(o-1)}),Array.from(this.editingMarkdownCells).filter(o=>o>e).sort((o,n)=>o-n).forEach(o=>{this.editingMarkdownCells.delete(o),this.editingMarkdownCells.add(o-1)})}getMonacoTheme(){const e=document.documentElement;return e.classList.contains("wa-dark")?"vs-dark":e.classList.contains("wa-light")?"vs":"vs-dark"}updated(e){super.updated(e),(e.has("pyConnected")||e.has("pyConnecting")||e.has("pyVersion")||e.has("isRunningAll"))&&this.updateToolbar(),this.notebook&&this.notebook.cells&&this.notebook.cells.forEach((t,i)=>{if(t.cell_type==="code"){const l=this.cellRefs.get(i);if(l&&l.value&&!this.monacoEditors.has(i)){const o=l.value,n=this.getCellSource(t),c=n.split(`
`).length,a=19,r=10,u=100,f=Math.max(u,c*a+r);o.style.height=`${f}px`;const g=y.create(o,{value:n,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});g.onDidContentSizeChange(()=>{const m=g.getContentHeight();o.style.height=`${Math.max(u,m+r)}px`,g.layout()}),g.onDidChangeModelContent(()=>{const m=g.getValue(),w=this.getCellSource(t);m!==w&&this.markDirty(!0)}),this.monacoEditors.set(i,g)}}})}render(){return this.notebook?s`
            <style>
                ${T}
            </style>
            <div class="notebook-cells">
                ${R(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
            </div>
        `:s`<div class="loading">Loading notebook...</div>`}};d.styles=_`
        :host {
            display: block;
            width: 100%;
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

        .cell-header-actions {
            display: flex;
            gap: 0.25rem;
            align-items: center;
            opacity: 0.5;
            transition: opacity 0.2s;
        }

        .cell-header-actions .divider {
            width: 1px;
            height: 1rem;
            background: var(--wa-color-outline);
            margin: 0 0.25rem;
            opacity: 0.5;
        }

        .cell-header:hover .cell-header-actions {
            opacity: 1;
        }

        .cell-footer {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: flex-end;
            padding: 0.5rem;
            border-top: 1px solid var(--wa-color-outline);
            opacity: 0.5;
            transition: opacity 0.2s;
        }

        .cell-footer:hover {
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

        .output-image {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0.5rem 0;
            border-radius: 4px;
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

    `;h([E({attribute:!1})],d.prototype,"input",2);h([p()],d.prototype,"notebook",2);h([p()],d.prototype,"cellOutputs",2);h([p()],d.prototype,"executingCells",2);h([p()],d.prototype,"pyenv",2);h([p()],d.prototype,"pyConnected",2);h([p()],d.prototype,"pyConnecting",2);h([p()],d.prototype,"pyVersion",2);h([p()],d.prototype,"editingMarkdownCells",2);h([p()],d.prototype,"executionCounter",2);h([p()],d.prototype,"isRunningAll",2);h([p()],d.prototype,"highlightedCellIndex",2);d=h([S("k-notebook-editor")],d);const N=({editorRegistry:e})=>{e.registerEditorInputHandler({canHandle:t=>t instanceof b&&t.getName().toLowerCase().endsWith(".ipynb"),handle:async t=>{const i={title:t.getName(),data:t,key:t.getName(),icon:"k jupyter",noOverflow:!0,state:{}};return i.widgetFactory=()=>s`
                <k-notebook-editor .input=${i}></k-notebook-editor>`,i},ranking:100})};export{d as KNotebookEditor,N as default};
