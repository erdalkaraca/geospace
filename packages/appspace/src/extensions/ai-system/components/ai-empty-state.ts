import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ai-empty-state')
export class AIEmptyState extends LitElement {
    @property({ type: String })
    public message: string = 'No AI provider configured';

    @property({ type: String })
    public hint: string = 'Click the settings button to configure';

    render() {
        return html`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            color: var(--wa-color-text-quiet);
        }

        .empty-state p {
            margin: 0.5rem 0;
        }

        .empty-state .hint {
            font-size: 0.875rem;
            opacity: 0.7;
        }
    `;
}

