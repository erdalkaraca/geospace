import type { IWorkflowStrategy } from "./workflow-strategy";
import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";
import type { ChatMessage, ChatProvider } from "../core/types";
import type { ExecutionContext } from "../../../core/commandregistry";

export class ConditionalWorkflowStrategy implements IWorkflowStrategy {
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

        let currentMessages = [...options.chatContext.history];
        let accumulatedState = { ...results.sharedState };

        for (const contrib of contributions) {
            try {
                const agentContext = this.createAgentContextWithPreviousAgents(
                    accumulatedState,
                    options,
                    results
                );

                if (contrib.canHandle && !contrib.canHandle(agentContext)) {
                    continue;
                }

                const finalMessage = await executeAgent(
                    contrib,
                    currentMessages,
                    accumulatedState,
                    chatConfig,
                    options,
                    results
                );

                if (!finalMessage) {
                    break;
                }

                const updated = this.updateWorkflowState(
                    finalMessage,
                    currentMessages,
                    accumulatedState,
                    agentContext,
                    results
                );
                currentMessages = updated.currentMessages;
                accumulatedState = updated.accumulatedState;
            } catch (error) {
                const err = error instanceof Error ? error : new Error(String(error));
                results.errors.set(contrib.role, err);
                options.onAgentError?.(contrib.role, err);
            }
        }
    }

    private createAgentContextWithPreviousAgents(
        accumulatedState: ExecutionContext,
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult
    ): ExecutionContext {
        return {
            ...accumulatedState,
            ...options.callContext.getProxy(),
            previousAgents: Array.from(results.messages.entries()).map(([role, msg]) => ({
                role,
                content: msg.content
            }))
        };
    }

    private updateWorkflowState(
        finalMessage: ChatMessage,
        currentMessages: ChatMessage[],
        accumulatedState: ExecutionContext,
        agentContext: ExecutionContext,
        results: AgentWorkflowResult
    ): { currentMessages: ChatMessage[], accumulatedState: ExecutionContext } {
        currentMessages.push(finalMessage);
        accumulatedState = { ...accumulatedState, ...agentContext, message: finalMessage };
        results.sharedState = accumulatedState;
        return { currentMessages, accumulatedState };
    }
}

