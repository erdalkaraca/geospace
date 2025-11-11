/**
 * Example: PDF Editor with Scoped RAG
 * 
 * This example shows how to create a PDF editor that:
 * 1. Indexes only the PDFs it's working with (one.pdf, two.pdf)
 * 2. Searches only within those indexed PDFs
 */

import { customElement, state } from 'lit/decorators.js';
import { File } from '../../../core/filesys';
import { createEditorContext, EditorRAGContext } from './editor-context';
import { searchWorkspaceDocuments } from '../rag-service';

@customElement('pdf-editor')
export class PDFEditor {
    @state()
    private openFiles: File[] = [];

    private ragContext: EditorRAGContext;

    constructor() {
        // Create a unique context for this editor instance
        this.ragContext = createEditorContext(`pdf-editor-${Date.now()}`);
    }

    async openFile(file: File) {
        if (!this.openFiles.find(f => f.getWorkspacePath() === file.getWorkspacePath())) {
            this.openFiles.push(file);
            
            // Index the file with the editor's context tag
            await this.ragContext.indexFile(file);
        }
    }

    async closeFile(file: File) {
        this.openFiles = this.openFiles.filter(
            f => f.getWorkspacePath() !== file.getWorkspacePath()
        );
        
        // Optionally remove the context tag (or keep it for later use)
        // await this.ragContext.removeFileFromContext(file);
    }

    async searchInOpenFiles(query: string) {
        // Search only within files indexed with this editor's context
        const results = await this.ragContext.search(query, { limit: 10 });
        return results;
    }

    async searchInOpenFilesAlternative(query: string) {
        // Alternative: Use the scope directly
        const scope = this.ragContext.getSearchScope();
        const results = await searchWorkspaceDocuments(query, {
            contextScope: scope,
            limit: 10
        });
        return results;
    }

    async initializeWithFiles(files: File[]) {
        // Index all files at once when editor opens
        const result = await this.ragContext.indexFiles(files);
        this.openFiles = files;
        return result;
    }

    disconnectedCallback() {
        // Clean up context tags when editor is closed
        // this.ragContext.clearContext();
    }
}

/**
 * Usage Example:
 * 
 * const editor = new PDFEditor();
 * 
 * // Open files
 * await editor.openFile(onePdfFile);
 * await editor.openFile(twoPdfFile);
 * 
 * // Search only in open files
 * const results = await editor.searchInOpenFiles('contract terms');
 * 
 * // Results will only include content from one.pdf and two.pdf
 */

