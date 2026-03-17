import {
  type CommandRegistry,
  type ExecutionContext,
  activePartSignal,
  contributionRegistry,
  logger,
  toastError,
  toastInfo,
  activeSelectionSignal,
  workspaceService,
  taskService,
  File,
  FileContentType,
} from "@eclipse-lyra/core";
import { html, render } from "@eclipse-lyra/core/externals/lit";
import { GsMapEditor } from "@kispace-io/extension-map-editor/geo";
import {
  GsLayerType,
  GsSourceType,
  type GsLayer,
} from "@kispace-io/gs-lib";
import routingService from "./routing-service";
import "./routing-graph-selector";

function assertGsMapEditor(context: ExecutionContext): GsMapEditor {
  const editor = context.activeEditor;
  if (!(editor instanceof GsMapEditor)) {
    throw new Error("Active editor is not a map editor");
  }
  return editor;
}

export default ({ commandRegistry }: { commandRegistry: CommandRegistry }) => {
  // Low-level routing command (kept for non-UI callers)
  commandRegistry.registerAll({
    command: {
      id: "routing.route",
      name: "Route (Rust/WASM)",
      description:
        "Computes a route between two coordinates using the Rust/WASM routing engine",
      parameters: [
        {
          name: "from",
          description: "Starting coordinate as 'lat,lon'",
          required: true,
        },
        {
          name: "to",
          description: "Target coordinate as 'lat,lon'",
          required: true,
        },
      ],
    },
    handler: {
      execute: async (context: ExecutionContext) => {
        const params = context.params ?? {};

        const from =
          typeof params["from"] === "string" ? params["from"] : undefined;
        const to =
          typeof params["to"] === "string" ? params["to"] : undefined;

        if (!from || !to) {
          throw new Error(
            "Parameters 'from' and 'to' are required, formatted as 'lat,lon'.",
          );
        }

        const [fromLatStr, fromLonStr] = from.split(",");
        const [toLatStr, toLonStr] = to.split(",");

        const fromLat = Number(fromLatStr);
        const fromLon = Number(fromLonStr);
        const toLat = Number(toLatStr);
        const toLon = Number(toLonStr);

        if (
          Number.isNaN(fromLat) ||
          Number.isNaN(fromLon) ||
          Number.isNaN(toLat) ||
          Number.isNaN(toLon)
        ) {
          throw new Error(
            "Failed to parse coordinates. Use the format 'lat,lon' for both 'from' and 'to'.",
          );
        }

        const result = await routingService.route(
          fromLat,
          fromLon,
          toLat,
          toLon,
        );

        logger.debug(
          "Routing result",
          JSON.stringify({ fromLat, fromLon, toLat, toLon, result }, null, 2),
        );

        return result;
      },
    },
  });

  // Command to run routing based on two points in the active drawing layer
  commandRegistry.registerAll({
    command: {
      id: "routing.run_route",
      name: "Run routing",
      description:
        "Runs a route request using the first two points in the active drawing layer (start and end).",
      parameters: [],
    },
    handler: {
      canExecute: (context: ExecutionContext) =>
        context.activeEditor instanceof GsMapEditor,
      execute: async (context: ExecutionContext) => {
        const editor = assertGsMapEditor(context);
        const gsMap = editor.getGsMap();
        if (!gsMap) {
          toastError("Map not initialized");
          return;
        }

        const operations = editor.mapOperations;
        if (!operations) {
          toastError("Map operations not available");
          return;
        }

        const activeDrawingLayerUuid =
          (editor as any).activeDrawingLayerUuid as string | undefined;

        if (!activeDrawingLayerUuid) {
          toastError("No active drawing layer selected. Please pick one in the toolbar.");
          return;
        }

        const layer = gsMap.layers.find(
          (l: GsLayer) =>
            l.uuid === activeDrawingLayerUuid &&
            l.type === GsLayerType.VECTOR &&
            l.source?.type === GsSourceType.Features,
        ) as GsLayer | undefined;

        if (!layer) {
          toastError("Active drawing layer is not a vector features layer.");
          return;
        }

        const features = (layer.source as any).features as any[] | undefined;
        if (!features || features.length < 2) {
          toastError("Active drawing layer must contain at least two Point features.");
          return;
        }

        const pointFeatures = features.filter(
          f => f?.geometry?.type === "Point" &&
            Array.isArray(f.geometry.coordinates),
        );

        if (pointFeatures.length < 2) {
          toastError("Active drawing layer must contain at least two Point features.");
          return;
        }

        const [start, end] = pointFeatures;
        const startCoord = start.geometry.coordinates as [number, number];
        const endCoord = end.geometry.coordinates as [number, number];

        try {
          const renderer = editor.getRenderer();
          if (!renderer) {
            toastError("Map renderer not available");
            return;
          }
          // Ensure the currently active graph is loaded; the active graph
          // is selected via the toolbar dropdown and stored as a .routx path.
          const activeGraphPath = await routingService.getActiveGraphPath();
          if (!activeGraphPath) {
            toastError("No active routing graph selected.");
            return;
          }
          const workspace = await workspaceService.getWorkspace();
          if (!workspace) {
            toastError("No workspace available");
            return;
          }
          const resource = await workspace.getResource(activeGraphPath);
          if (!(resource instanceof File)) {
            toastError(`Routing graph not found: ${activeGraphPath}`);
            return;
          }
          const graphBlob = await resource.getContents({ blob: true });
          const graphBuffer = await (graphBlob as Blob).arrayBuffer();
          const graphBytes = new Uint8Array(graphBuffer);
          await routingService.loadGraphFromBlob(graphBytes);
          const [startLon, startLat] = await (renderer as any).transform(startCoord);
          const [endLon, endLat] = await (renderer as any).transform(endCoord);
          const fc = await routingService.route(
            startLat,
            startLon,
            endLat,
            endLon,
          );

          // Create a dedicated route layer containing both routing points and
          // the resulting LineString(s), so each run produces a self-contained
          // "Route N" layer.
          const targetProjection =
            gsMap.view?.projection ?? "EPSG:3857";

          const targetFeatures: any[] = [];

          // Include the original start/end points in the new route layer.
          targetFeatures.push(start);
          targetFeatures.push(end);

          // Transform and add all LineStrings from the routing result.
          for (const feature of fc.features) {
            if (feature.geometry?.type === "LineString") {
              const coords = feature.geometry.coordinates as [number, number][];
              const transformed: [number, number][] = [];
              for (const c of coords) {
                const projCoord = await (renderer as any).transform(
                  [c[0], c[1]],
                  { sourceProjection: "EPSG:4326", targetProjection }
                );
                transformed.push(projCoord);
              }
              feature.geometry.coordinates = transformed;
            }
            targetFeatures.push(feature);
          }

          // Determine next "Route N" name.
          let routeIndex = 0;
          const existingNames = new Set(
            (gsMap.layers as GsLayer[])
              .map((l) => l.name)
              .filter((name): name is string => typeof name === "string"),
          );
          while (existingNames.has(`Route ${routeIndex}`)) {
            routeIndex += 1;
          }

          const routeLayer: GsLayer = {
            name: `Route ${routeIndex}`,
            type: GsLayerType.VECTOR,
            source: {
              type: GsSourceType.Features,
              features: targetFeatures,
            } as any,
            visible: true,
          } as any;

          await operations.addLayer(routeLayer, false);

          toastInfo(`Route added as layer "Route ${routeIndex}".`);
        } catch (error: any) {
          logger.error("Routing failed", error);

          const message =
            (typeof error === "string" && error) ||
            (error?.message as string | undefined) ||
            (() => {
              try {
                return JSON.stringify(error);
              } catch {
                return undefined;
              }
            })() ||
            "Unknown error occurred";

          toastError(`Routing failed: ${message}`);
        }
      },
    },
  });

  // Toolbar contributions for the map editor
  contributionRegistry.registerContribution("toolbar:map-editor", {
    command: "routing.run_route",
    icon: "play",
    label: "Run Route",
    disabled: () => !(activePartSignal.get() instanceof GsMapEditor),
  } as any);

  // Toolbar dropdown to select the active routing PBF
  contributionRegistry.registerContribution("toolbar:map-editor", {
    name: "toolbar.routing.graphSelector",
    target: "toolbar:map-editor",
    slot: "end",
    component: `<routing-graph-selector></routing-graph-selector>`,
  } as any);

  // Filebrowser context menu: convert PBF -> routx graph
  commandRegistry.registerAll({
    command: {
      id: "routing.convert_pbf_to_graph",
      name: "Convert to routing graph",
      description: "Converts a PBF file into a routx graph file (*.routx) next to the original",
      parameters: [
        {
          name: "path",
          description: "Optional workspace path to the PBF file",
          required: false,
        },
      ],
    },
    handler: {
      execute: async (context: ExecutionContext) => {
        let file: File | undefined;
        const path = context.params?.["path"] as string | undefined;

        if (path) {
          const workspace = await workspaceService.getWorkspace();
          if (!workspace) {
            toastError("No workspace available");
            return;
          }
          const resource = await workspace.getResource(path);
          if (resource instanceof File) {
            file = resource;
          }
        } else {
          const selection = activeSelectionSignal.get();
          if (selection instanceof File) {
            file = selection;
          }
        }

        if (!file) {
          toastError("No PBF file selected or path provided");
          return;
        }

        if (!file.getName().toLowerCase().endsWith(".pbf")) {
          toastError("Selected file is not a .pbf file");
          return;
        }

        await taskService.runAsync(
          "Converting PBF to routing graph",
          async (progress) => {
            progress.message = "Reading PBF file contents…";

            const blob = await file!.getContents({ blob: true });
            if (!(blob instanceof Blob)) {
              toastError("Failed to read PBF as binary blob");
              return;
            }

            const name = file!.getName();

            progress.message = "Building routing graph from PBF (this may take a while)…";

            // Create a blob URL and let the worker fetch and build the graph
            // directly, so the main thread never holds the full PBF bytes in
            // memory or transfers them across threads.
            const blobUrl = URL.createObjectURL(blob);
            const result = await (routingService as any).callWorker?.(
              "buildGraphFromPbfUrl",
              {
                name,
                url: blobUrl,
              },
            );
            URL.revokeObjectURL(blobUrl);

            const graphBytes = result?.graphBytes as Uint8Array | undefined;
            if (!graphBytes) {
              toastError("Failed to build routing graph.");
              return;
            }

            // Derive .routx filename next to the original PBF
            const parent = (file as any).getParent?.() as any;
            const baseName = name.replace(/(\.osm)?\.pbf$/i, "");
            const routxName = `${baseName}.routx`;

            let targetFile: File | undefined;
            if (parent && typeof parent.createFile === "function") {
              targetFile = (await parent.createFile(routxName, {
                overwrite: true,
              })) as File;
            } else {
              const workspace = await workspaceService.getWorkspace();
              if (!workspace) {
                toastError("No workspace available to create .routx file");
                return;
              }
              const basePath = file!.getWorkspacePath();
              const targetPath = basePath.replace(/[^/]+$/, routxName);
              const resource = await workspace.getResource(targetPath, {
                create: true,
              });
              if (resource instanceof File) {
                targetFile = resource;
              }
            }

            if (!targetFile) {
              toastError("Failed to create .routx file");
              return;
            }

            const graphBlob = new Blob([graphBytes], {
              type: "application/octet-stream",
            });
            await targetFile.saveContents(graphBlob, {
              contentType: FileContentType.BINARY,
            });

            const graphPath = targetFile.getWorkspacePath();
            await routingService.registerGraphPath(graphPath);
            await routingService.setActiveGraphPath(graphPath);

            progress.message = "Routing graph created.";

            toastInfo(`Created routing graph: ${routxName}`);
          },
        );
      },
    },
  });

  // Filebrowser context menu: register existing *.routx graph
  commandRegistry.registerAll({
    command: {
      id: "routing.register_graph",
      name: "Register routing graph",
      description: "Registers an existing routx graph file so it can be selected for routing",
      parameters: [
        {
          name: "path",
          description: "Optional workspace path to the .routx file",
          required: false,
        },
      ],
    },
    handler: {
      execute: async (context: ExecutionContext) => {
        let file: File | undefined;
        const path = context.params?.["path"] as string | undefined;

        if (path) {
          const workspace = await workspaceService.getWorkspace();
          if (!workspace) {
            toastError("No workspace available");
            return;
          }
          const resource = await workspace.getResource(path);
          if (resource instanceof File) {
            file = resource;
          }
        } else {
          const selection = activeSelectionSignal.get();
          if (selection instanceof File) {
            file = selection;
          }
        }

        if (!file) {
          toastError("No routing graph file selected or path provided");
          return;
        }

        if (!file.getName().toLowerCase().endsWith(".routx")) {
          toastError("Selected file is not a .routx routing graph");
          return;
        }

        const graphPath = file.getWorkspacePath();
        await routingService.registerGraphPath(graphPath);
        await routingService.setActiveGraphPath(graphPath);
        toastInfo(`Registered routing graph: ${graphPath}`);
      },
    },
  });

  contributionRegistry.registerContribution("contextmenu:view.filebrowser", {
    command: "routing.convert_pbf_to_graph",
    icon: "route",
    label: "Convert to routing graph",
    disabled: () => {
      const selection = activeSelectionSignal.get();
      return !(
        selection instanceof File &&
        selection.getName().toLowerCase().endsWith(".pbf")
      );
    },
  } as any);

  contributionRegistry.registerContribution("contextmenu:view.filebrowser", {
    command: "routing.register_graph",
    icon: "route",
    label: "Register routing graph",
    disabled: () => {
      const selection = activeSelectionSignal.get();
      return !(
        selection instanceof File &&
        selection.getName().toLowerCase().endsWith(".routx")
      );
    },
  } as any);
};

