import {css, html} from 'lit'
import {customElement} from 'lit/decorators.js'

import {KWidget} from "./k-widget.ts";
import {observeOverflow} from "../core/k-utils.ts";
import {createRef, ref} from "lit/directives/ref.js";

@customElement('k-scroller')
export class KScroller extends KWidget {
    private containerRef = createRef<HTMLElement>();

    protected doInitUI() {
        observeOverflow(this.containerRef.value!)
    }

    render() {
        return html`
            <div ${ref(this.containerRef)}>
                <slot></slot>
            </div>
        `
    }

    static styles = css`
        :host {
            overflow: hidden;
        }
        
        .container {
            overflow: auto;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-scroller': KScroller
    }
}
