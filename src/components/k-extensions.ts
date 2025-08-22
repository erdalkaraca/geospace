import {css, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import {KPart} from "../parts/k-part.ts";
import {extensionRegistry} from "../core/extensionregistry.ts";
import {icon} from "../core/k-utils.ts";


@customElement('k-extensions')
export class KExtensions extends KPart {

    onExtensionDblClick() {

    }

    render() {
        return html`
            <div>
                <wa-tree style="--indent-guide-width: 1px;">
                    ${extensionRegistry.getExtensions().map(e => html`
                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${e} expanded>
                            <div>${icon(e.icon)} ${e.name} <small><i>${e.description}</i></small></div>
                        </wa-tree-item>`)}
                </wa-tree>
            </div>
        `
    }

    static styles = css`
        :host {
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-extensions': KExtensions
    }
}
