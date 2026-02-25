import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "@kispace-io/extension-map-editor",
    name: "geo!space Map Editor",
    description: "Interactive map editor for .geospace files with layers, drawing tools, and style management",
    loader: () => import("./loader"),
    icon: "location-dot",
});
