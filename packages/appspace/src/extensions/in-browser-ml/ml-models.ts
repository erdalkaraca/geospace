/**
 * Supported in-browser ML models for specific tasks
 * These models are optimized for browser use and are well-tested with transformers.js
 * All models use the Xenova quantized versions for optimal browser performance
 */
export enum MLModel {
    /**
     * Zero-shot classification model for text classification tasks
     * Model: distilbert-base-uncased-mnli
     * Size: ~60-80MB quantized
     * Use case: Tool detection, text classification
     */
    ZERO_SHOT_CLASSIFICATION = 'Xenova/distilbert-base-uncased-mnli',
    
    /**
     * Feature extraction model for embeddings
     * Model: all-MiniLM-L6-v2
     * Size: ~23MB quantized
     * Use case: Text embeddings, semantic search
     */
    FEATURE_EXTRACTION = 'Xenova/all-MiniLM-L6-v2',
    
    /**
     * Text classification model
     * Model: distilbert-base-uncased-finetuned-sst-2-english
     * Size: ~67MB quantized
     * Use case: Sentiment analysis, text classification
     */
    TEXT_CLASSIFICATION = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english',
    
    /**
     * Question answering model
     * Model: distilbert-base-cased-distilled-squad
     * Size: ~125MB quantized
     * Use case: Question answering, reading comprehension
     */
    QUESTION_ANSWERING = 'Xenova/distilbert-base-cased-distilled-squad',
    
    /**
     * Summarization model
     * Model: distilbart-cnn-6-6
     * Size: ~300MB quantized
     * Use case: Text summarization
     */
    SUMMARIZATION = 'Xenova/distilbart-cnn-6-6',
    
    /**
     * Translation model (English to French)
     * Model: opus-mt-en-fr
     * Size: ~200MB quantized
     * Use case: Machine translation
     */
    TRANSLATION_EN_FR = 'Xenova/opus-mt-en-fr',
    
    /**
     * Fill-mask model
     * Model: distilbert-base-uncased
     * Size: ~67MB quantized
     * Use case: Masked language modeling, text completion
     */
    FILL_MASK = 'Xenova/distilbert-base-uncased',
    
    /**
     * Sentence similarity model
     * Model: all-MiniLM-L6-v2 (same as feature extraction)
     * Size: ~23MB quantized
     * Use case: Sentence similarity, semantic search
     */
    SENTENCE_SIMILARITY = 'Xenova/all-MiniLM-L6-v2',
    
    /**
     * Named entity recognition (token classification)
     * Model: distilbert-base-uncased-finetuned-conll03-english
     * Size: ~67MB quantized
     * Use case: Named entity recognition, token classification
     */
    TOKEN_CLASSIFICATION = 'Xenova/distilbert-base-uncased-finetuned-conll03-english',
    
    /**
     * Image classification model
     * Model: vit-base-patch16-224
     * Size: ~330MB quantized
     * Use case: Image classification
     */
    IMAGE_CLASSIFICATION = 'Xenova/vit-base-patch16-224',
    
    /**
     * Object detection model
     * Model: detr-resnet-50
     * Size: ~160MB quantized
     * Use case: Object detection in images
     */
    OBJECT_DETECTION = 'Xenova/detr-resnet-50',
    
    /**
     * Automatic speech recognition model
     * Model: whisper-tiny
     * Size: ~75MB quantized
     * Use case: Speech-to-text transcription
     */
    AUTOMATIC_SPEECH_RECOGNITION = 'Xenova/whisper-tiny',
    
    /**
     * Audio classification model
     * Model: wav2vec2-base
     * Size: ~95MB quantized
     * Use case: Audio classification, sound recognition
     */
    AUDIO_CLASSIFICATION = 'Xenova/wav2vec2-base',
}

/**
 * ML task types supported by transformers.js
 * These correspond to pipeline types available in transformers.js
 */
export enum MLTask {
    ZERO_SHOT_CLASSIFICATION = 'zero-shot-classification',
    FEATURE_EXTRACTION = 'feature-extraction',
    TEXT_CLASSIFICATION = 'text-classification',
    SENTIMENT_ANALYSIS = 'sentiment-analysis',
    QUESTION_ANSWERING = 'question-answering',
    SUMMARIZATION = 'summarization',
    TRANSLATION = 'translation',
    FILL_MASK = 'fill-mask',
    SENTENCE_SIMILARITY = 'sentence-similarity',
    TOKEN_CLASSIFICATION = 'token-classification',
    IMAGE_CLASSIFICATION = 'image-classification',
    OBJECT_DETECTION = 'object-detection',
    AUTOMATIC_SPEECH_RECOGNITION = 'automatic-speech-recognition',
    AUDIO_CLASSIFICATION = 'audio-classification',
    IMAGE_TO_TEXT = 'image-to-text',
    TEXT_TO_IMAGE = 'text-to-image',
    IMAGE_SEGMENTATION = 'image-segmentation',
    DEPTH_ESTIMATION = 'depth-estimation',
}

/**
 * Get the recommended model for a specific task
 * Returns the default model for the task, or null if no default is specified
 */
export function getModelForTask(task: MLTask): MLModel | null {
    switch (task) {
        case MLTask.ZERO_SHOT_CLASSIFICATION:
            return MLModel.ZERO_SHOT_CLASSIFICATION;
        case MLTask.FEATURE_EXTRACTION:
            return MLModel.FEATURE_EXTRACTION;
        case MLTask.TEXT_CLASSIFICATION:
        case MLTask.SENTIMENT_ANALYSIS:
            return MLModel.TEXT_CLASSIFICATION;
        case MLTask.QUESTION_ANSWERING:
            return MLModel.QUESTION_ANSWERING;
        case MLTask.SUMMARIZATION:
            return MLModel.SUMMARIZATION;
        case MLTask.TRANSLATION:
            return MLModel.TRANSLATION_EN_FR;
        case MLTask.FILL_MASK:
            return MLModel.FILL_MASK;
        case MLTask.SENTENCE_SIMILARITY:
            return MLModel.SENTENCE_SIMILARITY;
        case MLTask.TOKEN_CLASSIFICATION:
            return MLModel.TOKEN_CLASSIFICATION;
        case MLTask.IMAGE_CLASSIFICATION:
            return MLModel.IMAGE_CLASSIFICATION;
        case MLTask.OBJECT_DETECTION:
            return MLModel.OBJECT_DETECTION;
        case MLTask.AUTOMATIC_SPEECH_RECOGNITION:
            return MLModel.AUTOMATIC_SPEECH_RECOGNITION;
        case MLTask.AUDIO_CLASSIFICATION:
            return MLModel.AUDIO_CLASSIFICATION;
        default:
            return null;
    }
}

