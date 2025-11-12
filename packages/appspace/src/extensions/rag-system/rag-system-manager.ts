import { customElement, property, state } from 'lit/decorators.js';
import { css, html, TemplateResult, nothing } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';
import { KPart } from '../../parts/k-part';
import { EditorInput } from '../../core/editorregistry';
import { documentIndexService, IndexedDocument } from './document-index-service';
import { searchWorkspaceDocuments, RAGSearchResult } from './rag-service';
import { workspaceService, File } from '../../core/filesys';
import { createLogger } from '../../core/logger';
import { getWorkspacePath } from './utils/workspace-utils';
import { SnippetExtractor } from './utils/snippet-extractor';
import { CONTENT_PREVIEW_LENGTHS, SNIPPET_LENGTHS } from './utils/constants';
import { toastError, toastInfo } from '../../core/toast';
import { taskService } from '../../core/taskservice';
import { editorRegistry } from '../../core/editorregistry';

const logger = createLogger('RAGSystemManager');
const snippetExtractor = new SnippetExtractor();

@customElement('k-rag-system-manager')
export class KRAGSystemManager extends KPart {
    @property({ attribute: false })
    public input?: EditorInput;

    @state()
    private documents: IndexedDocument[] = [];


    @state()
    private stats: { totalDocuments: number; byWorkspace: Record<string, number> } = {
        totalDocuments: 0,
        byWorkspace: {}
    };

    @state()
    private loading = false;

    @state()
    private selectedDocument: IndexedDocument | null = null;

    @state()
    private searchQuery = '';

    @state()
    private filterWorkspace: string | null = null;

    @state()
    private filterByActiveWorkspace = true;

    @state()
    private filteredDocuments: IndexedDocument[] = [];
    
    @state()
    private searchResults: Map<string, RAGSearchResult> = new Map();

    @state()
    private reindexing = false;

    private treeRef = createRef<HTMLElement>();
    private searchDebounceTimer?: number;
    private searchInputValue = '';

    protected async doInitUI() {
        try {
            await documentIndexService.initialize();
            await Promise.all([
                this.loadDocuments(),
                this.loadStats()
            ]);
        } catch (error) {
            logger.error(`Failed to initialize document index manager: ${error}`);
            toastError(`Failed to initialize: ${error}`);
        }
    }

    private async loadDocuments() {
        this.loading = true;
        this.requestUpdate();
        try {
            let workspacePath: string | undefined;
            if (this.filterByActiveWorkspace) {
                const workspaceResult = await getWorkspacePath();
                workspacePath = workspaceResult?.workspacePath;
            }
            this.documents = await documentIndexService.listDocuments(workspacePath);
            await this.updateFilteredDocuments();
        } catch (error) {
            logger.error(`Failed to load documents: ${error}`);
            toastError(`Failed to load documents: ${error}`);
        } finally {
            this.loading = false;
        }
    }

    private async updateFilteredDocuments() {
        this.filteredDocuments = await this.getFilteredDocuments();
        this.requestUpdate();
    }

    private async loadStats() {
        try {
            this.stats = await documentIndexService.getStats();
            this.requestUpdate();
        } catch (error) {
            logger.error(`Failed to load stats: ${error}`);
        }
    }

    private handleTreeSelection(e: CustomEvent) {
        // Try getting from event detail first (as per k-extensions pattern)
        let selection = e.detail?.selection || [];

        // If no selection in detail, try getting from tree element directly (as per k-filebrowser pattern)
        if (selection.length === 0 && this.treeRef.value) {
            // @ts-ignore
            selection = this.treeRef.value.selectedItems || [];
        }

        if (selection.length > 0) {
            const selectedItem = selection[0];
            if (selectedItem?.model) {
                this.selectedDocument = selectedItem.model;
            } else {
                this.selectedDocument = null;
            }
        } else {
            this.selectedDocument = null;
        }
    }

