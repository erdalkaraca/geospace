import {Signal} from "@lit-labs/signals";
import {TemplateResult} from "lit";
import {publish} from "./events.ts";
import {rootContext} from "./di.ts";
import {SYSTEM_VIEWS} from "./constants.ts";

export const TOPIC_CONTRIBUTEIONS_CHANGED = "events/contributionregistry/contributionsChanged"

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
    view?: string;
    singleton?: boolean;
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

export interface PerspectiveContribution extends Contribution {
    name: string;
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
        publish(TOPIC_CONTRIBUTEIONS_CHANGED, this.contributions)
    }

    getContributions(target: string): Contribution[] {
        if (!this.contributions.has(target)) {
            this.contributions.set(target, [])
        }
        return this.contributions.get(target)!
    }

    getView(name: string): TabContribution | undefined {
        const views = this.getContributions(SYSTEM_VIEWS) as TabContribution[];
        return views.find(v => v.name === name);
    }
}

export const contributionRegistry = new ContributionRegistry()
rootContext.put("contributionRegistry", contributionRegistry)