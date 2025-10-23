import {appSettings, TOPIC_SETTINGS_CHANGED} from "./settingsservice.ts";
import {publish, subscribe} from "./events.ts";
import {toastError, toastInfo} from "./toast.ts";
import {taskService} from "./taskservice.ts";
import {rootContext, uiContext} from "./di.ts";
import logger from "./logger.ts";

export const TOPIC_EXTENSIONS_CHANGED = "events/extensionsregistry/extensionsConfigChanged"
const KEY_EXTENSIONS_CONFIG = "extensions"

export interface Extension {
    id: string;
    name: string;
    description?: string;
    url?: string;
    loader?: () => any;
    icon?: string;
    experimental?: boolean;
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

    constructor() {
        subscribe(TOPIC_SETTINGS_CHANGED, () => {
            this.extensionsSettings = undefined
            this.checkExtensionsConfig().then()
        })

        this.checkExtensionsConfig().then(() => {
            this.extensionsSettings?.forEach(extensionSetting => {
                if (this.isEnabled(extensionSetting.id)) {
                    this.load(extensionSetting.id).catch(e => {
                        toastError("Extension could not be loaded: " + e.message)
                    })
                }
            })
        })
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
            logger.error(`Could not load extension: ${extensionId}`)
        })
    }

    public async load(extensionId: string) {
        if (this.loadedExtensions.has(extensionId)) {
            return
        }
        
        const extension = this.extensions[extensionId]
        if (!extension) {
            throw new Error("Extension not found: " + extensionId)
        }
        
        this.loadedExtensions.add(extensionId)
        
        const module = await taskService.runAsync("Loading extension: " + extension.name, () => {
            if (extension.loader) {
                return extension.loader()
            } else if (extension.url) {
                return import(extension.url)
            }
        })

        if (module?.default instanceof Function) {
            module?.default(uiContext.getProxy())
        }
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
}

logger.debug('ExtensionRegistry initializing...');
export const extensionRegistry = new ExtensionRegistry()
rootContext.put("extensionRegistry", extensionRegistry)
logger.debug('ExtensionRegistry initialized');