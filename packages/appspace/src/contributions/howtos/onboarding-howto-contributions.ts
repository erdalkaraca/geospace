import { contributionRegistry } from '../../core/contributionregistry';
import { HOWTO_CONTRIBUTION_TARGET } from '../../extensions/howto-system/howto-service';
import type { HowToContribution, HowToContext } from '../../extensions/howto-system/howto-contribution';
import { workspaceService, File, TOPIC_WORKSPACE_CHANGED, TOPIC_WORKSPACE_CONNECTED } from '../../core/filesys';
import { activeEditorSignal, partDirtySignal } from '../../core/appstate';
import { EditorContentProvider } from '../../core/editorregistry';
import { subscribe } from '../../core/events';
import { watchSignal } from '../../core/signals';
import { appLoaderService } from '../../core/apploader';

const ONBOARDING_FILE_PATH = 'welcome.txt';

/**
 * Type guard to check if an editor implements EditorContentProvider
 */
function isEditorContentProvider(editor: any): editor is EditorContentProvider {
    return editor &&
        typeof editor.getFilePath === 'function';
}

/**
 * Checks if a workspace is selected
 */
async function isWorkspaceSelected(): Promise<boolean> {
    return workspaceService.isConnected();
}

/**
 * Checks if the onboarding file exists
 */
async function onboardingFileExists(): Promise<boolean> {
    const workspace = await workspaceService.getWorkspace();
    if (!workspace) return false;
    
    try {
        const resource = await workspace.getResource(ONBOARDING_FILE_PATH);
        return resource instanceof File;
    } catch {
        return false;
    }
}

/**
 * Checks if the onboarding file is open in an editor
 */
function isOnboardingFileOpen(): boolean {
    const activeEditor = activeEditorSignal.get();
    if (!activeEditor || !isEditorContentProvider(activeEditor)) {
        return false;
    }
    
    const filePath = activeEditor.getFilePath();
    return filePath === ONBOARDING_FILE_PATH;
}

/**
 * Checks if the active editor is dirty (has unsaved changes)
 * Returns true only if the onboarding file is open AND dirty
 */
function isActiveEditorDirty(): boolean {
    if (!isOnboardingFileOpen()) return false;
    
    const activeEditor = activeEditorSignal.get();
    if (!activeEditor) return false;
    
    return activeEditor.isDirty() === true;
}

/**
 * Checks if the active editor is clean (no unsaved changes)
 * Returns true only if the onboarding file is open AND not dirty
 */
function isActiveEditorClean(): boolean {
    if (!isOnboardingFileOpen()) return false;
    
    const activeEditor = activeEditorSignal.get();
    if (!activeEditor) return false;
    
    return activeEditor.isDirty() === false;
}

/**
 * Checks if the onboarding file is closed (not open in any editor)
 */
function isOnboardingFileClosed(): boolean {
    return !isOnboardingFileOpen();
}

// Get current app name for the title
function getAppName(): string {
    const currentApp = appLoaderService.getCurrentApp();
    return currentApp?.name || 'AppSpace';
}

// Create the onboarding HowTo contribution
// Using callback functions so the app name is read when the HowTo is displayed
const onboardingContribution: HowToContribution = {
    id: 'appspace.onboarding',
    title: () => `Welcome to ${getAppName()}`,
    description: () => `Get started with ${getAppName()} by learning the basics of workspace and file management`,
    icon: 'graduation-cap',
    // label will be set from title in howto-service.ts
    label: '',
    category: 'Getting Started',
    initialize: (context: HowToContext) => {
        // Set up subscriptions for workspace and editor changes
        const cleanups: (() => void)[] = [];

        // Subscribe to workspace events
        subscribe(TOPIC_WORKSPACE_CHANGED, () => {
            context.requestUpdate();
        });

        subscribe(TOPIC_WORKSPACE_CONNECTED, () => {
            context.requestUpdate();
        });

        // Watch editor signals
        cleanups.push(
            watchSignal(activeEditorSignal, () => {
                context.requestUpdate();
            })
        );

        cleanups.push(
            watchSignal(partDirtySignal, () => {
                context.requestUpdate();
            })
        );

        // Return cleanup function
        return () => {
            cleanups.forEach(cleanup => cleanup());
        };
    },
    steps: [
        {
            id: 'create-text-file',
            title: 'Create welcome.txt',
            description: 'Create a new text file called "welcome.txt" in your workspace. If you don\'t have a workspace selected, choose one first.',
            preCondition: async () => {
                // Workspace must be selected
                return await isWorkspaceSelected();
            },
            postCondition: async () => {
                return await onboardingFileExists();
            },
            command: 'create_file',
            commandParams: {
                path: ONBOARDING_FILE_PATH,
                contents: 'Welcome to AppSpace!\n\nThis is your first file. You can edit it and save your changes.'
            }
        },
        {
            id: 'open-text-file',
            title: 'Open welcome.txt',
            description: 'Open the "welcome.txt" file in the editor.',
            preCondition: async () => {
                return await onboardingFileExists();
            },
            postCondition: () => {
                return isOnboardingFileOpen();
            },
            command: 'open_editor',
            commandParams: {
                path: ONBOARDING_FILE_PATH
            }
        },
        {
            id: 'edit-and-save',
            title: 'Type something and save',
            description: 'Type some text in the editor to modify the file, then save it using Ctrl+S or the save button.',
            preCondition: () => {
                return isOnboardingFileOpen();
            },
            postCondition: () => {
                // File must be open, was dirty (edited), and is now clean (saved)
                // Check that file is open and clean (saved)
                return isActiveEditorClean();
            },
            // No command - user manually edits and saves
        },
        {
            id: 'close-text-file',
            title: 'Close the file',
            description: 'Close the editor tab by clicking the X button on the tab.',
            preCondition: () => {
                return isOnboardingFileOpen();
            },
            postCondition: () => {
                return isOnboardingFileClosed();
            },
            // No command - user manually closes the tab
        }
    ]
};

// Register the contribution
contributionRegistry.registerContribution<HowToContribution>(HOWTO_CONTRIBUTION_TARGET, onboardingContribution);

