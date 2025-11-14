import type { ApiMessage, ToolDefinition, ToolCall } from "../core/types";

export class TokenEstimator {
    private static readonly AVERAGE_CHARS_PER_TOKEN = 4;
    private static readonly TOOL_DEFINITION_OVERHEAD = 50;
    private static readonly MESSAGE_OVERHEAD = 4;

    static estimateTokens(text: string): number {
        if (!text || text.trim().length === 0) {
            return 0;
        }

        const trimmed = text.trim();
        const charCount = trimmed.length;
        const wordCount = trimmed.split(/\s+/).filter(w => w.length > 0).length;

        const tokenEstimate = Math.ceil(
            charCount / this.AVERAGE_CHARS_PER_TOKEN + wordCount * 0.3
        );

        return Math.max(1, tokenEstimate);
    }

    static estimateMessageTokens(message: ApiMessage): number {
        let tokens = this.MESSAGE_OVERHEAD;

        if (message.content) {
            tokens += this.estimateTokens(message.content);
        }

        if (message.role) {
            tokens += this.estimateTokens(message.role);
        }

        if (message.tool_calls) {
            for (const toolCall of message.tool_calls) {
                tokens += this.estimateTokens(toolCall.function.name || '');
                tokens += this.estimateTokens(toolCall.function.arguments || '{}');
                tokens += 10;
            }
        }

        if (message.tool_call_id) {
            tokens += this.estimateTokens(message.tool_call_id);
        }

        return tokens;
    }

    static estimatePromptTokens(messages: ApiMessage[], tools?: ToolDefinition[]): number {
        let totalTokens = 0;

        for (const message of messages) {
            totalTokens += this.estimateMessageTokens(message);
        }

        if (tools && tools.length > 0) {
            for (const tool of tools) {
                totalTokens += this.TOOL_DEFINITION_OVERHEAD;
                totalTokens += this.estimateTokens(tool.function.name || '');
                totalTokens += this.estimateTokens(tool.function.description || '');
                
                if (tool.function.parameters) {
                    const paramsJson = JSON.stringify(tool.function.parameters);
                    totalTokens += this.estimateTokens(paramsJson);
                }
            }
        }

        return totalTokens;
    }

    static estimateCompletionTokens(content: string, toolCalls?: ToolCall[]): number {
        let tokens = this.estimateTokens(content);

        if (toolCalls && toolCalls.length > 0) {
            for (const toolCall of toolCalls) {
                tokens += 10;
                tokens += this.estimateTokens(toolCall.function?.name || '');
                tokens += this.estimateTokens(toolCall.function?.arguments || '{}');
            }
        }

        return tokens;
    }
}

