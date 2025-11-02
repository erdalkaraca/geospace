import type { DependencyContext } from "../../../core/di";
import type { ExecutionContext } from "../../../core/commandregistry";
import type { AgentWorkflowOptions, AgentWorkflowResult, AgentContribution } from "../core/interfaces";
import type { ChatMessage, ChatProvider } from "../core/types";
import { ParallelWorkflowStrategy } from "./parallel-workflow";
import { SequentialWorkflowStrategy } from "./sequential-workflow";
import { ConditionalWorkflowStrategy } from "./conditional-workflow";
import type { IWorkflowStrategy } from "./workflow-strategy";
import { TOPIC_AGENT_WORKFLOW_STARTED, TOPIC_AGENT_WORKFLOW_COMPLETE, TOPIC_AGENT_WORKFLOW_ERROR } from "../core/constants";
import { publish } from "../../../core/events";

export class WorkflowEngine {
    private strategies = new Map<string, IWorkflowStrategy>([
        ['parallel', new ParallelWorkflowStrategy()],
        ['sequential', new SequentialWorkflowStrategy()],
        ['conditional', new ConditionalWorkflowStrategy()]
    ]);

    registerStrategy(name: string, strategy: IWorkflowStrategy): void {
        this.strategies.set(name, strategy);
    }

    async execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        executeAgent: (
            contrib: AgentContribution,
            messages: ChatMessage[],
            sharedState: ExecutionContext,
            chatConfig: ChatProvider,
            options: AgentWorkflowOptions,
            results: AgentWorkflowResult
        ) => Promise<ChatMessage | null>
    ): Promise<AgentWorkflowResult> {
        const workflowId = `workflow-${Date.now()}-${Math.random()}`;
        const execution = options.execution || 'parallel';
        const sharedState = options.sharedState || {};
        const results: AgentWorkflowResult = {
            messages: new Map<string, ChatMessage>(),
            sharedState: { ...sharedState },
            errors: new Map<string, Error>()
        };

        publish(TOPIC_AGENT_WORKFLOW_STARTED, { workflowId, options });

        try {
            const strategy = this.strategies.get(execution);
            if (!strategy) {
                throw new Error(`Unknown workflow execution strategy: ${execution}`);
            }

            await strategy.execute(contributions, options, results, executeAgent);

            publish(TOPIC_AGENT_WORKFLOW_COMPLETE, { workflowId, results });
            return results;
        } catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            publish(TOPIC_AGENT_WORKFLOW_ERROR, { workflowId, error: err });
            throw err;
        }
    }
}

