import {registerAll} from "../../core/commandregistry.ts";
import {TOOLBAR_MAIN} from "../../core/constants.ts";
import {buildService} from "./buildservice.ts";
import {activePartSignal} from "../../core/appstate.ts";
import {GsMapEditor} from "../geo/gs-map-editor.ts";
import {toastError, toastInfo} from "../../core/toast.ts";
import {File} from "../../core/filesys.ts";
import {loadEnvs} from "../geo/utils.ts";
import {taskService} from "../../core/taskservice.ts";

registerAll({
    command: {
        "id": "build_map",
        "name": "Build map",
        "description": "Builds a publishable map from a .geospace file",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            const gsMapEditor = activePartSignal.get() as GsMapEditor
            if (gsMapEditor.isDirty()) {
                await gsMapEditor.save()
                toastInfo("Map saved automatically to run build.")
            }
            const file = gsMapEditor.input.data as File
            const gsMap = JSON.parse(await file.getContents())
            const env = await loadEnvs(".env", "envs/.env", "env", "envs/env",
                "default.env", "envs/default.env", "prod.env", "envs/prod.env")
            env["BUILD_TIME"] = new Date()
            taskService.runAsync("Building map", () => buildService.build({
                title: file.getName(),
                gsMap: gsMap,
                env: env
            }))
                .then(() => {
                    toastInfo("🚀 Map files copied to 'dist' folder in your workspace!")
                }).catch(err => {
                toastError(`💥 Map could not be built: ${err}`)
            })
        }
    },
    contribution: {
        target: TOOLBAR_MAIN,
        icon: "hammer",
        label: "Build map",
        disabled: () => {
            return !(activePartSignal.get() instanceof GsMapEditor)
        }
    }
})