import {ChatCompletionMessageParam, MLCEngine} from "@mlc-ai/web-llm";
import type {ChatMessage, ChatProvider, FetcherParams} from "../../extensions/ai-system/aiservice";
import {aiService} from "../../extensions/ai-system/aiservice";

export default () => {
    let engine: MLCEngine;

    const init = async (model: string = "Llama-3.1-8B-Instruct-q4f16_1-MLC", parameters?: any) => {
        const initProgressCallback = (progress: any) => {
            console.log("Model loading progress:", progress);
        };

        engine = new MLCEngine({initProgressCallback});
        await engine.reload(model, parameters);
    }

    const complete = async (options: FetcherParams): Promise<ChatMessage> => {
        if (!engine) {
            await init(options.model, options.chatConfig.parameters)
        }
        const internalMessages = options.messages.map((message: ChatMessage) => {
            return {...message} as ChatCompletionMessageParam
        })
        const result = await engine!.chat.completions.create({
            messages: internalMessages
        });
        return result.choices[0].message as ChatMessage;
    }

    aiService.registerStreamingFetcher({
        name: "webllm",
        canHandle: (chatProvider: ChatProvider) => chatProvider.name === "webllm",
        completionApi: complete,
        streamingApi: async function* (fetcherParams: FetcherParams, signal?: AbortSignal): AsyncIterable<any> {
            const message = await complete(fetcherParams);
            yield { type: 'token', content: message.content };
            yield { type: 'done', content: '' };
        }
    })
}