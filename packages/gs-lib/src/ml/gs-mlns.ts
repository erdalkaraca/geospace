/**
 * MapLibre library re-exports
 * Centralized re-exports for MapLibre to provide a single source of truth.
 */

// Re-export MapLibre GL
export {
    Map,
    Marker,
    Popup,
    NavigationControl,
    GeolocateControl,
    ScaleControl,
    FullscreenControl,
    AttributionControl,
    LngLat,
    LngLatBounds,
    Point,
    MercatorCoordinate
} from 'maplibre-gl';

// Re-export types
export type {
    MapOptions,
    StyleSpecification,
    LayerSpecification,
    SourceSpecification,
    GeoJSONSourceSpecification,
    RasterSourceSpecification,
    VectorSourceSpecification,
    MapMouseEvent,
    MapLayerMouseEvent,
    IControl,
    MarkerOptions,
    PopupOptions,
    LngLatLike,
    LngLatBoundsLike,
    PointLike,
    FitBoundsOptions,
    CameraOptions,
    AnimationOptions,
    ExpressionSpecification,
    FilterSpecification
} from 'maplibre-gl';

// Default export for convenience
import maplibregl from 'maplibre-gl';
export { maplibregl };
export default maplibregl;

