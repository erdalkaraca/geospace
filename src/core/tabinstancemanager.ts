import {TabContribution} from "./contributionregistry.ts";

interface TabInstance {
    element: HTMLElement;
    contribution: TabContribution;
    currentContainer?: string;
}

class TabInstanceManager {
    private instances: Map<string, TabInstance> = new Map();

    getInstanceKey(contribution: TabContribution, containerId: string): string {
        if (contribution.singleton ?? true) {
            return contribution.name;
        } else {
            return `${containerId}-${contribution.name}`;
        }
    }

    getInstance(instanceKey: string): TabInstance | undefined {
        return this.instances.get(instanceKey);
    }

    createInstance(instanceKey: string, contribution: TabContribution): TabInstance {
        const instance: TabInstance = {
            element: document.createElement('div'),
            contribution,
            currentContainer: undefined
        };
        
        this.instances.set(instanceKey, instance);
        return instance;
    }

    getOrCreateInstance(instanceKey: string, contribution: TabContribution): TabInstance {
        const existing = this.getInstance(instanceKey);
        if (existing) {
            return existing;
        }
        return this.createInstance(instanceKey, contribution);
    }

    moveToContainer(instanceKey: string, containerId: string): void {
        const instance = this.getInstance(instanceKey);
        if (instance) {
            instance.currentContainer = containerId;
        }
    }

    releaseInstance(instanceKey: string): void {
        const instance = this.instances.get(instanceKey);
        if (instance) {
            instance.currentContainer = undefined;
        }
    }

    removeInstance(instanceKey: string): void {
        const instance = this.instances.get(instanceKey);
        if (instance && instance.element.parentElement) {
            instance.element.remove();
        }
        this.instances.delete(instanceKey);
    }
}

export const tabInstanceManager = new TabInstanceManager();

