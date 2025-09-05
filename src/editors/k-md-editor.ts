import {customElement, property, state} from "lit/decorators.js";
import {KPart} from "../parts/k-part.ts";
import {html} from "lit";
import {marked} from "marked";
import {EditorInput, editorRegistry} from "../core/editorregistry.ts";
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {File} from "../core/filesys.ts";

editorRegistry.registerEditorInputHandler({
    canHandle: input => input instanceof File && input.getName().toLowerCase().endsWith(".md"),
    handle: async (input: File) => {
        const editorInput = {
            title: input.getName(),
            data: input,
            key: input.getName(),
            icon: "markdown",
            noOverflow: false,
            state: {},
        } as EditorInput
        editorInput.widgetFactory = () => html`
            <k-md-editor .input=${editorInput}></k-md-editor>`
        return editorInput;
    }
})

@customElement('k-md-editor')
export class KMDEditor extends KPart {
    @property({attribute: false})
    public input?: EditorInput;
    @state()
    private mdContents?: string

    protected doClose() {
        this.input = undefined
        this.mdContents = undefined
    }

    protected doAfterUI() {
        const data: string = this.input!.data
        if (data.startsWith("http")) {
            fetch(data).then(data => {
                data.text().then(text => {
                    this.updateContents(text)
                })
            })
        } else {
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