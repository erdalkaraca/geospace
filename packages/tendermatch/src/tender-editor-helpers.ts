import type { IndexedFile, Criteria } from "./tender-file";

export function createFileKey(workspacePath: string, filePath: string): string {
    return `${workspacePath}:${filePath}`;
}

export function extractFileName(filePath: string): string {
    return filePath.split('/').pop() || filePath;
}

export function clearCriteriaAnswer(criteria: Criteria): void {
    criteria.answer = undefined;
    criteria.essence = undefined;
    criteria.fulfillmentScore = undefined;
    criteria.evaluatedAt = undefined;
}

export function hasCriteriaAnswer(criteria: Criteria): boolean {
    return !!(criteria.answer || criteria.essence !== undefined || criteria.fulfillmentScore !== undefined || criteria.evaluatedAt);
}

export function createDocumentNumberMap(indexedFiles: IndexedFile[]): Map<string, number> {
    const map = new Map<string, number>();
    indexedFiles.forEach((indexedFile, index) => {
        const key = createFileKey(indexedFile.workspacePath, indexedFile.filePath);
        map.set(key, index + 1);
    });
    return map;
}

export interface ScoreRange {
    min: number;
    max: number;
    r: number;
    g: number;
    b: number;
}

export const SCORE_RANGES: ScoreRange[] = [
    { min: 0, max: 20, r: 255, g: 0, b: 0 },
    { min: 21, max: 40, r: 255, g: 140, b: 0 },
    { min: 41, max: 60, r: 255, g: 255, b: 0 },
    { min: 61, max: 80, r: 150, g: 255, b: 0 },
    { min: 81, max: 100, r: 0, g: 255, b: 0 }
];

export function getScoreColor(score: number): { r: number; g: number; b: number } {
    const range = SCORE_RANGES.find(r => score >= r.min && score <= r.max) || SCORE_RANGES[SCORE_RANGES.length - 1];
    return { r: range.r, g: range.g, b: range.b };
}

export function createScoreStyle(score: number): string {
    const { r, g, b } = getScoreColor(score);
    return `--wa-color-text-normal: rgb(${r}, ${g}, ${b}); --wa-color-neutral-border-normal: rgb(${r}, ${g}, ${b}); background: rgba(${r}, ${g}, ${b}, 0.2);`;
}

export interface HistogramBin {
    label: string;
    min: number;
    max: number;
    count: number;
    midScore: number;
}

export function createHistogramBins(): HistogramBin[] {
    return [
        { label: '0-20', min: 0, max: 20, count: 0, midScore: 10 },
        { label: '21-40', min: 21, max: 40, count: 0, midScore: 30 },
        { label: '41-60', min: 41, max: 60, count: 0, midScore: 50 },
        { label: '61-80', min: 61, max: 80, count: 0, midScore: 70 },
        { label: '81-100', min: 81, max: 100, count: 0, midScore: 90 }
    ];
}

export function calculateHistogramBins(criteria: Criteria[]): HistogramBin[] {
    const bins = createHistogramBins();
    const evaluated = criteria.filter(c => c.fulfillmentScore !== undefined);
    
    evaluated.forEach(c => {
        const score = c.fulfillmentScore || 0;
        for (const bin of bins) {
            if (score >= bin.min && score <= bin.max) {
                bin.count++;
                break;
            }
        }
    });
    
    return bins;
}

export interface ParsedAIResponse {
    essence?: string;
    fulfillmentScore?: number;
    detailedAnswer?: string;
}

