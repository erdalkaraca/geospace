import {customElement, property, state} from "lit/decorators.js";
import {css, html} from "lit";
import {KElement} from "../parts/k-element.ts";
import {KPerspectives} from "../parts/k-perspectives.ts";
import {PerspectiveContribution, TOPIC_CONTRIBUTEIONS_CHANGED} from "../core/contributionregistry.ts";
import {when} from "lit/directives/when.js";
import {icon} from "../core/k-utils.ts";
import {subscribe} from "../core/events.ts";
import {PERSPECTIVES_MAIN} from "../core/constants.ts";

@customElement('k-perspective-switcher')
export class KPerspectiveSwitcher extends KElement {
    @property({attribute: 'target-id'})
    targetId: string = PERSPECTIVES_MAIN;

    @state()
    private perspectives: PerspectiveContribution[] = [];

    @state()
    private activePerspective: string = "";

    private perspectivesContainer?: KPerspectives;

    protected doAfterUI() {
        this.findPerspectivesContainer();
        this.updatePerspectives();
    }

    protected doInitUI() {
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, () => {
            this.updatePerspectives();
        });
    }

    private findPerspectivesContainer() {
        const container = document.querySelector(`k-perspectives#${this.targetId}`);
        if (container) {
            this.perspectivesContainer = container as KPerspectives;
            
            this.perspectivesContainer.addEventListener('perspective-switched', ((e: CustomEvent) => {
                this.activePerspective = e.detail.name;
                this.requestUpdate();
            }) as EventListener);
        }
    }

    private updatePerspectives() {
        if (!this.perspectivesContainer) {
            this.findPerspectivesContainer();
        }
        
        if (this.perspectivesContainer) {
            this.perspectives = this.perspectivesContainer.getPerspectives();
            this.activePerspective = this.perspectivesContainer.getActivePerspective();
            this.requestUpdate();
        }
    }

    private handlePerspectiveClick(perspectiveName: string) {
        if (this.perspectivesContainer) {
            this.perspectivesContainer.switchPerspective(perspectiveName);
        }
    }

    render() {
        if (this.perspectives.length === 0) {
            return html``;
        }

        return html`
            <wa-button-group>
                ${this.perspectives.map(p => html`
                    <wa-button
                        class="perspective-button ${p.name === this.activePerspective ? 'active' : ''}"
                        appearance="plain"
                        size="small"
                        @click="${() => this.handlePerspectiveClick(p.name)}">
                        ${when(p.icon, () => icon(p.icon!))}
                        ${p.label}
                    </wa-button>
                `)}
            </wa-button-group>
        `;
    }

    static styles = css`
        :host {
            display: inline-flex;
            margin: 0 1rem;
        }

        wa-button-group {
            border-left: 1px solid var(--wa-color-neutral-border, #ccc);
            border-right: 1px solid var(--wa-color-neutral-border, #ccc);
            border-top: 1px solid var(--wa-color-neutral-border, #ccc);
            border-radius: 0.5rem;
            overflow: hidden;
        }

        .perspective-button.active::part(base) {
            font-weight: 600;
            background-color: var(--wa-color-primary-fill-subtle, rgba(0, 102, 204, 0.15));
            color: var(--wa-color-primary-text, #0066cc);
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-perspective-switcher': KPerspectiveSwitcher
    }
}

