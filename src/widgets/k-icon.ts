import {html, nothing} from 'lit'
import {customElement, property} from 'lit/decorators.js'

import {KWidget} from "./k-widget.ts";

@customElement('k-icon')
export class KIcon extends KWidget {

    @property()
    private name?: string;

    @property()
    private family?: string = "regular";

    @property()
    private variant?: string;

    render() {
        const parts = this.name?.trim().split(" ")
        const name = parts?.pop()
        const library = parts?.pop()
        return html`
            <wa-icon library="${library || nothing}" variant="${this.variant || nothing}"
                     family="${this.family || nothing}" name=${name}></wa-icon>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-icon': KIcon
    }
}
