# RAG Context Scoping Examples

This document shows how to scope RAG searches to specific contexts, such as files a document editor is operating on.

## Basic Usage

### Example 1: Scope to Open Files in an Editor

```typescript
import { searchWorkspaceDocuments } from '../rag-service';
import { createEditorScope } from './context-scopes';

// In your document editor component
const openFiles = ['src/components/MyComponent.tsx', 'src/utils/helpers.ts'];

const results = await searchWorkspaceDocuments('how to handle user input', {
    contextScope: createEditorScope(openFiles)
});
```

### Example 2: Scope to a Directory

```typescript
import { createDirectoryScope } from './context-scopes';

// Search only in src/components directory (recursive)
const results = await searchWorkspaceDocuments('component props', {
    contextScope: createDirectoryScope('src/components', true)
});

// Search only direct children of src/components (non-recursive)
const results = await searchWorkspaceDocuments('component props', {
    contextScope: createDirectoryScope('src/components', false)
});
```

### Example 3: Scope by File Type

```typescript
import { createFileTypeScope } from './context-scopes';

// Search only TypeScript files
const results = await searchWorkspaceDocuments('type definitions', {
    contextScope: createFileTypeScope(['ts', 'tsx'])
});
```

### Example 4: Custom Path Patterns

```typescript
import { RAGContextScope } from '../rag-service';

// Include specific paths with wildcards
const scope: RAGContextScope = {
    includePaths: ['src/**', 'docs/*.md'],
    excludePaths: ['**/*.test.ts', 'node_modules/**']
};

const results = await searchWorkspaceDocuments('API documentation', {
    contextScope: scope
});
```

### Example 5: Regex Pattern

```typescript
const scope: RAGContextScope = {
    pathPattern: /^src\/(components|utils)\/.*\.tsx?$/
};

const results = await searchWorkspaceDocuments('React hooks', {
    contextScope: scope
});
```

### Example 6: Combine Multiple Scopes

```typescript
import { combineScopes, createDirectoryScope, createFileTypeScope } from './context-scopes';

// Search in src/components directory AND only TypeScript files
const scope = combineScopes(
    createDirectoryScope('src/components'),
    createFileTypeScope(['ts', 'tsx'])
);

const results = await searchWorkspaceDocuments('component logic', {
    contextScope: scope
});
```

### Example 7: Custom Metadata Filter

```typescript
import { RAGContextScope, IndexedDocument } from '../rag-service';

const scope: RAGContextScope = {
    metadataFilter: (doc: IndexedDocument) => {
        // Only include documents modified in the last 7 days
        const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        return doc.metadata.lastModified > sevenDaysAgo;
    }
};

const results = await searchWorkspaceDocuments('recent changes', {
    contextScope: scope
});
```

## Integration with Document Editors

### Example: Editor with Open Files Context

```typescript
import { customElement, state } from 'lit/decorators.js';
import { searchWorkspaceDocuments } from '../rag-service';
import { createEditorScope } from './context-scopes';

@customElement('my-document-editor')
export class MyDocumentEditor {
    @state()
    private openFiles: string[] = [];

    async performRAGSearch(query: string) {
        const scope = createEditorScope(this.openFiles);
        
        const results = await searchWorkspaceDocuments(query, {
            contextScope: scope,
            limit: 10
        });

        // Use results to enhance AI context or show suggestions
        return results;
    }

    onFileOpened(filePath: string) {
        if (!this.openFiles.includes(filePath)) {
            this.openFiles.push(filePath);
        }
    }

    onFileClosed(filePath: string) {
        this.openFiles = this.openFiles.filter(p => p !== filePath);
    }
}
```

## Using with AI Tools

When using RAG with AI tools, you can pass context scope through the tool executor:

```typescript
import { createRAGToolExecutor, RAGContextScope } from '../rag-integration';

function createScopedRAGToolExecutor(scope: RAGContextScope) {
    return async (toolName: string, params: any): Promise<any> => {
        if (toolName === 'search_workspace_documents') {
            const results = await searchWorkspaceDocuments(params.query, {
                ...params,
                contextScope: scope
            });
            return { results };
        }
        throw new Error(`Unknown tool: ${toolName}`);
    };
}

// Use in your AI integration
const editorScope = createEditorScope(['src/editor/**']);
const toolExecutor = createScopedRAGToolExecutor(editorScope);
```

## Best Practices

1. **Use specific scopes**: Narrow down the search to relevant files for better results
2. **Combine scopes carefully**: Multiple scopes use AND logic - all conditions must match
3. **Consider performance**: Very large scopes may impact search performance
4. **Update scopes dynamically**: Update context scope as files are opened/closed in editors
5. **Provide user feedback**: Show users what scope is active when performing searches

