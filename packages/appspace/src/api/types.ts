// Re-export framework types for app usage
export type { AppDefinition, AppContributions } from '../core/apploader';
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
} from '../core/commandregistry';
export type { 
    Extension 
} from '../core/extensionregistry';
export type {
    Contribution
} from '../core/contributionregistry';
export type {
    Resource,
    WorkspaceService
} from '../core/filesys';
export type {
    EditorInput
} from '../core/editorregistry';
export type {
    LogLevel
} from '../core/logger';
export type {
    SignalPort
} from '../core/signals';
export type {
    AgentContribution,
    AgentWorkflowOptions,
    AgentWorkflowResult,
    WorkflowExecution,
    PromptEnhancer,
    MessageProcessor,
    AgentHooks,
    UserAttentionRequest,
    UserAttentionType,
    UserAttentionHandler,
    ChatHistory,
    ChatMessage,
    ChatProvider,
    ChatProviderContribution
} from '../extensions/ai-system';
export type {
    NavigableDialogAction
} from '../core/dialog';
export type {
    TreeNode,
    TreeContribution
} from '../core/tree-utils';

