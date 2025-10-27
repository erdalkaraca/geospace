import {TOOLBAR_MAIN} from "../../core/constants.ts";
import {activePartSignal} from "../../core/appstate.ts";
import {GsMapEditor} from "../geo/gs-map-editor.ts";
import type {CommandRegistry} from "../../core/commandregistry.ts";
import {buildService} from "../build/buildservice.ts";

export default ({commandRegistry}: { commandRegistry: CommandRegistry }) => {
    commandRegistry.registerAll({
        command: {
            "id": "build_map",
            "name": "Build map",
            "description": "Builds a publishable map from a .geospace file",
            "parameters": []
        },
        handler: {
            execute: _context => buildService.buildActiveMap()
        },
        contribution: {
            target: "toolbar:map-editor",
            icon: "hammer",
            label: "Build map",
            disabled: () => {
                return !(activePartSignal.get() instanceof GsMapEditor)
            }
        }
    })
}