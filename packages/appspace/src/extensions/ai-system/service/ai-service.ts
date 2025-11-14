import { DependencyContext, rootContext } from "../../../core/di";
import { publish, subscribe } from "../../../core/events";
import { appSettings, TOPIC_SETTINGS_CHANGED } from "../../../core/settingsservice";
import { contributionRegistry } from "../../../core/contributionregistry";
import type { ExecutionContext } from "../../../core/commandregistry";
import logger from "../../../core/logger";

import {
    TOPIC_AI_STREAM_STARTED,
    TOPIC_AI_STREAM_CHUNK,
    TOPIC_AI_STREAM_COMPLETE,
    TOPIC_AI_STREAM_ERROR,
    TOPIC_AICONFIG_CHANGED,
    KEY_AI_CONFIG,
    AI_CONFIG_TEMPLATE,
    MAX_TOOL_ITERATIONS,
    CID_CHAT_PROVIDERS
} from "../core/constants";

import type {
    ChatMessage,
    ChatHistory,
    ChatProvider,
    AIConfig,
    StreamChunk,
    ToolResult,
    AgentWorkflowOptions,
    AgentWorkflowResult,
    UserAttentionRequest,
    UserAttentionHandler,
    AIServiceOptions,
    AIServiceResult
} from "../core";

import type {
    AgentContribution,
    IProvider,
    ChatProviderContribution
} from "../core/interfaces";

import { ProviderFactory } from "../providers/provider-factory";
import { AgentRegistry } from "../agents/agent-registry";
import { PromptBuilder } from "../agents/prompt-builder";
import { MessageProcessorService } from "../agents/message-processor";
import { ToolExecutor } from "../tools/tool-executor";
import { WorkflowEngine } from "../workflows/workflow-engine";
import { ToolRegistry } from "../tools/tool-registry";
import { TokenEstimator } from "../utils/token-estimator";
import { tokenUsageTracker } from "./token-usage-tracker";
import type { TokenUsage } from "../core/types";

export class AIService {
    private aiConfig?: AIConfig;
    private configCheckPromise?: Promise<void>;
    private providerFactory: ProviderFactory;
    private agentRegistry: AgentRegistry;
    private promptBuilder: PromptBuilder;
    private messageProcessor: MessageProcessorService;
    private toolExecutor: ToolExecutor;
    private workflowEngine: WorkflowEngine;
    private toolRegistry: ToolRegistry;
    private activeRequests: Map<string, AbortController> = new Map();

    constructor() {
        this.providerFactory = new ProviderFactory();
        this.agentRegistry = new AgentRegistry();
        this.promptBuilder = new PromptBuilder();
        this.messageProcessor = new MessageProcessorService();
        this.toolExecutor = new ToolExecutor();
        this.workflowEngine = new WorkflowEngine();
        this.toolRegistry = new ToolRegistry();

        subscribe(TOPIC_SETTINGS_CHANGED, () => {
            this.aiConfig = undefined;
            this.configCheckPromise = undefined;
            this.checkAIConfig().then();
        });

        this.checkAIConfig().then();
    }

    getAgentContributions(): AgentContribution[] {
        return this.agentRegistry.getAgentContributions();
    }

    async getProviders(): Promise<ChatProvider[]> {
        await this.checkAIConfig();
        return this.aiConfig?.providers || [];
    }

