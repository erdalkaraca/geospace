import { extensionRegistry } from "@kispace-io/core/api";

extensionRegistry.registerExtension({
    id: "geospace.gtfs",
    name: "GTFS to GeoJSON Converter",
    description: "Convert GTFS zip archives to GeoJSON files",
    loader: () => import("@kispace-io/extension-gtfs/loader"),
    icon: "map-location-dot",
});
