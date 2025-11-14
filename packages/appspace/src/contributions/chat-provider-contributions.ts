import { contributionRegistry } from "../core/contributionregistry";
import { CID_CHAT_PROVIDERS, ChatProviderContribution } from "../extensions/ai-system";

contributionRegistry.registerContribution<ChatProviderContribution>(CID_CHAT_PROVIDERS, {
    target: CID_CHAT_PROVIDERS,
    label: "Ollama (Local)",
    provider: {
        name: "ollama",
        model: "gemma3:12b",
        chatApiEndpoint: "https://<your-server>/v1/chat/completions",
        apiKey: ""
    }
});

contributionRegistry.registerContribution<ChatProviderContribution>(CID_CHAT_PROVIDERS, {
    target: CID_CHAT_PROVIDERS,
    label: "OpenWebUI (Self Hosted)",
    provider: {
        name: "openwebui",
        model: "gemma3:12b",
        chatApiEndpoint: "https://<your-server>/api/v1/chat/completion",
        apiKey: ""
    }
});

contributionRegistry.registerContribution<ChatProviderContribution>(CID_CHAT_PROVIDERS, {
    target: CID_CHAT_PROVIDERS,
    label: "OpenAI",
    provider: {
        name: "openai",
        model: "gpt-4.1",
        chatApiEndpoint: "https://api.openai.com/v1/chat/completions",
        apiKey: "<your api key>"
    }
});

contributionRegistry.registerContribution<ChatProviderContribution>(CID_CHAT_PROVIDERS, {
    target: CID_CHAT_PROVIDERS,
    label: "Groq",
    provider: {
        name: "groq",
        model: "llama-3.1-8b-instant",
        chatApiEndpoint: "https://api.groq.com/openai/v1/chat/completions",
        apiKey: "<your api key>"
    }
});

contributionRegistry.registerContribution<ChatProviderContribution>(CID_CHAT_PROVIDERS, {
    target: CID_CHAT_PROVIDERS,
    label: "Cerebras",
    provider: {
        name: "cerebras",
        model: "llama3.1-8b",
        chatApiEndpoint: "https://api.cerebras.ai/v1/chat/completions",
        apiKey: "<your api key>"
    }
});

contributionRegistry.registerContribution<ChatProviderContribution>(CID_CHAT_PROVIDERS, {
    target: CID_CHAT_PROVIDERS,
    label: "WebLLM",
    provider: {
        name: "webllm",
        model: "gemma-2-9b-it-q4f16_1-MLC",
        chatApiEndpoint: "",
        apiKey: "",
        parameters: {
            context_window_size: 4096
        }
    }
});

contributionRegistry.registerContribution<ChatProviderContribution>(CID_CHAT_PROVIDERS, {
    target: CID_CHAT_PROVIDERS,
    label: "Mistral",
    provider: {
        name: "mistral",
        model: "mistral-large-latest",
        chatApiEndpoint: "https://api.mistral.ai/v1/chat/completions",
        apiKey: "<your api key>",
        ocrApiEndpoint: "https://api.mistral.ai/v1/ocr",
        ocrModel: "mistral-ocr-latest"
    }
});

contributionRegistry.registerContribution<ChatProviderContribution>(CID_CHAT_PROVIDERS, {
    target: CID_CHAT_PROVIDERS,
    label: "LiteLLM",
    provider: {
        name: "litellm",
        model: "gpt-3.5-turbo",
        chatApiEndpoint: "https://<your-server>/v1/chat/completions",
        apiKey: "<your api key>"
    }
});

