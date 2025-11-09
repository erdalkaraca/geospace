import {toOlMap, Importer} from "./gs-gs2ol";
import {GsMap} from "./gs-model";
import "ol/ol.css";
import {defaults as defaultControls} from 'ol/control/defaults';
import {defaults as defaultInteractions} from "ol/interaction/defaults";
import "@kispace-io/appspace/externals/webawesome";

export * from "./gs-model";
export * from "./gs-gs2ol";

export interface GsAppOptions {
    containerSelector: string | HTMLElement,
    gsMap: GsMap,
    env?: any,
    modules?: any,
    importer?: Importer,
    mapOptions?: {
        controls: any
    }
}

export const gsLib = async (options: GsAppOptions) => {
    const mapOptions = {
        interactions: defaultInteractions({keyboard: false}),
        controls: defaultControls(options.mapOptions?.controls)
    }
    
    let importer: Importer | undefined = options.importer;
    
    if (!importer && options.modules) {
        importer = async (src: string) => {
            const module = options.modules[src];
            if (module) {
                // If module is a string, it's a URL/identifier - import it
                if (typeof module === 'string') {
                    return import(module);
                }
                // If module is already an object, it's the imported module - return it directly
                return module;
            }
            throw new Error(`Module not found: ${src}`);
        };
    }
    
    const olMap = await toOlMap(options.gsMap, mapOptions, options.env, importer)
    
    // Handle both string selector and DOM element
    const target = typeof options.containerSelector === 'string' 
        ? document.querySelector(options.containerSelector)! as HTMLElement
        : options.containerSelector;
    
    olMap.setTarget(target)
    return olMap
}