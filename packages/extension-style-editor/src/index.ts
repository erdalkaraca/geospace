import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "geospace.styleEditor",
    name: "Style Editor",
    description: "Visual editor for defining and managing map styles and rules",
    loader: () => import("@kispace-io/extension-style-editor/loader"),
    icon: "palette",
});