    async getDefaultProvider(): Promise<ChatProvider> {
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

    async setDefaultProvider(defaultProviderName: string): Promise<ChatProvider> {
        await this.checkAIConfig();
        if (this.aiConfig) {
            this.aiConfig.defaultProvider = defaultProviderName;
            await appSettings.set(KEY_AI_CONFIG, this.aiConfig);
        }
        return this.getDefaultProvider();
    }

    createMessage(prompt: string): ChatMessage {
        return {
            role: "user",
            content: prompt
        };
    }

    registerStreamingFetcher(provider: IProvider): void {
        this.providerFactory.registerProvider(provider);
    }

    private getContributedProviders(): ChatProvider[] {
        const contributions = contributionRegistry.getContributions(CID_CHAT_PROVIDERS) as ChatProviderContribution[];
        return contributions.map(contrib => contrib.provider);
    }

    private mergeProviders(existing: ChatProvider[], contributed: ChatProvider[]): ChatProvider[] {
        const existingNames = new Set(existing.map(p => p.name));
        const missing = contributed.filter(provider => !existingNames.has(provider.name));
        return missing.length > 0 ? [...existing, ...missing] : existing;
    }

    private async createInitialConfig(): Promise<AIConfig> {
        const contributedProviders = this.getContributedProviders();
        const initialConfig: AIConfig = {
            ...AI_CONFIG_TEMPLATE,
            providers: contributedProviders
        };
        await appSettings.set(KEY_AI_CONFIG, initialConfig);
        return await appSettings.get(KEY_AI_CONFIG);
    }

    private async updateConfigWithMissingProviders(config: AIConfig): Promise<AIConfig> {
        const contributedProviders = this.getContributedProviders();
        const mergedProviders = this.mergeProviders(config.providers, contributedProviders);
        
        if (mergedProviders.length !== config.providers.length) {
            const updatedConfig: AIConfig = {
                ...config,
                providers: mergedProviders
            };
            await appSettings.set(KEY_AI_CONFIG, updatedConfig);
            return updatedConfig;
        }
        
        return config;
    }

    private async checkAIConfig(): Promise<void> {
        if (this.aiConfig) {
            return;
        }

        if (this.configCheckPromise) {
            return this.configCheckPromise;
        }

        this.configCheckPromise = this.performConfigCheck();
        return this.configCheckPromise;
    }

    private async performConfigCheck(): Promise<void> {
        try {
            this.aiConfig = await appSettings.get(KEY_AI_CONFIG);
            
            if (!this.aiConfig) {
                this.aiConfig = await this.createInitialConfig();
            } else {
                this.aiConfig = await this.updateConfigWithMissingProviders(this.aiConfig);
            }

            publish(TOPIC_AICONFIG_CHANGED, this.aiConfig);
        } finally {
            this.configCheckPromise = undefined;
        }
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

            const provider = this.providerFactory.getProvider(chatConfig);

            const accumulator = this.toolExecutor.createToolCallAccumulator();
            let accumulatedContent = '';
            let accumulatedMessage: Partial<ChatMessage> = {
                role: 'assistant',
                content: ''
            };
            let tokenUsage: TokenUsage | undefined;

            for await (const chunk of provider.stream({
                model: chatConfig.model,
                messages,
                chatConfig,
                tools: options.tools,
                signal: effectiveSignal
            })) {
                if (chunk.type === 'error') {
                    options.onStatus?.('error');
                    publish(TOPIC_AI_STREAM_ERROR, { requestId, chunk });
                    yield chunk;
                    break;
                }

                if (chunk.type === 'token') {
                    accumulator.processChunk(chunk);

                    if (!chunk.toolCalls || chunk.toolCalls.length === 0) {
                        accumulatedContent += chunk.content;
                        accumulatedMessage.content = accumulatedContent;
                    }

                    if (chunk.message?.role) {
                        accumulatedMessage.role = chunk.message.role;
                    }

                    if (chunk.content) {
                        options.onToken?.(chunk.content);
                    }
                    options.onStatus?.('streaming');
                    options.onProgress?.({ received: accumulatedContent.length });

                    publish(TOPIC_AI_STREAM_CHUNK, { requestId, chunk });
                    yield chunk;
                } else if (chunk.type === 'done') {
                    if (chunk.metadata?.usage) {
                        tokenUsage = chunk.metadata.usage as TokenUsage;
                    }
                    options.onStatus?.('complete');
                    publish(TOPIC_AI_STREAM_COMPLETE, { requestId });
                    yield chunk;
                    break;
                } else {
                    yield chunk;
                }
            }

            const finalToolCalls = accumulator.getFinalToolCalls();
            const finalMessage: ChatMessage = {
                role: accumulatedMessage.role || 'assistant',
                content: accumulatedContent || '',
                ...(finalToolCalls.length > 0 && { toolCalls: finalToolCalls })
            };

            if (!tokenUsage) {
                const promptTokens = TokenEstimator.estimatePromptTokens(messages, options.tools);
                const completionTokens = TokenEstimator.estimateCompletionTokens(
                    accumulatedContent,
                    finalToolCalls
                );
                tokenUsage = {
                    promptTokens,
                    completionTokens,
                    totalTokens: promptTokens + completionTokens,
                    estimated: true
                };
            }

            tokenUsageTracker.recordUsage(chatConfig.name, tokenUsage).catch(err => {
                logger.error(`Failed to record token usage: ${err instanceof Error ? err.message : String(err)}`);
            });

            return {
                message: finalMessage,
                tokenUsage
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

    async handleStreamingPromptDirect(
        options: AIServiceOptions & { tools?: import("../core/types").ToolDefinition[] }
    ): Promise<ChatMessage> {
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

    private sanitizeMessageForAPI(message: ChatMessage | import("../core/types").ApiMessage): import("../core/types").ApiMessage {
        const apiMessage: import("../core/types").ApiMessage = {
            role: message.role,
            content: message.content
        };

        if ('tool_call_id' in message && message.tool_call_id) {
            apiMessage.tool_call_id = message.tool_call_id;
        }

        if ('tool_calls' in message && (message as any).tool_calls) {
            apiMessage.tool_calls = (message as any).tool_calls;
        }

        return apiMessage;
    }

    private sanitizeMessagesForAPI(messages: (ChatMessage | import("../core/types").ApiMessage)[]): import("../core/types").ApiMessage[] {
        return messages.map(msg => this.sanitizeMessageForAPI(msg));
    }

    async handleStreamingPrompt(options: AIServiceOptions): Promise<ChatMessage | ChatMessage[]> {
        const callContext = options.callContext || rootContext.createChild({});
        const agentContext = this.createAgentContext(
            {},
            callContext,
            { userPrompt: options.chatContext.history[options.chatContext.history.length - 1]?.content || "" }
        );

        const matchingAgents = this.agentRegistry.getMatchingAgents(agentContext);
        const roles = matchingAgents.length > 0
            ? matchingAgents.map(a => a.role)
            : ['assistant'];

        const workflowResult = await this.executeAgentWorkflow({
            chatContext: options.chatContext,
            chatConfig: options.chatConfig,
            callContext: callContext,
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

        const agentMessages = Array.from(workflowResult.messages.values());
        return agentMessages.length === 1 ? agentMessages[0] : agentMessages;
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
        const agentContext = this.createAgentContext(
            options.sharedState || {},
            options.callContext
        );

        const matchingAgents = this.agentRegistry.getMatchingAgents(agentContext, options.roles);

        return this.workflowEngine.execute(
            matchingAgents,
            options,
            async (contrib, messages, sharedState, chatConfig, workflowOptions, results) => {
                return this.executeAgent(
                    contrib,
                    messages,
                    sharedState,
                    chatConfig,
                    workflowOptions,
                    results
                );
            }
        );
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

        const agentContext = this.createAgentContext(sharedState, options.callContext, {
            userPrompt: messages[messages.length - 1]?.content || ""
        });

        const { messages: preparedMessages, tools } = await this.promptBuilder.build(
            contrib,
            messages,
            agentContext,
            contrib.hooks
        );

        const chatMessages: ChatMessage[] = preparedMessages.map(msg => {
            const chatMsg: ChatMessage = { role: msg.role, content: msg.content };
            if (msg.tool_call_id) {
                (chatMsg as any).tool_call_id = msg.tool_call_id;
            }
            if (msg.tool_calls) {
                (chatMsg as any).tool_calls = msg.tool_calls;
            }
            return chatMsg;
        });

        let rawMessage = await this.handleStreamingPromptDirect({
            chatContext: { history: chatMessages },
            chatConfig,
            callContext: options.callContext,
            stream: options.stream ?? true,
            signal: options.signal,
            tools
        });

        let toolCallIteration = 0;
        const conversationHistory: import("../core/types").ApiMessage[] = [...preparedMessages];

        while (rawMessage.toolCalls && rawMessage.toolCalls.length > 0) {
            toolCallIteration++;

            if (toolCallIteration > MAX_TOOL_ITERATIONS) {
                console.warn(`[AIService] Maximum tool call iterations (${MAX_TOOL_ITERATIONS}) reached`);
                break;
            }

            let toolResults: ToolResult[] = [];

            if (options.requireToolApproval && options.onToolApprovalRequest) {
                const toolCallDescriptions = rawMessage.toolCalls.map(tc => {
                    const args = tc.function.arguments || "{}";
                    let parsedArgs: any = {};
                    try {
                        parsedArgs = JSON.parse(args);
                    } catch (e) {
                        parsedArgs = {};
                    }
                    return `${tc.function.name}(${Object.entries(parsedArgs).map(([k, v]) => `${k}=${v}`).join(", ")})`;
                }).join(", ");

                const approvalRequest: import("../core/interfaces").ToolApprovalRequest = {
                    toolCalls: rawMessage.toolCalls,
                    message: `The AI wants to execute: ${toolCallDescriptions}`
                };

                const approved = await options.onToolApprovalRequest(contrib.role, approvalRequest);
                if (!approved) {
                    toolResults = rawMessage.toolCalls.map(tc => ({
                        id: tc.id,
                        result: {
                            success: false,
                            message: "Tool execution cancelled by user",
                            cancelled: true
                        }
                    }));
                } else {
                    toolResults = await this.toolExecutor.executeToolCalls(rawMessage.toolCalls, agentContext);
                }
            } else {
                toolResults = await this.toolExecutor.executeToolCalls(rawMessage.toolCalls, agentContext);
            }

            const toolMessages: import("../core/types").ApiMessage[] = toolResults.map((tr) => ({
                role: "tool",
                content: tr.error ? JSON.stringify({ error: tr.error }) : JSON.stringify(tr.result),
                tool_call_id: tr.id
            }));

            const assistantMessage: any = {
                role: "assistant",
                content: rawMessage.content || ""
            };

            if (rawMessage.toolCalls && rawMessage.toolCalls.length > 0) {
                assistantMessage.tool_calls = rawMessage.toolCalls
                    .filter(tc => tc.function.name && tc.function.name.trim().length > 0)
                    .map(tc => ({
                        id: tc.id,
                        type: tc.type,
                        function: {
                            name: tc.function.name,
                            arguments: tc.function.arguments || "{}"
                        }
                    }));
            }

            conversationHistory.push(assistantMessage, ...toolMessages);

            const updatedMessages = conversationHistory;

            rawMessage = await this.handleStreamingPromptDirect({
                chatContext: {
                    history: updatedMessages.map(m => ({
                        role: m.role,
                        content: m.content,
                        ...(m.tool_call_id && { tool_call_id: m.tool_call_id }),
                        ...(m.tool_calls && { tool_calls: m.tool_calls })
                    } as ChatMessage))
                },
                chatConfig,
                callContext: options.callContext,
                stream: options.stream ?? true,
                signal: options.signal,
                tools
            });

            const hasContent = rawMessage.content && rawMessage.content.trim().length > 0;
            const hasToolCalls = rawMessage.toolCalls && rawMessage.toolCalls.length > 0;

            if (hasContent && !hasToolCalls) {
                break;
            }

            if (hasContent && hasToolCalls) {
                console.warn(`[AIService] Model provided content but also called tools - treating as completion`);
                break;
            }
        }

        const processedMessage = await this.messageProcessor.process(
            rawMessage,
            contrib,
            this.createAgentContext(sharedState, options.callContext, { message: rawMessage })
        );

        if (contrib.hooks?.afterReceive) {
            await contrib.hooks.afterReceive(processedMessage, this.createAgentContext(sharedState, options.callContext));
        }

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
}

export const aiService = new AIService();

