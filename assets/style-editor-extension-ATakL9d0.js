import{n as v,d as p,e as $,f as g,G as m,c as w,t as x}from"./main-DJJFELAT.js";import{a as R,x as a,h as I}from"./index-CGmBFeLm.js";var P=Object.defineProperty,z=Object.getOwnPropertyDescriptor,c=(e,t,i,l)=>{for(var s=l>1?void 0:l?z(t,i):t,n=e.length-1,d;n>=0;n--)(d=e[n])&&(s=(l?d(t,i,s):d(s))||s);return l&&s&&P(t,i,s),s};let o=class extends R{constructor(){super(...arguments),this.open=!1}show(e){this.onSave=e,this.gsMap&&(this.workingStyles=JSON.parse(JSON.stringify(this.gsMap.styles||{})),this.workingRules=JSON.parse(JSON.stringify(this.gsMap.styleRules||[]))),this.open=!0,this.requestUpdate()}hide(){this.open=!1,this.selectedStyleId=void 0,this.selectedRuleId=void 0,this.workingStyles=void 0,this.workingRules=void 0,this.gsMap=void 0,this.requestUpdate()}handleCancel(){this.hide()}handleSave(){this.gsMap&&this.workingStyles&&this.workingRules&&(this.gsMap.styles=this.workingStyles,this.gsMap.styleRules=this.workingRules),this.onSave&&this.onSave(),this.hide()}handleStyleSelect(e){this.selectedStyleId=e}handleRuleSelect(e){this.selectedRuleId=e}renderStylesTab(){return a`
            <div class="split-view">
                ${this.renderStylesList()}
                ${this.selectedStyleId?this.renderStyleDetail():a`
                    <div class="detail-panel empty">
                        <p>Select a style to edit</p>
                    </div>
                `}
            </div>
        `}renderStylesList(){if(!this.workingStyles)return a`<p>No styles available</p>`;const e=Object.entries(this.workingStyles);return a`
            <div class="list-panel">
                <div class="list-header">
                    <h3>Styles</h3>
                    <wa-button size="small" @click=${()=>this.handleAddStyle()}>
                        <wa-icon name="plus"></wa-icon> Add Style
                    </wa-button>
                </div>
                <div class="list-items">
                    ${e.map(([t,i])=>a`
                        <div 
                            class="list-item ${this.selectedStyleId===t?"selected":""}"
                            @click=${()=>this.handleStyleSelect(t)}
                        >
                            <div class="style-preview">
                                ${this.renderStylePreview(i)}
                            </div>
                            <div class="style-info">
                                <div class="style-id">${t}</div>
                            </div>
                            <wa-icon-button 
                                name="trash" 
                                size="small"
                                @click=${l=>this.handleDeleteStyle(l,t)}
                            ></wa-icon-button>
                        </div>
                    `)}
                </div>
            </div>
        `}renderStyleDetail(){var t,i,l,s,n,d;if(!this.selectedStyleId||!this.workingStyles)return null;const e=this.workingStyles[this.selectedStyleId];return e?a`
            <div class="detail-panel">
                <h3>Edit Style: ${this.selectedStyleId}</h3>
                
                <div class="form-section">
                    <h4>Stroke</h4>
                    <wa-color-picker 
                        label="Color" 
                        value="${((t=e.stroke)==null?void 0:t.color)||"#000000"}"
                        opacity
                        size="small"
                        @change=${r=>this.updateStyleProperty("stroke","color",r.target.value)}
                    ></wa-color-picker>
                    <wa-input 
                        type="number" 
                        label="Width" 
                        value="${((i=e.stroke)==null?void 0:i.width)||""}"
                        @input=${r=>this.updateStyleProperty("stroke","width",parseFloat(r.target.value))}
                    ></wa-input>
                </div>

                <div class="form-section">
                    <h4>Fill</h4>
                    <wa-color-picker 
                        label="Color" 
                        value="${((l=e.fill)==null?void 0:l.color)||"#000000"}"
                        opacity
                        size="small"
                        @change=${r=>this.updateStyleProperty("fill","color",r.target.value)}
                    ></wa-color-picker>
                </div>

                ${e.image?a`
                    <div class="form-section">
                        <h4>Image (${e.image.type})</h4>
                        ${e.image.type==="circle"?a`
                            <wa-input 
                                type="number" 
                                label="Radius" 
                                value="${e.image.radius||""}"
                                @input=${r=>this.updateStyleProperty("image","radius",parseFloat(r.target.value))}
                            ></wa-input>
                            <wa-color-picker 
                                label="Fill Color" 
                                value="${((s=e.image.fill)==null?void 0:s.color)||"#000000"}"
                                opacity
                                size="small"
                                @change=${r=>this.updateImageFillProperty("color",r.target.value)}
                            ></wa-color-picker>
                            <wa-color-picker 
                                label="Stroke Color" 
                                value="${((n=e.image.stroke)==null?void 0:n.color)||"#000000"}"
                                opacity
                                size="small"
                                @change=${r=>this.updateImageStrokeProperty("color",r.target.value)}
                            ></wa-color-picker>
                            <wa-input 
                                type="number" 
                                label="Stroke Width" 
                                value="${((d=e.image.stroke)==null?void 0:d.width)||""}"
                                @input=${r=>this.updateImageStrokeProperty("width",parseFloat(r.target.value))}
                            ></wa-input>
                        `:""}
                    </div>
                `:""}
            </div>
        `:null}updateStyleProperty(e,t,i){if(!this.selectedStyleId||!this.workingStyles)return;const l=this.workingStyles[this.selectedStyleId];l[e]||(l[e]={}),l[e][t]=i,this.requestUpdate()}updateImageFillProperty(e,t){if(!this.selectedStyleId||!this.workingStyles)return;const i=this.workingStyles[this.selectedStyleId];i.image&&(i.image.fill||(i.image.fill={}),i.image.fill[e]=t,this.requestUpdate())}updateImageStrokeProperty(e,t){if(!this.selectedStyleId||!this.workingStyles)return;const i=this.workingStyles[this.selectedStyleId];i.image&&(i.image.stroke||(i.image.stroke={}),i.image.stroke[e]=t,this.requestUpdate())}renderStylePreview(e){var s,n,d,r,h,u,y;const t=((s=e.stroke)==null?void 0:s.color)||"transparent",i=((n=e.fill)==null?void 0:n.color)||"transparent",l=((d=e.stroke)==null?void 0:d.width)||1;if(((r=e.image)==null?void 0:r.type)==="circle"){const f=e.image.radius||5,S=((h=e.image.fill)==null?void 0:h.color)||i,k=((u=e.image.stroke)==null?void 0:u.color)||t,b=((y=e.image.stroke)==null?void 0:y.width)||l;return a`
                <svg width="40" height="40" viewBox="0 0 40 40">
                    <circle 
                        cx="20" 
                        cy="20" 
                        r="${f}" 
                        fill="${S}" 
                        stroke="${k}" 
                        stroke-width="${b}"
                    />
                </svg>
            `}return a`
            <svg width="40" height="40" viewBox="0 0 40 40">
                <rect 
                    x="5" 
                    y="5" 
                    width="30" 
                    height="30" 
                    fill="${i}" 
                    stroke="${t}" 
                    stroke-width="${l}"
                />
            </svg>
        `}renderRulesList(){if(!this.workingRules)return a`<p>No rules available</p>`;const e=this.workingRules;return a`
            <div class="list-panel">
                <div class="list-header">
                    <h3>Style Rules</h3>
                    <wa-button size="small" @click=${()=>this.handleAddRule()}>
                        <wa-icon name="plus"></wa-icon> Add Rule
                    </wa-button>
                </div>
                <div class="list-items">
                    ${e.map((t,i)=>{const l=t.id||`rule-${i}`;return a`
                            <div 
                                class="list-item ${this.selectedRuleId===l?"selected":""}"
                                @click=${()=>this.handleRuleSelect(l)}
                            >
                                <div class="rule-info">
                                    <div class="rule-id">${l}</div>
                                    <div class="rule-details">
                                        ${this.renderRuleConditionSummary(t)}
                                        → <strong>${t.styleId}</strong>
                                    </div>
                                </div>
                                <wa-icon-button 
                                    name="trash" 
                                    size="small"
                                    @click=${s=>this.handleDeleteRule(s,l)}
                                ></wa-icon-button>
                            </div>
                        `})}
                </div>
            </div>
        `}renderRuleConditionSummary(e){const t=[];if(e.condition.geometryType){const i=Array.isArray(e.condition.geometryType)?e.condition.geometryType:[e.condition.geometryType];t.push(`Type: ${i.join(", ")}`)}if(e.condition.layerName&&t.push(`Layer: ${e.condition.layerName}`),e.condition.property){const i=e.condition.property;t.push(`${i.key} ${i.operator||"exists"} ${i.value||""}`)}return t.join(" | ")||"All features"}handleAddStyle(){console.log("Add style")}handleDeleteStyle(e,t){e.stopPropagation(),this.workingStyles&&confirm(`Delete style "${t}"?`)&&(delete this.workingStyles[t],this.selectedStyleId===t&&(this.selectedStyleId=void 0),this.requestUpdate())}handleAddRule(){console.log("Add rule")}handleDeleteRule(e,t){if(e.stopPropagation(),!this.workingRules)return;const i=this.workingRules.findIndex(l=>(l.id||`rule-${this.workingRules.indexOf(l)}`)===t);i!==-1&&confirm(`Delete rule "${t}"?`)&&(this.workingRules.splice(i,1),this.selectedRuleId===t&&(this.selectedRuleId=void 0),this.requestUpdate())}render(){return this.open?a`
            <wa-dialog 
                label="Style Editor" 
                ?open=${this.open}
                @wa-hide=${this.handleCancel}
            >
                <div class="style-editor">
                    <wa-tab-group>
                        <wa-tab slot="nav" panel="styles">Styles</wa-tab>
                        <wa-tab slot="nav" panel="rules">Rules</wa-tab>

                        <wa-tab-panel name="styles">
                            ${this.renderStylesTab()}
                        </wa-tab-panel>

                        <wa-tab-panel name="rules">
                            ${this.renderRulesList()}
                        </wa-tab-panel>
                    </wa-tab-group>
                </div>

                <div slot="footer">
                    <wa-button @click=${this.handleCancel}>Cancel</wa-button>
                    <wa-button variant="primary" @click=${this.handleSave}>Save</wa-button>
                </div>
            </wa-dialog>
        `:null}};o.styles=I`
        wa-dialog {
            --width: 800px;
        }

        .style-editor {
            height: 500px;
        }

        wa-tab-group {
            height: 100%;
            --track-width: 2px;
        }

        wa-tab-panel {
            height: 100%;
        }

        wa-tab-panel::part(base) {
            padding: 1rem 0;
            height: 100%;
            overflow: auto;
        }

        .split-view {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            height: 100%;
        }

        .list-panel {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow: auto;
        }

        .list-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .list-header h3 {
            margin: 0;
            font-size: 1.25rem;
        }

        .list-items {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .list-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.75rem;
            border: 1px solid var(--wa-color-neutral-200);
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .list-item:hover {
            background-color: var(--wa-color-neutral-50);
        }

        .list-item.selected {
            background-color: var(--wa-color-primary-50);
            border-color: var(--wa-color-primary-500);
        }

        .style-preview {
            flex-shrink: 0;
        }

        .style-info {
            flex: 1;
        }

        .style-id {
            font-weight: 600;
            font-size: 0.9rem;
        }

        .detail-panel {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow: auto;
            padding: 1rem;
            border: 1px solid var(--wa-color-neutral-200);
            border-radius: 4px;
        }

        .detail-panel.empty {
            align-items: center;
            justify-content: center;
            color: var(--wa-color-neutral-500);
        }

        .detail-panel h3 {
            margin: 0;
            font-size: 1.1rem;
        }

        .form-section {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .form-section h4 {
            margin: 0;
            font-size: 0.95rem;
            color: var(--wa-color-neutral-700);
            border-bottom: 1px solid var(--wa-color-neutral-200);
            padding-bottom: 0.5rem;
        }

        .rule-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .rule-id {
            font-weight: 600;
            font-size: 0.9rem;
        }

        .rule-details {
            font-size: 0.85rem;
            color: var(--wa-color-neutral-600);
        }
    `;c([v({type:Object})],o.prototype,"gsMap",2);c([v({type:Boolean})],o.prototype,"open",2);c([p()],o.prototype,"selectedStyleId",2);c([p()],o.prototype,"selectedRuleId",2);c([p()],o.prototype,"workingStyles",2);c([p()],o.prototype,"workingRules",2);o=c([$("gs-style-editor")],o);const A=({commandRegistry:e})=>{e.registerAll({command:{id:"edit_styles",name:"Edit Styles",description:"Opens the style editor to define and edit map styles and rules",parameters:[]},handler:{execute:async t=>{const i=g.get();if(!(i instanceof m)){w("No active map editor");return}const l=i.getGsMap();if(!l){w("Map not initialized");return}let s=document.querySelector("gs-style-editor");s||(s=new o,document.body.appendChild(s)),s.gsMap=l,await s.updateComplete,s.show(()=>{i.markDirty(!0),i.refresh(),x("Styles updated")})}},contribution:{target:"toolbar:map-editor",icon:"palette",label:"Edit Styles",disabled:()=>!(g.get()instanceof m)}})};export{A as default};
