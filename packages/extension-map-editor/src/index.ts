import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "geospace.mapEditor",
    name: "geo!space Map Editor",
    description: "Interactive map editor for .geospace files with layers, drawing tools, and style management",
    loader: () => import("@kispace-io/extension-map-editor/loader"),
    icon: "location-dot",
});
