import {LitElement, PropertyValues} from "lit";
import {subscribe as event_subscribe} from "../core/events.ts";
import {toastError, toastInfo} from "../core/toast.ts";
import {commandRegistry, ExecuteParams} from "../core/commandregistry.ts";
import {Signal} from "@lit-labs/signals";
import {watchSignal} from "../core/signals.ts";

Object.defineProperty(LitElement.prototype, "model", {
    enumerable: true,
    configurable: true,
    writable: true
});

export abstract class KWidget extends LitElement {
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
        Object.getOwnPropertyNames(proto).forEach((prop) => {
            const propValue = proto[prop];
            if (propValue instanceof Function) {
                const func = propValue
                if (func.name.startsWith("on") && "signal" in func) {
                    this.watch(func.signal, func)
                }
            }
        })
        super.connectedCallback();
        this.doBeforeUI()
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
        const execContext = commandRegistry.createExecutionContext(this, params);
        commandRegistry.execute(command, execContext);
    }

    protected watch(signal: Signal.State<any>, callback: (value: any) => void) {
        watchSignal(signal, callback.bind(this));
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
