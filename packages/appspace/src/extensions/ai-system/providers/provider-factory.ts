import type { IProvider } from "../core/interfaces";
import type { ChatProvider } from "../core/types";
import { OpenAIProvider } from "./openai-provider";
import { OllamaProvider } from "./ollama-provider";

export class ProviderFactory {
    private providers: IProvider[] = [];

    constructor() {
        this.registerDefaultProviders();
    }

    private registerDefaultProviders(): void {
        this.providers.push(new OpenAIProvider());
        this.providers.push(new OllamaProvider());
        // Note: Transformers.js is used for in-browser ML tasks (zero-shot classification, embeddings)
        // via InBrowserMLService, not as a chat provider
    }

    registerProvider(provider: IProvider): void {
        this.providers.push(provider);
    }

    getProvider(chatProvider: ChatProvider): IProvider {
        const provider = this.providers.find(p => p.canHandle(chatProvider));
        if (!provider) {
            return this.providers[0];
        }
        return provider;
    }

    getAllProviders(): IProvider[] {
        return [...this.providers];
    }
}

