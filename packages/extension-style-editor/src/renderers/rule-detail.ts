import { html } from "@kispace-io/core/externals/lit";
import { GsStyleRule } from "@kispace-io/gs-lib";

export function renderRuleDetail(ruleId: string, rule: GsStyleRule) {
    return html`
        <div class="detail-panel">
            <h3>Edit Rule: ${ruleId}</h3>

            ${renderConditionSection(rule)}
            ${renderStyleSection(rule)}
        </div>
    `;
}

function renderConditionSection(rule: GsStyleRule) {
    return html`
        <div class="form-section">
            <h4>Condition</h4>
            ${rule.condition.geometryType
                ? html`
                      <wa-input
                          label="Geometry Type"
                          value="${Array.isArray(
                              rule.condition.geometryType
                          )
                              ? rule.condition.geometryType.join(", ")
                              : rule.condition.geometryType}"
                          readonly
                      ></wa-input>
                  `
                : ""}
            ${rule.condition.layerName
                ? html`
                      <wa-input
                          label="Layer Name"
                          value="${rule.condition.layerName}"
                          readonly
                      ></wa-input>
                  `
                : ""}
            ${rule.condition.property
                ? renderPropertyCondition(rule.condition.property)
                : ""}
        </div>
    `;
}

function renderPropertyCondition(
    property: NonNullable<GsStyleRule["condition"]["property"]>
) {
    return html`
        <wa-input
            label="Property Key"
            value="${property.key}"
            readonly
        ></wa-input>
        <wa-input
            label="Operator"
            value="${property.operator || "exists"}"
            readonly
        ></wa-input>
        ${property.value !== undefined
            ? html`
                  <wa-input
                      label="Value"
                      value="${property.value}"
                      readonly
                  ></wa-input>
              `
            : ""}
    `;
}

function renderStyleSection(rule: GsStyleRule) {
    return html`
        <div class="form-section">
            <h4>Style</h4>
            <wa-input
                label="Style ID"
                value="${rule.styleId}"
                readonly
            ></wa-input>
        </div>
    `;
}
