import { StreamParser } from "./stream-parser";
import type { StreamChunk, TokenUsage } from "../../core/types";

export class OllamaParser extends StreamParser {
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
                            this.extractUsage(json);
                            const doneChunk: StreamChunk = { type: 'done', content: '' };
                            if (this.usage) {
                                doneChunk.metadata = { usage: this.usage };
                            }
                            yield doneChunk;
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
                    if (json.done) {
                        this.extractUsage(json);
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
                    }
                } catch (e) {
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
        if (json.prompt_eval_count !== undefined || json.eval_count !== undefined) {
            const promptTokens = json.prompt_eval_count || 0;
            const completionTokens = json.eval_count || 0;
            this.usage = {
                promptTokens,
                completionTokens,
                totalTokens: promptTokens + completionTokens,
                estimated: false
            };
        }
    }
}

