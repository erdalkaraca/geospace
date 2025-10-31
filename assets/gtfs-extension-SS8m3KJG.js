import{g as h,h as f,F as a,w as c,c as p,b as g,P as m,t as F}from"./main-CcumzDaQ.js";import"./index-CBe0mDof.js";const y=`#!/usr/bin/env python3
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
from shapely.geometry import LineString  # type: ignore


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
    
    total_stops = len(df)
    print(f"  Found {total_stops} stops to process")
    
    # Create Point geometries using vectorized operation (much faster)
    print("  Creating geometries...")
    geometry = gpd.points_from_xy(df['stop_lon'], df['stop_lat'])
    
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


def create_shapes_geojson(zip_file, output_path, write_file=True):
    """
    Create shapes GeoDataFrame from GTFS shapes.txt
    
    Args:
        zip_file: ZipFile object containing GTFS data
        output_path: Output directory path
        write_file: If True, write shapes.geojson file; if False, only return GeoDataFrame
        
    Returns:
        GeoDataFrame with shape geometries
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
    
    geometries = df.groupby('shape_id').apply(create_linestring_with_progress, include_groups=False)
    
    # Filter out None values (shapes with less than 2 points)
    geometries = geometries[geometries.notna()]
    
    # Create GeoDataFrame with shape_id as index
    gdf = gpd.GeoDataFrame(
        geometry=geometries.values,
        crs='EPSG:4326'
    )
    gdf['shape_id'] = geometries.index
    
    if write_file:
        # Write to GeoJSON
        output_file = f"{output_path}/shapes.geojson"
        gdf.to_file(output_file, driver='GeoJSON')
        shape_count = len(gdf)
        print(f"✓ Created shapes.geojson with {shape_count} shapes")
    
    return gdf


def create_routes_geojson(zip_file, output_path, shapes_gdf):
    """
    Create routes.geojson from GTFS routes.txt + trips.txt + shapes
    
    Args:
        zip_file: ZipFile object containing GTFS data
        output_path: Output directory path
        shapes_gdf: GeoDataFrame containing shape geometries
    """
    print("Processing routes...")
    
    # Read routes.txt
    with zip_file.open('routes.txt') as routes_file:
        routes_df = pd.read_csv(routes_file, encoding='utf-8-sig')
    
    # Read trips.txt
    with zip_file.open('trips.txt') as trips_file:
        trips_df = pd.read_csv(trips_file, encoding='utf-8-sig', low_memory=False)
    
    # Filter out trips without shape_id (some trips might not have shapes)
    trips_df = trips_df.dropna(subset=['shape_id'])
    
    # Convert shape_id to int to avoid float issues (after dropping NaN)
    trips_df['shape_id'] = trips_df['shape_id'].astype(int)
    
    # Get unique combinations of route_id, shape_id, and direction_id
    # (one route can have multiple shapes for different directions/variants)
    route_shapes = trips_df[['route_id', 'shape_id', 'direction_id']].drop_duplicates()
    
    print(f"  Found {len(route_shapes)} unique route-shape combinations")
    
    # Merge with routes metadata
    route_shapes = route_shapes.merge(routes_df, on='route_id', how='left')
    print(f"  After routes merge: {len(route_shapes)} records")
    
    # Merge with shapes geometries (shape_id should already be int in both)
    route_shapes = route_shapes.merge(
        shapes_gdf[['shape_id', 'geometry']],
        on='shape_id',
        how='inner'
    )
    
    print(f"  After shapes merge: {len(route_shapes)} records")
    
    # Create GeoDataFrame
    gdf = gpd.GeoDataFrame(route_shapes, geometry='geometry', crs='EPSG:4326')
    
    # Map route_type codes to human-readable names
    route_type_map = {
        0: 'Tram',
        1: 'Subway',
        2: 'Rail',
        3: 'Bus',
        4: 'Ferry',
        5: 'Cable Tram',
        6: 'Aerial Lift',
        7: 'Funicular',
        11: 'Trolleybus',
        12: 'Monorail'
    }
    
    if 'route_type' in gdf.columns:
        gdf['route_type_name'] = gdf['route_type'].map(route_type_map).fillna('Unknown')
    
    # Write to GeoJSON
    output_file = f"{output_path}/routes.geojson"
    gdf.to_file(output_file, driver='GeoJSON')
    
    route_count = len(gdf)
    print(f"✓ Created routes.geojson with {route_count} route variants")
    return route_count


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
            
            # Process stops
            process_gtfs_layer(
                gtfs_zip, file_list, 'stops.txt',
                f"{output_path}/stops.geojson",
                lambda: create_stops_geojson(gtfs_zip, output_path)
            )
            
            # Process shapes and routes together (routes depend on shapes)
            if 'shapes.txt' in file_list:
                shapes_output = f"{output_path}/shapes.geojson"
                routes_output = f"{output_path}/routes.geojson"
                
                # Check if we need to process shapes or routes
                need_shapes = not os.path.exists(shapes_output)
                need_routes = not os.path.exists(routes_output) and 'routes.txt' in file_list and 'trips.txt' in file_list
                
                # Only load shapes if we need them
                if need_shapes or need_routes:
                    if os.path.exists(shapes_output):
                        # Read existing shapes.geojson for routes processing
                        print("⊙ Skipping shapes.geojson (already exists)")
                        print("  Reading existing shapes.geojson for routes processing...")
                        shapes_gdf = gpd.read_file(shapes_output)
                        # Convert shape_id to int (GeoJSON stores it as string)
                        shapes_gdf['shape_id'] = shapes_gdf['shape_id'].astype(int)
                    else:
                        # Create shapes from scratch
                        shapes_gdf = create_shapes_geojson(gtfs_zip, output_path, write_file=True)
                    
                    # Create routes if needed
                    if need_routes:
                        create_routes_geojson(gtfs_zip, output_path, shapes_gdf)
                    elif os.path.exists(routes_output):
                        print("⊙ Skipping routes.geojson (already exists)")
                else:
                    # Both already exist
                    print("⊙ Skipping shapes.geojson (already exists)")
                    print("⊙ Skipping routes.geojson (already exists)")
                
                # Check for missing source files
                if 'routes.txt' not in file_list:
                    print("⚠ Warning: routes.txt not found in GTFS archive")
                if 'trips.txt' not in file_list:
                    print("⚠ Warning: trips.txt not found in GTFS archive")
            else:
                print("⚠ Warning: shapes.txt not found in GTFS archive")
            
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

`;h({command:{id:"gtfs_to_geojson",name:"Convert GTFS to GeoJSON",description:"Convert a GTFS zip archive to GeoJSON files",parameters:[{name:"file",description:"the GTFS zip file to convert, if not provided, the current selection will be used",required:!1},{name:"target",description:"target folder for the output GeoJSON files, defaults to the zip filename + '_geojson'",required:!1}]},handler:{canExecute:t=>{let n=t.params&&t.params.file;if(!n){const s=f.get();if(!s||!(s instanceof a))return!1;n=s.getWorkspacePath()}return n.toLowerCase().endsWith(".zip")},execute:async t=>{let n=t.params&&t.params.file;if(!n){const e=f.get();e instanceof a&&(n=e.getWorkspacePath())}const s=await c.getWorkspace();if(!s){p("No workspace selected.");return}await g.runAsync("Converting GTFS to GeoJSON",async e=>{try{const o=await s.getResource(n);if(!o||!(o instanceof a)){p("File not found: "+n);return}const l=o;let i=t.params&&t.params.target;i||(i=l.getName().replace(/\.zip$/i,"_geojson")+"/"),e.message="Preparing conversion...",e.progress=1,await s.getResource(i,{create:!0});const _=l.getWorkspacePath(),d=i.replace(/\/$/,"");e.message="Initializing Python environment...",e.progress=2;const r=new m;await r.init(s),e.message="Loading required packages...",e.progress=4,await r.loadPackages(["pandas","geopandas","shapely"]),e.message="Loading conversion script...",e.progress=6;try{await r.execCode(y),e.message="Executing conversion (this may take a while)...",e.progress=10,await r.runFunction("main",{input_path:_,output_path:d}),e.message="Conversion complete!",e.progress=100,F(`GTFS converted successfully to ${i.replace(/\/$/,"")}`)}catch(u){throw p("Python script failed: "+u),u}}catch(o){throw p("Failed to convert GTFS: "+o),o}})}},contribution:{target:"contextmenu:filebrowser",icon:"map-location-dot",label:"Convert to GeoJSON",disabled:()=>{const t=f.get();return!t||!(t instanceof a)?!0:!t.getName().toLowerCase().endsWith(".zip")}}});
