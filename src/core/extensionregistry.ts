export interface Extension {
    id: string;
    name: string;
    description?: string;
    url: string;
    icon?: string;
}

class ExtensionRegistry {
    private extensions: { [key: string]: Extension } = {}

    registerExtension(extension: Extension): void {
        this.extensions[extension.id] = extension;
    }

    getExtensions(): Extension[] {
        return Object.values(this.extensions)
    }
}

export const extensionRegistry = new ExtensionRegistry()