import{x as l,j as b,k,h as C}from"./index-CBe0mDof.js";import{F as v,j as $,o as x,P as _,w as E,k as S,m as A,p as M,n as O,d as p,e as R}from"./main-h8CzCh_v.js";import{e as f,s as T}from"./editor.main-702eHgXz.js";import{pythonPackageManagerService as P}from"./package-manager-extension-rwZ6EqW2.js";var z=Object.defineProperty,D=Object.getOwnPropertyDescriptor,h=(e,t,i,n)=>{for(var o=n>1?void 0:n?D(t,i):t,a=e.length-1,d;a>=0;a--)(d=e[a])&&(o=(n?d(t,i,o):d(o))||o);return n&&o&&z(t,i,o),o};let c=class extends ${constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.pyConnecting=!1,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.highlightedCellIndex=-1,this.cancelRunAll=!1,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.pyConnected=!1,this.pyVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.saveEditorContents(),this.notebook.cells.forEach((i,n)=>{if(i.cell_type==="code"){const o=this.cellOutputs.get(n);if(o)if(o.type==="execute_result"){const a={};o.imageData&&(a["image/png"]=o.imageData),o.data&&(a["text/plain"]=o.data),i.outputs=[{output_type:"execute_result",data:a,execution_count:i.execution_count,metadata:{}}]}else o.type==="error"&&(i.outputs=[{output_type:"error",ename:"Error",evalue:o.data,traceback:[o.data]}]);else i.outputs=[]}});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}doBeforeUI(){this.loadNotebook()}renderToolbar(){const e=this.pyConnecting?"Connecting to Python...":this.pyConnected?"Python Connected":"Python Disconnected - Click to connect",t=this.pyConnecting?"Connecting...":this.pyConnected&&this.pyVersion?`Python ${this.pyVersion}`:"Not connected",i=this.pyConnected?"var(--wa-color-green-40)":this.pyConnecting?"var(--wa-color-warning-500)":"var(--wa-color-red-40)";return l`
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
                    style=${x({color:i})}
                ></wa-icon>
                ${t}
            </wa-button>
            ${this.isRunningAll?l`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${()=>this.cancelAllCells()}
                    title="Cancel running all cells">
                    <wa-icon name="stop" label="Stop"></wa-icon>
                    Cancel All
                </wa-button>
            `:l`
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
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.openPackageManager()}
                title="Manage required packages for this notebook">
                <wa-icon name="box" label="Packages"></wa-icon>
                Packages
            </wa-button>
        `}doInitUI(){this.setupThemeObserver()}async loadNotebook(){const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(i){console.error("Failed to parse notebook:",i),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if(this.notebook?.cells){const i=this.notebook.cells.filter(n=>n.cell_type==="code").map(n=>n.execution_count??0).reduce((n,o)=>Math.max(n,o),0);this.executionCounter=i,this.notebook.cells.forEach((n,o)=>{if(n.cell_type==="code"&&n.outputs&&n.outputs.length>0){const a=n.outputs[0];a.output_type==="execute_result"&&a.data?this.cellOutputs.set(o,{type:"execute_result",data:a.data["text/plain"]||"",imageData:a.data["image/png"]||void 0}):a.output_type==="error"&&this.cellOutputs.set(o,{type:"error",data:a.evalue||a.traceback?.join(`
