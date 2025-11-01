import {appSettings, TOPIC_SETTINGS_CHANGED} from "./settingsservice";
import {publish, subscribe} from "./events";
import {DependencyContext, rootContext} from "./di";
import {Contribution, contributionRegistry} from "./contributionregistry";

export const TOPIC_AICONFIG_CHANGED = "events/chatservice/aiConfigChanged"
const KEY_AI_CONFIG = "aiConfig";
const AI_CONFIG_TEMPLATE = {
    "defaultProvider": "ollama",
    "providers": []
}

export const CID_PROMPTS = "chatservice.prompts"
export const CID_CHAT_PROVIDERS = "chatservice.chatProviders"

export interface AIConfig {
    defaultProvider?: string;
    providers: ChatProvider[];
}

export interface ChatMessageAction {
    icon: any;
    label: string;
    action: () => Promise<void>;
}

export interface ChatMessage {
    role: string;
    content: string;
    actions?: ChatMessageAction[]
}

export interface ModelParams {
    [key: string]: any
}

export interface ChatProvider {
    name: string
    model: string
    apiKey: string
    chatApiEndpoint: string,
    ocrApiEndpoint?: string
    parameters?: ModelParams
}

export interface ChatContext {
    history: ChatMessage[]
}

export interface HandlePromptOptions {
    chatContext: ChatContext,
    chatConfig?: ChatProvider,
    callContext: DependencyContext
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

export interface SysPromptContribution extends Contribution {
    description: string,
    role: string;
    sysPrompt: string | (() => string);
    canHandle?: (context: any) => boolean;
    promptDecorator?: (context: any) => Promise<string>;
    messageDecorator?: (context: any) => void;
}

export interface ChatProviderContribution extends Contribution {
    provider: ChatProvider;
}

export class ChatService {
    private aiConfig?: AIConfig;
    private fetchers: Fetcher[] = [];
    private promptContributions: SysPromptContribution[] = []

    constructor() {
        subscribe(TOPIC_SETTINGS_CHANGED, () => {
            this.aiConfig = undefined
            this.checkAIConfig().then()
        })

        // this is a reference to the original/mutable list, i.e. new additions will be automatically available
        this.promptContributions = contributionRegistry.getContributions(CID_PROMPTS) as SysPromptContribution[]
    }

    private getContributedProviders(): ChatProvider[] {
        const contributions = contributionRegistry.getContributions(CID_CHAT_PROVIDERS) as ChatProviderContribution[]
        return contributions.map(c => c.provider)
    }

    private mergeProviders(contributed: ChatProvider[], saved: ChatProvider[]): ChatProvider[] {
        const merged = new Map<string, ChatProvider>()
        
        contributed.forEach(provider => {
            merged.set(provider.name, { ...provider })
        })
        
        saved.forEach(savedProvider => {
            const contributedProvider = merged.get(savedProvider.name)
            if (contributedProvider) {
                merged.set(savedProvider.name, {
                    ...contributedProvider,
                    ...savedProvider
                })
            } else {
                merged.set(savedProvider.name, savedProvider)
            }
        })
        
        return Array.from(merged.values())
    }

    public registerFetcher(fetcher: Fetcher) {
        this.fetchers.push(fetcher)
    }

    private async checkAIConfig() {
        if (!this.aiConfig) {
            this.aiConfig = await appSettings.get(KEY_AI_CONFIG)
            if (!this.aiConfig) {
                const contributedProviders = this.getContributedProviders()
                const initialConfig: AIConfig = {
                    ...AI_CONFIG_TEMPLATE,
                    providers: contributedProviders
                }
                await appSettings.set(KEY_AI_CONFIG, initialConfig)
                this.aiConfig = await appSettings.get(KEY_AI_CONFIG)
            } else {
                const contributedProviders = this.getContributedProviders()
                this.aiConfig.providers = this.mergeProviders(contributedProviders, this.aiConfig.providers || [])
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

    public getPromptContribution(role: string) {
        return this.promptContributions.find(pc => pc.role === role)
    }

    async handleUserPrompt(options: HandlePromptOptions) {
        const currentChatConfig = options.chatConfig || await this.getDefaultProvider()
        const chatContext = options.chatContext
        const all = this.promptContributions.map(promptContribution => {
            // for each request, create a new DI context to capture the current system state for later evaluations
            const diContext = options.callContext.createChild({
                userPrompt: chatContext.history[chatContext.history.length - 1].content
            })
            if (promptContribution.canHandle instanceof Function && !promptContribution.canHandle(diContext.getProxy())) {
                return undefined
            }

            // since LLMs do not support multi-roles in a single chat, we have to rewrite the chat history,
            // so the LLM does not get confused by replies from different roles
            const messagesCopy = chatContext.history.map(m => {
                let role = m.role
                let content = m.content
                if (role !== "user") {
                    if (role !== promptContribution.role) {
                        // pretend the user is citing other assistant's role
                        role = "user"
                        content = `***Another Assistant '${m.role}' replied:***\n${content}`
                    } else {
                        role = "assistant"
                    }
                }
                return {role: role, content: content} as ChatMessage
            })
            let lastUserPrompt = messagesCopy[messagesCopy.length - 1]


            let sysPrompt = promptContribution.sysPrompt
            if (typeof sysPrompt === "function") {
                sysPrompt = sysPrompt()
            }
            messagesCopy.unshift({role: "system", content: sysPrompt} as ChatMessage)

            const handleFinalPrompt = async () => {
                const requestBodyObj = {
                    model: currentChatConfig.model,
                    stream: false,
                    messages: messagesCopy,
                    chatConfig: currentChatConfig
                } as FetcherParams

                const fetcher = this.fetchers.find((f) => f.canHandle(currentChatConfig)) || onlineFetcher
                return fetcher.completionApi(requestBodyObj).then(message => {
                    return message
                })
            }
            if (promptContribution.promptDecorator instanceof Function) {
                return promptContribution.promptDecorator(diContext.getProxy()).then(decoratedPrompt => {
                    if (decoratedPrompt) {
                        lastUserPrompt.content = decoratedPrompt
                    }
                }).then(handleFinalPrompt).then(async message => {
                    message.role = promptContribution.role
                    if (promptContribution.messageDecorator) {
                        diContext.put("message", message)
                        promptContribution.messageDecorator(diContext.getProxy())
                    }
                    return message
                })
            }

            return handleFinalPrompt()
        })
        const messages = (await Promise.all(all.filter(m => !!m))) as ChatMessage[]
        chatContext.history.push(...messages)
    }
}

export const chatService = new ChatService();
rootContext.put("chatService", chatService);