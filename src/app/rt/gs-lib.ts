import {toOlMap} from "./gs-gs2ol.ts"
import {GsMap} from "./gs-model.ts";
import "../../../node_modules/ol/ol.css";
import {defaults as defaultControls} from 'ol/control/defaults';
import {defaults as defaultInteractions} from "ol/interaction/defaults";
import "../../externals/webawesome.ts"

export interface GsAppOptions {
    containerSelector: string,
    libPath: string,
    gsMap: GsMap,
    env?: any,
    modules: any
    mapOptions?: {
        controls: any
    }
}

export const gsLib = async (options: GsAppOptions) => {
    const mapOptions = {
        interactions: defaultInteractions({keyboard: false}),
        controls: defaultControls(options.mapOptions?.controls)
    }
    const olMap = await toOlMap(options.gsMap, mapOptions, options.env, async (src: string) => options.modules[src])
    const target = document.querySelector(options.containerSelector)! as HTMLElement
    olMap.setTarget(target)
}