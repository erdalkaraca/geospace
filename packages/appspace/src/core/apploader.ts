/**
 * App Loader Service
 * 
 * Provides a clean separation between the framework and applications built on it.
 * This allows the framework (k-* components and core services) to be published
 * as a reusable npm package, while applications like geospace can be loaded
 * dynamically.
 * 
 * Architecture:
 * - Framework: Core services, k-* components (publishable as npm package)
 * - Application: App-specific code, gs-* components, contributions
 * - App Loader: Bridge between framework and application
 */

import {render, TemplateResult, html} from "lit";
import {rootContext} from "./di";
import {createLogger} from "./logger";
import {extensionRegistry, Extension} from "./extensionregistry";
import {contributionRegistry, Contribution} from "./contributionregistry";

const logger = createLogger('AppLoader');

/**
 * Extracts error message from an error object.
 */
function getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
}

/**
 * Extracts the last path segment from a URL string.
 */
function extractLastPathSegment(urlString: string): string | undefined {
    try {
        const url = new URL(urlString);
        const pathSegments = url.pathname.split('/').filter(Boolean);
        return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : undefined;
    } catch {
        const pathSegments = urlString.split('/').filter(Boolean);
        return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : undefined;
    }
}

/**
 * Extracts the first path segment from the current page URL.
 * This allows loading apps by path, e.g., /geospace loads the geospace app.
 */
function extractAppIdFromPath(): string | undefined {
    const pathname = window.location.pathname;
    const pathSegments = pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 0) {
        return undefined;
    }
    
    const firstSegment = pathSegments[0];
    
    if (!firstSegment || firstSegment === 'index.html' || firstSegment.endsWith('.html')) {
        return undefined;
    }
    
    return firstSegment;
}

/**
 * Application contributions interface.
 * Declaratively defines all contributions for an application.
 */
export interface AppContributions {
    /** UI contributions (tabs, toolbars, commands, etc.) */
    ui?: Contribution[];
    
    /** App-specific extensions to register */
    extensions?: Extension[];
}

/**
 * Represents a single release entry in the release history.
 * Compatible with GitHub release format but with optional html_url.
 */
export interface ReleaseEntry {
    /** Release tag name (e.g., "v1.0.0") */
    tag_name: string;
    
    /** Human-readable release name */
    name: string;
    
    /** Release notes/description (markdown supported) */
    body: string;
    
    /** ISO 8601 timestamp when the release was published */
    published_at: string;
    
    /** Optional URL to the release page */
    html_url?: string;
    
    /** Whether this is a pre-release */
    prerelease?: boolean;
    
    /** Whether this release is a draft */
    draft?: boolean;
}

/**
 * Release history can be provided as:
 * - A static array of releases
 * - A function that returns releases asynchronously
 * This allows apps to either provide pre-loaded releases or fetch them dynamically.
 */
export type ReleaseHistory = ReleaseEntry[];

/**
 * Application definition interface.
 * Applications implement this interface to integrate with the framework.
 */
export interface AppDefinition {
    /** Unique application identifier */
    id: string;
    
    /** Human-readable application name */
    name: string;
    
    /** Application version */
    version: string;
    
    /** Optional application description */
    description?: string;
    
    /**
     * Custom application metadata (optional).
     * Apps can define any custom metadata here for their own use.
     * The framework may read certain metadata keys (e.g., `metadata.github` for release checking).
     */
    metadata?: Record<string, any>;
    
    /**
     * Core framework extensions required by the application.
     * The app loader will enable these extensions when loading the app
     * and disable them when unloading.
     */
    extensions?: string[];
    
    /**
     * Application contributions (tabs, toolbars, commands, app extensions).
     * The app loader will register these contributions automatically.
     */
    contributions?: AppContributions;
    
    /**
     * Application initialization function.
     * Called after extensions are enabled and contributions are registered.
     * Use this for custom initialization logic that can't be expressed declaratively.
     */
    initialize?: () => void | Promise<void>;
    
    /**
     * Optional release history for the application.
     * Can be a static array of releases or a callback function that returns releases (synchronously or asynchronously).
     * If not provided, the version-info command will attempt to fetch releases from GitHub
     * (if metadata.github is configured).
     */
    releaseHistory?: ReleaseHistory | (() => ReleaseHistory | Promise<ReleaseHistory>);
    
