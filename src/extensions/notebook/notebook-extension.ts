import {customElement, property, state} from "lit/decorators.js";
import {KPart} from "../../parts/k-part.ts";
import {css, html} from "lit";
import {marked} from "marked";
import type {EditorInput} from "../../core/editorregistry.ts";
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {File} from "../../core/filesys.ts";
import {PyEnv} from "../../core/pyservice.ts";
import {workspaceService} from "../../core/filesys.ts";
import {repeat} from "lit/directives/repeat.js";
import {styleMap} from "lit/directives/style-map.js";
import * as monaco from 'monaco-editor';
import monacoStyles from "monaco-editor/min/vs/editor/editor.main.css?raw";
import {createRef, ref, Ref} from "lit/directives/ref.js";

interface NotebookCell {
    cell_type: 'code' | 'markdown' | 'raw';
    source: string | string[];
    outputs?: any[];
    execution_count?: number | null;
    metadata?: any;
}

interface NotebookData {
    cells: NotebookCell[];
    metadata?: any;
    nbformat?: number;
    nbformat_minor?: number;
}

@customElement('k-notebook-editor')
export class KNotebookEditor extends KPart {
    @property({attribute: false})
    public input?: EditorInput;
    
    @state()
    private notebook?: NotebookData;
    
    @state()
    private cellOutputs: Map<number, any> = new Map();
    
    @state()
    private executingCells: Set<number> = new Set();
    
    @state()
    private pyenv?: PyEnv;
    
    @state()
    private pyConnected: boolean = false;
    
    @state()
    private editingMarkdownCells: Set<number> = new Set();
    
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
        
        // Disconnect theme observer
        if (this.themeObserver) {
            this.themeObserver.disconnect();
            this.themeObserver = undefined;
        }
        
