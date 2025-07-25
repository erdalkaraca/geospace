import '@awesome.me/webawesome/dist/components/animated-image/animated-image.js';
import '@awesome.me/webawesome/dist/components/animation/animation.js';
import '@awesome.me/webawesome/dist/components/avatar/avatar.js';
import '@awesome.me/webawesome/dist/components/badge/badge.js';
import '@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/button-group/button-group.js';
import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/carousel/carousel.js';
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js';
import '@awesome.me/webawesome/dist/components/color-picker/color-picker.js';
import '@awesome.me/webawesome/dist/components/comparison/comparison.js';
import '@awesome.me/webawesome/dist/components/copy-button/copy-button.js';
import '@awesome.me/webawesome/dist/components/details/details.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/divider/divider.js';
import '@awesome.me/webawesome/dist/components/drawer/drawer.js';
import '@awesome.me/webawesome/dist/components/dropdown/dropdown.js';
import '@awesome.me/webawesome/dist/components/format-bytes/format-bytes.js';
import '@awesome.me/webawesome/dist/components/format-date/format-date.js';
import '@awesome.me/webawesome/dist/components/format-number/format-number.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/include/include.js';
import '@awesome.me/webawesome/dist/components/mutation-observer/mutation-observer.js';
import '@awesome.me/webawesome/dist/components/popover/popover.js';
import '@awesome.me/webawesome/dist/components/popup/popup.js';
import '@awesome.me/webawesome/dist/components/progress-bar/progress-bar.js';
import '@awesome.me/webawesome/dist/components/progress-ring/progress-ring.js';
import '@awesome.me/webawesome/dist/components/qr-code/qr-code.js';
import '@awesome.me/webawesome/dist/components/radio-group/radio-group.js';
import '@awesome.me/webawesome/dist/components/rating/rating.js';
import '@awesome.me/webawesome/dist/components/relative-time/relative-time.js';
import '@awesome.me/webawesome/dist/components/resize-observer/resize-observer.js';
import '@awesome.me/webawesome/dist/components/scroller/scroller.js';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/skeleton/skeleton.js';
import '@awesome.me/webawesome/dist/components/slider/slider.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import '@awesome.me/webawesome/dist/components/split-panel/split-panel.js';
import '@awesome.me/webawesome/dist/components/switch/switch.js';
import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/tag/tag.js';
import '@awesome.me/webawesome/dist/components/textarea/textarea.js';
import '@awesome.me/webawesome/dist/components/tooltip/tooltip.js';
import '@awesome.me/webawesome/dist/components/tree/tree.js';
import '@awesome.me/webawesome/dist/components/zoomable-frame/zoomable-frame.js';
import "@awesome.me/webawesome/dist/styles/webawesome.css"

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