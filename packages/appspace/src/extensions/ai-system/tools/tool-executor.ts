import type { Command, ExecutionContext } from "../../../core/commandregistry";
import { commandRegistry } from "../../../core/commandregistry";
import type { ToolCall, ToolResult } from "../core/types";
import { ToolCallAccumulator } from "./tool-call-accumulator";

export class ToolExecutor {
    private sanitizeFunctionName(name: string): string {
        return name
            .replace(/[^a-zA-Z0-9_-]/g, '_')
            .replace(/^[^a-zA-Z]/, 'cmd_$&')
            .replace(/_+/g, '_')
            .replace(/^_|_$/g, '');
    }

    findCommand(toolCall: ToolCall, context: ExecutionContext): Command | null {
        const sanitizedFunctionName = toolCall.function.name;
        
        // First try direct lookup (in case command ID matches sanitized name)
        const directCommand = commandRegistry.getCommand(sanitizedFunctionName);
        if (directCommand) {
            return directCommand;
        }
        
        // If not found, search through all commands to find one whose sanitized ID matches
        const allCommands = commandRegistry.listCommands();
        for (const [commandId, command] of Object.entries(allCommands)) {
            const sanitizedId = this.sanitizeFunctionName(commandId);
            if (sanitizedId === sanitizedFunctionName) {
                return command;
            }
        }
        
        return null;
    }

    private parseArguments(argsStr: string): Record<string, any> {
        if (!argsStr || argsStr.trim() === "" || argsStr === "{}") {
            return {};
        }
        
        try {
            const parsed = JSON.parse(argsStr);
            return parsed && typeof parsed === 'object' ? parsed : {};
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : String(e);
            console.error(`[ToolExecutor] Failed to parse arguments: ${argsStr} - ${errorMsg}`);
            return {};
        }
    }

    private sanitizeArguments(
        args: Record<string, any>,
        command: Command | null
    ): Record<string, any> {
        if (!command || !command.parameters || !args || typeof args !== 'object') {
            return args || {};
        }

        const sanitizedArgs: Record<string, any> = {};
        command.parameters.forEach(param => {
            const sanitizedParamName = this.sanitizeFunctionName(param.name);
            if (sanitizedParamName in args) {
                sanitizedArgs[param.name] = args[sanitizedParamName];
            }
        });

        return sanitizedArgs;
    }

    async executeToolCall(toolCall: ToolCall, context: ExecutionContext): Promise<ToolResult> {
        try {
            const command = this.findCommand(toolCall, context);
            const commandId = command?.id || toolCall.function.name;
            
            const argsStr = toolCall.function.arguments || "{}";
            const args = this.parseArguments(argsStr);
            const sanitizedArgs = this.sanitizeArguments(args, command);
            
            const freshContext = commandRegistry.createExecutionContext(sanitizedArgs);
            const execContext: ExecutionContext = {
                ...context,
                ...freshContext,
                params: sanitizedArgs
            };
            
            let commandResult = await commandRegistry.execute(commandId, execContext);
            
            const commandName = command?.name || commandId;
            const resultMessage: any = {
                success: true,
                message: `Command "${commandName}" executed successfully`,
                command: commandId
            };
            
            if (sanitizedArgs && typeof sanitizedArgs === 'object' && Object.keys(sanitizedArgs).length > 0) {
                resultMessage.parameters = sanitizedArgs;
            }
            
            if (!!commandResult) {
                let resolvedResult = commandResult;
                if (resolvedResult instanceof Promise) {
                    resolvedResult = await resolvedResult;
                }
                resultMessage.result = resolvedResult;
                
                if (command?.output && command.output.length > 0) {
                    const outputDescriptions = command.output.map(v => `${v.name}: ${v.description || v.type || 'value'}`).join(', ');
                    resultMessage.output = outputDescriptions;
                }
            }
            
            return {
                id: toolCall.id,
                result: resultMessage
            };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            let command: Command | null = null;
            try {
                command = this.findCommand(toolCall, context);
            } catch {
                command = null;
            }
            const commandName = command?.name || toolCall.function.name;
            
            let detailedError = errorMessage;
            
            if (errorMessage.includes('No handler found') || errorMessage.includes('No handlers registered')) {
                detailedError = `Command "${commandName}" cannot be executed. ${errorMessage}. This usually means the command is not available in the current context (e.g., a map editor may not be open or active).`;
            } else if (errorMessage.includes('not available') || errorMessage.includes('GsMapEditor')) {
                detailedError = `Command "${commandName}" cannot be executed: ${errorMessage}. Please ensure the required editor or component is open and active.`;
            }
            
            return {
                id: toolCall.id,
                result: null,
                error: detailedError
            };
        }
    }

    async executeToolCalls(
        toolCalls: ToolCall[],
        context: ExecutionContext
    ): Promise<ToolResult[]> {
        const results: ToolResult[] = [];
        for (const toolCall of toolCalls) {
            const result = await this.executeToolCall(toolCall, context);
            results.push(result);
        }
        return results;
    }

    createToolCallAccumulator(): ToolCallAccumulator {
        return new ToolCallAccumulator();
    }

    createToolCallSignature(toolCall: ToolCall): string {
        const argsStr = toolCall.function.arguments || "{}";
        let args: any = {};
        try {
            const parsed = JSON.parse(argsStr);
            args = parsed && typeof parsed === 'object' ? parsed : {};
        } catch (e) {
            args = {};
        }
        const sortedArgs = args && typeof args === 'object' ? Object.keys(args).sort().reduce((acc, key) => {
            acc[key] = args[key];
            return acc;
        }, {} as any) : {};
        return `${toolCall.function.name}:${JSON.stringify(sortedArgs)}`;
    }
}