    /**
     * Returns the root component template for the application.
     * This is what gets rendered to the DOM.
     * If not provided, defaults to rendering k-standard-app.
     */
    render?: () => TemplateResult;
    
    /**
     * Optional cleanup function.
     * Called when the app is being unloaded, before extensions are disabled.
     */
    dispose?: () => void | Promise<void>;
}

/**
 * Options for registering an application with the apploader.
 */
export interface RegisterAppOptions {
    /** 
     * Default app ID to load if no app URL parameter is provided.
     * If not specified, the first registered app will be loaded.
     */
    defaultAppId?: string;
    
    /** 
     * Whether to automatically start the apploader after registration.
     * If true, the apploader will start immediately after the app is registered.
     * Defaults to false.
     */
    autoStart?: boolean;
    
    /** 
     * DOM element to render the app into.
     * Defaults to document.body.
     */
    container?: HTMLElement;
}

/**
 * App Loader Service
 * 
 * Manages application lifecycle:
 * 1. Register app definitions
 * 2. Initialize apps
 * 3. Render apps to DOM
 * 4. Manage app lifecycle
 */
class AppLoaderService {
    private apps: Map<string, AppDefinition> = new Map();
    private currentApp?: AppDefinition;
    private started: boolean = false;
    private defaultAppId?: string;
    private container: HTMLElement = document.body;
    private systemRequiredExtensions: Set<string> = new Set();
    
    /**
     * Register an application with the framework.
     * Optionally starts the apploader automatically after registration.
     * 
     * @param app - Application definition
     * @param options - Optional configuration for registration and auto-starting
     */
    registerApp(app: AppDefinition, options?: RegisterAppOptions): void {
        if (this.apps.has(app.id)) {
            logger.warn(`App '${app.id}' is already registered. Overwriting.`);
        }
        
        this.apps.set(app.id, app);
        logger.info(`Registered app: ${app.name} (${app.id}) v${app.version}`);
        
        if (options?.defaultAppId) {
            this.defaultAppId = options.defaultAppId;
        }
        
        if (options?.container) {
            this.container = options.container;
        }
        
        if (options?.autoStart && !this.started) {
            this.start();
        }
    }

    registerSystemRequiredExtension(extensionId: string) {
        this.systemRequiredExtensions.add(extensionId);
    }
    
    /**
     * Load an extension from a URL and register it.
     * The module at the URL must export a default function that receives uiContext.
     * The extension will register its contributions when loaded.
     * 
     * @param url - URL to the extension module
     * @returns Promise that resolves when the extension is loaded
     */
    async loadExtensionFromUrl(url: string): Promise<void> {
        logger.info(`Loading extension from URL: ${url}...`);
        
        try {
            const extensionId = `url:${url}`;
            
            if (extensionRegistry.isEnabled(extensionId)) {
                logger.info(`Extension from URL ${url} is already enabled`);
                return;
            }
            
            const extension: Extension = {
                id: extensionId,
                name: `Extension from ${url}`,
                description: `Extension loaded from URL: ${url}`,
                url: url
            };
            
            extensionRegistry.registerExtension(extension);
            logger.info(`Registered extension from URL: ${extensionId}`);
            
            extensionRegistry.enable(extensionId, false);
            
            logger.info(`Successfully enabled extension from URL: ${url}`);
        } catch (error) {
            logger.error(`Failed to load extension from URL ${url}: ${getErrorMessage(error)}`);
            throw error;
        }
    }

    /**
     * Load an application definition from a URL.
     * The module at the URL must export an AppDefinition as the default export.
     * 
     * @param url - URL to the app definition module
     * @returns Promise that resolves to the loaded AppDefinition
     */
    async loadAppFromUrl(url: string): Promise<AppDefinition> {
        logger.info(`Loading app from URL: ${url}...`);
        
        try {
            const module = await import(/* @vite-ignore */ url);
            
            if (!module.default) {
                throw new Error(`Module at ${url} does not have a default export`);
            }
            
            const app = module.default as AppDefinition;
            
            if (!app.id || !app.name || !app.version) {
                throw new Error(`Module at ${url} does not export a valid AppDefinition`);
            }
            
            logger.info(`Successfully loaded app definition from URL: ${app.name} (${app.id})`);
            return app;
        } catch (error) {
            logger.error(`Failed to load app from URL ${url}: ${getErrorMessage(error)}`);
            throw error;
        }
    }

