import type { IProvider, StreamingParams, CompletionParams } from "../core/interfaces";
import type { StreamChunk, ChatMessage, ChatProvider } from "../core/types";
import { SSEParser } from "./streaming/sse-parser";
import { OllamaParser } from "./streaming/ollama-parser";

export abstract class BaseProvider implements IProvider {
    abstract name: string;
    abstract canHandle(chatProvider: ChatProvider): boolean;

    protected createParser(contentType: string, endpoint: string): SSEParser | OllamaParser {
        if (contentType.includes('text/event-stream') || endpoint.includes('openai')) {
            return new SSEParser();
        }
        return new OllamaParser();
    }

    async *stream(params: StreamingParams): AsyncIterable<StreamChunk> {
        const requestBody: any = {
            model: params.model,
            stream: true,
            messages: params.messages,
            ...params.chatConfig.parameters
        };
        
        if (params.tools && params.tools.length > 0) {
            requestBody.tools = params.tools;
            requestBody.tool_choice = "auto";
        }
        
        const response = await fetch(params.chatConfig.chatApiEndpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${params.chatConfig.apiKey}`,
                "Content-Type": "application/json",
                "Accept": "text/event-stream"
            },
            body: JSON.stringify(requestBody),
            signal: params.signal
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

        const parser = this.createParser(contentType, params.chatConfig.chatApiEndpoint);
        
        for await (const chunk of parser.parse(reader)) {
            yield chunk;
        }
    }
}

