import {css, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import {KElement} from "./k-element.ts";

@customElement('k-app')
export class KApp extends KElement {
    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = css`
        :host {
            height: 100%;
            width: 100%;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-app': KApp
    }
}
