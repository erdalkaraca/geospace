// @ts-ignore
import {toGeojson} from "osmtogeojson";
import {
    type CommandRegistry,
    type WorkspaceService,
    type File
} from "@kispace/appspace/api";

export default ({commandRegistry, workspaceService}: {
    commandRegistry: CommandRegistry,
    workspaceService: WorkspaceService
}) => {
    commandRegistry.registerAll({
        command: {
            "id": "overpass",
            "name": "OpenStreetMap Overpass",
            "description": "Runs a query against the OpenStreetMap Overpass API to download geodata",
            "llm": {
                "prompt": "use boundary=administrative; use [out:json]; use nwr to select all nodes, ways and relations; use out geom to include geometries"
            },
            "parameters": [
                {
                    "name": "query",
                    "description": "the overpass query to submit, use {{varX}} to reference a variable from a previously executed command, for example {{viewExtent}} to obtain the current view's extents as a bounding box",
                    "required": true
                },
                {
                    "name": "outputFile",
                    "description": "the path to the output file within the workspace",
                    "required": true
                }
            ]
        },
        handler: {
            execute: async ({params: {query, outputFile}}: any) => {
                if (!query || !outputFile) {
                    return
                }

                const geojson = await fetch('https://overpass-api.de/api/interpreter', {
                    method: 'POST',
                    body: query,
                })
                    .then(response => response.json())
                    .then(toGeojson)

                const workspace = await workspaceService.getWorkspace()
                const outFile = await workspace?.getResource(outputFile, {create: true})! as File
                if (outFile) {
                    await outFile.saveContents(JSON.stringify(geojson))
                }
            }
        }
    })
}