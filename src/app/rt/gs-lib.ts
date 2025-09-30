import {toOlMap} from "./gs-gs2ol.ts";
import {GsMap} from "./gs-model.ts";
import "../../../node_modules/ol/ol.css";
import {defaults as defaultControls} from 'ol/control/defaults';
import {defaults as defaultInteractions} from "ol/interaction/defaults";
import "../../externals/webawesome.ts"

export * from "./gs-model.ts";
export * from "./gs-gs2ol.ts";
export * from "./gs-style-loader.ts";

export interface GsAppOptions {
    containerSelector: string | HTMLElement,
    gsMap: GsMap,
    env?: any,
    modules?: any
    mapOptions?: {
        controls: any
    }
}

export const gsLib = async (options: GsAppOptions) => {
    const mapOptions = {
        interactions: defaultInteractions({keyboard: false}),
        controls: defaultControls(options.mapOptions?.controls)
    }
    const moduleLoader = options.modules ? async (src: string) => options.modules[src] : undefined
    const olMap = await toOlMap(options.gsMap, mapOptions, options.env, moduleLoader)
    
    // Handle both string selector and DOM element
    const target = typeof options.containerSelector === 'string' 
        ? document.querySelector(options.containerSelector)! as HTMLElement
        : options.containerSelector;
    
    olMap.setTarget(target)
    return olMap
}