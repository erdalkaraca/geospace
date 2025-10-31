import {GsMapEditor} from "../geo/gs-map-editor";
import {buildService} from "../build/buildservice";
import {
    activePartSignal,
    type CommandRegistry
} from "@kispace/appspace/api";

export default ({commandRegistry}: { commandRegistry: CommandRegistry }) => {
    commandRegistry.registerAll({
        command: {
            "id": "build_map",
            "name": "Build map",
            "description": "Builds a publishable map from a .geospace file",
            "parameters": []
        },
        handler: {
            execute: (_context: any) => buildService.buildActiveMap()
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