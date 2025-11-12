import { html } from "lit";
import { editorRegistry, contributionRegistry, File, type EditorInput } from "@kispace-io/appspace/api";
import type { IconContribution } from "@kispace-io/appspace/core/contributionregistry";
import "./tender-editor";

export default function tendermatchExtension(_context: any) {
    console.log('Tendermatch extension loaded');

    editorRegistry.registerEditorInputHandler({
        canHandle: (input: any) => input instanceof File && input.getName().toLowerCase().endsWith(".tender"),
        handle: async (input: File) => {
            const editorInput = {
                title: input.getName(),
                data: input,
                key: input.getName(),
                editorId: "tender-editor",
                icon: "handshake",
                noOverflow: false,
                state: {},
            } as EditorInput;
            editorInput.widgetFactory = () => html`
                <k-tender-editor .input=${editorInput}></k-tender-editor>
            `;
            return editorInput;
        },
        ranking: 1000
    });

    contributionRegistry.registerContribution("filebrowser.create", {
        command: "create_file",
        icon: "handshake",
        label: "Tendermatch file",
        params: { ask: true, extension: ".tender", contents: "{}" }
    });

    contributionRegistry.registerContribution("contextmenu:filebrowser", {
        command: "create_file",
        icon: "handshake",
        label: "Tendermatch file",
        params: { ask: true, extension: ".tender", contents: "{}" }
    });

    contributionRegistry.registerContribution<IconContribution>("system.icons", {
        label: "Tendermatch File Icons",
        mappings: {
            "tender": "handshake"
        },
        priority: 1000
    });
}

