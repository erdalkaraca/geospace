import {EditorInput, editorRegistry} from "../../core/editorregistry.ts";

import {File} from "../../core/filesys.ts";
import {rtUtils} from "../rt";
import {toBlobUri} from "./utils.ts";
import {html} from "lit";

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