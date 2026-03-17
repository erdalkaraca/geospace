export default function init(): Promise<void>;

export function load_graph_from_pbf(pbfBytes: Uint8Array): Promise<void> | void;

export function load_graph_from_blob(graphBytes: Uint8Array): Promise<void> | void;

export function export_graph(): Uint8Array | Promise<Uint8Array>;

export function route(
  fromLat: number,
  fromLon: number,
  toLat: number,
  toLon: number
): Promise<[number, number][]> | [number, number][];

export function graph_stats():
  | Promise<[number, number]>
  | [number, number];
