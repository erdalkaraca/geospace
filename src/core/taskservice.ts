import {activeTasksSignal} from "./appstate.ts";

export interface ProgressMonitor {
    name: string
    message: string
    progress: number
}

export type Task = (progressMonitor: ProgressMonitor) => void
export type AsyncTask = (progressMonitor: ProgressMonitor) => Promise<void>

export class TaskService {
    private tasks: ProgressMonitor[] = []

    public run(name: string, task: Task) {
        const progressMonitor = {
            name: name
        } as ProgressMonitor
        try {
            this.tasks.push(progressMonitor)
            activeTasksSignal.set(this.tasks.length)
            task(progressMonitor)
        } finally {
            this.tasks.splice(this.tasks.indexOf(progressMonitor), 1)
            activeTasksSignal.set(this.tasks.length)
        }
    }

    public runAsync(name: string, task: AsyncTask) {
        const progressMonitor = {
            name: name
        } as ProgressMonitor
        this.tasks.push(progressMonitor)
        activeTasksSignal.set(this.tasks.length)
        return task(progressMonitor).finally(() => {
            this.tasks.splice(this.tasks.indexOf(progressMonitor), 1)
            activeTasksSignal.set(this.tasks.length)
        })
    }

    getActiveTasks() {
        return this.tasks
    }
}

export const taskService = new TaskService()