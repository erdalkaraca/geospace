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
    toolCalls?: ToolCall[];
}

export interface ChatHistory {
    history: ChatMessage[];
}

export interface ChatProvider {
    name: string;
    model: string;
    apiKey: string;
    chatApiEndpoint: string;
    ocrApiEndpoint?: string;
    ocrModel?: string;
    parameters?: Record<string, any>;
}

export interface AIConfig {
    defaultProvider?: string;
    providers: ChatProvider[];
    requireToolApproval?: boolean;
    toolApprovalAllowlist?: string[];
    smartToolDetection?: boolean; // Use ML model to detect if prompt needs tools (reduces token usage)
}

export interface ApiMessage {
    role: string;
    content: string;
    tool_call_id?: string;
    tool_calls?: ApiToolCall[];
}

export interface ApiToolCall {
    id: string;
    type: "function";
    function: {
        name: string;
        arguments: string;
    };
    index?: number;
}

export interface ToolDefinition {
    type: "function";
    function: {
        name: string;
        description: string;
        parameters: {
            type: "object";
            properties: Record<string, {
                type: string;
                description: string;
                enum?: string[];
            }>;
            required: string[];
        };
    };
}

export interface ToolCall {
    id: string;
    type: "function";
    function: {
        name: string;
        arguments: string;
    };
}

export interface ToolResult {
    id: string;
    result: any;
    error?: string;
}

export type StreamChunkType = 'token' | 'metadata' | 'done' | 'error';

export interface StreamChunk {
    type: StreamChunkType;
    content: string;
    message?: Partial<ChatMessage>;
    metadata?: Record<string, any>;
    toolCalls?: ToolCall[];
}

export type WorkflowExecution = 'parallel' | 'sequential' | 'conditional';

export interface TokenUsage {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    estimated?: boolean;
}

export interface ProviderTokenUsage {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    requestCount: number;
}

