import {appSettings, TOPIC_SETTINGS_CHANGED} from "./settingsservice";
import {publish, subscribe} from "./events";
import {toastError, toastInfo} from "./toast";
import {taskService} from "./taskservice";
import {rootContext, uiContext} from "./di";
import logger from "./logger";

export const TOPIC_EXTENSIONS_CHANGED = "events/extensionsregistry/extensionsConfigChanged"
const KEY_EXTENSIONS_CONFIG = "extensions"
const KEY_EXTERNAL_EXTENSIONS = "extensions.external"

/**
 * Extension definition for the extension registry.
 * 
 * @example
 * ```typescript
 * extensionRegistry.registerExtension({
 *     id: "system.myextension",
 *     name: "My Extension",
 *     description: "An example extension",
 *     loader: () => import("./my-extension.ts"),
 *     icon: "puzzle-piece",
 *     dependencies: ["system.dependency1", "system.dependency2"]
 * })
 * ```
 */
import { UILabel } from "./i18n";

export interface Extension {
    /** Unique identifier for the extension (e.g., "system.notebook") */
    id: string;
    
    /** Human-readable name of the extension */
    name: UILabel;
    
    /** Optional description of what the extension does */
    description?: UILabel;
    
    /** Optional URL to load the extension module from */
    url?: string;
    
    /** Function that dynamically imports the extension module */
    loader?: () => any;
    
    /** Optional icon identifier (FontAwesome or custom icon) */
    icon?: string;
    
    /** Whether this extension is marked as experimental */
    experimental?: boolean;
    
    /** Optional extension version */
    version?: string;
    
    /** Optional extension author */
    author?: string;
    
    /** Whether this extension is from an external source (marketplace) */
    external?: boolean;
    
    /**
     * Optional list of extension IDs that must be loaded before this extension.
     * Dependencies are loaded recursively and automatically when this extension is loaded.
     * The system includes circular dependency detection.
     * 
     * @example
     * ```typescript
     * dependencies: ["system.pythonpackagemanager", "system.pyterminal"]
     * ```
     */
    dependencies?: string[];
}

export interface ExtensionSetting {
    id: string;
    enabled: boolean;
}

export type ExtensionsConfig = ExtensionSetting[]

class ExtensionRegistry {
    private extensionsSettings?: ExtensionsConfig;
    private extensions: { [key: string]: Extension } = {}
    private loadedExtensions: Set<string> = new Set()
    private loadingPromises: Map<string, Promise<void>> = new Map()

    constructor() {
        subscribe(TOPIC_SETTINGS_CHANGED, () => {
            this.extensionsSettings = undefined
            this.checkExtensionsConfig().then()
        })

        // Load persisted external extensions first, then load enabled extensions
        this.loadPersistedExternalExtensions().then(() => {
            this.checkExtensionsConfig().then(async () => {
                const loadPromises = this.extensionsSettings
                    ?.filter(setting => this.isEnabled(setting.id))
                    .map(setting => 
                        this.load(setting.id).catch(e => {
                            toastError("Extension could not be loaded: " + e.message)
                        })
                    ) || []
                
                await Promise.all(loadPromises)
            })
        })
    }

    private async loadPersistedExternalExtensions(): Promise<void> {
        try {
            const persisted = await appSettings.get(KEY_EXTERNAL_EXTENSIONS)
            if (persisted && Array.isArray(persisted)) {
                persisted.forEach((ext: Extension) => {
                    this.extensions[ext.id] = ext
                })
                logger.debug(`Loaded ${persisted.length} persisted external extensions`)
            }
        } catch (error) {
            logger.error(`Failed to load persisted external extensions: ${error}`)
        }
    }

    private async savePersistedExternalExtensions(): Promise<void> {
        try {
            const externalExtensions = Object.values(this.extensions).filter(ext => ext.external)
            await appSettings.set(KEY_EXTERNAL_EXTENSIONS, externalExtensions)
        } catch (error) {
            logger.error(`Failed to save persisted external extensions: ${error}`)
        }
    }

    private async checkExtensionsConfig() {
        if (!this.extensionsSettings) {
            this.extensionsSettings = await appSettings.get(KEY_EXTENSIONS_CONFIG)
            if (!this.extensionsSettings) {
                await appSettings.set(KEY_EXTENSIONS_CONFIG, [])
                this.extensionsSettings = await appSettings.get(KEY_EXTENSIONS_CONFIG)
            }
            publish(TOPIC_EXTENSIONS_CHANGED, this.extensionsSettings)
        }
    }


    registerExtension(extension: Extension): void {
        this.extensions[extension.id] = extension;
        
        // Persist external extensions
        if (extension.external) {
            this.savePersistedExternalExtensions().catch(err => {
                logger.error(`Failed to persist external extension: ${err}`)
            })
        }
        
        publish(TOPIC_EXTENSIONS_CHANGED, this.extensionsSettings);
    }

    getExtensions(): Extension[] {
        return Object.values(this.extensions)
    }

    public isEnabled(extensionId: string) {
        this.checkExtensionsConfig()
        return !!this.extensionsSettings?.find((setting) => setting.id === extensionId && setting.enabled)
    }

    public isLoaded(extensionId: string) {
        return this.loadedExtensions.has(extensionId)
    }

    public enable(extensionId: string, informUser: boolean = false) {
        if (this.isEnabled(extensionId)) {
            return
        }
        logger.debug(`Loading extension: ${extensionId}`)
        this.load(extensionId).then(() => {
            this.updateEnablement(extensionId, true, informUser)
        }).catch(_e => {
            logger.error(`Could not load extension: ${extensionId}: ${_e}`)
        })
    }

