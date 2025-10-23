import {html, nothing} from "lit";
import logger from "./logging";
import {registerIconLibrary} from '@awesome.me/webawesome'

export const observeOverflow = (child: HTMLElement) => {
    if (!child) {
        return
    }
    child.style.height = "100%"
    new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    child.style.maxHeight = `${entry.intersectionRect.height}px`;
                } else {
                    child.style.maxHeight = 'none'; // Reset to allow full height
                }
            });
        }).observe(child)
}

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
    logger.debug(`icon: ${name}, ${label}, ${family}, ${variant}`)
    const parts = name.trim().split(/ +/)
    const iconName = parts.pop()
    const library = parts.pop()
    return html`
        <wa-icon library="${library || nothing}" variant="${variant || nothing}"
                     family="${family || nothing}" name=${iconName} label="${label || name || nothing}"></wa-icon>`
}