import {marketplaceRegistry} from "../core/marketplaceregistry";
import {createLogger} from "../core/logger";

const logger = createLogger('MarketplaceCatalogContributions');

marketplaceRegistry.addCatalogUrl("https://marketplace.kispace.de/externals.json").catch(err => {
    logger.warn(`Failed to add commercial catalog: ${err}`);
});

