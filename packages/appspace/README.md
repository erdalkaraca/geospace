# @kispace-io/appspace

A highly modular and extensible web application framework for building IDE-like applications with a plugin architecture, AI integration, and comprehensive workspace management.

## Overview

Appspace is a framework that provides a complete foundation for building modern web applications with:

- **Modular Architecture**: Extensible through a plugin system
- **Application Loader**: Dynamic app loading and lifecycle management
- **Contribution System**: Declarative UI and feature contributions
- **Command System**: Context-aware command execution
- **AI Integration**: Built-in AI system with agent support and tool execution
- **Workspace Management**: File system access and workspace handling
- **Extension Marketplace**: Install and manage extensions dynamically

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                         │
│  (Apps built on the framework: geospace, custom apps)      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    App Loader Service                         │
│  - App registration and lifecycle                            │
│  - Extension management                                      │
│  - Contribution registration                                 │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Extensions   │  │ Contributions│  │  Commands    │
│  Registry    │  │   Registry   │  │   Registry   │
└──────────────┘  └──────────────┘  └──────────────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Core Services Layer                        │
│  - Workspace Service    - Editor Registry                    │
│  - Settings Service     - Task Service                       │
│  - Event System         - Dependency Injection               │
│  - Logger              - Python Service                      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    UI Component Layer                         │
│  - Parts (k-part, k-container, k-tabs, k-toolbar)           │
│  - Components (k-filebrowser, k-extensions, etc.)          │
│  - Widgets (k-widget, k-icon, etc.)                         │
│  - Standard App Layout (k-standard-app)                     │
└─────────────────────────────────────────────────────────────┘
```

### Core Concepts

#### 1. Applications

Applications are self-contained units that define their UI, extensions, and contributions. They implement the `AppDefinition` interface:

```typescript
interface AppDefinition {
    id: string;
    name: string;
    version: string;
    description?: string;
    extensions?: string[];           // Required framework extensions
    contributions?: AppContributions; // UI and feature contributions
    initialize?: () => void | Promise<void>;
    render?: () => TemplateResult;   // Custom root component
    dispose?: () => void | Promise<void>;
}
```

**Key Features:**
- Apps can be loaded dynamically from URLs
- Automatic extension lifecycle management
- Declarative contribution registration
- Custom initialization and cleanup

#### 2. Extensions

Extensions are modular plugins that add functionality to the framework. They can:
- Register commands, contributions, and services
- Add UI components and tabs
- Integrate with the AI system
- Provide new capabilities

**Extension Structure:**
```typescript
interface Extension {
    id: string;
    name: string;
    description?: string;
    loader?: () => any;        // Dynamic import function
    url?: string;              // URL to load from
    dependencies?: string[];   // Other extensions required
    experimental?: boolean;
    version?: string;
}
```

**Built-in Extensions:**
- `ai-system`: AI chat interface, agents, and LLM integration
- `rag-system`: Document indexing and semantic search
- `monaco-editor`: Code editor with syntax highlighting
- `notebook`: Interactive notebook support
- `pyterminal`: Python terminal integration
- `git`: Git integration
- `webdav`: WebDAV file system support
- And more...

#### 3. Contributions

Contributions are declarative registrations that add UI elements or features to specific targets:

**Contribution Types:**
- **Tab Contributions**: Add tabs to sidebars or editor areas
- **Command Contributions**: Add buttons/menu items that execute commands
- **Toolbar Contributions**: Add items to toolbars
- **Pane Contributions**: Add resizable panes
- **HTML Contributions**: Add custom HTML content

**Contribution Targets:**
- `SIDEBAR_MAIN`: Main left sidebar
- `SIDEBAR_AUXILIARY`: Right auxiliary sidebar
- `EDITOR_AREA_MAIN`: Main editor area
- `PANEL_BOTTOM`: Bottom panel
- `TOOLBAR_MAIN`: Main toolbar
- And more...

#### 4. Commands

Commands are context-aware actions that can be executed by users or AI agents:

```typescript
interface Command {
    id: string;
    name: string;
    description: string;
    parameters?: Parameter[];
    output?: Variable[];
    keyBinding?: string;
    icon?: string;
}
```

**Command Execution:**
- Commands can have multiple handlers with different priorities
- Handlers can check context (`canExecute`) before execution
- Commands are automatically exposed as AI tools
- Context-aware: different commands available based on active editor, selection, etc.

#### 5. Parts and Components

**Parts** (`KPart`): Base class for tabbed UI components
- Automatic dirty state management
- Toolbar integration
- Command stack support
- Lifecycle management

**Components** (`KElement`, `KContainer`): Base UI elements
- Built on Lit web components
- Reactive state with signals
- WebAwesome UI components

**Standard App Layout** (`KStandardApp`): Default application layout
- Three-column layout (sidebar, editor, auxiliary sidebar)
- Resizable panels
- Toolbar support
- Configurable bottom panels

## Core Services

### Workspace Service
- File system access via File System Access API
- Workspace persistence
- File watching and change detection
- Directory operations

### Settings Service
- Persistent application settings
- Settings tree UI
- Settings change events

### Editor Registry
- File type to editor mapping
- Editor lifecycle management
- Multiple editor instances
- Editor state management

### Task Service
- Background task execution
- Progress monitoring
- Task cancellation
- UI integration

### Event System
- Pub/sub event bus
- Type-safe events
- Framework-wide communication

### Dependency Injection
- Service registration and lookup
- Context-based injection
- Root and scoped contexts

### AI Service
- Multi-provider LLM support (OpenAI, Anthropic, WebLLM, etc.)
- Agent system with custom prompts
- Tool execution for commands
- Streaming responses
- Workflow engine for complex operations

### RAG System (Extension)
- Document indexing and storage
- Vector embeddings (Xenova transformers)
- Semantic search
- AI integration for document retrieval

## Extension System

### Extension Lifecycle

1. **Registration**: Extensions are registered with metadata
2. **Loading**: Extensions are loaded on-demand or at startup
3. **Dependency Resolution**: Dependencies are automatically loaded
4. **Execution**: Extension module's default export function is called
5. **Enablement**: Extensions can be enabled/disabled dynamically

### Creating Extensions

```typescript
// my-extension.ts
export default function(uiContext: UIContext) {
    // Register commands
    commandRegistry.registerCommand(new Command(
        'my.command',
        'My Command',
        'Does something useful'
    ));
    
    // Register command handler
    commandRegistry.registerHandler('my.command', {
        execute: (context) => {
            // Execute command
        }
    });
    
    // Register contributions
    contributionRegistry.registerContribution(SIDEBAR_MAIN, {
        name: 'my-tab',
        label: 'My Tab',
        icon: 'puzzle-piece',
        component: (id) => html`<my-component id="${id}"></my-component>`
    });
}
```

### Extension Marketplace

- Browse and install extensions from remote catalogs
- External extension management
- Extension versioning
- Dependency resolution

## API Structure

The framework exposes a clean public API:

```typescript
// Main API entry point
import {
    appLoaderService,      // App lifecycle management
    commandRegistry,        // Command system
    contributionRegistry,  // Contribution system
    extensionRegistry,      // Extension system
    workspaceService,       // File system access
    editorRegistry,         // Editor management
    createLogger,          // Logging
    // ... and more
} from '@kispace-io/appspace';

