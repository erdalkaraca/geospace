import { extractQueryTerms } from './query-utils';

export interface SnippetExtractionOptions {
    maxSnippets?: number;
    snippetLength?: number;
    minGap?: number;
}

const DEFAULT_MAX_SNIPPETS = 10;
const DEFAULT_SNIPPET_LENGTH = 400;
const DEFAULT_MIN_GAP = 400;

interface SnippetCandidate {
    snippet: string;
    score: number;
    start: number;
}

export class SnippetExtractor {
    private readonly maxSnippets: number;
    private readonly snippetLength: number;
    private readonly minGap: number;

    constructor(options: SnippetExtractionOptions = {}) {
        this.maxSnippets = options.maxSnippets ?? DEFAULT_MAX_SNIPPETS;
        this.snippetLength = options.snippetLength ?? DEFAULT_SNIPPET_LENGTH;
        this.minGap = options.minGap ?? DEFAULT_MIN_GAP;
    }

    extractSnippets(
        content: string,
        queryTerms: string[],
        maxSnippets?: number
    ): string[] {
        const effectiveMaxSnippets = maxSnippets ?? this.maxSnippets;
        
        if (queryTerms.length === 0) {
            return [];
        }

        const contentLower = content.toLowerCase();
        const snippetCandidates: SnippetCandidate[] = [];
        const seenSnippets = new Set<string>();

        for (const term of queryTerms) {
            let index = contentLower.indexOf(term);
            
            while (index !== -1) {
                const start = Math.max(0, index - this.snippetLength / 2);
                const end = Math.min(content.length, index + term.length + this.snippetLength / 2);
                const snippet = content.substring(start, end).trim();
                const snippetKey = `${start}-${end}`;
                
                if (snippet && !seenSnippets.has(snippetKey)) {
                    seenSnippets.add(snippetKey);
                    
                    const score = this.calculateSnippetScore(snippet, queryTerms);
                    snippetCandidates.push({ snippet, score, start });
                }

                index = contentLower.indexOf(term, index + 1);
            }
        }

        if (snippetCandidates.length === 0 && queryTerms.length > 0) {
            const firstTerm = queryTerms[0];
            const index = contentLower.indexOf(firstTerm);
            if (index !== -1) {
                const start = Math.max(0, index - this.snippetLength);
                const end = Math.min(content.length, index + firstTerm.length + this.snippetLength);
                const snippet = content.substring(start, end).trim();
                if (snippet) {
                    snippetCandidates.push({ snippet, score: 10, start });
                }
            }
        }

        snippetCandidates.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return a.start - b.start;
        });

        return this.selectNonOverlappingSnippets(snippetCandidates, effectiveMaxSnippets);
    }

    private calculateSnippetScore(snippet: string, queryTerms: string[]): number {
        const snippetLower = snippet.toLowerCase();
        let score = 0;
        
        for (const qTerm of queryTerms) {
            const termMatches = (snippetLower.match(
                new RegExp(qTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
            ) || []).length;
            score += termMatches * 10;
        }
        
        const fullQuery = queryTerms.join(' ');
        if (snippetLower.includes(fullQuery)) {
            score += 50;
        }
        
        const uniqueTermsFound = queryTerms.filter(t => snippetLower.includes(t)).length;
        score += uniqueTermsFound * 20;
        
        const termDensity = uniqueTermsFound / queryTerms.length;
        score += termDensity * 30;
        
        return score;
    }

    private selectNonOverlappingSnippets(
        candidates: SnippetCandidate[],
        maxSnippets: number
    ): string[] {
        const selectedSnippets: string[] = [];
        const usedRanges: Array<{ start: number; end: number }> = [];

        for (const candidate of candidates) {
            if (selectedSnippets.length >= maxSnippets) break;

            const candidateStart = candidate.start;
            const candidateEnd = candidate.start + candidate.snippet.length;

            const overlaps = usedRanges.some(range => {
                return !(candidateEnd < range.start - this.minGap || candidateStart > range.end + this.minGap);
            });

            if (!overlaps) {
                selectedSnippets.push(candidate.snippet);
                usedRanges.push({ start: candidateStart, end: candidateEnd });
            }
        }

        return selectedSnippets;
    }

    extractSimpleSnippet(content: string, maxLength: number = 500): string {
        const preview = content.substring(0, maxLength);
        return preview + (content.length > maxLength ? '...' : '');
    }

    extractContextSnippets(
        content: string,
        query: string,
        contextLength: number = 150
    ): Array<{ start: number; end: number; matchIndex: number }> {
        const queryLower = query.toLowerCase();
        const contentLower = content.toLowerCase();
        const matches: number[] = [];
        let index = contentLower.indexOf(queryLower);

        while (index !== -1) {
            matches.push(index);
            index = contentLower.indexOf(queryLower, index + 1);
        }

        if (matches.length === 0) {
            return [];
        }

        const snippets: Array<{ start: number; end: number; matchIndex: number }> = [];
        for (const matchIndex of matches) {
            const start = Math.max(0, matchIndex - contextLength);
            const end = Math.min(content.length, matchIndex + query.length + contextLength);
            snippets.push({ start, end, matchIndex });
        }

        return snippets;
    }
}

export const defaultSnippetExtractor = new SnippetExtractor();

