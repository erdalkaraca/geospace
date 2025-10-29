import { html, render, TemplateResult } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { marked } from "marked";
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
    markdown?: boolean;
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
                    
                    .markdown-content {
                        line-height: 1.6;
                    }
                    
                    .markdown-content h1,
                    .markdown-content h2,
                    .markdown-content h3 {
                        margin-top: 1rem;
                        margin-bottom: 0.5rem;
                        font-weight: 600;
                    }
                    
                    .markdown-content h1 { font-size: 1.5rem; }
                    .markdown-content h2 { font-size: 1.3rem; }
                    .markdown-content h3 { font-size: 1.1rem; }
                    
                    .markdown-content p {
                        margin: 0.5rem 0;
                    }
                    
                    .markdown-content ul,
                    .markdown-content ol {
                        margin: 0.5rem 0;
                        padding-left: 1.5rem;
                    }
                    
                    .markdown-content code {
                        background: var(--wa-color-neutral-100);
                        padding: 0.125rem 0.25rem;
                        border-radius: 3px;
                        font-family: monospace;
                        font-size: 0.9em;
                    }
                    
                    .markdown-content pre {
                        background: var(--wa-color-neutral-100);
                        padding: 0.75rem;
                        border-radius: 4px;
                        overflow-x: auto;
                    }
                    
                    .markdown-content pre code {
                        background: none;
                        padding: 0;
                    }
                    
                    .markdown-content hr {
                        border: none;
                        border-top: 1px solid var(--wa-color-neutral-300);
                        margin: 1rem 0;
                    }
                    
                    .markdown-content blockquote {
                        border-left: 3px solid var(--wa-color-neutral-300);
                        padding-left: 1rem;
                        margin: 0.5rem 0;
                        color: var(--wa-color-neutral-600);
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
 * Renders message content, supporting both plain text and markdown
 */
function renderMessage(message: string, markdown: boolean = false): TemplateResult {
    if (markdown) {
        const htmlContent = marked.parse(message, { async: false }) as string;
        return html`<div class="dialog-message markdown-content" style="white-space: normal;">${unsafeHTML(htmlContent)}</div>`;
    }
    return html`<div class="dialog-message" style="white-space: pre-line;">${message}</div>`;
}

/**
 * Shows a dialog for text input
 * Returns a promise that resolves with the input value or null if canceled
 */
export const promptDialog = async (message: string, defaultValue: string = '', markdown: boolean = false): Promise<string | null> => {
    let inputValue = defaultValue;

    return showDialog({
        title: "Input",
        message,
        markdown,
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
                ${renderMessage(message, markdown)}
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
export const confirmDialog = async (message: string, markdown: boolean = false): Promise<boolean> => {
    return showDialog({
        title: "Confirm",
        message,
        markdown,
        confirmValue: true,
        cancelValue: false,
        renderContent: ({ onConfirm, onCancel }) => html`
            ${renderMessage(message, markdown)}
            
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

/**
 * Shows an info alert dialog
 * Returns a promise that resolves when the dialog is closed
 */
export const infoDialog = async (title: string, message: string, markdown: boolean = false): Promise<void> => {
    await showDialog({
        title,
        message,
        markdown,
        confirmValue: undefined,
        cancelValue: undefined,
        renderContent: ({ onConfirm }) => html`
            ${renderMessage(message, markdown)}
            
            <div class="dialog-actions">
                <wa-button variant="primary" @click=${onConfirm}>
                    OK
                </wa-button>
            </div>
        `
    });
};

export interface NavigableDialogAction {
    label: string;
    variant?: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    disabled?: boolean;
    callback: () => void;
}

/**
 * Shows a navigable info dialog with custom action buttons
 * The dialog stays open until explicitly closed, allowing for navigation
 */
export const navigableInfoDialog = async (
    title: string,
    message: string,
    actions: NavigableDialogAction[],
    markdown: boolean = false
): Promise<void> => {
    return new Promise((resolve) => {
        const container = getDialogContainer();
        let isOpen = true;

        const cleanup = () => {
            if (!isOpen) return;
            isOpen = false;
            render(html``, container);
            resolve();
        };

        const updateDialog = (newTitle: string, newMessage: string, newActions: NavigableDialogAction[]) => {
            if (!isOpen) return;
            
            const template = html`
                <wa-dialog label="${newTitle}" open @wa-request-close=${cleanup}>
                    <style>
                        .dialog-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 400px;
                            max-width: 600px;
                            height: 500px;
                        }
                        
                        .dialog-scroller {
                            flex: 1;
                            overflow-y: auto;
                        }
                        
                        .dialog-message {
                            margin-bottom: 0.5rem;
                            color: var(--wa-color-neutral-700);
                        }
                        
                        .markdown-content {
                            line-height: 1.6;
                        }
                        
                        .markdown-content h1,
                        .markdown-content h2,
                        .markdown-content h3 {
                            margin-top: 1rem;
                            margin-bottom: 0.5rem;
                            font-weight: 600;
                        }
                        
                        .markdown-content h1 { font-size: 1.5rem; }
                        .markdown-content h2 { font-size: 1.3rem; }
                        .markdown-content h3 { font-size: 1.1rem; }
                        
                        .markdown-content p {
                            margin: 0.5rem 0;
                        }
                        
                        .markdown-content ul,
                        .markdown-content ol {
                            margin: 0.5rem 0;
                            padding-left: 1.5rem;
                        }
                        
                        .markdown-content code {
                            background: var(--wa-color-neutral-100);
                            padding: 0.125rem 0.25rem;
                            border-radius: 3px;
                            font-family: monospace;
                            font-size: 0.9em;
                        }
                        
                        .markdown-content pre {
                            background: var(--wa-color-neutral-100);
                            padding: 0.75rem;
                            border-radius: 4px;
                            overflow-x: auto;
                        }
                        
                        .markdown-content pre code {
                            background: none;
                            padding: 0;
                        }
                        
                        .markdown-content hr {
                            border: none;
                            border-top: 1px solid var(--wa-color-neutral-300);
                            margin: 1rem 0;
                        }
                        
                        .markdown-content blockquote {
                            border-left: 3px solid var(--wa-color-neutral-300);
                            padding-left: 1rem;
                            margin: 0.5rem 0;
                            color: var(--wa-color-neutral-600);
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
                    </style>
                    
                    <div class="dialog-content">
                        <wa-scroller class="dialog-scroller">
                            ${renderMessage(newMessage, markdown)}
                        </wa-scroller>
                        
                        <div class="dialog-actions">
                            <div class="dialog-actions-left">
                                ${newActions.filter(a => a.label !== 'Close').map(action => html`
                                    <wa-button 
                                        variant="${action.variant || 'default'}"
                                        ?disabled=${action.disabled}
                                        @click=${() => {
                                            action.callback();
                                        }}
                                    >
                                        ${action.label}
                                    </wa-button>
                                `)}
                            </div>
                            <div class="dialog-actions-right">
                                ${newActions.filter(a => a.label === 'Close').map(action => html`
                                    <wa-button 
                                        variant="${action.variant || 'primary'}"
                                        @click=${() => {
                                            action.callback();
                                            cleanup();
                                        }}
                                    >
                                        ${action.label}
                                    </wa-button>
                                `)}
                            </div>
                        </div>
                    </div>
                </wa-dialog>
            `;
            
            render(template, container);
        };

        // Expose updateDialog for actions to use
        (actions as any).updateDialog = updateDialog;
        
        updateDialog(title, message, actions);
    });
};

uiContext.put("promptDialog", promptDialog);
uiContext.put("confirmDialog", confirmDialog);
uiContext.put("infoDialog", infoDialog);
uiContext.put("navigableInfoDialog", navigableInfoDialog);

