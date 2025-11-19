import { signal, Signal } from '@lit-labs/signals';
import { Contribution, contributionRegistry, TOPIC_CONTRIBUTEIONS_CHANGED, ContributionChangeEvent } from "./contributionregistry";
import { appSettings, TOPIC_SETTINGS_CHANGED } from "./settingsservice";
import { subscribe } from "./events";
import { rootContext } from "./di";

export const SYSTEM_LANGUAGE_BUNDLES = 'system.language_bundles';
export const SETTINGS_KEY_LANGUAGE = 'language';

export interface LanguageBundleContribution extends Omit<Contribution, 'label'> {
    namespace: string;
    language?: string;
    translations?: Record<string, string>;
    [languageCode: string]: any;
}

class I18nService {
    private static readonly DEFAULT_LANGUAGE = 'en';
    private readonly translationCache = new Map<string, Record<string, string>>();

    public readonly currentLanguageSignal: Signal.State<string>;
    public readonly languageContributionsSignal: Signal.State<LanguageBundleContribution[]>;

    constructor() {
        this.currentLanguageSignal = signal<string>(this.getBrowserLanguage());
        this.languageContributionsSignal = signal<LanguageBundleContribution[]>([]);

        this.initialize();
    }

    private getBrowserLanguage(): string {
        const browserLanguage = navigator.language || navigator.languages?.[0] || I18nService.DEFAULT_LANGUAGE;
        return browserLanguage.split('-')[0].toLowerCase();
    }

    private async initializeLanguage(): Promise<string> {
        const settingsLanguage = await appSettings.get(SETTINGS_KEY_LANGUAGE);
        return settingsLanguage || this.getBrowserLanguage();
    }

    private async updateLanguageFromSettings(): Promise<void> {
        const language = await this.initializeLanguage();
        this.currentLanguageSignal.set(language);
    }

    private getPrimaryLanguage(language: string): string {
        return language.split('-')[0].toLowerCase();
    }

    private updateLanguageContributions(): void {
        const contributions = contributionRegistry.getContributions<Contribution>(SYSTEM_LANGUAGE_BUNDLES) as unknown as LanguageBundleContribution[];
        this.languageContributionsSignal.set(contributions);
    }

    private createCacheKey(namespace: string, language: string): string {
        return `${namespace}:${language}`;
    }

    private mergeTranslationsForLanguage(
        contributions: LanguageBundleContribution[],
        namespace: string,
        language: string
    ): Record<string, string> {
        const cacheKey = this.createCacheKey(namespace, language);
        const cached = this.translationCache.get(cacheKey);
        if (cached !== undefined) {
            return cached;
        }

        const merged: Record<string, string> = {};

        for (const contribution of contributions) {
            if (contribution.namespace !== namespace) {
                continue;
            }

            let translations: Record<string, string> | undefined;

            if (contribution.translations && contribution.language === language) {
                translations = contribution.translations;
            } else if (contribution[language] && typeof contribution[language] === 'object') {
                translations = contribution[language] as Record<string, string>;
            }

            if (translations) {
                Object.assign(merged, translations);
            }
        }

        this.translationCache.set(cacheKey, merged);
        return merged;
    }

    private invalidateTranslationCache(): void {
        this.translationCache.clear();
    }

    private replaceParameters(text: string, params?: Record<string, string>): string {
        if (!params) {
            return text;
        }

        return text.replace(/\{(\w+)\}/g, (match, paramKey) => {
            return params[paramKey] !== undefined ? params[paramKey] : match;
        });
    }

    private initialize(): void {
        subscribe(TOPIC_SETTINGS_CHANGED, async (settings: any) => {
            const language = settings?.[SETTINGS_KEY_LANGUAGE] || this.getBrowserLanguage();
            this.currentLanguageSignal.set(language);
            this.invalidateTranslationCache();
        });

        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: ContributionChangeEvent) => {
            if (event.target === SYSTEM_LANGUAGE_BUNDLES) {
                this.invalidateTranslationCache();
                this.updateLanguageContributions();
            }
        });

        this.updateLanguageFromSettings();
        this.updateLanguageContributions();
    }

    public i18n(namespace: string) {
        return (key: string, params?: Record<string, string>): string => {
            const currentLanguage = this.currentLanguageSignal.get();
            const primaryLanguage = this.getPrimaryLanguage(currentLanguage);
            const contributions = this.languageContributionsSignal.get();

            let translation: string | undefined;

            const currentLangTranslations = this.mergeTranslationsForLanguage(contributions, namespace, currentLanguage);
            if (currentLangTranslations[key]) {
                translation = currentLangTranslations[key];
            } else {
                const primaryLangTranslations = currentLanguage !== primaryLanguage
                    ? this.mergeTranslationsForLanguage(contributions, namespace, primaryLanguage)
                    : currentLangTranslations;
                if (primaryLangTranslations[key]) {
                    translation = primaryLangTranslations[key];
                } else if (primaryLanguage !== I18nService.DEFAULT_LANGUAGE && currentLanguage !== I18nService.DEFAULT_LANGUAGE) {
                    const defaultLangTranslations = this.mergeTranslationsForLanguage(contributions, namespace, I18nService.DEFAULT_LANGUAGE);
                    if (defaultLangTranslations[key]) {
                        translation = defaultLangTranslations[key];
                    }
                }
            }

            if (!translation) {
                return key;
            }

            return this.replaceParameters(translation, params);
        };
    }
}

export const i18nService = new I18nService();
rootContext.put("i18nService", i18nService);

export const currentLanguageSignal = i18nService.currentLanguageSignal;
export const languageContributionsSignal = i18nService.languageContributionsSignal;

export const i18n = (namespace: string) => i18nService.i18n(namespace);