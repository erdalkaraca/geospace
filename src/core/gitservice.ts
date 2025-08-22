// GitService: Provides git operations using wasm-git
// https://github.com/petersalomonsen/wasm-git


import { workspaceService } from "./filesys.ts";
import type { WorkspaceService } from "./filesys.ts";

// Custom FS interface for wasm-git that delegates to workspaceService

class WorkspaceFS {
  private workspaceService: WorkspaceService;
  constructor(workspaceServiceInstance: WorkspaceService) {
    this.workspaceService = workspaceServiceInstance;
  }

  async readFile({ dir, filepath }: { dir: string, filepath: string }) {
    const ws = await this.workspaceService.getWorkspace();
    const file = await ws?.getResource(filepath);
    if (!file) throw new Error(`File not found: ${filepath}`);
    // @ts-ignore
    return await file.getContents();
  }

  async writeFile({ dir, filepath, content }: { dir: string, filepath: string, content: any }) {
    const ws = await this.workspaceService.getWorkspace();
    // @ts-ignore
    let file = await ws?.getResource(filepath, { create: true });
    if (!file) throw new Error(`File not found: ${filepath}`);
    // @ts-ignore
    await file.saveContents(content);
  }

  async readdir({ dir }: { dir: string }) {
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

class GitService {
  private lg: any;
  private fs: any;
  private repoPath: string = "/";

  async init() {
    if (!this.lg) {
      // Dynamically import lg2_async.js from node_modules
      // @ts-ignore
      const lgMod = await import('wasm-git/lg2_async.js');
      this.lg = await lgMod.default();
      this.fs = new WorkspaceFS(workspaceService);
    }
  }

  async clone(remoteUrl: string) {
    await this.init();
    return this.lg.clone({
      fs: this.fs,
      dir: this.repoPath,
      url: remoteUrl,
      singleBranch: true,
      depth: 1
    });
  }

  async pull() {
    await this.init();
    return this.lg.pull({
      fs: this.fs,
      dir: this.repoPath
    });
  }

  async commitAndPush(message: string, author: { name: string, email: string }) {
    await this.init();
    await this.lg.add({ fs: this.fs, dir: this.repoPath, filepath: "." });
    await this.lg.commit({
      fs: this.fs,
      dir: this.repoPath,
      message,
      author
    });
    return this.lg.push({
      fs: this.fs,
      dir: this.repoPath
    });
  }
}

const gitService = new GitService();
export default gitService;
