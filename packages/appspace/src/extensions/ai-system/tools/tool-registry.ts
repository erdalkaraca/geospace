import type { Command, ExecutionContext } from "../../../core/commandregistry";
import { commandRegistry } from "../../../core/commandregistry";
import type { ToolDefinition } from "../core/types";

export class ToolRegistry {
    private sanitizeFunctionName(name: string): string {
        return name
            .replace(/[^a-zA-Z0-9_-]/g, '_')
            .replace(/^[^a-zA-Z]/, 'cmd_$&')
            .replace(/_+/g, '_')
            .replace(/^_|_$/g, '');
    }

    commandToTool(command: Command, context: ExecutionContext): ToolDefinition {
        const properties: Record<string, {
            type: string;
            description: string;
            enum?: string[];
        }> = {};
        const required: string[] = [];
        
        command.parameters?.forEach(param => {
            const sanitizedParamName = this.sanitizeFunctionName(param.name);
            properties[sanitizedParamName] = {
                type: param.type || "string",
                description: param.description,
                ...(param.allowedValues && { enum: param.allowedValues })
            };
            if (param.required === true) {
                required.push(sanitizedParamName);
            }
        });
        
        const sanitizedFunctionName = this.sanitizeFunctionName(command.id);
        
        const toolDef: ToolDefinition = {
            type: "function",
            function: {
                name: sanitizedFunctionName,
                description: command.description || command.name,
                parameters: {
                    type: "object",
                    properties,
                    required
                }
            }
        };
        
        return toolDef;
    }

    getAvailableTools(
        context: ExecutionContext,
        commandFilter?: (command: Command, context: ExecutionContext) => boolean
    ): ToolDefinition[] {
        // list all commands without context as tools might modify the state of the application when executed
        // this increases token usage but allows for more precise tool selection and execution
        const availableCommands = commandRegistry.listCommands();
        let commandsArray = Object.values(availableCommands) as Command[];
        
        if (commandFilter) {
            commandsArray = commandsArray.filter((cmd: Command) => 
                commandFilter(cmd, context)
            );
        }
        
        return commandsArray.map((cmd: Command) => this.commandToTool(cmd, context));
    }
}

