const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geospace-app-BEc6wX3y.js","assets/preload-helper-WQhrSmCl.js","assets/index-8b_zEHWw.js","assets/chunk.LTSJC6DR-BTS7fm5P.js","assets/index-aP6FMjSZ.css","assets/chunk.RRCUZAZD-5O78oK5S.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./preload-helper-WQhrSmCl.js";import{y as O,z as m,I as v,a5 as ne,x as l,w as N,O as h,H as le,P as j,s as Q,A as _}from"./index-8b_zEHWw.js";import{o as ce,e as H,S as de,J as pe,B as $,L as X,x as ae,v as ie,h as he,M as ge,r as ue,k as V,u as me,m as oe,N as re,b as U,n as G,t as ve,O as we,H as ee,K as fe,Q as be,R as Y,U as Ae,A as Se,V as ye}from"./geospace-app-BEc6wX3y.js";import"./chunk.LTSJC6DR-BTS7fm5P.js";import"./chunk.RRCUZAZD-5O78oK5S.js";const Ee=`You are an assistant in a web application with workspace, editors, and AI chat.

**Tools:**
Commands are exposed as AI-callable tools. Tools are context-aware - available commands depend on active editor, selected files, and workspace state.

**Tool Usage Rules:**
1. If tools are available and match the request, use them - don't describe manual steps
2. Read tool descriptions/parameters to select the correct tool
3. Call tools in sequence for multi-step tasks
4. After successful tool execution, provide a final response - don't loop or call more tools unless explicitly requested
5. If no tools are available, explain what context is needed

Keep responses concise. Use tools when available rather than discussing alternatives.

