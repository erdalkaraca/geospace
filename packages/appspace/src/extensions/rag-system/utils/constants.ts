export const SNIPPET_LENGTHS = {
    DEFAULT: 400,
    PREVIEW: 500,
    LONG_PREVIEW: 1000,
    CONTEXT: 150,
} as const;

export const RELEVANCE_WEIGHTS = {
    FILE_NAME_MATCH: 10,
    FILE_PATH_MATCH: 5,
    CONTENT_MATCH: 1,
    FILE_NAME_EXACT: 20,
    FILE_PATH_EXACT: 10,
    EXACT_PHRASE: 5,
    TERM_COVERAGE: 15,
} as const;

export const SEARCH_CONFIG = {
    DEFAULT_LIMIT: 5,
    MAX_LIMIT: 20,
    DEFAULT_MIN_RELEVANCE: 0,
    QUERY_TERM_MIN_LENGTH: 2,
} as const;

export const VECTOR_SEARCH_CONFIG = {
    DEFAULT_INDEX_DISTANCE: 2.0,
    DEFAULT_DOCS_PER_INDEX_SIDE: 100,
    DEFAULT_LIMIT: 10,
    SAMPLE_VECTOR_COUNT: 5,
} as const;

export const INDEX_FIELD_NAMES = [
    'idx0', 'idx1', 'idx2', 'idx3', 'idx4'
] as const;

export type IndexFieldName = typeof INDEX_FIELD_NAMES[number];

export const CONTENT_PREVIEW_LENGTHS = {
    SHORT: 200,
    MEDIUM: 500,
    LONG: 1000,
} as const;

