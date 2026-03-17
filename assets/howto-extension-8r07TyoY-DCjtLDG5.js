import{o as J,b as M,K as tt,C as N,c as O,g as F,A as et,M as L,N as S,O as h,P as R,Q as ot,w as m,m as w,t as x,k as H,F as it,a as W}from"./config-RT97oKMn-DH1WMsHN.js";import{p as z,s as p,i as at,r as u,e as rt,A as s,b as r,h as D,c as nt,t as st}from"./repeat-Duk-1tMZ.js";import{T as lt,K as ct}from"./ai-service-CHv1hGx1-fWstvN3r.js";const g=F("HowToService"),b="system.howtos";class dt{constructor(){this.contributions=new Map,this.loadContributions(),p(N,o=>{o.target===b&&this.loadContributions()})}loadContributions(){const o=O.getContributions(b);this.contributions.clear();for(const e of o){if(!e.id){g.warn("HowTo contribution missing id, skipping");continue}if(!e.label){const n=typeof e.title=="function"?e.title():e.title;e.label=n}if(!e.steps||e.steps.length===0){g.warn(`HowTo contribution "${e.id}" has no steps, skipping`);continue}const i=new Set;for(const n of e.steps){if(i.has(n.id)){g.warn(`HowTo contribution "${e.id}" has duplicate step ID: "${n.id}"`);continue}i.add(n.id)}this.contributions.set(e.id,e);const a=typeof e.title=="function"?e.title():e.title;g.debug(`Loaded HowTo contribution: ${a} (${e.id})`)}g.info(`Loaded ${this.contributions.size} HowTo contributions`)}getContribution(o){return this.contributions.get(o)}getAllContributions(){return Array.from(this.contributions.values())}getContributionsByCategory(o){return Array.from(this.contributions.values()).filter(e=>e.category===o)}hasContribution(o){return this.contributions.has(o)}}const P=new dt,A="welcome.txt";async function E(){if(!await m.getWorkspace())return null;const o=await m.getFolders();return o.length===0?null:`${o[0].name}/${A}`}function pt(t){return t&&typeof t.getFilePath=="function"}async function ut(){return m.isConnected()}async function _(){const t=await E();if(!t)return!1;const o=await m.getWorkspace();if(!o)return!1;try{return await o.getResource(t)instanceof it}catch{return!1}}function v(){const t=h.get();if(!t||!pt(t))return!1;const o=t.getFilePath();return o===A||o?.endsWith("/"+A)===!0}function wt(){if(!v())return!1;const t=h.get();return t?t.isDirty()===!1:!1}function ht(){return!v()}function U(){return W.getCurrentApp()?.name||"AppSpace"}const gt={id:"appspace.onboarding",title:()=>`Welcome to ${U()}`,description:()=>`Get started with ${U()} by learning the basics of workspace and file management`,icon:"graduation-cap",label:"",category:"Getting Started",initialize:t=>{const o=[];return p(et,()=>{t.requestUpdate()}),p(L,()=>{t.requestUpdate()}),o.push(S(h,()=>{t.requestUpdate()})),o.push(S(R,()=>{t.requestUpdate()})),()=>{o.forEach(e=>e())}},steps:[{id:"create-text-file",title:"Create welcome.txt",description:`Create a new text file called "welcome.txt" in your workspace. If you don't have a workspace selected, choose one first.`,preCondition:async()=>await ut(),postCondition:async()=>await _(),command:"touch",commandParams:async()=>{const t=await E();return t?{path:t,contents:`Welcome to AppSpace!

This is your first file. You can edit it and save your changes.`}:{}}},{id:"open-text-file",title:"Open welcome.txt",description:'Open the "welcome.txt" file in the editor.',preCondition:async()=>await _(),postCondition:()=>v(),command:"open_editor",commandParams:async()=>{const t=await E();return t?{path:t}:{}}},{id:"edit-and-save",title:"Type something and save",description:"Type some text in the editor to modify the file, then save it using Ctrl+S or the save button.",preCondition:()=>v(),postCondition:()=>wt()},{id:"close-text-file",title:"Close the file",description:"Close the editor tab by clicking the X button on the tab.",preCondition:()=>v(),postCondition:()=>ht()}]};O.registerContribution(b,gt);const Y=".system.ai-config";function G(t){return t&&typeof t.getFilePath=="function"}function f(){const t=h.get();return!t||!G(t)?!1:t.getFilePath()===Y}async function I(){try{const t=await w.get(ct);if(!t||!t.defaultProvider)return!1;const o=t.providers?.find(e=>e.name===t.defaultProvider);return o?!!o.apiKey&&o.apiKey.trim()!=="":!1}catch{return!1}}function vt(){const t=h.get();return!t||!G(t)||t.getFilePath()!==Y?!1:t.isDirty()===!0}function ft(){return f()?!vt():!1}function mt(){return!f()}async function bt(){try{const t=await w.get("aiChatSessions");if(!t||typeof t!="object")return!1;for(const o in t){const e=t[o];if(e?.history&&Array.isArray(e.history)&&e.history.some(a=>a.role==="user"&&a.content&&a.content.trim()!==""))return!0}return!1}catch{return!1}}function q(){return W.getCurrentApp()?.name||"AppSpace"}const xt={id:"appspace.ai-setup",title:()=>`Set up AI in ${q()}`,description:()=>`Configure an LLM provider to enable AI chat features in ${q()}`,icon:"robot",label:"",category:"Getting Started",initialize:t=>{const o=[];return o.push(S(h,()=>{t.requestUpdate()})),o.push(S(R,()=>{t.requestUpdate()})),p(lt,()=>{t.requestUpdate()}),()=>{o.forEach(e=>e())}},steps:[{id:"open-ai-settings",title:"Open AI Settings",description:"Open the AI settings editor by clicking the robot icon in the toolbar or using the command palette.",preCondition:()=>!0,postCondition:()=>f(),command:"open_ai_config"},{id:"configure-llm-provider",title:"Configure LLM Provider",description:"Select a provider as default and enter an API key. Make sure to save your changes using Ctrl+S or the save button.",preCondition:()=>f(),postCondition:async()=>{const t=await I(),o=ft();return t&&o}},{id:"save-and-close",title:"Save and Close",description:"Save your changes (if not already saved) and close the AI settings editor tab.",preCondition:()=>f(),postCondition:()=>mt()},{id:"type-in-chat",title:"Type in Chat",description:"Open the AI chat view (if not already open) and type a message to test your AI configuration.",preCondition:async()=>await I(),postCondition:async()=>await bt()}]};O.registerContribution(b,xt);var yt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,c=(t,o,e,i)=>{for(var a=i>1?void 0:i?Ct(o,e):o,n=t.length-1,d;n>=0;n--)(d=t[n])&&(a=(i?d(o,e,a):d(a))||a);return i&&a&&yt(o,e,a),a};const V="howto/show-panel",X="howto/toggle-panel",y="howto-panel",C={x:100,y:100},k={width:400,height:300};let l=class extends ot{constructor(){super(...arguments),this.contributions=[],this.activeContributionId=null,this.stepStates=new Map,this.isMinimized=!1,this.isVisible=!1,this.positionX=C.x,this.positionY=C.y,this.isDragging=!1,this.dragPreviewPosition=null,this.dragStartPosition={x:0,y:0},this.panelRef=rt(),this.handleDragStart=t=>{const o=t.target;if(this.isDragTarget(o)||!this.panelRef.value)return;const e=this.panelRef.value.getBoundingClientRect();this.dragStartPosition={x:t.clientX-e.left,y:t.clientY-e.top},this.isDragging=!0,this.dragPreviewPosition={x:this.positionX,y:this.positionY},this.requestUpdate(),t.preventDefault(),t.stopPropagation()},this.handleDragMove=t=>{if(!this.isDragging||!this.dragPreviewPosition)return;const o=this.getViewportBounds(),e=Math.max(0,Math.min(t.clientX-this.dragStartPosition.x,o.maxX)),i=Math.max(0,Math.min(t.clientY-this.dragStartPosition.y,o.maxY));(this.dragPreviewPosition.x!==e||this.dragPreviewPosition.y!==i)&&(this.dragPreviewPosition={x:e,y:i},this.requestUpdate())},this.handleDragEnd=async()=>{if(!this.isDragging||!this.dragPreviewPosition)return;this.isDragging=!1;const t=this.dragPreviewPosition;this.dragPreviewPosition=null,this.positionX=t.x,this.positionY=t.y,await this.saveSettings(),this.requestUpdate()}}async doBeforeUI(){if(this.loadContributions(),p(N,o=>{o.target===b&&(this.loadContributions(),this.requestUpdate())}),p(V,()=>this.showPanel()),p(X,()=>this.toggleVisibility()),await this.loadSettings(),!m.isConnected()&&this.isVisible===!1){const o=await w.getDialogSetting(y);(!o||o.visible===void 0)&&(this.isVisible=!0,await this.saveSettings())}p(L,()=>{(async()=>{const e=await w.getDialogSetting(y);!e||e.visible})()})}doInitUI(){this.boundHandleDragMove=this.handleDragMove.bind(this),this.boundHandleDragEnd=this.handleDragEnd.bind(this),document.addEventListener("mousemove",this.boundHandleDragMove),document.addEventListener("mouseup",this.boundHandleDragEnd)}firstUpdated(t){super.firstUpdated(t)}loadContributions(){this.contributions=P.getAllContributions()}async loadSettings(){const t=await w.getDialogSetting(y);t&&(t.position&&(this.positionX=t.position.x||C.x,this.positionY=t.position.y||C.y),t.visible!==void 0&&(this.isVisible=t.visible))}async saveSettings(){await w.setDialogSetting(y,{position:{x:this.positionX,y:this.positionY},visible:this.isVisible})}isDragTarget(t){return!!(t.closest(".header-actions")||t.closest("wa-button"))}getViewportBounds(){const t=this.panelRef.value?.offsetWidth||k.width,o=this.panelRef.value?.offsetHeight||k.height;return{maxX:window.innerWidth-t,maxY:window.innerHeight-o}}async startHowTo(t){const o=P.getContribution(t);if(!o){x(`HowTo "${t}" not found`);return}this.cleanupHowTo(),this.activeContributionId=t,this.isMinimized=!1;const e=o.steps.map(i=>({step:i,status:"pending"}));if(this.stepStates.set(t,e),o.initialize){const i={requestUpdate:()=>this.recheckActiveStepConditions(),contributionId:t};this.howtoCleanup=o.initialize(i)||void 0}this.requestUpdate(),await this.checkPreConditions(t,0)}cleanupHowTo(){this.howtoCleanup&&(this.howtoCleanup(),this.howtoCleanup=void 0)}getStepState(t,o){const e=this.stepStates.get(t);return e&&o<e.length?e[o]:null}async checkPreConditions(t,o){const e=this.getStepState(t,o);if(e){if(!e.step.preCondition){e.preConditionMet=!0,this.requestUpdate();return}try{e.preConditionMet=await e.step.preCondition(),this.requestUpdate()}catch(i){console.error(`Pre-condition check failed for step ${e.step.id}:`,i),e.preConditionMet=!1,this.requestUpdate()}}}async checkPostConditions(t,o){const e=this.getStepState(t,o);if(e){if(!e.step.postCondition){this.completeStep(t,o);return}try{const i=await e.step.postCondition();e.postConditionMet=i,e.status=i?"completed":"failed",i&&this.activateNextStep(t,o),this.requestUpdate()}catch(i){console.error(`Post-condition check failed for step ${e.step.id}:`,i),e.postConditionMet=!1,e.status="failed",this.requestUpdate()}}}completeStep(t,o){const e=this.getStepState(t,o);e&&(e.status="completed",this.activateNextStep(t,o),this.requestUpdate())}async activateNextStep(t,o){const e=this.stepStates.get(t);if(!e||o+1>=e.length)return;const i=e[o+1];i.status="active",await this.checkPreConditions(t,o+1)}async recheckActiveStepConditions(){if(!this.activeContributionId)return;const t=this.stepStates.get(this.activeContributionId);if(!t)return;const o=t.findIndex(e=>e.status==="active");if(o!==-1){const e=t[o],i=e.step;if(i.postCondition)try{if(await i.postCondition()&&e.status==="active"){await this.checkPostConditions(this.activeContributionId,o);return}}catch{}}for(let e=0;e<t.length;e++){const i=t[e];i.status==="pending"&&i.step.preCondition&&await this.checkPreConditions(this.activeContributionId,e)}this.requestUpdate()}async executeStep(t,o){const e=this.getStepState(t,o);e&&await this.validatePreConditions(e,t,o)&&(e.status="active",this.requestUpdate(),!(e.step.command&&!await this.executeStepCommand(e))&&await this.checkPostConditions(t,o))}async validatePreConditions(t,o,e){return t.step.preCondition?((t.preConditionMet===void 0||t.preConditionMet===!1)&&await this.checkPreConditions(o,e),t.preConditionMet!==!0?(x(`Pre-conditions not met for step: ${t.step.title}`),!1):!0):!0}async executeStepCommand(t){if(!t.step.command)return!0;try{const o=t.step.commandParams,e=typeof o=="function"?await o():o||{},i=H.createExecutionContext(e);return await H.execute(t.step.command,i),!0}catch(o){return console.error(`Failed to execute command for step ${t.step.id}:`,o),x(`Failed to execute step: ${t.step.title}`),t.status="failed",this.requestUpdate(),!1}}async runStepCommand(t,o){const e=this.getStepState(t,o);if(!e||!e.step.command)return;if(e.step.preCondition&&!await e.step.preCondition()){x(`Pre-conditions not met for step: ${e.step.title}`);return}await this.executeStepCommand(e)&&await this.checkPostConditions(t,o)}skipStep(t,o){const e=this.getStepState(t,o);!e||!e.step.optional||(e.status="skipped",this.activateNextStep(t,o),this.requestUpdate())}closeHowTo(){this.cleanupHowTo(),this.activeContributionId=null,this.stepStates.clear(),this.requestUpdate()}toggleMinimize(){this.isMinimized=!this.isMinimized,this.requestUpdate()}async showPanel(){this.isVisible=!0,this.isMinimized=!1,await this.saveSettings(),this.requestUpdate()}async hidePanel(){this.isVisible=!1,await this.saveSettings(),this.requestUpdate()}async toggleVisibility(){this.isVisible?await this.hidePanel():await this.showPanel()}renderStep(t,o,e){const{step:i,status:a,preConditionMet:n,postConditionMet:d}=t,$=a==="active",B=a==="completed",K=a==="failed",j=a==="pending",Z=a==="skipped";return r`
            <div class="step ${a}" ?data-active=${$}>
                <div class="step-header">
                    <div class="step-number">${o+1}</div>
                    <div class="step-title">${i.title}</div>
                    <div class="step-status">
                        ${i.command?r`
                            <wa-button 
                                size="small" 
                                appearance="plain" 
                                @click=${Q=>{Q.stopPropagation(),this.runStepCommand(e,o)}}
                                title="Run step command"
                            >
                                <wa-icon name="play"></wa-icon>
                            </wa-button>
                        `:s}
                        ${B?r`<wa-icon name="check-circle" class="status-icon completed"></wa-icon>`:s}
                        ${K?r`<wa-icon name="xmark-circle" class="status-icon failed"></wa-icon>`:s}
                        ${Z?r`<wa-icon name="minus-circle" class="status-icon skipped"></wa-icon>`:s}
                        ${j?r`<wa-icon name="circle" class="status-icon pending"></wa-icon>`:s}
                        ${$?r`<wa-icon name="play-circle" class="status-icon active"></wa-icon>`:s}
                    </div>
                </div>
                <div class="step-description">${i.description}</div>
                ${i.preCondition&&n!==void 0?r`
                    <div class="condition pre-condition ${n?"met":"not-met"}">
                        <wa-icon name="${n?"check":"xmark"}"></wa-icon>
                        <span>Pre-condition: ${n?"Met":"Not met"}</span>
                    </div>
                `:s}
                ${i.postCondition&&d!==void 0?r`
                    <div class="condition post-condition ${d?"met":"not-met"}">
                        <wa-icon name="${d?"check":"xmark"}"></wa-icon>
                        <span>Post-condition: ${d?"Met":"Not met"}</span>
                    </div>
                `:s}
                ${$&&i.optional?r`
                    <div class="step-actions">
                        <wa-button size="small" appearance="outline" @click=${()=>this.skipStep(e,o)}>
                            <wa-icon name="forward"></wa-icon>
                            Skip
                        </wa-button>
                    </div>
                `:s}
            </div>
        `}render(){if(!this.isVisible)return s;const t=this.activeContributionId?P.getContribution(this.activeContributionId):null,o=this.activeContributionId?this.stepStates.get(this.activeContributionId)||[]:[];return r`
            ${this.dragPreviewPosition?r`
                <div 
                    class="howto-panel-drag-preview"
                style=${D({left:`${this.dragPreviewPosition.x}px`,top:`${this.dragPreviewPosition.y}px`,width:`${this.panelRef.value?.offsetWidth||k.width}px`,height:`${this.panelRef.value?.offsetHeight||k.height}px`,display:"block",visibility:"visible"})}
                ></div>
            `:s}
            <div 
                class="howto-panel ${this.isMinimized?"minimized":""} ${this.dragPreviewPosition?"dragging":""}"
                style=${D({left:`${this.positionX}px`,top:`${this.positionY}px`,transform:"translateZ(0)"})}
                ${nt(this.panelRef)}
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
                            title="${this.isMinimized?"Expand":"Minimize"}"
                        >
                            <wa-icon name="${this.isMinimized?"chevron-up":"chevron-down"}"></wa-icon>
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
                
                ${this.isMinimized?s:r`
                    <div class="panel-content">
                        ${t?r`
                            <div class="active-workflow">
                                <div class="workflow-header">
                                    <div class="workflow-title-section">
                                        <h3>${typeof t.title=="function"?t.title():t.title}</h3>
                                        ${t.description?r`
                                            <p class="workflow-description">${typeof t.description=="function"?t.description():t.description}</p>
                                        `:s}
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
                                    ${o.map((e,i)=>this.renderStep(e,i,this.activeContributionId))}
                                </div>
                            </div>
                        `:r`
                            <div class="workflows-list">
                                <h3>Available Workflows</h3>
                                ${this.contributions.length===0?r`
                                    <div class="empty-state">
                                        <wa-icon name="list-check" style="font-size: 2em; opacity: 0.5; margin-bottom: 12px;"></wa-icon>
                                        <p>No HowTo workflows available yet.</p>
                                        <p style="font-size: 0.9em; opacity: 0.7;">Extensions can register workflows via the contribution registry.</p>
                                    </div>
                                `:this.contributions.map(e=>{const i=typeof e.title=="function"?e.title():e.title,a=e.description?typeof e.description=="function"?e.description():e.description:null;return r`
                                    <div class="workflow-item" @click=${()=>this.startHowTo(e.id)}>
                                        ${e.icon?r`
                                            <wa-icon name="${e.icon}"></wa-icon>
                                        `:r`
                                            <wa-icon name="list-check"></wa-icon>
                                        `}
                                        <div class="workflow-info">
                                            <div class="workflow-title">${i}</div>
                                            ${a?r`
                                                <div class="workflow-desc">${a}</div>
                                            `:s}
                                            <div class="workflow-meta">${e.steps.length} step${e.steps.length!==1?"s":""}</div>
                                        </div>
                                    </div>
                                `})}
                            </div>
                        `}
                    </div>
                `}
            </div>
        `}};l.styles=at`
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
    `;c([u()],l.prototype,"contributions",2);c([u()],l.prototype,"activeContributionId",2);c([u()],l.prototype,"stepStates",2);c([u()],l.prototype,"isMinimized",2);c([u()],l.prototype,"isVisible",2);c([u()],l.prototype,"positionX",2);c([u()],l.prototype,"positionY",2);c([u()],l.prototype,"dragPreviewPosition",2);l=c([st("lyra-howto-panel")],l);const T=F("HowToExtension");function $t(t){T.info("HowTo system extension loaded"),J.put("howToService",P);const o=()=>{if(document.querySelector("lyra-howto-panel"))return;const e=document.createElement("lyra-howto-panel");document.body.appendChild(e),T.info("HowTo panel added to DOM")};if(document.body)requestAnimationFrame(()=>{o()});else{const e=()=>{document.body?o():requestAnimationFrame(e)};requestAnimationFrame(e)}M({command:{id:"howto.show-panel",name:"Show HowTo Panel",description:"Shows the HowTo workflows panel",icon:"list-check",parameters:[]},handler:{execute:()=>{z(V,null)}}}),M({command:{id:"howto.toggle-panel",name:"Toggle HowTo Panel",description:"Toggles the visibility of the HowTo workflows panel",icon:"list-check",keyBinding:"CTRL+SHIFT+H",parameters:[]},handler:{execute:()=>{z(X,null)}},contribution:{target:tt,icon:"list-check",label:"HowTo"}}),T.info("HowTo system extension initialized")}export{b as HOWTO_CONTRIBUTION_TARGET,$t as default,P as howToService};
