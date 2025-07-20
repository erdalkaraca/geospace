import {customElement, property, state} from "lit/decorators.js";
import {KPart} from "../parts/k-part.ts";
import {html, render} from "lit";
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
        editorInput.widgetFactory = async (container: HTMLElement) => {
            render(html`
                <k-md-editor .input=${editorInput}></k-md-editor>`, container)
        }
        return editorInput;
    }
})

@customElement('k-md-editor')
export class KMonacoEditor extends KPart {
    @property({attribute: false})
    public input!: EditorInput;
    @state()
    private mdContents?: string

    protected doAfterUI() {
        fetch(this.input.data).then(data => {
            data.text().then(text => {
                this.mdContents = marked.parse(text) as string
            })
        })
    }

    protected render() {
        return html`
            <div style="max-height: 90vh;">${unsafeHTML(this.mdContents)}</div>`
    }
}