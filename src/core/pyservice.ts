import pyoPackageJson from "pyodide/package.json";
import {loadPyodide, PyodideInterface} from "pyodide";
import {Directory, File, FileSysDirHandleResource, TOPIC_WORKSPACE_CHANGED, workspaceService} from "./filesys.ts";
import {parsePipRequirementsFile} from "pip-requirements-js";
import {publish} from "./events.ts";

const defaultGlobals = {
    input: window.prompt
}

// FIXME run in a web worker as creating multiple instances does not guarantee "process isolation" in main thread
export class PyEnv {
    private pyodide?: PyodideInterface;
    private workspaceMountFS?: any;
    private workspace?: Directory;
    private vars: any;

    public async init(workspace: Directory, vars?: any) {
        this.workspace = workspace
        this.vars = vars ?? {}

        const poVersion = pyoPackageJson.version
        this.pyodide = await loadPyodide({
            indexURL: `https://cdn.jsdelivr.net/pyodide/v${poVersion}/full/`
        });
        for (const [key, value] of Object.entries(defaultGlobals)) {
            this.setGlobal(key, value)
        }
        this.pyodide.setStderr({
            batched: s => console.error(s)
        })
        this.pyodide.setStdout({
            batched: s => console.info(s)
        })

        await this.mountWorkspace()
        await this.installDependencies()
    }

    public async runFunction(name: string, args: any) {
        this.checkPy()
        const func = this.pyodide!.globals.get(name)
        func.callKwargs(args)
        func.destroy()
        await this.syncWorkspace()
    }

    public setGlobal(key: string, value: any) {
        this.checkPy()
        this.pyodide!.globals.set(key, value)
    }

    private checkPy() {
        if (!this.pyodide) {
            throw new Error("PyEnv not initialized yet: see init()")
        }
    }

    public async mountWorkspace(mountPoint: string = "/workspace") {
        this.checkPy()
        const directory = await workspaceService.getWorkspace() as FileSysDirHandleResource
        this.workspaceMountFS = await this.pyodide!.mountNativeFS(mountPoint, directory.getHandle());
        this.pyodide!.runPython(`import os, sys; sys.path.append('${mountPoint}'); os.chdir("${mountPoint}");`)
    }

    public async installDependencies() {
        const reqFile = await this.workspace?.getResource("requirements.txt") as File
        if (reqFile) {
            // @ts-ignore
            const reqContents: string = ((await reqFile.getContents()) as string).replaceAll("\r", "")
            const packages = parsePipRequirementsFile(reqContents)
                .filter(p => "name" in p)
                .map(p => p.name)
            await this.loadPackages(packages)
        }
    }

    public async loadPackages(packages: string[]) {
        this.checkPy()
        if (packages.length > 0) {
            await this.pyodide!.loadPackage(packages, {
                checkIntegrity: false
            })
        }
    }

    public async syncWorkspace() {
        this.checkPy()
        if (this.workspaceMountFS) {
            await this.workspaceMountFS.syncfs()
            publish(TOPIC_WORKSPACE_CHANGED, this.workspace)
        }
    }

    public async execCode(code: string) {
        this.checkPy()
        const result = this.pyodide!.runPython(code)
        await this.syncWorkspace()
        return result
    }

    public async execScript(path: string) {
        this.checkPy()
        const moduleName = path.split(".")[0]
        const entryName = path.includes(":") ? path.split(":").reverse()[0] : undefined
        return await this.execModule(moduleName, entryName)
    }

    public async execModule(moduleName: string, entryName?: string) {
        this.checkPy()
        let result;
        const mod = this.pyodide!.pyimport(moduleName)
        entryName = entryName ?? "main"
        // if entry name is not in the package/module, assume user provided pure python code
        // which has already been called when importing the module
        if (entryName in mod) {
            const func = mod[entryName]
            if (!(func instanceof Function)) {
                throw new Error("Module entry point is not a function: " + entryName)
            }
            result = func.callKwargs(this.vars)
        }

        await this.syncWorkspace()
        return result
    }

    public getVersion() {
        this.checkPy()
        return this.pyodide!.version
    }

    close() {
    }
}