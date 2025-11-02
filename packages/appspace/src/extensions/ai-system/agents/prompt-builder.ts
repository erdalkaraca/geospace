import type { ExecutionContext } from "../../../core/commandregistry";
import type { ChatMessage, ApiMessage } from "../core/types";
import type { PromptEnhancer, AgentContribution, AgentToolsConfig } from "../core/interfaces";
import { ToolRegistry } from "../tools/tool-registry";

export class PromptBuilder {
    private toolRegistry = new ToolRegistry();
    private enhancers: PromptEnhancer[] = [];

    addEnhancer(enhancer: PromptEnhancer): void {
        this.enhancers.push(enhancer);
    }

    private getSysPrompt(contribution: AgentContribution): string {
        const sysPrompt = contribution.sysPrompt;
        if (typeof sysPrompt === "function") {
            return sysPrompt();
        }
        return sysPrompt;
    }

    private rewriteChatHistoryForAgent(
        history: ApiMessage[],
        targetRole: string
    ): ApiMessage[] {
        return history.map(m => {
            if (m.role === "user") {
                return { role: m.role, content: m.content };
            }
            if (m.role === targetRole) {
                return { role: "assistant", content: m.content };
            }
            return {
                role: "user",
                content: `***Agent '${m.role}' replied:***\n${m.content}`
            };
        });
    }

    private async enhancePrompt(
        prompt: string,
        contribution: AgentContribution,
        context: ExecutionContext
    ): Promise<string> {
        let enhancedPrompt = prompt;

        const allEnhancers = [
            ...(contribution.promptEnhancers || []),
            ...this.enhancers
        ].sort((a, b) => (b.priority || 0) - (a.priority || 0));

        for (const enhancer of allEnhancers) {
            enhancedPrompt = await enhancer.enhance(enhancedPrompt, context);
        }

        return enhancedPrompt;
    }

    async build(
        contribution: AgentContribution,
        messages: ChatMessage[],
        context: ExecutionContext,
        hooks?: { beforeSend?: (messages: ChatMessage[], context: ExecutionContext) => Promise<void> }
    ): Promise<{ messages: ApiMessage[]; userPromptIndex: number; tools?: import("../core/types").ToolDefinition[] }> {
        if (hooks?.beforeSend) {
            await hooks.beforeSend(messages, context);
        }

        const sanitizedMessages = this.sanitizeMessagesForAPI(messages);
        const messagesCopy = this.rewriteChatHistoryForAgent(sanitizedMessages, contribution.role);
        const lastUserPromptIndex = messagesCopy.length - 1;
        let lastUserPrompt = messagesCopy[lastUserPromptIndex];

        let tools: import("../core/types").ToolDefinition[] | undefined;
        if (contribution.tools?.enabled) {
            tools = this.toolRegistry.getAvailableTools(
                context,
                contribution.tools.commandFilter
            );
        }

        const enhancedPrompt = await this.enhancePrompt(
            lastUserPrompt.content,
            contribution,
            context
        );
        lastUserPrompt.content = enhancedPrompt;

        const sysPrompt = this.getSysPrompt(contribution);
        messagesCopy.unshift({
            role: "system",
            content: sysPrompt
        });

        return { messages: messagesCopy, userPromptIndex: lastUserPromptIndex, tools };
    }

    private sanitizeMessageForAPI(message: ChatMessage | ApiMessage): ApiMessage {
        const apiMessage: ApiMessage = {
            role: message.role,
            content: message.content
        };
        
        if ('tool_call_id' in message && message.tool_call_id) {
            apiMessage.tool_call_id = message.tool_call_id;
        }
        
        if ('tool_calls' in message && (message as any).tool_calls) {
            apiMessage.tool_calls = (message as any).tool_calls;
        }
        
        return apiMessage;
    }

    private sanitizeMessagesForAPI(messages: (ChatMessage | ApiMessage)[]): ApiMessage[] {
        return messages.map(msg => this.sanitizeMessageForAPI(msg));
    }
}

