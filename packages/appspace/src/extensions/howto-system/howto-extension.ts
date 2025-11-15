import { createLogger } from '../../core/logger';
import { rootContext } from '../../core/di';
import { howToService } from './howto-service';
import { HOWTO_CONTRIBUTION_TARGET } from './howto-service';
import { TOPIC_SHOW_HOWTO_PANEL, TOPIC_TOGGLE_HOWTO_PANEL } from './k-howto-panel';
import { registerAll } from '../../core/commandregistry';
import { publish } from '../../core/events';
import { TOOLBAR_BOTTOM_END } from '../../core/constants';
import './k-howto-panel';

const logger = createLogger('HowToExtension');

/**
 * HowTo System Extension
 * 
 * Provides a system for registering and displaying step-by-step workflows
 * that guide users through specific processes with pre and post condition checks.
 * 
 * Features:
 * - Register HowToContributions via contribution registry
 * - Floating, draggable UI panel
 * - Sequential step execution
 * - Pre and post condition validation
 * - Step status tracking
 */
export default function howToExtension(context: any) {
    logger.info('HowTo system extension loaded');

    // Register the HowTo service in the dependency injection context
    rootContext.put('howToService', howToService);

    // Ensure the panel is added to the DOM
    const ensurePanelInDOM = () => {
        // Check if panel already exists
        if (document.querySelector('k-howto-panel')) {
            return;
        }

        // Create and append the panel
        const panel = document.createElement('k-howto-panel');
        document.body.appendChild(panel);
        logger.info('HowTo panel added to DOM');
    };

    // Add panel to DOM - use requestAnimationFrame to ensure DOM is ready
    if (document.body) {
        requestAnimationFrame(() => {
            ensurePanelInDOM();
        });
    } else {
        // Wait for DOM to be ready
        const checkDOM = () => {
            if (document.body) {
                ensurePanelInDOM();
            } else {
                requestAnimationFrame(checkDOM);
            }
        };
        requestAnimationFrame(checkDOM);
    }

    // Register command to show/toggle the HowTo panel
    registerAll({
        command: {
            id: 'howto.show-panel',
            name: 'Show HowTo Panel',
            description: 'Shows the HowTo workflows panel',
            icon: 'list-check',
            parameters: []
        },
        handler: {
            execute: () => {
                publish(TOPIC_SHOW_HOWTO_PANEL, null);
            }
        }
    });

    registerAll({
        command: {
            id: 'howto.toggle-panel',
            name: 'Toggle HowTo Panel',
            description: 'Toggles the visibility of the HowTo workflows panel',
            icon: 'list-check',
            keyBinding: 'CTRL+SHIFT+H',
            parameters: []
        },
        handler: {
            execute: () => {
                publish(TOPIC_TOGGLE_HOWTO_PANEL, null);
            }
        },
        contribution: {
            target: TOOLBAR_BOTTOM_END,
            icon: 'list-check',
            label: 'HowTo',
        }
    });

    logger.info('HowTo system extension initialized');
}

// Export the service and types for direct imports
export { howToService, HOWTO_CONTRIBUTION_TARGET } from './howto-service';
export type { HowToContribution, HowToStep, ConditionFunction } from './howto-contribution';

