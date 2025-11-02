import type { ExecutionContext } from "../../../core/commandregistry";
import type { ChatMessage, UserAttentionRequest } from "../core/types";
import type { MessageProcessor as IMessageProcessor, AgentContribution } from "../core/interfaces";

export class MessageProcessorService {
    private processors: IMessageProcessor[] = [];

    addProcessor(processor: IMessageProcessor): void {
        this.processors.push(processor);
    }

    private getSortedProcessors(): IMessageProcessor[] {
        return [...this.processors].sort(
            (a, b) => (b.priority || 0) - (a.priority || 0)
        );
    }

    async process(
        message: ChatMessage,
        contribution: AgentContribution,
        context: ExecutionContext
    ): Promise<ChatMessage> {
        let processedMessage = { ...message };

        const allProcessors = [
            ...(contribution.messageProcessors || []),
            ...this.processors
        ].sort((a, b) => (b.priority || 0) - (a.priority || 0));

        for (const processor of allProcessors) {
            processedMessage = await processor.process(processedMessage, context);
        }

        const requiresAttention = processedMessage.actions?.some(a => a.requiresAttention) || 
                                  processedMessage.attentionRequests?.some(r => r.requiresAction) ||
                                  false;

        return {
            ...processedMessage,
            requiresAttention
        };
    }

    private checkRequiresAttention(message: ChatMessage): boolean {
        return message.actions?.some(a => a.requiresAttention) || 
               message.attentionRequests?.some(r => r.requiresAction) ||
               false;
    }
}

