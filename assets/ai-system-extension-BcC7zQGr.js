const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-CpKkRoMP.js","assets/index-D_931DYw.js","assets/index-aP6FMjSZ.css","assets/main-DQjgvuwU.css"])))=>i.map(i=>d[i]);
import{b as S,n as m,r as v,i as q,x as n,h as p,o as re,t as C,a8 as ne,j as L,_ as T}from"./index-D_931DYw.js";import{m as le,B as M,J as ce,L as ie,k as oe,j,b as N,o as G,t as de,M as pe,H as Z,K as he,s as W,N as ge,O as H,Q as ue,A as me,R as Y,e as J,S as ve,r as we,U as fe,v as se,u as ae,h as be,V as ye}from"./main-CpKkRoMP.js";const Ae=`You are an assistant in a web application with workspace, editors, and AI chat.

**Tools:**
Commands are exposed as AI-callable tools. Tools are context-aware - available commands depend on active editor, selected files, and workspace state.

**Tool Usage Rules:**
1. If tools are available and match the request, use them - don't describe manual steps
2. Read tool descriptions/parameters to select the correct tool
3. Call tools in sequence for multi-step tasks
4. After successful tool execution, provide a final response - don't loop or call more tools unless explicitly requested
5. If no tools are available, explain what context is needed

Keep responses concise. Use tools when available rather than discussing alternatives.

`;var xe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,U=(s,e,a,t)=>{for(var i=t>1?void 0:t?$e(e,a):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&xe(e,a,i),i};let P=class extends q{constructor(){super(...arguments),this.isStreaming=!1,this.showHeader=!0,this.attentionInputValue=""}formatTimestamp(){return new Date().toLocaleTimeString()}copyToClipboard(s){navigator.clipboard.writeText(s).catch(e=>{console.error("Failed to copy:",e)})}processMarkdownContent(s){return s.includes("code-block-wrapper")?s:s.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi,(e,a,t)=>`<div class="code-block-wrapper">
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
                        ${re(this.processMarkdownContent(le.parse(s.content||"")))}
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
                                                    @input="${o=>{this.attentionInputValue=o.target.value}}"
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
        `}};P.styles=S`
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
    `;U([m({type:Object,attribute:!1})],P.prototype,"message",2);U([m({type:Boolean})],P.prototype,"isStreaming",2);U([m({type:Boolean})],P.prototype,"showHeader",2);U([m({type:Number,attribute:!1})],P.prototype,"messageIndex",2);U([v()],P.prototype,"attentionInputValue",2);P=U([C("ai-chat-message")],P);var Se=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,O=(s,e,a,t)=>{for(var i=t>1?void 0:t?Ce(e,a):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&Se(e,a,i),i};let I=class extends q{constructor(){super(...arguments),this.value="",this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(s){const e=s.target;this.value=e.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(s){s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;const s=this.value;this.value="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),this.dispatchEvent(new CustomEvent("send",{detail:{value:s},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){return n`
            <div class="input-container">
                <div class="input-row">
                    <wa-textarea
                        placeholder="Type your message and press Enter..."
                        size="small"
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
                            size="small"
                            @click="${this.cancel}">
                            <wa-icon name="stop" label="Stop"></wa-icon>
                        </wa-button>
                    `)}

                    <wa-button
                        appearance="plain"
                        size="small"
                        @click="${this.openSettings}">
                        <wa-icon name="gear" label="Settings"></wa-icon>
                    </wa-button>
                </div>
            </div>
        `}};I.styles=S`
        :host {
            display: block;
            width: 100%;
        }

        .input-container {
            margin-bottom: 0.25rem;
            margin-left: 0.25rem;
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
    `;O([m({type:String})],I.prototype,"value",2);O([m({type:Boolean})],I.prototype,"disabled",2);O([m({type:Boolean})],I.prototype,"busy",2);O([m({type:Boolean})],I.prototype,"hasProvider",2);O([ne("wa-textarea")],I.prototype,"textareaElement",2);I=O([C("ai-chat-input")],I);var ke=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,ee=(s,e,a,t)=>{for(var i=t>1?void 0:t?Me(e,a):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&ke(e,a,i),i};let V=class extends q{constructor(){super(...arguments),this.message="No AI provider configured",this.hint="Click the settings button to configure"}render(){return n`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}};V.styles=S`
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
    `;ee([m({type:String})],V.prototype,"message",2);ee([m({type:String})],V.prototype,"hint",2);V=ee([C("ai-empty-state")],V);var Te=Object.getOwnPropertyDescriptor,Pe=(s,e,a,t)=>{for(var i=t>1?void 0:t?Te(e,a):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=r(i)||i);return i};let Q=class extends q{render(){return n`
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
        `}};Q.styles=S`
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
    `;Q=Pe([C("ai-loading-indicator")],Q);var Ie=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,K=(s,e,a,t)=>{for(var i=t>1?void 0:t?Ee(e,a):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&Ie(e,a,i),i};let _=class extends q{constructor(){super(...arguments),this.isStreaming=!1,this.groupId=""}renderStatusIcon(s){switch(s){case"streaming":return n`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return n`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return n`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}copyToClipboard(s){navigator.clipboard.writeText(s).catch(e=>{console.error("Failed to copy:",e)})}render(){if(!this.agentInfo)return n``;const s=this.message?.requiresAttention&&(this.message.attentionRequests?.length||0)>0;return this.message?n`
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
            `}};_.styles=S`
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
    `;K([m({type:Object,attribute:!1})],_.prototype,"agentInfo",2);K([m({type:Object,attribute:!1})],_.prototype,"message",2);K([m({type:Boolean})],_.prototype,"isStreaming",2);K([m({type:String})],_.prototype,"groupId",2);_=K([C("ai-agent-response-card")],_);var _e=Object.defineProperty,De=Object.getOwnPropertyDescriptor,te=(s,e,a,t)=>{for(var i=t>1?void 0:t?De(e,a):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&_e(e,a,i),i};let F=class extends q{handleAction(s){const e=s();e instanceof Promise&&e.catch(a=>{console.error("Action failed:",a)})}render(){if(!this.group)return n``;const s=Array.from(this.group.agents.values()),e=s.filter(l=>l.status==="completed").length,a=s.filter(l=>l.status==="streaming").length,t=s.filter(l=>l.status==="error").length,i=s.length>0&&e+t===s.length,o=s.length===1,r=s.filter(l=>l.message&&l.message.actions&&l.message.actions.length>0).flatMap(l=>l.message.actions.map(c=>({...c,agentRole:l.role,agentLabel:l.label}))).sort((l,c)=>{const g=l.requiresAttention?1:0;return(c.requiresAttention?1:0)-g});return n`
            <div class="agent-response-group">
                ${p(!o,()=>n`
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
                ${p(r.length>0&&i,()=>n`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="Quick Actions"></wa-icon>
                            <span>Quick Actions</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${L(r,(l,c)=>c.toString(),l=>n`
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
        `}};F.styles=S`
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
    `;te([m({type:Object,attribute:!1})],F.prototype,"group",2);te([m({type:Function,attribute:!1})],F.prototype,"findStreamingMessage",2);F=te([C("ai-agent-response-group")],F);class qe{constructor(){this.sessions=new Map,this.sessionTitles=new Map,this.sessionTimestamps=new Map,this.activeSessionId="",this.archivedSessions=new Map}setSaveCallback(e){this.saveCallback=e}async save(){this.saveCallback&&await this.saveCallback()}async loadSessions(){const{appSettings:e}=await T(async()=>{const{appSettings:t}=await import("./main-CpKkRoMP.js").then(i=>i.a4);return{appSettings:t}},__vite__mapDeps([0,1,2,3])),a=await e.get("aiChatSessions");if(a&&Array.isArray(a.active)){for(const t of a.active)t.id&&t.history&&Array.isArray(t.history)&&(this.sessions.set(t.id,{history:t.history}),this.sessionTitles.set(t.id,t.title||"New Chat"),this.sessionTimestamps.set(t.id,{createdAt:t.createdAt||Date.now(),updatedAt:t.updatedAt||Date.now()}));a.active.length>0&&a.activeSessionId&&(this.sessions.has(a.activeSessionId)?this.activeSessionId=a.activeSessionId:this.activeSessionId=a.active[0].id)}if(a&&Array.isArray(a.archived))for(const t of a.archived)t.id&&t.history&&Array.isArray(t.history)&&this.archivedSessions.set(t.id,{id:t.id,history:t.history,title:t.title||"New Chat",createdAt:t.createdAt||Date.now(),updatedAt:t.updatedAt||Date.now()})}async persistSessions(){const e=Array.from(this.sessions.entries()).map(([i,o])=>{const r=this.sessionTimestamps.get(i)||{createdAt:Date.now(),updatedAt:Date.now()};return{id:i,history:o.history,title:this.sessionTitles.get(i)||"New Chat",createdAt:r.createdAt,updatedAt:r.updatedAt}}),a=Array.from(this.archivedSessions.values()),{appSettings:t}=await T(async()=>{const{appSettings:i}=await import("./main-CpKkRoMP.js").then(o=>o.a4);return{appSettings:i}},__vite__mapDeps([0,1,2,3]));await t.set("aiChatSessions",{active:e,archived:a,activeSessionId:this.activeSessionId})}createSession(){const e=`session-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.sessions.set(e,{history:[]}),this.sessionTitles.set(e,"New Chat"),this.sessionTimestamps.set(e,{createdAt:Date.now(),updatedAt:Date.now()}),this.activeSessionId=e,this.save(),e}async deleteSession(e){if(this.sessions.size<=1)return!1;const a=this.sessions.get(e),t=this.sessionTitles.get(e),i=this.sessionTimestamps.get(e);if(a&&t&&this.archivedSessions.set(e,{id:e,history:a.history,title:t,createdAt:i?.createdAt||Date.now(),updatedAt:Date.now()}),this.sessions.delete(e),this.sessionTitles.delete(e),this.sessionTimestamps.delete(e),this.activeSessionId===e){const o=Array.from(this.sessions.keys())[0];this.activeSessionId=o||""}return await this.save(),!0}async restoreSession(e){const a=this.archivedSessions.get(e);return a?(this.sessions.set(e,{history:a.history}),this.sessionTitles.set(e,a.title),this.sessionTimestamps.set(e,{createdAt:a.createdAt,updatedAt:Date.now()}),this.archivedSessions.delete(e),this.activeSessionId=e,await this.save(),!0):!1}async permanentlyDeleteSession(e){return this.sessions.has(e)?!1:(this.archivedSessions.delete(e),await this.save(),!0)}getSession(e){return this.sessions.get(e)}setSession(e,a){this.sessions.set(e,a)}getActiveSession(){if(this.activeSessionId)return this.sessions.get(this.activeSessionId)}setActiveSession(e){this.sessions.has(e)&&(this.activeSessionId=e)}getActiveSessionId(){return this.activeSessionId}getAllSessionIds(){return Array.from(this.sessions.keys())}getAllSessions(){return Array.from(this.sessions.entries()).map(([e,a])=>({id:e,history:a.history,title:this.sessionTitles.get(e)||"New Chat"}))}getSessionTitle(e){return this.sessionTitles.get(e)||this.archivedSessions.get(e)?.title||"New Chat"}setSessionTitle(e,a){if(this.sessions.has(e)){this.sessionTitles.set(e,a);const t=this.sessionTimestamps.get(e);t&&(t.updatedAt=Date.now()),this.save()}}generateTitle(e){const a=e.trim();if(!a)return"New Chat";const t=30;return a.length<=t?a:a.substring(0,t).trim()+"..."}addMessage(e,a){const t=this.sessions.get(e);if(t){t.history.push(a);const i=this.sessionTimestamps.get(e);i&&(i.updatedAt=Date.now()),this.save()}}getSessionCount(){return this.sessions.size}getArchivedSessions(){return Array.from(this.archivedSessions.values()).sort((e,a)=>a.updatedAt-e.updatedAt)}getArchivedSessionCount(){return this.archivedSessions.size}}class Ue{constructor(e){this.streamingMessages=new Map,this.currentStreamingIndex=-1,this.pendingUpdate=!1,this.onUpdate=e}createStreamingMessage(e,a){const t=++this.currentStreamingIndex;return this.streamingMessages.set(t,{message:{role:e,content:""},isStreaming:!0,timestamp:new Date,sessionId:a}),t}getStreamingMessage(e){return this.streamingMessages.get(e)}updateStreamingMessage(e,a){const t=this.streamingMessages.get(e);t&&(t.message.content+=a,this.scheduleUpdate())}completeStreamingMessage(e,a){const t=this.streamingMessages.get(e);t&&(t.message=a,t.isStreaming=!1)}removeStreamingMessage(e){this.streamingMessages.delete(e)}getAllStreamingMessages(){return Array.from(this.streamingMessages.values())}getAllStreamingMessagesByRole(e){return Array.from(this.streamingMessages.values()).filter(a=>a.message.role===e)}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(t=>t.message.role===e)?.message}scheduleUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.updateAnimationFrame=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.onUpdate?.()}))}cancelUpdates(){this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1)}clearAll(){for(const[e,a]of this.streamingMessages.entries())a.isStreaming&&(a.isStreaming=!1);this.streamingMessages.clear(),this.cancelUpdates()}clearForSession(e){const a=[];for(const[t,i]of this.streamingMessages.entries())i.sessionId===e&&(i.isStreaming&&(i.isStreaming=!1),a.push(t));a.forEach(t=>this.streamingMessages.delete(t)),a.length>0&&this.scheduleUpdate()}reset(){this.clearAll(),this.currentStreamingIndex=-1}}class Oe{constructor(e){this.aiService=e,this.settingsKey="aiViewChat",this.availableModels=[],this.loadingModels=!1}async initialize(){await this.loadProviders(),await this.loadSettings()}async loadProviders(){this.providers=await this.aiService.getProviders()||[]}async loadSettings(){if(this.providers&&this.providers.length>0){const e=await this.aiService.getDefaultProvider();this.selectedProvider=e,this.settingsProviderName=e.name,this.settingsModel=e.model}}getRequireToolApproval(){return!1}async saveSettings(e,a,t,i,o){const l={...await M.get(this.settingsKey)||{}};i!==void 0&&(l.requireToolApproval=i),o!==void 0&&(l.toolApprovalAllowlist=o),await M.set(this.settingsKey,l);const c=this.providers?.find(g=>g.name===e);if(c){const g={...c,model:a,...t!==void 0&&{apiKey:t}};this.selectedProvider=g,this.settingsProviderName=e,this.settingsModel=a,await this.updateProviderInAIConfig(e,{model:a,...t!==void 0&&{apiKey:t}}),await this.aiService.setDefaultProvider(e)}}async updateProviderInAIConfig(e,a){const{KEY_AI_CONFIG:t}=await T(async()=>{const{KEY_AI_CONFIG:o}=await import("./main-CpKkRoMP.js").then(r=>r.a5);return{KEY_AI_CONFIG:o}},__vite__mapDeps([0,1,2,3])),i=await M.get(t)||{};if(i.providers&&Array.isArray(i.providers)){const o=i.providers.findIndex(r=>r.name===e);o>=0&&(i.providers[o]={...i.providers[o],...a},await M.set(t,i))}}async loadToolApprovalAllowlist(){return(await M.get(this.settingsKey)||{}).toolApprovalAllowlist||[]}async fetchModels(e){const a=this.providers?.find(t=>t.name===e);if(a){this.loadingModels=!0;try{const i=`${a.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,o=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${a.apiKey}`,"Content-Type":"application/json"}});if(!o.ok)throw new Error(`Failed to fetch models: ${o.statusText}`);const l=(await o.json()).data||[];this.availableModels=l.map(c=>({id:c.id,name:c.name||c.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(t){throw this.availableModels=[],t}finally{this.loadingModels=!1}}}getProviders(){return this.providers||[]}getSelectedProvider(){return this.selectedProvider}setSelectedProvider(e){this.selectedProvider=e}async getSettingsProviderName(){if(!this.settingsProviderName){const e=await this.aiService.getDefaultProvider();this.settingsProviderName=e.name}return this.settingsProviderName}setSettingsProviderName(e){this.settingsProviderName=e}async getSettingsModel(){if(!this.settingsModel){const e=await this.aiService.getDefaultProvider();this.settingsModel=e.model}return this.settingsModel}setSettingsModel(e){this.settingsModel=e}getAvailableModels(){return this.availableModels}isLoadingModels(){return this.loadingModels}resetModelSelection(){this.availableModels=[],this.settingsModel=void 0}}class Re{constructor(){this.groups=new Map,this.pausedWorkflows=new Map}createGroup(e,a,t,i,o){const r=`group-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.currentGroupId=r;const l={id:r,sessionId:e,userMessageIndex:a,userMessage:t,timestamp:new Date,agents:new Map,messageIndices:new Map};return i.forEach(c=>{const{label:g,icon:h}=o(c);l.agents.set(c,{role:c,label:g,icon:h,status:"streaming"})}),this.groups.set(r,l),r}getGroup(e){return this.groups.get(e)}updateAgentStatus(e,a,t,i,o){const r=this.groups.get(e);if(!r)return;const l=r.agents.get(a);l&&(l.status=t,i&&(l.message=i),o!==void 0&&(l.messageIndex=o,r.messageIndices.set(a,o)))}getGroupsForSession(e){return Array.from(this.groups.values()).filter(a=>a.sessionId===e)}findGroupForUserMessage(e,a,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.userMessageIndex===a&&i.userMessage===t)}findGroupForMessage(e,a,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.messageIndices.get(a)===t)}getCurrentGroupId(){return this.currentGroupId}setCurrentGroupId(e){this.currentGroupId=e}clearCurrentGroup(){this.currentGroupId=void 0}storePausedWorkflow(e,a,t){this.pausedWorkflows.set(e,{token:e,options:a,results:t})}getPausedWorkflow(e){return this.pausedWorkflows.get(e)}getAllPausedWorkflows(){return Array.from(this.pausedWorkflows.values())}clearPausedWorkflow(e){this.pausedWorkflows.delete(e)}clearAllPausedWorkflows(){this.pausedWorkflows.clear()}getAllGroups(){return Array.from(this.groups.values())}clearAll(){this.groups.clear(),this.currentGroupId=void 0}}var ze=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,R=(s,e,a,t)=>{for(var i=t>1?void 0:t?Ne(e,a):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&ze(e,a,i),i};let E=class extends oe{constructor(){super(...arguments),this.sessionManager=new qe,this.streamManager=new Ue(()=>{this.requestUpdate(),this.scrollDebounceTimer&&clearTimeout(this.scrollDebounceTimer),this.scrollDebounceTimer=setTimeout(async()=>{await this.updateComplete,this.scrollToBottom(),this.scrollDebounceTimer=void 0},100)}),this.providerManager=new Oe(j),this.agentGroupManager=new Re,this.busy=!1,this.inputValue="",this.requireToolApproval=!0,this.toolApprovalAllowlist=new Set,this.pendingToolApprovals=new Map}onAIConfigChanged(){this.doBeforeUI()}async doBeforeUI(){this.sessionManager.setSaveCallback(()=>this.sessionManager.persistSessions()),await this.sessionManager.loadSessions(),this.sessionManager.getSessionCount()===0&&this.sessionManager.createSession(),await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async loadSettings(){const{appSettings:s}=await T(async()=>{const{appSettings:t}=await import("./main-CpKkRoMP.js").then(i=>i.a4);return{appSettings:t}},__vite__mapDeps([0,1,2,3])),e=await s.get("aiViewChat")||{};this.requireToolApproval=e.requireToolApproval!==void 0?e.requireToolApproval:!0;const a=await this.providerManager.loadToolApprovalAllowlist();this.toolApprovalAllowlist=new Set(a)}createNewSession(){this.sessionManager.createSession(),this.inputValue="",this.requestUpdate()}async deleteSession(s){if(!await this.sessionManager.deleteSession(s)){N("Cannot delete the last session");return}this.inputValue="",this.requestUpdate()}async scrollToBottom(){await this.updateComplete;const s=this.sessionManager.getActiveSessionId();if(!s)return;const a=this.shadowRoot?.querySelector(`wa-tab-panel[name="${s}"]`)?.querySelector("wa-scroller.chat-messages");if(a){const t=a.shadowRoot?.querySelector(".scroll-container");t?t.scrollTop=t.scrollHeight:a.scrollTo?a.scrollTo({top:a.scrollHeight,behavior:"smooth"}):a.scrollTop!==void 0&&(a.scrollTop=a.scrollHeight)}}updated(s){super.updated(s)}async sendMessage(){const s=this.inputValue.trim();if(!s||this.busy)return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const a=this.shadowRoot?.querySelector("wa-tab-group");a?.active&&(e=a.active,this.sessionManager.setActiveSession(e))}e&&(this.inputValue="",this.requestUpdate(),await this.handlePrompt(s))}async runCommand(s,e){const a=e||G,t=s.trim().split(/\s+/);if(t.length===0)return;const i=t.shift(),o=a.getCommand(i);if(!o){N("Command not found: "+i);return}const r={};o.parameters&&t.forEach((c,g)=>{o.parameters&&o.parameters[g]&&(r[o.parameters[g].name]=c)});const l=a.createExecutionContext(r);await a.execute(i,l),this.requestUpdate()}async handlePrompt(s){if(s.startsWith("/")){await this.runCommand(s.substring(1),G);return}const e=this.providerManager.getSelectedProvider();if(!e){N("Please configure AI provider in settings");return}let a=this.sessionManager.getActiveSessionId();if(!a)this.createNewSession(),a=this.sessionManager.getActiveSessionId();else{const c=this.shadowRoot?.querySelector("wa-tab-group");c?.active&&(a=c.active,this.sessionManager.setActiveSession(a))}if(!a)return;const t=j.createMessage(s),i=a,o=this.sessionManager.getSession(i);if(!o)return;if(o.history.push(t),o.history.length===1){const c=this.sessionManager.generateTitle(s);this.sessionManager.setSessionTitle(i,c)}await this.sessionManager.persistSessions(),this.requestUpdate(),await this.updateComplete,this.scrollToBottom(),this.busy=!0,this.abortController=new AbortController;const r=new Map,l={history:[...o.history]};de.runAsync("Calling AI assistant",async()=>{const c=G.createExecutionContext(),g=pe.createChild({...c}),h=j.getAgentContributions();if(h.length===0)throw new Error("No agents are registered. The App Support agent should be available from the AI system extension.");const x=h.filter(d=>d.canHandle?d.canHandle({...g.getProxy(),userPrompt:s}):!0).sort((d,u)=>(u.priority||0)-(d.priority||0));if(x.length===0)throw new Error(`No agents can handle the current context. Available agents: ${h.map(d=>d.role).join(", ")}`);const y=x.map(d=>d.role),A=this.sessionManager.getSession(i);if(!A)return;const $=this.agentGroupManager.createGroup(i,A.history.length-1,t,y,d=>{const u=h.find(b=>b.role===d);return{label:u?.label||d,icon:u?.icon||"robot"}});return j.executeAgentWorkflow({chatContext:l,chatConfig:e,callContext:g,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:y,requireToolApproval:this.requireToolApproval,onToolApprovalRequest:async(d,u)=>{const{ToolExecutor:b}=await T(async()=>{const{ToolExecutor:z}=await import("./main-CpKkRoMP.js").then(D=>D.a6);return{ToolExecutor:z}},__vite__mapDeps([0,1,2,3])),k=new b,B=G.createExecutionContext();return u.toolCalls.every(z=>{const D=k.findCommand(z,B);return D&&this.toolApprovalAllowlist.has(D.id)})?!0:new Promise(z=>{const D=`approval-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.pendingToolApprovals.set(D,{role:d,request:u,resolve:z,allowListSelections:new Map}),this.requestUpdate()})},onAgentStart:async d=>{const u=this.streamManager.createStreamingMessage(d,i);r.set(d,u),this.agentGroupManager.updateAgentStatus($,d,"streaming"),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()},onToken:(d,u)=>{const b=r.get(d);b!==void 0&&this.streamManager.updateStreamingMessage(b,u),this.requestUpdate()},onAgentComplete:async(d,u)=>{const b=this.sessionManager.getSession(i);if(!b)return;const k=r.get(d);if(k!==void 0){this.streamManager.completeStreamingMessage(k,u);const B=b.history.length;b.history.push(u),r.delete(d),this.streamManager.removeStreamingMessage(k),this.agentGroupManager.updateAgentStatus($,d,"completed",u,B),await this.sessionManager.persistSessions(),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()}},onAgentError:(d,u)=>{if(!this.sessionManager.getSession(i))return;const k=r.get(d);k!==void 0&&(this.streamManager.removeStreamingMessage(k),r.delete(d)),this.agentGroupManager.updateAgentStatus($,d,"error",{role:d,content:`Error: ${u.message}`}),this.requestUpdate(),N(`Agent ${d} error: ${u.message}`)}}).then(()=>{this.agentGroupManager.clearCurrentGroup()})}).catch(c=>{c?.name!=="AbortError"&&N(`${c}`)}).finally(async()=>{this.busy=!1,this.abortController=void 0,this.streamManager.clearForSession(i),this.agentGroupManager.clearCurrentGroup(),await this.sessionManager.persistSessions(),this.requestUpdate()})}cancelStream(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.busy=!1),this.streamManager.cancelUpdates()}async openSettingsDialog(){const{commandRegistry:s}=await T(async()=>{const{commandRegistry:e}=await import("./main-CpKkRoMP.js").then(a=>a.a3);return{commandRegistry:e}},__vite__mapDeps([0,1,2,3]));s.execute("open_ai_config",{})}renderMessage(s,e,a,t){return n`
            <ai-chat-message
                .message="${e}"
                .isStreaming="${t||!1}"
                .showHeader="${!0}"
                .messageIndex="${a}"
                @resend="${i=>{this.handleResend(i.detail.message)}}">
            </ai-chat-message>
        `}async handleResend(s){if(!s||s.role!=="user")return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const a=this.shadowRoot?.querySelector("wa-tab-group");a?.active&&(e=a.active,this.sessionManager.setActiveSession(e))}e&&await this.handlePrompt(s.content)}render(){const s=this.sessionManager.getAllSessionIds(),e=this.sessionManager.getActiveSessionId(),a=this.providerManager.getSelectedProvider();return n`
            <div class="chat-container">
                ${p(s.length>0,()=>n`
                    <wa-tab-group 
                        active="${e||s[0]||""}" 
                        @wa-tab-show="${t=>{const i=t.detail.panel;this.sessionManager.getSession(i)&&(this.sessionManager.setActiveSession(i),this.inputValue="",this.requestUpdate())}}">
                        ${L(s,t=>t,(t,i)=>{const o=this.sessionManager.getSession(t);return o?n`
                                <wa-tab panel="${t}">
                                    <span>${this.sessionManager.getSessionTitle(t)||`Chat ${i+1}`}</span>
                                    ${p(s.length>1,()=>n`
                                        <wa-icon 
                                            name="xmark" 
                                            label="Close"
                                            @click="${r=>{r.stopPropagation(),this.deleteSession(t)}}">
                                        </wa-icon>
                                    `)}
                                </wa-tab>
                                <wa-tab-panel name="${t}">
                                    <wa-scroller class="chat-messages" orientation="vertical">
                                        <div class="chat-content">
                                            ${o.history.map((r,l)=>{const c=this.agentGroupManager.findGroupForUserMessage(t,l,r);return c&&r.role==="user"?n`
                                                        <ai-chat-message
                                                            .message="${r}"
                                                            .isStreaming="${!1}"
                                                            .showHeader="${!0}"
                                                            .messageIndex="${l}"
                                                            @resend="${h=>{this.handleResend(h.detail.message)}}">
                                                        </ai-chat-message>
                                                        <ai-agent-response-group
                                                            .group="${c}"
                                                            .findStreamingMessage="${h=>this.streamManager.findStreamingMessage(h)}">
                                                        </ai-agent-response-group>
                                                    `:this.agentGroupManager.findGroupForMessage(t,r.role,l)?n``:this.renderMessage(o,r,l)})}
                                            ${this.streamManager.getAllStreamingMessages().filter(r=>r.sessionId===t&&!Array.from(this.agentGroupManager.getAllGroups()).some(l=>l.sessionId===t&&l.agents.has(r.message.role))).map(r=>{const l=this.sessionManager.getSession(t);return this.renderMessage(l,r.message,-1,r.isStreaming)})}
                                            ${p(e===t&&this.busy&&this.streamManager.getAllStreamingMessages().filter(r=>r.sessionId===t).length===0,()=>n`
                                                <ai-loading-indicator></ai-loading-indicator>
                                            `)}
                                        </div>
                                    </wa-scroller>
                                </wa-tab-panel>
                            `:n``})}
                        ${p(this.sessionManager.getArchivedSessionCount()>0,()=>n`
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
                                    @click="${async()=>{const t=this.sessionManager.getArchivedSessionCount();if(await Z(`Are you sure you want to permanently delete all ${t} archived session${t>1?"s":""}?`)){for(const i of this.sessionManager.getArchivedSessions())await this.sessionManager.permanentlyDeleteSession(i.id);this.requestUpdate()}}}">
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
                
                ${p(!a,()=>n`
                    <ai-empty-state
                        message="No AI provider configured"
                        hint="Click the settings button to configure">
                    </ai-empty-state>
                `)}

                ${p(s.length>0,()=>n`
                    ${this.pendingToolApprovals.size>0?n`
                        <div class="tool-approval-section">
                            ${Array.from(this.pendingToolApprovals.entries()).map(([t,i])=>{const o=i.request.toolCalls,r=o.length;o.map(c=>{const g=c.function.arguments||"{}";let h={};try{h=JSON.parse(g)}catch{h={}}const x=Object.entries(h).map(([y,A])=>`${y}=${JSON.stringify(A)}`).join(", ");return`${c.function.name}${x?`(${x})`:"()"}`}).join(", ");const l=`Tool execution pending: ${r} tool${r>1?"s":""} (${o[0]?.function.name}${r>1?", ...":""})`;return n`
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
                                                    @click="${async c=>{c.stopPropagation();for(const[g,h]of i.allowListSelections.entries())if(h){const x=i.request.toolCalls.find(y=>y.id===g);if(x){const{ToolExecutor:y}=await T(async()=>{const{ToolExecutor:u}=await import("./main-CpKkRoMP.js").then(b=>b.a6);return{ToolExecutor:u}},__vite__mapDeps([0,1,2,3])),A=new y,$=G.createExecutionContext(),d=A.findCommand(x,$);d&&this.toolApprovalAllowlist.add(d.id)}}if(i.allowListSelections.size>0){const g=await this.providerManager.getSettingsProviderName(),h=await this.providerManager.getSettingsModel();await this.providerManager.saveSettings(g||"",h||"",void 0,this.requireToolApproval,Array.from(this.toolApprovalAllowlist))}i.resolve(!0),this.pendingToolApprovals.delete(t),this.requestUpdate()}}">
                                                    <wa-icon name="check" label="Approve"></wa-icon>
                                                </wa-button>
                                            </div>
                                        </span>
                                        <div class="approval-content">
                                            <div class="approval-message">
                                                <strong>Agent "${i.role}" wants to execute the following tools:</strong>
                                                <ul class="tool-list">
                                                    ${o.map(c=>{const g=c.function.arguments||"{}";let h={};try{h=JSON.parse(g)}catch{h={}}const x=Object.entries(h).length>0?`(${Object.entries(h).map(([A,$])=>`${A}=${JSON.stringify($)}`).join(", ")})`:"()",y=i.allowListSelections.get(c.id)||!1;return n`
                                                            <li class="tool-list-item">
                                                                <label class="tool-item-label">
                                                                    <wa-checkbox
                                                                        ?checked="${y}"
                                                                        @change="${A=>{const $=A.target.checked;i.allowListSelections.set(c.id,$),this.requestUpdate()}}">
                                                                    </wa-checkbox>
                                                                    <span>Always allow</span>
                                                                </label>
                                                                <code>${c.function.name}${x}</code>
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
                
                ${p(s.length>0,()=>n`
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
        `}};E.styles=S`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .chat-messages {
            margin-right: 0.5rem;
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
    `;R([v()],E.prototype,"busy",2);R([v()],E.prototype,"inputValue",2);R([v()],E.prototype,"requireToolApproval",2);R([v()],E.prototype,"pendingToolApprovals",2);R([ce(ie)],E.prototype,"onAIConfigChanged",1);E=R([C("k-aiview")],E);var Ge=Object.getOwnPropertyDescriptor,je=(s,e,a,t)=>{for(var i=t>1?void 0:t?Ge(e,a):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=r(i)||i);return i};let X=class extends he{constructor(){super(...arguments),this.totalUsage={promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},this.providerUsage={},this.updateInterval=null}connectedCallback(){super.connectedCallback(),this.loadUsage(),this.updateInterval=window.setInterval(()=>{this.loadUsage()},5e3),W(ge,()=>{this.loadUsage()})}disconnectedCallback(){super.disconnectedCallback(),this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null)}async loadUsage(){try{this.totalUsage=await H.getTotalUsage(),this.providerUsage=await H.getAllProviderUsage(),this.requestUpdate()}catch(s){console.error("Failed to load token usage",s)}}formatNumber(s){return s>=1e6?(s/1e6).toFixed(2)+"M":s>=1e3?(s/1e3).toFixed(1)+"K":s.toString()}async handleReset(){await Z("Reset all token usage statistics?")&&(await H.reset(),await this.loadUsage())}render(){return this.totalUsage.totalTokens>0?n`
            <wa-dropdown
                placement="top-end"
                distance="8">
                <wa-button
                    slot="trigger"
                    appearance="plain"
                    size="small"
                    title="Click to view detailed token usage statistics">
                    <wa-icon name="database" label="Token usage" slot="start"></wa-icon>
                    ${this.formatNumber(this.totalUsage.totalTokens)} tokens
                </wa-button>
                
                <h3>Token Usage Statistics</h3>
                
                <h6>Total Usage</h6>
                <wa-dropdown-item>
                    <span>Total</span>
                    <div class="total-stats">
                        <div class="stat-item">
                            <span class="stat-label">Prompt</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.promptTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Completion</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.completionTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Total</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.totalTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Requests</span>
                            <span class="stat-value">${this.totalUsage.requestCount}</span>
                        </div>
                    </div>
                </wa-dropdown-item>
                
                ${Object.keys(this.providerUsage).length>0?n`
                    <wa-divider></wa-divider>
                    <h6>By Provider</h6>
                    ${Object.entries(this.providerUsage).map(([e,a])=>n`
                        <wa-dropdown-item>
                            <span class="provider-name">${e}</span>
                            <div class="provider-stats">
                                <div class="stat-item">
                                    <span class="stat-label">Prompt</span>
                                    <span class="stat-value">${this.formatNumber(a.promptTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Completion</span>
                                    <span class="stat-value">${this.formatNumber(a.completionTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Total</span>
                                    <span class="stat-value">${this.formatNumber(a.totalTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Requests</span>
                                    <span class="stat-value">${a.requestCount}</span>
                                </div>
                            </div>
                        </wa-dropdown-item>
                    `)}
                `:""}
                
                <wa-divider></wa-divider>
                <wa-dropdown-item variant="danger" @click=${this.handleReset}>
                    <wa-icon name="trash" slot="icon"></wa-icon>
                    Reset Statistics
                </wa-dropdown-item>
            </wa-dropdown>
        `:n``}};X.styles=S`
        :host {
            display: inline-block;
        }
        
        wa-dropdown::part(menu) {
            min-width: 300px;
            max-width: 400px;
        }
        
        h3 {
            padding: var(--wa-space-s) var(--wa-space-m);
            margin: 0;
            font-weight: 600;
            font-size: 0.95em;
        }
        
        h6 {
            padding: var(--wa-space-xs) var(--wa-space-m);
            margin: 0;
            font-weight: 600;
            font-size: 0.9em;
            color: var(--wa-color-neutral-text-subtle);
        }
        
        wa-dropdown-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .provider-name {
            font-weight: 500;
        }
        
        .provider-stats {
            display: flex;
            gap: var(--wa-space-m);
            font-size: 0.9em;
        }
        
        .stat-item {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        
        .stat-label {
            font-size: 0.85em;
            color: var(--wa-color-neutral-text-subtle);
        }
        
        .stat-value {
            font-weight: 600;
        }
        
        .total-stats {
            display: flex;
            gap: var(--wa-space-m);
            font-size: 0.9em;
        }
    `;X=je([C("k-token-usage")],X);var Ve=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,f=(s,e,a,t)=>{for(var i=t>1?void 0:t?Fe(e,a):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&Ve(e,a,i),i};let w=class extends oe{constructor(){super(...arguments),this.providers=[],this.defaultProvider="",this.editingCell=null,this.editingValue="",this.hasChanges=!1,this.availableModels=[],this.loadingModels=!1,this.requireToolApproval=!0,this.toolApprovalAllowlist=[],this.smartToolDetection=!1,this.availableCommands=[],this.providerFactory=new ue}async doInitUI(){await this.loadAvailableCommands(),await this.loadConfig(),W(ie,()=>{this.loadConfig()}),W(me,()=>{this.loadConfig()})}async loadConfig(){const s=await M.get(Y);this.aiConfig=s;const e=this.getContributedProviders(),a=s?.providers||[];this.providers=this.mergeProviders(a,e);const t=s?.defaultProvider||"";t&&!this.providers.find(i=>i.name===t)?this.defaultProvider="":this.defaultProvider=t,s?.requireToolApproval!==void 0?this.requireToolApproval=s.requireToolApproval:this.requireToolApproval=!0,this.toolApprovalAllowlist=s?.toolApprovalAllowlist||[],s?.smartToolDetection!==void 0?this.smartToolDetection=s.smartToolDetection:this.smartToolDetection=!1,this.hasChanges=!1,this.markDirty(!1),this.editingCell=null,await this.updateComplete,this.syncCheckboxStates(),this.syncToolApprovalCheckbox(),this.syncSmartToolDetectionCheckbox()}async loadAvailableCommands(){const{commandRegistry:s}=await T(async()=>{const{commandRegistry:a}=await import("./main-CpKkRoMP.js").then(t=>t.a3);return{commandRegistry:a}},__vite__mapDeps([0,1,2,3])),e=s.listCommands();this.availableCommands=Object.entries(e).map(([a,t])=>({id:a,name:t.name||a,description:t.description})).sort((a,t)=>a.name.localeCompare(t.name))}getContributedProviders(){return J.getContributions(ve).map(e=>e.provider)}mergeProviders(s,e){const a=new Set(s.map(i=>i.name)),t=e.filter(i=>!a.has(i.name));return t.length>0?[...s,...t]:s}syncCheckboxStates(){const s=this.shadowRoot?.querySelectorAll("tbody tr");s&&this.providers&&s.forEach((e,a)=>{const t=e.querySelector("td:first-child wa-checkbox"),i=this.providers[a];t&&i&&(t.checked=this.defaultProvider===i.name)})}syncToolApprovalCheckbox(){const s=this.shadowRoot?.querySelector(".tool-approval-controls wa-checkbox");s&&(s.checked=this.requireToolApproval)}syncSmartToolDetectionCheckbox(){const s=this.shadowRoot?.querySelector(".tool-detection-section wa-checkbox");s&&(s.checked=this.smartToolDetection)}async saveConfig(){if(!this.aiConfig)return;const s={...this.aiConfig,defaultProvider:this.defaultProvider,providers:this.providers,requireToolApproval:this.requireToolApproval,toolApprovalAllowlist:this.toolApprovalAllowlist,smartToolDetection:this.smartToolDetection};await M.set(Y,s),this.hasChanges=!1,this.markDirty(!1)}async save(){if(this.hasChanges)try{await this.saveConfig()}catch(s){throw console.error("Failed to save AI config:",s),s}}async startCellEditing(s,e){const a=this.providers[s];if(!a)return;const t=this.getProviderFieldValue(a,e);this.editingCell={rowIndex:s,field:e},this.editingValue=t,e==="model"&&(await this.updateComplete,await this.fetchModels(a))}async fetchModels(s){this.loadingModels=!0,this.availableModels=[],await this.updateComplete;try{const e=this.providerFactory.getProvider(s);if(e.getAvailableModels){const a=await e.getAvailableModels(s);this.availableModels=Array.isArray(a)?a:[]}else this.availableModels=[]}catch{this.availableModels=[]}finally{this.loadingModels=!1}}cancelCellEditing(){this.editingCell=null,this.editingValue="",this.availableModels=[],this.loadingModels=!1}saveCellEditing(){if(!this.editingCell)return;const{rowIndex:s,field:e}=this.editingCell;this.updateProviderField(s,e,this.editingValue),this.cancelCellEditing()}markDirtyAndUpdate(){this.hasChanges=!0,this.markDirty(!0)}getProviderFieldValue(s,e){const t={name:"name",model:"model",chatApiEndpoint:"chatApiEndpoint",apiKey:"apiKey",ocrApiEndpoint:"ocrApiEndpoint",ocrModel:"ocrModel"}[e];if(!t)return"";const i=s[t];return typeof i=="string"?i:""}updateProviderField(s,e,a){this.providers=this.providers.map((t,i)=>{if(i===s){const o={...t};return e==="ocrApiEndpoint"||e==="ocrModel"?o[e]=a||void 0:o[e]=a,o}return t}),this.markDirtyAndUpdate()}updateProviderParameter(s,e,a){this.providers=this.providers.map((t,i)=>{if(i===s){const o={...t.parameters||{},[e]:a};return{...t,parameters:o}}return t}),this.markDirtyAndUpdate()}async deleteProvider(s){const e=this.providers[s];await Z(`Delete provider "${e.name}"?`)&&(this.defaultProvider===e.name&&(this.defaultProvider=""),this.providers=this.providers.filter((t,i)=>i!==s),this.markDirtyAndUpdate())}addProvider(){const s={name:"new-provider",model:"",apiKey:"",chatApiEndpoint:""};this.providers=[...this.providers,s],this.markDirtyAndUpdate()}setDefaultProvider(s){this.defaultProvider!==s&&(this.defaultProvider=s,this.markDirtyAndUpdate())}createInputHandlers(){return{onInput:s=>{const e=s.target;this.editingValue=e.value},onKeydown:s=>{s.key==="Enter"?(s.preventDefault(),this.saveCellEditing()):s.key==="Escape"&&(s.preventDefault(),this.cancelCellEditing())},onBlur:()=>{this.saveCellEditing()}}}renderEditableCell(s,e,a,t="text",i,o){const r=this.editingCell?.rowIndex===s&&this.editingCell?.field===e,l=this.createInputHandlers();return r&&o?o:r?n`
                <wa-input
                    type="${t}"
                    .value="${this.editingValue}"
                    placeholder="${i||""}"
                    @input="${l.onInput}"
                    @keydown="${l.onKeydown}"
                    @blur="${l.onBlur}"
                    autofocus>
                </wa-input>
            `:n`<span>${a}</span>`}renderModelCell(s,e){return this.editingCell?.rowIndex===s&&this.editingCell?.field==="model"?n`
            ${p(this.loadingModels,()=>n`
                <wa-input
                    .value="${this.editingValue}"
                    placeholder="Loading models..."
                    readonly>
                    <wa-animation name="spinner" play slot="start"></wa-animation>
                </wa-input>
            `,()=>n`
                ${p(this.availableModels.length>0,()=>n`
                    <wa-dropdown
                        @wa-select="${t=>{const i=t.detail.item.value;i&&(this.editingValue=i,this.saveCellEditing())}}"
                        placement="bottom-start">
                        <wa-input
                            slot="trigger"
                            .value="${this.editingValue}"
                            placeholder="Select a model"
                            readonly
                            @keydown="${t=>{t.key==="Escape"&&(t.preventDefault(),this.cancelCellEditing())}}">
                        </wa-input>
                        ${this.availableModels.map(t=>n`
                            <wa-dropdown-item value="${t.id}">
                                ${t.name||t.id}
                            </wa-dropdown-item>
                        `)}
                    </wa-dropdown>
                `,()=>n`
                    ${this.renderEditableCell(s,"model",e.model)}
                `)}
            `)}
        `:n`<span>${e.model}</span>`}render(){return n`
            <div class="ai-config-editor">
                <div class="editor-header">
                    <h2>Providers</h2>
                    <div class="header-actions">
                        <wa-button 
                            variant="brand" 
                            appearance="filled"
                            @click="${()=>this.addProvider()}">
                            Add Provider
                        </wa-button>
                    </div>
                </div>

                <div class="table-container">
                    <table class="providers-table">
                        <thead>
                            <tr>
                                <th>Default</th>
                                <th>Name</th>
                                <th>Model</th>
                                <th>API Endpoint</th>
                                <th>API Key</th>
                                <th>OCR Endpoint</th>
                                <th>OCR Model</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${L(this.providers,(s,e)=>e,(s,e)=>n`
                                <tr class="${this.editingCell?.rowIndex===e?"editing":""}">
                                    <td>
                                        <wa-checkbox
                                            .checked="${this.defaultProvider===s.name}"
                                            @change="${async a=>{const t=a.target;if(t.checked){this.setDefaultProvider(s.name),await this.updateComplete;const i=this.shadowRoot?.querySelectorAll("tbody tr");i&&i.forEach(o=>{const r=o.querySelector("td:first-child wa-checkbox");r&&r!==t&&(r.checked=!1)})}else this.defaultProvider===s.name&&(t.checked=!0)}}">
                                        </wa-checkbox>
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"name")}">
                                        ${this.renderEditableCell(e,"name",s.name)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"model")}">
                                        ${this.renderModelCell(e,s)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"chatApiEndpoint")}">
                                        ${this.renderEditableCell(e,"chatApiEndpoint",n`<span class="endpoint-text">${s.chatApiEndpoint}</span>`)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"apiKey")}">
                                        ${this.renderEditableCell(e,"apiKey",n`<span class="api-key-text">${s.apiKey?"••••••••":""}</span>`,"password","API Key")}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"ocrApiEndpoint")}">
                                        ${this.renderEditableCell(e,"ocrApiEndpoint",s.ocrApiEndpoint||"-","text","Optional")}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"ocrModel")}">
                                        ${this.renderEditableCell(e,"ocrModel",s.ocrModel||"-","text","Optional")}
                                    </td>
                                    <td>
                                        <wa-button
                                            variant="danger"
                                            appearance="plain"
                                            size="small"
                                            @click="${()=>this.deleteProvider(e)}">
                                            Delete
                                        </wa-button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>

                ${p(this.providers.length===0,()=>n`
                    <div class="empty-state">
                        <p>No providers configured. Click "Add Provider" to get started.</p>
                    </div>
                `)}

                <div class="tool-approval-section">
                    <h3>Tool Approvals</h3>
                    <div class="tool-approval-controls">
                        <wa-checkbox
                            .checked="${this.requireToolApproval}"
                            @change="${s=>{const e=s.target;this.requireToolApproval=e.checked,this.markDirtyAndUpdate()}}">
                            Require approval before executing tools
                        </wa-checkbox>
                    </div>

                    <div class="tool-detection-section" style="margin-top: 1.5rem;">
                        <wa-checkbox
                            .checked="${this.smartToolDetection}"
                            @change="${s=>{const e=s.target;this.smartToolDetection=e.checked,this.markDirtyAndUpdate()}}">
                            Use smart tool detection (reduces token usage)
                        </wa-checkbox>
                        <p class="hint" style="margin-top: 0.5rem; margin-left: 1.75rem; color: var(--wa-color-text-secondary, #666); font-size: 0.875rem;">
                            When enabled, a small ML model running in your browser will detect if a prompt needs tools. 
                            This reduces token usage for simple queries like greetings. 
                            <strong>Note:</strong> The model (approximately 60-80MB quantized) will be downloaded on first use, which may take some time.
                        </p>
                    </div>

                    <div class="allowlist-section">
                        <h4>
                            Approved Commands 
                            <span class="command-stats">
                                (${this.toolApprovalAllowlist.length}/${this.availableCommands.length})
                            </span>
                        </h4>
                        <p class="hint">
                            ${this.requireToolApproval?"Select commands that can be executed without approval:":"These commands will be approved automatically when approval is enabled:"}
                        </p>
                        <div class="commands-list ${this.requireToolApproval?"":"disabled"}">
                            ${this.availableCommands.map(s=>n`
                                <div class="command-item">
                                    <wa-checkbox
                                        .checked="${this.toolApprovalAllowlist.includes(s.id)}"
                                        ?disabled="${!this.requireToolApproval}"
                                        @change="${e=>{e.target.checked?this.toolApprovalAllowlist.includes(s.id)||(this.toolApprovalAllowlist=[...this.toolApprovalAllowlist,s.id],this.markDirtyAndUpdate()):(this.toolApprovalAllowlist=this.toolApprovalAllowlist.filter(t=>t!==s.id),this.markDirtyAndUpdate())}}">
                                        <div class="command-label">
                                            ${s.name}
                                            ${s.description?n`
                                                <span class="command-description">${s.description}</span>
                                            `:""}
                                        </div>
                                    </wa-checkbox>
                                </div>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
        `}};w.styles=S`
        :host {
            display: block;
            height: 100%;
            overflow: auto;
        }

        .ai-config-editor {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 1rem;
        }

        .editor-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
        }

        .editor-header h2 {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--wa-color-text-normal);
        }

        .header-actions {
            display: flex;
            gap: 0.5rem;
        }

        .table-container {
            flex: 1;
            overflow: auto;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
        }

        .providers-table {
            width: 100%;
            border-collapse: collapse;
            background-color: var(--wa-color-surface-raised);
        }

        .providers-table thead {
            position: sticky;
            top: 0;
            background-color: var(--wa-color-surface-raised);
            z-index: 1;
        }

        .providers-table th {
            padding: 0.75rem;
            text-align: left;
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            white-space: nowrap;
        }

        .providers-table td {
            padding: 0.75rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
            vertical-align: middle;
        }

        .providers-table tbody tr:hover {
            background-color: var(--wa-color-surface-lowered);
        }

        .providers-table tbody tr.editing {
            background-color: var(--wa-color-surface-brand-subtle);
        }

        .providers-table tbody tr:last-child td {
            border-bottom: none;
        }

        .providers-table wa-input {
            width: 100%;
            min-width: 150px;
        }

        .providers-table wa-dropdown {
            width: 100%;
            min-width: 150px;
        }

        .providers-table wa-dropdown wa-input {
            width: 100%;
        }

        .providers-table wa-checkbox {
            display: flex;
            justify-content: center;
        }

        .editable-cell {
            cursor: pointer;
            position: relative;
        }

        .editable-cell:hover {
            background-color: var(--wa-color-surface-lowered);
        }

        .editable-cell span {
            display: block;
            min-height: 1.5rem;
            padding: 0.25rem 0;
        }

        .endpoint-text {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
            word-break: break-all;
            max-width: 200px;
            display: inline-block;
        }

        .api-key-text {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
        }

        .empty-state {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3rem;
            color: var(--wa-color-text-subtle);
        }

        .empty-state p {
            margin: 0;
        }

        .tool-approval-section {
            margin-top: 2rem;
            padding-top: 2rem;
        }

        .tool-approval-section h3 {
            margin: 0 0 1rem 0;
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--wa-color-text-normal);
        }

        .tool-approval-controls {
            margin-bottom: 1rem;
        }

        .allowlist-section {
            margin-top: 1.5rem;
        }

        .allowlist-section h4 {
            margin: 0 0 0.5rem 0;
            font-size: 1rem;
            font-weight: 500;
            color: var(--wa-color-text-normal);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .command-stats {
            font-size: 0.875rem;
            font-weight: normal;
            color: var(--wa-color-text-subtle);
        }

        .allowlist-section .hint {
            margin: 0 0 1rem 0;
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
        }

        .commands-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 300px;
            overflow-y: auto;
            padding: 0.5rem;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
            border-radius: var(--wa-border-radius-m);
            background-color: var(--wa-color-surface-raised);
        }

        .commands-list.disabled {
            opacity: 0.6;
        }

        .command-item {
            padding: 0.25rem 0;
        }

        .command-item wa-checkbox {
            width: 100%;
        }

        .command-label {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
        }

        .command-description {
            font-size: 0.75rem;
            color: var(--wa-color-text-subtle);
            font-weight: normal;
        }

    `;f([m({attribute:!1})],w.prototype,"input",2);f([v()],w.prototype,"aiConfig",2);f([v()],w.prototype,"providers",2);f([v()],w.prototype,"defaultProvider",2);f([v()],w.prototype,"editingCell",2);f([v()],w.prototype,"editingValue",2);f([v()],w.prototype,"hasChanges",2);f([v()],w.prototype,"availableModels",2);f([v()],w.prototype,"loadingModels",2);f([v()],w.prototype,"requireToolApproval",2);f([v()],w.prototype,"toolApprovalAllowlist",2);f([v()],w.prototype,"smartToolDetection",2);f([v()],w.prototype,"availableCommands",2);w=f([C("k-ai-config-editor")],w);const He=({})=>{we.put("aiService",j),J.registerContribution(fe,{label:"App Support",description:"General app support",role:"appsupport",priority:100,icon:"question-circle",sysPrompt:Ae,tools:()=>M.get(Y).then(s=>({enabled:!0,smartToolDetection:s?.smartToolDetection??!1}))}),J.registerContribution(se,{target:se,label:"Token Usage",html:"<k-token-usage></k-token-usage>"}),ae.registerEditorInputHandler({ranking:1e3,canHandle:s=>s.key===".system.ai-config",handle:async s=>(s.editorId="ai-config-editor",s.widgetFactory=()=>n`
                <k-ai-config-editor .input=${s}></k-ai-config-editor>
            `,s)}),be({command:{id:"open_ai_config",name:"Open AI Config",description:"Opens the AI settings editor",parameters:[]},handler:{execute:s=>{const e={title:"AI Settings",data:{},key:".system.ai-config",icon:"robot",state:{}};ae.loadEditor(e).then()}},contribution:{target:ye,icon:"robot",label:"AI Config"}})};export{He as default};
