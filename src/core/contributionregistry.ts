import {Signal} from "@lit-labs/signals";

export interface Contribution {
    target?: string;
    label: string;
    icon?: string;
    slot?: string;
    disabled?: (() => boolean) | Signal.Computed<boolean>;
}

export interface CommandContribution extends Contribution {
    command: string;
}

export interface HTMLContribution extends Contribution {
    html: string
}

class ContributionRegistry {
    private contributions: Map<string, Contribution[]> = new Map();

    registerContribution<T extends Contribution>(target: string, contribution: T) {
        if (!this.contributions.has(target)) {
            this.contributions.set(target, [])
        }
        const targetSlot = this.contributions.get(target)!
        if (contribution.disabled instanceof Function) {
            const callback = contribution.disabled as () => boolean
            contribution.disabled = new Signal.Computed<boolean>(callback)
        }
        targetSlot.push(contribution);
    }


    getContributions(target: string): Contribution[] {
        return (this.contributions.get(target) || []);
    }
}

export const contributionRegistry = new ContributionRegistry()
