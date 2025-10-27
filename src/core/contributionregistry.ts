import {Signal} from "@lit-labs/signals";
import {TemplateResult} from "lit";
import {publish} from "./events.ts";
import {rootContext} from "./di.ts";

export const TOPIC_CONTRIBUTEIONS_CHANGED = "events/contributionregistry/contributionsChanged"

export interface ContributionChangeEvent {
    target: string;
    contributions: Contribution[];
}

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
    html: string | (() => TemplateResult)
}

export interface TabContribution extends Contribution {
    name: string;
    editorId?: string;
    closable?: boolean;
    noOverflow?: boolean;
    component?: (id: string) => TemplateResult;
}

export interface PaneContribution extends Contribution {
    name: string;
    size?: number;
    minSize?: number;
    maxSize?: number;
    order?: number;
    component: () => TemplateResult;
}

class ContributionRegistry {
    private contributions: Map<string, Contribution[]> = new Map();

    registerContribution<T extends Contribution>(target: string, contribution: T) {
        const targetSlot = this.getContributions(target)!
        if (contribution.disabled instanceof Function) {
            const callback = contribution.disabled as () => boolean
            contribution.disabled = new Signal.Computed<boolean>(callback)
        }
        targetSlot.push(contribution);
        publish(TOPIC_CONTRIBUTEIONS_CHANGED, { target, contributions: targetSlot } as ContributionChangeEvent)
    }

    getContributions(target: string): Contribution[] {
        if (!this.contributions.has(target)) {
            this.contributions.set(target, [])
        }
        return this.contributions.get(target)!
    }
}

export const contributionRegistry = new ContributionRegistry()
rootContext.put("contributionRegistry", contributionRegistry)