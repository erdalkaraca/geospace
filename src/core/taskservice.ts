import {activeTasksSignal} from "./appstate";
import {rootContext} from "./di";

export interface ProgressMonitor {
    name: string
    message: string
    currentStep: number
    totalSteps: number
    progress: number  // Manual progress percentage (0-100), overrides step-based calculation if >= 0
}

export type Task = (progressMonitor: ProgressMonitor) => any
export type AsyncTask = (progressMonitor: ProgressMonitor) => Promise<any>

export class TaskService {
    private tasks: ProgressMonitor[] = []
    private updateCounter = 0

    private notifyUpdate() {
        // Always increment counter to ensure signal value changes and triggers re-render
        this.updateCounter++
        activeTasksSignal.set(this.updateCounter)
    }

    public run(name: string, task: Task) {
        const progressMonitor = this.createProgressMonitor(name)
        try {
            this.tasks.push(progressMonitor)
            this.notifyUpdate()
            task(progressMonitor)
        } finally {
            this.tasks.splice(this.tasks.indexOf(progressMonitor), 1)
            this.notifyUpdate()
        }
    }

    public async runAsync(name: string, task: AsyncTask) {
        const progressMonitor = this.createProgressMonitor(name)
        this.tasks.push(progressMonitor)
        this.notifyUpdate()
        return task(progressMonitor).finally(() => {
            this.tasks.splice(this.tasks.indexOf(progressMonitor), 1)
            this.notifyUpdate()
        })
    }

    private createProgressMonitor(name: string): ProgressMonitor {
        const monitor = {
            name: name,
            message: "",
            currentStep: 0,
            totalSteps: -1,  // -1 indicates indefinite progress
            progress: -1  // -1 means use step-based calculation
        } as ProgressMonitor
        
        // Create a proxy to detect property changes and trigger UI updates
        return new Proxy(monitor, {
            set: (target, prop, value) => {
                (target as any)[prop] = value
                this.notifyUpdate()
                return true
            }
        })
    }

    getActiveTasks() {
        return this.tasks
    }
}

export const taskService = new TaskService()
rootContext.put("taskService", taskService)