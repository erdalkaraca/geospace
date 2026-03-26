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
import { html } from "@eclipse-lyra/core/externals/lit";
import { GsMapEditor } from "@kispace-io/extension-map-editor/geo";
import routingService from "./routing-service";
import "./routing-toolbar";

function updateActiveMapRoutingGraph(graphPath: string) {
  const active = activePartSignal.get();
  if (!(active instanceof GsMapEditor)) return;
  const gsMap = active.getGsMap();
  if (!gsMap) return;
  if (!gsMap.state) gsMap.state = {} as any;
  (gsMap.state as any).activeRoutingGraphPath = graphPath;
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

  // Map editor toolbar extension (editor-coupled)
  contributionRegistry.registerContribution("mapeditor.toolbar.extensions", {
    name: "routing.toolbar",
    label: "Routing toolbar",
    component: (editor: GsMapEditor) =>
      html`<routing-toolbar .editor=${editor}></routing-toolbar>`,
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

            const graphBlob = new Blob([graphBytes as BlobPart], {
              type: "application/octet-stream",
            });
            await targetFile.saveContents(graphBlob, {
              contentType: FileContentType.BINARY,
            });

            const graphPath = targetFile.getWorkspacePath();
            await routingService.registerGraphPath(graphPath);
            await routingService.setActiveGraphPath(graphPath);
            updateActiveMapRoutingGraph(graphPath);

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
        updateActiveMapRoutingGraph(graphPath);
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

