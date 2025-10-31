import {contributionRegistry, HTMLContribution} from "../core/contributionregistry";
import {TOOLBAR_BOTTOM_CENTER} from "../core/constants";
import {customElement} from "lit/decorators.js";
import {KPart} from "../parts/k-part";
import {css, html} from "lit";
import {activeTasksSignal} from "../core/appstate";
import {SignalWatcher} from "@lit-labs/signals";
import {taskService} from "../core/taskservice";

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_CENTER, {
    html: "<k-tasks></k-tasks>"
} as HTMLContribution)

@customElement('k-tasks')
export class KTasks extends SignalWatcher(KPart) {

    static styles = css`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `

    protected render() {
        // Trigger re-render when signal changes (ignore the counter value itself)
        activeTasksSignal.get()
        
        const taskCount = taskService.getActiveTasks().length
        if (taskCount == 0) {
            return;
        }
        return html`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${taskCount}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${taskCount}
                </wa-button>
                ${taskService.getActiveTasks().map(taskProgress => {
                    // Use manual progress if set (>= 0), otherwise calculate from steps
                    const hasProgress = taskProgress.progress >= 0 || taskProgress.totalSteps > 0
                    const progress = taskProgress.progress >= 0
                        ? taskProgress.progress
                        : (taskProgress.totalSteps > 0 
                            ? Math.round((taskProgress.currentStep / taskProgress.totalSteps) * 100)
                            : 0)
                    
                    const showSteps = taskProgress.progress < 0 && taskProgress.totalSteps > 0
                    
                    return html`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${taskProgress.name}</strong>: ${taskProgress.message}
                            </div>
                            ${hasProgress ? html`
                                <wa-progress-bar value="${progress}" style="--track-height: 1.25rem;">
                                    ${showSteps ? `${taskProgress.currentStep}/${taskProgress.totalSteps} - ` : ''}${progress}%
                                </wa-progress-bar>
                            ` : html`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `
                })}
            </wa-dropdown>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-tasks': KTasks
    }
}