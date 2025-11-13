export interface IndexedFile {
    filePath: string;
    workspacePath: string;
    indexedAt: number;
}

export interface Criteria {
    id: string;
    question: string;
    answer?: string;
    essence?: string;
    fulfillmentScore?: number;
    evaluatedAt?: number;
}

export interface TenderFile {
    contextId?: string;
    indexedFiles?: IndexedFile[];
    criteria?: Criteria[];
}

