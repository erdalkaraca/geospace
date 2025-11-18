/**
 * OpenLayers library re-exports
 * Centralized re-exports for OpenLayers to provide a single source of truth.
 */

// Re-export all OpenLayers core exports
export *from "ol";
export type { FeatureLike } from "ol/Feature";

// Re-export OpenLayers namespaces
export * as geom from "ol/geom";
export * as layer from "ol/layer";
export * as source from "ol/source";
export * as style from "ol/style";
export * as format from "ol/format";
export * as interaction from "ol/interaction";
export * as proj from "ol/proj";
export * as sphere from "ol/sphere";
export * as extent from "ol/extent";
export * as events from "ol/events";
export * as eventsCondition from "ol/events/condition";

export { default as BaseLayer } from "ol/layer/Base";

// Re-export ol-mapbox-style
export { apply as applyMapboxStyle } from "ol-mapbox-style";

// Re-export commonly used defaults
export { defaults as defaultControls } from "ol/control/defaults";
export { defaults as defaultInteractions } from "ol/interaction/defaults";