import {
    GsFeature,
    GsGeometry,
    GsState,
    KEY_UUID,
    ensureUuid
} from "../gs-model";
import { toWebMercator, EPSG_4326 } from "./gs-gs2ml";

/**
 * Convert coordinates from WGS84 to EPSG:3857 for any geometry type
 */
function convertCoordinatesToMercator(coords: any, geometryType: string): any {
    switch (geometryType) {
        case 'Point':
            return toWebMercator(coords as [number, number], EPSG_4326);
        case 'LineString':
        case 'MultiPoint':
            return (coords as [number, number][]).map(c => toWebMercator(c, EPSG_4326));
        case 'Polygon':
        case 'MultiLineString':
            return (coords as [number, number][][]).map(ring => ring.map(c => toWebMercator(c, EPSG_4326)));
        case 'MultiPolygon':
            return (coords as [number, number][][][]).map(poly => poly.map(ring => ring.map(c => toWebMercator(c, EPSG_4326))));
        default:
            return coords;
    }
}

/**
 * Convert GeoJSON geometry to GsGeometry (with coordinate conversion to EPSG:3857)
 */
export function toGsGeometry(geometry: GeoJSON.Geometry): GsGeometry {
    if (geometry.type === 'GeometryCollection') {
        throw new Error('GeometryCollection is not supported');
    }
    const geom = geometry as GeoJSON.Point | GeoJSON.LineString | GeoJSON.Polygon | GeoJSON.MultiPoint | GeoJSON.MultiLineString | GeoJSON.MultiPolygon;
    const coordsMercator = convertCoordinatesToMercator(geom.coordinates, geom.type);
    
    return ensureUuid({
        type: geom.type,
        coordinates: coordsMercator
    } as GsGeometry);
}

/**
 * Convert MapLibre/GeoJSON feature to GsFeature (with coordinate conversion to EPSG:3857)
 */
export function toGsFeature(feature: GeoJSON.Feature): GsFeature {
    const geometry = feature.geometry;
    if (geometry.type === 'GeometryCollection') {
        throw new Error('GeometryCollection is not supported');
    }
    const geom = geometry as GeoJSON.Point | GeoJSON.LineString | GeoJSON.Polygon | GeoJSON.MultiPoint | GeoJSON.MultiLineString | GeoJSON.MultiPolygon;
    const coordsMercator = convertCoordinatesToMercator(geom.coordinates, geom.type);
    
    return ensureUuid({
        geometry: ensureUuid({
            type: geom.type,
            coordinates: coordsMercator
        } as GsGeometry),
        state: feature.properties || {},
        uuid: feature.properties?.[KEY_UUID] || feature.id?.toString()
    } as GsFeature);
}

