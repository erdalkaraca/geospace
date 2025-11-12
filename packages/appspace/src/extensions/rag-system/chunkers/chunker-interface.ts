export interface DocumentChunk {
    id: string;
    documentId: string;
    chunkIndex: number;
    text: string;
    startOffset: number;
    endOffset: number;
}

export interface ChunkingOptions {
    /** Maximum chunk size in words (default: 500) */
    chunkSize?: number;
    /** Overlap between chunks in words (default: 50) */
    chunkOverlap?: number;
    /** Minimum chunk size in words (used by fallback chunker) */
    minChunkSize?: number;
}

export interface IDocumentChunker {
    chunkDocument(
        documentId: string,
        content: string,
        fileName: string
    ): DocumentChunk[] | Promise<DocumentChunk[]>;

    getChunkContext(chunk: DocumentChunk, allChunks: DocumentChunk[]): string;
}

