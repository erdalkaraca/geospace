// Re-export framework services for app usage
export { appLoaderService } from '../core/apploader';
export { commandRegistry, CommandStack, registerAll, CommandRegistry } from '../core/commandregistry';
export { contributionRegistry } from '../core/contributionregistry';
export { extensionRegistry } from '../core/extensionregistry';
export { workspaceService, File, StringFile, Directory, FileContentType, WorkspaceService } from '../core/filesys';
export { editorRegistry, type EditorInput } from '../core/editorregistry';
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
    type Logger,
    default as logger
} from '../core/logger';
export { rootContext } from '../core/di';
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
export { 
    CID_AGENTS, 
    CID_CHAT_PROVIDERS,
    type AgentContribution, 
    type AgentWorkflowOptions, 
    type AgentWorkflowResult, 
    type WorkflowExecution,
    type PromptEnhancer,
    type MessageProcessor,
    type AgentHooks,
    type UserAttentionRequest,
    type UserAttentionType,
    type UserAttentionHandler,
    type ChatProvider,
    type ChatProviderContribution,
    aiService 
} from '../extensions/ai-system';
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
export { packageInfoService } from '../core/packageinfoservice';
export type { PackageInfo } from '../core/packageinfoservice';

