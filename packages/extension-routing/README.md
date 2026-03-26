# @kispace-io/extension-routing

This extension exposes a simple routing API backed by a Rust WebAssembly
module built from the `routx-wasm` crate, which in turn uses the
[`routx`](https://crates.io/crates/routx) library.

## PBF scale and deployment

| Approach | Practical scope | Notes |
|---------|-----------------|-------|
| **In-browser PBF → routx** | Small regions only (e.g. single city, small state like Bremen) | Larger regions (e.g. Lower Saxony) cause WASM memory allocation failures and crash. |
| **Native binary** | Any size | Use `pbf-to-routx` on the host for large PBFs. |
| **Precomputed .routx in browser** | Small to moderate graphs | Even precomputed graphs from larger PBFs can exceed what WASM can handle. |

**Best approach**: Use the routing extension **only for city-scale routing**. Keep PBFs and `.routx` graphs small (single city or metropolitan area). For larger regions, process PBFs with the native `pbf-to-routx` binary on the host and use a different routing backend outside this extension.

## Native conversion: memory and runtime

Converting large PBFs to routx graphs is memory- and time-intensive:

- A **4 GB PBF** typically requires around **64 GB RAM** and takes **>30 minutes** on a capable machine.
- The native `pbf-to-routx` binary has no WASM memory ceiling and can process such workloads. See `npm run build:linux` and `npm run pbf-to-routx`.

## Browser-native approaches for larger graphs (future work)

The current routx/WASM setup keeps the full graph in linear memory, which hits WASM and JS↔WASM limits. Browser-native options that could avoid those limits:

| Approach | Mechanism | Suited for |
|----------|------------|------------|
| **OPFS + chunked read** | Store `.routx` in [OPFS](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system). In a worker, use `FileSystemSyncAccessHandle` to read only the needed portions (e.g. header + region) into a small buffer. Never load the entire graph into WASM memory. | Requires graph format changes (e.g. spatial index, tile layout) so you can seek by region. |
| **Tiled graph format** | Preprocess graphs into tiles (e.g. Valhalla-style: highway/arterial/local levels). At runtime, load only tiles intersecting the route bbox via OPFS `read(buffer, { at: offset })`. Routing logic runs over the loaded subset. | Larger regions; compatible with OPFS. Routx has no tiling; would need a different engine or a custom preprocessing step. |
| **SQLite + OPFS** | Use [sql.js with OPFS backend](https://chyshkala.com/blog/sqlite-in-the-browser-just-got-real-opfs-makes-localstorage-obsolete) to store nodes/edges in a DB. Query only the region needed for routing. | Moderate graphs; SQLite adds overhead; still need spatial indexing and query design. |
| **Remote backend** | Keep graph and routing on the server (e.g. OSRM, Valhalla). Browser calls HTTP/GraphQL; no large local graph. | Any scale; requires server and network. |
| **SharedArrayBuffer + worker** | Worker reads OPFS into a `SharedArrayBuffer`; WASM in the same worker views it (or JS passes pointers). Avoids copying large buffers across the JS↔WASM boundary. | Still limited by `SharedArrayBuffer` size and COOP/COEP headers; does not solve the “whole graph in memory” issue. |

**Constraint**: Routx expects the full graph in memory. To use OPFS/tiling, you’d need either a routing engine designed for on-demand tile loading (e.g. Valhalla) or a custom graph format with spatial partitioning plus routing logic that works on partial graphs.

**Practical path**: For city-scale use, the current extension is sufficient. For regions beyond that, use a remote routing service or a native/desktop app with the `pbf-to-routx` binary.

## Rust/WASM build

The Rust crate lives under:

- `packages/extension-routing/routx-wasm`

To (re)build the WebAssembly module and JS wrapper **directly into the
extension's `src` folder**:

```bash
cd packages/extension-routing/routx-wasm
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen --target web --out-dir ../../src --no-typescript \
  target/wasm32-unknown-unknown/release/routing_wasm.wasm
```

This produces:

- `packages/extension-routing/src/routing_wasm.js`
- `packages/extension-routing/src/routing_wasm_bg.wasm`

The extension loader imports these using relative paths, so no additional
Vite configuration is required beyond ensuring the extension package is
bundled as usual.

## Commands

The extension registers two commands:

- `routing.load` – loads the routing WASM module.
- `routing.route` – routes between two coordinates:
  - Parameters:
    - `from`: `"lat,lon"`
    - `to`: `"lat,lon"`

Currently the underlying Rust API exposes a `route_from_pbf` function
that:

- Loads a fixed PBF path inside the WASM sandbox.
- Uses `routx` to build a graph and compute a route.
- Returns a placeholder numeric value (route length) as a `JsValue`.

The JS loader wires `routing.route` to this function so the command can
be called immediately and later evolved without changing callers.

