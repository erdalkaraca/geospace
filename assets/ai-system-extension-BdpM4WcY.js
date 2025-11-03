const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-DrWsvmgQ.js","assets/index-C4bFKT08.js","assets/index-C2t38aP0.css","assets/main-Bk6wZs2B.css"])))=>i.map(i=>d[i]);
import{o as Q,p as L,k as z,J as Y,L as X,K as Z,j as G,c as M,v as R,b as ee,u as te,t as se,r as ae}from"./main-DrWsvmgQ.js";import{a as I,n as g,r as k,i as T,x as n,l as p,o as ie,t as q,ab as re,_ as j}from"./index-C4bFKT08.js";var oe=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,N=(s,e,a,t)=>{for(var i=t>1?void 0:t?ne(e,a):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(t?o(e,a,i):o(i))||i);return t&&i&&oe(e,a,i),i};let C=class extends T{constructor(){super(...arguments),this.isStreaming=!1,this.showHeader=!0,this.attentionInputValue=""}formatTimestamp(){return new Date().toLocaleTimeString()}copyToClipboard(s){navigator.clipboard.writeText(s).catch(e=>{console.error("Failed to copy:",e)})}processMarkdownContent(s){return s.includes("code-block-wrapper")?s:s.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi,(e,a,t)=>`<div class="code-block-wrapper">
                <div class="code-block-header">
                    <wa-copy-button value="${this.escapeHtmlAttribute(t.trim())}" size="small" label="Copy code"></wa-copy-button>
                </div>
                <div class="code-block-content">
                    <pre><code${a}>${t}</code></pre>
                </div>
            </div>`)}escapeHtmlAttribute(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}handleResend(s){s&&(s.preventDefault(),s.stopPropagation()),this.message&&this.dispatchEvent(new CustomEvent("resend",{detail:{message:this.message,messageIndex:this.messageIndex},bubbles:!0,composed:!0}))}getAttentionIcon(s){switch(s){case"confirmation":return"check-circle";case"input":return"input";case"approval":return"hand";case"execution":return"play";case"info":return"info-circle";default:return"bell"}}updated(s){super.updated(s),s.has("attentionInputValue")&&this.dispatchEvent(new CustomEvent("attention-input-change",{detail:{value:this.attentionInputValue},bubbles:!0,composed:!0})),(s.has("message")||!this.hasAttribute("data-is-user"))&&this.updateAlignment()}updateAlignment(){if(this.message){const s=this.message.role==="user";this.setAttribute("data-is-user",String(s))}}handleAttentionResponse(s,e,a){this.message&&this.dispatchEvent(new CustomEvent("attention-response",{detail:{messageIndex:this.messageIndex,requestIndex:s,request:e,response:a},bubbles:!0,composed:!0}))}handleAction(s){const e=s();e instanceof Promise&&e.catch(a=>{console.error("Action failed:",a)})}render(){if(!this.message)return n``;const s=this.message,e=s.role==="user",a=s.requiresAttention&&(s.attentionRequests?.length||0)>0;return n`
            <div class="message-wrapper ${e?"user":"assistant"} ${this.isStreaming?"streaming":""} ${a?"requires-attention":""}">
                ${p(this.showHeader&&!e,()=>n`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="robot" 
                                label="${s.role}">
                            </wa-icon>
                            <span class="role-name">${s.role}</span>
                            ${p(a,()=>n`
                                <wa-icon name="bell" label="Requires attention"></wa-icon>
                            `)}
                            <span class="timestamp">${this.formatTimestamp()}</span>
                        </div>
                        <div class="message-actions">
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                title="Copy"
                                @click="${()=>this.copyToClipboard(s.content)}">
                                <wa-icon slot="label" name="copy" label="Copy"></wa-icon>
                            </wa-button>
                            ${p(s.actions?.length,()=>n`
                                ${s.actions.map(t=>n`
                                    <wa-button
                                        variant="neutral"
                                        appearance="plain"
                                        size="small"
                                        title="${t.label}"
                                        @click="${()=>this.handleAction(t.action)}">
                                        <wa-icon slot="label" name="${t.icon}" label="${t.label}"></wa-icon>
                                    </wa-button>
                                `)}
                            `)}
                        </div>
                    </div>
                `)}
                <div class="message-content-wrapper ${e?"user":""}">
                    <div class="message-content">
                        ${ie(this.processMarkdownContent(Q.parse(s.content||"")))}
                        ${p(this.isStreaming,()=>n`
                            <span class="streaming-cursor">▋</span>
                        `)}
                        ${p(a&&s.attentionRequests,()=>n`
                        <div class="attention-requests">
                            ${s.attentionRequests.map((t,i)=>n`
                                <div class="attention-request attention-${t.type}">
                                    <div class="attention-header">
                                        <wa-icon name="${this.getAttentionIcon(t.type)}" label="${t.type}"></wa-icon>
                                        <strong>${t.title}</strong>
                                        ${p(t.priority==="urgent"||t.priority==="high",()=>n`
                                            <span class="priority-badge priority-${t.priority}">${t.priority}</span>
                                        `)}
                                    </div>
                                    <div class="attention-message">${t.message}</div>
                                    <div class="attention-actions">
                                        ${p(t.type==="confirmation",()=>n`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                @click="${()=>this.handleAttentionResponse(i,t,!0)}">
                                Confirm
                            </wa-button>
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${()=>this.handleAttentionResponse(i,t,!1)}">
                                Cancel
                            </wa-button>
                                        `)}
                                        ${p(t.type==="input",()=>n`
                                            <div class="input-group">
                                                <wa-input
                                                    value="${this.attentionInputValue}"
                                                    @input="${r=>{this.attentionInputValue=r.target.value}}"
                                                    placeholder="Enter your response...">
                                                </wa-input>
                                                <wa-button
                                                    variant="brand"
                                                    appearance="filled"
                                                    size="small"
                                                    ?disabled="${!this.attentionInputValue.trim()}"
                                                    @click="${()=>this.handleAttentionResponse(i,t,this.attentionInputValue)}">
                                                    Submit
                                                </wa-button>
                                            </div>
                                        `)}
                                        ${p(t.type==="approval",()=>n`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,t,!0)}">
                                                Approve
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,t,!1)}">
                                                Reject
                                            </wa-button>
                                        `)}
                                        ${p(t.type==="execution",()=>n`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,t,!0)}">
                                                Execute
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,t,!1)}">
                                                Cancel
                                            </wa-button>
                                        `)}
                                    </div>
                                </div>
                            `)}
                        </div>
                        `)}
                        ${p(s.canContinue&&!a,()=>n`
                            <div class="continue-workflow">
                                <wa-button
                                    variant="brand"
                                    appearance="filled"
                                    size="small"
                                    @click="${()=>this.dispatchEvent(new CustomEvent("continue-workflow",{detail:{message:s},bubbles:!0,composed:!0}))}">
                                    Continue Workflow
                                </wa-button>
                            </div>
                        `)}
                    </div>
                    ${p(e,()=>n`
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="Copy"
                            @click="${()=>this.copyToClipboard(s.content)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="Resend"
                            @click="${t=>this.handleResend(t)}">
                            <wa-icon name="rotate-right" label="Resend"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}};C.styles=I`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 85%;
            box-sizing: border-box;
            animation: slideIn 0.2s ease-out;
        }

        :host([data-is-user="true"]) {
            align-self: flex-end;
        }

        :host([data-is-user="false"]) {
            align-self: flex-start;
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

        .message-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            box-sizing: border-box;
            margin: 0;
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
            font-size: 0.875rem;
            color: var(--wa-color-text-quiet);
        }

        .role-name {
            text-transform: capitalize;
        }

        .timestamp {
            font-size: 0.75rem;
            opacity: 0.7;
        }


        .message-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .message-wrapper:hover .message-actions,
        :host:hover .message-actions {
            opacity: 1;
        }

        .message-content-wrapper {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            width: 100%;
        }

        .message-content-wrapper.user {
            flex-direction: row;
            align-items: center;
        }

        .message-content {
            padding: 0.5rem 0.75rem;
            border-radius: 0.25rem;
            background-color: var(--wa-color-surface-default);
            word-break: break-word;
            overflow-wrap: break-word;
            max-width: 100%;
            box-sizing: border-box;
            line-height: 1.3;
            font-size: 0.9rem;
        }

        .message-content-wrapper.user .message-content {
            padding: 0.0625rem 0.75rem;
            background-color: var(--wa-color-brand-fill-quiet);
            color: var(--wa-color-text-normal);
            line-height: 1.4;
            flex: 1;
        }

        .message-content p {
            margin: 0;
            padding: 0;
        }

        .message-content ul,
        .message-content ol {
            margin: 0.25rem 0;
            padding-left: 1.25rem;
        }

        .message-content li {
            margin: 0.125rem 0;
            padding: 0;
            line-height: 1.3;
        }

        .message-content li p {
            margin: 0;
            padding: 0;
        }

        .message-content-wrapper.user .message-content p {
            margin: 0.25rem 0;
        }

        .message-content :first-child {
            margin-top: 0;
            padding-top: 0;
        }

        .message-content :last-child {
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .message-content pre {
            white-space: pre-wrap;
            word-break: break-all;
            max-width: 100%;
            box-sizing: border-box;
            overflow-x: auto;
            margin: 0;
        }

        .message-content code {
            font-family: 'Courier New', monospace;
            background-color: var(--wa-color-surface-lowered);
            padding: 0.125rem 0.25rem;
            border-radius: 0.125rem;
        }

        .message-content pre code {
            background-color: transparent;
            padding: 0;
            display: block;
        }

        .code-block-wrapper {
            margin: 0.75rem 0;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
            background-color: var(--wa-color-surface-lowered);
            overflow: hidden;
        }

        .code-block-header {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0.375rem 0.5rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }

        .code-block-content {
            padding: 0.75rem;
            overflow-x: auto;
        }

        .code-block-content pre {
            margin: 0;
            background-color: transparent;
        }

        .code-block-content code {
            background-color: transparent;
            padding: 0;
        }

        .requires-attention {
            border-color: var(--wa-color-warning-border-normal);
        }

        .attention-requests {
            margin-top: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .attention-request {
            padding: 0.75rem;
            border-radius: 0.25rem;
            border: solid var(--wa-border-width-s);
            background-color: var(--wa-color-overlay-inline);
        }

        .attention-request.attention-confirmation {
            border-color: var(--wa-color-warning-border-normal);
            background-color: var(--wa-color-warning-50);
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

        .attention-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .attention-message {
            margin-bottom: 0.5rem;
            color: var(--wa-color-text-normal);
        }

        .priority-badge {
            padding: 0.125rem 0.375rem;
            border-radius: 0.125rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .priority-badge.priority-urgent {
            background-color: var(--wa-color-danger-fill-normal);
            color: var(--wa-color-danger-on-normal);
        }

        .priority-badge.priority-high {
            background-color: var(--wa-color-warning-fill-normal);
            color: var(--wa-color-warning-on-normal);
        }

        .attention-actions {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        .input-group {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            width: 100%;
        }
    `;N([g({type:Object,attribute:!1})],C.prototype,"message",2);N([g({type:Boolean})],C.prototype,"isStreaming",2);N([g({type:Boolean})],C.prototype,"showHeader",2);N([g({type:Number,attribute:!1})],C.prototype,"messageIndex",2);N([k()],C.prototype,"attentionInputValue",2);C=N([q("ai-chat-message")],C);var le=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,U=(s,e,a,t)=>{for(var i=t>1?void 0:t?ce(e,a):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(t?o(e,a,i):o(i))||i);return t&&i&&le(e,a,i),i};let P=class extends T{constructor(){super(...arguments),this.value="",this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(s){const e=s.target;this.value=e.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(s){s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;const s=this.value;this.value="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),this.dispatchEvent(new CustomEvent("send",{detail:{value:s},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){return n`
            <div class="input-container">
                <div class="input-row">
                    <wa-textarea
                        placeholder="Type your message..."
                        resize="auto"
                        rows="1"
                        .value="${this.value}"
                        ?disabled="${this.disabled||!this.hasProvider}"
                        @input="${this.onInput}"
                        @keydown="${this.onKeyDown}">
                    </wa-textarea>
                    
                    ${p(this.busy,()=>n`
                        <wa-button
                            appearance="plain"
                            size="medium"
                            @click="${this.cancel}">
                            <wa-icon name="stop" label="Stop"></wa-icon>
                        </wa-button>
                    `,()=>n`
                        <wa-button
                            appearance="plain"
                            size="medium"
                            ?disabled="${!this.value.trim()||!this.hasProvider}"
                            @click="${this.send}">
                            <wa-icon name="paper-plane" label="Send"></wa-icon>
                        </wa-button>
                    `)}

                    <wa-button
                        appearance="plain"
                        size="medium"
                        @click="${this.openSettings}">
                        <wa-icon name="gear" label="Settings"></wa-icon>
                    </wa-button>
                </div>
            </div>
        `}};P.styles=I`
        :host {
            display: block;
            width: 100%;
        }

        .input-container {
            padding: 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }

        .input-row {
            display: flex;
            gap: 0.5rem;
            align-items: flex-end;
        }

        wa-textarea {
            flex: 1;
            min-width: 0;
        }
    `;U([g({type:String})],P.prototype,"value",2);U([g({type:Boolean})],P.prototype,"disabled",2);U([g({type:Boolean})],P.prototype,"busy",2);U([g({type:Boolean})],P.prototype,"hasProvider",2);U([re("wa-textarea")],P.prototype,"textareaElement",2);P=U([q("ai-chat-input")],P);var de=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,H=(s,e,a,t)=>{for(var i=t>1?void 0:t?pe(e,a):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(t?o(e,a,i):o(i))||i);return t&&i&&de(e,a,i),i};let K=class extends T{constructor(){super(...arguments),this.message="No AI provider configured",this.hint="Click the settings button to configure"}render(){return n`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}};K.styles=I`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            color: var(--wa-color-text-quiet);
        }

        .empty-state p {
            margin: 0.5rem 0;
        }

        .empty-state .hint {
            font-size: 0.875rem;
            opacity: 0.7;
        }
    `;H([g({type:String})],K.prototype,"message",2);H([g({type:String})],K.prototype,"hint",2);K=H([q("ai-empty-state")],K);var ge=Object.getOwnPropertyDescriptor,ue=(s,e,a,t)=>{for(var i=t>1?void 0:t?ge(e,a):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=o(i)||i);return i};let W=class extends T{render(){return n`
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
        `}};W.styles=I`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 85%;
            box-sizing: border-box;
        }

        .message-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-self: flex-start;
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
            font-size: 0.875rem;
            color: var(--wa-color-text-quiet);
        }

        .message-content {
            padding: 0.75rem 1rem;
            border-radius: 0.25rem;
            background-color: var(--wa-color-surface-default);
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
        }

        .loading-dots {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .loading-dots .dot {
            animation: pulse 1.5s ease-in-out infinite;
        }

        .loading-dots .dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .loading-dots .dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
    `;W=ue([q("ai-loading-indicator")],W);var he=Object.defineProperty,me=Object.getOwnPropertyDescriptor,F=(s,e,a,t)=>{for(var i=t>1?void 0:t?me(e,a):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(t?o(e,a,i):o(i))||i);return t&&i&&he(e,a,i),i};let _=class extends T{constructor(){super(...arguments),this.isStreaming=!1,this.groupId=""}renderStatusIcon(s){switch(s){case"streaming":return n`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return n`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return n`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}copyToClipboard(s){navigator.clipboard.writeText(s).catch(e=>{console.error("Failed to copy:",e)})}render(){if(!this.agentInfo)return n``;const s=this.message?.requiresAttention&&(this.message.attentionRequests?.length||0)>0;return this.message?n`
            <div class="agent-response-card status-${this.agentInfo.status} ${s?"requires-attention":""}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                        <span>${this.agentInfo.label}</span>
                        ${this.renderStatusIcon(this.agentInfo.status)}
                        ${p(s,()=>n`
                            <wa-icon name="bell" class="attention-indicator"></wa-icon>
                        `)}
                    </div>
                    <div class="agent-card-actions">
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="Copy"
                            @click="${()=>this.copyToClipboard(this.message?.content||"")}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                    </div>
                </div>
                <div class="agent-card-content">
                    <ai-chat-message
                        .message="${this.message}"
                        .isStreaming="${this.isStreaming}"
                        .showHeader="${!1}"
                        .messageIndex="${this.agentInfo.messageIndex}">
                    </ai-chat-message>
                </div>
            </div>
        `:n`
                <div class="agent-response-card status-${this.agentInfo.status}">
                    <div class="agent-card-header">
                        <div class="agent-card-title">
                            <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                            <span>${this.agentInfo.label}</span>
                            ${this.renderStatusIcon(this.agentInfo.status)}
                        </div>
                    </div>
                    <div class="agent-card-content">
                        <div class="agent-loading">Waiting for response...</div>
                    </div>
                </div>
            `}};_.styles=I`
        :host {
            display: block;
            width: 100%;
        }

        .agent-response-card {
            display: flex;
            flex-direction: column;
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            background-color: var(--wa-color-surface-default);
            margin-bottom: 0.5rem;
        }

        .agent-response-card.status-streaming {
            border-color: var(--wa-color-brand-border-quiet);
        }

        .agent-response-card.status-completed {
            border-color: var(--wa-color-success-border-quiet);
        }

        .agent-response-card.status-error {
            border-color: var(--wa-color-danger-border-quiet);
        }

        .agent-response-card.requires-attention {
            border-color: var(--wa-color-warning-border-normal);
        }

        .agent-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.375rem 0.5rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            background-color: var(--wa-color-surface-lowered);
        }

        .agent-card-title {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-weight: 500;
            font-size: 0.875rem;
            flex: 1;
        }

        .agent-card-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 1;
        }

        .attention-indicator {
            color: var(--wa-color-warning-50);
        }

        .agent-card-content {
            padding: 0.375rem;
        }

        .agent-card-content .message-content {
            border: none;
            box-shadow: none;
            border-radius: 0;
        }

        .agent-loading {
            padding: 1rem;
            text-align: center;
            color: var(--wa-color-text-quiet);
        }

        .spinning {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .status-success {
            color: var(--wa-color-success-60);
        }

        .status-error {
            color: var(--wa-color-danger-60);
        }
    `;F([g({type:Object,attribute:!1})],_.prototype,"agentInfo",2);F([g({type:Object,attribute:!1})],_.prototype,"message",2);F([g({type:Boolean})],_.prototype,"isStreaming",2);F([g({type:String})],_.prototype,"groupId",2);_=F([q("ai-agent-response-card")],_);var ve=Object.defineProperty,we=Object.getOwnPropertyDescriptor,J=(s,e,a,t)=>{for(var i=t>1?void 0:t?we(e,a):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(t?o(e,a,i):o(i))||i);return t&&i&&ve(e,a,i),i};let V=class extends T{handleAction(s){const e=s();e instanceof Promise&&e.catch(a=>{console.error("Action failed:",a)})}render(){if(!this.group)return n``;const s=Array.from(this.group.agents.values()),e=s.filter(l=>l.status==="completed").length,a=s.filter(l=>l.status==="streaming").length,t=s.filter(l=>l.status==="error").length,i=s.length>0&&e+t===s.length,r=s.length===1,o=s.filter(l=>l.message&&l.message.actions&&l.message.actions.length>0).flatMap(l=>l.message.actions.map(c=>({...c,agentRole:l.role,agentLabel:l.label}))).sort((l,c)=>{const u=l.requiresAttention?1:0;return(c.requiresAttention?1:0)-u});return n`
            <div class="agent-response-group">
                ${p(!r,()=>n`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="Multiple Agents"></wa-icon>
                            <span>Multiple Agents Responded</span>
                            ${p(!i,()=>n`
                                <span class="agent-status-badge">
                                    ${p(a>0,()=>n`
                                        <span class="status-streaming">${a} responding</span>
                                    `)}
                                    ${p(e>0,()=>n`
                                        <span class="status-completed">${e}/${s.length} completed</span>
                                    `)}
                                </span>
                            `)}
                            ${p(i,()=>n`
                                <span class="agent-status-badge status-all-completed">
                                    All completed (${e})
                                </span>
                            `)}
                        </div>
                    </div>
                `)}
                <div class="agent-group-content">
                    ${L(s,l=>l.role,l=>{const c=l.message||(l.status==="streaming"&&this.findStreamingMessage?this.findStreamingMessage(l.role):void 0);return n`
                            <ai-agent-response-card
                                .agentInfo="${l}"
                                .message="${c}"
                                .isStreaming="${l.status==="streaming"}"
                                .groupId="${this.group.id}">
                            </ai-agent-response-card>
                        `})}
                </div>
                ${p(o.length>0&&i,()=>n`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="Quick Actions"></wa-icon>
                            <span>Quick Actions</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${L(o,(l,c)=>c.toString(),l=>n`
                                <wa-button
                                    variant="${l.requiresAttention?"brand":"neutral"}"
                                    appearance="${l.requiresAttention?"filled":"plain"}"
                                    size="small"
                                    title="${l.label}"
                                    @click="${()=>this.handleAction(l.action)}">
                                    <wa-icon name="${l.icon}" label="${l.label}"></wa-icon>
                                </wa-button>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        `}};V.styles=I`
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        .agent-response-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            overflow: visible;
        }

        .agent-group-header {
            padding: 0.5rem 0.75rem;
            background-color: var(--wa-color-surface-lowered);
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
        }

        .agent-group-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
        }

        .agent-status-badge {
            display: flex;
            gap: 0.5rem;
            margin-left: auto;
            font-size: 0.875rem;
        }

        .status-streaming {
            color: var(--wa-color-brand-50);
        }

        .status-completed {
            color: var(--wa-color-success-60);
        }

        .status-all-completed {
            color: var(--wa-color-success-70);
            font-weight: 600;
        }

        .agent-group-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        .quick-actions-bar {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            padding: 0.75rem;
            background-color: var(--wa-color-surface-lowered);
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            border-top: none;
        }

        .quick-actions-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--wa-color-text-quiet);
            flex-shrink: 0;
        }

        .quick-actions-buttons {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: flex-end;
            margin-left: auto;
        }
    `;J([g({type:Object,attribute:!1})],V.prototype,"group",2);J([g({type:Function,attribute:!1})],V.prototype,"findStreamingMessage",2);V=J([q("ai-agent-response-group")],V);var fe=Object.defineProperty,be=Object.getOwnPropertyDescriptor,y=(s,e,a,t)=>{for(var i=t>1?void 0:t?be(e,a):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(t?o(e,a,i):o(i))||i);return t&&i&&fe(e,a,i),i};let w=class extends T{constructor(){super(...arguments),this.open=!1,this.providers=[],this.selectedProviderName="",this.selectedModel="",this.availableModels=[],this.loadingModels=!1,this.requireToolApproval=!0,this.toolApprovalAllowlist=[],this.availableCommands=[],this.apiKey=""}onProviderChange(s){const e=s.target;this.selectedProviderName=e.value;const a=this.providers.find(t=>t.name===e.value);this.apiKey=a?.apiKey||"",this.dispatchEvent(new CustomEvent("provider-change",{detail:{providerName:e.value},bubbles:!0,composed:!0})),this.requestUpdate()}onApiKeyChange(s){const e=s.target;this.apiKey=e.value}async onPasteApiKey(){try{const s=await navigator.clipboard.readText();this.apiKey=s,this.requestUpdate()}catch(s){console.error("Failed to read from clipboard:",s)}}async onCopyApiKey(){if(this.apiKey)try{await navigator.clipboard.writeText(this.apiKey)}catch(s){console.error("Failed to copy to clipboard:",s)}}updated(s){if(s.has("selectedProviderName")||s.has("providers")){const e=this.providers.find(a=>a.name===this.selectedProviderName);e&&(this.apiKey=e.apiKey||"")}s.has("toolApprovalAllowlist")&&this.loadAllowedCommands()}onModelChange(s){const e=s.target;this.selectedModel=e.value,this.dispatchEvent(new CustomEvent("model-change",{detail:{model:e.value},bubbles:!0,composed:!0}))}onToolApprovalChange(s){const e=s.target;this.requireToolApproval=e.checked,this.dispatchEvent(new CustomEvent("tool-approval-change",{detail:{value:e.checked},bubbles:!0,composed:!0}))}onAllowlistChange(s,e){s.target.checked?this.toolApprovalAllowlist.includes(e)||(this.toolApprovalAllowlist=[...this.toolApprovalAllowlist,e]):this.toolApprovalAllowlist=this.toolApprovalAllowlist.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("allowlist-change",{detail:{allowlist:[...this.toolApprovalAllowlist]},bubbles:!0,composed:!0})),this.requestUpdate()}async firstUpdated(){await this.loadAllowedCommands()}async loadAllowedCommands(){if(this.toolApprovalAllowlist.length===0){this.availableCommands=[];return}const{commandRegistry:s}=await j(async()=>{const{commandRegistry:i}=await import("./main-DrWsvmgQ.js").then(r=>r.M);return{commandRegistry:i}},__vite__mapDeps([0,1,2,3])),e=s.createExecutionContext(),a=s.listCommands(e),t=Object.values(a);this.availableCommands=this.toolApprovalAllowlist.map(i=>{const r=t.find(o=>o.id===i);return{id:i,name:r?.name||i}}).sort((i,r)=>i.name.localeCompare(r.name))}save(){this.dispatchEvent(new CustomEvent("save",{detail:{providerName:this.selectedProviderName,model:this.selectedModel,apiKey:this.apiKey},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}render(){if(!this.open)return n``;const s=this.providers.find(e=>e.name===this.selectedProviderName);return n`
            <wa-dialog label="AI View Settings" open @wa-request-close="${this.cancel}">
                <div class="settings-dialog-content">
                    <div class="settings-field">
                        <label>Provider:</label>
                        <wa-select 
                            value="${this.selectedProviderName||""}"
                            @change="${this.onProviderChange}">
                            ${this.providers.map(e=>n`
                                <wa-option value="${e.name}">
                                    ${e.name}
                                </wa-option>
                            `)}
                        </wa-select>
                    </div>

                    <div class="settings-field">
                        <label>Model:</label>
                        ${p(this.loadingModels,()=>n`
                            <div>Loading models...</div>
                        `,()=>n`
                            ${p(this.availableModels.length>0,()=>n`
                                <wa-select 
                                    value="${this.selectedModel||""}"
                                    @change="${this.onModelChange}">
                                    ${this.availableModels.map(e=>n`
                                        <wa-option value="${e.id}">
                                            ${e.name||e.id}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `,()=>n`
                                <wa-select 
                                    value="${this.selectedModel||""}"
                                    @change="${this.onModelChange}">
                                    ${p(s,()=>n`
                                        <wa-option value="${s.model}">
                                            ${s.model}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `)}
                        `)}
                    </div>

                    <div class="settings-field">
                        <label>API Key:</label>
                        <wa-input
                            type="password"
                            value="${this.apiKey||""}"
                            placeholder="Enter API key for ${this.selectedProviderName||"provider"}"
                            @input="${this.onApiKeyChange}">
                            <wa-button
                                slot="end"
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${this.onCopyApiKey}"
                                title="Copy API key to clipboard"
                                ?disabled="${!this.apiKey}">
                                <wa-icon name="copy" label="Copy"></wa-icon>
                            </wa-button>
                            <wa-button
                                slot="end"
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${this.onPasteApiKey}"
                                title="Paste from clipboard">
                                <wa-icon name="paste" label="Paste"></wa-icon>
                            </wa-button>
                        </wa-input>
                    </div>

                    <div class="settings-field">
                        <label>
                            <wa-checkbox
                                ?checked="${this.requireToolApproval}"
                                @change="${this.onToolApprovalChange}">
                            </wa-checkbox>
                            <span>Require approval before executing tools</span>
                        </label>
                    </div>

                    ${p(this.requireToolApproval,()=>n`
                        <div class="settings-field">
                            <label>Commands allowed without approval:</label>
                            <div class="allowlist-container">
                                ${L(this.availableCommands,e=>e.id,e=>n`
                                    <label class="allowlist-item">
                                        <wa-checkbox
                                            ?checked="${this.toolApprovalAllowlist.includes(e.id)}"
                                            @change="${a=>this.onAllowlistChange(a,e.id)}">
                                        </wa-checkbox>
                                        <span>${e.name}</span>
                                    </label>
                                `)}
                            </div>
                        </div>
                    `)}

                    <div class="settings-actions">
                        <wa-button variant="neutral" appearance="outlined" @click="${this.cancel}">
                            Cancel
                        </wa-button>
                        <wa-button variant="brand" appearance="filled" @click="${this.save}">
                            Save
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `}};w.styles=I`
        :host {
            display: block;
        }

        .settings-dialog-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .settings-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .settings-field label {
            font-weight: 500;
            color: var(--wa-color-text-normal);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .settings-field label span {
            flex: 1;
        }

        .allowlist-container {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 200px;
            overflow-y: auto;
            padding: 0.5rem;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
            background-color: var(--wa-color-surface-lowered);
        }

        .allowlist-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem;
            cursor: pointer;
        }

        .allowlist-item span {
            flex: 1;
            font-size: 0.875rem;
        }

        .settings-actions {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            margin-top: 1rem;
        }
    `;y([g({type:Boolean})],w.prototype,"open",2);y([g({type:Array,attribute:!1})],w.prototype,"providers",2);y([g({type:String})],w.prototype,"selectedProviderName",2);y([g({type:String})],w.prototype,"selectedModel",2);y([g({type:Array,attribute:!1})],w.prototype,"availableModels",2);y([g({type:Boolean})],w.prototype,"loadingModels",2);y([g({type:Boolean})],w.prototype,"requireToolApproval",2);y([g({type:Array,attribute:!1})],w.prototype,"toolApprovalAllowlist",2);y([k()],w.prototype,"availableCommands",2);y([k()],w.prototype,"apiKey",2);w=y([q("ai-settings-dialog")],w);class ye{constructor(){this.sessions=new Map,this.sessionTitles=new Map,this.activeSessionId=""}createSession(){const e=`session-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.sessions.set(e,{history:[]}),this.sessionTitles.set(e,"New Chat"),this.activeSessionId=e,e}deleteSession(e){if(this.sessions.size<=1)return!1;if(this.sessions.delete(e),this.sessionTitles.delete(e),this.activeSessionId===e){const a=Array.from(this.sessions.keys())[0];this.activeSessionId=a||""}return!0}getSession(e){return this.sessions.get(e)}setSession(e,a){this.sessions.set(e,a)}getActiveSession(){if(this.activeSessionId)return this.sessions.get(this.activeSessionId)}setActiveSession(e){this.sessions.has(e)&&(this.activeSessionId=e)}getActiveSessionId(){return this.activeSessionId}getAllSessionIds(){return Array.from(this.sessions.keys())}getAllSessions(){return Array.from(this.sessions.entries()).map(([e,a])=>({id:e,history:a,title:this.sessionTitles.get(e)||"New Chat"}))}getSessionTitle(e){return this.sessionTitles.get(e)||"New Chat"}setSessionTitle(e,a){this.sessionTitles.set(e,a)}generateTitle(e){const a=e.trim();if(!a)return"New Chat";const t=30;return a.length<=t?a:a.substring(0,t).trim()+"..."}addMessage(e,a){const t=this.sessions.get(e);t&&t.history.push(a)}getSessionCount(){return this.sessions.size}}class Ae{constructor(e){this.streamingMessages=new Map,this.currentStreamingIndex=-1,this.pendingUpdate=!1,this.onUpdate=e}createStreamingMessage(e,a){const t=++this.currentStreamingIndex;return this.streamingMessages.set(t,{message:{role:e,content:""},isStreaming:!0,timestamp:new Date,sessionId:a}),t}getStreamingMessage(e){return this.streamingMessages.get(e)}updateStreamingMessage(e,a){const t=this.streamingMessages.get(e);t&&(t.message.content+=a,this.scheduleUpdate())}completeStreamingMessage(e,a){const t=this.streamingMessages.get(e);t&&(t.message=a,t.isStreaming=!1)}removeStreamingMessage(e){this.streamingMessages.delete(e)}getAllStreamingMessages(){return Array.from(this.streamingMessages.values())}getAllStreamingMessagesByRole(e){return Array.from(this.streamingMessages.values()).filter(a=>a.message.role===e)}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(t=>t.message.role===e)?.message}scheduleUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.updateAnimationFrame=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.onUpdate?.()}))}cancelUpdates(){this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1)}clearAll(){for(const[e,a]of this.streamingMessages.entries())a.isStreaming&&(a.isStreaming=!1);this.streamingMessages.clear(),this.cancelUpdates()}clearForSession(e){const a=[];for(const[t,i]of this.streamingMessages.entries())i.sessionId===e&&(i.isStreaming&&(i.isStreaming=!1),a.push(t));a.forEach(t=>this.streamingMessages.delete(t)),a.length>0&&this.scheduleUpdate()}reset(){this.clearAll(),this.currentStreamingIndex=-1}}class $e{constructor(e){this.aiService=e,this.settingsKey="aiViewChat",this.availableModels=[],this.loadingModels=!1}async initialize(){await this.loadProviders(),await this.loadSettings()}async loadProviders(){this.providers=await this.aiService.getProviders()||[]}async loadSettings(){const e=await z.get(this.settingsKey)||{};if(e.providerName){const a=this.providers?.find(t=>t.name===e.providerName);a&&(this.selectedProvider={...a,model:e.model||a.model},this.settingsProviderName=e.providerName,this.settingsModel=e.model||a.model)}if(!this.selectedProvider&&this.providers&&this.providers.length>0){const a=await this.aiService.getDefaultProvider();this.selectedProvider=a,this.settingsProviderName=a.name,this.settingsModel=a.model,await this.saveSettings(a.name,a.model)}}getRequireToolApproval(){return!1}async saveSettings(e,a,t,i,r){const l={...await z.get(this.settingsKey)||{},providerName:e,model:a};i!==void 0&&(l.requireToolApproval=i),r!==void 0&&(l.toolApprovalAllowlist=r),await z.set(this.settingsKey,l);const c=this.providers?.find(u=>u.name===e);if(c){const u={...c,model:a,...t!==void 0&&{apiKey:t}};this.selectedProvider=u,t!==void 0&&await this.updateProviderApiKey(e,t),await this.aiService.setDefaultProvider(e)}}async updateProviderApiKey(e,a){const{KEY_AI_CONFIG:t}=await j(async()=>{const{KEY_AI_CONFIG:r}=await import("./main-DrWsvmgQ.js").then(o=>o.O);return{KEY_AI_CONFIG:r}},__vite__mapDeps([0,1,2,3])),i=await z.get(t)||{};if(i.providers&&Array.isArray(i.providers)){const r=i.providers.findIndex(o=>o.name===e);r>=0&&(i.providers[r]={...i.providers[r],apiKey:a},await z.set(t,i))}}async loadToolApprovalAllowlist(){return(await z.get(this.settingsKey)||{}).toolApprovalAllowlist||[]}async fetchModels(e){const a=this.providers?.find(t=>t.name===e);if(a){this.loadingModels=!0;try{const i=`${a.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,r=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${a.apiKey}`,"Content-Type":"application/json"}});if(!r.ok)throw new Error(`Failed to fetch models: ${r.statusText}`);const l=(await r.json()).data||[];this.availableModels=l.map(c=>({id:c.id,name:c.name||c.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(t){throw this.availableModels=[],t}finally{this.loadingModels=!1}}}getProviders(){return this.providers||[]}getSelectedProvider(){return this.selectedProvider}setSelectedProvider(e){this.selectedProvider=e}getSettingsProviderName(){return this.settingsProviderName}setSettingsProviderName(e){this.settingsProviderName=e}getSettingsModel(){return this.settingsModel}setSettingsModel(e){this.settingsModel=e}getAvailableModels(){return this.availableModels}isLoadingModels(){return this.loadingModels}resetModelSelection(){this.availableModels=[],this.settingsModel=void 0}}class xe{constructor(){this.groups=new Map,this.pausedWorkflows=new Map}createGroup(e,a,t,i,r){const o=`group-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.currentGroupId=o;const l={id:o,sessionId:e,userMessageIndex:a,userMessage:t,timestamp:new Date,agents:new Map,messageIndices:new Map};return i.forEach(c=>{const{label:u,icon:h}=r(c);l.agents.set(c,{role:c,label:u,icon:h,status:"streaming"})}),this.groups.set(o,l),o}getGroup(e){return this.groups.get(e)}updateAgentStatus(e,a,t,i,r){const o=this.groups.get(e);if(!o)return;const l=o.agents.get(a);l&&(l.status=t,i&&(l.message=i),r!==void 0&&(l.messageIndex=r,o.messageIndices.set(a,r)))}getGroupsForSession(e){return Array.from(this.groups.values()).filter(a=>a.sessionId===e)}findGroupForUserMessage(e,a,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.userMessageIndex===a&&i.userMessage===t)}findGroupForMessage(e,a,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.messageIndices.get(a)===t)}getCurrentGroupId(){return this.currentGroupId}setCurrentGroupId(e){this.currentGroupId=e}clearCurrentGroup(){this.currentGroupId=void 0}storePausedWorkflow(e,a,t){this.pausedWorkflows.set(e,{token:e,options:a,results:t})}getPausedWorkflow(e){return this.pausedWorkflows.get(e)}getAllPausedWorkflows(){return Array.from(this.pausedWorkflows.values())}clearPausedWorkflow(e){this.pausedWorkflows.delete(e)}clearAllPausedWorkflows(){this.pausedWorkflows.clear()}getAllGroups(){return Array.from(this.groups.values())}clearAll(){this.groups.clear(),this.currentGroupId=void 0}}var Se=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,E=(s,e,a,t)=>{for(var i=t>1?void 0:t?Me(e,a):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(t?o(e,a,i):o(i))||i);return t&&i&&Se(e,a,i),i};let x=class extends Z{constructor(){super(...arguments),this.sessionManager=new ye,this.streamManager=new Ae(()=>this.requestUpdate()),this.providerManager=new $e(G),this.agentGroupManager=new xe,this.busy=!1,this.inputValue="",this.settingsDialogOpen=!1,this.requireToolApproval=!0,this.toolApprovalAllowlist=new Set,this.pendingToolApprovals=new Map}onAIConfigChanged(){this.doBeforeUI()}async doBeforeUI(){this.sessionManager.getSessionCount()===0&&this.sessionManager.createSession(),await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async loadSettings(){const{appSettings:s}=await j(async()=>{const{appSettings:t}=await import("./main-DrWsvmgQ.js").then(i=>i.N);return{appSettings:t}},__vite__mapDeps([0,1,2,3])),e=await s.get("aiViewChat")||{};this.requireToolApproval=e.requireToolApproval!==void 0?e.requireToolApproval:!0;const a=await this.providerManager.loadToolApprovalAllowlist();this.toolApprovalAllowlist=new Set(a)}createNewSession(){this.sessionManager.createSession(),this.inputValue="",this.requestUpdate()}deleteSession(s){if(!this.sessionManager.deleteSession(s)){M("Cannot delete the last session");return}this.inputValue="",this.requestUpdate()}scrollToBottom(){requestAnimationFrame(()=>{const s=this.sessionManager.getActiveSessionId();if(!s)return;const a=this.shadowRoot?.querySelector(`wa-tab-panel[name="${s}"]`)?.querySelector("wa-scroller.chat-messages");if(a){const t=a.shadowRoot?.querySelector(".scroll-container");t?t.scrollTop=t.scrollHeight:a.scrollTo&&a.scrollTo({top:a.scrollHeight,behavior:"smooth"})}})}updated(s){super.updated(s),s.has("busy")&&this.scrollToBottom()}async sendMessage(){const s=this.inputValue.trim();if(!s||this.busy)return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const a=this.shadowRoot?.querySelector("wa-tab-group");a?.active&&(e=a.active,this.sessionManager.setActiveSession(e))}e&&(this.inputValue="",this.requestUpdate(),await this.handlePrompt(s))}async runCommand(s,e){const a=e||R,t=s.trim().split(/\s+/);if(t.length===0)return;const i=t.shift(),r=a.getCommand(i);if(!r){M("Command not found: "+i);return}const o={};r.parameters&&t.forEach((c,u)=>{r.parameters&&r.parameters[u]&&(o[r.parameters[u].name]=c)});const l=a.createExecutionContext(this,o);await a.execute(i,l),this.requestUpdate()}async handlePrompt(s){if(s.startsWith("/")){await this.runCommand(s.substring(1),R);return}const e=this.providerManager.getSelectedProvider();if(!e){M("Please configure AI provider in settings");return}let a=this.sessionManager.getActiveSessionId();if(!a)this.createNewSession(),a=this.sessionManager.getActiveSessionId();else{const c=this.shadowRoot?.querySelector("wa-tab-group");c?.active&&(a=c.active,this.sessionManager.setActiveSession(a))}if(!a)return;const t=G.createMessage(s),i=a,r=this.sessionManager.getSession(i);if(!r)return;if(r.history.push(t),r.history.length===1){const c=this.sessionManager.generateTitle(s);this.sessionManager.setSessionTitle(i,c)}this.requestUpdate(),this.busy=!0,this.abortController=new AbortController;const o=new Map,l={history:[...r.history]};ee.runAsync("Calling AI assistant",async()=>{const c=R.createExecutionContext(this),u=te.createChild({...c}),h=G.getAgentContributions(),A=h.filter(d=>d.canHandle?d.canHandle({...u.getProxy(),userPrompt:s}):!0).sort((d,m)=>(m.priority||0)-(d.priority||0)),f=A.length>0?A.map(d=>d.role):["assistant"],b=this.sessionManager.getSession(i);if(!b)return;const $=this.agentGroupManager.createGroup(i,b.history.length-1,t,f,d=>{const m=h.find(v=>v.role===d);return{label:m?.label||d,icon:m?.icon||"robot"}});return G.executeAgentWorkflow({chatContext:l,chatConfig:e,callContext:u,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:f,requireToolApproval:this.requireToolApproval,onToolApprovalRequest:async(d,m)=>{const{ToolExecutor:v}=await j(async()=>{const{ToolExecutor:D}=await import("./main-DrWsvmgQ.js").then(O=>O.Q);return{ToolExecutor:D}},__vite__mapDeps([0,1,2,3])),S=new v,B=R.createExecutionContext(this);return m.toolCalls.every(D=>{const O=S.findCommand(D,B);return O&&this.toolApprovalAllowlist.has(O.id)})?!0:new Promise(D=>{const O=`approval-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.pendingToolApprovals.set(O,{role:d,request:m,resolve:D,allowListSelections:new Map}),this.requestUpdate()})},onAgentStart:d=>{const m=this.streamManager.createStreamingMessage(d,i);o.set(d,m),this.agentGroupManager.updateAgentStatus($,d,"streaming"),this.requestUpdate()},onToken:(d,m)=>{const v=o.get(d);v!==void 0&&this.streamManager.updateStreamingMessage(v,m),this.requestUpdate()},onAgentComplete:(d,m)=>{const v=this.sessionManager.getSession(i);if(!v)return;const S=o.get(d);if(S!==void 0){this.streamManager.completeStreamingMessage(S,m);const B=v.history.length;v.history.push(m),o.delete(d),this.streamManager.removeStreamingMessage(S),this.agentGroupManager.updateAgentStatus($,d,"completed",m,B),this.requestUpdate()}},onAgentError:(d,m)=>{if(!this.sessionManager.getSession(i))return;const S=o.get(d);S!==void 0&&(this.streamManager.removeStreamingMessage(S),o.delete(d)),this.agentGroupManager.updateAgentStatus($,d,"error",{role:d,content:`Error: ${m.message}`}),this.requestUpdate(),M(`Agent ${d} error: ${m.message}`)}}).then(()=>{this.agentGroupManager.clearCurrentGroup()})}).catch(c=>{c?.name!=="AbortError"&&M(`${c}`)}).finally(()=>{this.busy=!1,this.abortController=void 0,this.streamManager.clearForSession(i),this.agentGroupManager.clearCurrentGroup(),this.requestUpdate()})}cancelStream(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.busy=!1),this.streamManager.cancelUpdates()}async openSettingsDialog(){this.settingsDialogOpen=!0;const s=this.providerManager.getSelectedProvider(),e=s?.name||this.providerManager.getProviders()[0]?.name;if(e){this.providerManager.setSettingsProviderName(e),s?.model&&this.providerManager.setSettingsModel(s.model);try{await this.providerManager.fetchModels(e)}catch(a){M(`Failed to fetch models: ${a}`)}}this.requestUpdate()}closeSettingsDialog(){this.settingsDialogOpen=!1,this.providerManager.resetModelSelection(),this.requestUpdate()}async onProviderChange(s){this.providerManager.setSettingsProviderName(s),this.providerManager.setSettingsModel(void 0),this.providerManager.resetModelSelection();try{await this.providerManager.fetchModels(s)}catch(e){M(`Failed to fetch models: ${e}`)}this.requestUpdate()}async onModelChange(s){const e=s.target;this.providerManager.setSettingsModel(e.value)}async saveSettingsAndClose(s){const e=this.providerManager.getSettingsProviderName(),a=this.providerManager.getSettingsModel();if(!e||!a){M("Please select both provider and model");return}await this.providerManager.saveSettings(e,a,s,this.requireToolApproval,Array.from(this.toolApprovalAllowlist)),this.settingsDialogOpen=!1,se("Settings saved"),this.requestUpdate()}renderMessage(s,e,a,t){return n`
            <ai-chat-message
                .message="${e}"
                .isStreaming="${t||!1}"
                .showHeader="${!0}"
                .messageIndex="${a}"
                @resend="${i=>{this.handleResend(i.detail.message)}}">
            </ai-chat-message>
        `}async handleResend(s){if(!s||s.role!=="user")return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const a=this.shadowRoot?.querySelector("wa-tab-group");a?.active&&(e=a.active,this.sessionManager.setActiveSession(e))}e&&await this.handlePrompt(s.content)}render(){const s=this.sessionManager.getAllSessionIds(),e=this.sessionManager.getActiveSessionId(),a=this.providerManager.getSelectedProvider();return n`
            <div class="chat-container">
                ${p(this.settingsDialogOpen,()=>n`
                    <ai-settings-dialog
                        .open="${this.settingsDialogOpen}"
                        .providers="${this.providerManager.getProviders()}"
                        .selectedProviderName="${this.providerManager.getSettingsProviderName()||""}"
                        .selectedModel="${this.providerManager.getSettingsModel()||""}"
                        .availableModels="${this.providerManager.getAvailableModels()}"
                        .loadingModels="${this.providerManager.isLoadingModels()}"
                        .requireToolApproval="${this.requireToolApproval}"
                        .toolApprovalAllowlist="${Array.from(this.toolApprovalAllowlist)}"
                        @provider-change="${t=>this.onProviderChange(t.detail.providerName)}"
                        @model-change="${t=>this.onModelChange(t)}"
                        @tool-approval-change="${t=>{this.requireToolApproval=t.detail.value,this.requestUpdate()}}"
                        @allowlist-change="${t=>{this.toolApprovalAllowlist=new Set(t.detail.allowlist||[]),this.requestUpdate()}}"
                        @save="${t=>{this.providerManager.setSettingsProviderName(t.detail.providerName),this.providerManager.setSettingsModel(t.detail.model),this.saveSettingsAndClose(t.detail.apiKey)}}"
                        @cancel="${()=>this.closeSettingsDialog()}">
                    </ai-settings-dialog>
                `)}
                
                ${p(!a,()=>n`
                    <ai-empty-state
                        message="No AI provider configured"
                        hint="Click the settings button to configure">
                    </ai-empty-state>
                `)}

                ${p(s.length>0,()=>n`
                    <wa-tab-group 
                        active="${e||s[0]||""}" 
                        @wa-tab-show="${t=>{const i=t.detail.panel;this.sessionManager.getSession(i)&&(this.sessionManager.setActiveSession(i),this.inputValue="",this.requestUpdate())}}">
                        ${L(s,t=>t,(t,i)=>{const r=this.sessionManager.getSession(t);return r?n`
                                <wa-tab panel="${t}">
                                    <span>${this.sessionManager.getSessionTitle(t)||`Chat ${i+1}`}</span>
                                    ${p(s.length>1,()=>n`
                                        <wa-icon 
                                            name="xmark" 
                                            label="Close"
                                            @click="${o=>{o.stopPropagation(),this.deleteSession(t)}}">
                                        </wa-icon>
                                    `)}
                                </wa-tab>
                                <wa-tab-panel name="${t}">
                                    <wa-scroller class="chat-messages" orientation="vertical">
                                        <div class="chat-content">
                                            ${r.history.map((o,l)=>{const c=this.agentGroupManager.findGroupForUserMessage(t,l,o);return c&&o.role==="user"?n`
                                                        <ai-chat-message
                                                            .message="${o}"
                                                            .isStreaming="${!1}"
                                                            .showHeader="${!0}"
                                                            .messageIndex="${l}"
                                                            @resend="${h=>{this.handleResend(h.detail.message)}}">
                                                        </ai-chat-message>
                                                        <ai-agent-response-group
                                                            .group="${c}"
                                                            .findStreamingMessage="${h=>this.streamManager.findStreamingMessage(h)}">
                                                        </ai-agent-response-group>
                                                    `:this.agentGroupManager.findGroupForMessage(t,o.role,l)?n``:this.renderMessage(r,o,l)})}
                                            ${this.streamManager.getAllStreamingMessages().filter(o=>o.sessionId===t&&!Array.from(this.agentGroupManager.getAllGroups()).some(l=>l.sessionId===t&&l.agents.has(o.message.role))).map(o=>{const l=this.sessionManager.getSession(t);return this.renderMessage(l,o.message,-1,o.isStreaming)})}
                                            ${p(e===t&&this.busy&&this.streamManager.getAllStreamingMessages().filter(o=>o.sessionId===t).length===0,()=>n`
                                                <ai-loading-indicator></ai-loading-indicator>
                                            `)}
                                        </div>
                                    </wa-scroller>
                                </wa-tab-panel>
                            `:n``})}
                        <wa-button 
                            slot="nav"
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="New Chat"
                            @click="${()=>{this.createNewSession(),this.requestUpdate()}}">
                            <wa-icon name="plus" label="New Chat"></wa-icon>
                        </wa-button>
                    </wa-tab-group>
                    ${this.pendingToolApprovals.size>0?n`
                        <div class="tool-approval-section">
                            ${Array.from(this.pendingToolApprovals.entries()).map(([t,i])=>{const r=i.request.toolCalls,o=r.length;r.map(c=>{const u=c.function.arguments||"{}";let h={};try{h=JSON.parse(u)}catch{h={}}const A=Object.entries(h).map(([f,b])=>`${f}=${JSON.stringify(b)}`).join(", ");return`${c.function.name}${A?`(${A})`:"()"}`}).join(", ");const l=`Tool execution pending: ${o} tool${o>1?"s":""} (${r[0]?.function.name}${o>1?", ...":""})`;return n`
                                    <wa-details class="approval-details">
                                        <span slot="summary" class="approval-summary">
                                            <span class="approval-summary-text">${l}</span>
                                            <div class="approval-actions-inline">
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="brand"
                                                    @click="${c=>{c.stopPropagation(),i.resolve(!1),this.pendingToolApprovals.delete(t),this.requestUpdate()}}">
                                                    <wa-icon name="xmark" label="Cancel"></wa-icon>
                                                </wa-button>
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="success"
                                                    @click="${async c=>{c.stopPropagation();for(const[u,h]of i.allowListSelections.entries())if(h){const A=i.request.toolCalls.find(f=>f.id===u);if(A){const{ToolExecutor:f}=await j(async()=>{const{ToolExecutor:m}=await import("./main-DrWsvmgQ.js").then(v=>v.Q);return{ToolExecutor:m}},__vite__mapDeps([0,1,2,3])),b=new f,$=R.createExecutionContext(this),d=b.findCommand(A,$);d&&this.toolApprovalAllowlist.add(d.id)}}i.allowListSelections.size>0&&await this.providerManager.saveSettings(this.providerManager.getSettingsProviderName()||"",this.providerManager.getSettingsModel()||"",void 0,this.requireToolApproval,Array.from(this.toolApprovalAllowlist)),i.resolve(!0),this.pendingToolApprovals.delete(t),this.requestUpdate()}}">
                                                    <wa-icon name="check" label="Approve"></wa-icon>
                                                </wa-button>
                                            </div>
                                        </span>
                                        <div class="approval-content">
                                            <div class="approval-message">
                                                <strong>Agent "${i.role}" wants to execute the following tools:</strong>
                                                <ul class="tool-list">
                                                    ${r.map(c=>{const u=c.function.arguments||"{}";let h={};try{h=JSON.parse(u)}catch{h={}}const A=Object.entries(h).length>0?`(${Object.entries(h).map(([b,$])=>`${b}=${JSON.stringify($)}`).join(", ")})`:"()",f=i.allowListSelections.get(c.id)||!1;return n`
                                                            <li class="tool-list-item">
                                                                <label class="tool-item-label">
                                                                    <wa-checkbox
                                                                        ?checked="${f}"
                                                                        @change="${b=>{const $=b.target.checked;i.allowListSelections.set(c.id,$),this.requestUpdate()}}">
                                                                    </wa-checkbox>
                                                                    <span>Always allow</span>
                                                                </label>
                                                                <code>${c.function.name}${A}</code>
                                                            </li>
                                                        `})}
                                                </ul>
                                            </div>
                                        </div>
                                    </wa-details>
                                `})}
                        </div>
                    `:""}
                    <ai-chat-input
                        .value="${this.inputValue}"
                        .disabled="${this.busy}"
                        .busy="${this.busy}"
                        .hasProvider="${!!a}"
                        @input-change="${t=>{this.inputValue=t.detail.value}}"
                        @send="${()=>this.sendMessage()}"
                        @cancel="${()=>this.cancelStream()}"
                        @open-settings="${()=>this.openSettingsDialog()}">
                    </ai-chat-input>
                `)}
            </div>
        `}};x.styles=I`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .toolbar {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }


        .tool-approval-section {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-warning-border-normal);
            background-color: var(--wa-color-warning-fill-quiet);
        }

        .approval-details {
            width: 100%;
        }

        .approval-summary {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            width: 100%;
        }

        .approval-summary-text {
            flex: 1;
            min-width: 0;
        }

        .approval-actions-inline {
            display: flex;
            gap: 0.5rem;
            flex-shrink: 0;
        }

        .approval-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0.75rem 0;
        }

        .approval-message {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.875rem;
        }

        .approval-message strong {
            color: var(--wa-color-text-normal);
        }

        .tool-list {
            margin: 0.5rem 0 0 1.5rem;
            padding: 0;
            list-style: disc;
        }

        .tool-list li {
            margin: 0.25rem 0;
        }

        .tool-list-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0.5rem 0;
        }

        .tool-item-label {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-size: 0.875rem;
            cursor: pointer;
        }

        .tool-list code {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            padding: 0.125rem 0.25rem;
            background-color: var(--wa-color-neutral-fill-subtle);
            border-radius: var(--wa-border-radius-s);
        }

        .approval-actions {
            display: flex;
            gap: 0.5rem;
            flex-shrink: 0;
        }

        .chat-container {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            min-height: 0;
            overflow: hidden;
        }


        .chat-content {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        wa-tab-group {
            flex: 1;
            min-height: 0;
            display: flex;
            flex-direction: column;
        }

        wa-tab-group::part(base) {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            height: 100%;
            width: 100%;
        }

        wa-tab-panel[active] {
            display: grid;
            grid-template-rows: minmax(0, 1fr);
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
            --wa-scrollbar-width: 10px;
        }

        wa-tab::part(base) {
            padding: 3px 0.5rem;
        }

        wa-tab-panel {
            --padding: 0px;
        }

        ai-chat-input {
            flex-shrink: 0;
        }
    `;E([k()],x.prototype,"busy",2);E([k()],x.prototype,"inputValue",2);E([k()],x.prototype,"settingsDialogOpen",2);E([k()],x.prototype,"requireToolApproval",2);E([k()],x.prototype,"pendingToolApprovals",2);E([Y(X)],x.prototype,"onAIConfigChanged",1);x=E([q("k-aiview")],x);const ke=({})=>{ae.put("aiService",G)};export{ke as default};
