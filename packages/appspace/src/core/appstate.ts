import {signal} from '@lit-labs/signals';
import {SignalPort} from "./signals";
import {KPart} from "../parts/k-part";

export const EMPTY_SIGNALPORT = {} as SignalPort

export const activePartSignal = signal<KPart>(null as unknown as KPart)
export const activeEditorSignal = signal<KPart>(null as unknown as KPart)

export const partDirtySignal = signal<KPart>(null as unknown as KPart)

export const activeTasksSignal = signal<number>(0)

export const activeSelectionSignal = signal<any>(undefined)

export const perspectiveSwitchedSignal = signal<{name: string, timestamp: number}>({name: '', timestamp: 0})