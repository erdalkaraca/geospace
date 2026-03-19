export const GS_MAP_EDITOR_TOOLBAR_CONTEXT = "gs-map-editor-toolbar-context" as const;

export type GsMapEditorToolbarContextReason =
  | "drawing-layer"
  | "features"
  | "layers"
  | "selection"
  | "renderer"
  | "map-loaded"
  | "routing-graph";

export type GsMapEditorToolbarContextDetail = {
  reason?: GsMapEditorToolbarContextReason;
};

export type GsMapEditorToolbarContextEvent = CustomEvent<GsMapEditorToolbarContextDetail>;
