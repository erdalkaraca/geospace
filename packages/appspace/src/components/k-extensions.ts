import {css, html} from 'lit'
import {when} from "lit/directives/when.js";
import {customElement, state} from 'lit/decorators.js'
import {KPart} from "../parts/k-part";
import {Extension, extensionRegistry, TOPIC_EXTENSIONS_CHANGED} from "../core/extensionregistry";
import '../widgets/k-icon';
import {subscribe} from "../core/events";
import {appLoaderService} from "../core/apploader";
import {marketplaceRegistry, MarketplaceExtension, TOPIC_MARKETPLACE_CHANGED} from "../core/marketplaceregistry";
import {toastError, toastInfo} from "../core/toast";


@customElement('k-extensions')
export class KExtensions extends KPart {
    @state()
    private selectedExtension?: Extension | MarketplaceExtension;

    @state()
    private filterText: string = '';


    @state()
    private showCatalogManager: boolean = false;

    @state()
    private newCatalogUrl: string = '';

    @state()
    private refreshing: boolean = false;

    protected doInitUI() {
        subscribe(TOPIC_EXTENSIONS_CHANGED, () => {
            this.requestUpdate()
        })
        subscribe(TOPIC_MARKETPLACE_CHANGED, () => {
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

    async installFromMarketplace(marketplaceExtension: MarketplaceExtension) {
        try {
            await marketplaceRegistry.installExtension(marketplaceExtension);
            toastInfo(`Installed ${marketplaceExtension.name}`);
            this.requestUpdate();
        } catch (error) {
            toastError(`Failed to install ${marketplaceExtension.name}: ${error}`);
        }
    }

    async addCatalogUrl() {
        if (!this.newCatalogUrl.trim()) {
            return;
        }

        try {
            await marketplaceRegistry.addCatalogUrl(this.newCatalogUrl.trim());
            this.newCatalogUrl = '';
            toastInfo('Catalog added successfully');
            await marketplaceRegistry.refreshCatalogs();
        } catch (error) {
            toastError(`Failed to add catalog: ${error}`);
        }
    }

    async removeCatalogUrl(url: string) {
        try {
            await marketplaceRegistry.removeCatalogUrl(url);
            toastInfo('Catalog removed');
        } catch (error) {
            toastError(`Failed to remove catalog: ${error}`);
        }
    }

    async refreshMarketplace() {
        this.refreshing = true;
        try {
            await marketplaceRegistry.refreshCatalogs();
            toastInfo('Marketplace refreshed');
        } catch (error) {
            toastError(`Failed to refresh marketplace: ${error}`);
        } finally {
            this.refreshing = false;
        }
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

    private getFilteredMarketplaceExtensions(): MarketplaceExtension[] {
        const allMarketplace = marketplaceRegistry.getMarketplaceExtensions();
        if (!this.filterText.trim()) {
            return allMarketplace;
        }
        const filter = this.filterText.toLowerCase();
        return allMarketplace.filter(ext => {
            return ext.name.toLowerCase().includes(filter) ||
                   (ext.description?.toLowerCase().includes(filter) ?? false) ||
                   ext.id.toLowerCase().includes(filter);
        });
    }

    private getGroupedExtensions(): { enabled: (Extension | MarketplaceExtension)[], available: (Extension | MarketplaceExtension)[] } {
        const filtered = this.getFilteredExtensions();
        const filteredMarketplace = this.getFilteredMarketplaceExtensions();
        const enabled: (Extension | MarketplaceExtension)[] = [];
        const available: (Extension | MarketplaceExtension)[] = [];
        
        filtered.forEach(ext => {
            if (extensionRegistry.isEnabled(ext.id)) {
                enabled.push(ext);
            } else {
                available.push(ext);
            }
        });
        
        filteredMarketplace.forEach(ext => {
            const extensionId = `marketplace:${ext.id}`;
            if (extensionRegistry.isEnabled(extensionId)) {
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
            <wa-button
                @click=${() => this.refreshMarketplace()}
                ?disabled=${this.refreshing}
                size="small"
                appearance="plain"
                title="Refresh marketplace">
                <wa-icon name=${this.refreshing ? 'spinner' : 'arrow-rotate-right'} .spin=${this.refreshing}></wa-icon>
            </wa-button>
            <wa-button
                @click=${() => { this.showCatalogManager = !this.showCatalogManager; this.requestUpdate(); }}
                size="small"
                appearance="plain"
                title="Manage catalogs">
                <wa-icon name="gear"></wa-icon>
            </wa-button>
        `;
    }

    render() {
        const grouped = this.getGroupedExtensions();
        const hasAnyExtensions = grouped.enabled.length > 0 || grouped.available.length > 0;
        const catalogUrls = marketplaceRegistry.getCatalogUrls();
        
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
                                ${grouped.enabled.map(e => {
                                    const isMarketplace = 'catalogUrl' in e;
                                    return html`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${e}>
                                            <span><k-icon name="${e.icon}"></k-icon></span> ${e.name}${isMarketplace ? html` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>` : ''}
                                        </wa-tree-item>
                                    `;
                                })}
                            </wa-tree-item>
                        ` : ''}
                        ${grouped.available.length > 0 ? html`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${grouped.available.length})
                                </span>
                                ${grouped.available.map(e => {
                                    const isMarketplace = 'catalogUrl' in e;
                                    return html`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${e}>
                                            <span><k-icon name="${e.icon}"></k-icon></span> ${e.name}${isMarketplace ? html` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>` : ''}
                                        </wa-tree-item>
                                    `;
                                })}
                            </wa-tree-item>
                        ` : ''}
                    ` : ''}
                    ${!hasAnyExtensions ? html`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    ` : ''}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${when(this.showCatalogManager, () => html`
                        <h1><wa-icon name="gear"></wa-icon> Manage Catalogs</h1>
                        <hr>
                        <div style="margin-bottom: 1em;">
                            <h3>Add Catalog URL</h3>
                            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                                <wa-input
                                    placeholder="https://example.com/catalog.json"
                                    .value=${this.newCatalogUrl}
                                    @input=${(e: Event) => { this.newCatalogUrl = (e.target as HTMLInputElement).value; }}
                                    style="flex: 1;">
                                </wa-input>
                                <wa-button
                                    @click=${() => this.addCatalogUrl()}
                                    ?disabled=${!this.newCatalogUrl.trim()}
                                    variant="brand">
                                    Add
                                </wa-button>
                            </div>
                        </div>
                        <div>
                            <h3>Catalog URLs (${catalogUrls.length})</h3>
                            ${catalogUrls.length > 0 ? html`
                                <div class="catalog-list">
                                    ${catalogUrls.map(url => html`
                                        <div class="catalog-item">
                                            <span class="catalog-url">${url}</span>
                                            <wa-button
                                                @click=${() => this.removeCatalogUrl(url)}
                                                size="small"
                                                variant="danger"
                                                appearance="plain">
                                                <wa-icon name="trash"></wa-icon>
                                            </wa-button>
                                        </div>
                                    `)}
                                </div>
                            ` : html`
                                <p style="opacity: 0.7; font-style: italic;">No catalogs configured. Add a catalog URL to discover extensions.</p>
                            `}
                        </div>
                    `, () => html`
                        ${when(this.selectedExtension, (e) => {
                            const isMarketplace = 'catalogUrl' in e;
                            const extensionId = isMarketplace ? `marketplace:${e.id}` : e.id;
                            const isEnabled = extensionRegistry.isEnabled(extensionId);
                            
                            return html`
                                <h1><k-icon name="${e.icon}"></k-icon> ${e.name}${isMarketplace ? ' (External)' : ''}</h1>
                                ${when(isMarketplace, () => html`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>External Extension</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${when(isEnabled, () => html`
                                        <wa-button 
                                            title="${this.isExtensionRequired(extensionId) ? 'This extension is required by the current app and cannot be uninstalled' : 'Disable this extension'}" 
                                            @click="${() => {
                                                const ext: Extension = isMarketplace 
                                                    ? extensionRegistry.getExtensions().find(ex => ex.id === extensionId)!
                                                    : e as Extension;
                                                this.disable(ext);
                                            }}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(extensionId)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                        </wa-button>
                                        ${when(this.isExtensionRequired(extensionId), () => html`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>This extension is required by the current app and cannot be uninstalled</span>
                                            </div>
                                        `)}
                                    `, () => html`
                                        <wa-button 
                                            title="${isMarketplace ? 'Install from marketplace' : 'Enable this extension'}" 
                                            @click="${() => isMarketplace ? this.installFromMarketplace(e as MarketplaceExtension) : this.enable(e as Extension)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                        </wa-button>
                                    `)}
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

                                ${when(isMarketplace && (e as MarketplaceExtension).author, () => html`
                                    <div style="margin-top: 1em; opacity: 0.8;">
                                        <small>
                                            <wa-icon name="user"></wa-icon>
                                            Author: ${(e as MarketplaceExtension).author}
                                        </small>
                                    </div>
                                `)}

                                ${when(isMarketplace && (e as MarketplaceExtension).version, () => html`
                                    <div style="margin-top: 0.5em; opacity: 0.8;">
                                        <small>
                                            <wa-icon name="tag"></wa-icon>
                                            Version: ${(e as MarketplaceExtension).version}
                                        </small>
                                    </div>
                                `)}

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
                            `;
                        })}
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

        .marketplace-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.375rem 0.875rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
            font-weight: 500;
            margin-top: 0.75rem;
            margin-bottom: 0.5rem;
            border: 1px solid var(--wa-color-primary-30);
        }

        .catalog-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }

        .catalog-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem;
            border-radius: 4px;
            background: var(--wa-color-surface-variant);
        }

        .catalog-url {
            flex: 1;
            font-family: monospace;
            font-size: 0.875rem;
            word-break: break-all;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-extensions': KExtensions
    }
}
