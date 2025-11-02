import { BaseProvider } from "./provider";
import type { ChatProvider } from "../core/types";

export class OllamaProvider extends BaseProvider {
    name = "ollama";

    canHandle(chatProvider: ChatProvider): boolean {
        return chatProvider.name.toLowerCase() === 'ollama' ||
               chatProvider.chatApiEndpoint.includes('ollama') ||
               chatProvider.chatApiEndpoint.includes('localhost:11434');
    }
}

