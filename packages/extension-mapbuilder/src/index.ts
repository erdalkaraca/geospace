import { extensionRegistry } from "@eclipse-lyra/core";

extensionRegistry.registerExtension({
    id: "@kispace-io/extension-mapbuilder",
    name: "geo!space Map Builder",
    description: "Compile a geo!space file to an interactive website",
    loader: () => import("./loader"),
    icon: "earth",
});