`,r=ce("aisystem");var Te=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,D=(s,e,a,t)=>{for(var i=t>1?void 0:t?Ce(e,a):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(t?n(e,a,i):n(i))||i);return t&&i&&Te(e,a,i),i};let P=class extends N{constructor(){super(...arguments),this.isStreaming=!1,this.showHeader=!0,this.attentionInputValue=""}formatTimestamp(){return new Date().toLocaleTimeString()}copyToClipboard(s){navigator.clipboard.writeText(s).catch(e=>{console.error("Failed to copy:",e)})}processMarkdownContent(s){return s.includes("code-block-wrapper")?s:s.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi,(e,a,t)=>`<div class="code-block-wrapper">
                <div class="code-block-header">
                    <wa-copy-button value="${this.escapeHtmlAttribute(t.trim())}" size="small" label="${r("COPY_CODE")}"></wa-copy-button>
                </div>
                <div class="code-block-content">
                    <pre><code${a}>${t}</code></pre>
                </div>
            </div>`)}escapeHtmlAttribute(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}handleResend(s){s&&(s.preventDefault(),s.stopPropagation()),this.message&&this.dispatchEvent(new CustomEvent("resend",{detail:{message:this.message,messageIndex:this.messageIndex},bubbles:!0,composed:!0}))}getAttentionIcon(s){switch(s){case"confirmation":return"check-circle";case"input":return"input";case"approval":return"hand";case"execution":return"play";case"info":return"info-circle";default:return"bell"}}updated(s){super.updated(s),s.has("attentionInputValue")&&this.dispatchEvent(new CustomEvent("attention-input-change",{detail:{value:this.attentionInputValue},bubbles:!0,composed:!0})),(s.has("message")||!this.hasAttribute("data-is-user"))&&this.updateAlignment()}updateAlignment(){if(this.message){const s=this.message.role==="user";this.setAttribute("data-is-user",String(s))}}handleAttentionResponse(s,e,a){this.message&&this.dispatchEvent(new CustomEvent("attention-response",{detail:{messageIndex:this.messageIndex,requestIndex:s,request:e,response:a},bubbles:!0,composed:!0}))}handleAction(s){const e=s();e instanceof Promise&&e.catch(a=>{console.error("Action failed:",a)})}render(){if(!this.message)return l``;const s=this.message,e=s.role==="user",a=s.requiresAttention&&(s.attentionRequests?.length||0)>0;return l`
            <div class="message-wrapper ${e?"user":"assistant"} ${this.isStreaming?"streaming":""} ${a?"requires-attention":""}">
                ${h(this.showHeader&&!e,()=>l`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="robot" 
                                label="${s.role}">
                            </wa-icon>
                            <span class="role-name">${s.role}</span>
                            ${h(a,()=>l`
                                <wa-icon name="bell" label="${r("REQUIRES_ATTENTION")}"></wa-icon>
                            `)}
                            <span class="timestamp">${this.formatTimestamp()}</span>
                        </div>
                        <div class="message-actions">
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                title="${r("COPY")}"
                                @click="${()=>this.copyToClipboard(s.content)}">
                                <wa-icon slot="label" name="copy" label="${r("COPY")}"></wa-icon>
                            </wa-button>
                            ${h(s.actions?.length,()=>l`
                                ${s.actions.map(t=>l`
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
                        ${le(this.processMarkdownContent(me.parse(s.content||"")))}
                        ${h(this.isStreaming,()=>l`
                            <span class="streaming-cursor">▋</span>
                        `)}
                        ${h(a&&s.attentionRequests,()=>l`
                        <div class="attention-requests">
                            ${s.attentionRequests.map((t,i)=>l`
                                <div class="attention-request attention-${t.type}">
                                    <div class="attention-header">
                                        <wa-icon name="${this.getAttentionIcon(t.type)}" label="${t.type}"></wa-icon>
                                        <strong>${t.title}</strong>
                                        ${h(t.priority==="urgent"||t.priority==="high",()=>l`
                                            <span class="priority-badge priority-${t.priority}">${t.priority}</span>
                                        `)}
                                    </div>
                                    <div class="attention-message">${t.message}</div>
                                    <div class="attention-actions">
                                        ${h(t.type==="confirmation",()=>l`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                @click="${()=>this.handleAttentionResponse(i,t,!0)}">
                                ${r("CONFIRM")}
                            </wa-button>
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${()=>this.handleAttentionResponse(i,t,!1)}">
                                ${r("CANCEL")}
                            </wa-button>
                                        `)}
                                        ${h(t.type==="input",()=>l`
                                            <div class="input-group">
                                                <wa-input
                                                    value="${this.attentionInputValue}"
                                                    @input="${o=>{this.attentionInputValue=o.target.value}}"
                                                    placeholder="${r("ENTER_RESPONSE")}">
                                                </wa-input>
                                                <wa-button
                                                    variant="brand"
                                                    appearance="filled"
                                                    size="small"
                                                    ?disabled="${!this.attentionInputValue.trim()}"
                                                    @click="${()=>this.handleAttentionResponse(i,t,this.attentionInputValue)}">
                                                    ${r("SUBMIT")}
                                                </wa-button>
                                            </div>
                                        `)}
                                        ${h(t.type==="approval",()=>l`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,t,!0)}">
                                                ${r("APPROVE")}
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,t,!1)}">
                                                ${r("REJECT")}
                                            </wa-button>
                                        `)}
                                        ${h(t.type==="execution",()=>l`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,t,!0)}">
                                                ${r("EXECUTE")}
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,t,!1)}">
                                                ${r("CANCEL")}
                                            </wa-button>
                                        `)}
                                    </div>
                                </div>
                            `)}
                        </div>
                        `)}
                        ${h(s.canContinue&&!a,()=>l`
                            <div class="continue-workflow">
                                <wa-button
                                    variant="brand"
                                    appearance="filled"
                                    size="small"
                                    @click="${()=>this.dispatchEvent(new CustomEvent("continue-workflow",{detail:{message:s},bubbles:!0,composed:!0}))}">
                                    ${r("CONTINUE_WORKFLOW")}
                                </wa-button>
                            </div>
                        `)}
                    </div>
                    ${h(e,()=>l`
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${r("COPY")}"
                            @click="${()=>this.copyToClipboard(s.content)}">
                            <wa-icon name="copy" label="${r("COPY")}"></wa-icon>
                        </wa-button>
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${r("RESEND")}"
                            @click="${t=>this.handleResend(t)}">
                            <wa-icon name="rotate-right" label="${r("RESEND")}"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}};P.styles=O`
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
    `;D([m({type:Object,attribute:!1})],P.prototype,"message",2);D([m({type:Boolean})],P.prototype,"isStreaming",2);D([m({type:Boolean})],P.prototype,"showHeader",2);D([m({type:Number,attribute:!1})],P.prototype,"messageIndex",2);D([v()],P.prototype,"attentionInputValue",2);P=D([_("ai-chat-message")],P);var Oe=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,L=(s,e,a,t)=>{for(var i=t>1?void 0:t?_e(e,a):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(t?n(e,a,i):n(i))||i);return t&&i&&Oe(e,a,i),i};let M=class extends N{constructor(){super(...arguments),this.value="",this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(s){const e=s.target;this.value=e.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(s){s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;const s=this.value;this.value="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),this.dispatchEvent(new CustomEvent("send",{detail:{value:s},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){return l`
            <div class="input-container">
                <div class="input-row">
                    <wa-textarea
                        placeholder="${r("TYPE_MESSAGE_ENTER")}"
                        size="small"
                        resize="auto"
                        rows="1"
                        .value="${this.value}"
                        ?disabled="${this.disabled||!this.hasProvider}"
                        @input="${this.onInput}"
                        @keydown="${this.onKeyDown}">
                    </wa-textarea>
                    
                    ${h(this.busy,()=>l`
                        <wa-button
                            appearance="plain"
                            size="small"
                            @click="${this.cancel}">
                            <wa-icon name="stop" label="${r("STOP")}"></wa-icon>
                        </wa-button>
                    `)}

                    <wa-button
                        appearance="plain"
                        size="small"
                        @click="${this.openSettings}">
                        <wa-icon name="gear" label="${r("SETTINGS")}"></wa-icon>
                    </wa-button>
                </div>
            </div>
        `}};M.styles=O`
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
    `;L([m({type:String})],M.prototype,"value",2);L([m({type:Boolean})],M.prototype,"disabled",2);L([m({type:Boolean})],M.prototype,"busy",2);L([m({type:Boolean})],M.prototype,"hasProvider",2);L([ne("wa-textarea")],M.prototype,"textareaElement",2);M=L([_("ai-chat-input")],M);var $e=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,te=(s,e,a,t)=>{for(var i=t>1?void 0:t?Ie(e,a):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(t?n(e,a,i):n(i))||i);return t&&i&&$e(e,a,i),i};let z=class extends N{constructor(){super(...arguments),this.message=r("NO_PROVIDER_CONFIGURED"),this.hint=r("CLICK_SETTINGS_TO_CONFIGURE")}render(){return l`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}};z.styles=O`
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
    `;te([m({type:String})],z.prototype,"message",2);te([m({type:String})],z.prototype,"hint",2);z=te([_("ai-empty-state")],z);var Pe=Object.getOwnPropertyDescriptor,Me=(s,e,a,t)=>{for(var i=t>1?void 0:t?Pe(e,a):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=n(i)||i);return i};let J=class extends N{render(){return l`
            <div class="message-wrapper assistant loading">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-animation name="flip" duration="2000" play>
                            <wa-icon name="robot" label="${r("AI_ASSISTANT")}"></wa-icon>
                        </wa-animation>
                        <span class="role-name">${r("AI_ASSISTANT")}</span>
                    </div>
                </div>
                <div class="message-content loading-dots">
                    <span>Thinking</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                </div>
            </div>
        `}};J.styles=O`
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
    `;J=Me([_("ai-loading-indicator")],J);var xe=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,F=(s,e,a,t)=>{for(var i=t>1?void 0:t?ke(e,a):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(t?n(e,a,i):n(i))||i);return t&&i&&xe(e,a,i),i};let k=class extends N{constructor(){super(...arguments),this.isStreaming=!1,this.groupId=""}renderStatusIcon(s){switch(s){case"streaming":return l`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return l`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return l`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}copyToClipboard(s){navigator.clipboard.writeText(s).catch(e=>{console.error("Failed to copy:",e)})}render(){if(!this.agentInfo)return l``;const s=this.message?.requiresAttention&&(this.message.attentionRequests?.length||0)>0;return this.message?l`
            <div class="agent-response-card status-${this.agentInfo.status} ${s?"requires-attention":""}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                        <span>${this.agentInfo.label}</span>
                        ${this.renderStatusIcon(this.agentInfo.status)}
                        ${h(s,()=>l`
                            <wa-icon name="bell" class="attention-indicator"></wa-icon>
                        `)}
                    </div>
                    <div class="agent-card-actions">
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${r("COPY")}"
                            @click="${()=>this.copyToClipboard(this.message?.content||"")}">
                            <wa-icon name="copy" label="${r("COPY")}"></wa-icon>
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
        `:l`
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
            `}};k.styles=O`
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
    `;F([m({type:Object,attribute:!1})],k.prototype,"agentInfo",2);F([m({type:Object,attribute:!1})],k.prototype,"message",2);F([m({type:Boolean})],k.prototype,"isStreaming",2);F([m({type:String})],k.prototype,"groupId",2);k=F([_("ai-agent-response-card")],k);var Re=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,se=(s,e,a,t)=>{for(var i=t>1?void 0:t?Ne(e,a):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(t?n(e,a,i):n(i))||i);return t&&i&&Re(e,a,i),i};let q=class extends N{handleAction(s){const e=s();e instanceof Promise&&e.catch(a=>{console.error("Action failed:",a)})}render(){if(!this.group)return l``;const s=Array.from(this.group.agents.values()),e=s.filter(c=>c.status==="completed").length,a=s.filter(c=>c.status==="streaming").length,t=s.filter(c=>c.status==="error").length,i=s.length>0&&e+t===s.length,o=s.length===1,n=s.filter(c=>c.message&&c.message.actions&&c.message.actions.length>0).flatMap(c=>c.message.actions.map(p=>({...p,agentRole:c.role,agentLabel:c.label}))).sort((c,p)=>{const w=c.requiresAttention?1:0;return(p.requiresAttention?1:0)-w});return l`
            <div class="agent-response-group">
                ${h(!o,()=>l`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="${r("MULTIPLE_AGENTS")}"></wa-icon>
                            <span>${r("MULTIPLE_AGENTS")}</span>
                            ${h(!i,()=>l`
                                <span class="agent-status-badge">
                                    ${h(a>0,()=>l`
                                        <span class="status-streaming">${a} responding</span>
                                    `)}
                                    ${h(e>0,()=>l`
                                        <span class="status-completed">${e}/${s.length} completed</span>
                                    `)}
                                </span>
                            `)}
                            ${h(i,()=>l`
                                <span class="agent-status-badge status-all-completed">
                                    All completed (${e})
                                </span>
                            `)}
                        </div>
                    </div>
                `)}
                <div class="agent-group-content">
                    ${j(s,c=>c.role,c=>{const p=c.message||(c.status==="streaming"&&this.findStreamingMessage?this.findStreamingMessage(c.role):void 0);return l`
                            <ai-agent-response-card
                                .agentInfo="${c}"
                                .message="${p}"
                                .isStreaming="${c.status==="streaming"}"
                                .groupId="${this.group.id}">
                            </ai-agent-response-card>
                        `})}
                </div>
                ${h(n.length>0&&i,()=>l`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="${r("QUICK_ACTIONS")}"></wa-icon>
                            <span>${r("QUICK_ACTIONS")}</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${j(n,(c,p)=>p.toString(),c=>l`
                                <wa-button
                                    variant="${c.requiresAttention?"brand":"neutral"}"
                                    appearance="${c.requiresAttention?"filled":"plain"}"
                                    size="small"
                                    title="${c.label}"
                                    @click="${()=>this.handleAction(c.action)}">
                                    <wa-icon name="${c.icon}" label="${c.label}"></wa-icon>
                                </wa-button>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        `}};q.styles=O`
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
    `;se([m({type:Object,attribute:!1})],q.prototype,"group",2);se([m({type:Function,attribute:!1})],q.prototype,"findStreamingMessage",2);q=se([_("ai-agent-response-group")],q);class De{constructor(){this.sessions=new Map,this.sessionTitles=new Map,this.sessionTimestamps=new Map,this.activeSessionId="",this.archivedSessions=new Map}setSaveCallback(e){this.saveCallback=e}async save(){this.saveCallback&&await this.saveCallback()}async loadSessions(){const{appSettings:e}=await I(()=>import("./geospace-app-BEc6wX3y.js").then(t=>t.a3),__vite__mapDeps([0,1,2,3,4,5])).then(t=>t.s),a=await e.get("aiChatSessions");if(a&&Array.isArray(a.active)){for(const t of a.active)t.id&&t.history&&Array.isArray(t.history)&&(this.sessions.set(t.id,{history:t.history}),this.sessionTitles.set(t.id,t.title||"New Chat"),this.sessionTimestamps.set(t.id,{createdAt:t.createdAt||Date.now(),updatedAt:t.updatedAt||Date.now()}));a.active.length>0&&a.activeSessionId&&(this.sessions.has(a.activeSessionId)?this.activeSessionId=a.activeSessionId:this.activeSessionId=a.active[0].id)}if(a&&Array.isArray(a.archived))for(const t of a.archived)t.id&&t.history&&Array.isArray(t.history)&&this.archivedSessions.set(t.id,{id:t.id,history:t.history,title:t.title||"New Chat",createdAt:t.createdAt||Date.now(),updatedAt:t.updatedAt||Date.now()})}async persistSessions(){const e=Array.from(this.sessions.entries()).map(([i,o])=>{const n=this.sessionTimestamps.get(i)||{createdAt:Date.now(),updatedAt:Date.now()};return{id:i,history:o.history,title:this.sessionTitles.get(i)||"New Chat",createdAt:n.createdAt,updatedAt:n.updatedAt}}),a=Array.from(this.archivedSessions.values()),{appSettings:t}=await I(()=>import("./geospace-app-BEc6wX3y.js").then(i=>i.a3),__vite__mapDeps([0,1,2,3,4,5])).then(i=>i.s);await t.set("aiChatSessions",{active:e,archived:a,activeSessionId:this.activeSessionId})}createSession(){const e=`session-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.sessions.set(e,{history:[]}),this.sessionTitles.set(e,"New Chat"),this.sessionTimestamps.set(e,{createdAt:Date.now(),updatedAt:Date.now()}),this.activeSessionId=e,this.save(),e}async deleteSession(e){if(this.sessions.size<=1)return!1;const a=this.sessions.get(e),t=this.sessionTitles.get(e),i=this.sessionTimestamps.get(e);if(a&&t&&this.archivedSessions.set(e,{id:e,history:a.history,title:t,createdAt:i?.createdAt||Date.now(),updatedAt:Date.now()}),this.sessions.delete(e),this.sessionTitles.delete(e),this.sessionTimestamps.delete(e),this.activeSessionId===e){const o=Array.from(this.sessions.keys())[0];this.activeSessionId=o||""}return await this.save(),!0}async restoreSession(e){const a=this.archivedSessions.get(e);return a?(this.sessions.set(e,{history:a.history}),this.sessionTitles.set(e,a.title),this.sessionTimestamps.set(e,{createdAt:a.createdAt,updatedAt:Date.now()}),this.archivedSessions.delete(e),this.activeSessionId=e,await this.save(),!0):!1}async permanentlyDeleteSession(e){return this.sessions.has(e)?!1:(this.archivedSessions.delete(e),await this.save(),!0)}getSession(e){return this.sessions.get(e)}setSession(e,a){this.sessions.set(e,a)}getActiveSession(){if(this.activeSessionId)return this.sessions.get(this.activeSessionId)}setActiveSession(e){this.sessions.has(e)&&(this.activeSessionId=e)}getActiveSessionId(){return this.activeSessionId}getAllSessionIds(){return Array.from(this.sessions.keys())}getAllSessions(){return Array.from(this.sessions.entries()).map(([e,a])=>({id:e,history:a.history,title:this.sessionTitles.get(e)||"New Chat"}))}getSessionTitle(e){return this.sessionTitles.get(e)||this.archivedSessions.get(e)?.title||"New Chat"}setSessionTitle(e,a){if(this.sessions.has(e)){this.sessionTitles.set(e,a);const t=this.sessionTimestamps.get(e);t&&(t.updatedAt=Date.now()),this.save()}}generateTitle(e){const a=e.trim();if(!a)return"New Chat";const t=30;return a.length<=t?a:a.substring(0,t).trim()+"..."}addMessage(e,a){const t=this.sessions.get(e);if(t){t.history.push(a);const i=this.sessionTimestamps.get(e);i&&(i.updatedAt=Date.now()),this.save()}}getSessionCount(){return this.sessions.size}getArchivedSessions(){return Array.from(this.archivedSessions.values()).sort((e,a)=>a.updatedAt-e.updatedAt)}getArchivedSessionCount(){return this.archivedSessions.size}}class Le{constructor(e){this.streamingMessages=new Map,this.currentStreamingIndex=-1,this.pendingUpdate=!1,this.onUpdate=e}createStreamingMessage(e,a){const t=++this.currentStreamingIndex;return this.streamingMessages.set(t,{message:{role:e,content:""},isStreaming:!0,timestamp:new Date,sessionId:a}),t}getStreamingMessage(e){return this.streamingMessages.get(e)}updateStreamingMessage(e,a){const t=this.streamingMessages.get(e);t&&(t.message.content+=a,this.scheduleUpdate())}completeStreamingMessage(e,a){const t=this.streamingMessages.get(e);t&&(t.message=a,t.isStreaming=!1)}removeStreamingMessage(e){this.streamingMessages.delete(e)}getAllStreamingMessages(){return Array.from(this.streamingMessages.values())}getAllStreamingMessagesByRole(e){return Array.from(this.streamingMessages.values()).filter(a=>a.message.role===e)}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(t=>t.message.role===e)?.message}scheduleUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.updateAnimationFrame=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.onUpdate?.()}))}cancelUpdates(){this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1)}clearAll(){for(const[e,a]of this.streamingMessages.entries())a.isStreaming&&(a.isStreaming=!1);this.streamingMessages.clear(),this.cancelUpdates()}clearForSession(e){const a=[];for(const[t,i]of this.streamingMessages.entries())i.sessionId===e&&(i.isStreaming&&(i.isStreaming=!1),a.push(t));a.forEach(t=>this.streamingMessages.delete(t)),a.length>0&&this.scheduleUpdate()}reset(){this.clearAll(),this.currentStreamingIndex=-1}}class Ue{constructor(e){this.aiService=e,this.settingsKey="aiViewChat",this.availableModels=[],this.loadingModels=!1}async initialize(){await this.loadProviders(),await this.loadSettings()}async loadProviders(){this.providers=await this.aiService.getProviders()||[]}async loadSettings(){if(this.providers&&this.providers.length>0){const e=await this.aiService.getDefaultProvider();this.selectedProvider=e,this.settingsProviderName=e.name,this.settingsModel=e.model}}getRequireToolApproval(){return!1}async saveSettings(e,a,t,i,o){const c={...await $.get(this.settingsKey)||{}};i!==void 0&&(c.requireToolApproval=i),o!==void 0&&(c.toolApprovalAllowlist=o),await $.set(this.settingsKey,c);const p=this.providers?.find(w=>w.name===e);if(p){const w={...p,model:a,...t!==void 0&&{apiKey:t}};this.selectedProvider=w,this.settingsProviderName=e,this.settingsModel=a,await this.updateProviderInAIConfig(e,{model:a,...t!==void 0&&{apiKey:t}}),await this.aiService.setDefaultProvider(e)}}async updateProviderInAIConfig(e,a){const{KEY_AI_CONFIG:t}=await I(()=>import("./geospace-app-BEc6wX3y.js").then(o=>o.a5),__vite__mapDeps([0,1,2,3,4,5])).then(o=>o.v),i=await $.get(t)||{};if(i.providers&&Array.isArray(i.providers)){const o=i.providers.findIndex(n=>n.name===e);o>=0&&(i.providers[o]={...i.providers[o],...a},await $.set(t,i))}}async loadToolApprovalAllowlist(){return(await $.get(this.settingsKey)||{}).toolApprovalAllowlist||[]}async fetchModels(e){const a=this.providers?.find(t=>t.name===e);if(a){this.loadingModels=!0;try{const i=`${a.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,o=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${a.apiKey}`,"Content-Type":"application/json"}});if(!o.ok)throw new Error(`Failed to fetch models: ${o.statusText}`);const c=(await o.json()).data||[];this.availableModels=c.map(p=>({id:p.id,name:p.name||p.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(t){throw this.availableModels=[],t}finally{this.loadingModels=!1}}}getProviders(){return this.providers||[]}getSelectedProvider(){return this.selectedProvider}setSelectedProvider(e){this.selectedProvider=e}async getSettingsProviderName(){if(!this.settingsProviderName){const e=await this.aiService.getDefaultProvider();this.settingsProviderName=e.name}return this.settingsProviderName}setSettingsProviderName(e){this.settingsProviderName=e}async getSettingsModel(){if(!this.settingsModel){const e=await this.aiService.getDefaultProvider();this.settingsModel=e.model}return this.settingsModel}setSettingsModel(e){this.settingsModel=e}getAvailableModels(){return this.availableModels}isLoadingModels(){return this.loadingModels}resetModelSelection(){this.availableModels=[],this.settingsModel=void 0}}class Ge{constructor(){this.groups=new Map,this.pausedWorkflows=new Map}createGroup(e,a,t,i,o){const n=`group-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.currentGroupId=n;const c={id:n,sessionId:e,userMessageIndex:a,userMessage:t,timestamp:new Date,agents:new Map,messageIndices:new Map};return i.forEach(p=>{const{label:w,icon:u}=o(p);c.agents.set(p,{role:p,label:w,icon:u,status:"streaming"})}),this.groups.set(n,c),n}getGroup(e){return this.groups.get(e)}updateAgentStatus(e,a,t,i,o){const n=this.groups.get(e);if(!n)return;const c=n.agents.get(a);c&&(c.status=t,i&&(c.message=i),o!==void 0&&(c.messageIndex=o,n.messageIndices.set(a,o)))}getGroupsForSession(e){return Array.from(this.groups.values()).filter(a=>a.sessionId===e)}findGroupForUserMessage(e,a,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.userMessageIndex===a&&i.userMessage===t)}findGroupForMessage(e,a,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.messageIndices.get(a)===t)}getCurrentGroupId(){return this.currentGroupId}setCurrentGroupId(e){this.currentGroupId=e}clearCurrentGroup(){this.currentGroupId=void 0}storePausedWorkflow(e,a,t){this.pausedWorkflows.set(e,{token:e,options:a,results:t})}getPausedWorkflow(e){return this.pausedWorkflows.get(e)}getAllPausedWorkflows(){return Array.from(this.pausedWorkflows.values())}clearPausedWorkflow(e){this.pausedWorkflows.delete(e)}clearAllPausedWorkflows(){this.pausedWorkflows.clear()}getAllGroups(){return Array.from(this.groups.values())}clearAll(){this.groups.clear(),this.currentGroupId=void 0}}var Ve=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,K=(s,e,a,t)=>{for(var i=t>1?void 0:t?ze(e,a):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(t?n(e,a,i):n(i))||i);return t&&i&&Ve(e,a,i),i};let R=class extends oe{constructor(){super(...arguments),this.sessionManager=new De,this.streamManager=new Le(()=>{this.requestUpdate(),this.scrollDebounceTimer&&clearTimeout(this.scrollDebounceTimer),this.scrollDebounceTimer=setTimeout(async()=>{await this.updateComplete,this.scrollToBottom(),this.scrollDebounceTimer=void 0},100)}),this.providerManager=new Ue(V),this.agentGroupManager=new Ge,this.busy=!1,this.inputValue="",this.requireToolApproval=!0,this.toolApprovalAllowlist=new Set,this.pendingToolApprovals=new Map}onAIConfigChanged(){this.providerManager.initialize().then(()=>{this.loadSettings().then(()=>{this.requestUpdate()})})}async doBeforeUI(){this.subscribe(re,()=>this.onAIConfigChanged()),this.sessionManager.setSaveCallback(()=>this.sessionManager.persistSessions()),await this.sessionManager.loadSessions(),this.sessionManager.getSessionCount()===0&&this.sessionManager.createSession(),await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async loadSettings(){const{appSettings:s}=await I(()=>import("./geospace-app-BEc6wX3y.js").then(t=>t.a3),__vite__mapDeps([0,1,2,3,4,5])).then(t=>t.s),e=await s.get("aiViewChat")||{};this.requireToolApproval=e.requireToolApproval!==void 0?e.requireToolApproval:!0;const a=await this.providerManager.loadToolApprovalAllowlist();this.toolApprovalAllowlist=new Set(a)}createNewSession(){this.sessionManager.createSession(),this.inputValue="",this.requestUpdate()}async deleteSession(s){if(!await this.sessionManager.deleteSession(s)){U("Cannot delete the last session");return}this.inputValue="",this.requestUpdate()}async scrollToBottom(){await this.updateComplete;const s=this.sessionManager.getActiveSessionId();if(!s)return;const a=this.shadowRoot?.querySelector(`wa-tab-panel[name="${s}"]`)?.querySelector("wa-scroller.chat-messages");if(a){const t=a.shadowRoot?.querySelector(".scroll-container");t?t.scrollTop=t.scrollHeight:a.scrollTo?a.scrollTo({top:a.scrollHeight,behavior:"smooth"}):a.scrollTop!==void 0&&(a.scrollTop=a.scrollHeight)}}updated(s){super.updated(s)}async sendMessage(){const s=this.inputValue.trim();if(!s||this.busy)return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const a=this.shadowRoot?.querySelector("wa-tab-group");a?.active&&(e=a.active,this.sessionManager.setActiveSession(e))}e&&(this.inputValue="",this.requestUpdate(),await this.handlePrompt(s))}async runCommand(s,e){const a=e||G,t=s.trim().split(/\s+/);if(t.length===0)return;const i=t.shift(),o=a.getCommand(i);if(!o){U("Command not found: "+i);return}const n={};o.parameters&&t.forEach((p,w)=>{o.parameters&&o.parameters[w]&&(n[o.parameters[w].name]=p)});const c=a.createExecutionContext(n);await a.execute(i,c),this.requestUpdate()}async handlePrompt(s){if(s.startsWith("/")){await this.runCommand(s.substring(1),G);return}const e=this.providerManager.getSelectedProvider();if(!e){U("Please configure AI provider in settings");return}let a=this.sessionManager.getActiveSessionId();if(!a)this.createNewSession(),a=this.sessionManager.getActiveSessionId();else{const p=this.shadowRoot?.querySelector("wa-tab-group");p?.active&&(a=p.active,this.sessionManager.setActiveSession(a))}if(!a)return;const t=V.createMessage(s),i=a,o=this.sessionManager.getSession(i);if(!o)return;if(o.history.push(t),o.history.length===1){const p=this.sessionManager.generateTitle(s);this.sessionManager.setSessionTitle(i,p)}await this.sessionManager.persistSessions(),this.requestUpdate(),await this.updateComplete,this.scrollToBottom(),this.busy=!0,this.abortController=new AbortController;const n=new Map,c={history:[...o.history]};ve.runAsync("Calling AI assistant",async()=>{const p=G.createExecutionContext(),w=we.createChild({...p}),u=V.getAgentContributions();if(u.length===0)throw new Error("No agents are registered. The App Support agent should be available from the AI system extension.");const T=u.filter(d=>d.canHandle?d.canHandle({...w.getProxy(),userPrompt:s}):!0).sort((d,g)=>(g.priority||0)-(d.priority||0));if(T.length===0)throw new Error(`No agents can handle the current context. Available agents: ${u.map(d=>d.role).join(", ")}`);const b=T.map(d=>d.role),C=this.sessionManager.getSession(i);if(!C)return;const y=this.agentGroupManager.createGroup(i,C.history.length-1,t,b,d=>{const g=u.find(A=>A.role===d);return{label:g?.label||d,icon:g?.icon||"robot"}});return V.executeAgentWorkflow({chatContext:c,chatConfig:e,callContext:w,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:b,requireToolApproval:this.requireToolApproval,onToolApprovalRequest:async(d,g)=>{const{ToolExecutor:A}=await I(()=>import("./geospace-app-BEc6wX3y.js").then(x=>x.a5),__vite__mapDeps([0,1,2,3,4,5])).then(x=>x.w),E=new A,B=G.createExecutionContext();return g.toolCalls.every(x=>{const W=E.findCommand(x,B);return W&&this.toolApprovalAllowlist.has(W.id)})?!0:new Promise(x=>{const W=`approval-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.pendingToolApprovals.set(W,{role:d,request:g,resolve:x,allowListSelections:new Map}),this.requestUpdate()})},onAgentStart:async d=>{const g=this.streamManager.createStreamingMessage(d,i);n.set(d,g),this.agentGroupManager.updateAgentStatus(y,d,"streaming"),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()},onToken:(d,g)=>{const A=n.get(d);A!==void 0&&this.streamManager.updateStreamingMessage(A,g),this.requestUpdate()},onAgentComplete:async(d,g)=>{const A=this.sessionManager.getSession(i);if(!A)return;const E=n.get(d);if(E!==void 0){this.streamManager.completeStreamingMessage(E,g);const B=A.history.length;A.history.push(g),n.delete(d),this.streamManager.removeStreamingMessage(E),this.agentGroupManager.updateAgentStatus(y,d,"completed",g,B),await this.sessionManager.persistSessions(),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()}},onAgentError:(d,g)=>{if(!this.sessionManager.getSession(i))return;const E=n.get(d);E!==void 0&&(this.streamManager.removeStreamingMessage(E),n.delete(d)),this.agentGroupManager.updateAgentStatus(y,d,"error",{role:d,content:`Error: ${g.message}`}),this.requestUpdate(),U(`Agent ${d} error: ${g.message}`)}}).then(()=>{this.agentGroupManager.clearCurrentGroup()})}).catch(p=>{p?.name!=="AbortError"&&U(`${p}`)}).finally(async()=>{this.busy=!1,this.abortController=void 0,this.streamManager.clearForSession(i),this.agentGroupManager.clearCurrentGroup(),await this.sessionManager.persistSessions(),this.requestUpdate()})}cancelStream(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.busy=!1),this.streamManager.cancelUpdates()}async openSettingsDialog(){const{commandRegistry:s}=await I(async()=>{const{commandRegistry:e}=await import("./geospace-app-BEc6wX3y.js").then(a=>a.a4);return{commandRegistry:e}},__vite__mapDeps([0,1,2,3,4,5]));s.execute("open_ai_config",{})}renderMessage(s,e,a,t){return l`
            <ai-chat-message
                .message="${e}"
                .isStreaming="${t||!1}"
                .showHeader="${!0}"
                .messageIndex="${a}"
                @resend="${i=>{this.handleResend(i.detail.message)}}">
            </ai-chat-message>
        `}async handleResend(s){if(!s||s.role!=="user")return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const a=this.shadowRoot?.querySelector("wa-tab-group");a?.active&&(e=a.active,this.sessionManager.setActiveSession(e))}e&&await this.handlePrompt(s.content)}render(){const s=this.sessionManager.getAllSessionIds(),e=this.sessionManager.getActiveSessionId(),a=this.providerManager.getSelectedProvider();return l`
            <div class="chat-container">
                ${h(s.length>0,()=>l`
                    <wa-tab-group 
                        active="${e||s[0]||""}" 
                        @wa-tab-show="${t=>{const i=t.detail.panel;this.sessionManager.getSession(i)&&(this.sessionManager.setActiveSession(i),this.inputValue="",this.requestUpdate())}}">
                        ${j(s,t=>t,(t,i)=>{const o=this.sessionManager.getSession(t);return o?l`
                                <wa-tab panel="${t}">
                                    <span>${this.sessionManager.getSessionTitle(t)||`${r("CHAT")} ${i+1}`}</span>
                                    ${h(s.length>1,()=>l`
                                        <wa-icon 
                                            name="xmark" 
                                            label="${r("CLOSE")}"
                                            @click="${n=>{n.stopPropagation(),this.deleteSession(t)}}">
                                        </wa-icon>
                                    `)}
                                </wa-tab>
                                <wa-tab-panel name="${t}">
                                    <wa-scroller class="chat-messages" orientation="vertical">
                                        <div class="chat-content">
                                            ${o.history.map((n,c)=>{const p=this.agentGroupManager.findGroupForUserMessage(t,c,n);return p&&n.role==="user"?l`
                                                        <ai-chat-message
                                                            .message="${n}"
                                                            .isStreaming="${!1}"
                                                            .showHeader="${!0}"
                                                            .messageIndex="${c}"
                                                            @resend="${u=>{this.handleResend(u.detail.message)}}">
                                                        </ai-chat-message>
                                                        <ai-agent-response-group
                                                            .group="${p}"
                                                            .findStreamingMessage="${u=>this.streamManager.findStreamingMessage(u)}">
                                                        </ai-agent-response-group>
                                                    `:this.agentGroupManager.findGroupForMessage(t,n.role,c)?l``:this.renderMessage(o,n,c)})}
                                            ${this.streamManager.getAllStreamingMessages().filter(n=>n.sessionId===t&&!Array.from(this.agentGroupManager.getAllGroups()).some(c=>c.sessionId===t&&c.agents.has(n.message.role))).map(n=>{const c=this.sessionManager.getSession(t);return this.renderMessage(c,n.message,-1,n.isStreaming)})}
                                            ${h(e===t&&this.busy&&this.streamManager.getAllStreamingMessages().filter(n=>n.sessionId===t).length===0,()=>l`
                                                <ai-loading-indicator></ai-loading-indicator>
                                            `)}
                                        </div>
                                    </wa-scroller>
                                </wa-tab-panel>
                            `:l``})}
                        ${h(this.sessionManager.getArchivedSessionCount()>0,()=>l`
                            <wa-dropdown 
                                slot="nav"
                                placement="bottom-end">
                                <wa-button 
                                    slot="trigger"
                                    variant="neutral"
                                    appearance="plain"
                                    size="small"
                                    title="${r("ARCHIVED_SESSIONS")}"
                                    with-caret>
                                    <wa-icon name="clock-rotate-left" label="${r("ARCHIVED_SESSIONS")}"></wa-icon>
                                    <span style="margin-left: 0.25rem;">${this.sessionManager.getArchivedSessionCount()}</span>
                                </wa-button>
                                <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                                    ${r("ARCHIVED_SESSIONS")}
                                </h6>
                                ${this.sessionManager.getArchivedSessions().map(t=>l`
                                    <wa-dropdown-item 
                                        @click="${async()=>{await this.sessionManager.restoreSession(t.id),this.requestUpdate()}}">
                                        <wa-icon name="history" label="${r("RESTORE")}" slot="icon"></wa-icon>
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
                                    @click="${async()=>{const t=this.sessionManager.getArchivedSessionCount(),i=t>1?"s":"";if(await ee(r("DELETE_ALL_CONFIRM",{count:t.toString(),plural:i}))){for(const o of this.sessionManager.getArchivedSessions())await this.sessionManager.permanentlyDeleteSession(o.id);this.requestUpdate()}}}">
                                    <wa-icon name="trash" label="${r("DELETE_ALL_ARCHIVED")}" slot="icon"></wa-icon>
                                    <span>${r("DELETE_ALL_ARCHIVED")}</span>
                                </wa-dropdown-item>
                            </wa-dropdown>
                        `)}
                        <wa-button 
                            slot="nav"
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${r("NEW_CHAT")}"
                            @click="${()=>{this.createNewSession(),this.requestUpdate()}}">
                            <wa-icon name="plus" label="${r("NEW_CHAT")}"></wa-icon>
                        </wa-button>
                    </wa-tab-group>
                `)}
                
                ${h(!a,()=>l`
                    <ai-empty-state
                        message="${r("NO_PROVIDER_CONFIGURED")}"
                        hint="${r("CLICK_SETTINGS_TO_CONFIGURE")}">
                    </ai-empty-state>
                `)}

                ${h(s.length>0,()=>l`
                    ${this.pendingToolApprovals.size>0?l`
                        <div class="tool-approval-section">
                            ${Array.from(this.pendingToolApprovals.entries()).map(([t,i])=>{const o=i.request.toolCalls,n=o.length;o.map(u=>{const T=u.function.arguments||"{}";let b={};try{b=JSON.parse(T)}catch{b={}}const C=Object.entries(b).map(([y,d])=>`${y}=${JSON.stringify(d)}`).join(", ");return`${u.function.name}${C?`(${C})`:"()"}`}).join(", ");const c=n>1?"s":"",p=n>1?", ...":"",w=r("TOOL_EXECUTION_PENDING",{toolCount:n.toString(),plural:c,toolName:o[0]?.function.name||"",more:p});return l`
                                    <wa-details class="approval-details">
                                        <span slot="summary" class="approval-summary">
                                            <span class="approval-summary-text">${w}</span>
                                            <div class="approval-actions-inline">
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="brand"
                                                    @click="${u=>{u.stopPropagation(),i.resolve(!1),this.pendingToolApprovals.delete(t),this.requestUpdate()}}">
                                                    <wa-icon name="xmark" label="${r("CANCEL")}"></wa-icon>
                                                </wa-button>
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="success"
                                                    @click="${async u=>{u.stopPropagation();for(const[T,b]of i.allowListSelections.entries())if(b){const C=i.request.toolCalls.find(y=>y.id===T);if(C){const{ToolExecutor:y}=await I(()=>import("./geospace-app-BEc6wX3y.js").then(E=>E.a5),__vite__mapDeps([0,1,2,3,4,5])).then(E=>E.w),d=new y,g=G.createExecutionContext(),A=d.findCommand(C,g);A&&this.toolApprovalAllowlist.add(A.id)}}if(i.allowListSelections.size>0){const T=await this.providerManager.getSettingsProviderName(),b=await this.providerManager.getSettingsModel();await this.providerManager.saveSettings(T||"",b||"",void 0,this.requireToolApproval,Array.from(this.toolApprovalAllowlist))}i.resolve(!0),this.pendingToolApprovals.delete(t),this.requestUpdate()}}">
                                                    <wa-icon name="check" label="${r("APPROVE")}"></wa-icon>
                                                </wa-button>
                                            </div>
                                        </span>
                                        <div class="approval-content">
                                            <div class="approval-message">
                                                <strong>${r("AGENT_WANTS_TO_EXECUTE",{role:i.role})}</strong>
                                                <ul class="tool-list">
                                                    ${o.map(u=>{const T=u.function.arguments||"{}";let b={};try{b=JSON.parse(T)}catch{b={}}const C=Object.entries(b).length>0?`(${Object.entries(b).map(([d,g])=>`${d}=${JSON.stringify(g)}`).join(", ")})`:"()",y=i.allowListSelections.get(u.id)||!1;return l`
                                                            <li class="tool-list-item">
                                                                <label class="tool-item-label">
                                                                    <wa-checkbox
                                                                        ?checked="${y}"
                                                                        @change="${d=>{const g=d.target.checked;i.allowListSelections.set(u.id,g),this.requestUpdate()}}">
                                                                    </wa-checkbox>
                                                                    <span>${r("ALWAYS_ALLOW")}</span>
                                                                </label>
                                                                <code>${u.function.name}${C}</code>
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
                
                ${h(s.length>0,()=>l`
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
        `}};R.styles=O`
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
    `;K([v()],R.prototype,"busy",2);K([v()],R.prototype,"inputValue",2);K([v()],R.prototype,"requireToolApproval",2);K([v()],R.prototype,"pendingToolApprovals",2);R=K([_("k-aiview")],R);var qe=Object.getOwnPropertyDescriptor,Fe=(s,e,a,t)=>{for(var i=t>1?void 0:t?qe(e,a):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=n(i)||i);return i};let Z=class extends fe{constructor(){super(...arguments),this.totalUsage={promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},this.providerUsage={},this.updateInterval=null}connectedCallback(){super.connectedCallback(),this.loadUsage(),this.updateInterval=window.setInterval(()=>{this.loadUsage()},5e3),Q(be,()=>{this.loadUsage()})}disconnectedCallback(){super.disconnectedCallback(),this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null)}async loadUsage(){try{this.totalUsage=await Y.getTotalUsage(),this.providerUsage=await Y.getAllProviderUsage(),this.requestUpdate()}catch(s){console.error("Failed to load token usage",s)}}formatNumber(s){return s>=1e6?(s/1e6).toFixed(2)+"M":s>=1e3?(s/1e3).toFixed(1)+"K":s.toString()}async handleReset(){await ee(r("RESET_CONFIRM"))&&(await Y.reset(),await this.loadUsage())}render(){return this.totalUsage.totalTokens>0?l`
            <wa-dropdown
                placement="top-end"
                distance="8">
                <wa-button
                    slot="trigger"
                    appearance="plain"
                    size="small"
                    title="${r("TOKEN_USAGE_STATS")}">
                    <wa-icon name="database" label="${r("TOKEN_USAGE")}" slot="start"></wa-icon>
                    ${this.formatNumber(this.totalUsage.totalTokens)} ${r("TOKENS")}
                </wa-button>
                
                <h3>${r("TOKEN_USAGE_STATS")}</h3>
                
                <h6>${r("TOTAL_USAGE")}</h6>
                <wa-dropdown-item>
                    <span>${r("TOTAL")}</span>
                    <div class="total-stats">
                        <div class="stat-item">
                            <span class="stat-label">${r("PROMPT")}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.promptTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${r("COMPLETION")}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.completionTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${r("TOTAL")}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.totalTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${r("REQUESTS")}</span>
                            <span class="stat-value">${this.totalUsage.requestCount}</span>
                        </div>
                    </div>
                </wa-dropdown-item>
                
                ${Object.keys(this.providerUsage).length>0?l`
                    <wa-divider></wa-divider>
                    <h6>${r("BY_PROVIDER")}</h6>
                    ${Object.entries(this.providerUsage).map(([e,a])=>l`
                        <wa-dropdown-item>
                            <span class="provider-name">${e}</span>
                            <div class="provider-stats">
                                <div class="stat-item">
                                    <span class="stat-label">${r("PROMPT")}</span>
                                    <span class="stat-value">${this.formatNumber(a.promptTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${r("COMPLETION")}</span>
                                    <span class="stat-value">${this.formatNumber(a.completionTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${r("TOTAL")}</span>
                                    <span class="stat-value">${this.formatNumber(a.totalTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${r("REQUESTS")}</span>
                                    <span class="stat-value">${a.requestCount}</span>
                                </div>
                            </div>
                        </wa-dropdown-item>
                    `)}
                `:""}
                
                <wa-divider></wa-divider>
                <wa-dropdown-item variant="danger" @click=${this.handleReset}>
                    <wa-icon name="trash" slot="icon"></wa-icon>
                    ${r("RESET_STATISTICS")}
                </wa-dropdown-item>
            </wa-dropdown>
        `:l``}};Z.styles=O`
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
    `;Z=Fe([_("k-token-usage")],Z);var Ke=Object.defineProperty,We=Object.getOwnPropertyDescriptor,S=(s,e,a,t)=>{for(var i=t>1?void 0:t?We(e,a):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(t?n(e,a,i):n(i))||i);return t&&i&&Ke(e,a,i),i};let f=class extends oe{constructor(){super(...arguments),this.providers=[],this.defaultProvider="",this.editingCell=null,this.editingValue="",this.hasChanges=!1,this.availableModels=[],this.loadingModels=!1,this.requireToolApproval=!0,this.toolApprovalAllowlist=[],this.smartToolDetection=!1,this.availableCommands=[],this.providerFactory=new Ae}async doInitUI(){await this.loadAvailableCommands(),await this.loadConfig(),Q(re,()=>{this.loadConfig()}),Q(Se,()=>{this.loadConfig()})}async loadConfig(){const s=await $.get(X);this.aiConfig=s;const e=this.getContributedProviders(),a=s?.providers||[];this.providers=this.mergeProviders(a,e);const t=s?.defaultProvider||"";t&&!this.providers.find(i=>i.name===t)?this.defaultProvider="":this.defaultProvider=t,s?.requireToolApproval!==void 0?this.requireToolApproval=s.requireToolApproval:this.requireToolApproval=!0,this.toolApprovalAllowlist=s?.toolApprovalAllowlist||[],s?.smartToolDetection!==void 0?this.smartToolDetection=s.smartToolDetection:this.smartToolDetection=!1,this.hasChanges=!1,this.markDirty(!1),this.editingCell=null,await this.updateComplete,this.syncCheckboxStates(),this.syncToolApprovalCheckbox(),this.syncSmartToolDetectionCheckbox()}async loadAvailableCommands(){const{commandRegistry:s}=await I(async()=>{const{commandRegistry:a}=await import("./geospace-app-BEc6wX3y.js").then(t=>t.a4);return{commandRegistry:a}},__vite__mapDeps([0,1,2,3,4,5])),e=s.listCommands();this.availableCommands=Object.entries(e).map(([a,t])=>({id:a,name:t.name||a,description:t.description})).sort((a,t)=>a.name.localeCompare(t.name))}getContributedProviders(){return H.getContributions(ye).map(e=>e.provider)}mergeProviders(s,e){const a=new Set(s.map(i=>i.name)),t=e.filter(i=>!a.has(i.name));return t.length>0?[...s,...t]:s}syncCheckboxStates(){const s=this.shadowRoot?.querySelectorAll("tbody tr");s&&this.providers&&s.forEach((e,a)=>{const t=e.querySelector("td:first-child wa-checkbox"),i=this.providers[a];t&&i&&(t.checked=this.defaultProvider===i.name)})}syncToolApprovalCheckbox(){const s=this.shadowRoot?.querySelector(".tool-approval-controls wa-checkbox");s&&(s.checked=this.requireToolApproval)}syncSmartToolDetectionCheckbox(){const s=this.shadowRoot?.querySelector(".tool-detection-section wa-checkbox");s&&(s.checked=this.smartToolDetection)}async saveConfig(){if(!this.aiConfig)return;const s={...this.aiConfig,defaultProvider:this.defaultProvider,providers:this.providers,requireToolApproval:this.requireToolApproval,toolApprovalAllowlist:this.toolApprovalAllowlist,smartToolDetection:this.smartToolDetection};await $.set(X,s),this.hasChanges=!1,this.markDirty(!1)}async save(){if(this.hasChanges)try{await this.saveConfig()}catch(s){throw console.error("Failed to save AI config:",s),s}}async startCellEditing(s,e){const a=this.providers[s];if(!a)return;const t=this.getProviderFieldValue(a,e);this.editingCell={rowIndex:s,field:e},this.editingValue=t,e==="model"&&(await this.updateComplete,await this.fetchModels(a))}async fetchModels(s){this.loadingModels=!0,this.availableModels=[],await this.updateComplete;try{const e=this.providerFactory.getProvider(s);if(e.getAvailableModels){const a=await e.getAvailableModels(s);this.availableModels=Array.isArray(a)?a:[]}else this.availableModels=[]}catch{this.availableModels=[]}finally{this.loadingModels=!1}}cancelCellEditing(){this.editingCell=null,this.editingValue="",this.availableModels=[],this.loadingModels=!1}saveCellEditing(){if(!this.editingCell)return;const{rowIndex:s,field:e}=this.editingCell;this.updateProviderField(s,e,this.editingValue),this.cancelCellEditing()}markDirtyAndUpdate(){this.hasChanges=!0,this.markDirty(!0)}getProviderFieldValue(s,e){const t={name:"name",model:"model",chatApiEndpoint:"chatApiEndpoint",apiKey:"apiKey",ocrApiEndpoint:"ocrApiEndpoint",ocrModel:"ocrModel"}[e];if(!t)return"";const i=s[t];return typeof i=="string"?i:""}updateProviderField(s,e,a){this.providers=this.providers.map((t,i)=>{if(i===s){const o={...t};return e==="ocrApiEndpoint"||e==="ocrModel"?o[e]=a||void 0:o[e]=a,o}return t}),this.markDirtyAndUpdate()}updateProviderParameter(s,e,a){this.providers=this.providers.map((t,i)=>{if(i===s){const o={...t.parameters||{},[e]:a};return{...t,parameters:o}}return t}),this.markDirtyAndUpdate()}async deleteProvider(s){const e=this.providers[s];await ee(r("DELETE_PROVIDER_CONFIRM",{name:e.name}))&&(this.defaultProvider===e.name&&(this.defaultProvider=""),this.providers=this.providers.filter((t,i)=>i!==s),this.markDirtyAndUpdate())}addProvider(){const s={name:"new-provider",model:"",apiKey:"",chatApiEndpoint:""};this.providers=[...this.providers,s],this.markDirtyAndUpdate()}setDefaultProvider(s){this.defaultProvider!==s&&(this.defaultProvider=s,this.markDirtyAndUpdate())}createInputHandlers(){return{onInput:s=>{const e=s.target;this.editingValue=e.value},onKeydown:s=>{s.key==="Enter"?(s.preventDefault(),this.saveCellEditing()):s.key==="Escape"&&(s.preventDefault(),this.cancelCellEditing())},onBlur:()=>{this.saveCellEditing()}}}renderEditableCell(s,e,a,t="text",i,o){const n=this.editingCell?.rowIndex===s&&this.editingCell?.field===e,c=this.createInputHandlers();return n&&o?o:n?l`
                <wa-input
                    type="${t}"
                    .value="${this.editingValue}"
                    placeholder="${i||""}"
                    @input="${c.onInput}"
                    @keydown="${c.onKeydown}"
                    @blur="${c.onBlur}"
                    autofocus>
                </wa-input>
            `:l`<span>${a}</span>`}renderModelCell(s,e){return this.editingCell?.rowIndex===s&&this.editingCell?.field==="model"?l`
            ${h(this.loadingModels,()=>l`
                <wa-input
                    .value="${this.editingValue}"
                    placeholder="${r("LOADING_MODELS")}"
                    readonly>
                    <wa-animation name="spinner" play slot="start"></wa-animation>
                </wa-input>
            `,()=>l`
                ${h(this.availableModels.length>0,()=>l`
                    <wa-dropdown
                        @wa-select="${t=>{const i=t.detail.item.value;i&&(this.editingValue=i,this.saveCellEditing())}}"
                        placement="bottom-start">
                        <wa-input
                            slot="trigger"
                            .value="${this.editingValue}"
                            placeholder="${r("SELECT_MODEL")}"
                            readonly
                            @keydown="${t=>{t.key==="Escape"&&(t.preventDefault(),this.cancelCellEditing())}}">
                        </wa-input>
                        ${this.availableModels.map(t=>l`
                            <wa-dropdown-item value="${t.id}">
                                ${t.name||t.id}
                            </wa-dropdown-item>
                        `)}
                    </wa-dropdown>
                `,()=>l`
                    ${this.renderEditableCell(s,"model",e.model)}
                `)}
            `)}
        `:l`<span>${e.model}</span>`}render(){return l`
            <div class="ai-config-editor">
                <div class="editor-header">
                    <h2>${r("PROVIDERS")}</h2>
                    <div class="header-actions">
                        <wa-button 
                            variant="brand" 
                            appearance="filled"
                            @click="${()=>this.addProvider()}">
                            ${r("ADD_PROVIDER")}
                        </wa-button>
                    </div>
                </div>

                <div class="table-container">
                    <table class="providers-table">
                        <thead>
                            <tr>
                                <th>${r("DEFAULT")}</th>
                                <th>${r("NAME")}</th>
                                <th>${r("MODEL")}</th>
                                <th>${r("API_ENDPOINT")}</th>
                                <th>${r("API_KEY")}</th>
                                <th>${r("OCR_ENDPOINT")}</th>
                                <th>${r("OCR_MODEL")}</th>
                                <th>${r("ACTIONS")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${j(this.providers,(s,e)=>e,(s,e)=>l`
                                <tr class="${this.editingCell?.rowIndex===e?"editing":""}">
                                    <td>
                                        <wa-checkbox
                                            .checked="${this.defaultProvider===s.name}"
                                            @change="${async a=>{const t=a.target;if(t.checked){this.setDefaultProvider(s.name),await this.updateComplete;const i=this.shadowRoot?.querySelectorAll("tbody tr");i&&i.forEach(o=>{const n=o.querySelector("td:first-child wa-checkbox");n&&n!==t&&(n.checked=!1)})}else this.defaultProvider===s.name&&(t.checked=!0)}}">
                                        </wa-checkbox>
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"name")}">
                                        ${this.renderEditableCell(e,"name",s.name)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"model")}">
                                        ${this.renderModelCell(e,s)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"chatApiEndpoint")}">
                                        ${this.renderEditableCell(e,"chatApiEndpoint",l`<span class="endpoint-text">${s.chatApiEndpoint}</span>`)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"apiKey")}">
                                        ${this.renderEditableCell(e,"apiKey",l`<span class="api-key-text">${s.apiKey?"••••••••":""}</span>`,"password",r("API_KEY"))}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"ocrApiEndpoint")}">
                                        ${this.renderEditableCell(e,"ocrApiEndpoint",s.ocrApiEndpoint||"-","text",r("OPTIONAL"))}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"ocrModel")}">
                                        ${this.renderEditableCell(e,"ocrModel",s.ocrModel||"-","text",r("OPTIONAL"))}
                                    </td>
                                    <td>
                                        <wa-button
                                            variant="danger"
                                            appearance="plain"
                                            size="small"
                                            @click="${()=>this.deleteProvider(e)}">
                                            ${r("DELETE_PROVIDER")}
                                        </wa-button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>

                ${h(this.providers.length===0,()=>l`
                    <div class="empty-state">
                        <p>${r("NO_PROVIDERS_CONFIGURED")}</p>
                    </div>
                `)}

                <div class="tool-approval-section">
                    <h3>${r("TOOL_APPROVALS")}</h3>
                    <div class="tool-approval-controls">
                        <wa-checkbox
                            .checked="${this.requireToolApproval}"
                            @change="${s=>{const e=s.target;this.requireToolApproval=e.checked,this.markDirtyAndUpdate()}}">
                            ${r("REQUIRE_APPROVAL_BEFORE_EXECUTING")}
                        </wa-checkbox>
                    </div>

                    <div class="tool-detection-section" style="margin-top: 1.5rem;">
                        <wa-checkbox
                            .checked="${this.smartToolDetection}"
                            @change="${s=>{const e=s.target;this.smartToolDetection=e.checked,this.markDirtyAndUpdate()}}">
                            ${r("SMART_TOOL_DETECTION")}
                        </wa-checkbox>
                        <p class="hint" style="margin-top: 0.5rem; margin-left: 1.75rem; color: var(--wa-color-text-secondary, #666); font-size: 0.875rem;">
                            ${r("SMART_TOOL_DETECTION_HINT")}
                        </p>
                    </div>

                    <div class="allowlist-section">
                        <h4>
                            ${r("APPROVED_COMMANDS")}
                            <span class="command-stats">
                                (${this.toolApprovalAllowlist.length}/${this.availableCommands.length})
                            </span>
                        </h4>
                        <p class="hint">
                            ${this.requireToolApproval?r("SELECT_COMMANDS_WITHOUT_APPROVAL"):r("COMMANDS_AUTO_APPROVED")}
                        </p>
                        <div class="commands-list ${this.requireToolApproval?"":"disabled"}">
                            ${this.availableCommands.map(s=>l`
                                <div class="command-item">
                                    <wa-checkbox
                                        .checked="${this.toolApprovalAllowlist.includes(s.id)}"
                                        ?disabled="${!this.requireToolApproval}"
                                        @change="${e=>{e.target.checked?this.toolApprovalAllowlist.includes(s.id)||(this.toolApprovalAllowlist=[...this.toolApprovalAllowlist,s.id],this.markDirtyAndUpdate()):(this.toolApprovalAllowlist=this.toolApprovalAllowlist.filter(t=>t!==s.id),this.markDirtyAndUpdate())}}">
                                        <div class="command-label">
                                            ${s.name}
                                            ${s.description?l`
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
        `}};f.styles=O`
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

    `;S([m({attribute:!1})],f.prototype,"input",2);S([v()],f.prototype,"aiConfig",2);S([v()],f.prototype,"providers",2);S([v()],f.prototype,"defaultProvider",2);S([v()],f.prototype,"editingCell",2);S([v()],f.prototype,"editingValue",2);S([v()],f.prototype,"hasChanges",2);S([v()],f.prototype,"availableModels",2);S([v()],f.prototype,"loadingModels",2);S([v()],f.prototype,"requireToolApproval",2);S([v()],f.prototype,"toolApprovalAllowlist",2);S([v()],f.prototype,"smartToolDetection",2);S([v()],f.prototype,"availableCommands",2);f=S([_("k-ai-config-editor")],f);const je="aisystem",He={APP_SUPPORT:"App Support",APP_SUPPORT_DESC:"General app support",TOKEN_USAGE:"Token Usage",OPEN_AI_CONFIG:"Open AI Config",OPEN_AI_CONFIG_DESC:"Opens the AI settings editor",AI_SETTINGS:"AI Settings",AI_CONFIG:"AI Config",NO_PROVIDER_CONFIGURED:"No AI provider configured",CLICK_SETTINGS_TO_CONFIGURE:"Click the settings button to configure",TYPE_MESSAGE_ENTER:"Type your message and press Enter...",STOP:"Stop",SETTINGS:"Settings",CLOSE:"Close",ARCHIVED_SESSIONS:"Archived Sessions",RESTORE:"Restore",DELETE_ALL_ARCHIVED:"Delete All Archived",DELETE_ALL_CONFIRM:"Are you sure you want to permanently delete all {count} archived session{plural}?",NEW_CHAT:"New Chat",CHAT:"Chat",CANCEL:"Cancel",APPROVE:"Approve",TOOL_APPROVAL_REQUEST:"Tool Approval Request",TOOL_CALLS:"Tool Calls",TOOL_APPROVAL_MESSAGE:"The AI wants to execute {toolCount} tool call{plural}: {toolList}",COPY:"Copy",AI_ASSISTANT:"AI Assistant",MULTIPLE_AGENTS:"Multiple Agents",QUICK_ACTIONS:"Quick Actions",TOKEN_USAGE_STATS:"Token Usage Statistics",TOTAL_USAGE:"Total Usage",TOTAL:"Total",PROMPT:"Prompt",COMPLETION:"Completion",REQUESTS:"Requests",BY_PROVIDER:"By Provider",RESET_STATISTICS:"Reset Statistics",RESET_CONFIRM:"Reset all token usage statistics?",TOKENS:"tokens",LOADING_MODELS:"Loading models...",SELECT_MODEL:"Select a model",TOOL_EXECUTION_PENDING:"Tool execution pending: {toolCount} tool{plural} ({toolName}{more})",AGENT_WANTS_TO_EXECUTE:'Agent "{role}" wants to execute the following tools:',ALWAYS_ALLOW:"Always allow",COPY_CODE:"Copy code",REQUIRES_ATTENTION:"Requires attention",RESEND:"Resend",CONFIRM:"Confirm",REJECT:"Reject",ENTER_RESPONSE:"Enter your response...",SUBMIT:"Submit",CONTINUE_WORKFLOW:"Continue Workflow",PROVIDERS:"Providers",ADD_PROVIDER:"Add Provider",DEFAULT:"Default",NAME:"Name",MODEL:"Model",API_ENDPOINT:"API Endpoint",API_KEY:"API Key",OCR_ENDPOINT:"OCR Endpoint",OCR_MODEL:"OCR Model",ACTIONS:"Actions",DELETE_PROVIDER:"Delete",DELETE_PROVIDER_CONFIRM:'Delete provider "{name}"?',NO_PROVIDERS_CONFIGURED:'No providers configured. Click "Add Provider" to get started.',TOOL_APPROVALS:"Tool Approvals",REQUIRE_APPROVAL_BEFORE_EXECUTING:"Require approval before executing tools",SMART_TOOL_DETECTION:"Use smart tool detection (reduces token usage)",SMART_TOOL_DETECTION_HINT:"When enabled, a small ML model running in your browser will detect if a prompt needs tools. This reduces token usage for simple queries like greetings. Note: The model (approximately 60-80MB quantized) will be downloaded on first use, which may take some time.",APPROVED_COMMANDS:"Approved Commands",SELECT_COMMANDS_WITHOUT_APPROVAL:"Select commands that can be executed without approval:",COMMANDS_AUTO_APPROVED:"These commands will be approved automatically when approval is enabled:",OPTIONAL:"Optional"},Be={APP_SUPPORT:"App-Unterstützung",APP_SUPPORT_DESC:"Allgemeine App-Unterstützung",TOKEN_USAGE:"Token-Verbrauch",OPEN_AI_CONFIG:"KI-Konfiguration öffnen",OPEN_AI_CONFIG_DESC:"Öffnet den KI-Einstellungseditor",AI_SETTINGS:"KI-Einstellungen",AI_CONFIG:"KI-Konfiguration",NO_PROVIDER_CONFIGURED:"Kein KI-Anbieter konfiguriert",CLICK_SETTINGS_TO_CONFIGURE:"Klicken Sie auf die Einstellungsschaltfläche zum Konfigurieren",TYPE_MESSAGE_ENTER:"Geben Sie Ihre Nachricht ein und drücken Sie Enter...",STOP:"Stopp",SETTINGS:"Einstellungen",CLOSE:"Schließen",ARCHIVED_SESSIONS:"Archivierte Sitzungen",RESTORE:"Wiederherstellen",DELETE_ALL_ARCHIVED:"Alle archivierten löschen",DELETE_ALL_CONFIRM:"Möchten Sie wirklich alle {count} archivierte Sitzung{plural} dauerhaft löschen?",NEW_CHAT:"Neuer Chat",CHAT:"Chat",CANCEL:"Abbrechen",APPROVE:"Genehmigen",TOOL_APPROVAL_REQUEST:"Werkzeug-Genehmigungsanfrage",TOOL_CALLS:"Werkzeugaufrufe",TOOL_APPROVAL_MESSAGE:"Die KI möchte {toolCount} Werkzeugaufruf{plural} ausführen: {toolList}",COPY:"Kopieren",AI_ASSISTANT:"KI-Assistent",MULTIPLE_AGENTS:"Mehrere Agenten",QUICK_ACTIONS:"Schnellaktionen",TOKEN_USAGE_STATS:"Token-Verbrauchsstatistiken",TOTAL_USAGE:"Gesamtverbrauch",TOTAL:"Gesamt",PROMPT:"Eingabeaufforderung",COMPLETION:"Vervollständigung",REQUESTS:"Anfragen",BY_PROVIDER:"Nach Anbieter",RESET_STATISTICS:"Statistiken zurücksetzen",RESET_CONFIRM:"Alle Token-Verbrauchsstatistiken zurücksetzen?",TOKENS:"Tokens",LOADING_MODELS:"Modelle werden geladen...",SELECT_MODEL:"Modell auswählen",TOOL_EXECUTION_PENDING:"Werkzeugausführung ausstehend: {toolCount} Werkzeug{plural} ({toolName}{more})",AGENT_WANTS_TO_EXECUTE:'Agent "{role}" möchte die folgenden Werkzeuge ausführen:',ALWAYS_ALLOW:"Immer erlauben",COPY_CODE:"Code kopieren",REQUIRES_ATTENTION:"Erfordert Aufmerksamkeit",RESEND:"Erneut senden",CONFIRM:"Bestätigen",REJECT:"Ablehnen",ENTER_RESPONSE:"Geben Sie Ihre Antwort ein...",SUBMIT:"Absenden",CONTINUE_WORKFLOW:"Workflow fortsetzen",PROVIDERS:"Anbieter",ADD_PROVIDER:"Anbieter hinzufügen",DEFAULT:"Standard",NAME:"Name",MODEL:"Modell",API_ENDPOINT:"API-Endpunkt",API_KEY:"API-Schlüssel",OCR_ENDPOINT:"OCR-Endpunkt",OCR_MODEL:"OCR-Modell",ACTIONS:"Aktionen",DELETE_PROVIDER:"Löschen",DELETE_PROVIDER_CONFIRM:'Anbieter "{name}" löschen?',NO_PROVIDERS_CONFIGURED:'Keine Anbieter konfiguriert. Klicken Sie auf "Anbieter hinzufügen", um zu beginnen.',TOOL_APPROVALS:"Werkzeug-Genehmigungen",REQUIRE_APPROVAL_BEFORE_EXECUTING:"Genehmigung vor der Ausführung von Werkzeugen erforderlich",SMART_TOOL_DETECTION:"Intelligente Werkzeugerkennung verwenden (reduziert Token-Verbrauch)",SMART_TOOL_DETECTION_HINT:"Wenn aktiviert, erkennt ein kleines ML-Modell in Ihrem Browser, ob eine Eingabeaufforderung Werkzeuge benötigt. Dies reduziert den Token-Verbrauch bei einfachen Abfragen wie Begrüßungen. Hinweis: Das Modell (ca. 60-80MB quantisiert) wird bei der ersten Verwendung heruntergeladen, was einige Zeit dauern kann.",APPROVED_COMMANDS:"Genehmigte Befehle",SELECT_COMMANDS_WITHOUT_APPROVAL:"Wählen Sie Befehle aus, die ohne Genehmigung ausgeführt werden können:",COMMANDS_AUTO_APPROVED:"Diese Befehle werden automatisch genehmigt, wenn die Genehmigung aktiviert ist:",OPTIONAL:"Optional"},Ye={namespace:je,en:He,de:Be};H.registerContribution(de,Ye);H.registerContribution(pe,{label:r("APP_SUPPORT"),description:r("APP_SUPPORT_DESC"),role:"appsupport",priority:100,icon:"question-circle",sysPrompt:Ee,tools:()=>$.get(X).then(s=>({enabled:!0,smartToolDetection:s?.smartToolDetection??!1}))});H.registerContribution(ae,{target:ae,label:r("TOKEN_USAGE"),html:"<k-token-usage></k-token-usage>"});ie.registerEditorInputHandler({ranking:1e3,canHandle:s=>s.key===".system.ai-config",handle:async s=>(s.editorId="ai-config-editor",s.widgetFactory=()=>l`
                <k-ai-config-editor .input=${s}></k-ai-config-editor>
            `,s)});he({command:{id:"open_ai_config",name:r("OPEN_AI_CONFIG"),description:r("OPEN_AI_CONFIG_DESC"),parameters:[]},handler:{execute:s=>{const e={title:r("AI_SETTINGS"),data:{},key:".system.ai-config",icon:"robot",state:{}};ie.loadEditor(e).then()}},contribution:{target:ge,icon:"robot",label:r("AI_CONFIG")}});ue.put("aiService",V);
