import { css, html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { GsMap, GsStyle, GsStyleRule, GsStylesMap } from "../../rt/gs-model.ts";

@customElement('gs-style-editor')
export class GsStyleEditor extends LitElement {
    @property({ type: Object })
    gsMap?: GsMap;

    @property({ type: Boolean })
    open = false;

    @state()
    private selectedStyleId?: string;

    @state()
    private selectedRuleId?: string;

    @state()
    private workingStyles?: GsStylesMap;

    @state()
    private workingRules?: GsStyleRule[];

    private onSave?: () => void;

    show(onSave?: () => void): void {
        this.onSave = onSave;
        
        // Create deep copies of styles and rules to work with
        if (this.gsMap) {
            this.workingStyles = JSON.parse(JSON.stringify(this.gsMap.styles || {}));
            this.workingRules = JSON.parse(JSON.stringify(this.gsMap.styleRules || []));
        }
        
        this.open = true;
        this.requestUpdate();
    }

    hide(): void {
        this.open = false;
        this.selectedStyleId = undefined;
        this.selectedRuleId = undefined;
        this.workingStyles = undefined;
        this.workingRules = undefined;
        this.gsMap = undefined;
        this.requestUpdate();
    }

    private handleCancel() {
        this.hide();
    }

    private handleSave() {
        // Apply working copies back to the original gsMap
        if (this.gsMap && this.workingStyles && this.workingRules) {
            this.gsMap.styles = this.workingStyles;
            this.gsMap.styleRules = this.workingRules;
        }
        
        if (this.onSave) {
            this.onSave();
        }
        this.hide();
    }

    private handleStyleSelect(styleId: string) {
        this.selectedStyleId = styleId;
    }

    private handleRuleSelect(ruleId: string) {
        this.selectedRuleId = ruleId;
    }

    private renderStylesTab() {
        return html`
            <div class="split-view">
                ${this.renderStylesList()}
                ${this.selectedStyleId ? this.renderStyleDetail() : html`
                    <div class="detail-panel empty">
                        <p>Select a style to edit</p>
                    </div>
                `}
            </div>
        `;
    }

    private renderStylesList() {
        if (!this.workingStyles) return html`<p>No styles available</p>`;

        const styles = Object.entries(this.workingStyles);
        
        return html`
            <div class="list-panel">
                <div class="list-header">
                    <h3>Styles</h3>
                    <wa-button size="small" @click=${() => this.handleAddStyle()}>
                        <wa-icon name="plus"></wa-icon> Add Style
                    </wa-button>
                </div>
                <div class="list-items">
                    ${styles.map(([id, style]) => html`
                        <div 
                            class="list-item ${this.selectedStyleId === id ? 'selected' : ''}"
                            @click=${() => this.handleStyleSelect(id)}
                        >
                            <div class="style-preview">
                                ${this.renderStylePreview(style)}
                            </div>
                            <div class="style-info">
                                <div class="style-id">${id}</div>
                            </div>
                            <wa-icon-button 
                                name="trash" 
                                size="small"
                                @click=${(e: Event) => this.handleDeleteStyle(e, id)}
                            ></wa-icon-button>
                        </div>
                    `)}
                </div>
            </div>
        `;
    }

    private renderStyleDetail() {
        if (!this.selectedStyleId || !this.workingStyles) return null;
        
        const style = this.workingStyles[this.selectedStyleId];
        if (!style) return null;

        return html`
            <div class="detail-panel">
                <h3>Edit Style: ${this.selectedStyleId}</h3>
                
                <div class="form-section">
                    <h4>Stroke</h4>
                    <wa-color-picker 
                        label="Color" 
                        value="${style.stroke?.color || '#000000'}"
                        opacity
                        size="small"
                        @change=${(e: any) => this.updateStyleProperty('stroke', 'color', e.target.value)}
                    ></wa-color-picker>
                    <wa-input 
                        type="number" 
                        label="Width" 
                        value="${style.stroke?.width || ''}"
                        @input=${(e: any) => this.updateStyleProperty('stroke', 'width', parseFloat(e.target.value))}
                    ></wa-input>
                </div>

                <div class="form-section">
                    <h4>Fill</h4>
                    <wa-color-picker 
                        label="Color" 
                        value="${style.fill?.color || '#000000'}"
                        opacity
                        size="small"
                        @change=${(e: any) => this.updateStyleProperty('fill', 'color', e.target.value)}
                    ></wa-color-picker>
                </div>

                ${style.image ? html`
                    <div class="form-section">
                        <h4>Image (${style.image.type})</h4>
                        ${style.image.type === 'circle' ? html`
                            <wa-input 
                                type="number" 
                                label="Radius" 
                                value="${style.image.radius || ''}"
                                @input=${(e: any) => this.updateStyleProperty('image', 'radius', parseFloat(e.target.value))}
                            ></wa-input>
                            <wa-color-picker 
                                label="Fill Color" 
                                value="${style.image.fill?.color || '#000000'}"
                                opacity
                                size="small"
                                @change=${(e: any) => this.updateImageFillProperty('color', e.target.value)}
                            ></wa-color-picker>
                            <wa-color-picker 
                                label="Stroke Color" 
                                value="${style.image.stroke?.color || '#000000'}"
                                opacity
                                size="small"
                                @change=${(e: any) => this.updateImageStrokeProperty('color', e.target.value)}
                            ></wa-color-picker>
                            <wa-input 
                                type="number" 
                                label="Stroke Width" 
                                value="${style.image.stroke?.width || ''}"
                                @input=${(e: any) => this.updateImageStrokeProperty('width', parseFloat(e.target.value))}
                            ></wa-input>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    }

    private updateStyleProperty(category: 'stroke' | 'fill' | 'image', property: string, value: any) {
        if (!this.selectedStyleId || !this.workingStyles) return;
        
        const style = this.workingStyles[this.selectedStyleId];
        if (!style[category]) {
            style[category] = {} as any;
        }
        (style[category] as any)[property] = value;
        this.requestUpdate();
    }

    private updateImageFillProperty(property: string, value: any) {
        if (!this.selectedStyleId || !this.workingStyles) return;
        
        const style = this.workingStyles[this.selectedStyleId];
        if (!style.image) return;
        if (!style.image.fill) {
            style.image.fill = {};
        }
        (style.image.fill as any)[property] = value;
        this.requestUpdate();
    }

    private updateImageStrokeProperty(property: string, value: any) {
        if (!this.selectedStyleId || !this.workingStyles) return;
        
        const style = this.workingStyles[this.selectedStyleId];
        if (!style.image) return;
        if (!style.image.stroke) {
            style.image.stroke = {};
        }
        (style.image.stroke as any)[property] = value;
        this.requestUpdate();
    }

    private renderStylePreview(style: GsStyle) {
        // Simple visual preview of the style
        const strokeColor = style.stroke?.color || 'transparent';
        const fillColor = style.fill?.color || 'transparent';
        const strokeWidth = style.stroke?.width || 1;

        if (style.image?.type === 'circle') {
            const radius = style.image.radius || 5;
            const imgFill = style.image.fill?.color || fillColor;
            const imgStroke = style.image.stroke?.color || strokeColor;
            const imgStrokeWidth = style.image.stroke?.width || strokeWidth;
            
            return html`
                <svg width="40" height="40" viewBox="0 0 40 40">
                    <circle 
                        cx="20" 
                        cy="20" 
                        r="${radius}" 
                        fill="${imgFill}" 
                        stroke="${imgStroke}" 
                        stroke-width="${imgStrokeWidth}"
                    />
                </svg>
            `;
        }

        // Default: show a rectangle with stroke and fill
        return html`
            <svg width="40" height="40" viewBox="0 0 40 40">
                <rect 
                    x="5" 
                    y="5" 
                    width="30" 
                    height="30" 
                    fill="${fillColor}" 
                    stroke="${strokeColor}" 
                    stroke-width="${strokeWidth}"
                />
            </svg>
        `;
    }

    private renderRulesList() {
        if (!this.workingRules) return html`<p>No rules available</p>`;

        const rules = this.workingRules;
        
        return html`
            <div class="list-panel">
                <div class="list-header">
                    <h3>Style Rules</h3>
                    <wa-button size="small" @click=${() => this.handleAddRule()}>
                        <wa-icon name="plus"></wa-icon> Add Rule
                    </wa-button>
                </div>
                <div class="list-items">
                    ${rules.map((rule, index) => {
                        const ruleId = rule.id || `rule-${index}`;
                        return html`
                            <div 
                                class="list-item ${this.selectedRuleId === ruleId ? 'selected' : ''}"
                                @click=${() => this.handleRuleSelect(ruleId)}
                            >
                                <div class="rule-info">
                                    <div class="rule-id">${ruleId}</div>
                                    <div class="rule-details">
                                        ${this.renderRuleConditionSummary(rule)}
                                        → <strong>${rule.styleId}</strong>
                                    </div>
                                </div>
                                <wa-icon-button 
                                    name="trash" 
                                    size="small"
                                    @click=${(e: Event) => this.handleDeleteRule(e, ruleId)}
                                ></wa-icon-button>
                            </div>
                        `;
                    })}
                </div>
            </div>
        `;
    }

    private renderRuleConditionSummary(rule: GsStyleRule) {
        const parts: string[] = [];
        
        if (rule.condition.geometryType) {
            const types = Array.isArray(rule.condition.geometryType) 
                ? rule.condition.geometryType 
                : [rule.condition.geometryType];
            parts.push(`Type: ${types.join(', ')}`);
        }
        
        if (rule.condition.layerName) {
            parts.push(`Layer: ${rule.condition.layerName}`);
        }
        
        if (rule.condition.property) {
            const prop = rule.condition.property;
            parts.push(`${prop.key} ${prop.operator || 'exists'} ${prop.value || ''}`);
        }
        
        return parts.join(' | ') || 'All features';
    }

    private handleAddStyle() {
        // TODO: Implement add style
        console.log('Add style');
    }

    private handleDeleteStyle(e: Event, styleId: string) {
        e.stopPropagation();
        if (!this.workingStyles) return;
        
        if (confirm(`Delete style "${styleId}"?`)) {
            delete this.workingStyles[styleId];
            if (this.selectedStyleId === styleId) {
                this.selectedStyleId = undefined;
            }
            this.requestUpdate();
        }
    }

    private handleAddRule() {
        // TODO: Implement add rule
        console.log('Add rule');
    }

    private handleDeleteRule(e: Event, ruleId: string) {
        e.stopPropagation();
        if (!this.workingRules) return;
        
        const index = this.workingRules.findIndex(r => (r.id || `rule-${this.workingRules!.indexOf(r)}`) === ruleId);
        if (index !== -1 && confirm(`Delete rule "${ruleId}"?`)) {
            this.workingRules.splice(index, 1);
            if (this.selectedRuleId === ruleId) {
                this.selectedRuleId = undefined;
            }
            this.requestUpdate();
        }
    }

    render() {
        if (!this.open) return null;

        return html`
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
        `;
    }

    static styles = css`
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
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'gs-style-editor': GsStyleEditor
    }
}

