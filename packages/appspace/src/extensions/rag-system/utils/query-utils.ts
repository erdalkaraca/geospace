export interface QueryTermsOptions {
    minTermLength?: number;
    caseSensitive?: boolean;
}

const DEFAULT_MIN_TERM_LENGTH = 2;

export function extractQueryTerms(
    query: string,
    options: QueryTermsOptions = {}
): string[] {
    if (!query || !query.trim()) {
        return [];
    }

    const minLength = options.minTermLength ?? DEFAULT_MIN_TERM_LENGTH;
    const text = options.caseSensitive ? query : query.toLowerCase();
    
    return text
        .split(/\s+/)
        .filter(term => term.length >= minLength);
}

export function normalizeQuery(query: string): string {
    return query.toLowerCase().trim();
}

