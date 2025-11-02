import type { IWorkflowStrategy } from "./workflow-strategy";
import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";
import type { ChatMessage, ChatProvider } from "../core/types";
import type { ExecutionContext } from "../../../core/commandregistry";

export class ParallelWorkflowStrategy implements IWorkflowStrategy {
    async execute(
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
    ): Promise<void> {
        const chatConfig = options.chatConfig;
        if (!chatConfig) {
            throw new Error("Chat config is required");
        }

        const agentPromises = contributions.map(async (contrib) => {
            try {
                await executeAgent(
                    contrib,
                    options.chatContext.history,
                    results.sharedState,
                    chatConfig,
                    options,
                    results
                );
            } catch (error) {
                const err = error instanceof Error ? error : new Error(String(error));
                results.errors.set(contrib.role, err);
                options.onAgentError?.(contrib.role, err);
            }
        });

        await Promise.all(agentPromises);
    }
}

