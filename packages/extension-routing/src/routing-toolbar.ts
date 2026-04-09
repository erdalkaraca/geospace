import {
  DocksElement,
  TOPIC_SETTINGS_CHANGED,
} from '@eclipse-docks/core';
import {
  css,
  customElement,
  html,
  property,
} from '@eclipse-docks/core/externals/lit';
import type { PropertyValues } from '@eclipse-docks/core/externals/lit';
import { GsLayerType, GsSourceType } from "@kispace-io/gs-lib";
import {
  GsMapEditor,
  GS_MAP_EDITOR_TOOLBAR_CONTEXT,
} from "@kispace-io/extension-map-editor/geo";
import routingService from "./routing-service";
import { runRoutingIntoActiveDrawingLayer } from "./routing-actions";

@customElement("routing-toolbar")
export class RoutingToolbar extends DocksElement {
  @property({ attribute: false })
  editor: GsMapEditor | null = null;

  private graphPaths: string[] = [];
  private loading = false;

  private readonly onEditorToolbarContext: EventListener = () => {
    this.requestUpdate();
  };

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }

    wa-select {
      min-width: 180px;
    }
  `;

  override updated(changed: PropertyValues): void {
    super.updated(changed);
    if (!changed.has("editor")) return;
    const prev = changed.get("editor") as GsMapEditor | null | undefined;
    if (prev) {
      prev.removeEventListener(
        GS_MAP_EDITOR_TOOLBAR_CONTEXT,
        this.onEditorToolbarContext,
      );
    }
    if (this.editor) {
      this.editor.addEventListener(
        GS_MAP_EDITOR_TOOLBAR_CONTEXT,
        this.onEditorToolbarContext,
      );
    }
  }

  override disconnectedCallback(): void {
    this.detachEditorToolbarListener();
    super.disconnectedCallback();
  }

  private detachEditorToolbarListener(): void {
    this.editor?.removeEventListener(
      GS_MAP_EDITOR_TOOLBAR_CONTEXT,
      this.onEditorToolbarContext,
    );
  }

  protected doBeforeUI(): void {
    // FIXME: `TOPIC_SETTINGS_CHANGED` fires for all app settings changes.
    // Ideally we should refresh only when routing graph registrations change.
    this.subscribe(TOPIC_SETTINGS_CHANGED, async () => {
      await this.refresh();
    });
  }

  protected async doInitUI(): Promise<void> {
    await this.refresh();
  }

  private async refresh(): Promise<void> {
    try {
      this.loading = true;
      this.requestUpdate();
      this.graphPaths = await routingService.getRegisteredGraphPaths();
    } catch (error: any) {
      this.showError(`Failed to load routing graphs: ${error?.message ?? error}`);
    } finally {
      this.loading = false;
      this.requestUpdate();
    }
  }

  private get activeDrawingLayerUuid(): string | null {
    return this.editor?.getActiveDrawingLayerUuid() ?? null;
  }

  private get activeRoutingGraphPath(): string | null {
    const path = this.editor?.getGsMap()?.state?.activeRoutingGraphPath;
    return typeof path === "string" ? path : null;
  }

  private async handleGraphChange(e: Event): Promise<void> {
    const value = (e as any)?.detail?.item?.value as string | undefined;
    if (!value) return;

    if (!this.editor) return;
    const gsMap = this.editor.getGsMap();
    if (!gsMap) return;
    const state = (gsMap.state ??= {} as any);
    state.activeRoutingGraphPath = value;
    this.editor.markDirty(true);
    this.editor.emitToolbarContextChange("routing-graph");
    this.showInfo(`Active routing graph: ${value}`);
  }

  private async runRoute(): Promise<void> {
    if (!this.editor) {
      this.showError("Routing is only available in the map editor.");
      return;
    }

    try {
      await runRoutingIntoActiveDrawingLayer(this.editor, {
        routingService,
        notify: {
          info: (message: string) => this.showInfo(message),
          error: (message: string) => this.showError(message),
        },
      });
    } catch (error: any) {
      const message =
        (typeof error === "string" && error) ||
        (error?.message as string | undefined) ||
        "Unknown error occurred";
      this.showError(`Routing failed: ${message}`);
    }
  }

  private hasAtLeastTwoPointFeatures(): boolean {
    if (!this.editor) return false;
    const layerUuid = this.activeDrawingLayerUuid;
    if (!layerUuid) return false;

    const gsMap = this.editor.getGsMap();
    if (!gsMap) return false;

    const layer = gsMap.layers.find(
      (l: any) =>
        l.uuid === layerUuid &&
        l.type === GsLayerType.VECTOR &&
        l.source?.type === GsSourceType.Features,
    );
    if (!layer) return false;

    const features = (layer.source as any).features as any[] | undefined;
    if (!features) return false;

    const pointFeatures = features.filter(
      (f) => f?.geometry?.type === "Point" && Array.isArray(f.geometry.coordinates),
    );

    return pointFeatures.length >= 2;
  }

  override render() {
    const toolbarEnabled = !!this.activeDrawingLayerUuid;
    const canSelectGraph = toolbarEnabled && this.hasAtLeastTwoPointFeatures();
    const canRun = canSelectGraph && !!this.activeRoutingGraphPath;
    return html`
      <wa-dropdown
        placement="bottom-end"
        @wa-select=${(e: any) => this.handleGraphChange(e)}>
        <wa-button
          slot="trigger"
          appearance="plain"
          size="small"
          with-caret
          ?disabled=${this.loading || this.graphPaths.length === 0 || !canSelectGraph}
          title="Routing graph">
          ${
            this.activeRoutingGraphPath ??
            (this.loading ? "Loading routing graphs..." : "Routing graph")
          }
        </wa-button>
        ${this.graphPaths.map(
          path => html`
            <wa-dropdown-item
              type="checkbox"
              ?checked=${this.activeRoutingGraphPath === path}
              value=${path}>
              ${path}
            </wa-dropdown-item>
          `,
        )}
      </wa-dropdown>
      <docks-command
        icon="fg route"
        title="Run Route"
        ?disabled=${!canRun}
        .action=${() => void this.runRoute()}>
      </docks-command>
    `;
  }
}
