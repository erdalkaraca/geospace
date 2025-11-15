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

    /**
     * Get available models from the provider's API endpoint
     * Default implementation fetches from /v1/models endpoint
     * Providers can override this for custom behavior
     */
    async getAvailableModels(chatProvider: ChatProvider): Promise<Array<{ id: string; name: string }>> {
        if (!chatProvider.chatApiEndpoint) {
            return [];
        }

        try {
            const endpoint = chatProvider.chatApiEndpoint;
            let baseUrl = endpoint;
            
            // Extract base URL from various endpoint formats
            if (endpoint.includes('/v1/chat/completions')) {
                baseUrl = endpoint.replace('/v1/chat/completions', '');
            } else if (endpoint.includes('/api/v1/chat/completions')) {
                baseUrl = endpoint.replace('/api/v1/chat/completions', '');
            } else if (endpoint.includes('/api/chat/completion')) {
                baseUrl = endpoint.replace('/api/chat/completion', '');
            } else {
                try {
                    const url = new URL(endpoint);
                    baseUrl = `${url.protocol}//${url.host}`;
                } catch {
                    // Invalid URL, can't fetch models
                    return [];
                }
            }
            
            const modelsUrl = `${baseUrl}/v1/models`;
            
            const headers: HeadersInit = {
                'Content-Type': 'application/json'
            };
            
            if (chatProvider.apiKey) {
                headers['Authorization'] = `Bearer ${chatProvider.apiKey}`;
            }
            
            const response = await fetch(modelsUrl, {
                method: 'GET',
                headers
            });

            if (!response.ok) {
                return [];
            }

            const data = await response.json();
            const models = data.data || [];
            
            return models.map((m: any) => ({
                id: m.id,
                name: m.name || m.id
            }));
        } catch (error) {
            return [];
        }
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
        const contentLength = response.headers.get('content-length');
        
        if (!response.body) {
            yield {
                type: 'error',
                content: `Response body is null or empty (Content-Length: ${contentLength || 'unknown'}). This may indicate: 1) The endpoint doesn't support streaming, 2) Authentication is required/invalid, 3) The endpoint URL is incorrect. For Open WebUI, ensure you're using the correct endpoint and API key.`,
                metadata: { 
                    status: response.status, 
                    contentType,
                    contentLength,
                    endpoint: params.chatConfig.chatApiEndpoint,
                    hasApiKey: !!params.chatConfig.apiKey
                }
            };
            return;
        }

        const reader = response.body.getReader();

        if (!reader) {
            yield {
                type: 'error',
                content: 'Response body is not readable',
            };
            return;
        }

        const parser = this.createParser(contentType, params.chatConfig.chatApiEndpoint);
        
        try {
            for await (const chunk of parser.parse(reader)) {
                yield chunk;
            }
        } catch (error) {
            yield {
                type: 'error',
                content: error instanceof Error ? error.message : 'Failed to parse response stream',
                metadata: { error, contentType, endpoint: params.chatConfig.chatApiEndpoint }
            };
        }
    }
}

