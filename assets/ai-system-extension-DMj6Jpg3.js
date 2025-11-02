import{J as P,L as I,M as R,a as z,K as G,i as y,j as C,C as A,c as b,u as E,b as U,t as S,n as N,r as T}from"./main-cbczElQp.js";import{a as D,r as f,ab as q,x as i,l as g,o as F,t as V}from"./index-C4bFKT08.js";var _=Object.defineProperty,W=Object.getOwnPropertyDescriptor,m=(e,t,n,o)=>{for(var s=o>1?void 0:o?W(t,n):t,r=e.length-1,p;r>=0;r--)(p=e[r])&&(s=(o?p(t,n,s):p(s))||s);return o&&s&&_(t,n,s),s};let d=class extends G{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatContext=this.defaultChatContext,this.busy=!1,this.inputValue="",this.settingsDialogOpen=!1,this.availableModels=[],this.loadingModels=!1,this.streamingMessages=new Map,this.currentStreamingIndex=-1,this.pendingAttentionRequests=new Map,this.pausedWorkflows=new Map,this.attentionInputValue="",this.agentResponseGroups=new Map,this.currentUserMessageIndex=-1,this.pendingUpdate=!1,this.SETTINGS_KEY="aiViewChat"}onAIConfigChanged(){this.doBeforeUI()}onPartChanged(e){e&&"chatContext"in e?this.chatContext=e.chatContext:this.chatContext=this.defaultChatContext}getAgentMetadata(e){const n=y.getAgentContributions().find(o=>o.role===e);return{label:n?.label||e,icon:n?.icon||"robot"}}renderStatusIcon(e){switch(e){case"streaming":return i`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return i`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return i`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(n=>n.message.role===e)?.message}updateAgentGroup(e,t,n){if(!e)return;const o=this.agentResponseGroups.get(e);if(o){const s=o.agents.get(t);s&&(n(s),this.requestUpdate())}}async doBeforeUI(){this.providers=await y.getProviders()||[],await this.loadSettings()}async loadSettings(){const e=await C.get(this.SETTINGS_KEY)||{};if(e.providerName){const t=this.providers?.find(n=>n.name===e.providerName);t&&(this.selectedProvider={...t,model:e.model||t.model})}if(!this.selectedProvider&&this.providers&&this.providers.length>0){const t=await y.getDefaultProvider();this.selectedProvider=t,await this.saveSettings(t.name,t.model)}}async saveSettings(e,t){const n={providerName:e,model:t};await C.set(this.SETTINGS_KEY,n)}updated(e){super.updated(e),(e.has("chatContext")||e.has("busy")||e.has("streamingMessages"))&&this.scrollToBottom()}scrollToBottom(){this.messagesContainer&&requestAnimationFrame(()=>{this.messagesContainer&&(this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight)})}onInput(e){const t=e.target;this.inputValue=t.value}onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.sendMessage())}async sendMessage(){const e=this.inputValue.trim();!e||this.busy||(this.inputValue="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),await this.handlePrompt(e))}async runCommand(e,t){const n=t||A,o=e.trim().split(/\s+/);if(o.length===0)return;const s=o.shift(),r=n.getCommand(s);if(!r){b("Command not found: "+s);return}const p={};r.parameters&&o.forEach((a,u)=>{r.parameters&&r.parameters[u]&&(p[r.parameters[u].name]=a)});const h=n.createExecutionContext(this,p);n.execute(s,h),this.requestUpdate()}async handlePrompt(e){if(e.startsWith("/")){await this.runCommand(e.substring(1),A);return}if(!this.selectedProvider){b("Please configure AI provider in settings");return}const t=y.createMessage(e);this.chatContext.history.push(t),this.requestUpdate(),this.busy=!0,this.abortController=new AbortController;const n=A.createExecutionContext(this),o=E.createChild({...n}),s=new Map;U.runAsync("Calling AI assistant",async r=>{const p={...o.getProxy(),userPrompt:e},a=y.getAgentContributions().filter(l=>l.canHandle?l.canHandle(p):!0).sort((l,c)=>(c.priority||0)-(l.priority||0)),u=`group-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.currentGroupId=u,this.currentUserMessageIndex=this.chatContext.history.length-1;const x=a.length>0?a.map(l=>l.role):["assistant"],k={id:u,userMessageIndex:this.currentUserMessageIndex,userMessage:t,timestamp:new Date,agents:new Map,messageIndices:new Map};return x.forEach(l=>{const{label:c,icon:v}=this.getAgentMetadata(l);k.agents.set(l,{role:l,label:c,icon:v,status:"streaming"})}),this.agentResponseGroups.set(u,k),this.requestUpdate(),y.executeAgentWorkflow({chatContext:this.chatContext,chatConfig:this.selectedProvider,callContext:o,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:x,onAgentStart:l=>{const c=++this.currentStreamingIndex,v={message:{role:l,content:""},isStreaming:!0,timestamp:new Date};s.set(l,c),this.streamingMessages.set(c,v),this.updateAgentGroup(this.currentGroupId,l,w=>{w.status="streaming"})},onToken:(l,c)=>{const v=s.get(l);if(v!==void 0){const w=this.streamingMessages.get(v);w&&(w.message.content+=c,this.scheduleStreamingUpdate())}this.currentGroupId&&this.requestUpdate()},onAgentComplete:(l,c)=>{const v=s.get(l);if(v!==void 0){const w=this.streamingMessages.get(v);if(w){w.isStreaming=!1,w.message=c;const M=this.chatContext.history.length;this.chatContext.history.push(c),s.delete(l),this.streamingMessages.delete(v),this.updateAgentGroup(this.currentGroupId,l,$=>{$.status="completed",$.message=c,$.messageIndex=M}),this.currentGroupId&&this.agentResponseGroups.get(this.currentGroupId)?.messageIndices.set(l,M),c.requiresAttention&&(c.attentionRequests&&this.pendingAttentionRequests.set(c.role,c.attentionRequests),c.canContinue&&S("Workflow paused - awaiting your response")),this.requestUpdate()}}},onAgentError:(l,c)=>{const v=s.get(l);if(v!==void 0){const w=this.streamingMessages.get(v);w&&(w.isStreaming=!1,w.message.content=`Error: ${c.message}`,s.delete(l),this.streamingMessages.delete(v))}this.updateAgentGroup(this.currentGroupId,l,w=>{w.status="error",w.message={role:l,content:`Error: ${c.message}`}}),this.requestUpdate(),b(`Agent ${l} error: ${c.message}`)}}).then(l=>{this.currentGroupId=void 0;const c=Array.from(l.messages.values());return c[0]||c})}).catch(r=>{r?.name!=="AbortError"&&b(`${r}`)}).finally(()=>{this.busy=!1,o.destroy(),this.abortController=void 0,this.currentGroupId=void 0,this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1);for(const[r,p]of this.streamingMessages.entries())p&&p.isStreaming&&(p.isStreaming=!1,this.streamingMessages.delete(r));this.requestUpdate()})}scheduleStreamingUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.updateAnimationFrame=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.requestUpdate()}))}cancelStream(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.busy=!1),this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1)}async openSettingsDialog(){const e=await C.get(this.SETTINGS_KEY)||{};this.settingsProviderName=e.providerName||this.selectedProvider?.name||this.providers?.[0]?.name,this.settingsModel=e.model||this.selectedProvider?.model,this.settingsDialogOpen=!0,this.settingsProviderName&&this.fetchModels(this.settingsProviderName).catch(t=>{b(`Failed to fetch models: ${t}`)})}async closeSettingsDialog(){this.settingsDialogOpen=!1,this.availableModels=[]}async onProviderChange(e){const n=e.target.value;this.settingsProviderName=n,this.settingsModel=void 0,this.availableModels=[],await this.fetchModels(n)}async fetchModels(e){const t=this.providers?.find(n=>n.name===e);if(t){this.loadingModels=!0;try{const o=`${t.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,s=await fetch(o,{method:"GET",headers:{Authorization:`Bearer ${t.apiKey}`,"Content-Type":"application/json"}});if(!s.ok)throw new Error(`Failed to fetch models: ${s.statusText}`);const p=(await s.json()).data||[];this.availableModels=p.map(h=>({id:h.id,name:h.name||h.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(n){b(`Failed to fetch models: ${n}`),this.availableModels=[]}finally{this.loadingModels=!1}}}async onModelChange(e){const t=e.target;this.settingsModel=t.value}async saveSettingsAndClose(){if(!this.settingsProviderName||!this.settingsModel){b("Please select both provider and model");return}await this.saveSettings(this.settingsProviderName,this.settingsModel);const e=this.providers?.find(t=>t.name===this.settingsProviderName);e&&(this.selectedProvider={...e,model:this.settingsModel},await y.setDefaultProvider(this.settingsProviderName)),this.settingsDialogOpen=!1,S("Settings saved")}copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{}).catch(t=>{b(`Failed to copy: ${t}`)})}formatTimestamp(e=new Date){return e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderAgentResponseGroup(e){const t=Array.from(e.agents.values()),n=t.filter(a=>a.status==="completed").length,o=t.filter(a=>a.status==="streaming").length,s=t.filter(a=>a.status==="error").length,r=t.length>0&&n+s===t.length,p=t.length===1,h=t.filter(a=>a.message&&a.message.actions&&a.message.actions.length>0).flatMap(a=>a.message.actions.map(u=>({...u,agentRole:a.role,agentLabel:a.label}))).sort((a,u)=>{const x=a.requiresAttention?1:0;return(u.requiresAttention?1:0)-x});return i`
            <div class="agent-response-group">
                ${g(!p,()=>i`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="Multiple Agents"></wa-icon>
                            <span>Multiple Agents Responded</span>
                        ${g(!r,()=>i`
                            <span class="agent-status-badge">
                                ${o>0?i`<span class="status-streaming">${o} responding</span>`:""}
                                ${n>0?i`<span class="status-completed">${n}/${t.length} completed</span>`:""}
                            </span>
                        `)}
                            ${g(r,()=>i`
                                <span class="agent-status-badge status-all-completed">
                                    All completed (${n})
                                </span>
                            `)}
                        </div>
                    </div>
                `)}
                <div class="agent-group-content">
                    ${t.map(a=>{const u=a.message||(a.status==="streaming"?this.findStreamingMessage(a.role):void 0);return u?this.renderAgentResponseCard(e.id,a,u,a.status==="streaming"):i`
                                <div class="agent-response-card status-${a.status}">
                                    <div class="agent-card-header">
                                        <div class="agent-card-title">
                                            <wa-icon name="${a.icon}" label="${a.label}"></wa-icon>
                                            <span>${a.label}</span>
                                            ${this.renderStatusIcon(a.status)}
                                        </div>
                                    </div>
                                    <div class="agent-card-content">
                                        <div class="agent-loading">Waiting for response...</div>
                                    </div>
                                </div>
                            `})}
                </div>
                ${g(h.length>0&&r,()=>i`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="Quick Actions"></wa-icon>
                            <span>Quick Actions</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${h.map(a=>i`
                                <wa-button
                                    variant="${a.requiresAttention?"brand":"neutral"}"
                                    appearance="${a.requiresAttention?"filled":"plain"}"
                                    size="small"
                                    title="${a.label}"
                                    @click="${()=>a.action()}">
                                    <wa-icon name="${a.icon}" label="${a.label}"></wa-icon>
                                </wa-button>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        `}renderAgentResponseCard(e,t,n,o){const s=t.messageIndex??-1,r=n.requiresAttention&&(n.attentionRequests?.length||0)>0;return i`
            <div class="agent-response-card status-${t.status} ${r?"requires-attention":""}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${t.icon}" label="${t.label}"></wa-icon>
                        <span>${t.label}</span>
                        ${this.renderStatusIcon(t.status)}
                        ${g(r,()=>i`
                            <wa-icon name="bell" class="attention-indicator"></wa-icon>
                        `)}
                    </div>
                </div>
                <div class="agent-card-content">
                    ${this.renderMessage(n,s,o,!1)}
                </div>
            </div>
        `}renderMessage(e,t,n,o=!0){const s=e.role==="user",r=e.role,p=e.requiresAttention&&(e.attentionRequests?.length||0)>0,h=t??this.chatContext.history.indexOf(e);return i`
            <div class="message-wrapper ${s?"user":"assistant"} ${n?"streaming":""} ${p?"requires-attention":""}">
                ${g(o,()=>i`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="${s?"user":"robot"}" 
                                label="${r}">
                            </wa-icon>
                            <span class="role-name">${r}</span>
                            ${g(p,()=>i`
                                <wa-icon name="bell" label="Requires attention" class="attention-indicator"></wa-icon>
                            `)}
                            <span class="timestamp">${this.formatTimestamp()}</span>
                        </div>
                        <div class="message-actions">
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                title="Copy"
                                @click="${()=>this.copyToClipboard(e.content)}">
                                <wa-icon slot="label" name="copy" label="Copy"></wa-icon>
                            </wa-button>
                            ${g(e.actions?.length,()=>i`
                                ${e.actions?.map(a=>i`
                                    <wa-button
                                        variant="neutral"
                                        appearance="plain"
                                        size="small"
                                        title="${a.label}"
                                        @click="${()=>a.action()}">
                                        <wa-icon slot="label" name="${a.icon}" label="${a.label}"></wa-icon>
                                    </wa-button>
                                `)}
                            `)}
                        </div>
                    </div>
                `)}
                <div class="message-content">
                    ${F(N.parse(e.content||""))}
                    ${g(n,()=>i`
                        <span class="streaming-cursor">▋</span>
                    `)}
                    ${g(p&&e.attentionRequests,()=>i`
                        <div class="attention-requests">
                            ${e.attentionRequests.map((a,u)=>i`
                                <div class="attention-request attention-${a.type}">
                                    <div class="attention-header">
                                        <wa-icon name="${this.getAttentionIcon(a.type)}" label="${a.type}"></wa-icon>
                                        <strong>${a.title}</strong>
                                        ${g(a.priority==="urgent"||a.priority==="high",()=>i`
                                            <span class="priority-badge priority-${a.priority}">${a.priority}</span>
                                        `)}
                                    </div>
                                    <div class="attention-message">${a.message}</div>
                                    <div class="attention-actions">
                                        ${g(a.type==="confirmation",()=>i`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(h,u,a,!0)}">
                                                Confirm
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(h,u,a,!1)}">
                                                Cancel
                                            </wa-button>
                                        `)}
                                        ${g(a.type==="input",()=>i`
                                            <div class="input-group">
                                                <wa-input
                                                    value="${this.attentionInputValue}"
                                                    @input="${x=>{this.attentionInputValue=x.target.value}}"
                                                    placeholder="Enter your response...">
                                                </wa-input>
                                                <wa-button
                                                    variant="brand"
                                                    appearance="filled"
                                                    size="small"
                                                    ?disabled="${!this.attentionInputValue.trim()}"
                                                    @click="${()=>this.handleAttentionResponse(h,u,a,this.attentionInputValue)}">
                                                    Submit
                                                </wa-button>
                                            </div>
                                        `)}
                                        ${g(a.type==="approval",()=>i`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(h,u,a,!0)}">
                                                Approve
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(h,u,a,!1)}">
                                                Reject
                                            </wa-button>
                                        `)}
                                        ${g(a.type==="execution",()=>i`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(h,u,a,!0)}">
                                                Execute
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(h,u,a,!1)}">
                                                Skip
                                            </wa-button>
                                        `)}
                                        ${g(a.type==="info",()=>i`
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(h,u,a,!0)}">
                                                Acknowledge
                                            </wa-button>
                                        `)}
                                    </div>
                                </div>
                            `)}
                        </div>
                    `)}
                    ${g(e.canContinue&&!p,()=>i`
                        <div class="continue-workflow">
                            <wa-button
                                variant="brand"
                                appearance="filled"
                                size="small"
                                @click="${()=>this.continuePausedWorkflow(e)}">
                                Continue Workflow
                            </wa-button>
                        </div>
                    `)}
                </div>
            </div>
        `}getAttentionIcon(e){switch(e){case"confirmation":return"check-circle";case"input":return"keyboard";case"approval":return"thumbs-up";case"execution":return"play";case"info":return"info-circle";default:return"bell"}}async handleAttentionResponse(e,t,n,o){const s=this.chatContext.history[e];if(s){if(s.attentionRequests){const r=s.attentionRequests[t];r&&(r.metadata=r.metadata||{},r.metadata.userResponse=o)}this.attentionInputValue="",s.canContinue?await this.continuePausedWorkflow(s,o):this.requestUpdate()}}async continuePausedWorkflow(e,t){if(!e.canContinue)return;const n=Array.from(this.pausedWorkflows.values())[0];if(!n){b("No paused workflow found to continue");return}const o=new Map;if(t!==void 0&&o.set("user_response",t),e.attentionRequests)for(const s of e.attentionRequests)s.metadata?.userResponse!==void 0&&o.set(`attention_${s.type}_result`,s.metadata.userResponse);this.busy=!0;try{const s=await y.continueWorkflow(n.token,o,n.options);if(s.paused&&s.continuationToken?this.pausedWorkflows.set(s.continuationToken,{token:s.continuationToken,options:n.options,results:s}):this.pausedWorkflows.clear(),s.messages)for(const[r,p]of s.messages)this.chatContext.history.push(p);this.requestUpdate()}catch(s){b(`Failed to continue workflow: ${s}`)}finally{this.busy=!1}}renderLoadingIndicator(){return i`
            <div class="message-wrapper assistant loading">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-animation name="flip" duration="2000" play>
                            <wa-icon name="robot" label="AI Assistant"></wa-icon>
                        </wa-animation>
                        <span class="role-name">AI Assistant</span>
                    </div>
                </div>
                <div class="message-content loading-dots">
                    <span>Thinking</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                </div>
            </div>
        `}renderSettingsDialog(){return this.settingsDialogOpen?i`
            <wa-dialog label="AI View Settings" open @wa-request-close="${this.closeSettingsDialog}">
                <div class="settings-dialog-content">
                    <div class="settings-field">
                        <label>Provider:</label>
                        <wa-select 
                            value="${this.settingsProviderName||""}"
                            @change="${this.onProviderChange}">
                            ${this.providers?.map(e=>i`
                                <wa-option value="${e.name}">
                                    ${e.name}
                                </wa-option>
                            `)}
                        </wa-select>
                    </div>

                    <div class="settings-field">
                        <label>Model:</label>
                        ${g(this.loadingModels,()=>i`
                            <div>Loading models...</div>
                        `,()=>i`
                            ${g(this.availableModels.length>0,()=>i`
                                <wa-select 
                                    value="${this.settingsModel||""}"
                                    @change="${this.onModelChange}">
                                    ${this.availableModels.map(e=>i`
                                        <wa-option value="${e.id}">
                                            ${e.name||e.id}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `,()=>i`
                                <wa-select 
                                    value="${this.settingsModel||""}"
                                    @change="${this.onModelChange}">
                                    ${this.providers?.find(e=>e.name===this.settingsProviderName)&&i`
                                        <wa-option value="${this.providers.find(e=>e.name===this.settingsProviderName).model}">
                                            ${this.providers.find(e=>e.name===this.settingsProviderName).model}
                                        </wa-option>
                                    `}
                                </wa-select>
                            `)}
                        `)}
                    </div>

                    <div class="settings-actions">
                        <wa-button variant="neutral" appearance="outlined" @click="${this.closeSettingsDialog}">
                            Cancel
                        </wa-button>
                        <wa-button variant="brand" appearance="filled" @click="${this.saveSettingsAndClose}">
                            Save
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `:i``}render(){return i`
            <div class="chat-container">
                ${this.renderSettingsDialog()}
                
                ${g(!this.selectedProvider,()=>i`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Click the settings button to configure</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map((e,t)=>{if(e.role==="user"){const o=Array.from(this.agentResponseGroups.values()).find(s=>s.userMessageIndex===t);if(o)return i`
                                    ${this.renderMessage(e,t)}
                                    ${this.renderAgentResponseGroup(o)}
                                `}return Array.from(this.agentResponseGroups.values()).find(o=>o.messageIndices.get(e.role)===t)?i``:this.renderMessage(e,t)})}
                    ${Array.from(this.streamingMessages.values()).map(e=>Array.from(this.agentResponseGroups.values()).some(n=>n.agents.has(e.message.role))?i``:this.renderMessage(e.message,-1,e.isStreaming))}
                    ${g(this.busy&&this.streamingMessages.size===0,()=>this.renderLoadingIndicator())}
                </div>

                <div class="input-container">
                    <div class="input-row">
                        <wa-textarea
                            placeholder="Type your message..."
                            resize="auto"
                            rows="1"
                            .value="${this.inputValue}"
                            ?disabled="${this.busy||!this.selectedProvider}"
                            @input="${this.onInput}"
                            @keydown="${this.onKeyDown}">
                        </wa-textarea>
                        
                        ${g(this.busy,()=>i`
                            <wa-button
                                appearance="plain"
                                size="medium"
                                @click="${this.cancelStream}">
                                <wa-icon name="stop" label="Stop"></wa-icon>
                            </wa-button>
                        `,()=>i`
                            <wa-button
                                appearance="plain"
                                size="medium"
                                ?disabled="${!this.inputValue.trim()||!this.selectedProvider}"
                                @click="${this.sendMessage}">
                                <wa-icon name="paper-plane" label="Send"></wa-icon>
                            </wa-button>
                        `)}

                        <wa-button
                            appearance="plain"
                            size="medium"
                            @click="${this.openSettingsDialog}">
                            <wa-icon name="gear" label="Settings"></wa-icon>
                        </wa-button>
                    </div>
                </div>
            </div>
        `}};d.styles=D`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .chat-container {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            min-height: 0;
            overflow: hidden;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            color: var(--wa-color-text-quiet);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }

        .empty-state p {
            margin: 0.5rem 0;
        }

        .empty-state .hint {
            font-size: 0.875rem;
            opacity: 0.7;
        }

        .chat-messages {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            min-height: 0;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            scroll-behavior: smooth;
        }

        .message-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-width: 85%;
            width: 100%;
            box-sizing: border-box;
            animation: slideIn 0.2s ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .message-wrapper.user {
            align-self: flex-end;
        }

        .message-wrapper.assistant {
            align-self: flex-start;
        }

        .message-wrapper.streaming .message-content {
            position: relative;
        }

        .streaming-cursor {
            display: inline-block;
            animation: blink 1s infinite;
            color: var(--wa-color-brand-50);
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        .message-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.5rem;
            padding: 0 0.5rem;
        }

        .message-meta {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.75rem;
            color: var(--wa-color-text-quiet);
        }

        .role-name {
            font-weight: 600;
        }

        .timestamp {
            opacity: 0.7;
        }

        .message-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .message-wrapper:hover .message-actions {
            opacity: 1;
        }

        .message-content {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
            line-height: 1.5;
            word-wrap: break-word;
            word-break: break-word;
            overflow-wrap: break-word;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            border: 1px solid;
            max-width: 100%;
            box-sizing: border-box;
        }

        .agent-card-content .message-content {
            border-radius: 0;
            box-shadow: none;
        }

        .message-wrapper.user .message-content {
            background-color: var(--wa-color-brand-fill-quiet);
            color: var(--wa-color-text-normal);
            border-color: var(--wa-color-brand-border-quiet);
        }

        .message-wrapper.assistant .message-content {
            background-color: var(--wa-color-surface-default);
            color: var(--wa-color-text-normal);
            border-color: var(--wa-color-surface-border);
        }

        .message-content :first-child {
            margin-top: 0;
        }

        .message-content :last-child {
            margin-bottom: 0;
        }

        .message-content p {
            margin: 0.5rem 0;
        }

        .message-content pre {
            margin: 0.5rem 0;
            padding: 0.75rem;
            background-color: var(--wa-color-surface-lowered);
            color: var(--wa-color-text-normal);
            border-radius: 0.375rem;
            overflow-x: auto;
            overflow-y: visible;
            word-wrap: break-word;
            word-break: break-all;
            white-space: pre-wrap;
            max-width: 100%;
            box-sizing: border-box;
        }

        .message-content code {
            font-family: 'Courier New', monospace;
            font-size: 0.875em;
        }

        .message-content pre code {
            background: none;
            padding: 0;
        }

        .message-content :not(pre) > code {
            background-color: var(--wa-color-overlay-inline);
            padding: 0.125rem 0.25rem;
            border-radius: 0.25rem;
        }

        .message-wrapper.user .message-content :not(pre) > code {
            background-color: var(--wa-color-overlay-inline);
        }

        .loading-dots {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .dot {
            animation: blink 1.4s infinite;
        }

        .dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        .dot:nth-child(4) {
            animation-delay: 0.6s;
        }

        @keyframes blink {
            0%, 60%, 100% {
                opacity: 0;
            }
            30% {
                opacity: 1;
            }
        }

        .input-container {
            padding: 1rem;
            border-top: 1px solid var(--wa-color-surface-border);
        }

        .input-row {
            display: flex;
            align-items: flex-end;
            gap: 0.5rem;
        }

        wa-textarea {
            flex: 1;
        }

        wa-textarea::part(base) {
            max-height: 200px;
        }

        .settings-dialog-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            min-width: 400px;
        }

        .settings-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .settings-field label {
            font-weight: 600;
            font-size: 0.875rem;
        }

        .settings-actions {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            margin-top: 0.5rem;
        }

        .message-wrapper.requires-attention {
            border-left: 3px solid var(--wa-color-warning-border-normal);
            padding-left: 0.5rem;
        }

        .attention-indicator {
            color: var(--wa-color-warning-50);
            margin-left: 0.5rem;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .attention-requests {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 2px solid var(--wa-color-surface-border);
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .attention-request {
            padding: 1rem;
            border-radius: 0.5rem;
            border: 1px solid;
            background-color: var(--wa-color-surface-default);
            border-color: var(--wa-color-surface-border);
        }

        .attention-request.attention-confirmation {
            border-color: var(--wa-color-brand-border-quiet);
            background-color: var(--wa-color-brand-fill-quiet);
        }

        .attention-request.attention-input {
            border-color: var(--wa-color-brand-border-quiet);
            background-color: var(--wa-color-brand-fill-quiet);
        }

        .attention-request.attention-approval {
            border-color: var(--wa-color-success-border-quiet);
            background-color: var(--wa-color-success-fill-quiet);
        }

        .attention-request.attention-execution {
            border-color: var(--wa-color-warning-border-quiet);
            background-color: var(--wa-color-warning-fill-quiet);
        }

        .attention-request.attention-info {
            border-color: var(--wa-color-neutral-border-quiet);
            background-color: var(--wa-color-neutral-fill-quiet);
        }

        .attention-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
        }

        .attention-header strong {
            flex: 1;
            font-size: 1rem;
            color: var(--wa-color-text-normal);
        }

        .priority-badge {
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .priority-badge.priority-high {
            background-color: var(--wa-color-warning-fill-normal);
            color: var(--wa-color-warning-on-normal);
        }

        .priority-badge.priority-urgent {
            background-color: var(--wa-color-danger-fill-normal);
            color: var(--wa-color-danger-on-normal);
        }

        .attention-message {
            margin-bottom: 1rem;
            color: var(--wa-color-text-quiet);
            line-height: 1.5;
        }

        .attention-actions {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .attention-actions .input-group {
            display: flex;
            gap: 0.5rem;
            flex: 1;
            min-width: 100%;
        }

        .attention-actions .input-group wa-input {
            flex: 1;
        }

        .continue-workflow {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px dashed var(--wa-color-surface-border);
        }

        .message-wrapper.user .attention-requests,
        .message-wrapper.user .continue-workflow {
            background-color: var(--wa-color-overlay-inline);
        }

        .agent-response-group {
            margin: 1rem 0;
            border: 1px solid var(--wa-color-surface-border);
            background: var(--wa-color-surface-default);
            overflow: visible;
            max-width: 100%;
        }

        .agent-group-header {
            padding: 0.75rem 1rem;
            background: var(--wa-color-surface-raised);
            border-bottom: 1px solid var(--wa-color-surface-border);
        }

        .agent-group-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            color: var(--wa-color-text-normal);
        }

        .agent-status-badge {
            display: flex;
            gap: 0.5rem;
            margin-left: auto;
            font-size: 0.75rem;
        }

        .agent-status-badge .status-streaming {
            color: var(--wa-color-brand-60);
        }

        .agent-status-badge .status-completed {
            color: var(--wa-color-success-60);
        }

        .agent-status-badge .status-all-completed {
            color: var(--wa-color-success-70);
            font-weight: 600;
        }

        .agent-group-content {
            display: flex;
            flex-direction: column;
        }

        .agent-response-card {
            border-bottom: 1px solid var(--wa-color-surface-border);
            transition: all 0.2s ease;
        }

        .agent-response-card:last-child {
            border-bottom: none;
        }

        .agent-response-card.requires-attention {
            border-left: 3px solid var(--wa-color-warning-border-normal);
        }

        .agent-response-card.status-streaming {
            background: var(--wa-color-brand-fill-quiet);
        }

        .agent-response-card.status-completed {
            background: var(--wa-color-surface-default);
        }

        .agent-response-card.status-error {
            background: var(--wa-color-danger-fill-quiet);
        }

        .agent-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1rem;
            user-select: none;
        }

        .agent-card-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
            color: var(--wa-color-text-normal);
        }

        .agent-card-title .spinning {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .agent-card-title .status-success {
            color: var(--wa-color-success-60);
        }

        .agent-card-title .status-error {
            color: var(--wa-color-danger-60);
        }


        .agent-card-content {
            padding: 0;
            max-width: 100%;
            box-sizing: border-box;
            overflow-x: hidden;
            overflow-y: visible;
        }

        .agent-card-content .message-wrapper {
            margin: 0;
            border: none;
            border-radius: 0;
            max-width: 100%;
            width: 100%;
        }

        .quick-actions-bar {
            padding: 0.5rem 0.75rem;
            background: var(--wa-color-surface-raised);
            border-top: 2px solid var(--wa-color-surface-border);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .quick-actions-label {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--wa-color-text-normal);
            white-space: nowrap;
        }

        .quick-actions-buttons {
            display: flex;
            gap: 0.375rem;
            flex: 1;
            justify-content: flex-end;
        }

        .quick-actions-buttons wa-button {
            min-width: 2rem;
            width: 2rem;
            height: 2rem;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .agent-loading {
            padding: 1rem;
            color: var(--wa-color-text-quiet);
            text-align: center;
            font-style: italic;
        }
    `;m([f()],d.prototype,"chatContext",2);m([f()],d.prototype,"providers",2);m([f()],d.prototype,"selectedProvider",2);m([f()],d.prototype,"busy",2);m([f()],d.prototype,"inputValue",2);m([f()],d.prototype,"settingsDialogOpen",2);m([f()],d.prototype,"settingsProviderName",2);m([f()],d.prototype,"settingsModel",2);m([f()],d.prototype,"availableModels",2);m([f()],d.prototype,"loadingModels",2);m([f()],d.prototype,"streamingMessages",2);m([f()],d.prototype,"currentStreamingIndex",2);m([f()],d.prototype,"pendingAttentionRequests",2);m([f()],d.prototype,"pausedWorkflows",2);m([f()],d.prototype,"activeAttentionDialog",2);m([f()],d.prototype,"attentionInputValue",2);m([f()],d.prototype,"agentResponseGroups",2);m([q(".chat-messages")],d.prototype,"messagesContainer",2);m([q("wa-textarea")],d.prototype,"textareaElement",2);m([P(I)],d.prototype,"onAIConfigChanged",1);m([R(z)],d.prototype,"onPartChanged",1);d=m([V("k-aiview")],d);const K=({})=>{T.put("aiService",y)};export{K as default};
