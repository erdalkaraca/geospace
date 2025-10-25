#!/usr/bin/env python3
"""
GTFS to GeoJSON Converter

This script converts GTFS (General Transit Feed Specification) zip archives
to GeoJSON format files.

Arguments:
    input_path: Path to the GTFS zip file (workspace-relative, e.g., 'data/transit.zip')
    output_path: Path to the output folder for GeoJSON files (workspace-relative, e.g., 'data/transit_geojson')

Note:
    The script runs in pyodide with cwd=/workspace, so all paths are relative to the workspace root.
    The main() function is called by the extension with input and output parameters.
"""

import zipfile
import os
import pandas as pd  # type: ignore
import geopandas as gpd  # type: ignore
from shapely.geometry import Point, LineString  # type: ignore


def process_if_not_exists(output_file, callback):
    """
    Execute callback only if output file doesn't exist.
    
    Args:
        output_file: Path to the output file to check
        callback: Function to execute if file doesn't exist
    """
    if os.path.exists(output_file):
        filename = os.path.basename(output_file)
        print(f"⊙ Skipping {filename} (already exists)")
        return False
    else:
        callback()
        return True


def process_gtfs_layer(gtfs_zip, file_list, gtfs_file, output_file, processor_func):
    """
    Process a GTFS layer if the source file exists and output doesn't exist yet.
    
    Args:
        gtfs_zip: ZipFile object containing GTFS data
        file_list: List of files in the GTFS archive
        gtfs_file: Name of the GTFS source file (e.g., 'stops.txt')
        output_file: Path to the output GeoJSON file
        processor_func: Function to call to process the layer
    """
    if gtfs_file in file_list:
        process_if_not_exists(output_file, processor_func)
    else:
        print(f"⚠ Warning: {gtfs_file} not found in GTFS archive")


def create_stops_geojson(zip_file, output_path):
    """
    Create stops.geojson from GTFS stops.txt
    
    Args:
        zip_file: ZipFile object containing GTFS data
        output_path: Output directory path
    """
    print("Processing stops...")
    
    # Read stops.txt into a DataFrame
    with zip_file.open('stops.txt') as stops_file:
        df = pd.read_csv(stops_file, encoding='utf-8-sig')
    
    # Filter out stops without coordinates
    df = df.dropna(subset=['stop_lat', 'stop_lon'])
    
    # Create Point geometries
    geometry = [Point(lon, lat) for lon, lat in zip(df['stop_lon'], df['stop_lat'])]
    
    # Create GeoDataFrame
    gdf = gpd.GeoDataFrame(df, geometry=geometry, crs='EPSG:4326')
    
    # Drop the coordinate columns as they're now in the geometry
    gdf = gdf.drop(columns=['stop_lat', 'stop_lon'])
    
    # Write to GeoJSON
    output_file = f"{output_path}/stops.geojson"
    gdf.to_file(output_file, driver='GeoJSON')
    
    stop_count = len(gdf)
    print(f"✓ Created stops.geojson with {stop_count} stops")
    return stop_count


def create_shapes_geojson(zip_file, output_path):
    """
    Create shapes.geojson from GTFS shapes.txt
    
    Args:
        zip_file: ZipFile object containing GTFS data
        output_path: Output directory path
    """
    print("Processing shapes...")
    
    # Read shapes.txt into a DataFrame
    with zip_file.open('shapes.txt') as shapes_file:
        df = pd.read_csv(shapes_file, encoding='utf-8-sig')
    
    # Filter out invalid coordinates
    df = df.dropna(subset=['shape_pt_lat', 'shape_pt_lon', 'shape_pt_sequence'])
    
    # Sort by shape_id and sequence to ensure correct order
    df = df.sort_values(['shape_id', 'shape_pt_sequence'])
    
    # Get unique shape_ids for progress tracking
    total_shapes = df['shape_id'].nunique()
    print(f"  Found {total_shapes} unique shapes to process")
    
    # Create LineString geometries with progress tracking
    counter = {'count': 0}
    
    def create_linestring_with_progress(group):
        coords = list(zip(group['shape_pt_lon'], group['shape_pt_lat']))
        counter['count'] += 1
        
        if counter['count'] % 100 == 0:
            print(f"  Processed {counter['count']}/{total_shapes} shapes...")
        
        return LineString(coords) if len(coords) >= 2 else None
    
    geometries = df.groupby('shape_id').apply(create_linestring_with_progress)
    
    # Filter out None values (shapes with less than 2 points)
    geometries = geometries[geometries.notna()]
    
    # Create GeoDataFrame
    gdf = gpd.GeoDataFrame(
        {'shape_id': geometries.index},
        geometry=geometries.values,
        crs='EPSG:4326'
    )
    
    # Write to GeoJSON
    output_file = f"{output_path}/shapes.geojson"
    gdf.to_file(output_file, driver='GeoJSON')
    
    shape_count = len(gdf)
    print(f"✓ Created shapes.geojson with {shape_count} shapes")
    return shape_count


def main(input_path, output_path):
    """
    Convert GTFS zip archive to GeoJSON files.
    
    Args:
        input_path: Path to the GTFS zip file
        output_path: Path to the output folder for GeoJSON files
    """
    print(f"Converting GTFS from: {input_path}")
    print(f"Output folder: {output_path}")
    print()
    
    try:
        # Open the GTFS zip file
        with zipfile.ZipFile(input_path, 'r') as gtfs_zip:
            # List files in the archive
            file_list = gtfs_zip.namelist()
            print(f"Found {len(file_list)} files in GTFS archive")
            
            # Process GTFS layers
            process_gtfs_layer(
                gtfs_zip, file_list, 'stops.txt',
                f"{output_path}/stops.geojson",
                lambda: create_stops_geojson(gtfs_zip, output_path)
            )
            
            process_gtfs_layer(
                gtfs_zip, file_list, 'shapes.txt',
                f"{output_path}/shapes.geojson",
                lambda: create_shapes_geojson(gtfs_zip, output_path)
            )
            
            print()
            print("✓ Conversion complete!")
            
    except FileNotFoundError:
        print(f"✗ Error: File not found: {input_path}")
        raise
    except zipfile.BadZipFile:
        print(f"✗ Error: Invalid ZIP file: {input_path}")
        raise
    except Exception as e:
        print(f"✗ Error: {e}")
        raise

