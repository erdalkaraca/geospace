import {signal} from "@lit-labs/signals";
import {
    SignalPort,
    EMPTY_SIGNALPORT
} from "@kispace/appspace/api";

export enum MapEvents {
    LOADED, LAYER_ADDED, LAYER_DELETED, LAYER_UPDATED, FEATURE_SELECTED
}

export interface FeatureSelection {
    feature: any;
    layerUuid: string;
    metrics?: {
        length?: number;
        area?: number;
    };
}

export const mapChangedSignal = signal<SignalPort>(EMPTY_SIGNALPORT)