import { subscribe, toastError, toastInfo } from "@eclipse-lyra/core";
import { LitElement, css, html } from "@eclipse-lyra/core/externals/lit";
import routingService from "./routing-service";

export class RoutingGraphSelector extends LitElement {
  private graphPaths: string[] = [];

  private activePath: string | undefined;

  private loading = false;
  private unsubscribeSettings?: () => void;

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

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    // Refresh when routing-related settings change (e.g., new graphs registered).
    // NOTE: `subscribe` returns an identifier in some versions; we treat it
    // as opaque and simply use the returned value as an unsubscribe handle.
    const handle = subscribe("settings.changed", async () => {
      await this.refresh();
    }) as unknown as () => void;
    this.unsubscribeSettings = handle;
    await this.refresh();
  }

  disconnectedCallback(): void {
    this.unsubscribeSettings?.();
    this.unsubscribeSettings = undefined;
    super.disconnectedCallback();
  }

  private async refresh(): Promise<void> {
    try {
      this.loading = true;
      this.requestUpdate();
      this.graphPaths = await routingService.getRegisteredGraphPaths();
      this.activePath = await routingService.getActiveGraphPath();
    } catch (error: any) {
      toastError(`Failed to load routing graphs: ${error?.message ?? error}`);
    } finally {
      this.loading = false;
      this.requestUpdate();
    }
  }

  private async handleChange(e: Event): Promise<void> {
    const value = (e.target as any).value as string;
    if (!value) {
      return;
    }
    try {
      await routingService.setActiveGraphPath(value);
      this.activePath = value;
      this.requestUpdate();
      toastInfo(`Active routing graph: ${value}`);
    } catch (error: any) {
      toastError(`Failed to set active routing graph: ${error?.message ?? error}`);
    }
  }

  override render() {
    if (this.loading) {
      return html`<wa-select
        size="small"
        placeholder="Loading routing graphs..."
        disabled
      ></wa-select>`;
    }

    if (this.graphPaths.length === 0) {
      return html`<wa-select
        size="small"
        placeholder="No routing graphs"
        disabled
      ></wa-select>`;
    }

    return html`
      <wa-select
        size="small"
        value=${this.activePath ?? ""}
        placeholder="Routing graph"
        @change=${this.handleChange}
      >
        ${this.graphPaths.map(
          (path) =>
            html`<wa-option value="${path}">${path}</wa-option>`,
        )}
      </wa-select>
    `;
  }
}

customElements.define("routing-graph-selector", RoutingGraphSelector);

