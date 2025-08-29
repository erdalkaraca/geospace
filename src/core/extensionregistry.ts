import {appSettings, TOPIC_SETTINGS_CHANGED} from "./settingsservice.ts";
import {publish, subscribe} from "./events.ts";
import {toastError, toastInfo} from "./toast.ts";
import {taskService} from "./taskservice.ts";

export const TOPIC_EXTENSIONS_CHANGED = "events/extensionsregistry/extensionsConfigChanged"
const KEY_EXTENSIONS_CONFIG = "extensions"

export interface Extension {
    id: string;
    name: string;
    description?: string;
    url: string;
    icon?: string;
}

export interface ExtensionSetting {
    id: string;
    enabled: boolean;
}

export type ExtensionsConfig = ExtensionSetting[]

class ExtensionRegistry {
    private extensionsSettings?: ExtensionsConfig;
    private extensions: { [key: string]: Extension } = {}

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
        this.checkExtensionsConfig().then()
        return !!this.extensionsSettings?.find((setting) => setting.id === extensionId && setting.enabled)
    }

    public enable(extensionId: string, informUser: boolean = false) {
        if (this.isEnabled(extensionId)) {
            return
        }
        this.load(extensionId).then(() => {
            this.checkExtensionsConfig().then(() => {
                this.extensionsSettings?.push({id: extensionId, enabled: true})
                appSettings.set(KEY_EXTENSIONS_CONFIG, this.extensionsSettings).then(() => {
                    if (informUser) {
                        toastInfo("Extension enabled: " + extensionId)
                    }
                })
            })
        }).catch(_e => {
            toastError("Could not load extension: " + extensionId)
        })
    }

    public async load(extensionId: string) {
        const extension = this.extensions[extensionId]
        if (!extension) {
            throw new Error("Extension not found: " + extensionId)
        }
        return taskService.runAsync("Loading extension: " + extension.name, () => {
            return import(extension.url)
        })
    }

    public disable(extensionId: string, informUser: boolean = false) {
        if (!this.isEnabled(extensionId)) {
            return
        }
        this.checkExtensionsConfig().then(() => {
            this.extensionsSettings?.push({id: extensionId, enabled: false})
            appSettings.set(KEY_EXTENSIONS_CONFIG, this.extensionsSettings).then(() => {
                if (informUser) {
                    toastInfo("Extension disabled: " + extensionId + " - Please restart to take effect")
                }
            })
        })
    }
}

export const extensionRegistry = new ExtensionRegistry()