import {signal} from '@lit-labs/signals';
import {SignalPort} from "./signals.ts";
import {KPart} from "../parts/k-part.ts";

export const EMPTY_SIGNALPORT = {} as SignalPort

export const activePartSignal = signal<KPart>(null as unknown as KPart)
export const activeEditorSignal = signal<KPart>(null as unknown as KPart)

export const partDirtySignal = signal<KPart>(null as unknown as KPart)

export const activeTasksSignal = signal<number>(0)

export const activeSelectionSignal = signal<any>(undefined)