import { 
    File, 
    Directory, 
    Resource, 
    GetResourceOptions, 
    FileContentsOptions, 
    FileContentType,
    TOPIC_WORKSPACE_CHANGED 
} from '../../core/filesys';
import { WebDAVClient, WebDAVResource } from './webdav-client';
import { publish } from '../../core/events';

export class WebDAVFileResource extends File {
    private client: WebDAVClient;
    private resource: WebDAVResource;
    private parent: Directory;

    constructor(client: WebDAVClient, resource: WebDAVResource, parent: Directory) {
        super();
        this.client = client;
        this.resource = resource;
        this.parent = parent;
    }

    getName(): string {
        return this.resource.displayName;
    }

    getParent(): Directory {
        return this.parent;
    }

    async getContents(options?: FileContentsOptions): Promise<any> {
        const buffer = await this.client.getFile(this.resource.href);
        
        if (!options || options?.contentType === FileContentType.TEXT) {
            const decoder = new TextDecoder();
            return decoder.decode(buffer);
        }

        if (options?.blob) {
            return new Blob([buffer]);
        }

        if (options?.uri) {
            const blob = new Blob([buffer]);
            return URL.createObjectURL(blob);
        }

        return buffer;
    }

    async saveContents(contents: any, _options?: FileContentsOptions): Promise<void> {
        await this.client.putFile(this.resource.href, contents);
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }

    async size(): Promise<number | null> {
        return this.resource.contentLength ?? null;
    }

    async delete(): Promise<void> {
        await this.client.deleteResource(this.resource.href);
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }

    async copyTo(targetPath: string): Promise<void> {
        const targetFile = await this.getWorkspace().getResource(targetPath, { create: true }) as File;
        if (!targetFile) {
            throw new Error(`Failed to create target file: ${targetPath}`);
        }
        const contents = await this.getContents({ blob: true });
        await targetFile.saveContents(contents);
    }

    async rename(newName: string): Promise<void> {
        if (this.getName() === newName) {
            return;
        }

        const pathParts = this.resource.href.split('/');
        pathParts[pathParts.length - 1] = newName;
        const newPath = pathParts.join('/');
        
        await this.client.moveResource(this.resource.href, newPath);
        this.resource.href = newPath;
        this.resource.displayName = newName;
        
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }
}

export class WebDAVDirectoryResource extends Directory {
    private client: WebDAVClient;
    private resource: WebDAVResource;
    private parent?: Directory;
    private children?: Map<string, Resource>;

    constructor(client: WebDAVClient, resource: WebDAVResource, parent?: Directory) {
        super();
        this.client = client;
        this.resource = resource;
        this.parent = parent;
    }

    getName(): string {
        return this.resource.displayName;
    }

    getParent(): Directory | undefined {
        return this.parent;
    }

    async listChildren(forceRefresh: boolean = false): Promise<Resource[]> {
        if (forceRefresh || !this.children) {
            const resources = await this.client.propfind(this.resource.href, 1);
            this.children = new Map();

            // Skip first entry (it's the directory itself)
            for (let i = 1; i < resources.length; i++) {
                const res = resources[i];
                const child = res.isDirectory
                    ? new WebDAVDirectoryResource(this.client, res, this)
                    : new WebDAVFileResource(this.client, res, this);
                this.children.set(res.displayName, child);
            }
        }

        return Array.from(this.children.values());
    }

    async getResource(path: string, options?: GetResourceOptions): Promise<Resource | null> {
        if (!path) {
            throw new Error("No path provided");
        }

        const segments = path.split("/").filter(s => s.trim());
        let currentResource: Resource = this;

        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];
            
            if (currentResource instanceof WebDAVDirectoryResource) {
                await currentResource.listChildren();
                
                if (!currentResource.children) {
                    return null;
                }

                let next = currentResource.children.get(segment);

                if (!next && options?.create) {
                    const fullPath = this.buildPath(currentResource.resource.href, segment);
                    
                    // If not the last segment, create directory
                    if (i < segments.length - 1) {
                        await this.client.createDirectory(fullPath);
                        const newResource: WebDAVResource = {
                            href: fullPath,
                            displayName: segment,
                            isDirectory: true
                        };
                        next = new WebDAVDirectoryResource(this.client, newResource, currentResource);
                        currentResource.children.set(segment, next);
                    } else {
                        // Last segment - create file
                        await this.client.putFile(fullPath, '');
                        const newResource: WebDAVResource = {
                            href: fullPath,
                            displayName: segment,
                            isDirectory: false,
                            contentLength: 0
                        };
                        next = new WebDAVFileResource(this.client, newResource, currentResource);
                        currentResource.children.set(segment, next);
                        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
                        return next;
                    }
                }

                if (!next) {
                    return null;
                }

                currentResource = next;
            }
        }

        return currentResource;
    }

    async delete(name?: string, _recursive: boolean = true): Promise<void> {
        if (!name) {
            return this.getParent()?.delete(this.getName());
        }

        const fullPath = this.buildPath(this.resource.href, name);
        await this.client.deleteResource(fullPath);
        this.children?.delete(name);
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }

    async copyTo(targetPath: string): Promise<void> {
        for (const resource of await this.listChildren()) {
            const targetResourceName = [targetPath, resource.getName()].join("/");
            await resource.copyTo(targetResourceName);
        }
    }

    async rename(newName: string): Promise<void> {
        if (this.getName() === newName) {
            return;
        }

        const pathParts = this.resource.href.split('/').filter(Boolean);
        pathParts[pathParts.length - 1] = newName;
        const newPath = '/' + pathParts.join('/') + '/';
        
        await this.client.moveResource(this.resource.href, newPath);
        this.resource.href = newPath;
        this.resource.displayName = newName;
        
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }

    touch(): void {
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }

    private buildPath(basePath: string, segment: string): string {
        return basePath.endsWith('/') 
            ? basePath + segment 
            : basePath + '/' + segment;
    }

    getClient(): WebDAVClient {
        return this.client;
    }
}

