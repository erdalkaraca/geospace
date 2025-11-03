import { appSettings } from "../../../core/settingsservice";
import type { ChatProvider, AIConfig } from "../core/types";
import type { AIService } from "../service/ai-service";

export interface AIViewSettings {
    providerName?: string;
    model?: string;
    requireToolApproval?: boolean;
    toolApprovalAllowlist?: string[];
}

export interface ModelInfo {
    id: string;
    name?: string;
}

export class ProviderManager {
    private settingsKey = 'aiViewChat';
    private providers?: ChatProvider[];
    private selectedProvider?: ChatProvider;
    private settingsProviderName?: string;
    private settingsModel?: string;
    private availableModels: ModelInfo[] = [];
    private loadingModels: boolean = false;

    constructor(private aiService: AIService) {}

    async initialize(): Promise<void> {
        await this.loadProviders();
        await this.loadSettings();
    }

    async loadProviders(): Promise<void> {
        this.providers = await this.aiService.getProviders() || [];
    }

    async loadSettings(): Promise<void> {
        const settings: AIViewSettings = await appSettings.get(this.settingsKey) || {};
        
        if (settings.providerName) {
            const provider = this.providers?.find(p => p.name === settings.providerName);
            if (provider) {
                this.selectedProvider = {
                    ...provider,
                    model: settings.model || provider.model
                };
                this.settingsProviderName = settings.providerName;
                this.settingsModel = settings.model || provider.model;
            }
        }
        
        if (!this.selectedProvider && this.providers && this.providers.length > 0) {
            const defaultProvider = await this.aiService.getDefaultProvider();
            this.selectedProvider = defaultProvider;
            this.settingsProviderName = defaultProvider.name;
            this.settingsModel = defaultProvider.model;
            await this.saveSettings(defaultProvider.name, defaultProvider.model);
        }
    }

    getRequireToolApproval(): boolean {
        // This will be managed by the view component, but we expose the method for consistency
        return false; // Not stored here, but in the view
    }

    async saveSettings(providerName: string, model: string, requireToolApproval?: boolean, toolApprovalAllowlist?: string[]): Promise<void> {
        const currentSettings: AIViewSettings = await appSettings.get(this.settingsKey) || {};
        const settings: AIViewSettings = {
            ...currentSettings,
            providerName,
            model
        };
        if (requireToolApproval !== undefined) {
            settings.requireToolApproval = requireToolApproval;
        }
        if (toolApprovalAllowlist !== undefined) {
            settings.toolApprovalAllowlist = toolApprovalAllowlist;
        }
        await appSettings.set(this.settingsKey, settings);
        
        const provider = this.providers?.find(p => p.name === providerName);
        if (provider) {
            this.selectedProvider = {
                ...provider,
                model
            };
            await this.aiService.setDefaultProvider(providerName);
        }
    }

    async loadToolApprovalAllowlist(): Promise<string[]> {
        const settings: AIViewSettings = await appSettings.get(this.settingsKey) || {};
        return settings.toolApprovalAllowlist || [];
    }

    async fetchModels(providerName: string): Promise<void> {
        const provider = this.providers?.find(p => p.name === providerName);
        if (!provider) return;

        this.loadingModels = true;
        
        try {
            const baseUrl = provider.chatApiEndpoint.replace('/v1/chat/completions', '');
            const modelsUrl = `${baseUrl}/v1/models`;
            
            const response = await fetch(modelsUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${provider.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch models: ${response.statusText}`);
            }

            const data = await response.json();
            const models = data.data || [];
            
            this.availableModels = models.map((m: any) => ({
                id: m.id,
                name: m.name || m.id
            }));
            
            if (!this.settingsModel && this.availableModels.length > 0) {
                this.settingsModel = this.availableModels[0].id;
            }
        } catch (error) {
            this.availableModels = [];
            throw error;
        } finally {
            this.loadingModels = false;
        }
    }

    getProviders(): ChatProvider[] {
        return this.providers || [];
    }

    getSelectedProvider(): ChatProvider | undefined {
        return this.selectedProvider;
    }

    setSelectedProvider(provider: ChatProvider): void {
        this.selectedProvider = provider;
    }

    getSettingsProviderName(): string | undefined {
        return this.settingsProviderName;
    }

    setSettingsProviderName(name: string): void {
        this.settingsProviderName = name;
    }

    getSettingsModel(): string | undefined {
        return this.settingsModel;
    }

    setSettingsModel(model: string | undefined): void {
        this.settingsModel = model;
    }

    getAvailableModels(): ModelInfo[] {
        return this.availableModels;
    }

    isLoadingModels(): boolean {
        return this.loadingModels;
    }

    resetModelSelection(): void {
        this.availableModels = [];
        this.settingsModel = undefined;
    }
}

