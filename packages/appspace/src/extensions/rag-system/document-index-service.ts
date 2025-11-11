import { createRxDatabase, RxDatabase, RxCollection, addRxPlugin } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBMigrationSchemaPlugin } from 'rxdb/plugins/migration-schema';
import { rootContext } from '../../core/di';
import { workspaceService, File, Directory, FileContentType, TOPIC_WORKSPACE_CONNECTED, TOPIC_WORKSPACE_CHANGED } from '../../core/filesys';
import { subscribe } from '../../core/events';
import { createLogger } from '../../core/logger';
import { embeddingService } from './embedding-service';
import { VectorEmbedding, generateSampleVectors, calculateIndexValues, euclideanDistance, cosineSimilarity, SampleVector, IndexValues } from './vector-utils';
import { VECTOR_SEARCH_CONFIG, INDEX_FIELD_NAMES } from './utils/constants';
import { DocumentChunker, DocumentChunk } from './utils/document-chunker';

// Add required RxDB plugins
addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBMigrationSchemaPlugin);

const logger = createLogger('DocumentIndexService');

export interface IndexedDocument {
    id: string;
    workspacePath: string;
    filePath: string;
    fileName: string;
    fileType: string;
    content: string;
    contentHash: string;
    metadata: {
        size: number;
        lastModified: number;
        language?: string;
        tags?: string[];
    };
    indexedAt: number;
    updatedAt: number;
}

export interface DocumentIndexOptions {
    includeContent?: boolean;
    maxFileSize?: number;
    fileTypes?: string[];
    excludePatterns?: string[];
    tags?: string[];
}

type DocumentCollection = RxCollection<IndexedDocument>;
type VectorCollection = RxCollection<VectorEmbedding>;

class DocumentIndexService {
    private db?: RxDatabase;
    private documentsCollection?: DocumentCollection;
    private vectorsCollection?: VectorCollection;
    private sampleVectors: SampleVector[] = [];
    private isInitialized = false;
    private readonly DEFAULT_MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    private readonly chunker = new DocumentChunker();
    private readonly DEFAULT_INDEXABLE_TYPES = [
        'md', 'txt', 'ts', 'tsx', 'js', 'jsx', 'json', 'geojson',
        'kml', 'gpx', 'py', 'html', 'css', 'sql', 'xml', 'yaml', 'yml', 'pdf'
    ];

