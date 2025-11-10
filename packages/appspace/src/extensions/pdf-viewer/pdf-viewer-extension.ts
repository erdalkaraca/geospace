import {customElement, property, state} from "lit/decorators.js";
import {KPart} from "../../parts/k-part";
import {css, html} from "lit";
import {EditorInput, editorRegistry} from "../../core/editorregistry";
import {File} from "../../core/filesys";

editorRegistry.registerEditorInputHandler({
    canHandle: input => input instanceof File && input.getName().toLowerCase().endsWith(".pdf"),
    handle: async (input: File) => {
        const editorInput = {
            title: input.getName(),
            data: input,
            key: input.getName(),
            editorId: "pdf-viewer",
            icon: "file-pdf",
            noOverflow: false,
            state: {},
        } as EditorInput
        editorInput.widgetFactory = () => html`
            <k-pdf-viewer .input=${editorInput}></k-pdf-viewer>`
        return editorInput;
    },
    ranking: 1000
})

@customElement('k-pdf-viewer')
export class KPDFViewer extends KPart {
    @property({attribute: false})
    public input?: EditorInput

    @state()
    private pdfUrl?: string

    protected doClose() {
        if (this.pdfUrl && this.pdfUrl.startsWith('blob:')) {
            URL.revokeObjectURL(this.pdfUrl)
        }
        this.input = undefined
        this.pdfUrl = undefined
    }

    protected async doInitUI() {
        await this.loadPDF()
    }

    private async loadPDF() {
        if (!this.input?.data || !(this.input.data instanceof File)) {
            return
        }

        const file = this.input.data
        const url = await file.getContents({uri: true}) as string
        this.pdfUrl = url
    }

    protected render() {
        if (!this.pdfUrl) {
            return html`
                <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                    <wa-spinner></wa-spinner>
                </div>
            `
        }

        return html`
            <iframe
                src="${this.pdfUrl}"
                style="width: 100%; height: 100%; border: none;"
                title="PDF Viewer">
            </iframe>
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
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-pdf-viewer': KPDFViewer
    }
}

