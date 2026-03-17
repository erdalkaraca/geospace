import{i as k,a as ja,n as c,f as y,r as w,t as v,h as te,b as p,l as Ol,j as _l,k as $,m as z,q as Fr,u as Di,_ as Je,o as Kt,v as Pl,w as le,g as Fl,x as xi,y as Ml,S as xn,p as _,z as Nl,s as Ie,D as gt,A as ae,e as ni,c as li,d as Bl}from"./repeat-Duk-1tMZ.js";var to=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var Ka=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};function x(e,t){const i={waitUntilFirstUpdate:!1,...t};return(o,r)=>{const{update:a}=o,s=Array.isArray(e)?e:[e];o.update=function(l){s.forEach(d=>{const h=d;if(l.has(h)){const u=l.get(h),f=this[h];u!==f&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,f)}}),a.call(this,l)}}}const Sa=new Set,Ji=new Map;let Li,Ga="ltr",Xa="en";const kn=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(kn){const e=new MutationObserver(Sn);Ga=document.documentElement.dir||"ltr",Xa=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Cn(...e){e.map(t=>{const i=t.$code.toLowerCase();Ji.has(i)?Ji.set(i,Object.assign(Object.assign({},Ji.get(i)),t)):Ji.set(i,t),Li||(Li=t)}),Sn()}function Sn(){kn&&(Ga=document.documentElement.dir||"ltr",Xa=document.documentElement.lang||navigator.language),[...Sa.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Vl=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Sa.add(this.host)}hostDisconnected(){Sa.delete(this.host)}dir(){return`${this.host.dir||Ga}`.toLowerCase()}lang(){return`${this.host.lang||Xa}`.toLowerCase()}getTranslationData(t){var i,o;const r=new Intl.Locale(t.replace(/_/g,"-")),a=r?.language.toLowerCase(),s=(o=(i=r?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",l=Ji.get(`${a}-${s}`),d=Ji.get(a);return{locale:r,language:a,region:s,primary:l,secondary:d}}exists(t,i){var o;const{primary:r,secondary:a}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[t]||a&&a[t]||i.includeFallback&&Li&&Li[t])}term(t,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let a;if(o&&o[t])a=o[t];else if(r&&r[t])a=r[t];else if(Li&&Li[t])a=Li[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof a=="function"?a(...i):a}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,i)}};var $n={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};Cn($n);var Ul=$n;var U=class extends Vl{};Cn(Ul);var ql=k`
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
`;var Hl=Object.defineProperty,Wl=Object.getOwnPropertyDescriptor,En=e=>{throw TypeError(e)},n=(e,t,i,o)=>{for(var r=o>1?void 0:o?Wl(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Hl(t,i,r),r},Ln=(e,t,i)=>t.has(e)||En("Cannot "+i),jl=(e,t,i)=>(Ln(e,t,"read from private field"),t.get(e)),Kl=(e,t,i)=>t.has(e)?En("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Gl=(e,t,i,o)=>(Ln(e,t,"write to private field"),t.set(e,i),i);var Xl=k`
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
`,dr,A=class extends ja{constructor(){super(),Kl(this,dr,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,i)=>{if(this.internals?.states)try{i?this.internals.states.add(t):this.internals.states.delete(t)}catch(o){if(String(o).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw o}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,i]of e.elementProperties)i.default==="inherit"&&i.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${i.initial}`,!0)}static get styles(){const e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Xl,...e]}attributeChangedCallback(e,t,i){jl(this,dr)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Gl(this,dr,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&this[i]==null&&(this[i]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){const i=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});i.error=t,this.dispatchEvent(i)}throw t}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};dr=new WeakMap;n([c()],A.prototype,"dir",2);n([c()],A.prototype,"lang",2);n([c({type:Boolean,reflect:!0,attribute:"did-ssr"})],A.prototype,"didSSR",2);var bt=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.play=!this.play)}handleLoad(){const e=document.createElement("canvas"),{width:t,height:i}=this.animatedImage;e.width=t,e.height=i,e.getContext("2d").drawImage(this.animatedImage,0,0,t,i),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new Ka),this.isLoaded=!0)}handleError(){this.dispatchEvent(new to)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const t=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return p`
      <div
        class="animated-image"
        tabindex="0"
        role="button"
        aria-pressed=${this.play?"true":"false"}
        aria-label=${t}
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
                    style=${te({"margin-inline-start":"3px"})}
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};bt.css=ql;n([y(".animated")],bt.prototype,"animatedImage",2);n([w()],bt.prototype,"frozenFrame",2);n([w()],bt.prototype,"isLoaded",2);n([c()],bt.prototype,"src",2);n([c()],bt.prototype,"alt",2);n([c({type:Boolean,reflect:!0})],bt.prototype,"play",2);n([x("play",{waitUntilFirstUpdate:!0})],bt.prototype,"handlePlayChange",1);n([x("src")],bt.prototype,"handleSrcChange",1);bt=n([v("wa-animated-image")],bt);var Yl=k`
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
`;var $a="",Ea="";function As(e){$a=e}function Zl(e=""){if(!$a){const t=document.querySelector("[data-webawesome]");if(t?.hasAttribute("data-webawesome")){const i=new URL(t.getAttribute("data-webawesome")??"",window.location.href).pathname;As(i)}else{const o=[...document.getElementsByTagName("script")].find(r=>r.src.endsWith("webawesome.js")||r.src.endsWith("webawesome.loader.js")||r.src.endsWith("webawesome.ssr-loader.js"));if(o){const r=String(o.getAttribute("src"));As(r.split("/").slice(0,-1).join("/"))}}}return $a.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}function Ql(e){Ea=e}function Jl(){if(!Ea){const e=document.querySelector("[data-fa-kit-code]");e&&Ql(e.getAttribute("data-fa-kit-code")||"")}return Ea}var zs="7.2.0";function ec(e,t,i){const o=Jl(),r=o.length>0;let a="solid";return t==="chisel"&&(a="chisel-regular"),t==="etch"&&(a="etch-solid"),t==="graphite"&&(a="graphite-thin"),t==="jelly"&&(a="jelly-regular",i==="duo-regular"&&(a="jelly-duo-regular"),i==="fill-regular"&&(a="jelly-fill-regular")),t==="jelly-duo"&&(a="jelly-duo-regular"),t==="jelly-fill"&&(a="jelly-fill-regular"),t==="notdog"&&(i==="solid"&&(a="notdog-solid"),i==="duo-solid"&&(a="notdog-duo-solid")),t==="notdog-duo"&&(a="notdog-duo-solid"),t==="slab"&&((i==="solid"||i==="regular")&&(a="slab-regular"),i==="press-regular"&&(a="slab-press-regular")),t==="slab-press"&&(a="slab-press-regular"),t==="thumbprint"&&(a="thumbprint-light"),t==="utility"&&(a="utility-semibold"),t==="utility-duo"&&(a="utility-duo-semibold"),t==="utility-fill"&&(a="utility-fill-semibold"),t==="whiteboard"&&(a="whiteboard-semibold"),t==="classic"&&(i==="thin"&&(a="thin"),i==="light"&&(a="light"),i==="regular"&&(a="regular"),i==="solid"&&(a="solid")),t==="duotone"&&(i==="thin"&&(a="duotone-thin"),i==="light"&&(a="duotone-light"),i==="regular"&&(a="duotone-regular"),i==="solid"&&(a="duotone")),t==="sharp"&&(i==="thin"&&(a="sharp-thin"),i==="light"&&(a="sharp-light"),i==="regular"&&(a="sharp-regular"),i==="solid"&&(a="sharp-solid")),t==="sharp-duotone"&&(i==="thin"&&(a="sharp-duotone-thin"),i==="light"&&(a="sharp-duotone-light"),i==="regular"&&(a="sharp-duotone-regular"),i==="solid"&&(a="sharp-duotone-solid")),t==="brands"&&(a="brands"),r?`https://ka-p.fontawesome.com/releases/v${zs}/svgs/${a}/${e}.svg?token=${encodeURIComponent(o)}`:`https://ka-f.fontawesome.com/releases/v${zs}/svgs/${a}/${e}.svg`}var tc={name:"default",resolver:(e,t="classic",i="solid")=>ec(e,t,i),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute("data-duotone-initialized")){const{family:i,variant:o}=t;if(i==="duotone"||i==="sharp-duotone"||i==="notdog-duo"||i==="notdog"&&o==="duo-solid"||i==="jelly-duo"||i==="jelly"&&o==="duo-regular"||i==="utility-duo"||i==="thumbprint"){const r=[...e.querySelectorAll("path")],a=r.find(l=>!l.hasAttribute("opacity")),s=r.find(l=>l.hasAttribute("opacity"));if(!a||!s)return;if(a.setAttribute("data-duotone-primary",""),s.setAttribute("data-duotone-secondary",""),t.swapOpacity&&a&&s){const l=s.getAttribute("opacity")||"0.4";a.style.setProperty("--path-opacity",l),s.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},ic=tc;function oc(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var ea={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},rc={name:"system",resolver:(e,t="classic",i="solid")=>{let r=ea[i][e]??ea.regular[e]??ea.regular["circle-question"];return r?oc(r):""}},ac=rc;var sc="classic",gr=[ic,ac],br=[];function nc(e){br.push(e)}function lc(e){br=br.filter(t=>t!==e)}function ta(e){return gr.find(t=>t.name===e)}function cc(e,t){dc(e),gr.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),br.forEach(i=>{i.library===e&&i.setIcon()})}function dc(e){gr=gr.filter(t=>t.name!==e)}function hc(){return sc}var $o=Symbol(),tr=Symbol(),ia,oa=new Map,be=class extends A{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(e,t)=>{let i;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=p`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(o,this),this.svg}try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?$o:tr}catch{return tr}try{const o=document.createElement("div");o.innerHTML=await i.text();const r=o.firstElementChild;if(r?.tagName?.toLowerCase()!=="svg")return $o;ia||(ia=new DOMParser);const s=ia.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):$o}catch{return $o}}}connectedCallback(){super.connectedCallback(),nc(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),lc(this)}getIconSource(){const e=ta(this.library),t=this.family||hc();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:e,fromLibrary:t}=this.getIconSource(),i=t?ta(this.library):void 0;if(!e){this.svg=null;return}let o=oa.get(e);o||(o=this.resolveIcon(e,i),oa.set(e,o));const r=await o;if(r===tr&&oa.delete(e),e===this.getIconSource().url){if(Ol(r)){this.svg=r;return}switch(r){case tr:case $o:this.svg=null,this.dispatchEvent(new to);break;default:this.svg=r.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new Ka)}}}updated(e){super.updated(e);const t=ta(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);const i=this.shadowRoot?.querySelector("svg");i&&t?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:p`<svg part="svg" width="16" height="16"></svg>`}};be.css=Yl;n([w()],be.prototype,"svg",2);n([c({reflect:!0})],be.prototype,"name",2);n([c({reflect:!0})],be.prototype,"family",2);n([c({reflect:!0})],be.prototype,"variant",2);n([c({attribute:"auto-width",type:Boolean,reflect:!0})],be.prototype,"autoWidth",2);n([c({attribute:"swap-opacity",type:Boolean,reflect:!0})],be.prototype,"swapOpacity",2);n([c()],be.prototype,"src",2);n([c()],be.prototype,"label",2);n([c({reflect:!0})],be.prototype,"library",2);n([c({type:Number,reflect:!0})],be.prototype,"rotate",2);n([c({type:String,reflect:!0})],be.prototype,"flip",2);n([c({type:String,reflect:!0})],be.prototype,"animation",2);n([x("label")],be.prototype,"handleLabelChange",1);n([x(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],be.prototype,"setIcon",1);be=n([v("wa-icon")],be);var Ts=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}};var uc=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}};var pc=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}};var fc=k`
  :host {
    display: contents;
  }
`;const mc=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],gc=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],bc=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],wc=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],vc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],yc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],xc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],kc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$c=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Ec=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Lc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ac=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],zc=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Tc=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Rc=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Dc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Ic=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Oc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],_c=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Pc=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Fc=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Mc=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Nc=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Bc=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Vc=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Uc=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],qc=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Hc=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Wc=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],jc=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Kc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gc=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xc=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yc=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qc=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jc=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ed=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],td=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],id=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],od=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rd=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ad=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],sd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],nd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],ld=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],cd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],dd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],hd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],ud=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],pd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],fd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],md=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],gd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],bd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],wd=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],vd=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],yd=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],xd=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],kd=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Cd=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sd=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$d=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Ed=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Ld=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ad=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zd=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Td=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Rd=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Dd=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Id=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Od=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],_d=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Pd=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Fd=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Md=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nd=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bd=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Ud=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],qd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Hd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Wd=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],jd=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Kd=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Xd=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Yd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Zd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Qd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Jd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],eh=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],th=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ih=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],oh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],rh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],An={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},ah=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Ac,backInLeft:zc,backInRight:Tc,backInUp:Rc,backOutDown:Dc,backOutLeft:Ic,backOutRight:Oc,backOutUp:_c,bounce:mc,bounceIn:Pc,bounceInDown:Fc,bounceInLeft:Mc,bounceInRight:Nc,bounceInUp:Bc,bounceOut:Vc,bounceOutDown:Uc,bounceOutLeft:qc,bounceOutRight:Hc,bounceOutUp:Wc,easings:An,fadeIn:jc,fadeInBottomLeft:Kc,fadeInBottomRight:Gc,fadeInDown:Xc,fadeInDownBig:Yc,fadeInLeft:Zc,fadeInLeftBig:Qc,fadeInRight:Jc,fadeInRightBig:ed,fadeInTopLeft:td,fadeInTopRight:id,fadeInUp:od,fadeInUpBig:rd,fadeOut:ad,fadeOutBottomLeft:sd,fadeOutBottomRight:nd,fadeOutDown:ld,fadeOutDownBig:cd,fadeOutLeft:dd,fadeOutLeftBig:hd,fadeOutRight:ud,fadeOutRightBig:pd,fadeOutTopLeft:fd,fadeOutTopRight:md,fadeOutUp:gd,fadeOutUpBig:bd,flash:gc,flip:wd,flipInX:vd,flipInY:yd,flipOutX:xd,flipOutY:kd,headShake:bc,heartBeat:wc,hinge:Wd,jackInTheBox:jd,jello:vc,lightSpeedInLeft:Cd,lightSpeedInRight:Sd,lightSpeedOutLeft:$d,lightSpeedOutRight:Ed,pulse:yc,rollIn:Kd,rollOut:Gd,rotateIn:Ld,rotateInDownLeft:Ad,rotateInDownRight:zd,rotateInUpLeft:Td,rotateInUpRight:Rd,rotateOut:Dd,rotateOutDownLeft:Id,rotateOutDownRight:Od,rotateOutUpLeft:_d,rotateOutUpRight:Pd,rubberBand:xc,shake:kc,shakeX:Cc,shakeY:Sc,slideInDown:Fd,slideInLeft:Md,slideInRight:Nd,slideInUp:Bd,slideOutDown:Vd,slideOutLeft:Ud,slideOutRight:qd,slideOutUp:Hd,swing:$c,tada:Ec,wobble:Lc,zoomIn:Xd,zoomInDown:Yd,zoomInLeft:Zd,zoomInRight:Qd,zoomInUp:Jd,zoomOut:eh,zoomOutDown:th,zoomOutLeft:ih,zoomOutRight:oh,zoomOutUp:rh},Symbol.toStringTag,{value:"Module"}));var ce=class extends A{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new uc)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new pc)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const e=An[this.easing]??this.easing,t=this.keyframes??ah[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!t?!1:(this.destroyAnimation(),this.animation=o.animate(t,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new Ts)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new Ts)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};ce.css=fc;n([_l("slot")],ce.prototype,"defaultSlot",2);n([c()],ce.prototype,"name",2);n([c({type:Boolean,reflect:!0})],ce.prototype,"play",2);n([c({type:Number})],ce.prototype,"delay",2);n([c()],ce.prototype,"direction",2);n([c({type:Number})],ce.prototype,"duration",2);n([c()],ce.prototype,"easing",2);n([c({attribute:"end-delay",type:Number})],ce.prototype,"endDelay",2);n([c()],ce.prototype,"fill",2);n([c({type:Number})],ce.prototype,"iterations",2);n([c({attribute:"iteration-start",type:Number})],ce.prototype,"iterationStart",2);n([c({attribute:!1})],ce.prototype,"keyframes",2);n([c({attribute:"playback-rate",type:Number})],ce.prototype,"playbackRate",2);n([x(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ce.prototype,"handleAnimationChange",1);n([x("play")],ce.prototype,"handlePlayChange",1);n([x("playbackRate")],ce.prototype,"handlePlaybackRateChange",1);ce=n([v("wa-animation")],ce);var sh=k`
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
`;var Ot=class extends A{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new to)}render(){const e=p`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let t=p``;return this.initials?t=p`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:t=p`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,p` ${this.image&&!this.hasError?e:t} `}};Ot.css=sh;n([w()],Ot.prototype,"hasError",2);n([c()],Ot.prototype,"image",2);n([c()],Ot.prototype,"label",2);n([c()],Ot.prototype,"initials",2);n([c()],Ot.prototype,"loading",2);n([c({reflect:!0})],Ot.prototype,"shape",2);n([x("image")],Ot.prototype,"handleImageChange",1);Ot=n([v("wa-avatar")],Ot);var Mr=k`
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
`;var nh=k`
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
    `}};Ii.css=[Mr,nh];n([c({reflect:!0})],Ii.prototype,"variant",2);n([c({reflect:!0})],Ii.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],Ii.prototype,"pill",2);n([c({reflect:!0})],Ii.prototype,"attention",2);Ii=n([v("wa-badge")],Ii);var lh=k`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var oo=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="wa-breadcrumb-item");e.forEach((t,i)=>{const o=t.querySelector('[slot="separator"]');o===null?t.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),p`
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
    `}};oo.css=lh;n([y("slot")],oo.prototype,"defaultSlot",2);n([y('slot[name="separator"]')],oo.prototype,"separatorSlot",2);n([c()],oo.prototype,"label",2);oo=n([v("wa-breadcrumb")],oo);var ch=k`
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
`;var Xt=class extends A{constructor(){super(...arguments),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="wa-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return p`
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
    `}};Xt.css=ch;n([y("slot:not([name])")],Xt.prototype,"defaultSlot",2);n([w()],Xt.prototype,"renderType",2);n([c()],Xt.prototype,"href",2);n([c()],Xt.prototype,"target",2);n([c()],Xt.prototype,"rel",2);n([x("href",{waitUntilFirstUpdate:!0})],Xt.prototype,"hrefChanged",1);Xt=n([v("wa-breadcrumb-item")],Xt);var Wo=()=>({checkValidity(e){const t=e.input,i={message:"",isValid:!0,invalidKeys:[]};if(!t)return i;let o=!0;if("checkValidity"in t&&(o=t.checkValidity()),o)return i;if(i.isValid=!1,"validationMessage"in t&&(i.message=t.validationMessage),!("validity"in t))return i.invalidKeys.push("customError"),i;for(const r in t.validity){if(r==="valid")continue;const a=r;t.validity[a]&&i.invalidKeys.push(a)}return i}});var Ya=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var dh=()=>({observedAttributes:["custom-error"],checkValidity(e){const t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),Q=class extends A{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ya))},this.handleInteraction=e=>{const t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[dh()]}static get observedAttributes(){const e=new Set(super.observedAttributes||[]);for(const t of this.validators)if(t.observedAttributes)for(const i of t.observedAttributes)e.add(i);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")||e.has("defaultValue")){const t=this.value;if(Array.isArray(t)){if(this.name){const i=new FormData;for(const o of t)i.append(this.name,o);this.setValue(i,i)}}else this.setValue(t,t)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(e),this.updateValidity()}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute("form",e):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){const t=e[0],i=e[1];let o=e[2];o||(o=this.validationTarget),this.internals.setValidity(t,i,o||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const e=!!this.required,t=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&i),this.customStates.set("user-valid",t&&i)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){const[t,i]=e;this.internals.setFormValue(t,i)}get allValidators(){const e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const e=this.allValidators;if(!e?.length)return;const t={customError:!!this.customError},i=this.validationTarget||this.input||void 0;let o="";for(const r of e){const{isValid:a,message:s,invalidKeys:l}=r.checkValidity(this);a||(o||(o=s),l?.length>=0&&l.forEach(d=>t[d]=!0))}o||(o=this.validationMessage),this.setValidity(t,o,i)}};Q.formAssociated=!0;n([c({reflect:!0})],Q.prototype,"name",2);n([c({type:Boolean})],Q.prototype,"disabled",2);n([c({state:!0,attribute:!1})],Q.prototype,"valueHasChanged",2);n([c({state:!0,attribute:!1})],Q.prototype,"hasInteracted",2);n([c({attribute:"custom-error",reflect:!0})],Q.prototype,"customError",2);n([c({attribute:!1,state:!0,type:Object})],Q.prototype,"validity",1);var qe=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot?.addEventListener?.("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot?.removeEventListener?.("slotchange",this.handleSlotChange)}};var Ee=k`
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
`;var hh=k`
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
`;const zn=Symbol.for(""),uh=e=>{if(e?.r===zn)return e?._$litStatic$},Rs=(e,...t)=>({_$litStatic$:t.reduce((i,o,r)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[r+1],e[0]),r:zn}),Ds=new Map,ph=e=>(t,...i)=>{const o=i.length;let r,a;const s=[],l=[];let d,h=0,u=!1;for(;h<o;){for(d=t[h];h<o&&(a=i[h],(r=uh(a))!==void 0);)d+=r+t[++h],u=!0;h!==o&&l.push(a),s.push(d),h++}if(h===o&&s.push(t[o]),u){const f=s.join("$$lit$$");(t=Ds.get(f))===void 0&&(s.raw=s,Ds.set(f,t=s)),i=l}return e(t,...i)},ra=ph(p);var G=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new qe(this,"[default]","start","end"),this.localize=new U(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,Wo()]}constructLightDOMButton(){const e=document.createElement("button");for(const t of this.attributes)t.name!=="style"&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position="absolute !important",e.style.width="0 !important",e.style.height="0 !important",e.style.clipPath="inset(50%) !important",e.style.overflow="hidden !important",e.style.whiteSpace="nowrap !important",this.name&&(e.name=this.name),e.value=this.value||"",e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;const i=this.constructLightDOMButton();this.parentElement?.append(i),i.click(),i.remove()}handleInvalid(){this.dispatchEvent(new Ya)}handleLabelSlotChange(){const e=this.labelSlot.assignedNodes({flatten:!0});let t=!1,i=!1,o=!1,r=!1;[...e].forEach(a=>{if(a.nodeType===Node.ELEMENT_NODE){const s=a;s.localName==="wa-icon"?(i=!0,t||(t=s.label!==void 0)):r=!0}else a.nodeType===Node.TEXT_NODE&&(a.textContent?.trim()||"").length>0&&(o=!0)}),this.isIconButton=i&&!o&&!r,this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=this.isLink(),t=e?Rs`a`:Rs`button`;return ra`
      <${t}
        part="base"
        class=${z({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${$(e?void 0:this.disabled)}
        type=${$(e?void 0:this.type)}
        title=${this.title}
        name=${$(e?void 0:this.name)}
        value=${$(e?void 0:this.value)}
        href=${$(e?this.href:void 0)}
        target=${$(e?this.target:void 0)}
        download=${$(e?this.download:void 0)}
        rel=${$(e&&this.rel?this.rel:void 0)}
        role=${$(e?void 0:"button")}
        aria-disabled=${$(e&&this.disabled?"true":void 0)}
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
      </${t}>
    `}};G.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};G.css=[hh,Mr,Ee];n([y(".button")],G.prototype,"button",2);n([y("slot:not([name])")],G.prototype,"labelSlot",2);n([w()],G.prototype,"invalid",2);n([w()],G.prototype,"isIconButton",2);n([c()],G.prototype,"title",2);n([c({reflect:!0})],G.prototype,"variant",2);n([c({reflect:!0})],G.prototype,"appearance",2);n([c({reflect:!0})],G.prototype,"size",2);n([c({attribute:"with-caret",type:Boolean,reflect:!0})],G.prototype,"withCaret",2);n([c({type:Boolean})],G.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],G.prototype,"loading",2);n([c({type:Boolean,reflect:!0})],G.prototype,"pill",2);n([c()],G.prototype,"type",2);n([c({reflect:!0})],G.prototype,"name",2);n([c({reflect:!0})],G.prototype,"value",2);n([c({reflect:!0})],G.prototype,"href",2);n([c()],G.prototype,"target",2);n([c()],G.prototype,"rel",2);n([c()],G.prototype,"download",2);n([c({attribute:"formaction"})],G.prototype,"formAction",2);n([c({attribute:"formenctype"})],G.prototype,"formEnctype",2);n([c({attribute:"formmethod"})],G.prototype,"formMethod",2);n([c({attribute:"formnovalidate",type:Boolean})],G.prototype,"formNoValidate",2);n([c({attribute:"formtarget"})],G.prototype,"formTarget",2);n([x("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);G=n([v("wa-button")],G);var fh=k`
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
    `}};La.css=fh;La=n([v("wa-spinner")],La);var mh=k`
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
`;var ci=class extends A{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(e){super.updated(e),e.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(e){Eo(e.target)?.classList.add("button-focus")}handleBlur(e){Eo(e.target)?.classList.remove("button-focus")}handleMouseOver(e){Eo(e.target)?.classList.add("button-hover")}handleMouseOut(e){Eo(e.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,e.forEach(t=>{const i=e.indexOf(t),o=Eo(t);o&&(o.appearance==="outlined"&&(this.hasOutlined=!0),o.classList.add("wa-button-group__button"),o.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),o.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),o.classList.toggle("wa-button-group__button-first",i===0),o.classList.toggle("wa-button-group__button-inner",i>0&&i<e.length-1),o.classList.toggle("wa-button-group__button-last",i===e.length-1),o.classList.toggle("wa-button-group__button-radio",o.tagName.toLowerCase()==="wa-radio-button"))})}render(){return p`
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
    `}};ci.css=[mh];n([y("slot")],ci.prototype,"defaultSlot",2);n([w()],ci.prototype,"disableRole",2);n([w()],ci.prototype,"hasOutlined",2);n([c()],ci.prototype,"label",2);n([c({reflect:!0})],ci.prototype,"orientation",2);ci=n([v("wa-button-group")],ci);function Eo(e){const t="wa-button, wa-radio-button";return e.closest(t)??e.querySelector(t)}var gh=k`
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
    `}};ro.css=[gh,Mr,Ee];n([c({reflect:!0})],ro.prototype,"variant",2);n([c({reflect:!0})],ro.prototype,"appearance",2);n([c({reflect:!0})],ro.prototype,"size",2);ro=n([v("wa-callout")],ro);var bh=k`
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
`;var di=class extends A{constructor(){super(...arguments),this.hasSlotController=new qe(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?p`
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
    `}};di.css=[Ee,bh];n([c({reflect:!0})],di.prototype,"appearance",2);n([c({attribute:"with-header",type:Boolean,reflect:!0})],di.prototype,"withHeader",2);n([c({attribute:"with-media",type:Boolean,reflect:!0})],di.prototype,"withMedia",2);n([c({attribute:"with-footer",type:Boolean,reflect:!0})],di.prototype,"withFooter",2);n([c({reflect:!0})],di.prototype,"orientation",2);di=n([v("wa-card")],di);var wh=class extends Event{constructor(e){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var vh=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var yh=k`
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
`;let xh="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",kh=(e=21)=>{let t="",i=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=xh[i[e]&63];return t};function O(e,t,i){const o=r=>Object.is(r,-0)?0:r;return e<t?o(t):e>i?o(i):o(e)}function Nr(e=""){return`${e}${kh()}`}function wt(e,t){return new Promise(i=>{function o(r){r.target===e&&(e.removeEventListener(t,o),i())}e.addEventListener(t,o)})}async function wr(e,t,i){return e.animate(t,i).finished.catch(()=>{})}function J(e,t){return new Promise(i=>{const o=new AbortController,{signal:r}=o;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,s=()=>{a||(a=!0,e.classList.remove(t),i(),o.abort())};e.addEventListener("animationend",s,{once:!0,signal:r}),e.addEventListener("animationcancel",s,{once:!0,signal:r}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&s()})})}function vr(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e)||0:e.indexOf("s")>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}function Is(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function*Ch(e,t){if(e!==void 0){let i=0;for(const o of e)yield t(o,i++)}}function*Sh(e,t,i=1){const o=t===void 0?0:e;t??=e;for(let r=o;i>0?r<t:t<r;r+=i)yield r}(()=>{const e=(o,r)=>{let a=0;return function(...s){window.clearTimeout(a),a=window.setTimeout(()=>{o.call(this,...s)},r)}},t=(o,r,a)=>{const s=o[r];o[r]=function(...l){s.call(this,...l),a.call(this,s,...l)}};if(!("onscrollend"in window)){const o=new Set,r=new WeakMap,a=l=>{o.add(l.pointerId)},s=l=>{o.delete(l.pointerId)};document.addEventListener("pointerdown",a),document.addEventListener("pointerup",s),t(EventTarget.prototype,"addEventListener",function(l,d){if(d!=="scroll")return;const h=e(()=>{o.size?h():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",h,{passive:!0}),r.set(this,h)}),t(EventTarget.prototype,"removeEventListener",function(l,d){if(d!=="scroll")return;const h=r.get(this);h&&l.call(this,"scroll",h,{passive:!0})})}})();var ee=class extends A{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new vh(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new U(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const o=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==o||i!==r)&&(e.scrollTo({left:o,top:r,behavior:Is()?"auto":"smooth"}),await wt(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(i=>[...i.addedNodes,...i.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:i,loop:o}=this,r=o?e/i:(e-t)/i+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),i=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+i*i)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,i=this.localize.dir()==="rtl",o=t.closest('[part~="pagination-item"]')!==null,r=e.key==="ArrowDown"||!i&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft",a=e.key==="ArrowUp"||!i&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight";e.preventDefault(),a&&this.previous(),r&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{const s=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');s&&s.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const l of t){const d=l.target;d.toggleAttribute("inert",!l.isIntersecting),d.classList.toggle("--in-view",l.isIntersecting),d.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const i=t.find(l=>l.isIntersecting);if(!i)return;const o=this.getSlides({excludeClones:!1}),r=this.getSlides().length,a=o.indexOf(i.target),s=this.loop?a-this.slidesPerPage:a;if(i&&(this.activeSlide=(Math.ceil(s/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone"))){const l=Number(i.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,i=e.slice(-t),o=e.slice(0,t);i.reverse().forEach((r,a)=>{const s=r.cloneNode(!0);s.setAttribute("data-clone",String(e.length-a-1)),this.prepend(s)}),o.forEach((r,a)=>{const s=r.cloneNode(!0);s.setAttribute("data-clone",String(a)),this.append(s)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,i)=>{t.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new wh({index:this.activeSlide,slide:e[this.activeSlide]}))}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((i,o)=>{(o+t)%t===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:i,loop:o}=this,r=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!r.length)return;const s=o?(e+r.length)%r.length:O(e,0,r.length-i);this.activeSlide=s;const l=this.localize.dir()==="rtl",d=O(e+(o?i:0)+(l?i-1:0),0,a.length-1),h=a[d];this.scrollToSlide(h,Is()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,o=i.getBoundingClientRect(),r=e.getBoundingClientRect(),a=r.left-o.left,s=r.top-o.top;a||s?(this.pendingSlideChange=!0,i.scrollTo({left:a+i.scrollLeft,top:s+i.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this;let i=0,o=0,r=!1,a=!1;this.hasUpdated&&(i=this.getPageCount(),o=this.getCurrentPage(),r=this.canScrollPrev(),a=this.canScrollNext());const s=this.localize.dir()==="rtl";return p`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${z({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style=${te({"--slides-per-page":this.slidesPerPage})}
          aria-busy="${t?"true":"false"}"
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
                ${Ch(Sh(i),l=>{const d=l===o;return p`
                    <button
                      part="pagination-item ${d?"pagination-item-active":""}"
                      class="${z({"pagination-item":!0,"pagination-item-active":d})}"
                      role="tab"
                      aria-selected="${d?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,i)}"
                      tabindex=${d?"0":"-1"}
                      @click=${()=>this.goToSlide(l*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:p``}
      </div>
    `}};ee.css=yh;n([c({type:Boolean,reflect:!0})],ee.prototype,"loop",2);n([c({type:Number,reflect:!0})],ee.prototype,"slides",2);n([c({type:Number,reflect:!0})],ee.prototype,"currentSlide",2);n([c({type:Boolean,reflect:!0})],ee.prototype,"navigation",2);n([c({type:Boolean,reflect:!0})],ee.prototype,"pagination",2);n([c({type:Boolean,reflect:!0})],ee.prototype,"autoplay",2);n([c({type:Number,attribute:"autoplay-interval"})],ee.prototype,"autoplayInterval",2);n([c({type:Number,attribute:"slides-per-page"})],ee.prototype,"slidesPerPage",2);n([c({type:Number,attribute:"slides-per-move"})],ee.prototype,"slidesPerMove",2);n([c()],ee.prototype,"orientation",2);n([c({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ee.prototype,"mouseDragging",2);n([y(".slides")],ee.prototype,"scrollContainer",2);n([y(".pagination")],ee.prototype,"paginationContainer",2);n([w()],ee.prototype,"activeSlide",2);n([w()],ee.prototype,"scrolling",2);n([w()],ee.prototype,"dragging",2);n([Fr({passive:!0})],ee.prototype,"handleScroll",1);n([x("loop",{waitUntilFirstUpdate:!0}),x("slidesPerPage",{waitUntilFirstUpdate:!0})],ee.prototype,"initializeSlides",1);n([x("activeSlide")],ee.prototype,"handleSlideChange",1);n([x("slidesPerMove")],ee.prototype,"updateSlidesSnap",1);n([x("autoplay")],ee.prototype,"handleAutoplayChange",1);ee=n([v("wa-carousel")],ee);var $h=k`
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
`;var Aa=class extends A{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return p` <slot></slot> `}};Aa.css=$h;Aa=n([v("wa-carousel-item")],Aa);var Eh=k`
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
`;var Br=(e={})=>{let{validationElement:t,validationProperty:i}=e;t||(t=Object.assign(document.createElement("input"),{required:!0})),i||(i="value");const o={observedAttributes:["required"],message:t.validationMessage,checkValidity(r){const a={message:"",isValid:!0,invalidKeys:[]};return(r.required??r.hasAttribute("required"))&&!r[i]&&(a.message=typeof o.message=="function"?o.message(r):o.message||"",a.isValid=!1,a.invalidKeys.push("valueMissing")),a}};return o};var Nt=k`
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
`;var ue=class extends Q{constructor(){super(...arguments),this.hasSlotController=new qe(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){const e=[Br({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){const e=this._value||"on";return this.checked?e:null}set value(e){this._value=e}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),(e.has("value")||e.has("checked")||e.has("defaultChecked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),t=this.hint?!0:!!e,i=!this.checked&&this.indeterminate,o=i?"indeterminate":"check",r=i?"indeterminate":"check";return p`
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
        aria-hidden=${t?"false":"true"}
        class="${z({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};ue.css=[Nt,Ee,Eh];ue.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y('input[type="checkbox"]')],ue.prototype,"input",2);n([c()],ue.prototype,"title",2);n([c({reflect:!0})],ue.prototype,"name",2);n([c({reflect:!0})],ue.prototype,"value",1);n([c({reflect:!0})],ue.prototype,"size",2);n([c({type:Boolean})],ue.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],ue.prototype,"indeterminate",2);n([c({type:Boolean,attribute:!1})],ue.prototype,"checked",1);n([c({type:Boolean,reflect:!0,attribute:"checked"})],ue.prototype,"defaultChecked",2);n([c({type:Boolean,reflect:!0})],ue.prototype,"required",2);n([c()],ue.prototype,"hint",2);n([x(["checked","defaultChecked"])],ue.prototype,"handleDefaultCheckedChange",1);n([x(["checked","indeterminate"])],ue.prototype,"handleStateChange",1);n([x("disabled")],ue.prototype,"handleDisabledChange",1);ue=n([v("wa-checkbox")],ue);function Fo(e,t){function i(r){const a=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,l=a.left+s.pageXOffset,d=a.top+s.pageYOffset,h=r.pageX-l,u=r.pageY-d;t?.onMove&&t.onMove(h,u)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),t?.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),t?.initialEvent instanceof PointerEvent&&i(t.initialEvent)}var aa=typeof window<"u"&&"ontouchstart"in window,ir=class{constructor(e,t){this.isActive=!1,this.isDragging=!1,this.handleDragStart=i=>{const o="touches"in i?i.touches[0].clientX:i.clientX,r="touches"in i?i.touches[0].clientY:i.clientY;this.isDragging||!aa&&i.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(o,r))},this.handleDragStop=i=>{const o="changedTouches"in i?i.changedTouches[0].clientX:i.clientX,r="changedTouches"in i?i.changedTouches[0].clientY:i.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(o,r)},this.handleDragMove=i=>{const o="touches"in i?i.touches[0].clientX:i.clientX,r="touches"in i?i.touches[0].clientY:i.clientY;window.getSelection()?.removeAllRanges(),this.options.move(o,r)},this.element=e,this.options={start:()=>{},stop:()=>{},move:()=>{},...t},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),aa&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),aa&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(e){(e!==void 0?e:!this.isActive)?this.start():this.stop()}};var Lh=k`
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
`;var Tn=k`
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
`;var Ri=[];function Ui(e){Ri.push(e)}function _t(e){for(let t=Ri.length-1;t>=0;t--)if(Ri[t]===e){Ri.splice(t,1);break}}function Pt(e){return Ri.length>0&&Ri[Ri.length-1]===e}function ge(e,t){Ah(e)&&(e="100%");const i=zh(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function or(e){return Math.min(1,Math.max(0,e))}function Ah(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function zh(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Rn(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function rr(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Ti(e){return e.length===1?"0"+e:String(e)}function Th(e,t,i){return{r:ge(e,255)*255,g:ge(t,255)*255,b:ge(i,255)*255}}function Os(e,t,i){e=ge(e,255),t=ge(t,255),i=ge(i,255);const o=Math.max(e,t,i),r=Math.min(e,t,i);let a=0,s=0;const l=(o+r)/2;if(o===r)s=0,a=0;else{const d=o-r;switch(s=l>.5?d/(2-o-r):d/(o+r),o){case e:a=(t-i)/d+(t<i?6:0);break;case t:a=(i-e)/d+2;break;case i:a=(e-t)/d+4;break}a/=6}return{h:a,s,l}}function sa(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*(6*i):i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function Rh(e,t,i){let o,r,a;if(e=ge(e,360),t=ge(t,100),i=ge(i,100),t===0)r=i,a=i,o=i;else{const s=i<.5?i*(1+t):i+t-i*t,l=2*i-s;o=sa(l,s,e+1/3),r=sa(l,s,e),a=sa(l,s,e-1/3)}return{r:o*255,g:r*255,b:a*255}}function _s(e,t,i){e=ge(e,255),t=ge(t,255),i=ge(i,255);const o=Math.max(e,t,i),r=Math.min(e,t,i);let a=0;const s=o,l=o-r,d=o===0?0:l/o;if(o===r)a=0;else{switch(o){case e:a=(t-i)/l+(t<i?6:0);break;case t:a=(i-e)/l+2;break;case i:a=(e-t)/l+4;break}a/=6}return{h:a,s:d,v:s}}function Dh(e,t,i){e=ge(e,360)*6,t=ge(t,100),i=ge(i,100);const o=Math.floor(e),r=e-o,a=i*(1-t),s=i*(1-r*t),l=i*(1-(1-r)*t),d=o%6,h=[i,s,a,a,l,i][d],u=[l,i,i,s,a,a][d],f=[a,a,l,i,i,s][d];return{r:h*255,g:u*255,b:f*255}}function Ps(e,t,i,o){const r=[Ti(Math.round(e).toString(16)),Ti(Math.round(t).toString(16)),Ti(Math.round(i).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Ih(e,t,i,o,r){const a=[Ti(Math.round(e).toString(16)),Ti(Math.round(t).toString(16)),Ti(Math.round(i).toString(16)),Ti(_h(o))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function Oh(e,t,i,o){const r=e/100,a=t/100,s=i/100,l=o/100,d=255*(1-r)*(1-l),h=255*(1-a)*(1-l),u=255*(1-s)*(1-l);return{r:d,g:h,b:u}}function Fs(e,t,i){let o=1-e/255,r=1-t/255,a=1-i/255,s=Math.min(o,r,a);return s===1?(o=0,r=0,a=0):(o=(o-s)/(1-s)*100,r=(r-s)/(1-s)*100,a=(a-s)/(1-s)*100),s*=100,{c:Math.round(o),m:Math.round(r),y:Math.round(a),k:Math.round(s)}}function _h(e){return Math.round(parseFloat(e)*255).toString(16)}function Ms(e){return Ge(e)/255}function Ge(e){return parseInt(e,16)}function Ph(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const za={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Fh(e){let t={r:0,g:0,b:0},i=1,o=null,r=null,a=null,s=!1,l=!1;return typeof e=="string"&&(e=Bh(e)),typeof e=="object"&&(je(e.r)&&je(e.g)&&je(e.b)?(t=Th(e.r,e.g,e.b),s=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):je(e.h)&&je(e.s)&&je(e.v)?(o=rr(e.s),r=rr(e.v),t=Dh(e.h,o,r),s=!0,l="hsv"):je(e.h)&&je(e.s)&&je(e.l)?(o=rr(e.s),a=rr(e.l),t=Rh(e.h,o,a),s=!0,l="hsl"):je(e.c)&&je(e.m)&&je(e.y)&&je(e.k)&&(t=Oh(e.c,e.m,e.y,e.k),s=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(i=e.a)),i=Rn(i),{ok:s,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:i}}const Mh="[-\\+]?\\d+%?",Nh="[-\\+]?\\d*\\.\\d+%?",ri="(?:"+Nh+")|(?:"+Mh+")",na="[\\s|\\(]+("+ri+")[,|\\s]+("+ri+")[,|\\s]+("+ri+")\\s*\\)?",ar="[\\s|\\(]+("+ri+")[,|\\s]+("+ri+")[,|\\s]+("+ri+")[,|\\s]+("+ri+")\\s*\\)?",it={CSS_UNIT:new RegExp(ri),rgb:new RegExp("rgb"+na),rgba:new RegExp("rgba"+ar),hsl:new RegExp("hsl"+na),hsla:new RegExp("hsla"+ar),hsv:new RegExp("hsv"+na),hsva:new RegExp("hsva"+ar),cmyk:new RegExp("cmyk"+ar),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Bh(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(za[e])e=za[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=it.rgb.exec(e);return i?{r:i[1],g:i[2],b:i[3]}:(i=it.rgba.exec(e),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=it.hsl.exec(e),i?{h:i[1],s:i[2],l:i[3]}:(i=it.hsla.exec(e),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=it.hsv.exec(e),i?{h:i[1],s:i[2],v:i[3]}:(i=it.hsva.exec(e),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=it.cmyk.exec(e),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=it.hex8.exec(e),i?{r:Ge(i[1]),g:Ge(i[2]),b:Ge(i[3]),a:Ms(i[4]),format:t?"name":"hex8"}:(i=it.hex6.exec(e),i?{r:Ge(i[1]),g:Ge(i[2]),b:Ge(i[3]),format:t?"name":"hex"}:(i=it.hex4.exec(e),i?{r:Ge(i[1]+i[1]),g:Ge(i[2]+i[2]),b:Ge(i[3]+i[3]),a:Ms(i[4]+i[4]),format:t?"name":"hex8"}:(i=it.hex3.exec(e),i?{r:Ge(i[1]+i[1]),g:Ge(i[2]+i[2]),b:Ge(i[3]+i[3]),format:t?"name":"hex"}:!1))))))))))}function je(e){return typeof e=="number"?!Number.isNaN(e):it.CSS_UNIT.test(e)}class ie{constructor(t="",i={}){if(t instanceof ie)return t;typeof t=="number"&&(t=Ph(t)),this.originalInput=t;const o=Fh(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??o.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let i,o,r;const a=t.r/255,s=t.g/255,l=t.b/255;return a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*i+.7152*o+.0722*r}getAlpha(){return this.a}setAlpha(t){return this.a=Rn(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=_s(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=_s(this.r,this.g,this.b),i=Math.round(t.h*360),o=Math.round(t.s*100),r=Math.round(t.v*100);return this.a===1?`hsv(${i}, ${o}%, ${r}%)`:`hsva(${i}, ${o}%, ${r}%, ${this.roundA})`}toHsl(){const t=Os(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Os(this.r,this.g,this.b),i=Math.round(t.h*360),o=Math.round(t.s*100),r=Math.round(t.l*100);return this.a===1?`hsl(${i}, ${o}%, ${r}%)`:`hsla(${i}, ${o}%, ${r}%, ${this.roundA})`}toHex(t=!1){return Ps(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Ih(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),i=Math.round(this.g),o=Math.round(this.b);return this.a===1?`rgb(${t}, ${i}, ${o})`:`rgba(${t}, ${i}, ${o}, ${this.roundA})`}toPercentageRgb(){const t=i=>`${Math.round(ge(i,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=i=>Math.round(ge(i,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Fs(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:i,y:o,k:r}=Fs(this.r,this.g,this.b);return`cmyk(${t}, ${i}, ${o}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Ps(this.r,this.g,this.b,!1);for(const[i,o]of Object.entries(za))if(t===o)return i;return!1}toString(t){const i=!!t;t=t??this.format;let o=!1;const r=this.a<1&&this.a>=0;return!i&&r&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(o=this.toRgbString()),t==="prgb"&&(o=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(o=this.toHexString()),t==="hex3"&&(o=this.toHexString(!0)),t==="hex4"&&(o=this.toHex8String(!0)),t==="hex8"&&(o=this.toHex8String()),t==="name"&&(o=this.toName()),t==="hsl"&&(o=this.toHslString()),t==="hsv"&&(o=this.toHsvString()),t==="cmyk"&&(o=this.toCmykString()),o||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ie(this.toString())}lighten(t=10){const i=this.toHsl();return i.l+=t/100,i.l=or(i.l),new ie(i)}brighten(t=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(t/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(t/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(t/100)))),new ie(i)}darken(t=10){const i=this.toHsl();return i.l-=t/100,i.l=or(i.l),new ie(i)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const i=this.toHsl();return i.s-=t/100,i.s=or(i.s),new ie(i)}saturate(t=10){const i=this.toHsl();return i.s+=t/100,i.s=or(i.s),new ie(i)}greyscale(){return this.desaturate(100)}spin(t){const i=this.toHsl(),o=(i.h+t)%360;return i.h=o<0?360+o:o,new ie(i)}mix(t,i=50){const o=this.toRgb(),r=new ie(t).toRgb(),a=i/100,s={r:(r.r-o.r)*a+o.r,g:(r.g-o.g)*a+o.g,b:(r.b-o.b)*a+o.b,a:(r.a-o.a)*a+o.a};return new ie(s)}analogous(t=6,i=30){const o=this.toHsl(),r=360/i,a=[this];for(o.h=(o.h-(r*t>>1)+720)%360;--t;)o.h=(o.h+r)%360,a.push(new ie(o));return a}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ie(t)}monochromatic(t=6){const i=this.toHsv(),{h:o}=i,{s:r}=i;let{v:a}=i;const s=[],l=1/t;for(;t--;)s.push(new ie({h:o,s:r,v:a})),a=(a+l)%1;return s}splitcomplement(){const t=this.toHsl(),{h:i}=t;return[this,new ie({h:(i+72)%360,s:t.s,l:t.l}),new ie({h:(i+216)%360,s:t.s,l:t.l})]}onBackground(t){const i=this.toRgb(),o=new ie(t).toRgb(),r=i.a+o.a*(1-i.a);return new ie({r:(i.r*i.a+o.r*o.a*(1-i.a))/r,g:(i.g*i.a+o.g*o.a*(1-i.a))/r,b:(i.b*i.a+o.b*o.a*(1-i.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const i=this.toHsl(),{h:o}=i,r=[this],a=360/t;for(let s=1;s<t;s++)r.push(new ie({h:(o+s*a)%360,s:i.s,l:i.l}));return r}equals(t){const i=new ie(t);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var R=class extends Q{constructor(){super(),this.hasSlotController=new qe(this,"hint","label"),this.isSafeValue=!1,this.localize=new U(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&Pt(this)&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{if(e.key==="Escape"&&this.open&&Pt(this)){e.stopPropagation(),this.focus(),this.hide();return}e.key==="Tab"&&setTimeout(()=>{const t=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||t?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{const i=e.composedPath().some(o=>o instanceof Element&&(o.closest(".color-picker")||o===this.trigger));this&&!i&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const e=[Br()];return[...super.validators,...e]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".slider.alpha"),i=t.querySelector(".slider-handle"),{width:o}=t.getBoundingClientRect();let r=this.value,a=this.value;i.focus(),e.preventDefault(),Fo(t,{onMove:s=>{this.alpha=O(s/o*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".slider.hue"),i=t.querySelector(".slider-handle"),{width:o}=t.getBoundingClientRect();let r=this.value,a=this.value;i.focus(),e.preventDefault(),Fo(t,{onMove:s=>{this.hue=O(s/o*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".grid"),i=t.querySelector(".grid-handle"),{width:o,height:r}=t.getBoundingClientRect();let a=this.value,s=this.value;i.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Fo(t,{onMove:(l,d)=>{this.saturation=O(l/o*100,0,100),this.brightness=O(100-d/r*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=O(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=O(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=O(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=O(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=O(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=O(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=O(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=O(this.brightness-t,0,100),this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(e){const t=e.target,i=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||""):this.value="",this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()==="")return null;const t=new ie(e);if(!t.isValid)return null;const i=t.toHsl(),o=t.toRgb(),r=t.toHsv();if(!o||o.r==null||o.g==null||o.b==null)return null;const a={h:i.h||0,s:(i.s||0)*100,l:(i.l||0)*100,a:i.a||0},s=t.toHexString(),l=t.toHex8String(),d={h:r.h||0,s:(r.s||0)*100,v:(r.v||0)*100,a:r.a||0};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:d.h,s:d.s,v:d.v,string:this.setLetterCase(`hsv(${Math.round(d.h)}, ${Math.round(d.s)}%, ${Math.round(d.v)}%)`)},hsva:{h:d.h,s:d.s,v:d.v,a:d.a,string:this.setLetterCase(`hsva(${Math.round(d.h)}, ${Math.round(d.s)}%, ${Math.round(d.v)}%, ${d.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a||0,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${(o.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(t=>{const i=this.value;this.setColor(t.sRGBHex),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(e,t,i,o=100){const r=new ie(`hsva(${e}, ${t}%, ${i}%, ${o/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){super.willUpdate(e),e.has("value")&&this.handleValueChange(e.get("value")||"",this.value||"")}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(t);i!==null?(this.inputValue=this.value||"",this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=e??""}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){const e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.popup?.active&&this.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Ya),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}updateAccessibleTrigger(){const e=this.trigger;e&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,wt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,wt(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Ui(this)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),_t(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await J(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await J(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const e=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,o=this.hint?!0:!!t,r=this.saturation,a=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(d=>d.trim()!==""),l=p`
      <div
        part="base"
        class=${z({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${te({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${z({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${te({top:`${a}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${te({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
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
                      style=${te({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${te({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            style=${te({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                      <div class="swatch-color" style=${te({backgroundColor:h.hexa})}></div>
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
          style=${te({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
    `}};R.css=[Tn,Ee,Nt,Lh];R.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y('[part~="base"]')],R.prototype,"base",2);n([y('[part~="input"]')],R.prototype,"input",2);n([y('[part~="form-control-label"]')],R.prototype,"triggerLabel",2);n([y('[part~="form-control-input"]')],R.prototype,"triggerButton",2);n([y(".color-popup")],R.prototype,"popup",2);n([y('[part~="preview"]')],R.prototype,"previewButton",2);n([y('[part~="trigger"]')],R.prototype,"trigger",2);n([w()],R.prototype,"hasFocus",2);n([w()],R.prototype,"isDraggingGridHandle",2);n([w()],R.prototype,"isEmpty",2);n([w()],R.prototype,"inputValue",2);n([w()],R.prototype,"hue",2);n([w()],R.prototype,"saturation",2);n([w()],R.prototype,"brightness",2);n([w()],R.prototype,"alpha",2);n([w()],R.prototype,"value",1);n([c({attribute:"value",reflect:!0})],R.prototype,"defaultValue",2);n([c({attribute:"with-label",reflect:!0,type:Boolean})],R.prototype,"withLabel",2);n([c({attribute:"with-hint",reflect:!0,type:Boolean})],R.prototype,"withHint",2);n([w()],R.prototype,"hasEyeDropper",2);n([c()],R.prototype,"label",2);n([c({attribute:"hint"})],R.prototype,"hint",2);n([c()],R.prototype,"format",2);n([c({reflect:!0})],R.prototype,"size",2);n([c({attribute:"without-format-toggle",type:Boolean})],R.prototype,"withoutFormatToggle",2);n([c({reflect:!0})],R.prototype,"name",2);n([c({type:Boolean})],R.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],R.prototype,"open",2);n([c({type:Boolean})],R.prototype,"opacity",2);n([c({type:Boolean})],R.prototype,"uppercase",2);n([c()],R.prototype,"swatches",2);n([c({type:Boolean,reflect:!0})],R.prototype,"required",2);n([Fr({passive:!1})],R.prototype,"handleTouchMove",1);n([x("format",{waitUntilFirstUpdate:!0})],R.prototype,"handleFormatChange",1);n([x("opacity")],R.prototype,"handleOpacityChange",1);n([x("value")],R.prototype,"handleValueChange",1);n([x("open",{waitUntilFirstUpdate:!0})],R.prototype,"handleOpenChange",1);R=n([v("wa-color-picker")],R);var Dn=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function Za(e,t){const i=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!i&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&Vh(t)})}function Vh(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;const i=[...t.elements];if(i.length===1){t.requestSubmit(null);return}const o=i.find(r=>r.type==="submit"&&!r.matches(":disabled"));o&&(["input","button"].includes(o.localName)?t.requestSubmit(o):o.click())}var Uh=k`
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
`;var I=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new qe(this,"hint","label"),this.localize=new U(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Wo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new Dn),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Za(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has("value")||e.has("defaultValue"))&&(this.customStates.set("blank",!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const r=t??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(e,r,a,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,o=this.hint?!0:!!t,r=this.withClear&&!this.disabled&&!this.readonly,a=this.hasUpdated&&r&&(typeof this.value=="number"||this.value&&this.value.length>0);return p`
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
    `}};I.css=[Ee,Nt,Uh];I.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y("input")],I.prototype,"input",2);n([c()],I.prototype,"title",2);n([c({reflect:!0})],I.prototype,"type",2);n([w()],I.prototype,"value",1);n([c({attribute:"value",reflect:!0})],I.prototype,"defaultValue",2);n([c({reflect:!0})],I.prototype,"size",2);n([c({reflect:!0})],I.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],I.prototype,"pill",2);n([c()],I.prototype,"label",2);n([c({attribute:"hint"})],I.prototype,"hint",2);n([c({attribute:"with-clear",type:Boolean})],I.prototype,"withClear",2);n([c()],I.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],I.prototype,"readonly",2);n([c({attribute:"password-toggle",type:Boolean})],I.prototype,"passwordToggle",2);n([c({attribute:"password-visible",type:Boolean})],I.prototype,"passwordVisible",2);n([c({attribute:"without-spin-buttons",type:Boolean})],I.prototype,"withoutSpinButtons",2);n([c({type:Boolean,reflect:!0})],I.prototype,"required",2);n([c()],I.prototype,"pattern",2);n([c({type:Number})],I.prototype,"minlength",2);n([c({type:Number})],I.prototype,"maxlength",2);n([c()],I.prototype,"min",2);n([c()],I.prototype,"max",2);n([c()],I.prototype,"step",2);n([c()],I.prototype,"autocapitalize",2);n([c()],I.prototype,"autocorrect",2);n([c()],I.prototype,"autocomplete",2);n([c({type:Boolean})],I.prototype,"autofocus",2);n([c()],I.prototype,"enterkeyhint",2);n([c({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],I.prototype,"spellcheck",2);n([c()],I.prototype,"inputmode",2);n([c({attribute:"with-label",type:Boolean})],I.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],I.prototype,"withHint",2);n([x("step",{waitUntilFirstUpdate:!0})],I.prototype,"handleStepChange",1);I=n([v("wa-input")],I);var In=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var qh=k`
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
`;const hi=Math.min,Ye=Math.max,yr=Math.round,sr=Math.floor,It=e=>({x:e,y:e}),Hh={left:"right",right:"left",bottom:"top",top:"bottom"};function Ta(e,t,i){return Ye(e,hi(t,i))}function wo(e,t){return typeof e=="function"?e(t):e}function ui(e){return e.split("-")[0]}function vo(e){return e.split("-")[1]}function On(e){return e==="x"?"y":"x"}function Qa(e){return e==="y"?"height":"width"}function Wt(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function Ja(e){return On(Wt(e))}function Wh(e,t,i){i===void 0&&(i=!1);const o=vo(e),r=Ja(e),a=Qa(r);let s=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(s=xr(s)),[s,xr(s)]}function jh(e){const t=xr(e);return[Ra(e),t,Ra(t)]}function Ra(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const Ns=["left","right"],Bs=["right","left"],Kh=["top","bottom"],Gh=["bottom","top"];function Xh(e,t,i){switch(e){case"top":case"bottom":return i?t?Bs:Ns:t?Ns:Bs;case"left":case"right":return t?Kh:Gh;default:return[]}}function Yh(e,t,i,o){const r=vo(e);let a=Xh(ui(e),i==="start",o);return r&&(a=a.map(s=>s+"-"+r),t&&(a=a.concat(a.map(Ra)))),a}function xr(e){const t=ui(e);return Hh[t]+e.slice(t.length)}function Zh(e){return{top:0,right:0,bottom:0,left:0,...e}}function _n(e){return typeof e!="number"?Zh(e):{top:e,right:e,bottom:e,left:e}}function kr(e){const{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function Vs(e,t,i){let{reference:o,floating:r}=e;const a=Wt(t),s=Ja(t),l=Qa(s),d=ui(t),h=a==="y",u=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,m=o[l]/2-r[l]/2;let g;switch(d){case"top":g={x:u,y:o.y-r.height};break;case"bottom":g={x:u,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:f};break;case"left":g={x:o.x-r.width,y:f};break;default:g={x:o.x,y:o.y}}switch(vo(t)){case"start":g[s]-=m*(i&&h?-1:1);break;case"end":g[s]+=m*(i&&h?-1:1);break}return g}async function Qh(e,t){var i;t===void 0&&(t={});const{x:o,y:r,platform:a,rects:s,elements:l,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:m=!1,padding:g=0}=wo(t,e),b=_n(g),E=l[m?f==="floating"?"reference":"floating":f],L=kr(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement(E)))==null||i?E:E.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:h,rootBoundary:u,strategy:d})),S=f==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,T=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating)),q=await(a.isElement==null?void 0:a.isElement(T))?await(a.getScale==null?void 0:a.getScale(T))||{x:1,y:1}:{x:1,y:1},j=kr(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:S,offsetParent:T,strategy:d}):S);return{top:(L.top-j.top+b.top)/q.y,bottom:(j.bottom-L.bottom+b.bottom)/q.y,left:(L.left-j.left+b.left)/q.x,right:(j.right-L.right+b.right)/q.x}}const Jh=50,eu=async(e,t,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:s}=i,l=s.detectOverflow?s:{...s,detectOverflow:Qh},d=await(s.isRTL==null?void 0:s.isRTL(t));let h=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:f}=Vs(h,o,d),m=o,g=0;const b={};for(let C=0;C<a.length;C++){const E=a[C];if(!E)continue;const{name:L,fn:S}=E,{x:T,y:q,data:j,reset:Y}=await S({x:u,y:f,initialPlacement:o,placement:m,strategy:r,middlewareData:b,rects:h,platform:l,elements:{reference:e,floating:t}});u=T??u,f=q??f,b[L]={...b[L],...j},Y&&g<Jh&&(g++,typeof Y=="object"&&(Y.placement&&(m=Y.placement),Y.rects&&(h=Y.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):Y.rects),{x:u,y:f}=Vs(h,m,d)),C=-1)}return{x:u,y:f,placement:m,strategy:r,middlewareData:b}},tu=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:r,rects:a,platform:s,elements:l,middlewareData:d}=t,{element:h,padding:u=0}=wo(e,t)||{};if(h==null)return{};const f=_n(u),m={x:i,y:o},g=Ja(r),b=Qa(g),C=await s.getDimensions(h),E=g==="y",L=E?"top":"left",S=E?"bottom":"right",T=E?"clientHeight":"clientWidth",q=a.reference[b]+a.reference[g]-m[g]-a.floating[b],j=m[g]-a.reference[g],Y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(h));let de=Y?Y[T]:0;(!de||!await(s.isElement==null?void 0:s.isElement(Y)))&&(de=l.floating[T]||a.floating[b]);const st=q/2-j/2,We=de/2-C[b]/2-1,Le=hi(f[L],We),nt=hi(f[S],We),Ae=Le,lt=de-C[b]-nt,he=de/2-C[b]/2+st,Si=Ta(Ae,he,lt),Ut=!d.arrow&&vo(r)!=null&&he!==Si&&a.reference[b]/2-(he<Ae?Le:nt)-C[b]/2<0,ct=Ut?he<Ae?he-Ae:he-lt:0;return{[g]:m[g]+ct,data:{[g]:Si,centerOffset:he-Si-ct,...Ut&&{alignmentOffset:ct}},reset:Ut}}}),iu=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:r,middlewareData:a,rects:s,initialPlacement:l,platform:d,elements:h}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:C=!0,...E}=wo(e,t);if((i=a.arrow)!=null&&i.alignmentOffset)return{};const L=ui(r),S=Wt(l),T=ui(l)===l,q=await(d.isRTL==null?void 0:d.isRTL(h.floating)),j=m||(T||!C?[xr(l)]:jh(l)),Y=b!=="none";!m&&Y&&j.push(...Yh(l,C,b,q));const de=[l,...j],st=await d.detectOverflow(t,E),We=[];let Le=((o=a.flip)==null?void 0:o.overflows)||[];if(u&&We.push(st[L]),f){const he=Wh(r,s,q);We.push(st[he[0]],st[he[1]])}if(Le=[...Le,{placement:r,overflows:We}],!We.every(he=>he<=0)){var nt,Ae;const he=(((nt=a.flip)==null?void 0:nt.index)||0)+1,Si=de[he];if(Si&&(!(f==="alignment"?S!==Wt(Si):!1)||Le.every(dt=>Wt(dt.placement)===S?dt.overflows[0]>0:!0)))return{data:{index:he,overflows:Le},reset:{placement:Si}};let Ut=(Ae=Le.filter(ct=>ct.overflows[0]<=0).sort((ct,dt)=>ct.overflows[1]-dt.overflows[1])[0])==null?void 0:Ae.placement;if(!Ut)switch(g){case"bestFit":{var lt;const ct=(lt=Le.filter(dt=>{if(Y){const oi=Wt(dt.placement);return oi===S||oi==="y"}return!0}).map(dt=>[dt.placement,dt.overflows.filter(oi=>oi>0).reduce((oi,Il)=>oi+Il,0)]).sort((dt,oi)=>dt[1]-oi[1])[0])==null?void 0:lt[0];ct&&(Ut=ct);break}case"initialPlacement":Ut=l;break}if(r!==Ut)return{reset:{placement:Ut}}}return{}}}},ou=new Set(["left","top"]);async function ru(e,t){const{placement:i,platform:o,elements:r}=e,a=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=ui(i),l=vo(i),d=Wt(i)==="y",h=ou.has(s)?-1:1,u=a&&d?-1:1,f=wo(t,e);let{mainAxis:m,crossAxis:g,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return l&&typeof b=="number"&&(g=l==="end"?b*-1:b),d?{x:g*u,y:m*h}:{x:m*h,y:g*u}}const au=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:r,y:a,placement:s,middlewareData:l}=t,d=await ru(t,e);return s===((i=l.offset)==null?void 0:i.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+d.x,y:a+d.y,data:{...d,placement:s}}}}},su=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:r,platform:a}=t,{mainAxis:s=!0,crossAxis:l=!1,limiter:d={fn:L=>{let{x:S,y:T}=L;return{x:S,y:T}}},...h}=wo(e,t),u={x:i,y:o},f=await a.detectOverflow(t,h),m=Wt(ui(r)),g=On(m);let b=u[g],C=u[m];if(s){const L=g==="y"?"top":"left",S=g==="y"?"bottom":"right",T=b+f[L],q=b-f[S];b=Ta(T,b,q)}if(l){const L=m==="y"?"top":"left",S=m==="y"?"bottom":"right",T=C+f[L],q=C-f[S];C=Ta(T,C,q)}const E=d.fn({...t,[g]:b,[m]:C});return{...E,data:{x:E.x-i,y:E.y-o,enabled:{[g]:s,[m]:l}}}}}},nu=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,o;const{placement:r,rects:a,platform:s,elements:l}=t,{apply:d=()=>{},...h}=wo(e,t),u=await s.detectOverflow(t,h),f=ui(r),m=vo(r),g=Wt(r)==="y",{width:b,height:C}=a.floating;let E,L;f==="top"||f==="bottom"?(E=f,L=m===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(L=f,E=m==="end"?"top":"bottom");const S=C-u.top-u.bottom,T=b-u.left-u.right,q=hi(C-u[E],S),j=hi(b-u[L],T),Y=!t.middlewareData.shift;let de=q,st=j;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(st=T),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(de=S),Y&&!m){const Le=Ye(u.left,0),nt=Ye(u.right,0),Ae=Ye(u.top,0),lt=Ye(u.bottom,0);g?st=b-2*(Le!==0||nt!==0?Le+nt:Ye(u.left,u.right)):de=C-2*(Ae!==0||lt!==0?Ae+lt:Ye(u.top,u.bottom))}await d({...t,availableWidth:st,availableHeight:de});const We=await s.getDimensions(l.floating);return b!==We.width||C!==We.height?{reset:{rects:!0}}:{}}}};function Vr(){return typeof window<"u"}function yo(e){return Pn(e)?(e.nodeName||"").toLowerCase():"#document"}function Qe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Bt(e){var t;return(t=(Pn(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Pn(e){return Vr()?e instanceof Node||e instanceof Qe(e).Node:!1}function vt(e){return Vr()?e instanceof Element||e instanceof Qe(e).Element:!1}function ei(e){return Vr()?e instanceof HTMLElement||e instanceof Qe(e).HTMLElement:!1}function Us(e){return!Vr()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Qe(e).ShadowRoot}function jo(e){const{overflow:t,overflowX:i,overflowY:o,display:r}=yt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&r!=="inline"&&r!=="contents"}function lu(e){return/^(table|td|th)$/.test(yo(e))}function Ur(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const cu=/transform|translate|scale|rotate|perspective|filter/,du=/paint|layout|strict|content/,$i=e=>!!e&&e!=="none";let la;function qr(e){const t=vt(e)?yt(e):e;return $i(t.transform)||$i(t.translate)||$i(t.scale)||$i(t.rotate)||$i(t.perspective)||!es()&&($i(t.backdropFilter)||$i(t.filter))||cu.test(t.willChange||"")||du.test(t.contain||"")}function hu(e){let t=pi(e);for(;ei(t)&&!ao(t);){if(qr(t))return t;if(Ur(t))return null;t=pi(t)}return null}function es(){return la==null&&(la=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),la}function ao(e){return/^(html|body|#document)$/.test(yo(e))}function yt(e){return Qe(e).getComputedStyle(e)}function Hr(e){return vt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function pi(e){if(yo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Us(e)&&e.host||Bt(e);return Us(t)?t.host:t}function Fn(e){const t=pi(e);return ao(t)?e.ownerDocument?e.ownerDocument.body:e.body:ei(t)&&jo(t)?t:Fn(t)}function so(e,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const r=Fn(e),a=r===((o=e.ownerDocument)==null?void 0:o.body),s=Qe(r);if(a){const l=Da(s);return t.concat(s,s.visualViewport||[],jo(r)?r:[],l&&i?so(l):[])}else return t.concat(r,so(r,[],i))}function Da(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Mn(e){const t=yt(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=ei(e),a=r?e.offsetWidth:i,s=r?e.offsetHeight:o,l=yr(i)!==a||yr(o)!==s;return l&&(i=a,o=s),{width:i,height:o,$:l}}function ts(e){return vt(e)?e:e.contextElement}function io(e){const t=ts(e);if(!ei(t))return It(1);const i=t.getBoundingClientRect(),{width:o,height:r,$:a}=Mn(t);let s=(a?yr(i.width):i.width)/o,l=(a?yr(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const uu=It(0);function Nn(e){const t=Qe(e);return!es()||!t.visualViewport?uu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function pu(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==Qe(e)?!1:t}function Oi(e,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const r=e.getBoundingClientRect(),a=ts(e);let s=It(1);t&&(o?vt(o)&&(s=io(o)):s=io(e));const l=pu(a,i,o)?Nn(a):It(0);let d=(r.left+l.x)/s.x,h=(r.top+l.y)/s.y,u=r.width/s.x,f=r.height/s.y;if(a){const m=Qe(a),g=o&&vt(o)?Qe(o):o;let b=m,C=Da(b);for(;C&&o&&g!==b;){const E=io(C),L=C.getBoundingClientRect(),S=yt(C),T=L.left+(C.clientLeft+parseFloat(S.paddingLeft))*E.x,q=L.top+(C.clientTop+parseFloat(S.paddingTop))*E.y;d*=E.x,h*=E.y,u*=E.x,f*=E.y,d+=T,h+=q,b=Qe(C),C=Da(b)}}return kr({width:u,height:f,x:d,y:h})}function Wr(e,t){const i=Hr(e).scrollLeft;return t?t.left+i:Oi(Bt(e)).left+i}function Bn(e,t){const i=e.getBoundingClientRect(),o=i.left+t.scrollLeft-Wr(e,i),r=i.top+t.scrollTop;return{x:o,y:r}}function fu(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e;const a=r==="fixed",s=Bt(o),l=t?Ur(t.floating):!1;if(o===s||l&&a)return i;let d={scrollLeft:0,scrollTop:0},h=It(1);const u=It(0),f=ei(o);if((f||!f&&!a)&&((yo(o)!=="body"||jo(s))&&(d=Hr(o)),f)){const g=Oi(o);h=io(o),u.x=g.x+o.clientLeft,u.y=g.y+o.clientTop}const m=s&&!f&&!a?Bn(s,d):It(0);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-d.scrollLeft*h.x+u.x+m.x,y:i.y*h.y-d.scrollTop*h.y+u.y+m.y}}function mu(e){return Array.from(e.getClientRects())}function gu(e){const t=Bt(e),i=Hr(e),o=e.ownerDocument.body,r=Ye(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=Ye(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+Wr(e);const l=-i.scrollTop;return yt(o).direction==="rtl"&&(s+=Ye(t.clientWidth,o.clientWidth)-r),{width:r,height:a,x:s,y:l}}const qs=25;function bu(e,t){const i=Qe(e),o=Bt(e),r=i.visualViewport;let a=o.clientWidth,s=o.clientHeight,l=0,d=0;if(r){a=r.width,s=r.height;const u=es();(!u||u&&t==="fixed")&&(l=r.offsetLeft,d=r.offsetTop)}const h=Wr(o);if(h<=0){const u=o.ownerDocument,f=u.body,m=getComputedStyle(f),g=u.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,b=Math.abs(o.clientWidth-f.clientWidth-g);b<=qs&&(a-=b)}else h<=qs&&(a+=h);return{width:a,height:s,x:l,y:d}}function wu(e,t){const i=Oi(e,!0,t==="fixed"),o=i.top+e.clientTop,r=i.left+e.clientLeft,a=ei(e)?io(e):It(1),s=e.clientWidth*a.x,l=e.clientHeight*a.y,d=r*a.x,h=o*a.y;return{width:s,height:l,x:d,y:h}}function Hs(e,t,i){let o;if(t==="viewport")o=bu(e,i);else if(t==="document")o=gu(Bt(e));else if(vt(t))o=wu(t,i);else{const r=Nn(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return kr(o)}function Vn(e,t){const i=pi(e);return i===t||!vt(i)||ao(i)?!1:yt(i).position==="fixed"||Vn(i,t)}function vu(e,t){const i=t.get(e);if(i)return i;let o=so(e,[],!1).filter(l=>vt(l)&&yo(l)!=="body"),r=null;const a=yt(e).position==="fixed";let s=a?pi(e):e;for(;vt(s)&&!ao(s);){const l=yt(s),d=qr(s);!d&&l.position==="fixed"&&(r=null),(a?!d&&!r:!d&&l.position==="static"&&!!r&&(r.position==="absolute"||r.position==="fixed")||jo(s)&&!d&&Vn(e,s))?o=o.filter(u=>u!==s):r=l,s=pi(s)}return t.set(e,o),o}function yu(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e;const s=[...i==="clippingAncestors"?Ur(t)?[]:vu(t,this._c):[].concat(i),o],l=Hs(t,s[0],r);let d=l.top,h=l.right,u=l.bottom,f=l.left;for(let m=1;m<s.length;m++){const g=Hs(t,s[m],r);d=Ye(g.top,d),h=hi(g.right,h),u=hi(g.bottom,u),f=Ye(g.left,f)}return{width:h-f,height:u-d,x:f,y:d}}function xu(e){const{width:t,height:i}=Mn(e);return{width:t,height:i}}function ku(e,t,i){const o=ei(t),r=Bt(t),a=i==="fixed",s=Oi(e,!0,a,t);let l={scrollLeft:0,scrollTop:0};const d=It(0);function h(){d.x=Wr(r)}if(o||!o&&!a)if((yo(t)!=="body"||jo(r))&&(l=Hr(t)),o){const g=Oi(t,!0,a,t);d.x=g.x+t.clientLeft,d.y=g.y+t.clientTop}else r&&h();a&&!o&&r&&h();const u=r&&!o&&!a?Bn(r,l):It(0),f=s.left+l.scrollLeft-d.x-u.x,m=s.top+l.scrollTop-d.y-u.y;return{x:f,y:m,width:s.width,height:s.height}}function ca(e){return yt(e).position==="static"}function Ws(e,t){if(!ei(e)||yt(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return Bt(e)===i&&(i=i.ownerDocument.body),i}function Un(e,t){const i=Qe(e);if(Ur(e))return i;if(!ei(e)){let r=pi(e);for(;r&&!ao(r);){if(vt(r)&&!ca(r))return r;r=pi(r)}return i}let o=Ws(e,t);for(;o&&lu(o)&&ca(o);)o=Ws(o,t);return o&&ao(o)&&ca(o)&&!qr(o)?i:o||hu(e)||i}const Cu=async function(e){const t=this.getOffsetParent||Un,i=this.getDimensions,o=await i(e.floating);return{reference:ku(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Su(e){return yt(e).direction==="rtl"}const hr={convertOffsetParentRelativeRectToViewportRelativeRect:fu,getDocumentElement:Bt,getClippingRect:yu,getOffsetParent:Un,getElementRects:Cu,getClientRects:mu,getDimensions:xu,getScale:io,isElement:vt,isRTL:Su};function qn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function $u(e,t){let i=null,o;const r=Bt(e);function a(){var l;clearTimeout(o),(l=i)==null||l.disconnect(),i=null}function s(l,d){l===void 0&&(l=!1),d===void 0&&(d=1),a();const h=e.getBoundingClientRect(),{left:u,top:f,width:m,height:g}=h;if(l||t(),!m||!g)return;const b=sr(f),C=sr(r.clientWidth-(u+m)),E=sr(r.clientHeight-(f+g)),L=sr(u),T={rootMargin:-b+"px "+-C+"px "+-E+"px "+-L+"px",threshold:Ye(0,hi(1,d))||1};let q=!0;function j(Y){const de=Y[0].intersectionRatio;if(de!==d){if(!q)return s();de?s(!1,de):o=setTimeout(()=>{s(!1,1e-7)},1e3)}de===1&&!qn(h,e.getBoundingClientRect())&&s(),q=!1}try{i=new IntersectionObserver(j,{...T,root:r.ownerDocument})}catch{i=new IntersectionObserver(j,T)}i.observe(e)}return s(!0),a}function Hn(e,t,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,h=ts(e),u=r||a?[...h?so(h):[],...t?so(t):[]]:[];u.forEach(L=>{r&&L.addEventListener("scroll",i,{passive:!0}),a&&L.addEventListener("resize",i)});const f=h&&l?$u(h,i):null;let m=-1,g=null;s&&(g=new ResizeObserver(L=>{let[S]=L;S&&S.target===h&&g&&t&&(g.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var T;(T=g)==null||T.observe(t)})),i()}),h&&!d&&g.observe(h),t&&g.observe(t));let b,C=d?Oi(e):null;d&&E();function E(){const L=Oi(e);C&&!qn(C,L)&&i(),C=L,b=requestAnimationFrame(E)}return i(),()=>{var L;u.forEach(S=>{r&&S.removeEventListener("scroll",i),a&&S.removeEventListener("resize",i)}),f?.(),(L=g)==null||L.disconnect(),g=null,d&&cancelAnimationFrame(b)}}const Wn=au,jn=su,Kn=iu,js=nu,Eu=tu,Gn=(e,t,i)=>{const o=new Map,r={platform:hr,...i},a={...r.platform,_c:o};return eu(e,t,{...r,platform:a})};function Lu(e){return Au(e)}function da(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Au(e){for(let t=e;t;t=da(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=da(e);t;t=da(t)){if(!(t instanceof Element))continue;const i=getComputedStyle(t);if(i.display!=="contents"&&(i.position!=="static"||qr(i)||t.tagName==="BODY"))return t}return null}function Ks(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var nr=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),X=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,a=0,s=0,l=0,d=0,h=0,u=0;i?e.top<t.top?(o=e.left,r=e.bottom,a=e.right,s=e.bottom,l=t.left,d=t.top,h=t.right,u=t.top):(o=t.left,r=t.bottom,a=t.right,s=t.bottom,l=e.left,d=e.top,h=e.right,u=e.top):e.left<t.left?(o=e.right,r=e.top,a=t.left,s=t.top,l=e.right,d=e.bottom,h=t.left,u=t.bottom):(o=t.right,r=t.top,a=e.left,s=e.top,l=t.right,d=t.bottom,h=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Ks(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Hn(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;const e=[Wn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(js({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",a=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=a?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let t;nr&&!Ks(this.anchor)&&this.boundary==="scroll"&&(t=so(this.anchorEl).filter(o=>o instanceof Element)),this.flip&&e.push(Kn({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(jn({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(js({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Eu({element:this.arrowEl,padding:this.arrowPadding}));const i=nr?o=>hr.getOffsetParent(o,Lu):hr.getOffsetParent;Gn(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:nr?"absolute":"fixed",platform:{...hr,getOffsetParent:i}}).then(({x:o,y:r,middlewareData:a,placement:s})=>{const l=this.localize.dir()==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const h=a.arrow.x,u=a.arrow.y;let f="",m="",g="",b="";if(this.arrowPlacement==="start"){const C=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=l?C:"",b=l?"":C}else if(this.arrowPlacement==="end"){const C=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=l?"":C,b=l?C:"",g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(b=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(b=typeof h=="number"?`${h}px`:"",f=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:f,right:m,bottom:g,left:b,[d]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new In)}render(){return p`
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
    `}};X.css=qh;n([y(".popup")],X.prototype,"popup",2);n([y(".arrow")],X.prototype,"arrowEl",2);n([c()],X.prototype,"anchor",2);n([c({type:Boolean,reflect:!0})],X.prototype,"active",2);n([c({reflect:!0})],X.prototype,"placement",2);n([c()],X.prototype,"boundary",2);n([c({type:Number})],X.prototype,"distance",2);n([c({type:Number})],X.prototype,"skidding",2);n([c({type:Boolean})],X.prototype,"arrow",2);n([c({attribute:"arrow-placement"})],X.prototype,"arrowPlacement",2);n([c({attribute:"arrow-padding",type:Number})],X.prototype,"arrowPadding",2);n([c({type:Boolean})],X.prototype,"flip",2);n([c({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],X.prototype,"flipFallbackPlacements",2);n([c({attribute:"flip-fallback-strategy"})],X.prototype,"flipFallbackStrategy",2);n([c({type:Object})],X.prototype,"flipBoundary",2);n([c({attribute:"flip-padding",type:Number})],X.prototype,"flipPadding",2);n([c({type:Boolean})],X.prototype,"shift",2);n([c({type:Object})],X.prototype,"shiftBoundary",2);n([c({attribute:"shift-padding",type:Number})],X.prototype,"shiftPadding",2);n([c({attribute:"auto-size"})],X.prototype,"autoSize",2);n([c()],X.prototype,"sync",2);n([c({type:Object})],X.prototype,"autoSizeBoundary",2);n([c({attribute:"auto-size-padding",type:Number})],X.prototype,"autoSizePadding",2);n([c({attribute:"hover-bridge",type:Boolean})],X.prototype,"hoverBridge",2);X=n([v("wa-popup")],X);var zu=k`
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
`;var no=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.position=50}handleDrag(e){const{width:t}=this.getBoundingClientRect(),i=this.localize.dir()==="rtl";e.preventDefault(),Fo(this,{onMove:o=>{this.customStates.set("dragging",!0),this.position=parseFloat(O(o/t*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:e})}handleKeyDown(e){const t=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const o=e.shiftKey?10:1;let r=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight")&&(r-=o),(t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft")&&(r+=o),e.key==="Home"&&(r=0),e.key==="End"&&(r=100),r=O(r,0,100),this.position=r}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${te({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${te({left:e?`${100-this.position}%`:`${this.position}%`})}
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
    `}};no.css=zu;n([y(".handle")],no.prototype,"handle",2);n([c({type:Number,reflect:!0})],no.prototype,"position",2);n([x("position",{waitUntilFirstUpdate:!0})],no.prototype,"handlePositionChange",1);no=n([v("wa-comparison")],no);var Tu=class extends Event{constructor(e){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var Ru=k`
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
`;var we=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let r=this.from,a="";i?[r,a]=this.from.trim().split("."):o&&([r,a]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in t?t.getElementById(r):null;s?o?e=s.getAttribute(a)||"":i?e=s[a]||"":e=s.textContent||"":(this.showStatus("error"),this.dispatchEvent(new to))}if(!e)this.showStatus("error"),this.dispatchEvent(new to);else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.dispatchEvent(new Tu({value:e}))}catch{this.showStatus("error"),this.dispatchEvent(new to)}}async showStatus(e){const t=e==="success"?this.successIcon:this.errorIcon;await J(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=e,t.hidden=!1,await J(t,"show"),setTimeout(async()=>{await J(t,"hide"),t.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await J(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return p`
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
    `}};we.css=[Tn,Ru];n([y('slot[name="copy-icon"]')],we.prototype,"copyIcon",2);n([y('slot[name="success-icon"]')],we.prototype,"successIcon",2);n([y('slot[name="error-icon"]')],we.prototype,"errorIcon",2);n([y("wa-tooltip")],we.prototype,"tooltip",2);n([w()],we.prototype,"isCopying",2);n([w()],we.prototype,"status",2);n([c()],we.prototype,"value",2);n([c()],we.prototype,"from",2);n([c({type:Boolean,reflect:!0})],we.prototype,"disabled",2);n([c({attribute:"copy-label"})],we.prototype,"copyLabel",2);n([c({attribute:"success-label"})],we.prototype,"successLabel",2);n([c({attribute:"error-label"})],we.prototype,"errorLabel",2);n([c({attribute:"feedback-duration",type:Number})],we.prototype,"feedbackDuration",2);n([c({attribute:"tooltip-placement"})],we.prototype,"tooltipPlacement",2);we=n([v("wa-copy-button")],we);var Du=k`
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
`;var qi=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Hi=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};var Wi=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var ji=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var se=class extends A{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&Pt(this)&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=!!this.anchor?.matches(":hover"),t=this.matches(":hover");if(e||t)return;clearTimeout(this.hoverTimeout),e||t||(this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay))}}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Nr("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),_t(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}addToAriaLabelledBy(e,t){const o=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);o.includes(t)||(o.push(t),e.setAttribute("aria-labelledby",o.join(" ")))}removeFromAriaLabelledBy(e,t){const r=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(a=>a!==t);r.length>0?e.setAttribute("aria-labelledby",r.join(" ")):e.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const e=new qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),Ui(this),this.body.hidden=!1,this.popup.active=!0,await J(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new ji)}else{const e=new Hi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),_t(this),await J(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Wi)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,i=this.anchor;if(t===i)return;const{signal:o}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener("blur",this.handleBlur,{capture:!0,signal:o}),t.addEventListener("focus",this.handleFocus,{capture:!0,signal:o}),t.addEventListener("click",this.handleClick,{signal:o}),t.addEventListener("mouseover",this.handleMouseOver,{signal:o}),t.addEventListener("mouseout",this.handleMouseOut,{signal:o})),i&&(this.removeFromAriaLabelledBy(i,this.id),i.removeEventListener("blur",this.handleBlur,{capture:!0}),i.removeEventListener("focus",this.handleFocus,{capture:!0}),i.removeEventListener("click",this.handleClick),i.removeEventListener("mouseover",this.handleMouseOver),i.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,wt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,wt(this,"wa-after-hide")}render(){return p`
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
    `}};se.css=Du;se.dependencies={"wa-popup":X};n([y("slot:not([name])")],se.prototype,"defaultSlot",2);n([y(".body")],se.prototype,"body",2);n([y("wa-popup")],se.prototype,"popup",2);n([c()],se.prototype,"placement",2);n([c({type:Boolean,reflect:!0})],se.prototype,"disabled",2);n([c({type:Number})],se.prototype,"distance",2);n([c({type:Boolean,reflect:!0})],se.prototype,"open",2);n([c({type:Number})],se.prototype,"skidding",2);n([c({attribute:"show-delay",type:Number})],se.prototype,"showDelay",2);n([c({attribute:"hide-delay",type:Number})],se.prototype,"hideDelay",2);n([c()],se.prototype,"trigger",2);n([c({attribute:"without-arrow",type:Boolean,reflect:!0})],se.prototype,"withoutArrow",2);n([c()],se.prototype,"for",2);n([w()],se.prototype,"anchor",2);n([x("open",{waitUntilFirstUpdate:!0})],se.prototype,"handleOpenChange",1);n([x("for")],se.prototype,"handleForChange",1);n([x(["distance","placement","skidding"])],se.prototype,"handleOptionsChange",1);n([x("disabled")],se.prototype,"handleDisabledChange",1);se=n([v("wa-tooltip")],se);var Iu=k`
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
`;var Oe=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(e){e.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(e){e.composedPath().some(o=>{if(!(o instanceof HTMLElement))return!1;const r=o.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(r)?!0:o instanceof Q?!("disabled"in o)||!o.disabled:!1})||(e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(i=>{i!==this&&i.open&&(i.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const e=new qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const t=vr(getComputedStyle(this.body).getPropertyValue("--show-duration"));await wr(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new ji)}else{const e=new Hi;if(this.dispatchEvent(e),e.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const t=vr(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await wr(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Wi)}}async show(){if(!(this.open||this.disabled))return this.open=!0,wt(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,wt(this,"wa-after-hide")}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
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
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
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
    `}};Oe.css=Iu;n([y("details")],Oe.prototype,"details",2);n([y("summary")],Oe.prototype,"header",2);n([y(".body")],Oe.prototype,"body",2);n([y(".expand-icon-slot")],Oe.prototype,"expandIconSlot",2);n([w()],Oe.prototype,"isAnimating",2);n([c({type:Boolean,reflect:!0})],Oe.prototype,"open",2);n([c()],Oe.prototype,"summary",2);n([c({reflect:!0})],Oe.prototype,"name",2);n([c({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);n([c({reflect:!0})],Oe.prototype,"appearance",2);n([c({attribute:"icon-placement",reflect:!0})],Oe.prototype,"iconPlacement",2);n([x("open",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleOpenChange",1);Oe=n([v("wa-details")],Oe);function Ou(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Ia=new Set;function _u(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Pu(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Cr(e){if(Ia.add(e),!document.documentElement.classList.contains("wa-scroll-lock")){const t=_u()+Pu();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),t<2&&(i=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",i),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${t}px`)}}function Sr(e){Ia.delete(e),Ia.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function Oa(e,t,i="vertical",o="smooth"){const r=Ou(e,t),a=r.top+t.scrollTop,s=r.left+t.scrollLeft,l=t.scrollLeft,d=t.scrollLeft+t.offsetWidth,h=t.scrollTop,u=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(s<l?t.scrollTo({left:s,behavior:o}):s+e.clientWidth>d&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:o})),(i==="vertical"||i==="both")&&(a<h?t.scrollTo({top:a,behavior:o}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:o}))}function jr(e){return e.split(" ").map(t=>t.trim()).filter(t=>t!=="")}var Fu=k`
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
`;var Yt=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.hasSlotController=new qe(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&Pt(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),Cr(this))}disconnectedCallback(){super.disconnectedCallback(),Sr(this),this.removeOpenListeners()}async requestClose(e){const t=new Hi({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,J(this.dialog,"pulse");return}this.removeOpenListeners(),await J(this.dialog,"hide"),this.open=!1,this.dialog.close(),Sr(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new Wi)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Ui(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),_t(this)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains("hide")&&e.target===this.dialog&&Pt(this)&&this.requestClose(this.dialog)}handleDialogClick(e){const i=e.target.closest('[data-dialog="close"]');i&&(e.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await J(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const e=new qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Cr(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await J(this.dialog,"show"),this.dispatchEvent(new ji)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return p`
      <dialog
        part="dialog"
        class=${z({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?p`
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

        ${t?p`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Yt.css=Fu;n([y(".dialog")],Yt.prototype,"dialog",2);n([c({type:Boolean,reflect:!0})],Yt.prototype,"open",2);n([c({reflect:!0})],Yt.prototype,"label",2);n([c({attribute:"without-header",type:Boolean,reflect:!0})],Yt.prototype,"withoutHeader",2);n([c({attribute:"light-dismiss",type:Boolean})],Yt.prototype,"lightDismiss",2);n([x("open",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleOpenChange",1);Yt=n([v("wa-dialog")],Yt);document.addEventListener("click",e=>{const t=e.target.closest("[data-dialog]");if(t instanceof Element){const[i,o]=jr(t.getAttribute("data-dialog")||"");if(i==="open"&&o?.length){const a=t.getRootNode().getElementById(o);a?.localName==="wa-dialog"?a.open=!0:console.warn(`A dialog with an ID of "${o}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{});var Mu=k`
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
`;var No=class extends A{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};No.css=Mu;n([c({reflect:!0})],No.prototype,"orientation",2);n([x("orientation")],No.prototype,"handleVerticalChange",1);No=n([v("wa-divider")],No);var Nu=k`
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
`;var Ft=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.hasSlotController=new qe(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&Pt(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),Cr(this))}disconnectedCallback(){super.disconnectedCallback(),Sr(this),this.removeOpenListeners()}async requestClose(e){const t=new Hi({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,J(this.drawer,"pulse");return}this.removeOpenListeners(),await J(this.drawer,"hide"),this.open=!1,this.drawer.close(),Sr(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new Wi)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Ui(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),_t(this)}handleDialogCancel(e){e.preventDefault(),!this.drawer.classList.contains("hide")&&e.target===this.drawer&&Pt(this)&&this.requestClose(this.drawer)}handleDialogClick(e){const i=e.target.closest('[data-drawer="close"]');i&&(e.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(e){e.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await J(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const e=new qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),Cr(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.drawer.focus()}),await J(this.drawer,"show"),this.dispatchEvent(new ji)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return p`
      <dialog
        part="dialog"
        class=${z({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?p`
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

        ${t?p`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Ft.css=Nu;n([y(".drawer")],Ft.prototype,"drawer",2);n([c({type:Boolean,reflect:!0})],Ft.prototype,"open",2);n([c({reflect:!0})],Ft.prototype,"label",2);n([c({reflect:!0})],Ft.prototype,"placement",2);n([c({attribute:"without-header",type:Boolean,reflect:!0})],Ft.prototype,"withoutHeader",2);n([c({attribute:"light-dismiss",type:Boolean})],Ft.prototype,"lightDismiss",2);n([x("open",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleOpenChange",1);Ft=n([v("wa-drawer")],Ft);document.addEventListener("click",e=>{const t=e.target.closest("[data-drawer]");if(t instanceof Element){const[i,o]=jr(t.getAttribute("data-drawer")||"");if(i==="open"&&o?.length){const a=t.getRootNode().getElementById(o);a?.localName==="wa-drawer"?a.open=!0:console.warn(`A drawer with an ID of "${o}" could not be found in this document.`)}}}),document.body.addEventListener("pointerdown",()=>{});var Bu=class extends Event{constructor(e){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};var Vu=k`
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
`;function*Xn(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Xn(e.shadowRoot.activeElement)))}var ha=new Set,Fe=class extends A{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new U(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{const t=this.localize.dir()==="rtl";if(e.key==="Escape"&&this.open&&Pt(this)){const u=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,u?.focus({preventScroll:!0});return}const i=[...Xn()].find(u=>u.localName==="wa-dropdown-item"),o=i?.localName==="wa-dropdown-item",r=this.getCurrentSubmenuItem(),a=!!r;let s,l,d;a?(s=this.getSubmenuItems(r),l=s.find(u=>u.active||u===i),d=l?s.indexOf(l):-1):(s=this.getItems(),l=s.find(u=>u.active||u===i),d=l?s.indexOf(l):-1);let h;if(e.key==="ArrowUp"&&(e.preventDefault(),e.stopPropagation(),d>0?h=s[d-1]:h=s[s.length-1]),e.key==="ArrowDown"&&(e.preventDefault(),e.stopPropagation(),d!==-1&&d<s.length-1?h=s[d+1]:h=s[0]),e.key===(t?"ArrowLeft":"ArrowRight")&&o&&l&&l.hasSubmenu){e.preventDefault(),e.stopPropagation(),l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((f,m)=>f.active=m===0),u[0].focus({preventScroll:!0}))},0);return}if(e.key===(t?"ArrowRight":"ArrowLeft")&&a){e.preventDefault(),e.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus({preventScroll:!0}),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(m=>{m!==u&&(m.active=!1)})},0));return}if((e.key==="Home"||e.key==="End")&&(e.preventDefault(),e.stopPropagation(),h=e.key==="Home"?s[0]:s[s.length-1]),e.key==="Tab"&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=e.key,s.some(u=>{const f=(u.textContent||"").trim().toLowerCase(),m=this.userTypedQuery.trim().toLowerCase();return f.startsWith(m)?(h=u,!0):!1})),h){e.preventDefault(),e.stopPropagation(),s.forEach(u=>u.active=u===h),h.focus({preventScroll:!0});return}(e.key==="Enter"||e.key===" "&&this.userTypedQuery==="")&&o&&l&&(e.preventDefault(),e.stopPropagation(),l.hasSubmenu?(l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((f,m)=>f.active=m===0),u[0].focus({preventScroll:!0}))},0)):this.makeSelection(l))},this.handleDocumentPointerDown=e=>{e.composedPath().some(o=>o instanceof HTMLElement?o===this||o.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{const t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;const i=t.submenuElement.getBoundingClientRect(),o=this.localize.dir()==="rtl",r=o?i.right:i.left,a=o?Math.max(e.clientX,r):Math.min(e.clientX,r),s=Math.max(i.top,Math.min(e.clientY,i.bottom));t.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${a}px`),t.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${s}px`);const l=e.composedPath(),d=t.matches(":hover"),h=!!t.submenuElement?.matches(":hover"),u=d||!!l.find(m=>m===t),f=h||!!l.find(m=>m instanceof HTMLElement&&m.closest('[part="submenu"]')===t.submenuElement);!u&&!f&&setTimeout(()=>{!d&&!h&&(t.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),_t(this)}firstUpdated(){this.syncAriaAttributes()}async updated(e){if(e.has("open")){const t=e.get("open");if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has("size")&&this.syncItemSizes()}getItems(e=!1){const t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(i=>i.localName==="wa-dropdown-item");return e?t:t.filter(i=>!i.disabled)}getSubmenuItems(e,t=!1){const i=e.shadowRoot?.querySelector('slot[name="submenu"]')||e.querySelector('slot[name="submenu"]');if(!i)return[];const o=i.assignedElements({flatten:!0}).filter(r=>r.localName==="wa-dropdown-item");return t?o:o.filter(r=>!r.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(t=>t.localName==="wa-dropdown-item").forEach(t=>t.size=this.size)}addToSubmenuStack(e){const t=this.openSubmenuStack.indexOf(e);t!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1):this.openSubmenuStack.push(e)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(t=>{t.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){const t=e.closest('wa-dropdown-item:not([slot="submenu"])');let i;t?i=this.getSubmenuItems(t,!0):i=this.getItems(!0),i.forEach(o=>{o!==e&&o.submenuOpen&&(o.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;const t=new qi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}if(this.popup.active)return;ha.forEach(o=>o.open=!1),this.popup.active=!0,this.open=!0,ha.add(this),Ui(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await J(this.menu,"show");const i=this.getItems();i.length>0&&(i.forEach((o,r)=>o.active=r===0),i[0].focus({preventScroll:!0})),this.dispatchEvent(new ji)}async hideMenu(){if(!this.popup||!this.menu)return;const e=new Hi({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,ha.delete(this),_t(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await J(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Wi)}handleMenuClick(e){const t=e.target.closest("wa-dropdown-item");if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.submenuOpen=!0),e.stopPropagation();return}this.makeSelection(t)}}async handleMenuSlotChange(){const e=this.getItems(!0);await Promise.all(e.map(o=>o.updateComplete)),this.syncItemSizes();const t=e.some(o=>o.type==="checkbox"),i=e.some(o=>o.hasSubmenu);e.forEach((o,r)=>{o.active=r===0,o.checkboxAdjacent=t,o.submenuAdjacent=i})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){const t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);const t=Hn(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);const i=e.submenuElement.querySelector('slot[name="submenu"]');i&&(i.removeEventListener("slotchange",Fe.handleSubmenuSlotChange),i.addEventListener("slotchange",Fe.handleSubmenuSlotChange),Fe.handleSubmenuSlotChange({target:i}))}static handleSubmenuSlotChange(e){const t=e.target;if(!t)return;const i=t.assignedElements().filter(a=>a.localName==="wa-dropdown-item");if(i.length===0)return;const o=i.some(a=>a.hasSubmenu),r=i.some(a=>a.type==="checkbox");i.forEach(a=>{a.submenuAdjacent=o,a.checkboxAdjacent=r})}processSubmenuItems(e){if(!e.submenuElement)return;const t=this.getSubmenuItems(e,!0),i=t.some(o=>o.hasSubmenu);t.forEach(o=>{o.submenuAdjacent=i})}cleanupSubmenuPosition(e){const t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;const i=this.localize.dir()==="rtl"?"left-start":"right-start";Gn(e,e.submenuElement,{placement:i,middleware:[Wn({mainAxis:0,crossAxis:-5}),Kn({fallbackStrategy:"bestFit"}),jn({padding:8})]}).then(({x:o,y:r,placement:a})=>{e.submenuElement.setAttribute("data-placement",a),Object.assign(e.submenuElement.style,{left:`${o}px`,top:`${r}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){e.submenuElement.style.setProperty("--safe-triangle-visible","none");return}e.submenuElement.style.setProperty("--safe-triangle-visible","block");const i=e.submenuElement.getBoundingClientRect(),o=this.localize.dir()==="rtl";e.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${o?i.right:i.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${i.top}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${o?i.right:i.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${i.bottom}px`)}makeSelection(e){const t=this.getTrigger();if(e.disabled)return;e.type==="checkbox"&&(e.checked=!e.checked);const i=new Bu({item:e});this.dispatchEvent(i),i.defaultPrevented||(this.open=!1,t?.focus({preventScroll:!0}))}async syncAriaAttributes(){const e=this.getTrigger();let t;e&&(e.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await e.updateComplete,t=e.shadowRoot.querySelector('[part="base"]')):t=e,t.hasAttribute("id")||t.setAttribute("id",Nr("wa-dropdown-trigger-")),t.setAttribute("aria-haspopup","menu"),t.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false"))}render(){let e=this.hasUpdated?this.popup?.active:this.open;return p`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${e}
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
    `}};Fe.css=[Ee,Vu];n([y("slot:not([name])")],Fe.prototype,"defaultSlot",2);n([y("#menu")],Fe.prototype,"menu",2);n([y("wa-popup")],Fe.prototype,"popup",2);n([c({type:Boolean,reflect:!0})],Fe.prototype,"open",2);n([c({reflect:!0})],Fe.prototype,"size",2);n([c({reflect:!0})],Fe.prototype,"placement",2);n([c({type:Number})],Fe.prototype,"distance",2);n([c({type:Number})],Fe.prototype,"skidding",2);Fe=n([v("wa-dropdown")],Fe);var Uu=k`
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
`;var _e=class extends A{constructor(){super(...arguments),this.hasSlotController=new qe(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))},this.handleClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("click",this.handleClick,{capture:!0}),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("click",this.handleClick,{capture:!0}),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(e){e.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),e.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),e.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled),this.style.pointerEvents=this.disabled?"none":""),e.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),e.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){const e=this.submenuElement;!this.hasSubmenu||!e||!this.isConnected||(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await J(e,"show"),setTimeout(()=>{const t=this.getSubmenuItems();t.length>0&&(t.forEach((i,o)=>i.active=o===0),t[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){const e=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);const t=this.parentElement;t&&[...t.children].filter(o=>o!==this&&o.localName==="wa-dropdown-item"&&o.getAttribute("slot")===this.getAttribute("slot")&&o.submenuOpen).forEach(o=>{o.submenuOpen=!1})}async closeSubmenu(){const e=this.submenuElement;!this.hasSubmenu||!e||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),e.hidden||(await J(e,"hide"),e?.isConnected&&(e.hidden=!0,e.removeAttribute("data-visible"),e.hidePopover?.())))}getSubmenuItems(){return[...this.children].filter(e=>e.localName==="wa-dropdown-item"&&e.getAttribute("slot")==="submenu"&&!e.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return p`
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
    `}};_e.css=Uu;n([y("#submenu")],_e.prototype,"submenuElement",2);n([c({type:Boolean})],_e.prototype,"active",2);n([c({reflect:!0})],_e.prototype,"variant",2);n([c({reflect:!0})],_e.prototype,"size",2);n([c({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],_e.prototype,"checkboxAdjacent",2);n([c({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],_e.prototype,"submenuAdjacent",2);n([c()],_e.prototype,"value",2);n([c({reflect:!0})],_e.prototype,"type",2);n([c({type:Boolean})],_e.prototype,"checked",2);n([c({type:Boolean,reflect:!0})],_e.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],_e.prototype,"submenuOpen",2);n([w()],_e.prototype,"hasSubmenu",2);_e=n([v("wa-dropdown-item")],_e);var Bo=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?e:t,o=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),r=i[o]+this.unit,a=parseFloat((this.value/Math.pow(1e3,o)).toPrecision(3));return this.localize.number(a,{style:"unit",unit:r,unitDisplay:this.display})}};n([c({type:Number})],Bo.prototype,"value",2);n([c()],Bo.prototype,"unit",2);n([c()],Bo.prototype,"display",2);Bo=n([v("wa-format-bytes")],Bo);var Me=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(e.getMilliseconds()))return;const i=this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t});return p`<time datetime=${e.toISOString()}>${i}</time>`}};n([c()],Me.prototype,"date",2);n([c()],Me.prototype,"weekday",2);n([c()],Me.prototype,"era",2);n([c()],Me.prototype,"year",2);n([c()],Me.prototype,"month",2);n([c()],Me.prototype,"day",2);n([c()],Me.prototype,"hour",2);n([c()],Me.prototype,"minute",2);n([c()],Me.prototype,"second",2);n([c({attribute:"time-zone-name"})],Me.prototype,"timeZoneName",2);n([c({attribute:"time-zone"})],Me.prototype,"timeZone",2);n([c({attribute:"hour-format"})],Me.prototype,"hourFormat",2);Me=n([v("wa-format-date")],Me);var ot=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};n([c({type:Number})],ot.prototype,"value",2);n([c()],ot.prototype,"type",2);n([c({attribute:"without-grouping",type:Boolean})],ot.prototype,"withoutGrouping",2);n([c()],ot.prototype,"currency",2);n([c({attribute:"currency-display"})],ot.prototype,"currencyDisplay",2);n([c({attribute:"minimum-integer-digits",type:Number})],ot.prototype,"minimumIntegerDigits",2);n([c({attribute:"minimum-fraction-digits",type:Number})],ot.prototype,"minimumFractionDigits",2);n([c({attribute:"maximum-fraction-digits",type:Number})],ot.prototype,"maximumFractionDigits",2);n([c({attribute:"minimum-significant-digits",type:Number})],ot.prototype,"minimumSignificantDigits",2);n([c({attribute:"maximum-significant-digits",type:Number})],ot.prototype,"maximumSignificantDigits",2);ot=n([v("wa-format-number")],ot);var Gs=class extends Event{constructor(e){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var qu=k`
  :host {
    display: block;
  }
`;var ua=new Map;function Hu(e,t="cors"){const i=ua.get(e);if(i!==void 0)return Promise.resolve(i);const o=fetch(e,{mode:t}).then(async r=>{const a={ok:r.ok,status:r.status,html:await r.text()};return ua.set(e,a),a});return ua.set(e,o),o}var _i=class extends A{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(i=>t.setAttribute(i.name,i.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await Hu(e,this.mode);if(e!==this.src)return;if(!t.ok){this.dispatchEvent(new Gs({status:t.status}));return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.dispatchEvent(new Ka)}catch{this.dispatchEvent(new Gs({status:-1}))}}render(){return p`<slot></slot>`}};_i.css=qu;n([c()],_i.prototype,"src",2);n([c()],_i.prototype,"mode",2);n([c({attribute:"allow-scripts",type:Boolean})],_i.prototype,"allowScripts",2);n([x("src")],_i.prototype,"handleSrcChange",1);_i=n([v("wa-include")],_i);var Wu=class extends Event{constructor(e){super("wa-intersect",{bubbles:!1,cancelable:!1,composed:!0}),this.detail=e}};var ju=k`
  :host {
    display: contents;
  }
`;var xt=class extends A{constructor(){super(...arguments),this.intersectionObserver=null,this.observedElements=new Map,this.root=null,this.rootMargin="0px",this.threshold="0",this.intersectClass="",this.once=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}parseThreshold(){return jr(this.threshold).map(t=>{const i=parseFloat(t);return isNaN(i)?0:O(i,0,1)})}resolveRoot(){if(!this.root)return null;try{const t=this.getRootNode().getElementById(this.root);return t||console.warn(`Root element with ID "${this.root}" could not be found.`,this),t}catch{return console.warn(`Invalid selector for root: "${this.root}"`,this),null}}startObserver(){if(this.stopObserver(),this.disabled)return;const e=this.parseThreshold(),t=this.resolveRoot();this.intersectionObserver=new IntersectionObserver(o=>{o.forEach(r=>{const a=this.observedElements.get(r.target)??!1,s=r.isIntersecting;this.observedElements.set(r.target,s),this.intersectClass&&(s?r.target.classList.add(this.intersectClass):r.target.classList.remove(this.intersectClass));const l=new Wu({entry:r});this.dispatchEvent(l),s&&!a&&this.once&&(this.intersectionObserver?.unobserve(r.target),this.observedElements.delete(r.target))})},{root:t,rootMargin:this.rootMargin,threshold:e});const i=this.shadowRoot.querySelector("slot");i!==null&&i.assignedElements({flatten:!0}).forEach(r=>{this.intersectionObserver?.observe(r),this.observedElements.set(r,!1)})}stopObserver(){this.intersectClass&&this.observedElements.forEach((e,t)=>{t.classList.remove(this.intersectClass)}),this.intersectionObserver?.disconnect(),this.intersectionObserver=null,this.observedElements.clear()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleOptionsChange(){this.startObserver()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};xt.css=ju;n([c()],xt.prototype,"root",2);n([c({attribute:"root-margin"})],xt.prototype,"rootMargin",2);n([c()],xt.prototype,"threshold",2);n([c({attribute:"intersect-class"})],xt.prototype,"intersectClass",2);n([c({type:Boolean,reflect:!0})],xt.prototype,"once",2);n([c({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);n([x("disabled",{waitUntilFirstUpdate:!0})],xt.prototype,"handleDisabledChange",1);n([x("root",{waitUntilFirstUpdate:!0}),x("rootMargin",{waitUntilFirstUpdate:!0}),x("threshold",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOptionsChange",1);xt=n([v("wa-intersection-observer")],xt);var Ku=class extends Event{constructor(e){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var Gu=k`
  :host {
    display: contents;
  }
`;var kt=class extends A{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.dispatchEvent(new Ku({mutationList:e}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return p` <slot></slot> `}};kt.css=Gu;n([c({reflect:!0})],kt.prototype,"attr",2);n([c({attribute:"attr-old-value",type:Boolean,reflect:!0})],kt.prototype,"attrOldValue",2);n([c({attribute:"char-data",type:Boolean,reflect:!0})],kt.prototype,"charData",2);n([c({attribute:"char-data-old-value",type:Boolean,reflect:!0})],kt.prototype,"charDataOldValue",2);n([c({attribute:"child-list",type:Boolean,reflect:!0})],kt.prototype,"childList",2);n([c({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);n([x("disabled")],kt.prototype,"handleDisabledChange",1);n([x("attr",{waitUntilFirstUpdate:!0}),x("attr-old-value",{waitUntilFirstUpdate:!0}),x("char-data",{waitUntilFirstUpdate:!0}),x("char-data-old-value",{waitUntilFirstUpdate:!0}),x("childList",{waitUntilFirstUpdate:!0})],kt.prototype,"handleChange",1);kt=n([v("wa-mutation-observer")],kt);var Xu=k`
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
`;var Z=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new qe(this,"hint","label"),this.localize=new U(this),this.title="",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.placeholder="",this.readonly=!1,this.required=!1,this.step=1,this.withoutSteppers=!1,this.inputmode="numeric",this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Wo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isAtMin(){if(this.min===void 0)return!1;const e=parseFloat(this.value||"");return!isNaN(e)&&e<=this.min}get isAtMax(){if(this.max===void 0)return!1;const e=parseFloat(this.value||"");return!isNaN(e)&&e>=this.max}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(){this.value=this.input.value}handleKeyDown(e){Za(e,this),(e.key==="ArrowUp"||e.key==="ArrowDown")&&requestAnimationFrame(()=>{this.value!==this.input.value&&(this.value=this.input.value)})}handleStepperClick(e){this.disabled||this.readonly||(e==="up"?this.input.stepUp():this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.input.focus())}maintainFocusOnPointerDown(e){e.preventDefault(),this.input.focus()}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,o=this.hint?!0:!!t;return p`
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
    `}};Z.css=[Ee,Nt,Xu];Z.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y("input")],Z.prototype,"input",2);n([c()],Z.prototype,"title",2);n([w()],Z.prototype,"value",1);n([c({attribute:"value",reflect:!0})],Z.prototype,"defaultValue",2);n([c({reflect:!0})],Z.prototype,"size",2);n([c({reflect:!0})],Z.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],Z.prototype,"pill",2);n([c()],Z.prototype,"label",2);n([c({attribute:"hint"})],Z.prototype,"hint",2);n([c()],Z.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],Z.prototype,"readonly",2);n([c({type:Boolean,reflect:!0})],Z.prototype,"required",2);n([c({type:Number})],Z.prototype,"min",2);n([c({type:Number})],Z.prototype,"max",2);n([c()],Z.prototype,"step",2);n([c({attribute:"without-steppers",type:Boolean})],Z.prototype,"withoutSteppers",2);n([c()],Z.prototype,"autocomplete",2);n([c({type:Boolean})],Z.prototype,"autofocus",2);n([c()],Z.prototype,"enterkeyhint",2);n([c()],Z.prototype,"inputmode",2);n([c({attribute:"with-label",type:Boolean})],Z.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],Z.prototype,"withHint",2);n([x("step",{waitUntilFirstUpdate:!0})],Z.prototype,"handleStepChange",1);Z=n([v("wa-number-input")],Z);var Yu=k`
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
`;function Ro(e,t=0){if(!e||!globalThis.Node)return"";if(typeof e[Symbol.iterator]=="function")return(Array.isArray(e)?e:[...e]).map(r=>Ro(r,--t)).join("");let i=e;if(i.nodeType===Node.TEXT_NODE)return i.textContent??"";if(i.nodeType===Node.ELEMENT_NODE){let o=i;if(o.hasAttribute("slot")||o.matches("style, script"))return"";if(o instanceof HTMLSlotElement){let r=o.assignedNodes({flatten:!0});if(r.length>0)return Ro(r,--t)}return t>-1?Ro(o,--t):o.textContent??""}return i.hasChildNodes()?Ro(i.childNodes,--t):""}var Ct=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=e=>{e.type==="mouseenter"?this.customStates.set("hover",!0):e.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(e){const t=this._label;this._label=e||"",this._label!==t&&this.requestUpdate("label",t)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{const e=this.closest("wa-select");e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())}),customElements.whenDefined("wa-combobox").then(()=>{const e=this.closest("wa-combobox");e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())})):this.isInitialized=!0}willUpdate(e){if(e.has("defaultSelected")&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){const t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}super.willUpdate(e)}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),e.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),e.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has("current")&&this.customStates.set("current",this.current)}firstUpdated(e){if(super.firstUpdated(e),this.selected&&!this.defaultSelected){const t=this.closest("wa-select, wa-combobox");t&&!t.hasInteracted&&t.selectionChanged?.()}}updateDefaultLabel(){let e=this.defaultLabel;this.defaultLabel=Ro(this).trim();let t=this.defaultLabel!==e;return!this._label&&t&&this.requestUpdate("label",e),t}render(){return p`
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
    `}};Ct.css=Yu;n([y(".label")],Ct.prototype,"defaultSlot",2);n([w()],Ct.prototype,"current",2);n([c({reflect:!0})],Ct.prototype,"value",2);n([c({type:Boolean})],Ct.prototype,"disabled",2);n([c({type:Boolean,attribute:!1})],Ct.prototype,"selected",2);n([c({type:Boolean,attribute:"selected"})],Ct.prototype,"defaultSelected",2);n([c()],Ct.prototype,"label",1);n([w()],Ct.prototype,"defaultLabel",2);Ct=n([v("wa-option")],Ct);var Zu=k`
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
`;var pa=new Set,ve=class extends A{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=e=>{e.target.closest('[data-popover="close"]')&&(e.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&Pt(this)&&(e.preventDefault(),e.stopPropagation(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=e=>{this.anchor&&e.composedPath().includes(this.anchor)||e.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=Nr("wa-popover-")),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),_t(this),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(e){e.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const e=new qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}pa.forEach(t=>t.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,pa.add(this),Ui(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await J(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new ji)}else{const e=new Hi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),pa.delete(this),_t(this),await J(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Wi)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,i=this.anchor;if(t===i)return;const{signal:o}=this.eventController;t&&t.addEventListener("click",this.handleAnchorClick,{signal:o}),i&&i.removeEventListener("click",this.handleAnchorClick),this.anchor=t,this.for&&!t&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,wt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,wt(this,"wa-after-hide")}render(){return p`
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
    `}};ve.css=Zu;ve.dependencies={"wa-popup":X};n([y("dialog")],ve.prototype,"dialog",2);n([y(".body")],ve.prototype,"body",2);n([y("wa-popup")],ve.prototype,"popup",2);n([w()],ve.prototype,"anchor",2);n([c()],ve.prototype,"placement",2);n([c({type:Boolean,reflect:!0})],ve.prototype,"open",2);n([c({type:Number})],ve.prototype,"distance",2);n([c({type:Number})],ve.prototype,"skidding",2);n([c()],ve.prototype,"for",2);n([c({attribute:"without-arrow",type:Boolean,reflect:!0})],ve.prototype,"withoutArrow",2);n([x("open",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpenChange",1);n([x("for")],ve.prototype,"handleForChange",1);n([x(["distance","placement","skidding"])],ve.prototype,"handleOptionsChange",1);ve=n([v("wa-popover")],ve);var Qu=k`
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
`;var lo=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.value=0,this.indeterminate=!1,this.label=""}updated(e){e.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${O(this.value,0,100)}%`)})}render(){return p`
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
    `}};lo.css=Qu;n([c({type:Number,reflect:!0})],lo.prototype,"value",2);n([c({type:Boolean,reflect:!0})],lo.prototype,"indeterminate",2);n([c()],lo.prototype,"label",2);lo=n([v("wa-progress-bar")],lo);var Ju=k`
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
`;var Pi=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*t,o=i-this.value/100*i;this.indicatorOffset=`${o}px`}}render(){return p`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${te({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${te({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};Pi.css=Ju;n([y(".indicator")],Pi.prototype,"indicator",2);n([w()],Pi.prototype,"indicatorOffset",2);n([c({type:Number,reflect:!0})],Pi.prototype,"value",2);n([c()],Pi.prototype,"label",2);Pi=n([v("wa-progress-ring")],Pi);var ep=k`
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
`,fa,et=class extends A{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(e){super.firstUpdated(e),this.hasUpdated&&this.generate()}generate(){if(!this.hasUpdated)return;if(!fa){Je(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(t=>{fa=t.default,this.generate()});return}this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`;const e=getComputedStyle(this);fa.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||e.color,background:this.background||null,size:this.size*2},this.canvas),this.generated=!0}render(){return p`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        @transitionend=${e=>{e.propertyName==="color"&&this.generate()}}
      ></canvas>
    `}};et.css=ep;n([y("canvas")],et.prototype,"canvas",2);n([c()],et.prototype,"value",2);n([c()],et.prototype,"label",2);n([c({type:Number})],et.prototype,"size",2);n([c()],et.prototype,"fill",2);n([c()],et.prototype,"background",2);n([c({type:Number})],et.prototype,"radius",2);n([c({attribute:"error-correction"})],et.prototype,"errorCorrection",2);n([w()],et.prototype,"generated",2);n([x(["background","errorCorrection","fill","radius","size","value"],{waitUntilFirstUpdate:!0})],et.prototype,"generate",1);et=n([v("wa-qr-code")],et);var tp=k`
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
`;var Zt=class extends Q{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this.setAttribute("aria-disabled",t?"true":"false"),t?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return p`
      <span part="control" class="control">
        ${this.checked?p`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};Zt.css=[Nt,Ee,tp];n([w()],Zt.prototype,"checked",2);n([w()],Zt.prototype,"forceDisabled",2);n([c({reflect:!0})],Zt.prototype,"value",2);n([c({reflect:!0})],Zt.prototype,"appearance",2);n([c({reflect:!0})],Zt.prototype,"size",2);n([c({type:Boolean})],Zt.prototype,"disabled",2);Zt=n([v("wa-radio")],Zt);var ip=k`
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
`;var Se=class extends Q{constructor(){super(),this.hasSlotController=new qe(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const t=e.target.closest("wa-radio");if(!t||t.disabled||t.forceDisabled||this.disabled)return;const i=this.value;this.value=t.value,t.checked=!0;const o=this.getAllRadios();for(const r of o)t!==r&&(r.checked=!1,r.setAttribute("tabindex","-1"));this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const e=[Br({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:Nr("__wa-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}get validationTarget(){const e=this.querySelector(":is(wa-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("size")||e.has("value")||e.has("defaultValue"))&&this.syncRadioElements()}formResetCallback(...e){this._value=null,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();if(e.forEach((t,i)=>{this.size&&t.setAttribute("size",this.size),t.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),t.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),t.toggleAttribute("data-wa-radio-first",i===0),t.toggleAttribute("data-wa-radio-inner",i!==0&&i!==e.length-1),t.toggleAttribute("data-wa-radio-last",i===e.length-1),t.forceDisabled=this.disabled}),await Promise.all(e.map(async t=>{await t.updateComplete,!t.disabled&&t.value===this.value?t.checked=!0:t.checked=!1})),this.disabled)e.forEach(t=>{t.tabIndex=-1});else{const t=e.filter(o=>!o.disabled),i=t.find(o=>o.checked);t.length>0&&(i?t.forEach(o=>{o.tabIndex=o.checked?0:-1}):t.forEach((o,r)=>{o.tabIndex=r===0?0:-1})),e.filter(o=>o.disabled).forEach(o=>{o.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios().filter(l=>!l.disabled);if(t.length<=0)return;e.preventDefault();const i=this.value,o=t.find(l=>l.checked)??t[0],r=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let a=t.indexOf(o)+r;a||(a=0),a<0&&(a=t.length-1),a>t.length-1&&(a=0);const s=t.some(l=>l.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(l=>{l.checked=!1,s||l.setAttribute("tabindex","-1")}),this.value=t[a].value,t[a].checked=!0,s?t[a].shadowRoot.querySelector("button").focus():(t[a].setAttribute("tabindex","0"),t[a].focus()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const t=this.getAllRadios(),i=t.find(a=>a.checked),o=t.find(a=>!a.disabled),r=i||o;r&&r.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,o=this.hint?!0:!!t;return p`
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
    `}};Se.css=[Ee,Nt,ip];Se.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};n([y("slot:not([name])")],Se.prototype,"defaultSlot",2);n([c()],Se.prototype,"label",2);n([c({attribute:"hint"})],Se.prototype,"hint",2);n([c({reflect:!0})],Se.prototype,"name",2);n([c({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);n([c({reflect:!0})],Se.prototype,"orientation",2);n([w()],Se.prototype,"value",1);n([c({attribute:"value",reflect:!0})],Se.prototype,"defaultValue",2);n([c({reflect:!0})],Se.prototype,"size",2);n([c({type:Boolean,reflect:!0})],Se.prototype,"required",2);n([c({type:Boolean,attribute:"with-label"})],Se.prototype,"withLabel",2);n([c({type:Boolean,attribute:"with-hint"})],Se.prototype,"withHint",2);Se=n([v("wa-radio-group")],Se);var Xs=class extends Event{constructor(e){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var op=k`
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
`;var ye=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(e,t)=>t?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:i,right:o,width:r}=this.rating.getBoundingClientRect(),a=t?this.roundToPrecision((o-e)/r*this.max,this.precision):this.roundToPrecision((e-i)/r*this.max,this.precision);return O(a,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl",o=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"){const r=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"){const r=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}roundToPrecision(e,t=.5){const i=1/t;return Math.ceil(e*i)/i}handleHoverValueChange(){this.dispatchEvent(new Xs({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new Xs({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir,t=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,p`
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
          ${t.map(o=>{const r=i>=o+1;return i>o&&i<o+1?p`
                <span
                  class=${z({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(i)===o+1})}
                  role="presentation"
                >
                  <div
                    style=${te({clipPath:e?`inset(0 ${(i-o)*100}% 0 0)`:`inset(0 0 0 ${(i-o)*100}%)`})}
                  >
                    ${Kt(this.getSymbol(o+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${te({clipPath:e?`inset(0 0 0 ${100-(i-o)*100}%)`:`inset(0 ${100-(i-o)*100}% 0 0)`})}
                  >
                    ${Kt(this.getSymbol(o+1,!0))}
                  </div>
                </span>
              `:p`
              <span
                class=${z({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(i)===o+1,"symbol-active":i>=o+1})}
                role="presentation"
              >
                ${Kt(this.getSymbol(o+1,r))}
              </span>
            `})}
        </span>
      </div>
    `}};ye.css=[Ee,op];n([y(".rating")],ye.prototype,"rating",2);n([w()],ye.prototype,"hoverValue",2);n([w()],ye.prototype,"isHovering",2);n([c()],ye.prototype,"label",2);n([c({type:Number})],ye.prototype,"value",2);n([c({type:Number})],ye.prototype,"max",2);n([c({type:Number})],ye.prototype,"precision",2);n([c({type:Boolean,reflect:!0})],ye.prototype,"readonly",2);n([c({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);n([c()],ye.prototype,"getSymbol",2);n([c({reflect:!0})],ye.prototype,"size",2);n([Fr({passive:!0})],ye.prototype,"handleTouchMove",1);n([x("hoverValue")],ye.prototype,"handleHoverValueChange",1);n([x("isHovering")],ye.prototype,"handleIsHoveringChange",1);ye=n([v("wa-rating")],ye);var rp=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],fi=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=t.getTime()-e.getTime(),{unit:o,value:r}=rp.find(a=>Math.abs(i)<a.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/r),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let a;o==="minute"?a=lr("second"):o==="hour"?a=lr("minute"):o==="day"?a=lr("hour"):a=lr("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),a)}return p`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};n([w()],fi.prototype,"isoTime",2);n([w()],fi.prototype,"relativeTime",2);n([c()],fi.prototype,"date",2);n([c()],fi.prototype,"format",2);n([c()],fi.prototype,"numeric",2);n([c({type:Boolean})],fi.prototype,"sync",2);fi=n([v("wa-relative-time")],fi);function lr(e){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return i-Date.now()%i}var ap=class extends Event{constructor(e){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var sp=k`
  :host {
    display: contents;
  }
`;var Vo=class extends A{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.dispatchEvent(new ap({entries:e}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],t.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};Vo.css=sp;n([c({type:Boolean,reflect:!0})],Vo.prototype,"disabled",2);n([x("disabled",{waitUntilFirstUpdate:!0})],Vo.prototype,"handleDisabledChange",1);Vo=n([v("wa-resize-observer")],Vo);var np=k`
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
`;var Qt=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(e){e.key==="Home"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),e.key==="End"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const e=Math.ceil(this.content.clientWidth),t=Math.abs(Math.ceil(this.content.scrollLeft)),o=Math.ceil(this.content.scrollWidth)-e;this.canScroll=o>0;const r=Math.min(1,t/(o*.05)),a=Math.min(1,(o-t)/(o*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(a||0))}else{const e=Math.ceil(this.content.clientHeight),t=Math.abs(Math.ceil(this.content.scrollTop)),o=Math.ceil(this.content.scrollHeight)-e;this.canScroll=o>0;const r=Math.min(1,t/(o*.05)),a=Math.min(1,(o-t)/(o*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(a||0))}}render(){return p`
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
    `}};Qt.css=[np];n([y("#content")],Qt.prototype,"content",2);n([w()],Qt.prototype,"canScroll",2);n([c({reflect:!0})],Qt.prototype,"orientation",2);n([c({attribute:"without-scrollbar",type:Boolean,reflect:!0})],Qt.prototype,"withoutScrollbar",2);n([c({attribute:"without-shadow",type:Boolean,reflect:!0})],Qt.prototype,"withoutShadow",2);n([Fr({passive:!0})],Qt.prototype,"updateScroll",1);Qt=n([v("wa-scroller")],Qt);var lp=k`
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
`;var F=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new qe(this,"hint","label"),this.localize=new U(this),this.selectionOrder=new Map,this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>p`
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
          data-value=${e.value}
          @wa-remove=${t=>this.handleTagRemove(t,e)}
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=t.closest('[part~="clear-button"]')!==null,o=t.closest("wa-button")!==null;if(!(i||o)){if(e.key==="Escape"&&this.open&&Pt(this)&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const r=this.getAllOptions(),a=r.indexOf(this.currentOption);let s=Math.max(0,a);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=a+1,s>r.length-1&&(s=0)):e.key==="ArrowUp"?(s=a-1,s<0&&(s=r.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=r.length-1),this.setCurrentOption(r[s])}if(e.key?.length===1||e.key==="Backspace"){const r=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const a of r)if(a.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(a);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){const e=[Br({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(e){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]),this._value=e??null,this.value!==t&&(this.valueHasChanged=!0,this.requestUpdate("value",t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),e==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(i=>!i.disabled).map(i=>i.value));let t=e;return e!=null&&(t=e.filter(i=>this.optionValues.has(i)),t=this.multiple?t:t[0],t=t??null),t}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners()}updateDefaultValue(){const t=this.getAllOptions().filter(i=>i.hasAttribute("selected")||i.defaultSelected);if(t.length>0){const i=t.map(o=>o.value);this._defaultValue=this.multiple?i:i[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Ui(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),_t(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){const i=e.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="wa-button");this.disabled||i||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==null&&(this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new Dn),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("wa-option");i&&!i.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);const i=e.filter(o=>t.includes(o.value));this.setSelectedOptions(i)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let i=t;if(!i){const o=e.target.closest("wa-tag[data-value]");if(o){const r=o.dataset.value;i=this.selectedOptions.find(a=>a.value===r)}}i&&(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(e){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus({preventScroll:!0}))}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(o=>{i.includes(o)||(o.selected=!1)}),i.length&&i.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions().filter(s=>{if(!this.hasInteracted&&!this.valueHasChanged){const l=this.defaultValue,d=Array.isArray(l)?l:[l];return s.hasAttribute("selected")||s.defaultSelected||s.selected||d?.includes(s.value)}return s.selected}),i=new Set(t.map(s=>s.value));for(const s of this.selectionOrder.keys())i.has(s)||this.selectionOrder.delete(s);let r=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(const s of t)this.selectionOrder.has(s.value)||this.selectionOrder.set(s.value,r++);this.selectedOptions=t.sort((s,l)=>{const d=this.selectionOrder.get(s.value)??0,h=this.selectionOrder.get(l.value)??0;return d-h});let a=new Set(this.selectedOptions.map(s=>s.value));if(a.size>0||this._value){const s=this._value;if(this._value==null){let l=this.defaultValue??[];this._value=Array.isArray(l)?l:[l]}this._value=this._value?.filter(l=>!this.optionValues?.has(l))??null,this._value?.unshift(...a),this.requestUpdate("value",s)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.displayLabel=s?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return i?typeof i=="string"?Kt(i):i:null}else if(t===this.maxOptionsVisible)return p`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],i=e.filter(o=>t.includes(o.value));this.setSelectedOptions(i),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const e=new qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await J(this.popup.popup,"show"),this.currentOption&&Oa(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new ji)}else{const e=new Hi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await J(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Wi)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,wt(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,wt(this,"wa-after-hide")}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,o=this.hint?!0:!!t,r=(this.hasUpdated||Pl)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,a=!!(this.placeholder&&(!this.value||this.value.length===0));return p`
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
    `}};F.css=[lp,Nt,Ee];n([y(".select")],F.prototype,"popup",2);n([y(".combobox")],F.prototype,"combobox",2);n([y(".display-input")],F.prototype,"displayInput",2);n([y(".value-input")],F.prototype,"valueInput",2);n([y(".listbox")],F.prototype,"listbox",2);n([w()],F.prototype,"displayLabel",2);n([w()],F.prototype,"currentOption",2);n([w()],F.prototype,"selectedOptions",2);n([w()],F.prototype,"optionValues",2);n([c({reflect:!0})],F.prototype,"name",2);n([c({attribute:!1})],F.prototype,"defaultValue",1);n([c({attribute:"value",reflect:!1})],F.prototype,"value",1);n([c({reflect:!0})],F.prototype,"size",2);n([c()],F.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],F.prototype,"multiple",2);n([c({attribute:"max-options-visible",type:Number})],F.prototype,"maxOptionsVisible",2);n([c({type:Boolean})],F.prototype,"disabled",2);n([c({attribute:"with-clear",type:Boolean})],F.prototype,"withClear",2);n([c({type:Boolean,reflect:!0})],F.prototype,"open",2);n([c({reflect:!0})],F.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],F.prototype,"pill",2);n([c()],F.prototype,"label",2);n([c({reflect:!0})],F.prototype,"placement",2);n([c({attribute:"hint"})],F.prototype,"hint",2);n([c({attribute:"with-label",type:Boolean})],F.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],F.prototype,"withHint",2);n([c({type:Boolean,reflect:!0})],F.prototype,"required",2);n([c({attribute:!1})],F.prototype,"getTag",2);n([x("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);n([x("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);n([x("open",{waitUntilFirstUpdate:!0})],F.prototype,"handleOpenChange",1);F=n([v("wa-select")],F);var cp=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};var dp=k`
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
`;var mi=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new cp)}render(){return p`
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
    `}};mi.css=[dp,Mr,Ee];n([c({reflect:!0})],mi.prototype,"variant",2);n([c({reflect:!0})],mi.prototype,"appearance",2);n([c({reflect:!0})],mi.prototype,"size",2);n([c({type:Boolean,reflect:!0})],mi.prototype,"pill",2);n([c({attribute:"with-remove",type:Boolean})],mi.prototype,"withRemove",2);mi=n([v("wa-tag")],mi);var hp=k`
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
`;var $r=class extends A{constructor(){super(...arguments),this.effect="none"}render(){return p` <div part="indicator" class="indicator"></div> `}};$r.css=hp;n([c({reflect:!0})],$r.prototype,"effect",2);$r=n([v("wa-skeleton")],$r);var up=k`
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
`;var pp=()=>{const e=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(t){const i={message:"",isValid:!0,invalidKeys:[]},o=(r,a,s,l)=>{const d=document.createElement("input");return d.type="range",d.min=String(a),d.max=String(s),d.step=String(l),d.value=String(r),d.checkValidity(),d.validationMessage};if(t.required&&!t.hasInteracted)return i.isValid=!1,i.invalidKeys.push("valueMissing"),i.message=e.validationMessage||"Please fill out this field.",i;if(t.isRange){const r=t.minValue,a=t.maxValue;if(r<t.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=o(r,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,i;if(a>t.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=o(a,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,i;if(t.step&&t.step!==1){const s=(r-t.min)%t.step!==0,l=(a-t.min)%t.step!==0;if(s||l){i.isValid=!1,i.invalidKeys.push("stepMismatch");const d=s?r:a;return i.message=o(d,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,i}}}else{const r=t.value;if(r<t.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=o(r,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,i;if(r>t.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=o(r,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,i;if(t.step&&t.step!==1&&(r-t.min)%t.step!==0)return i.isValid=!1,i.invalidKeys.push("stepMismatch"),i.message=o(r,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,i}return i}}},M=class extends Q{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new qe(this,"hint","label"),this.localize=new U(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,pp()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){if(this.valueHasChanged){const t=this._value??this.minValue??0;return O(t,this.min,this.max)}const e=this._value??this.defaultValue;return O(e,this.min,this.max)}set value(e){e=Number(e)??this.minValue,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new ir(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new ir(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new ir(this.track,{start:(e,t)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const i=this.getValueFromCoordinates(e,t),o=Math.abs(i-this.minValue),r=Math.abs(i-this.maxValue);if(o===r)if(i>this.maxValue)this.activeThumb="max";else if(i<this.minValue)this.activeThumb="min";else{const a=this.localize.dir()==="rtl",s=this.orientation==="vertical",l=s?t:e,d=this.lastTrackPosition||l;this.lastTrackPosition=l;const h=l>d!==a&&!s||l<d&&s;this.activeThumb=h?"max":"min"}else this.activeThumb=o<=r?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(e,t,this.activeThumb),this.showRangeTooltips()},move:(e,t)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,t,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new ir(this.slider,{start:(e,t)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(e,t),this.showTooltip()},move:(e,t)=>{this.setValueFromCoordinates(e,t)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(e){if(e.has("range")&&this.requestUpdate(),this.isRange?(e.has("minValue")||e.has("maxValue"))&&(this.minValue=O(this.minValue,this.min,this.maxValue),this.maxValue=O(this.maxValue,this.minValue,this.max),this.updateFormValue()):e.has("value")&&this.setValue(String(this.value)),(e.has("min")||e.has("max"))&&this.isRange&&(this.minValue=O(this.minValue,this.min,this.max),this.maxValue=O(this.maxValue,this.min,this.max)),e.has("disabled")&&this.customStates.set("disabled",this.disabled),e.has("disabled")||e.has("readonly")){const t=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(t),this.draggableThumbMax&&this.draggableThumbMax.toggle(t)),this.draggableTrack&&this.draggableTrack.toggle(t)}super.updated(e)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??String(this.min))),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(e){const t=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,i=Number(this.step),o=Number(this.min),r=Number(this.max);return e=Math.round(e/i)*i,e=O(e,o,r),parseFloat(e.toFixed(t))}getPercentageFromValue(e){return(e-this.min)/(this.max-this.min)*100}getValueFromCoordinates(e,t){const i=this.localize.dir()==="rtl",o=this.orientation==="vertical",{top:r,right:a,bottom:s,left:l,height:d,width:h}=this.trackBoundingClientRect,u=o?t:e,f=o?{start:r,end:s,size:d}:{start:l,end:a,size:h},g=(o||i?f.end-u:u-f.start)/f.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*g)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const e=this.shadowRoot?.activeElement;e===this.thumbMin||e===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(e){const t=e.target;this.isRange?(t===this.thumbMin?this.activeThumb="min":t===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(e){const t=this.localize.dir()==="rtl",i=e.target;if(this.disabled||this.readonly||this.isRange&&(i===this.thumbMin?this.activeThumb="min":i===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const o=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let r=o;switch(e.key){case"ArrowUp":case(t?"ArrowLeft":"ArrowRight"):e.preventDefault(),r=this.clampAndRoundToStep(o+this.step);break;case"ArrowDown":case(t?"ArrowRight":"ArrowLeft"):e.preventDefault(),r=this.clampAndRoundToStep(o-this.step);break;case"Home":e.preventDefault(),r=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":e.preventDefault(),r=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":e.preventDefault();const a=Math.max(o+(this.max-this.min)/10,o+this.step);r=this.clampAndRoundToStep(a);break;case"PageDown":e.preventDefault();const s=Math.min(o-(this.max-this.min)/10,o-this.step);r=this.clampAndRoundToStep(s);break;case"Enter":Za(e,this);return}r!==o&&(this.isRange?(this.activeThumb==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),this.updateFormValue()):this.value=O(r,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(e){e.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(e,t){const i=this.value;this.value=this.getValueFromCoordinates(e,t),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(e,t,i){const o=this.getValueFromCoordinates(e,t),r=i==="min"?this.minValue:this.maxValue;i==="min"?o>this.maxValue?(this.maxValue=o,this.minValue=o):this.minValue=Math.max(this.min,o):o<this.minValue?(this.minValue=o,this.maxValue=o):this.maxValue=Math.min(this.max,o),r!==(i==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(e&&(e.open=!0),t&&(t.open=!1)):this.activeThumb==="max"&&(t&&(t.open=!0),e&&(e.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");e&&(e.open=!1),t&&(t.open=!1)}updateFormValue(){if(this.isRange){const e=new FormData;e.append(this.name||"",String(this.minValue)),e.append(this.name||"",String(this.maxValue)),this.setValue(e)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const e=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=O(e,this.min,this.maxValue),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value-this.step);this.value=e}}stepUp(){if(this.isRange){const e=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=O(e,this.minValue,this.max),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value+this.step);this.value=e}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("hint"),i=this.label?!0:!!e,o=this.hint?!0:!!t,r=this.hasSlotController.test("reference"),a=z({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),s=[];if(this.withMarkers)for(let m=this.min;m<=this.max;m+=this.step)s.push(this.getPercentageFromValue(m));const l=p`
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
            ${s.map(m=>p`<span part="marker" class="marker" style=${te({"--position":`${m}%`})}></span>`)}
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
          `:"";if(this.isRange){const m=O(this.getPercentageFromValue(this.minValue),0,100),g=O(this.getPercentageFromValue(this.maxValue),0,100);return p`
        ${l}

        <div id="slider" part="slider" class=${a}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${te({"--start":`${Math.min(m,g)}%`,"--end":`${Math.max(m,g)}%`})}
            ></div>

            ${h}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${te({"--position":`${m}%`})}
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
              style=${te({"--position":`${g}%`})}
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
      `}else{const m=O(this.getPercentageFromValue(this.value),0,100),g=O(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return p`
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
              style=${te({"--start":`${g}%`,"--end":`${m}%`})}
            ></div>

            ${h}
            <span id="thumb" part="thumb" style=${te({"--position":`${m}%`})}></span>
          </div>

          ${u} ${d}
        </div>

        ${f("thumb",this.value)}
      `}}};M.formAssociated=!0;M.observeSlots=!0;M.css=[Ee,Nt,up];n([y("#slider")],M.prototype,"slider",2);n([y("#thumb")],M.prototype,"thumb",2);n([y("#thumb-min")],M.prototype,"thumbMin",2);n([y("#thumb-max")],M.prototype,"thumbMax",2);n([y("#track")],M.prototype,"track",2);n([y("#tooltip")],M.prototype,"tooltip",2);n([c()],M.prototype,"label",2);n([c({attribute:"hint"})],M.prototype,"hint",2);n([c({reflect:!0})],M.prototype,"name",2);n([c({type:Number,attribute:"min-value"})],M.prototype,"minValue",2);n([c({type:Number,attribute:"max-value"})],M.prototype,"maxValue",2);n([c({attribute:"value",reflect:!0,type:Number})],M.prototype,"defaultValue",2);n([w()],M.prototype,"value",1);n([c({type:Boolean,reflect:!0})],M.prototype,"range",2);n([c({type:Boolean})],M.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],M.prototype,"readonly",2);n([c({reflect:!0})],M.prototype,"orientation",2);n([c({reflect:!0})],M.prototype,"size",2);n([c({attribute:"indicator-offset",type:Number})],M.prototype,"indicatorOffset",2);n([c({type:Number})],M.prototype,"min",2);n([c({type:Number})],M.prototype,"max",2);n([c({type:Number})],M.prototype,"step",2);n([c({type:Boolean,reflect:!0})],M.prototype,"required",2);n([c({type:Boolean})],M.prototype,"autofocus",2);n([c({attribute:"tooltip-distance",type:Number})],M.prototype,"tooltipDistance",2);n([c({attribute:"tooltip-placement",reflect:!0})],M.prototype,"tooltipPlacement",2);n([c({attribute:"with-markers",type:Boolean})],M.prototype,"withMarkers",2);n([c({attribute:"with-tooltip",type:Boolean})],M.prototype,"withTooltip",2);n([c({attribute:!1})],M.prototype,"valueFormatter",2);M=n([v("wa-slider")],M);var fp=k`
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
`;var Ne=class extends A{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new U(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Fo(this,{onMove:(i,o)=>{let r=this.orientation==="vertical"?o:i;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(s=>{let l;s.endsWith("%")?l=this.size*(parseFloat(s)/100):l=parseFloat(s),t&&this.orientation==="horizontal"&&(l=this.size-l),r>=l-this.snapThreshold&&r<=l+this.snapThreshold&&(r=l)}),this.position=O(this.pixelsToPercentage(r),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&this.orientation==="horizontal"||e.key==="ArrowUp"&&this.orientation==="vertical")&&(t-=i),(e.key==="ArrowRight"&&this.orientation==="horizontal"||e.key==="ArrowDown"&&this.orientation==="vertical")&&(t+=i),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const o=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=o})}this.position=O(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;if(this.size=this.orientation==="vertical"?i:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary){const o=this.pixelsToPercentage(this.cachedPositionInPixels);this.position!==o&&(this.position=o)}}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position);const e=this.percentageToPixels(this.position);this.positionInPixels!==e&&(this.positionInPixels=e),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new In)}handlePositionInPixelsChange(){const e=this.pixelsToPercentage(this.positionInPixels);this.position!==e&&(this.position=e)}handleVerticalChange(){this.detectSize()}render(){const e=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",t=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",i=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.style||(this.style={}),this.primary==="end"?i&&this.orientation==="horizontal"?this.style[e]=`${o} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${o}`:i&&this.orientation==="horizontal"?this.style[e]=`${r} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${r}`,this.style[t]="",p`
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
    `}};Ne.css=fp;n([y(".divider")],Ne.prototype,"divider",2);n([c({type:Number,reflect:!0})],Ne.prototype,"position",2);n([c({attribute:"position-in-pixels",type:Number})],Ne.prototype,"positionInPixels",2);n([c({reflect:!0})],Ne.prototype,"orientation",2);n([c({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);n([c()],Ne.prototype,"primary",2);n([c()],Ne.prototype,"snap",2);n([c({type:Number,attribute:"snap-threshold"})],Ne.prototype,"snapThreshold",2);n([x("position")],Ne.prototype,"handlePositionChange",1);n([x("positionInPixels")],Ne.prototype,"handlePositionInPixelsChange",1);n([x("vertical")],Ne.prototype,"handleVerticalChange",1);Ne=n([v("wa-split-panel")],Ne);var mp=k`
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
`;var xe=class extends Q{constructor(){super(...arguments),this.hasSlotController=new qe(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,Wo()]}get value(){return this._value??"on"}set value(e){this._value=e}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}firstUpdated(e){super.firstUpdated(e),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),(e.has("value")||e.has("checked")||e.has("defaultChecked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(e??"on",t)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,t=this.hint?!0:!!e;return p`
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
        class=${z({"has-slotted":t})}
        aria-hidden=${t?"false":"true"}
        >${this.hint}</slot
      >
    `}};xe.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};xe.css=[Nt,Ee,mp];n([y('input[type="checkbox"]')],xe.prototype,"input",2);n([c()],xe.prototype,"title",2);n([c({reflect:!0})],xe.prototype,"name",2);n([c({reflect:!0})],xe.prototype,"value",1);n([c({reflect:!0})],xe.prototype,"size",2);n([c({type:Boolean})],xe.prototype,"disabled",2);n([c({type:Boolean,attribute:!1})],xe.prototype,"checked",1);n([c({type:Boolean,attribute:"checked",reflect:!0})],xe.prototype,"defaultChecked",2);n([c({type:Boolean,reflect:!0})],xe.prototype,"required",2);n([c({attribute:"hint"})],xe.prototype,"hint",2);n([c({attribute:"with-hint",type:Boolean})],xe.prototype,"withHint",2);n([x(["checked","defaultChecked"])],xe.prototype,"handleStateChange",1);n([x("disabled",{waitUntilFirstUpdate:!0})],xe.prototype,"handleDisabledChange",1);xe=n([v("wa-switch")],xe);var gp=k`
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
`;var bp=0,Mt=class extends A{constructor(){super(...arguments),this.attrId=++bp,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,p`
      <div
        part="base"
        class=${z({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Mt.css=gp;n([y(".tab")],Mt.prototype,"tab",2);n([c({reflect:!0})],Mt.prototype,"panel",2);n([c({type:Boolean,reflect:!0})],Mt.prototype,"active",2);n([c({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);n([c({type:Number,reflect:!0})],Mt.prototype,"tabIndex",2);n([x("active")],Mt.prototype,"handleActiveChange",1);n([x("disabled")],Mt.prototype,"handleDisabledChange",1);Mt=n([v("wa-tab")],Mt);var wp=class extends Event{constructor(e){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var vp=class extends Event{constructor(e){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var yp=k`
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
`;var tt=class extends A{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new U(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels());const t=e.filter(i=>i.target.closest("wa-tab-group")===this);if(t.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(t.some(i=>i.attributeName==="active")){const o=t.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="wa-tab").map(r=>r.target).find(r=>r.active);o&&o.closest("wa-tab-group")===this&&this.setActiveTab(o)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,i)=>{if(t[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const o=this.tabs.find(r=>r.panel===this.active);o&&this.setActiveTab(o)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});i.unobserve(t[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const i=e.target.closest("wa-tab");i?.closest("wa-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(e){const i=e.target.closest("wa-tab");if(i?.closest("wa-tab-group")===this){if(["Enter"," "].includes(e.key)){i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),e.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const r=this.tabs.find(l=>l.matches(":focus")),a=this.localize.dir()==="rtl";let s=null;if(r?.tagName.toLowerCase()==="wa-tab"){if(e.key==="Home")s=this.focusableTabs[0];else if(e.key==="End")s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const l=this.tabs.findIndex(d=>d===r);s=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const l=this.tabs.findIndex(d=>d===r);s=this.findNextFocusableTab(l,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===s?0:-1}),["top","bottom"].includes(this.placement)&&Oa(s,this.nav,"horizontal"),e.preventDefault()}}}}findNextFocusableTab(e,t){let i=null;const o=t==="forward"?1:-1;let r=e+o;for(;e<this.tabs.length;){if(i=this.tabs[r]||null,i===null){t==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;r+=o}return i}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:"auto",...t},e.closest("wa-tab-group")===this&&e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.active=e.panel,this.activeTab=e,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>o.active=o.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&Oa(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&this.dispatchEvent(new wp({name:i.panel})),this.dispatchEvent(new vp({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(i=>i.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const e=this.tabs.find(t=>t.panel===this.active);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
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
                    name=${e?"chevron-right":"chevron-left"}
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
                    name=${e?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};tt.css=yp;n([y(".tab-group")],tt.prototype,"tabGroup",2);n([y(".body")],tt.prototype,"body",2);n([y(".nav")],tt.prototype,"nav",2);n([w()],tt.prototype,"hasScrollControls",2);n([c({reflect:!0})],tt.prototype,"active",2);n([c()],tt.prototype,"placement",2);n([c()],tt.prototype,"activation",2);n([c({attribute:"without-scroll-controls",type:Boolean})],tt.prototype,"withoutScrollControls",2);n([x("active")],tt.prototype,"updateActiveTab",1);n([x("withoutScrollControls",{waitUntilFirstUpdate:!0})],tt.prototype,"updateScrollControls",1);tt=n([v("wa-tab-group")],tt);var xp=k`
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
`;var kp=0,co=class extends A{constructor(){super(...arguments),this.attrId=++kp,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return p`
      <slot
        part="base"
        class=${z({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};co.css=xp;n([c({reflect:!0})],co.prototype,"name",2);n([c({type:Boolean,reflect:!0})],co.prototype,"active",2);n([x("active")],co.prototype,"handleActiveChange",1);co=n([v("wa-tab-panel")],co);var Cp=k`
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
`;var V=class extends Q{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new qe(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Wo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const e=this.input.value;this.value=e}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(e){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(e){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const e=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${e}px`}if(this.input.style.height){const e=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${e}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(e){e.has("resize")&&this.setTextareaDimensions(),super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const r=t??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(e,r,a,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this._value=null,this.input&&(this.input.value=this.value||""),super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,o=this.hint?!0:!!t;return p`
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
    `}};V.css=[Cp,Nt,Ee];n([y(".control")],V.prototype,"input",2);n([y('[part~="base"]')],V.prototype,"base",2);n([y(".size-adjuster")],V.prototype,"sizeAdjuster",2);n([c()],V.prototype,"title",2);n([c({reflect:!0})],V.prototype,"name",2);n([w()],V.prototype,"value",1);n([c({attribute:"value",reflect:!0})],V.prototype,"defaultValue",2);n([c({reflect:!0})],V.prototype,"size",2);n([c({reflect:!0})],V.prototype,"appearance",2);n([c()],V.prototype,"label",2);n([c({attribute:"hint"})],V.prototype,"hint",2);n([c()],V.prototype,"placeholder",2);n([c({type:Number})],V.prototype,"rows",2);n([c({reflect:!0})],V.prototype,"resize",2);n([c({type:Boolean})],V.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],V.prototype,"readonly",2);n([c({type:Boolean,reflect:!0})],V.prototype,"required",2);n([c({type:Number})],V.prototype,"minlength",2);n([c({type:Number})],V.prototype,"maxlength",2);n([c()],V.prototype,"autocapitalize",2);n([c()],V.prototype,"autocorrect",2);n([c()],V.prototype,"autocomplete",2);n([c({type:Boolean})],V.prototype,"autofocus",2);n([c()],V.prototype,"enterkeyhint",2);n([c({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],V.prototype,"spellcheck",2);n([c()],V.prototype,"inputmode",2);n([c({attribute:"with-label",type:Boolean})],V.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],V.prototype,"withHint",2);n([x("rows",{waitUntilFirstUpdate:!0})],V.prototype,"handleRowsChange",1);n([x("value",{waitUntilFirstUpdate:!0})],V.prototype,"handleValueChange",1);V=n([v("wa-textarea")],V);var Sp=class extends Event{constructor(e){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var $p=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}};var Ep=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Lp=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var Ap=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var zp=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var Tp=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var Rp=k`
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
`;var W=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new zp);const e=vr(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await wr(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new Tp)}isNestedItem(){const e=this.parentElement;return!!e&&W.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new Lp),this.childrenContainer.hidden=!1;const e=vr(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await wr(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new Ap)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new Ep)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new $p)}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>W.isTreeItem(t)&&(e||!t.disabled)):[]}render(){const e=this.localize.dir()==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return p`
      <div
        part="base"
        class="${z({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":t})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${z({"expand-button":!0,"expand-button-visible":t})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${le(this.loading,()=>p` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>p`
                  <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${le(this.selectable,()=>p`
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
    `}};W.css=Rp;n([w()],W.prototype,"indeterminate",2);n([w()],W.prototype,"isLeaf",2);n([w()],W.prototype,"loading",2);n([w()],W.prototype,"selectable",2);n([c({type:Boolean,reflect:!0})],W.prototype,"expanded",2);n([c({type:Boolean,reflect:!0})],W.prototype,"selected",2);n([c({type:Boolean,reflect:!0})],W.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],W.prototype,"lazy",2);n([y("slot:not([name])")],W.prototype,"defaultSlot",2);n([y("slot[name=children]")],W.prototype,"childrenSlot",2);n([y(".item")],W.prototype,"itemElement",2);n([y(".children")],W.prototype,"childrenContainer",2);n([y(".expand-button slot")],W.prototype,"expandButtonSlot",2);n([x("loading",{waitUntilFirstUpdate:!0})],W.prototype,"handleLoadingChange",1);n([x("disabled")],W.prototype,"handleDisabledChange",1);n([x("expanded")],W.prototype,"handleExpandedState",1);n([x("indeterminate")],W.prototype,"handleIndeterminateStateChange",1);n([x("selected")],W.prototype,"handleSelectedChange",1);n([x("expanded",{waitUntilFirstUpdate:!0})],W.prototype,"handleExpandedChange",1);n([x("expanded",{waitUntilFirstUpdate:!0})],W.prototype,"handleExpandAnimation",1);n([x("lazy",{waitUntilFirstUpdate:!0})],W.prototype,"handleLazyChange",1);W=n([v("wa-tree-item")],W);var Dp=k`
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
`;function Ys(e,t=!1){function i(a){const s=a.getChildrenItems({includeDisabled:!1});if(s.length){const l=s.every(h=>h.selected),d=s.every(h=>!h.selected&&!h.indeterminate);a.selected=l,a.indeterminate=!l&&!d}}function o(a){const s=a.parentElement;W.isTreeItem(s)&&(i(s),o(s))}function r(a){for(const s of a.getChildrenItems())s.selected=t?a.selected||s.selected:!s.disabled&&a.selected,r(s);t&&i(a)}r(e),o(e)}var gi=class extends A{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new U(this),this.initTreeItem=e=>{e.updateComplete.then(()=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const i=e.querySelector(`[slot="${t}-icon"]`),o=this.getExpandButtonIcon(t);o&&(i===null?e.append(o):i.hasAttribute("data-default")&&i.replaceWith(o))})})},this.handleTreeChanged=e=>{for(const t of e){const i=[...t.addedNodes].filter(W.isTreeItem),o=[...t.removedNodes].filter(W.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),W.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(e){const i=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const o=i.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),o.setAttribute("data-default",""),o.slot=`${e}-icon`,o}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Ys(e);else if(this.selection==="single"||e.isLeaf){const o=this.getAllTreeItems();for(const r of o)r.selected=r===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const i=this.selectedItems;(t.length!==i.length||i.some(o=>!t.includes(o)))&&Promise.all(i.map(o=>o.updateComplete)).then(()=>{this.dispatchEvent(new Sp({selection:i}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(e){e?.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(r=>["input","textarea"].includes(r?.tagName?.toLowerCase())))return;const t=this.getFocusableItems(),i=this.matches(":dir(ltr)"),o=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const r=t.findIndex(d=>d.matches(":focus")),a=t[r],s=d=>{const h=t[O(d,0,t.length-1)];this.focusItem(h)},l=d=>{a.expanded=d};e.key==="ArrowDown"?s(r+1):e.key==="ArrowUp"?s(r-1):i&&e.key==="ArrowRight"||o&&e.key==="ArrowLeft"?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?s(r+1):l(!0):i&&e.key==="ArrowLeft"||o&&e.key==="ArrowRight"?!a||a.disabled||a.isLeaf||!a.expanded?s(r-1):l(!1):e.key==="Home"?s(0):e.key==="End"?s(t.length-1):(e.key==="Enter"||e.key===" ")&&(a.disabled||this.selectItem(a))}}handleClick(e){const t=e.target,i=t.closest("wa-tree-item"),o=e.composedPath().some(r=>r?.classList?.contains("expand-button"));!i||i.disabled||t!==this.clickTarget||(o?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const i of t)i.updateComplete.then(()=>{i.selectable=e});e&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(i=>{i.updateComplete.then(()=>{Ys(i,!0)})}))}get selectedItems(){const e=this.getAllTreeItems(),t=i=>i.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(i=>{if(i.disabled)return!1;const o=i.parentElement?.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(i),!t.has(i)})}render(){return p`
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
    `}};gi.css=Dp;n([y("slot:not([name])")],gi.prototype,"defaultSlot",2);n([y("slot[name=expand-icon]")],gi.prototype,"expandedIconSlot",2);n([y("slot[name=collapse-icon]")],gi.prototype,"collapsedIconSlot",2);n([c()],gi.prototype,"selection",2);n([x("selection")],gi.prototype,"handleSelectionChange",1);gi=n([v("wa-tree")],gi);var Ip=k`
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
`;var Be=class extends A{constructor(){super(...arguments),this.localize=new U(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(e){const t=jr(e),i=[];for(const o of t){let r;if(o.endsWith("%")){const a=parseFloat(o.slice(0,-1));if(!isNaN(a))r=Math.max(0,a/100);else continue}else if(r=parseFloat(o),!isNaN(r))r=Math.max(0,r);else continue;i.push(r)}return[...new Set(i)].sort((o,r)=>o-r)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let e=0,t=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let i=1;i<this.availableZoomLevels.length;i++){const o=Math.abs(this.availableZoomLevels[i]-this.zoom);o<t&&(t=o,e=i)}return e}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(e){if(e.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),e.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const t=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[t]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[t])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const e=this.getCurrentZoomIndex();e<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[e+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const e=this.getCurrentZoomIndex();e>0&&(this.zoom=this.availableZoomLevels[e-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return p`
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
    `}};Be.css=Ip;n([y("#iframe")],Be.prototype,"iframe",2);n([c()],Be.prototype,"src",2);n([c()],Be.prototype,"srcdoc",2);n([c({type:Boolean})],Be.prototype,"allowfullscreen",2);n([c()],Be.prototype,"loading",2);n([c()],Be.prototype,"referrerpolicy",2);n([c()],Be.prototype,"sandbox",2);n([c({type:Number,reflect:!0})],Be.prototype,"zoom",2);n([c({attribute:"zoom-levels"})],Be.prototype,"zoomLevels",2);n([c({type:Boolean,attribute:"without-controls",reflect:!0})],Be.prototype,"withoutControls",2);n([c({type:Boolean,attribute:"without-interaction",reflect:!0})],Be.prototype,"withoutInteraction",2);Be=n([v("wa-zoomable-frame")],Be);new MutationObserver(e=>{for(const{addedNodes:t}of e)for(const i of t)i.nodeType===Node.ELEMENT_NODE&&Op(i)});async function Op(e){const t=e instanceof Element?e.tagName.toLowerCase():"",i=t?.startsWith("wa-"),o=[...e.querySelectorAll(":not(:defined)")].map(s=>s.tagName.toLowerCase()).filter(s=>s.startsWith("wa-"));i&&!customElements.get(t)&&o.push(t);const r=[...new Set(o)],a=await Promise.allSettled(r.map(s=>_p(s)));for(const s of a)s.status==="rejected"&&console.warn(s.reason);await new Promise(requestAnimationFrame),e.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function _p(e){if(customElements.get(e))return Promise.resolve();const t=e.replace(/^wa-/i,""),i=Zl(`components/${t}/${t}.js`);return new Promise((o,r)=>{import(i).then(()=>o()).catch(()=>r(new Error(`Unable to autoload <${e}> from ${i}`)))})}const Pp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Fp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-22%200%20300%20300'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M10.5838307,156.409656%20L10.5838307,156.196646%20L10.5838307,123.657627%20L17.7200527,123.657627%20L17.7200527,158.912657%20C18.0516208,161.753926%2017.8075656,164.63288%2017.0023629,167.377784%20C16.19722,170.122687%2014.8474392,172.677251%2013.0335946,174.88924%20C9.6624625,177.797086%205.34298451,179.369568%200.891381719,179.309391%20L0.145805038,173.983903%20C3.01718628,173.985518%205.78730255,172.922981%207.92105685,171.001585%20C9.83826599,168.76489%2010.5838307,165.729334%2010.5838307,156.409656%20Z%20M63.8037763,152.209035%20C63.8037763,156.203166%2063.8037763,159.771277%2064.1232613,162.860071%20L57.7859014,162.860071%20L57.3598815,156.522711%20C56.0343268,158.765028%2054.1386519,160.616318%2051.8656486,161.888456%20C49.5925854,163.160593%2047.0232464,163.808237%2044.4187946,163.765408%20C38.2412071,163.765408%2030.8919752,160.410366%2030.8919752,146.723715%20L30.8919752,123.983721%20L38.0281972,123.983721%20L38.0281972,145.285823%20C38.0281972,152.688352%2040.3181887,157.641058%2046.7620834,157.641058%20C48.0878176,157.655354%2049.4030239,157.404719%2050.6306575,156.903927%20C51.8582911,156.403136%2052.9735276,155.662296%2053.9110465,154.724777%20C54.8485056,153.787318%2055.5894046,152.672022%2056.0901963,151.444448%20C56.5909282,150.216815%2056.8415633,148.901549%2056.8273268,147.575814%20L56.8273268,123.717444%20L63.9634889,123.717444%20L63.9634889,151.996025%20L63.8037763,152.209035%20Z%20M77.330762,136.653806%20C77.330762,131.70104%2077.330762,127.653648%2077.0112304,123.979032%20L83.4018876,123.979032%20L83.7213726,130.635931%20C85.1452074,128.23088%2087.1949721,126.257257%2089.6521533,124.925482%20C92.1093944,123.593709%2094.8819333,122.953703%2097.6742718,123.073695%20C107.153723,123.073695%20114.289945,131.008713%20114.289945,142.831393%20C114.289945,156.784292%20105.715831,163.707504%2096.4493898,163.707504%20C94.0776877,163.813321%2091.7187865,163.305232%2089.6009496,162.232346%20C87.4831127,161.159401%2085.6780613,159.558028%2084.3604623,157.583154%20L84.3604623,178.885226%20L77.330762,178.885226%20L77.330762,136.813578%20L77.330762,136.653806%20Z%20M84.3604623,147.038594%20C84.3797833,148.004885%2084.4867369,148.967408%2084.6800071,149.914378%20C85.2842232,152.279021%2086.6597255,154.374666%2088.5887785,155.869683%20C90.5178913,157.364761%2092.8904309,158.173852%2095.3310427,158.168947%20C102.840047,158.168947%20107.260258,152.044597%20107.260258,143.150938%20C107.260258,135.375686%20103.106354,128.718758%2095.59735,128.718758%20C92.6257387,128.962101%2089.844945,130.280974%2087.7762781,132.428062%20C85.7076111,134.575149%2084.4931374,137.403079%2084.3604623,140.381689%20L84.3604623,147.038594%20Z%20M127.004503,123.94359%20L135.578617,146.896647%20C136.483954,149.452886%20137.442529,152.54168%20138.081618,154.831671%20C138.827183,152.488442%20139.625985,149.506124%20140.58462,146.736875%20L148.359872,123.94359%20L155.868876,123.94359%20L145.21784,151.636343%20C139.892293,164.950152%20136.643726,171.820127%20131.744199,175.97403%20C129.27643,178.228071%20126.267791,179.805756%20123.010354,180.553953%20L121.252929,174.589376%20C123.530581,173.840999%20125.645092,172.666304%20127.48382,171.127799%20C130.081872,169.010501%20132.14366,166.310102%20133.501635,163.246013%20C133.792288,162.715372%20133.990404,162.139031%20134.087428,161.541814%20C134.026892,160.899135%20133.865146,160.270094%20133.60817,159.677902%20L119.122716,123.837079%20L126.897968,123.837079%20L127.004503,123.94359%20Z%20M174.813541,112.770851%20L174.813541,123.954441%20L185.038557,123.954441%20L185.038557,129.279989%20L174.813541,129.279989%20L174.813541,150.262575%20C174.813541,155.055568%20176.198196,157.824817%20180.139089,157.824817%20C181.538758,157.847727%20182.935316,157.686579%20184.292992,157.345559%20L184.612537,162.671047%20C182.57671,163.376355%20180.428486,163.701283%20178.275118,163.629682%20C176.849069,163.718929%20175.420569,163.498622%20174.087657,162.983833%20C172.754744,162.469044%20171.549004,161.671976%20170.553103,160.647363%20C168.383883,157.745977%20167.394359,154.130491%20167.783854,150.528882%20L167.783854,129.226751%20L161.712742,129.226751%20L161.712742,123.901204%20L167.890329,123.901204%20L167.890329,114.421764%20L174.813541,112.770851%20Z%20M198.184399,144.647511%20C198.03988,146.453639%20198.289199,148.269577%20198.915189,149.969888%20C199.541179,151.670199%20200.528884,153.214267%20201.810114,154.495437%20C203.091285,155.776667%20204.635352,156.764373%20206.335664,157.390363%20C208.035975,158.016352%20209.851913,158.265672%20211.658041,158.121153%20C215.311153,158.202863%20218.940457,157.513288%20222.309077,156.097409%20L223.533958,161.422956%20C219.400274,163.12572%20214.955358,163.942168%20210.486396,163.819423%20C207.881107,163.997798%20205.268101,163.61054%20202.826592,162.684147%20C200.385023,161.757814%20198.172795,160.3143%20196.341489,158.452721%20C194.51022,156.591082%20193.103284,154.355345%20192.217196,151.898941%20C191.331104,149.442478%20190.986827,146.82349%20191.207978,144.221491%20C191.207978,132.505346%20198.184399,123.238905%20209.581059,123.238905%20C222.362314,123.238905%20225.557643,134.422495%20225.557643,141.558717%20C225.625954,142.658281%20225.625954,143.761016%20225.557643,144.860581%20L198.024687,144.860581%20L198.184399,144.647511%20Z%20M219.06051,139.322023%20C219.266043,137.898188%20219.163995,136.446897%20218.761184,135.065892%20C218.358433,133.684886%20217.664311,132.406228%20216.725656,131.316115%20C215.786941,130.226062%20214.625525,129.349856%20213.31959,128.746561%20C212.013656,128.143278%20210.59353,127.826939%20209.155039,127.818864%20C206.228949,128.030665%20203.487515,129.327603%20201.467959,131.455549%20C199.448402,133.583436%20198.296377,136.388874%20198.237697,139.322023%20L219.06051,139.322023%20Z%20M236.385366,136.053478%20C236.385366,131.473555%20236.385366,127.532637%20236.065834,123.911277%20L242.456492,123.911277%20L242.456492,131.526792%20L242.775977,131.526792%20C243.446769,129.176325%20244.83268,127.093027%20246.741335,125.566097%20C248.64999,124.039161%20250.986699,123.144369%20253.427072,123.005938%20C254.098762,122.917777%20254.779066,122.917777%20255.450756,123.005938%20L255.450756,129.66288%20C254.63688,129.568608%20253.814868,129.568608%20253.000992,129.66288%20C250.58353,129.756495%20248.282771,130.726973%20246.528505,132.393068%20C244.774238,134.059104%20243.686458,136.306745%20243.468304,138.716252%20C243.269171,139.805946%20243.162278,140.910475%20243.148819,142.018055%20L243.148819,162.734394%20L236.11909,162.734394%20L236.11909,136.106715%20L236.385366,136.053478%20Z'%20fill='%234E4E4E'%3e%3c/path%3e%3cpath%20d='M233.257943,16.9621357%20C233.476636,20.5398773%20232.625434,24.1017075%20230.812666,27.1939108%20C228.999898,30.286174%20226.307754,32.7687777%20223.079047,34.3255867%20C219.85034,35.8823358%20216.231324,36.4427655%20212.683013,35.9355136%20C209.134702,35.4282017%20205.817704,33.8761781%20203.154559,31.4770796%20C200.491421,29.0780409%20198.602703,25.9404959%20197.729013,22.4642047%20C196.855323,18.9879135%20197.036209,15.330196%20198.248625,11.9570899%20C199.461041,8.5839838%20201.650109,5.64808944%20204.536953,3.52346926%20C207.423803,1.39884909%20210.877782,0.181657262%20214.458814,0.0269503701%20C216.806708,-0.10224713%20219.156996,0.233972409%20221.374429,1.01627461%20C223.591922,1.79857323%20225.632893,3.01152758%20227.379981,4.58537259%20C229.12701,6.15922358%20230.54576,8.06291398%20231.554522,10.1869719%20C232.563283,12.3110298%20233.142196,14.6135829%20233.257943,16.9621357%20Z'%20fill='%23767677'%3e%3c/path%3e%3cpath%20d='M127.952969,225.540984%20C80.0236372,225.540984%2037.8984531,208.339518%2016.1170646,182.936721%20C24.5683135,205.78944%2039.8176362,225.504615%2059.8124569,239.428562%20C79.8070981,253.352629%20103.588124,260.816651%20127.952969,260.816651%20C152.318411,260.816651%20176.098839,253.352629%20196.094019,239.428562%20C216.0886,225.504615%20231.337863,205.78944%20239.789471,182.936721%20C218.061379,208.339518%20176.095848,225.540984%20127.952969,225.540984%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M127.952969,60.3543133%20C175.882898,60.3543133%20218.008142,77.5557785%20239.789471,102.958396%20C231.337863,80.1058563%20216.0886,60.3906823%20196.094019,46.4667348%20C176.098839,32.5427873%20152.318411,25.0784666%20127.952969,25.0784666%20C103.588124,25.0784666%2079.8070981,32.5427873%2059.8124569,46.4667348%20C39.8176362,60.3906823%2024.5683135,80.1058563%2016.1170646,102.958396%20C37.8984531,77.502541%2079.8106871,60.3543133%20127.952969,60.3543133%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M61.9716874,274.975202%20C62.2528294,279.48161%2061.186045,283.969713%2058.9072992,287.867658%20C56.6284936,291.765602%2053.2409116,294.896926%2049.1761363,296.862707%20C45.1113611,298.828488%2040.5533909,299.539717%2036.0829934,298.905772%20C31.6125362,298.271767%2027.4320141,296.321359%2024.0740419,293.30297%20C20.7160636,290.284582%2018.3326671,286.334835%2017.2274978,281.957035%20C16.1223339,277.579176%2016.3454363,272.971497%2017.868382,268.720869%20C19.3913284,264.470301%2022.1451683,260.769335%2025.7790187,258.089483%20C29.4129289,255.40962%2033.7623156,253.872201%2038.2730898,253.673106%20C41.2280121,253.515051%2044.1851476,253.940738%2046.9755719,254.925846%20C49.7659364,255.910962%2052.3349165,257.436187%2054.5356604,259.414404%20C56.7364042,261.392633%2058.5259031,263.785032%2059.8017495,266.455044%20C61.0776558,269.124996%2061.8150255,272.02022%2061.9716874,274.975202%20Z'%20fill='%239E9E9E'%3e%3c/path%3e%3cpath%20d='M21.5641016,54.5650606%20C18.9814831,54.6363631%2016.4354131,53.9424806%2014.2460944,52.570687%20C12.0567996,51.1988336%2010.3219858,49.2102622%209.25983722,46.8551295%20C8.19768984,44.499937%207.85562972,41.8832824%208.276674,39.3342215%20C8.69771827,36.7851606%209.86306631,34.4174662%2011.6261678,32.5289814%20C13.3892752,30.6404727%2015.6714246,29.3154324%2018.1856119,28.7204982%20C20.6997394,28.1255646%2023.3336813,28.2873008%2025.7562282,29.1853653%20C28.1787154,30.0834346%2030.2815979,31.6777312%2031.800363,33.767765%20C33.3191879,35.8578106%2034.1861222,38.3502842%2034.2921188,40.9317063%20C34.3930308,44.4222341%2033.113057,47.8117302%2030.7300493,50.3642007%20C28.3470417,52.916731%2025.0533134,54.4262842%2021.5641016,54.5650606%20Z'%20fill='%23616262'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Mp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='4'%20y='3'%20width='12'%20height='8'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2'%20y1='20'%20x2='18'%20y2='20'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='20'%20y1='2'%20x2='20'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Np="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='10'%20y='4'%20width='12'%20height='16'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='9'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='2.5'%20y1='15'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Bp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='8'%20y='4'%20width='8'%20height='8'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='21.5'%20y1='2'%20x2='21.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='6'%20y1='20'%20x2='18'%20y2='20'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Vp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='8'%20y='4'%20width='8'%20height='16'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='21.5'%20y1='2'%20x2='21.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Up="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%3e%3cpath%20fill-rule='evenodd'%20d='M8%200C3.58%200%200%203.58%200%208c0%203.54%202.29%206.53%205.47%207.59.4.07.55-.17.55-.38%200-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01%201.08.58%201.23.82.72%201.21%201.87.87%202.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95%200-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12%200%200%20.67-.21%202.2.82.64-.18%201.32-.27%202-.27.68%200%201.36.09%202%20.27%201.53-1.04%202.2-.82%202.2-.82.44%201.1.16%201.92.08%202.12.51.56.82%201.27.82%202.15%200%203.07-1.87%203.75-3.65%203.95.29.25.54.73.54%201.48%200%201.07-.01%201.93-.01%202.2%200%20.21.15.46.55.38A8.013%208.013%200%200016%208c0-4.42-3.58-8-8-8z'/%3e%3c/svg%3e",qp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";cc("lyra",{resolver:e=>new URL(Object.assign({"../icons/js.svg":Pp,"../icons/jupyter.svg":Fp,"../icons/layout-standard-bottom-panel.svg":Mp,"../icons/layout-standard-bottom-sidebar.svg":Np,"../icons/layout-standard-full.svg":Bp,"../icons/layout-standard.svg":Vp,"../icons/mark-github.svg":Up,"../icons/python.svg":qp})[`../icons/${e}.svg`],import.meta.url).href,mutator:e=>{e.setAttribute("fill","currentColor"),e.setAttribute("stroke","currentColor")}});var ur={exports:{}};var Hp=ur.exports,Zs;function Wp(){return Zs||(Zs=1,(function(e){(function(t,i){e.exports?e.exports=i():t.Toastify=i()})(Hp,function(t){var i=function(s){return new i.lib.init(s)},o="1.12.0";i.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},i.lib=i.prototype={toastify:o,constructor:i,init:function(s){return s||(s={}),this.options={},this.toastElement=null,this.options.text=s.text||i.defaults.text,this.options.node=s.node||i.defaults.node,this.options.duration=s.duration===0?0:s.duration||i.defaults.duration,this.options.selector=s.selector||i.defaults.selector,this.options.callback=s.callback||i.defaults.callback,this.options.destination=s.destination||i.defaults.destination,this.options.newWindow=s.newWindow||i.defaults.newWindow,this.options.close=s.close||i.defaults.close,this.options.gravity=s.gravity==="bottom"?"toastify-bottom":i.defaults.gravity,this.options.positionLeft=s.positionLeft||i.defaults.positionLeft,this.options.position=s.position||i.defaults.position,this.options.backgroundColor=s.backgroundColor||i.defaults.backgroundColor,this.options.avatar=s.avatar||i.defaults.avatar,this.options.className=s.className||i.defaults.className,this.options.stopOnFocus=s.stopOnFocus===void 0?i.defaults.stopOnFocus:s.stopOnFocus,this.options.onClick=s.onClick||i.defaults.onClick,this.options.offset=s.offset||i.defaults.offset,this.options.escapeMarkup=s.escapeMarkup!==void 0?s.escapeMarkup:i.defaults.escapeMarkup,this.options.ariaLive=s.ariaLive||i.defaults.ariaLive,this.options.style=s.style||i.defaults.style,s.backgroundColor&&(this.options.style.background=s.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var s=document.createElement("div");s.className="toastify on "+this.options.className,this.options.position?s.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(s.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):s.className+=" toastify-right",s.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var l in this.options.style)s.style[l]=this.options.style[l];if(this.options.ariaLive&&s.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)s.appendChild(this.options.node);else if(this.options.escapeMarkup?s.innerText=this.options.text:s.innerHTML=this.options.text,this.options.avatar!==""){var d=document.createElement("img");d.src=this.options.avatar,d.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?s.appendChild(d):s.insertAdjacentElement("afterbegin",d)}if(this.options.close===!0){var h=document.createElement("button");h.type="button",h.setAttribute("aria-label","Close"),h.className="toast-close",h.innerHTML="&#10006;",h.addEventListener("click",(function(E){E.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?s.insertAdjacentElement("afterbegin",h):s.appendChild(h)}if(this.options.stopOnFocus&&this.options.duration>0){var f=this;s.addEventListener("mouseover",function(E){window.clearTimeout(s.timeOutValue)}),s.addEventListener("mouseleave",function(){s.timeOutValue=window.setTimeout(function(){f.removeElement(s)},f.options.duration)})}if(typeof this.options.destination<"u"&&s.addEventListener("click",(function(E){E.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&s.addEventListener("click",(function(E){E.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var m=r("x",this.options),g=r("y",this.options),b=this.options.position=="left"?m:"-"+m,C=this.options.gravity=="toastify-top"?g:"-"+g;s.style.transform="translate("+b+","+C+")"}return s},showToast:function(){this.toastElement=this.buildToast();var s;if(typeof this.options.selector=="string"?s=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?s=this.options.selector:s=document.body,!s)throw"Root element is not defined";var l=i.defaults.oldestFirst?s.firstChild:s.lastChild;return s.insertBefore(this.toastElement,l),i.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(s){s.className=s.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),s.parentNode&&s.parentNode.removeChild(s),this.options.callback.call(s),i.reposition()}).bind(this),400)}},i.reposition=function(){for(var s={top:15,bottom:15},l={top:15,bottom:15},d={top:15,bottom:15},h=document.getElementsByClassName("toastify"),u,f=0;f<h.length;f++){a(h[f],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var m=h[f].offsetHeight;u=u.substr(9,u.length-1);var g=15,b=window.innerWidth>0?window.innerWidth:screen.width;b<=360?(h[f].style[u]=d[u]+"px",d[u]+=m+g):a(h[f],"toastify-left")===!0?(h[f].style[u]=s[u]+"px",s[u]+=m+g):(h[f].style[u]=l[u]+"px",l[u]+=m+g)}return this};function r(s,l){return l.offset[s]?isNaN(l.offset[s])?l.offset[s]:l.offset[s]+"px":"0px"}function a(s,l){return!s||typeof l!="string"?!1:!!(s.className&&s.className.trim().split(/\s+/gi).indexOf(l)>-1)}return i.lib.init.prototype=i.lib,i})})(ur)),ur.exports}var jp=Wp();const Kp=Fl(jp);class is{constructor(t){this.children=[],this.variables=t,this.proxy=new Proxy(t,this)}get(t,i){return t[i]||this.parent?.getProxy()[i]}set(t,i,o){t[i]=o}put(t,i){this.variables[t]=i}getProxy(){return this.proxy}createChild(t={}){const i=new is(t);return i.parent=this,this.children.push(i),i}getChildren(){return this.children}getParent(){return this.parent}destroy(){const t=this.parent?.children.indexOf(this);t!==void 0&&t>=0&&this.parent?.children.splice(t,1),this.parent=void 0}}const ke=new is({}),ki=ke.createChild({}),Qs={debug:0,info:1,warning:2,error:3};let Gp="debug";const Zi={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Er=null;const _a=[];function zt(e){if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);if(e instanceof Error)return`${e.name}: ${e.message}`;try{return JSON.stringify(e)}catch{return String(e)}}class Xp{constructor(t){this.source=t}info(t,...i){const o=i.length===0?t:`${t} ${i.map(r=>zt(r)).join(" ")}`;this.log(o,"info")}warning(t,...i){const o=i.length===0?t:`${t} ${i.map(r=>zt(r)).join(" ")}`;this.log(o,"warning")}warn(t,...i){const o=i.length===0?t:`${t} ${i.map(r=>zt(r)).join(" ")}`;this.log(o,"warning")}error(t,...i){const o=i.length===0?t:`${t} ${i.map(r=>zt(r)).join(" ")}`;this.log(o,"error")}debug(t,...i){const o=i.length===0?t:`${t} ${i.map(r=>zt(r)).join(" ")}`;this.log(o,"debug")}log(t,i){Qi(this.source,t,i)}}function Yp(e){return Qs[e]>=Qs[Gp]}function Qi(e,t,i){Yp(i)&&(Er?Er(e,t,i):(_a.push({source:e,message:t,level:i}),Zi[i==="error"?"error":i==="warning"?"warn":i==="debug"?"debug":"log"](`[${e}] ${t}`)))}function Zp(){console.log=function(...e){Zi.log.apply(console,e),Qi("Console",e.map(t=>zt(t)).join(" "),"info")},console.info=function(...e){Zi.info.apply(console,e),Qi("Console",e.map(t=>zt(t)).join(" "),"info")},console.warn=function(...e){Zi.warn.apply(console,e),Qi("Console",e.map(t=>zt(t)).join(" "),"warning")},console.error=function(...e){Zi.error.apply(console,e),Qi("Console",e.map(t=>zt(t)).join(" "),"error")},console.debug=function(...e){Zi.debug.apply(console,e),Qi("Console",e.map(t=>zt(t)).join(" "),"debug")}}Zp();function Qp(e){for(Er=e;_a.length>0;){const t=_a.shift();t&&e(t.source,t.message,t.level)}}function Jp(){Er=null}function ti(e){return new Xp(e)}const K=ti("System");ke.put("logger",K);const os=ti("Toast"),ef=4e3,tf={duration:ef,gravity:"bottom",position:"right",close:!0},rs=(e,t)=>{Kp({...tf,text:e,style:t}).showToast()},jt=e=>{os.info(e),rs(e,{background:"var(--wa-color-brand-50)",color:"var(--wa-color-brand-on)"})},re=e=>{os.error(e),rs(e,{background:"var(--wa-color-danger-50)",color:"var(--wa-color-danger-on)"})},of=e=>{os.warn(e),rs(e,{background:"var(--wa-color-warning-50)",color:"var(--wa-color-warning-on)"})};class rf{constructor(){this.globalNameRemaps=new Map,this.appNameRemaps=new Map}setGlobalNameRemap(t,i){this.globalNameRemaps.set(t,this.normalizeTargets(i))}resetForTesting(){this.globalNameRemaps.clear(),this.appNameRemaps.clear()}applyAppNameRemaps(t){if(this.appNameRemaps.clear(),!!t)for(const i of t)this.appNameRemaps.set(i.name,this.normalizeTargets(i.targets))}getEffectiveTargets(t,i){const o=i.name;if(!o)return[t];const r=this.appNameRemaps.get(o);if(r)return r.length>0?r:[];const a=this.globalNameRemaps.get(o);return a?a.length>0?a:[]:[t]}listNameRemaps(){const t={},i=new Set([...this.globalNameRemaps.keys(),...this.appNameRemaps.keys()]);for(const o of i)t[o]={appTargets:this.appNameRemaps.get(o),globalTargets:this.globalNameRemaps.get(o)};return t}normalizeTargets(t){const i=new Set,o=[];for(const r of t)!r||i.has(r)||(i.add(r),o.push(r));return o}}const Lr=new rf;ke.put("contributionTargetMappingRegistry",Lr);const St="events/contributionregistry/contributionsChanged";class af{constructor(){this.contributions=new Map}registerContribution(t,i){const o=this.getOrCreateSlot(t);if("command"in i){const a=i;a.disabled instanceof Function&&(a.disabled=new xn.Computed(a.disabled))}o.push(i),_(St,{target:t,contributions:o});const r=Lr.getEffectiveTargets(t,i);for(const a of r){if(a===t)continue;const s=this.getContributions(a);_(St,{target:a,contributions:s})}}getContributions(t){const i=[];for(const[o,r]of this.contributions.entries()){const a=r;for(const s of a)Lr.getEffectiveTargets(o,s).includes(t)&&i.push(s)}return i.length===0&&this.getOrCreateSlot(t),i}getOrCreateSlot(t){return this.contributions.has(t)||this.contributions.set(t,[]),this.contributions.get(t)}}const B=new af;ke.put("contributionRegistry",B);const Xg={},Dt=xi(null),eo=xi(null),Pa=xi(null),Fa=xi(0),Lt=xi(void 0);xi({name:"",timestamp:0});const Yn="events/commandregistry/commandRegistered";class sf{constructor(t,i,o,r,a){this.id=t,this.name=i,this.description=o,this.parameters=r||[],this.output=a||[]}}class Yg{async execute(t,i){return Gt.execute(t,i)}async undo(){}async redo(){}}class nf{constructor(){this.commands={},this.handlers=new Map}registerHandler(t,i){this.handlers.has(t)||this.handlers.set(t,[]);const o=this.handlers.get(t);o.push(i),o.sort((r,a)=>(a.ranking??0)-(r.ranking??0))}getHandler(t){return this.handlers.get(t)}createExecutionContext(t){return{params:t||{},activePart:Dt.get(),activeEditor:eo.get()}}execute(t,i={}){const o=this.getHandler(t);if(!o)throw K.debug(`[CommandRegistry] No handlers registered for command: ${t}`),new Error(`No handlers registered for command: ${t}`);const r=this.getCommand(t),a=i.params?` params: ${JSON.stringify(i.params)}`:"";K.debug(`[CommandRegistry] Executing command: ${t}${r?` (${r.name})`:""}${a}`);for(const s of o)if(s.canExecute===void 0||s.canExecute(i))try{const l=s.execute(i);return K.debug(`[CommandRegistry] Command executed successfully: ${t} (result: ${l})`),l}catch(l){const d=l instanceof Error?l.message:String(l);throw K.error(`[CommandRegistry] Command execution failed: ${t} - ${d}`),l}K.error(`[CommandRegistry] No handler found to execute command: ${t}`)}createAndRegisterCommand(t,i,o,r,a){const s=new sf(t,i,o,r);this.registerCommand(s),a&&this.registerHandler(t,a)}registerCommand(t){this.commands[t.id]=t,_(Yn,t)}hasCommand(t){return t in this.commands}listCommands(t){return t?Object.values(this.commands).filter(i=>(Gt.getHandler(i.id)||[]).some(r=>r.canExecute===void 0||r.canExecute(t))).reduce((i,o)=>(i[o.id]=o,i),{}):this.commands}getCommand(t){return this.commands[t]}registerAll(t){const i=t.command.id;this.registerCommand(t.command),t.handler&&this.registerHandler(i,t.handler),t.contribution&&t.contribution.target&&B.registerContribution(t.contribution.target,{command:i,...t.contribution})}}const Gt=new nf;ke.put("commandRegistry",Gt);const pe=e=>{Gt.registerAll(e)},Zn=(e,t)=>{const i=new xn.subtle.Watcher(async()=>{try{await 0,t(e.get())}finally{i.watch(e)}});return i.watch(e),e.get(),()=>{i.unwatch(e)}};Object.defineProperty(ja.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});const lf=Ml(ja);class Kr extends lf{constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(t=>Nl(t)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(t=>t()),this.signalCleanups.clear()}subscribe(t,i){const o=Ie(t,i.bind(this));this.eventSubscriptions.add(o)}showInfo(t){jt(t)}showError(t){re(t)}nobubble(t){return i=>{i.stopPropagation(),t.bind(this)(i)}}command(t,i={}){return()=>{this.executeCommand(t,i)}}executeCommand(t,i){const o=Gt.createExecutionContext(i);Gt.execute(t,o)}watch(t,i){const o=Zn(t,i.bind(this));this.signalCleanups.add(o)}firstUpdated(t){super.firstUpdated(t),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(t){t(),this.updateLater()}}function as(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ki=as();function Qn(e){Ki=e}var Ai={exec:()=>null};function N(e,t=""){let i=typeof e=="string"?e:e.source,o={replace:(r,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(Te.caret,"$1"),i=i.replace(r,s),o},getRegex:()=>new RegExp(i,t)};return o}var cf=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Te={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},df=/^(?:[ \t]*(?:\n|$))+/,hf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,uf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ko=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,pf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ss=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Jn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,el=N(Jn).replace(/bull/g,ss).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ff=N(Jn).replace(/bull/g,ss).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ns=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,mf=/^[^\n]+/,ls=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,gf=N(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ls).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),bf=N(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ss).getRegex(),Gr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",cs=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,wf=N("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",cs).replace("tag",Gr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),tl=N(ns).replace("hr",Ko).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gr).getRegex(),vf=N(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",tl).getRegex(),ds={blockquote:vf,code:hf,def:gf,fences:uf,heading:pf,hr:Ko,html:wf,lheading:el,list:bf,newline:df,paragraph:tl,table:Ai,text:mf},Js=N("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ko).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gr).getRegex(),yf={...ds,lheading:ff,table:Js,paragraph:N(ns).replace("hr",Ko).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Js).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gr).getRegex()},xf={...ds,html:N(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",cs).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ai,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:N(ns).replace("hr",Ko).replace("heading",` *#{1,6} *[^
]`).replace("lheading",el).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},kf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Cf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,il=/^( {2,}|\\)\n(?!\s*$)/,Sf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Xr=/[\p{P}\p{S}]/u,hs=/[\s\p{P}\p{S}]/u,ol=/[^\s\p{P}\p{S}]/u,$f=N(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,hs).getRegex(),rl=/(?!~)[\p{P}\p{S}]/u,Ef=/(?!~)[\s\p{P}\p{S}]/u,Lf=/(?:[^\s\p{P}\p{S}]|~)/u,al=/(?![*_])[\p{P}\p{S}]/u,Af=/(?![*_])[\s\p{P}\p{S}]/u,zf=/(?:[^\s\p{P}\p{S}]|[*_])/u,Tf=N(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",cf?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),sl=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Rf=N(sl,"u").replace(/punct/g,Xr).getRegex(),Df=N(sl,"u").replace(/punct/g,rl).getRegex(),nl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",If=N(nl,"gu").replace(/notPunctSpace/g,ol).replace(/punctSpace/g,hs).replace(/punct/g,Xr).getRegex(),Of=N(nl,"gu").replace(/notPunctSpace/g,Lf).replace(/punctSpace/g,Ef).replace(/punct/g,rl).getRegex(),_f=N("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ol).replace(/punctSpace/g,hs).replace(/punct/g,Xr).getRegex(),Pf=N(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,al).getRegex(),Ff="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Mf=N(Ff,"gu").replace(/notPunctSpace/g,zf).replace(/punctSpace/g,Af).replace(/punct/g,al).getRegex(),Nf=N(/\\(punct)/,"gu").replace(/punct/g,Xr).getRegex(),Bf=N(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vf=N(cs).replace("(?:-->|$)","-->").getRegex(),Uf=N("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vf).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ar=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,qf=N(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ar).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ll=N(/^!?\[(label)\]\[(ref)\]/).replace("label",Ar).replace("ref",ls).getRegex(),cl=N(/^!?\[(ref)\](?:\[\])?/).replace("ref",ls).getRegex(),Hf=N("reflink|nolink(?!\\()","g").replace("reflink",ll).replace("nolink",cl).getRegex(),en=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,us={_backpedal:Ai,anyPunctuation:Nf,autolink:Bf,blockSkip:Tf,br:il,code:Cf,del:Ai,delLDelim:Ai,delRDelim:Ai,emStrongLDelim:Rf,emStrongRDelimAst:If,emStrongRDelimUnd:_f,escape:kf,link:qf,nolink:cl,punctuation:$f,reflink:ll,reflinkSearch:Hf,tag:Uf,text:Sf,url:Ai},Wf={...us,link:N(/^!?\[(label)\]\((.*?)\)/).replace("label",Ar).getRegex(),reflink:N(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ar).getRegex()},Ma={...us,emStrongRDelimAst:Of,emStrongLDelim:Df,delLDelim:Pf,delRDelim:Mf,url:N(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",en).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:N(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",en).getRegex()},jf={...Ma,br:N(il).replace("{2,}","*").getRegex(),text:N(Ma.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},cr={normal:ds,gfm:yf,pedantic:xf},Lo={normal:us,gfm:Ma,breaks:jf,pedantic:Wf},Kf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tn=e=>Kf[e];function Et(e,t){if(t){if(Te.escapeTest.test(e))return e.replace(Te.escapeReplace,tn)}else if(Te.escapeTestNoEncode.test(e))return e.replace(Te.escapeReplaceNoEncode,tn);return e}function on(e){try{e=encodeURI(e).replace(Te.percentDecode,"%")}catch{return null}return e}function rn(e,t){let i=e.replace(Te.findPipe,(a,s,l)=>{let d=!1,h=s;for(;--h>=0&&l[h]==="\\";)d=!d;return d?"|":" |"}),o=i.split(Te.splitPipe),r=0;if(o[0].trim()||o.shift(),o.length>0&&!o.at(-1)?.trim()&&o.pop(),t)if(o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;r<o.length;r++)o[r]=o[r].trim().replace(Te.slashPipe,"|");return o}function Ao(e,t,i){let o=e.length;if(o===0)return"";let r=0;for(;r<o&&e.charAt(o-r-1)===t;)r++;return e.slice(0,o-r)}function Gf(e,t){if(e.indexOf(t[1])===-1)return-1;let i=0;for(let o=0;o<e.length;o++)if(e[o]==="\\")o++;else if(e[o]===t[0])i++;else if(e[o]===t[1]&&(i--,i<0))return o;return i>0?-2:-1}function Xf(e,t=0){let i=t,o="";for(let r of e)if(r==="	"){let a=4-i%4;o+=" ".repeat(a),i+=a}else o+=r,i++;return o}function an(e,t,i,o,r){let a=t.href,s=t.title||null,l=e[1].replace(r.other.outputLinkReplace,"$1");o.state.inLink=!0;let d={type:e[0].charAt(0)==="!"?"image":"link",raw:i,href:a,title:s,text:l,tokens:o.inlineTokens(l)};return o.state.inLink=!1,d}function Yf(e,t,i){let o=e.match(i.other.indentCodeCompensation);if(o===null)return t;let r=o[1];return t.split(`
`).map(a=>{let s=a.match(i.other.beginningSpace);if(s===null)return a;let[l]=s;return l.length>=r.length?a.slice(r.length):a}).join(`
`)}var zr=class{options;rules;lexer;constructor(e){this.options=e||Ki}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let i=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Ao(i,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let i=t[0],o=Yf(i,t[3]||"",this.rules);return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(this.rules.other.endingHash.test(i)){let o=Ao(i,"#");(this.options.pedantic||!o||this.rules.other.endingSpaceChar.test(o))&&(i=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Ao(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let i=Ao(t[0],`
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
`);continue}}return{type:"blockquote",raw:o,tokens:a,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim(),o=i.length>1,r={type:"list",raw:"",ordered:o,start:o?+i.slice(0,-1):"",loose:!1,items:[]};i=o?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=o?i:"[*+-]");let a=this.rules.other.listItemRegex(i),s=!1;for(;e;){let d=!1,h="",u="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;h=t[0],e=e.substring(h.length);let f=Xf(t[2].split(`
`,1)[0],t[1].length),m=e.split(`
`,1)[0],g=!f.trim(),b=0;if(this.options.pedantic?(b=2,u=f.trimStart()):g?b=t[1].length+1:(b=f.search(this.rules.other.nonSpaceChar),b=b>4?1:b,u=f.slice(b),b+=t[1].length),g&&this.rules.other.blankLine.test(m)&&(h+=m+`
`,e=e.substring(m.length+1),d=!0),!d){let C=this.rules.other.nextBulletRegex(b),E=this.rules.other.hrRegex(b),L=this.rules.other.fencesBeginRegex(b),S=this.rules.other.headingBeginRegex(b),T=this.rules.other.htmlBeginRegex(b),q=this.rules.other.blockquoteBeginRegex(b);for(;e;){let j=e.split(`
`,1)[0],Y;if(m=j,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),Y=m):Y=m.replace(this.rules.other.tabCharGlobal,"    "),L.test(m)||S.test(m)||T.test(m)||q.test(m)||C.test(m)||E.test(m))break;if(Y.search(this.rules.other.nonSpaceChar)>=b||!m.trim())u+=`
`+Y.slice(b);else{if(g||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(f)||S.test(f)||E.test(f))break;u+=`
`+m}g=!m.trim(),h+=j+`
`,e=e.substring(j.length+1),f=Y.slice(b)}}r.loose||(s?r.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(s=!0)),r.items.push({type:"list_item",raw:h,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),r.raw+=h}let l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let d of r.items){if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),d.task){if(d.text=d.text.replace(this.rules.other.listReplaceTask,""),d.tokens[0]?.type==="text"||d.tokens[0]?.type==="paragraph"){d.tokens[0].raw=d.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),d.tokens[0].text=d.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let h=this.rules.other.listTaskCheckbox.exec(d.raw);if(h){let u={type:"checkbox",raw:h[0]+" ",checked:h[0]!=="[ ]"};d.checked=u.checked,r.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=u.raw+d.tokens[0].raw,d.tokens[0].text=u.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(u)):d.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):d.tokens.unshift(u)}}if(!r.loose){let h=d.tokens.filter(f=>f.type==="space"),u=h.length>0&&h.some(f=>this.rules.other.anyLine.test(f.raw));r.loose=u}}if(r.loose)for(let d of r.items){d.loose=!0;for(let h of d.tokens)h.type==="text"&&(h.type="paragraph")}return r}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let i=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:i,raw:t[0],href:o,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let i=rn(t[1]),o=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(i.length===o.length){for(let s of o)this.rules.other.tableAlignRight.test(s)?a.align.push("right"):this.rules.other.tableAlignCenter.test(s)?a.align.push("center"):this.rules.other.tableAlignLeft.test(s)?a.align.push("left"):a.align.push(null);for(let s=0;s<i.length;s++)a.header.push({text:i[s],tokens:this.lexer.inline(i[s]),header:!0,align:a.align[s]});for(let s of r)a.rows.push(rn(s,a.header.length).map((l,d)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[d]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let i=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let a=Ao(i.slice(0,-1),"\\");if((i.length-a.length)%2===0)return}else{let a=Gf(t[2],"()");if(a===-2)return;if(a>-1){let s=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let o=t[2],r="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(o);a&&(o=a[1],r=a[3])}else r=t[3]?t[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?o=o.slice(1):o=o.slice(1,-1)),an(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let o=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[o.toLowerCase()];if(!r){let a=i[0].charAt(0);return{type:"text",raw:a,text:a}}return an(i,r,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!(!o||o[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!i||this.rules.inline.punctuation.exec(i))){let r=[...o[0]].length-1,a,s,l=r,d=0,h=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+r);(o=h.exec(t))!=null;){if(a=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!a)continue;if(s=[...a].length,o[3]||o[4]){l+=s;continue}else if((o[5]||o[6])&&r%3&&!((r+s)%3)){d+=s;continue}if(l-=s,l>0)continue;s=Math.min(s,s+l+d);let u=[...o[0]][0].length,f=e.slice(0,r+o.index+u+s);if(Math.min(r,s)%2){let g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}let m=f.slice(2,-2);return{type:"strong",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(i),r=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return o&&r&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:t[0],text:i}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,i=""){let o=this.rules.inline.delLDelim.exec(e);if(o&&(!o[1]||!i||this.rules.inline.punctuation.exec(i))){let r=[...o[0]].length-1,a,s,l=r,d=this.rules.inline.delRDelim;for(d.lastIndex=0,t=t.slice(-1*e.length+r);(o=d.exec(t))!=null;){if(a=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!a||(s=[...a].length,s!==r))continue;if(o[3]||o[4]){l+=s;continue}if(l-=s,l>0)continue;s=Math.min(s,s+l);let h=[...o[0]][0].length,u=e.slice(0,r+o.index+h+s),f=u.slice(r,-r);return{type:"del",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let i,o;return t[2]==="@"?(i=t[1],o="mailto:"+i):(i=t[1],o=i),{type:"link",raw:t[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let i,o;if(t[2]==="@")i=t[0],o="mailto:"+i;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0]);i=t[0],t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let i=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:i}}}},ut=class Na{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ki,this.options.tokenizer=this.options.tokenizer||new zr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:Te,block:cr.normal,inline:Lo.normal};this.options.pedantic?(i.block=cr.pedantic,i.inline=Lo.pedantic):this.options.gfm&&(i.block=cr.gfm,this.options.breaks?i.inline=Lo.breaks:i.inline=Lo.gfm),this.tokenizer.rules=i}static get rules(){return{block:cr,inline:Lo}}static lex(t,i){return new Na(i).lex(t)}static lexInline(t,i){return new Na(i).inlineTokens(t)}lex(t){t=t.replace(Te.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let o=this.inlineQueue[i];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,i=[],o=!1){for(this.options.pedantic&&(t=t.replace(Te.tabCharGlobal,"    ").replace(Te.spaceLine,""));t;){let r;if(this.options.extensions?.block?.some(s=>(r=s.call({lexer:this},t,i))?(t=t.substring(r.raw.length),i.push(r),!0):!1))continue;if(r=this.tokenizer.space(t)){t=t.substring(r.raw.length);let s=i.at(-1);r.raw.length===1&&s!==void 0?s.raw+=`
`:i.push(r);continue}if(r=this.tokenizer.code(t)){t=t.substring(r.raw.length);let s=i.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+r.raw,s.text+=`
`+r.text,this.inlineQueue.at(-1).src=s.text):i.push(r);continue}if(r=this.tokenizer.fences(t)){t=t.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.heading(t)){t=t.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.hr(t)){t=t.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.blockquote(t)){t=t.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.list(t)){t=t.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.html(t)){t=t.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.def(t)){t=t.substring(r.raw.length);let s=i.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+r.raw,s.text+=`
`+r.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},i.push(r));continue}if(r=this.tokenizer.table(t)){t=t.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.lheading(t)){t=t.substring(r.raw.length),i.push(r);continue}let a=t;if(this.options.extensions?.startBlock){let s=1/0,l=t.slice(1),d;this.options.extensions.startBlock.forEach(h=>{d=h.call({lexer:this},l),typeof d=="number"&&d>=0&&(s=Math.min(s,d))}),s<1/0&&s>=0&&(a=t.substring(0,s+1))}if(this.state.top&&(r=this.tokenizer.paragraph(a))){let s=i.at(-1);o&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):i.push(r),o=a.length!==t.length,t=t.substring(r.raw.length);continue}if(r=this.tokenizer.text(t)){t=t.substring(r.raw.length);let s=i.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):i.push(r);continue}if(t){let s="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let o=t,r=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)d.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,r.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)a=r[2]?r[2].length:0,o=o.slice(0,r.index+a)+"["+"a".repeat(r[0].length-a-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=this.options.hooks?.emStrongMask?.call({lexer:this},o)??o;let s=!1,l="";for(;t;){s||(l=""),s=!1;let d;if(this.options.extensions?.inline?.some(u=>(d=u.call({lexer:this},t,i))?(t=t.substring(d.raw.length),i.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);let u=i.at(-1);d.type==="text"&&u?.type==="text"?(u.raw+=d.raw,u.text+=d.text):i.push(d);continue}if(d=this.tokenizer.emStrong(t,o,l)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.del(t,o,l)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),i.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),i.push(d);continue}let h=t;if(this.options.extensions?.startInline){let u=1/0,f=t.slice(1),m;this.options.extensions.startInline.forEach(g=>{m=g.call({lexer:this},f),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(h=t.substring(0,u+1))}if(d=this.tokenizer.inlineText(h)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(l=d.raw.slice(-1)),s=!0;let u=i.at(-1);u?.type==="text"?(u.raw+=d.raw,u.text+=d.text):i.push(d);continue}if(t){let u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return i}},Tr=class{options;parser;constructor(e){this.options=e||Ki}space(e){return""}code({text:e,lang:t,escaped:i}){let o=(t||"").match(Te.notSpaceStart)?.[0],r=e.replace(Te.endingNewline,"")+`
`;return o?'<pre><code class="language-'+Et(o)+'">'+(i?r:Et(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:Et(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,i=e.start,o="";for(let s=0;s<e.items.length;s++){let l=e.items[s];o+=this.listitem(l)}let r=t?"ol":"ul",a=t&&i!==1?' start="'+i+'"':"";return"<"+r+a+`>
`+o+"</"+r+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",i="";for(let r=0;r<e.header.length;r++)i+=this.tablecell(e.header[r]);t+=this.tablerow({text:i});let o="";for(let r=0;r<e.rows.length;r++){let a=e.rows[r];i="";for(let s=0;s<a.length;s++)i+=this.tablecell(a[s]);o+=this.tablerow({text:i})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Et(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){let o=this.parser.parseInline(i),r=on(e);if(r===null)return o;e=r;let a='<a href="'+e+'"';return t&&(a+=' title="'+Et(t)+'"'),a+=">"+o+"</a>",a}image({href:e,title:t,text:i,tokens:o}){o&&(i=this.parser.parseInline(o,this.parser.textRenderer));let r=on(e);if(r===null)return Et(i);e=r;let a=`<img src="${e}" alt="${Et(i)}"`;return t&&(a+=` title="${Et(t)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Et(e.text)}},ps=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},pt=class Ba{options;renderer;textRenderer;constructor(t){this.options=t||Ki,this.options.renderer=this.options.renderer||new Tr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ps}static parse(t,i){return new Ba(i).parse(t)}static parseInline(t,i){return new Ba(i).parseInline(t)}parse(t){let i="";for(let o=0;o<t.length;o++){let r=t[o];if(this.options.extensions?.renderers?.[r.type]){let s=r,l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(s.type)){i+=l||"";continue}}let a=r;switch(a.type){case"space":{i+=this.renderer.space(a);break}case"hr":{i+=this.renderer.hr(a);break}case"heading":{i+=this.renderer.heading(a);break}case"code":{i+=this.renderer.code(a);break}case"table":{i+=this.renderer.table(a);break}case"blockquote":{i+=this.renderer.blockquote(a);break}case"list":{i+=this.renderer.list(a);break}case"checkbox":{i+=this.renderer.checkbox(a);break}case"html":{i+=this.renderer.html(a);break}case"def":{i+=this.renderer.def(a);break}case"paragraph":{i+=this.renderer.paragraph(a);break}case"text":{i+=this.renderer.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return i}parseInline(t,i=this.renderer){let o="";for(let r=0;r<t.length;r++){let a=t[r];if(this.options.extensions?.renderers?.[a.type]){let l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){o+=l||"";continue}}let s=a;switch(s.type){case"escape":{o+=i.text(s);break}case"html":{o+=i.html(s);break}case"link":{o+=i.link(s);break}case"image":{o+=i.image(s);break}case"checkbox":{o+=i.checkbox(s);break}case"strong":{o+=i.strong(s);break}case"em":{o+=i.em(s);break}case"codespan":{o+=i.codespan(s);break}case"br":{o+=i.br(s);break}case"del":{o+=i.del(s);break}case"text":{o+=i.text(s);break}default:{let l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return o}},Do=class{options;block;constructor(e){this.options=e||Ki}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?ut.lex:ut.lexInline}provideParser(){return this.block?pt.parse:pt.parseInline}},Zf=class{defaults=as();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=pt;Renderer=Tr;TextRenderer=ps;Lexer=ut;Tokenizer=zr;Hooks=Do;constructor(...e){this.use(...e)}walkTokens(e,t){let i=[];for(let o of e)switch(i=i.concat(t.call(this,o)),o.type){case"table":{let r=o;for(let a of r.header)i=i.concat(this.walkTokens(a.tokens,t));for(let a of r.rows)for(let s of a)i=i.concat(this.walkTokens(s.tokens,t));break}case"list":{let r=o;i=i.concat(this.walkTokens(r.items,t));break}default:{let r=o;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(a=>{let s=r[a].flat(1/0);i=i.concat(this.walkTokens(s,t))}):r.tokens&&(i=i.concat(this.walkTokens(r.tokens,t)))}}return i}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{let o={...i};if(o.async=this.defaults.async||o.async||!1,i.extensions&&(i.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let a=t.renderers[r.name];a?t.renderers[r.name]=function(...s){let l=r.renderer.apply(this,s);return l===!1&&(l=a.apply(this,s)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=t[r.level];a?a.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),o.extensions=t),i.renderer){let r=this.defaults.renderer||new Tr(this.defaults);for(let a in i.renderer){if(!(a in r))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let s=a,l=i.renderer[s],d=r[s];r[s]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=d.apply(r,h)),u||""}}o.renderer=r}if(i.tokenizer){let r=this.defaults.tokenizer||new zr(this.defaults);for(let a in i.tokenizer){if(!(a in r))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let s=a,l=i.tokenizer[s],d=r[s];r[s]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=d.apply(r,h)),u}}o.tokenizer=r}if(i.hooks){let r=this.defaults.hooks||new Do;for(let a in i.hooks){if(!(a in r))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let s=a,l=i.hooks[s],d=r[s];Do.passThroughHooks.has(a)?r[s]=h=>{if(this.defaults.async&&Do.passThroughHooksRespectAsync.has(a))return(async()=>{let f=await l.call(r,h);return d.call(r,f)})();let u=l.call(r,h);return d.call(r,u)}:r[s]=(...h)=>{if(this.defaults.async)return(async()=>{let f=await l.apply(r,h);return f===!1&&(f=await d.apply(r,h)),f})();let u=l.apply(r,h);return u===!1&&(u=d.apply(r,h)),u}}o.hooks=r}if(i.walkTokens){let r=this.defaults.walkTokens,a=i.walkTokens;o.walkTokens=function(s){let l=[];return l.push(a.call(this,s)),r&&(l=l.concat(r.call(this,s))),l}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ut.lex(e,t??this.defaults)}parser(e,t){return pt.parse(e,t??this.defaults)}parseMarkdown(e){return(t,i)=>{let o={...i},r={...this.defaults,...o},a=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&o.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=e),r.async)return(async()=>{let s=r.hooks?await r.hooks.preprocess(t):t,l=await(r.hooks?await r.hooks.provideLexer():e?ut.lex:ut.lexInline)(s,r),d=r.hooks?await r.hooks.processAllTokens(l):l;r.walkTokens&&await Promise.all(this.walkTokens(d,r.walkTokens));let h=await(r.hooks?await r.hooks.provideParser():e?pt.parse:pt.parseInline)(d,r);return r.hooks?await r.hooks.postprocess(h):h})().catch(a);try{r.hooks&&(t=r.hooks.preprocess(t));let s=(r.hooks?r.hooks.provideLexer():e?ut.lex:ut.lexInline)(t,r);r.hooks&&(s=r.hooks.processAllTokens(s)),r.walkTokens&&this.walkTokens(s,r.walkTokens);let l=(r.hooks?r.hooks.provideParser():e?pt.parse:pt.parseInline)(s,r);return r.hooks&&(l=r.hooks.postprocess(l)),l}catch(s){return a(s)}}}onError(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let o="<p>An error occurred:</p><pre>"+Et(i.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(i);throw i}}},Fi=new Zf;function H(e,t){return Fi.parse(e,t)}H.options=H.setOptions=function(e){return Fi.setOptions(e),H.defaults=Fi.defaults,Qn(H.defaults),H};H.getDefaults=as;H.defaults=Ki;H.use=function(...e){return Fi.use(...e),H.defaults=Fi.defaults,Qn(H.defaults),H};H.walkTokens=function(e,t){return Fi.walkTokens(e,t)};H.parseInline=Fi.parseInline;H.Parser=pt;H.parser=pt.parse;H.Renderer=Tr;H.TextRenderer=ps;H.Lexer=ut;H.lexer=ut.lex;H.Tokenizer=zr;H.Hooks=Do;H.parse=H;H.options;H.setOptions;H.use;H.walkTokens;H.parseInline;pt.parse;ut.lex;var sn={name:"@kispace-io/app",version:"1.3.6",description:"An IDE for working with geospatial data.",dependencies:{"@eclipse-lyra/core":"0.7.53","@eclipse-lyra/extension-python-runtime":"0.7.53","@eclipse-lyra/extension-utils":"0.7.53","@eclipse-lyra/extension-in-browser-ml":"0.7.53","@eclipse-lyra/extension-ai-system":"0.7.53","@eclipse-lyra/extension-command-palette":"0.7.53","@eclipse-lyra/extension-github-service":"0.7.53","@eclipse-lyra/extension-howto-system":"0.7.53","@eclipse-lyra/extension-md-editor":"0.7.53","@eclipse-lyra/extension-media-viewer":"0.7.53","@eclipse-lyra/extension-memory-usage":"0.7.53","@eclipse-lyra/extension-monaco-editor":"0.7.53","@eclipse-lyra/extension-notebook":"0.7.53","@eclipse-lyra/extension-settings-tree":"0.7.53","@eclipse-lyra/extension-sqleditor":"0.7.53","@eclipse-lyra/extension-duckdb":"0.7.53","@eclipse-lyra/extension-pglite":"0.7.53","@eclipse-lyra/extension-dataviewer":"0.7.53","@eclipse-lyra/extension-catalog":"0.7.53","@kispace-io/extension-gtfs":"0.0.0","@kispace-io/extension-map-editor":"0.0.0","@kispace-io/extension-mapbuilder":"0.0.0","@kispace-io/extension-mapprops":"0.0.0","@kispace-io/extension-overpass":"0.0.0","@kispace-io/extension-style-editor":"0.0.0","@kispace-io/extension-routing":"0.0.0","@kispace-io/gs-lib":"1.3.6","font-gis":"1.0.6"}};const dl="app-toolbars-main",xo="app-toolbars-main-right",hl="app-toolbars-main-center",ul="app-toolbars-bottom",Yr="app-toolbars-bottom-center",Go="app-toolbars-bottom-end",pl="system-views",Rr="system.layouts",Ht="editor-area-main",Dr="sidebar-main",fl="sidebar-main-bottom",ml="sidebar-auxiliary",fs="panel-bottom",Qf="command-save",gl=!1;var ms=(e=>(e[e.LEFT=0]="LEFT",e[e.MIDDLE=1]="MIDDLE",e[e.RIGHT=2]="RIGHT",e[e.BACK=3]="BACK",e[e.FORWARD=4]="FORWARD",e))(ms||{});const Jf=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:Qf,EDITOR_AREA_MAIN:Ht,HIDE_DOT_RESOURCE:gl,MouseButton:ms,PANEL_BOTTOM:fs,SIDEBAR_AUXILIARY:ml,SIDEBAR_MAIN:Dr,SIDEBAR_MAIN_BOTTOM:fl,SYSTEM_LAYOUTS:Rr,SYSTEM_VIEWS:pl,TOOLBAR_BOTTOM:ul,TOOLBAR_BOTTOM_CENTER:Yr,TOOLBAR_BOTTOM_END:Go,TOOLBAR_MAIN:dl,TOOLBAR_MAIN_CENTER:hl,TOOLBAR_MAIN_RIGHT:xo},Symbol.toStringTag,{value:"Module"})),em="eclipse-lyra-persistence",Io="keyval",tm=1;let ma=null;function nn(){return ma||(ma=new Promise((e,t)=>{const i=indexedDB.open(em,tm);i.onerror=()=>t(i.error),i.onsuccess=()=>e(i.result),i.onupgradeneeded=o=>{o.target.result.createObjectStore(Io)}})),ma}class im{async persistObject(t,i){const o=await nn();return new Promise((r,a)=>{const l=o.transaction(Io,"readwrite").objectStore(Io),d=i==null?l.delete(t):l.put(i,t);d.onsuccess=()=>r(),d.onerror=()=>a(d.error)})}async getObject(t){const i=await nn();return new Promise((o,r)=>{const s=i.transaction(Io,"readonly").objectStore(Io).get(t);s.onsuccess=()=>o(s.result),s.onerror=()=>r(s.error)})}}const ft=new im;ke.put("persistenceService",ft);const Xi=".geospace/settings.json",ga="dialogSettings",zi="events/settings/changed";function bl(e,t){if(t){for(const[i,o]of Object.entries(t))if(o&&typeof o=="object"){const r=e[i];r?.properties&&o.properties?bl(r.properties,o.properties):e[i]={...o,properties:o.properties?{...o.properties}:void 0}}}}class om{constructor(){this.mergedSchema={type:"object",properties:{}}}async checkSettings(){this.appSettings||(this.appSettings=await ft.getObject(Xi),this.appSettings||(this.appSettings={},await ft.persistObject(Xi,this.appSettings)),_(zi,this.appSettings))}registerSchema(t){const i=t.properties??(t.type==="object"?{}:void 0);i&&(this.mergedSchema.properties||(this.mergedSchema.properties={}),bl(this.mergedSchema.properties,i))}getCategories(){const t=this.mergedSchema.properties;return t?Object.entries(t).filter(([,i])=>i&&typeof i=="object").map(([i,o])=>({id:i,label:o.title??i,order:typeof o.order=="number"?o.order:0,schema:o})).sort((i,o)=>i.order-o.order):[]}getSchemaForCategory(t){return this.mergedSchema.properties?.[t]}getSchemaForSettingKey(t){const i=t.split(".").filter(Boolean);if(i.length===0)return this.mergedSchema;let o=this.mergedSchema;for(const r of i)if(o=o?.properties?.[r],!o)return;return o}traversePath(t,i,o){if(i.length===0)return null;let r=t;const a=i.length-1;for(let s=0;s<a;s++){const l=i[s];if(r[l]===void 0){if(!o)return null;r[l]={}}if(r[l]===null||typeof r[l]!="object")return null;r=r[l]}return{parent:r,key:i[a]}}async getAt(t){await this.checkSettings();const i=t.split(".").filter(Boolean);if(i.length===0)return this.appSettings;const o=this.traversePath(this.appSettings,i,!1);if(o)return o.parent[o.key]}async setAt(t,i){await this.checkSettings();const o=t.split(".").filter(Boolean);if(o.length===0)return;const r=this.traversePath(this.appSettings,o,!0);r&&(r.parent[r.key]=i,await ft.persistObject(Xi,this.appSettings),_(zi,this.appSettings))}async get(t){return await this.checkSettings(),this.appSettings[t]}async set(t,i){await this.checkSettings(),this.appSettings[t]=i,await ft.persistObject(Xi,this.appSettings),_(zi,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(t){this.appSettings=t,await ft.persistObject(Xi,this.appSettings),_(zi,this.appSettings)}async getDialogSetting(t){return await this.checkSettings(),(this.appSettings[ga]||{})[t]}async setDialogSetting(t,i){await this.checkSettings();const o=this.appSettings[ga]||{};o[t]=i,this.appSettings[ga]=o,await ft.persistObject(Xi,this.appSettings),_(zi,this.appSettings)}}const ne=new om;ke.put("appSettings",ne);class rm{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Fa.set(this.updateCounter)}run(t,i){const o=this.createProgressMonitor(t);try{this.tasks.push(o),this.notifyUpdate(),i(o)}finally{this.tasks.splice(this.tasks.indexOf(o),1),this.notifyUpdate()}}async runAsync(t,i){const o=this.createProgressMonitor(t);return this.tasks.push(o),this.notifyUpdate(),i(o).finally(()=>{this.tasks.splice(this.tasks.indexOf(o),1),this.notifyUpdate()})}createProgressMonitor(t){const i={name:t,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(i,{set:(o,r,a)=>(o[r]=a,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const ho=new rm;ke.put("taskService",ho);const am=ti("EsmShService"),Xo=class Xe{isEsmShUrl(t){try{const i=new URL(t);return i.hostname==="esm.sh"||i.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(t){return this.isEsmShUrl(t)||this.isHttpUrl(t)?!1:this.parseSource(t)!==null}isHttpUrl(t){try{const i=new URL(t);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}parseSource(t){return!t||typeof t!="string"||(t=t.trim(),this.isHttpUrl(t))?null:t.startsWith(Xe.GITHUB_PREFIX)?this.parseGitHubSource(t):t.startsWith(Xe.JSR_PREFIX)?this.parseJsrSource(t):t.startsWith(Xe.PR_PREFIX)?this.parsePrSource(t):this.parseNpmSource(t)}parseGitHubSource(t){const o=t.substring(Xe.GITHUB_PREFIX.length).split("/");if(o.length<2)return null;const r=o[0],a=o[1];let s,l,d;const h=a.match(/^(.+?)(@(.+))?$/);return h?(s=h[1],l=h[3],o.length>2&&(d=o.slice(2).join("/")),{type:"github",owner:r,repo:s,version:l,path:d}):null}parseJsrSource(t){const i=t.substring(Xe.JSR_PREFIX.length);if(!i.startsWith("@"))return null;const o=i.split("/");if(o.length<2)return null;const r=o[0],a=o[1];let s,l,d;const h=a.match(/^(.+?)(@(.+))?$/);return h?(s=`${r}/${h[1]}`,l=h[3],o.length>2&&(d=o.slice(2).join("/")),{type:"jsr",package:s,version:l,path:d}):null}parsePrSource(t){const o=t.substring(Xe.PR_PREFIX.length).split("/");if(o.length<2)return null;const r=o[0],a=o[1];let s,l;const d=a.match(/^(.+?)@(.+)$/);return d?(s=d[1],l=d[2]):s=a,{type:"pr",owner:r,repo:s,commit:l}}parseNpmSource(t){const i=t.split("/"),o=i[0];let r,a,s;const l=o.match(/^(.+?)(@(.+))?$/);return l?(r=l[1],a=l[3],i.length>1&&(s=i.slice(1).join("/")),{type:"npm",package:r,version:a,path:s}):null}buildEsmShUrl(t,i){let o=Xe.ESM_SH_BASE;switch(t.type){case"npm":o+=`/${t.package}`,t.version&&(o+=`@${t.version}`),t.path&&(o+=`/${t.path}`);break;case"github":o+=`/${Xe.GITHUB_PREFIX}${t.owner}/${t.repo}`,t.version&&(o+=`@${t.version}`),t.path&&(o+=`/${t.path}`);break;case"jsr":o+=`/${Xe.JSR_PREFIX}${t.package}`,t.version&&(o+=`@${t.version}`),t.path&&(o+=`/${t.path}`);break;case"pr":o+=`/${Xe.PR_PREFIX}${t.owner}/${t.repo}`,t.commit&&(o+=`@${t.commit}`);break}const r=[];if(i?.deps){const a=Object.entries(i.deps).map(([s,l])=>`${s}@${l}`).join(",");r.push(`deps=${encodeURIComponent(a)}`)}return i?.target&&r.push(`target=${encodeURIComponent(i.target)}`),i?.dev&&r.push("dev"),i?.bundle===!1?r.push("bundle=false"):i?.bundle===!0&&r.push("bundle"),r.length>0&&(o+=`?${r.join("&")}`),o}normalizeToEsmSh(t,i){if(this.isEsmShUrl(t)||this.isHttpUrl(t))return t;const o=this.parseSource(t);return o?this.buildEsmShUrl(o,i):(am.warn(`Could not parse source identifier: ${t}`),t)}extractPackageName(t){const i=this.parseSource(t);if(!i)return null;switch(i.type){case"npm":return i.package||null;case"github":return`${i.owner}/${i.repo}`;case"jsr":return i.package||null;case"pr":return`${i.owner}/${i.repo}`}}isGitHubUrl(t){try{const i=new URL(t);return i.hostname==="github.com"||i.hostname==="www.github.com"}catch{return t.startsWith("https://github.com/")||t.startsWith("http://github.com/")}}convertGitHubUrlToSource(t){try{const o=new URL(t).pathname.split("/").filter(h=>h);if(o.length<2)throw new Error("Invalid GitHub URL format");const r=o[0];let a=o[1].replace(/\.git$/,""),s,l;o.length>2&&(o[2]==="blob"||o[2]==="tree"?(s=o[3]||"main",o[2]==="blob"&&o.length>4&&(l=o.slice(4).join("/"))):o[2]==="commit"?s=o[3]:l=o.slice(2).join("/"));let d=`${Xe.GITHUB_PREFIX}${r}/${a}`;return s&&(d+=`@${s}`),l&&(d+=`/${l}`),d}catch{const i=t.match(/github\.com\/([^\/]+)\/([^\/]+)/);return i?`${Xe.GITHUB_PREFIX}${i[1]}/${i[2].replace(/\.git$/,"")}`:t}}async fetchGitHubPackageJson(t){if(t.type!=="github")throw new Error("Source must be a GitHub source");const i=t.owner,o=t.repo,r=t.version||"main",a=`https://raw.githubusercontent.com/${i}/${o}/${r}/package.json`,s=await fetch(a);if(!s.ok)throw new Error(`Failed to fetch package.json: ${s.statusText}`);return await s.json()}};Xo.ESM_SH_BASE="https://esm.sh";Xo.GITHUB_PREFIX="gh/";Xo.JSR_PREFIX="jsr/";Xo.PR_PREFIX="pr/";let sm=Xo;const Tt=new sm;ke.put("esmShService",Tt);const Oo="events/extensionsregistry/extensionsConfigChanged",zo="extensions",ln="extensions.external";class nm{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,Ie(zi,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then()})}async loadPersistedExternalExtensions(){try{const t=await ne.get(ln);t&&Array.isArray(t)&&t.forEach(i=>{this.extensions[i.id]=i})}catch(t){K.error(`Failed to load persisted external extensions: ${t}`)}}async savePersistedExternalExtensions(){try{const t=Object.values(this.extensions).filter(i=>i.external);await ne.set(ln,t)}catch(t){K.error(`Failed to save persisted external extensions: ${t}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await ne.get(zo),this.extensionsSettings||(await ne.set(zo,[]),this.extensionsSettings=await ne.get(zo)),_(Oo,this.extensionsSettings))}registerExtension(t){this.extensions[t.id]=t,K.debug(`Registered extension: ${t.id}`),t.external&&this.savePersistedExternalExtensions().catch(i=>{K.error(`Failed to persist external extension: ${i}`)}),_(Oo,this.extensionsSettings)}async loadExtensionFromUrl(t,i){K.info(`Loading extension from URL: ${t}...`);try{let o=t,r=`Extension from ${t}`;if(Tt.isSourceIdentifier(t)){const s=Tt.extractPackageName(t);s&&(r=`Extension: ${s}`),o=Tt.normalizeToEsmSh(t),K.debug(`Converted source identifier to esm.sh URL: ${t} -> ${o}`)}const a=i||`url:${o}`;if(this.isEnabled(a))return K.info(`Extension from URL ${o} is already enabled`),a;if(!this.extensions[a]){const s={id:a,name:r,description:`Extension loaded from: ${t}`,url:o};this.registerExtension(s),K.info(`Registered extension from URL: ${a}`)}return this.enable(a,!1),K.info(`Successfully enabled extension from URL: ${o}`),a}catch(o){throw K.error(`Failed to load extension from URL ${t}: ${o}`),o}}getExtensions(){return Object.values(this.extensions)}async loadEnabledExtensions(){await this.checkExtensionsConfig();const i=(this.extensionsSettings??[]).filter(o=>this.isEnabled(o.id)&&this.extensions[o.id]).map(o=>this.load(o.id).catch(r=>{re("Extension could not be loaded: "+r.message)}));await Promise.all(i)}isEnabled(t){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(i=>i.id===t&&i.enabled)}isLoaded(t){return this.loadedExtensions.has(t)}enable(t,i=!1){this.isEnabled(t)||(K.debug(`Loading extension: ${t}`),this.load(t).then(()=>{this.updateEnablement(t,!0,i)}).catch(o=>{K.error(`Could not load extension: ${t}: ${o}`)}))}async enableAsync(t,i=!1){if(!this.isEnabled(t)){K.debug(`Loading extension: ${t}`);try{await this.load(t),this.updateEnablement(t,!0,i)}catch(o){throw K.error(`Could not load extension: ${t}: ${o}`),o}}}async load(t,i=[]){if(this.loadedExtensions.has(t))return;const o=this.loadingPromises.get(t);if(o)return o;if(i.includes(t)){const s=[...i,t].join(" → ");throw new Error(`Circular dependency detected: ${s}`)}const r=this.extensions[t];if(!r)throw new Error("Extension not found: "+t);const a=(async()=>{try{if(K.debug(`Loading extension: ${t}`),r.dependencies&&r.dependencies.length>0){const l=[...i,t];for(const d of r.dependencies)await this.load(d,l),this.isEnabled(d)||(await this.updateEnablementAsync(d,!0,!1),K.debug(`Auto-enabled dependency: ${d}`))}const s=await ho.runAsync("Loading extension: "+r.name,async()=>{if(r.loader)return r.loader();if(r.url){let l=r.url;return Tt.isSourceIdentifier(r.url)&&(l=Tt.normalizeToEsmSh(r.url),K.debug(`Normalized extension URL: ${r.url} -> ${l}`)),import(l)}});if(this.loadedExtensions.add(t),s?.default instanceof Function)try{s.default(ki.getProxy())}catch(l){throw K.error(`Error executing extension function for ${t}: ${l}`),l}}catch(s){throw this.loadedExtensions.delete(t),s}finally{this.loadingPromises.delete(t)}})();return this.loadingPromises.set(t,a),a}disable(t,i=!1){this.isEnabled(t)&&this.updateEnablement(t,!1,i)}updateEnablement(t,i,o){this.checkExtensionsConfig().then(()=>{const r=this.extensionsSettings?.find(a=>a.id==t);r?r.enabled=i:this.extensionsSettings?.push({id:t,enabled:i}),ne.set(zo,this.extensionsSettings).then(()=>{if(o){const a=this.extensions[t];jt(i?a.name+" enabled.":a.name+" disabled  - Please restart to take effect")}_(Oo,this.extensionsSettings)})})}async updateEnablementAsync(t,i,o){await this.checkExtensionsConfig();const r=this.extensionsSettings?.find(a=>a.id==t);if(r?r.enabled=i:this.extensionsSettings?.push({id:t,enabled:i}),await ne.set(zo,this.extensionsSettings),o){const a=this.extensions[t];jt(i?a.name+" enabled.":a.name+" disabled  - Please restart to take effect")}_(Oo,this.extensionsSettings)}}const oe=new nm;ke.put("extensionRegistry",oe);const cn=["alt","ctrl","meta","shift"],wl={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},lm={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},cm={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},dm=new Set(Object.keys(wl));function dn(e){return cm[e]??e}class hm{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),Ie(Yn,t=>{t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)})}registerExistingCommandBindings(){const t=Gt.listCommands();Object.values(t).forEach(i=>{i.keyBinding&&this.registerKeyBinding(i.id,i.keyBinding)})}parseKeyBinding(t){if(!t||t.trim()==="")return null;const i=t.toUpperCase().split("+").map(s=>s.trim());if(i.length===0)return null;const o=i[i.length-1],r=i.slice(0,-1);if(i.length===1&&dm.has(o))return null;const a={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const s of r){const l=wl[s];if(l===void 0)return null;a[l]=!0}return a.key=dn(o),a}getBindingKey(t){return[...cn.filter(o=>t[o]),t.key.toUpperCase()].join("+")}registerKeyBinding(t,i){const o=this.parseKeyBinding(i);if(!o)return K.error(`Invalid key binding: ${i}`),!1;o.commandId=t;const r=this.getBindingKey(o);this.bindings.has(r)||this.bindings.set(r,[]);const a=this.bindings.get(r);if(a.find(d=>d.commandId===t))return K.error(`Key binding ${i} already registered for command ${t}`),!1;const l=a.find(d=>d.commandId!==t);return l?(K.warn(`Key binding ${i} already used by command ${l.commandId}; refusing for ${t}`),!1):(a.push(o),!0)}unregisterKeyBinding(t,i){if(i){const o=this.parseKeyBinding(i);if(o){const r=this.getBindingKey(o),a=this.bindings.get(r);if(a){const s=a.filter(l=>l.commandId!==t);s.length===0?this.bindings.delete(r):this.bindings.set(r,s)}}}else for(const[o,r]of this.bindings.entries()){const a=r.filter(s=>s.commandId!==t);a.length===0?this.bindings.delete(o):this.bindings.set(o,a)}}getKeyBindingsForCommand(t){const i=[];for(const o of this.bindings.values())for(const r of o)r.commandId===t&&i.push(this.formatKeyBinding(r));return i.sort()}formatKeyBinding(t){const i=cn.filter(r=>t[r]).map(r=>lm[r]),o=t.key.length===1?t.key.toUpperCase():t.key.charAt(0).toUpperCase()+t.key.slice(1).toLowerCase();return i.push(o),i.join("+")}handleKeyDown(t){if(!this.enabled)return;const i={commandId:"",key:dn(t.key.toUpperCase()),ctrl:t.ctrlKey,alt:t.altKey,shift:t.shiftKey,meta:t.metaKey},o=this.getBindingKey(i),r=this.bindings.get(o);if(r&&r.length>0){const a=r[0];try{t.preventDefault(),t.stopPropagation();const s=Gt.createExecutionContext({});Gt.execute(a.commandId,s),K.debug(`Executed command via key binding: ${a.commandId}`)}catch(s){K.error(`Failed to execute command ${a.commandId}: ${s.message}`)}}}setEnabled(t){this.enabled=t}isEnabled(){return this.enabled}getAllBindings(){const t=new Map;for(const[i,o]of this.bindings)t.set(i,[...o]);return t}clearAll(){this.bindings.clear()}}const vl=new hm;ke.put("keyBindingManager",vl);class Ci extends Kr{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const t=[];let i=this;for(;i&&i!==document.body&&i!==document.documentElement;){const o=i.getAttribute("id");if(o){t.unshift(`#${o}`);break}const r=i.tagName.toLowerCase(),a=i.parentElement;if(!a)break;const l=Array.from(a.children).filter(d=>d.tagName.toLowerCase()===r).indexOf(i);l>=0?t.unshift(`${r}:${l}`):t.unshift(r),i=a}return t.length>0?t.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const t=this.tagName.toLowerCase(),i=this.getAttribute("id");if(i){this.settingsKey=`${t}:${i}`;return}const o=this.buildDOMTreePath();o&&(this.settingsKey=`${t}:${o}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await ne.getDialogSetting(this.settingsKey)}async setDialogSetting(t){this.initializeSettingsKey(),this.settingsKey&&await ne.setDialogSetting(this.settingsKey,t)}}const yl=class extends Ci{dispose(){}getResult(){}renderMessage(t,i=!1){if(i){const o=H.parse(t,{async:!1});return p`<div class="dialog-message" style="white-space: normal;">${Kt(o)}</div>`}return p`<div class="dialog-message" style="white-space: pre-line;">${t}</div>`}};yl.styles=[k`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let ii=yl;const Ei=ti("DialogService"),Mi="dialogs",Yo={id:"ok",label:"OK",variant:"primary"},gs={id:"cancel",label:"Cancel",variant:"default"},um={id:"close",label:"Close",variant:"default"};let Yi=null;function pm(){return(!Yi||!document.body.contains(Yi))&&(Yi=document.createElement("div"),Yi.id="global-dialog-container",document.body.appendChild(Yi)),Yi}class fm{constructor(){this.contributions=new Map,this.contributionsChangeScheduled=!1,this.loadContributions(),Ie(St,t=>{t.target===Mi&&(this.contributionsChangeScheduled||(this.contributionsChangeScheduled=!0,queueMicrotask(()=>{this.contributionsChangeScheduled=!1,this.loadContributions()})))})}loadContributions(){const t=B.getContributions(Mi);this.contributions.clear();for(const i of t){if(!i.id){Ei.warn("Dialog contribution missing id, skipping");continue}if(!i.component){Ei.warn(`Dialog contribution "${i.id}" has no component function, skipping`);continue}if(!i.onButton){Ei.warn(`Dialog contribution "${i.id}" has no onButton callback, skipping`);continue}this.contributions.set(i.id,i)}}async open(t,i){const o=this.contributions.get(t);if(!o)throw Ei.error(`Dialog "${t}" not found`),new Error(`Dialog "${t}" not found`);return new Promise(r=>{const a=pm();let s=!0,l=null;const d=async()=>{if(s){if(s=!1,l)try{await l.dispose()}catch(g){const b=g instanceof Error?g.message:String(g);Ei.error(`Error disposing dialog content for "${t}": ${b}`)}try{const g=l?l.getResult():void 0;await o.onButton("close",g,f)}catch(g){const b=g instanceof Error?g.message:String(g);Ei.error(`Error executing close callback for dialog "${t}": ${b}`)}gt(p``,a),r()}},h=async g=>{try{const b=l?l.getResult():void 0;await o.onButton(g,b,f)!==!1&&d()}catch(b){const C=b instanceof Error?b.message:String(b);Ei.error(`Error executing button callback for dialog "${t}": ${C}`),d()}},u=o.buttons&&o.buttons.length>0?o.buttons:[Yo];i&&typeof i=="object"&&(i.close=d);const f={...i,close:d},m=p`
                <wa-dialog label="${o.label||t}" open @wa-request-close=${d}>
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
            `;gt(m,a),(async()=>{const g=Array.from(a.querySelectorAll("*"));for(const b of g)if(b instanceof ii){await b.updateComplete,l=b;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(t){return this.contributions.has(t)}}const Zr=new fm;ke.put("dialogService",Zr);const Ze="events/filesys/workspaceChanged",qt="events/filesys/workspaceConnected",Ce=ti("WorkspaceService");class xl{constructor(){this.state={}}getWorkspacePath(){const t=[];let i=this,o;for(;i;){t.push(i.getName());const a=i.getParent();a||(o=i),i=a}t.reverse();const r=typeof P?.getWorkspaceSync=="function"?P.getWorkspaceSync():void 0;if(r&&o&&"isDirectChild"in r&&typeof r.isDirectChild=="function"&&r.isDirectChild(o)){const a=r.getFolderNameForDirectory(o);if(a&&t.length>0)return t.length>1?a+"/"+t.slice(1).join("/"):a}return t.shift(),t.join("/")}getWorkspace(){let t=this;for(;t;){const i=t.getParent();if(i)t=i;else break}return t}}var bs=(e=>(e[e.TEXT=0]="TEXT",e[e.BINARY=1]="BINARY",e))(bs||{}),kl=(e=>(e[e.BASE64=0]="BASE64",e))(kl||{});class ze extends xl{}class Re extends xl{}class Qg extends ze{constructor(t,i){super(),this.contents=t,this.name=i}async getContents(t){return this.contents}async saveContents(t,i){this.contents=t}async size(){return this.contents.length||null}async copyTo(t){throw Error("Not supported")}delete(t,i){throw Error("Not supported")}async rename(t){throw Error("Not supported")}getName(){return this.name}getParent(){}}class mm extends Re{constructor(t,i="/"){super(),this.displayName=i,this.entriesByName=new Map(t.map(o=>[o.getName(),o]))}getFolderNameForDirectory(t){for(const[i,o]of this.entriesByName)if(o===t)return i}isDirectChild(t){return this.getFolderNameForDirectory(t)!==void 0}getName(){return this.displayName}getParent(){}async listChildren(t){return Array.from(this.entriesByName.values())}async getResource(t,i){const o=t?.replace(/^\/+/,"").trim();if(!o)return null;const r=o.indexOf("/"),a=r>=0?o.slice(0,r).trim():o.trim(),s=r>=0?o.slice(r+1).trim():"",l=this.entriesByName.get(a);return l?s?l.getResource(s,i):l:null}touch(){for(const t of this.entriesByName.values())t.touch()}async delete(t,i){throw new Error("Delete not supported on workspace root")}async copyTo(t){throw new Error("Copy not supported on workspace root")}async rename(t){throw new Error("Rename not supported on workspace root")}getFolderByName(t){return this.entriesByName.get(t)}}class ba extends Re{constructor(t){super(),this.backendType=t.backendType,this.persistedData=t.data,this.name=t.name}getName(){return this.name}getParent(){}async listChildren(t){return[]}async getResource(t,i){throw new Error(`Workspace backend "${this.backendType}" is not available in this environment.`)}touch(){}async delete(t,i){throw new Error(`Cannot modify workspace folder for missing backend "${this.backendType}".`)}async copyTo(t){throw new Error(`Cannot copy from workspace folder for missing backend "${this.backendType}".`)}async rename(t){throw new Error(`Cannot rename workspace folder for missing backend "${this.backendType}".`)}}const wa="workspace_data",Cl=class Sl{constructor(){this._currentWorkspace=void 0,this.folders=[],this.contributions=new Map,this.restoredTypes=new Set;let t;this.initPromise=new Promise(i=>{t=i}),this.loadPersistedWorkspace(t)}getWorkspaceSync(){return this._currentWorkspace}registerContribution(t){this.contributions.set(t.type,t),this.tryRestoreForContribution(t)}getContributions(){return Array.from(this.contributions.values())}async tryRestoreForContribution(t){if(await this.initPromise,this.restoredTypes.has(t.type))return;if(this.folders.filter(l=>l.type===t.type).some(l=>!(l.directory instanceof ba))){this.restoredTypes.add(t.type);return}const r=await ft.getObject(wa);if(!r?.folders||!Array.isArray(r.folders)){this.restoredTypes.add(t.type);return}const a=r.folders.filter(l=>l.type===t.type);if(a.length===0){this.restoredTypes.add(t.type);return}this.folders=this.folders.filter(l=>!(l.type===t.type&&l.directory instanceof ba));for(const l of a)if(t.restore)try{const d=await t.restore(l.data);if(!d)continue;this.folders.push({type:t.type,data:l.data,directory:d})}catch(d){Ce.warn(`Failed to restore folder (${t.type}) on contribution registration:`,d)}if(this.folders.length===0){this.restoredTypes.add(t.type);return}const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s??void 0,await this.persistFolders(),s&&(_(qt,s),Ce.debug(`Workspace folders restored for contribution type: ${t.type}`)),this.restoredTypes.add(t.type)}async loadPersistedWorkspace(t){Ce.debug("Restoring workspace from persistence");try{const i=await ft.getObject(wa);if(i||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),i?.folders&&Array.isArray(i.folders)&&i.folders.length>0){const o=i.folders.map(a=>({type:a.type,data:a.data}));await this.resolveFolders(o);const r=this.buildComposite();this.workspace=Promise.resolve(r),this._currentWorkspace=r??void 0,r&&(_(qt,r),Ce.debug("Workspace restored from persisted folders")),t();return}if(i&&i.type&&i.data!==void 0){const o=this.contributions.get(i.type);if(o?.restore)try{const r=await o.restore(i.data);if(r){this.folders=[{type:i.type,data:i.data,directory:r}];const a=this.buildComposite();this.workspace=Promise.resolve(a),this._currentWorkspace=a??void 0,this.currentType=i.type,await this.persistFolders(),_(qt,a),Ce.debug("Workspace restored from legacy format")}}catch(r){Ce.error("Failed to restore legacy workspace:",r)}}this.workspace||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),t()}finally{if(this.folders.length===0)try{await this.connectFolder({indexeddb:!0,name:Sl.DEFAULT_INDEXEDDB_FOLDER_NAME}),Ce.debug("Connected default IndexedDB workspace")}catch(i){Ce.warn("Failed to connect default IndexedDB folder",i)}}}async resolveFolders(t){this.folders=[];for(const i of t){const o=this.contributions.get(i.type);if(!o?.restore){const r=i.data&&typeof i.data=="object"&&i.data.name||`${i.type} (missing)`,a=new ba({backendType:i.type,name:r,data:i.data});this.folders.push({type:i.type,data:i.data,directory:a});continue}try{const r=await o.restore(i.data);r&&this.folders.push({type:i.type,data:i.data,directory:r})}catch(r){Ce.warn(`Failed to restore folder (${i.type}):`,r)}}}buildComposite(){if(this.folders.length!==0)return new mm(this.folders.map(t=>t.directory))}async persistFolders(){const t=this.folders.length>0?{folders:this.folders.map(i=>({type:i.type,data:i.data}))}:null;await ft.persistObject(wa,t),await ft.persistObject("workspace",null),Ce.debug(`Persisted ${this.folders.length} folder(s)`)}async getFolders(){return await this.initPromise,this.folders.map(t=>({name:t.directory.getName(),type:t.type}))}async getFolderInfoForDirectory(t){await this.initPromise;const i=this.folders.find(s=>s.directory===t);if(!i)return;const o=i.data&&typeof i.data=="object"&&i.data.name||i.directory.getName(),a=this.contributions.get(i.type)?.name??i.type;return{name:o,type:i.type,backendName:a}}async updateFolderName(t,i){await this.initPromise;const o=this.folders.find(a=>a.directory===t);if(!o)return;o.data&&typeof o.data=="object"?o.data={...o.data,name:i}:o.data={name:i},await this.persistFolders();const r=this.buildComposite();this.workspace=Promise.resolve(r),this._currentWorkspace=r??void 0,_(qt,r),Ce.debug(`Updated folder name: ${i}`)}async connectFolder(t){await this.initPromise;const i=Array.from(this.contributions.values()).find(d=>d.canHandle(t));if(!i)throw new Error("No workspace contribution can handle this input");const o=t?.name??i.type;Ce.debug(`Connecting workspace: ${i.type}, ${o}`);const r=await i.connect(t),a=i.persist?await i.persist(r):t;this.folders.push({type:i.type,data:a,directory:r}),await this.persistFolders(),this.currentType=this.folders.length===1?i.type:void 0;const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s,_(qt,s);const l=r.getName();return Ce.info(`Workspace connected: ${i.type} (${l})`),s}async disconnectFolder(t){await this.initPromise;const i=this.folders.findIndex(a=>a.directory===t);if(i<0)return;const o=this.folders[i];Ce.debug(`Disconnecting folder: ${o.directory.getName()} (${o.type})`),this.folders.splice(i,1),await this.persistFolders(),this.folders.length>0?this.currentType=this.folders[0].type:(this.currentType=void 0,Ce.info("Workspace disconnected"));const r=this.buildComposite();this.workspace=Promise.resolve(r),this._currentWorkspace=r??void 0,_(qt,r)}async connectWorkspace(t){return this.connectFolder(t)}async getWorkspace(){if(await this.initPromise,!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return this.folders.length>0}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){await this.initPromise,this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0,this.folders=[],this.currentType=void 0,await this.persistFolders(),_(qt,void 0),Ce.info("Workspace disconnected")}async copyResource(t,i,o){await this.initPromise;const r=this._currentWorkspace;if(!r)throw new Error("No workspace connected.");const a=o?.newName??t.getName(),s=i.getWorkspacePath(),l=s?`${s}/${a}`:a,d=async(u,f)=>{const m=await u.getContents({blob:!0}),g=await r.getResource(f,{create:!0});if(!g)throw new Error(`Failed to create target file: ${f}`);await g.saveContents(m)},h=async(u,f)=>{for(const m of await u.listChildren(!1)){const g=`${f}/${m.getName()}`;m instanceof ze?await d(m,g):m instanceof Re&&await h(m,g)}};if(t instanceof ze)await d(t,l);else if(t instanceof Re)await h(t,l);else throw new Error("Unsupported resource type for copy operation.");o?.move&&await t.delete(void 0,!0)}};Cl.DEFAULT_INDEXEDDB_FOLDER_NAME="My Folder";let gm=Cl;const P=new gm;ke.put("workspaceService",P);class Va extends ze{constructor(t,i){super(),this.fileHandle=t,this.parent=i}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(t){const i=await this.fileHandle.getFile();return!t||t?.contentType==bs.TEXT?await i.text():t?.encoding==kl.BASE64||t?.uri?URL.createObjectURL(i):t?.blob?i:i.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(t,i){const o=await this.fileHandle.createWritable();if(t&&typeof t.pipeTo=="function")await t.pipeTo(o);else{const r=o.getWriter();try{await r.write(t)}finally{await r.close()}}}async copyTo(t){const i=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(t,{create:!0})).saveContents(i)}async rename(t){const i=this.getParent();if(!i)throw new Error("Cannot rename root resource");if(this.getName()!==t){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(t)}catch(o){throw o.name==="NotAllowedError"||o.message?.includes("not allowed")||o.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):o}await i.listChildren(!0),_(Ze,P.getWorkspaceSync()??this.getWorkspace())}}}class Rt extends Re{constructor(t,i){super(),this.dirHandle=t,this.parent=i}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(t=!1){return t||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const i={};try{for await(const o of this.dirHandle.values()){const a=o.kind==="file"?new Va(o,this):new Rt(o,this);i[a.getName()]=a}}catch(o){if(o.name==="NotFoundError")return this.files={},[];throw o}return this.files=i,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(t,i){if(!t)throw new Error("No path provided");const o=t.split("/");let r=this,a=!1;try{for(let s=0;s<o.length;s++){let l=o[s];if(l&&(l=l.trim()),!l)break;if(r instanceof Rt){if(await r.listChildren(),!r.files)return null;const d=r.files[l];if(d)r=d;else if(i?.create)if(a=!0,s<o.length-1)try{const h=await r.dirHandle.getDirectoryHandle(l,{create:!0}),u=new Rt(h,r);r.files[l]=u,r=u,r instanceof Rt&&await r.listChildren();continue}catch(h){throw h.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${o.slice(0,s+1).join("/")}`):h}else try{const h=await r.dirHandle.getFileHandle(l,{create:!0}),u=new Va(h,r);return r.files[l]=u,u}catch(h){throw h.name==="NotFoundError"?new Error(`File not found or not accessible: ${o.join("/")}`):h}else return null}}}finally{a&&_(Ze,P.getWorkspaceSync()??this.getWorkspace())}return r}touch(){_(Ze,P.getWorkspaceSync()??this.getWorkspace())}async delete(t,i=!0){if(!t){const o=this.getParent();return o instanceof Rt&&(await o.listChildren(),o.files&&delete o.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,o?.delete(this.getName())}return this.dirHandle.removeEntry(t,{recursive:i}).then(async()=>{this.files&&delete this.files[t],_(Ze,P.getWorkspaceSync()??this.getWorkspace())})}async copyTo(t){for(const i of await this.listChildren()){const o=[t,i.getName()].join("/");await i.copyTo(o)}}async rename(t){const i=this.getParent();if(!i)throw new Error("Cannot rename workspace root");if(this.getName()!==t){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(t)}catch(o){throw o.name==="NotAllowedError"||o.message?.includes("not allowed")||o.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):o}await i.listChildren(!0),_(Ze,P.getWorkspaceSync()??this.getWorkspace())}}}P.registerContribution({type:"filesystem",name:"fs",canHandle(e){return e&&"kind"in e&&e.kind==="directory"},async connect(e){return new Rt(e)},async restore(e){if(e&&"kind"in e&&e.kind==="directory")return new Rt(e,void 0)},async persist(e){return e instanceof Rt?e.getHandle():null}});const hn=Object.freeze(Object.defineProperty({__proto__:null,FileSysDirHandleResource:Rt,FileSysFileHandleResource:Va},Symbol.toStringTag,{value:"Module"})),bm=".opfs";async function un(){if(typeof navigator>"u"||!navigator.storage?.getDirectory)throw new Error("OPFS is not available in this environment");return await navigator.storage.getDirectory()}class va extends Re{constructor(t){super(),this.inner=t}getName(){return bm}getParent(){return this.inner.getParent()}async listChildren(t){return this.inner.listChildren(t)}async getResource(t,i){return this.inner.getResource(t,i)}touch(){this.inner.touch()}async delete(t,i){return this.inner.delete(t,i)}async copyTo(t){return this.inner.copyTo(t)}async rename(t){return this.inner.rename(t)}}P.registerContribution({type:"opfs",name:"opfs",canHandle(e){return e&&typeof e=="object"&&e.opfs===!0},async connect(e){const t=await un(),o=(await Promise.resolve().then(()=>hn)).FileSysDirHandleResource,r=new o(t);return new va(r)},async restore(e){if(e&&typeof e=="object"&&e.opfs===!0){const t=await un(),o=(await Promise.resolve().then(()=>hn)).FileSysDirHandleResource,r=new o(t);return new va(r)}},async persist(e){return e instanceof va?{opfs:!0}:null}});const wm="eclipse-lyra-workspace-idb",Ve="files";let ya=null;async function bi(){if(typeof indexedDB>"u")throw new Error("IndexedDB is not available in this environment");return ya||(ya=new Promise((e,t)=>{const i=indexedDB.open(wm,1);i.onerror=()=>t(i.error),i.onsuccess=()=>e(i.result),i.onupgradeneeded=o=>{const r=o.target.result;r.objectStoreNames.contains(Ve)||r.createObjectStore(Ve)}})),ya}async function vm(){const e="IndexedDB",t=await P.getFolders(),i=new Set(t.filter(r=>r.type==="indexeddb").map(r=>r.name));if(!i.has(e))return e;let o=1;for(;i.has(`${e} (${o})`);)o+=1;return`${e} (${o})`}function uo(e){return e?e.split("/").filter(Boolean).join("/"):""}function _o(e,t){const i=uo(e),o=uo(t);return i?o?`${i}/${o}`:i:o}function po(e,t){const i=uo(t);return i?`${e}/${i}`:e}function ym(e,t){const i=uo(t);return i?`${e}/${i}/`:`${e}/`}async function pr(e,t){const r=(await bi()).transaction(Ve,"readonly").objectStore(Ve),a=t?po(e,t):e;return await new Promise((s,l)=>{const d=r.get(a);d.onsuccess=()=>s(d.result),d.onerror=()=>l(d.error)})}async function Mo(e,t,i){const a=(await bi()).transaction(Ve,"readwrite").objectStore(Ve),s=t?po(e,t):e;await new Promise((l,d)=>{const h=a.put(i,s);h.onsuccess=()=>l(),h.onerror=()=>d(h.error)})}async function pn(e,t){const r=(await bi()).transaction(Ve,"readwrite").objectStore(Ve),a=t?po(e,t):e;await new Promise((s,l)=>{const d=r.delete(a);d.onsuccess=()=>s(),d.onerror=()=>l(d.error)})}async function xm(e,t){const r=(await bi()).transaction(Ve,"readwrite").objectStore(Ve),a=po(e,t),s=a+"/",l=r.openCursor();await new Promise((d,h)=>{l.onerror=()=>h(l.error),l.onsuccess=u=>{const f=u.target.result;if(!f){d();return}const m=String(f.key);(m===a||m.startsWith(s))&&f.delete(),f.continue()}})}async function km(e,t,i){const a=(await bi()).transaction(Ve,"readwrite").objectStore(Ve),s=po(e,t),l=po(e,i),d=a.openCursor(),h=[];await new Promise((u,f)=>{d.onerror=()=>f(d.error),d.onsuccess=m=>{const g=m.target.result;if(!g){u();return}const b=String(g.key);if(b===s||b.startsWith(s+"/")){const C=b.slice(s.length),E=l+C,L=g.value;h.push(()=>{g.delete(),a.put(L,E)})}g.continue()}});for(const u of h)u()}async function Cm(e,t){const r=(await bi()).transaction(Ve,"readonly").objectStore(Ve),a=ym(e,t),s=r.openCursor(),l=new Set,d=new Map;await new Promise((u,f)=>{s.onerror=()=>f(s.error),s.onsuccess=m=>{const g=m.target.result;if(!g){u();return}const b=String(g.key),C=g.value;if(!b.startsWith(a)){g.continue();return}const E=b.slice(a.length);if(!E){g.continue();return}const L=E.indexOf("/"),S=L===-1?E:E.slice(0,L);L===-1?C.type==="dir"?l.add(S):d.set(S,C):l.add(S),g.continue()}});const h=[];for(const u of l)h.push({name:u,entry:{type:"dir"},type:"dir"});for(const[u,f]of d)l.has(u)||h.push({name:u,entry:f,type:"file"});return h}function Sm(e){return e instanceof At?e.getRootId():""}class xa extends ze{constructor(t,i){super(),this.path=uo(t),this.parent=i}getName(){const t=this.path.split("/");return t[t.length-1]||""}getParent(){return this.parent}getRootId(){return Sm(this.parent)}async delete(){await pn(this.getRootId(),this.path),_(Ze,P.getWorkspaceSync()??this.getWorkspace())}async getContents(t){const i=await pr(this.getRootId(),this.path);let o=i?.content;if(typeof o=="string"){const a=new Blob([o],{type:i?.mimeType||"text/plain"});o=a,i&&(i.content=a,await Mo(this.getRootId(),this.path,i))}if(!t||t.contentType===bs.TEXT)return o?await o.text():"";let r;return o?r=o:r=new Blob([],{type:i?.mimeType}),t.blob?r:t.uri?URL.createObjectURL(r):r.stream()}async saveContents(t,i){let o,r;if(t instanceof Blob)o=t,r=t.type||void 0;else if(typeof t=="string")r="text/plain",o=new Blob([t],{type:r});else if(t instanceof ReadableStream){const a=new Response(t);o=await a.blob(),r=a.headers.get("content-type")??void 0}else{const a=String(t??"");r="text/plain",o=new Blob([a],{type:r})}await Mo(this.getRootId(),this.path,{type:"file",content:o,mimeType:r}),_(Ze,P.getWorkspaceSync()??this.getWorkspace())}async size(){const i=(await pr(this.getRootId(),this.path))?.content;return i?i.size:null}async copyTo(t){const i=await this.getContents({blob:!0}),o=await this.getWorkspace().getResource(t,{create:!0});if(!o)throw new Error(`Failed to create target file: ${t}`);await o.saveContents(i)}async rename(t){if(this.getName()===t)return;const i=this.getParent(),o=i instanceof At?i.getPath():"",r=_o(o,t),a=this.getRootId(),s=await pr(a,this.path);if(!s)throw new Error("File not found in IndexedDB");await pn(a,this.path),await Mo(a,r,s),_(Ze,P.getWorkspaceSync()??this.getWorkspace())}}class At extends Re{constructor(t,i){super(),this.path=uo(t),this.parent=i}getPath(){return this.path}getName(){if(!this.path)return"";const t=this.path.split("/");return t[t.length-1]}getParent(){return this.parent}getRoot(){const t=this.getParent();return t?t.getRoot():this}getRootId(){const t=this.getRoot();return t instanceof fr?t.getRootId():""}async listChildren(t){const i=await Cm(this.getRootId(),this.path),o=[];for(const r of i){const a=_o(this.path,r.name);r.type==="dir"?o.push(new At(a,this)):o.push(new xa(a,this))}return o}async getResource(t,i){if(!t)throw new Error("No path provided");const o=t.split("/").filter(a=>a.trim());let r=this;for(let a=0;a<o.length;a++){const s=o[a],l=a===o.length-1,d=r.getPath(),h=_o(d,s),u=this.getRootId(),f=await pr(u,h);if(!f){if(!i?.create)return null;if(l)return await Mo(u,h,{type:"file",content:new Blob([])}),_(Ze,P.getWorkspaceSync()??this.getWorkspace()),new xa(h,r);await Mo(u,h,{type:"dir"}),r=new At(h,r);continue}if(l)return f.type==="dir"?new At(h,r):new xa(h,r);if(f.type!=="dir")return null;r=new At(h,r)}return r}touch(){_(Ze,P.getWorkspaceSync()??this.getWorkspace())}async delete(t,i=!0){if(!t){const r=this.getParent();if(r instanceof At){await r.delete(this.getName());return}return}const o=_o(this.path,t);await xm(this.getRootId(),o),_(Ze,P.getWorkspaceSync()??this.getWorkspace())}async copyTo(t){for(const i of await this.listChildren(!1)){const o=[t,i.getName()].join("/");await i.copyTo(o)}}async rename(t){if(this.getName()===t)return;const i=this.getParent();if(!(i instanceof At))throw new Error("Cannot rename IndexedDB root directory");const o=this.getPath(),r=_o(i.getPath(),t);await km(this.getRootId(),o,r),_(Ze,P.getWorkspaceSync()??this.getWorkspace())}}class fr extends At{constructor(t,i){super(""),this.displayName=t||"IndexedDB",this.rootId=i}getRootId(){return this.rootId}getName(){return this.displayName}getParent(){}async rename(t){const i=String(t??"").trim();!i||i===this.displayName||(this.displayName=i,await P.updateFolderName(this,i))}}function $m(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"default-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}P.registerContribution({type:"indexeddb",name:"idb",canHandle(e){return e&&typeof e=="object"&&e.indexeddb===!0},async connect(e){await bi();const t=e.name&&String(e.name).trim(),i=t&&t.length>0?t:await vm(),o=$m();return new fr(i,o)},async restore(e){if(e&&typeof e=="object"&&e.indexeddb===!0&&e.rootId){await bi();const t=e.name&&String(e.name).trim()||"IndexedDB";return new fr(t,String(e.rootId))}},async persist(e){return e instanceof fr?{indexeddb:!0,name:e.getName(),rootId:e.getRootId()}:null}});const Ke=ti("MarketplaceRegistry"),fn="events/marketplaceregistry/changed",mn="marketplace.catalogUrls";class Em{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(t=>{Ke.error(`Failed to refresh catalogs on init: ${t.message}`)})})}async loadCatalogUrls(){try{const t=await ne.get(mn);this.catalogUrls=Array.isArray(t)?t:[]}catch(t){Ke.error(`Failed to load catalog URLs: ${t}`),this.catalogUrls=[]}}async saveCatalogUrls(){await ne.set(mn,this.catalogUrls),_(fn,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(t){if(!this.isValidUrl(t))throw new Error(`Invalid catalog URL: ${t}`);if(this.catalogUrls.includes(t)){Ke.debug(`Catalog URL already exists: ${t}`);return}this.catalogUrls.push(t),await this.saveCatalogUrls(),Ke.debug(`Added catalog URL: ${t}`);try{await this.refreshCatalogs()}catch(i){Ke.warn(`Failed to refresh catalogs immediately after adding: ${i}`)}}async addCatalogUrls(t){let i=0;for(const o of t){if(!this.isValidUrl(o)){Ke.warn(`Skipping invalid catalog URL: ${o}`);continue}this.catalogUrls.includes(o)||(this.catalogUrls.push(o),Ke.debug(`Added catalog URL: ${o}`),i++)}if(i!==0){await this.saveCatalogUrls();try{await this.refreshCatalogs()}catch(o){Ke.warn(`Failed to refresh catalogs after adding URLs: ${o}`)}}}async removeCatalogUrl(t){const i=this.catalogUrls.indexOf(t);i!==-1&&(this.catalogUrls.splice(i,1),await this.saveCatalogUrls(),Ke.info(`Removed catalog URL: ${t}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(t){try{const i=new URL(t);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}async fetchCatalog(t){const i=this.loadingPromises.get(t);if(i)return i;const o=(async()=>{try{const r=await fetch(t,{method:"GET",headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const a=await r.json();if(!a.extensions||!Array.isArray(a.extensions))throw new Error("Invalid catalog format: extensions array is required");return{name:a.name,description:a.description,extensions:a.extensions||[]}}catch(r){throw Ke.error(`Failed to fetch catalog from ${t}: ${r}`),r}finally{this.loadingPromises.delete(t)}})();return this.loadingPromises.set(t,o),o}async refreshCatalogs(){const t=this.catalogUrls.map(r=>this.fetchCatalog(r).catch(a=>(Ke.warn(`Failed to refresh catalog ${r}: ${a.message}`),null))),i=await Promise.allSettled(t);let o=0;i.forEach(r=>{if(r.status==="fulfilled"&&r.value){const a=r.value;a.extensions&&a.extensions.forEach(s=>{if(!oe.getExtensions().find(l=>l.id===s.id)){const l={...s,external:!0};oe.registerExtension(l),o++}})}}),Ke.debug(`Refreshed ${this.catalogUrls.length} catalogs, ${o} extensions registered`),o>0&&Ke.info(`Marketplace: ${o} new extension(s) available`),_(fn,{type:"refreshed"})}getMarketplaceExtension(t){const i=oe.getExtensions().find(o=>o.id===t);if(i&&i.external)return i}isMarketplaceExtension(t){const i=oe.getExtensions().find(o=>o.id===t);return i!==void 0&&i.external===!0}}const $l=new Em;ke.put("marketplaceRegistry",$l);const D=ti("AppLoader");function gn(e){if(!e)return"standard";const t=e.layout??e.layoutId;return typeof t=="object"?t.id:t??"standard"}function Lm(e){const t={};for(const[i,o]of Object.entries(e))t[i]=typeof o=="boolean"?o?"true":"false":o;return t}function $t(e){return e instanceof Error?e.message:String(e)}function Am(e){try{const i=new URL(e).pathname.split("/").filter(Boolean);return i.length>0?i[i.length-1]:void 0}catch{const t=e.split("/").filter(Boolean);return t.length>0?t[t.length-1]:void 0}}function zm(){const t=window.location.pathname.split("/").filter(Boolean);if(t.length===0)return;const i=t[0];if(!(!i||i==="index.html"||i.endsWith(".html")))return i}const ws=class Po{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(t,i){if(i?.hostConfig===!0&&typeof sn<"u"){const o=sn;t.name===void 0&&(t.name=o.name),t.version===void 0&&(t.version=o.version),t.description===void 0&&(t.description=o.description),t.dependencies===void 0&&(t.dependencies=o.dependencies),t.marketplaceCatalogUrls===void 0&&(t.marketplaceCatalogUrls=o.marketplaceCatalogUrls)}t.name=t.name??"app",t.version=t.version??"0.0.0",this.apps.has(t.name)&&D.warn(`App '${t.name}' is already registered. Overwriting.`),t.marketplaceCatalogUrls?.length&&$l.addCatalogUrls(t.marketplaceCatalogUrls).catch(()=>{}),this.apps.set(t.name,t),i?.defaultAppName&&(this.defaultAppName=i.defaultAppName),i?.container&&(this.container=i.container),i?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(t){this.systemRequiredExtensions.add(t)}async loadAppFromUrl(t){D.info(`Loading app from URL: ${t}...`);try{const i=await import(t);if(!i.default)throw new Error(`Module at ${t} does not have a default export`);const o=i.default;if(!o.name||!o.version)throw new Error(`Module at ${t} does not export a valid AppDefinition (name and version required)`);return D.info(`Successfully loaded app definition from URL: ${o.name}`),o}catch(i){throw D.error(`Failed to load app from URL ${t}: ${$t(i)}`),i}}async start(){if(this.started){D.debug("AppLoader already started");return}this.started=!0;const t=new URLSearchParams(window.location.search),i=t.get("app"),o=t.get("appId"),r=zm(),a=this.apps.size;let s;if(i&&(s=Am(i),s&&D.info(`Extracted app ID from URL path: ${s}`)),r&&D.info(`Extracted app ID from current page path: ${r}`),i)try{D.info(`URL parameter 'app' found: ${i}, attempting to load extension or app`);try{await oe.loadExtensionFromUrl(i),D.info(`Successfully loaded extension from URL: ${i}`)}catch(d){D.info(`Failed to load as extension, trying as app definition: ${$t(d)}`);try{const h=await this.loadAppFromUrl(i);if(this.registerApp(h),!h.name)throw new Error("App from URL has no name after registration");await this.loadApp(h.name,this.container),D.info(`Successfully loaded app from URL: ${i}`);return}catch(h){throw D.error(`Failed to load from URL as both extension and app: ${$t(h)}`),h}}}catch(d){D.error(`Failed to load from URL parameter, falling back to default app: ${$t(d)}`)}const l=await this.selectAppToLoad({appIdFromUrl:o,appIdFromPath:r,appIdFromAppUrl:s,appsBeforeExtension:a});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}findAppNameBySegment(t){if(this.apps.has(t))return t;for(const i of this.apps.values())if(i.path===t||i.name&&i.name.endsWith("/"+t))return i.name??void 0}dispatchLoadProgress(t){window.dispatchEvent(new CustomEvent("app-load-progress",{detail:{message:t}}))}async loadApp(t,i){const o=this.apps.get(t);if(!o)throw new Error(`App '${t}' not found. Make sure it's registered.`);if(this.dispatchLoadProgress("Starting…"),this.currentApp&&(D.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(D.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(a=>{oe.disable(a)}))),Lr.applyAppNameRemaps(o.remaps),o.remaps?.length){const a=new Set;for(const s of o.remaps)for(const l of s.targets)a.add(l);for(const s of a){const l=B.getContributions(s);_(St,{target:s,contributions:l})}}o.contributions&&(D.info("Registering app contributions..."),o.contributions.ui&&(o.contributions.ui.forEach(a=>{const s=a.target;s&&B.registerContribution(s,a)}),D.info(`Registered ${o.contributions.ui.length} UI contributions`)),o.contributions.extensions&&(o.contributions.extensions.forEach(a=>{oe.registerExtension(a)}),D.info(`Registered ${o.contributions.extensions.length} app extensions`)));const r=new Set(o.extensions||[]);this.systemRequiredExtensions.forEach(a=>r.add(a)),o.extensions=Array.from(r),this.dispatchLoadProgress("Loading extensions…"),await oe.loadEnabledExtensions(),o.extensions.length>0&&(this.dispatchLoadProgress("Enabling extensions…"),await Promise.all(o.extensions.map(a=>oe.enableAsync(a).catch(s=>{D.error(`Failed to load extension ${a}: ${$t(s)}`)})))),o.initialize&&(this.dispatchLoadProgress("Initializing…"),D.info(`Initializing ${o.name}...`),await o.initialize()),this.currentApp=o,D.info(`App ${o.name} loaded successfully`),this.preferredLayoutId=await this.getPreferredLayoutId(),this.updateDocumentMetadata(o),i&&(this.dispatchLoadProgress("Rendering layout…"),this.renderApp(i)),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appName:o.name}}))}updateDocumentMetadata(t){if(document.title=t.name??"",t.metadata?.favicon){const i=t.metadata.favicon;let o=document.querySelector("link[rel*='icon']");o||(o=document.createElement("link"),o.rel="icon",document.head.appendChild(o)),o.type="image/svg+xml",o.href=i}}renderApp(t){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const i=this.preferredLayoutId??gn(this.currentApp),o=B.getContributions(Rr);let r=o.find(d=>d.id===i);if(r||(D.warn(`Layout '${i}' not found, falling back to 'standard'`),r=o.find(d=>d.id==="standard")),!r)throw new Error(`No layout found for layoutId '${i}' and no 'standard' layout registered.`);const a=r.component;let s={};a&&typeof a=="object"&&"tag"in a&&a.attributes&&(s={...a.attributes});const l=this.currentApp?.layout;if(typeof l=="object"&&l.id===i&&l.props&&Object.assign(s,Lm(l.props)),t.innerHTML="",typeof a=="string"){const d=document.createElement(a);for(const[h,u]of Object.entries(s))d.setAttribute(h,u);t.appendChild(d)}else if(a&&typeof a=="object"&&"tag"in a){const d=document.createElement(a.tag);for(const[h,u]of Object.entries(s))d.setAttribute(h,u);t.appendChild(d)}else if(typeof a=="function")gt(a(),t);else throw new Error(`Layout '${r.id}' has invalid component.`);r.onShow&&requestAnimationFrame(()=>{Promise.resolve(r.onShow()).catch(d=>D.error(`Layout onShow failed for '${r.id}': ${$t(d)}`))})}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await ne.get(Po.PREFERRED_APP_KEY)}catch(t){D.debug(`Failed to get preferred app ID from settings: ${$t(t)}`);return}}async setPreferredAppId(t){if(!this.apps.has(t))throw new Error(`App '${t}' not found. Make sure it's registered.`);try{await ne.set(Po.PREFERRED_APP_KEY,t),this.defaultAppName=t,D.info(`Set preferred app to: ${t}`)}catch(i){throw D.error(`Failed to persist preferred app: ${$t(i)}`),i}}getRegisteredLayouts(){return B.getContributions(Rr)}getCurrentLayoutId(){return this.preferredLayoutId??gn(this.currentApp)}async getPreferredLayoutId(){try{return await ne.get(Po.PREFERRED_LAYOUT_KEY)}catch(t){D.debug(`Failed to get preferred layout ID: ${$t(t)}`);return}}async setPreferredLayoutId(t){if(!this.getRegisteredLayouts().some(o=>o.id===t))throw new Error(`Layout '${t}' not found.`);try{await ne.set(Po.PREFERRED_LAYOUT_KEY,t),this.preferredLayoutId=t,D.info(`Set preferred layout to: ${t}`),this.currentApp&&this.container&&this.renderApp(this.container),window.dispatchEvent(new CustomEvent("layout-changed",{detail:{layoutId:t}}))}catch(o){throw D.error(`Failed to persist preferred layout: ${$t(o)}`),o}}async selectAppToLoad(t){const{appIdFromUrl:i,appIdFromPath:o,appIdFromAppUrl:r,appsBeforeExtension:a}=t;if(i){const d=this.findAppNameBySegment(i)??i;if(this.apps.has(d))return D.info(`Loading app specified by URL parameter 'appId': ${d}`),d;D.warn(`App '${i}' from URL parameter not found`)}if(o){const d=this.findAppNameBySegment(o);if(d)return D.info(`Loading app from URL path: ${o}`),d;D.debug(`App for path '${o}' not found, continuing search`)}if(r){const d=this.findAppNameBySegment(r)??r;if(this.apps.has(d))return D.info(`Loading app using segment from app URL path: ${d}`),d}if(this.apps.size>a){const d=Array.from(this.apps.values()).slice(a);if(d.length>0){const h=d[0];return D.info(`Loading app registered by extension: ${h.name}`),h.name}}const s=await this.getPreferredAppId();if(s&&this.apps.has(s))return D.info(`Loading preferred app from settings: ${s}`),s;if(this.defaultAppName&&this.apps.has(this.defaultAppName))return this.defaultAppName;this.defaultAppName&&D.warn(`Default app '${this.defaultAppName}' not found`);const l=this.getRegisteredApps();if(l.length>0)return l[0].name}};ws.PREFERRED_APP_KEY="preferredAppName";ws.PREFERRED_LAYOUT_KEY="preferredLayoutId";let Tm=ws;const ai=new Tm;ke.put("appLoaderService",ai);var Rm=Object.defineProperty,Dm=Object.getOwnPropertyDescriptor,Zo=(e,t,i,o)=>{for(var r=o>1?void 0:o?Dm(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Rm(t,i,r),r};let Ni=class extends ii{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(e){super.firstUpdated(e),this.inputValue=this.defaultValue,await this.updateComplete;const t=this.shadowRoot?.querySelector("wa-input");if(t){const i=t.shadowRoot?.querySelector("input");i&&(i.focus(),i.select())}}getResult(){return this.inputValue}handleInput(e){this.inputValue=e.target.value}handleKeyDown(e){e.key==="Enter"?(e.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):e.key==="Escape"&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return p`
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
        `];Zo([c({type:String})],Ni.prototype,"message",2);Zo([c({type:String,attribute:"default-value"})],Ni.prototype,"defaultValue",2);Zo([c({type:Boolean})],Ni.prototype,"markdown",2);Zo([w()],Ni.prototype,"inputValue",2);Ni=Zo([v("lyra-prompt-dialog-content")],Ni);B.registerContribution(Mi,{id:"prompt",label:"Input",buttons:[Yo,gs],component:e=>e?p`
            <lyra-prompt-dialog-content 
                .message="${e.message}"
                .defaultValue="${e.defaultValue}"
                .markdown="${e.markdown}"
            ></lyra-prompt-dialog-content>
        `:p`<div>Error: No prompt dialog state</div>`,onButton:async(e,t,i)=>(i&&(e==="ok"?i.resolve(t||""):i.resolve(null)),!0)});async function Im(e,t="",i=!1){return new Promise(o=>{Zr.open("prompt",{message:e,defaultValue:t,markdown:i,resolve:o})})}var Om=Object.defineProperty,_m=Object.getOwnPropertyDescriptor,vs=(e,t,i,o)=>{for(var r=o>1?void 0:o?_m(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Om(t,i,r),r};let Ir=class extends ii{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};vs([c({type:String})],Ir.prototype,"message",2);vs([c({type:Boolean})],Ir.prototype,"markdown",2);Ir=vs([v("lyra-info-dialog-content")],Ir);B.registerContribution(Mi,{id:"info",label:"Information",buttons:[Yo],component:e=>e?p`
            <lyra-info-dialog-content 
                .message="${e.message}"
                .markdown="${e.markdown}"
            ></lyra-info-dialog-content>
        `:p`<div>Error: No info dialog state</div>`,onButton:async(e,t,i)=>(i&&i.resolve&&i.resolve(),!0)});var Pm=Object.defineProperty,Fm=Object.getOwnPropertyDescriptor,ys=(e,t,i,o)=>{for(var r=o>1?void 0:o?Fm(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Pm(t,i,r),r};let Or=class extends ii{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};ys([c({type:String})],Or.prototype,"message",2);ys([c({type:Boolean})],Or.prototype,"markdown",2);Or=ys([v("lyra-confirm-dialog-content")],Or);B.registerContribution(Mi,{id:"confirm",label:"Confirm",buttons:[Yo,gs],component:e=>e?p`
            <lyra-confirm-dialog-content 
                .message="${e.message}"
                .markdown="${e.markdown}"
            ></lyra-confirm-dialog-content>
        `:p`<div>Error: No confirm dialog state</div>`,onButton:async(e,t,i)=>(i&&(e==="ok"?i.resolve(!0):i.resolve(!1)),!0)});async function Ua(e,t=!1){return new Promise(i=>{Zr.open("confirm",{message:e,markdown:t,resolve:i})})}var Mm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,Gi=(e,t,i,o)=>{for(var r=o>1?void 0:o?Nm(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Mm(t,i,r),r};let Jt=class extends ii{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(e){super.firstUpdated(e),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const t=this.closest("wa-dialog");t&&(this.dialogElement=t,this.updateDialogLabel());const i=this.closest(".dialog-service-content");if(i){const o=i.parentElement?.querySelector(".dialog-service-footer");o&&(o.style.display="none")}}updated(e){super.updated(e),e.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),e.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(e,t,i){this.currentTitle=e,this.currentMessage=t,this.actions=[...i],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(e){e.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const e=this.actions.filter(i=>i.label!=="Close"),t=this.actions.filter(i=>i.label==="Close");return p`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${e.map(i=>p`
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
                        ${t.map(i=>p`
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
        `}};Jt.styles=[...ii.styles,k`
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
        `];Gi([c({type:String})],Jt.prototype,"title",2);Gi([c({type:String})],Jt.prototype,"message",2);Gi([c({type:Boolean})],Jt.prototype,"markdown",2);Gi([w()],Jt.prototype,"actions",2);Gi([w()],Jt.prototype,"currentTitle",2);Gi([w()],Jt.prototype,"currentMessage",2);Jt=Gi([v("lyra-navigable-info-dialog-content")],Jt);B.registerContribution(Mi,{id:"navigable-info",label:"Information",buttons:[um],component:e=>{if(!e)return p`<div>Error: No navigable info dialog state</div>`;const t=p`
            <lyra-navigable-info-dialog-content 
                .title="${e.title}"
                .message="${e.message}"
                .markdown="${e.markdown}"
            ></lyra-navigable-info-dialog-content>
        `;return(async()=>{const i=document.querySelector("lyra-navigable-info-dialog-content");i&&(await i.updateComplete,i.actions=e.actions||[],i.resolveCallback=e.resolve,e.updateDialogRef&&(e.updateDialogRef.current=(o,r,a)=>{i.updateDialog(o,r,a)}))})(),t},onButton:async(e,t,i)=>i&&e==="close"&&i.resolve?(i.resolve(),!0):!1});var Bm=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,ko=(e,t,i,o)=>{for(var r=o>1?void 0:o?Vm(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Bm(t,i,r),r};let wi=class extends ii{constructor(){super(...arguments),this.mode="either",this.selectedPath=null,this.rootNodes=[],this.loading=!1,this.loadError=null}async doInitUI(){await this.loadWorkspaceTree()}firstUpdated(e){super.firstUpdated?.(e);const t=this.closest("wa-dialog");t&&t.setAttribute("label",this.dialogTitle)}updated(e){if(super.updated?.(e),e.has("mode")){const t=this.closest("wa-dialog");t&&t.setAttribute("label",this.dialogTitle)}}get dialogTitle(){return this.mode==="file"?"Choose a file":this.mode==="directory"?"Choose a directory":"Choose a file or directory"}getResult(){return this.selectedPath!=null?"/"+this.selectedPath:null}async loadWorkspaceTree(){this.loading=!0,this.loadError=null;try{const e=await P.getWorkspace();if(!e){this.rootNodes=[];return}const t=await e.listChildren(!1),i=[];for(const o of t)i.push(await this.resourceToTreeNode(o,!1));i.sort((o,r)=>o.label.localeCompare(r.label)),this.rootNodes=i}catch(e){const t=e instanceof Error?e.message:String(e);this.loadError=t,this.rootNodes=[]}finally{this.loading=!1}}async resourceToTreeNode(e,t=!0){const i=e instanceof ze,o={resource:e,label:e.getName(),leaf:i,children:[]};if(e instanceof Re&&t){for(const r of await e.listChildren(!1))o.children.push(await this.resourceToTreeNode(r,!1));o.children.sort((r,a)=>r.label.localeCompare(a.label))}return o}handleSelectionChange(e){const t=e.detail&&e.detail.selection||[];if(!t||t.length===0){this.selectedPath=null,this.requestUpdate();return}const o=t[0]?.model?.resource;if(!o){this.selectedPath=null,this.requestUpdate();return}const r=o instanceof Re,a=o instanceof ze;if(this.mode==="file"&&!a){this.selectedPath=null,this.requestUpdate();return}if(this.mode==="directory"&&a){const l=o.getParent?.();this.selectedPath=l?l.getWorkspacePath():null,this.requestUpdate();return}if(this.mode==="directory"&&!r){this.selectedPath=null,this.requestUpdate();return}const s=o.getWorkspacePath?.();this.selectedPath=typeof s=="string"?s:null,this.requestUpdate()}renderTreeNode(e){return p`
      <wa-tree-item .model=${e} ?leaf=${e.leaf}>
        ${e.label}
        ${e.children.map(t=>this.renderTreeNode(t))}
      </wa-tree-item>
    `}render(){return p`
      <div class="dialog-body">
        ${this.loadError?this.renderMessage(this.loadError,!1):null}

        <div class="browser-container">
          ${this.loading?p`<div>Loading workspace…</div>`:this.rootNodes.length>0?p`
                    <wa-tree @wa-selection-change=${e=>this.handleSelectionChange(e)}>
                      ${this.rootNodes.map(e=>this.renderTreeNode(e))}
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
    `];ko([c({type:String})],wi.prototype,"mode",2);ko([w()],wi.prototype,"selectedPath",2);ko([w()],wi.prototype,"rootNodes",2);ko([w()],wi.prototype,"loading",2);ko([w()],wi.prototype,"loadError",2);wi=ko([v("lyra-filebrowser-dialog")],wi);B.registerContribution(Mi,{id:"filebrowser-dialog",label:"Select Path",buttons:[Yo,gs],component:e=>p`<lyra-filebrowser-dialog .mode=${e?.mode??"either"}></lyra-filebrowser-dialog>`,onButton:async(e,t,i)=>(i&&(e==="ok"?i.resolve(t||null):i.resolve(null)),!0)});function Jg(e="either"){return new Promise(t=>{Zr.open("filebrowser-dialog",{resolve:t,mode:e})})}function Um(e){const t=(e??"").trim();if(!t)return{name:""};const i=t.split(/\s+/);if(i.length<=1)return{name:t};const o=i.pop(),r=i.join(" ");return{name:o,library:r}}function De(e,t){const{name:i,library:o}=Um(e??"");return p`<wa-icon library=${o??ae} name=${i} label=${t?.label??ae} slot=${t?.slot??ae}></wa-icon>`}var qm=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,Vt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Hm(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&qm(t,i,r),r};const Wm=150;function ka(e,t,i,o,r){const s=`Toolbar ${e??"default"}`,l=i.filter(h=>h.slot===e&&o(h)),d=e==="start"?p`<slot name="start"></slot>`:e==="end"?p`<slot name="end"></slot>`:p`<slot></slot>`;return p`
        <wa-button-group orientation=${t} label=${s}>
            ${d}
            ${l.map(r)}
        </wa-button-group>
    `}let rt=class extends Ci{constructor(){super(...arguments),this.position="start",this.orientation="horizontal",this.align="start",this.size="small",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[],this.compact=!1,this.resizeObserver=null,this.resizeDebounceTimer=null,this.overflowCheckScheduled=!1,this.onResize=()=>{this.resizeDebounceTimer!==null&&clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=setTimeout(()=>{this.resizeDebounceTimer=null,this.updateCompactFromSpace()},Wm)}}updateCompactFromSpace(){const e=this.shadowRoot?.querySelector(".toolbar-items");if(!e)return;const t=e.scrollWidth>e.clientWidth;this.compact!==t&&(this.compact=t,this.requestUpdate())}scheduleOverflowCheck(){this.overflowCheckScheduled||(this.overflowCheckScheduled=!0,requestAnimationFrame(()=>{this.overflowCheckScheduled=!1,this.updateCompactFromSpace()}))}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=null,this.resizeDebounceTimer!==null&&(clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=null),super.disconnectedCallback()}updated(e){super.updated?.(e),this.compact||this.scheduleOverflowCheck()}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),Ie(St,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[i]=e.split(":");if(t===`${i}:*`)return!0;const o=t.split(":");if(o.length===2){const r=o[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&e.startsWith(`${i}:`)}return!1}loadContributions(e){const t=B.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[i]=e.split(":"),o=`${i}:*`,r=B.getContributions(o),a=[];if(this.isEditor){const s=["system.editors",".system.editors"];for(const l of s){const d=`${i}:${l}`,h=B.getContributions(d);a.push(...h)}}this.contributions=[...r,...a,...t]}isToolbarItem(e){return"command"in e||"component"in e}contributionCreator(e){if("command"in e){const t=e,i=!this.compact&&!!t.showLabel;return p`
                <wa-button @click=${()=>this.executeCommand(t.command,t.params||{})}
                           title=${t.label}
                           ?disabled="${t.disabled?.get()}"
                           appearance="plain" size=${this.size}>
                    ${De(t.icon,{label:t.label})}
                    ${i?t.label:""}
                </wa-button>
            `}if("component"in e){const t=e.component;return t instanceof Function?t():Kt(t)}return p`<span>unknown contribution type: ${typeof e}</span>`}render(){const e=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"",t=this.orientation==="vertical"?"column":"row",i={start:"flex-start",center:"center",end:"flex-end"},o=this.contributionCreator.bind(this),r=this.isToolbarItem.bind(this);return p`
            <div class="toolbar-items" style=${te({"flex-direction":t,"align-items":i[this.align],"justify-content":this.position})}>
                ${ka("start",this.orientation,this.contributions,r,o)}
                ${e}
                ${ka(void 0,this.orientation,this.contributions,r,o)}
                ${ka("end",this.orientation,this.contributions,r,o)}
            </div>
        `}};rt.styles=k`
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
    `;Vt([c()],rt.prototype,"position",2);Vt([c({reflect:!0})],rt.prototype,"orientation",2);Vt([c({reflect:!0})],rt.prototype,"align",2);Vt([c({reflect:!0})],rt.prototype,"size",2);Vt([c({type:Boolean,attribute:"is-editor"})],rt.prototype,"isEditor",2);Vt([c({attribute:!1})],rt.prototype,"partToolbarContent",2);Vt([c({attribute:!1})],rt.prototype,"partToolbarRenderer",2);Vt([w()],rt.prototype,"contributions",2);Vt([w()],rt.prototype,"compact",2);rt=Vt([v("lyra-toolbar")],rt);var jm=Object.defineProperty,Km=Object.getOwnPropertyDescriptor,He=(e,t,i,o)=>{for(var r=o>1?void 0:o?Km(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&jm(t,i,r),r};let $e=class extends Kr{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(e){if(!this.disabled){if(e&&e.stopPropagation(),this.action){this.action(e);return}if(this.cmd){const t=this.closest("wa-dropdown");t&&t.open!==void 0&&(t.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(e){const t=e.target;t&&t.open!==void 0&&(t.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const e=vl.getKeyBindingsForCommand(this.cmd);return e.length>0?e[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),Ie(St,e=>{this.dropdown&&e.target===this.dropdown&&(this.dropdownContributions=e.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=B.getContributions(this.dropdown),this.requestUpdate())}renderContribution(e){if("command"in e){const t=e,i=t.disabled?.get();return p`
                <lyra-command 
                    cmd="${t.command}"
                    icon="${t.icon||""}"
                    .params=${t.params||{}}
                    ?disabled="${i}">
                    ${t.label}
                </lyra-command>
            `}if("component"in e){const i=e.component;return i instanceof Function?i():Kt(i)}return ae}render(){const e=this.getKeybinding();return this.isInDropdown()?p`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${t=>this.handleClick(t)}>
                    ${De(this.icon,{label:this.title,slot:"icon"})}
                    <slot></slot>
                    ${e?p`<span class="keybinding">${e}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?p`
                <wa-dropdown 
                    placement=${this.placement}
                    @wa-select=${t=>this.handleSelect(t)}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        variant=${this.variant}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${e?`${this.title} (${e})`:this.title}>
                        ${De(this.icon,{label:this.title,slot:"start"})}
                        <slot></slot>
                        ${this.label?this.title:ae}
                    </wa-button>
                    
                    ${this.title?p`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:ae}
                    
                    ${this.dropdownContributions.map(t=>this.renderContribution(t))}
                    
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
                    `:ae}
                </wa-dropdown>
            `:p`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${e?`${this.title} (${e})`:this.title}
                @click=${t=>this.handleClick(t)}>
                ${De(this.icon,{label:this.title,slot:"start"})}
                <slot></slot>
            </wa-button>
        `}};$e.styles=k`
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
    `;He([c()],$e.prototype,"cmd",2);He([c({type:Object,attribute:!1})],$e.prototype,"action",2);He([c()],$e.prototype,"title",2);He([c()],$e.prototype,"label",2);He([c()],$e.prototype,"icon",2);He([c({type:Boolean})],$e.prototype,"disabled",2);He([c()],$e.prototype,"appearance",2);He([c()],$e.prototype,"variant",2);He([c()],$e.prototype,"size",2);He([c({type:Object,attribute:!1})],$e.prototype,"params",2);He([c()],$e.prototype,"dropdown",2);He([c()],$e.prototype,"placement",2);He([w()],$e.prototype,"dropdownContributions",2);$e=He([v("lyra-command")],$e);var Gm=Object.defineProperty,Xm=Object.getOwnPropertyDescriptor,Co=(e,t,i,o)=>{for(var r=o>1?void 0:o?Xm(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Gm(t,i,r),r};let vi=class extends Ci{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=ni(),this.dropdownRef=ni(),this.boundHandleDocumentPointerDown=this.handleDocumentPointerDown.bind(this)}handleDocumentPointerDown(e){if(!this.isOpen)return;const t=e.composedPath();this.dropdownRef.value&&t.includes(this.dropdownRef.value)||t.some(i=>i.getAttribute?.("part")==="submenu")||this.onClose()}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),Ie(St,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[i]=e.split(":");if(t===`${i}:*`)return!0;const o=t.split(":");if(o.length===2){const r=o[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&e.startsWith(`${i}:`)}return!1}loadContributions(e){const t=B.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[i]=e.split(":"),o=`${i}:*`,r=B.getContributions(o),a=[];if(this.isEditor){const s=["system.editors",".system.editors"];for(const l of s){const d=`${i}:${l}`,h=B.getContributions(d);a.push(...h)}}this.contributions=[...r,...a,...t]}getElementFromPoint(e,t){let i=document.elementFromPoint(e,t);if(!i)return null;for(;i;){const o=i.shadowRoot;if(o){const r=o.elementFromPoint(e,t);if(r&&r!==i){i=r;continue}}break}return i}triggerClickUnderCursor(e){const t=this.getElementFromPoint(e.clientX,e.clientY);if(t){const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY,button:0,buttons:0,detail:1,which:1});t.dispatchEvent(i)}}show(e,t){t&&this.triggerClickUnderCursor(t),this.position=e,this.isOpen=!0,this.updateComplete.then(()=>{document.addEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})})}onClose(){this.isOpen=!1,document.removeEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})}renderContribution(e){if("command"in e){const t=e,i=t.disabled?.get();return p`
                <lyra-command
                    cmd="${t.command}"
                    icon="${t.icon??""}"
                    .params=${t.params??{}}
                    ?disabled="${i}">
                    ${t.label}
                </lyra-command>
            `}else if("component"in e){const t=e.component;return t instanceof Function?t():Kt(t)}return ae}render(){if(!this.isOpen)return ae;const e=this.partContextMenuRenderer?this.partContextMenuRenderer():ae;return p`
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
                
                ${e}
                ${this.contributions.map(t=>this.renderContribution(t))}
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
    `;Co([c({type:Boolean,attribute:"is-editor"})],vi.prototype,"isEditor",2);Co([c({attribute:!1})],vi.prototype,"partContextMenuRenderer",2);Co([w()],vi.prototype,"contributions",2);Co([w()],vi.prototype,"isOpen",2);Co([w()],vi.prototype,"position",2);vi=Co([v("lyra-contextmenu")],vi);class xs extends Ci{}var Ym=Object.defineProperty,Zm=(e,t,i,o)=>{for(var r=void 0,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=s(t,i,r)||r);return r&&Ym(t,i,r),r};class mt extends xs{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return ae}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}activateContainingTab(){let t=this,i=null,o=null;for(;t;){const r=t.tagName?.toLowerCase();if(r==="wa-tab-panel"&&(i=t.getAttribute("name")),r==="lyra-tabs"){o=t;break}const a=t.parentElement;if(a)t=a;else{const s=t.getRootNode();t=s instanceof ShadowRoot?s.host:null}}o&&i!=null&&i!==""&&o.activate(i)}renderContextMenu(){return ae}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(t){super.updated(t),t.has("dirty")&&t.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(t){this.dirty=t,Pa.set(null),Pa.set(this),Dt.set(null),Dt.set(this)}}Zm([c()],mt.prototype,"dirty");var Qm=Object.defineProperty,Jm=Object.getOwnPropertyDescriptor,ks=(e,t,i,o)=>{for(var r=o>1?void 0:o?Jm(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Qm(t,i,r),r};let yi=class extends xs{constructor(){super(...arguments),this.placement="top",this.contributions=[],this.tabGroup=ni(),this.containerId=null,this.resizeObservers=new WeakMap,this.tabGroupListenersAttached=!1}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("lyra-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),Ie(St,e=>{!this.containerId||e.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(e){if(super.updated(e),this.contributions.length>0&&this.tabGroup.value&&this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),e.has("contributions")){this.contributions.length===0&&(this.tabGroupListenersAttached=!1);const t=this.containerId===Ht;this.contributions.forEach(i=>{const o=this.getTabPanel(i.name);if(!o)return;const r=o.querySelector(".tab-content");if(r&&r.firstElementChild){const a=r.firstElementChild;a instanceof mt&&(a.tabContribution=i,a.isEditor=t)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(o))})}}has(e){return this.tabGroup.value?!!this.getTabPanel(e):!1}activate(e){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",e)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(e){if(this.contributions.find(i=>i.name===e.name)){this.activate(e.name);const i=this.getTabPanel(e.name);i&&this.syncActiveSignalsFromPanel(i);return}this.contributions.push(e),this.requestUpdate(),this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.activate(e.name);const i=this.getTabPanel(e.name);if(!i)return;const o=i.querySelector(".tab-content");if(o?.firstElementChild instanceof mt){const r=o.firstElementChild;r.tabContribution=e,r.isEditor=this.containerId===Ht}this.syncActiveSignalsFromPanel(i),requestAnimationFrame(()=>{this.updateToolbarFromComponent(i),this.updateToolbarHeightVariable(i),this.setupToolbarResizeObserver(i)})})})}handleTabAuxClick(e,t){e.button===ms.MIDDLE&&t.closable&&this.closeTab(e,t.name)}async closeTab(e,t){if(e.stopPropagation(),this.isDirty(t)&&!await Ua("Unsaved changes will be lost: Do you really want to close?"))return;const i=this.getTabPanel(t);if(!i)return;const o=this.contributions.find(a=>a.name===t);if(!o)return;this.cleanupTabInstance(i),this.clearActiveSignalsIfPartInPanel(i);const r=this.contributions.indexOf(o);r>-1&&this.contributions.splice(r,1),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(e,t){const i=this.getTab(e);i&&i.classList.toggle("part-dirty",t)}isDirty(e){const t=this.getTab(e);return!!t&&t.classList.contains("part-dirty")}loadAndResolveContributions(){this.containerId&&(this.contributions=B.getContributions(this.containerId),this.requestUpdate())}cleanupTabInstance(e){const t=this.resizeObservers.get(e);t&&(t.disconnect(),this.resizeObservers.delete(e));const i=e.querySelector(".tab-content");if(i&&i.firstElementChild){const o=i.firstElementChild;"close"in o&&typeof o.close=="function"&&o.close()}}ensureTabGroupListenersAndActivate(){if(!this.tabGroup.value||this.tabGroupListenersAttached){this.activateNextAvailableTab();return}this.tabGroupListenersAttached=!0;const e=this.tabGroup.value;e.addEventListener("wa-tab-show",t=>{const i=this.getTabPanel(t.detail.name);i&&(this.syncActiveSignalsFromPanel(i),this.updateToolbarFromComponent(i),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(i),this.setupToolbarResizeObserver(i)}))}),e.addEventListener("part-toolbar-changed",t=>{const o=t.target.closest("wa-tab-panel");o&&(this.updateToolbarFromComponent(o),requestAnimationFrame(()=>this.updateToolbarHeightVariable(o)))}),e.addEventListener("part-contextmenu-changed",t=>{const o=t.target.closest("wa-tab-panel");o&&this.updateContextMenuFromComponent(o)}),e.addEventListener("click",t=>{const i=t.target,o=i.closest("wa-tab");if(o){const s=o.getAttribute("panel");if(s){const l=this.getTabPanel(s);l&&this.syncActiveSignalsFromPanel(l)}return}const r=i.closest("wa-scroller.tab-content");if(!r)return;const a=r.closest("wa-tab-panel");a&&this.syncActiveSignalsFromPanel(a)}),e.addEventListener("contextmenu",t=>{const i=t,o=i.target.closest("wa-scroller.tab-content");if(!o)return;i.preventDefault();const r=o.closest("wa-tab-panel");r&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(r);const a=r.querySelector("lyra-contextmenu");a&&a.show({x:i.clientX,y:i.clientY},i)})}),this.dirtySignalCleanup?.(),this.dirtySignalCleanup=Zn(Pa,t=>{if(!t)return;const i=t.closest("wa-tab-panel");if(!i)return;const o=i.getAttribute("name");o&&this.markDirty(o,t.isDirty())}),this.activateNextAvailableTab()}disconnectedCallback(){this.dirtySignalCleanup?.(),this.dirtySignalCleanup=void 0,super.disconnectedCallback()}activateNextAvailableTab(){if(!this.tabGroup.value)return;const e=this.tabGroup.value.querySelectorAll("wa-tab");if(e.length>0){const t=e.item(0).getAttribute("panel");t&&this.tabGroup.value.setAttribute("active",t)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(e){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${e}']`):null}getTab(e){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${e}']`):null}syncActiveSignalsFromPanel(e){const i=e.querySelector(".tab-content")?.firstElementChild;i instanceof mt&&(Dt.set(null),Dt.set(i),this.containerId===Ht&&i.isEditor&&(eo.set(null),eo.set(i)))}clearActiveSignalsIfPartInPanel(e){const t=Array.from(e.querySelectorAll("*")).filter(i=>i instanceof mt);for(const i of t)Dt.get()===i&&Dt.set(null),eo.get()===i&&eo.set(null)}updateToolbarFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const i=t.firstElementChild;if(!(i instanceof mt)||!i.renderToolbar)return;const o=e.querySelector("lyra-toolbar");o&&(o.partToolbarRenderer=()=>i.renderToolbar(),o.requestUpdate())}updateContextMenuFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const i=t.firstElementChild;if(!(i instanceof mt)||!i.renderContextMenu)return;const o=e.querySelector("lyra-contextmenu");o&&(o.partContextMenuRenderer=()=>i.renderContextMenu(),o.requestUpdate())}updateToolbarHeightVariable(e){const t=e.querySelector(".tab-toolbar");if(!t)return;const i=t.offsetHeight;e.style.setProperty("--toolbar-height",`${i}px`)}setupToolbarResizeObserver(e){if(this.resizeObservers.has(e))return;const t=e.querySelector(".tab-toolbar");if(!t)return;const i=new ResizeObserver(()=>{this.updateToolbarHeightVariable(e)});i.observe(t),this.resizeObservers.set(e,i)}truncateTabLabel(e){if(!e||e.length<=yi.MAX_TAB_LABEL)return e;const t="…",i=yi.MAX_TAB_LABEL-t.length,o=Math.floor(i/2);return e.slice(0,o)+t+e.slice(-(i-o))}renderEmptyState(){const e=ai.getCurrentApp();return p`
            <div class="empty-state">
                ${le(e,()=>p`
                        <div class="empty-content">
                            <h2 class="empty-title">${e.name}</h2>
                            ${le(e.description,()=>p`<p class="empty-description">${e.description}</p>`)}
                        </div>
                    `,()=>p`<wa-icon name="folder-open" class="empty-icon"></wa-icon>`)}
            </div>
        `}render(){return this.contributions.length===0?this.renderEmptyState():p`
            <wa-tab-group ${li(this.tabGroup)} placement=${this.placement}>
                ${Bl(this.contributions,e=>e.name,e=>{const t=e.label??e.name,i=this.truncateTabLabel(t);return p`
                        <wa-tab panel="${e.name}"
                                title="${t}"
                                @auxclick="${o=>this.handleTabAuxClick(o,e)}">
                            ${De(e.icon,{label:t})}
                            ${i}
                            ${le(e.closable,()=>p`
                                <wa-icon name="xmark" label="Close"  @click="${o=>this.closeTab(o,e.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${e.name}">
                            ${le(e.toolbar!==!1,()=>p`
                                <lyra-toolbar id="toolbar:${e.editorId??e.name}"
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===Ht}"></lyra-toolbar>
                            `)}
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${e.component?e.component(e.name):ae}
                            </wa-scroller>
                            ${le(e.contextMenu!==!1,()=>p`
                                <lyra-contextmenu id="contextmenu:${e.name}"
                                               ?is-editor="${this.containerId===Ht}"></lyra-contextmenu>
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
    `;ks([c({reflect:!0})],yi.prototype,"placement",2);ks([w()],yi.prototype,"contributions",2);yi=ks([v("lyra-tabs")],yi);var eg=Object.defineProperty,tg=Object.getOwnPropertyDescriptor,Qo=(e,t,i,o)=>{for(var r=o>1?void 0:o?tg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&eg(t,i,r),r};let fo=class extends Ci{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=e=>{if(!this.resizing)return;const i=(this.orientation==="horizontal"?e.clientX:e.clientY)-this.resizing.startPos,o=[...this.resizing.startSizes];o[this.resizing.handleIndex]+=i,o[this.resizing.handleIndex+1]-=i;const r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,a=r*.05;if(o[this.resizing.handleIndex]>=a&&o[this.resizing.handleIndex+1]>=a){this.resizing.currentSizes=o;const s=o.map((l,d)=>{const u=`${(l/r*100).toFixed(2)}%`;return d===o.length-1?u:`${u} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=s:this.style.gridTemplateRows=s}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const e=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(t=>`${(t/e*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const e=Array.from(this.children).filter(t=>t.tagName!=="STYLE"&&t.tagName!=="SCRIPT"&&!t.classList.contains("resize-handle"));if(e.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=e,!this.settingsLoaded){this.settingsLoaded=!0;const t=await this.getDialogSetting();if(t&&Array.isArray(t.sizes)&&t.sizes.length===this.gridChildren.length){this.gridSizes=t.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(t=>t.trim());else{const t=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>t)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(e){super.updated(e),e.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((t,i)=>{t.style.overflow="hidden",t.style.height="100%",t.style.width="100%",t.style.gridColumn=this.orientation==="horizontal"?`${i*2+1}`:"1",t.style.gridRow=this.orientation==="vertical"?`${i*2+1}`:"1",t.style.display="flex",t.style.flexDirection="column"}))}startResize(e,t){if(e.preventDefault(),t>=this.gridChildren.length-1)return;const i=this.orientation==="horizontal"?e.clientX:e.clientY,o=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,r=this.gridSizes.map(a=>a.endsWith("%")?parseFloat(a)/100*o:(a.endsWith("px"),parseFloat(a)));this.resizing={handleIndex:t,startPos:i,startSizes:r},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return ae;const e=this.gridSizes.flatMap((t,i)=>i===this.gridSizes.length-1?[t]:[t,"1px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=e,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=e),this.style.overflow="hidden",p`
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
            
            ${this.gridChildren.map((t,i)=>{if(i<this.gridChildren.length-1){const o=this.orientation==="horizontal"?`${i*2+2}`:"1",r=this.orientation==="vertical"?`${i*2+2}`:"1";return p`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${o};
                                grid-row: ${r};
                            "
                            @mousedown=${a=>this.startResize(a,i)}
                        ></div>
                    `}return ae})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Qo([c()],fo.prototype,"orientation",2);Qo([c()],fo.prototype,"sizes",2);Qo([w()],fo.prototype,"gridSizes",2);Qo([w()],fo.prototype,"gridChildren",2);fo=Qo([v("lyra-resizable-grid")],fo);var ig=Object.defineProperty,og=Object.getOwnPropertyDescriptor,Cs=(e,t,i,o)=>{for(var r=o>1?void 0:o?og(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&ig(t,i,r),r};let Uo=class extends Kr{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return p`
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
    `;Cs([c()],Uo.prototype,"message",2);Cs([c()],Uo.prototype,"icon",2);Uo=Cs([v("lyra-no-content")],Uo);const _r="language",qo="en";function rg(e,t){return t?e.replace(/\{(\w+)\}/g,(i,o)=>t[o]!==void 0?t[o]:i):e}const mr=new Set([qo]),Ss=xi(mr);let $s=null;function ag(e){let t=!1;for(const i of e){const o=i.toLowerCase().replace("-","_");mr.has(o)||(mr.add(o),t=!0)}if(t&&(Ss.set(new Set(mr)),$s===null)){const i=Qr();i!==Bi.get()&&Bi.set(i)}}function Qr(){const e=navigator.languages?.length?navigator.languages:[navigator.language||qo],t=Ss.get();for(const i of e){const o=i.split("-")[0].toLowerCase();if(t.has(o))return o}return qo}const Bi=xi(Qr());async function sg(){const e=await ne.get(_r);$s=e??null,Bi.set(e||Qr())}Ie(zi,e=>{$s=e?.[_r]??null,Bi.set(e?.[_r]||Qr())});sg();async function So(e,t=!1){const i={};await Promise.all(Object.entries(e).map(async([s,l])=>{const d=await l(),h=d&&"default"in d?d.default:d,m=(s.match(/\.([a-zA-Z-_]+)\.json$/)?.[1]??qo).toLowerCase().replace("-","_");i[m]=h})),ag(Object.keys(i));const o=s=>{const d=Bi.get().toLowerCase().replace("-","_"),[h,u]=d.split("_"),f=u?[`${h}_${u}`,h]:[h];f.push(qo);for(const m of f){const g=i[m];if(g&&s in g)return g[s]}return s},r=Object.assign({},{then:void 0,catch:void 0,finally:void 0}),a={get(s,l){if(l in s)return s[l];const d=o(l),h=(u=>rg(o(l),u));return h.toString=()=>t?o(l):d,h.valueOf=()=>t?o(l):d,h[Symbol.toPrimitive]=()=>t?o(l):d,t&&(h.toJSON=()=>o(l)),h}};return new Proxy(r,a)}class ng{constructor(){this.editorInputHandlers=[],this.cachedIconContributions=null,Ie(qt,()=>{}),Ie(St,t=>{t.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const t=B.getContributions("system.icons");return this.cachedIconContributions=[...t].sort((i,o)=>{const r=i.priority??0,a=o.priority??0;return a!==r?a-r:i.label.localeCompare(o.label)}),this.cachedIconContributions}registerEditorInputHandler(t){this.editorInputHandlers.push({definition:t,initialized:!1}),this.editorInputHandlers.sort((i,o)=>{const r=i.definition.ranking??0;return(o.definition.ranking??0)-r})}async ensureHandlerInitialized(t){const i=t.definition;!i.lazyInit||t.initialized||(t.lazyInitPromise||(t.lazyInitPromise=Promise.resolve(i.lazyInit()).then(()=>{t.initialized=!0,t.lazyInitPromise=void 0}).catch(o=>{throw t.lazyInitPromise=void 0,o})),await t.lazyInitPromise)}getEditorOptionsForInput(t){const i=new Set,o=[];for(const r of this.editorInputHandlers){const a=r.definition;!a.canHandle(t)||i.has(a.editorId)||(i.add(a.editorId),o.push({editorId:a.editorId,title:a.label,icon:a.icon}))}return o}async handleInput(t,i){if(i!==void 0){const o=this.editorInputHandlers.find(r=>r.definition.editorId===i);if(o){await this.ensureHandlerInitialized(o);const r=await o.definition.handle(t);return r&&(r.editorId=o.definition.editorId),r}return}for(let o=0;o<this.editorInputHandlers.length;o++){const r=this.editorInputHandlers[o],a=r.definition;if(a.canHandle(t)){await this.ensureHandlerInitialized(r);const s=await a.handle(t);return s&&(s.editorId=a.editorId),s}}}getEditorArea(){return document.querySelector(`lyra-tabs#${Ht}`)}async loadEditor(t,i){if(!t||("component"in t||(t=await this.handleInput(t,i)),!t||!("component"in t)))return;const o=t.editorId??i;o&&(t.editorId=o),await this.openTab({name:t.key,editorId:o,label:t.title,icon:t.icon,closable:!0,noOverflow:t.noOverflow,component:t.component})}async openTab(t){const i=this.getEditorArea();if(!i){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(i.has(t.name)){i.activate(t.name);return}i.open(t)}getFileIcon(t){const i=t.includes(".")?t.split(".").pop()?.toLowerCase()||"":t.toLowerCase(),o=this.getSortedIconContributions();if(o.length===0)return"file";for(const r of o)if(r.mappings&&r.mappings[i])return r.mappings[i];return"file"}}const mo=new ng;ke.put("editorRegistry",mo);B.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const bn=(e,t)=>!e.leaf&&t.leaf?-1:e.leaf&&!t.leaf?1:e.label.localeCompare(t.label);var lg=Object.defineProperty,cg=Object.getOwnPropertyDescriptor,Es=(e,t,i,o)=>{for(var r=o>1?void 0:o?cg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&lg(t,i,r),r};const ht=ti("LyraFileBrowser"),Pe=await So(Object.assign({"./filebrowser.de.json":()=>Je(()=>import("./filebrowser.de-5GQ10ols-BDyGxBGM.js"),[]),"./filebrowser.en.json":()=>Je(()=>import("./filebrowser.en-9Ng_7WE_-DuKn3BNV.js"),[])})),dg=250;let Ho=class extends mt{constructor(){super(...arguments),this.fileEditorOptions=[],this.treeRef=ni(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),Ie(St,e=>{e.target==="system.icons"&&this.requestUpdate()}),this.subscribe(Ze,e=>this.onWorkspaceChanged(e)),this.subscribe(qt,e=>this.onWorkspaceConnected(e))}disconnectedCallback(){this.workspaceChangedDebounceId!==void 0&&(clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=void 0),this.pendingWorkspaceDir=void 0,super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.setupDragAndDrop()}updated(e){super.updated(e),e.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const e=await P.getWorkspace();await this.loadWorkspace(e??void 0)}renderToolbar(){return p`
            <lyra-command icon="folder-open" title="${Pe.CONNECT_WORKSPACE}" dropdown="filebrowser.connections"></lyra-command>
            <lyra-command cmd="refresh_resource" icon="repeat" title="${Pe.REFRESH_RESOURCE}"></lyra-command>
            <lyra-command cmd="touch" icon="plus" title="${Pe.CREATE_NEW}" dropdown="filebrowser.create"></lyra-command>
        `}renderContextMenu(){const e=Lt.get(),t=e instanceof ze?e:null,i=t&&this.fileEditorOptions.length>0;return p`
            <lyra-command cmd="open_editor" icon="folder-open">${Pe.OPEN}</lyra-command>
            ${i?p`
                <wa-dropdown-item>
                    ${De("folder-open",{slot:"icon"})}
                    ${Pe.OPEN_WITH}
                    ${this.fileEditorOptions.map(o=>p`
                        <lyra-command
                            slot="submenu"
                            cmd="open_editor"
                            icon="${o.icon??"file"}"
                            .params=${{path:t.getWorkspacePath(),editorId:o.editorId}}>
                            ${o.title}
                        </lyra-command>
                    `)}
                </wa-dropdown-item>
            `:ae}
            <lyra-command cmd="touch" icon="plus" dropdown="filebrowser.create">${Pe.CREATE_NEW}</lyra-command>
        `}onWorkspaceChanged(e){this.pendingWorkspaceDir=e,this.workspaceChangedDebounceId!==void 0&&clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=setTimeout(()=>{this.workspaceChangedDebounceId=void 0;const t=this.pendingWorkspaceDir;this.pendingWorkspaceDir=void 0,t?this.applyWorkspaceChange(t):this.loadWorkspace(void 0,!0)},dg)}async applyWorkspaceChange(e){Lt.set(void 0),await this.loadWorkspace(e,!0),await this.syncTreeSelection()}async onWorkspaceConnected(e){await this.loadWorkspace(e,!0)}async loadWorkspace(e,t=!1){this.workspaceDir=e,e?this.root=await this.resourceToTreeNode(e,!0,t):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const t=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];t.length>0&&Lt.set(t[0].model?.data)}async resourceToTreeNode(e,t=!1,i=!1){const o=e instanceof ze,r={data:e,label:e.getName(),leaf:o,children:[]};if(e instanceof Re&&!e.getParent())try{const a=await P.getFolderInfoForDirectory(e);a?.backendName&&(r.workspaceTag=a.backendName)}catch(a){ht.debug("Failed to get workspace info for directory",a)}if(e instanceof Re&&t){const a=await e.listChildren(i);for(const s of a){const l=await this.resourceToTreeNode(s,!0,i);r.children.push(l)}r.children.sort(bn),r.loaded=!0}return r}createTreeItems(e,t=!1){if(!e)return p``;const i=!e.leaf&&!e.loaded,o=e.data,r=o instanceof ze,a=!!o.getParent(),s=r?mo.getFileIcon(o.getName()):e.icon||"folder-open",l=e.workspaceTag;return p`
            <wa-tree-item 
                draggable=${a}
                @dragstart=${a?this.nobubble(d=>this.onDragStart(d,o)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(d=>this.onLazyLoad(d,e))}
                .model=${e} 
                ?expanded=${t}
                ?lazy=${i}>
                <span class="tree-label">
                    ${De(s,{label:e.leaf?Pe.FILE:Pe.FOLDER})}
                    <span class="tree-label-text">${e.label}</span>
                    ${!e.leaf&&l?p`<wa-badge appearance="outlined" variant="neutral" style="font-size: var(--wa-font-size-xs);">${l}</wa-badge>`:null}
                </span>
                ${e.children.map(d=>this.createTreeItems(d,!1))}
            </wa-tree-item>`}onDragStart(e,t){if(!e.dataTransfer||!t.getParent())return;const o=e.currentTarget?.closest("wa-tree"),r=Array.isArray(o?.selectedItems)?o.selectedItems:[],a=[];if(r.length>0)for(const h of r){const f=h.model?.data;f&&f.getParent()&&a.push(f)}a.length===0&&a.push(t);const s=a.map(h=>h.getWorkspacePath()),l=a.length===1?a[0].getName():`${a.length} items`;e.dataTransfer.effectAllowed="copyMove";const d=s.join(`
`);if(e.dataTransfer.setData("text/plain",d),e.dataTransfer.setData("application/x-workspace-file",d),e.dataTransfer.setData("text/uri-list",d),e.dataTransfer.setDragImage){const h=document.createElement("div");h.textContent=l,h.style.position="absolute",h.style.top="-1000px",h.style.padding="4px 8px",h.style.background="var(--wa-color-neutral-10)",h.style.border="1px solid var(--wa-color-neutral-30)",h.style.borderRadius="4px",document.body.appendChild(h),e.dataTransfer.setDragImage(h,0,0),setTimeout(()=>document.body.removeChild(h),0)}}async onLazyLoad(e,t){const i=t.data;i instanceof Re&&t.children.length===0&&await this.loadNodeChildren(t,i)}async loadNodeChildren(e,t){if(!this.loadingNodes.has(e)){this.loadingNodes.add(e);try{const i=await t.listChildren(!1);for(const o of i){gl&&o.getName().startsWith(".");const r=await this.resourceToTreeNode(o,!1);e.children.push(r)}e.children.sort(bn),e.loaded=!0,this.requestUpdate()}catch(i){ht.error("Failed to load directory children:",i)}finally{this.loadingNodes.delete(e)}}}async onFileDoubleClicked(e){const t=e.currentTarget,i=t.model;if(!i)return;const o=i.data;if(o instanceof ze){Lt.set(o),this.executeCommand("open_editor",{});return}!i.leaf&&"expanded"in t&&(t.expanded=!t.expanded)}onSelectionChanged(e){const t=e.detail.selection;if(t&&t.length>0){const o=t[0].model.data;Lt.set(o),o instanceof ze?(this.fileEditorOptions=mo.getEditorOptionsForInput(o),this.updateContextMenu()):(this.fileEditorOptions=[],this.updateContextMenu())}else Lt.set(void 0),this.fileEditorOptions=[],this.updateContextMenu()}setupDragAndDrop(){const e=this.treeRef.value;if(!e)return;const t=a=>{const s=a.dataTransfer?.types;if(!s)return;const l=s.includes("Files"),d=s.includes("application/x-workspace-file");if(!l&&!d)return;a.preventDefault(),a.dataTransfer&&(d?a.dataTransfer.dropEffect=a.ctrlKey||a.metaKey?"copy":"move":a.dataTransfer.dropEffect="copy"),e.classList.add("drag-over");const u=a.target.closest("wa-tree-item");u&&u!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=u,u.classList.add("drop-target"))},i=a=>{const s=a.dataTransfer?.types;if(!s)return;const l=s.includes("Files"),d=s.includes("application/x-workspace-file");!l&&!d||(a.preventDefault(),e.classList.add("drag-over"))},o=a=>{const s=e.getBoundingClientRect(),l=a.clientX,d=a.clientY;(l<=s.left||l>=s.right||d<=s.top||d>=s.bottom)&&(e.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},r=async a=>{if(a.preventDefault(),e.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!a.dataTransfer||!this.workspaceDir)return;const s=await this.getDropTarget(a),l=a.dataTransfer.types;if(l.includes("Files")){const d=Array.from(a.dataTransfer.files);if(d.length===0)return;await this.handleFilesDrop(d,s);return}if(l.includes("application/x-workspace-file")){await this.handleWorkspaceDrop(a,s);return}};e.removeEventListener("dragover",t),e.removeEventListener("dragenter",i),e.removeEventListener("dragleave",o),e.removeEventListener("drop",r),e.addEventListener("dragover",t),e.addEventListener("dragenter",i),e.addEventListener("dragleave",o),e.addEventListener("drop",r)}async getDropTarget(e){const i=e.target.closest("wa-tree-item");if(i){const r=i.model.data;if(r instanceof Re)return r;const a=r.getParent();if(a)return a}return this.workspaceDir}async handleWorkspaceDrop(e,t){if(!e.dataTransfer)return;const i=e.dataTransfer.getData("application/x-workspace-file");if(!i)return;const o=i.split(/\r?\n/).map(m=>m.trim()).filter(m=>!!m);if(o.length===0)return;const r=await P.getWorkspace();if(!r){ht.warn("Workspace drop ignored because no workspace is connected");return}const a=async m=>{const g=m.getWorkspace(),b=t.getWorkspace();return!g||!b?!1:g===b&&!(e.ctrlKey||e.metaKey)},s=new Set,l=t.getWorkspace();let d=0,h=0;const u=[];for(const m of o)try{const g=await r.getResource(m);if(!g){ht.warn(`Workspace drop: source not found for path "${m}"`),h++;continue}u.push({path:m,resource:g});const b=g.getWorkspace();b&&s.add(b)}catch(g){ht.error(`Failed to handle workspace drop for "${m}":`,g),h++}if(u.length===0){h>0&&ht.info(`Workspace drop failed for ${h} item(s)`);return}let f=!1;if(l){for(const m of s)if(m!==l){f=!0;break}}if(f&&l)try{const m=Array.from(s),g=await P.getFolderInfoForDirectory(m[0]),b=await P.getFolderInfoForDirectory(l),C=g?.backendName??Pe.UNKNOWN_BACKEND,E=b?.backendName??Pe.UNKNOWN_BACKEND;if(!await Ua(Pe.DND_CROSS_CONNECTION_CONFIRM({count:String(u.length),srcBackend:C,destBackend:E})))return}catch(m){ht.debug("Failed to resolve cross-connection info for DnD",m)}for(const{path:m,resource:g}of u)try{const b=await a(g);await P.copyResource(g,t,{move:b}),d++}catch(b){ht.error(`Failed to handle workspace drop for "${m}":`,b),h++}ht.info(`Workspace drop completed: ${d}/${u.length} items ${h>0?`, ${h} failed`:""}`),await this.loadWorkspace(this.workspaceDir,!0)}async handleFilesDrop(e,t){const i=e.length;let o=0,r=0,a=0;for(const s of e)try{const l=this.buildTargetPath(t,s.name);if(await this.workspaceDir.getResource(l)&&!await Ua(Pe.FILE_EXISTS_OVERWRITE({fileName:s.name}))){a++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(s),o++}catch(l){ht.error(`Failed to upload ${s.name}:`,l),r++}ht.info(`Uploaded ${o}/${i} files${a>0?`, ${a} skipped`:""}${r>0?`, ${r} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(e,t){const i=e.getWorkspacePath();return i?`${i}/${t}`:t}render(){return p`
            <div class="tree" ${li(this.treeRef)} style="--drop-files-text: '${Pe.DROP_FILES_HERE}'">
                ${le(!this.workspaceDir,()=>p`
                    <lyra-no-content message="${Pe.SELECT_WORKSPACE}"></lyra-no-content>`,()=>le(this.root,()=>p`
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.root.children.map(e=>this.createTreeItems(e,!0))}
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
    `;Es([w()],Ho.prototype,"root",2);Es([w()],Ho.prototype,"fileEditorOptions",2);Ho=Es([v("lyra-filebrowser")],Ho);var hg=Object.getOwnPropertyDescriptor,ug=(e,t,i,o)=>{for(var r=o>1?void 0:o?hg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=s(r)||r);return r};const qa=await So(Object.assign({"./tasks.de.json":()=>Je(()=>import("./tasks.de-Uc1ZhJAb-Bm0wNkDH.js"),[]),"./tasks.en.json":()=>Je(()=>import("./tasks.en-ErE1So2Z-eCglTKJa.js"),[])}));B.registerContribution(Yr,{component:"<lyra-tasks></lyra-tasks>"});let To=null;function El(){return To||(To=document.createElement("div"),To.id="progress-dialog-container",document.body.appendChild(To)),To}function wn(){return El().querySelector("wa-dialog")}function pg(){Ll(!0)}function Ll(e=!1){const t=El(),i=ho.getActiveTasks();if(i.length===0){gt(p``,t);return}const r=wn();if(!(e||r?.open===!0))return;const s=()=>{const h=wn();h&&(h.open=!1)},l=()=>{gt(p``,t)},d=p`
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
    `;gt(d,t)}let Ha=class extends mt{doBeforeUI(){this.watch(Fa,()=>{Ll(),this.requestUpdate()})}handleIndicatorClick(){pg()}render(){Fa.get();const t=ho.getActiveTasks().length;return t===0?p``:p`
            <div class="tasindicator" @click=${this.handleIndicatorClick} title="${qa.ACTIVE_TASKS_TITLE({taskCount:t.toString()})}">
                <wa-spinner
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);"
                    label="${qa.ACTIVE_TASKS}"
                ></wa-spinner>
                <wa-badge appearance="outlined" variant="neutral" pill>${t}</wa-badge>
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
    `;Ha=ug([v("lyra-tasks")],Ha);var fg=Object.getOwnPropertyDescriptor,mg=(e,t,i,o)=>{for(var r=o>1?void 0:o?fg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=s(r)||r);return r};const Ca=await So(Object.assign({"./partname.de.json":()=>Je(()=>import("./partname.de-FFi67qCi-iLAwhB2n.js"),[]),"./partname.en.json":()=>Je(()=>import("./partname.en-DvPivLXR-DGb3aT7k.js"),[])}));B.registerContribution(Yr,{component:"<lyra-part-name></lyra-part-name>"});let vn=class extends Ci{doBeforeUI(){this.watch(Dt,()=>{this.requestUpdate()})}getPartName(){const e=Dt.get();return e&&(e.tabContribution?.label||e.getAttribute("id"))||Ca.NO_PART}render(){const t=Dt.get()?.tabContribution?.icon||"box";return p`
            <wa-button 
                appearance="plain"
                size="small"
                title="${Ca.ACTIVE_PART}">
                ${De(t,{label:"Part",slot:"start"})}
                ${this.getPartName()}
            </wa-button>
        `}};vn=mg([v("lyra-part-name")],vn);var gg=Object.defineProperty,bg=Object.getOwnPropertyDescriptor,Jo=(e,t,i,o)=>{for(var r=o>1?void 0:o?bg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&gg(t,i,r),r};const wg=ti("LyraExtensions"),fe=await So(Object.assign({"./extensions.de.json":()=>Je(()=>import("./extensions.de-CZkqW0F1-C2K7_1Fj.js"),[]),"./extensions.en.json":()=>Je(()=>import("./extensions.en-Dg9Oqudm-BWVq_zKr.js"),[])}));let Vi=class extends mt{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){Ie(Oo,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(e){oe.enable(e.id,!0),this.requestUpdate()}disable(e){oe.disable(e.id,!0),this.requestUpdate()}isExtensionRequired(e){const t=ai.getCurrentApp();return!t||!t.extensions?!1:t.extensions.includes(e)}selectionChanged(e){const t=e.detail.selection||[];t.length>0&&t[0].model?this.selectedExtension=t[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return oe.getExtensions();const e=this.filterText.toLowerCase();return oe.getExtensions().filter(t=>String(t.name).toLowerCase().includes(e)||(t.description?String(t.description).toLowerCase().includes(e):!1)||t.id.toLowerCase().includes(e))}getGroupedExtensions(){const e=this.getFilteredExtensions(),t=[],i=[];return e.forEach(o=>{oe.isEnabled(o.id)?t.push(o):i.push(o)}),t.sort((o,r)=>String(o.name).localeCompare(String(r.name))),i.sort((o,r)=>String(o.name).localeCompare(String(r.name))),{enabled:t,available:i}}isExternalExtension(e){return e.external===!0}handleFilterInput(e){this.filterText=e.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const e=await Im("Enter extension URL or source identifier:","",!1);if(!e)return;await ho.runAsync("Registering extension",async()=>{let t=e;Tt.isGitHubUrl(e)&&(t=Tt.convertGitHubUrlToSource(e));const i=Tt.parseSource(t);i?.type==="github"?await this.fetchGitHubMetadata(i,t):(this.registerExtensionData={url:t,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(e){re(`Failed to register extension: ${e}`)}}async fetchGitHubMetadata(e,t){try{const i=await Tt.fetchGitHubPackageJson(e),o=e.owner,r=e.repo,a=i.name||`ext.${o}-${r}`,s=i.name||`${o}/${r}`,l=i.description||"",d=i.version||"",h=i.author||(typeof i.author=="string"?i.author:i.author?.name)||"";this.registerExtensionData={id:a,name:s,description:l,url:t,version:d,author:h,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(i){wg.warn(`Could not fetch package.json, using defaults: ${i}`),this.registerExtensionData={url:t,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){re("URL is required");return}if(!this.registerExtensionData.id){re("Extension ID is required");return}if(!this.registerExtensionData.name){re("Extension name is required");return}try{await ho.runAsync("Registering extension",async()=>{const e={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};oe.registerExtension(e),await oe.loadExtensionFromUrl(this.registerExtensionData.url,e.id),jt(`Extension ${e.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(e){re(`Failed to register extension: ${e}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return p`
            <wa-input
                placeholder="${fe.FILTER_PLACEHOLDER}"
                .value=${this.filterText}
                @input=${e=>this.handleFilterInput(e)}
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
        `}render(){const e=this.getGroupedExtensions(),t=e.enabled.length>0||e.available.length>0;return p`
            ${le(this.showRegisterDialog,()=>p`
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
                            ${t?p`
                                ${e.enabled.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                            ${fe.INSTALLED} (${e.enabled.length})
                                        </span>
                                        ${e.enabled.map(i=>{const o=this.isExternalExtension(i);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                                    <span>${De(i.icon)}</span> ${i.name}${o?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                                ${e.available.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                            ${fe.AVAILABLE} (${e.available.length})
                                        </span>
                                        ${e.available.map(i=>{const o=this.isExternalExtension(i);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                                    <span>${De(i.icon)}</span> ${i.name}${o?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                            `:""}
                            ${t?"":p`
                                <div style="padding: 1em; text-align: center; opacity: 0.7;">
                                    ${fe.NO_MATCHES({filterText:this.filterText})}
                                </div>
                            `}
                        </wa-tree>
                    </wa-scroller>
                </div>
                <wa-scroller slot="end" class="extensions-detail-scroller" orientation="vertical">
                <div class="extensions-detail-content">
                    ${le(this.selectedExtension,i=>{const o=this.isExternalExtension(i),r=oe.isEnabled(i.id);return p`
                                <h1>${De(i.icon)} ${i.name}${o?" (External)":""}</h1>
                                ${le(o,()=>p`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${fe.EXTERNAL_EXTENSION}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${le(r,()=>p`
                                        <wa-button 
                                            title="${this.isExtensionRequired(i.id)?fe.REQUIRED_HINT:fe.DISABLE_TITLE}" 
                                            @click="${()=>this.disable(i)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(i.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${fe.UNINSTALL}
                                        </wa-button>
                                        ${le(this.isExtensionRequired(i.id),()=>p`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${fe.REQUIRED_HINT}</span>
                                            </div>
                                        `)}
                                    `,()=>p`
                                        <wa-button 
                                            title="${fe.ENABLE_TITLE}" 
                                            @click="${()=>this.enable(i)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${fe.INSTALL}
                                        </wa-button>
                                    `)}
                                </div>

                                ${le(i.experimental,()=>p`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${fe.EXPERIMENTAL}</i></small>
                                    </div>
                                `)}

                                ${le(i.version||i.author,()=>p`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${le(i.version,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${fe.VERSION} <strong>${i.version}</strong></span>
                                            </div>
                                        `)}
                                        ${le(i.author,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${fe.AUTHOR} <strong>${i.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${i.description}</p>

                                ${le(i.dependencies&&i.dependencies.length>0,()=>p`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${fe.DEPENDENCIES}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${i.dependencies.map(a=>{const s=oe.getExtensions().find(d=>d.id===a),l=oe.isEnabled(a);return p`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${l?"check-circle":"circle"}" 
                                                            style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        ${De(s?.icon??"puzzle-piece")}
                                                        <span>${s?.name||a}</span>
                                                        ${l?"":p`
                                                            <span class="dependency-badge">${fe.NOT_INSTALLED}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${fe.DEPENDENCIES_HINT}
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
    `;Jo([w()],Vi.prototype,"selectedExtension",2);Jo([w()],Vi.prototype,"filterText",2);Jo([w()],Vi.prototype,"showRegisterDialog",2);Jo([w()],Vi.prototype,"registerExtensionData",2);Vi=Jo([v("lyra-extensions")],Vi);var vg=Object.defineProperty,yg=Object.getOwnPropertyDescriptor,Jr=(e,t,i,o)=>{for(var r=o>1?void 0:o?yg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&vg(t,i,r),r};const me=await So(Object.assign({"./logterminal.de.json":()=>Je(()=>import("./logterminal.de-MX1cr5ek-EcKGbnDh.js"),[]),"./logterminal.en.json":()=>Je(()=>import("./logterminal.en-BHVSaQqb-DpFjNbQM.js"),[])}));let go=class extends mt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=ni()}connectedCallback(){super.connectedCallback(),this.loadSettings(),Qp(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Jp()}log(e,t,i="info"){const o={timestamp:new Date,level:i,source:e,message:t};this.messages=[...this.messages,o],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const r=this.containerRef.value;r&&(r.scrollTop=r.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(e=>e.level===this.filter)}formatTimestamp(e){return e.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(e){switch(e){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(e){switch(e){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const e=this.messages.filter(r=>r.level==="info").length,t=this.messages.filter(r=>r.level==="warning").length,i=this.messages.filter(r=>r.level==="error").length,o=this.messages.filter(r=>r.level==="debug").length;return p`
            <lyra-command 
                icon="list"
                title="${me.ALL_LOGS}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${me.ALL} (${this.messages.length})
            </lyra-command>

            <lyra-command 
                icon="circle-info"
                title="${me.INFO_LOGS}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${me.INFO}${e>0?` (${e})`:""}
            </lyra-command>

            <lyra-command 
                icon="triangle-exclamation"
                title="${me.WARNING_LOGS}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${me.WARNINGS}${t>0?` (${t})`:""}
            </lyra-command>

            <lyra-command 
                icon="circle-xmark"
                title="${me.ERROR_LOGS}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${me.ERRORS}${i>0?` (${i})`:""}
            </lyra-command>

            <lyra-command 
                icon="bug"
                title="${me.DEBUG_LOGS}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${me.DEBUG}${o>0?` (${o})`:""}
            </lyra-command>

            <wa-divider orientation="vertical"></wa-divider>

            <lyra-command 
                icon="arrow-down" 
                title="${this.autoScroll?me.AUTO_SCROLL_ENABLED:me.AUTO_SCROLL_DISABLED}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?me.AUTO_SCROLL:me.MANUAL}
            </lyra-command>

            <lyra-command 
                icon="trash" 
                title="${me.CLEAR_LOGS}"
                .action=${()=>this.clear()}>
                ${me.CLEAR}
            </lyra-command>
        `}render(){const e=this.getFilteredMessages();return p`
            <div class="log-terminal">
                <div class="messages" ${li(this.containerRef)}>
                    ${e.length===0?p`<div class="empty-state">${me.NO_LOG_MESSAGES}</div>`:e.map(t=>p`
                            <div class="message" data-level="${t.level}">
                                <span class="timestamp">${this.formatTimestamp(t.timestamp)}</span>
                                <wa-icon 
                                    name="${this.getLevelIcon(t.level)}" 
                                    label="${t.level}"
                                    style="color: ${this.getLevelColor(t.level)}">
                                </wa-icon>
                                <span class="source">[${t.source}]</span>
                                <span class="text">${t.message}</span>
                            </div>
                        `)}
                </div>
            </div>
        `}async loadSettings(){const e=await this.getDialogSetting();e&&(typeof e.filter=="string"&&(e.filter==="all"||["info","warning","error","debug"].includes(e.filter))&&(this.filter=e.filter),typeof e.autoScroll=="boolean"&&(this.autoScroll=e.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};go.styles=k`
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
    `;Jr([w()],go.prototype,"messages",2);Jr([w()],go.prototype,"autoScroll",2);Jr([w()],go.prototype,"filter",2);go=Jr([v("lyra-log-terminal")],go);var xg=Object.defineProperty,kg=Object.getOwnPropertyDescriptor,at=(e,t,i,o)=>{for(var r=o>1?void 0:o?kg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&xg(t,i,r),r};const Cg=await So(Object.assign({"./fastviews.de.json":()=>Je(()=>import("./fastviews.de-MGAlHTsp-CU9Rj7sS.js"),[]),"./fastviews.en.json":()=>Je(()=>import("./fastviews.en-BoYc4WrC-DnZQwCTs.js"),[])}));let Ue=class extends Kr{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=ni(),this.tabsRef=ni(),this.resizeHandleRef=ni(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(e){if(!this.disabled)if(this.containerId){const t=document.querySelector(`lyra-tabs#${this.containerId}`);if(!t){console.error(`fastviews: Tab container with id "${this.containerId}" not found`);return}t.open(e)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const t=this.tabsRef.value;t&&t.open(e)})}handleDrawerHide(){this.drawerOpen=!1}startResize(e){e.preventDefault(),e.stopPropagation();const t=this.drawerRef.value;if(!t)return;let o=(()=>{const s=t.shadowRoot?.querySelector('[part="panel"]');if(s&&s.offsetWidth>0)return s.offsetWidth;const h=(window.getComputedStyle(t).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(h){const u=parseFloat(h[1]),f=h[2];if(f==="px")return u;if(f==="vw")return u/100*window.innerWidth;if(f==="vh")return u/100*window.innerHeight;if(f==="%")return u/100*window.innerWidth}return 0})();o===0&&(o=window.innerWidth*.5);const r=s=>{this.resizing&&(s.preventDefault(),s.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-s.clientX,d=Math.round(this.resizing.startSize+l),h=200,u=Math.round(window.innerWidth*.9);if(d>=h&&d<=u){this.drawerSize=`${d}px`;const f=this.drawerRef.value;f&&(f.style.setProperty("--size",this.drawerSize),f.style.setProperty("transition","none"))}this.resizing.rafId=null}))},a=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const s=this.drawerRef.value;s&&s.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:e.clientX,startSize:o,handleMouseMove:r,handleMouseUp:a,rafId:null},document.addEventListener("mousemove",r,{passive:!1}),document.addEventListener("mouseup",a,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),Ie(St,e=>{this.target&&e.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const e=B.getContributions(this.target);this.tabContributions=e.filter(t=>"name"in t),this.requestUpdate()}renderTabContribution(e){return p`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(e)}>
                ${De(e.icon,{label:e.label,slot:"icon"})}
                ${e.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?ae:p`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    ${De(this.icon,{label:this.title,slot:"start"})}
                    <slot></slot>
                </wa-button>
                
                ${this.title?p`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:ae}
                
                ${this.tabContributions.map(e=>this.renderTabContribution(e))}
            </wa-dropdown>

            ${this.containerId?ae:p`
                <wa-drawer 
                    ${li(this.drawerRef)}
                    label="${this.title||Cg.FAST_VIEWS}"
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
        `:ae}};Ue.styles=k`
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
    `;at([c()],Ue.prototype,"target",2);at([c()],Ue.prototype,"title",2);at([c()],Ue.prototype,"icon",2);at([c({type:Boolean})],Ue.prototype,"disabled",2);at([c()],Ue.prototype,"appearance",2);at([c()],Ue.prototype,"size",2);at([c()],Ue.prototype,"placement",2);at([c()],Ue.prototype,"containerId",2);at([w()],Ue.prototype,"tabContributions",2);at([w()],Ue.prototype,"drawerOpen",2);at([w()],Ue.prototype,"drawerSize",2);Ue=at([v("lyra-fastviews")],Ue);var Sg=Object.getOwnPropertyDescriptor,$g=(e,t,i,o)=>{for(var r=o>1?void 0:o?Sg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=s(r)||r);return r};function Eg(){let e=document.getElementById("global-dialog-container");return e||(e=document.createElement("div"),e.id="global-dialog-container",document.body.appendChild(e)),e}const Al=e=>{try{return new Intl.DisplayNames([e],{type:"language"}).of(e)||e.toUpperCase()}catch{return e.toUpperCase()}},Lg=()=>[...Ss.get()].sort(),Ag=async()=>{const e=Lg(),t=Bi.get();return new Promise(i=>{const o=Eg();let r=!1;const a=()=>{const h=o.querySelector("wa-dialog");h&&!r&&(h.open=!1)},s=()=>{r||(r=!0,gt(p``,o),i())},l=async h=>{await ne.set(_r,h),a()},d=p`
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
                    ${e.map(h=>p`
                        <div 
                            class="language-item ${h===t?"active":""}"
                            @click=${()=>l(h)}>
                            <span class="language-code">${h.toUpperCase()}</span>
                            <span class="language-name">${Al(h)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;gt(d,o)})};let Wa=class extends Ci{render(){const e=Bi.get(),t=Al(e),i=`${e.toUpperCase()} ${t}`;return p`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${t}"
                @click=${()=>Ag()}>
                ${i}
            </wa-button>
        `}};Wa.styles=k`
        :host {
            display: inline-block;
        }
    `;Wa=$g([v("lyra-language-selector")],Wa);var zg=Object.defineProperty,Tg=Object.getOwnPropertyDescriptor,zl=(e,t,i,o)=>{for(var r=o>1?void 0:o?Tg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&zg(t,i,r),r};let Pr=class extends Ci{constructor(){super(...arguments),this.currentLayoutId="standard"}doBeforeUI(){this.currentLayoutId=ai.getCurrentLayoutId();const e=()=>{this.currentLayoutId=ai.getCurrentLayoutId(),this.requestUpdate()};return window.addEventListener("app-loaded",e),window.addEventListener("layout-changed",e),()=>{window.removeEventListener("app-loaded",e),window.removeEventListener("layout-changed",e)}}async handleSelect(e){const t=e.detail?.item?.value;if(!(!t||t===this.currentLayoutId))try{await ai.setPreferredLayoutId(t)}catch(i){console.error("Failed to switch layout:",i)}}render(){const e=ai.getRegisteredLayouts();if(e.length<=1)return p``;const i=e.find(o=>o.id===this.currentLayoutId)?.name??this.currentLayoutId;return p`
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
                ${e.map(o=>p`
                        <wa-dropdown-item
                            value="${o.id}"
                            type="checkbox"
                            ?checked=${o.id===this.currentLayoutId}>
                            ${De(o.icon,{label:o.name,slot:"icon"})}
                            ${o.name}
                        </wa-dropdown-item>
                    `)}
            </wa-dropdown>
        `}};Pr.styles=k`
        :host {
            display: inline-block;
        }
    `;zl([w()],Pr.prototype,"currentLayoutId",2);Pr=zl([v("lyra-layout-switcher")],Pr);const Rg="view.filebrowser",Dg="view.logTerminal",Ig="toolbar.info",Og="toolbar.fastViews",_g="toolbar.languageSelector",Pg="toolbar.appSwitcher";B.registerContribution(Dr,{name:Rg,label:"Workspace",icon:"folder-open",component:e=>p`<lyra-filebrowser id="${e}"></lyra-filebrowser>`});B.registerContribution(fs,{name:Dg,label:"Log Messages",icon:"list",component:e=>p`<lyra-log-terminal id="${e}"></lyra-log-terminal>`});B.registerContribution(Go,{name:Ig,label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});B.registerContribution(Go,{name:Og,label:"Fast Views",component:'<lyra-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></lyra-fastviews>'});B.registerContribution(Go,{name:_g,label:"Language",component:()=>p`<lyra-language-selector></lyra-language-selector>`});B.registerContribution(xo,{name:Pg,label:"App Switcher",component:()=>p`<lyra-layout-switcher></lyra-layout-switcher>`});var Fg=Object.defineProperty,Mg=Object.getOwnPropertyDescriptor,er=(e,t,i,o)=>{for(var r=o>1?void 0:o?Mg(t,i):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Fg(t,i,r),r};let bo=class extends xs{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return p`
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
                <lyra-toolbar id=${dl}></lyra-toolbar>
                <lyra-toolbar id=${hl}></lyra-toolbar>
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
                                    <lyra-tabs id="${fl}"></lyra-tabs>
                                </lyra-resizable-grid>
                            `:p`<lyra-tabs id="${Dr}"></lyra-tabs>`}
                    `:ae}
                
                ${this.showBottomPanel?p`
                        <lyra-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <lyra-tabs id="${Ht}"></lyra-tabs>
                            <lyra-tabs id="${fs}"></lyra-tabs>
                        </lyra-resizable-grid>
                    `:p`<lyra-tabs id="${Ht}"></lyra-tabs>`}
                
                ${this.showAuxSidebar?p`<lyra-tabs id="${ml}"></lyra-tabs>`:ae}
            </lyra-resizable-grid>
            
            <div class="toolbar-bottom">
                <lyra-toolbar id=${ul}></lyra-toolbar>
                <lyra-toolbar id=${Yr}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${Go}></lyra-toolbar>
            </div>
        `}};er([c({type:Boolean,attribute:"show-bottom-sidebar"})],bo.prototype,"showBottomSidebar",2);er([c({type:Boolean,attribute:"show-bottom-panel"})],bo.prototype,"showBottomPanel",2);er([c({type:Boolean,attribute:"show-left-sidebar"})],bo.prototype,"showLeftSidebar",2);er([c({type:Boolean,attribute:"show-aux-sidebar"})],bo.prototype,"showAuxSidebar",2);bo=er([v("lyra-standard-layout")],bo);const Ng=[{id:"standard",name:"Standard",label:"Standard",icon:"lyra layout-standard",component:"lyra-standard-layout"},{id:"standard-bottom-panel",name:"Standard (bottom panel)",label:"Standard (bottom panel)",icon:"lyra layout-standard-bottom-panel",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true"}}},{id:"standard-bottom-sidebar",name:"Standard (bottom sidebar)",label:"Standard (bottom sidebar)",icon:"lyra layout-standard-bottom-sidebar",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-sidebar":"true"}}},{id:"standard-full",name:"Standard (panel + sidebar)",label:"Standard (panel + sidebar)",icon:"lyra layout-standard-full",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true","show-bottom-sidebar":"true"}}}];for(const e of Ng)B.registerContribution(Rr,e);async function Bg(e,t=!0){const i=await P.getWorkspace();if(!i)return null;const o=e?.path;return t&&!o?null:{workspace:i,path:o||""}}function Ls(e){return e&&typeof e.getContent=="function"&&typeof e.getSelection=="function"&&typeof e.getSnippet=="function"&&typeof e.getLanguage=="function"&&typeof e.getFilePath=="function"}function si(e=!1){const t={filePath:null,language:null};return e?{...t,snippet:null,cursorLine:null}:t}async function Vg(e,t=!0){const i=await Bg(e,t);if(!i)return null;const{workspace:o,path:r}=i;if(!r)return null;try{const a=await o.getResource(r);return!a||!(a instanceof ze)?null:{workspace:o,path:r,file:a}}catch{return null}}pe({command:{id:"disconnect_folder",name:"Disconnect folder",description:"Disconnects a folder from the workspace"},handler:{execute:async()=>{const e=Lt.get();if(!(e instanceof Re&&e.getParent()===void 0)){re("Select a folder root to disconnect.");return}try{await P.disconnectFolder(e)}catch(t){re(t.message)}}},contribution:{target:"contextmenu:view.filebrowser",label:"Disconnect folder",icon:"folder-minus",disabled:()=>{const e=Lt.get();return!(e instanceof Re&&e.getParent()===void 0)}}});pe({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async e=>{await window.showDirectoryPicker({mode:"readwrite"}).then(t=>P.connectWorkspace(t)).catch(t=>{re(t.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});pe({command:{id:"connect_opfs",name:"OPFS",description:"Connect to Origin Private File System (browser storage)",parameters:[]},handler:{execute:async()=>{try{await P.connectFolder({opfs:!0})}catch(e){re(e.message)}}},contribution:{target:"filebrowser.connections",label:"OPFS (Browser Storage)",icon:"database"}});pe({command:{id:"connect_indexeddb",name:"IndexedDB",description:"Connect to IndexedDB-backed workspace (browser storage)",parameters:[{name:"name",description:"Optional display name for this IndexedDB workspace root",required:!1}]},handler:{execute:async e=>{const t=e.params?.name;try{await P.connectFolder({indexeddb:!0,name:t})}catch(i){re(i.message)}}},contribution:{target:"filebrowser.connections",label:"IndexedDB (Browser Storage)",icon:"database"}});pe({command:{id:"refresh_resource",name:"Refresh resource",description:"Refreshes the connected folder of the selected resource, or the whole workspace if nothing is selected",parameters:[]},handler:{execute:async()=>{const e=Lt.get();if(e){e.getWorkspace().touch();return}const t=await P.getWorkspace();if(!t){re("No workspace selected.");return}t.touch()}}});pe({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"The path of the file to open within the workspace; if omitted, the active selection is opened",required:!1},{name:"editorId",description:"Open with this editor id; if omitted, use default editor",required:!1}]},handler:{execute:async e=>{const t=e.params?.path,i=e.params?.editorId;let o=null;if(t)o=(await Vg({path:t}))?.file??null;else{const r=Lt.get();o=r instanceof ze?r:null}o&&await mo.loadEditor(o,i)}}});pe({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async e=>{const t=e.activeEditor;if(!Ls(t))return{...si(),content:null};try{return{content:t.getContent(),filePath:t.getFilePath(),language:t.getLanguage()}}catch{return{...si(),content:null}}}}});pe({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async e=>{const t=e.activeEditor;if(!Ls(t))return{...si(),selection:null};try{return{selection:t.getSelection(),filePath:t.getFilePath(),language:t.getLanguage()}}catch{return{...si(),selection:null}}}}});pe({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async e=>{const t=e.activeEditor;if(!Ls(t))return si(!0);try{const i=e.params?.lines?parseInt(e.params.lines,10):5;if(isNaN(i)||i<0)return si(!0);const o=t.getSnippet(i);return o?{snippet:o.snippet,filePath:t.getFilePath(),language:t.getLanguage(),cursorLine:o.cursorLine}:si(!0)}catch{return si(!0)}}}});pe({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async e=>{const t=ai.getCurrentApp();if(!t){re("No app loaded");return}const i=t.dependencies??{},o=Object.keys(i).length>0,r=o?p`
                    <wa-tree style="--indent-guide-width: 1px;">
                        <wa-tree-item expanded>
                            <span>${t.name??""}</span>
                            ${Object.entries(i).map(([S,T])=>p`
                                <wa-tree-item>
                                    <span>${S} <small>${T}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    </wa-tree>
                `:p``;let a=null;const s=()=>(a||(a=document.getElementById("global-dialog-container")||document.createElement("div"),a.id||(a.id="global-dialog-container",document.body.appendChild(a))),a),l=()=>{a&&gt(p``,a)},d=S=>{const T=H.parse(S,{async:!1});return p`${Kt(T)}`};let h=[];if(t.releaseHistory)if(typeof t.releaseHistory=="function")try{h=await t.releaseHistory()}catch(S){console.error("Failed to load release history from app:",S),h=[]}else h=t.releaseHistory;const u=t.version??"0.0.0",f=h.length>0?h.findIndex(S=>S.tag_name===u):-1,m=f>=0?f:0;let g=m;const b=S=>{if(h.length===0)return"";const T=h[S],q=T.tag_name===u;let j=`**Version:** ${T.tag_name}`;q&&(j+=" (Current)"),j+=`

`;const Y=new Date(T.published_at).toLocaleDateString();if(j+=`**Released:** ${Y}

`,!q){const de=u.replace(/^v/,""),st=T.tag_name.replace(/^v/,""),We=de.split(".").map(Number),Le=st.split(".").map(Number);let nt=!1;for(let Ae=0;Ae<Math.max(We.length,Le.length);Ae++){const lt=We[Ae]||0,he=Le[Ae]||0;if(he>lt){nt=!0;break}if(he<lt)break}nt&&(j+=`⚠️ **Update available - reload page to update**

`)}return T.body&&(j+=`---

${T.body}`),j},C=()=>{l()},E=()=>{l()},L=S=>{const T=b(S),q=h.length>0,j=p`
                    <wa-dialog 
                        label="About ${t.name??""} - ${t.version??"0.0.0"}"
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
                        <small>${t.description??""}</small>
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
                `;gt(j,s())};return L(m),new Promise(S=>{const T=()=>{a?.querySelector("wa-dialog[open]")?setTimeout(T,100):S()};T()})}}});pe({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async e=>{const t=e.activeEditor||e.activePart;t&&t.isDirty()&&t.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const e=eo.get();return!e||!e.isDirty()}}});const Tl="theme";async function Rl(e){const t=document.documentElement;t.classList.remove("wa-dark","wa-light"),t.classList.add(e)}async function Ug(){const e=await ne.get(Tl);await Rl(e||"wa-dark")}async function qg(e){await ne.set(Tl,e)}pe({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async e=>{const i=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await Rl(i),await qg(i)}},contribution:{target:xo,icon:"circle-half-stroke",label:"Theme Switcher"}});Ug().catch(e=>{console.error("Failed to load theme preference:",e)});pe({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async e=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:xo,icon:"expand",label:"Fullscreen"}});pe({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:e=>{const t={title:"Extensions",data:{},key:"system.extensions",icon:"puzzle-piece",state:{},noOverflow:!0,component:()=>p`<lyra-extensions></lyra-extensions>`};mo.loadEditor(t,"extensions-editor").then()}},contribution:{target:xo,icon:"puzzle-piece",label:"Open Extensions"}});pe({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async e=>oe.getExtensions().map(i=>({id:i.id,name:i.name,description:i.description,experimental:i.experimental,enabled:oe.isEnabled(i.id)}))}});pe({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:e,type:t}})=>{e&&(t==="error"?re(e):jt(e))}}});const Dl=`self.onmessage = async function(e) {
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
`,yn=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Dl],{type:"text/javascript;charset=utf-8"});function Hg(e){let t;try{if(t=yn&&(self.URL||self.webkitURL).createObjectURL(yn),!t)throw"";const i=new Worker(t,{type:"module",name:e?.name});return i.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),i}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Dl),{type:"module",name:e?.name})}}function Wg(){let e=null,t=null;function i(){return e||(e=new Hg,e.onmessage=o=>{const r=t;t=null,r&&(o.data.type==="result"?r.resolve(o.data.value):r.reject(new Error(o.data.message??"Unknown error")))},e.onerror=o=>{const r=t;t=null,r&&r.reject(new Error(o.message??"Worker error"))}),e}return{execute(o){return new Promise((r,a)=>{t={resolve:r,reject:a},i().postMessage(o)})},close(){e&&(e.terminate(),e=null),t=null}}}async function jg(e){if(e.code?.trim())return e.code.trim();if(!e.script)return re("Provide 'script' (file path) or 'code'."),null;const t=await P.getWorkspace();if(!t)return re("No workspace selected."),null;try{const i=await t.getResource(e.script);if(!i||!(i instanceof ze))return re("File not found: "+e.script),null;const o=await i.getContents();return typeof o!="string"?(re("File is not a text file"),null):o}catch(i){return re(`Failed to access file: ${i instanceof Error?i.message:String(i)}`),null}}pe({command:{id:"js",name:"Run JavaScript file",description:"Runs a script via JsRuntime (inline or file). Return value or self.postMessage(value) is shown.",parameters:[{name:"script",description:"workspace path to a .js file",required:!1},{name:"code",description:"inline JavaScript",required:!1}]},handler:{execute:async e=>{const t=await jg(e.params??{});if(!t)return;const i=Wg();try{const o=await i.execute(t);return o!==void 0&&jt(String(o)),o}catch(o){re(o instanceof Error?o.message:String(o))}finally{i.close()}}}});pe({command:{id:"open_view_as_editor",name:"Open view as editor",description:"Opens a dashboard view in the editor area",parameters:[{name:"name",description:"View contribution name",required:!0},{name:"sourceContributionSlot",description:"source contribution slot (default: SYSTEM_VIEWS)",required:!1}]},handler:{execute:async({params:e})=>{const t=e?.name;if(!t)return;const i=e?.sourceContributionSlot??pl,r=B.getContributions(i).find(a=>a.name===t);r?.component&&await mo.openTab(r)}}});ke.put("constants",Jf);ki.put("html",p);ki.put("render",gt);ki.put("toastInfo",jt);ki.put("toastError",re);ki.put("toastWarning",of);ki.put("publish",_);ki.put("subscribe",Ie);export{Ze as A,Dr as B,St as C,Re as D,Dt as E,ze as F,De as G,ml as H,ki as I,hl as J,Go as K,mt as L,qt as M,Zn as N,eo as O,Pa as P,Kr as Q,Wg as R,Qg as S,dl as T,fs as U,Xg as V,Yg as W,fl as X,ai as a,pe as b,B as c,xo as d,oe as e,mo as f,ti as g,ul as h,So as i,Ci as j,Gt as k,zi as l,ne as m,K as n,ke as o,Im as p,ft as q,cc as r,Jg as s,re as t,ho as u,bs as v,P as w,jt as x,Lt as y,Ua as z};
