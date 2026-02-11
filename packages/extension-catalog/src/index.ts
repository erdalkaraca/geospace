import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "geospace.catalog",
    name: "geo!space Catalog",
    description: "Browse and checkout geospatial resources, notebooks, maps, and datasets",
    loader: () => import("@kispace-io/extension-catalog/loader"),
    icon: "book",
});
