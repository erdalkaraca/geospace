import { ragService, searchWorkspaceDocuments } from './rag-service';
import { DocumentSearchScope } from './document-index-service';
import { documentIndexService } from './document-index-service';
import { getWorkspacePath } from './utils/workspace-utils';
import { rootContext } from '../../core/di';
import { SEARCH_CONFIG } from './utils/constants';
import { RAGResultFormatter } from './services/rag-result-formatter';
import { SnippetExtractor } from './utils/snippet-extractor';
import { aiService } from '../ai-system/service/ai-service';
import { commandRegistry, registerAll } from '../../core/commandregistry';
import type { ExecutionContext } from '../../core/commandregistry';
import type { PromptEnhancer } from '../ai-system/core/interfaces';
import type { ToolDefinition } from '../ai-system/core/types';
import { createLogger } from '../../core/logger';

const logger = createLogger('RAGIntegration');
const resultFormatter = new RAGResultFormatter(new SnippetExtractor());

export const ragPromptEnhancer: PromptEnhancer = {
    priority: 10,
    async enhance(prompt: string, context: ExecutionContext): Promise<string> {
        try {
            const stats = await documentIndexService.getStats();
            if (stats.totalDocuments === 0) {
                return prompt;
            }

            const instruction = `IMPORTANT: When a user mentions a specific file name or path:
1. ALWAYS first check if the file is indexed using rag.check-indexed with the file path
2. If indexed: Use rag.search-documents with filePath parameter to get relevant content from the indexed document
3. If not indexed: Read the file directly using file commands (cat_file, ls, etc.)

NEVER use filePath or fileName parameters in rag.search-documents without first verifying the file is indexed with rag.check-indexed. If you use a non-indexed file path/name, the search will return no results.

For general searches (not specific files), use rag.search-documents with just the query parameter to search across all indexed documents. This is more efficient than reading files one by one.`;

            return `${prompt}\n\n${instruction}`;
        } catch (error) {
            logger.warn(`RAG enhancement failed: ${error}`);
            return prompt;
        }
    }
};

export function createRAGToolExecutor() {
    return async (toolName: string, params: any): Promise<any> => {
        if (toolName === 'search_workspace_documents') {
            const query = params.query || '';
            const limit = Math.min(params.limit || SEARCH_CONFIG.DEFAULT_LIMIT, SEARCH_CONFIG.MAX_LIMIT);
            const fileType = params.fileType;
            const filePath = params.filePath;
            const fileName = params.fileName;

            const documentSearchScope: DocumentSearchScope | undefined = 
                (params.includePaths || params.excludePaths || params.pathPattern)
                    ? {
                        includePaths: params.includePaths,
                        excludePaths: params.excludePaths,
                        pathPattern: params.pathPattern
                    }
                    : undefined;

            const results = await searchWorkspaceDocuments(query, {
                limit,
                fileType,
                filePath,
                fileName,
                documentSearchScope
            });

            return {
                results: resultFormatter.formatSearchResults(results),
                total: results.length
            };
        }

        throw new Error(`Unknown RAG tool: ${toolName}`);
    };
}

export function registerRAGCommands() {
    registerAll({
        command: {
            id: 'rag.search-documents',
            name: 'Search Workspace Documents (RAG)',
            description: 'Search indexed workspace documents for relevant content. IMPORTANT: Only use filePath or fileName if you have already verified the file is indexed using rag.check-indexed. If the file is not indexed, this will return no results.',
            parameters: [
                {
                    name: 'query',
                    description: 'Search query (optional if filePath or fileName is provided)',
                    required: false
                },
                {
                    name: 'limit',
                    description: 'Maximum number of results',
                    required: false
                },
                {
                    name: 'fileType',
                    description: 'Filter by file type',
                    required: false
                },
                {
                    name: 'filePath',
                    description: 'Exact file path to search (relative to workspace root). Only use if you verified the file is indexed with rag.check-indexed.',
                    required: false
                },
                {
                    name: 'fileName',
                    description: 'File name to search for (partial match supported). Only use if you verified the file is indexed with rag.check-indexed.',
                    required: false
                }
            ]
        },
        handler: {
            canExecute: () => true,
            execute: async (context) => {
                const query = context.params?.query || '';
                const limit = context.params?.limit 
                    ? Math.min(parseInt(context.params.limit), SEARCH_CONFIG.MAX_LIMIT)
                    : SEARCH_CONFIG.DEFAULT_LIMIT;
                const fileType = context.params?.fileType;
                const filePath = context.params?.filePath;
                const fileName = context.params?.fileName;

                if (!query && !filePath && !fileName) {
                    throw new Error('Either query, filePath, or fileName parameter must be provided');
                }

                const results = await searchWorkspaceDocuments(query, {
                    limit,
                    fileType,
                    filePath,
                    fileName
                });

                if ((filePath || fileName) && results.length === 0) {
                    return {
                        query: query || (filePath ? `filePath: ${filePath}` : `fileName: ${fileName}`),
                        results: [],
                        warning: `No indexed document found for ${filePath ? `file path "${filePath}"` : `file name "${fileName}"`}. The file may not be indexed. Use rag.check-indexed to verify if a file is indexed before searching.`
                    };
                }

                return {
                    query: query || (filePath ? `filePath: ${filePath}` : fileName ? `fileName: ${fileName}` : ''),
                    results: resultFormatter.formatCommandResults(results)
                };
            }
        }
    });

    registerAll({
        command: {
            id: 'rag.check-indexed',
            name: 'Check if File is Indexed',
            description: 'Check if a specific file is indexed in the document index. Use this to determine if you should use RAG search or read the file directly.',
            parameters: [
                {
                    name: 'filePath',
                    description: 'The file path to check (relative to workspace root)',
                    required: true
                }
            ]
        },
        handler: {
            canExecute: () => true,
            execute: async (context) => {
                const filePath = context.params?.filePath;
                if (!filePath) {
                    throw new Error('File path parameter required');
                }

                const workspaceResult = await getWorkspacePath();
                if (!workspaceResult) {
                    return { indexed: false, reason: 'No workspace connected' };
                }

                const { workspacePath } = workspaceResult;
                const document = await documentIndexService.getDocumentByPath(workspacePath, filePath);

                if (document) {
                    return {
                        indexed: true,
                        filePath: document.filePath,
                        fileName: document.fileName,
                        fileType: document.fileType,
                        indexedAt: new Date(document.indexedAt).toISOString(),
                        size: document.metadata.size
                    };
                }

                return {
                    indexed: false,
                    filePath,
                    reason: 'File not found in document index'
                };
            }
        }
    });
}

export function integrateRAGWithAI() {
    try {
        registerRAGCommands();
        
        const promptBuilder = (aiService as any).promptBuilder;
        if (promptBuilder && typeof promptBuilder.addEnhancer === 'function') {
            promptBuilder.addEnhancer(ragPromptEnhancer);
            logger.info('RAG prompt enhancer and commands registered - AI will be instructed to use RAG before reading files');
        } else {
            logger.warn('AI service prompt builder not available yet, will retry');
            setTimeout(() => integrateRAGWithAI(), 1000);
        }
    } catch (error) {
        logger.warn(`Failed to integrate RAG with AI: ${error}`);
    }
}

rootContext.put('ragService', ragService);

