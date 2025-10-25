# GTFS to GeoJSON Extension

This extension provides functionality to convert GTFS (General Transit Feed Specification) zip archives to GeoJSON format files.

## Features

- **Context Menu Integration**: Right-click on any `.zip` file in the file browser to access the "Convert to GeoJSON" option
- **Command**: `gtfs_to_geojson` - Converts GTFS zip archives to GeoJSON files
- **Python Integration**: Uses PyEnv to execute a Python conversion script in a web worker

## Usage

1. Open a workspace containing GTFS zip files
2. Right-click on a `.zip` file in the file browser
3. Select "Convert to GeoJSON" from the context menu
4. The conversion will create a new folder with the GeoJSON output files

## Output

The converted GeoJSON files are saved to a folder named `<original_filename>_geojson/`

## Python Script

The actual GTFS to GeoJSON conversion logic is located at:
`src/extensions/gtfs/gtfs_to_geojson.py`

The script is bundled with the extension using Vite's asset import and executed in pyodide via PyEnv. It's currently a placeholder and needs to be implemented with the actual conversion logic.

The script receives two arguments (workspace-relative paths, since cwd is `/workspace`):
- Input path: relative path to the GTFS zip file (e.g., `data/transit.zip`)
- Output path: relative path to the output folder (e.g., `data/transit_geojson`)

## Parameters

- `file` (optional): Path to the GTFS zip file. If not provided, uses the currently selected file.
- `target` (optional): Target folder for output files. Defaults to `<filename>_geojson/`

