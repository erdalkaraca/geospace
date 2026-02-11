import { html } from "@kispace-io/core/externals/lit";
import {
    contributionRegistry,
    SIDEBAR_MAIN_BOTTOM,
    commandRegistry,
    registerAll,
    activeSelectionSignal,
    createLogger,
    File,
} from "@kispace-io/core/api";
import { getSourceTypeFromFile, isSupportedSpatialFile } from "@kispace-io/extension-map-editor/geo";
import "./gs-map-props";

const logger = createLogger("extension-mapprops");

contributionRegistry.registerContribution("contextmenu:filebrowser", {
    label: "Add as Map Layer",
    icon: "layer-group",
    command: "add_layer_from_selection",
    disabled: () => {
        const selection = activeSelectionSignal.get();
        if (!(selection instanceof File)) return true;
        return !isSupportedSpatialFile(selection);
    },
} as any);

registerAll({
    command: {
        id: "add_layer_from_selection",
        name: "Add Layer from Selected File",
        description: "Adds the selected file as a map layer",
        parameters: [],
    },
    handler: {
        execute: async () => {
            const selection = activeSelectionSignal.get();
            if (!(selection instanceof File)) return;

            const sourceType = getSourceTypeFromFile(selection);
            if (!sourceType) {
                logger.warn(`Unsupported file type: ${selection.getName()}`);
                return;
            }

            const filePath = selection.getWorkspacePath();
            const commandContext = commandRegistry.createExecutionContext({
                source: sourceType,
                url: filePath,
            });
            await commandRegistry.execute("add_layer", commandContext);
        },
    },
});

contributionRegistry.registerContribution(SIDEBAR_MAIN_BOTTOM, {
    name: "map-props",
    label: "Map Properties",
    icon: "fg map-options",
    component: (id: string) => html`<gs-map-props id="${id}"></gs-map-props>`,
} as any);
