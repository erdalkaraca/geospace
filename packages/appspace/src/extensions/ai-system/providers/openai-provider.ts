import { BaseProvider } from "./provider";
import type { ChatProvider } from "../core/types";

export class OpenAIProvider extends BaseProvider {
    name = "openai";

    canHandle(chatProvider: ChatProvider): boolean {
        return chatProvider.chatApiEndpoint.includes('openai') ||
               chatProvider.chatApiEndpoint.includes('v1/chat/completions');
    }
}

