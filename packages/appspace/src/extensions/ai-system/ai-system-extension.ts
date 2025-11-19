import { html } from "lit";
import { rootContext } from "../../core/di";
import { aiService } from "./service/ai-service";
import { contributionRegistry, HTMLContribution } from "../../core/contributionregistry";
import { editorRegistry, EditorInput } from "../../core/editorregistry";
import { registerAll } from "../../core/commandregistry";
import { TOOLBAR_BOTTOM, TOOLBAR_MAIN_RIGHT } from "../../core/constants";
import { CID_AGENTS, KEY_AI_CONFIG } from "./core/constants";
import type { AgentContribution, AgentToolsConfig } from "./core/interfaces";
import type { AIConfig } from "./core/types";
import { appSettings } from "../../core/settingsservice";
import { SYSTEM_LANGUAGE_BUNDLES, i18n } from "../../core/i18n";
import GENERAL_SYS_PROMPT from "./general-assistant-prompt.txt?raw";
import "./view/k-aiview";
import "./view/k-token-usage";
import "./view/components/k-ai-config-editor";
import aisystemBundle from "./aisystem.json";

export const t = i18n('aisystem');

export default ({ }: any) => {
    rootContext.put("aiService", aiService);
    
    // Register language bundle
    contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
        aisystemBundle as any);
    
    // Register default App Support agent with general assistant prompt
    // Apps can enhance this prompt using prompt enhancers
    // smartToolDetection is read from AIConfig dynamically
    contributionRegistry.registerContribution(CID_AGENTS, {
        label: t('APP_SUPPORT'),
        description: t('APP_SUPPORT_DESC'),
        role: "appsupport",
        priority: 100,
        icon: "question-circle",
        sysPrompt: GENERAL_SYS_PROMPT,
        tools: () => {
            // Read smartToolDetection setting from AIConfig synchronously
            // This will be resolved in the prompt builder
            return appSettings.get(KEY_AI_CONFIG).then((config: AIConfig | undefined) => {
                const smartToolDetection = config?.smartToolDetection ?? false;
                return {
                    enabled: true,
                    smartToolDetection
                } as AgentToolsConfig;
            });
        }
    } as AgentContribution);
    
    contributionRegistry.registerContribution(TOOLBAR_BOTTOM, {
        target: TOOLBAR_BOTTOM,
        label: t('TOKEN_USAGE'),
        html: `<k-token-usage></k-token-usage>`
    } as HTMLContribution);

    editorRegistry.registerEditorInputHandler({
        ranking: 1000,
        canHandle: (input: EditorInput) => {
            return input.key === '.system.ai-config';
        },
        handle: async (input: EditorInput) => {
            input.editorId = "ai-config-editor";
            input.widgetFactory = () => html`
                <k-ai-config-editor .input=${input}></k-ai-config-editor>
            `;
            return input;
        }
    });

    registerAll({
        command: {
            "id": "open_ai_config",
            "name": t('OPEN_AI_CONFIG'),
            "description": t('OPEN_AI_CONFIG_DESC'),
            "parameters": []
        },
        handler: {
            execute: _context => {
                const editorInput = {
                    title: t('AI_SETTINGS'),
                    data: {},
                    key: ".system.ai-config",
                    icon: "robot",
                    state: {},
                } as EditorInput;
                editorRegistry.loadEditor(editorInput).then();
            }
        },
        contribution: {
            target: TOOLBAR_MAIN_RIGHT,
            icon: "robot",
            label: t('AI_CONFIG'),
        }
    });
}

