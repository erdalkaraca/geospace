import { StreamParser } from "./stream-parser";
import type { StreamChunk, ToolCall, TokenUsage } from "../../core/types";

export class SSEParser extends StreamParser {
    private usage: TokenUsage | null = null;

    async *parse(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamChunk> {
        let buffer = '';
        this.usage = null;

        try {
            while (true) {
                const { done, value } = await reader.read();
                
                if (done) {
                    break;
                }

                buffer += this.decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of this.processLines(lines)) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6).trim();
                        
                        if (data === '[DONE]') {
                            const doneChunk: StreamChunk = { type: 'done', content: '' };
                            if (this.usage) {
                                doneChunk.metadata = { usage: this.usage };
                            }
                            yield doneChunk;
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

                            this.extractUsage(json);

                            const chunk = this.parseChunk(json);
                            if (chunk) {
                                yield chunk;
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
                            this.extractUsage(json);
                            const chunk = this.parseChunk(json);
                            if (chunk) {
                                yield chunk;
                            }
                        } catch (e) {
                        }
                    }
                }
            }

            const doneChunk: StreamChunk = { type: 'done', content: '' };
            if (this.usage) {
                doneChunk.metadata = { usage: this.usage };
            }
            yield doneChunk;
        } finally {
            reader.releaseLock();
        }
    }

    private extractUsage(json: any): void {
        if (json.usage) {
            const usage = json.usage;
            this.usage = {
                promptTokens: usage.prompt_tokens || 0,
                completionTokens: usage.completion_tokens || 0,
                totalTokens: usage.total_tokens || 0,
                estimated: false
            };
        }
    }

    private parseChunk(json: any): StreamChunk | null {
        const delta = json.choices?.[0]?.delta;
        const choice = json.choices?.[0];
        
        if (delta?.content) {
            return {
                type: 'token',
                content: delta.content,
                message: {
                    role: delta.role || 'assistant',
                    content: choice?.message?.content || delta.content
                }
            };
        }
        
        if (choice?.message?.tool_calls) {
            const toolCalls = this.parseToolCalls(choice.message.tool_calls, true);
            if (toolCalls.length > 0) {
                return {
                    type: 'token',
                    content: '',
                    toolCalls
                };
            }
        } else if (delta?.tool_calls || choice?.delta?.tool_calls) {
            const toolCalls = this.parseToolCalls(delta?.tool_calls || choice?.delta?.tool_calls || [], false);
            if (toolCalls.length > 0) {
                return {
                    type: 'token',
                    content: '',
                    toolCalls
                };
            }
        }

        return null;
    }

    private parseToolCalls(toolCalls: any[], isComplete: boolean = false): ToolCall[] {
        return toolCalls
            .filter(tc => tc.function !== undefined)
            .map((tc, idx) => ({
                id: tc.id || `call_${tc.index !== undefined ? tc.index : idx}_${Date.now()}`,
                type: "function" as const,
                function: {
                    name: tc.function?.name || "",
                    arguments: tc.function?.arguments || (isComplete ? "{}" : "")
                },
                _index: tc.index !== undefined ? tc.index : idx
            } as ToolCall & { _index?: number }));
    }
}

