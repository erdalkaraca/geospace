import {
  workspaceService,
  File,
  toastError,
} from "@eclipse-lyra/core";
import { GsLayerType, GsSourceType, type GsLayer } from "@kispace-io/gs-lib";
import { GsMapEditor } from "@kispace-io/extension-map-editor/geo";
import type { RoutingService } from "./routing-service";
import routingServiceDefault from "./routing-service";

export type RoutingNotify = {
  info: (message: string) => void;
  error: (message: string) => void;
};

function getDefaultNotify(): RoutingNotify {
  return {
    info: () => {},
    error: (message: string) => toastError(message),
  };
}

export async function runRoutingIntoActiveDrawingLayer(
  editor: GsMapEditor,
  opts?: {
    routingService?: RoutingService;
    notify?: Partial<RoutingNotify>;
  },
): Promise<void> {
  const notify: RoutingNotify = { ...getDefaultNotify(), ...(opts?.notify ?? {}) };
  const routing = opts?.routingService ?? routingServiceDefault;

  const gsMap = editor.getGsMap();
  if (!gsMap) throw new Error("Map not initialized");

  const activeDrawingLayerUuid = editor.getActiveDrawingLayerUuid();
  if (!activeDrawingLayerUuid) throw new Error("No active drawing layer selected.");

  const layer = gsMap.layers.find(
    (l: GsLayer) =>
      l.uuid === activeDrawingLayerUuid &&
      l.type === GsLayerType.VECTOR &&
      l.source?.type === GsSourceType.Features,
  ) as GsLayer | undefined;

  if (!layer) throw new Error("Active drawing layer is not a vector features layer.");

  const features = (layer.source as any).features as any[] | undefined;
  if (!features || features.length < 2) {
    throw new Error("Active drawing layer must contain at least two Point features.");
  }

  const pointFeatures = features.filter(
    f => f?.geometry?.type === "Point" && Array.isArray(f.geometry.coordinates),
  );

  if (pointFeatures.length < 2) {
    throw new Error("Active drawing layer must contain at least two Point features.");
  }

  const [start, end] = pointFeatures;
  const startCoord = start.geometry.coordinates as [number, number];
  const endCoord = end.geometry.coordinates as [number, number];

  const renderer = editor.getRenderer();
  if (!renderer) throw new Error("Map renderer not available");

  const activeGraphPath =
    (gsMap.state?.activeRoutingGraphPath as string | undefined) ??
    (await routing.getActiveGraphPath());
  if (!activeGraphPath) throw new Error("No active routing graph selected.");

  if (!(await routing.isGraphLoaded(activeGraphPath))) {
    // Another routing run may already be loading this graph.
    if (routing.isGraphLoading(activeGraphPath)) {
      await routing.waitForGraphLoading(activeGraphPath);
    }

    if (await routing.isGraphLoaded(activeGraphPath)) {
      // Graph is now loaded; no need to read the .routx bytes again.
    } else {
    const workspace = await workspaceService.getWorkspace();
    if (!workspace) throw new Error("No workspace available");

    const resource = await workspace.getResource(activeGraphPath);
    if (!(resource instanceof File)) {
      throw new Error(`Routing graph not found: ${activeGraphPath}`);
    }

    const graphBlob = await resource.getContents({ blob: true });
    const graphBuffer = await (graphBlob as Blob).arrayBuffer();
    const graphBytes = new Uint8Array(graphBuffer);
    await routing.loadGraphFromBlobAs(activeGraphPath, graphBytes);
    }
  }

  const [startLon, startLat] = await (renderer as any).transform(startCoord);
  const [endLon, endLat] = await (renderer as any).transform(endCoord);

  const fc = await routing.routeWithGraphName(
    activeGraphPath,
    startLat,
    startLon,
    endLat,
    endLon,
  );

  const targetProjection = gsMap.view?.projection ?? "EPSG:3857";

  const lineFeatures: any[] = [];
  for (const feature of fc.features) {
    if (feature.geometry?.type !== "LineString") continue;

    const coords = feature.geometry.coordinates as [number, number][];
    const transformed: [number, number][] = [];

    for (const c of coords) {
      const projCoord = await (renderer as any).transform(
        [c[0], c[1]],
        { sourceProjection: "EPSG:4326", targetProjection },
      );
      transformed.push(projCoord);
    }

    feature.geometry.coordinates = transformed;
    lineFeatures.push(feature);
  }

  (layer.source as any).features.push(...lineFeatures);

  editor.markDirty(true);
  await editor.getRenderer().modelToUI(gsMap);
  editor.emitToolbarContextChange("features");

  notify.info(`Route added to drawing layer "${layer.name || "Layer"}".`);
}

