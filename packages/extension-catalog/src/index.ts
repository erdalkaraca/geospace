import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "@kispace-io/extension-catalog",
    name: "geo!space Catalog",
    description: "Browse and checkout geospatial resources, notebooks, maps, and datasets",
    loader: () => import("./loader"),
    icon: "book",
});
