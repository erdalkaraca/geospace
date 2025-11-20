import{a1 as O,s as w,a2 as E,a3 as U,w as q,H as h,a0 as _,a4 as f,b as u,q as k,B as A,r as N,h as y,z as C,a5 as R}from"./main-VsLmGfaY.js";import{b as V,r as p,e as W,E as s,x as i,c as P,d as Y,t as X}from"./index-D_931DYw.js";var L=Object.defineProperty,B=Object.getOwnPropertyDescriptor,l=(e,o,t,a)=>{for(var r=a>1?void 0:a?B(o,t):o,c=e.length-1,d;c>=0;c--)(d=e[c])&&(r=(a?d(o,t,r):d(r))||r);return a&&r&&L(o,t,r),r};const S="howto/show-panel",$="howto/toggle-panel",v="k-howto-panel",g={x:100,y:100},m={width:400,height:300};let n=class extends O{constructor(){super(...arguments),this.contributions=[],this.activeContributionId=null,this.stepStates=new Map,this.isMinimized=!1,this.isVisible=!1,this.positionX=g.x,this.positionY=g.y,this.isDragging=!1,this.dragPreviewPosition=null,this.dragStartPosition={x:0,y:0},this.panelRef=W(),this.handleDragStart=e=>{const o=e.target;if(this.isDragTarget(o)||!this.panelRef.value)return;const t=this.panelRef.value.getBoundingClientRect();this.dragStartPosition={x:e.clientX-t.left,y:e.clientY-t.top},this.isDragging=!0,this.dragPreviewPosition={x:this.positionX,y:this.positionY},this.requestUpdate(),e.preventDefault(),e.stopPropagation()},this.handleDragMove=e=>{if(!this.isDragging||!this.dragPreviewPosition)return;const o=this.getViewportBounds(),t=Math.max(0,Math.min(e.clientX-this.dragStartPosition.x,o.maxX)),a=Math.max(0,Math.min(e.clientY-this.dragStartPosition.y,o.maxY));(this.dragPreviewPosition.x!==t||this.dragPreviewPosition.y!==a)&&(this.dragPreviewPosition={x:t,y:a},this.requestUpdate())},this.handleDragEnd=async()=>{if(!this.isDragging||!this.dragPreviewPosition)return;this.isDragging=!1;const e=this.dragPreviewPosition;this.dragPreviewPosition=null,this.positionX=e.x,this.positionY=e.y,await this.saveSettings(),this.requestUpdate()}}async doBeforeUI(){if(this.loadContributions(),w(U,o=>{o.target===E&&(this.loadContributions(),this.requestUpdate())}),w(S,()=>this.showPanel()),w($,()=>this.toggleVisibility()),await this.loadSettings(),!q.isConnected()&&this.isVisible===!1){const o=await h.getDialogSetting(v);(!o||o.visible===void 0)&&(this.isVisible=!0,await this.saveSettings())}w(_,()=>{(async()=>{const t=await h.getDialogSetting(v);!t||t.visible})()})}doInitUI(){this.boundHandleDragMove=this.handleDragMove.bind(this),this.boundHandleDragEnd=this.handleDragEnd.bind(this),document.addEventListener("mousemove",this.boundHandleDragMove),document.addEventListener("mouseup",this.boundHandleDragEnd)}firstUpdated(e){super.firstUpdated(e)}loadContributions(){this.contributions=f.getAllContributions()}async loadSettings(){const e=await h.getDialogSetting(v);e&&(e.position&&(this.positionX=e.position.x||g.x,this.positionY=e.position.y||g.y),e.visible!==void 0&&(this.isVisible=e.visible))}async saveSettings(){await h.setDialogSetting(v,{position:{x:this.positionX,y:this.positionY},visible:this.isVisible})}isDragTarget(e){return!!(e.closest(".header-actions")||e.closest("wa-button"))}getViewportBounds(){const e=this.panelRef.value?.offsetWidth||m.width,o=this.panelRef.value?.offsetHeight||m.height;return{maxX:window.innerWidth-e,maxY:window.innerHeight-o}}async startHowTo(e){const o=f.getContribution(e);if(!o){u(`HowTo "${e}" not found`);return}this.cleanupHowTo(),this.activeContributionId=e,this.isMinimized=!1;const t=o.steps.map(a=>({step:a,status:"pending"}));if(this.stepStates.set(e,t),o.initialize){const a={requestUpdate:()=>this.recheckActiveStepConditions(),contributionId:e};this.howtoCleanup=o.initialize(a)||void 0}this.requestUpdate(),await this.checkPreConditions(e,0)}cleanupHowTo(){this.howtoCleanup&&(this.howtoCleanup(),this.howtoCleanup=void 0)}getStepState(e,o){const t=this.stepStates.get(e);return t&&o<t.length?t[o]:null}async checkPreConditions(e,o){const t=this.getStepState(e,o);if(t){if(!t.step.preCondition){t.preConditionMet=!0,this.requestUpdate();return}try{t.preConditionMet=await t.step.preCondition(),this.requestUpdate()}catch(a){console.error(`Pre-condition check failed for step ${t.step.id}:`,a),t.preConditionMet=!1,this.requestUpdate()}}}async checkPostConditions(e,o){const t=this.getStepState(e,o);if(t){if(!t.step.postCondition){this.completeStep(e,o);return}try{const a=await t.step.postCondition();t.postConditionMet=a,t.status=a?"completed":"failed",a&&this.activateNextStep(e,o),this.requestUpdate()}catch(a){console.error(`Post-condition check failed for step ${t.step.id}:`,a),t.postConditionMet=!1,t.status="failed",this.requestUpdate()}}}completeStep(e,o){const t=this.getStepState(e,o);t&&(t.status="completed",this.activateNextStep(e,o),this.requestUpdate())}async activateNextStep(e,o){const t=this.stepStates.get(e);if(!t||o+1>=t.length)return;const a=t[o+1];a.status="active",await this.checkPreConditions(e,o+1)}async recheckActiveStepConditions(){if(!this.activeContributionId)return;const e=this.stepStates.get(this.activeContributionId);if(!e)return;const o=e.findIndex(t=>t.status==="active");if(o!==-1){const t=e[o],a=t.step;if(a.postCondition)try{if(await a.postCondition()&&t.status==="active"){await this.checkPostConditions(this.activeContributionId,o);return}}catch{}}for(let t=0;t<e.length;t++){const a=e[t];a.status==="pending"&&a.step.preCondition&&await this.checkPreConditions(this.activeContributionId,t)}this.requestUpdate()}async executeStep(e,o){const t=this.getStepState(e,o);t&&await this.validatePreConditions(t,e,o)&&(t.status="active",this.requestUpdate(),!(t.step.command&&!await this.executeStepCommand(t))&&await this.checkPostConditions(e,o))}async validatePreConditions(e,o,t){return e.step.preCondition?((e.preConditionMet===void 0||e.preConditionMet===!1)&&await this.checkPreConditions(o,t),e.preConditionMet!==!0?(u(`Pre-conditions not met for step: ${e.step.title}`),!1):!0):!0}async executeStepCommand(e){if(!e.step.command)return!0;try{const o=k.createExecutionContext(e.step.commandParams||{});return await k.execute(e.step.command,o),!0}catch(o){return console.error(`Failed to execute command for step ${e.step.id}:`,o),u(`Failed to execute step: ${e.step.title}`),e.status="failed",this.requestUpdate(),!1}}async runStepCommand(e,o){const t=this.getStepState(e,o);if(!t||!t.step.command)return;if(t.step.preCondition&&!await t.step.preCondition()){u(`Pre-conditions not met for step: ${t.step.title}`);return}await this.executeStepCommand(t)&&await this.checkPostConditions(e,o)}skipStep(e,o){const t=this.getStepState(e,o);!t||!t.step.optional||(t.status="skipped",this.activateNextStep(e,o),this.requestUpdate())}closeHowTo(){this.cleanupHowTo(),this.activeContributionId=null,this.stepStates.clear(),this.requestUpdate()}toggleMinimize(){this.isMinimized=!this.isMinimized,this.requestUpdate()}async showPanel(){this.isVisible=!0,this.isMinimized=!1,await this.saveSettings(),this.requestUpdate()}async hidePanel(){this.isVisible=!1,await this.saveSettings(),this.requestUpdate()}async toggleVisibility(){this.isVisible?await this.hidePanel():await this.showPanel()}renderStep(e,o,t){const{step:a,status:r,preConditionMet:c,postConditionMet:d}=e,x=r==="active",T=r==="completed",z=r==="failed",H=r==="pending",M=r==="skipped";return i`
            <div class="step ${r}" ?data-active=${x}>
                <div class="step-header">
                    <div class="step-number">${o+1}</div>
                    <div class="step-title">${a.title}</div>
                    <div class="step-status">
                        ${a.command?i`
                            <wa-button 
                                size="small" 
                                appearance="plain" 
                                @click=${D=>{D.stopPropagation(),this.runStepCommand(t,o)}}
                                title="Run step command"
                            >
                                <wa-icon name="play"></wa-icon>
                            </wa-button>
                        `:s}
                        ${T?i`<wa-icon name="check-circle" class="status-icon completed"></wa-icon>`:s}
                        ${z?i`<wa-icon name="xmark-circle" class="status-icon failed"></wa-icon>`:s}
                        ${M?i`<wa-icon name="minus-circle" class="status-icon skipped"></wa-icon>`:s}
                        ${H?i`<wa-icon name="circle" class="status-icon pending"></wa-icon>`:s}
                        ${x?i`<wa-icon name="play-circle" class="status-icon active"></wa-icon>`:s}
                    </div>
                </div>
                <div class="step-description">${a.description}</div>
                ${a.preCondition&&c!==void 0?i`
                    <div class="condition pre-condition ${c?"met":"not-met"}">
                        <wa-icon name="${c?"check":"xmark"}"></wa-icon>
                        <span>Pre-condition: ${c?"Met":"Not met"}</span>
                    </div>
                `:s}
                ${a.postCondition&&d!==void 0?i`
                    <div class="condition post-condition ${d?"met":"not-met"}">
                        <wa-icon name="${d?"check":"xmark"}"></wa-icon>
                        <span>Post-condition: ${d?"Met":"Not met"}</span>
                    </div>
                `:s}
                ${x&&a.optional?i`
                    <div class="step-actions">
                        <wa-button size="small" appearance="outline" @click=${()=>this.skipStep(t,o)}>
                            <wa-icon name="forward"></wa-icon>
                            Skip
                        </wa-button>
                    </div>
                `:s}
            </div>
        `}render(){if(!this.isVisible)return s;const e=this.activeContributionId?f.getContribution(this.activeContributionId):null,o=this.activeContributionId?this.stepStates.get(this.activeContributionId)||[]:[];return i`
            ${this.dragPreviewPosition?i`
                <div 
                    class="howto-panel-drag-preview"
                style=${P({left:`${this.dragPreviewPosition.x}px`,top:`${this.dragPreviewPosition.y}px`,width:`${this.panelRef.value?.offsetWidth||m.width}px`,height:`${this.panelRef.value?.offsetHeight||m.height}px`,display:"block",visibility:"visible"})}
                ></div>
            `:s}
            <div 
                class="howto-panel ${this.isMinimized?"minimized":""} ${this.dragPreviewPosition?"dragging":""}"
                style=${P({left:`${this.positionX}px`,top:`${this.positionY}px`,transform:"translateZ(0)"})}
                ${Y(this.panelRef)}
            >
                <div class="panel-header" @mousedown=${this.handleDragStart}>
                    <div class="header-title">
                        <wa-icon name="list-check"></wa-icon>
                        <span>HowTo Workflows</span>
                    </div>
                    <div class="header-actions" @mousedown=${t=>t.stopPropagation()}>
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
                
                ${this.isMinimized?s:i`
                    <div class="panel-content">
                        ${e?i`
                            <div class="active-workflow">
                                <div class="workflow-header">
                                    <div class="workflow-title-section">
                                        <h3>${typeof e.title=="function"?e.title():e.title}</h3>
                                        ${e.description?i`
                                            <p class="workflow-description">${typeof e.description=="function"?e.description():e.description}</p>
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
                                    ${o.map((t,a)=>this.renderStep(t,a,this.activeContributionId))}
                                </div>
                            </div>
                        `:i`
                            <div class="workflows-list">
                                <h3>Available Workflows</h3>
                                ${this.contributions.length===0?i`
                                    <div class="empty-state">
                                        <wa-icon name="list-check" style="font-size: 2em; opacity: 0.5; margin-bottom: 12px;"></wa-icon>
                                        <p>No HowTo workflows available yet.</p>
                                        <p style="font-size: 0.9em; opacity: 0.7;">Extensions can register workflows via the contribution registry.</p>
                                    </div>
                                `:this.contributions.map(t=>{const a=typeof t.title=="function"?t.title():t.title,r=t.description?typeof t.description=="function"?t.description():t.description:null;return i`
                                    <div class="workflow-item" @click=${()=>this.startHowTo(t.id)}>
                                        ${t.icon?i`
                                            <wa-icon name="${t.icon}"></wa-icon>
                                        `:i`
                                            <wa-icon name="list-check"></wa-icon>
                                        `}
                                        <div class="workflow-info">
                                            <div class="workflow-title">${a}</div>
                                            ${r?i`
                                                <div class="workflow-desc">${r}</div>
                                            `:s}
                                            <div class="workflow-meta">${t.steps.length} step${t.steps.length!==1?"s":""}</div>
                                        </div>
                                    </div>
                                `})}
                            </div>
                        `}
                    </div>
                `}
            </div>
        `}};n.styles=V`
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
    `;l([p()],n.prototype,"contributions",2);l([p()],n.prototype,"activeContributionId",2);l([p()],n.prototype,"stepStates",2);l([p()],n.prototype,"isMinimized",2);l([p()],n.prototype,"isVisible",2);l([p()],n.prototype,"positionX",2);l([p()],n.prototype,"positionY",2);l([p()],n.prototype,"dragPreviewPosition",2);n=l([X("k-howto-panel")],n);const b=A("HowToExtension");function j(e){b.info("HowTo system extension loaded"),N.put("howToService",f);const o=()=>{if(document.querySelector("k-howto-panel"))return;const t=document.createElement("k-howto-panel");document.body.appendChild(t),b.info("HowTo panel added to DOM")};if(document.body)requestAnimationFrame(()=>{o()});else{const t=()=>{document.body?o():requestAnimationFrame(t)};requestAnimationFrame(t)}y({command:{id:"howto.show-panel",name:"Show HowTo Panel",description:"Shows the HowTo workflows panel",icon:"list-check",parameters:[]},handler:{execute:()=>{C(S,null)}}}),y({command:{id:"howto.toggle-panel",name:"Toggle HowTo Panel",description:"Toggles the visibility of the HowTo workflows panel",icon:"list-check",keyBinding:"CTRL+SHIFT+H",parameters:[]},handler:{execute:()=>{C($,null)}},contribution:{target:R,icon:"list-check",label:"HowTo"}}),b.info("HowTo system extension initialized")}export{E as HOWTO_CONTRIBUTION_TARGET,j as default,f as howToService};
