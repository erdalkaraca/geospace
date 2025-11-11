import { RAGContextScope } from '../rag-service';
import { IndexedDocument } from '../document-index-service';

export interface ContextScopeProvider {
    getScope(): RAGContextScope | null;
    getName(): string;
}

export class PathBasedScope implements ContextScopeProvider {
    constructor(
        private includePaths: string[],
        private excludePaths: string[] = [],
        private name: string = 'Path-based scope'
    ) {}

    getScope(): RAGContextScope {
        return {
            includePaths: this.includePaths,
            excludePaths: this.excludePaths
        };
    }

    getName(): string {
        return this.name;
    }
}

export class PatternBasedScope implements ContextScopeProvider {
    constructor(
        private pattern: string | RegExp,
        private name: string = 'Pattern-based scope'
    ) {}

    getScope(): RAGContextScope {
        return {
            pathPattern: this.pattern
        };
    }

    getName(): string {
        return this.name;
    }
}

export class TagBasedScope implements ContextScopeProvider {
    constructor(
        private tags: string[],
        private name: string = 'Tag-based scope'
    ) {}

    getScope(): RAGContextScope {
        return {
            tags: this.tags
        };
    }

    getName(): string {
        return this.name;
    }
}

export class CustomScope implements ContextScopeProvider {
    constructor(
        private scope: RAGContextScope,
        private name: string = 'Custom scope'
    ) {}

    getScope(): RAGContextScope {
        return this.scope;
    }

    getName(): string {
        return this.name;
    }
}

export function createEditorScope(openFiles: string[]): RAGContextScope {
    return {
        includePaths: openFiles
    };
}

export function createDirectoryScope(directoryPath: string, recursive: boolean = true): RAGContextScope {
    const pattern = recursive 
        ? `^${directoryPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/.*`
        : `^${directoryPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/[^/]+$`;
    return {
        pathPattern: new RegExp(pattern)
    };
}

export function createFileTypeScope(fileTypes: string[]): RAGContextScope {
    const pattern = `\\.(${fileTypes.join('|')})$`;
    return {
        pathPattern: new RegExp(pattern)
    };
}

export function combineScopes(...scopes: (RAGContextScope | null)[]): RAGContextScope | null {
    const validScopes = scopes.filter((s): s is RAGContextScope => s !== null);
    if (validScopes.length === 0) {
        return null;
    }
    if (validScopes.length === 1) {
        return validScopes[0];
    }

    const combined: RAGContextScope = {};
    
    const allIncludePaths: string[] = [];
    const allExcludePaths: string[] = [];
    const allTags: string[] = [];
    const allMetadataFilters: Array<(doc: IndexedDocument) => boolean> = [];

    for (const scope of validScopes) {
        if (scope.includePaths) {
            allIncludePaths.push(...scope.includePaths);
        }
        if (scope.excludePaths) {
            allExcludePaths.push(...scope.excludePaths);
        }
        if (scope.tags) {
            allTags.push(...scope.tags);
        }
        if (scope.metadataFilter) {
            allMetadataFilters.push(scope.metadataFilter);
        }
        if (scope.pathPattern) {
            const existingPattern = combined.pathPattern;
            if (existingPattern) {
                const newPattern = scope.pathPattern instanceof RegExp 
                    ? scope.pathPattern 
                    : new RegExp(scope.pathPattern);
                combined.pathPattern = new RegExp(`(${existingPattern instanceof RegExp ? existingPattern.source : existingPattern})|(${newPattern.source})`);
            } else {
                combined.pathPattern = scope.pathPattern;
            }
        }
    }

    if (allIncludePaths.length > 0) {
        combined.includePaths = [...new Set(allIncludePaths)];
    }
    if (allExcludePaths.length > 0) {
        combined.excludePaths = [...new Set(allExcludePaths)];
    }
    if (allTags.length > 0) {
        combined.tags = [...new Set(allTags)];
    }
    if (allMetadataFilters.length > 0) {
        combined.metadataFilter = (doc: IndexedDocument) => {
            return allMetadataFilters.every(filter => filter(doc));
        };
    }

    return combined;
}

