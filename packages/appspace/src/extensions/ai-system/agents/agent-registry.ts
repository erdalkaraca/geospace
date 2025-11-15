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

    getMatchingAgents(
        context: ExecutionContext,
        roles?: string[]
    ): AgentContribution[] {
        const contributions = this.getAgentContributions();
        
        if (contributions.length === 0) {
            throw new Error('No agents are registered. The App Support agent should be available from the AI system extension.');
        }
        
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
                const requestedRoles = roles.join(', ');
                throw new Error(`No agents found for requested roles: ${requestedRoles}. Available agents: ${contributions.map(c => c.role).join(', ')}`);
            }
        } else {
            activeContributions = this.filterAndSortAgents(activeContributions, context);
            
            if (activeContributions.length === 0) {
                throw new Error(`No agents can handle the current context. Available agents: ${contributions.map(c => c.role).join(', ')}`);
            }
        }

        return activeContributions;
    }
}

