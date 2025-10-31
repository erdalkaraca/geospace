import {Map} from "ol";
import {GsOlControl, GsOlOverlay} from "./gs-gs2ol";
import {render as litRender} from "lit";

export class GsOlAdapter<T extends GsOlControl | GsOlOverlay> {
    protected map: Map;
    protected olObject: T;

    private templateFunction?: Function;
    protected retargetSelector?: string;

    constructor(olObject: T) {
        this.map = olObject.getMap()!
        this.olObject = olObject
    }

    public getMap(): any {
        return this.map;
    }

    public getElement() {
        return this.olObject.getElement();
    }

    public render(strings?: TemplateStringsArray | Function) {
        if (strings === undefined && this.templateFunction) {
            strings = this.templateFunction()
        } else if (strings instanceof Function) {
            this.templateFunction = strings as Function
            strings = this.templateFunction()
        }
        if (strings) {
            litRender(strings, this.getElement())
        }
    }

    protected onRendered() {
    }

    public style(styleJson: any) {
        const style = this.getElement().style
        for (const property in styleJson) {
            const value = styleJson[property]
            style.setProperty(property, value);
        }
    }
}

export class GsControlAdapter extends GsOlAdapter<GsOlControl> {
    public style(styleJson: any) {
        super.style(styleJson)

        if ("--gs-contribution" in styleJson) {
            this.retargetSelector = styleJson["--gs-contribution"]
        }
    }

    public rendered() {
        if (this.retargetSelector) {
            const [parentPath, queryString] = this.retargetSelector.split("?");
            const parent = this.map.getTargetElement().querySelector(parentPath) as HTMLElement
            if (parent) {
                const element = this.olObject.getElement()
                if (queryString) {
                    const params = new URLSearchParams(queryString);
                    const sibling = parent.querySelector(`[name='${params.get("before")}']`) as HTMLElement
                    if (sibling) {
                        parent.insertBefore(element, sibling)
                    }
                } else {
                    parent.appendChild(element)
                }
                this.olObject.setTarget(element);
                this.render()
            }
        }
    }
}

export class GsOverlayAdapter extends GsOlAdapter<GsOlOverlay> {
    public show(coords: number[]) {
        this.getElement().style.display = "block"
        this.olObject.setPosition(coords)
    }

    public hide() {
        this.getElement().style.display = "none"
    }
}