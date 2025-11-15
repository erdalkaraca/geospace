# HowTo System Extension

The HowTo System provides a framework for creating step-by-step workflows that guide users through specific processes. It features a floating, draggable UI panel that displays workflows with pre and post condition checks.

## Features

- **Register HowToContributions**: Extensions can register workflows with multiple steps
- **Floating UI Panel**: Always-on-top, draggable panel that hosts the workflow steps
- **Sequential Step Execution**: Steps are executed one at a time in order
- **Pre and Post Conditions**: Each step can have conditions that check requirements and outcomes
- **Step Status Tracking**: Visual indicators show step status (pending, active, completed, failed, skipped)

## Usage

### Registering a HowTo Contribution

From any extension, you can register a HowTo contribution via the contribution registry:

```typescript
import { contributionRegistry } from '../../core/contributionregistry';
import { HOWTO_CONTRIBUTION_TARGET } from '../../extensions/howto-system/howto-extension';
import type { HowToContribution } from '../../extensions/howto-system/howto-extension';

export default function myExtension({ contributionRegistry }: any) {
    // Register a HowTo contribution
    contributionRegistry.registerContribution<HowToContribution>(HOWTO_CONTRIBUTION_TARGET, {
        id: 'my-extension.setup-workspace',
        title: 'Setup Workspace',
        description: 'Guide to set up your workspace for the first time',
        icon: 'folder-open',
        label: 'Setup Workspace', // Required by Contribution interface
        steps: [
            {
                id: 'step-1',
                title: 'Create Project Folder',
                description: 'Create a new folder for your project',
                preCondition: async () => {
                    // Check if workspace is selected
                    const workspace = await workspaceService.getWorkspace();
                    return workspace !== undefined;
                },
                postCondition: async () => {
                    // Check if project folder exists
                    const workspace = await workspaceService.getWorkspace();
                    if (!workspace) return false;
                    const projectFolder = await workspace.getChild('my-project');
                    return projectFolder !== undefined;
                },
                command: 'workspace.create-folder',
                commandParams: { name: 'my-project' }
            },
            {
                id: 'step-2',
                title: 'Initialize Configuration',
                description: 'Create a configuration file',
                preCondition: async () => {
                    // Previous step must be completed
                    return true; // This will be checked automatically
                },
                postCondition: async () => {
                    const workspace = await workspaceService.getWorkspace();
                    if (!workspace) return false;
                    const configFile = await workspace.getChild('config.json');
                    return configFile !== undefined;
                },
                command: 'workspace.create-file',
                commandParams: { name: 'config.json', content: '{}' }
            }
        ]
    });
}
```

### Using Conditions

Conditions are functions that return a boolean or Promise<boolean>:

```typescript
// Simple synchronous condition
preCondition: () => {
    return someVariable === true;
}

// Async condition
preCondition: async () => {
    const result = await someAsyncCheck();
    return result.isValid;
}

// Condition with error handling
postCondition: async () => {
    try {
        const file = await workspaceService.getFile('path/to/file');
        return file !== undefined;
    } catch {
        return false;
    }
}
```

### Step Commands

Steps can optionally execute commands when activated:

```typescript
{
    id: 'step-1',
    title: 'Open Editor',
    description: 'Open the code editor',
    command: 'editor.open',
    commandParams: {
        file: 'src/main.ts'
    }
}
```

### Optional Steps

Steps can be marked as optional, allowing users to skip them:

```typescript
{
    id: 'step-3',
    title: 'Install Dependencies (Optional)',
    description: 'Install optional dependencies',
    optional: true,
    // ...
}
```

## HowTo Panel UI

The floating panel provides:

- **Workflow List**: Shows all registered workflows
- **Step List**: Displays all steps in the active workflow
- **Status Indicators**: Visual feedback for each step's status
- **Condition Checks**: Shows whether pre/post conditions are met
- **Action Buttons**: Execute or skip steps
- **Drag to Move**: Click and drag the header to reposition

### Showing the Panel

The panel is hidden by default. You can show it using:

1. **Toolbar Button**: Click the "HowTo" button in the bottom right toolbar
2. **Keyboard Shortcut**: Press `Ctrl+Shift+H` to toggle the panel
3. **Command**: Execute the `howto.show-panel` or `howto.toggle-panel` command
4. **Command Palette**: Search for "Show HowTo Panel" or "Toggle HowTo Panel"

The panel visibility state is persisted in localStorage, so it will remember whether it was visible when you reload the page.

## API Reference

### HowToService

The HowToService manages HowTo contributions by reading from the contribution registry:

```typescript
class HowToService {
    // Get a contribution by ID
    getContribution(contributionId: string): HowToContribution | undefined;
    
    // Get all contributions
    getAllContributions(): HowToContribution[];
    
    // Get contributions by category
    getContributionsByCategory(category: string): HowToContribution[];
    
    // Check if a contribution exists
    hasContribution(contributionId: string): boolean;
}
```

The service is registered in the dependency injection context and can be accessed via:

```typescript
export default function myExtension({ howToService }: any) {
    const contributions = howToService.getAllContributions();
}
```

Or imported directly:

```typescript
import { howToService } from '../../extensions/howto-system/howto-extension';
```

### HowToContribution

```typescript
interface HowToContribution {
    id: string;
    title: string;
    description?: string;
    icon?: string;
    category?: string;
    steps: HowToStep[];
}
```

### HowToStep

```typescript
interface HowToStep {
    id: string;
    title: string;
    description: string;
    preCondition?: ConditionFunction;
    postCondition?: ConditionFunction;
    command?: string;
    commandParams?: Record<string, any>;
    optional?: boolean;
}
```

### ConditionFunction

```typescript
type ConditionFunction = () => Promise<boolean> | boolean;
```

## Events

The system uses the contribution registry's events. Subscribe to contribution changes:

```typescript
import { TOPIC_CONTRIBUTEIONS_CHANGED } from '../../core/contributionregistry';
import { HOWTO_CONTRIBUTION_TARGET } from '../../extensions/howto-system/howto-extension';
import { subscribe } from '../../core/events';

subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event) => {
    if (event.target === HOWTO_CONTRIBUTION_TARGET) {
        console.log('HowTo contributions changed:', event.contributions);
    }
});
```

## Contribution Target

All HowTo contributions must be registered to the target:

```typescript
import { HOWTO_CONTRIBUTION_TARGET } from '../../extensions/howto-system/howto-extension';

// Use this constant when registering contributions
contributionRegistry.registerContribution(HOWTO_CONTRIBUTION_TARGET, contribution);
```

