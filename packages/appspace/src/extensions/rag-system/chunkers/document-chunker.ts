export type { DocumentChunk, ChunkingOptions, IDocumentChunker } from './chunker-interface';
export { FallbackChunker } from './fallback-chunker';
export { LangChainChunker } from './langchain-chunker';

import { LangChainChunker } from './langchain-chunker';
import { FallbackChunker } from './fallback-chunker';
import { createLogger } from '../../../core/logger';
import type { ChunkingOptions, IDocumentChunker, DocumentChunk } from './chunker-interface';

const logger = createLogger('DocumentChunker');

export class DocumentChunker implements IDocumentChunker {
    private chunker: IDocumentChunker;

    constructor(options: ChunkingOptions = {}) {
        try {
            this.chunker = new LangChainChunker(options);
            logger.debug('Using LangChain chunker');
        } catch (error) {
            logger.warn(`Failed to initialize LangChain chunker, using fallback: ${error}`);
            this.chunker = new FallbackChunker(options);
        }
    }

    async chunkDocument(documentId: string, content: string, fileName: string) {
        try {
            const result = this.chunker.chunkDocument(documentId, content, fileName);
            return await Promise.resolve(result);
        } catch (error) {
            logger.warn(`Primary chunker failed, falling back: ${error}`);
            const fallback = new FallbackChunker();
            return fallback.chunkDocument(documentId, content, fileName);
        }
    }

    getChunkContext(chunk: any, allChunks: any[]) {
        return this.chunker.getChunkContext(chunk, allChunks);
    }
}

export const defaultChunker = new DocumentChunker();
