// Re-export framework services for app usage
export { appLoaderService } from '../apploader.ts';
export { commandRegistry, CommandStack, registerAll } from '../commandregistry.ts';
export { contributionRegistry } from '../contributionregistry.ts';
export { extensionRegistry } from '../extensionregistry.ts';
export { workspaceService, File, Directory } from '../filesys.ts';
export { editorRegistry } from '../editorregistry.ts';
export { 
    activePartSignal,
    activeEditorSignal,
    partDirtySignal,
    activeTasksSignal,
    activeSelectionSignal,
    perspectiveSwitchedSignal,
    EMPTY_SIGNALPORT
} from '../appstate.ts';
export { 
    createLogger,
    setLogLevel,
    type LogLevel,
    type Logger
} from '../logger.ts';
export { 
    infoDialog,
    navigableInfoDialog,
    confirmDialog,
    promptDialog,
    type NavigableDialogAction
} from '../dialog.ts';
export { 
    toastInfo,
    toastError,
    toastWarning
} from '../toast.ts';
export { taskService } from '../taskservice.ts';
export { PyEnv } from '../pyservice.ts';
export { publish, subscribe } from '../events.ts';
export { watching } from '../signals.ts';
export { CID_PROMPTS } from '../chatservice.ts';
export { 
    fetchReleases,
    fetchLatestRelease,
    fetchReleaseByTag,
    isNewerVersion,
    configureGitHub,
    getGitHubConfig,
    type GitHubRelease
} from '../github-service.ts';
export { configureFramework, getFrameworkConfig } from '../config.ts';

