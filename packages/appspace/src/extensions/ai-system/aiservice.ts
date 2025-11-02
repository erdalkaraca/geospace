import { DependencyContext } from "../../core/di";
import { publish, subscribe } from "../../core/events";
import { appSettings, TOPIC_SETTINGS_CHANGED } from "../../core/settingsservice";
import { Contribution, contributionRegistry } from "../../core/contributionregistry";
import { ExecutionContext } from "../../core/commandregistry";

export const TOPIC_AI_STREAM_STARTED = "events/aiservice/streamStarted";
export const TOPIC_AI_STREAM_CHUNK = "events/aiservice/streamChunk";
export const TOPIC_AI_STREAM_COMPLETE = "events/aiservice/streamComplete";
export const TOPIC_AI_STREAM_ERROR = "events/aiservice/streamError";
export const TOPIC_AICONFIG_CHANGED = "events/aiservice/aiConfigChanged";
export const TOPIC_AGENT_WORKFLOW_STARTED = "events/aiservice/agentWorkflowStarted";
export const TOPIC_AGENT_WORKFLOW_COMPLETE = "events/aiservice/agentWorkflowComplete";
export const TOPIC_AGENT_WORKFLOW_ERROR = "events/aiservice/agentWorkflowError";

export const CID_AGENTS = "aiservice.agents";
export const CID_CHAT_PROVIDERS = "aiservice.chatProviders";

export interface ChatProviderContribution extends Contribution {
    provider: ChatProvider;
}

const KEY_AI_CONFIG = "aiConfig";
const AI_CONFIG_TEMPLATE = {
    "defaultProvider": "ollama",
    "providers": []
};

export type UserAttentionType = 'confirmation' | 'input' | 'approval' | 'execution' | 'info';

export interface UserAttentionRequest {
    type: UserAttentionType;
    title: string;
    message: string;
    requiresAction: boolean;
    priority?: 'low' | 'normal' | 'high' | 'urgent';
    metadata?: Record<string, any>;
}

export interface ChatMessageAction {
    icon: any;
    label: string;
    action: () => Promise<void>;
    requiresAttention?: boolean;
    attentionRequest?: UserAttentionRequest;
}

export interface ChatMessage {
    role: string;
    content: string;
    actions?: ChatMessageAction[];
    requiresAttention?: boolean;
    attentionRequests?: UserAttentionRequest[];
    canContinue?: boolean;
}

export interface ModelParams {
    [key: string]: any;
}

export interface ChatProvider {
    name: string;
    model: string;
    apiKey: string;
    chatApiEndpoint: string;
    ocrApiEndpoint?: string;
    parameters?: ModelParams;
}

export interface ChatHistory {
    history: ChatMessage[];
}

export interface AIConfig {
    defaultProvider?: string;
    providers: ChatProvider[];
}

export interface ApiMessage {
    role: string;
    content: string;
}

export interface FetcherParams {
    model: string;
    stream: boolean;
    messages: ApiMessage[];
    chatConfig: ChatProvider;
}

export type StreamChunkType = 'token' | 'metadata' | 'done' | 'error';

export interface StreamChunk {
    type: StreamChunkType;
    content: string;
    message?: Partial<ChatMessage>;
    metadata?: Record<string, any>;
}

export interface AIServiceOptions {
    chatContext: ChatHistory;
    chatConfig?: ChatProvider;
    callContext: DependencyContext;
    stream?: boolean;
    onToken?: (token: string) => void;
    onStatus?: (status: 'starting' | 'streaming' | 'complete' | 'error') => void;
    onProgress?: (progress: { received: number; total?: number }) => void;
    signal?: AbortSignal;
}

export interface PromptEnhancer {
    enhance: (prompt: string, context: ExecutionContext) => Promise<string>;
    priority?: number;
}

export interface MessageProcessor {
    process: (message: ChatMessage, context: ExecutionContext) => Promise<ChatMessage>;
    priority?: number;
}

export interface AgentHooks {
    beforeSend?: (messages: ChatMessage[], context: ExecutionContext) => Promise<void>;
    afterReceive?: (message: ChatMessage, context: ExecutionContext) => Promise<void>;
}

