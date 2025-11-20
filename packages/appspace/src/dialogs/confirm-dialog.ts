import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { KDialogContent } from "../parts/k-dialog-content";
import { contributionRegistry } from "../core/contributionregistry";
import { DIALOG_CONTRIBUTION_TARGET, OK_BUTTON, CANCEL_BUTTON, DialogContribution, dialogService } from "../core/dialogservice";

@customElement('k-confirm-dialog-content')
export class KConfirmDialogContent extends KDialogContent {
    @property({ type: String })
    message: string = '';

    @property({ type: Boolean })
    markdown: boolean = false;

    getResult(): boolean {
        return false;
    }

    render() {
        return html`
            ${this.renderMessage(this.message, this.markdown)}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-confirm-dialog-content': KConfirmDialogContent;
    }
}

contributionRegistry.registerContribution(DIALOG_CONTRIBUTION_TARGET, {
    id: 'confirm',
    label: 'Confirm',
    buttons: [OK_BUTTON, CANCEL_BUTTON],
    component: (state?: any) => {
        if (!state) {
            return html`<div>Error: No confirm dialog state</div>`;
        }
        
        return html`
            <k-confirm-dialog-content 
                .message="${state.message}"
                .markdown="${state.markdown}"
            ></k-confirm-dialog-content>
        `;
    },
    onButton: async (id: string, result: any, state?: any) => {
        if (!state) {
            return true;
        }
        
        if (id === 'ok') {
            state.resolve(true);
        } else {
            state.resolve(false);
        }
        
        return true;
    }
});

export async function confirmDialog(message: string, markdown: boolean = false): Promise<boolean> {
    return new Promise((resolve) => {
        dialogService.open('confirm', {
            message,
            markdown,
            resolve
        });
    });
}

