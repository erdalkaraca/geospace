import { html, render, css } from "lit";
import { customElement } from "lit/decorators.js";
import { KElement } from "../parts/k-element";
import { currentLanguageSignal, languageContributionsSignal, SETTINGS_KEY_LANGUAGE } from "../core/i18n";
import { appSettings } from "../core/settingsservice";

function getDialogContainer(): HTMLElement {
    let container = document.getElementById('global-dialog-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'global-dialog-container';
        document.body.appendChild(container);
    }
    return container;
}

const getLanguageName = (code: string): string => {
    try {
        return new Intl.DisplayNames([code], { type: 'language' }).of(code) || code.toUpperCase();
    } catch {
        return code.toUpperCase();
    }
};

const getAvailableLanguages = (): string[] => {
    const contributions = languageContributionsSignal.get();
    const languages = new Set<string>();
    
    for (const contribution of contributions) {
        if (contribution.namespace) {
            const contributionObj = contribution as any;
            for (const key in contributionObj) {
                if (key !== 'namespace' && key !== 'label' && key !== 'language' && key !== 'translations' && typeof contributionObj[key] === 'object') {
                    languages.add(key);
                }
            }
        }
    }
    
    return Array.from(languages).sort();
};

export const showLanguageSelectorDialog = async (): Promise<void> => {
    const availableLanguages = getAvailableLanguages();
    const currentLanguage = currentLanguageSignal.get();
    
    return new Promise((resolve) => {
        const container = getDialogContainer();

        let isResolved = false;

        const handleClose = () => {
            const dialog = container.querySelector('wa-dialog') as any;
            if (dialog && !isResolved) {
                dialog.open = false;
            }
        };

        const handleAfterHide = () => {
            if (isResolved) return;
            isResolved = true;
            render(html``, container);
            resolve();
        };

        const selectLanguage = async (language: string) => {
            await appSettings.set(SETTINGS_KEY_LANGUAGE, language);
            handleClose();
        };

        const template = html`
            <wa-dialog 
                label="Select Language" 
                open 
                light-dismiss
                @wa-request-close=${handleClose}
                @wa-after-hide=${handleAfterHide}>
                <style>
                    .language-list {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                        padding: 1rem;
                        min-width: 300px;
                        max-height: 400px;
                        overflow-y: auto;
                    }
                    
                    .language-item {
                        display: flex;
                        align-items: center;
                        padding: 0.75rem;
                        border-radius: var(--wa-border-radius-small);
                        cursor: pointer;
                        transition: background-color 0.2s;
                    }
                    
                    .language-item:hover {
                        background-color: var(--wa-color-neutral-fill-quiet);
                    }
                    
                    .language-item.active {
                        background-color: var(--wa-color-brand-fill-quiet);
                        font-weight: 600;
                    }
                    
                    .language-code {
                        font-family: monospace;
                        margin-right: 0.75rem;
                        min-width: 3rem;
                        color: var(--wa-color-neutral-600);
                    }
                    
                    .language-name {
                        flex: 1;
                    }
                </style>
                
                <div class="language-list">
                    ${availableLanguages.map(lang => html`
                        <div 
                            class="language-item ${lang === currentLanguage ? 'active' : ''}"
                            @click=${() => selectLanguage(lang)}>
                            <span class="language-code">${lang.toUpperCase()}</span>
                            <span class="language-name">${getLanguageName(lang)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;

        render(template, container);
    });
};

@customElement('k-language-selector')
export class KLanguageSelector extends KElement {
    static styles = css`
        :host {
            display: inline-block;
        }
    `;

    protected render() {
        const currentLanguage = currentLanguageSignal.get();
        const languageName = getLanguageName(currentLanguage);
        const buttonLabel = `${currentLanguage.toUpperCase()} ${languageName}`;
        
        return html`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${languageName}"
                @click=${() => showLanguageSelectorDialog()}>
                ${buttonLabel}
            </wa-button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-language-selector': KLanguageSelector;
    }
}

