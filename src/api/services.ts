// Re-export framework services for app usage
export { appLoaderService } from '../core/apploader.ts';
export { commandRegistry, CommandStack, registerAll, CommandRegistry } from '../core/commandregistry.ts';
export { contributionRegistry } from '../core/contributionregistry.ts';
export { extensionRegistry } from '../core/extensionregistry.ts';
export { workspaceService, File, Directory, FileContentType, WorkspaceService } from '../core/filesys.ts';
export { editorRegistry } from '../core/editorregistry.ts';
export { 
    activePartSignal,
    activeEditorSignal,
    partDirtySignal,
    activeTasksSignal,
    activeSelectionSignal,
    perspectiveSwitchedSignal,
    EMPTY_SIGNALPORT
} from '../core/appstate.ts';
export { 
    createLogger,
    setLogLevel,
    type LogLevel,
    type Logger
} from '../core/logger.ts';
export { 
    infoDialog,
    navigableInfoDialog,
    confirmDialog,
    promptDialog,
    type NavigableDialogAction
} from '../core/dialog.ts';
export { 
    toastInfo,
    toastError,
    toastWarning
} from '../core/toast.ts';
export { taskService } from '../core/taskservice.ts';
export { PyEnv } from '../core/pyservice.ts';
export { publish, subscribe } from '../core/events.ts';
export { watching } from '../core/signals.ts';
export { CID_PROMPTS } from '../core/chatservice.ts';
export { 
    fetchReleases,
    fetchLatestRelease,
    fetchReleaseByTag,
    isNewerVersion,
    configureGitHub,
    getGitHubConfig,
    type GitHubRelease
} from '../core/github-service.ts';
export { configureFramework, getFrameworkConfig } from '../core/config.ts';
export { treeNodeComparator } from '../core/tree-utils.ts';
export type { TreeContribution, TreeNode } from '../core/tree-utils.ts';

