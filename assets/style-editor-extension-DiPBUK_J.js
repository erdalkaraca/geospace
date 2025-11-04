import{d as p,G as h,c as u,t as m}from"./main-BmjwJiSE.js";import{i as w,x as r,a as v,n as y,r as c,t as f}from"./index-C4bFKT08.js";var S=Object.defineProperty,k=Object.getOwnPropertyDescriptor,o=(e,t,i,l)=>{for(var s=l>1?void 0:l?k(t,i):t,n=e.length-1,d;n>=0;n--)(d=e[n])&&(s=(l?d(t,i,s):d(s))||s);return l&&s&&S(t,i,s),s};let a=class extends w{constructor(){super(...arguments),this.open=!1}show(e){this.onSave=e,this.gsMap&&(this.workingStyles=JSON.parse(JSON.stringify(this.gsMap.styles||{})),this.workingRules=JSON.parse(JSON.stringify(this.gsMap.styleRules||[]))),this.open=!0,this.requestUpdate()}hide(){this.open=!1,this.selectedStyleId=void 0,this.selectedRuleId=void 0,this.workingStyles=void 0,this.workingRules=void 0,this.gsMap=void 0,this.requestUpdate()}handleCancel(){this.hide()}handleSave(){this.gsMap&&this.workingStyles&&this.workingRules&&(this.gsMap.styles=this.workingStyles,this.gsMap.styleRules=this.workingRules),this.onSave&&this.onSave(),this.hide()}handleStyleSelect(e){this.selectedStyleId=e}handleRuleSelect(e){this.selectedRuleId=e}renderStylesTab(){return r`
            <div class="split-view">
                ${this.renderStylesList()}
                ${this.selectedStyleId?this.renderStyleDetail():r`
                    <div class="detail-panel empty">
                        <p>Select a style to edit</p>
                    </div>
                `}
            </div>
        `}renderStylesList(){if(!this.workingStyles)return r`<p>No styles available</p>`;const e=Object.entries(this.workingStyles);return r`
            <div class="list-panel">
                <div class="list-header">
                    <h3>Styles</h3>
                    <wa-button size="small" @click=${()=>this.handleAddStyle()}>
                        <wa-icon name="plus"></wa-icon> Add Style
                    </wa-button>
                </div>
                <div class="list-items">
                    ${e.map(([t,i])=>r`
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
        `}renderStyleDetail(){if(!this.selectedStyleId||!this.workingStyles)return null;const e=this.workingStyles[this.selectedStyleId];return e?r`
            <div class="detail-panel">
                <h3>Edit Style: ${this.selectedStyleId}</h3>
                
                <div class="form-section">
                    <h4>Stroke</h4>
                    <wa-color-picker 
                        label="Color" 
                        value="${e.stroke?.color||"#000000"}"
                        opacity
                        size="small"
                        @change=${t=>this.updateStyleProperty("stroke","color",t.target.value)}
                    ></wa-color-picker>
                    <wa-input 
                        type="number" 
                        label="Width" 
                        value="${e.stroke?.width||""}"
                        @input=${t=>this.updateStyleProperty("stroke","width",parseFloat(t.target.value))}
                    ></wa-input>
                </div>

                <div class="form-section">
                    <h4>Fill</h4>
                    <wa-color-picker 
                        label="Color" 
                        value="${e.fill?.color||"#000000"}"
                        opacity
                        size="small"
                        @change=${t=>this.updateStyleProperty("fill","color",t.target.value)}
                    ></wa-color-picker>
                </div>

                ${e.image?r`
                    <div class="form-section">
                        <h4>Image (${e.image.type})</h4>
                        ${e.image.type==="circle"?r`
                            <wa-input 
                                type="number" 
                                label="Radius" 
                                value="${e.image.radius||""}"
                                @input=${t=>this.updateStyleProperty("image","radius",parseFloat(t.target.value))}
                            ></wa-input>
                            <wa-color-picker 
                                label="Fill Color" 
                                value="${e.image.fill?.color||"#000000"}"
                                opacity
                                size="small"
                                @change=${t=>this.updateImageFillProperty("color",t.target.value)}
                            ></wa-color-picker>
                            <wa-color-picker 
                                label="Stroke Color" 
                                value="${e.image.stroke?.color||"#000000"}"
                                opacity
                                size="small"
                                @change=${t=>this.updateImageStrokeProperty("color",t.target.value)}
                            ></wa-color-picker>
                            <wa-input 
                                type="number" 
                                label="Stroke Width" 
                                value="${e.image.stroke?.width||""}"
                                @input=${t=>this.updateImageStrokeProperty("width",parseFloat(t.target.value))}
                            ></wa-input>
                        `:""}
                    </div>
                `:""}
            </div>
        `:null}updateStyleProperty(e,t,i){if(!this.selectedStyleId||!this.workingStyles)return;const l=this.workingStyles[this.selectedStyleId];l[e]||(l[e]={}),l[e][t]=i,this.requestUpdate()}updateImageFillProperty(e,t){if(!this.selectedStyleId||!this.workingStyles)return;const i=this.workingStyles[this.selectedStyleId];i.image&&(i.image.fill||(i.image.fill={}),i.image.fill[e]=t,this.requestUpdate())}updateImageStrokeProperty(e,t){if(!this.selectedStyleId||!this.workingStyles)return;const i=this.workingStyles[this.selectedStyleId];i.image&&(i.image.stroke||(i.image.stroke={}),i.image.stroke[e]=t,this.requestUpdate())}renderStylePreview(e){const t=e.stroke?.color||"transparent",i=e.fill?.color||"transparent",l=e.stroke?.width||1;if(e.image?.type==="circle"){const s=e.image.radius||5,n=e.image.fill?.color||i,d=e.image.stroke?.color||t,g=e.image.stroke?.width||l;return r`
                <svg width="40" height="40" viewBox="0 0 40 40">
                    <circle 
                        cx="20" 
                        cy="20" 
                        r="${s}" 
                        fill="${n}" 
                        stroke="${d}" 
                        stroke-width="${g}"
                    />
                </svg>
            `}return r`
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
        `}renderRulesList(){if(!this.workingRules)return r`<p>No rules available</p>`;const e=this.workingRules;return r`
            <div class="list-panel">
                <div class="list-header">
                    <h3>Style Rules</h3>
                    <wa-button size="small" @click=${()=>this.handleAddRule()}>
                        <wa-icon name="plus"></wa-icon> Add Rule
                    </wa-button>
                </div>
                <div class="list-items">
                    ${e.map((t,i)=>{const l=t.id||`rule-${i}`;return r`
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
        `}renderRuleConditionSummary(e){const t=[];if(e.condition.geometryType){const i=Array.isArray(e.condition.geometryType)?e.condition.geometryType:[e.condition.geometryType];t.push(`Type: ${i.join(", ")}`)}if(e.condition.layerName&&t.push(`Layer: ${e.condition.layerName}`),e.condition.property){const i=e.condition.property;t.push(`${i.key} ${i.operator||"exists"} ${i.value||""}`)}return t.join(" | ")||"All features"}handleAddStyle(){console.log("Add style")}handleDeleteStyle(e,t){e.stopPropagation(),this.workingStyles&&confirm(`Delete style "${t}"?`)&&(delete this.workingStyles[t],this.selectedStyleId===t&&(this.selectedStyleId=void 0),this.requestUpdate())}handleAddRule(){console.log("Add rule")}handleDeleteRule(e,t){if(e.stopPropagation(),!this.workingRules)return;const i=this.workingRules.findIndex(l=>(l.id||`rule-${this.workingRules.indexOf(l)}`)===t);i!==-1&&confirm(`Delete rule "${t}"?`)&&(this.workingRules.splice(i,1),this.selectedRuleId===t&&(this.selectedRuleId=void 0),this.requestUpdate())}render(){return this.open?r`
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
        `:null}};a.styles=v`
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
    `;o([y({type:Object})],a.prototype,"gsMap",2);o([y({type:Boolean})],a.prototype,"open",2);o([c()],a.prototype,"selectedStyleId",2);o([c()],a.prototype,"selectedRuleId",2);o([c()],a.prototype,"workingStyles",2);o([c()],a.prototype,"workingRules",2);a=o([f("gs-style-editor")],a);const x=({commandRegistry:e})=>{e.registerAll({command:{id:"edit_styles",name:"Edit Styles",description:"Opens the style editor to define and edit map styles and rules",parameters:[]},handler:{execute:async t=>{const i=p.get();if(!(i instanceof h)){u("No active map editor");return}const l=i.getGsMap();if(!l){u("Map not initialized");return}let s=document.querySelector("gs-style-editor");s||(s=new a,document.body.appendChild(s)),s.gsMap=l,await s.updateComplete,s.show(()=>{i.markDirty(!0),i.refresh(),m("Styles updated")})}},contribution:{target:"toolbar:map-editor",icon:"palette",label:"Edit Styles",disabled:()=>!(p.get()instanceof h)}})};export{x as default};
