import {rtUtils, DEFAULT_GSMAP} from "@kispace-io/gs-lib";
import {toBlobUri} from "./utils";
import {html} from "@eclipse-lyra/core/externals/lit";
import {EditorInput, editorRegistry, File, contributionRegistry, commandRegistry, registerAll, activePartSignal} from "@eclipse-lyra/core/api";
import {GsMapEditor} from "./gs-map-editor";

rtUtils.resolveUrl = async (path: string) => {
    const active = activePartSignal.get();
    const basePath = active instanceof GsMapEditor
        ? (active.input?.data as File)?.getWorkspacePath?.()
        : undefined;
    return toBlobUri(path, basePath);
};

contributionRegistry.registerContribution("filebrowser.create", {
    label: "geo!space map",
    icon: "earth",
    command: "create_map_file",
} as any);

registerAll({
    command: {
        id: "create_map_file",
        name: "Create Geospace map file",
        description: "Creates a new .geospace map file with default map structure.",
        parameters: [{
            name: "path",
            description: "Path including name (e.g. 'my-map.geospace'). .geospace added if missing. Relative to workspace.",
            required: false,
        }],
        output: [{name: "path", description: "Path of the created file"}],
    },
    handler: {
        execute: async (context: any) => {
            const gsMap = {
                ...DEFAULT_GSMAP,
                chatHistory: [],
                view: {center: [1105600, 6120800], zoom: 5, projection: "EPSG:3857"},
            };
            const path = context.params?.path ?? "map.geospace";
            const finalPath = path.endsWith(".geospace") ? path : `${path}.geospace`;
            return commandRegistry.execute("touch", {
                params: {
                    path: finalPath,
                    contents: JSON.stringify(gsMap, null, 2),
                    extension: ".geospace",
                    ask: !path || path === "map.geospace",
                },
            });
        },
    },
});

editorRegistry.registerEditorInputHandler({
    editorId: "map-editor",
    label: "geo!space map",
    canHandle: input => input instanceof File && input.getName().endsWith(".geospace"),
    handle: async (input: File) => {
        const editorInput = {
            title: input.getName(),
            data: input,
            key: input.getName(),
            editorId: "map-editor",
            icon: "location-dot",
            state: {} as { [key: string]: unknown },
            component: (id: string) => html`
                <gs-map id="${id}" .input="${editorInput}"></gs-map>`,
        };
        return editorInput as EditorInput;
    },
    ranking: 100,
});
