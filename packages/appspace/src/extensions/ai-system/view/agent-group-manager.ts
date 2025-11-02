import type { ChatMessage, UserAttentionRequest } from "../core/types";
import type { AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";

export interface AgentResponseInfo {
    role: string;
    label: string;
    icon: string;
    status: 'streaming' | 'completed' | 'error';
    message?: ChatMessage;
    messageIndex?: number;
}

export interface AgentResponseGroup {
    id: string;
    sessionId: string;
    userMessageIndex: number;
    userMessage: ChatMessage;
    timestamp: Date;
    agents: Map<string, AgentResponseInfo>;
    messageIndices: Map<string, number>;
}

export class AgentGroupManager {
    private groups = new Map<string, AgentResponseGroup>();
    private currentGroupId?: string;
    private pausedWorkflows = new Map<string, { token: string; options: AgentWorkflowOptions; results: AgentWorkflowResult }>();

    createGroup(
        sessionId: string,
        userMessageIndex: number,
        userMessage: ChatMessage,
        roles: string[],
        getAgentMetadata: (role: string) => { label: string; icon: string }
    ): string {
        const groupId = `group-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        this.currentGroupId = groupId;

        const group: AgentResponseGroup = {
            id: groupId,
            sessionId,
            userMessageIndex,
            userMessage,
            timestamp: new Date(),
            agents: new Map(),
            messageIndices: new Map()
        };

        roles.forEach(role => {
            const { label, icon } = getAgentMetadata(role);
            group.agents.set(role, {
                role,
                label,
                icon,
                status: 'streaming'
            });
        });

        this.groups.set(groupId, group);
        return groupId;
    }

    getGroup(groupId: string): AgentResponseGroup | undefined {
        return this.groups.get(groupId);
    }

    updateAgentStatus(groupId: string, role: string, status: 'streaming' | 'completed' | 'error', message?: ChatMessage, messageIndex?: number): void {
        const group = this.groups.get(groupId);
        if (!group) return;

        const agentInfo = group.agents.get(role);
        if (agentInfo) {
            agentInfo.status = status;
            if (message) {
                agentInfo.message = message;
            }
            if (messageIndex !== undefined) {
                agentInfo.messageIndex = messageIndex;
                group.messageIndices.set(role, messageIndex);
            }
        }
    }

    getGroupsForSession(sessionId: string): AgentResponseGroup[] {
        return Array.from(this.groups.values())
            .filter(g => g.sessionId === sessionId);
    }

    findGroupForUserMessage(sessionId: string, userMessageIndex: number, userMessage: ChatMessage): AgentResponseGroup | undefined {
        return Array.from(this.groups.values())
            .find(g => 
                g.sessionId === sessionId && 
                g.userMessageIndex === userMessageIndex && 
                g.userMessage === userMessage
            );
    }

    findGroupForMessage(sessionId: string, messageRole: string, messageIndex: number): AgentResponseGroup | undefined {
        return Array.from(this.groups.values())
            .find(g => 
                g.sessionId === sessionId && 
                g.messageIndices.get(messageRole) === messageIndex
            );
    }

    getCurrentGroupId(): string | undefined {
        return this.currentGroupId;
    }

    setCurrentGroupId(groupId: string | undefined): void {
        this.currentGroupId = groupId;
    }

    clearCurrentGroup(): void {
        this.currentGroupId = undefined;
    }

    storePausedWorkflow(token: string, options: AgentWorkflowOptions, results: AgentWorkflowResult): void {
        this.pausedWorkflows.set(token, { token, options, results });
    }

    getPausedWorkflow(token: string): { token: string; options: AgentWorkflowOptions; results: AgentWorkflowResult } | undefined {
        return this.pausedWorkflows.get(token);
    }

    getAllPausedWorkflows(): { token: string; options: AgentWorkflowOptions; results: AgentWorkflowResult }[] {
        return Array.from(this.pausedWorkflows.values());
    }

    clearPausedWorkflow(token: string): void {
        this.pausedWorkflows.delete(token);
    }

    clearAllPausedWorkflows(): void {
        this.pausedWorkflows.clear();
    }

    getAllGroups(): AgentResponseGroup[] {
        return Array.from(this.groups.values());
    }

    clearAll(): void {
        this.groups.clear();
        this.currentGroupId = undefined;
    }
}

