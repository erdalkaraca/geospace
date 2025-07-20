import {File, TOPIC_WORKSPACE_CONNECTED, WORKSPACE_METADATA_DIR, workspaceService} from "./filesys.ts";
import {publish, subscribe} from "./events.ts";

export const SETTINGS_FILE_PATH = `${WORKSPACE_METADATA_DIR}/settings.json`

export interface AppSettings {
    [key: string]: any;
}

export const TOPIC_SETTINGS_CHANGED = "events/settings/changed"

class SettingsService {

    private appSettings?: AppSettings;

    constructor() {
        subscribe(TOPIC_WORKSPACE_CONNECTED, () => {
            this.appSettings = undefined
            this.checkSettings().then()
        })
    }

    private async getSettingsFile(create: boolean = true) {
        const workspace = await workspaceService.getWorkspace()
        if (workspace) {
            const file = await workspace.getResource(SETTINGS_FILE_PATH, {
                create: create
            })
            if (file instanceof File) {
                return file
            }
        }
        throw new Error("Settings file not found: " + SETTINGS_FILE_PATH)
    }

    private async checkSettings() {
        if (!this.appSettings) {
            const file = await this.getSettingsFile()
            const contents = await file.getContents()
            try {
                this.appSettings = JSON.parse(contents)
            } catch (error) {
                this.appSettings = {}
            } finally {
                publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
            }
        }
    }

    public async get(key: string) {
        await this.checkSettings()
        return this.appSettings![key]
    }

    public async set(key: string, value: any) {
        await this.checkSettings()
        this.appSettings![key] = value

        const file = await this.getSettingsFile()
        await file.saveContents(JSON.stringify(this.appSettings!, null, 2))
    }
}

export const appSettings = new SettingsService();