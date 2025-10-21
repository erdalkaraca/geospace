import {css, html} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {KElement} from "./k-element.ts";
import {styleMap} from 'lit/directives/style-map.js';
import {
    CommandContribution,
    Contribution,
    contributionRegistry,
    HTMLContribution,
    TOPIC_CONTRIBUTEIONS_CHANGED
} from "../core/contributionregistry.ts";
import {Signal, SignalWatcher} from '@lit-labs/signals';
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {subscribe} from "../core/events.ts";

@customElement('k-toolbar')
export class KToolbar extends SignalWatcher(KElement) {
    @property()
    private position: "start" | "center" | "end" = "start";

    @state()
    private contributions: Contribution[] = [];

    protected doAfterUI() {
        if (this.getAttribute("id")) {
            const id = this.getAttribute("id")!
            this.contributions = contributionRegistry.getContributions(id)
        }
    }

    protected doInitUI() {
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, () => {
            this.requestUpdate()
        })
    }

    contributionCreator(contribution: Contribution) {
        if ("command" in contribution) {
            const commandContribution = contribution as CommandContribution
            return html`
                <wa-button @click=${this.command(commandContribution.command)}
                           title=${commandContribution.label}
                           ?disabled="${(commandContribution.disabled as Signal.Computed<boolean>)?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${commandContribution.icon}></wa-icon>
                </wa-button>
            `
        } else if ("html" in contribution) {
            const contents = (contribution as HTMLContribution).html
            if (contents instanceof Function) {
                return contents()
            }
            return unsafeHTML(contents)
        } else {
            return html`<span>unknown contribution type: ${typeof contribution}</span>`
        }
    }

    render() {
        return html`
            <div class="toolbar-items" style=${styleMap({"justify-content": this.position})}>
                <slot name="start">
                    ${this.contributions.filter(c => c.slot === "start").map(this.contributionCreator.bind(this))}
                </slot>
                ${this.contributions.filter(c => c.slot === undefined).map(this.contributionCreator.bind(this))}
                <slot>
                </slot>
                <slot name="end">
                    ${this.contributions.filter(c => c.slot === "end").map(this.contributionCreator.bind(this))}
                </slot>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-toolbar': KToolbar
    }
}
