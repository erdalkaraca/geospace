import { Contribution } from '../../core/contributionregistry';

/**
 * HowTo Contribution System
 * 
 * Allows extensions to register step-by-step workflows that guide users
 * through specific processes with pre and post condition checks.
 */

/**
 * Condition function that checks if a requirement is met or outcome is achieved.
 * Returns a promise that resolves to true if the condition is satisfied.
 */
export type ConditionFunction = () => Promise<boolean> | boolean;

/**
 * A single step in a HowTo workflow
 */
export interface HowToStep {
    /** Unique identifier for this step */
    id: string;
    
    /** Human-readable title of the step */
    title: string;
    
    /** Detailed description of what the user should do in this step */
    description: string;
    
    /** 
     * Pre-condition check: verifies that requirements are met before this step can be executed.
     * If this returns false, the step cannot be started.
     */
    preCondition?: ConditionFunction;
    
    /** 
     * Post-condition check: verifies that the step was completed successfully.
     * If this returns false, the step is not considered complete.
     */
    postCondition?: ConditionFunction;
    
    /** Optional command to execute when the step is activated */
    command?: string;
    
    /** Optional command parameters */
    commandParams?: Record<string, any>;
    
    /** Whether this step is optional */
    optional?: boolean;
}

/**
 * Context provided to HowTo initialization function
 */
export interface HowToContext {
    /** Callback to notify the panel that conditions should be re-checked */
    requestUpdate: () => void;
    
    /** The contribution ID of this HowTo */
    contributionId: string;
}

/**
 * Initialization function for a HowTo
 * Allows the HowTo to set up its own subscriptions and manage its lifecycle
 */
export type HowToInitializeFunction = (context: HowToContext) => (() => void) | void;

/**
 * A HowTo Contribution defines a complete workflow with multiple steps.
 * Extends Contribution to work with the contribution registry.
 */
export interface HowToContribution extends Contribution {
    /** Unique identifier for this HowTo */
    id: string;
    
    /** Human-readable title of the workflow (can be a function for dynamic values) */
    title: string | (() => string);
    
    /** Description of what this workflow helps accomplish (can be a function for dynamic values) */
    description?: string | (() => string);
    
    /** Icon identifier (FontAwesome or custom icon) */
    icon?: string;
    
    /** List of steps in the workflow */
    steps: HowToStep[];
    
    /** Optional category for grouping related workflows */
    category?: string;
    
    /** 
     * Optional initialization function that runs when the HowTo is started.
     * Can set up subscriptions, listeners, etc.
     * Should return a cleanup function (optional) that will be called when the HowTo is closed.
     */
    initialize?: HowToInitializeFunction;
}

