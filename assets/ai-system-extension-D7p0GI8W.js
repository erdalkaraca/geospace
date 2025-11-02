const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-D0hO92Dn.js","assets/index-C4bFKT08.js","assets/index-C2t38aP0.css","assets/main-Bk6wZs2B.css"])))=>i.map(i=>d[i]);
import{n as K,o as R,j as D,J as L,L as J,K as Q,i as _,c as y,C as G,b as Y,u as X,t as Z,r as ee}from"./main-D0hO92Dn.js";import{a as M,n as g,r as k,i as P,x as o,l as d,o as te,t as x,ab as se,_ as ae}from"./index-C4bFKT08.js";var ie=Object.defineProperty,re=Object.getOwnPropertyDescriptor,q=(s,e,a,t)=>{for(var i=t>1?void 0:t?re(e,a):e,n=s.length-1,r;n>=0;n--)(r=s[n])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&ie(e,a,i),i};let $=class extends P{constructor(){super(...arguments),this.isStreaming=!1,this.showHeader=!0,this.attentionInputValue=""}formatTimestamp(){return new Date().toLocaleTimeString()}copyToClipboard(s){navigator.clipboard.writeText(s).catch(e=>{console.error("Failed to copy:",e)})}handleResend(s){s&&(s.preventDefault(),s.stopPropagation()),this.message&&this.dispatchEvent(new CustomEvent("resend",{detail:{message:this.message,messageIndex:this.messageIndex},bubbles:!0,composed:!0}))}getAttentionIcon(s){switch(s){case"confirmation":return"check-circle";case"input":return"input";case"approval":return"hand";case"execution":return"play";case"info":return"info-circle";default:return"bell"}}updated(s){super.updated(s),s.has("attentionInputValue")&&this.dispatchEvent(new CustomEvent("attention-input-change",{detail:{value:this.attentionInputValue},bubbles:!0,composed:!0})),(s.has("message")||!this.hasAttribute("data-is-user"))&&this.updateAlignment()}updateAlignment(){if(this.message){const s=this.message.role==="user";this.setAttribute("data-is-user",String(s))}}handleAttentionResponse(s,e,a){this.message&&this.dispatchEvent(new CustomEvent("attention-response",{detail:{messageIndex:this.messageIndex,requestIndex:s,request:e,response:a},bubbles:!0,composed:!0}))}handleAction(s){const e=s();e instanceof Promise&&e.catch(a=>{console.error("Action failed:",a)})}render(){if(!this.message)return o``;const s=this.message,e=s.role==="user",a=s.requiresAttention&&(s.attentionRequests?.length||0)>0;return o`
            <div class="message-wrapper ${e?"user":"assistant"} ${this.isStreaming?"streaming":""} ${a?"requires-attention":""}">
                ${d(this.showHeader&&!e,()=>o`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="robot" 
                                label="${s.role}">
                            </wa-icon>
                            <span class="role-name">${s.role}</span>
                            ${d(a,()=>o`
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
                                @click="${()=>this.copyToClipboard(s.content)}">
                                <wa-icon slot="label" name="copy" label="Copy"></wa-icon>
                            </wa-button>
                            ${d(s.actions?.length,()=>o`
                                ${s.actions.map(t=>o`
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
                        ${te(K.parse(s.content||""))}
                        ${d(this.isStreaming,()=>o`
                            <span class="streaming-cursor">▋</span>
                        `)}
                        ${d(a&&s.attentionRequests,()=>o`
                        <div class="attention-requests">
                            ${s.attentionRequests.map((t,i)=>o`
                                <div class="attention-request attention-${t.type}">
                                    <div class="attention-header">
                                        <wa-icon name="${this.getAttentionIcon(t.type)}" label="${t.type}"></wa-icon>
                                        <strong>${t.title}</strong>
                                        ${d(t.priority==="urgent"||t.priority==="high",()=>o`
                                            <span class="priority-badge priority-${t.priority}">${t.priority}</span>
                                        `)}
                                    </div>
                                    <div class="attention-message">${t.message}</div>
                                    <div class="attention-actions">
                                        ${d(t.type==="confirmation",()=>o`
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
                                        ${d(t.type==="input",()=>o`
                                            <div class="input-group">
                                                <wa-input
                                                    value="${this.attentionInputValue}"
                                                    @input="${n=>{this.attentionInputValue=n.target.value}}"
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
                                        ${d(t.type==="approval",()=>o`
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
                                        ${d(t.type==="execution",()=>o`
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
                        ${d(s.canContinue&&!a,()=>o`
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
                    ${d(e,()=>o`
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="Copy"
                            class="resend-button"
                            @click="${()=>this.copyToClipboard(s.content)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="Resend"
                            class="resend-button"
                            @click="${t=>this.handleResend(t)}">
                            <wa-icon name="rotate-right" label="Resend"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}};$.styles=M`
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

        .attention-indicator {
            color: var(--wa-color-warning-50);
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

        .resend-button {
            flex-shrink: 0;
            opacity: 1;
        }

        .message-content-wrapper.user .resend-button + .resend-button {
            margin-left: 0.25rem;
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

        .input-group wa-input {
            flex: 1;
        }
    `;q([g({type:Object,attribute:!1})],$.prototype,"message",2);q([g({type:Boolean})],$.prototype,"isStreaming",2);q([g({type:Boolean})],$.prototype,"showHeader",2);q([g({type:Number,attribute:!1})],$.prototype,"messageIndex",2);q([k()],$.prototype,"attentionInputValue",2);$=q([x("ai-chat-message")],$);var ne=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,T=(s,e,a,t)=>{for(var i=t>1?void 0:t?oe(e,a):e,n=s.length-1,r;n>=0;n--)(r=s[n])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&ne(e,a,i),i};let S=class extends P{constructor(){super(...arguments),this.value="",this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(s){const e=s.target;this.value=e.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(s){s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;const s=this.value;this.value="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),this.dispatchEvent(new CustomEvent("send",{detail:{value:s},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){return o`
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
                    
                    ${d(this.busy,()=>o`
                        <wa-button
                            appearance="plain"
                            size="medium"
                            @click="${this.cancel}">
                            <wa-icon name="stop" label="Stop"></wa-icon>
                        </wa-button>
                    `,()=>o`
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
        `}};S.styles=M`
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

        wa-textarea::part(base) {
            padding: 0.0625rem 0.5rem;
            line-height: 1.4;
        }
    `;T([g({type:String})],S.prototype,"value",2);T([g({type:Boolean})],S.prototype,"disabled",2);T([g({type:Boolean})],S.prototype,"busy",2);T([g({type:Boolean})],S.prototype,"hasProvider",2);T([se("wa-textarea")],S.prototype,"textareaElement",2);S=T([x("ai-chat-input")],S);var le=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,V=(s,e,a,t)=>{for(var i=t>1?void 0:t?ce(e,a):e,n=s.length-1,r;n>=0;n--)(r=s[n])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&le(e,a,i),i};let E=class extends P{constructor(){super(...arguments),this.message="No AI provider configured",this.hint="Click the settings button to configure"}render(){return o`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}};E.styles=M`
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
    `;V([g({type:String})],E.prototype,"message",2);V([g({type:String})],E.prototype,"hint",2);E=V([x("ai-empty-state")],E);var de=Object.getOwnPropertyDescriptor,pe=(s,e,a,t)=>{for(var i=t>1?void 0:t?de(e,a):e,n=s.length-1,r;n>=0;n--)(r=s[n])&&(i=r(i)||i);return i};let j=class extends P{render(){return o`
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
        `}};j.styles=M`
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
    `;j=pe([x("ai-loading-indicator")],j);var ge=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,O=(s,e,a,t)=>{for(var i=t>1?void 0:t?ue(e,a):e,n=s.length-1,r;n>=0;n--)(r=s[n])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&ge(e,a,i),i};let C=class extends P{constructor(){super(...arguments),this.isStreaming=!1,this.groupId=""}renderStatusIcon(s){switch(s){case"streaming":return o`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return o`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return o`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}copyToClipboard(s){navigator.clipboard.writeText(s).catch(e=>{console.error("Failed to copy:",e)})}render(){if(!this.agentInfo)return o``;const s=this.message?.requiresAttention&&(this.message.attentionRequests?.length||0)>0;return this.message?o`
            <div class="agent-response-card status-${this.agentInfo.status} ${s?"requires-attention":""}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                        <span>${this.agentInfo.label}</span>
                        ${this.renderStatusIcon(this.agentInfo.status)}
                        ${d(s,()=>o`
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
        `:o`
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
            `}};C.styles=M`
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
    `;O([g({type:Object,attribute:!1})],C.prototype,"agentInfo",2);O([g({type:Object,attribute:!1})],C.prototype,"message",2);O([g({type:Boolean})],C.prototype,"isStreaming",2);O([g({type:String})],C.prototype,"groupId",2);C=O([x("ai-agent-response-card")],C);var he=Object.defineProperty,me=Object.getOwnPropertyDescriptor,F=(s,e,a,t)=>{for(var i=t>1?void 0:t?me(e,a):e,n=s.length-1,r;n>=0;n--)(r=s[n])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&he(e,a,i),i};let z=class extends P{handleAction(s){const e=s();e instanceof Promise&&e.catch(a=>{console.error("Action failed:",a)})}render(){if(!this.group)return o``;const s=Array.from(this.group.agents.values()),e=s.filter(l=>l.status==="completed").length,a=s.filter(l=>l.status==="streaming").length,t=s.filter(l=>l.status==="error").length,i=s.length>0&&e+t===s.length,n=s.length===1,r=s.filter(l=>l.message&&l.message.actions&&l.message.actions.length>0).flatMap(l=>l.message.actions.map(c=>({...c,agentRole:l.role,agentLabel:l.label}))).sort((l,c)=>{const h=l.requiresAttention?1:0;return(c.requiresAttention?1:0)-h});return o`
            <div class="agent-response-group">
                ${d(!n,()=>o`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="Multiple Agents"></wa-icon>
                            <span>Multiple Agents Responded</span>
                            ${d(!i,()=>o`
                                <span class="agent-status-badge">
                                    ${d(a>0,()=>o`
                                        <span class="status-streaming">${a} responding</span>
                                    `)}
                                    ${d(e>0,()=>o`
                                        <span class="status-completed">${e}/${s.length} completed</span>
                                    `)}
                                </span>
                            `)}
                            ${d(i,()=>o`
                                <span class="agent-status-badge status-all-completed">
                                    All completed (${e})
                                </span>
                            `)}
                        </div>
                    </div>
                `)}
                <div class="agent-group-content">
                    ${R(s,l=>l.role,l=>{const c=l.message||(l.status==="streaming"&&this.findStreamingMessage?this.findStreamingMessage(l.role):void 0);return o`
                            <ai-agent-response-card
                                .agentInfo="${l}"
                                .message="${c}"
                                .isStreaming="${l.status==="streaming"}"
                                .groupId="${this.group.id}">
                            </ai-agent-response-card>
                        `})}
                </div>
                ${d(r.length>0&&i,()=>o`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="Quick Actions"></wa-icon>
                            <span>Quick Actions</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${R(r,(l,c)=>c.toString(),l=>o`
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
        `}};z.styles=M`
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
    `;F([g({type:Object,attribute:!1})],z.prototype,"group",2);F([g({type:Function,attribute:!1})],z.prototype,"findStreamingMessage",2);z=F([x("ai-agent-response-group")],z);var ve=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,A=(s,e,a,t)=>{for(var i=t>1?void 0:t?fe(e,a):e,n=s.length-1,r;n>=0;n--)(r=s[n])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&ve(e,a,i),i};let f=class extends P{constructor(){super(...arguments),this.open=!1,this.providers=[],this.selectedProviderName="",this.selectedModel="",this.availableModels=[],this.loadingModels=!1,this.requireToolApproval=!0}onProviderChange(s){const e=s.target;this.selectedProviderName=e.value,this.dispatchEvent(new CustomEvent("provider-change",{detail:{providerName:e.value},bubbles:!0,composed:!0}))}onModelChange(s){const e=s.target;this.selectedModel=e.value,this.dispatchEvent(new CustomEvent("model-change",{detail:{model:e.value},bubbles:!0,composed:!0}))}onToolApprovalChange(s){const e=s.target;this.requireToolApproval=e.checked,this.dispatchEvent(new CustomEvent("tool-approval-change",{detail:{value:e.checked},bubbles:!0,composed:!0}))}save(){this.dispatchEvent(new CustomEvent("save",{detail:{providerName:this.selectedProviderName,model:this.selectedModel},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}render(){if(!this.open)return o``;const s=this.providers.find(e=>e.name===this.selectedProviderName);return o`
            <wa-dialog label="AI View Settings" open @wa-request-close="${this.cancel}">
                <div class="settings-dialog-content">
                    <div class="settings-field">
                        <label>Provider:</label>
                        <wa-select 
                            value="${this.selectedProviderName||""}"
                            @change="${this.onProviderChange}">
                            ${this.providers.map(e=>o`
                                <wa-option value="${e.name}">
                                    ${e.name}
                                </wa-option>
                            `)}
                        </wa-select>
                    </div>

                    <div class="settings-field">
                        <label>Model:</label>
                        ${d(this.loadingModels,()=>o`
                            <div>Loading models...</div>
                        `,()=>o`
                            ${d(this.availableModels.length>0,()=>o`
                                <wa-select 
                                    value="${this.selectedModel||""}"
                                    @change="${this.onModelChange}">
                                    ${this.availableModels.map(e=>o`
                                        <wa-option value="${e.id}">
                                            ${e.name||e.id}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `,()=>o`
                                <wa-select 
                                    value="${this.selectedModel||""}"
                                    @change="${this.onModelChange}">
                                    ${d(s,()=>o`
                                        <wa-option value="${s.model}">
                                            ${s.model}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `)}
                        `)}
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
        `}};f.styles=M`
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

        .settings-actions {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            margin-top: 1rem;
        }
    `;A([g({type:Boolean})],f.prototype,"open",2);A([g({type:Array,attribute:!1})],f.prototype,"providers",2);A([g({type:String})],f.prototype,"selectedProviderName",2);A([g({type:String})],f.prototype,"selectedModel",2);A([g({type:Array,attribute:!1})],f.prototype,"availableModels",2);A([g({type:Boolean})],f.prototype,"loadingModels",2);A([g({type:Boolean})],f.prototype,"requireToolApproval",2);f=A([x("ai-settings-dialog")],f);class we{constructor(){this.sessions=new Map,this.sessionTitles=new Map,this.activeSessionId=""}createSession(){const e=`session-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.sessions.set(e,{history:[]}),this.sessionTitles.set(e,"New Chat"),this.activeSessionId=e,e}deleteSession(e){if(this.sessions.size<=1)return!1;if(this.sessions.delete(e),this.sessionTitles.delete(e),this.activeSessionId===e){const a=Array.from(this.sessions.keys())[0];this.activeSessionId=a||""}return!0}getSession(e){return this.sessions.get(e)}setSession(e,a){this.sessions.set(e,a)}getActiveSession(){if(this.activeSessionId)return this.sessions.get(this.activeSessionId)}setActiveSession(e){this.sessions.has(e)&&(this.activeSessionId=e)}getActiveSessionId(){return this.activeSessionId}getAllSessionIds(){return Array.from(this.sessions.keys())}getAllSessions(){return Array.from(this.sessions.entries()).map(([e,a])=>({id:e,history:a,title:this.sessionTitles.get(e)||"New Chat"}))}getSessionTitle(e){return this.sessionTitles.get(e)||"New Chat"}setSessionTitle(e,a){this.sessionTitles.set(e,a)}generateTitle(e){const a=e.trim();if(!a)return"New Chat";const t=30;return a.length<=t?a:a.substring(0,t).trim()+"..."}addMessage(e,a){const t=this.sessions.get(e);t&&t.history.push(a)}getSessionCount(){return this.sessions.size}}class be{constructor(e){this.streamingMessages=new Map,this.currentStreamingIndex=-1,this.pendingUpdate=!1,this.onUpdate=e}createStreamingMessage(e,a){const t=++this.currentStreamingIndex;return this.streamingMessages.set(t,{message:{role:e,content:""},isStreaming:!0,timestamp:new Date,sessionId:a}),t}getStreamingMessage(e){return this.streamingMessages.get(e)}updateStreamingMessage(e,a){const t=this.streamingMessages.get(e);t&&(t.message.content+=a,this.scheduleUpdate())}completeStreamingMessage(e,a){const t=this.streamingMessages.get(e);t&&(t.message=a,t.isStreaming=!1)}removeStreamingMessage(e){this.streamingMessages.delete(e)}getAllStreamingMessages(){return Array.from(this.streamingMessages.values())}getAllStreamingMessagesByRole(e){return Array.from(this.streamingMessages.values()).filter(a=>a.message.role===e)}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(t=>t.message.role===e)?.message}scheduleUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.updateAnimationFrame=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.onUpdate?.()}))}cancelUpdates(){this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1)}clearAll(){for(const[e,a]of this.streamingMessages.entries())a.isStreaming&&(a.isStreaming=!1);this.streamingMessages.clear(),this.cancelUpdates()}clearForSession(e){const a=[];for(const[t,i]of this.streamingMessages.entries())i.sessionId===e&&(i.isStreaming&&(i.isStreaming=!1),a.push(t));a.forEach(t=>this.streamingMessages.delete(t)),a.length>0&&this.scheduleUpdate()}reset(){this.clearAll(),this.currentStreamingIndex=-1}}class ye{constructor(e){this.aiService=e,this.settingsKey="aiViewChat",this.availableModels=[],this.loadingModels=!1}async initialize(){await this.loadProviders(),await this.loadSettings()}async loadProviders(){this.providers=await this.aiService.getProviders()||[]}async loadSettings(){const e=await D.get(this.settingsKey)||{};if(e.providerName){const a=this.providers?.find(t=>t.name===e.providerName);a&&(this.selectedProvider={...a,model:e.model||a.model},this.settingsProviderName=e.providerName,this.settingsModel=e.model||a.model)}if(!this.selectedProvider&&this.providers&&this.providers.length>0){const a=await this.aiService.getDefaultProvider();this.selectedProvider=a,this.settingsProviderName=a.name,this.settingsModel=a.model,await this.saveSettings(a.name,a.model)}}getRequireToolApproval(){return!1}async saveSettings(e,a,t){const n={...await D.get(this.settingsKey)||{},providerName:e,model:a};t!==void 0&&(n.requireToolApproval=t),await D.set(this.settingsKey,n);const r=this.providers?.find(l=>l.name===e);r&&(this.selectedProvider={...r,model:a},await this.aiService.setDefaultProvider(e))}async fetchModels(e){const a=this.providers?.find(t=>t.name===e);if(a){this.loadingModels=!0;try{const i=`${a.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,n=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${a.apiKey}`,"Content-Type":"application/json"}});if(!n.ok)throw new Error(`Failed to fetch models: ${n.statusText}`);const l=(await n.json()).data||[];this.availableModels=l.map(c=>({id:c.id,name:c.name||c.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(t){throw this.availableModels=[],t}finally{this.loadingModels=!1}}}getProviders(){return this.providers||[]}getSelectedProvider(){return this.selectedProvider}setSelectedProvider(e){this.selectedProvider=e}getSettingsProviderName(){return this.settingsProviderName}setSettingsProviderName(e){this.settingsProviderName=e}getSettingsModel(){return this.settingsModel}setSettingsModel(e){this.settingsModel=e}getAvailableModels(){return this.availableModels}isLoadingModels(){return this.loadingModels}resetModelSelection(){this.availableModels=[],this.settingsModel=void 0}}class $e{constructor(){this.groups=new Map,this.pausedWorkflows=new Map}createGroup(e,a,t,i,n){const r=`group-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.currentGroupId=r;const l={id:r,sessionId:e,userMessageIndex:a,userMessage:t,timestamp:new Date,agents:new Map,messageIndices:new Map};return i.forEach(c=>{const{label:h,icon:m}=n(c);l.agents.set(c,{role:c,label:h,icon:m,status:"streaming"})}),this.groups.set(r,l),r}getGroup(e){return this.groups.get(e)}updateAgentStatus(e,a,t,i,n){const r=this.groups.get(e);if(!r)return;const l=r.agents.get(a);l&&(l.status=t,i&&(l.message=i),n!==void 0&&(l.messageIndex=n,r.messageIndices.set(a,n)))}getGroupsForSession(e){return Array.from(this.groups.values()).filter(a=>a.sessionId===e)}findGroupForUserMessage(e,a,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.userMessageIndex===a&&i.userMessage===t)}findGroupForMessage(e,a,t){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.messageIndices.get(a)===t)}getCurrentGroupId(){return this.currentGroupId}setCurrentGroupId(e){this.currentGroupId=e}clearCurrentGroup(){this.currentGroupId=void 0}storePausedWorkflow(e,a,t){this.pausedWorkflows.set(e,{token:e,options:a,results:t})}getPausedWorkflow(e){return this.pausedWorkflows.get(e)}getAllPausedWorkflows(){return Array.from(this.pausedWorkflows.values())}clearPausedWorkflow(e){this.pausedWorkflows.delete(e)}clearAllPausedWorkflows(){this.pausedWorkflows.clear()}getAllGroups(){return Array.from(this.groups.values())}clearAll(){this.groups.clear(),this.currentGroupId=void 0}}var Se=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,I=(s,e,a,t)=>{for(var i=t>1?void 0:t?Me(e,a):e,n=s.length-1,r;n>=0;n--)(r=s[n])&&(i=(t?r(e,a,i):r(i))||i);return t&&i&&Se(e,a,i),i};let w=class extends Q{constructor(){super(...arguments),this.sessionManager=new we,this.streamManager=new be(()=>this.requestUpdate()),this.providerManager=new ye(_),this.agentGroupManager=new $e,this.busy=!1,this.inputValue="",this.settingsDialogOpen=!1,this.requireToolApproval=!0,this.pendingToolApprovals=new Map}onAIConfigChanged(){this.doBeforeUI()}async doBeforeUI(){this.sessionManager.getSessionCount()===0&&this.sessionManager.createSession(),await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async loadSettings(){const{appSettings:s}=await ae(async()=>{const{appSettings:a}=await import("./main-D0hO92Dn.js").then(t=>t.M);return{appSettings:a}},__vite__mapDeps([0,1,2,3])),e=await s.get("aiViewChat")||{};this.requireToolApproval=e.requireToolApproval!==void 0?e.requireToolApproval:!0}createNewSession(){this.sessionManager.createSession(),this.inputValue="",this.requestUpdate()}deleteSession(s){if(!this.sessionManager.deleteSession(s)){y("Cannot delete the last session");return}this.inputValue="",this.requestUpdate()}scrollToBottom(){requestAnimationFrame(()=>{const s=this.sessionManager.getActiveSessionId();if(!s)return;const a=this.shadowRoot?.querySelector(`wa-tab-panel[name="${s}"]`)?.querySelector("wa-scroller.chat-messages");if(a){const t=a.shadowRoot?.querySelector(".scroll-container");t?t.scrollTop=t.scrollHeight:a.scrollTo&&a.scrollTo({top:a.scrollHeight,behavior:"smooth"})}})}updated(s){super.updated(s),s.has("busy")&&this.scrollToBottom()}async sendMessage(){const s=this.inputValue.trim();if(!s||this.busy)return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const a=this.shadowRoot?.querySelector("wa-tab-group");a?.active&&(e=a.active,this.sessionManager.setActiveSession(e))}e&&(this.inputValue="",this.requestUpdate(),await this.handlePrompt(s))}async runCommand(s,e){const a=e||G,t=s.trim().split(/\s+/);if(t.length===0)return;const i=t.shift(),n=a.getCommand(i);if(!n){y("Command not found: "+i);return}const r={};n.parameters&&t.forEach((c,h)=>{n.parameters&&n.parameters[h]&&(r[n.parameters[h].name]=c)});const l=a.createExecutionContext(this,r);await a.execute(i,l),this.requestUpdate()}async handlePrompt(s){if(s.startsWith("/")){await this.runCommand(s.substring(1),G);return}const e=this.providerManager.getSelectedProvider();if(!e){y("Please configure AI provider in settings");return}let a=this.sessionManager.getActiveSessionId();if(!a)this.createNewSession(),a=this.sessionManager.getActiveSessionId();else{const c=this.shadowRoot?.querySelector("wa-tab-group");c?.active&&(a=c.active,this.sessionManager.setActiveSession(a))}if(!a)return;const t=_.createMessage(s),i=a,n=this.sessionManager.getSession(i);if(!n)return;if(n.history.push(t),n.history.length===1){const c=this.sessionManager.generateTitle(s);this.sessionManager.setSessionTitle(i,c)}this.requestUpdate(),this.busy=!0,this.abortController=new AbortController;const r=new Map,l={history:[...n.history]};Y.runAsync("Calling AI assistant",async()=>{const c=G.createExecutionContext(this),h=X.createChild({...c}),m=_.getAgentContributions(),U=m.filter(p=>p.canHandle?p.canHandle({...h.getProxy(),userPrompt:s}):!0).sort((p,u)=>(u.priority||0)-(p.priority||0)),B=U.length>0?U.map(p=>p.role):["assistant"],W=this.sessionManager.getSession(i);if(!W)return;const N=this.agentGroupManager.createGroup(i,W.history.length-1,t,B,p=>{const u=m.find(v=>v.role===p);return{label:u?.label||p,icon:u?.icon||"robot"}});return _.executeAgentWorkflow({chatContext:l,chatConfig:e,callContext:h,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:B,requireToolApproval:this.requireToolApproval,onToolApprovalRequest:async(p,u)=>new Promise(v=>{const b=`approval-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.pendingToolApprovals.set(b,{role:p,request:u,resolve:v}),this.requestUpdate()}),onAgentStart:p=>{const u=this.streamManager.createStreamingMessage(p,i);r.set(p,u),this.agentGroupManager.updateAgentStatus(N,p,"streaming"),this.requestUpdate()},onToken:(p,u)=>{const v=r.get(p);v!==void 0&&this.streamManager.updateStreamingMessage(v,u),this.requestUpdate()},onAgentComplete:(p,u)=>{const v=this.sessionManager.getSession(i);if(!v)return;const b=r.get(p);if(b!==void 0){this.streamManager.completeStreamingMessage(b,u);const H=v.history.length;v.history.push(u),r.delete(p),this.streamManager.removeStreamingMessage(b),this.agentGroupManager.updateAgentStatus(N,p,"completed",u,H),this.requestUpdate()}},onAgentError:(p,u)=>{if(!this.sessionManager.getSession(i))return;const b=r.get(p);b!==void 0&&(this.streamManager.removeStreamingMessage(b),r.delete(p)),this.agentGroupManager.updateAgentStatus(N,p,"error",{role:p,content:`Error: ${u.message}`}),this.requestUpdate(),y(`Agent ${p} error: ${u.message}`)}}).then(()=>{this.agentGroupManager.clearCurrentGroup()})}).catch(c=>{c?.name!=="AbortError"&&y(`${c}`)}).finally(()=>{this.busy=!1,this.abortController=void 0,this.streamManager.clearForSession(i),this.agentGroupManager.clearCurrentGroup(),this.requestUpdate()})}cancelStream(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.busy=!1),this.streamManager.cancelUpdates()}async openSettingsDialog(){this.settingsDialogOpen=!0;const s=this.providerManager.getSelectedProvider(),e=s?.name||this.providerManager.getProviders()[0]?.name;if(e){this.providerManager.setSettingsProviderName(e),s?.model&&this.providerManager.setSettingsModel(s.model);try{await this.providerManager.fetchModels(e)}catch(a){y(`Failed to fetch models: ${a}`)}}this.requestUpdate()}closeSettingsDialog(){this.settingsDialogOpen=!1,this.providerManager.resetModelSelection(),this.requestUpdate()}async onProviderChange(s){this.providerManager.setSettingsProviderName(s),this.providerManager.setSettingsModel(void 0),this.providerManager.resetModelSelection();try{await this.providerManager.fetchModels(s)}catch(e){y(`Failed to fetch models: ${e}`)}this.requestUpdate()}async onModelChange(s){const e=s.target;this.providerManager.setSettingsModel(e.value)}async saveSettingsAndClose(){const s=this.providerManager.getSettingsProviderName(),e=this.providerManager.getSettingsModel();if(!s||!e){y("Please select both provider and model");return}await this.providerManager.saveSettings(s,e,this.requireToolApproval),this.settingsDialogOpen=!1,Z("Settings saved"),this.requestUpdate()}renderMessage(s,e,a,t){return o`
            <ai-chat-message
                .message="${e}"
                .isStreaming="${t||!1}"
                .showHeader="${!0}"
                .messageIndex="${a}"
                @resend="${i=>{this.handleResend(i.detail.message)}}">
            </ai-chat-message>
        `}async handleResend(s){if(!s||s.role!=="user")return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const a=this.shadowRoot?.querySelector("wa-tab-group");a?.active&&(e=a.active,this.sessionManager.setActiveSession(e))}e&&await this.handlePrompt(s.content)}render(){const s=this.sessionManager.getAllSessionIds(),e=this.sessionManager.getActiveSessionId(),a=this.providerManager.getSelectedProvider();return o`
            <div class="chat-container">
                ${d(this.settingsDialogOpen,()=>o`
                    <ai-settings-dialog
                        .open="${this.settingsDialogOpen}"
                        .providers="${this.providerManager.getProviders()}"
                        .selectedProviderName="${this.providerManager.getSettingsProviderName()||""}"
                        .selectedModel="${this.providerManager.getSettingsModel()||""}"
                        .availableModels="${this.providerManager.getAvailableModels()}"
                        .loadingModels="${this.providerManager.isLoadingModels()}"
                        .requireToolApproval="${this.requireToolApproval}"
                        @provider-change="${t=>this.onProviderChange(t.detail.providerName)}"
                        @model-change="${t=>this.onModelChange(t)}"
                        @tool-approval-change="${t=>{this.requireToolApproval=t.detail.value,this.requestUpdate()}}"
                        @save="${t=>{this.providerManager.setSettingsProviderName(t.detail.providerName),this.providerManager.setSettingsModel(t.detail.model),this.saveSettingsAndClose()}}"
                        @cancel="${()=>this.closeSettingsDialog()}">
                    </ai-settings-dialog>
                `)}
                
                ${d(!a,()=>o`
                    <ai-empty-state
                        message="No AI provider configured"
                        hint="Click the settings button to configure">
                    </ai-empty-state>
                `)}

                ${d(s.length>0,()=>o`
                    <wa-tab-group 
                        active="${e||s[0]||""}" 
                        @wa-tab-show="${t=>{const i=t.detail.panel;this.sessionManager.getSession(i)&&(this.sessionManager.setActiveSession(i),this.inputValue="",this.requestUpdate())}}">
                        ${R(s,t=>t,(t,i)=>{const n=this.sessionManager.getSession(t);return n?o`
                                <wa-tab panel="${t}">
                                    <span>${this.sessionManager.getSessionTitle(t)||`Chat ${i+1}`}</span>
                                    ${d(s.length>1,()=>o`
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
                                            ${n.history.map((r,l)=>{const c=this.agentGroupManager.findGroupForUserMessage(t,l,r);return c&&r.role==="user"?o`
                                                        <ai-chat-message
                                                            .message="${r}"
                                                            .isStreaming="${!1}"
                                                            .showHeader="${!0}"
                                                            .messageIndex="${l}"
                                                            @resend="${m=>{this.handleResend(m.detail.message)}}">
                                                        </ai-chat-message>
                                                        <ai-agent-response-group
                                                            .group="${c}"
                                                            .findStreamingMessage="${m=>this.streamManager.findStreamingMessage(m)}">
                                                        </ai-agent-response-group>
                                                    `:this.agentGroupManager.findGroupForMessage(t,r.role,l)?o``:this.renderMessage(n,r,l)})}
                                            ${this.streamManager.getAllStreamingMessages().filter(r=>r.sessionId===t&&!Array.from(this.agentGroupManager.getAllGroups()).some(l=>l.sessionId===t&&l.agents.has(r.message.role))).map(r=>{const l=this.sessionManager.getSession(t);return this.renderMessage(l,r.message,-1,r.isStreaming)})}
                                            ${d(e===t&&this.busy&&this.streamManager.getAllStreamingMessages().filter(r=>r.sessionId===t).length===0,()=>o`
                                                <ai-loading-indicator></ai-loading-indicator>
                                            `)}
                                        </div>
                                    </wa-scroller>
                                </wa-tab-panel>
                            `:o``})}
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
                    ${this.pendingToolApprovals.size>0?o`
                        <div class="tool-approval-banner">
                            ${Array.from(this.pendingToolApprovals.entries()).map(([t,i])=>{const n=i.request.toolCalls.map(r=>{const l=r.function.arguments||"{}";let c={};try{c=JSON.parse(l)}catch{c={}}const h=Object.entries(c).map(([m,U])=>`${m}=${JSON.stringify(U)}`).join(", ");return`${r.function.name}${h?`(${h})`:"()"}`}).join(", ");return o`
                                    <div class="approval-notification">
                                        <div class="approval-content">
                                            <wa-icon name="question-circle" class="approval-icon"></wa-icon>
                                            <div class="approval-message">
                                                <strong>Tool execution pending:</strong>
                                                <span class="tool-list">${n}</span>
                                            </div>
                                        </div>
                                        <div class="approval-actions">
                                            <wa-button
                                                variant="default"
                                                size="small"
                                                @click="${()=>{i.resolve(!1),this.pendingToolApprovals.delete(t),this.requestUpdate()}}">
                                                Cancel
                                            </wa-button>
                                            <wa-button
                                                variant="brand"
                                                size="small"
                                                @click="${()=>{i.resolve(!0),this.pendingToolApprovals.delete(t),this.requestUpdate()}}">
                                                Approve
                                            </wa-button>
                                        </div>
                                    </div>
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
        `}};w.styles=M`
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

        .toolbar wa-button {
            flex-shrink: 0;
        }

        .tool-approval-banner {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            background-color: var(--wa-color-warning-fill-quiet);
            border-top: solid var(--wa-border-width-s) var(--wa-color-warning-border-normal);
        }

        .approval-notification {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 0.5rem;
            background-color: var(--wa-color-surface-default);
            border-radius: 0.25rem;
            border: solid var(--wa-border-width-s) var(--wa-color-warning-border-normal);
        }

        .approval-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex: 1;
            min-width: 0;
        }

        .approval-icon {
            color: var(--wa-color-warning-60);
            flex-shrink: 0;
        }

        .approval-message {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.875rem;
            min-width: 0;
        }

        .approval-message strong {
            color: var(--wa-color-text-normal);
        }

        .approval-message .tool-list {
            color: var(--wa-color-text-quiet);
            font-family: monospace;
            font-size: 0.8125rem;
            word-break: break-all;
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

        wa-scroller.chat-messages {
            position: absolute;
            top: 0;
            left: 0;
            right: var(--wa-scrollbar-width, 15px);
            bottom: 0;
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
    `;I([k()],w.prototype,"busy",2);I([k()],w.prototype,"inputValue",2);I([k()],w.prototype,"settingsDialogOpen",2);I([k()],w.prototype,"requireToolApproval",2);I([k()],w.prototype,"pendingToolApprovals",2);I([L(J)],w.prototype,"onAIConfigChanged",1);w=I([x("k-aiview")],w);const Ce=({})=>{ee.put("aiService",_)};export{Ce as default};
