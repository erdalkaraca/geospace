import {customElement, property} from 'lit/decorators.js'
import {html, nothing, css} from 'lit';

import {KWidget} from "./k-widget";
import "../core/k-utils";

@customElement('k-icon')
export class KIcon extends KWidget {

    @property()
    name?: string;

    @property()
    family?: string = "regular";

    @property()
    variant?: string;

    @property()
    label?: string;

    render() {
        if (!this.name) {
            return ""
        }
        const parts = this.name.trim().split(/ +/)
        const iconName = parts.pop()
        const library = parts.pop()
        return html`
            <wa-icon library="${library || nothing}" variant="${this.variant || nothing}"
                         family="${this.family || nothing}" name=${iconName} label="${this.label || this.name || nothing}"></wa-icon>`
    }

    static styles = css`
        :host {
            display: contents;
        }
    `
}
