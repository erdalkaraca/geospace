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

    private findCommand(toolCall: ToolCall, context: ExecutionContext): Command | null {
        const sanitizedFunctionName = toolCall.function.name;
        const availableCommands = commandRegistry.listCommands(context);
        const commandArray = Object.values(availableCommands) as Command[];
        
        return commandArray.find(cmd => {
            const sanitized = this.sanitizeFunctionName(cmd.id);
            return sanitized === sanitizedFunctionName;
        }) || null;
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
            
            const source = context.source || context.activeEditor || context;
            const execContext = commandRegistry.createExecutionContext(source, sanitizedArgs);
            
            await commandRegistry.execute(commandId, execContext);
            
            const commandName = command?.name || commandId;
            const resultMessage: any = {
                success: true,
                message: `Command "${commandName}" executed successfully`,
                command: commandId
            };
            
            if (sanitizedArgs && typeof sanitizedArgs === 'object' && Object.keys(sanitizedArgs).length > 0) {
                resultMessage.parameters = sanitizedArgs;
            }
            
            return {
                id: toolCall.id,
                result: resultMessage
            };
        } catch (error) {
            return {
                id: toolCall.id,
                result: null,
                error: error instanceof Error ? error.message : String(error)
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

