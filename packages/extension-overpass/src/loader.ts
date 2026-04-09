// @ts-ignore
import { toGeojson } from "osmtogeojson";
import {
    type CommandRegistry,
    type WorkspaceService,
    type File,
    type Directory,
    logger,
} from "@eclipse-docks/core";

async function ensureWorkspacePath(workspace: Directory | undefined, path: string): Promise<string> {
    if (!workspace || path.includes("/")) return path;
    const children = await workspace.listChildren(false);
    const first = children[0];
    if (!first) return path;
    return `${first.getName()}/${path}`;
}

export default ({
    commandRegistry,
    workspaceService,
}: {
    commandRegistry: CommandRegistry;
    workspaceService: WorkspaceService;
}) => {
    commandRegistry.registerAll({
        command: {
            id: "overpass",
            name: "OpenStreetMap Overpass",
            description:
                "Runs a query against the OpenStreetMap Overpass API to download geodata",
            llm: {
                prompt: "use boundary=administrative; use [out:json]; use nwr to select all nodes, ways and relations; use out geom to include geometries",
            },
            parameters: [
                {
                    name: "query",
                    description: "the overpass query to submit",
                    required: true,
                },
                {
                    name: "outputFile",
                    description:
                        "the path to the output file within the workspace",
                    required: true,
                },
            ],
        },
        handler: {
            execute: async ({ params: { query, outputFile } }: any) => {
                if (!query || !outputFile) {
                    return;
                }

                logger.debug(`Executing overpass query: ${query}`);

                const geojson = await fetch(
                    "https://overpass-api.de/api/interpreter",
                    {
                        method: "POST",
                        body: query,
                    }
                )
                    .then((response) => response.json())
                    .then(toGeojson);

                const workspace = await workspaceService.getWorkspace();
                const outPath = await ensureWorkspacePath(workspace, outputFile);
                const outFile = (await workspace?.getResource(outPath, {
                    create: true,
                }))! as File;
                if (outFile) {
                    await outFile.saveContents(JSON.stringify(geojson));
                }
            },
        },
    });
};