// Base classes
import { KPart, KContainer, KStandardApp } from '@kispace-io/appspace';

// Extensions
import { /* AI system exports */ } from '@kispace-io/appspace/extensions/ai-system';
import { /* RAG system exports */ } from '@kispace-io/appspace/extensions/rag-system';
```

## Usage Example

### Creating a Simple App

```typescript
import { appLoaderService, AppDefinition, SIDEBAR_MAIN } from '@kispace-io/appspace';
import { html } from 'lit';

const myApp: AppDefinition = {
    id: 'my-app',
    name: 'My Application',
    version: '1.0.0',
    extensions: ['system.monaco-editor', 'system.ai-system'],
    contributions: {
        ui: [
            {
                target: SIDEBAR_MAIN,
                name: 'my-tab',
                label: 'My Tab',
                icon: 'folder',
                component: (id) => html`<my-component id="${id}"></my-component>`
            }
        ]
    },
    initialize: async () => {
        // Custom initialization
    }
};

appLoaderService.registerApp(myApp, { autoStart: true });
```

## Technology Stack

- **Lit**: Web components framework
- **TypeScript**: Type safety
- **WebAwesome**: UI component library
- **Monaco Editor**: Code editing
- **RxDB**: Client-side database (for extensions like RAG)
- **Pyodide**: Python runtime in the browser
- **WebLLM**: Local LLM execution
- **Xenova Transformers**: ML models in the browser

## Package Exports

The package provides multiple entry points:

- `.` - Main API
- `./api` - Public API services
- `./extensions/ai-system` - AI system extension
- `./extensions/rag-system` - RAG system extension
- `./widgets` - Widget components
- `./parts` - Part components

## License

EPL-2.0

## Repository

https://github.com/erdalkaraca/geospace

