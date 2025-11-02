import { contributionRegistry } from "../../../core/contributionregistry";
import type { ExecutionContext } from "../../../core/commandregistry";
import type { AgentContribution } from "../core/interfaces";
import { CID_AGENTS } from "../core/constants";

export class AgentRegistry {
    getAgentContributions(): AgentContribution[] {
        return contributionRegistry.getContributions(CID_AGENTS) as AgentContribution[];
    }

    filterAndSortAgents(
        contributions: AgentContribution[],
        context: ExecutionContext
    ): AgentContribution[] {
        return contributions
            .filter(contrib => {
                if (contrib.canHandle) {
                    return contrib.canHandle(context);
                }
                return true;
            })
            .sort((a, b) => (b.priority || 0) - (a.priority || 0));
    }

    getDefaultAgent(): AgentContribution {
        return {
            role: 'assistant',
            label: 'Assistant',
            description: 'General assistant',
            sysPrompt: 'You are a helpful AI assistant.',
            priority: 0,
            tools: {
                enabled: true
            }
        } as AgentContribution;
    }

    getMatchingAgents(
        context: ExecutionContext,
        roles?: string[]
    ): AgentContribution[] {
        const contributions = this.getAgentContributions();
        
        let activeContributions = contributions.filter(contrib => {
            if (roles && !roles.includes(contrib.role)) {
                return false;
            }
            if (contrib.canHandle) {
                return contrib.canHandle(context);
            }
            return true;
        });
        
        if (roles && roles.length > 0) {
            activeContributions = activeContributions.sort(
                (a, b) => (b.priority || 0) - (a.priority || 0)
            );
            
            if (activeContributions.length === 0) {
                const defaultRole = roles.includes('assistant') ? 'assistant' : roles[0];
                if (defaultRole === 'assistant') {
                    activeContributions.push(this.getDefaultAgent());
                } else {
                    const matching = contributions.find(c => c.role === defaultRole);
                    if (matching) {
                        activeContributions.push(matching);
                    } else {
                        activeContributions.push(this.getDefaultAgent());
                    }
                }
            }
        } else {
            activeContributions = this.filterAndSortAgents(activeContributions, context);
            
            if (activeContributions.length === 0) {
                activeContributions.push(this.getDefaultAgent());
            }
        }

        return activeContributions;
    }
}

