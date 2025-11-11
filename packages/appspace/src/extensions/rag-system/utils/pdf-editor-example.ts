/**
 * Simple Example: PDF Editor with one.pdf and two.pdf
 * 
 * This shows exactly how to scope indexing and retrieval to only
 * the files your editor is operating on.
 */

import { createEditorContext, EditorRAGContext } from './editor-context';
import { File } from '../../../core/filesys';

// Step 1: Create an editor context
const editorContext = createEditorContext('my-pdf-editor');

// Step 2: Index your files (one.pdf and two.pdf)
async function initializeEditor(onePdf: File, twoPdf: File) {
    // Index both files with the editor's context tag
    await editorContext.indexFiles([onePdf, twoPdf]);
    
    // Now one.pdf and two.pdf are indexed with tag: "editor:my-pdf-editor"
}

// Step 3: Search only in your editor's files
async function searchInEditor(query: string) {
    // This will ONLY search in one.pdf and two.pdf
    const results = await editorContext.search(query);
    return results;
}

// Complete example in a component:
export class PDFEditor {
    private ragContext: EditorRAGContext;
    private onePdf: File | null = null;
    private twoPdf: File | null = null;

    constructor() {
        // Create unique context for this editor
        this.ragContext = createEditorContext(`pdf-editor-${Date.now()}`);
    }

    async openFiles(onePdf: File, twoPdf: File) {
        this.onePdf = onePdf;
        this.twoPdf = twoPdf;
        
        // Index both files with editor context
        await this.ragContext.indexFiles([onePdf, twoPdf]);
    }

    async search(query: string) {
        // Search ONLY in one.pdf and two.pdf
        return await this.ragContext.search(query, { limit: 10 });
    }

    async addFile(newPdf: File) {
        // Add another file to the editor context
        await this.ragContext.indexFile(newPdf);
    }
}

// Usage:
// const editor = new PDFEditor();
// await editor.openFiles(onePdfFile, twoPdfFile);
// const results = await editor.search('contract terms');
// // Results only from one.pdf and two.pdf!

