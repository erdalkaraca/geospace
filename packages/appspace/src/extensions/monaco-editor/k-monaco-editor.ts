import * as monaco from 'monaco-editor';
import styles from "monaco-editor/min/vs/editor/editor.main.css?raw";
import {customElement, property, state} from "lit/decorators.js";
import {KPart} from "../../parts/k-part";
import {css, html} from "lit";
import {createRef, ref} from "lit/directives/ref.js";
import {EditorInput, EditorContentProvider} from "../../core/editorregistry";
import {styleMap} from "lit/directives/style-map.js";
import {PyEnv} from "../../core/pyservice";
import {workspaceService} from "../../core/filesys";
import logger from '../../core/logger';
import {pythonPackageManagerService} from "../python-package-manager/package-manager-extension";

@customElement('k-monaco-editor')
export class KMonacoEditor extends KPart implements EditorContentProvider {
    @property({attribute: false})
    public input?: EditorInput;
    @property()
    public readOnly: boolean = false;

    private editorRef = createRef();
    private editor?: any;
    private model?: any;

    @state()
    private canExecute: boolean = false;

    @state()
    private pyenv?: PyEnv;

    @state()
    private requiredPackages: string[] = [];


    protected doBeforeUI() {
        const file = this.input!.data
        this.canExecute = file.getName().endsWith(".py")
    }

