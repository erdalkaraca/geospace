import{F as v,c as C,x as l,z as x,o as $,e as E,f as y,b as _,n as P,d as h,t as S}from"./index-BxtD-MWy.js";import{f as M,P as A,m as O,g as w}from"./main-BhfuPqyN.js";import{e as k,s as R}from"./editor.main-YuH9cZN6.js";var z=Object.defineProperty,T=Object.getOwnPropertyDescriptor,p=(e,t,o,i)=>{for(var a=i>1?void 0:i?T(t,o):t,n=e.length-1,d;n>=0;n--)(d=e[n])&&(a=(i?d(t,o,a):d(a))||a);return i&&a&&z(t,o,a),a};let c=class extends M{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.pyConnecting=!1,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.highlightedCellIndex=-1,this.showPackageManager=!1,this.loadingPackages=!1,this.cancelRunAll=!1,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.pyConnected=!1,this.pyVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.saveEditorContents(),this.notebook.cells.forEach((o,i)=>{if(o.cell_type==="code"){const a=this.cellOutputs.get(i);if(a)if(a.type==="execute_result"){const n={};a.imageData&&(n["image/png"]=a.imageData),a.data&&(n["text/plain"]=a.data),o.outputs=[{output_type:"execute_result",data:n,execution_count:o.execution_count,metadata:{}}]}else a.type==="error"&&(o.outputs=[{output_type:"error",ename:"Error",evalue:a.data,traceback:[a.data]}]);else o.outputs=[]}});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}doBeforeUI(){this.loadNotebook()}renderToolbar(){const e=this.pyConnecting?"Connecting to Python...":this.pyConnected?"Python Connected":"Python Disconnected - Click to connect",t=this.pyConnecting?"Connecting...":this.pyConnected&&this.pyVersion?`Python ${this.pyVersion}`:"Not connected",o=this.pyConnected?"var(--wa-color-green-40)":this.pyConnecting?"var(--wa-color-warning-500)":"var(--wa-color-red-40)";return l`
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
                @click=${()=>this.showPackageManager=!0}
                title="Manage required packages for this notebook">
                <wa-icon name="box" label="Packages"></wa-icon>
                Packages
            </wa-button>
        `}doInitUI(){this.setupThemeObserver()}async loadNotebook(){var o;const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(i){console.error("Failed to parse notebook:",i),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if((o=this.notebook)!=null&&o.cells){const i=this.notebook.cells.filter(a=>a.cell_type==="code").map(a=>a.execution_count??0).reduce((a,n)=>Math.max(a,n),0);this.executionCounter=i,this.notebook.cells.forEach((a,n)=>{var d;if(a.cell_type==="code"&&a.outputs&&a.outputs.length>0){const s=a.outputs[0];s.output_type==="execute_result"&&s.data?this.cellOutputs.set(n,{type:"execute_result",data:s.data["text/plain"]||"",imageData:s.data["image/png"]||void 0}):s.output_type==="error"&&this.cellOutputs.set(n,{type:"error",data:s.evalue||((d=s.traceback)==null?void 0:d.join(`
`))||"Unknown error"})}})}}setupThemeObserver(){const e=document.documentElement;let t=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const o=this.getMonacoTheme();o!==t&&(t=o,k.setTheme(o))}),this.themeObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}renderHeaderActions(e,t){return l`
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
`).map(o=>o+`
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async initPyodide(){var e,t;if(!this.pyenv){this.pyenv=new A;const o=await x.getWorkspace();if(o){await this.pyenv.init(o),this.pyConnected=!0;try{const a=await this.pyenv.execCode("import sys; sys.version.split()[0]");this.pyVersion=(a==null?void 0:a.result)||"Unknown"}catch(a){console.error("Failed to get Python version:",a),this.pyVersion="Unknown"}const i=((t=(e=this.notebook)==null?void 0:e.metadata)==null?void 0:t.required_packages)||[];if(i.length>0){this.loadingPackages=!0,this.packageLoadError=void 0;try{await this.pyenv.loadPackages(i)}catch(a){console.error("Failed to load required packages:",a),this.packageLoadError=String(a)}finally{this.loadingPackages=!1}}try{await this.pyenv.execCode(`
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
`)}catch(a){console.error("Failed to configure matplotlib:",a)}}}}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type==="code"){this.executingCells.add(e),this.requestUpdate();try{await this.initPyodide();const o=this.monacoEditors.get(e);let i=o?o.getValue():this.getCellSource(t);const a=await this.pyenv.execCode(i),n=[];if(a&&typeof a=="object"&&"console"in a){const s=a.console;if(Array.isArray(s)&&s.length>0){const r=s.filter(u=>u&&u.trim());r.length>0&&n.push(...r)}}let d;try{const s=await this.pyenv.execCode('_display_data if "_display_data" in dir() else None'),r=s&&typeof s=="object"?s.result:s;r&&String(r)!=="None"&&String(r)!=="undefined"&&(d=String(r),await this.pyenv.execCode("_display_data = None"))}catch(s){console.debug("No display data to retrieve:",s)}if(!d){const s=a&&typeof a=="object"?a.result:a;if(s!=null&&String(s)!=="undefined"){const r=String(s);r&&r!=="undefined"&&n.push(r)}}this.cellOutputs.set(e,{type:"execute_result",data:n.length>0?n.join(`
`):void 0,imageData:d}),this.executionCounter++,t.execution_count=this.executionCounter,this.markDirty(!0)}catch(o){this.executingCells.has(e)&&this.cellOutputs.set(e,{type:"error",data:String(o)})}finally{this.executingCells.delete(e),this.requestUpdate()}}}async cancelExecution(e){if(this.pyenv)if(this.pyenv.canInterrupt())this.pyenv.interrupt();else{this.cellOutputs.set(e,{type:"error",data:"Execution cancelled by user (worker terminated - SharedArrayBuffer not available for graceful interrupt)"}),this.executingCells.delete(e),this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0;try{await this.initPyodide()}catch(t){console.error("Failed to reinitialize Python after cancellation:",t)}this.requestUpdate()}}clearAllOutputs(){var e;this.cellOutputs.clear(),this.executionCounter=0,(e=this.notebook)!=null&&e.cells&&this.notebook.cells.forEach(t=>{t.cell_type==="code"&&(t.execution_count=null,t.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async restartKernel(){if(!(!this.pyenv||this.pyConnecting))try{this.pyConnecting=!0,this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0,this.requestUpdate(),await this.initPyodide(),this.requestUpdate()}catch(e){console.error("Failed to restart kernel:",e)}finally{this.pyConnecting=!1}}async runAllCells(){var e;if((e=this.notebook)!=null&&e.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let t=0;t<this.notebook.cells.length&&!this.cancelRunAll;t++)this.notebook.cells[t].cell_type==="code"&&await this.executeCell(t)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const i=t.target.value;if(this.notebook&&this.notebook.cells[e]){const a=this.notebook.cells[e],n=this.getCellSource(a);a.source=this.stringToSourceArray(i),n!==i&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const o=this.getCellSource(e),i=!o||o.trim()==="";if(this.editingMarkdownCells.has(t)){const s=l`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${r=>{var m;const u=(m=r.target.closest(".markdown-cell"))==null?void 0:m.querySelector("textarea");u&&this.saveMarkdownEdit(t,{target:u})}}
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
                                .value=${o}
                                @blur=${r=>this.saveMarkdownEdit(t,r)}
                                placeholder="Enter markdown content here... (# for headings, ** for bold, etc.)"></textarea>
                            ${this.renderFooterActions(t)}
                        </div>
                    </wa-animation>
                </div>
            `}const n=O.parse(o),d=l`
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
                    <div class="cell markdown-cell ${i?"empty":""}" @dblclick=${()=>this.toggleMarkdownEdit(t)}>
                        <div class="cell-header">
                            <span class="cell-label"></span>
                            ${this.renderHeaderActions(t,d)}
                        </div>
                        <div class="cell-content">
                            ${i?l`
                                <div class="markdown-placeholder">
                                    <wa-icon name="font" label="Markdown"></wa-icon>
                                    <span>Double-click or click the pencil icon to edit markdown</span>
                                </div>
                            `:$(n)}
                        </div>
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCodeCell(e,t){const o=this.cellOutputs.get(t),i=this.executingCells.has(t);this.cellRefs.has(t)||this.cellRefs.set(t,E());const a=this.cellRefs.get(t),n=l`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>i?this.cancelExecution(t):this.executeCell(t)}
                title=${i?"Stop execution":"Run cell"}
                class="run-button-left">
                ${i?l`
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
                    <div class="cell code-cell ${i?"executing":""}">
                        <div class="cell-header">
                            ${n}
                            <span class="cell-label">
                                ${i?l`
                                    In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${i}>
                                        <span class="executing-indicator">*</span>
                                    </wa-animation>]:
                                `:l`
                                    In [${e.execution_count??" "}]:
                                `}
                            </span>
                            ${this.renderHeaderActions(t)}
                        </div>
                        <div class="cell-input monaco-container" ${y(a)} data-cell-index="${t}"></div>
                        ${o?l`
                            <div class="cell-output ${o.type==="error"?"output-error":""}">
                                <div class="output-label">Out [${t+1}]:</div>
                                ${o.imageData?l`
                                    <img src="data:image/png;base64,${o.imageData}" alt="Output image" class="output-image" />
                                `:""}
                                ${o.data?l`<pre><code>${o.data}</code></pre>`:""}
                            </div>
                        `:""}
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const o=this.getCellSource(e);return l`
                <div class="cell raw-cell">
                    <pre><code>${o}</code></pre>
                </div>
            `}}async connectPython(){if(!(this.pyConnecting||this.pyConnected))try{this.pyConnecting=!0,await this.initPyodide()}catch(e){console.error("Failed to initialize Pyodide:",e)}finally{this.pyConnecting=!1}}addCellBefore(e,t="code"){this.addCell(e,t)}addCellAfter(e,t="code"){this.addCell(e+1,t)}addCell(e,t="code"){this.notebook&&(this.saveEditorContents(),this.shiftIndicesUp(e),this.notebook.cells.splice(e,0,this.createCell(t)),t==="markdown"&&this.editingMarkdownCells.add(e),this.resetCellState(),this.highlightedCellIndex=e,this.updateComplete.then(()=>{this.scrollToCell(e)}))}scrollToCell(e){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelectorAll(".cell-wrapper")[e];if(!t)return;const o=this.closest("wa-scroller");if(!o){t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});return}const i=o.getBoundingClientRect(),a=t.getBoundingClientRect(),d=o.scrollTop+(a.top-i.top)-i.height/2+a.height/2;o.scrollTo({top:d,behavior:"smooth"})}saveEditorContents(){this.monacoEditors.forEach((e,t)=>{const o=this.notebook.cells[t];o&&o.cell_type==="code"&&(o.source=this.stringToSourceArray(e.getValue()))})}resetCellState(){this.monacoEditors.forEach(e=>e.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0)}deleteCell(e){!this.notebook||this.notebook.cells.length<=1||(this.saveEditorContents(),this.cellOutputs.delete(e),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.notebook.cells.splice(e,1),this.shiftIndicesDown(e),this.resetCellState())}shiftIndicesUp(e){Array.from(this.cellOutputs.keys()).filter(a=>a>=e).sort((a,n)=>n-a).forEach(a=>{const n=this.cellOutputs.get(a);this.cellOutputs.delete(a),this.cellOutputs.set(a+1,n)}),Array.from(this.executingCells).filter(a=>a>=e).sort((a,n)=>n-a).forEach(a=>{this.executingCells.delete(a),this.executingCells.add(a+1)}),Array.from(this.editingMarkdownCells).filter(a=>a>=e).sort((a,n)=>n-a).forEach(a=>{this.editingMarkdownCells.delete(a),this.editingMarkdownCells.add(a+1)})}shiftIndicesDown(e){Array.from(this.cellOutputs.keys()).filter(a=>a>e).sort((a,n)=>a-n).forEach(a=>{const n=this.cellOutputs.get(a);this.cellOutputs.delete(a),this.cellOutputs.set(a-1,n)}),Array.from(this.executingCells).filter(a=>a>e).sort((a,n)=>a-n).forEach(a=>{this.executingCells.delete(a),this.executingCells.add(a-1)}),Array.from(this.editingMarkdownCells).filter(a=>a>e).sort((a,n)=>a-n).forEach(a=>{this.editingMarkdownCells.delete(a),this.editingMarkdownCells.add(a-1)})}getMonacoTheme(){const e=document.documentElement;return e.classList.contains("wa-dark")?"vs-dark":e.classList.contains("wa-light")?"vs":"vs-dark"}addPackage(e){if(!this.notebook||!e||e.trim()==="")return;this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.required_packages||(this.notebook.metadata.required_packages=[]);const t=e.trim();this.notebook.metadata.required_packages.includes(t)||(this.notebook.metadata.required_packages.push(t),this.markDirty(!0),this.requestUpdate())}removePackage(e){var o,i;if(!((i=(o=this.notebook)==null?void 0:o.metadata)!=null&&i.required_packages))return;const t=this.notebook.metadata.required_packages.indexOf(e);t>-1&&(this.notebook.metadata.required_packages.splice(t,1),this.markDirty(!0),this.requestUpdate())}renderPackageManager(){var o,i;if(!this.showPackageManager)return"";const e=((i=(o=this.notebook)==null?void 0:o.metadata)==null?void 0:i.required_packages)||[];let t;return l`
            <wa-dialog 
                label="Manage Required Packages" 
                ?open=${this.showPackageManager}
                @wa-after-hide=${()=>this.showPackageManager=!1}>
                <div class="package-manager">
                    <p class="package-manager-description">
                        Specify Python packages that should be automatically loaded when connecting to the kernel.
                    </p>

                    ${this.loadingPackages?l`
                        <wa-alert variant="primary" open>
                            <wa-icon slot="icon" name="circle-notch" library="fa" class="spinning"></wa-icon>
                            Loading packages...
                        </wa-alert>
                    `:""}

                    ${this.packageLoadError?l`
                        <wa-alert variant="danger" open closable @wa-after-hide=${()=>this.packageLoadError=void 0}>
                            <wa-icon slot="icon" name="exclamation-triangle"></wa-icon>
                            <strong>Package Load Error:</strong><br>
                            ${this.packageLoadError}
                        </wa-alert>
                    `:""}

                    <div class="package-input-group">
                        <wa-input 
                            placeholder="Package name (e.g., pandas, numpy)" 
                            ${y(a=>t=a)}
                            @keydown=${a=>{a.key==="Enter"&&t&&(this.addPackage(t.value),t.value="")}}>
                            <wa-icon slot="prefix" name="box"></wa-icon>
                        </wa-input>
                        <wa-button 
                            @click=${()=>{t&&(this.addPackage(t.value),t.value="")}}
                            variant="primary">
                            <wa-icon slot="prefix" name="plus"></wa-icon>
                            Add
                        </wa-button>
                    </div>

                    ${e.length===0?l`
                        <div class="empty-state">
                            <wa-icon name="box" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                            <p>No packages configured</p>
                            <p style="font-size: 0.9rem; opacity: 0.7;">Add packages above to auto-load them when the kernel connects</p>
                        </div>
                    `:l`
                        <div class="package-list">
                            <div class="package-list-header">
                                <strong>Required Packages (${e.length})</strong>
                            </div>
                            ${w(e,a=>a,a=>l`
                                <div class="package-item">
                                    <wa-icon name="box" style="opacity: 0.5;"></wa-icon>
                                    <span class="package-name">${a}</span>
                                    <wa-button 
                                        size="small" 
                                        variant="text"
                                        @click=${()=>this.removePackage(a)}
                                        title="Remove package">
                                        <wa-icon name="xmark"></wa-icon>
                                    </wa-button>
                                </div>
                            `)}
                        </div>
                    `}
                </div>
                <div slot="footer" class="package-manager-footer">
                    ${this.pyConnected&&e.length>0?l`
                        <wa-button 
                            variant="default"
                            @click=${async()=>{if(this.pyenv){this.loadingPackages=!0,this.packageLoadError=void 0;try{await this.pyenv.loadPackages(e)}catch(a){this.packageLoadError=String(a)}finally{this.loadingPackages=!1}}}}
                            ?disabled=${this.loadingPackages}>
                            <wa-icon slot="prefix" name="arrows-rotate"></wa-icon>
                            Reload Packages
                        </wa-button>
                    `:""}
                    <wa-button 
                        variant="primary"
                        @click=${()=>this.showPackageManager=!1}>
                        Done
                    </wa-button>
                </div>
            </wa-dialog>
        `}updated(e){super.updated(e),(e.has("pyConnected")||e.has("pyConnecting")||e.has("pyVersion")||e.has("isRunningAll"))&&this.updateToolbar(),this.notebook&&this.notebook.cells&&this.notebook.cells.forEach((t,o)=>{if(t.cell_type==="code"){const i=this.cellRefs.get(o);if(i&&i.value&&!this.monacoEditors.has(o)){const a=i.value,n=this.getCellSource(t),d=n.split(`
`).length,s=19,r=10,u=100,m=Math.max(u,d*s+r);a.style.height=`${m}px`;const g=k.create(a,{value:n,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});g.onDidContentSizeChange(()=>{const f=g.getContentHeight();a.style.height=`${Math.max(u,f+r)}px`,g.layout()}),g.onDidChangeModelContent(()=>{const f=g.getValue(),b=this.getCellSource(t);f!==b&&this.markDirty(!0)}),this.monacoEditors.set(o,g)}}})}render(){return this.notebook?l`
            <style>
                ${R}
            </style>
            <div class="notebook-cells">
                ${w(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
            </div>
            ${this.renderPackageManager()}
        `:l`<div class="loading">Loading notebook...</div>`}};c.styles=_`
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

        .package-manager {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .package-manager-description {
            margin: 0;
            font-size: 0.95rem;
            opacity: 0.8;
            line-height: 1.5;
        }

        .package-input-group {
            display: flex;
            gap: 0.5rem;
        }

        .package-input-group wa-input {
            flex: 1;
        }

        .package-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 400px;
            overflow-y: auto;
        }

        .package-list-header {
            padding: 0.5rem;
            border-bottom: 1px solid var(--wa-color-outline);
            margin-bottom: 0.5rem;
        }

        .package-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            border-radius: 4px;
            background: var(--wa-color-surface-variant);
            transition: background 0.2s;
        }

        .package-item:hover {
            background: var(--wa-color-surface-container-highest);
        }

        .package-name {
            flex: 1;
            font-family: monospace;
            font-size: 0.95rem;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            padding: 3rem 1rem;
            text-align: center;
            opacity: 0.6;
        }

        .empty-state p {
            margin: 0;
        }

        .package-manager-footer {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            padding-top: 1rem;
            border-top: 1px solid var(--wa-color-outline);
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

    `;p([P({attribute:!1})],c.prototype,"input",2);p([h()],c.prototype,"notebook",2);p([h()],c.prototype,"cellOutputs",2);p([h()],c.prototype,"executingCells",2);p([h()],c.prototype,"pyenv",2);p([h()],c.prototype,"pyConnected",2);p([h()],c.prototype,"pyConnecting",2);p([h()],c.prototype,"pyVersion",2);p([h()],c.prototype,"editingMarkdownCells",2);p([h()],c.prototype,"executionCounter",2);p([h()],c.prototype,"isRunningAll",2);p([h()],c.prototype,"highlightedCellIndex",2);p([h()],c.prototype,"showPackageManager",2);p([h()],c.prototype,"loadingPackages",2);p([h()],c.prototype,"packageLoadError",2);c=p([S("k-notebook-editor")],c);const L=({editorRegistry:e})=>{e.registerEditorInputHandler({canHandle:t=>t instanceof v&&t.getName().toLowerCase().endsWith(".ipynb"),handle:async t=>{const o={title:t.getName(),data:t,key:t.getName(),icon:"k jupyter",noOverflow:!0,state:{}};return o.widgetFactory=()=>l`
                <k-notebook-editor .input=${o}></k-notebook-editor>`,o},ranking:100})};export{c as KNotebookEditor,L as default};
