import { extensionRegistry } from "@eclipse-docks/core";

extensionRegistry.registerExtension({
    id: "@kispace-io/extension-overpass",
    name: "OpenStreetMap Overpass",
    description: "OpenStreetMap Overpass API Integration for use with LLMs",
    loader: () => import("./loader"),
    icon: "table",
});