    protected updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        if (changedProperties.has('canExecute') || changedProperties.has('pyenv')) {
            this.updateToolbar();
        }
    }

    protected async doInitUI() {
        const file = this.input!.data
        const textContents = await file.getContents()
        const container = this.editorRef.value as HTMLElement
        const uri = monaco.Uri.file(file.getName())
        this.model = monaco.editor.createModel(textContents, undefined, uri)
        this.editor = monaco.editor.create(container, {
            theme: 'vs-dark',
            automaticLayout: false,
        })
        this.model.onDidChangeContent((_event: Event) => {
            if (this.readOnly) {
                return
            }
            this.markDirty(true)
        })
        this.editor.setModel(this.model)

        if (this.canExecute) {
            this.requiredPackages = this.parsePackagesFromContent(textContents as string)
        }
    }

    public getEditor() {
        return this.editor
    }

    save(): void {
        const value = this.model.getValue()
        this.input?.data.saveContents(value)
        this.markDirty(false)
    }

    protected doClose() {
        this.model?.dispose();
        this.editor?.dispose()
        this.model = undefined
        this.editor = undefined
        this.pyenv?.close()
        this.pyenv = undefined
    }

    private async onRunCode() {
        if (!this.canExecute) {
            return
        }
        if (!this.pyenv) {
            await this.toggleConnection();
        }
        this.pyenv?.execCode(this.model.getValue())
    }

    public getLanguage() {
        return this.model?.getLanguageId()?.toLowerCase() || null
    }

    public getContent(): string | null {
        if (!this.model) {
            return null
        }
        return this.model.getValue()
    }

    public getSelection(): string | null {
        if (!this.editor || !this.model) {
            return null
        }
        try {
            const selection = this.editor.getSelection()
            if (!selection || selection.isEmpty()) {
                return null
            }
            return this.model.getValueInRange(selection) || null
        } catch (err) {
            return null
        }
    }

    public getSnippet(lines: number = 5): { snippet: string; cursorLine: number } | null {
        if (!this.editor || !this.model) {
            return null
        }
        try {
            const position = this.editor.getPosition()
            if (!position) {
                return null
            }

            if (isNaN(lines) || lines < 0) {
                lines = 5
            }

            const cursorLineNumber = position.lineNumber
            const totalLines = this.model.getLineCount()
            
            const startLine = Math.max(1, cursorLineNumber - lines)
            const endLine = Math.min(totalLines, cursorLineNumber + lines)
            
            const snippet = this.model.getValueInRange({
                startLineNumber: startLine,
                startColumn: 1,
                endLineNumber: endLine,
                endColumn: this.model.getLineMaxColumn(endLine)
            })

            return {
                snippet,
                cursorLine: cursorLineNumber
            }
        } catch (err) {
            return null
        }
    }

    public getFilePath(): string | null {
        return this.input?.data?.getWorkspacePath() || null
    }

    protected renderToolbar() {
        if (!this.canExecute) {
            return html``;
        }

        return html`
            <wa-button @click=${() => this.onRunCode()} title="Run code"
                       ?disabled="${!this.canExecute}" appearance="plain" size="small">
                <wa-icon name="play" label="Run code"></wa-icon>
            </wa-button>
            <wa-button @click=${() => this.toggleConnection()}
                       style="${styleMap({color: this.pyenv ? "var(--wa-color-success-fill-loud)" : "var(--wa-color-danger-fill-loud)"})}"
                       title="(Re)Connect to execution environment"
                       ?disabled="${!this.canExecute}"
                       appearance="plain" size="small">
                <wa-icon name="circle" label="Connection status"></wa-icon>
            </wa-button>
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${() => this.openPackageManager()}
                title="Manage required Python packages">
                <wa-icon name="box" label="Packages"></wa-icon>
                Packages
            </wa-button>
        `;
    }

    private async toggleConnection() {
        if (this.pyenv) {
            this.pyenv.close()
            this.pyenv = undefined
        }
        if (this.model.getLanguageId() !== "python") {
            logger.error("Language not supported: " + this.model.getLanguageId());
            return
        }
        this.pyenv = new PyEnv()
        const workspace = await workspaceService.getWorkspace()
        await this.pyenv.init(workspace!)

        if (this.requiredPackages.length > 0) {
            try {
                await this.pyenv.loadPackages(this.requiredPackages)
            } catch (error) {
                logger.error("Failed to load required packages: " + String(error))
            }
        }
    }

    private parsePackagesFromContent(content: string): string[] {
        const lines = content.split('\n')
        const magicCommentRegex = /^#\s*@gs-packages:\s*(.+)$/i
        
        for (const line of lines) {
            const match = line.match(magicCommentRegex)
            if (match) {
                return match[1]
                    .split(',')
                    .map(pkg => pkg.trim())
                    .filter(pkg => pkg.length > 0)
            }
        }
        
        return []
    }

    private updatePackagesInContent(): void {
        if (!this.model) return

        const content = this.model.getValue()
        const lines = content.split('\n')
        const magicCommentRegex = /^#\s*@gs-packages:/i
        
        let magicCommentLineIndex = -1
        for (let i = 0; i < lines.length; i++) {
            if (magicCommentRegex.test(lines[i])) {
                magicCommentLineIndex = i
                break
            }
        }

        const newMagicComment = this.requiredPackages.length > 0
            ? `# @gs-packages: ${this.requiredPackages.join(', ')}`
            : null

        if (newMagicComment) {
            if (magicCommentLineIndex >= 0) {
                lines[magicCommentLineIndex] = newMagicComment
            } else {
                const insertIndex = lines[0]?.startsWith('#!') ? 1 : 0
                lines.splice(insertIndex, 0, newMagicComment)
            }
        } else if (magicCommentLineIndex >= 0) {
            lines.splice(magicCommentLineIndex, 1)
        }

        const newContent = lines.join('\n')
        if (newContent !== content) {
            this.model.setValue(newContent)
        }
    }

    private openPackageManager() {
        pythonPackageManagerService.showPackageManager({
            packages: this.requiredPackages,
            pyenv: this.pyenv,
            onPackageAdded: (packageName: string) => {
                if (!this.requiredPackages.includes(packageName)) {
                    this.requiredPackages = [...this.requiredPackages, packageName]
                    this.updatePackagesInContent()
                }
            },
            onPackageRemoved: (packageName: string) => {
                this.requiredPackages = this.requiredPackages.filter(pkg => pkg !== packageName)
                this.updatePackagesInContent()
            }
        })
    }

    render() {
        return html`
            <style>
                ${styles}
            </style>
            <div class="monaco-editor-container" ${ref(this.editorRef)}>
            </div>
        `
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
        }

        input.prompt {
            flex: 1;
            font-size: large;
        }

        div.monaco-editor-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-monaco-editor': KMonacoEditor
    }
}

