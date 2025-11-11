import {persistenceService} from "./persistenceservice";
import {publish} from "./events";
import {rootContext} from "./di";


export const TOPIC_WORKSPACE_CHANGED = "events/filesys/workspaceChanged"
export const TOPIC_WORKSPACE_CONNECTED = "events/filesys/workspaceConnected"

export abstract class Resource {
    public state: { [p: string]: any } = {};

    public abstract getName(): string;

    public abstract getParent(): Directory | undefined;

    public abstract delete(name?: string, recursive?: boolean): Promise<void>;

    public abstract copyTo(targetPath: string): Promise<void>;

    public abstract rename(newName: string): Promise<void>;

    public getWorkspacePath(): string {
        const paths: string[] = []
        let current: Resource | undefined = this
        while (current) {
            paths.push(current.getName())
            current = current.getParent()
        }
        paths.reverse()
        // the first path is the workspace itself, remove it as the path is always realtive to the workspace
        paths.shift()
        return paths.join("/");
    }

    public getWorkspace(): Directory {
        let current: Resource | undefined = this
        while (current) {
            const parent: any = current.getParent()
            if (parent) {
                current = parent
            } else {
                break
            }
        }
        return current as Directory
    }
}

export const resourceComparator = (c1: Resource, c2: Resource) => {
    if (c1 instanceof Directory && c2 instanceof File) {
        return -1
    }
    if (c1 instanceof File && c2 instanceof Directory) {
        return 1
    }
    return c1.getName().localeCompare(c2.getName())
}

export enum FileContentType {
    TEXT, BINARY
}

export enum FileContentEncoding {
    BASE64
}

export interface FileContentsOptions {
    contentType?: FileContentType;
    encoding?: FileContentEncoding;
    uri?: boolean;
    blob?: boolean;
}

export interface GetResourceOptions {
    create?: boolean
}

export abstract class File extends Resource {
    public abstract getContents(options?: FileContentsOptions): Promise<any>;

    public abstract saveContents(contents: any, options?: FileContentsOptions): Promise<void>;

    public abstract size(): Promise<number | null>;
}

export abstract class Directory extends Resource {
    public abstract listChildren(forceRefresh: boolean): Promise<Resource[]>;

    public abstract getResource(path: string, options?: GetResourceOptions): Promise<Resource | null>;

    public abstract touch(): void;
}

export class StringFile extends File {
    private contents: string;
    private name: string;

    constructor(contents: string, name: string) {
        super();
        this.contents = contents
        this.name = name
    }

    async getContents(_options?: FileContentsOptions): Promise<any> {
        return this.contents
    }

    async saveContents(contents: any, _options?: FileContentsOptions): Promise<void> {
        this.contents = contents
    }

    async size(): Promise<number | null> {
        return this.contents.length || null;
    }

    async copyTo(_targetPath: string): Promise<void> {
        throw Error(`Not supported`);
    }

    delete(_name?: string, _recursive?: boolean): Promise<void> {
        throw Error(`Not supported`);
    }

    async rename(_newName: string): Promise<void> {
        throw Error(`Not supported`);
    }

    getName(): string {
        return this.name;
    }

    getParent(): Directory | undefined {
        return undefined;
    }
}

export class FileSysFileHandleResource extends File {
    private fileHandle: FileSystemFileHandle;
    private parent: Directory;

    constructor(fileHandle: FileSystemFileHandle, parent: Directory) {
        super();
        this.fileHandle = fileHandle;
        this.parent = parent;
    }

    getName(): string {
        return this.fileHandle.name;
    }

    getParent(): Directory {
        return this.parent;
    }

    async delete() {
        return this.getParent().delete(this.getName());
    }

    async getContents(options?: FileContentsOptions): Promise<any> {
        const file = await this.fileHandle.getFile();

        if (!options || options?.contentType == FileContentType.TEXT) {
            return await file.text()
        }

        if (options?.encoding == FileContentEncoding.BASE64 || options?.uri) {
            return URL.createObjectURL(file)
        }

        if (options?.blob) {
            return file
        }

        return file.stream()
    }

