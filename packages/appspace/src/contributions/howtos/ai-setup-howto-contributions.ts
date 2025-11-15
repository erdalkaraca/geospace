import { contributionRegistry } from '../../core/contributionregistry';
import { HOWTO_CONTRIBUTION_TARGET } from '../../extensions/howto-system/howto-service';
import type { HowToContribution, HowToContext } from '../../extensions/howto-system/howto-contribution';
import { activeEditorSignal, partDirtySignal } from '../../core/appstate';
import { EditorContentProvider } from '../../core/editorregistry';
import { subscribe } from '../../core/events';
import { watchSignal } from '../../core/signals';
import { appLoaderService } from '../../core/apploader';
import { appSettings } from '../../core/settingsservice';
import { KEY_AI_CONFIG } from '../../extensions/ai-system/core/constants';
import type { AIConfig } from '../../extensions/ai-system/core/types';
import { TOPIC_AICONFIG_CHANGED } from '../../extensions/ai-system/core/constants';

const AI_CONFIG_EDITOR_KEY = '.system.ai-config';

/**
 * Type guard to check if an editor implements EditorContentProvider
 */
function isEditorContentProvider(editor: any): editor is EditorContentProvider {
    return editor &&
        typeof editor.getFilePath === 'function';
}

/**
 * Checks if the AI config editor is open
 */
function isAIConfigEditorOpen(): boolean {
    const activeEditor = activeEditorSignal.get();
    if (!activeEditor || !isEditorContentProvider(activeEditor)) {
        return false;
    }
    
    const filePath = activeEditor.getFilePath();
    return filePath === AI_CONFIG_EDITOR_KEY;
}

/**
 * Checks if an LLM provider is configured (has default provider with API key)
 */
async function isLLMProviderConfigured(): Promise<boolean> {
    try {
        const config = await appSettings.get(KEY_AI_CONFIG) as AIConfig | undefined;
        if (!config || !config.defaultProvider) {
            return false;
        }
        
        const defaultProvider = config.providers?.find(p => p.name === config.defaultProvider);
        if (!defaultProvider) {
            return false;
        }
        
        // Check if API key is set (not empty)
        return !!defaultProvider.apiKey && defaultProvider.apiKey.trim() !== '';
    } catch {
        return false;
    }
}

/**
 * Checks if the AI config editor has unsaved changes
 */
function isAIConfigEditorDirty(): boolean {
    const activeEditor = activeEditorSignal.get();
    if (!activeEditor || !isEditorContentProvider(activeEditor)) {
        return false;
    }
    
    const filePath = activeEditor.getFilePath();
    if (filePath !== AI_CONFIG_EDITOR_KEY) {
        return false;
    }
    
    return activeEditor.isDirty() === true;
}

/**
 * Checks if the AI config editor is saved (not dirty)
 */
function isAIConfigEditorSaved(): boolean {
    if (!isAIConfigEditorOpen()) {
        return false;
    }
    
    return !isAIConfigEditorDirty();
}

/**
 * Checks if the AI config editor is closed
 */
function isAIConfigEditorClosed(): boolean {
    return !isAIConfigEditorOpen();
}

/**
 * Checks if user has typed something in the AI chat
 * This checks if there are any chat sessions with messages
 */
async function hasTypedInChat(): Promise<boolean> {
    try {
        const sessions = await appSettings.get('aiChatSessions') as any;
        if (!sessions || typeof sessions !== 'object') {
            return false;
        }
        
        // Check if any session has messages
        for (const sessionId in sessions) {
            const session = sessions[sessionId];
            if (session?.history && Array.isArray(session.history)) {
                // Check if there's at least one user message
                const hasUserMessage = session.history.some((msg: any) => 
                    msg.role === 'user' && msg.content && msg.content.trim() !== ''
                );
                if (hasUserMessage) {
                    return true;
                }
            }
        }
        
        return false;
    } catch {
        return false;
    }
}

// Get current app name for the title
function getAppName(): string {
    const currentApp = appLoaderService.getCurrentApp();
    return currentApp?.name || 'AppSpace';
}

// Create the AI setup HowTo contribution
const aiSetupContribution: HowToContribution = {
    id: 'appspace.ai-setup',
    title: () => `Set up AI in ${getAppName()}`,
    description: () => `Configure an LLM provider to enable AI chat features in ${getAppName()}`,
    icon: 'robot',
    label: '',
    category: 'Getting Started',
    initialize: (context: HowToContext) => {
        // Set up subscriptions for editor and AI config changes
        const cleanups: (() => void)[] = [];

        // Watch editor changes
        cleanups.push(
            watchSignal(activeEditorSignal, () => {
                context.requestUpdate();
            })
        );

        // Watch dirty state changes
        cleanups.push(
            watchSignal(partDirtySignal, () => {
                context.requestUpdate();
            })
        );

        // Subscribe to AI config changes
        subscribe(TOPIC_AICONFIG_CHANGED, () => {
            context.requestUpdate();
        });

        // Return cleanup function
        return () => {
            cleanups.forEach(cleanup => cleanup());
        };
    },
    steps: [
        {
            id: 'open-ai-settings',
            title: 'Open AI Settings',
            description: 'Open the AI settings editor by clicking the robot icon in the toolbar or using the command palette.',
            preCondition: () => true, // Always available
            postCondition: () => isAIConfigEditorOpen(),
            command: 'open_ai_config',
        },
        {
            id: 'configure-llm-provider',
            title: 'Configure LLM Provider',
            description: 'Select a provider as default and enter an API key. Make sure to save your changes using Ctrl+S or the save button.',
            preCondition: () => isAIConfigEditorOpen(),
            postCondition: async () => {
                // Check if provider is configured AND settings are saved
                const configured = await isLLMProviderConfigured();
                const saved = isAIConfigEditorSaved();
                return configured && saved;
            },
            // No command - user manually configures in the editor
        },
        {
            id: 'save-and-close',
            title: 'Save and Close',
            description: 'Save your changes (if not already saved) and close the AI settings editor tab.',
            preCondition: () => isAIConfigEditorOpen(),
            postCondition: () => isAIConfigEditorClosed(),
            // No command - user manually saves and closes the tab
        },
        {
            id: 'type-in-chat',
            title: 'Type in Chat',
            description: 'Open the AI chat view (if not already open) and type a message to test your AI configuration.',
            preCondition: async () => await isLLMProviderConfigured(),
            postCondition: async () => await hasTypedInChat(),
            // No command - user manually types in chat
        }
    ]
};

// Register the contribution
contributionRegistry.registerContribution<HowToContribution>(HOWTO_CONTRIBUTION_TARGET, aiSetupContribution);

