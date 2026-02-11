import {
    html,
    LitElement,
    customElement,
    property,
    state,
} from "@kispace-io/core/externals/lit";
import { GsMap, GsStyleRule, GsStylesMap } from "@kispace-io/gs-lib";

import { styleEditorStyles } from "./style-editor.styles";
import { renderStylePreview } from "./renderers/style-preview";
import { renderStyleDetail } from "./renderers/style-detail";
import { renderRuleDetail } from "./renderers/rule-detail";
import {
    getGeometryTypesForStyle,
    getRuleConditionSummary,
} from "./utils/geometry-utils";
import {
    updateNestedProperty,
    createStyleUpdateHandlers,
} from "./utils/style-update";

@customElement("gs-style-editor")
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

    static styles = styleEditorStyles;

    show(onSave?: () => void): void {
        this.onSave = onSave;

        if (this.gsMap) {
            this.workingStyles = JSON.parse(
                JSON.stringify(this.gsMap.styles || {})
            );
            this.workingRules = JSON.parse(
                JSON.stringify(this.gsMap.styleRules || [])
            );
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

    render() {
        if (!this.open) return null;

        return html`
            <wa-dialog
                label="Style Editor"
                ?open=${this.open}
                @wa-hide=${this.handleDialogHide}
            >
                <div class="style-editor">
                    <wa-tab-group>
                        <wa-tab slot="nav" panel="styles">Styles</wa-tab>
                        <wa-tab slot="nav" panel="rules">Rules</wa-tab>

                        <wa-tab-panel name="styles">
                            ${this.renderStylesTab()}
                        </wa-tab-panel>

                        <wa-tab-panel name="rules">
                            ${this.renderRulesTab()}
                        </wa-tab-panel>
                    </wa-tab-group>
                </div>

                <div slot="footer">
                    <wa-button @click=${this.handleCancel}>Cancel</wa-button>
                    <wa-button variant="primary" @click=${this.handleSave}
                        >Save</wa-button
                    >
                </div>
            </wa-dialog>
        `;
    }

    private renderStylesTab() {
        return html`
            <wa-split-panel position="40" class="style-split-panel">
                <div slot="start" class="pane-container">
                    <div class="pane-header">
                        <h3>Styles</h3>
                        <wa-button size="small" @click=${this.handleAddStyle}>
                            <wa-icon name="plus"></wa-icon> Add Style
                        </wa-button>
                    </div>
                    <wa-scroller orientation="vertical" class="pane-scroller">
                        ${this.renderStylesTree()}
                    </wa-scroller>
                </div>
                <div slot="end" class="pane-container">
                    <wa-scroller orientation="vertical" class="pane-scroller">
                        ${this.renderSelectedStyleDetail()}
                    </wa-scroller>
                </div>
            </wa-split-panel>
        `;
    }

    private renderStylesTree() {
        if (
            !this.workingStyles ||
            Object.keys(this.workingStyles).length === 0
        ) {
            return html`<p class="empty-message">No styles available</p>`;
        }

        return html`
            <wa-tree selection="single" class="style-tree">
                ${Object.entries(this.workingStyles).map(([id]) =>
                    this.renderStyleTreeItem(id)
                )}
            </wa-tree>
        `;
    }

    private renderStyleTreeItem(id: string) {
        const style = this.workingStyles![id];
        return html`
            <wa-tree-item
                ?selected=${this.selectedStyleId === id}
                @click=${(e: Event) => {
                    e.stopPropagation();
                    this.handleStyleSelect(id);
                }}
            >
                <div class="tree-item-content">
                    <div class="style-preview-small">
                        ${renderStylePreview(style)}
                    </div>
                    <span class="style-id">${id}</span>
                    <wa-icon-button
                        name="trash"
                        size="small"
                        @click=${(e: Event) =>
                            this.handleDeleteStyle(e, id)}
                    ></wa-icon-button>
                </div>
            </wa-tree-item>
        `;
    }

    private renderSelectedStyleDetail() {
        if (
            !this.selectedStyleId ||
            !this.workingStyles?.[this.selectedStyleId]
        ) {
            return html`
                <div class="detail-panel empty">
                    <p>Select a style to edit</p>
                </div>
            `;
        }

        const style = this.workingStyles[this.selectedStyleId];
        const geometryTypes = getGeometryTypesForStyle(
            this.selectedStyleId,
            this.workingRules || []
        );
        const handlers = createStyleUpdateHandlers((path, value) =>
            this.updateStyleProperty(path, value)
        );

        return renderStyleDetail(
            this.selectedStyleId,
            style,
            geometryTypes,
            handlers
        );
    }

    private renderRulesTab() {
        return html`
            <wa-split-panel position="40" class="rule-split-panel">
                <div slot="start" class="pane-container">
                    <div class="pane-header">
                        <h3>Style Rules</h3>
                        <wa-button size="small" @click=${this.handleAddRule}>
                            <wa-icon name="plus"></wa-icon> Add Rule
                        </wa-button>
                    </div>
                    <wa-scroller orientation="vertical" class="pane-scroller">
                        ${this.renderRulesTree()}
                    </wa-scroller>
                </div>
                <div slot="end" class="pane-container">
                    <wa-scroller orientation="vertical" class="pane-scroller">
                        ${this.renderSelectedRuleDetail()}
                    </wa-scroller>
                </div>
            </wa-split-panel>
        `;
    }

    private renderRulesTree() {
        if (!this.workingRules || this.workingRules.length === 0) {
            return html`<p class="empty-message">No rules available</p>`;
        }

        return html`
            <wa-tree selection="single" class="rule-tree">
                ${this.workingRules.map((rule, index) =>
                    this.renderRuleTreeItem(rule, index)
                )}
            </wa-tree>
        `;
    }

    private renderRuleTreeItem(rule: GsStyleRule, index: number) {
        const ruleId = rule.id || `rule-${index}`;
        return html`
            <wa-tree-item
                ?selected=${this.selectedRuleId === ruleId}
                @click=${() => this.handleRuleSelect(ruleId)}
            >
                <div class="tree-item-content">
                    <wa-icon
                        name="code-branch"
                        variant="regular"
                    ></wa-icon>
                    <span class="rule-id">${ruleId}</span>
                    <span class="rule-summary"
                        >${getRuleConditionSummary(rule)} →
                        ${rule.styleId}</span
                    >
                    <wa-icon-button
                        name="trash"
                        size="small"
                        @click=${(e: Event) =>
                            this.handleDeleteRule(e, ruleId)}
                    ></wa-icon-button>
                </div>
            </wa-tree-item>
        `;
    }

    private renderSelectedRuleDetail() {
        if (!this.selectedRuleId || !this.workingRules) {
            return html`
                <div class="detail-panel empty">
                    <p>Select a rule to edit</p>
                </div>
            `;
        }

        const rule = this.workingRules.find(
            (r, idx) => (r.id || `rule-${idx}`) === this.selectedRuleId
        );
        if (!rule) {
            return html`
                <div class="detail-panel empty">
                    <p>Select a rule to edit</p>
                </div>
            `;
        }

        return renderRuleDetail(this.selectedRuleId, rule);
    }

    private handleDialogHide = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === "wa-dialog") {
            this.hide();
        }
    };

    private handleCancel = () => {
        this.hide();
    };

    private handleSave = () => {
        if (this.gsMap && this.workingStyles && this.workingRules) {
            this.gsMap.styles = this.workingStyles;
            this.gsMap.styleRules = this.workingRules;
        }

        this.onSave?.();
        this.hide();
    };

    private handleStyleSelect(styleId: string) {
        if (this.selectedStyleId !== styleId) {
            this.selectedStyleId = styleId;
            this.requestUpdate();
        }
    }

    private handleRuleSelect(ruleId: string) {
        if (this.selectedRuleId !== ruleId) {
            this.selectedRuleId = ruleId;
            this.requestUpdate();
        }
    }

    private handleAddStyle = () => {
        console.log("Add style");
    };

    private handleAddRule = () => {
        console.log("Add rule");
    };

    private handleDeleteStyle(e: Event, styleId: string) {
        e.stopPropagation();
        if (!this.workingStyles) return;

        if (confirm(`Delete style "${styleId}"?`)) {
            delete this.workingStyles[styleId];
            if (this.selectedStyleId === styleId) {
                this.selectedStyleId = undefined;
            }
            this.workingStyles = { ...this.workingStyles };
        }
    }

    private handleDeleteRule(e: Event, ruleId: string) {
        e.stopPropagation();
        if (!this.workingRules) return;

        const index = this.workingRules.findIndex(
            (r, idx) => (r.id || `rule-${idx}`) === ruleId
        );
        if (index === -1) return;

        if (confirm(`Delete rule "${ruleId}"?`)) {
            this.workingRules.splice(index, 1);
            if (this.selectedRuleId === ruleId) {
                this.selectedRuleId = undefined;
            }
            this.workingRules = [...this.workingRules];
        }
    }

    private updateStyleProperty(path: string[], value: any) {
        if (!this.selectedStyleId || !this.workingStyles) return;

        const updated = updateNestedProperty(
            this.workingStyles,
            this.selectedStyleId,
            path,
            value
        );
        if (updated) {
            this.workingStyles = updated;
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "gs-style-editor": GsStyleEditor;
    }
}
