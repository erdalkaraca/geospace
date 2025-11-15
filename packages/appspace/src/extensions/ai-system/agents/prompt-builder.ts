import type { ExecutionContext } from "../../../core/commandregistry";
import type { ChatMessage, ApiMessage } from "../core/types";
import type { PromptEnhancer, AgentContribution, AgentToolsConfig, PromptEnhancerContribution } from "../core/interfaces";
import { ToolRegistry } from "../tools/tool-registry";
import { contributionRegistry } from "../../../core/contributionregistry";
import { CID_PROMPT_ENHANCERS } from "../core/constants";
import { toolDetector } from "../utils/tool-detector";

export class PromptBuilder {
    private toolRegistry = new ToolRegistry();
    private enhancers: PromptEnhancer[] = [];

    addEnhancer(enhancer: PromptEnhancer): void {
        this.enhancers.push(enhancer);
    }

    private async getSysPrompt(
        contribution: AgentContribution,
        context: ExecutionContext
    ): Promise<string> {
        let sysPrompt = contribution.sysPrompt;
        if (typeof sysPrompt === "function") {
            sysPrompt = sysPrompt();
        }
        
        // The App Support agent should always have a sysPrompt
        if (!sysPrompt || typeof sysPrompt !== 'string') {
            throw new Error(`Agent "${contribution.role}" (${contribution.label}) is missing a system prompt. All agents must provide a sysPrompt.`);
        }

        // Apply prompt enhancers to system prompt instead of user prompt
        // This keeps contextual information in the system prompt (instructions/context)
        // and keeps the user prompt clean (just the user's request)
        const allEnhancers = [
            ...(contribution.promptEnhancers || []),
            ...this.enhancers,
            ...this.getContributedEnhancers()
        ].sort((a, b) => (b.priority || 0) - (a.priority || 0));

        let enhancedSysPrompt = sysPrompt;
        for (const enhancer of allEnhancers) {
            try {
                enhancedSysPrompt = await enhancer.enhance(enhancedSysPrompt, context);
                // Ensure enhancer returns a string
                if (!enhancedSysPrompt || typeof enhancedSysPrompt !== 'string') {
                    enhancedSysPrompt = sysPrompt; // Fallback to original if enhancer returns invalid value
                }
            } catch (err) {
                // If an enhancer fails, log the error but continue with the current prompt
                console.warn(`[PromptBuilder] Enhancer failed:`, err);
                // Continue with the current enhancedSysPrompt value
            }
        }

        return enhancedSysPrompt;
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

    private getContributedEnhancers(): PromptEnhancer[] {
        const contributions = contributionRegistry.getContributions(CID_PROMPT_ENHANCERS) as PromptEnhancerContribution[];
        return contributions.map(contrib => ({
            ...contrib.enhancer,
            priority: contrib.priority ?? contrib.enhancer.priority
        }));
    }

    // Removed enhancePrompt method - prompt enhancers now enhance the system prompt instead
    // This keeps contextual information in system prompts and user prompts clean

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

        // Resolve tools config if it's a function
        let toolsConfig = contribution.tools;
        if (typeof toolsConfig === 'function') {
            toolsConfig = await toolsConfig();
        }

        let tools: import("../core/types").ToolDefinition[] | undefined;
        if (toolsConfig?.enabled) {
            // If smart tool detection is enabled, check if the prompt needs tools
            if (toolsConfig.smartToolDetection) {
                const lastUserMessage = messages[messages.length - 1];
                const userPrompt = lastUserMessage?.content || '';
                
                // Use ML model to detect if tools are needed
                const needsTools = await toolDetector.needsTools(userPrompt);
                
                if (needsTools) {
                    tools = this.toolRegistry.getAvailableTools(
                        context,
                        toolsConfig.commandFilter
                    );
                }
                // If not needed, tools remains undefined (no tools provided)
            } else {
                // Default behavior: always provide tools if enabled
                tools = this.toolRegistry.getAvailableTools(
                    context,
                    toolsConfig.commandFilter
                );
            }
        }

        // Enhance system prompt with contextual information (app state, language context, etc.)
        // Keep user prompt clean - just the user's actual request
        const sysPrompt = await this.getSysPrompt(contribution, context);
        messagesCopy.unshift({
            role: "system",
            content: sysPrompt
        });

        // Calculate userPromptIndex AFTER adding system message (system is at index 0, user is at index 1)
        const lastUserPromptIndex = messagesCopy.length - 1;

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

