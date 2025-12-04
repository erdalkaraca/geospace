const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-i0fwJLmI.js","assets/preload-helper-WQhrSmCl.js","assets/index-D1BD3IKJ.js","assets/plugin-YAdQ3Uev.js","assets/rx-query-helper-BVWw9Zuf.js","assets/broadcast-channel-D7u8GVKY.js","assets/rx-query-_watRbMu.js","assets/rx-storage-multiinstance-z35RQluF.js","assets/index-ejdBPKOn.js","assets/index-wo9tjmWU.js","assets/index-Ci0cJADs.js","assets/index-BxvueQg8.js","assets/rag-integration-CzdM2_st-BgLXwevT.js","assets/geospace-app-BEc6wX3y.js","assets/index-8b_zEHWw.js","assets/chunk.LTSJC6DR-BTS7fm5P.js","assets/index-aP6FMjSZ.css","assets/chunk.RRCUZAZD-5O78oK5S.js"])))=>i.map(i=>d[i]);
import{_ as O}from"./preload-helper-WQhrSmCl.js";import{z as C,W as we,y as xe,q as ye,F as E,D as ve,w as V,X as $e,Y as ke,I as be,Z as De,k as Se,r as Ee,h as R,d as _,b as y,t as A,a as b,v as ee,M as Ce,e as Te,m as Pe}from"./geospace-app-BEc6wX3y.js";import{s as ae,x,y as Ie,z as Ne,I as P,M as Ae,E as q,N as Re,A as Oe}from"./index-8b_zEHWw.js";const W=C("EmbeddingService");class ze{constructor(){this.modelName=ke.FEATURE_EXTRACTION,this.EMBEDDING_DIMENSION=384,this.DEFAULT_OPTIONS={pooling:"mean",normalize:!0}}async initialize(){if(this.pipePromise)try{await this.pipePromise;return}catch{W.warn("Previous initialization failed, retrying..."),this.pipePromise=void 0}W.info(`Initializing embedding service with model: ${this.modelName}`);try{this.pipePromise=be.getPipeline(De.FEATURE_EXTRACTION,this.modelName,{quantized:!1}),await this.pipePromise,W.info("Embedding service initialized successfully")}catch(e){const t=e?.message||String(e),a=e?JSON.stringify(e):"";throw W.error(`Failed to initialize embedding service: ${t}${a?` - ${a}`:""}`),this.pipePromise=void 0,new Error(`Embedding service initialization failed: ${t}`)}}async generateEmbedding(e,t={}){this.pipePromise||await this.initialize();const a=await this.pipePromise,n={...this.DEFAULT_OPTIONS,...t};try{const i=await a(e,{pooling:n.pooling,normalize:n.normalize}),s=Array.from(i.data);return s.length!==this.EMBEDDING_DIMENSION&&W.warn(`Unexpected embedding dimension: ${s.length}, expected ${this.EMBEDDING_DIMENSION}`),s}catch(i){throw W.error(`Failed to generate embedding: ${i}`),i}}async generateEmbeddings(e,t={}){const a=[];for(const n of e){const i=await this.generateEmbedding(n,t);a.push(i)}return a}getEmbeddingDimension(){return this.EMBEDDING_DIMENSION}getModelName(){return this.modelName}}const U=new ze,z={PREVIEW:500,CONTEXT:150},L={FILE_NAME_MATCH:10,FILE_PATH_MATCH:5,CONTENT_MATCH:1,FILE_NAME_EXACT:20,FILE_PATH_EXACT:10,EXACT_PHRASE:5,TERM_COVERAGE:15},Q={DEFAULT_LIMIT:5,MAX_LIMIT:20},Fe={SAMPLE_VECTOR_COUNT:5},H=["idx0","idx1","idx2","idx3","idx4"],_e={LONG:1e3};function Le(r,e){if(r.length!==e.length)throw new Error(`Vector dimensions must match: ${r.length} vs ${e.length}`);let t=0;for(let a=0;a<r.length;a++){const n=r[a]-e[a];t+=n*n}return Math.sqrt(t)}function Me(r,e,t){const a=[];if(t&&t.length>0)for(let n=0;n<r;n++)if(n<t.length)a.push({vector:t[n],idx:n});else{const i=[];for(let s=0;s<e;s++)i.push(Math.random()*2-1);a.push({vector:i,idx:n})}else for(let n=0;n<r;n++){const i=[];for(let s=0;s<e;s++)i.push(Math.random()*2-1);a.push({vector:i,idx:n})}return a}function ie(r,e){if(e.length!==H.length)throw new Error(`Sample vectors count (${e.length}) must match index field count (${H.length})`);const t={};for(let a=0;a<H.length;a++)t[H[a]]=Le(r,e[a].vector);return t}function We(r,e){if(r.length!==e.length)throw new Error(`Vector dimensions must match: ${r.length} vs ${e.length}`);let t=0,a=0,n=0;for(let s=0;s<r.length;s++)t+=r[s]*e[s],a+=r[s]*r[s],n+=e[s]*e[s];const i=Math.sqrt(a)*Math.sqrt(n);return i===0?0:t/i}const Ve=500,Ue=50,je=100;class se{constructor(e={}){this.chunkSize=e.chunkSize??Ve,this.chunkOverlap=e.chunkOverlap??Ue,this.minChunkSize=e.minChunkSize??je}chunkDocument(e,t,a){if(t.length<=this.chunkSize){const o=`${a} ${t}`;return[{id:`${e}:chunk:0`,documentId:e,chunkIndex:0,text:o,startOffset:0,endOffset:t.length}]}const n=[],i=this.chunkSize-this.chunkOverlap;let s=0,c=0;for(;s<t.length;){const o=Math.min(s+this.chunkSize,t.length),l=t.substring(s,o);if(l.trim().length<this.minChunkSize&&n.length>0)break;const d=c===0?`${a} ${l}`:l;n.push({id:`${e}:chunk:${c}`,documentId:e,chunkIndex:c,text:d,startOffset:s,endOffset:o}),s+=i,c++}return n}getChunkContext(e,t){const a=e.chunkIndex>0?t[e.chunkIndex-1]:null,n=e.chunkIndex<t.length-1?t[e.chunkIndex+1]:null;let i="";return a&&(i+=`[Previous: ${a.text.substring(Math.max(0,a.text.length-z.CONTEXT))}]

`),i+=e.text,n&&(i+=`

[Next: ${n.text.substring(0,z.CONTEXT)}]`),i}}const K=C("LangChainChunker"),Ge=500,He=75;function Be(r){return!r||r.trim().length===0?0:r.trim().split(/\s+/).filter(e=>e.length>0).length}class Xe{constructor(e={}){this.textSplitter=null,this.chunkSize=e.chunkSize??Ge,this.chunkOverlap=e.chunkOverlap??He}async getTextSplitter(){if(!this.textSplitter){const{RecursiveCharacterTextSplitter:e}=await O(async()=>{const{RecursiveCharacterTextSplitter:t}=await import("./index-i0fwJLmI.js");return{RecursiveCharacterTextSplitter:t}},__vite__mapDeps([0,1]));this.textSplitter=new e({chunkSize:this.chunkSize,chunkOverlap:this.chunkOverlap,lengthFunction:Be,separators:[`

`,`
`,". ","! ","? "," "],keepSeparator:!1})}return this.textSplitter}async chunkDocument(e,t,a){try{const i=await(await this.getTextSplitter()).splitText(t),s=[];let c=0;for(let o=0;o<i.length;o++){const l=i[o];let d;if(o===0){const f=t.indexOf(l);d=f!==-1?f:0,c=d}else{const f=s[o-1],h=Math.max(this.chunkOverlap*10,l.length),g=Math.max(0,f.endOffset-h),p=Math.min(t.length,f.endOffset+l.length),S=t.substring(g,p).indexOf(l);if(S!==-1){const F=g+S;F>=f.startOffset&&F<f.endOffset+l.length?d=F:d=f.endOffset}else d=f.endOffset;c=d}const m=Math.min(d+l.length,t.length),w=o===0?`${a} ${l}`:l;s.push({id:`${e}:chunk:${o}`,documentId:e,chunkIndex:o,text:w,startOffset:d,endOffset:m})}return this.validateNoWordSplitting(s,t,e),K.debug(`Document ${e} split into ${s.length} chunks using LangChain`),s}catch(n){throw K.warn(`LangChain chunking failed for ${e}, falling back to simple chunking: ${n}`),n}}validateNoWordSplitting(e,t,a){for(let n=0;n<e.length-1;n++){const i=e[n],s=e[n+1];if(i.endOffset<t.length&&s.startOffset>i.endOffset){const c=t.substring(i.endOffset,s.startOffset);if(c.trim().length>0&&!/^\s+$/.test(c)){const l=t[i.endOffset-1],d=t[s.startOffset];l&&d&&/[a-zA-Z0-9]/.test(l)&&/[a-zA-Z0-9]/.test(d)&&K.warn(`Potential word split detected in document ${a} between chunks ${n} and ${n+1}`)}}}}getChunkContext(e,t){const a=e.chunkIndex>0?t[e.chunkIndex-1]:null,n=e.chunkIndex<t.length-1?t[e.chunkIndex+1]:null;let i="";return a&&(i+=`[Previous: ${a.text.substring(Math.max(0,a.text.length-z.CONTEXT))}]

`),i+=e.text,n&&(i+=`

[Next: ${n.text.substring(0,z.CONTEXT)}]`),i}}const Z=C("DocumentChunker");class pe{constructor(e={}){try{this.chunker=new Xe(e),Z.debug("Using LangChain chunker")}catch(t){Z.warn(`Failed to initialize LangChain chunker, using fallback: ${t}`),this.chunker=new se(e)}}async chunkDocument(e,t,a){try{const n=this.chunker.chunkDocument(e,t,a);return await Promise.resolve(n)}catch(n){return Z.warn(`Primary chunker failed, falling back: ${n}`),new se().chunkDocument(e,t,a)}}getChunkContext(e,t){return this.chunker.getChunkContext(e,t)}}new pe;const re=C("PDFJSExtractor");class oe{canExtract(e){return e.toLowerCase()==="pdf"}async extractText(e,t={}){try{const a=await O(()=>import("./pdf-UA8D4yGl.js"),[]);a.GlobalWorkerOptions.workerSrc||(a.GlobalWorkerOptions.workerSrc=`https://unpkg.com/pdfjs-dist@${a.version}/build/pdf.worker.min.mjs`);const i=await(await e.getContents({blob:!0})).arrayBuffer(),c=await a.getDocument({data:i,useSystemFonts:!0}).promise,o=c.numPages,l=[],d=t.includePageNumbers!==!1,m=t.pageSeparator||`

`;for(let f=1;f<=o;f++){const p=(await(await c.getPage(f)).getTextContent()).items.map($=>$.str).join(" ");p.trim()&&(d?l.push(`[Page ${f}]
${p}`):l.push(p))}const w=l.join(m);if(!w||w.trim().length===0)throw new Error("PDF appears to contain no extractable text (may be image-based or scanned)");return re.debug(`Extracted ${o} pages from PDF: ${e.getName()}`),w}catch(a){throw re.warn(`Failed to extract text from PDF ${e.getName()}: ${a}`),new Error(`PDF text extraction failed: ${a}`)}}}const ce=C("LLMOCRExtractor");class le{canExtract(e){return["pdf","png","jpg","jpeg","tiff","tif"].includes(e.toLowerCase())}async extractText(e,t={}){const a=e.getName(),n=t?.fileType||a.split(".").pop()?.toLowerCase()||"pdf",s=(await Se.getProviders()).find(c=>c.ocrApiEndpoint&&c.name.toLowerCase().includes("mistral"));if(!s||!s.ocrApiEndpoint)throw new Error("Mistral OCR provider not configured. Please configure a provider with OCR endpoint in AI settings.");try{const c=await e.getContents({blob:!0}),o=await this.blobToBase64(c),l=this.getMimeType(n),d=await fetch(s.ocrApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${s.apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({model:s.model||"mistral-ocr-latest",document:{type:"document_url",document_url:`data:${l};base64,${o}`},include_image_base64:!1})});if(!d.ok){const p=await d.text().catch(()=>"Unknown error");throw new Error(`OCR request failed: HTTP ${d.status}: ${p}`)}const m=await d.json();if(!m.pages||!Array.isArray(m.pages))throw new Error("Invalid OCR response format: missing pages array");const w=t.includePageNumbers!==!1,f=t.pageSeparator||`

`,h=m.pages.map((p,$)=>{const S=p?.markdown||p?.text||"";return S.trim()?w?`[Page ${$+1}]
${S}`:S:null}).filter(p=>p!==null);if(h.length===0)throw new Error("No text content found in OCR response");const g=h.join(f);return ce.debug(`Extracted ${m.pages.length} pages from ${n} file: ${a}`),g}catch(c){throw ce.warn(`Failed to extract text using OCR from ${a}: ${c}`),new Error(`OCR text extraction failed: ${c}`)}}async blobToBase64(e){return new Promise((t,a)=>{const n=new FileReader;n.onloadend=()=>{const s=n.result.split(",")[1];t(s)},n.onerror=a,n.readAsDataURL(e)})}getMimeType(e){return{pdf:"application/pdf",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",tiff:"image/tiff",tif:"image/tiff"}[e.toLowerCase()]||"application/octet-stream"}}const j=C("DocumentExtractor");class qe{constructor(){this.extractors=[new le,new oe]}canExtract(e){return this.extractors.some(t=>t.canExtract(e))}async extractText(e,t){const a=e.getName(),n=t?.fileType||a.split(".").pop()?.toLowerCase()||"txt",i=this.extractors.filter(c=>c.canExtract(n));if(i.length===0)throw new Error(`No extractor available for file type: ${n}`);let s=null;for(const c of i)try{return j.debug(`Using ${c.constructor.name} for file type: ${n}`),await c.extractText(e,{...t,fileType:n})}catch(o){if(s=o instanceof Error?o:new Error(String(o)),j.warn(`${c.constructor.name} failed for ${a}: ${s.message}`),c instanceof le&&i.length>1){const l=i.find(d=>d instanceof oe);if(l){const d=`Mistral OCR extraction failed, falling back to PDF.js extractor for ${a}`;j.warn(d),$e(d);try{return j.debug(`Using ${l.constructor.name} as fallback for file type: ${n}`),await l.extractText(e,{...t,fileType:n})}catch(m){s=m instanceof Error?m:new Error(String(m)),j.warn(`Fallback extraction also failed for ${a}: ${s.message}`)}}}}throw s||new Error(`All extractors failed for file type: ${n}`)}}let Y=null,de=!1;async function Qe(){return Promise.all([O(()=>import("./index-D1BD3IKJ.js"),__vite__mapDeps([2,3,4,5,6,7])),O(()=>import("./index-ejdBPKOn.js"),__vite__mapDeps([8,1,4,6,5,7])),O(()=>import("./index-wo9tjmWU.js"),__vite__mapDeps([9,4,6])),O(()=>import("./index-Ci0cJADs.js"),__vite__mapDeps([10,4,3,5,6])),O(()=>import("./index-BxvueQg8.js"),__vite__mapDeps([11,4]))])}async function Je(){return Y||(Y=Qe().then(([r,e,t,a,n])=>(de||(r.addRxPlugin(t.RxDBQueryBuilderPlugin),r.addRxPlugin(a.RxDBMigrationSchemaPlugin),r.addRxPlugin(n.RxDBUpdatePlugin),de=!0),{rxdb:r,storageDexie:e}))),Y}const u=C("DocumentIndexService");class Ke{constructor(){this.sampleVectors=[],this.isInitialized=!1,this.DEFAULT_MAX_FILE_SIZE=5*1024*1024,this.chunker=new pe,this.documentExtractor=new qe,this.DEFAULT_INDEXABLE_TYPES=["md","txt","ts","tsx","js","jsx","json","geojson","kml","gpx","py","html","css","sql","xml","yaml","yml","pdf"]}async initialize(){if(!this.isInitialized){u.info("Initializing document index service with RxDB...");try{const{rxdb:e,storageDexie:t}=await Je();this.db=await e.createRxDatabase({name:"document-index-db",storage:t.getRxStorageDexie(),ignoreDuplicate:!0});const i={documents:{schema:{version:0,primaryKey:"id",type:"object",properties:{id:{type:"string",maxLength:500},workspacePath:{type:"string"},filePath:{type:"string"},fileName:{type:"string"},fileType:{type:"string"},content:{type:"string"},contentHash:{type:"string"},metadata:{type:"object",properties:{size:{type:"number"},lastModified:{type:"number"},language:{type:"string"},tags:{type:"array",items:{type:"string"}}}},indexedAt:{type:"number"},updatedAt:{type:"number"}},required:["id","workspacePath","filePath","content","contentHash"],indexes:["workspacePath","filePath","fileType"]}},vectors:{schema:{version:1,primaryKey:"id",type:"object",properties:{id:{type:"string",maxLength:500},documentId:{type:"string",maxLength:500},embedding:{type:"array",items:{type:"number"}},idx0:{type:"number"},idx1:{type:"number"},idx2:{type:"number"},idx3:{type:"number"},idx4:{type:"number"},chunkIndex:{type:"number"},chunkStartOffset:{type:"number"},chunkEndOffset:{type:"number"}},required:["id","documentId","embedding","idx0","idx1","idx2","idx3","idx4"],indexes:["documentId","chunkIndex","idx0","idx1","idx2","idx3","idx4"]}}};try{await this.db.addCollections(i)}catch(o){if(o?.code==="DB8"||o?.message?.includes("already exists"))u.debug("Collections already exist, using existing collections");else throw o}this.documentsCollection=this.db.documents,this.vectorsCollection=this.db.vectors,await this.initializeSampleVectors(),await this.handleSchemaMigration(),this.isInitialized=!0;const s=await this.documentsCollection.count().exec(),c=await this.vectorsCollection.count().exec();u.info(`Document index service initialized with ${s} documents and ${c} embeddings`),ae(we,o=>{o&&this.handleWorkspaceChange(o).catch(l=>{u.error(`Failed to handle workspace connection: ${l}`)})}),ae(xe,o=>{o&&this.handleWorkspaceChange(o).catch(l=>{u.error(`Failed to handle workspace change: ${l}`)})}),u.info("Document index service initialized")}catch(e){throw u.error(`Failed to initialize document index service: ${e}`),e}}}ensureInitialized(){if(!this.isInitialized||!this.documentsCollection||!this.vectorsCollection)throw new Error("Document index service not initialized. Call initialize() first.")}async initializeSampleVectors(){if(this.sampleVectors.length>0)return;const e=await this.vectorsCollection.find().limit(1e3).exec(),t=e.map(a=>a.embedding);this.sampleVectors=Me(Fe.SAMPLE_VECTOR_COUNT,U.getEmbeddingDimension(),t.length>0?t:void 0),u.info(`Sample vectors initialized for index range method: ${this.sampleVectors.length} vectors, ${e.length} existing embeddings`)}generateDocumentId(e,t){return`${e}:${t}`}async computeContentHash(e){const a=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",a);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}isIndexableFile(e,t){const a=e.getName().toLowerCase(),n=t?.fileTypes||this.DEFAULT_INDEXABLE_TYPES,i=a.split(".").pop();if(!i||!n.includes(i))return!1;if(t?.excludePatterns){for(const s of t.excludePatterns)if(a.includes(s)||e.getWorkspacePath().includes(s))return!1}return!0}detectLanguage(e){const t=e.split(".").pop()?.toLowerCase();return{ts:"typescript",tsx:"typescript",js:"javascript",jsx:"javascript",py:"python",md:"markdown",json:"json",geojson:"geojson",kml:"xml",gpx:"xml",html:"html",css:"css",sql:"sql",xml:"xml",yaml:"yaml",yml:"yaml",pdf:"pdf"}[t||""]||"text"}async indexDocument(e,t={}){this.isInitialized||await this.initialize(),this.ensureInitialized();const n=e.getWorkspace().getName(),i=e.getWorkspacePath(),s=e.getName(),c=this.generateDocumentId(n,i);if(!this.isIndexableFile(e,t))throw new Error(`File type not indexable: ${s}`);try{let o;const l=s.split(".").pop()?.toLowerCase()||"txt";if(this.documentExtractor.canExtract(l))o=await this.documentExtractor.extractText(e,{fileType:l});else{const I=await e.getContents({contentType:ye.TEXT});if(typeof I!="string")throw new Error(`File content is not text: ${s}`);o=I}if(!o||o.trim().length===0)throw new Error(`File appears to be empty or text extraction failed: ${s}`);const d=t.maxFileSize||this.DEFAULT_MAX_FILE_SIZE;if(o.length>d)throw new Error(`File too large to index: ${s} (${o.length} bytes)`);const m=await this.computeContentHash(o),w=Date.now(),f=await this.documentsCollection.findOne(c).exec(),h=f?f.toJSON():null,g=h?.metadata.tags||[],p=t.tags||[],$=[...new Set([...g,...p])],S=$.length!==g.length||p.some(I=>!g.includes(I));if(h&&h.contentHash===m&&!S)return u.debug(`Document already indexed and unchanged: ${c}`),h;const F=this.detectLanguage(s);let ne=w;try{const I=e.getHandle?.();I&&(ne=(await I.getFile()).lastModified)}catch(I){u.debug(`Could not get file modification time: ${I}`)}const ge=!h||h.contentHash!==m,J={id:c,workspacePath:n,filePath:i,fileName:s,fileType:l,content:t.includeContent!==!1?o:"",contentHash:m,metadata:{size:o.length,lastModified:ne,language:F,tags:$},indexedAt:h?.indexedAt||w,updatedAt:w};return await this.documentsCollection.upsert(J),ge?await this.generateAndStoreEmbedding(J):u.debug(`Document content unchanged, skipping embedding regeneration: ${c}`),u.debug(`Indexed document: ${c}`),J}catch(o){throw u.error(`Failed to index document ${c}: ${o}`),o}}async getDocument(e){this.isInitialized||await this.initialize(),this.ensureInitialized();const t=await this.documentsCollection.findOne(e).exec();return t?t.toJSON():null}async getDocumentByPath(e,t){const a=this.generateDocumentId(e,t);return this.getDocument(a)}async listDocuments(e){this.isInitialized||await this.initialize(),this.ensureInitialized();let t=this.documentsCollection.find();return e&&(t=t.where("workspacePath").eq(e)),(await t.exec()).map(n=>n.toJSON())}async deleteDocument(e){this.isInitialized||await this.initialize(),this.ensureInitialized();const t=await this.documentsCollection.findOne(e).exec();if(t){await t.remove();const a=await this.vectorsCollection.find().where("documentId").eq(e).exec();for(const n of a)await n.remove();return u.debug(`Deleted document ${e} and ${a.length} associated embeddings`),!0}return!1}async deleteDocumentByPath(e,t){const a=this.generateDocumentId(e,t);return this.deleteDocument(a)}async handleSchemaMigration(){if(!(!this.vectorsCollection||!this.documentsCollection))try{const t=(await this.vectorsCollection.find().exec()).filter(n=>{const i=n.toJSON();return i.chunkIndex===void 0&&i.chunkStartOffset===void 0&&i.chunkEndOffset===void 0});if(t.length===0){u.debug("No vectors need migration - all have chunk information");return}u.info(`Detected ${t.length} vectors without chunk information. Invalidating and reindexing...`);const a=new Set;for(const n of t){const i=n.toJSON();a.add(i.documentId),await n.remove()}u.info(`Removed ${t.length} old vectors. Reindexing ${a.size} documents...`);for(const n of a){const i=await this.documentsCollection.findOne(n).exec();if(i){const s=i.toJSON();u.debug(`Reindexing document: ${s.fileName}`),await this.generateAndStoreEmbedding(s)}}u.info(`Schema migration completed. Reindexed ${a.size} documents.`)}catch(e){throw u.error(`Error during schema migration: ${e}`),e}}async deleteWorkspace(e){this.isInitialized||await this.initialize(),this.ensureInitialized();const t=await this.documentsCollection.find().where("workspacePath").eq(e).exec(),a=t.length;for(const n of t)await n.remove();return a>0&&u.info(`Deleted ${a} documents for workspace: ${e}`),a}async updateDocumentMetadata(e,t){this.isInitialized||await this.initialize(),this.ensureInitialized();const a=await this.documentsCollection.findOne(e).exec();if(!a)return null;const n=a.toJSON(),i={...n,metadata:{...n.metadata,...t.metadata},updatedAt:Date.now()};return await a.update({$set:i}),u.debug(`Updated document metadata: ${e}`),i}async indexWorkspace(e,t={}){this.isInitialized||await this.initialize();const a=e.getName();u.info(`Starting workspace indexing: ${a}`);const n=await this.collectFiles(e,t);u.info(`Found ${n.length} files to index`);let i=0,s=0;const c=[];for(const o of n)try{await this.indexDocument(o,t),i++}catch(l){s++;const d=`Failed to index ${o.getName()}: ${l}`;c.push(d),u.warn(d)}return u.info(`Workspace indexing complete: ${i} indexed, ${s} failed`),{indexed:i,failed:s,errors:c}}async collectFiles(e,t,a=[]){try{const n=await e.listChildren(!1);for(const i of n)i instanceof E?this.isIndexableFile(i,t)&&a.push(i):i instanceof ve&&await this.collectFiles(i,t,a)}catch(n){u.warn(`Failed to collect files from ${e.getName()}: ${n}`)}return a}async reindexDocument(e,t={}){const n=e.getWorkspace().getName(),i=e.getWorkspacePath(),s=this.generateDocumentId(n,i),o=(await this.getDocument(s))?.metadata.tags||[],l=t.tags||[],d=[...new Set([...o,...l])];return await this.deleteDocument(s),this.indexDocument(e,{...t,tags:d})}async reindexAllDocuments(e={}){this.isInitialized||await this.initialize(),this.ensureInitialized();const t=await this.listDocuments();let a=0,n=0;for(const i of t)try{const s=await V.getWorkspace();if(!s||s.getName()!==i.workspacePath){u.warn(`Workspace not found: ${i.workspacePath}`),n++;continue}const c=await s.getResource(i.filePath);if(!c||!(c instanceof E)){u.warn(`File not found: ${i.filePath}`),n++;continue}await this.reindexDocument(c,e),a++}catch(s){u.error(`Failed to reindex document ${i.id}: ${s}`),n++}return{total:t.length,succeeded:a,failed:n}}async getStats(){this.isInitialized||await this.initialize(),this.ensureInitialized();const e=await this.documentsCollection.count().exec(),t=await this.documentsCollection.find().exec(),a={};for(const n of t){const s=n.toJSON().workspacePath;a[s]=(a[s]||0)+1}return{totalDocuments:e,byWorkspace:a}}async handleWorkspaceChange(e){u.debug("Workspace changed, checking for document updates...")}async generateAndStoreEmbedding(e){try{if(!this.vectorsCollection){u.warn(`Vectors collection not initialized, cannot generate embedding for ${e.id}`);return}if(await U.initialize(),this.sampleVectors.length===0&&await this.initializeSampleVectors(),this.sampleVectors.length===0){u.warn(`Sample vectors not initialized, cannot generate embedding for ${e.id}`);return}const t=await this.chunker.chunkDocument(e.id,e.content,e.fileName);u.debug(`Document ${e.id} split into ${t.length} chunks`);for(const a of t){const n=await U.generateEmbedding(a.text),i=ie(n,this.sampleVectors),s={id:a.id,documentId:e.id,chunkIndex:a.chunkIndex,chunkStartOffset:a.startOffset,chunkEndOffset:a.endOffset,embedding:n,...i};await this.vectorsCollection.upsert(s)}u.debug(`Generated and stored ${t.length} embeddings for document: ${e.id}`)}catch(t){u.warn(`Failed to generate embedding for document ${e.id}: ${t}`)}}async searchSimilar(e,t={}){this.isInitialized||await this.initialize(),this.ensureInitialized();const a=t.limit||10,n=t.indexDistance||2,i=t.docsPerIndexSide||100;if(!this.vectorsCollection||this.sampleVectors.length===0)throw u.warn("Vector search not available: vectors collection or sample vectors not initialized"),new Error("Vector search not available");const s=await this.vectorsCollection.find().exec();u.debug(`Starting vector search with indexDistance=${n}, limit=${a}, sampleVectors=${this.sampleVectors.length}, totalIndexedVectors=${s.length}`);try{await U.initialize()}catch(h){throw u.error(`Failed to initialize embedding service for vector search: ${h}`),new Error(`Embedding service initialization failed: ${h}`)}let c;try{c=await U.generateEmbedding(e)}catch(h){throw u.error(`Failed to generate query embedding: ${h}`),new Error(`Query embedding generation failed: ${h}`)}if(this.sampleVectors.length===0)throw u.warn("Sample vectors not initialized, cannot perform vector search"),new Error("Sample vectors not initialized");const o=ie(c,this.sampleVectors);u.debug(`Query index values: ${JSON.stringify(o)}`);const l=new Set;try{for(const h of H){const g=o[h],p=g-n,$=g+n;u.debug(`Querying index ${h}: range [${p}, ${$}]`);const S=await this.vectorsCollection.find().where(h).gte(p).lte($).limit(i).exec();u.debug(`Found ${S.length} candidates in index ${h}`);for(const F of S)l.add(F.documentId)}}catch(h){throw u.error(`Failed to query vector index: ${h}`),new Error(`Vector index query failed: ${h}`)}u.debug(`Total unique candidate IDs: ${l.size} (out of ${s.length} indexed vectors)`);const d=[];try{for(const h of l){const g=await this.vectorsCollection.find().where("documentId").eq(h).exec();for(const p of g){const $=p.toJSON();$&&$.embedding?d.push($):u.warn(`Invalid vector data for document ${h}`)}}}catch(h){throw u.error(`Failed to fetch candidate vectors: ${h}`),new Error(`Failed to fetch candidate vectors: ${h}`)}u.debug(`Fetched ${d.length} candidate vectors`);const m=[];for(const h of d){const p=(We(c,h.embedding)+1)/2;m.push({documentId:h.documentId,similarity:p,chunkIndex:h.chunkIndex,chunkStartOffset:h.chunkStartOffset,chunkEndOffset:h.chunkEndOffset})}m.sort((h,g)=>g.similarity-h.similarity),u.debug(`Computed similarities for ${m.length} candidates, top similarity: ${m[0]?.similarity||"N/A"}`);const w=m.slice(0,a),f=[];for(const h of w){const g=await this.documentsCollection.findOne(h.documentId).exec();if(g){const p=g.toJSON();if(t.workspacePath&&p.workspacePath!==t.workspacePath||t.fileType&&p.fileType!==t.fileType)continue;f.push({document:p,similarity:h.similarity,chunkIndex:h.chunkIndex,chunkStartOffset:h.chunkStartOffset,chunkEndOffset:h.chunkEndOffset})}}return f}async indexFileInContext(e,t,a={}){this.isInitialized||await this.initialize(),this.ensureInitialized();const i=e.getWorkspace().getName(),s=e.getWorkspacePath(),c=this.generateDocumentId(i,s),o=await this.documentsCollection.findOne(c).exec(),l=o?o.toJSON():null,d=t.tags||[],m=[...a.tags||[],...d];if(l){const w=l.metadata.tags||[],f=[...new Set([...w,...m])];return f.length!==w.length||m.some(g=>!w.includes(g))?(await this.updateDocumentMetadata(l.id,{metadata:{...l.metadata,tags:f}}),u.debug(`Added tags to existing document: ${c}`),{...l,metadata:{...l.metadata,tags:f}}):(u.debug(`Document already has all tags: ${c}`),l)}return this.indexDocument(e,{...a,tags:m})}async indexFilesInContext(e,t,a={}){let n=0,i=0;const s=t.tags||[];for(const c of e)try{await this.indexDocument(c,{...a,tags:[...a.tags||[],...s]}),n++,u.debug(`Indexed file with context tags: ${c.getWorkspacePath()}`)}catch(o){u.error(`Failed to index file ${c.getWorkspacePath()}: ${o}`),i++}return{succeeded:n,failed:i}}async reindexFileInContext(e,t,a={}){const n=t.tags||[];return this.reindexDocument(e,{...a,tags:[...a.tags||[],...n]})}async removeFileFromContext(e,t){this.isInitialized||await this.initialize(),this.ensureInitialized();const a=await this.getDocumentByPath(e.getWorkspace().getName(),e.getWorkspacePath());if(a&&t.tags&&t.tags.length>0){const n=new Set(t.tags),i=(a.metadata.tags||[]).filter(s=>!n.has(s));i.length!==a.metadata.tags?.length&&await this.updateDocumentMetadata(a.id,{metadata:{...a.metadata,tags:i}})}}async clearContext(e){if(!e.tags||e.tags.length===0)return;const t=new Set(e.tags),a=await this.listDocuments();for(const n of a)if(n.metadata.tags?.some(s=>t.has(s))){const s=n.metadata.tags.filter(c=>!t.has(c));try{const c=await V.getWorkspace();if(c&&c.getName()===n.workspacePath){const o=await c.getResource(n.filePath);o instanceof E&&await this.indexDocument(o,{tags:s})}}catch(c){u.warn(`Failed to clear context tags from ${n.filePath}: ${c}`)}}}async getFilePathsInContext(e){if(!e.tags||e.tags.length===0)return[];const t=new Set(e.tags);return(await this.listDocuments()).filter(n=>n.metadata.tags?.some(i=>t.has(i))).map(n=>n.filePath)}}const v=new Ke;Ee.put("documentIndexService",v);const he=C("WorkspaceUtils");async function X(r){const e=await V.getWorkspace();if(!e)return he.warn("No workspace connected"),null;const t=r||e.getName();return t?{workspace:e,workspacePath:t}:(he.warn("No workspace path available"),null)}const Ze=2;function B(r,e={}){if(!r||!r.trim())return[];const t=e.minTermLength??Ze;return(e.caseSensitive?r:r.toLowerCase()).split(/\s+/).filter(n=>n.length>=t)}function fe(r){return r.toLowerCase().trim()}const Ye=10,et=400,tt=400;class te{constructor(e={}){this.maxSnippets=e.maxSnippets??Ye,this.snippetLength=e.snippetLength??et,this.minGap=e.minGap??tt}extractSnippets(e,t,a){const n=a??this.maxSnippets;if(t.length===0)return[];const i=e.toLowerCase(),s=[],c=new Set;for(const o of t){let l=i.indexOf(o);for(;l!==-1;){const d=Math.max(0,l-this.snippetLength/2),m=Math.min(e.length,l+o.length+this.snippetLength/2),w=e.substring(d,m).trim(),f=`${d}-${m}`;if(w&&!c.has(f)){c.add(f);const h=this.calculateSnippetScore(w,t);s.push({snippet:w,score:h,start:d})}l=i.indexOf(o,l+1)}}if(s.length===0&&t.length>0){const o=t[0],l=i.indexOf(o);if(l!==-1){const d=Math.max(0,l-this.snippetLength),m=Math.min(e.length,l+o.length+this.snippetLength),w=e.substring(d,m).trim();w&&s.push({snippet:w,score:10,start:d})}}return s.sort((o,l)=>l.score!==o.score?l.score-o.score:o.start-l.start),this.selectNonOverlappingSnippets(s,n)}calculateSnippetScore(e,t){const a=e.toLowerCase();let n=0;for(const o of t){const l=(a.match(new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi"))||[]).length;n+=l*10}const i=t.join(" ");a.includes(i)&&(n+=50);const s=t.filter(o=>a.includes(o)).length;n+=s*20;const c=s/t.length;return n+=c*30,n}selectNonOverlappingSnippets(e,t){const a=[],n=[];for(const i of e){if(a.length>=t)break;const s=i.start,c=i.start+i.snippet.length;n.some(l=>!(c<l.start-this.minGap||s>l.end+this.minGap))||(a.push(i.snippet),n.push({start:s,end:c}))}return a}extractSimpleSnippet(e,t=500){return e.substring(0,t)+(e.length>t?"...":"")}extractContextSnippets(e,t,a=150){const n=t.toLowerCase(),i=e.toLowerCase(),s=[];let c=i.indexOf(n);for(;c!==-1;)s.push(c),c=i.indexOf(n,c+1);if(s.length===0)return[];const o=[];for(const l of s){const d=Math.max(0,l-a),m=Math.min(e.length,l+t.length+a);o.push({start:d,end:m,matchIndex:l})}return o}}new te;class nt{calculateRelevance(e,t){const a=fe(t),n=B(t);let i=0;const s=e.fileName.toLowerCase(),c=e.filePath.toLowerCase(),o=e.content.toLowerCase(),l=n.filter(p=>s.includes(p)).length,d=n.filter(p=>c.includes(p)).length,m=n.filter(p=>o.includes(p)).length;i+=l*L.FILE_NAME_MATCH,i+=d*L.FILE_PATH_MATCH,i+=m*L.CONTENT_MATCH,s.includes(a)&&(i+=L.FILE_NAME_EXACT),c.includes(a)&&(i+=L.FILE_PATH_EXACT);const w=(o.match(new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"))||[]).length;i+=w*L.EXACT_PHRASE;const f=n.length,h=n.filter(p=>o.includes(p)).length,g=f>0?h/f:0;return i+=g*L.TERM_COVERAGE,i}calculateFileNameRelevance(e,t){const a=e.fileName.toLowerCase(),n=t.toLowerCase();return a===n?100:a.includes(n)?80:0}}const ue=new nt;class at{constructor(e){this.snippetExtractor=e}formatRAGContext(e){return e.length===0?"":`Here are relevant documents from the workspace that might help answer the question:

${e.map((a,n)=>{const i=a.document,s=a.matchedSnippets.map((c,o)=>`  [Snippet ${o+1}]
  ${c}`).join(`

`);return`[Document ${n+1}: ${i.fileName} (${i.filePath})]
Relevance: ${a.relevance.toFixed(2)}
${s.length>0?`Relevant snippets:
${s}`:`Content preview: ${this.snippetExtractor.extractSimpleSnippet(i.content,z.PREVIEW)}`}
---`}).join(`

`)}

Use the information from these documents to provide a helpful answer. Pay special attention to numbers, percentages, dates, and specific values mentioned in the snippets. If the documents don't contain relevant information, you can still answer based on your general knowledge.`}formatSearchResults(e){return e.map(t=>({file:t.document.fileName,path:t.document.filePath,relevance:t.relevance.toFixed(2),language:t.document.metadata.language,size:t.document.metadata.size,snippets:t.matchedSnippets,preview:this.snippetExtractor.extractSimpleSnippet(t.document.content,200)+"..."}))}formatCommandResults(e){return e.map(t=>({file:t.document.fileName,path:t.document.filePath,relevance:t.relevance,snippets:t.matchedSnippets}))}}const N=C("RAGService"),T=new te,it=new at(T);class st{async searchDocuments(e,t={}){const a=Math.min(t.limit||Q.DEFAULT_LIMIT,Q.MAX_LIMIT),n=await X(t.workspacePath);if(!n)return N.warn("No workspace connected, cannot search documents"),[];const{workspacePath:i}=n;if(t.filePath){const s=await v.getDocumentByPath(i,t.filePath);if(s){const c=B(e),o=c.length>0?T.extractSnippets(s.content,c,3):[T.extractSimpleSnippet(s.content,z.PREVIEW)];return[{document:s,relevance:100,matchedSnippets:o}]}return N.warn(`Document not found: ${t.filePath}`),[]}if(t.fileName){const s=await v.listDocuments(i),c=t.fileName.toLowerCase(),o=s.filter(l=>{const d=l.fileName.toLowerCase();return d===c||d.includes(c)});if(o.length>0){const l=[],d=B(e);for(const m of o.slice(0,a)){const w=d.length>0?T.extractSnippets(m.content,d,3):[T.extractSimpleSnippet(m.content,z.PREVIEW)];l.push({document:m,relevance:ue.calculateFileNameRelevance(m,t.fileName),matchedSnippets:w})}return l}return N.warn(`No documents found with name: ${t.fileName}`),[]}if(!e||!e.trim())return N.warn("No query provided and no filePath/fileName specified"),[];try{const s=await v.searchSimilar(e,{limit:a*2,workspacePath:i,fileType:t.fileType}),c=[];for(const{document:o,similarity:l,chunkStartOffset:d,chunkEndOffset:m}of s){if(!this.matchesContextScope(o,t.documentSearchScope))continue;const w=l*100;if(t.minRelevance&&w<t.minRelevance)continue;const f=fe(e),h=B(e);let g;if(d!==void 0&&m!==void 0){const p=o.content.substring(Math.max(0,d),Math.min(o.content.length,m));p.trim().length>0?g=[p.trim()]:g=T.extractSnippets(o.content,h,15)}else g=T.extractSnippets(o.content,h,15);if(g.length===0&&f.length>0)if(d!==void 0&&m!==void 0){const p=o.content.substring(Math.max(0,d),Math.min(o.content.length,m));p.trim().length>0?g=[p.trim()]:g=T.extractSnippets(o.content,[f],10)}else g=T.extractSnippets(o.content,[f],10);if(c.push({document:o,relevance:w,matchedSnippets:g}),c.length>=a)break}return c.length===0?(N.debug("Vector search returned no results, falling back to text search"),this.fallbackTextSearch(e,t)):c}catch(s){return N.warn(`Vector search failed, falling back to text search: ${s}`),N.debug(`Vector search error details: ${s}`),this.fallbackTextSearch(e,t)}}async fallbackTextSearch(e,t={}){const a=Math.min(t.limit||Q.DEFAULT_LIMIT,Q.MAX_LIMIT),n=await X(t.workspacePath);if(!n)return N.warn("No workspace connected, cannot perform text search"),[];const{workspacePath:i}=n,s=await v.listDocuments(i),c=B(e),o=[];for(const l of s){if(t.fileType&&l.fileType!==t.fileType||!this.matchesContextScope(l,t.documentSearchScope))continue;const d=ue.calculateRelevance(l,e);if(t.minRelevance&&d<t.minRelevance)continue;const m=T.extractSnippets(l.content,c,3);o.push({document:l,relevance:d,matchedSnippets:m})}return o.sort((l,d)=>d.relevance-l.relevance),o.slice(0,a)}formatRAGContext(e){return it.formatRAGContext(e)}matchesContextScope(e,t){if(!t)return!0;if(t.includePaths&&t.includePaths.length>0&&!t.includePaths.some(n=>n.includes("*")||n.includes("?")?new RegExp("^"+n.replace(/\*/g,".*").replace(/\?/g,".")+"$").test(e.filePath):e.filePath.startsWith(n)||e.filePath===n)||t.excludePaths&&t.excludePaths.length>0&&t.excludePaths.some(n=>n.includes("*")||n.includes("?")?new RegExp("^"+n.replace(/\*/g,".*").replace(/\?/g,".")+"$").test(e.filePath):e.filePath.startsWith(n)||e.filePath===n)||t.pathPattern&&!(t.pathPattern instanceof RegExp?t.pathPattern:new RegExp(t.pathPattern)).test(e.filePath))return!1;if(t.tags&&t.tags.length>0){const a=e.metadata.tags||[];if(!t.tags.every(i=>a.includes(i)))return!1}return!(t.metadataFilter&&!t.metadataFilter(e))}}const rt=new st;async function ot(r,e={}){const t=await X(e.workspacePath);return t?rt.searchDocuments(r,{...e,workspacePath:t.workspacePath}):(N.warn("No workspace connected, cannot search documents"),[])}var ct=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,D=(r,e,t,a)=>{for(var n=a>1?void 0:a?lt(e,t):e,i=r.length-1,s;i>=0;i--)(s=r[i])&&(n=(a?s(e,t,n):s(n))||n);return a&&n&&ct(e,t,n),n};const G=C("RAGSystemManager"),me=new te;let k=class extends Pe{constructor(){super(...arguments),this.documents=[],this.stats={totalDocuments:0,byWorkspace:{}},this.loading=!1,this.selectedDocument=null,this.searchQuery="",this.filterWorkspace=null,this.filterByActiveWorkspace=!0,this.filteredDocuments=[],this.searchResults=new Map,this.reindexing=!1,this.treeRef=Ae(),this.searchInputValue=""}async doInitUI(){try{await v.initialize(),await Promise.all([this.loadDocuments(),this.loadStats()])}catch(r){G.error(`Failed to initialize document index manager: ${r}`),y(`Failed to initialize: ${r}`)}}async loadDocuments(){this.loading=!0,this.requestUpdate();try{let r;this.filterByActiveWorkspace&&(r=(await X())?.workspacePath),this.documents=await v.listDocuments(r),await this.updateFilteredDocuments()}catch(r){G.error(`Failed to load documents: ${r}`),y(`Failed to load documents: ${r}`)}finally{this.loading=!1}}async updateFilteredDocuments(){this.filteredDocuments=await this.getFilteredDocuments(),this.requestUpdate()}async loadStats(){try{this.stats=await v.getStats(),this.requestUpdate()}catch(r){G.error(`Failed to load stats: ${r}`)}}handleTreeSelection(r){let e=r.detail?.selection||[];if(e.length===0&&this.treeRef.value&&(e=this.treeRef.value.selectedItems||[]),e.length>0){const t=e[0];t?.model?this.selectedDocument=t.model:this.selectedDocument=null}else this.selectedDocument=null}async getFilteredDocuments(){if(!this.documents||this.documents.length===0)return[];if(this.searchQuery.trim())try{const e=await ot(this.searchQuery,{limit:50,workspacePath:this.filterWorkspace||void 0});this.searchResults.clear();const t=new Map,a=new Map;for(const i of e){const s=i.document.id;t.set(s,i.document);const c=a.get(s);if(!c)a.set(s,{document:i.document,relevance:i.relevance,matchedSnippets:[...i.matchedSnippets]});else{i.relevance>c.relevance&&(c.relevance=i.relevance);const o=new Set(c.matchedSnippets);for(const l of i.matchedSnippets)o.has(l)||(c.matchedSnippets.push(l),o.add(l))}}for(const[i,s]of a)this.searchResults.set(i,s);const n=Array.from(t.values());return this.filterWorkspace?n.filter(i=>i.workspacePath===this.filterWorkspace):n}catch(e){return G.debug(`RAG search failed in document manager: ${e}`),this.searchResults.clear(),[]}else this.searchResults.clear();let r=[...this.documents];return this.filterWorkspace&&(r=r.filter(e=>e.workspacePath===this.filterWorkspace)),r}highlightMatches(r,e){if(!e||!e.trim())return x`${r}`;const t=e.toLowerCase(),a=r.toLowerCase(),n=[];let i=0,s=a.indexOf(t,i);for(;s!==-1;)s>i&&n.push(r.substring(i,s)),n.push(x`<mark class="search-match">${r.substring(s,s+e.length)}</mark>`),i=s+e.length,s=a.indexOf(t,i);return i<r.length&&n.push(r.substring(i)),x`${n}`}getContentPreview(r){const e=this.searchResults.get(r.id);if(e&&e.matchedSnippets.length>0)return x`
                <table class="snippets-table">
                    <thead>
                        <tr>
                            <th class="snippet-number-col">#</th>
                            <th class="snippet-content-col">Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${e.matchedSnippets.map((a,n)=>x`
                            <tr>
                                <td class="snippet-number">${n+1}</td>
                                <td class="snippet-content">${this.highlightMatches(a,this.searchQuery)}</td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            `;if(this.searchQuery&&this.searchQuery.trim()){const a=me.extractContextSnippets(r.content,this.searchQuery,z.CONTEXT);if(a.length>0)return x`
                    <table class="snippets-table">
                        <thead>
                            <tr>
                                <th class="snippet-number-col">#</th>
                                <th class="snippet-content-col">Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${a.map((n,i)=>x`
                                <tr>
                                    <td class="snippet-number">${i+1}</td>
                                    <td class="snippet-content">${this.highlightMatches(r.content.substring(n.start,n.end),this.searchQuery)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                `}const t=me.extractSimpleSnippet(r.content,_e.LONG);return x`
            <div class="snippet-preview">${t}</div>
        `}async deleteDocument(r){try{await v.deleteDocument(r.id),b(`Deleted: ${r.fileName}`),await this.loadDocuments(),await this.loadStats(),this.selectedDocument?.id===r.id&&(this.selectedDocument=null)}catch(e){y(`Failed to delete document: ${e}`)}}async reindexDocument(r){try{const e=await X();if(!e){y("No workspace connected");return}const t=await e.workspace.getResource(r.filePath);if(!t){y(`File not found: ${r.filePath}`);return}if(!(t instanceof E)){y(`Resource is not a file: ${r.filePath}`);return}const a=t;await A.runAsync("Reindexing document",async n=>{n.message=`Reindexing ${r.fileName}...`,await v.reindexDocument(a),n.progress=100}),b(`Reindexed: ${r.fileName}`),await this.loadDocuments(),this.selectedDocument?.id===r.id&&(this.selectedDocument=await v.getDocument(r.id))}catch(e){y(`Failed to reindex document: ${e}`)}}async reindexAllDocuments(){if(this.reindexing)return;const r=await v.getStats();if(r.totalDocuments===0){b("No documents to reindex");return}this.reindexing=!0,this.requestUpdate();try{const e=await A.runAsync("Reindexing all documents",async t=>{t.message="Starting reindexing...";const a=r.totalDocuments,n=await v.reindexAllDocuments(),i=n.succeeded+n.failed;return t.progress=a>0?i/a*100:100,t.message=`Reindexed ${n.succeeded}/${a} documents${n.failed>0?` (${n.failed} failed)`:""}`,n});await this.loadDocuments(),await this.loadStats(),b(`Reindexing completed: ${e.succeeded} succeeded, ${e.failed} failed`)}catch(e){G.error(`Failed to reindex all documents: ${e}`),y(`Failed to reindex all documents: ${e}`)}finally{this.reindexing=!1,this.requestUpdate()}}formatFileSize(r){return r<1024?`${r} B`:r<1024*1024?`${(r/1024).toFixed(1)} KB`:`${(r/(1024*1024)).toFixed(1)} MB`}formatDate(r){return new Date(r).toLocaleString()}getFileIcon(r){return ee.getFileIcon(r)}renderToolbar(){const r=Object.keys(this.stats?.byWorkspace||{});return x`
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
            
            ${r.length>1?x`
                <wa-select 
                    .value=${this.filterWorkspace||""}
                    @change=${async e=>{this.filterWorkspace=e.target.value||null,await this.updateFilteredDocuments()}}
                    size="small"
                    style="width: 200px;">
                    <wa-option value="">All Workspaces</wa-option>
                    ${r.map(e=>x`
                        <wa-option value="${e}">${e} (${this.stats.byWorkspace[e]})</wa-option>
                    `)}
                </wa-select>
            `:q}
            
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
        `}render(){this.stats||(this.stats={totalDocuments:0,byWorkspace:{}});const r=this.filteredDocuments,e=Object.keys(this.stats.byWorkspace||{});return x`
            <div class="rag-system-manager">
                <div class="header">
                    <div class="header-content">
                        <div class="stats">
                            <span>Total: ${this.stats.totalDocuments} documents</span>
                            ${e.length>0?x`
                                <span>Workspaces: ${e.length}</span>
                            `:q}
                        </div>
                    </div>
                </div>

                <wa-split-panel position="40" style="height: 100%;">
                    <div class="document-list" slot="start">
                        ${this.loading?x`
                            <div class="loading">
                                <wa-spinner></wa-spinner>
                                <span>Loading documents...</span>
                            </div>
                        `:r.length===0?x`
                            <div class="empty">
                                <wa-icon name="inbox" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                                <p>${this.searchQuery||this.filterWorkspace?"No documents match your filters":"No documents indexed yet"}</p>
                            </div>
                        `:x`
                            <wa-tree 
                                ${Re(this.treeRef)}
                                selection="leaf"
                                style="--indent-guide-width: 1px;"
                                @wa-selection-change=${t=>{this.handleTreeSelection(t)}}>
                                ${r.map(t=>x`
                                    <wa-tree-item 
                                        .model=${t}
                                        ?selected=${this.selectedDocument?.id===t.id}>
                                        <wa-icon name="${this.getFileIcon(t.fileType)}"></wa-icon>
                                            <div class="tree-item-info">
                                                <strong class="tree-item-path">${t.filePath}</strong>
                                                <div class="tree-item-meta">
                                                    <small class="meta-size">${this.formatFileSize(t.metadata.size)}</small>
                                                    <small class="meta-date">${this.formatDate(t.indexedAt)}</small>
                                                </div>
                                            </div>
                                            <div class="tree-item-actions" @click=${a=>a.stopPropagation()}>
                                                <wa-button
                                                    variant="neutral"
                                                    appearance="plain"
                                                    size="small"
                                                    title="Reindex"
                                                    @click=${()=>this.reindexDocument(t)}>
                                                    <wa-icon name="arrow-rotate-right"></wa-icon>
                                                </wa-button>
                                                <wa-button
                                                    variant="danger"
                                                    appearance="plain"
                                                    size="small"
                                                    title="Delete"
                                                    @click=${()=>this.deleteDocument(t)}>
                                                    <wa-icon name="trash"></wa-icon>
                                                </wa-button>
                                            </div>
                                    </wa-tree-item>
                                `)}
                            </wa-tree>
                        `}
                    </div>

                    <div slot="end">
                        ${this.selectedDocument?x`
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
                                    
                                    ${this.selectedDocument.metadata.tags&&this.selectedDocument.metadata.tags.length>0?x`
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
                                    `:q}
                                
                                    <div class="detail-section">
                                        <label>Content Preview${this.searchQuery?x` <span class="search-hint">(showing matches for "${this.searchQuery}")</span>`:q}</label>
                                        <wa-scroller class="content-preview" orientation="vertical">
                                            <div class="content-preview-inner">
                                                ${this.getContentPreview(this.selectedDocument)}
                                            </div>
                                        </wa-scroller>
                                    </div>
                                </div>
                            </div>
                    `:x`
                            <div class="document-details empty">
                                <wa-icon name="file-lines" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                                <p>Select a document to view details</p>
                            </div>
                        `}
                    </div>
                </wa-split-panel>
            </div>
        `}};k.styles=Ie`
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
    `;D([Ne({attribute:!1})],k.prototype,"input",2);D([P()],k.prototype,"documents",2);D([P()],k.prototype,"stats",2);D([P()],k.prototype,"loading",2);D([P()],k.prototype,"selectedDocument",2);D([P()],k.prototype,"searchQuery",2);D([P()],k.prototype,"filterWorkspace",2);D([P()],k.prototype,"filterByActiveWorkspace",2);D([P()],k.prototype,"filteredDocuments",2);D([P()],k.prototype,"searchResults",2);D([P()],k.prototype,"reindexing",2);k=D([Oe("k-rag-system-manager")],k);const M=C("RAGSystemExtension");function dt(r){v.initialize().catch(e=>{M.error(`Failed to initialize document index service: ${e}`)}),R({command:{id:"rag-system.index-file",name:"Index Document",description:"Index the currently selected file for search and retrieval",parameters:[{name:"includeContent",description:"Whether to include full content in index (default: true)",required:!1}]},handler:{canExecute:e=>_.get()instanceof E,execute:async e=>{const t=_.get();if(!(t instanceof E)){y("Please select a file to index");return}const a=e.params?.includeContent!==!1;await A.runAsync("Indexing document",async n=>{n.message=`Indexing ${t.getName()}...`;try{const i=await v.indexDocument(t,{includeContent:a});n.progress=100,b(`Document indexed: ${i.fileName}`)}catch(i){throw y(`Failed to index document: ${i}`),i}})}}}),R({command:{id:"rag-system.index-workspace",name:"Index Workspace",description:"Index all indexable files in the current workspace",parameters:[{name:"includeContent",description:"Whether to include full content in index (default: true)",required:!1},{name:"maxFileSize",description:"Maximum file size in bytes to index (default: 5MB)",required:!1}]},handler:{canExecute:e=>!0,execute:async e=>{const t=await V.getWorkspace();if(!t){y("No workspace selected");return}const a=e.params?.includeContent!==!1,n=e.params?.maxFileSize?parseInt(e.params.maxFileSize):void 0;await A.runAsync("Indexing workspace",async i=>{i.message="Collecting files...",i.progress=0;try{const s=await v.indexWorkspace(t,{includeContent:a,maxFileSize:n});i.progress=100,s.failed>0?y(`Indexing complete: ${s.indexed} indexed, ${s.failed} failed. Check console for details.`):b(`Workspace indexed: ${s.indexed} documents`)}catch(s){throw y(`Failed to index workspace: ${s}`),s}})}}}),R({command:{id:"rag-system.list-documents",name:"List Indexed Documents",description:"List all indexed documents in the current workspace",parameters:[]},handler:{canExecute:e=>!0,execute:async e=>{const a=(await V.getWorkspace())?.getName();await A.runAsync("Loading indexed documents",async n=>{try{const i=await v.listDocuments(a);n.progress=100,i.length===0?b("No documents indexed in this workspace"):(M.info(`Found ${i.length} indexed documents`),b(`Found ${i.length} indexed documents (check console for details)`))}catch(i){throw y(`Failed to list documents: ${i}`),i}})}}}),R({command:{id:"rag-system.delete-document",name:"Delete Document from Index",description:"Remove the selected file from the document index",parameters:[]},handler:{canExecute:e=>_.get()instanceof E,execute:async e=>{const t=_.get();if(!(t instanceof E)){y("Please select a file to remove from index");return}const n=t.getWorkspace().getName(),i=t.getWorkspacePath();await A.runAsync("Deleting document from index",async s=>{try{const c=await v.deleteDocumentByPath(n,i);s.progress=100,c?b(`Document removed from index: ${t.getName()}`):b(`Document not found in index: ${t.getName()}`)}catch(c){throw y(`Failed to delete document from index: ${c}`),c}})}}}),R({command:{id:"rag-system.clear-workspace",name:"Clear Workspace Index",description:"Remove all indexed documents from the current workspace",parameters:[]},handler:{canExecute:e=>!0,execute:async e=>{const t=await V.getWorkspace();if(!t){y("No workspace selected");return}const a=t.getName();await A.runAsync("Clearing workspace index",async n=>{try{const i=await v.deleteWorkspace(a);n.progress=100,b(`Removed ${i} documents from index`)}catch(i){throw y(`Failed to clear workspace index: ${i}`),i}})}}}),R({command:{id:"rag-system.get-stats",name:"Document Index Statistics",description:"Get statistics about the document index",parameters:[]},handler:{canExecute:e=>!0,execute:async e=>{await A.runAsync("Loading statistics",async t=>{try{const a=await v.getStats();t.progress=100,M.info(`Document index statistics: ${JSON.stringify(a)}`),b(`Index statistics: ${a.totalDocuments} total documents. Check console for details.`)}catch(a){throw y(`Failed to get statistics: ${a}`),a}})}}}),R({command:{id:"rag-system.reindex-file",name:"Reindex Document",description:"Reindex the selected file (useful after file changes)",parameters:[]},handler:{canExecute:e=>_.get()instanceof E,execute:async e=>{const t=_.get();if(!(t instanceof E)){y("Please select a file to reindex");return}await A.runAsync("Reindexing document",async a=>{a.message=`Reindexing ${t.getName()}...`;try{const n=await v.reindexDocument(t);a.progress=100,b(`Document reindexed: ${n.fileName}`)}catch(n){throw y(`Failed to reindex document: ${n}`),n}})}}}),M.info("RAG system extension loaded"),ee.registerEditorInputHandler({ranking:1e3,canHandle:e=>e.key===".system.rag-system",handle:async e=>(e.editorId="rag-system-manager",e.widgetFactory=()=>x`
                <k-rag-system-manager .input=${e}></k-rag-system-manager>
            `,e)}),R({command:{id:"open-rag-system-manager",name:"Open RAG System Manager",description:"Opens the RAG system manager to view and manage indexed documents",parameters:[]},handler:{execute:e=>{const t={title:"RAG System Manager",data:{},key:".system.rag-system",icon:"database",state:{}};ee.loadEditor(t).catch(a=>{M.error(`Failed to open document index manager: ${a}`)})}},contribution:{target:Ce,icon:"database",label:"RAG System"}}),Te.registerContribution("contextmenu:filebrowser",{command:"rag-system.index-file",icon:"database",label:"Index Document",disabled:()=>!(_.get()instanceof E)}),O(()=>import("./rag-integration-CzdM2_st-BgLXwevT.js"),__vite__mapDeps([12,13,1,14,15,16,17])).then(e=>{e.integrateRAGWithAI(),M.info("RAG integration enabled")}).catch(e=>{M.warn(`Failed to load RAG integration: ${e}`)})}const ft=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"}));export{at as R,Q as S,te as a,ft as b,v as d,X as g,rt as r,ot as s};
