import {extensionRegistry} from "../../core/extensionregistry.ts";

extensionRegistry.registerExtension({
    id: "geospace.mapBuilder",
    name: "geo!space Map Builder",
    description: "Compile a geo!space file to an interactive website",
    loader: () => import("./build-init.ts"),
    icon: "earth",
})