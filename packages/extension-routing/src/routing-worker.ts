// Web worker hosting the routx WASM routing engine.
// All heavy operations (PBF -> graph, (de)serialization, routing)
// run here off the main thread.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – types are provided via local ambient types
import initWasm, {
  load_graph_from_pbf,
  load_graph_from_blob,
  export_graph,
  route as wasmRoute,
  graph_stats as wasmGraphStats,
} from "./routx_wasm.js";

type BuildGraphFromPbfMessage = {
  id: number;
  type: "buildGraphFromPbf";
  name: string;
  bytes: Uint8Array;
};

type BuildGraphFromPbfUrlMessage = {
  id: number;
  type: "buildGraphFromPbfUrl";
  name: string;
  url: string;
};

type LoadGraphFromBlobMessage = {
  id: number;
  type: "loadGraphFromBlob";
  name: string;
  graphBytes: Uint8Array;
};

type RouteMessage = {
  id: number;
  type: "route";
  name: string;
  fromLat: number;
  fromLon: number;
  toLat: number;
  toLon: number;
};

type GraphStatsMessage = {
  id: number;
  type: "graphStats";
};

type IncomingMessage =
  | BuildGraphFromPbfMessage
  | BuildGraphFromPbfUrlMessage
  | LoadGraphFromBlobMessage
  | RouteMessage
  | GraphStatsMessage;

let initialized = false;
let loadedGraphName: string | undefined;

async function ensureInitialized(): Promise<void> {
  if (initialized) {
    return;
  }
  await initWasm();
  initialized = true;
}

async function handleBuildGraphFromPbf(msg: BuildGraphFromPbfMessage) {
  await ensureInitialized();

  // Build graph from PBF in WASM memory.
  await load_graph_from_pbf(msg.bytes);
  loadedGraphName = msg.name;

  // Export serialized graph bytes.
  const graphBytes: Uint8Array = await export_graph();

  // Transfer the underlying buffer back to the main thread.
  (self as any).postMessage(
    {
      id: msg.id,
      success: true,
      graphBytes,
      name: msg.name,
    },
    [graphBytes.buffer],
  );
}

async function handleBuildGraphFromPbfUrl(msg: BuildGraphFromPbfUrlMessage) {
  await ensureInitialized();

  const response = await fetch(msg.url);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch PBF from blob URL: ${response.status} ${response.statusText}`,
    );
  }
  const arrayBuffer = await response.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);

  await handleBuildGraphFromPbf({
    id: msg.id,
    type: "buildGraphFromPbf",
    name: msg.name,
    bytes,
  });
}

async function handleLoadGraphFromBlob(msg: LoadGraphFromBlobMessage) {
  await ensureInitialized();
  if (loadedGraphName === msg.name) {
    (self as any).postMessage({
      id: msg.id,
      success: true,
      name: msg.name,
    });
    return;
  }

  await load_graph_from_blob(msg.graphBytes);
  loadedGraphName = msg.name;

  (self as any).postMessage({
    id: msg.id,
    success: true,
    name: msg.name,
  });
}

async function handleRoute(msg: RouteMessage) {
  await ensureInitialized();

  const coords = await wasmRoute(
    msg.fromLat,
    msg.fromLon,
    msg.toLat,
    msg.toLon,
  );

  (self as any).postMessage({
    id: msg.id,
    success: true,
    name: msg.name,
    coords,
  });
}

async function handleGraphStats(msg: GraphStatsMessage) {
  await ensureInitialized();
  const [nodes, edges] = await (wasmGraphStats() as Promise<[number, number]>);

  (self as any).postMessage({
    id: msg.id,
    success: true,
    nodes,
    edges,
  });
}

(self as any).onmessage = async (event: MessageEvent<IncomingMessage>) => {
  const msg = event.data;

  try {
    switch (msg.type) {
      case "buildGraphFromPbf":
        await handleBuildGraphFromPbf(msg);
        break;
      case "buildGraphFromPbfUrl":
        await handleBuildGraphFromPbfUrl(msg);
        break;
      case "loadGraphFromBlob":
        await handleLoadGraphFromBlob(msg);
        break;
      case "route":
        await handleRoute(msg);
        break;
      case "graphStats":
        await handleGraphStats(msg);
        break;
      default:
        (self as any).postMessage({
          id: (msg as any).id,
          success: false,
          error: `Unknown worker message type: ${(msg as any).type}`,
        });
    }
  } catch (error: any) {
    (self as any).postMessage({
      id: (msg as any).id,
      success: false,
      error: error?.message ?? String(error),
    });
  }
};