    async size(): Promise<number | null> {
        try {
            const file = await this.fileHandle.getFile();
            return file.size;
        } catch {
            return null;
        }
    }

    async saveContents(contents: any, _options?: FileContentsOptions) {
        const writable = await this.fileHandle.createWritable()
        
        // Check if contents is a ReadableStream (for streaming large files)
        if (contents && typeof contents.pipeTo === 'function') {
            await contents.pipeTo(writable)
        } else {
            // Traditional approach for blobs, strings, etc.
            const writer = writable.getWriter()
            try {
                await writer.write(contents)
            } finally {
                await writer.close()
            }
        }
    }

    async copyTo(targetPath: string): Promise<void> {
        const contents = await this.getContents({blob: true})
        const targetFile = await this.getWorkspace().getResource(targetPath, {create: true}) as File
        await targetFile.saveContents(contents)
    }

    async rename(newName: string): Promise<void> {
        const parent = this.getParent() as FileSysDirHandleResource;
        if (!parent) {
            throw new Error('Cannot rename root resource');
        }

        if (this.getName() === newName) {
            return;
        }

        if (!('move' in this.fileHandle) || typeof (this.fileHandle as any).move !== 'function') {
            throw new Error('File rename not supported in this browser. Please use a browser with File System Access API move() support.');
        }

        try {
            await (this.fileHandle as any).move(newName);
        } catch (error: any) {
            if (error.name === 'NotAllowedError' || 
                error.message?.includes('not allowed') ||
                error.message?.includes('user agent')) {
                throw new Error('File rename failed: The operation took too long and user activation expired. Please try again.');
            }
            throw error;
        }
        
        await parent.listChildren(true);
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }
}

export interface ResourceMap {
    [key: string]: Resource;
}

export class FileSysDirHandleResource extends Directory {
    private dirHandle: FileSystemDirectoryHandle;
    private files?: ResourceMap;
    private parent?: Directory;
    private loadingPromise?: Promise<Resource[]>;

    constructor(dirHandle: FileSystemDirectoryHandle, parent?: Directory) {
        super();
        this.dirHandle = dirHandle;
        this.parent = parent;
    }

    getHandle() {
        return this.dirHandle
    }

    getParent(): Directory | undefined {
        return this.parent;
    }

    getName(): string {
        return this.dirHandle.name;
    }

    async listChildren(forceRefresh: boolean = false): Promise<Resource[]> {
        if (forceRefresh || !this.files) {
            if (this.loadingPromise) {
                return this.loadingPromise;
            }

            this.loadingPromise = (async () => {
                try {
                    const files: ResourceMap = {};

                    try {
                        // @ts-ignore
                        for await (const entry of this.dirHandle.values()) {
                            const isFile = (<FileSystemHandle>entry).kind === "file"
                            const child = isFile ?
                                new FileSysFileHandleResource(entry, this)
                                : new FileSysDirHandleResource(entry, this);
                            files[child.getName()] = child;
                        }
                    } catch (error: any) {
                        if (error.name === 'NotFoundError') {
                            this.files = {};
                            return [];
                        }
                        throw error;
                    }
                    
                    this.files = files;
                    return Object.values(this.files);
                } finally {
                    this.loadingPromise = undefined;
                }
            })();

            return this.loadingPromise;
        }
        return Object.values(this.files);
    }

