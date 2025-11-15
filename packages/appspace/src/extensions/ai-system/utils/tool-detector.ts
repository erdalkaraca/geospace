import { createLogger } from '../../../core/logger';
import { inBrowserMLService } from '../../in-browser-ml/in-browser-ml-service';
import { MLTask, MLModel } from '../../in-browser-ml/ml-models';

const logger = createLogger('ToolDetector');

/**
 * Service to detect if a user prompt likely requires tool support.
 * Uses a lightweight text classification model running in the browser.
 */
export class ToolDetector {
    private classifier: any = null; // ZeroShotClassificationPipeline from @xenova/transformers
    private loading = false;
    private loadPromise: Promise<void> | null = null;

    /**
     * Initialize the classifier model (lazy loading)
     */
    private async ensureLoaded(): Promise<void> {
        if (this.classifier) {
            return;
        }

        if (this.loading && this.loadPromise) {
            return this.loadPromise;
        }

        this.loading = true;
        this.loadPromise = (async () => {
            try {
                logger.info('Loading ML model for tool detection...');
                // Use a lightweight zero-shot classification model
                // This model is small and runs efficiently in the browser
                // Quantized size is approximately 60-80MB (varies by browser cache)
                this.classifier = await inBrowserMLService.getPipeline(
                    MLTask.ZERO_SHOT_CLASSIFICATION,
                    MLModel.ZERO_SHOT_CLASSIFICATION,
                    {
                        quantized: true, // Use quantized version for smaller size and faster inference
                    }
                );
                logger.info('ML model loaded successfully - will use for tool detection');
            } catch (error) {
                const errorMsg = error instanceof Error ? error.message : String(error);
                logger.warn(`Failed to load ML model, will use keyword-based detection fallback: ${errorMsg}`);
                this.classifier = null;
            } finally {
                this.loading = false;
            }
        })();

        return this.loadPromise;
    }

    /**
     * Detect if a prompt likely requires tool support
     * @param prompt The user's prompt text
     * @returns true if tools are likely needed, false otherwise
     */
    async needsTools(prompt: string): Promise<boolean> {
        if (!prompt || prompt.trim().length === 0) {
            return false;
        }

        const normalizedPrompt = prompt.toLowerCase().trim();

        // Quick keyword-based fallback for common cases
        const simpleGreetings = ['hello', 'hi', 'hey', 'thanks', 'thank you', 'bye', 'goodbye'];
        if (simpleGreetings.some(greeting => normalizedPrompt === greeting || normalizedPrompt.startsWith(greeting + ' '))) {
            return false;
        }

        // Try to load and use the ML model
        try {
            await this.ensureLoaded();

            if (this.classifier) {
                logger.info(`Using ML model to classify prompt: "${normalizedPrompt.substring(0, 50)}${normalizedPrompt.length > 50 ? '...' : ''}"`);
                // Use zero-shot classification to determine if prompt needs tools
                const result = await this.classifier(normalizedPrompt, [
                    'requires executing commands or actions',
                    'is a simple greeting or question'
                ]);

                // If "requires executing commands" has higher confidence, return true
                const needsTools = result.labels[0] === 'requires executing commands or actions' &&
                    result.scores[0] > 0.6; // Confidence threshold

                logger.info(`ML classification result: ${result.labels[0]} (confidence: ${(result.scores[0] * 100).toFixed(1)}%) - needsTools: ${needsTools}`);
                return needsTools;
            }
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            logger.warn(`ML classification failed, using keyword fallback: ${errorMsg}`);
        }

        // Fallback to keyword-based detection if model fails or isn't loaded
        logger.info('Using keyword-based detection (ML model not available)');
        const result = this.keywordBasedDetection(normalizedPrompt);
        logger.info(`Keyword detection result: needsTools=${result}`);
        return result;
    }

    /**
     * Fallback keyword-based detection
     */
    private keywordBasedDetection(prompt: string): boolean {
        // Action verbs that typically require tools
        const actionKeywords = [
            'create', 'open', 'delete', 'read', 'write', 'edit', 'save', 'rename',
            'move', 'copy', 'list', 'show', 'display', 'run', 'execute', 'build',
            'add', 'remove', 'update', 'modify', 'change', 'set', 'get', 'find',
            'search', 'filter', 'sort', 'install', 'uninstall', 'load', 'import',
            'export', 'generate', 'make', 'do', 'perform', 'call', 'invoke'
        ];

        // File/workspace related keywords
        const contextKeywords = [
            'file', 'folder', 'directory', 'workspace', 'editor', 'map', 'layer',
            'command', 'tool', 'extension', 'script', 'code', 'project'
        ];

        // Check if prompt contains action keywords
        const hasAction = actionKeywords.some(keyword => prompt.includes(keyword));
        
        // Check if prompt contains context keywords
        const hasContext = contextKeywords.some(keyword => prompt.includes(keyword));

        // If it has both action and context, or strong action verbs, likely needs tools
        return hasAction && (hasContext || prompt.length > 20);
    }

    /**
     * Clean up resources
     */
    dispose(): void {
        this.classifier = null;
        this.loading = false;
        this.loadPromise = null;
    }
}

// Singleton instance
export const toolDetector = new ToolDetector();

