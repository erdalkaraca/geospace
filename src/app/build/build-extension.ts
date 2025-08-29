import {extensionRegistry} from "../../core/extensionregistry.ts";
import buildUrl from "./build-init.ts?url";

extensionRegistry.registerExtension({
    id: "geospace.mapBuilder",
    name: "geo!space Map Builder",
    description: "Compile a geo!space file to an interactive website",
    url: buildUrl,
    icon: "earth",
})