# @kispace-io/extension-routing

This extension exposes a simple routing API backed by a Rust WebAssembly
module built from the `routing-wasm` crate, which in turn uses the
[`routx`](https://crates.io/crates/routx) library.

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