`)||"Unknown error"})}})}}setupThemeObserver(){const e=document.documentElement;let t=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const i=this.getMonacoTheme();i!==t&&(t=i,f.setTheme(i))}),this.themeObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}renderHeaderActions(e,t){return l`
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
        `}renderFooterActions(e){return l`
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
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async initPyodide(){if(!this.pyenv){this.pyenv=new _;const e=await E.getWorkspace();if(e){await this.pyenv.init(e),this.pyConnected=!0;try{const i=await this.pyenv.execCode("import sys; sys.version.split()[0]");this.pyVersion=i?.result||"Unknown"}catch(i){console.error("Failed to get Python version:",i),this.pyVersion="Unknown"}const t=this.notebook?.metadata?.required_packages||[];if(t.length>0)try{await this.pyenv.loadPackages(t)}catch(i){console.error("Failed to load required packages:",i)}try{await this.pyenv.execCode(`
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
`)}catch(i){console.error("Failed to configure matplotlib:",i)}}}}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type==="code"){this.executingCells.add(e),this.requestUpdate();try{await this.initPyodide();const i=this.monacoEditors.get(e);let n=i?i.getValue():this.getCellSource(t);const o=await this.pyenv.execCode(n),a=[];if(o&&typeof o=="object"&&"console"in o){const s=o.console;if(Array.isArray(s)&&s.length>0){const r=s.filter(u=>u&&u.trim());r.length>0&&a.push(...r)}}let d;try{const s=await this.pyenv.execCode('_display_data if "_display_data" in dir() else None'),r=s&&typeof s=="object"?s.result:s;r&&String(r)!=="None"&&String(r)!=="undefined"&&(d=String(r),await this.pyenv.execCode("_display_data = None"))}catch(s){console.debug("No display data to retrieve:",s)}if(!d){const s=o&&typeof o=="object"?o.result:o;if(s!=null&&String(s)!=="undefined"){const r=String(s);r&&r!=="undefined"&&a.push(r)}}this.cellOutputs.set(e,{type:"execute_result",data:a.length>0?a.join(`
`):void 0,imageData:d}),this.executionCounter++,t.execution_count=this.executionCounter,this.markDirty(!0)}catch(i){this.executingCells.has(e)&&this.cellOutputs.set(e,{type:"error",data:String(i)})}finally{this.executingCells.delete(e),this.requestUpdate()}}}async cancelExecution(e){if(this.pyenv)if(this.pyenv.canInterrupt())this.pyenv.interrupt();else{this.cellOutputs.set(e,{type:"error",data:"Execution cancelled by user (worker terminated - SharedArrayBuffer not available for graceful interrupt)"}),this.executingCells.delete(e),this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0;try{await this.initPyodide()}catch(t){console.error("Failed to reinitialize Python after cancellation:",t)}this.requestUpdate()}}clearAllOutputs(){this.cellOutputs.clear(),this.executionCounter=0,this.notebook?.cells&&this.notebook.cells.forEach(e=>{e.cell_type==="code"&&(e.execution_count=null,e.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async restartKernel(){if(!(!this.pyenv||this.pyConnecting))try{this.pyConnecting=!0,this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0,this.requestUpdate(),await this.initPyodide(),this.requestUpdate()}catch(e){console.error("Failed to restart kernel:",e)}finally{this.pyConnecting=!1}}async runAllCells(){if(this.notebook?.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let e=0;e<this.notebook.cells.length&&!this.cancelRunAll;e++)this.notebook.cells[e].cell_type==="code"&&await this.executeCell(e)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const n=t.target.value;if(this.notebook&&this.notebook.cells[e]){const o=this.notebook.cells[e],a=this.getCellSource(o);o.source=this.stringToSourceArray(n),a!==n&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const i=this.getCellSource(e),n=!i||i.trim()==="";if(this.editingMarkdownCells.has(t)){const s=l`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${r=>{const u=r.target.closest(".markdown-cell")?.querySelector("textarea");u&&this.saveMarkdownEdit(t,{target:u})}}
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
            `;return l`
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
                                ${this.renderHeaderActions(t,s)}
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
            `}const a=S.parse(i),d=l`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.toggleMarkdownEdit(t)}
                title="Edit markdown">
                <wa-icon name="pencil" label="Edit"></wa-icon>
            </wa-button>
        `;return l`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===t}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell markdown-cell ${n?"empty":""}" @dblclick=${()=>this.toggleMarkdownEdit(t)}>
                        <div class="cell-header">
                            <span class="cell-label"></span>
                            ${this.renderHeaderActions(t,d)}
                        </div>
                        <div class="cell-content">
                            ${n?l`
                                <div class="markdown-placeholder">
                                    <wa-icon name="font" label="Markdown"></wa-icon>
                                    <span>Double-click or click the pencil icon to edit markdown</span>
                                </div>
                            `:A(a)}
                        </div>
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCodeCell(e,t){const i=this.cellOutputs.get(t),n=this.executingCells.has(t);this.cellRefs.has(t)||this.cellRefs.set(t,b());const o=this.cellRefs.get(t),a=l`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>n?this.cancelExecution(t):this.executeCell(t)}
                title=${n?"Stop execution":"Run cell"}
                class="run-button-left">
                ${n?l`
                    <wa-icon name="stop" label="Stop" style="color: var(--wa-color-danger-500);"></wa-icon>
                `:l`
                    <wa-icon name="play" label="Run"></wa-icon>
                `}
            </wa-button>
        `;return l`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===t}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell code-cell ${n?"executing":""}">
                        <div class="cell-header">
                            ${a}
                            <span class="cell-label">
                                ${n?l`
                                    In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${n}>
                                        <span class="executing-indicator">*</span>
                                    </wa-animation>]:
                                `:l`
                                    In [${e.execution_count??" "}]:
                                `}
                            </span>
                            ${this.renderHeaderActions(t)}
                        </div>
                        <div class="cell-input monaco-container" ${k(o)} data-cell-index="${t}"></div>
                        ${i?l`
                            <div class="cell-output ${i.type==="error"?"output-error":""}">
                                <div class="output-label">Out [${t+1}]:</div>
                                ${i.imageData?l`
                                    <img src="data:image/png;base64,${i.imageData}" alt="Output image" class="output-image" />
                                `:""}
                                ${i.data?l`<pre><code>${i.data}</code></pre>`:""}
                            </div>
                        `:""}
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const i=this.getCellSource(e);return l`
                <div class="cell raw-cell">
                    <pre><code>${i}</code></pre>
                </div>
            `}}async connectPython(){if(!(this.pyConnecting||this.pyConnected))try{this.pyConnecting=!0,await this.initPyodide()}catch(e){console.error("Failed to initialize Pyodide:",e)}finally{this.pyConnecting=!1}}addCellBefore(e,t="code"){this.addCell(e,t)}addCellAfter(e,t="code"){this.addCell(e+1,t)}addCell(e,t="code"){this.notebook&&(this.saveEditorContents(),this.shiftIndicesUp(e),this.notebook.cells.splice(e,0,this.createCell(t)),t==="markdown"&&this.editingMarkdownCells.add(e),this.resetCellState(),this.highlightedCellIndex=e,this.updateComplete.then(()=>{this.scrollToCell(e)}))}scrollToCell(e){const t=this.shadowRoot?.querySelectorAll(".cell-wrapper")[e];if(!t)return;const i=this.closest("wa-scroller");if(!i){t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});return}const n=i.getBoundingClientRect(),o=t.getBoundingClientRect(),d=i.scrollTop+(o.top-n.top)-n.height/2+o.height/2;i.scrollTo({top:d,behavior:"smooth"})}saveEditorContents(){this.monacoEditors.forEach((e,t)=>{const i=this.notebook.cells[t];i&&i.cell_type==="code"&&(i.source=this.stringToSourceArray(e.getValue()))})}resetCellState(){this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0)}deleteCell(e){!this.notebook||this.notebook.cells.length<=1||(this.saveEditorContents(),this.cellOutputs.delete(e),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.notebook.cells.splice(e,1),this.shiftIndicesDown(e),this.resetCellState())}shiftIndicesUp(e){Array.from(this.cellOutputs.keys()).filter(o=>o>=e).sort((o,a)=>a-o).forEach(o=>{const a=this.cellOutputs.get(o);this.cellOutputs.delete(o),this.cellOutputs.set(o+1,a)}),Array.from(this.executingCells).filter(o=>o>=e).sort((o,a)=>a-o).forEach(o=>{this.executingCells.delete(o),this.executingCells.add(o+1)}),Array.from(this.editingMarkdownCells).filter(o=>o>=e).sort((o,a)=>a-o).forEach(o=>{this.editingMarkdownCells.delete(o),this.editingMarkdownCells.add(o+1)})}shiftIndicesDown(e){Array.from(this.cellOutputs.keys()).filter(o=>o>e).sort((o,a)=>o-a).forEach(o=>{const a=this.cellOutputs.get(o);this.cellOutputs.delete(o),this.cellOutputs.set(o-1,a)}),Array.from(this.executingCells).filter(o=>o>e).sort((o,a)=>o-a).forEach(o=>{this.executingCells.delete(o),this.executingCells.add(o-1)}),Array.from(this.editingMarkdownCells).filter(o=>o>e).sort((o,a)=>o-a).forEach(o=>{this.editingMarkdownCells.delete(o),this.editingMarkdownCells.add(o-1)})}getMonacoTheme(){const e=document.documentElement;return e.classList.contains("wa-dark")?"vs-dark":e.classList.contains("wa-light")?"vs":"vs-dark"}openPackageManager(){const e=this.notebook?.metadata?.required_packages||[];P.showPackageManager({packages:e,pyenv:this.pyenv,onPackageAdded:t=>{this.notebook&&(this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.required_packages||(this.notebook.metadata.required_packages=[]),this.notebook.metadata.required_packages.includes(t)||(this.notebook.metadata.required_packages.push(t),this.markDirty(!0)))},onPackageRemoved:t=>{if(!this.notebook?.metadata?.required_packages)return;const i=this.notebook.metadata.required_packages.indexOf(t);i>-1&&(this.notebook.metadata.required_packages.splice(i,1),this.markDirty(!0))}})}updated(e){super.updated(e),(e.has("pyConnected")||e.has("pyConnecting")||e.has("pyVersion")||e.has("isRunningAll"))&&this.updateToolbar(),this.notebook&&this.notebook.cells&&this.notebook.cells.forEach((t,i)=>{if(t.cell_type==="code"){const n=this.cellRefs.get(i);if(n&&n.value&&!this.monacoEditors.has(i)){const o=n.value,a=this.getCellSource(t),d=a.split(`
`).length,s=19,r=10,u=100,y=Math.max(u,d*s+r);o.style.height=`${y}px`;const g=f.create(o,{value:a,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});g.onDidContentSizeChange(()=>{const m=g.getContentHeight();o.style.height=`${Math.max(u,m+r)}px`,g.layout()}),g.onDidChangeModelContent(()=>{const m=g.getValue(),w=this.getCellSource(t);m!==w&&this.markDirty(!0)}),this.monacoEditors.set(i,g)}}})}render(){return this.notebook?l`
            <style>
                ${T}
            </style>
            <div class="notebook-cells">
                ${M(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
            </div>
        `:l`<div class="loading">Loading notebook...</div>`}};c.styles=C`
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
    `;h([O({attribute:!1})],c.prototype,"input",2);h([p()],c.prototype,"notebook",2);h([p()],c.prototype,"cellOutputs",2);h([p()],c.prototype,"executingCells",2);h([p()],c.prototype,"pyenv",2);h([p()],c.prototype,"pyConnected",2);h([p()],c.prototype,"pyConnecting",2);h([p()],c.prototype,"pyVersion",2);h([p()],c.prototype,"editingMarkdownCells",2);h([p()],c.prototype,"executionCounter",2);h([p()],c.prototype,"isRunningAll",2);h([p()],c.prototype,"highlightedCellIndex",2);c=h([R("k-notebook-editor")],c);const N=({editorRegistry:e})=>{e.registerEditorInputHandler({canHandle:t=>t instanceof v&&t.getName().toLowerCase().endsWith(".ipynb"),handle:async t=>{const i={title:t.getName(),data:t,key:t.getName(),editorId:"notebook-editor",icon:"k jupyter",noOverflow:!0,state:{}};return i.widgetFactory=()=>l`
                <k-notebook-editor .input=${i}></k-notebook-editor>`,i},ranking:100})};export{c as KNotebookEditor,N as default};
