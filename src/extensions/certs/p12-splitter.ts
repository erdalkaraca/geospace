import pyScript from "./p12splitter.py?raw"
import {PyEnv} from "../../core/pyservice";

export default ({toastError, toastInfo, commandRegistry, taskService, workspaceService}: any) => {
    commandRegistry.registerAll({
        command: {
            id: "p12split",
            name: ".p12 file splitter",
            description: "Splits/separates a .p12 file into private/public and additional .pem files; " +
                "WARNING: keep the private pem file secret as it will be unprotected after extraction",
            parameters: [
                {
                    name: "p12_path",
                    description: "Path of the .p12 file to split", required: true
                },
                {
                    name: "password",
                    description: "The password of the .p12 file, will prompt for input if not specified, use empty string for no password",
                    required: false
                },
                {
                    name: "output_path",
                    description: "Directory path of the files to write to, if not provided, will be parent directory of p12_path",
                    required: false
                },
            ]
        },
        handler: {
            execute: async ({params: {p12_path, password, output_path}}: any) => {
                const workspace = await workspaceService.getWorkspace()
                if (!workspace) {
                    toastError("No Workspace selected!")
                }
                await taskService.runAsync("Splitting .p12 certificate file", async () => {
                    const pyEnv = new PyEnv()
                    await pyEnv.init(workspace!)
                    await pyEnv.loadPackages(["cryptography"])
                    await pyEnv.execCode(pyScript)
                    await pyEnv.runFunction("p12splitter", {
                        p12_path,
                        password: password === '""' ? undefined : password,
                        output_path: output_path === '""' ? "" : output_path
                    })
                    toastInfo(".p12 file successfully splitted")
                })
            }
        }
    });
}