import {customElement} from "lit/decorators.js";
import {KElement} from "../../parts/k-element";
import {html} from "lit";

@customElement('k-memory-usage')
export class KMemoryUsage extends KElement {
    
    private updateInterval: number | null = null;

    connectedCallback() {
        super.connectedCallback();
        this.updateInterval = window.setInterval(() => {
            this.requestUpdate();
        }, 2000);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.updateInterval !== null) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    protected render() {
        const memory = (performance as any).memory;
        if (!memory) {
            return html``;
        }
        
        const usedMB = (memory.usedJSHeapSize / 1048576).toFixed(1);
        const limitMB = (memory.jsHeapSizeLimit / 1048576).toFixed(0);
        const percentageNum = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
        const percentage = percentageNum.toFixed(0);
        
        const barColor = percentageNum > 80 ? '#ff4444' : percentageNum > 60 ? '#ffaa00' : '#44aa44';
        
        return html`
            <span style="display: inline-flex; align-items: center; justify-content: center; height: 100%; padding-left: 0.5rem; gap: 0.25rem; font-size: 0.85em; color: var(--wa-color-neutral-text);" title="Main thread memory consumption only (excludes web workers)">
                <wa-icon name="microchip" label="Memory usage"></wa-icon>
                <span style="display: flex; align-items: center; gap: 0.25rem;">
                    <span>${usedMB} / ${limitMB} MB</span>
                    <span style="position: relative; display: inline-block; width: 60px; height: 14px; vertical-align: middle;">
                        <span style="display: block; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); border-radius: 4px;"></span>
                        <span style="display: block; position: absolute; width: ${percentage}%; height: 100%; background: ${barColor}; border-radius: 4px; transition: width 0.3s ease;"></span>
                        <span style="position: absolute; width: 100%; text-align: center; font-size: 0.7em; line-height: 14px; font-weight: 600; color: white; text-shadow: 0 0 2px rgba(0,0,0,0.8);">${percentage}%</span>
                    </span>
                </span>
            </span>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-memory-usage': KMemoryUsage
    }
}

