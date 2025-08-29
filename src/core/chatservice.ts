import {toastError} from "./toast.ts";
import {CommandRegistry, commandRegistry as globalCommandRegistry, ExecutionContext} from "./commandregistry.ts";
import {persistenceService} from "./persistenceservice.ts";
import "./globalcommands.ts"
import {appSettings, TOPIC_SETTINGS_CHANGED} from "./settingsservice.ts";
import AI_CONFIG_TEMPLATE from "../assets/settings.json"
import {publish, subscribe} from "./events.ts";

export const TOPIC_AICONFIG_CHANGED = "events/chatservice/aiConfigChanged"
const KEY_AI_CONFIG = "aiConfig";

export interface AIConfig {
    defaultProvider?: string;
    providers: ChatProvider[];
}

export interface ChatMessage {
    role: string;
    content: string;
}

export interface ModelParams {
    [key: string]: any
}

export interface ChatProvider {
    name: string
    model: string
    apiKey: string
    chatApiEndpoint: string,
    parameters?: ModelParams
}

export interface ChatContext {
    chatConfig?: ChatProvider;
    history: ChatMessage[]
    sysPrompt?: string | (() => string),
    additionalContext?: () => string,
    userHelp: string
    label: string,
    icon?: string,
    messageArrived?: (message: ChatMessage) => void
}

export interface ChatContextProvider {
    chatContext: ChatContext;
}

export const defaultChatContext: ChatContext = {
    history: [],
    userHelp: "What is your goal?",
    label: "App",
    icon: "question"
}

export interface HandlePromptOptions {
    chatContext?: ChatContext,
    chatConfig?: ChatProvider,
    commandRegistry?: CommandRegistry,
}

export const ID_COMMANDS_HISTORY = "gs-maps-commands-history"

export interface FetcherParams {
    model: string;
    stream: boolean;
    messages: ChatMessage[],
    chatConfig: ChatProvider
}

export interface Fetcher {
    name: string,
    canHandle: (chatProvider: ChatProvider) => boolean,
    completionApi: (fetcherParams: FetcherParams) => Promise<ChatMessage>;
}

const onlineFetcher = {
    name: "openai-api",
    canHandle: (_chatProvider: ChatProvider) => true,
    completionApi: async (fetcherParams: FetcherParams) => {
        const response = await fetch(fetcherParams.chatConfig.chatApiEndpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${fetcherParams.chatConfig.apiKey}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                model: fetcherParams.model,
                stream: fetcherParams.stream,
                messages: fetcherParams.messages,
                ...fetcherParams.chatConfig.parameters
            })
        });
        return response.json().then(json => {
            const content = json["choices"][0]["message"]["content"];
            return {
                role: "assistant",
                content: content
            } as ChatMessage;
        });
    }
}

export class ChatService {
    private commandsHistory: Promise<string[]>;
    private aiConfig?: AIConfig;
    private fetchers: Fetcher[] = [];

    constructor() {
        this.commandsHistory = persistenceService.getObject(ID_COMMANDS_HISTORY).then(h => h || [])
        subscribe(TOPIC_SETTINGS_CHANGED, () => {
            this.aiConfig = undefined
            this.checkAIConfig().then()
        })
    }

    public registerFetcher(fetcher: Fetcher) {
        this.fetchers.push(fetcher)
    }

    private async updateCommandsHistory(prompt: string) {
        const history = await this.getCommandsHistory()
        if (prompt in history) {
            return
        }
        history.unshift(prompt);
        await persistenceService.persistObject(ID_COMMANDS_HISTORY, history)
    }

    async runCommand(prompt: string, commandRegistry?: CommandRegistry) {
        const currentCommandRegistry = commandRegistry || globalCommandRegistry
        await this.updateCommandsHistory(prompt)
        const splits = prompt.trim().split(/\s+/)
        if (splits.length > 0) {
            const commandId = splits.shift()!
            const command = currentCommandRegistry.getCommand(commandId)
            if (!command) {
                toastError("Command not found: " + commandId)
            }
            const params = {}
            splits.forEach((c, i) => {
                // @ts-ignore
                params[command.parameters[i].name] = c
            })
            const context: ExecutionContext = {
                source: this,
                params: params
            }
            currentCommandRegistry.execute(commandId, context)
        }
    }

    private async checkAIConfig() {
        if (!this.aiConfig) {
            this.aiConfig = await appSettings.get(KEY_AI_CONFIG)
            if (!this.aiConfig) {
                await appSettings.set(KEY_AI_CONFIG, AI_CONFIG_TEMPLATE.aiConfig)
                this.aiConfig = await appSettings.get(KEY_AI_CONFIG)
            }
            publish(TOPIC_AICONFIG_CHANGED, this.aiConfig)
        }
    }

    public async getDefaultProvider() {
        await this.checkAIConfig()
        const providers = await this.getProviders()
        if (this.aiConfig?.defaultProvider) {
            const config = providers.find(p => p.name === this.aiConfig?.defaultProvider)
            if (config) {
                return config
            }
        }
        return providers[0]
    }

    public async setDefaultProvider(defaultProviderName: string) {
        await this.checkAIConfig()
        this.aiConfig!.defaultProvider = defaultProviderName
        await appSettings.set(KEY_AI_CONFIG, this.aiConfig)
        return this.getDefaultProvider()
    }

    public async getProviders() {
        await this.checkAIConfig()
        return this.aiConfig?.providers || []
    }

    public createMessage(prompt: string): ChatMessage {
        return {
            role: "user",
            content: prompt
        }
    }

    async handleUserPrompt(message: ChatMessage, options?: HandlePromptOptions) {
        const prompt = message.content
        if (prompt && prompt.trim().startsWith("/")) {
            const currentCommandRegistry = options?.commandRegistry || globalCommandRegistry
            await this.runCommand(prompt.substring(1), currentCommandRegistry);
            return
        }
        const currentContext = options?.chatContext || defaultChatContext
        const currentChatConfig = options?.chatConfig || await this.getDefaultProvider()

        // make a copy rather than destructing the history array as we modify the last message
        const messages = structuredClone(currentContext.history)
        if (currentContext.sysPrompt) {
            let content = currentContext.sysPrompt instanceof Function ? currentContext.sysPrompt() : currentContext.sysPrompt
            const sysPrompt = {role: "system", content: content}
            messages.unshift(sysPrompt)
        }

        if (currentContext.additionalContext) {
            messages[messages.length - 1].content += `\n\n${currentContext.additionalContext()}`
        }

        const requestBodyObj = {
            model: currentChatConfig.model,
            stream: false,
            messages: messages,
            chatConfig: currentChatConfig
        } as FetcherParams

        const fetcher = this.fetchers.find((f) => f.canHandle(currentChatConfig)) || onlineFetcher

        return fetcher.completionApi(requestBodyObj).then(message => {
            currentContext.history.push(message)
            if (currentContext.messageArrived) {
                currentContext.messageArrived(message)
            }
            return message
        })
    }

    getCommandsHistory(): Promise<string[]> {
        return this.commandsHistory
    }
}

export const chatService = new ChatService();