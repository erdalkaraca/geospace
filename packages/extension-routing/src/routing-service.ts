import { logger, appSettings, taskService } from "@eclipse-docks/core";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – Vite's ?worker import has no TS types
import RoutingWorker from "./routing-worker?worker";

export type GeoJSONPosition = [number, number];

export interface GeoJSONLineString {
  type: "LineString";
  coordinates: GeoJSONPosition[];
}

export interface GeoJSONFeature<G = GeoJSONLineString, P = Record<string, unknown>> {
  type: "Feature";
  geometry: G;
  properties: P;
}

export interface GeoJSONFeatureCollection<G = GeoJSONLineString, P = Record<string, unknown>> {
  type: "FeatureCollection";
  features: Array<GeoJSONFeature<G, P>>;
}

export const ROUTING_REGISTERED_GRAPHS_KEY = "routing.registeredGraphs";
export const ROUTING_ACTIVE_GRAPH_PATH_KEY = "routing.activeGraphPath";

export class RoutingService {
  private worker?: Worker;
  private nextMessageId = 1;

  // Lightweight cache: we remember which graph name is currently loaded into the worker.
  // This avoids re-loading the same `.routx` file for repeated routing runs.
  private loadedGraphName?: string;
  private loadingGraphPromises = new Map<string, Promise<void>>();
  private pending = new Map<
    number,
    { resolve: (value: any) => void; reject: (reason: any) => void }
  >();

  private static readonly STORAGE_KEY = ROUTING_REGISTERED_GRAPHS_KEY;
  private static readonly ACTIVE_KEY = ROUTING_ACTIVE_GRAPH_PATH_KEY;

  private ensureWorker(): Worker {
    if (this.worker) {
      return this.worker;
    }

    const worker: Worker = new RoutingWorker();

    worker.onmessage = (event: MessageEvent<any>) => {
      const { id, success, error, ...rest } = event.data ?? {};
      if (typeof id !== "number" || !this.pending.has(id)) {
        return;
      }
      const { resolve, reject } = this.pending.get(id)!;
      this.pending.delete(id);
      if (success === false) {
        reject(error);
      } else {
        resolve(rest);
      }
    };

    this.worker = worker;
    this.loadedGraphName = undefined;
    logger.info("RoutingService: worker initialized");
    return worker;
  }

  private async callWorker<T = any>(
    type: string,
    payload: Record<string, unknown>,
  ): Promise<T> {
    const worker = this.ensureWorker();
    const id = this.nextMessageId++;

    const message = { id, type, ...payload };

    return new Promise<T>((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      worker.postMessage(message);
    });
  }

  async route(
    fromLat: number,
    fromLon: number,
    toLat: number,
    toLon: number
  ): Promise<GeoJSONFeatureCollection> {
    const activePath = await this.getActiveGraphPath();
    if (!activePath) {
      throw new Error("No active routing graph selected.");
    }

    return this.routeWithGraphName(activePath, fromLat, fromLon, toLat, toLon);
  }

  async routeWithGraphName(
    graphName: string,
    fromLat: number,
    fromLon: number,
    toLat: number,
    toLon: number
  ): Promise<GeoJSONFeatureCollection> {
    return taskService.runAsync("Computing route", async (progress) => {
      progress.message = "Finding path…";
      const { coords } = await this.callWorker<{
        coords: [number, number][];
      }>("route", { name: graphName, fromLat, fromLon, toLat, toLon });

      return {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: coords,
            },
            properties: {},
          },
        ],
      };
    });
  }

  async loadGraphFromPbf(pbf: Uint8Array): Promise<void> {
    const activePath = await this.getActiveGraphPath();
    const name = activePath ?? "unnamed";
    await taskService.runAsync("Building routing graph from PBF", async (progress) => {
      progress.message = "Processing PBF…";
      await this.callWorker("buildGraphFromPbf", { name, bytes: pbf });
    });
  }

  async loadGraphFromPbfUrl(pbfName: string, blobUrl: string): Promise<void> {
    await taskService.runAsync("Building routing graph from PBF", async (progress) => {
      progress.message = "Processing PBF (this may take a while)…";
      await this.callWorker("buildGraphFromPbfUrl", {
        name: pbfName,
        url: blobUrl,
      });
    });
  }

  async loadGraphFromBlob(blob: Uint8Array): Promise<void> {
    const activePath = await this.getActiveGraphPath();
    const name = activePath ?? "unnamed";
    await this.loadGraphFromBlobAs(name, blob);
  }

  async loadGraphFromBlobAs(graphName: string, blob: Uint8Array): Promise<void> {
    if (this.loadedGraphName === graphName) {
      return;
    }

    const cached = this.loadingGraphPromises.get(graphName);
    if (cached) {
      return cached;
    }

    const promise = taskService.runAsync("Loading routing graph", async (progress) => {
      progress.message = `Loading ${graphName}…`;
      await this.callWorker("loadGraphFromBlob", {
        name: graphName,
        graphBytes: blob,
      });
      this.loadedGraphName = graphName;
    });

    this.loadingGraphPromises.set(graphName, promise);
    try {
      await promise;
    } finally {
      this.loadingGraphPromises.delete(graphName);
    }
  }

  async isGraphLoaded(graphName: string): Promise<boolean> {
    return this.loadedGraphName === graphName;
  }

  isGraphLoading(graphName: string): boolean {
    return this.loadingGraphPromises.has(graphName);
  }

  async waitForGraphLoading(graphName: string): Promise<boolean> {
    const promise = this.loadingGraphPromises.get(graphName);
    if (!promise) return false;
    await promise;
    return true;
  }

  // Registration and selection are stored in localStorage as workspace paths
  // to `.routx` files. These are used by the selector UI and by the loader
  // to know which graph file to load before routing.

  async getRegisteredGraphPaths(): Promise<string[]> {
    const value = await appSettings.get(RoutingService.STORAGE_KEY);
    return Array.isArray(value) ? value : [];
  }

  async registerGraphPath(path: string): Promise<void> {
    const paths = await this.getRegisteredGraphPaths();
    if (!paths.includes(path)) {
      paths.push(path);
      await appSettings.set(RoutingService.STORAGE_KEY, paths);
    }
  }

  async getActiveGraphPath(): Promise<string | undefined> {
    const value = await appSettings.get(RoutingService.ACTIVE_KEY);
    return typeof value === "string" && value.length > 0 ? value : undefined;
  }

  async setActiveGraphPath(path: string): Promise<void> {
    await appSettings.set(RoutingService.ACTIVE_KEY, path);
  }
}

const routingService = new RoutingService(); // default global scope
export default routingService;

