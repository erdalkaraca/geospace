# RAG System Architecture Overview

## Introduction

The RAG (Retrieval-Augmented Generation) System is a document indexing and retrieval extension that enables semantic search across workspace documents. It integrates with the AI system to provide context-aware document retrieval for LLM interactions.

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Extension Layer                            │
├─────────────────────────────────────────────────────────────────┤
│  rag-system-extension.ts                                         │
│  - Extension entry point                                         │
│  - Command registration (index, search, manage)                  │
│  - UI component registration                                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Integration Layer                            │
├─────────────────────────────────────────────────────────────────┤
│  rag-integration.ts                                              │
│  - AI system integration (PromptEnhancer, Tools)                 │
│  - Command handlers for AI agents                                │
│  - Tool definitions for LLM interaction                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Service Layer                                │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │   RAGService         │  │ DocumentIndexService  │            │
│  │  - Search orchestration│  │ - Document storage   │            │
│  │  - Multi-strategy    │  │ - Vector indexing     │            │
│  │    search            │  │ - PDF extraction      │            │
│  └──────────────────────┘  └──────────────────────┘            │
│           │                        │                            │
│           └────────────┬───────────┘                            │
│                        ▼                                          │
│  ┌──────────────────────────────────────────┐                   │
│  │        EmbeddingService                  │                   │
│  │  - Text embedding generation             │                   │
│  │  - Model: Xenova/all-MiniLM-L6-v2       │                   │
│  └──────────────────────────────────────────┘                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Supporting Services                            │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ RelevanceCalculator  │  │ RAGResultFormatter    │            │
│  │ - Score calculation │  │ - Result formatting   │            │
│  │ - Weighted matching │  │ - Context generation  │            │
│  └──────────────────────┘  └──────────────────────┘            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Utility Layer                               │
├─────────────────────────────────────────────────────────────────┤
│  utils/                                                           │
│  ├── workspace-utils.ts    - Workspace path resolution           │
│  ├── query-utils.ts        - Query term extraction              │
│  ├── snippet-extractor.ts  - Content snippet extraction         │
│  └── constants.ts          - Configuration constants            │
│                                                                   │
│  vector-utils.ts                                                  │
│  - Vector operations (euclidean, cosine similarity)              │
│  - Sample vector generation                                      │
│  - Index value calculation                                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        UI Layer                                   │
├─────────────────────────────────────────────────────────────────┤
│  rag-system-manager.ts                                           │
│  - Document browser UI                                           │
│  - Search interface                                              │
│  - Document management                                           │
└─────────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. Document Index Service (`document-index-service.ts`)

**Responsibility**: Document storage, indexing, and vector search operations.

**Key Features**:
- **Storage**: Uses RxDB (IndexedDB) for client-side document storage
- **Collections**:
  - `documents`: Full document metadata and content
  - `vectors`: Embedding vectors with indexed distance values
- **Indexing Process**:
  1. File content extraction (text or PDF)
  2. Content hashing for change detection
  3. Embedding generation via EmbeddingService
  4. Index value calculation (euclidean distances to sample vectors)
  5. Storage in both collections

**Vector Search Strategy**:
- **Stage 1 (Candidate Filtering)**: Uses euclidean distance to sample vectors stored as `idx0-idx4` fields
  - Enables fast range queries on indexed fields
  - Narrow down from thousands to hundreds of candidates
- **Stage 2 (Final Ranking)**: Uses cosine similarity for accurate semantic matching
  - Normalizes similarity to [0, 1] range
  - Returns top N results sorted by relevance

**Dependencies**:
- `embeddingService`: For generating embeddings
- `vector-utils`: For vector operations
- `workspaceService`: For workspace access

### 2. RAG Service (`rag-service.ts`)

**Responsibility**: Search orchestration and result preparation.

**Search Strategies** (in priority order):
1. **File Path Search**: Direct lookup by exact file path
2. **File Name Search**: Filter by file name (exact or partial match)
3. **Vector Search**: Semantic similarity search (primary method)
4. **Text Search Fallback**: Keyword-based relevance scoring

