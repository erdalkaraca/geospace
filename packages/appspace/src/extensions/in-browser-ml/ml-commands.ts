import { registerAll, type ExecutionContext } from "../../core/commandregistry";
import { inBrowserMLService } from "./in-browser-ml-service";
import { MLTask, MLModel, getModelForTask } from "./ml-models";
import { createLogger } from "../../core/logger";
import { workspaceService, File } from "../../core/filesys";

const logger = createLogger('MLCommands');

/**
 * Commands for in-browser ML tasks that can be used by the LLM
 * These commands expose ML service capabilities as tools
 */

/**
 * Run object detection on an image
 * Useful for detecting objects like trees, buildings, vehicles, etc. in aerial imagery or photos
 */
registerAll({
    command: {
        "id": "detect_objects_in_image",
        "name": "Detect objects in image",
        "description": "Detects objects in an image using computer vision. Returns bounding boxes with object labels and confidence scores. Useful for extracting positions of objects like trees, buildings, vehicles, etc. from aerial imagery or photos.",
        "parameters": [
            {
                "name": "imageUrl",
                "description": "URL or workspace path of the image to analyze. Can be a URL (http://, https://, data:), a workspace file path (e.g., 'screenshot.png' or 'images/photo.jpg'), or any accessible image URL.",
                "type": "string",
                "required": true
            },
            {
                "name": "filterClasses",
                "description": "Optional array of object class names to filter results (e.g., ['tree', 'building']). If not provided, returns all detected objects.",
                "type": "array",
                "required": false
            },
            {
                "name": "minConfidence",
                "description": "Minimum confidence score (0-1) for detected objects. Default: 0.5",
                "type": "number",
                "required": false
            }
        ],
        "output": [
            {
                "name": "objects",
                "description": "Array of detected objects with label, confidence, and bounding box coordinates"
            },
            {
                "name": "filteredCount",
                "description": "Number of objects after filtering (if filterClasses was provided)"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            try {
                const imageUrl = context.params?.imageUrl;
                if (!imageUrl) {
                    return { error: "imageUrl parameter is required" };
                }

                const filterClasses = context.params?.filterClasses || [];
                const minConfidence = context.params?.minConfidence ?? 0.5;

                // Load the object detection pipeline
                const detector = await inBrowserMLService.getPipeline(
                    MLTask.OBJECT_DETECTION,
                    MLModel.OBJECT_DETECTION
                );

                // Load image - transformers.js accepts URLs, blobs, or image elements
                const imageInput = await loadImageInput(imageUrl);

                // Run object detection
                const results = await detector(imageInput.input);
                
                // Clean up object URL if we created one
                if (imageInput.cleanup) {
                    imageInput.cleanup();
                }

                // Process results
                let objects = results.map((result: any) => ({
                    label: result.label,
                    confidence: result.score,
                    bbox: {
                        xmin: result.box.xmin,
                        ymin: result.box.ymin,
                        xmax: result.box.xmax,
                        ymax: result.box.ymax
                    },
                    center: {
                        x: (result.box.xmin + result.box.xmax) / 2,
                        y: (result.box.ymin + result.box.ymax) / 2
                    }
                }))
                .filter((obj: any) => obj.confidence >= minConfidence);

                // Filter by class if specified
                let filteredCount = objects.length;
                if (filterClasses.length > 0) {
                    const filterLower = filterClasses.map((c: string) => c.toLowerCase());
                    objects = objects.filter((obj: any) => 
                        filterLower.some((filter: string) => obj.label.toLowerCase().includes(filter))
                    );
                    filteredCount = objects.length;
                }

                return {
                    objects,
                    filteredCount,
                    totalDetected: results.length
                };
            } catch (error: any) {
                logger.error(`Object detection failed: ${error.message}`);
                return { error: `Object detection failed: ${error.message}` };
            }
        }
    }
});

/**
 * Classify an image
 * Useful for determining what type of scene or object is in an image
 */
registerAll({
    command: {
        "id": "classify_image",
        "name": "Classify image",
        "description": "Classifies an image into predefined categories. Returns top predictions with confidence scores.",
        "parameters": [
            {
                "name": "imageUrl",
                "description": "URL or workspace path of the image to classify. Can be a URL (http://, https://, data:), a workspace file path (e.g., 'screenshot.png' or 'images/photo.jpg'), or any accessible image URL.",
                "type": "string",
                "required": true
            },
            {
                "name": "topK",
                "description": "Number of top predictions to return. Default: 5",
                "type": "number",
                "required": false
            }
        ],
        "output": [
            {
                "name": "predictions",
                "description": "Array of predictions with label and confidence score"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            try {
                const imageUrl = context.params?.imageUrl;
                if (!imageUrl) {
                    return { error: "imageUrl parameter is required" };
                }

                const topK = context.params?.topK ?? 5;

                const classifier = await inBrowserMLService.getPipeline(
                    MLTask.IMAGE_CLASSIFICATION,
                    MLModel.IMAGE_CLASSIFICATION
                );

                const imageInput = await loadImageInput(imageUrl);
                const results = await classifier(imageInput.input);
                
                // Clean up object URL if we created one
                if (imageInput.cleanup) {
                    imageInput.cleanup();
                }

                const predictions = results
                    .slice(0, topK)
                    .map((result: any) => ({
                        label: result.label,
                        confidence: result.score
                    }));

                return { predictions };
            } catch (error: any) {
                logger.error(`Image classification failed: ${error.message}`);
                return { error: `Image classification failed: ${error.message}` };
            }
        }
    }
});

/**
 * Run text classification or sentiment analysis
 */
registerAll({
    command: {
        "id": "classify_text",
        "name": "Classify text",
        "description": "Classifies text into categories or analyzes sentiment. Returns classification results with confidence scores.",
        "parameters": [
            {
                "name": "text",
                "description": "Text to classify",
                "type": "string",
                "required": true
            },
            {
                "name": "task",
                "description": "Classification task: 'text-classification' for general classification, 'sentiment-analysis' for sentiment. Default: 'text-classification'",
                "type": "string",
                "required": false,
                "allowedValues": ["text-classification", "sentiment-analysis"]
            }
        ],
        "output": [
            {
                "name": "predictions",
                "description": "Array of predictions with label and confidence score"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            try {
                const text = context.params?.text;
                if (!text) {
                    return { error: "text parameter is required" };
                }

                const taskType = context.params?.task || "text-classification";
                const task = taskType === "sentiment-analysis" 
                    ? MLTask.SENTIMENT_ANALYSIS 
                    : MLTask.TEXT_CLASSIFICATION;

                const classifier = await inBrowserMLService.getPipeline(
                    task,
                    getModelForTask(task) || MLModel.TEXT_CLASSIFICATION
                );

                const results = await classifier(text);

                // Handle different result formats
                const predictions = Array.isArray(results) 
                    ? results.map((r: any) => ({
                        label: r.label || r.class || r.classification,
                        confidence: r.score || r.confidence || 0
                    }))
                    : [{
                        label: results.label || results.class || results.classification,
                        confidence: results.score || results.confidence || 0
                    }];

                return { predictions };
            } catch (error: any) {
                logger.error(`Text classification failed: ${error.message}`);
                return { error: `Text classification failed: ${error.message}` };
            }
        }
    }
});

/**
 * Extract named entities from text
 */
registerAll({
    command: {
        "id": "extract_entities",
        "name": "Extract named entities",
        "description": "Extracts named entities (people, organizations, locations, etc.) from text using named entity recognition.",
        "parameters": [
            {
                "name": "text",
                "description": "Text to analyze for named entities",
                "type": "string",
                "required": true
            }
        ],
        "output": [
            {
                "name": "entities",
                "description": "Array of extracted entities with label, word, start, and end positions"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            try {
                const text = context.params?.text;
                if (!text) {
                    return { error: "text parameter is required" };
                }

                const ner = await inBrowserMLService.getPipeline(
                    MLTask.TOKEN_CLASSIFICATION,
                    MLModel.TOKEN_CLASSIFICATION
                );

                const results = await ner(text);

                const entities = results.map((result: any) => ({
                    entity: result.entity,
                    word: result.word,
                    score: result.score,
                    start: result.start,
                    end: result.end
                }));

                return { entities };
            } catch (error: any) {
                logger.error(`Entity extraction failed: ${error.message}`);
                return { error: `Entity extraction failed: ${error.message}` };
            }
        }
    }
});

/**
 * Answer questions based on a context text
 */
registerAll({
    command: {
        "id": "answer_question",
        "name": "Answer question from context",
        "description": "Answers a question based on provided context text using question-answering model.",
        "parameters": [
            {
                "name": "question",
                "description": "The question to answer",
                "type": "string",
                "required": true
            },
            {
                "name": "context",
                "description": "The context text to search for the answer",
                "type": "string",
                "required": true
            }
        ],
        "output": [
            {
                "name": "answer",
                "description": "The answer to the question"
            },
            {
                "name": "score",
                "description": "Confidence score of the answer"
            },
            {
                "name": "start",
                "description": "Start position of the answer in the context"
            },
            {
                "name": "end",
                "description": "End position of the answer in the context"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            try {
                const question = context.params?.question;
                const contextText = context.params?.context;

                if (!question || !contextText) {
                    return { error: "question and context parameters are required" };
                }

                const qa = await inBrowserMLService.getPipeline(
                    MLTask.QUESTION_ANSWERING,
                    MLModel.QUESTION_ANSWERING
                );

                const result = await qa(question, contextText);

                return {
                    answer: result.answer,
                    score: result.score,
                    start: result.start,
                    end: result.end
                };
            } catch (error: any) {
                logger.error(`Question answering failed: ${error.message}`);
                return { error: `Question answering failed: ${error.message}` };
            }
        }
    }
});

/**
 * Result type for image input loading
 */
interface ImageInput {
    input: string | Blob | HTMLImageElement;
    cleanup?: () => void;
}

/**
 * Helper function to load an image input from a URL or workspace path
 * Returns the input in a format transformers.js can accept (URL string, Blob, or Image element)
 * Also returns a cleanup function for object URLs that need to be revoked
 */
async function loadImageInput(urlOrPath: string): Promise<ImageInput> {
    // Check if it's a URL (http://, https://, or data:)
    if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://') || urlOrPath.startsWith('data:')) {
        // Pass URL directly to transformers.js - it will handle loading
        return { input: urlOrPath };
    }
    
    // Assume it's a workspace path
    try {
        const workspace = await workspaceService.getWorkspace();
        if (!workspace) {
            throw new Error("No workspace available");
        }
        
        const file = await workspace.getResource(urlOrPath) as File;
        if (!file) {
            throw new Error(`File not found in workspace: ${urlOrPath}`);
        }
        
        // Get file as blob - transformers.js accepts Blob directly
        const blob = await file.getContents({ blob: true }) as Blob;
        if (!blob) {
            throw new Error(`Failed to read file as blob: ${urlOrPath}`);
        }
        
        // Create object URL for the blob (transformers.js can use blob URLs)
        const objectUrl = URL.createObjectURL(blob);
        
        return {
            input: objectUrl, // Pass object URL to transformers.js
            cleanup: () => URL.revokeObjectURL(objectUrl) // Cleanup function to revoke URL after processing
        };
    } catch (error: any) {
        throw new Error(`Failed to load image from workspace path ${urlOrPath}: ${error.message}`);
    }
}

