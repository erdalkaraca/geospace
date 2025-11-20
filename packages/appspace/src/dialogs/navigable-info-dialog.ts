import { html, css, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { KDialogContent } from "../parts/k-dialog-content";
import { contributionRegistry } from "../core/contributionregistry";
import { DIALOG_CONTRIBUTION_TARGET, CLOSE_BUTTON, DialogContribution, dialogService } from "../core/dialogservice";

export interface NavigableDialogAction {
    label: string;
    variant?: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    disabled?: boolean;
    callback: () => void;
}

@customElement('k-navigable-info-dialog-content')
export class KNavigableInfoDialogContent extends KDialogContent {
    @property({ type: String })
    title: string = '';

    @property({ type: String })
    message: string = '';

    @property({ type: Boolean })
    markdown: boolean = false;

    @state()
    actions: NavigableDialogAction[] = [];

    @state()
    private currentTitle: string = '';

    @state()
    private currentMessage: string = '';

    resolveCallback?: () => void;
    private dialogElement: HTMLElement | null = null;

    async firstUpdated(changedProperties: PropertyValues) {
        super.firstUpdated(changedProperties);
        this.currentTitle = this.title;
        this.currentMessage = this.message;
        
        await this.updateComplete;
        const dialog = this.closest('wa-dialog');
        if (dialog) {
            this.dialogElement = dialog as HTMLElement;
            this.updateDialogLabel();
        }
        
        const contentContainer = this.closest('.dialog-service-content');
        if (contentContainer) {
            const footer = contentContainer.parentElement?.querySelector('.dialog-service-footer');
            if (footer) {
                (footer as HTMLElement).style.display = 'none';
            }
        }
    }

    updated(changedProperties: PropertyValues) {
        super.updated(changedProperties);
        if (changedProperties.has('title')) {
            this.currentTitle = this.title;
            this.updateDialogLabel();
        }
        if (changedProperties.has('message')) {
            this.currentMessage = this.message;
        }
    }

    private updateDialogLabel() {
        if (this.dialogElement) {
            this.dialogElement.setAttribute('label', this.currentTitle);
        }
    }

    updateDialog(newTitle: string, newMessage: string, newActions: NavigableDialogAction[]) {
        this.currentTitle = newTitle;
        this.currentMessage = newMessage;
        this.actions = [...newActions];
        this.updateDialogLabel();
        this.requestUpdate();
    }

    private handleActionClick(action: NavigableDialogAction) {
        action.callback();
    }

    private handleClose() {
        const dialog = this.closest('wa-dialog');
        if (dialog && this.resolveCallback) {
            this.resolveCallback();
        }
    }

    static styles = [
        ...KDialogContent.styles,
        css`
            :host {
                display: block;
            }

            :host-context(.dialog-service-content) {
                padding: 0;
            }
            
            .dialog-content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                min-width: 400px;
                max-width: 600px;
                height: 500px;
                padding: 1rem;
            }
            
            .dialog-scroller {
                flex: 1;
                overflow-y: auto;
            }
            
            .dialog-actions {
                display: flex;
                gap: 0.5rem;
                justify-content: space-between;
                margin-top: 0.5rem;
            }
            
            .dialog-actions-left,
            .dialog-actions-right {
                display: flex;
                gap: 0.5rem;
            }
        `
    ];

    render() {
        const leftActions = this.actions.filter(a => a.label !== 'Close');
        const rightActions = this.actions.filter(a => a.label === 'Close');

        return html`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage, this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${leftActions.map(action => html`
                            <wa-button 
                                variant="${action.variant || 'default'}"
                                ?disabled=${action.disabled}
                                @click=${() => this.handleActionClick(action)}
                            >
                                ${action.label}
                            </wa-button>
                        `)}
                    </div>
                    <div class="dialog-actions-right">
                        ${rightActions.map(action => html`
                            <wa-button 
                                variant="${action.variant || 'primary'}"
                                @click=${() => {
                                    this.handleActionClick(action);
                                    this.handleClose();
                                }}
                            >
                                ${action.label}
                            </wa-button>
                        `)}
                    </div>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-navigable-info-dialog-content': KNavigableInfoDialogContent;
    }
}

contributionRegistry.registerContribution(DIALOG_CONTRIBUTION_TARGET, {
    id: 'navigable-info',
    label: 'Information',
    buttons: [CLOSE_BUTTON],
    component: (state?: any) => {
        if (!state) {
            return html`<div>Error: No navigable info dialog state</div>`;
        }
        
        const componentHtml = html`
            <k-navigable-info-dialog-content 
                .title="${state.title}"
                .message="${state.message}"
                .markdown="${state.markdown}"
            ></k-navigable-info-dialog-content>
        `;
        
        (async () => {
            const element = document.querySelector('k-navigable-info-dialog-content') as KNavigableInfoDialogContent;
            if (element) {
                await element.updateComplete;
                element.actions = state.actions || [];
                element.resolveCallback = state.resolve;
                if (state.updateDialogRef) {
                    state.updateDialogRef.current = (newTitle: string, newMessage: string, newActions: NavigableDialogAction[]) => {
                        element.updateDialog(newTitle, newMessage, newActions);
                    };
                }
            }
        })();
        
        return componentHtml;
    },
    onButton: async (id: string, result: any, state?: any) => {
        if (!state) {
            return false;
        }
        
        if (id === 'close' && state.resolve) {
            state.resolve();
            return true;
        }
        
        return false;
    }
});

export async function navigableInfoDialog(
    title: string,
    message: string,
    actions: NavigableDialogAction[],
    markdown: boolean = false
): Promise<void> {
    return new Promise((resolve) => {
        const updateDialogRef: { current?: (title: string, message: string, actions: NavigableDialogAction[]) => void } = {};
        
        dialogService.open('navigable-info', {
            title,
            message,
            actions,
            markdown,
            resolve,
            updateDialogRef
        });

        const updateDialog = (newTitle: string, newMessage: string, newActions: NavigableDialogAction[]) => {
            if (updateDialogRef.current) {
                updateDialogRef.current(newTitle, newMessage, newActions);
            }
        };

        (actions as any).updateDialog = updateDialog;
    });
}

