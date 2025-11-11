import { INDEX_FIELD_NAMES, VECTOR_SEARCH_CONFIG } from './utils/constants';

export interface VectorEmbedding {
    id: string;
    documentId: string;
    chunkIndex?: number;
    chunkStartOffset?: number;
    chunkEndOffset?: number;
    embedding: number[];
    idx0: number;
    idx1: number;
    idx2: number;
    idx3: number;
    idx4: number;
}

export type IndexValues = {
    [K in typeof INDEX_FIELD_NAMES[number]]: number;
};

export interface SampleVector {
    vector: number[];
    idx: number;
}

export function euclideanDistance(vec1: number[], vec2: number[]): number {
    if (vec1.length !== vec2.length) {
        throw new Error(`Vector dimensions must match: ${vec1.length} vs ${vec2.length}`);
    }

    let sum = 0;
    for (let i = 0; i < vec1.length; i++) {
        const diff = vec1[i] - vec2[i];
        sum += diff * diff;
    }
    return Math.sqrt(sum);
}

export function generateSampleVectors(
    count: number,
    dimension: number,
    existingEmbeddings?: number[][]
): SampleVector[] {
    const samples: SampleVector[] = [];

    if (existingEmbeddings && existingEmbeddings.length > 0) {
        for (let i = 0; i < count; i++) {
            if (i < existingEmbeddings.length) {
                samples.push({
                    vector: existingEmbeddings[i],
                    idx: i
                });
            } else {
                const vector: number[] = [];
                for (let j = 0; j < dimension; j++) {
                    vector.push(Math.random() * 2 - 1);
                }
                samples.push({
                    vector,
                    idx: i
                });
            }
        }
    } else {
        for (let i = 0; i < count; i++) {
            const vector: number[] = [];
            for (let j = 0; j < dimension; j++) {
                vector.push(Math.random() * 2 - 1);
            }
            samples.push({
                vector,
                idx: i
            });
        }
    }

    return samples;
}

export function calculateIndexValues(
    embedding: number[],
    sampleVectors: SampleVector[]
): IndexValues {
    if (sampleVectors.length !== INDEX_FIELD_NAMES.length) {
        throw new Error(
            `Sample vectors count (${sampleVectors.length}) must match index field count (${INDEX_FIELD_NAMES.length})`
        );
    }

    const result = {} as IndexValues;
    for (let i = 0; i < INDEX_FIELD_NAMES.length; i++) {
        result[INDEX_FIELD_NAMES[i]] = euclideanDistance(embedding, sampleVectors[i].vector);
    }
    return result;
}

export function getIndexValueArray(indexValues: IndexValues): number[] {
    return INDEX_FIELD_NAMES.map(name => indexValues[name]);
}

export function createIndexValuesFromArray(values: number[]): IndexValues {
    if (values.length !== INDEX_FIELD_NAMES.length) {
        throw new Error(
            `Values array length (${values.length}) must match index field count (${INDEX_FIELD_NAMES.length})`
        );
    }
    const result = {} as IndexValues;
    for (let i = 0; i < INDEX_FIELD_NAMES.length; i++) {
        result[INDEX_FIELD_NAMES[i]] = values[i];
    }
    return result;
}

export function cosineSimilarity(vec1: number[], vec2: number[]): number {
    if (vec1.length !== vec2.length) {
        throw new Error(`Vector dimensions must match: ${vec1.length} vs ${vec2.length}`);
    }

    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;

    for (let i = 0; i < vec1.length; i++) {
        dotProduct += vec1[i] * vec2[i];
        norm1 += vec1[i] * vec1[i];
        norm2 += vec2[i] * vec2[i];
    }

    const denominator = Math.sqrt(norm1) * Math.sqrt(norm2);
    if (denominator === 0) {
        return 0;
    }

    return dotProduct / denominator;
}

