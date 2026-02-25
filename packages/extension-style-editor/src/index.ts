import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "@kispace-io/extension-style-editor",
    name: "Style Editor",
    description: "Visual editor for defining and managing map styles and rules",
    loader: () => import("./loader"),
    icon: "palette",
});
