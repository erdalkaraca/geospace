import { appSettings } from "../../../core/settingsservice";
import type { ChatProvider, AIConfig } from "../core/types";
import type { AIService } from "../service/ai-service";

export interface AIViewSettings {
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
        // Get provider and model from AI config (default provider)
        if (this.providers && this.providers.length > 0) {
            const defaultProvider = await this.aiService.getDefaultProvider();
            this.selectedProvider = defaultProvider;
            this.settingsProviderName = defaultProvider.name;
            this.settingsModel = defaultProvider.model;
        }
    }

    getRequireToolApproval(): boolean {
        // This will be managed by the view component, but we expose the method for consistency
        return false; // Not stored here, but in the view
    }

    async saveSettings(providerName: string, model: string, apiKey?: string, requireToolApproval?: boolean, toolApprovalAllowlist?: string[]): Promise<void> {
        // Save only view-specific settings to AIViewSettings
        const currentSettings: AIViewSettings = await appSettings.get(this.settingsKey) || {};
        const settings: AIViewSettings = {
            ...currentSettings
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
            const updatedProvider = {
                ...provider,
                model,
                ...(apiKey !== undefined && { apiKey })
            };
            this.selectedProvider = updatedProvider;
            this.settingsProviderName = providerName;
            this.settingsModel = model;
            
            // Update provider in AI config (API key and model)
            await this.updateProviderInAIConfig(providerName, { model, ...(apiKey !== undefined && { apiKey }) });
            
            // Set as default provider in AI config
            await this.aiService.setDefaultProvider(providerName);
        }
    }

    private async updateProviderInAIConfig(providerName: string, updates: { model?: string; apiKey?: string }): Promise<void> {
        const { KEY_AI_CONFIG } = await import('../core/constants');
        const aiConfig = await appSettings.get(KEY_AI_CONFIG) || {};
        
        if (aiConfig.providers && Array.isArray(aiConfig.providers)) {
            const providerIndex = aiConfig.providers.findIndex((p: any) => p.name === providerName);
            if (providerIndex >= 0) {
                aiConfig.providers[providerIndex] = {
                    ...aiConfig.providers[providerIndex],
                    ...updates
                };
                await appSettings.set(KEY_AI_CONFIG, aiConfig);
            }
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

    async getSettingsProviderName(): Promise<string | undefined> {
        // Get from default provider in AI config
        if (!this.settingsProviderName) {
            const defaultProvider = await this.aiService.getDefaultProvider();
            this.settingsProviderName = defaultProvider.name;
        }
        return this.settingsProviderName;
    }

    setSettingsProviderName(name: string): void {
        this.settingsProviderName = name;
    }

    async getSettingsModel(): Promise<string | undefined> {
        // Get from default provider in AI config
        if (!this.settingsModel) {
            const defaultProvider = await this.aiService.getDefaultProvider();
            this.settingsModel = defaultProvider.model;
        }
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

