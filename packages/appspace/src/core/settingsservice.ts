import {publish} from "./events";
import {persistenceService} from "./persistenceservice";
import {rootContext} from "./di";

export const SETTINGS_FILE_PATH = ".geospace/settings.json"

export const DIALOG_SETTINGS_KEY = "dialogSettings"

export interface AppSettings {
    [key: string]: any;
}

export const TOPIC_SETTINGS_CHANGED = "events/settings/changed"

class SettingsService {

    private appSettings?: AppSettings;

    private async checkSettings() {
        if (!this.appSettings) {
            this.appSettings = await persistenceService.getObject(SETTINGS_FILE_PATH)
            if (!this.appSettings) {
                this.appSettings = {}
                await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
            }
            publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
        }
    }

    public async get(key: string) {
        await this.checkSettings()
        return this.appSettings![key]
    }

    public async set(key: string, value: any) {
        await this.checkSettings()
        this.appSettings![key] = value
        await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
        publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
    }

    public async getAll() {
        await this.checkSettings()
        return this.appSettings!;
    }

    public async setAll(settings: AppSettings) {
        this.appSettings = settings
        await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
        publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
    }

    public async getDialogSetting(key: string) {
        await this.checkSettings()
        const dialogSettings = this.appSettings![DIALOG_SETTINGS_KEY] || {}
        return dialogSettings[key]
    }

    public async setDialogSetting(key: string, value: any) {
        await this.checkSettings()
        const dialogSettings = this.appSettings![DIALOG_SETTINGS_KEY] || {}
        dialogSettings[key] = value
        this.appSettings![DIALOG_SETTINGS_KEY] = dialogSettings
        await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
        publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
    }
}

export const appSettings = new SettingsService();
rootContext.put("appSettings", appSettings)