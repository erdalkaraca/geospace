import { pipeline, env } from '@xenova/transformers';
import { createLogger } from '../../core/logger';
import { MLTask, MLModel, getModelForTask } from './ml-models';

const logger = createLogger('InBrowserMLService');

/**
 * Service for in-browser machine learning tasks using transformers.js
 * Handles specialized ML tasks like zero-shot classification, embeddings, etc.
 * Not intended for chat/text generation - use regular LLM providers for that.
 */
export class InBrowserMLService {
    private static instance: InBrowserMLService;
    private pipelines: Map<string, any> = new Map();
    private loadingPipelines: Set<string> = new Set();

    private constructor() {
        // Configure transformers.js environment
        env.allowRemoteModels = true;
        env.allowLocalModels = false;
        (env as any).remoteHost = 'https://huggingface.co';
    }

    static getInstance(): InBrowserMLService {
        if (!InBrowserMLService.instance) {
            InBrowserMLService.instance = new InBrowserMLService();
        }
        return InBrowserMLService.instance;
    }

    /**
     * Set Hugging Face token for authenticated model access
     */
    setAuthToken(token: string | null): void {
        if (token && token.trim()) {
            (env as any).useAuthToken = token.trim();
            logger.info('Hugging Face token set for authenticated model access');
        } else {
            (env as any).useAuthToken = null;
        }
    }

    /**
     * Get or load a pipeline for a specific task and model
     * @param task The ML task
     * @param modelName The model identifier (can be MLModel enum or custom model string)
     * @param options Optional pipeline options
     */
    async getPipeline(
        task: MLTask | string,
        modelName: MLModel | string,
        options: any = {}
    ): Promise<any> {
        // If modelName is not provided, try to get recommended model for task
        if (!modelName && typeof task !== 'string') {
            const recommendedModel = getModelForTask(task);
            if (recommendedModel) {
                modelName = recommendedModel;
            }
        }
        
        const taskStr = typeof task === 'string' ? task : task;
        const modelStr = typeof modelName === 'string' ? modelName : modelName;
        const pipelineKey = `${taskStr}:${modelStr}`;

        if (this.pipelines.has(pipelineKey)) {
            return this.pipelines.get(pipelineKey);
        }

        if (this.loadingPipelines.has(pipelineKey)) {
            // Wait for the pipeline to finish loading
            while (this.loadingPipelines.has(pipelineKey)) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            return this.pipelines.get(pipelineKey);
        }

        this.loadingPipelines.add(pipelineKey);
        try {
            logger.info(`Loading transformers.js pipeline: ${taskStr} with model ${modelStr}...`);
            // pipeline accepts string for task type, cast to any to allow enum values
            const pipe = await pipeline(taskStr as any, modelStr, {
                quantized: true,
                ...options
            });
            this.pipelines.set(pipelineKey, pipe);
            logger.info(`Pipeline ${pipelineKey} loaded successfully`);
            return pipe;
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            logger.error(`Failed to load pipeline ${pipelineKey}: ${errorMsg}`);
            throw error;
        } finally {
            this.loadingPipelines.delete(pipelineKey);
        }
    }

    /**
     * Clear a cached pipeline
     */
    clearPipeline(task: MLTask | string, modelName: MLModel | string): void {
        const taskStr = typeof task === 'string' ? task : task;
        const modelStr = typeof modelName === 'string' ? modelName : modelName;
        const pipelineKey = `${taskStr}:${modelStr}`;
        this.pipelines.delete(pipelineKey);
    }

    /**
     * Clear all cached pipelines
     */
    clearAllPipelines(): void {
        this.pipelines.clear();
    }
}

// Export singleton instance
export const inBrowserMLService = InBrowserMLService.getInstance();

