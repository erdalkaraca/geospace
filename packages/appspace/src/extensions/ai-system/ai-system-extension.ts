import { html } from "lit";
import { rootContext } from "../../core/di";
import { aiService } from "./service/ai-service";
import { contributionRegistry, HTMLContribution } from "../../core/contributionregistry";
import { editorRegistry, EditorInput } from "../../core/editorregistry";
import { registerAll } from "../../core/commandregistry";
import { TOOLBAR_BOTTOM, TOOLBAR_MAIN_RIGHT } from "../../core/constants";
import { CID_AGENTS } from "./core/constants";
import type { AgentContribution } from "./core/interfaces";
import GENERAL_SYS_PROMPT from "./general-assistant-prompt.txt?raw";
import "./view/k-aiview";
import "./view/k-token-usage";
import "./view/components/k-ai-config-editor";

export default ({ }: any) => {
    rootContext.put("aiService", aiService);
    
    // Register default App Support agent with general assistant prompt
    // Apps can enhance this prompt using prompt enhancers
    contributionRegistry.registerContribution(CID_AGENTS, {
        label: "App Support",
        description: "General app support",
        role: "appsupport",
        priority: 100,
        icon: "question-circle",
        sysPrompt: GENERAL_SYS_PROMPT,
        tools: {
            enabled: true,
        }
    } as AgentContribution);
    
    contributionRegistry.registerContribution(TOOLBAR_BOTTOM, {
        target: TOOLBAR_BOTTOM,
        label: "Token Usage",
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
            "name": "Open AI Config",
            "description": "Opens the AI settings editor",
            "parameters": []
        },
        handler: {
            execute: _context => {
                const editorInput = {
                    title: "AI Settings",
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
            label: "AI Config",
        }
    });
}

