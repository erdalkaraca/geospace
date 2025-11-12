import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { createLogger } from '../../../core/logger';
import { SNIPPET_LENGTHS } from '../utils/constants';
import type { DocumentChunk, ChunkingOptions, IDocumentChunker } from './chunker-interface';

const logger = createLogger('LangChainChunker');

const DEFAULT_CHUNK_SIZE = 500; // words
const DEFAULT_CHUNK_OVERLAP = 75; // words (15% of chunk size for better context preservation)

function countWords(text: string): number {
    if (!text || text.trim().length === 0) {
        return 0;
    }
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

export class LangChainChunker implements IDocumentChunker {
    private readonly textSplitter: RecursiveCharacterTextSplitter;
    private readonly chunkSize: number;
    private readonly chunkOverlap: number;

    constructor(options: ChunkingOptions = {}) {
        this.chunkSize = options.chunkSize ?? DEFAULT_CHUNK_SIZE;
        this.chunkOverlap = options.chunkOverlap ?? DEFAULT_CHUNK_OVERLAP;

        this.textSplitter = new RecursiveCharacterTextSplitter({
            chunkSize: this.chunkSize,
            chunkOverlap: this.chunkOverlap,
            lengthFunction: countWords,
            separators: [
                '\n\n',      // Paragraphs
                '\n',        // Lines
                '. ',        // Sentences
                '! ',        // Exclamations
                '? ',        // Questions
                ' ',         // Words (last separator - ensures we never split words)
            ],
            keepSeparator: false,
        });
    }

    async chunkDocument(
        documentId: string,
        content: string,
        fileName: string
    ): Promise<DocumentChunk[]> {
        try {
            const chunks = await this.textSplitter.splitText(content);
            
            const documentChunks: DocumentChunk[] = [];
            let currentOffset = 0;

            for (let index = 0; index < chunks.length; index++) {
                const chunkText = chunks[index];
                
                let startOffset: number;
                
                if (index === 0) {
                    const foundPos = content.indexOf(chunkText);
                    startOffset = foundPos !== -1 ? foundPos : 0;
                    currentOffset = startOffset;
                } else {
                    const prevChunk = documentChunks[index - 1];
                    
                    const overlapBuffer = Math.max(this.chunkOverlap * 10, chunkText.length);
                    const searchStart = Math.max(0, prevChunk.endOffset - overlapBuffer);
                    const searchEnd = Math.min(content.length, prevChunk.endOffset + chunkText.length);
                    
                    const searchWindow = content.substring(searchStart, searchEnd);
                    const relativePos = searchWindow.indexOf(chunkText);
                    
                    if (relativePos !== -1) {
                        const candidateOffset = searchStart + relativePos;
                        if (candidateOffset >= prevChunk.startOffset && candidateOffset < prevChunk.endOffset + chunkText.length) {
                            startOffset = candidateOffset;
                        } else {
                            startOffset = prevChunk.endOffset;
                        }
                    } else {
                        startOffset = prevChunk.endOffset;
                    }
                    currentOffset = startOffset;
                }
                
                const endOffset = Math.min(startOffset + chunkText.length, content.length);
                const text = index === 0 ? `${fileName} ${chunkText}` : chunkText;
                
                documentChunks.push({
                    id: `${documentId}:chunk:${index}`,
                    documentId,
                    chunkIndex: index,
                    text,
                    startOffset,
                    endOffset
                });
            }

            this.validateNoWordSplitting(documentChunks, content, documentId);

            logger.debug(`Document ${documentId} split into ${documentChunks.length} chunks using LangChain`);
            return documentChunks;
        } catch (error) {
            logger.warn(`LangChain chunking failed for ${documentId}, falling back to simple chunking: ${error}`);
            throw error;
        }
    }

    private validateNoWordSplitting(chunks: DocumentChunk[], originalContent: string, documentId: string): void {
        for (let i = 0; i < chunks.length - 1; i++) {
            const currentChunk = chunks[i];
            const nextChunk = chunks[i + 1];
            
            if (currentChunk.endOffset < originalContent.length && nextChunk.startOffset > currentChunk.endOffset) {
                const gap = originalContent.substring(currentChunk.endOffset, nextChunk.startOffset);
                const gapTrimmed = gap.trim();
                
                if (gapTrimmed.length > 0 && !/^\s+$/.test(gap)) {
                    const beforeChar = originalContent[currentChunk.endOffset - 1];
                    const afterChar = originalContent[nextChunk.startOffset];
                    
                    if (beforeChar && afterChar && 
                        /[a-zA-Z0-9]/.test(beforeChar) && /[a-zA-Z0-9]/.test(afterChar)) {
                        logger.warn(`Potential word split detected in document ${documentId} between chunks ${i} and ${i + 1}`);
                    }
                }
            }
        }
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

