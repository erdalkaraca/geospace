import{a as z,n as U,r as v,x as o,E as d,o as O,t as M}from"./index-ZfqTFlZV.js";import{K as R,F as x,i as D,b as u,t as b,a as g,j as y,k as E,m as j,n as W,w as _,o as K,e as F}from"./main-CJ7vKuNz.js";import{d as q,r as L}from"./rag-service-CYBK1VOM.js";function $(e,t){return`${e}:${t}`}function P(e){return e.split("/").pop()||e}function k(e){e.answer=void 0,e.essence=void 0,e.fulfillmentScore=void 0,e.evaluatedAt=void 0}function C(e){return!!(e.answer||e.essence!==void 0||e.fulfillmentScore!==void 0||e.evaluatedAt)}function Q(e){const t=new Map;return e.forEach((a,r)=>{const i=$(a.workspacePath,a.filePath);t.set(i,r+1)}),t}const A=[{min:0,max:20,r:255,g:0,b:0},{min:21,max:40,r:255,g:140,b:0},{min:41,max:60,r:255,g:255,b:0},{min:61,max:80,r:150,g:255,b:0},{min:81,max:100,r:0,g:255,b:0}];function H(e){const t=A.find(a=>e>=a.min&&e<=a.max)||A[A.length-1];return{r:t.r,g:t.g,b:t.b}}function B(e){const{r:t,g:a,b:r}=H(e);return`--wa-color-text-normal: rgb(${t}, ${a}, ${r}); --wa-color-neutral-border-normal: rgb(${t}, ${a}, ${r}); background: rgba(${t}, ${a}, ${r}, 0.2);`}function J(){return[{label:"0-20",min:0,max:20,count:0,midScore:10},{label:"21-40",min:21,max:40,count:0,midScore:30},{label:"41-60",min:41,max:60,count:0,midScore:50},{label:"61-80",min:61,max:80,count:0,midScore:70},{label:"81-100",min:81,max:100,count:0,midScore:90}]}function X(e){const t=J();return e.filter(r=>r.fulfillmentScore!==void 0).forEach(r=>{const i=r.fulfillmentScore||0;for(const n of t)if(i>=n.min&&i<=n.max){n.count++;break}}),t}function Y(e){let t=e.trim();const a=t.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);if(a)t=a[1];else{const r=t.match(/\{[\s\S]*\}/);r&&(t=r[0])}try{return JSON.parse(t)}catch{const r=e.match(/(?:"essence"\s*:\s*")(.+?)(?=")/i),i=e.match(/(?:"fulfillmentScore"\s*:\s*)(\d+)/i),n={};return r&&r[1]&&(n.essence=r[1].trim()),i&&i[1]&&(n.fulfillmentScore=Math.max(0,Math.min(100,parseInt(i[1],10)))),Object.keys(n).length>0?n:null}}function G(e,t){return`Based on the following documents, please evaluate this criterion: "${e}"

${t}

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
- If the information is not found in the documents, set "fulfillmentScore" to 0 and explain in "detailedAnswer"`}function V(e,t){const a=new Map;for(const i of e){const n=$(i.document.workspacePath,i.document.filePath),s=t.get(n)||0;a.has(n)||a.set(n,{document:i.document,snippets:[],docNumber:s}),a.get(n).snippets.push(...i.matchedSnippets)}return Array.from(a.entries()).map(([i,{document:n,snippets:s,docNumber:c}])=>({key:i,document:n,snippets:s,docNumber:c})).sort((i,n)=>i.docNumber-n.docNumber).map(({document:i,snippets:n,docNumber:s})=>`[${s}] ${i.fileName}
Relevant excerpts from this document:
${n.join(`

`)}`).join(`

---

`)}function Z(e,t,a){if(!t){e.answer=a;return}t.essence&&(e.essence=t.essence),t.fulfillmentScore!==void 0&&(e.fulfillmentScore=Math.max(0,Math.min(100,Math.round(t.fulfillmentScore)))),e.answer=t.detailedAnswer||a}var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,p=(e,t,a,r)=>{for(var i=r>1?void 0:r?te(t,a):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(r?s(t,a,i):s(i))||i);return r&&i&&ee(t,a,i),i};const I=j("TenderEditor");function N(){return crypto.randomUUID()}async function S(){const e=await _.getWorkspace();if(!e)throw new Error("No workspace available");return e}let m=class extends R{constructor(){super(...arguments),this.isDragOver=!1,this.indexingFiles=new Set,this.evaluatingCriteria=new Set,this.isEvaluatingAll=!1,this.newCriteriaQuestion=""}markDirtyAndUpdate(e=!0){this.markDirty(e),this.requestUpdate()}ensureContextInitialized(){if(!this.documentContext||!this.tenderFile||!this.currentFile)throw new Error("Document context not initialized")}async doBeforeUI(){if(!this.input?.data||!(this.input.data instanceof x))return;const e=this.input.data;this.currentFile=e;let t;try{const a=await e.getContents({contentType:D.TEXT});if(typeof a!="string")throw new Error("File content is not text");let r;try{r=JSON.parse(a||"{}")}catch{r={}}let i=!1;r.contextId&&typeof r.contextId=="string"?t=r.contextId:(t=`tender-editor:${N()}`,r.contextId=t,i=!0),r.indexedFiles||(r.indexedFiles=[]),r.criteria||(r.criteria=[]),this.tenderFile=r,this.documentContext={tags:[t]},this.markDirty(i)}catch(a){u(`Failed to initialize document context: ${a}`)}}async save(){if(!(!this.tenderFile||!this.currentFile))try{const e=JSON.stringify(this.tenderFile,null,2);await this.currentFile.saveContents(e,{contentType:D.TEXT}),this.markDirty(!1)}catch(e){throw u(`Failed to save tender file: ${e}`),e}}doClose(){this.input=void 0,this.documentContext=void 0,this.tenderFile=void 0,this.currentFile=void 0}firstUpdated(){this.setupDragAndDrop()}setupDragAndDrop(){const e=this.shadowRoot?.querySelector(".drop-area");if(!e)return;const t=i=>{if(!i.dataTransfer)return;const n=i.dataTransfer.types,s=n.includes("Files"),c=n.includes("application/x-workspace-file")||n.includes("text/plain")||n.includes("text/uri-list");!s&&!c||(i.preventDefault(),i.stopPropagation(),i.dataTransfer.dropEffect="copy",this.isDragOver=!0)},a=i=>{const n=e.getBoundingClientRect(),s=i.clientX,c=i.clientY;(s<=n.left||s>=n.right||c<=n.top||c>=n.bottom)&&(this.isDragOver=!1)},r=async i=>{if(i.preventDefault(),i.stopPropagation(),this.isDragOver=!1,!i.dataTransfer)return;const n=Array.from(i.dataTransfer.files);if(n.length===0){const s=i.dataTransfer.getData("application/x-workspace-file")||i.dataTransfer.getData("text/plain");s&&await this.indexWorkspaceFile(s);return}await this.indexNativeFiles(n)};e.addEventListener("dragover",t),e.addEventListener("dragleave",a),e.addEventListener("drop",r)}async indexWorkspaceFile(e){try{const t=await S(),a=await t.getResource(e);if(!(a instanceof x)){u(`Not a file: ${e}`);return}const r=t.getName(),i=$(r,e);this.indexingFiles.add(i),this.requestUpdate();try{await this.indexFile(a)}finally{this.indexingFiles.delete(i),this.requestUpdate()}}catch(t){u(`Failed to index file: ${t}`)}}async indexNativeFiles(e){try{const t=await S(),a=Array.from(e);let r=0,i=0;const n=t.getName();await b.runAsync("Indexing documents",async s=>{for(let c=0;c<a.length;c++){const l=a[c];s.message=`Processing ${l.name} (${c+1}/${a.length})...`,s.progress=Math.round((c+1)/a.length*100);try{const h=await t.getResource(l.name);if(h instanceof x){const w=h.getWorkspacePath(),f=$(n,w);this.indexingFiles.add(f),this.requestUpdate();try{await this.indexFile(h),r++}finally{this.indexingFiles.delete(f),this.requestUpdate()}}else u(`File not found in workspace: ${l.name}`),i++}catch(h){u(`Failed to index ${l.name}: ${h}`),i++}}}),r>0&&g(`Indexed ${r} document(s)${i>0?`, ${i} failed`:""}`)}catch(t){u(`Failed to index documents: ${t}`)}}async indexFile(e){try{this.ensureContextInitialized()}catch(i){u(String(i));return}const a=e.getWorkspace().getName(),r=e.getWorkspacePath();await b.runAsync(`Indexing ${e.getName()}`,async i=>{i.message=`Indexing ${e.getName()}...`;try{await q.indexFileInContext(e,this.documentContext),this.tenderFile.indexedFiles||(this.tenderFile.indexedFiles=[]);const n=[...this.tenderFile.indexedFiles],s=n.findIndex(l=>l.filePath===r&&l.workspacePath===a),c={filePath:r,workspacePath:a,indexedAt:Date.now()};s>=0?n[s]=c:n.push(c),this.tenderFile.indexedFiles=n,this.clearAllCriteriaAnswers(),this.markDirtyAndUpdate(),i.progress=100}catch(n){throw n}})}async openFile(e){this.executeCommand("open_editor",{path:e})}async deleteIndexedFile(e,t){if(t.stopPropagation(),!this.tenderFile||!this.currentFile||!this.documentContext)return;const a=P(e.filePath),r=`Remove ${a} from this tender?`;if(!await y(r))return;const n=this.tenderFile.indexedFiles||[],s=n.findIndex(c=>c.filePath===e.filePath&&c.workspacePath===e.workspacePath);if(s>=0&&(n.splice(s,1),this.tenderFile.indexedFiles=[...n],this.clearAllCriteriaAnswers(),this.markDirtyAndUpdate(),this.documentContext.tags&&this.documentContext.tags.length>0)){const c=this.documentContext;try{await b.runAsync("Removing file from context",async l=>{l.message=`Removing tag from ${e.filePath}...`;const w=await(await S()).getResource(e.filePath);if(!(w instanceof x))throw new Error(`File not found: ${e.filePath}`);await q.removeFileFromContext(w,c),l.progress=100,g(`Removed ${a} from this tender`)})}catch(l){u(`Failed to remove file from context: ${l}`)}}}addCriteria(){if(!this.tenderFile||!this.newCriteriaQuestion.trim())return;this.tenderFile.criteria||(this.tenderFile.criteria=[]);const e={id:N(),question:this.newCriteriaQuestion.trim()};this.tenderFile.criteria.push(e),this.newCriteriaQuestion="",this.markDirty(!0),this.requestUpdate()}getScoreStyle(e){return B(e)}clearAllCriteriaAnswers(){if(!this.tenderFile?.criteria)return;let e=!1;for(const t of this.tenderFile.criteria)C(t)&&(k(t),e=!0);e&&(this.tenderFile.criteria=[...this.tenderFile.criteria],this.markDirtyAndUpdate())}async clearCriteria(e){if(!this.tenderFile?.criteria)return;const t=this.tenderFile.criteria.find(r=>r.id===e);!t||!C(t)||!await y(`Are you sure you want to clear the answer for "${t.question}"?`)||(k(t),this.markDirtyAndUpdate())}async clearAllCriteria(){if(!this.tenderFile?.criteria)return;const e=this.tenderFile.criteria.filter(C);if(e.length===0){g("No criteria have answers to clear");return}if(await y(`Are you sure you want to clear answers for all ${e.length} criteria?`)){for(const a of e)k(a);this.tenderFile.criteria=[...this.tenderFile.criteria],this.markDirtyAndUpdate(),g(`Cleared answers for ${e.length} criteria`)}}async deleteCriteria(e){if(!this.tenderFile||!this.tenderFile.criteria)return;const t=this.tenderFile.criteria.find(i=>i.id===e);if(!t||!await y(`Are you sure you want to delete the criteria "${t.question}"?`))return;const r=this.tenderFile.criteria.findIndex(i=>i.id===e);r>=0&&(this.tenderFile.criteria.splice(r,1),this.tenderFile.criteria=[...this.tenderFile.criteria],this.markDirty(!0),this.requestUpdate())}async evaluateCriteria(e){if(!this.documentContext||!this.tenderFile){u("Document context not initialized");return}this.evaluatingCriteria.add(e.id),this.requestUpdate();try{const t=await L.searchDocuments(e.question,{limit:10,documentSearchScope:this.documentContext});if(t.length===0){e.answer="No relevant information found in the indexed documents.",e.essence="No relevant information found in the indexed documents.",e.fulfillmentScore=0,e.evaluatedAt=Date.now(),this.markDirty(!0),this.requestUpdate();return}const a=Q(this.tenderFile.indexedFiles||[]),r=V(t,a),i=G(e.question,r),n=await E.getDefaultProvider(),s={...n,parameters:{...n.parameters,temperature:0}},c=[],l=E.streamCompletion({chatContext:{history:[{role:"user",content:i}]},chatConfig:s,stream:!0,onToken:f=>{c.push(f),e.answer="Evaluating...",e.evaluatedAt=Date.now(),this.requestUpdate()}});for await(const f of l)if(f.type==="error"){const T=f.error||f.content||"AI evaluation failed";throw new Error(T)}const h=c.join(""),w=Y(h);w?Z(e,w,h):(I.warn("Failed to parse AI response, using fallback"),e.answer=h),e.evaluatedAt=Date.now(),this.markDirtyAndUpdate()}catch(t){u(`Failed to evaluate criteria: ${t}`),e.answer=`Error: ${t}`,e.essence=`Error: ${t}`,e.fulfillmentScore=void 0,e.evaluatedAt=Date.now(),this.requestUpdate()}finally{this.evaluatingCriteria.delete(e.id),this.requestUpdate()}}async evaluateAllCriteria(){if(!this.tenderFile||!this.tenderFile.criteria||this.tenderFile.criteria.length===0)return;if(!this.documentContext){u("Document context not initialized");return}const e=this.tenderFile.criteria.filter(t=>!t.answer);if(e.length===0){g("All criteria have already been evaluated");return}this.isEvaluatingAll=!0,this.requestUpdate();try{await b.runAsync(`Evaluating ${e.length} criteria`,async t=>{const a=e.map(async(r,i)=>{try{await this.evaluateCriteria(r),t.message=`Evaluated: ${r.question} (${i+1}/${e.length})`}catch(n){I.warn(`Failed to evaluate criteria "${r.question}": ${n}`)}});await Promise.all(a),t.progress=100}),g(`Evaluated ${e.length} criteria`)}catch(t){u(`Failed to evaluate all criteria: ${t}`)}finally{this.isEvaluatingAll=!1,this.requestUpdate()}}render(){const e=this.tenderFile?.indexedFiles||[],t=this.tenderFile?.criteria||[];return o`
            <div class="drop-area ${this.isDragOver?"drag-over":""}">
                ${this.isDragOver?o`<div class="drop-overlay">Drop files here to index</div>`:o`
                        <div class="content">
                            <div class="indexed-files-section">
                                <h3>Indexed Files</h3>
                                ${e.length===0?o`<div class="empty-message">No files indexed yet. Drop files here to index them.</div>`:o`
                                        <div class="indexed-files-tags">
                                            ${e.map((a,r)=>{const i=`${a.workspacePath}:${a.filePath}`,n=this.indexingFiles.has(i),s=r+1;return o`
                                                    <wa-badge variant="neutral" appearance="outlined" class=${n?"indexing":""}>
                                                        ${n?o`<wa-spinner size="small" slot="start"></wa-spinner>`:o`<wa-icon name="file" slot="start"></wa-icon>`}
                                                        [${s}] ${P(a.filePath)}
                                                        ${n?d:o`
                                                            <wa-button
                                                                variant="neutral"
                                                                appearance="plain"
                                                                size="small"
                                                                title="Open"
                                                                @click=${()=>this.openFile(a.filePath)}>
                                                                <wa-icon name="folder-open"></wa-icon>
                                                            </wa-button>
                                                            <wa-button
                                                                variant="danger"
                                                                appearance="plain"
                                                                size="small"
                                                                title="Delete"
                                                                @click=${c=>this.deleteIndexedFile(a,c)}>
                                                                <wa-icon name="trash"></wa-icon>
                                                            </wa-button>
                                                        `}
                                                    </wa-badge>
                                                `})}
                                        </div>
                                    `}
                            </div>
                            <div class="criteria-section">
                                <div class="criteria-header">
                                    <h3>Evaluation Criteria</h3>
                                </div>
                                ${t.length>0?o`
                                    ${(()=>{const a=t.filter(l=>l.fulfillmentScore!==void 0);if(a.length===0)return d;const r=t.length,i=r-a.length,n=a.length>0?Math.round(a.reduce((l,h)=>l+(h.fulfillmentScore||0),0)/a.length):0,s=X(a),c=Math.max(...s.map(l=>l.count),1);return o`
                                            <div class="histogram-container">
                                                <div class="histogram-header">
                                                    <h4>Score Distribution</h4>
                                                    <div class="criteria-stats">
                                                        <wa-badge variant="neutral" appearance="outlined" pill>
                                                            <wa-icon name="list" slot="start"></wa-icon>
                                                            ${r} Total
                                                        </wa-badge>
                                                        ${a.length>0?o`
                                                            <wa-badge 
                                                                class="score-badge"
                                                                style=${this.getScoreStyle(n)}
                                                                pill>
                                                                <wa-icon name="chart-line" slot="start"></wa-icon>
                                                                Avg: ${n}%
                                                            </wa-badge>
                                                        `:d}
                                                        ${i>0?o`
                                                            <wa-badge variant="neutral" pill>
                                                                <wa-icon name="question-circle" slot="start"></wa-icon>
                                                                ${i} Not Evaluated
                                                            </wa-badge>
                                                        `:d}
                                                    </div>
                                                </div>
                                                <div class="histogram">
                                                    ${s.map(l=>o`
                                                        <div class="histogram-bar-container">
                                                            <div class="histogram-label">${l.label}</div>
                                                            <div class="histogram-bar" 
                                                                 style="height: ${l.count/c*100}%; ${this.getScoreStyle(l.midScore)}"
                                                                 title="${l.count} criteria in ${l.label}">
                                                                ${l.count>0?o`<span class="bar-count">${l.count}</span>`:d}
                                                            </div>
                                                        </div>
                                                    `)}
                                                </div>
                                            </div>
                                        `})()}
                                `:d}
                                <div class="add-criteria">
                                    <wa-input
                                        autocomplete="off"
                                        .value=${this.newCriteriaQuestion}
                                        @input=${a=>{const r=a.target;this.newCriteriaQuestion=r.value}}
                                        @keydown=${a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),this.addCriteria())}}
                                        placeholder="Enter a question or criterion (e.g., 'When is submission/application deadline?')">
                                    </wa-input>
                                    <wa-button
                                        variant="primary"
                                        @click=${()=>this.addCriteria()}
                                        ?disabled=${!this.newCriteriaQuestion.trim()}>
                                        <wa-icon name="plus" slot="start"></wa-icon>
                                        Add
                                    </wa-button>
                                    ${t.length>0?o`
                                        ${t.some(a=>a.answer)?o`
                                            <wa-button
                                                variant="neutral"
                                                appearance="outlined"
                                                size="small"
                                                @click=${()=>this.clearAllCriteria()}>
                                                <wa-icon name="broom" slot="start"></wa-icon>
                                                Clear All
                                            </wa-button>
                                        `:d}
                                        <wa-button
                                            variant="primary"
                                            appearance="outlined"
                                            size="small"
                                            @click=${()=>this.evaluateAllCriteria()}
                                            ?disabled=${this.isEvaluatingAll||e.length===0}>
                                            ${this.isEvaluatingAll?o`<wa-spinner size="small" slot="start"></wa-spinner>`:o`<wa-icon name="check-double" slot="start"></wa-icon>`}
                                            ${this.isEvaluatingAll?"Evaluating All...":"Check All"}
                                        </wa-button>
                                    `:d}
                                </div>
                                ${t.length===0?o`<div class="empty-message">No criteria defined yet. Add a question above.</div>`:o`
                                        <div class="criteria-list">
                                            ${t.map(a=>{const r=this.evaluatingCriteria.has(a.id);return o`
                                                    <div class="criteria-item">
                                                        <div class="criteria-question">
                                                            <wa-icon name="question-circle"></wa-icon>
                                                            <span>${a.question}</span>
                                                            <div class="criteria-actions">
                                                                <wa-button
                                                                    variant="primary"
                                                                    appearance="outlined"
                                                                    size="small"
                                                                    @click=${()=>this.evaluateCriteria(a)}
                                                                    ?disabled=${r||this.isEvaluatingAll||e.length===0}>
                                                                    ${r?o`<wa-spinner size="small" slot="start"></wa-spinner>`:o`<wa-icon name="check" slot="start"></wa-icon>`}
                                                                    ${r?"Evaluating...":"Check"}
                                                                </wa-button>
                                                                ${a.answer?o`
                                                                    <wa-button
                                                                        variant="neutral"
                                                                        appearance="plain"
                                                                        size="small"
                                                                        title="Clear answer"
                                                                        @click=${()=>this.clearCriteria(a.id)}>
                                                                        <wa-icon name="broom"></wa-icon>
                                                                    </wa-button>
                                                                `:d}
                                                                <wa-button
                                                                    variant="danger"
                                                                    appearance="plain"
                                                                    size="small"
                                                                    title="Delete"
                                                                    @click=${()=>this.deleteCriteria(a.id)}>
                                                                    <wa-icon name="trash"></wa-icon>
                                                                </wa-button>
                                                            </div>
                                                        </div>
                                                        ${a.answer?o`
                                                            <div class="criteria-answer">
                                                                <div class="answer-header">
                                                                    ${a.fulfillmentScore!==void 0?o`
                                                                        <wa-badge 
                                                                            class="score-badge"
                                                                            style=${this.getScoreStyle(a.fulfillmentScore)}
                                                                            pill>
                                                                            <wa-icon name="chart-line" slot="start"></wa-icon>
                                                                            ${a.fulfillmentScore}%
                                                                        </wa-badge>
                                                                    `:d}
                                                                    ${a.evaluatedAt?o`
                                                                        <div class="answer-timestamp">
                                                                            ${new Date(a.evaluatedAt).toLocaleString()}
                                                                        </div>
                                                                    `:d}
                                                                </div>
                                                                ${a.essence?o`
                                                                    <div class="answer-essence">
                                                                        ${a.essence}
                                                                    </div>
                                                                `:d}
                                                                <div class="answer-content">${O(W.parse(a.answer))}</div>
                                                            </div>
                                                        `:d}
                                                    </div>
                                                `})}
                                        </div>
                                    `}
                            </div>
                        </div>
                    `}
            </div>
        `}};m.styles=z`
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
    `;p([U({attribute:!1})],m.prototype,"input",2);p([v()],m.prototype,"isDragOver",2);p([v()],m.prototype,"tenderFile",2);p([v()],m.prototype,"indexingFiles",2);p([v()],m.prototype,"evaluatingCriteria",2);p([v()],m.prototype,"isEvaluatingAll",2);p([v()],m.prototype,"newCriteriaQuestion",2);m=p([M("k-tender-editor")],m);function ne(e){console.log("Tendermatch extension loaded"),K.registerEditorInputHandler({canHandle:t=>t instanceof x&&t.getName().toLowerCase().endsWith(".tender"),handle:async t=>{const a={title:t.getName(),data:t,key:t.getName(),editorId:"tender-editor",icon:"handshake",noOverflow:!1,state:{}};return a.widgetFactory=()=>o`
                <k-tender-editor .input=${a}></k-tender-editor>
            `,a},ranking:1e3}),F.registerContribution("filebrowser.create",{command:"create_file",icon:"handshake",label:"Tendermatch file",params:{ask:!0,extension:".tender",contents:"{}"}}),F.registerContribution("contextmenu:filebrowser",{command:"create_file",icon:"handshake",label:"Tendermatch file",params:{ask:!0,extension:".tender",contents:"{}"}}),F.registerContribution("system.icons",{label:"Tendermatch File Icons",mappings:{tender:"handshake"},priority:1e3})}export{ne as default};
