import {appSettings} from "./settingsservice";
import {publish, subscribe} from "./events";
import {createLogger} from "./logger";
import {extensionRegistry, Extension} from "./extensionregistry";
import {appLoaderService} from "./apploader";
import {rootContext} from "./di";

const logger = createLogger('MarketplaceRegistry');

export const TOPIC_MARKETPLACE_CHANGED = "events/marketplaceregistry/changed";

export interface MarketplaceCatalog {
    name?: string;
    description?: string;
    extensions: Extension[];
}

const KEY_CATALOG_URLS = "marketplace.catalogUrls";

class MarketplaceRegistry {
    private catalogUrls: string[] = [];
    private loadingPromises: Map<string, Promise<MarketplaceCatalog>> = new Map();

    constructor() {
        // Load catalog URLs and refresh catalogs
        this.loadCatalogUrls().then(() => {
            this.refreshCatalogs().catch(err => {
                logger.error(`Failed to refresh catalogs on init: ${err.message}`);
            });
        });
        
        // Register marketplace extensions when they become available
        subscribe(TOPIC_MARKETPLACE_CHANGED, () => {
            this.registerMarketplaceExtensions();
        });
    }

    private async loadCatalogUrls(): Promise<void> {
        try {
            const urls = await appSettings.get(KEY_CATALOG_URLS);
            this.catalogUrls = Array.isArray(urls) ? urls : [];
            logger.debug(`Loaded ${this.catalogUrls.length} catalog URLs`);
        } catch (error) {
            logger.error(`Failed to load catalog URLs: ${error}`);
            this.catalogUrls = [];
        }
    }

    private async saveCatalogUrls(): Promise<void> {
        await appSettings.set(KEY_CATALOG_URLS, this.catalogUrls);
        publish(TOPIC_MARKETPLACE_CHANGED, {type: 'catalogs', urls: this.catalogUrls});
    }

    async addCatalogUrl(url: string): Promise<void> {
        if (!this.isValidUrl(url)) {
            throw new Error(`Invalid catalog URL: ${url}`);
        }

        if (this.catalogUrls.includes(url)) {
            logger.debug(`Catalog URL already exists: ${url}`);
            return;
        }

        this.catalogUrls.push(url);
        await this.saveCatalogUrls();
        logger.info(`Added catalog URL: ${url}`);

        try {
            await this.fetchCatalog(url);
            // Register extensions from the newly fetched catalog
            this.registerMarketplaceExtensions();
        } catch (error) {
            logger.warn(`Failed to fetch catalog immediately after adding: ${error}`);
        }
    }

    async removeCatalogUrl(url: string): Promise<void> {
        const index = this.catalogUrls.indexOf(url);
        if (index === -1) {
            return;
        }

        this.catalogUrls.splice(index, 1);
        await this.saveCatalogUrls();
        logger.info(`Removed catalog URL: ${url}`);
    }

    getCatalogUrls(): string[] {
        return [...this.catalogUrls];
    }

    private isValidUrl(url: string): boolean {
        try {
            const parsed = new URL(url);
            return parsed.protocol === 'http:' || parsed.protocol === 'https:';
        } catch {
            return false;
        }
    }

    private async fetchCatalog(url: string): Promise<MarketplaceCatalog> {
        const existingPromise = this.loadingPromises.get(url);
        if (existingPromise) {
            return existingPromise;
        }

        const fetchPromise = (async () => {
            try {
                logger.debug(`Fetching catalog from: ${url}`);
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json() as MarketplaceCatalog;

                if (!data.extensions || !Array.isArray(data.extensions)) {
                    throw new Error('Invalid catalog format: extensions array is required');
                }

                const catalog: MarketplaceCatalog = {
                    name: data.name,
                    description: data.description,
                    extensions: data.extensions,
                };

                logger.debug(`Successfully fetched catalog from ${url}: ${catalog.extensions.length} extensions`);
                return catalog;
            } catch (error) {
                logger.error(`Failed to fetch catalog from ${url}: ${error}`);
                throw error;
            } finally {
                this.loadingPromises.delete(url);
            }
        })();

        this.loadingPromises.set(url, fetchPromise);
        return fetchPromise;
    }

    async refreshCatalogs(): Promise<void> {
        logger.info(`Refreshing ${this.catalogUrls.length} catalogs...`);
        
        const promises = this.catalogUrls.map(url =>
            this.fetchCatalog(url).catch(error => {
                logger.warn(`Failed to refresh catalog ${url}: ${error.message}`);
                return null;
            })
        );

        const catalogs = await Promise.allSettled(promises);
        
        // Register all marketplace extensions from successfully fetched catalogs
        catalogs.forEach((result, index) => {
            if (result.status === 'fulfilled' && result.value) {
                const catalog = result.value;
                catalog.extensions.forEach(marketplaceExt => {
                    // Only register if not already registered
                    if (!extensionRegistry.getExtensions().find(e => e.id === marketplaceExt.id)) {
                        // Mark as external extension
                        const extension: Extension = {
                            ...marketplaceExt,
                            external: true
                        };
                        extensionRegistry.registerExtension(extension);
                        logger.debug(`Registered marketplace extension: ${marketplaceExt.id}`);
                    }
                });
            }
        });
        
        // Publish event after registration
        publish(TOPIC_MARKETPLACE_CHANGED, {type: 'refreshed'});
        logger.info('Catalog refresh completed');
    }

    private registerMarketplaceExtensions(): void {
        // This method is called when TOPIC_MARKETPLACE_CHANGED is published
        // Since we register extensions directly in refreshCatalogs, this is a no-op
        // Kept for compatibility with the event subscription
    }

    getMarketplaceExtensions(): Extension[] {
        // Extensions are registered directly into extensionRegistry when catalogs are fetched
        // This method is kept for compatibility but returns empty since we don't cache anymore
        return [];
    }

    getMarketplaceExtension(extensionId: string): Extension | undefined {
        // Check if extension is registered in extensionRegistry and is external
        const extension = extensionRegistry.getExtensions().find(e => e.id === extensionId);
        if (extension && extension.external) {
            return extension;
        }
        return undefined;
    }

    getCatalogsWithExtensions(): Array<{ catalog: MarketplaceCatalog; url: string }> {
        // Since we don't cache catalogs anymore, this returns empty
        // Extensions are registered directly into extensionRegistry
        return [];
    }

    async installExtension(extension: Extension): Promise<void> {
        if (extensionRegistry.isEnabled(extension.id)) {
            logger.info(`Extension ${extension.id} is already installed`);
            return;
        }

        logger.info(`Installing marketplace extension: ${extension.name} from ${extension.url}`);

        // Mark as external and register
        const externalExtension: Extension = {
            ...extension,
            external: true
        };
        extensionRegistry.registerExtension(externalExtension);
        await appLoaderService.loadExtensionFromUrl(extension.url!);
        
        logger.info(`Successfully installed marketplace extension: ${extension.id}`);
    }

    isMarketplaceExtension(extensionId: string): boolean {
        const extension = extensionRegistry.getExtensions().find(e => e.id === extensionId);
        return extension !== undefined && extension.external === true;
    }
}

export const marketplaceRegistry = new MarketplaceRegistry();
rootContext.put("marketplaceRegistry", marketplaceRegistry);

