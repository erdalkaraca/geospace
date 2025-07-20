import {Signal} from "@lit-labs/signals";

export interface SignalPort {
    [key: string]: any;
}

export const watchSignal = (signal: Signal.State<any>, callback: (value: any) => void) => {
    const watcher = new Signal.subtle.Watcher(async () => {
        try {
            await 0;
            callback(signal.get());
        } finally {
            watcher.watch();
        }
    });
    watcher.watch(signal);
}

export const watching = (signal: Signal.State<any>) => {
    return function (_target: any, _propertyKey: string, descriptor: any) {
        const originalMethod = descriptor.value;
        originalMethod.signal = signal;
        return descriptor
    }
}