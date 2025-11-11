import { pipeline, env, type FeatureExtractionPipeline } from '@xenova/transformers';
import { createLogger } from '../../core/logger';

const logger = createLogger('EmbeddingService');

env.allowRemoteModels = true;
env.allowLocalModels = false;
(env as any).remoteHost = 'https://huggingface.co';

export interface EmbeddingOptions {
    pooling?: 'mean' | 'cls' | 'none';
    normalize?: boolean;
}

class EmbeddingService {
    private pipePromise?: Promise<FeatureExtractionPipeline>;
    private modelName = 'Xenova/all-MiniLM-L6-v2';
    private readonly EMBEDDING_DIMENSION = 384;
    private readonly DEFAULT_OPTIONS: EmbeddingOptions = {
        pooling: 'mean',
        normalize: true
    };

    async initialize(): Promise<void> {
        if (this.pipePromise) {
            try {
                await this.pipePromise;
                return;
            } catch (error) {
                logger.warn('Previous initialization failed, retrying...');
                this.pipePromise = undefined;
            }
        }

        logger.info(`Initializing embedding service with model: ${this.modelName}`);
        
        try {
            this.pipePromise = pipeline('feature-extraction', this.modelName, {
                quantized: false,
            });
            await this.pipePromise;
            logger.info('Embedding service initialized successfully');
        } catch (error: any) {
            const errorMessage = error?.message || String(error);
            const errorDetails = error ? JSON.stringify(error) : '';
            logger.error(`Failed to initialize embedding service: ${errorMessage}${errorDetails ? ` - ${errorDetails}` : ''}`);
            this.pipePromise = undefined;
            throw new Error(`Embedding service initialization failed: ${errorMessage}`);
        }
    }

    async generateEmbedding(
        text: string,
        options: EmbeddingOptions = {}
    ): Promise<number[]> {
        if (!this.pipePromise) {
            await this.initialize();
        }

        const pipe = await this.pipePromise!;
        const opts = { ...this.DEFAULT_OPTIONS, ...options };
        
        try {
            const output = await pipe(text, {
                pooling: opts.pooling as 'mean' | 'cls' | 'none' | undefined,
                normalize: opts.normalize,
            });

            const embedding = Array.from(output.data) as number[];
            
            if (embedding.length !== this.EMBEDDING_DIMENSION) {
                logger.warn(`Unexpected embedding dimension: ${embedding.length}, expected ${this.EMBEDDING_DIMENSION}`);
            }

            return embedding;
        } catch (error) {
            logger.error(`Failed to generate embedding: ${error}`);
            throw error;
        }
    }

    async generateEmbeddings(
        texts: string[],
        options: EmbeddingOptions = {}
    ): Promise<number[][]> {
        const embeddings: number[][] = [];
        
        for (const text of texts) {
            const embedding = await this.generateEmbedding(text, options);
            embeddings.push(embedding);
        }
        
        return embeddings;
    }

    getEmbeddingDimension(): number {
        return this.EMBEDDING_DIMENSION;
    }

    getModelName(): string {
        return this.modelName;
    }
}

export const embeddingService = new EmbeddingService();

