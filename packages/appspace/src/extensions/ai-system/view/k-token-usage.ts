import { customElement } from "lit/decorators.js";
import { KElement } from "../../../parts/k-element";
import { html, css } from "lit";
import { tokenUsageTracker } from "../service/token-usage-tracker";
import { subscribe } from "../../../core/events";
import { confirmDialog } from "../../../dialogs";
import { TOPIC_AI_STREAM_COMPLETE } from "../core/constants";
import type { ProviderTokenUsage } from "../core/types";
import { t } from "../ai-system-extension";

@customElement('k-token-usage')
export class KTokenUsage extends KElement {
    private totalUsage: ProviderTokenUsage = {
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0,
        requestCount: 0
    };
    private providerUsage: Record<string, ProviderTokenUsage> = {};
    private updateInterval: number | null = null;

    static styles = css`
        :host {
            display: inline-block;
        }
        
        wa-dropdown::part(menu) {
            min-width: 300px;
            max-width: 400px;
        }
        
        h3 {
            padding: var(--wa-space-s) var(--wa-space-m);
            margin: 0;
            font-weight: 600;
            font-size: 0.95em;
        }
        
        h6 {
            padding: var(--wa-space-xs) var(--wa-space-m);
            margin: 0;
            font-weight: 600;
            font-size: 0.9em;
            color: var(--wa-color-neutral-text-subtle);
        }
        
        wa-dropdown-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .provider-name {
            font-weight: 500;
        }
        
        .provider-stats {
            display: flex;
            gap: var(--wa-space-m);
            font-size: 0.9em;
        }
        
        .stat-item {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        
        .stat-label {
            font-size: 0.85em;
            color: var(--wa-color-neutral-text-subtle);
        }
        
        .stat-value {
            font-weight: 600;
        }
        
        .total-stats {
            display: flex;
            gap: var(--wa-space-m);
            font-size: 0.9em;
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        this.loadUsage();
        this.updateInterval = window.setInterval(() => {
            this.loadUsage();
        }, 5000);

        subscribe(TOPIC_AI_STREAM_COMPLETE, () => {
            this.loadUsage();
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.updateInterval !== null) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    private async loadUsage() {
        try {
            this.totalUsage = await tokenUsageTracker.getTotalUsage();
            this.providerUsage = await tokenUsageTracker.getAllProviderUsage();
            this.requestUpdate();
        } catch (error) {
            console.error('Failed to load token usage', error);
        }
    }

    private formatNumber(num: number): string {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    private async handleReset() {
        if (await confirmDialog(t('RESET_CONFIRM'))) {
            await tokenUsageTracker.reset();
            await this.loadUsage();
        }
    }

    protected render() {
        const hasUsage = this.totalUsage.totalTokens > 0;
        
        if (!hasUsage) {
            return html``;
        }

        return html`
            <wa-dropdown
                placement="top-end"
                distance="8">
                <wa-button
                    slot="trigger"
                    appearance="plain"
                    size="small"
                    title="${t('TOKEN_USAGE_STATS')}">
                    <wa-icon name="database" label="${t('TOKEN_USAGE')}" slot="start"></wa-icon>
                    ${this.formatNumber(this.totalUsage.totalTokens)} ${t('TOKENS')}
                </wa-button>
                
                <h3>${t('TOKEN_USAGE_STATS')}</h3>
                
                <h6>${t('TOTAL_USAGE')}</h6>
                <wa-dropdown-item>
                    <span>${t('TOTAL')}</span>
                    <div class="total-stats">
                        <div class="stat-item">
                            <span class="stat-label">${t('PROMPT')}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.promptTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${t('COMPLETION')}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.completionTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${t('TOTAL')}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.totalTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${t('REQUESTS')}</span>
                            <span class="stat-value">${this.totalUsage.requestCount}</span>
                        </div>
                    </div>
                </wa-dropdown-item>
                
                ${Object.keys(this.providerUsage).length > 0 ? html`
                    <wa-divider></wa-divider>
                    <h6>${t('BY_PROVIDER')}</h6>
                    ${Object.entries(this.providerUsage).map(([name, usage]) => html`
                        <wa-dropdown-item>
                            <span class="provider-name">${name}</span>
                            <div class="provider-stats">
                                <div class="stat-item">
                                    <span class="stat-label">${t('PROMPT')}</span>
                                    <span class="stat-value">${this.formatNumber(usage.promptTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${t('COMPLETION')}</span>
                                    <span class="stat-value">${this.formatNumber(usage.completionTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${t('TOTAL')}</span>
                                    <span class="stat-value">${this.formatNumber(usage.totalTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${t('REQUESTS')}</span>
                                    <span class="stat-value">${usage.requestCount}</span>
                                </div>
                            </div>
                        </wa-dropdown-item>
                    `)}
                ` : ''}
                
                <wa-divider></wa-divider>
                <wa-dropdown-item variant="danger" @click=${this.handleReset}>
                    <wa-icon name="trash" slot="icon"></wa-icon>
                    ${t('RESET_STATISTICS')}
                </wa-dropdown-item>
            </wa-dropdown>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-token-usage': KTokenUsage
    }
}

