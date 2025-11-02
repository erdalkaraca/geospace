import {ChatCompletionMessageParam, MLCEngine} from "@mlc-ai/web-llm";
import type {ChatMessage, ChatProvider, StreamChunk} from "../../extensions/ai-system";
import type {IProvider, StreamingParams, CompletionParams} from "../../extensions/ai-system";
import {aiService} from "../../extensions/ai-system";

class WebLLMProvider implements IProvider {
    name = "webllm";
    private engine?: MLCEngine;

    canHandle(chatProvider: ChatProvider): boolean {
        return chatProvider.name === "webllm";
    }

    private async init(model: string, parameters?: any): Promise<void> {
        if (this.engine) return;
        
        const initProgressCallback = (progress: any) => {
            console.log("Model loading progress:", progress);
        };

        this.engine = new MLCEngine({initProgressCallback});
        await this.engine.reload(model, parameters);
    }

    async *stream(params: StreamingParams): AsyncIterable<StreamChunk> {
        if (!this.engine) {
            await this.init(params.model, params.chatConfig.parameters);
        }
        
        const internalMessages = params.messages.map((message) => {
            return {...message} as ChatCompletionMessageParam;
        });
        
        const result = await this.engine!.chat.completions.create({
            messages: internalMessages
        });
        
        const message = result.choices[0].message as ChatMessage;
        
        if (message.content) {
            for (const char of message.content) {
                yield {
                    type: 'token',
                    content: char
                };
            }
        }
        
        yield {
            type: 'done',
            content: ''
        };
    }

    async complete(params: CompletionParams): Promise<ChatMessage> {
        if (!this.engine) {
            await this.init(params.model, params.chatConfig.parameters);
        }
        
        const internalMessages = params.messages.map((message) => {
            return {...message} as ChatCompletionMessageParam;
        });
        
        const result = await this.engine!.chat.completions.create({
            messages: internalMessages
        });
        
        return result.choices[0].message as ChatMessage;
    }
}

export default () => {
    aiService.registerStreamingFetcher(new WebLLMProvider());
}