**Search Flow**:
```
Query Input
    │
    ├─→ File Path? → Direct Document Lookup
    │
    ├─→ File Name? → Filter by Name → Extract Snippets
    │
    └─→ General Query → Vector Search
                        │
                        ├─→ Success → Extract Snippets → Return Results
                        │
                        └─→ Failure → Text Search Fallback → Return Results
```

**Dependencies**:
- `documentIndexService`: For document retrieval
- `relevanceCalculator`: For text search scoring
- `SnippetExtractor`: For extracting relevant content snippets
- `RAGResultFormatter`: For formatting results

### 3. Embedding Service (`embedding-service.ts`)

**Responsibility**: Text-to-vector conversion using transformer models.

**Model**: `Xenova/all-MiniLM-L6-v2`
- Dimension: 384
- Type: Feature extraction pipeline
- Pooling: Mean pooling with normalization

**Features**:
- Lazy initialization (loads on first use)
- Batch embedding support
- Error handling and retry logic

### 4. RAG Integration (`rag-integration.ts`)

**Responsibility**: Integration with AI system for LLM interactions.

**Components**:

1. **Prompt Enhancer**:
   - Injects instructions for AI agents on when/how to use RAG
   - Only activates when documents are indexed
   - Priority: 10 (runs early in prompt enhancement chain)

2. **Tool Definitions**:
   - `search_workspace_documents`: Search tool for AI agents
   - `rag.check-indexed`: Verify if file is indexed
   - `rag.search-documents`: Command for document search

3. **Command Handlers**:
   - Registers commands accessible to AI agents
   - Provides structured responses with relevance scores
   - Includes warnings for non-indexed files

### 5. Supporting Services

#### Relevance Calculator (`services/relevance-calculator.ts`)
- Calculates relevance scores for text-based search
- Weighted scoring based on:
  - File name matches (highest weight)
  - File path matches
  - Content matches
  - Exact phrase matches
  - Term coverage

#### RAG Result Formatter (`services/rag-result-formatter.ts`)
- Formats search results for different contexts:
  - `formatRAGContext()`: For AI prompt enhancement
  - `formatSearchResults()`: For tool responses
  - `formatCommandResults()`: For command responses

### 6. Utilities

#### Workspace Utils (`utils/workspace-utils.ts`)
- Centralized workspace path resolution
- Handles workspace validation
- Eliminates code duplication

#### Query Utils (`utils/query-utils.ts`)
- Query term extraction and normalization
- Configurable minimum term length
- Case-insensitive by default

#### Snippet Extractor (`utils/snippet-extractor.ts`)
- Extracts relevant content snippets around query matches
- Configurable snippet length and gap
- Scoring algorithm for snippet selection
- Prevents overlapping snippets

#### Constants (`utils/constants.ts`)
- Centralized configuration values
- Search limits, relevance weights, snippet lengths
- Vector search parameters

## Data Flow

### Indexing Flow

```
File Selection
    │
    ▼
DocumentIndexService.indexDocument()
    │
    ├─→ Check if indexable (file type, size)
    ├─→ Extract content (text or PDF)
    ├─→ Compute content hash
    ├─→ Check for existing document (by hash)
    │
    ├─→ Generate embedding (EmbeddingService)
    ├─→ Calculate index values (euclidean distances)
    ├─→ Store document (documents collection)
    └─→ Store vector (vectors collection)
```

### Search Flow

```
User Query / AI Agent Request
    │
    ▼
RAGService.searchDocuments()
    │
    ├─→ Validate workspace
    ├─→ Check search options (filePath, fileName, query)
    │
    ├─→ [File Path] → Direct lookup → Extract snippets
    ├─→ [File Name] → Filter by name → Extract snippets
    │
    └─→ [General Query]
            │
            ├─→ Vector Search (DocumentIndexService.searchSimilar)
            │   │
            │   ├─→ Generate query embedding
            │   ├─→ Calculate query index values
            │   ├─→ Range queries on idx0-idx4 (candidate filtering)
            │   ├─→ Cosine similarity (final ranking)
            │   └─→ Extract snippets
            │
            └─→ [Fallback] Text Search
                    │
                    ├─→ List all documents
                    ├─→ Calculate relevance (RelevanceCalculator)
                    ├─→ Sort by relevance
                    └─→ Extract snippets
```

### AI Integration Flow

