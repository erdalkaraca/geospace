import { css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { marked } from "marked";
import * as monaco from 'monaco-editor';
import monacoStyles from "monaco-editor/min/vs/editor/editor.main.css?raw";
import type { EditorInput } from "../../core/editorregistry";
import { File, workspaceService } from "../../core/filesys";
import { PyEnv } from "../../core/pyservice";
import { KPart } from "../../parts/k-part";
import { pythonPackageManagerService } from "../python-package-manager/package-manager-extension";
import { activeEditorSignal } from "../../core/appstate";
import type { ExecutionContext } from "../../core/commandregistry";

interface NotebookCell {
    cell_type: 'code' | 'markdown' | 'raw';
    source: string | string[];
    outputs?: any[];
    execution_count?: number | null;
    metadata?: any;
}

interface NotebookData {
    cells: NotebookCell[];
    metadata?: {
        required_packages?: string[];
        [key: string]: any;
    };
    nbformat?: number;
    nbformat_minor?: number;
}

@customElement('k-notebook-editor')
export class KNotebookEditor extends KPart {
    @property({ attribute: false })
    public input?: EditorInput;

    @state()
    public notebook?: NotebookData;

    @state()
    private cellOutputs: Map<number, any> = new Map();

    @state()
    private executingCells: Set<number> = new Set();

    @state()
    private pyenv?: PyEnv;

    @state()
    private pyConnected: boolean = false;

    @state()
    private pyConnecting: boolean = false;

    @state()
    private pyVersion?: string;

    @state()
    private editingMarkdownCells: Set<number> = new Set();

    @state()
    private executionCounter: number = 0;

    @state()
    private isRunningAll: boolean = false;

    @state()
    private highlightedCellIndex: number = -1;

    public focusedCellIndex: number = -1;
    private cancelRunAll: boolean = false;

    private monacoEditors: Map<number, monaco.editor.IStandaloneCodeEditor> = new Map();
    private cellRefs: Map<number, Ref<HTMLElement>> = new Map();
    private themeObserver?: MutationObserver;

    protected doClose() {
        this.input = undefined;
        this.notebook = undefined;
        this.cellOutputs.clear();
        this.executingCells.clear();

        // Dispose Monaco editors
        this.monacoEditors.forEach(editor => editor.dispose());
        this.monacoEditors.clear();
        this.cellRefs.clear();
        this.focusedCellIndex = -1;

        if (this.themeObserver) {
            this.themeObserver.disconnect();
            this.themeObserver = undefined;
        }

        if (this.pyenv) {
            this.pyenv.close();
            this.pyenv = undefined;
        }

        this.pyConnected = false;
        this.pyVersion = undefined;
    }

    async save() {
        if (!this.notebook || !this.input) return;

        try {
            // Update cell contents from Monaco editors before saving
            this.saveEditorContents();

            this.notebook.cells.forEach((cell, index) => {
                if (cell.cell_type === 'code') {
                    const output = this.cellOutputs.get(index);
                    cell.outputs = output ? this.convertOutputToJupyter(output, cell.execution_count) : [];
                }
            });

            // Serialize notebook to JSON
            const notebookJson = JSON.stringify(this.notebook, null, 2);

            // Save to file
            const file: File = this.input.data;
            await file.saveContents(notebookJson);

            // Mark as not dirty
            this.markDirty(false);
        } catch (error) {
            console.error("Failed to save notebook:", error);
            throw error;
        }
    }

    protected doBeforeUI() {
        // Start loading notebook asynchronously
        this.loadNotebook();
    }

    protected renderToolbar() {
        const connectionTitle = this.pyConnecting 
            ? 'Connecting to Python...' 
            : this.pyConnected 
                ? 'Python Connected' 
                : 'Python Disconnected - Click to connect';
        
        const connectionText = this.pyConnecting
            ? 'Connecting...'
            : this.pyConnected && this.pyVersion 
                ? `Python ${this.pyVersion}` 
                : 'Not connected';
        
        const iconColor = this.pyConnected
            ? "var(--wa-color-green-40)"
            : this.pyConnecting
                ? "var(--wa-color-warning-500)"
                : "var(--wa-color-red-40)";

        const runAllButton = this.isRunningAll ? html`
            <wa-button size="small" appearance="plain" @click=${() => this.cancelAllCells()} title="Cancel running all cells">
                <wa-icon name="stop" label="Stop"></wa-icon>
                Cancel All
            </wa-button>
        ` : html`
            <wa-button size="small" appearance="plain" @click=${() => this.runAllCells()} title="Run all code cells sequentially">
                <wa-icon name="play" label="Run"></wa-icon>
                Run All
            </wa-button>
        `;

        return html`
            <wa-button 
                appearance="plain" 
                size="small"
                style="display: flex; align-items: center; gap: 0.5rem;"
                ?disabled=${this.pyConnecting}
                @click=${() => this.connectPython()}
                title=${connectionTitle}>
                <wa-icon 
                    name="circle"
                    label="Python status"
                    style=${styleMap({ color: iconColor })}
                ></wa-icon>
                ${connectionText}
            </wa-button>
            ${runAllButton}
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${() => this.clearAllOutputs()}
                title="Clear all outputs and reset execution counter">
                <wa-icon name="eraser" label="Clear"></wa-icon>
                Clear Outputs
            </wa-button>
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${() => this.restartKernel()}
                title="Restart Python kernel (clears all variables and state)"
                ?disabled=${!this.pyConnected || this.pyConnecting}>
                <wa-icon name="arrows-rotate" label="Restart"></wa-icon>
                Restart Kernel
            </wa-button>
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${() => this.openPackageManager()}
                title="Manage required packages for this notebook">
                <wa-icon name="box" label="Packages"></wa-icon>
                Packages
            </wa-button>
        `;
    }

    protected doInitUI() {
        this.setupThemeObserver();
    }

    private async loadNotebook() {
        const file: File = this.input!.data;
        const contents = await file.getContents();

        try {
            this.notebook = JSON.parse(contents as string);
        } catch (e) {
            console.error("Failed to parse notebook:", e);
            this.notebook = {
                cells: [{
                    cell_type: 'markdown',
                    source: ['# Error\nFailed to parse notebook file.']
                }]
            };
        }

        // Initialize execution counter from existing cells
        if (this.notebook?.cells) {
            const maxCount = this.notebook.cells
                .filter(cell => cell.cell_type === 'code')
                .map(cell => cell.execution_count ?? 0)
                .reduce((max, count) => Math.max(max, count), 0);
            this.executionCounter = maxCount;

            this.notebook.cells.forEach((cell, index) => {
                if (cell.cell_type === 'code' && cell.outputs && cell.outputs.length > 0) {
                    const output = this.convertOutputFromJupyter(cell.outputs[0]);
                    if (output) {
                        this.cellOutputs.set(index, output);
                    }
                }
            });
        }
    }

    private setupThemeObserver() {
        const rootElement = document.documentElement;
        let currentTheme = this.getMonacoTheme();

        this.themeObserver = new MutationObserver(() => {
            const newTheme = this.getMonacoTheme();
            // Only update if theme actually changed
            if (newTheme !== currentTheme) {
                currentTheme = newTheme;
                monaco.editor.setTheme(newTheme);
            }
        });

        this.themeObserver.observe(rootElement, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    private getCellSource(cell: NotebookCell): string {
        return Array.isArray(cell.source) ? cell.source.join('') : cell.source;
    }

    private convertOutputToJupyter(output: any, executionCount: number | null | undefined): any[] {
        if (output.type === 'execute_result') {
            const data: any = {};
            if (output.imageData) data['image/png'] = output.imageData;
            if (output.data) data['text/plain'] = output.data;
            return [{
                output_type: 'execute_result',
                data,
                execution_count: executionCount,
                metadata: {}
            }];
        } else if (output.type === 'error') {
            return [{
                output_type: 'error',
                ename: 'Error',
                evalue: output.data,
                traceback: [output.data]
            }];
        }
        return [];
    }

    private convertOutputFromJupyter(jupyterOutput: any): any | null {
        if (jupyterOutput.output_type === 'execute_result' && jupyterOutput.data) {
            return {
                type: 'execute_result',
                data: jupyterOutput.data['text/plain'] || '',
                imageData: jupyterOutput.data['image/png'] || undefined
            };
        } else if (jupyterOutput.output_type === 'error') {
            return {
                type: 'error',
                data: jupyterOutput.evalue || jupyterOutput.traceback?.join('\n') || 'Unknown error'
            };
        }
        return null;
    }

    private renderHeaderActions(index: number, additionalButton?: any) {
        return html`
            <div class="cell-header-actions">
                ${additionalButton || ''}
                ${additionalButton ? html`<span class="divider"></span>` : ''}
                <wa-button size="small" appearance="plain" @click=${() => this.addCell(index, 'code')} title="Add code cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="code" label="Code"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${() => this.addCell(index, 'markdown')} title="Add markdown cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="font" label="Markdown"></wa-icon>
                </wa-button>
                <span class="divider"></span>
                <wa-button size="small" appearance="plain" @click=${() => this.deleteCell(index)} title="Delete cell" ?disabled=${this.notebook!.cells.length <= 1}>
                    <wa-icon name="trash" label="Delete cell"></wa-icon>
                </wa-button>
            </div>
        `;
    }

    private renderFooterActions(index: number) {
        return html`
            <div class="cell-footer">
                <wa-button size="small" appearance="plain" @click=${() => this.addCell(index + 1, 'code')} title="Add code cell after">
                    <wa-icon name="code" label="Code"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${() => this.addCell(index + 1, 'markdown')} title="Add markdown cell after">
                    <wa-icon name="font" label="Markdown"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
            </div>
        `;
    }

    // Helper to convert string to Jupyter source format
    private stringToSourceArray(content: string): string[] {
        if (!content) return [''];
        const lines = content.split('\n').map(line => line + '\n');
        // Remove trailing newline from last line
        if (lines.length > 0) {
            lines[lines.length - 1] = lines[lines.length - 1].replace(/\n$/, '');
        }
        return lines;
    }

    // Helper to create a new cell
    private createCell(cellType: 'code' | 'markdown'): NotebookCell {
        const newCell: NotebookCell = {
            cell_type: cellType,
            source: [''],
            metadata: {}
        };

        if (cellType === 'code') {
            newCell.execution_count = null;
            newCell.outputs = [];
        }

        return newCell;
    }

    private async initPyodide() {
        if (!this.pyenv) {
            this.pyenv = new PyEnv();
            const workspace = await workspaceService.getWorkspace();
            if (workspace) {
                await this.pyenv.init(workspace);
                this.pyConnected = true;

                // Get Python version using sys.version
                try {
                    const response = await this.pyenv.execCode('import sys; sys.version.split()[0]');
                    this.pyVersion = response?.result || 'Unknown';
                } catch (error) {
                    console.error("Failed to get Python version:", error);
                    this.pyVersion = 'Unknown';
                }

                // Load required packages from notebook metadata
                const requiredPackages = this.notebook?.metadata?.required_packages || [];
                if (requiredPackages.length > 0) {
                    try {
                        await this.pyenv.loadPackages(requiredPackages);
                    } catch (error) {
                        console.error("Failed to load required packages:", error);
                    }
                }

                // Set up matplotlib backend and patch plt.show() if matplotlib is installed
                try {
                    await this.pyenv.execCode(`
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
`);
                } catch (error) {
                    console.error("Failed to configure matplotlib:", error);
                }
            }
        }
    }

    public async executeCell(cellIndex: number) {
        const cell = this.notebook!.cells[cellIndex];
        if (cell.cell_type !== 'code') return;

        this.executingCells.add(cellIndex);
        this.requestUpdate();

        try {
            await this.initPyodide();

            // Get code from Monaco editor if available, otherwise from cell source
            const editor = this.monacoEditors.get(cellIndex);
            let code = editor ? editor.getValue() : this.getCellSource(cell);

            // PyEnv now runs in a worker and returns { result, console }
            const response = await this.pyenv!.execCode(code);

            // Build output from console output and result
            const outputParts: string[] = [];

            // Add console output (stdout/stderr) if present
            if (response && typeof response === 'object' && 'console' in response) {
                const consoleOutput = response.console;
                if (Array.isArray(consoleOutput) && consoleOutput.length > 0) {
                    const filteredOutput = consoleOutput.filter(s => s && s.trim());
                    if (filteredOutput.length > 0) {
                        outputParts.push(...filteredOutput);
                    }
                }
            }

            // Check if plt.show() was called (which stores data in _display_data)
            let imageData: string | undefined = undefined;
            try {
                const checkDisplayData = await this.pyenv!.execCode('_display_data if "_display_data" in dir() else None');
                const displayResult = checkDisplayData && typeof checkDisplayData === 'object' ? 
                    checkDisplayData.result : checkDisplayData;
                
                if (displayResult && String(displayResult) !== 'None' && String(displayResult) !== 'undefined') {
                    imageData = String(displayResult);
                    // Clear the display data for next execution
                    await this.pyenv!.execCode('_display_data = None');
                }
            } catch (e) {
                // No display data, which is fine
                console.debug('No display data to retrieve:', e);
            }

            // Add the return value if it exists, but only if we didn't capture a matplotlib figure
            // (matplotlib functions return objects like Text, Line2D etc that aren't useful to display)
            if (!imageData) {
                const result = response && typeof response === 'object' ? response.result : response;
                if (result !== undefined && result !== null && String(result) !== 'undefined') {
                    const resultStr = String(result);
                    if (resultStr && resultStr !== 'undefined') {
                        outputParts.push(resultStr);
                    }
                }
            }

            this.cellOutputs.set(cellIndex, {
                type: 'execute_result',
                data: outputParts.length > 0 ? outputParts.join('\n') : undefined,
                imageData: imageData
            });

            // Update execution count
            this.executionCounter++;
            cell.execution_count = this.executionCounter;
            this.markDirty(true);

        } catch (error) {
            // Check if execution is still marked as running (not cancelled)
            if (this.executingCells.has(cellIndex)) {
                this.cellOutputs.set(cellIndex, {
                    type: 'error',
                    data: String(error)
                });
            }
        } finally {
            this.executingCells.delete(cellIndex);
            this.requestUpdate();
        }
    }

    private async cancelExecution(cellIndex: number) {
        if (!this.pyenv) return;

        // Check if graceful interrupt is available (requires SharedArrayBuffer)
        if (this.pyenv.canInterrupt()) {
            // Use interrupt buffer - Python will raise KeyboardInterrupt
            this.pyenv.interrupt();
            // The KeyboardInterrupt will be caught in executeCell's catch block
        } else {
            // SharedArrayBuffer not available - must terminate worker
            this.cellOutputs.set(cellIndex, {
                type: 'error',
                data: 'Execution cancelled by user (worker terminated - SharedArrayBuffer not available for graceful interrupt)'
            });

            this.executingCells.delete(cellIndex);

            // Terminate and reinitialize
            this.pyenv.close();
            this.pyenv = undefined;
            this.pyConnected = false;
            this.pyVersion = undefined;

            // Reinitialize for future executions
            try {
                await this.initPyodide();
            } catch (error) {
                console.error("Failed to reinitialize Python after cancellation:", error);
            }

            this.requestUpdate();
        }
    }

    private clearAllOutputs() {
        // Clear all outputs
        this.cellOutputs.clear();

        // Reset execution counter
        this.executionCounter = 0;

        // Reset execution counts on all code cells
        if (this.notebook?.cells) {
            this.notebook.cells.forEach(cell => {
                if (cell.cell_type === 'code') {
                    cell.execution_count = null;
                    cell.outputs = [];
                }
            });
        }

        // Mark as dirty since we've modified the notebook
        this.markDirty(true);

        // Force re-render
        this.requestUpdate();
    }

    private async restartKernel() {
        if (!this.pyenv || this.pyConnecting) return;

        try {
            this.pyConnecting = true;
            
            // Close current environment
            this.pyenv.close();
            this.pyenv = undefined;
            this.pyConnected = false;
            this.pyVersion = undefined;

            // Force re-render to show reconnecting state
            this.requestUpdate();

            // Reinitialize
            await this.initPyodide();

            // Force re-render to show connected state
            this.requestUpdate();
        } catch (error) {
            console.error("Failed to restart kernel:", error);
        } finally {
            this.pyConnecting = false;
        }
    }

    private async runAllCells() {
        if (!this.notebook?.cells) return;

        this.isRunningAll = true;
        this.cancelRunAll = false;
        this.requestUpdate();

        try {
            // Execute all code cells sequentially
            for (let i = 0; i < this.notebook.cells.length; i++) {
                // Check if cancellation was requested
                if (this.cancelRunAll) {
                    break;
                }

                const cell = this.notebook.cells[i];
                if (cell.cell_type === 'code') {
                    await this.executeCell(i);
                }
            }
        } finally {
            this.isRunningAll = false;
            this.cancelRunAll = false;
            this.requestUpdate();
        }
    }

    private cancelAllCells() {
        this.cancelRunAll = true;
    }

    private toggleMarkdownEdit(index: number) {
        if (this.editingMarkdownCells.has(index)) {
            this.editingMarkdownCells.delete(index);
        } else {
            this.editingMarkdownCells.add(index);
        }
        this.requestUpdate();
    }

    private saveMarkdownEdit(index: number, event: Event) {
        const textarea = event.target as HTMLTextAreaElement;
        const newContent = textarea.value;

        // Update the cell source
        if (this.notebook && this.notebook.cells[index]) {
            const cell = this.notebook.cells[index];
            const oldContent = this.getCellSource(cell);

            cell.source = this.stringToSourceArray(newContent);

            // Mark dirty if content changed
            if (oldContent !== newContent) {
                this.markDirty(true);
            }
        }

        this.editingMarkdownCells.delete(index);
        this.requestUpdate();
    }

    private renderMarkdownCell(cell: NotebookCell, index: number) {
        const source = this.getCellSource(cell);
        const isEmpty = !source || source.trim() === '';
        const isEditing = this.editingMarkdownCells.has(index);

        if (isEditing) {
            const editButtons = html`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${(e: Event) => {
                        const textarea = (e.target as HTMLElement).closest('.markdown-cell')?.querySelector('textarea');
                        if (textarea) {
                            this.saveMarkdownEdit(index, { target: textarea } as any);
                        }
                    }}
                    title="Save changes">
                    <wa-icon name="check" label="Save"></wa-icon>
                </wa-button>
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${() => this.toggleMarkdownEdit(index)}
                    title="Cancel editing">
                    <wa-icon name="xmark" label="Cancel"></wa-icon>
                </wa-button>
            `;
            
            return html`
                <div class="cell-wrapper">
                    <wa-animation 
                        name="bounce" 
                        duration="1000" 
                        iterations="1"
                        ?play=${this.highlightedCellIndex === index}
                        @wa-finish=${() => this.highlightedCellIndex = -1}>
                        <div class="cell markdown-cell editing">
                            <div class="cell-header">
                                ${this.renderHeaderActions(index, editButtons)}
                                <span class="cell-label">Markdown</span>
                            </div>
                            <textarea 
                                class="markdown-editor"
                                .value=${source}
                                @blur=${(e: Event) => this.saveMarkdownEdit(index, e)}
                                placeholder="Enter markdown content here... (# for headings, ** for bold, etc.)"></textarea>
                            ${this.renderFooterActions(index)}
                        </div>
                    </wa-animation>
                </div>
            `;
        }

        const rendered = marked.parse(source) as string;

        const editButton = html`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${() => this.toggleMarkdownEdit(index)}
                title="Edit markdown">
                <wa-icon name="pencil" label="Edit"></wa-icon>
            </wa-button>
        `;

        return html`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex === index}
                    @wa-finish=${() => this.highlightedCellIndex = -1}>
                    <div class="cell markdown-cell ${isEmpty ? 'empty' : ''}" @dblclick=${() => this.toggleMarkdownEdit(index)}>
                        <div class="cell-header">
                            ${this.renderHeaderActions(index, editButton)}
                            <span class="cell-label"></span>
                        </div>
                        <div class="cell-content">
                            ${isEmpty ? html`
                                <div class="markdown-placeholder">
                                    <wa-icon name="font" label="Markdown"></wa-icon>
                                    <span>Double-click or click the pencil icon to edit markdown</span>
                                </div>
                            ` : unsafeHTML(rendered)}
                        </div>
                        ${this.renderFooterActions(index)}
                    </div>
                </wa-animation>
            </div>
        `;
    }

    private renderCodeCell(cell: NotebookCell, index: number) {
        const output = this.cellOutputs.get(index);
        const isExecuting = this.executingCells.has(index);

        // Create or get ref for this cell
        if (!this.cellRefs.has(index)) {
            this.cellRefs.set(index, createRef());
        }
        const cellRef = this.cellRefs.get(index)!;

        const runButton = isExecuting ? html`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${() => this.cancelExecution(index)}
                title="Stop execution">
                <wa-icon name="stop" label="Stop" style="color: var(--wa-color-danger-500);"></wa-icon>
            </wa-button>
        ` : html`
            <k-command 
                cmd="run_python"
                icon="play"
                title="Run cell"
                size="small"
                appearance="plain"
                .params=${{ cellIndex: index }}>
            </k-command>
        `;

        return html`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex === index}
                    @wa-finish=${() => this.highlightedCellIndex = -1}>
                    <div class="cell code-cell ${isExecuting ? 'executing' : ''}">
                        <div class="cell-header">
                            <span class="cell-label">
                                ${isExecuting ? html`
                                    In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${isExecuting}>
                                        <span class="executing-indicator">*</span>
                                    </wa-animation>]
                                ` : html`
                                    In [${cell.execution_count ?? ' '}]
                                `}
                            </span>
                            ${this.renderHeaderActions(index, runButton)}
                        </div>
                        <div class="cell-input monaco-container" ${ref(cellRef)} data-cell-index="${index}"></div>
                        ${output ? html`
                            <div class="cell-output ${output.type === 'error' ? 'output-error' : ''}">
                                <div class="output-label">Out [${index + 1}]:</div>
                                ${output.imageData ? html`
                                    <img src="data:image/png;base64,${output.imageData}" alt="Output image" class="output-image" />
                                ` : ''}
                                ${output.data ? html`<pre><code>${output.data}</code></pre>` : ''}
                            </div>
                        ` : ''}
                        ${this.renderFooterActions(index)}
                    </div>
                </wa-animation>
            </div>
        `;
    }

    private renderCell(cell: NotebookCell, index: number) {
        if (cell.cell_type === 'markdown') {
            return this.renderMarkdownCell(cell, index);
        } else if (cell.cell_type === 'code') {
            return this.renderCodeCell(cell, index);
        } else {
            // raw cell
            const source = this.getCellSource(cell);
            return html`
                <div class="cell raw-cell">
                    <pre><code>${source}</code></pre>
                </div>
            `;
        }
    }

    private async connectPython() {
        if (this.pyConnecting || this.pyConnected) {
            return;
        }
        
        try {
            this.pyConnecting = true;
            await this.initPyodide();
        } catch (error) {
            console.error("Failed to initialize Pyodide:", error);
        } finally {
            this.pyConnecting = false;
        }
    }


    private addCell(index: number, cellType: 'code' | 'markdown' = 'code') {
        if (!this.notebook) return;

        // Save editor contents BEFORE modifying the cells array
        this.saveEditorContents();
        
        this.shiftIndices(index, 'up');
        
        this.notebook.cells.splice(index, 0, this.createCell(cellType));
        
        // Automatically enter edit mode for new markdown cells
        if (cellType === 'markdown') {
            this.editingMarkdownCells.add(index);
        }
        
        this.resetCellState();
        
        // Trigger animation and scroll to the new cell
        this.highlightedCellIndex = index;
        this.updateComplete.then(() => {
            this.scrollToCell(index);
        });
    }

    private scrollToCell(index: number) {
        // Find the cell wrapper element
        const cellWrapper = this.shadowRoot?.querySelectorAll('.cell-wrapper')[index];
        if (!cellWrapper) return;

        // Find the wa-scroller container (parent of this component)
        const scroller = this.closest('wa-scroller');
        if (!scroller) {
            // Fallback to default scrollIntoView if no scroller found
            cellWrapper.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'nearest'
            });
            return;
        }

        // Manually scroll the wa-scroller to the cell position
        const scrollerRect = scroller.getBoundingClientRect();
        const cellRect = cellWrapper.getBoundingClientRect();
        const scrollTop = scroller.scrollTop;
        
        // Calculate target scroll position (center the cell)
        const targetScroll = scrollTop + (cellRect.top - scrollerRect.top) - (scrollerRect.height / 2) + (cellRect.height / 2);
        
        scroller.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }

    private saveEditorContents() {
        // Update cell contents from Monaco editors
        this.monacoEditors.forEach((editor, index) => {
            const cell = this.notebook!.cells[index];
            if (cell && cell.cell_type === 'code') {
                cell.source = this.stringToSourceArray(editor.getValue());
            }
        });
    }

    private resetCellState() {
        // Clear Monaco editors and refs since indices have changed
        this.monacoEditors.forEach(editor => editor.dispose());
        this.monacoEditors.clear();
        this.cellRefs.clear();
        this.markDirty(true);
    }

    private deleteCell(index: number) {
        if (!this.notebook || this.notebook.cells.length <= 1) return;

        // Save editor contents BEFORE modifying the cells array
        this.saveEditorContents();
        
        // Remove state for the deleted cell
        this.cellOutputs.delete(index);
        this.executingCells.delete(index);
        this.editingMarkdownCells.delete(index);
        
        this.notebook.cells.splice(index, 1);
        
        this.shiftIndices(index, 'down');
        
        this.resetCellState();
    }

    private shiftIndices(startIndex: number, direction: 'up' | 'down') {
        const shift = direction === 'up' ? 1 : -1;
        const filterFn = direction === 'up' 
            ? (idx: number) => idx >= startIndex
            : (idx: number) => idx > startIndex;
        const sortFn = direction === 'up'
            ? (a: number, b: number) => b - a
            : (a: number, b: number) => a - b;

        const shiftMap = <T>(map: Map<number, T>) => {
            const indices = Array.from(map.keys()).filter(filterFn).sort(sortFn);
            indices.forEach(oldIndex => {
                const value = map.get(oldIndex);
                map.delete(oldIndex);
                map.set(oldIndex + shift, value!);
            });
        };

        const shiftSet = (set: Set<number>) => {
            const indices = Array.from(set).filter(filterFn).sort(sortFn);
            indices.forEach(oldIndex => {
                set.delete(oldIndex);
                set.add(oldIndex + shift);
            });
        };

        shiftMap(this.cellOutputs);
        shiftSet(this.executingCells);
        shiftSet(this.editingMarkdownCells);
    }

    private initializeMonacoEditor(container: HTMLElement, cell: NotebookCell, index: number) {
        const source = this.getCellSource(cell);
        const lineCount = source.split('\n').length;
        const lineHeight = 19;
        const padding = 10;
        const minHeight = 100;
        const calculatedHeight = Math.max(minHeight, lineCount * lineHeight + padding);

        container.style.height = `${calculatedHeight}px`;

        const editor = monaco.editor.create(container, {
            value: source,
            language: 'python',
            theme: this.getMonacoTheme(),
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            automaticLayout: true,
            fontSize: 14,
            tabSize: 4,
            wordWrap: 'on',
        });

        let isEditorFocused = false;
        editor.onDidFocusEditorText(() => { 
            isEditorFocused = true;
            this.focusedCellIndex = index;
        });
        editor.onDidBlurEditorText(() => { 
            isEditorFocused = false;
            if (this.focusedCellIndex === index) {
                this.focusedCellIndex = -1;
            }
        });

        container.addEventListener('wheel', (e: WheelEvent) => {
            if (!isEditorFocused) {
                const scrollTop = editor.getScrollTop();
                const scrollHeight = editor.getScrollHeight();
                const contentHeight = editor.getContentHeight();
                const canScroll = scrollHeight > contentHeight;
                const atBoundary = (e.deltaY < 0 && scrollTop <= 0) || 
                                 (e.deltaY > 0 && scrollTop + contentHeight >= scrollHeight);

                if (!canScroll || atBoundary) {
                    e.stopImmediatePropagation();
                }
            }
        }, { passive: true, capture: true });

        editor.onDidContentSizeChange(() => {
            const contentHeight = editor.getContentHeight();
            container.style.height = `${Math.max(minHeight, contentHeight + padding)}px`;
            editor.layout();
        });

        editor.onDidChangeModelContent(() => {
            const currentValue = editor.getValue();
            const originalValue = this.getCellSource(cell);
            if (currentValue !== originalValue) {
                this.markDirty(true);
            }
        });

        this.monacoEditors.set(index, editor);
    }

    private getMonacoTheme(): string {
        const rootElement = document.documentElement;
        if (rootElement.classList.contains('wa-dark')) {
            return 'vs-dark';
        } else if (rootElement.classList.contains('wa-light')) {
            return 'vs';
        }
        return 'vs-dark';
    }

    private openPackageManager() {
        const packages = this.notebook?.metadata?.required_packages || [];
        
        pythonPackageManagerService.showPackageManager({
            packages,
            pyenv: this.pyenv,
            onPackageAdded: (packageName: string) => {
                if (!this.notebook) return;
                if (!this.notebook.metadata) {
                    this.notebook.metadata = {};
                }
                if (!this.notebook.metadata.required_packages) {
                    this.notebook.metadata.required_packages = [];
                }
                
                if (!this.notebook.metadata.required_packages.includes(packageName)) {
                    this.notebook.metadata.required_packages.push(packageName);
                    this.markDirty(true);
                }
            },
            onPackageRemoved: (packageName: string) => {
                if (!this.notebook?.metadata?.required_packages) return;
                
                const index = this.notebook.metadata.required_packages.indexOf(packageName);
                if (index > -1) {
                    this.notebook.metadata.required_packages.splice(index, 1);
                    this.markDirty(true);
                }
            }
        });
    }

    protected updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);

        // Update toolbar when state affecting toolbar changes
        if (changedProperties.has('pyConnected') || 
            changedProperties.has('pyConnecting') ||
            changedProperties.has('pyVersion') ||
            changedProperties.has('isRunningAll')) {
            this.updateToolbar();
        }

        if (this.notebook?.cells) {
            this.notebook.cells.forEach((cell, index) => {
                if (cell.cell_type === 'code') {
                    const ref = this.cellRefs.get(index);
                    if (ref?.value && !this.monacoEditors.has(index)) {
                        this.initializeMonacoEditor(ref.value, cell, index);
                    }
                }
            });
        }
    }

    protected render() {
        if (!this.notebook) {
            return html`<div class="loading">Loading notebook...</div>`;
        }

        return html`
            <style>
                ${monacoStyles}
            </style>
            <div class="notebook-cells">
                ${repeat(
                    this.notebook.cells,
                    (_cell, index) => index,
                    (cell, index) => this.renderCell(cell, index)
                )}
            </div>
        `;
    }

    static styles = css`
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
    `;
}

