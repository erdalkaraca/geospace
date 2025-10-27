import {signal} from "@lit-labs/signals";
import {SignalPort} from "../../core/signals.ts";
import {EMPTY_SIGNALPORT} from "../../core/appstate.ts";

export enum MapEvents {
    LOADED, LAYER_ADDED, LAYER_DELETED, LAYER_UPDATED, FEATURE_SELECTED
}

export interface FeatureSelection {
    feature: any;
    layerIndex: number;
    metrics?: {
        length?: number;
        area?: number;
    };
}

export const mapChangedSignal = signal<SignalPort>(EMPTY_SIGNALPORT)