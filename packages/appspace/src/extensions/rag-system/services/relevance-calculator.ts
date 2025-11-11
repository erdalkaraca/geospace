import { IndexedDocument } from '../document-index-service';
import { normalizeQuery, extractQueryTerms } from '../utils/query-utils';
import { RELEVANCE_WEIGHTS } from '../utils/constants';

export class RelevanceCalculator {
    calculateRelevance(
        doc: IndexedDocument,
        query: string
    ): number {
        const queryLower = normalizeQuery(query);
        const queryTerms = extractQueryTerms(query);

        let score = 0;

        const fileNameLower = doc.fileName.toLowerCase();
        const filePathLower = doc.filePath.toLowerCase();
        const contentLower = doc.content.toLowerCase();

        const fileNameMatches = queryTerms.filter(term => fileNameLower.includes(term)).length;
        const filePathMatches = queryTerms.filter(term => filePathLower.includes(term)).length;
        const contentMatches = queryTerms.filter(term => contentLower.includes(term)).length;

        score += fileNameMatches * RELEVANCE_WEIGHTS.FILE_NAME_MATCH;
        score += filePathMatches * RELEVANCE_WEIGHTS.FILE_PATH_MATCH;
        score += contentMatches * RELEVANCE_WEIGHTS.CONTENT_MATCH;

        if (fileNameLower.includes(queryLower)) {
            score += RELEVANCE_WEIGHTS.FILE_NAME_EXACT;
        }

        if (filePathLower.includes(queryLower)) {
            score += RELEVANCE_WEIGHTS.FILE_PATH_EXACT;
        }

        const exactPhraseMatches = (contentLower.match(
            new RegExp(queryLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
        ) || []).length;
        score += exactPhraseMatches * RELEVANCE_WEIGHTS.EXACT_PHRASE;

        const totalTerms = queryTerms.length;
        const matchedTerms = queryTerms.filter(term => contentLower.includes(term)).length;
        const termCoverage = totalTerms > 0 ? matchedTerms / totalTerms : 0;
        score += termCoverage * RELEVANCE_WEIGHTS.TERM_COVERAGE;

        return score;
    }

    calculateFileNameRelevance(
        doc: IndexedDocument,
        fileName: string
    ): number {
        const docNameLower = doc.fileName.toLowerCase();
        const fileNameLower = fileName.toLowerCase();
        
        if (docNameLower === fileNameLower) {
            return 100;
        }
        if (docNameLower.includes(fileNameLower)) {
            return 80;
        }
        return 0;
    }
}

export const relevanceCalculator = new RelevanceCalculator();