    async getResource(path: string, options?: GetResourceOptions): Promise<Resource | null> {
        if (!path) {
            throw new Error("No path provided");
        }
        const segments = path.split("/")
        let currentResource: Resource = this
        let workspaceChanged = false;
        try {
            for (let i = 0; i < segments.length; i++) {
                let segment = segments[i]
                if (segment) {
                    segment = segment.trim()
                }
                if (!segment) {
                    break
                }
                if (currentResource instanceof FileSysDirHandleResource) {
                    await currentResource.listChildren()
                    if (!currentResource.files) {
                        return null
                    }
                    const next = currentResource.files[segment]
                    if (!next) {
                        if (options?.create) {
                            workspaceChanged = true;
                            if (i < segments.length - 1) {
                                try {
                                    const newDirHandle = await currentResource.dirHandle.getDirectoryHandle(segment, {create: true})
                                    const nextResource = new FileSysDirHandleResource(newDirHandle, currentResource)
                                    currentResource.files[segment] = nextResource
                                    currentResource = nextResource
                                    if (currentResource instanceof FileSysDirHandleResource) {
                                        await currentResource.listChildren()
                                    }
                                    continue
                                } catch (error: any) {
                                    if (error.name === 'NotFoundError') {
                                        throw new Error(`Directory not found or not accessible: ${segments.slice(0, i + 1).join('/')}`)
                                    }
                                    throw error
                                }
                            } else {
                                try {
                                    const newFileHandle = await currentResource.dirHandle.getFileHandle(segment, {create: true})
                                    const nextResource = new FileSysFileHandleResource(newFileHandle, currentResource)
                                    currentResource.files[segment] = nextResource
                                    return nextResource
                                } catch (error: any) {
                                    if (error.name === 'NotFoundError') {
                                        throw new Error(`File not found or not accessible: ${segments.join('/')}`)
                                    }
                                    throw error
                                }
                            }
                        } else {
                            return null
                        }
                    } else {
                        currentResource = next
                    }
                }
            }
        } finally {
            if (workspaceChanged) {
                publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
            }
        }
        return currentResource;
    }

    public touch() {
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }

    async delete(name?: string, recursive: boolean = true) {
        if (!name) {
            const parent = this.getParent()
            if (parent instanceof FileSysDirHandleResource) {
                await parent.listChildren()
                if (parent.files) {
                    delete parent.files[this.getName()]
                }
            }
            this.files = undefined
            this.loadingPromise = undefined
            return parent?.delete(this.getName())
        }
        return this.dirHandle.removeEntry(name, {
            recursive: recursive
        }).then(async () => {
            if (this.files) {
                delete this.files[name]
            }
            publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
        })
    }

    async copyTo(targetPath: string) {
        for (const resource of (await this.listChildren())) {
            const targetResourceName = [targetPath, resource.getName()].join("/")
            await resource.copyTo(targetResourceName)
        }
    }

    async rename(newName: string): Promise<void> {
        const parent = this.getParent() as FileSysDirHandleResource;
        if (!parent) {
            throw new Error('Cannot rename workspace root');
        }

        if (this.getName() === newName) {
            return;
        }

        if (!('move' in this.dirHandle) || typeof (this.dirHandle as any).move !== 'function') {
            throw new Error('Directory rename not supported in this browser. Please use a browser with File System Access API move() support.');
        }

        try {
            await (this.dirHandle as any).move(newName);
        } catch (error: any) {
            if (error.name === 'NotAllowedError' || 
                error.message?.includes('not allowed') ||
                error.message?.includes('user agent')) {
                throw new Error('Directory rename failed: The operation took too long and user activation expired. Please try again.');
            }
            throw error;
        }
        
        await parent.listChildren(true);
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }
}

/**
 * Interface for workspace contributions
 * 
 * Allows extensions to register custom workspace implementations
 */
export interface WorkspaceContribution {
    /**
     * Unique identifier for this workspace type (e.g., 'filesystem', 'webdav')
     */
    type: string;

    /**
     * Display name for this workspace type
     */
    name: string;

    /**
     * Check if this contribution can handle the given connection input
     */
    canHandle(input: any): boolean;

    /**
     * Create a Directory from the given connection input
     */
    connect(input: any): Promise<Directory>;

    /**
     * Restore a workspace from persisted data
     */
    restore?(data: any): Promise<Directory | undefined>;