    /**
     * Start the application loader.
     * Checks URL parameters for app=URL, loads that extension or app if found.
     * URL parameter has higher precedence than defaultAppId.
     * Then loads the default app or first registered app.
     * This method is idempotent - calling it multiple times only starts once.
     */
    async start(): Promise<void> {
        if (this.started) {
            logger.debug('AppLoader already started');
            return;
        }
        
        this.started = true;
        logger.info('Starting AppLoader...');
        
        const urlParams = new URLSearchParams(window.location.search);
        const appUrl = urlParams.get('app');
        const appIdFromUrl = urlParams.get('appId');
        const appIdFromPath = extractAppIdFromPath();
        const appsBeforeExtension = this.apps.size;
        
        let appIdFromAppUrl: string | undefined;
        if (appUrl) {
            appIdFromAppUrl = extractLastPathSegment(appUrl);
            if (appIdFromAppUrl) {
                logger.info(`Extracted app ID from URL path: ${appIdFromAppUrl}`);
            }
        }
        
        if (appIdFromPath) {
            logger.info(`Extracted app ID from current page path: ${appIdFromPath}`);
        }
        
        if (appUrl) {
            try {
                logger.info(`URL parameter 'app' found: ${appUrl}, attempting to load extension or app`);
                
                try {
                    await this.loadExtensionFromUrl(appUrl);
                    logger.info(`Successfully loaded extension from URL: ${appUrl}`);
                } catch (extensionError) {
                    logger.info(`Failed to load as extension, trying as app definition: ${getErrorMessage(extensionError)}`);
                    
                    try {
                        const app = await this.loadAppFromUrl(appUrl);
                        this.registerApp(app);
                        await this.loadApp(app.id, this.container);
                        logger.info(`Successfully loaded app from URL: ${appUrl}`);
                        return;
                    } catch (appError) {
                        logger.error(`Failed to load from URL as both extension and app: ${getErrorMessage(appError)}`);
                        throw appError;
                    }
                }
            } catch (error) {
                logger.error(`Failed to load from URL parameter, falling back to default app: ${getErrorMessage(error)}`);
            }
        }
        
        const appToLoad = this.selectAppToLoad({
            appIdFromUrl,
            appIdFromPath,
            appIdFromAppUrl,
            appsBeforeExtension
        });
        
        if (!appToLoad) {
            throw new Error('No apps registered');
        }
        
        await this.loadApp(appToLoad, this.container);
    }

    /**
     * Load and initialize an application.
     * 
     * @param appId - Application identifier (must be already registered)
     * @param container - Optional DOM element to render into (if provided, auto-renders after loading)
     * @returns Promise that resolves when app is initialized and rendered
     */
    async loadApp(appId: string, container?: HTMLElement): Promise<void> {
        const app = this.apps.get(appId);
        if (!app) {
            throw new Error(`App '${appId}' not found. Make sure it's registered.`);
        }
        
        logger.info(`Loading app: ${app.name}...`);
        
        // Dispose current app if exists
        if (this.currentApp) {
            logger.info(`Disposing current app: ${this.currentApp.name}`);
            
            // Call app's dispose method
            if (this.currentApp.dispose) {
                await this.currentApp.dispose();
            }
            
            // Disable current app's extensions (but not system-required ones)
            if (this.currentApp.extensions && this.currentApp.extensions.length > 0) {
                logger.info(`Disabling ${this.currentApp.extensions.length} extensions...`);
                this.currentApp.extensions.forEach(extId => {
                    extensionRegistry.disable(extId);
                });
            }
        }
        
        // Register app contributions
        if (app.contributions) {
            logger.info('Registering app contributions...');
            
            // Register UI contributions (tabs, toolbars, commands, etc.)
            if (app.contributions.ui) {
                app.contributions.ui.forEach(contribution => {
                    const target = contribution.target;
                    if (target) {
                        contributionRegistry.registerContribution(target, contribution);
                    }
                });
                logger.info(`Registered ${app.contributions.ui.length} UI contributions`);
            }
            
            // Register app-specific extensions
            if (app.contributions.extensions) {
                app.contributions.extensions.forEach(extension => {
                    extensionRegistry.registerExtension(extension);
                });
                logger.info(`Registered ${app.contributions.extensions.length} app extensions`);
            }
        }
        
        const extensionsSet = new Set<string>(app.extensions || []);
        this.systemRequiredExtensions.forEach(extId => extensionsSet.add(extId));
        app.extensions = Array.from(extensionsSet);
        
        // Enable new app's extensions (after contributions are registered)
        if (app.extensions.length > 0) {
            logger.info(`Enabling ${app.extensions.length} extensions...`);
            app.extensions.forEach(extId => {
                extensionRegistry.enable(extId);
            });
        }
        
        // Initialize new app
        if (app.initialize) {
            logger.info(`Initializing ${app.name}...`);
            await app.initialize();
        }
        
        this.currentApp = app;
        logger.info(`App ${app.name} loaded successfully`);
        
        // Update document metadata from app
        this.updateDocumentMetadata(app);
        
        // Auto-render if container provided
        if (container) {
            this.renderApp(container);
        }
    }
    
