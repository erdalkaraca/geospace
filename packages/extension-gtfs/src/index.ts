import { extensionRegistry } from "@eclipse-lyra/core/api";

extensionRegistry.registerExtension({
    id: "@kispace-io/extension-gtfs",
    name: "GTFS to GeoJSON Converter",
    description: "Convert GTFS zip archives to GeoJSON files",
    loader: () => import("./loader"),
    icon: "map-location-dot",
});
