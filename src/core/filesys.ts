import {persistenceService} from "./persistenceservice.ts";
import {publish} from "./events.ts";
import {rootContext} from "./di.ts";

export let WORKSPACE_METADATA_DIR = ".geospace";

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

        if ('move' in this.fileHandle && typeof (this.fileHandle as any).move === 'function') {
            await (this.fileHandle as any).move(newName);
        } else {
            const oldPath = this.getWorkspacePath();
            const pathParts = oldPath.split('/');
            pathParts[pathParts.length - 1] = newName;
            const newPath = pathParts.join('/');
            
            await this.copyTo(newPath);
            await this.delete();
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
            this.files = {};

            // @ts-ignore
            for await (const entry of this.dirHandle.values()) {
                const isFile = (<FileSystemHandle>entry).kind === "file"
                const child = isFile ?
                    new FileSysFileHandleResource(entry, this)
                    : new FileSysDirHandleResource(entry, this);
                this.files[child.getName()] = child;
            }
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
                    if (!currentResource.files) {
                        await currentResource.listChildren()
                    }
                    if (!currentResource.files) {
                        return null
                    }
                    const next = currentResource.files[segment]
                    if (!next && options?.create) {
                        workspaceChanged = true;
                        // not last segment in path, must be directory, create a new directory and continue
                        if (i < segments.length - 1) {
                            const newDirHandle = await currentResource.dirHandle.getDirectoryHandle(segment, {create: true})
                            const nextResource = new FileSysDirHandleResource(newDirHandle)
                            currentResource.files[segment] = nextResource
                            currentResource = nextResource
                        } else {
                            // last segment must be a file, create it and return
                            const newFileHandle = await currentResource.dirHandle.getFileHandle(segment, {create: true})
                            const nextResource = new FileSysFileHandleResource(newFileHandle, currentResource)
                            currentResource.files[segment] = nextResource
                            return nextResource
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
            return this.getParent()?.delete(this.getName())
        }
        return this.dirHandle.removeEntry(name, {
            recursive: recursive
        }).then(() => {
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

        if ('move' in this.dirHandle && typeof (this.dirHandle as any).move === 'function') {
            await (this.dirHandle as any).move(newName);
        } else {
            throw new Error('Directory rename not supported in this browser. Please use a browser with File System Access API move() support.');
        }
        
        await parent.listChildren(true);
        publish(TOPIC_WORKSPACE_CHANGED, this.getWorkspace());
    }
}

export class WorkspaceService {
    private workspace?: Promise<Directory | undefined>;


    constructor() {
        this.workspace = persistenceService.getObject("workspace").then(async obj => {
            return obj ? new FileSysDirHandleResource(obj, undefined) : undefined
        })
        this.workspace.then(workspace => {
            publish(TOPIC_WORKSPACE_CONNECTED, workspace)
        })
    }

    async connectWorkspace(input: FileSystemDirectoryHandle): Promise<Directory> {
        await persistenceService.persistObject("workspace", input);
        this.workspace = new Promise<Directory>(resolve => {
            const workspace = new FileSysDirHandleResource(input)
            resolve(workspace)
        }).finally(() => {
            this.workspace?.then(workspace => {
                publish(TOPIC_WORKSPACE_CONNECTED, workspace);
            })
        })
        // @ts-ignore
        return this.workspace
    }

    public async getWorkspace(): Promise<Directory | undefined> {
        if (this.workspace) {
            return await this.workspace;
        }
        throw new Error('No workspace connected.');
    }

    public isConnected() {
        return !!this.workspace
    }
}

export const workspaceService = new WorkspaceService();
rootContext.put("workspaceService", workspaceService)