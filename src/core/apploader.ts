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

import {render, TemplateResult} from "lit";
import {rootContext} from "./di.ts";
import {createLogger} from "./logger.ts";
import {extensionRegistry, Extension} from "./extensionregistry.ts";
import {contributionRegistry, Contribution} from "./contributionregistry.ts";

const logger = createLogger('AppLoader');

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
     * Returns the root component template for the application.
     * This is what gets rendered to the DOM.
     */
    render: () => TemplateResult;
    
    /**
     * Optional cleanup function.
     * Called when the app is being unloaded, before extensions are disabled.
     */
    dispose?: () => void | Promise<void>;
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
    
    /**
     * Register an application with the framework.
     * 
     * @param app - Application definition
     */
    registerApp(app: AppDefinition): void {
        if (this.apps.has(app.id)) {
            logger.warn(`App '${app.id}' is already registered. Overwriting.`);
        }
        
        this.apps.set(app.id, app);
        logger.info(`Registered app: ${app.name} (${app.id}) v${app.version}`);
    }
    
    /**
     * Load and initialize an application.
     * 
     * @param appId - Application identifier
     * @returns Promise that resolves when app is initialized
     */
    async loadApp(appId: string): Promise<void> {
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
            
            // Disable current app's extensions
            if (this.currentApp.extensions) {
                logger.info(`Disabling ${this.currentApp.extensions.length} extensions...`);
                this.currentApp.extensions.forEach(extId => {
                    extensionRegistry.disable(extId);
                });
            }
        }
        
        // Enable new app's extensions
        if (app.extensions) {
            logger.info(`Enabling ${app.extensions.length} extensions...`);
            app.extensions.forEach(extId => {
                extensionRegistry.enable(extId);
            });
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
        
        // Initialize new app
        if (app.initialize) {
            logger.info(`Initializing ${app.name}...`);
            await app.initialize();
        }
        
        this.currentApp = app;
        logger.info(`App ${app.name} loaded successfully`);
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
        
        render(this.currentApp.render(), container);
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
}

export const appLoaderService = new AppLoaderService();
rootContext.put("appLoaderService", appLoaderService);

