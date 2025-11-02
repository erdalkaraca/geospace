import { StreamParser } from "./stream-parser";
import type { StreamChunk } from "../../core/types";

export class OllamaParser extends StreamParser {
    async *parse(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamChunk> {
        let buffer = '';

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
}

