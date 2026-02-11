import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "geospace.mapBuilder",
    name: "geo!space Map Builder",
    description: "Compile a geo!space file to an interactive website",
    loader: () => import("@kispace-io/extension-mapbuilder/loader"),
    icon: "earth",
});