    /**
     * Updates document title and favicon from app metadata
     */
    private updateDocumentMetadata(app: AppDefinition): void {
        // Set document title
        document.title = app.name;
        
        // Set favicon if provided in metadata
        if (app.metadata?.favicon) {
            const faviconPath = app.metadata.favicon;
            let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.type = 'image/svg+xml';
            link.href = faviconPath;
        }
    }
    
    /**
     * Render the current application to the DOM.
     * 
     * @param container - DOM element to render into
     */
    renderApp(container: HTMLElement): void {
        if (!this.currentApp) {
            throw new Error('No app loaded. Call loadApp() first.');
        }
        
        const template = this.currentApp.render 
            ? this.currentApp.render() 
            : html`<k-standard-app></k-standard-app>`;
        
        render(template, container);
        logger.info(`Rendered ${this.currentApp.name}`);
    }
    
    /**
     * Get the currently loaded application.
     */
    getCurrentApp(): AppDefinition | undefined {
        return this.currentApp;
    }
    
    /**
     * Get all registered applications.
     */
    getRegisteredApps(): AppDefinition[] {
        return Array.from(this.apps.values());
    }
    
    /**
     * Select which app to load based on priority:
     * 1. appId URL parameter (?appId=...)
     * 2. App ID from current page URL path (/geospace)
     * 3. App ID extracted from app URL parameter (?app=...)
     * 4. App registered by extension
     * 5. Default app ID
     * 6. First registered app
     */
    private selectAppToLoad(options: {
        appIdFromUrl: string | null;
        appIdFromPath: string | undefined;
        appIdFromAppUrl: string | undefined;
        appsBeforeExtension: number;
    }): string | undefined {
        const { appIdFromUrl, appIdFromPath, appIdFromAppUrl, appsBeforeExtension } = options;
        
        if (appIdFromUrl) {
            if (this.apps.has(appIdFromUrl)) {
                logger.info(`Loading app specified by URL parameter 'appId': ${appIdFromUrl}`);
                return appIdFromUrl;
            }
            logger.warn(`App ID '${appIdFromUrl}' from URL parameter not found`);
        }
        
        if (appIdFromPath) {
            if (this.apps.has(appIdFromPath)) {
                logger.info(`Loading app from URL path: ${appIdFromPath}`);
                return appIdFromPath;
            }
            logger.debug(`App ID '${appIdFromPath}' from URL path not found, continuing search`);
        }
        
        if (appIdFromAppUrl) {
            if (this.apps.has(appIdFromAppUrl)) {
                logger.info(`Loading app using ID extracted from app URL path: ${appIdFromAppUrl}`);
                return appIdFromAppUrl;
            }
        }
        
        if (this.apps.size > appsBeforeExtension) {
            const newlyRegisteredApps = Array.from(this.apps.values()).slice(appsBeforeExtension);
            if (newlyRegisteredApps.length > 0) {
                const app = newlyRegisteredApps[0];
                logger.info(`Loading app registered by extension: ${app.name} (${app.id})`);
                return app.id;
            }
        }
        
        if (this.defaultAppId) {
            if (this.apps.has(this.defaultAppId)) {
                return this.defaultAppId;
            }
            logger.warn(`Default app '${this.defaultAppId}' not found`);
        }
        
        const registeredApps = this.getRegisteredApps();
        if (registeredApps.length > 0) {
            const app = registeredApps[0];
            logger.info(`Loading first registered app: ${app.name} (${app.id})`);
            return app.id;
        }
        
        return undefined;
    }
}

export const appLoaderService = new AppLoaderService();
rootContext.put("appLoaderService", appLoaderService);

