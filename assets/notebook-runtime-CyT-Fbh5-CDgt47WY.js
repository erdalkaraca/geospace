import{x as c,J as C,H as x,M as _,N as $,P as E,y as A,z as M,I as u,A as S}from"./index-8b_zEHWw.js";import{m as O,P,w as R,u as z}from"./geospace-app-BYDv20Zk.js";import{e as b,s as D}from"./editor.main-ChA2hgQD.js";import{pythonPackageManagerService as T}from"./package-manager-extension-Bb1gA_o0-5stLDKNa.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.LTSJC6DR-BTS7fm5P.js";import"./chunk.RRCUZAZD-5O78oK5S.js";var q=Object.defineProperty,F=Object.getOwnPropertyDescriptor,h=(e,t,o,i)=>{for(var a=i>1?void 0:i?F(t,o):t,r=e.length-1,d;r>=0;r--)(d=e[r])&&(a=(i?d(t,o,a):d(a))||a);return i&&a&&q(t,o,a),a};let p=class extends O{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.pyConnecting=!1,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.highlightedCellIndex=-1,this.focusedCellIndex=-1,this.cancelRunAll=!1,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.focusedCellIndex=-1,this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.pyConnected=!1,this.pyVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.saveEditorContents(),this.notebook.cells.forEach((o,i)=>{if(o.cell_type==="code"){const a=this.cellOutputs.get(i);o.outputs=a?this.convertOutputToJupyter(a,o.execution_count):[]}});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}doBeforeUI(){this.loadNotebook()}renderToolbar(){const e=this.pyConnecting?"Connecting to Python...":this.pyConnected?"Python Connected":"Python Disconnected - Click to connect",t=this.pyConnecting?"Connecting...":this.pyConnected&&this.pyVersion?`Python ${this.pyVersion}`:"Not connected",o=this.pyConnected?"var(--wa-color-green-40)":this.pyConnecting?"var(--wa-color-warning-500)":"var(--wa-color-red-40)",i=this.isRunningAll?c`
            <wa-button size="small" appearance="plain" @click=${()=>this.cancelAllCells()} title="Cancel running all cells">
                <wa-icon name="stop" label="Stop"></wa-icon>
                Cancel All
            </wa-button>
        `:c`
            <wa-button size="small" appearance="plain" @click=${()=>this.runAllCells()} title="Run all code cells sequentially">
                <wa-icon name="play" label="Run"></wa-icon>
                Run All
            </wa-button>
        `;return c`
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
                    style=${C({color:o})}
                ></wa-icon>
                ${t}
            </wa-button>
            ${i}
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
        `}doInitUI(){this.setupThemeObserver()}async loadNotebook(){const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(o){console.error("Failed to parse notebook:",o),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if(this.notebook?.cells){const o=this.notebook.cells.filter(i=>i.cell_type==="code").map(i=>i.execution_count??0).reduce((i,a)=>Math.max(i,a),0);this.executionCounter=o,this.notebook.cells.forEach((i,a)=>{if(i.cell_type==="code"&&i.outputs&&i.outputs.length>0){const r=this.convertOutputFromJupyter(i.outputs[0]);r&&this.cellOutputs.set(a,r)}})}}setupThemeObserver(){const e=document.documentElement;let t=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const o=this.getMonacoTheme();o!==t&&(t=o,b.setTheme(o))}),this.themeObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}convertOutputToJupyter(e,t){if(e.type==="execute_result"){const o={};return e.imageData&&(o["image/png"]=e.imageData),e.data&&(o["text/plain"]=e.data),[{output_type:"execute_result",data:o,execution_count:t,metadata:{}}]}else if(e.type==="error")return[{output_type:"error",ename:"Error",evalue:e.data,traceback:[e.data]}];return[]}convertOutputFromJupyter(e){return e.output_type==="execute_result"&&e.data?{type:"execute_result",data:e.data["text/plain"]||"",imageData:e.data["image/png"]||void 0}:e.output_type==="error"?{type:"error",data:e.evalue||e.traceback?.join(`
`)||"Unknown error"}:null}renderHeaderActions(e,t){return c`
            <div class="cell-header-actions">
                ${t||""}
                ${t?c`<span class="divider"></span>`:""}
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(e,"code")} title="Add code cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="code" label="Code"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(e,"markdown")} title="Add markdown cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="font" label="Markdown"></wa-icon>
                </wa-button>
                <span class="divider"></span>
                <wa-button size="small" appearance="plain" @click=${()=>this.deleteCell(e)} title="Delete cell" ?disabled=${this.notebook.cells.length<=1}>
                    <wa-icon name="trash" label="Delete cell"></wa-icon>
                </wa-button>
            </div>
        `}renderFooterActions(e){return c`
            <div class="cell-footer">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(e+1,"code")} title="Add code cell after">
                    <wa-icon name="code" label="Code"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(e+1,"markdown")} title="Add markdown cell after">
                    <wa-icon name="font" label="Markdown"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
            </div>
        `}stringToSourceArray(e){if(!e)return[""];const t=e.split(`
`).map(o=>o+`
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async initPyodide(){if(!this.pyenv){this.pyenv=new P;const e=await R.getWorkspace();if(e){await this.pyenv.init(e),this.pyConnected=!0;try{const o=await this.pyenv.execCode("import sys; sys.version.split()[0]");this.pyVersion=o?.result||"Unknown"}catch(o){console.error("Failed to get Python version:",o),this.pyVersion="Unknown"}const t=this.notebook?.metadata?.required_packages||[];if(t.length>0)try{await this.pyenv.loadPackages(t)}catch(o){console.error("Failed to load required packages:",o)}try{await this.pyenv.execCode(`
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
`)}catch(o){console.error("Failed to configure matplotlib:",o)}}}}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type==="code"){this.executingCells.add(e),this.requestUpdate();try{await this.initPyodide();const o=this.monacoEditors.get(e);let i=o?o.getValue():this.getCellSource(t);const a=await this.pyenv.execCode(i),r=[];if(a&&typeof a=="object"&&"console"in a){const n=a.console;if(Array.isArray(n)&&n.length>0){const s=n.filter(l=>l&&l.trim());s.length>0&&r.push(...s)}}let d;try{const n=await this.pyenv.execCode('_display_data if "_display_data" in dir() else None'),s=n&&typeof n=="object"?n.result:n;s&&String(s)!=="None"&&String(s)!=="undefined"&&(d=String(s),await this.pyenv.execCode("_display_data = None"))}catch(n){console.debug("No display data to retrieve:",n)}if(!d){const n=a&&typeof a=="object"?a.result:a;if(n!=null&&String(n)!=="undefined"){const s=String(n);s&&s!=="undefined"&&r.push(s)}}this.cellOutputs.set(e,{type:"execute_result",data:r.length>0?r.join(`
`):void 0,imageData:d}),this.executionCounter++,t.execution_count=this.executionCounter,this.markDirty(!0)}catch(o){this.executingCells.has(e)&&this.cellOutputs.set(e,{type:"error",data:String(o)})}finally{this.executingCells.delete(e),this.requestUpdate()}}}async cancelExecution(e){if(this.pyenv)if(this.pyenv.canInterrupt())this.pyenv.interrupt();else{this.cellOutputs.set(e,{type:"error",data:"Execution cancelled by user (worker terminated - SharedArrayBuffer not available for graceful interrupt)"}),this.executingCells.delete(e),this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0;try{await this.initPyodide()}catch(t){console.error("Failed to reinitialize Python after cancellation:",t)}this.requestUpdate()}}clearAllOutputs(){this.cellOutputs.clear(),this.executionCounter=0,this.notebook?.cells&&this.notebook.cells.forEach(e=>{e.cell_type==="code"&&(e.execution_count=null,e.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async restartKernel(){if(!(!this.pyenv||this.pyConnecting))try{this.pyConnecting=!0,this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0,this.requestUpdate(),await this.initPyodide(),this.requestUpdate()}catch(e){console.error("Failed to restart kernel:",e)}finally{this.pyConnecting=!1}}async runAllCells(){if(this.notebook?.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let e=0;e<this.notebook.cells.length&&!this.cancelRunAll;e++)this.notebook.cells[e].cell_type==="code"&&await this.executeCell(e)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const i=t.target.value;if(this.notebook&&this.notebook.cells[e]){const a=this.notebook.cells[e],r=this.getCellSource(a);a.source=this.stringToSourceArray(i),r!==i&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const o=this.getCellSource(e),i=!o||o.trim()==="";if(this.editingMarkdownCells.has(t)){const n=c`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${s=>{const l=s.target.closest(".markdown-cell")?.querySelector("textarea");l&&this.saveMarkdownEdit(t,{target:l})}}
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
            `;return c`
                <div class="cell-wrapper">
                    <wa-animation 
                        name="bounce" 
                        duration="1000" 
                        iterations="1"
                        ?play=${this.highlightedCellIndex===t}
                        @wa-finish=${()=>this.highlightedCellIndex=-1}>
                        <div class="cell markdown-cell editing">
                            <div class="cell-header">
                                ${this.renderHeaderActions(t,n)}
                                <span class="cell-label">Markdown</span>
                            </div>
                            <textarea 
                                class="markdown-editor"
                                .value=${o}
                                @blur=${s=>this.saveMarkdownEdit(t,s)}
                                placeholder="Enter markdown content here... (# for headings, ** for bold, etc.)"></textarea>
                            ${this.renderFooterActions(t)}
                        </div>
                    </wa-animation>
                </div>
            `}const r=z.parse(o),d=c`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.toggleMarkdownEdit(t)}
                title="Edit markdown">
                <wa-icon name="pencil" label="Edit"></wa-icon>
            </wa-button>
        `;return c`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===t}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell markdown-cell ${i?"empty":""}" @dblclick=${()=>this.toggleMarkdownEdit(t)}>
                        <div class="cell-header">
                            ${this.renderHeaderActions(t,d)}
                            <span class="cell-label"></span>
                        </div>
                        <div class="cell-content">
                            ${i?c`
                                <div class="markdown-placeholder">
                                    <wa-icon name="font" label="Markdown"></wa-icon>
                                    <span>Double-click or click the pencil icon to edit markdown</span>
                                </div>
                            `:x(r)}
                        </div>
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCodeCell(e,t){const o=this.cellOutputs.get(t),i=this.executingCells.has(t);this.cellRefs.has(t)||this.cellRefs.set(t,_());const a=this.cellRefs.get(t),r=i?c`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.cancelExecution(t)}
                title="Stop execution">
                <wa-icon name="stop" label="Stop" style="color: var(--wa-color-danger-500);"></wa-icon>
            </wa-button>
        `:c`
            <k-command 
                cmd="run_python"
                icon="play"
                title="Run cell"
                size="small"
                appearance="plain"
                .params=${{cellIndex:t}}>
            </k-command>
        `;return c`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===t}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell code-cell ${i?"executing":""}">
                        <div class="cell-header">
                            <span class="cell-label">
                                ${i?c`
                                    In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${i}>
                                        <span class="executing-indicator">*</span>
                                    </wa-animation>]
                                `:c`
                                    In [${e.execution_count??" "}]
                                `}
                            </span>
                            ${this.renderHeaderActions(t,r)}
                        </div>
                        <div class="cell-input monaco-container" ${$(a)} data-cell-index="${t}"></div>
                        ${o?c`
                            <div class="cell-output ${o.type==="error"?"output-error":""}">
                                <div class="output-label">Out [${t+1}]:</div>
                                ${o.imageData?c`
                                    <img src="data:image/png;base64,${o.imageData}" alt="Output image" class="output-image" />
                                `:""}
                                ${o.data?c`<pre><code>${o.data}</code></pre>`:""}
                            </div>
                        `:""}
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const o=this.getCellSource(e);return c`
                <div class="cell raw-cell">
                    <pre><code>${o}</code></pre>
                </div>
            `}}async connectPython(){if(!(this.pyConnecting||this.pyConnected))try{this.pyConnecting=!0,await this.initPyodide()}catch(e){console.error("Failed to initialize Pyodide:",e)}finally{this.pyConnecting=!1}}addCell(e,t="code"){this.notebook&&(this.saveEditorContents(),this.shiftIndices(e,"up"),this.notebook.cells.splice(e,0,this.createCell(t)),t==="markdown"&&this.editingMarkdownCells.add(e),this.resetCellState(),this.highlightedCellIndex=e,this.updateComplete.then(()=>{this.scrollToCell(e)}))}scrollToCell(e){const t=this.shadowRoot?.querySelectorAll(".cell-wrapper")[e];if(!t)return;const o=this.closest("wa-scroller");if(!o){t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});return}const i=o.getBoundingClientRect(),a=t.getBoundingClientRect(),d=o.scrollTop+(a.top-i.top)-i.height/2+a.height/2;o.scrollTo({top:d,behavior:"smooth"})}saveEditorContents(){this.monacoEditors.forEach((e,t)=>{const o=this.notebook.cells[t];o&&o.cell_type==="code"&&(o.source=this.stringToSourceArray(e.getValue()))})}resetCellState(){this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0)}deleteCell(e){!this.notebook||this.notebook.cells.length<=1||(this.saveEditorContents(),this.cellOutputs.delete(e),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.notebook.cells.splice(e,1),this.shiftIndices(e,"down"),this.resetCellState())}shiftIndices(e,t){const o=t==="up"?1:-1,i=t==="up"?n=>n>=e:n=>n>e,a=t==="up"?(n,s)=>s-n:(n,s)=>n-s,r=n=>{Array.from(n.keys()).filter(i).sort(a).forEach(l=>{const m=n.get(l);n.delete(l),n.set(l+o,m)})},d=n=>{Array.from(n).filter(i).sort(a).forEach(l=>{n.delete(l),n.add(l+o)})};r(this.cellOutputs),d(this.executingCells),d(this.editingMarkdownCells)}initializeMonacoEditor(e,t,o){const i=this.getCellSource(t),a=i.split(`
