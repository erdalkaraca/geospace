import {Signal} from "@lit-labs/signals";
import {TemplateResult} from "lit";
import {publish} from "./events";
import {rootContext} from "./di";

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
    params?: Record<string, any>;
    showLabel?: boolean;
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

export interface IconContribution extends Contribution {
    mappings: Record<string, string>;
    priority?: number;
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

    getContributions<T extends Contribution>(target: string): T[] {
        if (!this.contributions.has(target)) {
            this.contributions.set(target, [])
        }
        return this.contributions.get(target)! as T[]
    }
}

export const contributionRegistry = new ContributionRegistry()
rootContext.put("contributionRegistry", contributionRegistry)