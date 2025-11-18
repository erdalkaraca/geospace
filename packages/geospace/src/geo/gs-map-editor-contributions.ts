import {rtUtils} from "@kispace-io/gs-lib";
import {toBlobUri} from "./utils";
import {html} from "@kispace-io/appspace/externals/lit-exports";
import {
    EditorInput,
    editorRegistry,
    File
} from "@kispace-io/appspace/api";

rtUtils.resolveUrl = path => toBlobUri(path);

editorRegistry.registerEditorInputHandler({
    canHandle: input => input instanceof File && input.getName().endsWith(".geospace"),
    handle: async (input: File) => {
        const editorInput = {
            title: input.getName(),
            data: input,
            key: input.getName(),
            editorId: "map-editor",
            icon: "location-dot",
            state: {}
        } as EditorInput
        editorInput.widgetFactory = (id: string) => html`
            <gs-map id="${id}" .input="${editorInput}"></gs-map>`
        return editorInput
    }
})