export interface AgentContribution extends Contribution {
    role: string;
    description: string;
    sysPrompt: string | (() => string);
    canHandle?: (context: ExecutionContext) => boolean;
    priority?: number;
    
    promptEnhancers?: PromptEnhancer[];
    messageProcessors?: MessageProcessor[];
    hooks?: AgentHooks;
}

export type WorkflowExecution = 'parallel' | 'sequential' | 'conditional';

export interface UserAttentionHandler {
    onAttentionRequest?: (request: UserAttentionRequest, context: ExecutionContext) => Promise<boolean | string | null>;
    onConfirmation?: (message: string, context: ExecutionContext) => Promise<boolean>;
    onInput?: (prompt: string, defaultValue?: string, context?: ExecutionContext) => Promise<string | null>;
}

export interface AgentWorkflowOptions {
    chatContext: ChatHistory;
    chatConfig?: ChatProvider;
    callContext: DependencyContext;
    execution?: WorkflowExecution;
    roles?: string[];
    sharedState?: ExecutionContext;
    onAgentStart?: (role: string) => void;
    onAgentComplete?: (role: string, message: ChatMessage) => void;
    onAgentError?: (role: string, error: Error) => void;
    onToken?: (role: string, token: string) => void;
    onStatus?: (role: string, status: 'starting' | 'streaming' | 'complete' | 'error') => void;
    onAttentionRequest?: (role: string, request: UserAttentionRequest) => void;
    userAttentionHandler?: UserAttentionHandler;
    pauseOnAttention?: boolean;
    signal?: AbortSignal;
    stream?: boolean;
}

export interface AgentWorkflowResult {
    messages: Map<string, ChatMessage>;
    sharedState: ExecutionContext;
    errors: Map<string, Error>;
    pendingAttention?: Map<string, UserAttentionRequest[]>;
    paused?: boolean;
    continuationToken?: string;
}

export interface AIServiceResult {
    message: ChatMessage;
    streamController?: ReadableStreamDefaultController<StreamChunk>;
}

export interface StreamingFetcher {
    name: string;
    canHandle: (chatProvider: ChatProvider) => boolean;
    streamingApi: (fetcherParams: FetcherParams, signal?: AbortSignal) => AsyncIterable<StreamChunk>;
    completionApi?: (fetcherParams: FetcherParams) => Promise<ChatMessage>;
}

