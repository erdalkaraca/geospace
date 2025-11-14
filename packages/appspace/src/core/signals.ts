import {Signal} from "@lit-labs/signals";

export const watchSignal = (signal: Signal.State<any> | Signal.Computed<any>, callback: (value: any) => void): (() => void) => {
    const watcher = new Signal.subtle.Watcher(async () => {
        try {
            await 0;
            callback(signal.get());
        } finally {
            watcher.watch(signal);
        }
    });
    watcher.watch(signal);
    signal.get();
    
    return () => {
        watcher.unwatch(signal);
    };
}
