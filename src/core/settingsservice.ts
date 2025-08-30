import {publish} from "./events.ts";
import {persistenceService} from "./persistenceservice.ts";
import {WORKSPACE_METADATA_DIR} from "./filesys.ts";

export const SETTINGS_FILE_PATH = `${WORKSPACE_METADATA_DIR}/settings.json`

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
    }

    public async getAll() {
        await this.checkSettings()
        return this.appSettings!;
    }

    public async setAll(settings: AppSettings) {
        this.appSettings = settings
        await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
    }
}

export const appSettings = new SettingsService();