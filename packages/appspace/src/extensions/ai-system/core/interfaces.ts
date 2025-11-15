import type { ExecutionContext } from "../../../core/commandregistry";
import type { Contribution } from "../../../core/contributionregistry";
import type { DependencyContext } from "../../../core/di";
import type { ChatMessage, ChatHistory, ChatProvider, ToolDefinition, StreamChunk, UserAttentionRequest, WorkflowExecution, ApiMessage, TokenUsage } from "./types";

export interface ChatProviderContribution extends Contribution {
    provider: ChatProvider;
}

export interface StreamingParams {
    model: string;
    messages: ApiMessage[];
    chatConfig: ChatProvider;
    tools?: ToolDefinition[];
    signal?: AbortSignal;
}

export interface CompletionParams {
    model: string;
    messages: ApiMessage[];
    chatConfig: ChatProvider;
    tools?: ToolDefinition[];
}

export interface IProvider {
    name: string;
    canHandle(chatProvider: ChatProvider): boolean;
    stream(params: StreamingParams): AsyncIterable<StreamChunk>;
    complete?(params: CompletionParams): Promise<ChatMessage>;
    /**
     * Get available models for this provider
     * Returns a list of models with id and display name
     * If not implemented, returns empty array
     */
    getAvailableModels?(chatProvider: ChatProvider): Promise<Array<{ id: string; name: string }>> | Array<{ id: string; name: string }>;
}

export interface PromptEnhancer {
    enhance(prompt: string, context: ExecutionContext): Promise<string>;
    priority?: number;
}

export interface PromptEnhancerContribution extends Contribution {
    enhancer: PromptEnhancer;
    priority?: number;
}

export interface MessageProcessor {
    process(message: ChatMessage, context: ExecutionContext): Promise<ChatMessage>;
    priority?: number;
}

export interface AgentHooks {
    beforeSend?: (messages: ChatMessage[], context: ExecutionContext) => Promise<void>;
    afterReceive?: (message: ChatMessage, context: ExecutionContext) => Promise<void>;
}

export interface AgentToolsConfig {
    enabled: boolean;
    commandFilter?: (command: any, context: ExecutionContext) => boolean;
    smartToolDetection?: boolean; // Use ML model to detect if prompt needs tools (reduces token usage)
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
    tools?: AgentToolsConfig | (() => AgentToolsConfig | Promise<AgentToolsConfig>);
}

export interface UserAttentionHandler {
    onAttentionRequest?: (request: UserAttentionRequest, context: ExecutionContext) => Promise<boolean | string | null>;
    onConfirmation?: (message: string, context: ExecutionContext) => Promise<boolean>;
    onInput?: (prompt: string, defaultValue?: string, context?: ExecutionContext) => Promise<string | null>;
}

export interface ToolApprovalRequest {
    toolCalls: import("../core/types").ToolCall[];
    message: string;
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
    onToolApprovalRequest?: (role: string, request: ToolApprovalRequest) => Promise<boolean>;
    requireToolApproval?: boolean;
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

export interface AIServiceOptions {
    chatContext: ChatHistory;
    chatConfig?: ChatProvider;
    callContext?: DependencyContext;
    stream?: boolean;
    onToken?: (token: string) => void;
    onStatus?: (status: 'starting' | 'streaming' | 'complete' | 'error') => void;
    onProgress?: (progress: { received: number; total?: number }) => void;
    signal?: AbortSignal;
    tools?: ToolDefinition[];
}

export interface AIServiceResult {
    message: ChatMessage;
    streamController?: ReadableStreamDefaultController<StreamChunk>;
    tokenUsage?: TokenUsage;
}

export type { ApiMessage } from "./types";