    private async getFilteredDocuments(): Promise<IndexedDocument[]> {
        if (!this.documents || this.documents.length === 0) {
            return [];
        }

        if (this.searchQuery.trim()) {
            try {
                const searchResults = await searchWorkspaceDocuments(this.searchQuery, {
                    limit: 50,
                    workspacePath: this.filterWorkspace || undefined
                });

                this.searchResults.clear();
                const uniqueDocs = new Map<string, IndexedDocument>();
                const aggregatedResults = new Map<string, RAGSearchResult>();
                
                for (const result of searchResults) {
                    const docId = result.document.id;
                    uniqueDocs.set(docId, result.document);
                    
                    const existing = aggregatedResults.get(docId);
                    if (!existing) {
                        aggregatedResults.set(docId, {
                            document: result.document,
                            relevance: result.relevance,
                            matchedSnippets: [...result.matchedSnippets]
                        });
                    } else {
                        if (result.relevance > existing.relevance) {
                            existing.relevance = result.relevance;
                        }
                        const seenSnippets = new Set(existing.matchedSnippets);
                        for (const snippet of result.matchedSnippets) {
                            if (!seenSnippets.has(snippet)) {
                                existing.matchedSnippets.push(snippet);
                                seenSnippets.add(snippet);
                            }
                        }
                    }
                }
                
                for (const [docId, result] of aggregatedResults) {
                    this.searchResults.set(docId, result);
                }

                const resultDocs = Array.from(uniqueDocs.values());
                
                if (this.filterWorkspace) {
                    return resultDocs.filter(doc => doc.workspacePath === this.filterWorkspace);
                }
                
                return resultDocs;
            } catch (error) {
                logger.debug(`RAG search failed in document manager: ${error}`);
                this.searchResults.clear();
                return [];
            }
        } else {
            this.searchResults.clear();
        }

        let filtered = [...this.documents];

        if (this.filterWorkspace) {
            filtered = filtered.filter(doc => doc.workspacePath === this.filterWorkspace);
        }

        return filtered;
    }

    private highlightMatches(text: string, query: string): TemplateResult {
        if (!query || !query.trim()) {
            return html`${text}`;
        }

        const queryLower = query.toLowerCase();
        const textLower = text.toLowerCase();
        const parts: Array<string | TemplateResult> = [];
        let lastIndex = 0;
        let index = textLower.indexOf(queryLower, lastIndex);

        while (index !== -1) {
            if (index > lastIndex) {
                parts.push(text.substring(lastIndex, index));
            }
            parts.push(html`<mark class="search-match">${text.substring(index, index + query.length)}</mark>`);
            lastIndex = index + query.length;
            index = textLower.indexOf(queryLower, lastIndex);
        }

        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return html`${parts}`;
    }

