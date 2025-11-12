import type { File } from '../../../core/filesys';
import { createLogger } from '../../../core/logger';
import type { IDocumentExtractor, DocumentExtractionOptions } from './document-extractor-interface';
import { aiService } from '../../ai-system/service/ai-service';
import type { ChatProvider } from '../../ai-system/core/types';

const logger = createLogger('LLMOCRExtractor');

/**
 * LLM-based OCR extractor for document files using Mistral OCR.
 * 
 * This extractor uses Mistral OCR API to perform OCR on document files,
 * particularly useful for scanned documents or image-based files
 * that cannot be processed by standard text extraction methods.
 */
export class LLMOCRExtractor implements IDocumentExtractor {
    canExtract(fileType: string): boolean {
        return ['pdf', 'png', 'jpg', 'jpeg', 'tiff', 'tif'].includes(fileType.toLowerCase());
    }

    async extractText(file: File, options: DocumentExtractionOptions = {}): Promise<string> {
        const fileName = file.getName();
        const fileType = options?.fileType || fileName.split('.').pop()?.toLowerCase() || 'pdf';
        
        const providers = await aiService.getProviders();
        const ocrProvider = providers.find(p => p.ocrApiEndpoint && p.name.toLowerCase().includes('mistral'));
        
        if (!ocrProvider || !ocrProvider.ocrApiEndpoint) {
            throw new Error('Mistral OCR provider not configured. Please configure a provider with OCR endpoint in AI settings.');
        }

        try {
            const fileBlob = await file.getContents({ blob: true }) as Blob;
            const base64Content = await this.blobToBase64(fileBlob);
            const mimeType = this.getMimeType(fileType);
            
            const response = await fetch(ocrProvider.ocrApiEndpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${ocrProvider.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: ocrProvider.model || 'mistral-ocr-latest',
                    document: {
                        type: 'document_url',
                        document_url: `data:${mimeType};base64,${base64Content}`
                    },
                    include_image_base64: false
                })
            });

            if (!response.ok) {
                const errorText = await response.text().catch(() => 'Unknown error');
                throw new Error(`OCR request failed: HTTP ${response.status}: ${errorText}`);
            }

            const result = await response.json();

            if (!result.pages || !Array.isArray(result.pages)) {
                throw new Error('Invalid OCR response format: missing pages array');
            }

            const includePageNumbers = options.includePageNumbers !== false;
            const pageSeparator = options.pageSeparator || '\n\n';
            
            const textParts = result.pages
                .map((page: any, index: number) => {
                    const pageText = page?.markdown || page?.text || '';
                    if (!pageText.trim()) {
                        return null;
                    }
                    if (includePageNumbers) {
                        return `[Page ${index + 1}]\n${pageText}`;
                    }
                    return pageText;
                })
                .filter((text: string | null) => text !== null);

            if (textParts.length === 0) {
                throw new Error('No text content found in OCR response');
            }

            const extractedText = textParts.join(pageSeparator);
            logger.debug(`Extracted ${result.pages.length} pages from ${fileType} file: ${fileName}`);
            
            return extractedText;
        } catch (error) {
            logger.warn(`Failed to extract text using OCR from ${fileName}: ${error}`);
            throw new Error(`OCR text extraction failed: ${error}`);
        }
    }

    private async blobToBase64(blob: Blob): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                const base64 = result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    private getMimeType(fileType: string): string {
        const mimeTypes: Record<string, string> = {
            'pdf': 'application/pdf',
            'png': 'image/png',
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'tiff': 'image/tiff',
            'tif': 'image/tiff'
        };
        return mimeTypes[fileType.toLowerCase()] || 'application/octet-stream';
    }
}

