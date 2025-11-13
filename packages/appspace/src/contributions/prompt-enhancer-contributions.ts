import { contributionRegistry } from "../core/contributionregistry";
import { CID_PROMPT_ENHANCERS } from "../extensions/ai-system/core/constants";
import type { PromptEnhancer, PromptEnhancerContribution } from "../extensions/ai-system/core/interfaces";
import { extensionRegistry } from "../core/extensionregistry";
import { workspaceService } from "../core/filesys";
import type { Extension } from "../core/extensionregistry";
import { ExecutionContext, editorRegistry } from "../api";

const extensionsEnhancer: PromptEnhancer = {
    enhance: async (prompt: string, _context: ExecutionContext) => {
        const extensions = extensionRegistry.getExtensions().map((e: Extension) => {
            return {
                id: e.id,
                name: e.name,
                description: e.description,
                experimental: e.experimental,
                installedAndEnabled: extensionRegistry.isEnabled(e.id)
            }
        });
        const extensionsStr = `***Available Extensions:***\n${JSON.stringify(extensions, null, 2)}`;
        return `${extensionsStr}\n\n${prompt}`;
    },
    priority: 10
};

const appStateEnhancer: PromptEnhancer = {
    enhance: async (prompt: string, _context: ExecutionContext) => {
        return workspaceService.getWorkspace().then(workspace => {
            const appState = {
                workspace: workspace?.getName(),
                activeEditor: editorRegistry.getEditorArea()?.getActiveEditor()
            };
            const appStateStr = `***App's state:***\n${JSON.stringify(appState, null, 2)}`;
            return `${appStateStr}\n\n${prompt}`;
        });
    },
    priority: 20
};

contributionRegistry.registerContribution(CID_PROMPT_ENHANCERS, {
    label: "Extensions Enhancer",
    enhancer: extensionsEnhancer
} as PromptEnhancerContribution);

contributionRegistry.registerContribution(CID_PROMPT_ENHANCERS, {
    label: "App State Enhancer",
    enhancer: appStateEnhancer
} as PromptEnhancerContribution);

