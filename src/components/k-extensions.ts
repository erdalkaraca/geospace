import {css, html} from 'lit'
import {when} from "lit/directives/when.js";
import {customElement, state} from 'lit/decorators.js'
import {KPart} from "../parts/k-part.ts";
import {Extension, extensionRegistry, TOPIC_EXTENSIONS_CHANGED} from "../core/extensionregistry.ts";
import '../widgets/k-icon.ts';
import {subscribe} from "../core/events.ts";


@customElement('k-extensions')
export class KExtensions extends KPart {
    @state()
    private selectedExtension?: Extension;

    protected doInitUI() {
        subscribe(TOPIC_EXTENSIONS_CHANGED, () => {
            this.requestUpdate()
        })
    }

    onExtensionDblClick() {

    }

    enable(extension: Extension) {
        extensionRegistry.enable(extension.id, true);
        this.requestUpdate()
    }

    disable(extension: Extension) {
        extensionRegistry.disable(extension.id, true);
        this.requestUpdate()
    }

    selectionChanged(e: CustomEvent) {
        // @ts-ignore
        this.selectedExtension = e.detail.selection[0].model
    }

    render() {
        return html`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree style="--indent-guide-width: 1px;" slot="start"
                         @wa-selection-change="${this.selectionChanged}">
                    ${extensionRegistry.getExtensions().map(e => html`
                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${e} expanded>
                            <span><k-icon name="${e.icon}"></k-icon> ${e.name}</span>
                        </wa-tree-item>`)}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${when(this.selectedExtension, (e) => html`
                        <h1><k-icon name="${e.icon}"></k-icon> ${e.name}</h1>
                        <hr>
                        <div>
                            ${when(extensionRegistry.isEnabled(e.id), () => html`
                                <wa-button title="Disable this extension" @click="${() => this.disable(e)}"
                                           variant="danger" appearance="plain">
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>`, () => html`
                                <wa-button title="Enable this extension" @click="${() => this.enable(e)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${when(e.experimental, () => html`
                            <div style="margin-top: 1em;">
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}

                        <p style="margin-top: 1em;">${e.description}</p>

                        ${when(e.dependencies && e.dependencies.length > 0, () => html`
                            <div style="margin-top: 1.5em;">
                                <h3 style="margin-bottom: 0.5em;">
                                    <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies
                                </h3>
                                <div class="dependencies-list">
                                    ${e.dependencies!.map(depId => {
                                        const depExt = extensionRegistry.getExtensions().find(ex => ex.id === depId);
                                        const isEnabled = extensionRegistry.isEnabled(depId);
                                        return html`
                                            <div class="dependency-item">
                                                <wa-icon 
                                                    name="${isEnabled ? 'check-circle' : 'circle'}" 
                                                    style="color: ${isEnabled ? 'var(--wa-color-success-50)' : 'var(--wa-color-neutral-50)'};">
                                                </wa-icon>
                                                <k-icon name="${depExt?.icon || 'puzzle-piece'}"></k-icon>
                                                <span>${depExt?.name || depId}</span>
                                                ${!isEnabled ? html`
                                                    <span class="dependency-badge">Not Installed</span>
                                                ` : ''}
                                            </div>
                                        `;
                                    })}
                                </div>
                                <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                    <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies are automatically installed when this extension is enabled.
                                </small>
                            </div>
                        `)}
                    `)}
                </div>
            </wa-split-panel>
        `
    }

    static styles = css`
        :host {
        }

        .dependencies-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .dependency-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-surface-variant);
        }

        .dependency-item wa-icon:first-child {
            flex-shrink: 0;
        }

        .dependency-item k-icon {
            flex-shrink: 0;
        }

        .dependency-item span:not(.dependency-badge) {
            flex: 1;
        }

        .dependency-badge {
            font-size: 0.85rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-warning-100);
            color: var(--wa-color-warning-900);
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-extensions': KExtensions
    }
}
