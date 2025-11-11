import { RAGSearchResult } from '../rag-service';
import { SnippetExtractor } from '../utils/snippet-extractor';
import { SNIPPET_LENGTHS } from '../utils/constants';

export class RAGResultFormatter {
    constructor(private snippetExtractor: SnippetExtractor) {}

    formatRAGContext(results: RAGSearchResult[]): string {
        if (results.length === 0) {
            return '';
        }

        const sections = results.map((result, idx) => {
            const doc = result.document;
            const snippets = result.matchedSnippets
                .map((s, i) => `  [Snippet ${i + 1}]\n  ${s}`)
                .join('\n\n');

            return `[Document ${idx + 1}: ${doc.fileName} (${doc.filePath})]
Relevance: ${result.relevance.toFixed(2)}
${snippets.length > 0 ? `Relevant snippets:\n${snippets}` : `Content preview: ${this.snippetExtractor.extractSimpleSnippet(doc.content, SNIPPET_LENGTHS.PREVIEW)}`}
---`;
        }).join('\n\n');

        return `Here are relevant documents from the workspace that might help answer the question:

${sections}

Use the information from these documents to provide a helpful answer. Pay special attention to numbers, percentages, dates, and specific values mentioned in the snippets. If the documents don't contain relevant information, you can still answer based on your general knowledge.`;
    }

    formatSearchResults(results: RAGSearchResult[]): Array<{
        file: string;
        path: string;
        relevance: string;
        language?: string;
        size: number;
        snippets: string[];
        preview: string;
    }> {
        return results.map(r => ({
            file: r.document.fileName,
            path: r.document.filePath,
            relevance: r.relevance.toFixed(2),
            language: r.document.metadata.language,
            size: r.document.metadata.size,
            snippets: r.matchedSnippets,
            preview: this.snippetExtractor.extractSimpleSnippet(r.document.content, 200) + '...'
        }));
    }

    formatCommandResults(results: RAGSearchResult[]): Array<{
        file: string;
        path: string;
        relevance: number;
        snippets: string[];
    }> {
        return results.map(r => ({
            file: r.document.fileName,
            path: r.document.filePath,
            relevance: r.relevance,
            snippets: r.matchedSnippets
        }));
    }
}

