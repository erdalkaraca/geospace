import { contributionRegistry, TOPIC_CONTRIBUTEIONS_CHANGED } from '../../core/contributionregistry';
import { HowToContribution, HowToStep } from './howto-contribution';
import { subscribe } from '../../core/events';
import { createLogger } from '../../core/logger';
import { Signal } from '@lit-labs/signals';

const logger = createLogger('HowToService');

export const HOWTO_CONTRIBUTION_TARGET = 'system.howtos';

/**
 * HowTo Service
 * 
 * Manages HowTo contributions by reading from the contribution registry.
 * Provides methods to retrieve and manage workflows.
 */
export class HowToService {
    private contributions: Map<string, HowToContribution> = new Map();

    constructor() {
        // Load initial contributions
        this.loadContributions();

        // Subscribe to contribution changes
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: any) => {
            if (event.target === HOWTO_CONTRIBUTION_TARGET) {
                this.loadContributions();
            }
        });
    }

    /**
     * Load contributions from the contribution registry
     */
    private loadContributions(): void {
        const contributions = contributionRegistry.getContributions(HOWTO_CONTRIBUTION_TARGET) as HowToContribution[];
        
        this.contributions.clear();
        
        for (const contribution of contributions) {
            // Validate contribution
            if (!contribution.id) {
                logger.warn('HowTo contribution missing id, skipping');
                continue;
            }

            if (!contribution.label) {
                // Use title as label if label is not provided
                // Handle both string and function types
                const title = typeof contribution.title === 'function' 
                    ? contribution.title() 
                    : contribution.title;
                contribution.label = title;
            }

            if (!contribution.steps || contribution.steps.length === 0) {
                logger.warn(`HowTo contribution "${contribution.id}" has no steps, skipping`);
                continue;
            }

            // Validate step IDs are unique
            const stepIds = new Set<string>();
            for (const step of contribution.steps) {
                if (stepIds.has(step.id)) {
                    logger.warn(`HowTo contribution "${contribution.id}" has duplicate step ID: "${step.id}"`);
                    continue;
                }
                stepIds.add(step.id);
            }

            this.contributions.set(contribution.id, contribution);
            const title = typeof contribution.title === 'function' 
                ? contribution.title() 
                : contribution.title;
            logger.debug(`Loaded HowTo contribution: ${title} (${contribution.id})`);
        }

        logger.info(`Loaded ${this.contributions.size} HowTo contributions`);
    }

    /**
     * Get a HowTo Contribution by ID
     * 
     * @param contributionId The ID of the contribution
     * @returns The contribution or undefined if not found
     */
    getContribution(contributionId: string): HowToContribution | undefined {
        return this.contributions.get(contributionId);
    }

    /**
     * Get all registered HowTo Contributions
     * 
     * @returns Array of all contributions
     */
    getAllContributions(): HowToContribution[] {
        return Array.from(this.contributions.values());
    }

    /**
     * Get HowTo Contributions by category
     * 
     * @param category The category to filter by
     * @returns Array of contributions in the category
     */
    getContributionsByCategory(category: string): HowToContribution[] {
        return Array.from(this.contributions.values())
            .filter(contrib => contrib.category === category);
    }

    /**
     * Check if a contribution exists
     * 
     * @param contributionId The ID of the contribution
     * @returns True if the contribution exists
     */
    hasContribution(contributionId: string): boolean {
        return this.contributions.has(contributionId);
    }
}

export const howToService = new HowToService();

