import { css, html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { GsMap, GsStyle, GsStyleRule } from "../rt/gs-model.ts";

@customElement('gs-style-editor')
export class GsStyleEditor extends LitElement {
    @property({ type: Object })
    gsMap?: GsMap;

    @property({ type: Boolean })
    open = false;

    @state()
    private activeTab: 'styles' | 'rules' = 'styles';

    @state()
    private selectedStyleId?: string;

    @state()
    private selectedRuleId?: string;

    private onSave?: () => void;

    show(onSave?: () => void) {
        this.onSave = onSave;
        this.open = true;
    }

    hide() {
        this.open = false;
        this.selectedStyleId = undefined;
        this.selectedRuleId = undefined;
    }

    private handleCancel() {
        this.hide();
    }

    private handleSave() {
        if (this.onSave) {
            this.onSave();
        }
        this.hide();
    }

    private handleTabChange(tab: 'styles' | 'rules') {
        this.activeTab = tab;
        this.selectedStyleId = undefined;
        this.selectedRuleId = undefined;
    }

    private handleStyleSelect(styleId: string) {
        this.selectedStyleId = styleId;
    }

    private handleRuleSelect(ruleId: string) {
        this.selectedRuleId = ruleId;
    }

    private renderStylesList() {
        if (!this.gsMap?.styles) return html`<p>No styles available</p>`;

        const styles = Object.entries(this.gsMap.styles);
        
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
        if (!this.gsMap?.styleRules) return html`<p>No rules available</p>`;

        const rules = this.gsMap.styleRules;
        
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
        if (!this.gsMap?.styles) return;
        
        if (confirm(`Delete style "${styleId}"?`)) {
            delete this.gsMap.styles[styleId];
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
        if (!this.gsMap?.styleRules) return;
        
        const index = this.gsMap.styleRules.findIndex(r => (r.id || `rule-${this.gsMap!.styleRules.indexOf(r)}`) === ruleId);
        if (index !== -1 && confirm(`Delete rule "${ruleId}"?`)) {
            this.gsMap.styleRules.splice(index, 1);
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
                    <div class="tabs">
                        <wa-button 
                            variant="${this.activeTab === 'styles' ? 'primary' : 'default'}"
                            @click=${() => this.handleTabChange('styles')}
                        >
                            Styles
                        </wa-button>
                        <wa-button 
                            variant="${this.activeTab === 'rules' ? 'primary' : 'default'}"
                            @click=${() => this.handleTabChange('rules')}
                        >
                            Rules
                        </wa-button>
                    </div>

                    <div class="content">
                        ${this.activeTab === 'styles' 
                            ? this.renderStylesList()
                            : this.renderRulesList()
                        }
                    </div>
                </div>

                <div slot="footer">
                    <wa-button @click=${this.handleCancel}>Cancel</wa-button>
                    <wa-button variant="primary" @click=${this.handleSave}>Save</wa-button>
                </div>
            </wa-dialog>
        `;
    }

    static styles = css`
        .style-editor {
            display: flex;
            flex-direction: column;
            height: 500px;
            gap: 1rem;
        }

        .tabs {
            display: flex;
            gap: 0.5rem;
            border-bottom: 1px solid var(--wa-color-neutral-200);
            padding-bottom: 0.5rem;
        }

        .content {
            flex: 1;
            overflow: auto;
        }

        .list-panel {
            display: flex;
            flex-direction: column;
            gap: 1rem;
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

