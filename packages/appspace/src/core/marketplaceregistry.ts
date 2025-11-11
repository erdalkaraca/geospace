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
    extensions: MarketplaceExtension[];
}

export interface MarketplaceExtension extends Extension {
    /** URL to load the extension module from (required for marketplace extensions) */
    url: string;
    /** Extension version */
    version?: string;
    /** Extension author */
    author?: string;
    /** URL of the catalog this extension came from */
    catalogUrl: string;
}

interface CachedCatalog {
    url: string;
    data: MarketplaceCatalog;
    timestamp: number;
}

const KEY_CATALOG_URLS = "marketplace.catalogUrls";
const KEY_CACHED_CATALOGS = "marketplace.cachedCatalogs";
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

class MarketplaceRegistry {
    private catalogUrls: string[] = [];
    private cachedCatalogs: Map<string, CachedCatalog> = new Map();
    private loadingPromises: Map<string, Promise<MarketplaceCatalog>> = new Map();

    constructor() {
        this.loadCatalogUrls().then(() => {
            this.refreshCatalogs().catch(err => {
                logger.error(`Failed to refresh catalogs on init: ${err.message}`);
            });
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
        this.cachedCatalogs.delete(url);
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

    private isCacheValid(cached: CachedCatalog): boolean {
        const age = Date.now() - cached.timestamp;
        return age < CACHE_TTL_MS;
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
                    extensions: data.extensions.map(ext => ({
                        ...ext,
                        catalogUrl: url,
                    })),
                };

                this.cachedCatalogs.set(url, {
                    url,
                    data: catalog,
                    timestamp: Date.now(),
                });

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
        
        const promises = this.catalogUrls.map(url => {
            const cached = this.cachedCatalogs.get(url);
            if (cached && this.isCacheValid(cached)) {
                logger.debug(`Using cached catalog for: ${url}`);
                return Promise.resolve(cached.data);
            }
            return this.fetchCatalog(url).catch(error => {
                logger.warn(`Failed to refresh catalog ${url}: ${error.message}`);
                return cached?.data || null;
            });
        });

        await Promise.allSettled(promises);
        publish(TOPIC_MARKETPLACE_CHANGED, {type: 'refreshed'});
        logger.info('Catalog refresh completed');
    }

    getMarketplaceExtensions(): MarketplaceExtension[] {
        const extensions: MarketplaceExtension[] = [];
        
        for (const cached of this.cachedCatalogs.values()) {
            if (this.isCacheValid(cached)) {
                extensions.push(...cached.data.extensions);
            }
        }

        return extensions;
    }

    getMarketplaceExtension(extensionId: string): MarketplaceExtension | undefined {
        return this.getMarketplaceExtensions().find(ext => ext.id === extensionId);
    }

    getCatalogsWithExtensions(): Array<{ catalog: MarketplaceCatalog; url: string }> {
        const catalogs: Array<{ catalog: MarketplaceCatalog; url: string }> = [];
        
        for (const cached of this.cachedCatalogs.values()) {
            if (this.isCacheValid(cached)) {
                catalogs.push({
                    catalog: cached.data,
                    url: cached.url,
                });
            }
        }

        return catalogs;
    }

    async installExtension(marketplaceExtension: MarketplaceExtension): Promise<void> {
        const extensionId = `marketplace:${marketplaceExtension.id}`;

        if (extensionRegistry.isEnabled(extensionId)) {
            logger.info(`Extension ${extensionId} is already installed`);
            return;
        }

        logger.info(`Installing marketplace extension: ${marketplaceExtension.name} from ${marketplaceExtension.url}`);

        const extension: Extension = {
            id: extensionId,
            name: marketplaceExtension.name,
            description: marketplaceExtension.description,
            url: marketplaceExtension.url,
            icon: marketplaceExtension.icon,
            experimental: marketplaceExtension.experimental,
            dependencies: marketplaceExtension.dependencies,
        };

        extensionRegistry.registerExtension(extension);
        await appLoaderService.loadExtensionFromUrl(marketplaceExtension.url);
        
        logger.info(`Successfully installed marketplace extension: ${extensionId}`);
    }

    isMarketplaceExtension(extensionId: string): boolean {
        return extensionId.startsWith('marketplace:');
    }

    getCatalogForExtension(extensionId: string): string | undefined {
        const marketplaceId = extensionId.replace('marketplace:', '');
        const extension = this.getMarketplaceExtension(marketplaceId);
        return extension?.catalogUrl;
    }
}

export const marketplaceRegistry = new MarketplaceRegistry();
rootContext.put("marketplaceRegistry", marketplaceRegistry);

