import { logger, appSettings } from "@eclipse-lyra/core";
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

export class RoutingService {
  private initialized = false;
  private worker?: Worker;
  private nextMessageId = 1;
  private pending = new Map<
    number,
    { resolve: (value: any) => void; reject: (reason: any) => void }
  >();

  private static readonly STORAGE_KEY = "routing.registeredGraphs";
  private static readonly ACTIVE_KEY = "routing.activeGraphPath";

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
    this.initialized = true;
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

    const { coords } = await this.callWorker<{
      coords: [number, number][];
    }>("route", { name: activePath, fromLat, fromLon, toLat, toLon });

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
  }

  async loadGraphFromPbf(pbf: Uint8Array): Promise<void> {
    const activePath = await this.getActiveGraphPath();
    const name = activePath ?? "unnamed";
    await this.callWorker("buildGraphFromPbf", { name, bytes: pbf });
  }

  // Convenience for worker-based builds directly from a blob URL.
  async loadGraphFromPbfUrl(pbfName: string, blobUrl: string): Promise<void> {
    await this.callWorker("buildGraphFromPbfUrl", {
      name: pbfName,
      url: blobUrl,
    });
  }

  async loadGraphFromBlob(blob: Uint8Array): Promise<void> {
    const activePath = await this.getActiveGraphPath();
    const name = activePath ?? "unnamed";
    await this.callWorker("loadGraphFromBlob", { name, graphBytes: blob });
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

const routingService = new RoutingService();
export default routingService;

