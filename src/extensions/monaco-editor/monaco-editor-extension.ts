import * as monaco from 'monaco-editor';
import styles from "monaco-editor/min/vs/editor/editor.main.css?raw";
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import {customElement, property, state} from "lit/decorators.js";
import {KPart} from "../../parts/k-part.ts";
import {css, html} from "lit";
import {createRef, ref} from "lit/directives/ref.js";
import {EditorInput, editorRegistry} from "../../core/editorregistry.ts";
import {styleMap} from "lit/directives/style-map.js";
import {toastError, toastInfo} from "../../core/toast.ts";
import {PyEnv} from "../../core/pyservice.ts";
import {File, workspaceService} from "../../core/filesys.ts";
import {ChatContext} from "../../core/chatservice.ts";
import {when} from "lit/directives/when.js";

self.MonacoEnvironment = {
    getWorker(_: any, label: string) {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new htmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
            return new tsWorker();
        }
        return new editorWorker();
    }
};

editorRegistry.registerEditorInputHandler({
    canHandle: input => input instanceof File,
    handle: async (input: File) => {
        const editorInput = {
            title: input.getName(),
            data: input,
            key: input.getName(),
            icon: "file-pen",
            noOverflow: false,
            state: {},
        } as EditorInput
        editorInput.widgetFactory = () => html`
            <k-monaco-editor .input=${editorInput}></k-monaco-editor>`
        return editorInput;
    }
})

@customElement('k-monaco-editor')
export class KMonacoEditor extends KPart {
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

    chatContext: ChatContext = {
        history: []
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
        this.canExecute = file.getName().endsWith(".py")
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
        this.model.dispose();
        this.editor.dispose()
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
        toastInfo("Executing Python code...")
        this.pyenv?.execCode(this.model.getValue())
        toastInfo("Executed Python code!")
    }

    public getLanguage() {
        return this.model.getLanguageId()?.toLowerCase()
    }

    private async toggleConnection() {
        if (this.pyenv) {
            this.pyenv.close()
            this.pyenv = undefined
        }
        if (this.model.getLanguageId() !== "python") {
            toastError("Language not supported: " + this.model.getLanguageId());
            return
        }
        this.pyenv = new PyEnv()
        const workspace = await workspaceService.getWorkspace()
        await this.pyenv.init(workspace!)
    }

    render() {
        return html`
            <style>
                ${styles}
            </style>
            ${when(this.canExecute, () => html`
                <k-toolbar>
                    <wa-button @click=${this.onRunCode} title="Run code"
                               ?disabled="${!this.canExecute}" appearance="plain" size="small">
                        <wa-icon name="play"></wa-icon>
                    </wa-button>
                    <wa-button @click=${this.toggleConnection}
                               style="${styleMap({color: this.pyenv ? "var(--wa-color-success-fill-loud)" : "var(--wa-color-danger-fill-loud)"})}"
                               title="(Re)Connect to execution environment"
                               ?disabled="${!this.canExecute}"
                               appearance="plain" size="small">
                        <wa-icon name="circle"></wa-icon>
                    </wa-button>
                </k-toolbar>
            `)}
            <div class="monaco-editor-container" ${ref(this.editorRef)}>
            </div>
        `
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;

            --editor-width: 100%;
            --editor-height: 100vh;
        }

        input.prompt {
            flex: 1;
            font-size: large;
        }

        div.monaco-editor-container {
            width: var(--editor-width);
            height: var(--editor-height);
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-monaco-editor': KMonacoEditor
    }
}