// Extension export
export default ({ editorRegistry, commandRegistry, contributionRegistry }: any) => {
    editorRegistry.registerEditorInputHandler({
        canHandle: (input: any) => input instanceof File && input.getName().toLowerCase().endsWith(".ipynb"),
        handle: async (input: File) => {
            const editorInput = {
                title: input.getName(),
                data: input,
                key: input.getName(),
                editorId: "notebook-editor",
                icon: "k jupyter",
                noOverflow: true,
                state: {},
            } as EditorInput
            editorInput.widgetFactory = () => html`
                <k-notebook-editor .input=${editorInput}></k-notebook-editor>`
            return editorInput;
        },
        ranking: 100,
    })

    commandRegistry.registerHandler('run_python', {
        canExecute: (context: ExecutionContext) => {
            const activeEditor = activeEditorSignal.get();
            if (activeEditor instanceof KNotebookEditor) {
                const cellIndex = context.params?.cellIndex;
                if (cellIndex !== undefined) {
                    return cellIndex >= 0 && cellIndex < (activeEditor.notebook?.cells.length ?? 0);
                }
                return activeEditor.focusedCellIndex >= 0;
            }
            return false;
        },
        execute: async (context: ExecutionContext) => {
            const activeEditor = activeEditorSignal.get();
            if (activeEditor instanceof KNotebookEditor) {
                const cellIndex = context.params?.cellIndex ?? activeEditor.focusedCellIndex;
                if (cellIndex >= 0) {
                    await activeEditor.executeCell(cellIndex);
                }
            }
        }
    });

    const initialNotebookContent = JSON.stringify({
        cells: [
            {
                cell_type: 'markdown',
                source: ['Press the **Run** button in the code cell below to execute it.'],
                metadata: {}
            },
            {
                cell_type: 'code',
                source: ['print("Hello, World!")'],
                execution_count: null,
                outputs: [],
                metadata: {}
            }
        ],
        metadata: {},
        nbformat: 4,
        nbformat_minor: 4
    }, null, 2);

    contributionRegistry.registerContribution('filebrowser.create', {
        label: 'Jupyter Notebook',
        icon: 'k jupyter',
        command: 'create_file',
        params: {
            path: "notebook.ipynb",
            extension: '.ipynb',
            ask: true,
            contents: initialNotebookContent
        }
    });
}
