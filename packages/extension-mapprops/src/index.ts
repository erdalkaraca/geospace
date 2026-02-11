import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "geospace.mapProps",
    name: "geo!space Map Properties",
    description: "View and edit map layers, controls, overlays, and styles",
    loader: () => import("@kispace-io/extension-mapprops/loader"),
    icon: "fg map-options",
});
