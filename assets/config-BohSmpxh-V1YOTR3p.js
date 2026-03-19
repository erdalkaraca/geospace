import{i as J,a as Ms,n as h,f as Q,r as X,t as Z,h as Vt,b as S,l as Vc,j as qc,k as at,m as ut,q as _o,u as ui,_ as Ne,o as Lr,v as Wc,w as re,g as xl,x as ii,y as Hc,S as kl,p as vt,z as jc,s as we,D as Je,A as Nt,e as Vr,c as qr,d as Kc,B as Va}from"./repeat-DeJtXcpe.js";var Ii=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var Us=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};function tt(t,e){const r={waitUntilFirstUpdate:!1,...e};return(i,a)=>{const{update:o}=i,s=Array.isArray(t)?t:[t];i.update=function(n){s.forEach(l=>{const d=l;if(n.has(d)){const u=n.get(d),m=this[d];u!==m&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[a](u,m)}}),o.call(this,n)}}}const vs=new Set,Di=new Map;let ni,Vs="ltr",qs="en";const Cl=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Cl){const t=new MutationObserver(El);Vs=document.documentElement.dir||"ltr",qs=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Sl(...t){t.map(e=>{const r=e.$code.toLowerCase();Di.has(r)?Di.set(r,Object.assign(Object.assign({},Di.get(r)),e)):Di.set(r,e),ni||(ni=e)}),El()}function El(){Cl&&(Vs=document.documentElement.dir||"ltr",qs=document.documentElement.lang||navigator.language),[...vs.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Gc=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){vs.add(this.host)}hostDisconnected(){vs.delete(this.host)}dir(){return`${this.host.dir||Vs}`.toLowerCase()}lang(){return`${this.host.lang||qs}`.toLowerCase()}getTranslationData(e){var r,i;const a=new Intl.Locale(e.replace(/_/g,"-")),o=a?.language.toLowerCase(),s=(i=(r=a?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",n=Di.get(`${o}-${s}`),l=Di.get(o);return{locale:a,language:o,region:s,primary:n,secondary:l}}exists(e,r){var i;const{primary:a,secondary:o}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(a&&a[e]||o&&o[e]||r.includeFallback&&ni&&ni[e])}term(e,...r){const{primary:i,secondary:a}=this.getTranslationData(this.lang());let o;if(i&&i[e])o=i[e];else if(a&&a[e])o=a[e];else if(ni&&ni[e])o=ni[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...r):o}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,r)}};var _l={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};Sl(_l);var Xc=_l;var _t=class extends Gc{};Sl(Xc);var Zc=J`
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
`;var Yc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,$l=t=>{throw TypeError(t)},c=(t,e,r,i)=>{for(var a=i>1?void 0:i?Qc(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&Yc(e,r,a),a},Ll=(t,e,r)=>e.has(t)||$l("Cannot "+r),Jc=(t,e,r)=>(Ll(t,e,"read from private field"),e.get(t)),td=(t,e,r)=>e.has(t)?$l("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),ed=(t,e,r,i)=>(Ll(t,e,"write to private field"),e.set(t,r),r);var rd=J`
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
`,Ja,lt=class extends Ms{constructor(){super(),td(this,Ja,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,r)=>{if(this.internals?.states)try{r?this.internals.states.add(e):this.internals.states.delete(e)}catch(i){if(String(i).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw i}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,r]of t.elementProperties)r.default==="inherit"&&r.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${r.initial}`,!0)}static get styles(){const t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[rd,...t]}attributeChangedCallback(t,e,r){Jc(this,Ja)||(this.constructor.elementProperties.forEach((i,a)=>{i.reflect&&this[a]!=null&&this.initialReflectedProperties.set(a,this[a])}),ed(this,Ja,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){const r=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});r.error=e,this.dispatchEvent(r)}throw e}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};Ja=new WeakMap;c([h()],lt.prototype,"dir",2);c([h()],lt.prototype,"lang",2);c([h({type:Boolean,reflect:!0,attribute:"did-ssr"})],lt.prototype,"didSSR",2);var tr=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.play=!this.play)}handleLoad(){const t=document.createElement("canvas"),{width:e,height:r}=this.animatedImage;t.width=e,t.height=r,t.getContext("2d").drawImage(this.animatedImage,0,0,e,r),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new Us),this.isLoaded=!0)}handleError(){this.dispatchEvent(new Ii)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const e=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return S`
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

        ${this.isLoaded?S`
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
                    style=${Vt({"margin-inline-start":"3px"})}
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};tr.css=Zc;c([Q(".animated")],tr.prototype,"animatedImage",2);c([X()],tr.prototype,"frozenFrame",2);c([X()],tr.prototype,"isLoaded",2);c([h()],tr.prototype,"src",2);c([h()],tr.prototype,"alt",2);c([h({type:Boolean,reflect:!0})],tr.prototype,"play",2);c([tt("play",{waitUntilFirstUpdate:!0})],tr.prototype,"handlePlayChange",1);c([tt("src")],tr.prototype,"handleSrcChange",1);tr=c([Z("wa-animated-image")],tr);var id=J`
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
`;var ys="",xs="";function En(t){ys=t}function ad(t=""){if(!ys){const e=document.querySelector("[data-webawesome]");if(e?.hasAttribute("data-webawesome")){const r=new URL(e.getAttribute("data-webawesome")??"",window.location.href).pathname;En(r)}else{const i=[...document.getElementsByTagName("script")].find(a=>a.src.endsWith("webawesome.js")||a.src.endsWith("webawesome.loader.js")||a.src.endsWith("webawesome.ssr-loader.js"));if(i){const a=String(i.getAttribute("src"));En(a.split("/").slice(0,-1).join("/"))}}}return ys.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}function od(t){xs=t}function sd(){if(!xs){const t=document.querySelector("[data-fa-kit-code]");t&&od(t.getAttribute("data-fa-kit-code")||"")}return xs}var _n="7.2.0";function nd(t,e,r){const i=sd(),a=i.length>0;let o="solid";return e==="chisel"&&(o="chisel-regular"),e==="etch"&&(o="etch-solid"),e==="graphite"&&(o="graphite-thin"),e==="jelly"&&(o="jelly-regular",r==="duo-regular"&&(o="jelly-duo-regular"),r==="fill-regular"&&(o="jelly-fill-regular")),e==="jelly-duo"&&(o="jelly-duo-regular"),e==="jelly-fill"&&(o="jelly-fill-regular"),e==="notdog"&&(r==="solid"&&(o="notdog-solid"),r==="duo-solid"&&(o="notdog-duo-solid")),e==="notdog-duo"&&(o="notdog-duo-solid"),e==="slab"&&((r==="solid"||r==="regular")&&(o="slab-regular"),r==="press-regular"&&(o="slab-press-regular")),e==="slab-press"&&(o="slab-press-regular"),e==="thumbprint"&&(o="thumbprint-light"),e==="utility"&&(o="utility-semibold"),e==="utility-duo"&&(o="utility-duo-semibold"),e==="utility-fill"&&(o="utility-fill-semibold"),e==="whiteboard"&&(o="whiteboard-semibold"),e==="classic"&&(r==="thin"&&(o="thin"),r==="light"&&(o="light"),r==="regular"&&(o="regular"),r==="solid"&&(o="solid")),e==="duotone"&&(r==="thin"&&(o="duotone-thin"),r==="light"&&(o="duotone-light"),r==="regular"&&(o="duotone-regular"),r==="solid"&&(o="duotone")),e==="sharp"&&(r==="thin"&&(o="sharp-thin"),r==="light"&&(o="sharp-light"),r==="regular"&&(o="sharp-regular"),r==="solid"&&(o="sharp-solid")),e==="sharp-duotone"&&(r==="thin"&&(o="sharp-duotone-thin"),r==="light"&&(o="sharp-duotone-light"),r==="regular"&&(o="sharp-duotone-regular"),r==="solid"&&(o="sharp-duotone-solid")),e==="brands"&&(o="brands"),a?`https://ka-p.fontawesome.com/releases/v${_n}/svgs/${o}/${t}.svg?token=${encodeURIComponent(i)}`:`https://ka-f.fontawesome.com/releases/v${_n}/svgs/${o}/${t}.svg`}var ld={name:"default",resolver:(t,e="classic",r="solid")=>nd(t,e,r),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){const{family:r,variant:i}=e;if(r==="duotone"||r==="sharp-duotone"||r==="notdog-duo"||r==="notdog"&&i==="duo-solid"||r==="jelly-duo"||r==="jelly"&&i==="duo-regular"||r==="utility-duo"||r==="thumbprint"){const a=[...t.querySelectorAll("path")],o=a.find(n=>!n.hasAttribute("opacity")),s=a.find(n=>n.hasAttribute("opacity"));if(!o||!s)return;if(o.setAttribute("data-duotone-primary",""),s.setAttribute("data-duotone-secondary",""),e.swapOpacity&&o&&s){const n=s.getAttribute("opacity")||"0.4";o.style.setProperty("--path-opacity",n),s.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},cd=ld;function dd(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var Go={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},hd={name:"system",resolver:(t,e="classic",r="solid")=>{let a=Go[r][t]??Go.regular[t]??Go.regular["circle-question"];return a?dd(a):""}},ud=hd;var pd="classic",ao=[cd,ud],oo=[];function fd(t){oo.push(t)}function md(t){oo=oo.filter(e=>e!==t)}function Xo(t){return ao.find(e=>e.name===t)}function gd(t,e){bd(t),ao.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),oo.forEach(r=>{r.library===t&&r.setIcon()})}function bd(t){ao=ao.filter(e=>e.name!==t)}function wd(){return pd}var sa=Symbol(),qa=Symbol(),Zo,Yo=new Map,oe=class extends lt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let r;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=S`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(i,this),this.svg}try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?sa:qa}catch{return qa}try{const i=document.createElement("div");i.innerHTML=await r.text();const a=i.firstElementChild;if(a?.tagName?.toLowerCase()!=="svg")return sa;Zo||(Zo=new DOMParser);const s=Zo.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):sa}catch{return sa}}}connectedCallback(){super.connectedCallback(),fd(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),md(this)}getIconSource(){const t=Xo(this.library),e=this.family||wd();return this.name&&t?{url:t.resolver(this.name,e,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:e}=this.getIconSource(),r=e?Xo(this.library):void 0;if(!t){this.svg=null;return}let i=Yo.get(t);i||(i=this.resolveIcon(t,r),Yo.set(t,i));const a=await i;if(a===qa&&Yo.delete(t),t===this.getIconSource().url){if(Vc(a)){this.svg=a;return}switch(a){case qa:case sa:this.svg=null,this.dispatchEvent(new Ii);break;default:this.svg=a.cloneNode(!0),r?.mutator?.(this.svg,this),this.dispatchEvent(new Us)}}}updated(t){super.updated(t);const e=Xo(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);const r=this.shadowRoot?.querySelector("svg");r&&e?.mutator?.(r,this)}render(){return this.hasUpdated?this.svg:S`<svg part="svg" width="16" height="16"></svg>`}};oe.css=id;c([X()],oe.prototype,"svg",2);c([h({reflect:!0})],oe.prototype,"name",2);c([h({reflect:!0})],oe.prototype,"family",2);c([h({reflect:!0})],oe.prototype,"variant",2);c([h({attribute:"auto-width",type:Boolean,reflect:!0})],oe.prototype,"autoWidth",2);c([h({attribute:"swap-opacity",type:Boolean,reflect:!0})],oe.prototype,"swapOpacity",2);c([h()],oe.prototype,"src",2);c([h()],oe.prototype,"label",2);c([h({reflect:!0})],oe.prototype,"library",2);c([h({type:Number,reflect:!0})],oe.prototype,"rotate",2);c([h({type:String,reflect:!0})],oe.prototype,"flip",2);c([h({type:String,reflect:!0})],oe.prototype,"animation",2);c([tt("label")],oe.prototype,"handleLabelChange",1);c([tt(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],oe.prototype,"setIcon",1);oe=c([Z("wa-icon")],oe);var $n=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}};var vd=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}};var yd=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}};var xd=J`
  :host {
    display: contents;
  }
`;const kd=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Cd=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Sd=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Ed=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],_d=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$d=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ld=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],zd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ad=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Td=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rd=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Dd=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Id=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Od=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Pd=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Fd=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Nd=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Bd=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Md=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Ud=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Vd=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],qd=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Wd=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Hd=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],jd=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Kd=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Gd=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Xd=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Zd=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Yd=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Qd=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Jd=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],th=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],eh=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rh=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ih=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ah=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],oh=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sh=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nh=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lh=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ch=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dh=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hh=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],uh=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],ph=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],fh=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],mh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],gh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],bh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],wh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],vh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],yh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],xh=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],kh=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Ch=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Sh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Eh=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],_h=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],$h=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Lh=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],zh=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Ah=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Th=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rh=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Dh=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Ih=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Oh=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ph=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Fh=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Nh=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Bh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Mh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Uh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Vh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],qh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Wh=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hh=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],jh=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Kh=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Gh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Xh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Zh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Yh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Qh=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Jh=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],tu=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],eu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],ru=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],iu=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],au=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ou=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],su=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],nu=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],lu=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],cu=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],du=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],hu=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},uu=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Od,backInLeft:Pd,backInRight:Fd,backInUp:Nd,backOutDown:Bd,backOutLeft:Md,backOutRight:Ud,backOutUp:Vd,bounce:kd,bounceIn:qd,bounceInDown:Wd,bounceInLeft:Hd,bounceInRight:jd,bounceInUp:Kd,bounceOut:Gd,bounceOutDown:Xd,bounceOutLeft:Zd,bounceOutRight:Yd,bounceOutUp:Qd,easings:zl,fadeIn:Jd,fadeInBottomLeft:th,fadeInBottomRight:eh,fadeInDown:rh,fadeInDownBig:ih,fadeInLeft:ah,fadeInLeftBig:oh,fadeInRight:sh,fadeInRightBig:nh,fadeInTopLeft:lh,fadeInTopRight:ch,fadeInUp:dh,fadeInUpBig:hh,fadeOut:uh,fadeOutBottomLeft:ph,fadeOutBottomRight:fh,fadeOutDown:mh,fadeOutDownBig:gh,fadeOutLeft:bh,fadeOutLeftBig:wh,fadeOutRight:vh,fadeOutRightBig:yh,fadeOutTopLeft:xh,fadeOutTopRight:kh,fadeOutUp:Ch,fadeOutUpBig:Sh,flash:Cd,flip:Eh,flipInX:_h,flipInY:$h,flipOutX:Lh,flipOutY:zh,headShake:Sd,heartBeat:Ed,hinge:Qh,jackInTheBox:Jh,jello:_d,lightSpeedInLeft:Ah,lightSpeedInRight:Th,lightSpeedOutLeft:Rh,lightSpeedOutRight:Dh,pulse:$d,rollIn:tu,rollOut:eu,rotateIn:Ih,rotateInDownLeft:Oh,rotateInDownRight:Ph,rotateInUpLeft:Fh,rotateInUpRight:Nh,rotateOut:Bh,rotateOutDownLeft:Mh,rotateOutDownRight:Uh,rotateOutUpLeft:Vh,rotateOutUpRight:qh,rubberBand:Ld,shake:zd,shakeX:Ad,shakeY:Td,slideInDown:Wh,slideInLeft:Hh,slideInRight:jh,slideInUp:Kh,slideOutDown:Gh,slideOutLeft:Xh,slideOutRight:Zh,slideOutUp:Yh,swing:Rd,tada:Dd,wobble:Id,zoomIn:ru,zoomInDown:iu,zoomInLeft:au,zoomInRight:ou,zoomInUp:su,zoomOut:nu,zoomOutDown:lu,zoomOutLeft:cu,zoomOutRight:du,zoomOutUp:hu},Symbol.toStringTag,{value:"Module"}));var Zt=class extends lt{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new vd)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new yd)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const t=zl[this.easing]??this.easing,e=this.keyframes??uu[this.name],i=(await this.defaultSlot).assignedElements()[0];return!i||!e?!1:(this.destroyAnimation(),this.animation=i.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new $n)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new $n)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return S` <slot @slotchange=${this.handleSlotChange}></slot> `}};Zt.css=xd;c([qc("slot")],Zt.prototype,"defaultSlot",2);c([h()],Zt.prototype,"name",2);c([h({type:Boolean,reflect:!0})],Zt.prototype,"play",2);c([h({type:Number})],Zt.prototype,"delay",2);c([h()],Zt.prototype,"direction",2);c([h({type:Number})],Zt.prototype,"duration",2);c([h()],Zt.prototype,"easing",2);c([h({attribute:"end-delay",type:Number})],Zt.prototype,"endDelay",2);c([h()],Zt.prototype,"fill",2);c([h({type:Number})],Zt.prototype,"iterations",2);c([h({attribute:"iteration-start",type:Number})],Zt.prototype,"iterationStart",2);c([h({attribute:!1})],Zt.prototype,"keyframes",2);c([h({attribute:"playback-rate",type:Number})],Zt.prototype,"playbackRate",2);c([tt(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Zt.prototype,"handleAnimationChange",1);c([tt("play")],Zt.prototype,"handlePlayChange",1);c([tt("playbackRate")],Zt.prototype,"handlePlaybackRateChange",1);Zt=c([Z("wa-animation")],Zt);var pu=J`
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
`;var br=class extends lt{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new Ii)}render(){const t=S`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let e=S``;return this.initials?e=S`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:e=S`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,S` ${this.image&&!this.hasError?t:e} `}};br.css=pu;c([X()],br.prototype,"hasError",2);c([h()],br.prototype,"image",2);c([h()],br.prototype,"label",2);c([h()],br.prototype,"initials",2);c([h()],br.prototype,"loading",2);c([h({reflect:!0})],br.prototype,"shape",2);c([tt("image")],br.prototype,"handleImageChange",1);br=c([Z("wa-avatar")],br);var $o=J`
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
`;var fu=J`
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
`;var pi=class extends lt{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return S`
      <slot name="start" part="start"></slot>

      <slot part="base" role="status"></slot>

      <slot name="end" part="end"></slot>
    `}};pi.css=[$o,fu];c([h({reflect:!0})],pi.prototype,"variant",2);c([h({reflect:!0})],pi.prototype,"appearance",2);c([h({type:Boolean,reflect:!0})],pi.prototype,"pill",2);c([h({reflect:!0})],pi.prototype,"attention",2);pi=c([Z("wa-badge")],pi);var mu=J`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var Fi=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="wa-breadcrumb-item");t.forEach((e,r)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),S`
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
    `}};Fi.css=mu;c([Q("slot")],Fi.prototype,"defaultSlot",2);c([Q('slot[name="separator"]')],Fi.prototype,"separatorSlot",2);c([h()],Fi.prototype,"label",2);Fi=c([Z("wa-breadcrumb")],Fi);var gu=J`
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
`;var Ar=class extends lt{constructor(){super(...arguments),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="wa-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return S`
      <span part="start" class="start">
        <slot name="start"></slot>
      </span>

      ${this.renderType==="link"?S`
            <a
              part="label"
              class="label label-link"
              href="${this.href}"
              target="${at(this.target?this.target:void 0)}"
              rel=${at(this.target?this.rel:void 0)}
            >
              <slot></slot>
            </a>
          `:""}
      ${this.renderType==="button"?S`
            <button part="label" type="button" class="label label-button">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </button>
          `:""}
      ${this.renderType==="dropdown"?S`
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
    `}};Ar.css=gu;c([Q("slot:not([name])")],Ar.prototype,"defaultSlot",2);c([X()],Ar.prototype,"renderType",2);c([h()],Ar.prototype,"href",2);c([h()],Ar.prototype,"target",2);c([h()],Ar.prototype,"rel",2);c([tt("href",{waitUntilFirstUpdate:!0})],Ar.prototype,"hrefChanged",1);Ar=c([Z("wa-breadcrumb-item")],Ar);var za=()=>({checkValidity(t){const e=t.input,r={message:"",isValid:!0,invalidKeys:[]};if(!e)return r;let i=!0;if("checkValidity"in e&&(i=e.checkValidity()),i)return r;if(r.isValid=!1,"validationMessage"in e&&(r.message=e.validationMessage),!("validity"in e))return r.invalidKeys.push("customError"),r;for(const a in e.validity){if(a==="valid")continue;const o=a;e.validity[o]&&r.invalidKeys.push(o)}return r}});var Ws=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var bu=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),Ft=class extends lt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ws))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[bu()]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const r of e.observedAttributes)t.add(r);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")||t.has("defaultValue")){const e=this.value;if(Array.isArray(e)){if(this.name){const r=new FormData;for(const i of e)r.append(this.name,i);this.setValue(r,r)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.updateValidity()}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){const e=t[0],r=t[1];let i=t[2];i||(i=this.validationTarget),this.internals.setValidity(e,r,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,r=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&r),this.customStates.set("user-valid",e&&r)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){const[e,r]=t;this.internals.setFormValue(e,r)}get allValidators(){const t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},r=this.validationTarget||this.input||void 0;let i="";for(const a of t){const{isValid:o,message:s,invalidKeys:n}=a.checkValidity(this);o||(i||(i=s),n?.length>=0&&n.forEach(l=>e[l]=!0))}i||(i=this.validationMessage),this.setValidity(e,i,r)}};Ft.formAssociated=!0;c([h({reflect:!0})],Ft.prototype,"name",2);c([h({type:Boolean})],Ft.prototype,"disabled",2);c([h({state:!0,attribute:!1})],Ft.prototype,"valueHasChanged",2);c([h({state:!0,attribute:!1})],Ft.prototype,"hasInteracted",2);c([h({attribute:"custom-error",reflect:!0})],Ft.prototype,"customError",2);c([h({attribute:!1,state:!0,type:Object})],Ft.prototype,"validity",1);var ze=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{const i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(t){return this.host.querySelector?.(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot?.addEventListener?.("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot?.removeEventListener?.("slotchange",this.handleSlotChange)}};var me=J`
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
`;var wu=J`
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
`;const Al=Symbol.for(""),vu=t=>{if(t?.r===Al)return t?._$litStatic$},Ln=(t,...e)=>({_$litStatic$:e.reduce((r,i,a)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[a+1],t[0]),r:Al}),zn=new Map,yu=t=>(e,...r)=>{const i=r.length;let a,o;const s=[],n=[];let l,d=0,u=!1;for(;d<i;){for(l=e[d];d<i&&(o=r[d],(a=vu(o))!==void 0);)l+=a+e[++d],u=!0;d!==i&&n.push(o),s.push(l),d++}if(d===i&&s.push(e[i]),u){const m=s.join("$$lit$$");(e=zn.get(m))===void 0&&(s.raw=s,zn.set(m,e=s)),r=n}return t(e,...r)},Qo=yu(S);var Rt=class extends Ft{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new ze(this,"[default]","start","end"),this.localize=new _t(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,za()]}constructLightDOMButton(){const t=document.createElement("button");for(const e of this.attributes)e.name!=="style"&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;const r=this.constructLightDOMButton();this.parentElement?.append(r),r.click(),r.remove()}handleInvalid(){this.dispatchEvent(new Ws)}handleLabelSlotChange(){const t=this.labelSlot.assignedNodes({flatten:!0});let e=!1,r=!1,i=!1,a=!1;[...t].forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){const s=o;s.localName==="wa-icon"?(r=!0,e||(e=s.label!==void 0)):a=!0}else o.nodeType===Node.TEXT_NODE&&(o.textContent?.trim()||"").length>0&&(i=!0)}),this.isIconButton=r&&!i&&!a,this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=this.isLink(),e=t?Ln`a`:Ln`button`;return Qo`
      <${e}
        part="base"
        class=${ut({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${at(t?void 0:this.disabled)}
        type=${at(t?void 0:this.type)}
        title=${this.title}
        name=${at(t?void 0:this.name)}
        value=${at(t?void 0:this.value)}
        href=${at(t?this.href:void 0)}
        target=${at(t?this.target:void 0)}
        download=${at(t?this.download:void 0)}
        rel=${at(t&&this.rel?this.rel:void 0)}
        role=${at(t?void 0:"button")}
        aria-disabled=${at(t&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Qo`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Qo`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};Rt.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0};Rt.css=[wu,$o,me];c([Q(".button")],Rt.prototype,"button",2);c([Q("slot:not([name])")],Rt.prototype,"labelSlot",2);c([X()],Rt.prototype,"invalid",2);c([X()],Rt.prototype,"isIconButton",2);c([h()],Rt.prototype,"title",2);c([h({reflect:!0})],Rt.prototype,"variant",2);c([h({reflect:!0})],Rt.prototype,"appearance",2);c([h({reflect:!0})],Rt.prototype,"size",2);c([h({attribute:"with-caret",type:Boolean,reflect:!0})],Rt.prototype,"withCaret",2);c([h({type:Boolean})],Rt.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],Rt.prototype,"loading",2);c([h({type:Boolean,reflect:!0})],Rt.prototype,"pill",2);c([h()],Rt.prototype,"type",2);c([h({reflect:!0})],Rt.prototype,"name",2);c([h({reflect:!0})],Rt.prototype,"value",2);c([h({reflect:!0})],Rt.prototype,"href",2);c([h()],Rt.prototype,"target",2);c([h()],Rt.prototype,"rel",2);c([h()],Rt.prototype,"download",2);c([h({attribute:"formaction"})],Rt.prototype,"formAction",2);c([h({attribute:"formenctype"})],Rt.prototype,"formEnctype",2);c([h({attribute:"formmethod"})],Rt.prototype,"formMethod",2);c([h({attribute:"formnovalidate",type:Boolean})],Rt.prototype,"formNoValidate",2);c([h({attribute:"formtarget"})],Rt.prototype,"formTarget",2);c([tt("disabled",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleDisabledChange",1);Rt=c([Z("wa-button")],Rt);var xu=J`
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
`;var ks=class extends lt{constructor(){super(...arguments),this.localize=new _t(this)}render(){return S`
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
    `}};ks.css=xu;ks=c([Z("wa-spinner")],ks);var ku=J`
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
`;var Wr=class extends lt{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(t){super.updated(t),t.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(t){na(t.target)?.classList.add("button-focus")}handleBlur(t){na(t.target)?.classList.remove("button-focus")}handleMouseOver(t){na(t.target)?.classList.add("button-hover")}handleMouseOut(t){na(t.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,t.forEach(e=>{const r=t.indexOf(e),i=na(e);i&&(i.appearance==="outlined"&&(this.hasOutlined=!0),i.classList.add("wa-button-group__button"),i.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),i.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),i.classList.toggle("wa-button-group__button-first",r===0),i.classList.toggle("wa-button-group__button-inner",r>0&&r<t.length-1),i.classList.toggle("wa-button-group__button-last",r===t.length-1),i.classList.toggle("wa-button-group__button-radio",i.tagName.toLowerCase()==="wa-radio-button"))})}render(){return S`
      <slot
        part="base"
        class=${ut({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};Wr.css=[ku];c([Q("slot")],Wr.prototype,"defaultSlot",2);c([X()],Wr.prototype,"disableRole",2);c([X()],Wr.prototype,"hasOutlined",2);c([h()],Wr.prototype,"label",2);c([h({reflect:!0})],Wr.prototype,"orientation",2);Wr=c([Z("wa-button-group")],Wr);function na(t){const e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var Cu=J`
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
`;var Ni=class extends lt{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return S`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};Ni.css=[Cu,$o,me];c([h({reflect:!0})],Ni.prototype,"variant",2);c([h({reflect:!0})],Ni.prototype,"appearance",2);c([h({reflect:!0})],Ni.prototype,"size",2);Ni=c([Z("wa-callout")],Ni);var Su=J`
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
`;var Hr=class extends lt{constructor(){super(...arguments),this.hasSlotController=new ze(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?S`
        <slot name="media" part="media" class="media"></slot>
        <slot part="body" class="body"></slot>
        <slot name="actions" part="actions" class="actions"></slot>
      `:S`
      <slot name="media" part="media" class="media"></slot>

      ${this.hasSlotController.test("header-actions")?S` <header part="header" class="header has-actions">
            <slot name="header"></slot>
            <slot name="header-actions"></slot>
          </header>`:S` <header part="header" class="header">
            <slot name="header"></slot>
          </header>`}

      <slot part="body" class="body"></slot>
      ${this.hasSlotController.test("footer-actions")?S` <footer part="footer" class="footer has-actions">
            <slot name="footer"></slot>
            <slot name="footer-actions"></slot>
          </footer>`:S` <footer part="footer" class="footer">
            <slot name="footer"></slot>
          </footer>`}
    `}};Hr.css=[me,Su];c([h({reflect:!0})],Hr.prototype,"appearance",2);c([h({attribute:"with-header",type:Boolean,reflect:!0})],Hr.prototype,"withHeader",2);c([h({attribute:"with-media",type:Boolean,reflect:!0})],Hr.prototype,"withMedia",2);c([h({attribute:"with-footer",type:Boolean,reflect:!0})],Hr.prototype,"withFooter",2);c([h({reflect:!0})],Hr.prototype,"orientation",2);Hr=c([Z("wa-card")],Hr);var Eu=class extends Event{constructor(t){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var _u=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var $u=J`
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
`;let Lu="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",zu=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=Lu[r[t]&63];return e};function wt(t,e,r){const i=a=>Object.is(a,-0)?0:a;return t<e?i(e):t>r?i(r):i(t)}function Lo(t=""){return`${t}${zu()}`}function er(t,e){return new Promise(r=>{function i(a){a.target===t&&(t.removeEventListener(e,i),r())}t.addEventListener(e,i)})}async function so(t,e,r){return t.animate(e,r).finished.catch(()=>{})}function Mt(t,e){return new Promise(r=>{const i=new AbortController,{signal:a}=i;if(t.classList.contains(e))return;t.classList.add(e);let o=!1,s=()=>{o||(o=!0,t.classList.remove(e),r(),i.abort())};t.addEventListener("animationend",s,{once:!0,signal:a}),t.addEventListener("animationcancel",s,{once:!0,signal:a}),requestAnimationFrame(()=>{!o&&t.getAnimations().length===0&&s()})})}function no(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?(parseFloat(t)||0)*1e3:parseFloat(t)||0}function An(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function*Au(t,e){if(t!==void 0){let r=0;for(const i of t)yield e(i,r++)}}function*Tu(t,e,r=1){const i=e===void 0?0:t;e??=t;for(let a=i;r>0?a<e:e<a;a+=r)yield a}(()=>{const t=(i,a)=>{let o=0;return function(...s){window.clearTimeout(o),o=window.setTimeout(()=>{i.call(this,...s)},a)}},e=(i,a,o)=>{const s=i[a];i[a]=function(...n){s.call(this,...n),o.call(this,s,...n)}};if(!("onscrollend"in window)){const i=new Set,a=new WeakMap,o=n=>{i.add(n.pointerId)},s=n=>{i.delete(n.pointerId)};document.addEventListener("pointerdown",o),document.addEventListener("pointerup",s),e(EventTarget.prototype,"addEventListener",function(n,l){if(l!=="scroll")return;const d=t(()=>{i.size?d():this.dispatchEvent(new Event("scrollend"))},100);n.call(this,"scroll",d,{passive:!0}),a.set(this,d)}),e(EventTarget.prototype,"removeEventListener",function(n,l){if(l!=="scroll")return;const d=a.get(this);d&&n.call(this,"scroll",d,{passive:!0})})}})();var Ut=class extends lt{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new _u(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new _t(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,a=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||r!==a)&&(t.scrollTo({left:i,top:a,behavior:An()?"auto":"smooth"}),await er(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:r,loop:i}=this,a=i?t/r:(t-e)/r+1;return Math.ceil(a)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),r=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+r*r)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,r=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,a=t.key==="ArrowDown"||!r&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft",o=t.key==="ArrowUp"||!r&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight";t.preventDefault(),o&&this.previous(),a&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{const s=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');s&&s.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const n of e){const l=n.target;l.toggleAttribute("inert",!n.isIntersecting),l.classList.toggle("--in-view",n.isIntersecting),l.setAttribute("aria-hidden",n.isIntersecting?"false":"true")}const r=e.find(n=>n.isIntersecting);if(!r)return;const i=this.getSlides({excludeClones:!1}),a=this.getSlides().length,o=i.indexOf(r.target),s=this.loop?o-this.slidesPerPage:o;if(r&&(this.activeSlide=(Math.ceil(s/this.slidesPerMove)*this.slidesPerMove+a)%a,!this.scrolling&&this.loop&&r.target.hasAttribute("data-clone"))){const n=Number(r.target.getAttribute("data-clone"));this.goToSlide(n,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,r=t.slice(-e),i=t.slice(0,e);r.reverse().forEach((a,o)=>{const s=a.cloneNode(!0);s.setAttribute("data-clone",String(t.length-o-1)),this.prepend(s)}),i.forEach((a,o)=>{const s=a.cloneNode(!0);s.setAttribute("data-clone",String(o)),this.append(s)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,r)=>{e.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new Eu({index:this.activeSlide,slide:t[this.activeSlide]}))}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((r,i)=>{(i+e)%e===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:r,loop:i}=this,a=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!a.length)return;const s=i?(t+a.length)%a.length:wt(t,0,a.length-r);this.activeSlide=s;const n=this.localize.dir()==="rtl",l=wt(t+(i?r:0)+(n?r-1:0),0,o.length-1),d=o[l];this.scrollToSlide(d,An()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const r=this.scrollContainer,i=r.getBoundingClientRect(),a=t.getBoundingClientRect(),o=a.left-i.left,s=a.top-i.top;o||s?(this.pendingSlideChange=!0,r.scrollTo({left:o+r.scrollLeft,top:s+r.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this;let r=0,i=0,a=!1,o=!1;this.hasUpdated&&(r=this.getPageCount(),i=this.getCurrentPage(),a=this.canScrollPrev(),o=this.canScrollNext());const s=this.localize.dir()==="rtl";return S`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${ut({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style=${Vt({"--slides-per-page":this.slidesPerPage})}
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

        ${this.navigation?S`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${ut({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!a})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?"false":"true"}"
                  @click=${a?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${s?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${ut({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${s?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?S`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${Au(Tu(r),n=>{const l=n===i;return S`
                    <button
                      part="pagination-item ${l?"pagination-item-active":""}"
                      class="${ut({"pagination-item":!0,"pagination-item-active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",n+1,r)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(n*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:S``}
      </div>
    `}};Ut.css=$u;c([h({type:Boolean,reflect:!0})],Ut.prototype,"loop",2);c([h({type:Number,reflect:!0})],Ut.prototype,"slides",2);c([h({type:Number,reflect:!0})],Ut.prototype,"currentSlide",2);c([h({type:Boolean,reflect:!0})],Ut.prototype,"navigation",2);c([h({type:Boolean,reflect:!0})],Ut.prototype,"pagination",2);c([h({type:Boolean,reflect:!0})],Ut.prototype,"autoplay",2);c([h({type:Number,attribute:"autoplay-interval"})],Ut.prototype,"autoplayInterval",2);c([h({type:Number,attribute:"slides-per-page"})],Ut.prototype,"slidesPerPage",2);c([h({type:Number,attribute:"slides-per-move"})],Ut.prototype,"slidesPerMove",2);c([h()],Ut.prototype,"orientation",2);c([h({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Ut.prototype,"mouseDragging",2);c([Q(".slides")],Ut.prototype,"scrollContainer",2);c([Q(".pagination")],Ut.prototype,"paginationContainer",2);c([X()],Ut.prototype,"activeSlide",2);c([X()],Ut.prototype,"scrolling",2);c([X()],Ut.prototype,"dragging",2);c([_o({passive:!0})],Ut.prototype,"handleScroll",1);c([tt("loop",{waitUntilFirstUpdate:!0}),tt("slidesPerPage",{waitUntilFirstUpdate:!0})],Ut.prototype,"initializeSlides",1);c([tt("activeSlide")],Ut.prototype,"handleSlideChange",1);c([tt("slidesPerMove")],Ut.prototype,"updateSlidesSnap",1);c([tt("autoplay")],Ut.prototype,"handleAutoplayChange",1);Ut=c([Z("wa-carousel")],Ut);var Ru=J`
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
`;var Cs=class extends lt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return S` <slot></slot> `}};Cs.css=Ru;Cs=c([Z("wa-carousel-item")],Cs);var Du=J`
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
`;var zo=(t={})=>{let{validationElement:e,validationProperty:r}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),r||(r="value");const i={observedAttributes:["required"],message:e.validationMessage,checkValidity(a){const o={message:"",isValid:!0,invalidKeys:[]};return(a.required??a.hasAttribute("required"))&&!a[r]&&(o.message=typeof i.message=="function"?i.message(a):i.message||"",o.isValid=!1,o.invalidKeys.push("valueMissing")),o}};return i};var kr=J`
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
`;var Jt=class extends Ft{constructor(){super(...arguments),this.hasSlotController=new ze(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){const t=[zo({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){const t=this._value||"on";return this.checked?t:null}set value(t){this._value=t}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){const t=this.hasSlotController.test("hint"),e=this.hint?!0:!!t,r=!this.checked&&this.indeterminate,i=r?"indeterminate":"check",a=r?"indeterminate":"check";return S`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${at(this.name)}
            value=${at(this._value)}
            .indeterminate=${ui(this.indeterminate)}
            .checked=${ui(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${a}-icon icon" library="system" name=${i}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${e?"false":"true"}
        class="${ut({"has-slotted":e})}"
      >
        ${this.hint}
      </slot>
    `}};Jt.css=[kr,me,Du];Jt.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0};c([Q('input[type="checkbox"]')],Jt.prototype,"input",2);c([h()],Jt.prototype,"title",2);c([h({reflect:!0})],Jt.prototype,"name",2);c([h({reflect:!0})],Jt.prototype,"value",1);c([h({reflect:!0})],Jt.prototype,"size",2);c([h({type:Boolean})],Jt.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],Jt.prototype,"indeterminate",2);c([h({type:Boolean,attribute:!1})],Jt.prototype,"checked",1);c([h({type:Boolean,reflect:!0,attribute:"checked"})],Jt.prototype,"defaultChecked",2);c([h({type:Boolean,reflect:!0})],Jt.prototype,"required",2);c([h()],Jt.prototype,"hint",2);c([tt(["checked","defaultChecked"])],Jt.prototype,"handleDefaultCheckedChange",1);c([tt(["checked","indeterminate"])],Jt.prototype,"handleStateChange",1);c([tt("disabled")],Jt.prototype,"handleDisabledChange",1);Jt=c([Z("wa-checkbox")],Jt);function ya(t,e){function r(a){const o=t.getBoundingClientRect(),s=t.ownerDocument.defaultView,n=o.left+s.pageXOffset,l=o.top+s.pageYOffset,d=a.pageX-n,u=a.pageY-l;e?.onMove&&e.onMove(d,u)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&r(e.initialEvent)}var Jo=typeof window<"u"&&"ontouchstart"in window,Wa=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=r=>{const i="touches"in r?r.touches[0].clientX:r.clientX,a="touches"in r?r.touches[0].clientY:r.clientY;this.isDragging||!Jo&&r.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(i,a))},this.handleDragStop=r=>{const i="changedTouches"in r?r.changedTouches[0].clientX:r.clientX,a="changedTouches"in r?r.changedTouches[0].clientY:r.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(i,a)},this.handleDragMove=r=>{const i="touches"in r?r.touches[0].clientX:r.clientX,a="touches"in r?r.touches[0].clientY:r.clientY;window.getSelection()?.removeAllRanges(),this.options.move(i,a)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),Jo&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),Jo&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var Iu=J`
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
`;var Tl=J`
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
`;var hi=[];function ki(t){hi.push(t)}function wr(t){for(let e=hi.length-1;e>=0;e--)if(hi[e]===t){hi.splice(e,1);break}}function vr(t){return hi.length>0&&hi[hi.length-1]===t}function ae(t,e){Ou(t)&&(t="100%");const r=Pu(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Ha(t){return Math.min(1,Math.max(0,t))}function Ou(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Pu(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Rl(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function ja(t){return Number(t)<=1?`${Number(t)*100}%`:t}function di(t){return t.length===1?"0"+t:String(t)}function Fu(t,e,r){return{r:ae(t,255)*255,g:ae(e,255)*255,b:ae(r,255)*255}}function Tn(t,e,r){t=ae(t,255),e=ae(e,255),r=ae(r,255);const i=Math.max(t,e,r),a=Math.min(t,e,r);let o=0,s=0;const n=(i+a)/2;if(i===a)s=0,o=0;else{const l=i-a;switch(s=n>.5?l/(2-i-a):l/(i+a),i){case t:o=(e-r)/l+(e<r?6:0);break;case e:o=(r-t)/l+2;break;case r:o=(t-e)/l+4;break}o/=6}return{h:o,s,l:n}}function ts(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*(6*r):r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function Nu(t,e,r){let i,a,o;if(t=ae(t,360),e=ae(e,100),r=ae(r,100),e===0)a=r,o=r,i=r;else{const s=r<.5?r*(1+e):r+e-r*e,n=2*r-s;i=ts(n,s,t+1/3),a=ts(n,s,t),o=ts(n,s,t-1/3)}return{r:i*255,g:a*255,b:o*255}}function Rn(t,e,r){t=ae(t,255),e=ae(e,255),r=ae(r,255);const i=Math.max(t,e,r),a=Math.min(t,e,r);let o=0;const s=i,n=i-a,l=i===0?0:n/i;if(i===a)o=0;else{switch(i){case t:o=(e-r)/n+(e<r?6:0);break;case e:o=(r-t)/n+2;break;case r:o=(t-e)/n+4;break}o/=6}return{h:o,s:l,v:s}}function Bu(t,e,r){t=ae(t,360)*6,e=ae(e,100),r=ae(r,100);const i=Math.floor(t),a=t-i,o=r*(1-e),s=r*(1-a*e),n=r*(1-(1-a)*e),l=i%6,d=[r,s,o,o,n,r][l],u=[n,r,r,s,o,o][l],m=[o,o,n,r,r,s][l];return{r:d*255,g:u*255,b:m*255}}function Dn(t,e,r,i){const a=[di(Math.round(t).toString(16)),di(Math.round(e).toString(16)),di(Math.round(r).toString(16))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function Mu(t,e,r,i,a){const o=[di(Math.round(t).toString(16)),di(Math.round(e).toString(16)),di(Math.round(r).toString(16)),di(Vu(i))];return a&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Uu(t,e,r,i){const a=t/100,o=e/100,s=r/100,n=i/100,l=255*(1-a)*(1-n),d=255*(1-o)*(1-n),u=255*(1-s)*(1-n);return{r:l,g:d,b:u}}function In(t,e,r){let i=1-t/255,a=1-e/255,o=1-r/255,s=Math.min(i,a,o);return s===1?(i=0,a=0,o=0):(i=(i-s)/(1-s)*100,a=(a-s)/(1-s)*100,o=(o-s)/(1-s)*100),s*=100,{c:Math.round(i),m:Math.round(a),y:Math.round(o),k:Math.round(s)}}function Vu(t){return Math.round(parseFloat(t)*255).toString(16)}function On(t){return De(t)/255}function De(t){return parseInt(t,16)}function qu(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Ss={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Wu(t){let e={r:0,g:0,b:0},r=1,i=null,a=null,o=null,s=!1,n=!1;return typeof t=="string"&&(t=Ku(t)),typeof t=="object"&&(Te(t.r)&&Te(t.g)&&Te(t.b)?(e=Fu(t.r,t.g,t.b),s=!0,n=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Te(t.h)&&Te(t.s)&&Te(t.v)?(i=ja(t.s),a=ja(t.v),e=Bu(t.h,i,a),s=!0,n="hsv"):Te(t.h)&&Te(t.s)&&Te(t.l)?(i=ja(t.s),o=ja(t.l),e=Nu(t.h,i,o),s=!0,n="hsl"):Te(t.c)&&Te(t.m)&&Te(t.y)&&Te(t.k)&&(e=Uu(t.c,t.m,t.y,t.k),s=!0,n="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=Rl(r),{ok:s,format:t.format||n,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}const Hu="[-\\+]?\\d+%?",ju="[-\\+]?\\d*\\.\\d+%?",Br="(?:"+ju+")|(?:"+Hu+")",es="[\\s|\\(]+("+Br+")[,|\\s]+("+Br+")[,|\\s]+("+Br+")\\s*\\)?",Ka="[\\s|\\(]+("+Br+")[,|\\s]+("+Br+")[,|\\s]+("+Br+")[,|\\s]+("+Br+")\\s*\\)?",Ve={CSS_UNIT:new RegExp(Br),rgb:new RegExp("rgb"+es),rgba:new RegExp("rgba"+Ka),hsl:new RegExp("hsl"+es),hsla:new RegExp("hsla"+Ka),hsv:new RegExp("hsv"+es),hsva:new RegExp("hsva"+Ka),cmyk:new RegExp("cmyk"+Ka),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Ku(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Ss[t])t=Ss[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=Ve.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=Ve.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Ve.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=Ve.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Ve.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=Ve.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Ve.cmyk.exec(t),r?{c:r[1],m:r[2],y:r[3],k:r[4]}:(r=Ve.hex8.exec(t),r?{r:De(r[1]),g:De(r[2]),b:De(r[3]),a:On(r[4]),format:e?"name":"hex8"}:(r=Ve.hex6.exec(t),r?{r:De(r[1]),g:De(r[2]),b:De(r[3]),format:e?"name":"hex"}:(r=Ve.hex4.exec(t),r?{r:De(r[1]+r[1]),g:De(r[2]+r[2]),b:De(r[3]+r[3]),a:On(r[4]+r[4]),format:e?"name":"hex8"}:(r=Ve.hex3.exec(t),r?{r:De(r[1]+r[1]),g:De(r[2]+r[2]),b:De(r[3]+r[3]),format:e?"name":"hex"}:!1))))))))))}function Te(t){return typeof t=="number"?!Number.isNaN(t):Ve.CSS_UNIT.test(t)}class qt{constructor(e="",r={}){if(e instanceof qt)return e;typeof e=="number"&&(e=qu(e)),this.originalInput=e;const i=Wu(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let r,i,a;const o=e.r/255,s=e.g/255,n=e.b/255;return o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),.2126*r+.7152*i+.0722*a}getAlpha(){return this.a}setAlpha(e){return this.a=Rl(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Rn(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Rn(this.r,this.g,this.b),r=Math.round(e.h*360),i=Math.round(e.s*100),a=Math.round(e.v*100);return this.a===1?`hsv(${r}, ${i}%, ${a}%)`:`hsva(${r}, ${i}%, ${a}%, ${this.roundA})`}toHsl(){const e=Tn(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Tn(this.r,this.g,this.b),r=Math.round(e.h*360),i=Math.round(e.s*100),a=Math.round(e.l*100);return this.a===1?`hsl(${r}, ${i}%, ${a}%)`:`hsla(${r}, ${i}%, ${a}%, ${this.roundA})`}toHex(e=!1){return Dn(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Mu(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${r}, ${i})`:`rgba(${e}, ${r}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=r=>`${Math.round(ae(r,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=r=>Math.round(ae(r,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...In(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:r,y:i,k:a}=In(this.r,this.g,this.b);return`cmyk(${e}, ${r}, ${i}, ${a})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Dn(this.r,this.g,this.b,!1);for(const[r,i]of Object.entries(Ss))if(e===i)return r;return!1}toString(e){const r=!!e;e=e??this.format;let i=!1;const a=this.a<1&&this.a>=0;return!r&&a&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new qt(this.toString())}lighten(e=10){const r=this.toHsl();return r.l+=e/100,r.l=Ha(r.l),new qt(r)}brighten(e=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(e/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(e/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(e/100)))),new qt(r)}darken(e=10){const r=this.toHsl();return r.l-=e/100,r.l=Ha(r.l),new qt(r)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const r=this.toHsl();return r.s-=e/100,r.s=Ha(r.s),new qt(r)}saturate(e=10){const r=this.toHsl();return r.s+=e/100,r.s=Ha(r.s),new qt(r)}greyscale(){return this.desaturate(100)}spin(e){const r=this.toHsl(),i=(r.h+e)%360;return r.h=i<0?360+i:i,new qt(r)}mix(e,r=50){const i=this.toRgb(),a=new qt(e).toRgb(),o=r/100,s={r:(a.r-i.r)*o+i.r,g:(a.g-i.g)*o+i.g,b:(a.b-i.b)*o+i.b,a:(a.a-i.a)*o+i.a};return new qt(s)}analogous(e=6,r=30){const i=this.toHsl(),a=360/r,o=[this];for(i.h=(i.h-(a*e>>1)+720)%360;--e;)i.h=(i.h+a)%360,o.push(new qt(i));return o}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new qt(e)}monochromatic(e=6){const r=this.toHsv(),{h:i}=r,{s:a}=r;let{v:o}=r;const s=[],n=1/e;for(;e--;)s.push(new qt({h:i,s:a,v:o})),o=(o+n)%1;return s}splitcomplement(){const e=this.toHsl(),{h:r}=e;return[this,new qt({h:(r+72)%360,s:e.s,l:e.l}),new qt({h:(r+216)%360,s:e.s,l:e.l})]}onBackground(e){const r=this.toRgb(),i=new qt(e).toRgb(),a=r.a+i.a*(1-r.a);return new qt({r:(r.r*r.a+i.r*i.a*(1-r.a))/a,g:(r.g*r.a+i.g*i.a*(1-r.a))/a,b:(r.b*r.a+i.b*i.a*(1-r.a))/a,a})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const r=this.toHsl(),{h:i}=r,a=[this],o=360/e;for(let s=1;s<e;s++)a.push(new qt({h:(i+s*o)%360,s:r.s,l:r.l}));return a}equals(e){const r=new qt(e);return this.format==="cmyk"||r.format==="cmyk"?this.toCmykString()===r.toCmykString():this.toRgbString()===r.toRgbString()}}var ft=class extends Ft{constructor(){super(),this.hasSlotController=new ze(this,"hint","label"),this.isSafeValue=!1,this.localize=new _t(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&vr(this)&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&vr(this)){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{const e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{const r=t.composedPath().some(i=>i instanceof Element&&(i.closest(".color-picker")||i===this.trigger));this&&!r&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const t=[zo()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".slider.alpha"),r=e.querySelector(".slider-handle"),{width:i}=e.getBoundingClientRect();let a=this.value,o=this.value;r.focus(),t.preventDefault(),ya(e,{onMove:s=>{this.alpha=wt(s/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".slider.hue"),r=e.querySelector(".slider-handle"),{width:i}=e.getBoundingClientRect();let a=this.value,o=this.value;r.focus(),t.preventDefault(),ya(e,{onMove:s=>{this.hue=wt(s/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".grid"),r=e.querySelector(".grid-handle"),{width:i,height:a}=e.getBoundingClientRect();let o=this.value,s=this.value;r.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,ya(e,{onMove:(n,l)=>{this.saturation=wt(n/i*100,0,100),this.brightness=wt(100-l/a*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=wt(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=wt(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){const e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=wt(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=wt(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){const e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=wt(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=wt(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=wt(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=wt(this.brightness-e,0,100),this.syncValues()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){const e=t.target,r=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;const e=new qt(t);if(!e.isValid)return null;const r=e.toHsl(),i=e.toRgb(),a=e.toHsv();if(!i||i.r==null||i.g==null||i.b==null)return null;const o={h:r.h||0,s:(r.s||0)*100,l:(r.l||0)*100,a:r.a||0},s=e.toHexString(),n=e.toHex8String(),l={h:a.h||0,s:(a.s||0)*100,v:(a.v||0)*100,a:a.a||0};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a||0,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${(i.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{const r=this.value;this.setColor(e.sRGBHex),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,r,i=100){const a=new qt(`hsva(${t}, ${e}%, ${r}%, ${i/100})`);return a.isValid?a.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){super.willUpdate(t),t.has("value")&&this.handleValueChange(t.get("value")||"",this.value||"")}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(e);r!==null?(this.inputValue=this.value||"",this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){const t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Ws),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){const t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,er(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,er(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),ki(this)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),wr(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await Mt(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await Mt(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const t=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,r=this.label?!0:!!t,i=this.hint?!0:!!e,a=this.saturation,o=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(l=>l.trim()!==""),n=S`
      <div
        part="base"
        class=${ut({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${Vt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${ut({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${Vt({top:`${o}%`,left:`${a}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${at(this.disabled?void 0:"0")}
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
                style=${Vt({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${at(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?S`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${Vt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${Vt({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${at(this.disabled?void 0:"0")}
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
            style=${Vt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.withoutFormatToggle?"":S`
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
            ${this.hasEyeDropper?S`
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

        ${s.length>0?S`
              <div part="swatches" class="swatches">
                ${s.map(l=>{const d=this.parseColor(l);return d?S`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${at(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${l}
                      @click=${()=>this.selectSwatch(l)}
                      @keydown=${u=>!this.disabled&&u.key==="Enter"&&this.setColor(d.hexa)}
                    >
                      <div class="swatch-color" style=${Vt({backgroundColor:d.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return S`
      <div
        class=${ut({container:!0,"form-control":!0,"form-control-has-label":r})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${ut({label:!0,"has-label":r})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${ut({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${Vt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
          class=${ut({"has-slotted":i})}
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
        ${n}
      </wa-popup>
    `}};ft.css=[Tl,me,kr,Iu];ft.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0};c([Q('[part~="base"]')],ft.prototype,"base",2);c([Q('[part~="input"]')],ft.prototype,"input",2);c([Q('[part~="form-control-label"]')],ft.prototype,"triggerLabel",2);c([Q('[part~="form-control-input"]')],ft.prototype,"triggerButton",2);c([Q(".color-popup")],ft.prototype,"popup",2);c([Q('[part~="preview"]')],ft.prototype,"previewButton",2);c([Q('[part~="trigger"]')],ft.prototype,"trigger",2);c([X()],ft.prototype,"hasFocus",2);c([X()],ft.prototype,"isDraggingGridHandle",2);c([X()],ft.prototype,"isEmpty",2);c([X()],ft.prototype,"inputValue",2);c([X()],ft.prototype,"hue",2);c([X()],ft.prototype,"saturation",2);c([X()],ft.prototype,"brightness",2);c([X()],ft.prototype,"alpha",2);c([X()],ft.prototype,"value",1);c([h({attribute:"value",reflect:!0})],ft.prototype,"defaultValue",2);c([h({attribute:"with-label",reflect:!0,type:Boolean})],ft.prototype,"withLabel",2);c([h({attribute:"with-hint",reflect:!0,type:Boolean})],ft.prototype,"withHint",2);c([X()],ft.prototype,"hasEyeDropper",2);c([h()],ft.prototype,"label",2);c([h({attribute:"hint"})],ft.prototype,"hint",2);c([h()],ft.prototype,"format",2);c([h({reflect:!0})],ft.prototype,"size",2);c([h({attribute:"without-format-toggle",type:Boolean})],ft.prototype,"withoutFormatToggle",2);c([h({reflect:!0})],ft.prototype,"name",2);c([h({type:Boolean})],ft.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],ft.prototype,"open",2);c([h({type:Boolean})],ft.prototype,"opacity",2);c([h({type:Boolean})],ft.prototype,"uppercase",2);c([h()],ft.prototype,"swatches",2);c([h({type:Boolean,reflect:!0})],ft.prototype,"required",2);c([_o({passive:!1})],ft.prototype,"handleTouchMove",1);c([tt("format",{waitUntilFirstUpdate:!0})],ft.prototype,"handleFormatChange",1);c([tt("opacity")],ft.prototype,"handleOpacityChange",1);c([tt("value")],ft.prototype,"handleValueChange",1);c([tt("open",{waitUntilFirstUpdate:!0})],ft.prototype,"handleOpenChange",1);ft=c([Z("wa-color-picker")],ft);var Dl=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function Hs(t,e){const r=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!r&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&Gu(e)})}function Gu(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;const r=[...e.elements];if(r.length===1){e.requestSubmit(null);return}const i=r.find(a=>a.type==="submit"&&!a.matches(":disabled"));i&&(["input","button"].includes(i.localName)?e.requestSubmit(i):i.click())}var Xu=J`
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
`;var bt=class extends Ft{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new ze(this,"hint","label"),this.localize=new _t(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,za()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new Dl),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){Hs(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),(t.has("value")||t.has("defaultValue"))&&(this.customStates.set("blank",!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){const a=e??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(t,a,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,r=this.label?!0:!!t,i=this.hint?!0:!!e,a=this.withClear&&!this.disabled&&!this.readonly,o=this.hasUpdated&&a&&(typeof this.value=="number"||this.value&&this.value.length>0);return S`
      <label
        part="form-control-label label"
        class=${ut({label:!0,"has-label":r})}
        for="input"
        aria-hidden=${r?"false":"true"}
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
          name=${at(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${at(this.placeholder)}
          minlength=${at(this.minlength)}
          maxlength=${at(this.maxlength)}
          min=${at(this.min)}
          max=${at(this.max)}
          step=${at(this.step)}
          .value=${ui(this.value??"")}
          autocapitalize=${at(this.autocapitalize)}
          autocomplete=${at(this.autocomplete)}
          autocorrect=${at(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${at(this.pattern)}
          enterkeyhint=${at(this.enterkeyhint)}
          inputmode=${at(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${o?S`
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
        ${this.passwordToggle&&!this.disabled?S`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?S`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:S`
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
        class=${ut({"has-slotted":i})}
        aria-hidden=${i?"false":"true"}
        >${this.hint}</slot
      >
    `}};bt.css=[me,kr,Xu];bt.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0};c([Q("input")],bt.prototype,"input",2);c([h()],bt.prototype,"title",2);c([h({reflect:!0})],bt.prototype,"type",2);c([X()],bt.prototype,"value",1);c([h({attribute:"value",reflect:!0})],bt.prototype,"defaultValue",2);c([h({reflect:!0})],bt.prototype,"size",2);c([h({reflect:!0})],bt.prototype,"appearance",2);c([h({type:Boolean,reflect:!0})],bt.prototype,"pill",2);c([h()],bt.prototype,"label",2);c([h({attribute:"hint"})],bt.prototype,"hint",2);c([h({attribute:"with-clear",type:Boolean})],bt.prototype,"withClear",2);c([h()],bt.prototype,"placeholder",2);c([h({type:Boolean,reflect:!0})],bt.prototype,"readonly",2);c([h({attribute:"password-toggle",type:Boolean})],bt.prototype,"passwordToggle",2);c([h({attribute:"password-visible",type:Boolean})],bt.prototype,"passwordVisible",2);c([h({attribute:"without-spin-buttons",type:Boolean})],bt.prototype,"withoutSpinButtons",2);c([h({type:Boolean,reflect:!0})],bt.prototype,"required",2);c([h()],bt.prototype,"pattern",2);c([h({type:Number})],bt.prototype,"minlength",2);c([h({type:Number})],bt.prototype,"maxlength",2);c([h()],bt.prototype,"min",2);c([h()],bt.prototype,"max",2);c([h()],bt.prototype,"step",2);c([h()],bt.prototype,"autocapitalize",2);c([h()],bt.prototype,"autocorrect",2);c([h()],bt.prototype,"autocomplete",2);c([h({type:Boolean})],bt.prototype,"autofocus",2);c([h()],bt.prototype,"enterkeyhint",2);c([h({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],bt.prototype,"spellcheck",2);c([h()],bt.prototype,"inputmode",2);c([h({attribute:"with-label",type:Boolean})],bt.prototype,"withLabel",2);c([h({attribute:"with-hint",type:Boolean})],bt.prototype,"withHint",2);c([tt("step",{waitUntilFirstUpdate:!0})],bt.prototype,"handleStepChange",1);bt=c([Z("wa-input")],bt);var Il=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var Zu=J`
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
`;const jr=Math.min,Oe=Math.max,lo=Math.round,Ga=Math.floor,mr=t=>({x:t,y:t}),Yu={left:"right",right:"left",bottom:"top",top:"bottom"};function Es(t,e,r){return Oe(t,jr(e,r))}function Zi(t,e){return typeof t=="function"?t(e):t}function Kr(t){return t.split("-")[0]}function Yi(t){return t.split("-")[1]}function Ol(t){return t==="x"?"y":"x"}function js(t){return t==="y"?"height":"width"}function $r(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function Ks(t){return Ol($r(t))}function Qu(t,e,r){r===void 0&&(r=!1);const i=Yi(t),a=Ks(t),o=js(a);let s=a==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=co(s)),[s,co(s)]}function Ju(t){const e=co(t);return[_s(t),e,_s(e)]}function _s(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Pn=["left","right"],Fn=["right","left"],tp=["top","bottom"],ep=["bottom","top"];function rp(t,e,r){switch(t){case"top":case"bottom":return r?e?Fn:Pn:e?Pn:Fn;case"left":case"right":return e?tp:ep;default:return[]}}function ip(t,e,r,i){const a=Yi(t);let o=rp(Kr(t),r==="start",i);return a&&(o=o.map(s=>s+"-"+a),e&&(o=o.concat(o.map(_s)))),o}function co(t){const e=Kr(t);return Yu[e]+t.slice(e.length)}function ap(t){return{top:0,right:0,bottom:0,left:0,...t}}function Pl(t){return typeof t!="number"?ap(t):{top:t,right:t,bottom:t,left:t}}function ho(t){const{x:e,y:r,width:i,height:a}=t;return{width:i,height:a,top:r,left:e,right:e+i,bottom:r+a,x:e,y:r}}function Nn(t,e,r){let{reference:i,floating:a}=t;const o=$r(e),s=Ks(e),n=js(s),l=Kr(e),d=o==="y",u=i.x+i.width/2-a.width/2,m=i.y+i.height/2-a.height/2,b=i[n]/2-a[n]/2;let p;switch(l){case"top":p={x:u,y:i.y-a.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:m};break;case"left":p={x:i.x-a.width,y:m};break;default:p={x:i.x,y:i.y}}switch(Yi(e)){case"start":p[s]-=b*(r&&d?-1:1);break;case"end":p[s]+=b*(r&&d?-1:1);break}return p}async function op(t,e){var r;e===void 0&&(e={});const{x:i,y:a,platform:o,rects:s,elements:n,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:b=!1,padding:p=0}=Zi(e,t),v=Pl(p),x=n[b?m==="floating"?"reference":"floating":m],y=ho(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(x)))==null||r?x:x.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(n.floating)),boundary:d,rootBoundary:u,strategy:l})),k=m==="floating"?{x:i,y:a,width:s.floating.width,height:s.floating.height}:s.reference,_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(n.floating)),z=await(o.isElement==null?void 0:o.isElement(_))?await(o.getScale==null?void 0:o.getScale(_))||{x:1,y:1}:{x:1,y:1},L=ho(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:k,offsetParent:_,strategy:l}):k);return{top:(y.top-L.top+v.top)/z.y,bottom:(L.bottom-y.bottom+v.bottom)/z.y,left:(y.left-L.left+v.left)/z.x,right:(L.right-y.right+v.right)/z.x}}const sp=50,np=async(t,e,r)=>{const{placement:i="bottom",strategy:a="absolute",middleware:o=[],platform:s}=r,n=s.detectOverflow?s:{...s,detectOverflow:op},l=await(s.isRTL==null?void 0:s.isRTL(e));let d=await s.getElementRects({reference:t,floating:e,strategy:a}),{x:u,y:m}=Nn(d,i,l),b=i,p=0;const v={};for(let w=0;w<o.length;w++){const x=o[w];if(!x)continue;const{name:y,fn:k}=x,{x:_,y:z,data:L,reset:P}=await k({x:u,y:m,initialPlacement:i,placement:b,strategy:a,middlewareData:v,rects:d,platform:n,elements:{reference:t,floating:e}});u=_??u,m=z??m,v[y]={...v[y],...L},P&&p<sp&&(p++,typeof P=="object"&&(P.placement&&(b=P.placement),P.rects&&(d=P.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:a}):P.rects),{x:u,y:m}=Nn(d,b,l)),w=-1)}return{x:u,y:m,placement:b,strategy:a,middlewareData:v}},lp=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:i,placement:a,rects:o,platform:s,elements:n,middlewareData:l}=e,{element:d,padding:u=0}=Zi(t,e)||{};if(d==null)return{};const m=Pl(u),b={x:r,y:i},p=Ks(a),v=js(p),w=await s.getDimensions(d),x=p==="y",y=x?"top":"left",k=x?"bottom":"right",_=x?"clientHeight":"clientWidth",z=o.reference[v]+o.reference[p]-b[p]-o.floating[v],L=b[p]-o.reference[p],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d));let D=P?P[_]:0;(!D||!await(s.isElement==null?void 0:s.isElement(P)))&&(D=n.floating[_]||o.floating[v]);const q=z/2-L/2,I=D/2-w[v]/2-1,W=jr(m[y],I),it=jr(m[k],I),$=W,N=D-w[v]-it,g=D/2-w[v]/2+q,B=Es($,g,N),st=!l.arrow&&Yi(a)!=null&&g!==B&&o.reference[v]/2-(g<$?W:it)-w[v]/2<0,U=st?g<$?g-$:g-N:0;return{[p]:b[p]+U,data:{[p]:B,centerOffset:g-B-U,...st&&{alignmentOffset:U}},reset:st}}}),cp=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:a,middlewareData:o,rects:s,initialPlacement:n,platform:l,elements:d}=e,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:w=!0,...x}=Zi(t,e);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const y=Kr(a),k=$r(n),_=Kr(n)===n,z=await(l.isRTL==null?void 0:l.isRTL(d.floating)),L=b||(_||!w?[co(n)]:Ju(n)),P=v!=="none";!b&&P&&L.push(...ip(n,w,v,z));const D=[n,...L],q=await l.detectOverflow(e,x),I=[];let W=((i=o.flip)==null?void 0:i.overflows)||[];if(u&&I.push(q[y]),m){const g=Qu(a,s,z);I.push(q[g[0]],q[g[1]])}if(W=[...W,{placement:a,overflows:I}],!I.every(g=>g<=0)){var it,$;const g=(((it=o.flip)==null?void 0:it.index)||0)+1,B=D[g];if(B&&(!(m==="alignment"?k!==$r(B):!1)||W.every(ct=>$r(ct.placement)===k?ct.overflows[0]>0:!0)))return{data:{index:g,overflows:W},reset:{placement:B}};let st=($=W.filter(U=>U.overflows[0]<=0).sort((U,ct)=>U.overflows[1]-ct.overflows[1])[0])==null?void 0:$.placement;if(!st)switch(p){case"bestFit":{var N;const U=(N=W.filter(ct=>{if(P){const j=$r(ct.placement);return j===k||j==="y"}return!0}).map(ct=>[ct.placement,ct.overflows.filter(j=>j>0).reduce((j,ht)=>j+ht,0)]).sort((ct,j)=>ct[1]-j[1])[0])==null?void 0:N[0];U&&(st=U);break}case"initialPlacement":st=n;break}if(a!==st)return{reset:{placement:st}}}return{}}}},dp=new Set(["left","top"]);async function hp(t,e){const{placement:r,platform:i,elements:a}=t,o=await(i.isRTL==null?void 0:i.isRTL(a.floating)),s=Kr(r),n=Yi(r),l=$r(r)==="y",d=dp.has(s)?-1:1,u=o&&l?-1:1,m=Zi(e,t);let{mainAxis:b,crossAxis:p,alignmentAxis:v}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return n&&typeof v=="number"&&(p=n==="end"?v*-1:v),l?{x:p*u,y:b*d}:{x:b*d,y:p*u}}const up=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:a,y:o,placement:s,middlewareData:n}=e,l=await hp(e,t);return s===((r=n.offset)==null?void 0:r.placement)&&(i=n.arrow)!=null&&i.alignmentOffset?{}:{x:a+l.x,y:o+l.y,data:{...l,placement:s}}}}},pp=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:a,platform:o}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:l={fn:y=>{let{x:k,y:_}=y;return{x:k,y:_}}},...d}=Zi(t,e),u={x:r,y:i},m=await o.detectOverflow(e,d),b=$r(Kr(a)),p=Ol(b);let v=u[p],w=u[b];if(s){const y=p==="y"?"top":"left",k=p==="y"?"bottom":"right",_=v+m[y],z=v-m[k];v=Es(_,v,z)}if(n){const y=b==="y"?"top":"left",k=b==="y"?"bottom":"right",_=w+m[y],z=w-m[k];w=Es(_,w,z)}const x=l.fn({...e,[p]:v,[b]:w});return{...x,data:{x:x.x-r,y:x.y-i,enabled:{[p]:s,[b]:n}}}}}},fp=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,i;const{placement:a,rects:o,platform:s,elements:n}=e,{apply:l=()=>{},...d}=Zi(t,e),u=await s.detectOverflow(e,d),m=Kr(a),b=Yi(a),p=$r(a)==="y",{width:v,height:w}=o.floating;let x,y;m==="top"||m==="bottom"?(x=m,y=b===(await(s.isRTL==null?void 0:s.isRTL(n.floating))?"start":"end")?"left":"right"):(y=m,x=b==="end"?"top":"bottom");const k=w-u.top-u.bottom,_=v-u.left-u.right,z=jr(w-u[x],k),L=jr(v-u[y],_),P=!e.middlewareData.shift;let D=z,q=L;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(q=_),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(D=k),P&&!b){const W=Oe(u.left,0),it=Oe(u.right,0),$=Oe(u.top,0),N=Oe(u.bottom,0);p?q=v-2*(W!==0||it!==0?W+it:Oe(u.left,u.right)):D=w-2*($!==0||N!==0?$+N:Oe(u.top,u.bottom))}await l({...e,availableWidth:q,availableHeight:D});const I=await s.getDimensions(n.floating);return v!==I.width||w!==I.height?{reset:{rects:!0}}:{}}}};function Ao(){return typeof window<"u"}function Qi(t){return Fl(t)?(t.nodeName||"").toLowerCase():"#document"}function Fe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Cr(t){var e;return(e=(Fl(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Fl(t){return Ao()?t instanceof Node||t instanceof Fe(t).Node:!1}function rr(t){return Ao()?t instanceof Element||t instanceof Fe(t).Element:!1}function Or(t){return Ao()?t instanceof HTMLElement||t instanceof Fe(t).HTMLElement:!1}function Bn(t){return!Ao()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Fe(t).ShadowRoot}function Aa(t){const{overflow:e,overflowX:r,overflowY:i,display:a}=ir(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&a!=="inline"&&a!=="contents"}function mp(t){return/^(table|td|th)$/.test(Qi(t))}function To(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const gp=/transform|translate|scale|rotate|perspective|filter/,bp=/paint|layout|strict|content/,oi=t=>!!t&&t!=="none";let rs;function Ro(t){const e=rr(t)?ir(t):t;return oi(e.transform)||oi(e.translate)||oi(e.scale)||oi(e.rotate)||oi(e.perspective)||!Gs()&&(oi(e.backdropFilter)||oi(e.filter))||gp.test(e.willChange||"")||bp.test(e.contain||"")}function wp(t){let e=Gr(t);for(;Or(e)&&!Bi(e);){if(Ro(e))return e;if(To(e))return null;e=Gr(e)}return null}function Gs(){return rs==null&&(rs=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),rs}function Bi(t){return/^(html|body|#document)$/.test(Qi(t))}function ir(t){return Fe(t).getComputedStyle(t)}function Do(t){return rr(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Gr(t){if(Qi(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Bn(t)&&t.host||Cr(t);return Bn(e)?e.host:e}function Nl(t){const e=Gr(t);return Bi(e)?t.ownerDocument?t.ownerDocument.body:t.body:Or(e)&&Aa(e)?e:Nl(e)}function Mi(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const a=Nl(t),o=a===((i=t.ownerDocument)==null?void 0:i.body),s=Fe(a);if(o){const n=$s(s);return e.concat(s,s.visualViewport||[],Aa(a)?a:[],n&&r?Mi(n):[])}else return e.concat(a,Mi(a,[],r))}function $s(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Bl(t){const e=ir(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const a=Or(t),o=a?t.offsetWidth:r,s=a?t.offsetHeight:i,n=lo(r)!==o||lo(i)!==s;return n&&(r=o,i=s),{width:r,height:i,$:n}}function Xs(t){return rr(t)?t:t.contextElement}function Oi(t){const e=Xs(t);if(!Or(e))return mr(1);const r=e.getBoundingClientRect(),{width:i,height:a,$:o}=Bl(e);let s=(o?lo(r.width):r.width)/i,n=(o?lo(r.height):r.height)/a;return(!s||!Number.isFinite(s))&&(s=1),(!n||!Number.isFinite(n))&&(n=1),{x:s,y:n}}const vp=mr(0);function Ml(t){const e=Fe(t);return!Gs()||!e.visualViewport?vp:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function yp(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Fe(t)?!1:e}function fi(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const a=t.getBoundingClientRect(),o=Xs(t);let s=mr(1);e&&(i?rr(i)&&(s=Oi(i)):s=Oi(t));const n=yp(o,r,i)?Ml(o):mr(0);let l=(a.left+n.x)/s.x,d=(a.top+n.y)/s.y,u=a.width/s.x,m=a.height/s.y;if(o){const b=Fe(o),p=i&&rr(i)?Fe(i):i;let v=b,w=$s(v);for(;w&&i&&p!==v;){const x=Oi(w),y=w.getBoundingClientRect(),k=ir(w),_=y.left+(w.clientLeft+parseFloat(k.paddingLeft))*x.x,z=y.top+(w.clientTop+parseFloat(k.paddingTop))*x.y;l*=x.x,d*=x.y,u*=x.x,m*=x.y,l+=_,d+=z,v=Fe(w),w=$s(v)}}return ho({width:u,height:m,x:l,y:d})}function Io(t,e){const r=Do(t).scrollLeft;return e?e.left+r:fi(Cr(t)).left+r}function Ul(t,e){const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-Io(t,r),a=r.top+e.scrollTop;return{x:i,y:a}}function xp(t){let{elements:e,rect:r,offsetParent:i,strategy:a}=t;const o=a==="fixed",s=Cr(i),n=e?To(e.floating):!1;if(i===s||n&&o)return r;let l={scrollLeft:0,scrollTop:0},d=mr(1);const u=mr(0),m=Or(i);if((m||!m&&!o)&&((Qi(i)!=="body"||Aa(s))&&(l=Do(i)),m)){const p=fi(i);d=Oi(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}const b=s&&!m&&!o?Ul(s,l):mr(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-l.scrollLeft*d.x+u.x+b.x,y:r.y*d.y-l.scrollTop*d.y+u.y+b.y}}function kp(t){return Array.from(t.getClientRects())}function Cp(t){const e=Cr(t),r=Do(t),i=t.ownerDocument.body,a=Oe(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=Oe(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-r.scrollLeft+Io(t);const n=-r.scrollTop;return ir(i).direction==="rtl"&&(s+=Oe(e.clientWidth,i.clientWidth)-a),{width:a,height:o,x:s,y:n}}const Mn=25;function Sp(t,e){const r=Fe(t),i=Cr(t),a=r.visualViewport;let o=i.clientWidth,s=i.clientHeight,n=0,l=0;if(a){o=a.width,s=a.height;const u=Gs();(!u||u&&e==="fixed")&&(n=a.offsetLeft,l=a.offsetTop)}const d=Io(i);if(d<=0){const u=i.ownerDocument,m=u.body,b=getComputedStyle(m),p=u.compatMode==="CSS1Compat"&&parseFloat(b.marginLeft)+parseFloat(b.marginRight)||0,v=Math.abs(i.clientWidth-m.clientWidth-p);v<=Mn&&(o-=v)}else d<=Mn&&(o+=d);return{width:o,height:s,x:n,y:l}}function Ep(t,e){const r=fi(t,!0,e==="fixed"),i=r.top+t.clientTop,a=r.left+t.clientLeft,o=Or(t)?Oi(t):mr(1),s=t.clientWidth*o.x,n=t.clientHeight*o.y,l=a*o.x,d=i*o.y;return{width:s,height:n,x:l,y:d}}function Un(t,e,r){let i;if(e==="viewport")i=Sp(t,r);else if(e==="document")i=Cp(Cr(t));else if(rr(e))i=Ep(e,r);else{const a=Ml(t);i={x:e.x-a.x,y:e.y-a.y,width:e.width,height:e.height}}return ho(i)}function Vl(t,e){const r=Gr(t);return r===e||!rr(r)||Bi(r)?!1:ir(r).position==="fixed"||Vl(r,e)}function _p(t,e){const r=e.get(t);if(r)return r;let i=Mi(t,[],!1).filter(n=>rr(n)&&Qi(n)!=="body"),a=null;const o=ir(t).position==="fixed";let s=o?Gr(t):t;for(;rr(s)&&!Bi(s);){const n=ir(s),l=Ro(s);!l&&n.position==="fixed"&&(a=null),(o?!l&&!a:!l&&n.position==="static"&&!!a&&(a.position==="absolute"||a.position==="fixed")||Aa(s)&&!l&&Vl(t,s))?i=i.filter(u=>u!==s):a=n,s=Gr(s)}return e.set(t,i),i}function $p(t){let{element:e,boundary:r,rootBoundary:i,strategy:a}=t;const s=[...r==="clippingAncestors"?To(e)?[]:_p(e,this._c):[].concat(r),i],n=Un(e,s[0],a);let l=n.top,d=n.right,u=n.bottom,m=n.left;for(let b=1;b<s.length;b++){const p=Un(e,s[b],a);l=Oe(p.top,l),d=jr(p.right,d),u=jr(p.bottom,u),m=Oe(p.left,m)}return{width:d-m,height:u-l,x:m,y:l}}function Lp(t){const{width:e,height:r}=Bl(t);return{width:e,height:r}}function zp(t,e,r){const i=Or(e),a=Cr(e),o=r==="fixed",s=fi(t,!0,o,e);let n={scrollLeft:0,scrollTop:0};const l=mr(0);function d(){l.x=Io(a)}if(i||!i&&!o)if((Qi(e)!=="body"||Aa(a))&&(n=Do(e)),i){const p=fi(e,!0,o,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else a&&d();o&&!i&&a&&d();const u=a&&!i&&!o?Ul(a,n):mr(0),m=s.left+n.scrollLeft-l.x-u.x,b=s.top+n.scrollTop-l.y-u.y;return{x:m,y:b,width:s.width,height:s.height}}function is(t){return ir(t).position==="static"}function Vn(t,e){if(!Or(t)||ir(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Cr(t)===r&&(r=r.ownerDocument.body),r}function ql(t,e){const r=Fe(t);if(To(t))return r;if(!Or(t)){let a=Gr(t);for(;a&&!Bi(a);){if(rr(a)&&!is(a))return a;a=Gr(a)}return r}let i=Vn(t,e);for(;i&&mp(i)&&is(i);)i=Vn(i,e);return i&&Bi(i)&&is(i)&&!Ro(i)?r:i||wp(t)||r}const Ap=async function(t){const e=this.getOffsetParent||ql,r=this.getDimensions,i=await r(t.floating);return{reference:zp(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Tp(t){return ir(t).direction==="rtl"}const to={convertOffsetParentRelativeRectToViewportRelativeRect:xp,getDocumentElement:Cr,getClippingRect:$p,getOffsetParent:ql,getElementRects:Ap,getClientRects:kp,getDimensions:Lp,getScale:Oi,isElement:rr,isRTL:Tp};function Wl(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Rp(t,e){let r=null,i;const a=Cr(t);function o(){var n;clearTimeout(i),(n=r)==null||n.disconnect(),r=null}function s(n,l){n===void 0&&(n=!1),l===void 0&&(l=1),o();const d=t.getBoundingClientRect(),{left:u,top:m,width:b,height:p}=d;if(n||e(),!b||!p)return;const v=Ga(m),w=Ga(a.clientWidth-(u+b)),x=Ga(a.clientHeight-(m+p)),y=Ga(u),_={rootMargin:-v+"px "+-w+"px "+-x+"px "+-y+"px",threshold:Oe(0,jr(1,l))||1};let z=!0;function L(P){const D=P[0].intersectionRatio;if(D!==l){if(!z)return s();D?s(!1,D):i=setTimeout(()=>{s(!1,1e-7)},1e3)}D===1&&!Wl(d,t.getBoundingClientRect())&&s(),z=!1}try{r=new IntersectionObserver(L,{..._,root:a.ownerDocument})}catch{r=new IntersectionObserver(L,_)}r.observe(t)}return s(!0),o}function Hl(t,e,r,i){i===void 0&&(i={});const{ancestorScroll:a=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,d=Xs(t),u=a||o?[...d?Mi(d):[],...e?Mi(e):[]]:[];u.forEach(y=>{a&&y.addEventListener("scroll",r,{passive:!0}),o&&y.addEventListener("resize",r)});const m=d&&n?Rp(d,r):null;let b=-1,p=null;s&&(p=new ResizeObserver(y=>{let[k]=y;k&&k.target===d&&p&&e&&(p.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var _;(_=p)==null||_.observe(e)})),r()}),d&&!l&&p.observe(d),e&&p.observe(e));let v,w=l?fi(t):null;l&&x();function x(){const y=fi(t);w&&!Wl(w,y)&&r(),w=y,v=requestAnimationFrame(x)}return r(),()=>{var y;u.forEach(k=>{a&&k.removeEventListener("scroll",r),o&&k.removeEventListener("resize",r)}),m?.(),(y=p)==null||y.disconnect(),p=null,l&&cancelAnimationFrame(v)}}const jl=up,Kl=pp,Gl=cp,qn=fp,Dp=lp,Xl=(t,e,r)=>{const i=new Map,a={platform:to,...r},o={...a.platform,_c:i};return np(t,e,{...a,platform:o})};function Ip(t){return Op(t)}function as(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Op(t){for(let e=t;e;e=as(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=as(t);e;e=as(e)){if(!(e instanceof Element))continue;const r=getComputedStyle(e);if(r.display!=="contents"&&(r.position!=="static"||Ro(r)||e.tagName==="BODY"))return e}return null}function Wn(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var Xa=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),Dt=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let i=0,a=0,o=0,s=0,n=0,l=0,d=0,u=0;r?t.top<e.top?(i=t.left,a=t.bottom,o=t.right,s=t.bottom,n=e.left,l=e.top,d=e.right,u=e.top):(i=e.left,a=e.bottom,o=e.right,s=e.bottom,n=t.left,l=t.top,d=t.right,u=t.top):t.left<e.left?(i=t.right,a=t.top,o=e.left,s=e.top,n=t.right,l=t.bottom,d=e.left,u=e.bottom):(i=e.right,a=e.top,o=t.left,s=t.top,n=e.right,l=e.bottom,d=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${a}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Wn(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Hl(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;const t=[jl({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(qn({apply:({rects:i})=>{const a=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;Xa&&!Wn(this.anchor)&&this.boundary==="scroll"&&(e=Mi(this.anchorEl).filter(i=>i instanceof Element)),this.flip&&t.push(Gl({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Kl({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(qn({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Dp({element:this.arrowEl,padding:this.arrowPadding}));const r=Xa?i=>to.getOffsetParent(i,Ip):to.getOffsetParent;Xl(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:Xa?"absolute":"fixed",platform:{...to,getOffsetParent:r}}).then(({x:i,y:a,middlewareData:o,placement:s})=>{const n=this.localize.dir()==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${i}px`,top:`${a}px`}),this.arrow){const d=o.arrow.x,u=o.arrow.y;let m="",b="",p="",v="";if(this.arrowPlacement==="start"){const w=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",b=n?w:"",v=n?"":w}else if(this.arrowPlacement==="end"){const w=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=n?"":w,v=n?w:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof d=="number"?`${d}px`:"",m=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:m,right:b,bottom:p,left:v,[l]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Il)}render(){return S`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ut({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${ut({popup:!0,"popup-active":this.active,"popup-fixed":!Xa,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?S`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};Dt.css=Zu;c([Q(".popup")],Dt.prototype,"popup",2);c([Q(".arrow")],Dt.prototype,"arrowEl",2);c([h()],Dt.prototype,"anchor",2);c([h({type:Boolean,reflect:!0})],Dt.prototype,"active",2);c([h({reflect:!0})],Dt.prototype,"placement",2);c([h()],Dt.prototype,"boundary",2);c([h({type:Number})],Dt.prototype,"distance",2);c([h({type:Number})],Dt.prototype,"skidding",2);c([h({type:Boolean})],Dt.prototype,"arrow",2);c([h({attribute:"arrow-placement"})],Dt.prototype,"arrowPlacement",2);c([h({attribute:"arrow-padding",type:Number})],Dt.prototype,"arrowPadding",2);c([h({type:Boolean})],Dt.prototype,"flip",2);c([h({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],Dt.prototype,"flipFallbackPlacements",2);c([h({attribute:"flip-fallback-strategy"})],Dt.prototype,"flipFallbackStrategy",2);c([h({type:Object})],Dt.prototype,"flipBoundary",2);c([h({attribute:"flip-padding",type:Number})],Dt.prototype,"flipPadding",2);c([h({type:Boolean})],Dt.prototype,"shift",2);c([h({type:Object})],Dt.prototype,"shiftBoundary",2);c([h({attribute:"shift-padding",type:Number})],Dt.prototype,"shiftPadding",2);c([h({attribute:"auto-size"})],Dt.prototype,"autoSize",2);c([h()],Dt.prototype,"sync",2);c([h({type:Object})],Dt.prototype,"autoSizeBoundary",2);c([h({attribute:"auto-size-padding",type:Number})],Dt.prototype,"autoSizePadding",2);c([h({attribute:"hover-bridge",type:Boolean})],Dt.prototype,"hoverBridge",2);Dt=c([Z("wa-popup")],Dt);var Pp=J`
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
`;var Ui=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.position=50}handleDrag(t){const{width:e}=this.getBoundingClientRect(),r=this.localize.dir()==="rtl";t.preventDefault(),ya(this,{onMove:i=>{this.customStates.set("dragging",!0),this.position=parseFloat(wt(i/e*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:t})}handleKeyDown(t){const e=this.matches(":dir(ltr)"),r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let a=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight")&&(a-=i),(e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft")&&(a+=i),t.key==="Home"&&(a=0),t.key==="End"&&(a=100),a=wt(a,0,100),this.position=a}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return S`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${Vt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${Vt({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};Ui.css=Pp;c([Q(".handle")],Ui.prototype,"handle",2);c([h({type:Number,reflect:!0})],Ui.prototype,"position",2);c([tt("position",{waitUntilFirstUpdate:!0})],Ui.prototype,"handlePositionChange",1);Ui=c([Z("wa-comparison")],Ui);var Fp=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Np=J`
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
`;var se=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),r=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let a=this.from,o="";r?[a,o]=this.from.trim().split("."):i&&([a,o]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in e?e.getElementById(a):null;s?i?t=s.getAttribute(o)||"":r?t=s[o]||"":t=s.textContent||"":(this.showStatus("error"),this.dispatchEvent(new Ii))}if(!t)this.showStatus("error"),this.dispatchEvent(new Ii);else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new Fp({value:t}))}catch{this.showStatus("error"),this.dispatchEvent(new Ii)}}async showStatus(t){const e=t==="success"?this.successIcon:this.errorIcon;await Mt(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=t,e.hidden=!1,await Mt(e,"show"),setTimeout(async()=>{await Mt(e,"hide"),e.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await Mt(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return S`
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
          class=${ut({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
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
    `}};se.css=[Tl,Np];c([Q('slot[name="copy-icon"]')],se.prototype,"copyIcon",2);c([Q('slot[name="success-icon"]')],se.prototype,"successIcon",2);c([Q('slot[name="error-icon"]')],se.prototype,"errorIcon",2);c([Q("wa-tooltip")],se.prototype,"tooltip",2);c([X()],se.prototype,"isCopying",2);c([X()],se.prototype,"status",2);c([h()],se.prototype,"value",2);c([h()],se.prototype,"from",2);c([h({type:Boolean,reflect:!0})],se.prototype,"disabled",2);c([h({attribute:"copy-label"})],se.prototype,"copyLabel",2);c([h({attribute:"success-label"})],se.prototype,"successLabel",2);c([h({attribute:"error-label"})],se.prototype,"errorLabel",2);c([h({attribute:"feedback-duration",type:Number})],se.prototype,"feedbackDuration",2);c([h({attribute:"tooltip-placement"})],se.prototype,"tooltipPlacement",2);se=c([Z("wa-copy-button")],se);var Bp=J`
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
`;var Ci=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Si=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var Ei=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var _i=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var Ht=class extends lt{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&vr(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=!!this.anchor?.matches(":hover"),e=this.matches(":hover");if(t||e)return;clearTimeout(this.hoverTimeout),t||e||(this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay))}}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Lo("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),wr(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){const i=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);i.includes(e)||(i.push(e),t.setAttribute("aria-labelledby",i.join(" ")))}removeFromAriaLabelledBy(t,e){const a=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(o=>o!==e);a.length>0?t.setAttribute("aria-labelledby",a.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const t=new Ci;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),ki(this),this.body.hidden=!1,this.popup.active=!0,await Mt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new _i)}else{const t=new Si;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),wr(this),await Mt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Ei)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,r=this.anchor;if(e===r)return;const{signal:i}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:i}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:i}),e.addEventListener("click",this.handleClick,{signal:i}),e.addEventListener("mouseover",this.handleMouseOver,{signal:i}),e.addEventListener("mouseout",this.handleMouseOut,{signal:i})),r&&(this.removeFromAriaLabelledBy(r,this.id),r.removeEventListener("blur",this.handleBlur,{capture:!0}),r.removeEventListener("focus",this.handleFocus,{capture:!0}),r.removeEventListener("click",this.handleClick),r.removeEventListener("mouseover",this.handleMouseOver),r.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,er(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,er(this,"wa-after-hide")}render(){return S`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ut({tooltip:!0,"tooltip-open":this.open})}
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
    `}};Ht.css=Bp;Ht.dependencies={"wa-popup":Dt};c([Q("slot:not([name])")],Ht.prototype,"defaultSlot",2);c([Q(".body")],Ht.prototype,"body",2);c([Q("wa-popup")],Ht.prototype,"popup",2);c([h()],Ht.prototype,"placement",2);c([h({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);c([h({type:Number})],Ht.prototype,"distance",2);c([h({type:Boolean,reflect:!0})],Ht.prototype,"open",2);c([h({type:Number})],Ht.prototype,"skidding",2);c([h({attribute:"show-delay",type:Number})],Ht.prototype,"showDelay",2);c([h({attribute:"hide-delay",type:Number})],Ht.prototype,"hideDelay",2);c([h()],Ht.prototype,"trigger",2);c([h({attribute:"without-arrow",type:Boolean,reflect:!0})],Ht.prototype,"withoutArrow",2);c([h()],Ht.prototype,"for",2);c([X()],Ht.prototype,"anchor",2);c([tt("open",{waitUntilFirstUpdate:!0})],Ht.prototype,"handleOpenChange",1);c([tt("for")],Ht.prototype,"handleForChange",1);c([tt(["distance","placement","skidding"])],Ht.prototype,"handleOptionsChange",1);c([tt("disabled")],Ht.prototype,"handleDisabledChange",1);Ht=c([Z("wa-tooltip")],Ht);var Mp=J`
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
`;var ve=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;const a=i.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(a)?!0:i instanceof Ft?!("disabled"in i)||!i.disabled:!1})||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(r=>{r!==this&&r.open&&(r.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const t=new Ci;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const e=no(getComputedStyle(this.body).getPropertyValue("--show-duration"));await so(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new _i)}else{const t=new Si;if(this.dispatchEvent(t),t.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const e=no(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await so(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Ei)}}async show(){if(!(this.open||this.disabled))return this.open=!0,er(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,er(this,"wa-after-hide")}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return S`
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
          class=${ut({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};ve.css=Mp;c([Q("details")],ve.prototype,"details",2);c([Q("summary")],ve.prototype,"header",2);c([Q(".body")],ve.prototype,"body",2);c([Q(".expand-icon-slot")],ve.prototype,"expandIconSlot",2);c([X()],ve.prototype,"isAnimating",2);c([h({type:Boolean,reflect:!0})],ve.prototype,"open",2);c([h()],ve.prototype,"summary",2);c([h({reflect:!0})],ve.prototype,"name",2);c([h({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);c([h({reflect:!0})],ve.prototype,"appearance",2);c([h({attribute:"icon-placement",reflect:!0})],ve.prototype,"iconPlacement",2);c([tt("open",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpenChange",1);ve=c([Z("wa-details")],ve);function Up(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Ls=new Set;function Vp(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function qp(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function uo(t){if(Ls.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){const e=Vp()+qp();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),e<2&&(r=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",r),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${e}px`)}}function po(t){Ls.delete(t),Ls.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function zs(t,e,r="vertical",i="smooth"){const a=Up(t,e),o=a.top+e.scrollTop,s=a.left+e.scrollLeft,n=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,d=e.scrollTop,u=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(s<n?e.scrollTo({left:s,behavior:i}):s+t.clientWidth>l&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(o<d?e.scrollTo({top:o,behavior:i}):o+t.clientHeight>u&&e.scrollTo({top:o-e.offsetHeight+t.clientHeight,behavior:i}))}function Oo(t){return t.split(" ").map(e=>e.trim()).filter(e=>e!=="")}var Wp=J`
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
`;var Tr=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.hasSlotController=new ze(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&vr(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),uo(this))}disconnectedCallback(){super.disconnectedCallback(),po(this),this.removeOpenListeners()}async requestClose(t){const e=new Si({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,Mt(this.dialog,"pulse");return}this.removeOpenListeners(),await Mt(this.dialog,"hide"),this.open=!1,this.dialog.close(),po(this);const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.dispatchEvent(new Ei)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),ki(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),wr(this)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&vr(this)&&this.requestClose(this.dialog)}handleDialogClick(t){const r=t.target.closest('[data-dialog="close"]');r&&(t.stopPropagation(),this.requestClose(r))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await Mt(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new Ci;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),uo(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await Mt(this.dialog,"show"),this.dispatchEvent(new _i)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return S`
      <dialog
        part="dialog"
        class=${ut({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?S`
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
                    @click="${r=>this.requestClose(r.target)}"
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

        ${e?S`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Tr.css=Wp;c([Q(".dialog")],Tr.prototype,"dialog",2);c([h({type:Boolean,reflect:!0})],Tr.prototype,"open",2);c([h({reflect:!0})],Tr.prototype,"label",2);c([h({attribute:"without-header",type:Boolean,reflect:!0})],Tr.prototype,"withoutHeader",2);c([h({attribute:"light-dismiss",type:Boolean})],Tr.prototype,"lightDismiss",2);c([tt("open",{waitUntilFirstUpdate:!0})],Tr.prototype,"handleOpenChange",1);Tr=c([Z("wa-dialog")],Tr);document.addEventListener("click",t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[r,i]=Oo(e.getAttribute("data-dialog")||"");if(r==="open"&&i?.length){const o=e.getRootNode().getElementById(i);o?.localName==="wa-dialog"?o.open=!0:console.warn(`A dialog with an ID of "${i}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{});var Hp=J`
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
`;var Ca=class extends lt{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};Ca.css=Hp;c([h({reflect:!0})],Ca.prototype,"orientation",2);c([tt("orientation")],Ca.prototype,"handleVerticalChange",1);Ca=c([Z("wa-divider")],Ca);var jp=J`
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
`;var yr=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.hasSlotController=new ze(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&vr(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),uo(this))}disconnectedCallback(){super.disconnectedCallback(),po(this),this.removeOpenListeners()}async requestClose(t){const e=new Si({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,Mt(this.drawer,"pulse");return}this.removeOpenListeners(),await Mt(this.drawer,"hide"),this.open=!1,this.drawer.close(),po(this);const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.dispatchEvent(new Ei)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),ki(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),wr(this)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&vr(this)&&this.requestClose(this.drawer)}handleDialogClick(t){const r=t.target.closest('[data-drawer="close"]');r&&(t.stopPropagation(),this.requestClose(r))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await Mt(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const t=new Ci;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),uo(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.drawer.focus()}),await Mt(this.drawer,"show"),this.dispatchEvent(new _i)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return S`
      <dialog
        part="dialog"
        class=${ut({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?S`
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
                    @click="${r=>this.requestClose(r.target)}"
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

        ${e?S`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};yr.css=jp;c([Q(".drawer")],yr.prototype,"drawer",2);c([h({type:Boolean,reflect:!0})],yr.prototype,"open",2);c([h({reflect:!0})],yr.prototype,"label",2);c([h({reflect:!0})],yr.prototype,"placement",2);c([h({attribute:"without-header",type:Boolean,reflect:!0})],yr.prototype,"withoutHeader",2);c([h({attribute:"light-dismiss",type:Boolean})],yr.prototype,"lightDismiss",2);c([tt("open",{waitUntilFirstUpdate:!0})],yr.prototype,"handleOpenChange",1);yr=c([Z("wa-drawer")],yr);document.addEventListener("click",t=>{const e=t.target.closest("[data-drawer]");if(e instanceof Element){const[r,i]=Oo(e.getAttribute("data-drawer")||"");if(r==="open"&&i?.length){const o=e.getRootNode().getElementById(i);o?.localName==="wa-drawer"?o.open=!0:console.warn(`A drawer with an ID of "${i}" could not be found in this document.`)}}}),document.body.addEventListener("pointerdown",()=>{});var Kp=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var Gp=J`
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
`;function*Zl(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Zl(t.shadowRoot.activeElement)))}var os=new Set,Ce=class extends lt{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new _t(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{const e=this.localize.dir()==="rtl";if(t.key==="Escape"&&this.open&&vr(this)){const u=this.getTrigger();t.preventDefault(),t.stopPropagation(),this.open=!1,u?.focus({preventScroll:!0});return}const r=[...Zl()].find(u=>u.localName==="wa-dropdown-item"),i=r?.localName==="wa-dropdown-item",a=this.getCurrentSubmenuItem(),o=!!a;let s,n,l;o?(s=this.getSubmenuItems(a),n=s.find(u=>u.active||u===r),l=n?s.indexOf(n):-1):(s=this.getItems(),n=s.find(u=>u.active||u===r),l=n?s.indexOf(n):-1);let d;if(t.key==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),l>0?d=s[l-1]:d=s[s.length-1]),t.key==="ArrowDown"&&(t.preventDefault(),t.stopPropagation(),l!==-1&&l<s.length-1?d=s[l+1]:d=s[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&i&&n&&n.hasSubmenu){t.preventDefault(),t.stopPropagation(),n.submenuOpen=!0,this.addToSubmenuStack(n),setTimeout(()=>{const u=this.getSubmenuItems(n);u.length>0&&(u.forEach((m,b)=>m.active=b===0),u[0].focus({preventScroll:!0}))},0);return}if(t.key===(e?"ArrowRight":"ArrowLeft")&&o){t.preventDefault(),t.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus({preventScroll:!0}),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(b=>{b!==u&&(b.active=!1)})},0));return}if((t.key==="Home"||t.key==="End")&&(t.preventDefault(),t.stopPropagation(),d=t.key==="Home"?s[0]:s[s.length-1]),t.key==="Tab"&&await this.hideMenu(),t.key.length===1&&!(t.metaKey||t.ctrlKey||t.altKey)&&!(t.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=t.key,s.some(u=>{const m=(u.textContent||"").trim().toLowerCase(),b=this.userTypedQuery.trim().toLowerCase();return m.startsWith(b)?(d=u,!0):!1})),d){t.preventDefault(),t.stopPropagation(),s.forEach(u=>u.active=u===d),d.focus({preventScroll:!0});return}(t.key==="Enter"||t.key===" "&&this.userTypedQuery==="")&&i&&n&&(t.preventDefault(),t.stopPropagation(),n.hasSubmenu?(n.submenuOpen=!0,this.addToSubmenuStack(n),setTimeout(()=>{const u=this.getSubmenuItems(n);u.length>0&&(u.forEach((m,b)=>m.active=b===0),u[0].focus({preventScroll:!0}))},0)):this.makeSelection(n))},this.handleDocumentPointerDown=t=>{t.composedPath().some(i=>i instanceof HTMLElement?i===this||i.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=t=>{const e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;const r=e.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl",a=i?r.right:r.left,o=i?Math.max(t.clientX,a):Math.min(t.clientX,a),s=Math.max(r.top,Math.min(t.clientY,r.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${o}px`),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${s}px`);const n=t.composedPath(),l=e.matches(":hover"),d=!!e.submenuElement?.matches(":hover"),u=l||!!n.find(b=>b===e),m=d||!!n.find(b=>b instanceof HTMLElement&&b.closest('[part="submenu"]')===e.submenuElement);!u&&!m&&setTimeout(()=>{!l&&!d&&(e.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(t=>t()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),wr(this)}firstUpdated(){this.syncAriaAttributes()}async updated(t){if(t.has("open")){const e=t.get("open");if(e===this.open||e===void 0&&this.open===!1)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}t.has("size")&&this.syncItemSizes()}getItems(t=!1){const e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(r=>r.localName==="wa-dropdown-item");return t?e:e.filter(r=>!r.disabled)}getSubmenuItems(t,e=!1){const r=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!r)return[];const i=r.assignedElements({flatten:!0}).filter(a=>a.localName==="wa-dropdown-item");return e?i:i.filter(a=>!a.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName==="wa-dropdown-item").forEach(e=>e.size=this.size)}addToSubmenuStack(t){const e=this.openSubmenuStack.indexOf(t);e!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(t){const e=t.closest('wa-dropdown-item:not([slot="submenu"])');let r;e?r=this.getSubmenuItems(e,!0):r=this.getItems(!0),r.forEach(i=>{i!==t&&i.submenuOpen&&(i.submenuOpen=!1)}),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;const e=new Ci;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;os.forEach(i=>i.open=!1),this.popup.active=!0,this.open=!0,os.add(this),ki(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await Mt(this.menu,"show");const r=this.getItems();r.length>0&&(r.forEach((i,a)=>i.active=a===0),r[0].focus({preventScroll:!0})),this.dispatchEvent(new _i)}async hideMenu(){if(!this.popup||!this.menu)return;const t=new Si({source:this});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}this.open=!1,os.delete(this),wr(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await Mt(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Ei)}handleMenuClick(t){const e=t.target.closest("wa-dropdown-item");if(!(!e||e.disabled)){if(e.hasSubmenu){e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),t.stopPropagation();return}this.makeSelection(e)}}async handleMenuSlotChange(){const t=this.getItems(!0);await Promise.all(t.map(i=>i.updateComplete)),this.syncItemSizes();const e=t.some(i=>i.type==="checkbox"),r=t.some(i=>i.hasSubmenu);t.forEach((i,a)=>{i.active=a===0,i.checkboxAdjacent=e,i.submenuAdjacent=r})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){const e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);const e=Hl(t,t.submenuElement,()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)});this.submenuCleanups.set(t,e);const r=t.submenuElement.querySelector('slot[name="submenu"]');r&&(r.removeEventListener("slotchange",Ce.handleSubmenuSlotChange),r.addEventListener("slotchange",Ce.handleSubmenuSlotChange),Ce.handleSubmenuSlotChange({target:r}))}static handleSubmenuSlotChange(t){const e=t.target;if(!e)return;const r=e.assignedElements().filter(o=>o.localName==="wa-dropdown-item");if(r.length===0)return;const i=r.some(o=>o.hasSubmenu),a=r.some(o=>o.type==="checkbox");r.forEach(o=>{o.submenuAdjacent=i,o.checkboxAdjacent=a})}processSubmenuItems(t){if(!t.submenuElement)return;const e=this.getSubmenuItems(t,!0),r=e.some(i=>i.hasSubmenu);e.forEach(i=>{i.submenuAdjacent=r})}cleanupSubmenuPosition(t){const e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;const r=this.localize.dir()==="rtl"?"left-start":"right-start";Xl(t,t.submenuElement,{placement:r,middleware:[jl({mainAxis:0,crossAxis:-5}),Gl({fallbackStrategy:"bestFit"}),Kl({padding:8})]}).then(({x:i,y:a,placement:o})=>{t.submenuElement.setAttribute("data-placement",o),Object.assign(t.submenuElement.style,{left:`${i}px`,top:`${a}px`})})}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){t.submenuElement.style.setProperty("--safe-triangle-visible","none");return}t.submenuElement.style.setProperty("--safe-triangle-visible","block");const r=t.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${i?r.right:r.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${r.top}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${i?r.right:r.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${r.bottom}px`)}makeSelection(t){const e=this.getTrigger();if(t.disabled)return;t.type==="checkbox"&&(t.checked=!t.checked);const r=new Kp({item:t});this.dispatchEvent(r),r.defaultPrevented||(this.open=!1,e?.focus({preventScroll:!0}))}async syncAriaAttributes(){const t=this.getTrigger();let e;t&&(t.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",Lo("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false"))}render(){let t=this.hasUpdated?this.popup?.active:this.open;return S`
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
    `}};Ce.css=[me,Gp];c([Q("slot:not([name])")],Ce.prototype,"defaultSlot",2);c([Q("#menu")],Ce.prototype,"menu",2);c([Q("wa-popup")],Ce.prototype,"popup",2);c([h({type:Boolean,reflect:!0})],Ce.prototype,"open",2);c([h({reflect:!0})],Ce.prototype,"size",2);c([h({reflect:!0})],Ce.prototype,"placement",2);c([h({type:Number})],Ce.prototype,"distance",2);c([h({type:Number})],Ce.prototype,"skidding",2);Ce=c([Z("wa-dropdown")],Ce);var Xp=J`
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
`;var ye=class extends lt{constructor(){super(...arguments),this.hasSlotController=new ze(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))},this.handleClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("click",this.handleClick,{capture:!0}),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("click",this.handleClick,{capture:!0}),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled),this.style.pointerEvents=this.disabled?"none":""),t.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){const t=this.submenuElement;!this.hasSubmenu||!t||!this.isConnected||(this.notifyParentOfOpening(),t.showPopover?.(),t.hidden=!1,t.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await Mt(t,"show"),setTimeout(()=>{const e=this.getSubmenuItems();e.length>0&&(e.forEach((r,i)=>r.active=i===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){const t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);const e=this.parentElement;e&&[...e.children].filter(i=>i!==this&&i.localName==="wa-dropdown-item"&&i.getAttribute("slot")===this.getAttribute("slot")&&i.submenuOpen).forEach(i=>{i.submenuOpen=!1})}async closeSubmenu(){const t=this.submenuElement;!this.hasSubmenu||!t||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),t.hidden||(await Mt(t,"hide"),t?.isConnected&&(t.hidden=!0,t.removeAttribute("data-visible"),t.hidePopover?.())))}getSubmenuItems(){return[...this.children].filter(t=>t.localName==="wa-dropdown-item"&&t.getAttribute("slot")==="submenu"&&!t.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return S`
      ${this.type==="checkbox"?S`
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

      ${this.hasSubmenu?S`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?S`
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
    `}};ye.css=Xp;c([Q("#submenu")],ye.prototype,"submenuElement",2);c([h({type:Boolean})],ye.prototype,"active",2);c([h({reflect:!0})],ye.prototype,"variant",2);c([h({reflect:!0})],ye.prototype,"size",2);c([h({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],ye.prototype,"checkboxAdjacent",2);c([h({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],ye.prototype,"submenuAdjacent",2);c([h()],ye.prototype,"value",2);c([h({reflect:!0})],ye.prototype,"type",2);c([h({type:Boolean})],ye.prototype,"checked",2);c([h({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],ye.prototype,"submenuOpen",2);c([X()],ye.prototype,"hasSubmenu",2);ye=c([Z("wa-dropdown-item")],ye);var Sa=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),a=r[i]+this.unit,o=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:a,unitDisplay:this.display})}};c([h({type:Number})],Sa.prototype,"value",2);c([h()],Sa.prototype,"unit",2);c([h()],Sa.prototype,"display",2);Sa=c([Z("wa-format-bytes")],Sa);var Se=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(t.getMilliseconds()))return;const r=this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e});return S`<time datetime=${t.toISOString()}>${r}</time>`}};c([h()],Se.prototype,"date",2);c([h()],Se.prototype,"weekday",2);c([h()],Se.prototype,"era",2);c([h()],Se.prototype,"year",2);c([h()],Se.prototype,"month",2);c([h()],Se.prototype,"day",2);c([h()],Se.prototype,"hour",2);c([h()],Se.prototype,"minute",2);c([h()],Se.prototype,"second",2);c([h({attribute:"time-zone-name"})],Se.prototype,"timeZoneName",2);c([h({attribute:"time-zone"})],Se.prototype,"timeZone",2);c([h({attribute:"hour-format"})],Se.prototype,"hourFormat",2);Se=c([Z("wa-format-date")],Se);var We=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([h({type:Number})],We.prototype,"value",2);c([h()],We.prototype,"type",2);c([h({attribute:"without-grouping",type:Boolean})],We.prototype,"withoutGrouping",2);c([h()],We.prototype,"currency",2);c([h({attribute:"currency-display"})],We.prototype,"currencyDisplay",2);c([h({attribute:"minimum-integer-digits",type:Number})],We.prototype,"minimumIntegerDigits",2);c([h({attribute:"minimum-fraction-digits",type:Number})],We.prototype,"minimumFractionDigits",2);c([h({attribute:"maximum-fraction-digits",type:Number})],We.prototype,"maximumFractionDigits",2);c([h({attribute:"minimum-significant-digits",type:Number})],We.prototype,"minimumSignificantDigits",2);c([h({attribute:"maximum-significant-digits",type:Number})],We.prototype,"maximumSignificantDigits",2);We=c([Z("wa-format-number")],We);var Hn=class extends Event{constructor(t){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Zp=J`
  :host {
    display: block;
  }
`;var ss=new Map;function Yp(t,e="cors"){const r=ss.get(t);if(r!==void 0)return Promise.resolve(r);const i=fetch(t,{mode:e}).then(async a=>{const o={ok:a.ok,status:a.status,html:await a.text()};return ss.set(t,o),o});return ss.set(t,i),i}var mi=class extends lt{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(r=>e.setAttribute(r.name,r.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await Yp(t,this.mode);if(t!==this.src)return;if(!e.ok){this.dispatchEvent(new Hn({status:e.status}));return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.dispatchEvent(new Us)}catch{this.dispatchEvent(new Hn({status:-1}))}}render(){return S`<slot></slot>`}};mi.css=Zp;c([h()],mi.prototype,"src",2);c([h()],mi.prototype,"mode",2);c([h({attribute:"allow-scripts",type:Boolean})],mi.prototype,"allowScripts",2);c([tt("src")],mi.prototype,"handleSrcChange",1);mi=c([Z("wa-include")],mi);var Qp=class extends Event{constructor(t){super("wa-intersect",{bubbles:!1,cancelable:!1,composed:!0}),this.detail=t}};var Jp=J`
  :host {
    display: contents;
  }
`;var ar=class extends lt{constructor(){super(...arguments),this.intersectionObserver=null,this.observedElements=new Map,this.root=null,this.rootMargin="0px",this.threshold="0",this.intersectClass="",this.once=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}parseThreshold(){return Oo(this.threshold).map(e=>{const r=parseFloat(e);return isNaN(r)?0:wt(r,0,1)})}resolveRoot(){if(!this.root)return null;try{const e=this.getRootNode().getElementById(this.root);return e||console.warn(`Root element with ID "${this.root}" could not be found.`,this),e}catch{return console.warn(`Invalid selector for root: "${this.root}"`,this),null}}startObserver(){if(this.stopObserver(),this.disabled)return;const t=this.parseThreshold(),e=this.resolveRoot();this.intersectionObserver=new IntersectionObserver(i=>{i.forEach(a=>{const o=this.observedElements.get(a.target)??!1,s=a.isIntersecting;this.observedElements.set(a.target,s),this.intersectClass&&(s?a.target.classList.add(this.intersectClass):a.target.classList.remove(this.intersectClass));const n=new Qp({entry:a});this.dispatchEvent(n),s&&!o&&this.once&&(this.intersectionObserver?.unobserve(a.target),this.observedElements.delete(a.target))})},{root:e,rootMargin:this.rootMargin,threshold:t});const r=this.shadowRoot.querySelector("slot");r!==null&&r.assignedElements({flatten:!0}).forEach(a=>{this.intersectionObserver?.observe(a),this.observedElements.set(a,!1)})}stopObserver(){this.intersectClass&&this.observedElements.forEach((t,e)=>{e.classList.remove(this.intersectClass)}),this.intersectionObserver?.disconnect(),this.intersectionObserver=null,this.observedElements.clear()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleOptionsChange(){this.startObserver()}render(){return S` <slot @slotchange=${this.handleSlotChange}></slot> `}};ar.css=Jp;c([h()],ar.prototype,"root",2);c([h({attribute:"root-margin"})],ar.prototype,"rootMargin",2);c([h()],ar.prototype,"threshold",2);c([h({attribute:"intersect-class"})],ar.prototype,"intersectClass",2);c([h({type:Boolean,reflect:!0})],ar.prototype,"once",2);c([h({type:Boolean,reflect:!0})],ar.prototype,"disabled",2);c([tt("disabled",{waitUntilFirstUpdate:!0})],ar.prototype,"handleDisabledChange",1);c([tt("root",{waitUntilFirstUpdate:!0}),tt("rootMargin",{waitUntilFirstUpdate:!0}),tt("threshold",{waitUntilFirstUpdate:!0})],ar.prototype,"handleOptionsChange",1);ar=c([Z("wa-intersection-observer")],ar);var tf=class extends Event{constructor(t){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var ef=J`
  :host {
    display: contents;
  }
`;var or=class extends lt{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.dispatchEvent(new tf({mutationList:t}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return S` <slot></slot> `}};or.css=ef;c([h({reflect:!0})],or.prototype,"attr",2);c([h({attribute:"attr-old-value",type:Boolean,reflect:!0})],or.prototype,"attrOldValue",2);c([h({attribute:"char-data",type:Boolean,reflect:!0})],or.prototype,"charData",2);c([h({attribute:"char-data-old-value",type:Boolean,reflect:!0})],or.prototype,"charDataOldValue",2);c([h({attribute:"child-list",type:Boolean,reflect:!0})],or.prototype,"childList",2);c([h({type:Boolean,reflect:!0})],or.prototype,"disabled",2);c([tt("disabled")],or.prototype,"handleDisabledChange",1);c([tt("attr",{waitUntilFirstUpdate:!0}),tt("attr-old-value",{waitUntilFirstUpdate:!0}),tt("char-data",{waitUntilFirstUpdate:!0}),tt("char-data-old-value",{waitUntilFirstUpdate:!0}),tt("childList",{waitUntilFirstUpdate:!0})],or.prototype,"handleChange",1);or=c([Z("wa-mutation-observer")],or);var rf=J`
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
`;var It=class extends Ft{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new ze(this,"hint","label"),this.localize=new _t(this),this.title="",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.placeholder="",this.readonly=!1,this.required=!1,this.step=1,this.withoutSteppers=!1,this.inputmode="numeric",this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,za()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isAtMin(){if(this.min===void 0)return!1;const t=parseFloat(this.value||"");return!isNaN(t)&&t<=this.min}get isAtMax(){if(this.max===void 0)return!1;const t=parseFloat(this.value||"");return!isNaN(t)&&t>=this.max}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(){this.value=this.input.value}handleKeyDown(t){Hs(t,this),(t.key==="ArrowUp"||t.key==="ArrowDown")&&requestAnimationFrame(()=>{this.value!==this.input.value&&(this.value=this.input.value)})}handleStepperClick(t){this.disabled||this.readonly||(t==="up"?this.input.stepUp():this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.input.focus())}maintainFocusOnPointerDown(t){t.preventDefault(),this.input.focus()}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,r=this.label?!0:!!t,i=this.hint?!0:!!e;return S`
      <label
        part="form-control-label label"
        class=${ut({label:!0,"has-label":r})}
        for="input"
        aria-hidden=${r?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="number-field">
        ${this.withoutSteppers?"":S`
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
          inputmode=${at(this.inputmode)}
          title=${this.title}
          name=${at(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${at(this.placeholder)}
          min=${at(this.min)}
          max=${at(this.max)}
          step=${at(this.step)}
          .value=${ui(this.value??"")}
          autocomplete=${at(this.autocomplete)}
          ?autofocus=${this.autofocus}
          enterkeyhint=${at(this.enterkeyhint)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        <slot name="end" part="end" class="end"></slot>

        ${this.withoutSteppers?"":S`
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
        class=${ut({"has-slotted":i})}
        aria-hidden=${i?"false":"true"}
        >${this.hint}</slot
      >
    `}};It.css=[me,kr,rf];It.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0};c([Q("input")],It.prototype,"input",2);c([h()],It.prototype,"title",2);c([X()],It.prototype,"value",1);c([h({attribute:"value",reflect:!0})],It.prototype,"defaultValue",2);c([h({reflect:!0})],It.prototype,"size",2);c([h({reflect:!0})],It.prototype,"appearance",2);c([h({type:Boolean,reflect:!0})],It.prototype,"pill",2);c([h()],It.prototype,"label",2);c([h({attribute:"hint"})],It.prototype,"hint",2);c([h()],It.prototype,"placeholder",2);c([h({type:Boolean,reflect:!0})],It.prototype,"readonly",2);c([h({type:Boolean,reflect:!0})],It.prototype,"required",2);c([h({type:Number})],It.prototype,"min",2);c([h({type:Number})],It.prototype,"max",2);c([h()],It.prototype,"step",2);c([h({attribute:"without-steppers",type:Boolean})],It.prototype,"withoutSteppers",2);c([h()],It.prototype,"autocomplete",2);c([h({type:Boolean})],It.prototype,"autofocus",2);c([h()],It.prototype,"enterkeyhint",2);c([h()],It.prototype,"inputmode",2);c([h({attribute:"with-label",type:Boolean})],It.prototype,"withLabel",2);c([h({attribute:"with-hint",type:Boolean})],It.prototype,"withHint",2);c([tt("step",{waitUntilFirstUpdate:!0})],It.prototype,"handleStepChange",1);It=c([Z("wa-number-input")],It);var af=J`
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
`;function pa(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(a=>pa(a,--e)).join("");let r=t;if(r.nodeType===Node.TEXT_NODE)return r.textContent??"";if(r.nodeType===Node.ELEMENT_NODE){let i=r;if(i.hasAttribute("slot")||i.matches("style, script"))return"";if(i instanceof HTMLSlotElement){let a=i.assignedNodes({flatten:!0});if(a.length>0)return pa(a,--e)}return e>-1?pa(i,--e):i.textContent??""}return r.hasChildNodes()?pa(r.childNodes,--e):""}var sr=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){const e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{const t=this.closest("wa-select");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())}),customElements.whenDefined("wa-combobox").then(()=>{const t=this.closest("wa-combobox");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())})):this.isInitialized=!0}willUpdate(t){if(t.has("defaultSelected")&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){const e=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",e)}super.willUpdate(t)}updated(t){super.updated(t),t.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current)}firstUpdated(t){if(super.firstUpdated(t),this.selected&&!this.defaultSelected){const e=this.closest("wa-select, wa-combobox");e&&!e.hasInteracted&&e.selectionChanged?.()}}updateDefaultLabel(){let t=this.defaultLabel;this.defaultLabel=pa(this).trim();let e=this.defaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){return S`
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
    `}};sr.css=af;c([Q(".label")],sr.prototype,"defaultSlot",2);c([X()],sr.prototype,"current",2);c([h({reflect:!0})],sr.prototype,"value",2);c([h({type:Boolean})],sr.prototype,"disabled",2);c([h({type:Boolean,attribute:!1})],sr.prototype,"selected",2);c([h({type:Boolean,attribute:"selected"})],sr.prototype,"defaultSelected",2);c([h()],sr.prototype,"label",1);c([X()],sr.prototype,"defaultLabel",2);sr=c([Z("wa-option")],sr);var of=J`
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
`;var ns=new Set,ne=class extends lt{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&vr(this)&&(t.preventDefault(),t.stopPropagation(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=t=>{this.anchor&&t.composedPath().includes(this.anchor)||t.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=Lo("wa-popover-")),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),wr(this),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const t=new Ci;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}ns.forEach(e=>e.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,ns.add(this),ki(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await Mt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new _i)}else{const t=new Si;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),ns.delete(this),wr(this),await Mt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Ei)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,r=this.anchor;if(e===r)return;const{signal:i}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:i}),r&&r.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,er(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,er(this,"wa-after-hide")}render(){return S`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${ut({popover:!0,"popover-open":this.open})}
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
    `}};ne.css=of;ne.dependencies={"wa-popup":Dt};c([Q("dialog")],ne.prototype,"dialog",2);c([Q(".body")],ne.prototype,"body",2);c([Q("wa-popup")],ne.prototype,"popup",2);c([X()],ne.prototype,"anchor",2);c([h()],ne.prototype,"placement",2);c([h({type:Boolean,reflect:!0})],ne.prototype,"open",2);c([h({type:Number})],ne.prototype,"distance",2);c([h({type:Number})],ne.prototype,"skidding",2);c([h()],ne.prototype,"for",2);c([h({attribute:"without-arrow",type:Boolean,reflect:!0})],ne.prototype,"withoutArrow",2);c([tt("open",{waitUntilFirstUpdate:!0})],ne.prototype,"handleOpenChange",1);c([tt("for")],ne.prototype,"handleForChange",1);c([tt(["distance","placement","skidding"])],ne.prototype,"handleOptionsChange",1);ne=c([Z("wa-popover")],ne);var sf=J`
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
`;var Vi=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.value=0,this.indeterminate=!1,this.label=""}updated(t){t.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${wt(this.value,0,100)}%`)})}render(){return S`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${at(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":S` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};Vi.css=sf;c([h({type:Number,reflect:!0})],Vi.prototype,"value",2);c([h({type:Boolean,reflect:!0})],Vi.prototype,"indeterminate",2);c([h()],Vi.prototype,"label",2);Vi=c([Z("wa-progress-bar")],Vi);var nf=J`
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
`;var gi=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*e,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return S`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${Vt({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${Vt({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};gi.css=nf;c([Q(".indicator")],gi.prototype,"indicator",2);c([X()],gi.prototype,"indicatorOffset",2);c([h({type:Number,reflect:!0})],gi.prototype,"value",2);c([h()],gi.prototype,"label",2);gi=c([Z("wa-progress-ring")],gi);var lf=J`
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
`,ls,Be=class extends lt{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(t){super.firstUpdated(t),this.hasUpdated&&this.generate()}generate(){if(!this.hasUpdated)return;if(!ls){Ne(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(e=>{ls=e.default,this.generate()});return}this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`;const t=getComputedStyle(this);ls.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||t.color,background:this.background||null,size:this.size*2},this.canvas),this.generated=!0}render(){return S`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        @transitionend=${t=>{t.propertyName==="color"&&this.generate()}}
      ></canvas>
    `}};Be.css=lf;c([Q("canvas")],Be.prototype,"canvas",2);c([h()],Be.prototype,"value",2);c([h()],Be.prototype,"label",2);c([h({type:Number})],Be.prototype,"size",2);c([h()],Be.prototype,"fill",2);c([h()],Be.prototype,"background",2);c([h({type:Number})],Be.prototype,"radius",2);c([h({attribute:"error-correction"})],Be.prototype,"errorCorrection",2);c([X()],Be.prototype,"generated",2);c([tt(["background","errorCorrection","fill","radius","size","value"],{waitUntilFirstUpdate:!0})],Be.prototype,"generate",1);Be=c([Z("wa-qr-code")],Be);var cf=J`
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
`;var Rr=class extends Ft{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return S`
      <span part="control" class="control">
        ${this.checked?S`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};Rr.css=[kr,me,cf];c([X()],Rr.prototype,"checked",2);c([X()],Rr.prototype,"forceDisabled",2);c([h({reflect:!0})],Rr.prototype,"value",2);c([h({reflect:!0})],Rr.prototype,"appearance",2);c([h({reflect:!0})],Rr.prototype,"size",2);c([h({type:Boolean})],Rr.prototype,"disabled",2);Rr=c([Z("wa-radio")],Rr);var df=J`
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
`;var pe=class extends Ft{constructor(){super(),this.hasSlotController=new ze(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const r=this.value;this.value=e.value,e.checked=!0;const i=this.getAllRadios();for(const a of i)e!==a&&(a.checked=!1,a.setAttribute("tabindex","-1"));this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const t=[zo({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:Lo("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}get validationTarget(){const t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("size")||t.has("value")||t.has("defaultValue"))&&this.syncRadioElements()}formResetCallback(...t){this._value=null,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach((e,r)=>{this.size&&e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),e.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),e.toggleAttribute("data-wa-radio-first",r===0),e.toggleAttribute("data-wa-radio-inner",r!==0&&r!==t.length-1),e.toggleAttribute("data-wa-radio-last",r===t.length-1),e.forceDisabled=this.disabled}),await Promise.all(t.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{const e=t.filter(i=>!i.disabled),r=e.find(i=>i.checked);e.length>0&&(r?e.forEach(i=>{i.tabIndex=i.checked?0:-1}):e.forEach((i,a)=>{i.tabIndex=a===0?0:-1})),t.filter(i=>i.disabled).forEach(i=>{i.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(n=>!n.disabled);if(e.length<=0)return;t.preventDefault();const r=this.value,i=e.find(n=>n.checked)??e[0],a=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let o=e.indexOf(i)+a;o||(o=0),o<0&&(o=e.length-1),o>e.length-1&&(o=0);const s=e.some(n=>n.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(n=>{n.checked=!1,s||n.setAttribute("tabindex","-1")}),this.value=e[o].value,e[o].checked=!0,s?e[o].shadowRoot.querySelector("button").focus():(e[o].setAttribute("tabindex","0"),e[o].focus()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),r=e.find(o=>o.checked),i=e.find(o=>!o.disabled),a=r||i;a&&a.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,r=this.label?!0:!!t,i=this.hint?!0:!!e;return S`
      <fieldset
        part="form-control"
        class=${ut({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${ut({label:!0,"has-label":r})}
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${ut({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};pe.css=[me,kr,df];pe.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0};c([Q("slot:not([name])")],pe.prototype,"defaultSlot",2);c([h()],pe.prototype,"label",2);c([h({attribute:"hint"})],pe.prototype,"hint",2);c([h({reflect:!0})],pe.prototype,"name",2);c([h({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);c([h({reflect:!0})],pe.prototype,"orientation",2);c([X()],pe.prototype,"value",1);c([h({attribute:"value",reflect:!0})],pe.prototype,"defaultValue",2);c([h({reflect:!0})],pe.prototype,"size",2);c([h({type:Boolean,reflect:!0})],pe.prototype,"required",2);c([h({type:Boolean,attribute:"with-label"})],pe.prototype,"withLabel",2);c([h({type:Boolean,attribute:"with-hint"})],pe.prototype,"withHint",2);pe=c([Z("wa-radio-group")],pe);var jn=class extends Event{constructor(t){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var hf=J`
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
`;var le=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(t,e)=>e?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:r,right:i,width:a}=this.rating.getBoundingClientRect(),o=e?this.roundToPrecision((i-t)/a*this.max,this.precision):this.roundToPrecision((t-r)/a*this.max,this.precision);return wt(o,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.matches(":dir(ltr)"),r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight"){const a=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-a),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft"){const a=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+a),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}roundToPrecision(t,e=.5){const r=1/e;return Math.ceil(t*r)/r}handleHoverValueChange(){this.dispatchEvent(new jn({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new jn({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir,e=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,S`
      <div
        part="base"
        class=${ut({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
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
          ${e.map(i=>{const a=r>=i+1;return r>i&&r<i+1?S`
                <span
                  class=${ut({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(r)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${Vt({clipPath:t?`inset(0 ${(r-i)*100}% 0 0)`:`inset(0 0 0 ${(r-i)*100}%)`})}
                  >
                    ${Lr(this.getSymbol(i+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${Vt({clipPath:t?`inset(0 0 0 ${100-(r-i)*100}%)`:`inset(0 ${100-(r-i)*100}% 0 0)`})}
                  >
                    ${Lr(this.getSymbol(i+1,!0))}
                  </div>
                </span>
              `:S`
              <span
                class=${ut({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(r)===i+1,"symbol-active":r>=i+1})}
                role="presentation"
              >
                ${Lr(this.getSymbol(i+1,a))}
              </span>
            `})}
        </span>
      </div>
    `}};le.css=[me,hf];c([Q(".rating")],le.prototype,"rating",2);c([X()],le.prototype,"hoverValue",2);c([X()],le.prototype,"isHovering",2);c([h()],le.prototype,"label",2);c([h({type:Number})],le.prototype,"value",2);c([h({type:Number})],le.prototype,"max",2);c([h({type:Number})],le.prototype,"precision",2);c([h({type:Boolean,reflect:!0})],le.prototype,"readonly",2);c([h({type:Boolean,reflect:!0})],le.prototype,"disabled",2);c([h()],le.prototype,"getSymbol",2);c([h({reflect:!0})],le.prototype,"size",2);c([_o({passive:!0})],le.prototype,"handleTouchMove",1);c([tt("hoverValue")],le.prototype,"handleHoverValueChange",1);c([tt("isHovering")],le.prototype,"handleIsHoveringChange",1);le=c([Z("wa-rating")],le);var uf=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Xr=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=e.getTime()-t.getTime(),{unit:i,value:a}=uf.find(o=>Math.abs(r)<o.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(r/a),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;i==="minute"?o=Za("second"):i==="hour"?o=Za("minute"):i==="day"?o=Za("hour"):o=Za("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),o)}return S`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};c([X()],Xr.prototype,"isoTime",2);c([X()],Xr.prototype,"relativeTime",2);c([h()],Xr.prototype,"date",2);c([h()],Xr.prototype,"format",2);c([h()],Xr.prototype,"numeric",2);c([h({type:Boolean})],Xr.prototype,"sync",2);Xr=c([Z("wa-relative-time")],Xr);function Za(t){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return r-Date.now()%r}var pf=class extends Event{constructor(t){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var ff=J`
  :host {
    display: contents;
  }
`;var Ea=class extends lt{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.dispatchEvent(new pf({entries:t}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],e.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return S` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ea.css=ff;c([h({type:Boolean,reflect:!0})],Ea.prototype,"disabled",2);c([tt("disabled",{waitUntilFirstUpdate:!0})],Ea.prototype,"handleDisabledChange",1);Ea=c([Z("wa-resize-observer")],Ea);var mf=J`
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
`;var Dr=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(t){t.key==="Home"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),t.key==="End"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const t=Math.ceil(this.content.clientWidth),e=Math.abs(Math.ceil(this.content.scrollLeft)),i=Math.ceil(this.content.scrollWidth)-t;this.canScroll=i>0;const a=Math.min(1,e/(i*.05)),o=Math.min(1,(i-e)/(i*.05));this.style.setProperty("--start-shadow-opacity",String(a||0)),this.style.setProperty("--end-shadow-opacity",String(o||0))}else{const t=Math.ceil(this.content.clientHeight),e=Math.abs(Math.ceil(this.content.scrollTop)),i=Math.ceil(this.content.scrollHeight)-t;this.canScroll=i>0;const a=Math.min(1,e/(i*.05)),o=Math.min(1,(i-e)/(i*.05));this.style.setProperty("--start-shadow-opacity",String(a||0)),this.style.setProperty("--end-shadow-opacity",String(o||0))}}render(){return S`
      ${this.withoutShadow?"":S`
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
    `}};Dr.css=[mf];c([Q("#content")],Dr.prototype,"content",2);c([X()],Dr.prototype,"canScroll",2);c([h({reflect:!0})],Dr.prototype,"orientation",2);c([h({attribute:"without-scrollbar",type:Boolean,reflect:!0})],Dr.prototype,"withoutScrollbar",2);c([h({attribute:"without-shadow",type:Boolean,reflect:!0})],Dr.prototype,"withoutShadow",2);c([_o({passive:!0})],Dr.prototype,"updateScroll",1);Dr=c([Z("wa-scroller")],Dr);var gf=J`
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
`;var kt=class extends Ft{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new ze(this,"hint","label"),this.localize=new _t(this),this.selectionOrder=new Map,this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=t=>S`
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
      `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,r=e.closest('[part~="clear-button"]')!==null,i=e.closest("wa-button")!==null;if(!(r||i)){if(t.key==="Escape"&&this.open&&vr(this)&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const a=this.getAllOptions(),o=a.indexOf(this.currentOption);let s=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(s=o+1,s>a.length-1&&(s=0)):t.key==="ArrowUp"?(s=o-1,s<0&&(s=a.length-1)):t.key==="Home"?s=0:t.key==="End"&&(s=a.length-1),this.setCurrentOption(a[s])}if(t.key?.length===1||t.key==="Backspace"){const a=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const o of a)if(o.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){const t=[zo({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]),this._value=t??null,this.value!==e&&(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),t==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(r=>!r.disabled).map(r=>r.value));let e=t;return t!=null&&(e=t.filter(r=>this.optionValues.has(r)),e=this.multiple?e:e[0],e=e??null),e}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners()}updateDefaultValue(){const e=this.getAllOptions().filter(r=>r.hasAttribute("selected")||r.defaultSelected);if(e.length>0){const r=e.map(i=>i.value);this._defaultValue=this.multiple?r:r[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),ki(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),wr(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){const r=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="wa-button");this.disabled||r||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==null&&(this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new Dl),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const r=t.target.closest("wa-option");r&&!r.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);const r=t.filter(i=>e.includes(i.value));this.setSelectedOptions(r)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let r=e;if(!r){const i=t.target.closest("wa-tag[data-value]");if(i){const a=i.dataset.value;r=this.selectedOptions.find(o=>o.value===a)}}r&&(this.toggleOptionSelection(r,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus({preventScroll:!0}))}setSelectedOptions(t){const e=this.getAllOptions(),r=Array.isArray(t)?t:[t];e.forEach(i=>{r.includes(i)||(i.selected=!1)}),r.length&&r.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){const e=this.getAllOptions().filter(s=>{if(!this.hasInteracted&&!this.valueHasChanged){const n=this.defaultValue,l=Array.isArray(n)?n:[n];return s.hasAttribute("selected")||s.defaultSelected||s.selected||l?.includes(s.value)}return s.selected}),r=new Set(e.map(s=>s.value));for(const s of this.selectionOrder.keys())r.has(s)||this.selectionOrder.delete(s);let a=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(const s of e)this.selectionOrder.has(s.value)||this.selectionOrder.set(s.value,a++);this.selectedOptions=e.sort((s,n)=>{const l=this.selectionOrder.get(s.value)??0,d=this.selectionOrder.get(n.value)??0;return l-d});let o=new Set(this.selectedOptions.map(s=>s.value));if(o.size>0||this._value){const s=this._value;if(this._value==null){let n=this.defaultValue??[];this._value=Array.isArray(n)?n:[n]}this._value=this._value?.filter(n=>!this.optionValues?.has(n))??null,this._value?.unshift(...o),this.requestUpdate("value",s)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.displayLabel=s?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(t,e);return r?typeof r=="string"?Lr(r):r:null}else if(e===this.maxOptionsVisible)return S`
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
        `;return null})}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],r=t.filter(i=>e.includes(i.value));this.setSelectedOptions(r),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const t=new Ci;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await Mt(this.popup.popup,"show"),this.currentOption&&zs(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new _i)}else{const t=new Si;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await Mt(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Ei)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,er(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,er(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,r=this.label?!0:!!t,i=this.hint?!0:!!e,a=(this.hasUpdated||Wc)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,o=!!(this.placeholder&&(!this.value||this.value.length===0));return S`
      <div
        part="form-control"
        class=${ut({"form-control":!0,"form-control-has-label":r})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${ut({label:!0,"has-label":r})}
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${ut({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":o})}
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
              ${this.multiple&&this.hasUpdated?S`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

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

              ${a?S`
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
          class=${ut({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};kt.css=[gf,kr,me];c([Q(".select")],kt.prototype,"popup",2);c([Q(".combobox")],kt.prototype,"combobox",2);c([Q(".display-input")],kt.prototype,"displayInput",2);c([Q(".value-input")],kt.prototype,"valueInput",2);c([Q(".listbox")],kt.prototype,"listbox",2);c([X()],kt.prototype,"displayLabel",2);c([X()],kt.prototype,"currentOption",2);c([X()],kt.prototype,"selectedOptions",2);c([X()],kt.prototype,"optionValues",2);c([h({reflect:!0})],kt.prototype,"name",2);c([h({attribute:!1})],kt.prototype,"defaultValue",1);c([h({attribute:"value",reflect:!1})],kt.prototype,"value",1);c([h({reflect:!0})],kt.prototype,"size",2);c([h()],kt.prototype,"placeholder",2);c([h({type:Boolean,reflect:!0})],kt.prototype,"multiple",2);c([h({attribute:"max-options-visible",type:Number})],kt.prototype,"maxOptionsVisible",2);c([h({type:Boolean})],kt.prototype,"disabled",2);c([h({attribute:"with-clear",type:Boolean})],kt.prototype,"withClear",2);c([h({type:Boolean,reflect:!0})],kt.prototype,"open",2);c([h({reflect:!0})],kt.prototype,"appearance",2);c([h({type:Boolean,reflect:!0})],kt.prototype,"pill",2);c([h()],kt.prototype,"label",2);c([h({reflect:!0})],kt.prototype,"placement",2);c([h({attribute:"hint"})],kt.prototype,"hint",2);c([h({attribute:"with-label",type:Boolean})],kt.prototype,"withLabel",2);c([h({attribute:"with-hint",type:Boolean})],kt.prototype,"withHint",2);c([h({type:Boolean,reflect:!0})],kt.prototype,"required",2);c([h({attribute:!1})],kt.prototype,"getTag",2);c([tt("disabled",{waitUntilFirstUpdate:!0})],kt.prototype,"handleDisabledChange",1);c([tt("value",{waitUntilFirstUpdate:!0})],kt.prototype,"handleValueChange",1);c([tt("open",{waitUntilFirstUpdate:!0})],kt.prototype,"handleOpenChange",1);kt=c([Z("wa-select")],kt);var bf=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};var wf=J`
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
`;var Zr=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new bf)}render(){return S`
      <slot part="content" class="content"></slot>

      ${this.withRemove?S`
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
    `}};Zr.css=[wf,$o,me];c([h({reflect:!0})],Zr.prototype,"variant",2);c([h({reflect:!0})],Zr.prototype,"appearance",2);c([h({reflect:!0})],Zr.prototype,"size",2);c([h({type:Boolean,reflect:!0})],Zr.prototype,"pill",2);c([h({attribute:"with-remove",type:Boolean})],Zr.prototype,"withRemove",2);Zr=c([Z("wa-tag")],Zr);var vf=J`
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
`;var fo=class extends lt{constructor(){super(...arguments),this.effect="none"}render(){return S` <div part="indicator" class="indicator"></div> `}};fo.css=vf;c([h({reflect:!0})],fo.prototype,"effect",2);fo=c([Z("wa-skeleton")],fo);var yf=J`
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
`;var xf=()=>{const t=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(e){const r={message:"",isValid:!0,invalidKeys:[]},i=(a,o,s,n)=>{const l=document.createElement("input");return l.type="range",l.min=String(o),l.max=String(s),l.step=String(n),l.value=String(a),l.checkValidity(),l.validationMessage};if(e.required&&!e.hasInteracted)return r.isValid=!1,r.invalidKeys.push("valueMissing"),r.message=t.validationMessage||"Please fill out this field.",r;if(e.isRange){const a=e.minValue,o=e.maxValue;if(a<e.min)return r.isValid=!1,r.invalidKeys.push("rangeUnderflow"),r.message=i(a,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,r;if(o>e.max)return r.isValid=!1,r.invalidKeys.push("rangeOverflow"),r.message=i(o,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,r;if(e.step&&e.step!==1){const s=(a-e.min)%e.step!==0,n=(o-e.min)%e.step!==0;if(s||n){r.isValid=!1,r.invalidKeys.push("stepMismatch");const l=s?a:o;return r.message=i(l,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,r}}}else{const a=e.value;if(a<e.min)return r.isValid=!1,r.invalidKeys.push("rangeUnderflow"),r.message=i(a,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,r;if(a>e.max)return r.isValid=!1,r.invalidKeys.push("rangeOverflow"),r.message=i(a,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,r;if(e.step&&e.step!==1&&(a-e.min)%e.step!==0)return r.isValid=!1,r.invalidKeys.push("stepMismatch"),r.message=i(a,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,r}return r}}},Ct=class extends Ft{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new ze(this,"hint","label"),this.localize=new _t(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,xf()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){if(this.valueHasChanged){const e=this._value??this.minValue??0;return wt(e,this.min,this.max)}const t=this._value??this.defaultValue;return wt(t,this.min,this.max)}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new Wa(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Wa(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Wa(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const r=this.getValueFromCoordinates(t,e),i=Math.abs(r-this.minValue),a=Math.abs(r-this.maxValue);if(i===a)if(r>this.maxValue)this.activeThumb="max";else if(r<this.minValue)this.activeThumb="min";else{const o=this.localize.dir()==="rtl",s=this.orientation==="vertical",n=s?e:t,l=this.lastTrackPosition||n;this.lastTrackPosition=n;const d=n>l!==o&&!s||n<l&&s;this.activeThumb=d?"max":"min"}else this.activeThumb=i<=a?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Wa(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(t){if(t.has("range")&&this.requestUpdate(),this.isRange?(t.has("minValue")||t.has("maxValue"))&&(this.minValue=wt(this.minValue,this.min,this.maxValue),this.maxValue=wt(this.maxValue,this.minValue,this.max),this.updateFormValue()):t.has("value")&&this.setValue(String(this.value)),(t.has("min")||t.has("max"))&&this.isRange&&(this.minValue=wt(this.minValue,this.min,this.max),this.maxValue=wt(this.maxValue,this.min,this.max)),t.has("disabled")&&this.customStates.set("disabled",this.disabled),t.has("disabled")||t.has("readonly")){const e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??String(this.min))),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,r=Number(this.step),i=Number(this.min),a=Number(this.max);return t=Math.round(t/r)*r,t=wt(t,i,a),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const r=this.localize.dir()==="rtl",i=this.orientation==="vertical",{top:a,right:o,bottom:s,left:n,height:l,width:d}=this.trackBoundingClientRect,u=i?e:t,m=i?{start:a,end:s,size:l}:{start:n,end:o,size:d},p=(i||r?m.end-u:u-m.start)/m.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*p)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e=this.localize.dir()==="rtl",r=t.target;if(this.disabled||this.readonly||this.isRange&&(r===this.thumbMin?this.activeThumb="min":r===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const i=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let a=i;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),a=this.clampAndRoundToStep(i+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),a=this.clampAndRoundToStep(i-this.step);break;case"Home":t.preventDefault(),a=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),a=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();const o=Math.max(i+(this.max-this.min)/10,i+this.step);a=this.clampAndRoundToStep(o);break;case"PageDown":t.preventDefault();const s=Math.min(i-(this.max-this.min)/10,i-this.step);a=this.clampAndRoundToStep(s);break;case"Enter":Hs(t,this);return}a!==i&&(this.isRange?(this.activeThumb==="min"?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),this.updateFormValue()):this.value=wt(a,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const r=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,r){const i=this.getValueFromCoordinates(t,e),a=r==="min"?this.minValue:this.maxValue;r==="min"?i>this.maxValue?(this.maxValue=i,this.minValue=i):this.minValue=Math.max(this.min,i):i<this.minValue?(this.minValue=i,this.maxValue=i):this.maxValue=Math.min(this.max,i),a!==(r==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(){if(this.isRange){const t=new FormData;t.append(this.name||"",String(this.minValue)),t.append(this.name||"",String(this.maxValue)),this.setValue(t)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=wt(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=wt(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("hint"),r=this.label?!0:!!t,i=this.hint?!0:!!e,a=this.hasSlotController.test("reference"),o=ut({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),s=[];if(this.withMarkers)for(let b=this.min;b<=this.max;b+=this.step)s.push(this.getPercentageFromValue(b));const n=S`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${ut({vh:!r,"has-label":r})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,l=S`
      <div
        id="hint"
        part="hint"
        class=${ut({"has-slotted":i})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,d=this.withMarkers?S`
          <div id="markers" part="markers">
            ${s.map(b=>S`<span part="marker" class="marker" style=${Vt({"--position":`${b}%`})}></span>`)}
          </div>
        `:"",u=a?S`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",m=(b,p)=>this.withTooltip?S`
            <wa-tooltip
              id=${`tooltip${b!=="thumb"?"-"+b:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${b}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(p):this.localize.number(p)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const b=wt(this.getPercentageFromValue(this.minValue),0,100),p=wt(this.getPercentageFromValue(this.maxValue),0,100);return S`
        ${n}

        <div id="slider" part="slider" class=${o}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${Vt({"--start":`${Math.min(b,p)}%`,"--end":`${Math.max(b,p)}%`})}
            ></div>

            ${d}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${Vt({"--position":`${b}%`})}
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
              style=${Vt({"--position":`${p}%`})}
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

          ${u} ${l}
        </div>

        ${m("thumb-min",this.minValue)} ${m("thumb-max",this.maxValue)}
      `}else{const b=wt(this.getPercentageFromValue(this.value),0,100),p=wt(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return S`
        ${n}

        <div
          id="slider"
          part="slider"
          class=${o}
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
              style=${Vt({"--start":`${p}%`,"--end":`${b}%`})}
            ></div>

            ${d}
            <span id="thumb" part="thumb" style=${Vt({"--position":`${b}%`})}></span>
          </div>

          ${u} ${l}
        </div>

        ${m("thumb",this.value)}
      `}}};Ct.formAssociated=!0;Ct.observeSlots=!0;Ct.css=[me,kr,yf];c([Q("#slider")],Ct.prototype,"slider",2);c([Q("#thumb")],Ct.prototype,"thumb",2);c([Q("#thumb-min")],Ct.prototype,"thumbMin",2);c([Q("#thumb-max")],Ct.prototype,"thumbMax",2);c([Q("#track")],Ct.prototype,"track",2);c([Q("#tooltip")],Ct.prototype,"tooltip",2);c([h()],Ct.prototype,"label",2);c([h({attribute:"hint"})],Ct.prototype,"hint",2);c([h({reflect:!0})],Ct.prototype,"name",2);c([h({type:Number,attribute:"min-value"})],Ct.prototype,"minValue",2);c([h({type:Number,attribute:"max-value"})],Ct.prototype,"maxValue",2);c([h({attribute:"value",reflect:!0,type:Number})],Ct.prototype,"defaultValue",2);c([X()],Ct.prototype,"value",1);c([h({type:Boolean,reflect:!0})],Ct.prototype,"range",2);c([h({type:Boolean})],Ct.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],Ct.prototype,"readonly",2);c([h({reflect:!0})],Ct.prototype,"orientation",2);c([h({reflect:!0})],Ct.prototype,"size",2);c([h({attribute:"indicator-offset",type:Number})],Ct.prototype,"indicatorOffset",2);c([h({type:Number})],Ct.prototype,"min",2);c([h({type:Number})],Ct.prototype,"max",2);c([h({type:Number})],Ct.prototype,"step",2);c([h({type:Boolean,reflect:!0})],Ct.prototype,"required",2);c([h({type:Boolean})],Ct.prototype,"autofocus",2);c([h({attribute:"tooltip-distance",type:Number})],Ct.prototype,"tooltipDistance",2);c([h({attribute:"tooltip-placement",reflect:!0})],Ct.prototype,"tooltipPlacement",2);c([h({attribute:"with-markers",type:Boolean})],Ct.prototype,"withMarkers",2);c([h({attribute:"with-tooltip",type:Boolean})],Ct.prototype,"withTooltip",2);c([h({attribute:!1})],Ct.prototype,"valueFormatter",2);Ct=c([Z("wa-slider")],Ct);var kf=J`
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
`;var Ee=class extends lt{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new _t(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),ya(this,{onMove:(r,i)=>{let a=this.orientation==="vertical"?i:r;this.primary==="end"&&(a=this.size-a),this.snap&&this.snap.split(" ").forEach(s=>{let n;s.endsWith("%")?n=this.size*(parseFloat(s)/100):n=parseFloat(s),e&&this.orientation==="horizontal"&&(n=this.size-n),a>=n-this.snapThreshold&&a<=n+this.snapThreshold&&(a=n)}),this.position=wt(this.pixelsToPercentage(a),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const r=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&this.orientation==="horizontal"||t.key==="ArrowUp"&&this.orientation==="vertical")&&(e-=r),(t.key==="ArrowRight"&&this.orientation==="horizontal"||t.key==="ArrowDown"&&this.orientation==="vertical")&&(e+=r),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=wt(e,0,100)}}handleResize(t){const{width:e,height:r}=t[0].contentRect;if(this.size=this.orientation==="vertical"?r:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary){const i=this.pixelsToPercentage(this.cachedPositionInPixels);this.position!==i&&(this.position=i)}}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position);const t=this.percentageToPixels(this.position);this.positionInPixels!==t&&(this.positionInPixels=t),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new Il)}handlePositionInPixelsChange(){const t=this.pixelsToPercentage(this.positionInPixels);this.position!==t&&(this.position=t)}handleVerticalChange(){this.detectSize()}render(){const t=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",e=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",r=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,a="auto";return this.style||(this.style={}),this.primary==="end"?r&&this.orientation==="horizontal"?this.style[t]=`${i} var(--divider-width) ${a}`:this.style[t]=`${a} var(--divider-width) ${i}`:r&&this.orientation==="horizontal"?this.style[t]=`${a} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${a}`,this.style[e]="",S`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${at(this.disabled?void 0:"0")}
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
    `}};Ee.css=kf;c([Q(".divider")],Ee.prototype,"divider",2);c([h({type:Number,reflect:!0})],Ee.prototype,"position",2);c([h({attribute:"position-in-pixels",type:Number})],Ee.prototype,"positionInPixels",2);c([h({reflect:!0})],Ee.prototype,"orientation",2);c([h({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2);c([h()],Ee.prototype,"primary",2);c([h()],Ee.prototype,"snap",2);c([h({type:Number,attribute:"snap-threshold"})],Ee.prototype,"snapThreshold",2);c([tt("position")],Ee.prototype,"handlePositionChange",1);c([tt("positionInPixels")],Ee.prototype,"handlePositionInPixelsChange",1);c([tt("vertical")],Ee.prototype,"handleVerticalChange",1);Ee=c([Z("wa-split-panel")],Ee);var Cf=J`
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
`;var ce=class extends Ft{constructor(){super(...arguments),this.hasSlotController=new ze(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,za()]}get value(){return this._value??"on"}set value(t){this._value=t}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}firstUpdated(t){super.firstUpdated(t),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,e=this.hint?!0:!!t;return S`
      <label
        part="base"
        class=${ut({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${at(this.name)}
          value=${at(this.value)}
          .checked=${ui(this.checked)}
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
        class=${ut({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};ce.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0};ce.css=[kr,me,Cf];c([Q('input[type="checkbox"]')],ce.prototype,"input",2);c([h()],ce.prototype,"title",2);c([h({reflect:!0})],ce.prototype,"name",2);c([h({reflect:!0})],ce.prototype,"value",1);c([h({reflect:!0})],ce.prototype,"size",2);c([h({type:Boolean})],ce.prototype,"disabled",2);c([h({type:Boolean,attribute:!1})],ce.prototype,"checked",1);c([h({type:Boolean,attribute:"checked",reflect:!0})],ce.prototype,"defaultChecked",2);c([h({type:Boolean,reflect:!0})],ce.prototype,"required",2);c([h({attribute:"hint"})],ce.prototype,"hint",2);c([h({attribute:"with-hint",type:Boolean})],ce.prototype,"withHint",2);c([tt(["checked","defaultChecked"])],ce.prototype,"handleStateChange",1);c([tt("disabled",{waitUntilFirstUpdate:!0})],ce.prototype,"handleDisabledChange",1);ce=c([Z("wa-switch")],ce);var Sf=J`
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
`;var Ef=0,xr=class extends lt{constructor(){super(...arguments),this.attrId=++Ef,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,S`
      <div
        part="base"
        class=${ut({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};xr.css=Sf;c([Q(".tab")],xr.prototype,"tab",2);c([h({reflect:!0})],xr.prototype,"panel",2);c([h({type:Boolean,reflect:!0})],xr.prototype,"active",2);c([h({type:Boolean,reflect:!0})],xr.prototype,"disabled",2);c([h({type:Number,reflect:!0})],xr.prototype,"tabIndex",2);c([tt("active")],xr.prototype,"handleActiveChange",1);c([tt("disabled")],xr.prototype,"handleDisabledChange",1);xr=c([Z("wa-tab")],xr);var _f=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var $f=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Lf=J`
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
`;var Me=class extends lt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new _t(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels());const e=t.filter(r=>r.target.closest("wa-tab-group")===this);if(e.some(r=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(r=>r.attributeName==="active")){const i=e.filter(a=>a.attributeName==="active"&&a.target.tagName.toLowerCase()==="wa-tab").map(a=>a.target).find(a=>a.active);i&&i.closest("wa-tab-group")===this&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,r)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const i=this.tabs.find(a=>a.panel===this.active);i&&this.setActiveTab(i)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});r.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const r=t.target.closest("wa-tab");r?.closest("wa-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(t){const r=t.target.closest("wa-tab");if(r?.closest("wa-tab-group")===this){if(["Enter"," "].includes(t.key)){r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const a=this.tabs.find(n=>n.matches(":focus")),o=this.localize.dir()==="rtl";let s=null;if(a?.tagName.toLowerCase()==="wa-tab"){if(t.key==="Home")s=this.focusableTabs[0];else if(t.key==="End")s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const n=this.tabs.findIndex(l=>l===a);s=this.findNextFocusableTab(n,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const n=this.tabs.findIndex(l=>l===a);s=this.findNextFocusableTab(n,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(n=>{n.tabIndex=n===s?0:-1}),["top","bottom"].includes(this.placement)&&zs(s,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,e){let r=null;const i=e==="forward"?1:-1;let a=t+i;for(;t<this.tabs.length;){if(r=this.tabs[a]||null,r===null){e==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;a+=i}return r}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){const r=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>i.active=i.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&zs(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(r&&this.dispatchEvent(new _f({name:r.panel})),this.dispatchEvent(new $f({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(r=>r.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const t=this.tabs.find(e=>e.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return S`
      <div
        part="base"
        class=${ut({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?S`
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

          ${this.hasScrollControls?S`
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
    `}};Me.css=Lf;c([Q(".tab-group")],Me.prototype,"tabGroup",2);c([Q(".body")],Me.prototype,"body",2);c([Q(".nav")],Me.prototype,"nav",2);c([X()],Me.prototype,"hasScrollControls",2);c([h({reflect:!0})],Me.prototype,"active",2);c([h()],Me.prototype,"placement",2);c([h()],Me.prototype,"activation",2);c([h({attribute:"without-scroll-controls",type:Boolean})],Me.prototype,"withoutScrollControls",2);c([tt("active")],Me.prototype,"updateActiveTab",1);c([tt("withoutScrollControls",{waitUntilFirstUpdate:!0})],Me.prototype,"updateScrollControls",1);Me=c([Z("wa-tab-group")],Me);var zf=J`
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
`;var Af=0,qi=class extends lt{constructor(){super(...arguments),this.attrId=++Af,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return S`
      <slot
        part="base"
        class=${ut({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};qi.css=zf;c([h({reflect:!0})],qi.prototype,"name",2);c([h({type:Boolean,reflect:!0})],qi.prototype,"active",2);c([tt("active")],qi.prototype,"handleActiveChange",1);qi=c([Z("wa-tab-panel")],qi);var Tf=J`
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
`;var Et=class extends Ft{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new ze(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,za()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const t=this.input.value;this.value=t}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${t}px`}if(this.input.style.height){const t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${t}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&this.setTextareaDimensions(),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,i="preserve"){const a=e??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(t,a,o,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this._value=null,this.input&&(this.input.value=this.value||""),super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,r=this.label?!0:!!t,i=this.hint?!0:!!e;return S`
      <label
        part="form-control-label label"
        class=${ut({label:!0,"has-label":r})}
        for="input"
        aria-hidden=${r?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${at(this.name)}
          .value=${ui(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${at(this.placeholder)}
          rows=${at(this.rows)}
          minlength=${at(this.minlength)}
          maxlength=${at(this.maxlength)}
          autocapitalize=${at(this.autocapitalize)}
          autocorrect=${at(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${at(this.spellcheck)}
          enterkeyhint=${at(this.enterkeyhint)}
          inputmode=${at(this.inputmode)}
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
        aria-hidden=${i?"false":"true"}
        class=${ut({"has-slotted":i})}
        >${this.hint}</slot
      >
    `}};Et.css=[Tf,kr,me];c([Q(".control")],Et.prototype,"input",2);c([Q('[part~="base"]')],Et.prototype,"base",2);c([Q(".size-adjuster")],Et.prototype,"sizeAdjuster",2);c([h()],Et.prototype,"title",2);c([h({reflect:!0})],Et.prototype,"name",2);c([X()],Et.prototype,"value",1);c([h({attribute:"value",reflect:!0})],Et.prototype,"defaultValue",2);c([h({reflect:!0})],Et.prototype,"size",2);c([h({reflect:!0})],Et.prototype,"appearance",2);c([h()],Et.prototype,"label",2);c([h({attribute:"hint"})],Et.prototype,"hint",2);c([h()],Et.prototype,"placeholder",2);c([h({type:Number})],Et.prototype,"rows",2);c([h({reflect:!0})],Et.prototype,"resize",2);c([h({type:Boolean})],Et.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],Et.prototype,"readonly",2);c([h({type:Boolean,reflect:!0})],Et.prototype,"required",2);c([h({type:Number})],Et.prototype,"minlength",2);c([h({type:Number})],Et.prototype,"maxlength",2);c([h()],Et.prototype,"autocapitalize",2);c([h()],Et.prototype,"autocorrect",2);c([h()],Et.prototype,"autocomplete",2);c([h({type:Boolean})],Et.prototype,"autofocus",2);c([h()],Et.prototype,"enterkeyhint",2);c([h({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],Et.prototype,"spellcheck",2);c([h()],Et.prototype,"inputmode",2);c([h({attribute:"with-label",type:Boolean})],Et.prototype,"withLabel",2);c([h({attribute:"with-hint",type:Boolean})],Et.prototype,"withHint",2);c([tt("rows",{waitUntilFirstUpdate:!0})],Et.prototype,"handleRowsChange",1);c([tt("value",{waitUntilFirstUpdate:!0})],Et.prototype,"handleValueChange",1);Et=c([Z("wa-textarea")],Et);var Rf=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Df=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}};var If=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Of=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var Pf=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var Ff=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var Nf=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var Bf=J`
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
`;var zt=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new Ff);const t=no(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await so(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new Nf)}isNestedItem(){const t=this.parentElement;return!!t&&zt.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new Of),this.childrenContainer.hidden=!1;const t=no(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await so(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new Pf)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new If)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new Df)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>zt.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.localize.dir()==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return S`
      <div
        part="base"
        class="${ut({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":e})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${ut({"expand-button":!0,"expand-button-visible":e})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${re(this.loading,()=>S` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>S`
                  <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${re(this.selectable,()=>S`
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
                ?checked="${ui(this.selected)}"
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
    `}};zt.css=Bf;c([X()],zt.prototype,"indeterminate",2);c([X()],zt.prototype,"isLeaf",2);c([X()],zt.prototype,"loading",2);c([X()],zt.prototype,"selectable",2);c([h({type:Boolean,reflect:!0})],zt.prototype,"expanded",2);c([h({type:Boolean,reflect:!0})],zt.prototype,"selected",2);c([h({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],zt.prototype,"lazy",2);c([Q("slot:not([name])")],zt.prototype,"defaultSlot",2);c([Q("slot[name=children]")],zt.prototype,"childrenSlot",2);c([Q(".item")],zt.prototype,"itemElement",2);c([Q(".children")],zt.prototype,"childrenContainer",2);c([Q(".expand-button slot")],zt.prototype,"expandButtonSlot",2);c([tt("loading",{waitUntilFirstUpdate:!0})],zt.prototype,"handleLoadingChange",1);c([tt("disabled")],zt.prototype,"handleDisabledChange",1);c([tt("expanded")],zt.prototype,"handleExpandedState",1);c([tt("indeterminate")],zt.prototype,"handleIndeterminateStateChange",1);c([tt("selected")],zt.prototype,"handleSelectedChange",1);c([tt("expanded",{waitUntilFirstUpdate:!0})],zt.prototype,"handleExpandedChange",1);c([tt("expanded",{waitUntilFirstUpdate:!0})],zt.prototype,"handleExpandAnimation",1);c([tt("lazy",{waitUntilFirstUpdate:!0})],zt.prototype,"handleLazyChange",1);zt=c([Z("wa-tree-item")],zt);var Mf=J`
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
`;function Kn(t,e=!1){function r(o){const s=o.getChildrenItems({includeDisabled:!1});if(s.length){const n=s.every(d=>d.selected),l=s.every(d=>!d.selected&&!d.indeterminate);o.selected=n,o.indeterminate=!n&&!l}}function i(o){const s=o.parentElement;zt.isTreeItem(s)&&(r(s),i(s))}function a(o){for(const s of o.getChildrenItems())s.selected=e?o.selected||s.selected:!s.disabled&&o.selected,a(s);e&&r(o)}a(t),i(t)}var Yr=class extends lt{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new _t(this),this.initTreeItem=t=>{t.updateComplete.then(()=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const r=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(r===null?t.append(i):r.hasAttribute("data-default")&&r.replaceWith(i))})})},this.handleTreeChanged=t=>{for(const e of t){const r=[...e.addedNodes].filter(zt.isTreeItem),i=[...e.removedNodes].filter(zt.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),zt.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){const r=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(a=>a.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Kn(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const a of i)a.selected=a===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const r=this.selectedItems;(e.length!==r.length||r.some(i=>!e.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.dispatchEvent(new Rf({selection:r}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(a=>["input","textarea"].includes(a?.tagName?.toLowerCase())))return;const e=this.getFocusableItems(),r=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const a=e.findIndex(l=>l.matches(":focus")),o=e[a],s=l=>{const d=e[wt(l,0,e.length-1)];this.focusItem(d)},n=l=>{o.expanded=l};t.key==="ArrowDown"?s(a+1):t.key==="ArrowUp"?s(a-1):r&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?s(a+1):n(!0):r&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?s(a-1):n(!1):t.key==="Home"?s(0):t.key==="End"?s(e.length-1):(t.key==="Enter"||t.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(t){const e=t.target,r=e.closest("wa-tree-item"),i=t.composedPath().some(a=>a?.classList?.contains("expand-button"));!r||r.disabled||e!==this.clickTarget||(i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const r of e)r.updateComplete.then(()=>{r.selectable=t});t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(r=>{r.updateComplete.then(()=>{Kn(r,!0)})}))}get selectedItems(){const t=this.getAllTreeItems(),e=r=>r.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(r=>{if(r.disabled)return!1;const i=r.parentElement?.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||e.has(i))&&e.add(r),!e.has(r)})}render(){return S`
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
    `}};Yr.css=Mf;c([Q("slot:not([name])")],Yr.prototype,"defaultSlot",2);c([Q("slot[name=expand-icon]")],Yr.prototype,"expandedIconSlot",2);c([Q("slot[name=collapse-icon]")],Yr.prototype,"collapsedIconSlot",2);c([h()],Yr.prototype,"selection",2);c([tt("selection")],Yr.prototype,"handleSelectionChange",1);Yr=c([Z("wa-tree")],Yr);var Uf=J`
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
`;var _e=class extends lt{constructor(){super(...arguments),this.localize=new _t(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(t){const e=Oo(t),r=[];for(const i of e){let a;if(i.endsWith("%")){const o=parseFloat(i.slice(0,-1));if(!isNaN(o))a=Math.max(0,o/100);else continue}else if(a=parseFloat(i),!isNaN(a))a=Math.max(0,a);else continue;r.push(a)}return[...new Set(r)].sort((i,a)=>i-a)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let t=0,e=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let r=1;r<this.availableZoomLevels.length;r++){const i=Math.abs(this.availableZoomLevels[r]-this.zoom);i<e&&(e=i,t=r)}return t}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(t){if(t.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),t.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const e=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[e]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[e])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const t=this.getCurrentZoomIndex();t<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[t+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const t=this.getCurrentZoomIndex();t>0&&(this.zoom=this.availableZoomLevels[t-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return S`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${at(this.sandbox??void 0)}
          src=${at(this.src??void 0)}
          srcdoc=${at(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?"":S`
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
    `}};_e.css=Uf;c([Q("#iframe")],_e.prototype,"iframe",2);c([h()],_e.prototype,"src",2);c([h()],_e.prototype,"srcdoc",2);c([h({type:Boolean})],_e.prototype,"allowfullscreen",2);c([h()],_e.prototype,"loading",2);c([h()],_e.prototype,"referrerpolicy",2);c([h()],_e.prototype,"sandbox",2);c([h({type:Number,reflect:!0})],_e.prototype,"zoom",2);c([h({attribute:"zoom-levels"})],_e.prototype,"zoomLevels",2);c([h({type:Boolean,attribute:"without-controls",reflect:!0})],_e.prototype,"withoutControls",2);c([h({type:Boolean,attribute:"without-interaction",reflect:!0})],_e.prototype,"withoutInteraction",2);_e=c([Z("wa-zoomable-frame")],_e);new MutationObserver(t=>{for(const{addedNodes:e}of t)for(const r of e)r.nodeType===Node.ELEMENT_NODE&&Vf(r)});async function Vf(t){const e=t instanceof Element?t.tagName.toLowerCase():"",r=e?.startsWith("wa-"),i=[...t.querySelectorAll(":not(:defined)")].map(s=>s.tagName.toLowerCase()).filter(s=>s.startsWith("wa-"));r&&!customElements.get(e)&&i.push(e);const a=[...new Set(i)],o=await Promise.allSettled(a.map(s=>qf(s)));for(const s of o)s.status==="rejected"&&console.warn(s.reason);await new Promise(requestAnimationFrame),t.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function qf(t){if(customElements.get(t))return Promise.resolve();const e=t.replace(/^wa-/i,""),r=ad(`components/${e}/${e}.js`);return new Promise((i,a)=>{import(r).then(()=>i()).catch(()=>a(new Error(`Unable to autoload <${t}> from ${r}`)))})}const Wf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Hf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-22%200%20300%20300'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M10.5838307,156.409656%20L10.5838307,156.196646%20L10.5838307,123.657627%20L17.7200527,123.657627%20L17.7200527,158.912657%20C18.0516208,161.753926%2017.8075656,164.63288%2017.0023629,167.377784%20C16.19722,170.122687%2014.8474392,172.677251%2013.0335946,174.88924%20C9.6624625,177.797086%205.34298451,179.369568%200.891381719,179.309391%20L0.145805038,173.983903%20C3.01718628,173.985518%205.78730255,172.922981%207.92105685,171.001585%20C9.83826599,168.76489%2010.5838307,165.729334%2010.5838307,156.409656%20Z%20M63.8037763,152.209035%20C63.8037763,156.203166%2063.8037763,159.771277%2064.1232613,162.860071%20L57.7859014,162.860071%20L57.3598815,156.522711%20C56.0343268,158.765028%2054.1386519,160.616318%2051.8656486,161.888456%20C49.5925854,163.160593%2047.0232464,163.808237%2044.4187946,163.765408%20C38.2412071,163.765408%2030.8919752,160.410366%2030.8919752,146.723715%20L30.8919752,123.983721%20L38.0281972,123.983721%20L38.0281972,145.285823%20C38.0281972,152.688352%2040.3181887,157.641058%2046.7620834,157.641058%20C48.0878176,157.655354%2049.4030239,157.404719%2050.6306575,156.903927%20C51.8582911,156.403136%2052.9735276,155.662296%2053.9110465,154.724777%20C54.8485056,153.787318%2055.5894046,152.672022%2056.0901963,151.444448%20C56.5909282,150.216815%2056.8415633,148.901549%2056.8273268,147.575814%20L56.8273268,123.717444%20L63.9634889,123.717444%20L63.9634889,151.996025%20L63.8037763,152.209035%20Z%20M77.330762,136.653806%20C77.330762,131.70104%2077.330762,127.653648%2077.0112304,123.979032%20L83.4018876,123.979032%20L83.7213726,130.635931%20C85.1452074,128.23088%2087.1949721,126.257257%2089.6521533,124.925482%20C92.1093944,123.593709%2094.8819333,122.953703%2097.6742718,123.073695%20C107.153723,123.073695%20114.289945,131.008713%20114.289945,142.831393%20C114.289945,156.784292%20105.715831,163.707504%2096.4493898,163.707504%20C94.0776877,163.813321%2091.7187865,163.305232%2089.6009496,162.232346%20C87.4831127,161.159401%2085.6780613,159.558028%2084.3604623,157.583154%20L84.3604623,178.885226%20L77.330762,178.885226%20L77.330762,136.813578%20L77.330762,136.653806%20Z%20M84.3604623,147.038594%20C84.3797833,148.004885%2084.4867369,148.967408%2084.6800071,149.914378%20C85.2842232,152.279021%2086.6597255,154.374666%2088.5887785,155.869683%20C90.5178913,157.364761%2092.8904309,158.173852%2095.3310427,158.168947%20C102.840047,158.168947%20107.260258,152.044597%20107.260258,143.150938%20C107.260258,135.375686%20103.106354,128.718758%2095.59735,128.718758%20C92.6257387,128.962101%2089.844945,130.280974%2087.7762781,132.428062%20C85.7076111,134.575149%2084.4931374,137.403079%2084.3604623,140.381689%20L84.3604623,147.038594%20Z%20M127.004503,123.94359%20L135.578617,146.896647%20C136.483954,149.452886%20137.442529,152.54168%20138.081618,154.831671%20C138.827183,152.488442%20139.625985,149.506124%20140.58462,146.736875%20L148.359872,123.94359%20L155.868876,123.94359%20L145.21784,151.636343%20C139.892293,164.950152%20136.643726,171.820127%20131.744199,175.97403%20C129.27643,178.228071%20126.267791,179.805756%20123.010354,180.553953%20L121.252929,174.589376%20C123.530581,173.840999%20125.645092,172.666304%20127.48382,171.127799%20C130.081872,169.010501%20132.14366,166.310102%20133.501635,163.246013%20C133.792288,162.715372%20133.990404,162.139031%20134.087428,161.541814%20C134.026892,160.899135%20133.865146,160.270094%20133.60817,159.677902%20L119.122716,123.837079%20L126.897968,123.837079%20L127.004503,123.94359%20Z%20M174.813541,112.770851%20L174.813541,123.954441%20L185.038557,123.954441%20L185.038557,129.279989%20L174.813541,129.279989%20L174.813541,150.262575%20C174.813541,155.055568%20176.198196,157.824817%20180.139089,157.824817%20C181.538758,157.847727%20182.935316,157.686579%20184.292992,157.345559%20L184.612537,162.671047%20C182.57671,163.376355%20180.428486,163.701283%20178.275118,163.629682%20C176.849069,163.718929%20175.420569,163.498622%20174.087657,162.983833%20C172.754744,162.469044%20171.549004,161.671976%20170.553103,160.647363%20C168.383883,157.745977%20167.394359,154.130491%20167.783854,150.528882%20L167.783854,129.226751%20L161.712742,129.226751%20L161.712742,123.901204%20L167.890329,123.901204%20L167.890329,114.421764%20L174.813541,112.770851%20Z%20M198.184399,144.647511%20C198.03988,146.453639%20198.289199,148.269577%20198.915189,149.969888%20C199.541179,151.670199%20200.528884,153.214267%20201.810114,154.495437%20C203.091285,155.776667%20204.635352,156.764373%20206.335664,157.390363%20C208.035975,158.016352%20209.851913,158.265672%20211.658041,158.121153%20C215.311153,158.202863%20218.940457,157.513288%20222.309077,156.097409%20L223.533958,161.422956%20C219.400274,163.12572%20214.955358,163.942168%20210.486396,163.819423%20C207.881107,163.997798%20205.268101,163.61054%20202.826592,162.684147%20C200.385023,161.757814%20198.172795,160.3143%20196.341489,158.452721%20C194.51022,156.591082%20193.103284,154.355345%20192.217196,151.898941%20C191.331104,149.442478%20190.986827,146.82349%20191.207978,144.221491%20C191.207978,132.505346%20198.184399,123.238905%20209.581059,123.238905%20C222.362314,123.238905%20225.557643,134.422495%20225.557643,141.558717%20C225.625954,142.658281%20225.625954,143.761016%20225.557643,144.860581%20L198.024687,144.860581%20L198.184399,144.647511%20Z%20M219.06051,139.322023%20C219.266043,137.898188%20219.163995,136.446897%20218.761184,135.065892%20C218.358433,133.684886%20217.664311,132.406228%20216.725656,131.316115%20C215.786941,130.226062%20214.625525,129.349856%20213.31959,128.746561%20C212.013656,128.143278%20210.59353,127.826939%20209.155039,127.818864%20C206.228949,128.030665%20203.487515,129.327603%20201.467959,131.455549%20C199.448402,133.583436%20198.296377,136.388874%20198.237697,139.322023%20L219.06051,139.322023%20Z%20M236.385366,136.053478%20C236.385366,131.473555%20236.385366,127.532637%20236.065834,123.911277%20L242.456492,123.911277%20L242.456492,131.526792%20L242.775977,131.526792%20C243.446769,129.176325%20244.83268,127.093027%20246.741335,125.566097%20C248.64999,124.039161%20250.986699,123.144369%20253.427072,123.005938%20C254.098762,122.917777%20254.779066,122.917777%20255.450756,123.005938%20L255.450756,129.66288%20C254.63688,129.568608%20253.814868,129.568608%20253.000992,129.66288%20C250.58353,129.756495%20248.282771,130.726973%20246.528505,132.393068%20C244.774238,134.059104%20243.686458,136.306745%20243.468304,138.716252%20C243.269171,139.805946%20243.162278,140.910475%20243.148819,142.018055%20L243.148819,162.734394%20L236.11909,162.734394%20L236.11909,136.106715%20L236.385366,136.053478%20Z'%20fill='%234E4E4E'%3e%3c/path%3e%3cpath%20d='M233.257943,16.9621357%20C233.476636,20.5398773%20232.625434,24.1017075%20230.812666,27.1939108%20C228.999898,30.286174%20226.307754,32.7687777%20223.079047,34.3255867%20C219.85034,35.8823358%20216.231324,36.4427655%20212.683013,35.9355136%20C209.134702,35.4282017%20205.817704,33.8761781%20203.154559,31.4770796%20C200.491421,29.0780409%20198.602703,25.9404959%20197.729013,22.4642047%20C196.855323,18.9879135%20197.036209,15.330196%20198.248625,11.9570899%20C199.461041,8.5839838%20201.650109,5.64808944%20204.536953,3.52346926%20C207.423803,1.39884909%20210.877782,0.181657262%20214.458814,0.0269503701%20C216.806708,-0.10224713%20219.156996,0.233972409%20221.374429,1.01627461%20C223.591922,1.79857323%20225.632893,3.01152758%20227.379981,4.58537259%20C229.12701,6.15922358%20230.54576,8.06291398%20231.554522,10.1869719%20C232.563283,12.3110298%20233.142196,14.6135829%20233.257943,16.9621357%20Z'%20fill='%23767677'%3e%3c/path%3e%3cpath%20d='M127.952969,225.540984%20C80.0236372,225.540984%2037.8984531,208.339518%2016.1170646,182.936721%20C24.5683135,205.78944%2039.8176362,225.504615%2059.8124569,239.428562%20C79.8070981,253.352629%20103.588124,260.816651%20127.952969,260.816651%20C152.318411,260.816651%20176.098839,253.352629%20196.094019,239.428562%20C216.0886,225.504615%20231.337863,205.78944%20239.789471,182.936721%20C218.061379,208.339518%20176.095848,225.540984%20127.952969,225.540984%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M127.952969,60.3543133%20C175.882898,60.3543133%20218.008142,77.5557785%20239.789471,102.958396%20C231.337863,80.1058563%20216.0886,60.3906823%20196.094019,46.4667348%20C176.098839,32.5427873%20152.318411,25.0784666%20127.952969,25.0784666%20C103.588124,25.0784666%2079.8070981,32.5427873%2059.8124569,46.4667348%20C39.8176362,60.3906823%2024.5683135,80.1058563%2016.1170646,102.958396%20C37.8984531,77.502541%2079.8106871,60.3543133%20127.952969,60.3543133%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M61.9716874,274.975202%20C62.2528294,279.48161%2061.186045,283.969713%2058.9072992,287.867658%20C56.6284936,291.765602%2053.2409116,294.896926%2049.1761363,296.862707%20C45.1113611,298.828488%2040.5533909,299.539717%2036.0829934,298.905772%20C31.6125362,298.271767%2027.4320141,296.321359%2024.0740419,293.30297%20C20.7160636,290.284582%2018.3326671,286.334835%2017.2274978,281.957035%20C16.1223339,277.579176%2016.3454363,272.971497%2017.868382,268.720869%20C19.3913284,264.470301%2022.1451683,260.769335%2025.7790187,258.089483%20C29.4129289,255.40962%2033.7623156,253.872201%2038.2730898,253.673106%20C41.2280121,253.515051%2044.1851476,253.940738%2046.9755719,254.925846%20C49.7659364,255.910962%2052.3349165,257.436187%2054.5356604,259.414404%20C56.7364042,261.392633%2058.5259031,263.785032%2059.8017495,266.455044%20C61.0776558,269.124996%2061.8150255,272.02022%2061.9716874,274.975202%20Z'%20fill='%239E9E9E'%3e%3c/path%3e%3cpath%20d='M21.5641016,54.5650606%20C18.9814831,54.6363631%2016.4354131,53.9424806%2014.2460944,52.570687%20C12.0567996,51.1988336%2010.3219858,49.2102622%209.25983722,46.8551295%20C8.19768984,44.499937%207.85562972,41.8832824%208.276674,39.3342215%20C8.69771827,36.7851606%209.86306631,34.4174662%2011.6261678,32.5289814%20C13.3892752,30.6404727%2015.6714246,29.3154324%2018.1856119,28.7204982%20C20.6997394,28.1255646%2023.3336813,28.2873008%2025.7562282,29.1853653%20C28.1787154,30.0834346%2030.2815979,31.6777312%2031.800363,33.767765%20C33.3191879,35.8578106%2034.1861222,38.3502842%2034.2921188,40.9317063%20C34.3930308,44.4222341%2033.113057,47.8117302%2030.7300493,50.3642007%20C28.3470417,52.916731%2025.0533134,54.4262842%2021.5641016,54.5650606%20Z'%20fill='%23616262'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",jf="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='4'%20y='3'%20width='12'%20height='8'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2'%20y1='20'%20x2='18'%20y2='20'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='20'%20y1='2'%20x2='20'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Kf="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='10'%20y='4'%20width='12'%20height='16'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='9'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='2.5'%20y1='15'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Gf="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='8'%20y='4'%20width='8'%20height='8'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='21.5'%20y1='2'%20x2='21.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='6'%20y1='20'%20x2='18'%20y2='20'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Xf="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='8'%20y='4'%20width='8'%20height='16'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='21.5'%20y1='2'%20x2='21.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",Zf="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%3e%3cpath%20fill-rule='evenodd'%20d='M8%200C3.58%200%200%203.58%200%208c0%203.54%202.29%206.53%205.47%207.59.4.07.55-.17.55-.38%200-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01%201.08.58%201.23.82.72%201.21%201.87.87%202.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95%200-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12%200%200%20.67-.21%202.2.82.64-.18%201.32-.27%202-.27.68%200%201.36.09%202%20.27%201.53-1.04%202.2-.82%202.2-.82.44%201.1.16%201.92.08%202.12.51.56.82%201.27.82%202.15%200%203.07-1.87%203.75-3.65%203.95.29.25.54.73.54%201.48%200%201.07-.01%201.93-.01%202.2%200%20.21.15.46.55.38A8.013%208.013%200%200016%208c0-4.42-3.58-8-8-8z'/%3e%3c/svg%3e",Yf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";gd("lyra",{resolver:t=>new URL(Object.assign({"../icons/js.svg":Wf,"../icons/jupyter.svg":Hf,"../icons/layout-standard-bottom-panel.svg":jf,"../icons/layout-standard-bottom-sidebar.svg":Kf,"../icons/layout-standard-full.svg":Gf,"../icons/layout-standard.svg":Xf,"../icons/mark-github.svg":Zf,"../icons/python.svg":Yf})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var eo={exports:{}};var Qf=eo.exports,Gn;function Jf(){return Gn||(Gn=1,(function(t){(function(e,r){t.exports?t.exports=r():e.Toastify=r()})(Qf,function(e){var r=function(s){return new r.lib.init(s)},i="1.12.0";r.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},r.lib=r.prototype={toastify:i,constructor:r,init:function(s){return s||(s={}),this.options={},this.toastElement=null,this.options.text=s.text||r.defaults.text,this.options.node=s.node||r.defaults.node,this.options.duration=s.duration===0?0:s.duration||r.defaults.duration,this.options.selector=s.selector||r.defaults.selector,this.options.callback=s.callback||r.defaults.callback,this.options.destination=s.destination||r.defaults.destination,this.options.newWindow=s.newWindow||r.defaults.newWindow,this.options.close=s.close||r.defaults.close,this.options.gravity=s.gravity==="bottom"?"toastify-bottom":r.defaults.gravity,this.options.positionLeft=s.positionLeft||r.defaults.positionLeft,this.options.position=s.position||r.defaults.position,this.options.backgroundColor=s.backgroundColor||r.defaults.backgroundColor,this.options.avatar=s.avatar||r.defaults.avatar,this.options.className=s.className||r.defaults.className,this.options.stopOnFocus=s.stopOnFocus===void 0?r.defaults.stopOnFocus:s.stopOnFocus,this.options.onClick=s.onClick||r.defaults.onClick,this.options.offset=s.offset||r.defaults.offset,this.options.escapeMarkup=s.escapeMarkup!==void 0?s.escapeMarkup:r.defaults.escapeMarkup,this.options.ariaLive=s.ariaLive||r.defaults.ariaLive,this.options.style=s.style||r.defaults.style,s.backgroundColor&&(this.options.style.background=s.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var s=document.createElement("div");s.className="toastify on "+this.options.className,this.options.position?s.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(s.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):s.className+=" toastify-right",s.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var n in this.options.style)s.style[n]=this.options.style[n];if(this.options.ariaLive&&s.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)s.appendChild(this.options.node);else if(this.options.escapeMarkup?s.innerText=this.options.text:s.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?s.appendChild(l):s.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var d=document.createElement("button");d.type="button",d.setAttribute("aria-label","Close"),d.className="toast-close",d.innerHTML="&#10006;",d.addEventListener("click",(function(x){x.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?s.insertAdjacentElement("afterbegin",d):s.appendChild(d)}if(this.options.stopOnFocus&&this.options.duration>0){var m=this;s.addEventListener("mouseover",function(x){window.clearTimeout(s.timeOutValue)}),s.addEventListener("mouseleave",function(){s.timeOutValue=window.setTimeout(function(){m.removeElement(s)},m.options.duration)})}if(typeof this.options.destination<"u"&&s.addEventListener("click",(function(x){x.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&s.addEventListener("click",(function(x){x.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var b=a("x",this.options),p=a("y",this.options),v=this.options.position=="left"?b:"-"+b,w=this.options.gravity=="toastify-top"?p:"-"+p;s.style.transform="translate("+v+","+w+")"}return s},showToast:function(){this.toastElement=this.buildToast();var s;if(typeof this.options.selector=="string"?s=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?s=this.options.selector:s=document.body,!s)throw"Root element is not defined";var n=r.defaults.oldestFirst?s.firstChild:s.lastChild;return s.insertBefore(this.toastElement,n),r.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(s){s.className=s.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),s.parentNode&&s.parentNode.removeChild(s),this.options.callback.call(s),r.reposition()}).bind(this),400)}},r.reposition=function(){for(var s={top:15,bottom:15},n={top:15,bottom:15},l={top:15,bottom:15},d=document.getElementsByClassName("toastify"),u,m=0;m<d.length;m++){o(d[m],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var b=d[m].offsetHeight;u=u.substr(9,u.length-1);var p=15,v=window.innerWidth>0?window.innerWidth:screen.width;v<=360?(d[m].style[u]=l[u]+"px",l[u]+=b+p):o(d[m],"toastify-left")===!0?(d[m].style[u]=s[u]+"px",s[u]+=b+p):(d[m].style[u]=n[u]+"px",n[u]+=b+p)}return this};function a(s,n){return n.offset[s]?isNaN(n.offset[s])?n.offset[s]:n.offset[s]+"px":"0px"}function o(s,n){return!s||typeof n!="string"?!1:!!(s.className&&s.className.trim().split(/\s+/gi).indexOf(n)>-1)}return r.lib.init.prototype=r.lib,r})})(eo)),eo.exports}var tm=Jf();const em=xl(tm);class Zs{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,r){return e[r]||this.parent?.getProxy()[r]}set(e,r,i){e[r]=i}put(e,r){this.variables[e]=r}getProxy(){return this.proxy}createChild(e={}){const r=new Zs(e);return r.parent=this,this.children.push(r),r}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const de=new Zs({}),ai=de.createChild({}),Xn={debug:0,info:1,warning:2,error:3};let rm="debug";const Ti={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let mo=null;const As=[];function ur(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class im{constructor(e){this.source=e}info(e,...r){const i=r.length===0?e:`${e} ${r.map(a=>ur(a)).join(" ")}`;this.log(i,"info")}warning(e,...r){const i=r.length===0?e:`${e} ${r.map(a=>ur(a)).join(" ")}`;this.log(i,"warning")}warn(e,...r){const i=r.length===0?e:`${e} ${r.map(a=>ur(a)).join(" ")}`;this.log(i,"warning")}error(e,...r){const i=r.length===0?e:`${e} ${r.map(a=>ur(a)).join(" ")}`;this.log(i,"error")}debug(e,...r){const i=r.length===0?e:`${e} ${r.map(a=>ur(a)).join(" ")}`;this.log(i,"debug")}log(e,r){Ri(this.source,e,r)}}function am(t){return Xn[t]>=Xn[rm]}function Ri(t,e,r){am(r)&&(mo?mo(t,e,r):(As.push({source:t,message:e,level:r}),Ti[r==="error"?"error":r==="warning"?"warn":r==="debug"?"debug":"log"](`[${t}] ${e}`)))}function om(){console.log=function(...t){Ti.log.apply(console,t),Ri("Console",t.map(e=>ur(e)).join(" "),"info")},console.info=function(...t){Ti.info.apply(console,t),Ri("Console",t.map(e=>ur(e)).join(" "),"info")},console.warn=function(...t){Ti.warn.apply(console,t),Ri("Console",t.map(e=>ur(e)).join(" "),"warning")},console.error=function(...t){Ti.error.apply(console,t),Ri("Console",t.map(e=>ur(e)).join(" "),"error")},console.debug=function(...t){Ti.debug.apply(console,t),Ri("Console",t.map(e=>ur(e)).join(" "),"debug")}}om();function sm(t){for(mo=t;As.length>0;){const e=As.shift();e&&t(e.source,e.message,e.level)}}function nm(){mo=null}function Pr(t){return new im(t)}const Tt=Pr("System");de.put("logger",Tt);const Ys=Pr("Toast"),lm=4e3,cm={duration:lm,gravity:"bottom",position:"right",close:!0},Qs=(t,e)=>{em({...cm,text:t,style:e}).showToast()},ie=t=>{Ys.info(t),Qs(t,{background:"var(--wa-color-brand-50)",color:"var(--wa-color-brand-on)"})},ot=t=>{Ys.error(t),Qs(t,{background:"var(--wa-color-danger-50)",color:"var(--wa-color-danger-on)"})},dm=t=>{Ys.warn(t),Qs(t,{background:"var(--wa-color-warning-50)",color:"var(--wa-color-warning-on)"})};class hm{constructor(){this.globalNameRemaps=new Map,this.appNameRemaps=new Map}setGlobalNameRemap(e,r){this.globalNameRemaps.set(e,this.normalizeTargets(r))}resetForTesting(){this.globalNameRemaps.clear(),this.appNameRemaps.clear()}applyAppNameRemaps(e){if(this.appNameRemaps.clear(),!!e)for(const r of e)this.appNameRemaps.set(r.name,this.normalizeTargets(r.targets))}getEffectiveTargets(e,r){const i=r.name;if(!i)return[e];const a=this.appNameRemaps.get(i);if(a)return a.length>0?a:[];const o=this.globalNameRemaps.get(i);return o?o.length>0?o:[]:[e]}listNameRemaps(){const e={},r=new Set([...this.globalNameRemaps.keys(),...this.appNameRemaps.keys()]);for(const i of r)e[i]={appTargets:this.appNameRemaps.get(i),globalTargets:this.globalNameRemaps.get(i)};return e}normalizeTargets(e){const r=new Set,i=[];for(const a of e)!a||r.has(a)||(r.add(a),i.push(a));return i}}const go=new hm;de.put("contributionTargetMappingRegistry",go);const nr="events/contributionregistry/contributionsChanged";class um{constructor(){this.contributions=new Map}registerContribution(e,r){const i=this.getOrCreateSlot(e);if("command"in r){const o=r;o.disabled instanceof Function&&(o.disabled=new kl.Computed(o.disabled))}i.push(r),vt(nr,{target:e,contributions:i});const a=go.getEffectiveTargets(e,r);for(const o of a){if(o===e)continue;const s=this.getContributions(o);vt(nr,{target:o,contributions:s})}}getContributions(e){const r=[];for(const[i,a]of this.contributions.entries()){const o=a;for(const s of o)go.getEffectiveTargets(i,s).includes(e)&&r.push(s)}return r.length===0&&this.getOrCreateSlot(e),r}getOrCreateSlot(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const mt=new um;de.put("contributionRegistry",mt);const lb={},qe=ii(null),fa=ii(null),Ts=ii(null),Rs=ii(0),Qt=ii(void 0);ii({name:"",timestamp:0});const Yl="events/commandregistry/commandRegistered";class pm{constructor(e,r,i,a,o){this.id=e,this.name=r,this.description=i,this.parameters=a||[],this.output=o||[]}}class cb{async execute(e,r){return zr.execute(e,r)}async undo(){}async redo(){}}class fm{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,r){this.handlers.has(e)||this.handlers.set(e,[]);const i=this.handlers.get(e);i.push(r),i.sort((a,o)=>(o.ranking??0)-(a.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:qe.get(),activeEditor:fa.get()}}execute(e,r={}){const i=this.getHandler(e);if(!i)throw Tt.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const a=this.getCommand(e),o=r.params?` params: ${JSON.stringify(r.params)}`:"";Tt.debug(`[CommandRegistry] Executing command: ${e}${a?` (${a.name})`:""}${o}`);for(const s of i)if(s.canExecute===void 0||s.canExecute(r))try{const n=s.execute(r);return Tt.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${n})`),n}catch(n){const l=n instanceof Error?n.message:String(n);throw Tt.error(`[CommandRegistry] Command execution failed: ${e} - ${l}`),n}Tt.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,r,i,a,o){const s=new pm(e,r,i,a);this.registerCommand(s),o&&this.registerHandler(e,o)}registerCommand(e){this.commands[e.id]=e,vt(Yl,e)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(r=>(zr.getHandler(r.id)||[]).some(a=>a.canExecute===void 0||a.canExecute(e))).reduce((r,i)=>(r[i.id]=i,r),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const r=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(r,e.handler),e.contribution&&e.contribution.target&&mt.registerContribution(e.contribution.target,{command:r,...e.contribution})}}const zr=new fm;de.put("commandRegistry",zr);const At=t=>{zr.registerAll(t)},Ql=(t,e)=>{const r=new kl.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{r.watch(t)}});return r.watch(t),t.get(),()=>{r.unwatch(t)}};Object.defineProperty(Ms.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});const mm=Hc(Ms);class Po extends mm{constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>jc(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,r){const i=we(e,r.bind(this));this.eventSubscriptions.add(i)}showInfo(e){ie(e)}showError(e){ot(e)}nobubble(e){return r=>{r.stopPropagation(),e.bind(this)(r)}}command(e,r={}){return()=>{this.executeCommand(e,r)}}executeCommand(e,r){const i=zr.createExecutionContext(r);zr.execute(e,i)}watch(e,r){const i=Ql(e,r.bind(this));this.signalCleanups.add(i)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}function Js(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $i=Js();function Jl(t){$i=t}var li={exec:()=>null};function St(t,e=""){let r=typeof t=="string"?t:t.source,i={replace:(a,o)=>{let s=typeof o=="string"?o:o.source;return s=s.replace(ge.caret,"$1"),r=r.replace(a,s),i},getRegex:()=>new RegExp(r,e)};return i}var gm=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ge={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}>`)},bm=/^(?:[ \t]*(?:\n|$))+/,wm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,vm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ta=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ym=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,tn=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,tc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ec=St(tc).replace(/bull/g,tn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),xm=St(tc).replace(/bull/g,tn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),en=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,km=/^[^\n]+/,rn=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Cm=St(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",rn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Sm=St(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,tn).getRegex(),Fo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",an=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Em=St("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",an).replace("tag",Fo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),rc=St(en).replace("hr",Ta).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fo).getRegex(),_m=St(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",rc).getRegex(),on={blockquote:_m,code:wm,def:Cm,fences:vm,heading:ym,hr:Ta,html:Em,lheading:ec,list:Sm,newline:bm,paragraph:rc,table:li,text:km},Zn=St("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ta).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fo).getRegex(),$m={...on,lheading:xm,table:Zn,paragraph:St(en).replace("hr",Ta).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Zn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fo).getRegex()},Lm={...on,html:St(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",an).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:li,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:St(en).replace("hr",Ta).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ec).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},zm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Am=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ic=/^( {2,}|\\)\n(?!\s*$)/,Tm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,No=/[\p{P}\p{S}]/u,sn=/[\s\p{P}\p{S}]/u,ac=/[^\s\p{P}\p{S}]/u,Rm=St(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,sn).getRegex(),oc=/(?!~)[\p{P}\p{S}]/u,Dm=/(?!~)[\s\p{P}\p{S}]/u,Im=/(?:[^\s\p{P}\p{S}]|~)/u,sc=/(?![*_])[\p{P}\p{S}]/u,Om=/(?![*_])[\s\p{P}\p{S}]/u,Pm=/(?:[^\s\p{P}\p{S}]|[*_])/u,Fm=St(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",gm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),nc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Nm=St(nc,"u").replace(/punct/g,No).getRegex(),Bm=St(nc,"u").replace(/punct/g,oc).getRegex(),lc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Mm=St(lc,"gu").replace(/notPunctSpace/g,ac).replace(/punctSpace/g,sn).replace(/punct/g,No).getRegex(),Um=St(lc,"gu").replace(/notPunctSpace/g,Im).replace(/punctSpace/g,Dm).replace(/punct/g,oc).getRegex(),Vm=St("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ac).replace(/punctSpace/g,sn).replace(/punct/g,No).getRegex(),qm=St(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,sc).getRegex(),Wm="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Hm=St(Wm,"gu").replace(/notPunctSpace/g,Pm).replace(/punctSpace/g,Om).replace(/punct/g,sc).getRegex(),jm=St(/\\(punct)/,"gu").replace(/punct/g,No).getRegex(),Km=St(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Gm=St(an).replace("(?:-->|$)","-->").getRegex(),Xm=St("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Gm).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),bo=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Zm=St(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",bo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),cc=St(/^!?\[(label)\]\[(ref)\]/).replace("label",bo).replace("ref",rn).getRegex(),dc=St(/^!?\[(ref)\](?:\[\])?/).replace("ref",rn).getRegex(),Ym=St("reflink|nolink(?!\\()","g").replace("reflink",cc).replace("nolink",dc).getRegex(),Yn=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,nn={_backpedal:li,anyPunctuation:jm,autolink:Km,blockSkip:Fm,br:ic,code:Am,del:li,delLDelim:li,delRDelim:li,emStrongLDelim:Nm,emStrongRDelimAst:Mm,emStrongRDelimUnd:Vm,escape:zm,link:Zm,nolink:dc,punctuation:Rm,reflink:cc,reflinkSearch:Ym,tag:Xm,text:Tm,url:li},Qm={...nn,link:St(/^!?\[(label)\]\((.*?)\)/).replace("label",bo).getRegex(),reflink:St(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",bo).getRegex()},Ds={...nn,emStrongRDelimAst:Um,emStrongLDelim:Bm,delLDelim:qm,delRDelim:Hm,url:St(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Yn).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:St(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Yn).getRegex()},Jm={...Ds,br:St(ic).replace("{2,}","*").getRegex(),text:St(Ds.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ya={normal:on,gfm:$m,pedantic:Lm},la={normal:nn,gfm:Ds,breaks:Jm,pedantic:Qm},tg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qn=t=>tg[t];function hr(t,e){if(e){if(ge.escapeTest.test(t))return t.replace(ge.escapeReplace,Qn)}else if(ge.escapeTestNoEncode.test(t))return t.replace(ge.escapeReplaceNoEncode,Qn);return t}function Jn(t){try{t=encodeURI(t).replace(ge.percentDecode,"%")}catch{return null}return t}function tl(t,e){let r=t.replace(ge.findPipe,(o,s,n)=>{let l=!1,d=s;for(;--d>=0&&n[d]==="\\";)l=!l;return l?"|":" |"}),i=r.split(ge.splitPipe),a=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;a<i.length;a++)i[a]=i[a].trim().replace(ge.slashPipe,"|");return i}function ca(t,e,r){let i=t.length;if(i===0)return"";let a=0;for(;a<i&&t.charAt(i-a-1)===e;)a++;return t.slice(0,i-a)}function eg(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])r++;else if(t[i]===e[1]&&(r--,r<0))return i;return r>0?-2:-1}function rg(t,e=0){let r=e,i="";for(let a of t)if(a==="	"){let o=4-r%4;i+=" ".repeat(o),r+=o}else i+=a,r++;return i}function el(t,e,r,i,a){let o=e.href,s=e.title||null,n=t[1].replace(a.other.outputLinkReplace,"$1");i.state.inLink=!0;let l={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:o,title:s,text:n,tokens:i.inlineTokens(n)};return i.state.inLink=!1,l}function ig(t,e,r){let i=t.match(r.other.indentCodeCompensation);if(i===null)return e;let a=i[1];return e.split(`
`).map(o=>{let s=o.match(r.other.beginningSpace);if(s===null)return o;let[n]=s;return n.length>=a.length?o.slice(a.length):o}).join(`
`)}var wo=class{options;rules;lexer;constructor(t){this.options=t||$i}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:ca(r,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let r=e[0],i=ig(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let i=ca(r,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(r=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:ca(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let r=ca(e[0],`
`).split(`
`),i="",a="",o=[];for(;r.length>0;){let s=!1,n=[],l;for(l=0;l<r.length;l++)if(this.rules.other.blockquoteStart.test(r[l]))n.push(r[l]),s=!0;else if(!s)n.push(r[l]);else break;r=r.slice(l);let d=n.join(`
`),u=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${d}`:d,a=a?`${a}
${u}`:u;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=m,r.length===0)break;let b=o.at(-1);if(b?.type==="code")break;if(b?.type==="blockquote"){let p=b,v=p.raw+`
`+r.join(`
`),w=this.blockquote(v);o[o.length-1]=w,i=i.substring(0,i.length-p.raw.length)+w.raw,a=a.substring(0,a.length-p.text.length)+w.text;break}else if(b?.type==="list"){let p=b,v=p.raw+`
`+r.join(`
`),w=this.list(v);o[o.length-1]=w,i=i.substring(0,i.length-b.raw.length)+w.raw,a=a.substring(0,a.length-p.raw.length)+w.raw,r=v.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:o,text:a}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r=e[1].trim(),i=r.length>1,a={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");let o=this.rules.other.listItemRegex(r),s=!1;for(;t;){let l=!1,d="",u="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;d=e[0],t=t.substring(d.length);let m=rg(e[2].split(`
`,1)[0],e[1].length),b=t.split(`
`,1)[0],p=!m.trim(),v=0;if(this.options.pedantic?(v=2,u=m.trimStart()):p?v=e[1].length+1:(v=m.search(this.rules.other.nonSpaceChar),v=v>4?1:v,u=m.slice(v),v+=e[1].length),p&&this.rules.other.blankLine.test(b)&&(d+=b+`
`,t=t.substring(b.length+1),l=!0),!l){let w=this.rules.other.nextBulletRegex(v),x=this.rules.other.hrRegex(v),y=this.rules.other.fencesBeginRegex(v),k=this.rules.other.headingBeginRegex(v),_=this.rules.other.htmlBeginRegex(v),z=this.rules.other.blockquoteBeginRegex(v);for(;t;){let L=t.split(`
`,1)[0],P;if(b=L,this.options.pedantic?(b=b.replace(this.rules.other.listReplaceNesting,"  "),P=b):P=b.replace(this.rules.other.tabCharGlobal,"    "),y.test(b)||k.test(b)||_.test(b)||z.test(b)||w.test(b)||x.test(b))break;if(P.search(this.rules.other.nonSpaceChar)>=v||!b.trim())u+=`
`+P.slice(v);else{if(p||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||y.test(m)||k.test(m)||x.test(m))break;u+=`
`+b}p=!b.trim(),d+=L+`
`,t=t.substring(L.length+1),m=P.slice(v)}}a.loose||(s?a.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(s=!0)),a.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),a.raw+=d}let n=a.items.at(-1);if(n)n.raw=n.raw.trimEnd(),n.text=n.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let l of a.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let d=this.rules.other.listTaskCheckbox.exec(l.raw);if(d){let u={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};l.checked=u.checked,a.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=u.raw+l.tokens[0].raw,l.tokens[0].text=u.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(u)):l.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):l.tokens.unshift(u)}}if(!a.loose){let d=l.tokens.filter(m=>m.type==="space"),u=d.length>0&&d.some(m=>this.rules.other.anyLine.test(m.raw));a.loose=u}}if(a.loose)for(let l of a.items){l.loose=!0;for(let d of l.tokens)d.type==="text"&&(d.type="paragraph")}return a}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:i,title:a}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=tl(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===i.length){for(let s of i)this.rules.other.tableAlignRight.test(s)?o.align.push("right"):this.rules.other.tableAlignCenter.test(s)?o.align.push("center"):this.rules.other.tableAlignLeft.test(s)?o.align.push("left"):o.align.push(null);for(let s=0;s<r.length;s++)o.header.push({text:r[s],tokens:this.lexer.inline(r[s]),header:!0,align:o.align[s]});for(let s of a)o.rows.push(tl(s,o.header.length).map((n,l)=>({text:n,tokens:this.lexer.inline(n),header:!1,align:o.align[l]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let o=ca(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{let o=eg(e[2],"()");if(o===-2)return;if(o>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let i=e[2],a="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(i);o&&(i=o[1],a=o[3])}else a=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i=i.slice(1):i=i.slice(1,-1)),el(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let i=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=e[i.toLowerCase()];if(!a){let o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return el(r,a,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!(!i||i[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[2])||!r||this.rules.inline.punctuation.exec(r))){let a=[...i[0]].length-1,o,s,n=a,l=0,d=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,e=e.slice(-1*t.length+a);(i=d.exec(e))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(s=[...o].length,i[3]||i[4]){n+=s;continue}else if((i[5]||i[6])&&a%3&&!((a+s)%3)){l+=s;continue}if(n-=s,n>0)continue;s=Math.min(s,s+n+l);let u=[...i[0]][0].length,m=t.slice(0,a+i.index+u+s);if(Math.min(a,s)%2){let p=m.slice(1,-1);return{type:"em",raw:m,text:p,tokens:this.lexer.inlineTokens(p)}}let b=m.slice(2,-2);return{type:"strong",raw:m,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(r),a=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return i&&a&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,r=""){let i=this.rules.inline.delLDelim.exec(t);if(i&&(!i[1]||!r||this.rules.inline.punctuation.exec(r))){let a=[...i[0]].length-1,o,s,n=a,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*t.length+a);(i=l.exec(e))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o||(s=[...o].length,s!==a))continue;if(i[3]||i[4]){n+=s;continue}if(n-=s,n>0)continue;s=Math.min(s,s+n);let d=[...i[0]][0].length,u=t.slice(0,a+i.index+d+s),m=u.slice(a,-a);return{type:"del",raw:u,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let r,i;return e[2]==="@"?(r=e[1],i="mailto:"+r):(r=e[1],i=r),{type:"link",raw:e[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let r,i;if(e[2]==="@")r=e[0],i="mailto:"+r;else{let a;do a=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(a!==e[0]);r=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},Ze=class Is{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$i,this.options.tokenizer=this.options.tokenizer||new wo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:ge,block:Ya.normal,inline:la.normal};this.options.pedantic?(r.block=Ya.pedantic,r.inline=la.pedantic):this.options.gfm&&(r.block=Ya.gfm,this.options.breaks?r.inline=la.breaks:r.inline=la.gfm),this.tokenizer.rules=r}static get rules(){return{block:Ya,inline:la}}static lex(e,r){return new Is(r).lex(e)}static lexInline(e,r){return new Is(r).inlineTokens(e)}lex(e){e=e.replace(ge.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let i=this.inlineQueue[r];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],i=!1){for(this.options.pedantic&&(e=e.replace(ge.tabCharGlobal,"    ").replace(ge.spaceLine,""));e;){let a;if(this.options.extensions?.block?.some(s=>(a=s.call({lexer:this},e,r))?(e=e.substring(a.raw.length),r.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);let s=r.at(-1);a.raw.length===1&&s!==void 0?s.raw+=`
`:r.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);let s=r.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+a.raw,s.text+=`
`+a.text,this.inlineQueue.at(-1).src=s.text):r.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);let s=r.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+a.raw,s.text+=`
`+a.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},r.push(a));continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),r.push(a);continue}let o=e;if(this.options.extensions?.startBlock){let s=1/0,n=e.slice(1),l;this.options.extensions.startBlock.forEach(d=>{l=d.call({lexer:this},n),typeof l=="number"&&l>=0&&(s=Math.min(s,l))}),s<1/0&&s>=0&&(o=e.substring(0,s+1))}if(this.state.top&&(a=this.tokenizer.paragraph(o))){let s=r.at(-1);i&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+a.raw,s.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):r.push(a),i=o.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);let s=r.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+a.raw,s.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):r.push(a);continue}if(e){let s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let i=e,a=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)l.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,a.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(a=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)o=a[2]?a[2].length:0,i=i.slice(0,a.index+o)+"["+"a".repeat(a[0].length-o-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let s=!1,n="";for(;e;){s||(n=""),s=!1;let l;if(this.options.extensions?.inline?.some(u=>(l=u.call({lexer:this},e,r))?(e=e.substring(l.raw.length),r.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let u=r.at(-1);l.type==="text"&&u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):r.push(l);continue}if(l=this.tokenizer.emStrong(e,i,n)){e=e.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.del(e,i,n)){e=e.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),r.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),r.push(l);continue}let d=e;if(this.options.extensions?.startInline){let u=1/0,m=e.slice(1),b;this.options.extensions.startInline.forEach(p=>{b=p.call({lexer:this},m),typeof b=="number"&&b>=0&&(u=Math.min(u,b))}),u<1/0&&u>=0&&(d=e.substring(0,u+1))}if(l=this.tokenizer.inlineText(d)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(n=l.raw.slice(-1)),s=!0;let u=r.at(-1);u?.type==="text"?(u.raw+=l.raw,u.text+=l.text):r.push(l);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return r}},vo=class{options;parser;constructor(t){this.options=t||$i}space(t){return""}code({text:t,lang:e,escaped:r}){let i=(e||"").match(ge.notSpaceStart)?.[0],a=t.replace(ge.endingNewline,"")+`
`;return i?'<pre><code class="language-'+hr(i)+'">'+(r?a:hr(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:hr(a,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,r=t.start,i="";for(let s=0;s<t.items.length;s++){let n=t.items[s];i+=this.listitem(n)}let a=e?"ol":"ul",o=e&&r!==1?' start="'+r+'"':"";return"<"+a+o+`>
`+i+"</"+a+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let a=0;a<t.header.length;a++)r+=this.tablecell(t.header[a]);e+=this.tablerow({text:r});let i="";for(let a=0;a<t.rows.length;a++){let o=t.rows[a];r="";for(let s=0;s<o.length;s++)r+=this.tablecell(o[s]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${hr(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){let i=this.parser.parseInline(r),a=Jn(t);if(a===null)return i;t=a;let o='<a href="'+t+'"';return e&&(o+=' title="'+hr(e)+'"'),o+=">"+i+"</a>",o}image({href:t,title:e,text:r,tokens:i}){i&&(r=this.parser.parseInline(i,this.parser.textRenderer));let a=Jn(t);if(a===null)return hr(r);t=a;let o=`<img src="${t}" alt="${hr(r)}"`;return e&&(o+=` title="${hr(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:hr(t.text)}},ln=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},Ye=class Os{options;renderer;textRenderer;constructor(e){this.options=e||$i,this.options.renderer=this.options.renderer||new vo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ln}static parse(e,r){return new Os(r).parse(e)}static parseInline(e,r){return new Os(r).parseInline(e)}parse(e){let r="";for(let i=0;i<e.length;i++){let a=e[i];if(this.options.extensions?.renderers?.[a.type]){let s=a,n=this.options.extensions.renderers[s.type].call({parser:this},s);if(n!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(s.type)){r+=n||"";continue}}let o=a;switch(o.type){case"space":{r+=this.renderer.space(o);break}case"hr":{r+=this.renderer.hr(o);break}case"heading":{r+=this.renderer.heading(o);break}case"code":{r+=this.renderer.code(o);break}case"table":{r+=this.renderer.table(o);break}case"blockquote":{r+=this.renderer.blockquote(o);break}case"list":{r+=this.renderer.list(o);break}case"checkbox":{r+=this.renderer.checkbox(o);break}case"html":{r+=this.renderer.html(o);break}case"def":{r+=this.renderer.def(o);break}case"paragraph":{r+=this.renderer.paragraph(o);break}case"text":{r+=this.renderer.text(o);break}default:{let s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(e,r=this.renderer){let i="";for(let a=0;a<e.length;a++){let o=e[a];if(this.options.extensions?.renderers?.[o.type]){let n=this.options.extensions.renderers[o.type].call({parser:this},o);if(n!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=n||"";continue}}let s=o;switch(s.type){case"escape":{i+=r.text(s);break}case"html":{i+=r.html(s);break}case"link":{i+=r.link(s);break}case"image":{i+=r.image(s);break}case"checkbox":{i+=r.checkbox(s);break}case"strong":{i+=r.strong(s);break}case"em":{i+=r.em(s);break}case"codespan":{i+=r.codespan(s);break}case"br":{i+=r.br(s);break}case"del":{i+=r.del(s);break}case"text":{i+=r.text(s);break}default:{let n='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(n),"";throw new Error(n)}}}return i}},ma=class{options;block;constructor(t){this.options=t||$i}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?Ze.lex:Ze.lexInline}provideParser(){return this.block?Ye.parse:Ye.parseInline}},ag=class{defaults=Js();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ye;Renderer=vo;TextRenderer=ln;Lexer=Ze;Tokenizer=wo;Hooks=ma;constructor(...t){this.use(...t)}walkTokens(t,e){let r=[];for(let i of t)switch(r=r.concat(e.call(this,i)),i.type){case"table":{let a=i;for(let o of a.header)r=r.concat(this.walkTokens(o.tokens,e));for(let o of a.rows)for(let s of o)r=r.concat(this.walkTokens(s.tokens,e));break}case"list":{let a=i;r=r.concat(this.walkTokens(a.items,e));break}default:{let a=i;this.defaults.extensions?.childTokens?.[a.type]?this.defaults.extensions.childTokens[a.type].forEach(o=>{let s=a[o].flat(1/0);r=r.concat(this.walkTokens(s,e))}):a.tokens&&(r=r.concat(this.walkTokens(a.tokens,e)))}}return r}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let o=e.renderers[a.name];o?e.renderers[a.name]=function(...s){let n=a.renderer.apply(this,s);return n===!1&&(n=o.apply(this,s)),n}:e.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[a.level];o?o.unshift(a.tokenizer):e[a.level]=[a.tokenizer],a.start&&(a.level==="block"?e.startBlock?e.startBlock.push(a.start):e.startBlock=[a.start]:a.level==="inline"&&(e.startInline?e.startInline.push(a.start):e.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(e.childTokens[a.name]=a.childTokens)}),i.extensions=e),r.renderer){let a=this.defaults.renderer||new vo(this.defaults);for(let o in r.renderer){if(!(o in a))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let s=o,n=r.renderer[s],l=a[s];a[s]=(...d)=>{let u=n.apply(a,d);return u===!1&&(u=l.apply(a,d)),u||""}}i.renderer=a}if(r.tokenizer){let a=this.defaults.tokenizer||new wo(this.defaults);for(let o in r.tokenizer){if(!(o in a))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let s=o,n=r.tokenizer[s],l=a[s];a[s]=(...d)=>{let u=n.apply(a,d);return u===!1&&(u=l.apply(a,d)),u}}i.tokenizer=a}if(r.hooks){let a=this.defaults.hooks||new ma;for(let o in r.hooks){if(!(o in a))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let s=o,n=r.hooks[s],l=a[s];ma.passThroughHooks.has(o)?a[s]=d=>{if(this.defaults.async&&ma.passThroughHooksRespectAsync.has(o))return(async()=>{let m=await n.call(a,d);return l.call(a,m)})();let u=n.call(a,d);return l.call(a,u)}:a[s]=(...d)=>{if(this.defaults.async)return(async()=>{let m=await n.apply(a,d);return m===!1&&(m=await l.apply(a,d)),m})();let u=n.apply(a,d);return u===!1&&(u=l.apply(a,d)),u}}i.hooks=a}if(r.walkTokens){let a=this.defaults.walkTokens,o=r.walkTokens;i.walkTokens=function(s){let n=[];return n.push(o.call(this,s)),a&&(n=n.concat(a.call(this,s))),n}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Ze.lex(t,e??this.defaults)}parser(t,e){return Ye.parse(t,e??this.defaults)}parseMarkdown(t){return(e,r)=>{let i={...r},a={...this.defaults,...i},o=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&i.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=t),a.async)return(async()=>{let s=a.hooks?await a.hooks.preprocess(e):e,n=await(a.hooks?await a.hooks.provideLexer():t?Ze.lex:Ze.lexInline)(s,a),l=a.hooks?await a.hooks.processAllTokens(n):n;a.walkTokens&&await Promise.all(this.walkTokens(l,a.walkTokens));let d=await(a.hooks?await a.hooks.provideParser():t?Ye.parse:Ye.parseInline)(l,a);return a.hooks?await a.hooks.postprocess(d):d})().catch(o);try{a.hooks&&(e=a.hooks.preprocess(e));let s=(a.hooks?a.hooks.provideLexer():t?Ze.lex:Ze.lexInline)(e,a);a.hooks&&(s=a.hooks.processAllTokens(s)),a.walkTokens&&this.walkTokens(s,a.walkTokens);let n=(a.hooks?a.hooks.provideParser():t?Ye.parse:Ye.parseInline)(s,a);return a.hooks&&(n=a.hooks.postprocess(n)),n}catch(s){return o(s)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let i="<p>An error occurred:</p><pre>"+hr(r.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(r);throw r}}},bi=new ag;function Lt(t,e){return bi.parse(t,e)}Lt.options=Lt.setOptions=function(t){return bi.setOptions(t),Lt.defaults=bi.defaults,Jl(Lt.defaults),Lt};Lt.getDefaults=Js;Lt.defaults=$i;Lt.use=function(...t){return bi.use(...t),Lt.defaults=bi.defaults,Jl(Lt.defaults),Lt};Lt.walkTokens=function(t,e){return bi.walkTokens(t,e)};Lt.parseInline=bi.parseInline;Lt.Parser=Ye;Lt.parser=Ye.parse;Lt.Renderer=vo;Lt.TextRenderer=ln;Lt.Lexer=Ze;Lt.lexer=Ze.lex;Lt.Tokenizer=wo;Lt.Hooks=ma;Lt.parse=Lt;Lt.options;Lt.setOptions;Lt.use;Lt.walkTokens;Lt.parseInline;Ye.parse;Ze.lex;var rl={name:"@kispace-io/app",version:"1.3.8",description:"An IDE for working with geospatial data.",dependencies:{"@eclipse-lyra/core":"0.7.55","@eclipse-lyra/extension-python-runtime":"0.7.55","@eclipse-lyra/extension-utils":"0.7.55","@eclipse-lyra/extension-in-browser-ml":"0.7.55","@eclipse-lyra/extension-ai-system":"0.7.55","@eclipse-lyra/extension-command-palette":"0.7.55","@eclipse-lyra/extension-github-service":"0.7.55","@eclipse-lyra/extension-howto-system":"0.7.55","@eclipse-lyra/extension-md-editor":"0.7.55","@eclipse-lyra/extension-media-viewer":"0.7.55","@eclipse-lyra/extension-memory-usage":"0.7.55","@eclipse-lyra/extension-monaco-editor":"0.7.55","@eclipse-lyra/extension-notebook":"0.7.55","@eclipse-lyra/extension-settings-tree":"0.7.55","@eclipse-lyra/extension-sqleditor":"0.7.55","@eclipse-lyra/extension-duckdb":"0.7.55","@eclipse-lyra/extension-pglite":"0.7.55","@eclipse-lyra/extension-dataviewer":"0.7.55","@eclipse-lyra/extension-catalog":"0.7.55","@kispace-io/extension-gtfs":"0.0.0","@kispace-io/extension-map-editor":"0.0.0","@kispace-io/extension-mapbuilder":"0.0.0","@kispace-io/extension-mapprops":"0.0.0","@kispace-io/extension-overpass":"0.0.0","@kispace-io/extension-style-editor":"0.0.0","@kispace-io/extension-routing":"0.0.0","@kispace-io/gs-lib":"1.3.8","font-gis":"1.0.6"}},da;const hc="app-toolbars-main",Ji="app-toolbars-main-right",uc="app-toolbars-main-center",pc="app-toolbars-bottom",Bo="app-toolbars-bottom-center",Ra="app-toolbars-bottom-end",fc="system-views",yo="system.layouts",_a="editor-area-main",xo="sidebar-main",mc="sidebar-main-bottom",gc="sidebar-auxiliary",cn="panel-bottom",og="command-save",bc=!1;var dn=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(dn||{});const sg=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:og,EDITOR_AREA_MAIN:_a,HIDE_DOT_RESOURCE:bc,MouseButton:dn,PANEL_BOTTOM:cn,SIDEBAR_AUXILIARY:gc,SIDEBAR_MAIN:xo,SIDEBAR_MAIN_BOTTOM:mc,SYSTEM_LAYOUTS:yo,SYSTEM_VIEWS:fc,TOOLBAR_BOTTOM:pc,TOOLBAR_BOTTOM_CENTER:Bo,TOOLBAR_BOTTOM_END:Ra,TOOLBAR_MAIN:hc,TOOLBAR_MAIN_CENTER:uc,TOOLBAR_MAIN_RIGHT:Ji},Symbol.toStringTag,{value:"Module"})),ng="eclipse-lyra-persistence",ga="keyval",lg=1;let cs=null;function il(){return cs||(cs=new Promise((t,e)=>{const r=indexedDB.open(ng,lg);r.onerror=()=>e(r.error),r.onsuccess=()=>t(r.result),r.onupgradeneeded=i=>{i.target.result.createObjectStore(ga)}})),cs}class cg{async persistObject(e,r){const i=await il();return new Promise((a,o)=>{const n=i.transaction(ga,"readwrite").objectStore(ga),l=r==null?n.delete(e):n.put(r,e);l.onsuccess=()=>a(),l.onerror=()=>o(l.error)})}async getObject(e){const r=await il();return new Promise((i,a)=>{const s=r.transaction(ga,"readonly").objectStore(ga).get(e);s.onsuccess=()=>i(s.result),s.onerror=()=>a(s.error)})}}const Qe=new cg;de.put("persistenceService",Qe);const zi=".geospace/settings.json",ds="dialogSettings",ci="events/settings/changed";function wc(t,e){if(e){for(const[r,i]of Object.entries(e))if(i&&typeof i=="object"){const a=t[r];a?.properties&&i.properties?wc(a.properties,i.properties):t[r]={...i,properties:i.properties?{...i.properties}:void 0}}}}class dg{constructor(){this.mergedSchema={type:"object",properties:{}}}async checkSettings(){this.appSettings||(this.appSettings=await Qe.getObject(zi),this.appSettings||(this.appSettings={},await Qe.persistObject(zi,this.appSettings)),vt(ci,this.appSettings))}registerSchema(e){const r=e.properties??(e.type==="object"?{}:void 0);r&&(this.mergedSchema.properties||(this.mergedSchema.properties={}),wc(this.mergedSchema.properties,r))}getCategories(){const e=this.mergedSchema.properties;return e?Object.entries(e).filter(([,r])=>r&&typeof r=="object").map(([r,i])=>({id:r,label:i.title??r,order:typeof i.order=="number"?i.order:0,schema:i})).sort((r,i)=>r.order-i.order):[]}getSchemaForCategory(e){return this.mergedSchema.properties?.[e]}getSchemaForSettingKey(e){const r=e.split(".").filter(Boolean);if(r.length===0)return this.mergedSchema;let i=this.mergedSchema;for(const a of r)if(i=i?.properties?.[a],!i)return;return i}traversePath(e,r,i){if(r.length===0)return null;let a=e;const o=r.length-1;for(let s=0;s<o;s++){const n=r[s];if(a[n]===void 0){if(!i)return null;a[n]={}}if(a[n]===null||typeof a[n]!="object")return null;a=a[n]}return{parent:a,key:r[o]}}async getAt(e){await this.checkSettings();const r=e.split(".").filter(Boolean);if(r.length===0)return this.appSettings;const i=this.traversePath(this.appSettings,r,!1);if(i)return i.parent[i.key]}async setAt(e,r){await this.checkSettings();const i=e.split(".").filter(Boolean);if(i.length===0)return;const a=this.traversePath(this.appSettings,i,!0);a&&(a.parent[a.key]=r,await Qe.persistObject(zi,this.appSettings),vt(ci,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,r){await this.checkSettings(),this.appSettings[e]=r,await Qe.persistObject(zi,this.appSettings),vt(ci,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await Qe.persistObject(zi,this.appSettings),vt(ci,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[ds]||{})[e]}async setDialogSetting(e,r){await this.checkSettings();const i=this.appSettings[ds]||{};i[e]=r,this.appSettings[ds]=i,await Qe.persistObject(zi,this.appSettings),vt(ci,this.appSettings)}}const Xt=new dg;de.put("appSettings",Xt);class hg{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Rs.set(this.updateCounter)}run(e,r){const i=this.createProgressMonitor(e);try{this.tasks.push(i),this.notifyUpdate(),r(i)}finally{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()}}async runAsync(e,r){const i=this.createProgressMonitor(e);return this.tasks.push(i),this.notifyUpdate(),r(i).finally(()=>{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()})}createProgressMonitor(e){const r={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(r,{set:(i,a,o)=>(i[a]=o,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const Qr=new hg;de.put("taskService",Qr);const ug=Pr("EsmShService"),Da=class Ie{isEsmShUrl(e){try{const r=new URL(e);return r.hostname==="esm.sh"||r.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(e){return this.isEsmShUrl(e)||this.isHttpUrl(e)?!1:this.parseSource(e)!==null}isHttpUrl(e){try{const r=new URL(e);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}parseSource(e){return!e||typeof e!="string"||(e=e.trim(),this.isHttpUrl(e))?null:e.startsWith(Ie.GITHUB_PREFIX)?this.parseGitHubSource(e):e.startsWith(Ie.JSR_PREFIX)?this.parseJsrSource(e):e.startsWith(Ie.PR_PREFIX)?this.parsePrSource(e):this.parseNpmSource(e)}parseGitHubSource(e){const i=e.substring(Ie.GITHUB_PREFIX.length).split("/");if(i.length<2)return null;const a=i[0],o=i[1];let s,n,l;const d=o.match(/^(.+?)(@(.+))?$/);return d?(s=d[1],n=d[3],i.length>2&&(l=i.slice(2).join("/")),{type:"github",owner:a,repo:s,version:n,path:l}):null}parseJsrSource(e){const r=e.substring(Ie.JSR_PREFIX.length);if(!r.startsWith("@"))return null;const i=r.split("/");if(i.length<2)return null;const a=i[0],o=i[1];let s,n,l;const d=o.match(/^(.+?)(@(.+))?$/);return d?(s=`${a}/${d[1]}`,n=d[3],i.length>2&&(l=i.slice(2).join("/")),{type:"jsr",package:s,version:n,path:l}):null}parsePrSource(e){const i=e.substring(Ie.PR_PREFIX.length).split("/");if(i.length<2)return null;const a=i[0],o=i[1];let s,n;const l=o.match(/^(.+?)@(.+)$/);return l?(s=l[1],n=l[2]):s=o,{type:"pr",owner:a,repo:s,commit:n}}parseNpmSource(e){const r=e.split("/"),i=r[0];let a,o,s;const n=i.match(/^(.+?)(@(.+))?$/);return n?(a=n[1],o=n[3],r.length>1&&(s=r.slice(1).join("/")),{type:"npm",package:a,version:o,path:s}):null}buildEsmShUrl(e,r){let i=Ie.ESM_SH_BASE;switch(e.type){case"npm":i+=`/${e.package}`,e.version&&(i+=`@${e.version}`),e.path&&(i+=`/${e.path}`);break;case"github":i+=`/${Ie.GITHUB_PREFIX}${e.owner}/${e.repo}`,e.version&&(i+=`@${e.version}`),e.path&&(i+=`/${e.path}`);break;case"jsr":i+=`/${Ie.JSR_PREFIX}${e.package}`,e.version&&(i+=`@${e.version}`),e.path&&(i+=`/${e.path}`);break;case"pr":i+=`/${Ie.PR_PREFIX}${e.owner}/${e.repo}`,e.commit&&(i+=`@${e.commit}`);break}const a=[];if(r?.deps){const o=Object.entries(r.deps).map(([s,n])=>`${s}@${n}`).join(",");a.push(`deps=${encodeURIComponent(o)}`)}return r?.target&&a.push(`target=${encodeURIComponent(r.target)}`),r?.dev&&a.push("dev"),r?.bundle===!1?a.push("bundle=false"):r?.bundle===!0&&a.push("bundle"),a.length>0&&(i+=`?${a.join("&")}`),i}normalizeToEsmSh(e,r){if(this.isEsmShUrl(e)||this.isHttpUrl(e))return e;const i=this.parseSource(e);return i?this.buildEsmShUrl(i,r):(ug.warn(`Could not parse source identifier: ${e}`),e)}extractPackageName(e){const r=this.parseSource(e);if(!r)return null;switch(r.type){case"npm":return r.package||null;case"github":return`${r.owner}/${r.repo}`;case"jsr":return r.package||null;case"pr":return`${r.owner}/${r.repo}`}}isGitHubUrl(e){try{const r=new URL(e);return r.hostname==="github.com"||r.hostname==="www.github.com"}catch{return e.startsWith("https://github.com/")||e.startsWith("http://github.com/")}}convertGitHubUrlToSource(e){try{const i=new URL(e).pathname.split("/").filter(d=>d);if(i.length<2)throw new Error("Invalid GitHub URL format");const a=i[0];let o=i[1].replace(/\.git$/,""),s,n;i.length>2&&(i[2]==="blob"||i[2]==="tree"?(s=i[3]||"main",i[2]==="blob"&&i.length>4&&(n=i.slice(4).join("/"))):i[2]==="commit"?s=i[3]:n=i.slice(2).join("/"));let l=`${Ie.GITHUB_PREFIX}${a}/${o}`;return s&&(l+=`@${s}`),n&&(l+=`/${n}`),l}catch{const r=e.match(/github\.com\/([^\/]+)\/([^\/]+)/);return r?`${Ie.GITHUB_PREFIX}${r[1]}/${r[2].replace(/\.git$/,"")}`:e}}async fetchGitHubPackageJson(e){if(e.type!=="github")throw new Error("Source must be a GitHub source");const r=e.owner,i=e.repo,a=e.version||"main",o=`https://raw.githubusercontent.com/${r}/${i}/${a}/package.json`,s=await fetch(o);if(!s.ok)throw new Error(`Failed to fetch package.json: ${s.statusText}`);return await s.json()}};Da.ESM_SH_BASE="https://esm.sh";Da.GITHUB_PREFIX="gh/";Da.JSR_PREFIX="jsr/";Da.PR_PREFIX="pr/";let pg=Da;const pr=new pg;de.put("esmShService",pr);const ba="events/extensionsregistry/extensionsConfigChanged",ha="extensions",al="extensions.external";class fg{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,we(ci,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then()})}async loadPersistedExternalExtensions(){try{const e=await Xt.get(al);e&&Array.isArray(e)&&e.forEach(r=>{this.extensions[r.id]=r})}catch(e){Tt.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(r=>r.external);await Xt.set(al,e)}catch(e){Tt.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Xt.get(ha),this.extensionsSettings||(await Xt.set(ha,[]),this.extensionsSettings=await Xt.get(ha)),vt(ba,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,Tt.debug(`Registered extension: ${e.id}`),e.external&&this.savePersistedExternalExtensions().catch(r=>{Tt.error(`Failed to persist external extension: ${r}`)}),vt(ba,this.extensionsSettings)}async loadExtensionFromUrl(e,r){Tt.info(`Loading extension from URL: ${e}...`);try{let i=e,a=`Extension from ${e}`;if(pr.isSourceIdentifier(e)){const s=pr.extractPackageName(e);s&&(a=`Extension: ${s}`),i=pr.normalizeToEsmSh(e),Tt.debug(`Converted source identifier to esm.sh URL: ${e} -> ${i}`)}const o=r||`url:${i}`;if(this.isEnabled(o))return Tt.info(`Extension from URL ${i} is already enabled`),o;if(!this.extensions[o]){const s={id:o,name:a,description:`Extension loaded from: ${e}`,url:i};this.registerExtension(s),Tt.info(`Registered extension from URL: ${o}`)}return this.enable(o,!1),Tt.info(`Successfully enabled extension from URL: ${i}`),o}catch(i){throw Tt.error(`Failed to load extension from URL ${e}: ${i}`),i}}getExtensions(){return Object.values(this.extensions)}async loadEnabledExtensions(){await this.checkExtensionsConfig();const r=(this.extensionsSettings??[]).filter(i=>this.isEnabled(i.id)&&this.extensions[i.id]).map(i=>this.load(i.id).catch(a=>{ot("Extension could not be loaded: "+a.message)}));await Promise.all(r)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(r=>r.id===e&&r.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,r=!1){this.isEnabled(e)||(Tt.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,r)}).catch(i=>{Tt.error(`Could not load extension: ${e}: ${i}`)}))}async enableAsync(e,r=!1){if(!this.isEnabled(e)){Tt.debug(`Loading extension: ${e}`);try{await this.load(e),this.updateEnablement(e,!0,r)}catch(i){throw Tt.error(`Could not load extension: ${e}: ${i}`),i}}}async load(e,r=[]){if(this.loadedExtensions.has(e))return;const i=this.loadingPromises.get(e);if(i)return i;if(r.includes(e)){const s=[...r,e].join(" → ");throw new Error(`Circular dependency detected: ${s}`)}const a=this.extensions[e];if(!a)throw new Error("Extension not found: "+e);const o=(async()=>{try{if(Tt.debug(`Loading extension: ${e}`),a.dependencies&&a.dependencies.length>0){const n=[...r,e];for(const l of a.dependencies)await this.load(l,n),this.isEnabled(l)||(await this.updateEnablementAsync(l,!0,!1),Tt.debug(`Auto-enabled dependency: ${l}`))}const s=await Qr.runAsync("Loading extension: "+a.name,async()=>{if(a.loader)return a.loader();if(a.url){let n=a.url;return pr.isSourceIdentifier(a.url)&&(n=pr.normalizeToEsmSh(a.url),Tt.debug(`Normalized extension URL: ${a.url} -> ${n}`)),import(n)}});if(this.loadedExtensions.add(e),s?.default instanceof Function)try{s.default(ai.getProxy())}catch(n){throw Tt.error(`Error executing extension function for ${e}: ${n}`),n}}catch(s){throw this.loadedExtensions.delete(e),s}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,o),o}disable(e,r=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,r)}updateEnablement(e,r,i){this.checkExtensionsConfig().then(()=>{const a=this.extensionsSettings?.find(o=>o.id==e);a?a.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),Xt.set(ha,this.extensionsSettings).then(()=>{if(i){const o=this.extensions[e];ie(r?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}vt(ba,this.extensionsSettings)})})}async updateEnablementAsync(e,r,i){await this.checkExtensionsConfig();const a=this.extensionsSettings?.find(o=>o.id==e);if(a?a.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),await Xt.set(ha,this.extensionsSettings),i){const o=this.extensions[e];ie(r?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}vt(ba,this.extensionsSettings)}}const Wt=new fg;de.put("extensionRegistry",Wt);const ol=["alt","ctrl","meta","shift"],vc={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},mg={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},gg={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},bg=new Set(Object.keys(vc));function sl(t){return gg[t]??t}class wg{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),we(Yl,e=>{e.keyBinding&&this.registerKeyBinding(e.id,e.keyBinding)})}registerExistingCommandBindings(){const e=zr.listCommands();Object.values(e).forEach(r=>{r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)})}parseKeyBinding(e){if(!e||e.trim()==="")return null;const r=e.toUpperCase().split("+").map(s=>s.trim());if(r.length===0)return null;const i=r[r.length-1],a=r.slice(0,-1);if(r.length===1&&bg.has(i))return null;const o={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const s of a){const n=vc[s];if(n===void 0)return null;o[n]=!0}return o.key=sl(i),o}getBindingKey(e){return[...ol.filter(i=>e[i]),e.key.toUpperCase()].join("+")}registerKeyBinding(e,r){const i=this.parseKeyBinding(r);if(!i)return Tt.error(`Invalid key binding: ${r}`),!1;i.commandId=e;const a=this.getBindingKey(i);this.bindings.has(a)||this.bindings.set(a,[]);const o=this.bindings.get(a);if(o.find(l=>l.commandId===e))return Tt.error(`Key binding ${r} already registered for command ${e}`),!1;const n=o.find(l=>l.commandId!==e);return n?(Tt.warn(`Key binding ${r} already used by command ${n.commandId}; refusing for ${e}`),!1):(o.push(i),!0)}unregisterKeyBinding(e,r){if(r){const i=this.parseKeyBinding(r);if(i){const a=this.getBindingKey(i),o=this.bindings.get(a);if(o){const s=o.filter(n=>n.commandId!==e);s.length===0?this.bindings.delete(a):this.bindings.set(a,s)}}}else for(const[i,a]of this.bindings.entries()){const o=a.filter(s=>s.commandId!==e);o.length===0?this.bindings.delete(i):this.bindings.set(i,o)}}getKeyBindingsForCommand(e){const r=[];for(const i of this.bindings.values())for(const a of i)a.commandId===e&&r.push(this.formatKeyBinding(a));return r.sort()}formatKeyBinding(e){const r=ol.filter(a=>e[a]).map(a=>mg[a]),i=e.key.length===1?e.key.toUpperCase():e.key.charAt(0).toUpperCase()+e.key.slice(1).toLowerCase();return r.push(i),r.join("+")}handleKeyDown(e){if(!this.enabled)return;const r={commandId:"",key:sl(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},i=this.getBindingKey(r),a=this.bindings.get(i);if(a&&a.length>0){const o=a[0];try{e.preventDefault(),e.stopPropagation();const s=zr.createExecutionContext({});zr.execute(o.commandId,s),Tt.debug(`Executed command via key binding: ${o.commandId}`)}catch(s){Tt.error(`Failed to execute command ${o.commandId}: ${s.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){const e=new Map;for(const[r,i]of this.bindings)e.set(r,[...i]);return e}clearAll(){this.bindings.clear()}}const yc=new wg;de.put("keyBindingManager",yc);class Fr extends Po{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let r=this;for(;r&&r!==document.body&&r!==document.documentElement;){const i=r.getAttribute("id");if(i){e.unshift(`#${i}`);break}const a=r.tagName.toLowerCase(),o=r.parentElement;if(!o)break;const n=Array.from(o.children).filter(l=>l.tagName.toLowerCase()===a).indexOf(r);n>=0?e.unshift(`${a}:${n}`):e.unshift(a),r=o}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),r=this.getAttribute("id");if(r){this.settingsKey=`${e}:${r}`;return}const i=this.buildDOMTreePath();i&&(this.settingsKey=`${e}:${i}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await Xt.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await Xt.setDialogSetting(this.settingsKey,e)}}const xc=class extends Fr{dispose(){}getResult(){}renderMessage(e,r=!1){if(r){const i=Lt.parse(e,{async:!1});return S`<div class="dialog-message" style="white-space: normal;">${Lr(i)}</div>`}return S`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};xc.styles=[J`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let Nr=xc;const si=Pr("DialogService"),wi="dialogs",Ia={id:"ok",label:"OK",variant:"primary"},hn={id:"cancel",label:"Cancel",variant:"default"},vg={id:"close",label:"Close",variant:"default"};let Ai=null;function yg(){return(!Ai||!document.body.contains(Ai))&&(Ai=document.createElement("div"),Ai.id="global-dialog-container",document.body.appendChild(Ai)),Ai}class xg{constructor(){this.contributions=new Map,this.contributionsChangeScheduled=!1,this.loadContributions(),we(nr,e=>{e.target===wi&&(this.contributionsChangeScheduled||(this.contributionsChangeScheduled=!0,queueMicrotask(()=>{this.contributionsChangeScheduled=!1,this.loadContributions()})))})}loadContributions(){const e=mt.getContributions(wi);this.contributions.clear();for(const r of e){if(!r.id){si.warn("Dialog contribution missing id, skipping");continue}if(!r.component){si.warn(`Dialog contribution "${r.id}" has no component function, skipping`);continue}if(!r.onButton){si.warn(`Dialog contribution "${r.id}" has no onButton callback, skipping`);continue}this.contributions.set(r.id,r)}}async open(e,r){const i=this.contributions.get(e);if(!i)throw si.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(a=>{const o=yg();let s=!0,n=null;const l=async()=>{if(s){if(s=!1,n)try{await n.dispose()}catch(p){const v=p instanceof Error?p.message:String(p);si.error(`Error disposing dialog content for "${e}": ${v}`)}try{const p=n?n.getResult():void 0;await i.onButton("close",p,m)}catch(p){const v=p instanceof Error?p.message:String(p);si.error(`Error executing close callback for dialog "${e}": ${v}`)}Je(S``,o),a()}},d=async p=>{try{const v=n?n.getResult():void 0;await i.onButton(p,v,m)!==!1&&l()}catch(v){const w=v instanceof Error?v.message:String(v);si.error(`Error executing button callback for dialog "${e}": ${w}`),l()}},u=i.buttons&&i.buttons.length>0?i.buttons:[Ia];r&&typeof r=="object"&&(r.close=l);const m={...r,close:l},b=S`
                <wa-dialog label="${i.label||e}" open @wa-request-close=${l}>
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
                         @dialog-ok=${()=>{const p=u.find(v=>v.id==="ok");p&&d(p.id)}}
                         @dialog-cancel=${()=>{const p=u.find(v=>v.id==="cancel");p?d(p.id):l()}}>
                        ${i.component(r)}
                        
                        <div class="dialog-service-footer">
                            ${u.map(p=>S`
                                <wa-button 
                                    variant="${p.variant||"default"}"
                                    ?disabled=${p.disabled}
                                    @click=${()=>d(p.id)}
                                >
                                    ${p.label}
                                </wa-button>
                            `)}
                        </div>
                    </div>
                </wa-dialog>
            `;Je(b,o),(async()=>{const p=Array.from(o.querySelectorAll("*"));for(const v of p)if(v instanceof Nr){await v.updateComplete,n=v;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const Mo=new xg;de.put("dialogService",Mo);const Pe="events/filesys/workspaceChanged",_r="events/filesys/workspaceConnected",ue=Pr("WorkspaceService");class kc{constructor(){this.state={}}getWorkspacePath(){const e=[];let r=this,i;for(;r;){e.push(r.getName());const o=r.getParent();o||(i=r),r=o}e.reverse();const a=typeof pt?.getWorkspaceSync=="function"?pt.getWorkspaceSync():void 0;if(a&&i&&"isDirectChild"in a&&typeof a.isDirectChild=="function"&&a.isDirectChild(i)){const o=a.getFolderNameForDirectory(i);if(o&&e.length>0)return e.length>1?o+"/"+e.slice(1).join("/"):o}return e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const r=e.getParent();if(r)e=r;else break}return e}}var Oa=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(Oa||{}),Cc=(t=>(t[t.BASE64=0]="BASE64",t))(Cc||{});class Bt extends kc{}class Pt extends kc{}class hb extends Bt{constructor(e,r){super(),this.contents=e,this.name=r}async getContents(e){return this.contents}async saveContents(e,r){this.contents=e}async size(){return this.contents.length||null}async copyTo(e){throw Error("Not supported")}delete(e,r){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class kg extends Pt{constructor(e,r="/"){super(),this.displayName=r,this.entriesByName=new Map(e.map(i=>[i.getName(),i]))}getFolderNameForDirectory(e){for(const[r,i]of this.entriesByName)if(i===e)return r}isDirectChild(e){return this.getFolderNameForDirectory(e)!==void 0}getName(){return this.displayName}getParent(){}async listChildren(e){return Array.from(this.entriesByName.values())}async getResource(e,r){const i=e?.replace(/^\/+/,"").trim();if(!i)return null;const a=i.indexOf("/"),o=a>=0?i.slice(0,a).trim():i.trim(),s=a>=0?i.slice(a+1).trim():"",n=this.entriesByName.get(o);return n?s?n.getResource(s,r):n:null}touch(){for(const e of this.entriesByName.values())e.touch()}async delete(e,r){throw new Error("Delete not supported on workspace root")}async copyTo(e){throw new Error("Copy not supported on workspace root")}async rename(e){throw new Error("Rename not supported on workspace root")}getFolderByName(e){return this.entriesByName.get(e)}}class hs extends Pt{constructor(e){super(),this.backendType=e.backendType,this.persistedData=e.data,this.name=e.name}getName(){return this.name}getParent(){}async listChildren(e){return[]}async getResource(e,r){throw new Error(`Workspace backend "${this.backendType}" is not available in this environment.`)}touch(){}async delete(e,r){throw new Error(`Cannot modify workspace folder for missing backend "${this.backendType}".`)}async copyTo(e){throw new Error(`Cannot copy from workspace folder for missing backend "${this.backendType}".`)}async rename(e){throw new Error(`Cannot rename workspace folder for missing backend "${this.backendType}".`)}}const us="workspace_data",Sc=class Ec{constructor(){this._currentWorkspace=void 0,this.folders=[],this.contributions=new Map,this.restoredTypes=new Set;let e;this.initPromise=new Promise(r=>{e=r}),this.loadPersistedWorkspace(e)}getWorkspaceSync(){return this._currentWorkspace}registerContribution(e){this.contributions.set(e.type,e),this.tryRestoreForContribution(e)}getContributions(){return Array.from(this.contributions.values())}async tryRestoreForContribution(e){if(await this.initPromise,this.restoredTypes.has(e.type))return;if(this.folders.filter(n=>n.type===e.type).some(n=>!(n.directory instanceof hs))){this.restoredTypes.add(e.type);return}const a=await Qe.getObject(us);if(!a?.folders||!Array.isArray(a.folders)){this.restoredTypes.add(e.type);return}const o=a.folders.filter(n=>n.type===e.type);if(o.length===0){this.restoredTypes.add(e.type);return}this.folders=this.folders.filter(n=>!(n.type===e.type&&n.directory instanceof hs));for(const n of o)if(e.restore)try{const l=await e.restore(n.data);if(!l)continue;this.folders.push({type:e.type,data:n.data,directory:l})}catch(l){ue.warn(`Failed to restore folder (${e.type}) on contribution registration:`,l)}if(this.folders.length===0){this.restoredTypes.add(e.type);return}const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s??void 0,await this.persistFolders(),s&&(vt(_r,s),ue.debug(`Workspace folders restored for contribution type: ${e.type}`)),this.restoredTypes.add(e.type)}async loadPersistedWorkspace(e){ue.debug("Restoring workspace from persistence");try{const r=await Qe.getObject(us);if(r||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),r?.folders&&Array.isArray(r.folders)&&r.folders.length>0){const i=r.folders.map(o=>({type:o.type,data:o.data}));await this.resolveFolders(i);const a=this.buildComposite();this.workspace=Promise.resolve(a),this._currentWorkspace=a??void 0,a&&(vt(_r,a),ue.debug("Workspace restored from persisted folders")),e();return}if(r&&r.type&&r.data!==void 0){const i=this.contributions.get(r.type);if(i?.restore)try{const a=await i.restore(r.data);if(a){this.folders=[{type:r.type,data:r.data,directory:a}];const o=this.buildComposite();this.workspace=Promise.resolve(o),this._currentWorkspace=o??void 0,this.currentType=r.type,await this.persistFolders(),vt(_r,o),ue.debug("Workspace restored from legacy format")}}catch(a){ue.error("Failed to restore legacy workspace:",a)}}this.workspace||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),e()}finally{if(this.folders.length===0)try{await this.connectFolder({indexeddb:!0,name:Ec.DEFAULT_INDEXEDDB_FOLDER_NAME}),ue.debug("Connected default IndexedDB workspace")}catch(r){ue.warn("Failed to connect default IndexedDB folder",r)}}}async resolveFolders(e){this.folders=[];for(const r of e){const i=this.contributions.get(r.type);if(!i?.restore){const a=r.data&&typeof r.data=="object"&&r.data.name||`${r.type} (missing)`,o=new hs({backendType:r.type,name:a,data:r.data});this.folders.push({type:r.type,data:r.data,directory:o});continue}try{const a=await i.restore(r.data);a&&this.folders.push({type:r.type,data:r.data,directory:a})}catch(a){ue.warn(`Failed to restore folder (${r.type}):`,a)}}}buildComposite(){if(this.folders.length!==0)return new kg(this.folders.map(e=>e.directory))}async persistFolders(){const e=this.folders.length>0?{folders:this.folders.map(r=>({type:r.type,data:r.data}))}:null;await Qe.persistObject(us,e),await Qe.persistObject("workspace",null),ue.debug(`Persisted ${this.folders.length} folder(s)`)}async getFolders(){return await this.initPromise,this.folders.map(e=>({name:e.directory.getName(),type:e.type}))}async getFolderInfoForDirectory(e){await this.initPromise;const r=this.folders.find(s=>s.directory===e);if(!r)return;const i=r.data&&typeof r.data=="object"&&r.data.name||r.directory.getName(),o=this.contributions.get(r.type)?.name??r.type;return{name:i,type:r.type,backendName:o}}async updateFolderName(e,r){await this.initPromise;const i=this.folders.find(o=>o.directory===e);if(!i)return;i.data&&typeof i.data=="object"?i.data={...i.data,name:r}:i.data={name:r},await this.persistFolders();const a=this.buildComposite();this.workspace=Promise.resolve(a),this._currentWorkspace=a??void 0,vt(_r,a),ue.debug(`Updated folder name: ${r}`)}async connectFolder(e){await this.initPromise;const r=Array.from(this.contributions.values()).find(l=>l.canHandle(e));if(!r)throw new Error("No workspace contribution can handle this input");const i=e?.name??r.type;ue.debug(`Connecting workspace: ${r.type}, ${i}`);const a=await r.connect(e),o=r.persist?await r.persist(a):e;this.folders.push({type:r.type,data:o,directory:a}),await this.persistFolders(),this.currentType=this.folders.length===1?r.type:void 0;const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s,vt(_r,s);const n=a.getName();return ue.info(`Workspace connected: ${r.type} (${n})`),s}async disconnectFolder(e){await this.initPromise;const r=this.folders.findIndex(o=>o.directory===e);if(r<0)return;const i=this.folders[r];ue.debug(`Disconnecting folder: ${i.directory.getName()} (${i.type})`),this.folders.splice(r,1),await this.persistFolders(),this.folders.length>0?this.currentType=this.folders[0].type:(this.currentType=void 0,ue.info("Workspace disconnected"));const a=this.buildComposite();this.workspace=Promise.resolve(a),this._currentWorkspace=a??void 0,vt(_r,a)}async connectWorkspace(e){return this.connectFolder(e)}async getWorkspace(){if(await this.initPromise,!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return this.folders.length>0}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){await this.initPromise,this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0,this.folders=[],this.currentType=void 0,await this.persistFolders(),vt(_r,void 0),ue.info("Workspace disconnected")}async copyResource(e,r,i){await this.initPromise;const a=this._currentWorkspace;if(!a)throw new Error("No workspace connected.");const o=i?.newName??e.getName(),s=r.getWorkspacePath(),n=s?`${s}/${o}`:o,l=async(u,m)=>{const b=await u.getContents({blob:!0}),p=await a.getResource(m,{create:!0});if(!p)throw new Error(`Failed to create target file: ${m}`);await p.saveContents(b)},d=async(u,m)=>{for(const b of await u.listChildren(!1)){const p=`${m}/${b.getName()}`;b instanceof Bt?await l(b,p):b instanceof Pt&&await d(b,p)}};if(e instanceof Bt)await l(e,n);else if(e instanceof Pt)await d(e,n);else throw new Error("Unsupported resource type for copy operation.");i?.move&&await e.delete(void 0,!0)}};Sc.DEFAULT_INDEXEDDB_FOLDER_NAME="My Folder";let Cg=Sc;const pt=new Cg;de.put("workspaceService",pt);class Ps extends Bt{constructor(e,r){super(),this.fileHandle=e,this.parent=r}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const r=await this.fileHandle.getFile();return!e||e?.contentType==Oa.TEXT?await r.text():e?.encoding==Cc.BASE64||e?.uri?URL.createObjectURL(r):e?.blob?r:r.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,r){const i=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(i);else{const a=i.getWriter();try{await a.write(e)}finally{await a.close()}}}async copyTo(e){const r=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(r)}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(i){throw i.name==="NotAllowedError"||i.message?.includes("not allowed")||i.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):i}await r.listChildren(!0),vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}}}class fr extends Pt{constructor(e,r){super(),this.dirHandle=e,this.parent=r}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const r={};try{for await(const i of this.dirHandle.values()){const o=i.kind==="file"?new Ps(i,this):new fr(i,this);r[o.getName()]=o}}catch(i){if(i.name==="NotFoundError")return this.files={},[];throw i}return this.files=r,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,r){if(!e)throw new Error("No path provided");const i=e.split("/");let a=this,o=!1;try{for(let s=0;s<i.length;s++){let n=i[s];if(n&&(n=n.trim()),!n)break;if(a instanceof fr){if(await a.listChildren(),!a.files)return null;const l=a.files[n];if(l)a=l;else if(r?.create)if(o=!0,s<i.length-1)try{const d=await a.dirHandle.getDirectoryHandle(n,{create:!0}),u=new fr(d,a);a.files[n]=u,a=u,a instanceof fr&&await a.listChildren();continue}catch(d){throw d.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${i.slice(0,s+1).join("/")}`):d}else try{const d=await a.dirHandle.getFileHandle(n,{create:!0}),u=new Ps(d,a);return a.files[n]=u,u}catch(d){throw d.name==="NotFoundError"?new Error(`File not found or not accessible: ${i.join("/")}`):d}else return null}}}finally{o&&vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}return a}touch(){vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}async delete(e,r=!0){if(!e){const i=this.getParent();return i instanceof fr&&(await i.listChildren(),i.files&&delete i.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,i?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:r}).then(async()=>{this.files&&delete this.files[e],vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())})}async copyTo(e){for(const r of await this.listChildren()){const i=[e,r.getName()].join("/");await r.copyTo(i)}}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(i){throw i.name==="NotAllowedError"||i.message?.includes("not allowed")||i.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):i}await r.listChildren(!0),vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}}}pt.registerContribution({type:"filesystem",name:"fs",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new fr(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new fr(t,void 0)},async persist(t){return t instanceof fr?t.getHandle():null}});const nl=Object.freeze(Object.defineProperty({__proto__:null,FileSysDirHandleResource:fr,FileSysFileHandleResource:Ps},Symbol.toStringTag,{value:"Module"})),Sg=".opfs";async function ll(){if(typeof navigator>"u"||!navigator.storage?.getDirectory)throw new Error("OPFS is not available in this environment");return await navigator.storage.getDirectory()}class ps extends Pt{constructor(e){super(),this.inner=e}getName(){return Sg}getParent(){return this.inner.getParent()}async listChildren(e){return this.inner.listChildren(e)}async getResource(e,r){return this.inner.getResource(e,r)}touch(){this.inner.touch()}async delete(e,r){return this.inner.delete(e,r)}async copyTo(e){return this.inner.copyTo(e)}async rename(e){return this.inner.rename(e)}}pt.registerContribution({type:"opfs",name:"opfs",canHandle(t){return t&&typeof t=="object"&&t.opfs===!0},async connect(t){const e=await ll(),i=(await Promise.resolve().then(()=>nl)).FileSysDirHandleResource,a=new i(e);return new ps(a)},async restore(t){if(t&&typeof t=="object"&&t.opfs===!0){const e=await ll(),i=(await Promise.resolve().then(()=>nl)).FileSysDirHandleResource,a=new i(e);return new ps(a)}},async persist(t){return t instanceof ps?{opfs:!0}:null}});const Eg="eclipse-lyra-workspace-idb",$e="files";let fs=null;async function Jr(){if(typeof indexedDB>"u")throw new Error("IndexedDB is not available in this environment");return fs||(fs=new Promise((t,e)=>{const r=indexedDB.open(Eg,1);r.onerror=()=>e(r.error),r.onsuccess=()=>t(r.result),r.onupgradeneeded=i=>{const a=i.target.result;a.objectStoreNames.contains($e)||a.createObjectStore($e)}})),fs}async function _g(){const t="IndexedDB",e=await pt.getFolders(),r=new Set(e.filter(a=>a.type==="indexeddb").map(a=>a.name));if(!r.has(t))return t;let i=1;for(;r.has(`${t} (${i})`);)i+=1;return`${t} (${i})`}function Wi(t){return t?t.split("/").filter(Boolean).join("/"):""}function wa(t,e){const r=Wi(t),i=Wi(e);return r?i?`${r}/${i}`:r:i}function Hi(t,e){const r=Wi(e);return r?`${t}/${r}`:t}function $g(t,e){const r=Wi(e);return r?`${t}/${r}/`:`${t}/`}async function ro(t,e){const a=(await Jr()).transaction($e,"readonly").objectStore($e),o=e?Hi(t,e):t;return await new Promise((s,n)=>{const l=a.get(o);l.onsuccess=()=>s(l.result),l.onerror=()=>n(l.error)})}async function xa(t,e,r){const o=(await Jr()).transaction($e,"readwrite").objectStore($e),s=e?Hi(t,e):t;await new Promise((n,l)=>{const d=o.put(r,s);d.onsuccess=()=>n(),d.onerror=()=>l(d.error)})}async function cl(t,e){const a=(await Jr()).transaction($e,"readwrite").objectStore($e),o=e?Hi(t,e):t;await new Promise((s,n)=>{const l=a.delete(o);l.onsuccess=()=>s(),l.onerror=()=>n(l.error)})}async function _c(t,e){const a=(await Jr()).transaction($e,"readwrite").objectStore($e),o=Hi(t,e),s=o+"/",n=a.openCursor();await new Promise((l,d)=>{n.onerror=()=>d(n.error),n.onsuccess=u=>{const m=u.target.result;if(!m){l();return}const b=String(m.key);(b===o||b.startsWith(s))&&m.delete(),m.continue()}})}async function Lg(t){await _c(t,"")}async function zg(t,e,r){const o=(await Jr()).transaction($e,"readwrite").objectStore($e),s=Hi(t,e),n=Hi(t,r),l=o.openCursor(),d=[];await new Promise((u,m)=>{l.onerror=()=>m(l.error),l.onsuccess=b=>{const p=b.target.result;if(!p){u();return}const v=String(p.key);if(v===s||v.startsWith(s+"/")){const w=v.slice(s.length),x=n+w,y=p.value;d.push(()=>{p.delete(),o.put(y,x)})}p.continue()}});for(const u of d)u()}async function Ag(t,e){const a=(await Jr()).transaction($e,"readonly").objectStore($e),o=$g(t,e),s=a.openCursor(),n=new Set,l=new Map;await new Promise((u,m)=>{s.onerror=()=>m(s.error),s.onsuccess=b=>{const p=b.target.result;if(!p){u();return}const v=String(p.key),w=p.value;if(!v.startsWith(o)){p.continue();return}const x=v.slice(o.length);if(!x){p.continue();return}const y=x.indexOf("/"),k=y===-1?x:x.slice(0,y);y===-1?w.type==="dir"?n.add(k):l.set(k,w):n.add(k),p.continue()}});const d=[];for(const u of n)d.push({name:u,entry:{type:"dir"},type:"dir"});for(const[u,m]of l)n.has(u)||d.push({name:u,entry:m,type:"file"});return d}function Tg(t){return t instanceof Xe?t.getRootId():""}class ms extends Bt{constructor(e,r){super(),this.path=Wi(e),this.parent=r}getName(){const e=this.path.split("/");return e[e.length-1]||""}getParent(){return this.parent}getRootId(){return Tg(this.parent)}async delete(){await cl(this.getRootId(),this.path),vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}async getContents(e){const r=await ro(this.getRootId(),this.path);let i=r?.content;if(typeof i=="string"){const o=new Blob([i],{type:r?.mimeType||"text/plain"});i=o,r&&(r.content=o,await xa(this.getRootId(),this.path,r))}if(!e||e.contentType===Oa.TEXT)return i?await i.text():"";let a;return i?a=i:a=new Blob([],{type:r?.mimeType}),e.blob?a:e.uri?URL.createObjectURL(a):a.stream()}async saveContents(e,r){let i,a;if(e instanceof Blob)i=e,a=e.type||void 0;else if(typeof e=="string")a="text/plain",i=new Blob([e],{type:a});else if(e instanceof ReadableStream){const o=new Response(e);i=await o.blob(),a=o.headers.get("content-type")??void 0}else{const o=String(e??"");a="text/plain",i=new Blob([o],{type:a})}await xa(this.getRootId(),this.path,{type:"file",content:i,mimeType:a}),vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}async size(){const r=(await ro(this.getRootId(),this.path))?.content;return r?r.size:null}async copyTo(e){const r=await this.getContents({blob:!0}),i=await this.getWorkspace().getResource(e,{create:!0});if(!i)throw new Error(`Failed to create target file: ${e}`);await i.saveContents(r)}async rename(e){if(this.getName()===e)return;const r=this.getParent(),i=r instanceof Xe?r.getPath():"",a=wa(i,e),o=this.getRootId(),s=await ro(o,this.path);if(!s)throw new Error("File not found in IndexedDB");await cl(o,this.path),await xa(o,a,s),vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}}class Xe extends Pt{constructor(e,r){super(),this.path=Wi(e),this.parent=r}getPath(){return this.path}getName(){if(!this.path)return"";const e=this.path.split("/");return e[e.length-1]}getParent(){return this.parent}getRoot(){const e=this.getParent();return e?e.getRoot():this}getRootId(){const e=this.getRoot();return e instanceof ka?e.getRootId():""}async listChildren(e){const r=await Ag(this.getRootId(),this.path),i=[];for(const a of r){const o=wa(this.path,a.name);a.type==="dir"?i.push(new Xe(o,this)):i.push(new ms(o,this))}return i}async getResource(e,r){if(!e)throw new Error("No path provided");const i=e.endsWith("/"),a=e.split("/").filter(n=>n.trim());let o=this,s=!1;for(let n=0;n<a.length;n++){const l=a[n],d=n===a.length-1,u=o.getPath(),m=wa(u,l),b=this.getRootId(),p=await ro(b,m);if(!p){if(!r?.create)return null;if(d&&!i)return await xa(b,m,{type:"file",content:new Blob([])}),s=!0,new ms(m,o);await xa(b,m,{type:"dir"}),s=!0,o=new Xe(m,o);continue}if(d)return i?p.type!=="dir"?null:new Xe(m,o):p.type==="dir"?new Xe(m,o):new ms(m,o);if(p.type!=="dir")return null;o=new Xe(m,o)}return s&&vt(Pe,pt.getWorkspaceSync()??this.getWorkspace()),o}touch(){vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}async delete(e,r=!0){if(!e){const a=this.getParent();if(a instanceof Xe){await a.delete(this.getName());return}return}const i=wa(this.path,e);await _c(this.getRootId(),i),vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}async copyTo(e){for(const r of await this.listChildren(!1)){const i=[e,r.getName()].join("/");await r.copyTo(i)}}async rename(e){if(this.getName()===e)return;const r=this.getParent();if(!(r instanceof Xe))throw new Error("Cannot rename IndexedDB root directory");const i=this.getPath(),a=wa(r.getPath(),e);await zg(this.getRootId(),i,a),vt(Pe,pt.getWorkspaceSync()??this.getWorkspace())}}class ka extends Xe{constructor(e,r){super(""),this.displayName=e||"IndexedDB",this.rootId=r}getRootId(){return this.rootId}getName(){return this.displayName}getParent(){}async rename(e){const r=String(e??"").trim();!r||r===this.displayName||(this.displayName=r,await pt.updateFolderName(this,r))}}function Rg(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"default-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}pt.registerContribution({type:"indexeddb",name:"idb",canHandle(t){return t&&typeof t=="object"&&t.indexeddb===!0},async connect(t){await Jr();const e=t.name&&String(t.name).trim(),r=e&&e.length>0?e:await _g(),i=Rg();return new ka(r,i)},async restore(t){if(t&&typeof t=="object"&&t.indexeddb===!0&&t.rootId){await Jr();const e=t.name&&String(t.name).trim()||"IndexedDB";return new ka(e,String(t.rootId))}},async persist(t){return t instanceof ka?{indexeddb:!0,name:t.getName(),rootId:t.getRootId()}:null}});async function Dg(t){return t instanceof ka?(await Lg(t.getRootId()),!0):!1}const Re=Pr("MarketplaceRegistry"),dl="events/marketplaceregistry/changed",hl="marketplace.catalogUrls";class Ig{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{Re.error(`Failed to refresh catalogs on init: ${e.message}`)})})}async loadCatalogUrls(){try{const e=await Xt.get(hl);this.catalogUrls=Array.isArray(e)?e:[]}catch(e){Re.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await Xt.set(hl,this.catalogUrls),vt(dl,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){Re.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),Re.debug(`Added catalog URL: ${e}`);try{await this.refreshCatalogs()}catch(r){Re.warn(`Failed to refresh catalogs immediately after adding: ${r}`)}}async addCatalogUrls(e){let r=0;for(const i of e){if(!this.isValidUrl(i)){Re.warn(`Skipping invalid catalog URL: ${i}`);continue}this.catalogUrls.includes(i)||(this.catalogUrls.push(i),Re.debug(`Added catalog URL: ${i}`),r++)}if(r!==0){await this.saveCatalogUrls();try{await this.refreshCatalogs()}catch(i){Re.warn(`Failed to refresh catalogs after adding URLs: ${i}`)}}}async removeCatalogUrl(e){const r=this.catalogUrls.indexOf(e);r!==-1&&(this.catalogUrls.splice(r,1),await this.saveCatalogUrls(),Re.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const r=new URL(e);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const r=this.loadingPromises.get(e);if(r)return r;const i=(async()=>{try{const a=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);const o=await a.json();if(!o.extensions||!Array.isArray(o.extensions))throw new Error("Invalid catalog format: extensions array is required");return{name:o.name,description:o.description,extensions:o.extensions||[]}}catch(a){throw Re.error(`Failed to fetch catalog from ${e}: ${a}`),a}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,i),i}async refreshCatalogs(){const e=this.catalogUrls.map(a=>this.fetchCatalog(a).catch(o=>(Re.warn(`Failed to refresh catalog ${a}: ${o.message}`),null))),r=await Promise.allSettled(e);let i=0;r.forEach(a=>{if(a.status==="fulfilled"&&a.value){const o=a.value;o.extensions&&o.extensions.forEach(s=>{if(!Wt.getExtensions().find(n=>n.id===s.id)){const n={...s,external:!0};Wt.registerExtension(n),i++}})}}),Re.debug(`Refreshed ${this.catalogUrls.length} catalogs, ${i} extensions registered`),i>0&&Re.info(`Marketplace: ${i} new extension(s) available`),vt(dl,{type:"refreshed"})}getMarketplaceExtension(e){const r=Wt.getExtensions().find(i=>i.id===e);if(r&&r.external)return r}isMarketplaceExtension(e){const r=Wt.getExtensions().find(i=>i.id===e);return r!==void 0&&r.external===!0}}const $c=new Ig;de.put("marketplaceRegistry",$c);const gt=Pr("AppLoader");function ul(t){if(!t)return"standard";const e=t.layout??t.layoutId;return typeof e=="object"?e.id:e??"standard"}function Og(t){const e={};for(const[r,i]of Object.entries(t))e[r]=typeof i=="boolean"?i?"true":"false":i;return e}function dr(t){return t instanceof Error?t.message:String(t)}function Pg(t){try{const r=new URL(t).pathname.split("/").filter(Boolean);return r.length>0?r[r.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function Fg(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const r=e[0];if(!(!r||r==="index.html"||r.endsWith(".html")))return r}const un=class va{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,r){if(r?.hostConfig===!0&&typeof rl<"u"){const i=rl;e.name===void 0&&(e.name=i.name),e.version===void 0&&(e.version=i.version),e.description===void 0&&(e.description=i.description),e.dependencies===void 0&&(e.dependencies=i.dependencies),e.marketplaceCatalogUrls===void 0&&(e.marketplaceCatalogUrls=i.marketplaceCatalogUrls)}e.name=e.name??"app",e.version=e.version??"0.0.0",this.apps.has(e.name)&&gt.warn(`App '${e.name}' is already registered. Overwriting.`),e.marketplaceCatalogUrls?.length&&$c.addCatalogUrls(e.marketplaceCatalogUrls).catch(()=>{}),this.apps.set(e.name,e),r?.defaultAppName&&(this.defaultAppName=r.defaultAppName),r?.container&&(this.container=r.container),r?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadAppFromUrl(e){gt.info(`Loading app from URL: ${e}...`);try{const r=await import(e);if(!r.default)throw new Error(`Module at ${e} does not have a default export`);const i=r.default;if(!i.name||!i.version)throw new Error(`Module at ${e} does not export a valid AppDefinition (name and version required)`);return gt.info(`Successfully loaded app definition from URL: ${i.name}`),i}catch(r){throw gt.error(`Failed to load app from URL ${e}: ${dr(r)}`),r}}async start(){if(this.started){gt.debug("AppLoader already started");return}this.started=!0;const e=new URLSearchParams(window.location.search),r=e.get("app"),i=e.get("appId"),a=Fg(),o=this.apps.size;let s;if(r&&(s=Pg(r),s&&gt.info(`Extracted app ID from URL path: ${s}`)),a&&gt.info(`Extracted app ID from current page path: ${a}`),r)try{gt.info(`URL parameter 'app' found: ${r}, attempting to load extension or app`);try{await Wt.loadExtensionFromUrl(r),gt.info(`Successfully loaded extension from URL: ${r}`)}catch(l){gt.info(`Failed to load as extension, trying as app definition: ${dr(l)}`);try{const d=await this.loadAppFromUrl(r);if(this.registerApp(d),!d.name)throw new Error("App from URL has no name after registration");await this.loadApp(d.name,this.container),gt.info(`Successfully loaded app from URL: ${r}`);return}catch(d){throw gt.error(`Failed to load from URL as both extension and app: ${dr(d)}`),d}}}catch(l){gt.error(`Failed to load from URL parameter, falling back to default app: ${dr(l)}`)}const n=await this.selectAppToLoad({appIdFromUrl:i,appIdFromPath:a,appIdFromAppUrl:s,appsBeforeExtension:o});if(!n)throw new Error("No apps registered");await this.loadApp(n,this.container)}findAppNameBySegment(e){if(this.apps.has(e))return e;for(const r of this.apps.values())if(r.path===e||r.name&&r.name.endsWith("/"+e))return r.name??void 0}dispatchLoadProgress(e){window.dispatchEvent(new CustomEvent("app-load-progress",{detail:{message:e}}))}async loadApp(e,r){const i=this.apps.get(e);if(!i)throw new Error(`App '${e}' not found. Make sure it's registered.`);if(this.dispatchLoadProgress("Starting…"),this.currentApp&&(gt.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(gt.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(o=>{Wt.disable(o)}))),go.applyAppNameRemaps(i.remaps),i.remaps?.length){const o=new Set;for(const s of i.remaps)for(const n of s.targets)o.add(n);for(const s of o){const n=mt.getContributions(s);vt(nr,{target:s,contributions:n})}}i.contributions&&(gt.info("Registering app contributions..."),i.contributions.ui&&(i.contributions.ui.forEach(o=>{const s=o.target;s&&mt.registerContribution(s,o)}),gt.info(`Registered ${i.contributions.ui.length} UI contributions`)),i.contributions.extensions&&(i.contributions.extensions.forEach(o=>{Wt.registerExtension(o)}),gt.info(`Registered ${i.contributions.extensions.length} app extensions`)));const a=new Set(i.extensions||[]);this.systemRequiredExtensions.forEach(o=>a.add(o)),i.extensions=Array.from(a),this.dispatchLoadProgress("Loading extensions…"),await Wt.loadEnabledExtensions(),i.extensions.length>0&&(this.dispatchLoadProgress("Enabling extensions…"),await Promise.all(i.extensions.map(o=>Wt.enableAsync(o).catch(s=>{gt.error(`Failed to load extension ${o}: ${dr(s)}`)})))),i.initialize&&(this.dispatchLoadProgress("Initializing…"),gt.info(`Initializing ${i.name}...`),await i.initialize()),this.currentApp=i,gt.info(`App ${i.name} loaded successfully`),this.preferredLayoutId=await this.getPreferredLayoutId(),this.updateDocumentMetadata(i),r&&(this.dispatchLoadProgress("Rendering layout…"),this.renderApp(r)),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appName:i.name}}))}updateDocumentMetadata(e){if(document.title=e.name??"",e.metadata?.favicon){const r=e.metadata.favicon;let i=document.querySelector("link[rel*='icon']");i||(i=document.createElement("link"),i.rel="icon",document.head.appendChild(i)),i.type="image/svg+xml",i.href=r}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const r=this.preferredLayoutId??ul(this.currentApp),i=mt.getContributions(yo);let a=i.find(l=>l.id===r);if(a||(gt.warn(`Layout '${r}' not found, falling back to 'standard'`),a=i.find(l=>l.id==="standard")),!a)throw new Error(`No layout found for layoutId '${r}' and no 'standard' layout registered.`);const o=a.component;let s={};o&&typeof o=="object"&&"tag"in o&&o.attributes&&(s={...o.attributes});const n=this.currentApp?.layout;if(typeof n=="object"&&n.id===r&&n.props&&Object.assign(s,Og(n.props)),e.innerHTML="",typeof o=="string"){const l=document.createElement(o);for(const[d,u]of Object.entries(s))l.setAttribute(d,u);e.appendChild(l)}else if(o&&typeof o=="object"&&"tag"in o){const l=document.createElement(o.tag);for(const[d,u]of Object.entries(s))l.setAttribute(d,u);e.appendChild(l)}else if(typeof o=="function")Je(o(),e);else throw new Error(`Layout '${a.id}' has invalid component.`);a.onShow&&requestAnimationFrame(()=>{Promise.resolve(a.onShow()).catch(l=>gt.error(`Layout onShow failed for '${a.id}': ${dr(l)}`))})}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await Xt.get(va.PREFERRED_APP_KEY)}catch(e){gt.debug(`Failed to get preferred app ID from settings: ${dr(e)}`);return}}async setPreferredAppId(e){if(!this.apps.has(e))throw new Error(`App '${e}' not found. Make sure it's registered.`);try{await Xt.set(va.PREFERRED_APP_KEY,e),this.defaultAppName=e,gt.info(`Set preferred app to: ${e}`)}catch(r){throw gt.error(`Failed to persist preferred app: ${dr(r)}`),r}}getRegisteredLayouts(){return mt.getContributions(yo)}getCurrentLayoutId(){return this.preferredLayoutId??ul(this.currentApp)}async getPreferredLayoutId(){try{return await Xt.get(va.PREFERRED_LAYOUT_KEY)}catch(e){gt.debug(`Failed to get preferred layout ID: ${dr(e)}`);return}}async setPreferredLayoutId(e){if(!this.getRegisteredLayouts().some(i=>i.id===e))throw new Error(`Layout '${e}' not found.`);try{await Xt.set(va.PREFERRED_LAYOUT_KEY,e),this.preferredLayoutId=e,gt.info(`Set preferred layout to: ${e}`),this.currentApp&&this.container&&this.renderApp(this.container),window.dispatchEvent(new CustomEvent("layout-changed",{detail:{layoutId:e}}))}catch(i){throw gt.error(`Failed to persist preferred layout: ${dr(i)}`),i}}async selectAppToLoad(e){const{appIdFromUrl:r,appIdFromPath:i,appIdFromAppUrl:a,appsBeforeExtension:o}=e;if(r){const l=this.findAppNameBySegment(r)??r;if(this.apps.has(l))return gt.info(`Loading app specified by URL parameter 'appId': ${l}`),l;gt.warn(`App '${r}' from URL parameter not found`)}if(i){const l=this.findAppNameBySegment(i);if(l)return gt.info(`Loading app from URL path: ${i}`),l;gt.debug(`App for path '${i}' not found, continuing search`)}if(a){const l=this.findAppNameBySegment(a)??a;if(this.apps.has(l))return gt.info(`Loading app using segment from app URL path: ${l}`),l}if(this.apps.size>o){const l=Array.from(this.apps.values()).slice(o);if(l.length>0){const d=l[0];return gt.info(`Loading app registered by extension: ${d.name}`),d.name}}const s=await this.getPreferredAppId();if(s&&this.apps.has(s))return gt.info(`Loading preferred app from settings: ${s}`),s;if(this.defaultAppName&&this.apps.has(this.defaultAppName))return this.defaultAppName;this.defaultAppName&&gt.warn(`Default app '${this.defaultAppName}' not found`);const n=this.getRegisteredApps();if(n.length>0)return n[0].name}};un.PREFERRED_APP_KEY="preferredAppName";un.PREFERRED_LAYOUT_KEY="preferredLayoutId";let Ng=un;const Mr=new Ng;de.put("appLoaderService",Mr);var Bg=Object.defineProperty,Mg=Object.getOwnPropertyDescriptor,Pa=(t,e,r,i)=>{for(var a=i>1?void 0:i?Mg(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&Bg(e,r,a),a};let vi=class extends Nr{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(t){super.firstUpdated(t),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const r=e.shadowRoot?.querySelector("input");r&&(r.focus(),r.select())}}getResult(){return this.inputValue}handleInput(t){this.inputValue=t.target.value}handleKeyDown(t){t.key==="Enter"?(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):t.key==="Escape"&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return S`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};vi.styles=[...Nr.styles,J`
            wa-input {
                width: 100%;
            }
        `];Pa([h({type:String})],vi.prototype,"message",2);Pa([h({type:String,attribute:"default-value"})],vi.prototype,"defaultValue",2);Pa([h({type:Boolean})],vi.prototype,"markdown",2);Pa([X()],vi.prototype,"inputValue",2);vi=Pa([Z("lyra-prompt-dialog-content")],vi);mt.registerContribution(wi,{id:"prompt",label:"Input",buttons:[Ia,hn],component:t=>t?S`
            <lyra-prompt-dialog-content 
                .message="${t.message}"
                .defaultValue="${t.defaultValue}"
                .markdown="${t.markdown}"
            ></lyra-prompt-dialog-content>
        `:S`<div>Error: No prompt dialog state</div>`,onButton:async(t,e,r)=>(r&&(t==="ok"?r.resolve(e||""):r.resolve(null)),!0)});async function Uo(t,e="",r=!1){return new Promise(i=>{Mo.open("prompt",{message:t,defaultValue:e,markdown:r,resolve:i})})}var Ug=Object.defineProperty,Vg=Object.getOwnPropertyDescriptor,pn=(t,e,r,i)=>{for(var a=i>1?void 0:i?Vg(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&Ug(e,r,a),a};let ko=class extends Nr{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return S`
            ${this.renderMessage(this.message,this.markdown)}
        `}};pn([h({type:String})],ko.prototype,"message",2);pn([h({type:Boolean})],ko.prototype,"markdown",2);ko=pn([Z("lyra-info-dialog-content")],ko);mt.registerContribution(wi,{id:"info",label:"Information",buttons:[Ia],component:t=>t?S`
            <lyra-info-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></lyra-info-dialog-content>
        `:S`<div>Error: No info dialog state</div>`,onButton:async(t,e,r)=>(r&&r.resolve&&r.resolve(),!0)});var qg=Object.defineProperty,Wg=Object.getOwnPropertyDescriptor,fn=(t,e,r,i)=>{for(var a=i>1?void 0:i?Wg(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&qg(e,r,a),a};let Co=class extends Nr{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return S`
            ${this.renderMessage(this.message,this.markdown)}
        `}};fn([h({type:String})],Co.prototype,"message",2);fn([h({type:Boolean})],Co.prototype,"markdown",2);Co=fn([Z("lyra-confirm-dialog-content")],Co);mt.registerContribution(wi,{id:"confirm",label:"Confirm",buttons:[Ia,hn],component:t=>t?S`
            <lyra-confirm-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></lyra-confirm-dialog-content>
        `:S`<div>Error: No confirm dialog state</div>`,onButton:async(t,e,r)=>(r&&(t==="ok"?r.resolve(!0):r.resolve(!1)),!0)});async function ji(t,e=!1){return new Promise(r=>{Mo.open("confirm",{message:t,markdown:e,resolve:r})})}var Hg=Object.defineProperty,jg=Object.getOwnPropertyDescriptor,Li=(t,e,r,i)=>{for(var a=i>1?void 0:i?jg(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&Hg(e,r,a),a};let Ir=class extends Nr{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(t){super.firstUpdated(t),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const r=this.closest(".dialog-service-content");if(r){const i=r.parentElement?.querySelector(".dialog-service-footer");i&&(i.style.display="none")}}updated(t){super.updated(t),t.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),t.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(t,e,r){this.currentTitle=t,this.currentMessage=e,this.actions=[...r],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(t){t.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const t=this.actions.filter(r=>r.label!=="Close"),e=this.actions.filter(r=>r.label==="Close");return S`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${t.map(r=>S`
                            <wa-button 
                                variant="${r.variant||"default"}"
                                ?disabled=${r.disabled}
                                @click=${()=>this.handleActionClick(r)}
                            >
                                ${r.label}
                            </wa-button>
                        `)}
                    </div>
                    <div class="dialog-actions-right">
                        ${e.map(r=>S`
                            <wa-button 
                                variant="${r.variant||"primary"}"
                                @click=${()=>{this.handleActionClick(r),this.handleClose()}}
                            >
                                ${r.label}
                            </wa-button>
                        `)}
                    </div>
                </div>
            </div>
        `}};Ir.styles=[...Nr.styles,J`
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
        `];Li([h({type:String})],Ir.prototype,"title",2);Li([h({type:String})],Ir.prototype,"message",2);Li([h({type:Boolean})],Ir.prototype,"markdown",2);Li([X()],Ir.prototype,"actions",2);Li([X()],Ir.prototype,"currentTitle",2);Li([X()],Ir.prototype,"currentMessage",2);Ir=Li([Z("lyra-navigable-info-dialog-content")],Ir);mt.registerContribution(wi,{id:"navigable-info",label:"Information",buttons:[vg],component:t=>{if(!t)return S`<div>Error: No navigable info dialog state</div>`;const e=S`
            <lyra-navigable-info-dialog-content 
                .title="${t.title}"
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></lyra-navigable-info-dialog-content>
        `;return(async()=>{const r=document.querySelector("lyra-navigable-info-dialog-content");r&&(await r.updateComplete,r.actions=t.actions||[],r.resolveCallback=t.resolve,t.updateDialogRef&&(t.updateDialogRef.current=(i,a,o)=>{r.updateDialog(i,a,o)}))})(),e},onButton:async(t,e,r)=>r&&t==="close"&&r.resolve?(r.resolve(),!0):!1});var Kg=Object.defineProperty,Gg=Object.getOwnPropertyDescriptor,ta=(t,e,r,i)=>{for(var a=i>1?void 0:i?Gg(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&Kg(e,r,a),a};let ti=class extends Nr{constructor(){super(...arguments),this.mode="either",this.selectedPath=null,this.rootNodes=[],this.loading=!1,this.loadError=null}async doInitUI(){await this.loadWorkspaceTree()}firstUpdated(t){super.firstUpdated?.(t);const e=this.closest("wa-dialog");e&&e.setAttribute("label",this.dialogTitle)}updated(t){if(super.updated?.(t),t.has("mode")){const e=this.closest("wa-dialog");e&&e.setAttribute("label",this.dialogTitle)}}get dialogTitle(){return this.mode==="file"?"Choose a file":this.mode==="directory"?"Choose a directory":"Choose a file or directory"}getResult(){return this.selectedPath!=null?"/"+this.selectedPath:null}async loadWorkspaceTree(){this.loading=!0,this.loadError=null;try{const t=await pt.getWorkspace();if(!t){this.rootNodes=[];return}const e=await t.listChildren(!1),r=[];for(const i of e)r.push(await this.resourceToTreeNode(i,!1));r.sort((i,a)=>i.label.localeCompare(a.label)),this.rootNodes=r}catch(t){const e=t instanceof Error?t.message:String(t);this.loadError=e,this.rootNodes=[]}finally{this.loading=!1}}async resourceToTreeNode(t,e=!0){const r=t instanceof Bt,i={resource:t,label:t.getName(),leaf:r,children:[]};if(t instanceof Pt&&e){for(const a of await t.listChildren(!1))i.children.push(await this.resourceToTreeNode(a,!1));i.children.sort((a,o)=>a.label.localeCompare(o.label))}return i}handleSelectionChange(t){const e=t.detail&&t.detail.selection||[];if(!e||e.length===0){this.selectedPath=null,this.requestUpdate();return}const i=e[0]?.model?.resource;if(!i){this.selectedPath=null,this.requestUpdate();return}const a=i instanceof Pt,o=i instanceof Bt;if(this.mode==="file"&&!o){this.selectedPath=null,this.requestUpdate();return}if(this.mode==="directory"&&o){const n=i.getParent?.();this.selectedPath=n?n.getWorkspacePath():null,this.requestUpdate();return}if(this.mode==="directory"&&!a){this.selectedPath=null,this.requestUpdate();return}const s=i.getWorkspacePath?.();this.selectedPath=typeof s=="string"?s:null,this.requestUpdate()}renderTreeNode(t){return S`
      <wa-tree-item .model=${t} ?leaf=${t.leaf}>
        ${t.label}
        ${t.children.map(e=>this.renderTreeNode(e))}
      </wa-tree-item>
    `}render(){return S`
      <div class="dialog-body">
        ${this.loadError?this.renderMessage(this.loadError,!1):null}

        <div class="browser-container">
          ${this.loading?S`<div>Loading workspace…</div>`:this.rootNodes.length>0?S`
                    <wa-tree @wa-selection-change=${t=>this.handleSelectionChange(t)}>
                      ${this.rootNodes.map(t=>this.renderTreeNode(t))}
                    </wa-tree>
                  `:S`<div>No workspace folders.</div>`}
        </div>

        <div class="selection-info">
          ${this.selectedPath?`Selected path: ${this.selectedPath}`:"No path selected yet."}
        </div>
      </div>
    `}};ti.styles=[...Nr.styles,J`
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
    `];ta([h({type:String})],ti.prototype,"mode",2);ta([X()],ti.prototype,"selectedPath",2);ta([X()],ti.prototype,"rootNodes",2);ta([X()],ti.prototype,"loading",2);ta([X()],ti.prototype,"loadError",2);ti=ta([Z("lyra-filebrowser-dialog")],ti);mt.registerContribution(wi,{id:"filebrowser-dialog",label:"Select Path",buttons:[Ia,hn],component:t=>S`<lyra-filebrowser-dialog .mode=${t?.mode??"either"}></lyra-filebrowser-dialog>`,onButton:async(t,e,r)=>(r&&(t==="ok"?r.resolve(e||null):r.resolve(null)),!0)});function Xg(t="either"){return new Promise(e=>{Mo.open("filebrowser-dialog",{resolve:e,mode:t})})}function Zg(t){const e=(t??"").trim();if(!e)return{name:""};const r=e.split(/\s+/);if(r.length<=1)return{name:e};const i=r.pop(),a=r.join(" ");return{name:i,library:a}}function be(t,e){const{name:r,library:i}=Zg(t??"");return S`<wa-icon library=${i??Nt} name=${r} label=${e?.label??Nt} slot=${e?.slot??Nt}></wa-icon>`}var Yg=Object.defineProperty,Qg=Object.getOwnPropertyDescriptor,Sr=(t,e,r,i)=>{for(var a=i>1?void 0:i?Qg(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&Yg(e,r,a),a};const Jg=150;function gs(t,e,r,i,a){const s=`Toolbar ${t??"default"}`,n=r.filter(d=>d.slot===t&&i(d)),l=t==="start"?S`<slot name="start"></slot>`:t==="end"?S`<slot name="end"></slot>`:S`<slot></slot>`;return S`
        <wa-button-group orientation=${e} label=${s}>
            ${l}
            ${n.map(a)}
        </wa-button-group>
    `}let He=class extends Fr{constructor(){super(...arguments),this.position="start",this.orientation="horizontal",this.align="start",this.size="small",this.scopeTokens=[],this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[],this.compact=!1,this.resizeObserver=null,this.resizeDebounceTimer=null,this.overflowCheckScheduled=!1,this.onResize=()=>{this.resizeDebounceTimer!==null&&clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=setTimeout(()=>{this.resizeDebounceTimer=null,this.updateCompactFromSpace()},Jg)}}updateCompactFromSpace(){const t=this.shadowRoot?.querySelector(".toolbar-items");if(!t)return;const e=t.scrollWidth>t.clientWidth;this.compact!==e&&(this.compact=e,this.requestUpdate())}scheduleOverflowCheck(){this.overflowCheckScheduled||(this.overflowCheckScheduled=!0,requestAnimationFrame(()=>{this.overflowCheckScheduled=!1,this.updateCompactFromSpace()}))}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=null,this.resizeDebounceTimer!==null&&(clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=null),super.disconnectedCallback()}updated(t){super.updated?.(t),this.compact||this.scheduleOverflowCheck(),t.has("scopeTokens")&&this.refreshContributions()}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="id"&&e!==r&&this.refreshContributions()}doBeforeUI(){this.refreshContributions(),we(nr,t=>{const e=this.getAttribute("id");if(!e)return;this.matchesTarget(e,t.target)&&(this.refreshContributions(),this.requestUpdate())})}refreshContributions(){const t=this.getAttribute("id");if(!t){this.contributions=[];return}this.loadContributions(t)}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const i=e.split(":");if(i.length===2){const a=i[1];if(this.scopeTokens.includes(a))return t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=mt.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),i=`${r}:*`,a=mt.getContributions(i),o=[];for(const s of this.scopeTokens){const n=`${r}:${s}`,l=mt.getContributions(n);o.push(...l)}this.contributions=[...a,...o,...e]}isToolbarItem(t){return"command"in t||"component"in t}contributionCreator(t){if("command"in t){const e=t,r=!this.compact&&!!e.showLabel;return S`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size=${this.size}>
                    ${be(e.icon,{label:e.label})}
                    ${r?e.label:""}
                </wa-button>
            `}if("component"in t){const e=t.component;return e instanceof Function?e():Lr(e)}return S`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"",e=this.orientation==="vertical"?"column":"row",r={start:"flex-start",center:"center",end:"flex-end"},i=this.contributionCreator.bind(this),a=this.isToolbarItem.bind(this);return S`
            <div class="toolbar-items" style=${Vt({"flex-direction":e,"align-items":r[this.align],"justify-content":this.position})}>
                ${gs("start",this.orientation,this.contributions,a,i)}
                ${t}
                ${gs(void 0,this.orientation,this.contributions,a,i)}
                ${gs("end",this.orientation,this.contributions,a,i)}
            </div>
        `}};He.styles=J`
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
    `;Sr([h()],He.prototype,"position",2);Sr([h({reflect:!0})],He.prototype,"orientation",2);Sr([h({reflect:!0})],He.prototype,"align",2);Sr([h({reflect:!0})],He.prototype,"size",2);Sr([h({attribute:!1})],He.prototype,"scopeTokens",2);Sr([h({attribute:!1})],He.prototype,"partToolbarContent",2);Sr([h({attribute:!1})],He.prototype,"partToolbarRenderer",2);Sr([X()],He.prototype,"contributions",2);Sr([X()],He.prototype,"compact",2);He=Sr([Z("lyra-toolbar")],He);var t0=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,Ae=(t,e,r,i)=>{for(var a=i>1?void 0:i?e0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&t0(e,r,a),a};let fe=class extends Po{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(t){if(!this.disabled){if(t&&t.stopPropagation(),this.action){this.action(t);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(t){const e=t.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const t=yc.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),we(nr,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=mt.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,r=e.disabled?.get();return S`
                <lyra-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${r}">
                    ${e.label}
                </lyra-command>
            `}if("component"in t){const r=t.component;return r instanceof Function?r():Lr(r)}return Nt}render(){const t=this.getKeybinding();return this.isInDropdown()?S`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    ${be(this.icon,{label:this.title,slot:"icon"})}
                    <slot></slot>
                    ${t?S`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?S`
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
                        ${be(this.icon,{label:this.title,slot:"start"})}
                        <slot></slot>
                        ${this.label?this.title:Nt}
                    </wa-button>
                    
                    ${this.title?S`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:Nt}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?S`
                        <wa-divider></wa-divider>
                        <lyra-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                            ${this.title}
                        </lyra-command>
                    `:Nt}
                </wa-dropdown>
            `:S`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${e=>this.handleClick(e)}>
                ${be(this.icon,{label:this.title,slot:"start"})}
                <slot></slot>
            </wa-button>
        `}};fe.styles=J`
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
    `;Ae([h()],fe.prototype,"cmd",2);Ae([h({type:Object,attribute:!1})],fe.prototype,"action",2);Ae([h()],fe.prototype,"title",2);Ae([h()],fe.prototype,"label",2);Ae([h()],fe.prototype,"icon",2);Ae([h({type:Boolean})],fe.prototype,"disabled",2);Ae([h()],fe.prototype,"appearance",2);Ae([h()],fe.prototype,"variant",2);Ae([h()],fe.prototype,"size",2);Ae([h({type:Object,attribute:!1})],fe.prototype,"params",2);Ae([h()],fe.prototype,"dropdown",2);Ae([h()],fe.prototype,"placement",2);Ae([X()],fe.prototype,"dropdownContributions",2);fe=Ae([Z("lyra-command")],fe);var r0=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,ea=(t,e,r,i)=>{for(var a=i>1?void 0:i?i0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&r0(e,r,a),a};let ei=class extends Fr{constructor(){super(...arguments),this.scopeTokens=[],this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Vr(),this.dropdownRef=Vr(),this.boundHandleDocumentPointerDown=this.handleDocumentPointerDown.bind(this)}handleDocumentPointerDown(t){if(!this.isOpen)return;const e=t.composedPath();this.dropdownRef.value&&e.includes(this.dropdownRef.value)||e.some(r=>r.getAttribute?.("part")==="submenu")||this.onClose()}doBeforeUI(){this.refreshContributions(),we(nr,t=>{const e=this.getAttribute("id");if(!e)return;this.matchesTarget(e,t.target)&&(this.refreshContributions(),this.requestUpdate())})}updated(t){super.updated?.(t),t.has("scopeTokens")&&this.refreshContributions()}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="id"&&e!==r&&this.refreshContributions()}refreshContributions(){const t=this.getAttribute("id");if(!t){this.contributions=[];return}this.loadContributions(t)}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const i=e.split(":");if(i.length===2){const a=i[1];if(this.scopeTokens.includes(a))return t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=mt.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),i=`${r}:*`,a=mt.getContributions(i),o=[];for(const s of this.scopeTokens){const n=`${r}:${s}`,l=mt.getContributions(n);o.push(...l)}this.contributions=[...a,...o,...e]}getElementFromPoint(t,e){let r=document.elementFromPoint(t,e);if(!r)return null;for(;r;){const i=r.shadowRoot;if(i){const a=i.elementFromPoint(t,e);if(a&&a!==r){r=a;continue}}break}return r}triggerClickUnderCursor(t){const e=this.getElementFromPoint(t.clientX,t.clientY);if(e){const r=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(r)}}show(t,e){e&&this.triggerClickUnderCursor(e),this.position=t,this.isOpen=!0,this.updateComplete.then(()=>{document.addEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})})}onClose(){this.isOpen=!1,document.removeEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})}renderContribution(t){if("command"in t){const e=t,r=e.disabled?.get();return S`
                <lyra-command
                    cmd="${e.command}"
                    icon="${e.icon??""}"
                    .params=${e.params??{}}
                    ?disabled="${r}">
                    ${e.label}
                </lyra-command>
            `}else if("component"in t){const e=t.component;return e instanceof Function?e():Lr(e)}return Nt}render(){if(!this.isOpen)return Nt;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():Nt;return S`
            <wa-dropdown
                ${qr(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}>
                
                <div 
                    slot="trigger"
                    ${qr(this.anchorRef)}
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
        `}};ei.styles=J`
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
    `;ea([h({attribute:!1})],ei.prototype,"scopeTokens",2);ea([h({attribute:!1})],ei.prototype,"partContextMenuRenderer",2);ea([X()],ei.prototype,"contributions",2);ea([X()],ei.prototype,"isOpen",2);ea([X()],ei.prototype,"position",2);ei=ea([Z("lyra-contextmenu")],ei);class mn extends Fr{}var a0=Object.defineProperty,gn=(t,e,r,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,r,a)||a);return a&&a0(e,r,a),a};const Vo=(da=class extends mn{constructor(){super(...arguments),this.scrollMode="scroller",this.dirty=!1,this.isEditor=!1,this.onContentContextMenu=t=>{const e=this.renderRoot.querySelector("lyra-contextmenu");e&&(t.preventDefault(),e.show({x:t.clientX,y:t.clientY},t))}}getCommandStack(){return this.commandStack}renderToolbar(){return Nt}activateContainingTab(){let t=this,e=null,r=null;for(;t;){const i=t.tagName?.toLowerCase();if(i==="wa-tab-panel"&&(e=t.getAttribute("name")),i==="lyra-tabs"){r=t;break}const a=t.parentElement;if(a)t=a;else{const o=t.getRootNode();t=o instanceof ShadowRoot?o.host:null}}r&&e!=null&&e!==""&&r.activate(e)}renderContextMenu(){return Nt}renderContent(){return Nt}getToolbarTarget(){const t=this.tabContribution?.editorId??this.id??this.tabContribution?.name;return t?`toolbar:${t}`:void 0}getContextMenuTarget(){const t=this.tabContribution?.editorId??this.id??this.tabContribution?.name;return t?`contextmenu:${t}`:void 0}syncIsEditorCapability(){const t=this.save!==da.prototype.save;t!==this.isEditor&&(this.isEditor=t)}render(){const t=this.getToolbarTarget(),e=this.getContextMenuTarget(),r=this.tabContribution?.toolbar!==!1,i=this.tabContribution?.contextMenu!==!1,a=this.scrollMode,o=this.isEditor?["system.editors",".system.editors"]:[],s=this.renderContent(),n=a==="scroller"?S`
                <wa-scroller class="part-content-scroll" orientation="vertical">
                    <div class="part-content-inner">${s}</div>
                </wa-scroller>
            `:S`<div class="part-content-inner">${s}</div>`;return S`
            <div class="part-shell">
                ${r?S`
                    <lyra-toolbar
                        class="part-toolbar"
                        id=${at(t)}
                        .scopeTokens=${o}
                        .partToolbarRenderer=${()=>this.renderToolbar()}>
                    </lyra-toolbar>
                `:Nt}
                <div class="part-content ${a==="native"?"native-scroll":""}" @contextmenu=${i?this.onContentContextMenu:void 0}>
                    ${n}
                </div>
                ${i?S`
                    <lyra-contextmenu
                        id=${at(e)}
                        .scopeTokens=${o}
                        .partContextMenuRenderer=${()=>this.renderContextMenu()}>
                    </lyra-contextmenu>
                `:Nt}
            </div>
        `}updated(t){super.updated(t),this.syncIsEditorCapability(),t.has("dirty")&&t.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback(),this.syncIsEditorCapability(),queueMicrotask(()=>this.syncIsEditorCapability())}save(){}isDirty(){return this.dirty}markDirty(t){this.dirty=t,Ts.set(null),Ts.set(this),qe.set(null),qe.set(this)}static finalizeStyles(t){const e=super.finalizeStyles(t);return[da.baseStyles,...e]}},da.baseStyles=J`
        :host {
            display: block;
        }

        .part-shell {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            height: 100%;
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .part-content {
            min-height: 0;
            overflow: hidden;
            position: relative;
        }

        .part-content.native-scroll {
            overflow: auto;
        }

        .part-content-scroll {
            width: 100%;
            height: 100%;
        }

        .part-content-inner {
            height: 100%;
            min-height: 100%;
        }

        .part-toolbar {
            min-height: 0;
        }
    `,da);gn([h()],Vo.prototype,"dirty");gn([h({attribute:!1})],Vo.prototype,"tabContribution");gn([h({type:Boolean,attribute:!1})],Vo.prototype,"isEditor");let Pi=Vo;var o0=Object.defineProperty,s0=Object.getOwnPropertyDescriptor,bn=(t,e,r,i)=>{for(var a=i>1?void 0:i?s0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&o0(e,r,a),a};let ri=class extends mn{constructor(){super(...arguments),this.placement="top",this.contributions=[],this.tabGroup=Vr(),this.containerId=null,this.tabGroupListenersAttached=!1}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("lyra-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),we(nr,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){super.updated(t),this.contributions.length>0&&this.tabGroup.value&&this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),t.has("contributions")&&(this.contributions.length===0&&(this.tabGroupListenersAttached=!1),this.contributions.forEach(e=>{const r=this.getTabPanel(e.name);if(!r)return;const i=this.getPartFromPanel(r);i&&(i.tabContribution=e)}))}has(t){return this.tabGroup.value?!!this.getTabPanel(t):!1}activate(t){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(t){if(this.contributions.find(r=>r.name===t.name)){this.activate(t.name);const r=this.getTabPanel(t.name);r&&this.syncActiveSignalsFromPanel(r);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.activate(t.name);const r=this.getTabPanel(t.name);if(!r)return;const i=this.getPartFromPanel(r);i&&(i.tabContribution=t),this.syncActiveSignalsFromPanel(r)})})}handleTabAuxClick(t,e){t.button===dn.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await ji("Unsaved changes will be lost: Do you really want to close?"))return;const r=this.getTabPanel(e);if(!r)return;const i=this.contributions.find(o=>o.name===e);if(!i)return;this.cleanupTabInstance(r),this.clearActiveSignalsIfPartInPanel(r);const a=this.contributions.indexOf(i);a>-1&&this.contributions.splice(a,1),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){const r=this.getTab(t);r&&r.classList.toggle("part-dirty",e)}isDirty(t){const e=this.getTab(t);return!!e&&e.classList.contains("part-dirty")}loadAndResolveContributions(){this.containerId&&(this.contributions=mt.getContributions(this.containerId),this.requestUpdate())}cleanupTabInstance(t){const e=this.getPartFromPanel(t);e&&"close"in e&&typeof e.close=="function"&&e.close()}ensureTabGroupListenersAndActivate(){if(!this.tabGroup.value||this.tabGroupListenersAttached){this.activateNextAvailableTab();return}this.tabGroupListenersAttached=!0;const t=this.tabGroup.value;t.addEventListener("wa-tab-show",e=>{const r=this.getTabPanel(e.detail.name);r&&this.syncActiveSignalsFromPanel(r)}),t.addEventListener("click",e=>{const r=e.target,i=r.closest("wa-tab");if(i){const o=i.getAttribute("panel");if(o){const s=this.getTabPanel(o);s&&this.syncActiveSignalsFromPanel(s)}return}const a=r.closest("wa-tab-panel");a&&this.syncActiveSignalsFromPanel(a)}),this.dirtySignalCleanup?.(),this.dirtySignalCleanup=Ql(Ts,e=>{if(!e)return;const r=e.closest("wa-tab-panel");if(!r)return;const i=r.getAttribute("name");i&&this.markDirty(i,e.isDirty())}),this.activateNextAvailableTab()}disconnectedCallback(){this.dirtySignalCleanup?.(),this.dirtySignalCleanup=void 0,super.disconnectedCallback()}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`):null}getTab(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`):null}syncActiveSignalsFromPanel(t){const e=this.getPartFromPanel(t);e instanceof Pi&&(qe.set(null),qe.set(e),this.containerId===_a&&e.isEditor&&(fa.set(null),fa.set(e)))}clearActiveSignalsIfPartInPanel(t){const e=Array.from(t.querySelectorAll("*")).filter(r=>r instanceof Pi);for(const r of e)qe.get()===r&&qe.set(null),fa.get()===r&&fa.set(null)}getPartFromPanel(t){const e=t.firstElementChild;return e instanceof Pi?e:null}truncateTabLabel(t){if(!t||t.length<=ri.MAX_TAB_LABEL)return t;const e="…",r=ri.MAX_TAB_LABEL-e.length,i=Math.floor(r/2);return t.slice(0,i)+e+t.slice(-(r-i))}renderEmptyState(){const t=Mr.getCurrentApp();return S`
            <div class="empty-state">
                ${re(t,()=>S`
                        <div class="empty-content">
                            <h2 class="empty-title">${t.name}</h2>
                            ${re(t.description,()=>S`<p class="empty-description">${t.description}</p>`)}
                        </div>
                    `,()=>S`<wa-icon name="folder-open" class="empty-icon"></wa-icon>`)}
            </div>
        `}render(){return this.contributions.length===0?this.renderEmptyState():S`
            <wa-tab-group ${qr(this.tabGroup)} placement=${this.placement}>
                ${Kc(this.contributions,t=>t.name,t=>{const e=t.label??t.name,r=this.truncateTabLabel(e);return S`
                        <wa-tab panel="${t.name}"
                                title="${e}"
                                @auxclick="${i=>this.handleTabAuxClick(i,t)}">
                            ${be(t.icon,{label:e})}
                            ${r}
                            ${re(t.closable,()=>S`
                                <wa-icon name="xmark" label="Close"  @click="${i=>this.closeTab(i,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            ${t.component?t.component(t.name):Nt}
                        </wa-tab-panel>
                    `})}
            </wa-tab-group>
        `}};ri.MAX_TAB_LABEL=16;ri.styles=J`
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

        wa-tab-panel > * {
            width: 100%;
            height: 100%;
            min-height: 0;
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
    `;bn([h({reflect:!0})],ri.prototype,"placement",2);bn([X()],ri.prototype,"contributions",2);ri=bn([Z("lyra-tabs")],ri);var n0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,Fa=(t,e,r,i)=>{for(var a=i>1?void 0:i?l0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&n0(e,r,a),a};let ke=class extends Fr{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=t=>{if(!this.resizing)return;const r=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,i=[...this.resizing.startSizes];i[this.resizing.handleIndex]+=r,i[this.resizing.handleIndex+1]-=r;const a=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,o=a*.05;if(i[this.resizing.handleIndex]>=o&&i[this.resizing.handleIndex+1]>=o){this.resizing.currentSizes=i;const s=i.map((n,l)=>{const u=`${(n/a*100).toFixed(2)}%`;return l===i.length-1?u:`${u} ${ke.HANDLE_VISUAL_SIZE_PX}px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=s:this.style.gridTemplateRows=s}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,r)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${r*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${r*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const r=this.orientation==="horizontal"?t.clientX:t.clientY,i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,a=this.gridSizes.map(o=>o.endsWith("%")?parseFloat(o)/100*i:(o.endsWith("px"),parseFloat(o)));this.resizing={handleIndex:e,startPos:r,startSizes:a},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return Nt;const t=this.gridSizes.flatMap((e,r)=>r===this.gridSizes.length-1?[e]:[e,`${ke.HANDLE_VISUAL_SIZE_PX}px`]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",S`
            <style>
                .resize-handle {
                    position: relative;
                    z-index: 10;
                    background-color: var(--wa-color-neutral-border-quiet);
                    transition: background-color var(--wa-transition-fast);
                }

                .resize-handle::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                }

                .resize-handle.horizontal::before {
                    right: -${ke.HANDLE_HITBOX_PADDING_PX}px;
                    left: -${ke.HANDLE_HITBOX_PADDING_PX}px;
                }

                .resize-handle.vertical::before {
                    top: -${ke.HANDLE_HITBOX_PADDING_PX}px;
                    bottom: -${ke.HANDLE_HITBOX_PADDING_PX}px;
                }
                
                .resize-handle:hover {
                    background-color: var(--wa-color-brand-fill-normal);
                }
            </style>
            
            ${this.gridChildren.map((e,r)=>{if(r<this.gridChildren.length-1){const i=this.orientation==="horizontal"?`${r*2+2}`:"1",a=this.orientation==="vertical"?`${r*2+2}`:"1";return S`
                        <div 
                            class="resize-handle ${this.orientation==="horizontal"?"horizontal":"vertical"}"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${i};
                                grid-row: ${a};
                            "
                            @mousedown=${o=>this.startResize(o,r)}
                        ></div>
                    `}return Nt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};ke.HANDLE_VISUAL_SIZE_PX=1;ke.HANDLE_HITBOX_PADDING_PX=4;Fa([h()],ke.prototype,"orientation",2);Fa([h()],ke.prototype,"sizes",2);Fa([X()],ke.prototype,"gridSizes",2);Fa([X()],ke.prototype,"gridChildren",2);ke=Fa([Z("lyra-resizable-grid")],ke);var c0=Object.defineProperty,d0=Object.getOwnPropertyDescriptor,wn=(t,e,r,i)=>{for(var a=i>1?void 0:i?d0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&c0(e,r,a),a};let $a=class extends Po{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return S`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};$a.styles=J`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        h3 {
            margin: 0;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            text-align: center;
        }
    `;wn([h()],$a.prototype,"message",2);wn([h()],$a.prototype,"icon",2);$a=wn([Z("lyra-no-content")],$a);function Qa(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var bs={exports:{}};var pl;function h0(){return pl||(pl=1,(function(t,e){(function(r){t.exports=r()})(function(){return(function r(i,a,o){function s(d,u){if(!a[d]){if(!i[d]){var m=typeof Qa=="function"&&Qa;if(!u&&m)return m(d,!0);if(n)return n(d,!0);var b=new Error("Cannot find module '"+d+"'");throw b.code="MODULE_NOT_FOUND",b}var p=a[d]={exports:{}};i[d][0].call(p.exports,function(v){var w=i[d][1][v];return s(w||v)},p,p.exports,r,i,a,o)}return a[d].exports}for(var n=typeof Qa=="function"&&Qa,l=0;l<o.length;l++)s(o[l]);return s})({1:[function(r,i,a){var o=r("./utils"),s=r("./support"),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(l){for(var d,u,m,b,p,v,w,x=[],y=0,k=l.length,_=k,z=o.getTypeOf(l)!=="string";y<l.length;)_=k-y,m=z?(d=l[y++],u=y<k?l[y++]:0,y<k?l[y++]:0):(d=l.charCodeAt(y++),u=y<k?l.charCodeAt(y++):0,y<k?l.charCodeAt(y++):0),b=d>>2,p=(3&d)<<4|u>>4,v=1<_?(15&u)<<2|m>>6:64,w=2<_?63&m:64,x.push(n.charAt(b)+n.charAt(p)+n.charAt(v)+n.charAt(w));return x.join("")},a.decode=function(l){var d,u,m,b,p,v,w=0,x=0,y="data:";if(l.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");var k,_=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===n.charAt(64)&&_--,l.charAt(l.length-2)===n.charAt(64)&&_--,_%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=s.uint8array?new Uint8Array(0|_):new Array(0|_);w<l.length;)d=n.indexOf(l.charAt(w++))<<2|(b=n.indexOf(l.charAt(w++)))>>4,u=(15&b)<<4|(p=n.indexOf(l.charAt(w++)))>>2,m=(3&p)<<6|(v=n.indexOf(l.charAt(w++))),k[x++]=d,p!==64&&(k[x++]=u),v!==64&&(k[x++]=m);return k}},{"./support":30,"./utils":32}],2:[function(r,i,a){var o=r("./external"),s=r("./stream/DataWorker"),n=r("./stream/Crc32Probe"),l=r("./stream/DataLengthProbe");function d(u,m,b,p,v){this.compressedSize=u,this.uncompressedSize=m,this.crc32=b,this.compression=p,this.compressedContent=v}d.prototype={getContentWorker:function(){var u=new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),m=this;return u.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},d.createWorkerFrom=function(u,m,b){return u.pipe(new n).pipe(new l("uncompressedSize")).pipe(m.compressWorker(b)).pipe(new l("compressedSize")).withStreamInfo("compression",m)},i.exports=d},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,i,a){var o=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,i,a){var o=r("./utils"),s=(function(){for(var n,l=[],d=0;d<256;d++){n=d;for(var u=0;u<8;u++)n=1&n?3988292384^n>>>1:n>>>1;l[d]=n}return l})();i.exports=function(n,l){return n!==void 0&&n.length?o.getTypeOf(n)!=="string"?(function(d,u,m,b){var p=s,v=b+m;d^=-1;for(var w=b;w<v;w++)d=d>>>8^p[255&(d^u[w])];return-1^d})(0|l,n,n.length,0):(function(d,u,m,b){var p=s,v=b+m;d^=-1;for(var w=b;w<v;w++)d=d>>>8^p[255&(d^u.charCodeAt(w))];return-1^d})(0|l,n,n.length,0):0}},{"./utils":32}],5:[function(r,i,a){a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,i,a){var o=null;o=typeof Promise<"u"?Promise:r("lie"),i.exports={Promise:o}},{lie:37}],7:[function(r,i,a){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=r("pako"),n=r("./utils"),l=r("./stream/GenericWorker"),d=o?"uint8array":"array";function u(m,b){l.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=b,this.meta={}}a.magic="\b\0",n.inherits(u,l),u.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(n.transformTo(d,m.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(b){m.push({data:b,meta:m.meta})}},a.compressWorker=function(m){return new u("Deflate",m)},a.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,i,a){function o(p,v){var w,x="";for(w=0;w<v;w++)x+=String.fromCharCode(255&p),p>>>=8;return x}function s(p,v,w,x,y,k){var _,z,L=p.file,P=p.compression,D=k!==d.utf8encode,q=n.transformTo("string",k(L.name)),I=n.transformTo("string",d.utf8encode(L.name)),W=L.comment,it=n.transformTo("string",k(W)),$=n.transformTo("string",d.utf8encode(W)),N=I.length!==L.name.length,g=$.length!==W.length,B="",st="",U="",ct=L.dir,j=L.date,ht={crc32:0,compressedSize:0,uncompressedSize:0};v&&!w||(ht.crc32=p.crc32,ht.compressedSize=p.compressedSize,ht.uncompressedSize=p.uncompressedSize);var O=0;v&&(O|=8),D||!N&&!g||(O|=2048);var R=0,dt=0;ct&&(R|=16),y==="UNIX"?(dt=798,R|=(function(Y,jt){var he=Y;return Y||(he=jt?16893:33204),(65535&he)<<16})(L.unixPermissions,ct)):(dt=20,R|=(function(Y){return 63&(Y||0)})(L.dosPermissions)),_=j.getUTCHours(),_<<=6,_|=j.getUTCMinutes(),_<<=5,_|=j.getUTCSeconds()/2,z=j.getUTCFullYear()-1980,z<<=4,z|=j.getUTCMonth()+1,z<<=5,z|=j.getUTCDate(),N&&(st=o(1,1)+o(u(q),4)+I,B+="up"+o(st.length,2)+st),g&&(U=o(1,1)+o(u(it),4)+$,B+="uc"+o(U.length,2)+U);var et="";return et+=`
\0`,et+=o(O,2),et+=P.magic,et+=o(_,2),et+=o(z,2),et+=o(ht.crc32,4),et+=o(ht.compressedSize,4),et+=o(ht.uncompressedSize,4),et+=o(q.length,2),et+=o(B.length,2),{fileRecord:m.LOCAL_FILE_HEADER+et+q+B,dirRecord:m.CENTRAL_FILE_HEADER+o(dt,2)+et+o(it.length,2)+"\0\0\0\0"+o(R,4)+o(x,4)+q+B+it}}var n=r("../utils"),l=r("../stream/GenericWorker"),d=r("../utf8"),u=r("../crc32"),m=r("../signature");function b(p,v,w,x){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=w,this.encodeFileName=x,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}n.inherits(b,l),b.prototype.push=function(p){var v=p.meta.percent||0,w=this.entriesCount,x=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:w?(v+100*(w-x-1))/w:100}}))},b.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var v=this.streamFiles&&!p.file.dir;if(v){var w=s(p,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:w.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(p){this.accumulate=!1;var v=this.streamFiles&&!p.file.dir,w=s(p,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(w.dirRecord),v)this.push({data:(function(x){return m.DATA_DESCRIPTOR+o(x.crc32,4)+o(x.compressedSize,4)+o(x.uncompressedSize,4)})(p),meta:{percent:100}});else for(this.push({data:w.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var p=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var w=this.bytesWritten-p,x=(function(y,k,_,z,L){var P=n.transformTo("string",L(z));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(y,2)+o(y,2)+o(k,4)+o(_,4)+o(P.length,2)+P})(this.dirRecords.length,w,p,this.zipComment,this.encodeFileName);this.push({data:x,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(p){this._sources.push(p);var v=this;return p.on("data",function(w){v.processChunk(w)}),p.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),p.on("error",function(w){v.error(w)}),this},b.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(p){var v=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var w=0;w<v.length;w++)try{v[w].error(p)}catch{}return!0},b.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,v=0;v<p.length;v++)p[v].lock()},i.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,i,a){var o=r("../compressions"),s=r("./ZipFileWorker");a.generateWorker=function(n,l,d){var u=new s(l.streamFiles,d,l.platform,l.encodeFileName),m=0;try{n.forEach(function(b,p){m++;var v=(function(k,_){var z=k||_,L=o[z];if(!L)throw new Error(z+" is not a valid compression method !");return L})(p.options.compression,l.compression),w=p.options.compressionOptions||l.compressionOptions||{},x=p.dir,y=p.date;p._compressWorker(v,w).withStreamInfo("file",{name:b,dir:x,date:y,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(u)}),u.entriesCount=m}catch(b){u.error(b)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,i,a){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new o;for(var n in this)typeof this[n]!="function"&&(s[n]=this[n]);return s}}(o.prototype=r("./object")).loadAsync=r("./load"),o.support=r("./support"),o.defaults=r("./defaults"),o.version="3.10.1",o.loadAsync=function(s,n){return new o().loadAsync(s,n)},o.external=r("./external"),i.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,i,a){var o=r("./utils"),s=r("./external"),n=r("./utf8"),l=r("./zipEntries"),d=r("./stream/Crc32Probe"),u=r("./nodejsUtils");function m(b){return new s.Promise(function(p,v){var w=b.decompressed.getContentWorker().pipe(new d);w.on("error",function(x){v(x)}).on("end",function(){w.streamInfo.crc32!==b.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}i.exports=function(b,p){var v=this;return p=o.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),u.isNode&&u.isStream(b)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",b,!0,p.optimizedBinaryString,p.base64).then(function(w){var x=new l(p);return x.load(w),x}).then(function(w){var x=[s.Promise.resolve(w)],y=w.files;if(p.checkCRC32)for(var k=0;k<y.length;k++)x.push(m(y[k]));return s.Promise.all(x)}).then(function(w){for(var x=w.shift(),y=x.files,k=0;k<y.length;k++){var _=y[k],z=_.fileNameStr,L=o.resolve(_.fileNameStr);v.file(L,_.decompressed,{binary:!0,optimizedBinaryString:!0,date:_.date,dir:_.dir,comment:_.fileCommentStr.length?_.fileCommentStr:null,unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions,createFolders:p.createFolders}),_.dir||(v.file(L).unsafeOriginalName=z)}return x.zipComment.length&&(v.comment=x.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,i,a){var o=r("../utils"),s=r("../stream/GenericWorker");function n(l,d){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(d)}o.inherits(n,s),n.prototype._bindStream=function(l){var d=this;(this._stream=l).pause(),l.on("data",function(u){d.push({data:u,meta:{percent:0}})}).on("error",function(u){d.isPaused?this.generatedError=u:d.error(u)}).on("end",function(){d.isPaused?d._upstreamEnded=!0:d.end()})},n.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},n.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=n},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,i,a){var o=r("readable-stream").Readable;function s(n,l,d){o.call(this,l),this._helper=n;var u=this;n.on("data",function(m,b){u.push(m)||u._helper.pause(),d&&d(b)}).on("error",function(m){u.emit("error",m)}).on("end",function(){u.push(null)})}r("../utils").inherits(s,o),s.prototype._read=function(){this._helper.resume()},i.exports=s},{"../utils":32,"readable-stream":16}],14:[function(r,i,a){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,s);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,s)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var s=new Buffer(o);return s.fill(0),s},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(r,i,a){function o(L,P,D){var q,I=n.getTypeOf(P),W=n.extend(D||{},u);W.date=W.date||new Date,W.compression!==null&&(W.compression=W.compression.toUpperCase()),typeof W.unixPermissions=="string"&&(W.unixPermissions=parseInt(W.unixPermissions,8)),W.unixPermissions&&16384&W.unixPermissions&&(W.dir=!0),W.dosPermissions&&16&W.dosPermissions&&(W.dir=!0),W.dir&&(L=y(L)),W.createFolders&&(q=x(L))&&k.call(this,q,!0);var it=I==="string"&&W.binary===!1&&W.base64===!1;D&&D.binary!==void 0||(W.binary=!it),(P instanceof m&&P.uncompressedSize===0||W.dir||!P||P.length===0)&&(W.base64=!1,W.binary=!0,P="",W.compression="STORE",I="string");var $=null;$=P instanceof m||P instanceof l?P:v.isNode&&v.isStream(P)?new w(L,P):n.prepareContent(L,P,W.binary,W.optimizedBinaryString,W.base64);var N=new b(L,$,W);this.files[L]=N}var s=r("./utf8"),n=r("./utils"),l=r("./stream/GenericWorker"),d=r("./stream/StreamHelper"),u=r("./defaults"),m=r("./compressedObject"),b=r("./zipObject"),p=r("./generate"),v=r("./nodejsUtils"),w=r("./nodejs/NodejsStreamInputAdapter"),x=function(L){L.slice(-1)==="/"&&(L=L.substring(0,L.length-1));var P=L.lastIndexOf("/");return 0<P?L.substring(0,P):""},y=function(L){return L.slice(-1)!=="/"&&(L+="/"),L},k=function(L,P){return P=P!==void 0?P:u.createFolders,L=y(L),this.files[L]||o.call(this,L,null,{dir:!0,createFolders:P}),this.files[L]};function _(L){return Object.prototype.toString.call(L)==="[object RegExp]"}var z={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(L){var P,D,q;for(P in this.files)q=this.files[P],(D=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&L(D,q)},filter:function(L){var P=[];return this.forEach(function(D,q){L(D,q)&&P.push(q)}),P},file:function(L,P,D){if(arguments.length!==1)return L=this.root+L,o.call(this,L,P,D),this;if(_(L)){var q=L;return this.filter(function(W,it){return!it.dir&&q.test(W)})}var I=this.files[this.root+L];return I&&!I.dir?I:null},folder:function(L){if(!L)return this;if(_(L))return this.filter(function(I,W){return W.dir&&L.test(I)});var P=this.root+L,D=k.call(this,P),q=this.clone();return q.root=D.name,q},remove:function(L){L=this.root+L;var P=this.files[L];if(P||(L.slice(-1)!=="/"&&(L+="/"),P=this.files[L]),P&&!P.dir)delete this.files[L];else for(var D=this.filter(function(I,W){return W.name.slice(0,L.length)===L}),q=0;q<D.length;q++)delete this.files[D[q].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(L){var P,D={};try{if((D=n.extend(L||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=D.type.toLowerCase(),D.compression=D.compression.toUpperCase(),D.type==="binarystring"&&(D.type="string"),!D.type)throw new Error("No output type specified.");n.checkSupport(D.type),D.platform!=="darwin"&&D.platform!=="freebsd"&&D.platform!=="linux"&&D.platform!=="sunos"||(D.platform="UNIX"),D.platform==="win32"&&(D.platform="DOS");var q=D.comment||this.comment||"";P=p.generateWorker(this,D,q)}catch(I){(P=new l("error")).error(I)}return new d(P,D.type||"string",D.mimeType)},generateAsync:function(L,P){return this.generateInternalStream(L).accumulate(P)},generateNodeStream:function(L,P){return(L=L||{}).type||(L.type="nodebuffer"),this.generateInternalStream(L).toNodejsStream(P)}};i.exports=z},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,i,a){i.exports=r("stream")},{stream:void 0}],17:[function(r,i,a){var o=r("./DataReader");function s(n){o.call(this,n);for(var l=0;l<this.data.length;l++)n[l]=255&n[l]}r("../utils").inherits(s,o),s.prototype.byteAt=function(n){return this.data[this.zero+n]},s.prototype.lastIndexOfSignature=function(n){for(var l=n.charCodeAt(0),d=n.charCodeAt(1),u=n.charCodeAt(2),m=n.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===l&&this.data[b+1]===d&&this.data[b+2]===u&&this.data[b+3]===m)return b-this.zero;return-1},s.prototype.readAndCheckSignature=function(n){var l=n.charCodeAt(0),d=n.charCodeAt(1),u=n.charCodeAt(2),m=n.charCodeAt(3),b=this.readData(4);return l===b[0]&&d===b[1]&&u===b[2]&&m===b[3]},s.prototype.readData=function(n){if(this.checkOffset(n),n===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+n);return this.index+=n,l},i.exports=s},{"../utils":32,"./DataReader":18}],18:[function(r,i,a){var o=r("../utils");function s(n){this.data=n,this.length=n.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(n){this.checkIndex(this.index+n)},checkIndex:function(n){if(this.length<this.zero+n||n<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+n+"). Corrupted zip ?")},setIndex:function(n){this.checkIndex(n),this.index=n},skip:function(n){this.setIndex(this.index+n)},byteAt:function(){},readInt:function(n){var l,d=0;for(this.checkOffset(n),l=this.index+n-1;l>=this.index;l--)d=(d<<8)+this.byteAt(l);return this.index+=n,d},readString:function(n){return o.transformTo("string",this.readData(n))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var n=this.readInt(4);return new Date(Date.UTC(1980+(n>>25&127),(n>>21&15)-1,n>>16&31,n>>11&31,n>>5&63,(31&n)<<1))}},i.exports=s},{"../utils":32}],19:[function(r,i,a){var o=r("./Uint8ArrayReader");function s(n){o.call(this,n)}r("../utils").inherits(s,o),s.prototype.readData=function(n){this.checkOffset(n);var l=this.data.slice(this.zero+this.index,this.zero+this.index+n);return this.index+=n,l},i.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,i,a){var o=r("./DataReader");function s(n){o.call(this,n)}r("../utils").inherits(s,o),s.prototype.byteAt=function(n){return this.data.charCodeAt(this.zero+n)},s.prototype.lastIndexOfSignature=function(n){return this.data.lastIndexOf(n)-this.zero},s.prototype.readAndCheckSignature=function(n){return n===this.readData(4)},s.prototype.readData=function(n){this.checkOffset(n);var l=this.data.slice(this.zero+this.index,this.zero+this.index+n);return this.index+=n,l},i.exports=s},{"../utils":32,"./DataReader":18}],21:[function(r,i,a){var o=r("./ArrayReader");function s(n){o.call(this,n)}r("../utils").inherits(s,o),s.prototype.readData=function(n){if(this.checkOffset(n),n===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+n);return this.index+=n,l},i.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(r,i,a){var o=r("../utils"),s=r("../support"),n=r("./ArrayReader"),l=r("./StringReader"),d=r("./NodeBufferReader"),u=r("./Uint8ArrayReader");i.exports=function(m){var b=o.getTypeOf(m);return o.checkSupport(b),b!=="string"||s.uint8array?b==="nodebuffer"?new d(m):s.uint8array?new u(o.transformTo("uint8array",m)):new n(o.transformTo("array",m)):new l(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,i,a){a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,i,a){var o=r("./GenericWorker"),s=r("../utils");function n(l){o.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(n,o),n.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},i.exports=n},{"../utils":32,"./GenericWorker":28}],25:[function(r,i,a){var o=r("./GenericWorker"),s=r("../crc32");function n(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(n,o),n.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=n},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,i,a){var o=r("../utils"),s=r("./GenericWorker");function n(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}o.inherits(n,s),n.prototype.processChunk=function(l){if(l){var d=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=d+l.data.length}s.prototype.processChunk.call(this,l)},i.exports=n},{"../utils":32,"./GenericWorker":28}],27:[function(r,i,a){var o=r("../utils"),s=r("./GenericWorker");function n(l){s.call(this,"DataWorker");var d=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){d.dataIsReady=!0,d.data=u,d.max=u&&u.length||0,d.type=o.getTypeOf(u),d.isPaused||d._tickAndRepeat()},function(u){d.error(u)})}o.inherits(n,s),n.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},n.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},n.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},n.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,d=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,d);break;case"uint8array":l=this.data.subarray(this.index,d);break;case"array":case"nodebuffer":l=this.data.slice(this.index,d)}return this.index=d,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=n},{"../utils":32,"./GenericWorker":28}],28:[function(r,i,a){function o(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,n){return this._listeners[s].push(n),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,n){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,n)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var n=this;return s.on("data",function(l){n.processChunk(l)}),s.on("end",function(){n.end()}),s.on("error",function(l){n.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,n){return this.extraStreamInfo[s]=n,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},i.exports=o},{}],29:[function(r,i,a){var o=r("../utils"),s=r("./ConvertWorker"),n=r("./GenericWorker"),l=r("../base64"),d=r("../support"),u=r("../external"),m=null;if(d.nodestream)try{m=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(v,w){return new u.Promise(function(x,y){var k=[],_=v._internalType,z=v._outputType,L=v._mimeType;v.on("data",function(P,D){k.push(P),w&&w(D)}).on("error",function(P){k=[],y(P)}).on("end",function(){try{var P=(function(D,q,I){switch(D){case"blob":return o.newBlob(o.transformTo("arraybuffer",q),I);case"base64":return l.encode(q);default:return o.transformTo(D,q)}})(z,(function(D,q){var I,W=0,it=null,$=0;for(I=0;I<q.length;I++)$+=q[I].length;switch(D){case"string":return q.join("");case"array":return Array.prototype.concat.apply([],q);case"uint8array":for(it=new Uint8Array($),I=0;I<q.length;I++)it.set(q[I],W),W+=q[I].length;return it;case"nodebuffer":return Buffer.concat(q);default:throw new Error("concat : unsupported type '"+D+"'")}})(_,k),L);x(P)}catch(D){y(D)}k=[]}).resume()})}function p(v,w,x){var y=w;switch(w){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string"}try{this._internalType=y,this._outputType=w,this._mimeType=x,o.checkSupport(y),this._worker=v.pipe(new s(y)),v.lock()}catch(k){this._worker=new n("error"),this._worker.error(k)}}p.prototype={accumulate:function(v){return b(this,v)},on:function(v,w){var x=this;return v==="data"?this._worker.on(v,function(y){w.call(x,y.data,y.meta)}):this._worker.on(v,function(){o.delay(w,arguments,x)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},v)}},i.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,i,a){if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var o=new ArrayBuffer(0);try{a.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(o),a.blob=s.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,i,a){for(var o=r("./utils"),s=r("./support"),n=r("./nodejsUtils"),l=r("./stream/GenericWorker"),d=new Array(256),u=0;u<256;u++)d[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;d[254]=d[254]=1;function m(){l.call(this,"utf-8 decode"),this.leftOver=null}function b(){l.call(this,"utf-8 encode")}a.utf8encode=function(p){return s.nodebuffer?n.newBufferFrom(p,"utf-8"):(function(v){var w,x,y,k,_,z=v.length,L=0;for(k=0;k<z;k++)(64512&(x=v.charCodeAt(k)))==55296&&k+1<z&&(64512&(y=v.charCodeAt(k+1)))==56320&&(x=65536+(x-55296<<10)+(y-56320),k++),L+=x<128?1:x<2048?2:x<65536?3:4;for(w=s.uint8array?new Uint8Array(L):new Array(L),k=_=0;_<L;k++)(64512&(x=v.charCodeAt(k)))==55296&&k+1<z&&(64512&(y=v.charCodeAt(k+1)))==56320&&(x=65536+(x-55296<<10)+(y-56320),k++),x<128?w[_++]=x:(x<2048?w[_++]=192|x>>>6:(x<65536?w[_++]=224|x>>>12:(w[_++]=240|x>>>18,w[_++]=128|x>>>12&63),w[_++]=128|x>>>6&63),w[_++]=128|63&x);return w})(p)},a.utf8decode=function(p){return s.nodebuffer?o.transformTo("nodebuffer",p).toString("utf-8"):(function(v){var w,x,y,k,_=v.length,z=new Array(2*_);for(w=x=0;w<_;)if((y=v[w++])<128)z[x++]=y;else if(4<(k=d[y]))z[x++]=65533,w+=k-1;else{for(y&=k===2?31:k===3?15:7;1<k&&w<_;)y=y<<6|63&v[w++],k--;1<k?z[x++]=65533:y<65536?z[x++]=y:(y-=65536,z[x++]=55296|y>>10&1023,z[x++]=56320|1023&y)}return z.length!==x&&(z.subarray?z=z.subarray(0,x):z.length=x),o.applyFromCharCode(z)})(p=o.transformTo(s.uint8array?"uint8array":"array",p))},o.inherits(m,l),m.prototype.processChunk=function(p){var v=o.transformTo(s.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var w=v;(v=new Uint8Array(w.length+this.leftOver.length)).set(this.leftOver,0),v.set(w,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var x=(function(k,_){var z;for((_=_||k.length)>k.length&&(_=k.length),z=_-1;0<=z&&(192&k[z])==128;)z--;return z<0||z===0?_:z+d[k[z]]>_?z:_})(v),y=v;x!==v.length&&(s.uint8array?(y=v.subarray(0,x),this.leftOver=v.subarray(x,v.length)):(y=v.slice(0,x),this.leftOver=v.slice(x,v.length))),this.push({data:a.utf8decode(y),meta:p.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=m,o.inherits(b,l),b.prototype.processChunk=function(p){this.push({data:a.utf8encode(p.data),meta:p.meta})},a.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,i,a){var o=r("./support"),s=r("./base64"),n=r("./nodejsUtils"),l=r("./external");function d(w){return w}function u(w,x){for(var y=0;y<w.length;++y)x[y]=255&w.charCodeAt(y);return x}r("setimmediate"),a.newBlob=function(w,x){a.checkSupport("blob");try{return new Blob([w],{type:x})}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return y.append(w),y.getBlob(x)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(w,x,y){var k=[],_=0,z=w.length;if(z<=y)return String.fromCharCode.apply(null,w);for(;_<z;)x==="array"||x==="nodebuffer"?k.push(String.fromCharCode.apply(null,w.slice(_,Math.min(_+y,z)))):k.push(String.fromCharCode.apply(null,w.subarray(_,Math.min(_+y,z)))),_+=y;return k.join("")},stringifyByChar:function(w){for(var x="",y=0;y<w.length;y++)x+=String.fromCharCode(w[y]);return x},applyCanBeUsed:{uint8array:(function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,n.allocBuffer(1)).length===1}catch{return!1}})()}};function b(w){var x=65536,y=a.getTypeOf(w),k=!0;if(y==="uint8array"?k=m.applyCanBeUsed.uint8array:y==="nodebuffer"&&(k=m.applyCanBeUsed.nodebuffer),k)for(;1<x;)try{return m.stringifyByChunk(w,y,x)}catch{x=Math.floor(x/2)}return m.stringifyByChar(w)}function p(w,x){for(var y=0;y<w.length;y++)x[y]=w[y];return x}a.applyFromCharCode=b;var v={};v.string={string:d,array:function(w){return u(w,new Array(w.length))},arraybuffer:function(w){return v.string.uint8array(w).buffer},uint8array:function(w){return u(w,new Uint8Array(w.length))},nodebuffer:function(w){return u(w,n.allocBuffer(w.length))}},v.array={string:b,array:d,arraybuffer:function(w){return new Uint8Array(w).buffer},uint8array:function(w){return new Uint8Array(w)},nodebuffer:function(w){return n.newBufferFrom(w)}},v.arraybuffer={string:function(w){return b(new Uint8Array(w))},array:function(w){return p(new Uint8Array(w),new Array(w.byteLength))},arraybuffer:d,uint8array:function(w){return new Uint8Array(w)},nodebuffer:function(w){return n.newBufferFrom(new Uint8Array(w))}},v.uint8array={string:b,array:function(w){return p(w,new Array(w.length))},arraybuffer:function(w){return w.buffer},uint8array:d,nodebuffer:function(w){return n.newBufferFrom(w)}},v.nodebuffer={string:b,array:function(w){return p(w,new Array(w.length))},arraybuffer:function(w){return v.nodebuffer.uint8array(w).buffer},uint8array:function(w){return p(w,new Uint8Array(w.length))},nodebuffer:d},a.transformTo=function(w,x){if(x=x||"",!w)return x;a.checkSupport(w);var y=a.getTypeOf(x);return v[y][w](x)},a.resolve=function(w){for(var x=w.split("/"),y=[],k=0;k<x.length;k++){var _=x[k];_==="."||_===""&&k!==0&&k!==x.length-1||(_===".."?y.pop():y.push(_))}return y.join("/")},a.getTypeOf=function(w){return typeof w=="string"?"string":Object.prototype.toString.call(w)==="[object Array]"?"array":o.nodebuffer&&n.isBuffer(w)?"nodebuffer":o.uint8array&&w instanceof Uint8Array?"uint8array":o.arraybuffer&&w instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(w){if(!o[w.toLowerCase()])throw new Error(w+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(w){var x,y,k="";for(y=0;y<(w||"").length;y++)k+="\\x"+((x=w.charCodeAt(y))<16?"0":"")+x.toString(16).toUpperCase();return k},a.delay=function(w,x,y){setImmediate(function(){w.apply(y||null,x||[])})},a.inherits=function(w,x){function y(){}y.prototype=x.prototype,w.prototype=new y},a.extend=function(){var w,x,y={};for(w=0;w<arguments.length;w++)for(x in arguments[w])Object.prototype.hasOwnProperty.call(arguments[w],x)&&y[x]===void 0&&(y[x]=arguments[w][x]);return y},a.prepareContent=function(w,x,y,k,_){return l.Promise.resolve(x).then(function(z){return o.blob&&(z instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(z))!==-1)&&typeof FileReader<"u"?new l.Promise(function(L,P){var D=new FileReader;D.onload=function(q){L(q.target.result)},D.onerror=function(q){P(q.target.error)},D.readAsArrayBuffer(z)}):z}).then(function(z){var L=a.getTypeOf(z);return L?(L==="arraybuffer"?z=a.transformTo("uint8array",z):L==="string"&&(_?z=s.decode(z):y&&k!==!0&&(z=(function(P){return u(P,o.uint8array?new Uint8Array(P.length):new Array(P.length))})(z))),z):l.Promise.reject(new Error("Can't read the data of '"+w+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(r,i,a){var o=r("./reader/readerFor"),s=r("./utils"),n=r("./signature"),l=r("./zipEntry"),d=r("./support");function u(m){this.files=[],this.loadOptions=m}u.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(b)+", expected "+s.pretty(m)+")")}},isSignature:function(m,b){var p=this.reader.index;this.reader.setIndex(m);var v=this.reader.readString(4)===b;return this.reader.setIndex(p),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),b=d.uint8array?"uint8array":"array",p=s.transformTo(b,m);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,b,p,v=this.zip64EndOfCentralSize-44;0<v;)m=this.reader.readInt(2),b=this.reader.readInt(4),p=this.reader.readData(b),this.zip64ExtensibleData[m]={id:m,length:b,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,b;for(m=0;m<this.files.length;m++)b=this.files[m],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(n.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER);)(m=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,n.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var b=m;if(this.checkSignature(n.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,n.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var v=b-p;if(0<v)this.isSignature(b,n.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(m){this.reader=o(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(r,i,a){var o=r("./reader/readerFor"),s=r("./utils"),n=r("./compressedObject"),l=r("./crc32"),d=r("./utf8"),u=r("./compressions"),m=r("./support");function b(p,v){this.options=p,this.loadOptions=v}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var v,w;if(p.skip(22),this.fileNameLength=p.readInt(2),w=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(w),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=(function(x){for(var y in u)if(Object.prototype.hasOwnProperty.call(u,y)&&u[y].magic===x)return u[y];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,v,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var v=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(v),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=o(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var v,w,x,y=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<y;)v=p.readInt(2),w=p.readInt(2),x=p.readData(w),this.extraFields[v]={id:v,length:w,value:x};p.setIndex(y)},handleUTF8:function(){var p=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=d.utf8decode(this.fileName),this.fileCommentStr=d.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var w=s.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(w)}var x=this.findExtraFieldUnicodeComment();if(x!==null)this.fileCommentStr=x;else{var y=s.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(y)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var v=o(p.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:d.utf8decode(v.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var v=o(p.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:d.utf8decode(v.readData(p.length-5))}return null}},i.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,i,a){function o(v,w,x){this.name=v,this.dir=x.dir,this.date=x.date,this.comment=x.comment,this.unixPermissions=x.unixPermissions,this.dosPermissions=x.dosPermissions,this._data=w,this._dataBinary=x.binary,this.options={compression:x.compression,compressionOptions:x.compressionOptions}}var s=r("./stream/StreamHelper"),n=r("./stream/DataWorker"),l=r("./utf8"),d=r("./compressedObject"),u=r("./stream/GenericWorker");o.prototype={internalStream:function(v){var w=null,x="string";try{if(!v)throw new Error("No output type specified.");var y=(x=v.toLowerCase())==="string"||x==="text";x!=="binarystring"&&x!=="text"||(x="string"),w=this._decompressWorker();var k=!this._dataBinary;k&&!y&&(w=w.pipe(new l.Utf8EncodeWorker)),!k&&y&&(w=w.pipe(new l.Utf8DecodeWorker))}catch(_){(w=new u("error")).error(_)}return new s(w,x,"")},async:function(v,w){return this.internalStream(v).accumulate(w)},nodeStream:function(v,w){return this.internalStream(v||"nodebuffer").toNodejsStream(w)},_compressWorker:function(v,w){if(this._data instanceof d&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var x=this._decompressWorker();return this._dataBinary||(x=x.pipe(new l.Utf8EncodeWorker)),d.createWorkerFrom(x,v,w)},_decompressWorker:function(){return this._data instanceof d?this._data.getContentWorker():this._data instanceof u?this._data:new n(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<m.length;p++)o.prototype[m[p]]=b;i.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,i,a){(function(o){var s,n,l=o.MutationObserver||o.WebKitMutationObserver;if(l){var d=0,u=new l(v),m=o.document.createTextNode("");u.observe(m,{characterData:!0}),s=function(){m.data=d=++d%2}}else if(o.setImmediate||o.MessageChannel===void 0)s="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var w=o.document.createElement("script");w.onreadystatechange=function(){v(),w.onreadystatechange=null,w.parentNode.removeChild(w),w=null},o.document.documentElement.appendChild(w)}:function(){setTimeout(v,0)};else{var b=new o.MessageChannel;b.port1.onmessage=v,s=function(){b.port2.postMessage(0)}}var p=[];function v(){var w,x;n=!0;for(var y=p.length;y;){for(x=p,p=[],w=-1;++w<y;)x[w]();y=p.length}n=!1}i.exports=function(w){p.push(w)!==1||n||s()}}).call(this,typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,i,a){var o=r("immediate");function s(){}var n={},l=["REJECTED"],d=["FULFILLED"],u=["PENDING"];function m(y){if(typeof y!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,y!==s&&w(this,y)}function b(y,k,_){this.promise=y,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof _=="function"&&(this.onRejected=_,this.callRejected=this.otherCallRejected)}function p(y,k,_){o(function(){var z;try{z=k(_)}catch(L){return n.reject(y,L)}z===y?n.reject(y,new TypeError("Cannot resolve promise with itself")):n.resolve(y,z)})}function v(y){var k=y&&y.then;if(y&&(typeof y=="object"||typeof y=="function")&&typeof k=="function")return function(){k.apply(y,arguments)}}function w(y,k){var _=!1;function z(D){_||(_=!0,n.reject(y,D))}function L(D){_||(_=!0,n.resolve(y,D))}var P=x(function(){k(L,z)});P.status==="error"&&z(P.value)}function x(y,k){var _={};try{_.value=y(k),_.status="success"}catch(z){_.status="error",_.value=z}return _}(i.exports=m).prototype.finally=function(y){if(typeof y!="function")return this;var k=this.constructor;return this.then(function(_){return k.resolve(y()).then(function(){return _})},function(_){return k.resolve(y()).then(function(){throw _})})},m.prototype.catch=function(y){return this.then(null,y)},m.prototype.then=function(y,k){if(typeof y!="function"&&this.state===d||typeof k!="function"&&this.state===l)return this;var _=new this.constructor(s);return this.state!==u?p(_,this.state===d?y:k,this.outcome):this.queue.push(new b(_,y,k)),_},b.prototype.callFulfilled=function(y){n.resolve(this.promise,y)},b.prototype.otherCallFulfilled=function(y){p(this.promise,this.onFulfilled,y)},b.prototype.callRejected=function(y){n.reject(this.promise,y)},b.prototype.otherCallRejected=function(y){p(this.promise,this.onRejected,y)},n.resolve=function(y,k){var _=x(v,k);if(_.status==="error")return n.reject(y,_.value);var z=_.value;if(z)w(y,z);else{y.state=d,y.outcome=k;for(var L=-1,P=y.queue.length;++L<P;)y.queue[L].callFulfilled(k)}return y},n.reject=function(y,k){y.state=l,y.outcome=k;for(var _=-1,z=y.queue.length;++_<z;)y.queue[_].callRejected(k);return y},m.resolve=function(y){return y instanceof this?y:n.resolve(new this(s),y)},m.reject=function(y){var k=new this(s);return n.reject(k,y)},m.all=function(y){var k=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=y.length,z=!1;if(!_)return this.resolve([]);for(var L=new Array(_),P=0,D=-1,q=new this(s);++D<_;)I(y[D],D);return q;function I(W,it){k.resolve(W).then(function($){L[it]=$,++P!==_||z||(z=!0,n.resolve(q,L))},function($){z||(z=!0,n.reject(q,$))})}},m.race=function(y){var k=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=y.length,z=!1;if(!_)return this.resolve([]);for(var L=-1,P=new this(s);++L<_;)D=y[L],k.resolve(D).then(function(q){z||(z=!0,n.resolve(P,q))},function(q){z||(z=!0,n.reject(P,q))});var D;return P}},{immediate:36}],38:[function(r,i,a){var o={};(0,r("./lib/utils/common").assign)(o,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),i.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,i,a){var o=r("./zlib/deflate"),s=r("./utils/common"),n=r("./utils/strings"),l=r("./zlib/messages"),d=r("./zlib/zstream"),u=Object.prototype.toString,m=0,b=-1,p=0,v=8;function w(y){if(!(this instanceof w))return new w(y);this.options=s.assign({level:b,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},y||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var _=o.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(_!==m)throw new Error(l[_]);if(k.header&&o.deflateSetHeader(this.strm,k.header),k.dictionary){var z;if(z=typeof k.dictionary=="string"?n.string2buf(k.dictionary):u.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(_=o.deflateSetDictionary(this.strm,z))!==m)throw new Error(l[_]);this._dict_set=!0}}function x(y,k){var _=new w(k);if(_.push(y,!0),_.err)throw _.msg||l[_.err];return _.result}w.prototype.push=function(y,k){var _,z,L=this.strm,P=this.options.chunkSize;if(this.ended)return!1;z=k===~~k?k:k===!0?4:0,typeof y=="string"?L.input=n.string2buf(y):u.call(y)==="[object ArrayBuffer]"?L.input=new Uint8Array(y):L.input=y,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new s.Buf8(P),L.next_out=0,L.avail_out=P),(_=o.deflate(L,z))!==1&&_!==m)return this.onEnd(_),!(this.ended=!0);L.avail_out!==0&&(L.avail_in!==0||z!==4&&z!==2)||(this.options.to==="string"?this.onData(n.buf2binstring(s.shrinkBuf(L.output,L.next_out))):this.onData(s.shrinkBuf(L.output,L.next_out)))}while((0<L.avail_in||L.avail_out===0)&&_!==1);return z===4?(_=o.deflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===m):z!==2||(this.onEnd(m),!(L.avail_out=0))},w.prototype.onData=function(y){this.chunks.push(y)},w.prototype.onEnd=function(y){y===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},a.Deflate=w,a.deflate=x,a.deflateRaw=function(y,k){return(k=k||{}).raw=!0,x(y,k)},a.gzip=function(y,k){return(k=k||{}).gzip=!0,x(y,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,i,a){var o=r("./zlib/inflate"),s=r("./utils/common"),n=r("./utils/strings"),l=r("./zlib/constants"),d=r("./zlib/messages"),u=r("./zlib/zstream"),m=r("./zlib/gzheader"),b=Object.prototype.toString;function p(w){if(!(this instanceof p))return new p(w);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},w||{});var x=this.options;x.raw&&0<=x.windowBits&&x.windowBits<16&&(x.windowBits=-x.windowBits,x.windowBits===0&&(x.windowBits=-15)),!(0<=x.windowBits&&x.windowBits<16)||w&&w.windowBits||(x.windowBits+=32),15<x.windowBits&&x.windowBits<48&&(15&x.windowBits)==0&&(x.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var y=o.inflateInit2(this.strm,x.windowBits);if(y!==l.Z_OK)throw new Error(d[y]);this.header=new m,o.inflateGetHeader(this.strm,this.header)}function v(w,x){var y=new p(x);if(y.push(w,!0),y.err)throw y.msg||d[y.err];return y.result}p.prototype.push=function(w,x){var y,k,_,z,L,P,D=this.strm,q=this.options.chunkSize,I=this.options.dictionary,W=!1;if(this.ended)return!1;k=x===~~x?x:x===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof w=="string"?D.input=n.binstring2buf(w):b.call(w)==="[object ArrayBuffer]"?D.input=new Uint8Array(w):D.input=w,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new s.Buf8(q),D.next_out=0,D.avail_out=q),(y=o.inflate(D,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&I&&(P=typeof I=="string"?n.string2buf(I):b.call(I)==="[object ArrayBuffer]"?new Uint8Array(I):I,y=o.inflateSetDictionary(this.strm,P)),y===l.Z_BUF_ERROR&&W===!0&&(y=l.Z_OK,W=!1),y!==l.Z_STREAM_END&&y!==l.Z_OK)return this.onEnd(y),!(this.ended=!0);D.next_out&&(D.avail_out!==0&&y!==l.Z_STREAM_END&&(D.avail_in!==0||k!==l.Z_FINISH&&k!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(_=n.utf8border(D.output,D.next_out),z=D.next_out-_,L=n.buf2string(D.output,_),D.next_out=z,D.avail_out=q-z,z&&s.arraySet(D.output,D.output,_,z,0),this.onData(L)):this.onData(s.shrinkBuf(D.output,D.next_out)))),D.avail_in===0&&D.avail_out===0&&(W=!0)}while((0<D.avail_in||D.avail_out===0)&&y!==l.Z_STREAM_END);return y===l.Z_STREAM_END&&(k=l.Z_FINISH),k===l.Z_FINISH?(y=o.inflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===l.Z_OK):k!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(D.avail_out=0))},p.prototype.onData=function(w){this.chunks.push(w)},p.prototype.onEnd=function(w){w===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},a.Inflate=p,a.inflate=v,a.inflateRaw=function(w,x){return(x=x||{}).raw=!0,v(w,x)},a.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,i,a){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(l){for(var d=Array.prototype.slice.call(arguments,1);d.length;){var u=d.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var m in u)u.hasOwnProperty(m)&&(l[m]=u[m])}}return l},a.shrinkBuf=function(l,d){return l.length===d?l:l.subarray?l.subarray(0,d):(l.length=d,l)};var s={arraySet:function(l,d,u,m,b){if(d.subarray&&l.subarray)l.set(d.subarray(u,u+m),b);else for(var p=0;p<m;p++)l[b+p]=d[u+p]},flattenChunks:function(l){var d,u,m,b,p,v;for(d=m=0,u=l.length;d<u;d++)m+=l[d].length;for(v=new Uint8Array(m),d=b=0,u=l.length;d<u;d++)p=l[d],v.set(p,b),b+=p.length;return v}},n={arraySet:function(l,d,u,m,b){for(var p=0;p<m;p++)l[b+p]=d[u+p]},flattenChunks:function(l){return[].concat.apply([],l)}};a.setTyped=function(l){l?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,s)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,n))},a.setTyped(o)},{}],42:[function(r,i,a){var o=r("./common"),s=!0,n=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{n=!1}for(var l=new o.Buf8(256),d=0;d<256;d++)l[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;function u(m,b){if(b<65537&&(m.subarray&&n||!m.subarray&&s))return String.fromCharCode.apply(null,o.shrinkBuf(m,b));for(var p="",v=0;v<b;v++)p+=String.fromCharCode(m[v]);return p}l[254]=l[254]=1,a.string2buf=function(m){var b,p,v,w,x,y=m.length,k=0;for(w=0;w<y;w++)(64512&(p=m.charCodeAt(w)))==55296&&w+1<y&&(64512&(v=m.charCodeAt(w+1)))==56320&&(p=65536+(p-55296<<10)+(v-56320),w++),k+=p<128?1:p<2048?2:p<65536?3:4;for(b=new o.Buf8(k),w=x=0;x<k;w++)(64512&(p=m.charCodeAt(w)))==55296&&w+1<y&&(64512&(v=m.charCodeAt(w+1)))==56320&&(p=65536+(p-55296<<10)+(v-56320),w++),p<128?b[x++]=p:(p<2048?b[x++]=192|p>>>6:(p<65536?b[x++]=224|p>>>12:(b[x++]=240|p>>>18,b[x++]=128|p>>>12&63),b[x++]=128|p>>>6&63),b[x++]=128|63&p);return b},a.buf2binstring=function(m){return u(m,m.length)},a.binstring2buf=function(m){for(var b=new o.Buf8(m.length),p=0,v=b.length;p<v;p++)b[p]=m.charCodeAt(p);return b},a.buf2string=function(m,b){var p,v,w,x,y=b||m.length,k=new Array(2*y);for(p=v=0;p<y;)if((w=m[p++])<128)k[v++]=w;else if(4<(x=l[w]))k[v++]=65533,p+=x-1;else{for(w&=x===2?31:x===3?15:7;1<x&&p<y;)w=w<<6|63&m[p++],x--;1<x?k[v++]=65533:w<65536?k[v++]=w:(w-=65536,k[v++]=55296|w>>10&1023,k[v++]=56320|1023&w)}return u(k,v)},a.utf8border=function(m,b){var p;for((b=b||m.length)>m.length&&(b=m.length),p=b-1;0<=p&&(192&m[p])==128;)p--;return p<0||p===0?b:p+l[m[p]]>b?p:b}},{"./common":41}],43:[function(r,i,a){i.exports=function(o,s,n,l){for(var d=65535&o|0,u=o>>>16&65535|0,m=0;n!==0;){for(n-=m=2e3<n?2e3:n;u=u+(d=d+s[l++]|0)|0,--m;);d%=65521,u%=65521}return d|u<<16|0}},{}],44:[function(r,i,a){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,i,a){var o=(function(){for(var s,n=[],l=0;l<256;l++){s=l;for(var d=0;d<8;d++)s=1&s?3988292384^s>>>1:s>>>1;n[l]=s}return n})();i.exports=function(s,n,l,d){var u=o,m=d+l;s^=-1;for(var b=d;b<m;b++)s=s>>>8^u[255&(s^n[b])];return-1^s}},{}],46:[function(r,i,a){var o,s=r("../utils/common"),n=r("./trees"),l=r("./adler32"),d=r("./crc32"),u=r("./messages"),m=0,b=4,p=0,v=-2,w=-1,x=4,y=2,k=8,_=9,z=286,L=30,P=19,D=2*z+1,q=15,I=3,W=258,it=W+I+1,$=42,N=113,g=1,B=2,st=3,U=4;function ct(f,M){return f.msg=u[M],M}function j(f){return(f<<1)-(4<f?9:0)}function ht(f){for(var M=f.length;0<=--M;)f[M]=0}function O(f){var M=f.state,F=M.pending;F>f.avail_out&&(F=f.avail_out),F!==0&&(s.arraySet(f.output,M.pending_buf,M.pending_out,F,f.next_out),f.next_out+=F,M.pending_out+=F,f.total_out+=F,f.avail_out-=F,M.pending-=F,M.pending===0&&(M.pending_out=0))}function R(f,M){n._tr_flush_block(f,0<=f.block_start?f.block_start:-1,f.strstart-f.block_start,M),f.block_start=f.strstart,O(f.strm)}function dt(f,M){f.pending_buf[f.pending++]=M}function et(f,M){f.pending_buf[f.pending++]=M>>>8&255,f.pending_buf[f.pending++]=255&M}function Y(f,M){var F,E,C=f.max_chain_length,A=f.strstart,V=f.prev_length,H=f.nice_match,T=f.strstart>f.w_size-it?f.strstart-(f.w_size-it):0,K=f.window,rt=f.w_mask,G=f.prev,nt=f.strstart+W,Ot=K[A+V-1],xt=K[A+V];f.prev_length>=f.good_match&&(C>>=2),H>f.lookahead&&(H=f.lookahead);do if(K[(F=M)+V]===xt&&K[F+V-1]===Ot&&K[F]===K[A]&&K[++F]===K[A+1]){A+=2,F++;do;while(K[++A]===K[++F]&&K[++A]===K[++F]&&K[++A]===K[++F]&&K[++A]===K[++F]&&K[++A]===K[++F]&&K[++A]===K[++F]&&K[++A]===K[++F]&&K[++A]===K[++F]&&A<nt);if(E=W-(nt-A),A=nt-W,V<E){if(f.match_start=M,H<=(V=E))break;Ot=K[A+V-1],xt=K[A+V]}}while((M=G[M&rt])>T&&--C!=0);return V<=f.lookahead?V:f.lookahead}function jt(f){var M,F,E,C,A,V,H,T,K,rt,G=f.w_size;do{if(C=f.window_size-f.lookahead-f.strstart,f.strstart>=G+(G-it)){for(s.arraySet(f.window,f.window,G,G,0),f.match_start-=G,f.strstart-=G,f.block_start-=G,M=F=f.hash_size;E=f.head[--M],f.head[M]=G<=E?E-G:0,--F;);for(M=F=G;E=f.prev[--M],f.prev[M]=G<=E?E-G:0,--F;);C+=G}if(f.strm.avail_in===0)break;if(V=f.strm,H=f.window,T=f.strstart+f.lookahead,K=C,rt=void 0,rt=V.avail_in,K<rt&&(rt=K),F=rt===0?0:(V.avail_in-=rt,s.arraySet(H,V.input,V.next_in,rt,T),V.state.wrap===1?V.adler=l(V.adler,H,rt,T):V.state.wrap===2&&(V.adler=d(V.adler,H,rt,T)),V.next_in+=rt,V.total_in+=rt,rt),f.lookahead+=F,f.lookahead+f.insert>=I)for(A=f.strstart-f.insert,f.ins_h=f.window[A],f.ins_h=(f.ins_h<<f.hash_shift^f.window[A+1])&f.hash_mask;f.insert&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[A+I-1])&f.hash_mask,f.prev[A&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=A,A++,f.insert--,!(f.lookahead+f.insert<I)););}while(f.lookahead<it&&f.strm.avail_in!==0)}function he(f,M){for(var F,E;;){if(f.lookahead<it){if(jt(f),f.lookahead<it&&M===m)return g;if(f.lookahead===0)break}if(F=0,f.lookahead>=I&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+I-1])&f.hash_mask,F=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),F!==0&&f.strstart-F<=f.w_size-it&&(f.match_length=Y(f,F)),f.match_length>=I)if(E=n._tr_tally(f,f.strstart-f.match_start,f.match_length-I),f.lookahead-=f.match_length,f.match_length<=f.max_lazy_match&&f.lookahead>=I){for(f.match_length--;f.strstart++,f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+I-1])&f.hash_mask,F=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart,--f.match_length!=0;);f.strstart++}else f.strstart+=f.match_length,f.match_length=0,f.ins_h=f.window[f.strstart],f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+1])&f.hash_mask;else E=n._tr_tally(f,0,f.window[f.strstart]),f.lookahead--,f.strstart++;if(E&&(R(f,!1),f.strm.avail_out===0))return g}return f.insert=f.strstart<I-1?f.strstart:I-1,M===b?(R(f,!0),f.strm.avail_out===0?st:U):f.last_lit&&(R(f,!1),f.strm.avail_out===0)?g:B}function yt(f,M){for(var F,E,C;;){if(f.lookahead<it){if(jt(f),f.lookahead<it&&M===m)return g;if(f.lookahead===0)break}if(F=0,f.lookahead>=I&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+I-1])&f.hash_mask,F=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),f.prev_length=f.match_length,f.prev_match=f.match_start,f.match_length=I-1,F!==0&&f.prev_length<f.max_lazy_match&&f.strstart-F<=f.w_size-it&&(f.match_length=Y(f,F),f.match_length<=5&&(f.strategy===1||f.match_length===I&&4096<f.strstart-f.match_start)&&(f.match_length=I-1)),f.prev_length>=I&&f.match_length<=f.prev_length){for(C=f.strstart+f.lookahead-I,E=n._tr_tally(f,f.strstart-1-f.prev_match,f.prev_length-I),f.lookahead-=f.prev_length-1,f.prev_length-=2;++f.strstart<=C&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+I-1])&f.hash_mask,F=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),--f.prev_length!=0;);if(f.match_available=0,f.match_length=I-1,f.strstart++,E&&(R(f,!1),f.strm.avail_out===0))return g}else if(f.match_available){if((E=n._tr_tally(f,0,f.window[f.strstart-1]))&&R(f,!1),f.strstart++,f.lookahead--,f.strm.avail_out===0)return g}else f.match_available=1,f.strstart++,f.lookahead--}return f.match_available&&(E=n._tr_tally(f,0,f.window[f.strstart-1]),f.match_available=0),f.insert=f.strstart<I-1?f.strstart:I-1,M===b?(R(f,!0),f.strm.avail_out===0?st:U):f.last_lit&&(R(f,!1),f.strm.avail_out===0)?g:B}function $t(f,M,F,E,C){this.good_length=f,this.max_lazy=M,this.nice_length=F,this.max_chain=E,this.func=C}function Yt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*D),this.dyn_dtree=new s.Buf16(2*(2*L+1)),this.bl_tree=new s.Buf16(2*(2*P+1)),ht(this.dyn_ltree),ht(this.dyn_dtree),ht(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(q+1),this.heap=new s.Buf16(2*z+1),ht(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*z+1),ht(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Kt(f){var M;return f&&f.state?(f.total_in=f.total_out=0,f.data_type=y,(M=f.state).pending=0,M.pending_out=0,M.wrap<0&&(M.wrap=-M.wrap),M.status=M.wrap?$:N,f.adler=M.wrap===2?0:1,M.last_flush=m,n._tr_init(M),p):ct(f,v)}function lr(f){var M=Kt(f);return M===p&&(function(F){F.window_size=2*F.w_size,ht(F.head),F.max_lazy_match=o[F.level].max_lazy,F.good_match=o[F.level].good_length,F.nice_match=o[F.level].nice_length,F.max_chain_length=o[F.level].max_chain,F.strstart=0,F.block_start=0,F.lookahead=0,F.insert=0,F.match_length=F.prev_length=I-1,F.match_available=0,F.ins_h=0})(f.state),M}function Ke(f,M,F,E,C,A){if(!f)return v;var V=1;if(M===w&&(M=6),E<0?(V=0,E=-E):15<E&&(V=2,E-=16),C<1||_<C||F!==k||E<8||15<E||M<0||9<M||A<0||x<A)return ct(f,v);E===8&&(E=9);var H=new Yt;return(f.state=H).strm=f,H.wrap=V,H.gzhead=null,H.w_bits=E,H.w_size=1<<H.w_bits,H.w_mask=H.w_size-1,H.hash_bits=C+7,H.hash_size=1<<H.hash_bits,H.hash_mask=H.hash_size-1,H.hash_shift=~~((H.hash_bits+I-1)/I),H.window=new s.Buf8(2*H.w_size),H.head=new s.Buf16(H.hash_size),H.prev=new s.Buf16(H.w_size),H.lit_bufsize=1<<C+6,H.pending_buf_size=4*H.lit_bufsize,H.pending_buf=new s.Buf8(H.pending_buf_size),H.d_buf=1*H.lit_bufsize,H.l_buf=3*H.lit_bufsize,H.level=M,H.strategy=A,H.method=F,lr(f)}o=[new $t(0,0,0,0,function(f,M){var F=65535;for(F>f.pending_buf_size-5&&(F=f.pending_buf_size-5);;){if(f.lookahead<=1){if(jt(f),f.lookahead===0&&M===m)return g;if(f.lookahead===0)break}f.strstart+=f.lookahead,f.lookahead=0;var E=f.block_start+F;if((f.strstart===0||f.strstart>=E)&&(f.lookahead=f.strstart-E,f.strstart=E,R(f,!1),f.strm.avail_out===0)||f.strstart-f.block_start>=f.w_size-it&&(R(f,!1),f.strm.avail_out===0))return g}return f.insert=0,M===b?(R(f,!0),f.strm.avail_out===0?st:U):(f.strstart>f.block_start&&(R(f,!1),f.strm.avail_out),g)}),new $t(4,4,8,4,he),new $t(4,5,16,8,he),new $t(4,6,32,32,he),new $t(4,4,16,16,yt),new $t(8,16,32,32,yt),new $t(8,16,128,128,yt),new $t(8,32,128,256,yt),new $t(32,128,258,1024,yt),new $t(32,258,258,4096,yt)],a.deflateInit=function(f,M){return Ke(f,M,k,15,8,0)},a.deflateInit2=Ke,a.deflateReset=lr,a.deflateResetKeep=Kt,a.deflateSetHeader=function(f,M){return f&&f.state?f.state.wrap!==2?v:(f.state.gzhead=M,p):v},a.deflate=function(f,M){var F,E,C,A;if(!f||!f.state||5<M||M<0)return f?ct(f,v):v;if(E=f.state,!f.output||!f.input&&f.avail_in!==0||E.status===666&&M!==b)return ct(f,f.avail_out===0?-5:v);if(E.strm=f,F=E.last_flush,E.last_flush=M,E.status===$)if(E.wrap===2)f.adler=0,dt(E,31),dt(E,139),dt(E,8),E.gzhead?(dt(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),dt(E,255&E.gzhead.time),dt(E,E.gzhead.time>>8&255),dt(E,E.gzhead.time>>16&255),dt(E,E.gzhead.time>>24&255),dt(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),dt(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(dt(E,255&E.gzhead.extra.length),dt(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(f.adler=d(f.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(dt(E,0),dt(E,0),dt(E,0),dt(E,0),dt(E,0),dt(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),dt(E,3),E.status=N);else{var V=k+(E.w_bits-8<<4)<<8;V|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(V|=32),V+=31-V%31,E.status=N,et(E,V),E.strstart!==0&&(et(E,f.adler>>>16),et(E,65535&f.adler)),f.adler=1}if(E.status===69)if(E.gzhead.extra){for(C=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>C&&(f.adler=d(f.adler,E.pending_buf,E.pending-C,C)),O(f),C=E.pending,E.pending!==E.pending_buf_size));)dt(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>C&&(f.adler=d(f.adler,E.pending_buf,E.pending-C,C)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){C=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>C&&(f.adler=d(f.adler,E.pending_buf,E.pending-C,C)),O(f),C=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,dt(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>C&&(f.adler=d(f.adler,E.pending_buf,E.pending-C,C)),A===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){C=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>C&&(f.adler=d(f.adler,E.pending_buf,E.pending-C,C)),O(f),C=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,dt(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>C&&(f.adler=d(f.adler,E.pending_buf,E.pending-C,C)),A===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&O(f),E.pending+2<=E.pending_buf_size&&(dt(E,255&f.adler),dt(E,f.adler>>8&255),f.adler=0,E.status=N)):E.status=N),E.pending!==0){if(O(f),f.avail_out===0)return E.last_flush=-1,p}else if(f.avail_in===0&&j(M)<=j(F)&&M!==b)return ct(f,-5);if(E.status===666&&f.avail_in!==0)return ct(f,-5);if(f.avail_in!==0||E.lookahead!==0||M!==m&&E.status!==666){var H=E.strategy===2?(function(T,K){for(var rt;;){if(T.lookahead===0&&(jt(T),T.lookahead===0)){if(K===m)return g;break}if(T.match_length=0,rt=n._tr_tally(T,0,T.window[T.strstart]),T.lookahead--,T.strstart++,rt&&(R(T,!1),T.strm.avail_out===0))return g}return T.insert=0,K===b?(R(T,!0),T.strm.avail_out===0?st:U):T.last_lit&&(R(T,!1),T.strm.avail_out===0)?g:B})(E,M):E.strategy===3?(function(T,K){for(var rt,G,nt,Ot,xt=T.window;;){if(T.lookahead<=W){if(jt(T),T.lookahead<=W&&K===m)return g;if(T.lookahead===0)break}if(T.match_length=0,T.lookahead>=I&&0<T.strstart&&(G=xt[nt=T.strstart-1])===xt[++nt]&&G===xt[++nt]&&G===xt[++nt]){Ot=T.strstart+W;do;while(G===xt[++nt]&&G===xt[++nt]&&G===xt[++nt]&&G===xt[++nt]&&G===xt[++nt]&&G===xt[++nt]&&G===xt[++nt]&&G===xt[++nt]&&nt<Ot);T.match_length=W-(Ot-nt),T.match_length>T.lookahead&&(T.match_length=T.lookahead)}if(T.match_length>=I?(rt=n._tr_tally(T,1,T.match_length-I),T.lookahead-=T.match_length,T.strstart+=T.match_length,T.match_length=0):(rt=n._tr_tally(T,0,T.window[T.strstart]),T.lookahead--,T.strstart++),rt&&(R(T,!1),T.strm.avail_out===0))return g}return T.insert=0,K===b?(R(T,!0),T.strm.avail_out===0?st:U):T.last_lit&&(R(T,!1),T.strm.avail_out===0)?g:B})(E,M):o[E.level].func(E,M);if(H!==st&&H!==U||(E.status=666),H===g||H===st)return f.avail_out===0&&(E.last_flush=-1),p;if(H===B&&(M===1?n._tr_align(E):M!==5&&(n._tr_stored_block(E,0,0,!1),M===3&&(ht(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),O(f),f.avail_out===0))return E.last_flush=-1,p}return M!==b?p:E.wrap<=0?1:(E.wrap===2?(dt(E,255&f.adler),dt(E,f.adler>>8&255),dt(E,f.adler>>16&255),dt(E,f.adler>>24&255),dt(E,255&f.total_in),dt(E,f.total_in>>8&255),dt(E,f.total_in>>16&255),dt(E,f.total_in>>24&255)):(et(E,f.adler>>>16),et(E,65535&f.adler)),O(f),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?p:1)},a.deflateEnd=function(f){var M;return f&&f.state?(M=f.state.status)!==$&&M!==69&&M!==73&&M!==91&&M!==103&&M!==N&&M!==666?ct(f,v):(f.state=null,M===N?ct(f,-3):p):v},a.deflateSetDictionary=function(f,M){var F,E,C,A,V,H,T,K,rt=M.length;if(!f||!f.state||(A=(F=f.state).wrap)===2||A===1&&F.status!==$||F.lookahead)return v;for(A===1&&(f.adler=l(f.adler,M,rt,0)),F.wrap=0,rt>=F.w_size&&(A===0&&(ht(F.head),F.strstart=0,F.block_start=0,F.insert=0),K=new s.Buf8(F.w_size),s.arraySet(K,M,rt-F.w_size,F.w_size,0),M=K,rt=F.w_size),V=f.avail_in,H=f.next_in,T=f.input,f.avail_in=rt,f.next_in=0,f.input=M,jt(F);F.lookahead>=I;){for(E=F.strstart,C=F.lookahead-(I-1);F.ins_h=(F.ins_h<<F.hash_shift^F.window[E+I-1])&F.hash_mask,F.prev[E&F.w_mask]=F.head[F.ins_h],F.head[F.ins_h]=E,E++,--C;);F.strstart=E,F.lookahead=I-1,jt(F)}return F.strstart+=F.lookahead,F.block_start=F.strstart,F.insert=F.lookahead,F.lookahead=0,F.match_length=F.prev_length=I-1,F.match_available=0,f.next_in=H,f.input=T,f.avail_in=V,F.wrap=A,p},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,i,a){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,i,a){i.exports=function(o,s){var n,l,d,u,m,b,p,v,w,x,y,k,_,z,L,P,D,q,I,W,it,$,N,g,B;n=o.state,l=o.next_in,g=o.input,d=l+(o.avail_in-5),u=o.next_out,B=o.output,m=u-(s-o.avail_out),b=u+(o.avail_out-257),p=n.dmax,v=n.wsize,w=n.whave,x=n.wnext,y=n.window,k=n.hold,_=n.bits,z=n.lencode,L=n.distcode,P=(1<<n.lenbits)-1,D=(1<<n.distbits)-1;t:do{_<15&&(k+=g[l++]<<_,_+=8,k+=g[l++]<<_,_+=8),q=z[k&P];e:for(;;){if(k>>>=I=q>>>24,_-=I,(I=q>>>16&255)===0)B[u++]=65535&q;else{if(!(16&I)){if((64&I)==0){q=z[(65535&q)+(k&(1<<I)-1)];continue e}if(32&I){n.mode=12;break t}o.msg="invalid literal/length code",n.mode=30;break t}W=65535&q,(I&=15)&&(_<I&&(k+=g[l++]<<_,_+=8),W+=k&(1<<I)-1,k>>>=I,_-=I),_<15&&(k+=g[l++]<<_,_+=8,k+=g[l++]<<_,_+=8),q=L[k&D];r:for(;;){if(k>>>=I=q>>>24,_-=I,!(16&(I=q>>>16&255))){if((64&I)==0){q=L[(65535&q)+(k&(1<<I)-1)];continue r}o.msg="invalid distance code",n.mode=30;break t}if(it=65535&q,_<(I&=15)&&(k+=g[l++]<<_,(_+=8)<I&&(k+=g[l++]<<_,_+=8)),p<(it+=k&(1<<I)-1)){o.msg="invalid distance too far back",n.mode=30;break t}if(k>>>=I,_-=I,(I=u-m)<it){if(w<(I=it-I)&&n.sane){o.msg="invalid distance too far back",n.mode=30;break t}if(N=y,($=0)===x){if($+=v-I,I<W){for(W-=I;B[u++]=y[$++],--I;);$=u-it,N=B}}else if(x<I){if($+=v+x-I,(I-=x)<W){for(W-=I;B[u++]=y[$++],--I;);if($=0,x<W){for(W-=I=x;B[u++]=y[$++],--I;);$=u-it,N=B}}}else if($+=x-I,I<W){for(W-=I;B[u++]=y[$++],--I;);$=u-it,N=B}for(;2<W;)B[u++]=N[$++],B[u++]=N[$++],B[u++]=N[$++],W-=3;W&&(B[u++]=N[$++],1<W&&(B[u++]=N[$++]))}else{for($=u-it;B[u++]=B[$++],B[u++]=B[$++],B[u++]=B[$++],2<(W-=3););W&&(B[u++]=B[$++],1<W&&(B[u++]=B[$++]))}break}}break}}while(l<d&&u<b);l-=W=_>>3,k&=(1<<(_-=W<<3))-1,o.next_in=l,o.next_out=u,o.avail_in=l<d?d-l+5:5-(l-d),o.avail_out=u<b?b-u+257:257-(u-b),n.hold=k,n.bits=_}},{}],49:[function(r,i,a){var o=r("../utils/common"),s=r("./adler32"),n=r("./crc32"),l=r("./inffast"),d=r("./inftrees"),u=1,m=2,b=0,p=-2,v=1,w=852,x=592;function y($){return($>>>24&255)+($>>>8&65280)+((65280&$)<<8)+((255&$)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _($){var N;return $&&$.state?(N=$.state,$.total_in=$.total_out=N.total=0,$.msg="",N.wrap&&($.adler=1&N.wrap),N.mode=v,N.last=0,N.havedict=0,N.dmax=32768,N.head=null,N.hold=0,N.bits=0,N.lencode=N.lendyn=new o.Buf32(w),N.distcode=N.distdyn=new o.Buf32(x),N.sane=1,N.back=-1,b):p}function z($){var N;return $&&$.state?((N=$.state).wsize=0,N.whave=0,N.wnext=0,_($)):p}function L($,N){var g,B;return $&&$.state?(B=$.state,N<0?(g=0,N=-N):(g=1+(N>>4),N<48&&(N&=15)),N&&(N<8||15<N)?p:(B.window!==null&&B.wbits!==N&&(B.window=null),B.wrap=g,B.wbits=N,z($))):p}function P($,N){var g,B;return $?(B=new k,($.state=B).window=null,(g=L($,N))!==b&&($.state=null),g):p}var D,q,I=!0;function W($){if(I){var N;for(D=new o.Buf32(512),q=new o.Buf32(32),N=0;N<144;)$.lens[N++]=8;for(;N<256;)$.lens[N++]=9;for(;N<280;)$.lens[N++]=7;for(;N<288;)$.lens[N++]=8;for(d(u,$.lens,0,288,D,0,$.work,{bits:9}),N=0;N<32;)$.lens[N++]=5;d(m,$.lens,0,32,q,0,$.work,{bits:5}),I=!1}$.lencode=D,$.lenbits=9,$.distcode=q,$.distbits=5}function it($,N,g,B){var st,U=$.state;return U.window===null&&(U.wsize=1<<U.wbits,U.wnext=0,U.whave=0,U.window=new o.Buf8(U.wsize)),B>=U.wsize?(o.arraySet(U.window,N,g-U.wsize,U.wsize,0),U.wnext=0,U.whave=U.wsize):(B<(st=U.wsize-U.wnext)&&(st=B),o.arraySet(U.window,N,g-B,st,U.wnext),(B-=st)?(o.arraySet(U.window,N,g-B,B,0),U.wnext=B,U.whave=U.wsize):(U.wnext+=st,U.wnext===U.wsize&&(U.wnext=0),U.whave<U.wsize&&(U.whave+=st))),0}a.inflateReset=z,a.inflateReset2=L,a.inflateResetKeep=_,a.inflateInit=function($){return P($,15)},a.inflateInit2=P,a.inflate=function($,N){var g,B,st,U,ct,j,ht,O,R,dt,et,Y,jt,he,yt,$t,Yt,Kt,lr,Ke,f,M,F,E,C=0,A=new o.Buf8(4),V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!$||!$.state||!$.output||!$.input&&$.avail_in!==0)return p;(g=$.state).mode===12&&(g.mode=13),ct=$.next_out,st=$.output,ht=$.avail_out,U=$.next_in,B=$.input,j=$.avail_in,O=g.hold,R=g.bits,dt=j,et=ht,M=b;t:for(;;)switch(g.mode){case v:if(g.wrap===0){g.mode=13;break}for(;R<16;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if(2&g.wrap&&O===35615){A[g.check=0]=255&O,A[1]=O>>>8&255,g.check=n(g.check,A,2,0),R=O=0,g.mode=2;break}if(g.flags=0,g.head&&(g.head.done=!1),!(1&g.wrap)||(((255&O)<<8)+(O>>8))%31){$.msg="incorrect header check",g.mode=30;break}if((15&O)!=8){$.msg="unknown compression method",g.mode=30;break}if(R-=4,f=8+(15&(O>>>=4)),g.wbits===0)g.wbits=f;else if(f>g.wbits){$.msg="invalid window size",g.mode=30;break}g.dmax=1<<f,$.adler=g.check=1,g.mode=512&O?10:12,R=O=0;break;case 2:for(;R<16;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if(g.flags=O,(255&g.flags)!=8){$.msg="unknown compression method",g.mode=30;break}if(57344&g.flags){$.msg="unknown header flags set",g.mode=30;break}g.head&&(g.head.text=O>>8&1),512&g.flags&&(A[0]=255&O,A[1]=O>>>8&255,g.check=n(g.check,A,2,0)),R=O=0,g.mode=3;case 3:for(;R<32;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}g.head&&(g.head.time=O),512&g.flags&&(A[0]=255&O,A[1]=O>>>8&255,A[2]=O>>>16&255,A[3]=O>>>24&255,g.check=n(g.check,A,4,0)),R=O=0,g.mode=4;case 4:for(;R<16;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}g.head&&(g.head.xflags=255&O,g.head.os=O>>8),512&g.flags&&(A[0]=255&O,A[1]=O>>>8&255,g.check=n(g.check,A,2,0)),R=O=0,g.mode=5;case 5:if(1024&g.flags){for(;R<16;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}g.length=O,g.head&&(g.head.extra_len=O),512&g.flags&&(A[0]=255&O,A[1]=O>>>8&255,g.check=n(g.check,A,2,0)),R=O=0}else g.head&&(g.head.extra=null);g.mode=6;case 6:if(1024&g.flags&&(j<(Y=g.length)&&(Y=j),Y&&(g.head&&(f=g.head.extra_len-g.length,g.head.extra||(g.head.extra=new Array(g.head.extra_len)),o.arraySet(g.head.extra,B,U,Y,f)),512&g.flags&&(g.check=n(g.check,B,Y,U)),j-=Y,U+=Y,g.length-=Y),g.length))break t;g.length=0,g.mode=7;case 7:if(2048&g.flags){if(j===0)break t;for(Y=0;f=B[U+Y++],g.head&&f&&g.length<65536&&(g.head.name+=String.fromCharCode(f)),f&&Y<j;);if(512&g.flags&&(g.check=n(g.check,B,Y,U)),j-=Y,U+=Y,f)break t}else g.head&&(g.head.name=null);g.length=0,g.mode=8;case 8:if(4096&g.flags){if(j===0)break t;for(Y=0;f=B[U+Y++],g.head&&f&&g.length<65536&&(g.head.comment+=String.fromCharCode(f)),f&&Y<j;);if(512&g.flags&&(g.check=n(g.check,B,Y,U)),j-=Y,U+=Y,f)break t}else g.head&&(g.head.comment=null);g.mode=9;case 9:if(512&g.flags){for(;R<16;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if(O!==(65535&g.check)){$.msg="header crc mismatch",g.mode=30;break}R=O=0}g.head&&(g.head.hcrc=g.flags>>9&1,g.head.done=!0),$.adler=g.check=0,g.mode=12;break;case 10:for(;R<32;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}$.adler=g.check=y(O),R=O=0,g.mode=11;case 11:if(g.havedict===0)return $.next_out=ct,$.avail_out=ht,$.next_in=U,$.avail_in=j,g.hold=O,g.bits=R,2;$.adler=g.check=1,g.mode=12;case 12:if(N===5||N===6)break t;case 13:if(g.last){O>>>=7&R,R-=7&R,g.mode=27;break}for(;R<3;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}switch(g.last=1&O,R-=1,3&(O>>>=1)){case 0:g.mode=14;break;case 1:if(W(g),g.mode=20,N!==6)break;O>>>=2,R-=2;break t;case 2:g.mode=17;break;case 3:$.msg="invalid block type",g.mode=30}O>>>=2,R-=2;break;case 14:for(O>>>=7&R,R-=7&R;R<32;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if((65535&O)!=(O>>>16^65535)){$.msg="invalid stored block lengths",g.mode=30;break}if(g.length=65535&O,R=O=0,g.mode=15,N===6)break t;case 15:g.mode=16;case 16:if(Y=g.length){if(j<Y&&(Y=j),ht<Y&&(Y=ht),Y===0)break t;o.arraySet(st,B,U,Y,ct),j-=Y,U+=Y,ht-=Y,ct+=Y,g.length-=Y;break}g.mode=12;break;case 17:for(;R<14;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if(g.nlen=257+(31&O),O>>>=5,R-=5,g.ndist=1+(31&O),O>>>=5,R-=5,g.ncode=4+(15&O),O>>>=4,R-=4,286<g.nlen||30<g.ndist){$.msg="too many length or distance symbols",g.mode=30;break}g.have=0,g.mode=18;case 18:for(;g.have<g.ncode;){for(;R<3;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}g.lens[V[g.have++]]=7&O,O>>>=3,R-=3}for(;g.have<19;)g.lens[V[g.have++]]=0;if(g.lencode=g.lendyn,g.lenbits=7,F={bits:g.lenbits},M=d(0,g.lens,0,19,g.lencode,0,g.work,F),g.lenbits=F.bits,M){$.msg="invalid code lengths set",g.mode=30;break}g.have=0,g.mode=19;case 19:for(;g.have<g.nlen+g.ndist;){for(;$t=(C=g.lencode[O&(1<<g.lenbits)-1])>>>16&255,Yt=65535&C,!((yt=C>>>24)<=R);){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if(Yt<16)O>>>=yt,R-=yt,g.lens[g.have++]=Yt;else{if(Yt===16){for(E=yt+2;R<E;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if(O>>>=yt,R-=yt,g.have===0){$.msg="invalid bit length repeat",g.mode=30;break}f=g.lens[g.have-1],Y=3+(3&O),O>>>=2,R-=2}else if(Yt===17){for(E=yt+3;R<E;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}R-=yt,f=0,Y=3+(7&(O>>>=yt)),O>>>=3,R-=3}else{for(E=yt+7;R<E;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}R-=yt,f=0,Y=11+(127&(O>>>=yt)),O>>>=7,R-=7}if(g.have+Y>g.nlen+g.ndist){$.msg="invalid bit length repeat",g.mode=30;break}for(;Y--;)g.lens[g.have++]=f}}if(g.mode===30)break;if(g.lens[256]===0){$.msg="invalid code -- missing end-of-block",g.mode=30;break}if(g.lenbits=9,F={bits:g.lenbits},M=d(u,g.lens,0,g.nlen,g.lencode,0,g.work,F),g.lenbits=F.bits,M){$.msg="invalid literal/lengths set",g.mode=30;break}if(g.distbits=6,g.distcode=g.distdyn,F={bits:g.distbits},M=d(m,g.lens,g.nlen,g.ndist,g.distcode,0,g.work,F),g.distbits=F.bits,M){$.msg="invalid distances set",g.mode=30;break}if(g.mode=20,N===6)break t;case 20:g.mode=21;case 21:if(6<=j&&258<=ht){$.next_out=ct,$.avail_out=ht,$.next_in=U,$.avail_in=j,g.hold=O,g.bits=R,l($,et),ct=$.next_out,st=$.output,ht=$.avail_out,U=$.next_in,B=$.input,j=$.avail_in,O=g.hold,R=g.bits,g.mode===12&&(g.back=-1);break}for(g.back=0;$t=(C=g.lencode[O&(1<<g.lenbits)-1])>>>16&255,Yt=65535&C,!((yt=C>>>24)<=R);){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if($t&&(240&$t)==0){for(Kt=yt,lr=$t,Ke=Yt;$t=(C=g.lencode[Ke+((O&(1<<Kt+lr)-1)>>Kt)])>>>16&255,Yt=65535&C,!(Kt+(yt=C>>>24)<=R);){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}O>>>=Kt,R-=Kt,g.back+=Kt}if(O>>>=yt,R-=yt,g.back+=yt,g.length=Yt,$t===0){g.mode=26;break}if(32&$t){g.back=-1,g.mode=12;break}if(64&$t){$.msg="invalid literal/length code",g.mode=30;break}g.extra=15&$t,g.mode=22;case 22:if(g.extra){for(E=g.extra;R<E;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}g.length+=O&(1<<g.extra)-1,O>>>=g.extra,R-=g.extra,g.back+=g.extra}g.was=g.length,g.mode=23;case 23:for(;$t=(C=g.distcode[O&(1<<g.distbits)-1])>>>16&255,Yt=65535&C,!((yt=C>>>24)<=R);){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if((240&$t)==0){for(Kt=yt,lr=$t,Ke=Yt;$t=(C=g.distcode[Ke+((O&(1<<Kt+lr)-1)>>Kt)])>>>16&255,Yt=65535&C,!(Kt+(yt=C>>>24)<=R);){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}O>>>=Kt,R-=Kt,g.back+=Kt}if(O>>>=yt,R-=yt,g.back+=yt,64&$t){$.msg="invalid distance code",g.mode=30;break}g.offset=Yt,g.extra=15&$t,g.mode=24;case 24:if(g.extra){for(E=g.extra;R<E;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}g.offset+=O&(1<<g.extra)-1,O>>>=g.extra,R-=g.extra,g.back+=g.extra}if(g.offset>g.dmax){$.msg="invalid distance too far back",g.mode=30;break}g.mode=25;case 25:if(ht===0)break t;if(Y=et-ht,g.offset>Y){if((Y=g.offset-Y)>g.whave&&g.sane){$.msg="invalid distance too far back",g.mode=30;break}jt=Y>g.wnext?(Y-=g.wnext,g.wsize-Y):g.wnext-Y,Y>g.length&&(Y=g.length),he=g.window}else he=st,jt=ct-g.offset,Y=g.length;for(ht<Y&&(Y=ht),ht-=Y,g.length-=Y;st[ct++]=he[jt++],--Y;);g.length===0&&(g.mode=21);break;case 26:if(ht===0)break t;st[ct++]=g.length,ht--,g.mode=21;break;case 27:if(g.wrap){for(;R<32;){if(j===0)break t;j--,O|=B[U++]<<R,R+=8}if(et-=ht,$.total_out+=et,g.total+=et,et&&($.adler=g.check=g.flags?n(g.check,st,et,ct-et):s(g.check,st,et,ct-et)),et=ht,(g.flags?O:y(O))!==g.check){$.msg="incorrect data check",g.mode=30;break}R=O=0}g.mode=28;case 28:if(g.wrap&&g.flags){for(;R<32;){if(j===0)break t;j--,O+=B[U++]<<R,R+=8}if(O!==(4294967295&g.total)){$.msg="incorrect length check",g.mode=30;break}R=O=0}g.mode=29;case 29:M=1;break t;case 30:M=-3;break t;case 31:return-4;default:return p}return $.next_out=ct,$.avail_out=ht,$.next_in=U,$.avail_in=j,g.hold=O,g.bits=R,(g.wsize||et!==$.avail_out&&g.mode<30&&(g.mode<27||N!==4))&&it($,$.output,$.next_out,et-$.avail_out)?(g.mode=31,-4):(dt-=$.avail_in,et-=$.avail_out,$.total_in+=dt,$.total_out+=et,g.total+=et,g.wrap&&et&&($.adler=g.check=g.flags?n(g.check,st,et,$.next_out-et):s(g.check,st,et,$.next_out-et)),$.data_type=g.bits+(g.last?64:0)+(g.mode===12?128:0)+(g.mode===20||g.mode===15?256:0),(dt==0&&et===0||N===4)&&M===b&&(M=-5),M)},a.inflateEnd=function($){if(!$||!$.state)return p;var N=$.state;return N.window&&(N.window=null),$.state=null,b},a.inflateGetHeader=function($,N){var g;return $&&$.state?(2&(g=$.state).wrap)==0?p:((g.head=N).done=!1,b):p},a.inflateSetDictionary=function($,N){var g,B=N.length;return $&&$.state?(g=$.state).wrap!==0&&g.mode!==11?p:g.mode===11&&s(1,N,B,0)!==g.check?-3:it($,N,B,B)?(g.mode=31,-4):(g.havedict=1,b):p},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,i,a){var o=r("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],n=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(u,m,b,p,v,w,x,y){var k,_,z,L,P,D,q,I,W,it=y.bits,$=0,N=0,g=0,B=0,st=0,U=0,ct=0,j=0,ht=0,O=0,R=null,dt=0,et=new o.Buf16(16),Y=new o.Buf16(16),jt=null,he=0;for($=0;$<=15;$++)et[$]=0;for(N=0;N<p;N++)et[m[b+N]]++;for(st=it,B=15;1<=B&&et[B]===0;B--);if(B<st&&(st=B),B===0)return v[w++]=20971520,v[w++]=20971520,y.bits=1,0;for(g=1;g<B&&et[g]===0;g++);for(st<g&&(st=g),$=j=1;$<=15;$++)if(j<<=1,(j-=et[$])<0)return-1;if(0<j&&(u===0||B!==1))return-1;for(Y[1]=0,$=1;$<15;$++)Y[$+1]=Y[$]+et[$];for(N=0;N<p;N++)m[b+N]!==0&&(x[Y[m[b+N]]++]=N);if(D=u===0?(R=jt=x,19):u===1?(R=s,dt-=257,jt=n,he-=257,256):(R=l,jt=d,-1),$=g,P=w,ct=N=O=0,z=-1,L=(ht=1<<(U=st))-1,u===1&&852<ht||u===2&&592<ht)return 1;for(;;){for(q=$-ct,W=x[N]<D?(I=0,x[N]):x[N]>D?(I=jt[he+x[N]],R[dt+x[N]]):(I=96,0),k=1<<$-ct,g=_=1<<U;v[P+(O>>ct)+(_-=k)]=q<<24|I<<16|W|0,_!==0;);for(k=1<<$-1;O&k;)k>>=1;if(k!==0?(O&=k-1,O+=k):O=0,N++,--et[$]==0){if($===B)break;$=m[b+x[N]]}if(st<$&&(O&L)!==z){for(ct===0&&(ct=st),P+=g,j=1<<(U=$-ct);U+ct<B&&!((j-=et[U+ct])<=0);)U++,j<<=1;if(ht+=1<<U,u===1&&852<ht||u===2&&592<ht)return 1;v[z=O&L]=st<<24|U<<16|P-w|0}}return O!==0&&(v[P+O]=$-ct<<24|64<<16|0),y.bits=st,0}},{"../utils/common":41}],51:[function(r,i,a){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,i,a){var o=r("../utils/common"),s=0,n=1;function l(C){for(var A=C.length;0<=--A;)C[A]=0}var d=0,u=29,m=256,b=m+1+u,p=30,v=19,w=2*b+1,x=15,y=16,k=7,_=256,z=16,L=17,P=18,D=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],q=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],I=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],it=new Array(2*(b+2));l(it);var $=new Array(2*p);l($);var N=new Array(512);l(N);var g=new Array(256);l(g);var B=new Array(u);l(B);var st,U,ct,j=new Array(p);function ht(C,A,V,H,T){this.static_tree=C,this.extra_bits=A,this.extra_base=V,this.elems=H,this.max_length=T,this.has_stree=C&&C.length}function O(C,A){this.dyn_tree=C,this.max_code=0,this.stat_desc=A}function R(C){return C<256?N[C]:N[256+(C>>>7)]}function dt(C,A){C.pending_buf[C.pending++]=255&A,C.pending_buf[C.pending++]=A>>>8&255}function et(C,A,V){C.bi_valid>y-V?(C.bi_buf|=A<<C.bi_valid&65535,dt(C,C.bi_buf),C.bi_buf=A>>y-C.bi_valid,C.bi_valid+=V-y):(C.bi_buf|=A<<C.bi_valid&65535,C.bi_valid+=V)}function Y(C,A,V){et(C,V[2*A],V[2*A+1])}function jt(C,A){for(var V=0;V|=1&C,C>>>=1,V<<=1,0<--A;);return V>>>1}function he(C,A,V){var H,T,K=new Array(x+1),rt=0;for(H=1;H<=x;H++)K[H]=rt=rt+V[H-1]<<1;for(T=0;T<=A;T++){var G=C[2*T+1];G!==0&&(C[2*T]=jt(K[G]++,G))}}function yt(C){var A;for(A=0;A<b;A++)C.dyn_ltree[2*A]=0;for(A=0;A<p;A++)C.dyn_dtree[2*A]=0;for(A=0;A<v;A++)C.bl_tree[2*A]=0;C.dyn_ltree[2*_]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function $t(C){8<C.bi_valid?dt(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function Yt(C,A,V,H){var T=2*A,K=2*V;return C[T]<C[K]||C[T]===C[K]&&H[A]<=H[V]}function Kt(C,A,V){for(var H=C.heap[V],T=V<<1;T<=C.heap_len&&(T<C.heap_len&&Yt(A,C.heap[T+1],C.heap[T],C.depth)&&T++,!Yt(A,H,C.heap[T],C.depth));)C.heap[V]=C.heap[T],V=T,T<<=1;C.heap[V]=H}function lr(C,A,V){var H,T,K,rt,G=0;if(C.last_lit!==0)for(;H=C.pending_buf[C.d_buf+2*G]<<8|C.pending_buf[C.d_buf+2*G+1],T=C.pending_buf[C.l_buf+G],G++,H===0?Y(C,T,A):(Y(C,(K=g[T])+m+1,A),(rt=D[K])!==0&&et(C,T-=B[K],rt),Y(C,K=R(--H),V),(rt=q[K])!==0&&et(C,H-=j[K],rt)),G<C.last_lit;);Y(C,_,A)}function Ke(C,A){var V,H,T,K=A.dyn_tree,rt=A.stat_desc.static_tree,G=A.stat_desc.has_stree,nt=A.stat_desc.elems,Ot=-1;for(C.heap_len=0,C.heap_max=w,V=0;V<nt;V++)K[2*V]!==0?(C.heap[++C.heap_len]=Ot=V,C.depth[V]=0):K[2*V+1]=0;for(;C.heap_len<2;)K[2*(T=C.heap[++C.heap_len]=Ot<2?++Ot:0)]=1,C.depth[T]=0,C.opt_len--,G&&(C.static_len-=rt[2*T+1]);for(A.max_code=Ot,V=C.heap_len>>1;1<=V;V--)Kt(C,K,V);for(T=nt;V=C.heap[1],C.heap[1]=C.heap[C.heap_len--],Kt(C,K,1),H=C.heap[1],C.heap[--C.heap_max]=V,C.heap[--C.heap_max]=H,K[2*T]=K[2*V]+K[2*H],C.depth[T]=(C.depth[V]>=C.depth[H]?C.depth[V]:C.depth[H])+1,K[2*V+1]=K[2*H+1]=T,C.heap[1]=T++,Kt(C,K,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(xt,Ue){var ia,cr,aa,Gt,Ma,Ko,Er=Ue.dyn_tree,Cn=Ue.max_code,Bc=Ue.stat_desc.static_tree,Mc=Ue.stat_desc.has_stree,Uc=Ue.stat_desc.extra_bits,Sn=Ue.stat_desc.extra_base,oa=Ue.stat_desc.max_length,Ua=0;for(Gt=0;Gt<=x;Gt++)xt.bl_count[Gt]=0;for(Er[2*xt.heap[xt.heap_max]+1]=0,ia=xt.heap_max+1;ia<w;ia++)oa<(Gt=Er[2*Er[2*(cr=xt.heap[ia])+1]+1]+1)&&(Gt=oa,Ua++),Er[2*cr+1]=Gt,Cn<cr||(xt.bl_count[Gt]++,Ma=0,Sn<=cr&&(Ma=Uc[cr-Sn]),Ko=Er[2*cr],xt.opt_len+=Ko*(Gt+Ma),Mc&&(xt.static_len+=Ko*(Bc[2*cr+1]+Ma)));if(Ua!==0){do{for(Gt=oa-1;xt.bl_count[Gt]===0;)Gt--;xt.bl_count[Gt]--,xt.bl_count[Gt+1]+=2,xt.bl_count[oa]--,Ua-=2}while(0<Ua);for(Gt=oa;Gt!==0;Gt--)for(cr=xt.bl_count[Gt];cr!==0;)Cn<(aa=xt.heap[--ia])||(Er[2*aa+1]!==Gt&&(xt.opt_len+=(Gt-Er[2*aa+1])*Er[2*aa],Er[2*aa+1]=Gt),cr--)}})(C,A),he(K,Ot,C.bl_count)}function f(C,A,V){var H,T,K=-1,rt=A[1],G=0,nt=7,Ot=4;for(rt===0&&(nt=138,Ot=3),A[2*(V+1)+1]=65535,H=0;H<=V;H++)T=rt,rt=A[2*(H+1)+1],++G<nt&&T===rt||(G<Ot?C.bl_tree[2*T]+=G:T!==0?(T!==K&&C.bl_tree[2*T]++,C.bl_tree[2*z]++):G<=10?C.bl_tree[2*L]++:C.bl_tree[2*P]++,K=T,Ot=(G=0)===rt?(nt=138,3):T===rt?(nt=6,3):(nt=7,4))}function M(C,A,V){var H,T,K=-1,rt=A[1],G=0,nt=7,Ot=4;for(rt===0&&(nt=138,Ot=3),H=0;H<=V;H++)if(T=rt,rt=A[2*(H+1)+1],!(++G<nt&&T===rt)){if(G<Ot)for(;Y(C,T,C.bl_tree),--G!=0;);else T!==0?(T!==K&&(Y(C,T,C.bl_tree),G--),Y(C,z,C.bl_tree),et(C,G-3,2)):G<=10?(Y(C,L,C.bl_tree),et(C,G-3,3)):(Y(C,P,C.bl_tree),et(C,G-11,7));K=T,Ot=(G=0)===rt?(nt=138,3):T===rt?(nt=6,3):(nt=7,4)}}l(j);var F=!1;function E(C,A,V,H){et(C,(d<<1)+(H?1:0),3),(function(T,K,rt,G){$t(T),dt(T,rt),dt(T,~rt),o.arraySet(T.pending_buf,T.window,K,rt,T.pending),T.pending+=rt})(C,A,V)}a._tr_init=function(C){F||((function(){var A,V,H,T,K,rt=new Array(x+1);for(T=H=0;T<u-1;T++)for(B[T]=H,A=0;A<1<<D[T];A++)g[H++]=T;for(g[H-1]=T,T=K=0;T<16;T++)for(j[T]=K,A=0;A<1<<q[T];A++)N[K++]=T;for(K>>=7;T<p;T++)for(j[T]=K<<7,A=0;A<1<<q[T]-7;A++)N[256+K++]=T;for(V=0;V<=x;V++)rt[V]=0;for(A=0;A<=143;)it[2*A+1]=8,A++,rt[8]++;for(;A<=255;)it[2*A+1]=9,A++,rt[9]++;for(;A<=279;)it[2*A+1]=7,A++,rt[7]++;for(;A<=287;)it[2*A+1]=8,A++,rt[8]++;for(he(it,b+1,rt),A=0;A<p;A++)$[2*A+1]=5,$[2*A]=jt(A,5);st=new ht(it,D,m+1,b,x),U=new ht($,q,0,p,x),ct=new ht(new Array(0),I,0,v,k)})(),F=!0),C.l_desc=new O(C.dyn_ltree,st),C.d_desc=new O(C.dyn_dtree,U),C.bl_desc=new O(C.bl_tree,ct),C.bi_buf=0,C.bi_valid=0,yt(C)},a._tr_stored_block=E,a._tr_flush_block=function(C,A,V,H){var T,K,rt=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(G){var nt,Ot=4093624447;for(nt=0;nt<=31;nt++,Ot>>>=1)if(1&Ot&&G.dyn_ltree[2*nt]!==0)return s;if(G.dyn_ltree[18]!==0||G.dyn_ltree[20]!==0||G.dyn_ltree[26]!==0)return n;for(nt=32;nt<m;nt++)if(G.dyn_ltree[2*nt]!==0)return n;return s})(C)),Ke(C,C.l_desc),Ke(C,C.d_desc),rt=(function(G){var nt;for(f(G,G.dyn_ltree,G.l_desc.max_code),f(G,G.dyn_dtree,G.d_desc.max_code),Ke(G,G.bl_desc),nt=v-1;3<=nt&&G.bl_tree[2*W[nt]+1]===0;nt--);return G.opt_len+=3*(nt+1)+5+5+4,nt})(C),T=C.opt_len+3+7>>>3,(K=C.static_len+3+7>>>3)<=T&&(T=K)):T=K=V+5,V+4<=T&&A!==-1?E(C,A,V,H):C.strategy===4||K===T?(et(C,2+(H?1:0),3),lr(C,it,$)):(et(C,4+(H?1:0),3),(function(G,nt,Ot,xt){var Ue;for(et(G,nt-257,5),et(G,Ot-1,5),et(G,xt-4,4),Ue=0;Ue<xt;Ue++)et(G,G.bl_tree[2*W[Ue]+1],3);M(G,G.dyn_ltree,nt-1),M(G,G.dyn_dtree,Ot-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,rt+1),lr(C,C.dyn_ltree,C.dyn_dtree)),yt(C),H&&$t(C)},a._tr_tally=function(C,A,V){return C.pending_buf[C.d_buf+2*C.last_lit]=A>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&A,C.pending_buf[C.l_buf+C.last_lit]=255&V,C.last_lit++,A===0?C.dyn_ltree[2*V]++:(C.matches++,A--,C.dyn_ltree[2*(g[V]+m+1)]++,C.dyn_dtree[2*R(A)]++),C.last_lit===C.lit_bufsize-1},a._tr_align=function(C){et(C,2,3),Y(C,_,it),(function(A){A.bi_valid===16?(dt(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):8<=A.bi_valid&&(A.pending_buf[A.pending++]=255&A.bi_buf,A.bi_buf>>=8,A.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(r,i,a){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,i,a){(function(o){(function(s,n){if(!s.setImmediate){var l,d,u,m,b=1,p={},v=!1,w=s.document,x=Object.getPrototypeOf&&Object.getPrototypeOf(s);x=x&&x.setTimeout?x:s,l={}.toString.call(s.process)==="[object process]"?function(z){process.nextTick(function(){k(z)})}:(function(){if(s.postMessage&&!s.importScripts){var z=!0,L=s.onmessage;return s.onmessage=function(){z=!1},s.postMessage("","*"),s.onmessage=L,z}})()?(m="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",_,!1):s.attachEvent("onmessage",_),function(z){s.postMessage(m+z,"*")}):s.MessageChannel?((u=new MessageChannel).port1.onmessage=function(z){k(z.data)},function(z){u.port2.postMessage(z)}):w&&"onreadystatechange"in w.createElement("script")?(d=w.documentElement,function(z){var L=w.createElement("script");L.onreadystatechange=function(){k(z),L.onreadystatechange=null,d.removeChild(L),L=null},d.appendChild(L)}):function(z){setTimeout(k,0,z)},x.setImmediate=function(z){typeof z!="function"&&(z=new Function(""+z));for(var L=new Array(arguments.length-1),P=0;P<L.length;P++)L[P]=arguments[P+1];var D={callback:z,args:L};return p[b]=D,l(b),b++},x.clearImmediate=y}function y(z){delete p[z]}function k(z){if(v)setTimeout(k,0,z);else{var L=p[z];if(L){v=!0;try{(function(P){var D=P.callback,q=P.args;switch(q.length){case 0:D();break;case 1:D(q[0]);break;case 2:D(q[0],q[1]);break;case 3:D(q[0],q[1],q[2]);break;default:D.apply(n,q)}})(L)}finally{y(z),v=!1}}}}function _(z){z.source===s&&typeof z.data=="string"&&z.data.indexOf(m)===0&&k(+z.data.slice(m.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(bs)),bs.exports}var u0=h0();const p0=xl(u0),So="language",La="en";function f0(t,e){return e?t.replace(/\{(\w+)\}/g,(r,i)=>e[i]!==void 0?e[i]:r):t}const io=new Set([La]),vn=ii(io);let yn=null;function m0(t){let e=!1;for(const r of t){const i=r.toLowerCase().replace("-","_");io.has(i)||(io.add(i),e=!0)}if(e&&(vn.set(new Set(io)),yn===null)){const r=qo();r!==yi.get()&&yi.set(r)}}function qo(){const t=navigator.languages?.length?navigator.languages:[navigator.language||La],e=vn.get();for(const r of t){const i=r.split("-")[0].toLowerCase();if(e.has(i))return i}return La}const yi=ii(qo());async function g0(){const t=await Xt.get(So);yn=t??null,yi.set(t||qo())}we(ci,t=>{yn=t?.[So]??null,yi.set(t?.[So]||qo())});g0();async function ra(t,e=!1){const r={};await Promise.all(Object.entries(t).map(async([s,n])=>{const l=await n(),d=l&&"default"in l?l.default:l,b=(s.match(/\.([a-zA-Z-_]+)\.json$/)?.[1]??La).toLowerCase().replace("-","_");r[b]=d})),m0(Object.keys(r));const i=s=>{const l=yi.get().toLowerCase().replace("-","_"),[d,u]=l.split("_"),m=u?[`${d}_${u}`,d]:[d];m.push(La);for(const b of m){const p=r[b];if(p&&s in p)return p[s]}return s},a=Object.assign({},{then:void 0,catch:void 0,finally:void 0}),o={get(s,n){if(n in s)return s[n];const l=i(n),d=(u=>f0(i(n),u));return d.toString=()=>e?i(n):l,d.valueOf=()=>e?i(n):l,d[Symbol.toPrimitive]=()=>e?i(n):l,e&&(d.toJSON=()=>i(n)),d}};return new Proxy(a,o)}class b0{constructor(){this.editorInputHandlers=[],this.cachedIconContributions=null,we(_r,()=>{}),we(nr,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=mt.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((r,i)=>{const a=r.priority??0,o=i.priority??0;return o!==a?o-a:r.label.localeCompare(i.label)}),this.cachedIconContributions}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((r,i)=>{const a=r.definition.ranking??0;return(i.definition.ranking??0)-a})}async ensureHandlerInitialized(e){const r=e.definition;!r.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(r.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(i=>{throw e.lazyInitPromise=void 0,i})),await e.lazyInitPromise)}getEditorOptionsForInput(e){const r=new Set,i=[];for(const a of this.editorInputHandlers){const o=a.definition;!o.canHandle(e)||r.has(o.editorId)||(r.add(o.editorId),i.push({editorId:o.editorId,title:o.label,icon:o.icon}))}return i}async handleInput(e,r){if(r!==void 0){const i=this.editorInputHandlers.find(a=>a.definition.editorId===r);if(i){await this.ensureHandlerInitialized(i);const a=await i.definition.handle(e);return a&&(a.editorId=i.definition.editorId),a}return}for(let i=0;i<this.editorInputHandlers.length;i++){const a=this.editorInputHandlers[i],o=a.definition;if(o.canHandle(e)){await this.ensureHandlerInitialized(a);const s=await o.handle(e);return s&&(s.editorId=o.editorId),s}}}getEditorArea(){return document.querySelector(`lyra-tabs#${_a}`)}async loadEditor(e,r){if(!e||("component"in e||(e=await this.handleInput(e,r)),!e||!("component"in e)))return;const i=e.editorId??r;i&&(e.editorId=i),await this.openTab({name:e.key,editorId:i,label:e.title,icon:e.icon,closable:!0,component:e.component})}async openTab(e){const r=this.getEditorArea();if(!r){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(r.has(e.name)){r.activate(e.name);return}r.open(e)}getFileIcon(e){const r=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),i=this.getSortedIconContributions();if(i.length===0)return"file";for(const a of i)if(a.mappings&&a.mappings[r])return a.mappings[r];return"file"}}const Ki=new b0;de.put("editorRegistry",Ki);mt.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const fl=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var w0=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,xn=(t,e,r,i)=>{for(var a=i>1?void 0:i?v0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&w0(e,r,a),a};const Ge=Pr("LyraFileBrowser"),xe=await ra(Object.assign({"./filebrowser.de.json":()=>Ne(()=>import("./filebrowser.de-5GQ10ols-BDyGxBGM.js"),[]),"./filebrowser.en.json":()=>Ne(()=>import("./filebrowser.en-9Ng_7WE_-DuKn3BNV.js"),[])})),y0=250;let gr=class extends Pi{constructor(){super(...arguments),this.settingsLoaded=!1,this.fileEditorOptions=[],this.treeRef=Vr(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),we(nr,t=>{t.target==="system.icons"&&this.requestUpdate()}),this.subscribe(Pe,t=>this.onWorkspaceChanged(t)),this.subscribe(_r,t=>this.onWorkspaceConnected(t))}disconnectedCallback(){this.workspaceChangedDebounceId!==void 0&&(clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=void 0),this.pendingWorkspaceDir=void 0,super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await pt.getWorkspace();await this.loadWorkspace(t??void 0)}renderToolbar(){return S`
            <lyra-command icon="folder-open" title="${xe.CONNECT_WORKSPACE}" dropdown="filebrowser.connections"></lyra-command>
            <lyra-command cmd="refresh_resource" icon="repeat" title="${xe.REFRESH_RESOURCE}"></lyra-command>
            <lyra-command cmd="touch" icon="plus" title="${xe.CREATE_NEW}" dropdown="filebrowser.create"></lyra-command>
        `}renderContextMenu(){const t=Qt.get(),e=t instanceof Bt?t:null,r=e&&this.fileEditorOptions.length>0;return S`
            <lyra-command cmd="open_editor" icon="folder-open">${xe.OPEN}</lyra-command>
            ${r?S`
                <wa-dropdown-item>
                    ${be("folder-open",{slot:"icon"})}
                    ${xe.OPEN_WITH}
                    ${this.fileEditorOptions.map(i=>S`
                        <lyra-command
                            slot="submenu"
                            cmd="open_editor"
                            icon="${i.icon??"file"}"
                            .params=${{path:e.getWorkspacePath(),editorId:i.editorId}}>
                            ${i.title}
                        </lyra-command>
                    `)}
                </wa-dropdown-item>
            `:Nt}
            <lyra-command cmd="touch" icon="plus" dropdown="filebrowser.create">${xe.CREATE_NEW}</lyra-command>
        `}onWorkspaceChanged(t){this.pendingWorkspaceDir=t,this.workspaceChangedDebounceId!==void 0&&clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=setTimeout(()=>{this.workspaceChangedDebounceId=void 0;const e=this.pendingWorkspaceDir;this.pendingWorkspaceDir=void 0,e?this.applyWorkspaceChange(e):this.loadWorkspace(void 0,!0)},y0)}async applyWorkspaceChange(t){Qt.set(void 0),await this.loadWorkspace(t,!0),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t,!0)}async loadWorkspace(t,e=!1){this.workspaceDir=t,t?(this.root=await this.resourceToTreeNode(t,!0,e),await this.restoreSelectionFromSettings()):(this.root=void 0,this.settingsLoaded&&await this.persistSelectedPath(null))}async persistSelectedPath(t){await this.setDialogSetting({v:gr.SETTINGS_VERSION,[gr.SETTINGS_KEY_SELECTED_PATH]:t})}async restoreSelectionFromSettings(){if(this.settingsLoaded)return;this.settingsLoaded=!0;const e=(await this.getDialogSetting())?.[gr.SETTINGS_KEY_SELECTED_PATH];if(typeof e!="string"||e.length===0)return;await this.updateComplete;const r=this.treeRef.value?.querySelector("wa-tree");if(r){if(typeof e=="string"&&e.length>0){const a=Array.from(r.querySelectorAll("wa-tree-item")).find(o=>{const n=o?.model?.data?.getWorkspacePath?.();return typeof n=="string"&&n===e});if(a){await this.selectTreeItem(a);return}}await this.selectFirstConnectedFolder(r)}}async selectTreeItem(t){let e=t.parentElement?.closest?.("wa-tree-item");for(;e;)e.expanded=!0,e=e.parentElement?.closest?.("wa-tree-item");t.selected=!0,await this.syncTreeSelection()}async selectFirstConnectedFolder(t){const e=Array.from(t.children).filter(a=>a instanceof HTMLElement&&a.tagName.toLowerCase()==="wa-tree-item");if(e.length===0)return;const i=e.find(a=>a?.model?.data instanceof Pt)??e[0];await this.selectTreeItem(i)}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&Qt.set(e[0].model?.data)}async resourceToTreeNode(t,e=!1,r=!1){const i=t instanceof Bt,a={data:t,label:t.getName(),leaf:i,children:[]};if(t instanceof Pt&&!t.getParent())try{const o=await pt.getFolderInfoForDirectory(t);o?.backendName&&(a.workspaceTag=o.backendName)}catch(o){Ge.debug("Failed to get workspace info for directory",o)}if(t instanceof Pt&&e){const o=await t.listChildren(r);for(const s of o){const n=await this.resourceToTreeNode(s,!0,r);a.children.push(n)}a.children.sort(fl),a.loaded=!0}return a}createTreeItems(t,e=!1){if(!t)return S``;const r=!t.leaf&&!t.loaded,i=t.data,a=i instanceof Bt,o=!!i.getParent(),s=a?Ki.getFileIcon(i.getName()):t.icon||"folder-open",n=t.workspaceTag;return S`
            <wa-tree-item 
                draggable=${o}
                @dragstart=${o?this.nobubble(l=>this.onDragStart(l,i)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(l=>this.onLazyLoad(l,t))}
                .model=${t} 
                ?expanded=${e}
                ?lazy=${r}>
                <span class="tree-label">
                    ${be(s,{label:t.leaf?xe.FILE:xe.FOLDER})}
                    <span class="tree-label-text">${t.label}</span>
                    ${!t.leaf&&n?S`<wa-badge appearance="outlined" variant="neutral" style="font-size: var(--wa-font-size-xs);">${n}</wa-badge>`:null}
                </span>
                ${t.children.map(l=>this.createTreeItems(l,!1))}
            </wa-tree-item>`}onDragStart(t,e){if(!t.dataTransfer||!e.getParent())return;const i=t.currentTarget?.closest("wa-tree"),a=Array.isArray(i?.selectedItems)?i.selectedItems:[],o=[];if(a.length>0)for(const d of a){const m=d.model?.data;m&&m.getParent()&&o.push(m)}o.length===0&&o.push(e);const s=o.map(d=>d.getWorkspacePath()),n=o.length===1?o[0].getName():`${o.length} items`;t.dataTransfer.effectAllowed="copyMove";const l=s.join(`
`);if(t.dataTransfer.setData("text/plain",l),t.dataTransfer.setData("application/x-workspace-file",l),t.dataTransfer.setData("text/uri-list",l),t.dataTransfer.setDragImage){const d=document.createElement("div");d.textContent=n,d.style.position="absolute",d.style.top="-1000px",d.style.padding="4px 8px",d.style.background="var(--wa-color-neutral-10)",d.style.border="1px solid var(--wa-color-neutral-30)",d.style.borderRadius="4px",document.body.appendChild(d),t.dataTransfer.setDragImage(d,0,0),setTimeout(()=>document.body.removeChild(d),0)}}async onLazyLoad(t,e){const r=e.data;r instanceof Pt&&e.children.length===0&&await this.loadNodeChildren(e,r)}async loadNodeChildren(t,e){if(!this.loadingNodes.has(t)){this.loadingNodes.add(t);try{const r=await e.listChildren(!1);for(const i of r){bc&&i.getName().startsWith(".");const a=await this.resourceToTreeNode(i,!1);t.children.push(a)}t.children.sort(fl),t.loaded=!0,this.requestUpdate()}catch(r){Ge.error("Failed to load directory children:",r)}finally{this.loadingNodes.delete(t)}}}async onFileDoubleClicked(t){const e=t.currentTarget,r=e.model;if(!r)return;const i=r.data;if(i instanceof Bt){Qt.set(i),this.executeCommand("open_editor",{});return}!r.leaf&&"expanded"in e&&(e.expanded=!e.expanded)}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const i=e[0].model.data;Qt.set(i);const a=i?.getWorkspacePath?.();typeof a=="string"?this.persistSelectedPath(a):this.persistSelectedPath(null),i instanceof Bt?this.fileEditorOptions=Ki.getEditorOptionsForInput(i):this.fileEditorOptions=[]}else Qt.set(void 0),this.persistSelectedPath(null),this.fileEditorOptions=[]}getDirectoryDropTargetFromEvent(t){if(!this.workspaceDir)return;const r=t.target.closest("wa-tree-item");if(!r){const o=this.root?.children??[];if(o.length!==1)return;const s=o[0]?.data;return s instanceof Pt?s:void 0}const a=r.model?.data;if(a instanceof Pt)return a}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=o=>{const s=o.dataTransfer?.types;if(!s)return;const n=s.includes("Files"),l=s.includes("application/x-workspace-file");if(!n&&!l)return;if(!this.getDirectoryDropTargetFromEvent(o)){this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,t.classList.remove("drag-over");return}o.preventDefault(),o.dataTransfer&&(l?o.dataTransfer.dropEffect=o.ctrlKey||o.metaKey?"copy":"move":o.dataTransfer.dropEffect="copy"),t.classList.add("drag-over");const m=o.target.closest("wa-tree-item");if(!m){this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0;return}m!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=m,m.classList.add("drop-target"))},r=o=>{const s=o.dataTransfer?.types;if(!s)return;const n=s.includes("Files"),l=s.includes("application/x-workspace-file");!n&&!l||!this.getDirectoryDropTargetFromEvent(o)||(o.preventDefault(),t.classList.add("drag-over"))},i=o=>{const s=t.getBoundingClientRect(),n=o.clientX,l=o.clientY;(n<=s.left||n>=s.right||l<=s.top||l>=s.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},a=async o=>{if(o.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!o.dataTransfer||!this.workspaceDir)return;const s=this.getDirectoryDropTargetFromEvent(o);if(!s)return;const n=o.dataTransfer.types;if(n.includes("Files")){const l=Array.from(o.dataTransfer.files);if(l.length===0)return;await this.handleFilesDrop(l,s);return}if(n.includes("application/x-workspace-file")){await this.handleWorkspaceDrop(o,s);return}};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",r),t.removeEventListener("dragleave",i),t.removeEventListener("drop",a),t.addEventListener("dragover",e),t.addEventListener("dragenter",r),t.addEventListener("dragleave",i),t.addEventListener("drop",a)}async handleWorkspaceDrop(t,e){if(!t.dataTransfer)return;const r=t.dataTransfer.getData("application/x-workspace-file");if(!r)return;const i=r.split(/\r?\n/).map(b=>b.trim()).filter(b=>!!b);if(i.length===0)return;const a=await pt.getWorkspace();if(!a){Ge.warn("Workspace drop ignored because no workspace is connected");return}const o=async b=>{const p=b.getWorkspace(),v=e.getWorkspace();return!p||!v?!1:p===v&&!(t.ctrlKey||t.metaKey)},s=new Set,n=e.getWorkspace();let l=0,d=0;const u=[];for(const b of i)try{const p=await a.getResource(b);if(!p){Ge.warn(`Workspace drop: source not found for path "${b}"`),d++;continue}u.push({path:b,resource:p});const v=p.getWorkspace();v&&s.add(v)}catch(p){Ge.error(`Failed to handle workspace drop for "${b}":`,p),d++}if(u.length===0){d>0&&Ge.info(`Workspace drop failed for ${d} item(s)`);return}let m=!1;if(n){for(const b of s)if(b!==n){m=!0;break}}if(m&&n)try{const b=Array.from(s),p=await pt.getFolderInfoForDirectory(b[0]),v=await pt.getFolderInfoForDirectory(n),w=p?.backendName??xe.UNKNOWN_BACKEND,x=v?.backendName??xe.UNKNOWN_BACKEND;if(!await ji(xe.DND_CROSS_CONNECTION_CONFIRM({count:String(u.length),srcBackend:w,destBackend:x})))return}catch(b){Ge.debug("Failed to resolve cross-connection info for DnD",b)}for(const{path:b,resource:p}of u)try{const v=await o(p);await pt.copyResource(p,e,{move:v}),l++}catch(v){Ge.error(`Failed to handle workspace drop for "${b}":`,v),d++}Ge.info(`Workspace drop completed: ${l}/${u.length} items ${d>0?`, ${d} failed`:""}`),await this.loadWorkspace(this.workspaceDir,!0)}async handleFilesDrop(t,e){const r=t.length;let i=0,a=0,o=0;for(const s of t)try{const n=this.buildTargetPath(e,s.name);if(await this.workspaceDir.getResource(n)&&!await ji(xe.FILE_EXISTS_OVERWRITE({fileName:s.name}))){o++;continue}await(await this.workspaceDir.getResource(n,{create:!0})).saveContents(s),i++}catch(n){Ge.error(`Failed to upload ${s.name}:`,n),a++}Ge.info(`Uploaded ${i}/${r} files${o>0?`, ${o} skipped`:""}${a>0?`, ${a} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const r=t.getWorkspacePath();return r?`${r}/${e}`:e}renderContent(){return S`
            <div class="tree" ${qr(this.treeRef)} style="--drop-files-text: '${xe.DROP_FILES_HERE}'">
                ${re(!this.workspaceDir,()=>S`
                    <lyra-no-content message="${xe.SELECT_WORKSPACE}"></lyra-no-content>`,()=>re(this.root,()=>S`
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.root.children.map(t=>this.createTreeItems(t,!0))}
                </wa-tree>`,()=>S``))}
            </div>
        `}};gr.SETTINGS_VERSION=1;gr.SETTINGS_KEY_SELECTED_PATH="selectedPath";gr.styles=J`
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
    `;xn([X()],gr.prototype,"root",2);xn([X()],gr.prototype,"fileEditorOptions",2);gr=xn([Z("lyra-filebrowser")],gr);var x0=Object.getOwnPropertyDescriptor,k0=(t,e,r,i)=>{for(var a=i>1?void 0:i?x0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(a)||a);return a};const Fs=await ra(Object.assign({"./tasks.de.json":()=>Ne(()=>import("./tasks.de-Uc1ZhJAb-Bm0wNkDH.js"),[]),"./tasks.en.json":()=>Ne(()=>import("./tasks.en-ErE1So2Z-eCglTKJa.js"),[])}));mt.registerContribution(Bo,{component:"<lyra-tasks></lyra-tasks>"});let ua=null;function Lc(){return ua||(ua=document.createElement("div"),ua.id="progress-dialog-container",document.body.appendChild(ua)),ua}function ml(){return Lc().querySelector("wa-dialog")}function C0(){zc(!0)}function zc(t=!1){const e=Lc(),r=Qr.getActiveTasks();if(r.length===0){Je(S``,e);return}const a=ml();if(!(t||a?.open===!0))return;const s=()=>{const d=ml();d&&(d.open=!1)},n=()=>{Je(S``,e)},l=S`
        <wa-dialog 
            label="${Fs.ACTIVE_TASKS}" 
            open
            light-dismiss
            style="--width: 600px;"
            @wa-request-close=${s}
            @wa-after-hide=${n}
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
                ${r.map(d=>{const u=d.progress>=0||d.totalSteps>0,m=d.progress>=0?d.progress:d.totalSteps>0?Math.round(d.currentStep/d.totalSteps*100):0,b=d.progress<0&&d.totalSteps>0;return S`
                        <div class="tasitem">
                            <div class="tasheader">
                                <wa-icon name="hourglass" style="color: var(--wa-color-warning-fill-loud);"></wa-icon>
                                <div style="flex: 1;">
                                    <div class="tasname">${d.name}</div>
                                    ${d.message?S`
                                        <div class="tasmessage">${d.message}</div>
                                    `:""}
                                </div>
                            </div>
                            <div class="tasprogress">
                                ${u?S`
                                    <wa-progress-bar value="${m}">
                                        ${b?`${d.currentStep}/${d.totalSteps} - `:""}${m}%
                                    </wa-progress-bar>
                                `:S`
                                    <wa-progress-bar indeterminate></wa-progress-bar>
                                `}
                            </div>
                        </div>
                    `})}
            </div>
        </wa-dialog>
    `;Je(l,e)}let Ns=class extends Fr{doBeforeUI(){this.watch(Rs,()=>{zc(),this.requestUpdate()})}handleIndicatorClick(){C0()}render(){Rs.get();const e=Qr.getActiveTasks().length;return e===0?S``:S`
            <div class="tasindicator" @click=${this.handleIndicatorClick} title="${Fs.ACTIVE_TASKS_TITLE({taskCount:e.toString()})}">
                <wa-spinner
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);"
                    label="${Fs.ACTIVE_TASKS}"
                ></wa-spinner>
                <wa-badge appearance="outlined" variant="neutral" pill>${e}</wa-badge>
                <div class="tasbar-wrap"><wa-progress-bar indeterminate></wa-progress-bar></div>
            </div>
        `}};Ns.styles=J`
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
    `;Ns=k0([Z("lyra-tasks")],Ns);var S0=Object.getOwnPropertyDescriptor,E0=(t,e,r,i)=>{for(var a=i>1?void 0:i?S0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(a)||a);return a};const ws=await ra(Object.assign({"./partname.de.json":()=>Ne(()=>import("./partname.de-FFi67qCi-iLAwhB2n.js"),[]),"./partname.en.json":()=>Ne(()=>import("./partname.en-DvPivLXR-DGb3aT7k.js"),[])}));mt.registerContribution(Bo,{component:"<lyra-part-name></lyra-part-name>"});let gl=class extends Fr{doBeforeUI(){this.watch(qe,()=>{this.requestUpdate()})}getPartName(){const t=qe.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||ws.NO_PART}render(){const e=qe.get()?.tabContribution?.icon||"box";return S`
            <wa-button 
                appearance="plain"
                size="small"
                title="${ws.ACTIVE_PART}">
                ${be(e,{label:"Part",slot:"start"})}
                ${this.getPartName()}
            </wa-button>
        `}};gl=E0([Z("lyra-part-name")],gl);var _0=Object.defineProperty,$0=Object.getOwnPropertyDescriptor,Na=(t,e,r,i)=>{for(var a=i>1?void 0:i?$0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&_0(e,r,a),a};const L0=Pr("LyraExtensions"),te=await ra(Object.assign({"./extensions.de.json":()=>Ne(()=>import("./extensions.de-CZkqW0F1-C2K7_1Fj.js"),[]),"./extensions.en.json":()=>Ne(()=>import("./extensions.en-Dg9Oqudm-BWVq_zKr.js"),[])}));let xi=class extends Pi{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){we(ba,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){Wt.enable(t.id,!0),this.requestUpdate()}disable(t){Wt.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=Mr.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return Wt.getExtensions();const t=this.filterText.toLowerCase();return Wt.getExtensions().filter(e=>String(e.name).toLowerCase().includes(t)||(e.description?String(e.description).toLowerCase().includes(t):!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],r=[];return t.forEach(i=>{Wt.isEnabled(i.id)?e.push(i):r.push(i)}),e.sort((i,a)=>String(i.name).localeCompare(String(a.name))),r.sort((i,a)=>String(i.name).localeCompare(String(a.name))),{enabled:e,available:r}}isExternalExtension(t){return t.external===!0}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const t=await Uo("Enter extension URL or source identifier:","",!1);if(!t)return;await Qr.runAsync("Registering extension",async()=>{let e=t;pr.isGitHubUrl(t)&&(e=pr.convertGitHubUrlToSource(t));const r=pr.parseSource(e);r?.type==="github"?await this.fetchGitHubMetadata(r,e):(this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(t){ot(`Failed to register extension: ${t}`)}}async fetchGitHubMetadata(t,e){try{const r=await pr.fetchGitHubPackageJson(t),i=t.owner,a=t.repo,o=r.name||`ext.${i}-${a}`,s=r.name||`${i}/${a}`,n=r.description||"",l=r.version||"",d=r.author||(typeof r.author=="string"?r.author:r.author?.name)||"";this.registerExtensionData={id:o,name:s,description:n,url:e,version:l,author:d,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(r){L0.warn(`Could not fetch package.json, using defaults: ${r}`),this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){ot("URL is required");return}if(!this.registerExtensionData.id){ot("Extension ID is required");return}if(!this.registerExtensionData.name){ot("Extension name is required");return}try{await Qr.runAsync("Registering extension",async()=>{const t={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};Wt.registerExtension(t),await Wt.loadExtensionFromUrl(this.registerExtensionData.url,t.id),ie(`Extension ${t.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(t){ot(`Failed to register extension: ${t}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return S`
            <wa-input
                placeholder="${te.FILTER_PLACEHOLDER}"
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
        `}renderContent(){const t=this.getGroupedExtensions(),e=t.enabled.length>0||t.available.length>0;return S`
            ${re(this.showRegisterDialog,()=>S`
                <wa-dialog 
                    label="Register Extension"
                    open
                    @wa-request-close=${()=>this.cancelRegisterExtension()}
                    style="--wa-dialog-width: 500px;">
                    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
                        <wa-input
                            label="Extension ID *"
                            .value=${this.registerExtensionData.id||""}
                            @input=${r=>{this.registerExtensionData.id=r.target.value,this.requestUpdate()}}
                            required
                            hint="Unique identifier for the extension (e.g., 'ext.my-extension')">
                        </wa-input>
                        
                        <wa-input
                            label="Name *"
                            .value=${this.registerExtensionData.name||""}
                            @input=${r=>{this.registerExtensionData.name=r.target.value,this.requestUpdate()}}
                            required
                            hint="Display name of the extension">
                        </wa-input>
                        
                        <wa-input
                            label="Description"
                            .value=${this.registerExtensionData.description||""}
                            @input=${r=>{this.registerExtensionData.description=r.target.value,this.requestUpdate()}}
                            hint="Description of what the extension does">
                        </wa-input>
                        
                        <wa-input
                            label="URL *"
                            .value=${this.registerExtensionData.url||""}
                            @input=${r=>{this.registerExtensionData.url=r.target.value,this.requestUpdate()}}
                            required
                            readonly
                            hint="Extension source URL or identifier">
                        </wa-input>
                        
                        <div style="display: flex; gap: 0.5rem;">
                            <wa-input
                                label="Version"
                                .value=${this.registerExtensionData.version||""}
                                @input=${r=>{this.registerExtensionData.version=r.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension version">
                            </wa-input>
                            
                            <wa-input
                                label="Author"
                                .value=${this.registerExtensionData.author||""}
                                @input=${r=>{this.registerExtensionData.author=r.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension author">
                            </wa-input>
                        </div>
                        
                        <wa-input
                            label="Icon"
                            .value=${this.registerExtensionData.icon||"puzzle-piece"}
                            @input=${r=>{this.registerExtensionData.icon=r.target.value,this.requestUpdate()}}
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
                            ${e?S`
                                ${t.enabled.length>0?S`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                            ${te.INSTALLED} (${t.enabled.length})
                                        </span>
                                        ${t.enabled.map(r=>{const i=this.isExternalExtension(r);return S`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                                    <span>${be(r.icon)}</span> ${r.name}${i?S` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                                ${t.available.length>0?S`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                            ${te.AVAILABLE} (${t.available.length})
                                        </span>
                                        ${t.available.map(r=>{const i=this.isExternalExtension(r);return S`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                                    <span>${be(r.icon)}</span> ${r.name}${i?S` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                            `:""}
                            ${e?"":S`
                                <div style="padding: 1em; text-align: center; opacity: 0.7;">
                                    ${te.NO_MATCHES({filterText:this.filterText})}
                                </div>
                            `}
                        </wa-tree>
                    </wa-scroller>
                </div>
                <wa-scroller slot="end" class="extensions-detail-scroller" orientation="vertical">
                <div class="extensions-detail-content">
                    ${re(this.selectedExtension,r=>{const i=this.isExternalExtension(r),a=Wt.isEnabled(r.id);return S`
                                <h1>${be(r.icon)} ${r.name}${i?" (External)":""}</h1>
                                ${re(i,()=>S`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${te.EXTERNAL_EXTENSION}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${re(a,()=>S`
                                        <wa-button 
                                            title="${this.isExtensionRequired(r.id)?te.REQUIRED_HINT:te.DISABLE_TITLE}" 
                                            @click="${()=>this.disable(r)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(r.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${te.UNINSTALL}
                                        </wa-button>
                                        ${re(this.isExtensionRequired(r.id),()=>S`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${te.REQUIRED_HINT}</span>
                                            </div>
                                        `)}
                                    `,()=>S`
                                        <wa-button 
                                            title="${te.ENABLE_TITLE}" 
                                            @click="${()=>this.enable(r)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${te.INSTALL}
                                        </wa-button>
                                    `)}
                                </div>

                                ${re(r.experimental,()=>S`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${te.EXPERIMENTAL}</i></small>
                                    </div>
                                `)}

                                ${re(r.version||r.author,()=>S`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${re(r.version,()=>S`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${te.VERSION} <strong>${r.version}</strong></span>
                                            </div>
                                        `)}
                                        ${re(r.author,()=>S`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${te.AUTHOR} <strong>${r.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${r.description}</p>

                                ${re(r.dependencies&&r.dependencies.length>0,()=>S`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${te.DEPENDENCIES}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${r.dependencies.map(o=>{const s=Wt.getExtensions().find(l=>l.id===o),n=Wt.isEnabled(o);return S`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${n?"check-circle":"circle"}" 
                                                            style="color: ${n?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        ${be(s?.icon??"puzzle-piece")}
                                                        <span>${s?.name||o}</span>
                                                        ${n?"":S`
                                                            <span class="dependency-badge">${te.NOT_INSTALLED}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${te.DEPENDENCIES_HINT}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
                </wa-scroller>
            </wa-split-panel>
        `}};xi.styles=J`
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
    `;Na([X()],xi.prototype,"selectedExtension",2);Na([X()],xi.prototype,"filterText",2);Na([X()],xi.prototype,"showRegisterDialog",2);Na([X()],xi.prototype,"registerExtensionData",2);xi=Na([Z("lyra-extensions")],xi);var z0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,Wo=(t,e,r,i)=>{for(var a=i>1?void 0:i?A0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&z0(e,r,a),a};const ee=await ra(Object.assign({"./logterminal.de.json":()=>Ne(()=>import("./logterminal.de-MX1cr5ek-EcKGbnDh.js"),[]),"./logterminal.en.json":()=>Ne(()=>import("./logterminal.en-BHVSaQqb-DpFjNbQM.js"),[])}));let Gi=class extends Pi{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Vr()}connectedCallback(){super.connectedCallback(),this.loadSettings(),sm(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),nm()}log(t,e,r="info"){const i={timestamp:new Date,level:r,source:t,message:e};this.messages=[...this.messages,i],this.autoScroll&&this.updateComplete.then(()=>{const a=this.containerRef.value;a&&(a.scrollTop=a.scrollHeight)})}clear(){this.messages=[]}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(a=>a.level==="info").length,e=this.messages.filter(a=>a.level==="warning").length,r=this.messages.filter(a=>a.level==="error").length,i=this.messages.filter(a=>a.level==="debug").length;return S`
            <lyra-command 
                icon="list"
                title="${ee.ALL_LOGS}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings()}}>
                ${ee.ALL} (${this.messages.length})
            </lyra-command>

            <lyra-command 
                icon="circle-info"
                title="${ee.INFO_LOGS}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings()}}>
                ${ee.INFO}${t>0?` (${t})`:""}
            </lyra-command>

            <lyra-command 
                icon="triangle-exclamation"
                title="${ee.WARNING_LOGS}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings()}}>
                ${ee.WARNINGS}${e>0?` (${e})`:""}
            </lyra-command>

            <lyra-command 
                icon="circle-xmark"
                title="${ee.ERROR_LOGS}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings()}}>
                ${ee.ERRORS}${r>0?` (${r})`:""}
            </lyra-command>

            <lyra-command 
                icon="bug"
                title="${ee.DEBUG_LOGS}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings()}}>
                ${ee.DEBUG}${i>0?` (${i})`:""}
            </lyra-command>

            <wa-divider orientation="vertical"></wa-divider>

            <lyra-command 
                icon="arrow-down" 
                title="${this.autoScroll?ee.AUTO_SCROLL_ENABLED:ee.AUTO_SCROLL_DISABLED}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings()}}>
                ${this.autoScroll?ee.AUTO_SCROLL:ee.MANUAL}
            </lyra-command>

            <lyra-command 
                icon="trash" 
                title="${ee.CLEAR_LOGS}"
                .action=${()=>this.clear()}>
                ${ee.CLEAR}
            </lyra-command>
        `}renderContent(){const t=this.getFilteredMessages();return S`
            <div class="log-terminal">
                <div class="messages" ${qr(this.containerRef)}>
                    ${t.length===0?S`<div class="empty-state">${ee.NO_LOG_MESSAGES}</div>`:t.map(e=>S`
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
        `}async loadSettings(){const t=await this.getDialogSetting();t&&(typeof t.filter=="string"&&(t.filter==="all"||["info","warning","error","debug"].includes(t.filter))&&(this.filter=t.filter),typeof t.autoScroll=="boolean"&&(this.autoScroll=t.autoScroll))}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};Gi.styles=J`
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
    `;Wo([X()],Gi.prototype,"messages",2);Wo([X()],Gi.prototype,"autoScroll",2);Wo([X()],Gi.prototype,"filter",2);Gi=Wo([Z("lyra-log-terminal")],Gi);var T0=Object.defineProperty,R0=Object.getOwnPropertyDescriptor,je=(t,e,r,i)=>{for(var a=i>1?void 0:i?R0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&T0(e,r,a),a};const D0=await ra(Object.assign({"./fastviews.de.json":()=>Ne(()=>import("./fastviews.de-MGAlHTsp-CU9Rj7sS.js"),[]),"./fastviews.en.json":()=>Ne(()=>import("./fastviews.en-BoYc4WrC-DnZQwCTs.js"),[])}));let Le=class extends Po{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=Vr(),this.tabsRef=Vr(),this.resizeHandleRef=Vr(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(t){if(!this.disabled)if(this.containerId){const e=document.querySelector(`lyra-tabs#${this.containerId}`);if(!e){console.error(`fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(t)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(t)})}handleDrawerHide(){this.drawerOpen=!1}startResize(t){t.preventDefault(),t.stopPropagation();const e=this.drawerRef.value;if(!e)return;let i=(()=>{const s=e.shadowRoot?.querySelector('[part="panel"]');if(s&&s.offsetWidth>0)return s.offsetWidth;const d=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(d){const u=parseFloat(d[1]),m=d[2];if(m==="px")return u;if(m==="vw")return u/100*window.innerWidth;if(m==="vh")return u/100*window.innerHeight;if(m==="%")return u/100*window.innerWidth}return 0})();i===0&&(i=window.innerWidth*.5);const a=s=>{this.resizing&&(s.preventDefault(),s.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const n=this.resizing.startX-s.clientX,l=Math.round(this.resizing.startSize+n),d=200,u=Math.round(window.innerWidth*.9);if(l>=d&&l<=u){this.drawerSize=`${l}px`;const m=this.drawerRef.value;m&&(m.style.setProperty("--size",this.drawerSize),m.style.setProperty("transition","none"))}this.resizing.rafId=null}))},o=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const s=this.drawerRef.value;s&&s.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:t.clientX,startSize:i,handleMouseMove:a,handleMouseUp:o,rafId:null},document.addEventListener("mousemove",a,{passive:!1}),document.addEventListener("mouseup",o,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),we(nr,t=>{this.target&&t.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const t=mt.getContributions(this.target);this.tabContributions=t.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(t){return S`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(t)}>
                ${be(t.icon,{label:t.label,slot:"icon"})}
                ${t.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?Nt:S`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    ${be(this.icon,{label:this.title,slot:"start"})}
                    <slot></slot>
                </wa-button>
                
                ${this.title?S`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:Nt}
                
                ${this.tabContributions.map(t=>this.renderTabContribution(t))}
            </wa-dropdown>

            ${this.containerId?Nt:S`
                <wa-drawer 
                    ${qr(this.drawerRef)}
                    label="${this.title||D0.FAST_VIEWS}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${qr(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <lyra-tabs 
                        ${qr(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </lyra-tabs>
                </wa-drawer>
            `}
        `:Nt}};Le.styles=J`
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
    `;je([h()],Le.prototype,"target",2);je([h()],Le.prototype,"title",2);je([h()],Le.prototype,"icon",2);je([h({type:Boolean})],Le.prototype,"disabled",2);je([h()],Le.prototype,"appearance",2);je([h()],Le.prototype,"size",2);je([h()],Le.prototype,"placement",2);je([h()],Le.prototype,"containerId",2);je([X()],Le.prototype,"tabContributions",2);je([X()],Le.prototype,"drawerOpen",2);je([X()],Le.prototype,"drawerSize",2);Le=je([Z("lyra-fastviews")],Le);var I0=Object.getOwnPropertyDescriptor,O0=(t,e,r,i)=>{for(var a=i>1?void 0:i?I0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(a)||a);return a};function P0(){let t=document.getElementById("global-dialog-container");return t||(t=document.createElement("div"),t.id="global-dialog-container",document.body.appendChild(t)),t}const Ac=t=>{try{return new Intl.DisplayNames([t],{type:"language"}).of(t)||t.toUpperCase()}catch{return t.toUpperCase()}},F0=()=>[...vn.get()].sort(),N0=async()=>{const t=F0(),e=yi.get();return new Promise(r=>{const i=P0();let a=!1;const o=()=>{const d=i.querySelector("wa-dialog");d&&!a&&(d.open=!1)},s=()=>{a||(a=!0,Je(S``,i),r())},n=async d=>{await Xt.set(So,d),o()},l=S`
            <wa-dialog 
                label="Select Language" 
                open 
                light-dismiss
                @wa-request-close=${o}
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
                    ${t.map(d=>S`
                        <div 
                            class="language-item ${d===e?"active":""}"
                            @click=${()=>n(d)}>
                            <span class="language-code">${d.toUpperCase()}</span>
                            <span class="language-name">${Ac(d)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;Je(l,i)})};let Bs=class extends Fr{render(){const t=yi.get(),e=Ac(t),r=`${t.toUpperCase()} ${e}`;return S`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>N0()}>
                ${r}
            </wa-button>
        `}};Bs.styles=J`
        :host {
            display: inline-block;
        }
    `;Bs=O0([Z("lyra-language-selector")],Bs);var B0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,Tc=(t,e,r,i)=>{for(var a=i>1?void 0:i?M0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&B0(e,r,a),a};let Eo=class extends Fr{constructor(){super(...arguments),this.currentLayoutId="standard"}doBeforeUI(){this.currentLayoutId=Mr.getCurrentLayoutId();const t=()=>{this.currentLayoutId=Mr.getCurrentLayoutId(),this.requestUpdate()};return window.addEventListener("app-loaded",t),window.addEventListener("layout-changed",t),()=>{window.removeEventListener("app-loaded",t),window.removeEventListener("layout-changed",t)}}async handleSelect(t){const e=t.detail?.item?.value;if(!(!e||e===this.currentLayoutId))try{await Mr.setPreferredLayoutId(e)}catch(r){console.error("Failed to switch layout:",r)}}render(){const t=Mr.getRegisteredLayouts();if(t.length<=1)return S``;const r=t.find(i=>i.id===this.currentLayoutId)?.name??this.currentLayoutId;return S`
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
                    title="Switch layout (current: ${r})">
                    <wa-icon name="table-cells" label="Layout"></wa-icon>
                </wa-button>
                ${t.map(i=>S`
                        <wa-dropdown-item
                            value="${i.id}"
                            type="checkbox"
                            ?checked=${i.id===this.currentLayoutId}>
                            ${be(i.icon,{label:i.name,slot:"icon"})}
                            ${i.name}
                        </wa-dropdown-item>
                    `)}
            </wa-dropdown>
        `}};Eo.styles=J`
        :host {
            display: inline-block;
        }
    `;Tc([X()],Eo.prototype,"currentLayoutId",2);Eo=Tc([Z("lyra-layout-switcher")],Eo);const U0="view.filebrowser",V0="view.logTerminal",q0="toolbar.info",W0="toolbar.fastViews",H0="toolbar.languageSelector",j0="toolbar.appSwitcher";mt.registerContribution(xo,{name:U0,label:"Workspace",icon:"folder-open",component:t=>S`<lyra-filebrowser id="${t}"></lyra-filebrowser>`});mt.registerContribution(cn,{name:V0,label:"Log Messages",icon:"list",component:t=>S`<lyra-log-terminal id="${t}"></lyra-log-terminal>`});mt.registerContribution(Ra,{name:q0,label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});mt.registerContribution(Ra,{name:W0,label:"Fast Views",component:'<lyra-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></lyra-fastviews>'});mt.registerContribution(Ra,{name:H0,label:"Language",component:()=>S`<lyra-language-selector></lyra-language-selector>`});mt.registerContribution(Ji,{name:j0,label:"App Switcher",component:()=>S`<lyra-layout-switcher></lyra-layout-switcher>`});var K0=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,Ba=(t,e,r,i)=>{for(var a=i>1?void 0:i?G0(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,r,a):s(a))||a);return i&&a&&K0(e,r,a),a};let Xi=class extends mn{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return S`
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
                <lyra-toolbar id=${hc}></lyra-toolbar>
                <lyra-toolbar id=${uc}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${Ji}></lyra-toolbar>
            </div>
            
            <lyra-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes=${this.getGridSizes()}>
                
                ${this.showLeftSidebar?S`
                        ${this.showBottomSidebar?S`
                                <lyra-resizable-grid 
                                    id="left-sidebar-split" 
                                    orientation="vertical" 
                                    sizes="50%, 50%">
                                    <lyra-tabs id="${xo}"></lyra-tabs>
                                    <lyra-tabs id="${mc}"></lyra-tabs>
                                </lyra-resizable-grid>
                            `:S`<lyra-tabs id="${xo}"></lyra-tabs>`}
                    `:Nt}
                
                ${this.showBottomPanel?S`
                        <lyra-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <lyra-tabs id="${_a}"></lyra-tabs>
                            <lyra-tabs id="${cn}"></lyra-tabs>
                        </lyra-resizable-grid>
                    `:S`<lyra-tabs id="${_a}"></lyra-tabs>`}
                
                ${this.showAuxSidebar?S`<lyra-tabs id="${gc}"></lyra-tabs>`:Nt}
            </lyra-resizable-grid>
            
            <div class="toolbar-bottom">
                <lyra-toolbar id=${pc}></lyra-toolbar>
                <lyra-toolbar id=${Bo}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${Ra}></lyra-toolbar>
            </div>
        `}};Ba([h({type:Boolean,attribute:"show-bottom-sidebar"})],Xi.prototype,"showBottomSidebar",2);Ba([h({type:Boolean,attribute:"show-bottom-panel"})],Xi.prototype,"showBottomPanel",2);Ba([h({type:Boolean,attribute:"show-left-sidebar"})],Xi.prototype,"showLeftSidebar",2);Ba([h({type:Boolean,attribute:"show-aux-sidebar"})],Xi.prototype,"showAuxSidebar",2);Xi=Ba([Z("lyra-standard-layout")],Xi);const X0=[{id:"standard",name:"Standard",label:"Standard",icon:"lyra layout-standard",component:"lyra-standard-layout"},{id:"standard-bottom-panel",name:"Standard (bottom panel)",label:"Standard (bottom panel)",icon:"lyra layout-standard-bottom-panel",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true"}}},{id:"standard-bottom-sidebar",name:"Standard (bottom sidebar)",label:"Standard (bottom sidebar)",icon:"lyra layout-standard-bottom-sidebar",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-sidebar":"true"}}},{id:"standard-full",name:"Standard (panel + sidebar)",label:"Standard (panel + sidebar)",icon:"lyra layout-standard-full",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true","show-bottom-sidebar":"true"}}}];for(const t of X0)mt.registerContribution(yo,t);async function Z0(t,e=!0){const r=await pt.getWorkspace();if(!r)return null;const i=t?.path;return e&&!i?null:{workspace:r,path:i||""}}function kn(t){return t&&typeof t.getContent=="function"&&typeof t.getSelection=="function"&&typeof t.getSnippet=="function"&&typeof t.getLanguage=="function"&&typeof t.getFilePath=="function"}function Ur(t=!1){const e={filePath:null,language:null};return t?{...e,snippet:null,cursorLine:null}:e}async function Y0(t,e=!0){const r=await Z0(t,e);if(!r)return null;const{workspace:i,path:a}=r;if(!a)return null;try{const o=await i.getResource(a);return!o||!(o instanceof Bt)?null:{workspace:i,path:a,file:o}}catch{return null}}At({command:{id:"disconnect_folder",name:"Disconnect folder",description:"Disconnects a folder from the workspace"},handler:{execute:async()=>{const t=Qt.get();if(!(t instanceof Pt&&t.getParent()===void 0)){ot("Select a folder root to disconnect.");return}try{const e=await pt.getFolderInfoForDirectory(t);if(e?.type==="indexeddb"){if(!await ji(`Also delete "${e.name}" from browser storage?

If not deleted, the folder data and blobs remain in IndexedDB.`))return;await Dg(t),ie(`Deleted IndexedDB data for ${e.name}.`)}await pt.disconnectFolder(t)}catch(e){ot(e.message)}}},contribution:{target:"contextmenu:view.filebrowser",label:"Disconnect folder",icon:"folder-minus",disabled:()=>{const t=Qt.get();return!(t instanceof Pt&&t.getParent()===void 0)}}});At({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>pt.connectWorkspace(e)).catch(e=>{ot(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});At({command:{id:"connect_opfs",name:"OPFS",description:"Connect to Origin Private File System (browser storage)",parameters:[]},handler:{execute:async()=>{try{await pt.connectFolder({opfs:!0})}catch(t){ot(t.message)}}},contribution:{target:"filebrowser.connections",label:"OPFS (Browser Storage)",icon:"database"}});At({command:{id:"connect_indexeddb",name:"IndexedDB",description:"Connect to IndexedDB-backed workspace (browser storage)",parameters:[{name:"name",description:"Optional display name for this IndexedDB workspace root",required:!1}]},handler:{execute:async t=>{const e=t.params?.name;try{await pt.connectFolder({indexeddb:!0,name:e})}catch(r){ot(r.message)}}},contribution:{target:"filebrowser.connections",label:"IndexedDB (Browser Storage)",icon:"database"}});At({command:{id:"refresh_resource",name:"Refresh resource",description:"Refreshes the connected folder of the selected resource, or the whole workspace if nothing is selected",parameters:[]},handler:{execute:async()=>{const t=Qt.get();if(t){t.getWorkspace().touch();return}const e=await pt.getWorkspace();if(!e){ot("No workspace selected.");return}e.touch()}}});At({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"The path of the file to open within the workspace; if omitted, the active selection is opened",required:!1},{name:"editorId",description:"Open with this editor id; if omitted, use default editor",required:!1}]},handler:{execute:async t=>{const e=t.params?.path,r=t.params?.editorId;let i=null;if(e)i=(await Y0({path:e}))?.file??null;else{const a=Qt.get();i=a instanceof Bt?a:null}i&&await Ki.loadEditor(i,r)}}});At({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!kn(e))return{...Ur(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...Ur(),content:null}}}}});At({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!kn(e))return{...Ur(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...Ur(),selection:null}}}}});At({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!kn(e))return Ur(!0);try{const r=t.params?.lines?parseInt(t.params.lines,10):5;if(isNaN(r)||r<0)return Ur(!0);const i=e.getSnippet(r);return i?{snippet:i.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:i.cursorLine}:Ur(!0)}catch{return Ur(!0)}}}});At({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=Mr.getCurrentApp();if(!e){ot("No app loaded");return}const r=e.dependencies??{},i=Object.keys(r).length>0,a=i?S`
                    <wa-tree style="--indent-guide-width: 1px;">
                        <wa-tree-item expanded>
                            <span>${e.name??""}</span>
                            ${Object.entries(r).map(([k,_])=>S`
                                <wa-tree-item>
                                    <span>${k} <small>${_}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    </wa-tree>
                `:S``;let o=null;const s=()=>(o||(o=document.getElementById("global-dialog-container")||document.createElement("div"),o.id||(o.id="global-dialog-container",document.body.appendChild(o))),o),n=()=>{o&&Je(S``,o)},l=k=>{const _=Lt.parse(k,{async:!1});return S`${Lr(_)}`};let d=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{d=await e.releaseHistory()}catch(k){console.error("Failed to load release history from app:",k),d=[]}else d=e.releaseHistory;const u=e.version??"0.0.0",m=d.length>0?d.findIndex(k=>k.tag_name===u):-1,b=m>=0?m:0;let p=b;const v=k=>{if(d.length===0)return"";const _=d[k],z=_.tag_name===u;let L=`**Version:** ${_.tag_name}`;z&&(L+=" (Current)"),L+=`

`;const P=new Date(_.published_at).toLocaleDateString();if(L+=`**Released:** ${P}

`,!z){const D=u.replace(/^v/,""),q=_.tag_name.replace(/^v/,""),I=D.split(".").map(Number),W=q.split(".").map(Number);let it=!1;for(let $=0;$<Math.max(I.length,W.length);$++){const N=I[$]||0,g=W[$]||0;if(g>N){it=!0;break}if(g<N)break}it&&(L+=`⚠️ **Update available - reload page to update**

`)}return _.body&&(L+=`---

${_.body}`),L},w=()=>{n()},x=()=>{n()},y=k=>{const _=v(k),z=d.length>0,L=S`
                    <wa-dialog 
                        label="About ${e.name??""} - ${e.version??"0.0.0"}"
                        open 
                        light-dismiss
                        style="--width: 600px;"
                        @wa-request-close=${w}
                        @wa-after-hide=${x}
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
                                ${d.length>0?S`
                                    <wa-tab slot="nav" panel="release">Release History</wa-tab>
                                    <wa-tab-panel name="release">
                                        ${l(_)}
                                    </wa-tab-panel>
                                `:""}
                                
                                ${i?S`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${a}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${z?S`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${k===d.length-1}
                                    @click=${()=>{k<d.length-1&&(p=k+1,y(p))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${k===0}
                                    @click=${()=>{k>0&&(p=k-1,y(p))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;Je(L,s())};return y(b),new Promise(k=>{const _=()=>{o?.querySelector("wa-dialog[open]")?setTimeout(_,100):k()};_()})}}});At({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=qe.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=qe.get();return!t||!t.isDirty()}}});const Rc="theme";async function Dc(t){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(t)}async function Q0(){const t=await Xt.get(Rc);await Dc(t||"wa-dark")}async function J0(t){await Xt.set(Rc,t)}At({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{const r=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await Dc(r),await J0(r)}},contribution:{target:Ji,icon:"circle-half-stroke",label:"Theme Switcher"}});Q0().catch(t=>{console.error("Failed to load theme preference:",t)});At({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:Ji,icon:"expand",label:"Fullscreen"}});At({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",icon:"puzzle-piece",state:{},component:r=>S`<lyra-extensions id="${r}"></lyra-extensions>`};Ki.loadEditor(e,"extensions-editor").then()}},contribution:{target:Ji,icon:"puzzle-piece",label:"Open Extensions"}});At({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async t=>Wt.getExtensions().map(r=>({id:r.id,name:r.name,description:r.description,experimental:r.experimental,enabled:Wt.isEnabled(r.id)}))}});At({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?ot(t):ie(t))}}});const Ic=`self.onmessage = async function(e) {
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
`,bl=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Ic],{type:"text/javascript;charset=utf-8"});function tb(t){let e;try{if(e=bl&&(self.URL||self.webkitURL).createObjectURL(bl),!e)throw"";const r=new Worker(e,{type:"module",name:t?.name});return r.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),r}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Ic),{type:"module",name:t?.name})}}function eb(){let t=null,e=null;function r(){return t||(t=new tb,t.onmessage=i=>{const a=e;e=null,a&&(i.data.type==="result"?a.resolve(i.data.value):a.reject(new Error(i.data.message??"Unknown error")))},t.onerror=i=>{const a=e;e=null,a&&a.reject(new Error(i.message??"Worker error"))}),t}return{execute(i){return new Promise((a,o)=>{e={resolve:a,reject:o},r().postMessage(i)})},close(){t&&(t.terminate(),t=null),e=null}}}async function rb(t){if(t.code?.trim())return t.code.trim();if(!t.script)return ot("Provide 'script' (file path) or 'code'."),null;const e=await pt.getWorkspace();if(!e)return ot("No workspace selected."),null;try{const r=await e.getResource(t.script);if(!r||!(r instanceof Bt))return ot("File not found: "+t.script),null;const i=await r.getContents();return typeof i!="string"?(ot("File is not a text file"),null):i}catch(r){return ot(`Failed to access file: ${r instanceof Error?r.message:String(r)}`),null}}At({command:{id:"js",name:"Run JavaScript file",description:"Runs a script via JsRuntime (inline or file). Return value or self.postMessage(value) is shown.",parameters:[{name:"script",description:"workspace path to a .js file",required:!1},{name:"code",description:"inline JavaScript",required:!1}]},handler:{execute:async t=>{const e=await rb(t.params??{});if(!e)return;const r=eb();try{const i=await r.execute(e);return i!==void 0&&ie(String(i)),i}catch(i){ot(i instanceof Error?i.message:String(i))}finally{r.close()}}}});At({command:{id:"open_view_as_editor",name:"Open view as editor",description:"Opens a dashboard view in the editor area",parameters:[{name:"name",description:"View contribution name",required:!0},{name:"sourceContributionSlot",description:"source contribution slot (default: SYSTEM_VIEWS)",required:!1}]},handler:{execute:async({params:t})=>{const e=t?.name;if(!e)return;const r=t?.sourceContributionSlot??fc,a=mt.getContributions(r).find(o=>o.name===e);a?.component&&await Ki.openTab(a)}}});async function Ho(t){const e=await pt.getWorkspace();if(!e)return ot("No workspace selected."),null;try{const r=await e.getResource(t);return r instanceof Bt?r:(ot("File not found: "+t),null)}catch(r){return ot(`Failed to access file: ${r.message??r}`),null}}async function jo(t){try{const e=await t.getContents();return typeof e!="string"?(ot("File is not a text file"),null):e}catch(e){return ot(`Failed to read file: ${e.message??e}`),null}}async function Oc(t){const e=[],r=await t.listChildren(!0);for(const i of r){if(i instanceof Bt){e.push(i.getWorkspacePath());continue}i instanceof Pt&&e.push(...await Oc(i))}return e}At({command:{id:"cat",name:"Cat - Show file contents",description:"Shows the complete contents of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0}],output:[{name:"content",description:"the complete contents of the file"}]},handler:{execute:async({params:t})=>{const e=t?.path;if(!e){ot("No file path provided.");return}const r=await Ho(e);if(r)return jo(r)}}});At({command:{id:"exists",name:"Exists",description:"Checks if a file exists at the given path (like bash test -f)",parameters:[{name:"path",description:"Path of the file to check, relative to the workspace",required:!0}],output:[{name:"exists",description:"true if the file exists, false otherwise"}]},handler:{execute:async({params:t})=>{const e=await pt.getWorkspace();if(!e)return!1;const r=t?.path;if(!r)return!1;try{return await e.getResource(r)instanceof Bt}catch{return!1}}}});function Pc(t){return t instanceof Bt||t instanceof Pt}const Fc=()=>!Pc(Qt.get()),Nc=()=>{const t=Qt.get();return!Pc(t)||t instanceof Pt&&t.getParent()===void 0};mt.registerContribution("filebrowser.create",{name:"filebrowser.create.file",command:"touch",icon:"file-plus",label:"Create File...",params:{ask:!0}});mt.registerContribution("filebrowser.create",{name:"filebrowser.create.folder",command:"mkdir",icon:"folder-plus",label:"Create Folder...",params:{ask:!0}});mt.registerContribution("toolbar:view.filebrowser",{name:"toolbar.filebrowser.rename",command:"mv",icon:"pen",label:"Rename",disabled:Fc});mt.registerContribution("toolbar:view.filebrowser",{name:"toolbar.filebrowser.delete",command:"rm",icon:"trash",label:"Delete",disabled:Nc});mt.registerContribution("contextmenu:view.filebrowser",{name:"contextmenu.filebrowser.create-folder",command:"mkdir",icon:"folder-plus",label:"Create Folder...",params:{ask:!0}});mt.registerContribution("contextmenu:view.filebrowser",{name:"contextmenu.filebrowser.rename",command:"mv",icon:"pen",label:"Rename",disabled:Fc});mt.registerContribution("contextmenu:view.filebrowser",{name:"contextmenu.filebrowser.delete",command:"rm",icon:"trash",label:"Delete",disabled:Nc});At({command:{id:"head",name:"Head - Show first lines",description:"Shows the first N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the beginning (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the first N lines of the file"}]},handler:{execute:async({params:t})=>{const e=t?.path;if(!e){ot("No file path provided.");return}const r=await Ho(e);if(!r)return;const i=t?.lines?parseInt(t.lines,10):10;if(Number.isNaN(i)||i<1){ot("Number of lines must be a positive integer");return}const a=await jo(r);if(a)return a.split(`
`).slice(0,i).join(`
`)}}});At({command:{id:"ls",name:"List files",description:"Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",parameters:[{name:"path",description:"the path of the directory to list, relative to the workspace. If not provided, uses workspace root",required:!1},{name:"recursive",description:"whether to recursively traverse all subdirectories",type:"boolean",required:!1}],output:[{name:"files",description:"array of file objects with path and size information"}]},handler:{execute:async({params:t})=>{const e=await pt.getWorkspace();if(!e)return ot("No workspace available"),[];const r=t?.path,i=t?.recursive===!0||t?.recursive==="true";try{let a=e;if(r){const n=await e.getResource(r);if(!n)return ot(`Path not found: ${r}`),[];if(!(n instanceof Pt))return ot(`Path is not a directory: ${r}`),[];a=n}if(i){const n=await Oc(a),l=[];for(const d of n){const u=await e.getResource(d);u instanceof Bt&&l.push({path:d,size:await u.size()})}return l}const o=await a.listChildren(!0),s=[];for(const n of o)n instanceof Bt&&s.push({path:n.getWorkspacePath(),size:await n.size()});return s}catch(a){return ot(`Failed to list files: ${a.message??a}`),[]}}}});function ib(t){return t.replace(/^\/+/,"").replace(/\/+$/,"")}function wl(){const t=Qt.get();if(t instanceof Pt)return t.getWorkspacePath();if(t instanceof Bt)return t.getParent()?.getWorkspacePath()}function vl(t,e){return t?`${t}/${e}`:e}async function ab(t){const e=await pt.getWorkspace();if(!e){ot("No workspace selected.");return}const r="New Folder";let i=vl(t,r),a=await e.getResource(i);if(!a)return i;let o=0;for(;;){if(i=vl(t,`${r} (${o})`),a=await e.getResource(i),!a)return i;o++}}At({command:{id:"mkdir",name:"mkdir - Create new folder",description:"Creates a new folder within the workspace.",parameters:[{name:"path",description:"the folder path to create, relative to the workspace",required:!1},{name:"ask",description:"whether to prompt the user for the folder path",required:!1}],output:[{name:"path",description:"the path of the created folder"}]},handler:{execute:async({params:t})=>{const e=t?.ask;let r=t?.path;const i=await ab(wl());if(!i||(e||!r)&&(r=await Uo("Enter path to new folder:",r||i),!r))return;const a=r.startsWith("/");let o=ib(r);if(!o){ot("Folder path must not be empty.");return}if(!a){const d=wl();d&&!o.startsWith(d+"/")&&(o=`${d}/${o}`)}const s=await pt.getWorkspace();if(!s){ot("No workspace selected.");return}const n=await s.getResource(o);if(n instanceof Pt)return ie(`Folder already exists: ${o}`),o;if(n instanceof Bt){ot(`Cannot create folder. A file already exists at "${o}".`);return}if(!(await s.getResource(`${o}/`,{create:!0})instanceof Pt)){ot(`Could not create folder: ${o}`);return}return ie(`Folder created: ${o}`),o}}});At({command:{id:"mv",name:"mv - Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{const e=await pt.getWorkspace();if(!e){ot("No workspace selected.");return}const r=t.params?.path;let i=null;if(r&&(i=await e.getResource(r)),i||(i=Qt.get()),!i){ot("No resource to rename provided!");return}const a=i.getName(),o=t.params?.newName??await Uo(`Enter new name for "${a}":`,a);if(!(!o||o===a))try{await i.rename(o),ie(`Resource renamed to: ${o}`)}catch(s){ot(`Failed to rename ${a}: ${s.message??s}`)}}}});At({command:{id:"rm",name:"rm - Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",keyBinding:"Delete",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{const e=await pt.getWorkspace();if(!e){ot("No workspace selected.");return}const r=t.params?.path;let i=null;if(r&&(i=await e.getResource(r)),i||(i=Qt.get()),!i){ot("No resource to delete provided!");return}if(i instanceof Pt&&i.getParent()===void 0){ot('Root folders cannot be deleted. Use "Disconnect folder" instead.');return}const a=i.getWorkspacePath(),o=t.params?.confirm;if(!((o===void 0||o===!0)&&!await ji(`Are you sure you want to delete ${a}?`)))try{await i.delete(),ie("Resource deleted: "+a)}catch(s){ot(`Resource ${a} could not be deleted: ${s.message??s}`)}}}});At({command:{id:"tail",name:"Tail - Show last lines",description:"Shows the last N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the end (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the last N lines of the file"}]},handler:{execute:async({params:t})=>{const e=t?.path;if(!e){ot("No file path provided.");return}const r=await Ho(e);if(!r)return;const i=t?.lines?parseInt(t.lines,10):10;if(Number.isNaN(i)||i<1){ot("Number of lines must be a positive integer");return}const a=await jo(r);if(a)return a.split(`
`).slice(-i).join(`
`)}}});At({command:{id:"touch",name:"Touch - Create new file",description:"Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async({params:t})=>{let e=t?.path;const r=t?.contents,i=t?.ask,a=t?.extension;if((i||!e)&&(e=await Uo("Enter path to new file (directories will be created if not exist):",e||""),!e))return;if(a&&!e.endsWith(a)&&(e+=a),e.startsWith("/"))e=e.slice(1);else{const d=Qt.get(),u=d instanceof Pt?d.getWorkspacePath():d instanceof Bt?d.getParent()?.getWorkspacePath():void 0;u&&!e.startsWith(u+"/")&&(e=u+"/"+e)}const s=await pt.getWorkspace();if(!s){ot("No workspace selected.");return}if(await s.getResource(e)&&!await ji(`File "${e}" already exists. Do you want to overwrite it?`))return;const l=await s.getResource(e,{create:!0});if(!(l instanceof Bt)){ot("Could not create file: "+e);return}return r&&await l.saveContents(r),ie(`File created: ${e}`),e}}});At({command:{id:"unzip",name:"Unzip Archive",description:"Extract a zip archive from the workspace",parameters:[{name:"file",description:"the zip file to extract, if not provided, the current selection will be used",required:!1},{name:"target",description:"target folder to extract into, defaults to the zip filename without extension",required:!1}]},handler:{canExecute:t=>{let e=t.params?.file;if(!e){const r=Qt.get();if(!r||!("path"in r))return!1;e=r.path}return e.toLowerCase().endsWith(".zip")},execute:async t=>{let e=t.params?.file;e||(e=Qt.get().path);const r=await pt.getWorkspace();if(!r){ot("No workspace selected.");return}await Qr.runAsync("Extracting archive",async i=>{try{const a=await r.getResource(e);if(!a){ot("File not found: "+e);return}let o=t.params?.target;o||(o=(e.split("/").pop()||"extracted").replace(/\.zip$/i,"")+"/"),i.message="Loading archive...",i.progress=0,await r.getResource(o,{create:!0});const n=await a.getContents({blob:!0}),l=await p0.loadAsync(n),d=Object.values(l.files).filter(m=>!m.dir).length;let u=0;i.message=`Extracting to ${o.replace(/\/$/,"")}...`;for(const[m,b]of Object.entries(l.files)){if(b.dir)continue;const p=await b.async("blob"),v=`${o}${m}`;await(await r.getResource(v,{create:!0})).saveContents(p,{contentType:Oa.BINARY}),u++,i.progress=Math.round(u/d*100),i.message=`Extracting ${u}/${d} files...`}i.progress=100,ie(`Archive extracted to ${o.replace(/\/$/,"")}: ${u} file(s)`)}catch(a){throw ot("Failed to extract archive: "+a),a}})}}});At({command:{id:"wc",name:"Word count",description:"Counts lines, words, and characters in a file",parameters:[{name:"path",description:"the path of the file to analyze",required:!0}],output:[{name:"lines",description:"number of lines in the file"},{name:"words",description:"number of words in the file"},{name:"characters",description:"number of characters in the file"}]},handler:{execute:async({params:t})=>{const e=t?.path;if(!e){ot("No file path provided.");return}const r=await Ho(e);if(!r)return;const i=await jo(r);if(!i)return;const a=i.split(`
`),o=i.trim(),s=o===""?0:o.split(/\s+/).filter(n=>n.length>0).length;return{lines:a.length,words:s,characters:i.length}}}});function yl(){return`downloaded-file-${new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").slice(0,-5)}`}function ob(t){if(t.startsWith("data:"))return yl();try{const e=new URL(t).pathname.split("/").filter(i=>i.length>0),r=e[e.length-1];if(r?.includes(".")&&!r.includes(";"))return r}catch{}return yl()}At({command:{id:"wget",name:"wget",description:"Download a file from a URL to the workspace",parameters:[{name:"url",description:"the URL of the file to download",required:!0},{name:"filename",description:"optional filename to save as (will be auto-detected if not provided)",required:!1},{name:"targetPath",description:"workspace path where to save; if not provided, a file browser dialog is shown to pick a directory",required:!1}]},handler:{canExecute:t=>{const e=t.params?.url;return!!(e&&(e.startsWith("http://")||e.startsWith("https://")))},execute:async t=>{const e=t.params?.url;if(!e){ot("No URL provided.");return}const r=await pt.getWorkspace();if(!r){ot("No workspace selected.");return}const i=ob(e);let a;const o=t.params?.targetPath;if(o){const s=await pt.getFolders(),n=s.length>0?s[0].name:null,l=o.includes("/")?o:n?`${n}/${o}`:o,d=l.split("/").pop()??"";a=d.includes(".")&&d!==l?l:`${l.replace(/\/$/,"")}/${i}`}else{const s=await Xg("directory");if(s==null)return;a=`${s}/${i}`}await Qr.runAsync("Downloading file",async s=>{s.message="Starting download...",s.progress=0;try{const n=await fetch(e,{mode:"cors",credentials:"omit"});if(!n.ok){ot("Failed to download file: "+n.statusText);return}let l=t.params?.filename;if(!l){const m=n.headers.get("content-disposition");if(m){const b=m.match(/filename="?([^";\n]+)"?/);b?.[1]&&(l=b[1].trim())}}l||(l=i);const d=a.includes("/")?a.replace(/\/[^/]+$/,`/${l}`):l;s.message=`Downloading ${l}...`,s.progress=50,await(await r.getResource(d,{create:!0})).saveContents(n.body,{contentType:Oa.BINARY}),s.progress=100,ie(`File downloaded: ${l}`)}catch(n){throw ot("Failed to download file: "+String(n)),n}})}}});de.put("constants",sg);ai.put("html",S);ai.put("render",Je);ai.put("toastInfo",ie);ai.put("toastError",ot);ai.put("toastWarning",dm);ai.put("publish",vt);ai.put("subscribe",we);export{Qt as A,be as B,gc as C,ai as D,ji as E,Bt as F,uc as G,Ra as H,_r as I,Ql as J,fa as K,Pi as L,Ts as M,Po as N,eb as O,cn as P,Xg as Q,Oa as R,hb as S,hc as T,Qa as U,lb as V,cb as W,mc as X,Pt as Y,Mr as a,At as b,mt as c,Ji as d,Wt as e,Ki as f,Pr as g,pc as h,ra as i,Fr as j,zr as k,ci as l,Xt as m,Tt as n,de as o,Uo as p,Qe as q,gd as r,Qr as s,ot as t,ie as u,Pe as v,pt as w,xo as x,nr as y,qe as z};