    async initialize(): Promise<void> {
        if (this.isInitialized) {
            return;
        }

        logger.info('Initializing document index service with RxDB...');

        try {
            this.db = await createRxDatabase({
                name: 'document-index-db',
                storage: getRxStorageDexie(),
                ignoreDuplicate: true,
            });

            const documentsSchema = {
                version: 0,
                primaryKey: 'id',
                type: 'object',
                properties: {
                    id: { type: 'string', maxLength: 500 },
                    workspacePath: { type: 'string' },
                    filePath: { type: 'string' },
                    fileName: { type: 'string' },
                    fileType: { type: 'string' },
                    content: { type: 'string' },
                    contentHash: { type: 'string' },
                    metadata: {
                        type: 'object',
                        properties: {
                            size: { type: 'number' },
                            lastModified: { type: 'number' },
                            language: { type: 'string' },
                            tags: {
                                type: 'array',
                                items: { type: 'string' }
                            }
                        }
                    },
                    indexedAt: { type: 'number' },
                    updatedAt: { type: 'number' }
                },
                required: ['id', 'workspacePath', 'filePath', 'content', 'contentHash'],
                indexes: ['workspacePath', 'filePath', 'fileType']
            };

            const vectorsSchema = {
                version: 1,
                primaryKey: 'id',
                type: 'object',
                properties: {
                    id: { type: 'string', maxLength: 500 },
                    documentId: { type: 'string', maxLength: 500 },
                    embedding: {
                        type: 'array',
                        items: { type: 'number' }
                    },
                    idx0: { type: 'number' },
                    idx1: { type: 'number' },
                    idx2: { type: 'number' },
                    idx3: { type: 'number' },
                    idx4: { type: 'number' },
                    chunkIndex: { type: 'number' },
                    chunkStartOffset: { type: 'number' },
                    chunkEndOffset: { type: 'number' }
                },
                required: ['id', 'documentId', 'embedding', 'idx0', 'idx1', 'idx2', 'idx3', 'idx4'],
                indexes: ['documentId', 'chunkIndex', 'idx0', 'idx1', 'idx2', 'idx3', 'idx4']
            };

            const collectionsToAdd: any = {
                documents: { schema: documentsSchema },
                vectors: { schema: vectorsSchema }
            };

            try {
                await this.db.addCollections(collectionsToAdd);
            } catch (error: any) {
                if (error?.code === 'DB8' || error?.message?.includes('already exists')) {
                    logger.debug('Collections already exist, using existing collections');
                } else {
                    throw error;
                }
            }

            this.documentsCollection = this.db.documents as DocumentCollection;
            this.vectorsCollection = this.db.vectors as VectorCollection;
            
            await this.initializeSampleVectors();
            
            await this.handleSchemaMigration();
            
            this.isInitialized = true;

            const count = await this.documentsCollection.count().exec();
            const vectorCount = await this.vectorsCollection.count().exec();
            logger.info(`Document index service initialized with ${count} documents and ${vectorCount} embeddings`);

            subscribe(TOPIC_WORKSPACE_CONNECTED, (workspace: Directory) => {
                if (workspace) {
                    this.handleWorkspaceChange(workspace).catch(err => {
                        logger.error(`Failed to handle workspace connection: ${err}`);
                    });
                }
            });

            subscribe(TOPIC_WORKSPACE_CHANGED, (workspace: Directory) => {
                if (workspace) {
                    this.handleWorkspaceChange(workspace).catch(err => {
                        logger.error(`Failed to handle workspace change: ${err}`);
                    });
                }
            });

            logger.info('Document index service initialized');
        } catch (error) {
            logger.error(`Failed to initialize document index service: ${error}`);
            throw error;
        }
    }

    private ensureInitialized(): void {
        if (!this.isInitialized || !this.documentsCollection || !this.vectorsCollection) {
            throw new Error('Document index service not initialized. Call initialize() first.');
        }
    }

    private async initializeSampleVectors(): Promise<void> {
        if (this.sampleVectors.length > 0) {
            return;
        }

        const existingEmbeddings = await this.vectorsCollection!
            .find()
            .limit(1000)
            .exec();

        const embeddingArrays = existingEmbeddings.map(v => v.embedding);
        
        this.sampleVectors = generateSampleVectors(
            VECTOR_SEARCH_CONFIG.SAMPLE_VECTOR_COUNT,
            embeddingService.getEmbeddingDimension(),
            embeddingArrays.length > 0 ? embeddingArrays : undefined
        );

        logger.info(`Sample vectors initialized for index range method: ${this.sampleVectors.length} vectors, ${existingEmbeddings.length} existing embeddings`);
    }

    private generateDocumentId(workspacePath: string, filePath: string): string {
        return `${workspacePath}:${filePath}`;
    }

