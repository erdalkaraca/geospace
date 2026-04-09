import { extensionRegistry } from "@eclipse-docks/core";

extensionRegistry.registerExtension({
  id: "@kispace-io/extension-routing",
  name: "In-Browser Routing",
  description: "In-browser routing using OpenStreetMap data (based on Rust/WASM library routx).",
  loader: () => import("./loader"),
  icon: "route"
});

