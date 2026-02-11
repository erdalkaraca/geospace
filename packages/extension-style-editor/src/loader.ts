import { GsMapEditor } from "@kispace-io/geospace/geo";
import { GsStyleEditor } from "./gs-style-editor";
import {
    activeEditorSignal,
    toastError,
    toastInfo,
    type CommandRegistry,
} from "@kispace-io/core/api";

export default ({ commandRegistry }: { commandRegistry: CommandRegistry }) => {
    commandRegistry.registerAll({
        command: {
            id: "edit_styles",
            name: "Edit Styles",
            description:
                "Opens the style editor to define and edit map styles and rules",
            parameters: [],
        },
        handler: {
            execute: async (_context: any) => {
                const activeEditor = activeEditorSignal.get();
                if (!(activeEditor instanceof GsMapEditor)) {
                    toastError("No active map editor");
                    return;
                }

                const gsMap = activeEditor.getGsMap();
                if (!gsMap) {
                    toastError("Map not initialized");
                    return;
                }

                let styleEditor = document.querySelector(
                    "gs-style-editor"
                ) as GsStyleEditor | null;
                if (!styleEditor) {
                    styleEditor = new GsStyleEditor();
                    document.body.appendChild(styleEditor);
                }

                styleEditor.gsMap = gsMap;

                await styleEditor.updateComplete;

                styleEditor.show(() => {
                    activeEditor.markDirty(true);
                    activeEditor.refresh();
                    toastInfo("Styles updated");
                });
            },
        },
        contribution: {
            target: "toolbar:map-editor",
            icon: "palette",
            label: "Edit Styles",
            disabled: () => {
                return !(
                    activeEditorSignal.get() instanceof GsMapEditor
                );
            },
        } as any,
    });
};
