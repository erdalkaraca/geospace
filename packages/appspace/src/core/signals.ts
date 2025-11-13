import {Signal} from "@lit-labs/signals";

export const watchSignal = (signal: Signal.State<any> | Signal.Computed<any>, callback: (value: any) => void): (() => void) => {
    const signalToWatch = signal as Signal.State<any>;
    const watcher = new Signal.subtle.Watcher(async () => {
        try {
            await 0;
            callback(signalToWatch.get());
        } finally {
            watcher.watch(signalToWatch);
        }
    });
    watcher.watch(signalToWatch);
    
    return () => {
        watcher.unwatch(signalToWatch);
    };
}