```
AI Agent Request
    │
    ▼
Prompt Enhancer (ragPromptEnhancer)
    │
    ├─→ Check if documents indexed
    ├─→ Inject RAG usage instructions
    └─→ Enhanced prompt sent to LLM
            │
            ▼
LLM decides to use RAG tool
    │
    ▼
Tool Executor (createRAGToolExecutor)
    │
    ├─→ search_workspace_documents
    │   │
    │   └─→ RAGService.searchDocuments()
    │       └─→ Format results (RAGResultFormatter)
    │
    └─→ Results returned to LLM
            │
            ▼
LLM uses results in response generation
```

## Database Schema

### Documents Collection

```typescript
{
  id: string;                    // "workspacePath:filePath"
  workspacePath: string;
  filePath: string;
  fileName: string;
  fileType: string;
  content: string;                // Full document content
  contentHash: string;            // SHA-256 hash for change detection
  metadata: {
    size: number;
    lastModified: number;
    language?: string;
    tags?: string[];
  };
  indexedAt: number;
  updatedAt: number;
}

Indexes: ['workspacePath', 'filePath', 'fileType']
```

### Vectors Collection

```typescript
{
  id: string;                    // "vector:documentId"
  documentId: string;            // Reference to document
  embedding: number[];           // 384-dimensional vector
  idx0: number;                  // Euclidean distance to sample vector 0
  idx1: number;                  // Euclidean distance to sample vector 1
  idx2: number;                  // Euclidean distance to sample vector 2
  idx3: number;                  // Euclidean distance to sample vector 3
  idx4: number;                  // Euclidean distance to sample vector 4
}

Indexes: ['documentId', 'idx0', 'idx1', 'idx2', 'idx3', 'idx4']
```

**Note**: The separate `idx0-idx4` fields are required because RxDB cannot index array elements directly. These fields enable efficient range queries for candidate filtering.

## Design Principles

### SOLID Principles

1. **Single Responsibility**:
   - Each service has a focused responsibility
   - Utilities handle specific concerns (workspace, queries, snippets)
   - Formatters handle presentation logic

2. **Open/Closed**:
   - Icon contributions can be extended via contribution registry
   - Search strategies can be extended
   - File type support can be extended

3. **Dependency Inversion**:
   - Services depend on abstractions (utilities)
   - No direct coupling between high-level and low-level modules

### DRY (Don't Repeat Yourself)

- Workspace path resolution: Centralized in `workspace-utils`
- Query processing: Centralized in `query-utils`
- Snippet extraction: Centralized in `SnippetExtractor`
- Constants: Centralized in `constants.ts`
- Icon mapping: Centralized in editor registry with contribution system

## Performance Optimizations

1. **Caching**:
   - Icon contributions cached in editor registry
   - Cache invalidated on contribution changes

2. **Two-Stage Vector Search**:
   - Fast candidate filtering via indexed fields
   - Accurate ranking via cosine similarity
   - Reduces full similarity calculations from thousands to hundreds

3. **Content Hashing**:
   - Skips re-indexing unchanged documents
   - Compares hash instead of full content

4. **Lazy Loading**:
   - Embedding service initializes on first use
   - Tree nodes load children on demand

## Extension Points

1. **Icon Contributions**: Extensions can contribute file type icons via `system.icons` contribution slot
2. **File Type Support**: Add new file types via `DEFAULT_INDEXABLE_TYPES`
3. **Search Strategies**: Extend `RAGService` with new search methods
4. **Result Formatting**: Extend `RAGResultFormatter` with new output formats

## Dependencies

### Internal
- `ai-system`: For LLM integration
- `core/filesys`: For workspace and file access
- `core/commandregistry`: For command registration
- `core/editorregistry`: For UI and icon management
- `core/contributionregistry`: For extensibility

### External
- `rxdb`: Client-side database
- `@xenova/transformers`: Embedding model
- `pdfjs-dist`: PDF text extraction

## Future Improvements

1. **Incremental Indexing**: Watch for file changes and auto-update index
2. **Chunking**: Split large documents into chunks for better retrieval
3. **Metadata Extraction**: Extract structured metadata (dates, authors, etc.)
4. **Multi-language Support**: Language detection and appropriate processing
5. **Search History**: Track and learn from search patterns
6. **Hybrid Search**: Combine vector and keyword search more intelligently