    /**
     * Prepare data for persistence
     */
    persist?(workspace: Directory): Promise<any>;
}

interface PersistedWorkspaceData {
    type: string;
    data: any;
}

export class WorkspaceService {
    private workspace?: Promise<Directory | undefined>;
    private currentType?: string;
    private contributions: Map<string, WorkspaceContribution> = new Map();

    constructor() {
        this.workspace = this.loadPersistedWorkspace();
        this.workspace.then(workspace => {
            if (workspace) {
                publish(TOPIC_WORKSPACE_CONNECTED, workspace);
            }
        });
    }

    /**
     * Register a workspace contribution
     */
    registerContribution(contribution: WorkspaceContribution): void {
        this.contributions.set(contribution.type, contribution);
        console.log(`Workspace contribution registered: ${contribution.name} (${contribution.type})`);
    }

    /**
     * Get all registered workspace contributions
     */
    getContributions(): WorkspaceContribution[] {
        return Array.from(this.contributions.values());
    }

    private async loadPersistedWorkspace(): Promise<Directory | undefined> {
        const persistedData = await persistenceService.getObject("workspace_data") as PersistedWorkspaceData | null;
        
        if (!persistedData) {
            return undefined;
        }

        const contribution = this.contributions.get(persistedData.type);
        if (!contribution) {
            console.warn(`No contribution found for workspace type: ${persistedData.type}`);
            return undefined;
        }

        try {
            if (contribution.restore) {
                const workspace = await contribution.restore(persistedData.data);
                if (workspace) {
                    this.currentType = persistedData.type;
                }
                return workspace;
            }
        } catch (error) {
            console.error(`Failed to restore workspace of type ${persistedData.type}:`, error);
        }

        return undefined;
    }

    async connectWorkspace(input: any): Promise<Directory> {
        // Find a contribution that can handle this input
        const contribution = Array.from(this.contributions.values()).find(c => c.canHandle(input));
        
        if (!contribution) {
            throw new Error('No workspace contribution can handle this input');
        }

        // Connect using the contribution
        const workspace = await contribution.connect(input);
        
        // Persist the workspace data
        const persistData = contribution.persist ? await contribution.persist(workspace) : input;
        const workspaceData: PersistedWorkspaceData = {
            type: contribution.type,
            data: persistData
        };
        await persistenceService.persistObject("workspace_data", workspaceData);

        // Update current workspace
        this.currentType = contribution.type;
        this.workspace = Promise.resolve(workspace);
        publish(TOPIC_WORKSPACE_CONNECTED, workspace);

        return workspace;
    }

    public async getWorkspace(): Promise<Directory | undefined> {
        if (!this.workspace) {
            throw new Error('No workspace connected.');
        }
        return await this.workspace;
    }

    public isConnected(): boolean {
        return !!this.workspace;
    }

    public getWorkspaceType(): string | undefined {
        return this.currentType;
    }

    public async disconnectWorkspace(): Promise<void> {
        this.workspace = undefined;
        this.currentType = undefined;
        await persistenceService.persistObject("workspace_data", null);
        await persistenceService.persistObject("workspace", null); // Clean up legacy
    }
}

export const workspaceService = new WorkspaceService();
rootContext.put("workspaceService", workspaceService);

// Register default filesystem contribution
workspaceService.registerContribution({
    type: 'filesystem',
    name: 'Local File System',
    
    canHandle(input: any): boolean {
        return input && 'kind' in input && input.kind === 'directory';
    },
    
    async connect(input: FileSystemDirectoryHandle): Promise<Directory> {
        return new FileSysDirHandleResource(input);
    },
    
    async restore(data: any): Promise<Directory | undefined> {
        if (data && 'kind' in data && data.kind === 'directory') {
            return new FileSysDirHandleResource(data, undefined);
        }
        return undefined;
    },
    
    async persist(workspace: Directory): Promise<any> {
        if (workspace instanceof FileSysDirHandleResource) {
            return workspace.getHandle();
        }
        return null;
    }
});