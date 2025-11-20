function Qs(t,e){for(var n=0;n<e.length;n++){const o=e[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in t)){const i=Object.getOwnPropertyDescriptor(o,a);i&&Object.defineProperty(t,a,i.get?i:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function yf(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function o(){var a=!1;try{a=this instanceof o}catch{}return a?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var a=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:function(){return t[o]}})}),n}const er="modulepreload",nr=function(t){return"/"+t},Na={},or=function(e,n,o){let a=Promise.resolve();if(n&&n.length>0){let h=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");a=h(n.map(d=>{if(d=nr(d),d in Na)return;Na[d]=!0;const u=d.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":er,u||(f.as="script"),f.crossOrigin="",f.href=d,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((m,v)=>{f.addEventListener("load",m),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return a.then(r=>{for(const c of r||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};const Fn=globalThis,ha=Fn.ShadowRoot&&(Fn.ShadyCSS===void 0||Fn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,da=Symbol(),qa=new WeakMap;let Mi=class{constructor(e,n,o){if(this._$cssResult$=!0,o!==da)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ha&&e===void 0){const o=n!==void 0&&n.length===1;o&&(e=qa.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&qa.set(n,e))}return e}toString(){return this.cssText}};const Pi=t=>new Mi(typeof t=="string"?t:t+"",void 0,da),kf=(t,...e)=>{const n=t.length===1?t[0]:e.reduce(((o,a,i)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[i+1]),t[0]);return new Mi(n,t,da)},ar=(t,e)=>{if(ha)t.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of e){const o=document.createElement("style"),a=Fn.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=n.cssText,t.appendChild(o)}},Ha=ha?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const o of e.cssRules)n+=o.cssText;return Pi(n)})(t):t;const{is:ir,defineProperty:sr,getOwnPropertyDescriptor:rr,getOwnPropertyNames:lr,getOwnPropertySymbols:cr,getPrototypeOf:hr}=Object,ho=globalThis,Wa=ho.trustedTypes,dr=Wa?Wa.emptyScript:"",ur=ho.reactiveElementPolyfillSupport,un=(t,e)=>t,Hn={toAttribute(t,e){switch(e){case Boolean:t=t?dr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},ua=(t,e)=>!ir(t,e),ja={attribute:!0,type:String,converter:Hn,reflect:!1,useDefault:!1,hasChanged:ua};Symbol.metadata??=Symbol("metadata"),ho.litPropertyMetadata??=new WeakMap;let Be=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=ja){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const o=Symbol(),a=this.getPropertyDescriptor(e,o,n);a!==void 0&&sr(this.prototype,e,a)}}static getPropertyDescriptor(e,n,o){const{get:a,set:i}=rr(this.prototype,e)??{get(){return this[n]},set(r){this[n]=r}};return{get:a,set(r){const c=a?.call(this);i?.call(this,r),this.requestUpdate(e,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ja}static _$Ei(){if(this.hasOwnProperty(un("elementProperties")))return;const e=hr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(un("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(un("properties"))){const n=this.properties,o=[...lr(n),...cr(n)];for(const a of o)this.createProperty(a,n[a])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[o,a]of n)this.elementProperties.set(o,a)}this._$Eh=new Map;for(const[n,o]of this.elementProperties){const a=this._$Eu(n,o);a!==void 0&&this._$Eh.set(a,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const a of o)n.unshift(Ha(a))}else e!==void 0&&n.push(Ha(e));return n}static _$Eu(e,n){const o=n.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const o of n.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ar(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,n,o){this._$AK(e,o)}_$ET(e,n){const o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Hn).toAttribute(n,o.type);this._$Em=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,n){const o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const i=o.getPropertyOptions(a),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Hn;this._$Em=a,this[a]=r.fromAttribute(n,i.type)??this._$Ej?.get(a)??null,this._$Em=null}}requestUpdate(e,n,o){if(e!==void 0){const a=this.constructor,i=this[e];if(o??=a.getPropertyOptions(e),!((o.hasChanged??ua)(i,n)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,n,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:o,reflect:a,wrapped:i},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??n??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(n=void 0),this._$AL.set(e,n)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,i]of o){const{wrapped:r}=i,c=this[a];r!==!0||this._$AL.has(a)||c===void 0||this.C(a,void 0,i,c)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(n)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[un("elementProperties")]=new Map,Be[un("finalized")]=new Map,ur?.({ReactiveElement:Be}),(ho.reactiveElementVersions??=[]).push("2.1.0");const pa=globalThis,Wn=pa.trustedTypes,Ka=Wn?Wn.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ri="$lit$",ce=`lit$${Math.random().toFixed(9).slice(2)}$`,Vi="?"+ce,pr=`<${Vi}>`,Ae=document,bn=()=>Ae.createComment(""),gn=t=>t===null||typeof t!="object"&&typeof t!="function",fa=Array.isArray,fr=t=>fa(t)||typeof t?.[Symbol.iterator]=="function",Ao=`[ 	
\f\r]`,sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xa=/-->/g,Ga=/>/g,we=RegExp(`>|${Ao}(?:([^\\s"'>=/]+)(${Ao}*=${Ao}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ya=/'/g,Za=/"/g,Fi=/^(?:script|style|textarea|title)$/i,Bi=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),g=Bi(1),Ef=Bi(2),ft=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Qa=new WeakMap,Ce=Ae.createTreeWalker(Ae,129);function Ui(t,e){if(!fa(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ka!==void 0?Ka.createHTML(e):e}const mr=(t,e)=>{const n=t.length-1,o=[];let a,i=e===2?"<svg>":e===3?"<math>":"",r=sn;for(let c=0;c<n;c++){const h=t[c];let d,u,p=-1,f=0;for(;f<h.length&&(r.lastIndex=f,u=r.exec(h),u!==null);)f=r.lastIndex,r===sn?u[1]==="!--"?r=Xa:u[1]!==void 0?r=Ga:u[2]!==void 0?(Fi.test(u[2])&&(a=RegExp("</"+u[2],"g")),r=we):u[3]!==void 0&&(r=we):r===we?u[0]===">"?(r=a??sn,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?we:u[3]==='"'?Za:Ya):r===Za||r===Ya?r=we:r===Xa||r===Ga?r=sn:(r=we,a=void 0);const m=r===we&&t[c+1].startsWith("/>")?" ":"";i+=r===sn?h+pr:p>=0?(o.push(d),h.slice(0,p)+Ri+h.slice(p)+ce+m):h+ce+(p===-2?c:m)}return[Ui(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class vn{constructor({strings:e,_$litType$:n},o){let a;this.parts=[];let i=0,r=0;const c=e.length-1,h=this.parts,[d,u]=mr(e,n);if(this.el=vn.createElement(d,o),Ce.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=Ce.nextNode())!==null&&h.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith(Ri)){const f=u[r++],m=a.getAttribute(p).split(ce),v=/([.?@])?(.*)/.exec(f);h.push({type:1,index:i,name:v[2],strings:m,ctor:v[1]==="."?gr:v[1]==="?"?vr:v[1]==="@"?wr:po}),a.removeAttribute(p)}else p.startsWith(ce)&&(h.push({type:6,index:i}),a.removeAttribute(p));if(Fi.test(a.tagName)){const p=a.textContent.split(ce),f=p.length-1;if(f>0){a.textContent=Wn?Wn.emptyScript:"";for(let m=0;m<f;m++)a.append(p[m],bn()),Ce.nextNode(),h.push({type:2,index:++i});a.append(p[f],bn())}}}else if(a.nodeType===8)if(a.data===Vi)h.push({type:2,index:i});else{let p=-1;for(;(p=a.data.indexOf(ce,p+1))!==-1;)h.push({type:7,index:i}),p+=ce.length-1}i++}}static createElement(e,n){const o=Ae.createElement("template");return o.innerHTML=e,o}}function We(t,e,n=t,o){if(e===ft)return e;let a=o!==void 0?n._$Co?.[o]:n._$Cl;const i=gn(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(t),a._$AT(t,n,o)),o!==void 0?(n._$Co??=[])[o]=a:n._$Cl=a),a!==void 0&&(e=We(t,a._$AS(t,e.values),a,o)),e}let br=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:o}=this._$AD,a=(e?.creationScope??Ae).importNode(n,!0);Ce.currentNode=a;let i=Ce.nextNode(),r=0,c=0,h=o[0];for(;h!==void 0;){if(r===h.index){let d;h.type===2?d=new uo(i,i.nextSibling,this,e):h.type===1?d=new h.ctor(i,h.name,h.strings,this,e):h.type===6&&(d=new yr(i,this,e)),this._$AV.push(d),h=o[++c]}r!==h?.index&&(i=Ce.nextNode(),r++)}return Ce.currentNode=Ae,a}p(e){let n=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,n),n+=o.strings.length-2):o._$AI(e[n])),n++}},uo=class Ni{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,o,a){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=We(this,e,n),gn(e)?e===q||e==null||e===""?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==ft&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&gn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ae.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=vn.createElement(Ui(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(n);else{const i=new br(a,this),r=i.u(this.options);i.p(n),this.T(r),this._$AH=i}}_$AC(e){let n=Qa.get(e.strings);return n===void 0&&Qa.set(e.strings,n=new vn(e)),n}k(e){fa(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let o,a=0;for(const i of e)a===n.length?n.push(o=new Ni(this.O(bn()),this.O(bn()),this,this.options)):o=n[a],o._$AI(i),a++;a<n.length&&(this._$AR(o&&o._$AB.nextSibling,a),n.length=a)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}};class po{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,o,a,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=n,this._$AM=a,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=q}_$AI(e,n=this,o,a){const i=this.strings;let r=!1;if(i===void 0)e=We(this,e,n,0),r=!gn(e)||e!==this._$AH&&e!==ft,r&&(this._$AH=e);else{const c=e;let h,d;for(e=i[0],h=0;h<i.length-1;h++)d=We(this,c[o+h],n,h),d===ft&&(d=this._$AH[h]),r||=!gn(d)||d!==this._$AH[h],d===q?e=q:e!==q&&(e+=(d??"")+i[h+1]),this._$AH[h]=d}r&&!a&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gr extends po{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class vr extends po{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class wr extends po{constructor(e,n,o,a,i){super(e,n,o,a,i),this.type=5}_$AI(e,n=this){if((e=We(this,e,n,0)??q)===ft)return;const o=this._$AH,a=e===q&&o!==q||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==q&&(o===q||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class yr{constructor(e,n,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}}const xr={I:uo},kr=pa.litHtmlPolyfillSupport;kr?.(vn,uo),(pa.litHtmlVersions??=[]).push("3.3.0");const Cr=(t,e,n)=>{const o=n?.renderBefore??e;let a=o._$litPart$;if(a===void 0){const i=n?.renderBefore??null;o._$litPart$=a=new uo(e.insertBefore(bn(),i),i,void 0,n??{})}return a._$AI(t),a};const ma=globalThis;let pn=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cr(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ft}};pn._$litElement$=!0,pn.finalized=!0,ma.litElementHydrateSupport?.({LitElement:pn});const Er=ma.litElementPolyfillSupport;Er?.({LitElement:pn});(ma.litElementVersions??=[]).push("4.2.0");const Sr=!1;const E=t=>(e,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};const $r={attribute:!0,type:String,converter:Hn,reflect:!1,hasChanged:ua},Ar=(t=$r,e,n)=>{const{kind:o,metadata:a}=n;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(n.name,t),o==="accessor"){const{name:r}=n;return{set(c){const h=e.get.call(this);e.set.call(this,c),this.requestUpdate(r,h,t)},init(c){return c!==void 0&&this.C(r,void 0,t,c),c}}}if(o==="setter"){const{name:r}=n;return function(c){const h=this[r];e.call(this,c),this.requestUpdate(r,h,t)}}throw Error("Unsupported decorator location: "+o)};function l(t){return(e,n)=>typeof n=="object"?Ar(t,e,n):((o,a,i)=>{const r=a.hasOwnProperty(i);return a.constructor.createProperty(i,o),r?Object.getOwnPropertyDescriptor(a,i):void 0})(t,e,n)}function S(t){return l({...t,state:!0,attribute:!1})}function fo(t){return(e,n)=>{const o=typeof e=="function"?e:e[n];Object.assign(o,t)}}const qi=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);function x(t,e){return(n,o,a)=>{const i=r=>r.renderRoot?.querySelector(t)??null;return qi(n,o,{get(){return i(this)}})}}function zr(t){return(e,n)=>qi(e,n,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}function Ja(t,e,n){return t?e(t):n?.(t)}const Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ie=t=>(...e)=>({_$litDirective$:t,values:e});let De=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};const{I:Tr}=xr,zf=t=>t===null||typeof t!="object"&&typeof t!="function",_r=(t,e)=>t?._$litType$!==void 0,Tf=t=>t?._$litType$?.h!=null,Hi=t=>t.strings===void 0,ti=()=>document.createComment(""),rn=(t,e,n)=>{const o=t._$AA.parentNode,a=e===void 0?t._$AB:e._$AA;if(n===void 0){const i=o.insertBefore(ti(),a),r=o.insertBefore(ti(),a);n=new Tr(i,r,t,t.options)}else{const i=n._$AB.nextSibling,r=n._$AM,c=r!==t;if(c){let h;n._$AQ?.(t),n._$AM=t,n._$AP!==void 0&&(h=t._$AU)!==r._$AU&&n._$AP(h)}if(i!==a||c){let h=n._$AA;for(;h!==i;){const d=h.nextSibling;o.insertBefore(h,a),h=d}}}return n},ye=(t,e,n=t)=>(t._$AI(e,n),t),Lr={},ba=(t,e=Lr)=>t._$AH=e,Or=t=>t._$AH,zo=t=>{t._$AP?.(!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const o=e.nextSibling;e.remove(),e=o}},_f=t=>{t._$AR()};const ei=(t,e,n)=>{const o=new Map;for(let a=e;a<=n;a++)o.set(t[a],a);return o},Lf=Ie(class extends De{constructor(t){if(super(t),t.type!==Rt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let o;n===void 0?n=e:e!==void 0&&(o=e);const a=[],i=[];let r=0;for(const c of t)a[r]=o?o(c,r):r,i[r]=n(c,r),r++;return{values:i,keys:a}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,o]){const a=Or(t),{values:i,keys:r}=this.dt(e,n,o);if(!Array.isArray(a))return this.ut=r,i;const c=this.ut??=[],h=[];let d,u,p=0,f=a.length-1,m=0,v=i.length-1;for(;p<=f&&m<=v;)if(a[p]===null)p++;else if(a[f]===null)f--;else if(c[p]===r[m])h[m]=ye(a[p],i[m]),p++,m++;else if(c[f]===r[v])h[v]=ye(a[f],i[v]),f--,v--;else if(c[p]===r[v])h[v]=ye(a[p],i[v]),rn(t,h[v+1],a[p]),p++,v--;else if(c[f]===r[m])h[m]=ye(a[f],i[m]),rn(t,a[p],a[f]),f--,m++;else if(d===void 0&&(d=ei(r,m,v),u=ei(c,p,f)),d.has(c[p]))if(d.has(c[f])){const b=u.get(r[m]),w=b!==void 0?a[b]:null;if(w===null){const y=rn(t,a[p]);ye(y,i[m]),h[m]=y}else h[m]=ye(w,i[m]),rn(t,a[p],w),a[b]=null;m++}else zo(a[f]),f--;else zo(a[p]),p++;for(;m<=v;){const b=rn(t,h[v+1]);ye(b,i[m]),h[m++]=b}for(;p<=f;){const b=a[p++];b!==null&&zo(b)}return this.ut=r,ba(t,h),ft}});const Of=Ie(class extends De{constructor(){super(...arguments),this.key=q}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(ba(t),this.key=e),n}});const L=Ie(class extends De{constructor(t){if(super(t),t.type!==Rt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((o=>o!==""))));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.st)o in e||(n.remove(o),this.st.delete(o));for(const o in e){const a=!!e[o];a===this.st.has(o)||this.nt?.has(o)||(a?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return ft}});const Wi="important",Ir=" !"+Wi,_t=Ie(class extends De{constructor(t){if(super(t),t.type!==Rt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const a=e[o];if(a!=null){this.ft.add(o);const i=typeof a=="string"&&a.endsWith(Ir);o.includes("-")||i?n.setProperty(o,i?a.slice(0,-11):a,i?Wi:""):n[o]=a}}return ft}});const z=t=>t??q;let Ko=class extends De{constructor(e){if(super(e),this.it=q,e.type!==Rt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===q||e==null)return this._t=void 0,this.it=e;if(e===ft)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Ko.directiveName="unsafeHTML",Ko.resultType=1;const Bn=Ie(Ko);const fn=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(e,!1),fn(o,e);return!0},jn=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},ji=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Pr(e)}};function Dr(t){this._$AN!==void 0?(jn(this),this._$AM=t,ji(this)):this._$AM=t}function Mr(t,e=!1,n=0){const o=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(e)if(Array.isArray(o))for(let i=n;i<o.length;i++)fn(o[i],!1),jn(o[i]);else o!=null&&(fn(o,!1),jn(o));else fn(this,t)}const Pr=t=>{t.type==Rt.CHILD&&(t._$AP??=Mr,t._$AQ??=Dr)};class Rr extends De{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),ji(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(fn(this,e),jn(this))}setValue(e){if(Hi(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const je=Ie(class extends De{constructor(t){if(super(t),t.type!==Rt.PROPERTY&&t.type!==Rt.ATTRIBUTE&&t.type!==Rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Hi(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===ft||e===q)return e;const n=t.element,o=t.name;if(t.type===Rt.PROPERTY){if(e===n[o])return ft}else if(t.type===Rt.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(o))return ft}else if(t.type===Rt.ATTRIBUTE&&n.getAttribute(o)===e+"")return ft;return ba(t),e}});const Df=()=>new Vr;class Vr{}const To=new WeakMap,Mf=Ie(class extends Rr{render(t){return q}update(t,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),q}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=To.get(e);n===void 0&&(n=new WeakMap,To.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?To.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var hn={exports:{}},Fr=hn.exports,ni;function Br(){return ni||(ni=1,(function(t,e){(function(n,o){var a={};n.PubSub?(a=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=a,o(a)),t!==void 0&&t.exports&&(e=t.exports=a),e.PubSub=a,t.exports=e=a})(typeof window=="object"&&window||Fr||Js,function(n){var o={},a=-1,i="*";function r(b){var w;for(w in b)if(Object.prototype.hasOwnProperty.call(b,w))return!0;return!1}function c(b){return function(){throw b}}function h(b,w,y){try{b(w,y)}catch(C){setTimeout(c(C),0)}}function d(b,w,y){b(w,y)}function u(b,w,y,C){var $=o[w],_=C?d:h,I;if(Object.prototype.hasOwnProperty.call(o,w))for(I in $)Object.prototype.hasOwnProperty.call($,I)&&_($[I],b,y)}function p(b,w,y){return function(){var $=String(b),_=$.lastIndexOf(".");for(u(b,b,w,y);_!==-1;)$=$.substr(0,_),_=$.lastIndexOf("."),u(b,$,w,y);u(b,i,w,y)}}function f(b){var w=String(b),y=!!(Object.prototype.hasOwnProperty.call(o,w)&&r(o[w]));return y}function m(b){for(var w=String(b),y=f(w)||f(i),C=w.lastIndexOf(".");!y&&C!==-1;)w=w.substr(0,C),C=w.lastIndexOf("."),y=f(w);return y}function v(b,w,y,C){b=typeof b=="symbol"?b.toString():b;var $=p(b,w,C),_=m(b);return _?(y===!0?$():setTimeout($,0),!0):!1}n.publish=function(b,w){return v(b,w,!1,n.immediateExceptions)},n.publishSync=function(b,w){return v(b,w,!0,n.immediateExceptions)},n.subscribe=function(b,w){if(typeof w!="function")return!1;b=typeof b=="symbol"?b.toString():b,Object.prototype.hasOwnProperty.call(o,b)||(o[b]={});var y="uid_"+String(++a);return o[b][y]=w,y},n.subscribeAll=function(b){return n.subscribe(i,b)},n.subscribeOnce=function(b,w){var y=n.subscribe(b,function(){n.unsubscribe(y),w.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){o={}},n.clearSubscriptions=function(w){var y;for(y in o)Object.prototype.hasOwnProperty.call(o,y)&&y.indexOf(w)===0&&delete o[y]},n.countSubscriptions=function(w){var y,C,$=0;for(y in o)if(Object.prototype.hasOwnProperty.call(o,y)&&y.indexOf(w)===0){for(C in o[y])$++;break}return $},n.getSubscriptions=function(w){var y,C=[];for(y in o)Object.prototype.hasOwnProperty.call(o,y)&&y.indexOf(w)===0&&C.push(y);return C},n.unsubscribe=function(b){var w=function(ut){var it;for(it in o)if(Object.prototype.hasOwnProperty.call(o,it)&&it.indexOf(ut)===0)return!0;return!1},y=typeof b=="string"&&(Object.prototype.hasOwnProperty.call(o,b)||w(b)),C=!y&&typeof b=="string",$=typeof b=="function",_=!1,I,N,H;if(y){n.clearSubscriptions(b);return}for(I in o)if(Object.prototype.hasOwnProperty.call(o,I)){if(N=o[I],C&&N[b]){delete N[b],_=b;break}if($)for(H in N)Object.prototype.hasOwnProperty.call(N,H)&&N[H]===b&&(delete N[H],_=!0)}return _}})})(hn,hn.exports)),hn.exports}var Ki=Br();const Xo=tr(Ki),Pf=Qs({__proto__:null,default:Xo},[Ki]),Go=new Set,Ue=new Map;let ke,ga="ltr",va="en";const Xi=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Xi){const t=new MutationObserver(Yi);ga=document.documentElement.dir||"ltr",va=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Gi(...t){t.map(e=>{const n=e.$code.toLowerCase();Ue.has(n)?Ue.set(n,Object.assign(Object.assign({},Ue.get(n)),e)):Ue.set(n,e),ke||(ke=e)}),Yi()}function Yi(){Xi&&(ga=document.documentElement.dir||"ltr",va=document.documentElement.lang||navigator.language),[...Go.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Ur=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Go.add(this.host)}hostDisconnected(){Go.delete(this.host)}dir(){return`${this.host.dir||ga}`.toLowerCase()}lang(){return`${this.host.lang||va}`.toLowerCase()}getTranslationData(e){var n,o;const a=new Intl.Locale(e.replace(/_/g,"-")),i=a?.language.toLowerCase(),r=(o=(n=a?.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&o!==void 0?o:"",c=Ue.get(`${i}-${r}`),h=Ue.get(i);return{locale:a,language:i,region:r,primary:c,secondary:h}}exists(e,n){var o;const{primary:a,secondary:i}=this.getTranslationData((o=n.lang)!==null&&o!==void 0?o:this.lang());return n=Object.assign({includeFallback:!1},n),!!(a&&a[e]||i&&i[e]||n.includeFallback&&ke&&ke[e])}term(e,...n){const{primary:o,secondary:a}=this.getTranslationData(this.lang());let i;if(o&&o[e])i=o[e];else if(a&&a[e])i=a[e];else if(ke&&ke[e])i=ke[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i=="function"?i(...n):i}date(e,n){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),n).format(e)}number(e,n){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),n).format(e)}relativeTime(e,n,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,n)}};var Zi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};Gi(Zi);var Nr=Zi;var V=class extends Ur{};Gi(Nr);var wa=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Yo="",Zo="";function oi(t){Yo=t}function qr(t=""){if(!Yo){const e=document.querySelector("[data-webawesome]");if(e?.hasAttribute("data-webawesome")){const n=new URL(e.getAttribute("data-webawesome")??"",window.location.href).pathname;oi(n)}else{const o=[...document.getElementsByTagName("script")].find(a=>a.src.endsWith("webawesome.js")||a.src.endsWith("webawesome.loader.js")||a.src.endsWith("webawesome.ssr-loader.js"));if(o){const a=String(o.getAttribute("src"));oi(a.split("/").slice(0,-1).join("/"))}}}return Yo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}function Hr(t){Zo=t}function Wr(){if(!Zo){const t=document.querySelector("[data-fa-kit-code]");t&&Hr(t.getAttribute("data-fa-kit-code")||"")}return Zo}var te="7.0.1";function jr(t,e,n){const o=Wr(),a=o.length>0;let i="solid";return e==="notdog"?(n==="solid"&&(i="solid"),n==="duo-solid"&&(i="duo-solid"),`https://ka-p.fontawesome.com/releases/v${te}/svgs/notdog-${i}/${t}.svg?token=${encodeURIComponent(o)}`):e==="chisel"?`https://ka-p.fontawesome.com/releases/v${te}/svgs/chisel-regular/${t}.svg?token=${encodeURIComponent(o)}`:e==="etch"?`https://ka-p.fontawesome.com/releases/v${te}/svgs/etch-solid/${t}.svg?token=${encodeURIComponent(o)}`:e==="jelly"?(n==="regular"&&(i="regular"),n==="duo-regular"&&(i="duo-regular"),n==="fill-regular"&&(i="fill-regular"),`https://ka-p.fontawesome.com/releases/v${te}/svgs/jelly-${i}/${t}.svg?token=${encodeURIComponent(o)}`):e==="slab"?((n==="solid"||n==="regular")&&(i="regular"),n==="press-regular"&&(i="press-regular"),`https://ka-p.fontawesome.com/releases/v${te}/svgs/slab-${i}/${t}.svg?token=${encodeURIComponent(o)}`):e==="thumbprint"?`https://ka-p.fontawesome.com/releases/v${te}/svgs/thumbprint-light/${t}.svg?token=${encodeURIComponent(o)}`:e==="whiteboard"?`https://ka-p.fontawesome.com/releases/v${te}/svgs/whiteboard-semibold/${t}.svg?token=${encodeURIComponent(o)}`:(e==="classic"&&(n==="thin"&&(i="thin"),n==="light"&&(i="light"),n==="regular"&&(i="regular"),n==="solid"&&(i="solid")),e==="sharp"&&(n==="thin"&&(i="sharp-thin"),n==="light"&&(i="sharp-light"),n==="regular"&&(i="sharp-regular"),n==="solid"&&(i="sharp-solid")),e==="duotone"&&(n==="thin"&&(i="duotone-thin"),n==="light"&&(i="duotone-light"),n==="regular"&&(i="duotone-regular"),n==="solid"&&(i="duotone")),e==="sharp-duotone"&&(n==="thin"&&(i="sharp-duotone-thin"),n==="light"&&(i="sharp-duotone-light"),n==="regular"&&(i="sharp-duotone-regular"),n==="solid"&&(i="sharp-duotone-solid")),e==="brands"&&(i="brands"),a?`https://ka-p.fontawesome.com/releases/v${te}/svgs/${i}/${t}.svg?token=${encodeURIComponent(o)}`:`https://ka-f.fontawesome.com/releases/v${te}/svgs/${i}/${t}.svg`)}var Kr={name:"default",resolver:(t,e="classic",n="solid")=>jr(t,e,n),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){const{family:n,variant:o}=e;if(n==="duotone"||n==="sharp-duotone"||n==="notdog"&&o==="duo-solid"||n==="jelly"&&o==="duo-regular"||n==="thumbprint"){const a=[...t.querySelectorAll("path")],i=a.find(c=>!c.hasAttribute("opacity")),r=a.find(c=>c.hasAttribute("opacity"));if(!i||!r)return;if(i.setAttribute("data-duotone-primary",""),r.setAttribute("data-duotone-secondary",""),e.swapOpacity&&i&&r){const c=r.getAttribute("opacity")||"0.4";i.style.setProperty("--path-opacity",c),r.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},Xr=Kr;function Gr(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var _o={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},Yr={name:"system",resolver:(t,e="classic",n="solid")=>{let a=_o[n][t]??_o.regular[t]??_o.regular["circle-question"];return a?Gr(a):""}},Zr=Yr;var Qr="classic",Kn=[Xr,Zr],Xn=[];function Jr(t){Xn.push(t)}function tl(t){Xn=Xn.filter(e=>e!==t)}function Lo(t){return Kn.find(e=>e.name===t)}function el(t,e){nl(t),Kn.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Xn.forEach(n=>{n.library===t&&n.setIcon()})}function nl(t){Kn=Kn.filter(e=>e.name!==t)}function ol(){return Qr}function k(t,e){const n={waitUntilFirstUpdate:!1,...e};return(o,a)=>{const{update:i}=o,r=Array.isArray(t)?t:[t];o.update=function(c){r.forEach(h=>{const d=h;if(c.has(d)){const u=c.get(d),p=this[d];u!==p&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[a](u,p)}}),i.call(this,c)}}}var al=Object.defineProperty,il=Object.getOwnPropertyDescriptor,Qi=t=>{throw TypeError(t)},s=(t,e,n,o)=>{for(var a=o>1?void 0:o?il(e,n):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(a=(o?r(e,n,a):r(a))||a);return o&&a&&al(e,n,a),a},Ji=(t,e,n)=>e.has(t)||Qi("Cannot "+n),sl=(t,e,n)=>(Ji(t,e,"read from private field"),e.get(t)),rl=(t,e,n)=>e.has(t)?Qi("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ll=(t,e,n,o)=>(Ji(t,e,"write to private field"),e.set(t,n),n);var cl=`:host {
  box-sizing: border-box !important;
}

:host *,
:host *::before,
:host *::after {
  box-sizing: inherit !important;
}

[hidden] {
  display: none !important;
}
`,Un,A=class extends pn{constructor(){super(),rl(this,Un,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,n)=>{if(this.internals?.states)try{n?this.internals.states.add(e):this.internals.states.delete(e)}catch(o){if(String(o).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw o}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,n]of t.elementProperties)n.default==="inherit"&&n.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${n.initial}`,!0)}static get styles(){const t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[cl,...t].map(e=>typeof e=="string"?Pi(e):e)}attributeChangedCallback(t,e,n){sl(this,Un)||(this.constructor.elementProperties.forEach((o,a)=>{o.reflect&&this[a]!=null&&this.initialReflectedProperties.set(a,this[a])}),ll(this,Un,!0)),super.attributeChangedCallback(t,e,n)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,n)=>{t.has(n)&&this[n]==null&&(this[n]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){const n=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});n.error=e,this.dispatchEvent(n)}throw e}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};Un=new WeakMap;s([l()],A.prototype,"dir",2);s([l()],A.prototype,"lang",2);s([l({type:Boolean,reflect:!0,attribute:"did-ssr"})],A.prototype,"didSSR",2);var qe=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},hl=`:host {
  --primary-color: currentColor;
  --primary-opacity: 1;
  --secondary-color: currentColor;
  --secondary-opacity: 0.4;

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
  fill: currentColor;
  overflow: visible;

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
`,ln=Symbol(),Tn=Symbol(),Oo,Io=new Map,bt=class extends A{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(t,e)=>{let n;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=g`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(o,this),this.svg}try{if(n=await fetch(t,{mode:"cors"}),!n.ok)return n.status===410?ln:Tn}catch{return Tn}try{const o=document.createElement("div");o.innerHTML=await n.text();const a=o.firstElementChild;if(a?.tagName?.toLowerCase()!=="svg")return ln;Oo||(Oo=new DOMParser);const r=Oo.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):ln}catch{return ln}}}connectedCallback(){super.connectedCallback(),Jr(this)}firstUpdated(t){super.firstUpdated(t),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),tl(this)}getIconSource(){const t=Lo(this.library),e=this.family||ol();return this.name&&t?{url:t.resolver(this.name,e,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:e}=this.getIconSource(),n=e?Lo(this.library):void 0;if(!t){this.svg=null;return}let o=Io.get(t);o||(o=this.resolveIcon(t,n),Io.set(t,o));const a=await o;if(a===Tn&&Io.delete(t),t===this.getIconSource().url){if(_r(a)){this.svg=a;return}switch(a){case Tn:case ln:this.svg=null,this.dispatchEvent(new qe);break;default:this.svg=a.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new wa)}}}updated(t){super.updated(t);const e=Lo(this.library),n=this.shadowRoot?.querySelector("svg");n&&e?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:g`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};bt.css=hl;s([S()],bt.prototype,"svg",2);s([l({reflect:!0})],bt.prototype,"name",2);s([l({reflect:!0})],bt.prototype,"family",2);s([l({reflect:!0})],bt.prototype,"variant",2);s([l({attribute:"auto-width",type:Boolean,reflect:!0})],bt.prototype,"autoWidth",2);s([l({attribute:"swap-opacity",type:Boolean,reflect:!0})],bt.prototype,"swapOpacity",2);s([l()],bt.prototype,"src",2);s([l()],bt.prototype,"label",2);s([l({reflect:!0})],bt.prototype,"library",2);s([k("label")],bt.prototype,"handleLabelChange",1);s([k(["family","name","library","variant","src","autoWidth","swapOpacity"])],bt.prototype,"setIcon",1);bt=s([E("wa-icon")],bt);var dl=`:host {
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
`,Vt=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.play=!this.play)}handleLoad(){const t=document.createElement("canvas"),{width:e,height:n}=this.animatedImage;t.width=e,t.height=n,t.getContext("2d").drawImage(this.animatedImage,0,0,e,n),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new wa),this.isLoaded=!0)}handleError(){this.dispatchEvent(new qe)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const e=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return g`
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

        ${this.isLoaded?g`
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
                    style="margin-inline-start: 3px;"
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};Vt.css=dl;s([x(".animated")],Vt.prototype,"animatedImage",2);s([S()],Vt.prototype,"frozenFrame",2);s([S()],Vt.prototype,"isLoaded",2);s([l()],Vt.prototype,"src",2);s([l()],Vt.prototype,"alt",2);s([l({type:Boolean,reflect:!0})],Vt.prototype,"play",2);s([k("play",{waitUntilFirstUpdate:!0})],Vt.prototype,"handlePlayChange",1);s([k("src")],Vt.prototype,"handleSrcChange",1);Vt=s([E("wa-animated-image")],Vt);const ul=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],pl=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],fl=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],ml=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],bl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],gl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],vl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],wl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],yl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],kl=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Cl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],El=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sl=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],$l=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Al=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],zl=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Tl=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],_l=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Ll=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Ol=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Il=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Dl=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ml=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Pl=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Rl=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Vl=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Fl=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Bl=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Ul=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Nl=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],ql=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Hl=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wl=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jl=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kl=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xl=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gl=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yl=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zl=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ql=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jl=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],tc=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ec=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nc=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],oc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],ac=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],ic=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],sc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],rc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],lc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],cc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],hc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],dc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],uc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],pc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],fc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],mc=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],bc=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],gc=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],vc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],wc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],yc=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xc=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],kc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Cc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Ec=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Sc=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],$c=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ac=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zc=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Tc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],_c=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Lc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Oc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Ic=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Dc=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Mc=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pc=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rc=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Fc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Bc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Uc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Nc=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],qc=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Hc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],jc=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Kc=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Xc=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Gc=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Yc=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Zc=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Qc=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Jc=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],th=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],eh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ts={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},nh=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Sl,backInLeft:$l,backInRight:Al,backInUp:zl,backOutDown:Tl,backOutLeft:_l,backOutRight:Ll,backOutUp:Ol,bounce:ul,bounceIn:Il,bounceInDown:Dl,bounceInLeft:Ml,bounceInRight:Pl,bounceInUp:Rl,bounceOut:Vl,bounceOutDown:Fl,bounceOutLeft:Bl,bounceOutRight:Ul,bounceOutUp:Nl,easings:ts,fadeIn:ql,fadeInBottomLeft:Hl,fadeInBottomRight:Wl,fadeInDown:jl,fadeInDownBig:Kl,fadeInLeft:Xl,fadeInLeftBig:Gl,fadeInRight:Yl,fadeInRightBig:Zl,fadeInTopLeft:Ql,fadeInTopRight:Jl,fadeInUp:tc,fadeInUpBig:ec,fadeOut:nc,fadeOutBottomLeft:oc,fadeOutBottomRight:ac,fadeOutDown:ic,fadeOutDownBig:sc,fadeOutLeft:rc,fadeOutLeftBig:lc,fadeOutRight:cc,fadeOutRightBig:hc,fadeOutTopLeft:dc,fadeOutTopRight:uc,fadeOutUp:pc,fadeOutUpBig:fc,flash:pl,flip:mc,flipInX:bc,flipInY:gc,flipOutX:vc,flipOutY:wc,headShake:fl,heartBeat:ml,hinge:Nc,jackInTheBox:qc,jello:bl,lightSpeedInLeft:yc,lightSpeedInRight:xc,lightSpeedOutLeft:kc,lightSpeedOutRight:Cc,pulse:gl,rollIn:Hc,rollOut:Wc,rotateIn:Ec,rotateInDownLeft:Sc,rotateInDownRight:$c,rotateInUpLeft:Ac,rotateInUpRight:zc,rotateOut:Tc,rotateOutDownLeft:_c,rotateOutDownRight:Lc,rotateOutUpLeft:Oc,rotateOutUpRight:Ic,rubberBand:vl,shake:wl,shakeX:yl,shakeY:xl,slideInDown:Dc,slideInLeft:Mc,slideInRight:Pc,slideInUp:Rc,slideOutDown:Vc,slideOutLeft:Fc,slideOutRight:Bc,slideOutUp:Uc,swing:kl,tada:Cl,wobble:El,zoomIn:jc,zoomInDown:Kc,zoomInLeft:Xc,zoomInRight:Gc,zoomInUp:Yc,zoomOut:Zc,zoomOutDown:Qc,zoomOutLeft:Jc,zoomOutRight:th,zoomOutUp:eh},Symbol.toStringTag,{value:"Module"}));var oh=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}},ah=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}},ai=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}},ih=`:host {
  display: contents;
}
`,Y=class extends A{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new ah)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new oh)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const t=ts[this.easing]??this.easing,e=this.keyframes??nh[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!e?!1:(this.destroyAnimation(),this.animation=o.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new ai)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new ai)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return g` <slot @slotchange=${this.handleSlotChange}></slot> `}};Y.css=ih;s([zr("slot")],Y.prototype,"defaultSlot",2);s([l()],Y.prototype,"name",2);s([l({type:Boolean,reflect:!0})],Y.prototype,"play",2);s([l({type:Number})],Y.prototype,"delay",2);s([l()],Y.prototype,"direction",2);s([l({type:Number})],Y.prototype,"duration",2);s([l()],Y.prototype,"easing",2);s([l({attribute:"end-delay",type:Number})],Y.prototype,"endDelay",2);s([l()],Y.prototype,"fill",2);s([l({type:Number})],Y.prototype,"iterations",2);s([l({attribute:"iteration-start",type:Number})],Y.prototype,"iterationStart",2);s([l({attribute:!1})],Y.prototype,"keyframes",2);s([l({attribute:"playback-rate",type:Number})],Y.prototype,"playbackRate",2);s([k(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Y.prototype,"handleAnimationChange",1);s([k("play")],Y.prototype,"handlePlayChange",1);s([k("playbackRate")],Y.prototype,"handlePlaybackRateChange",1);Y=s([E("wa-animation")],Y);var sh=`:host {
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
`,jt=class extends A{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new qe)}render(){const t=g`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let e=g``;return this.initials?e=g`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:e=g`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,g` ${this.image&&!this.hasError?t:e} `}};jt.css=sh;s([S()],jt.prototype,"hasError",2);s([l()],jt.prototype,"image",2);s([l()],jt.prototype,"label",2);s([l()],jt.prototype,"initials",2);s([l()],jt.prototype,"loading",2);s([l({reflect:!0})],jt.prototype,"shape",2);s([k("image")],jt.prototype,"handleImageChange",1);jt=s([E("wa-avatar")],jt);var kn=`@layer wa-utilities {
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
}
`;var rh=`:host {
  --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375em 0.625em;
  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
  font-size: max(var(--wa-font-size-2xs), 0.75em);
  font-weight: var(--wa-font-weight-semibold);
  line-height: 1;
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

::slotted(wa-icon) {
  margin-inline-end: var(--wa-space-2xs, 0.25em);
  opacity: 90%;
  line-height: 1;
  height: 0.85em;
}
`,ze=class extends A{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return g` <slot part="base" role="status"></slot>`}};ze.css=[kn,rh];s([l({reflect:!0})],ze.prototype,"variant",2);s([l({reflect:!0})],ze.prototype,"appearance",2);s([l({type:Boolean,reflect:!0})],ze.prototype,"pill",2);s([l({reflect:!0})],ze.prototype,"attention",2);ze=s([E("wa-badge")],ze);var lh=`.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
`,Ke=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="wa-breadcrumb-item");t.forEach((e,n)=>{const o=e.querySelector('[slot="separator"]');o===null?e.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),n===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),g`
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
    `}};Ke.css=lh;s([x("slot")],Ke.prototype,"defaultSlot",2);s([x('slot[name="separator"]')],Ke.prototype,"separatorSlot",2);s([l()],Ke.prototype,"label",2);Ke=s([E("wa-breadcrumb")],Ke);var mo=()=>({checkValidity(t){const e=t.input,n={message:"",isValid:!0,invalidKeys:[]};if(!e)return n;let o=!0;if("checkValidity"in e&&(o=e.checkValidity()),o)return n;if(n.isValid=!1,"validationMessage"in e&&(n.message=e.validationMessage),!("validity"in e))return n.invalidKeys.push("customError"),n;for(const a in e.validity){if(a==="valid")continue;const i=a;e.validity[i]&&n.invalidKeys.push(i)}return n}});var ya=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},ch=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),K=class extends A{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new ya))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[ch()]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const n of e.observedAttributes)t.add(n);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")){const e=this.value;if(Array.isArray(e)){if(this.name){const n=new FormData;for(const o of e)n.append(this.name,o);this.setValue(n,n)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){const e=t[0],n=t[1];let o=t[2];o||(o=this.validationTarget),this.internals.setValidity(e,n,o||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&n),this.customStates.set("user-valid",e&&n)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){const[e,n]=t;this.internals.setFormValue(e,n)}get allValidators(){const t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},n=this.validationTarget||this.input||void 0;let o="";for(const a of t){const{isValid:i,message:r,invalidKeys:c}=a.checkValidity(this);i||(o||(o=r),c?.length>=0&&c.forEach(h=>e[h]=!0))}o||(o=this.validationMessage),this.setValidity(e,o,n)}};K.formAssociated=!0;s([l({reflect:!0})],K.prototype,"name",2);s([l({type:Boolean})],K.prototype,"disabled",2);s([l({state:!0,attribute:!1})],K.prototype,"valueHasChanged",2);s([l({state:!0,attribute:!1})],K.prototype,"hasInteracted",2);s([l({attribute:"custom-error",reflect:!0})],K.prototype,"customError",2);s([l({attribute:!1,state:!0,type:Object})],K.prototype,"validity",1);var At=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=n=>{const o=n.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var dt=`@layer wa-utilities {
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
}
`;const es=Symbol.for(""),hh=t=>{if(t?.r===es)return t?._$litStatic$},ii=(t,...e)=>({_$litStatic$:e.reduce(((n,o,a)=>n+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[a+1]),t[0]),r:es}),si=new Map,dh=t=>(e,...n)=>{const o=n.length;let a,i;const r=[],c=[];let h,d=0,u=!1;for(;d<o;){for(h=e[d];d<o&&(i=n[d],(a=hh(i))!==void 0);)h+=a+e[++d],u=!0;d!==o&&c.push(i),r.push(h),d++}if(d===o&&r.push(e[o]),u){const p=r.join("$$lit$$");(e=si.get(p))===void 0&&(r.raw=r,si.set(p,e=r)),n=c}return t(e,...n)},Do=dh(g);var uh=`@layer wa-component {
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
  transition-property: background, border, box-shadow, color;
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
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* When disabled, prevent mouse events from bubbling up from children */
.button.disabled * {
  pointer-events: none;
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
`,B=class extends K{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new At(this,"[default]","start","end"),this.localize=new V(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,mo()]}constructLightDOMButton(){const t=document.createElement("button");return t.type=this.type,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",this.name&&(t.name=this.name),t.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{this.hasAttribute(e)&&t.setAttribute(e,this.getAttribute(e))}),t}handleClick(){if(!this.getForm())return;const e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new ya)}handleLabelSlotChange(){const t=this.labelSlot.assignedNodes({flatten:!0});let e=!1,n=!1,o=!1,a=!1;[...t].forEach(i=>{if(i.nodeType===Node.ELEMENT_NODE){const r=i;r.localName==="wa-icon"?(n=!0,e||(e=r.label!==void 0)):a=!0}else i.nodeType===Node.TEXT_NODE&&(i.textContent?.trim()||"").length>0&&(o=!0)}),this.isIconButton=n&&!o&&!a,this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=this.isLink(),e=t?ii`a`:ii`button`;return Do`
      <${e}
        part="base"
        class=${L({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${z(t?void 0:this.disabled)}
        type=${z(t?void 0:this.type)}
        title=${this.title}
        name=${z(t?void 0:this.name)}
        value=${z(t?void 0:this.value)}
        href=${z(t?this.href:void 0)}
        target=${z(t?this.target:void 0)}
        download=${z(t?this.download:void 0)}
        rel=${z(t&&this.rel?this.rel:void 0)}
        role=${z(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Do`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Do`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};B.shadowRootOptions={...K.shadowRootOptions,delegatesFocus:!0};B.css=[uh,kn,dt];s([x(".button")],B.prototype,"button",2);s([x("slot:not([name])")],B.prototype,"labelSlot",2);s([S()],B.prototype,"invalid",2);s([S()],B.prototype,"isIconButton",2);s([l()],B.prototype,"title",2);s([l({reflect:!0})],B.prototype,"variant",2);s([l({reflect:!0})],B.prototype,"appearance",2);s([l({reflect:!0})],B.prototype,"size",2);s([l({attribute:"with-caret",type:Boolean,reflect:!0})],B.prototype,"withCaret",2);s([l({type:Boolean})],B.prototype,"disabled",2);s([l({type:Boolean,reflect:!0})],B.prototype,"loading",2);s([l({type:Boolean,reflect:!0})],B.prototype,"pill",2);s([l()],B.prototype,"type",2);s([l({reflect:!0})],B.prototype,"name",2);s([l({reflect:!0})],B.prototype,"value",2);s([l({reflect:!0})],B.prototype,"href",2);s([l()],B.prototype,"target",2);s([l()],B.prototype,"rel",2);s([l()],B.prototype,"download",2);s([l({reflect:!0})],B.prototype,"form",2);s([l({attribute:"formaction"})],B.prototype,"formAction",2);s([l({attribute:"formenctype"})],B.prototype,"formEnctype",2);s([l({attribute:"formmethod"})],B.prototype,"formMethod",2);s([l({attribute:"formnovalidate",type:Boolean})],B.prototype,"formNoValidate",2);s([l({attribute:"formtarget"})],B.prototype,"formTarget",2);s([k("disabled",{waitUntilFirstUpdate:!0})],B.prototype,"handleDisabledChange",1);B=s([E("wa-button")],B);var ph=`:host {
  --track-width: 2px;
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-color: var(--wa-color-brand-fill-loud);
  --speed: 2s;

  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.
   Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can grow/shrink and
   break the animation. The use of \`flex: none\` on the host element prevents this by always having the spinner sized
   according to its actual dimensions.
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
`,Qo=class extends A{constructor(){super(...arguments),this.localize=new V(this)}render(){return g`
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
    `}};Qo.css=ph;Qo=s([E("wa-spinner")],Qo);var fh=`:host {
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
`,oe=class extends A{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal",this.variant="neutral"}updated(t){super.updated(t),t.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(t){cn(t.target)?.classList.add("button-focus")}handleBlur(t){cn(t.target)?.classList.remove("button-focus")}handleMouseOver(t){cn(t.target)?.classList.add("button-hover")}handleMouseOut(t){cn(t.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,t.forEach(e=>{const n=t.indexOf(e),o=cn(e);o&&(o.appearance==="outlined"&&(this.hasOutlined=!0),o.classList.add("wa-button-group__button"),o.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),o.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),o.classList.toggle("wa-button-group__button-first",n===0),o.classList.toggle("wa-button-group__button-inner",n>0&&n<t.length-1),o.classList.toggle("wa-button-group__button-last",n===t.length-1),o.classList.toggle("wa-button-group__button-radio",o.tagName.toLowerCase()==="wa-radio-button"))})}render(){return g`
      <slot
        part="base"
        class=${L({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};oe.css=[kn,fh];s([x("slot")],oe.prototype,"defaultSlot",2);s([S()],oe.prototype,"disableRole",2);s([S()],oe.prototype,"hasOutlined",2);s([l()],oe.prototype,"label",2);s([l({reflect:!0})],oe.prototype,"orientation",2);s([l({reflect:!0})],oe.prototype,"variant",2);oe=s([E("wa-button-group")],oe);function cn(t){const e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var mh=`:host {
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
`,Xe=class extends A{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return g`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};Xe.css=[mh,kn,dt];s([l({reflect:!0})],Xe.prototype,"variant",2);s([l({reflect:!0})],Xe.prototype,"appearance",2);s([l({reflect:!0})],Xe.prototype,"size",2);Xe=s([E("wa-callout")],Xe);var bh=`:host {
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
:host([appearance~='plain']) {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

:host([appearance~='outlined']) {
  background-color: var(--wa-color-surface-default);
  border-color: var(--wa-color-surface-border);
}

:host([appearance~='filled']) {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: transparent;
}

:host([appearance~='filled'][appearance~='outlined']) {
  border-color: var(--wa-color-neutral-border-quiet);
}

:host([appearance~='accent']) {
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
`,de=class extends A{constructor(){super(...arguments),this.hasSlotController=new At(this,"footer","header","media"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?g`
        <slot name="media" part="media" class="media"></slot>
        <slot part="body" class="body"></slot>
        <slot name="actions" part="actions" class="actions"></slot>
      `:g`
      <slot name="media" part="media" class="media"></slot>

      ${this.hasSlotController.test("header-actions")?g` <header part="header" class="header has-actions">
            <slot name="header"></slot>
            <slot name="header-actions"></slot>
          </header>`:g` <header part="header" class="header">
            <slot name="header"></slot>
          </header>`}

      <slot part="body" class="body"></slot>
      ${this.hasSlotController.test("footer-actions")?g` <footer part="footer" class="footer has-actions">
            <slot name="footer"></slot>
            <slot name="footer-actions"></slot>
          </footer>`:g` <footer part="footer" class="footer">
            <slot name="footer"></slot>
          </footer>`}
    `}};de.css=[dt,bh];s([l({reflect:!0})],de.prototype,"appearance",2);s([l({attribute:"with-header",type:Boolean,reflect:!0})],de.prototype,"withHeader",2);s([l({attribute:"with-media",type:Boolean,reflect:!0})],de.prototype,"withMedia",2);s([l({attribute:"with-footer",type:Boolean,reflect:!0})],de.prototype,"withFooter",2);s([l({reflect:!0})],de.prototype,"orientation",2);de=s([E("wa-card")],de);const gh="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let vh=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=gh[n[t]&63];return e};function D(t,e,n){const o=a=>Object.is(a,-0)?0:a;return t<e?o(e):t>n?o(n):o(t)}function bo(t=""){return`${t}${vh()}`}function Ft(t,e){return new Promise(n=>{function o(a){a.target===t&&(t.removeEventListener(e,o),n())}t.addEventListener(e,o)})}async function Gn(t,e,n){return t.animate(e,n).finished.catch(()=>{})}function W(t,e){return new Promise(n=>{const o=new AbortController,{signal:a}=o;if(t.classList.contains(e))return;t.classList.remove(e),t.classList.add(e);let i=()=>{t.classList.remove(e),n(),o.abort()};t.addEventListener("animationend",i,{once:!0,signal:a}),t.addEventListener("animationcancel",i,{once:!0,signal:a})})}function Yn(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?(parseFloat(t)||0)*1e3:parseFloat(t)||0}function ri(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}var wh=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};function*yh(t,e){if(t!==void 0){let n=0;for(const o of t)yield e(o,n++)}}function*xh(t,e,n=1){const o=e===void 0?0:t;e??=t;for(let a=o;n>0?a<e:e<a;a+=n)yield a}(()=>{const t=(o,a)=>{let i=0;return function(...r){window.clearTimeout(i),i=window.setTimeout(()=>{o.call(this,...r)},a)}},e=(o,a,i)=>{const r=o[a];o[a]=function(...c){r.call(this,...c),i.call(this,r,...c)}};if(!("onscrollend"in window)){const o=new Set,a=new WeakMap,i=c=>{o.add(c.pointerId)},r=c=>{o.delete(c.pointerId)};document.addEventListener("pointerdown",i),document.addEventListener("pointerup",r),e(EventTarget.prototype,"addEventListener",function(c,h){if(h!=="scroll")return;const d=t(()=>{o.size?d():this.dispatchEvent(new Event("scrollend"))},100);c.call(this,"scroll",d,{passive:!0}),a.set(this,d)}),e(EventTarget.prototype,"removeEventListener",function(c,h){if(h!=="scroll")return;const d=a.get(this);d&&c.call(this,"scroll",d,{passive:!0})})}})();var kh=class extends Event{constructor(t){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Ch=`:host {
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
`,j=class extends A{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new wh(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new V(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,n=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const o=t.scrollLeft,a=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:n,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==o||n!==a)&&(t.scrollTo({left:o,top:a,behavior:ri()?"auto":"smooth"}),await Ft(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(n=>[...n.addedNodes,...n.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:n,loop:o}=this,a=o?t/n:(t-e)/n+1;return Math.ceil(a)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),n=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+n*n)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,n=this.localize.dir()==="rtl",o=e.closest('[part~="pagination-item"]')!==null,a=t.key==="ArrowDown"||!n&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft",i=t.key==="ArrowUp"||!n&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight";t.preventDefault(),i&&this.previous(),a&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{const r=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');r&&r.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const c of e){const h=c.target;h.toggleAttribute("inert",!c.isIntersecting),h.classList.toggle("--in-view",c.isIntersecting),h.setAttribute("aria-hidden",c.isIntersecting?"false":"true")}const n=e.find(c=>c.isIntersecting);if(!n)return;const o=this.getSlides({excludeClones:!1}),a=this.getSlides().length,i=o.indexOf(n.target),r=this.loop?i-this.slidesPerPage:i;if(n&&(this.activeSlide=(Math.ceil(r/this.slidesPerMove)*this.slidesPerMove+a)%a,!this.scrolling&&this.loop&&n.target.hasAttribute("data-clone"))){const c=Number(n.target.getAttribute("data-clone"));this.goToSlide(c,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,n=t.slice(-e),o=t.slice(0,e);n.reverse().forEach((a,i)=>{const r=a.cloneNode(!0);r.setAttribute("data-clone",String(t.length-i-1)),this.prepend(r)}),o.forEach((a,i)=>{const r=a.cloneNode(!0);r.setAttribute("data-clone",String(i)),this.append(r)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,n)=>{e.classList.toggle("--is-active",n===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new kh({index:this.activeSlide,slide:t[this.activeSlide]}))}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((n,o)=>{(o+e)%e===0?n.style.removeProperty("scroll-snap-align"):n.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:n,loop:o}=this,a=this.getSlides(),i=this.getSlides({excludeClones:!1});if(!a.length)return;const r=o?(t+a.length)%a.length:D(t,0,a.length-n);this.activeSlide=r;const c=this.localize.dir()==="rtl",h=D(t+(o?n:0)+(c?n-1:0),0,i.length-1),d=i[h];this.scrollToSlide(d,ri()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const n=this.scrollContainer,o=n.getBoundingClientRect(),a=t.getBoundingClientRect(),i=a.left-o.left,r=a.top-o.top;i||r?(this.pendingSlideChange=!0,n.scrollTo({left:i+n.scrollLeft,top:r+n.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this;let n=0,o=0,a=!1,i=!1;this.hasUpdated&&(n=this.getPageCount(),o=this.getCurrentPage(),a=this.canScrollPrev(),i=this.canScrollNext());const r=this.localize.dir()==="rtl";return g`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${L({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
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

        ${this.navigation?g`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${L({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!a})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?"false":"true"}"
                  @click=${a?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${r?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${L({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!i})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${r?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?g`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${yh(xh(n),c=>{const h=c===o;return g`
                    <button
                      part="pagination-item ${h?"pagination-item-active":""}"
                      class="${L({"pagination-item":!0,"pagination-item-active":h})}"
                      role="tab"
                      aria-selected="${h?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",c+1,n)}"
                      tabindex=${h?"0":"-1"}
                      @click=${()=>this.goToSlide(c*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:g``}
      </div>
    `}};j.css=Ch;s([l({type:Boolean,reflect:!0})],j.prototype,"loop",2);s([l({type:Number,reflect:!0})],j.prototype,"slides",2);s([l({type:Number,reflect:!0})],j.prototype,"currentSlide",2);s([l({type:Boolean,reflect:!0})],j.prototype,"navigation",2);s([l({type:Boolean,reflect:!0})],j.prototype,"pagination",2);s([l({type:Boolean,reflect:!0})],j.prototype,"autoplay",2);s([l({type:Number,attribute:"autoplay-interval"})],j.prototype,"autoplayInterval",2);s([l({type:Number,attribute:"slides-per-page"})],j.prototype,"slidesPerPage",2);s([l({type:Number,attribute:"slides-per-move"})],j.prototype,"slidesPerMove",2);s([l()],j.prototype,"orientation",2);s([l({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],j.prototype,"mouseDragging",2);s([x(".slides")],j.prototype,"scrollContainer",2);s([x(".pagination")],j.prototype,"paginationContainer",2);s([S()],j.prototype,"activeSlide",2);s([S()],j.prototype,"scrolling",2);s([S()],j.prototype,"dragging",2);s([fo({passive:!0})],j.prototype,"handleScroll",1);s([k("loop",{waitUntilFirstUpdate:!0}),k("slidesPerPage",{waitUntilFirstUpdate:!0})],j.prototype,"initializeSlides",1);s([k("activeSlide")],j.prototype,"handleSlideChange",1);s([k("slidesPerMove")],j.prototype,"updateSlidesSnap",1);s([k("autoplay")],j.prototype,"handleAutoplayChange",1);j=s([E("wa-carousel")],j);var go=(t={})=>{let{validationElement:e,validationProperty:n}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),n||(n="value");const o={observedAttributes:["required"],message:e.validationMessage,checkValidity(a){const i={message:"",isValid:!0,invalidKeys:[]};return(a.required??a.hasAttribute("required"))&&!a[n]&&(i.message=typeof o.message=="function"?o.message(a):o.message||"",i.isValid=!1,i.invalidKeys.push("valueMissing")),i}};return o};var se=`:host {
  display: flex;
  flex-direction: column;
}

/* Label */
:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {
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
  line-height: var(--wa-form-control-label-line-height);

  &:not(.has-slotted) {
    display: none;
  }
}
`;var Eh=`:host {
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
`,Z=class extends K{constructor(){super(...arguments),this.hasSlotController=new At(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static get validators(){const t=[go({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){const t=this._value||"on";return this.checked?t:null}set value(t){this._value=t}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){const t=this.hasSlotController.test("hint"),e=this.hint?!0:!!t,n=!this.checked&&this.indeterminate,o=n?"indeterminate":"check",a=n?"indeterminate":"check";return g`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${z(this._value)}
            .indeterminate=${je(this.indeterminate)}
            .checked=${je(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${a}-icon icon" library="system" name=${o}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${e?"false":"true"}
        class="${L({"has-slotted":e})}"
      >
        ${this.hint}
      </slot>
    `}};Z.css=[se,dt,Eh];Z.shadowRootOptions={...K.shadowRootOptions,delegatesFocus:!0};s([x('input[type="checkbox"]')],Z.prototype,"input",2);s([l()],Z.prototype,"title",2);s([l({reflect:!0})],Z.prototype,"name",2);s([l({reflect:!0})],Z.prototype,"value",1);s([l({reflect:!0})],Z.prototype,"size",2);s([l({type:Boolean})],Z.prototype,"disabled",2);s([l({type:Boolean,reflect:!0})],Z.prototype,"indeterminate",2);s([l({type:Boolean,attribute:!1})],Z.prototype,"checked",2);s([l({type:Boolean,reflect:!0,attribute:"checked"})],Z.prototype,"defaultChecked",2);s([l({reflect:!0})],Z.prototype,"form",2);s([l({type:Boolean,reflect:!0})],Z.prototype,"required",2);s([l()],Z.prototype,"hint",2);s([k("defaultChecked")],Z.prototype,"handleDefaultCheckedChange",1);s([k(["checked","indeterminate"])],Z.prototype,"handleStateChange",1);s([k("disabled")],Z.prototype,"handleDisabledChange",1);Z=s([E("wa-checkbox")],Z);function mn(t,e){function n(a){const i=t.getBoundingClientRect(),r=t.ownerDocument.defaultView,c=i.left+r.pageXOffset,h=i.top+r.pageYOffset,d=a.pageX-c,u=a.pageY-h;e?.onMove&&e.onMove(d,u)}function o(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",o),e?.onStop&&e.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",o),e?.initialEvent instanceof PointerEvent&&n(e.initialEvent)}var ee=typeof window<"u"&&"ontouchstart"in window,_n=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=n=>{const o=ee&&"touches"in n?n.touches[0].clientX:n.clientX,a=ee&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging||!ee&&n.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),this.options.start(o,a))},this.handleDragStop=n=>{const o=ee&&"touches"in n?n.touches[0].clientX:n.clientX,a=ee&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.options.stop(o,a)},this.handleDragMove=n=>{const o=ee&&"touches"in n?n.touches[0].clientX:n.clientX,a=ee&&"touches"in n?n.touches[0].clientY:n.clientY;window.getSelection()?.removeAllRanges(),this.options.move(o,a)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),ee&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.element.removeEventListener("pointerdown",this.handleDragStart),ee&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var ns=`@layer wa-utilities {
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label) {
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
`;function et(t,e){Sh(t)&&(t="100%");const n=$h(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Ln(t){return Math.min(1,Math.max(0,t))}function Sh(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function $h(t){return typeof t=="string"&&t.indexOf("%")!==-1}function os(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function On(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Ee(t){return t.length===1?"0"+t:String(t)}function Ah(t,e,n){return{r:et(t,255)*255,g:et(e,255)*255,b:et(n,255)*255}}function li(t,e,n){t=et(t,255),e=et(e,255),n=et(n,255);const o=Math.max(t,e,n),a=Math.min(t,e,n);let i=0,r=0;const c=(o+a)/2;if(o===a)r=0,i=0;else{const h=o-a;switch(r=c>.5?h/(2-o-a):h/(o+a),o){case t:i=(e-n)/h+(e<n?6:0);break;case e:i=(n-t)/h+2;break;case n:i=(t-e)/h+4;break}i/=6}return{h:i,s:r,l:c}}function Mo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function zh(t,e,n){let o,a,i;if(t=et(t,360),e=et(e,100),n=et(n,100),e===0)a=n,i=n,o=n;else{const r=n<.5?n*(1+e):n+e-n*e,c=2*n-r;o=Mo(c,r,t+1/3),a=Mo(c,r,t),i=Mo(c,r,t-1/3)}return{r:o*255,g:a*255,b:i*255}}function ci(t,e,n){t=et(t,255),e=et(e,255),n=et(n,255);const o=Math.max(t,e,n),a=Math.min(t,e,n);let i=0;const r=o,c=o-a,h=o===0?0:c/o;if(o===a)i=0;else{switch(o){case t:i=(e-n)/c+(e<n?6:0);break;case e:i=(n-t)/c+2;break;case n:i=(t-e)/c+4;break}i/=6}return{h:i,s:h,v:r}}function Th(t,e,n){t=et(t,360)*6,e=et(e,100),n=et(n,100);const o=Math.floor(t),a=t-o,i=n*(1-e),r=n*(1-a*e),c=n*(1-(1-a)*e),h=o%6,d=[n,r,i,i,c,n][h],u=[c,n,n,r,i,i][h],p=[i,i,c,n,n,r][h];return{r:d*255,g:u*255,b:p*255}}function hi(t,e,n,o){const a=[Ee(Math.round(t).toString(16)),Ee(Math.round(e).toString(16)),Ee(Math.round(n).toString(16))];return o&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function _h(t,e,n,o,a){const i=[Ee(Math.round(t).toString(16)),Ee(Math.round(e).toString(16)),Ee(Math.round(n).toString(16)),Ee(Oh(o))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Lh(t,e,n,o){const a=t/100,i=e/100,r=n/100,c=o/100,h=255*(1-a)*(1-c),d=255*(1-i)*(1-c),u=255*(1-r)*(1-c);return{r:h,g:d,b:u}}function di(t,e,n){let o=1-t/255,a=1-e/255,i=1-n/255,r=Math.min(o,a,i);return r===1?(o=0,a=0,i=0):(o=(o-r)/(1-r)*100,a=(a-r)/(1-r)*100,i=(i-r)/(1-r)*100),r*=100,{c:Math.round(o),m:Math.round(a),y:Math.round(i),k:Math.round(r)}}function Oh(t){return Math.round(parseFloat(t)*255).toString(16)}function ui(t){return kt(t)/255}function kt(t){return parseInt(t,16)}function Ih(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Jo={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Dh(t){let e={r:0,g:0,b:0},n=1,o=null,a=null,i=null,r=!1,c=!1;return typeof t=="string"&&(t=Rh(t)),typeof t=="object"&&(xt(t.r)&&xt(t.g)&&xt(t.b)?(e=Ah(t.r,t.g,t.b),r=!0,c=String(t.r).substr(-1)==="%"?"prgb":"rgb"):xt(t.h)&&xt(t.s)&&xt(t.v)?(o=On(t.s),a=On(t.v),e=Th(t.h,o,a),r=!0,c="hsv"):xt(t.h)&&xt(t.s)&&xt(t.l)?(o=On(t.s),i=On(t.l),e=zh(t.h,o,i),r=!0,c="hsl"):xt(t.c)&&xt(t.m)&&xt(t.y)&&xt(t.k)&&(e=Lh(t.c,t.m,t.y,t.k),r=!0,c="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=os(n),{ok:r,format:t.format||c,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}const Mh="[-\\+]?\\d+%?",Ph="[-\\+]?\\d*\\.\\d+%?",he="(?:"+Ph+")|(?:"+Mh+")",Po="[\\s|\\(]+("+he+")[,|\\s]+("+he+")[,|\\s]+("+he+")\\s*\\)?",In="[\\s|\\(]+("+he+")[,|\\s]+("+he+")[,|\\s]+("+he+")[,|\\s]+("+he+")\\s*\\)?",Tt={CSS_UNIT:new RegExp(he),rgb:new RegExp("rgb"+Po),rgba:new RegExp("rgba"+In),hsl:new RegExp("hsl"+Po),hsla:new RegExp("hsla"+In),hsv:new RegExp("hsv"+Po),hsva:new RegExp("hsva"+In),cmyk:new RegExp("cmyk"+In),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Rh(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Jo[t])t=Jo[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let n=Tt.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=Tt.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=Tt.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=Tt.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=Tt.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=Tt.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=Tt.cmyk.exec(t),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=Tt.hex8.exec(t),n?{r:kt(n[1]),g:kt(n[2]),b:kt(n[3]),a:ui(n[4]),format:e?"name":"hex8"}:(n=Tt.hex6.exec(t),n?{r:kt(n[1]),g:kt(n[2]),b:kt(n[3]),format:e?"name":"hex"}:(n=Tt.hex4.exec(t),n?{r:kt(n[1]+n[1]),g:kt(n[2]+n[2]),b:kt(n[3]+n[3]),a:ui(n[4]+n[4]),format:e?"name":"hex8"}:(n=Tt.hex3.exec(t),n?{r:kt(n[1]+n[1]),g:kt(n[2]+n[2]),b:kt(n[3]+n[3]),format:e?"name":"hex"}:!1))))))))))}function xt(t){return typeof t=="number"?!Number.isNaN(t):Tt.CSS_UNIT.test(t)}class X{constructor(e="",n={}){if(e instanceof X)return e;typeof e=="number"&&(e=Ih(e)),this.originalInput=e;const o=Dh(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??o.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let n,o,a;const i=e.r/255,r=e.g/255,c=e.b/255;return i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),r<=.03928?o=r/12.92:o=Math.pow((r+.055)/1.055,2.4),c<=.03928?a=c/12.92:a=Math.pow((c+.055)/1.055,2.4),.2126*n+.7152*o+.0722*a}getAlpha(){return this.a}setAlpha(e){return this.a=os(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=ci(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=ci(this.r,this.g,this.b),n=Math.round(e.h*360),o=Math.round(e.s*100),a=Math.round(e.v*100);return this.a===1?`hsv(${n}, ${o}%, ${a}%)`:`hsva(${n}, ${o}%, ${a}%, ${this.roundA})`}toHsl(){const e=li(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=li(this.r,this.g,this.b),n=Math.round(e.h*360),o=Math.round(e.s*100),a=Math.round(e.l*100);return this.a===1?`hsl(${n}, ${o}%, ${a}%)`:`hsla(${n}, ${o}%, ${a}%, ${this.roundA})`}toHex(e=!1){return hi(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return _h(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),n=Math.round(this.g),o=Math.round(this.b);return this.a===1?`rgb(${e}, ${n}, ${o})`:`rgba(${e}, ${n}, ${o}, ${this.roundA})`}toPercentageRgb(){const e=n=>`${Math.round(et(n,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=n=>Math.round(et(n,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...di(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:n,y:o,k:a}=di(this.r,this.g,this.b);return`cmyk(${e}, ${n}, ${o}, ${a})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+hi(this.r,this.g,this.b,!1);for(const[n,o]of Object.entries(Jo))if(e===o)return n;return!1}toString(e){const n=!!e;e=e??this.format;let o=!1;const a=this.a<1&&this.a>=0;return!n&&a&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(o=this.toRgbString()),e==="prgb"&&(o=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(o=this.toHexString()),e==="hex3"&&(o=this.toHexString(!0)),e==="hex4"&&(o=this.toHex8String(!0)),e==="hex8"&&(o=this.toHex8String()),e==="name"&&(o=this.toName()),e==="hsl"&&(o=this.toHslString()),e==="hsv"&&(o=this.toHsvString()),e==="cmyk"&&(o=this.toCmykString()),o||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new X(this.toString())}lighten(e=10){const n=this.toHsl();return n.l+=e/100,n.l=Ln(n.l),new X(n)}brighten(e=10){const n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new X(n)}darken(e=10){const n=this.toHsl();return n.l-=e/100,n.l=Ln(n.l),new X(n)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const n=this.toHsl();return n.s-=e/100,n.s=Ln(n.s),new X(n)}saturate(e=10){const n=this.toHsl();return n.s+=e/100,n.s=Ln(n.s),new X(n)}greyscale(){return this.desaturate(100)}spin(e){const n=this.toHsl(),o=(n.h+e)%360;return n.h=o<0?360+o:o,new X(n)}mix(e,n=50){const o=this.toRgb(),a=new X(e).toRgb(),i=n/100,r={r:(a.r-o.r)*i+o.r,g:(a.g-o.g)*i+o.g,b:(a.b-o.b)*i+o.b,a:(a.a-o.a)*i+o.a};return new X(r)}analogous(e=6,n=30){const o=this.toHsl(),a=360/n,i=[this];for(o.h=(o.h-(a*e>>1)+720)%360;--e;)o.h=(o.h+a)%360,i.push(new X(o));return i}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new X(e)}monochromatic(e=6){const n=this.toHsv(),{h:o}=n,{s:a}=n;let{v:i}=n;const r=[],c=1/e;for(;e--;)r.push(new X({h:o,s:a,v:i})),i=(i+c)%1;return r}splitcomplement(){const e=this.toHsl(),{h:n}=e;return[this,new X({h:(n+72)%360,s:e.s,l:e.l}),new X({h:(n+216)%360,s:e.s,l:e.l})]}onBackground(e){const n=this.toRgb(),o=new X(e).toRgb(),a=n.a+o.a*(1-n.a);return new X({r:(n.r*n.a+o.r*o.a*(1-n.a))/a,g:(n.g*n.a+o.g*o.a*(1-n.a))/a,b:(n.b*n.a+o.b*o.a*(1-n.a))/a,a})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const n=this.toHsl(),{h:o}=n,a=[this],i=360/e;for(let r=1;r<e;r++)a.push(new X({h:(o+r*i)%360,s:n.s,l:n.l}));return a}equals(e){const n=new X(e);return this.format==="cmyk"||n.format==="cmyk"?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}}var Vh=`:host {
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
`,T=class extends K{constructor(){super(),this.hasSlotController=new At(this,"hint","label"),this.isSafeValue=!1,this.localize=new V(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form=null,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{const e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{const n=t.composedPath().some(o=>o instanceof Element&&(o.closest(".color-picker")||o===this.trigger));this&&!n&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const t=[go()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".slider.alpha"),n=e.querySelector(".slider-handle"),{width:o}=e.getBoundingClientRect();let a=this.value,i=this.value;n.focus(),t.preventDefault(),mn(e,{onMove:r=>{this.alpha=D(r/o*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".slider.hue"),n=e.querySelector(".slider-handle"),{width:o}=e.getBoundingClientRect();let a=this.value,i=this.value;n.focus(),t.preventDefault(),mn(e,{onMove:r=>{this.hue=D(r/o*360,0,360),this.syncValues(),this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".grid"),n=e.querySelector(".grid-handle"),{width:o,height:a}=e.getBoundingClientRect();let i=this.value,r=this.value;n.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,mn(e,{onMove:(c,h)=>{this.saturation=D(c/o*100,0,100),this.brightness=D(100-h/a*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=D(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=D(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=D(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=D(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=D(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=D(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=D(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=D(this.brightness-e,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){const e=t.target,n=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;const e=new X(t);if(!e.isValid)return null;const n=e.toHsl(),o=e.toRgb(),a=e.toHsv();if(!o||o.r==null||o.g==null||o.b==null)return null;const i={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},r=e.toHexString(),c=e.toHex8String(),h={h:a.h||0,s:(a.s||0)*100,v:(a.v||0)*100,a:a.a||0};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:h.h,s:h.s,v:h.v,string:this.setLetterCase(`hsv(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%)`)},hsva:{h:h.h,s:h.s,v:h.v,a:h.a,string:this.setLetterCase(`hsva(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%, ${h.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a||0,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${(o.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(c)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{const n=this.value;this.setColor(e.sRGBHex),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,n,o=100){const a=new X(`hsva(${t}, ${e}%, ${n}%, ${o/100})`);return a.isValid?a.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){super.willUpdate(t),t.has("value")&&this.handleValueChange(t.get("value")||"",this.value||"")}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(e);n!==null?(this.inputValue=this.value||"",this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){const t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new ya),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){const t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,Ft(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Ft(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await W(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await W(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const t=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,o=this.hint?!0:!!e,a=this.saturation,i=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(h=>h.trim()!==""),c=g`
      <div
        part="base"
        class=${L({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${_t({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${L({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${_t({top:`${i}%`,left:`${a}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${z(this.disabled?void 0:"0")}
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
                style=${_t({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${z(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?g`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${_t({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${_t({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${z(this.disabled?void 0:"0")}
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
            style=${_t({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.withoutFormatToggle?"":g`
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
            ${this.hasEyeDropper?g`
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

        ${r.length>0?g`
              <div part="swatches" class="swatches">
                ${r.map(h=>{const d=this.parseColor(h);return d?g`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${z(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${h}
                      @click=${()=>this.selectSwatch(h)}
                      @keydown=${u=>!this.disabled&&u.key==="Enter"&&this.setColor(d.hexa)}
                    >
                      <div class="swatch-color" style=${_t({backgroundColor:d.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return g`
      <div
        class=${L({container:!0,"form-control":!0,"form-control-has-label":n})}
        part="trigger-container form-control"
      >
        <div part="form-control-label" class="label" id="form-control-label">
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${L({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${_t({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
          class=${L({"has-slotted":o})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement="bottom-start"
        distance="0"
        skidding="0"
        sync="width"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${c}
      </wa-popup>
    `}};T.css=[ns,dt,se,Vh];T.shadowRootOptions={...K.shadowRootOptions,delegatesFocus:!0};s([x('[part~="base"]')],T.prototype,"base",2);s([x('[part~="input"]')],T.prototype,"input",2);s([x('[part~="form-control-label"]')],T.prototype,"triggerLabel",2);s([x('[part~="form-control-input"]')],T.prototype,"triggerButton",2);s([x(".color-popup")],T.prototype,"popup",2);s([x('[part~="preview"]')],T.prototype,"previewButton",2);s([x('[part~="trigger"]')],T.prototype,"trigger",2);s([S()],T.prototype,"hasFocus",2);s([S()],T.prototype,"isDraggingGridHandle",2);s([S()],T.prototype,"isEmpty",2);s([S()],T.prototype,"inputValue",2);s([S()],T.prototype,"hue",2);s([S()],T.prototype,"saturation",2);s([S()],T.prototype,"brightness",2);s([S()],T.prototype,"alpha",2);s([S()],T.prototype,"value",1);s([l({attribute:"value",reflect:!0})],T.prototype,"defaultValue",2);s([l({attribute:"with-label",reflect:!0,type:Boolean})],T.prototype,"withLabel",2);s([l({attribute:"with-hint",reflect:!0,type:Boolean})],T.prototype,"withHint",2);s([S()],T.prototype,"hasEyeDropper",2);s([l()],T.prototype,"label",2);s([l({attribute:"hint"})],T.prototype,"hint",2);s([l()],T.prototype,"format",2);s([l({reflect:!0})],T.prototype,"size",2);s([l({attribute:"without-format-toggle",type:Boolean})],T.prototype,"withoutFormatToggle",2);s([l({reflect:!0})],T.prototype,"name",2);s([l({type:Boolean})],T.prototype,"disabled",2);s([l({type:Boolean,reflect:!0})],T.prototype,"open",2);s([l({type:Boolean})],T.prototype,"opacity",2);s([l({type:Boolean})],T.prototype,"uppercase",2);s([l()],T.prototype,"swatches",2);s([l({reflect:!0})],T.prototype,"form",2);s([l({type:Boolean,reflect:!0})],T.prototype,"required",2);s([fo({passive:!1})],T.prototype,"handleTouchMove",1);s([k("format",{waitUntilFirstUpdate:!0})],T.prototype,"handleFormatChange",1);s([k("opacity")],T.prototype,"handleOpacityChange",1);s([k("value")],T.prototype,"handleValueChange",1);s([k("open",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",1);T=s([E("wa-color-picker")],T);var as=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function is(t,e){const n=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!n&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&Fh(e)})}function Fh(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;const n=[...e.elements];if(n.length===1){e.requestSubmit(null);return}const o=n.find(a=>a.type==="submit"&&!a.matches(":disabled"));o&&(["input","button"].includes(o.localName)?e.requestSubmit(o):o.click())}var Bh=`:host {
  border-width: 0;
}

.text-field {
  flex: auto;
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
`,O=class extends K{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new At(this,"hint","label"),this.localize=new V(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,mo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new as),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){is(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,o="preserve"){const a=e??this.input.selectionStart,i=n??this.input.selectionEnd;this.input.setRangeText(t,a,i,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,o=this.hint?!0:!!e,a=this.withClear&&!this.disabled&&!this.readonly,i=this.hasUpdated&&a&&(typeof this.value=="number"||this.value&&this.value.length>0);return g`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
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
          name=${z(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${z(this.placeholder)}
          minlength=${z(this.minlength)}
          maxlength=${z(this.maxlength)}
          min=${z(this.min)}
          max=${z(this.max)}
          step=${z(this.step)}
          .value=${je(this.value??"")}
          autocapitalize=${z(this.autocapitalize)}
          autocomplete=${z(this.autocomplete)}
          autocorrect=${z(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${z(this.pattern)}
          enterkeyhint=${z(this.enterkeyhint)}
          inputmode=${z(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${i?g`
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
        ${this.passwordToggle&&!this.disabled?g`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?g`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:g`
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
        class=${L({"has-slotted":o})}
        aria-hidden=${o?"false":"true"}
        >${this.hint}</slot
      >
    `}};O.css=[dt,se,Bh];O.shadowRootOptions={...K.shadowRootOptions,delegatesFocus:!0};s([x("input")],O.prototype,"input",2);s([l()],O.prototype,"title",2);s([l({reflect:!0})],O.prototype,"type",2);s([S()],O.prototype,"value",1);s([l({attribute:"value",reflect:!0})],O.prototype,"defaultValue",2);s([l({reflect:!0})],O.prototype,"size",2);s([l({reflect:!0})],O.prototype,"appearance",2);s([l({type:Boolean,reflect:!0})],O.prototype,"pill",2);s([l()],O.prototype,"label",2);s([l({attribute:"hint"})],O.prototype,"hint",2);s([l({attribute:"with-clear",type:Boolean})],O.prototype,"withClear",2);s([l()],O.prototype,"placeholder",2);s([l({type:Boolean,reflect:!0})],O.prototype,"readonly",2);s([l({attribute:"password-toggle",type:Boolean})],O.prototype,"passwordToggle",2);s([l({attribute:"password-visible",type:Boolean})],O.prototype,"passwordVisible",2);s([l({attribute:"without-spin-buttons",type:Boolean})],O.prototype,"withoutSpinButtons",2);s([l({reflect:!0})],O.prototype,"form",2);s([l({type:Boolean,reflect:!0})],O.prototype,"required",2);s([l()],O.prototype,"pattern",2);s([l({type:Number})],O.prototype,"minlength",2);s([l({type:Number})],O.prototype,"maxlength",2);s([l()],O.prototype,"min",2);s([l()],O.prototype,"max",2);s([l()],O.prototype,"step",2);s([l()],O.prototype,"autocapitalize",2);s([l()],O.prototype,"autocorrect",2);s([l()],O.prototype,"autocomplete",2);s([l({type:Boolean})],O.prototype,"autofocus",2);s([l()],O.prototype,"enterkeyhint",2);s([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],O.prototype,"spellcheck",2);s([l()],O.prototype,"inputmode",2);s([l({attribute:"with-label",type:Boolean})],O.prototype,"withLabel",2);s([l({attribute:"with-hint",type:Boolean})],O.prototype,"withHint",2);s([k("step",{waitUntilFirstUpdate:!0})],O.prototype,"handleStepChange",1);O=s([E("wa-input")],O);var ss=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};const ue=Math.min,Ct=Math.max,Zn=Math.round,Dn=Math.floor,Wt=t=>({x:t,y:t}),Uh={left:"right",right:"left",bottom:"top",top:"bottom"},Nh={start:"end",end:"start"};function ta(t,e,n){return Ct(t,ue(e,n))}function en(t,e){return typeof t=="function"?t(e):t}function pe(t){return t.split("-")[0]}function nn(t){return t.split("-")[1]}function rs(t){return t==="x"?"y":"x"}function xa(t){return t==="y"?"height":"width"}const qh=new Set(["top","bottom"]);function ne(t){return qh.has(pe(t))?"y":"x"}function ka(t){return rs(ne(t))}function Hh(t,e,n){n===void 0&&(n=!1);const o=nn(t),a=ka(t),i=xa(a);let r=a==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(r=Qn(r)),[r,Qn(r)]}function Wh(t){const e=Qn(t);return[ea(t),e,ea(e)]}function ea(t){return t.replace(/start|end/g,e=>Nh[e])}const pi=["left","right"],fi=["right","left"],jh=["top","bottom"],Kh=["bottom","top"];function Xh(t,e,n){switch(t){case"top":case"bottom":return n?e?fi:pi:e?pi:fi;case"left":case"right":return e?jh:Kh;default:return[]}}function Gh(t,e,n,o){const a=nn(t);let i=Xh(pe(t),n==="start",o);return a&&(i=i.map(r=>r+"-"+a),e&&(i=i.concat(i.map(ea)))),i}function Qn(t){return t.replace(/left|right|bottom|top/g,e=>Uh[e])}function Yh(t){return{top:0,right:0,bottom:0,left:0,...t}}function ls(t){return typeof t!="number"?Yh(t):{top:t,right:t,bottom:t,left:t}}function Jn(t){const{x:e,y:n,width:o,height:a}=t;return{width:o,height:a,top:n,left:e,right:e+o,bottom:n+a,x:e,y:n}}function mi(t,e,n){let{reference:o,floating:a}=t;const i=ne(e),r=ka(e),c=xa(r),h=pe(e),d=i==="y",u=o.x+o.width/2-a.width/2,p=o.y+o.height/2-a.height/2,f=o[c]/2-a[c]/2;let m;switch(h){case"top":m={x:u,y:o.y-a.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:p};break;case"left":m={x:o.x-a.width,y:p};break;default:m={x:o.x,y:o.y}}switch(nn(e)){case"start":m[r]-=f*(n&&d?-1:1);break;case"end":m[r]+=f*(n&&d?-1:1);break}return m}const Zh=async(t,e,n)=>{const{placement:o="bottom",strategy:a="absolute",middleware:i=[],platform:r}=n,c=i.filter(Boolean),h=await(r.isRTL==null?void 0:r.isRTL(e));let d=await r.getElementRects({reference:t,floating:e,strategy:a}),{x:u,y:p}=mi(d,o,h),f=o,m={},v=0;for(let b=0;b<c.length;b++){const{name:w,fn:y}=c[b],{x:C,y:$,data:_,reset:I}=await y({x:u,y:p,initialPlacement:o,placement:f,strategy:a,middlewareData:m,rects:d,platform:r,elements:{reference:t,floating:e}});u=C??u,p=$??p,m={...m,[w]:{...m[w],..._}},I&&v<=50&&(v++,typeof I=="object"&&(I.placement&&(f=I.placement),I.rects&&(d=I.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:a}):I.rects),{x:u,y:p}=mi(d,f,h)),b=-1)}return{x:u,y:p,placement:f,strategy:a,middlewareData:m}};async function Ca(t,e){var n;e===void 0&&(e={});const{x:o,y:a,platform:i,rects:r,elements:c,strategy:h}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:f=!1,padding:m=0}=en(e,t),v=ls(m),w=c[f?p==="floating"?"reference":"floating":p],y=Jn(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:h})),C=p==="floating"?{x:o,y:a,width:r.floating.width,height:r.floating.height}:r.reference,$=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),_=await(i.isElement==null?void 0:i.isElement($))?await(i.getScale==null?void 0:i.getScale($))||{x:1,y:1}:{x:1,y:1},I=Jn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:C,offsetParent:$,strategy:h}):C);return{top:(y.top-I.top+v.top)/_.y,bottom:(I.bottom-y.bottom+v.bottom)/_.y,left:(y.left-I.left+v.left)/_.x,right:(I.right-y.right+v.right)/_.x}}const Qh=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:a,rects:i,platform:r,elements:c,middlewareData:h}=e,{element:d,padding:u=0}=en(t,e)||{};if(d==null)return{};const p=ls(u),f={x:n,y:o},m=ka(a),v=xa(m),b=await r.getDimensions(d),w=m==="y",y=w?"top":"left",C=w?"bottom":"right",$=w?"clientHeight":"clientWidth",_=i.reference[v]+i.reference[m]-f[m]-i.floating[v],I=f[m]-i.reference[m],N=await(r.getOffsetParent==null?void 0:r.getOffsetParent(d));let H=N?N[$]:0;(!H||!await(r.isElement==null?void 0:r.isElement(N)))&&(H=c.floating[$]||i.floating[v]);const ut=_/2-I/2,it=H/2-b[v]/2-1,pt=ue(p[y],it),zt=ue(p[C],it),Ht=pt,re=H-b[v]-zt,rt=H/2-b[v]/2+ut,ve=ta(Ht,rt,re),Jt=!h.arrow&&nn(a)!=null&&rt!==ve&&i.reference[v]/2-(rt<Ht?pt:zt)-b[v]/2<0,Dt=Jt?rt<Ht?rt-Ht:rt-re:0;return{[m]:f[m]+Dt,data:{[m]:ve,centerOffset:rt-ve-Dt,...Jt&&{alignmentOffset:Dt}},reset:Jt}}}),Jh=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:a,middlewareData:i,rects:r,initialPlacement:c,platform:h,elements:d}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:b=!0,...w}=en(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const y=pe(a),C=ne(c),$=pe(c)===c,_=await(h.isRTL==null?void 0:h.isRTL(d.floating)),I=f||($||!b?[Qn(c)]:Wh(c)),N=v!=="none";!f&&N&&I.push(...Gh(c,b,v,_));const H=[c,...I],ut=await Ca(e,w),it=[];let pt=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&it.push(ut[y]),p){const rt=Hh(a,r,_);it.push(ut[rt[0]],ut[rt[1]])}if(pt=[...pt,{placement:a,overflows:it}],!it.every(rt=>rt<=0)){var zt,Ht;const rt=(((zt=i.flip)==null?void 0:zt.index)||0)+1,ve=H[rt];if(ve&&(!(p==="alignment"?C!==ne(ve):!1)||pt.every(Mt=>Mt.overflows[0]>0&&ne(Mt.placement)===C)))return{data:{index:rt,overflows:pt},reset:{placement:ve}};let Jt=(Ht=pt.filter(Dt=>Dt.overflows[0]<=0).sort((Dt,Mt)=>Dt.overflows[1]-Mt.overflows[1])[0])==null?void 0:Ht.placement;if(!Jt)switch(m){case"bestFit":{var re;const Dt=(re=pt.filter(Mt=>{if(N){const le=ne(Mt.placement);return le===C||le==="y"}return!0}).map(Mt=>[Mt.placement,Mt.overflows.filter(le=>le>0).reduce((le,Zs)=>le+Zs,0)]).sort((Mt,le)=>Mt[1]-le[1])[0])==null?void 0:re[0];Dt&&(Jt=Dt);break}case"initialPlacement":Jt=c;break}if(a!==Jt)return{reset:{placement:Jt}}}return{}}}},td=new Set(["left","top"]);async function ed(t,e){const{placement:n,platform:o,elements:a}=t,i=await(o.isRTL==null?void 0:o.isRTL(a.floating)),r=pe(n),c=nn(n),h=ne(n)==="y",d=td.has(r)?-1:1,u=i&&h?-1:1,p=en(e,t);let{mainAxis:f,crossAxis:m,alignmentAxis:v}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof v=="number"&&(m=c==="end"?v*-1:v),h?{x:m*u,y:f*d}:{x:f*d,y:m*u}}const nd=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:a,y:i,placement:r,middlewareData:c}=e,h=await ed(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:a+h.x,y:i+h.y,data:{...h,placement:r}}}}},od=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:a}=e,{mainAxis:i=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:y,y:C}=w;return{x:y,y:C}}},...h}=en(t,e),d={x:n,y:o},u=await Ca(e,h),p=ne(pe(a)),f=rs(p);let m=d[f],v=d[p];if(i){const w=f==="y"?"top":"left",y=f==="y"?"bottom":"right",C=m+u[w],$=m-u[y];m=ta(C,m,$)}if(r){const w=p==="y"?"top":"left",y=p==="y"?"bottom":"right",C=v+u[w],$=v-u[y];v=ta(C,v,$)}const b=c.fn({...e,[f]:m,[p]:v});return{...b,data:{x:b.x-n,y:b.y-o,enabled:{[f]:i,[p]:r}}}}}},ad=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:a,rects:i,platform:r,elements:c}=e,{apply:h=()=>{},...d}=en(t,e),u=await Ca(e,d),p=pe(a),f=nn(a),m=ne(a)==="y",{width:v,height:b}=i.floating;let w,y;p==="top"||p==="bottom"?(w=p,y=f===(await(r.isRTL==null?void 0:r.isRTL(c.floating))?"start":"end")?"left":"right"):(y=p,w=f==="end"?"top":"bottom");const C=b-u.top-u.bottom,$=v-u.left-u.right,_=ue(b-u[w],C),I=ue(v-u[y],$),N=!e.middlewareData.shift;let H=_,ut=I;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(ut=$),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(H=C),N&&!f){const pt=Ct(u.left,0),zt=Ct(u.right,0),Ht=Ct(u.top,0),re=Ct(u.bottom,0);m?ut=v-2*(pt!==0||zt!==0?pt+zt:Ct(u.left,u.right)):H=b-2*(Ht!==0||re!==0?Ht+re:Ct(u.top,u.bottom))}await h({...e,availableWidth:ut,availableHeight:H});const it=await r.getDimensions(c.floating);return v!==it.width||b!==it.height?{reset:{rects:!0}}:{}}}};function vo(){return typeof window<"u"}function on(t){return cs(t)?(t.nodeName||"").toLowerCase():"#document"}function Et(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Qt(t){var e;return(e=(cs(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function cs(t){return vo()?t instanceof Node||t instanceof Et(t).Node:!1}function Bt(t){return vo()?t instanceof Element||t instanceof Et(t).Element:!1}function Kt(t){return vo()?t instanceof HTMLElement||t instanceof Et(t).HTMLElement:!1}function bi(t){return!vo()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Et(t).ShadowRoot}const id=new Set(["inline","contents"]);function Cn(t){const{overflow:e,overflowX:n,overflowY:o,display:a}=Ut(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!id.has(a)}const sd=new Set(["table","td","th"]);function rd(t){return sd.has(on(t))}const ld=[":popover-open",":modal"];function wo(t){return ld.some(e=>{try{return t.matches(e)}catch{return!1}})}const cd=["transform","translate","scale","rotate","perspective"],hd=["transform","translate","scale","rotate","perspective","filter"],dd=["paint","layout","strict","content"];function yo(t){const e=Ea(),n=Bt(t)?Ut(t):t;return cd.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||hd.some(o=>(n.willChange||"").includes(o))||dd.some(o=>(n.contain||"").includes(o))}function ud(t){let e=fe(t);for(;Kt(e)&&!Ge(e);){if(yo(e))return e;if(wo(e))return null;e=fe(e)}return null}function Ea(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const pd=new Set(["html","body","#document"]);function Ge(t){return pd.has(on(t))}function Ut(t){return Et(t).getComputedStyle(t)}function xo(t){return Bt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function fe(t){if(on(t)==="html")return t;const e=t.assignedSlot||t.parentNode||bi(t)&&t.host||Qt(t);return bi(e)?e.host:e}function hs(t){const e=fe(t);return Ge(e)?t.ownerDocument?t.ownerDocument.body:t.body:Kt(e)&&Cn(e)?e:hs(e)}function Ye(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const a=hs(t),i=a===((o=t.ownerDocument)==null?void 0:o.body),r=Et(a);if(i){const c=na(r);return e.concat(r,r.visualViewport||[],Cn(a)?a:[],c&&n?Ye(c):[])}return e.concat(a,Ye(a,[],n))}function na(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ds(t){const e=Ut(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const a=Kt(t),i=a?t.offsetWidth:n,r=a?t.offsetHeight:o,c=Zn(n)!==i||Zn(o)!==r;return c&&(n=i,o=r),{width:n,height:o,$:c}}function Sa(t){return Bt(t)?t:t.contextElement}function He(t){const e=Sa(t);if(!Kt(e))return Wt(1);const n=e.getBoundingClientRect(),{width:o,height:a,$:i}=ds(e);let r=(i?Zn(n.width):n.width)/o,c=(i?Zn(n.height):n.height)/a;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const fd=Wt(0);function us(t){const e=Et(t);return!Ea()||!e.visualViewport?fd:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function md(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Et(t)?!1:e}function Te(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const a=t.getBoundingClientRect(),i=Sa(t);let r=Wt(1);e&&(o?Bt(o)&&(r=He(o)):r=He(t));const c=md(i,n,o)?us(i):Wt(0);let h=(a.left+c.x)/r.x,d=(a.top+c.y)/r.y,u=a.width/r.x,p=a.height/r.y;if(i){const f=Et(i),m=o&&Bt(o)?Et(o):o;let v=f,b=na(v);for(;b&&o&&m!==v;){const w=He(b),y=b.getBoundingClientRect(),C=Ut(b),$=y.left+(b.clientLeft+parseFloat(C.paddingLeft))*w.x,_=y.top+(b.clientTop+parseFloat(C.paddingTop))*w.y;h*=w.x,d*=w.y,u*=w.x,p*=w.y,h+=$,d+=_,v=Et(b),b=na(v)}}return Jn({width:u,height:p,x:h,y:d})}function $a(t,e){const n=xo(t).scrollLeft;return e?e.left+n:Te(Qt(t)).left+n}function ps(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),a=o.left+e.scrollLeft-(n?0:$a(t,o)),i=o.top+e.scrollTop;return{x:a,y:i}}function bd(t){let{elements:e,rect:n,offsetParent:o,strategy:a}=t;const i=a==="fixed",r=Qt(o),c=e?wo(e.floating):!1;if(o===r||c&&i)return n;let h={scrollLeft:0,scrollTop:0},d=Wt(1);const u=Wt(0),p=Kt(o);if((p||!p&&!i)&&((on(o)!=="body"||Cn(r))&&(h=xo(o)),Kt(o))){const m=Te(o);d=He(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}const f=r&&!p&&!i?ps(r,h,!0):Wt(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-h.scrollLeft*d.x+u.x+f.x,y:n.y*d.y-h.scrollTop*d.y+u.y+f.y}}function gd(t){return Array.from(t.getClientRects())}function vd(t){const e=Qt(t),n=xo(t),o=t.ownerDocument.body,a=Ct(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=Ct(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+$a(t);const c=-n.scrollTop;return Ut(o).direction==="rtl"&&(r+=Ct(e.clientWidth,o.clientWidth)-a),{width:a,height:i,x:r,y:c}}function wd(t,e){const n=Et(t),o=Qt(t),a=n.visualViewport;let i=o.clientWidth,r=o.clientHeight,c=0,h=0;if(a){i=a.width,r=a.height;const d=Ea();(!d||d&&e==="fixed")&&(c=a.offsetLeft,h=a.offsetTop)}return{width:i,height:r,x:c,y:h}}const yd=new Set(["absolute","fixed"]);function xd(t,e){const n=Te(t,!0,e==="fixed"),o=n.top+t.clientTop,a=n.left+t.clientLeft,i=Kt(t)?He(t):Wt(1),r=t.clientWidth*i.x,c=t.clientHeight*i.y,h=a*i.x,d=o*i.y;return{width:r,height:c,x:h,y:d}}function gi(t,e,n){let o;if(e==="viewport")o=wd(t,n);else if(e==="document")o=vd(Qt(t));else if(Bt(e))o=xd(e,n);else{const a=us(t);o={x:e.x-a.x,y:e.y-a.y,width:e.width,height:e.height}}return Jn(o)}function fs(t,e){const n=fe(t);return n===e||!Bt(n)||Ge(n)?!1:Ut(n).position==="fixed"||fs(n,e)}function kd(t,e){const n=e.get(t);if(n)return n;let o=Ye(t,[],!1).filter(c=>Bt(c)&&on(c)!=="body"),a=null;const i=Ut(t).position==="fixed";let r=i?fe(t):t;for(;Bt(r)&&!Ge(r);){const c=Ut(r),h=yo(r);!h&&c.position==="fixed"&&(a=null),(i?!h&&!a:!h&&c.position==="static"&&!!a&&yd.has(a.position)||Cn(r)&&!h&&fs(t,r))?o=o.filter(u=>u!==r):a=c,r=fe(r)}return e.set(t,o),o}function Cd(t){let{element:e,boundary:n,rootBoundary:o,strategy:a}=t;const r=[...n==="clippingAncestors"?wo(e)?[]:kd(e,this._c):[].concat(n),o],c=r[0],h=r.reduce((d,u)=>{const p=gi(e,u,a);return d.top=Ct(p.top,d.top),d.right=ue(p.right,d.right),d.bottom=ue(p.bottom,d.bottom),d.left=Ct(p.left,d.left),d},gi(e,c,a));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function Ed(t){const{width:e,height:n}=ds(t);return{width:e,height:n}}function Sd(t,e,n){const o=Kt(e),a=Qt(e),i=n==="fixed",r=Te(t,!0,i,e);let c={scrollLeft:0,scrollTop:0};const h=Wt(0);function d(){h.x=$a(a)}if(o||!o&&!i)if((on(e)!=="body"||Cn(a))&&(c=xo(e)),o){const m=Te(e,!0,i,e);h.x=m.x+e.clientLeft,h.y=m.y+e.clientTop}else a&&d();i&&!o&&a&&d();const u=a&&!o&&!i?ps(a,c):Wt(0),p=r.left+c.scrollLeft-h.x-u.x,f=r.top+c.scrollTop-h.y-u.y;return{x:p,y:f,width:r.width,height:r.height}}function Ro(t){return Ut(t).position==="static"}function vi(t,e){if(!Kt(t)||Ut(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Qt(t)===n&&(n=n.ownerDocument.body),n}function ms(t,e){const n=Et(t);if(wo(t))return n;if(!Kt(t)){let a=fe(t);for(;a&&!Ge(a);){if(Bt(a)&&!Ro(a))return a;a=fe(a)}return n}let o=vi(t,e);for(;o&&rd(o)&&Ro(o);)o=vi(o,e);return o&&Ge(o)&&Ro(o)&&!yo(o)?n:o||ud(t)||n}const $d=async function(t){const e=this.getOffsetParent||ms,n=this.getDimensions,o=await n(t.floating);return{reference:Sd(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ad(t){return Ut(t).direction==="rtl"}const Nn={convertOffsetParentRelativeRectToViewportRelativeRect:bd,getDocumentElement:Qt,getClippingRect:Cd,getOffsetParent:ms,getElementRects:$d,getClientRects:gd,getDimensions:Ed,getScale:He,isElement:Bt,isRTL:Ad};function bs(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function zd(t,e){let n=null,o;const a=Qt(t);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,h){c===void 0&&(c=!1),h===void 0&&(h=1),i();const d=t.getBoundingClientRect(),{left:u,top:p,width:f,height:m}=d;if(c||e(),!f||!m)return;const v=Dn(p),b=Dn(a.clientWidth-(u+f)),w=Dn(a.clientHeight-(p+m)),y=Dn(u),$={rootMargin:-v+"px "+-b+"px "+-w+"px "+-y+"px",threshold:Ct(0,ue(1,h))||1};let _=!0;function I(N){const H=N[0].intersectionRatio;if(H!==h){if(!_)return r();H?r(!1,H):o=setTimeout(()=>{r(!1,1e-7)},1e3)}H===1&&!bs(d,t.getBoundingClientRect())&&r(),_=!1}try{n=new IntersectionObserver(I,{...$,root:a.ownerDocument})}catch{n=new IntersectionObserver(I,$)}n.observe(t)}return r(!0),i}function gs(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:h=!1}=o,d=Sa(t),u=a||i?[...d?Ye(d):[],...Ye(e)]:[];u.forEach(y=>{a&&y.addEventListener("scroll",n,{passive:!0}),i&&y.addEventListener("resize",n)});const p=d&&c?zd(d,n):null;let f=-1,m=null;r&&(m=new ResizeObserver(y=>{let[C]=y;C&&C.target===d&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var $;($=m)==null||$.observe(e)})),n()}),d&&!h&&m.observe(d),m.observe(e));let v,b=h?Te(t):null;h&&w();function w(){const y=Te(t);b&&!bs(b,y)&&n(),b=y,v=requestAnimationFrame(w)}return n(),()=>{var y;u.forEach(C=>{a&&C.removeEventListener("scroll",n),i&&C.removeEventListener("resize",n)}),p?.(),(y=m)==null||y.disconnect(),m=null,h&&cancelAnimationFrame(v)}}const vs=nd,ws=od,ys=Jh,wi=ad,Td=Qh,xs=(t,e,n)=>{const o=new Map,a={platform:Nn,...n},i={...a.platform,_c:o};return Zh(t,e,{...a,platform:i})};function _d(t){return Ld(t)}function Vo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Ld(t){for(let e=t;e;e=Vo(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Vo(t);e;e=Vo(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||yo(n)||e.tagName==="BODY"))return e}return null}var Od=`:host {
  --arrow-color: black;
  --arrow-size: var(--wa-tooltip-arrow-size);
  --show-duration: 100ms;
  --hide-duration: 100ms;

  /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

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
  width: calc(var(--arrow-size-diagonal) * 2);
  height: calc(var(--arrow-size-diagonal) * 2);
  rotate: 45deg;
  background: var(--arrow-color);
  z-index: 3;
}

:host([data-current-placement~='left']) .arrow {
  rotate: -45deg;
}

:host([data-current-placement~='right']) .arrow {
  rotate: 135deg;
}

:host([data-current-placement~='bottom']) .arrow {
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
`;function yi(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var Mn=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),U=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let o=0,a=0,i=0,r=0,c=0,h=0,d=0,u=0;n?t.top<e.top?(o=t.left,a=t.bottom,i=t.right,r=t.bottom,c=e.left,h=e.top,d=e.right,u=e.top):(o=e.left,a=e.bottom,i=e.right,r=e.bottom,c=t.left,h=t.top,d=t.right,u=t.top):t.left<e.left?(o=t.right,a=t.top,i=e.left,r=e.top,c=t.right,h=t.bottom,d=e.left,u=e.bottom):(o=e.right,a=e.top,i=t.left,r=t.top,c=e.right,h=e.bottom,d=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${a}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||yi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=gs(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[vs({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(wi({apply:({rects:o})=>{const a=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;Mn&&!yi(this.anchor)&&this.boundary==="scroll"&&(e=Ye(this.anchorEl).filter(o=>o instanceof Element)),this.flip&&t.push(ys({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(ws({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(wi({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Td({element:this.arrowEl,padding:this.arrowPadding}));const n=Mn?o=>Nn.getOffsetParent(o,_d):Nn.getOffsetParent;xs(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:Mn?"absolute":"fixed",platform:{...Nn,getOffsetParent:n}}).then(({x:o,y:a,middlewareData:i,placement:r})=>{const c=this.localize.dir()==="rtl",h={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${a}px`}),this.arrow){const d=i.arrow.x,u=i.arrow.y;let p="",f="",m="",v="";if(this.arrowPlacement==="start"){const b=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=c?b:"",v=c?"":b}else if(this.arrowPlacement==="end"){const b=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=c?"":b,v=c?b:"",m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof d=="number"?`${d}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:f,bottom:m,left:v,[h]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new ss)}render(){return g`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${L({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${L({popup:!0,"popup-active":this.active,"popup-fixed":!Mn,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?g`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};U.css=Od;s([x(".popup")],U.prototype,"popup",2);s([x(".arrow")],U.prototype,"arrowEl",2);s([l()],U.prototype,"anchor",2);s([l({type:Boolean,reflect:!0})],U.prototype,"active",2);s([l({reflect:!0})],U.prototype,"placement",2);s([l()],U.prototype,"boundary",2);s([l({type:Number})],U.prototype,"distance",2);s([l({type:Number})],U.prototype,"skidding",2);s([l({type:Boolean})],U.prototype,"arrow",2);s([l({attribute:"arrow-placement"})],U.prototype,"arrowPlacement",2);s([l({attribute:"arrow-padding",type:Number})],U.prototype,"arrowPadding",2);s([l({type:Boolean})],U.prototype,"flip",2);s([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],U.prototype,"flipFallbackPlacements",2);s([l({attribute:"flip-fallback-strategy"})],U.prototype,"flipFallbackStrategy",2);s([l({type:Object})],U.prototype,"flipBoundary",2);s([l({attribute:"flip-padding",type:Number})],U.prototype,"flipPadding",2);s([l({type:Boolean})],U.prototype,"shift",2);s([l({type:Object})],U.prototype,"shiftBoundary",2);s([l({attribute:"shift-padding",type:Number})],U.prototype,"shiftPadding",2);s([l({attribute:"auto-size"})],U.prototype,"autoSize",2);s([l()],U.prototype,"sync",2);s([l({type:Object})],U.prototype,"autoSizeBoundary",2);s([l({attribute:"auto-size-padding",type:Number})],U.prototype,"autoSizePadding",2);s([l({attribute:"hover-bridge",type:Boolean})],U.prototype,"hoverBridge",2);U=s([E("wa-popup")],U);var Id=`:host {
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
`,Ze=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.position=50}handleDrag(t){const{width:e}=this.getBoundingClientRect(),n=this.localize.dir()==="rtl";t.preventDefault(),mn(this,{onMove:o=>{this.customStates.set("dragging",!0),this.position=parseFloat(D(o/e*100,0,100).toFixed(2)),n&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:t})}handleKeyDown(t){const e=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const o=t.shiftKey?10:1;let a=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight")&&(a-=o),(e&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft")&&(a+=o),t.key==="Home"&&(a=0),t.key==="End"&&(a=100),a=D(a,0,100),this.position=a}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return g`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${_t({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${_t({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};Ze.css=Id;s([x(".handle")],Ze.prototype,"handle",2);s([l({type:Number,reflect:!0})],Ze.prototype,"position",2);s([k("position",{waitUntilFirstUpdate:!0})],Ze.prototype,"handlePositionChange",1);Ze=s([E("wa-comparison")],Ze);var Dd=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Md=`:host {
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
`,nt=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),n=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let a=this.from,i="";n?[a,i]=this.from.trim().split("."):o&&([a,i]=this.from.trim().replace(/\]$/,"").split("["));const r="getElementById"in e?e.getElementById(a):null;r?o?t=r.getAttribute(i)||"":n?t=r[i]||"":t=r.textContent||"":(this.showStatus("error"),this.dispatchEvent(new qe))}if(!t)this.showStatus("error"),this.dispatchEvent(new qe);else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new Dd({value:t}))}catch{this.showStatus("error"),this.dispatchEvent(new qe)}}async showStatus(t){const e=t==="success"?this.successIcon:this.errorIcon;await W(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=t,e.hidden=!1,await W(e,"show"),setTimeout(async()=>{await W(e,"hide"),e.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await W(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return g`
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
          class=${L({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
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
    `}};nt.css=[ns,Md];s([x('slot[name="copy-icon"]')],nt.prototype,"copyIcon",2);s([x('slot[name="success-icon"]')],nt.prototype,"successIcon",2);s([x('slot[name="error-icon"]')],nt.prototype,"errorIcon",2);s([x("wa-tooltip")],nt.prototype,"tooltip",2);s([S()],nt.prototype,"isCopying",2);s([S()],nt.prototype,"status",2);s([l()],nt.prototype,"value",2);s([l()],nt.prototype,"from",2);s([l({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);s([l({attribute:"copy-label"})],nt.prototype,"copyLabel",2);s([l({attribute:"success-label"})],nt.prototype,"successLabel",2);s([l({attribute:"error-label"})],nt.prototype,"errorLabel",2);s([l({attribute:"feedback-duration",type:Number})],nt.prototype,"feedbackDuration",2);s([l({attribute:"tooltip-placement"})],nt.prototype,"tooltipPlacement",2);nt=s([E("wa-copy-button")],nt);var Me=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},Pe=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},Re=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}},Ve=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Pd=`:host {
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

.tooltip::part(arrow) {
  border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
  border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
}
`,G=class extends A{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),this.hideDelay))}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=bo("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){const o=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);o.includes(e)||(o.push(e),t.setAttribute("aria-labelledby",o.join(" ")))}removeFromAriaLabelledBy(t,e){const a=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(i=>i!==e);a.length>0?t.setAttribute("aria-labelledby",a.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const t=new Ve;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await W(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Pe)}else{const t=new Re;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await W(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Me)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,n=this.anchor;if(e===n)return;const{signal:o}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:o}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:o}),e.addEventListener("click",this.handleClick,{signal:o}),e.addEventListener("mouseover",this.handleMouseOver,{signal:o}),e.addEventListener("mouseout",this.handleMouseOut,{signal:o})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener("blur",this.handleBlur,{capture:!0}),n.removeEventListener("focus",this.handleFocus,{capture:!0}),n.removeEventListener("click",this.handleClick),n.removeEventListener("mouseover",this.handleMouseOver),n.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ft(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Ft(this,"wa-after-hide")}render(){return g`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${L({tooltip:!0,"tooltip-open":this.open})}
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
    `}};G.css=Pd;G.dependencies={"wa-popup":U};s([x("slot:not([name])")],G.prototype,"defaultSlot",2);s([x(".body")],G.prototype,"body",2);s([x("wa-popup")],G.prototype,"popup",2);s([l()],G.prototype,"placement",2);s([l({type:Boolean,reflect:!0})],G.prototype,"disabled",2);s([l({type:Number})],G.prototype,"distance",2);s([l({type:Boolean,reflect:!0})],G.prototype,"open",2);s([l({type:Number})],G.prototype,"skidding",2);s([l({attribute:"show-delay",type:Number})],G.prototype,"showDelay",2);s([l({attribute:"hide-delay",type:Number})],G.prototype,"hideDelay",2);s([l()],G.prototype,"trigger",2);s([l({attribute:"without-arrow",type:Boolean,reflect:!0})],G.prototype,"withoutArrow",2);s([l()],G.prototype,"for",2);s([S()],G.prototype,"anchor",2);s([k("open",{waitUntilFirstUpdate:!0})],G.prototype,"handleOpenChange",1);s([k("for")],G.prototype,"handleForChange",1);s([k(["distance","placement","skidding"])],G.prototype,"handleOptionsChange",1);s([k("disabled")],G.prototype,"handleDisabledChange",1);G=s([E("wa-tooltip")],G);var Rd=`:host {
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
`,lt=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some(o=>{if(!(o instanceof HTMLElement))return!1;const a=o.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(a)?!0:o instanceof K?!("disabled"in o)||!o.disabled:!1})||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(n=>{n!==this&&n.open&&(n.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const t=new Ve;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const e=Yn(getComputedStyle(this.body).getPropertyValue("--show-duration"));await Gn(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new Pe)}else{const t=new Re;if(this.dispatchEvent(t),t.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const e=Yn(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await Gn(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Me)}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ft(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ft(this,"wa-after-hide")}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return g`
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
          class=${L({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};lt.css=Rd;s([x("details")],lt.prototype,"details",2);s([x("summary")],lt.prototype,"header",2);s([x(".body")],lt.prototype,"body",2);s([x(".expand-icon-slot")],lt.prototype,"expandIconSlot",2);s([S()],lt.prototype,"isAnimating",2);s([l({type:Boolean,reflect:!0})],lt.prototype,"open",2);s([l()],lt.prototype,"summary",2);s([l({reflect:!0})],lt.prototype,"name",2);s([l({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);s([l({reflect:!0})],lt.prototype,"appearance",2);s([l({attribute:"icon-placement",reflect:!0})],lt.prototype,"iconPlacement",2);s([k("open",{waitUntilFirstUpdate:!0})],lt.prototype,"handleOpenChange",1);lt=s([E("wa-details")],lt);function Vd(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var oa=new Set;function Fd(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Bd(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function to(t){if(oa.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){const e=Fd()+Bd();let n=getComputedStyle(document.documentElement).scrollbarGutter;(!n||n==="auto")&&(n="stable"),e<2&&(n=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",n),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${e}px`)}}function eo(t){oa.delete(t),oa.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function aa(t,e,n="vertical",o="smooth"){const a=Vd(t,e),i=a.top+e.scrollTop,r=a.left+e.scrollLeft,c=e.scrollLeft,h=e.scrollLeft+e.offsetWidth,d=e.scrollTop,u=e.scrollTop+e.offsetHeight;(n==="horizontal"||n==="both")&&(r<c?e.scrollTo({left:r,behavior:o}):r+t.clientWidth>h&&e.scrollTo({left:r-e.offsetWidth+t.clientWidth,behavior:o})),(n==="vertical"||n==="both")&&(i<d?e.scrollTo({top:i,behavior:o}):i+t.clientHeight>u&&e.scrollTo({top:i-e.offsetHeight+t.clientHeight,behavior:o}))}function Aa(t){return t.split(" ").map(e=>e.trim()).filter(e=>e!=="")}var Ud=`:host {
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
`,ae=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.hasSlotController=new At(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),to(this))}disconnectedCallback(){super.disconnectedCallback(),eo(this),this.removeOpenListeners()}async requestClose(t){const e=new Re({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,W(this.dialog,"pulse");return}this.removeOpenListeners(),await W(this.dialog,"hide"),this.open=!1,this.dialog.close(),eo(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new Me)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(t){const n=t.target.closest('[data-dialog="close"]');n&&(t.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await W(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new Ve;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),to(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await W(this.dialog,"show"),this.dispatchEvent(new Pe)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return g`
      <dialog
        part="dialog"
        class=${L({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?g`
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
                    @click="${n=>this.requestClose(n.target)}"
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

        ${e?g`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};ae.css=Ud;s([x(".dialog")],ae.prototype,"dialog",2);s([l({type:Boolean,reflect:!0})],ae.prototype,"open",2);s([l({reflect:!0})],ae.prototype,"label",2);s([l({attribute:"without-header",type:Boolean,reflect:!0})],ae.prototype,"withoutHeader",2);s([l({attribute:"light-dismiss",type:Boolean})],ae.prototype,"lightDismiss",2);s([k("open",{waitUntilFirstUpdate:!0})],ae.prototype,"handleOpenChange",1);ae=s([E("wa-dialog")],ae);document.addEventListener("click",t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[n,o]=Aa(e.getAttribute("data-dialog")||"");if(n==="open"&&o?.length){const i=e.getRootNode().getElementById(o);i?.localName==="wa-dialog"?i.open=!0:console.warn(`A dialog with an ID of "${o}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var Nd=`:host {
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
`,wn=class extends A{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};wn.css=Nd;s([l({reflect:!0})],wn.prototype,"orientation",2);s([k("orientation")],wn.prototype,"handleVerticalChange",1);wn=s([E("wa-divider")],wn);var qd=`:host {
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
`,Xt=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.hasSlotController=new At(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),to(this))}disconnectedCallback(){super.disconnectedCallback(),eo(this),this.removeOpenListeners()}async requestClose(t){const e=new Re({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,W(this.drawer,"pulse");return}this.removeOpenListeners(),await W(this.drawer,"hide"),this.open=!1,this.drawer.close(),eo(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new Me)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&this.requestClose(this.drawer)}handleDialogClick(t){const n=t.target.closest('[data-drawer="close"]');n&&(t.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await W(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const t=new Ve;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),to(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.drawer.focus()}),await W(this.drawer,"show"),this.dispatchEvent(new Pe)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return g`
      <dialog
        part="dialog"
        class=${L({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?g`
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
                    @click="${n=>this.requestClose(n.target)}"
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

        ${e?g`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Xt.css=qd;s([x(".drawer")],Xt.prototype,"drawer",2);s([l({type:Boolean,reflect:!0})],Xt.prototype,"open",2);s([l({reflect:!0})],Xt.prototype,"label",2);s([l({reflect:!0})],Xt.prototype,"placement",2);s([l({attribute:"without-header",type:Boolean,reflect:!0})],Xt.prototype,"withoutHeader",2);s([l({attribute:"light-dismiss",type:Boolean})],Xt.prototype,"lightDismiss",2);s([k("open",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleOpenChange",1);Xt=s([E("wa-drawer")],Xt);document.addEventListener("click",t=>{const e=t.target.closest("[data-drawer]");if(e instanceof Element){const[n,o]=Aa(e.getAttribute("data-drawer")||"");if(n==="open"&&o?.length){const i=e.getRootNode().getElementById(o);i?.localName==="wa-drawer"?i.open=!0:console.warn(`A drawer with an ID of "${o}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var Hd=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};function*ks(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*ks(t.shadowRoot.activeElement)))}var Wd=`:host {
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
`,Fo=new Set,mt=class extends A{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new V(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{const e=this.localize.dir()==="rtl";if(t.key==="Escape"){const u=this.getTrigger();t.preventDefault(),t.stopPropagation(),this.open=!1,u?.focus();return}const n=[...ks()].find(u=>u.localName==="wa-dropdown-item"),o=n?.localName==="wa-dropdown-item",a=this.getCurrentSubmenuItem(),i=!!a;let r,c,h;i?(r=this.getSubmenuItems(a),c=r.find(u=>u.active||u===n),h=c?r.indexOf(c):-1):(r=this.getItems(),c=r.find(u=>u.active||u===n),h=c?r.indexOf(c):-1);let d;if(t.key==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),h>0?d=r[h-1]:d=r[r.length-1]),t.key==="ArrowDown"&&(t.preventDefault(),t.stopPropagation(),h!==-1&&h<r.length-1?d=r[h+1]:d=r[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&o&&c&&c.hasSubmenu){t.preventDefault(),t.stopPropagation(),c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{const u=this.getSubmenuItems(c);u.length>0&&(u.forEach((p,f)=>p.active=f===0),u[0].focus())},0);return}if(t.key===(e?"ArrowRight":"ArrowLeft")&&i){t.preventDefault(),t.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus(),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(f=>{f!==u&&(f.active=!1)})},0));return}if((t.key==="Home"||t.key==="End")&&(t.preventDefault(),t.stopPropagation(),d=t.key==="Home"?r[0]:r[r.length-1]),t.key==="Tab"&&await this.hideMenu(),t.key.length===1&&!(t.metaKey||t.ctrlKey||t.altKey)&&!(t.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=t.key,r.some(u=>{const p=(u.textContent||"").trim().toLowerCase(),f=this.userTypedQuery.trim().toLowerCase();return p.startsWith(f)?(d=u,!0):!1})),d){t.preventDefault(),t.stopPropagation(),r.forEach(u=>u.active=u===d),d.focus();return}(t.key==="Enter"||t.key===" "&&this.userTypedQuery==="")&&o&&c&&(t.preventDefault(),t.stopPropagation(),c.hasSubmenu?(c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{const u=this.getSubmenuItems(c);u.length>0&&(u.forEach((p,f)=>p.active=f===0),u[0].focus())},0)):this.makeSelection(c))},this.handleDocumentPointerDown=t=>{t.composedPath().some(o=>o instanceof HTMLElement?o===this||o.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=t=>{const e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;const n=e.submenuElement.getBoundingClientRect(),o=this.localize.dir()==="rtl",a=o?n.right:n.left,i=o?Math.max(t.clientX,a):Math.min(t.clientX,a),r=Math.max(n.top,Math.min(t.clientY,n.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${i}px`),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${r}px`);const c=e.matches(":hover"),h=e.submenuElement?.matches(":hover")||!!t.composedPath().find(d=>d instanceof HTMLElement&&d.closest('[part="submenu"]')===e.submenuElement);!c&&!h&&setTimeout(()=>{!e.matches(":hover")&&!e.submenuElement?.matches(":hover")&&(e.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(t=>t()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(t){t.has("open")&&(this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())),t.has("size")&&this.syncItemSizes()}getItems(t=!1){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(n=>n.localName==="wa-dropdown-item");return t?e:e.filter(n=>!n.disabled)}getSubmenuItems(t,e=!1){const n=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!n)return[];const o=n.assignedElements({flatten:!0}).filter(a=>a.localName==="wa-dropdown-item");return e?o:o.filter(a=>!a.disabled)}syncItemSizes(){this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.localName==="wa-dropdown-item").forEach(e=>e.size=this.size)}addToSubmenuStack(t){const e=this.openSubmenuStack.indexOf(t);e!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(t){const e=t.closest('wa-dropdown-item:not([slot="submenu"])');let n;e?n=this.getSubmenuItems(e,!0):n=this.getItems(!0),n.forEach(o=>{o!==t&&o.submenuOpen&&(o.submenuOpen=!1)}),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger())return;const e=new Ve;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}Fo.forEach(o=>o.open=!1),this.popup.active=!0,this.open=!0,Fo.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await W(this.menu,"show");const n=this.getItems();n.length>0&&(n.forEach((o,a)=>o.active=a===0),n[0].focus()),this.dispatchEvent(new Pe)}async hideMenu(){const t=new Re({source:this});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}this.open=!1,Fo.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await W(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Me)}handleMenuClick(t){const e=t.target.closest("wa-dropdown-item");if(!(!e||e.disabled)){if(e.hasSubmenu){e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),t.stopPropagation();return}this.makeSelection(e)}}async handleMenuSlotChange(){const t=this.getItems(!0);await Promise.all(t.map(o=>o.updateComplete)),this.syncItemSizes();const e=t.some(o=>o.type==="checkbox"),n=t.some(o=>o.hasSubmenu);t.forEach((o,a)=>{o.active=a===0,o.checkboxAdjacent=e,o.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){const e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);const e=gs(t,t.submenuElement,()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)});this.submenuCleanups.set(t,e);const n=t.submenuElement.querySelector('slot[name="submenu"]');n&&(n.removeEventListener("slotchange",mt.handleSubmenuSlotChange),n.addEventListener("slotchange",mt.handleSubmenuSlotChange),mt.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(t){const e=t.target;if(!e)return;const n=e.assignedElements().filter(i=>i.localName==="wa-dropdown-item");if(n.length===0)return;const o=n.some(i=>i.hasSubmenu),a=n.some(i=>i.type==="checkbox");n.forEach(i=>{i.submenuAdjacent=o,i.checkboxAdjacent=a})}processSubmenuItems(t){if(!t.submenuElement)return;const e=this.getSubmenuItems(t,!0),n=e.some(o=>o.hasSubmenu);e.forEach(o=>{o.submenuAdjacent=n})}cleanupSubmenuPosition(t){const e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;const n=this.localize.dir()==="rtl"?"left-start":"right-start";xs(t,t.submenuElement,{placement:n,middleware:[vs({mainAxis:0,crossAxis:-5}),ys({fallbackStrategy:"bestFit"}),ws({padding:8})]}).then(({x:o,y:a,placement:i})=>{t.submenuElement.setAttribute("data-placement",i),Object.assign(t.submenuElement.style,{left:`${o}px`,top:`${a}px`})})}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){t.submenuElement.style.setProperty("--safe-triangle-visible","none");return}t.submenuElement.style.setProperty("--safe-triangle-visible","block");const n=t.submenuElement.getBoundingClientRect(),o=this.localize.dir()==="rtl";t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${o?n.right:n.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${n.top}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${o?n.right:n.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${n.bottom}px`)}makeSelection(t){const e=this.getTrigger();if(t.disabled)return;t.type==="checkbox"&&(t.checked=!t.checked);const n=new Hd({item:t});this.dispatchEvent(n),n.defaultPrevented||(this.open=!1,e?.focus())}async syncAriaAttributes(){const t=this.getTrigger();let e;t&&(t.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",bo("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu.setAttribute("aria-expanded","false"))}render(){let t=this.hasUpdated?this.popup.active:this.open;return g`
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
    `}};mt.css=[dt,Wd];s([x("slot:not([name])")],mt.prototype,"defaultSlot",2);s([x("#menu")],mt.prototype,"menu",2);s([x("wa-popup")],mt.prototype,"popup",2);s([l({type:Boolean,reflect:!0})],mt.prototype,"open",2);s([l({reflect:!0})],mt.prototype,"size",2);s([l({reflect:!0})],mt.prototype,"placement",2);s([l({type:Number})],mt.prototype,"distance",2);s([l({type:Number})],mt.prototype,"skidding",2);mt=s([E("wa-dropdown")],mt);var jd=`:host {
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
    100ms background-color ease,
    100ms color ease;
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

:host(:state(disabled)) {
  opacity: 0.5;
  cursor: not-allowed;
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
`,ct=class extends A{constructor(){super(...arguments),this.hasSlotController=new At(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.notifyParentOfOpening(),this.submenuElement.showPopover(),this.submenuElement.hidden=!1,this.submenuElement.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await W(this.submenuElement,"show"),setTimeout(()=>{const t=this.getSubmenuItems();t.length>0&&(t.forEach((e,n)=>e.active=n===0),t[0].focus())},0))}notifyParentOfOpening(){const t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);const e=this.parentElement;e&&[...e.children].filter(o=>o!==this&&o.localName==="wa-dropdown-item"&&o.getAttribute("slot")===this.getAttribute("slot")&&o.submenuOpen).forEach(o=>{o.submenuOpen=!1})}async closeSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),this.submenuElement.hidden||(await W(this.submenuElement,"hide"),this.submenuElement.hidden=!0,this.submenuElement.removeAttribute("data-visible"),this.submenuElement.hidePopover()))}getSubmenuItems(){return[...this.children].filter(t=>t.localName==="wa-dropdown-item"&&t.getAttribute("slot")==="submenu"&&!t.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return g`
      ${this.type==="checkbox"?g`
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

      ${this.hasSubmenu?g`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?g`
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
    `}};ct.css=jd;s([x("#submenu")],ct.prototype,"submenuElement",2);s([l({type:Boolean})],ct.prototype,"active",2);s([l({reflect:!0})],ct.prototype,"variant",2);s([l({reflect:!0})],ct.prototype,"size",2);s([l({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],ct.prototype,"checkboxAdjacent",2);s([l({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],ct.prototype,"submenuAdjacent",2);s([l()],ct.prototype,"value",2);s([l({reflect:!0})],ct.prototype,"type",2);s([l({type:Boolean})],ct.prototype,"checked",2);s([l({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);s([l({type:Boolean,reflect:!0})],ct.prototype,"submenuOpen",2);s([S()],ct.prototype,"hasSubmenu",2);ct=s([E("wa-dropdown-item")],ct);var yn=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],n=this.unit==="bit"?t:e,o=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),n.length-1)),a=n[o]+this.unit,i=parseFloat((this.value/Math.pow(1e3,o)).toPrecision(3));return this.localize.number(i,{style:"unit",unit:a,unitDisplay:this.display})}};s([l({type:Number})],yn.prototype,"value",2);s([l()],yn.prototype,"unit",2);s([l()],yn.prototype,"display",2);yn=s([E("wa-format-bytes")],yn);var gt=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(t.getMilliseconds()))return;const n=this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e});return g`<time datetime=${t.toISOString()}>${n}</time>`}};s([l()],gt.prototype,"date",2);s([l()],gt.prototype,"weekday",2);s([l()],gt.prototype,"era",2);s([l()],gt.prototype,"year",2);s([l()],gt.prototype,"month",2);s([l()],gt.prototype,"day",2);s([l()],gt.prototype,"hour",2);s([l()],gt.prototype,"minute",2);s([l()],gt.prototype,"second",2);s([l({attribute:"time-zone-name"})],gt.prototype,"timeZoneName",2);s([l({attribute:"time-zone"})],gt.prototype,"timeZone",2);s([l({attribute:"hour-format"})],gt.prototype,"hourFormat",2);gt=s([E("wa-format-date")],gt);var It=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};s([l({type:Number})],It.prototype,"value",2);s([l()],It.prototype,"type",2);s([l({attribute:"without-grouping",type:Boolean})],It.prototype,"withoutGrouping",2);s([l()],It.prototype,"currency",2);s([l({attribute:"currency-display"})],It.prototype,"currencyDisplay",2);s([l({attribute:"minimum-integer-digits",type:Number})],It.prototype,"minimumIntegerDigits",2);s([l({attribute:"minimum-fraction-digits",type:Number})],It.prototype,"minimumFractionDigits",2);s([l({attribute:"maximum-fraction-digits",type:Number})],It.prototype,"maximumFractionDigits",2);s([l({attribute:"minimum-significant-digits",type:Number})],It.prototype,"minimumSignificantDigits",2);s([l({attribute:"maximum-significant-digits",type:Number})],It.prototype,"maximumSignificantDigits",2);It=s([E("wa-format-number")],It);var Bo=new Map;function Kd(t,e="cors"){const n=Bo.get(t);if(n!==void 0)return Promise.resolve(n);const o=fetch(t,{mode:e}).then(async a=>{const i={ok:a.ok,status:a.status,html:await a.text()};return Bo.set(t,i),i});return Bo.set(t,o),o}var xi=class extends Event{constructor(t){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Xd=`:host {
  display: block;
}
`,_e=class extends A{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(n=>e.setAttribute(n.name,n.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await Kd(t,this.mode);if(t!==this.src)return;if(!e.ok){this.dispatchEvent(new xi({status:e.status}));return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(n=>this.executeScript(n)),this.dispatchEvent(new wa)}catch{this.dispatchEvent(new xi({status:-1}))}}render(){return g`<slot></slot>`}};_e.css=Xd;s([l()],_e.prototype,"src",2);s([l()],_e.prototype,"mode",2);s([l({attribute:"allow-scripts",type:Boolean})],_e.prototype,"allowScripts",2);s([k("src")],_e.prototype,"handleSrcChange",1);_e=s([E("wa-include")],_e);var Gd=class extends Event{constructor(t){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Yd=`:host {
  display: contents;
}
`,Nt=class extends A{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.dispatchEvent(new Gd({mutationList:t}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return g` <slot></slot> `}};Nt.css=Yd;s([l({reflect:!0})],Nt.prototype,"attr",2);s([l({attribute:"attr-old-value",type:Boolean,reflect:!0})],Nt.prototype,"attrOldValue",2);s([l({attribute:"char-data",type:Boolean,reflect:!0})],Nt.prototype,"charData",2);s([l({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Nt.prototype,"charDataOldValue",2);s([l({attribute:"child-list",type:Boolean,reflect:!0})],Nt.prototype,"childList",2);s([l({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);s([k("disabled")],Nt.prototype,"handleDisabledChange",1);s([k("attr",{waitUntilFirstUpdate:!0}),k("attr-old-value",{waitUntilFirstUpdate:!0}),k("char-data",{waitUntilFirstUpdate:!0}),k("char-data-old-value",{waitUntilFirstUpdate:!0}),k("childList",{waitUntilFirstUpdate:!0})],Nt.prototype,"handleChange",1);Nt=s([E("wa-mutation-observer")],Nt);var Zd=`:host {
  --arrow-size: 0.375rem;
  --max-width: 25rem;
  --show-duration: 100ms;
  --hide-duration: 100ms;

  /* Internal calculated properties */
  --arrow-diagonal-size: calc((var(--arrow-size) * sin(45deg)));

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
`,Uo=new Set,ot=class extends A{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=t=>{const e=t.target;this.anchor&&t.composedPath().includes(this.anchor)||e.closest("wa-popover")!==this&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=bo("wa-popover-"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const t=new Ve;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}Uo.forEach(e=>e.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,Uo.add(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await W(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Pe)}else{const t=new Re;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Uo.delete(this),await W(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Me)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,n=this.anchor;if(e===n)return;const{signal:o}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:o}),n&&n.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Ft(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Ft(this,"wa-after-hide")}render(){return g`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${L({popover:!0,"popover-open":this.open})}
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
    `}};ot.css=Zd;ot.dependencies={"wa-popup":U};s([x("dialog")],ot.prototype,"dialog",2);s([x(".body")],ot.prototype,"body",2);s([x("wa-popup")],ot.prototype,"popup",2);s([S()],ot.prototype,"anchor",2);s([l()],ot.prototype,"placement",2);s([l({type:Boolean,reflect:!0})],ot.prototype,"open",2);s([l({type:Number})],ot.prototype,"distance",2);s([l({type:Number})],ot.prototype,"skidding",2);s([l()],ot.prototype,"for",2);s([l({attribute:"without-arrow",type:Boolean,reflect:!0})],ot.prototype,"withoutArrow",2);s([k("open",{waitUntilFirstUpdate:!0})],ot.prototype,"handleOpenChange",1);s([k("for")],ot.prototype,"handleForChange",1);s([k(["distance","placement","skidding"])],ot.prototype,"handleOptionsChange",1);ot=s([E("wa-popover")],ot);var Qd=`:host {
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
`,Qe=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.value=0,this.indeterminate=!1,this.label=""}updated(t){t.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${D(this.value,0,100)}%`)})}render(){return g`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${z(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":g` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};Qe.css=Qd;s([l({type:Number,reflect:!0})],Qe.prototype,"value",2);s([l({type:Boolean,reflect:!0})],Qe.prototype,"indeterminate",2);s([l()],Qe.prototype,"label",2);Qe=s([E("wa-progress-bar")],Qe);var Jd=`:host {
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
`,Le=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),n=2*Math.PI*e,o=n-this.value/100*n;this.indicatorOffset=`${o}px`}}render(){return g`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="image">
          <circle class="track"></circle>
          <circle class="indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};Le.css=Jd;s([x(".indicator")],Le.prototype,"indicator",2);s([S()],Le.prototype,"indicatorOffset",2);s([l({type:Number,reflect:!0})],Le.prototype,"value",2);s([l()],Le.prototype,"label",2);Le=s([E("wa-progress-ring")],Le);var tu=`:host {
  --size: 128px;
  display: inline-block;
}

:host,
canvas {
  max-width: var(--size);
  max-height: var(--size);
  width: var(--size);
  height: var(--size);
}
`,No,St=class extends A{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(t){super.firstUpdated(t),this.hasUpdated&&this.generate()}generate(){if(this.style.setProperty("--size",`${this.size}px`),!!this.hasUpdated){if(!No){or(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(t=>{No=t.default,this.generate()});return}No.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas),this.generated=!0}}render(){return g`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
      ></canvas>
    `}};St.css=tu;s([x("canvas")],St.prototype,"canvas",2);s([l()],St.prototype,"value",2);s([l()],St.prototype,"label",2);s([l({type:Number})],St.prototype,"size",2);s([l()],St.prototype,"fill",2);s([l()],St.prototype,"background",2);s([l({type:Number})],St.prototype,"radius",2);s([l({attribute:"error-correction"})],St.prototype,"errorCorrection",2);s([S()],St.prototype,"generated",2);s([k(["background","errorCorrection","fill","radius","size","value"])],St.prototype,"generate",1);St=s([E("wa-qr-code")],St);var eu=`:host {
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
`,st=class extends K{constructor(){super(),this.hasSlotController=new At(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const n=this.value;this.value=e.value,e.checked=!0;const o=this.getAllRadios();for(const a of o)e!==a&&(a.checked=!1,a.setAttribute("tabindex","-1"));this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const t=[go({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:bo("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}get validationTarget(){const t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("value"))&&this.syncRadioElements()}formResetCallback(...t){this.value=this.defaultValue,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach((e,n)=>{e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),e.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),e.toggleAttribute("data-wa-radio-first",n===0),e.toggleAttribute("data-wa-radio-inner",n!==0&&n!==t.length-1),e.toggleAttribute("data-wa-radio-last",n===t.length-1),e.forceDisabled=this.disabled}),await Promise.all(t.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{const e=t.filter(o=>!o.disabled),n=e.find(o=>o.checked);e.length>0&&(n?e.forEach(o=>{o.tabIndex=o.checked?0:-1}):e.forEach((o,a)=>{o.tabIndex=a===0?0:-1})),t.filter(o=>o.disabled).forEach(o=>{o.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(c=>!c.disabled);if(e.length<=0)return;t.preventDefault();const n=this.value,o=e.find(c=>c.checked)??e[0],a=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let i=e.indexOf(o)+a;i||(i=0),i<0&&(i=e.length-1),i>e.length-1&&(i=0);const r=e.some(c=>c.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(c=>{c.checked=!1,r||c.setAttribute("tabindex","-1")}),this.value=e[i].value,e[i].checked=!0,r?e[i].shadowRoot.querySelector("button").focus():(e[i].setAttribute("tabindex","0"),e[i].focus()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),n=e.find(i=>i.checked),o=e.find(i=>!i.disabled),a=n||o;a&&a.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,o=this.hint?!0:!!e;return g`
      <fieldset
        part="form-control"
        class=${L({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${n?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${L({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};st.css=[dt,se,eu];st.shadowRootOptions={...K.shadowRootOptions,delegatesFocus:!0};s([x("slot:not([name])")],st.prototype,"defaultSlot",2);s([l()],st.prototype,"label",2);s([l({attribute:"hint"})],st.prototype,"hint",2);s([l({reflect:!0})],st.prototype,"name",2);s([l({type:Boolean,reflect:!0})],st.prototype,"disabled",2);s([l({reflect:!0})],st.prototype,"orientation",2);s([S()],st.prototype,"value",1);s([l({attribute:"value",reflect:!0})],st.prototype,"defaultValue",2);s([l({reflect:!0})],st.prototype,"size",2);s([l({type:Boolean,reflect:!0})],st.prototype,"required",2);s([l({type:Boolean,attribute:"with-label"})],st.prototype,"withLabel",2);s([l({type:Boolean,attribute:"with-hint"})],st.prototype,"withHint",2);st=s([E("wa-radio-group")],st);var nu=`:host {
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
  outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-brand-border-loud);
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
`,Gt=class extends K{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return g`
      <span part="control" class="control">
        ${this.checked?g`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};Gt.css=[se,dt,nu];s([S()],Gt.prototype,"checked",2);s([S()],Gt.prototype,"forceDisabled",2);s([l({reflect:!0})],Gt.prototype,"form",2);s([l({reflect:!0})],Gt.prototype,"value",2);s([l({reflect:!0})],Gt.prototype,"appearance",2);s([l({reflect:!0})],Gt.prototype,"size",2);s([l({type:Boolean})],Gt.prototype,"disabled",2);Gt=s([E("wa-radio")],Gt);var ki=class extends Event{constructor(t){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},ou=`:host {
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
`,at=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(t,e)=>e?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:n,right:o,width:a}=this.rating.getBoundingClientRect(),i=e?this.roundToPrecision((o-t)/a*this.max,this.precision):this.roundToPrecision((t-n)/a*this.max,this.precision);return D(i,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl",o=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight"){const a=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-a),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft"){const a=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+a),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}roundToPrecision(t,e=.5){const n=1/e;return Math.ceil(t*n)/n}handleHoverValueChange(){this.dispatchEvent(new ki({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new ki({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir,e=Array.from(Array(this.max).keys());let n=0;return this.disabled||this.readonly?n=this.value:n=this.isHovering?this.hoverValue:this.value,g`
      <div
        part="base"
        class=${L({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
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
          ${e.map(o=>{const a=n>=o+1;return n>o&&n<o+1?g`
                <span
                  class=${L({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(n)===o+1})}
                  role="presentation"
                >
                  <div
                    style=${_t({clipPath:t?`inset(0 ${(n-o)*100}% 0 0)`:`inset(0 0 0 ${(n-o)*100}%)`})}
                  >
                    ${Bn(this.getSymbol(o+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${_t({clipPath:t?`inset(0 0 0 ${100-(n-o)*100}%)`:`inset(0 ${100-(n-o)*100}% 0 0)`})}
                  >
                    ${Bn(this.getSymbol(o+1,!0))}
                  </div>
                </span>
              `:g`
              <span
                class=${L({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(n)===o+1,"symbol-active":n>=o+1})}
                role="presentation"
              >
                ${Bn(this.getSymbol(o+1,a))}
              </span>
            `})}
        </span>
      </div>
    `}};at.css=[dt,ou];s([x(".rating")],at.prototype,"rating",2);s([S()],at.prototype,"hoverValue",2);s([S()],at.prototype,"isHovering",2);s([l()],at.prototype,"label",2);s([l({type:Number})],at.prototype,"value",2);s([l({type:Number})],at.prototype,"max",2);s([l({type:Number})],at.prototype,"precision",2);s([l({type:Boolean,reflect:!0})],at.prototype,"readonly",2);s([l({type:Boolean,reflect:!0})],at.prototype,"disabled",2);s([l()],at.prototype,"getSymbol",2);s([l({reflect:!0})],at.prototype,"size",2);s([fo({passive:!0})],at.prototype,"handleTouchMove",1);s([k("hoverValue")],at.prototype,"handleHoverValueChange",1);s([k("isHovering")],at.prototype,"handleIsHoveringChange",1);at=s([E("wa-rating")],at);var au=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],me=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const n=e.getTime()-t.getTime(),{unit:o,value:a}=au.find(i=>Math.abs(n)<i.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(n/a),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let i;o==="minute"?i=Pn("second"):o==="hour"?i=Pn("minute"):o==="day"?i=Pn("hour"):i=Pn("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),i)}return g`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};s([S()],me.prototype,"isoTime",2);s([S()],me.prototype,"relativeTime",2);s([l()],me.prototype,"date",2);s([l()],me.prototype,"format",2);s([l()],me.prototype,"numeric",2);s([l({type:Boolean})],me.prototype,"sync",2);me=s([E("wa-relative-time")],me);function Pn(t){const n={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return n-Date.now()%n}var iu=class extends Event{constructor(t){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},su=`:host {
  display: contents;
}
`,xn=class extends A{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.dispatchEvent(new iu({entries:t}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(n=>this.resizeObserver.unobserve(n)),this.observedElements=[],e.forEach(n=>{this.resizeObserver.observe(n),this.observedElements.push(n)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return g` <slot @slotchange=${this.handleSlotChange}></slot> `}};xn.css=su;s([l({type:Boolean,reflect:!0})],xn.prototype,"disabled",2);s([k("disabled",{waitUntilFirstUpdate:!0})],xn.prototype,"handleDisabledChange",1);xn=s([E("wa-resize-observer")],xn);var ru=`:host {
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
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
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
    z-index: 2;
    right: 0;
    left: 0;
    height: var(--shadow-size);
    pointer-events: none;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
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
`,ie=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(t){t.key==="Home"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),t.key==="End"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const t=Math.ceil(this.content.clientWidth),e=Math.abs(Math.ceil(this.content.scrollLeft)),o=Math.ceil(this.content.scrollWidth)-t;this.canScroll=o>0;const a=Math.min(1,e/(o*.05)),i=Math.min(1,(o-e)/(o*.05));this.style.setProperty("--start-shadow-opacity",String(a||0)),this.style.setProperty("--end-shadow-opacity",String(i||0))}else{const t=Math.ceil(this.content.clientHeight),e=Math.abs(Math.ceil(this.content.scrollTop)),o=Math.ceil(this.content.scrollHeight)-t;this.canScroll=o>0;const a=Math.min(1,e/(o*.05)),i=Math.min(1,(o-e)/(o*.05));this.style.setProperty("--start-shadow-opacity",String(a||0)),this.style.setProperty("--end-shadow-opacity",String(i||0))}}render(){return g`
      ${this.withoutShadow?"":g`
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
    `}};ie.css=[ru];s([x("#content")],ie.prototype,"content",2);s([S()],ie.prototype,"canScroll",2);s([l({reflect:!0})],ie.prototype,"orientation",2);s([l({attribute:"without-scrollbar",type:Boolean,reflect:!0})],ie.prototype,"withoutScrollbar",2);s([l({attribute:"without-shadow",type:Boolean,reflect:!0})],ie.prototype,"withoutShadow",2);s([fo({passive:!0})],ie.prototype,"updateScroll",1);ie=s([E("wa-scroller")],ie);var lu=`:host {
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
  width: 100%;
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
`,M=class extends K{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new At(this,"hint","label"),this.localize=new V(this),this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.form=null,this.required=!1,this.getTag=t=>g`
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
        >
          ${t.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,n=e.closest('[part~="clear-button"]')!==null,o=e.closest("wa-button")!==null;if(!(n||o)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const a=this.getAllOptions(),i=a.indexOf(this.currentOption);let r=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(r=i+1,r>a.length-1&&(r=0)):t.key==="ArrowUp"?(r=i-1,r<0&&(r=a.length-1)):t.key==="Home"?r=0:t.key==="End"&&(r=a.length-1),this.setCurrentOption(a[r])}if(t.key?.length===1||t.key==="Backspace"){const a=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const i of a)if(i.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){const t=[go({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]),this._value=t??null,this.value!==e&&(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),t==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(n=>!n.disabled).map(n=>n.value));let e=t;return t!=null&&(e=t.filter(n=>this.optionValues.has(n)),e=this.multiple?e:e[0],e=e??null),e}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const e=this.getAllOptions().filter(n=>n.hasAttribute("selected")||n.defaultSelected);if(e.length>0){const n=e.map(o=>o.value);this._defaultValue=this.multiple?n:n[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){const n=t.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="wa-button");this.disabled||n||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==null&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new as),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const n=t.target.closest("wa-option");n&&!n.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(n):this.setSelectedOptions(n),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);const n=t.filter(o=>e.includes(o.value));this.setSelectedOptions(n)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;let n=e;if(!n){const o=t.target.closest("wa-tag[part~=tag]");if(o){const a=this.shadowRoot?.querySelector('[part="tags"]');if(a){const r=Array.from(a.children).indexOf(o);r>=0&&r<this.selectedOptions.length&&(n=this.selectedOptions[r])}}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(n=>{n.current=!1,n.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),n=Array.isArray(t)?t:[t];e.forEach(o=>{n.includes(o)||(o.selected=!1)}),n.length&&n.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions();this.selectedOptions=t.filter(n=>{if(!this.hasInteracted&&!this.valueHasChanged){const o=this.defaultValue,a=Array.isArray(o)?o:[o];return n.hasAttribute("selected")||n.defaultSelected||n.selected||a?.includes(n.value)}return n.selected});let e=new Set(this.selectedOptions.map(n=>n.value));if(e.size>0||this._value){const n=this._value;if(this._value==null){let o=this.defaultValue??[];this._value=Array.isArray(o)?o:[o]}this._value=this._value?.filter(o=>!this.optionValues?.has(o))??null,this._value?.unshift(...e),this.requestUpdate("value",n)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.displayLabel=n?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const n=this.getTag(t,e);return n?typeof n=="string"?Bn(n):n:null}else if(e===this.maxOptionsVisible)return g`
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
        `;return null})}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],n=t.filter(o=>e.includes(o.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const t=new Ve;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await W(this.popup.popup,"show"),this.currentOption&&aa(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Pe)}else{const t=new Re;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await W(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Me)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ft(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ft(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,o=this.hint?!0:!!e,a=(this.hasUpdated||Sr)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,i=!!(this.placeholder&&(!this.value||this.value.length===0));return g`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class="label"
          aria-hidden=${n?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${L({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":i})}
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
              ${this.multiple&&this.hasUpdated?g`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

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

              ${a?g`
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
          class=${L({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};M.css=[lu,se,dt];s([x(".select")],M.prototype,"popup",2);s([x(".combobox")],M.prototype,"combobox",2);s([x(".display-input")],M.prototype,"displayInput",2);s([x(".value-input")],M.prototype,"valueInput",2);s([x(".listbox")],M.prototype,"listbox",2);s([S()],M.prototype,"displayLabel",2);s([S()],M.prototype,"currentOption",2);s([S()],M.prototype,"selectedOptions",2);s([S()],M.prototype,"optionValues",2);s([l()],M.prototype,"name",2);s([l({attribute:!1})],M.prototype,"defaultValue",1);s([l({attribute:"value",reflect:!1})],M.prototype,"value",1);s([l({reflect:!0})],M.prototype,"size",2);s([l()],M.prototype,"placeholder",2);s([l({type:Boolean,reflect:!0})],M.prototype,"multiple",2);s([l({attribute:"max-options-visible",type:Number})],M.prototype,"maxOptionsVisible",2);s([l({type:Boolean})],M.prototype,"disabled",2);s([l({attribute:"with-clear",type:Boolean})],M.prototype,"withClear",2);s([l({type:Boolean,reflect:!0})],M.prototype,"open",2);s([l({reflect:!0})],M.prototype,"appearance",2);s([l({type:Boolean,reflect:!0})],M.prototype,"pill",2);s([l()],M.prototype,"label",2);s([l({reflect:!0})],M.prototype,"placement",2);s([l({attribute:"hint"})],M.prototype,"hint",2);s([l({attribute:"with-label",type:Boolean})],M.prototype,"withLabel",2);s([l({attribute:"with-hint",type:Boolean})],M.prototype,"withHint",2);s([l({reflect:!0})],M.prototype,"form",2);s([l({type:Boolean,reflect:!0})],M.prototype,"required",2);s([l({attribute:!1})],M.prototype,"getTag",2);s([k("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);s([k("value",{waitUntilFirstUpdate:!0})],M.prototype,"handleValueChange",1);s([k("open",{waitUntilFirstUpdate:!0})],M.prototype,"handleOpenChange",1);M=s([E("wa-select")],M);var cu=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},hu=`@layer wa-component {
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
  color: inherit;
  line-height: 1;
}

[part='remove-button']::part(base) {
  padding: 0;
  height: 1em;
  width: 1em;
}

@media (hover: hover) {
  :host(:hover) > [part='remove-button']::part(base) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }
}

:host(:active) > [part='remove-button']::part(base) {
  color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
}

/*
 * Pill modifier
 */
:host([pill]) {
  border-radius: var(--wa-border-radius-pill);
}
`,be=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new cu)}render(){return g`
      <slot part="content" class="content"></slot>

      ${this.withRemove?g`
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
    `}};be.css=[hu,kn,dt];s([l({reflect:!0})],be.prototype,"variant",2);s([l({reflect:!0})],be.prototype,"appearance",2);s([l({reflect:!0})],be.prototype,"size",2);s([l({type:Boolean,reflect:!0})],be.prototype,"pill",2);s([l({attribute:"with-remove",type:Boolean})],be.prototype,"withRemove",2);be=s([E("wa-tag")],be);function dn(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(a=>dn(a,--e)).join("");let n=t;if(n.nodeType===Node.TEXT_NODE)return n.textContent??"";if(n.nodeType===Node.ELEMENT_NODE){let o=n;if(o.hasAttribute("slot")||o.matches("style, script"))return"";if(o instanceof HTMLSlotElement){let a=o.assignedNodes({flatten:!0});if(a.length>0)return dn(a,--e)}return e>-1?dn(o,--e):o.textContent??""}return n.hasChildNodes()?dn(n.childNodes,--e):""}var du=`:host {
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
`,qt=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){const e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?customElements.whenDefined("wa-select").then(()=>{const t=this.closest("wa-select");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())}):this.isInitialized=!0}willUpdate(t){if(t.has("defaultSelected")&&!this.closest("wa-select")?.hasInteracted){const e=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",e)}super.willUpdate(t)}updated(t){super.updated(t),t.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let t=this.defaultLabel;this.defaultLabel=dn(this).trim();let e=this.defaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){return g`
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
    `}};qt.css=du;s([x(".label")],qt.prototype,"defaultSlot",2);s([S()],qt.prototype,"current",2);s([l({reflect:!0})],qt.prototype,"value",2);s([l({type:Boolean})],qt.prototype,"disabled",2);s([l({type:Boolean,attribute:!1})],qt.prototype,"selected",2);s([l({type:Boolean,attribute:"selected"})],qt.prototype,"defaultSelected",2);s([l()],qt.prototype,"label",1);s([S()],qt.prototype,"defaultLabel",2);qt=s([E("wa-option")],qt);var uu=`:host {
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
`,no=class extends A{constructor(){super(...arguments),this.effect="none"}render(){return g` <div part="indicator" class="indicator"></div> `}};no.css=uu;s([l({reflect:!0})],no.prototype,"effect",2);no=s([E("wa-skeleton")],no);var pu=()=>{const t=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(e){const n={message:"",isValid:!0,invalidKeys:[]},o=(a,i,r,c)=>{const h=document.createElement("input");return h.type="range",h.min=String(i),h.max=String(r),h.step=String(c),h.value=String(a),h.checkValidity(),h.validationMessage};if(e.required&&!e.hasInteracted)return n.isValid=!1,n.invalidKeys.push("valueMissing"),n.message=t.validationMessage||"Please fill out this field.",n;if(e.isRange){const a=e.minValue,i=e.maxValue;if(a<e.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=o(a,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,n;if(i>e.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=o(i,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,n;if(e.step&&e.step!==1){const r=(a-e.min)%e.step!==0,c=(i-e.min)%e.step!==0;if(r||c){n.isValid=!1,n.invalidKeys.push("stepMismatch");const h=r?a:i;return n.message=o(h,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,n}}}else{const a=e.value;if(a<e.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=o(a,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,n;if(a>e.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=o(a,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,n;if(e.step&&e.step!==1&&(a-e.min)%e.step!==0)return n.isValid=!1,n.invalidKeys.push("stepMismatch"),n.message=o(a,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,n}return n}}},fu=`:host {
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
`,P=class extends K{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new At(this,"hint","label"),this.localize=new V(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.form=null,this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,pu()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new _n(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new _n(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new _n(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const n=this.getValueFromCoordinates(t,e),o=Math.abs(n-this.minValue),a=Math.abs(n-this.maxValue);if(o===a)if(n>this.maxValue)this.activeThumb="max";else if(n<this.minValue)this.activeThumb="min";else{const i=this.localize.dir()==="rtl",r=this.orientation==="vertical",c=r?e:t,h=this.lastTrackPosition||c;this.lastTrackPosition=c;const d=c>h!==i&&!r||c<h&&r;this.activeThumb=d?"max":"min"}else this.activeThumb=o<=a?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new _n(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(t){if(t.has("range")&&this.requestUpdate(),this.isRange?(t.has("minValue")||t.has("maxValue"))&&(this.minValue=D(this.minValue,this.min,this.maxValue),this.maxValue=D(this.maxValue,this.minValue,this.max),this.updateFormValue()):t.has("value")&&(this.value=D(this.value,this.min,this.max),this.setValue(String(this.value))),(t.has("min")||t.has("max"))&&(this.isRange?(this.minValue=D(this.minValue,this.min,this.max),this.maxValue=D(this.maxValue,this.min,this.max)):this.value=D(this.value,this.min,this.max)),t.has("disabled")&&this.customStates.set("disabled",this.disabled),t.has("disabled")||t.has("readonly")){const e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length;return t=Math.round(t/this.step)*this.step,t=D(t,this.min,this.max),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const n=this.localize.dir()==="rtl",o=this.orientation==="vertical",{top:a,right:i,bottom:r,left:c,height:h,width:d}=this.trackBoundingClientRect,u=o?e:t,p=o?{start:a,end:r,size:h}:{start:c,end:i,size:d},m=(o||n?p.end-u:u-p.start)/p.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*m)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e=this.localize.dir()==="rtl",n=t.target;if(this.disabled||this.readonly||this.isRange&&(n===this.thumbMin?this.activeThumb="min":n===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const o=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let a=o;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),a=this.clampAndRoundToStep(o+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),a=this.clampAndRoundToStep(o-this.step);break;case"Home":t.preventDefault(),a=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),a=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();const i=Math.max(o+(this.max-this.min)/10,o+this.step);a=this.clampAndRoundToStep(i);break;case"PageDown":t.preventDefault();const r=Math.min(o-(this.max-this.min)/10,o-this.step);a=this.clampAndRoundToStep(r);break;case"Enter":is(t,this);return}a!==o&&(this.isRange?(this.activeThumb==="min"?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),this.updateFormValue()):this.value=D(a,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const n=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,n){const o=this.getValueFromCoordinates(t,e),a=n==="min"?this.minValue:this.maxValue;n==="min"?o>this.maxValue?(this.maxValue=o,this.minValue=o):this.minValue=Math.max(this.min,o):o<this.minValue?(this.minValue=o,this.maxValue=o):this.maxValue=Math.min(this.max,o),a!==(n==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(){if(this.isRange){const t=new FormData;t.append(this.name||"",String(this.minValue)),t.append(this.name||"",String(this.maxValue)),this.setValue(t)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=D(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=D(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("hint"),n=this.label?!0:!!t,o=this.hint?!0:!!e,a=this.hasSlotController.test("reference"),i=L({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),r=[];if(this.withMarkers)for(let f=this.min;f<=this.max;f+=this.step)r.push(this.getPercentageFromValue(f));const c=g`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${L({vh:!n})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,h=g`
      <div
        id="hint"
        part="hint"
        class=${L({"has-slotted":o})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,d=this.withMarkers?g`
          <div id="markers" part="markers">
            ${r.map(f=>g`<span part="marker" class="marker" style="--position: ${f}%"></span>`)}
          </div>
        `:"",u=a?g`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",p=(f,m)=>this.withTooltip?g`
            <wa-tooltip
              id=${`tooltip${f!=="thumb"?"-"+f:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${f}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(m):this.localize.number(m)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const f=D(this.getPercentageFromValue(this.minValue),0,100),m=D(this.getPercentageFromValue(this.maxValue),0,100);return g`
        ${c}

        <div id="slider" part="slider" class=${i}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(f,m)}%; --end: ${Math.max(f,m)}%"
            ></div>

            ${d}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${f}%"
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
              style="--position: ${m}%"
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

          ${u} ${h}
        </div>

        ${p("thumb-min",this.minValue)} ${p("thumb-max",this.maxValue)}
      `}else{const f=D(this.getPercentageFromValue(this.value),0,100),m=D(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return g`
        ${c}

        <div
          id="slider"
          part="slider"
          class=${i}
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
              style="--start: ${m}%; --end: ${f}%"
            ></div>

            ${d}
            <span id="thumb" part="thumb" style="--position: ${f}%"></span>
          </div>

          ${u} ${h}
        </div>

        ${p("thumb",this.value)}
      `}}};P.formAssociated=!0;P.observeSlots=!0;P.css=[dt,se,fu];s([x("#slider")],P.prototype,"slider",2);s([x("#thumb")],P.prototype,"thumb",2);s([x("#thumb-min")],P.prototype,"thumbMin",2);s([x("#thumb-max")],P.prototype,"thumbMax",2);s([x("#track")],P.prototype,"track",2);s([x("#tooltip")],P.prototype,"tooltip",2);s([l()],P.prototype,"label",2);s([l({attribute:"hint"})],P.prototype,"hint",2);s([l({reflect:!0})],P.prototype,"name",2);s([l({type:Number,attribute:"min-value"})],P.prototype,"minValue",2);s([l({type:Number,attribute:"max-value"})],P.prototype,"maxValue",2);s([l({attribute:"value",reflect:!0,type:Number})],P.prototype,"defaultValue",2);s([S()],P.prototype,"value",1);s([l({type:Boolean,reflect:!0})],P.prototype,"range",2);s([l({type:Boolean})],P.prototype,"disabled",2);s([l({type:Boolean,reflect:!0})],P.prototype,"readonly",2);s([l({reflect:!0})],P.prototype,"orientation",2);s([l({reflect:!0})],P.prototype,"size",2);s([l({attribute:"indicator-offset",type:Number})],P.prototype,"indicatorOffset",2);s([l({reflect:!0})],P.prototype,"form",2);s([l({type:Number})],P.prototype,"min",2);s([l({type:Number})],P.prototype,"max",2);s([l({type:Number})],P.prototype,"step",2);s([l({type:Boolean,reflect:!0})],P.prototype,"required",2);s([l({type:Boolean})],P.prototype,"autofocus",2);s([l({attribute:"tooltip-distance",type:Number})],P.prototype,"tooltipDistance",2);s([l({attribute:"tooltip-placement",reflect:!0})],P.prototype,"tooltipPlacement",2);s([l({attribute:"with-markers",type:Boolean})],P.prototype,"withMarkers",2);s([l({attribute:"with-tooltip",type:Boolean})],P.prototype,"withTooltip",2);s([l({attribute:!1})],P.prototype,"valueFormatter",2);P=s([E("wa-slider")],P);var mu=`:host {
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
`,vt=class extends A{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new V(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),mn(this,{onMove:(n,o)=>{let a=this.orientation==="vertical"?o:n;this.primary==="end"&&(a=this.size-a),this.snap&&this.snap.split(" ").forEach(r=>{let c;r.endsWith("%")?c=this.size*(parseFloat(r)/100):c=parseFloat(r),e&&this.orientation==="horizontal"&&(c=this.size-c),a>=c-this.snapThreshold&&a<=c+this.snapThreshold&&(a=c)}),this.position=D(this.pixelsToPercentage(a),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const n=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&this.orientation==="horizontal"||t.key==="ArrowUp"&&this.orientation==="vertical")&&(e-=n),(t.key==="ArrowRight"&&this.orientation==="horizontal"||t.key==="ArrowDown"&&this.orientation==="vertical")&&(e+=n),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const o=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=o})}this.position=D(e,0,100)}}handleResize(t){const{width:e,height:n}=t[0].contentRect;this.size=this.orientation==="vertical"?n:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new ss)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",e=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",n=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,a="auto";return this.style||(this.style={}),this.primary==="end"?n&&this.orientation==="horizontal"?this.style[t]=`${o} var(--divider-width) ${a}`:this.style[t]=`${a} var(--divider-width) ${o}`:n&&this.orientation==="horizontal"?this.style[t]=`${a} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${a}`,this.style[e]="",g`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${z(this.disabled?void 0:"0")}
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
    `}};vt.css=mu;s([x(".divider")],vt.prototype,"divider",2);s([l({type:Number,reflect:!0})],vt.prototype,"position",2);s([l({attribute:"position-in-pixels",type:Number})],vt.prototype,"positionInPixels",2);s([l({reflect:!0})],vt.prototype,"orientation",2);s([l({type:Boolean,reflect:!0})],vt.prototype,"disabled",2);s([l()],vt.prototype,"primary",2);s([l()],vt.prototype,"snap",2);s([l({type:Number,attribute:"snap-threshold"})],vt.prototype,"snapThreshold",2);s([k("position")],vt.prototype,"handlePositionChange",1);s([k("positionInPixels")],vt.prototype,"handlePositionInPixelsChange",1);s([k("vertical")],vt.prototype,"handleVerticalChange",1);vt=s([E("wa-split-panel")],vt);var bu=`:host {
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
`,Q=class extends K{constructor(){super(...arguments),this.hasSlotController=new At(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,mo()]}get value(){return this._value??"on"}set value(t){this._value=t}firstUpdated(t){super.firstUpdated(t),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,e=this.hint?!0:!!t;return g`
      <label
        part="base"
        class=${L({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${z(this.value)}
          .checked=${je(this.checked)}
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
        class=${L({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};Q.shadowRootOptions={...K.shadowRootOptions,delegatesFocus:!0};Q.css=[se,dt,bu];s([x('input[type="checkbox"]')],Q.prototype,"input",2);s([l()],Q.prototype,"title",2);s([l({reflect:!0})],Q.prototype,"name",2);s([l({reflect:!0})],Q.prototype,"value",1);s([l({reflect:!0})],Q.prototype,"size",2);s([l({type:Boolean})],Q.prototype,"disabled",2);s([l({type:Boolean,attribute:!1})],Q.prototype,"checked",2);s([l({type:Boolean,attribute:"checked",reflect:!0})],Q.prototype,"defaultChecked",2);s([l({reflect:!0})],Q.prototype,"form",2);s([l({type:Boolean,reflect:!0})],Q.prototype,"required",2);s([l({attribute:"hint"})],Q.prototype,"hint",2);s([l({attribute:"with-hint",type:Boolean})],Q.prototype,"withHint",2);s([k("defaultChecked")],Q.prototype,"handleDefaultCheckedChange",1);s([k(["checked"])],Q.prototype,"handleStateChange",1);s([k("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);Q=s([E("wa-switch")],Q);var gu=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},vu=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},wu=`:host {
  --indicator-color: var(--wa-color-brand-fill-loud);
  --track-color: var(--wa-color-neutral-fill-normal);
  --track-width: 0.125rem;

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
  border-bottom: solid var(--track-width) var(--track-color);
}

.tab-group-top .indicator {
  bottom: calc(-1 * var(--track-width));
  border-bottom: solid var(--track-width) var(--indicator-color);
}

.tab-group-top .body {
  order: 2;
}

.tab-group-top ::slotted(wa-tab[active]) {
  border-block-end: solid var(--track-width) var(--indicator-color);
  margin-block-end: calc(-1 * var(--track-width));
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
  border-top: solid var(--track-width) var(--track-color);
}

.tab-group-bottom .indicator {
  top: calc(-1 * var(--track-width));
  border-top: solid var(--track-width) var(--indicator-color);
}

.tab-group-bottom .body {
  order: 1;
}

.tab-group-bottom ::slotted(wa-tab[active]) {
  border-block-start: solid var(--track-width) var(--indicator-color);
  margin-block-start: calc(-1 * var(--track-width));
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
  border-inline-end: solid var(--track-width) var(--track-color);
}

.tab-group-start .indicator {
  inset-inline-end: calc(-1 * var(--track-width));
  border-right: solid var(--track-width) var(--indicator-color);
}

.tab-group-start .body {
  flex: 1 1 auto;
  order: 2;
}

.tab-group-start ::slotted(wa-tab[active]) {
  border-inline-end: solid var(--track-width) var(--indicator-color);
  margin-inline-end: calc(-1 * var(--track-width));
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
  border-left: solid var(--track-width) var(--track-color);
}

.tab-group-end .indicator {
  inset-inline-start: calc(-1 * var(--track-width));
  border-inline-start: solid var(--track-width) var(--indicator-color);
}

.tab-group-end .body {
  flex: 1 1 auto;
  order: 1;
}

.tab-group-end ::slotted(wa-tab[active]) {
  border-inline-start: solid var(--track-width) var(--indicator-color);
  margin-inline-start: calc(-1 * var(--track-width));
}

.tab-group-end ::slotted(wa-tab-panel) {
  --padding: 0 var(--wa-space-xl);
}
`,$t=class extends A{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new V(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(n=>!["aria-labelledby","aria-controls"].includes(n.attributeName))&&setTimeout(()=>this.setAriaLabels());const e=t.filter(n=>n.target.closest("wa-tab-group")===this);if(e.some(n=>n.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(n=>n.attributeName==="active")){const o=e.filter(a=>a.attributeName==="active"&&a.target.tagName.toLowerCase()==="wa-tab").map(a=>a.target).find(a=>a.active);o&&o.closest("wa-tab-group")===this&&this.setActiveTab(o)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,n)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const o=this.tabs.find(a=>a.panel===this.active);o&&this.setActiveTab(o)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});n.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const n=t.target.closest("wa-tab");n?.closest("wa-tab-group")===this&&n!==null&&this.setActiveTab(n,{scrollBehavior:"smooth"})}handleKeyDown(t){const n=t.target.closest("wa-tab");if(n?.closest("wa-tab-group")===this){if(["Enter"," "].includes(t.key)){n!==null&&(this.setActiveTab(n,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const a=this.tabs.find(c=>c.matches(":focus")),i=this.localize.dir()==="rtl";let r=null;if(a?.tagName.toLowerCase()==="wa-tab"){if(t.key==="Home")r=this.focusableTabs[0];else if(t.key==="End")r=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const c=this.tabs.findIndex(h=>h===a);r=this.findNextFocusableTab(c,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const c=this.tabs.findIndex(h=>h===a);r=this.findNextFocusableTab(c,"forward")}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(r,{scrollBehavior:"smooth"}):this.tabs.forEach(c=>{c.tabIndex=c===r?0:-1}),["top","bottom"].includes(this.placement)&&aa(r,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,e){let n=null;const o=e==="forward"?1:-1;let a=t+o;for(;t<this.tabs.length;){if(n=this.tabs[a]||null,n===null){e==="forward"?n=this.focusableTabs[0]:n=this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;a+=o}return n}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){const n=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>o.active=o.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&aa(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(n&&this.dispatchEvent(new gu({name:n.panel})),this.dispatchEvent(new vu({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(n=>n.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const t=this.tabs.find(e=>e.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return g`
      <div
        part="base"
        class=${L({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?g`
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

          ${this.hasScrollControls?g`
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
    `}};$t.css=wu;s([x(".tab-group")],$t.prototype,"tabGroup",2);s([x(".body")],$t.prototype,"body",2);s([x(".nav")],$t.prototype,"nav",2);s([S()],$t.prototype,"hasScrollControls",2);s([l({reflect:!0})],$t.prototype,"active",2);s([l()],$t.prototype,"placement",2);s([l()],$t.prototype,"activation",2);s([l({attribute:"without-scroll-controls",type:Boolean})],$t.prototype,"withoutScrollControls",2);s([k("active")],$t.prototype,"updateActiveTab",1);s([k("withoutScrollControls",{waitUntilFirstUpdate:!0})],$t.prototype,"updateScrollControls",1);$t=s([E("wa-tab-group")],$t);var yu=`:host {
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
`,xu=0,Yt=class extends A{constructor(){super(...arguments),this.attrId=++xu,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,g`
      <div
        part="base"
        class=${L({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Yt.css=yu;s([x(".tab")],Yt.prototype,"tab",2);s([l({reflect:!0})],Yt.prototype,"panel",2);s([l({type:Boolean,reflect:!0})],Yt.prototype,"active",2);s([l({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);s([l({type:Number,reflect:!0})],Yt.prototype,"tabIndex",2);s([k("active")],Yt.prototype,"handleActiveChange",1);s([k("disabled")],Yt.prototype,"handleDisabledChange",1);Yt=s([E("wa-tab")],Yt);var ku=`:host {
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
`,Cu=0,Je=class extends A{constructor(){super(...arguments),this.attrId=++Cu,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return g`
      <slot
        part="base"
        class=${L({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Je.css=ku;s([l({reflect:!0})],Je.prototype,"name",2);s([l({type:Boolean,reflect:!0})],Je.prototype,"active",2);s([k("active")],Je.prototype,"handleActiveChange",1);Je=s([E("wa-tab-panel")],Je);var Eu=`:host {
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
`,R=class extends K{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new At(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,mo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const t=this.input.value;this.value=t}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${t}px`}if(this.input.style.height){const t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${t}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&this.setTextareaDimensions(),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,o="preserve"){const a=e??this.input.selectionStart,i=n??this.input.selectionEnd;this.input.setRangeText(t,a,i,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,o=this.hint?!0:!!e;return g`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${z(this.name)}
          .value=${je(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${z(this.placeholder)}
          rows=${z(this.rows)}
          minlength=${z(this.minlength)}
          maxlength=${z(this.maxlength)}
          autocapitalize=${z(this.autocapitalize)}
          autocorrect=${z(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${z(this.spellcheck)}
          enterkeyhint=${z(this.enterkeyhint)}
          inputmode=${z(this.inputmode)}
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
        class=${L({"has-slotted":o})}
        >${this.hint}</slot
      >
    `}};R.css=[Eu,se,dt];s([x(".control")],R.prototype,"input",2);s([x('[part~="base"]')],R.prototype,"base",2);s([x(".size-adjuster")],R.prototype,"sizeAdjuster",2);s([l()],R.prototype,"title",2);s([l({reflect:!0})],R.prototype,"name",2);s([S()],R.prototype,"value",1);s([l({attribute:"value",reflect:!0})],R.prototype,"defaultValue",2);s([l({reflect:!0})],R.prototype,"size",2);s([l({reflect:!0})],R.prototype,"appearance",2);s([l()],R.prototype,"label",2);s([l({attribute:"hint"})],R.prototype,"hint",2);s([l()],R.prototype,"placeholder",2);s([l({type:Number})],R.prototype,"rows",2);s([l({reflect:!0})],R.prototype,"resize",2);s([l({type:Boolean})],R.prototype,"disabled",2);s([l({type:Boolean,reflect:!0})],R.prototype,"readonly",2);s([l({reflect:!0})],R.prototype,"form",2);s([l({type:Boolean,reflect:!0})],R.prototype,"required",2);s([l({type:Number})],R.prototype,"minlength",2);s([l({type:Number})],R.prototype,"maxlength",2);s([l()],R.prototype,"autocapitalize",2);s([l()],R.prototype,"autocorrect",2);s([l()],R.prototype,"autocomplete",2);s([l({type:Boolean})],R.prototype,"autofocus",2);s([l()],R.prototype,"enterkeyhint",2);s([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],R.prototype,"spellcheck",2);s([l()],R.prototype,"inputmode",2);s([l({attribute:"with-label",type:Boolean})],R.prototype,"withLabel",2);s([l({attribute:"with-hint",type:Boolean})],R.prototype,"withHint",2);s([k("rows",{waitUntilFirstUpdate:!0})],R.prototype,"handleRowsChange",1);s([k("value",{waitUntilFirstUpdate:!0})],R.prototype,"handleValueChange",1);R=s([E("wa-textarea")],R);var Su=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},$u=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}},Au=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},zu=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}},Tu=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}},_u=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}},Lu=`:host {
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

.tree-item-expanded slot[name='expand-icon'],
.tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
  display: none;
}

.tree-item:not(.tree-item-has-expand-button) .expand-icon-slot {
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
`,F=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new Au);const t=Yn(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await Gn(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new Su)}isNestedItem(){const t=this.parentElement;return!!t&&F.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new zu),this.childrenContainer.hidden=!1;const t=Yn(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await Gn(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new $u)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new _u)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new Tu)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>F.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return g`
      <div
        part="base"
        class="${L({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-has-expand-button":e})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${L({"expand-button":!0,"expand-button-visible":e})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${Ja(this.loading,()=>g` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `)}
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${Ja(this.selectable,()=>g`
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
                ?checked="${je(this.selected)}"
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
    `}};F.css=Lu;s([S()],F.prototype,"indeterminate",2);s([S()],F.prototype,"isLeaf",2);s([S()],F.prototype,"loading",2);s([S()],F.prototype,"selectable",2);s([l({type:Boolean,reflect:!0})],F.prototype,"expanded",2);s([l({type:Boolean,reflect:!0})],F.prototype,"selected",2);s([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2);s([l({type:Boolean,reflect:!0})],F.prototype,"lazy",2);s([x("slot:not([name])")],F.prototype,"defaultSlot",2);s([x("slot[name=children]")],F.prototype,"childrenSlot",2);s([x(".item")],F.prototype,"itemElement",2);s([x(".children")],F.prototype,"childrenContainer",2);s([x(".expand-button slot")],F.prototype,"expandButtonSlot",2);s([k("loading",{waitUntilFirstUpdate:!0})],F.prototype,"handleLoadingChange",1);s([k("disabled")],F.prototype,"handleDisabledChange",1);s([k("expanded")],F.prototype,"handleExpandedState",1);s([k("indeterminate")],F.prototype,"handleIndeterminateStateChange",1);s([k("selected")],F.prototype,"handleSelectedChange",1);s([k("expanded",{waitUntilFirstUpdate:!0})],F.prototype,"handleExpandedChange",1);s([k("expanded",{waitUntilFirstUpdate:!0})],F.prototype,"handleExpandAnimation",1);s([k("lazy",{waitUntilFirstUpdate:!0})],F.prototype,"handleLazyChange",1);F=s([E("wa-tree-item")],F);var Ou=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Iu=`:host {
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
`;function Ci(t,e=!1){function n(i){const r=i.getChildrenItems({includeDisabled:!1});if(r.length){const c=r.every(d=>d.selected),h=r.every(d=>!d.selected&&!d.indeterminate);i.selected=c,i.indeterminate=!c&&!h}}function o(i){const r=i.parentElement;F.isTreeItem(r)&&(n(r),o(r))}function a(i){for(const r of i.getChildrenItems())r.selected=e?i.selected||r.selected:!r.disabled&&i.selected,a(r);e&&n(i)}a(t),o(t)}var ge=class extends A{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new V(this),this.initTreeItem=t=>{t.updateComplete.then(()=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const n=t.querySelector(`[slot="${e}-icon"]`),o=this.getExpandButtonIcon(e);o&&(n===null?t.append(o):n.hasAttribute("data-default")&&n.replaceWith(o))})})},this.handleTreeChanged=t=>{for(const e of t){const n=[...e.addedNodes].filter(F.isTreeItem),o=[...e.removedNodes].filter(F.isTreeItem);n.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),F.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){const n=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(n){const o=n.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach(a=>a.removeAttribute("id")),o.setAttribute("data-default",""),o.slot=`${t}-icon`,o}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Ci(t);else if(this.selection==="single"||t.isLeaf){const o=this.getAllTreeItems();for(const a of o)a.selected=a===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const n=this.selectedItems;(e.length!==n.length||n.some(o=>!e.includes(o)))&&Promise.all(n.map(o=>o.updateComplete)).then(()=>{this.dispatchEvent(new Ou({selection:n}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(a=>["input","textarea"].includes(a?.tagName?.toLowerCase())))return;const e=this.getFocusableItems(),n=this.matches(":dir(ltr)"),o=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const a=e.findIndex(h=>h.matches(":focus")),i=e[a],r=h=>{const d=e[D(h,0,e.length-1)];this.focusItem(d)},c=h=>{i.expanded=h};t.key==="ArrowDown"?r(a+1):t.key==="ArrowUp"?r(a-1):n&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft"?!i||i.disabled||i.expanded||i.isLeaf&&!i.lazy?r(a+1):c(!0):n&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight"?!i||i.disabled||i.isLeaf||!i.expanded?r(a-1):c(!1):t.key==="Home"?r(0):t.key==="End"?r(e.length-1):(t.key==="Enter"||t.key===" ")&&(i.disabled||this.selectItem(i))}}handleClick(t){const e=t.target,n=e.closest("wa-tree-item"),o=t.composedPath().some(a=>a?.classList?.contains("expand-button"));!n||n.disabled||e!==this.clickTarget||(o?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const n of e)n.updateComplete.then(()=>{n.selectable=t});t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(n=>{n.updateComplete.then(()=>{Ci(n,!0)})}))}get selectedItems(){const t=this.getAllTreeItems(),e=n=>n.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(n=>{if(n.disabled)return!1;const o=n.parentElement?.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(n),!e.has(n)})}render(){return g`
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
    `}};ge.css=Iu;s([x("slot:not([name])")],ge.prototype,"defaultSlot",2);s([x("slot[name=expand-icon]")],ge.prototype,"expandedIconSlot",2);s([x("slot[name=collapse-icon]")],ge.prototype,"collapsedIconSlot",2);s([l()],ge.prototype,"selection",2);s([k("selection")],ge.prototype,"handleSelectionChange",1);ge=s([E("wa-tree")],ge);var Du=`:host {
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
`,wt=class extends A{constructor(){super(...arguments),this.localize=new V(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(t){const e=Aa(t),n=[];for(const o of e){let a;if(o.endsWith("%")){const i=parseFloat(o.slice(0,-1));if(!isNaN(i))a=Math.max(0,i/100);else continue}else if(a=parseFloat(o),!isNaN(a))a=Math.max(0,a);else continue;n.push(a)}return[...new Set(n)].sort((o,a)=>o-a)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let t=0,e=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let n=1;n<this.availableZoomLevels.length;n++){const o=Math.abs(this.availableZoomLevels[n]-this.zoom);o<e&&(e=o,t=n)}return t}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(t){if(t.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),t.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const e=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[e]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[e])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const t=this.getCurrentZoomIndex();t<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[t+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const t=this.getCurrentZoomIndex();t>0&&(this.zoom=this.availableZoomLevels[t-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return g`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${z(this.sandbox??void 0)}
          src=${z(this.src??void 0)}
          srcdoc=${z(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?"":g`
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
    `}};wt.css=Du;s([x("#iframe")],wt.prototype,"iframe",2);s([l()],wt.prototype,"src",2);s([l()],wt.prototype,"srcdoc",2);s([l({type:Boolean})],wt.prototype,"allowfullscreen",2);s([l()],wt.prototype,"loading",2);s([l()],wt.prototype,"referrerpolicy",2);s([l()],wt.prototype,"sandbox",2);s([l({type:Number,reflect:!0})],wt.prototype,"zoom",2);s([l({attribute:"zoom-levels"})],wt.prototype,"zoomLevels",2);s([l({type:Boolean,attribute:"without-controls",reflect:!0})],wt.prototype,"withoutControls",2);s([l({type:Boolean,attribute:"without-interaction",reflect:!0})],wt.prototype,"withoutInteraction",2);wt=s([E("wa-zoomable-frame")],wt);var Mu=new MutationObserver(t=>{for(const{addedNodes:e}of t)for(const n of e)n.nodeType===Node.ELEMENT_NODE&&Cs(n)});function Pu(){Cs(document),Mu.observe(document.documentElement,{subtree:!0,childList:!0})}async function Cs(t){const e=t instanceof Element?t.tagName.toLowerCase():"",n=e?.startsWith("wa-"),o=[...t.querySelectorAll(":not(:defined)")].map(r=>r.tagName.toLowerCase()).filter(r=>r.startsWith("wa-"));n&&!customElements.get(e)&&o.push(e);const a=[...new Set(o)],i=await Promise.allSettled(a.map(r=>Ru(r)));for(const r of i)r.status==="rejected"&&console.warn(r.reason);await new Promise(requestAnimationFrame),t.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function Ru(t){if(customElements.get(t))return Promise.resolve();const e=t.replace(/^wa-/i,""),n=qr(`components/${e}/${e}.js`);return new Promise((o,a)=>{import(n).then(()=>o()).catch(()=>a(new Error(`Unable to autoload <${t}> from ${n}`)))})}Pu();Promise.race([new Promise(t=>document.addEventListener("wa-discovery-complete",t)),new Promise(t=>setTimeout(t,2e3))]).then(()=>{document.querySelectorAll(".wa-cloak").forEach(t=>t.classList.remove("wa-cloak"))});el("fg",{resolver:(t,e,n)=>import.meta.resolve("/icon-libs/font-gis.svg")+`#fg-${t}`,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("width","16"),t.setAttribute("height","16")},spriteSheet:!0});const Vu={},Vf=Object.freeze(Object.defineProperty({__proto__:null,default:Vu},Symbol.toStringTag,{value:"Module"})),J=[];for(let t=0;t<256;++t)J.push((t+256).toString(16).slice(1));function Fu(t,e=0){return(J[t[e+0]]+J[t[e+1]]+J[t[e+2]]+J[t[e+3]]+"-"+J[t[e+4]]+J[t[e+5]]+"-"+J[t[e+6]]+J[t[e+7]]+"-"+J[t[e+8]]+J[t[e+9]]+"-"+J[t[e+10]]+J[t[e+11]]+J[t[e+12]]+J[t[e+13]]+J[t[e+14]]+J[t[e+15]]).toLowerCase()}let qo;const Bu=new Uint8Array(16);function Uu(){if(!qo){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");qo=crypto.getRandomValues.bind(crypto)}return qo(Bu)}const Nu=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ei={randomUUID:Nu};function qu(t,e,n){t=t||{};const o=t.random??t.rng?.()??Uu();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let a=0;a<16;++a)e[n+a]=o[a];return e}return Fu(o)}function Hu(t,e,n){return Ei.randomUUID&&!e&&!t?Ei.randomUUID():qu(t,e,n)}const Ff=Xo.default||Xo,Bf="label",Uf="name",Nf="url",qf="format",Wu="_state",Hf="src",Wf="sourceType",jf="_env",Kf="gsManaged",ju="uuid",Xf="_eventSubscriptions";function Pt(t){return t.uuid||(t.uuid=Hu()),t}function Si(t){if(Pt(t),"geometry"in t&&t.geometry&&Pt(t.geometry),"source"in t&&t.source){const e=t.source;Pt(e),e.features&&Array.isArray(e.features)&&e.features.forEach(n=>Si(n))}return"layers"in t&&Array.isArray(t.layers)&&t.layers.forEach(e=>Si(e)),"overlays"in t&&Array.isArray(t.overlays)&&t.overlays.forEach(e=>Pt(e)),"controls"in t&&Array.isArray(t.controls)&&t.controls.forEach(e=>Pt(e)),"interactions"in t&&Array.isArray(t.interactions)&&t.interactions.forEach(e=>Pt(e)),"view"in t&&t.view&&Pt(t.view),t}var za=(t=>(t.OSM="OSM",t.GeoJSON="GeoJSON",t.Features="Features",t.KML="KML",t.GeoTIFF="GeoTIFF",t.GPX="GPX",t.BM="BM",t.WMS="WMS",t.WMTS="WMTS",t.XYZ="XYZ",t))(za||{}),qn=(t=>(t.TILE="TILE",t.VECTOR="VECTOR",t.GROUP="GROUP",t))(qn||{});const Ku={"default-point":{id:"default-point",image:{type:"circle",radius:5,fill:{color:"rgba(0, 100, 255, 0.8)"},stroke:{color:"white",width:2}}},"default-line":{id:"default-line",stroke:{color:"rgba(0, 100, 255, 0.8)",width:2}},"default-polygon":{id:"default-polygon",fill:{color:"rgba(0, 100, 255, 0.3)"},stroke:{color:"rgba(0, 100, 255, 0.8)",width:2}},selection:{id:"selection",image:{type:"circle",radius:7,fill:{color:"rgba(255, 255, 0, 0.3)"},stroke:{color:"rgba(255, 255, 0, 1)",width:3}},stroke:{color:"rgba(255, 255, 0, 1)",width:3},fill:{color:"rgba(255, 255, 0, 0.3)"}}};function Xu(t,e,n){const o=t.condition;if(o.geometryType&&!(Array.isArray(o.geometryType)?o.geometryType:[o.geometryType]).includes(e.geometry.type)||o.layerName&&o.layerName!==n)return!1;if(o.property){const a=o.property,i=e.state?.[a.key];if(!a.operator||a.operator==="exists")return i!==void 0;if(a.operator==="equals")return i===a.value;if(a.operator==="not-equals")return i!==a.value;if(a.operator==="contains"&&typeof i=="string"&&typeof a.value=="string")return i.includes(a.value);if(a.operator==="greater-than"&&typeof i=="number"&&typeof a.value=="number")return i>a.value;if(a.operator==="less-than"&&typeof i=="number"&&typeof a.value=="number")return i<a.value}return!0}function Gf(t,e,n,o){const a=[...e].sort((i,r)=>(r.priority||0)-(i.priority||0));for(const i of a)if(Xu(i,t,o))return n[i.styleId]}const Gu=[{id:"default-points",condition:{geometryType:["Point","MultiPoint"]},styleId:"default-point",priority:0},{id:"default-lines",condition:{geometryType:["LineString","MultiLineString"]},styleId:"default-line",priority:0},{id:"default-polygons",condition:{geometryType:["Polygon","MultiPolygon","Circle"]},styleId:"default-polygon",priority:0}],Yf=Pt({view:Pt({center:[0,0],zoom:0,projection:"EPSG:3857"}),layers:[Pt({type:"TILE",source:Pt({type:"OSM"})})],overlays:[],controls:[],interactions:[],state:{},styles:{...Ku},styleRules:[...Gu]}),tt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Yu(t){const e=Ta();for(let n=0,o=t.length;n<o;++n)_a(e,t[n]);return e}function Zu(t,e,n){const o=Math.min.apply(null,t),a=Math.min.apply(null,e),i=Math.max.apply(null,t),r=Math.max.apply(null,e);return En(o,a,i,r,n)}function Qu(t,e,n){return n?(n[0]=t[0]-e,n[1]=t[1]-e,n[2]=t[2]+e,n[3]=t[3]+e,n):[t[0]-e,t[1]-e,t[2]+e,t[3]+e]}function Ju(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t.slice()}function tp(t,e,n){let o,a;return e<t[0]?o=t[0]-e:t[2]<e?o=e-t[2]:o=0,n<t[1]?a=t[1]-n:t[3]<n?a=n-t[3]:a=0,o*o+a*a}function ep(t,e){return Es(t,e[0],e[1])}function np(t,e){return t[0]<=e[0]&&e[2]<=t[2]&&t[1]<=e[1]&&e[3]<=t[3]}function Es(t,e,n){return t[0]<=e&&e<=t[2]&&t[1]<=n&&n<=t[3]}function ia(t,e){const n=t[0],o=t[1],a=t[2],i=t[3],r=e[0],c=e[1];let h=tt.UNKNOWN;return r<n?h=h|tt.LEFT:r>a&&(h=h|tt.RIGHT),c<o?h=h|tt.BELOW:c>i&&(h=h|tt.ABOVE),h===tt.UNKNOWN&&(h=tt.INTERSECTING),h}function Ta(){return[1/0,1/0,-1/0,-1/0]}function En(t,e,n,o,a){return a?(a[0]=t,a[1]=e,a[2]=n,a[3]=o,a):[t,e,n,o]}function an(t){return En(1/0,1/0,-1/0,-1/0,t)}function op(t,e){const n=t[0],o=t[1];return En(n,o,n,o,e)}function ap(t,e){const n=an(e);return La(n,t)}function ip(t,e,n,o,a){const i=an(a);return Ss(i,t,e,n,o)}function sp(t,e){const n=an(e);return $s(n,t)}function rp(t,e){return t[0]==e[0]&&t[2]==e[2]&&t[1]==e[1]&&t[3]==e[3]}function lp(t,e,n){return Math.abs(t[0]-e[0])<n&&Math.abs(t[2]-e[2])<n&&Math.abs(t[1]-e[1])<n&&Math.abs(t[3]-e[3])<n}function cp(t,e){return e[0]<t[0]&&(t[0]=e[0]),e[2]>t[2]&&(t[2]=e[2]),e[1]<t[1]&&(t[1]=e[1]),e[3]>t[3]&&(t[3]=e[3]),t}function _a(t,e){e[0]<t[0]&&(t[0]=e[0]),e[0]>t[2]&&(t[2]=e[0]),e[1]<t[1]&&(t[1]=e[1]),e[1]>t[3]&&(t[3]=e[1])}function La(t,e){for(let n=0,o=e.length;n<o;++n)_a(t,e[n]);return t}function Ss(t,e,n,o,a){for(;n<o;n+=a)As(t,e[n],e[n+1]);return t}function $s(t,e){for(let n=0,o=e.length;n<o;++n)La(t,e[n]);return t}function As(t,e,n){t[0]=Math.min(t[0],e),t[1]=Math.min(t[1],n),t[2]=Math.max(t[2],e),t[3]=Math.max(t[3],n)}function hp(t,e){let n;return n=e(Oa(t)),n||(n=e(Ia(t)),n)||(n=e(Pa(t)),n)||(n=e(Ma(t)),n)?n:!1}function zs(t){let e=0;return Ra(t)||(e=Zt(t)*Da(t)),e}function Oa(t){return[t[0],t[1]]}function Ia(t){return[t[2],t[1]]}function Ts(t){return[(t[0]+t[2])/2,(t[1]+t[3])/2]}function dp(t,e){let n;if(e==="bottom-left")n=Oa(t);else if(e==="bottom-right")n=Ia(t);else if(e==="top-left")n=Ma(t);else if(e==="top-right")n=Pa(t);else throw new Error("Invalid corner");return n}function up(t,e){const n=Math.min(t[0],e[0]),o=Math.min(t[1],e[1]),a=Math.max(t[2],e[2]),i=Math.max(t[3],e[3]);return(a-n)*(i-o)}function pp(t,e,n,o,a){const[i,r,c,h,d,u,p,f]=_s(t,e,n,o);return En(Math.min(i,c,d,p),Math.min(r,h,u,f),Math.max(i,c,d,p),Math.max(r,h,u,f),a)}function _s(t,e,n,o){const a=e*o[0]/2,i=e*o[1]/2,r=Math.cos(n),c=Math.sin(n),h=a*r,d=a*c,u=i*r,p=i*c,f=t[0],m=t[1];return[f-h+p,m-d-u,f-h-p,m-d+u,f+h-p,m+d+u,f+h+p,m+d-u,f-h+p,m-d-u]}function Da(t){return t[3]-t[1]}function fp(t,e){const n=Ls(t,e);return zs(n)}function Ls(t,e,n){const o=n||Ta();return Os(t,e)?(t[0]>e[0]?o[0]=t[0]:o[0]=e[0],t[1]>e[1]?o[1]=t[1]:o[1]=e[1],t[2]<e[2]?o[2]=t[2]:o[2]=e[2],t[3]<e[3]?o[3]=t[3]:o[3]=e[3]):an(o),o}function mp(t){return Zt(t)+Da(t)}function bp(t){return[t[2]-t[0],t[3]-t[1]]}function Ma(t){return[t[0],t[3]]}function Pa(t){return[t[2],t[3]]}function Zt(t){return t[2]-t[0]}function Os(t,e){return t[0]<=e[2]&&t[2]>=e[0]&&t[1]<=e[3]&&t[3]>=e[1]}function Ra(t){return t[2]<t[0]||t[3]<t[1]}function gp(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t}function vp(t,e){const n=(t[2]-t[0])/2*(e-1),o=(t[3]-t[1])/2*(e-1);t[0]-=n,t[2]+=n,t[1]-=o,t[3]+=o}function wp(t,e,n){let o=!1;const a=ia(t,e),i=ia(t,n);if(a===tt.INTERSECTING||i===tt.INTERSECTING)o=!0;else{const r=t[0],c=t[1],h=t[2],d=t[3],u=e[0],p=e[1],f=n[0],m=n[1],v=(m-p)/(f-u);let b,w;i&tt.ABOVE&&!(a&tt.ABOVE)&&(b=f-(m-d)/v,o=b>=r&&b<=h),!o&&i&tt.RIGHT&&!(a&tt.RIGHT)&&(w=m-(f-h)*v,o=w>=c&&w<=d),!o&&i&tt.BELOW&&!(a&tt.BELOW)&&(b=f-(m-c)/v,o=b>=r&&b<=h),!o&&i&tt.LEFT&&!(a&tt.LEFT)&&(w=m-(f-r)*v,o=w>=c&&w<=d)}return o}function Is(t,e,n,o){if(Ra(t))return an(n);let a=[];if(o>1){const c=t[2]-t[0],h=t[3]-t[1];for(let d=0;d<o;++d)a.push(t[0]+c*d/o,t[1],t[2],t[1]+h*d/o,t[2]-c*d/o,t[3],t[0],t[3]-h*d/o)}else a=[t[0],t[1],t[2],t[1],t[2],t[3],t[0],t[3]];e(a,a,2);const i=[],r=[];for(let c=0,h=a.length;c<h;c+=2)i.push(a[c]),r.push(a[c+1]);return Zu(i,r,n)}function Ds(t,e){const n=e.getExtent(),o=Ts(t);if(e.canWrapX()&&(o[0]<n[0]||o[0]>=n[2])){const a=Zt(n),r=Math.floor((o[0]-n[0])/a)*a;t[0]-=r,t[2]-=r}return t}function yp(t,e,n){if(e.canWrapX()){const o=e.getExtent();if(!isFinite(t[0])||!isFinite(t[2]))return[[o[0],t[1],o[2],t[3]]];Ds(t,e);const a=Zt(o);if(Zt(t)>a&&!n)return[[o[0],t[1],o[2],t[3]]];if(t[0]<o[0])return[[t[0]+a,t[1],o[2],t[3]],[o[0],t[1],t[2],t[3]]];if(t[2]>o[2])return[[t[0],t[1],o[2],t[3]],[o[0],t[1],t[2]-a,t[3]]]}return[t]}const Zf=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:Is,approximatelyEquals:lp,boundingExtent:Yu,buffer:Qu,clone:Ju,closestSquaredDistanceXY:tp,containsCoordinate:ep,containsExtent:np,containsXY:Es,coordinateRelationship:ia,createEmpty:Ta,createOrUpdate:En,createOrUpdateEmpty:an,createOrUpdateFromCoordinate:op,createOrUpdateFromCoordinates:ap,createOrUpdateFromFlatCoordinates:ip,createOrUpdateFromRings:sp,equals:rp,extend:cp,extendCoordinate:_a,extendCoordinates:La,extendFlatCoordinates:Ss,extendRings:$s,extendXY:As,forEachCorner:hp,getArea:zs,getBottomLeft:Oa,getBottomRight:Ia,getCenter:Ts,getCorner:dp,getEnlargedArea:up,getForViewAndSize:pp,getHeight:Da,getIntersection:Ls,getIntersectionArea:fp,getMargin:mp,getRotatedViewport:_s,getSize:bp,getTopLeft:Ma,getTopRight:Pa,getWidth:Zt,intersects:Os,intersectsSegment:wp,isEmpty:Ra,returnOrUpdate:gp,scaleFromCenter:vp,wrapAndSliceX:yp,wrapX:Ds},Symbol.toStringTag,{value:"Module"}));function $i(t,e,n){return Math.min(Math.max(t,e),n)}function Qf(t,e,n,o,a,i){const r=a-n,c=i-o;if(r!==0||c!==0){const h=((t-n)*r+(e-o)*c)/(r*r+c*c);h>1?(n=a,o=i):h>0&&(n+=r*h,o+=c*h)}return xp(t,e,n,o)}function xp(t,e,n,o){const a=n-t,i=o-e;return a*a+i*i}function Jf(t){const e=t.length;for(let o=0;o<e;o++){let a=o,i=Math.abs(t[o][o]);for(let c=o+1;c<e;c++){const h=Math.abs(t[c][o]);h>i&&(i=h,a=c)}if(i===0)return null;const r=t[a];t[a]=t[o],t[o]=r;for(let c=o+1;c<e;c++){const h=-t[c][o]/t[o][o];for(let d=o;d<e+1;d++)o==d?t[c][d]=0:t[c][d]+=h*t[o][d]}}const n=new Array(e);for(let o=e-1;o>=0;o--){n[o]=t[o][e]/t[o][o];for(let a=o-1;a>=0;a--)t[a][e]-=t[a][o]*n[o]}return n}function oo(t){return t*180/Math.PI}function Lt(t){return t*Math.PI/180}function Ms(t,e){const n=t%e;return n*e<0?n+e:n}function tm(t,e,n){return t+n*(e-t)}function ko(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}function em(t,e){return Math.round(ko(t,e))}function nm(t,e){return Math.floor(ko(t,e))}function om(t,e){return Math.ceil(ko(t,e))}function sa(t,e,n){if(t>=e&&t<n)return t;const o=n-e;return((t-e)%o+o)%o+e}const Sn=63710088e-1;function ao(t,e,n){n=n||Sn;const o=Lt(t[1]),a=Lt(e[1]),i=(a-o)/2,r=Lt(e[0]-t[0])/2,c=Math.sin(i)*Math.sin(i)+Math.sin(r)*Math.sin(r)*Math.cos(o)*Math.cos(a);return 2*n*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}function Ho(t,e){let n=0;for(let o=0,a=t.length;o<a-1;++o)n+=ao(t[o],t[o+1],e);return n}function Ps(t,e){e=e||{};const n=e.radius||Sn,o=e.projection||"EPSG:3857",a=t.getType();a!=="GeometryCollection"&&(t=t.clone().transform(o,"EPSG:4326"));let i=0,r,c,h,d,u,p;switch(a){case"Point":case"MultiPoint":break;case"LineString":case"LinearRing":{r=t.getCoordinates(),i=Ho(r,n);break}case"MultiLineString":case"Polygon":{for(r=t.getCoordinates(),h=0,d=r.length;h<d;++h)i+=Ho(r[h],n);break}case"MultiPolygon":{for(r=t.getCoordinates(),h=0,d=r.length;h<d;++h)for(c=r[h],u=0,p=c.length;u<p;++u)i+=Ho(c[u],n);break}case"GeometryCollection":{const f=t.getGeometries();for(h=0,d=f.length;h<d;++h)i+=Ps(f[h],e);break}default:throw new Error("Unsupported geometry type: "+a)}return i}function Rn(t,e){let n=0;const o=t.length;let a=t[o-1][0],i=t[o-1][1];for(let r=0;r<o;r++){const c=t[r][0],h=t[r][1];n+=Lt(c-a)*(2+Math.sin(Lt(i))+Math.sin(Lt(h))),a=c,i=h}return n*e*e/2}function Rs(t,e){e=e||{};const n=e.radius||Sn,o=e.projection||"EPSG:3857",a=t.getType();a!=="GeometryCollection"&&(t=t.clone().transform(o,"EPSG:4326"));let i=0,r,c,h,d,u,p;switch(a){case"Point":case"MultiPoint":case"LineString":case"MultiLineString":case"LinearRing":break;case"Polygon":{for(r=t.getCoordinates(),i=Math.abs(Rn(r[0],n)),h=1,d=r.length;h<d;++h)i-=Math.abs(Rn(r[h],n));break}case"MultiPolygon":{for(r=t.getCoordinates(),h=0,d=r.length;h<d;++h)for(c=r[h],i+=Math.abs(Rn(c[0],n)),u=1,p=c.length;u<p;++u)i-=Math.abs(Rn(c[u],n));break}case"GeometryCollection":{const f=t.getGeometries();for(h=0,d=f.length;h<d;++h)i+=Rs(f[h],e);break}default:throw new Error("Unsupported geometry type: "+a)}return i}function kp(t,e,n,o){o=o||Sn;const a=Lt(t[1]),i=Lt(t[0]),r=e/o,c=Math.asin(Math.sin(a)*Math.cos(r)+Math.cos(a)*Math.sin(r)*Math.cos(n)),h=i+Math.atan2(Math.sin(n)*Math.sin(r)*Math.cos(a),Math.cos(r)-Math.sin(a)*Math.sin(c));return[oo(h),oo(c)]}const am=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_RADIUS:Sn,getArea:Rs,getDistance:ao,getLength:Ps,offset:kp},Symbol.toStringTag,{value:"Module"}));function Cp(...t){console.warn(...t)}function im(...t){console.error(...t)}function Ai(t,e,n){const o=n!==void 0?t.toFixed(n):""+t;let a=o.indexOf(".");return a=a===-1?o.length:a,a>e?o:new Array(1+e-a).join("0")+o}function sm(t,e){const n=(""+t).split("."),o=(""+e).split(".");for(let a=0;a<Math.max(n.length,o.length);a++){const i=parseInt(n[a]||"0",10),r=parseInt(o[a]||"0",10);if(i>r)return 1;if(r>i)return-1}return 0}function rm(t,e){return t[0]+=+e[0],t[1]+=+e[1],t}function lm(t,e){const n=e.getRadius(),o=e.getCenter(),a=o[0],i=o[1],r=t[0],c=t[1];let h=r-a;const d=c-i;h===0&&d===0&&(h=1);const u=Math.sqrt(h*h+d*d),p=a+n*h/u,f=i+n*d/u;return[p,f]}function Ep(t,e){const n=t[0],o=t[1],a=e[0],i=e[1],r=a[0],c=a[1],h=i[0],d=i[1],u=h-r,p=d-c,f=u===0&&p===0?0:(u*(n-r)+p*(o-c))/(u*u+p*p||0);let m,v;return f<=0?(m=r,v=c):f>=1?(m=h,v=d):(m=r+f*u,v=c+f*p),[m,v]}function cm(t,e,n){const o=Ms(e+180,360)-180,a=Math.abs(3600*o),i=n||0;let r=Math.floor(a/3600),c=Math.floor((a-r*3600)/60),h=ko(a-r*3600-c*60,i);h>=60&&(h=0,c+=1),c>=60&&(c=0,r+=1);let d=r+"°";return(c!==0||h!==0)&&(d+=" "+Ai(c,2)+"′"),h!==0&&(d+=" "+Ai(h,2,i)+"″"),o!==0&&(d+=" "+t.charAt(o<0?1:0)),d}function Sp(t,e){let n=!0;for(let o=t.length-1;o>=0;--o)if(t[o]!=e[o]){n=!1;break}return n}function hm(t,e){const n=Math.cos(e),o=Math.sin(e),a=t[0]*n-t[1]*o,i=t[1]*n+t[0]*o;return t[0]=a,t[1]=i,t}function dm(t,e){return t[0]*=e,t[1]*=e,t}function Vs(t,e){const n=t[0]-e[0],o=t[1]-e[1];return n*n+o*o}function um(t,e){return Math.sqrt(Vs(t,e))}function pm(t,e){return Vs(t,Ep(t,e))}function fm(t,e){if(e.canWrapX()){const n=Zt(e.getExtent()),o=Fs(t,e,n);o&&(t[0]-=o*n)}return t}function Fs(t,e,n){const o=e.getExtent();let a=0;return e.canWrapX()&&(t[0]<o[0]||t[0]>o[2])&&(n=n||Zt(o),a=Math.floor((t[0]-o[0])/n)),a}const $p={9001:"m",9002:"ft",9003:"us-ft",9101:"radians",9102:"degrees"};function mm(t){return $p[t]}const io={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};class Co{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||io[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}}const $n=6378137,Ne=Math.PI*$n,Ap=[-Ne,-Ne,Ne,Ne],zp=[-180,-85,180,85],Vn=$n*Math.log(Math.tan(Math.PI/2));class Fe extends Co{constructor(e){super({code:e,units:"m",extent:Ap,global:!0,worldExtent:zp,getPointResolution:function(n,o){return n/Math.cosh(o[1]/$n)}})}}const zi=[new Fe("EPSG:3857"),new Fe("EPSG:102100"),new Fe("EPSG:102113"),new Fe("EPSG:900913"),new Fe("http://www.opengis.net/def/crs/EPSG/0/3857"),new Fe("http://www.opengis.net/gml/srs/epsg.xml#3857")];function Tp(t,e,n,o){const a=t.length;n=n>1?n:2,o=o??n,e===void 0&&(n>2?e=t.slice():e=new Array(a));for(let i=0;i<a;i+=o){e[i]=Ne*t[i]/180;let r=$n*Math.log(Math.tan(Math.PI*(+t[i+1]+90)/360));r>Vn?r=Vn:r<-Vn&&(r=-Vn),e[i+1]=r}return e}function _p(t,e,n,o){const a=t.length;n=n>1?n:2,o=o??n,e===void 0&&(n>2?e=t.slice():e=new Array(a));for(let i=0;i<a;i+=o)e[i]=180*t[i]/Ne,e[i+1]=360*Math.atan(Math.exp(t[i+1]/$n))/Math.PI-90;return e}const Lp=6378137,Ti=[-180,-90,180,90],Op=Math.PI*Lp/180;class xe extends Co{constructor(e,n){super({code:e,units:"degrees",extent:Ti,axisOrientation:n,global:!0,metersPerUnit:Op,worldExtent:Ti})}}const _i=[new xe("CRS:84"),new xe("EPSG:4326","neu"),new xe("urn:ogc:def:crs:OGC:1.3:CRS84"),new xe("urn:ogc:def:crs:OGC:2:84"),new xe("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new xe("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new xe("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let so={};function Ip(){so={}}function Dp(t){return so[t]||so[t.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function Mp(t,e){so[t]=e}let $e={};function Pp(){$e={}}function Oe(t,e,n){const o=t.getCode(),a=e.getCode();o in $e||($e[o]={}),$e[o][a]=n}function Wo(t,e){return t in $e&&e in $e[t]?$e[t][e]:null}const ro=.9996,Ot=.00669438,Eo=Ot*Ot,So=Eo*Ot,Se=Ot/(1-Ot),Li=Math.sqrt(1-Ot),tn=(1-Li)/(1+Li),Bs=tn*tn,Va=Bs*tn,Fa=Va*tn,Us=Fa*tn,Ns=1-Ot/4-3*Eo/64-5*So/256,Rp=3*Ot/8+3*Eo/32+45*So/1024,Vp=15*Eo/256+45*So/1024,Fp=35*So/3072,Bp=3/2*tn-27/32*Va+269/512*Us,Up=21/16*Bs-55/32*Fa,Np=151/96*Va-417/128*Us,qp=1097/512*Fa,lo=6378137;function Hp(t,e,n){const o=t-5e5,r=(n.north?e:e-1e7)/ro/(lo*Ns),c=r+Bp*Math.sin(2*r)+Up*Math.sin(4*r)+Np*Math.sin(6*r)+qp*Math.sin(8*r),h=Math.sin(c),d=h*h,u=Math.cos(c),p=h/u,f=p*p,m=f*f,v=1-Ot*d,b=Math.sqrt(1-Ot*d),w=lo/b,y=(1-Ot)/v,C=Se*u**2,$=C*C,_=o/(w*ro),I=_*_,N=I*_,H=N*_,ut=H*_,it=ut*_,pt=c-p/y*(I/2-H/24*(5+3*f+10*C-4*$-9*Se))+it/720*(61+90*f+298*C+45*m-252*Se-3*$);let zt=(_-N/6*(1+2*f+C)+ut/120*(5-2*C+28*f-3*$+8*Se+24*m))/u;return zt=sa(zt+Lt(qs(n.number)),-Math.PI,Math.PI),[oo(zt),oo(pt)]}const Oi=-80,Ii=84,Wp=-180,jp=180;function Kp(t,e,n){t=sa(t,Wp,jp),e<Oi?e=Oi:e>Ii&&(e=Ii);const o=Lt(e),a=Math.sin(o),i=Math.cos(o),r=a/i,c=r*r,h=c*c,d=Lt(t),u=qs(n.number),p=Lt(u),f=lo/Math.sqrt(1-Ot*a**2),m=Se*i**2,v=i*sa(d-p,-Math.PI,Math.PI),b=v*v,w=b*v,y=w*v,C=y*v,$=C*v,_=lo*(Ns*o-Rp*Math.sin(2*o)+Vp*Math.sin(4*o)-Fp*Math.sin(6*o)),I=ro*f*(v+w/6*(1-c+m)+C/120*(5-18*c+h+72*m-58*Se))+5e5;let N=ro*(_+f*r*(b/2+y/24*(5-c+9*m+4*m**2)+$/720*(61-58*c+h+600*m-330*Se)));return n.north||(N+=1e7),[I,N]}function qs(t){return(t-1)*6-180+3}const Xp=[/^EPSG:(\d+)$/,/^urn:ogc:def:crs:EPSG::(\d+)$/,/^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/];function Hs(t){let e=0;for(const a of Xp){const i=t.match(a);if(i){e=parseInt(i[1]);break}}if(!e)return null;let n=0,o=!1;return e>32700&&e<32761?n=e-32700:e>32600&&e<32661&&(o=!0,n=e-32600),n?{number:n,north:o}:null}function Di(t,e){return function(n,o,a,i){const r=n.length;a=a>1?a:2,i=i??a,o||(a>2?o=n.slice():o=new Array(r));for(let c=0;c<r;c+=i){const h=n[c],d=n[c+1],u=t(h,d,e);o[c]=u[0],o[c+1]=u[1]}return o}}function Gp(t){return Hs(t)?new Co({code:t,units:"m"}):null}function Yp(t){const e=Hs(t.getCode());return e?{forward:Di(Kp,e),inverse:Di(Hp,e)}:null}const Zp=[Yp],Qp=[Gp];let ra=!0;function Ws(t){ra=!(t===void 0?!0:t)}function $o(t,e){if(e!==void 0){for(let n=0,o=t.length;n<o;++n)e[n]=t[n];e=e}else e=t.slice();return e}function Jp(t,e){if(e!==void 0&&t!==e){for(let n=0,o=t.length;n<o;++n)e[n]=t[n];t=e}return t}function co(t){Mp(t.getCode(),t),Oe(t,t,$o)}function js(t){t.forEach(co)}function yt(t){if(typeof t!="string")return t;const e=Dp(t);if(e)return e;for(const n of Qp){const o=n(t);if(o)return o}return null}function tf(t,e,n,o){t=yt(t);let a;const i=t.getPointResolutionFunc();if(i){if(a=i(e,n),o&&o!==t.getUnits()){const r=t.getMetersPerUnit();r&&(a=a*r/io[o])}}else{const r=t.getUnits();if(r=="degrees"&&!o||o=="degrees")a=e;else{const c=An(t,yt("EPSG:4326"));if(!c&&r!=="degrees")a=e*t.getMetersPerUnit();else{let d=[n[0]-e/2,n[1],n[0]+e/2,n[1],n[0],n[1]-e/2,n[0],n[1]+e/2];d=c(d,d,2);const u=ao(d.slice(0,2),d.slice(2,4)),p=ao(d.slice(4,6),d.slice(6,8));a=(u+p)/2}const h=o?io[o]:t.getMetersPerUnit();h!==void 0&&(a/=h)}}return a}function la(t){js(t),t.forEach(function(e){t.forEach(function(n){e!==n&&Oe(e,n,$o)})})}function Ks(t,e,n,o){t.forEach(function(a){e.forEach(function(i){Oe(a,i,n),Oe(i,a,o)})})}function ef(){Ip(),Pp()}function nf(t,e){return t?typeof t=="string"?yt(t):t:yt(e)}function ca(t){return(function(e,n,o,a){const i=e.length;o=o!==void 0?o:2,a=a??o,n=n!==void 0?n:new Array(i);for(let r=0;r<i;r+=a){const c=t(e.slice(r,r+o)),h=c.length;for(let d=0,u=a;d<u;++d)n[r+d]=d>=h?e[r+d]:c[d]}return n})}function of(t,e,n,o){const a=yt(t),i=yt(e);Oe(a,i,ca(n)),Oe(i,a,ca(o))}function af(t,e){return Ws(),zn(t,"EPSG:4326",e!==void 0?e:"EPSG:3857")}function sf(t,e){const n=zn(t,e!==void 0?e:"EPSG:3857","EPSG:4326"),o=n[0];return(o<-180||o>180)&&(n[0]=Ms(o+180,360)-180),n}function rf(t,e){if(t===e)return!0;const n=t.getUnits()===e.getUnits();return(t.getCode()===e.getCode()||An(t,e)===$o)&&n}function An(t,e){const n=t.getCode(),o=e.getCode();let a=Wo(n,o);if(a)return a;let i=null,r=null;for(const h of Zp)i||(i=h(t)),r||(r=h(e));if(!i&&!r)return null;const c="EPSG:4326";if(r)if(i)a=jo(i.inverse,r.forward);else{const h=Wo(n,c);h&&(a=jo(h,r.forward))}else{const h=Wo(c,o);h&&(a=jo(i.inverse,h))}return a&&(co(t),co(e),Oe(t,e,a)),a}function jo(t,e){return function(n,o,a,i){return o=t(n,o,a,i),e(o,o,a,i)}}function Ba(t,e){const n=yt(t),o=yt(e);return An(n,o)}function zn(t,e,n){const o=Ba(e,n);if(!o){const a=yt(e).getCode(),i=yt(n).getCode();throw new Error(`No transform available between ${a} and ${i}`)}return o(t,void 0,t.length)}function Ua(t,e,n,o){const a=Ba(e,n);return Is(t,a,void 0,o)}function lf(t,e,n){return An(e,n)(t)}let ht=null;function Xs(t){ht=yt(t)}function cf(){ht=null}function hf(){return ht}function df(){Xs("EPSG:4326")}function uf(t,e){return ht?zn(t,e,ht):t}function pf(t,e){return ht?zn(t,ht,e):(ra&&!Sp(t,[0,0])&&t[0]>=-180&&t[0]<=180&&t[1]>=-90&&t[1]<=90&&(ra=!1,Cp("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),t)}function ff(t,e){return ht?Ua(t,e,ht):t}function mf(t,e){return ht?Ua(t,ht,e):t}function bf(t,e){if(!ht)return t;const n=yt(e).getMetersPerUnit(),o=ht.getMetersPerUnit();return n&&o?t*n/o:t}function gf(t,e){if(!ht)return t;const n=yt(e).getMetersPerUnit(),o=ht.getMetersPerUnit();return n&&o?t*o/n:t}function vf(t,e,n){return function(o){let a,i;if(t.canWrapX()){const r=t.getExtent(),c=Zt(r);o=o.slice(0),i=Fs(o,t,c),i&&(o[0]=o[0]-i*c),o[0]=$i(o[0],r[0],r[2]),o[1]=$i(o[1],r[1],r[3]),a=n(o)}else a=n(o);return i&&e.canWrapX()&&(a[0]+=i*Zt(e.getExtent())),a}}function Gs(){la(zi),la(_i),Ks(_i,zi,Tp,_p)}Gs();const bm=Object.freeze(Object.defineProperty({__proto__:null,METERS_PER_UNIT:io,Projection:Co,addCommon:Gs,addCoordinateTransforms:of,addEquivalentProjections:la,addEquivalentTransforms:Ks,addProjection:co,addProjections:js,clearAllProjections:ef,clearUserProjection:cf,cloneTransform:$o,createProjection:nf,createSafeCoordinateTransform:vf,createTransformFromCoordinateTransform:ca,disableCoordinateWarning:Ws,equivalent:rf,fromLonLat:af,fromUserCoordinate:pf,fromUserExtent:mf,fromUserResolution:gf,get:yt,getPointResolution:tf,getTransform:Ba,getTransformFromProjections:An,getUserProjection:hf,identityTransform:Jp,setUserProjection:Xs,toLonLat:sf,toUserCoordinate:uf,toUserExtent:ff,toUserResolution:bf,transform:zn,transformExtent:Ua,transformWithProjections:lf,useGeographic:df},Symbol.toStringTag,{value:"Module"})),gm=t=>{switch(t?.toLowerCase()){case"osm":case"bing":case"google":case"geotiff":case"wms":case"wmts":case"xyz":return qn.TILE;case"bm":case"basemap.de":return qn.GROUP;default:return qn.VECTOR}},vm=t=>{if(t){t=t.toLowerCase();const n=Object.values(za).find(o=>t===o.toLowerCase());if(n)return n}throw new Error("Unsupported source type: "+t)},wm=t=>{switch(t){case za.BM:return"https://sgx.geodatenzentrum.de/gdz_basemapworld_vektor/styles/bm_web_wld_col.json"}},Ys=(t,e)=>{const n=t.get(Wu);if(e.state=n,n?.uuid)e.uuid=n.uuid;else{const o=t.get(ju);o&&(e.uuid=o)}return e};function wf(t){return Ys(t,{type:t.getType(),coordinates:t.getCoordinates()})}function ym(t){return Ys(t,{geometry:wf(t.getGeometry())})}const xm={async resolveUrl(t){return t}};export{Da as $,af as A,Cr as B,vm as C,Yf as D,q as E,Pt as F,za as G,gm as H,wm as I,Ua as J,Ie as K,De as L,_r as M,Or as N,ba as O,Xo as P,rn as Q,_f as R,Tf as S,ft as T,Rr as U,zf as V,Ta as W,an as X,gp as Y,yt as Z,or as _,Pf as a,tf as a$,Ba as a0,ip as a1,Ts as a2,xp as a3,tm as a4,Qf as a5,tp as a6,op as a7,Es as a8,hp as a9,Ia as aA,Oa as aB,Zt as aC,mf as aD,fm as aE,Ds as aF,bf as aG,nf as aH,pf as aI,hm as aJ,rm as aK,uf as aL,pp as aM,Sp as aN,Ws as aO,io as aP,cm as aQ,lp as aR,Ls as aS,rf as aT,Is as aU,dm as aV,Cp as aW,om as aX,nm as aY,dp as aZ,zn as a_,Ss as aa,Os as ab,wp as ac,Ra as ad,kp as ae,Ms as af,Jp as ag,An as ah,Lt as ai,$i as aj,ko as ak,hf as al,En as am,cp as an,rp as ao,yp as ap,np as aq,ep as ar,ia as as,tt as at,Ju as au,Qu as av,_a as aw,ff as ax,Ma as ay,Pa as az,kf as b,Jf as b0,ca as b1,zs as b2,Yu as b3,im as b4,mm as b5,Co as b6,sf as b7,em as b8,vp as b9,Wf as bA,qf as bB,ym as bC,Gf as bD,Ps as bE,Rs as bF,x as bG,sm as ba,_s as bb,Ai as bc,um as bd,Vs as be,Ep as bf,pm as bg,lm as bh,Zf as bi,bm as bj,am as bk,je as bl,z as bm,L as bn,Ef as bo,Xf as bp,Ff as bq,jf as br,Bf as bs,Uf as bt,Kf as bu,ju as bv,Wu as bw,Hf as bx,Hu as by,Nf as bz,_t as c,Mf as d,Df as e,el as f,tr as g,Ja as h,pn as i,Lf as j,yf as k,Vu as l,Vf as m,l as n,Bn as o,Js as p,xm as q,S as r,Pi as s,E as t,qn as u,Of as v,Si as w,g as x,Ku as y,Gu as z};
