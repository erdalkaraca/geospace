import scriptContent from "./gtfs_to_geojson.py?raw";
import {
    registerAll,
    File,
    workspaceService,
    activeSelectionSignal,
    toastError,
    toastInfo,
    taskService,
    rootContext,
} from "@kispace-io/core/api";

registerAll({
    command: {
        id: "gtfs_to_geojson",
        name: "Convert GTFS to GeoJSON",
        description: "Convert a GTFS zip archive to GeoJSON files",
        parameters: [
            {
                name: "file",
                description:
                    "the GTFS zip file to convert, if not provided, the current selection will be used",
                required: false,
            },
            {
                name: "target",
                description:
                    "target folder for the output GeoJSON files, defaults to the zip filename + '_geojson'",
                required: false,
            },
        ],
    },
    handler: {
        canExecute: (context) => {
            let filePath: string = context.params && context.params["file"];

            if (!filePath) {
                const selectedItem = activeSelectionSignal.get();
                if (!selectedItem || !(selectedItem instanceof File)) {
                    return false;
                }
                filePath = selectedItem.getWorkspacePath();
            }

            return filePath.toLowerCase().endsWith(".zip");
        },
        execute: async (context) => {
            let filePath: string = context.params && context.params["file"];

            if (!filePath) {
                const selectedItem = activeSelectionSignal.get();
                if (selectedItem instanceof File) {
                    filePath = selectedItem.getWorkspacePath();
                }
            }

            const workspaceDir = await workspaceService.getWorkspace();
            if (!workspaceDir) {
                toastError("No workspace selected.");
                return;
            }

            await taskService.runAsync(
                "Converting GTFS to GeoJSON",
                async (progress) => {
                    try {
                        const fileResource =
                            await workspaceDir.getResource(filePath);
                        if (
                            !fileResource ||
                            !(fileResource instanceof File)
                        ) {
                            toastError("File not found: " + filePath);
                            return;
                        }

                        const file = fileResource as File;

                        let targetFolder =
                            context.params && context.params["target"];
                        if (!targetFolder) {
                            const fileName = file.getName();
                            targetFolder =
                                fileName.replace(/\.zip$/i, "_geojson") + "/";
                        }

                        progress.message = "Preparing conversion...";
                        progress.progress = 1;

                        await workspaceDir.getResource(targetFolder, {
                            create: true,
                        });

                        const inputPath = file.getWorkspacePath();
                        const outputPath = targetFolder.replace(/\/$/, "");

                        progress.message = "Initializing Python environment...";
                        progress.progress = 2;

                        const PyEnvClass = rootContext.getProxy().PyEnv;
                        if (!PyEnvClass) {
                            toastError(
                                "Python runtime is not available. Install the system.pythonruntime extension."
                            );
                            return;
                        }

                        const pyenv = new PyEnvClass();
                        await pyenv.init(workspaceDir);

                        progress.message = "Loading required packages...";
                        progress.progress = 4;

                        await pyenv.loadPackages([
                            "pandas",
                            "geopandas",
                            "shapely",
                        ]);

                        progress.message = "Loading conversion script...";
                        progress.progress = 6;

                        try {
                            await pyenv.execCode(scriptContent);

                            progress.message =
                                "Executing conversion (this may take a while)...";
                            progress.progress = 10;

                            await pyenv.runFunction("main", {
                                input_path: inputPath,
                                output_path: outputPath,
                            });

                            progress.message = "Conversion complete!";
                            progress.progress = 100;

                            toastInfo(
                                `GTFS converted successfully to ${targetFolder.replace(/\/$/, "")}`
                            );
                        } catch (err) {
                            toastError("Python script failed: " + err);
                            throw err;
                        }
                    } catch (err) {
                        toastError("Failed to convert GTFS: " + err);
                        throw err;
                    }
                }
            );
        },
    },
    contribution: {
        target: "contextmenu:filebrowser",
        icon: "map-location-dot",
        label: "Convert to GeoJSON",
        disabled: () => {
            const selectedItem = activeSelectionSignal.get();
            if (!selectedItem || !(selectedItem instanceof File)) {
                return true;
            }
            return !selectedItem
                .getName()
                .toLowerCase()
                .endsWith(".zip");
        },
    } as any,
});
