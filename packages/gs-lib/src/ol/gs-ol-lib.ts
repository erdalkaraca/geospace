import {toOlMap, Importer} from "./gs-gs2ol";
import {GsMap} from "../gs-model";
import "ol/ol.css";
import {defaultControls, defaultInteractions} from "./gs-olns";
// Note: WebAwesome is imported via gs-litns (which is imported by gs-gs2ol), so it's available to user modules

export * from "../gs-model";
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

export const olLib = async (options: GsAppOptions) => {
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
    
    // Handle both string selector and DOM element
    const target = typeof options.containerSelector === 'string' 
        ? document.querySelector(options.containerSelector)! as HTMLElement
        : options.containerSelector;
    
    // Create map and attach to DOM first to ensure immediate rendering
    // Controls and overlays are loaded after the map is visible
    const olMap = await toOlMap(options.gsMap, mapOptions, options.env, importer, target)
    
    return olMap
}

