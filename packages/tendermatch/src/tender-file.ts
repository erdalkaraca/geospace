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
    isFulfilled?: boolean;
    evaluatedAt?: number;
}

export interface TenderFile {
    contextId?: string;
    indexedFiles?: IndexedFile[];
    criteria?: Criteria[];
}

