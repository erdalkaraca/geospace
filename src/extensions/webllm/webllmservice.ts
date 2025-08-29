import {ChatCompletionMessageParam, MLCEngine} from "@mlc-ai/web-llm";
import {chatService, ChatMessage, FetcherParams} from "../../core/chatservice.ts";

export class WebLLMService {
    private engine?: MLCEngine;

    public async init(model: string = "Llama-3.1-8B-Instruct-q4f16_1-MLC", parameters?: any) {
        // Initialize with a progress callback
        const initProgressCallback = (progress: any) => {
            console.log("Model loading progress:", progress);
        };

        this.engine = new MLCEngine({initProgressCallback});
        await this.engine.reload(model, parameters);
    }

    public async complete(options: FetcherParams) {
        if (!this.engine) {
            await this.init(options.model, options.chatConfig.parameters)
        }
        const internalMessages = options.messages.map((message: ChatMessage) => {
            return {...message} as ChatCompletionMessageParam
        })
        const result = await this.engine!.chat.completions.create({
            messages: internalMessages
        });
        return result.choices[0].message as ChatMessage;
    }
}

const webLLMService = new WebLLMService();

chatService.registerFetcher({
    name: "webllm",
    canHandle: chatProvider => chatProvider.name === "webllm",
    completionApi: webLLMService.complete.bind(webLLMService)
})