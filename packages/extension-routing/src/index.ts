import { extensionRegistry } from "@eclipse-lyra/core";

extensionRegistry.registerExtension({
  id: "@kispace-io/extension-routing",
  name: "In-Browser Routing",
  description: "In-browser routing using OpenStreetMap data (based on Rust/WASM library routx).",
  loader: () => import("./loader"),
  icon: "route"
});

