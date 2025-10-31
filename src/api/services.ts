// Re-export framework services for app usage
export { appLoaderService } from '../core/apploader';
export { commandRegistry, CommandStack, registerAll, CommandRegistry } from '../core/commandregistry';
export { contributionRegistry } from '../core/contributionregistry';
export { extensionRegistry } from '../core/extensionregistry';
export { workspaceService, File, Directory, FileContentType, WorkspaceService } from '../core/filesys';
export { editorRegistry } from '../core/editorregistry';
export { 
    activePartSignal,
    activeEditorSignal,
    partDirtySignal,
    activeTasksSignal,
    activeSelectionSignal,
    perspectiveSwitchedSignal,
    EMPTY_SIGNALPORT
} from '../core/appstate';
export { 
    createLogger,
    setLogLevel,
    type LogLevel,
    type Logger
} from '../core/logger';
export { 
    infoDialog,
    navigableInfoDialog,
    confirmDialog,
    promptDialog,
    type NavigableDialogAction
} from '../core/dialog';
export { 
    toastInfo,
    toastError,
    toastWarning
} from '../core/toast';
export { taskService } from '../core/taskservice';
export { PyEnv } from '../core/pyservice';
export { publish, subscribe } from '../core/events';
export { watching } from '../core/signals';
export { CID_PROMPTS } from '../core/chatservice';
export { 
    fetchReleases,
    fetchLatestRelease,
    fetchReleaseByTag,
    isNewerVersion,
    getGitHubConfig,
    type GitHubRelease
} from '../core/github-service';
export { configureFramework, getFrameworkConfig } from '../core/config';
export { treeNodeComparator } from '../core/tree-utils';
export type { TreeContribution, TreeNode } from '../core/tree-utils';

