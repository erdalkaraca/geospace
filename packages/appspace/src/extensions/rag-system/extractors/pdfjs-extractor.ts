import type { File } from '../../../core/filesys';
import { createLogger } from '../../../core/logger';
import type { IDocumentExtractor, DocumentExtractionOptions } from './document-extractor-interface';

const logger = createLogger('PDFJSExtractor');

export class PDFJSExtractor implements IDocumentExtractor {
    canExtract(fileType: string): boolean {
        return fileType.toLowerCase() === 'pdf';
    }

    async extractText(file: File, options: DocumentExtractionOptions = {}): Promise<string> {
        try {
            const pdfjsLib = await import('pdfjs-dist');
            
            // Configure PDF.js worker
            if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
                // Use unpkg CDN - more reliable than cdnjs and matches the installed version
                pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
            }
            
            const pdfBlob = await file.getContents({ blob: true }) as Blob;
            const arrayBuffer = await pdfBlob.arrayBuffer();
            
            const loadingTask = pdfjsLib.getDocument({ 
                data: arrayBuffer,
                useSystemFonts: true
            });
            const pdf = await loadingTask.promise;
            
            const numPages = pdf.numPages;
            const textParts: string[] = [];
            const includePageNumbers = options.includePageNumbers !== false;
            const pageSeparator = options.pageSeparator || '\n\n';
            
            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                
                const pageText = textContent.items
                    .map((item: any) => item.str)
                    .join(' ');
                
                if (pageText.trim()) {
                    if (includePageNumbers) {
                        textParts.push(`[Page ${pageNum}]\n${pageText}`);
                    } else {
                        textParts.push(pageText);
                    }
                }
            }
            
            const extractedText = textParts.join(pageSeparator);
            
            if (!extractedText || extractedText.trim().length === 0) {
                throw new Error('PDF appears to contain no extractable text (may be image-based or scanned)');
            }
            
            logger.debug(`Extracted ${numPages} pages from PDF: ${file.getName()}`);
            return extractedText;
        } catch (error) {
            logger.warn(`Failed to extract text from PDF ${file.getName()}: ${error}`);
            throw new Error(`PDF text extraction failed: ${error}`);
        }
    }
}

