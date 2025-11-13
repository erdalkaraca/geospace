const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/rag-integration-DChpRC3d.js","assets/rag-service-CYBK1VOM.js","assets/main-CJ7vKuNz.js","assets/index-ZfqTFlZV.js","assets/index-C2t38aP0.css","assets/main-DQjgvuwU.css"])))=>i.map(i=>d[i]);
import{a as A,n as I,r as h,e as P,x as r,E as b,c as W,t as C,_ as N}from"./index-ZfqTFlZV.js";import{S as T,d as l,g as S,s as E,a as _,C as G}from"./rag-service-CYBK1VOM.js";import{K as L,m as F,b as c,a as u,F as g,t as w,o as D,h as f,e as O,d as y,w as k,M}from"./main-CJ7vKuNz.js";var Q=Object.defineProperty,B=Object.getOwnPropertyDescriptor,m=(t,e,a,n)=>{for(var i=n>1?void 0:n?B(e,a):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(n?o(e,a,i):o(i))||i);return n&&i&&Q(e,a,i),i};const v=F("RAGSystemManager"),z=new T;let d=class extends L{constructor(){super(...arguments),this.documents=[],this.stats={totalDocuments:0,byWorkspace:{}},this.loading=!1,this.selectedDocument=null,this.searchQuery="",this.filterWorkspace=null,this.filterByActiveWorkspace=!0,this.filteredDocuments=[],this.searchResults=new Map,this.reindexing=!1,this.treeRef=P(),this.searchInputValue=""}async doInitUI(){try{await l.initialize(),await Promise.all([this.loadDocuments(),this.loadStats()])}catch(t){v.error(`Failed to initialize document index manager: ${t}`),c(`Failed to initialize: ${t}`)}}async loadDocuments(){this.loading=!0,this.requestUpdate();try{let t;this.filterByActiveWorkspace&&(t=(await S())?.workspacePath),this.documents=await l.listDocuments(t),await this.updateFilteredDocuments()}catch(t){v.error(`Failed to load documents: ${t}`),c(`Failed to load documents: ${t}`)}finally{this.loading=!1}}async updateFilteredDocuments(){this.filteredDocuments=await this.getFilteredDocuments(),this.requestUpdate()}async loadStats(){try{this.stats=await l.getStats(),this.requestUpdate()}catch(t){v.error(`Failed to load stats: ${t}`)}}handleTreeSelection(t){let e=t.detail?.selection||[];if(e.length===0&&this.treeRef.value&&(e=this.treeRef.value.selectedItems||[]),e.length>0){const a=e[0];a?.model?this.selectedDocument=a.model:this.selectedDocument=null}else this.selectedDocument=null}async getFilteredDocuments(){if(!this.documents||this.documents.length===0)return[];if(this.searchQuery.trim())try{const e=await E(this.searchQuery,{limit:50,workspacePath:this.filterWorkspace||void 0});this.searchResults.clear();const a=new Map,n=new Map;for(const s of e){const o=s.document.id;a.set(o,s.document);const p=n.get(o);if(!p)n.set(o,{document:s.document,relevance:s.relevance,matchedSnippets:[...s.matchedSnippets]});else{s.relevance>p.relevance&&(p.relevance=s.relevance);const R=new Set(p.matchedSnippets);for(const $ of s.matchedSnippets)R.has($)||(p.matchedSnippets.push($),R.add($))}}for(const[s,o]of n)this.searchResults.set(s,o);const i=Array.from(a.values());return this.filterWorkspace?i.filter(s=>s.workspacePath===this.filterWorkspace):i}catch(e){return v.debug(`RAG search failed in document manager: ${e}`),this.searchResults.clear(),[]}else this.searchResults.clear();let t=[...this.documents];return this.filterWorkspace&&(t=t.filter(e=>e.workspacePath===this.filterWorkspace)),t}highlightMatches(t,e){if(!e||!e.trim())return r`${t}`;const a=e.toLowerCase(),n=t.toLowerCase(),i=[];let s=0,o=n.indexOf(a,s);for(;o!==-1;)o>s&&i.push(t.substring(s,o)),i.push(r`<mark class="search-match">${t.substring(o,o+e.length)}</mark>`),s=o+e.length,o=n.indexOf(a,s);return s<t.length&&i.push(t.substring(s)),r`${i}`}getContentPreview(t){const e=this.searchResults.get(t.id);if(e&&e.matchedSnippets.length>0)return r`
                <table class="snippets-table">
                    <thead>
                        <tr>
                            <th class="snippet-number-col">#</th>
                            <th class="snippet-content-col">Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${e.matchedSnippets.map((n,i)=>r`
                            <tr>
                                <td class="snippet-number">${i+1}</td>
                                <td class="snippet-content">${this.highlightMatches(n,this.searchQuery)}</td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            `;if(this.searchQuery&&this.searchQuery.trim()){const n=z.extractContextSnippets(t.content,this.searchQuery,_.CONTEXT);if(n.length>0)return r`
                    <table class="snippets-table">
                        <thead>
                            <tr>
                                <th class="snippet-number-col">#</th>
                                <th class="snippet-content-col">Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${n.map((i,s)=>r`
                                <tr>
                                    <td class="snippet-number">${s+1}</td>
                                    <td class="snippet-content">${this.highlightMatches(t.content.substring(i.start,i.end),this.searchQuery)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                `}const a=z.extractSimpleSnippet(t.content,G.LONG);return r`
            <div class="snippet-preview">${a}</div>
        `}async deleteDocument(t){try{await l.deleteDocument(t.id),u(`Deleted: ${t.fileName}`),await this.loadDocuments(),await this.loadStats(),this.selectedDocument?.id===t.id&&(this.selectedDocument=null)}catch(e){c(`Failed to delete document: ${e}`)}}async reindexDocument(t){try{const e=await S();if(!e){c("No workspace connected");return}const a=await e.workspace.getResource(t.filePath);if(!a){c(`File not found: ${t.filePath}`);return}if(!(a instanceof g)){c(`Resource is not a file: ${t.filePath}`);return}const n=a;await w.runAsync("Reindexing document",async i=>{i.message=`Reindexing ${t.fileName}...`,await l.reindexDocument(n),i.progress=100}),u(`Reindexed: ${t.fileName}`),await this.loadDocuments(),this.selectedDocument?.id===t.id&&(this.selectedDocument=await l.getDocument(t.id))}catch(e){c(`Failed to reindex document: ${e}`)}}async reindexAllDocuments(){if(this.reindexing)return;const t=await l.getStats();if(t.totalDocuments===0){u("No documents to reindex");return}this.reindexing=!0,this.requestUpdate();try{const e=await w.runAsync("Reindexing all documents",async a=>{a.message="Starting reindexing...";const n=t.totalDocuments,i=await l.reindexAllDocuments(),s=i.succeeded+i.failed;return a.progress=n>0?s/n*100:100,a.message=`Reindexed ${i.succeeded}/${n} documents${i.failed>0?` (${i.failed} failed)`:""}`,i});await this.loadDocuments(),await this.loadStats(),u(`Reindexing completed: ${e.succeeded} succeeded, ${e.failed} failed`)}catch(e){v.error(`Failed to reindex all documents: ${e}`),c(`Failed to reindex all documents: ${e}`)}finally{this.reindexing=!1,this.requestUpdate()}}formatFileSize(t){return t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}formatDate(t){return new Date(t).toLocaleString()}getFileIcon(t){return D.getFileIcon(t)}renderToolbar(){const t=Object.keys(this.stats?.byWorkspace||{});return r`
            <wa-input
                type="search"
                placeholder="Search documents..."
                .value=${this.searchInputValue}
                @input=${e=>{this.searchInputValue=e.target.value,this.searchDebounceTimer&&clearTimeout(this.searchDebounceTimer),this.searchDebounceTimer=window.setTimeout(async()=>{this.searchQuery=this.searchInputValue,await this.updateFilteredDocuments()},200)}}
                @wa-clear=${async()=>{this.searchDebounceTimer&&clearTimeout(this.searchDebounceTimer),this.searchInputValue="",this.searchQuery="",await this.updateFilteredDocuments()}}
                size="small"
                with-clear
                autocomplete="off"
                style="flex: 1; max-width: 400px;">
                <wa-icon name="magnifying-glass" slot="start"></wa-icon>
            </wa-input>
            
            <wa-switch
                .checked=${this.filterByActiveWorkspace}
                @change=${async e=>{this.filterByActiveWorkspace=e.target.checked,await this.loadDocuments()}}
                size="small">
                Active workspace only
            </wa-switch>
            
            ${t.length>1?r`
                <wa-select 
                    .value=${this.filterWorkspace||""}
                    @change=${async e=>{this.filterWorkspace=e.target.value||null,await this.updateFilteredDocuments()}}
                    size="small"
                    style="width: 200px;">
                    <wa-option value="">All Workspaces</wa-option>
                    ${t.map(e=>r`
                        <wa-option value="${e}">${e} (${this.stats.byWorkspace[e]})</wa-option>
                    `)}
                </wa-select>
            `:b}
            
            <k-command 
                size="small" 
                icon="arrow-rotate-right"
                title="Refresh document list"
                .action=${()=>this.loadDocuments()}
                ?disabled=${this.reindexing}>
                Refresh
            </k-command>
            
            <k-command 
                size="small" 
                icon="database"
                title="Re-index all documents"
                .action=${()=>this.reindexAllDocuments()}
                ?disabled=${this.reindexing||this.loading}>
                ${this.reindexing?"Reindexing...":"Re-index All"}
            </k-command>
        `}render(){this.stats||(this.stats={totalDocuments:0,byWorkspace:{}});const t=this.filteredDocuments,e=Object.keys(this.stats.byWorkspace||{});return r`
            <div class="rag-system-manager">
                <div class="header">
                    <div class="header-content">
                        <div class="stats">
                            <span>Total: ${this.stats.totalDocuments} documents</span>
                            ${e.length>0?r`
                                <span>Workspaces: ${e.length}</span>
                            `:b}
                        </div>
                    </div>
                </div>

                <wa-split-panel position="40" style="height: 100%;">
                    <div class="document-list" slot="start">
                        ${this.loading?r`
                            <div class="loading">
                                <wa-spinner></wa-spinner>
                                <span>Loading documents...</span>
                            </div>
                        `:t.length===0?r`
                            <div class="empty">
                                <wa-icon name="inbox" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                                <p>${this.searchQuery||this.filterWorkspace?"No documents match your filters":"No documents indexed yet"}</p>
                            </div>
                        `:r`
                            <wa-tree 
                                ${W(this.treeRef)}
                                selection="leaf"
                                style="--indent-guide-width: 1px;"
                                @wa-selection-change=${a=>{this.handleTreeSelection(a)}}>
                                ${t.map(a=>r`
                                    <wa-tree-item 
                                        .model=${a}
                                        ?selected=${this.selectedDocument?.id===a.id}>
                                        <wa-icon name="${this.getFileIcon(a.fileType)}"></wa-icon>
                                            <div class="tree-item-info">
                                                <strong class="tree-item-path">${a.filePath}</strong>
                                                <div class="tree-item-meta">
                                                    <small class="meta-size">${this.formatFileSize(a.metadata.size)}</small>
                                                    <small class="meta-date">${this.formatDate(a.indexedAt)}</small>
                                                </div>
                                            </div>
                                            <div class="tree-item-actions" @click=${n=>n.stopPropagation()}>
                                                <wa-button
                                                    variant="neutral"
                                                    appearance="plain"
                                                    size="small"
                                                    title="Reindex"
                                                    @click=${()=>this.reindexDocument(a)}>
                                                    <wa-icon name="arrow-rotate-right"></wa-icon>
                                                </wa-button>
                                                <wa-button
                                                    variant="danger"
                                                    appearance="plain"
                                                    size="small"
                                                    title="Delete"
                                                    @click=${()=>this.deleteDocument(a)}>
                                                    <wa-icon name="trash"></wa-icon>
                                                </wa-button>
                                            </div>
                                    </wa-tree-item>
                                `)}
                            </wa-tree>
                        `}
                    </div>

                    <div slot="end">
                        ${this.selectedDocument?r`
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
                                    
                                    ${this.selectedDocument.metadata.tags&&this.selectedDocument.metadata.tags.length>0?r`
                                        <div class="tags-section">
                                            <wa-input
                                                label="Tags"
                                                .value=${this.selectedDocument.metadata.tags.join(", ")}
                                                readonly
                                                size="small">
                                                <wa-copy-button
                                                    slot="end"
                                                    .value=${this.selectedDocument.metadata.tags.join(", ")}
                                                    size="small"
                                                    label="Copy tags">
                                                </wa-copy-button>
                                            </wa-input>
                                        </div>
                                    `:b}
                                
                                    <div class="detail-section">
                                        <label>Content Preview${this.searchQuery?r` <span class="search-hint">(showing matches for "${this.searchQuery}")</span>`:b}</label>
                                        <wa-scroller class="content-preview" orientation="vertical">
                                            <div class="content-preview-inner">
                                                ${this.getContentPreview(this.selectedDocument)}
                                            </div>
                                        </wa-scroller>
                                    </div>
                                </div>
                            </div>
                    `:r`
                            <div class="document-details empty">
                                <wa-icon name="file-lines" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                                <p>Select a document to view details</p>
                            </div>
                        `}
                    </div>
                </wa-split-panel>
            </div>
        `}};d.styles=A`
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
    `;m([I({attribute:!1})],d.prototype,"input",2);m([h()],d.prototype,"documents",2);m([h()],d.prototype,"stats",2);m([h()],d.prototype,"loading",2);m([h()],d.prototype,"selectedDocument",2);m([h()],d.prototype,"searchQuery",2);m([h()],d.prototype,"filterWorkspace",2);m([h()],d.prototype,"filterByActiveWorkspace",2);m([h()],d.prototype,"filteredDocuments",2);m([h()],d.prototype,"searchResults",2);m([h()],d.prototype,"reindexing",2);d=m([C("k-rag-system-manager")],d);const x=F("RAGSystemExtension");function j(t){l.initialize().catch(e=>{x.error(`Failed to initialize document index service: ${e}`)}),f({command:{id:"rag-system.index-file",name:"Index Document",description:"Index the currently selected file for search and retrieval",parameters:[{name:"includeContent",description:"Whether to include full content in index (default: true)",required:!1}]},handler:{canExecute:e=>y.get()instanceof g,execute:async e=>{const a=y.get();if(!(a instanceof g)){c("Please select a file to index");return}const n=e.params?.includeContent!==!1;await w.runAsync("Indexing document",async i=>{i.message=`Indexing ${a.getName()}...`;try{const s=await l.indexDocument(a,{includeContent:n});i.progress=100,u(`Document indexed: ${s.fileName}`)}catch(s){throw c(`Failed to index document: ${s}`),s}})}}}),f({command:{id:"rag-system.index-workspace",name:"Index Workspace",description:"Index all indexable files in the current workspace",parameters:[{name:"includeContent",description:"Whether to include full content in index (default: true)",required:!1},{name:"maxFileSize",description:"Maximum file size in bytes to index (default: 5MB)",required:!1}]},handler:{canExecute:e=>!0,execute:async e=>{const a=await k.getWorkspace();if(!a){c("No workspace selected");return}const n=e.params?.includeContent!==!1,i=e.params?.maxFileSize?parseInt(e.params.maxFileSize):void 0;await w.runAsync("Indexing workspace",async s=>{s.message="Collecting files...",s.progress=0;try{const o=await l.indexWorkspace(a,{includeContent:n,maxFileSize:i});s.progress=100,o.failed>0?c(`Indexing complete: ${o.indexed} indexed, ${o.failed} failed. Check console for details.`):u(`Workspace indexed: ${o.indexed} documents`)}catch(o){throw c(`Failed to index workspace: ${o}`),o}})}}}),f({command:{id:"rag-system.list-documents",name:"List Indexed Documents",description:"List all indexed documents in the current workspace",parameters:[]},handler:{canExecute:e=>!0,execute:async e=>{const n=(await k.getWorkspace())?.getName();await w.runAsync("Loading indexed documents",async i=>{try{const s=await l.listDocuments(n);i.progress=100,s.length===0?u("No documents indexed in this workspace"):(x.info(`Found ${s.length} indexed documents`),u(`Found ${s.length} indexed documents (check console for details)`))}catch(s){throw c(`Failed to list documents: ${s}`),s}})}}}),f({command:{id:"rag-system.delete-document",name:"Delete Document from Index",description:"Remove the selected file from the document index",parameters:[]},handler:{canExecute:e=>y.get()instanceof g,execute:async e=>{const a=y.get();if(!(a instanceof g)){c("Please select a file to remove from index");return}const i=a.getWorkspace().getName(),s=a.getWorkspacePath();await w.runAsync("Deleting document from index",async o=>{try{const p=await l.deleteDocumentByPath(i,s);o.progress=100,p?u(`Document removed from index: ${a.getName()}`):u(`Document not found in index: ${a.getName()}`)}catch(p){throw c(`Failed to delete document from index: ${p}`),p}})}}}),f({command:{id:"rag-system.clear-workspace",name:"Clear Workspace Index",description:"Remove all indexed documents from the current workspace",parameters:[]},handler:{canExecute:e=>!0,execute:async e=>{const a=await k.getWorkspace();if(!a){c("No workspace selected");return}const n=a.getName();await w.runAsync("Clearing workspace index",async i=>{try{const s=await l.deleteWorkspace(n);i.progress=100,u(`Removed ${s} documents from index`)}catch(s){throw c(`Failed to clear workspace index: ${s}`),s}})}}}),f({command:{id:"rag-system.get-stats",name:"Document Index Statistics",description:"Get statistics about the document index",parameters:[]},handler:{canExecute:e=>!0,execute:async e=>{await w.runAsync("Loading statistics",async a=>{try{const n=await l.getStats();a.progress=100,x.info(`Document index statistics: ${JSON.stringify(n)}`),u(`Index statistics: ${n.totalDocuments} total documents. Check console for details.`)}catch(n){throw c(`Failed to get statistics: ${n}`),n}})}}}),f({command:{id:"rag-system.reindex-file",name:"Reindex Document",description:"Reindex the selected file (useful after file changes)",parameters:[]},handler:{canExecute:e=>y.get()instanceof g,execute:async e=>{const a=y.get();if(!(a instanceof g)){c("Please select a file to reindex");return}await w.runAsync("Reindexing document",async n=>{n.message=`Reindexing ${a.getName()}...`;try{const i=await l.reindexDocument(a);n.progress=100,u(`Document reindexed: ${i.fileName}`)}catch(i){throw c(`Failed to reindex document: ${i}`),i}})}}}),x.info("RAG system extension loaded"),D.registerEditorInputHandler({ranking:1e3,canHandle:e=>e.key===".system.rag-system",handle:async e=>(e.editorId="rag-system-manager",e.widgetFactory=()=>r`
                <k-rag-system-manager .input=${e}></k-rag-system-manager>
            `,e)}),f({command:{id:"open-rag-system-manager",name:"Open RAG System Manager",description:"Opens the RAG system manager to view and manage indexed documents",parameters:[]},handler:{execute:e=>{const a={title:"RAG System Manager",data:{},key:".system.rag-system",icon:"database",state:{}};D.loadEditor(a).catch(n=>{x.error(`Failed to open document index manager: ${n}`)})}},contribution:{target:M,icon:"database",label:"RAG System"}}),O.registerContribution("contextmenu:filebrowser",{command:"rag-system.index-file",icon:"database",label:"Index Document",disabled:()=>!(y.get()instanceof g)}),N(()=>import("./rag-integration-DChpRC3d.js"),__vite__mapDeps([0,1,2,3,4,5])).then(e=>{e.integrateRAGWithAI(),x.info("RAG integration enabled")}).catch(e=>{x.warn(`Failed to load RAG integration: ${e}`)})}export{j as default};
