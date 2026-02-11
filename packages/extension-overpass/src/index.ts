import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "geospace.overpass",
    name: "OpenStreetMap Overpass",
    description: "OpenStreetMap Overpass API Integration for use with LLMs",
    loader: () => import("@kispace-io/extension-overpass/loader"),
    icon: "table",
});
