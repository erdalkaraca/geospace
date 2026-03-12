import{_ as ee}from"./preload-helper-BXl3LOEh.js";import{g as ci,S as xr,p as w,W as _e,q as kr,u as di,H as B,n as m,A as C,b as p,a1 as pi,s as M,t as L,D as oe,r as S,o as $t,Y as ui,G as Re,U as Te,a0 as A,V as hi}from"./webawesome-Bcy1vMqC.js";var zt={exports:{}};var fi=zt.exports,Qn;function gi(){return Qn||(Qn=1,(function(n){(function(e,t){n.exports?n.exports=t():e.Toastify=t()})(fi,function(e){var t=function(o){return new t.lib.init(o)},r="1.12.0";t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},t.lib=t.prototype={toastify:r,constructor:t,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||t.defaults.text,this.options.node=o.node||t.defaults.node,this.options.duration=o.duration===0?0:o.duration||t.defaults.duration,this.options.selector=o.selector||t.defaults.selector,this.options.callback=o.callback||t.defaults.callback,this.options.destination=o.destination||t.defaults.destination,this.options.newWindow=o.newWindow||t.defaults.newWindow,this.options.close=o.close||t.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=o.positionLeft||t.defaults.positionLeft,this.options.position=o.position||t.defaults.position,this.options.backgroundColor=o.backgroundColor||t.defaults.backgroundColor,this.options.avatar=o.avatar||t.defaults.avatar,this.options.className=o.className||t.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?t.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||t.defaults.onClick,this.options.offset=o.offset||t.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:t.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||t.defaults.ariaLive,this.options.style=o.style||t.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var l in this.options.style)o.style[l]=this.options.style[l];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var a=document.createElement("img");a.src=this.options.avatar,a.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(a):o.insertAdjacentElement("afterbegin",a)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",(function(_){_.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var d=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&d>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var u=this;o.addEventListener("mouseover",function(_){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){u.removeElement(o)},u.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",(function(_){_.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",(function(_){_.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var f=i("x",this.options),h=i("y",this.options),g=this.options.position=="left"?f:"-"+f,T=this.options.gravity=="toastify-top"?h:"-"+h;o.style.transform="translate("+g+","+T+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var l=t.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,l),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),t.reposition()}).bind(this),400)}},t.reposition=function(){for(var o={top:15,bottom:15},l={top:15,bottom:15},a={top:15,bottom:15},c=document.getElementsByClassName("toastify"),d,u=0;u<c.length;u++){s(c[u],"toastify-top")===!0?d="toastify-top":d="toastify-bottom";var f=c[u].offsetHeight;d=d.substr(9,d.length-1);var h=15,g=window.innerWidth>0?window.innerWidth:screen.width;g<=360?(c[u].style[d]=a[d]+"px",a[d]+=f+h):s(c[u],"toastify-left")===!0?(c[u].style[d]=o[d]+"px",o[d]+=f+h):(c[u].style[d]=l[d]+"px",l[d]+=f+h)}return this};function i(o,l){return l.offset[o]?isNaN(l.offset[o])?l.offset[o]:l.offset[o]+"px":"0px"}function s(o,l){return!o||typeof l!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(l)>-1)}return t.lib.init.prototype=t.lib,t})})(zt)),zt.exports}var mi=gi();const bi=ci(mi);class xn{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,t){return e[t]||this.parent?.getProxy()[t]}set(e,t,r){e[t]=r}put(e,t){this.variables[e]=t}getProxy(){return this.proxy}createChild(e={}){const t=new xn(e);return t.parent=this,this.children.push(t),t}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const z=new xn({}),Ae=z.createChild({}),Jn={debug:0,info:1,warning:2,error:3};let wi="debug";const Xe={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Bt=null;const pn=[];function ue(n){if(n===null)return"null";if(n===void 0)return"undefined";if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean")return String(n);if(n instanceof Error)return`${n.name}: ${n.message}`;try{return JSON.stringify(n)}catch{return String(n)}}class yi{constructor(e){this.source=e}info(e,...t){const r=t.length===0?e:`${e} ${t.map(i=>ue(i)).join(" ")}`;this.log(r,"info")}warning(e,...t){const r=t.length===0?e:`${e} ${t.map(i=>ue(i)).join(" ")}`;this.log(r,"warning")}warn(e,...t){const r=t.length===0?e:`${e} ${t.map(i=>ue(i)).join(" ")}`;this.log(r,"warning")}error(e,...t){const r=t.length===0?e:`${e} ${t.map(i=>ue(i)).join(" ")}`;this.log(r,"error")}debug(e,...t){const r=t.length===0?e:`${e} ${t.map(i=>ue(i)).join(" ")}`;this.log(r,"debug")}log(e,t){Ye(this.source,e,t)}}function vi(n){return Jn[n]>=Jn[wi]}function Ye(n,e,t){vi(t)&&(Bt?Bt(n,e,t):(pn.push({source:n,message:e,level:t}),Xe[t==="error"?"error":t==="warning"?"warn":t==="debug"?"debug":"log"](`[${n}] ${e}`)))}function xi(){console.log=function(...n){Xe.log.apply(console,n),Ye("Console",n.map(e=>ue(e)).join(" "),"info")},console.info=function(...n){Xe.info.apply(console,n),Ye("Console",n.map(e=>ue(e)).join(" "),"info")},console.warn=function(...n){Xe.warn.apply(console,n),Ye("Console",n.map(e=>ue(e)).join(" "),"warning")},console.error=function(...n){Xe.error.apply(console,n),Ye("Console",n.map(e=>ue(e)).join(" "),"error")},console.debug=function(...n){Xe.debug.apply(console,n),Ye("Console",n.map(e=>ue(e)).join(" "),"debug")}}xi();function ki(n){for(Bt=n;pn.length>0;){const e=pn.shift();e&&n(e.source,e.message,e.level)}}function $i(){Bt=null}function xe(n){return new yi(n)}const $=xe("System");z.put("logger",$);const kn=xe("Toast"),Ei=4e3,Si={duration:Ei,gravity:"bottom",position:"right",close:!0},$n=(n,e)=>{bi({...Si,text:n,style:e}).showToast()},$e=n=>{kn.info(n),$n(n,{background:"var(--wa-color-brand-50)",color:"var(--wa-color-brand-on)"})},F=n=>{kn.error(n),$n(n,{background:"var(--wa-color-danger-50)",color:"var(--wa-color-danger-on)"})},Ci=n=>{kn.warn(n),$n(n,{background:"var(--wa-color-warning-50)",color:"var(--wa-color-warning-on)"})};class Ri{constructor(){this.globalNameRemaps=new Map,this.appNameRemaps=new Map}setGlobalNameRemap(e,t){this.globalNameRemaps.set(e,this.normalizeTargets(t))}resetForTesting(){this.globalNameRemaps.clear(),this.appNameRemaps.clear()}applyAppNameRemaps(e){if(this.appNameRemaps.clear(),!!e)for(const t of e)this.appNameRemaps.set(t.name,this.normalizeTargets(t.targets))}getEffectiveTargets(e,t){const r=t.name;if(!r)return[e];const i=this.appNameRemaps.get(r);if(i)return i.length>0?i:[];const s=this.globalNameRemaps.get(r);return s?s.length>0?s:[]:[e]}listNameRemaps(){const e={},t=new Set([...this.globalNameRemaps.keys(),...this.appNameRemaps.keys()]);for(const r of t)e[r]={appTargets:this.appNameRemaps.get(r),globalTargets:this.globalNameRemaps.get(r)};return e}normalizeTargets(e){const t=new Set,r=[];for(const i of e)!i||t.has(i)||(t.add(i),r.push(i));return r}}const jt=new Ri;z.put("contributionTargetMappingRegistry",jt);const ae="events/contributionregistry/contributionsChanged";class Ti{constructor(){this.contributions=new Map}registerContribution(e,t){const r=this.getOrCreateSlot(e);if("command"in t){const s=t;s.disabled instanceof Function&&(s.disabled=new xr.Computed(s.disabled))}r.push(t),w(ae,{target:e,contributions:r});const i=jt.getEffectiveTargets(e,t);for(const s of i){if(s===e)continue;const o=this.getContributions(s);w(ae,{target:s,contributions:o})}}getContributions(e){const t=[];for(const[r,i]of this.contributions.entries()){const s=i;for(const o of s)jt.getEffectiveTargets(r,o).includes(e)&&t.push(o)}return t.length===0&&this.getOrCreateSlot(e),t}getOrCreateSlot(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const v=new Ti;z.put("contributionRegistry",v);const ga={},Z=_e(null),bt=_e(null),un=_e(null),hn=_e(0),ce=_e(void 0);_e({name:"",timestamp:0});const $r="events/commandregistry/commandRegistered";class Pi{constructor(e,t,r,i,s){this.id=e,this.name=t,this.description=r,this.parameters=i||[],this.output=s||[]}}class ma{async execute(e,t){return ye.execute(e,t)}async undo(){}async redo(){}}class Li{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,t){this.handlers.has(e)||this.handlers.set(e,[]);const r=this.handlers.get(e);r.push(t),r.sort((i,s)=>(s.ranking??0)-(i.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:Z.get(),activeEditor:bt.get()}}execute(e,t={}){const r=this.getHandler(e);if(!r)throw $.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const i=this.getCommand(e),s=t.params?` params: ${JSON.stringify(t.params)}`:"";$.debug(`[CommandRegistry] Executing command: ${e}${i?` (${i.name})`:""}${s}`);for(const o of r)if(o.canExecute===void 0||o.canExecute(t))try{const l=o.execute(t);return $.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${l})`),l}catch(l){const a=l instanceof Error?l.message:String(l);throw $.error(`[CommandRegistry] Command execution failed: ${e} - ${a}`),l}$.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,t,r,i,s){const o=new Pi(e,t,r,i);this.registerCommand(o),s&&this.registerHandler(e,s)}registerCommand(e){this.commands[e.id]=e,w($r,e)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(t=>(ye.getHandler(t.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(e))).reduce((t,r)=>(t[r.id]=r,t),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const t=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(t,e.handler),e.contribution&&e.contribution.target&&v.registerContribution(e.contribution.target,{command:t,...e.contribution})}}const ye=new Li;z.put("commandRegistry",ye);const N=n=>{ye.registerAll(n)},Er=(n,e)=>{const t=new xr.subtle.Watcher(async()=>{try{await 0,e(n.get())}finally{t.watch(n)}});return t.watch(n),n.get(),()=>{t.unwatch(n)}};Object.defineProperty(kr.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});const _i=di(kr);class Et extends _i{constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>pi(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,t){const r=M(e,t.bind(this));this.eventSubscriptions.add(r)}showInfo(e){$e(e)}showError(e){F(e)}nobubble(e){return t=>{t.stopPropagation(),e.bind(this)(t)}}command(e,t={}){return()=>{this.executeCommand(e,t)}}executeCommand(e,t){const r=ye.createExecutionContext(t);ye.execute(e,r)}watch(e,t){const r=Er(e,t.bind(this));this.signalCleanups.add(r)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}var Ai=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,St=(n,e,t,r)=>{for(var i=r>1?void 0:r?Di(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Ai(e,t,i),i};let Fe=class extends Et{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const n=this.name.trim().split(/ +/),e=n.pop(),t=n.pop();return p`
            <wa-icon library="${t||C}" variant="${this.variant||C}"
                         family="${this.family||C}" name=${e} label="${this.label||this.name||C}"></wa-icon>`}};Fe.styles=B`
        :host {
            display: contents;
        }
    `;St([m()],Fe.prototype,"name",2);St([m()],Fe.prototype,"family",2);St([m()],Fe.prototype,"variant",2);St([m()],Fe.prototype,"label",2);Fe=St([L("lyra-icon")],Fe);function En(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var We=En();function Sr(n){We=n}var ze={exec:()=>null};function y(n,e=""){let t=typeof n=="string"?n:n.source,r={replace:(i,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(j.caret,"$1"),t=t.replace(i,o),r},getRegex:()=>new RegExp(t,e)};return r}var Oi=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),j={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},Ii=/^(?:[ \t]*(?:\n|$))+/,zi=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ni=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ct=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Fi=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Sn=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Cr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Rr=y(Cr).replace(/bull/g,Sn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ui=y(Cr).replace(/bull/g,Sn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Cn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Bi=/^[^\n]+/,Rn=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ji=y(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Rn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Mi=y(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Sn).getRegex(),Zt="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Tn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Wi=y("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Tn).replace("tag",Zt).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Tr=y(Cn).replace("hr",Ct).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Zt).getRegex(),qi=y(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Tr).getRegex(),Pn={blockquote:qi,code:zi,def:ji,fences:Ni,heading:Fi,hr:Ct,html:Wi,lheading:Rr,list:Mi,newline:Ii,paragraph:Tr,table:ze,text:Bi},er=y("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ct).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Zt).getRegex(),Hi={...Pn,lheading:Ui,table:er,paragraph:y(Cn).replace("hr",Ct).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",er).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Zt).getRegex()},Gi={...Pn,html:y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Tn).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ze,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:y(Cn).replace("hr",Ct).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Rr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ki=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Vi=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Pr=/^( {2,}|\\)\n(?!\s*$)/,Xi=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Qt=/[\p{P}\p{S}]/u,Ln=/[\s\p{P}\p{S}]/u,Lr=/[^\s\p{P}\p{S}]/u,Yi=y(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ln).getRegex(),_r=/(?!~)[\p{P}\p{S}]/u,Zi=/(?!~)[\s\p{P}\p{S}]/u,Qi=/(?:[^\s\p{P}\p{S}]|~)/u,Ar=/(?![*_])[\p{P}\p{S}]/u,Ji=/(?![*_])[\s\p{P}\p{S}]/u,es=/(?:[^\s\p{P}\p{S}]|[*_])/u,ts=y(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Oi?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Dr=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ns=y(Dr,"u").replace(/punct/g,Qt).getRegex(),rs=y(Dr,"u").replace(/punct/g,_r).getRegex(),Or="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",is=y(Or,"gu").replace(/notPunctSpace/g,Lr).replace(/punctSpace/g,Ln).replace(/punct/g,Qt).getRegex(),ss=y(Or,"gu").replace(/notPunctSpace/g,Qi).replace(/punctSpace/g,Zi).replace(/punct/g,_r).getRegex(),os=y("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Lr).replace(/punctSpace/g,Ln).replace(/punct/g,Qt).getRegex(),as=y(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Ar).getRegex(),ls="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",cs=y(ls,"gu").replace(/notPunctSpace/g,es).replace(/punctSpace/g,Ji).replace(/punct/g,Ar).getRegex(),ds=y(/\\(punct)/,"gu").replace(/punct/g,Qt).getRegex(),ps=y(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),us=y(Tn).replace("(?:-->|$)","-->").getRegex(),hs=y("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",us).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Mt=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,fs=y(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Mt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ir=y(/^!?\[(label)\]\[(ref)\]/).replace("label",Mt).replace("ref",Rn).getRegex(),zr=y(/^!?\[(ref)\](?:\[\])?/).replace("ref",Rn).getRegex(),gs=y("reflink|nolink(?!\\()","g").replace("reflink",Ir).replace("nolink",zr).getRegex(),tr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,_n={_backpedal:ze,anyPunctuation:ds,autolink:ps,blockSkip:ts,br:Pr,code:Vi,del:ze,delLDelim:ze,delRDelim:ze,emStrongLDelim:ns,emStrongRDelimAst:is,emStrongRDelimUnd:os,escape:Ki,link:fs,nolink:zr,punctuation:Yi,reflink:Ir,reflinkSearch:gs,tag:hs,text:Xi,url:ze},ms={..._n,link:y(/^!?\[(label)\]\((.*?)\)/).replace("label",Mt).getRegex(),reflink:y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Mt).getRegex()},fn={..._n,emStrongRDelimAst:ss,emStrongLDelim:rs,delLDelim:as,delRDelim:cs,url:y(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",tr).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:y(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",tr).getRegex()},bs={...fn,br:y(Pr).replace("{2,}","*").getRegex(),text:y(fn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ot={normal:Pn,gfm:Hi,pedantic:Gi},lt={normal:_n,gfm:fn,breaks:bs,pedantic:ms},ws={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nr=n=>ws[n];function le(n,e){if(e){if(j.escapeTest.test(n))return n.replace(j.escapeReplace,nr)}else if(j.escapeTestNoEncode.test(n))return n.replace(j.escapeReplaceNoEncode,nr);return n}function rr(n){try{n=encodeURI(n).replace(j.percentDecode,"%")}catch{return null}return n}function ir(n,e){let t=n.replace(j.findPipe,(s,o,l)=>{let a=!1,c=o;for(;--c>=0&&l[c]==="\\";)a=!a;return a?"|":" |"}),r=t.split(j.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(j.slashPipe,"|");return r}function ct(n,e,t){let r=n.length;if(r===0)return"";let i=0;for(;i<r&&n.charAt(r-i-1)===e;)i++;return n.slice(0,r-i)}function ys(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function vs(n,e=0){let t=e,r="";for(let i of n)if(i==="	"){let s=4-t%4;r+=" ".repeat(s),t+=s}else r+=i,t++;return r}function sr(n,e,t,r,i){let s=e.href,o=e.title||null,l=n[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;let a={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:o,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,a}function xs(n,e,t){let r=n.match(t.other.indentCodeCompensation);if(r===null)return e;let i=r[1];return e.split(`
`).map(s=>{let o=s.match(t.other.beginningSpace);if(o===null)return s;let[l]=o;return l.length>=i.length?s.slice(i.length):s}).join(`
`)}var Wt=class{options;rules;lexer;constructor(n){this.options=n||We}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:ct(t,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],r=xs(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let r=ct(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:ct(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=ct(e[0],`
`).split(`
`),r="",i="",s=[];for(;t.length>0;){let o=!1,l=[],a;for(a=0;a<t.length;a++)if(this.rules.other.blockquoteStart.test(t[a]))l.push(t[a]),o=!0;else if(!o)l.push(t[a]);else break;t=t.slice(a);let c=l.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,i=i?`${i}
${d}`:d;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,s,!0),this.lexer.state.top=u,t.length===0)break;let f=s.at(-1);if(f?.type==="code")break;if(f?.type==="blockquote"){let h=f,g=h.raw+`
`+t.join(`
`),T=this.blockquote(g);s[s.length-1]=T,r=r.substring(0,r.length-h.raw.length)+T.raw,i=i.substring(0,i.length-h.text.length)+T.text;break}else if(f?.type==="list"){let h=f,g=h.raw+`
`+t.join(`
`),T=this.list(g);s[s.length-1]=T,r=r.substring(0,r.length-f.raw.length)+T.raw,i=i.substring(0,i.length-h.raw.length)+T.raw,t=g.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:i}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),r=t.length>1,i={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");let s=this.rules.other.listItemRegex(t),o=!1;for(;n;){let a=!1,c="",d="";if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;c=e[0],n=n.substring(c.length);let u=vs(e[2].split(`
`,1)[0],e[1].length),f=n.split(`
`,1)[0],h=!u.trim(),g=0;if(this.options.pedantic?(g=2,d=u.trimStart()):h?g=e[1].length+1:(g=u.search(this.rules.other.nonSpaceChar),g=g>4?1:g,d=u.slice(g),g+=e[1].length),h&&this.rules.other.blankLine.test(f)&&(c+=f+`
`,n=n.substring(f.length+1),a=!0),!a){let T=this.rules.other.nextBulletRegex(g),_=this.rules.other.hrRegex(g),Q=this.rules.other.fencesBeginRegex(g),E=this.rules.other.headingBeginRegex(g),D=this.rules.other.htmlBeginRegex(g),Ge=this.rules.other.blockquoteBeginRegex(g);for(;n;){let J=n.split(`
`,1)[0],Oe;if(f=J,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),Oe=f):Oe=f.replace(this.rules.other.tabCharGlobal,"    "),Q.test(f)||E.test(f)||D.test(f)||Ge.test(f)||T.test(f)||_.test(f))break;if(Oe.search(this.rules.other.nonSpaceChar)>=g||!f.trim())d+=`
`+Oe.slice(g);else{if(h||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Q.test(u)||E.test(u)||_.test(u))break;d+=`
`+f}h=!f.trim(),c+=J+`
`,n=n.substring(J.length+1),u=Oe.slice(g)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(o=!0)),i.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),i.raw+=c}let l=i.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let a of i.items){if(this.lexer.state.top=!1,a.tokens=this.lexer.blockTokens(a.text,[]),a.task){if(a.text=a.text.replace(this.rules.other.listReplaceTask,""),a.tokens[0]?.type==="text"||a.tokens[0]?.type==="paragraph"){a.tokens[0].raw=a.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),a.tokens[0].text=a.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}}let c=this.rules.other.listTaskCheckbox.exec(a.raw);if(c){let d={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};a.checked=d.checked,i.loose?a.tokens[0]&&["paragraph","text"].includes(a.tokens[0].type)&&"tokens"in a.tokens[0]&&a.tokens[0].tokens?(a.tokens[0].raw=d.raw+a.tokens[0].raw,a.tokens[0].text=d.raw+a.tokens[0].text,a.tokens[0].tokens.unshift(d)):a.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):a.tokens.unshift(d)}}if(!i.loose){let c=a.tokens.filter(u=>u.type==="space"),d=c.length>0&&c.some(u=>this.rules.other.anyLine.test(u.raw));i.loose=d}}if(i.loose)for(let a of i.items){a.loose=!0;for(let c of a.tokens)c.type==="text"&&(c.type="paragraph")}return i}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:i}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=ir(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(let o of r)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<t.length;o++)s.header.push({text:t[o],tokens:this.lexer.inline(t[o]),header:!0,align:s.align[o]});for(let o of i)s.rows.push(ir(o,s.header.length).map((l,a)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[a]})));return s}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=ct(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=ys(e[2],"()");if(s===-2)return;if(s>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),sr(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[r.toLowerCase()];if(!i){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return sr(t,i,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!t||this.rules.inline.punctuation.exec(t))){let i=[...r[0]].length-1,s,o,l=i,a=0,c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*n.length+i);(r=c.exec(e))!=null;){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s)continue;if(o=[...s].length,r[3]||r[4]){l+=o;continue}else if((r[5]||r[6])&&i%3&&!((i+o)%3)){a+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+a);let d=[...r[0]][0].length,u=n.slice(0,i+r.index+d+o);if(Math.min(i,o)%2){let h=u.slice(1,-1);return{type:"em",raw:u,text:h,tokens:this.lexer.inlineTokens(h)}}let f=u.slice(2,-2);return{type:"strong",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let r=this.rules.inline.delLDelim.exec(n);if(r&&(!r[1]||!t||this.rules.inline.punctuation.exec(t))){let i=[...r[0]].length-1,s,o,l=i,a=this.rules.inline.delRDelim;for(a.lastIndex=0,e=e.slice(-1*n.length+i);(r=a.exec(e))!=null;){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s||(o=[...s].length,o!==i))continue;if(r[3]||r[4]){l+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l);let c=[...r[0]][0].length,d=n.slice(0,i+r.index+c+o),u=d.slice(i,-i);return{type:"del",raw:d,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,r;if(e[2]==="@")t=e[0],r="mailto:"+t;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);t=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},ie=class gn{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||We,this.options.tokenizer=this.options.tokenizer||new Wt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:j,block:Ot.normal,inline:lt.normal};this.options.pedantic?(t.block=Ot.pedantic,t.inline=lt.pedantic):this.options.gfm&&(t.block=Ot.gfm,this.options.breaks?t.inline=lt.breaks:t.inline=lt.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ot,inline:lt}}static lex(e,t){return new gn(t).lex(e)}static lexInline(e,t){return new gn(t).inlineTokens(e)}lex(e){e=e.replace(j.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(j.tabCharGlobal,"    ").replace(j.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(o=>(i=o.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let o=t.at(-1);i.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let o=1/0,l=e.slice(1),a;this.options.extensions.startBlock.forEach(c=>{a=c.call({lexer:this},l),typeof a=="number"&&a>=0&&(o=Math.min(o,a))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){let o=t.at(-1);r&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,i=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)a.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)s=i[2]?i[2].length:0,r=r.slice(0,i.index+s)+"["+"a".repeat(i[0].length-s-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,l="";for(;e;){o||(l=""),o=!1;let a;if(this.options.extensions?.inline?.some(d=>(a=d.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let d=t.at(-1);a.type==="text"&&d?.type==="text"?(d.raw+=a.raw,d.text+=a.text):t.push(a);continue}if(a=this.tokenizer.emStrong(e,r,l)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.del(e,r,l)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),t.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),t.push(a);continue}let c=e;if(this.options.extensions?.startInline){let d=1/0,u=e.slice(1),f;this.options.extensions.startInline.forEach(h=>{f=h.call({lexer:this},u),typeof f=="number"&&f>=0&&(d=Math.min(d,f))}),d<1/0&&d>=0&&(c=e.substring(0,d+1))}if(a=this.tokenizer.inlineText(c)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(l=a.raw.slice(-1)),o=!0;let d=t.at(-1);d?.type==="text"?(d.raw+=a.raw,d.text+=a.text):t.push(a);continue}if(e){let d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}},qt=class{options;parser;constructor(n){this.options=n||We}space(n){return""}code({text:n,lang:e,escaped:t}){let r=(e||"").match(j.notSpaceStart)?.[0],i=n.replace(j.endingNewline,"")+`
`;return r?'<pre><code class="language-'+le(r)+'">'+(t?i:le(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:le(i,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,r="";for(let o=0;o<n.items.length;o++){let l=n.items[o];r+=this.listitem(l)}let i=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+r+"</"+i+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let i=0;i<n.header.length;i++)t+=this.tablecell(n.header[i]);e+=this.tablerow({text:t});let r="";for(let i=0;i<n.rows.length;i++){let s=n.rows[i];t="";for(let o=0;o<s.length;o++)t+=this.tablecell(s[o]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${le(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let r=this.parser.parseInline(t),i=rr(n);if(i===null)return r;n=i;let s='<a href="'+n+'"';return e&&(s+=' title="'+le(e)+'"'),s+=">"+r+"</a>",s}image({href:n,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let i=rr(n);if(i===null)return le(t);n=i;let s=`<img src="${n}" alt="${le(t)}"`;return e&&(s+=` title="${le(e)}"`),s+=">",s}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:le(n.text)}},An=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},se=class mn{options;renderer;textRenderer;constructor(e){this.options=e||We,this.options.renderer=this.options.renderer||new qt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new An}static parse(e,t){return new mn(t).parse(e)}static parseInline(e,t){return new mn(t).parseInline(e)}parse(e){let t="";for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let o=i,l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){t+=l||"";continue}}let s=i;switch(s.type){case"space":{t+=this.renderer.space(s);break}case"hr":{t+=this.renderer.hr(s);break}case"heading":{t+=this.renderer.heading(s);break}case"code":{t+=this.renderer.code(s);break}case"table":{t+=this.renderer.table(s);break}case"blockquote":{t+=this.renderer.blockquote(s);break}case"list":{t+=this.renderer.list(s);break}case"checkbox":{t+=this.renderer.checkbox(s);break}case"html":{t+=this.renderer.html(s);break}case"def":{t+=this.renderer.def(s);break}case"paragraph":{t+=this.renderer.paragraph(s);break}case"text":{t+=this.renderer.text(s);break}default:{let o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}parseInline(e,t=this.renderer){let r="";for(let i=0;i<e.length;i++){let s=e[i];if(this.options.extensions?.renderers?.[s.type]){let l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=l||"";continue}}let o=s;switch(o.type){case"escape":{r+=t.text(o);break}case"html":{r+=t.html(o);break}case"link":{r+=t.link(o);break}case"image":{r+=t.image(o);break}case"checkbox":{r+=t.checkbox(o);break}case"strong":{r+=t.strong(o);break}case"em":{r+=t.em(o);break}case"codespan":{r+=t.codespan(o);break}case"br":{r+=t.br(o);break}case"del":{r+=t.del(o);break}case"text":{r+=t.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}},ut=class{options;block;constructor(n){this.options=n||We}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?ie.lex:ie.lexInline}provideParser(){return this.block?se.parse:se.parseInline}},ks=class{defaults=En();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=se;Renderer=qt;TextRenderer=An;Lexer=ie;Tokenizer=Wt;Hooks=ut;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(let r of n)switch(t=t.concat(e.call(this,r)),r.type){case"table":{let i=r;for(let s of i.header)t=t.concat(this.walkTokens(s.tokens,e));for(let s of i.rows)for(let o of s)t=t.concat(this.walkTokens(o.tokens,e));break}case"list":{let i=r;t=t.concat(this.walkTokens(i.items,e));break}default:{let i=r;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{let o=i[s].flat(1/0);t=t.concat(this.walkTokens(o,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let s=e.renderers[i.name];s?e.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),t.renderer){let i=this.defaults.renderer||new qt(this.defaults);for(let s in t.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let o=s,l=t.renderer[o],a=i[o];i[o]=(...c)=>{let d=l.apply(i,c);return d===!1&&(d=a.apply(i,c)),d||""}}r.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new Wt(this.defaults);for(let s in t.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,l=t.tokenizer[o],a=i[o];i[o]=(...c)=>{let d=l.apply(i,c);return d===!1&&(d=a.apply(i,c)),d}}r.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new ut;for(let s in t.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let o=s,l=t.hooks[o],a=i[o];ut.passThroughHooks.has(s)?i[o]=c=>{if(this.defaults.async&&ut.passThroughHooksRespectAsync.has(s))return(async()=>{let u=await l.call(i,c);return a.call(i,u)})();let d=l.call(i,c);return a.call(i,d)}:i[o]=(...c)=>{if(this.defaults.async)return(async()=>{let u=await l.apply(i,c);return u===!1&&(u=await a.apply(i,c)),u})();let d=l.apply(i,c);return d===!1&&(d=a.apply(i,c)),d}}r.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,s=t.walkTokens;r.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return ie.lex(n,e??this.defaults)}parser(n,e){return se.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let r={...t},i={...this.defaults,...r},s=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=n),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(e):e,l=await(i.hooks?await i.hooks.provideLexer():n?ie.lex:ie.lexInline)(o,i),a=i.hooks?await i.hooks.processAllTokens(l):l;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let c=await(i.hooks?await i.hooks.provideParser():n?se.parse:se.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(c):c})().catch(s);try{i.hooks&&(e=i.hooks.preprocess(e));let o=(i.hooks?i.hooks.provideLexer():n?ie.lex:ie.lexInline)(e,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let l=(i.hooks?i.hooks.provideParser():n?se.parse:se.parseInline)(o,i);return i.hooks&&(l=i.hooks.postprocess(l)),l}catch(o){return s(o)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+le(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},Ue=new ks;function x(n,e){return Ue.parse(n,e)}x.options=x.setOptions=function(n){return Ue.setOptions(n),x.defaults=Ue.defaults,Sr(x.defaults),x};x.getDefaults=En;x.defaults=We;x.use=function(...n){return Ue.use(...n),x.defaults=Ue.defaults,Sr(x.defaults),x};x.walkTokens=function(n,e){return Ue.walkTokens(n,e)};x.parseInline=Ue.parseInline;x.Parser=se;x.parser=se.parse;x.Renderer=qt;x.TextRenderer=An;x.Lexer=ie;x.lexer=ie.lex;x.Tokenizer=Wt;x.Hooks=ut;x.parse=x;x.options;x.setOptions;x.use;x.walkTokens;x.parseInline;se.parse;ie.lex;var or={name:"@kispace-io/app",version:"1.3.2",description:"An IDE for working with geospatial data.",dependencies:{"@eclipse-lyra/core":"0.7.27","@eclipse-lyra/extension-python-runtime":"0.7.27","@eclipse-lyra/extension-utils":"0.7.27","@eclipse-lyra/extension-in-browser-ml":"0.7.27","@eclipse-lyra/extension-ai-system":"0.7.27","@eclipse-lyra/extension-command-palette":"0.7.27","@eclipse-lyra/extension-github-service":"0.7.27","@eclipse-lyra/extension-howto-system":"0.7.27","@eclipse-lyra/extension-md-editor":"0.7.27","@eclipse-lyra/extension-media-viewer":"0.7.27","@eclipse-lyra/extension-memory-usage":"0.7.27","@eclipse-lyra/extension-monaco-editor":"0.7.27","@eclipse-lyra/extension-notebook":"0.7.27","@eclipse-lyra/extension-settings-tree":"0.7.27","@eclipse-lyra/extension-sqleditor":"0.7.27","@eclipse-lyra/extension-duckdb":"0.7.26","@eclipse-lyra/extension-pglite":"0.7.27","@eclipse-lyra/extension-dataviewer":"0.7.27","@kispace-io/extension-catalog":"0.0.0","@kispace-io/extension-gtfs":"0.0.0","@kispace-io/extension-map-editor":"0.0.0","@kispace-io/extension-mapbuilder":"0.0.0","@kispace-io/extension-mapprops":"0.0.0","@kispace-io/extension-overpass":"0.0.0","@kispace-io/extension-style-editor":"0.0.0","@kispace-io/gs-lib":"1.3.2","font-gis":"1.0.6","pace-js":"1.2.4"}};const Nr="app-toolbars-main",st="app-toolbars-main-right",Fr="app-toolbars-main-center",Ur="app-toolbars-bottom",Jt="app-toolbars-bottom-center",Rt="app-toolbars-bottom-end",Br="system-views",Ht="system.layouts",Ee="editor-area-main",Gt="sidebar-main",jr="sidebar-main-bottom",Mr="sidebar-auxiliary",Dn="panel-bottom",$s="command-save",Wr=!1;var On=(n=>(n[n.LEFT=0]="LEFT",n[n.MIDDLE=1]="MIDDLE",n[n.RIGHT=2]="RIGHT",n[n.BACK=3]="BACK",n[n.FORWARD=4]="FORWARD",n))(On||{});const Es=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:$s,EDITOR_AREA_MAIN:Ee,HIDE_DOT_RESOURCE:Wr,MouseButton:On,PANEL_BOTTOM:Dn,SIDEBAR_AUXILIARY:Mr,SIDEBAR_MAIN:Gt,SIDEBAR_MAIN_BOTTOM:jr,SYSTEM_LAYOUTS:Ht,SYSTEM_VIEWS:Br,TOOLBAR_BOTTOM:Ur,TOOLBAR_BOTTOM_CENTER:Jt,TOOLBAR_BOTTOM_END:Rt,TOOLBAR_MAIN:Nr,TOOLBAR_MAIN_CENTER:Fr,TOOLBAR_MAIN_RIGHT:st},Symbol.toStringTag,{value:"Module"})),Ss="eclipse-lyra-persistence",ht="keyval",Cs=1;let rn=null;function ar(){return rn||(rn=new Promise((n,e)=>{const t=indexedDB.open(Ss,Cs);t.onerror=()=>e(t.error),t.onsuccess=()=>n(t.result),t.onupgradeneeded=r=>{r.target.result.createObjectStore(ht)}})),rn}class Rs{async persistObject(e,t){const r=await ar();return new Promise((i,s)=>{const l=r.transaction(ht,"readwrite").objectStore(ht),a=t==null?l.delete(e):l.put(t,e);a.onsuccess=()=>i(),a.onerror=()=>s(a.error)})}async getObject(e){const t=await ar();return new Promise((r,i)=>{const o=t.transaction(ht,"readonly").objectStore(ht).get(e);o.onsuccess=()=>r(o.result),o.onerror=()=>i(o.error)})}}const de=new Rs;z.put("persistenceService",de);const Ke=".geospace/settings.json",sn="dialogSettings",Ne="events/settings/changed";function qr(n,e){if(e){for(const[t,r]of Object.entries(e))if(r&&typeof r=="object"){const i=n[t];i?.properties&&r.properties?qr(i.properties,r.properties):n[t]={...r,properties:r.properties?{...r.properties}:void 0}}}}class Ts{constructor(){this.mergedSchema={type:"object",properties:{}}}async checkSettings(){this.appSettings||(this.appSettings=await de.getObject(Ke),this.appSettings||(this.appSettings={},await de.persistObject(Ke,this.appSettings)),w(Ne,this.appSettings))}registerSchema(e){const t=e.properties??(e.type==="object"?{}:void 0);t&&(this.mergedSchema.properties||(this.mergedSchema.properties={}),qr(this.mergedSchema.properties,t))}getCategories(){const e=this.mergedSchema.properties;return e?Object.entries(e).filter(([,t])=>t&&typeof t=="object").map(([t,r])=>({id:t,label:r.title??t,order:typeof r.order=="number"?r.order:0,schema:r})).sort((t,r)=>t.order-r.order):[]}getSchemaForCategory(e){return this.mergedSchema.properties?.[e]}getSchemaForSettingKey(e){const t=e.split(".").filter(Boolean);if(t.length===0)return this.mergedSchema;let r=this.mergedSchema;for(const i of t)if(r=r?.properties?.[i],!r)return;return r}traversePath(e,t,r){if(t.length===0)return null;let i=e;const s=t.length-1;for(let o=0;o<s;o++){const l=t[o];if(i[l]===void 0){if(!r)return null;i[l]={}}if(i[l]===null||typeof i[l]!="object")return null;i=i[l]}return{parent:i,key:t[s]}}async getAt(e){await this.checkSettings();const t=e.split(".").filter(Boolean);if(t.length===0)return this.appSettings;const r=this.traversePath(this.appSettings,t,!1);if(r)return r.parent[r.key]}async setAt(e,t){await this.checkSettings();const r=e.split(".").filter(Boolean);if(r.length===0)return;const i=this.traversePath(this.appSettings,r,!0);i&&(i.parent[i.key]=t,await de.persistObject(Ke,this.appSettings),w(Ne,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,t){await this.checkSettings(),this.appSettings[e]=t,await de.persistObject(Ke,this.appSettings),w(Ne,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await de.persistObject(Ke,this.appSettings),w(Ne,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[sn]||{})[e]}async setDialogSetting(e,t){await this.checkSettings();const r=this.appSettings[sn]||{};r[e]=t,this.appSettings[sn]=r,await de.persistObject(Ke,this.appSettings),w(Ne,this.appSettings)}}const P=new Ts;z.put("appSettings",P);class Ps{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,hn.set(this.updateCounter)}run(e,t){const r=this.createProgressMonitor(e);try{this.tasks.push(r),this.notifyUpdate(),t(r)}finally{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()}}async runAsync(e,t){const r=this.createProgressMonitor(e);return this.tasks.push(r),this.notifyUpdate(),t(r).finally(()=>{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()})}createProgressMonitor(e){const t={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(t,{set:(r,i,s)=>(r[i]=s,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const Ze=new Ps;z.put("taskService",Ze);const Ls=xe("EsmShService"),Tt=class V{isEsmShUrl(e){try{const t=new URL(e);return t.hostname==="esm.sh"||t.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(e){return this.isEsmShUrl(e)||this.isHttpUrl(e)?!1:this.parseSource(e)!==null}isHttpUrl(e){try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}parseSource(e){return!e||typeof e!="string"||(e=e.trim(),this.isHttpUrl(e))?null:e.startsWith(V.GITHUB_PREFIX)?this.parseGitHubSource(e):e.startsWith(V.JSR_PREFIX)?this.parseJsrSource(e):e.startsWith(V.PR_PREFIX)?this.parsePrSource(e):this.parseNpmSource(e)}parseGitHubSource(e){const r=e.substring(V.GITHUB_PREFIX.length).split("/");if(r.length<2)return null;const i=r[0],s=r[1];let o,l,a;const c=s.match(/^(.+?)(@(.+))?$/);return c?(o=c[1],l=c[3],r.length>2&&(a=r.slice(2).join("/")),{type:"github",owner:i,repo:o,version:l,path:a}):null}parseJsrSource(e){const t=e.substring(V.JSR_PREFIX.length);if(!t.startsWith("@"))return null;const r=t.split("/");if(r.length<2)return null;const i=r[0],s=r[1];let o,l,a;const c=s.match(/^(.+?)(@(.+))?$/);return c?(o=`${i}/${c[1]}`,l=c[3],r.length>2&&(a=r.slice(2).join("/")),{type:"jsr",package:o,version:l,path:a}):null}parsePrSource(e){const r=e.substring(V.PR_PREFIX.length).split("/");if(r.length<2)return null;const i=r[0],s=r[1];let o,l;const a=s.match(/^(.+?)@(.+)$/);return a?(o=a[1],l=a[2]):o=s,{type:"pr",owner:i,repo:o,commit:l}}parseNpmSource(e){const t=e.split("/"),r=t[0];let i,s,o;const l=r.match(/^(.+?)(@(.+))?$/);return l?(i=l[1],s=l[3],t.length>1&&(o=t.slice(1).join("/")),{type:"npm",package:i,version:s,path:o}):null}buildEsmShUrl(e,t){let r=V.ESM_SH_BASE;switch(e.type){case"npm":r+=`/${e.package}`,e.version&&(r+=`@${e.version}`),e.path&&(r+=`/${e.path}`);break;case"github":r+=`/${V.GITHUB_PREFIX}${e.owner}/${e.repo}`,e.version&&(r+=`@${e.version}`),e.path&&(r+=`/${e.path}`);break;case"jsr":r+=`/${V.JSR_PREFIX}${e.package}`,e.version&&(r+=`@${e.version}`),e.path&&(r+=`/${e.path}`);break;case"pr":r+=`/${V.PR_PREFIX}${e.owner}/${e.repo}`,e.commit&&(r+=`@${e.commit}`);break}const i=[];if(t?.deps){const s=Object.entries(t.deps).map(([o,l])=>`${o}@${l}`).join(",");i.push(`deps=${encodeURIComponent(s)}`)}return t?.target&&i.push(`target=${encodeURIComponent(t.target)}`),t?.dev&&i.push("dev"),t?.bundle===!1?i.push("bundle=false"):t?.bundle===!0&&i.push("bundle"),i.length>0&&(r+=`?${i.join("&")}`),r}normalizeToEsmSh(e,t){if(this.isEsmShUrl(e)||this.isHttpUrl(e))return e;const r=this.parseSource(e);return r?this.buildEsmShUrl(r,t):(Ls.warn(`Could not parse source identifier: ${e}`),e)}extractPackageName(e){const t=this.parseSource(e);if(!t)return null;switch(t.type){case"npm":return t.package||null;case"github":return`${t.owner}/${t.repo}`;case"jsr":return t.package||null;case"pr":return`${t.owner}/${t.repo}`}}isGitHubUrl(e){try{const t=new URL(e);return t.hostname==="github.com"||t.hostname==="www.github.com"}catch{return e.startsWith("https://github.com/")||e.startsWith("http://github.com/")}}convertGitHubUrlToSource(e){try{const r=new URL(e).pathname.split("/").filter(c=>c);if(r.length<2)throw new Error("Invalid GitHub URL format");const i=r[0];let s=r[1].replace(/\.git$/,""),o,l;r.length>2&&(r[2]==="blob"||r[2]==="tree"?(o=r[3]||"main",r[2]==="blob"&&r.length>4&&(l=r.slice(4).join("/"))):r[2]==="commit"?o=r[3]:l=r.slice(2).join("/"));let a=`${V.GITHUB_PREFIX}${i}/${s}`;return o&&(a+=`@${o}`),l&&(a+=`/${l}`),a}catch{const t=e.match(/github\.com\/([^\/]+)\/([^\/]+)/);return t?`${V.GITHUB_PREFIX}${t[1]}/${t[2].replace(/\.git$/,"")}`:e}}async fetchGitHubPackageJson(e){if(e.type!=="github")throw new Error("Source must be a GitHub source");const t=e.owner,r=e.repo,i=e.version||"main",s=`https://raw.githubusercontent.com/${t}/${r}/${i}/package.json`,o=await fetch(s);if(!o.ok)throw new Error(`Failed to fetch package.json: ${o.statusText}`);return await o.json()}};Tt.ESM_SH_BASE="https://esm.sh";Tt.GITHUB_PREFIX="gh/";Tt.JSR_PREFIX="jsr/";Tt.PR_PREFIX="pr/";let _s=Tt;const he=new _s;z.put("esmShService",he);const ft="events/extensionsregistry/extensionsConfigChanged",dt="extensions",lr="extensions.external";class As{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,M(Ne,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then()})}async loadPersistedExternalExtensions(){try{const e=await P.get(lr);e&&Array.isArray(e)&&e.forEach(t=>{this.extensions[t.id]=t})}catch(e){$.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(t=>t.external);await P.set(lr,e)}catch(e){$.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await P.get(dt),this.extensionsSettings||(await P.set(dt,[]),this.extensionsSettings=await P.get(dt)),w(ft,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,$.debug(`Registered extension: ${e.id}`),e.external&&this.savePersistedExternalExtensions().catch(t=>{$.error(`Failed to persist external extension: ${t}`)}),w(ft,this.extensionsSettings)}async loadExtensionFromUrl(e,t){$.info(`Loading extension from URL: ${e}...`);try{let r=e,i=`Extension from ${e}`;if(he.isSourceIdentifier(e)){const o=he.extractPackageName(e);o&&(i=`Extension: ${o}`),r=he.normalizeToEsmSh(e),$.debug(`Converted source identifier to esm.sh URL: ${e} -> ${r}`)}const s=t||`url:${r}`;if(this.isEnabled(s))return $.info(`Extension from URL ${r} is already enabled`),s;if(!this.extensions[s]){const o={id:s,name:i,description:`Extension loaded from: ${e}`,url:r};this.registerExtension(o),$.info(`Registered extension from URL: ${s}`)}return this.enable(s,!1),$.info(`Successfully enabled extension from URL: ${r}`),s}catch(r){throw $.error(`Failed to load extension from URL ${e}: ${r}`),r}}getExtensions(){return Object.values(this.extensions)}async loadEnabledExtensions(){await this.checkExtensionsConfig();const t=(this.extensionsSettings??[]).filter(r=>this.isEnabled(r.id)&&this.extensions[r.id]).map(r=>this.load(r.id).catch(i=>{F("Extension could not be loaded: "+i.message)}));await Promise.all(t)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(t=>t.id===e&&t.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,t=!1){this.isEnabled(e)||($.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,t)}).catch(r=>{$.error(`Could not load extension: ${e}: ${r}`)}))}async load(e,t=[]){if(this.loadedExtensions.has(e))return;const r=this.loadingPromises.get(e);if(r)return r;if(t.includes(e)){const o=[...t,e].join(" → ");throw new Error(`Circular dependency detected: ${o}`)}const i=this.extensions[e];if(!i)throw new Error("Extension not found: "+e);const s=(async()=>{try{if($.debug(`Loading extension: ${e}`),i.dependencies&&i.dependencies.length>0){const l=[...t,e];for(const a of i.dependencies)await this.load(a,l),this.isEnabled(a)||(await this.updateEnablementAsync(a,!0,!1),$.debug(`Auto-enabled dependency: ${a}`))}const o=await Ze.runAsync("Loading extension: "+i.name,async()=>{if(i.loader)return i.loader();if(i.url){let l=i.url;return he.isSourceIdentifier(i.url)&&(l=he.normalizeToEsmSh(i.url),$.debug(`Normalized extension URL: ${i.url} -> ${l}`)),import(l)}});if(this.loadedExtensions.add(e),o?.default instanceof Function)try{o.default(Ae.getProxy())}catch(l){throw $.error(`Error executing extension function for ${e}: ${l}`),l}}catch(o){throw this.loadedExtensions.delete(e),o}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,s),s}disable(e,t=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,t)}updateEnablement(e,t,r){this.checkExtensionsConfig().then(()=>{const i=this.extensionsSettings?.find(s=>s.id==e);i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),P.set(dt,this.extensionsSettings).then(()=>{if(r){const s=this.extensions[e];$e(t?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}w(ft,this.extensionsSettings)})})}async updateEnablementAsync(e,t,r){await this.checkExtensionsConfig();const i=this.extensionsSettings?.find(s=>s.id==e);if(i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),await P.set(dt,this.extensionsSettings),r){const s=this.extensions[e];$e(t?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}w(ft,this.extensionsSettings)}}const R=new As;z.put("extensionRegistry",R);const cr=["alt","ctrl","meta","shift"],Hr={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},Ds={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},Os={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},Is=new Set(Object.keys(Hr));function dr(n){return Os[n]??n}class zs{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),M($r,e=>{e.keyBinding&&this.registerKeyBinding(e.id,e.keyBinding)})}registerExistingCommandBindings(){const e=ye.listCommands();Object.values(e).forEach(t=>{t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)})}parseKeyBinding(e){if(!e||e.trim()==="")return null;const t=e.toUpperCase().split("+").map(o=>o.trim());if(t.length===0)return null;const r=t[t.length-1],i=t.slice(0,-1);if(t.length===1&&Is.has(r))return null;const s={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const o of i){const l=Hr[o];if(l===void 0)return null;s[l]=!0}return s.key=dr(r),s}getBindingKey(e){return[...cr.filter(r=>e[r]),e.key.toUpperCase()].join("+")}registerKeyBinding(e,t){const r=this.parseKeyBinding(t);if(!r)return $.error(`Invalid key binding: ${t}`),!1;r.commandId=e;const i=this.getBindingKey(r);this.bindings.has(i)||this.bindings.set(i,[]);const s=this.bindings.get(i);if(s.find(a=>a.commandId===e))return $.error(`Key binding ${t} already registered for command ${e}`),!1;const l=s.find(a=>a.commandId!==e);return l?($.warn(`Key binding ${t} already used by command ${l.commandId}; refusing for ${e}`),!1):(s.push(r),!0)}unregisterKeyBinding(e,t){if(t){const r=this.parseKeyBinding(t);if(r){const i=this.getBindingKey(r),s=this.bindings.get(i);if(s){const o=s.filter(l=>l.commandId!==e);o.length===0?this.bindings.delete(i):this.bindings.set(i,o)}}}else for(const[r,i]of this.bindings.entries()){const s=i.filter(o=>o.commandId!==e);s.length===0?this.bindings.delete(r):this.bindings.set(r,s)}}getKeyBindingsForCommand(e){const t=[];for(const r of this.bindings.values())for(const i of r)i.commandId===e&&t.push(this.formatKeyBinding(i));return t.sort()}formatKeyBinding(e){const t=cr.filter(i=>e[i]).map(i=>Ds[i]),r=e.key.length===1?e.key.toUpperCase():e.key.charAt(0).toUpperCase()+e.key.slice(1).toLowerCase();return t.push(r),t.join("+")}handleKeyDown(e){if(!this.enabled)return;const t={commandId:"",key:dr(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},r=this.getBindingKey(t),i=this.bindings.get(r);if(i&&i.length>0){const s=i[0];try{e.preventDefault(),e.stopPropagation();const o=ye.createExecutionContext({});ye.execute(s.commandId,o),$.debug(`Executed command via key binding: ${s.commandId}`)}catch(o){$.error(`Failed to execute command ${s.commandId}: ${o.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){const e=new Map;for(const[t,r]of this.bindings)e.set(t,[...r]);return e}clearAll(){this.bindings.clear()}}const Gr=new zs;z.put("keyBindingManager",Gr);class De extends Et{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let t=this;for(;t&&t!==document.body&&t!==document.documentElement;){const r=t.getAttribute("id");if(r){e.unshift(`#${r}`);break}const i=t.tagName.toLowerCase(),s=t.parentElement;if(!s)break;const l=Array.from(s.children).filter(a=>a.tagName.toLowerCase()===i).indexOf(t);l>=0?e.unshift(`${i}:${l}`):e.unshift(i),t=s}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),t=this.getAttribute("id");if(t){this.settingsKey=`${e}:${t}`;return}const r=this.buildDOMTreePath();r&&(this.settingsKey=`${e}:${r}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await P.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await P.setDialogSetting(this.settingsKey,e)}}const Kr=class extends De{dispose(){}getResult(){}renderMessage(e,t=!1){if(t){const r=x.parse(e,{async:!1});return p`<div class="dialog-message" style="white-space: normal;">${$t(r)}</div>`}return p`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};Kr.styles=[B`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let qe=Kr;const Ie=xe("DialogService"),Qe="dialogs",en={id:"ok",label:"OK",variant:"primary"},Vr={id:"cancel",label:"Cancel",variant:"default"},Ns={id:"close",label:"Close",variant:"default"};let Ve=null;function Fs(){return(!Ve||!document.body.contains(Ve))&&(Ve=document.createElement("div"),Ve.id="global-dialog-container",document.body.appendChild(Ve)),Ve}class Us{constructor(){this.contributions=new Map,this.contributionsChangeScheduled=!1,this.loadContributions(),M(ae,e=>{e.target===Qe&&(this.contributionsChangeScheduled||(this.contributionsChangeScheduled=!0,queueMicrotask(()=>{this.contributionsChangeScheduled=!1,this.loadContributions()})))})}loadContributions(){const e=v.getContributions(Qe);this.contributions.clear();for(const t of e){if(!t.id){Ie.warn("Dialog contribution missing id, skipping");continue}if(!t.component){Ie.warn(`Dialog contribution "${t.id}" has no component function, skipping`);continue}if(!t.onButton){Ie.warn(`Dialog contribution "${t.id}" has no onButton callback, skipping`);continue}this.contributions.set(t.id,t)}}async open(e,t){const r=this.contributions.get(e);if(!r)throw Ie.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(i=>{const s=Fs();let o=!0,l=null;const a=async()=>{if(o){if(o=!1,l)try{await l.dispose()}catch(h){const g=h instanceof Error?h.message:String(h);Ie.error(`Error disposing dialog content for "${e}": ${g}`)}try{const h=l?l.getResult():void 0;await r.onButton("close",h,u)}catch(h){const g=h instanceof Error?h.message:String(h);Ie.error(`Error executing close callback for dialog "${e}": ${g}`)}oe(p``,s),i()}},c=async h=>{try{const g=l?l.getResult():void 0;await r.onButton(h,g,u)!==!1&&a()}catch(g){const T=g instanceof Error?g.message:String(g);Ie.error(`Error executing button callback for dialog "${e}": ${T}`),a()}},d=r.buttons&&r.buttons.length>0?r.buttons:[en];t&&typeof t=="object"&&(t.close=a);const u={...t,close:a},f=p`
                <wa-dialog label="${r.label||e}" open @wa-request-close=${a}>
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
                         @dialog-ok=${()=>{const h=d.find(g=>g.id==="ok");h&&c(h.id)}}
                         @dialog-cancel=${()=>{const h=d.find(g=>g.id==="cancel");h?c(h.id):a()}}>
                        ${r.component(t)}
                        
                        <div class="dialog-service-footer">
                            ${d.map(h=>p`
                                <wa-button 
                                    variant="${h.variant||"default"}"
                                    ?disabled=${h.disabled}
                                    @click=${()=>c(h.id)}
                                >
                                    ${h.label}
                                </wa-button>
                            `)}
                        </div>
                    </div>
                </wa-dialog>
            `;oe(f,s),(async()=>{const h=Array.from(s.querySelectorAll("*"));for(const g of h)if(g instanceof qe){await g.updateComplete,l=g;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const In=new Us;z.put("dialogService",In);class zn extends De{}var Bs=Object.defineProperty,js=(n,e,t,r)=>{for(var i=void 0,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=o(e,t,i)||i);return i&&Bs(e,t,i),i};class X extends zn{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return C}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}activateContainingTab(){let e=this,t=null,r=null;for(;e;){const i=e.tagName?.toLowerCase();if(i==="wa-tab-panel"&&(t=e.getAttribute("name")),i==="lyra-tabs"){r=e;break}const s=e.parentElement;if(s)e=s;else{const o=e.getRootNode();e=o instanceof ShadowRoot?o.host:null}}r&&t!=null&&t!==""&&r.activate(t)}renderContextMenu(){return C}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,un.set(null),un.set(this),Z.set(null),Z.set(this)}}js([m()],X.prototype,"dirty");const K=xe("MarketplaceRegistry"),pr="events/marketplaceregistry/changed",ur="marketplace.catalogUrls";class Ms{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{K.error(`Failed to refresh catalogs on init: ${e.message}`)})})}async loadCatalogUrls(){try{const e=await P.get(ur);this.catalogUrls=Array.isArray(e)?e:[]}catch(e){K.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await P.set(ur,this.catalogUrls),w(pr,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){K.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),K.debug(`Added catalog URL: ${e}`);try{await this.refreshCatalogs()}catch(t){K.warn(`Failed to refresh catalogs immediately after adding: ${t}`)}}async addCatalogUrls(e){let t=0;for(const r of e){if(!this.isValidUrl(r)){K.warn(`Skipping invalid catalog URL: ${r}`);continue}this.catalogUrls.includes(r)||(this.catalogUrls.push(r),K.debug(`Added catalog URL: ${r}`),t++)}if(t!==0){await this.saveCatalogUrls();try{await this.refreshCatalogs()}catch(r){K.warn(`Failed to refresh catalogs after adding URLs: ${r}`)}}}async removeCatalogUrl(e){const t=this.catalogUrls.indexOf(e);t!==-1&&(this.catalogUrls.splice(t,1),await this.saveCatalogUrls(),K.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const t=this.loadingPromises.get(e);if(t)return t;const r=(async()=>{try{const i=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const s=await i.json();if(!s.extensions||!Array.isArray(s.extensions))throw new Error("Invalid catalog format: extensions array is required");return{name:s.name,description:s.description,extensions:s.extensions||[]}}catch(i){throw K.error(`Failed to fetch catalog from ${e}: ${i}`),i}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,r),r}async refreshCatalogs(){const e=this.catalogUrls.map(i=>this.fetchCatalog(i).catch(s=>(K.warn(`Failed to refresh catalog ${i}: ${s.message}`),null))),t=await Promise.allSettled(e);let r=0;t.forEach(i=>{if(i.status==="fulfilled"&&i.value){const s=i.value;s.extensions&&s.extensions.forEach(o=>{if(!R.getExtensions().find(l=>l.id===o.id)){const l={...o,external:!0};R.registerExtension(l),r++}})}}),K.debug(`Refreshed ${this.catalogUrls.length} catalogs, ${r} extensions registered`),r>0&&K.info(`Marketplace: ${r} new extension(s) available`),w(pr,{type:"refreshed"})}getMarketplaceExtension(e){const t=R.getExtensions().find(r=>r.id===e);if(t&&t.external)return t}isMarketplaceExtension(e){const t=R.getExtensions().find(r=>r.id===e);return t!==void 0&&t.external===!0}}const Xr=new Ms;z.put("marketplaceRegistry",Xr);const b=xe("AppLoader");function hr(n){if(!n)return"standard";const e=n.layout??n.layoutId;return typeof e=="object"?e.id:e??"standard"}function Ws(n){const e={};for(const[t,r]of Object.entries(n))e[t]=typeof r=="boolean"?r?"true":"false":r;return e}function we(n){return n instanceof Error?n.message:String(n)}function qs(n){try{const t=new URL(n).pathname.split("/").filter(Boolean);return t.length>0?t[t.length-1]:void 0}catch{const e=n.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function Hs(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const t=e[0];if(!(!t||t==="index.html"||t.endsWith(".html")))return t}const Nn=class gt{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,t){if(t?.hostConfig===!0&&typeof or<"u"){const r=or;e.name===void 0&&(e.name=r.name),e.version===void 0&&(e.version=r.version),e.description===void 0&&(e.description=r.description),e.dependencies===void 0&&(e.dependencies=r.dependencies),e.marketplaceCatalogUrls===void 0&&(e.marketplaceCatalogUrls=r.marketplaceCatalogUrls)}e.name=e.name??"app",e.version=e.version??"0.0.0",this.apps.has(e.name)&&b.warn(`App '${e.name}' is already registered. Overwriting.`),e.marketplaceCatalogUrls?.length&&Xr.addCatalogUrls(e.marketplaceCatalogUrls).catch(()=>{}),this.apps.set(e.name,e),t?.defaultAppName&&(this.defaultAppName=t.defaultAppName),t?.container&&(this.container=t.container),t?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadAppFromUrl(e){b.info(`Loading app from URL: ${e}...`);try{const t=await import(e);if(!t.default)throw new Error(`Module at ${e} does not have a default export`);const r=t.default;if(!r.name||!r.version)throw new Error(`Module at ${e} does not export a valid AppDefinition (name and version required)`);return b.info(`Successfully loaded app definition from URL: ${r.name}`),r}catch(t){throw b.error(`Failed to load app from URL ${e}: ${we(t)}`),t}}async start(){if(this.started){b.debug("AppLoader already started");return}this.started=!0;const e=new URLSearchParams(window.location.search),t=e.get("app"),r=e.get("appId"),i=Hs(),s=this.apps.size;let o;if(t&&(o=qs(t),o&&b.info(`Extracted app ID from URL path: ${o}`)),i&&b.info(`Extracted app ID from current page path: ${i}`),t)try{b.info(`URL parameter 'app' found: ${t}, attempting to load extension or app`);try{await R.loadExtensionFromUrl(t),b.info(`Successfully loaded extension from URL: ${t}`)}catch(a){b.info(`Failed to load as extension, trying as app definition: ${we(a)}`);try{const c=await this.loadAppFromUrl(t);if(this.registerApp(c),!c.name)throw new Error("App from URL has no name after registration");await this.loadApp(c.name,this.container),b.info(`Successfully loaded app from URL: ${t}`);return}catch(c){throw b.error(`Failed to load from URL as both extension and app: ${we(c)}`),c}}}catch(a){b.error(`Failed to load from URL parameter, falling back to default app: ${we(a)}`)}const l=await this.selectAppToLoad({appIdFromUrl:r,appIdFromPath:i,appIdFromAppUrl:o,appsBeforeExtension:s});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}findAppNameBySegment(e){if(this.apps.has(e))return e;for(const t of this.apps.values())if(t.path===e||t.name&&t.name.endsWith("/"+e))return t.name??void 0}dispatchLoadProgress(e){window.dispatchEvent(new CustomEvent("app-load-progress",{detail:{message:e}}))}async loadApp(e,t){const r=this.apps.get(e);if(!r)throw new Error(`App '${e}' not found. Make sure it's registered.`);if(this.dispatchLoadProgress("Starting…"),this.currentApp&&(b.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(b.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{R.disable(s)}))),jt.applyAppNameRemaps(r.remaps),r.remaps?.length){const s=new Set;for(const o of r.remaps)for(const l of o.targets)s.add(l);for(const o of s){const l=v.getContributions(o);w(ae,{target:o,contributions:l})}}r.contributions&&(b.info("Registering app contributions..."),r.contributions.ui&&(r.contributions.ui.forEach(s=>{const o=s.target;o&&v.registerContribution(o,s)}),b.info(`Registered ${r.contributions.ui.length} UI contributions`)),r.contributions.extensions&&(r.contributions.extensions.forEach(s=>{R.registerExtension(s)}),b.info(`Registered ${r.contributions.extensions.length} app extensions`)));const i=new Set(r.extensions||[]);this.systemRequiredExtensions.forEach(s=>i.add(s)),r.extensions=Array.from(i),this.dispatchLoadProgress("Loading extensions…"),await R.loadEnabledExtensions(),r.extensions.length>0&&(this.dispatchLoadProgress("Enabling extensions…"),r.extensions.forEach(s=>{R.enable(s)})),r.initialize&&(this.dispatchLoadProgress("Initializing…"),b.info(`Initializing ${r.name}...`),await r.initialize()),this.currentApp=r,b.info(`App ${r.name} loaded successfully`),this.preferredLayoutId=await this.getPreferredLayoutId(),this.updateDocumentMetadata(r),t&&(this.dispatchLoadProgress("Rendering layout…"),this.renderApp(t)),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appName:r.name}}))}updateDocumentMetadata(e){if(document.title=e.name??"",e.metadata?.favicon){const t=e.metadata.favicon;let r=document.querySelector("link[rel*='icon']");r||(r=document.createElement("link"),r.rel="icon",document.head.appendChild(r)),r.type="image/svg+xml",r.href=t}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const t=this.preferredLayoutId??hr(this.currentApp),r=v.getContributions(Ht);let i=r.find(a=>a.id===t);if(i||(b.warn(`Layout '${t}' not found, falling back to 'standard'`),i=r.find(a=>a.id==="standard")),!i)throw new Error(`No layout found for layoutId '${t}' and no 'standard' layout registered.`);const s=i.component;let o={};s&&typeof s=="object"&&"tag"in s&&s.attributes&&(o={...s.attributes});const l=this.currentApp?.layout;if(typeof l=="object"&&l.id===t&&l.props&&Object.assign(o,Ws(l.props)),e.innerHTML="",typeof s=="string"){const a=document.createElement(s);for(const[c,d]of Object.entries(o))a.setAttribute(c,d);e.appendChild(a)}else if(s&&typeof s=="object"&&"tag"in s){const a=document.createElement(s.tag);for(const[c,d]of Object.entries(o))a.setAttribute(c,d);e.appendChild(a)}else if(typeof s=="function")oe(s(),e);else throw new Error(`Layout '${i.id}' has invalid component.`);i.onShow&&requestAnimationFrame(()=>{Promise.resolve(i.onShow()).catch(a=>b.error(`Layout onShow failed for '${i.id}': ${we(a)}`))})}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await P.get(gt.PREFERRED_APP_KEY)}catch(e){b.debug(`Failed to get preferred app ID from settings: ${we(e)}`);return}}async setPreferredAppId(e){if(!this.apps.has(e))throw new Error(`App '${e}' not found. Make sure it's registered.`);try{await P.set(gt.PREFERRED_APP_KEY,e),this.defaultAppName=e,b.info(`Set preferred app to: ${e}`)}catch(t){throw b.error(`Failed to persist preferred app: ${we(t)}`),t}}getRegisteredLayouts(){return v.getContributions(Ht)}getCurrentLayoutId(){return this.preferredLayoutId??hr(this.currentApp)}async getPreferredLayoutId(){try{return await P.get(gt.PREFERRED_LAYOUT_KEY)}catch(e){b.debug(`Failed to get preferred layout ID: ${we(e)}`);return}}async setPreferredLayoutId(e){if(!this.getRegisteredLayouts().some(r=>r.id===e))throw new Error(`Layout '${e}' not found.`);try{await P.set(gt.PREFERRED_LAYOUT_KEY,e),this.preferredLayoutId=e,b.info(`Set preferred layout to: ${e}`),this.currentApp&&this.container&&this.renderApp(this.container),window.dispatchEvent(new CustomEvent("layout-changed",{detail:{layoutId:e}}))}catch(r){throw b.error(`Failed to persist preferred layout: ${we(r)}`),r}}async selectAppToLoad(e){const{appIdFromUrl:t,appIdFromPath:r,appIdFromAppUrl:i,appsBeforeExtension:s}=e;if(t){const a=this.findAppNameBySegment(t)??t;if(this.apps.has(a))return b.info(`Loading app specified by URL parameter 'appId': ${a}`),a;b.warn(`App '${t}' from URL parameter not found`)}if(r){const a=this.findAppNameBySegment(r);if(a)return b.info(`Loading app from URL path: ${r}`),a;b.debug(`App for path '${r}' not found, continuing search`)}if(i){const a=this.findAppNameBySegment(i)??i;if(this.apps.has(a))return b.info(`Loading app using segment from app URL path: ${a}`),a}if(this.apps.size>s){const a=Array.from(this.apps.values()).slice(s);if(a.length>0){const c=a[0];return b.info(`Loading app registered by extension: ${c.name}`),c.name}}const o=await this.getPreferredAppId();if(o&&this.apps.has(o))return b.info(`Loading preferred app from settings: ${o}`),o;if(this.defaultAppName&&this.apps.has(this.defaultAppName))return this.defaultAppName;this.defaultAppName&&b.warn(`Default app '${this.defaultAppName}' not found`);const l=this.getRegisteredApps();if(l.length>0)return l[0].name}};Nn.PREFERRED_APP_KEY="preferredAppName";Nn.PREFERRED_LAYOUT_KEY="preferredLayoutId";let Gs=Nn;const Se=new Gs;z.put("appLoaderService",Se);var Ks=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,Pt=(n,e,t,r)=>{for(var i=r>1?void 0:r?Vs(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Ks(e,t,i),i};let Be=class extends qe{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(n){super.firstUpdated(n),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const t=e.shadowRoot?.querySelector("input");t&&(t.focus(),t.select())}}getResult(){return this.inputValue}handleInput(n){this.inputValue=n.target.value}handleKeyDown(n){n.key==="Enter"?(n.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):n.key==="Escape"&&(n.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};Be.styles=[...qe.styles,B`
            wa-input {
                width: 100%;
            }
        `];Pt([m({type:String})],Be.prototype,"message",2);Pt([m({type:String,attribute:"default-value"})],Be.prototype,"defaultValue",2);Pt([m({type:Boolean})],Be.prototype,"markdown",2);Pt([S()],Be.prototype,"inputValue",2);Be=Pt([L("lyra-prompt-dialog-content")],Be);v.registerContribution(Qe,{id:"prompt",label:"Input",buttons:[en,Vr],component:n=>n?p`
            <lyra-prompt-dialog-content 
                .message="${n.message}"
                .defaultValue="${n.defaultValue}"
                .markdown="${n.markdown}"
            ></lyra-prompt-dialog-content>
        `:p`<div>Error: No prompt dialog state</div>`,onButton:async(n,e,t)=>(t&&(n==="ok"?t.resolve(e||""):t.resolve(null)),!0)});async function Xs(n,e="",t=!1){return new Promise(r=>{In.open("prompt",{message:n,defaultValue:e,markdown:t,resolve:r})})}var Ys=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,Fn=(n,e,t,r)=>{for(var i=r>1?void 0:r?Zs(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Ys(e,t,i),i};let Kt=class extends qe{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};Fn([m({type:String})],Kt.prototype,"message",2);Fn([m({type:Boolean})],Kt.prototype,"markdown",2);Kt=Fn([L("lyra-info-dialog-content")],Kt);v.registerContribution(Qe,{id:"info",label:"Information",buttons:[en],component:n=>n?p`
            <lyra-info-dialog-content 
                .message="${n.message}"
                .markdown="${n.markdown}"
            ></lyra-info-dialog-content>
        `:p`<div>Error: No info dialog state</div>`,onButton:async(n,e,t)=>(t&&t.resolve&&t.resolve(),!0)});var Qs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Un=(n,e,t,r)=>{for(var i=r>1?void 0:r?Js(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Qs(e,t,i),i};let Vt=class extends qe{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};Un([m({type:String})],Vt.prototype,"message",2);Un([m({type:Boolean})],Vt.prototype,"markdown",2);Vt=Un([L("lyra-confirm-dialog-content")],Vt);v.registerContribution(Qe,{id:"confirm",label:"Confirm",buttons:[en,Vr],component:n=>n?p`
            <lyra-confirm-dialog-content 
                .message="${n.message}"
                .markdown="${n.markdown}"
            ></lyra-confirm-dialog-content>
        `:p`<div>Error: No confirm dialog state</div>`,onButton:async(n,e,t)=>(t&&(n==="ok"?t.resolve(!0):t.resolve(!1)),!0)});async function Yr(n,e=!1){return new Promise(t=>{In.open("confirm",{message:n,markdown:e,resolve:t})})}var eo=Object.defineProperty,to=Object.getOwnPropertyDescriptor,He=(n,e,t,r)=>{for(var i=r>1?void 0:r?to(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&eo(e,t,i),i};let ve=class extends qe{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(n){super.firstUpdated(n),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const t=this.closest(".dialog-service-content");if(t){const r=t.parentElement?.querySelector(".dialog-service-footer");r&&(r.style.display="none")}}updated(n){super.updated(n),n.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),n.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(n,e,t){this.currentTitle=n,this.currentMessage=e,this.actions=[...t],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(n){n.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const n=this.actions.filter(t=>t.label!=="Close"),e=this.actions.filter(t=>t.label==="Close");return p`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${n.map(t=>p`
                            <wa-button 
                                variant="${t.variant||"default"}"
                                ?disabled=${t.disabled}
                                @click=${()=>this.handleActionClick(t)}
                            >
                                ${t.label}
                            </wa-button>
                        `)}
                    </div>
                    <div class="dialog-actions-right">
                        ${e.map(t=>p`
                            <wa-button 
                                variant="${t.variant||"primary"}"
                                @click=${()=>{this.handleActionClick(t),this.handleClose()}}
                            >
                                ${t.label}
                            </wa-button>
                        `)}
                    </div>
                </div>
            </div>
        `}};ve.styles=[...qe.styles,B`
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
        `];He([m({type:String})],ve.prototype,"title",2);He([m({type:String})],ve.prototype,"message",2);He([m({type:Boolean})],ve.prototype,"markdown",2);He([S()],ve.prototype,"actions",2);He([S()],ve.prototype,"currentTitle",2);He([S()],ve.prototype,"currentMessage",2);ve=He([L("lyra-navigable-info-dialog-content")],ve);v.registerContribution(Qe,{id:"navigable-info",label:"Information",buttons:[Ns],component:n=>{if(!n)return p`<div>Error: No navigable info dialog state</div>`;const e=p`
            <lyra-navigable-info-dialog-content 
                .title="${n.title}"
                .message="${n.message}"
                .markdown="${n.markdown}"
            ></lyra-navigable-info-dialog-content>
        `;return(async()=>{const t=document.querySelector("lyra-navigable-info-dialog-content");t&&(await t.updateComplete,t.actions=n.actions||[],t.resolveCallback=n.resolve,n.updateDialogRef&&(n.updateDialogRef.current=(r,i,s)=>{t.updateDialog(r,i,s)}))})(),e},onButton:async(n,e,t)=>t&&n==="close"&&t.resolve?(t.resolve(),!0):!1});var no=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,be=(n,e,t,r)=>{for(var i=r>1?void 0:r?ro(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&no(e,t,i),i};const io=150;function on(n,e,t,r,i){const o=`Toolbar ${n??"default"}`,l=t.filter(c=>c.slot===n&&r(c)),a=n==="start"?p`<slot name="start"></slot>`:n==="end"?p`<slot name="end"></slot>`:p`<slot></slot>`;return p`
        <wa-button-group orientation=${e} label=${o}>
            ${a}
            ${l.map(i)}
        </wa-button-group>
    `}let te=class extends De{constructor(){super(...arguments),this.position="start",this.orientation="horizontal",this.align="start",this.size="small",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[],this.compact=!1,this.resizeObserver=null,this.resizeDebounceTimer=null,this.overflowCheckScheduled=!1,this.onResize=()=>{this.resizeDebounceTimer!==null&&clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=setTimeout(()=>{this.resizeDebounceTimer=null,this.updateCompactFromSpace()},io)}}updateCompactFromSpace(){const n=this.shadowRoot?.querySelector(".toolbar-items");if(!n)return;const e=n.scrollWidth>n.clientWidth;this.compact!==e&&(this.compact=e,this.requestUpdate())}scheduleOverflowCheck(){this.overflowCheckScheduled||(this.overflowCheckScheduled=!0,requestAnimationFrame(()=>{this.overflowCheckScheduled=!1,this.updateCompactFromSpace()}))}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=null,this.resizeDebounceTimer!==null&&(clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=null),super.disconnectedCallback()}updated(n){super.updated?.(n),this.compact||this.scheduleOverflowCheck()}doBeforeUI(){const n=this.getAttribute("id");n&&this.loadContributions(n),M(ae,e=>{if(!n)return;this.matchesTarget(n,e.target)&&(this.loadContributions(n),this.requestUpdate())})}matchesTarget(n,e){if(e===n)return!0;if(!n.includes(":"))return!1;const[t]=n.split(":");if(e===`${t}:*`)return!0;const r=e.split(":");if(r.length===2){const i=r[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&n.startsWith(`${t}:`)}return!1}loadContributions(n){const e=v.getContributions(n);if(!n.includes(":")){this.contributions=e;return}const[t]=n.split(":"),r=`${t}:*`,i=v.getContributions(r),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const a=`${t}:${l}`,c=v.getContributions(a);s.push(...c)}}this.contributions=[...i,...s,...e]}isToolbarItem(n){return"command"in n||"component"in n}contributionCreator(n){if("command"in n){const e=n,t=!this.compact&&!!e.showLabel;return p`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size=${this.size}>
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${t?e.label:""}
                </wa-button>
            `}if("component"in n){const e=n.component;return e instanceof Function?e():$t(e)}return p`<span>unknown contribution type: ${typeof n}</span>`}render(){const n=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"",e=this.orientation==="vertical"?"column":"row",t={start:"flex-start",center:"center",end:"flex-end"},r=this.contributionCreator.bind(this),i=this.isToolbarItem.bind(this);return p`
            <div class="toolbar-items" style=${ui({"flex-direction":e,"align-items":t[this.align],"justify-content":this.position})}>
                ${on("start",this.orientation,this.contributions,i,r)}
                ${n}
                ${on(void 0,this.orientation,this.contributions,i,r)}
                ${on("end",this.orientation,this.contributions,i,r)}
            </div>
        `}};te.styles=B`
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
    `;be([m()],te.prototype,"position",2);be([m({reflect:!0})],te.prototype,"orientation",2);be([m({reflect:!0})],te.prototype,"align",2);be([m({reflect:!0})],te.prototype,"size",2);be([m({type:Boolean,attribute:"is-editor"})],te.prototype,"isEditor",2);be([m({attribute:!1})],te.prototype,"partToolbarContent",2);be([m({attribute:!1})],te.prototype,"partToolbarRenderer",2);be([S()],te.prototype,"contributions",2);be([S()],te.prototype,"compact",2);te=be([L("lyra-toolbar")],te);var so=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,G=(n,e,t,r)=>{for(var i=r>1?void 0:r?oo(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&so(e,t,i),i};let U=class extends Et{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(n){if(!this.disabled){if(n&&n.stopPropagation(),this.action){this.action(n);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(n){const e=n.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const n=Gr.getKeyBindingsForCommand(this.cmd);return n.length>0?n[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),M(ae,n=>{this.dropdown&&n.target===this.dropdown&&(this.dropdownContributions=n.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=v.getContributions(this.dropdown),this.requestUpdate())}renderContribution(n){if("command"in n){const e=n,t=e.disabled?.get();return p`
                <lyra-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${t}">
                    ${e.label}
                </lyra-command>
            `}if("component"in n){const t=n.component;return t instanceof Function?t():$t(t)}return C}render(){const n=this.getKeybinding();return this.isInDropdown()?p`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    <lyra-icon name="${this.icon}" label="${this.title}" slot="icon"></lyra-icon>
                    <slot></slot>
                    ${n?p`<span class="keybinding">${n}</span>`:""}
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
                        title=${n?`${this.title} (${n})`:this.title}>
                        <lyra-icon slot="start" name="${this.icon}" label="${this.title}"></lyra-icon>
                        <slot></slot>
                        ${this.label?this.title:C}
                    </wa-button>
                    
                    ${this.title?p`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:C}
                    
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
                    `:C}
                </wa-dropdown>
            `:p`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${n?`${this.title} (${n})`:this.title}
                @click=${e=>this.handleClick(e)}>
                <lyra-icon slot="start" name="${this.icon}" label="${this.title}"></lyra-icon>
                <slot></slot>
            </wa-button>
        `}};U.styles=B`
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
    `;G([m()],U.prototype,"cmd",2);G([m({type:Object,attribute:!1})],U.prototype,"action",2);G([m()],U.prototype,"title",2);G([m()],U.prototype,"label",2);G([m()],U.prototype,"icon",2);G([m({type:Boolean})],U.prototype,"disabled",2);G([m()],U.prototype,"appearance",2);G([m()],U.prototype,"variant",2);G([m()],U.prototype,"size",2);G([m({type:Object,attribute:!1})],U.prototype,"params",2);G([m()],U.prototype,"dropdown",2);G([m()],U.prototype,"placement",2);G([S()],U.prototype,"dropdownContributions",2);U=G([L("lyra-command")],U);var ao=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,ot=(n,e,t,r)=>{for(var i=r>1?void 0:r?lo(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&ao(e,t,i),i};let Pe=class extends De{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Re(),this.dropdownRef=Re(),this.boundHandleDocumentPointerDown=this.handleDocumentPointerDown.bind(this)}handleDocumentPointerDown(n){if(!this.isOpen)return;const e=n.composedPath();this.dropdownRef.value&&e.includes(this.dropdownRef.value)||e.some(t=>t.getAttribute?.("part")==="submenu")||this.onClose()}doBeforeUI(){const n=this.getAttribute("id");n&&this.loadContributions(n),M(ae,e=>{if(!n)return;this.matchesTarget(n,e.target)&&(this.loadContributions(n),this.requestUpdate())})}matchesTarget(n,e){if(e===n)return!0;if(!n.includes(":"))return!1;const[t]=n.split(":");if(e===`${t}:*`)return!0;const r=e.split(":");if(r.length===2){const i=r[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&n.startsWith(`${t}:`)}return!1}loadContributions(n){const e=v.getContributions(n);if(!n.includes(":")){this.contributions=e;return}const[t]=n.split(":"),r=`${t}:*`,i=v.getContributions(r),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const a=`${t}:${l}`,c=v.getContributions(a);s.push(...c)}}this.contributions=[...i,...s,...e]}getElementFromPoint(n,e){let t=document.elementFromPoint(n,e);if(!t)return null;for(;t;){const r=t.shadowRoot;if(r){const i=r.elementFromPoint(n,e);if(i&&i!==t){t=i;continue}}break}return t}triggerClickUnderCursor(n){const e=this.getElementFromPoint(n.clientX,n.clientY);if(e){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:n.clientX,clientY:n.clientY,screenX:n.screenX,screenY:n.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(t)}}show(n,e){e&&this.triggerClickUnderCursor(e),this.position=n,this.isOpen=!0,this.updateComplete.then(()=>{document.addEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})})}onClose(){this.isOpen=!1,document.removeEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})}renderContribution(n){if("command"in n){const e=n,t=e.disabled?.get();return p`
                <lyra-command
                    cmd="${e.command}"
                    icon="${e.icon??""}"
                    .params=${e.params??{}}
                    ?disabled="${t}">
                    ${e.label}
                </lyra-command>
            `}else if("component"in n){const e=n.component;return e instanceof Function?e():$t(e)}return C}render(){if(!this.isOpen)return C;const n=this.partContextMenuRenderer?this.partContextMenuRenderer():C;return p`
            <wa-dropdown
                ${Te(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}>
                
                <div 
                    slot="trigger"
                    ${Te(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${n}
                ${this.contributions.map(e=>this.renderContribution(e))}
            </wa-dropdown>
        `}};Pe.styles=B`
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
    `;ot([m({type:Boolean,attribute:"is-editor"})],Pe.prototype,"isEditor",2);ot([m({attribute:!1})],Pe.prototype,"partContextMenuRenderer",2);ot([S()],Pe.prototype,"contributions",2);ot([S()],Pe.prototype,"isOpen",2);ot([S()],Pe.prototype,"position",2);Pe=ot([L("lyra-contextmenu")],Pe);var co=Object.defineProperty,po=Object.getOwnPropertyDescriptor,Bn=(n,e,t,r)=>{for(var i=r>1?void 0:r?po(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&co(e,t,i),i};let yt=class extends zn{constructor(){super(...arguments),this.placement="top",this.contributions=[],this.tabGroup=Re(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("lyra-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",n=>{const e=this.getTabPanel(n.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",n=>{const t=n.target.closest("wa-tab-panel");t&&(this.updateToolbarFromComponent(t),requestAnimationFrame(()=>this.updateToolbarHeightVariable(t)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",n=>{const t=n.target.closest("wa-tab-panel");t&&this.updateContextMenuFromComponent(t)}),this.tabGroup.value.addEventListener("click",n=>{const e=n.target,t=e.closest("wa-tab");if(t){const o=t.getAttribute("panel");if(o){const l=this.getTabPanel(o);if(l){const a=l.querySelector(".tab-content");if(a&&a.firstElementChild){const c=a.firstElementChild;c instanceof X&&Z.set(c)}}}return}const r=e.closest("wa-scroller.tab-content");if(!r)return;const i=r.closest("wa-tab-panel");if(!i)return;const s=i.querySelector(".tab-content");if(s&&s.firstElementChild){const o=s.firstElementChild;o instanceof X&&Z.set(o)}}),this.tabGroup.value.addEventListener("contextmenu",n=>{const e=n,t=e.target.closest("wa-scroller.tab-content");if(!t)return;e.preventDefault();const r=t.closest("wa-tab-panel");r&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(r);const i=r.querySelector("lyra-contextmenu");i&&i.show({x:e.clientX,y:e.clientY},e)})}))}),M(ae,n=>{!this.containerId||n.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(n){if(super.updated(n),n.has("contributions")){const e=this.containerId===Ee;this.contributions.forEach(t=>{const r=this.getTabPanel(t.name);if(!r)return;const i=r.querySelector(".tab-content");if(i&&i.firstElementChild){const s=i.firstElementChild;s instanceof X&&(s.tabContribution=t,s.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(r))})}}has(n){return this.tabGroup.value?!!this.getTabPanel(n):!1}activate(n){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",n)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(n){if(this.contributions.find(t=>t.name===n.name)){this.activate(n.name);return}this.contributions.push(n),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(n.name);const t=this.getTabPanel(n.name);if(t){const r=t.querySelector(".tab-content");if(r&&r.firstElementChild){const i=r.firstElementChild;i instanceof X&&(i.tabContribution=n,i.isEditor=this.containerId===Ee)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(t),this.updateToolbarHeightVariable(t),this.setupToolbarResizeObserver(t)})}})}handleTabAuxClick(n,e){n.button===On.MIDDLE&&e.closable&&this.closeTab(n,e.name)}async closeTab(n,e){if(n.stopPropagation(),this.isDirty(e)&&!await Yr("Unsaved changes will be lost: Do you really want to close?"))return;const t=this.getTabPanel(e);if(!t)return;const r=this.contributions.find(s=>s.name===e);if(!r)return;this.cleanupTabInstance(t);const i=this.contributions.indexOf(r);i>-1&&this.contributions.splice(i,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:t})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(n,e){this.getTab(n).classList.toggle("part-dirty",e)}isDirty(n){return this.getTab(n).classList.contains("part-dirty")}loadAndResolveContributions(){this.containerId&&(this.contributions=v.getContributions(this.containerId),this.requestUpdate())}cleanupTabInstance(n){const e=this.resizeObservers.get(n);e&&(e.disconnect(),this.resizeObservers.delete(n));const t=n.querySelector(".tab-content");if(t&&t.firstElementChild){const r=t.firstElementChild;"close"in r&&typeof r.close=="function"&&r.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const n=this.tabGroup.value.querySelectorAll("wa-tab");if(n.length>0){const e=n.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(n){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${n}']`):null}getTab(n){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${n}']`):null}updateToolbarFromComponent(n){const e=n.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof X)||!t.renderToolbar)return;const r=n.querySelector("lyra-toolbar");r&&(r.partToolbarRenderer=()=>t.renderToolbar(),r.requestUpdate())}updateContextMenuFromComponent(n){const e=n.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof X)||!t.renderContextMenu)return;const r=n.querySelector("lyra-contextmenu");r&&(r.partContextMenuRenderer=()=>t.renderContextMenu(),r.requestUpdate())}updateToolbarHeightVariable(n){const e=n.querySelector(".tab-toolbar");if(!e)return;const t=e.offsetHeight;n.style.setProperty("--toolbar-height",`${t}px`)}setupToolbarResizeObserver(n){if(this.resizeObservers.has(n))return;const e=n.querySelector(".tab-toolbar");if(!e)return;const t=new ResizeObserver(()=>{this.updateToolbarHeightVariable(n)});t.observe(e),this.resizeObservers.set(n,t)}render(){const n=Se.getCurrentApp();return p`
            <wa-tab-group ${Te(this.tabGroup)} placement=${this.placement}>
                ${A(this.contributions.length===0,()=>p`
                        <div class="empty-state">
                            ${A(n,()=>p`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${n.name}</h2>
                                        ${A(n.description,()=>p`<p class="empty-description">${n.description}</p>`)}
                                    </div>
                                `,()=>p`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>hi(this.contributions,e=>e.name,e=>p`
                            <wa-tab panel="${e.name}"
                                    @auxclick="${t=>this.handleTabAuxClick(t,e)}">
                                <lyra-icon name="${e.icon}"></lyra-icon>
                                ${e.label}
                                ${A(e.closable,()=>p`
                                    <wa-icon name="xmark" label="Close"  @click="${t=>this.closeTab(t,e.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${e.name}">
                                ${A(e.toolbar!==!1,()=>p`
                                    <lyra-toolbar id="toolbar:${e.editorId??e.name}"
                                               class="tab-toolbar"
                                               ?is-editor="${this.containerId===Ee}"></lyra-toolbar>
                                `)}
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${e.component?e.component(e.name):C}
                                </wa-scroller>
                                ${A(e.contextMenu!==!1,()=>p`
                                    <lyra-contextmenu id="contextmenu:${e.name}"
                                                   ?is-editor="${this.containerId===Ee}"></lyra-contextmenu>
                                `)}
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};yt.styles=B`
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
    `;Bn([m({reflect:!0})],yt.prototype,"placement",2);Bn([S()],yt.prototype,"contributions",2);yt=Bn([L("lyra-tabs")],yt);var uo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,Lt=(n,e,t,r)=>{for(var i=r>1?void 0:r?ho(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&uo(e,t,i),i};let Je=class extends De{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=n=>{if(!this.resizing)return;const t=(this.orientation==="horizontal"?n.clientX:n.clientY)-this.resizing.startPos,r=[...this.resizing.startSizes];r[this.resizing.handleIndex]+=t,r[this.resizing.handleIndex+1]-=t;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=i*.05;if(r[this.resizing.handleIndex]>=s&&r[this.resizing.handleIndex+1]>=s){this.resizing.currentSizes=r;const o=r.map((l,a)=>{const d=`${(l/i*100).toFixed(2)}%`;return a===r.length-1?d:`${d} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=o:this.style.gridTemplateRows=o}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const n=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/n*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const n=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(n.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=n,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(n){super.updated(n),n.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,t)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${t*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${t*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(n,e){if(n.preventDefault(),e>=this.gridChildren.length-1)return;const t=this.orientation==="horizontal"?n.clientX:n.clientY,r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(s=>s.endsWith("%")?parseFloat(s)/100*r:(s.endsWith("px"),parseFloat(s)));this.resizing={handleIndex:e,startPos:t,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return C;const n=this.gridSizes.flatMap((e,t)=>t===this.gridSizes.length-1?[e]:[e,"1px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=n,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=n),this.style.overflow="hidden",p`
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
            
            ${this.gridChildren.map((e,t)=>{if(t<this.gridChildren.length-1){const r=this.orientation==="horizontal"?`${t*2+2}`:"1",i=this.orientation==="vertical"?`${t*2+2}`:"1";return p`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${r};
                                grid-row: ${i};
                            "
                            @mousedown=${s=>this.startResize(s,t)}
                        ></div>
                    `}return C})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Lt([m()],Je.prototype,"orientation",2);Lt([m()],Je.prototype,"sizes",2);Lt([S()],Je.prototype,"gridSizes",2);Lt([S()],Je.prototype,"gridChildren",2);Je=Lt([L("lyra-resizable-grid")],Je);var fo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,jn=(n,e,t,r)=>{for(var i=r>1?void 0:r?go(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&fo(e,t,i),i};let vt=class extends Et{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return p`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};vt.styles=B`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;jn([m()],vt.prototype,"message",2);jn([m()],vt.prototype,"icon",2);vt=jn([L("lyra-no-content")],vt);const Xt="language",xt="en";function mo(n,e){return e?n.replace(/\{(\w+)\}/g,(t,r)=>e[r]!==void 0?e[r]:t):n}const Nt=new Set([xt]),Mn=_e(Nt);let Wn=null;function bo(n){let e=!1;for(const t of n){const r=t.toLowerCase().replace("-","_");Nt.has(r)||(Nt.add(r),e=!0)}if(e&&(Mn.set(new Set(Nt)),Wn===null)){const t=tn();t!==je.get()&&je.set(t)}}function tn(){const n=navigator.languages?.length?navigator.languages:[navigator.language||xt],e=Mn.get();for(const t of n){const r=t.split("-")[0].toLowerCase();if(e.has(r))return r}return xt}const je=_e(tn());async function wo(){const n=await P.get(Xt);Wn=n??null,je.set(n||tn())}M(Ne,n=>{Wn=n?.[Xt]??null,je.set(n?.[Xt]||tn())});wo();async function at(n,e=!1){const t={};await Promise.all(Object.entries(n).map(async([o,l])=>{const a=await l(),c=a&&"default"in a?a.default:a,f=(o.match(/\.([a-zA-Z-_]+)\.json$/)?.[1]??xt).toLowerCase().replace("-","_");t[f]=c})),bo(Object.keys(t));const r=o=>{const a=je.get().toLowerCase().replace("-","_"),[c,d]=a.split("_"),u=d?[`${c}_${d}`,c]:[c];u.push(xt);for(const f of u){const h=t[f];if(h&&o in h)return h[o]}return o},i=Object.assign({},{then:void 0,catch:void 0,finally:void 0}),s={get(o,l){if(l in o)return o[l];const a=r(l),c=(d=>mo(r(l),d));return c.toString=()=>e?r(l):a,c.valueOf=()=>e?r(l):a,c[Symbol.toPrimitive]=()=>e?r(l):a,e&&(c.toJSON=()=>r(l)),c}};return new Proxy(i,s)}const Y="events/filesys/workspaceChanged",ke="events/filesys/workspaceConnected",W=xe("WorkspaceService");class Zr{constructor(){this.state={}}getWorkspacePath(){const e=[];let t=this,r;for(;t;){e.push(t.getName());const s=t.getParent();s||(r=t),t=s}e.reverse();const i=typeof k?.getWorkspaceSync=="function"?k.getWorkspaceSync():void 0;if(i&&r&&"isDirectChild"in i&&typeof i.isDirectChild=="function"&&i.isDirectChild(r)){const s=i.getFolderNameForDirectory(r);if(s&&e.length>0)return e.length>1?s+"/"+e.slice(1).join("/"):s}return e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const t=e.getParent();if(t)e=t;else break}return e}}var qn=(n=>(n[n.TEXT=0]="TEXT",n[n.BINARY=1]="BINARY",n))(qn||{}),Qr=(n=>(n[n.BASE64=0]="BASE64",n))(Qr||{});class fe extends Zr{}class me extends Zr{}class wa extends fe{constructor(e,t){super(),this.contents=e,this.name=t}async getContents(e){return this.contents}async saveContents(e,t){this.contents=e}async size(){return this.contents.length||null}async copyTo(e){throw Error("Not supported")}delete(e,t){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class yo extends me{constructor(e,t="/"){super(),this.displayName=t,this.entriesByName=new Map(e.map(r=>[r.getName(),r]))}getFolderNameForDirectory(e){for(const[t,r]of this.entriesByName)if(r===e)return t}isDirectChild(e){return this.getFolderNameForDirectory(e)!==void 0}getName(){return this.displayName}getParent(){}async listChildren(e){return Array.from(this.entriesByName.values())}async getResource(e,t){if(!e||!e.trim())return null;const r=e.indexOf("/"),i=r>=0?e.slice(0,r).trim():e.trim(),s=r>=0?e.slice(r+1).trim():"",o=this.entriesByName.get(i);return o?s?o.getResource(s,t):o:null}touch(){for(const e of this.entriesByName.values())e.touch()}async delete(e,t){throw new Error("Delete not supported on workspace root")}async copyTo(e){throw new Error("Copy not supported on workspace root")}async rename(e){throw new Error("Rename not supported on workspace root")}getFolderByName(e){return this.entriesByName.get(e)}}const fr="workspace_data",Jr=class ei{constructor(){this._currentWorkspace=void 0,this.folders=[],this.contributions=new Map;let e;this.initPromise=new Promise(t=>{e=t}),this.loadPersistedWorkspace(e)}getWorkspaceSync(){return this._currentWorkspace}registerContribution(e){this.contributions.set(e.type,e)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(e){W.debug("Restoring workspace from persistence");try{const t=await de.getObject(fr);if(t||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),t?.folders&&Array.isArray(t.folders)&&t.folders.length>0){const r=t.folders.map(s=>({type:s.type,data:s.data}));await this.resolveFolders(r);const i=this.buildComposite();this.workspace=Promise.resolve(i),this._currentWorkspace=i??void 0,i&&(w(ke,i),W.debug("Workspace restored from persisted folders")),e();return}if(t&&t.type&&t.data!==void 0){const r=this.contributions.get(t.type);if(r?.restore)try{const i=await r.restore(t.data);if(i){this.folders=[{type:t.type,data:t.data,directory:i}];const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s??void 0,this.currentType=t.type,await this.persistFolders(),w(ke,s),W.debug("Workspace restored from legacy format")}}catch(i){W.error("Failed to restore legacy workspace:",i)}}this.workspace||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),e()}finally{if(this.folders.length===0)try{await this.connectFolder({indexeddb:!0,name:ei.DEFAULT_INDEXEDDB_FOLDER_NAME}),W.debug("Connected default IndexedDB workspace")}catch(t){W.warn("Failed to connect default IndexedDB folder",t)}}}async resolveFolders(e){this.folders=[];for(const t of e){const r=this.contributions.get(t.type);if(r?.restore)try{const i=await r.restore(t.data);i&&this.folders.push({type:t.type,data:t.data,directory:i})}catch(i){W.warn(`Failed to restore folder (${t.type}):`,i)}}}buildComposite(){if(this.folders.length!==0)return new yo(this.folders.map(e=>e.directory))}async persistFolders(){const e=this.folders.length>0?{folders:this.folders.map(t=>({type:t.type,data:t.data}))}:null;await de.persistObject(fr,e),await de.persistObject("workspace",null),W.debug(`Persisted ${this.folders.length} folder(s)`)}async getFolders(){return await this.initPromise,this.folders.map(e=>({name:e.directory.getName(),type:e.type}))}async getFolderInfoForDirectory(e){await this.initPromise;const t=this.folders.find(o=>o.directory===e);if(!t)return;const r=t.data&&typeof t.data=="object"&&t.data.name||t.directory.getName(),s=this.contributions.get(t.type)?.name??t.type;return{name:r,type:t.type,backendName:s}}async updateFolderName(e,t){await this.initPromise;const r=this.folders.find(s=>s.directory===e);if(!r)return;r.data&&typeof r.data=="object"?r.data={...r.data,name:t}:r.data={name:t},await this.persistFolders();const i=this.buildComposite();this.workspace=Promise.resolve(i),this._currentWorkspace=i??void 0,w(ke,i),W.debug(`Updated folder name: ${t}`)}async connectFolder(e){await this.initPromise;const t=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!t)throw new Error("No workspace contribution can handle this input");const r=e?.name??t.type;W.debug(`Connecting workspace: ${t.type}, ${r}`);const i=await t.connect(e),s=t.persist?await t.persist(i):e;this.folders.push({type:t.type,data:s,directory:i}),await this.persistFolders(),this.currentType=this.folders.length===1?t.type:void 0;const o=this.buildComposite();this.workspace=Promise.resolve(o),this._currentWorkspace=o,w(ke,o);const l=i.getName();return W.info(`Workspace connected: ${t.type} (${l})`),o}async disconnectFolder(e){await this.initPromise;const t=this.folders.findIndex(s=>s.directory===e);if(t<0)return;const r=this.folders[t];W.debug(`Disconnecting folder: ${r.directory.getName()} (${r.type})`),this.folders.splice(t,1),await this.persistFolders(),this.folders.length>0?this.currentType=this.folders[0].type:(this.currentType=void 0,W.info("Workspace disconnected"));const i=this.buildComposite();this.workspace=Promise.resolve(i),this._currentWorkspace=i??void 0,w(ke,i)}async connectWorkspace(e){return this.connectFolder(e)}async getWorkspace(){if(await this.initPromise,!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return this.folders.length>0}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){await this.initPromise,this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0,this.folders=[],this.currentType=void 0,await this.persistFolders(),w(ke,void 0),W.info("Workspace disconnected")}};Jr.DEFAULT_INDEXEDDB_FOLDER_NAME="My Folder";let vo=Jr;const k=new vo;z.put("workspaceService",k);class bn extends fe{constructor(e,t){super(),this.fileHandle=e,this.parent=t}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const t=await this.fileHandle.getFile();return!e||e?.contentType==qn.TEXT?await t.text():e?.encoding==Qr.BASE64||e?.uri?URL.createObjectURL(t):e?.blob?t:t.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,t){const r=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(r);else{const i=r.getWriter();try{await i.write(e)}finally{await i.close()}}}async copyTo(e){const t=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(t)}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):r}await t.listChildren(!0),w(Y,k.getWorkspaceSync()??this.getWorkspace())}}}class ge extends me{constructor(e,t){super(),this.dirHandle=e,this.parent=t}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const t={};try{for await(const r of this.dirHandle.values()){const s=r.kind==="file"?new bn(r,this):new ge(r,this);t[s.getName()]=s}}catch(r){if(r.name==="NotFoundError")return this.files={},[];throw r}return this.files=t,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,t){if(!e)throw new Error("No path provided");const r=e.split("/");let i=this,s=!1;try{for(let o=0;o<r.length;o++){let l=r[o];if(l&&(l=l.trim()),!l)break;if(i instanceof ge){if(await i.listChildren(),!i.files)return null;const a=i.files[l];if(a)i=a;else if(t?.create)if(s=!0,o<r.length-1)try{const c=await i.dirHandle.getDirectoryHandle(l,{create:!0}),d=new ge(c,i);i.files[l]=d,i=d,i instanceof ge&&await i.listChildren();continue}catch(c){throw c.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${r.slice(0,o+1).join("/")}`):c}else try{const c=await i.dirHandle.getFileHandle(l,{create:!0}),d=new bn(c,i);return i.files[l]=d,d}catch(c){throw c.name==="NotFoundError"?new Error(`File not found or not accessible: ${r.join("/")}`):c}else return null}}}finally{s&&w(Y,k.getWorkspaceSync()??this.getWorkspace())}return i}touch(){w(Y,k.getWorkspaceSync()??this.getWorkspace())}async delete(e,t=!0){if(!e){const r=this.getParent();return r instanceof ge&&(await r.listChildren(),r.files&&delete r.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,r?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:t}).then(async()=>{this.files&&delete this.files[e],w(Y,k.getWorkspaceSync()??this.getWorkspace())})}async copyTo(e){for(const t of await this.listChildren()){const r=[e,t.getName()].join("/");await t.copyTo(r)}}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):r}await t.listChildren(!0),w(Y,k.getWorkspaceSync()??this.getWorkspace())}}}k.registerContribution({type:"filesystem",name:"fs",canHandle(n){return n&&"kind"in n&&n.kind==="directory"},async connect(n){return new ge(n)},async restore(n){if(n&&"kind"in n&&n.kind==="directory")return new ge(n,void 0)},async persist(n){return n instanceof ge?n.getHandle():null}});const gr=Object.freeze(Object.defineProperty({__proto__:null,FileSysDirHandleResource:ge,FileSysFileHandleResource:bn},Symbol.toStringTag,{value:"Module"})),xo=".opfs";async function mr(){if(typeof navigator>"u"||!navigator.storage?.getDirectory)throw new Error("OPFS is not available in this environment");return await navigator.storage.getDirectory()}class an extends me{constructor(e){super(),this.inner=e}getName(){return xo}getParent(){return this.inner.getParent()}async listChildren(e){return this.inner.listChildren(e)}async getResource(e,t){return this.inner.getResource(e,t)}touch(){this.inner.touch()}async delete(e,t){return this.inner.delete(e,t)}async copyTo(e){return this.inner.copyTo(e)}async rename(e){return this.inner.rename(e)}}k.registerContribution({type:"opfs",name:"opfs",canHandle(n){return n&&typeof n=="object"&&n.opfs===!0},async connect(n){const e=await mr(),r=(await Promise.resolve().then(()=>gr)).FileSysDirHandleResource,i=new r(e);return new an(i)},async restore(n){if(n&&typeof n=="object"&&n.opfs===!0){const e=await mr(),r=(await Promise.resolve().then(()=>gr)).FileSysDirHandleResource,i=new r(e);return new an(i)}},async persist(n){return n instanceof an?{opfs:!0}:null}});const ko="eclipse-lyra-workspace-idb",q="files";let ln=null;async function Le(){if(typeof indexedDB>"u")throw new Error("IndexedDB is not available in this environment");return ln||(ln=new Promise((n,e)=>{const t=indexedDB.open(ko,1);t.onerror=()=>e(t.error),t.onsuccess=()=>n(t.result),t.onupgradeneeded=r=>{const i=r.target.result;i.objectStoreNames.contains(q)||i.createObjectStore(q)}})),ln}async function $o(){const n="IndexedDB",e=await k.getFolders(),t=new Set(e.filter(i=>i.type==="indexeddb").map(i=>i.name));if(!t.has(n))return n;let r=1;for(;t.has(`${n} (${r})`);)r+=1;return`${n} (${r})`}function et(n){return n?n.split("/").filter(Boolean).join("/"):""}function mt(n,e){const t=et(n),r=et(e);return t?r?`${t}/${r}`:t:r}function tt(n,e){const t=et(e);return t?`${n}/${t}`:n}function Eo(n,e){const t=et(e);return t?`${n}/${t}/`:`${n}/`}async function Ft(n,e){const i=(await Le()).transaction(q,"readonly").objectStore(q),s=e?tt(n,e):n;return await new Promise((o,l)=>{const a=i.get(s);a.onsuccess=()=>o(a.result),a.onerror=()=>l(a.error)})}async function wt(n,e,t){const s=(await Le()).transaction(q,"readwrite").objectStore(q),o=e?tt(n,e):n;await new Promise((l,a)=>{const c=s.put(t,o);c.onsuccess=()=>l(),c.onerror=()=>a(c.error)})}async function br(n,e){const i=(await Le()).transaction(q,"readwrite").objectStore(q),s=e?tt(n,e):n;await new Promise((o,l)=>{const a=i.delete(s);a.onsuccess=()=>o(),a.onerror=()=>l(a.error)})}async function So(n,e){const i=(await Le()).transaction(q,"readwrite").objectStore(q),s=tt(n,e),o=s+"/",l=i.openCursor();await new Promise((a,c)=>{l.onerror=()=>c(l.error),l.onsuccess=d=>{const u=d.target.result;if(!u){a();return}const f=String(u.key);(f===s||f.startsWith(o))&&u.delete(),u.continue()}})}async function Co(n,e,t){const s=(await Le()).transaction(q,"readwrite").objectStore(q),o=tt(n,e),l=tt(n,t),a=s.openCursor(),c=[];await new Promise((d,u)=>{a.onerror=()=>u(a.error),a.onsuccess=f=>{const h=f.target.result;if(!h){d();return}const g=String(h.key);if(g===o||g.startsWith(o+"/")){const T=g.slice(o.length),_=l+T,Q=h.value;c.push(()=>{h.delete(),s.put(Q,_)})}h.continue()}});for(const d of c)d()}async function Ro(n,e){const i=(await Le()).transaction(q,"readonly").objectStore(q),s=Eo(n,e),o=i.openCursor(),l=new Set,a=new Map;await new Promise((d,u)=>{o.onerror=()=>u(o.error),o.onsuccess=f=>{const h=f.target.result;if(!h){d();return}const g=String(h.key),T=h.value;if(!g.startsWith(s)){h.continue();return}const _=g.slice(s.length);if(!_){h.continue();return}const Q=_.indexOf("/"),E=Q===-1?_:_.slice(0,Q);Q===-1?T.type==="dir"?l.add(E):a.set(E,T):l.add(E),h.continue()}});const c=[];for(const d of l)c.push({name:d,entry:{type:"dir"},type:"dir"});for(const[d,u]of a)l.has(d)||c.push({name:d,entry:u,type:"file"});return c}function To(n){return n instanceof pe?n.getRootId():""}class cn extends fe{constructor(e,t){super(),this.path=et(e),this.parent=t}getName(){const e=this.path.split("/");return e[e.length-1]||""}getParent(){return this.parent}getRootId(){return To(this.parent)}async delete(){await br(this.getRootId(),this.path),w(Y,k.getWorkspaceSync()??this.getWorkspace())}async getContents(e){const t=await Ft(this.getRootId(),this.path);let r=t?.content;if(typeof r=="string"){const s=new Blob([r],{type:t?.mimeType||"text/plain"});r=s,t&&(t.content=s,await wt(this.getRootId(),this.path,t))}if(!e||e.contentType===qn.TEXT)return r?await r.text():"";let i;return r?i=r:i=new Blob([],{type:t?.mimeType}),e.blob?i:e.uri?URL.createObjectURL(i):i.stream()}async saveContents(e,t){let r,i;if(e instanceof Blob)r=e,i=e.type||void 0;else if(typeof e=="string")i="text/plain",r=new Blob([e],{type:i});else{const s=String(e??"");i="text/plain",r=new Blob([s],{type:i})}await wt(this.getRootId(),this.path,{type:"file",content:r,mimeType:i}),w(Y,k.getWorkspaceSync()??this.getWorkspace())}async size(){const t=(await Ft(this.getRootId(),this.path))?.content;return t?t.size:null}async copyTo(e){const t=await this.getContents({blob:!0}),r=await this.getWorkspace().getResource(e,{create:!0});if(!r)throw new Error(`Failed to create target file: ${e}`);await r.saveContents(t)}async rename(e){if(this.getName()===e)return;const t=this.getParent(),r=t instanceof pe?t.getPath():"",i=mt(r,e),s=this.getRootId(),o=await Ft(s,this.path);if(!o)throw new Error("File not found in IndexedDB");await br(s,this.path),await wt(s,i,o),w(Y,k.getWorkspaceSync()??this.getWorkspace())}}class pe extends me{constructor(e,t){super(),this.path=et(e),this.parent=t}getPath(){return this.path}getName(){if(!this.path)return"";const e=this.path.split("/");return e[e.length-1]}getParent(){return this.parent}getRoot(){const e=this.getParent();return e?e.getRoot():this}getRootId(){const e=this.getRoot();return e instanceof Ut?e.getRootId():""}async listChildren(e){const t=await Ro(this.getRootId(),this.path),r=[];for(const i of t){const s=mt(this.path,i.name);i.type==="dir"?r.push(new pe(s,this)):r.push(new cn(s,this))}return r}async getResource(e,t){if(!e)throw new Error("No path provided");const r=e.split("/").filter(s=>s.trim());let i=this;for(let s=0;s<r.length;s++){const o=r[s],l=s===r.length-1,a=i.getPath(),c=mt(a,o),d=this.getRootId(),u=await Ft(d,c);if(!u){if(!t?.create)return null;if(l)return await wt(d,c,{type:"file",content:new Blob([])}),w(Y,k.getWorkspaceSync()??this.getWorkspace()),new cn(c,i);await wt(d,c,{type:"dir"}),i=new pe(c,i);continue}if(l)return u.type==="dir"?new pe(c,i):new cn(c,i);if(u.type!=="dir")return null;i=new pe(c,i)}return i}touch(){w(Y,k.getWorkspaceSync()??this.getWorkspace())}async delete(e,t=!0){if(!e){const i=this.getParent();if(i instanceof pe){await i.delete(this.getName());return}return}const r=mt(this.path,e);await So(this.getRootId(),r),w(Y,k.getWorkspaceSync()??this.getWorkspace())}async copyTo(e){for(const t of await this.listChildren(!1)){const r=[e,t.getName()].join("/");await t.copyTo(r)}}async rename(e){if(this.getName()===e)return;const t=this.getParent();if(!(t instanceof pe))throw new Error("Cannot rename IndexedDB root directory");const r=this.getPath(),i=mt(t.getPath(),e);await Co(this.getRootId(),r,i),w(Y,k.getWorkspaceSync()??this.getWorkspace())}}class Ut extends pe{constructor(e,t){super(""),this.displayName=e||"IndexedDB",this.rootId=t}getRootId(){return this.rootId}getName(){return this.displayName}getParent(){}async rename(e){const t=String(e??"").trim();!t||t===this.displayName||(this.displayName=t,await k.updateFolderName(this,t))}}function Po(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"default-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}k.registerContribution({type:"indexeddb",name:"idb",canHandle(n){return n&&typeof n=="object"&&n.indexeddb===!0},async connect(n){await Le();const e=n.name&&String(n.name).trim(),t=e&&e.length>0?e:await $o(),r=Po();return new Ut(t,r)},async restore(n){if(n&&typeof n=="object"&&n.indexeddb===!0&&n.rootId){await Le();const e=n.name&&String(n.name).trim()||"IndexedDB";return new Ut(e,String(n.rootId))}},async persist(n){return n instanceof Ut?{indexeddb:!0,name:n.getName(),rootId:n.getRootId()}:null}});class Lo{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,M(ke,()=>{}),M(ae,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=v.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((t,r)=>{const i=t.priority??0,s=r.priority??0;return s!==i?s-i:t.label.localeCompare(r.label)}),this.cachedIconContributions}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const t=s=>{const o=s.detail;o&&Array.from(o.querySelectorAll("*")).filter(a=>a instanceof X).forEach(a=>{Z.set(a),a.isEditor&&bt.set(a)})};e.addEventListener("tab-shown",t);const r=s=>{const o=s.detail;Array.from(o.querySelectorAll("*")).filter(a=>a instanceof X).forEach(a=>{Z.get()==a&&Z.set(null),bt.get()==a&&bt.set(null)})};e.addEventListener("tab-closed",r);const i=s=>{const l=s.closest("wa-tab-panel").getAttribute("name");e.markDirty(l,s.isDirty())};this.signalCleanup=Er(un,i)}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((t,r)=>{const i=t.definition.ranking??0;return(r.definition.ranking??0)-i})}async ensureHandlerInitialized(e){const t=e.definition;!t.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(t.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(r=>{throw e.lazyInitPromise=void 0,r})),await e.lazyInitPromise)}getEditorOptionsForInput(e){const t=new Set,r=[];for(const i of this.editorInputHandlers){const s=i.definition;!s.canHandle(e)||t.has(s.editorId)||(t.add(s.editorId),r.push({editorId:s.editorId,title:s.label,icon:s.icon}))}return r}async handleInput(e,t){if(t!==void 0){const r=this.editorInputHandlers.find(i=>i.definition.editorId===t);if(r){await this.ensureHandlerInitialized(r);const i=await r.definition.handle(e);return i&&(i.editorId=r.definition.editorId),i}return}for(let r=0;r<this.editorInputHandlers.length;r++){const i=this.editorInputHandlers[r],s=i.definition;if(s.canHandle(e)){await this.ensureHandlerInitialized(i);const o=await s.handle(e);return o&&(o.editorId=s.editorId),o}}}getEditorArea(){return document.querySelector(`lyra-tabs#${Ee}`)}async loadEditor(e,t){if(!e||("component"in e||(e=await this.handleInput(e,t)),!e||!("component"in e)))return;const r=e.editorId??t;r&&(e.editorId=r),await this.openTab({name:e.key,editorId:r,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.component})}async openTab(e){const t=this.getEditorArea();if(!t){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(t),t.has(e.name)){t.activate(e.name);return}t.open(e)}getFileIcon(e){const t=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),r=this.getSortedIconContributions();if(r.length===0)return"file";for(const i of r)if(i.mappings&&i.mappings[t])return i.mappings[t];return"file"}}const nt=new Lo;z.put("editorRegistry",nt);v.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const wr=(n,e)=>!n.leaf&&e.leaf?-1:n.leaf&&!e.leaf?1:n.label.localeCompare(e.label);var _o=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,Hn=(n,e,t,r)=>{for(var i=r>1?void 0:r?Ao(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&_o(e,t,i),i};const It=xe("LyraFileBrowser"),re=await at(Object.assign({"./filebrowser.de.json":()=>ee(()=>import("./filebrowser.de-5GQ10ols-BDyGxBGM.js"),[]),"./filebrowser.en.json":()=>ee(()=>import("./filebrowser.en-9Ng_7WE_-DuKn3BNV.js"),[])})),Do=250;let kt=class extends X{constructor(){super(...arguments),this.fileEditorOptions=[],this.treeRef=Re(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),M(ae,n=>{n.target==="system.icons"&&this.requestUpdate()}),this.subscribe(Y,n=>this.onWorkspaceChanged(n)),this.subscribe(ke,n=>this.onWorkspaceConnected(n))}disconnectedCallback(){this.workspaceChangedDebounceId!==void 0&&(clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=void 0),this.pendingWorkspaceDir=void 0,super.disconnectedCallback()}firstUpdated(n){super.firstUpdated(n),this.setupDragAndDrop()}updated(n){super.updated(n),n.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const n=await k.getWorkspace();await this.loadWorkspace(n??void 0)}renderToolbar(){return p`
            <lyra-command icon="folder-open" title="${re.CONNECT_WORKSPACE}" dropdown="filebrowser.connections"></lyra-command>
            <lyra-command cmd="refresh_resource" icon="repeat" title="${re.REFRESH_RESOURCE}"></lyra-command>
            <lyra-command cmd="touch" icon="plus" title="${re.CREATE_NEW}" dropdown="filebrowser.create"></lyra-command>
        `}renderContextMenu(){const n=ce.get(),e=n instanceof fe?n:null,t=e&&this.fileEditorOptions.length>0;return p`
            <lyra-command cmd="open_editor" icon="folder-open">${re.OPEN}</lyra-command>
            ${t?p`
                <wa-dropdown-item>
                    <lyra-icon name="folder-open" slot="icon"></lyra-icon>
                    ${re.OPEN_WITH}
                    ${this.fileEditorOptions.map(r=>p`
                        <lyra-command
                            slot="submenu"
                            cmd="open_editor"
                            icon="${r.icon??"file"}"
                            .params=${{path:e.getWorkspacePath(),editorId:r.editorId}}>
                            ${r.title}
                        </lyra-command>
                    `)}
                </wa-dropdown-item>
            `:C}
            <lyra-command cmd="touch" icon="plus" dropdown="filebrowser.create">${re.CREATE_NEW}</lyra-command>
        `}onWorkspaceChanged(n){this.pendingWorkspaceDir=n,this.workspaceChangedDebounceId!==void 0&&clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=setTimeout(()=>{this.workspaceChangedDebounceId=void 0;const e=this.pendingWorkspaceDir;this.pendingWorkspaceDir=void 0,e?this.applyWorkspaceChange(e):this.loadWorkspace(void 0,!0)},Do)}async applyWorkspaceChange(n){ce.set(void 0),await this.loadWorkspace(n,!0),await this.syncTreeSelection()}async onWorkspaceConnected(n){await this.loadWorkspace(n,!0)}async loadWorkspace(n,e=!1){this.workspaceDir=n,n?this.root=await this.resourceToTreeNode(n,!0,e):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&ce.set(e[0].model?.data)}async resourceToTreeNode(n,e=!1,t=!1){const r=n instanceof fe,i={data:n,label:n.getName(),leaf:r,children:[]};if(n instanceof me&&!n.getParent())try{const s=await k.getFolderInfoForDirectory(n);s?.backendName&&(i.workspaceTag=s.backendName)}catch(s){It.debug("Failed to get workspace info for directory",s)}if(n instanceof me&&e){for(const s of await n.listChildren(t)){const o=await this.resourceToTreeNode(s,!0);i.children.push(o)}i.children.sort(wr)}return i}createTreeItems(n,e=!1){if(!n)return p``;const t=!n.leaf&&n.children.length===0,r=n.data,i=r instanceof fe,s=i?nt.getFileIcon(r.getName()):n.icon||"folder-open",o=n.workspaceTag;return p`
            <wa-tree-item 
                draggable=${i}
                @dragstart=${i?this.nobubble(l=>this.onDragStart(l,r)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(l=>this.onLazyLoad(l,n))}
                .model=${n} 
                ?expanded=${e}
                ?lazy=${t}>
                <span class="tree-label">
                    <wa-icon name=${s} label="${n.leaf?re.FILE:re.FOLDER}"></wa-icon>
                    <span class="tree-label-text">${n.label}</span>
                    ${!n.leaf&&o?p`<wa-badge appearance="outlined" variant="neutral" style="font-size: var(--wa-font-size-xs);">${o}</wa-badge>`:null}
                </span>
                ${n.children.map(l=>this.createTreeItems(l,!1))}
            </wa-tree-item>`}onDragStart(n,e){if(!n.dataTransfer)return;const t=e.getWorkspacePath(),r=e.getName();if(n.dataTransfer.effectAllowed="copy",n.dataTransfer.setData("text/plain",t),n.dataTransfer.setData("application/x-workspace-file",t),n.dataTransfer.setData("text/uri-list",t),n.dataTransfer.setDragImage){const i=document.createElement("div");i.textContent=r,i.style.position="absolute",i.style.top="-1000px",i.style.padding="4px 8px",i.style.background="var(--wa-color-neutral-10)",i.style.border="1px solid var(--wa-color-neutral-30)",i.style.borderRadius="4px",document.body.appendChild(i),n.dataTransfer.setDragImage(i,0,0),setTimeout(()=>document.body.removeChild(i),0)}}async onLazyLoad(n,e){const t=e.data;t instanceof me&&e.children.length===0&&await this.loadNodeChildren(e,t)}async loadNodeChildren(n,e){if(!this.loadingNodes.has(n)){this.loadingNodes.add(n);try{for(const t of await e.listChildren(!1)){Wr&&t.getName().startsWith(".");const r=await this.resourceToTreeNode(t,!1);n.children.push(r)}n.children.sort(wr),this.requestUpdate()}catch(t){It.error("Failed to load directory children:",t)}finally{this.loadingNodes.delete(n)}}}async onFileDoubleClicked(n){const t=n.currentTarget.model.data;t instanceof fe&&(ce.set(t),this.executeCommand("open_editor",{}))}onSelectionChanged(n){const e=n.detail.selection;if(e&&e.length>0){const r=e[0].model.data;ce.set(r),r instanceof fe?(this.fileEditorOptions=nt.getEditorOptionsForInput(r),this.updateContextMenu()):(this.fileEditorOptions=[],this.updateContextMenu())}else ce.set(void 0),this.fileEditorOptions=[],this.updateContextMenu()}setupDragAndDrop(){const n=this.treeRef.value;if(!n)return;const e=s=>{if(!s.dataTransfer?.types.includes("Files"))return;s.preventDefault(),s.dataTransfer.dropEffect="copy",n.classList.add("drag-over");const l=s.target.closest("wa-tree-item");l&&l!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=l,l.classList.add("drop-target"))},t=s=>{s.dataTransfer?.types.includes("Files")&&(s.preventDefault(),n.classList.add("drag-over"))},r=s=>{const o=n.getBoundingClientRect(),l=s.clientX,a=s.clientY;(l<=o.left||l>=o.right||a<=o.top||a>=o.bottom)&&(n.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async s=>{if(s.preventDefault(),n.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!s.dataTransfer||!this.workspaceDir)return;const o=Array.from(s.dataTransfer.files);if(o.length===0)return;const l=await this.getDropTarget(s);await this.handleFilesDrop(o,l)};n.removeEventListener("dragover",e),n.removeEventListener("dragenter",t),n.removeEventListener("dragleave",r),n.removeEventListener("drop",i),n.addEventListener("dragover",e),n.addEventListener("dragenter",t),n.addEventListener("dragleave",r),n.addEventListener("drop",i)}async getDropTarget(n){const t=n.target.closest("wa-tree-item");if(t){const i=t.model.data;if(i instanceof me)return i;const s=i.getParent();if(s)return s}return this.workspaceDir}async handleFilesDrop(n,e){const t=n.length;let r=0,i=0,s=0;for(const o of n)try{const l=this.buildTargetPath(e,o.name);if(await this.workspaceDir.getResource(l)&&!await Yr(re.FILE_EXISTS_OVERWRITE({fileName:o.name}))){s++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(o),r++}catch(l){It.error(`Failed to upload ${o.name}:`,l),i++}It.info(`Uploaded ${r}/${t} files${s>0?`, ${s} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(n,e){const t=n.getWorkspacePath();return t?`${t}/${e}`:e}render(){return p`
            <div class="tree" ${Te(this.treeRef)} style="--drop-files-text: '${re.DROP_FILES_HERE}'">
                ${A(!this.workspaceDir,()=>p`
                    <lyra-no-content message="${re.SELECT_WORKSPACE}"></lyra-no-content>`,()=>A(this.root,()=>p`
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.root.children.map(n=>this.createTreeItems(n,!0))}
                </wa-tree>`,()=>p``))}
            </div>
        `}};kt.styles=B`
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
    `;Hn([S()],kt.prototype,"root",2);Hn([S()],kt.prototype,"fileEditorOptions",2);kt=Hn([L("lyra-filebrowser")],kt);var Oo=Object.getOwnPropertyDescriptor,Io=(n,e,t,r)=>{for(var i=r>1?void 0:r?Oo(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=o(i)||i);return i};const wn=await at(Object.assign({"./tasks.de.json":()=>ee(()=>import("./tasks.de-Uc1ZhJAb-Bm0wNkDH.js"),[]),"./tasks.en.json":()=>ee(()=>import("./tasks.en-ErE1So2Z-eCglTKJa.js"),[])}));v.registerContribution(Jt,{component:"<lyra-tasks></lyra-tasks>"});let pt=null;function ti(){return pt||(pt=document.createElement("div"),pt.id="progress-dialog-container",document.body.appendChild(pt)),pt}function yr(){return ti().querySelector("wa-dialog")}function zo(){ni(!0)}function ni(n=!1){const e=ti(),t=Ze.getActiveTasks();if(t.length===0){oe(p``,e);return}const i=yr();if(!(n||i?.open===!0))return;const o=()=>{const c=yr();c&&(c.open=!1)},l=()=>{oe(p``,e)},a=p`
        <wa-dialog 
            label="${wn.ACTIVE_TASKS}" 
            open
            light-dismiss
            style="--width: 600px;"
            @wa-request-close=${o}
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
                ${t.map(c=>{const d=c.progress>=0||c.totalSteps>0,u=c.progress>=0?c.progress:c.totalSteps>0?Math.round(c.currentStep/c.totalSteps*100):0,f=c.progress<0&&c.totalSteps>0;return p`
                        <div class="tasitem">
                            <div class="tasheader">
                                <wa-icon name="hourglass" style="color: var(--wa-color-warning-fill-loud);"></wa-icon>
                                <div style="flex: 1;">
                                    <div class="tasname">${c.name}</div>
                                    ${c.message?p`
                                        <div class="tasmessage">${c.message}</div>
                                    `:""}
                                </div>
                            </div>
                            <div class="tasprogress">
                                ${d?p`
                                    <wa-progress-bar value="${u}">
                                        ${f?`${c.currentStep}/${c.totalSteps} - `:""}${u}%
                                    </wa-progress-bar>
                                `:p`
                                    <wa-progress-bar indeterminate></wa-progress-bar>
                                `}
                            </div>
                        </div>
                    `})}
            </div>
        </wa-dialog>
    `;oe(a,e)}let yn=class extends X{doBeforeUI(){this.watch(hn,()=>{ni(),this.requestUpdate()})}handleIndicatorClick(){zo()}render(){hn.get();const e=Ze.getActiveTasks().length;return e===0?p``:p`
            <div class="tasindicator" @click=${this.handleIndicatorClick} title="${wn.ACTIVE_TASKS_TITLE({taskCount:e.toString()})}">
                <wa-spinner
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);"
                    label="${wn.ACTIVE_TASKS}"
                ></wa-spinner>
                <wa-badge appearance="outlined" variant="neutral" pill>${e}</wa-badge>
                <div class="tasbar-wrap"><wa-progress-bar indeterminate></wa-progress-bar></div>
            </div>
        `}};yn.styles=B`
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
    `;yn=Io([L("lyra-tasks")],yn);var No=Object.getOwnPropertyDescriptor,Fo=(n,e,t,r)=>{for(var i=r>1?void 0:r?No(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=o(i)||i);return i};const dn=await at(Object.assign({"./partname.de.json":()=>ee(()=>import("./partname.de-FFi67qCi-iLAwhB2n.js"),[]),"./partname.en.json":()=>ee(()=>import("./partname.en-DvPivLXR-DGb3aT7k.js"),[])}));v.registerContribution(Jt,{component:"<lyra-part-name></lyra-part-name>"});let vr=class extends De{doBeforeUI(){this.watch(Z,()=>{this.requestUpdate()})}getPartName(){const n=Z.get();return n&&(n.tabContribution?.label||n.getAttribute("id"))||dn.NO_PART}render(){const e=Z.get()?.tabContribution?.icon||"box";return p`
            <wa-button 
                appearance="plain"
                size="small"
                title="${dn.ACTIVE_PART}">
                <lyra-icon slot="start" name="${e}" label="Part"></lyra-icon>
                ${this.getPartName()}
            </wa-button>
        `}};vr=Fo([L("lyra-part-name")],vr);var Uo=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,_t=(n,e,t,r)=>{for(var i=r>1?void 0:r?Bo(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Uo(e,t,i),i};const jo=xe("LyraExtensions"),O=await at(Object.assign({"./extensions.de.json":()=>ee(()=>import("./extensions.de-CZkqW0F1-C2K7_1Fj.js"),[]),"./extensions.en.json":()=>ee(()=>import("./extensions.en-Dg9Oqudm-BWVq_zKr.js"),[])}));let Me=class extends X{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){M(ft,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(n){R.enable(n.id,!0),this.requestUpdate()}disable(n){R.disable(n.id,!0),this.requestUpdate()}isExtensionRequired(n){const e=Se.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(n)}selectionChanged(n){const e=n.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return R.getExtensions();const n=this.filterText.toLowerCase();return R.getExtensions().filter(e=>String(e.name).toLowerCase().includes(n)||(e.description?String(e.description).toLowerCase().includes(n):!1)||e.id.toLowerCase().includes(n))}getGroupedExtensions(){const n=this.getFilteredExtensions(),e=[],t=[];return n.forEach(r=>{R.isEnabled(r.id)?e.push(r):t.push(r)}),e.sort((r,i)=>String(r.name).localeCompare(String(i.name))),t.sort((r,i)=>String(r.name).localeCompare(String(i.name))),{enabled:e,available:t}}isExternalExtension(n){return n.external===!0}handleFilterInput(n){this.filterText=n.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const n=await Xs("Enter extension URL or source identifier:","",!1);if(!n)return;await Ze.runAsync("Registering extension",async()=>{let e=n;he.isGitHubUrl(n)&&(e=he.convertGitHubUrlToSource(n));const t=he.parseSource(e);t?.type==="github"?await this.fetchGitHubMetadata(t,e):(this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(n){F(`Failed to register extension: ${n}`)}}async fetchGitHubMetadata(n,e){try{const t=await he.fetchGitHubPackageJson(n),r=n.owner,i=n.repo,s=t.name||`ext.${r}-${i}`,o=t.name||`${r}/${i}`,l=t.description||"",a=t.version||"",c=t.author||(typeof t.author=="string"?t.author:t.author?.name)||"";this.registerExtensionData={id:s,name:o,description:l,url:e,version:a,author:c,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(t){jo.warn(`Could not fetch package.json, using defaults: ${t}`),this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){F("URL is required");return}if(!this.registerExtensionData.id){F("Extension ID is required");return}if(!this.registerExtensionData.name){F("Extension name is required");return}try{await Ze.runAsync("Registering extension",async()=>{const n={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};R.registerExtension(n),await R.loadExtensionFromUrl(this.registerExtensionData.url,n.id),$e(`Extension ${n.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(n){F(`Failed to register extension: ${n}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return p`
            <wa-input
                placeholder="${O.FILTER_PLACEHOLDER}"
                .value=${this.filterText}
                @input=${n=>this.handleFilterInput(n)}
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
        `}render(){const n=this.getGroupedExtensions(),e=n.enabled.length>0||n.available.length>0;return p`
            ${A(this.showRegisterDialog,()=>p`
                <wa-dialog 
                    label="Register Extension"
                    open
                    @wa-request-close=${()=>this.cancelRegisterExtension()}
                    style="--wa-dialog-width: 500px;">
                    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
                        <wa-input
                            label="Extension ID *"
                            .value=${this.registerExtensionData.id||""}
                            @input=${t=>{this.registerExtensionData.id=t.target.value,this.requestUpdate()}}
                            required
                            hint="Unique identifier for the extension (e.g., 'ext.my-extension')">
                        </wa-input>
                        
                        <wa-input
                            label="Name *"
                            .value=${this.registerExtensionData.name||""}
                            @input=${t=>{this.registerExtensionData.name=t.target.value,this.requestUpdate()}}
                            required
                            hint="Display name of the extension">
                        </wa-input>
                        
                        <wa-input
                            label="Description"
                            .value=${this.registerExtensionData.description||""}
                            @input=${t=>{this.registerExtensionData.description=t.target.value,this.requestUpdate()}}
                            hint="Description of what the extension does">
                        </wa-input>
                        
                        <wa-input
                            label="URL *"
                            .value=${this.registerExtensionData.url||""}
                            @input=${t=>{this.registerExtensionData.url=t.target.value,this.requestUpdate()}}
                            required
                            readonly
                            hint="Extension source URL or identifier">
                        </wa-input>
                        
                        <div style="display: flex; gap: 0.5rem;">
                            <wa-input
                                label="Version"
                                .value=${this.registerExtensionData.version||""}
                                @input=${t=>{this.registerExtensionData.version=t.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension version">
                            </wa-input>
                            
                            <wa-input
                                label="Author"
                                .value=${this.registerExtensionData.author||""}
                                @input=${t=>{this.registerExtensionData.author=t.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension author">
                            </wa-input>
                        </div>
                        
                        <wa-input
                            label="Icon"
                            .value=${this.registerExtensionData.icon||"puzzle-piece"}
                            @input=${t=>{this.registerExtensionData.icon=t.target.value,this.requestUpdate()}}
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
                                ${n.enabled.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                            ${O.INSTALLED} (${n.enabled.length})
                                        </span>
                                        ${n.enabled.map(t=>{const r=this.isExternalExtension(t);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                                    <span><lyra-icon name="${t.icon}"></lyra-icon></span> ${t.name}${r?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                                ${n.available.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                            ${O.AVAILABLE} (${n.available.length})
                                        </span>
                                        ${n.available.map(t=>{const r=this.isExternalExtension(t);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                                    <span><lyra-icon name="${t.icon}"></lyra-icon></span> ${t.name}${r?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                            `:""}
                            ${e?"":p`
                                <div style="padding: 1em; text-align: center; opacity: 0.7;">
                                    ${O.NO_MATCHES({filterText:this.filterText})}
                                </div>
                            `}
                        </wa-tree>
                    </wa-scroller>
                </div>
                <wa-scroller slot="end" class="extensions-detail-scroller" orientation="vertical">
                <div class="extensions-detail-content">
                    ${A(this.selectedExtension,t=>{const r=this.isExternalExtension(t),i=R.isEnabled(t.id);return p`
                                <h1><lyra-icon name="${t.icon}"></lyra-icon> ${t.name}${r?" (External)":""}</h1>
                                ${A(r,()=>p`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${O.EXTERNAL_EXTENSION}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${A(i,()=>p`
                                        <wa-button 
                                            title="${this.isExtensionRequired(t.id)?O.REQUIRED_HINT:O.DISABLE_TITLE}" 
                                            @click="${()=>this.disable(t)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(t.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${O.UNINSTALL}
                                        </wa-button>
                                        ${A(this.isExtensionRequired(t.id),()=>p`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${O.REQUIRED_HINT}</span>
                                            </div>
                                        `)}
                                    `,()=>p`
                                        <wa-button 
                                            title="${O.ENABLE_TITLE}" 
                                            @click="${()=>this.enable(t)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${O.INSTALL}
                                        </wa-button>
                                    `)}
                                </div>

                                ${A(t.experimental,()=>p`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${O.EXPERIMENTAL}</i></small>
                                    </div>
                                `)}

                                ${A(t.version||t.author,()=>p`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${A(t.version,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${O.VERSION} <strong>${t.version}</strong></span>
                                            </div>
                                        `)}
                                        ${A(t.author,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${O.AUTHOR} <strong>${t.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${t.description}</p>

                                ${A(t.dependencies&&t.dependencies.length>0,()=>p`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${O.DEPENDENCIES}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${t.dependencies.map(s=>{const o=R.getExtensions().find(a=>a.id===s),l=R.isEnabled(s);return p`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${l?"check-circle":"circle"}" 
                                                            style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        <lyra-icon name="${o?.icon||"puzzle-piece"}"></lyra-icon>
                                                        <span>${o?.name||s}</span>
                                                        ${l?"":p`
                                                            <span class="dependency-badge">${O.NOT_INSTALLED}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${O.DEPENDENCIES_HINT}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
                </wa-scroller>
            </wa-split-panel>
        `}};Me.styles=B`
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
    `;_t([S()],Me.prototype,"selectedExtension",2);_t([S()],Me.prototype,"filterText",2);_t([S()],Me.prototype,"showRegisterDialog",2);_t([S()],Me.prototype,"registerExtensionData",2);Me=_t([L("lyra-extensions")],Me);var Mo=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,nn=(n,e,t,r)=>{for(var i=r>1?void 0:r?Wo(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Mo(e,t,i),i};const I=await at(Object.assign({"./logterminal.de.json":()=>ee(()=>import("./logterminal.de-MX1cr5ek-EcKGbnDh.js"),[]),"./logterminal.en.json":()=>ee(()=>import("./logterminal.en-BHVSaQqb-DpFjNbQM.js"),[])}));let rt=class extends X{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Re()}connectedCallback(){super.connectedCallback(),this.loadSettings(),ki(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),$i()}log(n,e,t="info"){const r={timestamp:new Date,level:t,source:n,message:e};this.messages=[...this.messages,r],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(n=>n.level===this.filter)}formatTimestamp(n){return n.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(n){switch(n){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(n){switch(n){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const n=this.messages.filter(i=>i.level==="info").length,e=this.messages.filter(i=>i.level==="warning").length,t=this.messages.filter(i=>i.level==="error").length,r=this.messages.filter(i=>i.level==="debug").length;return p`
            <lyra-command 
                icon="list"
                title="${I.ALL_LOGS}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${I.ALL} (${this.messages.length})
            </lyra-command>

            <lyra-command 
                icon="circle-info"
                title="${I.INFO_LOGS}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${I.INFO}${n>0?` (${n})`:""}
            </lyra-command>

            <lyra-command 
                icon="triangle-exclamation"
                title="${I.WARNING_LOGS}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${I.WARNINGS}${e>0?` (${e})`:""}
            </lyra-command>

            <lyra-command 
                icon="circle-xmark"
                title="${I.ERROR_LOGS}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${I.ERRORS}${t>0?` (${t})`:""}
            </lyra-command>

            <lyra-command 
                icon="bug"
                title="${I.DEBUG_LOGS}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${I.DEBUG}${r>0?` (${r})`:""}
            </lyra-command>

            <wa-divider orientation="vertical"></wa-divider>

            <lyra-command 
                icon="arrow-down" 
                title="${this.autoScroll?I.AUTO_SCROLL_ENABLED:I.AUTO_SCROLL_DISABLED}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?I.AUTO_SCROLL:I.MANUAL}
            </lyra-command>

            <lyra-command 
                icon="trash" 
                title="${I.CLEAR_LOGS}"
                .action=${()=>this.clear()}>
                ${I.CLEAR}
            </lyra-command>
        `}render(){const n=this.getFilteredMessages();return p`
            <div class="log-terminal">
                <div class="messages" ${Te(this.containerRef)}>
                    ${n.length===0?p`<div class="empty-state">${I.NO_LOG_MESSAGES}</div>`:n.map(e=>p`
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
        `}async loadSettings(){const n=await this.getDialogSetting();n&&(typeof n.filter=="string"&&(n.filter==="all"||["info","warning","error","debug"].includes(n.filter))&&(this.filter=n.filter),typeof n.autoScroll=="boolean"&&(this.autoScroll=n.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};rt.styles=B`
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
    `;nn([S()],rt.prototype,"messages",2);nn([S()],rt.prototype,"autoScroll",2);nn([S()],rt.prototype,"filter",2);rt=nn([L("lyra-log-terminal")],rt);var qo=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,ne=(n,e,t,r)=>{for(var i=r>1?void 0:r?Ho(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&qo(e,t,i),i};const Go=await at(Object.assign({"./fastviews.de.json":()=>ee(()=>import("./fastviews.de-MGAlHTsp-CU9Rj7sS.js"),[]),"./fastviews.en.json":()=>ee(()=>import("./fastviews.en-BoYc4WrC-DnZQwCTs.js"),[])}));let H=class extends Et{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=Re(),this.tabsRef=Re(),this.resizeHandleRef=Re(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(n){if(!this.disabled)if(this.containerId){const e=document.querySelector(`lyra-tabs#${this.containerId}`);if(!e){console.error(`fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(n)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(n)})}handleDrawerHide(){this.drawerOpen=!1}startResize(n){n.preventDefault(),n.stopPropagation();const e=this.drawerRef.value;if(!e)return;let r=(()=>{const o=e.shadowRoot?.querySelector('[part="panel"]');if(o&&o.offsetWidth>0)return o.offsetWidth;const c=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(c){const d=parseFloat(c[1]),u=c[2];if(u==="px")return d;if(u==="vw")return d/100*window.innerWidth;if(u==="vh")return d/100*window.innerHeight;if(u==="%")return d/100*window.innerWidth}return 0})();r===0&&(r=window.innerWidth*.5);const i=o=>{this.resizing&&(o.preventDefault(),o.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-o.clientX,a=Math.round(this.resizing.startSize+l),c=200,d=Math.round(window.innerWidth*.9);if(a>=c&&a<=d){this.drawerSize=`${a}px`;const u=this.drawerRef.value;u&&(u.style.setProperty("--size",this.drawerSize),u.style.setProperty("transition","none"))}this.resizing.rafId=null}))},s=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const o=this.drawerRef.value;o&&o.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:n.clientX,startSize:r,handleMouseMove:i,handleMouseUp:s,rafId:null},document.addEventListener("mousemove",i,{passive:!1}),document.addEventListener("mouseup",s,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),M(ae,n=>{this.target&&n.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const n=v.getContributions(this.target);this.tabContributions=n.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(n){return p`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(n)}>
                <lyra-icon name="${n.icon||""}" label="${n.label}" slot="icon"></lyra-icon>
                ${n.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?C:p`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    <lyra-icon slot="start" name="${this.icon}" label="${this.title}"></lyra-icon>
                    <slot></slot>
                </wa-button>
                
                ${this.title?p`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:C}
                
                ${this.tabContributions.map(n=>this.renderTabContribution(n))}
            </wa-dropdown>

            ${this.containerId?C:p`
                <wa-drawer 
                    ${Te(this.drawerRef)}
                    label="${this.title||Go.FAST_VIEWS}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${Te(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <lyra-tabs 
                        ${Te(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </lyra-tabs>
                </wa-drawer>
            `}
        `:C}};H.styles=B`
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
    `;ne([m()],H.prototype,"target",2);ne([m()],H.prototype,"title",2);ne([m()],H.prototype,"icon",2);ne([m({type:Boolean})],H.prototype,"disabled",2);ne([m()],H.prototype,"appearance",2);ne([m()],H.prototype,"size",2);ne([m()],H.prototype,"placement",2);ne([m()],H.prototype,"containerId",2);ne([S()],H.prototype,"tabContributions",2);ne([S()],H.prototype,"drawerOpen",2);ne([S()],H.prototype,"drawerSize",2);H=ne([L("lyra-fastviews")],H);var Ko=Object.getOwnPropertyDescriptor,Vo=(n,e,t,r)=>{for(var i=r>1?void 0:r?Ko(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=o(i)||i);return i};function Xo(){let n=document.getElementById("global-dialog-container");return n||(n=document.createElement("div"),n.id="global-dialog-container",document.body.appendChild(n)),n}const ri=n=>{try{return new Intl.DisplayNames([n],{type:"language"}).of(n)||n.toUpperCase()}catch{return n.toUpperCase()}},Yo=()=>[...Mn.get()].sort(),Zo=async()=>{const n=Yo(),e=je.get();return new Promise(t=>{const r=Xo();let i=!1;const s=()=>{const c=r.querySelector("wa-dialog");c&&!i&&(c.open=!1)},o=()=>{i||(i=!0,oe(p``,r),t())},l=async c=>{await P.set(Xt,c),s()},a=p`
            <wa-dialog 
                label="Select Language" 
                open 
                light-dismiss
                @wa-request-close=${s}
                @wa-after-hide=${o}>
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
                    ${n.map(c=>p`
                        <div 
                            class="language-item ${c===e?"active":""}"
                            @click=${()=>l(c)}>
                            <span class="language-code">${c.toUpperCase()}</span>
                            <span class="language-name">${ri(c)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;oe(a,r)})};let vn=class extends De{render(){const n=je.get(),e=ri(n),t=`${n.toUpperCase()} ${e}`;return p`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>Zo()}>
                ${t}
            </wa-button>
        `}};vn.styles=B`
        :host {
            display: inline-block;
        }
    `;vn=Vo([L("lyra-language-selector")],vn);var Qo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,ii=(n,e,t,r)=>{for(var i=r>1?void 0:r?Jo(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Qo(e,t,i),i};let Yt=class extends De{constructor(){super(...arguments),this.currentLayoutId="standard"}doBeforeUI(){this.currentLayoutId=Se.getCurrentLayoutId();const n=()=>{this.currentLayoutId=Se.getCurrentLayoutId(),this.requestUpdate()};return window.addEventListener("app-loaded",n),window.addEventListener("layout-changed",n),()=>{window.removeEventListener("app-loaded",n),window.removeEventListener("layout-changed",n)}}async handleSelect(n){const e=n.detail?.item?.value;if(!(!e||e===this.currentLayoutId))try{await Se.setPreferredLayoutId(e)}catch(t){console.error("Failed to switch layout:",t)}}render(){const n=Se.getRegisteredLayouts();if(n.length<=1)return p``;const t=n.find(r=>r.id===this.currentLayoutId)?.name??this.currentLayoutId;return p`
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
                    title="Switch layout (current: ${t})">
                    <wa-icon name="table-cells" label="Layout"></wa-icon>
                </wa-button>
                ${n.map(r=>p`
                        <wa-dropdown-item
                            value="${r.id}"
                            type="checkbox"
                            ?checked=${r.id===this.currentLayoutId}>
                            ${r.icon?p`<lyra-icon slot="icon" name="${r.icon}" label="${r.name}"></lyra-icon>`:""}
                            ${r.name}
                        </wa-dropdown-item>
                    `)}
            </wa-dropdown>
        `}};Yt.styles=B`
        :host {
            display: inline-block;
        }
    `;ii([S()],Yt.prototype,"currentLayoutId",2);Yt=ii([L("lyra-layout-switcher")],Yt);const ea="view.filebrowser",ta="view.logTerminal",na="toolbar.info",ra="toolbar.fastViews",ia="toolbar.languageSelector",sa="toolbar.appSwitcher";v.registerContribution(Gt,{name:ea,label:"Workspace",icon:"folder-open",component:n=>p`<lyra-filebrowser id="${n}"></lyra-filebrowser>`});v.registerContribution(Dn,{name:ta,label:"Log Messages",icon:"list",component:n=>p`<lyra-log-terminal id="${n}"></lyra-log-terminal>`});v.registerContribution(Rt,{name:na,label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});v.registerContribution(Rt,{name:ra,label:"Fast Views",component:'<lyra-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></lyra-fastviews>'});v.registerContribution(Rt,{name:ia,label:"Language",component:()=>p`<lyra-language-selector></lyra-language-selector>`});v.registerContribution(st,{name:sa,label:"App Switcher",component:()=>p`<lyra-layout-switcher></lyra-layout-switcher>`});var oa=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,At=(n,e,t,r)=>{for(var i=r>1?void 0:r?aa(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&oa(e,t,i),i};let it=class extends zn{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return p`
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
                <lyra-toolbar id=${Nr}></lyra-toolbar>
                <lyra-toolbar id=${Fr}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${st}></lyra-toolbar>
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
                                    <lyra-tabs id="${Gt}"></lyra-tabs>
                                    <lyra-tabs id="${jr}"></lyra-tabs>
                                </lyra-resizable-grid>
                            `:p`<lyra-tabs id="${Gt}"></lyra-tabs>`}
                    `:C}
                
                ${this.showBottomPanel?p`
                        <lyra-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <lyra-tabs id="${Ee}"></lyra-tabs>
                            <lyra-tabs id="${Dn}"></lyra-tabs>
                        </lyra-resizable-grid>
                    `:p`<lyra-tabs id="${Ee}"></lyra-tabs>`}
                
                ${this.showAuxSidebar?p`<lyra-tabs id="${Mr}"></lyra-tabs>`:C}
            </lyra-resizable-grid>
            
            <div class="toolbar-bottom">
                <lyra-toolbar id=${Ur}></lyra-toolbar>
                <lyra-toolbar id=${Jt}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${Rt}></lyra-toolbar>
            </div>
        `}};At([m({type:Boolean,attribute:"show-bottom-sidebar"})],it.prototype,"showBottomSidebar",2);At([m({type:Boolean,attribute:"show-bottom-panel"})],it.prototype,"showBottomPanel",2);At([m({type:Boolean,attribute:"show-left-sidebar"})],it.prototype,"showLeftSidebar",2);At([m({type:Boolean,attribute:"show-aux-sidebar"})],it.prototype,"showAuxSidebar",2);it=At([L("lyra-standard-layout")],it);const la=[{id:"standard",name:"Standard",label:"Standard",icon:"lyra layout-standard",component:"lyra-standard-layout"},{id:"standard-bottom-panel",name:"Standard (bottom panel)",label:"Standard (bottom panel)",icon:"lyra layout-standard-bottom-panel",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true"}}},{id:"standard-bottom-sidebar",name:"Standard (bottom sidebar)",label:"Standard (bottom sidebar)",icon:"lyra layout-standard-bottom-sidebar",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-sidebar":"true"}}},{id:"standard-full",name:"Standard (panel + sidebar)",label:"Standard (panel + sidebar)",icon:"lyra layout-standard-full",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true","show-bottom-sidebar":"true"}}}];for(const n of la)v.registerContribution(Ht,n);async function ca(n,e=!0){const t=await k.getWorkspace();if(!t)return null;const r=n?.path;return e&&!r?null:{workspace:t,path:r||""}}function Gn(n){return n&&typeof n.getContent=="function"&&typeof n.getSelection=="function"&&typeof n.getSnippet=="function"&&typeof n.getLanguage=="function"&&typeof n.getFilePath=="function"}function Ce(n=!1){const e={filePath:null,language:null};return n?{...e,snippet:null,cursorLine:null}:e}async function da(n,e=!0){const t=await ca(n,e);if(!t)return null;const{workspace:r,path:i}=t;if(!i)return null;try{const s=await r.getResource(i);return!s||!(s instanceof fe)?null:{workspace:r,path:i,file:s}}catch{return null}}N({command:{id:"disconnect_folder",name:"Disconnect folder",description:"Disconnects a folder from the workspace"},handler:{execute:async()=>{const n=ce.get();if(!(n instanceof me&&n.getParent()===void 0)){F("Select a folder root to disconnect.");return}try{await k.disconnectFolder(n)}catch(e){F(e.message)}}},contribution:{target:"contextmenu:filebrowser",label:"Disconnect folder",icon:"folder-minus",disabled:()=>{const n=ce.get();return!(n instanceof me&&n.getParent()===void 0)}}});N({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async n=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>k.connectWorkspace(e)).catch(e=>{F(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});N({command:{id:"connect_opfs",name:"OPFS",description:"Connect to Origin Private File System (browser storage)",parameters:[]},handler:{execute:async()=>{try{await k.connectFolder({opfs:!0})}catch(n){F(n.message)}}},contribution:{target:"filebrowser.connections",label:"OPFS (Browser Storage)",icon:"database"}});N({command:{id:"connect_indexeddb",name:"IndexedDB",description:"Connect to IndexedDB-backed workspace (browser storage)",parameters:[{name:"name",description:"Optional display name for this IndexedDB workspace root",required:!1}]},handler:{execute:async n=>{const e=n.params?.name;try{await k.connectFolder({indexeddb:!0,name:e})}catch(t){F(t.message)}}},contribution:{target:"filebrowser.connections",label:"IndexedDB (Browser Storage)",icon:"database"}});N({command:{id:"refresh_resource",name:"Refresh resource",description:"Refreshes the connected folder of the selected resource, or the whole workspace if nothing is selected",parameters:[]},handler:{execute:async()=>{const n=ce.get();if(n){n.getWorkspace().touch();return}const e=await k.getWorkspace();if(!e){F("No workspace selected.");return}e.touch()}}});N({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"The path of the file to open within the workspace; if omitted, the active selection is opened",required:!1},{name:"editorId",description:"Open with this editor id; if omitted, use default editor",required:!1}]},handler:{execute:async n=>{const e=n.params?.path,t=n.params?.editorId;let r=null;if(e)r=(await da({path:e}))?.file??null;else{const i=ce.get();r=i instanceof fe?i:null}r&&await nt.loadEditor(r,t)}}});N({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async n=>{const e=n.activeEditor;if(!Gn(e))return{...Ce(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...Ce(),content:null}}}}});N({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async n=>{const e=n.activeEditor;if(!Gn(e))return{...Ce(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...Ce(),selection:null}}}}});N({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async n=>{const e=n.activeEditor;if(!Gn(e))return Ce(!0);try{const t=n.params?.lines?parseInt(n.params.lines,10):5;if(isNaN(t)||t<0)return Ce(!0);const r=e.getSnippet(t);return r?{snippet:r.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:r.cursorLine}:Ce(!0)}catch{return Ce(!0)}}}});N({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async n=>{const e=Se.getCurrentApp();if(!e){F("No app loaded");return}const t=e.dependencies??{},r=Object.keys(t).length>0,i=r?p`
                    <wa-tree style="--indent-guide-width: 1px;">
                        <wa-tree-item expanded>
                            <span>${e.name??""}</span>
                            ${Object.entries(t).map(([E,D])=>p`
                                <wa-tree-item>
                                    <span>${E} <small>${D}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    </wa-tree>
                `:p``;let s=null;const o=()=>(s||(s=document.getElementById("global-dialog-container")||document.createElement("div"),s.id||(s.id="global-dialog-container",document.body.appendChild(s))),s),l=()=>{s&&oe(p``,s)},a=E=>{const D=x.parse(E,{async:!1});return p`${$t(D)}`};let c=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{c=await e.releaseHistory()}catch(E){console.error("Failed to load release history from app:",E),c=[]}else c=e.releaseHistory;const d=e.version??"0.0.0",u=c.length>0?c.findIndex(E=>E.tag_name===d):-1,f=u>=0?u:0;let h=f;const g=E=>{if(c.length===0)return"";const D=c[E],Ge=D.tag_name===d;let J=`**Version:** ${D.tag_name}`;Ge&&(J+=" (Current)"),J+=`

`;const Oe=new Date(D.published_at).toLocaleDateString();if(J+=`**Released:** ${Oe}

`,!Ge){const ai=d.replace(/^v/,""),li=D.tag_name.replace(/^v/,""),Kn=ai.split(".").map(Number),Vn=li.split(".").map(Number);let Xn=!1;for(let Dt=0;Dt<Math.max(Kn.length,Vn.length);Dt++){const Yn=Kn[Dt]||0,Zn=Vn[Dt]||0;if(Zn>Yn){Xn=!0;break}if(Zn<Yn)break}Xn&&(J+=`⚠️ **Update available - reload page to update**

`)}return D.body&&(J+=`---

${D.body}`),J},T=()=>{l()},_=()=>{l()},Q=E=>{const D=g(E),Ge=c.length>0,J=p`
                    <wa-dialog 
                        label="About ${e.name??""} - ${e.version??"0.0.0"}"
                        open 
                        light-dismiss
                        style="--width: 600px;"
                        @wa-request-close=${T}
                        @wa-after-hide=${_}
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
                                ${c.length>0?p`
                                    <wa-tab slot="nav" panel="release">Release History</wa-tab>
                                    <wa-tab-panel name="release">
                                        ${a(D)}
                                    </wa-tab-panel>
                                `:""}
                                
                                ${r?p`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${i}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${Ge?p`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${E===c.length-1}
                                    @click=${()=>{E<c.length-1&&(h=E+1,Q(h))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${E===0}
                                    @click=${()=>{E>0&&(h=E-1,Q(h))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;oe(J,o())};return Q(f),new Promise(E=>{const D=()=>{s?.querySelector("wa-dialog[open]")?setTimeout(D,100):E()};D()})}}});N({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async n=>{const e=bt.get()||Z.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const n=Z.get();return!n||!n.isDirty()}}});const si="theme";async function oi(n){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(n)}async function pa(){const n=await P.get(si);await oi(n||"wa-dark")}async function ua(n){await P.set(si,n)}N({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async n=>{const t=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await oi(t),await ua(t)}},contribution:{target:st,icon:"circle-half-stroke",label:"Theme Switcher"}});pa().catch(n=>{console.error("Failed to load theme preference:",n)});N({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async n=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:st,icon:"expand",label:"Fullscreen"}});N({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:n=>{const e={title:"Extensions",data:{},key:"system.extensions",icon:"puzzle-piece",state:{},noOverflow:!0,component:()=>p`<lyra-extensions></lyra-extensions>`};nt.loadEditor(e,"extensions-editor").then()}},contribution:{target:st,icon:"puzzle-piece",label:"Open Extensions"}});N({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async n=>R.getExtensions().map(t=>({id:t.id,name:t.name,description:t.description,experimental:t.experimental,enabled:R.isEnabled(t.id)}))}});N({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:n,type:e}})=>{n&&(e==="error"?F(n):$e(n))}}});N({command:{id:"open_view_as_editor",name:"Open view as editor",description:"Opens a dashboard view in the editor area",parameters:[{name:"name",description:"View contribution name",required:!0},{name:"sourceContributionSlot",description:"source contribution slot (default: SYSTEM_VIEWS)",required:!1}]},handler:{execute:async({params:n})=>{const e=n?.name;if(!e)return;const t=n?.sourceContributionSlot??Br,i=v.getContributions(t).find(s=>s.name===e);i?.component&&await nt.openTab(i)}}});z.put("constants",Es);Ae.put("html",p);Ae.put("render",oe);Ae.put("toastInfo",$e);Ae.put("toastError",F);Ae.put("toastWarning",Ci);Ae.put("publish",w);Ae.put("subscribe",M);export{Ae as A,Fr as B,Rt as C,me as D,ae as E,fe as F,ke as G,Er as H,bt as I,un as J,Et as K,X as L,Z as M,ga as N,ma as O,Dn as P,jr as Q,wa as S,Nr as T,Se as a,xe as b,v as c,st as d,R as e,nt as f,Ne as g,P as h,at as i,$ as j,z as k,ye as l,Ur as m,De as n,Xs as o,de as p,Ze as q,N as r,qn as s,F as t,$e as u,ce as v,k as w,Yr as x,Y as y,Mr as z};
