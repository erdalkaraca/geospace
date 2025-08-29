import logger from "./logging.ts";
import {CommandContribution, Contribution, contributionRegistry} from "./contributionregistry.ts";

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

export class CommandRegistry {
    private parentCommandRegistry?: CommandRegistry;
    private commands: Commands = {};
    private handlers: Map<string, Handler[]> = new Map();

    constructor(parentCommandRegistry?: CommandRegistry) {
        this.parentCommandRegistry = parentCommandRegistry;
    }

    registerHandler(commandId: string, handler: Handler) {
        if (!this.handlers.has(commandId)) {
            this.handlers.set(commandId, []);
        }
        (this.handlers.get(commandId) as any[]).push(handler);
    }

    getHandler(commandId: string): Handler[] | undefined {
        return this.handlers.get(commandId) || this.parentCommandRegistry?.getHandler(commandId)
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
        throw new Error(`Registered handlers could not match execution of command: ${commandId}`);
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
        logger.info(`Command registered: ${command.id}`);
    }

    hasCommand(commandId: string): boolean {
        return commandId in this.commands || !!this.parentCommandRegistry?.hasCommand(commandId);
    }

    listCommands(): Commands {
        return {...this.parentCommandRegistry?.listCommands(), ...this.commands};
    }

    getCommand(commandId: string): Command {
        return <Command>this.commands[commandId] || this.parentCommandRegistry?.getCommand(commandId);
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

export interface RegisterOptions {
    command: Command,
    handler?: Handler,
    contribution?: Contribution
}

export const registerAll = (options: RegisterOptions) => {
    commandRegistry.registerAll(options);
}