`).length,r=19,d=10,n=100,s=Math.max(n,a*r+d);e.style.height=`${s}px`;const l=b.create(e,{value:i,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});let m=!1;l.onDidFocusEditorText(()=>{m=!0,this.focusedCellIndex=o}),l.onDidBlurEditorText(()=>{m=!1,this.focusedCellIndex===o&&(this.focusedCellIndex=-1)}),e.addEventListener("wheel",g=>{if(!m){const y=l.getScrollTop(),f=l.getScrollHeight(),w=l.getContentHeight(),k=f>w,v=g.deltaY<0&&y<=0||g.deltaY>0&&y+w>=f;(!k||v)&&g.stopImmediatePropagation()}},{passive:!0,capture:!0}),l.onDidContentSizeChange(()=>{const g=l.getContentHeight();e.style.height=`${Math.max(n,g+d)}px`,l.layout()}),l.onDidChangeModelContent(()=>{const g=l.getValue(),y=this.getCellSource(t);g!==y&&this.markDirty(!0)}),this.monacoEditors.set(o,l)}getMonacoTheme(){const e=document.documentElement;return e.classList.contains("wa-dark")?"vs-dark":e.classList.contains("wa-light")?"vs":"vs-dark"}openPackageManager(){const e=this.notebook?.metadata?.required_packages||[];T.showPackageManager({packages:e,pyenv:this.pyenv,onPackageAdded:t=>{this.notebook&&(this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.required_packages||(this.notebook.metadata.required_packages=[]),this.notebook.metadata.required_packages.includes(t)||(this.notebook.metadata.required_packages.push(t),this.markDirty(!0)))},onPackageRemoved:t=>{if(!this.notebook?.metadata?.required_packages)return;const o=this.notebook.metadata.required_packages.indexOf(t);o>-1&&(this.notebook.metadata.required_packages.splice(o,1),this.markDirty(!0))}})}updated(e){super.updated(e),(e.has("pyConnected")||e.has("pyConnecting")||e.has("pyVersion")||e.has("isRunningAll"))&&this.updateToolbar(),this.notebook?.cells&&this.notebook.cells.forEach((t,o)=>{if(t.cell_type==="code"){const i=this.cellRefs.get(o);i?.value&&!this.monacoEditors.has(o)&&this.initializeMonacoEditor(i.value,t,o)}})}render(){return this.notebook?c`
            <style>
                ${D}
            </style>
            <div class="notebook-cells">
                ${E(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
            </div>
        `:c`<div class="loading">Loading notebook...</div>`}};p.styles=A`
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
            justify-content: flex-start;
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
            justify-content: flex-start;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            flex-wrap: nowrap;
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
    `;h([M({attribute:!1})],p.prototype,"input",2);h([u()],p.prototype,"notebook",2);h([u()],p.prototype,"cellOutputs",2);h([u()],p.prototype,"executingCells",2);h([u()],p.prototype,"pyenv",2);h([u()],p.prototype,"pyConnected",2);h([u()],p.prototype,"pyConnecting",2);h([u()],p.prototype,"pyVersion",2);h([u()],p.prototype,"editingMarkdownCells",2);h([u()],p.prototype,"executionCounter",2);h([u()],p.prototype,"isRunningAll",2);h([u()],p.prototype,"highlightedCellIndex",2);p=h([S("k-notebook-editor")],p);export{p as KNotebookEditor};
