import {
    registerIconLibrary
} from "@awesome.me/webawesome/dist/webawesome.loader.js";

registerIconLibrary('fg', {
    resolver: (name, _family, _variant) => {
        return import.meta.resolve(`${import.meta.env.VITE_BASE_PATH || ""}/icon-libs/font-gis.svg`) + `#fg-${name}`
    },
    mutator: svg => {
        svg.setAttribute('fill', 'currentColor')
        svg.setAttribute('width', '16')
        svg.setAttribute('height', '16')
    },
    spriteSheet: true
})