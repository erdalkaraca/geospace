import {css, html, nothing} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {KElement} from "./k-element.ts";
import {
    CommandContribution,
    Contribution,
    ContributionChangeEvent,
    contributionRegistry,
    HTMLContribution,
    TOPIC_CONTRIBUTEIONS_CHANGED
} from "../core/contributionregistry.ts";
import {Signal, SignalWatcher} from '@lit-labs/signals';
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {subscribe} from "../core/events.ts";
import {createRef, ref} from "lit/directives/ref.js";

@customElement('k-contextmenu')
export class KContextMenu extends SignalWatcher(KElement) {
    @property({attribute: false})
    public partContextMenuRenderer?: () => any = undefined;

    @state()
    private contributions: Contribution[] = [];

    @state()
    private isOpen: boolean = false;

    @state()
    private position: { x: number, y: number } = { x: 0, y: 0 };

    private anchorRef = createRef<HTMLElement>();
    private dropdownRef = createRef<HTMLElement>();

    protected doBeforeUI() {
        const id = this.getAttribute("id");
        if (id) {
            this.loadContributions(id);
        }
        
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: ContributionChangeEvent) => {
            if (!id) return;
            
            const wildcardTarget = id.includes(':') ? id.split(':')[0] + ':*' : null;
            if (event.target === id || event.target === wildcardTarget) {
                this.loadContributions(id);
                this.requestUpdate();
            }
        });
    }

    private loadContributions(id: string) {
        const specific = contributionRegistry.getContributions(id);
        
        if (id.includes(':')) {
            const wildcardId = id.split(':')[0] + ':*';
            const wildcard = contributionRegistry.getContributions(wildcardId);
            this.contributions = [...wildcard, ...specific];
        } else {
            this.contributions = specific;
        }
    }

    public show(position: { x: number, y: number }) {
        this.position = position;
        this.isOpen = true;
    }

    private onClose() {
        this.isOpen = false;
    }

    private handleCommandClick(commandId: string, params?: Record<string, any>) {
        return async () => {
            this.executeCommand(commandId, params || {});
        };
    }

    private renderContribution(contribution: Contribution) {
        if ("command" in contribution) {
            const commandContribution = contribution as CommandContribution;
            return html`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(commandContribution.command, commandContribution.params)}
                    ?disabled="${(commandContribution.disabled as Signal.Computed<boolean>)?.get()}">
                    ${commandContribution.icon ? html`<wa-icon slot="icon" name=${commandContribution.icon}></wa-icon>` : ''}
                    ${commandContribution.label}
                </wa-dropdown-item>
            `;
        } else if ("html" in contribution) {
            const contents = (contribution as HTMLContribution).html;
            if (contents instanceof Function) {
                return contents();
            }
            return unsafeHTML(contents);
        }
        return nothing;
    }

    render() {
        if (!this.isOpen) return nothing;

        const partContent = this.partContextMenuRenderer ? this.partContextMenuRenderer() : nothing;

        return html`
            <wa-dropdown 
                ${ref(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${ref(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${partContent}
                ${this.contributions.map(c => this.renderContribution(c))}
            </wa-dropdown>
        `;
    }

    static styles = css`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            pointer-events: none;
            z-index: 10000;
        }

        wa-dropdown {
            pointer-events: auto;
            min-width: 200px;
        }
        
        wa-dropdown::part(panel) {
            min-width: 200px;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-contextmenu': KContextMenu
    }
}

