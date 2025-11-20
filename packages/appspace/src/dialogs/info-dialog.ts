import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { KDialogContent } from "../parts/k-dialog-content";
import { contributionRegistry } from "../core/contributionregistry";
import { DIALOG_CONTRIBUTION_TARGET, OK_BUTTON, DialogContribution, dialogService } from "../core/dialogservice";

@customElement('k-info-dialog-content')
export class KInfoDialogContent extends KDialogContent {
    @property({ type: String })
    message: string = '';

    @property({ type: Boolean })
    markdown: boolean = false;

    render() {
        return html`
            ${this.renderMessage(this.message, this.markdown)}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-info-dialog-content': KInfoDialogContent;
    }
}

contributionRegistry.registerContribution(DIALOG_CONTRIBUTION_TARGET, {
    id: 'info',
    label: 'Information',
    buttons: [OK_BUTTON],
    component: (state?: any) => {
        if (!state) {
            return html`<div>Error: No info dialog state</div>`;
        }
        
        return html`
            <k-info-dialog-content 
                .message="${state.message}"
                .markdown="${state.markdown}"
            ></k-info-dialog-content>
        `;
    },
    onButton: async (id: string, result: any, state?: any) => {
        if (!state) {
            return true;
        }
        
        if (state.resolve) {
            state.resolve();
        }
        
        return true;
    }
});

export async function infoDialog(title: string, message: string, markdown: boolean = false): Promise<void> {
    return new Promise((resolve) => {
        dialogService.open('info', {
            title,
            message,
            markdown,
            resolve
        });
    });
}

