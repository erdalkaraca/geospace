import {LitElement, PropertyValues} from "lit";
import {subscribe as event_subscribe} from "../core/events";
import {toastError, toastInfo} from "../core/toast";
import {commandRegistry, ExecuteParams} from "../core/commandregistry";
import {Signal, SignalWatcher} from "@lit-labs/signals";
import {watchSignal} from "../core/signals";

Object.defineProperty(LitElement.prototype, "model", {
    enumerable: true,
    configurable: true,
    writable: true
});

export abstract class KWidget extends SignalWatcher(LitElement) {
    private signalCleanups = new Set<() => void>();

    connectedCallback() {
        const proto = Object.getPrototypeOf(this)

        Object.getOwnPropertyNames(proto).forEach((prop) => {
            const propValue = proto[prop];
            if (propValue instanceof Function) {
                const func = propValue
                if (func.name.startsWith("on") && "topic" in func) {
                    this.subscribe(func.topic, func);
                }
            }
        })
        super.connectedCallback();
        this.doBeforeUI()
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.signalCleanups.forEach(cleanup => cleanup());
        this.signalCleanups.clear();
    }

    protected subscribe(topic: string, callback: Function) {
        event_subscribe(topic, callback.bind(this));
    }

    protected showInfo(msg: string) {
        toastInfo(msg)
    }

    protected showError(msg: string) {
        toastError(msg)
    }

    protected nobubble(wrap: (event: Event) => void) {
        return (event: Event) => {
            event.stopPropagation();
            wrap.bind(this)(event);
        };
    }

    protected command(command: string, state: {} = {}) {
        return () => {
            this.executeCommand(command, state)
        };
    }

    protected executeCommand(command: string, params: ExecuteParams) {
        const execContext = commandRegistry.createExecutionContext(params);
        commandRegistry.execute(command, execContext);
    }

    protected watch(signal: Signal.State<any> | Signal.Computed<any>, callback: (value: any) => void): void {
        const cleanup = watchSignal(signal as Signal.State<any>, callback.bind(this));
        this.signalCleanups.add(cleanup);
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        this.doInitUI()
    }

    protected updateIdle() {
        requestIdleCallback(() => this.requestUpdate())
    }

    public updateLater() {
        requestAnimationFrame(() => this.requestUpdate())
    }

    protected doBeforeUI() {
    }

    protected doInitUI() {
    }

    withRefresh(callback: () => void) {
        callback()
        this.updateLater()
    }
}
