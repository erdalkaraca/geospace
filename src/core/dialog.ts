import { html, render, TemplateResult } from "lit";
import { uiContext } from "./di.ts";

// Singleton dialog container to prevent DOM memory leaks
let dialogContainer: HTMLElement | null = null;

function getDialogContainer(): HTMLElement {
    if (!dialogContainer) {
        dialogContainer = document.createElement('div');
        dialogContainer.id = 'global-dialog-container';
        document.body.appendChild(dialogContainer);
    }
    return dialogContainer;
}

interface DialogConfig<T> {
    title: string;
    message: string;
    confirmValue: T;
    cancelValue: T;
    renderContent: (handlers: {
        onConfirm: () => void;
        onCancel: () => void;
    }) => TemplateResult;
    onAfterRender?: () => void;
}

/**
 * Generic dialog function that handles the common dialog logic
 */
function showDialog<T>(config: DialogConfig<T>): Promise<T> {
    return new Promise((resolve) => {
        const container = getDialogContainer();

        const cleanup = () => {
            render(html``, container);
        };

        const handleConfirm = () => {
            cleanup();
            resolve(config.confirmValue);
        };

        const handleCancel = () => {
            cleanup();
            resolve(config.cancelValue);
        };

        const template = html`
            <wa-dialog label="${config.title}" open @wa-request-close=${handleCancel}>
                <style>
                    .dialog-content {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        padding: 1rem;
                        min-width: 400px;
                    }
                    
                    .dialog-message {
                        margin-bottom: 0.5rem;
                        color: var(--wa-color-neutral-700);
                    }
                    
                    .dialog-actions {
                        display: flex;
                        gap: 0.5rem;
                        justify-content: flex-end;
                        margin-top: 0.5rem;
                    }
                </style>
                
                <div class="dialog-content">
                    ${config.renderContent({ onConfirm: handleConfirm, onCancel: handleCancel })}
                </div>
            </wa-dialog>
        `;

        render(template, container);

        if (config.onAfterRender) {
            requestAnimationFrame(config.onAfterRender);
        }
    });
}

/**
 * Shows a dialog for text input
 * Returns a promise that resolves with the input value or null if canceled
 */
export const promptDialog = async (message: string, defaultValue: string = ''): Promise<string | null> => {
    let inputValue = defaultValue;

    return showDialog({
        title: "Input",
        message,
        confirmValue: inputValue,
        cancelValue: null,
        renderContent: ({ onConfirm, onCancel }) => {
            const handleInput = (e: Event) => {
                inputValue = (e.target as any).value;
            };

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    onConfirm();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    onCancel();
                }
            };

            return html`
                <div class="dialog-message">${message}</div>
                <wa-input
                    value="${defaultValue}"
                    @input=${handleInput}
                    @keydown=${handleKeyDown}
                    autofocus
                ></wa-input>
                
                <div class="dialog-actions">
                    <wa-button variant="default" @click=${onCancel}>
                        Cancel
                    </wa-button>
                    <wa-button variant="primary" @click=${() => {
                        // Update confirmValue with current input
                        onConfirm();
                    }}>
                        OK
                    </wa-button>
                </div>
            `;
        },
        onAfterRender: () => {
            const container = getDialogContainer();
            const input = container.querySelector('wa-input');
            if (input) {
                const inputEl = (input as any).shadowRoot?.querySelector('input');
                if (inputEl) {
                    inputEl.focus();
                    inputEl.select();
                }
            }
        }
    }).then(() => inputValue);
};

/**
 * Shows a confirmation dialog
 * Returns a promise that resolves with true if confirmed, false if canceled
 */
export const confirmDialog = async (message: string): Promise<boolean> => {
    return showDialog({
        title: "Confirm",
        message,
        confirmValue: true,
        cancelValue: false,
        renderContent: ({ onConfirm, onCancel }) => html`
            <div class="dialog-message">${message}</div>
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${onCancel}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${onConfirm}>
                    OK
                </wa-button>
            </div>
        `
    });
};

uiContext.put("promptDialog", promptDialog);
uiContext.put("confirmDialog", confirmDialog);

