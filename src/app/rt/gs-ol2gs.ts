import {Feature} from "ol";
import * as olGeom from "ol/geom";
import {
    GsFeature,
    GsGeometry,
    GsLayerType,
    GsSourceType,
    GsState,
    KEY_STATE,
    KEY_UUID
} from "./gs-model.ts";
import BaseObject from "ol/Object";

export const toGsLayerType = (tag: string) => {
    switch (tag?.toLowerCase()) {
        case "osm":
        case "bing":
        case "google":
        case "geotiff":
        case "wms":
        case "wmts":
        case "xyz":
            return GsLayerType.TILE
        case "bm":
        case "basemap.de":
            return GsLayerType.GROUP
        default:
            return GsLayerType.VECTOR
    }
}

export const toGsSourceType = (tag: string) => {
    if (tag) {
        tag = tag.toLowerCase()
        const sourceTypes = Object.values(GsSourceType)
        const hit = sourceTypes.find(t => tag === t.toLowerCase())
        if (hit) {
            return hit
        }
    }
    throw new Error("Unsupported source type: " + tag)
}

export const toSourceUrl = (sourceType: GsSourceType) => {
    switch (sourceType) {
        case GsSourceType.BM:
            return "https://sgx.geodatenzentrum.de/gdz_basemapworld_vektor/styles/bm_web_wld_col.json"
    }
    return undefined
}

const withGsState = <T extends GsState>(olObj: BaseObject, gsState: T): T => {
    // Get state first (contains original domain model data including UUID)
    const state = olObj.get(KEY_STATE)
    gsState.state = state
    
    // Preserve UUID if it exists (from domain model or previously assigned)
    // Priority: 1) UUID from state (original from domain model), 2) KEY_UUID (synced during conversion)
    // Do NOT generate UUIDs here - external features or unmanaged features should remain without UUIDs
    if (state?.uuid) {
        gsState.uuid = state.uuid
    } else {
        const uuid = olObj.get(KEY_UUID)
        if (uuid) {
            gsState.uuid = uuid
        }
        // If no UUID exists, leave it undefined (feature is external/unmanaged)
    }
    
    return gsState
}

export function toGsGeometry(geometry: olGeom.SimpleGeometry): GsGeometry {
    return withGsState(geometry, {
        type: geometry.getType(),
        coordinates: geometry.getCoordinates()
    } as GsGeometry)
}

export function toGsFeature(feature: Feature) {
    return withGsState(feature, {
        geometry: toGsGeometry(feature.getGeometry() as olGeom.SimpleGeometry)
    } as GsFeature)
}