    private getContentPreview(doc: IndexedDocument): TemplateResult {
        const searchResult = this.searchResults.get(doc.id);
        
        if (searchResult && searchResult.matchedSnippets.length > 0) {
            return html`
                <table class="snippets-table">
                    <thead>
                        <tr>
                            <th class="snippet-number-col">#</th>
                            <th class="snippet-content-col">Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${searchResult.matchedSnippets.map((snippet, idx) => html`
                            <tr>
                                <td class="snippet-number">${idx + 1}</td>
                                <td class="snippet-content">${this.highlightMatches(snippet, this.searchQuery)}</td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            `;
        }

        if (this.searchQuery && this.searchQuery.trim()) {
            const snippets = snippetExtractor.extractContextSnippets(
                doc.content,
                this.searchQuery,
                SNIPPET_LENGTHS.CONTEXT
            );

            if (snippets.length > 0) {
                return html`
                    <table class="snippets-table">
                        <thead>
                            <tr>
                                <th class="snippet-number-col">#</th>
                                <th class="snippet-content-col">Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${snippets.map((snippet, idx) => html`
                                <tr>
                                    <td class="snippet-number">${idx + 1}</td>
                                    <td class="snippet-content">${this.highlightMatches(doc.content.substring(snippet.start, snippet.end), this.searchQuery)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                `;
            }
        }

        const preview = snippetExtractor.extractSimpleSnippet(doc.content, CONTENT_PREVIEW_LENGTHS.LONG);
        return html`
            <div class="snippet-preview">${preview}</div>
        `;
    }

    private async deleteDocument(doc: IndexedDocument) {
        try {
            await documentIndexService.deleteDocument(doc.id);
            toastInfo(`Deleted: ${doc.fileName}`);
            await this.loadDocuments();
            await this.loadStats();
            if (this.selectedDocument?.id === doc.id) {
                this.selectedDocument = null;
            }
        } catch (error) {
            toastError(`Failed to delete document: ${error}`);
        }
    }

    private async reindexDocument(doc: IndexedDocument) {
        try {
            const workspaceResult = await getWorkspacePath();
            if (!workspaceResult) {
                toastError('No workspace connected');
                return;
            }

            const resource = await workspaceResult.workspace.getResource(doc.filePath);
            if (!resource) {
                toastError(`File not found: ${doc.filePath}`);
                return;
            }

            if (!(resource instanceof File)) {
                toastError(`Resource is not a file: ${doc.filePath}`);
                return;
            }

            const file: File = resource;

            await taskService.runAsync('Reindexing document', async progress => {
                progress.message = `Reindexing ${doc.fileName}...`;
                await documentIndexService.reindexDocument(file);
                progress.progress = 100;
            });

            toastInfo(`Reindexed: ${doc.fileName}`);
            await this.loadDocuments();
            if (this.selectedDocument?.id === doc.id) {
                this.selectedDocument = await documentIndexService.getDocument(doc.id);
            }
        } catch (error) {
            toastError(`Failed to reindex document: ${error}`);
        }
    }

    private async reindexAllDocuments() {
        if (this.reindexing) {
            return;
        }

        const stats = await documentIndexService.getStats();
        if (stats.totalDocuments === 0) {
            toastInfo('No documents to reindex');
            return;
        }

        this.reindexing = true;
        this.requestUpdate();

        try {
            const result = await taskService.runAsync('Reindexing all documents', async progress => {
                progress.message = 'Starting reindexing...';
                
                const total = stats.totalDocuments;

                const reindexResult = await documentIndexService.reindexAllDocuments();
                
                const processed = reindexResult.succeeded + reindexResult.failed;
                progress.progress = total > 0 ? (processed / total) * 100 : 100;
                progress.message = `Reindexed ${reindexResult.succeeded}/${total} documents${reindexResult.failed > 0 ? ` (${reindexResult.failed} failed)` : ''}`;
                
                return reindexResult;
            });

            await this.loadDocuments();
            await this.loadStats();
            toastInfo(`Reindexing completed: ${result.succeeded} succeeded, ${result.failed} failed`);
        } catch (error) {
            logger.error(`Failed to reindex all documents: ${error}`);
            toastError(`Failed to reindex all documents: ${error}`);
        } finally {
            this.reindexing = false;
            this.requestUpdate();
        }
    }

    private formatFileSize(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    private formatDate(timestamp: number): string {
        return new Date(timestamp).toLocaleString();
    }

    private getFileIcon(fileType: string): string {
        return editorRegistry.getFileIcon(fileType);
    }

    protected renderToolbar(): TemplateResult {
        const workspaces = Object.keys(this.stats?.byWorkspace || {});

        return html`
            <wa-input
                type="search"
                placeholder="Search documents..."
                .value=${this.searchInputValue}
                @input=${(e: any) => {
                    this.searchInputValue = e.target.value;
                    
                    if (this.searchDebounceTimer) {
                        clearTimeout(this.searchDebounceTimer);
                    }
                    
                    this.searchDebounceTimer = window.setTimeout(async () => {
                        this.searchQuery = this.searchInputValue;
                        await this.updateFilteredDocuments();
                    }, 200);
                }}
                @wa-clear=${async () => {
                    if (this.searchDebounceTimer) {
                        clearTimeout(this.searchDebounceTimer);
                    }
                    this.searchInputValue = '';
                    this.searchQuery = '';
                    await this.updateFilteredDocuments();
                }}
                size="small"
                with-clear
                autocomplete="off"
                style="flex: 1; max-width: 400px;">
                <wa-icon name="magnifying-glass" slot="start"></wa-icon>
            </wa-input>
            
            <wa-switch
                .checked=${this.filterByActiveWorkspace}
                @change=${async (e: any) => {
                    this.filterByActiveWorkspace = e.target.checked;
                    await this.loadDocuments();
                }}
                size="small">
                Active workspace only
            </wa-switch>
            
            ${workspaces.length > 1 ? html`
                <wa-select 
                    .value=${this.filterWorkspace || ''}
                    @change=${async (e: any) => {
                    this.filterWorkspace = e.target.value || null;
                    await this.updateFilteredDocuments();
                }}
                    size="small"
                    style="width: 200px;">
                    <wa-option value="">All Workspaces</wa-option>
                    ${workspaces.map(ws => html`
                        <wa-option value="${ws}">${ws} (${this.stats.byWorkspace[ws]})</wa-option>
                    `)}
                </wa-select>
            ` : nothing}
            
            <k-command 
                size="small" 
                icon="arrow-rotate-right"
                title="Refresh document list"
                .action=${() => this.loadDocuments()}
                ?disabled=${this.reindexing}>
                Refresh
            </k-command>
            
            <k-command 
                size="small" 
                icon="database"
                title="Re-index all documents"
                .action=${() => this.reindexAllDocuments()}
                ?disabled=${this.reindexing || this.loading}>
                ${this.reindexing ? 'Reindexing...' : 'Re-index All'}
            </k-command>
        `;
    }

    protected render(): TemplateResult {
        if (!this.stats) {
            this.stats = { totalDocuments: 0, byWorkspace: {} };
        }

        const filteredDocs = this.filteredDocuments;
        const workspaces = Object.keys(this.stats.byWorkspace || {});

        return html`
            <div class="rag-system-manager">
                <div class="header">
                    <div class="header-content">
                        <div class="stats">
                            <span>Total: ${this.stats.totalDocuments} documents</span>
                            ${workspaces.length > 0 ? html`
                                <span>Workspaces: ${workspaces.length}</span>
                            ` : nothing}
                        </div>
                    </div>
                </div>

                <wa-split-panel position="40" style="height: 100%;">
                    <div class="document-list" slot="start">
                        ${this.loading ? html`
                            <div class="loading">
                                <wa-spinner></wa-spinner>
                                <span>Loading documents...</span>
                            </div>
                        ` : filteredDocs.length === 0 ? html`
                            <div class="empty">
                                <wa-icon name="inbox" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                                <p>${this.searchQuery || this.filterWorkspace ? 'No documents match your filters' : 'No documents indexed yet'}</p>
                            </div>
                        ` : html`
                            <wa-tree 
                                ${ref(this.treeRef)}
                                selection="leaf"
                                style="--indent-guide-width: 1px;"
                                @wa-selection-change=${(e: CustomEvent) => {
                    this.handleTreeSelection(e);
                }}>
                                ${filteredDocs.map(doc => html`
                                    <wa-tree-item 
                                        .model=${doc}
                                        ?selected=${this.selectedDocument?.id === doc.id}>
                                        <wa-icon name="${this.getFileIcon(doc.fileType)}"></wa-icon>
                                            <div class="tree-item-info">
                                                <strong class="tree-item-path">${doc.filePath}</strong>
                                                <div class="tree-item-meta">
                                                    <small class="meta-size">${this.formatFileSize(doc.metadata.size)}</small>
                                                    <small class="meta-date">${this.formatDate(doc.indexedAt)}</small>
                                                </div>
                                            </div>
                                            <div class="tree-item-actions" @click=${(e: Event) => e.stopPropagation()}>
                                                <wa-button
                                                    variant="neutral"
                                                    appearance="plain"
                                                    size="small"
                                                    title="Reindex"
                                                    @click=${() => this.reindexDocument(doc)}>
                                                    <wa-icon name="arrow-rotate-right"></wa-icon>
                                                </wa-button>
                                                <wa-button
                                                    variant="danger"
                                                    appearance="plain"
                                                    size="small"
                                                    title="Delete"
                                                    @click=${() => this.deleteDocument(doc)}>
                                                    <wa-icon name="trash"></wa-icon>
                                                </wa-button>
                                            </div>
                                    </wa-tree-item>
                                `)}
                            </wa-tree>
                        `}
                    </div>

                    <div slot="end">
                        ${this.selectedDocument ? html`
                            <div class="document-details">
                                <div class="details-content">
                                    <div class="metadata-grid">
                                        <wa-input
                                            label="File Path"
                                            .value=${this.selectedDocument.filePath}
                                            readonly
                                            size="small">
                                            <wa-copy-button
                                                slot="end"
                                                .value=${this.selectedDocument.filePath}
                                                size="small"
                                                label="Copy file path">
                                            </wa-copy-button>
                                        </wa-input>
                                        
                                        <wa-input
                                            label="Workspace"
                                            .value=${this.selectedDocument.workspacePath}
                                            readonly
                                            size="small">
                                            <wa-copy-button
                                                slot="end"
                                                .value=${this.selectedDocument.workspacePath}
                                                size="small"
                                                label="Copy workspace">
                                            </wa-copy-button>
                                        </wa-input>
                                        
                                        <wa-input
                                            label="File Type"
                                            .value=${this.selectedDocument.fileType}
                                            readonly
                                            size="small">
                                            <wa-copy-button
                                                slot="end"
                                                .value=${this.selectedDocument.fileType}
                                                size="small"
                                                label="Copy file type">
                                            </wa-copy-button>
                                        </wa-input>
                                        
                                        <wa-input
                                            label="Size"
                                            .value=${this.formatFileSize(this.selectedDocument.metadata.size)}
                                            readonly
                                            size="small">
                                            <wa-copy-button
                                                slot="end"
                                                .value=${this.formatFileSize(this.selectedDocument.metadata.size)}
                                                size="small"
                                                label="Copy size">
                                            </wa-copy-button>
                                        </wa-input>
                                        
                                        <wa-input
                                            label="Indexed At"
                                            .value=${this.formatDate(this.selectedDocument.indexedAt)}
                                            readonly
                                            size="small">
                                            <wa-copy-button
                                                slot="end"
                                                .value=${this.formatDate(this.selectedDocument.indexedAt)}
                                                size="small"
                                                label="Copy indexed date">
                                            </wa-copy-button>
                                        </wa-input>
                                        
                                        <wa-input
                                            label="Last Updated"
                                            .value=${this.formatDate(this.selectedDocument.updatedAt)}
                                            readonly
                                            size="small">
                                            <wa-copy-button
                                                slot="end"
                                                .value=${this.formatDate(this.selectedDocument.updatedAt)}
                                                size="small"
                                                label="Copy updated date">
                                            </wa-copy-button>
                                        </wa-input>
                                    </div>
                                    
                                    ${this.selectedDocument.metadata.tags && this.selectedDocument.metadata.tags.length > 0 ? html`
                                        <div class="tags-section">
                                            <wa-input
                                                label="Tags"
                                                .value=${this.selectedDocument.metadata.tags.join(', ')}
                                                readonly
                                                size="small">
                                                <wa-copy-button
                                                    slot="end"
                                                    .value=${this.selectedDocument.metadata.tags.join(', ')}
                                                    size="small"
                                                    label="Copy tags">
                                                </wa-copy-button>
                                            </wa-input>
                                        </div>
                                    ` : nothing}
                                
                                    <div class="detail-section">
                                        <label>Content Preview${this.searchQuery ? html` <span class="search-hint">(showing matches for "${this.searchQuery}")</span>` : nothing}</label>
                                        <wa-scroller class="content-preview" orientation="vertical">
                                            <div class="content-preview-inner">
                                                ${this.getContentPreview(this.selectedDocument)}
                                            </div>
                                        </wa-scroller>
                                    </div>
                                </div>
                            </div>
                    ` : html`
                            <div class="document-details empty">
                                <wa-icon name="file-lines" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                                <p>Select a document to view details</p>
                            </div>
                        `}
                    </div>
                </wa-split-panel>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: hidden;
            min-height: 0;
        }

        .rag-system-manager {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 0;
            overflow: hidden;
        }

        wa-split-panel {
            flex: 1;
            min-height: 0;
            overflow: hidden;
        }

        .document-list {
            height: 100%;
            overflow-y: auto;
        }

        .tree-item-info {
            flex: 1;
            min-width: 0;
        }

        .tree-item-path {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .tree-item-meta {
            display: flex;
            align-items: center;
            gap: var(--wa-space-xs);
            flex-wrap: wrap;
            margin-top: var(--wa-space-xs);
        }

        .tree-item-actions {
            opacity: 0;
        }

        wa-tree-item:hover .tree-item-actions {
            opacity: 1;
        }

        .document-details {
            height: 100%;
            display: flex;
            flex-direction: column;
            min-height: 0;
            overflow: hidden;
        }

        .details-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: var(--wa-space-s);
            min-height: 0;
            overflow: hidden;
        }

        .metadata-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--wa-space-s);
            flex-shrink: 0;
        }

        .tags-section {
            margin-top: var(--wa-space-s);
            flex-shrink: 0;
            margin-bottom: var(--wa-space-s);
        }

        .detail-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 0;
            position: relative;
        }

        .detail-section label {
            flex-shrink: 0;
            margin-bottom: var(--wa-space-xs);
        }

        .content-preview {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }

        .content-preview-inner {
            width: 100%;
        }

        .snippets-table {
            width: 100%;
            border-collapse: collapse;
            background-color: var(--wa-color-surface-raised);
        }

        .snippets-table thead {
            background-color: var(--wa-color-neutral-fill-quiet);
        }

        .snippets-table th {
            padding: var(--wa-space-xs) var(--wa-space-s);
            text-align: left;
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--wa-color-text-quiet);
            border-bottom: 1px solid var(--wa-color-surface-border);
        }

        .snippets-table td {
            padding: var(--wa-space-s);
            border-bottom: 1px solid var(--wa-color-surface-border);
            vertical-align: top;
        }

        .snippets-table tbody tr:last-child td {
            border-bottom: none;
        }

        .snippets-table tbody tr:hover {
            background-color: var(--wa-color-neutral-fill-quiet);
        }

        .snippet-number-col {
            width: 3rem;
            text-align: center;
        }

        .snippet-content-col {
            width: auto;
        }

        .snippet-number {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--wa-color-text-quiet);
            text-align: center;
        }

        .snippet-content {
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-wrap: break-word;
            font-family: monospace;
            font-size: 0.875rem;
            line-height: 1.5;
            color: var(--wa-color-text-normal);
        }

        .snippet-preview {
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-wrap: break-word;
            font-family: monospace;
            font-size: 0.875rem;
            line-height: 1.5;
            color: var(--wa-color-text-normal);
            padding: var(--wa-space-s);
            background-color: var(--wa-color-surface-raised);
            border-radius: var(--wa-border-radius-medium);
        }

        .snippet-content mark.search-match {
            background: var(--wa-color-warning-fill-loud);
            color: var(--wa-color-warning-text-loud);
            padding: 0 2px;
            border-radius: 2px;
            font-weight: 600;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-rag-system-manager': KRAGSystemManager;
    }
}

