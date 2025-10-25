#!/usr/bin/env python3
"""
GTFS to GeoJSON Converter

This script converts GTFS (General Transit Feed Specification) zip archives
to GeoJSON format files.

Arguments:
    input: Path to the GTFS zip file (workspace-relative, e.g., 'data/transit.zip')
    output: Path to the output folder for GeoJSON files (workspace-relative, e.g., 'data/transit_geojson')

Note:
    The script runs in pyodide with cwd=/workspace, so all paths are relative to the workspace root.
    The main() function is called by the extension with input and output parameters.
"""


def main(input, output):
    """
    Convert GTFS zip archive to GeoJSON files.
    
    Args:
        input: Path to the GTFS zip file
        output: Path to the output folder for GeoJSON files
    """
    print(f"Converting GTFS from: {input}")
    print(f"Output folder: {output}")
    
    # TODO: Implement GTFS to GeoJSON conversion
    # This will be elaborated on later
