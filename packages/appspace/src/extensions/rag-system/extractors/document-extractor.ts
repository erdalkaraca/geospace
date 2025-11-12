export type { IDocumentExtractor, DocumentExtractionOptions } from './document-extractor-interface';
export { PDFJSExtractor } from './pdfjs-extractor';
export { LLMOCRExtractor } from './llm-ocr-extractor';

import { PDFJSExtractor } from './pdfjs-extractor';
import { LLMOCRExtractor } from './llm-ocr-extractor';
import { createLogger } from '../../../core/logger';
import { toastWarning } from '../../../core/toast';
import type { IDocumentExtractor, DocumentExtractionOptions } from './document-extractor-interface';
import type { File } from '../../../core/filesys';

const logger = createLogger('DocumentExtractor');

export class DocumentExtractor implements IDocumentExtractor {
    private extractors: IDocumentExtractor[];

    constructor() {
        this.extractors = [
            new LLMOCRExtractor(),
            new PDFJSExtractor(),
        ];
    }

    canExtract(fileType: string): boolean {
        return this.extractors.some(extractor => extractor.canExtract(fileType));
    }

    async extractText(file: File, options?: DocumentExtractionOptions): Promise<string> {
        const fileName = file.getName();
        const fileType = options?.fileType || fileName.split('.').pop()?.toLowerCase() || 'txt';

        const availableExtractors = this.extractors.filter(ext => ext.canExtract(fileType));
        
        if (availableExtractors.length === 0) {
            throw new Error(`No extractor available for file type: ${fileType}`);
        }

        let lastError: Error | null = null;

        for (const extractor of availableExtractors) {
            try {
                logger.debug(`Using ${extractor.constructor.name} for file type: ${fileType}`);
                return await extractor.extractText(file, { ...options, fileType });
            } catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
                logger.warn(`${extractor.constructor.name} failed for ${fileName}: ${lastError.message}`);
                
                if (extractor instanceof LLMOCRExtractor && availableExtractors.length > 1) {
                    const fallbackExtractor = availableExtractors.find(ext => ext instanceof PDFJSExtractor);
                    if (fallbackExtractor) {
                        const warningMsg = `Mistral OCR extraction failed, falling back to PDF.js extractor for ${fileName}`;
                        logger.warn(warningMsg);
                        toastWarning(warningMsg);
                        
                        try {
                            logger.debug(`Using ${fallbackExtractor.constructor.name} as fallback for file type: ${fileType}`);
                            return await fallbackExtractor.extractText(file, { ...options, fileType });
                        } catch (fallbackError) {
                            lastError = fallbackError instanceof Error ? fallbackError : new Error(String(fallbackError));
                            logger.warn(`Fallback extraction also failed for ${fileName}: ${lastError.message}`);
                        }
                    }
                }
            }
        }

        throw lastError || new Error(`All extractors failed for file type: ${fileType}`);
    }
}

export const defaultDocumentExtractor = new DocumentExtractor();

