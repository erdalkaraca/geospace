import {signal} from "@lit-labs/signals";
import {EMPTY_SIGNALPORT} from "@eclipse-docks/core";

export enum MapEvents {
    LOADED, LAYER_ADDED, LAYER_DELETED, LAYER_UPDATED, FEATURE_SELECTED, DRAWING_LAYER_CHANGED
}

export interface FeatureSelection {
    feature: any;
    layerUuid: string;
    metrics?: {
        length?: number;
        area?: number;
    };
}

export const mapChangedSignal = signal<any>(EMPTY_SIGNALPORT);
