import {File, workspaceService} from "../../core/filesys.ts";
import VectorLayer from "ol/layer/Vector";
import BaseLayer from "ol/layer/Base";
import {GsIcon, GsStyle, GsStylesMap, GsStyleType, KEY_STYLE, KEY_STYLES_PATH, toOlStyle} from "./index.ts";

export class StyleLoader {
    private stylesCache: any = {};
    private resolvingStyle: string[] = []

    public getStyle(styleKey: string) {
        return this.stylesCache[styleKey]
    }

    public async cacheStyle(styleId: string, gsStyle: GsStyle) {
        if (!this.resolvingStyle.includes(styleId) && !(styleId in this.stylesCache)) {
            this.resolvingStyle.push(styleId)
            try {
                // if image, copy it and replace uri with local blob: url
                if (gsStyle.type === GsStyleType.IMAGE) {
                    const gsIcon = gsStyle.resource as GsIcon
                    const resourcePath = gsIcon.src
                    const workspace = await workspaceService.getWorkspace()
                    const res = await workspace!.getResource(resourcePath)
                    if (res instanceof File) {
                        const dataURI = await res.getContents({
                            uri: true
                        })
                        gsStyle = JSON.parse(JSON.stringify(gsStyle));
                        (gsStyle.resource as GsIcon).src = dataURI
                    }
                }
                this.stylesCache[styleId] = toOlStyle(gsStyle)
            } finally {
                const index = this.resolvingStyle.indexOf(styleId)
                this.resolvingStyle.splice(index, 1)
            }
        }
    }

    public async cacheStylesFromPath(stylesPath: string) {
        if (!stylesPath) {
            return
        }
        const workspace = await workspaceService.getWorkspace()
        const stylesResource = await workspace!.getResource(stylesPath) as File
        const content = await stylesResource.getContents() as string
        const stylesMap = JSON.parse(content) as GsStylesMap
        await this.cacheStylesMap(stylesMap)
    }

    public async cacheStylesMap(stylesMap: GsStylesMap) {
        for (const [key, value] of Object.entries(stylesMap)) {
            await this.cacheStyle(key, value)
        }
    }

    bindToLayer(layer: BaseLayer) {
        if (!(layer instanceof VectorLayer)) {
            return
        }

        const stylesPath = layer.get(KEY_STYLES_PATH)
        stylesLoader.cacheStylesFromPath(stylesPath).then()

        const defaultStyle = layer.getStyleFunction()
        layer.setStyle((feature) => {
            const styleEntry = feature.get(KEY_STYLE) || feature.get("id") || feature.getId();
            if (styleEntry) {
                const style = this.stylesCache[styleEntry];
                if (style) {
                    return style
                }
            }

            return defaultStyle ? defaultStyle(feature, 0) : null;
        })
    }
}

export const stylesLoader = new StyleLoader();