export function parseAIResponse(response: string): ParsedAIResponse | null {
    let jsonText = response.trim();
    
    const codeBlockMatch = jsonText.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
    if (codeBlockMatch) {
        jsonText = codeBlockMatch[1];
    } else {
        const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            jsonText = jsonMatch[0];
        }
    }
    
    try {
        return JSON.parse(jsonText) as ParsedAIResponse;
    } catch {
        const essenceMatch = response.match(/(?:"essence"\s*:\s*")(.+?)(?=")/i);
        const scoreMatch = response.match(/(?:"fulfillmentScore"\s*:\s*)(\d+)/i);
        
        const result: ParsedAIResponse = {};
        if (essenceMatch && essenceMatch[1]) {
            result.essence = essenceMatch[1].trim();
        }
        if (scoreMatch && scoreMatch[1]) {
            result.fulfillmentScore = Math.max(0, Math.min(100, parseInt(scoreMatch[1], 10)));
        }
        
        return Object.keys(result).length > 0 ? result : null;
    }
}

export function buildEvaluationPrompt(question: string, contextText: string): string {
    return `Based on the following documents, please evaluate this criterion: "${question}"

${contextText}

Please provide your evaluation as a valid JSON object with the following structure:
{
  "essence": "A concise 1-2 sentence summary of the key information relevant to this criterion",
  "fulfillmentScore": 0-100,
  "detailedAnswer": "A clear and detailed answer explaining your evaluation. When referencing information, always cite using the document number in backticks (e.g., \`[1]\`, \`[2]\`). For example: 'According to \`[1]\`, the deadline is...' or 'The document \`[2]\` states...'. Do not refer to individual excerpts or chunks as separate documents - they are all parts of the same source document."
}

Important:
- Respond in the same language as the criterion question
- Output ONLY valid JSON, no additional text before or after
- When citing information in your "detailedAnswer", always use the document number format in backticks: \`[1]\`, \`[2]\`, etc. (e.g., "According to \`[1]\`, ..." or "The document \`[2]\` states..."). The excerpts shown above are parts of complete documents, not separate documents themselves.
- "fulfillmentScore" must be a number between 0 and 100 representing how well the criterion can be derived from the data:
  * 100: The criterion is fully satisfied and clearly evident in the documents
  * 75-99: The criterion is mostly satisfied with strong evidence
  * 50-74: The criterion is partially satisfied with moderate evidence
  * 25-49: The criterion is weakly satisfied with limited evidence
  * 1-24: The criterion is barely satisfied with minimal evidence
  * 0: The criterion cannot be satisfied or information is not found in the documents
- If the information is not found in the documents, set "fulfillmentScore" to 0 and explain in "detailedAnswer"`;
}

export function buildContextText(searchResults: Array<{ document: { workspacePath: string; filePath: string; fileName: string }; matchedSnippets: string[] }>, documentNumberMap: Map<string, number>): string {
    const documentMap = new Map<string, { document: typeof searchResults[0]['document']; snippets: string[]; docNumber: number }>();
    
    for (const result of searchResults) {
        const docKey = createFileKey(result.document.workspacePath, result.document.filePath);
        const docNumber = documentNumberMap.get(docKey) || 0;
        
        if (!documentMap.has(docKey)) {
            documentMap.set(docKey, { document: result.document, snippets: [], docNumber });
        }
        documentMap.get(docKey)!.snippets.push(...result.matchedSnippets);
    }

    const sortedDocuments = Array.from(documentMap.entries())
        .map(([key, { document, snippets, docNumber }]) => ({ key, document, snippets, docNumber }))
        .sort((a, b) => a.docNumber - b.docNumber);

    return sortedDocuments.map(({ document, snippets, docNumber }) => {
        return `[${docNumber}] ${document.fileName}\nRelevant excerpts from this document:\n${snippets.join('\n\n')}`;
    }).join('\n\n---\n\n');
}

export function applyParsedResponse(criteria: Criteria, parsed: ParsedAIResponse | null, fallbackAnswer: string): void {
    if (!parsed) {
        criteria.answer = fallbackAnswer;
        return;
    }

    if (parsed.essence) {
        criteria.essence = parsed.essence;
    }

    if (parsed.fulfillmentScore !== undefined) {
        criteria.fulfillmentScore = Math.max(0, Math.min(100, Math.round(parsed.fulfillmentScore)));
    }

    criteria.answer = parsed.detailedAnswer || fallbackAnswer;
}

