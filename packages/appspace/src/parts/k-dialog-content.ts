import { html, TemplateResult, css } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { marked } from "marked";
import { KElement } from "./k-element";

export abstract class KDialogContent extends KElement {
    static styles = [
        css`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `
    ];

    dispose(): void | Promise<void> {
    }

    getResult(): any {
        return undefined;
    }

    protected renderMessage(message: string, markdown: boolean = false): TemplateResult {
        if (markdown) {
            const htmlContent = marked.parse(message, { async: false }) as string;
            return html`<div class="dialog-message" style="white-space: normal;">${unsafeHTML(htmlContent)}</div>`;
        }
        return html`<div class="dialog-message" style="white-space: pre-line;">${message}</div>`;
    }
}

