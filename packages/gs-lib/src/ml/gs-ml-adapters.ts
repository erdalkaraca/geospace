import { Map, Popup, IControl, LngLatLike } from 'maplibre-gl';
import { render as litRender } from "@kispace-io/core/externals/lit";

/**
 * MapLibre Control adapter for user modules
 */
export class GsMlControlAdapter {
    private map: Map;
    private container: HTMLElement;
    private templateFunction?: Function;

    constructor(map: Map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.style.margin = '0';
        this.container.style.padding = '0';
    }

    getMap(): Map {
        return this.map;
    }

    getElement(): HTMLElement {
        return this.container;
    }

    render(strings?: TemplateStringsArray | Function) {
        if (strings === undefined && this.templateFunction) {
            strings = this.templateFunction();
        } else if (strings instanceof Function) {
            this.templateFunction = strings as Function;
            strings = this.templateFunction();
        }
        if (strings) {
            litRender(strings, this.getElement());
        }
    }

    style(styleJson: any) {
        const style = this.getElement().style;
        for (const property in styleJson) {
            const value = styleJson[property];
            style.setProperty(property, value);
        }
    }
}

/**
 * MapLibre IControl wrapper for user modules
 */
export class GsMlControl implements IControl {
    private adapter: GsMlControlAdapter;

    constructor(_position?: string) {
        this.adapter = null as any; // Will be set in onAdd
    }

    onAdd(map: Map): HTMLElement {
        this.adapter = new GsMlControlAdapter(map);
        return this.adapter.getElement();
    }

    onRemove(): void {
        this.adapter.getElement().remove();
    }

    getAdapter(): GsMlControlAdapter {
        return this.adapter;
    }
}

/**
 * MapLibre Overlay adapter using Popup
 */
export class GsMlOverlayAdapter {
    private map: Map;
    private popup: Popup;
    private container: HTMLElement;
    private templateFunction?: Function;

    constructor(map: Map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.style.margin = '0';
        this.container.style.padding = '0';

        this.popup = new Popup({
            closeButton: false,
            closeOnClick: false,
            maxWidth: 'none'
        });
        this.popup.setDOMContent(this.container);
    }

    getMap(): Map {
        return this.map;
    }

    getElement(): HTMLElement {
        return this.container;
    }

    render(strings?: TemplateStringsArray | Function) {
        if (strings === undefined && this.templateFunction) {
            strings = this.templateFunction();
        } else if (strings instanceof Function) {
            this.templateFunction = strings as Function;
            strings = this.templateFunction();
        }
        if (strings) {
            litRender(strings, this.getElement());
        }
    }

    style(styleJson: any) {
        const style = this.getElement().style;
        for (const property in styleJson) {
            const value = styleJson[property];
            style.setProperty(property, value);
        }
    }

    show(coords: number[]) {
        this.getElement().style.display = 'block';
        this.popup.setLngLat([coords[0], coords[1]] as LngLatLike);
        this.popup.addTo(this.map);
    }

    hide() {
        this.getElement().style.display = 'none';
        this.popup.remove();
    }
}

