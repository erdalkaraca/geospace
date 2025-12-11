import { css } from '@kispace-io/appspace/externals/lit';

export const styleEditorStyles = css`
    wa-dialog {
        --width: 900px;
    }

    wa-dialog::part(body) {
        overflow: hidden;
        padding: 0;
    }

    .style-editor {
        height: 600px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    wa-tab-group {
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
    }

    wa-tab-group::part(base) {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    wa-tab-group::part(body) {
        flex: 1;
        min-height: 0;
        overflow: hidden;
    }

    wa-tab-panel {
        height: 100%;
    }

    wa-tab-panel::part(base) {
        height: 100%;
        overflow: hidden;
    }

    .style-split-panel,
    .rule-split-panel {
        height: 100%;
    }

    .style-split-panel::part(start),
    .rule-split-panel::part(start),
    .style-split-panel::part(end),
    .rule-split-panel::part(end) {
        overflow: hidden;
    }

    .pane-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }

    .pane-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--wa-space-m);
        flex-shrink: 0;
    }

    .pane-header h3 {
        margin: 0;
    }

    .pane-scroller {
        flex: 1;
        min-height: 0;
    }

    .empty-message {
        color: var(--wa-color-text-quiet);
        text-align: center;
        padding: var(--wa-space-xl);
    }

    .style-tree,
    .rule-tree {
        padding: 0 var(--wa-space-m) var(--wa-space-m);
    }

    .tree-item-content {
        display: flex;
        align-items: center;
        gap: var(--wa-space-s);
        width: 100%;
    }

    .style-preview-small {
        flex-shrink: 0;
    }

    .style-preview-small svg {
        width: 24px;
        height: 24px;
    }

    .style-id {
        flex: 1;
    }

    .rule-summary {
        color: var(--wa-color-text-quiet);
        flex: 1;
        margin-left: var(--wa-space-s);
    }

    .detail-panel {
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-m);
        padding: var(--wa-space-m);
    }

    .detail-panel h3 {
        margin: 0;
    }

    .detail-panel.empty {
        height: 100%;
        align-items: center;
        justify-content: center;
        color: var(--wa-color-text-quiet);
    }

    .form-section {
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-s);
        padding: var(--wa-space-m);
        background-color: var(--wa-color-surface-raised);
        border: 1px solid var(--wa-color-surface-border);
        border-radius: var(--wa-border-radius-medium);
    }

    .form-section h4 {
        margin: 0 0 var(--wa-space-s) 0;
        padding-bottom: var(--wa-space-s);
        border-bottom: 1px solid var(--wa-color-surface-border);
        color: var(--wa-color-text-normal);
    }

    .geometry-types {
        margin: 0 0 var(--wa-space-m) 0;
        padding: var(--wa-space-s);
        background-color: var(--wa-color-surface-lowered);
        border-radius: var(--wa-border-radius-small);
        color: var(--wa-color-text-quiet);
        font-size: 0.875rem;
    }

    .form-section wa-divider {
        margin: var(--wa-space-s) 0;
    }

    .form-section wa-slider {
        --track-height: 4px;
    }

    .help-text {
        margin: 0;
        font-size: 0.75rem;
        color: var(--wa-color-text-quiet);
    }

    .form-section wa-textarea {
        --height: auto;
    }
`;
