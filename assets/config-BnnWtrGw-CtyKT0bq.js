import{i as k,a as ja,n as c,f as y,r as w,t as v,h as et,b as p,l as Il,j as _l,k as $,m as z,q as Fr,u as Di,_ as Jt,o as Ke,v as Ol,w as lt,g as Pl,x as xi,y as Fl,S as yn,p as O,z as Ml,s as It,D as be,A as at,e as ni,c as li,d as Nl}from"./repeat-Duk-1tMZ.js";var eo=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var Ka=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};function x(t,e){const i={waitUntilFirstUpdate:!1,...e};return(o,r)=>{const{update:a}=o,s=Array.isArray(t)?t:[t];o.update=function(l){s.forEach(d=>{const h=d;if(l.has(h)){const u=l.get(h),f=this[h];u!==f&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,f)}}),a.call(this,l)}}}const Sa=new Set,Ji=new Map;let Li,Ga="ltr",Xa="en";const xn=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(xn){const t=new MutationObserver(Cn);Ga=document.documentElement.dir||"ltr",Xa=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function kn(...t){t.map(e=>{const i=e.$code.toLowerCase();Ji.has(i)?Ji.set(i,Object.assign(Object.assign({},Ji.get(i)),e)):Ji.set(i,e),Li||(Li=e)}),Cn()}function Cn(){xn&&(Ga=document.documentElement.dir||"ltr",Xa=document.documentElement.lang||navigator.language),[...Sa.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Bl=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Sa.add(this.host)}hostDisconnected(){Sa.delete(this.host)}dir(){return`${this.host.dir||Ga}`.toLowerCase()}lang(){return`${this.host.lang||Xa}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),a=r?.language.toLowerCase(),s=(o=(i=r?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",l=Ji.get(`${a}-${s}`),d=Ji.get(a);return{locale:r,language:a,region:s,primary:l,secondary:d}}exists(e,i){var o;const{primary:r,secondary:a}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||a&&a[e]||i.includeFallback&&Li&&Li[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let a;if(o&&o[e])a=o[e];else if(r&&r[e])a=r[e];else if(Li&&Li[e])a=Li[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...i):a}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var Sn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};kn(Sn);var Vl=Sn;var U=class extends Bl{};kn(Vl);var Ul=k`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: calc(var(--icon-size) * 0.75);
    background: none;
    border: solid var(--wa-border-width-s) currentColor;
    background-color: rgb(0 0 0 / 50%);
    border-radius: var(--wa-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: opacity var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host([play]:hover) .control-box {
      opacity: 1;
    }
  }

  :where(:host([play]:not(:hover))) .control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }

  /* Show control box on keyboard focus */
  .animated-image {
    &:focus {
      outline: none;
    }

    &:focus-visible .control-box {
      opacity: 1;
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }
`;var ql=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,$n=t=>{throw TypeError(t)},n=(t,e,i,o)=>{for(var r=o>1?void 0:o?Hl(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&ql(e,i,r),r},En=(t,e,i)=>e.has(t)||$n("Cannot "+i),Wl=(t,e,i)=>(En(t,e,"read from private field"),e.get(t)),jl=(t,e,i)=>e.has(t)?$n("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Kl=(t,e,i,o)=>(En(t,e,"write to private field"),e.set(t,i),i);var Gl=k`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,dr,A=class extends ja{constructor(){super(),jl(this,dr,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,i)=>{if(this.internals?.states)try{i?this.internals.states.add(e):this.internals.states.delete(e)}catch(o){if(String(o).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw o}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,i]of t.elementProperties)i.default==="inherit"&&i.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${i.initial}`,!0)}static get styles(){const t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Gl,...t]}attributeChangedCallback(t,e,i){Wl(this,dr)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Kl(this,dr,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){const i=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});i.error=e,this.dispatchEvent(i)}throw e}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};dr=new WeakMap;n([c()],A.prototype,"dir",2);n([c()],A.prototype,"lang",2);n([c({type:Boolean,reflect:!0,attribute:"did-ssr"})],A.prototype,"didSSR",2);var we=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.play=!this.play)}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new Ka),this.isLoaded=!0)}handleError(){this.dispatchEvent(new eo)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const e=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return p`
      <div
        class="animated-image"
        tabindex="0"
        role="button"
        aria-pressed=${this.play?"true":"false"}
        aria-label=${e}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <img
          class="animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          role="presentation"
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?p`
              <img
                class="frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                role="presentation"
              />

              <div part="control-box" class="control-box" aria-hidden="true">
                <slot name="play-icon">
                  <wa-icon
                    name="play"
                    library="system"
                    variant="solid"
                    class="default"
                    style=${et({"margin-inline-start":"3px"})}
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};we.css=Ul;n([y(".animated")],we.prototype,"animatedImage",2);n([w()],we.prototype,"frozenFrame",2);n([w()],we.prototype,"isLoaded",2);n([c()],we.prototype,"src",2);n([c()],we.prototype,"alt",2);n([c({type:Boolean,reflect:!0})],we.prototype,"play",2);n([x("play",{waitUntilFirstUpdate:!0})],we.prototype,"handlePlayChange",1);n([x("src")],we.prototype,"handleSrcChange",1);we=n([v("wa-animated-image")],we);var Xl=k`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* Animations */
  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin-pulse;
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  /* Keyframes */
  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']) {
      animation: none !important;
      transition: none !important;
    }
  }
  @keyframes beat {
    0%,
    90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--beat-scale, 1.25));
    }
  }

  @keyframes fade {
    50% {
      opacity: var(--fade-opacity, 0.4);
    }
  }

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.125));
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(var(--bounce-start-scale-x, 1.1), var(--bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      transform: scale(var(--bounce-jump-scale-x, 0.9), var(--bounce-jump-scale-y, 1.1))
        translateY(var(--bounce-height, -0.5em));
    }
    50% {
      transform: scale(var(--bounce-land-scale-x, 1.05), var(--bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--bounce-rebound, -0.125em));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes flip {
    50% {
      transform: rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -180deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(-15deg);
    }
    4% {
      transform: rotate(15deg);
    }
    8%,
    24% {
      transform: rotate(-18deg);
    }
    12%,
    28% {
      transform: rotate(18deg);
    }
    16% {
      transform: rotate(-22deg);
    }
    20% {
      transform: rotate(22deg);
    }
    32% {
      transform: rotate(-12deg);
    }
    36% {
      transform: rotate(12deg);
    }
    40%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-pulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var $a="",Ea="";function As(t){$a=t}function Yl(t=""){if(!$a){const e=document.querySelector("[data-webawesome]");if(e?.hasAttribute("data-webawesome")){const i=new URL(e.getAttribute("data-webawesome")??"",window.location.href).pathname;As(i)}else{const o=[...document.getElementsByTagName("script")].find(r=>r.src.endsWith("webawesome.js")||r.src.endsWith("webawesome.loader.js")||r.src.endsWith("webawesome.ssr-loader.js"));if(o){const r=String(o.getAttribute("src"));As(r.split("/").slice(0,-1).join("/"))}}}return $a.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}function Zl(t){Ea=t}function Ql(){if(!Ea){const t=document.querySelector("[data-fa-kit-code]");t&&Zl(t.getAttribute("data-fa-kit-code")||"")}return Ea}var zs="7.2.0";function Jl(t,e,i){const o=Ql(),r=o.length>0;let a="solid";return e==="chisel"&&(a="chisel-regular"),e==="etch"&&(a="etch-solid"),e==="graphite"&&(a="graphite-thin"),e==="jelly"&&(a="jelly-regular",i==="duo-regular"&&(a="jelly-duo-regular"),i==="fill-regular"&&(a="jelly-fill-regular")),e==="jelly-duo"&&(a="jelly-duo-regular"),e==="jelly-fill"&&(a="jelly-fill-regular"),e==="notdog"&&(i==="solid"&&(a="notdog-solid"),i==="duo-solid"&&(a="notdog-duo-solid")),e==="notdog-duo"&&(a="notdog-duo-solid"),e==="slab"&&((i==="solid"||i==="regular")&&(a="slab-regular"),i==="press-regular"&&(a="slab-press-regular")),e==="slab-press"&&(a="slab-press-regular"),e==="thumbprint"&&(a="thumbprint-light"),e==="utility"&&(a="utility-semibold"),e==="utility-duo"&&(a="utility-duo-semibold"),e==="utility-fill"&&(a="utility-fill-semibold"),e==="whiteboard"&&(a="whiteboard-semibold"),e==="classic"&&(i==="thin"&&(a="thin"),i==="light"&&(a="light"),i==="regular"&&(a="regular"),i==="solid"&&(a="solid")),e==="duotone"&&(i==="thin"&&(a="duotone-thin"),i==="light"&&(a="duotone-light"),i==="regular"&&(a="duotone-regular"),i==="solid"&&(a="duotone")),e==="sharp"&&(i==="thin"&&(a="sharp-thin"),i==="light"&&(a="sharp-light"),i==="regular"&&(a="sharp-regular"),i==="solid"&&(a="sharp-solid")),e==="sharp-duotone"&&(i==="thin"&&(a="sharp-duotone-thin"),i==="light"&&(a="sharp-duotone-light"),i==="regular"&&(a="sharp-duotone-regular"),i==="solid"&&(a="sharp-duotone-solid")),e==="brands"&&(a="brands"),r?`https://ka-p.fontawesome.com/releases/v${zs}/svgs/${a}/${t}.svg?token=${encodeURIComponent(o)}`:`https://ka-f.fontawesome.com/releases/v${zs}/svgs/${a}/${t}.svg`}var tc={name:"default",resolver:(t,e="classic",i="solid")=>Jl(t,e,i),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){const{family:i,variant:o}=e;if(i==="duotone"||i==="sharp-duotone"||i==="notdog-duo"||i==="notdog"&&o==="duo-solid"||i==="jelly-duo"||i==="jelly"&&o==="duo-regular"||i==="utility-duo"||i==="thumbprint"){const r=[...t.querySelectorAll("path")],a=r.find(l=>!l.hasAttribute("opacity")),s=r.find(l=>l.hasAttribute("opacity"));if(!a||!s)return;if(a.setAttribute("data-duotone-primary",""),s.setAttribute("data-duotone-secondary",""),e.swapOpacity&&a&&s){const l=s.getAttribute("opacity")||"0.4";a.style.setProperty("--path-opacity",l),s.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},ec=tc;function ic(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var ta={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},oc={name:"system",resolver:(t,e="classic",i="solid")=>{let r=ta[i][t]??ta.regular[t]??ta.regular["circle-question"];return r?ic(r):""}},rc=oc;var ac="classic",gr=[ec,rc],br=[];function sc(t){br.push(t)}function nc(t){br=br.filter(e=>e!==t)}function ea(t){return gr.find(e=>e.name===t)}function lc(t,e){cc(t),gr.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),br.forEach(i=>{i.library===t&&i.setIcon()})}function cc(t){gr=gr.filter(e=>e.name!==t)}function dc(){return ac}var $o=Symbol(),er=Symbol(),ia,oa=new Map,bt=class extends A{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let i;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=p`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(o,this),this.svg}try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?$o:er}catch{return er}try{const o=document.createElement("div");o.innerHTML=await i.text();const r=o.firstElementChild;if(r?.tagName?.toLowerCase()!=="svg")return $o;ia||(ia=new DOMParser);const s=ia.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):$o}catch{return $o}}}connectedCallback(){super.connectedCallback(),sc(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),nc(this)}getIconSource(){const t=ea(this.library),e=this.family||dc();return this.name&&t?{url:t.resolver(this.name,e,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:e}=this.getIconSource(),i=e?ea(this.library):void 0;if(!t){this.svg=null;return}let o=oa.get(t);o||(o=this.resolveIcon(t,i),oa.set(t,o));const r=await o;if(r===er&&oa.delete(t),t===this.getIconSource().url){if(Il(r)){this.svg=r;return}switch(r){case er:case $o:this.svg=null,this.dispatchEvent(new eo);break;default:this.svg=r.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new Ka)}}}updated(t){super.updated(t);const e=ea(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);const i=this.shadowRoot?.querySelector("svg");i&&e?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:p`<svg part="svg" width="16" height="16"></svg>`}};bt.css=Xl;n([w()],bt.prototype,"svg",2);n([c({reflect:!0})],bt.prototype,"name",2);n([c({reflect:!0})],bt.prototype,"family",2);n([c({reflect:!0})],bt.prototype,"variant",2);n([c({attribute:"auto-width",type:Boolean,reflect:!0})],bt.prototype,"autoWidth",2);n([c({attribute:"swap-opacity",type:Boolean,reflect:!0})],bt.prototype,"swapOpacity",2);n([c()],bt.prototype,"src",2);n([c()],bt.prototype,"label",2);n([c({reflect:!0})],bt.prototype,"library",2);n([c({type:Number,reflect:!0})],bt.prototype,"rotate",2);n([c({type:String,reflect:!0})],bt.prototype,"flip",2);n([c({type:String,reflect:!0})],bt.prototype,"animation",2);n([x("label")],bt.prototype,"handleLabelChange",1);n([x(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],bt.prototype,"setIcon",1);bt=n([v("wa-icon")],bt);var Ts=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}};var hc=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}};var uc=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}};var pc=k`
  :host {
    display: contents;
  }
`;const fc=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],mc=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],gc=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],bc=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],wc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],vc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],yc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],xc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],kc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sc=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],$c=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ec=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Lc=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ac=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],zc=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Tc=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Rc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Dc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Ic=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],_c=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Oc=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Pc=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Fc=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Mc=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Nc=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Bc=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Vc=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Uc=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],qc=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Hc=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Wc=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],jc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kc=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gc=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xc=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zc=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qc=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jc=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],td=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ed=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],id=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],od=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rd=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],ad=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],sd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],nd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],ld=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],cd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],dd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],hd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],ud=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],pd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],fd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],md=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],gd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],bd=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],wd=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],vd=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],yd=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],xd=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],kd=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cd=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sd=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],$d=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Ed=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ld=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ad=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zd=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Td=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Rd=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Dd=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Id=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],_d=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Od=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Pd=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Fd=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Md=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nd=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Vd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Ud=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],qd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Hd=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Wd=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],jd=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Gd=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Xd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Yd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Zd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Qd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Jd=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],th=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],eh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],ih=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],oh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ln={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},rh=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Lc,backInLeft:Ac,backInRight:zc,backInUp:Tc,backOutDown:Rc,backOutLeft:Dc,backOutRight:Ic,backOutUp:_c,bounce:fc,bounceIn:Oc,bounceInDown:Pc,bounceInLeft:Fc,bounceInRight:Mc,bounceInUp:Nc,bounceOut:Bc,bounceOutDown:Vc,bounceOutLeft:Uc,bounceOutRight:qc,bounceOutUp:Hc,easings:Ln,fadeIn:Wc,fadeInBottomLeft:jc,fadeInBottomRight:Kc,fadeInDown:Gc,fadeInDownBig:Xc,fadeInLeft:Yc,fadeInLeftBig:Zc,fadeInRight:Qc,fadeInRightBig:Jc,fadeInTopLeft:td,fadeInTopRight:ed,fadeInUp:id,fadeInUpBig:od,fadeOut:rd,fadeOutBottomLeft:ad,fadeOutBottomRight:sd,fadeOutDown:nd,fadeOutDownBig:ld,fadeOutLeft:cd,fadeOutLeftBig:dd,fadeOutRight:hd,fadeOutRightBig:ud,fadeOutTopLeft:pd,fadeOutTopRight:fd,fadeOutUp:md,fadeOutUpBig:gd,flash:mc,flip:bd,flipInX:wd,flipInY:vd,flipOutX:yd,flipOutY:xd,headShake:gc,heartBeat:bc,hinge:Hd,jackInTheBox:Wd,jello:wc,lightSpeedInLeft:kd,lightSpeedInRight:Cd,lightSpeedOutLeft:Sd,lightSpeedOutRight:$d,pulse:vc,rollIn:jd,rollOut:Kd,rotateIn:Ed,rotateInDownLeft:Ld,rotateInDownRight:Ad,rotateInUpLeft:zd,rotateInUpRight:Td,rotateOut:Rd,rotateOutDownLeft:Dd,rotateOutDownRight:Id,rotateOutUpLeft:_d,rotateOutUpRight:Od,rubberBand:yc,shake:xc,shakeX:kc,shakeY:Cc,slideInDown:Pd,slideInLeft:Fd,slideInRight:Md,slideInUp:Nd,slideOutDown:Bd,slideOutLeft:Vd,slideOutRight:Ud,slideOutUp:qd,swing:Sc,tada:$c,wobble:Ec,zoomIn:Gd,zoomInDown:Xd,zoomInLeft:Yd,zoomInRight:Zd,zoomInUp:Qd,zoomOut:Jd,zoomOutDown:th,zoomOutLeft:eh,zoomOutRight:ih,zoomOutUp:oh},Symbol.toStringTag,{value:"Module"}));var ct=class extends A{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new hc)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new uc)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const t=Ln[this.easing]??this.easing,e=this.keyframes??rh[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!e?!1:(this.destroyAnimation(),this.animation=o.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new Ts)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new Ts)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};ct.css=pc;n([_l("slot")],ct.prototype,"defaultSlot",2);n([c()],ct.prototype,"name",2);n([c({type:Boolean,reflect:!0})],ct.prototype,"play",2);n([c({type:Number})],ct.prototype,"delay",2);n([c()],ct.prototype,"direction",2);n([c({type:Number})],ct.prototype,"duration",2);n([c()],ct.prototype,"easing",2);n([c({attribute:"end-delay",type:Number})],ct.prototype,"endDelay",2);n([c()],ct.prototype,"fill",2);n([c({type:Number})],ct.prototype,"iterations",2);n([c({attribute:"iteration-start",type:Number})],ct.prototype,"iterationStart",2);n([c({attribute:!1})],ct.prototype,"keyframes",2);n([c({attribute:"playback-rate",type:Number})],ct.prototype,"playbackRate",2);n([x(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ct.prototype,"handleAnimationChange",1);n([x("play")],ct.prototype,"handlePlayChange",1);n([x("playbackRate")],ct.prototype,"handlePlaybackRateChange",1);ct=n([v("wa-animation")],ct);var ah=k`
  :host {
    --size: 3rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    color: var(--wa-color-neutral-on-normal);
    font: inherit;
    font-size: calc(var(--size) * 0.4);
    vertical-align: middle;
    background-color: var(--wa-color-neutral-fill-normal);
    border-radius: var(--wa-border-radius-circle);
    user-select: none;
    -webkit-user-select: none;
  }

  :host([shape='square']) {
    border-radius: 0;
  }

  :host([shape='rounded']) {
    border-radius: var(--wa-border-radius-m);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: inherit;
  }
`;var _e=class extends A{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new eo)}render(){const t=p`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let e=p``;return this.initials?e=p`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:e=p`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,p` ${this.image&&!this.hasError?t:e} `}};_e.css=ah;n([w()],_e.prototype,"hasError",2);n([c()],_e.prototype,"image",2);n([c()],_e.prototype,"label",2);n([c()],_e.prototype,"initials",2);n([c()],_e.prototype,"loading",2);n([c({reflect:!0})],_e.prototype,"shape",2);n([x("image")],_e.prototype,"handleImageChange",1);_e=n([v("wa-avatar")],_e);var Mr=k`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;var sh=k`
  :host {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.375em 0.625em;
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    font-size: max(var(--wa-font-size-2xs), 0.75em);
    font-weight: var(--wa-font-weight-semibold);
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
    border-radius: var(--wa-border-radius-s);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

    color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance='filled']) {
    --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
  }

  :host([appearance='accent']) {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
  }

  /* Pill modifier */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }

  /* Pulse attention */
  :host([attention='pulse']) {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  /* Bounce attention */
  :host([attention='bounce']) {
    animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  /* Slots */
  slot[name='start']::slotted(*) {
    margin-inline-end: 0.375em;
  }

  slot[name='end']::slotted(*) {
    margin-inline-start: 0.375em;
  }
`;var Ii=class extends A{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return p`
      <slot name="start" part="start"></slot>

      <slot part="base" role="status"></slot>

      <slot name="end" part="end"></slot>
    `}};Ii.css=[Mr,sh];n([c({reflect:!0})],Ii.prototype,"variant",2);n([c({reflect:!0})],Ii.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],Ii.prototype,"pill",2);n([c({reflect:!0})],Ii.prototype,"attention",2);Ii=n([v("wa-badge")],Ii);var nh=k`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var oo=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="wa-breadcrumb-item");t.forEach((e,i)=>{const o=e.querySelector('[slot="separator"]');o===null?e.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),p`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <wa-icon
            name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"}
            library="system"
            variant="solid"
          ></wa-icon>
        </slot>
      </span>
    `}};oo.css=nh;n([y("slot")],oo.prototype,"defaultSlot",2);n([y('slot[name="separator"]')],oo.prototype,"separatorSlot",2);n([c()],oo.prototype,"label",2);oo=n([v("wa-breadcrumb")],oo);var lh=k`
  :host {
    color: var(--wa-color-text-link);
    display: inline-flex;
    align-items: center;
    font: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: var(--wa-line-height-normal);
    white-space: nowrap;
  }

  :host(:last-of-type) {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: inline-block;
    font: inherit;
    text-decoration: none;
    color: currentColor;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:not(:last-of-type)) .label:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:not(:last-of-type)) .label:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .label:focus {
    outline: none;
  }

  .label:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .start,
  .end {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start,
  .end {
    display: inline-flex;
    color: var(--wa-color-text-quiet);
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--wa-space-s);
  }

  ::slotted([slot='end']) {
    margin-inline-start: var(--wa-space-s);
  }

  :host(:last-of-type) .separator {
    display: none;
  }

  .separator {
    color: var(--wa-color-text-quiet);
    display: inline-flex;
    align-items: center;
    margin: 0 var(--wa-space-s);
    user-select: none;
    -webkit-user-select: none;
  }
`;var Xe=class extends A{constructor(){super(...arguments),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="wa-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return p`
      <span part="start" class="start">
        <slot name="start"></slot>
      </span>

      ${this.renderType==="link"?p`
            <a
              part="label"
              class="label label-link"
              href="${this.href}"
              target="${$(this.target?this.target:void 0)}"
              rel=${$(this.target?this.rel:void 0)}
            >
              <slot></slot>
            </a>
          `:""}
      ${this.renderType==="button"?p`
            <button part="label" type="button" class="label label-button">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </button>
          `:""}
      ${this.renderType==="dropdown"?p`
            <div part="label" class="label label-dropdown">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
          `:""}

      <span part="end" class="end">
        <slot name="end"></slot>
      </span>

      <span part="separator" class="separator" aria-hidden="true">
        <slot name="separator"></slot>
      </span>
    `}};Xe.css=lh;n([y("slot:not([name])")],Xe.prototype,"defaultSlot",2);n([w()],Xe.prototype,"renderType",2);n([c()],Xe.prototype,"href",2);n([c()],Xe.prototype,"target",2);n([c()],Xe.prototype,"rel",2);n([x("href",{waitUntilFirstUpdate:!0})],Xe.prototype,"hrefChanged",1);Xe=n([v("wa-breadcrumb-item")],Xe);var Wo=()=>({checkValidity(t){const e=t.input,i={message:"",isValid:!0,invalidKeys:[]};if(!e)return i;let o=!0;if("checkValidity"in e&&(o=e.checkValidity()),o)return i;if(i.isValid=!1,"validationMessage"in e&&(i.message=e.validationMessage),!("validity"in e))return i.invalidKeys.push("customError"),i;for(const r in e.validity){if(r==="valid")continue;const a=r;e.validity[a]&&i.invalidKeys.push(a)}return i}});var Ya=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var ch=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),Q=class extends A{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ya))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[ch()]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const i of e.observedAttributes)t.add(i);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")||t.has("defaultValue")){const e=this.value;if(Array.isArray(e)){if(this.name){const i=new FormData;for(const o of e)i.append(this.name,o);this.setValue(i,i)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.updateValidity()}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){const e=t[0],i=t[1];let o=t[2];o||(o=this.validationTarget),this.internals.setValidity(e,i,o||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&i),this.customStates.set("user-valid",e&&i)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){const[e,i]=t;this.internals.setFormValue(e,i)}get allValidators(){const t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},i=this.validationTarget||this.input||void 0;let o="";for(const r of t){const{isValid:a,message:s,invalidKeys:l}=r.checkValidity(this);a||(o||(o=s),l?.length>=0&&l.forEach(d=>e[d]=!0))}o||(o=this.validationMessage),this.setValidity(e,o,i)}};Q.formAssociated=!0;n([c({reflect:!0})],Q.prototype,"name",2);n([c({type:Boolean})],Q.prototype,"disabled",2);n([c({state:!0,attribute:!1})],Q.prototype,"valueHasChanged",2);n([c({state:!0,attribute:!1})],Q.prototype,"hasInteracted",2);n([c({attribute:"custom-error",reflect:!0})],Q.prototype,"customError",2);n([c({attribute:!1,state:!0,type:Object})],Q.prototype,"validity",1);var qt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(t){return this.host.querySelector?.(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot?.addEventListener?.("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot?.removeEventListener?.("slotchange",this.handleSlotChange)}};var Et=k`
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
`;var dh=k`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  .button.is-icon-button:has(wa-icon) {
    width: auto;
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-radius: var(--wa-border-radius-pill);
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }

  /*
   * Button group border radius modifications
   */

  /* Remove border radius from all grouped buttons by default */
  :host(.wa-button-group__button) .button {
    border-radius: 0;
  }

  /* Horizontal orientation */
  :host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-end-start-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Vertical orientation */
  :host(.wa-button-group__vertical) {
    flex: 1 1 auto;
  }

  :host(.wa-button-group__vertical) .button {
    width: 100%;
    justify-content: start;
  }

  :host(.wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-start-end-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Handle pill modifier for button groups */
  :host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-end-start-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-start-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }
`;const An=Symbol.for(""),hh=t=>{if(t?.r===An)return t?._$litStatic$},Rs=(t,...e)=>({_$litStatic$:e.reduce((i,o,r)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[r+1],t[0]),r:An}),Ds=new Map,uh=t=>(e,...i)=>{const o=i.length;let r,a;const s=[],l=[];let d,h=0,u=!1;for(;h<o;){for(d=e[h];h<o&&(a=i[h],(r=hh(a))!==void 0);)d+=r+e[++h],u=!0;h!==o&&l.push(a),s.push(d),h++}if(h===o&&s.push(e[o]),u){const f=s.join("$$lit$$");(e=Ds.get(f))===void 0&&(s.raw=s,Ds.set(f,e=s)),i=l}return t(e,...i)},ra=uh(p);var G=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new qt(this,"[default]","start","end"),this.localize=new U(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,Wo()]}constructLightDOMButton(){const t=document.createElement("button");for(const e of this.attributes)e.name!=="style"&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;const i=this.constructLightDOMButton();this.parentElement?.append(i),i.click(),i.remove()}handleInvalid(){this.dispatchEvent(new Ya)}handleLabelSlotChange(){const t=this.labelSlot.assignedNodes({flatten:!0});let e=!1,i=!1,o=!1,r=!1;[...t].forEach(a=>{if(a.nodeType===Node.ELEMENT_NODE){const s=a;s.localName==="wa-icon"?(i=!0,e||(e=s.label!==void 0)):r=!0}else a.nodeType===Node.TEXT_NODE&&(a.textContent?.trim()||"").length>0&&(o=!0)}),this.isIconButton=i&&!o&&!r,this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=this.isLink(),e=t?Rs`a`:Rs`button`;return ra`
      <${e}
        part="base"
        class=${z({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${$(t?void 0:this.disabled)}
        type=${$(t?void 0:this.type)}
        title=${this.title}
        name=${$(t?void 0:this.name)}
        value=${$(t?void 0:this.value)}
        href=${$(t?this.href:void 0)}
        target=${$(t?this.target:void 0)}
        download=${$(t?this.download:void 0)}
        rel=${$(t&&this.rel?this.rel:void 0)}
        role=${$(t?void 0:"button")}
        aria-disabled=${$(t&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?ra`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?ra`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};G.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};G.css=[dh,Mr,Et];n([y(".button")],G.prototype,"button",2);n([y("slot:not([name])")],G.prototype,"labelSlot",2);n([w()],G.prototype,"invalid",2);n([w()],G.prototype,"isIconButton",2);n([c()],G.prototype,"title",2);n([c({reflect:!0})],G.prototype,"variant",2);n([c({reflect:!0})],G.prototype,"appearance",2);n([c({reflect:!0})],G.prototype,"size",2);n([c({attribute:"with-caret",type:Boolean,reflect:!0})],G.prototype,"withCaret",2);n([c({type:Boolean})],G.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],G.prototype,"loading",2);n([c({type:Boolean,reflect:!0})],G.prototype,"pill",2);n([c()],G.prototype,"type",2);n([c({reflect:!0})],G.prototype,"name",2);n([c({reflect:!0})],G.prototype,"value",2);n([c({reflect:!0})],G.prototype,"href",2);n([c()],G.prototype,"target",2);n([c()],G.prototype,"rel",2);n([c()],G.prototype,"download",2);n([c({attribute:"formaction"})],G.prototype,"formAction",2);n([c({attribute:"formenctype"})],G.prototype,"formEnctype",2);n([c({attribute:"formmethod"})],G.prototype,"formMethod",2);n([c({attribute:"formnovalidate",type:Boolean})],G.prototype,"formNoValidate",2);n([c({attribute:"formtarget"})],G.prototype,"formTarget",2);n([x("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);G=n([v("wa-button")],G);var ph=k`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-dasharray: 75, 100;
    stroke-dashoffset: -5;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;var La=class extends A{constructor(){super(...arguments),this.localize=new U(this)}render(){return p`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};La.css=ph;La=n([v("wa-spinner")],La);var fh=k`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;
    gap: 1px;

    @media (hover: hover) {
      > :hover,
      &::slotted(:hover) {
        z-index: 1;
      }
    }

    /* Focus and checked are always on top */
    > :focus,
    &::slotted(:focus),
    > [aria-checked='true'],
    &::slotted([aria-checked='true']),
    > [checked],
    &::slotted([checked]) {
      z-index: 2 !important;
    }
  }
  :host([orientation='vertical']) .button-group {
    flex-direction: column;
  }

  /* Button groups with at least one outlined button will not have a gap and instead have borders overlap */
  .button-group.has-outlined {
    gap: 0;

    &:not([aria-orientation='vertical']):not(.button-group-vertical)::slotted(:not(:first-child)) {
      margin-inline-start: calc(-1 * var(--border-width));
    }

    &:is([aria-orientation='vertical'], .button-group-vertical)::slotted(:not(:first-child)) {
      margin-block-start: calc(-1 * var(--border-width));
    }
  }
`;var ci=class extends A{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(t){super.updated(t),t.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(t){Eo(t.target)?.classList.add("button-focus")}handleBlur(t){Eo(t.target)?.classList.remove("button-focus")}handleMouseOver(t){Eo(t.target)?.classList.add("button-hover")}handleMouseOut(t){Eo(t.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,t.forEach(e=>{const i=t.indexOf(e),o=Eo(e);o&&(o.appearance==="outlined"&&(this.hasOutlined=!0),o.classList.add("wa-button-group__button"),o.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),o.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),o.classList.toggle("wa-button-group__button-first",i===0),o.classList.toggle("wa-button-group__button-inner",i>0&&i<t.length-1),o.classList.toggle("wa-button-group__button-last",i===t.length-1),o.classList.toggle("wa-button-group__button-radio",o.tagName.toLowerCase()==="wa-radio-button"))})}render(){return p`
      <slot
        part="base"
        class=${z({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};ci.css=[fh];n([y("slot")],ci.prototype,"defaultSlot",2);n([w()],ci.prototype,"disableRole",2);n([w()],ci.prototype,"hasOutlined",2);n([c()],ci.prototype,"label",2);n([c({reflect:!0})],ci.prototype,"orientation",2);ci=n([v("wa-button-group")],ci);function Eo(t){const e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var mh=k`
  :host {
    display: flex;
    position: relative;
    align-items: stretch;
    border-radius: var(--wa-panel-border-radius);
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
    border-style: var(--wa-panel-border-style);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
    padding: 1em;
  }

  /* Appearance modifiers */
  :host([appearance~='plain']) {
    background-color: transparent;
    border-color: transparent;
  }

  :host([appearance~='outlined']) {
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance~='filled']) {
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: transparent;
  }

  :host([appearance~='filled-outlined']) {
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  }

  :host([appearance~='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;

    [part~='icon'] {
      color: currentColor;
    }
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-on-quiet);
    font-size: 1.25em;
  }

  ::slotted([slot='icon']) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  [part~='message'] {
    flex: 1 1 auto;
    display: block;
    overflow: hidden;
  }
`;var ro=class extends A{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return p`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};ro.css=[mh,Mr,Et];n([c({reflect:!0})],ro.prototype,"variant",2);n([c({reflect:!0})],ro.prototype,"appearance",2);n([c({reflect:!0})],ro.prototype,"size",2);ro=n([v("wa-callout")],ro);var gh=k`
  :host {
    --spacing: var(--wa-space-l);

    /* Internal calculated properties */
    --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));

    display: flex;
    flex-direction: column;
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-s);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  :host([appearance='outlined']) {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='accent']) {
    color: var(--wa-color-neutral-on-loud);
    background-color: var(--wa-color-neutral-fill-loud);
    border-color: transparent;
  }

  /* Take care of top and bottom radii */
  .media,
  :host(:not([with-media])) .header,
  :host(:not([with-media], [with-header])) .body {
    border-start-start-radius: var(--inner-border-radius);
    border-start-end-radius: var(--inner-border-radius);
  }

  :host(:not([with-footer])) .body,
  .footer {
    border-end-start-radius: var(--inner-border-radius);
    border-end-end-radius: var(--inner-border-radius);
  }

  .media {
    display: flex;
    overflow: hidden;

    &::slotted(*) {
      display: block;
      width: 100%;
      border-radius: 0 !important;
    }
  }

  /* Round all corners for plain appearance */
  :host([appearance='plain']) .media {
    border-radius: var(--inner-border-radius);

    &::slotted(*) {
      border-radius: inherit !important;
    }
  }

  .header {
    display: block;
    border-block-end-style: inherit;
    border-block-end-color: var(--wa-color-surface-border);
    border-block-end-width: var(--wa-panel-border-width);
    padding: calc(var(--spacing) / 2) var(--spacing);
  }

  .body {
    display: block;
    padding: var(--spacing);
  }

  .footer {
    display: block;
    border-block-start-style: inherit;
    border-block-start-color: var(--wa-color-surface-border);
    border-block-start-width: var(--wa-panel-border-width);
    padding: var(--spacing);
  }

  /* Push slots to sides when the action slots renders */
  .has-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :host(:not([with-header])) .header,
  :host(:not([with-footer])) .footer,
  :host(:not([with-media])) .media {
    display: none;
  }

  /* Orientation Styles */
  :host([orientation='horizontal']) {
    flex-direction: row;

    .media {
      border-start-start-radius: var(--inner-border-radius);
      border-end-start-radius: var(--inner-border-radius);
      border-start-end-radius: 0;

      &::slotted(*) {
        block-size: 100%;
        inline-size: 100%;
        object-fit: cover;
      }
    }
  }

  :host([orientation='horizontal']) ::slotted([slot='body']) {
    display: block;
    height: 100%;
    margin: 0;
  }

  :host([orientation='horizontal']) ::slotted([slot='actions']) {
    display: flex;
    align-items: center;
    padding: var(--spacing);
  }
`;var di=class extends A{constructor(){super(...arguments),this.hasSlotController=new qt(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?p`
        <slot name="media" part="media" class="media"></slot>
        <slot part="body" class="body"></slot>
        <slot name="actions" part="actions" class="actions"></slot>
      `:p`
      <slot name="media" part="media" class="media"></slot>

      ${this.hasSlotController.test("header-actions")?p` <header part="header" class="header has-actions">
            <slot name="header"></slot>
            <slot name="header-actions"></slot>
          </header>`:p` <header part="header" class="header">
            <slot name="header"></slot>
          </header>`}

      <slot part="body" class="body"></slot>
      ${this.hasSlotController.test("footer-actions")?p` <footer part="footer" class="footer has-actions">
            <slot name="footer"></slot>
            <slot name="footer-actions"></slot>
          </footer>`:p` <footer part="footer" class="footer">
            <slot name="footer"></slot>
          </footer>`}
    `}};di.css=[Et,gh];n([c({reflect:!0})],di.prototype,"appearance",2);n([c({attribute:"with-header",type:Boolean,reflect:!0})],di.prototype,"withHeader",2);n([c({attribute:"with-media",type:Boolean,reflect:!0})],di.prototype,"withMedia",2);n([c({attribute:"with-footer",type:Boolean,reflect:!0})],di.prototype,"withFooter",2);n([c({reflect:!0})],di.prototype,"orientation",2);di=n([v("wa-card")],di);var bh=class extends Event{constructor(t){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var wh=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var vh=k`
  :host {
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;
    --slide-gap: var(--wa-space-m, 1rem); /* fallback value is necessary */

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--wa-space-m);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--wa-space-s);
  }

  .slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--wa-border-radius-m);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.slides) {
      scroll-behavior: auto;
    }
  }

  .slides-horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .slides-vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .slides-dragging,
  .slides-dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(wa-carousel-item) {
    height: 100%;
  }

  .slides::-webkit-scrollbar {
    display: none;
  }

  .navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--wa-font-size-l);
  }

  .navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    font-size: inherit;
    color: var(--wa-color-text-quiet);
    padding: var(--wa-space-xs);
    cursor: pointer;
    transition: var(--wa-transition-normal) color;
    appearance: none;
  }

  .navigation-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .navigation-button-disabled::part(base) {
    pointer-events: none;
  }

  .navigation-button-previous {
    grid-column: 1;
    grid-row: 1;
  }

  .navigation-button-next {
    grid-column: 3;
    grid-row: 1;
  }

  .pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--wa-border-radius-circle);
    width: var(--wa-space-s);
    height: var(--wa-space-s);
    background-color: var(--wa-color-neutral-fill-normal);
    padding: 0;
    margin: 0;
    transition: transform var(--wa-transition-slow);
  }

  .pagination-item-active {
    background-color: var(--wa-form-control-activated-color);
    transform: scale(1.25);
  }

  /* Focus styles */
  .slides:focus-visible,
  .navigation-button:focus-visible,
  .pagination-item:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
`;let yh="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",xh=(t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=yh[i[t]&63];return e};function _(t,e,i){const o=r=>Object.is(r,-0)?0:r;return t<e?o(e):t>i?o(i):o(t)}function Nr(t=""){return`${t}${xh()}`}function ve(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}async function wr(t,e,i){return t.animate(e,i).finished.catch(()=>{})}function J(t,e){return new Promise(i=>{const o=new AbortController,{signal:r}=o;if(t.classList.contains(e))return;t.classList.add(e);let a=!1,s=()=>{a||(a=!0,t.classList.remove(e),i(),o.abort())};t.addEventListener("animationend",s,{once:!0,signal:r}),t.addEventListener("animationcancel",s,{once:!0,signal:r}),requestAnimationFrame(()=>{!a&&t.getAnimations().length===0&&s()})})}function vr(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?(parseFloat(t)||0)*1e3:parseFloat(t)||0}function Is(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function*kh(t,e){if(t!==void 0){let i=0;for(const o of t)yield e(o,i++)}}function*Ch(t,e,i=1){const o=e===void 0?0:t;e??=t;for(let r=o;i>0?r<e:e<r;r+=i)yield r}(()=>{const t=(o,r)=>{let a=0;return function(...s){window.clearTimeout(a),a=window.setTimeout(()=>{o.call(this,...s)},r)}},e=(o,r,a)=>{const s=o[r];o[r]=function(...l){s.call(this,...l),a.call(this,s,...l)}};if(!("onscrollend"in window)){const o=new Set,r=new WeakMap,a=l=>{o.add(l.pointerId)},s=l=>{o.delete(l.pointerId)};document.addEventListener("pointerdown",a),document.addEventListener("pointerup",s),e(EventTarget.prototype,"addEventListener",function(l,d){if(d!=="scroll")return;const h=t(()=>{o.size?h():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",h,{passive:!0}),r.set(this,h)}),e(EventTarget.prototype,"removeEventListener",function(l,d){if(d!=="scroll")return;const h=r.get(this);h&&l.call(this,"scroll",h,{passive:!0})})}})();var tt=class extends A{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new wh(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new U(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const o=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==o||i!==r)&&(t.scrollTo({left:o,top:r,behavior:Is()?"auto":"smooth"}),await ve(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(i=>[...i.addedNodes,...i.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:o}=this,r=o?t/i:(t-e)/i+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i=this.localize.dir()==="rtl",o=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",a=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),a&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{const s=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');s&&s.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const l of e){const d=l.target;d.toggleAttribute("inert",!l.isIntersecting),d.classList.toggle("--in-view",l.isIntersecting),d.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const i=e.find(l=>l.isIntersecting);if(!i)return;const o=this.getSlides({excludeClones:!1}),r=this.getSlides().length,a=o.indexOf(i.target),s=this.loop?a-this.slidesPerPage:a;if(i&&(this.activeSlide=(Math.ceil(s/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone"))){const l=Number(i.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),o=t.slice(0,e);i.reverse().forEach((r,a)=>{const s=r.cloneNode(!0);s.setAttribute("data-clone",String(t.length-a-1)),this.prepend(s)}),o.forEach((r,a)=>{const s=r.cloneNode(!0);s.setAttribute("data-clone",String(a)),this.append(s)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,i)=>{e.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new bh({index:this.activeSlide,slide:t[this.activeSlide]}))}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((i,o)=>{(o+e)%e===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:o}=this,r=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!r.length)return;const s=o?(t+r.length)%r.length:_(t,0,r.length-i);this.activeSlide=s;const l=this.localize.dir()==="rtl",d=_(t+(o?i:0)+(l?i-1:0),0,a.length-1),h=a[d];this.scrollToSlide(h,Is()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,o=i.getBoundingClientRect(),r=t.getBoundingClientRect(),a=r.left-o.left,s=r.top-o.top;a||s?(this.pendingSlideChange=!0,i.scrollTo({left:a+i.scrollLeft,top:s+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this;let i=0,o=0,r=!1,a=!1;this.hasUpdated&&(i=this.getPageCount(),o=this.getCurrentPage(),r=this.canScrollPrev(),a=this.canScrollNext());const s=this.localize.dir()==="rtl";return p`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${z({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style=${et({"--slides-per-page":this.slidesPerPage})}
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot @slotchange=${()=>this.requestUpdate()}></slot>
        </div>

        ${this.navigation?p`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${z({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${s?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${z({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!a})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?"false":"true"}"
                  @click=${a?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${s?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?p`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${kh(Ch(i),l=>{const d=l===o;return p`
                    <button
                      part="pagination-item ${d?"pagination-item-active":""}"
                      class="${z({"pagination-item":!0,"pagination-item-active":d})}"
                      role="tab"
                      aria-selected="${d?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,i)}"
                      tabindex=${d?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:p``}
      </div>
    `}};tt.css=vh;n([c({type:Boolean,reflect:!0})],tt.prototype,"loop",2);n([c({type:Number,reflect:!0})],tt.prototype,"slides",2);n([c({type:Number,reflect:!0})],tt.prototype,"currentSlide",2);n([c({type:Boolean,reflect:!0})],tt.prototype,"navigation",2);n([c({type:Boolean,reflect:!0})],tt.prototype,"pagination",2);n([c({type:Boolean,reflect:!0})],tt.prototype,"autoplay",2);n([c({type:Number,attribute:"autoplay-interval"})],tt.prototype,"autoplayInterval",2);n([c({type:Number,attribute:"slides-per-page"})],tt.prototype,"slidesPerPage",2);n([c({type:Number,attribute:"slides-per-move"})],tt.prototype,"slidesPerMove",2);n([c()],tt.prototype,"orientation",2);n([c({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],tt.prototype,"mouseDragging",2);n([y(".slides")],tt.prototype,"scrollContainer",2);n([y(".pagination")],tt.prototype,"paginationContainer",2);n([w()],tt.prototype,"activeSlide",2);n([w()],tt.prototype,"scrolling",2);n([w()],tt.prototype,"dragging",2);n([Fr({passive:!0})],tt.prototype,"handleScroll",1);n([x("loop",{waitUntilFirstUpdate:!0}),x("slidesPerPage",{waitUntilFirstUpdate:!0})],tt.prototype,"initializeSlides",1);n([x("activeSlide")],tt.prototype,"handleSlideChange",1);n([x("slidesPerMove")],tt.prototype,"updateSlidesSnap",1);n([x("autoplay")],tt.prototype,"handleAutoplayChange",1);tt=n([v("wa-carousel")],tt);var Sh=k`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;var Aa=class extends A{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return p` <slot></slot> `}};Aa.css=Sh;Aa=n([v("wa-carousel-item")],Aa);var $h=k`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`;var Br=(t={})=>{let{validationElement:e,validationProperty:i}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),i||(i="value");const o={observedAttributes:["required"],message:e.validationMessage,checkValidity(r){const a={message:"",isValid:!0,invalidKeys:[]};return(r.required??r.hasAttribute("required"))&&!r[i]&&(a.message=typeof o.message=="function"?o.message(r):o.message||"",a.isValid=!1,a.invalidKeys.push("valueMissing")),a}};return o};var Ne=k`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`;var ut=class extends Q{constructor(){super(...arguments),this.hasSlotController=new qt(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){const t=[Br({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){const t=this._value||"on";return this.checked?t:null}set value(t){this._value=t}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){const t=this.hasSlotController.test("hint"),e=this.hint?!0:!!t,i=!this.checked&&this.indeterminate,o=i?"indeterminate":"check",r=i?"indeterminate":"check";return p`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${$(this.name)}
            value=${$(this._value)}
            .indeterminate=${Di(this.indeterminate)}
            .checked=${Di(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${r}-icon icon" library="system" name=${o}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${e?"false":"true"}
        class="${z({"has-slotted":e})}"
      >
        ${this.hint}
      </slot>
    `}};ut.css=[Ne,Et,$h];ut.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y('input[type="checkbox"]')],ut.prototype,"input",2);n([c()],ut.prototype,"title",2);n([c({reflect:!0})],ut.prototype,"name",2);n([c({reflect:!0})],ut.prototype,"value",1);n([c({reflect:!0})],ut.prototype,"size",2);n([c({type:Boolean})],ut.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],ut.prototype,"indeterminate",2);n([c({type:Boolean,attribute:!1})],ut.prototype,"checked",1);n([c({type:Boolean,reflect:!0,attribute:"checked"})],ut.prototype,"defaultChecked",2);n([c({type:Boolean,reflect:!0})],ut.prototype,"required",2);n([c()],ut.prototype,"hint",2);n([x(["checked","defaultChecked"])],ut.prototype,"handleDefaultCheckedChange",1);n([x(["checked","indeterminate"])],ut.prototype,"handleStateChange",1);n([x("disabled")],ut.prototype,"handleDisabledChange",1);ut=n([v("wa-checkbox")],ut);function Fo(t,e){function i(r){const a=t.getBoundingClientRect(),s=t.ownerDocument.defaultView,l=a.left+s.pageXOffset,d=a.top+s.pageYOffset,h=r.pageX-l,u=r.pageY-d;e?.onMove&&e.onMove(h,u)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),e?.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),e?.initialEvent instanceof PointerEvent&&i(e.initialEvent)}var aa=typeof window<"u"&&"ontouchstart"in window,ir=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=i=>{const o="touches"in i?i.touches[0].clientX:i.clientX,r="touches"in i?i.touches[0].clientY:i.clientY;this.isDragging||!aa&&i.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(o,r))},this.handleDragStop=i=>{const o="changedTouches"in i?i.changedTouches[0].clientX:i.clientX,r="changedTouches"in i?i.changedTouches[0].clientY:i.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(o,r)},this.handleDragMove=i=>{const o="touches"in i?i.touches[0].clientX:i.clientX,r="touches"in i?i.touches[0].clientY:i.clientY;window.getSelection()?.removeAllRanges(),this.options.move(o,r)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),aa&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),aa&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var Eh=k`
  :host {
    --grid-width: 17em;
    --grid-height: 12em;
    --grid-handle-size: 1.25em;
    --slider-height: 1em;
    --slider-handle-size: calc(var(--slider-height) + 0.25em);
  }

  .color-picker {
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    border-color: var(--wa-color-surface-border);
    box-shadow: var(--wa-shadow-m);
    color: var(--color);
    font: inherit;
    font-size: inherit;
    user-select: none;
    width: var(--grid-width);
    -webkit-user-select: none;
  }

  .grid {
    position: relative;
    height: var(--grid-height);
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: var(--wa-border-radius-circle);
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    border: solid 0.125rem white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .grid-handle-dragging {
    cursor: none;
    scale: 1.5;
  }

  .grid-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .controls {
    padding: 0.75em;
    display: flex;
    align-items: center;
  }

  .sliders {
    flex: 1 1 auto;
  }

  .slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--wa-border-radius-s);
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .slider:not(:last-of-type) {
    margin-bottom: 0.75em;
  }

  .slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    border-radius: var(--wa-border-radius-circle);
    border: solid 0.125rem white;
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .slider-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .alpha .alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3em;
    height: 3em;
    border: none;
    border-radius: var(--wa-border-radius-circle);
    background: none;
    font-size: inherit;
    margin-inline-start: 0.75em;
    cursor: copy;
    forced-color-adjust: none;
  }

  .preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .preview:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  }

  .preview-color-copied {
    animation: pulse 850ms;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .user-input {
    display: flex;
    align-items: center;
    padding: 0 0.75em 0.75em 0.75em;
  }

  .user-input wa-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;

    &::part(form-control-label) {
      /* Visually hidden */
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
      border: none !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      padding: 0 !important;
    }
  }

  .user-input wa-button-group {
    margin-inline-start: 0.75em;

    &::part(base) {
      flex-wrap: nowrap;
    }
  }

  .user-input wa-button:first-of-type {
    min-width: 3em;
    max-width: 3em;
  }

  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(1.5em, 100%), 1fr));
    grid-gap: 0.5em;
    justify-items: center;
    border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
      var(--wa-color-surface-border);
    padding: 0.5em;
    forced-color-adjust: none;
  }

  .swatch {
    position: relative;
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: var(--wa-border-radius-s);
  }

  .swatch .swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .swatch:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .transparent-bg {
    background-image:
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
    background-size: 0.5rem 0.5rem;
    background-position:
      0 0,
      0 0,
      -0.25rem -0.25rem,
      0.25rem 0.25rem;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    .grid,
    .grid-handle,
    .slider,
    .slider-handle,
    .preview,
    .swatch,
    .swatch-color {
      pointer-events: none;
    }
  }

  /*
   * Color dropdown
   */

  .color-dropdown {
    display: contents;
  }

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--wa-color-surface-raised);
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    overflow: visible;
  }

  .trigger {
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    forced-color-adjust: none;
    width: var(--wa-form-control-height);
    height: var(--wa-form-control-height);
    border-radius: var(--wa-form-control-border-radius);
  }

  .trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
      inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
  }

  .trigger-empty:before {
    background-color: transparent;
  }

  .trigger:focus-visible {
    outline: none;
  }

  .trigger:focus-visible:not(.trigger:disabled) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([disabled]) :is(.label, .trigger) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-control.form-control-has-label .label {
    cursor: pointer;
    display: inline-block;
  }
`;var zn=k`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var Ri=[];function Ui(t){Ri.push(t)}function Oe(t){for(let e=Ri.length-1;e>=0;e--)if(Ri[e]===t){Ri.splice(e,1);break}}function Pe(t){return Ri.length>0&&Ri[Ri.length-1]===t}function gt(t,e){Lh(t)&&(t="100%");const i=Ah(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function or(t){return Math.min(1,Math.max(0,t))}function Lh(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Ah(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Tn(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function rr(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Ti(t){return t.length===1?"0"+t:String(t)}function zh(t,e,i){return{r:gt(t,255)*255,g:gt(e,255)*255,b:gt(i,255)*255}}function _s(t,e,i){t=gt(t,255),e=gt(e,255),i=gt(i,255);const o=Math.max(t,e,i),r=Math.min(t,e,i);let a=0,s=0;const l=(o+r)/2;if(o===r)s=0,a=0;else{const d=o-r;switch(s=l>.5?d/(2-o-r):d/(o+r),o){case t:a=(e-i)/d+(e<i?6:0);break;case e:a=(i-t)/d+2;break;case i:a=(t-e)/d+4;break}a/=6}return{h:a,s,l}}function sa(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*(6*i):i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Th(t,e,i){let o,r,a;if(t=gt(t,360),e=gt(e,100),i=gt(i,100),e===0)r=i,a=i,o=i;else{const s=i<.5?i*(1+e):i+e-i*e,l=2*i-s;o=sa(l,s,t+1/3),r=sa(l,s,t),a=sa(l,s,t-1/3)}return{r:o*255,g:r*255,b:a*255}}function Os(t,e,i){t=gt(t,255),e=gt(e,255),i=gt(i,255);const o=Math.max(t,e,i),r=Math.min(t,e,i);let a=0;const s=o,l=o-r,d=o===0?0:l/o;if(o===r)a=0;else{switch(o){case t:a=(e-i)/l+(e<i?6:0);break;case e:a=(i-t)/l+2;break;case i:a=(t-e)/l+4;break}a/=6}return{h:a,s:d,v:s}}function Rh(t,e,i){t=gt(t,360)*6,e=gt(e,100),i=gt(i,100);const o=Math.floor(t),r=t-o,a=i*(1-e),s=i*(1-r*e),l=i*(1-(1-r)*e),d=o%6,h=[i,s,a,a,l,i][d],u=[l,i,i,s,a,a][d],f=[a,a,l,i,i,s][d];return{r:h*255,g:u*255,b:f*255}}function Ps(t,e,i,o){const r=[Ti(Math.round(t).toString(16)),Ti(Math.round(e).toString(16)),Ti(Math.round(i).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Dh(t,e,i,o,r){const a=[Ti(Math.round(t).toString(16)),Ti(Math.round(e).toString(16)),Ti(Math.round(i).toString(16)),Ti(_h(o))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function Ih(t,e,i,o){const r=t/100,a=e/100,s=i/100,l=o/100,d=255*(1-r)*(1-l),h=255*(1-a)*(1-l),u=255*(1-s)*(1-l);return{r:d,g:h,b:u}}function Fs(t,e,i){let o=1-t/255,r=1-e/255,a=1-i/255,s=Math.min(o,r,a);return s===1?(o=0,r=0,a=0):(o=(o-s)/(1-s)*100,r=(r-s)/(1-s)*100,a=(a-s)/(1-s)*100),s*=100,{c:Math.round(o),m:Math.round(r),y:Math.round(a),k:Math.round(s)}}function _h(t){return Math.round(parseFloat(t)*255).toString(16)}function Ms(t){return Gt(t)/255}function Gt(t){return parseInt(t,16)}function Oh(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const za={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ph(t){let e={r:0,g:0,b:0},i=1,o=null,r=null,a=null,s=!1,l=!1;return typeof t=="string"&&(t=Nh(t)),typeof t=="object"&&(jt(t.r)&&jt(t.g)&&jt(t.b)?(e=zh(t.r,t.g,t.b),s=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):jt(t.h)&&jt(t.s)&&jt(t.v)?(o=rr(t.s),r=rr(t.v),e=Rh(t.h,o,r),s=!0,l="hsv"):jt(t.h)&&jt(t.s)&&jt(t.l)?(o=rr(t.s),a=rr(t.l),e=Th(t.h,o,a),s=!0,l="hsl"):jt(t.c)&&jt(t.m)&&jt(t.y)&&jt(t.k)&&(e=Ih(t.c,t.m,t.y,t.k),s=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=Tn(i),{ok:s,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const Fh="[-\\+]?\\d+%?",Mh="[-\\+]?\\d*\\.\\d+%?",ri="(?:"+Mh+")|(?:"+Fh+")",na="[\\s|\\(]+("+ri+")[,|\\s]+("+ri+")[,|\\s]+("+ri+")\\s*\\)?",ar="[\\s|\\(]+("+ri+")[,|\\s]+("+ri+")[,|\\s]+("+ri+")[,|\\s]+("+ri+")\\s*\\)?",ie={CSS_UNIT:new RegExp(ri),rgb:new RegExp("rgb"+na),rgba:new RegExp("rgba"+ar),hsl:new RegExp("hsl"+na),hsla:new RegExp("hsla"+ar),hsv:new RegExp("hsv"+na),hsva:new RegExp("hsva"+ar),cmyk:new RegExp("cmyk"+ar),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Nh(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(za[t])t=za[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=ie.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=ie.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=ie.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=ie.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=ie.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=ie.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=ie.cmyk.exec(t),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=ie.hex8.exec(t),i?{r:Gt(i[1]),g:Gt(i[2]),b:Gt(i[3]),a:Ms(i[4]),format:e?"name":"hex8"}:(i=ie.hex6.exec(t),i?{r:Gt(i[1]),g:Gt(i[2]),b:Gt(i[3]),format:e?"name":"hex"}:(i=ie.hex4.exec(t),i?{r:Gt(i[1]+i[1]),g:Gt(i[2]+i[2]),b:Gt(i[3]+i[3]),a:Ms(i[4]+i[4]),format:e?"name":"hex8"}:(i=ie.hex3.exec(t),i?{r:Gt(i[1]+i[1]),g:Gt(i[2]+i[2]),b:Gt(i[3]+i[3]),format:e?"name":"hex"}:!1))))))))))}function jt(t){return typeof t=="number"?!Number.isNaN(t):ie.CSS_UNIT.test(t)}class it{constructor(e="",i={}){if(e instanceof it)return e;typeof e=="number"&&(e=Oh(e)),this.originalInput=e;const o=Ph(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??o.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let i,o,r;const a=e.r/255,s=e.g/255,l=e.b/255;return a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*i+.7152*o+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Tn(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Os(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Os(this.r,this.g,this.b),i=Math.round(e.h*360),o=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${i}, ${o}%, ${r}%)`:`hsva(${i}, ${o}%, ${r}%, ${this.roundA})`}toHsl(){const e=_s(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=_s(this.r,this.g,this.b),i=Math.round(e.h*360),o=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${i}, ${o}%, ${r}%)`:`hsla(${i}, ${o}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Ps(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Dh(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),i=Math.round(this.g),o=Math.round(this.b);return this.a===1?`rgb(${e}, ${i}, ${o})`:`rgba(${e}, ${i}, ${o}, ${this.roundA})`}toPercentageRgb(){const e=i=>`${Math.round(gt(i,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=i=>Math.round(gt(i,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Fs(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:i,y:o,k:r}=Fs(this.r,this.g,this.b);return`cmyk(${e}, ${i}, ${o}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Ps(this.r,this.g,this.b,!1);for(const[i,o]of Object.entries(za))if(e===o)return i;return!1}toString(e){const i=!!e;e=e??this.format;let o=!1;const r=this.a<1&&this.a>=0;return!i&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(o=this.toRgbString()),e==="prgb"&&(o=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(o=this.toHexString()),e==="hex3"&&(o=this.toHexString(!0)),e==="hex4"&&(o=this.toHex8String(!0)),e==="hex8"&&(o=this.toHex8String()),e==="name"&&(o=this.toName()),e==="hsl"&&(o=this.toHslString()),e==="hsv"&&(o=this.toHsvString()),e==="cmyk"&&(o=this.toCmykString()),o||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new it(this.toString())}lighten(e=10){const i=this.toHsl();return i.l+=e/100,i.l=or(i.l),new it(i)}brighten(e=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(e/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(e/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(e/100)))),new it(i)}darken(e=10){const i=this.toHsl();return i.l-=e/100,i.l=or(i.l),new it(i)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const i=this.toHsl();return i.s-=e/100,i.s=or(i.s),new it(i)}saturate(e=10){const i=this.toHsl();return i.s+=e/100,i.s=or(i.s),new it(i)}greyscale(){return this.desaturate(100)}spin(e){const i=this.toHsl(),o=(i.h+e)%360;return i.h=o<0?360+o:o,new it(i)}mix(e,i=50){const o=this.toRgb(),r=new it(e).toRgb(),a=i/100,s={r:(r.r-o.r)*a+o.r,g:(r.g-o.g)*a+o.g,b:(r.b-o.b)*a+o.b,a:(r.a-o.a)*a+o.a};return new it(s)}analogous(e=6,i=30){const o=this.toHsl(),r=360/i,a=[this];for(o.h=(o.h-(r*e>>1)+720)%360;--e;)o.h=(o.h+r)%360,a.push(new it(o));return a}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new it(e)}monochromatic(e=6){const i=this.toHsv(),{h:o}=i,{s:r}=i;let{v:a}=i;const s=[],l=1/e;for(;e--;)s.push(new it({h:o,s:r,v:a})),a=(a+l)%1;return s}splitcomplement(){const e=this.toHsl(),{h:i}=e;return[this,new it({h:(i+72)%360,s:e.s,l:e.l}),new it({h:(i+216)%360,s:e.s,l:e.l})]}onBackground(e){const i=this.toRgb(),o=new it(e).toRgb(),r=i.a+o.a*(1-i.a);return new it({r:(i.r*i.a+o.r*o.a*(1-i.a))/r,g:(i.g*i.a+o.g*o.a*(1-i.a))/r,b:(i.b*i.a+o.b*o.a*(1-i.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const i=this.toHsl(),{h:o}=i,r=[this],a=360/e;for(let s=1;s<e;s++)r.push(new it({h:(o+s*a)%360,s:i.s,l:i.l}));return r}equals(e){const i=new it(e);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var R=class extends Q{constructor(){super(),this.hasSlotController=new qt(this,"hint","label"),this.isSafeValue=!1,this.localize=new U(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&Pe(this)&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&Pe(this)){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{const e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{const i=t.composedPath().some(o=>o instanceof Element&&(o.closest(".color-picker")||o===this.trigger));this&&!i&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const t=[Br()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".slider.alpha"),i=e.querySelector(".slider-handle"),{width:o}=e.getBoundingClientRect();let r=this.value,a=this.value;i.focus(),t.preventDefault(),Fo(e,{onMove:s=>{this.alpha=_(s/o*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".slider.hue"),i=e.querySelector(".slider-handle"),{width:o}=e.getBoundingClientRect();let r=this.value,a=this.value;i.focus(),t.preventDefault(),Fo(e,{onMove:s=>{this.hue=_(s/o*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".grid"),i=e.querySelector(".grid-handle"),{width:o,height:r}=e.getBoundingClientRect();let a=this.value,s=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Fo(e,{onMove:(l,d)=>{this.saturation=_(l/o*100,0,100),this.brightness=_(100-d/r*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=_(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=_(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=_(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=_(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=_(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=_(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=_(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=_(this.brightness-e,0,100),this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;const e=new it(t);if(!e.isValid)return null;const i=e.toHsl(),o=e.toRgb(),r=e.toHsv();if(!o||o.r==null||o.g==null||o.b==null)return null;const a={h:i.h||0,s:(i.s||0)*100,l:(i.l||0)*100,a:i.a||0},s=e.toHexString(),l=e.toHex8String(),d={h:r.h||0,s:(r.s||0)*100,v:(r.v||0)*100,a:r.a||0};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:d.h,s:d.s,v:d.v,string:this.setLetterCase(`hsv(${Math.round(d.h)}, ${Math.round(d.s)}%, ${Math.round(d.v)}%)`)},hsva:{h:d.h,s:d.s,v:d.v,a:d.a,string:this.setLetterCase(`hsva(${Math.round(d.h)}, ${Math.round(d.s)}%, ${Math.round(d.v)}%, ${d.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a||0,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${(o.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(l)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{const i=this.value;this.setColor(e.sRGBHex),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,i,o=100){const r=new it(`hsva(${t}, ${e}%, ${i}%, ${o/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){super.willUpdate(t),t.has("value")&&this.handleValueChange(t.get("value")||"",this.value||"")}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);i!==null?(this.inputValue=this.value||"",this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){const t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Ya),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){const t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,ve(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,ve(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Ui(this)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Oe(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await J(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await J(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const t=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,o=this.hint?!0:!!e,r=this.saturation,a=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(d=>d.trim()!==""),l=p`
      <div
        part="base"
        class=${z({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${et({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${z({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${et({top:`${a}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${$(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${et({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${$(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?p`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${et({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${et({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${$(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${et({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="small"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${this.withoutFormatToggle?"":p`
                  <wa-button
                    part="format-button"
                    size="small"
                    appearance="outlined"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `}
            ${this.hasEyeDropper?p`
                  <wa-button
                    part="eyedropper-button"
                    size="small"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></wa-icon>
                  </wa-button>
                `:""}
          </wa-button-group>
        </div>

        ${s.length>0?p`
              <div part="swatches" class="swatches">
                ${s.map(d=>{const h=this.parseColor(d);return h?p`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${$(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${d}
                      @click=${()=>this.selectSwatch(d)}
                      @keydown=${u=>!this.disabled&&u.key==="Enter"&&this.setColor(h.hexa)}
                    >
                      <div class="swatch-color" style=${et({backgroundColor:h.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return p`
      <div
        class=${z({container:!0,"form-control":!0,"form-control-has-label":i})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${z({label:!0,"has-label":i})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${z({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${et({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${z({"has-slotted":o})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement="bottom-start"
        distance="0"
        skidding="0"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${l}
      </wa-popup>
    `}};R.css=[zn,Et,Ne,Eh];R.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y('[part~="base"]')],R.prototype,"base",2);n([y('[part~="input"]')],R.prototype,"input",2);n([y('[part~="form-control-label"]')],R.prototype,"triggerLabel",2);n([y('[part~="form-control-input"]')],R.prototype,"triggerButton",2);n([y(".color-popup")],R.prototype,"popup",2);n([y('[part~="preview"]')],R.prototype,"previewButton",2);n([y('[part~="trigger"]')],R.prototype,"trigger",2);n([w()],R.prototype,"hasFocus",2);n([w()],R.prototype,"isDraggingGridHandle",2);n([w()],R.prototype,"isEmpty",2);n([w()],R.prototype,"inputValue",2);n([w()],R.prototype,"hue",2);n([w()],R.prototype,"saturation",2);n([w()],R.prototype,"brightness",2);n([w()],R.prototype,"alpha",2);n([w()],R.prototype,"value",1);n([c({attribute:"value",reflect:!0})],R.prototype,"defaultValue",2);n([c({attribute:"with-label",reflect:!0,type:Boolean})],R.prototype,"withLabel",2);n([c({attribute:"with-hint",reflect:!0,type:Boolean})],R.prototype,"withHint",2);n([w()],R.prototype,"hasEyeDropper",2);n([c()],R.prototype,"label",2);n([c({attribute:"hint"})],R.prototype,"hint",2);n([c()],R.prototype,"format",2);n([c({reflect:!0})],R.prototype,"size",2);n([c({attribute:"without-format-toggle",type:Boolean})],R.prototype,"withoutFormatToggle",2);n([c({reflect:!0})],R.prototype,"name",2);n([c({type:Boolean})],R.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],R.prototype,"open",2);n([c({type:Boolean})],R.prototype,"opacity",2);n([c({type:Boolean})],R.prototype,"uppercase",2);n([c()],R.prototype,"swatches",2);n([c({type:Boolean,reflect:!0})],R.prototype,"required",2);n([Fr({passive:!1})],R.prototype,"handleTouchMove",1);n([x("format",{waitUntilFirstUpdate:!0})],R.prototype,"handleFormatChange",1);n([x("opacity")],R.prototype,"handleOpacityChange",1);n([x("value")],R.prototype,"handleValueChange",1);n([x("open",{waitUntilFirstUpdate:!0})],R.prototype,"handleOpenChange",1);R=n([v("wa-color-picker")],R);var Rn=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function Za(t,e){const i=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!i&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&Bh(e)})}function Bh(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;const i=[...e.elements];if(i.length===1){e.requestSubmit(null);return}const o=i.find(r=>r.type==="submit"&&!r.matches(":disabled"));o&&(["input","button"].includes(o.localName)?e.requestSubmit(o):o.click())}var Vh=k`
  :host {
    border-width: 0;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;var I=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new qt(this,"hint","label"),this.localize=new U(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Wo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new Rn),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){Za(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),(t.has("value")||t.has("defaultValue"))&&(this.customStates.set("blank",!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const r=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,r,a,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,o=this.hint?!0:!!e,r=this.withClear&&!this.disabled&&!this.readonly,a=this.hasUpdated&&r&&(typeof this.value=="number"||this.value&&this.value.length>0);return p`
      <label
        part="form-control-label label"
        class=${z({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${$(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${$(this.placeholder)}
          minlength=${$(this.minlength)}
          maxlength=${$(this.maxlength)}
          min=${$(this.min)}
          max=${$(this.max)}
          step=${$(this.step)}
          .value=${Di(this.value??"")}
          autocapitalize=${$(this.autocapitalize)}
          autocomplete=${$(this.autocomplete)}
          autocorrect=${$(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${$(this.pattern)}
          enterkeyhint=${$(this.enterkeyhint)}
          inputmode=${$(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?p`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?p`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?p`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:p`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${z({"has-slotted":o})}
        aria-hidden=${o?"false":"true"}
        >${this.hint}</slot
      >
    `}};I.css=[Et,Ne,Vh];I.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y("input")],I.prototype,"input",2);n([c()],I.prototype,"title",2);n([c({reflect:!0})],I.prototype,"type",2);n([w()],I.prototype,"value",1);n([c({attribute:"value",reflect:!0})],I.prototype,"defaultValue",2);n([c({reflect:!0})],I.prototype,"size",2);n([c({reflect:!0})],I.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],I.prototype,"pill",2);n([c()],I.prototype,"label",2);n([c({attribute:"hint"})],I.prototype,"hint",2);n([c({attribute:"with-clear",type:Boolean})],I.prototype,"withClear",2);n([c()],I.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],I.prototype,"readonly",2);n([c({attribute:"password-toggle",type:Boolean})],I.prototype,"passwordToggle",2);n([c({attribute:"password-visible",type:Boolean})],I.prototype,"passwordVisible",2);n([c({attribute:"without-spin-buttons",type:Boolean})],I.prototype,"withoutSpinButtons",2);n([c({type:Boolean,reflect:!0})],I.prototype,"required",2);n([c()],I.prototype,"pattern",2);n([c({type:Number})],I.prototype,"minlength",2);n([c({type:Number})],I.prototype,"maxlength",2);n([c()],I.prototype,"min",2);n([c()],I.prototype,"max",2);n([c()],I.prototype,"step",2);n([c()],I.prototype,"autocapitalize",2);n([c()],I.prototype,"autocorrect",2);n([c()],I.prototype,"autocomplete",2);n([c({type:Boolean})],I.prototype,"autofocus",2);n([c()],I.prototype,"enterkeyhint",2);n([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],I.prototype,"spellcheck",2);n([c()],I.prototype,"inputmode",2);n([c({attribute:"with-label",type:Boolean})],I.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],I.prototype,"withHint",2);n([x("step",{waitUntilFirstUpdate:!0})],I.prototype,"handleStepChange",1);I=n([v("wa-input")],I);var Dn=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var Uh=k`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: 100ms;
    --hide-duration: 100ms;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;const hi=Math.min,Yt=Math.max,yr=Math.round,sr=Math.floor,Ie=t=>({x:t,y:t}),qh={left:"right",right:"left",bottom:"top",top:"bottom"};function Ta(t,e,i){return Yt(t,hi(e,i))}function wo(t,e){return typeof t=="function"?t(e):t}function ui(t){return t.split("-")[0]}function vo(t){return t.split("-")[1]}function In(t){return t==="x"?"y":"x"}function Qa(t){return t==="y"?"height":"width"}function We(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function Ja(t){return In(We(t))}function Hh(t,e,i){i===void 0&&(i=!1);const o=vo(t),r=Ja(t),a=Qa(r);let s=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(s=xr(s)),[s,xr(s)]}function Wh(t){const e=xr(t);return[Ra(t),e,Ra(e)]}function Ra(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Ns=["left","right"],Bs=["right","left"],jh=["top","bottom"],Kh=["bottom","top"];function Gh(t,e,i){switch(t){case"top":case"bottom":return i?e?Bs:Ns:e?Ns:Bs;case"left":case"right":return e?jh:Kh;default:return[]}}function Xh(t,e,i,o){const r=vo(t);let a=Gh(ui(t),i==="start",o);return r&&(a=a.map(s=>s+"-"+r),e&&(a=a.concat(a.map(Ra)))),a}function xr(t){const e=ui(t);return qh[e]+t.slice(e.length)}function Yh(t){return{top:0,right:0,bottom:0,left:0,...t}}function _n(t){return typeof t!="number"?Yh(t):{top:t,right:t,bottom:t,left:t}}function kr(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function Vs(t,e,i){let{reference:o,floating:r}=t;const a=We(e),s=Ja(e),l=Qa(s),d=ui(e),h=a==="y",u=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,m=o[l]/2-r[l]/2;let g;switch(d){case"top":g={x:u,y:o.y-r.height};break;case"bottom":g={x:u,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:f};break;case"left":g={x:o.x-r.width,y:f};break;default:g={x:o.x,y:o.y}}switch(vo(e)){case"start":g[s]-=m*(i&&h?-1:1);break;case"end":g[s]+=m*(i&&h?-1:1);break}return g}async function Zh(t,e){var i;e===void 0&&(e={});const{x:o,y:r,platform:a,rects:s,elements:l,strategy:d}=t,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:m=!1,padding:g=0}=wo(e,t),b=_n(g),E=l[m?f==="floating"?"reference":"floating":f],L=kr(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement(E)))==null||i?E:E.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:h,rootBoundary:u,strategy:d})),S=f==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,T=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating)),q=await(a.isElement==null?void 0:a.isElement(T))?await(a.getScale==null?void 0:a.getScale(T))||{x:1,y:1}:{x:1,y:1},j=kr(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:S,offsetParent:T,strategy:d}):S);return{top:(L.top-j.top+b.top)/q.y,bottom:(j.bottom-L.bottom+b.bottom)/q.y,left:(L.left-j.left+b.left)/q.x,right:(j.right-L.right+b.right)/q.x}}const Qh=50,Jh=async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:s}=i,l=s.detectOverflow?s:{...s,detectOverflow:Zh},d=await(s.isRTL==null?void 0:s.isRTL(e));let h=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:f}=Vs(h,o,d),m=o,g=0;const b={};for(let C=0;C<a.length;C++){const E=a[C];if(!E)continue;const{name:L,fn:S}=E,{x:T,y:q,data:j,reset:Y}=await S({x:u,y:f,initialPlacement:o,placement:m,strategy:r,middlewareData:b,rects:h,platform:l,elements:{reference:t,floating:e}});u=T??u,f=q??f,b[L]={...b[L],...j},Y&&g<Qh&&(g++,typeof Y=="object"&&(Y.placement&&(m=Y.placement),Y.rects&&(h=Y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):Y.rects),{x:u,y:f}=Vs(h,m,d)),C=-1)}return{x:u,y:f,placement:m,strategy:r,middlewareData:b}},tu=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:r,rects:a,platform:s,elements:l,middlewareData:d}=e,{element:h,padding:u=0}=wo(t,e)||{};if(h==null)return{};const f=_n(u),m={x:i,y:o},g=Ja(r),b=Qa(g),C=await s.getDimensions(h),E=g==="y",L=E?"top":"left",S=E?"bottom":"right",T=E?"clientHeight":"clientWidth",q=a.reference[b]+a.reference[g]-m[g]-a.floating[b],j=m[g]-a.reference[g],Y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(h));let dt=Y?Y[T]:0;(!dt||!await(s.isElement==null?void 0:s.isElement(Y)))&&(dt=l.floating[T]||a.floating[b]);const ne=q/2-j/2,Wt=dt/2-C[b]/2-1,Lt=hi(f[L],Wt),le=hi(f[S],Wt),At=Lt,ce=dt-C[b]-le,ht=dt/2-C[b]/2+ne,Si=Ta(At,ht,ce),Ue=!d.arrow&&vo(r)!=null&&ht!==Si&&a.reference[b]/2-(ht<At?Lt:le)-C[b]/2<0,de=Ue?ht<At?ht-At:ht-ce:0;return{[g]:m[g]+de,data:{[g]:Si,centerOffset:ht-Si-de,...Ue&&{alignmentOffset:de}},reset:Ue}}}),eu=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:a,rects:s,initialPlacement:l,platform:d,elements:h}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:C=!0,...E}=wo(t,e);if((i=a.arrow)!=null&&i.alignmentOffset)return{};const L=ui(r),S=We(l),T=ui(l)===l,q=await(d.isRTL==null?void 0:d.isRTL(h.floating)),j=m||(T||!C?[xr(l)]:Wh(l)),Y=b!=="none";!m&&Y&&j.push(...Xh(l,C,b,q));const dt=[l,...j],ne=await d.detectOverflow(e,E),Wt=[];let Lt=((o=a.flip)==null?void 0:o.overflows)||[];if(u&&Wt.push(ne[L]),f){const ht=Hh(r,s,q);Wt.push(ne[ht[0]],ne[ht[1]])}if(Lt=[...Lt,{placement:r,overflows:Wt}],!Wt.every(ht=>ht<=0)){var le,At;const ht=(((le=a.flip)==null?void 0:le.index)||0)+1,Si=dt[ht];if(Si&&(!(f==="alignment"?S!==We(Si):!1)||Lt.every(he=>We(he.placement)===S?he.overflows[0]>0:!0)))return{data:{index:ht,overflows:Lt},reset:{placement:Si}};let Ue=(At=Lt.filter(de=>de.overflows[0]<=0).sort((de,he)=>de.overflows[1]-he.overflows[1])[0])==null?void 0:At.placement;if(!Ue)switch(g){case"bestFit":{var ce;const de=(ce=Lt.filter(he=>{if(Y){const oi=We(he.placement);return oi===S||oi==="y"}return!0}).map(he=>[he.placement,he.overflows.filter(oi=>oi>0).reduce((oi,Dl)=>oi+Dl,0)]).sort((he,oi)=>he[1]-oi[1])[0])==null?void 0:ce[0];de&&(Ue=de);break}case"initialPlacement":Ue=l;break}if(r!==Ue)return{reset:{placement:Ue}}}return{}}}},iu=new Set(["left","top"]);async function ou(t,e){const{placement:i,platform:o,elements:r}=t,a=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=ui(i),l=vo(i),d=We(i)==="y",h=iu.has(s)?-1:1,u=a&&d?-1:1,f=wo(e,t);let{mainAxis:m,crossAxis:g,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return l&&typeof b=="number"&&(g=l==="end"?b*-1:b),d?{x:g*u,y:m*h}:{x:m*h,y:g*u}}const ru=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:r,y:a,placement:s,middlewareData:l}=e,d=await ou(e,t);return s===((i=l.offset)==null?void 0:i.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+d.x,y:a+d.y,data:{...d,placement:s}}}}},au=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r,platform:a}=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:d={fn:L=>{let{x:S,y:T}=L;return{x:S,y:T}}},...h}=wo(t,e),u={x:i,y:o},f=await a.detectOverflow(e,h),m=We(ui(r)),g=In(m);let b=u[g],C=u[m];if(s){const L=g==="y"?"top":"left",S=g==="y"?"bottom":"right",T=b+f[L],q=b-f[S];b=Ta(T,b,q)}if(l){const L=m==="y"?"top":"left",S=m==="y"?"bottom":"right",T=C+f[L],q=C-f[S];C=Ta(T,C,q)}const E=d.fn({...e,[g]:b,[m]:C});return{...E,data:{x:E.x-i,y:E.y-o,enabled:{[g]:s,[m]:l}}}}}},su=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:r,rects:a,platform:s,elements:l}=e,{apply:d=()=>{},...h}=wo(t,e),u=await s.detectOverflow(e,h),f=ui(r),m=vo(r),g=We(r)==="y",{width:b,height:C}=a.floating;let E,L;f==="top"||f==="bottom"?(E=f,L=m===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(L=f,E=m==="end"?"top":"bottom");const S=C-u.top-u.bottom,T=b-u.left-u.right,q=hi(C-u[E],S),j=hi(b-u[L],T),Y=!e.middlewareData.shift;let dt=q,ne=j;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(ne=T),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(dt=S),Y&&!m){const Lt=Yt(u.left,0),le=Yt(u.right,0),At=Yt(u.top,0),ce=Yt(u.bottom,0);g?ne=b-2*(Lt!==0||le!==0?Lt+le:Yt(u.left,u.right)):dt=C-2*(At!==0||ce!==0?At+ce:Yt(u.top,u.bottom))}await d({...e,availableWidth:ne,availableHeight:dt});const Wt=await s.getDimensions(l.floating);return b!==Wt.width||C!==Wt.height?{reset:{rects:!0}}:{}}}};function Vr(){return typeof window<"u"}function yo(t){return On(t)?(t.nodeName||"").toLowerCase():"#document"}function Qt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Be(t){var e;return(e=(On(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function On(t){return Vr()?t instanceof Node||t instanceof Qt(t).Node:!1}function ye(t){return Vr()?t instanceof Element||t instanceof Qt(t).Element:!1}function ti(t){return Vr()?t instanceof HTMLElement||t instanceof Qt(t).HTMLElement:!1}function Us(t){return!Vr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Qt(t).ShadowRoot}function jo(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=xe(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&r!=="inline"&&r!=="contents"}function nu(t){return/^(table|td|th)$/.test(yo(t))}function Ur(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const lu=/transform|translate|scale|rotate|perspective|filter/,cu=/paint|layout|strict|content/,$i=t=>!!t&&t!=="none";let la;function qr(t){const e=ye(t)?xe(t):t;return $i(e.transform)||$i(e.translate)||$i(e.scale)||$i(e.rotate)||$i(e.perspective)||!ts()&&($i(e.backdropFilter)||$i(e.filter))||lu.test(e.willChange||"")||cu.test(e.contain||"")}function du(t){let e=pi(t);for(;ti(e)&&!ao(e);){if(qr(e))return e;if(Ur(e))return null;e=pi(e)}return null}function ts(){return la==null&&(la=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),la}function ao(t){return/^(html|body|#document)$/.test(yo(t))}function xe(t){return Qt(t).getComputedStyle(t)}function Hr(t){return ye(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function pi(t){if(yo(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Us(t)&&t.host||Be(t);return Us(e)?e.host:e}function Pn(t){const e=pi(t);return ao(e)?t.ownerDocument?t.ownerDocument.body:t.body:ti(e)&&jo(e)?e:Pn(e)}function so(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=Pn(t),a=r===((o=t.ownerDocument)==null?void 0:o.body),s=Qt(r);if(a){const l=Da(s);return e.concat(s,s.visualViewport||[],jo(r)?r:[],l&&i?so(l):[])}else return e.concat(r,so(r,[],i))}function Da(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Fn(t){const e=xe(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=ti(t),a=r?t.offsetWidth:i,s=r?t.offsetHeight:o,l=yr(i)!==a||yr(o)!==s;return l&&(i=a,o=s),{width:i,height:o,$:l}}function es(t){return ye(t)?t:t.contextElement}function io(t){const e=es(t);if(!ti(e))return Ie(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:a}=Fn(e);let s=(a?yr(i.width):i.width)/o,l=(a?yr(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const hu=Ie(0);function Mn(t){const e=Qt(t);return!ts()||!e.visualViewport?hu:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function uu(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==Qt(t)?!1:e}function _i(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),a=es(t);let s=Ie(1);e&&(o?ye(o)&&(s=io(o)):s=io(t));const l=uu(a,i,o)?Mn(a):Ie(0);let d=(r.left+l.x)/s.x,h=(r.top+l.y)/s.y,u=r.width/s.x,f=r.height/s.y;if(a){const m=Qt(a),g=o&&ye(o)?Qt(o):o;let b=m,C=Da(b);for(;C&&o&&g!==b;){const E=io(C),L=C.getBoundingClientRect(),S=xe(C),T=L.left+(C.clientLeft+parseFloat(S.paddingLeft))*E.x,q=L.top+(C.clientTop+parseFloat(S.paddingTop))*E.y;d*=E.x,h*=E.y,u*=E.x,f*=E.y,d+=T,h+=q,b=Qt(C),C=Da(b)}}return kr({width:u,height:f,x:d,y:h})}function Wr(t,e){const i=Hr(t).scrollLeft;return e?e.left+i:_i(Be(t)).left+i}function Nn(t,e){const i=t.getBoundingClientRect(),o=i.left+e.scrollLeft-Wr(t,i),r=i.top+e.scrollTop;return{x:o,y:r}}function pu(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const a=r==="fixed",s=Be(o),l=e?Ur(e.floating):!1;if(o===s||l&&a)return i;let d={scrollLeft:0,scrollTop:0},h=Ie(1);const u=Ie(0),f=ti(o);if((f||!f&&!a)&&((yo(o)!=="body"||jo(s))&&(d=Hr(o)),f)){const g=_i(o);h=io(o),u.x=g.x+o.clientLeft,u.y=g.y+o.clientTop}const m=s&&!f&&!a?Nn(s,d):Ie(0);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-d.scrollLeft*h.x+u.x+m.x,y:i.y*h.y-d.scrollTop*h.y+u.y+m.y}}function fu(t){return Array.from(t.getClientRects())}function mu(t){const e=Be(t),i=Hr(t),o=t.ownerDocument.body,r=Yt(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),a=Yt(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+Wr(t);const l=-i.scrollTop;return xe(o).direction==="rtl"&&(s+=Yt(e.clientWidth,o.clientWidth)-r),{width:r,height:a,x:s,y:l}}const qs=25;function gu(t,e){const i=Qt(t),o=Be(t),r=i.visualViewport;let a=o.clientWidth,s=o.clientHeight,l=0,d=0;if(r){a=r.width,s=r.height;const u=ts();(!u||u&&e==="fixed")&&(l=r.offsetLeft,d=r.offsetTop)}const h=Wr(o);if(h<=0){const u=o.ownerDocument,f=u.body,m=getComputedStyle(f),g=u.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,b=Math.abs(o.clientWidth-f.clientWidth-g);b<=qs&&(a-=b)}else h<=qs&&(a+=h);return{width:a,height:s,x:l,y:d}}function bu(t,e){const i=_i(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,a=ti(t)?io(t):Ie(1),s=t.clientWidth*a.x,l=t.clientHeight*a.y,d=r*a.x,h=o*a.y;return{width:s,height:l,x:d,y:h}}function Hs(t,e,i){let o;if(e==="viewport")o=gu(t,i);else if(e==="document")o=mu(Be(t));else if(ye(e))o=bu(e,i);else{const r=Mn(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return kr(o)}function Bn(t,e){const i=pi(t);return i===e||!ye(i)||ao(i)?!1:xe(i).position==="fixed"||Bn(i,e)}function wu(t,e){const i=e.get(t);if(i)return i;let o=so(t,[],!1).filter(l=>ye(l)&&yo(l)!=="body"),r=null;const a=xe(t).position==="fixed";let s=a?pi(t):t;for(;ye(s)&&!ao(s);){const l=xe(s),d=qr(s);!d&&l.position==="fixed"&&(r=null),(a?!d&&!r:!d&&l.position==="static"&&!!r&&(r.position==="absolute"||r.position==="fixed")||jo(s)&&!d&&Bn(t,s))?o=o.filter(u=>u!==s):r=l,s=pi(s)}return e.set(t,o),o}function vu(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const s=[...i==="clippingAncestors"?Ur(e)?[]:wu(e,this._c):[].concat(i),o],l=Hs(e,s[0],r);let d=l.top,h=l.right,u=l.bottom,f=l.left;for(let m=1;m<s.length;m++){const g=Hs(e,s[m],r);d=Yt(g.top,d),h=hi(g.right,h),u=hi(g.bottom,u),f=Yt(g.left,f)}return{width:h-f,height:u-d,x:f,y:d}}function yu(t){const{width:e,height:i}=Fn(t);return{width:e,height:i}}function xu(t,e,i){const o=ti(e),r=Be(e),a=i==="fixed",s=_i(t,!0,a,e);let l={scrollLeft:0,scrollTop:0};const d=Ie(0);function h(){d.x=Wr(r)}if(o||!o&&!a)if((yo(e)!=="body"||jo(r))&&(l=Hr(e)),o){const g=_i(e,!0,a,e);d.x=g.x+e.clientLeft,d.y=g.y+e.clientTop}else r&&h();a&&!o&&r&&h();const u=r&&!o&&!a?Nn(r,l):Ie(0),f=s.left+l.scrollLeft-d.x-u.x,m=s.top+l.scrollTop-d.y-u.y;return{x:f,y:m,width:s.width,height:s.height}}function ca(t){return xe(t).position==="static"}function Ws(t,e){if(!ti(t)||xe(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return Be(t)===i&&(i=i.ownerDocument.body),i}function Vn(t,e){const i=Qt(t);if(Ur(t))return i;if(!ti(t)){let r=pi(t);for(;r&&!ao(r);){if(ye(r)&&!ca(r))return r;r=pi(r)}return i}let o=Ws(t,e);for(;o&&nu(o)&&ca(o);)o=Ws(o,e);return o&&ao(o)&&ca(o)&&!qr(o)?i:o||du(t)||i}const ku=async function(t){const e=this.getOffsetParent||Vn,i=this.getDimensions,o=await i(t.floating);return{reference:xu(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Cu(t){return xe(t).direction==="rtl"}const hr={convertOffsetParentRelativeRectToViewportRelativeRect:pu,getDocumentElement:Be,getClippingRect:vu,getOffsetParent:Vn,getElementRects:ku,getClientRects:fu,getDimensions:yu,getScale:io,isElement:ye,isRTL:Cu};function Un(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Su(t,e){let i=null,o;const r=Be(t);function a(){var l;clearTimeout(o),(l=i)==null||l.disconnect(),i=null}function s(l,d){l===void 0&&(l=!1),d===void 0&&(d=1),a();const h=t.getBoundingClientRect(),{left:u,top:f,width:m,height:g}=h;if(l||e(),!m||!g)return;const b=sr(f),C=sr(r.clientWidth-(u+m)),E=sr(r.clientHeight-(f+g)),L=sr(u),T={rootMargin:-b+"px "+-C+"px "+-E+"px "+-L+"px",threshold:Yt(0,hi(1,d))||1};let q=!0;function j(Y){const dt=Y[0].intersectionRatio;if(dt!==d){if(!q)return s();dt?s(!1,dt):o=setTimeout(()=>{s(!1,1e-7)},1e3)}dt===1&&!Un(h,t.getBoundingClientRect())&&s(),q=!1}try{i=new IntersectionObserver(j,{...T,root:r.ownerDocument})}catch{i=new IntersectionObserver(j,T)}i.observe(t)}return s(!0),a}function qn(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,h=es(t),u=r||a?[...h?so(h):[],...e?so(e):[]]:[];u.forEach(L=>{r&&L.addEventListener("scroll",i,{passive:!0}),a&&L.addEventListener("resize",i)});const f=h&&l?Su(h,i):null;let m=-1,g=null;s&&(g=new ResizeObserver(L=>{let[S]=L;S&&S.target===h&&g&&e&&(g.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var T;(T=g)==null||T.observe(e)})),i()}),h&&!d&&g.observe(h),e&&g.observe(e));let b,C=d?_i(t):null;d&&E();function E(){const L=_i(t);C&&!Un(C,L)&&i(),C=L,b=requestAnimationFrame(E)}return i(),()=>{var L;u.forEach(S=>{r&&S.removeEventListener("scroll",i),a&&S.removeEventListener("resize",i)}),f?.(),(L=g)==null||L.disconnect(),g=null,d&&cancelAnimationFrame(b)}}const Hn=ru,Wn=au,jn=eu,js=su,$u=tu,Kn=(t,e,i)=>{const o=new Map,r={platform:hr,...i},a={...r.platform,_c:o};return Jh(t,e,{...r,platform:a})};function Eu(t){return Lu(t)}function da(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Lu(t){for(let e=t;e;e=da(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=da(t);e;e=da(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||qr(i)||e.tagName==="BODY"))return e}return null}function Ks(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var nr=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),X=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,a=0,s=0,l=0,d=0,h=0,u=0;i?t.top<e.top?(o=t.left,r=t.bottom,a=t.right,s=t.bottom,l=e.left,d=e.top,h=e.right,u=e.top):(o=e.left,r=e.bottom,a=e.right,s=e.bottom,l=t.left,d=t.top,h=t.right,u=t.top):t.left<e.left?(o=t.right,r=t.top,a=e.left,s=e.top,l=t.right,d=t.bottom,h=e.left,u=e.bottom):(o=e.right,r=e.top,a=t.left,s=t.top,l=e.right,d=e.bottom,h=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ks(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=qn(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;const t=[Hn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(js({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",a=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=a?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;nr&&!Ks(this.anchor)&&this.boundary==="scroll"&&(e=so(this.anchorEl).filter(o=>o instanceof Element)),this.flip&&t.push(jn({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Wn({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(js({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push($u({element:this.arrowEl,padding:this.arrowPadding}));const i=nr?o=>hr.getOffsetParent(o,Eu):hr.getOffsetParent;Kn(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:nr?"absolute":"fixed",platform:{...hr,getOffsetParent:i}}).then(({x:o,y:r,middlewareData:a,placement:s})=>{const l=this.localize.dir()==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const h=a.arrow.x,u=a.arrow.y;let f="",m="",g="",b="";if(this.arrowPlacement==="start"){const C=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=l?C:"",b=l?"":C}else if(this.arrowPlacement==="end"){const C=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=l?"":C,b=l?C:"",g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(b=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(b=typeof h=="number"?`${h}px`:"",f=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:f,right:m,bottom:g,left:b,[d]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Dn)}render(){return p`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${z({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${z({popup:!0,"popup-active":this.active,"popup-fixed":!nr,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?p`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};X.css=Uh;n([y(".popup")],X.prototype,"popup",2);n([y(".arrow")],X.prototype,"arrowEl",2);n([c()],X.prototype,"anchor",2);n([c({type:Boolean,reflect:!0})],X.prototype,"active",2);n([c({reflect:!0})],X.prototype,"placement",2);n([c()],X.prototype,"boundary",2);n([c({type:Number})],X.prototype,"distance",2);n([c({type:Number})],X.prototype,"skidding",2);n([c({type:Boolean})],X.prototype,"arrow",2);n([c({attribute:"arrow-placement"})],X.prototype,"arrowPlacement",2);n([c({attribute:"arrow-padding",type:Number})],X.prototype,"arrowPadding",2);n([c({type:Boolean})],X.prototype,"flip",2);n([c({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],X.prototype,"flipFallbackPlacements",2);n([c({attribute:"flip-fallback-strategy"})],X.prototype,"flipFallbackStrategy",2);n([c({type:Object})],X.prototype,"flipBoundary",2);n([c({attribute:"flip-padding",type:Number})],X.prototype,"flipPadding",2);n([c({type:Boolean})],X.prototype,"shift",2);n([c({type:Object})],X.prototype,"shiftBoundary",2);n([c({attribute:"shift-padding",type:Number})],X.prototype,"shiftPadding",2);n([c({attribute:"auto-size"})],X.prototype,"autoSize",2);n([c()],X.prototype,"sync",2);n([c({type:Object})],X.prototype,"autoSizeBoundary",2);n([c({attribute:"auto-size-padding",type:Number})],X.prototype,"autoSizePadding",2);n([c({attribute:"hover-bridge",type:Boolean})],X.prototype,"hoverBridge",2);X=n([v("wa-popup")],X);var Au=k`
  :host {
    --divider-width: 0.125rem;
    --handle-size: 2.5rem;

    display: block;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .before,
  .after {
    display: block;

    &::slotted(img),
    &::slotted(svg) {
      display: block;
      max-width: 100% !important;
      height: auto;
    }

    &::slotted(:not(img, svg)) {
      isolation: isolate;
    }
  }

  .after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  /* Disable pointer-events while dragging. This is especially important for iframes. */
  :host(:state(dragging)) {
    .before,
    .after {
      pointer-events: none;
    }
  }

  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--wa-color-surface-default);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.4);
    color: var(--wa-color-neutral-on-quiet);
    cursor: inherit;
    z-index: 10;
  }

  .handle:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
`;var no=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.position=50}handleDrag(t){const{width:e}=this.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),Fo(this,{onMove:o=>{this.customStates.set("dragging",!0),this.position=parseFloat(_(o/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:t})}handleKeyDown(t){const e=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const o=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(r-=o),(e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(r+=o),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=_(r,0,100),this.position=r}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${et({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${et({left:t?`${100-this.position}%`:`${this.position}%`})}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <div
          part="handle"
          class="handle"
          role="scrollbar"
          aria-valuenow=${this.position}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-controls="comparison"
          tabindex="0"
        >
          <slot name="handle">
            <wa-icon library="system" name="grip-vertical" variant="solid"></wa-icon>
          </slot>
        </div>
      </div>
    `}};no.css=Au;n([y(".handle")],no.prototype,"handle",2);n([c({type:Number,reflect:!0})],no.prototype,"position",2);n([x("position",{waitUntilFirstUpdate:!0})],no.prototype,"handlePositionChange",1);no=n([v("wa-comparison")],no);var zu=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Tu=k`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    padding: 0.5em;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  slot[name='success-icon'] {
    color: var(--wa-color-success-on-quiet);
  }

  slot[name='error-icon'] {
    color: var(--wa-color-danger-on-quiet);
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  .show {
    animation: show 100ms ease;
  }

  .hide {
    animation: show 100ms ease reverse;
  }

  @keyframes show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;var wt=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let r=this.from,a="";i?[r,a]=this.from.trim().split("."):o&&([r,a]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in e?e.getElementById(r):null;s?o?t=s.getAttribute(a)||"":i?t=s[a]||"":t=s.textContent||"":(this.showStatus("error"),this.dispatchEvent(new eo))}if(!t)this.showStatus("error"),this.dispatchEvent(new eo);else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new zu({value:t}))}catch{this.showStatus("error"),this.dispatchEvent(new eo)}}async showStatus(t){const e=t==="success"?this.successIcon:this.errorIcon;await J(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=t,e.hidden=!1,await J(e,"show"),setTimeout(async()=>{await J(e,"hide"),e.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await J(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return p`
      <button
        class="button"
        part="button"
        type="button"
        id="copy-button"
        ?disabled=${this.disabled}
        @click=${this.handleCopy}
      >
        <!-- Render a visually hidden label to appease the accessibility checking gods -->
        <span class="wa-visually-hidden">${this.currentLabel}</span>
        <slot part="copy-icon" name="copy-icon">
          <wa-icon library="system" name="copy" variant="regular"></wa-icon>
        </slot>
        <slot part="success-icon" name="success-icon" variant="solid" hidden>
          <wa-icon library="system" name="check"></wa-icon>
        </slot>
        <slot part="error-icon" name="error-icon" variant="solid" hidden>
          <wa-icon library="system" name="xmark"></wa-icon>
        </slot>
        <wa-tooltip
          class=${z({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
          for="copy-button"
          placement=${this.tooltipPlacement}
          ?disabled=${this.disabled}
          exportparts="
            base:tooltip__base,
            base__popup:tooltip__base__popup,
            base__arrow:tooltip__base__arrow,
            body:tooltip__body
          "
          >${this.currentLabel}</wa-tooltip
        >
      </button>
    `}};wt.css=[zn,Tu];n([y('slot[name="copy-icon"]')],wt.prototype,"copyIcon",2);n([y('slot[name="success-icon"]')],wt.prototype,"successIcon",2);n([y('slot[name="error-icon"]')],wt.prototype,"errorIcon",2);n([y("wa-tooltip")],wt.prototype,"tooltip",2);n([w()],wt.prototype,"isCopying",2);n([w()],wt.prototype,"status",2);n([c()],wt.prototype,"value",2);n([c()],wt.prototype,"from",2);n([c({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);n([c({attribute:"copy-label"})],wt.prototype,"copyLabel",2);n([c({attribute:"success-label"})],wt.prototype,"successLabel",2);n([c({attribute:"error-label"})],wt.prototype,"errorLabel",2);n([c({attribute:"feedback-duration",type:Number})],wt.prototype,"feedbackDuration",2);n([c({attribute:"tooltip-placement"})],wt.prototype,"tooltipPlacement",2);wt=n([v("wa-copy-button")],wt);var Ru=k`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    &::part(arrow) {
      border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
      border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    }
  }
`;var qi=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Hi=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var Wi=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var ji=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var st=class extends A{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&Pe(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=!!this.anchor?.matches(":hover"),e=this.matches(":hover");if(t||e)return;clearTimeout(this.hoverTimeout),t||e||(this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay))}}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Nr("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),Oe(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){const o=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);o.includes(e)||(o.push(e),t.setAttribute("aria-labelledby",o.join(" ")))}removeFromAriaLabelledBy(t,e){const r=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(a=>a!==e);r.length>0?t.setAttribute("aria-labelledby",r.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const t=new qi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),Ui(this),this.body.hidden=!1,this.popup.active=!0,await J(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new ji)}else{const t=new Hi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),Oe(this),await J(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Wi)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,i=this.anchor;if(e===i)return;const{signal:o}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:o}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:o}),e.addEventListener("click",this.handleClick,{signal:o}),e.addEventListener("mouseover",this.handleMouseOver,{signal:o}),e.addEventListener("mouseout",this.handleMouseOut,{signal:o})),i&&(this.removeFromAriaLabelledBy(i,this.id),i.removeEventListener("blur",this.handleBlur,{capture:!0}),i.removeEventListener("focus",this.handleFocus,{capture:!0}),i.removeEventListener("click",this.handleClick),i.removeEventListener("mouseover",this.handleMouseOver),i.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ve(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,ve(this,"wa-after-hide")}render(){return p`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${z({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};st.css=Ru;st.dependencies={"wa-popup":X};n([y("slot:not([name])")],st.prototype,"defaultSlot",2);n([y(".body")],st.prototype,"body",2);n([y("wa-popup")],st.prototype,"popup",2);n([c()],st.prototype,"placement",2);n([c({type:Boolean,reflect:!0})],st.prototype,"disabled",2);n([c({type:Number})],st.prototype,"distance",2);n([c({type:Boolean,reflect:!0})],st.prototype,"open",2);n([c({type:Number})],st.prototype,"skidding",2);n([c({attribute:"show-delay",type:Number})],st.prototype,"showDelay",2);n([c({attribute:"hide-delay",type:Number})],st.prototype,"hideDelay",2);n([c()],st.prototype,"trigger",2);n([c({attribute:"without-arrow",type:Boolean,reflect:!0})],st.prototype,"withoutArrow",2);n([c()],st.prototype,"for",2);n([w()],st.prototype,"anchor",2);n([x("open",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpenChange",1);n([x("for")],st.prototype,"handleForChange",1);n([x(["distance","placement","skidding"])],st.prototype,"handleOptionsChange",1);n([x("disabled")],st.prototype,"handleDisabledChange",1);st=n([v("wa-tooltip")],st);var Du=k`
  :host {
    --spacing: var(--wa-space-m);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: block;
  }

  details {
    display: block;
    overflow-anchor: none;
    border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-panel-border-radius);
    color: var(--wa-color-text-normal);

    /* Print styles */
    @media print {
      background: none;
      border: solid var(--wa-border-width-s) var(--wa-color-surface-border);

      summary {
        list-style: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) details {
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
  }

  :host([appearance='outlined']) details {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-border-quiet);
  }

  :host([disabled]) details {
    opacity: 0.5;
    cursor: not-allowed;
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing);
    padding: var(--spacing); /* Add padding here */
    border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));
    }
  }

  :host([open]) summary {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  /* 'Start' icon placement */
  :host([icon-placement='start']) summary {
    flex-direction: row-reverse;
    justify-content: start;
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-text-quiet);
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  :host([open]) [part~='icon'] {
    rotate: 90deg;
  }

  :host([open]:dir(rtl)) [part~='icon'] {
    rotate: -90deg;
  }

  :host([open]) slot[name='expand-icon'],
  :host(:not([open])) slot[name='collapse-icon'] {
    display: none;
  }

  .body.animating {
    overflow: hidden;
  }

  .content {
    display: block;
    padding-block-start: var(--spacing);
    padding-inline: var(--spacing); /* Add horizontal padding */
    padding-block-end: var(--spacing); /* Add bottom padding */
  }
`;var _t=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some(o=>{if(!(o instanceof HTMLElement))return!1;const r=o.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(r)?!0:o instanceof Q?!("disabled"in o)||!o.disabled:!1})||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(i=>{i!==this&&i.open&&(i.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const t=new qi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const e=vr(getComputedStyle(this.body).getPropertyValue("--show-duration"));await wr(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new ji)}else{const t=new Hi;if(this.dispatchEvent(t),t.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const e=vr(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await wr(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Wi)}}async show(){if(!(this.open||this.disabled))return this.open=!0,ve(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ve(this,"wa-after-hide")}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
      <details part="base">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${z({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};_t.css=Du;n([y("details")],_t.prototype,"details",2);n([y("summary")],_t.prototype,"header",2);n([y(".body")],_t.prototype,"body",2);n([y(".expand-icon-slot")],_t.prototype,"expandIconSlot",2);n([w()],_t.prototype,"isAnimating",2);n([c({type:Boolean,reflect:!0})],_t.prototype,"open",2);n([c()],_t.prototype,"summary",2);n([c({reflect:!0})],_t.prototype,"name",2);n([c({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);n([c({reflect:!0})],_t.prototype,"appearance",2);n([c({attribute:"icon-placement",reflect:!0})],_t.prototype,"iconPlacement",2);n([x("open",{waitUntilFirstUpdate:!0})],_t.prototype,"handleOpenChange",1);_t=n([v("wa-details")],_t);function Iu(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Ia=new Set;function _u(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ou(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Cr(t){if(Ia.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){const e=_u()+Ou();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),e<2&&(i=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",i),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${e}px`)}}function Sr(t){Ia.delete(t),Ia.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function _a(t,e,i="vertical",o="smooth"){const r=Iu(t,e),a=r.top+e.scrollTop,s=r.left+e.scrollLeft,l=e.scrollLeft,d=e.scrollLeft+e.offsetWidth,h=e.scrollTop,u=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(s<l?e.scrollTo({left:s,behavior:o}):s+t.clientWidth>d&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:o})),(i==="vertical"||i==="both")&&(a<h?e.scrollTo({top:a,behavior:o}):a+t.clientHeight>u&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:o}))}function jr(t){return t.split(" ").map(e=>e.trim()).filter(e=>e!=="")}var Pu=k`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`;var Ye=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.hasSlotController=new qt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&Pe(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),Cr(this))}disconnectedCallback(){super.disconnectedCallback(),Sr(this),this.removeOpenListeners()}async requestClose(t){const e=new Hi({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,J(this.dialog,"pulse");return}this.removeOpenListeners(),await J(this.dialog,"hide"),this.open=!1,this.dialog.close(),Sr(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new Wi)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Ui(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Oe(this)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&Pe(this)&&this.requestClose(this.dialog)}handleDialogClick(t){const i=t.target.closest('[data-dialog="close"]');i&&(t.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await J(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new qi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Cr(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await J(this.dialog,"show"),this.dispatchEvent(new ji)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return p`
      <dialog
        part="dialog"
        class=${z({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?p`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${i=>this.requestClose(i.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${e?p`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Ye.css=Pu;n([y(".dialog")],Ye.prototype,"dialog",2);n([c({type:Boolean,reflect:!0})],Ye.prototype,"open",2);n([c({reflect:!0})],Ye.prototype,"label",2);n([c({attribute:"without-header",type:Boolean,reflect:!0})],Ye.prototype,"withoutHeader",2);n([c({attribute:"light-dismiss",type:Boolean})],Ye.prototype,"lightDismiss",2);n([x("open",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleOpenChange",1);Ye=n([v("wa-dialog")],Ye);document.addEventListener("click",t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[i,o]=jr(e.getAttribute("data-dialog")||"");if(i==="open"&&o?.length){const a=e.getRootNode().getElementById(o);a?.localName==="wa-dialog"?a.open=!0:console.warn(`A dialog with an ID of "${o}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{});var Fu=k`
  :host {
    --color: var(--wa-color-surface-border);
    --width: var(--wa-border-width-s);
    --spacing: var(--wa-space-m);
  }

  :host(:not([orientation='vertical'])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([orientation='vertical']) {
    display: inline-block;
    height: 100%;
    border-inline-start: solid var(--width) var(--color);
    margin: 0 var(--spacing);
    min-block-size: 1lh;
  }
`;var No=class extends A{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};No.css=Fu;n([c({reflect:!0})],No.prototype,"orientation",2);n([x("orientation")],No.prototype,"handleVerticalChange",1);No=n([v("wa-divider")],No);var Mu=k`
  :host {
    --size: 25rem;
    --spacing: var(--wa-space-l);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border: none;
    box-shadow: var(--wa-shadow-l);
    overflow: auto;
    padding: 0;
    margin: 0;
    animation-duration: var(--show-duration);
    animation-timing-function: ease;

    &.show::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }

    &.hide::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }

    &.show.top {
      animation: show-drawer-from-top var(--show-duration) ease;
    }

    &.hide.top {
      animation: show-drawer-from-top var(--hide-duration) ease reverse;
    }

    &.show.end {
      animation: show-drawer-from-end var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.hide.end {
      animation: show-drawer-from-end var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.show.bottom {
      animation: show-drawer-from-bottom var(--show-duration) ease;
    }

    &.hide.bottom {
      animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
    }

    &.show.start {
      animation: show-drawer-from-start var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.hide.start {
      animation: show-drawer-from-start var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .drawer:focus {
    outline: none;
  }

  .top {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .end {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .bottom {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .start {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .header {
    display: flex;
    flex-wrap: nowrap;
    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer::backdrop {
    /*
        NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
        remove the fallback values here.
      */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.01;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-drawer {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-drawer-from-top {
    from {
      opacity: 0;
      translate: 0 -100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-end {
    from {
      opacity: 0;
      translate: 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-bottom {
    from {
      opacity: 0;
      translate: 0 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-start {
    from {
      opacity: 0;
      translate: -100% 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .drawer {
      border: solid 1px white;
    }
  }
`;var Fe=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.hasSlotController=new qt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&Pe(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),Cr(this))}disconnectedCallback(){super.disconnectedCallback(),Sr(this),this.removeOpenListeners()}async requestClose(t){const e=new Hi({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,J(this.drawer,"pulse");return}this.removeOpenListeners(),await J(this.drawer,"hide"),this.open=!1,this.drawer.close(),Sr(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new Wi)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Ui(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Oe(this)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&Pe(this)&&this.requestClose(this.drawer)}handleDialogClick(t){const i=t.target.closest('[data-drawer="close"]');i&&(t.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await J(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const t=new qi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),Cr(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.drawer.focus()}),await J(this.drawer,"show"),this.dispatchEvent(new ji)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return p`
      <dialog
        part="dialog"
        class=${z({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?p`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${i=>this.requestClose(i.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${e?p`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Fe.css=Mu;n([y(".drawer")],Fe.prototype,"drawer",2);n([c({type:Boolean,reflect:!0})],Fe.prototype,"open",2);n([c({reflect:!0})],Fe.prototype,"label",2);n([c({reflect:!0})],Fe.prototype,"placement",2);n([c({attribute:"without-header",type:Boolean,reflect:!0})],Fe.prototype,"withoutHeader",2);n([c({attribute:"light-dismiss",type:Boolean})],Fe.prototype,"lightDismiss",2);n([x("open",{waitUntilFirstUpdate:!0})],Fe.prototype,"handleOpenChange",1);Fe=n([v("wa-drawer")],Fe);document.addEventListener("click",t=>{const e=t.target.closest("[data-drawer]");if(e instanceof Element){const[i,o]=jr(e.getAttribute("data-drawer")||"");if(i==="open"&&o?.length){const a=e.getRootNode().getElementById(o);a?.localName==="wa-drawer"?a.open=!0:console.warn(`A drawer with an ID of "${o}" could not be found in this document.`)}}}),document.body.addEventListener("pointerdown",()=>{});var Nu=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var Bu=k`
  :host {
    --show-duration: 50ms;
    --hide-duration: 50ms;
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet) !important;
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;function*Gn(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Gn(t.shadowRoot.activeElement)))}var ha=new Set,Ft=class extends A{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new U(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{const e=this.localize.dir()==="rtl";if(t.key==="Escape"&&this.open&&Pe(this)){const u=this.getTrigger();t.preventDefault(),t.stopPropagation(),this.open=!1,u?.focus({preventScroll:!0});return}const i=[...Gn()].find(u=>u.localName==="wa-dropdown-item"),o=i?.localName==="wa-dropdown-item",r=this.getCurrentSubmenuItem(),a=!!r;let s,l,d;a?(s=this.getSubmenuItems(r),l=s.find(u=>u.active||u===i),d=l?s.indexOf(l):-1):(s=this.getItems(),l=s.find(u=>u.active||u===i),d=l?s.indexOf(l):-1);let h;if(t.key==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),d>0?h=s[d-1]:h=s[s.length-1]),t.key==="ArrowDown"&&(t.preventDefault(),t.stopPropagation(),d!==-1&&d<s.length-1?h=s[d+1]:h=s[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&o&&l&&l.hasSubmenu){t.preventDefault(),t.stopPropagation(),l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((f,m)=>f.active=m===0),u[0].focus({preventScroll:!0}))},0);return}if(t.key===(e?"ArrowRight":"ArrowLeft")&&a){t.preventDefault(),t.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus({preventScroll:!0}),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(m=>{m!==u&&(m.active=!1)})},0));return}if((t.key==="Home"||t.key==="End")&&(t.preventDefault(),t.stopPropagation(),h=t.key==="Home"?s[0]:s[s.length-1]),t.key==="Tab"&&await this.hideMenu(),t.key.length===1&&!(t.metaKey||t.ctrlKey||t.altKey)&&!(t.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=t.key,s.some(u=>{const f=(u.textContent||"").trim().toLowerCase(),m=this.userTypedQuery.trim().toLowerCase();return f.startsWith(m)?(h=u,!0):!1})),h){t.preventDefault(),t.stopPropagation(),s.forEach(u=>u.active=u===h),h.focus({preventScroll:!0});return}(t.key==="Enter"||t.key===" "&&this.userTypedQuery==="")&&o&&l&&(t.preventDefault(),t.stopPropagation(),l.hasSubmenu?(l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((f,m)=>f.active=m===0),u[0].focus({preventScroll:!0}))},0)):this.makeSelection(l))},this.handleDocumentPointerDown=t=>{t.composedPath().some(o=>o instanceof HTMLElement?o===this||o.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=t=>{const e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;const i=e.submenuElement.getBoundingClientRect(),o=this.localize.dir()==="rtl",r=o?i.right:i.left,a=o?Math.max(t.clientX,r):Math.min(t.clientX,r),s=Math.max(i.top,Math.min(t.clientY,i.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${a}px`),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${s}px`);const l=t.composedPath(),d=e.matches(":hover"),h=!!e.submenuElement?.matches(":hover"),u=d||!!l.find(m=>m===e),f=h||!!l.find(m=>m instanceof HTMLElement&&m.closest('[part="submenu"]')===e.submenuElement);!u&&!f&&setTimeout(()=>{!d&&!h&&(e.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(t=>t()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),Oe(this)}firstUpdated(){this.syncAriaAttributes()}async updated(t){if(t.has("open")){const e=t.get("open");if(e===this.open||e===void 0&&this.open===!1)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}t.has("size")&&this.syncItemSizes()}getItems(t=!1){const e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(i=>i.localName==="wa-dropdown-item");return t?e:e.filter(i=>!i.disabled)}getSubmenuItems(t,e=!1){const i=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!i)return[];const o=i.assignedElements({flatten:!0}).filter(r=>r.localName==="wa-dropdown-item");return e?o:o.filter(r=>!r.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName==="wa-dropdown-item").forEach(e=>e.size=this.size)}addToSubmenuStack(t){const e=this.openSubmenuStack.indexOf(t);e!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(t){const e=t.closest('wa-dropdown-item:not([slot="submenu"])');let i;e?i=this.getSubmenuItems(e,!0):i=this.getItems(!0),i.forEach(o=>{o!==t&&o.submenuOpen&&(o.submenuOpen=!1)}),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;const e=new qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;ha.forEach(o=>o.open=!1),this.popup.active=!0,this.open=!0,ha.add(this),Ui(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await J(this.menu,"show");const i=this.getItems();i.length>0&&(i.forEach((o,r)=>o.active=r===0),i[0].focus({preventScroll:!0})),this.dispatchEvent(new ji)}async hideMenu(){if(!this.popup||!this.menu)return;const t=new Hi({source:this});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}this.open=!1,ha.delete(this),Oe(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await J(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Wi)}handleMenuClick(t){const e=t.target.closest("wa-dropdown-item");if(!(!e||e.disabled)){if(e.hasSubmenu){e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),t.stopPropagation();return}this.makeSelection(e)}}async handleMenuSlotChange(){const t=this.getItems(!0);await Promise.all(t.map(o=>o.updateComplete)),this.syncItemSizes();const e=t.some(o=>o.type==="checkbox"),i=t.some(o=>o.hasSubmenu);t.forEach((o,r)=>{o.active=r===0,o.checkboxAdjacent=e,o.submenuAdjacent=i})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){const e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);const e=qn(t,t.submenuElement,()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)});this.submenuCleanups.set(t,e);const i=t.submenuElement.querySelector('slot[name="submenu"]');i&&(i.removeEventListener("slotchange",Ft.handleSubmenuSlotChange),i.addEventListener("slotchange",Ft.handleSubmenuSlotChange),Ft.handleSubmenuSlotChange({target:i}))}static handleSubmenuSlotChange(t){const e=t.target;if(!e)return;const i=e.assignedElements().filter(a=>a.localName==="wa-dropdown-item");if(i.length===0)return;const o=i.some(a=>a.hasSubmenu),r=i.some(a=>a.type==="checkbox");i.forEach(a=>{a.submenuAdjacent=o,a.checkboxAdjacent=r})}processSubmenuItems(t){if(!t.submenuElement)return;const e=this.getSubmenuItems(t,!0),i=e.some(o=>o.hasSubmenu);e.forEach(o=>{o.submenuAdjacent=i})}cleanupSubmenuPosition(t){const e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;const i=this.localize.dir()==="rtl"?"left-start":"right-start";Kn(t,t.submenuElement,{placement:i,middleware:[Hn({mainAxis:0,crossAxis:-5}),jn({fallbackStrategy:"bestFit"}),Wn({padding:8})]}).then(({x:o,y:r,placement:a})=>{t.submenuElement.setAttribute("data-placement",a),Object.assign(t.submenuElement.style,{left:`${o}px`,top:`${r}px`})})}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){t.submenuElement.style.setProperty("--safe-triangle-visible","none");return}t.submenuElement.style.setProperty("--safe-triangle-visible","block");const i=t.submenuElement.getBoundingClientRect(),o=this.localize.dir()==="rtl";t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${o?i.right:i.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${i.top}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${o?i.right:i.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${i.bottom}px`)}makeSelection(t){const e=this.getTrigger();if(t.disabled)return;t.type==="checkbox"&&(t.checked=!t.checked);const i=new Nu({item:t});this.dispatchEvent(i),i.defaultPrevented||(this.open=!1,e?.focus({preventScroll:!0}))}async syncAriaAttributes(){const t=this.getTrigger();let e;t&&(t.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",Nr("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false"))}render(){let t=this.hasUpdated?this.popup?.active:this.open;return p`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${t}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};Ft.css=[Et,Bu];n([y("slot:not([name])")],Ft.prototype,"defaultSlot",2);n([y("#menu")],Ft.prototype,"menu",2);n([y("wa-popup")],Ft.prototype,"popup",2);n([c({type:Boolean,reflect:!0})],Ft.prototype,"open",2);n([c({reflect:!0})],Ft.prototype,"size",2);n([c({reflect:!0})],Ft.prototype,"placement",2);n([c({type:Number})],Ft.prototype,"distance",2);n([c({type:Number})],Ft.prototype,"skidding",2);Ft=n([v("wa-dropdown")],Ft);var Vu=k`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)),
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, 50ms) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, 50ms) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;var Ot=class extends A{constructor(){super(...arguments),this.hasSlotController=new qt(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))},this.handleClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("click",this.handleClick,{capture:!0}),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("click",this.handleClick,{capture:!0}),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled),this.style.pointerEvents=this.disabled?"none":""),t.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){const t=this.submenuElement;!this.hasSubmenu||!t||!this.isConnected||(this.notifyParentOfOpening(),t.showPopover?.(),t.hidden=!1,t.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await J(t,"show"),setTimeout(()=>{const e=this.getSubmenuItems();e.length>0&&(e.forEach((i,o)=>i.active=o===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){const t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);const e=this.parentElement;e&&[...e.children].filter(o=>o!==this&&o.localName==="wa-dropdown-item"&&o.getAttribute("slot")===this.getAttribute("slot")&&o.submenuOpen).forEach(o=>{o.submenuOpen=!1})}async closeSubmenu(){const t=this.submenuElement;!this.hasSubmenu||!t||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),t.hidden||(await J(t,"hide"),t?.isConnected&&(t.hidden=!0,t.removeAttribute("data-visible"),t.hidePopover?.())))}getSubmenuItems(){return[...this.children].filter(t=>t.localName==="wa-dropdown-item"&&t.getAttribute("slot")==="submenu"&&!t.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return p`
      ${this.type==="checkbox"?p`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?p`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?p`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:""}
    `}};Ot.css=Vu;n([y("#submenu")],Ot.prototype,"submenuElement",2);n([c({type:Boolean})],Ot.prototype,"active",2);n([c({reflect:!0})],Ot.prototype,"variant",2);n([c({reflect:!0})],Ot.prototype,"size",2);n([c({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],Ot.prototype,"checkboxAdjacent",2);n([c({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],Ot.prototype,"submenuAdjacent",2);n([c()],Ot.prototype,"value",2);n([c({reflect:!0})],Ot.prototype,"type",2);n([c({type:Boolean})],Ot.prototype,"checked",2);n([c({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],Ot.prototype,"submenuOpen",2);n([w()],Ot.prototype,"hasSubmenu",2);Ot=n([v("wa-dropdown-item")],Ot);var Bo=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:e,o=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),r=i[o]+this.unit,a=parseFloat((this.value/Math.pow(1e3,o)).toPrecision(3));return this.localize.number(a,{style:"unit",unit:r,unitDisplay:this.display})}};n([c({type:Number})],Bo.prototype,"value",2);n([c()],Bo.prototype,"unit",2);n([c()],Bo.prototype,"display",2);Bo=n([v("wa-format-bytes")],Bo);var Mt=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(t.getMilliseconds()))return;const i=this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e});return p`<time datetime=${t.toISOString()}>${i}</time>`}};n([c()],Mt.prototype,"date",2);n([c()],Mt.prototype,"weekday",2);n([c()],Mt.prototype,"era",2);n([c()],Mt.prototype,"year",2);n([c()],Mt.prototype,"month",2);n([c()],Mt.prototype,"day",2);n([c()],Mt.prototype,"hour",2);n([c()],Mt.prototype,"minute",2);n([c()],Mt.prototype,"second",2);n([c({attribute:"time-zone-name"})],Mt.prototype,"timeZoneName",2);n([c({attribute:"time-zone"})],Mt.prototype,"timeZone",2);n([c({attribute:"hour-format"})],Mt.prototype,"hourFormat",2);Mt=n([v("wa-format-date")],Mt);var re=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};n([c({type:Number})],re.prototype,"value",2);n([c()],re.prototype,"type",2);n([c({attribute:"without-grouping",type:Boolean})],re.prototype,"withoutGrouping",2);n([c()],re.prototype,"currency",2);n([c({attribute:"currency-display"})],re.prototype,"currencyDisplay",2);n([c({attribute:"minimum-integer-digits",type:Number})],re.prototype,"minimumIntegerDigits",2);n([c({attribute:"minimum-fraction-digits",type:Number})],re.prototype,"minimumFractionDigits",2);n([c({attribute:"maximum-fraction-digits",type:Number})],re.prototype,"maximumFractionDigits",2);n([c({attribute:"minimum-significant-digits",type:Number})],re.prototype,"minimumSignificantDigits",2);n([c({attribute:"maximum-significant-digits",type:Number})],re.prototype,"maximumSignificantDigits",2);re=n([v("wa-format-number")],re);var Gs=class extends Event{constructor(t){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Uu=k`
  :host {
    display: block;
  }
`;var ua=new Map;function qu(t,e="cors"){const i=ua.get(t);if(i!==void 0)return Promise.resolve(i);const o=fetch(t,{mode:e}).then(async r=>{const a={ok:r.ok,status:r.status,html:await r.text()};return ua.set(t,a),a});return ua.set(t,o),o}var Oi=class extends A{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(i=>e.setAttribute(i.name,i.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await qu(t,this.mode);if(t!==this.src)return;if(!e.ok){this.dispatchEvent(new Gs({status:e.status}));return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.dispatchEvent(new Ka)}catch{this.dispatchEvent(new Gs({status:-1}))}}render(){return p`<slot></slot>`}};Oi.css=Uu;n([c()],Oi.prototype,"src",2);n([c()],Oi.prototype,"mode",2);n([c({attribute:"allow-scripts",type:Boolean})],Oi.prototype,"allowScripts",2);n([x("src")],Oi.prototype,"handleSrcChange",1);Oi=n([v("wa-include")],Oi);var Hu=class extends Event{constructor(t){super("wa-intersect",{bubbles:!1,cancelable:!1,composed:!0}),this.detail=t}};var Wu=k`
  :host {
    display: contents;
  }
`;var ke=class extends A{constructor(){super(...arguments),this.intersectionObserver=null,this.observedElements=new Map,this.root=null,this.rootMargin="0px",this.threshold="0",this.intersectClass="",this.once=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}parseThreshold(){return jr(this.threshold).map(e=>{const i=parseFloat(e);return isNaN(i)?0:_(i,0,1)})}resolveRoot(){if(!this.root)return null;try{const e=this.getRootNode().getElementById(this.root);return e||console.warn(`Root element with ID "${this.root}" could not be found.`,this),e}catch{return console.warn(`Invalid selector for root: "${this.root}"`,this),null}}startObserver(){if(this.stopObserver(),this.disabled)return;const t=this.parseThreshold(),e=this.resolveRoot();this.intersectionObserver=new IntersectionObserver(o=>{o.forEach(r=>{const a=this.observedElements.get(r.target)??!1,s=r.isIntersecting;this.observedElements.set(r.target,s),this.intersectClass&&(s?r.target.classList.add(this.intersectClass):r.target.classList.remove(this.intersectClass));const l=new Hu({entry:r});this.dispatchEvent(l),s&&!a&&this.once&&(this.intersectionObserver?.unobserve(r.target),this.observedElements.delete(r.target))})},{root:e,rootMargin:this.rootMargin,threshold:t});const i=this.shadowRoot.querySelector("slot");i!==null&&i.assignedElements({flatten:!0}).forEach(r=>{this.intersectionObserver?.observe(r),this.observedElements.set(r,!1)})}stopObserver(){this.intersectClass&&this.observedElements.forEach((t,e)=>{e.classList.remove(this.intersectClass)}),this.intersectionObserver?.disconnect(),this.intersectionObserver=null,this.observedElements.clear()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleOptionsChange(){this.startObserver()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};ke.css=Wu;n([c()],ke.prototype,"root",2);n([c({attribute:"root-margin"})],ke.prototype,"rootMargin",2);n([c()],ke.prototype,"threshold",2);n([c({attribute:"intersect-class"})],ke.prototype,"intersectClass",2);n([c({type:Boolean,reflect:!0})],ke.prototype,"once",2);n([c({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);n([x("disabled",{waitUntilFirstUpdate:!0})],ke.prototype,"handleDisabledChange",1);n([x("root",{waitUntilFirstUpdate:!0}),x("rootMargin",{waitUntilFirstUpdate:!0}),x("threshold",{waitUntilFirstUpdate:!0})],ke.prototype,"handleOptionsChange",1);ke=n([v("wa-intersection-observer")],ke);var ju=class extends Event{constructor(t){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Ku=k`
  :host {
    display: contents;
  }
`;var Ce=class extends A{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.dispatchEvent(new ju({mutationList:t}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return p` <slot></slot> `}};Ce.css=Ku;n([c({reflect:!0})],Ce.prototype,"attr",2);n([c({attribute:"attr-old-value",type:Boolean,reflect:!0})],Ce.prototype,"attrOldValue",2);n([c({attribute:"char-data",type:Boolean,reflect:!0})],Ce.prototype,"charData",2);n([c({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Ce.prototype,"charDataOldValue",2);n([c({attribute:"child-list",type:Boolean,reflect:!0})],Ce.prototype,"childList",2);n([c({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);n([x("disabled")],Ce.prototype,"handleDisabledChange",1);n([x("attr",{waitUntilFirstUpdate:!0}),x("attr-old-value",{waitUntilFirstUpdate:!0}),x("char-data",{waitUntilFirstUpdate:!0}),x("char-data-old-value",{waitUntilFirstUpdate:!0}),x("childList",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleChange",1);Ce=n([v("wa-mutation-observer")],Ce);var Gu=k`
  .number-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: inherit;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    padding: 0;

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    /* Style disabled inputs */
    &:has(input:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    .number-field {
      background-color: var(--wa-form-control-background-color);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-quiet);
          background-color: var(--wa-color-neutral-fill-quiet);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-quiet), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-quiet), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-fill-quiet);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled-outlined']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([pill]) {
    .number-field,
    .stepper {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  .number-field {
    /* Show autofill styles over the entire number field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input {
      flex: auto;
      height: 100%;
      width: auto;
      min-width: 0;
      margin: 0;
      padding: 0 var(--wa-form-control-padding-inline);
      outline: none;
      box-shadow: none;
      border: none;
      background-color: transparent;
      font: inherit;
      transition: inherit;
      cursor: inherit;
      -webkit-appearance: none;

      /* Center-align and use tabular numbers for better alignment */
      text-align: center;
      font-variant-numeric: tabular-nums;

      /* Hide the number spinners in Firefox */
      -moz-appearance: textfield;

      /* Hide the number spinners in Chrome/Safari */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        display: none;
      }

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:focus {
      outline: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 1;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start {
    justify-content: start;
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .end {
    justify-content: end;
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  /*
   * Steppers - horizontal layout with minus on start, plus on end
   */

  .stepper {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    height: calc(100% - var(--wa-form-control-border-width) * 2);
    flex: 0 0 auto;
    border: none;
    border-radius: calc(var(--wa-form-control-border-radius) - var(--wa-form-control-border-width) * 2);
    background: transparent;
    cursor: pointer;
    margin: var(--wa-form-control-border-width);
    padding: 0;
    font-size: inherit;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
    }
  }

  :host([without-steppers]) .stepper {
    display: none;
  }
`;var Z=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new qt(this,"hint","label"),this.localize=new U(this),this.title="",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.placeholder="",this.readonly=!1,this.required=!1,this.step=1,this.withoutSteppers=!1,this.inputmode="numeric",this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Wo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isAtMin(){if(this.min===void 0)return!1;const t=parseFloat(this.value||"");return!isNaN(t)&&t<=this.min}get isAtMax(){if(this.max===void 0)return!1;const t=parseFloat(this.value||"");return!isNaN(t)&&t>=this.max}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(){this.value=this.input.value}handleKeyDown(t){Za(t,this),(t.key==="ArrowUp"||t.key==="ArrowDown")&&requestAnimationFrame(()=>{this.value!==this.input.value&&(this.value=this.input.value)})}handleStepperClick(t){this.disabled||this.readonly||(t==="up"?this.input.stepUp():this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.input.focus())}maintainFocusOnPointerDown(t){t.preventDefault(),this.input.focus()}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,o=this.hint?!0:!!e;return p`
      <label
        part="form-control-label label"
        class=${z({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="number-field">
        ${this.withoutSteppers?"":p`
              <button
                part="stepper stepper-decrement"
                class="stepper stepper-decrement"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("decrement")}
                ?disabled=${this.disabled||this.readonly||this.isAtMin}
                @pointerdown=${this.maintainFocusOnPointerDown}
                @click=${()=>this.handleStepperClick("down")}
              >
                <slot name="decrement-icon">
                  <wa-icon name="minus" library="system"></wa-icon>
                </slot>
              </button>
            `}

        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type="number"
          inputmode=${$(this.inputmode)}
          title=${this.title}
          name=${$(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${$(this.placeholder)}
          min=${$(this.min)}
          max=${$(this.max)}
          step=${$(this.step)}
          .value=${Di(this.value??"")}
          autocomplete=${$(this.autocomplete)}
          ?autofocus=${this.autofocus}
          enterkeyhint=${$(this.enterkeyhint)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        <slot name="end" part="end" class="end"></slot>

        ${this.withoutSteppers?"":p`
              <button
                part="stepper stepper-increment"
                class="stepper stepper-increment"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("increment")}
                ?disabled=${this.disabled||this.readonly||this.isAtMax}
                @pointerdown=${this.maintainFocusOnPointerDown}
                @click=${()=>this.handleStepperClick("up")}
              >
                <slot name="increment-icon">
                  <wa-icon name="plus" library="system"></wa-icon>
                </slot>
              </button>
            `}
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${z({"has-slotted":o})}
        aria-hidden=${o?"false":"true"}
        >${this.hint}</slot
      >
    `}};Z.css=[Et,Ne,Gu];Z.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y("input")],Z.prototype,"input",2);n([c()],Z.prototype,"title",2);n([w()],Z.prototype,"value",1);n([c({attribute:"value",reflect:!0})],Z.prototype,"defaultValue",2);n([c({reflect:!0})],Z.prototype,"size",2);n([c({reflect:!0})],Z.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],Z.prototype,"pill",2);n([c()],Z.prototype,"label",2);n([c({attribute:"hint"})],Z.prototype,"hint",2);n([c()],Z.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],Z.prototype,"readonly",2);n([c({type:Boolean,reflect:!0})],Z.prototype,"required",2);n([c({type:Number})],Z.prototype,"min",2);n([c({type:Number})],Z.prototype,"max",2);n([c()],Z.prototype,"step",2);n([c({attribute:"without-steppers",type:Boolean})],Z.prototype,"withoutSteppers",2);n([c()],Z.prototype,"autocomplete",2);n([c({type:Boolean})],Z.prototype,"autofocus",2);n([c()],Z.prototype,"enterkeyhint",2);n([c()],Z.prototype,"inputmode",2);n([c({attribute:"with-label",type:Boolean})],Z.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],Z.prototype,"withHint",2);n([x("step",{waitUntilFirstUpdate:!0})],Z.prototype,"handleStepChange",1);Z=n([v("wa-number-input")],Z);var Xu=k`
  :host {
    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    line-height: var(--wa-line-height-condensed);
    transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host([disabled]:state(current)) {
    background-color: var(--wa-color-brand-fill-loud);
    color: var(--wa-color-brand-on-loud);
    opacity: 1;
  }

  :host([disabled]) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;function Ro(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(r=>Ro(r,--e)).join("");let i=t;if(i.nodeType===Node.TEXT_NODE)return i.textContent??"";if(i.nodeType===Node.ELEMENT_NODE){let o=i;if(o.hasAttribute("slot")||o.matches("style, script"))return"";if(o instanceof HTMLSlotElement){let r=o.assignedNodes({flatten:!0});if(r.length>0)return Ro(r,--e)}return e>-1?Ro(o,--e):o.textContent??""}return i.hasChildNodes()?Ro(i.childNodes,--e):""}var Se=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){const e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{const t=this.closest("wa-select");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())}),customElements.whenDefined("wa-combobox").then(()=>{const t=this.closest("wa-combobox");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())})):this.isInitialized=!0}willUpdate(t){if(t.has("defaultSelected")&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){const e=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",e)}super.willUpdate(t)}updated(t){super.updated(t),t.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current)}firstUpdated(t){if(super.firstUpdated(t),this.selected&&!this.defaultSelected){const e=this.closest("wa-select, wa-combobox");e&&!e.hasInteracted&&e.selectionChanged?.()}}updateDefaultLabel(){let t=this.defaultLabel;this.defaultLabel=Ro(this).trim();let e=this.defaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){return p`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};Se.css=Xu;n([y(".label")],Se.prototype,"defaultSlot",2);n([w()],Se.prototype,"current",2);n([c({reflect:!0})],Se.prototype,"value",2);n([c({type:Boolean})],Se.prototype,"disabled",2);n([c({type:Boolean,attribute:!1})],Se.prototype,"selected",2);n([c({type:Boolean,attribute:"selected"})],Se.prototype,"defaultSelected",2);n([c()],Se.prototype,"label",1);n([w()],Se.prototype,"defaultLabel",2);Se=n([v("wa-option")],Se);var Yu=k`
  :host {
    --arrow-size: 0.375rem;
    --max-width: 25rem;
    --show-duration: 100ms;
    --hide-duration: 100ms;

    display: contents;

    /** Defaults for inherited CSS properties */
    font-size: var(--wa-font-size-m);
    line-height: var(--wa-line-height-normal);
    text-align: start;
    white-space: normal;
  }

  /* The native dialog element */
  .dialog {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    overflow: visible;
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &[open] {
      display: block;
    }
  }

  /* The <wa-popup> element */
  .popover {
    --arrow-size: inherit;
    --popup-border-width: var(--wa-panel-border-width);
    --show-duration: inherit;
    --hide-duration: inherit;

    pointer-events: auto;

    &::part(arrow) {
      background-color: var(--wa-color-surface-default);
      border-top: none;
      border-left: none;
      border-bottom: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      border-right: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      box-shadow: none;
    }
  }

  .popover[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .popover[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .popover[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .popover[placement^='right']::part(popup) {
    transform-origin: left;
  }

  /* Body */
  .body {
    display: flex;
    flex-direction: column;
    width: max-content;
    max-width: var(--max-width);
    padding: var(--wa-space-l);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-l);
    color: var(--wa-color-text-normal);
    user-select: none;
    -webkit-user-select: none;
  }
`;var pa=new Set,vt=class extends A{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&Pe(this)&&(t.preventDefault(),t.stopPropagation(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=t=>{this.anchor&&t.composedPath().includes(this.anchor)||t.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=Nr("wa-popover-")),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),Oe(this),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const t=new qi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}pa.forEach(e=>e.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,pa.add(this),Ui(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await J(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new ji)}else{const t=new Hi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),pa.delete(this),Oe(this),await J(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Wi)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,i=this.anchor;if(e===i)return;const{signal:o}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:o}),i&&i.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,ve(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,ve(this,"wa-after-hide")}render(){return p`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${z({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};vt.css=Yu;vt.dependencies={"wa-popup":X};n([y("dialog")],vt.prototype,"dialog",2);n([y(".body")],vt.prototype,"body",2);n([y("wa-popup")],vt.prototype,"popup",2);n([w()],vt.prototype,"anchor",2);n([c()],vt.prototype,"placement",2);n([c({type:Boolean,reflect:!0})],vt.prototype,"open",2);n([c({type:Number})],vt.prototype,"distance",2);n([c({type:Number})],vt.prototype,"skidding",2);n([c()],vt.prototype,"for",2);n([c({attribute:"without-arrow",type:Boolean,reflect:!0})],vt.prototype,"withoutArrow",2);n([x("open",{waitUntilFirstUpdate:!0})],vt.prototype,"handleOpenChange",1);n([x("for")],vt.prototype,"handleForChange",1);n([x(["distance","placement","skidding"])],vt.prototype,"handleOptionsChange",1);vt=n([v("wa-popover")],vt);var Zu=k`
  :host {
    --track-height: 1rem;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);

    display: flex;
  }

  .progress-bar {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    overflow: hidden;
    height: var(--track-height);
    border-radius: var(--wa-border-radius-pill);
    background-color: var(--track-color);
    color: var(--wa-color-brand-on-loud);
    font-size: var(--wa-font-size-s);
  }

  .indicator {
    width: var(--percentage);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--indicator-color);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1;
    font-weight: var(--wa-font-weight-semibold);
    transition: all var(--wa-transition-slow, 200ms) var(--wa-transition-easing, ease);
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  :host([indeterminate]) .indicator {
    position: absolute;
    inset-block: 0;
    inline-size: 50%;
    animation: wa-progress-indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--wa-color-surface-default);
    }

    .indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes wa-progress-indeterminate {
    0% {
      inset-inline-start: -50%;
    }

    75%,
    100% {
      inset-inline-start: 100%;
    }
  }
`;var lo=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.value=0,this.indeterminate=!1,this.label=""}updated(t){t.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${_(this.value,0,100)}%`)})}render(){return p`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${$(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":p` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};lo.css=Zu;n([c({type:Number,reflect:!0})],lo.prototype,"value",2);n([c({type:Boolean,reflect:!0})],lo.prototype,"indeterminate",2);n([c()],lo.prototype,"label",2);lo=n([v("wa-progress-bar")],lo);var Qu=k`
  :host {
    --size: 8rem;
    --track-width: 0.25em; /* avoid using rems here */
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-width: var(--track-width);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;var Pi=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,o=i-this.value/100*i;this.indicatorOffset=`${o}px`}}render(){return p`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${et({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${et({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};Pi.css=Qu;n([y(".indicator")],Pi.prototype,"indicator",2);n([w()],Pi.prototype,"indicatorOffset",2);n([c({type:Number,reflect:!0})],Pi.prototype,"value",2);n([c()],Pi.prototype,"label",2);Pi=n([v("wa-progress-ring")],Pi);var Ju=k`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  canvas {
    width: 100%;
    height: 100%;
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }
`,fa,te=class extends A{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(t){super.firstUpdated(t),this.hasUpdated&&this.generate()}generate(){if(!this.hasUpdated)return;if(!fa){Jt(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(e=>{fa=e.default,this.generate()});return}this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`;const t=getComputedStyle(this);fa.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||t.color,background:this.background||null,size:this.size*2},this.canvas),this.generated=!0}render(){return p`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        @transitionend=${t=>{t.propertyName==="color"&&this.generate()}}
      ></canvas>
    `}};te.css=Ju;n([y("canvas")],te.prototype,"canvas",2);n([c()],te.prototype,"value",2);n([c()],te.prototype,"label",2);n([c({type:Number})],te.prototype,"size",2);n([c()],te.prototype,"fill",2);n([c()],te.prototype,"background",2);n([c({type:Number})],te.prototype,"radius",2);n([c({attribute:"error-correction"})],te.prototype,"errorCorrection",2);n([w()],te.prototype,"generated",2);n([x(["background","errorCorrection","fill","radius","size","value"],{waitUntilFirstUpdate:!0})],te.prototype,"generate",1);te=n([v("wa-qr-code")],te);var tp=k`
  :host {
    --checked-icon-color: var(--wa-form-control-activated-color);
    --checked-icon-scale: 0.7;

    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  :host(:not(:state(checked))) svg circle {
    opacity: 0;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default spacing for default appearance radios */
  :host([appearance='default']) {
    margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
  }

  :host([appearance='default'][data-wa-radio-horizontal]) {
    margin-block: 0;
    margin-inline: 0.5em; /* Half of the original 1em gap on each side */
  }

  /* Remove margin from first/last items to prevent extra space */
  :host([appearance='default'][data-wa-radio-first]) {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([appearance='default'][data-wa-radio-last]) {
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  /* Button appearance have no spacing, they get handled by the overlap margins below */
  :host([appearance='button']) {
    margin: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  /* Default appearance */
  :host([appearance='default']) {
    .control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      border-color: var(--wa-form-control-border-color);
      border-radius: 50%;
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      background-color: var(--wa-form-control-background-color);
      color: transparent;
      transition:
        background var(--wa-transition-normal),
        border-color var(--wa-transition-fast),
        box-shadow var(--wa-transition-fast),
        color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);

      margin-inline-end: 0.5em;
    }

    .checked-icon {
      display: flex;
      fill: currentColor;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      scale: var(--checked-icon-scale);
    }
  }

  /* Button appearance */
  :host([appearance='button']) {
    .control {
      display: none;
    }
  }

  /* Checked */
  :host(:state(checked)) .control {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-background-color);
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Button overlap margins */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`;var Ze=class extends Q{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return p`
      <span part="control" class="control">
        ${this.checked?p`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};Ze.css=[Ne,Et,tp];n([w()],Ze.prototype,"checked",2);n([w()],Ze.prototype,"forceDisabled",2);n([c({reflect:!0})],Ze.prototype,"value",2);n([c({reflect:!0})],Ze.prototype,"appearance",2);n([c({reflect:!0})],Ze.prototype,"size",2);n([c({type:Boolean})],Ze.prototype,"disabled",2);Ze=n([v("wa-radio")],Ze);var ep=k`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0; /* Radios handle their own spacing */
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }
`;var St=class extends Q{constructor(){super(),this.hasSlotController=new qt(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const i=this.value;this.value=e.value,e.checked=!0;const o=this.getAllRadios();for(const r of o)e!==r&&(r.checked=!1,r.setAttribute("tabindex","-1"));this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const t=[Br({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:Nr("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}get validationTarget(){const t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("size")||t.has("value")||t.has("defaultValue"))&&this.syncRadioElements()}formResetCallback(...t){this._value=null,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach((e,i)=>{this.size&&e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),e.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),e.toggleAttribute("data-wa-radio-first",i===0),e.toggleAttribute("data-wa-radio-inner",i!==0&&i!==t.length-1),e.toggleAttribute("data-wa-radio-last",i===t.length-1),e.forceDisabled=this.disabled}),await Promise.all(t.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{const e=t.filter(o=>!o.disabled),i=e.find(o=>o.checked);e.length>0&&(i?e.forEach(o=>{o.tabIndex=o.checked?0:-1}):e.forEach((o,r)=>{o.tabIndex=r===0?0:-1})),t.filter(o=>o.disabled).forEach(o=>{o.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(l=>!l.disabled);if(e.length<=0)return;t.preventDefault();const i=this.value,o=e.find(l=>l.checked)??e[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let a=e.indexOf(o)+r;a||(a=0),a<0&&(a=e.length-1),a>e.length-1&&(a=0);const s=e.some(l=>l.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(l=>{l.checked=!1,s||l.setAttribute("tabindex","-1")}),this.value=e[a].value,e[a].checked=!0,s?e[a].shadowRoot.querySelector("button").focus():(e[a].setAttribute("tabindex","0"),e[a].focus()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),i=e.find(a=>a.checked),o=e.find(a=>!a.disabled),r=i||o;r&&r.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,o=this.hint?!0:!!e;return p`
      <fieldset
        part="form-control"
        class=${z({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${z({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${z({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};St.css=[Et,Ne,ep];St.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y("slot:not([name])")],St.prototype,"defaultSlot",2);n([c()],St.prototype,"label",2);n([c({attribute:"hint"})],St.prototype,"hint",2);n([c({reflect:!0})],St.prototype,"name",2);n([c({type:Boolean,reflect:!0})],St.prototype,"disabled",2);n([c({reflect:!0})],St.prototype,"orientation",2);n([w()],St.prototype,"value",1);n([c({attribute:"value",reflect:!0})],St.prototype,"defaultValue",2);n([c({reflect:!0})],St.prototype,"size",2);n([c({type:Boolean,reflect:!0})],St.prototype,"required",2);n([c({type:Boolean,attribute:"with-label"})],St.prototype,"withLabel",2);n([c({type:Boolean,attribute:"with-hint"})],St.prototype,"withHint",2);St=n([v("wa-radio-group")],St);var Xs=class extends Event{constructor(t){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var ip=k`
  :host {
    --symbol-color: var(--wa-color-neutral-on-quiet);
    --symbol-color-active: var(--wa-color-yellow-70);
    --symbol-spacing: 0.125em;

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--wa-border-radius-m);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .symbols {
    display: inline-flex;
    gap: 0.125em;
    position: relative;
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .symbols > * {
    padding: var(--symbol-spacing);
  }

  .symbol-active,
  .partial-filled {
    color: var(--symbol-color-active);
  }

  .partial-symbol-container {
    position: relative;
  }

  .partial-filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .symbol {
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
    pointer-events: none;
  }

  .symbol-hover {
    scale: 1.2;
  }

  .rating-readonly .symbols {
    cursor: default;
  }

  :host([disabled]) .symbol-hover,
  .rating-readonly .symbol-hover {
    scale: none;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  :host([disabled]) .symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .symbol-active {
      color: SelectedItem;
    }
  }
`;var yt=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(t,e)=>e?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:i,right:o,width:r}=this.rating.getBoundingClientRect(),a=e?this.roundToPrecision((o-t)/r*this.max,this.precision):this.roundToPrecision((t-i)/r*this.max,this.precision);return _(a,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl",o=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.dispatchEvent(new Xs({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new Xs({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir,e=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,p`
      <div
        part="base"
        class=${z({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="symbols">
          ${e.map(o=>{const r=i>=o+1;return i>o&&i<o+1?p`
                <span
                  class=${z({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(i)===o+1})}
                  role="presentation"
                >
                  <div
                    style=${et({clipPath:t?`inset(0 ${(i-o)*100}% 0 0)`:`inset(0 0 0 ${(i-o)*100}%)`})}
                  >
                    ${Ke(this.getSymbol(o+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${et({clipPath:t?`inset(0 0 0 ${100-(i-o)*100}%)`:`inset(0 ${100-(i-o)*100}% 0 0)`})}
                  >
                    ${Ke(this.getSymbol(o+1,!0))}
                  </div>
                </span>
              `:p`
              <span
                class=${z({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(i)===o+1,"symbol-active":i>=o+1})}
                role="presentation"
              >
                ${Ke(this.getSymbol(o+1,r))}
              </span>
            `})}
        </span>
      </div>
    `}};yt.css=[Et,ip];n([y(".rating")],yt.prototype,"rating",2);n([w()],yt.prototype,"hoverValue",2);n([w()],yt.prototype,"isHovering",2);n([c()],yt.prototype,"label",2);n([c({type:Number})],yt.prototype,"value",2);n([c({type:Number})],yt.prototype,"max",2);n([c({type:Number})],yt.prototype,"precision",2);n([c({type:Boolean,reflect:!0})],yt.prototype,"readonly",2);n([c({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);n([c()],yt.prototype,"getSymbol",2);n([c({reflect:!0})],yt.prototype,"size",2);n([Fr({passive:!0})],yt.prototype,"handleTouchMove",1);n([x("hoverValue")],yt.prototype,"handleHoverValueChange",1);n([x("isHovering")],yt.prototype,"handleIsHoveringChange",1);yt=n([v("wa-rating")],yt);var op=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],fi=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:o,value:r}=op.find(a=>Math.abs(i)<a.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/r),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let a;o==="minute"?a=lr("second"):o==="hour"?a=lr("minute"):o==="day"?a=lr("hour"):a=lr("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),a)}return p`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};n([w()],fi.prototype,"isoTime",2);n([w()],fi.prototype,"relativeTime",2);n([c()],fi.prototype,"date",2);n([c()],fi.prototype,"format",2);n([c()],fi.prototype,"numeric",2);n([c({type:Boolean})],fi.prototype,"sync",2);fi=n([v("wa-relative-time")],fi);function lr(t){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return i-Date.now()%i}var rp=class extends Event{constructor(t){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var ap=k`
  :host {
    display: contents;
  }
`;var Vo=class extends A{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.dispatchEvent(new rp({entries:t}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};Vo.css=ap;n([c({type:Boolean,reflect:!0})],Vo.prototype,"disabled",2);n([x("disabled",{waitUntilFirstUpdate:!0})],Vo.prototype,"handleDisabledChange",1);Vo=n([v("wa-resize-observer")],Vo);var sp=k`
  :host {
    --shadow-color: var(--wa-color-surface-default);
    --shadow-size: 2rem;

    /* private (defined dynamically) */
    --start-shadow-opacity: 0;
    --end-shadow-opacity: 0;

    display: block;
    position: relative;
    max-width: 100%;
    isolation: isolate;
  }

  :host([orientation='vertical']) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #content {
    z-index: 1; /* below shadows */
    border-radius: inherit;
    scroll-behavior: smooth;
    scrollbar-width: thin;

    /* Prevent text in mobile Safari from being larger when the container width larger than the viewport */
    -webkit-text-size-adjust: 100%;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  :host([without-scrollbar]) #content {
    scrollbar-width: none;
  }

  :host([orientation='horizontal']) #content {
    overflow-x: auto;
    overflow-y: hidden;
  }

  :host([orientation='vertical']) #content {
    flex: 1 1 auto;
    min-height: 0; /* This is crucial for flex children to respect overflow */
    overflow-x: hidden;
    overflow-y: auto;
  }

  #start-shadow,
  #end-shadow {
    z-index: 2;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
  }

  /* Horizontal shadows */
  :host([orientation='horizontal']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      top: 0;
      bottom: 0;
      width: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      &:dir(ltr) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }
    }

    #end-shadow {
      &:dir(ltr) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }
    }
  }

  /* Vertical shadows */
  :host([orientation='vertical']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      right: 0;
      left: 0;
      height: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      top: 0;
      background: linear-gradient(to bottom, var(--shadow-color), transparent 100%);
    }

    #end-shadow {
      bottom: 0;
      background: linear-gradient(to top, var(--shadow-color), transparent 100%);
    }
  }
`;var Qe=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(t){t.key==="Home"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),t.key==="End"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const t=Math.ceil(this.content.clientWidth),e=Math.abs(Math.ceil(this.content.scrollLeft)),o=Math.ceil(this.content.scrollWidth)-t;this.canScroll=o>0;const r=Math.min(1,e/(o*.05)),a=Math.min(1,(o-e)/(o*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(a||0))}else{const t=Math.ceil(this.content.clientHeight),e=Math.abs(Math.ceil(this.content.scrollTop)),o=Math.ceil(this.content.scrollHeight)-t;this.canScroll=o>0;const r=Math.min(1,e/(o*.05)),a=Math.min(1,(o-e)/(o*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(a||0))}}render(){return p`
      ${this.withoutShadow?"":p`
            <div id="start-shadow" part="start-shadow" aria-hidden="true"></div>
            <div id="end-shadow" part="end-shadow" aria-hidden="true"></div>
          `}

      <div
        id="content"
        part="content"
        role="region"
        aria-label=${this.localize.term("scrollableRegion")}
        aria-orientation=${this.orientation}
        tabindex=${this.canScroll?"0":"-1"}
        @keydown=${this.handleKeyDown}
        @scroll=${this.updateScroll}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Qe.css=[sp];n([y("#content")],Qe.prototype,"content",2);n([w()],Qe.prototype,"canScroll",2);n([c({reflect:!0})],Qe.prototype,"orientation",2);n([c({attribute:"without-scrollbar",type:Boolean,reflect:!0})],Qe.prototype,"withoutScrollbar",2);n([c({attribute:"without-shadow",type:Boolean,reflect:!0})],Qe.prototype,"withoutShadow",2);n([Fr({passive:!0})],Qe.prototype,"updateScroll",1);Qe=n([v("wa-scroller")],Qe);var np=k`
  :host {
    --tag-max-size: 10ch;
    --show-duration: 100ms;
    --hide-duration: 100ms;
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    :host([multiple]) .select:not(.placeholder-visible) & {
      padding-inline-start: 0;
      padding-block: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));
    }

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .select:not(.placeholder-visible) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: 0.25em;
    gap: 0.25em;

    &::slotted(wa-tag) {
      cursor: pointer !important;
    }

    .disabled &,
    .disabled &::slotted(wa-tag) {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .start::slotted(*) {
    margin-inline: var(--wa-form-control-padding-inline);
  }

  /* Clear button */
  [part~='clear-button'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) ease;
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding-block: 0.5em;
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;var F=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new qt(this,"hint","label"),this.localize=new U(this),this.selectionOrder=new Map,this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=t=>p`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${t.value}
          @wa-remove=${e=>this.handleTagRemove(e,t)}
        >
          ${t.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest('[part~="clear-button"]')!==null,o=e.closest("wa-button")!==null;if(!(i||o)){if(t.key==="Escape"&&this.open&&Pe(this)&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),a=r.indexOf(this.currentOption);let s=Math.max(0,a);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(s=a+1,s>r.length-1&&(s=0)):t.key==="ArrowUp"?(s=a-1,s<0&&(s=r.length-1)):t.key==="Home"?s=0:t.key==="End"&&(s=r.length-1),this.setCurrentOption(r[s])}if(t.key?.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const a of r)if(a.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(a);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){const t=[Br({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]),this._value=t??null,this.value!==e&&(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),t==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(i=>!i.disabled).map(i=>i.value));let e=t;return t!=null&&(e=t.filter(i=>this.optionValues.has(i)),e=this.multiple?e:e[0],e=e??null),e}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners()}updateDefaultValue(){const e=this.getAllOptions().filter(i=>i.hasAttribute("selected")||i.defaultSelected);if(e.length>0){const i=e.map(o=>o.value);this._defaultValue=this.multiple?i:i[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Ui(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Oe(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){const i=t.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="wa-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==null&&(this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new Rn),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("wa-option");i&&!i.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);const i=t.filter(o=>e.includes(o.value));this.setSelectedOptions(i)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let i=e;if(!i){const o=t.target.closest("wa-tag[data-value]");if(o){const r=o.dataset.value;i=this.selectedOptions.find(a=>a.value===r)}}i&&(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus({preventScroll:!0}))}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(o=>{i.includes(o)||(o.selected=!1)}),i.length&&i.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){const e=this.getAllOptions().filter(s=>{if(!this.hasInteracted&&!this.valueHasChanged){const l=this.defaultValue,d=Array.isArray(l)?l:[l];return s.hasAttribute("selected")||s.defaultSelected||s.selected||d?.includes(s.value)}return s.selected}),i=new Set(e.map(s=>s.value));for(const s of this.selectionOrder.keys())i.has(s)||this.selectionOrder.delete(s);let r=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(const s of e)this.selectionOrder.has(s.value)||this.selectionOrder.set(s.value,r++);this.selectedOptions=e.sort((s,l)=>{const d=this.selectionOrder.get(s.value)??0,h=this.selectionOrder.get(l.value)??0;return d-h});let a=new Set(this.selectedOptions.map(s=>s.value));if(a.size>0||this._value){const s=this._value;if(this._value==null){let l=this.defaultValue??[];this._value=Array.isArray(l)?l:[l]}this._value=this._value?.filter(l=>!this.optionValues?.has(l))??null,this._value?.unshift(...a),this.requestUpdate("value",s)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.displayLabel=s?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return i?typeof i=="string"?Ke(i):i:null}else if(e===this.maxOptionsVisible)return p`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-e}</wa-tag
          >
        `;return null})}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],i=t.filter(o=>e.includes(o.value));this.setSelectedOptions(i),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const t=new qi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await J(this.popup.popup,"show"),this.currentOption&&_a(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new ji)}else{const t=new Hi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await J(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Wi)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ve(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ve(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,o=this.hint?!0:!!e,r=(this.hasUpdated||Ol)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,a=!!(this.placeholder&&(!this.value||this.value.length===0));return p`
      <div
        part="form-control"
        class=${z({"form-control":!0,"form-control-has-label":i})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${z({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${z({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":a})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?p`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${r?p`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${z({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};F.css=[np,Ne,Et];n([y(".select")],F.prototype,"popup",2);n([y(".combobox")],F.prototype,"combobox",2);n([y(".display-input")],F.prototype,"displayInput",2);n([y(".value-input")],F.prototype,"valueInput",2);n([y(".listbox")],F.prototype,"listbox",2);n([w()],F.prototype,"displayLabel",2);n([w()],F.prototype,"currentOption",2);n([w()],F.prototype,"selectedOptions",2);n([w()],F.prototype,"optionValues",2);n([c({reflect:!0})],F.prototype,"name",2);n([c({attribute:!1})],F.prototype,"defaultValue",1);n([c({attribute:"value",reflect:!1})],F.prototype,"value",1);n([c({reflect:!0})],F.prototype,"size",2);n([c()],F.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],F.prototype,"multiple",2);n([c({attribute:"max-options-visible",type:Number})],F.prototype,"maxOptionsVisible",2);n([c({type:Boolean})],F.prototype,"disabled",2);n([c({attribute:"with-clear",type:Boolean})],F.prototype,"withClear",2);n([c({type:Boolean,reflect:!0})],F.prototype,"open",2);n([c({reflect:!0})],F.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],F.prototype,"pill",2);n([c()],F.prototype,"label",2);n([c({reflect:!0})],F.prototype,"placement",2);n([c({attribute:"hint"})],F.prototype,"hint",2);n([c({attribute:"with-label",type:Boolean})],F.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],F.prototype,"withHint",2);n([c({type:Boolean,reflect:!0})],F.prototype,"required",2);n([c({attribute:!1})],F.prototype,"getTag",2);n([x("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);n([x("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);n([x("open",{waitUntilFirstUpdate:!0})],F.prototype,"handleOpenChange",1);F=n([v("wa-select")],F);var lp=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};var cp=k`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`;var mi=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new lp)}render(){return p`
      <slot part="content" class="content"></slot>

      ${this.withRemove?p`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};mi.css=[cp,Mr,Et];n([c({reflect:!0})],mi.prototype,"variant",2);n([c({reflect:!0})],mi.prototype,"appearance",2);n([c({reflect:!0})],mi.prototype,"size",2);n([c({type:Boolean,reflect:!0})],mi.prototype,"pill",2);n([c({attribute:"with-remove",type:Boolean})],mi.prototype,"withRemove",2);mi=n([v("wa-tag")],mi);var dp=k`
  :host {
    --color: var(--wa-color-neutral-fill-normal);
    --sheen-color: color-mix(in oklab, var(--color), var(--wa-color-surface-raised));

    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--wa-border-radius-pill);
  }

  :host([effect='sheen']) .indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  :host([effect='pulse']) .indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;var $r=class extends A{constructor(){super(...arguments),this.effect="none"}render(){return p` <div part="indicator" class="indicator"></div> `}};$r.css=dp;n([c({reflect:!0})],$r.prototype,"effect",2);$r=n([v("wa-skeleton")],$r);var hp=k`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label:has(*:not(:empty)) ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`;var up=()=>{const t=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(e){const i={message:"",isValid:!0,invalidKeys:[]},o=(r,a,s,l)=>{const d=document.createElement("input");return d.type="range",d.min=String(a),d.max=String(s),d.step=String(l),d.value=String(r),d.checkValidity(),d.validationMessage};if(e.required&&!e.hasInteracted)return i.isValid=!1,i.invalidKeys.push("valueMissing"),i.message=t.validationMessage||"Please fill out this field.",i;if(e.isRange){const r=e.minValue,a=e.maxValue;if(r<e.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=o(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,i;if(a>e.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=o(a,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,i;if(e.step&&e.step!==1){const s=(r-e.min)%e.step!==0,l=(a-e.min)%e.step!==0;if(s||l){i.isValid=!1,i.invalidKeys.push("stepMismatch");const d=s?r:a;return i.message=o(d,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,i}}}else{const r=e.value;if(r<e.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=o(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,i;if(r>e.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=o(r,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,i;if(e.step&&e.step!==1&&(r-e.min)%e.step!==0)return i.isValid=!1,i.invalidKeys.push("stepMismatch"),i.message=o(r,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,i}return i}}},M=class extends Q{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new qt(this,"hint","label"),this.localize=new U(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,up()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){if(this.valueHasChanged){const e=this._value??this.minValue??0;return _(e,this.min,this.max)}const t=this._value??this.defaultValue;return _(t,this.min,this.max)}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new ir(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new ir(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new ir(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const i=this.getValueFromCoordinates(t,e),o=Math.abs(i-this.minValue),r=Math.abs(i-this.maxValue);if(o===r)if(i>this.maxValue)this.activeThumb="max";else if(i<this.minValue)this.activeThumb="min";else{const a=this.localize.dir()==="rtl",s=this.orientation==="vertical",l=s?e:t,d=this.lastTrackPosition||l;this.lastTrackPosition=l;const h=l>d!==a&&!s||l<d&&s;this.activeThumb=h?"max":"min"}else this.activeThumb=o<=r?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new ir(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(t){if(t.has("range")&&this.requestUpdate(),this.isRange?(t.has("minValue")||t.has("maxValue"))&&(this.minValue=_(this.minValue,this.min,this.maxValue),this.maxValue=_(this.maxValue,this.minValue,this.max),this.updateFormValue()):t.has("value")&&this.setValue(String(this.value)),(t.has("min")||t.has("max"))&&this.isRange&&(this.minValue=_(this.minValue,this.min,this.max),this.maxValue=_(this.maxValue,this.min,this.max)),t.has("disabled")&&this.customStates.set("disabled",this.disabled),t.has("disabled")||t.has("readonly")){const e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??String(this.min))),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,i=Number(this.step),o=Number(this.min),r=Number(this.max);return t=Math.round(t/i)*i,t=_(t,o,r),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const i=this.localize.dir()==="rtl",o=this.orientation==="vertical",{top:r,right:a,bottom:s,left:l,height:d,width:h}=this.trackBoundingClientRect,u=o?e:t,f=o?{start:r,end:s,size:d}:{start:l,end:a,size:h},g=(o||i?f.end-u:u-f.start)/f.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*g)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e=this.localize.dir()==="rtl",i=t.target;if(this.disabled||this.readonly||this.isRange&&(i===this.thumbMin?this.activeThumb="min":i===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const o=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let r=o;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),r=this.clampAndRoundToStep(o+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),r=this.clampAndRoundToStep(o-this.step);break;case"Home":t.preventDefault(),r=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),r=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();const a=Math.max(o+(this.max-this.min)/10,o+this.step);r=this.clampAndRoundToStep(a);break;case"PageDown":t.preventDefault();const s=Math.min(o-(this.max-this.min)/10,o-this.step);r=this.clampAndRoundToStep(s);break;case"Enter":Za(t,this);return}r!==o&&(this.isRange?(this.activeThumb==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),this.updateFormValue()):this.value=_(r,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const i=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,i){const o=this.getValueFromCoordinates(t,e),r=i==="min"?this.minValue:this.maxValue;i==="min"?o>this.maxValue?(this.maxValue=o,this.minValue=o):this.minValue=Math.max(this.min,o):o<this.minValue?(this.minValue=o,this.maxValue=o):this.maxValue=Math.min(this.max,o),r!==(i==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(){if(this.isRange){const t=new FormData;t.append(this.name||"",String(this.minValue)),t.append(this.name||"",String(this.maxValue)),this.setValue(t)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=_(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=_(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("hint"),i=this.label?!0:!!t,o=this.hint?!0:!!e,r=this.hasSlotController.test("reference"),a=z({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),s=[];if(this.withMarkers)for(let m=this.min;m<=this.max;m+=this.step)s.push(this.getPercentageFromValue(m));const l=p`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${z({vh:!i,"has-label":i})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,d=p`
      <div
        id="hint"
        part="hint"
        class=${z({"has-slotted":o})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,h=this.withMarkers?p`
          <div id="markers" part="markers">
            ${s.map(m=>p`<span part="marker" class="marker" style=${et({"--position":`${m}%`})}></span>`)}
          </div>
        `:"",u=r?p`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",f=(m,g)=>this.withTooltip?p`
            <wa-tooltip
              id=${`tooltip${m!=="thumb"?"-"+m:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${m}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(g):this.localize.number(g)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const m=_(this.getPercentageFromValue(this.minValue),0,100),g=_(this.getPercentageFromValue(this.maxValue),0,100);return p`
        ${l}

        <div id="slider" part="slider" class=${a}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${et({"--start":`${Math.min(m,g)}%`,"--end":`${Math.max(m,g)}%`})}
            ></div>

            ${h}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${et({"--position":`${m}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${et({"--position":`${g}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${u} ${d}
        </div>

        ${f("thumb-min",this.minValue)} ${f("thumb-max",this.maxValue)}
      `}else{const m=_(this.getPercentageFromValue(this.value),0,100),g=_(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return p`
        ${l}

        <div
          id="slider"
          part="slider"
          class=${a}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${et({"--start":`${g}%`,"--end":`${m}%`})}
            ></div>

            ${h}
            <span id="thumb" part="thumb" style=${et({"--position":`${m}%`})}></span>
          </div>

          ${u} ${d}
        </div>

        ${f("thumb",this.value)}
      `}}};M.formAssociated=!0;M.observeSlots=!0;M.css=[Et,Ne,hp];n([y("#slider")],M.prototype,"slider",2);n([y("#thumb")],M.prototype,"thumb",2);n([y("#thumb-min")],M.prototype,"thumbMin",2);n([y("#thumb-max")],M.prototype,"thumbMax",2);n([y("#track")],M.prototype,"track",2);n([y("#tooltip")],M.prototype,"tooltip",2);n([c()],M.prototype,"label",2);n([c({attribute:"hint"})],M.prototype,"hint",2);n([c({reflect:!0})],M.prototype,"name",2);n([c({type:Number,attribute:"min-value"})],M.prototype,"minValue",2);n([c({type:Number,attribute:"max-value"})],M.prototype,"maxValue",2);n([c({attribute:"value",reflect:!0,type:Number})],M.prototype,"defaultValue",2);n([w()],M.prototype,"value",1);n([c({type:Boolean,reflect:!0})],M.prototype,"range",2);n([c({type:Boolean})],M.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],M.prototype,"readonly",2);n([c({reflect:!0})],M.prototype,"orientation",2);n([c({reflect:!0})],M.prototype,"size",2);n([c({attribute:"indicator-offset",type:Number})],M.prototype,"indicatorOffset",2);n([c({type:Number})],M.prototype,"min",2);n([c({type:Number})],M.prototype,"max",2);n([c({type:Number})],M.prototype,"step",2);n([c({type:Boolean,reflect:!0})],M.prototype,"required",2);n([c({type:Boolean})],M.prototype,"autofocus",2);n([c({attribute:"tooltip-distance",type:Number})],M.prototype,"tooltipDistance",2);n([c({attribute:"tooltip-placement",reflect:!0})],M.prototype,"tooltipPlacement",2);n([c({attribute:"with-markers",type:Boolean})],M.prototype,"withMarkers",2);n([c({attribute:"with-tooltip",type:Boolean})],M.prototype,"withTooltip",2);n([c({attribute:!1})],M.prototype,"valueFormatter",2);M=n([v("wa-slider")],M);var pp=k`
  :host {
    --divider-width: 0.25rem;
    --divider-hit-area: 0.75rem;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--wa-color-neutral-border-normal);
    color: var(--wa-color-neutral-on-normal);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    outline: var(--wa-focus-ring);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([orientation='vertical'], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([orientation='vertical'])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([orientation='vertical']) {
    flex-direction: column;
  }

  :host([orientation='vertical']:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([orientation='vertical']) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;var Nt=class extends A{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new U(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Fo(this,{onMove:(i,o)=>{let r=this.orientation==="vertical"?o:i;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(s=>{let l;s.endsWith("%")?l=this.size*(parseFloat(s)/100):l=parseFloat(s),e&&this.orientation==="horizontal"&&(l=this.size-l),r>=l-this.snapThreshold&&r<=l+this.snapThreshold&&(r=l)}),this.position=_(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&this.orientation==="horizontal"||t.key==="ArrowUp"&&this.orientation==="vertical")&&(e-=i),(t.key==="ArrowRight"&&this.orientation==="horizontal"||t.key==="ArrowDown"&&this.orientation==="vertical")&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const o=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=o})}this.position=_(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;if(this.size=this.orientation==="vertical"?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary){const o=this.pixelsToPercentage(this.cachedPositionInPixels);this.position!==o&&(this.position=o)}}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position);const t=this.percentageToPixels(this.position);this.positionInPixels!==t&&(this.positionInPixels=t),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new Dn)}handlePositionInPixelsChange(){const t=this.pixelsToPercentage(this.positionInPixels);this.position!==t&&(this.position=t)}handleVerticalChange(){this.detectSize()}render(){const t=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",e=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",i=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.style||(this.style={}),this.primary==="end"?i&&this.orientation==="horizontal"?this.style[t]=`${o} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${o}`:i&&this.orientation==="horizontal"?this.style[t]=`${r} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${r}`,this.style[e]="",p`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${$(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Nt.css=pp;n([y(".divider")],Nt.prototype,"divider",2);n([c({type:Number,reflect:!0})],Nt.prototype,"position",2);n([c({attribute:"position-in-pixels",type:Number})],Nt.prototype,"positionInPixels",2);n([c({reflect:!0})],Nt.prototype,"orientation",2);n([c({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);n([c()],Nt.prototype,"primary",2);n([c()],Nt.prototype,"snap",2);n([c({type:Number,attribute:"snap-threshold"})],Nt.prototype,"snapThreshold",2);n([x("position")],Nt.prototype,"handlePositionChange",1);n([x("positionInPixels")],Nt.prototype,"handlePositionInPixelsChange",1);n([x("vertical")],Nt.prototype,"handleVerticalChange",1);Nt=n([v("wa-split-panel")],Nt);var fp=k`
  :host {
    --height: var(--wa-form-control-toggle-size);
    --width: calc(var(--height) * 1.75);
    --thumb-size: 0.75em;

    display: inline-flex;
    line-height: var(--wa-form-control-value-line-height);
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    color: var(--wa-form-control-value-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--height);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    transition-property: translate, background, border-color, box-shadow;
    transition-duration: var(--wa-transition-normal);
    transition-timing-function: var(--wa-transition-easing);
  }

  .switch .thumb {
    aspect-ratio: 1 / 1;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    translate: calc((var(--width) - var(--height)) / -2);
    transition: inherit;
  }

  .input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Focus */
  label:not(.disabled) .input:focus-visible ~ .switch .thumb {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Checked */
  .checked .switch {
    background-color: var(--wa-form-control-activated-color);
    border-color: var(--wa-form-control-activated-color);
  }

  .checked .switch .thumb {
    background-color: var(--wa-color-surface-default);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Disabled */
  label:has(> :disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part~='label'] {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  @media (forced-colors: active) {
    :checked:enabled + .switch:hover .thumb,
    :checked + .switch .thumb {
      background-color: ButtonText;
    }
  }
`;var xt=class extends Q{constructor(){super(...arguments),this.hasSlotController=new qt(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,Wo()]}get value(){return this._value??"on"}set value(t){this._value=t}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}firstUpdated(t){super.firstUpdated(t),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,e=this.hint?!0:!!t;return p`
      <label
        part="base"
        class=${z({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${$(this.name)}
          value=${$(this.value)}
          .checked=${Di(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${z({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};xt.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};xt.css=[Ne,Et,fp];n([y('input[type="checkbox"]')],xt.prototype,"input",2);n([c()],xt.prototype,"title",2);n([c({reflect:!0})],xt.prototype,"name",2);n([c({reflect:!0})],xt.prototype,"value",1);n([c({reflect:!0})],xt.prototype,"size",2);n([c({type:Boolean})],xt.prototype,"disabled",2);n([c({type:Boolean,attribute:!1})],xt.prototype,"checked",1);n([c({type:Boolean,attribute:"checked",reflect:!0})],xt.prototype,"defaultChecked",2);n([c({type:Boolean,reflect:!0})],xt.prototype,"required",2);n([c({attribute:"hint"})],xt.prototype,"hint",2);n([c({attribute:"with-hint",type:Boolean})],xt.prototype,"withHint",2);n([x(["checked","defaultChecked"])],xt.prototype,"handleStateChange",1);n([x("disabled",{waitUntilFirstUpdate:!0})],xt.prototype,"handleDisabledChange",1);xt=n([v("wa-switch")],xt);var mp=k`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
    font-weight: var(--wa-font-weight-action);
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font: inherit;
    padding: 1em 1.5em;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);

    ::slotted(wa-icon:first-child) {
      margin-inline-end: 0.5em;
    }

    ::slotted(wa-icon:last-child) {
      margin-inline-start: 0.5em;
    }
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])) .tab {
      color: currentColor;
    }
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) .tab {
    outline: var(--wa-focus-ring);
    outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
  }

  :host([active]:not([disabled])) {
    color: var(--wa-color-brand-on-quiet);
  }

  :host([disabled]) .tab {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (forced-colors: active) {
    :host([active]:not([disabled])) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var gp=0,Me=class extends A{constructor(){super(...arguments),this.attrId=++gp,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,p`
      <div
        part="base"
        class=${z({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Me.css=mp;n([y(".tab")],Me.prototype,"tab",2);n([c({reflect:!0})],Me.prototype,"panel",2);n([c({type:Boolean,reflect:!0})],Me.prototype,"active",2);n([c({type:Boolean,reflect:!0})],Me.prototype,"disabled",2);n([c({type:Number,reflect:!0})],Me.prototype,"tabIndex",2);n([x("active")],Me.prototype,"handleActiveChange",1);n([x("disabled")],Me.prototype,"handleDisabledChange",1);Me=n([v("wa-tab")],Me);var bp=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var wp=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var vp=k`
  :host {
    --indicator-color: var(--wa-color-brand-fill-loud);
    --track-color: var(--wa-color-neutral-fill-normal);
    --track-width: 0.125rem;

    /* Private */
    --safe-track-width: max(0.5px, round(var(--track-width), 0.5px));

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tabs {
    display: flex;
    position: relative;
  }

  .indicator {
    position: absolute;
  }

  .tab-group-has-scroll-controls .nav-container {
    position: relative;
    padding: 0 1.5em;
  }

  .body {
    display: block;
  }

  .scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5em;
  }

  .scroll-button-start {
    inset-inline-start: 0;
  }

  .scroll-button-end {
    inset-inline-end: 0;
  }

  /*
    * Top
    */

  .tab-group-top {
    flex-direction: column;
  }

  .tab-group-top .nav-container {
    order: 1;
  }

  .tab-group-top .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-top .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-top .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-top .indicator {
    bottom: calc(-1 * var(--safe-track-width));
    border-bottom: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-top .body {
    order: 2;
  }

  .tab-group-top ::slotted(wa-tab[active]) {
    border-block-end: solid var(--safe-track-width) var(--indicator-color);
    margin-block-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-top ::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Bottom
    */

  .tab-group-bottom {
    flex-direction: column;
  }

  .tab-group-bottom .nav-container {
    order: 2;
  }

  .tab-group-bottom .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-bottom .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-bottom .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-bottom .indicator {
    top: calc(-1 * var(--safe-track-width));
    border-top: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-bottom .body {
    order: 1;
  }

  .tab-group-bottom ::slotted(wa-tab[active]) {
    border-block-start: solid var(--safe-track-width) var(--indicator-color);
    margin-block-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-bottom ::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Start
    */

  .tab-group-start {
    flex-direction: row;
  }

  .tab-group-start .nav-container {
    order: 1;
  }

  .tab-group-start .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-start .indicator {
    inset-inline-end: calc(-1 * var(--safe-track-width));
    border-right: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-start .body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group-start ::slotted(wa-tab[active]) {
    border-inline-end: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-start ::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }

  /*
    * End
    */

  .tab-group-end {
    flex-direction: row;
  }

  .tab-group-end .nav-container {
    order: 2;
  }

  .tab-group-end .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-end .indicator {
    inset-inline-start: calc(-1 * var(--safe-track-width));
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-end .body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group-end ::slotted(wa-tab[active]) {
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-end ::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }
`;var ee=class extends A{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new U(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels());const e=t.filter(i=>i.target.closest("wa-tab-group")===this);if(e.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(i=>i.attributeName==="active")){const o=e.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="wa-tab").map(r=>r.target).find(r=>r.active);o&&o.closest("wa-tab-group")===this&&this.setActiveTab(o)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,i)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const o=this.tabs.find(r=>r.panel===this.active);o&&this.setActiveTab(o)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});i.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("wa-tab");i?.closest("wa-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("wa-tab");if(i?.closest("wa-tab-group")===this){if(["Enter"," "].includes(t.key)){i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.tabs.find(l=>l.matches(":focus")),a=this.localize.dir()==="rtl";let s=null;if(r?.tagName.toLowerCase()==="wa-tab"){if(t.key==="Home")s=this.focusableTabs[0];else if(t.key==="End")s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const l=this.tabs.findIndex(d=>d===r);s=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const l=this.tabs.findIndex(d=>d===r);s=this.findNextFocusableTab(l,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===s?0:-1}),["top","bottom"].includes(this.placement)&&_a(s,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,e){let i=null;const o=e==="forward"?1:-1;let r=t+o;for(;t<this.tabs.length;){if(i=this.tabs[r]||null,i===null){e==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;r+=o}return i}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>o.active=o.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&_a(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.dispatchEvent(new bp({name:i.panel})),this.dispatchEvent(new wp({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const t=this.tabs.find(e=>e.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
      <div
        part="base"
        class=${z({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?p`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${t?"chevron-right":"chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              `:""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?p`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${t?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ee.css=vp;n([y(".tab-group")],ee.prototype,"tabGroup",2);n([y(".body")],ee.prototype,"body",2);n([y(".nav")],ee.prototype,"nav",2);n([w()],ee.prototype,"hasScrollControls",2);n([c({reflect:!0})],ee.prototype,"active",2);n([c()],ee.prototype,"placement",2);n([c()],ee.prototype,"activation",2);n([c({attribute:"without-scroll-controls",type:Boolean})],ee.prototype,"withoutScrollControls",2);n([x("active")],ee.prototype,"updateActiveTab",1);n([x("withoutScrollControls",{waitUntilFirstUpdate:!0})],ee.prototype,"updateScrollControls",1);ee=n([v("wa-tab-group")],ee);var yp=k`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var xp=0,co=class extends A{constructor(){super(...arguments),this.attrId=++xp,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return p`
      <slot
        part="base"
        class=${z({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};co.css=yp;n([c({reflect:!0})],co.prototype,"name",2);n([c({type:Boolean,reflect:!0})],co.prototype,"active",2);n([x("active")],co.prototype,"handleActiveChange",1);co=n([v("wa-tab-panel")],co);var kp=k`
  :host {
    border-width: 0;
  }

  .textarea {
    display: grid;
    align-items: center;
    margin: 0;
    border: none;
    outline: none;
    cursor: inherit;
    font: inherit;
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    -webkit-appearance: none;

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .textarea {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    font: inherit;
    color: inherit;
    padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
    min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    box-shadow: none;
    margin: 0;

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &:focus {
      outline: none;
    }
  }

  /* Shared textarea and size-adjuster positioning */
  .control,
  .size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    padding: 0;
  }

  textarea::-webkit-search-decoration,
  textarea::-webkit-search-cancel-button,
  textarea::-webkit-search-results-button,
  textarea::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /*
   * Resize types
   */

  :host([resize='none']) textarea {
    resize: none;
  }

  textarea,
  :host([resize='vertical']) textarea {
    resize: vertical;
  }

  :host([resize='horizontal']) textarea {
    resize: horizontal;
  }

  :host([resize='both']) textarea {
    resize: both;
  }

  :host([resize='auto']) textarea {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;var V=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new qt(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Wo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const t=this.input.value;this.value=t}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${t}px`}if(this.input.style.height){const t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${t}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&this.setTextareaDimensions(),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const r=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,r,a,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this._value=null,this.input&&(this.input.value=this.value||""),super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,o=this.hint?!0:!!e;return p`
      <label
        part="form-control-label label"
        class=${z({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${$(this.name)}
          .value=${Di(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${$(this.placeholder)}
          rows=${$(this.rows)}
          minlength=${$(this.minlength)}
          maxlength=${$(this.maxlength)}
          autocapitalize=${$(this.autocapitalize)}
          autocorrect=${$(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${$(this.spellcheck)}
          enterkeyhint=${$(this.enterkeyhint)}
          inputmode=${$(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize!=="auto"}></div>
      </div>

      <slot
        id="hint"
        name="hint"
        part="hint"
        aria-hidden=${o?"false":"true"}
        class=${z({"has-slotted":o})}
        >${this.hint}</slot
      >
    `}};V.css=[kp,Ne,Et];n([y(".control")],V.prototype,"input",2);n([y('[part~="base"]')],V.prototype,"base",2);n([y(".size-adjuster")],V.prototype,"sizeAdjuster",2);n([c()],V.prototype,"title",2);n([c({reflect:!0})],V.prototype,"name",2);n([w()],V.prototype,"value",1);n([c({attribute:"value",reflect:!0})],V.prototype,"defaultValue",2);n([c({reflect:!0})],V.prototype,"size",2);n([c({reflect:!0})],V.prototype,"appearance",2);n([c()],V.prototype,"label",2);n([c({attribute:"hint"})],V.prototype,"hint",2);n([c()],V.prototype,"placeholder",2);n([c({type:Number})],V.prototype,"rows",2);n([c({reflect:!0})],V.prototype,"resize",2);n([c({type:Boolean})],V.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],V.prototype,"readonly",2);n([c({type:Boolean,reflect:!0})],V.prototype,"required",2);n([c({type:Number})],V.prototype,"minlength",2);n([c({type:Number})],V.prototype,"maxlength",2);n([c()],V.prototype,"autocapitalize",2);n([c()],V.prototype,"autocorrect",2);n([c()],V.prototype,"autocomplete",2);n([c({type:Boolean})],V.prototype,"autofocus",2);n([c()],V.prototype,"enterkeyhint",2);n([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],V.prototype,"spellcheck",2);n([c()],V.prototype,"inputmode",2);n([c({attribute:"with-label",type:Boolean})],V.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],V.prototype,"withHint",2);n([x("rows",{waitUntilFirstUpdate:!0})],V.prototype,"handleRowsChange",1);n([x("value",{waitUntilFirstUpdate:!0})],V.prototype,"handleValueChange",1);V=n([v("wa-textarea")],V);var Cp=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Sp=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}};var $p=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Ep=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var Lp=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var Ap=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var zp=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var Tp=k`
  :host {
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: block;
    color: var(--wa-color-text-normal);
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(wa-icon) {
    margin-inline-end: var(--wa-space-xs);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
  }

  .checkbox {
    line-height: var(--wa-form-control-value-line-height);
    pointer-events: none;
  }

  .expand-button,
  .checkbox,
  .label {
    font-family: inherit;
    font-size: var(--wa-font-size-m);
    font-weight: inherit;
  }

  .checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wa-color-text-quiet);
    width: 2em;
    height: 2em;
    flex-shrink: 0;
    cursor: pointer;
  }

  .expand-button {
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .tree-item-expanded .expand-button {
    rotate: 90deg;
  }

  .tree-item-expanded:dir(rtl) .expand-button {
    rotate: -90deg;
  }

  .tree-item-expanded:not(.tree-item-loading) slot[name='expand-icon'],
  .tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-icon-slot {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-button {
    cursor: default;
  }

  .tree-item-loading .expand-icon-slot wa-icon {
    display: none;
  }

  .expand-button-visible {
    cursor: pointer;
  }

  .item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  :host([disabled]) .item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .item {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item-selected .item {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-inline-start-color: var(--wa-color-brand-fill-loud);
  }

  :host(:not([aria-disabled='true'])) .expand-button {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: flex;
    align-items: center;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--wa-space-m)));
  }

  /* Indentation lines */
  .children {
    position: relative;
  }

  .children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    inset-inline-start: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item-selected .item {
      outline: dashed 1px SelectedItem;
    }
  }
`;var W=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new Ap);const t=vr(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await wr(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new zp)}isNestedItem(){const t=this.parentElement;return!!t&&W.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new Ep),this.childrenContainer.hidden=!1;const t=vr(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await wr(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new Lp)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new $p)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new Sp)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>W.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.localize.dir()==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return p`
      <div
        part="base"
        class="${z({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":e})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${z({"expand-button":!0,"expand-button-visible":e})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${lt(this.loading,()=>p` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>p`
                  <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${lt(this.selectable,()=>p`
              <wa-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Di(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `)}

          <slot class="label" part="label"></slot>
        </div>

        <div class="children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};W.css=Tp;n([w()],W.prototype,"indeterminate",2);n([w()],W.prototype,"isLeaf",2);n([w()],W.prototype,"loading",2);n([w()],W.prototype,"selectable",2);n([c({type:Boolean,reflect:!0})],W.prototype,"expanded",2);n([c({type:Boolean,reflect:!0})],W.prototype,"selected",2);n([c({type:Boolean,reflect:!0})],W.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],W.prototype,"lazy",2);n([y("slot:not([name])")],W.prototype,"defaultSlot",2);n([y("slot[name=children]")],W.prototype,"childrenSlot",2);n([y(".item")],W.prototype,"itemElement",2);n([y(".children")],W.prototype,"childrenContainer",2);n([y(".expand-button slot")],W.prototype,"expandButtonSlot",2);n([x("loading",{waitUntilFirstUpdate:!0})],W.prototype,"handleLoadingChange",1);n([x("disabled")],W.prototype,"handleDisabledChange",1);n([x("expanded")],W.prototype,"handleExpandedState",1);n([x("indeterminate")],W.prototype,"handleIndeterminateStateChange",1);n([x("selected")],W.prototype,"handleSelectedChange",1);n([x("expanded",{waitUntilFirstUpdate:!0})],W.prototype,"handleExpandedChange",1);n([x("expanded",{waitUntilFirstUpdate:!0})],W.prototype,"handleExpandAnimation",1);n([x("lazy",{waitUntilFirstUpdate:!0})],W.prototype,"handleLazyChange",1);W=n([v("wa-tree-item")],W);var Rp=k`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--wa-color-surface-border);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--wa-space-l);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Ys(t,e=!1){function i(a){const s=a.getChildrenItems({includeDisabled:!1});if(s.length){const l=s.every(h=>h.selected),d=s.every(h=>!h.selected&&!h.indeterminate);a.selected=l,a.indeterminate=!l&&!d}}function o(a){const s=a.parentElement;W.isTreeItem(s)&&(i(s),o(s))}function r(a){for(const s of a.getChildrenItems())s.selected=e?a.selected||s.selected:!s.disabled&&a.selected,r(s);e&&i(a)}r(t),o(t)}var gi=class extends A{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new U(this),this.initTreeItem=t=>{t.updateComplete.then(()=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),o=this.getExpandButtonIcon(e);o&&(i===null?t.append(o):i.hasAttribute("data-default")&&i.replaceWith(o))})})},this.handleTreeChanged=t=>{for(const e of t){const i=[...e.addedNodes].filter(W.isTreeItem),o=[...e.removedNodes].filter(W.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),W.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){const i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const o=i.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),o.setAttribute("data-default",""),o.slot=`${t}-icon`,o}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Ys(t);else if(this.selection==="single"||t.isLeaf){const o=this.getAllTreeItems();for(const r of o)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(o=>!e.includes(o)))&&Promise.all(i.map(o=>o.updateComplete)).then(()=>{this.dispatchEvent(new Cp({selection:i}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>["input","textarea"].includes(r?.tagName?.toLowerCase())))return;const e=this.getFocusableItems(),i=this.matches(":dir(ltr)"),o=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(d=>d.matches(":focus")),a=e[r],s=d=>{const h=e[_(d,0,e.length-1)];this.focusItem(h)},l=d=>{a.expanded=d};t.key==="ArrowDown"?s(r+1):t.key==="ArrowUp"?s(r-1):i&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft"?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?s(r+1):l(!0):i&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight"?!a||a.disabled||a.isLeaf||!a.expanded?s(r-1):l(!1):t.key==="Home"?s(0):t.key==="End"?s(e.length-1):(t.key==="Enter"||t.key===" ")&&(a.disabled||this.selectItem(a))}}handleClick(t){const e=t.target,i=e.closest("wa-tree-item"),o=t.composedPath().some(r=>r?.classList?.contains("expand-button"));!i||i.disabled||e!==this.clickTarget||(o?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.updateComplete.then(()=>{i.selectable=t});t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(i=>{i.updateComplete.then(()=>{Ys(i,!0)})}))}get selectedItems(){const t=this.getAllTreeItems(),e=i=>i.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(i=>{if(i.disabled)return!1;const o=i.parentElement?.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(i),!e.has(i)})}render(){return p`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};gi.css=Rp;n([y("slot:not([name])")],gi.prototype,"defaultSlot",2);n([y("slot[name=expand-icon]")],gi.prototype,"expandedIconSlot",2);n([y("slot[name=collapse-icon]")],gi.prototype,"collapsedIconSlot",2);n([c()],gi.prototype,"selection",2);n([x("selection")],gi.prototype,"handleSelectionChange",1);gi=n([v("wa-tree")],gi);var Dp=k`
  :host {
    display: block;
    position: relative;
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: hidden;
    border-radius: var(--wa-border-radius-m);
  }

  #frame-container {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% / var(--zoom));
    height: calc(100% / var(--zoom));
    transform: scale(var(--zoom));
    transform-origin: 0 0;
  }

  #iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: inherit;
    /* Prevent the iframe from being selected, e.g. by a double click. Doesn't affect selection withing the iframe. */
    user-select: none;
    -webkit-user-select: none;
  }

  #controls {
    display: flex;
    position: absolute;
    bottom: 0.5em;
    align-items: center;
    font-weight: var(--wa-font-weight-semibold);
    padding: 0.25em 0.5em;
    gap: 0.5em;
    border-radius: var(--wa-border-radius-s);
    background: #000b;
    color: white;
    font-size: min(12px, 0.75em);
    user-select: none;
    -webkit-user-select: none;

    &:dir(ltr) {
      right: 0.5em;
    }

    &:dir(rtl) {
      left: 0.5em;
    }

    button {
      display: flex;
      align-items: center;
      padding: 0.25em;
      border: none;
      background: none;
      color: inherit;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        outline-offset: var(--wa-focus-ring-offset);
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    span {
      min-width: 4.5ch; /* extra space so numbers don't shift */
      font-variant-numeric: tabular-nums;
      text-align: center;
    }
  }
`;var Bt=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(t){const e=jr(t),i=[];for(const o of e){let r;if(o.endsWith("%")){const a=parseFloat(o.slice(0,-1));if(!isNaN(a))r=Math.max(0,a/100);else continue}else if(r=parseFloat(o),!isNaN(r))r=Math.max(0,r);else continue;i.push(r)}return[...new Set(i)].sort((o,r)=>o-r)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let t=0,e=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let i=1;i<this.availableZoomLevels.length;i++){const o=Math.abs(this.availableZoomLevels[i]-this.zoom);o<e&&(e=o,t=i)}return t}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(t){if(t.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),t.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const e=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[e]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[e])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const t=this.getCurrentZoomIndex();t<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[t+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const t=this.getCurrentZoomIndex();t>0&&(this.zoom=this.availableZoomLevels[t-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return p`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${$(this.sandbox??void 0)}
          src=${$(this.src??void 0)}
          srcdoc=${$(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?"":p`
            <div id="controls" part="controls">
              <button
                part="zoom-out-button"
                aria-label=${this.localize.term("zoomOut")}
                @click=${this.zoomOut}
                ?disabled=${this.isZoomOutDisabled()}
              >
                <slot name="zoom-out-icon">
                  <wa-icon name="minus" label="Zoom out"></wa-icon>
                </slot>
              </button>
              <span>${this.localize.number(this.zoom,{style:"percent",maximumFractionDigits:1})}</span>
              <button
                part="zoom-in-button"
                aria-label=${this.localize.term("zoomIn")}
                @click=${this.zoomIn}
                ?disabled=${this.isZoomInDisabled()}
              >
                <slot name="zoom-in-icon">
                  <wa-icon name="plus" label="Zoom in"></wa-icon>
                </slot>
              </button>
            </div>
          `}
    `}};Bt.css=Dp;n([y("#iframe")],Bt.prototype,"iframe",2);n([c()],Bt.prototype,"src",2);n([c()],Bt.prototype,"srcdoc",2);n([c({type:Boolean})],Bt.prototype,"allowfullscreen",2);n([c()],Bt.prototype,"loading",2);n([c()],Bt.prototype,"referrerpolicy",2);n([c()],Bt.prototype,"sandbox",2);n([c({type:Number,reflect:!0})],Bt.prototype,"zoom",2);n([c({attribute:"zoom-levels"})],Bt.prototype,"zoomLevels",2);n([c({type:Boolean,attribute:"without-controls",reflect:!0})],Bt.prototype,"withoutControls",2);n([c({type:Boolean,attribute:"without-interaction",reflect:!0})],Bt.prototype,"withoutInteraction",2);Bt=n([v("wa-zoomable-frame")],Bt);new MutationObserver(t=>{for(const{addedNodes:e}of t)for(const i of e)i.nodeType===Node.ELEMENT_NODE&&Ip(i)});async function Ip(t){const e=t instanceof Element?t.tagName.toLowerCase():"",i=e?.startsWith("wa-"),o=[...t.querySelectorAll(":not(:defined)")].map(s=>s.tagName.toLowerCase()).filter(s=>s.startsWith("wa-"));i&&!customElements.get(e)&&o.push(e);const r=[...new Set(o)],a=await Promise.allSettled(r.map(s=>_p(s)));for(const s of a)s.status==="rejected"&&console.warn(s.reason);await new Promise(requestAnimationFrame),t.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function _p(t){if(customElements.get(t))return Promise.resolve();const e=t.replace(/^wa-/i,""),i=Yl(`components/${e}/${e}.js`);return new Promise((o,r)=>{import(i).then(()=>o()).catch(()=>r(new Error(`Unable to autoload <${t}> from ${i}`)))})}const Op="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Pp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-22%200%20300%20300'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M10.5838307,156.409656%20L10.5838307,156.196646%20L10.5838307,123.657627%20L17.7200527,123.657627%20L17.7200527,158.912657%20C18.0516208,161.753926%2017.8075656,164.63288%2017.0023629,167.377784%20C16.19722,170.122687%2014.8474392,172.677251%2013.0335946,174.88924%20C9.6624625,177.797086%205.34298451,179.369568%200.891381719,179.309391%20L0.145805038,173.983903%20C3.01718628,173.985518%205.78730255,172.922981%207.92105685,171.001585%20C9.83826599,168.76489%2010.5838307,165.729334%2010.5838307,156.409656%20Z%20M63.8037763,152.209035%20C63.8037763,156.203166%2063.8037763,159.771277%2064.1232613,162.860071%20L57.7859014,162.860071%20L57.3598815,156.522711%20C56.0343268,158.765028%2054.1386519,160.616318%2051.8656486,161.888456%20C49.5925854,163.160593%2047.0232464,163.808237%2044.4187946,163.765408%20C38.2412071,163.765408%2030.8919752,160.410366%2030.8919752,146.723715%20L30.8919752,123.983721%20L38.0281972,123.983721%20L38.0281972,145.285823%20C38.0281972,152.688352%2040.3181887,157.641058%2046.7620834,157.641058%20C48.0878176,157.655354%2049.4030239,157.404719%2050.6306575,156.903927%20C51.8582911,156.403136%2052.9735276,155.662296%2053.9110465,154.724777%20C54.8485056,153.787318%2055.5894046,152.672022%2056.0901963,151.444448%20C56.5909282,150.216815%2056.8415633,148.901549%2056.8273268,147.575814%20L56.8273268,123.717444%20L63.9634889,123.717444%20L63.9634889,151.996025%20L63.8037763,152.209035%20Z%20M77.330762,136.653806%20C77.330762,131.70104%2077.330762,127.653648%2077.0112304,123.979032%20L83.4018876,123.979032%20L83.7213726,130.635931%20C85.1452074,128.23088%2087.1949721,126.257257%2089.6521533,124.925482%20C92.1093944,123.593709%2094.8819333,122.953703%2097.6742718,123.073695%20C107.153723,123.073695%20114.289945,131.008713%20114.289945,142.831393%20C114.289945,156.784292%20105.715831,163.707504%2096.4493898,163.707504%20C94.0776877,163.813321%2091.7187865,163.305232%2089.6009496,162.232346%20C87.4831127,161.159401%2085.6780613,159.558028%2084.3604623,157.583154%20L84.3604623,178.885226%20L77.330762,178.885226%20L77.330762,136.813578%20L77.330762,136.653806%20Z%20M84.3604623,147.038594%20C84.3797833,148.004885%2084.4867369,148.967408%2084.6800071,149.914378%20C85.2842232,152.279021%2086.6597255,154.374666%2088.5887785,155.869683%20C90.5178913,157.364761%2092.8904309,158.173852%2095.3310427,158.168947%20C102.840047,158.168947%20107.260258,152.044597%20107.260258,143.150938%20C107.260258,135.375686%20103.106354,128.718758%2095.59735,128.718758%20C92.6257387,128.962101%2089.844945,130.280974%2087.7762781,132.428062%20C85.7076111,134.575149%2084.4931374,137.403079%2084.3604623,140.381689%20L84.3604623,147.038594%20Z%20M127.004503,123.94359%20L135.578617,146.896647%20C136.483954,149.452886%20137.442529,152.54168%20138.081618,154.831671%20C138.827183,152.488442%20139.625985,149.506124%20140.58462,146.736875%20L148.359872,123.94359%20L155.868876,123.94359%20L145.21784,151.636343%20C139.892293,164.950152%20136.643726,171.820127%20131.744199,175.97403%20C129.27643,178.228071%20126.267791,179.805756%20123.010354,180.553953%20L121.252929,174.589376%20C123.530581,173.840999%20125.645092,172.666304%20127.48382,171.127799%20C130.081872,169.010501%20132.14366,166.310102%20133.501635,163.246013%20C133.792288,162.715372%20133.990404,162.139031%20134.087428,161.541814%20C134.026892,160.899135%20133.865146,160.270094%20133.60817,159.677902%20L119.122716,123.837079%20L126.897968,123.837079%20L127.004503,123.94359%20Z%20M174.813541,112.770851%20L174.813541,123.954441%20L185.038557,123.954441%20L185.038557,129.279989%20L174.813541,129.279989%20L174.813541,150.262575%20C174.813541,155.055568%20176.198196,157.824817%20180.139089,157.824817%20C181.538758,157.847727%20182.935316,157.686579%20184.292992,157.345559%20L184.612537,162.671047%20C182.57671,163.376355%20180.428486,163.701283%20178.275118,163.629682%20C176.849069,163.718929%20175.420569,163.498622%20174.087657,162.983833%20C172.754744,162.469044%20171.549004,161.671976%20170.553103,160.647363%20C168.383883,157.745977%20167.394359,154.130491%20167.783854,150.528882%20L167.783854,129.226751%20L161.712742,129.226751%20L161.712742,123.901204%20L167.890329,123.901204%20L167.890329,114.421764%20L174.813541,112.770851%20Z%20M198.184399,144.647511%20C198.03988,146.453639%20198.289199,148.269577%20198.915189,149.969888%20C199.541179,151.670199%20200.528884,153.214267%20201.810114,154.495437%20C203.091285,155.776667%20204.635352,156.764373%20206.335664,157.390363%20C208.035975,158.016352%20209.851913,158.265672%20211.658041,158.121153%20C215.311153,158.202863%20218.940457,157.513288%20222.309077,156.097409%20L223.533958,161.422956%20C219.400274,163.12572%20214.955358,163.942168%20210.486396,163.819423%20C207.881107,163.997798%20205.268101,163.61054%20202.826592,162.684147%20C200.385023,161.757814%20198.172795,160.3143%20196.341489,158.452721%20C194.51022,156.591082%20193.103284,154.355345%20192.217196,151.898941%20C191.331104,149.442478%20190.986827,146.82349%20191.207978,144.221491%20C191.207978,132.505346%20198.184399,123.238905%20209.581059,123.238905%20C222.362314,123.238905%20225.557643,134.422495%20225.557643,141.558717%20C225.625954,142.658281%20225.625954,143.761016%20225.557643,144.860581%20L198.024687,144.860581%20L198.184399,144.647511%20Z%20M219.06051,139.322023%20C219.266043,137.898188%20219.163995,136.446897%20218.761184,135.065892%20C218.358433,133.684886%20217.664311,132.406228%20216.725656,131.316115%20C215.786941,130.226062%20214.625525,129.349856%20213.31959,128.746561%20C212.013656,128.143278%20210.59353,127.826939%20209.155039,127.818864%20C206.228949,128.030665%20203.487515,129.327603%20201.467959,131.455549%20C199.448402,133.583436%20198.296377,136.388874%20198.237697,139.322023%20L219.06051,139.322023%20Z%20M236.385366,136.053478%20C236.385366,131.473555%20236.385366,127.532637%20236.065834,123.911277%20L242.456492,123.911277%20L242.456492,131.526792%20L242.775977,131.526792%20C243.446769,129.176325%20244.83268,127.093027%20246.741335,125.566097%20C248.64999,124.039161%20250.986699,123.144369%20253.427072,123.005938%20C254.098762,122.917777%20254.779066,122.917777%20255.450756,123.005938%20L255.450756,129.66288%20C254.63688,129.568608%20253.814868,129.568608%20253.000992,129.66288%20C250.58353,129.756495%20248.282771,130.726973%20246.528505,132.393068%20C244.774238,134.059104%20243.686458,136.306745%20243.468304,138.716252%20C243.269171,139.805946%20243.162278,140.910475%20243.148819,142.018055%20L243.148819,162.734394%20L236.11909,162.734394%20L236.11909,136.106715%20L236.385366,136.053478%20Z'%20fill='%234E4E4E'%3e%3c/path%3e%3cpath%20d='M233.257943,16.9621357%20C233.476636,20.5398773%20232.625434,24.1017075%20230.812666,27.1939108%20C228.999898,30.286174%20226.307754,32.7687777%20223.079047,34.3255867%20C219.85034,35.8823358%20216.231324,36.4427655%20212.683013,35.9355136%20C209.134702,35.4282017%20205.817704,33.8761781%20203.154559,31.4770796%20C200.491421,29.0780409%20198.602703,25.9404959%20197.729013,22.4642047%20C196.855323,18.9879135%20197.036209,15.330196%20198.248625,11.9570899%20C199.461041,8.5839838%20201.650109,5.64808944%20204.536953,3.52346926%20C207.423803,1.39884909%20210.877782,0.181657262%20214.458814,0.0269503701%20C216.806708,-0.10224713%20219.156996,0.233972409%20221.374429,1.01627461%20C223.591922,1.79857323%20225.632893,3.01152758%20227.379981,4.58537259%20C229.12701,6.15922358%20230.54576,8.06291398%20231.554522,10.1869719%20C232.563283,12.3110298%20233.142196,14.6135829%20233.257943,16.9621357%20Z'%20fill='%23767677'%3e%3c/path%3e%3cpath%20d='M127.952969,225.540984%20C80.0236372,225.540984%2037.8984531,208.339518%2016.1170646,182.936721%20C24.5683135,205.78944%2039.8176362,225.504615%2059.8124569,239.428562%20C79.8070981,253.352629%20103.588124,260.816651%20127.952969,260.816651%20C152.318411,260.816651%20176.098839,253.352629%20196.094019,239.428562%20C216.0886,225.504615%20231.337863,205.78944%20239.789471,182.936721%20C218.061379,208.339518%20176.095848,225.540984%20127.952969,225.540984%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M127.952969,60.3543133%20C175.882898,60.3543133%20218.008142,77.5557785%20239.789471,102.958396%20C231.337863,80.1058563%20216.0886,60.3906823%20196.094019,46.4667348%20C176.098839,32.5427873%20152.318411,25.0784666%20127.952969,25.0784666%20C103.588124,25.0784666%2079.8070981,32.5427873%2059.8124569,46.4667348%20C39.8176362,60.3906823%2024.5683135,80.1058563%2016.1170646,102.958396%20C37.8984531,77.502541%2079.8106871,60.3543133%20127.952969,60.3543133%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M61.9716874,274.975202%20C62.2528294,279.48161%2061.186045,283.969713%2058.9072992,287.867658%20C56.6284936,291.765602%2053.2409116,294.896926%2049.1761363,296.862707%20C45.1113611,298.828488%2040.5533909,299.539717%2036.0829934,298.905772%20C31.6125362,298.271767%2027.4320141,296.321359%2024.0740419,293.30297%20C20.7160636,290.284582%2018.3326671,286.334835%2017.2274978,281.957035%20C16.1223339,277.579176%2016.3454363,272.971497%2017.868382,268.720869%20C19.3913284,264.470301%2022.1451683,260.769335%2025.7790187,258.089483%20C29.4129289,255.40962%2033.7623156,253.872201%2038.2730898,253.673106%20C41.2280121,253.515051%2044.1851476,253.940738%2046.9755719,254.925846%20C49.7659364,255.910962%2052.3349165,257.436187%2054.5356604,259.414404%20C56.7364042,261.392633%2058.5259031,263.785032%2059.8017495,266.455044%20C61.0776558,269.124996%2061.8150255,272.02022%2061.9716874,274.975202%20Z'%20fill='%239E9E9E'%3e%3c/path%3e%3cpath%20d='M21.5641016,54.5650606%20C18.9814831,54.6363631%2016.4354131,53.9424806%2014.2460944,52.570687%20C12.0567996,51.1988336%2010.3219858,49.2102622%209.25983722,46.8551295%20C8.19768984,44.499937%207.85562972,41.8832824%208.276674,39.3342215%20C8.69771827,36.7851606%209.86306631,34.4174662%2011.6261678,32.5289814%20C13.3892752,30.6404727%2015.6714246,29.3154324%2018.1856119,28.7204982%20C20.6997394,28.1255646%2023.3336813,28.2873008%2025.7562282,29.1853653%20C28.1787154,30.0834346%2030.2815979,31.6777312%2031.800363,33.767765%20C33.3191879,35.8578106%2034.1861222,38.3502842%2034.2921188,40.9317063%20C34.3930308,44.4222341%2033.113057,47.8117302%2030.7300493,50.3642007%20C28.3470417,52.916731%2025.0533134,54.4262842%2021.5641016,54.5650606%20Z'%20fill='%23616262'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Fp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='4'%20y='3'%20width='12'%20height='8'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2'%20y1='20'%20x2='18'%20y2='20'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='20'%20y1='2'%20x2='20'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Mp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='10'%20y='4'%20width='12'%20height='16'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='9'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='2.5'%20y1='15'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Np="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='8'%20y='4'%20width='8'%20height='8'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='21.5'%20y1='2'%20x2='21.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='6'%20y1='20'%20x2='18'%20y2='20'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Bp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='8'%20y='4'%20width='8'%20height='16'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='21.5'%20y1='2'%20x2='21.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Vp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%3e%3cpath%20fill-rule='evenodd'%20d='M8%200C3.58%200%200%203.58%200%208c0%203.54%202.29%206.53%205.47%207.59.4.07.55-.17.55-.38%200-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01%201.08.58%201.23.82.72%201.21%201.87.87%202.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95%200-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12%200%200%20.67-.21%202.2.82.64-.18%201.32-.27%202-.27.68%200%201.36.09%202%20.27%201.53-1.04%202.2-.82%202.2-.82.44%201.1.16%201.92.08%202.12.51.56.82%201.27.82%202.15%200%203.07-1.87%203.75-3.65%203.95.29.25.54.73.54%201.48%200%201.07-.01%201.93-.01%202.2%200%20.21.15.46.55.38A8.013%208.013%200%200016%208c0-4.42-3.58-8-8-8z'/%3e%3c/svg%3e",Up="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";lc("lyra",{resolver:t=>new URL(Object.assign({"../icons/js.svg":Op,"../icons/jupyter.svg":Pp,"../icons/layout-standard-bottom-panel.svg":Fp,"../icons/layout-standard-bottom-sidebar.svg":Mp,"../icons/layout-standard-full.svg":Np,"../icons/layout-standard.svg":Bp,"../icons/mark-github.svg":Vp,"../icons/python.svg":Up})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var ur={exports:{}};var qp=ur.exports,Zs;function Hp(){return Zs||(Zs=1,(function(t){(function(e,i){t.exports?t.exports=i():e.Toastify=i()})(qp,function(e){var i=function(s){return new i.lib.init(s)},o="1.12.0";i.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},i.lib=i.prototype={toastify:o,constructor:i,init:function(s){return s||(s={}),this.options={},this.toastElement=null,this.options.text=s.text||i.defaults.text,this.options.node=s.node||i.defaults.node,this.options.duration=s.duration===0?0:s.duration||i.defaults.duration,this.options.selector=s.selector||i.defaults.selector,this.options.callback=s.callback||i.defaults.callback,this.options.destination=s.destination||i.defaults.destination,this.options.newWindow=s.newWindow||i.defaults.newWindow,this.options.close=s.close||i.defaults.close,this.options.gravity=s.gravity==="bottom"?"toastify-bottom":i.defaults.gravity,this.options.positionLeft=s.positionLeft||i.defaults.positionLeft,this.options.position=s.position||i.defaults.position,this.options.backgroundColor=s.backgroundColor||i.defaults.backgroundColor,this.options.avatar=s.avatar||i.defaults.avatar,this.options.className=s.className||i.defaults.className,this.options.stopOnFocus=s.stopOnFocus===void 0?i.defaults.stopOnFocus:s.stopOnFocus,this.options.onClick=s.onClick||i.defaults.onClick,this.options.offset=s.offset||i.defaults.offset,this.options.escapeMarkup=s.escapeMarkup!==void 0?s.escapeMarkup:i.defaults.escapeMarkup,this.options.ariaLive=s.ariaLive||i.defaults.ariaLive,this.options.style=s.style||i.defaults.style,s.backgroundColor&&(this.options.style.background=s.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var s=document.createElement("div");s.className="toastify on "+this.options.className,this.options.position?s.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(s.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):s.className+=" toastify-right",s.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var l in this.options.style)s.style[l]=this.options.style[l];if(this.options.ariaLive&&s.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)s.appendChild(this.options.node);else if(this.options.escapeMarkup?s.innerText=this.options.text:s.innerHTML=this.options.text,this.options.avatar!==""){var d=document.createElement("img");d.src=this.options.avatar,d.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?s.appendChild(d):s.insertAdjacentElement("afterbegin",d)}if(this.options.close===!0){var h=document.createElement("button");h.type="button",h.setAttribute("aria-label","Close"),h.className="toast-close",h.innerHTML="&#10006;",h.addEventListener("click",(function(E){E.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?s.insertAdjacentElement("afterbegin",h):s.appendChild(h)}if(this.options.stopOnFocus&&this.options.duration>0){var f=this;s.addEventListener("mouseover",function(E){window.clearTimeout(s.timeOutValue)}),s.addEventListener("mouseleave",function(){s.timeOutValue=window.setTimeout(function(){f.removeElement(s)},f.options.duration)})}if(typeof this.options.destination<"u"&&s.addEventListener("click",(function(E){E.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&s.addEventListener("click",(function(E){E.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var m=r("x",this.options),g=r("y",this.options),b=this.options.position=="left"?m:"-"+m,C=this.options.gravity=="toastify-top"?g:"-"+g;s.style.transform="translate("+b+","+C+")"}return s},showToast:function(){this.toastElement=this.buildToast();var s;if(typeof this.options.selector=="string"?s=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?s=this.options.selector:s=document.body,!s)throw"Root element is not defined";var l=i.defaults.oldestFirst?s.firstChild:s.lastChild;return s.insertBefore(this.toastElement,l),i.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(s){s.className=s.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),s.parentNode&&s.parentNode.removeChild(s),this.options.callback.call(s),i.reposition()}).bind(this),400)}},i.reposition=function(){for(var s={top:15,bottom:15},l={top:15,bottom:15},d={top:15,bottom:15},h=document.getElementsByClassName("toastify"),u,f=0;f<h.length;f++){a(h[f],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var m=h[f].offsetHeight;u=u.substr(9,u.length-1);var g=15,b=window.innerWidth>0?window.innerWidth:screen.width;b<=360?(h[f].style[u]=d[u]+"px",d[u]+=m+g):a(h[f],"toastify-left")===!0?(h[f].style[u]=s[u]+"px",s[u]+=m+g):(h[f].style[u]=l[u]+"px",l[u]+=m+g)}return this};function r(s,l){return l.offset[s]?isNaN(l.offset[s])?l.offset[s]:l.offset[s]+"px":"0px"}function a(s,l){return!s||typeof l!="string"?!1:!!(s.className&&s.className.trim().split(/\s+/gi).indexOf(l)>-1)}return i.lib.init.prototype=i.lib,i})})(ur)),ur.exports}var Wp=Hp();const jp=Pl(Wp);class is{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,i){return e[i]||this.parent?.getProxy()[i]}set(e,i,o){e[i]=o}put(e,i){this.variables[e]=i}getProxy(){return this.proxy}createChild(e={}){const i=new is(e);return i.parent=this,this.children.push(i),i}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const kt=new is({}),ki=kt.createChild({}),Qs={debug:0,info:1,warning:2,error:3};let Kp="debug";const Zi={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Er=null;const Oa=[];function Te(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class Gp{constructor(e){this.source=e}info(e,...i){const o=i.length===0?e:`${e} ${i.map(r=>Te(r)).join(" ")}`;this.log(o,"info")}warning(e,...i){const o=i.length===0?e:`${e} ${i.map(r=>Te(r)).join(" ")}`;this.log(o,"warning")}warn(e,...i){const o=i.length===0?e:`${e} ${i.map(r=>Te(r)).join(" ")}`;this.log(o,"warning")}error(e,...i){const o=i.length===0?e:`${e} ${i.map(r=>Te(r)).join(" ")}`;this.log(o,"error")}debug(e,...i){const o=i.length===0?e:`${e} ${i.map(r=>Te(r)).join(" ")}`;this.log(o,"debug")}log(e,i){Qi(this.source,e,i)}}function Xp(t){return Qs[t]>=Qs[Kp]}function Qi(t,e,i){Xp(i)&&(Er?Er(t,e,i):(Oa.push({source:t,message:e,level:i}),Zi[i==="error"?"error":i==="warning"?"warn":i==="debug"?"debug":"log"](`[${t}] ${e}`)))}function Yp(){console.log=function(...t){Zi.log.apply(console,t),Qi("Console",t.map(e=>Te(e)).join(" "),"info")},console.info=function(...t){Zi.info.apply(console,t),Qi("Console",t.map(e=>Te(e)).join(" "),"info")},console.warn=function(...t){Zi.warn.apply(console,t),Qi("Console",t.map(e=>Te(e)).join(" "),"warning")},console.error=function(...t){Zi.error.apply(console,t),Qi("Console",t.map(e=>Te(e)).join(" "),"error")},console.debug=function(...t){Zi.debug.apply(console,t),Qi("Console",t.map(e=>Te(e)).join(" "),"debug")}}Yp();function Zp(t){for(Er=t;Oa.length>0;){const e=Oa.shift();e&&t(e.source,e.message,e.level)}}function Qp(){Er=null}function ei(t){return new Gp(t)}const K=ei("System");kt.put("logger",K);const os=ei("Toast"),Jp=4e3,tf={duration:Jp,gravity:"bottom",position:"right",close:!0},rs=(t,e)=>{jp({...tf,text:t,style:e}).showToast()},je=t=>{os.info(t),rs(t,{background:"var(--wa-color-brand-50)",color:"var(--wa-color-brand-on)"})},rt=t=>{os.error(t),rs(t,{background:"var(--wa-color-danger-50)",color:"var(--wa-color-danger-on)"})},ef=t=>{os.warn(t),rs(t,{background:"var(--wa-color-warning-50)",color:"var(--wa-color-warning-on)"})};class of{constructor(){this.globalNameRemaps=new Map,this.appNameRemaps=new Map}setGlobalNameRemap(e,i){this.globalNameRemaps.set(e,this.normalizeTargets(i))}resetForTesting(){this.globalNameRemaps.clear(),this.appNameRemaps.clear()}applyAppNameRemaps(e){if(this.appNameRemaps.clear(),!!e)for(const i of e)this.appNameRemaps.set(i.name,this.normalizeTargets(i.targets))}getEffectiveTargets(e,i){const o=i.name;if(!o)return[e];const r=this.appNameRemaps.get(o);if(r)return r.length>0?r:[];const a=this.globalNameRemaps.get(o);return a?a.length>0?a:[]:[e]}listNameRemaps(){const e={},i=new Set([...this.globalNameRemaps.keys(),...this.appNameRemaps.keys()]);for(const o of i)e[o]={appTargets:this.appNameRemaps.get(o),globalTargets:this.globalNameRemaps.get(o)};return e}normalizeTargets(e){const i=new Set,o=[];for(const r of e)!r||i.has(r)||(i.add(r),o.push(r));return o}}const Lr=new of;kt.put("contributionTargetMappingRegistry",Lr);const $e="events/contributionregistry/contributionsChanged";class rf{constructor(){this.contributions=new Map}registerContribution(e,i){const o=this.getOrCreateSlot(e);if("command"in i){const a=i;a.disabled instanceof Function&&(a.disabled=new yn.Computed(a.disabled))}o.push(i),O($e,{target:e,contributions:o});const r=Lr.getEffectiveTargets(e,i);for(const a of r){if(a===e)continue;const s=this.getContributions(a);O($e,{target:a,contributions:s})}}getContributions(e){const i=[];for(const[o,r]of this.contributions.entries()){const a=r;for(const s of a)Lr.getEffectiveTargets(o,s).includes(e)&&i.push(s)}return i.length===0&&this.getOrCreateSlot(e),i}getOrCreateSlot(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const B=new rf;kt.put("contributionRegistry",B);const Gg={},oe=xi(null),to=xi(null),Pa=xi(null),Fa=xi(0),Ae=xi(void 0);xi({name:"",timestamp:0});const Xn="events/commandregistry/commandRegistered";class af{constructor(e,i,o,r,a){this.id=e,this.name=i,this.description=o,this.parameters=r||[],this.output=a||[]}}class Xg{async execute(e,i){return Ge.execute(e,i)}async undo(){}async redo(){}}class sf{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,i){this.handlers.has(e)||this.handlers.set(e,[]);const o=this.handlers.get(e);o.push(i),o.sort((r,a)=>(a.ranking??0)-(r.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:oe.get(),activeEditor:to.get()}}execute(e,i={}){const o=this.getHandler(e);if(!o)throw K.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const r=this.getCommand(e),a=i.params?` params: ${JSON.stringify(i.params)}`:"";K.debug(`[CommandRegistry] Executing command: ${e}${r?` (${r.name})`:""}${a}`);for(const s of o)if(s.canExecute===void 0||s.canExecute(i))try{const l=s.execute(i);return K.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${l})`),l}catch(l){const d=l instanceof Error?l.message:String(l);throw K.error(`[CommandRegistry] Command execution failed: ${e} - ${d}`),l}K.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,i,o,r,a){const s=new af(e,i,o,r);this.registerCommand(s),a&&this.registerHandler(e,a)}registerCommand(e){this.commands[e.id]=e,O(Xn,e)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(i=>(Ge.getHandler(i.id)||[]).some(r=>r.canExecute===void 0||r.canExecute(e))).reduce((i,o)=>(i[o.id]=o,i),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const i=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(i,e.handler),e.contribution&&e.contribution.target&&B.registerContribution(e.contribution.target,{command:i,...e.contribution})}}const Ge=new sf;kt.put("commandRegistry",Ge);const pt=t=>{Ge.registerAll(t)},Yn=(t,e)=>{const i=new yn.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{i.watch(t)}});return i.watch(t),t.get(),()=>{i.unwatch(t)}};Object.defineProperty(ja.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});const nf=Fl(ja);class Kr extends nf{constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>Ml(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,i){const o=It(e,i.bind(this));this.eventSubscriptions.add(o)}showInfo(e){je(e)}showError(e){rt(e)}nobubble(e){return i=>{i.stopPropagation(),e.bind(this)(i)}}command(e,i={}){return()=>{this.executeCommand(e,i)}}executeCommand(e,i){const o=Ge.createExecutionContext(i);Ge.execute(e,o)}watch(e,i){const o=Yn(e,i.bind(this));this.signalCleanups.add(o)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}function as(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ki=as();function Zn(t){Ki=t}var Ai={exec:()=>null};function N(t,e=""){let i=typeof t=="string"?t:t.source,o={replace:(r,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(Tt.caret,"$1"),i=i.replace(r,s),o},getRegex:()=>new RegExp(i,e)};return o}var lf=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Tt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}>`)},cf=/^(?:[ \t]*(?:\n|$))+/,df=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,hf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ko=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,uf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ss=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Qn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Jn=N(Qn).replace(/bull/g,ss).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),pf=N(Qn).replace(/bull/g,ss).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ns=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ff=/^[^\n]+/,ls=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,mf=N(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ls).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),gf=N(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ss).getRegex(),Gr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",cs=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,bf=N("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",cs).replace("tag",Gr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),tl=N(ns).replace("hr",Ko).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gr).getRegex(),wf=N(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",tl).getRegex(),ds={blockquote:wf,code:df,def:mf,fences:hf,heading:uf,hr:Ko,html:bf,lheading:Jn,list:gf,newline:cf,paragraph:tl,table:Ai,text:ff},Js=N("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ko).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gr).getRegex(),vf={...ds,lheading:pf,table:Js,paragraph:N(ns).replace("hr",Ko).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Js).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gr).getRegex()},yf={...ds,html:N(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",cs).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ai,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:N(ns).replace("hr",Ko).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Jn).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},xf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,kf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,el=/^( {2,}|\\)\n(?!\s*$)/,Cf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Xr=/[\p{P}\p{S}]/u,hs=/[\s\p{P}\p{S}]/u,il=/[^\s\p{P}\p{S}]/u,Sf=N(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,hs).getRegex(),ol=/(?!~)[\p{P}\p{S}]/u,$f=/(?!~)[\s\p{P}\p{S}]/u,Ef=/(?:[^\s\p{P}\p{S}]|~)/u,rl=/(?![*_])[\p{P}\p{S}]/u,Lf=/(?![*_])[\s\p{P}\p{S}]/u,Af=/(?:[^\s\p{P}\p{S}]|[*_])/u,zf=N(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",lf?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),al=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Tf=N(al,"u").replace(/punct/g,Xr).getRegex(),Rf=N(al,"u").replace(/punct/g,ol).getRegex(),sl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Df=N(sl,"gu").replace(/notPunctSpace/g,il).replace(/punctSpace/g,hs).replace(/punct/g,Xr).getRegex(),If=N(sl,"gu").replace(/notPunctSpace/g,Ef).replace(/punctSpace/g,$f).replace(/punct/g,ol).getRegex(),_f=N("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,il).replace(/punctSpace/g,hs).replace(/punct/g,Xr).getRegex(),Of=N(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,rl).getRegex(),Pf="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Ff=N(Pf,"gu").replace(/notPunctSpace/g,Af).replace(/punctSpace/g,Lf).replace(/punct/g,rl).getRegex(),Mf=N(/\\(punct)/,"gu").replace(/punct/g,Xr).getRegex(),Nf=N(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Bf=N(cs).replace("(?:-->|$)","-->").getRegex(),Vf=N("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Bf).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ar=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Uf=N(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ar).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),nl=N(/^!?\[(label)\]\[(ref)\]/).replace("label",Ar).replace("ref",ls).getRegex(),ll=N(/^!?\[(ref)\](?:\[\])?/).replace("ref",ls).getRegex(),qf=N("reflink|nolink(?!\\()","g").replace("reflink",nl).replace("nolink",ll).getRegex(),tn=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,us={_backpedal:Ai,anyPunctuation:Mf,autolink:Nf,blockSkip:zf,br:el,code:kf,del:Ai,delLDelim:Ai,delRDelim:Ai,emStrongLDelim:Tf,emStrongRDelimAst:Df,emStrongRDelimUnd:_f,escape:xf,link:Uf,nolink:ll,punctuation:Sf,reflink:nl,reflinkSearch:qf,tag:Vf,text:Cf,url:Ai},Hf={...us,link:N(/^!?\[(label)\]\((.*?)\)/).replace("label",Ar).getRegex(),reflink:N(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ar).getRegex()},Ma={...us,emStrongRDelimAst:If,emStrongLDelim:Rf,delLDelim:Of,delRDelim:Ff,url:N(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",tn).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:N(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",tn).getRegex()},Wf={...Ma,br:N(el).replace("{2,}","*").getRegex(),text:N(Ma.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},cr={normal:ds,gfm:vf,pedantic:yf},Lo={normal:us,gfm:Ma,breaks:Wf,pedantic:Hf},jf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},en=t=>jf[t];function Le(t,e){if(e){if(Tt.escapeTest.test(t))return t.replace(Tt.escapeReplace,en)}else if(Tt.escapeTestNoEncode.test(t))return t.replace(Tt.escapeReplaceNoEncode,en);return t}function on(t){try{t=encodeURI(t).replace(Tt.percentDecode,"%")}catch{return null}return t}function rn(t,e){let i=t.replace(Tt.findPipe,(a,s,l)=>{let d=!1,h=s;for(;--h>=0&&l[h]==="\\";)d=!d;return d?"|":" |"}),o=i.split(Tt.splitPipe),r=0;if(o[0].trim()||o.shift(),o.length>0&&!o.at(-1)?.trim()&&o.pop(),e)if(o.length>e)o.splice(e);else for(;o.length<e;)o.push("");for(;r<o.length;r++)o[r]=o[r].trim().replace(Tt.slashPipe,"|");return o}function Ao(t,e,i){let o=t.length;if(o===0)return"";let r=0;for(;r<o&&t.charAt(o-r-1)===e;)r++;return t.slice(0,o-r)}function Kf(t,e){if(t.indexOf(e[1])===-1)return-1;let i=0;for(let o=0;o<t.length;o++)if(t[o]==="\\")o++;else if(t[o]===e[0])i++;else if(t[o]===e[1]&&(i--,i<0))return o;return i>0?-2:-1}function Gf(t,e=0){let i=e,o="";for(let r of t)if(r==="	"){let a=4-i%4;o+=" ".repeat(a),i+=a}else o+=r,i++;return o}function an(t,e,i,o,r){let a=e.href,s=e.title||null,l=t[1].replace(r.other.outputLinkReplace,"$1");o.state.inLink=!0;let d={type:t[0].charAt(0)==="!"?"image":"link",raw:i,href:a,title:s,text:l,tokens:o.inlineTokens(l)};return o.state.inLink=!1,d}function Xf(t,e,i){let o=t.match(i.other.indentCodeCompensation);if(o===null)return e;let r=o[1];return e.split(`
`).map(a=>{let s=a.match(i.other.beginningSpace);if(s===null)return a;let[l]=s;return l.length>=r.length?a.slice(r.length):a}).join(`
`)}var zr=class{options;rules;lexer;constructor(t){this.options=t||Ki}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let i=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Ao(i,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let i=e[0],o=Xf(i,e[3]||"",this.rules);return{type:"code",raw:i,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:o}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let i=e[2].trim();if(this.rules.other.endingHash.test(i)){let o=Ao(i,"#");(this.options.pedantic||!o||this.rules.other.endingSpaceChar.test(o))&&(i=o.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Ao(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let i=Ao(e[0],`
`).split(`
`),o="",r="",a=[];for(;i.length>0;){let s=!1,l=[],d;for(d=0;d<i.length;d++)if(this.rules.other.blockquoteStart.test(i[d]))l.push(i[d]),s=!0;else if(!s)l.push(i[d]);else break;i=i.slice(d);let h=l.join(`
`),u=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${h}`:h,r=r?`${r}
${u}`:u;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,a,!0),this.lexer.state.top=f,i.length===0)break;let m=a.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let g=m,b=g.raw+`
`+i.join(`
`),C=this.blockquote(b);a[a.length-1]=C,o=o.substring(0,o.length-g.raw.length)+C.raw,r=r.substring(0,r.length-g.text.length)+C.text;break}else if(m?.type==="list"){let g=m,b=g.raw+`
`+i.join(`
`),C=this.list(b);a[a.length-1]=C,o=o.substring(0,o.length-m.raw.length)+C.raw,r=r.substring(0,r.length-g.raw.length)+C.raw,i=b.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:a,text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let i=e[1].trim(),o=i.length>1,r={type:"list",raw:"",ordered:o,start:o?+i.slice(0,-1):"",loose:!1,items:[]};i=o?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=o?i:"[*+-]");let a=this.rules.other.listItemRegex(i),s=!1;for(;t;){let d=!1,h="",u="";if(!(e=a.exec(t))||this.rules.block.hr.test(t))break;h=e[0],t=t.substring(h.length);let f=Gf(e[2].split(`
`,1)[0],e[1].length),m=t.split(`
`,1)[0],g=!f.trim(),b=0;if(this.options.pedantic?(b=2,u=f.trimStart()):g?b=e[1].length+1:(b=f.search(this.rules.other.nonSpaceChar),b=b>4?1:b,u=f.slice(b),b+=e[1].length),g&&this.rules.other.blankLine.test(m)&&(h+=m+`
`,t=t.substring(m.length+1),d=!0),!d){let C=this.rules.other.nextBulletRegex(b),E=this.rules.other.hrRegex(b),L=this.rules.other.fencesBeginRegex(b),S=this.rules.other.headingBeginRegex(b),T=this.rules.other.htmlBeginRegex(b),q=this.rules.other.blockquoteBeginRegex(b);for(;t;){let j=t.split(`
`,1)[0],Y;if(m=j,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),Y=m):Y=m.replace(this.rules.other.tabCharGlobal,"    "),L.test(m)||S.test(m)||T.test(m)||q.test(m)||C.test(m)||E.test(m))break;if(Y.search(this.rules.other.nonSpaceChar)>=b||!m.trim())u+=`
`+Y.slice(b);else{if(g||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(f)||S.test(f)||E.test(f))break;u+=`
`+m}g=!m.trim(),h+=j+`
`,t=t.substring(j.length+1),f=Y.slice(b)}}r.loose||(s?r.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(s=!0)),r.items.push({type:"list_item",raw:h,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),r.raw+=h}let l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let d of r.items){if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),d.task){if(d.text=d.text.replace(this.rules.other.listReplaceTask,""),d.tokens[0]?.type==="text"||d.tokens[0]?.type==="paragraph"){d.tokens[0].raw=d.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),d.tokens[0].text=d.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let h=this.rules.other.listTaskCheckbox.exec(d.raw);if(h){let u={type:"checkbox",raw:h[0]+" ",checked:h[0]!=="[ ]"};d.checked=u.checked,r.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=u.raw+d.tokens[0].raw,d.tokens[0].text=u.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(u)):d.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):d.tokens.unshift(u)}}if(!r.loose){let h=d.tokens.filter(f=>f.type==="space"),u=h.length>0&&h.some(f=>this.rules.other.anyLine.test(f.raw));r.loose=u}}if(r.loose)for(let d of r.items){d.loose=!0;for(let h of d.tokens)h.type==="text"&&(h.type="paragraph")}return r}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let i=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:i,raw:e[0],href:o,title:r}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let i=rn(e[1]),o=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(i.length===o.length){for(let s of o)this.rules.other.tableAlignRight.test(s)?a.align.push("right"):this.rules.other.tableAlignCenter.test(s)?a.align.push("center"):this.rules.other.tableAlignLeft.test(s)?a.align.push("left"):a.align.push(null);for(let s=0;s<i.length;s++)a.header.push({text:i[s],tokens:this.lexer.inline(i[s]),header:!0,align:a.align[s]});for(let s of r)a.rows.push(rn(s,a.header.length).map((l,d)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[d]})));return a}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let i=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:i,tokens:this.lexer.inline(i)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let i=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let a=Ao(i.slice(0,-1),"\\");if((i.length-a.length)%2===0)return}else{let a=Kf(e[2],"()");if(a===-2)return;if(a>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let o=e[2],r="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(o);a&&(o=a[1],r=a[3])}else r=e[3]?e[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?o=o.slice(1):o=o.slice(1,-1)),an(e,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let o=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[o.toLowerCase()];if(!r){let a=i[0].charAt(0);return{type:"text",raw:a,text:a}}return an(i,r,i[0],this.lexer,this.rules)}}emStrong(t,e,i=""){let o=this.rules.inline.emStrongLDelim.exec(t);if(!(!o||o[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!i||this.rules.inline.punctuation.exec(i))){let r=[...o[0]].length-1,a,s,l=r,d=0,h=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+r);(o=h.exec(e))!=null;){if(a=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!a)continue;if(s=[...a].length,o[3]||o[4]){l+=s;continue}else if((o[5]||o[6])&&r%3&&!((r+s)%3)){d+=s;continue}if(l-=s,l>0)continue;s=Math.min(s,s+l+d);let u=[...o[0]][0].length,f=t.slice(0,r+o.index+u+s);if(Math.min(r,s)%2){let g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}let m=f.slice(2,-2);return{type:"strong",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let i=e[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(i),r=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return o&&r&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:e[0],text:i}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,i=""){let o=this.rules.inline.delLDelim.exec(t);if(o&&(!o[1]||!i||this.rules.inline.punctuation.exec(i))){let r=[...o[0]].length-1,a,s,l=r,d=this.rules.inline.delRDelim;for(d.lastIndex=0,e=e.slice(-1*t.length+r);(o=d.exec(e))!=null;){if(a=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!a||(s=[...a].length,s!==r))continue;if(o[3]||o[4]){l+=s;continue}if(l-=s,l>0)continue;s=Math.min(s,s+l);let h=[...o[0]][0].length,u=t.slice(0,r+o.index+h+s),f=u.slice(r,-r);return{type:"del",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let i,o;return e[2]==="@"?(i=e[1],o="mailto:"+i):(i=e[1],o=i),{type:"link",raw:e[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let i,o;if(e[2]==="@")i=e[0],o="mailto:"+i;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);i=e[0],e[1]==="www."?o="http://"+e[0]:o=e[0]}return{type:"link",raw:e[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let i=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:i}}}},pe=class Na{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ki,this.options.tokenizer=this.options.tokenizer||new zr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:Tt,block:cr.normal,inline:Lo.normal};this.options.pedantic?(i.block=cr.pedantic,i.inline=Lo.pedantic):this.options.gfm&&(i.block=cr.gfm,this.options.breaks?i.inline=Lo.breaks:i.inline=Lo.gfm),this.tokenizer.rules=i}static get rules(){return{block:cr,inline:Lo}}static lex(e,i){return new Na(i).lex(e)}static lexInline(e,i){return new Na(i).inlineTokens(e)}lex(e){e=e.replace(Tt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let o=this.inlineQueue[i];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,i=[],o=!1){for(this.options.pedantic&&(e=e.replace(Tt.tabCharGlobal,"    ").replace(Tt.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(s=>(r=s.call({lexer:this},e,i))?(e=e.substring(r.raw.length),i.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let s=i.at(-1);r.raw.length===1&&s!==void 0?s.raw+=`
`:i.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let s=i.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+r.raw,s.text+=`
`+r.text,this.inlineQueue.at(-1).src=s.text):i.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let s=i.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+r.raw,s.text+=`
`+r.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},i.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),i.push(r);continue}let a=e;if(this.options.extensions?.startBlock){let s=1/0,l=e.slice(1),d;this.options.extensions.startBlock.forEach(h=>{d=h.call({lexer:this},l),typeof d=="number"&&d>=0&&(s=Math.min(s,d))}),s<1/0&&s>=0&&(a=e.substring(0,s+1))}if(this.state.top&&(r=this.tokenizer.paragraph(a))){let s=i.at(-1);o&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):i.push(r),o=a.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let s=i.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):i.push(r);continue}if(e){let s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,i}inline(e,i=[]){return this.inlineQueue.push({src:e,tokens:i}),i}inlineTokens(e,i=[]){let o=e,r=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)d.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,r.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)a=r[2]?r[2].length:0,o=o.slice(0,r.index+a)+"["+"a".repeat(r[0].length-a-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=this.options.hooks?.emStrongMask?.call({lexer:this},o)??o;let s=!1,l="";for(;e;){s||(l=""),s=!1;let d;if(this.options.extensions?.inline?.some(u=>(d=u.call({lexer:this},e,i))?(e=e.substring(d.raw.length),i.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let u=i.at(-1);d.type==="text"&&u?.type==="text"?(u.raw+=d.raw,u.text+=d.text):i.push(d);continue}if(d=this.tokenizer.emStrong(e,o,l)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.del(e,o,l)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),i.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),i.push(d);continue}let h=e;if(this.options.extensions?.startInline){let u=1/0,f=e.slice(1),m;this.options.extensions.startInline.forEach(g=>{m=g.call({lexer:this},f),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(h=e.substring(0,u+1))}if(d=this.tokenizer.inlineText(h)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(l=d.raw.slice(-1)),s=!0;let u=i.at(-1);u?.type==="text"?(u.raw+=d.raw,u.text+=d.text):i.push(d);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return i}},Tr=class{options;parser;constructor(t){this.options=t||Ki}space(t){return""}code({text:t,lang:e,escaped:i}){let o=(e||"").match(Tt.notSpaceStart)?.[0],r=t.replace(Tt.endingNewline,"")+`
`;return o?'<pre><code class="language-'+Le(o)+'">'+(i?r:Le(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:Le(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,i=t.start,o="";for(let s=0;s<t.items.length;s++){let l=t.items[s];o+=this.listitem(l)}let r=e?"ol":"ul",a=e&&i!==1?' start="'+i+'"':"";return"<"+r+a+`>
`+o+"</"+r+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",i="";for(let r=0;r<t.header.length;r++)i+=this.tablecell(t.header[r]);e+=this.tablerow({text:i});let o="";for(let r=0;r<t.rows.length;r++){let a=t.rows[r];i="";for(let s=0;s<a.length;s++)i+=this.tablecell(a[s]);o+=this.tablerow({text:i})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+o+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Le(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:i}){let o=this.parser.parseInline(i),r=on(t);if(r===null)return o;t=r;let a='<a href="'+t+'"';return e&&(a+=' title="'+Le(e)+'"'),a+=">"+o+"</a>",a}image({href:t,title:e,text:i,tokens:o}){o&&(i=this.parser.parseInline(o,this.parser.textRenderer));let r=on(t);if(r===null)return Le(i);t=r;let a=`<img src="${t}" alt="${Le(i)}"`;return e&&(a+=` title="${Le(e)}"`),a+=">",a}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Le(t.text)}},ps=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},fe=class Ba{options;renderer;textRenderer;constructor(e){this.options=e||Ki,this.options.renderer=this.options.renderer||new Tr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ps}static parse(e,i){return new Ba(i).parse(e)}static parseInline(e,i){return new Ba(i).parseInline(e)}parse(e){let i="";for(let o=0;o<e.length;o++){let r=e[o];if(this.options.extensions?.renderers?.[r.type]){let s=r,l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(s.type)){i+=l||"";continue}}let a=r;switch(a.type){case"space":{i+=this.renderer.space(a);break}case"hr":{i+=this.renderer.hr(a);break}case"heading":{i+=this.renderer.heading(a);break}case"code":{i+=this.renderer.code(a);break}case"table":{i+=this.renderer.table(a);break}case"blockquote":{i+=this.renderer.blockquote(a);break}case"list":{i+=this.renderer.list(a);break}case"checkbox":{i+=this.renderer.checkbox(a);break}case"html":{i+=this.renderer.html(a);break}case"def":{i+=this.renderer.def(a);break}case"paragraph":{i+=this.renderer.paragraph(a);break}case"text":{i+=this.renderer.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return i}parseInline(e,i=this.renderer){let o="";for(let r=0;r<e.length;r++){let a=e[r];if(this.options.extensions?.renderers?.[a.type]){let l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){o+=l||"";continue}}let s=a;switch(s.type){case"escape":{o+=i.text(s);break}case"html":{o+=i.html(s);break}case"link":{o+=i.link(s);break}case"image":{o+=i.image(s);break}case"checkbox":{o+=i.checkbox(s);break}case"strong":{o+=i.strong(s);break}case"em":{o+=i.em(s);break}case"codespan":{o+=i.codespan(s);break}case"br":{o+=i.br(s);break}case"del":{o+=i.del(s);break}case"text":{o+=i.text(s);break}default:{let l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return o}},Do=class{options;block;constructor(t){this.options=t||Ki}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?pe.lex:pe.lexInline}provideParser(){return this.block?fe.parse:fe.parseInline}},Yf=class{defaults=as();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=fe;Renderer=Tr;TextRenderer=ps;Lexer=pe;Tokenizer=zr;Hooks=Do;constructor(...t){this.use(...t)}walkTokens(t,e){let i=[];for(let o of t)switch(i=i.concat(e.call(this,o)),o.type){case"table":{let r=o;for(let a of r.header)i=i.concat(this.walkTokens(a.tokens,e));for(let a of r.rows)for(let s of a)i=i.concat(this.walkTokens(s.tokens,e));break}case"list":{let r=o;i=i.concat(this.walkTokens(r.items,e));break}default:{let r=o;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(a=>{let s=r[a].flat(1/0);i=i.concat(this.walkTokens(s,e))}):r.tokens&&(i=i.concat(this.walkTokens(r.tokens,e)))}}return i}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(i=>{let o={...i};if(o.async=this.defaults.async||o.async||!1,i.extensions&&(i.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let a=e.renderers[r.name];a?e.renderers[r.name]=function(...s){let l=r.renderer.apply(this,s);return l===!1&&(l=a.apply(this,s)),l}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=e[r.level];a?a.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),o.extensions=e),i.renderer){let r=this.defaults.renderer||new Tr(this.defaults);for(let a in i.renderer){if(!(a in r))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let s=a,l=i.renderer[s],d=r[s];r[s]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=d.apply(r,h)),u||""}}o.renderer=r}if(i.tokenizer){let r=this.defaults.tokenizer||new zr(this.defaults);for(let a in i.tokenizer){if(!(a in r))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let s=a,l=i.tokenizer[s],d=r[s];r[s]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=d.apply(r,h)),u}}o.tokenizer=r}if(i.hooks){let r=this.defaults.hooks||new Do;for(let a in i.hooks){if(!(a in r))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let s=a,l=i.hooks[s],d=r[s];Do.passThroughHooks.has(a)?r[s]=h=>{if(this.defaults.async&&Do.passThroughHooksRespectAsync.has(a))return(async()=>{let f=await l.call(r,h);return d.call(r,f)})();let u=l.call(r,h);return d.call(r,u)}:r[s]=(...h)=>{if(this.defaults.async)return(async()=>{let f=await l.apply(r,h);return f===!1&&(f=await d.apply(r,h)),f})();let u=l.apply(r,h);return u===!1&&(u=d.apply(r,h)),u}}o.hooks=r}if(i.walkTokens){let r=this.defaults.walkTokens,a=i.walkTokens;o.walkTokens=function(s){let l=[];return l.push(a.call(this,s)),r&&(l=l.concat(r.call(this,s))),l}}this.defaults={...this.defaults,...o}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return pe.lex(t,e??this.defaults)}parser(t,e){return fe.parse(t,e??this.defaults)}parseMarkdown(t){return(e,i)=>{let o={...i},r={...this.defaults,...o},a=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&o.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=t),r.async)return(async()=>{let s=r.hooks?await r.hooks.preprocess(e):e,l=await(r.hooks?await r.hooks.provideLexer():t?pe.lex:pe.lexInline)(s,r),d=r.hooks?await r.hooks.processAllTokens(l):l;r.walkTokens&&await Promise.all(this.walkTokens(d,r.walkTokens));let h=await(r.hooks?await r.hooks.provideParser():t?fe.parse:fe.parseInline)(d,r);return r.hooks?await r.hooks.postprocess(h):h})().catch(a);try{r.hooks&&(e=r.hooks.preprocess(e));let s=(r.hooks?r.hooks.provideLexer():t?pe.lex:pe.lexInline)(e,r);r.hooks&&(s=r.hooks.processAllTokens(s)),r.walkTokens&&this.walkTokens(s,r.walkTokens);let l=(r.hooks?r.hooks.provideParser():t?fe.parse:fe.parseInline)(s,r);return r.hooks&&(l=r.hooks.postprocess(l)),l}catch(s){return a(s)}}}onError(t,e){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let o="<p>An error occurred:</p><pre>"+Le(i.message+"",!0)+"</pre>";return e?Promise.resolve(o):o}if(e)return Promise.reject(i);throw i}}},Fi=new Yf;function H(t,e){return Fi.parse(t,e)}H.options=H.setOptions=function(t){return Fi.setOptions(t),H.defaults=Fi.defaults,Zn(H.defaults),H};H.getDefaults=as;H.defaults=Ki;H.use=function(...t){return Fi.use(...t),H.defaults=Fi.defaults,Zn(H.defaults),H};H.walkTokens=function(t,e){return Fi.walkTokens(t,e)};H.parseInline=Fi.parseInline;H.Parser=fe;H.parser=fe.parse;H.Renderer=Tr;H.TextRenderer=ps;H.Lexer=pe;H.lexer=pe.lex;H.Tokenizer=zr;H.Hooks=Do;H.parse=H;H.options;H.setOptions;H.use;H.walkTokens;H.parseInline;fe.parse;pe.lex;const cl="app-toolbars-main",xo="app-toolbars-main-right",dl="app-toolbars-main-center",hl="app-toolbars-bottom",Yr="app-toolbars-bottom-center",Go="app-toolbars-bottom-end",ul="system-views",Rr="system.layouts",He="editor-area-main",Dr="sidebar-main",pl="sidebar-main-bottom",fl="sidebar-auxiliary",fs="panel-bottom",Zf="command-save",ml=!1;var ms=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(ms||{});const Qf=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:Zf,EDITOR_AREA_MAIN:He,HIDE_DOT_RESOURCE:ml,MouseButton:ms,PANEL_BOTTOM:fs,SIDEBAR_AUXILIARY:fl,SIDEBAR_MAIN:Dr,SIDEBAR_MAIN_BOTTOM:pl,SYSTEM_LAYOUTS:Rr,SYSTEM_VIEWS:ul,TOOLBAR_BOTTOM:hl,TOOLBAR_BOTTOM_CENTER:Yr,TOOLBAR_BOTTOM_END:Go,TOOLBAR_MAIN:cl,TOOLBAR_MAIN_CENTER:dl,TOOLBAR_MAIN_RIGHT:xo},Symbol.toStringTag,{value:"Module"})),Jf="eclipse-lyra-persistence",Io="keyval",tm=1;let ma=null;function sn(){return ma||(ma=new Promise((t,e)=>{const i=indexedDB.open(Jf,tm);i.onerror=()=>e(i.error),i.onsuccess=()=>t(i.result),i.onupgradeneeded=o=>{o.target.result.createObjectStore(Io)}})),ma}class em{async persistObject(e,i){const o=await sn();return new Promise((r,a)=>{const l=o.transaction(Io,"readwrite").objectStore(Io),d=i==null?l.delete(e):l.put(i,e);d.onsuccess=()=>r(),d.onerror=()=>a(d.error)})}async getObject(e){const i=await sn();return new Promise((o,r)=>{const s=i.transaction(Io,"readonly").objectStore(Io).get(e);s.onsuccess=()=>o(s.result),s.onerror=()=>r(s.error)})}}const me=new em;kt.put("persistenceService",me);const Xi=".geospace/settings.json",ga="dialogSettings",zi="events/settings/changed";function gl(t,e){if(e){for(const[i,o]of Object.entries(e))if(o&&typeof o=="object"){const r=t[i];r?.properties&&o.properties?gl(r.properties,o.properties):t[i]={...o,properties:o.properties?{...o.properties}:void 0}}}}class im{constructor(){this.mergedSchema={type:"object",properties:{}}}async checkSettings(){this.appSettings||(this.appSettings=await me.getObject(Xi),this.appSettings||(this.appSettings={},await me.persistObject(Xi,this.appSettings)),O(zi,this.appSettings))}registerSchema(e){const i=e.properties??(e.type==="object"?{}:void 0);i&&(this.mergedSchema.properties||(this.mergedSchema.properties={}),gl(this.mergedSchema.properties,i))}getCategories(){const e=this.mergedSchema.properties;return e?Object.entries(e).filter(([,i])=>i&&typeof i=="object").map(([i,o])=>({id:i,label:o.title??i,order:typeof o.order=="number"?o.order:0,schema:o})).sort((i,o)=>i.order-o.order):[]}getSchemaForCategory(e){return this.mergedSchema.properties?.[e]}getSchemaForSettingKey(e){const i=e.split(".").filter(Boolean);if(i.length===0)return this.mergedSchema;let o=this.mergedSchema;for(const r of i)if(o=o?.properties?.[r],!o)return;return o}traversePath(e,i,o){if(i.length===0)return null;let r=e;const a=i.length-1;for(let s=0;s<a;s++){const l=i[s];if(r[l]===void 0){if(!o)return null;r[l]={}}if(r[l]===null||typeof r[l]!="object")return null;r=r[l]}return{parent:r,key:i[a]}}async getAt(e){await this.checkSettings();const i=e.split(".").filter(Boolean);if(i.length===0)return this.appSettings;const o=this.traversePath(this.appSettings,i,!1);if(o)return o.parent[o.key]}async setAt(e,i){await this.checkSettings();const o=e.split(".").filter(Boolean);if(o.length===0)return;const r=this.traversePath(this.appSettings,o,!0);r&&(r.parent[r.key]=i,await me.persistObject(Xi,this.appSettings),O(zi,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,i){await this.checkSettings(),this.appSettings[e]=i,await me.persistObject(Xi,this.appSettings),O(zi,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await me.persistObject(Xi,this.appSettings),O(zi,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[ga]||{})[e]}async setDialogSetting(e,i){await this.checkSettings();const o=this.appSettings[ga]||{};o[e]=i,this.appSettings[ga]=o,await me.persistObject(Xi,this.appSettings),O(zi,this.appSettings)}}const nt=new im;kt.put("appSettings",nt);class om{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Fa.set(this.updateCounter)}run(e,i){const o=this.createProgressMonitor(e);try{this.tasks.push(o),this.notifyUpdate(),i(o)}finally{this.tasks.splice(this.tasks.indexOf(o),1),this.notifyUpdate()}}async runAsync(e,i){const o=this.createProgressMonitor(e);return this.tasks.push(o),this.notifyUpdate(),i(o).finally(()=>{this.tasks.splice(this.tasks.indexOf(o),1),this.notifyUpdate()})}createProgressMonitor(e){const i={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(i,{set:(o,r,a)=>(o[r]=a,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const ho=new om;kt.put("taskService",ho);const rm=ei("EsmShService"),Xo=class Xt{isEsmShUrl(e){try{const i=new URL(e);return i.hostname==="esm.sh"||i.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(e){return this.isEsmShUrl(e)||this.isHttpUrl(e)?!1:this.parseSource(e)!==null}isHttpUrl(e){try{const i=new URL(e);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}parseSource(e){return!e||typeof e!="string"||(e=e.trim(),this.isHttpUrl(e))?null:e.startsWith(Xt.GITHUB_PREFIX)?this.parseGitHubSource(e):e.startsWith(Xt.JSR_PREFIX)?this.parseJsrSource(e):e.startsWith(Xt.PR_PREFIX)?this.parsePrSource(e):this.parseNpmSource(e)}parseGitHubSource(e){const o=e.substring(Xt.GITHUB_PREFIX.length).split("/");if(o.length<2)return null;const r=o[0],a=o[1];let s,l,d;const h=a.match(/^(.+?)(@(.+))?$/);return h?(s=h[1],l=h[3],o.length>2&&(d=o.slice(2).join("/")),{type:"github",owner:r,repo:s,version:l,path:d}):null}parseJsrSource(e){const i=e.substring(Xt.JSR_PREFIX.length);if(!i.startsWith("@"))return null;const o=i.split("/");if(o.length<2)return null;const r=o[0],a=o[1];let s,l,d;const h=a.match(/^(.+?)(@(.+))?$/);return h?(s=`${r}/${h[1]}`,l=h[3],o.length>2&&(d=o.slice(2).join("/")),{type:"jsr",package:s,version:l,path:d}):null}parsePrSource(e){const o=e.substring(Xt.PR_PREFIX.length).split("/");if(o.length<2)return null;const r=o[0],a=o[1];let s,l;const d=a.match(/^(.+?)@(.+)$/);return d?(s=d[1],l=d[2]):s=a,{type:"pr",owner:r,repo:s,commit:l}}parseNpmSource(e){const i=e.split("/"),o=i[0];let r,a,s;const l=o.match(/^(.+?)(@(.+))?$/);return l?(r=l[1],a=l[3],i.length>1&&(s=i.slice(1).join("/")),{type:"npm",package:r,version:a,path:s}):null}buildEsmShUrl(e,i){let o=Xt.ESM_SH_BASE;switch(e.type){case"npm":o+=`/${e.package}`,e.version&&(o+=`@${e.version}`),e.path&&(o+=`/${e.path}`);break;case"github":o+=`/${Xt.GITHUB_PREFIX}${e.owner}/${e.repo}`,e.version&&(o+=`@${e.version}`),e.path&&(o+=`/${e.path}`);break;case"jsr":o+=`/${Xt.JSR_PREFIX}${e.package}`,e.version&&(o+=`@${e.version}`),e.path&&(o+=`/${e.path}`);break;case"pr":o+=`/${Xt.PR_PREFIX}${e.owner}/${e.repo}`,e.commit&&(o+=`@${e.commit}`);break}const r=[];if(i?.deps){const a=Object.entries(i.deps).map(([s,l])=>`${s}@${l}`).join(",");r.push(`deps=${encodeURIComponent(a)}`)}return i?.target&&r.push(`target=${encodeURIComponent(i.target)}`),i?.dev&&r.push("dev"),i?.bundle===!1?r.push("bundle=false"):i?.bundle===!0&&r.push("bundle"),r.length>0&&(o+=`?${r.join("&")}`),o}normalizeToEsmSh(e,i){if(this.isEsmShUrl(e)||this.isHttpUrl(e))return e;const o=this.parseSource(e);return o?this.buildEsmShUrl(o,i):(rm.warn(`Could not parse source identifier: ${e}`),e)}extractPackageName(e){const i=this.parseSource(e);if(!i)return null;switch(i.type){case"npm":return i.package||null;case"github":return`${i.owner}/${i.repo}`;case"jsr":return i.package||null;case"pr":return`${i.owner}/${i.repo}`}}isGitHubUrl(e){try{const i=new URL(e);return i.hostname==="github.com"||i.hostname==="www.github.com"}catch{return e.startsWith("https://github.com/")||e.startsWith("http://github.com/")}}convertGitHubUrlToSource(e){try{const o=new URL(e).pathname.split("/").filter(h=>h);if(o.length<2)throw new Error("Invalid GitHub URL format");const r=o[0];let a=o[1].replace(/\.git$/,""),s,l;o.length>2&&(o[2]==="blob"||o[2]==="tree"?(s=o[3]||"main",o[2]==="blob"&&o.length>4&&(l=o.slice(4).join("/"))):o[2]==="commit"?s=o[3]:l=o.slice(2).join("/"));let d=`${Xt.GITHUB_PREFIX}${r}/${a}`;return s&&(d+=`@${s}`),l&&(d+=`/${l}`),d}catch{const i=e.match(/github\.com\/([^\/]+)\/([^\/]+)/);return i?`${Xt.GITHUB_PREFIX}${i[1]}/${i[2].replace(/\.git$/,"")}`:e}}async fetchGitHubPackageJson(e){if(e.type!=="github")throw new Error("Source must be a GitHub source");const i=e.owner,o=e.repo,r=e.version||"main",a=`https://raw.githubusercontent.com/${i}/${o}/${r}/package.json`,s=await fetch(a);if(!s.ok)throw new Error(`Failed to fetch package.json: ${s.statusText}`);return await s.json()}};Xo.ESM_SH_BASE="https://esm.sh";Xo.GITHUB_PREFIX="gh/";Xo.JSR_PREFIX="jsr/";Xo.PR_PREFIX="pr/";let am=Xo;const Re=new am;kt.put("esmShService",Re);const _o="events/extensionsregistry/extensionsConfigChanged",zo="extensions",nn="extensions.external";class sm{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,It(zi,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then()})}async loadPersistedExternalExtensions(){try{const e=await nt.get(nn);e&&Array.isArray(e)&&e.forEach(i=>{this.extensions[i.id]=i})}catch(e){K.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(i=>i.external);await nt.set(nn,e)}catch(e){K.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await nt.get(zo),this.extensionsSettings||(await nt.set(zo,[]),this.extensionsSettings=await nt.get(zo)),O(_o,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,K.debug(`Registered extension: ${e.id}`),e.external&&this.savePersistedExternalExtensions().catch(i=>{K.error(`Failed to persist external extension: ${i}`)}),O(_o,this.extensionsSettings)}async loadExtensionFromUrl(e,i){K.info(`Loading extension from URL: ${e}...`);try{let o=e,r=`Extension from ${e}`;if(Re.isSourceIdentifier(e)){const s=Re.extractPackageName(e);s&&(r=`Extension: ${s}`),o=Re.normalizeToEsmSh(e),K.debug(`Converted source identifier to esm.sh URL: ${e} -> ${o}`)}const a=i||`url:${o}`;if(this.isEnabled(a))return K.info(`Extension from URL ${o} is already enabled`),a;if(!this.extensions[a]){const s={id:a,name:r,description:`Extension loaded from: ${e}`,url:o};this.registerExtension(s),K.info(`Registered extension from URL: ${a}`)}return this.enable(a,!1),K.info(`Successfully enabled extension from URL: ${o}`),a}catch(o){throw K.error(`Failed to load extension from URL ${e}: ${o}`),o}}getExtensions(){return Object.values(this.extensions)}async loadEnabledExtensions(){await this.checkExtensionsConfig();const i=(this.extensionsSettings??[]).filter(o=>this.isEnabled(o.id)&&this.extensions[o.id]).map(o=>this.load(o.id).catch(r=>{rt("Extension could not be loaded: "+r.message)}));await Promise.all(i)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(i=>i.id===e&&i.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,i=!1){this.isEnabled(e)||(K.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,i)}).catch(o=>{K.error(`Could not load extension: ${e}: ${o}`)}))}async enableAsync(e,i=!1){if(!this.isEnabled(e)){K.debug(`Loading extension: ${e}`);try{await this.load(e),this.updateEnablement(e,!0,i)}catch(o){throw K.error(`Could not load extension: ${e}: ${o}`),o}}}async load(e,i=[]){if(this.loadedExtensions.has(e))return;const o=this.loadingPromises.get(e);if(o)return o;if(i.includes(e)){const s=[...i,e].join(" → ");throw new Error(`Circular dependency detected: ${s}`)}const r=this.extensions[e];if(!r)throw new Error("Extension not found: "+e);const a=(async()=>{try{if(K.debug(`Loading extension: ${e}`),r.dependencies&&r.dependencies.length>0){const l=[...i,e];for(const d of r.dependencies)await this.load(d,l),this.isEnabled(d)||(await this.updateEnablementAsync(d,!0,!1),K.debug(`Auto-enabled dependency: ${d}`))}const s=await ho.runAsync("Loading extension: "+r.name,async()=>{if(r.loader)return r.loader();if(r.url){let l=r.url;return Re.isSourceIdentifier(r.url)&&(l=Re.normalizeToEsmSh(r.url),K.debug(`Normalized extension URL: ${r.url} -> ${l}`)),import(l)}});if(this.loadedExtensions.add(e),s?.default instanceof Function)try{s.default(ki.getProxy())}catch(l){throw K.error(`Error executing extension function for ${e}: ${l}`),l}}catch(s){throw this.loadedExtensions.delete(e),s}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,a),a}disable(e,i=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,i)}updateEnablement(e,i,o){this.checkExtensionsConfig().then(()=>{const r=this.extensionsSettings?.find(a=>a.id==e);r?r.enabled=i:this.extensionsSettings?.push({id:e,enabled:i}),nt.set(zo,this.extensionsSettings).then(()=>{if(o){const a=this.extensions[e];je(i?a.name+" enabled.":a.name+" disabled  - Please restart to take effect")}O(_o,this.extensionsSettings)})})}async updateEnablementAsync(e,i,o){await this.checkExtensionsConfig();const r=this.extensionsSettings?.find(a=>a.id==e);if(r?r.enabled=i:this.extensionsSettings?.push({id:e,enabled:i}),await nt.set(zo,this.extensionsSettings),o){const a=this.extensions[e];je(i?a.name+" enabled.":a.name+" disabled  - Please restart to take effect")}O(_o,this.extensionsSettings)}}const ot=new sm;kt.put("extensionRegistry",ot);const ln=["alt","ctrl","meta","shift"],bl={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},nm={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},lm={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},cm=new Set(Object.keys(bl));function cn(t){return lm[t]??t}class dm{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),It(Xn,e=>{e.keyBinding&&this.registerKeyBinding(e.id,e.keyBinding)})}registerExistingCommandBindings(){const e=Ge.listCommands();Object.values(e).forEach(i=>{i.keyBinding&&this.registerKeyBinding(i.id,i.keyBinding)})}parseKeyBinding(e){if(!e||e.trim()==="")return null;const i=e.toUpperCase().split("+").map(s=>s.trim());if(i.length===0)return null;const o=i[i.length-1],r=i.slice(0,-1);if(i.length===1&&cm.has(o))return null;const a={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const s of r){const l=bl[s];if(l===void 0)return null;a[l]=!0}return a.key=cn(o),a}getBindingKey(e){return[...ln.filter(o=>e[o]),e.key.toUpperCase()].join("+")}registerKeyBinding(e,i){const o=this.parseKeyBinding(i);if(!o)return K.error(`Invalid key binding: ${i}`),!1;o.commandId=e;const r=this.getBindingKey(o);this.bindings.has(r)||this.bindings.set(r,[]);const a=this.bindings.get(r);if(a.find(d=>d.commandId===e))return K.error(`Key binding ${i} already registered for command ${e}`),!1;const l=a.find(d=>d.commandId!==e);return l?(K.warn(`Key binding ${i} already used by command ${l.commandId}; refusing for ${e}`),!1):(a.push(o),!0)}unregisterKeyBinding(e,i){if(i){const o=this.parseKeyBinding(i);if(o){const r=this.getBindingKey(o),a=this.bindings.get(r);if(a){const s=a.filter(l=>l.commandId!==e);s.length===0?this.bindings.delete(r):this.bindings.set(r,s)}}}else for(const[o,r]of this.bindings.entries()){const a=r.filter(s=>s.commandId!==e);a.length===0?this.bindings.delete(o):this.bindings.set(o,a)}}getKeyBindingsForCommand(e){const i=[];for(const o of this.bindings.values())for(const r of o)r.commandId===e&&i.push(this.formatKeyBinding(r));return i.sort()}formatKeyBinding(e){const i=ln.filter(r=>e[r]).map(r=>nm[r]),o=e.key.length===1?e.key.toUpperCase():e.key.charAt(0).toUpperCase()+e.key.slice(1).toLowerCase();return i.push(o),i.join("+")}handleKeyDown(e){if(!this.enabled)return;const i={commandId:"",key:cn(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},o=this.getBindingKey(i),r=this.bindings.get(o);if(r&&r.length>0){const a=r[0];try{e.preventDefault(),e.stopPropagation();const s=Ge.createExecutionContext({});Ge.execute(a.commandId,s),K.debug(`Executed command via key binding: ${a.commandId}`)}catch(s){K.error(`Failed to execute command ${a.commandId}: ${s.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){const e=new Map;for(const[i,o]of this.bindings)e.set(i,[...o]);return e}clearAll(){this.bindings.clear()}}const wl=new dm;kt.put("keyBindingManager",wl);class Ci extends Kr{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let i=this;for(;i&&i!==document.body&&i!==document.documentElement;){const o=i.getAttribute("id");if(o){e.unshift(`#${o}`);break}const r=i.tagName.toLowerCase(),a=i.parentElement;if(!a)break;const l=Array.from(a.children).filter(d=>d.tagName.toLowerCase()===r).indexOf(i);l>=0?e.unshift(`${r}:${l}`):e.unshift(r),i=a}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),i=this.getAttribute("id");if(i){this.settingsKey=`${e}:${i}`;return}const o=this.buildDOMTreePath();o&&(this.settingsKey=`${e}:${o}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await nt.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await nt.setDialogSetting(this.settingsKey,e)}}const vl=class extends Ci{dispose(){}getResult(){}renderMessage(e,i=!1){if(i){const o=H.parse(e,{async:!1});return p`<div class="dialog-message" style="white-space: normal;">${Ke(o)}</div>`}return p`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};vl.styles=[k`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let ii=vl;const Ei=ei("DialogService"),Mi="dialogs",Yo={id:"ok",label:"OK",variant:"primary"},gs={id:"cancel",label:"Cancel",variant:"default"},hm={id:"close",label:"Close",variant:"default"};let Yi=null;function um(){return(!Yi||!document.body.contains(Yi))&&(Yi=document.createElement("div"),Yi.id="global-dialog-container",document.body.appendChild(Yi)),Yi}class pm{constructor(){this.contributions=new Map,this.contributionsChangeScheduled=!1,this.loadContributions(),It($e,e=>{e.target===Mi&&(this.contributionsChangeScheduled||(this.contributionsChangeScheduled=!0,queueMicrotask(()=>{this.contributionsChangeScheduled=!1,this.loadContributions()})))})}loadContributions(){const e=B.getContributions(Mi);this.contributions.clear();for(const i of e){if(!i.id){Ei.warn("Dialog contribution missing id, skipping");continue}if(!i.component){Ei.warn(`Dialog contribution "${i.id}" has no component function, skipping`);continue}if(!i.onButton){Ei.warn(`Dialog contribution "${i.id}" has no onButton callback, skipping`);continue}this.contributions.set(i.id,i)}}async open(e,i){const o=this.contributions.get(e);if(!o)throw Ei.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(r=>{const a=um();let s=!0,l=null;const d=async()=>{if(s){if(s=!1,l)try{await l.dispose()}catch(g){const b=g instanceof Error?g.message:String(g);Ei.error(`Error disposing dialog content for "${e}": ${b}`)}try{const g=l?l.getResult():void 0;await o.onButton("close",g,f)}catch(g){const b=g instanceof Error?g.message:String(g);Ei.error(`Error executing close callback for dialog "${e}": ${b}`)}be(p``,a),r()}},h=async g=>{try{const b=l?l.getResult():void 0;await o.onButton(g,b,f)!==!1&&d()}catch(b){const C=b instanceof Error?b.message:String(b);Ei.error(`Error executing button callback for dialog "${e}": ${C}`),d()}},u=o.buttons&&o.buttons.length>0?o.buttons:[Yo];i&&typeof i=="object"&&(i.close=d);const f={...i,close:d},m=p`
                <wa-dialog label="${o.label||e}" open @wa-request-close=${d}>
                    <style>
                        .dialog-service-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 400px;
                        }
                        
                        .dialog-service-footer {
                            display: flex;
                            gap: 0.5rem;
                            justify-content: flex-end;
                            margin-top: 1rem;
                            padding-top: 1rem;
                            border-top: 1px solid var(--wa-color-neutral-20);
                        }

                        :host-context(.wa-light) .dialog-service-footer {
                            border-top-color: var(--wa-color-neutral-80);
                        }
                    </style>
                    
                    <div class="dialog-service-content" 
                         @dialog-ok=${()=>{const g=u.find(b=>b.id==="ok");g&&h(g.id)}}
                         @dialog-cancel=${()=>{const g=u.find(b=>b.id==="cancel");g?h(g.id):d()}}>
                        ${o.component(i)}
                        
                        <div class="dialog-service-footer">
                            ${u.map(g=>p`
                                <wa-button 
                                    variant="${g.variant||"default"}"
                                    ?disabled=${g.disabled}
                                    @click=${()=>h(g.id)}
                                >
                                    ${g.label}
                                </wa-button>
                            `)}
                        </div>
                    </div>
                </wa-dialog>
            `;be(m,a),(async()=>{const g=Array.from(a.querySelectorAll("*"));for(const b of g)if(b instanceof ii){await b.updateComplete,l=b;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const Zr=new pm;kt.put("dialogService",Zr);const Zt="events/filesys/workspaceChanged",qe="events/filesys/workspaceConnected",Ct=ei("WorkspaceService");class yl{constructor(){this.state={}}getWorkspacePath(){const e=[];let i=this,o;for(;i;){e.push(i.getName());const a=i.getParent();a||(o=i),i=a}e.reverse();const r=typeof P?.getWorkspaceSync=="function"?P.getWorkspaceSync():void 0;if(r&&o&&"isDirectChild"in r&&typeof r.isDirectChild=="function"&&r.isDirectChild(o)){const a=r.getFolderNameForDirectory(o);if(a&&e.length>0)return e.length>1?a+"/"+e.slice(1).join("/"):a}return e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const i=e.getParent();if(i)e=i;else break}return e}}var bs=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(bs||{}),xl=(t=>(t[t.BASE64=0]="BASE64",t))(xl||{});class zt extends yl{}class Rt extends yl{}class Zg extends zt{constructor(e,i){super(),this.contents=e,this.name=i}async getContents(e){return this.contents}async saveContents(e,i){this.contents=e}async size(){return this.contents.length||null}async copyTo(e){throw Error("Not supported")}delete(e,i){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class fm extends Rt{constructor(e,i="/"){super(),this.displayName=i,this.entriesByName=new Map(e.map(o=>[o.getName(),o]))}getFolderNameForDirectory(e){for(const[i,o]of this.entriesByName)if(o===e)return i}isDirectChild(e){return this.getFolderNameForDirectory(e)!==void 0}getName(){return this.displayName}getParent(){}async listChildren(e){return Array.from(this.entriesByName.values())}async getResource(e,i){const o=e?.replace(/^\/+/,"").trim();if(!o)return null;const r=o.indexOf("/"),a=r>=0?o.slice(0,r).trim():o.trim(),s=r>=0?o.slice(r+1).trim():"",l=this.entriesByName.get(a);return l?s?l.getResource(s,i):l:null}touch(){for(const e of this.entriesByName.values())e.touch()}async delete(e,i){throw new Error("Delete not supported on workspace root")}async copyTo(e){throw new Error("Copy not supported on workspace root")}async rename(e){throw new Error("Rename not supported on workspace root")}getFolderByName(e){return this.entriesByName.get(e)}}class ba extends Rt{constructor(e){super(),this.backendType=e.backendType,this.persistedData=e.data,this.name=e.name}getName(){return this.name}getParent(){}async listChildren(e){return[]}async getResource(e,i){throw new Error(`Workspace backend "${this.backendType}" is not available in this environment.`)}touch(){}async delete(e,i){throw new Error(`Cannot modify workspace folder for missing backend "${this.backendType}".`)}async copyTo(e){throw new Error(`Cannot copy from workspace folder for missing backend "${this.backendType}".`)}async rename(e){throw new Error(`Cannot rename workspace folder for missing backend "${this.backendType}".`)}}const wa="workspace_data",kl=class Cl{constructor(){this._currentWorkspace=void 0,this.folders=[],this.contributions=new Map,this.restoredTypes=new Set;let e;this.initPromise=new Promise(i=>{e=i}),this.loadPersistedWorkspace(e)}getWorkspaceSync(){return this._currentWorkspace}registerContribution(e){this.contributions.set(e.type,e),this.tryRestoreForContribution(e)}getContributions(){return Array.from(this.contributions.values())}async tryRestoreForContribution(e){if(await this.initPromise,this.restoredTypes.has(e.type))return;if(this.folders.filter(l=>l.type===e.type).some(l=>!(l.directory instanceof ba))){this.restoredTypes.add(e.type);return}const r=await me.getObject(wa);if(!r?.folders||!Array.isArray(r.folders)){this.restoredTypes.add(e.type);return}const a=r.folders.filter(l=>l.type===e.type);if(a.length===0){this.restoredTypes.add(e.type);return}this.folders=this.folders.filter(l=>!(l.type===e.type&&l.directory instanceof ba));for(const l of a)if(e.restore)try{const d=await e.restore(l.data);if(!d)continue;this.folders.push({type:e.type,data:l.data,directory:d})}catch(d){Ct.warn(`Failed to restore folder (${e.type}) on contribution registration:`,d)}if(this.folders.length===0){this.restoredTypes.add(e.type);return}const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s??void 0,await this.persistFolders(),s&&(O(qe,s),Ct.debug(`Workspace folders restored for contribution type: ${e.type}`)),this.restoredTypes.add(e.type)}async loadPersistedWorkspace(e){Ct.debug("Restoring workspace from persistence");try{const i=await me.getObject(wa);if(i||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),i?.folders&&Array.isArray(i.folders)&&i.folders.length>0){const o=i.folders.map(a=>({type:a.type,data:a.data}));await this.resolveFolders(o);const r=this.buildComposite();this.workspace=Promise.resolve(r),this._currentWorkspace=r??void 0,r&&(O(qe,r),Ct.debug("Workspace restored from persisted folders")),e();return}if(i&&i.type&&i.data!==void 0){const o=this.contributions.get(i.type);if(o?.restore)try{const r=await o.restore(i.data);if(r){this.folders=[{type:i.type,data:i.data,directory:r}];const a=this.buildComposite();this.workspace=Promise.resolve(a),this._currentWorkspace=a??void 0,this.currentType=i.type,await this.persistFolders(),O(qe,a),Ct.debug("Workspace restored from legacy format")}}catch(r){Ct.error("Failed to restore legacy workspace:",r)}}this.workspace||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),e()}finally{if(this.folders.length===0)try{await this.connectFolder({indexeddb:!0,name:Cl.DEFAULT_INDEXEDDB_FOLDER_NAME}),Ct.debug("Connected default IndexedDB workspace")}catch(i){Ct.warn("Failed to connect default IndexedDB folder",i)}}}async resolveFolders(e){this.folders=[];for(const i of e){const o=this.contributions.get(i.type);if(!o?.restore){const r=i.data&&typeof i.data=="object"&&i.data.name||`${i.type} (missing)`,a=new ba({backendType:i.type,name:r,data:i.data});this.folders.push({type:i.type,data:i.data,directory:a});continue}try{const r=await o.restore(i.data);r&&this.folders.push({type:i.type,data:i.data,directory:r})}catch(r){Ct.warn(`Failed to restore folder (${i.type}):`,r)}}}buildComposite(){if(this.folders.length!==0)return new fm(this.folders.map(e=>e.directory))}async persistFolders(){const e=this.folders.length>0?{folders:this.folders.map(i=>({type:i.type,data:i.data}))}:null;await me.persistObject(wa,e),await me.persistObject("workspace",null),Ct.debug(`Persisted ${this.folders.length} folder(s)`)}async getFolders(){return await this.initPromise,this.folders.map(e=>({name:e.directory.getName(),type:e.type}))}async getFolderInfoForDirectory(e){await this.initPromise;const i=this.folders.find(s=>s.directory===e);if(!i)return;const o=i.data&&typeof i.data=="object"&&i.data.name||i.directory.getName(),a=this.contributions.get(i.type)?.name??i.type;return{name:o,type:i.type,backendName:a}}async updateFolderName(e,i){await this.initPromise;const o=this.folders.find(a=>a.directory===e);if(!o)return;o.data&&typeof o.data=="object"?o.data={...o.data,name:i}:o.data={name:i},await this.persistFolders();const r=this.buildComposite();this.workspace=Promise.resolve(r),this._currentWorkspace=r??void 0,O(qe,r),Ct.debug(`Updated folder name: ${i}`)}async connectFolder(e){await this.initPromise;const i=Array.from(this.contributions.values()).find(d=>d.canHandle(e));if(!i)throw new Error("No workspace contribution can handle this input");const o=e?.name??i.type;Ct.debug(`Connecting workspace: ${i.type}, ${o}`);const r=await i.connect(e),a=i.persist?await i.persist(r):e;this.folders.push({type:i.type,data:a,directory:r}),await this.persistFolders(),this.currentType=this.folders.length===1?i.type:void 0;const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s,O(qe,s);const l=r.getName();return Ct.info(`Workspace connected: ${i.type} (${l})`),s}async disconnectFolder(e){await this.initPromise;const i=this.folders.findIndex(a=>a.directory===e);if(i<0)return;const o=this.folders[i];Ct.debug(`Disconnecting folder: ${o.directory.getName()} (${o.type})`),this.folders.splice(i,1),await this.persistFolders(),this.folders.length>0?this.currentType=this.folders[0].type:(this.currentType=void 0,Ct.info("Workspace disconnected"));const r=this.buildComposite();this.workspace=Promise.resolve(r),this._currentWorkspace=r??void 0,O(qe,r)}async connectWorkspace(e){return this.connectFolder(e)}async getWorkspace(){if(await this.initPromise,!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return this.folders.length>0}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){await this.initPromise,this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0,this.folders=[],this.currentType=void 0,await this.persistFolders(),O(qe,void 0),Ct.info("Workspace disconnected")}async copyResource(e,i,o){await this.initPromise;const r=this._currentWorkspace;if(!r)throw new Error("No workspace connected.");const a=o?.newName??e.getName(),s=i.getWorkspacePath(),l=s?`${s}/${a}`:a,d=async(u,f)=>{const m=await u.getContents({blob:!0}),g=await r.getResource(f,{create:!0});if(!g)throw new Error(`Failed to create target file: ${f}`);await g.saveContents(m)},h=async(u,f)=>{for(const m of await u.listChildren(!1)){const g=`${f}/${m.getName()}`;m instanceof zt?await d(m,g):m instanceof Rt&&await h(m,g)}};if(e instanceof zt)await d(e,l);else if(e instanceof Rt)await h(e,l);else throw new Error("Unsupported resource type for copy operation.");o?.move&&await e.delete(void 0,!0)}};kl.DEFAULT_INDEXEDDB_FOLDER_NAME="My Folder";let mm=kl;const P=new mm;kt.put("workspaceService",P);class Va extends zt{constructor(e,i){super(),this.fileHandle=e,this.parent=i}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const i=await this.fileHandle.getFile();return!e||e?.contentType==bs.TEXT?await i.text():e?.encoding==xl.BASE64||e?.uri?URL.createObjectURL(i):e?.blob?i:i.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,i){const o=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(o);else{const r=o.getWriter();try{await r.write(e)}finally{await r.close()}}}async copyTo(e){const i=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(i)}async rename(e){const i=this.getParent();if(!i)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(o){throw o.name==="NotAllowedError"||o.message?.includes("not allowed")||o.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):o}await i.listChildren(!0),O(Zt,P.getWorkspaceSync()??this.getWorkspace())}}}class De extends Rt{constructor(e,i){super(),this.dirHandle=e,this.parent=i}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const i={};try{for await(const o of this.dirHandle.values()){const a=o.kind==="file"?new Va(o,this):new De(o,this);i[a.getName()]=a}}catch(o){if(o.name==="NotFoundError")return this.files={},[];throw o}return this.files=i,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,i){if(!e)throw new Error("No path provided");const o=e.split("/");let r=this,a=!1;try{for(let s=0;s<o.length;s++){let l=o[s];if(l&&(l=l.trim()),!l)break;if(r instanceof De){if(await r.listChildren(),!r.files)return null;const d=r.files[l];if(d)r=d;else if(i?.create)if(a=!0,s<o.length-1)try{const h=await r.dirHandle.getDirectoryHandle(l,{create:!0}),u=new De(h,r);r.files[l]=u,r=u,r instanceof De&&await r.listChildren();continue}catch(h){throw h.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${o.slice(0,s+1).join("/")}`):h}else try{const h=await r.dirHandle.getFileHandle(l,{create:!0}),u=new Va(h,r);return r.files[l]=u,u}catch(h){throw h.name==="NotFoundError"?new Error(`File not found or not accessible: ${o.join("/")}`):h}else return null}}}finally{a&&O(Zt,P.getWorkspaceSync()??this.getWorkspace())}return r}touch(){O(Zt,P.getWorkspaceSync()??this.getWorkspace())}async delete(e,i=!0){if(!e){const o=this.getParent();return o instanceof De&&(await o.listChildren(),o.files&&delete o.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,o?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:i}).then(async()=>{this.files&&delete this.files[e],O(Zt,P.getWorkspaceSync()??this.getWorkspace())})}async copyTo(e){for(const i of await this.listChildren()){const o=[e,i.getName()].join("/");await i.copyTo(o)}}async rename(e){const i=this.getParent();if(!i)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(o){throw o.name==="NotAllowedError"||o.message?.includes("not allowed")||o.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):o}await i.listChildren(!0),O(Zt,P.getWorkspaceSync()??this.getWorkspace())}}}P.registerContribution({type:"filesystem",name:"fs",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new De(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new De(t,void 0)},async persist(t){return t instanceof De?t.getHandle():null}});const dn=Object.freeze(Object.defineProperty({__proto__:null,FileSysDirHandleResource:De,FileSysFileHandleResource:Va},Symbol.toStringTag,{value:"Module"})),gm=".opfs";async function hn(){if(typeof navigator>"u"||!navigator.storage?.getDirectory)throw new Error("OPFS is not available in this environment");return await navigator.storage.getDirectory()}class va extends Rt{constructor(e){super(),this.inner=e}getName(){return gm}getParent(){return this.inner.getParent()}async listChildren(e){return this.inner.listChildren(e)}async getResource(e,i){return this.inner.getResource(e,i)}touch(){this.inner.touch()}async delete(e,i){return this.inner.delete(e,i)}async copyTo(e){return this.inner.copyTo(e)}async rename(e){return this.inner.rename(e)}}P.registerContribution({type:"opfs",name:"opfs",canHandle(t){return t&&typeof t=="object"&&t.opfs===!0},async connect(t){const e=await hn(),o=(await Promise.resolve().then(()=>dn)).FileSysDirHandleResource,r=new o(e);return new va(r)},async restore(t){if(t&&typeof t=="object"&&t.opfs===!0){const e=await hn(),o=(await Promise.resolve().then(()=>dn)).FileSysDirHandleResource,r=new o(e);return new va(r)}},async persist(t){return t instanceof va?{opfs:!0}:null}});const bm="eclipse-lyra-workspace-idb",Vt="files";let ya=null;async function bi(){if(typeof indexedDB>"u")throw new Error("IndexedDB is not available in this environment");return ya||(ya=new Promise((t,e)=>{const i=indexedDB.open(bm,1);i.onerror=()=>e(i.error),i.onsuccess=()=>t(i.result),i.onupgradeneeded=o=>{const r=o.target.result;r.objectStoreNames.contains(Vt)||r.createObjectStore(Vt)}})),ya}async function wm(){const t="IndexedDB",e=await P.getFolders(),i=new Set(e.filter(r=>r.type==="indexeddb").map(r=>r.name));if(!i.has(t))return t;let o=1;for(;i.has(`${t} (${o})`);)o+=1;return`${t} (${o})`}function uo(t){return t?t.split("/").filter(Boolean).join("/"):""}function Oo(t,e){const i=uo(t),o=uo(e);return i?o?`${i}/${o}`:i:o}function po(t,e){const i=uo(e);return i?`${t}/${i}`:t}function vm(t,e){const i=uo(e);return i?`${t}/${i}/`:`${t}/`}async function pr(t,e){const r=(await bi()).transaction(Vt,"readonly").objectStore(Vt),a=e?po(t,e):t;return await new Promise((s,l)=>{const d=r.get(a);d.onsuccess=()=>s(d.result),d.onerror=()=>l(d.error)})}async function Mo(t,e,i){const a=(await bi()).transaction(Vt,"readwrite").objectStore(Vt),s=e?po(t,e):t;await new Promise((l,d)=>{const h=a.put(i,s);h.onsuccess=()=>l(),h.onerror=()=>d(h.error)})}async function un(t,e){const r=(await bi()).transaction(Vt,"readwrite").objectStore(Vt),a=e?po(t,e):t;await new Promise((s,l)=>{const d=r.delete(a);d.onsuccess=()=>s(),d.onerror=()=>l(d.error)})}async function ym(t,e){const r=(await bi()).transaction(Vt,"readwrite").objectStore(Vt),a=po(t,e),s=a+"/",l=r.openCursor();await new Promise((d,h)=>{l.onerror=()=>h(l.error),l.onsuccess=u=>{const f=u.target.result;if(!f){d();return}const m=String(f.key);(m===a||m.startsWith(s))&&f.delete(),f.continue()}})}async function xm(t,e,i){const a=(await bi()).transaction(Vt,"readwrite").objectStore(Vt),s=po(t,e),l=po(t,i),d=a.openCursor(),h=[];await new Promise((u,f)=>{d.onerror=()=>f(d.error),d.onsuccess=m=>{const g=m.target.result;if(!g){u();return}const b=String(g.key);if(b===s||b.startsWith(s+"/")){const C=b.slice(s.length),E=l+C,L=g.value;h.push(()=>{g.delete(),a.put(L,E)})}g.continue()}});for(const u of h)u()}async function km(t,e){const r=(await bi()).transaction(Vt,"readonly").objectStore(Vt),a=vm(t,e),s=r.openCursor(),l=new Set,d=new Map;await new Promise((u,f)=>{s.onerror=()=>f(s.error),s.onsuccess=m=>{const g=m.target.result;if(!g){u();return}const b=String(g.key),C=g.value;if(!b.startsWith(a)){g.continue();return}const E=b.slice(a.length);if(!E){g.continue();return}const L=E.indexOf("/"),S=L===-1?E:E.slice(0,L);L===-1?C.type==="dir"?l.add(S):d.set(S,C):l.add(S),g.continue()}});const h=[];for(const u of l)h.push({name:u,entry:{type:"dir"},type:"dir"});for(const[u,f]of d)l.has(u)||h.push({name:u,entry:f,type:"file"});return h}function Cm(t){return t instanceof ze?t.getRootId():""}class xa extends zt{constructor(e,i){super(),this.path=uo(e),this.parent=i}getName(){const e=this.path.split("/");return e[e.length-1]||""}getParent(){return this.parent}getRootId(){return Cm(this.parent)}async delete(){await un(this.getRootId(),this.path),O(Zt,P.getWorkspaceSync()??this.getWorkspace())}async getContents(e){const i=await pr(this.getRootId(),this.path);let o=i?.content;if(typeof o=="string"){const a=new Blob([o],{type:i?.mimeType||"text/plain"});o=a,i&&(i.content=a,await Mo(this.getRootId(),this.path,i))}if(!e||e.contentType===bs.TEXT)return o?await o.text():"";let r;return o?r=o:r=new Blob([],{type:i?.mimeType}),e.blob?r:e.uri?URL.createObjectURL(r):r.stream()}async saveContents(e,i){let o,r;if(e instanceof Blob)o=e,r=e.type||void 0;else if(typeof e=="string")r="text/plain",o=new Blob([e],{type:r});else if(e instanceof ReadableStream){const a=new Response(e);o=await a.blob(),r=a.headers.get("content-type")??void 0}else{const a=String(e??"");r="text/plain",o=new Blob([a],{type:r})}await Mo(this.getRootId(),this.path,{type:"file",content:o,mimeType:r}),O(Zt,P.getWorkspaceSync()??this.getWorkspace())}async size(){const i=(await pr(this.getRootId(),this.path))?.content;return i?i.size:null}async copyTo(e){const i=await this.getContents({blob:!0}),o=await this.getWorkspace().getResource(e,{create:!0});if(!o)throw new Error(`Failed to create target file: ${e}`);await o.saveContents(i)}async rename(e){if(this.getName()===e)return;const i=this.getParent(),o=i instanceof ze?i.getPath():"",r=Oo(o,e),a=this.getRootId(),s=await pr(a,this.path);if(!s)throw new Error("File not found in IndexedDB");await un(a,this.path),await Mo(a,r,s),O(Zt,P.getWorkspaceSync()??this.getWorkspace())}}class ze extends Rt{constructor(e,i){super(),this.path=uo(e),this.parent=i}getPath(){return this.path}getName(){if(!this.path)return"";const e=this.path.split("/");return e[e.length-1]}getParent(){return this.parent}getRoot(){const e=this.getParent();return e?e.getRoot():this}getRootId(){const e=this.getRoot();return e instanceof fr?e.getRootId():""}async listChildren(e){const i=await km(this.getRootId(),this.path),o=[];for(const r of i){const a=Oo(this.path,r.name);r.type==="dir"?o.push(new ze(a,this)):o.push(new xa(a,this))}return o}async getResource(e,i){if(!e)throw new Error("No path provided");const o=e.split("/").filter(a=>a.trim());let r=this;for(let a=0;a<o.length;a++){const s=o[a],l=a===o.length-1,d=r.getPath(),h=Oo(d,s),u=this.getRootId(),f=await pr(u,h);if(!f){if(!i?.create)return null;if(l)return await Mo(u,h,{type:"file",content:new Blob([])}),O(Zt,P.getWorkspaceSync()??this.getWorkspace()),new xa(h,r);await Mo(u,h,{type:"dir"}),r=new ze(h,r);continue}if(l)return f.type==="dir"?new ze(h,r):new xa(h,r);if(f.type!=="dir")return null;r=new ze(h,r)}return r}touch(){O(Zt,P.getWorkspaceSync()??this.getWorkspace())}async delete(e,i=!0){if(!e){const r=this.getParent();if(r instanceof ze){await r.delete(this.getName());return}return}const o=Oo(this.path,e);await ym(this.getRootId(),o),O(Zt,P.getWorkspaceSync()??this.getWorkspace())}async copyTo(e){for(const i of await this.listChildren(!1)){const o=[e,i.getName()].join("/");await i.copyTo(o)}}async rename(e){if(this.getName()===e)return;const i=this.getParent();if(!(i instanceof ze))throw new Error("Cannot rename IndexedDB root directory");const o=this.getPath(),r=Oo(i.getPath(),e);await xm(this.getRootId(),o,r),O(Zt,P.getWorkspaceSync()??this.getWorkspace())}}class fr extends ze{constructor(e,i){super(""),this.displayName=e||"IndexedDB",this.rootId=i}getRootId(){return this.rootId}getName(){return this.displayName}getParent(){}async rename(e){const i=String(e??"").trim();!i||i===this.displayName||(this.displayName=i,await P.updateFolderName(this,i))}}function Sm(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"default-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}P.registerContribution({type:"indexeddb",name:"idb",canHandle(t){return t&&typeof t=="object"&&t.indexeddb===!0},async connect(t){await bi();const e=t.name&&String(t.name).trim(),i=e&&e.length>0?e:await wm(),o=Sm();return new fr(i,o)},async restore(t){if(t&&typeof t=="object"&&t.indexeddb===!0&&t.rootId){await bi();const e=t.name&&String(t.name).trim()||"IndexedDB";return new fr(e,String(t.rootId))}},async persist(t){return t instanceof fr?{indexeddb:!0,name:t.getName(),rootId:t.getRootId()}:null}});const Kt=ei("MarketplaceRegistry"),pn="events/marketplaceregistry/changed",fn="marketplace.catalogUrls";class $m{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{Kt.error(`Failed to refresh catalogs on init: ${e.message}`)})})}async loadCatalogUrls(){try{const e=await nt.get(fn);this.catalogUrls=Array.isArray(e)?e:[]}catch(e){Kt.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await nt.set(fn,this.catalogUrls),O(pn,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){Kt.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),Kt.debug(`Added catalog URL: ${e}`);try{await this.refreshCatalogs()}catch(i){Kt.warn(`Failed to refresh catalogs immediately after adding: ${i}`)}}async addCatalogUrls(e){let i=0;for(const o of e){if(!this.isValidUrl(o)){Kt.warn(`Skipping invalid catalog URL: ${o}`);continue}this.catalogUrls.includes(o)||(this.catalogUrls.push(o),Kt.debug(`Added catalog URL: ${o}`),i++)}if(i!==0){await this.saveCatalogUrls();try{await this.refreshCatalogs()}catch(o){Kt.warn(`Failed to refresh catalogs after adding URLs: ${o}`)}}}async removeCatalogUrl(e){const i=this.catalogUrls.indexOf(e);i!==-1&&(this.catalogUrls.splice(i,1),await this.saveCatalogUrls(),Kt.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const i=new URL(e);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const i=this.loadingPromises.get(e);if(i)return i;const o=(async()=>{try{const r=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const a=await r.json();if(!a.extensions||!Array.isArray(a.extensions))throw new Error("Invalid catalog format: extensions array is required");return{name:a.name,description:a.description,extensions:a.extensions||[]}}catch(r){throw Kt.error(`Failed to fetch catalog from ${e}: ${r}`),r}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,o),o}async refreshCatalogs(){const e=this.catalogUrls.map(r=>this.fetchCatalog(r).catch(a=>(Kt.warn(`Failed to refresh catalog ${r}: ${a.message}`),null))),i=await Promise.allSettled(e);let o=0;i.forEach(r=>{if(r.status==="fulfilled"&&r.value){const a=r.value;a.extensions&&a.extensions.forEach(s=>{if(!ot.getExtensions().find(l=>l.id===s.id)){const l={...s,external:!0};ot.registerExtension(l),o++}})}}),Kt.debug(`Refreshed ${this.catalogUrls.length} catalogs, ${o} extensions registered`),o>0&&Kt.info(`Marketplace: ${o} new extension(s) available`),O(pn,{type:"refreshed"})}getMarketplaceExtension(e){const i=ot.getExtensions().find(o=>o.id===e);if(i&&i.external)return i}isMarketplaceExtension(e){const i=ot.getExtensions().find(o=>o.id===e);return i!==void 0&&i.external===!0}}const Sl=new $m;kt.put("marketplaceRegistry",Sl);const D=ei("AppLoader");function mn(t){if(!t)return"standard";const e=t.layout??t.layoutId;return typeof e=="object"?e.id:e??"standard"}function Em(t){const e={};for(const[i,o]of Object.entries(t))e[i]=typeof o=="boolean"?o?"true":"false":o;return e}function Ee(t){return t instanceof Error?t.message:String(t)}function Lm(t){try{const i=new URL(t).pathname.split("/").filter(Boolean);return i.length>0?i[i.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function Am(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const i=e[0];if(!(!i||i==="index.html"||i.endsWith(".html")))return i}const ws=class Po{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,i){if(i?.hostConfig===!0&&typeof __RESOLVED_PACKAGE_INFO__<"u"){const o=__RESOLVED_PACKAGE_INFO__;e.name===void 0&&(e.name=o.name),e.version===void 0&&(e.version=o.version),e.description===void 0&&(e.description=o.description),e.dependencies===void 0&&(e.dependencies=o.dependencies),e.marketplaceCatalogUrls===void 0&&(e.marketplaceCatalogUrls=o.marketplaceCatalogUrls)}e.name=e.name??"app",e.version=e.version??"0.0.0",this.apps.has(e.name)&&D.warn(`App '${e.name}' is already registered. Overwriting.`),e.marketplaceCatalogUrls?.length&&Sl.addCatalogUrls(e.marketplaceCatalogUrls).catch(()=>{}),this.apps.set(e.name,e),i?.defaultAppName&&(this.defaultAppName=i.defaultAppName),i?.container&&(this.container=i.container),i?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadAppFromUrl(e){D.info(`Loading app from URL: ${e}...`);try{const i=await import(e);if(!i.default)throw new Error(`Module at ${e} does not have a default export`);const o=i.default;if(!o.name||!o.version)throw new Error(`Module at ${e} does not export a valid AppDefinition (name and version required)`);return D.info(`Successfully loaded app definition from URL: ${o.name}`),o}catch(i){throw D.error(`Failed to load app from URL ${e}: ${Ee(i)}`),i}}async start(){if(this.started){D.debug("AppLoader already started");return}this.started=!0;const e=new URLSearchParams(window.location.search),i=e.get("app"),o=e.get("appId"),r=Am(),a=this.apps.size;let s;if(i&&(s=Lm(i),s&&D.info(`Extracted app ID from URL path: ${s}`)),r&&D.info(`Extracted app ID from current page path: ${r}`),i)try{D.info(`URL parameter 'app' found: ${i}, attempting to load extension or app`);try{await ot.loadExtensionFromUrl(i),D.info(`Successfully loaded extension from URL: ${i}`)}catch(d){D.info(`Failed to load as extension, trying as app definition: ${Ee(d)}`);try{const h=await this.loadAppFromUrl(i);if(this.registerApp(h),!h.name)throw new Error("App from URL has no name after registration");await this.loadApp(h.name,this.container),D.info(`Successfully loaded app from URL: ${i}`);return}catch(h){throw D.error(`Failed to load from URL as both extension and app: ${Ee(h)}`),h}}}catch(d){D.error(`Failed to load from URL parameter, falling back to default app: ${Ee(d)}`)}const l=await this.selectAppToLoad({appIdFromUrl:o,appIdFromPath:r,appIdFromAppUrl:s,appsBeforeExtension:a});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}findAppNameBySegment(e){if(this.apps.has(e))return e;for(const i of this.apps.values())if(i.path===e||i.name&&i.name.endsWith("/"+e))return i.name??void 0}dispatchLoadProgress(e){window.dispatchEvent(new CustomEvent("app-load-progress",{detail:{message:e}}))}async loadApp(e,i){const o=this.apps.get(e);if(!o)throw new Error(`App '${e}' not found. Make sure it's registered.`);if(this.dispatchLoadProgress("Starting…"),this.currentApp&&(D.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(D.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(a=>{ot.disable(a)}))),Lr.applyAppNameRemaps(o.remaps),o.remaps?.length){const a=new Set;for(const s of o.remaps)for(const l of s.targets)a.add(l);for(const s of a){const l=B.getContributions(s);O($e,{target:s,contributions:l})}}o.contributions&&(D.info("Registering app contributions..."),o.contributions.ui&&(o.contributions.ui.forEach(a=>{const s=a.target;s&&B.registerContribution(s,a)}),D.info(`Registered ${o.contributions.ui.length} UI contributions`)),o.contributions.extensions&&(o.contributions.extensions.forEach(a=>{ot.registerExtension(a)}),D.info(`Registered ${o.contributions.extensions.length} app extensions`)));const r=new Set(o.extensions||[]);this.systemRequiredExtensions.forEach(a=>r.add(a)),o.extensions=Array.from(r),this.dispatchLoadProgress("Loading extensions…"),await ot.loadEnabledExtensions(),o.extensions.length>0&&(this.dispatchLoadProgress("Enabling extensions…"),await Promise.all(o.extensions.map(a=>ot.enableAsync(a).catch(s=>{D.error(`Failed to load extension ${a}: ${Ee(s)}`)})))),o.initialize&&(this.dispatchLoadProgress("Initializing…"),D.info(`Initializing ${o.name}...`),await o.initialize()),this.currentApp=o,D.info(`App ${o.name} loaded successfully`),this.preferredLayoutId=await this.getPreferredLayoutId(),this.updateDocumentMetadata(o),i&&(this.dispatchLoadProgress("Rendering layout…"),this.renderApp(i)),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appName:o.name}}))}updateDocumentMetadata(e){if(document.title=e.name??"",e.metadata?.favicon){const i=e.metadata.favicon;let o=document.querySelector("link[rel*='icon']");o||(o=document.createElement("link"),o.rel="icon",document.head.appendChild(o)),o.type="image/svg+xml",o.href=i}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const i=this.preferredLayoutId??mn(this.currentApp),o=B.getContributions(Rr);let r=o.find(d=>d.id===i);if(r||(D.warn(`Layout '${i}' not found, falling back to 'standard'`),r=o.find(d=>d.id==="standard")),!r)throw new Error(`No layout found for layoutId '${i}' and no 'standard' layout registered.`);const a=r.component;let s={};a&&typeof a=="object"&&"tag"in a&&a.attributes&&(s={...a.attributes});const l=this.currentApp?.layout;if(typeof l=="object"&&l.id===i&&l.props&&Object.assign(s,Em(l.props)),e.innerHTML="",typeof a=="string"){const d=document.createElement(a);for(const[h,u]of Object.entries(s))d.setAttribute(h,u);e.appendChild(d)}else if(a&&typeof a=="object"&&"tag"in a){const d=document.createElement(a.tag);for(const[h,u]of Object.entries(s))d.setAttribute(h,u);e.appendChild(d)}else if(typeof a=="function")be(a(),e);else throw new Error(`Layout '${r.id}' has invalid component.`);r.onShow&&requestAnimationFrame(()=>{Promise.resolve(r.onShow()).catch(d=>D.error(`Layout onShow failed for '${r.id}': ${Ee(d)}`))})}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await nt.get(Po.PREFERRED_APP_KEY)}catch(e){D.debug(`Failed to get preferred app ID from settings: ${Ee(e)}`);return}}async setPreferredAppId(e){if(!this.apps.has(e))throw new Error(`App '${e}' not found. Make sure it's registered.`);try{await nt.set(Po.PREFERRED_APP_KEY,e),this.defaultAppName=e,D.info(`Set preferred app to: ${e}`)}catch(i){throw D.error(`Failed to persist preferred app: ${Ee(i)}`),i}}getRegisteredLayouts(){return B.getContributions(Rr)}getCurrentLayoutId(){return this.preferredLayoutId??mn(this.currentApp)}async getPreferredLayoutId(){try{return await nt.get(Po.PREFERRED_LAYOUT_KEY)}catch(e){D.debug(`Failed to get preferred layout ID: ${Ee(e)}`);return}}async setPreferredLayoutId(e){if(!this.getRegisteredLayouts().some(o=>o.id===e))throw new Error(`Layout '${e}' not found.`);try{await nt.set(Po.PREFERRED_LAYOUT_KEY,e),this.preferredLayoutId=e,D.info(`Set preferred layout to: ${e}`),this.currentApp&&this.container&&this.renderApp(this.container),window.dispatchEvent(new CustomEvent("layout-changed",{detail:{layoutId:e}}))}catch(o){throw D.error(`Failed to persist preferred layout: ${Ee(o)}`),o}}async selectAppToLoad(e){const{appIdFromUrl:i,appIdFromPath:o,appIdFromAppUrl:r,appsBeforeExtension:a}=e;if(i){const d=this.findAppNameBySegment(i)??i;if(this.apps.has(d))return D.info(`Loading app specified by URL parameter 'appId': ${d}`),d;D.warn(`App '${i}' from URL parameter not found`)}if(o){const d=this.findAppNameBySegment(o);if(d)return D.info(`Loading app from URL path: ${o}`),d;D.debug(`App for path '${o}' not found, continuing search`)}if(r){const d=this.findAppNameBySegment(r)??r;if(this.apps.has(d))return D.info(`Loading app using segment from app URL path: ${d}`),d}if(this.apps.size>a){const d=Array.from(this.apps.values()).slice(a);if(d.length>0){const h=d[0];return D.info(`Loading app registered by extension: ${h.name}`),h.name}}const s=await this.getPreferredAppId();if(s&&this.apps.has(s))return D.info(`Loading preferred app from settings: ${s}`),s;if(this.defaultAppName&&this.apps.has(this.defaultAppName))return this.defaultAppName;this.defaultAppName&&D.warn(`Default app '${this.defaultAppName}' not found`);const l=this.getRegisteredApps();if(l.length>0)return l[0].name}};ws.PREFERRED_APP_KEY="preferredAppName";ws.PREFERRED_LAYOUT_KEY="preferredLayoutId";let zm=ws;const ai=new zm;kt.put("appLoaderService",ai);var Tm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,Zo=(t,e,i,o)=>{for(var r=o>1?void 0:o?Rm(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Tm(e,i,r),r};let Ni=class extends ii{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(t){super.firstUpdated(t),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const i=e.shadowRoot?.querySelector("input");i&&(i.focus(),i.select())}}getResult(){return this.inputValue}handleInput(t){this.inputValue=t.target.value}handleKeyDown(t){t.key==="Enter"?(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):t.key==="Escape"&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};Ni.styles=[...ii.styles,k`
            wa-input {
                width: 100%;
            }
        `];Zo([c({type:String})],Ni.prototype,"message",2);Zo([c({type:String,attribute:"default-value"})],Ni.prototype,"defaultValue",2);Zo([c({type:Boolean})],Ni.prototype,"markdown",2);Zo([w()],Ni.prototype,"inputValue",2);Ni=Zo([v("lyra-prompt-dialog-content")],Ni);B.registerContribution(Mi,{id:"prompt",label:"Input",buttons:[Yo,gs],component:t=>t?p`
            <lyra-prompt-dialog-content 
                .message="${t.message}"
                .defaultValue="${t.defaultValue}"
                .markdown="${t.markdown}"
            ></lyra-prompt-dialog-content>
        `:p`<div>Error: No prompt dialog state</div>`,onButton:async(t,e,i)=>(i&&(t==="ok"?i.resolve(e||""):i.resolve(null)),!0)});async function Dm(t,e="",i=!1){return new Promise(o=>{Zr.open("prompt",{message:t,defaultValue:e,markdown:i,resolve:o})})}var Im=Object.defineProperty,_m=Object.getOwnPropertyDescriptor,vs=(t,e,i,o)=>{for(var r=o>1?void 0:o?_m(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Im(e,i,r),r};let Ir=class extends ii{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};vs([c({type:String})],Ir.prototype,"message",2);vs([c({type:Boolean})],Ir.prototype,"markdown",2);Ir=vs([v("lyra-info-dialog-content")],Ir);B.registerContribution(Mi,{id:"info",label:"Information",buttons:[Yo],component:t=>t?p`
            <lyra-info-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></lyra-info-dialog-content>
        `:p`<div>Error: No info dialog state</div>`,onButton:async(t,e,i)=>(i&&i.resolve&&i.resolve(),!0)});var Om=Object.defineProperty,Pm=Object.getOwnPropertyDescriptor,ys=(t,e,i,o)=>{for(var r=o>1?void 0:o?Pm(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Om(e,i,r),r};let _r=class extends ii{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};ys([c({type:String})],_r.prototype,"message",2);ys([c({type:Boolean})],_r.prototype,"markdown",2);_r=ys([v("lyra-confirm-dialog-content")],_r);B.registerContribution(Mi,{id:"confirm",label:"Confirm",buttons:[Yo,gs],component:t=>t?p`
            <lyra-confirm-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></lyra-confirm-dialog-content>
        `:p`<div>Error: No confirm dialog state</div>`,onButton:async(t,e,i)=>(i&&(t==="ok"?i.resolve(!0):i.resolve(!1)),!0)});async function Ua(t,e=!1){return new Promise(i=>{Zr.open("confirm",{message:t,markdown:e,resolve:i})})}var Fm=Object.defineProperty,Mm=Object.getOwnPropertyDescriptor,Gi=(t,e,i,o)=>{for(var r=o>1?void 0:o?Mm(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Fm(e,i,r),r};let Je=class extends ii{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(t){super.firstUpdated(t),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const i=this.closest(".dialog-service-content");if(i){const o=i.parentElement?.querySelector(".dialog-service-footer");o&&(o.style.display="none")}}updated(t){super.updated(t),t.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),t.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(t,e,i){this.currentTitle=t,this.currentMessage=e,this.actions=[...i],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(t){t.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const t=this.actions.filter(i=>i.label!=="Close"),e=this.actions.filter(i=>i.label==="Close");return p`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${t.map(i=>p`
                            <wa-button 
                                variant="${i.variant||"default"}"
                                ?disabled=${i.disabled}
                                @click=${()=>this.handleActionClick(i)}
                            >
                                ${i.label}
                            </wa-button>
                        `)}
                    </div>
                    <div class="dialog-actions-right">
                        ${e.map(i=>p`
                            <wa-button 
                                variant="${i.variant||"primary"}"
                                @click=${()=>{this.handleActionClick(i),this.handleClose()}}
                            >
                                ${i.label}
                            </wa-button>
                        `)}
                    </div>
                </div>
            </div>
        `}};Je.styles=[...ii.styles,k`
            :host {
                display: block;
            }

            :host-context(.dialog-service-content) {
                padding: 0;
            }
            
            .dialog-content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                min-width: 400px;
                max-width: 600px;
                height: 500px;
                padding: 1rem;
            }
            
            .dialog-scroller {
                flex: 1;
                overflow-y: auto;
            }
            
            .dialog-actions {
                display: flex;
                gap: 0.5rem;
                justify-content: space-between;
                margin-top: 0.5rem;
            }
            
            .dialog-actions-left,
            .dialog-actions-right {
                display: flex;
                gap: 0.5rem;
            }
        `];Gi([c({type:String})],Je.prototype,"title",2);Gi([c({type:String})],Je.prototype,"message",2);Gi([c({type:Boolean})],Je.prototype,"markdown",2);Gi([w()],Je.prototype,"actions",2);Gi([w()],Je.prototype,"currentTitle",2);Gi([w()],Je.prototype,"currentMessage",2);Je=Gi([v("lyra-navigable-info-dialog-content")],Je);B.registerContribution(Mi,{id:"navigable-info",label:"Information",buttons:[hm],component:t=>{if(!t)return p`<div>Error: No navigable info dialog state</div>`;const e=p`
            <lyra-navigable-info-dialog-content 
                .title="${t.title}"
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></lyra-navigable-info-dialog-content>
        `;return(async()=>{const i=document.querySelector("lyra-navigable-info-dialog-content");i&&(await i.updateComplete,i.actions=t.actions||[],i.resolveCallback=t.resolve,t.updateDialogRef&&(t.updateDialogRef.current=(o,r,a)=>{i.updateDialog(o,r,a)}))})(),e},onButton:async(t,e,i)=>i&&t==="close"&&i.resolve?(i.resolve(),!0):!1});var Nm=Object.defineProperty,Bm=Object.getOwnPropertyDescriptor,ko=(t,e,i,o)=>{for(var r=o>1?void 0:o?Bm(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Nm(e,i,r),r};let wi=class extends ii{constructor(){super(...arguments),this.mode="either",this.selectedPath=null,this.rootNodes=[],this.loading=!1,this.loadError=null}async doInitUI(){await this.loadWorkspaceTree()}firstUpdated(t){super.firstUpdated?.(t);const e=this.closest("wa-dialog");e&&e.setAttribute("label",this.dialogTitle)}updated(t){if(super.updated?.(t),t.has("mode")){const e=this.closest("wa-dialog");e&&e.setAttribute("label",this.dialogTitle)}}get dialogTitle(){return this.mode==="file"?"Choose a file":this.mode==="directory"?"Choose a directory":"Choose a file or directory"}getResult(){return this.selectedPath!=null?"/"+this.selectedPath:null}async loadWorkspaceTree(){this.loading=!0,this.loadError=null;try{const t=await P.getWorkspace();if(!t){this.rootNodes=[];return}const e=await t.listChildren(!1),i=[];for(const o of e)i.push(await this.resourceToTreeNode(o,!1));i.sort((o,r)=>o.label.localeCompare(r.label)),this.rootNodes=i}catch(t){const e=t instanceof Error?t.message:String(t);this.loadError=e,this.rootNodes=[]}finally{this.loading=!1}}async resourceToTreeNode(t,e=!0){const i=t instanceof zt,o={resource:t,label:t.getName(),leaf:i,children:[]};if(t instanceof Rt&&e){for(const r of await t.listChildren(!1))o.children.push(await this.resourceToTreeNode(r,!1));o.children.sort((r,a)=>r.label.localeCompare(a.label))}return o}handleSelectionChange(t){const e=t.detail&&t.detail.selection||[];if(!e||e.length===0){this.selectedPath=null,this.requestUpdate();return}const o=e[0]?.model?.resource;if(!o){this.selectedPath=null,this.requestUpdate();return}const r=o instanceof Rt,a=o instanceof zt;if(this.mode==="file"&&!a){this.selectedPath=null,this.requestUpdate();return}if(this.mode==="directory"&&a){const l=o.getParent?.();this.selectedPath=l?l.getWorkspacePath():null,this.requestUpdate();return}if(this.mode==="directory"&&!r){this.selectedPath=null,this.requestUpdate();return}const s=o.getWorkspacePath?.();this.selectedPath=typeof s=="string"?s:null,this.requestUpdate()}renderTreeNode(t){return p`
      <wa-tree-item .model=${t} ?leaf=${t.leaf}>
        ${t.label}
        ${t.children.map(e=>this.renderTreeNode(e))}
      </wa-tree-item>
    `}render(){return p`
      <div class="dialog-body">
        ${this.loadError?this.renderMessage(this.loadError,!1):null}

        <div class="browser-container">
          ${this.loading?p`<div>Loading workspace…</div>`:this.rootNodes.length>0?p`
                    <wa-tree @wa-selection-change=${t=>this.handleSelectionChange(t)}>
                      ${this.rootNodes.map(t=>this.renderTreeNode(t))}
                    </wa-tree>
                  `:p`<div>No workspace folders.</div>`}
        </div>

        <div class="selection-info">
          ${this.selectedPath?`Selected path: ${this.selectedPath}`:"No path selected yet."}
        </div>
      </div>
    `}};wi.styles=[...ii.styles,k`
      :host {
        min-width: 0;
        overflow-x: hidden;
        display: block;
      }

      .dialog-body {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        min-width: 0;
        min-height: 320px;
        max-height: 600px;
        overflow-x: hidden;
      }

      .browser-container {
        flex: 1;
        min-height: 240px;
        min-width: 0;
        overflow: hidden;
        overflow-x: hidden;
      }

      .browser-container wa-tree {
        min-width: 0;
        overflow-x: hidden;
      }

      .tree-label {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
      }

      .selection-info {
        font-size: 0.85em;
        opacity: 0.8;
      }
    `];ko([c({type:String})],wi.prototype,"mode",2);ko([w()],wi.prototype,"selectedPath",2);ko([w()],wi.prototype,"rootNodes",2);ko([w()],wi.prototype,"loading",2);ko([w()],wi.prototype,"loadError",2);wi=ko([v("lyra-filebrowser-dialog")],wi);B.registerContribution(Mi,{id:"filebrowser-dialog",label:"Select Path",buttons:[Yo,gs],component:t=>p`<lyra-filebrowser-dialog .mode=${t?.mode??"either"}></lyra-filebrowser-dialog>`,onButton:async(t,e,i)=>(i&&(t==="ok"?i.resolve(e||null):i.resolve(null)),!0)});function Qg(t="either"){return new Promise(e=>{Zr.open("filebrowser-dialog",{resolve:e,mode:t})})}function Vm(t){const e=(t??"").trim();if(!e)return{name:""};const i=e.split(/\s+/);if(i.length<=1)return{name:e};const o=i.pop(),r=i.join(" ");return{name:o,library:r}}function Dt(t,e){const{name:i,library:o}=Vm(t??"");return p`<wa-icon library=${o??at} name=${i} label=${e?.label??at} slot=${e?.slot??at}></wa-icon>`}var Um=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,Ve=(t,e,i,o)=>{for(var r=o>1?void 0:o?qm(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Um(e,i,r),r};const Hm=150;function ka(t,e,i,o,r){const s=`Toolbar ${t??"default"}`,l=i.filter(h=>h.slot===t&&o(h)),d=t==="start"?p`<slot name="start"></slot>`:t==="end"?p`<slot name="end"></slot>`:p`<slot></slot>`;return p`
        <wa-button-group orientation=${e} label=${s}>
            ${d}
            ${l.map(r)}
        </wa-button-group>
    `}let ae=class extends Ci{constructor(){super(...arguments),this.position="start",this.orientation="horizontal",this.align="start",this.size="small",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[],this.compact=!1,this.resizeObserver=null,this.resizeDebounceTimer=null,this.overflowCheckScheduled=!1,this.onResize=()=>{this.resizeDebounceTimer!==null&&clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=setTimeout(()=>{this.resizeDebounceTimer=null,this.updateCompactFromSpace()},Hm)}}updateCompactFromSpace(){const t=this.shadowRoot?.querySelector(".toolbar-items");if(!t)return;const e=t.scrollWidth>t.clientWidth;this.compact!==e&&(this.compact=e,this.requestUpdate())}scheduleOverflowCheck(){this.overflowCheckScheduled||(this.overflowCheckScheduled=!0,requestAnimationFrame(()=>{this.overflowCheckScheduled=!1,this.updateCompactFromSpace()}))}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=null,this.resizeDebounceTimer!==null&&(clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=null),super.disconnectedCallback()}updated(t){super.updated?.(t),this.compact||this.scheduleOverflowCheck()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),It($e,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[i]=t.split(":");if(e===`${i}:*`)return!0;const o=e.split(":");if(o.length===2){const r=o[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${i}:`)}return!1}loadContributions(t){const e=B.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[i]=t.split(":"),o=`${i}:*`,r=B.getContributions(o),a=[];if(this.isEditor){const s=["system.editors",".system.editors"];for(const l of s){const d=`${i}:${l}`,h=B.getContributions(d);a.push(...h)}}this.contributions=[...r,...a,...e]}isToolbarItem(t){return"command"in t||"component"in t}contributionCreator(t){if("command"in t){const e=t,i=!this.compact&&!!e.showLabel;return p`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size=${this.size}>
                    ${Dt(e.icon,{label:e.label})}
                    ${i?e.label:""}
                </wa-button>
            `}if("component"in t){const e=t.component;return e instanceof Function?e():Ke(e)}return p`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"",e=this.orientation==="vertical"?"column":"row",i={start:"flex-start",center:"center",end:"flex-end"},o=this.contributionCreator.bind(this),r=this.isToolbarItem.bind(this);return p`
            <div class="toolbar-items" style=${et({"flex-direction":e,"align-items":i[this.align],"justify-content":this.position})}>
                ${ka("start",this.orientation,this.contributions,r,o)}
                ${t}
                ${ka(void 0,this.orientation,this.contributions,r,o)}
                ${ka("end",this.orientation,this.contributions,r,o)}
            </div>
        `}};ae.styles=k`
        :host {
            display: flex;
            flex-direction: row;
            --wa-form-control-padding-inline: var(--wa-space-2xs);
        }

        :host([orientation="vertical"]) {
            flex-direction: column;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
            gap: var(--wa-space-2xs);
        }
    `;Ve([c()],ae.prototype,"position",2);Ve([c({reflect:!0})],ae.prototype,"orientation",2);Ve([c({reflect:!0})],ae.prototype,"align",2);Ve([c({reflect:!0})],ae.prototype,"size",2);Ve([c({type:Boolean,attribute:"is-editor"})],ae.prototype,"isEditor",2);Ve([c({attribute:!1})],ae.prototype,"partToolbarContent",2);Ve([c({attribute:!1})],ae.prototype,"partToolbarRenderer",2);Ve([w()],ae.prototype,"contributions",2);Ve([w()],ae.prototype,"compact",2);ae=Ve([v("lyra-toolbar")],ae);var Wm=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,Ht=(t,e,i,o)=>{for(var r=o>1?void 0:o?jm(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Wm(e,i,r),r};let $t=class extends Kr{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(t){if(!this.disabled){if(t&&t.stopPropagation(),this.action){this.action(t);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(t){const e=t.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const t=wl.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),It($e,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=B.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,i=e.disabled?.get();return p`
                <lyra-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${i}">
                    ${e.label}
                </lyra-command>
            `}if("component"in t){const i=t.component;return i instanceof Function?i():Ke(i)}return at}render(){const t=this.getKeybinding();return this.isInDropdown()?p`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    ${Dt(this.icon,{label:this.title,slot:"icon"})}
                    <slot></slot>
                    ${t?p`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?p`
                <wa-dropdown 
                    placement=${this.placement}
                    @wa-select=${e=>this.handleSelect(e)}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        variant=${this.variant}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${t?`${this.title} (${t})`:this.title}>
                        ${Dt(this.icon,{label:this.title,slot:"start"})}
                        <slot></slot>
                        ${this.label?this.title:at}
                    </wa-button>
                    
                    ${this.title?p`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:at}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?p`
                        <wa-divider></wa-divider>
                        <lyra-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                            ${this.title}
                        </lyra-command>
                    `:at}
                </wa-dropdown>
            `:p`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${e=>this.handleClick(e)}>
                ${Dt(this.icon,{label:this.title,slot:"start"})}
                <slot></slot>
            </wa-button>
        `}};$t.styles=k`
        :host {
            display: inline-block;
        }

        .keybinding {
            margin-left: auto;
            padding: 2px 6px;
            background: var(--wa-color-neutral-15);
            border: 1px solid var(--wa-color-neutral-25);
            border-radius: 3px;
            font-size: 10px;
            font-family: monospace;
            opacity: 0.7;
        }

        :host-context(.wa-light) .keybinding {
            background: var(--wa-color-neutral-85);
            border: 1px solid var(--wa-color-neutral-75);
        }
    `;Ht([c()],$t.prototype,"cmd",2);Ht([c({type:Object,attribute:!1})],$t.prototype,"action",2);Ht([c()],$t.prototype,"title",2);Ht([c()],$t.prototype,"label",2);Ht([c()],$t.prototype,"icon",2);Ht([c({type:Boolean})],$t.prototype,"disabled",2);Ht([c()],$t.prototype,"appearance",2);Ht([c()],$t.prototype,"variant",2);Ht([c()],$t.prototype,"size",2);Ht([c({type:Object,attribute:!1})],$t.prototype,"params",2);Ht([c()],$t.prototype,"dropdown",2);Ht([c()],$t.prototype,"placement",2);Ht([w()],$t.prototype,"dropdownContributions",2);$t=Ht([v("lyra-command")],$t);var Km=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,Co=(t,e,i,o)=>{for(var r=o>1?void 0:o?Gm(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Km(e,i,r),r};let vi=class extends Ci{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=ni(),this.dropdownRef=ni(),this.boundHandleDocumentPointerDown=this.handleDocumentPointerDown.bind(this)}handleDocumentPointerDown(t){if(!this.isOpen)return;const e=t.composedPath();this.dropdownRef.value&&e.includes(this.dropdownRef.value)||e.some(i=>i.getAttribute?.("part")==="submenu")||this.onClose()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),It($e,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[i]=t.split(":");if(e===`${i}:*`)return!0;const o=e.split(":");if(o.length===2){const r=o[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${i}:`)}return!1}loadContributions(t){const e=B.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[i]=t.split(":"),o=`${i}:*`,r=B.getContributions(o),a=[];if(this.isEditor){const s=["system.editors",".system.editors"];for(const l of s){const d=`${i}:${l}`,h=B.getContributions(d);a.push(...h)}}this.contributions=[...r,...a,...e]}getElementFromPoint(t,e){let i=document.elementFromPoint(t,e);if(!i)return null;for(;i;){const o=i.shadowRoot;if(o){const r=o.elementFromPoint(t,e);if(r&&r!==i){i=r;continue}}break}return i}triggerClickUnderCursor(t){const e=this.getElementFromPoint(t.clientX,t.clientY);if(e){const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(i)}}show(t,e){e&&this.triggerClickUnderCursor(e),this.position=t,this.isOpen=!0,this.updateComplete.then(()=>{document.addEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})})}onClose(){this.isOpen=!1,document.removeEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})}renderContribution(t){if("command"in t){const e=t,i=e.disabled?.get();return p`
                <lyra-command
                    cmd="${e.command}"
                    icon="${e.icon??""}"
                    .params=${e.params??{}}
                    ?disabled="${i}">
                    ${e.label}
                </lyra-command>
            `}else if("component"in t){const e=t.component;return e instanceof Function?e():Ke(e)}return at}render(){if(!this.isOpen)return at;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():at;return p`
            <wa-dropdown
                ${li(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}>
                
                <div 
                    slot="trigger"
                    ${li(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${t}
                ${this.contributions.map(e=>this.renderContribution(e))}
            </wa-dropdown>
        `}};vi.styles=k`
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
        
        wa-dropdown::part(menu) {
            min-width: 200px;
        }
    `;Co([c({type:Boolean,attribute:"is-editor"})],vi.prototype,"isEditor",2);Co([c({attribute:!1})],vi.prototype,"partContextMenuRenderer",2);Co([w()],vi.prototype,"contributions",2);Co([w()],vi.prototype,"isOpen",2);Co([w()],vi.prototype,"position",2);vi=Co([v("lyra-contextmenu")],vi);class xs extends Ci{}var Xm=Object.defineProperty,Ym=(t,e,i,o)=>{for(var r=void 0,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=s(e,i,r)||r);return r&&Xm(e,i,r),r};class ge extends xs{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return at}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}activateContainingTab(){let e=this,i=null,o=null;for(;e;){const r=e.tagName?.toLowerCase();if(r==="wa-tab-panel"&&(i=e.getAttribute("name")),r==="lyra-tabs"){o=e;break}const a=e.parentElement;if(a)e=a;else{const s=e.getRootNode();e=s instanceof ShadowRoot?s.host:null}}o&&i!=null&&i!==""&&o.activate(i)}renderContextMenu(){return at}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Pa.set(null),Pa.set(this),oe.set(null),oe.set(this)}}Ym([c()],ge.prototype,"dirty");var Zm=Object.defineProperty,Qm=Object.getOwnPropertyDescriptor,ks=(t,e,i,o)=>{for(var r=o>1?void 0:o?Qm(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Zm(e,i,r),r};let yi=class extends xs{constructor(){super(...arguments),this.placement="top",this.contributions=[],this.tabGroup=ni(),this.containerId=null,this.resizeObservers=new WeakMap,this.tabGroupListenersAttached=!1}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("lyra-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),It($e,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),this.contributions.length>0&&this.tabGroup.value&&this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),t.has("contributions")){this.contributions.length===0&&(this.tabGroupListenersAttached=!1);const e=this.containerId===He;this.contributions.forEach(i=>{const o=this.getTabPanel(i.name);if(!o)return;const r=o.querySelector(".tab-content");if(r&&r.firstElementChild){const a=r.firstElementChild;a instanceof ge&&(a.tabContribution=i,a.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(o))})}}has(t){return this.tabGroup.value?!!this.getTabPanel(t):!1}activate(t){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(t){if(this.contributions.find(i=>i.name===t.name)){this.activate(t.name);const i=this.getTabPanel(t.name);i&&this.syncActiveSignalsFromPanel(i);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.activate(t.name);const i=this.getTabPanel(t.name);if(!i)return;const o=i.querySelector(".tab-content");if(o?.firstElementChild instanceof ge){const r=o.firstElementChild;r.tabContribution=t,r.isEditor=this.containerId===He}this.syncActiveSignalsFromPanel(i),requestAnimationFrame(()=>{this.updateToolbarFromComponent(i),this.updateToolbarHeightVariable(i),this.setupToolbarResizeObserver(i)})})})}handleTabAuxClick(t,e){t.button===ms.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await Ua("Unsaved changes will be lost: Do you really want to close?"))return;const i=this.getTabPanel(e);if(!i)return;const o=this.contributions.find(a=>a.name===e);if(!o)return;this.cleanupTabInstance(i),this.clearActiveSignalsIfPartInPanel(i);const r=this.contributions.indexOf(o);r>-1&&this.contributions.splice(r,1),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.containerId&&(this.contributions=B.getContributions(this.containerId),this.requestUpdate())}cleanupTabInstance(t){const e=this.resizeObservers.get(t);e&&(e.disconnect(),this.resizeObservers.delete(t));const i=t.querySelector(".tab-content");if(i&&i.firstElementChild){const o=i.firstElementChild;"close"in o&&typeof o.close=="function"&&o.close()}}ensureTabGroupListenersAndActivate(){if(!this.tabGroup.value||this.tabGroupListenersAttached){this.activateNextAvailableTab();return}this.tabGroupListenersAttached=!0;const t=this.tabGroup.value;t.addEventListener("wa-tab-show",e=>{const i=this.getTabPanel(e.detail.name);i&&(this.syncActiveSignalsFromPanel(i),this.updateToolbarFromComponent(i),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(i),this.setupToolbarResizeObserver(i)}))}),t.addEventListener("part-toolbar-changed",e=>{const o=e.target.closest("wa-tab-panel");o&&(this.updateToolbarFromComponent(o),requestAnimationFrame(()=>this.updateToolbarHeightVariable(o)))}),t.addEventListener("part-contextmenu-changed",e=>{const o=e.target.closest("wa-tab-panel");o&&this.updateContextMenuFromComponent(o)}),t.addEventListener("click",e=>{const i=e.target,o=i.closest("wa-tab");if(o){const s=o.getAttribute("panel");if(s){const l=this.getTabPanel(s);l&&this.syncActiveSignalsFromPanel(l)}return}const r=i.closest("wa-scroller.tab-content");if(!r)return;const a=r.closest("wa-tab-panel");a&&this.syncActiveSignalsFromPanel(a)}),t.addEventListener("contextmenu",e=>{const i=e,o=i.target.closest("wa-scroller.tab-content");if(!o)return;i.preventDefault();const r=o.closest("wa-tab-panel");r&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(r);const a=r.querySelector("lyra-contextmenu");a&&a.show({x:i.clientX,y:i.clientY},i)})}),this.dirtySignalCleanup?.(),this.dirtySignalCleanup=Yn(Pa,e=>{if(!e)return;const i=e.closest("wa-tab-panel");if(!i||!this.contains(i))return;const o=i.getAttribute("name");o&&this.markDirty(o,e.isDirty())}),this.activateNextAvailableTab()}disconnectedCallback(){this.dirtySignalCleanup?.(),this.dirtySignalCleanup=void 0,super.disconnectedCallback()}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`):null}getTab(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`):null}syncActiveSignalsFromPanel(t){const i=t.querySelector(".tab-content")?.firstElementChild;i instanceof ge&&(oe.set(null),to.set(null),oe.set(i),this.containerId===He&&i.isEditor&&to.set(i))}clearActiveSignalsIfPartInPanel(t){const e=Array.from(t.querySelectorAll("*")).filter(i=>i instanceof ge);for(const i of e)oe.get()===i&&oe.set(null),to.get()===i&&to.set(null)}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const i=e.firstElementChild;if(!(i instanceof ge)||!i.renderToolbar)return;const o=t.querySelector("lyra-toolbar");o&&(o.partToolbarRenderer=()=>i.renderToolbar(),o.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const i=e.firstElementChild;if(!(i instanceof ge)||!i.renderContextMenu)return;const o=t.querySelector("lyra-contextmenu");o&&(o.partContextMenuRenderer=()=>i.renderContextMenu(),o.requestUpdate())}updateToolbarHeightVariable(t){const e=t.querySelector(".tab-toolbar");if(!e)return;const i=e.offsetHeight;t.style.setProperty("--toolbar-height",`${i}px`)}setupToolbarResizeObserver(t){if(this.resizeObservers.has(t))return;const e=t.querySelector(".tab-toolbar");if(!e)return;const i=new ResizeObserver(()=>{this.updateToolbarHeightVariable(t)});i.observe(e),this.resizeObservers.set(t,i)}truncateTabLabel(t){if(!t||t.length<=yi.MAX_TAB_LABEL)return t;const e="…",i=yi.MAX_TAB_LABEL-e.length,o=Math.floor(i/2);return t.slice(0,o)+e+t.slice(-(i-o))}renderEmptyState(){const t=ai.getCurrentApp();return p`
            <div class="empty-state">
                ${lt(t,()=>p`
                        <div class="empty-content">
                            <h2 class="empty-title">${t.name}</h2>
                            ${lt(t.description,()=>p`<p class="empty-description">${t.description}</p>`)}
                        </div>
                    `,()=>p`<wa-icon name="folder-open" class="empty-icon"></wa-icon>`)}
            </div>
        `}render(){return this.contributions.length===0?this.renderEmptyState():p`
            <wa-tab-group ${li(this.tabGroup)} placement=${this.placement}>
                ${Nl(this.contributions,t=>t.name,t=>{const e=t.label??t.name,i=this.truncateTabLabel(e);return p`
                        <wa-tab panel="${t.name}"
                                title="${e}"
                                @auxclick="${o=>this.handleTabAuxClick(o,t)}">
                            ${Dt(t.icon,{label:e})}
                            ${i}
                            ${lt(t.closable,()=>p`
                                <wa-icon name="xmark" label="Close"  @click="${o=>this.closeTab(o,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            ${lt(t.toolbar!==!1,()=>p`
                                <lyra-toolbar id="toolbar:${t.editorId??t.name}"
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===He}"></lyra-toolbar>
                            `)}
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${t.component?t.component(t.name):at}
                            </wa-scroller>
                            ${lt(t.contextMenu!==!1,()=>p`
                                <lyra-contextmenu id="contextmenu:${t.name}"
                                               ?is-editor="${this.containerId===He}"></lyra-contextmenu>
                            `)}
                        </wa-tab-panel>
                    `})}
            </wa-tab-group>
        `}};yi.MAX_TAB_LABEL=16;yi.styles=k`
        :host {
            height: 100%;
            width: 100%;
        }

        wa-tab-group {
            height: 100%;
            width: 100%;
        }

        wa-tab-group::part(base) {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            height: 100%;
            width: 100%;
        }

        wa-tab-panel[active] {
            display: grid;
            grid-template-rows: minmax(0, 1fr);
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
        }

        .tab-content {
            position: absolute;
            top: calc(var(--toolbar-height, 0px));
            right: 0;
            left: 0;
            height: calc(100% - var(--toolbar-height, 0px));
        }

        wa-tab::part(base) {
            padding: 3px 0.5rem;
        }

        wa-tab-panel {
            --padding: 0px;
        }

        .part-dirty::part(base) {
            font-style: italic;
            color: var(--wa-color-danger-fill-loud)
        }

        .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            grid-row: 2;
        }

        .empty-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            gap: 0.75rem;
            opacity: 0.3;
        }

        .empty-title {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 500;
            color: var(--wa-color-text-quiet);
        }

        .empty-description {
            margin: 0;
            font-size: 1rem;
            color: var(--wa-color-text-quiet);
            max-width: 500px;
        }

        .empty-icon {
            font-size: 6rem;
            opacity: 0.2;
            color: var(--wa-color-text-quiet);
        }
    `;ks([c({reflect:!0})],yi.prototype,"placement",2);ks([w()],yi.prototype,"contributions",2);yi=ks([v("lyra-tabs")],yi);var Jm=Object.defineProperty,tg=Object.getOwnPropertyDescriptor,Qo=(t,e,i,o)=>{for(var r=o>1?void 0:o?tg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Jm(e,i,r),r};let fo=class extends Ci{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=t=>{if(!this.resizing)return;const i=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,o=[...this.resizing.startSizes];o[this.resizing.handleIndex]+=i,o[this.resizing.handleIndex+1]-=i;const r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,a=r*.05;if(o[this.resizing.handleIndex]>=a&&o[this.resizing.handleIndex+1]>=a){this.resizing.currentSizes=o;const s=o.map((l,d)=>{const u=`${(l/r*100).toFixed(2)}%`;return d===o.length-1?u:`${u} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=s:this.style.gridTemplateRows=s}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,i)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${i*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${i*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const i=this.orientation==="horizontal"?t.clientX:t.clientY,o=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,r=this.gridSizes.map(a=>a.endsWith("%")?parseFloat(a)/100*o:(a.endsWith("px"),parseFloat(a)));this.resizing={handleIndex:e,startPos:i,startSizes:r},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return at;const t=this.gridSizes.flatMap((e,i)=>i===this.gridSizes.length-1?[e]:[e,"1px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",p`
            <style>
                .resize-handle {
                    position: relative;
                    z-index: 10;
                    background-color: var(--wa-color-neutral-border-quiet);
                    transition: background-color var(--wa-transition-fast);
                }
                
                .resize-handle:hover {
                    background-color: var(--wa-color-brand-fill-normal);
                }
            </style>
            
            ${this.gridChildren.map((e,i)=>{if(i<this.gridChildren.length-1){const o=this.orientation==="horizontal"?`${i*2+2}`:"1",r=this.orientation==="vertical"?`${i*2+2}`:"1";return p`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${o};
                                grid-row: ${r};
                            "
                            @mousedown=${a=>this.startResize(a,i)}
                        ></div>
                    `}return at})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Qo([c()],fo.prototype,"orientation",2);Qo([c()],fo.prototype,"sizes",2);Qo([w()],fo.prototype,"gridSizes",2);Qo([w()],fo.prototype,"gridChildren",2);fo=Qo([v("lyra-resizable-grid")],fo);var eg=Object.defineProperty,ig=Object.getOwnPropertyDescriptor,Cs=(t,e,i,o)=>{for(var r=o>1?void 0:o?ig(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&eg(e,i,r),r};let Uo=class extends Kr{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return p`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Uo.styles=k`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;Cs([c()],Uo.prototype,"message",2);Cs([c()],Uo.prototype,"icon",2);Uo=Cs([v("lyra-no-content")],Uo);const Or="language",qo="en";function og(t,e){return e?t.replace(/\{(\w+)\}/g,(i,o)=>e[o]!==void 0?e[o]:i):t}const mr=new Set([qo]),Ss=xi(mr);let $s=null;function rg(t){let e=!1;for(const i of t){const o=i.toLowerCase().replace("-","_");mr.has(o)||(mr.add(o),e=!0)}if(e&&(Ss.set(new Set(mr)),$s===null)){const i=Qr();i!==Bi.get()&&Bi.set(i)}}function Qr(){const t=navigator.languages?.length?navigator.languages:[navigator.language||qo],e=Ss.get();for(const i of t){const o=i.split("-")[0].toLowerCase();if(e.has(o))return o}return qo}const Bi=xi(Qr());async function ag(){const t=await nt.get(Or);$s=t??null,Bi.set(t||Qr())}It(zi,t=>{$s=t?.[Or]??null,Bi.set(t?.[Or]||Qr())});ag();async function So(t,e=!1){const i={};await Promise.all(Object.entries(t).map(async([s,l])=>{const d=await l(),h=d&&"default"in d?d.default:d,m=(s.match(/\.([a-zA-Z-_]+)\.json$/)?.[1]??qo).toLowerCase().replace("-","_");i[m]=h})),rg(Object.keys(i));const o=s=>{const d=Bi.get().toLowerCase().replace("-","_"),[h,u]=d.split("_"),f=u?[`${h}_${u}`,h]:[h];f.push(qo);for(const m of f){const g=i[m];if(g&&s in g)return g[s]}return s},r=Object.assign({},{then:void 0,catch:void 0,finally:void 0}),a={get(s,l){if(l in s)return s[l];const d=o(l),h=(u=>og(o(l),u));return h.toString=()=>e?o(l):d,h.valueOf=()=>e?o(l):d,h[Symbol.toPrimitive]=()=>e?o(l):d,e&&(h.toJSON=()=>o(l)),h}};return new Proxy(r,a)}class sg{constructor(){this.editorInputHandlers=[],this.cachedIconContributions=null,It(qe,()=>{}),It($e,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=B.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((i,o)=>{const r=i.priority??0,a=o.priority??0;return a!==r?a-r:i.label.localeCompare(o.label)}),this.cachedIconContributions}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((i,o)=>{const r=i.definition.ranking??0;return(o.definition.ranking??0)-r})}async ensureHandlerInitialized(e){const i=e.definition;!i.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(i.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(o=>{throw e.lazyInitPromise=void 0,o})),await e.lazyInitPromise)}getEditorOptionsForInput(e){const i=new Set,o=[];for(const r of this.editorInputHandlers){const a=r.definition;!a.canHandle(e)||i.has(a.editorId)||(i.add(a.editorId),o.push({editorId:a.editorId,title:a.label,icon:a.icon}))}return o}async handleInput(e,i){if(i!==void 0){const o=this.editorInputHandlers.find(r=>r.definition.editorId===i);if(o){await this.ensureHandlerInitialized(o);const r=await o.definition.handle(e);return r&&(r.editorId=o.definition.editorId),r}return}for(let o=0;o<this.editorInputHandlers.length;o++){const r=this.editorInputHandlers[o],a=r.definition;if(a.canHandle(e)){await this.ensureHandlerInitialized(r);const s=await a.handle(e);return s&&(s.editorId=a.editorId),s}}}getEditorArea(){return document.querySelector(`lyra-tabs#${He}`)}async loadEditor(e,i){if(!e||("component"in e||(e=await this.handleInput(e,i)),!e||!("component"in e)))return;const o=e.editorId??i;o&&(e.editorId=o),await this.openTab({name:e.key,editorId:o,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.component})}async openTab(e){const i=this.getEditorArea();if(!i){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(i.has(e.name)){i.activate(e.name);return}i.open(e)}getFileIcon(e){const i=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),o=this.getSortedIconContributions();if(o.length===0)return"file";for(const r of o)if(r.mappings&&r.mappings[i])return r.mappings[i];return"file"}}const mo=new sg;kt.put("editorRegistry",mo);B.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const gn=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var ng=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,Es=(t,e,i,o)=>{for(var r=o>1?void 0:o?lg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&ng(e,i,r),r};const ue=ei("LyraFileBrowser"),Pt=await So(Object.assign({"./filebrowser.de.json":()=>Jt(()=>import("./filebrowser.de-5GQ10ols-BDyGxBGM.js"),[]),"./filebrowser.en.json":()=>Jt(()=>import("./filebrowser.en-9Ng_7WE_-DuKn3BNV.js"),[])})),cg=250;let Ho=class extends ge{constructor(){super(...arguments),this.fileEditorOptions=[],this.treeRef=ni(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),It($e,t=>{t.target==="system.icons"&&this.requestUpdate()}),this.subscribe(Zt,t=>this.onWorkspaceChanged(t)),this.subscribe(qe,t=>this.onWorkspaceConnected(t))}disconnectedCallback(){this.workspaceChangedDebounceId!==void 0&&(clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=void 0),this.pendingWorkspaceDir=void 0,super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await P.getWorkspace();await this.loadWorkspace(t??void 0)}renderToolbar(){return p`
            <lyra-command icon="folder-open" title="${Pt.CONNECT_WORKSPACE}" dropdown="filebrowser.connections"></lyra-command>
            <lyra-command cmd="refresh_resource" icon="repeat" title="${Pt.REFRESH_RESOURCE}"></lyra-command>
            <lyra-command cmd="touch" icon="plus" title="${Pt.CREATE_NEW}" dropdown="filebrowser.create"></lyra-command>
        `}renderContextMenu(){const t=Ae.get(),e=t instanceof zt?t:null,i=e&&this.fileEditorOptions.length>0;return p`
            <lyra-command cmd="open_editor" icon="folder-open">${Pt.OPEN}</lyra-command>
            ${i?p`
                <wa-dropdown-item>
                    ${Dt("folder-open",{slot:"icon"})}
                    ${Pt.OPEN_WITH}
                    ${this.fileEditorOptions.map(o=>p`
                        <lyra-command
                            slot="submenu"
                            cmd="open_editor"
                            icon="${o.icon??"file"}"
                            .params=${{path:e.getWorkspacePath(),editorId:o.editorId}}>
                            ${o.title}
                        </lyra-command>
                    `)}
                </wa-dropdown-item>
            `:at}
            <lyra-command cmd="touch" icon="plus" dropdown="filebrowser.create">${Pt.CREATE_NEW}</lyra-command>
        `}onWorkspaceChanged(t){this.pendingWorkspaceDir=t,this.workspaceChangedDebounceId!==void 0&&clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=setTimeout(()=>{this.workspaceChangedDebounceId=void 0;const e=this.pendingWorkspaceDir;this.pendingWorkspaceDir=void 0,e?this.applyWorkspaceChange(e):this.loadWorkspace(void 0,!0)},cg)}async applyWorkspaceChange(t){Ae.set(void 0),await this.loadWorkspace(t,!0),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t,!0)}async loadWorkspace(t,e=!1){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t,!0,e):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&Ae.set(e[0].model?.data)}async resourceToTreeNode(t,e=!1,i=!1){const o=t instanceof zt,r={data:t,label:t.getName(),leaf:o,children:[]};if(t instanceof Rt&&!t.getParent())try{const a=await P.getFolderInfoForDirectory(t);a?.backendName&&(r.workspaceTag=a.backendName)}catch(a){ue.debug("Failed to get workspace info for directory",a)}if(t instanceof Rt&&e){for(const a of await t.listChildren(i)){const s=await this.resourceToTreeNode(a,!0,i);r.children.push(s)}r.children.sort(gn)}return r}createTreeItems(t,e=!1){if(!t)return p``;const i=!t.leaf&&t.children.length===0,o=t.data,r=o instanceof zt,a=!!o.getParent(),s=r?mo.getFileIcon(o.getName()):t.icon||"folder-open",l=t.workspaceTag;return p`
            <wa-tree-item 
                draggable=${a}
                @dragstart=${a?this.nobubble(d=>this.onDragStart(d,o)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(d=>this.onLazyLoad(d,t))}
                .model=${t} 
                ?expanded=${e}
                ?lazy=${i}>
                <span class="tree-label">
                    ${Dt(s,{label:t.leaf?Pt.FILE:Pt.FOLDER})}
                    <span class="tree-label-text">${t.label}</span>
                    ${!t.leaf&&l?p`<wa-badge appearance="outlined" variant="neutral" style="font-size: var(--wa-font-size-xs);">${l}</wa-badge>`:null}
                </span>
                ${t.children.map(d=>this.createTreeItems(d,!1))}
            </wa-tree-item>`}onDragStart(t,e){if(!t.dataTransfer||!e.getParent())return;const o=t.currentTarget?.closest("wa-tree"),r=Array.isArray(o?.selectedItems)?o.selectedItems:[],a=[];if(r.length>0)for(const h of r){const f=h.model?.data;f&&f.getParent()&&a.push(f)}a.length===0&&a.push(e);const s=a.map(h=>h.getWorkspacePath()),l=a.length===1?a[0].getName():`${a.length} items`;t.dataTransfer.effectAllowed="copyMove";const d=s.join(`
`);if(t.dataTransfer.setData("text/plain",d),t.dataTransfer.setData("application/x-workspace-file",d),t.dataTransfer.setData("text/uri-list",d),t.dataTransfer.setDragImage){const h=document.createElement("div");h.textContent=l,h.style.position="absolute",h.style.top="-1000px",h.style.padding="4px 8px",h.style.background="var(--wa-color-neutral-10)",h.style.border="1px solid var(--wa-color-neutral-30)",h.style.borderRadius="4px",document.body.appendChild(h),t.dataTransfer.setDragImage(h,0,0),setTimeout(()=>document.body.removeChild(h),0)}}async onLazyLoad(t,e){const i=e.data;i instanceof Rt&&e.children.length===0&&await this.loadNodeChildren(e,i)}async loadNodeChildren(t,e){if(!this.loadingNodes.has(t)){this.loadingNodes.add(t);try{for(const i of await e.listChildren(!1)){ml&&i.getName().startsWith(".");const o=await this.resourceToTreeNode(i,!1);t.children.push(o)}t.children.sort(gn),this.requestUpdate()}catch(i){ue.error("Failed to load directory children:",i)}finally{this.loadingNodes.delete(t)}}}async onFileDoubleClicked(t){const i=t.currentTarget.model.data;i instanceof zt&&(Ae.set(i),this.executeCommand("open_editor",{}))}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const o=e[0].model.data;Ae.set(o),o instanceof zt?(this.fileEditorOptions=mo.getEditorOptionsForInput(o),this.updateContextMenu()):(this.fileEditorOptions=[],this.updateContextMenu())}else Ae.set(void 0),this.fileEditorOptions=[],this.updateContextMenu()}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=a=>{const s=a.dataTransfer?.types;if(!s)return;const l=s.includes("Files"),d=s.includes("application/x-workspace-file");if(!l&&!d)return;a.preventDefault(),a.dataTransfer&&(d?a.dataTransfer.dropEffect=a.ctrlKey||a.metaKey?"copy":"move":a.dataTransfer.dropEffect="copy"),t.classList.add("drag-over");const u=a.target.closest("wa-tree-item");u&&u!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=u,u.classList.add("drop-target"))},i=a=>{const s=a.dataTransfer?.types;if(!s)return;const l=s.includes("Files"),d=s.includes("application/x-workspace-file");!l&&!d||(a.preventDefault(),t.classList.add("drag-over"))},o=a=>{const s=t.getBoundingClientRect(),l=a.clientX,d=a.clientY;(l<=s.left||l>=s.right||d<=s.top||d>=s.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},r=async a=>{if(a.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!a.dataTransfer||!this.workspaceDir)return;const s=await this.getDropTarget(a),l=a.dataTransfer.types;if(l.includes("Files")){const d=Array.from(a.dataTransfer.files);if(d.length===0)return;await this.handleFilesDrop(d,s);return}if(l.includes("application/x-workspace-file")){await this.handleWorkspaceDrop(a,s);return}};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",i),t.removeEventListener("dragleave",o),t.removeEventListener("drop",r),t.addEventListener("dragover",e),t.addEventListener("dragenter",i),t.addEventListener("dragleave",o),t.addEventListener("drop",r)}async getDropTarget(t){const i=t.target.closest("wa-tree-item");if(i){const r=i.model.data;if(r instanceof Rt)return r;const a=r.getParent();if(a)return a}return this.workspaceDir}async handleWorkspaceDrop(t,e){if(!t.dataTransfer)return;const i=t.dataTransfer.getData("application/x-workspace-file");if(!i)return;const o=i.split(/\r?\n/).map(m=>m.trim()).filter(m=>!!m);if(o.length===0)return;const r=await P.getWorkspace();if(!r){ue.warn("Workspace drop ignored because no workspace is connected");return}const a=async m=>{const g=m.getWorkspace(),b=e.getWorkspace();return!g||!b?!1:g===b&&!(t.ctrlKey||t.metaKey)},s=new Set,l=e.getWorkspace();let d=0,h=0;const u=[];for(const m of o)try{const g=await r.getResource(m);if(!g){ue.warn(`Workspace drop: source not found for path "${m}"`),h++;continue}u.push({path:m,resource:g});const b=g.getWorkspace();b&&s.add(b)}catch(g){ue.error(`Failed to handle workspace drop for "${m}":`,g),h++}if(u.length===0){h>0&&ue.info(`Workspace drop failed for ${h} item(s)`);return}let f=!1;if(l){for(const m of s)if(m!==l){f=!0;break}}if(f&&l)try{const m=Array.from(s),g=await P.getFolderInfoForDirectory(m[0]),b=await P.getFolderInfoForDirectory(l),C=g?.backendName??Pt.UNKNOWN_BACKEND,E=b?.backendName??Pt.UNKNOWN_BACKEND;if(!await Ua(Pt.DND_CROSS_CONNECTION_CONFIRM({count:String(u.length),srcBackend:C,destBackend:E})))return}catch(m){ue.debug("Failed to resolve cross-connection info for DnD",m)}for(const{path:m,resource:g}of u)try{const b=await a(g);await P.copyResource(g,e,{move:b}),d++}catch(b){ue.error(`Failed to handle workspace drop for "${m}":`,b),h++}ue.info(`Workspace drop completed: ${d}/${u.length} items ${h>0?`, ${h} failed`:""}`),await this.loadWorkspace(this.workspaceDir,!0)}async handleFilesDrop(t,e){const i=t.length;let o=0,r=0,a=0;for(const s of t)try{const l=this.buildTargetPath(e,s.name);if(await this.workspaceDir.getResource(l)&&!await Ua(Pt.FILE_EXISTS_OVERWRITE({fileName:s.name}))){a++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(s),o++}catch(l){ue.error(`Failed to upload ${s.name}:`,l),r++}ue.info(`Uploaded ${o}/${i} files${a>0?`, ${a} skipped`:""}${r>0?`, ${r} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const i=t.getWorkspacePath();return i?`${i}/${e}`:e}render(){return p`
            <div class="tree" ${li(this.treeRef)} style="--drop-files-text: '${Pt.DROP_FILES_HERE}'">
                ${lt(!this.workspaceDir,()=>p`
                    <lyra-no-content message="${Pt.SELECT_WORKSPACE}"></lyra-no-content>`,()=>lt(this.root,()=>p`
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.root.children.map(t=>this.createTreeItems(t,!0))}
                </wa-tree>`,()=>p``))}
            </div>
        `}};Ho.styles=k`
        :host {
        }
        
        .tree {
            height: 100%;
            position: relative;
            transition: all 0.2s ease;
        }
        
        .tree.drag-over {
            background-color: var(--wa-color-brand-fill-quiet);
            outline: 2px dashed var(--wa-color-brand-border-normal);
            outline-offset: -4px;
            border-radius: var(--wa-border-radius-medium);
        }
        
        .tree.drag-over::before {
            content: var(--drop-files-text);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            padding: var(--wa-spacing-large);
            border-radius: var(--wa-border-radius-large);
            font-weight: bold;
            pointer-events: none;
            z-index: 1000;
            opacity: 0.3;
        }

        .tree-label {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
        }

        .tree-label-text {
            white-space: nowrap;
        }

        wa-tree-item.drop-target {
            background-color: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            border-radius: var(--wa-border-radius-small);
            outline: 2px solid var(--wa-color-brand-border-loud);
            outline-offset: -2px;
        }
    `;Es([w()],Ho.prototype,"root",2);Es([w()],Ho.prototype,"fileEditorOptions",2);Ho=Es([v("lyra-filebrowser")],Ho);var dg=Object.getOwnPropertyDescriptor,hg=(t,e,i,o)=>{for(var r=o>1?void 0:o?dg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=s(r)||r);return r};const qa=await So(Object.assign({"./tasks.de.json":()=>Jt(()=>import("./tasks.de-Uc1ZhJAb-Bm0wNkDH.js"),[]),"./tasks.en.json":()=>Jt(()=>import("./tasks.en-ErE1So2Z-eCglTKJa.js"),[])}));B.registerContribution(Yr,{component:"<lyra-tasks></lyra-tasks>"});let To=null;function $l(){return To||(To=document.createElement("div"),To.id="progress-dialog-container",document.body.appendChild(To)),To}function bn(){return $l().querySelector("wa-dialog")}function ug(){El(!0)}function El(t=!1){const e=$l(),i=ho.getActiveTasks();if(i.length===0){be(p``,e);return}const r=bn();if(!(t||r?.open===!0))return;const s=()=>{const h=bn();h&&(h.open=!1)},l=()=>{be(p``,e)},d=p`
        <wa-dialog 
            label="${qa.ACTIVE_TASKS}" 
            open
            light-dismiss
            style="--width: 600px;"
            @wa-request-close=${s}
            @wa-after-hide=${l}
        >
            <style>
                .progress-dialog-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .tasitem {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: var(--wa-color-neutral-10);
                    border-radius: 8px;
                    border: 1px solid var(--wa-color-neutral-20);
                }
                
                :host-context(.wa-light) .tasitem {
                    background: var(--wa-color-neutral-95);
                    border: 1px solid var(--wa-color-neutral-85);
                }
                
                .tasheader {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .tasname {
                    font-weight: 600;
                    font-size: 1rem;
                    color: var(--wa-color-neutral-90);
                }
                
                :host-context(.wa-light) .tasname {
                    color: var(--wa-color-neutral-10);
                }
                
                .tasmessage {
                    font-size: 0.875rem;
                    color: var(--wa-color-neutral-70);
                    margin-top: 0.25rem;
                }
                
                :host-context(.wa-light) .tasmessage {
                    color: var(--wa-color-neutral-30);
                }
                
                .tasprogress {
                    margin-top: 0.5rem;
                }
                
                wa-progress-bar {
                    --tracheight: 1.5rem;
                }
                
                wa-progress-bar::part(label) {
                    text-align: center;
                    width: 100%;
                    font-size: 0.875rem;
                }
                
                .no-tasks {
                    text-align: center;
                    padding: 2rem;
                    color: var(--wa-color-neutral-60);
                }
                
                :host-context(.wa-light) .no-tasks {
                    color: var(--wa-color-neutral-40);
                }
            </style>
            
            <div class="progress-dialog-content">
                ${i.map(h=>{const u=h.progress>=0||h.totalSteps>0,f=h.progress>=0?h.progress:h.totalSteps>0?Math.round(h.currentStep/h.totalSteps*100):0,m=h.progress<0&&h.totalSteps>0;return p`
                        <div class="tasitem">
                            <div class="tasheader">
                                <wa-icon name="hourglass" style="color: var(--wa-color-warning-fill-loud);"></wa-icon>
                                <div style="flex: 1;">
                                    <div class="tasname">${h.name}</div>
                                    ${h.message?p`
                                        <div class="tasmessage">${h.message}</div>
                                    `:""}
                                </div>
                            </div>
                            <div class="tasprogress">
                                ${u?p`
                                    <wa-progress-bar value="${f}">
                                        ${m?`${h.currentStep}/${h.totalSteps} - `:""}${f}%
                                    </wa-progress-bar>
                                `:p`
                                    <wa-progress-bar indeterminate></wa-progress-bar>
                                `}
                            </div>
                        </div>
                    `})}
            </div>
        </wa-dialog>
    `;be(d,e)}let Ha=class extends ge{doBeforeUI(){this.watch(Fa,()=>{El(),this.requestUpdate()})}handleIndicatorClick(){ug()}render(){Fa.get();const e=ho.getActiveTasks().length;return e===0?p``:p`
            <div class="tasindicator" @click=${this.handleIndicatorClick} title="${qa.ACTIVE_TASKS_TITLE({taskCount:e.toString()})}">
                <wa-spinner
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);"
                    label="${qa.ACTIVE_TASKS}"
                ></wa-spinner>
                <wa-badge appearance="outlined" variant="neutral" pill>${e}</wa-badge>
                <div class="tasbar-wrap"><wa-progress-bar indeterminate></wa-progress-bar></div>
            </div>
        `}};Ha.styles=k`
        :host {
            display: flex;
            align-items: center;
        }
        
        .tasindicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .tasindicator:hover {
            background: var(--wa-color-neutral-15);
        }
        
        :host-context(.wa-light) .tasindicator:hover {
            background: var(--wa-color-neutral-85);
        }
        
        .tascount {
            font-size: 0.875rem;
            color: var(--wa-color-neutral-70);
        }
        
        :host-context(.wa-light) .tascount {
            color: var(--wa-color-neutral-30);
        }
        
        .tasbar-wrap {
            width: 3rem;
        }
        
        .tasbar-wrap wa-progress-bar {
            --tracheight: 4px;
        }
    `;Ha=hg([v("lyra-tasks")],Ha);var pg=Object.getOwnPropertyDescriptor,fg=(t,e,i,o)=>{for(var r=o>1?void 0:o?pg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=s(r)||r);return r};const Ca=await So(Object.assign({"./partname.de.json":()=>Jt(()=>import("./partname.de-FFi67qCi-iLAwhB2n.js"),[]),"./partname.en.json":()=>Jt(()=>import("./partname.en-DvPivLXR-DGb3aT7k.js"),[])}));B.registerContribution(Yr,{component:"<lyra-part-name></lyra-part-name>"});let wn=class extends Ci{doBeforeUI(){this.watch(oe,()=>{this.requestUpdate()})}getPartName(){const t=oe.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||Ca.NO_PART}render(){const e=oe.get()?.tabContribution?.icon||"box";return p`
            <wa-button 
                appearance="plain"
                size="small"
                title="${Ca.ACTIVE_PART}">
                ${Dt(e,{label:"Part",slot:"start"})}
                ${this.getPartName()}
            </wa-button>
        `}};wn=fg([v("lyra-part-name")],wn);var mg=Object.defineProperty,gg=Object.getOwnPropertyDescriptor,Jo=(t,e,i,o)=>{for(var r=o>1?void 0:o?gg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&mg(e,i,r),r};const bg=ei("LyraExtensions"),ft=await So(Object.assign({"./extensions.de.json":()=>Jt(()=>import("./extensions.de-CZkqW0F1-C2K7_1Fj.js"),[]),"./extensions.en.json":()=>Jt(()=>import("./extensions.en-Dg9Oqudm-BWVq_zKr.js"),[])}));let Vi=class extends ge{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){It(_o,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){ot.enable(t.id,!0),this.requestUpdate()}disable(t){ot.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=ai.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return ot.getExtensions();const t=this.filterText.toLowerCase();return ot.getExtensions().filter(e=>String(e.name).toLowerCase().includes(t)||(e.description?String(e.description).toLowerCase().includes(t):!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],i=[];return t.forEach(o=>{ot.isEnabled(o.id)?e.push(o):i.push(o)}),e.sort((o,r)=>String(o.name).localeCompare(String(r.name))),i.sort((o,r)=>String(o.name).localeCompare(String(r.name))),{enabled:e,available:i}}isExternalExtension(t){return t.external===!0}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const t=await Dm("Enter extension URL or source identifier:","",!1);if(!t)return;await ho.runAsync("Registering extension",async()=>{let e=t;Re.isGitHubUrl(t)&&(e=Re.convertGitHubUrlToSource(t));const i=Re.parseSource(e);i?.type==="github"?await this.fetchGitHubMetadata(i,e):(this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(t){rt(`Failed to register extension: ${t}`)}}async fetchGitHubMetadata(t,e){try{const i=await Re.fetchGitHubPackageJson(t),o=t.owner,r=t.repo,a=i.name||`ext.${o}-${r}`,s=i.name||`${o}/${r}`,l=i.description||"",d=i.version||"",h=i.author||(typeof i.author=="string"?i.author:i.author?.name)||"";this.registerExtensionData={id:a,name:s,description:l,url:e,version:d,author:h,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(i){bg.warn(`Could not fetch package.json, using defaults: ${i}`),this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){rt("URL is required");return}if(!this.registerExtensionData.id){rt("Extension ID is required");return}if(!this.registerExtensionData.name){rt("Extension name is required");return}try{await ho.runAsync("Registering extension",async()=>{const t={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};ot.registerExtension(t),await ot.loadExtensionFromUrl(this.registerExtensionData.url,t.id),je(`Extension ${t.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(t){rt(`Failed to register extension: ${t}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return p`
            <wa-input
                placeholder="${ft.FILTER_PLACEHOLDER}"
                .value=${this.filterText}
                @input=${t=>this.handleFilterInput(t)}
                @wa-clear=${()=>this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
            <wa-button 
                variant="primary" 
                appearance="plain"
                @click=${()=>this.handleRegisterExtension()}
                title="Register a new extension">
                <wa-icon name="plus" label="Add"></wa-icon>
                Register Extension
            </wa-button>
        `}render(){const t=this.getGroupedExtensions(),e=t.enabled.length>0||t.available.length>0;return p`
            ${lt(this.showRegisterDialog,()=>p`
                <wa-dialog 
                    label="Register Extension"
                    open
                    @wa-request-close=${()=>this.cancelRegisterExtension()}
                    style="--wa-dialog-width: 500px;">
                    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
                        <wa-input
                            label="Extension ID *"
                            .value=${this.registerExtensionData.id||""}
                            @input=${i=>{this.registerExtensionData.id=i.target.value,this.requestUpdate()}}
                            required
                            hint="Unique identifier for the extension (e.g., 'ext.my-extension')">
                        </wa-input>
                        
                        <wa-input
                            label="Name *"
                            .value=${this.registerExtensionData.name||""}
                            @input=${i=>{this.registerExtensionData.name=i.target.value,this.requestUpdate()}}
                            required
                            hint="Display name of the extension">
                        </wa-input>
                        
                        <wa-input
                            label="Description"
                            .value=${this.registerExtensionData.description||""}
                            @input=${i=>{this.registerExtensionData.description=i.target.value,this.requestUpdate()}}
                            hint="Description of what the extension does">
                        </wa-input>
                        
                        <wa-input
                            label="URL *"
                            .value=${this.registerExtensionData.url||""}
                            @input=${i=>{this.registerExtensionData.url=i.target.value,this.requestUpdate()}}
                            required
                            readonly
                            hint="Extension source URL or identifier">
                        </wa-input>
                        
                        <div style="display: flex; gap: 0.5rem;">
                            <wa-input
                                label="Version"
                                .value=${this.registerExtensionData.version||""}
                                @input=${i=>{this.registerExtensionData.version=i.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension version">
                            </wa-input>
                            
                            <wa-input
                                label="Author"
                                .value=${this.registerExtensionData.author||""}
                                @input=${i=>{this.registerExtensionData.author=i.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension author">
                            </wa-input>
                        </div>
                        
                        <wa-input
                            label="Icon"
                            .value=${this.registerExtensionData.icon||"puzzle-piece"}
                            @input=${i=>{this.registerExtensionData.icon=i.target.value,this.requestUpdate()}}
                            hint="Icon name (FontAwesome icon)">
                        </wa-input>
                        
                        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
                            <wa-button 
                                variant="default" 
                                @click=${()=>this.cancelRegisterExtension()}>
                                Cancel
                            </wa-button>
                            <wa-button 
                                variant="primary" 
                                @click=${()=>this.confirmRegisterExtension()}
                                ?disabled=${!this.registerExtensionData.id||!this.registerExtensionData.name||!this.registerExtensionData.url}>
                                Register
                            </wa-button>
                        </div>
                    </div>
                </wa-dialog>
            `)}
            <wa-split-panel position="30" class="extensions-split-panel">
                <div slot="start" class="extensions-tree-panel">
                    <wa-scroller class="extensions-tree-scroller" orientation="vertical">
                        <wa-tree 
                            selection="leaf"
                            style="--indent-guide-width: 1px;" 
                            @wa-selection-change="${this.selectionChanged}">
                            ${e?p`
                                ${t.enabled.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                            ${ft.INSTALLED} (${t.enabled.length})
                                        </span>
                                        ${t.enabled.map(i=>{const o=this.isExternalExtension(i);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                                    <span>${Dt(i.icon)}</span> ${i.name}${o?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                                ${t.available.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                            ${ft.AVAILABLE} (${t.available.length})
                                        </span>
                                        ${t.available.map(i=>{const o=this.isExternalExtension(i);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                                    <span>${Dt(i.icon)}</span> ${i.name}${o?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                            `:""}
                            ${e?"":p`
                                <div style="padding: 1em; text-align: center; opacity: 0.7;">
                                    ${ft.NO_MATCHES({filterText:this.filterText})}
                                </div>
                            `}
                        </wa-tree>
                    </wa-scroller>
                </div>
                <wa-scroller slot="end" class="extensions-detail-scroller" orientation="vertical">
                <div class="extensions-detail-content">
                    ${lt(this.selectedExtension,i=>{const o=this.isExternalExtension(i),r=ot.isEnabled(i.id);return p`
                                <h1>${Dt(i.icon)} ${i.name}${o?" (External)":""}</h1>
                                ${lt(o,()=>p`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${ft.EXTERNAL_EXTENSION}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${lt(r,()=>p`
                                        <wa-button 
                                            title="${this.isExtensionRequired(i.id)?ft.REQUIRED_HINT:ft.DISABLE_TITLE}" 
                                            @click="${()=>this.disable(i)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(i.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${ft.UNINSTALL}
                                        </wa-button>
                                        ${lt(this.isExtensionRequired(i.id),()=>p`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${ft.REQUIRED_HINT}</span>
                                            </div>
                                        `)}
                                    `,()=>p`
                                        <wa-button 
                                            title="${ft.ENABLE_TITLE}" 
                                            @click="${()=>this.enable(i)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${ft.INSTALL}
                                        </wa-button>
                                    `)}
                                </div>

                                ${lt(i.experimental,()=>p`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${ft.EXPERIMENTAL}</i></small>
                                    </div>
                                `)}

                                ${lt(i.version||i.author,()=>p`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${lt(i.version,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${ft.VERSION} <strong>${i.version}</strong></span>
                                            </div>
                                        `)}
                                        ${lt(i.author,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${ft.AUTHOR} <strong>${i.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${i.description}</p>

                                ${lt(i.dependencies&&i.dependencies.length>0,()=>p`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${ft.DEPENDENCIES}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${i.dependencies.map(a=>{const s=ot.getExtensions().find(d=>d.id===a),l=ot.isEnabled(a);return p`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${l?"check-circle":"circle"}" 
                                                            style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        ${Dt(s?.icon??"puzzle-piece")}
                                                        <span>${s?.name||a}</span>
                                                        ${l?"":p`
                                                            <span class="dependency-badge">${ft.NOT_INSTALLED}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${ft.DEPENDENCIES_HINT}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
                </wa-scroller>
            </wa-split-panel>
        `}};Vi.styles=k`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .extensions-split-panel {
            flex: 1;
            min-height: 0;
            height: 100%;
        }

        .extensions-tree-panel {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 0;
            overflow: hidden;
        }

        .extensions-tree-scroller {
            flex: 1;
            min-height: 0;
        }

        .extensions-detail-scroller {
            height: 100%;
            min-height: 0;
        }

        .extensions-detail-content {
            padding: 1em;
        }

        wa-tree-item > span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        wa-tree-item:has(> wa-tree-item) {
            font-weight: 500;
        }

        .dependencies-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .dependency-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-surface-variant);
        }

        .dependency-item wa-icon:first-child {
            flex-shrink: 0;
        }

        .dependency-item icon {
            flex-shrink: 0;
        }

        .dependency-item span:not(.dependency-badge) {
            flex: 1;
        }

        .dependency-badge {
            font-size: 0.85rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-warning-100);
            color: var(--wa-color-warning-900);
        }

        .required-hint {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.75rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
        }

        .required-hint wa-icon {
            flex-shrink: 0;
        }

        .required-hint span {
            line-height: 1.4;
        }

        .marketplace-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.375rem 0.875rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
            font-weight: 500;
            margin-top: 0.75rem;
            margin-bottom: 0.5rem;
            border: 1px solid var(--wa-color-primary-30);
        }
    `;Jo([w()],Vi.prototype,"selectedExtension",2);Jo([w()],Vi.prototype,"filterText",2);Jo([w()],Vi.prototype,"showRegisterDialog",2);Jo([w()],Vi.prototype,"registerExtensionData",2);Vi=Jo([v("lyra-extensions")],Vi);var wg=Object.defineProperty,vg=Object.getOwnPropertyDescriptor,Jr=(t,e,i,o)=>{for(var r=o>1?void 0:o?vg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&wg(e,i,r),r};const mt=await So(Object.assign({"./logterminal.de.json":()=>Jt(()=>import("./logterminal.de-MX1cr5ek-EcKGbnDh.js"),[]),"./logterminal.en.json":()=>Jt(()=>import("./logterminal.en-BHVSaQqb-DpFjNbQM.js"),[])}));let go=class extends ge{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=ni()}connectedCallback(){super.connectedCallback(),this.loadSettings(),Zp(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Qp()}log(t,e,i="info"){const o={timestamp:new Date,level:i,source:t,message:e};this.messages=[...this.messages,o],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const r=this.containerRef.value;r&&(r.scrollTop=r.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(r=>r.level==="info").length,e=this.messages.filter(r=>r.level==="warning").length,i=this.messages.filter(r=>r.level==="error").length,o=this.messages.filter(r=>r.level==="debug").length;return p`
            <lyra-command 
                icon="list"
                title="${mt.ALL_LOGS}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${mt.ALL} (${this.messages.length})
            </lyra-command>

            <lyra-command 
                icon="circle-info"
                title="${mt.INFO_LOGS}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${mt.INFO}${t>0?` (${t})`:""}
            </lyra-command>

            <lyra-command 
                icon="triangle-exclamation"
                title="${mt.WARNING_LOGS}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${mt.WARNINGS}${e>0?` (${e})`:""}
            </lyra-command>

            <lyra-command 
                icon="circle-xmark"
                title="${mt.ERROR_LOGS}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${mt.ERRORS}${i>0?` (${i})`:""}
            </lyra-command>

            <lyra-command 
                icon="bug"
                title="${mt.DEBUG_LOGS}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${mt.DEBUG}${o>0?` (${o})`:""}
            </lyra-command>

            <wa-divider orientation="vertical"></wa-divider>

            <lyra-command 
                icon="arrow-down" 
                title="${this.autoScroll?mt.AUTO_SCROLL_ENABLED:mt.AUTO_SCROLL_DISABLED}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?mt.AUTO_SCROLL:mt.MANUAL}
            </lyra-command>

            <lyra-command 
                icon="trash" 
                title="${mt.CLEAR_LOGS}"
                .action=${()=>this.clear()}>
                ${mt.CLEAR}
            </lyra-command>
        `}render(){const t=this.getFilteredMessages();return p`
            <div class="log-terminal">
                <div class="messages" ${li(this.containerRef)}>
                    ${t.length===0?p`<div class="empty-state">${mt.NO_LOG_MESSAGES}</div>`:t.map(e=>p`
                            <div class="message" data-level="${e.level}">
                                <span class="timestamp">${this.formatTimestamp(e.timestamp)}</span>
                                <wa-icon 
                                    name="${this.getLevelIcon(e.level)}" 
                                    label="${e.level}"
                                    style="color: ${this.getLevelColor(e.level)}">
                                </wa-icon>
                                <span class="source">[${e.source}]</span>
                                <span class="text">${e.message}</span>
                            </div>
                        `)}
                </div>
            </div>
        `}async loadSettings(){const t=await this.getDialogSetting();t&&(typeof t.filter=="string"&&(t.filter==="all"||["info","warning","error","debug"].includes(t.filter))&&(this.filter=t.filter),typeof t.autoScroll=="boolean"&&(this.autoScroll=t.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};go.styles=k`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .log-terminal {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .messages {
            flex: 1;
            overflow-y: auto;
            padding: 0.5rem;
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            line-height: 1.5;
        }

        .message {
            display: flex;
            gap: 0.5rem;
            padding: 0.25rem 0.5rem;
            align-items: baseline;
            border-radius: var(--wa-border-radius-small);
        }

        .message:hover {
            background: var(--wa-color-neutral-background-hover);
        }

        .timestamp {
            color: var(--wa-color-neutral-text-subtle);
            font-size: 0.75rem;
            white-space: nowrap;
        }

        .source {
            color: var(--wa-color-primary-text);
            font-weight: 500;
            white-space: nowrap;
        }

        .text {
            color: var(--wa-color-neutral-text);
            word-break: breaword;
        }

        .message[data-level="error"] .text {
            color: var(--wa-color-danger-text);
        }

        .message[data-level="warning"] .text {
            color: var(--wa-color-warning-text);
        }

        .message[data-level="debug"] .text {
            color: var(--wa-color-neutral-text-subtle);
        }

        .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: var(--wa-color-neutral-text-subtle);
            font-style: italic;
        }

        wa-icon {
            flex-shrink: 0;
        }
    `;Jr([w()],go.prototype,"messages",2);Jr([w()],go.prototype,"autoScroll",2);Jr([w()],go.prototype,"filter",2);go=Jr([v("lyra-log-terminal")],go);var yg=Object.defineProperty,xg=Object.getOwnPropertyDescriptor,se=(t,e,i,o)=>{for(var r=o>1?void 0:o?xg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&yg(e,i,r),r};const kg=await So(Object.assign({"./fastviews.de.json":()=>Jt(()=>import("./fastviews.de-MGAlHTsp-CU9Rj7sS.js"),[]),"./fastviews.en.json":()=>Jt(()=>import("./fastviews.en-BoYc4WrC-DnZQwCTs.js"),[])}));let Ut=class extends Kr{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=ni(),this.tabsRef=ni(),this.resizeHandleRef=ni(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(t){if(!this.disabled)if(this.containerId){const e=document.querySelector(`lyra-tabs#${this.containerId}`);if(!e){console.error(`fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(t)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(t)})}handleDrawerHide(){this.drawerOpen=!1}startResize(t){t.preventDefault(),t.stopPropagation();const e=this.drawerRef.value;if(!e)return;let o=(()=>{const s=e.shadowRoot?.querySelector('[part="panel"]');if(s&&s.offsetWidth>0)return s.offsetWidth;const h=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(h){const u=parseFloat(h[1]),f=h[2];if(f==="px")return u;if(f==="vw")return u/100*window.innerWidth;if(f==="vh")return u/100*window.innerHeight;if(f==="%")return u/100*window.innerWidth}return 0})();o===0&&(o=window.innerWidth*.5);const r=s=>{this.resizing&&(s.preventDefault(),s.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-s.clientX,d=Math.round(this.resizing.startSize+l),h=200,u=Math.round(window.innerWidth*.9);if(d>=h&&d<=u){this.drawerSize=`${d}px`;const f=this.drawerRef.value;f&&(f.style.setProperty("--size",this.drawerSize),f.style.setProperty("transition","none"))}this.resizing.rafId=null}))},a=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const s=this.drawerRef.value;s&&s.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:t.clientX,startSize:o,handleMouseMove:r,handleMouseUp:a,rafId:null},document.addEventListener("mousemove",r,{passive:!1}),document.addEventListener("mouseup",a,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),It($e,t=>{this.target&&t.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const t=B.getContributions(this.target);this.tabContributions=t.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(t){return p`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(t)}>
                ${Dt(t.icon,{label:t.label,slot:"icon"})}
                ${t.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?at:p`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    ${Dt(this.icon,{label:this.title,slot:"start"})}
                    <slot></slot>
                </wa-button>
                
                ${this.title?p`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:at}
                
                ${this.tabContributions.map(t=>this.renderTabContribution(t))}
            </wa-dropdown>

            ${this.containerId?at:p`
                <wa-drawer 
                    ${li(this.drawerRef)}
                    label="${this.title||kg.FAST_VIEWS}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${li(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <lyra-tabs 
                        ${li(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </lyra-tabs>
                </wa-drawer>
            `}
        `:at}};Ut.styles=k`
        :host {
            display: inline-block;
        }

        wa-drawer {
            position: relative;
        }

        wa-drawer::part(panel) {
            position: relative;
        }

        .resize-handle {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            cursor: col-resize;
            z-index: 1000;
            background: transparent;
            transition: background-color 0.2s;
            user-select: none;
            touch-action: none;
        }

        .resize-handle:hover {
            background: var(--wa-color-brand-fill-loud);
        }

        .resize-handle:active {
            background: var(--wa-color-brand-fill-loud);
        }
    `;se([c()],Ut.prototype,"target",2);se([c()],Ut.prototype,"title",2);se([c()],Ut.prototype,"icon",2);se([c({type:Boolean})],Ut.prototype,"disabled",2);se([c()],Ut.prototype,"appearance",2);se([c()],Ut.prototype,"size",2);se([c()],Ut.prototype,"placement",2);se([c()],Ut.prototype,"containerId",2);se([w()],Ut.prototype,"tabContributions",2);se([w()],Ut.prototype,"drawerOpen",2);se([w()],Ut.prototype,"drawerSize",2);Ut=se([v("lyra-fastviews")],Ut);var Cg=Object.getOwnPropertyDescriptor,Sg=(t,e,i,o)=>{for(var r=o>1?void 0:o?Cg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=s(r)||r);return r};function $g(){let t=document.getElementById("global-dialog-container");return t||(t=document.createElement("div"),t.id="global-dialog-container",document.body.appendChild(t)),t}const Ll=t=>{try{return new Intl.DisplayNames([t],{type:"language"}).of(t)||t.toUpperCase()}catch{return t.toUpperCase()}},Eg=()=>[...Ss.get()].sort(),Lg=async()=>{const t=Eg(),e=Bi.get();return new Promise(i=>{const o=$g();let r=!1;const a=()=>{const h=o.querySelector("wa-dialog");h&&!r&&(h.open=!1)},s=()=>{r||(r=!0,be(p``,o),i())},l=async h=>{await nt.set(Or,h),a()},d=p`
            <wa-dialog 
                label="Select Language" 
                open 
                light-dismiss
                @wa-request-close=${a}
                @wa-after-hide=${s}>
                <style>
                    .language-list {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                        padding: 1rem;
                        min-width: 300px;
                        max-height: 400px;
                        overflow-y: auto;
                    }
                    
                    .language-item {
                        display: flex;
                        align-items: center;
                        padding: 0.75rem;
                        border-radius: var(--wa-border-radius-small);
                        cursor: pointer;
                        transition: background-color 0.2s;
                    }
                    
                    .language-item:hover {
                        background-color: var(--wa-color-neutral-fill-quiet);
                    }
                    
                    .language-item.active {
                        background-color: var(--wa-color-brand-fill-quiet);
                        font-weight: 600;
                    }
                    
                    .language-code {
                        font-family: monospace;
                        margin-right: 0.75rem;
                        min-width: 3rem;
                        color: var(--wa-color-neutral-600);
                    }
                    
                    .language-name {
                        flex: 1;
                    }
                </style>
                
                <div class="language-list">
                    ${t.map(h=>p`
                        <div 
                            class="language-item ${h===e?"active":""}"
                            @click=${()=>l(h)}>
                            <span class="language-code">${h.toUpperCase()}</span>
                            <span class="language-name">${Ll(h)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;be(d,o)})};let Wa=class extends Ci{render(){const t=Bi.get(),e=Ll(t),i=`${t.toUpperCase()} ${e}`;return p`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>Lg()}>
                ${i}
            </wa-button>
        `}};Wa.styles=k`
        :host {
            display: inline-block;
        }
    `;Wa=Sg([v("lyra-language-selector")],Wa);var Ag=Object.defineProperty,zg=Object.getOwnPropertyDescriptor,Al=(t,e,i,o)=>{for(var r=o>1?void 0:o?zg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Ag(e,i,r),r};let Pr=class extends Ci{constructor(){super(...arguments),this.currentLayoutId="standard"}doBeforeUI(){this.currentLayoutId=ai.getCurrentLayoutId();const t=()=>{this.currentLayoutId=ai.getCurrentLayoutId(),this.requestUpdate()};return window.addEventListener("app-loaded",t),window.addEventListener("layout-changed",t),()=>{window.removeEventListener("app-loaded",t),window.removeEventListener("layout-changed",t)}}async handleSelect(t){const e=t.detail?.item?.value;if(!(!e||e===this.currentLayoutId))try{await ai.setPreferredLayoutId(e)}catch(i){console.error("Failed to switch layout:",i)}}render(){const t=ai.getRegisteredLayouts();if(t.length<=1)return p``;const i=t.find(o=>o.id===this.currentLayoutId)?.name??this.currentLayoutId;return p`
            <wa-dropdown
                placement="bottom-end"
                distance="4"
                size="small"
                @wa-select=${this.handleSelect}>
                <wa-button
                    slot="trigger"
                    appearance="plain"
                    size="small"
                    with-caret
                    title="Switch layout (current: ${i})">
                    <wa-icon name="table-cells" label="Layout"></wa-icon>
                </wa-button>
                ${t.map(o=>p`
                        <wa-dropdown-item
                            value="${o.id}"
                            type="checkbox"
                            ?checked=${o.id===this.currentLayoutId}>
                            ${Dt(o.icon,{label:o.name,slot:"icon"})}
                            ${o.name}
                        </wa-dropdown-item>
                    `)}
            </wa-dropdown>
        `}};Pr.styles=k`
        :host {
            display: inline-block;
        }
    `;Al([w()],Pr.prototype,"currentLayoutId",2);Pr=Al([v("lyra-layout-switcher")],Pr);const Tg="view.filebrowser",Rg="view.logTerminal",Dg="toolbar.info",Ig="toolbar.fastViews",_g="toolbar.languageSelector",Og="toolbar.appSwitcher";B.registerContribution(Dr,{name:Tg,label:"Workspace",icon:"folder-open",component:t=>p`<lyra-filebrowser id="${t}"></lyra-filebrowser>`});B.registerContribution(fs,{name:Rg,label:"Log Messages",icon:"list",component:t=>p`<lyra-log-terminal id="${t}"></lyra-log-terminal>`});B.registerContribution(Go,{name:Dg,label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});B.registerContribution(Go,{name:Ig,label:"Fast Views",component:'<lyra-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></lyra-fastviews>'});B.registerContribution(Go,{name:_g,label:"Language",component:()=>p`<lyra-language-selector></lyra-language-selector>`});B.registerContribution(xo,{name:Og,label:"App Switcher",component:()=>p`<lyra-layout-switcher></lyra-layout-switcher>`});var Pg=Object.defineProperty,Fg=Object.getOwnPropertyDescriptor,tr=(t,e,i,o)=>{for(var r=o>1?void 0:o?Fg(e,i):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Pg(e,i,r),r};let bo=class extends xs{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return p`
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                }
                
                html {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }
                
                body {
                    height: 100%;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                
                lyra-standard-layout {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                lyra-standard-layout .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                lyra-standard-layout .toolbar-bottom {
                    width: 100%;
                    border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    display: grid;
                    grid-template-columns: 1fr 2fr auto;
                    align-items: center;
                    flex-shrink: 0;
                    min-height: 32px;
                    padding: 0 var(--wa-space-s);
                    box-sizing: border-box;
                }
                
                lyra-standard-layout .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                lyra-standard-layout .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <div class="toolbar-top">
                <lyra-toolbar id=${cl}></lyra-toolbar>
                <lyra-toolbar id=${dl}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${xo}></lyra-toolbar>
            </div>
            
            <lyra-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes=${this.getGridSizes()}>
                
                ${this.showLeftSidebar?p`
                        ${this.showBottomSidebar?p`
                                <lyra-resizable-grid 
                                    id="left-sidebar-split" 
                                    orientation="vertical" 
                                    sizes="50%, 50%">
                                    <lyra-tabs id="${Dr}"></lyra-tabs>
                                    <lyra-tabs id="${pl}"></lyra-tabs>
                                </lyra-resizable-grid>
                            `:p`<lyra-tabs id="${Dr}"></lyra-tabs>`}
                    `:at}
                
                ${this.showBottomPanel?p`
                        <lyra-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <lyra-tabs id="${He}"></lyra-tabs>
                            <lyra-tabs id="${fs}"></lyra-tabs>
                        </lyra-resizable-grid>
                    `:p`<lyra-tabs id="${He}"></lyra-tabs>`}
                
                ${this.showAuxSidebar?p`<lyra-tabs id="${fl}"></lyra-tabs>`:at}
            </lyra-resizable-grid>
            
            <div class="toolbar-bottom">
                <lyra-toolbar id=${hl}></lyra-toolbar>
                <lyra-toolbar id=${Yr}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${Go}></lyra-toolbar>
            </div>
        `}};tr([c({type:Boolean,attribute:"show-bottom-sidebar"})],bo.prototype,"showBottomSidebar",2);tr([c({type:Boolean,attribute:"show-bottom-panel"})],bo.prototype,"showBottomPanel",2);tr([c({type:Boolean,attribute:"show-left-sidebar"})],bo.prototype,"showLeftSidebar",2);tr([c({type:Boolean,attribute:"show-aux-sidebar"})],bo.prototype,"showAuxSidebar",2);bo=tr([v("lyra-standard-layout")],bo);const Mg=[{id:"standard",name:"Standard",label:"Standard",icon:"lyra layout-standard",component:"lyra-standard-layout"},{id:"standard-bottom-panel",name:"Standard (bottom panel)",label:"Standard (bottom panel)",icon:"lyra layout-standard-bottom-panel",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true"}}},{id:"standard-bottom-sidebar",name:"Standard (bottom sidebar)",label:"Standard (bottom sidebar)",icon:"lyra layout-standard-bottom-sidebar",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-sidebar":"true"}}},{id:"standard-full",name:"Standard (panel + sidebar)",label:"Standard (panel + sidebar)",icon:"lyra layout-standard-full",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true","show-bottom-sidebar":"true"}}}];for(const t of Mg)B.registerContribution(Rr,t);async function Ng(t,e=!0){const i=await P.getWorkspace();if(!i)return null;const o=t?.path;return e&&!o?null:{workspace:i,path:o||""}}function Ls(t){return t&&typeof t.getContent=="function"&&typeof t.getSelection=="function"&&typeof t.getSnippet=="function"&&typeof t.getLanguage=="function"&&typeof t.getFilePath=="function"}function si(t=!1){const e={filePath:null,language:null};return t?{...e,snippet:null,cursorLine:null}:e}async function Bg(t,e=!0){const i=await Ng(t,e);if(!i)return null;const{workspace:o,path:r}=i;if(!r)return null;try{const a=await o.getResource(r);return!a||!(a instanceof zt)?null:{workspace:o,path:r,file:a}}catch{return null}}pt({command:{id:"disconnect_folder",name:"Disconnect folder",description:"Disconnects a folder from the workspace"},handler:{execute:async()=>{const t=Ae.get();if(!(t instanceof Rt&&t.getParent()===void 0)){rt("Select a folder root to disconnect.");return}try{await P.disconnectFolder(t)}catch(e){rt(e.message)}}},contribution:{target:"contextmenu:filebrowser",label:"Disconnect folder",icon:"folder-minus",disabled:()=>{const t=Ae.get();return!(t instanceof Rt&&t.getParent()===void 0)}}});pt({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>P.connectWorkspace(e)).catch(e=>{rt(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});pt({command:{id:"connect_opfs",name:"OPFS",description:"Connect to Origin Private File System (browser storage)",parameters:[]},handler:{execute:async()=>{try{await P.connectFolder({opfs:!0})}catch(t){rt(t.message)}}},contribution:{target:"filebrowser.connections",label:"OPFS (Browser Storage)",icon:"database"}});pt({command:{id:"connect_indexeddb",name:"IndexedDB",description:"Connect to IndexedDB-backed workspace (browser storage)",parameters:[{name:"name",description:"Optional display name for this IndexedDB workspace root",required:!1}]},handler:{execute:async t=>{const e=t.params?.name;try{await P.connectFolder({indexeddb:!0,name:e})}catch(i){rt(i.message)}}},contribution:{target:"filebrowser.connections",label:"IndexedDB (Browser Storage)",icon:"database"}});pt({command:{id:"refresh_resource",name:"Refresh resource",description:"Refreshes the connected folder of the selected resource, or the whole workspace if nothing is selected",parameters:[]},handler:{execute:async()=>{const t=Ae.get();if(t){t.getWorkspace().touch();return}const e=await P.getWorkspace();if(!e){rt("No workspace selected.");return}e.touch()}}});pt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"The path of the file to open within the workspace; if omitted, the active selection is opened",required:!1},{name:"editorId",description:"Open with this editor id; if omitted, use default editor",required:!1}]},handler:{execute:async t=>{const e=t.params?.path,i=t.params?.editorId;let o=null;if(e)o=(await Bg({path:e}))?.file??null;else{const r=Ae.get();o=r instanceof zt?r:null}o&&await mo.loadEditor(o,i)}}});pt({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Ls(e))return{...si(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...si(),content:null}}}}});pt({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Ls(e))return{...si(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...si(),selection:null}}}}});pt({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Ls(e))return si(!0);try{const i=t.params?.lines?parseInt(t.params.lines,10):5;if(isNaN(i)||i<0)return si(!0);const o=e.getSnippet(i);return o?{snippet:o.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:o.cursorLine}:si(!0)}catch{return si(!0)}}}});pt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=ai.getCurrentApp();if(!e){rt("No app loaded");return}const i=e.dependencies??{},o=Object.keys(i).length>0,r=o?p`
                    <wa-tree style="--indent-guide-width: 1px;">
                        <wa-tree-item expanded>
                            <span>${e.name??""}</span>
                            ${Object.entries(i).map(([S,T])=>p`
                                <wa-tree-item>
                                    <span>${S} <small>${T}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    </wa-tree>
                `:p``;let a=null;const s=()=>(a||(a=document.getElementById("global-dialog-container")||document.createElement("div"),a.id||(a.id="global-dialog-container",document.body.appendChild(a))),a),l=()=>{a&&be(p``,a)},d=S=>{const T=H.parse(S,{async:!1});return p`${Ke(T)}`};let h=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{h=await e.releaseHistory()}catch(S){console.error("Failed to load release history from app:",S),h=[]}else h=e.releaseHistory;const u=e.version??"0.0.0",f=h.length>0?h.findIndex(S=>S.tag_name===u):-1,m=f>=0?f:0;let g=m;const b=S=>{if(h.length===0)return"";const T=h[S],q=T.tag_name===u;let j=`**Version:** ${T.tag_name}`;q&&(j+=" (Current)"),j+=`

`;const Y=new Date(T.published_at).toLocaleDateString();if(j+=`**Released:** ${Y}

`,!q){const dt=u.replace(/^v/,""),ne=T.tag_name.replace(/^v/,""),Wt=dt.split(".").map(Number),Lt=ne.split(".").map(Number);let le=!1;for(let At=0;At<Math.max(Wt.length,Lt.length);At++){const ce=Wt[At]||0,ht=Lt[At]||0;if(ht>ce){le=!0;break}if(ht<ce)break}le&&(j+=`⚠️ **Update available - reload page to update**

`)}return T.body&&(j+=`---

${T.body}`),j},C=()=>{l()},E=()=>{l()},L=S=>{const T=b(S),q=h.length>0,j=p`
                    <wa-dialog 
                        label="About ${e.name??""} - ${e.version??"0.0.0"}"
                        open 
                        light-dismiss
                        style="--width: 600px;"
                        @wa-request-close=${C}
                        @wa-after-hide=${E}
                    >
                        <style>
                            .dialog-content {
                                height: 600px;
                            }
                            
                            wa-tree-item > span small {
                                color: var(--wa-color-neutral-60);
                                font-size: 0.875em;
                                margin-left: 0.5rem;
                            }
                        </style>
                        <small>${e.description??""}</small>
                        <div class="dialog-content">
                            <wa-tab-group>
                                ${h.length>0?p`
                                    <wa-tab slot="nav" panel="release">Release History</wa-tab>
                                    <wa-tab-panel name="release">
                                        ${d(T)}
                                    </wa-tab-panel>
                                `:""}
                                
                                ${o?p`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${r}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${q?p`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${S===h.length-1}
                                    @click=${()=>{S<h.length-1&&(g=S+1,L(g))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${S===0}
                                    @click=${()=>{S>0&&(g=S-1,L(g))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;be(j,s())};return L(m),new Promise(S=>{const T=()=>{a?.querySelector("wa-dialog[open]")?setTimeout(T,100):S()};T()})}}});pt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=to.get()||oe.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=oe.get();return!t||!t.isDirty()}}});const zl="theme";async function Tl(t){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(t)}async function Vg(){const t=await nt.get(zl);await Tl(t||"wa-dark")}async function Ug(t){await nt.set(zl,t)}pt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{const i=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await Tl(i),await Ug(i)}},contribution:{target:xo,icon:"circle-half-stroke",label:"Theme Switcher"}});Vg().catch(t=>{console.error("Failed to load theme preference:",t)});pt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:xo,icon:"expand",label:"Fullscreen"}});pt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",icon:"puzzle-piece",state:{},noOverflow:!0,component:()=>p`<lyra-extensions></lyra-extensions>`};mo.loadEditor(e,"extensions-editor").then()}},contribution:{target:xo,icon:"puzzle-piece",label:"Open Extensions"}});pt({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async t=>ot.getExtensions().map(i=>({id:i.id,name:i.name,description:i.description,experimental:i.experimental,enabled:ot.isEnabled(i.id)}))}});pt({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?rt(t):je(t))}}});const Rl=`self.onmessage = async function(e) {
  const code = e.data;
  try {
    const fn = new Function(code);
    let value = fn();
    if (value != null && typeof value.then === "function") {
      value = await value;
    }
    try {
      self.postMessage({ type: "result", value });
    } catch {
      self.postMessage({
        type: "result",
        value: value === void 0 ? void 0 : String(value)
      });
    }
  } catch (err) {
    self.postMessage({
      type: "error",
      message: err instanceof Error ? err.message : String(err)
    });
  }
};
//# sourceMappingURL=js-runtime-worker-rzw5Fn_l.js.map
`,vn=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Rl],{type:"text/javascript;charset=utf-8"});function qg(t){let e;try{if(e=vn&&(self.URL||self.webkitURL).createObjectURL(vn),!e)throw"";const i=new Worker(e,{type:"module",name:t?.name});return i.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),i}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Rl),{type:"module",name:t?.name})}}function Hg(){let t=null,e=null;function i(){return t||(t=new qg,t.onmessage=o=>{const r=e;e=null,r&&(o.data.type==="result"?r.resolve(o.data.value):r.reject(new Error(o.data.message??"Unknown error")))},t.onerror=o=>{const r=e;e=null,r&&r.reject(new Error(o.message??"Worker error"))}),t}return{execute(o){return new Promise((r,a)=>{e={resolve:r,reject:a},i().postMessage(o)})},close(){t&&(t.terminate(),t=null),e=null}}}async function Wg(t){if(t.code?.trim())return t.code.trim();if(!t.script)return rt("Provide 'script' (file path) or 'code'."),null;const e=await P.getWorkspace();if(!e)return rt("No workspace selected."),null;try{const i=await e.getResource(t.script);if(!i||!(i instanceof zt))return rt("File not found: "+t.script),null;const o=await i.getContents();return typeof o!="string"?(rt("File is not a text file"),null):o}catch(i){return rt(`Failed to access file: ${i instanceof Error?i.message:String(i)}`),null}}pt({command:{id:"js",name:"Run JavaScript file",description:"Runs a script via JsRuntime (inline or file). Return value or self.postMessage(value) is shown.",parameters:[{name:"script",description:"workspace path to a .js file",required:!1},{name:"code",description:"inline JavaScript",required:!1}]},handler:{execute:async t=>{const e=await Wg(t.params??{});if(!e)return;const i=Hg();try{const o=await i.execute(e);return o!==void 0&&je(String(o)),o}catch(o){rt(o instanceof Error?o.message:String(o))}finally{i.close()}}}});pt({command:{id:"open_view_as_editor",name:"Open view as editor",description:"Opens a dashboard view in the editor area",parameters:[{name:"name",description:"View contribution name",required:!0},{name:"sourceContributionSlot",description:"source contribution slot (default: SYSTEM_VIEWS)",required:!1}]},handler:{execute:async({params:t})=>{const e=t?.name;if(!e)return;const i=t?.sourceContributionSlot??ul,r=B.getContributions(i).find(a=>a.name===e);r?.component&&await mo.openTab(r)}}});kt.put("constants",Qf);ki.put("html",p);ki.put("render",be);ki.put("toastInfo",je);ki.put("toastError",rt);ki.put("toastWarning",ef);ki.put("publish",O);ki.put("subscribe",It);export{Zt as A,Dr as B,$e as C,Rt as D,oe as E,zt as F,Dt as G,fl as H,ki as I,dl as J,Go as K,ge as L,qe as M,Yn as N,to as O,Pa as P,Kr as Q,Hg as R,Zg as S,cl as T,fs as U,Gg as V,Xg as W,pl as X,ai as a,pt as b,B as c,xo as d,ot as e,mo as f,ei as g,hl as h,So as i,Ci as j,Ge as k,zi as l,nt as m,K as n,kt as o,Dm as p,me as q,lc as r,Qg as s,rt as t,ho as u,bs as v,P as w,je as x,Ae as y,Ua as z};
