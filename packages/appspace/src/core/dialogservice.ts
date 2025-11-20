import { html, render, TemplateResult } from "lit";
import { contributionRegistry, Contribution, TOPIC_CONTRIBUTEIONS_CHANGED } from "./contributionregistry";
import { subscribe } from "./events";
import { createLogger } from "./logger";
import { rootContext } from "./di";
import { KDialogContent } from "../parts/k-dialog-content";

const logger = createLogger('DialogService');

export const DIALOG_CONTRIBUTION_TARGET = "dialogs";

export interface DialogButton {
    id: string;
    label: string;
    variant?: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    disabled?: boolean;
}

export const OK_BUTTON: DialogButton = {
    id: 'ok',
    label: 'OK',
    variant: 'primary'
};

export const CANCEL_BUTTON: DialogButton = {
    id: 'cancel',
    label: 'Cancel',
    variant: 'default'
};

export const YES_BUTTON: DialogButton = {
    id: 'yes',
    label: 'Yes',
    variant: 'primary'
};

export const NO_BUTTON: DialogButton = {
    id: 'no',
    label: 'No',
    variant: 'default'
};

export const CLOSE_BUTTON: DialogButton = {
    id: 'close',
    label: 'Close',
    variant: 'default'
};

export const SAVE_BUTTON: DialogButton = {
    id: 'save',
    label: 'Save',
    variant: 'primary'
};

export const DELETE_BUTTON: DialogButton = {
    id: 'delete',
    label: 'Delete',
    variant: 'danger'
};

export interface DialogContribution extends Contribution {
    id: string;
    buttons?: DialogButton[];
    component: (state?: any) => TemplateResult;
    onButton: (id: string, result: any, state?: any) => boolean | Promise<boolean> | void | Promise<void>;
}

let dialogContainer: HTMLElement | null = null;

function getDialogContainer(): HTMLElement {
    if (!dialogContainer) {
        dialogContainer = document.createElement('div');
        dialogContainer.id = 'global-dialog-container';
        document.body.appendChild(dialogContainer);
    }
    return dialogContainer;
}

class DialogService {
    private contributions: Map<string, DialogContribution> = new Map();

    constructor() {
        this.loadContributions();
        
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: any) => {
            if (event.target === DIALOG_CONTRIBUTION_TARGET) {
                this.loadContributions();
            }
        });
    }

    private loadContributions(): void {
        const contributions = contributionRegistry.getContributions<DialogContribution>(DIALOG_CONTRIBUTION_TARGET);
        
        this.contributions.clear();
        
        for (const contribution of contributions) {
            if (!contribution.id) {
                logger.warn('Dialog contribution missing id, skipping');
                continue;
            }


            if (!contribution.component) {
                logger.warn(`Dialog contribution "${contribution.id}" has no component function, skipping`);
                continue;
            }

            if (!contribution.onButton) {
                logger.warn(`Dialog contribution "${contribution.id}" has no onButton callback, skipping`);
                continue;
            }

            this.contributions.set(contribution.id, contribution);
            logger.debug(`Loaded dialog contribution: ${contribution.id}`);
        }

        logger.info(`Loaded ${this.contributions.size} dialog contributions`);
    }

    async open(dialogId: string, state?: any): Promise<void> {
        const contribution = this.contributions.get(dialogId);
        
        if (!contribution) {
            logger.error(`Dialog "${dialogId}" not found`);
            throw new Error(`Dialog "${dialogId}" not found`);
        }

        return new Promise((resolve) => {
            const container = getDialogContainer();
            let isOpen = true;
            let dialogContentElement: KDialogContent | null = null;

            const cleanup = async () => {
                if (!isOpen) return;
                isOpen = false;
                
                if (dialogContentElement) {
                    try {
                        await dialogContentElement.dispose();
                    } catch (error) {
                        const errorMessage = error instanceof Error ? error.message : String(error);
                        logger.error(`Error disposing dialog content for "${dialogId}": ${errorMessage}`);
                    }
                }
                
                try {
                    const result = dialogContentElement ? dialogContentElement.getResult() : undefined;
                    await contribution.onButton('close', result, state);
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    logger.error(`Error executing close callback for dialog "${dialogId}": ${errorMessage}`);
                }
                
                render(html``, container);
                resolve();
            };

            const handleButtonClick = async (buttonId: string) => {
                try {
                    const result = dialogContentElement ? dialogContentElement.getResult() : undefined;
                    const shouldClose = await contribution.onButton(buttonId, result, state);
                    
                    if (shouldClose !== false) {
                        cleanup();
                    }
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    logger.error(`Error executing button callback for dialog "${dialogId}": ${errorMessage}`);
                    cleanup();
                }
            };

            const buttons = contribution.buttons && contribution.buttons.length > 0 
                ? contribution.buttons 
                : [OK_BUTTON];

            const template = html`
                <wa-dialog label="${contribution.label || dialogId}" open @wa-request-close=${cleanup}>
                    <style>
                        .dialog-service-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 400px;
                        }
                        
                        .dialog-service-footer {
                            display: flex;
                            gap: 0.5rem;
                            justify-content: flex-end;
                            margin-top: 1rem;
                            padding-top: 1rem;
                            border-top: 1px solid var(--wa-color-neutral-20);
                        }

                        :host-context(.wa-light) .dialog-service-footer {
                            border-top-color: var(--wa-color-neutral-80);
                        }
                    </style>
                    
                    <div class="dialog-service-content" 
                         @dialog-ok=${() => {
                             const okButton = buttons.find(b => b.id === 'ok');
                             if (okButton) {
                                 handleButtonClick(okButton.id);
                             }
                         }}
                         @dialog-cancel=${() => {
                             const cancelButton = buttons.find(b => b.id === 'cancel');
                             if (cancelButton) {
                                 handleButtonClick(cancelButton.id);
                             } else {
                                 cleanup();
                             }
                         }}>
                        ${contribution.component(state)}
                        
                        <div class="dialog-service-footer">
                            ${buttons.map(button => html`
                                <wa-button 
                                    variant="${button.variant || 'default'}"
                                    ?disabled=${button.disabled}
                                    @click=${() => handleButtonClick(button.id)}
                                >
                                    ${button.label}
                                </wa-button>
                            `)}
                        </div>
                    </div>
                </wa-dialog>
            `;

            render(template, container);
            
            (async () => {
                const allElements = Array.from(container.querySelectorAll('*'));
                for (const element of allElements) {
                    if (element instanceof KDialogContent) {
                        await element.updateComplete;
                        dialogContentElement = element;
                        break;
                    }
                }
            })();
        });
    }

    getDialogIds(): string[] {
        return Array.from(this.contributions.keys());
    }

    hasDialog(dialogId: string): boolean {
        return this.contributions.has(dialogId);
    }
}

export const dialogService = new DialogService();
rootContext.put("dialogService", dialogService);

