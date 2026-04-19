import{d as e,m as t,n,o as r,s as i,u as a}from"./fs-access-D-fDaJ8V-4fi1R5VX.js";import{n as o,t as s}from"./events-B_ZxkU_G-T3WMQWFe.js";import{Q as c,U as l,_ as u,b as d,n as f,r as p,u as m,z as h}from"./repeat-jF3QiNU_.js";import{A as g,B as _,F as v,I as y,L as b,O as ee,P as x,R as S,T as C,_ as w,f as te,j as T,v as E}from"./dist-Bs3vRgSi.js";import{a as D,s as ne}from"./ai-service-_8yd8pWc-DrYCaIXD.js";import"./api-jNGwYbG1.js";var O=e(`HowToService`),k=`system.howtos`,A=new class{constructor(){this.contributions=new Map,this.loadContributions(),o(g,e=>{e.target===`system.howtos`&&this.loadContributions()})}loadContributions(){let e=v.getContributions(k);this.contributions.clear();for(let t of e){if(!t.id){O.warn(`HowTo contribution missing id, skipping`);continue}if(t.label||=typeof t.title==`function`?t.title():t.title,!t.steps||t.steps.length===0){O.warn(`HowTo contribution "${t.id}" has no steps, skipping`);continue}let e=new Set;for(let n of t.steps){if(e.has(n.id)){O.warn(`HowTo contribution "${t.id}" has duplicate step ID: "${n.id}"`);continue}e.add(n.id)}this.contributions.set(t.id,t);let n=typeof t.title==`function`?t.title():t.title;O.debug(`Loaded HowTo contribution: ${n} (${t.id})`)}O.info(`Loaded ${this.contributions.size} HowTo contributions`)}getContribution(e){return this.contributions.get(e)}getAllContributions(){return Array.from(this.contributions.values())}getContributionsByCategory(e){return Array.from(this.contributions.values()).filter(t=>t.category===e)}hasContribution(e){return this.contributions.has(e)}},j=`welcome.txt`;async function M(){if(!await a.getWorkspace())return null;let e=await a.getFolders();return e.length===0?null:`${e[0].name}/${j}`}function re(e){return e&&typeof e.getFilePath==`function`}async function ie(){return a.isConnected()}async function N(){let e=await M();if(!e)return!1;let t=await a.getWorkspace();if(!t)return!1;try{return await t.getResource(e)instanceof n}catch{return!1}}function P(){let e=T.get();if(!e||!re(e))return!1;let t=e.getFilePath();return t===j||t?.endsWith(`/`+j)===!0}function F(){if(!P())return!1;let e=T.get();return e?e.isDirty()===!1:!1}function I(){return!P()}function L(){return w.getCurrentApp()?.name||`AppSpace`}v.registerContribution(k,{id:`docks.onboarding`,title:()=>`Welcome to ${L()}`,description:()=>`Get started with ${L()} by learning the basics of workspace and file management`,icon:`graduation-cap`,label:``,category:`Getting Started`,initialize:e=>{let t=[];return o(r,()=>{e.requestUpdate()}),o(i,()=>{e.requestUpdate()}),t.push(_(T,()=>{e.requestUpdate()})),t.push(_(y,()=>{e.requestUpdate()})),()=>{t.forEach(e=>e())}},steps:[{id:`create-text-file`,title:`Create welcome.txt`,description:`Create a new text file called "welcome.txt" in your workspace. If you don't have a workspace selected, choose one first.`,preCondition:async()=>await ie(),postCondition:async()=>await N(),command:`touch`,commandParams:async()=>{let e=await M();return e?{path:e,contents:`Welcome to AppSpace!

This is your first file. You can edit it and save your changes.`}:{}}},{id:`open-text-file`,title:`Open welcome.txt`,description:`Open the "welcome.txt" file in the editor.`,preCondition:async()=>await N(),postCondition:()=>P(),command:`open_editor`,commandParams:async()=>{let e=await M();return e?{path:e}:{}}},{id:`edit-and-save`,title:`Type something and save`,description:`Type some text in the editor to modify the file, then save it using Ctrl+S or the save button.`,preCondition:()=>P(),postCondition:()=>F()},{id:`close-text-file`,title:`Close the file`,description:`Close the editor tab by clicking the X button on the tab.`,preCondition:()=>P(),postCondition:()=>I()}]});var R=`.system.ai-config`;function z(e){return e&&typeof e.getFilePath==`function`}function B(){let e=T.get();return!e||!z(e)?!1:e.getFilePath()===R}async function V(){try{let e=await E.get(D);if(!e||!e.defaultProvider)return!1;let t=e.providers?.find(t=>t.name===e.defaultProvider);return t?!!t.apiKey&&t.apiKey.trim()!==``:!1}catch{return!1}}function H(){let e=T.get();return!e||!z(e)||e.getFilePath()!==R?!1:e.isDirty()===!0}function U(){return B()?!H():!1}function W(){return!B()}async function G(){try{let e=await E.get(`aiChatSessions`);if(!e||typeof e!=`object`)return!1;for(let t in e){let n=e[t];if(n?.history&&Array.isArray(n.history)&&n.history.some(e=>e.role===`user`&&e.content&&e.content.trim()!==``))return!0}return!1}catch{return!1}}function K(){return w.getCurrentApp()?.name||`AppSpace`}v.registerContribution(k,{id:`docks.ai-setup`,title:()=>`Set up AI in ${K()}`,description:()=>`Configure an LLM provider to enable AI chat features in ${K()}`,icon:`robot`,label:``,category:`Getting Started`,initialize:e=>{let t=[];return t.push(_(T,()=>{e.requestUpdate()})),t.push(_(y,()=>{e.requestUpdate()})),o(ne,()=>{e.requestUpdate()}),()=>{t.forEach(e=>e())}},steps:[{id:`open-ai-settings`,title:`Open AI Settings`,description:`Open the AI settings editor by clicking the robot icon in the toolbar or using the command palette.`,preCondition:()=>!0,postCondition:()=>B(),command:`open_ai_config`},{id:`configure-llm-provider`,title:`Configure LLM Provider`,description:`Select a provider as default and enter an API key. Make sure to save your changes using Ctrl+S or the save button.`,preCondition:()=>B(),postCondition:async()=>{let e=await V(),t=U();return e&&t}},{id:`save-and-close`,title:`Save and Close`,description:`Save your changes (if not already saved) and close the AI settings editor tab.`,preCondition:()=>B(),postCondition:()=>W()},{id:`type-in-chat`,title:`Type in Chat`,description:`Open the AI chat view (if not already open) and type a message to test your AI configuration.`,preCondition:async()=>await V(),postCondition:async()=>await G()}]});var q=`howto/show-panel`,J=`howto/toggle-panel`,Y=`howto-panel`,X={x:100,y:100},Z={width:400,height:300},Q=class extends ee{constructor(...e){super(...e),this.contributions=[],this.activeContributionId=null,this.stepStates=new Map,this.isMinimized=!1,this.isVisible=!1,this.positionX=X.x,this.positionY=X.y,this.isDragging=!1,this.dragPreviewPosition=null,this.dragStartPosition={x:0,y:0},this.panelRef=f(),this.handleDragStart=e=>{let t=e.target;if(this.isDragTarget(t)||!this.panelRef.value)return;let n=this.panelRef.value.getBoundingClientRect();this.dragStartPosition={x:e.clientX-n.left,y:e.clientY-n.top},this.isDragging=!0,this.dragPreviewPosition={x:this.positionX,y:this.positionY},this.requestUpdate(),e.preventDefault(),e.stopPropagation()},this.handleDragMove=e=>{if(!this.isDragging||!this.dragPreviewPosition)return;let t=this.getViewportBounds(),n=Math.max(0,Math.min(e.clientX-this.dragStartPosition.x,t.maxX)),r=Math.max(0,Math.min(e.clientY-this.dragStartPosition.y,t.maxY));(this.dragPreviewPosition.x!==n||this.dragPreviewPosition.y!==r)&&(this.dragPreviewPosition={x:n,y:r},this.requestUpdate())},this.handleDragEnd=async()=>{if(!this.isDragging||!this.dragPreviewPosition)return;this.isDragging=!1;let e=this.dragPreviewPosition;this.dragPreviewPosition=null,this.positionX=e.x,this.positionY=e.y,await this.saveSettings(),this.requestUpdate()}}async doBeforeUI(){if(this.loadContributions(),o(g,e=>{e.target===`system.howtos`&&(this.loadContributions(),this.requestUpdate())}),o(q,()=>this.showPanel()),o(J,()=>this.toggleVisibility()),await this.loadSettings(),!a.isConnected()&&this.isVisible===!1){let e=await E.getDialogSetting(Y);(!e||e.visible===void 0)&&(this.isVisible=!0,await this.saveSettings())}o(i,()=>{(async()=>{let e=await E.getDialogSetting(Y);!e||e.visible})()})}doInitUI(){this.boundHandleDragMove=this.handleDragMove.bind(this),this.boundHandleDragEnd=this.handleDragEnd.bind(this),document.addEventListener(`mousemove`,this.boundHandleDragMove),document.addEventListener(`mouseup`,this.boundHandleDragEnd)}firstUpdated(e){super.firstUpdated(e)}loadContributions(){this.contributions=A.getAllContributions()}async loadSettings(){let e=await E.getDialogSetting(Y);e&&(e.position&&(this.positionX=e.position.x||X.x,this.positionY=e.position.y||X.y),e.visible!==void 0&&(this.isVisible=e.visible))}async saveSettings(){await E.setDialogSetting(Y,{position:{x:this.positionX,y:this.positionY},visible:this.isVisible})}isDragTarget(e){return!!(e.closest(`.header-actions`)||e.closest(`wa-button`))}getViewportBounds(){let e=this.panelRef.value?.offsetWidth||Z.width,t=this.panelRef.value?.offsetHeight||Z.height;return{maxX:window.innerWidth-e,maxY:window.innerHeight-t}}async startHowTo(e){let t=A.getContribution(e);if(!t){S(`HowTo "${e}" not found`);return}this.cleanupHowTo(),this.activeContributionId=e,this.isMinimized=!1;let n=t.steps.map(e=>({step:e,status:`pending`}));if(this.stepStates.set(e,n),t.initialize){let n={requestUpdate:()=>this.recheckActiveStepConditions(),contributionId:e};this.howtoCleanup=t.initialize(n)||void 0}this.requestUpdate(),await this.checkPreConditions(e,0)}cleanupHowTo(){this.howtoCleanup&&=(this.howtoCleanup(),void 0)}getStepState(e,t){let n=this.stepStates.get(e);return n&&t<n.length?n[t]:null}async checkPreConditions(e,t){let n=this.getStepState(e,t);if(n){if(!n.step.preCondition){n.preConditionMet=!0,this.requestUpdate();return}try{n.preConditionMet=await n.step.preCondition(),this.requestUpdate()}catch(e){console.error(`Pre-condition check failed for step ${n.step.id}:`,e),n.preConditionMet=!1,this.requestUpdate()}}}async checkPostConditions(e,t){let n=this.getStepState(e,t);if(n){if(!n.step.postCondition){this.completeStep(e,t);return}try{let r=await n.step.postCondition();n.postConditionMet=r,n.status=r?`completed`:`failed`,r&&this.activateNextStep(e,t),this.requestUpdate()}catch(e){console.error(`Post-condition check failed for step ${n.step.id}:`,e),n.postConditionMet=!1,n.status=`failed`,this.requestUpdate()}}}completeStep(e,t){let n=this.getStepState(e,t);n&&(n.status=`completed`,this.activateNextStep(e,t),this.requestUpdate())}async activateNextStep(e,t){let n=this.stepStates.get(e);if(!n||t+1>=n.length)return;let r=n[t+1];r.status=`active`,await this.checkPreConditions(e,t+1)}async recheckActiveStepConditions(){if(!this.activeContributionId)return;let e=this.stepStates.get(this.activeContributionId);if(!e)return;let t=e.findIndex(e=>e.status===`active`);if(t!==-1){let n=e[t],r=n.step;if(r.postCondition)try{if(await r.postCondition()&&n.status===`active`){await this.checkPostConditions(this.activeContributionId,t);return}}catch{}}for(let t=0;t<e.length;t++){let n=e[t];n.status===`pending`&&n.step.preCondition&&await this.checkPreConditions(this.activeContributionId,t)}this.requestUpdate()}async executeStep(e,t){let n=this.getStepState(e,t);n&&await this.validatePreConditions(n,e,t)&&(n.status=`active`,this.requestUpdate(),!(n.step.command&&!await this.executeStepCommand(n))&&await this.checkPostConditions(e,t))}async validatePreConditions(e,t,n){return e.step.preCondition?((e.preConditionMet===void 0||e.preConditionMet===!1)&&await this.checkPreConditions(t,n),e.preConditionMet===!0?!0:(S(`Pre-conditions not met for step: ${e.step.title}`),!1)):!0}async executeStepCommand(e){if(!e.step.command)return!0;try{let t=e.step.commandParams,n=typeof t==`function`?await t():t||{},r=x.createExecutionContext(n);return await x.execute(e.step.command,r),!0}catch(t){return console.error(`Failed to execute command for step ${e.step.id}:`,t),S(`Failed to execute step: ${e.step.title}`),e.status=`failed`,this.requestUpdate(),!1}}async runStepCommand(e,t){let n=this.getStepState(e,t);if(!(!n||!n.step.command)){if(n.step.preCondition&&!await n.step.preCondition()){S(`Pre-conditions not met for step: ${n.step.title}`);return}await this.executeStepCommand(n)&&await this.checkPostConditions(e,t)}}skipStep(e,t){let n=this.getStepState(e,t);!n||!n.step.optional||(n.status=`skipped`,this.activateNextStep(e,t),this.requestUpdate())}closeHowTo(){this.cleanupHowTo(),this.activeContributionId=null,this.stepStates.clear(),this.requestUpdate()}toggleMinimize(){this.isMinimized=!this.isMinimized,this.requestUpdate()}async showPanel(){this.isVisible=!0,this.isMinimized=!1,await this.saveSettings(),this.requestUpdate()}async hidePanel(){this.isVisible=!1,await this.saveSettings(),this.requestUpdate()}async toggleVisibility(){this.isVisible?await this.hidePanel():await this.showPanel()}renderStep(e,t,n){let{step:r,status:i,preConditionMet:a,postConditionMet:o}=e,s=i===`active`,c=i===`completed`,u=i===`failed`,d=i===`pending`,f=i===`skipped`;return l`
            <div class="step ${i}" ?data-active=${s}>
                <div class="step-header">
                    <div class="step-number">${t+1}</div>
                    <div class="step-title">${r.title}</div>
                    <div class="step-status">
                        ${r.command?l`
                            <wa-button 
                                size="small" 
                                appearance="plain" 
                                @click=${e=>{e.stopPropagation(),this.runStepCommand(n,t)}}
                                title="Run step command"
                            >
                                <wa-icon name="play"></wa-icon>
                            </wa-button>
                        `:h}
                        ${c?l`<wa-icon name="check-circle" class="status-icon completed"></wa-icon>`:h}
                        ${u?l`<wa-icon name="xmark-circle" class="status-icon failed"></wa-icon>`:h}
                        ${f?l`<wa-icon name="minus-circle" class="status-icon skipped"></wa-icon>`:h}
                        ${d?l`<wa-icon name="circle" class="status-icon pending"></wa-icon>`:h}
                        ${s?l`<wa-icon name="play-circle" class="status-icon active"></wa-icon>`:h}
                    </div>
                </div>
                <div class="step-description">${r.description}</div>
                ${r.preCondition&&a!==void 0?l`
                    <div class="condition pre-condition ${a?`met`:`not-met`}">
                        <wa-icon name="${a?`check`:`xmark`}"></wa-icon>
                        <span>Pre-condition: ${a?`Met`:`Not met`}</span>
                    </div>
                `:h}
                ${r.postCondition&&o!==void 0?l`
                    <div class="condition post-condition ${o?`met`:`not-met`}">
                        <wa-icon name="${o?`check`:`xmark`}"></wa-icon>
                        <span>Post-condition: ${o?`Met`:`Not met`}</span>
                    </div>
                `:h}
                ${s&&r.optional?l`
                    <div class="step-actions">
                        <wa-button size="small" appearance="outline" @click=${()=>this.skipStep(n,t)}>
                            <wa-icon name="forward"></wa-icon>
                            Skip
                        </wa-button>
                    </div>
                `:h}
            </div>
        `}render(){if(!this.isVisible)return h;let e=this.activeContributionId?A.getContribution(this.activeContributionId):null,t=this.activeContributionId&&this.stepStates.get(this.activeContributionId)||[];return l`
            ${this.dragPreviewPosition?l`
                <div 
                    class="howto-panel-drag-preview"
                style=${m({left:`${this.dragPreviewPosition.x}px`,top:`${this.dragPreviewPosition.y}px`,width:`${this.panelRef.value?.offsetWidth||Z.width}px`,height:`${this.panelRef.value?.offsetHeight||Z.height}px`,display:`block`,visibility:`visible`})}
                ></div>
            `:h}
            <div 
                class="howto-panel ${this.isMinimized?`minimized`:``} ${this.dragPreviewPosition?`dragging`:``}"
                style=${m({left:`${this.positionX}px`,top:`${this.positionY}px`,transform:`translateZ(0)`})}
                ${p(this.panelRef)}
            >
                <div class="panel-header" @mousedown=${this.handleDragStart}>
                    <div class="header-title">
                        <wa-icon name="list-check"></wa-icon>
                        <span>HowTo Workflows</span>
                    </div>
                    <div class="header-actions" @mousedown=${e=>e.stopPropagation()}>
                        <wa-button 
                            size="small" 
                            appearance="plain" 
                            @click=${this.toggleMinimize}
                            title="${this.isMinimized?`Expand`:`Minimize`}"
                        >
                            <wa-icon name="${this.isMinimized?`chevron-up`:`chevron-down`}"></wa-icon>
                        </wa-button>
                        <wa-button 
                            size="small" 
                            appearance="plain" 
                            @click=${this.hidePanel}
                            title="Hide Panel"
                        >
                            <wa-icon name="xmark"></wa-icon>
                        </wa-button>
                    </div>
                </div>
                
                ${this.isMinimized?h:l`
                    <div class="panel-content">
                        ${e?l`
                            <div class="active-workflow">
                                <div class="workflow-header">
                                    <div class="workflow-title-section">
                                        <h3>${typeof e.title==`function`?e.title():e.title}</h3>
                                        ${e.description?l`
                                            <p class="workflow-description">${typeof e.description==`function`?e.description():e.description}</p>
                                        `:h}
                                    </div>
                                    <wa-button 
                                        size="small" 
                                        appearance="plain" 
                                        @click=${this.closeHowTo}
                                        title="Close HowTo"
                                    >
                                        <wa-icon name="xmark"></wa-icon>
                                    </wa-button>
                                </div>
                                <div class="steps-list">
                                    ${t.map((e,t)=>this.renderStep(e,t,this.activeContributionId))}
                                </div>
                            </div>
                        `:l`
                            <div class="workflows-list">
                                <h3>Available Workflows</h3>
                                ${this.contributions.length===0?l`
                                    <div class="empty-state">
                                        <wa-icon name="list-check" style="font-size: 2em; opacity: 0.5; margin-bottom: 12px;"></wa-icon>
                                        <p>No HowTo workflows available yet.</p>
                                        <p style="font-size: 0.9em; opacity: 0.7;">Extensions can register workflows via the contribution registry.</p>
                                    </div>
                                `:this.contributions.map(e=>{let t=typeof e.title==`function`?e.title():e.title,n=e.description?typeof e.description==`function`?e.description():e.description:null;return l`
                                    <div class="workflow-item" @click=${()=>this.startHowTo(e.id)}>
                                        ${e.icon?l`
                                            <wa-icon name="${e.icon}"></wa-icon>
                                        `:l`
                                            <wa-icon name="list-check"></wa-icon>
                                        `}
                                        <div class="workflow-info">
                                            <div class="workflow-title">${t}</div>
                                            ${n?l`
                                                <div class="workflow-desc">${n}</div>
                                            `:h}
                                            <div class="workflow-meta">${e.steps.length} step${e.steps.length===1?``:`s`}</div>
                                        </div>
                                    </div>
                                `})}
                            </div>
                        `}
                    </div>
                `}
            </div>
        `}static{this.styles=c`
        :host {
            display: block;
            position: fixed;
            z-index: 10000;
            pointer-events: none;
        }

        .howto-panel-drag-preview {
            position: fixed !important;
            border: 3px dashed var(--wa-color-primary-50, #0066cc) !important;
            background: var(--wa-color-primary-05, rgba(0, 102, 204, 0.05)) !important;
            border-radius: var(--wa-border-radius-medium, 8px);
            z-index: 10001 !important;
            pointer-events: none !important;
            opacity: 0.8 !important;
            box-sizing: border-box;
            display: block !important;
            visibility: visible !important;
            min-width: 100px;
            min-height: 100px;
        }

        :host-context(.wa-light) .howto-panel-drag-preview {
            background: var(--wa-color-primary-95);
            border-color: var(--wa-color-primary-50);
        }

        .howto-panel {
            position: fixed !important;
            width: 400px;
            max-height: 600px;
            background: var(--wa-color-surface-raised, var(--wa-color-neutral-05));
            border: var(--wa-border-width-s, 1px) solid var(--wa-color-neutral-border-loud, var(--wa-color-neutral-25));
            border-radius: var(--wa-border-radius-medium, 8px);
            box-shadow: var(--wa-shadow-large, 0 8px 24px rgba(0, 0, 0, 0.8));
            pointer-events: all;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        :host-context(.wa-light) .howto-panel {
            background: var(--wa-color-surface-raised, var(--wa-color-neutral-95));
            border-color: var(--wa-color-neutral-border-loud, var(--wa-color-neutral-75));
            box-shadow: var(--wa-shadow-large, 0 8px 24px rgba(0, 0, 0, 0.2));
        }

        .howto-panel.minimized {
            max-height: auto;
        }

        .howto-panel.dragging {
            opacity: 0.5;
        }

        .panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--wa-spacing-medium, 12px) var(--wa-spacing-large, 16px);
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-10));
            border-bottom: var(--wa-border-width-s, 1px) solid var(--wa-color-neutral-border-loud, var(--wa-color-neutral-25));
            cursor: move;
            user-select: none;
        }

        :host-context(.wa-light) .panel-header {
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-90));
            border-bottom-color: var(--wa-color-neutral-border-loud, var(--wa-color-neutral-75));
        }

        .header-title {
            display: flex;
            align-items: center;
            gap: var(--wa-spacing-small, 8px);
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-90));
        }

        :host-context(.wa-light) .header-title {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-10));
        }

        .header-actions {
            display: flex;
            gap: var(--wa-spacing-x-small, 4px);
        }

        .panel-content {
            flex: 1;
            overflow-y: auto;
            padding: var(--wa-spacing-large, 16px);
        }

        .workflows-list h3 {
            margin: 0 0 var(--wa-spacing-medium, 12px) 0;
            font-size: var(--wa-font-size-medium, 14px);
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-80));
        }

        :host-context(.wa-light) .workflows-list h3 {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-20));
        }

        .workflow-item {
            display: flex;
            align-items: flex-start;
            gap: var(--wa-spacing-medium, 12px);
            padding: var(--wa-spacing-medium, 12px);
            margin-bottom: var(--wa-spacing-small, 8px);
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-10));
            border: var(--wa-border-width-s, 1px) solid var(--wa-color-neutral-border-subtle, var(--wa-color-neutral-20));
            border-radius: var(--wa-border-radius-small, 6px);
            cursor: pointer;
            transition: all var(--wa-transition-medium, 0.2s);
        }

        :host-context(.wa-light) .workflow-item {
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-90));
            border-color: var(--wa-color-neutral-border-subtle, var(--wa-color-neutral-80));
        }

        .workflow-item:hover {
            background: var(--wa-color-mix-hover, var(--wa-color-neutral-15));
            border-color: var(--wa-color-neutral-border-loud, var(--wa-color-neutral-30));
        }

        :host-context(.wa-light) .workflow-item:hover {
            background: var(--wa-color-mix-hover, var(--wa-color-neutral-85));
            border-color: var(--wa-color-neutral-border-loud, var(--wa-color-neutral-70));
        }

        .workflow-info {
            flex: 1;
        }

        .workflow-title {
            font-weight: 600;
            margin-bottom: var(--wa-spacing-x-small, 4px);
            color: var(--wa-color-text-normal, var(--wa-color-neutral-90));
        }

        :host-context(.wa-light) .workflow-title {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-10));
        }

        .workflow-desc {
            font-size: var(--wa-font-size-small, 12px);
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-70));
            margin-bottom: var(--wa-spacing-x-small, 4px);
        }

        :host-context(.wa-light) .workflow-desc {
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-30));
        }

        .workflow-meta {
            font-size: var(--wa-font-size-x-small, 11px);
            color: var(--wa-color-text-quiet, var(--wa-color-neutral-60));
        }

        :host-context(.wa-light) .workflow-meta {
            color: var(--wa-color-text-quiet, var(--wa-color-neutral-40));
        }

        .active-workflow {
            display: flex;
            flex-direction: column;
            gap: var(--wa-spacing-large, 16px);
        }

        .workflow-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: var(--wa-spacing-medium, 12px);
            margin-bottom: var(--wa-spacing-medium, 12px);
        }

        .workflow-title-section {
            flex: 1;
        }

        .workflow-header h3 {
            margin: 0 0 var(--wa-spacing-small, 8px) 0;
            font-size: var(--wa-font-size-large, 16px);
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-90));
        }

        :host-context(.wa-light) .workflow-header h3 {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-10));
        }

        .workflow-description {
            margin: 0;
            font-size: var(--wa-font-size-medium, 13px);
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-70));
        }

        :host-context(.wa-light) .workflow-description {
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-30));
        }

        .steps-list {
            display: flex;
            flex-direction: column;
            gap: var(--wa-spacing-medium, 12px);
        }

        .step {
            padding: var(--wa-spacing-medium, 12px);
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-10));
            border: var(--wa-border-width-s, 1px) solid var(--wa-color-neutral-border-subtle, var(--wa-color-neutral-20));
            border-radius: var(--wa-border-radius-small, 6px);
            transition: all var(--wa-transition-medium, 0.2s);
        }

        :host-context(.wa-light) .step {
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-90));
            border-color: var(--wa-color-neutral-border-subtle, var(--wa-color-neutral-80));
        }

        .step[data-active="true"] {
            border-color: var(--wa-color-primary-50);
            background: var(--wa-color-primary-05);
        }

        :host-context(.wa-light) .step[data-active="true"] {
            background: var(--wa-color-primary-95);
            border-color: var(--wa-color-primary-50);
        }

        .step.completed {
            border-color: var(--wa-color-success-50);
            background: var(--wa-color-success-05);
        }

        :host-context(.wa-light) .step.completed {
            background: var(--wa-color-success-95);
            border-color: var(--wa-color-success-50);
        }

        .step.failed {
            border-color: var(--wa-color-danger-50);
            background: var(--wa-color-danger-05);
        }

        :host-context(.wa-light) .step.failed {
            background: var(--wa-color-danger-95);
            border-color: var(--wa-color-danger-50);
        }

        .step-header {
            display: flex;
            align-items: center;
            gap: var(--wa-spacing-medium, 12px);
            margin-bottom: var(--wa-spacing-small, 8px);
        }

        .step-number {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-20));
            border-radius: 50%;
            font-size: var(--wa-font-size-small, 12px);
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-80));
        }

        :host-context(.wa-light) .step-number {
            background: var(--wa-color-surface-lowered, var(--wa-color-neutral-80));
            color: var(--wa-color-text-normal, var(--wa-color-neutral-20));
        }

        .step-title {
            flex: 1;
            font-weight: 600;
            color: var(--wa-color-text-normal, var(--wa-color-neutral-90));
        }

        :host-context(.wa-light) .step-title {
            color: var(--wa-color-text-normal, var(--wa-color-neutral-10));
        }

        .step-status {
            display: flex;
            align-items: center;
            gap: var(--wa-spacing-small, 8px);
        }

        .status-icon {
            width: 20px;
            height: 20px;
        }

        .status-icon.completed {
            color: var(--wa-color-success-50);
        }

        .status-icon.failed {
            color: var(--wa-color-danger-50);
        }

        .status-icon.skipped {
            color: var(--wa-color-neutral-50);
        }

        .status-icon.active {
            color: var(--wa-color-primary-50);
        }

        .status-icon.pending {
            color: var(--wa-color-neutral-50);
        }

        .step-description {
            font-size: var(--wa-font-size-medium, 13px);
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-70));
            margin-bottom: var(--wa-spacing-small, 8px);
            line-height: 1.4;
        }

        :host-context(.wa-light) .step-description {
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-30));
        }

        .condition {
            display: flex;
            align-items: center;
            gap: var(--wa-spacing-x-small, 6px);
            font-size: var(--wa-font-size-small, 12px);
            padding: var(--wa-spacing-x-small, 6px) var(--wa-spacing-small, 8px);
            border-radius: var(--wa-border-radius-x-small, 4px);
            margin-bottom: var(--wa-spacing-small, 8px);
        }

        .condition.met {
            background: var(--wa-color-success-10);
            color: var(--wa-color-success-70);
        }

        :host-context(.wa-light) .condition.met {
            background: var(--wa-color-success-90);
            color: var(--wa-color-success-30);
        }

        .condition.not-met {
            background: var(--wa-color-danger-10);
            color: var(--wa-color-danger-70);
        }

        :host-context(.wa-light) .condition.not-met {
            background: var(--wa-color-danger-90);
            color: var(--wa-color-danger-30);
        }

        .step-actions {
            display: flex;
            gap: var(--wa-spacing-small, 8px);
            margin-top: var(--wa-spacing-small, 8px);
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: var(--wa-spacing-x-large, 40px) var(--wa-spacing-large, 20px);
            text-align: center;
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-70));
        }

        :host-context(.wa-light) .empty-state {
            color: var(--wa-color-text-subtle, var(--wa-color-neutral-30));
        }

        .empty-state p {
            margin: var(--wa-spacing-small, 8px) 0;
        }
    `}};C([u()],Q.prototype,`contributions`,void 0),C([u()],Q.prototype,`activeContributionId`,void 0),C([u()],Q.prototype,`stepStates`,void 0),C([u()],Q.prototype,`isMinimized`,void 0),C([u()],Q.prototype,`isVisible`,void 0),C([u()],Q.prototype,`positionX`,void 0),C([u()],Q.prototype,`positionY`,void 0),C([u()],Q.prototype,`dragPreviewPosition`,void 0),Q=C([d(`docks-howto-panel`)],Q);var $=e(`HowToExtension`);function ae(e){$.info(`HowTo system extension loaded`),t.put(`howToService`,A);let n=()=>{if(document.querySelector(`docks-howto-panel`))return;let e=document.createElement(`docks-howto-panel`);document.body.appendChild(e),$.info(`HowTo panel added to DOM`)};if(document.body)requestAnimationFrame(()=>{n()});else{let e=()=>{document.body?n():requestAnimationFrame(e)};requestAnimationFrame(e)}b({command:{id:`howto.show-panel`,name:`Show HowTo Panel`,description:`Shows the HowTo workflows panel`,icon:`list-check`,parameters:[]},handler:{execute:()=>{s(q,null)}}}),b({command:{id:`howto.toggle-panel`,name:`Toggle HowTo Panel`,description:`Toggles the visibility of the HowTo workflows panel`,icon:`list-check`,keyBinding:`CTRL+SHIFT+H`,parameters:[]},handler:{execute:()=>{s(J,null)}},contribution:{target:te,icon:`list-check`,label:`HowTo`}}),$.info(`HowTo system extension initialized`)}export{k as HOWTO_CONTRIBUTION_TARGET,ae as default,A as howToService};