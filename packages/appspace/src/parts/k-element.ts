import "toastify-js/src/toastify.css";
import {KWidget} from "../widgets/k-widget";
import {appSettings} from "../core/settingsservice";

export abstract class KElement extends KWidget {
    /**
     * Unique settings key for this element, used for persisting dialog settings.
     * Automatically initialized on first access via getDialogSetting() or setDialogSetting().
     */
    private settingsKey: string | null = null;

    /**
     * Builds a unique DOM tree path for this element.
     * Uses id attribute if available, otherwise builds a path based on tag names and indices.
     * Useful for generating unique settings keys.
     * 
     * @returns A string representing the DOM path, or null if path cannot be determined
     */
    private buildDOMTreePath(): string | null {
        const pathParts: string[] = [];
        let current: HTMLElement | null = this;
        
        while (current && current !== document.body && current !== document.documentElement) {
            const id = current.getAttribute("id");
            if (id) {
                pathParts.unshift(`#${id}`);
                break;
            }
            
            const tagName = current.tagName.toLowerCase();
            const parent: HTMLElement | null = current.parentElement;
            
            if (!parent) {
                break;
            }
            
            const siblings = Array.from(parent.children).filter(
                (child: Element) => child.tagName.toLowerCase() === tagName
            ) as HTMLElement[];
            const index = siblings.indexOf(current);
            
            if (index >= 0) {
                pathParts.unshift(`${tagName}:${index}`);
            } else {
                pathParts.unshift(tagName);
            }
            
            current = parent;
        }
        
        return pathParts.length > 0 ? pathParts.join(" > ") : null;
    }

    /**
     * Initializes the settings key for this element using the element's tag name.
     * Called automatically on first access via getDialogSetting() or setDialogSetting().
     */
    private initializeSettingsKey(): void {
        if (!this.settingsKey) {
            const prefix = this.tagName.toLowerCase();
            const id = this.getAttribute("id");
            if (id) {
                this.settingsKey = `${prefix}:${id}`;
                return;
            }
            
            const path = this.buildDOMTreePath();
            if (path) {
                this.settingsKey = `${prefix}:${path}`;
            }
        }
    }

    /**
     * Gets a dialog setting value for this element.
     * Automatically initializes the settings key on first access if not already set.
     * 
     * @returns The persisted setting value, or undefined if not found
     */
    protected async getDialogSetting(): Promise<any> {
        this.initializeSettingsKey();
        if (!this.settingsKey) {
            return undefined;
        }
        return await appSettings.getDialogSetting(this.settingsKey);
    }

    /**
     * Saves a dialog setting value for this element.
     * Automatically initializes the settings key on first access if not already set.
     * 
     * @param value - The value to persist
     */
    protected async setDialogSetting(value: any): Promise<void> {
        this.initializeSettingsKey();
        if (!this.settingsKey) {
            return;
        }
        await appSettings.setDialogSetting(this.settingsKey, value);
    }
}