    /**
     * Loads an extension and all its dependencies.
     * 
     * Features:
     * - Automatically loads all dependencies recursively before loading the extension
     * - Ensures each extension is loaded only once (idempotent)
     * - Dependencies are loaded in the order they are declared
     * - If an extension is already being loaded, waits for that load to complete
     * - Detects circular dependencies in the dependency chain
     * 
     * @param extensionId - The ID of the extension to load
     * @param loadingChain - Internal parameter to track the dependency chain for circular detection
     * @throws Error if the extension is not found or if a circular dependency is detected
     * 
     * @example
     * ```typescript
     * // This will automatically load system.pythonpackagemanager first
     * await extensionRegistry.load('system.notebook')
     * ```
     */
    public async load(extensionId: string, loadingChain: string[] = []): Promise<void> {
        // Already loaded, return immediately
        if (this.loadedExtensions.has(extensionId)) {
            return
        }
        
        // Currently loading by another call chain, wait for that promise to complete
        const existingPromise = this.loadingPromises.get(extensionId)
        if (existingPromise) {
            return existingPromise
        }
        
        // Check for circular dependency
        if (loadingChain.includes(extensionId)) {
            const chain = [...loadingChain, extensionId].join(' → ')
            throw new Error(`Circular dependency detected: ${chain}`)
        }
        
        const extension = this.extensions[extensionId]
        if (!extension) {
            throw new Error("Extension not found: " + extensionId)
        }
        
        // Create and track the loading promise
        const loadingPromise = (async () => {
            try {
                if (extension.dependencies && extension.dependencies.length > 0) {
                    logger.debug(`Loading dependencies for ${extensionId}: ${extension.dependencies.join(', ')}`)
                    const newChain = [...loadingChain, extensionId]
                    for (const depId of extension.dependencies) {
                        await this.load(depId, newChain)
                        // Enable the dependency if it's not already enabled
                        if (!this.isEnabled(depId)) {
                            await this.updateEnablementAsync(depId, true, false)
                            logger.debug(`Auto-enabled dependency: ${depId}`)
                        }
                    }
                }
                
                const module = await taskService.runAsync("Loading extension: " + extension.name, () => {
                    if (extension.loader) {
                        return extension.loader()
                    } else if (extension.url) {
                        return import(extension.url)
                    }
                })

                // Mark as loaded BEFORE executing the module
                this.loadedExtensions.add(extensionId)

                if (module?.default instanceof Function) {
                    logger.debug(`Executing extension function for: ${extensionId}`)
                    try {
                        module?.default(uiContext.getProxy())
                        logger.debug(`Extension function executed successfully: ${extensionId}`)
                    } catch (error) {
                        logger.error(`Error executing extension function for ${extensionId}: ${error}`)
                        throw error
                    }
                } else {
                    logger.warn(`Extension ${extensionId} does not export a default function`)
                }
                
                logger.debug(`Extension loaded: ${extensionId}`)
            } catch (error) {
                // If loading failed, remove from loaded set
                this.loadedExtensions.delete(extensionId)
                throw error
            } finally {
                // Always clean up the promise
                this.loadingPromises.delete(extensionId)
            }
        })()
        
        this.loadingPromises.set(extensionId, loadingPromise)
        return loadingPromise
    }

    public disable(extensionId: string, informUser: boolean = false) {
        if (!this.isEnabled(extensionId)) {
            return
        }
        this.updateEnablement(extensionId, false, informUser)
    }

    private updateEnablement(extensionId: string, enabled: boolean, informUser: boolean) {
        this.checkExtensionsConfig().then(() => {
            const extension = this.extensionsSettings?.find(e => e.id == extensionId)
            if (extension) {
                extension.enabled = enabled
            } else {
                this.extensionsSettings?.push({id: extensionId, enabled: enabled})
            }
            appSettings.set(KEY_EXTENSIONS_CONFIG, this.extensionsSettings).then(() => {
                if (informUser) {
                    const extObj = this.extensions[extensionId]
                    if (enabled) {
                        toastInfo(extObj.name + " enabled.")
                    } else {
                        toastInfo(extObj.name + " disabled " + " - Please restart to take effect")
                    }
                }
                publish(TOPIC_EXTENSIONS_CHANGED, this.extensionsSettings)
            })
        })
    }

    private async updateEnablementAsync(extensionId: string, enabled: boolean, informUser: boolean) {
        await this.checkExtensionsConfig()
        const extension = this.extensionsSettings?.find(e => e.id == extensionId)
        if (extension) {
            extension.enabled = enabled
        } else {
            this.extensionsSettings?.push({id: extensionId, enabled: enabled})
        }
        await appSettings.set(KEY_EXTENSIONS_CONFIG, this.extensionsSettings)
        if (informUser) {
            const extObj = this.extensions[extensionId]
            if (enabled) {
                toastInfo(extObj.name + " enabled.")
            } else {
                toastInfo(extObj.name + " disabled " + " - Please restart to take effect")
            }
        }
        publish(TOPIC_EXTENSIONS_CHANGED, this.extensionsSettings)
    }
}

logger.debug('ExtensionRegistry initializing...');
export const extensionRegistry = new ExtensionRegistry()
rootContext.put("extensionRegistry", extensionRegistry)
logger.debug('ExtensionRegistry initialized');