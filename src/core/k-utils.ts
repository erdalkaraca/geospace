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