    private async computeContentHash(content: string): Promise<string> {
        const encoder = new TextEncoder();
        const data = encoder.encode(content);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    private isIndexableFile(file: File, options?: DocumentIndexOptions): boolean {
        const fileName = file.getName().toLowerCase();
        const fileTypes = options?.fileTypes || this.DEFAULT_INDEXABLE_TYPES;
        
        const extension = fileName.split('.').pop();
        if (!extension || !fileTypes.includes(extension)) {
            return false;
        }

        if (options?.excludePatterns) {
            for (const pattern of options.excludePatterns) {
                if (fileName.includes(pattern) || file.getWorkspacePath().includes(pattern)) {
                    return false;
                }
            }
        }

        return true;
    }

    private detectLanguage(fileName: string): string {
        const ext = fileName.split('.').pop()?.toLowerCase();
        const langMap: Record<string, string> = {
            'ts': 'typescript',
            'tsx': 'typescript',
            'js': 'javascript',
            'jsx': 'javascript',
            'py': 'python',
            'md': 'markdown',
            'json': 'json',
            'geojson': 'geojson',
            'kml': 'xml',
            'gpx': 'xml',
            'html': 'html',
            'css': 'css',
            'sql': 'sql',
            'xml': 'xml',
            'yaml': 'yaml',
            'yml': 'yaml',
            'pdf': 'pdf',
        };
        return langMap[ext || ''] || 'text';
    }

    private async extractTextFromPDF(file: File): Promise<string> {
        try {
            const pdfjsLib = await import('pdfjs-dist');
            
            // Configure PDF.js worker
            if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
                // Use unpkg CDN - more reliable than cdnjs and matches the installed version
                pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
            }
            
            const pdfBlob = await file.getContents({ blob: true }) as Blob;
            const arrayBuffer = await pdfBlob.arrayBuffer();
            
            const loadingTask = pdfjsLib.getDocument({ 
                data: arrayBuffer,
                useSystemFonts: true
            });
            const pdf = await loadingTask.promise;
            
            const numPages = pdf.numPages;
            const textParts: string[] = [];
            
            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                
                const pageText = textContent.items
                    .map((item: any) => item.str)
                    .join(' ');
                
                if (pageText.trim()) {
                    textParts.push(`[Page ${pageNum}]\n${pageText}`);
                }
            }
            
            const extractedText = textParts.join('\n\n');
            
            if (!extractedText || extractedText.trim().length === 0) {
                throw new Error('PDF appears to contain no extractable text (may be image-based or scanned)');
            }
            
            return extractedText;
        } catch (error) {
            logger.warn(`Failed to extract text from PDF ${file.getName()}: ${error}`);
            throw new Error(`PDF text extraction failed: ${error}`);
        }
    }

    async indexDocument(
        file: File,
        options: DocumentIndexOptions = {}
    ): Promise<IndexedDocument> {
        if (!this.isInitialized) {
            await this.initialize();
        }
        this.ensureInitialized();

        const workspace = file.getWorkspace();
        const workspacePath = workspace.getName();
        const filePath = file.getWorkspacePath();
        const fileName = file.getName();
        const id = this.generateDocumentId(workspacePath, filePath);

        if (!this.isIndexableFile(file, options)) {
            throw new Error(`File type not indexable: ${fileName}`);
        }

        try {
            let content: string;
            const fileType = fileName.split('.').pop()?.toLowerCase() || 'txt';
            
            if (fileType === 'pdf') {
                content = await this.extractTextFromPDF(file);
            } else {
                const fileContent = await file.getContents({ contentType: FileContentType.TEXT });
                if (typeof fileContent !== 'string') {
                    throw new Error(`File content is not text: ${fileName}`);
                }
                content = fileContent;
            }

            if (!content || content.trim().length === 0) {
                throw new Error(`File appears to be empty or text extraction failed: ${fileName}`);
            }

            const maxSize = options.maxFileSize || this.DEFAULT_MAX_FILE_SIZE;
            if (content.length > maxSize) {
                throw new Error(`File too large to index: ${fileName} (${content.length} bytes)`);
            }

            const contentHash = await this.computeContentHash(content);
            const now = Date.now();

            const existing = await this.documentsCollection!.findOne(id).exec();
            if (existing && existing.contentHash === contentHash) {
                logger.debug(`Document already indexed and unchanged: ${id}`);
                return existing.toJSON() as IndexedDocument;
            }

            const language = this.detectLanguage(fileName);

            let lastModified = now;
            try {
                const fileHandle = (file as any).getHandle?.();
                if (fileHandle) {
                    const fileInfo = await fileHandle.getFile();
                    lastModified = fileInfo.lastModified;
                }
            } catch (err) {
                logger.debug(`Could not get file modification time: ${err}`);
            }

            const existingTags = existing ? (existing.toJSON() as IndexedDocument).metadata.tags || [] : [];
            const newTags = options.tags || [];
            const mergedTags = [...new Set([...existingTags, ...newTags])];

            const document: IndexedDocument = {
                id,
                workspacePath,
                filePath,
                fileName,
                fileType,
                content: options.includeContent !== false ? content : '',
                contentHash,
                metadata: {
                    size: content.length,
                    lastModified,
                    language,
                    tags: mergedTags,
                },
                indexedAt: existing ? (existing.toJSON() as IndexedDocument).indexedAt : now,
                updatedAt: now,
            };

            await this.documentsCollection!.upsert(document);

            await this.generateAndStoreEmbedding(document);

            logger.debug(`Indexed document: ${id}`);
            return document;
        } catch (error) {
            logger.error(`Failed to index document ${id}: ${error}`);
            throw error;
        }
    }

    async getDocument(id: string): Promise<IndexedDocument | null> {
        if (!this.isInitialized) {
            await this.initialize();
        }
        this.ensureInitialized();

        const doc = await this.documentsCollection!.findOne(id).exec();
        return doc ? (doc.toJSON() as IndexedDocument) : null;
    }

    async getDocumentByPath(workspacePath: string, filePath: string): Promise<IndexedDocument | null> {
        const id = this.generateDocumentId(workspacePath, filePath);
        return this.getDocument(id);
    }

    async listDocuments(workspacePath?: string): Promise<IndexedDocument[]> {
        if (!this.isInitialized) {
            await this.initialize();
        }
        this.ensureInitialized();

        let query = this.documentsCollection!.find();
        
        if (workspacePath) {
            query = query.where('workspacePath').eq(workspacePath);
        }

        const docs = await query.exec();
        return docs.map(doc => doc.toJSON() as IndexedDocument);
    }

    async deleteDocument(id: string): Promise<boolean> {
        if (!this.isInitialized) {
            await this.initialize();
        }
        this.ensureInitialized();

        const doc = await this.documentsCollection!.findOne(id).exec();
        if (doc) {
            await doc.remove();
            
            const vectors = await this.vectorsCollection!
                .find()
                .where('documentId')
                .eq(id)
                .exec();
            
            for (const vector of vectors) {
                await vector.remove();
            }
            
            logger.debug(`Deleted document ${id} and ${vectors.length} associated embeddings`);
            return true;
        }
        return false;
    }

    async deleteDocumentByPath(workspacePath: string, filePath: string): Promise<boolean> {
        const id = this.generateDocumentId(workspacePath, filePath);
        return this.deleteDocument(id);
    }

    private async handleSchemaMigration(): Promise<void> {
        if (!this.vectorsCollection || !this.documentsCollection) {
            return;
        }

        try {
            const allVectors = await this.vectorsCollection.find().exec();
            const vectorsWithoutChunks = allVectors.filter(v => {
                const data = v.toJSON() as VectorEmbedding;
                return data.chunkIndex === undefined && 
                       data.chunkStartOffset === undefined && 
                       data.chunkEndOffset === undefined;
            });

            if (vectorsWithoutChunks.length === 0) {
                logger.debug('No vectors need migration - all have chunk information');
                return;
            }

            logger.info(`Detected ${vectorsWithoutChunks.length} vectors without chunk information. Invalidating and reindexing...`);

            const documentIdsToReindex = new Set<string>();
            
            for (const vector of vectorsWithoutChunks) {
                const data = vector.toJSON() as VectorEmbedding;
                documentIdsToReindex.add(data.documentId);
                await vector.remove();
            }

            logger.info(`Removed ${vectorsWithoutChunks.length} old vectors. Reindexing ${documentIdsToReindex.size} documents...`);

            for (const documentId of documentIdsToReindex) {
                const doc = await this.documentsCollection.findOne(documentId).exec();
                if (doc) {
                    const document = doc.toJSON() as IndexedDocument;
                    logger.debug(`Reindexing document: ${document.fileName}`);
                    await this.generateAndStoreEmbedding(document);
                }
            }

            logger.info(`Schema migration completed. Reindexed ${documentIdsToReindex.size} documents.`);
        } catch (error) {
            logger.error(`Error during schema migration: ${error}`);
            throw error;
        }
    }

    async deleteWorkspace(workspacePath: string): Promise<number> {
        if (!this.isInitialized) {
            await this.initialize();
        }
        this.ensureInitialized();

        const docs = await this.documentsCollection!
            .find()
            .where('workspacePath')
            .eq(workspacePath)
            .exec();

        const count = docs.length;
        for (const doc of docs) {
            await (doc as any).remove();
        }

        if (count > 0) {
            logger.info(`Deleted ${count} documents for workspace: ${workspacePath}`);
        }

        return count;
    }

    async updateDocumentMetadata(
        id: string,
        updates: Partial<Pick<IndexedDocument, 'metadata'>>
    ): Promise<IndexedDocument | null> {
        if (!this.isInitialized) {
            await this.initialize();
        }
        this.ensureInitialized();

        const doc = await this.documentsCollection!.findOne(id).exec();
        if (!doc) {
            return null;
        }

        const current = doc.toJSON() as IndexedDocument;
        const updated: IndexedDocument = {
            ...current,
            metadata: {
                ...current.metadata,
                ...updates.metadata,
            },
            updatedAt: Date.now(),
        };

        await doc.update({ $set: updated });

        logger.debug(`Updated document metadata: ${id}`);
        return updated;
    }

    async indexWorkspace(
        workspace: Directory,
        options: DocumentIndexOptions = {}
    ): Promise<{ indexed: number; failed: number; errors: string[] }> {
        if (!this.isInitialized) {
            await this.initialize();
        }

        const workspacePath = workspace.getName();
        logger.info(`Starting workspace indexing: ${workspacePath}`);

        const files = await this.collectFiles(workspace, options);
        logger.info(`Found ${files.length} files to index`);

        let indexed = 0;
        let failed = 0;
        const errors: string[] = [];

        for (const file of files) {
            try {
                await this.indexDocument(file, options);
                indexed++;
            } catch (error) {
                failed++;
                const errorMsg = `Failed to index ${file.getName()}: ${error}`;
                errors.push(errorMsg);
                logger.warn(errorMsg);
            }
        }

        logger.info(`Workspace indexing complete: ${indexed} indexed, ${failed} failed`);
        return { indexed, failed, errors };
    }

    private async collectFiles(
        directory: Directory,
        options: DocumentIndexOptions,
        files: File[] = []
    ): Promise<File[]> {
        try {
            const children = await directory.listChildren(false);

            for (const child of children) {
                if (child instanceof File) {
                    if (this.isIndexableFile(child, options)) {
                        files.push(child);
                    }
                } else if (child instanceof Directory) {
                    await this.collectFiles(child, options, files);
                }
            }
        } catch (error) {
            logger.warn(`Failed to collect files from ${directory.getName()}: ${error}`);
        }

        return files;
    }

    async reindexDocument(file: File, options: DocumentIndexOptions = {}): Promise<IndexedDocument> {
        const workspace = file.getWorkspace();
        const workspacePath = workspace.getName();
        const filePath = file.getWorkspacePath();
        const id = this.generateDocumentId(workspacePath, filePath);

        const existing = await this.getDocument(id);
        const existingTags = existing?.metadata.tags || [];
        const newTags = options.tags || [];
        const mergedTags = [...new Set([...existingTags, ...newTags])];

        await this.deleteDocument(id);
        return this.indexDocument(file, {
            ...options,
            tags: mergedTags
        });
    }

    async reindexAllDocuments(options: DocumentIndexOptions = {}): Promise<{ total: number; succeeded: number; failed: number }> {
        if (!this.isInitialized) {
            await this.initialize();
        }
        this.ensureInitialized();

        const allDocs = await this.listDocuments();
        let succeeded = 0;
        let failed = 0;

        for (const doc of allDocs) {
            try {
                const workspace = workspaceService.getWorkspace(doc.workspacePath);
                if (!workspace) {
                    logger.warn(`Workspace not found: ${doc.workspacePath}`);
                    failed++;
                    continue;
                }

                const resource = await workspace.getResource(doc.filePath);
                if (!resource || !(resource instanceof File)) {
                    logger.warn(`File not found: ${doc.filePath}`);
                    failed++;
                    continue;
                }

                await this.reindexDocument(resource, options);
                succeeded++;
            } catch (error) {
                logger.error(`Failed to reindex document ${doc.id}: ${error}`);
                failed++;
            }
        }

        return {
            total: allDocs.length,
            succeeded,
            failed
        };
    }

    async getStats(): Promise<{ totalDocuments: number; byWorkspace: Record<string, number> }> {
        if (!this.isInitialized) {
            await this.initialize();
        }
        this.ensureInitialized();

        const totalDocuments = await this.documentsCollection!.count().exec();
        const allDocs = await this.documentsCollection!.find().exec();
        
        const byWorkspace: Record<string, number> = {};
        for (const doc of allDocs) {
            const docData = doc.toJSON() as IndexedDocument;
            const workspacePath = docData.workspacePath;
            byWorkspace[workspacePath] = (byWorkspace[workspacePath] || 0) + 1;
        }

        return {
            totalDocuments,
            byWorkspace,
        };
    }

    private async handleWorkspaceChange(workspace: Directory): Promise<void> {
        logger.debug('Workspace changed, checking for document updates...');
        // Could implement incremental indexing here
        // For now, just log the change
    }

    private async generateAndStoreEmbedding(document: IndexedDocument): Promise<void> {
        try {
            if (!this.vectorsCollection) {
                logger.warn(`Vectors collection not initialized, cannot generate embedding for ${document.id}`);
                return;
            }

            await embeddingService.initialize();
            
            if (this.sampleVectors.length === 0) {
                await this.initializeSampleVectors();
            }
            
            if (this.sampleVectors.length === 0) {
                logger.warn(`Sample vectors not initialized, cannot generate embedding for ${document.id}`);
                return;
            }

            const chunks = this.chunker.chunkDocument(document.id, document.content, document.fileName);
            logger.debug(`Document ${document.id} split into ${chunks.length} chunks`);

            for (const chunk of chunks) {
                const embedding = await embeddingService.generateEmbedding(chunk.text);
                const indexValues = calculateIndexValues(embedding, this.sampleVectors);
                
                const vectorDoc: VectorEmbedding = {
                    id: chunk.id,
                    documentId: document.id,
                    chunkIndex: chunk.chunkIndex,
                    chunkStartOffset: chunk.startOffset,
                    chunkEndOffset: chunk.endOffset,
                    embedding,
                    ...indexValues
                };

                await this.vectorsCollection.upsert(vectorDoc);
            }

            logger.debug(`Generated and stored ${chunks.length} embeddings for document: ${document.id}`);
        } catch (error) {
            logger.warn(`Failed to generate embedding for document ${document.id}: ${error}`);
        }
    }

    async searchSimilar(
        queryText: string,
        options: {
            limit?: number;
            workspacePath?: string;
            fileType?: string;
            indexDistance?: number;
            docsPerIndexSide?: number;
        } = {}
    ): Promise<Array<{ document: IndexedDocument; similarity: number; chunkIndex?: number; chunkStartOffset?: number; chunkEndOffset?: number }>> {
        if (!this.isInitialized) {
            await this.initialize();
        }
        this.ensureInitialized();

        const limit = options.limit || 10;
        const indexDistance = options.indexDistance || 2.0;
        const docsPerIndexSide = options.docsPerIndexSide || 100;

        if (!this.vectorsCollection || this.sampleVectors.length === 0) {
            logger.warn('Vector search not available: vectors collection or sample vectors not initialized');
            throw new Error('Vector search not available');
        }

        const totalVectors = await this.vectorsCollection!.find().exec();
        logger.debug(`Starting vector search with indexDistance=${indexDistance}, limit=${limit}, sampleVectors=${this.sampleVectors.length}, totalIndexedVectors=${totalVectors.length}`);

        try {
            await embeddingService.initialize();
        } catch (error) {
            logger.error(`Failed to initialize embedding service for vector search: ${error}`);
            throw new Error(`Embedding service initialization failed: ${error}`);
        }

        let queryEmbedding: number[];
        try {
            queryEmbedding = await embeddingService.generateEmbedding(queryText);
        } catch (error) {
            logger.error(`Failed to generate query embedding: ${error}`);
            throw new Error(`Query embedding generation failed: ${error}`);
        }
        
        if (this.sampleVectors.length === 0) {
            logger.warn('Sample vectors not initialized, cannot perform vector search');
            throw new Error('Sample vectors not initialized');
        }
        
        const queryIndexValues = calculateIndexValues(queryEmbedding, this.sampleVectors);
        logger.debug(`Query index values: ${JSON.stringify(queryIndexValues)}`);

        const candidateIds = new Set<string>();

        try {
            for (const idxKey of INDEX_FIELD_NAMES) {
                const queryValue = queryIndexValues[idxKey];
                const minValue = queryValue - indexDistance;
                const maxValue = queryValue + indexDistance;

                logger.debug(`Querying index ${idxKey}: range [${minValue}, ${maxValue}]`);

                const candidates = await this.vectorsCollection!
                    .find()
                    .where(idxKey)
                    .gte(minValue)
                    .lte(maxValue)
                    .limit(docsPerIndexSide)
                    .exec();

                logger.debug(`Found ${candidates.length} candidates in index ${idxKey}`);
                for (const candidate of candidates) {
                    candidateIds.add(candidate.documentId);
                }
            }
        } catch (error) {
            logger.error(`Failed to query vector index: ${error}`);
            throw new Error(`Vector index query failed: ${error}`);
        }

        logger.debug(`Total unique candidate IDs: ${candidateIds.size} (out of ${totalVectors.length} indexed vectors)`);

        const candidateVectors: VectorEmbedding[] = [];
        try {
            for (const docId of candidateIds) {
                const vectorDocs = await this.vectorsCollection!
                    .find()
                    .where('documentId')
                    .eq(docId)
                    .exec();
                
                for (const vectorDoc of vectorDocs) {
                    const vectorData = vectorDoc.toJSON() as VectorEmbedding;
                    if (vectorData && vectorData.embedding) {
                        candidateVectors.push(vectorData);
                    } else {
                        logger.warn(`Invalid vector data for document ${docId}`);
                    }
                }
            }
        } catch (error) {
            logger.error(`Failed to fetch candidate vectors: ${error}`);
            throw new Error(`Failed to fetch candidate vectors: ${error}`);
        }

        logger.debug(`Fetched ${candidateVectors.length} candidate vectors`);

        const results: Array<{ 
            documentId: string; 
            similarity: number; 
            chunkIndex?: number; 
            chunkStartOffset?: number; 
            chunkEndOffset?: number;
        }> = [];

        for (const vectorDoc of candidateVectors) {
            const cosineSim = cosineSimilarity(queryEmbedding, vectorDoc.embedding);
            const similarity = (cosineSim + 1) / 2;
            results.push({
                documentId: vectorDoc.documentId,
                similarity,
                chunkIndex: vectorDoc.chunkIndex,
                chunkStartOffset: vectorDoc.chunkStartOffset,
                chunkEndOffset: vectorDoc.chunkEndOffset
            });
        }

        results.sort((a, b) => b.similarity - a.similarity);

        logger.debug(`Computed similarities for ${results.length} candidates, top similarity: ${results[0]?.similarity || 'N/A'}`);

        const topResults = results.slice(0, limit);
        const documentResults: Array<{ 
            document: IndexedDocument; 
            similarity: number; 
            chunkIndex?: number; 
            chunkStartOffset?: number; 
            chunkEndOffset?: number;
        }> = [];

        for (const result of topResults) {
            const doc = await this.documentsCollection!.findOne(result.documentId).exec();
            if (doc) {
                const document = doc.toJSON() as IndexedDocument;
                
                if (options.workspacePath && document.workspacePath !== options.workspacePath) {
                    continue;
                }
                if (options.fileType && document.fileType !== options.fileType) {
                    continue;
                }

                documentResults.push({
                    document,
                    similarity: result.similarity,
                    chunkIndex: result.chunkIndex,
                    chunkStartOffset: result.chunkStartOffset,
                    chunkEndOffset: result.chunkEndOffset
                });
            }
        }

        return documentResults;
    }
}

export const documentIndexService = new DocumentIndexService();
rootContext.put('documentIndexService', documentIndexService);
