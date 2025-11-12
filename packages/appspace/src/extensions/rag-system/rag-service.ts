import { documentIndexService, IndexedDocument, DocumentSearchScope } from './document-index-service';
import { createLogger } from '../../core/logger';
import { getWorkspacePath } from './utils/workspace-utils';
import { extractQueryTerms, normalizeQuery } from './utils/query-utils';
import { SnippetExtractor } from './utils/snippet-extractor';
import { SEARCH_CONFIG, SNIPPET_LENGTHS } from './utils/constants';
import { relevanceCalculator } from './services/relevance-calculator';
import { RAGResultFormatter } from './services/rag-result-formatter';

const logger = createLogger('RAGService');
const snippetExtractor = new SnippetExtractor();
const resultFormatter = new RAGResultFormatter(snippetExtractor);

export interface RAGSearchOptions {
    limit?: number;
    fileType?: string;
    workspacePath?: string;
    minRelevance?: number;
    filePath?: string;
    fileName?: string;
    documentSearchScope?: DocumentSearchScope;
}

export interface RAGSearchResult {
    document: IndexedDocument;
    relevance: number;
    matchedSnippets: string[];
}

class RAGService {
    async searchDocuments(
        query: string,
        options: RAGSearchOptions = {}
    ): Promise<RAGSearchResult[]> {
        const limit = Math.min(options.limit || SEARCH_CONFIG.DEFAULT_LIMIT, SEARCH_CONFIG.MAX_LIMIT);
        const workspaceResult = await getWorkspacePath(options.workspacePath);
        
        if (!workspaceResult) {
            logger.warn('No workspace connected, cannot search documents');
            return [];
        }

        const { workspacePath } = workspaceResult;

        if (options.filePath) {
            const specificDoc = await documentIndexService.getDocumentByPath(workspacePath, options.filePath);
            if (specificDoc) {
                const queryTerms = extractQueryTerms(query);
                const matchedSnippets = queryTerms.length > 0 
                    ? snippetExtractor.extractSnippets(specificDoc.content, queryTerms, 3)
                    : [snippetExtractor.extractSimpleSnippet(specificDoc.content, SNIPPET_LENGTHS.PREVIEW)];
                return [{
                    document: specificDoc,
                    relevance: 100,
                    matchedSnippets
                }];
            }
            logger.warn(`Document not found: ${options.filePath}`);
            return [];
        }

        if (options.fileName) {
            const allDocs = await documentIndexService.listDocuments(workspacePath);
            const fileNameLower = options.fileName.toLowerCase();
            const matchingDocs = allDocs.filter(doc => {
                const docNameLower = doc.fileName.toLowerCase();
                return docNameLower === fileNameLower || docNameLower.includes(fileNameLower);
            });
            
            if (matchingDocs.length > 0) {
                const results: RAGSearchResult[] = [];
                const queryTerms = extractQueryTerms(query);
                for (const doc of matchingDocs.slice(0, limit)) {
                    const matchedSnippets = queryTerms.length > 0
                        ? snippetExtractor.extractSnippets(doc.content, queryTerms, 3)
                        : [snippetExtractor.extractSimpleSnippet(doc.content, SNIPPET_LENGTHS.PREVIEW)];
                    results.push({
                        document: doc,
                        relevance: relevanceCalculator.calculateFileNameRelevance(doc, options.fileName),
                        matchedSnippets
                    });
                }
                return results;
            }
            logger.warn(`No documents found with name: ${options.fileName}`);
            return [];
        }

        if (!query || !query.trim()) {
            logger.warn('No query provided and no filePath/fileName specified');
            return [];
        }

        try {
            const vectorResults = await documentIndexService.searchSimilar(query, {
                limit: limit * 2,
                workspacePath,
                fileType: options.fileType
            });

            const results: RAGSearchResult[] = [];

            for (const { document, similarity, chunkStartOffset, chunkEndOffset } of vectorResults) {
                if (!this.matchesContextScope(document, options.documentSearchScope)) {
                    continue;
                }

                const relevance = similarity * 100;
                
                if (options.minRelevance && relevance < options.minRelevance) {
                    continue;
                }

                const queryLower = normalizeQuery(query);
                const queryTerms = extractQueryTerms(query);
                
                let matchedSnippets: string[];
                
                if (chunkStartOffset !== undefined && chunkEndOffset !== undefined) {
                    const chunkText = document.content.substring(
                        Math.max(0, chunkStartOffset),
                        Math.min(document.content.length, chunkEndOffset)
                    );
                    
                    if (chunkText.trim().length > 0) {
                        matchedSnippets = [chunkText.trim()];
                    } else {
                        matchedSnippets = snippetExtractor.extractSnippets(document.content, queryTerms, 15);
                    }
                } else {
                    matchedSnippets = snippetExtractor.extractSnippets(document.content, queryTerms, 15);
                }
                
                if (matchedSnippets.length === 0 && queryLower.length > 0) {
                    if (chunkStartOffset !== undefined && chunkEndOffset !== undefined) {
                        const chunkText = document.content.substring(
                            Math.max(0, chunkStartOffset),
                            Math.min(document.content.length, chunkEndOffset)
                        );
                        if (chunkText.trim().length > 0) {
                            matchedSnippets = [chunkText.trim()];
                        } else {
                            matchedSnippets = snippetExtractor.extractSnippets(document.content, [queryLower], 10);
                        }
                    } else {
                        matchedSnippets = snippetExtractor.extractSnippets(document.content, [queryLower], 10);
                    }
                }

                results.push({
                    document,
                    relevance,
                    matchedSnippets
                });

                if (results.length >= limit) {
                    break;
                }
            }

            if (results.length === 0) {
                logger.debug('Vector search returned no results, falling back to text search');
                return this.fallbackTextSearch(query, options);
            }

            return results;
        } catch (error) {
            logger.warn(`Vector search failed, falling back to text search: ${error}`);
            logger.debug(`Vector search error details: ${error}`);
            return this.fallbackTextSearch(query, options);
        }
    }