        if (this.pyenv) {
            this.pyenv.close();
            this.pyenv = undefined;
        }
    }

    async save() {
        if (!this.notebook || !this.input) return;
        
        try {
            // Update cell contents from Monaco editors before saving
            this.monacoEditors.forEach((editor, index) => {
                const cell = this.notebook!.cells[index];
                if (cell && cell.cell_type === 'code') {
                    cell.source = this.stringToSourceArray(editor.getValue());
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

    protected async doAfterUI() {
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
        
        // Set up theme observer to update Monaco editors when theme changes
        this.setupThemeObserver();
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
        if (Array.isArray(cell.source)) {
            return cell.source.join('');
        }
        return cell.source;
    }

    // Render common cell action buttons (add/delete)
    private renderCellActions(index: number, additionalButton?: any) {
        return html`
            <div class="cell-actions">
                <wa-button size="small" appearance="plain" @click=${() => this.addCellBefore(index, 'code')} title="Add code cell before">
                    <wa-icon name="code"></wa-icon><wa-icon name="arrow-up" style="font-size: 0.7em;"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${() => this.addCellBefore(index, 'markdown')} title="Add markdown cell before">
                    <wa-icon name="font"></wa-icon><wa-icon name="arrow-up" style="font-size: 0.7em;"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${() => this.addCellAfter(index, 'code')} title="Add code cell after">
                    <wa-icon name="code"></wa-icon><wa-icon name="arrow-down" style="font-size: 0.7em;"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${() => this.addCellAfter(index, 'markdown')} title="Add markdown cell after">
                    <wa-icon name="font"></wa-icon><wa-icon name="arrow-down" style="font-size: 0.7em;"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${() => this.deleteCell(index)} title="Delete cell" ?disabled=${this.notebook!.cells.length <= 1}>
                    <wa-icon name="trash"></wa-icon>
                </wa-button>
                ${additionalButton || ''}
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
                
                // Set up stdout/stderr callbacks for current cell execution
                // Note: These will be set per execution in executeCell
            }
        }
    }

    private async executeCell(cellIndex: number) {
        const cell = this.notebook!.cells[cellIndex];
        if (cell.cell_type !== 'code') return;

        this.executingCells.add(cellIndex);
        this.requestUpdate();

        try {
            await this.initPyodide();
            
            // Get code from Monaco editor if available, otherwise from cell source
            const editor = this.monacoEditors.get(cellIndex);
            const code = editor ? editor.getValue() : this.getCellSource(cell);
            
            // PyEnv now runs in a worker and returns { result, console }
            const response = await this.pyenv!.execCode(code);
            
            // Build output from console output and result
            const outputParts: string[] = [];
            
            // Add console output (stdout/stderr) if present
            if (response && typeof response === 'object' && 'console' in response) {
                const consoleOutput = response.console;
                if (Array.isArray(consoleOutput) && consoleOutput.length > 0) {
                    // Filter out empty strings and join
                    const filteredOutput = consoleOutput.filter(s => s && s.trim());
                    if (filteredOutput.length > 0) {
                        outputParts.push(...filteredOutput);
                    }
                }
            }
            
            // Add the return value if it exists
            const result = response && typeof response === 'object' ? response.result : response;
            if (result !== undefined && result !== null && String(result) !== 'undefined') {
                const resultStr = String(result);
                // Only add if it's not empty and not the string 'undefined'
                if (resultStr && resultStr !== 'undefined') {
                    outputParts.push(resultStr);
                }
            }
            
            this.cellOutputs.set(cellIndex, {
                type: 'execute_result',
                data: outputParts.length > 0 ? outputParts.join('\n') : '(no output)'
            });
            
        } catch (error) {
            this.cellOutputs.set(cellIndex, {
                type: 'error',
                data: String(error)
            });
        } finally {
            this.executingCells.delete(cellIndex);
            this.requestUpdate();
        }
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
        const isEditing = this.editingMarkdownCells.has(index);
        
        if (isEditing) {
            return html`
                <div class="cell markdown-cell editing">
                    <div class="cell-header">
                        <span class="cell-label">Markdown</span>
                        <wa-button 
                            size="small" 
                            appearance="plain"
                            @click=${() => this.toggleMarkdownEdit(index)}
                            title="Cancel editing">
                            <wa-icon name="xmark"></wa-icon>
                        </wa-button>
                        <wa-button 
                            size="small" 
                            appearance="plain"
                            @click=${(e: Event) => {
                                const textarea = (e.target as HTMLElement).closest('.markdown-cell')?.querySelector('textarea');
                                if (textarea) {
                                    this.saveMarkdownEdit(index, {target: textarea} as any);
                                }
                            }}
                            title="Save changes">
                            <wa-icon name="check"></wa-icon>
                        </wa-button>
                    </div>
                    <textarea 
                        class="markdown-editor"
                        .value=${source}
                        @blur=${(e: Event) => this.saveMarkdownEdit(index, e)}
                        placeholder="Enter markdown..."></textarea>
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
                <wa-icon name="pencil"></wa-icon>
            </wa-button>
        `;

        return html`
            <div class="cell markdown-cell" @dblclick=${() => this.toggleMarkdownEdit(index)}>
                <div class="cell-header">
                    <span class="cell-label"></span>
                    ${this.renderCellActions(index, editButton)}
                </div>
                <div class="cell-content">
                    ${unsafeHTML(rendered)}
                </div>
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
        
        const runButton = html`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${() => this.executeCell(index)}
                ?disabled=${isExecuting}
                title="Run cell">
                ${isExecuting ? html`
                    <wa-icon name="spinner" class="spinning"></wa-icon>
                ` : html`
                    <wa-icon name="play"></wa-icon>
                `}
            </wa-button>
        `;
        
        return html`
            <div class="cell code-cell ${isExecuting ? 'executing' : ''}">
                <div class="cell-header">
                    <span class="cell-label">
                        ${isExecuting ? html`
                            In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${isExecuting}>
                                <span class="executing-indicator">*</span>
                            </wa-animation>]:
                        ` : html`
                            In [${cell.execution_count ?? ' '}]:
                        `}
                    </span>
                    ${this.renderCellActions(index, runButton)}
                </div>
                <div class="cell-input monaco-container" ${ref(cellRef)} data-cell-index="${index}"></div>
                ${output ? html`
                    <div class="cell-output ${output.type === 'error' ? 'output-error' : ''}">
                        <div class="output-label">Out [${index + 1}]:</div>
                        <pre><code>${output.data}</code></pre>
                    </div>
                ` : ''}
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

    private async runAll() {
        if (!this.notebook) return;
        
        for (let i = 0; i < this.notebook.cells.length; i++) {
            const cell = this.notebook.cells[i];
            if (cell.cell_type === 'code') {
                await this.executeCell(i);
            }
        }
    }

    private async connectPython() {
        try {
            await this.initPyodide();
        } catch (error) {
            console.error("Failed to initialize Pyodide:", error);
        }
    }

    private addCellBefore(index: number, cellType: 'code' | 'markdown' = 'code') {
        this.addCell(index, cellType);
    }

    private addCellAfter(index: number, cellType: 'code' | 'markdown' = 'code') {
        this.addCell(index + 1, cellType);
    }

    private addCell(index: number, cellType: 'code' | 'markdown' = 'code') {
        if (!this.notebook) return;
        
        this.notebook.cells.splice(index, 0, this.createCell(cellType));
        this.resetCellState();
    }

    private resetCellState() {
        // Clear Monaco editors and refs since indices have changed
        this.monacoEditors.forEach(editor => editor.dispose());
        this.monacoEditors.clear();
        this.cellRefs.clear();
        this.markDirty(true);
        this.requestUpdate();
    }

    private deleteCell(index: number) {
        if (!this.notebook || this.notebook.cells.length <= 1) return;
        
        this.notebook.cells.splice(index, 1);
        this.cleanupCellOutputs();
        this.executingCells.delete(index);
        this.editingMarkdownCells.delete(index);
        this.resetCellState();
    }

    // Clean up outputs for cells that no longer exist
    private cleanupCellOutputs() {
        if (!this.notebook) return;
        
        const validIndices = new Set(this.notebook.cells.map((_, idx) => idx));
        const outputIndices = Array.from(this.cellOutputs.keys());
        
        outputIndices.forEach(idx => {
            if (!validIndices.has(idx)) {
                this.cellOutputs.delete(idx);
            }
        });
    }

    private getMonacoTheme(): string {
        // Check if the root HTML element has wa-dark or wa-light class
        const rootElement = document.documentElement;
        if (rootElement.classList.contains('wa-dark')) {
            return 'vs-dark';
        } else if (rootElement.classList.contains('wa-light')) {
            return 'vs';
        }
        // Default to dark if neither is set
        return 'vs-dark';
    }

    protected updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        // Initialize Monaco editors for code cells
        if (this.notebook && this.notebook.cells) {
            this.notebook.cells.forEach((cell, index) => {
                if (cell.cell_type === 'code') {
                    const ref = this.cellRefs.get(index);
                    if (ref && ref.value && !this.monacoEditors.has(index)) {
                        const container = ref.value;
                        const source = this.getCellSource(cell);
                        
                        // Calculate height based on number of lines
                        const lineCount = source.split('\n').length;
                        const lineHeight = 19; // Monaco default line height
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
                        
                        // Update height when content changes
                        editor.onDidContentSizeChange(() => {
                            const contentHeight = editor.getContentHeight();
                            container.style.height = `${Math.max(minHeight, contentHeight + padding)}px`;
                            editor.layout();
                        });
                        
                        // Mark dirty when content changes
                        editor.onDidChangeModelContent(() => {
                            const currentValue = editor.getValue();
                            const originalValue = this.getCellSource(cell);
                            if (currentValue !== originalValue) {
                                this.markDirty(true);
                            }
                        });
                        
                        this.monacoEditors.set(index, editor);
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
                    style="${styleMap({
                        color: this.pyConnected ? 
                            "var(--wa-color-success-fill-loud)" : 
                            "var(--wa-color-danger-fill-loud)"
                    })}"
                    title="Connect to Python environment">
                    <wa-icon name="circle"></wa-icon>
                    Python ${this.pyConnected ? 'Connected' : 'Disconnected'}
                </wa-button>
            </div>
            <wa-scroller orientation="vertical" class="notebook-scroller">
                <div class="notebook-cells">
                    ${repeat(
                        this.notebook.cells,
                        (_cell, index) => index,
                        (cell, index) => this.renderCell(cell, index)
                    )}
                </div>
            </wa-scroller>
        `;
    }

    static styles = css`
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
    `;
}

// Extension export
export default ({editorRegistry}: any) => {
    editorRegistry.registerEditorInputHandler({
        canHandle: (input: any) => input instanceof File && input.getName().toLowerCase().endsWith(".ipynb"),
        handle: async (input: File) => {
            const editorInput = {
                title: input.getName(),
                data: input,
                key: input.getName(),
                icon: "book",
                noOverflow: true,
                state: {},
            } as EditorInput
            editorInput.widgetFactory = () => html`
                <k-notebook-editor .input=${editorInput}></k-notebook-editor>`
            return editorInput;
        },
        ranking: 100,
    })
}
