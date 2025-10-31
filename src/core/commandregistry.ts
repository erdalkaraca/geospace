import logger from "./logger";
import {CommandContribution, Contribution, contributionRegistry} from "./contributionregistry";
import {rootContext} from "./di";
import {activePartSignal, activeEditorSignal} from "./appstate";

export interface Parameter {
    name: string;
    description: string;
    type?: string;
    required: boolean;
    allowedValues?: string[];
}

export interface Variable {
    name: string;
    description: string;
    type?: string;
}

export interface LLMOptions {
    prompt?: string;
    model?: string;
}

export class Command {
    id: string;
    name: string;
    description: string;
    icon?: string;
    keyBinding?: string;
    parameters?: Parameter[];
    output?: Variable[];
    llm?: LLMOptions;

    constructor(id: string, name: string, description: string, parameters?: Parameter[], output?: Variable[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.parameters = parameters || [];
        this.output = output || [];
    }
}

export interface ExecutionContext {
    [key: string]: any;

    source?: any;

    params?: ExecuteParams;
}

export interface ExecuteParams {
    [key: string]: any;
}

export interface Handler {
    canExecute?: (context: ExecutionContext) => boolean;
    execute: (context: ExecutionContext) => any;
}

export interface Commands {
    [commandId: string]: Command
}

export class CommandStack {
    //private stack: any[] = []

    public async execute(commandId: any, context: ExecutionContext) {
        return commandRegistry.execute(commandId, context);
    }

    public async undo() {
        // TODO undo last command on stack
    }

    public async redo() {
        // TODO redo last command on stack
    }
}

export class CommandRegistry {
    private commands: Commands = {};
    private handlers: Map<string, Handler[]> = new Map();

    registerHandler(commandId: string, handler: Handler) {
        if (!this.handlers.has(commandId)) {
            this.handlers.set(commandId, []);
        }
        (this.handlers.get(commandId) as any[]).push(handler);
    }

    getHandler(commandId: string): Handler[] | undefined {
        return this.handlers.get(commandId)
    }

    /**
     * Creates an ExecutionContext with the current application state
     * 
     * @param source The source component/widget executing the command
     * @param params Optional command parameters
     * @returns ExecutionContext with captured application state
     */
    createExecutionContext(source?: any, params?: ExecuteParams): ExecutionContext {
        const context: ExecutionContext = {
            source: source,
            params: params || {},
            activePart: activePartSignal.get(),
            activeEditor: activeEditorSignal.get()
        };
        
        return context;
    }

    execute(commandId: string, context: ExecutionContext = {}) {
        const handlers = this.getHandler(commandId);

        if (!handlers) {
            throw new Error(`No handlers registered for command: ${commandId}`);
        }

        for (const handler of handlers) {
            if (handler.canExecute === undefined || handler.canExecute(context)) {
                return handler.execute(context);
            }
        }
        logger.error(`No handler found to execute command: ${commandId}`);
    }

    createAndRegisterCommand(id: string, name: string, description: string, parameters: Parameter[], handler?: Handler) {
        const command = new Command(id, name, description, parameters);
        this.registerCommand(command)
        if (handler) {
            this.registerHandler(id, handler)
        }
    }

    registerCommand(command: Command): void {
        this.commands[command.id] = command;
        logger.debug(`Command registered: ${command.id}`);
    }

    hasCommand(commandId: string): boolean {
        return commandId in this.commands
    }

    listCommands(context?: ExecutionContext): Commands {
        if (context) {
            // filter by commands which have at least one executable handler
            return Object.values(this.commands).filter(command => {
                const handlers = commandRegistry.getHandler(command.id) || []
                return handlers.some(handler => handler.canExecute === undefined || handler.canExecute(context))
            }).reduce((acc: any, command) => {
                acc[command.id] = command
                return acc
            }, {})
        }
        return this.commands
    }

    getCommand(commandId: string): Command {
        return <Command>this.commands[commandId]
    }

    registerAll(options: RegisterOptions) {
        const commandId = options.command.id
        this.registerCommand(options.command)
        if (options.handler) {
            this.registerHandler(commandId, options.handler)
        }
        if (options.contribution && options.contribution.target) {
            contributionRegistry.registerContribution(options.contribution.target, {
                command: commandId,
                ...options.contribution
            } as CommandContribution)
        }
    }
}

export const commandRegistry = new CommandRegistry();
rootContext.put("commandRegistry", commandRegistry);

export interface RegisterOptions {
    command: Command,
    handler?: Handler,
    contribution?: Contribution
}

export const registerAll = (options: RegisterOptions) => {
    commandRegistry.registerAll(options);
}