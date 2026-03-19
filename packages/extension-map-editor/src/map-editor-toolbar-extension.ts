import type { TemplateResult } from "@eclipse-lyra/core/externals/lit";
import type { GsMapEditor } from "./gs-map-editor";

export type MapEditorToolbarExtensionComponent =
  | string
  | ((editor: GsMapEditor) => TemplateResult);

export interface MapEditorToolbarExtensionContribution {
  name?: string;
  label: string;
  target?: string;
  slot?: string;
  icon?: string;
  component: MapEditorToolbarExtensionComponent;
}
