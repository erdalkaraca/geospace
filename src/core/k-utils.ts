import {html, nothing} from "lit";
import {registerIconLibrary} from '@awesome.me/webawesome'

registerIconLibrary('k', {
    resolver: (name: string) => {
        return new URL(`../icons/${name}.svg`, import.meta.url).href;
    },
    mutator: (svg: SVGElement) => {
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('stroke', 'currentColor');
    }
});

export const icon = (name?: string, label?: string, family?: string, variant?: string) => {
    if (!name) {
        return ""
    }
    const parts = name.trim().split(/ +/)
    const iconName = parts.pop()
    const library = parts.pop()
    return html`
        <wa-icon library="${library || nothing}" variant="${variant || nothing}"
                     family="${family || nothing}" name=${iconName} label="${label || name || nothing}"></wa-icon>`
}