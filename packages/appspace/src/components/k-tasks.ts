import {contributionRegistry, HTMLContribution} from "../core/contributionregistry";
import {TOOLBAR_BOTTOM_CENTER} from "../core/constants";
import {customElement} from "lit/decorators.js";
import {KPart} from "../parts/k-part";
import {css, html, render} from "lit";
import {activeTasksSignal} from "../core/appstate";
import {taskService, ProgressMonitor} from "../core/taskservice";
import {i18n} from "../core/i18n";

const t = i18n('tasks');

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_CENTER, {
    html: "<k-tasks></k-tasks>"
} as HTMLContribution)

// Singleton dialog container for progress dialog
let progressDialogContainer: HTMLElement | null = null;

function getProgressDialogContainer(): HTMLElement {
    if (!progressDialogContainer) {
        progressDialogContainer = document.createElement('div');
        progressDialogContainer.id = 'progress-dialog-container';
        document.body.appendChild(progressDialogContainer);
    }
    return progressDialogContainer;
}

function getDialogElement(): any {
    const container = getProgressDialogContainer();
    return container.querySelector('wa-dialog') as any;
}

function showProgressDialog() {
    updateProgressDialog(true);
}

function updateProgressDialog(forceOpen = false) {
    const container = getProgressDialogContainer();
    const tasks = taskService.getActiveTasks();
    const currentTaskCount = tasks.length;
    
    if (currentTaskCount === 0) {
        render(html``, container);
        return;
    }

    // Check if dialog exists and is open (before rendering, since render replaces DOM)
    const existingDialog = getDialogElement();
    const isOpen = forceOpen || (existingDialog?.open === true);

    // Only update dialog if it's open or if we're forcing it open
    // If it was closed (dismissed), don't show it again on progress updates
    if (!isOpen) {
        return;
    }

    const handleClose = () => {
        // Close the dialog - this prevents it from showing again on progress updates
        const dialog = getDialogElement();
        if (dialog) {
            dialog.open = false;
        }
    };

    const handleAfterHide = () => {
        // Clean up after the dialog closes and animations complete
        render(html``, container);
    };

    const template = html`
        <wa-dialog 
            label="${t('ACTIVE_TASKS')}" 
            open
            light-dismiss
            style="--width: 600px;"
            @wa-request-close=${handleClose}
            @wa-after-hide=${handleAfterHide}
        >
            <style>
                .progress-dialog-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .task-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: var(--wa-color-neutral-10);
                    border-radius: 8px;
                    border: 1px solid var(--wa-color-neutral-20);
                }
                
                :host-context(.wa-light) .task-item {
                    background: var(--wa-color-neutral-95);
                    border: 1px solid var(--wa-color-neutral-85);
                }
                
                .task-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .task-name {
                    font-weight: 600;
                    font-size: 1rem;
                    color: var(--wa-color-neutral-90);
                }
                
                :host-context(.wa-light) .task-name {
                    color: var(--wa-color-neutral-10);
                }
                
                .task-message {
                    font-size: 0.875rem;
                    color: var(--wa-color-neutral-70);
                    margin-top: 0.25rem;
                }
                
                :host-context(.wa-light) .task-message {
                    color: var(--wa-color-neutral-30);
                }
                
                .task-progress {
                    margin-top: 0.5rem;
                }
                
                wa-progress-bar {
                    --track-height: 1.5rem;
                }
                
                wa-progress-bar::part(label) {
                    text-align: center;
                    width: 100%;
                    font-size: 0.875rem;
                }
                
                .no-tasks {
                    text-align: center;
                    padding: 2rem;
                    color: var(--wa-color-neutral-60);
                }
                
                :host-context(.wa-light) .no-tasks {
                    color: var(--wa-color-neutral-40);
                }
            </style>
            
            <div class="progress-dialog-content">
                ${tasks.map((taskProgress: ProgressMonitor) => {
                    const hasProgress = taskProgress.progress >= 0 || taskProgress.totalSteps > 0
                    const progress = taskProgress.progress >= 0
                        ? taskProgress.progress
                        : (taskProgress.totalSteps > 0 
                            ? Math.round((taskProgress.currentStep / taskProgress.totalSteps) * 100)
                            : 0)
                    
                    const showSteps = taskProgress.progress < 0 && taskProgress.totalSteps > 0
                    
                    return html`
                        <div class="task-item">
                            <div class="task-header">
                                <wa-icon name="hourglass" style="color: var(--wa-color-warning-fill-loud);"></wa-icon>
                                <div style="flex: 1;">
                                    <div class="task-name">${taskProgress.name}</div>
                                    ${taskProgress.message ? html`
                                        <div class="task-message">${taskProgress.message}</div>
                                    ` : ''}
                                </div>
                            </div>
                            <div class="task-progress">
                                ${hasProgress ? html`
                                    <wa-progress-bar value="${progress}">
                                        ${showSteps ? `${taskProgress.currentStep}/${taskProgress.totalSteps} - ` : ''}${progress}%
                                    </wa-progress-bar>
                                ` : html`
                                    <wa-progress-bar indeterminate></wa-progress-bar>
                                `}
                            </div>
                        </div>
                    `
                })}
            </div>
        </wa-dialog>
    `;

    render(template, container);
}

@customElement('k-tasks')
export class KTasks extends KPart {
    static styles = css`
        :host {
            display: flex;
            align-items: center;
        }
        
        .task-indicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .task-indicator:hover {
            background: var(--wa-color-neutral-15);
        }
        
        :host-context(.wa-light) .task-indicator:hover {
            background: var(--wa-color-neutral-85);
        }
        
        .task-count {
            font-size: 0.875rem;
            color: var(--wa-color-neutral-70);
        }
        
        :host-context(.wa-light) .task-count {
            color: var(--wa-color-neutral-30);
        }
    `

    protected doBeforeUI() {
        this.watch(activeTasksSignal, () => {
            // Update dialog content if it's open, and always update the indicator
            updateProgressDialog();
            this.requestUpdate();
        });
    }

    private handleIndicatorClick() {
        // Show the dialog when clicking the hourglass
        showProgressDialog();
    }

    protected render() {
        activeTasksSignal.get()
        const tasks = taskService.getActiveTasks();
        const taskCount = tasks.length;
        
        if (taskCount === 0) {
            return html``;
        }
        
        return html`
            <div class="task-indicator" @click=${this.handleIndicatorClick} title="${t('ACTIVE_TASKS_TITLE', { taskCount: taskCount.toString() })}">
                <wa-spinner 
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);" 
                    label="${t('ACTIVE_TASKS')}"
                ></wa-spinner>
                <span class="task-count">${taskCount}</span>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-tasks': KTasks
    }
}