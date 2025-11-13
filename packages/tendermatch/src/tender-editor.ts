import { customElement, property, state } from "lit/decorators.js";
import { KPart } from "@kispace-io/appspace/parts/k-part";
import { html, css, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { marked } from "marked";
import type { EditorInput } from "@kispace-io/appspace/api";
import { File, workspaceService, taskService, toastInfo, toastError, FileContentType } from "@kispace-io/appspace/api";
import { confirmDialog } from "@kispace-io/appspace/core/dialog";
import { DocumentSearchScope, documentIndexService } from "@kispace-io/appspace/extensions/rag-system/document-index-service";
import type { TenderFile, IndexedFile, Criteria } from "./tender-file";
import { ragService } from "@kispace-io/appspace/extensions/rag-system/rag-service";
import { aiService } from "@kispace-io/appspace/extensions/ai-system/service/ai-service";
import { createLogger } from "@kispace-io/appspace/core/logger";
import "@kispace-io/appspace/widgets/k-icon";

const logger = createLogger('TenderEditor');

function generateUUID(): string {
    return crypto.randomUUID();
}

@customElement('k-tender-editor')
export class KTenderEditor extends KPart {
    @property({ attribute: false })
    public input?: EditorInput;

    @state()
    private isDragOver = false;

    @state()
    private tenderFile?: TenderFile;

    @state()
    private indexingFiles = new Set<string>();

    @state()
    private evaluatingCriteria = new Set<string>();

    @state()
    private isEvaluatingAll = false;

    @state()
    private newCriteriaQuestion = '';

    private documentContext?: DocumentSearchScope;
    private currentFile?: File;

    protected async doBeforeUI() {
        if (!this.input?.data || !(this.input.data instanceof File)) {
            return;
        }

        const file = this.input.data as File;
        this.currentFile = file;
        let contextId: string;

        try {
            const content = await file.getContents({ contentType: FileContentType.TEXT });
            if (typeof content !== 'string') {
                throw new Error('File content is not text');
            }

            let data: TenderFile;
            try {
                data = JSON.parse(content || '{}') as TenderFile;
            } catch {
                data = {};
            }

            let isNewContextId = false;
            if (data.contextId && typeof data.contextId === 'string') {
                contextId = data.contextId;
            } else {
                const uuid = generateUUID();
                contextId = `tender-editor:${uuid}`;
                data.contextId = contextId;
                isNewContextId = true;
            }

            if (!data.indexedFiles) {
                data.indexedFiles = [];
            }

            if (!data.criteria) {
                data.criteria = [];
            }

            this.tenderFile = data;
            this.documentContext = {
                tags: [contextId]
            };
            this.markDirty(isNewContextId);
        } catch (error) {
            toastError(`Failed to initialize document context: ${error}`);
        }
    }

    async save() {
        if (!this.tenderFile || !this.currentFile) {
            return;
        }

        try {
            const updatedContent = JSON.stringify(this.tenderFile, null, 2);
            await this.currentFile.saveContents(updatedContent, { contentType: FileContentType.TEXT });
            this.markDirty(false);
        } catch (error) {
            toastError(`Failed to save tender file: ${error}`);
            throw error;
        }
    }

    protected doClose() {
        this.input = undefined;
        this.documentContext = undefined;
        this.tenderFile = undefined;
        this.currentFile = undefined;
    }

    protected firstUpdated() {
        this.setupDragAndDrop();
    }

    private setupDragAndDrop() {
        const container = this.shadowRoot?.querySelector('.drop-area');
        if (!container) return;

        const dragOverHandler = (e: DragEvent) => {
            if (!e.dataTransfer) return;
            
            const types = e.dataTransfer.types;
            const hasFiles = types.includes('Files');
            const hasWorkspaceFile = types.includes('application/x-workspace-file') || 
                                    types.includes('text/plain') || 
                                    types.includes('text/uri-list');
            
            if (!hasFiles && !hasWorkspaceFile) return;
            
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'copy';
            this.isDragOver = true;
        };

        const dragLeaveHandler = (e: DragEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
            
            if (x <= rect.left || x >= rect.right || y <= rect.top || y >= rect.bottom) {
                this.isDragOver = false;
            }
        };

        const dropHandler = async (e: DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            this.isDragOver = false;

            if (!e.dataTransfer) return;

            const files = Array.from(e.dataTransfer.files);
            if (files.length === 0) {
                const filePath = e.dataTransfer.getData('application/x-workspace-file') || 
                                e.dataTransfer.getData('text/plain');
                if (filePath) {
                    await this.indexWorkspaceFile(filePath);
                }
                return;
            }

            await this.indexNativeFiles(files);
        };

        container.addEventListener('dragover', dragOverHandler as unknown as EventListener);
        container.addEventListener('dragleave', dragLeaveHandler as unknown as EventListener);
        container.addEventListener('drop', dropHandler as unknown as EventListener);
    }

    private async indexWorkspaceFile(filePath: string) {
        try {
            const workspace = await workspaceService.getWorkspace();
            if (!workspace) {
                toastError('No workspace available');
                return;
            }

            const file = await workspace.getResource(filePath);
            if (!(file instanceof File)) {
                toastError(`Not a file: ${filePath}`);
                return;
            }

            const workspacePath = workspace.getName();
            const fileKey = `${workspacePath}:${filePath}`;
            this.indexingFiles.add(fileKey);
            this.requestUpdate();

            try {
                await this.indexFile(file);
            } finally {
                this.indexingFiles.delete(fileKey);
                this.requestUpdate();
            }
        } catch (error) {
            toastError(`Failed to index file: ${error}`);
        }
    }

    private async indexNativeFiles(files: FileList | globalThis.File[]) {
        try {
            const workspace = await workspaceService.getWorkspace();
            if (!workspace) {
                toastError('No workspace available');
                return;
            }

            const fileArray = Array.from(files);
            let indexed = 0;
            let failed = 0;
            const workspacePath = workspace.getName();

            await taskService.runAsync('Indexing documents', async (progress) => {
                for (let i = 0; i < fileArray.length; i++) {
                    const nativeFile = fileArray[i];
                    progress.message = `Processing ${nativeFile.name} (${i + 1}/${fileArray.length})...`;
                    progress.progress = Math.round(((i + 1) / fileArray.length) * 100);

                    try {
                        const workspaceFile = await workspace.getResource(nativeFile.name);
                        if (workspaceFile instanceof File) {
                            const filePath = workspaceFile.getWorkspacePath();
                            const fileKey = `${workspacePath}:${filePath}`;
                            this.indexingFiles.add(fileKey);
                            this.requestUpdate();

                            try {
                                await this.indexFile(workspaceFile);
                                indexed++;
                            } finally {
                                this.indexingFiles.delete(fileKey);
                                this.requestUpdate();
                            }
                        } else {
                            toastError(`File not found in workspace: ${nativeFile.name}`);
                            failed++;
                        }
                    } catch (error) {
                        toastError(`Failed to index ${nativeFile.name}: ${error}`);
                        failed++;
                    }
                }
            });

            if (indexed > 0) {
                toastInfo(`Indexed ${indexed} document(s)${failed > 0 ? `, ${failed} failed` : ''}`);
            }
        } catch (error) {
            toastError(`Failed to index documents: ${error}`);
        }
    }

    private async indexFile(file: File) {
        if (!this.documentContext || !this.tenderFile || !this.currentFile) {
            toastError('Document context not initialized');
            return;
        }


        const workspace = file.getWorkspace();
        const workspacePath = workspace.getName();
        const filePath = file.getWorkspacePath();
        const tenderFile = this.tenderFile;
        const currentFile = this.currentFile;

        await taskService.runAsync(`Indexing ${file.getName()}`, async (progress) => {
            progress.message = `Indexing ${file.getName()}...`;
            try {
                await documentIndexService.indexFileInContext(file, this.documentContext!);
                
                if (!tenderFile.indexedFiles) {
                    tenderFile.indexedFiles = [];
                }

                const indexedFiles = [...(tenderFile.indexedFiles || [])];
                const existingIndex = indexedFiles.findIndex(
                    f => f.filePath === filePath && f.workspacePath === workspacePath
                );

                const indexedFile: IndexedFile = {
                    filePath,
                    workspacePath,
                    indexedAt: Date.now()
                };

                if (existingIndex >= 0) {
                    indexedFiles[existingIndex] = indexedFile;
                } else {
                    indexedFiles.push(indexedFile);
                }

                tenderFile.indexedFiles = indexedFiles;
                
                // Clear all criteria answers when documents change
                this.clearAllCriteriaAnswers();
                
                this.markDirty(true);
                this.requestUpdate();

                progress.progress = 100;
            } catch (error) {
                throw error;
            }
        });
    }

    private async openFile(filePath: string) {
        this.executeCommand("open_editor", { path: filePath });
    }

    private async deleteIndexedFile(file: IndexedFile, event: Event) {
        event.stopPropagation();
        
        if (!this.tenderFile || !this.currentFile || !this.documentContext) {
            return;
        }

        const confirmMessage = `Remove ${file.filePath.split('/').pop()} from this tender?`;
        const confirmed = await confirmDialog(confirmMessage);
        
        if (!confirmed) {
            return;
        }

        const indexedFiles = this.tenderFile.indexedFiles || [];
        const index = indexedFiles.findIndex(
            f => f.filePath === file.filePath && f.workspacePath === file.workspacePath
        );

        if (index >= 0) {
            indexedFiles.splice(index, 1);
            this.tenderFile.indexedFiles = [...indexedFiles];
            
            // Clear all criteria answers when documents change
            this.clearAllCriteriaAnswers();
            
            this.markDirty(true);
            this.requestUpdate();

            if (documentIndexService && this.documentContext && this.documentContext.tags && this.documentContext.tags.length > 0) {
                const context = this.documentContext;
                try {
                    await taskService.runAsync('Removing file from context', async (progress) => {
                        progress.message = `Removing tag from ${file.filePath}...`;
                        
                        const workspace = await workspaceService.getWorkspace();
                        if (!workspace) {
                            throw new Error('No workspace available');
                        }

                        const resource = await workspace.getResource(file.filePath);
                        if (!(resource instanceof File)) {
                            throw new Error(`File not found: ${file.filePath}`);
                        }

                        await documentIndexService.removeFileFromContext(resource, context);
                        
                        progress.progress = 100;
                        toastInfo(`Removed ${file.filePath.split('/').pop()} from this tender`);
                    });
                } catch (error) {
                    toastError(`Failed to remove file from context: ${error}`);
                }
            }
        }
    }

    private addCriteria() {
        if (!this.tenderFile || !this.newCriteriaQuestion.trim()) {
            return;
        }

        if (!this.tenderFile.criteria) {
            this.tenderFile.criteria = [];
        }

        const criteria: Criteria = {
            id: generateUUID(),
            question: this.newCriteriaQuestion.trim()
        };

        this.tenderFile.criteria.push(criteria);
        this.newCriteriaQuestion = '';
        this.markDirty(true);
        this.requestUpdate();
    }

    private getScoreStyle(score: number): string {
        // Highly distinct color ranges with maximum visual separation
        // Using saturated colors that are far apart on the color wheel
        let r: number, g: number, b: number;
        
        if (score <= 20) {
            // Pure bright red
            r = 255;
            g = 0;
            b = 0;
        } else if (score <= 40) {
            // Bright orange
            r = 255;
            g = 140;
            b = 0;
        } else if (score <= 60) {
            // Bright yellow
            r = 255;
            g = 255;
            b = 0;
        } else if (score <= 80) {
            // Bright lime/yellow-green
            r = 150;
            g = 255;
            b = 0;
        } else {
            // Bright green
            r = 0;
            g = 255;
            b = 0;
        }
        
        return `--wa-color-text-normal: rgb(${r}, ${g}, ${b}); --wa-color-neutral-border-normal: rgb(${r}, ${g}, ${b}); background: rgba(${r}, ${g}, ${b}, 0.2);`;
    }

    private clearAllCriteriaAnswers() {
        if (!this.tenderFile || !this.tenderFile.criteria) {
            return;
        }

        let hasChanges = false;
        for (const criteria of this.tenderFile.criteria) {
            if (criteria.answer || criteria.essence !== undefined || criteria.fulfillmentScore !== undefined || criteria.evaluatedAt) {
                criteria.answer = undefined;
                criteria.essence = undefined;
                criteria.fulfillmentScore = undefined;
                criteria.evaluatedAt = undefined;
                hasChanges = true;
            }
        }

        if (hasChanges) {
            this.tenderFile.criteria = [...this.tenderFile.criteria];
            this.markDirty(true);
            this.requestUpdate();
        }
    }

    private async clearCriteria(criteriaId: string) {
        if (!this.tenderFile || !this.tenderFile.criteria) {
            return;
        }

        const criteria = this.tenderFile.criteria.find(c => c.id === criteriaId);
        if (!criteria || !criteria.answer) {
            return;
        }

        const confirmed = await confirmDialog(
            `Are you sure you want to clear the answer for "${criteria.question}"?`
        );

        if (!confirmed) {
            return;
        }

        criteria.answer = undefined;
        criteria.essence = undefined;
        criteria.fulfillmentScore = undefined;
        criteria.evaluatedAt = undefined;
        this.markDirty(true);
        this.requestUpdate();
    }

    private async clearAllCriteria() {
        if (!this.tenderFile || !this.tenderFile.criteria) {
            return;
        }

        const criteriaWithAnswers = this.tenderFile.criteria.filter(c => c.answer || c.fulfillmentScore !== undefined);
        
        if (criteriaWithAnswers.length === 0) {
            toastInfo('No criteria have answers to clear');
            return;
        }

        const confirmed = await confirmDialog(
            `Are you sure you want to clear answers for all ${criteriaWithAnswers.length} criteria?`
        );

        if (!confirmed) {
            return;
        }

        for (const criteria of criteriaWithAnswers) {
            criteria.answer = undefined;
            criteria.essence = undefined;
            criteria.fulfillmentScore = undefined;
            criteria.evaluatedAt = undefined;
        }

        // Create new array reference to trigger Lit reactivity
        this.tenderFile.criteria = [...this.tenderFile.criteria];
        this.markDirty(true);
        this.requestUpdate();
        toastInfo(`Cleared answers for ${criteriaWithAnswers.length} criteria`);
    }

    private async deleteCriteria(criteriaId: string) {
        if (!this.tenderFile || !this.tenderFile.criteria) {
            return;
        }

        const criteria = this.tenderFile.criteria.find(c => c.id === criteriaId);
        if (!criteria) {
            return;
        }

        const confirmed = await confirmDialog(
            `Are you sure you want to delete the criteria "${criteria.question}"?`
        );

        if (!confirmed) {
            return;
        }

        const index = this.tenderFile.criteria.findIndex(c => c.id === criteriaId);
        if (index >= 0) {
            this.tenderFile.criteria.splice(index, 1);
            this.tenderFile.criteria = [...this.tenderFile.criteria];
            this.markDirty(true);
            this.requestUpdate();
        }
    }

    private async evaluateCriteria(criteria: Criteria) {
        if (!this.documentContext || !this.tenderFile) {
            toastError('Document context not initialized');
            return;
        }

        this.evaluatingCriteria.add(criteria.id);
        this.requestUpdate();

        try {
            const searchResults = await ragService.searchDocuments(criteria.question, {
                limit: 10,
                documentSearchScope: this.documentContext
            });

            if (searchResults.length === 0) {
                criteria.answer = 'No relevant information found in the indexed documents.';
                criteria.essence = 'No relevant information found in the indexed documents.';
                criteria.fulfillmentScore = 0;
                criteria.evaluatedAt = Date.now();
                this.markDirty(true);
                this.requestUpdate();
                return;
            }

            // Create a map of filePath -> document number based on order in indexedFiles
            const documentNumberMap = new Map<string, number>();
            if (this.tenderFile.indexedFiles) {
                this.tenderFile.indexedFiles.forEach((indexedFile, index) => {
                    const key = `${indexedFile.workspacePath}:${indexedFile.filePath}`;
                    documentNumberMap.set(key, index + 1);
                });
            }

            // Group snippets by document and assign numbers
            const documentMap = new Map<string, { document: typeof searchResults[0]['document']; snippets: string[]; docNumber: number }>();
            for (const result of searchResults) {
                const docKey = `${result.document.workspacePath}:${result.document.filePath}`;
                const docNumber = documentNumberMap.get(docKey) || 0;
                
                if (!documentMap.has(docKey)) {
                    documentMap.set(docKey, { document: result.document, snippets: [], docNumber });
                }
                documentMap.get(docKey)!.snippets.push(...result.matchedSnippets);
            }

            // Sort by document number to maintain order
            const sortedDocuments = Array.from(documentMap.entries())
                .map(([key, { document, snippets, docNumber }]) => ({ key, document, snippets, docNumber }))
                .sort((a, b) => a.docNumber - b.docNumber);

            const contextText = sortedDocuments.map(({ document, snippets, docNumber }) => {
                return `[${docNumber}] ${document.fileName}\nRelevant excerpts from this document:\n${snippets.join('\n\n')}`;
            }).join('\n\n---\n\n');

            const prompt = `Based on the following documents, please evaluate this criterion: "${criteria.question}"

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

            const chatConfig = await aiService.getDefaultProvider();
            
            // Create a modified chatConfig with temperature: 0 for deterministic results
            const deterministicConfig = {
                ...chatConfig,
                parameters: {
                    ...chatConfig.parameters,
                    temperature: 0
                }
            };
            
            const answer: string[] = [];

            const stream = aiService.streamCompletion({
                chatContext: {
                    history: [
                        { role: 'user', content: prompt }
                    ]
                },
                chatConfig: deterministicConfig,
                stream: true,
                onToken: (token: string) => {
                    answer.push(token);
                    // During streaming, show a loading message instead of raw JSON
                    criteria.answer = 'Evaluating...';
                    criteria.evaluatedAt = Date.now();
                    this.requestUpdate();
                }
            });

            for await (const chunk of stream) {
                if (chunk.type === 'error') {
                    const errorMessage = (chunk as any).error || chunk.content || 'AI evaluation failed';
                    throw new Error(errorMessage);
                }
            }

            const fullAnswer = answer.join('');
            
            // Try to extract JSON from the response (may have markdown code blocks or extra text)
            let jsonText = fullAnswer.trim();
            
            // Remove markdown code blocks if present
            const codeBlockMatch = jsonText.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
            if (codeBlockMatch) {
                jsonText = codeBlockMatch[1];
            } else {
                // Try to find JSON object in the text
                const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    jsonText = jsonMatch[0];
                }
            }
            
            try {
                const parsed = JSON.parse(jsonText) as {
                    essence?: string;
                    fulfillmentScore?: number;
                    detailedAnswer?: string;
                };
                
                if (parsed.essence) {
                    criteria.essence = parsed.essence;
                }
                
                if (parsed.fulfillmentScore !== undefined) {
                    // Clamp score to 0-100 range
                    criteria.fulfillmentScore = Math.max(0, Math.min(100, Math.round(parsed.fulfillmentScore)));
                }
                
                // Store the detailed answer (formatted as markdown for display)
                if (parsed.detailedAnswer) {
                    criteria.answer = parsed.detailedAnswer;
                } else {
                    // Fallback: use the full response if JSON parsing succeeded but detailedAnswer is missing
                    criteria.answer = fullAnswer;
                }
            } catch (parseError) {
                // If JSON parsing fails, fall back to the original text and try regex parsing
                logger.warn(`Failed to parse JSON response, falling back to text parsing: ${parseError}`);
                criteria.answer = fullAnswer;
                
                // Fallback regex parsing
                const essenceMatch = fullAnswer.match(/(?:"essence"\s*:\s*")(.+?)(?=")/i);
                const scoreMatch = fullAnswer.match(/(?:"fulfillmentScore"\s*:\s*)(\d+)/i);
                
                if (essenceMatch && essenceMatch[1]) {
                    criteria.essence = essenceMatch[1].trim();
                }
                
                if (scoreMatch && scoreMatch[1]) {
                    const score = parseInt(scoreMatch[1], 10);
                    criteria.fulfillmentScore = Math.max(0, Math.min(100, score));
                }
            }
            
            criteria.evaluatedAt = Date.now();
            this.markDirty(true);
            this.requestUpdate();
        } catch (error) {
            toastError(`Failed to evaluate criteria: ${error}`);
            criteria.answer = `Error: ${error}`;
            criteria.essence = `Error: ${error}`;
            criteria.fulfillmentScore = undefined;
            criteria.evaluatedAt = Date.now();
            this.requestUpdate();
        } finally {
            this.evaluatingCriteria.delete(criteria.id);
            this.requestUpdate();
        }
    }

    private async evaluateAllCriteria() {
        if (!this.tenderFile || !this.tenderFile.criteria || this.tenderFile.criteria.length === 0) {
            return;
        }

        if (!this.documentContext) {
            toastError('Document context not initialized');
            return;
        }

        const criteriaToEvaluate = this.tenderFile.criteria.filter(c => !c.answer);
        
        if (criteriaToEvaluate.length === 0) {
            toastInfo('All criteria have already been evaluated');
            return;
        }

        this.isEvaluatingAll = true;
        this.requestUpdate();

        try {
            await taskService.runAsync(`Evaluating ${criteriaToEvaluate.length} criteria`, async (progress) => {
                // Evaluate all criteria in parallel
                const evaluationPromises = criteriaToEvaluate.map(async (criteria, index) => {
                    try {
                        await this.evaluateCriteria(criteria);
                        progress.message = `Evaluated: ${criteria.question} (${index + 1}/${criteriaToEvaluate.length})`;
                    } catch (error) {
                        logger.warn(`Failed to evaluate criteria "${criteria.question}": ${error}`);
                    }
                });

                // Wait for all evaluations to complete
                await Promise.all(evaluationPromises);
                
                progress.progress = 100;
            });

            toastInfo(`Evaluated ${criteriaToEvaluate.length} criteria`);
        } catch (error) {
            toastError(`Failed to evaluate all criteria: ${error}`);
        } finally {
            this.isEvaluatingAll = false;
            this.requestUpdate();
        }
    }

    protected render() {
        const indexedFiles = this.tenderFile?.indexedFiles || [];
        const criteria = this.tenderFile?.criteria || [];
        
        return html`
            <div class="drop-area ${this.isDragOver ? 'drag-over' : ''}">
                ${this.isDragOver 
                    ? html`<div class="drop-overlay">Drop files here to index</div>`
                    : html`
                        <div class="content">
                            <div class="indexed-files-section">
                                <h3>Indexed Files</h3>
                                ${indexedFiles.length === 0 
                                    ? html`<div class="empty-message">No files indexed yet. Drop files here to index them.</div>`
                                    : html`
                                        <div class="indexed-files-tags">
                                            ${indexedFiles.map((file, index) => {
                                                const fileKey = `${file.workspacePath}:${file.filePath}`;
                                                const isIndexing = this.indexingFiles.has(fileKey);
                                                const docNumber = index + 1;
                                                return html`
                                                    <wa-badge variant="neutral" appearance="outlined" class=${isIndexing ? 'indexing' : ''}>
                                                        ${isIndexing 
                                                            ? html`<wa-spinner size="small" slot="start"></wa-spinner>`
                                                            : html`<wa-icon name="file" slot="start"></wa-icon>`
                                                        }
                                                        [${docNumber}] ${file.filePath.split('/').pop()}
                                                        ${!isIndexing ? html`
                                                            <wa-button
                                                                variant="neutral"
                                                                appearance="plain"
                                                                size="small"
                                                                title="Open"
                                                                @click=${() => this.openFile(file.filePath)}>
                                                                <wa-icon name="folder-open"></wa-icon>
                                                            </wa-button>
                                                            <wa-button
                                                                variant="danger"
                                                                appearance="plain"
                                                                size="small"
                                                                title="Delete"
                                                                @click=${(e: Event) => this.deleteIndexedFile(file, e)}>
                                                                <wa-icon name="trash"></wa-icon>
                                                            </wa-button>
                                                        ` : nothing}
                                                    </wa-badge>
                                                `;
                                            })}
                                        </div>
                                    `
                                }
                            </div>
                            <div class="criteria-section">
                                <div class="criteria-header">
                                    <h3>Evaluation Criteria</h3>
                                </div>
                                ${criteria.length > 0 ? html`
                                    ${(() => {
                                        const evaluated = criteria.filter(c => c.fulfillmentScore !== undefined);
                                        if (evaluated.length === 0) return nothing;
                                        
                                        const total = criteria.length;
                                        const notEvaluated = total - evaluated.length;
                                        const avgScore = evaluated.length > 0
                                            ? Math.round(evaluated.reduce((sum, c) => sum + (c.fulfillmentScore || 0), 0) / evaluated.length)
                                            : 0;
                                        
                                        // Create bins: 0-20, 21-40, 41-60, 61-80, 81-100
                                        const bins = [
                                            { label: '0-20', min: 0, max: 20, count: 0, midScore: 10 },
                                            { label: '21-40', min: 21, max: 40, count: 0, midScore: 30 },
                                            { label: '41-60', min: 41, max: 60, count: 0, midScore: 50 },
                                            { label: '61-80', min: 61, max: 80, count: 0, midScore: 70 },
                                            { label: '81-100', min: 81, max: 100, count: 0, midScore: 90 }
                                        ];
                                        
                                        evaluated.forEach(c => {
                                            const score = c.fulfillmentScore || 0;
                                            for (const bin of bins) {
                                                if (score >= bin.min && score <= bin.max) {
                                                    bin.count++;
                                                    break;
                                                }
                                            }
                                        });
                                        
                                        const maxCount = Math.max(...bins.map(b => b.count), 1);
                                        
                                        return html`
                                            <div class="histogram-container">
                                                <div class="histogram-header">
                                                    <h4>Score Distribution</h4>
                                                    <div class="criteria-stats">
                                                        <wa-badge variant="neutral" appearance="outlined" pill>
                                                            <wa-icon name="list" slot="start"></wa-icon>
                                                            ${total} Total
                                                        </wa-badge>
                                                        ${evaluated.length > 0 ? html`
                                                            <wa-badge 
                                                                class="score-badge"
                                                                style=${this.getScoreStyle(avgScore)}
                                                                pill>
                                                                <wa-icon name="chart-line" slot="start"></wa-icon>
                                                                Avg: ${avgScore}%
                                                            </wa-badge>
                                                        ` : nothing}
                                                        ${notEvaluated > 0 ? html`
                                                            <wa-badge variant="neutral" pill>
                                                                <wa-icon name="question-circle" slot="start"></wa-icon>
                                                                ${notEvaluated} Not Evaluated
                                                            </wa-badge>
                                                        ` : nothing}
                                                    </div>
                                                </div>
                                                <div class="histogram">
                                                    ${bins.map(bin => html`
                                                        <div class="histogram-bar-container">
                                                            <div class="histogram-label">${bin.label}</div>
                                                            <div class="histogram-bar" 
                                                                 style="height: ${(bin.count / maxCount) * 100}%; ${this.getScoreStyle(bin.midScore)}"
                                                                 title="${bin.count} criteria in ${bin.label}">
                                                                ${bin.count > 0 ? html`<span class="bar-count">${bin.count}</span>` : nothing}
                                                            </div>
                                                        </div>
                                                    `)}
                                                </div>
                                            </div>
                                        `;
                                    })()}
                                ` : nothing}
                                <div class="add-criteria">
                                    <wa-input
                                        autocomplete="off"
                                        .value=${this.newCriteriaQuestion}
                                        @input=${(e: Event) => {
                                            const target = e.target as HTMLInputElement;
                                            this.newCriteriaQuestion = target.value;
                                        }}
                                        @keydown=${(e: KeyboardEvent) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                this.addCriteria();
                                            }
                                        }}
                                        placeholder="Enter a question or criterion (e.g., 'When is submission/application deadline?')">
                                    </wa-input>
                                    <wa-button
                                        variant="primary"
                                        @click=${() => this.addCriteria()}
                                        ?disabled=${!this.newCriteriaQuestion.trim()}>
                                        <wa-icon name="plus" slot="start"></wa-icon>
                                        Add
                                    </wa-button>
                                    ${criteria.length > 0 ? html`
                                        ${criteria.some(c => c.answer) ? html`
                                            <wa-button
                                                variant="neutral"
                                                appearance="outlined"
                                                size="small"
                                                @click=${() => this.clearAllCriteria()}>
                                                <wa-icon name="broom" slot="start"></wa-icon>
                                                Clear All
                                            </wa-button>
                                        ` : nothing}
                                        <wa-button
                                            variant="primary"
                                            appearance="outlined"
                                            size="small"
                                            @click=${() => this.evaluateAllCriteria()}
                                            ?disabled=${this.isEvaluatingAll || indexedFiles.length === 0}>
                                            ${this.isEvaluatingAll
                                                ? html`<wa-spinner size="small" slot="start"></wa-spinner>`
                                                : html`<wa-icon name="check-double" slot="start"></wa-icon>`
                                            }
                                            ${this.isEvaluatingAll ? 'Evaluating All...' : 'Check All'}
                                        </wa-button>
                                    ` : nothing}
                                </div>
                                ${criteria.length === 0
                                    ? html`<div class="empty-message">No criteria defined yet. Add a question above.</div>`
                                    : html`
                                        <div class="criteria-list">
                                            ${criteria.map(c => {
                                                const isEvaluating = this.evaluatingCriteria.has(c.id);
                                                return html`
                                                    <div class="criteria-item">
                                                        <div class="criteria-question">
                                                            <wa-icon name="question-circle"></wa-icon>
                                                            <span>${c.question}</span>
                                                            <div class="criteria-actions">
                                                                <wa-button
                                                                    variant="primary"
                                                                    appearance="outlined"
                                                                    size="small"
                                                                    @click=${() => this.evaluateCriteria(c)}
                                                                    ?disabled=${isEvaluating || this.isEvaluatingAll || indexedFiles.length === 0}>
                                                                    ${isEvaluating
                                                                        ? html`<wa-spinner size="small" slot="start"></wa-spinner>`
                                                                        : html`<wa-icon name="check" slot="start"></wa-icon>`
                                                                    }
                                                                    ${isEvaluating ? 'Evaluating...' : 'Check'}
                                                                </wa-button>
                                                                ${c.answer ? html`
                                                                    <wa-button
                                                                        variant="neutral"
                                                                        appearance="plain"
                                                                        size="small"
                                                                        title="Clear answer"
                                                                        @click=${() => this.clearCriteria(c.id)}>
                                                                        <wa-icon name="broom"></wa-icon>
                                                                    </wa-button>
                                                                ` : nothing}
                                                                <wa-button
                                                                    variant="danger"
                                                                    appearance="plain"
                                                                    size="small"
                                                                    title="Delete"
                                                                    @click=${() => this.deleteCriteria(c.id)}>
                                                                    <wa-icon name="trash"></wa-icon>
                                                                </wa-button>
                                                            </div>
                                                        </div>
                                                        ${c.answer ? html`
                                                            <div class="criteria-answer">
                                                                <div class="answer-header">
                                                                    ${c.fulfillmentScore !== undefined ? html`
                                                                        <wa-badge 
                                                                            class="score-badge"
                                                                            style=${this.getScoreStyle(c.fulfillmentScore)}
                                                                            pill>
                                                                            <wa-icon name="chart-line" slot="start"></wa-icon>
                                                                            ${c.fulfillmentScore}%
                                                                        </wa-badge>
                                                                    ` : nothing}
                                                                    ${c.evaluatedAt ? html`
                                                                        <div class="answer-timestamp">
                                                                            ${new Date(c.evaluatedAt).toLocaleString()}
                                                                        </div>
                                                                    ` : nothing}
                                                                </div>
                                                                ${c.essence ? html`
                                                                    <div class="answer-essence">
                                                                        ${c.essence}
                                                                    </div>
                                                                ` : nothing}
                                                                <div class="answer-content">${unsafeHTML(marked.parse(c.answer) as string)}</div>
                                                            </div>
                                                        ` : nothing}
                                                    </div>
                                                `;
                                            })}
                                        </div>
                                    `
                                }
                            </div>
                        </div>
                    `
                }
            </div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .drop-area {
            flex: 1;
            position: relative;
            padding: 10px;
            min-height: 200px;
        }

        .drop-area.drag-over {
            background-color: var(--wa-color-brand-fill-quiet);
            outline: 2px dashed var(--wa-color-brand-border-normal);
            outline-offset: -4px;
            border-radius: var(--wa-border-radius-medium);
        }

        .drop-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            padding: var(--wa-spacing-large);
            border-radius: var(--wa-border-radius-large);
            font-weight: bold;
            pointer-events: none;
            z-index: 1000;
        }

        .content {
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .indexed-files-section {
            margin-bottom: var(--wa-space-l);
        }

            .indexed-files-section h3 {
                margin: 0 0 var(--wa-space-m) 0;
                font-size: var(--wa-font-size-medium);
                font-weight: var(--wa-font-weight-semibold);
            }

            .indexed-files-tags {
                display: flex;
                flex-wrap: wrap;
                gap: var(--wa-space-s);
                overflow-y: auto;
            }

            .criteria-section {
            }

            .criteria-header {
                display: flex;
                align-items: center;
                gap: var(--wa-space-m);
                margin-bottom: var(--wa-space-s);
            }

            .criteria-section h3 {
                margin: 0;
                font-size: var(--wa-font-size-medium);
                font-weight: var(--wa-font-weight-semibold);
            }

            .criteria-stats {
                display: flex;
                gap: var(--wa-space-xs);
                align-items: center;
                flex-wrap: wrap;
            }

            .add-criteria {
                display: flex;
                gap: var(--wa-space-s);
                margin-bottom: var(--wa-space-s);
                align-items: center;
            }

            .add-criteria wa-input {
                flex: 1;
            }

            .criteria-list {
                display: flex;
                flex-direction: column;
                gap: var(--wa-space-m);
            }

            .criteria-item {
                border: 1px solid var(--wa-color-neutral-border-normal);
                border-radius: var(--wa-border-radius-medium);
                padding: var(--wa-space-s);
                background: var(--wa-color-surface-default);
            }

            .criteria-question {
                display: flex;
                align-items: center;
                gap: var(--wa-space-s);
            }

            .criteria-question wa-icon {
                color: var(--wa-color-text-quiet);
            }

            .criteria-question span {
                flex: 1;
                font-weight: var(--wa-font-weight-medium);
            }

            .criteria-actions {
                display: flex;
                gap: var(--wa-space-xs);
            }

            .criteria-answer {
                display: flex;
                flex-direction: column;
                gap: var(--wa-space-s);
                margin-top: var(--wa-space-m);
                padding: var(--wa-space-m);
                background: var(--wa-color-surface-default);
                border-radius: var(--wa-border-radius-small);
                border-left: 3px solid var(--wa-color-brand-border-normal);
            }

            .answer-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: var(--wa-space-s);
            }

            .answer-essence {
                padding: var(--wa-space-xs) var(--wa-space-s);
                background: var(--wa-color-surface-default);
                border: 3px solid var(--wa-color-brand-border-normal);
                border-radius: var(--wa-border-radius-small);
                font-size: var(--wa-font-size-small);
            }

            .answer-content {
                margin: var(--wa-space-xs) 0;
            }

            .answer-content :global(p) {
                margin: var(--wa-space-xs) 0;
            }

            .answer-content :global(ul),
            .answer-content :global(ol) {
                margin: var(--wa-space-xs) 0;
                padding-left: var(--wa-space-l);
            }

            .answer-content :global(code) {
                background: var(--wa-color-surface-raised);
                padding: 2px 4px;
                border-radius: var(--wa-border-radius-small);
                font-family: monospace;
            }

            .answer-content :global(pre) {
                background: var(--wa-color-surface-raised);
                padding: var(--wa-space-s);
                border-radius: var(--wa-border-radius-medium);
                overflow-x: auto;
            }

            .answer-content :global(blockquote) {
                border-left: 3px solid var(--wa-color-brand-border-normal);
                padding-left: var(--wa-space-s);
                margin: var(--wa-space-xs) 0;
                color: var(--wa-color-text-quiet);
            }

            .answer-timestamp {
                margin-top: var(--wa-space-xs);
                font-size: var(--wa-font-size-small);
                color: var(--wa-color-text-quiet);
            }

            .score-badge {
                font-weight: var(--wa-font-weight-semibold);
            }

            .histogram-container {
                margin-top: var(--wa-space-m);
                padding: var(--wa-space-m);
                background: var(--wa-color-surface-default);
                border-radius: var(--wa-border-radius-medium);
            }

            .histogram-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: var(--wa-space-m);
                margin-bottom: var(--wa-space-m);
            }

            .histogram-container h4 {
                margin: 0;
                font-size: var(--wa-font-size-small);
                font-weight: var(--wa-font-weight-semibold);
                color: var(--wa-color-text-normal);
            }

            .histogram {
                display: flex;
                align-items: flex-end;
                justify-content: space-around;
                gap: var(--wa-space-xs);
                height: 120px;
                padding: var(--wa-space-s) 0;
            }

            .histogram-bar-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1;
                height: 100%;
            }

            .histogram-label {
                margin-bottom: var(--wa-space-xs);
                font-size: var(--wa-font-size-small);
                color: var(--wa-color-text-quiet);
                text-align: center;
            }

            .histogram-bar {
                width: 100%;
                min-height: 4px;
                border-radius: var(--wa-border-radius-small) var(--wa-border-radius-small) 0 0;
                position: relative;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                transition: height 0.3s ease;
                border: 1px solid;
            }

            .bar-count {
                position: absolute;
                bottom: calc(-20px - var(--wa-space-xs));
                font-size: var(--wa-font-size-small);
                font-weight: var(--wa-font-weight-semibold);
                color: var(--wa-color-text-normal);
            }
    `;
}

