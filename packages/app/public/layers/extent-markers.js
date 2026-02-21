/**
 * Scripted layer: places 5 point features at the four corners and center
 * of the current map extent, updating on every pan/zoom.
 *
 * viewState.extent is always in EPSG:4326 [minLon, minLat, maxLon, maxLat].
 */
export default function ({ viewState }) {
    const [minLon, minLat, maxLon, maxLat] = viewState.extent;
    const midLon = (minLon + maxLon) / 2;
    const midLat = (minLat + maxLat) / 2;

    const point = ([lon, lat], label) => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [lon, lat] },
        properties: { label },
    });

    return {
        type: 'FeatureCollection',
        features: [
            point([minLon, maxLat], 'top-left'),
            point([maxLon, maxLat], 'top-right'),
            point([minLon, minLat], 'bottom-left'),
            point([maxLon, minLat], 'bottom-right'),
            point([midLon, midLat], 'center'),
        ],
    };
}