    private async fallbackTextSearch(
        query: string,
        options: RAGSearchOptions = {}
    ): Promise<RAGSearchResult[]> {
        const limit = Math.min(options.limit || SEARCH_CONFIG.DEFAULT_LIMIT, SEARCH_CONFIG.MAX_LIMIT);
        const workspaceResult = await getWorkspacePath(options.workspacePath);
        
        if (!workspaceResult) {
            logger.warn('No workspace connected, cannot perform text search');
            return [];
        }

        const { workspacePath } = workspaceResult;
        const allDocuments = await documentIndexService.listDocuments(workspacePath);
        const queryTerms = extractQueryTerms(query);

        const results: RAGSearchResult[] = [];

        for (const doc of allDocuments) {
            if (options.fileType && doc.fileType !== options.fileType) {
                continue;
            }

            if (!this.matchesContextScope(doc, options.documentSearchScope)) {
                continue;
            }

            const relevance = relevanceCalculator.calculateRelevance(doc, query);
            
            if (options.minRelevance && relevance < options.minRelevance) {
                continue;
            }

            const matchedSnippets = snippetExtractor.extractSnippets(doc.content, queryTerms, 3);

            results.push({
                document: doc,
                relevance,
                matchedSnippets
            });
        }

        results.sort((a, b) => b.relevance - a.relevance);
        return results.slice(0, limit);
    }

    formatRAGContext(results: RAGSearchResult[]): string {
        return resultFormatter.formatRAGContext(results);
    }

    private matchesContextScope(doc: IndexedDocument, scope?: DocumentSearchScope): boolean {
        if (!scope) {
            return true;
        }

        if (scope.includePaths && scope.includePaths.length > 0) {
            const matches = scope.includePaths.some(pattern => {
                if (pattern.includes('*') || pattern.includes('?')) {
                    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
                    return regex.test(doc.filePath);
                }
                return doc.filePath.startsWith(pattern) || doc.filePath === pattern;
            });
            if (!matches) {
                return false;
            }
        }

        if (scope.excludePaths && scope.excludePaths.length > 0) {
            const matches = scope.excludePaths.some(pattern => {
                if (pattern.includes('*') || pattern.includes('?')) {
                    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
                    return regex.test(doc.filePath);
                }
                return doc.filePath.startsWith(pattern) || doc.filePath === pattern;
            });
            if (matches) {
                return false;
            }
        }

        if (scope.pathPattern) {
            const regex = scope.pathPattern instanceof RegExp 
                ? scope.pathPattern 
                : new RegExp(scope.pathPattern);
            if (!regex.test(doc.filePath)) {
                return false;
            }
        }

        if (scope.tags && scope.tags.length > 0) {
            const docTags = doc.metadata.tags || [];
            const hasAllTags = scope.tags.every(tag => docTags.includes(tag));
            if (!hasAllTags) {
                return false;
            }
        }

        if (scope.metadataFilter) {
            if (!scope.metadataFilter(doc)) {
                return false;
            }
        }

        return true;
    }

}

export const ragService = new RAGService();

export async function searchWorkspaceDocuments(
    query: string,
    options: RAGSearchOptions = {}
): Promise<RAGSearchResult[]> {
    const workspaceResult = await getWorkspacePath(options.workspacePath);
    
    if (!workspaceResult) {
        logger.warn('No workspace connected, cannot search documents');
        return [];
    }

    return ragService.searchDocuments(query, {
        ...options,
        workspacePath: workspaceResult.workspacePath
    });
}

