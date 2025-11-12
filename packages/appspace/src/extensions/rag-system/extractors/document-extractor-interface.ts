import type { File } from '../../../core/filesys';

export interface DocumentExtractionOptions {
    /** Include page numbers in extracted text (default: true for PDFs) */
    includePageNumbers?: boolean;
    /** Custom page separator (default: '\n\n') */
    pageSeparator?: string;
    /** File type hint (auto-detected from file extension if not provided) */
    fileType?: string;
}

export interface IDocumentExtractor {
    /**
     * Checks if this extractor can handle the given file type.
     * @param fileType The file type (extension) to check
     * @returns true if this extractor can handle the file type
     */
    canExtract(fileType: string): boolean;

    /**
     * Extracts text content from a document file.
     * @param file The file to extract text from
     * @param options Optional extraction options
     * @returns The extracted text content
     * @throws Error if extraction fails or file contains no extractable text
     */
    extractText(file: File, options?: DocumentExtractionOptions): Promise<string>;
}

