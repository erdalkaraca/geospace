import {customElement, property, state} from "lit/decorators.js";
import {KPart} from "../../parts/k-part.ts";
import {html} from "lit";
import {marked} from "marked";
import {EditorInput, editorRegistry} from "../../core/editorregistry.ts";
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {File} from "../../core/filesys.ts";

editorRegistry.registerEditorInputHandler({
    canHandle: input => input instanceof File && input.getName().toLowerCase().endsWith(".md"),
    handle: async (input: File) => {
        const editorInput = {
            title: input.getName(),
            data: input,
            key: input.getName(),
            icon: "book",
            noOverflow: false,
            state: {},
        } as EditorInput
        editorInput.widgetFactory = () => html`
            <k-md-editor .input=${editorInput}></k-md-editor>`
        return editorInput;
    },
    ranking: 1000
})

@customElement('k-md-editor')
export class KMDEditor extends KPart {
    @property({attribute: false})
    public input?: EditorInput
    @state()
    private mdContents?: string

    protected doClose() {
        this.input = undefined
        this.mdContents = undefined
    }

    protected async doInitUI() {
        const data = this.input!.data
        
        if (data instanceof File) {
            const contents = await data.getContents()
            this.updateContents(contents)
        } else if (typeof data === 'string' && data.startsWith("http")) {
            const response = await fetch(data)
            const text = await response.text()
            this.updateContents(text)
        } else if (typeof data === 'string') {
            this.updateContents(data)
        }
    }

    protected render() {
        return html`
            <div style="max-height: 90vh;">${unsafeHTML(this.mdContents)}</div>`
    }

    private updateContents(text: string) {
        this.mdContents = marked.parse(text) as string
    }
}
