import {css, html} from 'lit'
import {when} from "lit/directives/when.js";
import {customElement, state} from 'lit/decorators.js'
import {KPart} from "../parts/k-part";
import {Extension, extensionRegistry, TOPIC_EXTENSIONS_CHANGED} from "../core/extensionregistry";
import '../widgets/k-icon';
import {subscribe} from "../core/events";
import {appLoaderService} from "../core/apploader";


@customElement('k-extensions')
export class KExtensions extends KPart {
    @state()
    private selectedExtension?: Extension;

    @state()
    private filterText: string = '';

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

    private isExtensionRequired(extensionId: string): boolean {
        const currentApp = appLoaderService.getCurrentApp();
        if (!currentApp || !currentApp.extensions) {
            return false;
        }
        return currentApp.extensions.includes(extensionId);
    }

    selectionChanged(e: CustomEvent) {
        const selection = e.detail.selection || [];
        if (selection.length > 0 && selection[0].model) {
            // @ts-ignore
            this.selectedExtension = selection[0].model;
        } else {
            this.selectedExtension = undefined;
        }
    }

    private getFilteredExtensions(): Extension[] {
        if (!this.filterText.trim()) {
            return extensionRegistry.getExtensions();
        }
        const filter = this.filterText.toLowerCase();
        return extensionRegistry.getExtensions().filter(ext => {
            return ext.name.toLowerCase().includes(filter) ||
                   (ext.description?.toLowerCase().includes(filter) ?? false) ||
                   ext.id.toLowerCase().includes(filter);
        });
    }

    private getGroupedExtensions(): { enabled: Extension[], available: Extension[] } {
        const filtered = this.getFilteredExtensions();
        const enabled: Extension[] = [];
        const available: Extension[] = [];
        
        filtered.forEach(ext => {
            if (extensionRegistry.isEnabled(ext.id)) {
                enabled.push(ext);
            } else {
                available.push(ext);
            }
        });
        
        enabled.sort((a, b) => a.name.localeCompare(b.name));
        available.sort((a, b) => a.name.localeCompare(b.name));
        
        return { enabled, available };
    }

    private handleFilterInput(e: Event) {
        this.filterText = (e.target as HTMLInputElement).value;
        this.requestUpdate();
    }

    private clearFilter() {
        this.filterText = '';
        this.requestUpdate();
    }

    protected renderToolbar() {
        return html`
            <wa-input
                placeholder="Filter extensions..."
                .value=${this.filterText}
                @input=${(e: Event) => this.handleFilterInput(e)}
                @wa-clear=${() => this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
        `;
    }

    render() {
        const grouped = this.getGroupedExtensions();
        const hasAnyExtensions = grouped.enabled.length > 0 || grouped.available.length > 0;
        
        return html`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${hasAnyExtensions ? html`
                        ${grouped.enabled.length > 0 ? html`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    Installed (${grouped.enabled.length})
                                </span>
                                ${grouped.enabled.map(e => html`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${e}>
                                        <span><k-icon name="${e.icon}"></k-icon> ${e.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        ` : ''}
                        ${grouped.available.length > 0 ? html`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${grouped.available.length})
                                </span>
                                ${grouped.available.map(e => html`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${e}>
                                        <span><k-icon name="${e.icon}"></k-icon> ${e.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        ` : ''}
                    ` : html`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${when(this.selectedExtension, (e) => html`
                        <h1><k-icon name="${e.icon}"></k-icon> ${e.name}</h1>
                        <hr>
                        <div>
                            ${when(extensionRegistry.isEnabled(e.id), () => html`
                                <wa-button 
                                    title="${this.isExtensionRequired(e.id) ? 'This extension is required by the current app and cannot be uninstalled' : 'Disable this extension'}" 
                                    @click="${() => this.disable(e)}"
                                    variant="danger" 
                                    appearance="plain"
                                    ?disabled=${this.isExtensionRequired(e.id)}>
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>
                                ${when(this.isExtensionRequired(e.id), () => html`
                                    <div class="required-hint">
                                        <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                        <span>This extension is required by the current app and cannot be uninstalled</span>
                                    </div>
                                `)}
                            `, () => html`
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

        wa-tree-item > span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        wa-tree-item:has(> wa-tree-item) {
            font-weight: 500;
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

        .required-hint {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.75rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
        }

        .required-hint wa-icon {
            flex-shrink: 0;
        }

        .required-hint span {
            line-height: 1.4;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-extensions': KExtensions
    }
}
