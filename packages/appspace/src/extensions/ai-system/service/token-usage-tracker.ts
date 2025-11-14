import { persistenceService } from "../../../core/persistenceservice";
import type { TokenUsage, ProviderTokenUsage } from "../core/types";

interface TokenUsageData {
    providers: Record<string, ProviderTokenUsage>;
    total: ProviderTokenUsage;
    lastUpdated: number;
}

const TOKEN_USAGE_KEY = "ai_token_usage";

export class TokenUsageTracker {
    private data: TokenUsageData | null = null;
    private loadPromise: Promise<TokenUsageData> | null = null;

    private async loadData(): Promise<TokenUsageData> {
        if (this.data) {
            return this.data;
        }

        if (this.loadPromise) {
            return this.loadPromise;
        }

        this.loadPromise = (async () => {
            const stored = await persistenceService.getObject(TOKEN_USAGE_KEY);
            if (stored) {
                this.data = stored as TokenUsageData;
            } else {
                this.data = {
                    providers: {},
                    total: {
                        promptTokens: 0,
                        completionTokens: 0,
                        totalTokens: 0,
                        requestCount: 0
                    },
                    lastUpdated: Date.now()
                };
                await this.saveData();
            }
            this.loadPromise = null;
            return this.data;
        })();

        return this.loadPromise;
    }

    private async saveData(): Promise<void> {
        if (this.data) {
            this.data.lastUpdated = Date.now();
            await persistenceService.persistObject(TOKEN_USAGE_KEY, this.data);
        }
    }

    async recordUsage(providerName: string, usage: TokenUsage): Promise<void> {
        await this.loadData();

        if (!this.data) {
            return;
        }

        if (!this.data.providers[providerName]) {
            this.data.providers[providerName] = {
                promptTokens: 0,
                completionTokens: 0,
                totalTokens: 0,
                requestCount: 0
            };
        }

        const provider = this.data.providers[providerName];
        provider.promptTokens += usage.promptTokens;
        provider.completionTokens += usage.completionTokens;
        provider.totalTokens += usage.totalTokens;
        provider.requestCount += 1;

        this.data.total.promptTokens += usage.promptTokens;
        this.data.total.completionTokens += usage.completionTokens;
        this.data.total.totalTokens += usage.totalTokens;
        this.data.total.requestCount += 1;

        await this.saveData();
    }

    async getProviderUsage(providerName: string): Promise<ProviderTokenUsage | null> {
        await this.loadData();
        return this.data?.providers[providerName] || null;
    }

    async getAllProviderUsage(): Promise<Record<string, ProviderTokenUsage>> {
        await this.loadData();
        return this.data?.providers || {};
    }

    async getTotalUsage(): Promise<ProviderTokenUsage> {
        await this.loadData();
        return this.data?.total || {
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0,
            requestCount: 0
        };
    }

    async reset(): Promise<void> {
        this.data = {
            providers: {},
            total: {
                promptTokens: 0,
                completionTokens: 0,
                totalTokens: 0,
                requestCount: 0
            },
            lastUpdated: Date.now()
        };
        await this.saveData();
    }

    async resetProvider(providerName: string): Promise<void> {
        await this.loadData();
        if (!this.data) {
            return;
        }

        const provider = this.data.providers[providerName];
        if (provider) {
            this.data.total.promptTokens -= provider.promptTokens;
            this.data.total.completionTokens -= provider.completionTokens;
            this.data.total.totalTokens -= provider.totalTokens;
            this.data.total.requestCount -= provider.requestCount;
            delete this.data.providers[providerName];
            await this.saveData();
        }
    }
}

export const tokenUsageTracker = new TokenUsageTracker();

