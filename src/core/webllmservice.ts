import {ChatCompletionMessageParam, MLCEngine} from "@mlc-ai/web-llm";
import {ChatMessage, FetcherParams} from "./chatservice.ts";

export class WebLLMService {
    private engine?: MLCEngine;

    public async init(model: string = "Llama-3.1-8B-Instruct-q4f16_1-MLC") {
        // Initialize with a progress callback
        const initProgressCallback = (progress: any) => {
            console.log("Model loading progress:", progress);
        };

        this.engine = new MLCEngine({initProgressCallback});
        await this.engine.reload(model);
    }

    public async complete(options: FetcherParams) {
        if (!this.engine) {
            await this.init(options.model)
        }
        const internalMessages = options.messages.map(message => {
            return {...message} as ChatCompletionMessageParam
        })
        const result = await this.engine!.chat.completions.create({
            messages: internalMessages
        });
        return result.choices[0].message as ChatMessage;
    }
}

export const webLLMService = new WebLLMService();