async function* parseSSEStream(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamChunk> {
    const decoder = new TextDecoder();
    let buffer = '';

    try {
        while (true) {
            const { done, value } = await reader.read();
            
            if (done) {
                break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                if (line.trim() === '') continue;
                
                if (line.startsWith('data: ')) {
                    const data = line.slice(6).trim();
                    
                    if (data === '[DONE]') {
                        yield { type: 'done', content: '' };
                        continue;
                    }

                    try {
                        const json = JSON.parse(data);
                        
                        if (json.error) {
                            yield {
                                type: 'error',
                                content: json.error.message || 'Unknown error',
                                metadata: json.error
                            };
                            continue;
                        }

                        const delta = json.choices?.[0]?.delta;
                        if (delta?.content) {
                            yield {
                                type: 'token',
                                content: delta.content,
                                message: {
                                    role: delta.role || 'assistant',
                                    content: json.choices?.[0]?.message?.content || delta.content
                                }
                            };
                        }
                    } catch (e) {
                        continue;
                    }
                }
            }
        }

        if (buffer.trim()) {
            if (buffer.startsWith('data: ')) {
                const data = buffer.slice(6).trim();
                if (data !== '[DONE]') {
                    try {
                        const json = JSON.parse(data);
                        const delta = json.choices?.[0]?.delta;
                        if (delta?.content) {
                            yield {
                                type: 'token',
                                content: delta.content,
                                message: {
                                    role: delta.role || 'assistant',
                                    content: json.choices?.[0]?.message?.content || delta.content
                                }
                            };
                        }
                    } catch (e) {
                    }
                }
            }
        }

        yield { type: 'done', content: '' };
    } finally {
        reader.releaseLock();
    }
}

async function* parseOllamaStream(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamChunk> {
    const decoder = new TextDecoder();
    let buffer = '';

    try {
        while (true) {
            const { done, value } = await reader.read();
            
            if (done) {
                break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                if (line.trim() === '') continue;

                try {
                    const json = JSON.parse(line);
                    
                    if (json.error) {
                        yield {
                            type: 'error',
                            content: json.error,
                            metadata: json
                        };
                        continue;
                    }

                    if (json.done) {
                        yield { type: 'done', content: '' };
                        continue;
                    }

                    if (json.message?.content) {
                        yield {
                            type: 'token',
                            content: json.message.content,
                            message: {
                                role: json.message.role || 'assistant',
                                content: json.message.content
                            }
                        };
                    } else if (json.response) {
                        yield {
                            type: 'token',
                            content: json.response,
                            message: {
                                role: 'assistant',
                                content: json.response
                            }
                        };
                    }
                } catch (e) {
                    continue;
                }
            }
        }

        if (buffer.trim()) {
            try {
                const json = JSON.parse(buffer);
                if (json.message?.content) {
                    yield {
                        type: 'token',
                        content: json.message.content,
                        message: {
                            role: json.message.role || 'assistant',
                            content: json.message.content
                        }
                    };
                }
            } catch (e) {
            }
        }

        yield { type: 'done', content: '' };
    } finally {
        reader.releaseLock();
    }
}

const defaultStreamingFetcher: StreamingFetcher = {
    name: "openai-api-streaming",
    canHandle: (_chatProvider: ChatProvider) => true,
    streamingApi: async function* (fetcherParams: FetcherParams, signal?: AbortSignal): AsyncIterable<StreamChunk> {
        const response = await fetch(fetcherParams.chatConfig.chatApiEndpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${fetcherParams.chatConfig.apiKey}`,
                "Content-Type": "application/json",
                "Accept": "text/event-stream"
            },
            body: JSON.stringify({
                model: fetcherParams.model,
                stream: true,
                messages: fetcherParams.messages,
                ...fetcherParams.chatConfig.parameters
            }),
            signal
        });

        if (!response.ok) {
            const errorText = await response.text().catch(() => 'Unknown error');
            yield {
                type: 'error',
                content: `HTTP ${response.status}: ${errorText}`,
                metadata: { status: response.status, statusText: response.statusText }
            };
            return;
        }

        const contentType = response.headers.get('content-type') || '';
        const reader = response.body?.getReader();

        if (!reader) {
            yield {
                type: 'error',
                content: 'Response body is not readable',
            };
            return;
        }

        if (contentType.includes('text/event-stream') || fetcherParams.chatConfig.chatApiEndpoint.includes('openai')) {
            yield* parseSSEStream(reader);
        } else {
            yield* parseOllamaStream(reader);
        }
    }
};

export class AIService {
    private aiConfig?: AIConfig;
    private streamingFetchers: StreamingFetcher[] = [];
    private activeRequests: Map<string, AbortController> = new Map();

    constructor() {
        subscribe(TOPIC_SETTINGS_CHANGED, () => {
            this.aiConfig = undefined;
            this.checkAIConfig().then();
        });

        this.checkAIConfig().then();
    }

    getAgentContributions(): AgentContribution[] {
        return contributionRegistry.getContributions(CID_AGENTS) as AgentContribution[];
    }

    private rewriteChatHistoryForAgent(
        history: ApiMessage[],
        targetRole: string
    ): ApiMessage[] {
        return history.map(m => {
            if (m.role === "user") {
                return { role: m.role, content: m.content };
            }
            if (m.role === targetRole) {
                return { role: "assistant", content: m.content };
            }
            return {
                role: "user",
                content: `***Agent '${m.role}' replied:***\n${m.content}`
            };
        });
    }

    private async prepareAgentPrompt(
        contribution: AgentContribution,
        messages: ChatMessage[],
        sharedState: ExecutionContext,
        callContext: DependencyContext
    ): Promise<{ messages: ApiMessage[], userPromptIndex: number }> {
        const agentContext = this.createAgentContext(sharedState, callContext, {
            userPrompt: messages[messages.length - 1]?.content || ""
        });

        if (contribution.hooks?.beforeSend) {
            await contribution.hooks.beforeSend(messages, agentContext);
        }

        let sysPrompt = contribution.sysPrompt;
        if (typeof sysPrompt === "function") {
            sysPrompt = sysPrompt();
        }

        const sanitizedMessages = this.sanitizeMessagesForAPI(messages);
        const messagesCopy = this.rewriteChatHistoryForAgent(sanitizedMessages, contribution.role);
        const lastUserPromptIndex = messagesCopy.length - 1;
        let lastUserPrompt = messagesCopy[lastUserPromptIndex];

        if (contribution.promptEnhancers?.length) {
            const enhancers = [...contribution.promptEnhancers].sort(
                (a, b) => (b.priority || 0) - (a.priority || 0)
            );
            
            let enhancedPrompt = lastUserPrompt.content;
            for (const enhancer of enhancers) {
                enhancedPrompt = await enhancer.enhance(enhancedPrompt, agentContext);
            }
            lastUserPrompt.content = enhancedPrompt;
        }

        messagesCopy.unshift({
            role: "system",
            content: sysPrompt
        });

        return { messages: messagesCopy, userPromptIndex: lastUserPromptIndex };
    }

    private createAgentContext(
        sharedState: ExecutionContext,
        callContext: DependencyContext,
        additional: Partial<ExecutionContext> = {}
    ): ExecutionContext {
        return {
            ...sharedState,
            ...callContext.getProxy(),
            ...additional
        };
    }

    private createFinalMessage(contrib: AgentContribution, processedMessage: ChatMessage): ChatMessage {
        return {
            role: contrib.role,
            content: processedMessage.content,
            actions: processedMessage.actions,
            requiresAttention: processedMessage.requiresAttention,
            attentionRequests: processedMessage.attentionRequests,
            canContinue: processedMessage.canContinue
        };
    }

    private createAgentOptions(
        contrib: AgentContribution,
        messages: ApiMessage[],
        chatConfig: ChatProvider,
        options: AgentWorkflowOptions
    ): AIServiceOptions {
        const chatMessages: ChatMessage[] = messages.map(msg => ({ role: msg.role, content: msg.content }));
        return {
            chatContext: { history: chatMessages },
            chatConfig,
            callContext: options.callContext,
            stream: options.stream ?? true,
            signal: options.signal,
            onToken: (token: string) => options.onToken?.(contrib.role, token),
            onStatus: (status) => options.onStatus?.(contrib.role, status)
        };
    }

    private async processAgentMessage(
        contribution: AgentContribution,
        message: ChatMessage,
        sharedState: ExecutionContext,
        callContext: DependencyContext
    ): Promise<ChatMessage> {
        const agentContext = this.createAgentContext(sharedState, callContext, { message });
        let processedMessage = { ...message };

        if (contribution.messageProcessors?.length) {
            const processors = [...contribution.messageProcessors].sort(
                (a, b) => (b.priority || 0) - (a.priority || 0)
            );
            
            for (const processor of processors) {
                processedMessage = await processor.process(processedMessage, agentContext);
            }
        }

        if (contribution.hooks?.afterReceive) {
            await contribution.hooks.afterReceive(processedMessage, agentContext);
        }

        const requiresAttention = processedMessage.actions?.some(a => a.requiresAttention) || 
                                  processedMessage.attentionRequests?.some(r => r.requiresAction) ||
                                  false;

        return {
            ...processedMessage,
            requiresAttention
        };
    }

    private async handleUserAttention(
        role: string,
        message: ChatMessage,
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult
    ): Promise<boolean> {
        if (!message.requiresAttention || !options.userAttentionHandler) {
            return true;
        }

        const attentionRequests: UserAttentionRequest[] = [];

        if (message.attentionRequests) {
            attentionRequests.push(...message.attentionRequests);
        }

        if (message.actions) {
            for (const action of message.actions) {
                if (action.requiresAttention && action.attentionRequest) {
                    attentionRequests.push(action.attentionRequest);
                }
            }
        }

        if (attentionRequests.length === 0) {
            return true;
        }

        if (!results.pendingAttention) {
            results.pendingAttention = new Map();
        }
        results.pendingAttention.set(role, attentionRequests);

        if (options.onAttentionRequest) {
            for (const request of attentionRequests) {
                options.onAttentionRequest(role, request);
            }
        }

        if (options.pauseOnAttention) {
            results.paused = true;
            results.continuationToken = `${role}-${Date.now()}-${Math.random()}`;
            return false;
        }

        const handler = options.userAttentionHandler;
        const agentContext = this.createAgentContext(
            options.sharedState || {},
            options.callContext,
            { message }
        );

        for (const request of attentionRequests) {
            if (handler.onAttentionRequest) {
                const result = await handler.onAttentionRequest(request, agentContext);
                if (request.requiresAction && (result === false || result === null)) {
                    return false;
                }
                if (result && typeof result === 'string') {
                    agentContext[`attention_${request.type}_result`] = result;
                }
            } else {
                switch (request.type) {
                    case 'confirmation':
                        if (handler.onConfirmation) {
                            const confirmed = await handler.onConfirmation(request.message, agentContext);
                            if (!confirmed && request.requiresAction) {
                                return false;
                            }
                        }
                        break;
                    case 'input':
                        if (handler.onInput) {
                            const input = await handler.onInput(request.message, undefined, agentContext);
                            if (!input && request.requiresAction) {
                                return false;
                            }
                            if (input) {
                                agentContext[`attention_input_result`] = input;
                            }
                        }
                        break;
                }
            }
        }

        return true;
    }

    async continueWorkflow(
        continuationToken: string,
        userResponses: Map<string, any>,
        previousOptions: AgentWorkflowOptions
    ): Promise<AgentWorkflowResult> {
        const results: AgentWorkflowResult = {
            messages: new Map(),
            sharedState: { ...previousOptions.sharedState, ...Object.fromEntries(userResponses) },
            errors: new Map()
        };

        const options: AgentWorkflowOptions = {
            ...previousOptions,
            sharedState: results.sharedState,
            pauseOnAttention: false
        };

        return this.executeAgentWorkflow(options);
    }

    private async checkAIConfig() {
        if (!this.aiConfig) {
            this.aiConfig = await appSettings.get(KEY_AI_CONFIG);
            if (!this.aiConfig) {
                const initialConfig: AIConfig = {
                    ...AI_CONFIG_TEMPLATE,
                    providers: []
                };
                await appSettings.set(KEY_AI_CONFIG, initialConfig);
                this.aiConfig = await appSettings.get(KEY_AI_CONFIG);
            }
            publish(TOPIC_AICONFIG_CHANGED, this.aiConfig);
        }
    }

    public async getProviders(): Promise<ChatProvider[]> {
        await this.checkAIConfig();
        return this.aiConfig?.providers || [];
    }

    public async getDefaultProvider(): Promise<ChatProvider> {
        await this.checkAIConfig();
        const providers = await this.getProviders();
        if (this.aiConfig?.defaultProvider) {
            const config = providers.find(p => p.name === this.aiConfig?.defaultProvider);
            if (config) {
                return config;
            }
        }
        return providers[0];
    }

    public async setDefaultProvider(defaultProviderName: string): Promise<ChatProvider> {
        await this.checkAIConfig();
        if (this.aiConfig) {
            this.aiConfig.defaultProvider = defaultProviderName;
            await appSettings.set(KEY_AI_CONFIG, this.aiConfig);
        }
        return this.getDefaultProvider();
    }

    public createMessage(prompt: string): ChatMessage {
        return {
            role: "user",
            content: prompt
        };
    }

    registerStreamingFetcher(fetcher: StreamingFetcher): void {
        this.streamingFetchers.push(fetcher);
    }

    async *streamCompletion(options: AIServiceOptions): AsyncGenerator<StreamChunk, AIServiceResult> {
        const requestId = `${Date.now()}-${Math.random()}`;
        const abortController = new AbortController();
        this.activeRequests.set(requestId, abortController);

        if (options.signal) {
            options.signal.addEventListener('abort', () => {
                abortController.abort();
            });
        }

        const effectiveSignal = options.signal || abortController.signal;

        try {
            options.onStatus?.('starting');
            publish(TOPIC_AI_STREAM_STARTED, { requestId, options });

            const chatConfig = options.chatConfig || await this.getDefaultProvider();
            const messages = this.sanitizeMessagesForAPI(options.chatContext.history);

            const fetcherParams: FetcherParams = {
                model: chatConfig.model,
                stream: true,
                messages,
                chatConfig
            };

            const fetcher = this.streamingFetchers.find(f => f.canHandle(chatConfig)) || defaultStreamingFetcher;

            let accumulatedContent = '';
            let accumulatedMessage: Partial<ChatMessage> = {
                role: 'assistant',
                content: ''
            };

            for await (const chunk of fetcher.streamingApi(fetcherParams, effectiveSignal)) {
                if (chunk.type === 'error') {
                    options.onStatus?.('error');
                    publish(TOPIC_AI_STREAM_ERROR, { requestId, chunk });
                    yield chunk;
                    break;
                }

                if (chunk.type === 'token') {
                    accumulatedContent += chunk.content;
                    accumulatedMessage.content = accumulatedContent;
                    if (chunk.message?.role) {
                        accumulatedMessage.role = chunk.message.role;
                    }

                    options.onToken?.(chunk.content);
                    options.onStatus?.('streaming');
                    options.onProgress?.({ received: accumulatedContent.length });

                    publish(TOPIC_AI_STREAM_CHUNK, { requestId, chunk });
                    yield chunk;
                } else if (chunk.type === 'done') {
                    options.onStatus?.('complete');
                    publish(TOPIC_AI_STREAM_COMPLETE, { requestId });
                    yield chunk;
                    break;
                } else {
                    yield chunk;
                }
            }

            const finalMessage: ChatMessage = {
                role: accumulatedMessage.role || 'assistant',
                content: accumulatedContent || ''
            };

            return {
                message: finalMessage,
            };
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                options.onStatus?.('error');
                publish(TOPIC_AI_STREAM_ERROR, { requestId, error: 'Request cancelled' });
                throw error;
            }

            options.onStatus?.('error');
            const errorMessage = error instanceof Error ? error.message : String(error);
            publish(TOPIC_AI_STREAM_ERROR, { requestId, error: errorMessage });
            
            yield {
                type: 'error',
                content: errorMessage,
                metadata: { error }
            };

            throw error;
        } finally {
            this.activeRequests.delete(requestId);
        }
    }

    private filterAndSortAgents(contributions: AgentContribution[], context: ExecutionContext): AgentContribution[] {
        return contributions.filter(contrib => {
            if (contrib.canHandle) {
                return contrib.canHandle(context);
            }
            return true;
        }).sort((a, b) => (b.priority || 0) - (a.priority || 0));
    }

    private messagesMapToArray(messages: Map<string, ChatMessage>): ChatMessage[] {
        return Array.from(messages.values());
    }

    private sanitizeMessageForAPI(message: ChatMessage): ApiMessage {
        return {
            role: message.role,
            content: message.content
        };
    }

    private sanitizeMessagesForAPI(messages: ChatMessage[]): ApiMessage[] {
        return messages.map(msg => this.sanitizeMessageForAPI(msg));
    }

    async handleStreamingPrompt(options: AIServiceOptions): Promise<ChatMessage | ChatMessage[]> {
        const contributions = this.getAgentContributions();
        const agentContext = this.createAgentContext(
            {},
            options.callContext,
            { userPrompt: options.chatContext.history[options.chatContext.history.length - 1]?.content || "" }
        );

        const matchingAgents = this.filterAndSortAgents(contributions, agentContext);
        const roles = matchingAgents.length > 0 
            ? matchingAgents.map(a => a.role)
            : ['assistant'];

        const workflowResult = await this.executeAgentWorkflow({
            chatContext: options.chatContext,
            chatConfig: options.chatConfig,
            callContext: options.callContext,
            execution: 'parallel',
            stream: options.stream,
            signal: options.signal,
            onToken: (role: string, token: string) => {
                options.onToken?.(token);
            },
            onStatus: (role: string, status: 'starting' | 'streaming' | 'complete' | 'error') => {
                options.onStatus?.(status);
            },
            roles
        });

        const agentMessages = this.messagesMapToArray(workflowResult.messages);
        return agentMessages.length === 1 ? agentMessages[0] : agentMessages;
    }

    async handleStreamingPromptDirect(options: AIServiceOptions): Promise<ChatMessage> {
        const stream = this.streamCompletion(options);
        let lastValue: IteratorResult<StreamChunk, AIServiceResult>;
        
        while (true) {
            lastValue = await stream.next();
            
            if (lastValue.done) {
                return lastValue.value.message;
            }
            
            const chunk = lastValue.value;
            if (chunk.type === 'error') {
                throw new Error(chunk.content);
            }
            
            if (chunk.type === 'done') {
                const final = await stream.next();
                if (final.done && final.value) {
                    return final.value.message;
                }
                if (!final.done) {
                    continue;
                }
                throw new Error('Stream completed without return value');
            }
        }
    }

    cancelRequest(requestId: string): boolean {
        const controller = this.activeRequests.get(requestId);
        if (controller) {
            controller.abort();
            this.activeRequests.delete(requestId);
            return true;
        }
        return false;
    }

    async executeAgentWorkflow(options: AgentWorkflowOptions): Promise<AgentWorkflowResult> {
        const workflowId = `workflow-${Date.now()}-${Math.random()}`;
        const execution = options.execution || 'parallel';
        const sharedState = options.sharedState || {};
        const results: AgentWorkflowResult = {
            messages: new Map<string, ChatMessage>(),
            sharedState: { ...sharedState },
            errors: new Map<string, Error>()
        };

        publish(TOPIC_AGENT_WORKFLOW_STARTED, { workflowId, options });

        try {
            const contributions = this.getAgentContributions();
            let activeContributions = contributions.filter(contrib => {
                if (options.roles && !options.roles.includes(contrib.role)) {
                    return false;
                }
                return true;
            });
            
            if (options.roles && options.roles.length > 0) {
                activeContributions = activeContributions.sort((a, b) => (b.priority || 0) - (a.priority || 0));
            } else {
                const context = this.createAgentContext(sharedState, options.callContext);
                activeContributions = this.filterAndSortAgents(activeContributions, context);
            }

            if (activeContributions.length === 0 && (!options.roles || !options.roles.includes('assistant'))) {
                activeContributions.push({
                    role: 'assistant',
                    label: 'Assistant',
                    description: 'General assistant',
                    sysPrompt: 'You are a helpful AI assistant.',
                    priority: 0
                } as AgentContribution);
            }

            switch (execution) {
                case 'parallel':
                    await this.executeParallelWorkflow(activeContributions, options, results);
                    break;
                case 'sequential':
                    await this.executeSequentialWorkflow(activeContributions, options, results);
                    break;
                case 'conditional':
                    await this.executeConditionalWorkflow(activeContributions, options, results);
                    break;
            }

            publish(TOPIC_AGENT_WORKFLOW_COMPLETE, { workflowId, results });
            return results;
        } catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            publish(TOPIC_AGENT_WORKFLOW_ERROR, { workflowId, error: err });
            throw err;
        }
    }

    private async executeAgent(
        contrib: AgentContribution,
        messages: ChatMessage[],
        sharedState: ExecutionContext,
        chatConfig: ChatProvider,
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult
    ): Promise<ChatMessage | null> {
        options.onAgentStart?.(contrib.role);
        
        const { messages: preparedMessages } = await this.prepareAgentPrompt(
            contrib,
            messages,
            sharedState,
            options.callContext
        );

        const agentOptions = this.createAgentOptions(contrib, preparedMessages, chatConfig, options);
        const rawMessage = await this.handleStreamingPromptDirect(agentOptions);
        
        const processedMessage = await this.processAgentMessage(
            contrib,
            rawMessage,
            sharedState,
            options.callContext
        );

        const finalMessage = this.createFinalMessage(contrib, processedMessage);

        const canContinue = await this.handleUserAttention(
            contrib.role,
            finalMessage,
            options,
            results
        );

        if (!canContinue && options.pauseOnAttention) {
            return null;
        }

        results.messages.set(contrib.role, finalMessage);
        options.onAgentComplete?.(contrib.role, finalMessage);
        return finalMessage;
    }

    private async executeParallelWorkflow(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult
    ): Promise<void> {
        const chatConfig = options.chatConfig || await this.getDefaultProvider();

        const agentPromises = contributions.map(async (contrib) => {
            try {
                await this.executeAgent(
                    contrib,
                    options.chatContext.history,
                    results.sharedState,
                    chatConfig,
                    options,
                    results
                );
            } catch (error) {
                const err = error instanceof Error ? error : new Error(String(error));
                results.errors.set(contrib.role, err);
                options.onAgentError?.(contrib.role, err);
            }
        });

        await Promise.all(agentPromises);
    }

    private createAgentContextWithPreviousAgents(
        accumulatedState: ExecutionContext,
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult
    ): ExecutionContext {
        return this.createAgentContext(accumulatedState, options.callContext, {
            previousAgents: Array.from(results.messages.entries()).map(([role, msg]) => ({
                role,
                content: msg.content
            }))
        });
    }

    private updateWorkflowState(
        finalMessage: ChatMessage,
        currentMessages: ChatMessage[],
        accumulatedState: ExecutionContext,
        agentContext: ExecutionContext,
        results: AgentWorkflowResult
    ): { currentMessages: ChatMessage[], accumulatedState: ExecutionContext } {
        currentMessages.push(finalMessage);
        accumulatedState = { ...accumulatedState, ...agentContext, message: finalMessage };
        results.sharedState = accumulatedState;
        return { currentMessages, accumulatedState };
    }

    private async executeSequentialWorkflow(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult
    ): Promise<void> {
        const chatConfig = options.chatConfig || await this.getDefaultProvider();
        let currentMessages = [...options.chatContext.history];
        let accumulatedState = { ...results.sharedState };

        for (const contrib of contributions) {
            try {
                const agentContext = this.createAgentContextWithPreviousAgents(accumulatedState, options, results);
                const finalMessage = await this.executeAgent(
                    contrib,
                    currentMessages,
                    accumulatedState,
                    chatConfig,
                    options,
                    results
                );

                if (!finalMessage) {
                    break;
                }

                const updated = this.updateWorkflowState(finalMessage, currentMessages, accumulatedState, agentContext, results);
                currentMessages = updated.currentMessages;
                accumulatedState = updated.accumulatedState;
            } catch (error) {
                const err = error instanceof Error ? error : new Error(String(error));
                results.errors.set(contrib.role, err);
                options.onAgentError?.(contrib.role, err);
                break;
            }
        }
    }

    private async executeConditionalWorkflow(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult
    ): Promise<void> {
        const chatConfig = options.chatConfig || await this.getDefaultProvider();
        let currentMessages = [...options.chatContext.history];
        let accumulatedState = { ...results.sharedState };

        for (const contrib of contributions) {
            try {
                const agentContext = this.createAgentContextWithPreviousAgents(accumulatedState, options, results);

                if (contrib.canHandle && !contrib.canHandle(agentContext)) {
                    continue;
                }

                const finalMessage = await this.executeAgent(
                    contrib,
                    currentMessages,
                    accumulatedState,
                    chatConfig,
                    options,
                    results
                );

                if (!finalMessage) {
                    break;
                }

                const updated = this.updateWorkflowState(finalMessage, currentMessages, accumulatedState, agentContext, results);
                currentMessages = updated.currentMessages;
                accumulatedState = updated.accumulatedState;
            } catch (error) {
                const err = error instanceof Error ? error : new Error(String(error));
                results.errors.set(contrib.role, err);
                options.onAgentError?.(contrib.role, err);
            }
        }
    }
}

export const aiService = new AIService();

