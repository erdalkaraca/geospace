import {html, nothing} from "lit";

export const observeOverflow = (child: HTMLElement) => {
    if (!child) {
        return
    }
    child.style.overflow = "auto"
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

export const icon = (name?: string) => {
    if (!name) {
        return ""
    }
    const parts = name.trim().split(/ +/)
    const iconName = parts.pop()
    const lib = parts.pop()
    return html`
        <wa-icon library="${lib || nothing}" name="${iconName}"></wa-icon>`
}