const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-CEvzTj27.js","assets/index-DoDY4M9O.js","assets/index-C2t38aP0.css","assets/main-DQjgvuwU.css"])))=>i.map(i=>d[i]);
import{m as Y,n as L,C as R,I as Q,J as X,k as Z,j,b as P,p as G,t as ee,L as te,a as se,H as ae,r as ie}from"./main-CEvzTj27.js";import{b as T,n as g,r as $,i as D,x as n,q as d,o as re,t as _,ad as oe,_ as q}from"./index-DoDY4M9O.js";var ne=Object.defineProperty,le=Object.getOwnPropertyDescriptor,z=(a,e,s,t)=>{for(var i=t>1?void 0:t?le(e,s):e,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=(t?o(e,s,i):o(i))||i);return t&&i&&ne(e,s,i),i};let k=class extends D{constructor(){super(...arguments),this.isStreaming=!1,this.showHeader=!0,this.attentionInputValue=""}formatTimestamp(){return new Date().toLocaleTimeString()}copyToClipboard(a){navigator.clipboard.writeText(a).catch(e=>{console.error("Failed to copy:",e)})}processMarkdownContent(a){return a.includes("code-block-wrapper")?a:a.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi,(e,s,t)=>`<div class="code-block-wrapper">
                <div class="code-block-header">
                    <wa-copy-button value="${this.escapeHtmlAttribute(t.trim())}" size="small" label="Copy code"></wa-copy-button>
                </div>
                <div class="code-block-content">
                    <pre><code${s}>${t}</code></pre>
                </div>
            </div>`)}escapeHtmlAttribute(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}handleResend(a){a&&(a.preventDefault(),a.stopPropagation()),this.message&&this.dispatchEvent(new CustomEvent("resend",{detail:{message:this.message,messageIndex:this.messageIndex},bubbles:!0,composed:!0}))}getAttentionIcon(a){switch(a){case"confirmation":return"check-circle";case"input":return"input";case"approval":return"hand";case"execution":return"play";case"info":return"info-circle";default:return"bell"}}updated(a){super.updated(a),a.has("attentionInputValue")&&this.dispatchEvent(new CustomEvent("attention-input-change",{detail:{value:this.attentionInputValue},bubbles:!0,composed:!0})),(a.has("message")||!this.hasAttribute("data-is-user"))&&this.updateAlignment()}updateAlignment(){if(this.message){const a=this.message.role==="user";this.setAttribute("data-is-user",String(a))}}handleAttentionResponse(a,e,s){this.message&&this.dispatchEvent(new CustomEvent("attention-response",{detail:{messageIndex:this.messageIndex,requestIndex:a,request:e,response:s},bubbles:!0,composed:!0}))}handleAction(a){const e=a();e instanceof Promise&&e.catch(s=>{console.error("Action failed:",s)})}render(){if(!this.message)return n``;const a=this.message,e=a.role==="user",s=a.requiresAttention&&(a.attentionRequests?.length||0)>0;return n`
            <div class="message-wrapper ${e?"user":"assistant"} ${this.isStreaming?"streaming":""} ${s?"requires-attention":""}">
                ${d(this.showHeader&&!e,()=>n`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="robot" 
                                label="${a.role}">
                            </wa-icon>
                            <span class="role-name">${a.role}</span>
                            ${d(s,()=>n`
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
                                @click="${()=>this.copyToClipboard(a.content)}">
                                <wa-icon slot="label" name="copy" label="Copy"></wa-icon>
                            </wa-button>
                            ${d(a.actions?.length,()=>n`
                                ${a.actions.map(t=>n`
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
                        ${re(this.processMarkdownContent(Y.parse(a.content||"")))}
                        ${d(this.isStreaming,()=>n`
                            <span class="streaming-cursor">▋</span>
                        `)}
                        ${d(s&&a.attentionRequests,()=>n`
                        <div class="attention-requests">
                            ${a.attentionRequests.map((t,i)=>n`
                                <div class="attention-request attention-${t.type}">
                                    <div class="attention-header">
                                        <wa-icon name="${this.getAttentionIcon(t.type)}" label="${t.type}"></wa-icon>
                                        <strong>${t.title}</strong>
                                        ${d(t.priority==="urgent"||t.priority==="high",()=>n`
                                            <span class="priority-badge priority-${t.priority}">${t.priority}</span>
                                        `)}
                                    </div>
                                    <div class="attention-message">${t.message}</div>
                                    <div class="attention-actions">
                                        ${d(t.type==="confirmation",()=>n`
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
                                        ${d(t.type==="input",()=>n`
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
                                        ${d(t.type==="approval",()=>n`
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
                                        ${d(t.type==="execution",()=>n`
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
                        ${d(a.canContinue&&!s,()=>n`
                            <div class="continue-workflow">
                                <wa-button
                                    variant="brand"
                                    appearance="filled"
                                    size="small"
                                    @click="${()=>this.dispatchEvent(new CustomEvent("continue-workflow",{detail:{message:a},bubbles:!0,composed:!0}))}">
                                    Continue Workflow
                                </wa-button>
                            </div>
                        `)}
                    </div>
                    ${d(e,()=>n`
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="Copy"
                            @click="${()=>this.copyToClipboard(a.content)}">
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
        `}};k.styles=T`
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
    `;z([g({type:Object,attribute:!1})],k.prototype,"message",2);z([g({type:Boolean})],k.prototype,"isStreaming",2);z([g({type:Boolean})],k.prototype,"showHeader",2);z([g({type:Number,attribute:!1})],k.prototype,"messageIndex",2);z([$()],k.prototype,"attentionInputValue",2);k=z([_("ai-chat-message")],k);var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,N=(a,e,s,t)=>{for(var i=t>1?void 0:t?de(e,s):e,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=(t?o(e,s,i):o(i))||i);return t&&i&&ce(e,s,i),i};let I=class extends D{constructor(){super(...arguments),this.value="",this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(a){const e=a.target;this.value=e.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(a){a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;const a=this.value;this.value="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),this.dispatchEvent(new CustomEvent("send",{detail:{value:a},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){return n`
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
                    
                    ${d(this.busy,()=>n`
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
        `}};I.styles=T`
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
    `;N([g({type:String})],I.prototype,"value",2);N([g({type:Boolean})],I.prototype,"disabled",2);N([g({type:Boolean})],I.prototype,"busy",2);N([g({type:Boolean})],I.prototype,"hasProvider",2);N([oe("wa-textarea")],I.prototype,"textareaElement",2);I=N([_("ai-chat-input")],I);var pe=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,H=(a,e,s,t)=>{for(var i=t>1?void 0:t?ge(e,s):e,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=(t?o(e,s,i):o(i))||i);return t&&i&&pe(e,s,i),i};let K=class extends D{constructor(){super(...arguments),this.message="No AI provider configured",this.hint="Click the settings button to configure"}render(){return n`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}};K.styles=T`
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
    `;H([g({type:String})],K.prototype,"message",2);H([g({type:String})],K.prototype,"hint",2);K=H([_("ai-empty-state")],K);var he=Object.getOwnPropertyDescriptor,ue=(a,e,s,t)=>{for(var i=t>1?void 0:t?he(e,s):e,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=o(i)||i);return i};let W=class extends D{render(){return n`
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
        `}};W.styles=T`
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
    `;W=ue([_("ai-loading-indicator")],W);var me=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,F=(a,e,s,t)=>{for(var i=t>1?void 0:t?ve(e,s):e,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=(t?o(e,s,i):o(i))||i);return t&&i&&me(e,s,i),i};let E=class extends D{constructor(){super(...arguments),this.isStreaming=!1,this.groupId=""}renderStatusIcon(a){switch(a){case"streaming":return n`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return n`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return n`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}copyToClipboard(a){navigator.clipboard.writeText(a).catch(e=>{console.error("Failed to copy:",e)})}render(){if(!this.agentInfo)return n``;const a=this.message?.requiresAttention&&(this.message.attentionRequests?.length||0)>0;return this.message?n`
            <div class="agent-response-card status-${this.agentInfo.status} ${a?"requires-attention":""}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                        <span>${this.agentInfo.label}</span>
                        ${this.renderStatusIcon(this.agentInfo.status)}
                        ${d(a,()=>n`
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
            `}};E.styles=T`
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
    `;F([g({type:Object,attribute:!1})],E.prototype,"agentInfo",2);F([g({type:Object,attribute:!1})],E.prototype,"message",2);F([g({type:Boolean})],E.prototype,"isStreaming",2);F([g({type:String})],E.prototype,"groupId",2);E=F([_("ai-agent-response-card")],E);var we=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,J=(a,e,s,t)=>{for(var i=t>1?void 0:t?fe(e,s):e,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=(t?o(e,s,i):o(i))||i);return t&&i&&we(e,s,i),i};let V=class extends D{handleAction(a){const e=a();e instanceof Promise&&e.catch(s=>{console.error("Action failed:",s)})}render(){if(!this.group)return n``;const a=Array.from(this.group.agents.values()),e=a.filter(l=>l.status==="completed").length,s=a.filter(l=>l.status==="streaming").length,t=a.filter(l=>l.status==="error").length,i=a.length>0&&e+t===a.length,r=a.length===1,o=a.filter(l=>l.message&&l.message.actions&&l.message.actions.length>0).flatMap(l=>l.message.actions.map(c=>({...c,agentRole:l.role,agentLabel:l.label}))).sort((l,c)=>{const h=l.requiresAttention?1:0;return(c.requiresAttention?1:0)-h});return n`
            <div class="agent-response-group">
                ${d(!r,()=>n`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="Multiple Agents"></wa-icon>
                            <span>Multiple Agents Responded</span>
                            ${d(!i,()=>n`
                                <span class="agent-status-badge">
                                    ${d(s>0,()=>n`
                                        <span class="status-streaming">${s} responding</span>
                                    `)}
                                    ${d(e>0,()=>n`
                                        <span class="status-completed">${e}/${a.length} completed</span>
                                    `)}
                                </span>
                            `)}
                            ${d(i,()=>n`
                                <span class="agent-status-badge status-all-completed">
                                    All completed (${e})
                                </span>
                            `)}
                        </div>
                    </div>
                `)}
                <div class="agent-group-content">
                    ${L(a,l=>l.role,l=>{const c=l.message||(l.status==="streaming"&&this.findStreamingMessage?this.findStreamingMessage(l.role):void 0);return n`
                            <ai-agent-response-card
                                .agentInfo="${l}"
                                .message="${c}"
                                .isStreaming="${l.status==="streaming"}"
                                .groupId="${this.group.id}">
                            </ai-agent-response-card>
                        `})}
                </div>
                ${d(o.length>0&&i,()=>n`
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
        `}};V.styles=T`
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
    `;J([g({type:Object,attribute:!1})],V.prototype,"group",2);J([g({type:Function,attribute:!1})],V.prototype,"findStreamingMessage",2);V=J([_("ai-agent-response-group")],V);var be=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,A=(a,e,s,t)=>{for(var i=t>1?void 0:t?ye(e,s):e,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=(t?o(e,s,i):o(i))||i);return t&&i&&be(e,s,i),i};let w=class extends D{constructor(){super(...arguments),this.open=!1,this.providers=[],this.selectedProviderName="",this.selectedModel="",this.availableModels=[],this.loadingModels=!1,this.requireToolApproval=!0,this.toolApprovalAllowlist=[],this.availableCommands=[],this.apiKey=""}onProviderChange(a){const e=a.target;this.selectedProviderName=e.value;const s=this.providers.find(t=>t.name===e.value);this.apiKey=s?.apiKey||"",this.dispatchEvent(new CustomEvent("provider-change",{detail:{providerName:e.value},bubbles:!0,composed:!0})),this.requestUpdate()}onApiKeyChange(a){const e=a.target;this.apiKey=e.value}async onPasteApiKey(){try{const a=await navigator.clipboard.readText();this.apiKey=a,this.requestUpdate()}catch(a){console.error("Failed to read from clipboard:",a)}}async onCopyApiKey(){if(this.apiKey)try{await navigator.clipboard.writeText(this.apiKey)}catch(a){console.error("Failed to copy to clipboard:",a)}}updated(a){if(a.has("selectedProviderName")||a.has("providers")){const e=this.providers.find(s=>s.name===this.selectedProviderName);e&&(this.apiKey=e.apiKey||"")}a.has("toolApprovalAllowlist")&&this.loadAllowedCommands()}onModelChange(a){const e=a.target;this.selectedModel=e.value,this.dispatchEvent(new CustomEvent("model-change",{detail:{model:e.value},bubbles:!0,composed:!0}))}onToolApprovalChange(a){const e=a.target;this.requireToolApproval=e.checked,this.dispatchEvent(new CustomEvent("tool-approval-change",{detail:{value:e.checked},bubbles:!0,composed:!0}))}onAllowlistChange(a,e){a.target.checked?this.toolApprovalAllowlist.includes(e)||(this.toolApprovalAllowlist=[...this.toolApprovalAllowlist,e]):this.toolApprovalAllowlist=this.toolApprovalAllowlist.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("allowlist-change",{detail:{allowlist:[...this.toolApprovalAllowlist]},bubbles:!0,composed:!0})),this.requestUpdate()}async firstUpdated(){await this.loadAllowedCommands()}async loadAllowedCommands(){if(this.toolApprovalAllowlist.length===0){this.availableCommands=[];return}const{commandRegistry:a}=await q(async()=>{const{commandRegistry:s}=await import("./main-CEvzTj27.js").then(t=>t.Q);return{commandRegistry:s}},__vite__mapDeps([0,1,2,3])),e=a.listCommands();this.availableCommands=this.toolApprovalAllowlist.map(s=>{const t=e[s];return{id:s,name:t?.name||s}}).sort((s,t)=>s.name.localeCompare(t.name))}save(){this.dispatchEvent(new CustomEvent("save",{detail:{providerName:this.selectedProviderName,model:this.selectedModel,apiKey:this.apiKey},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}render(){if(!this.open)return n``;const a=this.providers.find(e=>e.name===this.selectedProviderName);return n`
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
                        ${d(this.loadingModels,()=>n`
                            <div>Loading models...</div>
                        `,()=>n`
                            ${d(this.availableModels.length>0,()=>n`
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
                                    ${d(a,()=>n`
                                        <wa-option value="${a.model}">
                                            ${a.model}
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

                    ${d(this.requireToolApproval,()=>n`
                        <div class="settings-field">
                            <label>Commands allowed without approval:</label>
                            <div class="allowlist-container">
                                ${L(this.availableCommands,e=>e.id,e=>n`
                                    <label class="allowlist-item">
                                        <wa-checkbox
                                            ?checked="${this.toolApprovalAllowlist.includes(e.id)}"
                                            @change="${s=>this.onAllowlistChange(s,e.id)}">
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
        `}};w.styles=T`
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
    `;A([g({type:Boolean})],w.prototype,"open",2);A([g({type:Array,attribute:!1})],w.prototype,"providers",2);A([g({type:String})],w.prototype,"selectedProviderName",2);A([g({type:String})],w.prototype,"selectedModel",2);A([g({type:Array,attribute:!1})],w.prototype,"availableModels",2);A([g({type:Boolean})],w.prototype,"loadingModels",2);A([g({type:Boolean})],w.prototype,"requireToolApproval",2);A([g({type:Array,attribute:!1})],w.prototype,"toolApprovalAllowlist",2);A([$()],w.prototype,"availableCommands",2);A([$()],w.prototype,"apiKey",2);w=A([_("ai-settings-dialog")],w);class Ae{constructor(){this.sessions=new Map,this.sessionTitles=new Map,this.sessionTimestamps=new Map,this.activeSessionId="",this.archivedSessions=new Map}setSaveCallback(e){this.saveCallback=e}async save(){this.saveCallback&&await this.saveCallback()}async loadSessions(){const{appSettings:e}=await q(async()=>{const{appSettings:t}=await import("./main-CEvzTj27.js").then(i=>i.R);return{appSettings:t}},__vite__mapDeps([0,1,2,3])),s=await e.get("aiChatSessions");if(s&&Array.isArray(s.active)){for(const t of s.active)t.id&&t.history&&Array.isArray(t.history)&&(this.sessions.set(t.id,{history:t.history}),this.sessionTitles.set(t.id,t.title||"New Chat"),this.sessionTimestamps.set(t.id,{createdAt:t.createdAt||Date.now(),updatedAt:t.updatedAt||Date.now()}));s.active.length>0&&s.activeSessionId&&(this.sessions.has(s.activeSessionId)?this.activeSessionId=s.activeSessionId:this.activeSessionId=s.active[0].id)}if(s&&Array.isArray(s.archived))for(const t of s.archived)t.id&&t.history&&Array.isArray(t.history)&&this.archivedSessions.set(t.id,{id:t.id,history:t.history,title:t.title||"New Chat",createdAt:t.createdAt||Date.now(),updatedAt:t.updatedAt||Date.now()})}async persistSessions(){const e=Array.from(this.sessions.entries()).map(([i,r])=>{const o=this.sessionTimestamps.get(i)||{createdAt:Date.now(),updatedAt:Date.now()};return{id:i,history:r.history,title:this.sessionTitles.get(i)||"New Chat",createdAt:o.createdAt,updatedAt:o.updatedAt}}),s=Array.from(this.archivedSessions.values()),{appSettings:t}=await q(async()=>{const{appSettings:i}=await import("./main-CEvzTj27.js").then(r=>r.R);return{appSettings:i}},__vite__mapDeps([0,1,2,3]));await t.set("aiChatSessions",{active:e,archived:s,activeSessionId:this.activeSessionId})}createSession(){const e=`session-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.sessions.set(e,{history:[]}),this.sessionTitles.set(e,"New Chat"),this.sessionTimestamps.set(e,{createdAt:Date.now(),updatedAt:Date.now()}),this.activeSessionId=e,this.save(),e}async deleteSession(e){if(this.sessions.size<=1)return!1;const s=this.sessions.get(e),t=this.sessionTitles.get(e),i=this.sessionTimestamps.get(e);if(s&&t&&this.archivedSessions.set(e,{id:e,history:s.history,title:t,createdAt:i?.createdAt||Date.now(),updatedAt:Date.now()}),this.sessions.delete(e),this.sessionTitles.delete(e),this.sessionTimestamps.delete(e),this.activeSessionId===e){const r=Array.from(this.sessions.keys())[0];this.activeSessionId=r||""}return await this.save(),!0}async restoreSession(e){const s=this.archivedSessions.get(e);return s?(this.sessions.set(e,{history:s.history}),this.sessionTitles.set(e,s.title),this.sessionTimestamps.set(e,{createdAt:s.createdAt,updatedAt:Date.now()}),this.archivedSessions.delete(e),this.activeSessionId=e,await this.save(),!0):!1}async permanentlyDeleteSession(e){return this.sessions.has(e)?!1:(this.archivedSessions.delete(e),await this.save(),!0)}getSession(e){return this.sessions.get(e)}setSession(e,s){this.sessions.set(e,s)}getActiveSession(){if(this.activeSessionId)return this.sessions.get(this.activeSessionId)}setActiveSession(e){this.sessions.has(e)&&(this.activeSessionId=e)}getActiveSessionId(){return this.activeSessionId}getAllSessionIds(){return Array.from(this.sessions.keys())}getAllSessions(){return Array.from(this.sessions.entries()).map(([e,s])=>({id:e,history:s.history,title:this.sessionTitles.get(e)||"New Chat"}))}getSessionTitle(e){return this.sessionTitles.get(e)||this.archivedSessions.get(e)?.title||"New Chat"}setSessionTitle(e,s){if(this.sessions.has(e)){this.sessionTitles.set(e,s);const t=this.sessionTimestamps.get(e);t&&(t.updatedAt=Date.now()),this.save()}}generateTitle(e){const s=e.trim();if(!s)return"New Chat";const t=30;return s.length<=t?s:s.substring(0,t).trim()+"..."}addMessage(e,s){const t=this.sessions.get(e);if(t){t.history.push(s);const i=this.sessionTimestamps.get(e);i&&(i.updatedAt=Date.now()),this.save()}}getSessionCount(){return this.sessions.size}getArchivedSessions(){return Array.from(this.archivedSessions.values()).sort((e,s)=>s.updatedAt-e.updatedAt)}getArchivedSessionCount(){return this.archivedSessions.size}}class Se{constructor(e){this.streamingMessages=new Map,this.currentStreamingIndex=-1,this.pendingUpdate=!1,this.onUpdate=e}createStreamingMessage(e,s){const t=++this.currentStreamingIndex;return this.streamingMessages.set(t,{message:{role:e,content:""},isStreaming:!0,timestamp:new Date,sessionId:s}),t}getStreamingMessage(e){return this.streamingMessages.get(e)}updateStreamingMessage(e,s){const t=this.streamingMessages.get(e);t&&(t.message.content+=s,this.scheduleUpdate())}completeStreamingMessage(e,s){const t=this.streamingMessages.get(e);t&&(t.message=s,t.isStreaming=!1)}removeStreamingMessage(e){this.streamingMessages.delete(e)}getAllStreamingMessages(){return Array.from(this.streamingMessages.values())}getAllStreamingMessagesByRole(e){return Array.from(this.streamingMessages.values()).filter(s=>s.message.role===e)}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(t=>t.message.role===e)?.message}scheduleUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.updateAnimationFrame=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.onUpdate?.()}))}cancelUpdates(){this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1)}clearAll(){for(const[e,s]of this.streamingMessages.entries())s.isStreaming&&(s.isStreaming=!1);this.streamingMessages.clear(),this.cancelUpdates()}clearForSession(e){const s=[];for(const[t,i]of this.streamingMessages.entries())i.sessionId===e&&(i.isStreaming&&(i.isStreaming=!1),s.push(t));s.forEach(t=>this.streamingMessages.delete(t)),s.length>0&&this.scheduleUpdate()}reset(){this.clearAll(),this.currentStreamingIndex=-1}}class $e{constructor(e){this.aiService=e,this.settingsKey="aiViewChat",this.availableModels=[],this.loadingModels=!1}async initialize(){await this.loadProviders(),await this.loadSettings()}async loadProviders(){this.providers=await this.aiService.getProviders()||[]}async loadSettings(){if(this.providers&&this.providers.length>0){const e=await this.aiService.getDefaultProvider();this.selectedProvider=e,this.settingsProviderName=e.name,this.settingsModel=e.model}}getRequireToolApproval(){return!1}async saveSettings(e,s,t,i,r){const l={...await R.get(this.settingsKey)||{}};i!==void 0&&(l.requireToolApproval=i),r!==void 0&&(l.toolApprovalAllowlist=r),await R.set(this.settingsKey,l);const c=this.providers?.find(h=>h.name===e);if(c){const h={...c,model:s,...t!==void 0&&{apiKey:t}};this.selectedProvider=h,this.settingsProviderName=e,this.settingsModel=s,await this.updateProviderInAIConfig(e,{model:s,...t!==void 0&&{apiKey:t}}),await this.aiService.setDefaultProvider(e)}}async updateProviderInAIConfig(e,s){const{KEY_AI_CONFIG:t}=await q(async()=>{const{KEY_AI_CONFIG:r}=await import("./main-CEvzTj27.js").then(o=>o.S);return{KEY_AI_CONFIG:r}},__vite__mapDeps([0,1,2,3])),i=await R.get(t)||{};if(i.providers&&Array.isArray(i.providers)){const r=i.providers.findIndex(o=>o.name===e);r>=0&&(i.providers[r]={...i.providers[r],...s},await R.set(t,i))}}async loadToolApprovalAllowlist(){return(await R.get(this.settingsKey)||{}).toolApprovalAllowlist||[]}async fetchModels(e){const s=this.providers?.find(t=>t.name===e);if(s){this.loadingModels=!0;try{const i=`${s.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,r=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${s.apiKey}`,"Content-Type":"application/json"}});if(!r.ok)throw new Error(`Failed to fetch models: ${r.statusText}`);const l=(await r.json()).data||[];this.availableModels=l.map(c=>({id:c.id,name:c.name||c.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(t){throw this.availableModels=[],t}finally{this.loadingModels=!1}}}getProviders(){return this.providers||[]}getSelectedProvider(){return this.selectedProvider}setSelectedProvider(e){this.selectedProvider=e}async getSettingsProviderName(){if(!this.settingsProviderName){const e=await this.aiService.getDefaultProvider();this.settingsProviderName=e.name}return this.settingsProviderName}setSettingsProviderName(e){this.settingsProviderName=e}async getSettingsModel(){if(!this.settingsModel){const e=await this.aiService.getDefaultProvider();this.settingsModel=e.model}return this.settingsModel}setSettingsModel(e){this.settingsModel=e}getAvailableModels(){return this.availableModels}isLoadingModels(){return this.loadingModels}resetModelSelection(){this.availableModels=[],this.settingsModel=void 0}}class xe{constructor(){this.groups=new Map,this.pausedWorkflows=new Map}createGroup(e,s,t,i,r){const o=`group-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.currentGroupId=o;const l={id:o,sessionId:e,userMessageIndex:s,userMessage:t,timestamp:new Date,agents:new Map,messageIndices:new Map};return i.forEach(c=>{const{label:h,icon:u}=r(c);l.agents.set(c,{role:c,label:h,icon:u,status:"streaming"})}),this.groups.set(o,l),o}getGroup(e){return this.groups.get(e)}updateAgentStatus(e,s,t,i,r){const o=this.groups.get(e);if(!o)return;const l=o.agents.get(s);l&&(l.status=t,i&&(l.message=i),r!==void 0&&(l.messageIndex=r,o.messageIndices.set(s,r)))}getGroupsForSession(e){return Array.from(this.groups.values()).filter(s=>s.sessionId===e)}findGroupForUserMessage(e,s,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.userMessageIndex===s&&i.userMessage===t)}findGroupForMessage(e,s,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.messageIndices.get(s)===t)}getCurrentGroupId(){return this.currentGroupId}setCurrentGroupId(e){this.currentGroupId=e}clearCurrentGroup(){this.currentGroupId=void 0}storePausedWorkflow(e,s,t){this.pausedWorkflows.set(e,{token:e,options:s,results:t})}getPausedWorkflow(e){return this.pausedWorkflows.get(e)}getAllPausedWorkflows(){return Array.from(this.pausedWorkflows.values())}clearPausedWorkflow(e){this.pausedWorkflows.delete(e)}clearAllPausedWorkflows(){this.pausedWorkflows.clear()}getAllGroups(){return Array.from(this.groups.values())}clearAll(){this.groups.clear(),this.currentGroupId=void 0}}var Me=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,M=(a,e,s,t)=>{for(var i=t>1?void 0:t?Ce(e,s):e,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=(t?o(e,s,i):o(i))||i);return t&&i&&Me(e,s,i),i};let y=class extends Z{constructor(){super(...arguments),this.sessionManager=new Ae,this.streamManager=new Se(()=>this.requestUpdate()),this.providerManager=new $e(j),this.agentGroupManager=new xe,this.busy=!1,this.inputValue="",this.settingsDialogOpen=!1,this.requireToolApproval=!0,this.toolApprovalAllowlist=new Set,this.settingsProviderName="",this.settingsModel="",this.pendingToolApprovals=new Map}onAIConfigChanged(){this.doBeforeUI()}async doBeforeUI(){this.sessionManager.setSaveCallback(()=>this.sessionManager.persistSessions()),await this.sessionManager.loadSessions(),this.sessionManager.getSessionCount()===0&&this.sessionManager.createSession(),await this.providerManager.initialize(),await this.loadSettings(),this.settingsProviderName=await this.providerManager.getSettingsProviderName()||"",this.settingsModel=await this.providerManager.getSettingsModel()||"",this.requestUpdate()}async loadSettings(){const{appSettings:a}=await q(async()=>{const{appSettings:t}=await import("./main-CEvzTj27.js").then(i=>i.R);return{appSettings:t}},__vite__mapDeps([0,1,2,3])),e=await a.get("aiViewChat")||{};this.requireToolApproval=e.requireToolApproval!==void 0?e.requireToolApproval:!0;const s=await this.providerManager.loadToolApprovalAllowlist();this.toolApprovalAllowlist=new Set(s)}createNewSession(){this.sessionManager.createSession(),this.inputValue="",this.requestUpdate()}async deleteSession(a){if(!await this.sessionManager.deleteSession(a)){P("Cannot delete the last session");return}this.inputValue="",this.requestUpdate()}scrollToBottom(){requestAnimationFrame(()=>{const a=this.sessionManager.getActiveSessionId();if(!a)return;const s=this.shadowRoot?.querySelector(`wa-tab-panel[name="${a}"]`)?.querySelector("wa-scroller.chat-messages");if(s){const t=s.shadowRoot?.querySelector(".scroll-container");t?t.scrollTop=t.scrollHeight:s.scrollTo&&s.scrollTo({top:s.scrollHeight,behavior:"smooth"})}})}updated(a){super.updated(a),a.has("busy")&&this.scrollToBottom()}async sendMessage(){const a=this.inputValue.trim();if(!a||this.busy)return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const s=this.shadowRoot?.querySelector("wa-tab-group");s?.active&&(e=s.active,this.sessionManager.setActiveSession(e))}e&&(this.inputValue="",this.requestUpdate(),await this.handlePrompt(a))}async runCommand(a,e){const s=e||G,t=a.trim().split(/\s+/);if(t.length===0)return;const i=t.shift(),r=s.getCommand(i);if(!r){P("Command not found: "+i);return}const o={};r.parameters&&t.forEach((c,h)=>{r.parameters&&r.parameters[h]&&(o[r.parameters[h].name]=c)});const l=s.createExecutionContext(o);await s.execute(i,l),this.requestUpdate()}async handlePrompt(a){if(a.startsWith("/")){await this.runCommand(a.substring(1),G);return}const e=this.providerManager.getSelectedProvider();if(!e){P("Please configure AI provider in settings");return}let s=this.sessionManager.getActiveSessionId();if(!s)this.createNewSession(),s=this.sessionManager.getActiveSessionId();else{const c=this.shadowRoot?.querySelector("wa-tab-group");c?.active&&(s=c.active,this.sessionManager.setActiveSession(s))}if(!s)return;const t=j.createMessage(a),i=s,r=this.sessionManager.getSession(i);if(!r)return;if(r.history.push(t),r.history.length===1){const c=this.sessionManager.generateTitle(a);this.sessionManager.setSessionTitle(i,c)}await this.sessionManager.persistSessions(),this.requestUpdate(),this.busy=!0,this.abortController=new AbortController;const o=new Map,l={history:[...r.history]};ee.runAsync("Calling AI assistant",async()=>{const c=G.createExecutionContext(),h=te.createChild({...c}),u=j.getAgentContributions(),S=u.filter(p=>p.canHandle?p.canHandle({...h.getProxy(),userPrompt:a}):!0).sort((p,m)=>(m.priority||0)-(p.priority||0)),f=S.length>0?S.map(p=>p.role):["assistant"],b=this.sessionManager.getSession(i);if(!b)return;const x=this.agentGroupManager.createGroup(i,b.history.length-1,t,f,p=>{const m=u.find(v=>v.role===p);return{label:m?.label||p,icon:m?.icon||"robot"}});return j.executeAgentWorkflow({chatContext:l,chatConfig:e,callContext:h,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:f,requireToolApproval:this.requireToolApproval,onToolApprovalRequest:async(p,m)=>{const{ToolExecutor:v}=await q(async()=>{const{ToolExecutor:U}=await import("./main-CEvzTj27.js").then(O=>O.U);return{ToolExecutor:U}},__vite__mapDeps([0,1,2,3])),C=new v,B=G.createExecutionContext();return m.toolCalls.every(U=>{const O=C.findCommand(U,B);return O&&this.toolApprovalAllowlist.has(O.id)})?!0:new Promise(U=>{const O=`approval-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.pendingToolApprovals.set(O,{role:p,request:m,resolve:U,allowListSelections:new Map}),this.requestUpdate()})},onAgentStart:p=>{const m=this.streamManager.createStreamingMessage(p,i);o.set(p,m),this.agentGroupManager.updateAgentStatus(x,p,"streaming"),this.requestUpdate()},onToken:(p,m)=>{const v=o.get(p);v!==void 0&&this.streamManager.updateStreamingMessage(v,m),this.requestUpdate()},onAgentComplete:async(p,m)=>{const v=this.sessionManager.getSession(i);if(!v)return;const C=o.get(p);if(C!==void 0){this.streamManager.completeStreamingMessage(C,m);const B=v.history.length;v.history.push(m),o.delete(p),this.streamManager.removeStreamingMessage(C),this.agentGroupManager.updateAgentStatus(x,p,"completed",m,B),await this.sessionManager.persistSessions(),this.requestUpdate()}},onAgentError:(p,m)=>{if(!this.sessionManager.getSession(i))return;const C=o.get(p);C!==void 0&&(this.streamManager.removeStreamingMessage(C),o.delete(p)),this.agentGroupManager.updateAgentStatus(x,p,"error",{role:p,content:`Error: ${m.message}`}),this.requestUpdate(),P(`Agent ${p} error: ${m.message}`)}}).then(()=>{this.agentGroupManager.clearCurrentGroup()})}).catch(c=>{c?.name!=="AbortError"&&P(`${c}`)}).finally(async()=>{this.busy=!1,this.abortController=void 0,this.streamManager.clearForSession(i),this.agentGroupManager.clearCurrentGroup(),await this.sessionManager.persistSessions(),this.requestUpdate()})}cancelStream(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.busy=!1),this.streamManager.cancelUpdates()}async openSettingsDialog(){this.settingsDialogOpen=!0;const a=this.providerManager.getSelectedProvider(),e=a?.name||this.providerManager.getProviders()[0]?.name;if(e){this.providerManager.setSettingsProviderName(e),a?.model&&this.providerManager.setSettingsModel(a.model);try{await this.providerManager.fetchModels(e)}catch(s){P(`Failed to fetch models: ${s}`)}}this.requestUpdate()}closeSettingsDialog(){this.settingsDialogOpen=!1,this.providerManager.resetModelSelection(),this.requestUpdate()}async onProviderChange(a){this.providerManager.setSettingsProviderName(a),this.providerManager.setSettingsModel(void 0),this.providerManager.resetModelSelection();try{await this.providerManager.fetchModels(a)}catch(e){P(`Failed to fetch models: ${e}`)}this.requestUpdate()}async onModelChange(a){const e=a.target;this.providerManager.setSettingsModel(e.value)}async saveSettingsAndClose(a){const e=await this.providerManager.getSettingsProviderName(),s=await this.providerManager.getSettingsModel();if(!e||!s){P("Please select both provider and model");return}await this.providerManager.saveSettings(e,s,a,this.requireToolApproval,Array.from(this.toolApprovalAllowlist)),this.settingsProviderName=e,this.settingsModel=s,this.settingsDialogOpen=!1,se("Settings saved"),this.requestUpdate()}renderMessage(a,e,s,t){return n`
            <ai-chat-message
                .message="${e}"
                .isStreaming="${t||!1}"
                .showHeader="${!0}"
                .messageIndex="${s}"
                @resend="${i=>{this.handleResend(i.detail.message)}}">
            </ai-chat-message>
        `}async handleResend(a){if(!a||a.role!=="user")return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const s=this.shadowRoot?.querySelector("wa-tab-group");s?.active&&(e=s.active,this.sessionManager.setActiveSession(e))}e&&await this.handlePrompt(a.content)}render(){const a=this.sessionManager.getAllSessionIds(),e=this.sessionManager.getActiveSessionId(),s=this.providerManager.getSelectedProvider();return n`
            <div class="chat-container">
                ${d(this.settingsDialogOpen,()=>n`
                    <ai-settings-dialog
                        .open="${this.settingsDialogOpen}"
                        .providers="${this.providerManager.getProviders()}"
                        .selectedProviderName="${this.settingsProviderName}"
                        .selectedModel="${this.settingsModel}"
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
                
                ${d(a.length>0,()=>n`
                    <wa-tab-group 
                        active="${e||a[0]||""}" 
                        @wa-tab-show="${t=>{const i=t.detail.panel;this.sessionManager.getSession(i)&&(this.sessionManager.setActiveSession(i),this.inputValue="",this.requestUpdate())}}">
                        ${L(a,t=>t,(t,i)=>{const r=this.sessionManager.getSession(t);return r?n`
                                <wa-tab panel="${t}">
                                    <span>${this.sessionManager.getSessionTitle(t)||`Chat ${i+1}`}</span>
                                    ${d(a.length>1,()=>n`
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
                                                            @resend="${u=>{this.handleResend(u.detail.message)}}">
                                                        </ai-chat-message>
                                                        <ai-agent-response-group
                                                            .group="${c}"
                                                            .findStreamingMessage="${u=>this.streamManager.findStreamingMessage(u)}">
                                                        </ai-agent-response-group>
                                                    `:this.agentGroupManager.findGroupForMessage(t,o.role,l)?n``:this.renderMessage(r,o,l)})}
                                            ${this.streamManager.getAllStreamingMessages().filter(o=>o.sessionId===t&&!Array.from(this.agentGroupManager.getAllGroups()).some(l=>l.sessionId===t&&l.agents.has(o.message.role))).map(o=>{const l=this.sessionManager.getSession(t);return this.renderMessage(l,o.message,-1,o.isStreaming)})}
                                            ${d(e===t&&this.busy&&this.streamManager.getAllStreamingMessages().filter(o=>o.sessionId===t).length===0,()=>n`
                                                <ai-loading-indicator></ai-loading-indicator>
                                            `)}
                                        </div>
                                    </wa-scroller>
                                </wa-tab-panel>
                            `:n``})}
                        ${d(this.sessionManager.getArchivedSessionCount()>0,()=>n`
                            <wa-dropdown 
                                slot="nav"
                                placement="bottom-end">
                                <wa-button 
                                    slot="trigger"
                                    variant="neutral"
                                    appearance="plain"
                                    size="small"
                                    title="Archived Sessions"
                                    with-caret>
                                    <wa-icon name="clock-rotate-left" label="Archived Sessions"></wa-icon>
                                    <span style="margin-left: 0.25rem;">${this.sessionManager.getArchivedSessionCount()}</span>
                                </wa-button>
                                <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                                    Archived Sessions
                                </h6>
                                ${this.sessionManager.getArchivedSessions().map(t=>n`
                                    <wa-dropdown-item 
                                        @click="${async()=>{await this.sessionManager.restoreSession(t.id),this.requestUpdate()}}">
                                        <wa-icon name="history" label="Restore" slot="icon"></wa-icon>
                                        <span style="flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis;">
                                            ${t.title}
                                        </span>
                                        <span style="font-size: 0.75rem; color: var(--wa-color-neutral-50); margin-left: 0.5rem;">
                                            ${new Date(t.updatedAt).toLocaleDateString()}
                                        </span>
                                    </wa-dropdown-item>
                                `)}
                                <wa-divider></wa-divider>
                                <wa-dropdown-item 
                                    @click="${async()=>{const t=this.sessionManager.getArchivedSessionCount();if(await ae(`Are you sure you want to permanently delete all ${t} archived session${t>1?"s":""}?`)){for(const i of this.sessionManager.getArchivedSessions())await this.sessionManager.permanentlyDeleteSession(i.id);this.requestUpdate()}}}">
                                    <wa-icon name="trash" label="Delete All" slot="icon"></wa-icon>
                                    <span>Delete All Archived</span>
                                </wa-dropdown-item>
                            </wa-dropdown>
                        `)}
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
                `)}
                
                ${d(!s,()=>n`
                    <ai-empty-state
                        message="No AI provider configured"
                        hint="Click the settings button to configure">
                    </ai-empty-state>
                `)}

                ${d(a.length>0,()=>n`
                    ${this.pendingToolApprovals.size>0?n`
                        <div class="tool-approval-section">
                            ${Array.from(this.pendingToolApprovals.entries()).map(([t,i])=>{const r=i.request.toolCalls,o=r.length;r.map(c=>{const h=c.function.arguments||"{}";let u={};try{u=JSON.parse(h)}catch{u={}}const S=Object.entries(u).map(([f,b])=>`${f}=${JSON.stringify(b)}`).join(", ");return`${c.function.name}${S?`(${S})`:"()"}`}).join(", ");const l=`Tool execution pending: ${o} tool${o>1?"s":""} (${r[0]?.function.name}${o>1?", ...":""})`;return n`
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
                                                    @click="${async c=>{c.stopPropagation();for(const[h,u]of i.allowListSelections.entries())if(u){const S=i.request.toolCalls.find(f=>f.id===h);if(S){const{ToolExecutor:f}=await q(async()=>{const{ToolExecutor:m}=await import("./main-CEvzTj27.js").then(v=>v.U);return{ToolExecutor:m}},__vite__mapDeps([0,1,2,3])),b=new f,x=G.createExecutionContext(),p=b.findCommand(S,x);p&&this.toolApprovalAllowlist.add(p.id)}}if(i.allowListSelections.size>0){const h=await this.providerManager.getSettingsProviderName(),u=await this.providerManager.getSettingsModel();await this.providerManager.saveSettings(h||"",u||"",void 0,this.requireToolApproval,Array.from(this.toolApprovalAllowlist))}i.resolve(!0),this.pendingToolApprovals.delete(t),this.requestUpdate()}}">
                                                    <wa-icon name="check" label="Approve"></wa-icon>
                                                </wa-button>
                                            </div>
                                        </span>
                                        <div class="approval-content">
                                            <div class="approval-message">
                                                <strong>Agent "${i.role}" wants to execute the following tools:</strong>
                                                <ul class="tool-list">
                                                    ${r.map(c=>{const h=c.function.arguments||"{}";let u={};try{u=JSON.parse(h)}catch{u={}}const S=Object.entries(u).length>0?`(${Object.entries(u).map(([b,x])=>`${b}=${JSON.stringify(x)}`).join(", ")})`:"()",f=i.allowListSelections.get(c.id)||!1;return n`
                                                            <li class="tool-list-item">
                                                                <label class="tool-item-label">
                                                                    <wa-checkbox
                                                                        ?checked="${f}"
                                                                        @change="${b=>{const x=b.target.checked;i.allowListSelections.set(c.id,x),this.requestUpdate()}}">
                                                                    </wa-checkbox>
                                                                    <span>Always allow</span>
                                                                </label>
                                                                <code>${c.function.name}${S}</code>
                                                            </li>
                                                        `})}
                                                </ul>
                                            </div>
                                        </div>
                                    </wa-details>
                                `})}
                        </div>
                    `:""}
                `)}
                
                ${d(a.length>0,()=>n`
                    <ai-chat-input
                        .value="${this.inputValue}"
                        .disabled="${this.busy}"
                        .busy="${this.busy}"
                        .hasProvider="${!!s}"
                        @input-change="${t=>{this.inputValue=t.detail.value}}"
                        @send="${()=>this.sendMessage()}"
                        @cancel="${()=>this.cancelStream()}"
                        @open-settings="${()=>this.openSettingsDialog()}">
                    </ai-chat-input>
                `)}
            </div>
        `}};y.styles=T`
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
    `;M([$()],y.prototype,"busy",2);M([$()],y.prototype,"inputValue",2);M([$()],y.prototype,"settingsDialogOpen",2);M([$()],y.prototype,"requireToolApproval",2);M([$()],y.prototype,"settingsProviderName",2);M([$()],y.prototype,"settingsModel",2);M([$()],y.prototype,"pendingToolApprovals",2);M([Q(X)],y.prototype,"onAIConfigChanged",1);y=M([_("k-aiview")],y);const Te=({})=>{ie.put("aiService",j)};export{Te as default};
