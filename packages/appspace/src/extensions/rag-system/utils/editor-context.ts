import { documentIndexService } from '../document-index-service';
import { searchWorkspaceDocuments, RAGContextScope } from '../rag-service';
import { File, workspaceService } from '../../../core/filesys';
import { createLogger } from '../../../core/logger';

const logger = createLogger('EditorContext');

export interface EditorContext {
    contextId: string;
    filePaths: string[];
}

export class EditorRAGContext {
    private contextId: string;

    constructor(contextId: string) {
        this.contextId = contextId;
    }

    getContextTag(): string {
        return `editor:${this.contextId}`;
    }

    async indexFiles(files: File[]): Promise<{ succeeded: number; failed: number }> {
        let succeeded = 0;
        let failed = 0;

        const contextTag = this.getContextTag();

        for (const file of files) {
            try {
                await documentIndexService.indexDocument(file, {
                    tags: [contextTag]
                });
                succeeded++;
                logger.debug(`Indexed file with context tag: ${file.getWorkspacePath()}`);
            } catch (error) {
                logger.error(`Failed to index file ${file.getWorkspacePath()}: ${error}`);
                failed++;
            }
        }

        return { succeeded, failed };
    }

    async indexFile(file: File): Promise<void> {
        const contextTag = this.getContextTag();
        await documentIndexService.indexDocument(file, {
            tags: [contextTag]
        });
    }

    async reindexFile(file: File): Promise<void> {
        const contextTag = this.getContextTag();
        await documentIndexService.reindexDocument(file, {
            tags: [contextTag]
        });
    }

    async removeFileFromContext(file: File): Promise<void> {
        const document = await documentIndexService.getDocumentByPath(
            file.getWorkspace().getName(),
            file.getWorkspacePath()
        );

        if (document) {
            const contextTag = this.getContextTag();
            const updatedTags = (document.metadata.tags || []).filter(tag => tag !== contextTag);
            
            if (updatedTags.length !== document.metadata.tags?.length) {
                await documentIndexService.indexDocument(file, {
                    tags: updatedTags
                });
            }
        }
    }

    async clearContext(): Promise<void> {
        const contextTag = this.getContextTag();
        const allDocs = await documentIndexService.listDocuments();

        for (const doc of allDocs) {
            if (doc.metadata.tags?.includes(contextTag)) {
                const updatedTags = doc.metadata.tags.filter(tag => tag !== contextTag);
                try {
                    const workspace = await workspaceService.getWorkspace();
                    if (workspace && workspace.getName() === doc.workspacePath) {
                        const resource = await workspace.getResource(doc.filePath);
                        if (resource instanceof File) {
                            await documentIndexService.indexDocument(resource, {
                                tags: updatedTags
                            });
                        }
                    }
                } catch (error) {
                    logger.warn(`Failed to clear context tag from ${doc.filePath}: ${error}`);
                }
            }
        }
    }

    async getFilePaths(): Promise<string[]> {
        const contextTag = this.getContextTag();
        const allDocs = await documentIndexService.listDocuments();
        
        return allDocs
            .filter(doc => doc.metadata.tags?.includes(contextTag))
            .map(doc => doc.filePath);
    }

    getSearchScope(): RAGContextScope {
        return {
            tags: [this.getContextTag()]
        };
    }

    async search(query: string, options: { limit?: number } = {}): Promise<any[]> {
        const scope = this.getSearchScope();
        return await searchWorkspaceDocuments(query, {
            ...options,
            contextScope: scope
        });
    }
}

export function createEditorContext(contextId: string): EditorRAGContext {
    return new EditorRAGContext(contextId);
}

