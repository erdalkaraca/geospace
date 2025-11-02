import{n as J,o as G,J as X,L as Z,K as ee,i as $,c as y,j as T,C as U,u as te,b as se,t as L,r as ae}from"./main-fBGZ0jOV.js";import{a as C,n as g,r as m,i as P,x as n,l as d,o as ie,t as A,ab as ne}from"./index-C4bFKT08.js";var oe=Object.defineProperty,re=Object.getOwnPropertyDescriptor,q=(e,t,i,a)=>{for(var s=a>1?void 0:a?re(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(a?o(t,i,s):o(s))||s);return a&&s&&oe(t,i,s),s};let S=class extends P{constructor(){super(...arguments),this.isStreaming=!1,this.showHeader=!0,this.attentionInputValue=""}formatTimestamp(){return new Date().toLocaleTimeString()}copyToClipboard(e){navigator.clipboard.writeText(e).catch(t=>{console.error("Failed to copy:",t)})}handleResend(e){e&&(e.preventDefault(),e.stopPropagation()),this.message&&this.dispatchEvent(new CustomEvent("resend",{detail:{message:this.message,messageIndex:this.messageIndex},bubbles:!0,composed:!0}))}getAttentionIcon(e){switch(e){case"confirmation":return"check-circle";case"input":return"input";case"approval":return"hand";case"execution":return"play";case"info":return"info-circle";default:return"bell"}}updated(e){super.updated(e),e.has("attentionInputValue")&&this.dispatchEvent(new CustomEvent("attention-input-change",{detail:{value:this.attentionInputValue},bubbles:!0,composed:!0})),(e.has("message")||!this.hasAttribute("data-is-user"))&&this.updateAlignment()}updateAlignment(){if(this.message){const e=this.message.role==="user";this.setAttribute("data-is-user",String(e))}}handleAttentionResponse(e,t,i){this.message&&this.dispatchEvent(new CustomEvent("attention-response",{detail:{messageIndex:this.messageIndex,requestIndex:e,request:t,response:i},bubbles:!0,composed:!0}))}handleAction(e){const t=e();t instanceof Promise&&t.catch(i=>{console.error("Action failed:",i)})}render(){if(!this.message)return n``;const e=this.message,t=e.role==="user",i=e.requiresAttention&&(e.attentionRequests?.length||0)>0;return n`
            <div class="message-wrapper ${t?"user":"assistant"} ${this.isStreaming?"streaming":""} ${i?"requires-attention":""}">
                ${d(this.showHeader&&!t,()=>n`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="robot" 
                                label="${e.role}">
                            </wa-icon>
                            <span class="role-name">${e.role}</span>
                            ${d(i,()=>n`
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
                            ${d(e.actions?.length,()=>n`
                                ${e.actions.map(a=>n`
                                    <wa-button
                                        variant="neutral"
                                        appearance="plain"
                                        size="small"
                                        title="${a.label}"
                                        @click="${()=>this.handleAction(a.action)}">
                                        <wa-icon slot="label" name="${a.icon}" label="${a.label}"></wa-icon>
                                    </wa-button>
                                `)}
                            `)}
                        </div>
                    </div>
                `)}
                <div class="message-content-wrapper ${t?"user":""}">
                    <div class="message-content">
                        ${ie(J.parse(e.content||""))}
                        ${d(this.isStreaming,()=>n`
                            <span class="streaming-cursor">▋</span>
                        `)}
                        ${d(i&&e.attentionRequests,()=>n`
                        <div class="attention-requests">
                            ${e.attentionRequests.map((a,s)=>n`
                                <div class="attention-request attention-${a.type}">
                                    <div class="attention-header">
                                        <wa-icon name="${this.getAttentionIcon(a.type)}" label="${a.type}"></wa-icon>
                                        <strong>${a.title}</strong>
                                        ${d(a.priority==="urgent"||a.priority==="high",()=>n`
                                            <span class="priority-badge priority-${a.priority}">${a.priority}</span>
                                        `)}
                                    </div>
                                    <div class="attention-message">${a.message}</div>
                                    <div class="attention-actions">
                                        ${d(a.type==="confirmation",()=>n`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                @click="${()=>this.handleAttentionResponse(s,a,!0)}">
                                Confirm
                            </wa-button>
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${()=>this.handleAttentionResponse(s,a,!1)}">
                                Cancel
                            </wa-button>
                                        `)}
                                        ${d(a.type==="input",()=>n`
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
                                                    @click="${()=>this.handleAttentionResponse(s,a,this.attentionInputValue)}">
                                                    Submit
                                                </wa-button>
                                            </div>
                                        `)}
                                        ${d(a.type==="approval",()=>n`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(s,a,!0)}">
                                                Approve
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(s,a,!1)}">
                                                Reject
                                            </wa-button>
                                        `)}
                                        ${d(a.type==="execution",()=>n`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(s,a,!0)}">
                                                Execute
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(s,a,!1)}">
                                                Cancel
                                            </wa-button>
                                        `)}
                                    </div>
                                </div>
                            `)}
                        </div>
                        `)}
                        ${d(e.canContinue&&!i,()=>n`
                            <div class="continue-workflow">
                                <wa-button
                                    variant="brand"
                                    appearance="filled"
                                    size="small"
                                    @click="${()=>this.dispatchEvent(new CustomEvent("continue-workflow",{detail:{message:e},bubbles:!0,composed:!0}))}">
                                    Continue Workflow
                                </wa-button>
                            </div>
                        `)}
                    </div>
                    ${d(t,()=>n`
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="Copy"
                            class="resend-button"
                            @click="${()=>this.copyToClipboard(e.content)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="Resend"
                            class="resend-button"
                            @click="${a=>this.handleResend(a)}">
                            <wa-icon name="rotate-right" label="Resend"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}};S.styles=C`
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
    `;q([g({type:Object,attribute:!1})],S.prototype,"message",2);q([g({type:Boolean})],S.prototype,"isStreaming",2);q([g({type:Boolean})],S.prototype,"showHeader",2);q([g({type:Number,attribute:!1})],S.prototype,"messageIndex",2);q([m()],S.prototype,"attentionInputValue",2);S=q([A("ai-chat-message")],S);var le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,E=(e,t,i,a)=>{for(var s=a>1?void 0:a?de(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(a?o(t,i,s):o(s))||s);return a&&s&&le(t,i,s),s};let I=class extends P{constructor(){super(...arguments),this.value="",this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;const e=this.value;this.value="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),this.dispatchEvent(new CustomEvent("send",{detail:{value:e},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){return n`
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
        `}};I.styles=C`
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
    `;E([g({type:String})],I.prototype,"value",2);E([g({type:Boolean})],I.prototype,"disabled",2);E([g({type:Boolean})],I.prototype,"busy",2);E([g({type:Boolean})],I.prototype,"hasProvider",2);E([ne("wa-textarea")],I.prototype,"textareaElement",2);I=E([A("ai-chat-input")],I);var ce=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,F=(e,t,i,a)=>{for(var s=a>1?void 0:a?pe(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(a?o(t,i,s):o(s))||s);return a&&s&&ce(t,i,s),s};let _=class extends P{constructor(){super(...arguments),this.message="No AI provider configured",this.hint="Click the settings button to configure"}render(){return n`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}};_.styles=C`
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
    `;F([g({type:String})],_.prototype,"message",2);F([g({type:String})],_.prototype,"hint",2);_=F([A("ai-empty-state")],_);var ge=Object.getOwnPropertyDescriptor,ue=(e,t,i,a)=>{for(var s=a>1?void 0:a?ge(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=o(s)||s);return s};let j=class extends P{render(){return n`
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
        `}};j.styles=C`
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
    `;j=ue([A("ai-loading-indicator")],j);var he=Object.defineProperty,me=Object.getOwnPropertyDescriptor,N=(e,t,i,a)=>{for(var s=a>1?void 0:a?me(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(a?o(t,i,s):o(s))||s);return a&&s&&he(t,i,s),s};let M=class extends P{constructor(){super(...arguments),this.isStreaming=!1,this.groupId=""}renderStatusIcon(e){switch(e){case"streaming":return n`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return n`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return n`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}copyToClipboard(e){navigator.clipboard.writeText(e).catch(t=>{console.error("Failed to copy:",t)})}render(){if(!this.agentInfo)return n``;const e=this.message?.requiresAttention&&(this.message.attentionRequests?.length||0)>0;return this.message?n`
            <div class="agent-response-card status-${this.agentInfo.status} ${e?"requires-attention":""}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                        <span>${this.agentInfo.label}</span>
                        ${this.renderStatusIcon(this.agentInfo.status)}
                        ${d(e,()=>n`
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
            `}};M.styles=C`
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
    `;N([g({type:Object,attribute:!1})],M.prototype,"agentInfo",2);N([g({type:Object,attribute:!1})],M.prototype,"message",2);N([g({type:Boolean})],M.prototype,"isStreaming",2);N([g({type:String})],M.prototype,"groupId",2);M=N([A("ai-agent-response-card")],M);var ve=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,V=(e,t,i,a)=>{for(var s=a>1?void 0:a?fe(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(a?o(t,i,s):o(s))||s);return a&&s&&ve(t,i,s),s};let R=class extends P{handleAction(e){const t=e();t instanceof Promise&&t.catch(i=>{console.error("Action failed:",i)})}render(){if(!this.group)return n``;const e=Array.from(this.group.agents.values()),t=e.filter(l=>l.status==="completed").length,i=e.filter(l=>l.status==="streaming").length,a=e.filter(l=>l.status==="error").length,s=e.length>0&&t+a===e.length,r=e.length===1,o=e.filter(l=>l.message&&l.message.actions&&l.message.actions.length>0).flatMap(l=>l.message.actions.map(v=>({...v,agentRole:l.role,agentLabel:l.label}))).sort((l,v)=>{const b=l.requiresAttention?1:0;return(v.requiresAttention?1:0)-b});return n`
            <div class="agent-response-group">
                ${d(!r,()=>n`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="Multiple Agents"></wa-icon>
                            <span>Multiple Agents Responded</span>
                            ${d(!s,()=>n`
                                <span class="agent-status-badge">
                                    ${d(i>0,()=>n`
                                        <span class="status-streaming">${i} responding</span>
                                    `)}
                                    ${d(t>0,()=>n`
                                        <span class="status-completed">${t}/${e.length} completed</span>
                                    `)}
                                </span>
                            `)}
                            ${d(s,()=>n`
                                <span class="agent-status-badge status-all-completed">
                                    All completed (${t})
                                </span>
                            `)}
                        </div>
                    </div>
                `)}
                <div class="agent-group-content">
                    ${G(e,l=>l.role,l=>{const v=l.message||(l.status==="streaming"&&this.findStreamingMessage?this.findStreamingMessage(l.role):void 0);return n`
                            <ai-agent-response-card
                                .agentInfo="${l}"
                                .message="${v}"
                                .isStreaming="${l.status==="streaming"}"
                                .groupId="${this.group.id}">
                            </ai-agent-response-card>
                        `})}
                </div>
                ${d(o.length>0&&s,()=>n`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="Quick Actions"></wa-icon>
                            <span>Quick Actions</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${G(o,(l,v)=>v.toString(),l=>n`
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
        `}};R.styles=C`
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
    `;V([g({type:Object,attribute:!1})],R.prototype,"group",2);V([g({type:Function,attribute:!1})],R.prototype,"findStreamingMessage",2);R=V([A("ai-agent-response-group")],R);var we=Object.defineProperty,be=Object.getOwnPropertyDescriptor,k=(e,t,i,a)=>{for(var s=a>1?void 0:a?be(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(a?o(t,i,s):o(s))||s);return a&&s&&we(t,i,s),s};let x=class extends P{constructor(){super(...arguments),this.open=!1,this.providers=[],this.selectedProviderName="",this.selectedModel="",this.availableModels=[],this.loadingModels=!1}onProviderChange(e){const t=e.target;this.selectedProviderName=t.value,this.dispatchEvent(new CustomEvent("provider-change",{detail:{providerName:t.value},bubbles:!0,composed:!0}))}onModelChange(e){const t=e.target;this.selectedModel=t.value,this.dispatchEvent(new CustomEvent("model-change",{detail:{model:t.value},bubbles:!0,composed:!0}))}save(){this.dispatchEvent(new CustomEvent("save",{detail:{providerName:this.selectedProviderName,model:this.selectedModel},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}render(){if(!this.open)return n``;const e=this.providers.find(t=>t.name===this.selectedProviderName);return n`
            <wa-dialog label="AI View Settings" open @wa-request-close="${this.cancel}">
                <div class="settings-dialog-content">
                    <div class="settings-field">
                        <label>Provider:</label>
                        <wa-select 
                            value="${this.selectedProviderName||""}"
                            @change="${this.onProviderChange}">
                            ${this.providers.map(t=>n`
                                <wa-option value="${t.name}">
                                    ${t.name}
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
                                    ${this.availableModels.map(t=>n`
                                        <wa-option value="${t.id}">
                                            ${t.name||t.id}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `,()=>n`
                                <wa-select 
                                    value="${this.selectedModel||""}"
                                    @change="${this.onModelChange}">
                                    ${d(e,()=>n`
                                        <wa-option value="${e.model}">
                                            ${e.model}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `)}
                        `)}
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
        `}};x.styles=C`
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
        }

        .settings-actions {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            margin-top: 1rem;
        }
    `;k([g({type:Boolean})],x.prototype,"open",2);k([g({type:Array,attribute:!1})],x.prototype,"providers",2);k([g({type:String})],x.prototype,"selectedProviderName",2);k([g({type:String})],x.prototype,"selectedModel",2);k([g({type:Array,attribute:!1})],x.prototype,"availableModels",2);k([g({type:Boolean})],x.prototype,"loadingModels",2);x=k([A("ai-settings-dialog")],x);var ye=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,h=(e,t,i,a)=>{for(var s=a>1?void 0:a?$e(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(a?o(t,i,s):o(s))||s);return a&&s&&ye(t,i,s),s};let u=class extends ee{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatSessions=new Map,this.activeSessionId="",this.sessionIds=[],this.busy=!1,this.inputValue="",this.settingsDialogOpen=!1,this.availableModels=[],this.loadingModels=!1,this.streamingMessages=new Map,this.currentStreamingIndex=-1,this.pendingAttentionRequests=new Map,this.pausedWorkflows=new Map,this.agentResponseGroups=new Map,this.currentUserMessageIndex=-1,this.pendingUpdate=!1,this.SETTINGS_KEY="aiViewChat"}get chatContext(){return!this.activeSessionId||!this.chatSessions.has(this.activeSessionId)?this.defaultChatContext:this.chatSessions.get(this.activeSessionId)}set chatContext(e){this.activeSessionId&&this.chatSessions.set(this.activeSessionId,e)}onAIConfigChanged(){this.doBeforeUI()}getAgentMetadata(e){const i=$.getAgentContributions().find(a=>a.role===e);return{label:i?.label||e,icon:i?.icon||"robot"}}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(i=>i.message.role===e)?.message}updateAgentGroup(e,t,i){if(!e)return;const a=this.agentResponseGroups.get(e);if(a){const s=a.agents.get(t);s&&(i(s),this.requestUpdate())}}async doBeforeUI(){this.chatSessions.size===0&&this.createNewSession(),this.providers=await $.getProviders()||[],await this.loadSettings()}createNewSession(){const e=`session-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.chatSessions.set(e,{history:[]}),this.sessionIds=Array.from(this.chatSessions.keys()),this.activeSessionId=e,this.requestUpdate(),e}deleteSession(e){if(this.chatSessions.size<=1){y("Cannot delete the last session");return}if(this.chatSessions.delete(e),this.sessionIds=Array.from(this.chatSessions.keys()),this.activeSessionId===e){const t=this.sessionIds[0];this.activeSessionId=t,this.inputValue=""}this.requestUpdate()}async loadSettings(){const e=await T.get(this.SETTINGS_KEY)||{};if(e.providerName){const t=this.providers?.find(i=>i.name===e.providerName);t&&(this.selectedProvider={...t,model:e.model||t.model})}if(!this.selectedProvider&&this.providers&&this.providers.length>0){const t=await $.getDefaultProvider();this.selectedProvider=t,await this.saveSettings(t.name,t.model)}}async saveSettings(e,t){const i={providerName:e,model:t};await T.set(this.SETTINGS_KEY,i)}updated(e){super.updated(e),(e.has("chatSessions")||e.has("activeSessionId")||e.has("busy")||e.has("streamingMessages"))&&this.scrollToBottom()}scrollToBottom(){this.activeSessionId&&requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(`wa-tab-panel[name="${this.activeSessionId}"]`)?.querySelector("wa-scroller.chat-messages");if(t){const i=t.shadowRoot?.querySelector(".scroll-container");i?i.scrollTop=i.scrollHeight:t.scrollTo&&t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}})}async sendMessage(){const e=this.inputValue.trim();!e||this.busy||(await this.updateActiveSessionFromTabGroup(),!this.activeSessionId&&this.sessionIds.length>0&&(this.activeSessionId=this.sessionIds[0]),this.inputValue="",this.requestUpdate(),await this.handlePrompt(e))}async updateActiveSessionFromTabGroup(){await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-tab-group");e?.active&&this.chatSessions.has(e.active)&&(this.activeSessionId=e.active)}async runCommand(e,t){const i=t||U,a=e.trim().split(/\s+/);if(a.length===0)return;const s=a.shift(),r=i.getCommand(s);if(!r){y("Command not found: "+s);return}const o={};r.parameters&&a.forEach((v,b)=>{r.parameters&&r.parameters[b]&&(o[r.parameters[b].name]=v)});const l=i.createExecutionContext(this,o);i.execute(s,l),this.requestUpdate()}async handlePrompt(e){if(e.startsWith("/")){await this.runCommand(e.substring(1),U);return}if(!this.selectedProvider){y("Please configure AI provider in settings");return}await this.updateActiveSessionFromTabGroup(),this.activeSessionId||(this.sessionIds.length>0?this.activeSessionId=this.sessionIds[0]:this.createNewSession());const t=$.createMessage(e),i=this.activeSessionId;if(!i){console.error("No active session ID when adding message");return}this.chatSessions.get(i)||this.chatSessions.set(i,{history:[]}),this.chatSessions.get(i).history.push(t),this.requestUpdate(),this.busy=!0,this.abortController=new AbortController;const r=U.createExecutionContext(this),o=te.createChild({...r}),l=new Map;se.runAsync("Calling AI assistant",async v=>{const b={...o.getProxy(),userPrompt:e},B=$.getAgentContributions().filter(c=>c.canHandle?c.canHandle(b):!0).sort((c,p)=>(p.priority||0)-(c.priority||0)),O=this.activeSessionId||this.sessionIds[0]||"";if(!O||!this.chatSessions.has(O)){console.error("No active session found when creating agent group");return}const z=`group-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.currentGroupId=z;const Q=this.chatSessions.get(O);this.currentUserMessageIndex=Q.history.length-1;const W=B.length>0?B.map(c=>c.role):["assistant"],H={id:z,sessionId:O,userMessageIndex:this.currentUserMessageIndex,userMessage:t,timestamp:new Date,agents:new Map,messageIndices:new Map};return W.forEach(c=>{const{label:p,icon:w}=this.getAgentMetadata(c);H.agents.set(c,{role:c,label:p,icon:w,status:"streaming"})}),this.agentResponseGroups.set(z,H),this.requestUpdate(),$.executeAgentWorkflow({chatContext:this.chatContext,chatConfig:this.selectedProvider,callContext:o,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:W,onAgentStart:c=>{const p=++this.currentStreamingIndex,w={message:{role:c,content:""},isStreaming:!0,timestamp:new Date};l.set(c,p),this.streamingMessages.set(p,w),this.updateAgentGroup(this.currentGroupId,c,f=>{f.status="streaming"})},onToken:(c,p)=>{const w=l.get(c);if(w!==void 0){const f=this.streamingMessages.get(w);f&&(f.message.content+=p,this.scheduleStreamingUpdate())}this.currentGroupId&&this.requestUpdate()},onAgentComplete:(c,p)=>{const w=l.get(c);if(w!==void 0){const f=this.streamingMessages.get(w);if(f){f.isStreaming=!1,f.message=p;const K=this.chatContext.history.length;this.chatContext.history.push(p),l.delete(c),this.streamingMessages.delete(w),this.updateAgentGroup(this.currentGroupId,c,D=>{D.status="completed",D.message=p,D.messageIndex=K}),this.currentGroupId&&this.agentResponseGroups.get(this.currentGroupId)?.messageIndices.set(c,K),p.requiresAttention&&(p.attentionRequests&&this.pendingAttentionRequests.set(p.role,p.attentionRequests),p.canContinue&&L("Workflow paused - awaiting your response")),this.requestUpdate()}}},onAgentError:(c,p)=>{const w=l.get(c);if(w!==void 0){const f=this.streamingMessages.get(w);f&&(f.isStreaming=!1,f.message.content=`Error: ${p.message}`,l.delete(c),this.streamingMessages.delete(w))}this.updateAgentGroup(this.currentGroupId,c,f=>{f.status="error",f.message={role:c,content:`Error: ${p.message}`}}),this.requestUpdate(),y(`Agent ${c} error: ${p.message}`)}}).then(c=>{this.currentGroupId=void 0;const p=Array.from(c.messages.values());return p[0]||p})}).catch(v=>{v?.name!=="AbortError"&&y(`${v}`)}).finally(()=>{this.busy=!1,o.destroy(),this.abortController=void 0,this.currentGroupId=void 0,this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1);for(const[v,b]of this.streamingMessages.entries())b&&b.isStreaming&&(b.isStreaming=!1,this.streamingMessages.delete(v));this.requestUpdate()})}scheduleStreamingUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.updateAnimationFrame=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.requestUpdate()}))}cancelStream(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.busy=!1),this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1)}async openSettingsDialog(){const e=await T.get(this.SETTINGS_KEY)||{};this.settingsProviderName=e.providerName||this.selectedProvider?.name||this.providers?.[0]?.name,this.settingsModel=e.model||this.selectedProvider?.model,this.settingsDialogOpen=!0,this.settingsProviderName&&this.fetchModels(this.settingsProviderName).catch(t=>{y(`Failed to fetch models: ${t}`)})}async closeSettingsDialog(){this.settingsDialogOpen=!1,this.availableModels=[]}async onProviderChange(e){const i=e.target.value;this.settingsProviderName=i,this.settingsModel=void 0,this.availableModels=[],await this.fetchModels(i)}async fetchModels(e){const t=this.providers?.find(i=>i.name===e);if(t){this.loadingModels=!0;try{const a=`${t.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,s=await fetch(a,{method:"GET",headers:{Authorization:`Bearer ${t.apiKey}`,"Content-Type":"application/json"}});if(!s.ok)throw new Error(`Failed to fetch models: ${s.statusText}`);const o=(await s.json()).data||[];this.availableModels=o.map(l=>({id:l.id,name:l.name||l.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(i){y(`Failed to fetch models: ${i}`),this.availableModels=[]}finally{this.loadingModels=!1}}}async onModelChange(e){const t=e.target;this.settingsModel=t.value}async saveSettingsAndClose(){if(!this.settingsProviderName||!this.settingsModel){y("Please select both provider and model");return}await this.saveSettings(this.settingsProviderName,this.settingsModel);const e=this.providers?.find(t=>t.name===this.settingsProviderName);e&&(this.selectedProvider={...e,model:this.settingsModel},await $.setDefaultProvider(this.settingsProviderName)),this.settingsDialogOpen=!1,L("Settings saved")}renderMessage(e,t,i,a,s=!0){const r=i??e.history.indexOf(t);return n`
            <ai-chat-message
                .message="${t}"
                .isStreaming="${a||!1}"
                .showHeader="${s}"
                .messageIndex="${r}"
                @attention-response="${o=>{this.handleAttentionResponse(o.detail.messageIndex,o.detail.requestIndex,o.detail.request,o.detail.response)}}"
                @resend="${o=>{this.handleResend(o.detail.message)}}">
            </ai-chat-message>
        `}async handleResend(e){!e||e.role!=="user"||await this.handlePrompt(e.content)}async handleAttentionResponse(e,t,i,a){const s=this.chatContext.history[e];if(s){if(s.attentionRequests){const r=s.attentionRequests[t];r&&(r.metadata=r.metadata||{},r.metadata.userResponse=a)}s.canContinue?await this.continuePausedWorkflow(s,a):this.requestUpdate()}}async continuePausedWorkflow(e,t){if(!e.canContinue)return;const i=Array.from(this.pausedWorkflows.values())[0];if(!i){y("No paused workflow found to continue");return}const a=new Map;if(t!==void 0&&a.set("user_response",t),e.attentionRequests)for(const s of e.attentionRequests)s.metadata?.userResponse!==void 0&&a.set(`attention_${s.type}_result`,s.metadata.userResponse);this.busy=!0;try{const s=await $.continueWorkflow(i.token,a,i.options);if(s.paused&&s.continuationToken?this.pausedWorkflows.set(s.continuationToken,{token:s.continuationToken,options:i.options,results:s}):this.pausedWorkflows.clear(),s.messages)for(const[r,o]of s.messages)this.chatContext.history.push(o);this.requestUpdate()}catch(s){y(`Failed to continue workflow: ${s}`)}finally{this.busy=!1}}renderLoadingIndicator(){return n`
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
        `}renderSettingsDialog(){return this.settingsDialogOpen?n`
            <wa-dialog label="AI View Settings" open @wa-request-close="${this.closeSettingsDialog}">
                <div class="settings-dialog-content">
                    <div class="settings-field">
                        <label>Provider:</label>
                        <wa-select 
                            value="${this.settingsProviderName||""}"
                            @change="${this.onProviderChange}">
                            ${this.providers?.map(e=>n`
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
                                    value="${this.settingsModel||""}"
                                    @change="${this.onModelChange}">
                                    ${this.availableModels.map(e=>n`
                                        <wa-option value="${e.id}">
                                            ${e.name||e.id}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `,()=>n`
                                <wa-select 
                                    value="${this.settingsModel||""}"
                                    @change="${this.onModelChange}">
                                    ${this.providers?.find(e=>e.name===this.settingsProviderName)&&n`
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
        `:n``}render(){return n`
            <div class="chat-container">
                <ai-settings-dialog
                    .open="${this.settingsDialogOpen}"
                    .providers="${this.providers||[]}"
                    .selectedProviderName="${this.settingsProviderName||""}"
                    .selectedModel="${this.settingsModel||""}"
                    .availableModels="${this.availableModels}"
                    .loadingModels="${this.loadingModels}"
                    @provider-change="${e=>this.onProviderChange(e.detail.providerName)}"
                    @model-change="${e=>this.onModelChange(e.detail.model)}"
                    @save="${e=>{this.settingsProviderName=e.detail.providerName,this.settingsModel=e.detail.model,this.saveSettingsAndClose()}}"
                    @cancel="${()=>this.closeSettingsDialog()}">
                </ai-settings-dialog>
                
                ${d(!this.selectedProvider,()=>n`
                    <ai-empty-state
                        message="No AI provider configured"
                        hint="Click the settings button to configure">
                    </ai-empty-state>
                `)}

                ${d(this.sessionIds.length>0,()=>n`
                    <wa-tab-group 
                        active="${this.activeSessionId||this.sessionIds[0]||""}" 
                        @wa-tab-show="${e=>{const t=e.detail.panel;t&&this.chatSessions.has(t)&&(this.activeSessionId=t,this.inputValue="",this.requestUpdate())}}"
                        @wa-tab-hide="${e=>{const t=e.detail.panel;if(t===this.activeSessionId){const i=this.sessionIds.find(a=>a!==t);i&&(this.activeSessionId=i,this.requestUpdate())}}}">
                        ${G(this.sessionIds,e=>e,(e,t)=>n`
                            <wa-tab panel="${e}">
                                <span>Chat ${t+1}</span>
                                ${d(this.sessionIds.length>1,()=>n`
                                    <wa-icon 
                                        name="xmark" 
                                        label="Close"
                                        @click="${i=>{i.stopPropagation(),this.deleteSession(e)}}">
                                    </wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${e}">
                                <wa-scroller class="chat-messages" orientation="vertical">
                                    ${(()=>{const i=this.chatSessions.get(e)||{history:[]};return n`
                                            <div class="chat-content">
                                                ${i.history.map((a,s)=>{if(a.role==="user"){const o=Array.from(this.agentResponseGroups.values()).find(l=>l.sessionId===e&&l.userMessageIndex===s&&l.userMessage===a);if(o)return n`
                                                                <ai-chat-message
                                                                    .message="${a}"
                                                                    .isStreaming="${!1}"
                                                                    .showHeader="${!0}"
                                                                    .messageIndex="${s}"
                                                                    @resend="${l=>{this.handleResend(l.detail.message)}}">
                                                                </ai-chat-message>
                                                                <ai-agent-response-group
                                                                    .group="${o}"
                                                                    .findStreamingMessage="${l=>this.findStreamingMessage(l)}">
                                                                </ai-agent-response-group>
                                                            `}return Array.from(this.agentResponseGroups.values()).find(o=>o.sessionId===e&&o.messageIndices.get(a.role)===s)?n``:this.renderMessage(i,a,s)})}
                                                ${d(this.activeSessionId===e,()=>n`
                                                    ${Array.from(this.streamingMessages.values()).map(a=>{if(Array.from(this.agentResponseGroups.values()).some(o=>o.sessionId===e&&o.agents.has(a.message.role)))return n``;const r=this.chatSessions.get(e)||{history:[]};return this.renderMessage(r,a.message,-1,a.isStreaming)})}
                                                    ${d(this.busy&&this.streamingMessages.size===0,()=>n`
                                                        <ai-loading-indicator></ai-loading-indicator>
                                                    `)}
                                                `)}
                                            </div>
                                        `})()}
                                </wa-scroller>
                            </wa-tab-panel>
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
                    <ai-chat-input
                        .value="${this.inputValue}"
                        .disabled="${this.busy}"
                        .busy="${this.busy}"
                        .hasProvider="${!!this.selectedProvider}"
                        @input-change="${e=>{this.inputValue=e.detail.value}}"
                        @send="${()=>this.sendMessage()}"
                        @cancel="${()=>this.cancelStream()}"
                        @open-settings="${()=>this.openSettingsDialog()}">
                    </ai-chat-input>
                `)}
            </div>
        `}};u.styles=C`
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
    `;h([m()],u.prototype,"activeSessionId",2);h([m()],u.prototype,"sessionIds",2);h([m()],u.prototype,"providers",2);h([m()],u.prototype,"selectedProvider",2);h([m()],u.prototype,"busy",2);h([m()],u.prototype,"inputValue",2);h([m()],u.prototype,"settingsDialogOpen",2);h([m()],u.prototype,"settingsProviderName",2);h([m()],u.prototype,"settingsModel",2);h([m()],u.prototype,"availableModels",2);h([m()],u.prototype,"loadingModels",2);h([m()],u.prototype,"streamingMessages",2);h([m()],u.prototype,"currentStreamingIndex",2);h([m()],u.prototype,"pendingAttentionRequests",2);h([m()],u.prototype,"pausedWorkflows",2);h([m()],u.prototype,"agentResponseGroups",2);h([X(Z)],u.prototype,"onAIConfigChanged",1);u=h([A("k-aiview")],u);const Ie=({})=>{ae.put("aiService",$)};export{Ie as default};
