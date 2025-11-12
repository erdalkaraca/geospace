import { SNIPPET_LENGTHS } from '../utils/constants';
import type { DocumentChunk, ChunkingOptions, IDocumentChunker } from './chunker-interface';

const DEFAULT_CHUNK_SIZE = 500;
const DEFAULT_CHUNK_OVERLAP = 50;
const DEFAULT_MIN_CHUNK_SIZE = 100;

export class FallbackChunker implements IDocumentChunker {
    private readonly chunkSize: number;
    private readonly chunkOverlap: number;
    private readonly minChunkSize: number;

    constructor(options: ChunkingOptions = {}) {
        this.chunkSize = options.chunkSize ?? DEFAULT_CHUNK_SIZE;
        this.chunkOverlap = options.chunkOverlap ?? DEFAULT_CHUNK_OVERLAP;
        this.minChunkSize = options.minChunkSize ?? DEFAULT_MIN_CHUNK_SIZE;
    }

    chunkDocument(
        documentId: string,
        content: string,
        fileName: string
    ): DocumentChunk[] {
        if (content.length <= this.chunkSize) {
            const text = `${fileName} ${content}`;
            return [{
                id: `${documentId}:chunk:0`,
                documentId,
                chunkIndex: 0,
                text,
                startOffset: 0,
                endOffset: content.length
            }];
        }

        const chunks: DocumentChunk[] = [];
        const step = this.chunkSize - this.chunkOverlap;
        let offset = 0;
        let chunkIndex = 0;

        while (offset < content.length) {
            const endOffset = Math.min(offset + this.chunkSize, content.length);
            const chunkText = content.substring(offset, endOffset);
            
            if (chunkText.trim().length < this.minChunkSize && chunks.length > 0) {
                break;
            }

            const text = chunkIndex === 0 
                ? `${fileName} ${chunkText}`
                : chunkText;

            chunks.push({
                id: `${documentId}:chunk:${chunkIndex}`,
                documentId,
                chunkIndex,
                text,
                startOffset: offset,
                endOffset
            });

            offset += step;
            chunkIndex++;
        }

        return chunks;
    }

    getChunkContext(chunk: DocumentChunk, allChunks: DocumentChunk[]): string {
        const prevChunk = chunk.chunkIndex > 0 
            ? allChunks[chunk.chunkIndex - 1] 
            : null;
        const nextChunk = chunk.chunkIndex < allChunks.length - 1
            ? allChunks[chunk.chunkIndex + 1]
            : null;

        let context = '';
        if (prevChunk) {
            context += `[Previous: ${prevChunk.text.substring(Math.max(0, prevChunk.text.length - SNIPPET_LENGTHS.CONTEXT))}]\n\n`;
        }
        context += chunk.text;
        if (nextChunk) {
            context += `\n\n[Next: ${nextChunk.text.substring(0, SNIPPET_LENGTHS.CONTEXT)}]`;
        }

        return context;
    }
}

