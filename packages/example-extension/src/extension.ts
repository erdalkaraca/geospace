/**
 * Example Extension for app!space marketplace extensions
 * 
 * This is a template extension that demonstrates how to create
 * a marketplace extension package.
 * 
 * The extension exports a default function that receives the UI context
 * and can register commands, contributions, and other functionality.
 * 
 * The context provides access to framework services. For a complete list
 * of available services, see the appspace framework documentation.
 */

/**
 * Default export function that initializes the extension.
 * This function is called when the extension is loaded.
 * 
 * @param context - The UI context (DependencyContext) provided by the framework.
 *                  Available services include:
 *                  - commandRegistry - Register commands
 *                  - extensionRegistry - Access extension registry
 *                  - toastInfo, toastError - Show notifications
 *                  - rootContext - Access root dependency context
 *                  - html, render - Lit templating
 *                  - And more...
 */
export default function exampleExtension({ commandRegistry, toastInfo }: any) {

    console.log('Example extension loaded');

    // Register a command
    if (commandRegistry && commandRegistry.registerAll) {
        commandRegistry.registerAll({
            command: {
                id: 'example-extension.hello',
                name: 'Say Hello',
                description: 'Example command that shows a greeting',
                parameters: []
            },
            handler: {
                execute: (_context: any) => {
                    if (toastInfo) {
                        toastInfo('Hello from Example Extension!');
                    } else {
                        console.log('Hello from Example Extension!');
                    }
                }
            }
        });
    }

    // You can register more functionality here:
    // - Commands via commandRegistry.registerAll()
    // - UI contributions via contributionRegistry (add to destructuring if needed)
    // - Services via rootContext.put() (add to destructuring if needed)
    // - Event handlers via subscribe() / publish() (add to destructuring if needed)
    // - And more - add any needed services to the destructured parameters
}

