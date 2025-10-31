import {css, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import {KElement} from "./k-element";

@customElement('k-app')
export class KApp extends KElement {
    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-app': KApp
    }
}
