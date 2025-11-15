import { contributionRegistry } from "../core/contributionregistry";
import { CID_PROMPT_ENHANCERS } from "../extensions/ai-system/core/constants";
import type { PromptEnhancer, PromptEnhancerContribution } from "../extensions/ai-system/core/interfaces";
import { workspaceService } from "../core/filesys";
import { ExecutionContext, editorRegistry } from "../api";

// Extensions enhancer removed - use list_extensions command instead to reduce token usage

const appStateEnhancer: PromptEnhancer = {
    enhance: async (prompt: string, _context: ExecutionContext) => {
        try {
            const workspace = await workspaceService.getWorkspace();
            const activeEditor = editorRegistry.getEditorArea()?.getActiveEditor();
            const appState = {
                workspace: workspace?.getName() || null,
                activeEditor: activeEditor ? {
                    title: (activeEditor as any).input?.title || null,
                    editorId: (activeEditor as any).input?.editorId || null
                } : null
            };
            const appStateStr = `***App's state:***\n${JSON.stringify(appState, null, 2)}`;
            return `${prompt}\n\n${appStateStr}`;
        } catch (err) {
            // If app state enhancement fails, just return the original prompt
            return prompt;
        }
    },
    priority: 20
};

contributionRegistry.registerContribution(CID_PROMPT_ENHANCERS, {
    label: "App State Enhancer",
    enhancer: appStateEnhancer
} as PromptEnhancerContribution);

