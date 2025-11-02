import type { DependencyContext } from "../../../core/di";
import type { ExecutionContext } from "../../../core/commandregistry";
import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";
import type { ChatMessage, ChatProvider } from "../core/types";

export interface IWorkflowStrategy {
    execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult,
        executeAgent: (
            contrib: AgentContribution,
            messages: ChatMessage[],
            sharedState: ExecutionContext,
            chatConfig: ChatProvider,
            options: AgentWorkflowOptions,
            results: AgentWorkflowResult
        ) => Promise<ChatMessage | null>
    ): Promise<void>;
}

