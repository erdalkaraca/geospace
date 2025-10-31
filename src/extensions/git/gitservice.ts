// GitService: Provides git operations using wasm-git
// https://github.com/petersalomonsen/wasm-git


// @ts-ignore
import * as lgMod from "wasm-git/lg2_async.js";

import wasmUrl from 'wasm-git/lg2_async.wasm?url'
import type {WorkspaceService} from "../../core/filesys";
import {workspaceService} from "../../core/filesys";

// Custom FS interface for wasm-git that delegates to workspaceService

class WorkspaceFS {
    private workspaceService: WorkspaceService;

    constructor(workspaceServiceInstance: WorkspaceService) {
        this.workspaceService = workspaceServiceInstance;
    }

    async readFile({filepath}: { filepath: string }) {
        const ws = await this.workspaceService.getWorkspace();
        const file = await ws?.getResource(filepath);
        if (!file) throw new Error(`File not found: ${filepath}`);
        // @ts-ignore
        return await file.getContents();
    }

    async writeFile({filepath, content}: { filepath: string, content: any }) {
        const ws = await this.workspaceService.getWorkspace();
        // @ts-ignore
        let file = await ws?.getResource(filepath, {create: true});
        if (!file) throw new Error(`File not found: ${filepath}`);
        // @ts-ignore
        await file.saveContents(content);
    }

    async readdir({dir}: { dir: string }) {
        const ws = await this.workspaceService.getWorkspace();
        // @ts-ignore
        const dirRes = await ws?.getResource(dir);
        if (!dirRes) throw new Error(`Directory not found: ${dir}`);
        // @ts-ignore
        const children = await dirRes.listChildren();
        return children.map((c: any) => c.getName());
    }


// Add more methods as needed for wasm-git compatibility
}

class GitCommands {
    private gitService: GitService;
    private repoPath: string;

    constructor(gitService: GitService, repoPath: string) {
        this.gitService = gitService
        this.repoPath = repoPath;
    }


    async clone(remoteUrl: string) {
        await this.gitService.init();
        await this.gitService.lg.callMain(['clone', remoteUrl, this.repoPath + "test"]);
        console.log("ok")
    }

    async pull() {
        await this.gitService.init();
        // TODO PULL
    }

    async commitAndPush(_message: string, _author: { name: string, email: string }) {
        await this.gitService.init();
        // TODO add, commit, push
    }
}

class GitService {
    lg: any;

    withPath(repoPath: string = "/") {
        return new GitCommands(this, repoPath)
    }

    async init() {
        if (!this.lg) {
            this.lg = await lgMod.default({
                locateFile(path: string) {
                    if (path.endsWith("lg2_async.wasm")) {
                        return wasmUrl
                    }
                    return path;
                }
            });
            this.lg.FS = new WorkspaceFS(workspaceService);
        }
    }
}

const gitService = new GitService()
export default gitService;
