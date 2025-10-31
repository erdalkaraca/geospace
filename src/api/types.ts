// Re-export framework types for app usage
export type { AppDefinition, AppContributions } from '../core/apploader.ts';
export type { 
    Command, 
    Parameter, 
    Variable, 
    LLMOptions,
    ExecutionContext,
    ExecuteParams,
    Handler,
    Commands,
    CommandStack,
    CommandRegistry
} from '../core/commandregistry.ts';
export type { 
    Extension 
} from '../core/extensionregistry.ts';
export type {
    Contribution
} from '../core/contributionregistry.ts';
export type {
    Resource,
    WorkspaceService
} from '../core/filesys.ts';
export type {
    EditorInput
} from '../core/editorregistry.ts';
export type {
    LogLevel
} from '../core/logger.ts';
export type {
    SignalPort
} from '../core/signals.ts';
export type {
    SysPromptContribution,
    ChatContext,
    ChatMessage
} from '../core/chatservice.ts';
export type {
    NavigableDialogAction
} from '../core/dialog.ts';
export type {
    TreeNode,
    TreeContribution
} from '../core/tree-utils.ts';

