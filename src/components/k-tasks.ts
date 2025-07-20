import {contributionRegistry, HTMLContribution} from "../core/contributionregistry.ts";
import {TOOLBAR_MAIN_CENTER} from "../core/constants.ts";
import {customElement} from "lit/decorators.js";
import {KPart} from "../parts/k-part.ts";
import {html} from "lit";
import {activeTasksSignal} from "../core/appstate.ts";
import {SignalWatcher} from "@lit-labs/signals";
import {taskService} from "../core/taskservice.ts";

contributionRegistry.registerContribution(TOOLBAR_MAIN_CENTER, {
    html: "<k-tasks></k-tasks>"
} as HTMLContribution)

@customElement('k-tasks')
export class KTasks extends SignalWatcher(KPart) {

    protected render() {
        if (activeTasksSignal.get() == 0) {
            return;
        }
        return html`
            <wa-dropdown>
                <div slot="trigger" title="Active tasks: ${activeTasksSignal.get()}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                </div>
                ${taskService.getActiveTasks().map(taskProgress => html`
                    <wa-dropdown-item>${taskProgress.name}: ${taskProgress.message}</wa-dropdown-item>
                `)}
            </wa-dropdown>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-tasks': KTasks
    }
}