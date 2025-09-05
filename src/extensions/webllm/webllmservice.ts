import {ChatCompletionMessageParam, MLCEngine} from "@mlc-ai/web-llm";

export default ({chatService}) => {
    let engine: MLCEngine;

    const init = async (model: string = "Llama-3.1-8B-Instruct-q4f16_1-MLC", parameters?: any) => {
        // Initialize with a progress callback
        const initProgressCallback = (progress: any) => {
            console.log("Model loading progress:", progress);
        };

        engine = new MLCEngine({initProgressCallback});
        await engine.reload(model, parameters);
    }

    const complete = async (options: FetcherParams) => {
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

    chatService.registerFetcher({
        name: "webllm",
        canHandle: chatProvider => chatProvider.name === "webllm",
        completionApi: complete
    })
}