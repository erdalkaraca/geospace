import{g as gi,j as Oe,d as Tn,k as mi,i as F,n as m,S as Pn,p as w,A as S,b as p,u as bi,a as H,t as L,c as $,o as Rt,D as de,l as wi,e as Pe,f as Le,m as N,h as yi,_ as re}from"./webawesome-BBk0Twn_.js";var jt={exports:{}};var vi=jt.exports,sn;function xi(){return sn||(sn=1,(function(r){(function(e,t){r.exports?r.exports=t():e.Toastify=t()})(vi,function(e){var t=function(o){return new t.lib.init(o)},n="1.12.0";t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},t.lib=t.prototype={toastify:n,constructor:t,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||t.defaults.text,this.options.node=o.node||t.defaults.node,this.options.duration=o.duration===0?0:o.duration||t.defaults.duration,this.options.selector=o.selector||t.defaults.selector,this.options.callback=o.callback||t.defaults.callback,this.options.destination=o.destination||t.defaults.destination,this.options.newWindow=o.newWindow||t.defaults.newWindow,this.options.close=o.close||t.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=o.positionLeft||t.defaults.positionLeft,this.options.position=o.position||t.defaults.position,this.options.backgroundColor=o.backgroundColor||t.defaults.backgroundColor,this.options.avatar=o.avatar||t.defaults.avatar,this.options.className=o.className||t.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?t.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||t.defaults.onClick,this.options.offset=o.offset||t.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:t.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||t.defaults.ariaLive,this.options.style=o.style||t.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var l in this.options.style)o.style[l]=this.options.style[l];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var a=document.createElement("img");a.src=this.options.avatar,a.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(a):o.insertAdjacentElement("afterbegin",a)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",(function(_){_.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var d=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&d>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var u=this;o.addEventListener("mouseover",function(_){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){u.removeElement(o)},u.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",(function(_){_.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",(function(_){_.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var f=i("x",this.options),h=i("y",this.options),g=this.options.position=="left"?f:"-"+f,R=this.options.gravity=="toastify-top"?h:"-"+h;o.style.transform="translate("+g+","+R+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var l=t.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,l),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),t.reposition()}).bind(this),400)}},t.reposition=function(){for(var o={top:15,bottom:15},l={top:15,bottom:15},a={top:15,bottom:15},c=document.getElementsByClassName("toastify"),d,u=0;u<c.length;u++){s(c[u],"toastify-top")===!0?d="toastify-top":d="toastify-bottom";var f=c[u].offsetHeight;d=d.substr(9,d.length-1);var h=15,g=window.innerWidth>0?window.innerWidth:screen.width;g<=360?(c[u].style[d]=a[d]+"px",a[d]+=f+h):s(c[u],"toastify-left")===!0?(c[u].style[d]=o[d]+"px",o[d]+=f+h):(c[u].style[d]=l[d]+"px",l[d]+=f+h)}return this};function i(o,l){return l.offset[o]?isNaN(l.offset[o])?l.offset[o]:l.offset[o]+"px":"0px"}function s(o,l){return!o||typeof l!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(l)>-1)}return t.lib.init.prototype=t.lib,t})})(jt)),jt.exports}var ki=xi();const $i=gi(ki);class Rr{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,t){return e[t]||this.parent?.getProxy()[t]}set(e,t,n){e[t]=n}put(e,t){this.variables[e]=t}getProxy(){return this.proxy}createChild(e={}){const t=new Rr(e);return t.parent=this,this.children.push(t),t}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const U=new Rr({}),ze=U.createChild({}),on={debug:0,info:1,warning:2,error:3};let Ei="debug";const Je={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let qt=null;const mr=[];function ge(r){if(r===null)return"null";if(r===void 0)return"undefined";if(typeof r=="string")return r;if(typeof r=="number"||typeof r=="boolean")return String(r);if(r instanceof Error)return`${r.name}: ${r.message}`;try{return JSON.stringify(r)}catch{return String(r)}}class Si{constructor(e){this.source=e}info(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>ge(i)).join(" ")}`;this.log(n,"info")}warning(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>ge(i)).join(" ")}`;this.log(n,"warning")}warn(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>ge(i)).join(" ")}`;this.log(n,"warning")}error(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>ge(i)).join(" ")}`;this.log(n,"error")}debug(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>ge(i)).join(" ")}`;this.log(n,"debug")}log(e,t){et(this.source,e,t)}}function Ci(r){return on[r]>=on[Ei]}function et(r,e,t){Ci(t)&&(qt?qt(r,e,t):(mr.push({source:r,message:e,level:t}),Je[t==="error"?"error":t==="warning"?"warn":t==="debug"?"debug":"log"](`[${r}] ${e}`)))}function Ri(){console.log=function(...r){Je.log.apply(console,r),et("Console",r.map(e=>ge(e)).join(" "),"info")},console.info=function(...r){Je.info.apply(console,r),et("Console",r.map(e=>ge(e)).join(" "),"info")},console.warn=function(...r){Je.warn.apply(console,r),et("Console",r.map(e=>ge(e)).join(" "),"warning")},console.error=function(...r){Je.error.apply(console,r),et("Console",r.map(e=>ge(e)).join(" "),"error")},console.debug=function(...r){Je.debug.apply(console,r),et("Console",r.map(e=>ge(e)).join(" "),"debug")}}Ri();function Ti(r){for(qt=r;mr.length>0;){const e=mr.shift();e&&r(e.source,e.message,e.level)}}function Pi(){qt=null}function Se(r){return new Si(r)}const E=Se("System");U.put("logger",E);const Tr=Se("Toast"),Li=4e3,_i={duration:Li,gravity:"bottom",position:"right",close:!0},Pr=(r,e)=>{$i({..._i,text:r,style:e}).showToast()},ke=r=>{Tr.info(r),Pr(r,{background:"var(--wa-color-brand-50)",color:"var(--wa-color-brand-on)"})},P=r=>{Tr.error(r),Pr(r,{background:"var(--wa-color-danger-50)",color:"var(--wa-color-danger-on)"})},Ai=r=>{Tr.warn(r),Pr(r,{background:"var(--wa-color-warning-50)",color:"var(--wa-color-warning-on)"})};class Di{constructor(){this.globalNameRemaps=new Map,this.appNameRemaps=new Map}setGlobalNameRemap(e,t){this.globalNameRemaps.set(e,this.normalizeTargets(t))}resetForTesting(){this.globalNameRemaps.clear(),this.appNameRemaps.clear()}applyAppNameRemaps(e){if(this.appNameRemaps.clear(),!!e)for(const t of e)this.appNameRemaps.set(t.name,this.normalizeTargets(t.targets))}getEffectiveTargets(e,t){const n=t.name;if(!n)return[e];const i=this.appNameRemaps.get(n);if(i)return i.length>0?i:[];const s=this.globalNameRemaps.get(n);return s?s.length>0?s:[]:[e]}listNameRemaps(){const e={},t=new Set([...this.globalNameRemaps.keys(),...this.appNameRemaps.keys()]);for(const n of t)e[n]={appTargets:this.appNameRemaps.get(n),globalTargets:this.globalNameRemaps.get(n)};return e}normalizeTargets(e){const t=new Set,n=[];for(const i of e)!i||t.has(i)||(t.add(i),n.push(i));return n}}const Ht=new Di;U.put("contributionTargetMappingRegistry",Ht);const pe="events/contributionregistry/contributionsChanged";class Ii{constructor(){this.contributions=new Map}registerContribution(e,t){const n=this.getOrCreateSlot(e);if("command"in t){const s=t;s.disabled instanceof Function&&(s.disabled=new Pn.Computed(s.disabled))}n.push(t),w(pe,{target:e,contributions:n});const i=Ht.getEffectiveTargets(e,t);for(const s of i){if(s===e)continue;const o=this.getContributions(s);w(pe,{target:s,contributions:o})}}getContributions(e){const t=[];for(const[n,i]of this.contributions.entries()){const s=i;for(const o of s)Ht.getEffectiveTargets(n,o).includes(e)&&t.push(o)}return t.length===0&&this.getOrCreateSlot(e),t}getOrCreateSlot(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const x=new Ii;U.put("contributionRegistry",x);const Sa={},te=Oe(null),tt=Oe(null),br=Oe(null),wr=Oe(0),he=Oe(void 0);Oe({name:"",timestamp:0});const Ln="events/commandregistry/commandRegistered";class Oi{constructor(e,t,n,i,s){this.id=e,this.name=t,this.description=n,this.parameters=i||[],this.output=s||[]}}class Ca{async execute(e,t){return $e.execute(e,t)}async undo(){}async redo(){}}class zi{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,t){this.handlers.has(e)||this.handlers.set(e,[]);const n=this.handlers.get(e);n.push(t),n.sort((i,s)=>(s.ranking??0)-(i.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:te.get(),activeEditor:tt.get()}}execute(e,t={}){const n=this.getHandler(e);if(!n)throw E.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const i=this.getCommand(e),s=t.params?` params: ${JSON.stringify(t.params)}`:"";E.debug(`[CommandRegistry] Executing command: ${e}${i?` (${i.name})`:""}${s}`);for(const o of n)if(o.canExecute===void 0||o.canExecute(t))try{const l=o.execute(t);return E.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${l})`),l}catch(l){const a=l instanceof Error?l.message:String(l);throw E.error(`[CommandRegistry] Command execution failed: ${e} - ${a}`),l}E.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,t,n,i,s){const o=new Oi(e,t,n,i);this.registerCommand(o),s&&this.registerHandler(e,s)}registerCommand(e){this.commands[e.id]=e,w(Ln,e)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(t=>($e.getHandler(t.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(e))).reduce((t,n)=>(t[n.id]=n,t),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const t=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(t,e.handler),e.contribution&&e.contribution.target&&x.registerContribution(e.contribution.target,{command:t,...e.contribution})}}const $e=new zi;U.put("commandRegistry",$e);const D=r=>{$e.registerAll(r)},_n=(r,e)=>{const t=new Pn.subtle.Watcher(async()=>{try{await 0,e(r.get())}finally{t.watch(r)}});return t.watch(r),r.get(),()=>{t.unwatch(r)}};Object.defineProperty(Tn.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});const Ni=mi(Tn);class Tt extends Ni{constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>bi(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,t){const n=H(e,t.bind(this));this.eventSubscriptions.add(n)}showInfo(e){ke(e)}showError(e){P(e)}nobubble(e){return t=>{t.stopPropagation(),e.bind(this)(t)}}command(e,t={}){return()=>{this.executeCommand(e,t)}}executeCommand(e,t){const n=$e.createExecutionContext(t);$e.execute(e,n)}watch(e,t){const n=_n(e,t.bind(this));this.signalCleanups.add(n)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}function $t(r){const e=(r??"").trim();if(!e)return{name:""};const t=e.split(/\s+/);if(t.length<=1)return{name:e};const n=t.pop(),i=t.join(" ");return{name:n,library:i}}var Fi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,Pt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ui(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Fi(e,t,i),i};let We=class extends Tt{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const{name:r,library:e}=$t(this.name);return p`
            <wa-icon library="${e||S}" variant="${this.variant||S}"
                         family="${this.family||S}" name=${r} label="${this.label||this.name||S}"></wa-icon>`}};We.styles=F`
        :host {
            display: contents;
        }
    `;Pt([m()],We.prototype,"name",2);Pt([m()],We.prototype,"family",2);Pt([m()],We.prototype,"variant",2);Pt([m()],We.prototype,"label",2);We=Pt([L("lyra-icon")],We);function Lr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ve=Lr();function An(r){Ve=r}var je={exec:()=>null};function v(r,e=""){let t=typeof r=="string"?r:r.source,n={replace:(i,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(M.caret,"$1"),t=t.replace(i,o),n},getRegex:()=>new RegExp(t,e)};return n}var ji=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),M={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}>`)},Bi=/^(?:[ \t]*(?:\n|$))+/,Wi=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Mi=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Lt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,qi=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_r=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Dn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,In=v(Dn).replace(/bull/g,_r).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Hi=v(Dn).replace(/bull/g,_r).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ar=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Gi=/^[^\n]+/,Dr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ki=v(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Dr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Vi=v(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_r).getRegex(),tr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ir=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Xi=v("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ir).replace("tag",tr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),On=v(Ar).replace("hr",Lt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tr).getRegex(),Yi=v(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",On).getRegex(),Or={blockquote:Yi,code:Wi,def:Ki,fences:Mi,heading:qi,hr:Lt,html:Xi,lheading:In,list:Vi,newline:Bi,paragraph:On,table:je,text:Gi},an=v("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Lt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tr).getRegex(),Zi={...Or,lheading:Hi,table:an,paragraph:v(Ar).replace("hr",Lt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",an).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tr).getRegex()},Qi={...Or,html:v(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ir).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:je,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:v(Ar).replace("hr",Lt).replace("heading",` *#{1,6} *[^
]`).replace("lheading",In).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ji=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,es=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,zn=/^( {2,}|\\)\n(?!\s*$)/,ts=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,rr=/[\p{P}\p{S}]/u,zr=/[\s\p{P}\p{S}]/u,Nn=/[^\s\p{P}\p{S}]/u,rs=v(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,zr).getRegex(),Fn=/(?!~)[\p{P}\p{S}]/u,ns=/(?!~)[\s\p{P}\p{S}]/u,is=/(?:[^\s\p{P}\p{S}]|~)/u,Un=/(?![*_])[\p{P}\p{S}]/u,ss=/(?![*_])[\s\p{P}\p{S}]/u,os=/(?:[^\s\p{P}\p{S}]|[*_])/u,as=v(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ji?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),jn=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ls=v(jn,"u").replace(/punct/g,rr).getRegex(),cs=v(jn,"u").replace(/punct/g,Fn).getRegex(),Bn="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ds=v(Bn,"gu").replace(/notPunctSpace/g,Nn).replace(/punctSpace/g,zr).replace(/punct/g,rr).getRegex(),ps=v(Bn,"gu").replace(/notPunctSpace/g,is).replace(/punctSpace/g,ns).replace(/punct/g,Fn).getRegex(),us=v("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Nn).replace(/punctSpace/g,zr).replace(/punct/g,rr).getRegex(),hs=v(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Un).getRegex(),fs="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",gs=v(fs,"gu").replace(/notPunctSpace/g,os).replace(/punctSpace/g,ss).replace(/punct/g,Un).getRegex(),ms=v(/\\(punct)/,"gu").replace(/punct/g,rr).getRegex(),bs=v(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ws=v(Ir).replace("(?:-->|$)","-->").getRegex(),ys=v("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ws).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Gt=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,vs=v(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Gt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Wn=v(/^!?\[(label)\]\[(ref)\]/).replace("label",Gt).replace("ref",Dr).getRegex(),Mn=v(/^!?\[(ref)\](?:\[\])?/).replace("ref",Dr).getRegex(),xs=v("reflink|nolink(?!\\()","g").replace("reflink",Wn).replace("nolink",Mn).getRegex(),ln=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Nr={_backpedal:je,anyPunctuation:ms,autolink:bs,blockSkip:as,br:zn,code:es,del:je,delLDelim:je,delRDelim:je,emStrongLDelim:ls,emStrongRDelimAst:ds,emStrongRDelimUnd:us,escape:Ji,link:vs,nolink:Mn,punctuation:rs,reflink:Wn,reflinkSearch:xs,tag:ys,text:ts,url:je},ks={...Nr,link:v(/^!?\[(label)\]\((.*?)\)/).replace("label",Gt).getRegex(),reflink:v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Gt).getRegex()},yr={...Nr,emStrongRDelimAst:ps,emStrongLDelim:cs,delLDelim:hs,delRDelim:gs,url:v(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ln).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:v(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ln).getRegex()},$s={...yr,br:v(zn).replace("{2,}","*").getRegex(),text:v(yr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ut={normal:Or,gfm:Zi,pedantic:Qi},ht={normal:Nr,gfm:yr,breaks:$s,pedantic:ks},Es={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cn=r=>Es[r];function ue(r,e){if(e){if(M.escapeTest.test(r))return r.replace(M.escapeReplace,cn)}else if(M.escapeTestNoEncode.test(r))return r.replace(M.escapeReplaceNoEncode,cn);return r}function dn(r){try{r=encodeURI(r).replace(M.percentDecode,"%")}catch{return null}return r}function pn(r,e){let t=r.replace(M.findPipe,(s,o,l)=>{let a=!1,c=o;for(;--c>=0&&l[c]==="\\";)a=!a;return a?"|":" |"}),n=t.split(M.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(M.slashPipe,"|");return n}function ft(r,e,t){let n=r.length;if(n===0)return"";let i=0;for(;i<n&&r.charAt(n-i-1)===e;)i++;return r.slice(0,n-i)}function Ss(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}function Cs(r,e=0){let t=e,n="";for(let i of r)if(i==="	"){let s=4-t%4;n+=" ".repeat(s),t+=s}else n+=i,t++;return n}function un(r,e,t,n,i){let s=e.href,o=e.title||null,l=r[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let a={type:r[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:o,text:l,tokens:n.inlineTokens(l)};return n.state.inLink=!1,a}function Rs(r,e,t){let n=r.match(t.other.indentCodeCompensation);if(n===null)return e;let i=n[1];return e.split(`
`).map(s=>{let o=s.match(t.other.beginningSpace);if(o===null)return s;let[l]=o;return l.length>=i.length?s.slice(i.length):s}).join(`
`)}var Kt=class{options;rules;lexer;constructor(r){this.options=r||Ve}space(r){let e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){let e=this.rules.block.code.exec(r);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:ft(t,`
`)}}}fences(r){let e=this.rules.block.fences.exec(r);if(e){let t=e[0],n=Rs(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(r){let e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let n=ft(t,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(t=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){let e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:ft(e[0],`
`)}}blockquote(r){let e=this.rules.block.blockquote.exec(r);if(e){let t=ft(e[0],`
`).split(`
`),n="",i="",s=[];for(;t.length>0;){let o=!1,l=[],a;for(a=0;a<t.length;a++)if(this.rules.other.blockquoteStart.test(t[a]))l.push(t[a]),o=!0;else if(!o)l.push(t[a]);else break;t=t.slice(a);let c=l.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${c}`:c,i=i?`${i}
${d}`:d;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,s,!0),this.lexer.state.top=u,t.length===0)break;let f=s.at(-1);if(f?.type==="code")break;if(f?.type==="blockquote"){let h=f,g=h.raw+`
`+t.join(`
`),R=this.blockquote(g);s[s.length-1]=R,n=n.substring(0,n.length-h.raw.length)+R.raw,i=i.substring(0,i.length-h.text.length)+R.text;break}else if(f?.type==="list"){let h=f,g=h.raw+`
`+t.join(`
`),R=this.list(g);s[s.length-1]=R,n=n.substring(0,n.length-f.raw.length)+R.raw,i=i.substring(0,i.length-h.raw.length)+R.raw,t=g.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:s,text:i}}}list(r){let e=this.rules.block.list.exec(r);if(e){let t=e[1].trim(),n=t.length>1,i={type:"list",raw:"",ordered:n,start:n?+t.slice(0,-1):"",loose:!1,items:[]};t=n?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=n?t:"[*+-]");let s=this.rules.other.listItemRegex(t),o=!1;for(;r;){let a=!1,c="",d="";if(!(e=s.exec(r))||this.rules.block.hr.test(r))break;c=e[0],r=r.substring(c.length);let u=Cs(e[2].split(`
`,1)[0],e[1].length),f=r.split(`
`,1)[0],h=!u.trim(),g=0;if(this.options.pedantic?(g=2,d=u.trimStart()):h?g=e[1].length+1:(g=u.search(this.rules.other.nonSpaceChar),g=g>4?1:g,d=u.slice(g),g+=e[1].length),h&&this.rules.other.blankLine.test(f)&&(c+=f+`
`,r=r.substring(f.length+1),a=!0),!a){let R=this.rules.other.nextBulletRegex(g),_=this.rules.other.hrRegex(g),Y=this.rules.other.fencesBeginRegex(g),C=this.rules.other.headingBeginRegex(g),I=this.rules.other.htmlBeginRegex(g),Ye=this.rules.other.blockquoteBeginRegex(g);for(;r;){let ee=r.split(`
`,1)[0],Fe;if(f=ee,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),Fe=f):Fe=f.replace(this.rules.other.tabCharGlobal,"    "),Y.test(f)||C.test(f)||I.test(f)||Ye.test(f)||R.test(f)||_.test(f))break;if(Fe.search(this.rules.other.nonSpaceChar)>=g||!f.trim())d+=`
`+Fe.slice(g);else{if(h||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Y.test(u)||C.test(u)||_.test(u))break;d+=`
`+f}h=!f.trim(),c+=ee+`
`,r=r.substring(ee.length+1),u=Fe.slice(g)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(o=!0)),i.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),i.raw+=c}let l=i.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let a of i.items){if(this.lexer.state.top=!1,a.tokens=this.lexer.blockTokens(a.text,[]),a.task){if(a.text=a.text.replace(this.rules.other.listReplaceTask,""),a.tokens[0]?.type==="text"||a.tokens[0]?.type==="paragraph"){a.tokens[0].raw=a.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),a.tokens[0].text=a.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}}let c=this.rules.other.listTaskCheckbox.exec(a.raw);if(c){let d={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};a.checked=d.checked,i.loose?a.tokens[0]&&["paragraph","text"].includes(a.tokens[0].type)&&"tokens"in a.tokens[0]&&a.tokens[0].tokens?(a.tokens[0].raw=d.raw+a.tokens[0].raw,a.tokens[0].text=d.raw+a.tokens[0].text,a.tokens[0].tokens.unshift(d)):a.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):a.tokens.unshift(d)}}if(!i.loose){let c=a.tokens.filter(u=>u.type==="space"),d=c.length>0&&c.some(u=>this.rules.other.anyLine.test(u.raw));i.loose=d}}if(i.loose)for(let a of i.items){a.loose=!0;for(let c of a.tokens)c.type==="text"&&(c.type="paragraph")}return i}}html(r){let e=this.rules.block.html.exec(r);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(r){let e=this.rules.block.def.exec(r);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:n,title:i}}}table(r){let e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=pn(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===n.length){for(let o of n)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<t.length;o++)s.header.push({text:t[o],tokens:this.lexer.inline(t[o]),header:!0,align:s.align[o]});for(let o of i)s.rows.push(pn(o,s.header.length).map((l,a)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[a]})));return s}}lheading(r){let e=this.rules.block.lheading.exec(r);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(r){let e=this.rules.block.paragraph.exec(r);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){let e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){let e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){let e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){let e=this.rules.inline.link.exec(r);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=ft(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=Ss(e[2],"()");if(s===-2)return;if(s>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(n);s&&(n=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?n=n.slice(1):n=n.slice(1,-1)),un(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){let n=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[n.toLowerCase()];if(!i){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return un(t,i,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let n=this.rules.inline.emStrongLDelim.exec(r);if(!(!n||n[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!t||this.rules.inline.punctuation.exec(t))){let i=[...n[0]].length-1,s,o,l=i,a=0,c=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*r.length+i);(n=c.exec(e))!=null;){if(s=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!s)continue;if(o=[...s].length,n[3]||n[4]){l+=o;continue}else if((n[5]||n[6])&&i%3&&!((i+o)%3)){a+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+a);let d=[...n[0]][0].length,u=r.slice(0,i+n.index+d+o);if(Math.min(i,o)%2){let h=u.slice(1,-1);return{type:"em",raw:u,text:h,tokens:this.lexer.inlineTokens(h)}}let f=u.slice(2,-2);return{type:"strong",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(r){let e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return n&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){let e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r,e,t=""){let n=this.rules.inline.delLDelim.exec(r);if(n&&(!n[1]||!t||this.rules.inline.punctuation.exec(t))){let i=[...n[0]].length-1,s,o,l=i,a=this.rules.inline.delRDelim;for(a.lastIndex=0,e=e.slice(-1*r.length+i);(n=a.exec(e))!=null;){if(s=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!s||(o=[...s].length,o!==i))continue;if(n[3]||n[4]){l+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l);let c=[...n[0]][0].length,d=r.slice(0,i+n.index+c+o),u=d.slice(i,-i);return{type:"del",raw:d,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(r){let e=this.rules.inline.autolink.exec(r);if(e){let t,n;return e[2]==="@"?(t=e[1],n="mailto:"+t):(t=e[1],n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(r){let e;if(e=this.rules.inline.url.exec(r)){let t,n;if(e[2]==="@")t=e[0],n="mailto:"+t;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);t=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(r){let e=this.rules.inline.text.exec(r);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},oe=class vr{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ve,this.options.tokenizer=this.options.tokenizer||new Kt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:M,block:Ut.normal,inline:ht.normal};this.options.pedantic?(t.block=Ut.pedantic,t.inline=ht.pedantic):this.options.gfm&&(t.block=Ut.gfm,this.options.breaks?t.inline=ht.breaks:t.inline=ht.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ut,inline:ht}}static lex(e,t){return new vr(t).lex(e)}static lexInline(e,t){return new vr(t).inlineTokens(e)}lex(e){e=e.replace(M.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(M.tabCharGlobal,"    ").replace(M.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(o=>(i=o.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let o=t.at(-1);i.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let o=1/0,l=e.slice(1),a;this.options.extensions.startBlock.forEach(c=>{a=c.call({lexer:this},l),typeof a=="number"&&a>=0&&(o=Math.min(o,a))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){let o=t.at(-1);n&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i),n=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,i=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)a.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)s=i[2]?i[2].length:0,n=n.slice(0,i.index+s)+"["+"a".repeat(i[0].length-s-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let o=!1,l="";for(;e;){o||(l=""),o=!1;let a;if(this.options.extensions?.inline?.some(d=>(a=d.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let d=t.at(-1);a.type==="text"&&d?.type==="text"?(d.raw+=a.raw,d.text+=a.text):t.push(a);continue}if(a=this.tokenizer.emStrong(e,n,l)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.del(e,n,l)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),t.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),t.push(a);continue}let c=e;if(this.options.extensions?.startInline){let d=1/0,u=e.slice(1),f;this.options.extensions.startInline.forEach(h=>{f=h.call({lexer:this},u),typeof f=="number"&&f>=0&&(d=Math.min(d,f))}),d<1/0&&d>=0&&(c=e.substring(0,d+1))}if(a=this.tokenizer.inlineText(c)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(l=a.raw.slice(-1)),o=!0;let d=t.at(-1);d?.type==="text"?(d.raw+=a.raw,d.text+=a.text):t.push(a);continue}if(e){let d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}},Vt=class{options;parser;constructor(r){this.options=r||Ve}space(r){return""}code({text:r,lang:e,escaped:t}){let n=(e||"").match(M.notSpaceStart)?.[0],i=r.replace(M.endingNewline,"")+`
`;return n?'<pre><code class="language-'+ue(n)+'">'+(t?i:ue(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:ue(i,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){let e=r.ordered,t=r.start,n="";for(let o=0;o<r.items.length;o++){let l=r.items[o];n+=this.listitem(l)}let i=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+n+"</"+i+`>
`}listitem(r){return`<li>${this.parser.parse(r.tokens)}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",t="";for(let i=0;i<r.header.length;i++)t+=this.tablecell(r.header[i]);e+=this.tablerow({text:t});let n="";for(let i=0;i<r.rows.length;i++){let s=r.rows[i];t="";for(let o=0;o<s.length;o++)t+=this.tablecell(s[o]);n+=this.tablerow({text:t})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let e=this.parser.parseInline(r.tokens),t=r.header?"th":"td";return(r.align?`<${t} align="${r.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${ue(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:t}){let n=this.parser.parseInline(t),i=dn(r);if(i===null)return n;r=i;let s='<a href="'+r+'"';return e&&(s+=' title="'+ue(e)+'"'),s+=">"+n+"</a>",s}image({href:r,title:e,text:t,tokens:n}){n&&(t=this.parser.parseInline(n,this.parser.textRenderer));let i=dn(r);if(i===null)return ue(t);r=i;let s=`<img src="${r}" alt="${ue(t)}"`;return e&&(s+=` title="${ue(e)}"`),s+=">",s}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:ue(r.text)}},Fr=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}checkbox({raw:r}){return r}},ae=class xr{options;renderer;textRenderer;constructor(e){this.options=e||Ve,this.options.renderer=this.options.renderer||new Vt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Fr}static parse(e,t){return new xr(t).parse(e)}static parseInline(e,t){return new xr(t).parseInline(e)}parse(e){let t="";for(let n=0;n<e.length;n++){let i=e[n];if(this.options.extensions?.renderers?.[i.type]){let o=i,l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){t+=l||"";continue}}let s=i;switch(s.type){case"space":{t+=this.renderer.space(s);break}case"hr":{t+=this.renderer.hr(s);break}case"heading":{t+=this.renderer.heading(s);break}case"code":{t+=this.renderer.code(s);break}case"table":{t+=this.renderer.table(s);break}case"blockquote":{t+=this.renderer.blockquote(s);break}case"list":{t+=this.renderer.list(s);break}case"checkbox":{t+=this.renderer.checkbox(s);break}case"html":{t+=this.renderer.html(s);break}case"def":{t+=this.renderer.def(s);break}case"paragraph":{t+=this.renderer.paragraph(s);break}case"text":{t+=this.renderer.text(s);break}default:{let o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}parseInline(e,t=this.renderer){let n="";for(let i=0;i<e.length;i++){let s=e[i];if(this.options.extensions?.renderers?.[s.type]){let l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=l||"";continue}}let o=s;switch(o.type){case"escape":{n+=t.text(o);break}case"html":{n+=t.html(o);break}case"link":{n+=t.link(o);break}case"image":{n+=t.image(o);break}case"checkbox":{n+=t.checkbox(o);break}case"strong":{n+=t.strong(o);break}case"em":{n+=t.em(o);break}case"codespan":{n+=t.codespan(o);break}case"br":{n+=t.br(o);break}case"del":{n+=t.del(o);break}case"text":{n+=t.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}},bt=class{options;block;constructor(r){this.options=r||Ve}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(){return this.block?oe.lex:oe.lexInline}provideParser(){return this.block?ae.parse:ae.parseInline}},Ts=class{defaults=Lr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ae;Renderer=Vt;TextRenderer=Fr;Lexer=oe;Tokenizer=Kt;Hooks=bt;constructor(...r){this.use(...r)}walkTokens(r,e){let t=[];for(let n of r)switch(t=t.concat(e.call(this,n)),n.type){case"table":{let i=n;for(let s of i.header)t=t.concat(this.walkTokens(s.tokens,e));for(let s of i.rows)for(let o of s)t=t.concat(this.walkTokens(o.tokens,e));break}case"list":{let i=n;t=t.concat(this.walkTokens(i.items,e));break}default:{let i=n;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{let o=i[s].flat(1/0);t=t.concat(this.walkTokens(o,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...r){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(t=>{let n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let s=e.renderers[i.name];s?e.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),t.renderer){let i=this.defaults.renderer||new Vt(this.defaults);for(let s in t.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let o=s,l=t.renderer[o],a=i[o];i[o]=(...c)=>{let d=l.apply(i,c);return d===!1&&(d=a.apply(i,c)),d||""}}n.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new Kt(this.defaults);for(let s in t.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,l=t.tokenizer[o],a=i[o];i[o]=(...c)=>{let d=l.apply(i,c);return d===!1&&(d=a.apply(i,c)),d}}n.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new bt;for(let s in t.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let o=s,l=t.hooks[o],a=i[o];bt.passThroughHooks.has(s)?i[o]=c=>{if(this.defaults.async&&bt.passThroughHooksRespectAsync.has(s))return(async()=>{let u=await l.call(i,c);return a.call(i,u)})();let d=l.call(i,c);return a.call(i,d)}:i[o]=(...c)=>{if(this.defaults.async)return(async()=>{let u=await l.apply(i,c);return u===!1&&(u=await a.apply(i,c)),u})();let d=l.apply(i,c);return d===!1&&(d=a.apply(i,c)),d}}n.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,s=t.walkTokens;n.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...n}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return oe.lex(r,e??this.defaults)}parser(r,e){return ae.parse(r,e??this.defaults)}parseMarkdown(r){return(e,t)=>{let n={...t},i={...this.defaults,...n},s=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=r),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(e):e,l=await(i.hooks?await i.hooks.provideLexer():r?oe.lex:oe.lexInline)(o,i),a=i.hooks?await i.hooks.processAllTokens(l):l;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let c=await(i.hooks?await i.hooks.provideParser():r?ae.parse:ae.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(c):c})().catch(s);try{i.hooks&&(e=i.hooks.preprocess(e));let o=(i.hooks?i.hooks.provideLexer():r?oe.lex:oe.lexInline)(e,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let l=(i.hooks?i.hooks.provideParser():r?ae.parse:ae.parseInline)(o,i);return i.hooks&&(l=i.hooks.postprocess(l)),l}catch(o){return s(o)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let n="<p>An error occurred:</p><pre>"+ue(t.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(t);throw t}}},Me=new Ts;function k(r,e){return Me.parse(r,e)}k.options=k.setOptions=function(r){return Me.setOptions(r),k.defaults=Me.defaults,An(k.defaults),k};k.getDefaults=Lr;k.defaults=Ve;k.use=function(...r){return Me.use(...r),k.defaults=Me.defaults,An(k.defaults),k};k.walkTokens=function(r,e){return Me.walkTokens(r,e)};k.parseInline=Me.parseInline;k.Parser=ae;k.parser=ae.parse;k.Renderer=Vt;k.TextRenderer=Fr;k.Lexer=oe;k.lexer=oe.lex;k.Tokenizer=Kt;k.Hooks=bt;k.parse=k;k.options;k.setOptions;k.use;k.walkTokens;k.parseInline;ae.parse;oe.lex;var hn={name:"@kispace-io/app",version:"1.3.3",description:"An IDE for working with geospatial data.",dependencies:{"@eclipse-lyra/core":"0.7.41","@eclipse-lyra/extension-python-runtime":"0.7.41","@eclipse-lyra/extension-utils":"0.7.41","@eclipse-lyra/extension-in-browser-ml":"0.7.41","@eclipse-lyra/extension-ai-system":"0.7.41","@eclipse-lyra/extension-command-palette":"0.7.41","@eclipse-lyra/extension-github-service":"0.7.41","@eclipse-lyra/extension-howto-system":"0.7.41","@eclipse-lyra/extension-md-editor":"0.7.41","@eclipse-lyra/extension-media-viewer":"0.7.41","@eclipse-lyra/extension-memory-usage":"0.7.41","@eclipse-lyra/extension-monaco-editor":"0.7.41","@eclipse-lyra/extension-notebook":"0.7.41","@eclipse-lyra/extension-settings-tree":"0.7.41","@eclipse-lyra/extension-sqleditor":"0.7.41","@eclipse-lyra/extension-duckdb":"0.7.41","@eclipse-lyra/extension-pglite":"0.7.41","@eclipse-lyra/extension-dataviewer":"0.7.41","@kispace-io/extension-catalog":"0.0.0","@kispace-io/extension-gtfs":"0.0.0","@kispace-io/extension-map-editor":"0.0.0","@kispace-io/extension-mapbuilder":"0.0.0","@kispace-io/extension-mapprops":"0.0.0","@kispace-io/extension-overpass":"0.0.0","@kispace-io/extension-style-editor":"0.0.0","@kispace-io/gs-lib":"1.3.3","font-gis":"1.0.6","pace-js":"1.2.4"}};const qn="app-toolbars-main",ct="app-toolbars-main-right",Hn="app-toolbars-main-center",Gn="app-toolbars-bottom",nr="app-toolbars-bottom-center",_t="app-toolbars-bottom-end",Kn="system-views",Xt="system.layouts",xe="editor-area-main",Yt="sidebar-main",Vn="sidebar-main-bottom",Xn="sidebar-auxiliary",Ur="panel-bottom",Ps="command-save",Yn=!1;var jr=(r=>(r[r.LEFT=0]="LEFT",r[r.MIDDLE=1]="MIDDLE",r[r.RIGHT=2]="RIGHT",r[r.BACK=3]="BACK",r[r.FORWARD=4]="FORWARD",r))(jr||{});const Ls=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:Ps,EDITOR_AREA_MAIN:xe,HIDE_DOT_RESOURCE:Yn,MouseButton:jr,PANEL_BOTTOM:Ur,SIDEBAR_AUXILIARY:Xn,SIDEBAR_MAIN:Yt,SIDEBAR_MAIN_BOTTOM:Vn,SYSTEM_LAYOUTS:Xt,SYSTEM_VIEWS:Kn,TOOLBAR_BOTTOM:Gn,TOOLBAR_BOTTOM_CENTER:nr,TOOLBAR_BOTTOM_END:_t,TOOLBAR_MAIN:qn,TOOLBAR_MAIN_CENTER:Hn,TOOLBAR_MAIN_RIGHT:ct},Symbol.toStringTag,{value:"Module"})),_s="eclipse-lyra-persistence",wt="keyval",As=1;let ar=null;function fn(){return ar||(ar=new Promise((r,e)=>{const t=indexedDB.open(_s,As);t.onerror=()=>e(t.error),t.onsuccess=()=>r(t.result),t.onupgradeneeded=n=>{n.target.result.createObjectStore(wt)}})),ar}class Ds{async persistObject(e,t){const n=await fn();return new Promise((i,s)=>{const l=n.transaction(wt,"readwrite").objectStore(wt),a=t==null?l.delete(e):l.put(t,e);a.onsuccess=()=>i(),a.onerror=()=>s(a.error)})}async getObject(e){const t=await fn();return new Promise((n,i)=>{const o=t.transaction(wt,"readonly").objectStore(wt).get(e);o.onsuccess=()=>n(o.result),o.onerror=()=>i(o.error)})}}const le=new Ds;U.put("persistenceService",le);const Ze=".geospace/settings.json",lr="dialogSettings",Be="events/settings/changed";function Zn(r,e){if(e){for(const[t,n]of Object.entries(e))if(n&&typeof n=="object"){const i=r[t];i?.properties&&n.properties?Zn(i.properties,n.properties):r[t]={...n,properties:n.properties?{...n.properties}:void 0}}}}class Is{constructor(){this.mergedSchema={type:"object",properties:{}}}async checkSettings(){this.appSettings||(this.appSettings=await le.getObject(Ze),this.appSettings||(this.appSettings={},await le.persistObject(Ze,this.appSettings)),w(Be,this.appSettings))}registerSchema(e){const t=e.properties??(e.type==="object"?{}:void 0);t&&(this.mergedSchema.properties||(this.mergedSchema.properties={}),Zn(this.mergedSchema.properties,t))}getCategories(){const e=this.mergedSchema.properties;return e?Object.entries(e).filter(([,t])=>t&&typeof t=="object").map(([t,n])=>({id:t,label:n.title??t,order:typeof n.order=="number"?n.order:0,schema:n})).sort((t,n)=>t.order-n.order):[]}getSchemaForCategory(e){return this.mergedSchema.properties?.[e]}getSchemaForSettingKey(e){const t=e.split(".").filter(Boolean);if(t.length===0)return this.mergedSchema;let n=this.mergedSchema;for(const i of t)if(n=n?.properties?.[i],!n)return;return n}traversePath(e,t,n){if(t.length===0)return null;let i=e;const s=t.length-1;for(let o=0;o<s;o++){const l=t[o];if(i[l]===void 0){if(!n)return null;i[l]={}}if(i[l]===null||typeof i[l]!="object")return null;i=i[l]}return{parent:i,key:t[s]}}async getAt(e){await this.checkSettings();const t=e.split(".").filter(Boolean);if(t.length===0)return this.appSettings;const n=this.traversePath(this.appSettings,t,!1);if(n)return n.parent[n.key]}async setAt(e,t){await this.checkSettings();const n=e.split(".").filter(Boolean);if(n.length===0)return;const i=this.traversePath(this.appSettings,n,!0);i&&(i.parent[i.key]=t,await le.persistObject(Ze,this.appSettings),w(Be,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,t){await this.checkSettings(),this.appSettings[e]=t,await le.persistObject(Ze,this.appSettings),w(Be,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await le.persistObject(Ze,this.appSettings),w(Be,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[lr]||{})[e]}async setDialogSetting(e,t){await this.checkSettings();const n=this.appSettings[lr]||{};n[e]=t,this.appSettings[lr]=n,await le.persistObject(Ze,this.appSettings),w(Be,this.appSettings)}}const A=new Is;U.put("appSettings",A);class Os{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,wr.set(this.updateCounter)}run(e,t){const n=this.createProgressMonitor(e);try{this.tasks.push(n),this.notifyUpdate(),t(n)}finally{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()}}async runAsync(e,t){const n=this.createProgressMonitor(e);return this.tasks.push(n),this.notifyUpdate(),t(n).finally(()=>{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()})}createProgressMonitor(e){const t={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(t,{set:(n,i,s)=>(n[i]=s,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const rt=new Os;U.put("taskService",rt);const zs=Se("EsmShService"),At=class Q{isEsmShUrl(e){try{const t=new URL(e);return t.hostname==="esm.sh"||t.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(e){return this.isEsmShUrl(e)||this.isHttpUrl(e)?!1:this.parseSource(e)!==null}isHttpUrl(e){try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}parseSource(e){return!e||typeof e!="string"||(e=e.trim(),this.isHttpUrl(e))?null:e.startsWith(Q.GITHUB_PREFIX)?this.parseGitHubSource(e):e.startsWith(Q.JSR_PREFIX)?this.parseJsrSource(e):e.startsWith(Q.PR_PREFIX)?this.parsePrSource(e):this.parseNpmSource(e)}parseGitHubSource(e){const n=e.substring(Q.GITHUB_PREFIX.length).split("/");if(n.length<2)return null;const i=n[0],s=n[1];let o,l,a;const c=s.match(/^(.+?)(@(.+))?$/);return c?(o=c[1],l=c[3],n.length>2&&(a=n.slice(2).join("/")),{type:"github",owner:i,repo:o,version:l,path:a}):null}parseJsrSource(e){const t=e.substring(Q.JSR_PREFIX.length);if(!t.startsWith("@"))return null;const n=t.split("/");if(n.length<2)return null;const i=n[0],s=n[1];let o,l,a;const c=s.match(/^(.+?)(@(.+))?$/);return c?(o=`${i}/${c[1]}`,l=c[3],n.length>2&&(a=n.slice(2).join("/")),{type:"jsr",package:o,version:l,path:a}):null}parsePrSource(e){const n=e.substring(Q.PR_PREFIX.length).split("/");if(n.length<2)return null;const i=n[0],s=n[1];let o,l;const a=s.match(/^(.+?)@(.+)$/);return a?(o=a[1],l=a[2]):o=s,{type:"pr",owner:i,repo:o,commit:l}}parseNpmSource(e){const t=e.split("/"),n=t[0];let i,s,o;const l=n.match(/^(.+?)(@(.+))?$/);return l?(i=l[1],s=l[3],t.length>1&&(o=t.slice(1).join("/")),{type:"npm",package:i,version:s,path:o}):null}buildEsmShUrl(e,t){let n=Q.ESM_SH_BASE;switch(e.type){case"npm":n+=`/${e.package}`,e.version&&(n+=`@${e.version}`),e.path&&(n+=`/${e.path}`);break;case"github":n+=`/${Q.GITHUB_PREFIX}${e.owner}/${e.repo}`,e.version&&(n+=`@${e.version}`),e.path&&(n+=`/${e.path}`);break;case"jsr":n+=`/${Q.JSR_PREFIX}${e.package}`,e.version&&(n+=`@${e.version}`),e.path&&(n+=`/${e.path}`);break;case"pr":n+=`/${Q.PR_PREFIX}${e.owner}/${e.repo}`,e.commit&&(n+=`@${e.commit}`);break}const i=[];if(t?.deps){const s=Object.entries(t.deps).map(([o,l])=>`${o}@${l}`).join(",");i.push(`deps=${encodeURIComponent(s)}`)}return t?.target&&i.push(`target=${encodeURIComponent(t.target)}`),t?.dev&&i.push("dev"),t?.bundle===!1?i.push("bundle=false"):t?.bundle===!0&&i.push("bundle"),i.length>0&&(n+=`?${i.join("&")}`),n}normalizeToEsmSh(e,t){if(this.isEsmShUrl(e)||this.isHttpUrl(e))return e;const n=this.parseSource(e);return n?this.buildEsmShUrl(n,t):(zs.warn(`Could not parse source identifier: ${e}`),e)}extractPackageName(e){const t=this.parseSource(e);if(!t)return null;switch(t.type){case"npm":return t.package||null;case"github":return`${t.owner}/${t.repo}`;case"jsr":return t.package||null;case"pr":return`${t.owner}/${t.repo}`}}isGitHubUrl(e){try{const t=new URL(e);return t.hostname==="github.com"||t.hostname==="www.github.com"}catch{return e.startsWith("https://github.com/")||e.startsWith("http://github.com/")}}convertGitHubUrlToSource(e){try{const n=new URL(e).pathname.split("/").filter(c=>c);if(n.length<2)throw new Error("Invalid GitHub URL format");const i=n[0];let s=n[1].replace(/\.git$/,""),o,l;n.length>2&&(n[2]==="blob"||n[2]==="tree"?(o=n[3]||"main",n[2]==="blob"&&n.length>4&&(l=n.slice(4).join("/"))):n[2]==="commit"?o=n[3]:l=n.slice(2).join("/"));let a=`${Q.GITHUB_PREFIX}${i}/${s}`;return o&&(a+=`@${o}`),l&&(a+=`/${l}`),a}catch{const t=e.match(/github\.com\/([^\/]+)\/([^\/]+)/);return t?`${Q.GITHUB_PREFIX}${t[1]}/${t[2].replace(/\.git$/,"")}`:e}}async fetchGitHubPackageJson(e){if(e.type!=="github")throw new Error("Source must be a GitHub source");const t=e.owner,n=e.repo,i=e.version||"main",s=`https://raw.githubusercontent.com/${t}/${n}/${i}/package.json`,o=await fetch(s);if(!o.ok)throw new Error(`Failed to fetch package.json: ${o.statusText}`);return await o.json()}};At.ESM_SH_BASE="https://esm.sh";At.GITHUB_PREFIX="gh/";At.JSR_PREFIX="jsr/";At.PR_PREFIX="pr/";let Ns=At;const me=new Ns;U.put("esmShService",me);const yt="events/extensionsregistry/extensionsConfigChanged",gt="extensions",gn="extensions.external";class Fs{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,H(Be,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then()})}async loadPersistedExternalExtensions(){try{const e=await A.get(gn);e&&Array.isArray(e)&&e.forEach(t=>{this.extensions[t.id]=t})}catch(e){E.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(t=>t.external);await A.set(gn,e)}catch(e){E.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await A.get(gt),this.extensionsSettings||(await A.set(gt,[]),this.extensionsSettings=await A.get(gt)),w(yt,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,E.debug(`Registered extension: ${e.id}`),e.external&&this.savePersistedExternalExtensions().catch(t=>{E.error(`Failed to persist external extension: ${t}`)}),w(yt,this.extensionsSettings)}async loadExtensionFromUrl(e,t){E.info(`Loading extension from URL: ${e}...`);try{let n=e,i=`Extension from ${e}`;if(me.isSourceIdentifier(e)){const o=me.extractPackageName(e);o&&(i=`Extension: ${o}`),n=me.normalizeToEsmSh(e),E.debug(`Converted source identifier to esm.sh URL: ${e} -> ${n}`)}const s=t||`url:${n}`;if(this.isEnabled(s))return E.info(`Extension from URL ${n} is already enabled`),s;if(!this.extensions[s]){const o={id:s,name:i,description:`Extension loaded from: ${e}`,url:n};this.registerExtension(o),E.info(`Registered extension from URL: ${s}`)}return this.enable(s,!1),E.info(`Successfully enabled extension from URL: ${n}`),s}catch(n){throw E.error(`Failed to load extension from URL ${e}: ${n}`),n}}getExtensions(){return Object.values(this.extensions)}async loadEnabledExtensions(){await this.checkExtensionsConfig();const t=(this.extensionsSettings??[]).filter(n=>this.isEnabled(n.id)&&this.extensions[n.id]).map(n=>this.load(n.id).catch(i=>{P("Extension could not be loaded: "+i.message)}));await Promise.all(t)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(t=>t.id===e&&t.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,t=!1){this.isEnabled(e)||(E.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,t)}).catch(n=>{E.error(`Could not load extension: ${e}: ${n}`)}))}async load(e,t=[]){if(this.loadedExtensions.has(e))return;const n=this.loadingPromises.get(e);if(n)return n;if(t.includes(e)){const o=[...t,e].join(" → ");throw new Error(`Circular dependency detected: ${o}`)}const i=this.extensions[e];if(!i)throw new Error("Extension not found: "+e);const s=(async()=>{try{if(E.debug(`Loading extension: ${e}`),i.dependencies&&i.dependencies.length>0){const l=[...t,e];for(const a of i.dependencies)await this.load(a,l),this.isEnabled(a)||(await this.updateEnablementAsync(a,!0,!1),E.debug(`Auto-enabled dependency: ${a}`))}const o=await rt.runAsync("Loading extension: "+i.name,async()=>{if(i.loader)return i.loader();if(i.url){let l=i.url;return me.isSourceIdentifier(i.url)&&(l=me.normalizeToEsmSh(i.url),E.debug(`Normalized extension URL: ${i.url} -> ${l}`)),import(l)}});if(this.loadedExtensions.add(e),o?.default instanceof Function)try{o.default(ze.getProxy())}catch(l){throw E.error(`Error executing extension function for ${e}: ${l}`),l}}catch(o){throw this.loadedExtensions.delete(e),o}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,s),s}disable(e,t=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,t)}updateEnablement(e,t,n){this.checkExtensionsConfig().then(()=>{const i=this.extensionsSettings?.find(s=>s.id==e);i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),A.set(gt,this.extensionsSettings).then(()=>{if(n){const s=this.extensions[e];ke(t?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}w(yt,this.extensionsSettings)})})}async updateEnablementAsync(e,t,n){await this.checkExtensionsConfig();const i=this.extensionsSettings?.find(s=>s.id==e);if(i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),await A.set(gt,this.extensionsSettings),n){const s=this.extensions[e];ke(t?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}w(yt,this.extensionsSettings)}}const T=new Fs;U.put("extensionRegistry",T);const mn=["alt","ctrl","meta","shift"],Qn={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},Us={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},js={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},Bs=new Set(Object.keys(Qn));function bn(r){return js[r]??r}class Ws{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),H(Ln,e=>{e.keyBinding&&this.registerKeyBinding(e.id,e.keyBinding)})}registerExistingCommandBindings(){const e=$e.listCommands();Object.values(e).forEach(t=>{t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)})}parseKeyBinding(e){if(!e||e.trim()==="")return null;const t=e.toUpperCase().split("+").map(o=>o.trim());if(t.length===0)return null;const n=t[t.length-1],i=t.slice(0,-1);if(t.length===1&&Bs.has(n))return null;const s={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const o of i){const l=Qn[o];if(l===void 0)return null;s[l]=!0}return s.key=bn(n),s}getBindingKey(e){return[...mn.filter(n=>e[n]),e.key.toUpperCase()].join("+")}registerKeyBinding(e,t){const n=this.parseKeyBinding(t);if(!n)return E.error(`Invalid key binding: ${t}`),!1;n.commandId=e;const i=this.getBindingKey(n);this.bindings.has(i)||this.bindings.set(i,[]);const s=this.bindings.get(i);if(s.find(a=>a.commandId===e))return E.error(`Key binding ${t} already registered for command ${e}`),!1;const l=s.find(a=>a.commandId!==e);return l?(E.warn(`Key binding ${t} already used by command ${l.commandId}; refusing for ${e}`),!1):(s.push(n),!0)}unregisterKeyBinding(e,t){if(t){const n=this.parseKeyBinding(t);if(n){const i=this.getBindingKey(n),s=this.bindings.get(i);if(s){const o=s.filter(l=>l.commandId!==e);o.length===0?this.bindings.delete(i):this.bindings.set(i,o)}}}else for(const[n,i]of this.bindings.entries()){const s=i.filter(o=>o.commandId!==e);s.length===0?this.bindings.delete(n):this.bindings.set(n,s)}}getKeyBindingsForCommand(e){const t=[];for(const n of this.bindings.values())for(const i of n)i.commandId===e&&t.push(this.formatKeyBinding(i));return t.sort()}formatKeyBinding(e){const t=mn.filter(i=>e[i]).map(i=>Us[i]),n=e.key.length===1?e.key.toUpperCase():e.key.charAt(0).toUpperCase()+e.key.slice(1).toLowerCase();return t.push(n),t.join("+")}handleKeyDown(e){if(!this.enabled)return;const t={commandId:"",key:bn(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},n=this.getBindingKey(t),i=this.bindings.get(n);if(i&&i.length>0){const s=i[0];try{e.preventDefault(),e.stopPropagation();const o=$e.createExecutionContext({});$e.execute(s.commandId,o),E.debug(`Executed command via key binding: ${s.commandId}`)}catch(o){E.error(`Failed to execute command ${s.commandId}: ${o.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){const e=new Map;for(const[t,n]of this.bindings)e.set(t,[...n]);return e}clearAll(){this.bindings.clear()}}const Jn=new Ws;U.put("keyBindingManager",Jn);class Ne extends Tt{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let t=this;for(;t&&t!==document.body&&t!==document.documentElement;){const n=t.getAttribute("id");if(n){e.unshift(`#${n}`);break}const i=t.tagName.toLowerCase(),s=t.parentElement;if(!s)break;const l=Array.from(s.children).filter(a=>a.tagName.toLowerCase()===i).indexOf(t);l>=0?e.unshift(`${i}:${l}`):e.unshift(i),t=s}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),t=this.getAttribute("id");if(t){this.settingsKey=`${e}:${t}`;return}const n=this.buildDOMTreePath();n&&(this.settingsKey=`${e}:${n}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await A.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await A.setDialogSetting(this.settingsKey,e)}}const ei=class extends Ne{dispose(){}getResult(){}renderMessage(e,t=!1){if(t){const n=k.parse(e,{async:!1});return p`<div class="dialog-message" style="white-space: normal;">${Rt(n)}</div>`}return p`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};ei.styles=[F`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let Ce=ei;const Ue=Se("DialogService"),qe="dialogs",Dt={id:"ok",label:"OK",variant:"primary"},Br={id:"cancel",label:"Cancel",variant:"default"},Ms={id:"close",label:"Close",variant:"default"};let Qe=null;function qs(){return(!Qe||!document.body.contains(Qe))&&(Qe=document.createElement("div"),Qe.id="global-dialog-container",document.body.appendChild(Qe)),Qe}class Hs{constructor(){this.contributions=new Map,this.contributionsChangeScheduled=!1,this.loadContributions(),H(pe,e=>{e.target===qe&&(this.contributionsChangeScheduled||(this.contributionsChangeScheduled=!0,queueMicrotask(()=>{this.contributionsChangeScheduled=!1,this.loadContributions()})))})}loadContributions(){const e=x.getContributions(qe);this.contributions.clear();for(const t of e){if(!t.id){Ue.warn("Dialog contribution missing id, skipping");continue}if(!t.component){Ue.warn(`Dialog contribution "${t.id}" has no component function, skipping`);continue}if(!t.onButton){Ue.warn(`Dialog contribution "${t.id}" has no onButton callback, skipping`);continue}this.contributions.set(t.id,t)}}async open(e,t){const n=this.contributions.get(e);if(!n)throw Ue.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(i=>{const s=qs();let o=!0,l=null;const a=async()=>{if(o){if(o=!1,l)try{await l.dispose()}catch(h){const g=h instanceof Error?h.message:String(h);Ue.error(`Error disposing dialog content for "${e}": ${g}`)}try{const h=l?l.getResult():void 0;await n.onButton("close",h,u)}catch(h){const g=h instanceof Error?h.message:String(h);Ue.error(`Error executing close callback for dialog "${e}": ${g}`)}de(p``,s),i()}},c=async h=>{try{const g=l?l.getResult():void 0;await n.onButton(h,g,u)!==!1&&a()}catch(g){const R=g instanceof Error?g.message:String(g);Ue.error(`Error executing button callback for dialog "${e}": ${R}`),a()}},d=n.buttons&&n.buttons.length>0?n.buttons:[Dt];t&&typeof t=="object"&&(t.close=a);const u={...t,close:a},f=p`
                <wa-dialog label="${n.label||e}" open @wa-request-close=${a}>
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
                        ${n.component(t)}
                        
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
            `;de(f,s),(async()=>{const h=Array.from(s.querySelectorAll("*"));for(const g of h)if(g instanceof Ce){await g.updateComplete,l=g;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const ir=new Hs;U.put("dialogService",ir);const J="events/filesys/workspaceChanged",ve="events/filesys/workspaceConnected",j=Se("WorkspaceService");class ti{constructor(){this.state={}}getWorkspacePath(){const e=[];let t=this,n;for(;t;){e.push(t.getName());const s=t.getParent();s||(n=t),t=s}e.reverse();const i=typeof y?.getWorkspaceSync=="function"?y.getWorkspaceSync():void 0;if(i&&n&&"isDirectChild"in i&&typeof i.isDirectChild=="function"&&i.isDirectChild(n)){const s=i.getFolderNameForDirectory(n);if(s&&e.length>0)return e.length>1?s+"/"+e.slice(1).join("/"):s}return e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const t=e.getParent();if(t)e=t;else break}return e}}var Wr=(r=>(r[r.TEXT=0]="TEXT",r[r.BINARY=1]="BINARY",r))(Wr||{}),ri=(r=>(r[r.BASE64=0]="BASE64",r))(ri||{});class W extends ti{}class q extends ti{}class Ta extends W{constructor(e,t){super(),this.contents=e,this.name=t}async getContents(e){return this.contents}async saveContents(e,t){this.contents=e}async size(){return this.contents.length||null}async copyTo(e){throw Error("Not supported")}delete(e,t){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class Gs extends q{constructor(e,t="/"){super(),this.displayName=t,this.entriesByName=new Map(e.map(n=>[n.getName(),n]))}getFolderNameForDirectory(e){for(const[t,n]of this.entriesByName)if(n===e)return t}isDirectChild(e){return this.getFolderNameForDirectory(e)!==void 0}getName(){return this.displayName}getParent(){}async listChildren(e){return Array.from(this.entriesByName.values())}async getResource(e,t){if(!e||!e.trim())return null;const n=e.indexOf("/"),i=n>=0?e.slice(0,n).trim():e.trim(),s=n>=0?e.slice(n+1).trim():"",o=this.entriesByName.get(i);return o?s?o.getResource(s,t):o:null}touch(){for(const e of this.entriesByName.values())e.touch()}async delete(e,t){throw new Error("Delete not supported on workspace root")}async copyTo(e){throw new Error("Copy not supported on workspace root")}async rename(e){throw new Error("Rename not supported on workspace root")}getFolderByName(e){return this.entriesByName.get(e)}}class cr extends q{constructor(e){super(),this.backendType=e.backendType,this.persistedData=e.data,this.name=e.name}getName(){return this.name}getParent(){}async listChildren(e){return[]}async getResource(e,t){throw new Error(`Workspace backend "${this.backendType}" is not available in this environment.`)}touch(){}async delete(e,t){throw new Error(`Cannot modify workspace folder for missing backend "${this.backendType}".`)}async copyTo(e){throw new Error(`Cannot copy from workspace folder for missing backend "${this.backendType}".`)}async rename(e){throw new Error(`Cannot rename workspace folder for missing backend "${this.backendType}".`)}}const dr="workspace_data",ni=class ii{constructor(){this._currentWorkspace=void 0,this.folders=[],this.contributions=new Map,this.restoredTypes=new Set;let e;this.initPromise=new Promise(t=>{e=t}),this.loadPersistedWorkspace(e)}getWorkspaceSync(){return this._currentWorkspace}registerContribution(e){this.contributions.set(e.type,e),this.tryRestoreForContribution(e)}getContributions(){return Array.from(this.contributions.values())}async tryRestoreForContribution(e){if(await this.initPromise,this.restoredTypes.has(e.type))return;if(this.folders.filter(l=>l.type===e.type).some(l=>!(l.directory instanceof cr))){this.restoredTypes.add(e.type);return}const i=await le.getObject(dr);if(!i?.folders||!Array.isArray(i.folders)){this.restoredTypes.add(e.type);return}const s=i.folders.filter(l=>l.type===e.type);if(s.length===0){this.restoredTypes.add(e.type);return}this.folders=this.folders.filter(l=>!(l.type===e.type&&l.directory instanceof cr));for(const l of s)if(e.restore)try{const a=await e.restore(l.data);if(!a)continue;this.folders.push({type:e.type,data:l.data,directory:a})}catch(a){j.warn(`Failed to restore folder (${e.type}) on contribution registration:`,a)}if(this.folders.length===0){this.restoredTypes.add(e.type);return}const o=this.buildComposite();this.workspace=Promise.resolve(o),this._currentWorkspace=o??void 0,await this.persistFolders(),o&&(w(ve,o),j.debug(`Workspace folders restored for contribution type: ${e.type}`)),this.restoredTypes.add(e.type)}async loadPersistedWorkspace(e){j.debug("Restoring workspace from persistence");try{const t=await le.getObject(dr);if(t||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),t?.folders&&Array.isArray(t.folders)&&t.folders.length>0){const n=t.folders.map(s=>({type:s.type,data:s.data}));await this.resolveFolders(n);const i=this.buildComposite();this.workspace=Promise.resolve(i),this._currentWorkspace=i??void 0,i&&(w(ve,i),j.debug("Workspace restored from persisted folders")),e();return}if(t&&t.type&&t.data!==void 0){const n=this.contributions.get(t.type);if(n?.restore)try{const i=await n.restore(t.data);if(i){this.folders=[{type:t.type,data:t.data,directory:i}];const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s??void 0,this.currentType=t.type,await this.persistFolders(),w(ve,s),j.debug("Workspace restored from legacy format")}}catch(i){j.error("Failed to restore legacy workspace:",i)}}this.workspace||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),e()}finally{if(this.folders.length===0)try{await this.connectFolder({indexeddb:!0,name:ii.DEFAULT_INDEXEDDB_FOLDER_NAME}),j.debug("Connected default IndexedDB workspace")}catch(t){j.warn("Failed to connect default IndexedDB folder",t)}}}async resolveFolders(e){this.folders=[];for(const t of e){const n=this.contributions.get(t.type);if(!n?.restore){const i=t.data&&typeof t.data=="object"&&t.data.name||`${t.type} (missing)`,s=new cr({backendType:t.type,name:i,data:t.data});this.folders.push({type:t.type,data:t.data,directory:s});continue}try{const i=await n.restore(t.data);i&&this.folders.push({type:t.type,data:t.data,directory:i})}catch(i){j.warn(`Failed to restore folder (${t.type}):`,i)}}}buildComposite(){if(this.folders.length!==0)return new Gs(this.folders.map(e=>e.directory))}async persistFolders(){const e=this.folders.length>0?{folders:this.folders.map(t=>({type:t.type,data:t.data}))}:null;await le.persistObject(dr,e),await le.persistObject("workspace",null),j.debug(`Persisted ${this.folders.length} folder(s)`)}async getFolders(){return await this.initPromise,this.folders.map(e=>({name:e.directory.getName(),type:e.type}))}async getFolderInfoForDirectory(e){await this.initPromise;const t=this.folders.find(o=>o.directory===e);if(!t)return;const n=t.data&&typeof t.data=="object"&&t.data.name||t.directory.getName(),s=this.contributions.get(t.type)?.name??t.type;return{name:n,type:t.type,backendName:s}}async updateFolderName(e,t){await this.initPromise;const n=this.folders.find(s=>s.directory===e);if(!n)return;n.data&&typeof n.data=="object"?n.data={...n.data,name:t}:n.data={name:t},await this.persistFolders();const i=this.buildComposite();this.workspace=Promise.resolve(i),this._currentWorkspace=i??void 0,w(ve,i),j.debug(`Updated folder name: ${t}`)}async connectFolder(e){await this.initPromise;const t=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!t)throw new Error("No workspace contribution can handle this input");const n=e?.name??t.type;j.debug(`Connecting workspace: ${t.type}, ${n}`);const i=await t.connect(e),s=t.persist?await t.persist(i):e;this.folders.push({type:t.type,data:s,directory:i}),await this.persistFolders(),this.currentType=this.folders.length===1?t.type:void 0;const o=this.buildComposite();this.workspace=Promise.resolve(o),this._currentWorkspace=o,w(ve,o);const l=i.getName();return j.info(`Workspace connected: ${t.type} (${l})`),o}async disconnectFolder(e){await this.initPromise;const t=this.folders.findIndex(s=>s.directory===e);if(t<0)return;const n=this.folders[t];j.debug(`Disconnecting folder: ${n.directory.getName()} (${n.type})`),this.folders.splice(t,1),await this.persistFolders(),this.folders.length>0?this.currentType=this.folders[0].type:(this.currentType=void 0,j.info("Workspace disconnected"));const i=this.buildComposite();this.workspace=Promise.resolve(i),this._currentWorkspace=i??void 0,w(ve,i)}async connectWorkspace(e){return this.connectFolder(e)}async getWorkspace(){if(await this.initPromise,!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return this.folders.length>0}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){await this.initPromise,this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0,this.folders=[],this.currentType=void 0,await this.persistFolders(),w(ve,void 0),j.info("Workspace disconnected")}async copyResource(e,t,n){await this.initPromise;const i=this._currentWorkspace;if(!i)throw new Error("No workspace connected.");const s=n?.newName??e.getName(),o=t.getWorkspacePath(),l=o?`${o}/${s}`:s,a=async(d,u)=>{const f=await d.getContents({blob:!0}),h=await i.getResource(u,{create:!0});if(!h)throw new Error(`Failed to create target file: ${u}`);await h.saveContents(f)},c=async(d,u)=>{for(const f of await d.listChildren(!1)){const h=`${u}/${f.getName()}`;f instanceof W?await a(f,h):f instanceof q&&await c(f,h)}};if(e instanceof W)await a(e,l);else if(e instanceof q)await c(e,l);else throw new Error("Unsupported resource type for copy operation.");n?.move&&await e.delete(void 0,!0)}};ni.DEFAULT_INDEXEDDB_FOLDER_NAME="My Folder";let Ks=ni;const y=new Ks;U.put("workspaceService",y);class kr extends W{constructor(e,t){super(),this.fileHandle=e,this.parent=t}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const t=await this.fileHandle.getFile();return!e||e?.contentType==Wr.TEXT?await t.text():e?.encoding==ri.BASE64||e?.uri?URL.createObjectURL(t):e?.blob?t:t.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,t){const n=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(n);else{const i=n.getWriter();try{await i.write(e)}finally{await i.close()}}}async copyTo(e){const t=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(t)}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):n}await t.listChildren(!0),w(J,y.getWorkspaceSync()??this.getWorkspace())}}}class be extends q{constructor(e,t){super(),this.dirHandle=e,this.parent=t}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const t={};try{for await(const n of this.dirHandle.values()){const s=n.kind==="file"?new kr(n,this):new be(n,this);t[s.getName()]=s}}catch(n){if(n.name==="NotFoundError")return this.files={},[];throw n}return this.files=t,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,t){if(!e)throw new Error("No path provided");const n=e.split("/");let i=this,s=!1;try{for(let o=0;o<n.length;o++){let l=n[o];if(l&&(l=l.trim()),!l)break;if(i instanceof be){if(await i.listChildren(),!i.files)return null;const a=i.files[l];if(a)i=a;else if(t?.create)if(s=!0,o<n.length-1)try{const c=await i.dirHandle.getDirectoryHandle(l,{create:!0}),d=new be(c,i);i.files[l]=d,i=d,i instanceof be&&await i.listChildren();continue}catch(c){throw c.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${n.slice(0,o+1).join("/")}`):c}else try{const c=await i.dirHandle.getFileHandle(l,{create:!0}),d=new kr(c,i);return i.files[l]=d,d}catch(c){throw c.name==="NotFoundError"?new Error(`File not found or not accessible: ${n.join("/")}`):c}else return null}}}finally{s&&w(J,y.getWorkspaceSync()??this.getWorkspace())}return i}touch(){w(J,y.getWorkspaceSync()??this.getWorkspace())}async delete(e,t=!0){if(!e){const n=this.getParent();return n instanceof be&&(await n.listChildren(),n.files&&delete n.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,n?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:t}).then(async()=>{this.files&&delete this.files[e],w(J,y.getWorkspaceSync()??this.getWorkspace())})}async copyTo(e){for(const t of await this.listChildren()){const n=[e,t.getName()].join("/");await t.copyTo(n)}}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):n}await t.listChildren(!0),w(J,y.getWorkspaceSync()??this.getWorkspace())}}}y.registerContribution({type:"filesystem",name:"fs",canHandle(r){return r&&"kind"in r&&r.kind==="directory"},async connect(r){return new be(r)},async restore(r){if(r&&"kind"in r&&r.kind==="directory")return new be(r,void 0)},async persist(r){return r instanceof be?r.getHandle():null}});const wn=Object.freeze(Object.defineProperty({__proto__:null,FileSysDirHandleResource:be,FileSysFileHandleResource:kr},Symbol.toStringTag,{value:"Module"})),Vs=".opfs";async function yn(){if(typeof navigator>"u"||!navigator.storage?.getDirectory)throw new Error("OPFS is not available in this environment");return await navigator.storage.getDirectory()}class pr extends q{constructor(e){super(),this.inner=e}getName(){return Vs}getParent(){return this.inner.getParent()}async listChildren(e){return this.inner.listChildren(e)}async getResource(e,t){return this.inner.getResource(e,t)}touch(){this.inner.touch()}async delete(e,t){return this.inner.delete(e,t)}async copyTo(e){return this.inner.copyTo(e)}async rename(e){return this.inner.rename(e)}}y.registerContribution({type:"opfs",name:"opfs",canHandle(r){return r&&typeof r=="object"&&r.opfs===!0},async connect(r){const e=await yn(),n=(await Promise.resolve().then(()=>wn)).FileSysDirHandleResource,i=new n(e);return new pr(i)},async restore(r){if(r&&typeof r=="object"&&r.opfs===!0){const e=await yn(),n=(await Promise.resolve().then(()=>wn)).FileSysDirHandleResource,i=new n(e);return new pr(i)}},async persist(r){return r instanceof pr?{opfs:!0}:null}});const Xs="eclipse-lyra-workspace-idb",K="files";let ur=null;async function _e(){if(typeof indexedDB>"u")throw new Error("IndexedDB is not available in this environment");return ur||(ur=new Promise((r,e)=>{const t=indexedDB.open(Xs,1);t.onerror=()=>e(t.error),t.onsuccess=()=>r(t.result),t.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(K)||i.createObjectStore(K)}})),ur}async function Ys(){const r="IndexedDB",e=await y.getFolders(),t=new Set(e.filter(i=>i.type==="indexeddb").map(i=>i.name));if(!t.has(r))return r;let n=1;for(;t.has(`${r} (${n})`);)n+=1;return`${r} (${n})`}function nt(r){return r?r.split("/").filter(Boolean).join("/"):""}function vt(r,e){const t=nt(r),n=nt(e);return t?n?`${t}/${n}`:t:n}function it(r,e){const t=nt(e);return t?`${r}/${t}`:r}function Zs(r,e){const t=nt(e);return t?`${r}/${t}/`:`${r}/`}async function Bt(r,e){const i=(await _e()).transaction(K,"readonly").objectStore(K),s=e?it(r,e):r;return await new Promise((o,l)=>{const a=i.get(s);a.onsuccess=()=>o(a.result),a.onerror=()=>l(a.error)})}async function kt(r,e,t){const s=(await _e()).transaction(K,"readwrite").objectStore(K),o=e?it(r,e):r;await new Promise((l,a)=>{const c=s.put(t,o);c.onsuccess=()=>l(),c.onerror=()=>a(c.error)})}async function vn(r,e){const i=(await _e()).transaction(K,"readwrite").objectStore(K),s=e?it(r,e):r;await new Promise((o,l)=>{const a=i.delete(s);a.onsuccess=()=>o(),a.onerror=()=>l(a.error)})}async function Qs(r,e){const i=(await _e()).transaction(K,"readwrite").objectStore(K),s=it(r,e),o=s+"/",l=i.openCursor();await new Promise((a,c)=>{l.onerror=()=>c(l.error),l.onsuccess=d=>{const u=d.target.result;if(!u){a();return}const f=String(u.key);(f===s||f.startsWith(o))&&u.delete(),u.continue()}})}async function Js(r,e,t){const s=(await _e()).transaction(K,"readwrite").objectStore(K),o=it(r,e),l=it(r,t),a=s.openCursor(),c=[];await new Promise((d,u)=>{a.onerror=()=>u(a.error),a.onsuccess=f=>{const h=f.target.result;if(!h){d();return}const g=String(h.key);if(g===o||g.startsWith(o+"/")){const R=g.slice(o.length),_=l+R,Y=h.value;c.push(()=>{h.delete(),s.put(Y,_)})}h.continue()}});for(const d of c)d()}async function eo(r,e){const i=(await _e()).transaction(K,"readonly").objectStore(K),s=Zs(r,e),o=i.openCursor(),l=new Set,a=new Map;await new Promise((d,u)=>{o.onerror=()=>u(o.error),o.onsuccess=f=>{const h=f.target.result;if(!h){d();return}const g=String(h.key),R=h.value;if(!g.startsWith(s)){h.continue();return}const _=g.slice(s.length);if(!_){h.continue();return}const Y=_.indexOf("/"),C=Y===-1?_:_.slice(0,Y);Y===-1?R.type==="dir"?l.add(C):a.set(C,R):l.add(C),h.continue()}});const c=[];for(const d of l)c.push({name:d,entry:{type:"dir"},type:"dir"});for(const[d,u]of a)l.has(d)||c.push({name:d,entry:u,type:"file"});return c}function to(r){return r instanceof fe?r.getRootId():""}class hr extends W{constructor(e,t){super(),this.path=nt(e),this.parent=t}getName(){const e=this.path.split("/");return e[e.length-1]||""}getParent(){return this.parent}getRootId(){return to(this.parent)}async delete(){await vn(this.getRootId(),this.path),w(J,y.getWorkspaceSync()??this.getWorkspace())}async getContents(e){const t=await Bt(this.getRootId(),this.path);let n=t?.content;if(typeof n=="string"){const s=new Blob([n],{type:t?.mimeType||"text/plain"});n=s,t&&(t.content=s,await kt(this.getRootId(),this.path,t))}if(!e||e.contentType===Wr.TEXT)return n?await n.text():"";let i;return n?i=n:i=new Blob([],{type:t?.mimeType}),e.blob?i:e.uri?URL.createObjectURL(i):i.stream()}async saveContents(e,t){let n,i;if(e instanceof Blob)n=e,i=e.type||void 0;else if(typeof e=="string")i="text/plain",n=new Blob([e],{type:i});else{const s=String(e??"");i="text/plain",n=new Blob([s],{type:i})}await kt(this.getRootId(),this.path,{type:"file",content:n,mimeType:i}),w(J,y.getWorkspaceSync()??this.getWorkspace())}async size(){const t=(await Bt(this.getRootId(),this.path))?.content;return t?t.size:null}async copyTo(e){const t=await this.getContents({blob:!0}),n=await this.getWorkspace().getResource(e,{create:!0});if(!n)throw new Error(`Failed to create target file: ${e}`);await n.saveContents(t)}async rename(e){if(this.getName()===e)return;const t=this.getParent(),n=t instanceof fe?t.getPath():"",i=vt(n,e),s=this.getRootId(),o=await Bt(s,this.path);if(!o)throw new Error("File not found in IndexedDB");await vn(s,this.path),await kt(s,i,o),w(J,y.getWorkspaceSync()??this.getWorkspace())}}class fe extends q{constructor(e,t){super(),this.path=nt(e),this.parent=t}getPath(){return this.path}getName(){if(!this.path)return"";const e=this.path.split("/");return e[e.length-1]}getParent(){return this.parent}getRoot(){const e=this.getParent();return e?e.getRoot():this}getRootId(){const e=this.getRoot();return e instanceof Wt?e.getRootId():""}async listChildren(e){const t=await eo(this.getRootId(),this.path),n=[];for(const i of t){const s=vt(this.path,i.name);i.type==="dir"?n.push(new fe(s,this)):n.push(new hr(s,this))}return n}async getResource(e,t){if(!e)throw new Error("No path provided");const n=e.split("/").filter(s=>s.trim());let i=this;for(let s=0;s<n.length;s++){const o=n[s],l=s===n.length-1,a=i.getPath(),c=vt(a,o),d=this.getRootId(),u=await Bt(d,c);if(!u){if(!t?.create)return null;if(l)return await kt(d,c,{type:"file",content:new Blob([])}),w(J,y.getWorkspaceSync()??this.getWorkspace()),new hr(c,i);await kt(d,c,{type:"dir"}),i=new fe(c,i);continue}if(l)return u.type==="dir"?new fe(c,i):new hr(c,i);if(u.type!=="dir")return null;i=new fe(c,i)}return i}touch(){w(J,y.getWorkspaceSync()??this.getWorkspace())}async delete(e,t=!0){if(!e){const i=this.getParent();if(i instanceof fe){await i.delete(this.getName());return}return}const n=vt(this.path,e);await Qs(this.getRootId(),n),w(J,y.getWorkspaceSync()??this.getWorkspace())}async copyTo(e){for(const t of await this.listChildren(!1)){const n=[e,t.getName()].join("/");await t.copyTo(n)}}async rename(e){if(this.getName()===e)return;const t=this.getParent();if(!(t instanceof fe))throw new Error("Cannot rename IndexedDB root directory");const n=this.getPath(),i=vt(t.getPath(),e);await Js(this.getRootId(),n,i),w(J,y.getWorkspaceSync()??this.getWorkspace())}}class Wt extends fe{constructor(e,t){super(""),this.displayName=e||"IndexedDB",this.rootId=t}getRootId(){return this.rootId}getName(){return this.displayName}getParent(){}async rename(e){const t=String(e??"").trim();!t||t===this.displayName||(this.displayName=t,await y.updateFolderName(this,t))}}function ro(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"default-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}y.registerContribution({type:"indexeddb",name:"idb",canHandle(r){return r&&typeof r=="object"&&r.indexeddb===!0},async connect(r){await _e();const e=r.name&&String(r.name).trim(),t=e&&e.length>0?e:await Ys(),n=ro();return new Wt(t,n)},async restore(r){if(r&&typeof r=="object"&&r.indexeddb===!0&&r.rootId){await _e();const e=r.name&&String(r.name).trim()||"IndexedDB";return new Wt(e,String(r.rootId))}},async persist(r){return r instanceof Wt?{indexeddb:!0,name:r.getName(),rootId:r.getRootId()}:null}});const Z=Se("MarketplaceRegistry"),xn="events/marketplaceregistry/changed",kn="marketplace.catalogUrls";class no{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{Z.error(`Failed to refresh catalogs on init: ${e.message}`)})})}async loadCatalogUrls(){try{const e=await A.get(kn);this.catalogUrls=Array.isArray(e)?e:[]}catch(e){Z.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await A.set(kn,this.catalogUrls),w(xn,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){Z.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),Z.debug(`Added catalog URL: ${e}`);try{await this.refreshCatalogs()}catch(t){Z.warn(`Failed to refresh catalogs immediately after adding: ${t}`)}}async addCatalogUrls(e){let t=0;for(const n of e){if(!this.isValidUrl(n)){Z.warn(`Skipping invalid catalog URL: ${n}`);continue}this.catalogUrls.includes(n)||(this.catalogUrls.push(n),Z.debug(`Added catalog URL: ${n}`),t++)}if(t!==0){await this.saveCatalogUrls();try{await this.refreshCatalogs()}catch(n){Z.warn(`Failed to refresh catalogs after adding URLs: ${n}`)}}}async removeCatalogUrl(e){const t=this.catalogUrls.indexOf(e);t!==-1&&(this.catalogUrls.splice(t,1),await this.saveCatalogUrls(),Z.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const t=this.loadingPromises.get(e);if(t)return t;const n=(async()=>{try{const i=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const s=await i.json();if(!s.extensions||!Array.isArray(s.extensions))throw new Error("Invalid catalog format: extensions array is required");return{name:s.name,description:s.description,extensions:s.extensions||[]}}catch(i){throw Z.error(`Failed to fetch catalog from ${e}: ${i}`),i}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,n),n}async refreshCatalogs(){const e=this.catalogUrls.map(i=>this.fetchCatalog(i).catch(s=>(Z.warn(`Failed to refresh catalog ${i}: ${s.message}`),null))),t=await Promise.allSettled(e);let n=0;t.forEach(i=>{if(i.status==="fulfilled"&&i.value){const s=i.value;s.extensions&&s.extensions.forEach(o=>{if(!T.getExtensions().find(l=>l.id===o.id)){const l={...o,external:!0};T.registerExtension(l),n++}})}}),Z.debug(`Refreshed ${this.catalogUrls.length} catalogs, ${n} extensions registered`),n>0&&Z.info(`Marketplace: ${n} new extension(s) available`),w(xn,{type:"refreshed"})}getMarketplaceExtension(e){const t=T.getExtensions().find(n=>n.id===e);if(t&&t.external)return t}isMarketplaceExtension(e){const t=T.getExtensions().find(n=>n.id===e);return t!==void 0&&t.external===!0}}const si=new no;U.put("marketplaceRegistry",si);const b=Se("AppLoader");function $n(r){if(!r)return"standard";const e=r.layout??r.layoutId;return typeof e=="object"?e.id:e??"standard"}function io(r){const e={};for(const[t,n]of Object.entries(r))e[t]=typeof n=="boolean"?n?"true":"false":n;return e}function ye(r){return r instanceof Error?r.message:String(r)}function so(r){try{const t=new URL(r).pathname.split("/").filter(Boolean);return t.length>0?t[t.length-1]:void 0}catch{const e=r.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function oo(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const t=e[0];if(!(!t||t==="index.html"||t.endsWith(".html")))return t}const Mr=class xt{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,t){if(t?.hostConfig===!0&&typeof hn<"u"){const n=hn;e.name===void 0&&(e.name=n.name),e.version===void 0&&(e.version=n.version),e.description===void 0&&(e.description=n.description),e.dependencies===void 0&&(e.dependencies=n.dependencies),e.marketplaceCatalogUrls===void 0&&(e.marketplaceCatalogUrls=n.marketplaceCatalogUrls)}e.name=e.name??"app",e.version=e.version??"0.0.0",this.apps.has(e.name)&&b.warn(`App '${e.name}' is already registered. Overwriting.`),e.marketplaceCatalogUrls?.length&&si.addCatalogUrls(e.marketplaceCatalogUrls).catch(()=>{}),this.apps.set(e.name,e),t?.defaultAppName&&(this.defaultAppName=t.defaultAppName),t?.container&&(this.container=t.container),t?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadAppFromUrl(e){b.info(`Loading app from URL: ${e}...`);try{const t=await import(e);if(!t.default)throw new Error(`Module at ${e} does not have a default export`);const n=t.default;if(!n.name||!n.version)throw new Error(`Module at ${e} does not export a valid AppDefinition (name and version required)`);return b.info(`Successfully loaded app definition from URL: ${n.name}`),n}catch(t){throw b.error(`Failed to load app from URL ${e}: ${ye(t)}`),t}}async start(){if(this.started){b.debug("AppLoader already started");return}this.started=!0;const e=new URLSearchParams(window.location.search),t=e.get("app"),n=e.get("appId"),i=oo(),s=this.apps.size;let o;if(t&&(o=so(t),o&&b.info(`Extracted app ID from URL path: ${o}`)),i&&b.info(`Extracted app ID from current page path: ${i}`),t)try{b.info(`URL parameter 'app' found: ${t}, attempting to load extension or app`);try{await T.loadExtensionFromUrl(t),b.info(`Successfully loaded extension from URL: ${t}`)}catch(a){b.info(`Failed to load as extension, trying as app definition: ${ye(a)}`);try{const c=await this.loadAppFromUrl(t);if(this.registerApp(c),!c.name)throw new Error("App from URL has no name after registration");await this.loadApp(c.name,this.container),b.info(`Successfully loaded app from URL: ${t}`);return}catch(c){throw b.error(`Failed to load from URL as both extension and app: ${ye(c)}`),c}}}catch(a){b.error(`Failed to load from URL parameter, falling back to default app: ${ye(a)}`)}const l=await this.selectAppToLoad({appIdFromUrl:n,appIdFromPath:i,appIdFromAppUrl:o,appsBeforeExtension:s});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}findAppNameBySegment(e){if(this.apps.has(e))return e;for(const t of this.apps.values())if(t.path===e||t.name&&t.name.endsWith("/"+e))return t.name??void 0}dispatchLoadProgress(e){window.dispatchEvent(new CustomEvent("app-load-progress",{detail:{message:e}}))}async loadApp(e,t){const n=this.apps.get(e);if(!n)throw new Error(`App '${e}' not found. Make sure it's registered.`);if(this.dispatchLoadProgress("Starting…"),this.currentApp&&(b.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(b.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{T.disable(s)}))),Ht.applyAppNameRemaps(n.remaps),n.remaps?.length){const s=new Set;for(const o of n.remaps)for(const l of o.targets)s.add(l);for(const o of s){const l=x.getContributions(o);w(pe,{target:o,contributions:l})}}n.contributions&&(b.info("Registering app contributions..."),n.contributions.ui&&(n.contributions.ui.forEach(s=>{const o=s.target;o&&x.registerContribution(o,s)}),b.info(`Registered ${n.contributions.ui.length} UI contributions`)),n.contributions.extensions&&(n.contributions.extensions.forEach(s=>{T.registerExtension(s)}),b.info(`Registered ${n.contributions.extensions.length} app extensions`)));const i=new Set(n.extensions||[]);this.systemRequiredExtensions.forEach(s=>i.add(s)),n.extensions=Array.from(i),this.dispatchLoadProgress("Loading extensions…"),await T.loadEnabledExtensions(),n.extensions.length>0&&(this.dispatchLoadProgress("Enabling extensions…"),n.extensions.forEach(s=>{T.enable(s)})),n.initialize&&(this.dispatchLoadProgress("Initializing…"),b.info(`Initializing ${n.name}...`),await n.initialize()),this.currentApp=n,b.info(`App ${n.name} loaded successfully`),this.preferredLayoutId=await this.getPreferredLayoutId(),this.updateDocumentMetadata(n),t&&(this.dispatchLoadProgress("Rendering layout…"),this.renderApp(t)),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appName:n.name}}))}updateDocumentMetadata(e){if(document.title=e.name??"",e.metadata?.favicon){const t=e.metadata.favicon;let n=document.querySelector("link[rel*='icon']");n||(n=document.createElement("link"),n.rel="icon",document.head.appendChild(n)),n.type="image/svg+xml",n.href=t}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const t=this.preferredLayoutId??$n(this.currentApp),n=x.getContributions(Xt);let i=n.find(a=>a.id===t);if(i||(b.warn(`Layout '${t}' not found, falling back to 'standard'`),i=n.find(a=>a.id==="standard")),!i)throw new Error(`No layout found for layoutId '${t}' and no 'standard' layout registered.`);const s=i.component;let o={};s&&typeof s=="object"&&"tag"in s&&s.attributes&&(o={...s.attributes});const l=this.currentApp?.layout;if(typeof l=="object"&&l.id===t&&l.props&&Object.assign(o,io(l.props)),e.innerHTML="",typeof s=="string"){const a=document.createElement(s);for(const[c,d]of Object.entries(o))a.setAttribute(c,d);e.appendChild(a)}else if(s&&typeof s=="object"&&"tag"in s){const a=document.createElement(s.tag);for(const[c,d]of Object.entries(o))a.setAttribute(c,d);e.appendChild(a)}else if(typeof s=="function")de(s(),e);else throw new Error(`Layout '${i.id}' has invalid component.`);i.onShow&&requestAnimationFrame(()=>{Promise.resolve(i.onShow()).catch(a=>b.error(`Layout onShow failed for '${i.id}': ${ye(a)}`))})}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await A.get(xt.PREFERRED_APP_KEY)}catch(e){b.debug(`Failed to get preferred app ID from settings: ${ye(e)}`);return}}async setPreferredAppId(e){if(!this.apps.has(e))throw new Error(`App '${e}' not found. Make sure it's registered.`);try{await A.set(xt.PREFERRED_APP_KEY,e),this.defaultAppName=e,b.info(`Set preferred app to: ${e}`)}catch(t){throw b.error(`Failed to persist preferred app: ${ye(t)}`),t}}getRegisteredLayouts(){return x.getContributions(Xt)}getCurrentLayoutId(){return this.preferredLayoutId??$n(this.currentApp)}async getPreferredLayoutId(){try{return await A.get(xt.PREFERRED_LAYOUT_KEY)}catch(e){b.debug(`Failed to get preferred layout ID: ${ye(e)}`);return}}async setPreferredLayoutId(e){if(!this.getRegisteredLayouts().some(n=>n.id===e))throw new Error(`Layout '${e}' not found.`);try{await A.set(xt.PREFERRED_LAYOUT_KEY,e),this.preferredLayoutId=e,b.info(`Set preferred layout to: ${e}`),this.currentApp&&this.container&&this.renderApp(this.container),window.dispatchEvent(new CustomEvent("layout-changed",{detail:{layoutId:e}}))}catch(n){throw b.error(`Failed to persist preferred layout: ${ye(n)}`),n}}async selectAppToLoad(e){const{appIdFromUrl:t,appIdFromPath:n,appIdFromAppUrl:i,appsBeforeExtension:s}=e;if(t){const a=this.findAppNameBySegment(t)??t;if(this.apps.has(a))return b.info(`Loading app specified by URL parameter 'appId': ${a}`),a;b.warn(`App '${t}' from URL parameter not found`)}if(n){const a=this.findAppNameBySegment(n);if(a)return b.info(`Loading app from URL path: ${n}`),a;b.debug(`App for path '${n}' not found, continuing search`)}if(i){const a=this.findAppNameBySegment(i)??i;if(this.apps.has(a))return b.info(`Loading app using segment from app URL path: ${a}`),a}if(this.apps.size>s){const a=Array.from(this.apps.values()).slice(s);if(a.length>0){const c=a[0];return b.info(`Loading app registered by extension: ${c.name}`),c.name}}const o=await this.getPreferredAppId();if(o&&this.apps.has(o))return b.info(`Loading preferred app from settings: ${o}`),o;if(this.defaultAppName&&this.apps.has(this.defaultAppName))return this.defaultAppName;this.defaultAppName&&b.warn(`Default app '${this.defaultAppName}' not found`);const l=this.getRegisteredApps();if(l.length>0)return l[0].name}};Mr.PREFERRED_APP_KEY="preferredAppName";Mr.PREFERRED_LAYOUT_KEY="preferredLayoutId";let ao=Mr;const Re=new ao;U.put("appLoaderService",Re);var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,It=(r,e,t,n)=>{for(var i=n>1?void 0:n?co(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&lo(e,t,i),i};let He=class extends Ce{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(r){super.firstUpdated(r),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const t=e.shadowRoot?.querySelector("input");t&&(t.focus(),t.select())}}getResult(){return this.inputValue}handleInput(r){this.inputValue=r.target.value}handleKeyDown(r){r.key==="Enter"?(r.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):r.key==="Escape"&&(r.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};He.styles=[...Ce.styles,F`
            wa-input {
                width: 100%;
            }
        `];It([m({type:String})],He.prototype,"message",2);It([m({type:String,attribute:"default-value"})],He.prototype,"defaultValue",2);It([m({type:Boolean})],He.prototype,"markdown",2);It([$()],He.prototype,"inputValue",2);He=It([L("lyra-prompt-dialog-content")],He);x.registerContribution(qe,{id:"prompt",label:"Input",buttons:[Dt,Br],component:r=>r?p`
            <lyra-prompt-dialog-content 
                .message="${r.message}"
                .defaultValue="${r.defaultValue}"
                .markdown="${r.markdown}"
            ></lyra-prompt-dialog-content>
        `:p`<div>Error: No prompt dialog state</div>`,onButton:async(r,e,t)=>(t&&(r==="ok"?t.resolve(e||""):t.resolve(null)),!0)});async function po(r,e="",t=!1){return new Promise(n=>{ir.open("prompt",{message:r,defaultValue:e,markdown:t,resolve:n})})}var uo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,qr=(r,e,t,n)=>{for(var i=n>1?void 0:n?ho(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&uo(e,t,i),i};let Zt=class extends Ce{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};qr([m({type:String})],Zt.prototype,"message",2);qr([m({type:Boolean})],Zt.prototype,"markdown",2);Zt=qr([L("lyra-info-dialog-content")],Zt);x.registerContribution(qe,{id:"info",label:"Information",buttons:[Dt],component:r=>r?p`
            <lyra-info-dialog-content 
                .message="${r.message}"
                .markdown="${r.markdown}"
            ></lyra-info-dialog-content>
        `:p`<div>Error: No info dialog state</div>`,onButton:async(r,e,t)=>(t&&t.resolve&&t.resolve(),!0)});var fo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,Hr=(r,e,t,n)=>{for(var i=n>1?void 0:n?go(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&fo(e,t,i),i};let Qt=class extends Ce{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};Hr([m({type:String})],Qt.prototype,"message",2);Hr([m({type:Boolean})],Qt.prototype,"markdown",2);Qt=Hr([L("lyra-confirm-dialog-content")],Qt);x.registerContribution(qe,{id:"confirm",label:"Confirm",buttons:[Dt,Br],component:r=>r?p`
            <lyra-confirm-dialog-content 
                .message="${r.message}"
                .markdown="${r.markdown}"
            ></lyra-confirm-dialog-content>
        `:p`<div>Error: No confirm dialog state</div>`,onButton:async(r,e,t)=>(t&&(r==="ok"?t.resolve(!0):t.resolve(!1)),!0)});async function $r(r,e=!1){return new Promise(t=>{ir.open("confirm",{message:r,markdown:e,resolve:t})})}var mo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,Xe=(r,e,t,n)=>{for(var i=n>1?void 0:n?bo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&mo(e,t,i),i};let Ee=class extends Ce{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(r){super.firstUpdated(r),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const t=this.closest(".dialog-service-content");if(t){const n=t.parentElement?.querySelector(".dialog-service-footer");n&&(n.style.display="none")}}updated(r){super.updated(r),r.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),r.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(r,e,t){this.currentTitle=r,this.currentMessage=e,this.actions=[...t],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(r){r.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const r=this.actions.filter(t=>t.label!=="Close"),e=this.actions.filter(t=>t.label==="Close");return p`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${r.map(t=>p`
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
        `}};Ee.styles=[...Ce.styles,F`
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
        `];Xe([m({type:String})],Ee.prototype,"title",2);Xe([m({type:String})],Ee.prototype,"message",2);Xe([m({type:Boolean})],Ee.prototype,"markdown",2);Xe([$()],Ee.prototype,"actions",2);Xe([$()],Ee.prototype,"currentTitle",2);Xe([$()],Ee.prototype,"currentMessage",2);Ee=Xe([L("lyra-navigable-info-dialog-content")],Ee);x.registerContribution(qe,{id:"navigable-info",label:"Information",buttons:[Ms],component:r=>{if(!r)return p`<div>Error: No navigable info dialog state</div>`;const e=p`
            <lyra-navigable-info-dialog-content 
                .title="${r.title}"
                .message="${r.message}"
                .markdown="${r.markdown}"
            ></lyra-navigable-info-dialog-content>
        `;return(async()=>{const t=document.querySelector("lyra-navigable-info-dialog-content");t&&(await t.updateComplete,t.actions=r.actions||[],t.resolveCallback=r.resolve,r.updateDialogRef&&(r.updateDialogRef.current=(n,i,s)=>{t.updateDialog(n,i,s)}))})(),e},onButton:async(r,e,t)=>t&&r==="close"&&t.resolve?(t.resolve(),!0):!1});var wo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,dt=(r,e,t,n)=>{for(var i=n>1?void 0:n?yo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&wo(e,t,i),i};let Ae=class extends Ce{constructor(){super(...arguments),this.mode="either",this.selectedPath=null,this.rootNodes=[],this.loading=!1,this.loadError=null}async doInitUI(){await this.loadWorkspaceTree()}firstUpdated(r){super.firstUpdated?.(r);const e=this.closest("wa-dialog");e&&e.setAttribute("label",this.dialogTitle)}updated(r){if(super.updated?.(r),r.has("mode")){const e=this.closest("wa-dialog");e&&e.setAttribute("label",this.dialogTitle)}}get dialogTitle(){return this.mode==="file"?"Choose a file":this.mode==="directory"?"Choose a directory":"Choose a file or directory"}getResult(){return this.selectedPath!=null?"/"+this.selectedPath:null}async loadWorkspaceTree(){this.loading=!0,this.loadError=null;try{const r=await y.getWorkspace();if(!r){this.rootNodes=[];return}const e=await r.listChildren(!1),t=[];for(const n of e)t.push(await this.resourceToTreeNode(n,!1));t.sort((n,i)=>n.label.localeCompare(i.label)),this.rootNodes=t}catch(r){const e=r instanceof Error?r.message:String(r);this.loadError=e,this.rootNodes=[]}finally{this.loading=!1}}async resourceToTreeNode(r,e=!0){const t=r instanceof W,n={resource:r,label:r.getName(),leaf:t,children:[]};if(r instanceof q&&e){for(const i of await r.listChildren(!1))n.children.push(await this.resourceToTreeNode(i,!1));n.children.sort((i,s)=>i.label.localeCompare(s.label))}return n}handleSelectionChange(r){const e=r.detail&&r.detail.selection||[];if(!e||e.length===0){this.selectedPath=null,this.requestUpdate();return}const n=e[0]?.model?.resource;if(!n){this.selectedPath=null,this.requestUpdate();return}const i=n instanceof q,s=n instanceof W;if(this.mode==="file"&&!s){this.selectedPath=null,this.requestUpdate();return}if(this.mode==="directory"&&s){const l=n.getParent?.();this.selectedPath=l?l.getWorkspacePath():null,this.requestUpdate();return}if(this.mode==="directory"&&!i){this.selectedPath=null,this.requestUpdate();return}const o=n.getWorkspacePath?.();this.selectedPath=typeof o=="string"?o:null,this.requestUpdate()}renderTreeNode(r){return p`
      <wa-tree-item .model=${r} ?leaf=${r.leaf}>
        ${r.label}
        ${r.children.map(e=>this.renderTreeNode(e))}
      </wa-tree-item>
    `}render(){return p`
      <div class="dialog-body">
        ${this.loadError?this.renderMessage(this.loadError,!1):null}

        <div class="browser-container">
          ${this.loading?p`<div>Loading workspace…</div>`:this.rootNodes.length>0?p`
                    <wa-tree @wa-selection-change=${r=>this.handleSelectionChange(r)}>
                      ${this.rootNodes.map(r=>this.renderTreeNode(r))}
                    </wa-tree>
                  `:p`<div>No workspace folders.</div>`}
        </div>

        <div class="selection-info">
          ${this.selectedPath?`Selected path: ${this.selectedPath}`:"No path selected yet."}
        </div>
      </div>
    `}};Ae.styles=[...Ce.styles,F`
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
    `];dt([m({type:String})],Ae.prototype,"mode",2);dt([$()],Ae.prototype,"selectedPath",2);dt([$()],Ae.prototype,"rootNodes",2);dt([$()],Ae.prototype,"loading",2);dt([$()],Ae.prototype,"loadError",2);Ae=dt([L("lyra-filebrowser-dialog")],Ae);x.registerContribution(qe,{id:"filebrowser-dialog",label:"Select Path",buttons:[Dt,Br],component:r=>p`<lyra-filebrowser-dialog .mode=${r?.mode??"either"}></lyra-filebrowser-dialog>`,onButton:async(r,e,t)=>(t&&(r==="ok"?t.resolve(e||null):t.resolve(null)),!0)});function Pa(r="either"){return new Promise(e=>{ir.open("filebrowser-dialog",{resolve:e,mode:r})})}var vo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,we=(r,e,t,n)=>{for(var i=n>1?void 0:n?xo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&vo(e,t,i),i};const ko=150;function fr(r,e,t,n,i){const o=`Toolbar ${r??"default"}`,l=t.filter(c=>c.slot===r&&n(c)),a=r==="start"?p`<slot name="start"></slot>`:r==="end"?p`<slot name="end"></slot>`:p`<slot></slot>`;return p`
        <wa-button-group orientation=${e} label=${o}>
            ${a}
            ${l.map(i)}
        </wa-button-group>
    `}let ne=class extends Ne{constructor(){super(...arguments),this.position="start",this.orientation="horizontal",this.align="start",this.size="small",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[],this.compact=!1,this.resizeObserver=null,this.resizeDebounceTimer=null,this.overflowCheckScheduled=!1,this.onResize=()=>{this.resizeDebounceTimer!==null&&clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=setTimeout(()=>{this.resizeDebounceTimer=null,this.updateCompactFromSpace()},ko)}}updateCompactFromSpace(){const r=this.shadowRoot?.querySelector(".toolbar-items");if(!r)return;const e=r.scrollWidth>r.clientWidth;this.compact!==e&&(this.compact=e,this.requestUpdate())}scheduleOverflowCheck(){this.overflowCheckScheduled||(this.overflowCheckScheduled=!0,requestAnimationFrame(()=>{this.overflowCheckScheduled=!1,this.updateCompactFromSpace()}))}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=null,this.resizeDebounceTimer!==null&&(clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=null),super.disconnectedCallback()}updated(r){super.updated?.(r),this.compact||this.scheduleOverflowCheck()}doBeforeUI(){const r=this.getAttribute("id");r&&this.loadContributions(r),H(pe,e=>{if(!r)return;this.matchesTarget(r,e.target)&&(this.loadContributions(r),this.requestUpdate())})}matchesTarget(r,e){if(e===r)return!0;if(!r.includes(":"))return!1;const[t]=r.split(":");if(e===`${t}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&r.startsWith(`${t}:`)}return!1}loadContributions(r){const e=x.getContributions(r);if(!r.includes(":")){this.contributions=e;return}const[t]=r.split(":"),n=`${t}:*`,i=x.getContributions(n),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const a=`${t}:${l}`,c=x.getContributions(a);s.push(...c)}}this.contributions=[...i,...s,...e]}isToolbarItem(r){return"command"in r||"component"in r}contributionCreator(r){if("command"in r){const e=r,t=!this.compact&&!!e.showLabel,{name:n,library:i}=$t(e.icon??"");return p`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size=${this.size}>
                    <wa-icon library=${i??S} name=${n} label="${e.label}"></wa-icon>
                    ${t?e.label:""}
                </wa-button>
            `}if("component"in r){const e=r.component;return e instanceof Function?e():Rt(e)}return p`<span>unknown contribution type: ${typeof r}</span>`}render(){const r=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"",e=this.orientation==="vertical"?"column":"row",t={start:"flex-start",center:"center",end:"flex-end"},n=this.contributionCreator.bind(this),i=this.isToolbarItem.bind(this);return p`
            <div class="toolbar-items" style=${wi({"flex-direction":e,"align-items":t[this.align],"justify-content":this.position})}>
                ${fr("start",this.orientation,this.contributions,i,n)}
                ${r}
                ${fr(void 0,this.orientation,this.contributions,i,n)}
                ${fr("end",this.orientation,this.contributions,i,n)}
            </div>
        `}};ne.styles=F`
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
    `;we([m()],ne.prototype,"position",2);we([m({reflect:!0})],ne.prototype,"orientation",2);we([m({reflect:!0})],ne.prototype,"align",2);we([m({reflect:!0})],ne.prototype,"size",2);we([m({type:Boolean,attribute:"is-editor"})],ne.prototype,"isEditor",2);we([m({attribute:!1})],ne.prototype,"partToolbarContent",2);we([m({attribute:!1})],ne.prototype,"partToolbarRenderer",2);we([$()],ne.prototype,"contributions",2);we([$()],ne.prototype,"compact",2);ne=we([L("lyra-toolbar")],ne);var $o=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,X=(r,e,t,n)=>{for(var i=n>1?void 0:n?Eo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&$o(e,t,i),i};let B=class extends Tt{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(r){if(!this.disabled){if(r&&r.stopPropagation(),this.action){this.action(r);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(r){const e=r.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const r=Jn.getKeyBindingsForCommand(this.cmd);return r.length>0?r[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),H(pe,r=>{this.dropdown&&r.target===this.dropdown&&(this.dropdownContributions=r.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=x.getContributions(this.dropdown),this.requestUpdate())}renderContribution(r){if("command"in r){const e=r,t=e.disabled?.get();return p`
                <lyra-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${t}">
                    ${e.label}
                </lyra-command>
            `}if("component"in r){const t=r.component;return t instanceof Function?t():Rt(t)}return S}render(){const r=this.getKeybinding();return this.isInDropdown()?p`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    <lyra-icon name="${this.icon}" label="${this.title}" slot="icon"></lyra-icon>
                    <slot></slot>
                    ${r?p`<span class="keybinding">${r}</span>`:""}
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
                        title=${r?`${this.title} (${r})`:this.title}>
                        <lyra-icon slot="start" name="${this.icon}" label="${this.title}"></lyra-icon>
                        <slot></slot>
                        ${this.label?this.title:S}
                    </wa-button>
                    
                    ${this.title?p`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:S}
                    
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
                    `:S}
                </wa-dropdown>
            `:p`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${r?`${this.title} (${r})`:this.title}
                @click=${e=>this.handleClick(e)}>
                <lyra-icon slot="start" name="${this.icon}" label="${this.title}"></lyra-icon>
                <slot></slot>
            </wa-button>
        `}};B.styles=F`
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
    `;X([m()],B.prototype,"cmd",2);X([m({type:Object,attribute:!1})],B.prototype,"action",2);X([m()],B.prototype,"title",2);X([m()],B.prototype,"label",2);X([m()],B.prototype,"icon",2);X([m({type:Boolean})],B.prototype,"disabled",2);X([m()],B.prototype,"appearance",2);X([m()],B.prototype,"variant",2);X([m()],B.prototype,"size",2);X([m({type:Object,attribute:!1})],B.prototype,"params",2);X([m()],B.prototype,"dropdown",2);X([m()],B.prototype,"placement",2);X([$()],B.prototype,"dropdownContributions",2);B=X([L("lyra-command")],B);var So=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,pt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Co(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&So(e,t,i),i};let De=class extends Ne{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Pe(),this.dropdownRef=Pe(),this.boundHandleDocumentPointerDown=this.handleDocumentPointerDown.bind(this)}handleDocumentPointerDown(r){if(!this.isOpen)return;const e=r.composedPath();this.dropdownRef.value&&e.includes(this.dropdownRef.value)||e.some(t=>t.getAttribute?.("part")==="submenu")||this.onClose()}doBeforeUI(){const r=this.getAttribute("id");r&&this.loadContributions(r),H(pe,e=>{if(!r)return;this.matchesTarget(r,e.target)&&(this.loadContributions(r),this.requestUpdate())})}matchesTarget(r,e){if(e===r)return!0;if(!r.includes(":"))return!1;const[t]=r.split(":");if(e===`${t}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&r.startsWith(`${t}:`)}return!1}loadContributions(r){const e=x.getContributions(r);if(!r.includes(":")){this.contributions=e;return}const[t]=r.split(":"),n=`${t}:*`,i=x.getContributions(n),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const a=`${t}:${l}`,c=x.getContributions(a);s.push(...c)}}this.contributions=[...i,...s,...e]}getElementFromPoint(r,e){let t=document.elementFromPoint(r,e);if(!t)return null;for(;t;){const n=t.shadowRoot;if(n){const i=n.elementFromPoint(r,e);if(i&&i!==t){t=i;continue}}break}return t}triggerClickUnderCursor(r){const e=this.getElementFromPoint(r.clientX,r.clientY);if(e){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(t)}}show(r,e){e&&this.triggerClickUnderCursor(e),this.position=r,this.isOpen=!0,this.updateComplete.then(()=>{document.addEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})})}onClose(){this.isOpen=!1,document.removeEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})}renderContribution(r){if("command"in r){const e=r,t=e.disabled?.get();return p`
                <lyra-command
                    cmd="${e.command}"
                    icon="${e.icon??""}"
                    .params=${e.params??{}}
                    ?disabled="${t}">
                    ${e.label}
                </lyra-command>
            `}else if("component"in r){const e=r.component;return e instanceof Function?e():Rt(e)}return S}render(){if(!this.isOpen)return S;const r=this.partContextMenuRenderer?this.partContextMenuRenderer():S;return p`
            <wa-dropdown
                ${Le(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}>
                
                <div 
                    slot="trigger"
                    ${Le(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${r}
                ${this.contributions.map(e=>this.renderContribution(e))}
            </wa-dropdown>
        `}};De.styles=F`
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
    `;pt([m({type:Boolean,attribute:"is-editor"})],De.prototype,"isEditor",2);pt([m({attribute:!1})],De.prototype,"partContextMenuRenderer",2);pt([$()],De.prototype,"contributions",2);pt([$()],De.prototype,"isOpen",2);pt([$()],De.prototype,"position",2);De=pt([L("lyra-contextmenu")],De);class Gr extends Ne{}var Ro=Object.defineProperty,To=(r,e,t,n)=>{for(var i=void 0,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(e,t,i)||i);return i&&Ro(e,t,i),i};class ce extends Gr{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return S}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}activateContainingTab(){let e=this,t=null,n=null;for(;e;){const i=e.tagName?.toLowerCase();if(i==="wa-tab-panel"&&(t=e.getAttribute("name")),i==="lyra-tabs"){n=e;break}const s=e.parentElement;if(s)e=s;else{const o=e.getRootNode();e=o instanceof ShadowRoot?o.host:null}}n&&t!=null&&t!==""&&n.activate(t)}renderContextMenu(){return S}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,br.set(null),br.set(this),te.set(null),te.set(this)}}To([m()],ce.prototype,"dirty");var Po=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,Kr=(r,e,t,n)=>{for(var i=n>1?void 0:n?Lo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Po(e,t,i),i};let Ie=class extends Gr{constructor(){super(...arguments),this.placement="top",this.contributions=[],this.tabGroup=Pe(),this.containerId=null,this.resizeObservers=new WeakMap,this.tabGroupListenersAttached=!1}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("lyra-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),H(pe,r=>{!this.containerId||r.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(r){if(super.updated(r),this.contributions.length>0&&this.tabGroup.value&&this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),r.has("contributions")){this.contributions.length===0&&(this.tabGroupListenersAttached=!1);const e=this.containerId===xe;this.contributions.forEach(t=>{const n=this.getTabPanel(t.name);if(!n)return;const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const s=i.firstElementChild;s instanceof ce&&(s.tabContribution=t,s.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(n))})}}has(r){return this.tabGroup.value?!!this.getTabPanel(r):!1}activate(r){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",r)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(r){if(this.contributions.find(t=>t.name===r.name)){this.activate(r.name);const t=this.getTabPanel(r.name);t&&this.syncActiveSignalsFromPanel(t);return}this.contributions.push(r),this.requestUpdate(),this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.activate(r.name);const t=this.getTabPanel(r.name);if(!t)return;const n=t.querySelector(".tab-content");if(n?.firstElementChild instanceof ce){const i=n.firstElementChild;i.tabContribution=r,i.isEditor=this.containerId===xe}this.syncActiveSignalsFromPanel(t),requestAnimationFrame(()=>{this.updateToolbarFromComponent(t),this.updateToolbarHeightVariable(t),this.setupToolbarResizeObserver(t)})})})}handleTabAuxClick(r,e){r.button===jr.MIDDLE&&e.closable&&this.closeTab(r,e.name)}async closeTab(r,e){if(r.stopPropagation(),this.isDirty(e)&&!await $r("Unsaved changes will be lost: Do you really want to close?"))return;const t=this.getTabPanel(e);if(!t)return;const n=this.contributions.find(s=>s.name===e);if(!n)return;this.cleanupTabInstance(t),this.clearActiveSignalsIfPartInPanel(t);const i=this.contributions.indexOf(n);i>-1&&this.contributions.splice(i,1),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(r,e){this.getTab(r).classList.toggle("part-dirty",e)}isDirty(r){return this.getTab(r).classList.contains("part-dirty")}loadAndResolveContributions(){this.containerId&&(this.contributions=x.getContributions(this.containerId),this.requestUpdate())}cleanupTabInstance(r){const e=this.resizeObservers.get(r);e&&(e.disconnect(),this.resizeObservers.delete(r));const t=r.querySelector(".tab-content");if(t&&t.firstElementChild){const n=t.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}ensureTabGroupListenersAndActivate(){if(!this.tabGroup.value||this.tabGroupListenersAttached){this.activateNextAvailableTab();return}this.tabGroupListenersAttached=!0;const r=this.tabGroup.value;r.addEventListener("wa-tab-show",e=>{const t=this.getTabPanel(e.detail.name);t&&(this.syncActiveSignalsFromPanel(t),this.updateToolbarFromComponent(t),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(t),this.setupToolbarResizeObserver(t)}))}),r.addEventListener("part-toolbar-changed",e=>{const n=e.target.closest("wa-tab-panel");n&&(this.updateToolbarFromComponent(n),requestAnimationFrame(()=>this.updateToolbarHeightVariable(n)))}),r.addEventListener("part-contextmenu-changed",e=>{const n=e.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),r.addEventListener("click",e=>{const t=e.target,n=t.closest("wa-tab");if(n){const o=n.getAttribute("panel");if(o){const l=this.getTabPanel(o);l&&this.syncActiveSignalsFromPanel(l)}return}const i=t.closest("wa-scroller.tab-content");if(!i)return;const s=i.closest("wa-tab-panel");s&&this.syncActiveSignalsFromPanel(s)}),r.addEventListener("contextmenu",e=>{const t=e,n=t.target.closest("wa-scroller.tab-content");if(!n)return;t.preventDefault();const i=n.closest("wa-tab-panel");i&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const s=i.querySelector("lyra-contextmenu");s&&s.show({x:t.clientX,y:t.clientY},t)})}),this.dirtySignalCleanup?.(),this.dirtySignalCleanup=_n(br,e=>{if(!e)return;const t=e.closest("wa-tab-panel");if(!t||!this.contains(t))return;const n=t.getAttribute("name");n&&this.markDirty(n,e.isDirty())}),this.activateNextAvailableTab()}disconnectedCallback(){this.dirtySignalCleanup?.(),this.dirtySignalCleanup=void 0,super.disconnectedCallback()}activateNextAvailableTab(){if(!this.tabGroup.value)return;const r=this.tabGroup.value.querySelectorAll("wa-tab");if(r.length>0){const e=r.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(r){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${r}']`):null}getTab(r){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${r}']`):null}syncActiveSignalsFromPanel(r){const t=r.querySelector(".tab-content")?.firstElementChild;t instanceof ce&&(te.set(null),tt.set(null),te.set(t),this.containerId===xe&&t.isEditor&&tt.set(t))}clearActiveSignalsIfPartInPanel(r){const e=Array.from(r.querySelectorAll("*")).filter(t=>t instanceof ce);for(const t of e)te.get()===t&&te.set(null),tt.get()===t&&tt.set(null)}updateToolbarFromComponent(r){const e=r.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof ce)||!t.renderToolbar)return;const n=r.querySelector("lyra-toolbar");n&&(n.partToolbarRenderer=()=>t.renderToolbar(),n.requestUpdate())}updateContextMenuFromComponent(r){const e=r.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof ce)||!t.renderContextMenu)return;const n=r.querySelector("lyra-contextmenu");n&&(n.partContextMenuRenderer=()=>t.renderContextMenu(),n.requestUpdate())}updateToolbarHeightVariable(r){const e=r.querySelector(".tab-toolbar");if(!e)return;const t=e.offsetHeight;r.style.setProperty("--toolbar-height",`${t}px`)}setupToolbarResizeObserver(r){if(this.resizeObservers.has(r))return;const e=r.querySelector(".tab-toolbar");if(!e)return;const t=new ResizeObserver(()=>{this.updateToolbarHeightVariable(r)});t.observe(e),this.resizeObservers.set(r,t)}truncateTabLabel(r){if(!r||r.length<=Ie.MAX_TAB_LABEL)return r;const e="…",t=Ie.MAX_TAB_LABEL-e.length,n=Math.floor(t/2);return r.slice(0,n)+e+r.slice(-(t-n))}renderEmptyState(){const r=Re.getCurrentApp();return p`
            <div class="empty-state">
                ${N(r,()=>p`
                        <div class="empty-content">
                            <h2 class="empty-title">${r.name}</h2>
                            ${N(r.description,()=>p`<p class="empty-description">${r.description}</p>`)}
                        </div>
                    `,()=>p`<wa-icon name="folder-open" class="empty-icon"></wa-icon>`)}
            </div>
        `}render(){return this.contributions.length===0?this.renderEmptyState():p`
            <wa-tab-group ${Le(this.tabGroup)} placement=${this.placement}>
                ${yi(this.contributions,r=>r.name,r=>{const{name:e,library:t}=$t(r.icon??""),n=r.label??r.name,i=this.truncateTabLabel(n);return p`
                        <wa-tab panel="${r.name}"
                                title="${n}"
                                @auxclick="${s=>this.handleTabAuxClick(s,r)}">
                            <wa-icon library=${t??S} name=${e} label=${n}></wa-icon>
                            ${i}
                            ${N(r.closable,()=>p`
                                <wa-icon name="xmark" label="Close"  @click="${s=>this.closeTab(s,r.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${r.name}">
                            ${N(r.toolbar!==!1,()=>p`
                                <lyra-toolbar id="toolbar:${r.editorId??r.name}"
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===xe}"></lyra-toolbar>
                            `)}
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${r.component?r.component(r.name):S}
                            </wa-scroller>
                            ${N(r.contextMenu!==!1,()=>p`
                                <lyra-contextmenu id="contextmenu:${r.name}"
                                               ?is-editor="${this.containerId===xe}"></lyra-contextmenu>
                            `)}
                        </wa-tab-panel>
                    `})}
            </wa-tab-group>
        `}};Ie.MAX_TAB_LABEL=16;Ie.styles=F`
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
    `;Kr([m({reflect:!0})],Ie.prototype,"placement",2);Kr([$()],Ie.prototype,"contributions",2);Ie=Kr([L("lyra-tabs")],Ie);var _o=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,Ot=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ao(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&_o(e,t,i),i};let st=class extends Ne{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=r=>{if(!this.resizing)return;const t=(this.orientation==="horizontal"?r.clientX:r.clientY)-this.resizing.startPos,n=[...this.resizing.startSizes];n[this.resizing.handleIndex]+=t,n[this.resizing.handleIndex+1]-=t;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=i*.05;if(n[this.resizing.handleIndex]>=s&&n[this.resizing.handleIndex+1]>=s){this.resizing.currentSizes=n;const o=n.map((l,a)=>{const d=`${(l/i*100).toFixed(2)}%`;return a===n.length-1?d:`${d} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=o:this.style.gridTemplateRows=o}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/r*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const r=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(r.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=r,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(r){super.updated(r),r.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,t)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${t*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${t*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(r,e){if(r.preventDefault(),e>=this.gridChildren.length-1)return;const t=this.orientation==="horizontal"?r.clientX:r.clientY,n=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(s=>s.endsWith("%")?parseFloat(s)/100*n:(s.endsWith("px"),parseFloat(s)));this.resizing={handleIndex:e,startPos:t,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return S;const r=this.gridSizes.flatMap((e,t)=>t===this.gridSizes.length-1?[e]:[e,"1px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=r,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=r),this.style.overflow="hidden",p`
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
            
            ${this.gridChildren.map((e,t)=>{if(t<this.gridChildren.length-1){const n=this.orientation==="horizontal"?`${t*2+2}`:"1",i=this.orientation==="vertical"?`${t*2+2}`:"1";return p`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${n};
                                grid-row: ${i};
                            "
                            @mousedown=${s=>this.startResize(s,t)}
                        ></div>
                    `}return S})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Ot([m()],st.prototype,"orientation",2);Ot([m()],st.prototype,"sizes",2);Ot([$()],st.prototype,"gridSizes",2);Ot([$()],st.prototype,"gridChildren",2);st=Ot([L("lyra-resizable-grid")],st);var Do=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,Vr=(r,e,t,n)=>{for(var i=n>1?void 0:n?Io(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Do(e,t,i),i};let Et=class extends Tt{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return p`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Et.styles=F`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;Vr([m()],Et.prototype,"message",2);Vr([m()],Et.prototype,"icon",2);Et=Vr([L("lyra-no-content")],Et);const Jt="language",St="en";function Oo(r,e){return e?r.replace(/\{(\w+)\}/g,(t,n)=>e[n]!==void 0?e[n]:t):r}const Mt=new Set([St]),Xr=Oe(Mt);let Yr=null;function zo(r){let e=!1;for(const t of r){const n=t.toLowerCase().replace("-","_");Mt.has(n)||(Mt.add(n),e=!0)}if(e&&(Xr.set(new Set(Mt)),Yr===null)){const t=sr();t!==Ge.get()&&Ge.set(t)}}function sr(){const r=navigator.languages?.length?navigator.languages:[navigator.language||St],e=Xr.get();for(const t of r){const n=t.split("-")[0].toLowerCase();if(e.has(n))return n}return St}const Ge=Oe(sr());async function No(){const r=await A.get(Jt);Yr=r??null,Ge.set(r||sr())}H(Be,r=>{Yr=r?.[Jt]??null,Ge.set(r?.[Jt]||sr())});No();async function ut(r,e=!1){const t={};await Promise.all(Object.entries(r).map(async([o,l])=>{const a=await l(),c=a&&"default"in a?a.default:a,f=(o.match(/\.([a-zA-Z-_]+)\.json$/)?.[1]??St).toLowerCase().replace("-","_");t[f]=c})),zo(Object.keys(t));const n=o=>{const a=Ge.get().toLowerCase().replace("-","_"),[c,d]=a.split("_"),u=d?[`${c}_${d}`,c]:[c];u.push(St);for(const f of u){const h=t[f];if(h&&o in h)return h[o]}return o},i=Object.assign({},{then:void 0,catch:void 0,finally:void 0}),s={get(o,l){if(l in o)return o[l];const a=n(l),c=(d=>Oo(n(l),d));return c.toString=()=>e?n(l):a,c.valueOf=()=>e?n(l):a,c[Symbol.toPrimitive]=()=>e?n(l):a,e&&(c.toJSON=()=>n(l)),c}};return new Proxy(i,s)}class Fo{constructor(){this.editorInputHandlers=[],this.cachedIconContributions=null,H(ve,()=>{}),H(pe,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=x.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((t,n)=>{const i=t.priority??0,s=n.priority??0;return s!==i?s-i:t.label.localeCompare(n.label)}),this.cachedIconContributions}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((t,n)=>{const i=t.definition.ranking??0;return(n.definition.ranking??0)-i})}async ensureHandlerInitialized(e){const t=e.definition;!t.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(t.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(n=>{throw e.lazyInitPromise=void 0,n})),await e.lazyInitPromise)}getEditorOptionsForInput(e){const t=new Set,n=[];for(const i of this.editorInputHandlers){const s=i.definition;!s.canHandle(e)||t.has(s.editorId)||(t.add(s.editorId),n.push({editorId:s.editorId,title:s.label,icon:s.icon}))}return n}async handleInput(e,t){if(t!==void 0){const n=this.editorInputHandlers.find(i=>i.definition.editorId===t);if(n){await this.ensureHandlerInitialized(n);const i=await n.definition.handle(e);return i&&(i.editorId=n.definition.editorId),i}return}for(let n=0;n<this.editorInputHandlers.length;n++){const i=this.editorInputHandlers[n],s=i.definition;if(s.canHandle(e)){await this.ensureHandlerInitialized(i);const o=await s.handle(e);return o&&(o.editorId=s.editorId),o}}}getEditorArea(){return document.querySelector(`lyra-tabs#${xe}`)}async loadEditor(e,t){if(!e||("component"in e||(e=await this.handleInput(e,t)),!e||!("component"in e)))return;const n=e.editorId??t;n&&(e.editorId=n),await this.openTab({name:e.key,editorId:n,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.component})}async openTab(e){const t=this.getEditorArea();if(!t){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(t.has(e.name)){t.activate(e.name);return}t.open(e)}getFileIcon(e){const t=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),n=this.getSortedIconContributions();if(n.length===0)return"file";for(const i of n)if(i.mappings&&i.mappings[t])return i.mappings[t];return"file"}}const ot=new Fo;U.put("editorRegistry",ot);x.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const En=(r,e)=>!r.leaf&&e.leaf?-1:r.leaf&&!e.leaf?1:r.label.localeCompare(e.label);var Uo=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,Zr=(r,e,t,n)=>{for(var i=n>1?void 0:n?jo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Uo(e,t,i),i};const se=Se("LyraFileBrowser"),G=await ut(Object.assign({"./filebrowser.de.json":()=>re(()=>import("./filebrowser.de-5GQ10ols-BDyGxBGM.js"),[]),"./filebrowser.en.json":()=>re(()=>import("./filebrowser.en-9Ng_7WE_-DuKn3BNV.js"),[])})),Bo=250;let Ct=class extends ce{constructor(){super(...arguments),this.fileEditorOptions=[],this.treeRef=Pe(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),H(pe,r=>{r.target==="system.icons"&&this.requestUpdate()}),this.subscribe(J,r=>this.onWorkspaceChanged(r)),this.subscribe(ve,r=>this.onWorkspaceConnected(r))}disconnectedCallback(){this.workspaceChangedDebounceId!==void 0&&(clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=void 0),this.pendingWorkspaceDir=void 0,super.disconnectedCallback()}firstUpdated(r){super.firstUpdated(r),this.setupDragAndDrop()}updated(r){super.updated(r),r.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const r=await y.getWorkspace();await this.loadWorkspace(r??void 0)}renderToolbar(){return p`
            <lyra-command icon="folder-open" title="${G.CONNECT_WORKSPACE}" dropdown="filebrowser.connections"></lyra-command>
            <lyra-command cmd="refresh_resource" icon="repeat" title="${G.REFRESH_RESOURCE}"></lyra-command>
            <lyra-command cmd="touch" icon="plus" title="${G.CREATE_NEW}" dropdown="filebrowser.create"></lyra-command>
        `}renderContextMenu(){const r=he.get(),e=r instanceof W?r:null,t=e&&this.fileEditorOptions.length>0,n=$t("folder-open");return p`
            <lyra-command cmd="open_editor" icon="folder-open">${G.OPEN}</lyra-command>
            ${t?p`
                <wa-dropdown-item>
                    <wa-icon library=${n.library??S} name=${n.name} slot="icon"></wa-icon>
                    ${G.OPEN_WITH}
                    ${this.fileEditorOptions.map(i=>p`
                        <lyra-command
                            slot="submenu"
                            cmd="open_editor"
                            icon="${i.icon??"file"}"
                            .params=${{path:e.getWorkspacePath(),editorId:i.editorId}}>
                            ${i.title}
                        </lyra-command>
                    `)}
                </wa-dropdown-item>
            `:S}
            <lyra-command cmd="touch" icon="plus" dropdown="filebrowser.create">${G.CREATE_NEW}</lyra-command>
        `}onWorkspaceChanged(r){this.pendingWorkspaceDir=r,this.workspaceChangedDebounceId!==void 0&&clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=setTimeout(()=>{this.workspaceChangedDebounceId=void 0;const e=this.pendingWorkspaceDir;this.pendingWorkspaceDir=void 0,e?this.applyWorkspaceChange(e):this.loadWorkspace(void 0,!0)},Bo)}async applyWorkspaceChange(r){he.set(void 0),await this.loadWorkspace(r,!0),await this.syncTreeSelection()}async onWorkspaceConnected(r){await this.loadWorkspace(r,!0)}async loadWorkspace(r,e=!1){this.workspaceDir=r,r?this.root=await this.resourceToTreeNode(r,!0,e):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&he.set(e[0].model?.data)}async resourceToTreeNode(r,e=!1,t=!1){const n=r instanceof W,i={data:r,label:r.getName(),leaf:n,children:[]};if(r instanceof q&&!r.getParent())try{const s=await y.getFolderInfoForDirectory(r);s?.backendName&&(i.workspaceTag=s.backendName)}catch(s){se.debug("Failed to get workspace info for directory",s)}if(r instanceof q&&e){for(const s of await r.listChildren(t)){const o=await this.resourceToTreeNode(s,!0,t);i.children.push(o)}i.children.sort(En)}return i}createTreeItems(r,e=!1){if(!r)return p``;const t=!r.leaf&&r.children.length===0,n=r.data,i=n instanceof W,s=!!n.getParent(),o=$t(i?ot.getFileIcon(n.getName()):r.icon||"folder-open"),l=r.workspaceTag;return p`
            <wa-tree-item 
                draggable=${s}
                @dragstart=${s?this.nobubble(a=>this.onDragStart(a,n)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(a=>this.onLazyLoad(a,r))}
                .model=${r} 
                ?expanded=${e}
                ?lazy=${t}>
                <span class="tree-label">
                    <wa-icon library=${o.library??S} name=${o.name} label="${r.leaf?G.FILE:G.FOLDER}"></wa-icon>
                    <span class="tree-label-text">${r.label}</span>
                    ${!r.leaf&&l?p`<wa-badge appearance="outlined" variant="neutral" style="font-size: var(--wa-font-size-xs);">${l}</wa-badge>`:null}
                </span>
                ${r.children.map(a=>this.createTreeItems(a,!1))}
            </wa-tree-item>`}onDragStart(r,e){if(!r.dataTransfer||!e.getParent())return;const n=r.currentTarget?.closest("wa-tree"),i=Array.isArray(n?.selectedItems)?n.selectedItems:[],s=[];if(i.length>0)for(const c of i){const u=c.model?.data;u&&u.getParent()&&s.push(u)}s.length===0&&s.push(e);const o=s.map(c=>c.getWorkspacePath()),l=s.length===1?s[0].getName():`${s.length} items`;r.dataTransfer.effectAllowed="copyMove";const a=o.join(`
`);if(r.dataTransfer.setData("text/plain",a),r.dataTransfer.setData("application/x-workspace-file",a),r.dataTransfer.setData("text/uri-list",a),r.dataTransfer.setDragImage){const c=document.createElement("div");c.textContent=l,c.style.position="absolute",c.style.top="-1000px",c.style.padding="4px 8px",c.style.background="var(--wa-color-neutral-10)",c.style.border="1px solid var(--wa-color-neutral-30)",c.style.borderRadius="4px",document.body.appendChild(c),r.dataTransfer.setDragImage(c,0,0),setTimeout(()=>document.body.removeChild(c),0)}}async onLazyLoad(r,e){const t=e.data;t instanceof q&&e.children.length===0&&await this.loadNodeChildren(e,t)}async loadNodeChildren(r,e){if(!this.loadingNodes.has(r)){this.loadingNodes.add(r);try{for(const t of await e.listChildren(!1)){Yn&&t.getName().startsWith(".");const n=await this.resourceToTreeNode(t,!1);r.children.push(n)}r.children.sort(En),this.requestUpdate()}catch(t){se.error("Failed to load directory children:",t)}finally{this.loadingNodes.delete(r)}}}async onFileDoubleClicked(r){const t=r.currentTarget.model.data;t instanceof W&&(he.set(t),this.executeCommand("open_editor",{}))}onSelectionChanged(r){const e=r.detail.selection;if(e&&e.length>0){const n=e[0].model.data;he.set(n),n instanceof W?(this.fileEditorOptions=ot.getEditorOptionsForInput(n),this.updateContextMenu()):(this.fileEditorOptions=[],this.updateContextMenu())}else he.set(void 0),this.fileEditorOptions=[],this.updateContextMenu()}setupDragAndDrop(){const r=this.treeRef.value;if(!r)return;const e=s=>{const o=s.dataTransfer?.types;if(!o)return;const l=o.includes("Files"),a=o.includes("application/x-workspace-file");if(!l&&!a)return;s.preventDefault(),s.dataTransfer&&(a?s.dataTransfer.dropEffect=s.ctrlKey||s.metaKey?"copy":"move":s.dataTransfer.dropEffect="copy"),r.classList.add("drag-over");const d=s.target.closest("wa-tree-item");d&&d!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=d,d.classList.add("drop-target"))},t=s=>{const o=s.dataTransfer?.types;if(!o)return;const l=o.includes("Files"),a=o.includes("application/x-workspace-file");!l&&!a||(s.preventDefault(),r.classList.add("drag-over"))},n=s=>{const o=r.getBoundingClientRect(),l=s.clientX,a=s.clientY;(l<=o.left||l>=o.right||a<=o.top||a>=o.bottom)&&(r.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async s=>{if(s.preventDefault(),r.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!s.dataTransfer||!this.workspaceDir)return;const o=await this.getDropTarget(s),l=s.dataTransfer.types;if(l.includes("Files")){const a=Array.from(s.dataTransfer.files);if(a.length===0)return;await this.handleFilesDrop(a,o);return}if(l.includes("application/x-workspace-file")){await this.handleWorkspaceDrop(s,o);return}};r.removeEventListener("dragover",e),r.removeEventListener("dragenter",t),r.removeEventListener("dragleave",n),r.removeEventListener("drop",i),r.addEventListener("dragover",e),r.addEventListener("dragenter",t),r.addEventListener("dragleave",n),r.addEventListener("drop",i)}async getDropTarget(r){const t=r.target.closest("wa-tree-item");if(t){const i=t.model.data;if(i instanceof q)return i;const s=i.getParent();if(s)return s}return this.workspaceDir}async handleWorkspaceDrop(r,e){if(!r.dataTransfer)return;const t=r.dataTransfer.getData("application/x-workspace-file");if(!t)return;const n=t.split(/\r?\n/).map(f=>f.trim()).filter(f=>!!f);if(n.length===0)return;const i=await y.getWorkspace();if(!i){se.warn("Workspace drop ignored because no workspace is connected");return}const s=async f=>{const h=f.getWorkspace(),g=e.getWorkspace();return!h||!g?!1:h===g&&!(r.ctrlKey||r.metaKey)},o=new Set,l=e.getWorkspace();let a=0,c=0;const d=[];for(const f of n)try{const h=await i.getResource(f);if(!h){se.warn(`Workspace drop: source not found for path "${f}"`),c++;continue}d.push({path:f,resource:h});const g=h.getWorkspace();g&&o.add(g)}catch(h){se.error(`Failed to handle workspace drop for "${f}":`,h),c++}if(d.length===0){c>0&&se.info(`Workspace drop failed for ${c} item(s)`);return}let u=!1;if(l){for(const f of o)if(f!==l){u=!0;break}}if(u&&l)try{const f=Array.from(o),h=await y.getFolderInfoForDirectory(f[0]),g=await y.getFolderInfoForDirectory(l),R=h?.backendName??G.UNKNOWN_BACKEND,_=g?.backendName??G.UNKNOWN_BACKEND;if(!await $r(G.DND_CROSS_CONNECTION_CONFIRM({count:String(d.length),srcBackend:R,destBackend:_})))return}catch(f){se.debug("Failed to resolve cross-connection info for DnD",f)}for(const{path:f,resource:h}of d)try{const g=await s(h);await y.copyResource(h,e,{move:g}),a++}catch(g){se.error(`Failed to handle workspace drop for "${f}":`,g),c++}se.info(`Workspace drop completed: ${a}/${d.length} items ${c>0?`, ${c} failed`:""}`),await this.loadWorkspace(this.workspaceDir,!0)}async handleFilesDrop(r,e){const t=r.length;let n=0,i=0,s=0;for(const o of r)try{const l=this.buildTargetPath(e,o.name);if(await this.workspaceDir.getResource(l)&&!await $r(G.FILE_EXISTS_OVERWRITE({fileName:o.name}))){s++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(o),n++}catch(l){se.error(`Failed to upload ${o.name}:`,l),i++}se.info(`Uploaded ${n}/${t} files${s>0?`, ${s} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(r,e){const t=r.getWorkspacePath();return t?`${t}/${e}`:e}render(){return p`
            <div class="tree" ${Le(this.treeRef)} style="--drop-files-text: '${G.DROP_FILES_HERE}'">
                ${N(!this.workspaceDir,()=>p`
                    <lyra-no-content message="${G.SELECT_WORKSPACE}"></lyra-no-content>`,()=>N(this.root,()=>p`
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.root.children.map(r=>this.createTreeItems(r,!0))}
                </wa-tree>`,()=>p``))}
            </div>
        `}};Ct.styles=F`
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
    `;Zr([$()],Ct.prototype,"root",2);Zr([$()],Ct.prototype,"fileEditorOptions",2);Ct=Zr([L("lyra-filebrowser")],Ct);var Wo=Object.getOwnPropertyDescriptor,Mo=(r,e,t,n)=>{for(var i=n>1?void 0:n?Wo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(i)||i);return i};const Er=await ut(Object.assign({"./tasks.de.json":()=>re(()=>import("./tasks.de-Uc1ZhJAb-Bm0wNkDH.js"),[]),"./tasks.en.json":()=>re(()=>import("./tasks.en-ErE1So2Z-eCglTKJa.js"),[])}));x.registerContribution(nr,{component:"<lyra-tasks></lyra-tasks>"});let mt=null;function oi(){return mt||(mt=document.createElement("div"),mt.id="progress-dialog-container",document.body.appendChild(mt)),mt}function Sn(){return oi().querySelector("wa-dialog")}function qo(){ai(!0)}function ai(r=!1){const e=oi(),t=rt.getActiveTasks();if(t.length===0){de(p``,e);return}const i=Sn();if(!(r||i?.open===!0))return;const o=()=>{const c=Sn();c&&(c.open=!1)},l=()=>{de(p``,e)},a=p`
        <wa-dialog 
            label="${Er.ACTIVE_TASKS}" 
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
    `;de(a,e)}let Sr=class extends ce{doBeforeUI(){this.watch(wr,()=>{ai(),this.requestUpdate()})}handleIndicatorClick(){qo()}render(){wr.get();const e=rt.getActiveTasks().length;return e===0?p``:p`
            <div class="tasindicator" @click=${this.handleIndicatorClick} title="${Er.ACTIVE_TASKS_TITLE({taskCount:e.toString()})}">
                <wa-spinner
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);"
                    label="${Er.ACTIVE_TASKS}"
                ></wa-spinner>
                <wa-badge appearance="outlined" variant="neutral" pill>${e}</wa-badge>
                <div class="tasbar-wrap"><wa-progress-bar indeterminate></wa-progress-bar></div>
            </div>
        `}};Sr.styles=F`
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
    `;Sr=Mo([L("lyra-tasks")],Sr);var Ho=Object.getOwnPropertyDescriptor,Go=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ho(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(i)||i);return i};const gr=await ut(Object.assign({"./partname.de.json":()=>re(()=>import("./partname.de-FFi67qCi-iLAwhB2n.js"),[]),"./partname.en.json":()=>re(()=>import("./partname.en-DvPivLXR-DGb3aT7k.js"),[])}));x.registerContribution(nr,{component:"<lyra-part-name></lyra-part-name>"});let Cn=class extends Ne{doBeforeUI(){this.watch(te,()=>{this.requestUpdate()})}getPartName(){const r=te.get();return r&&(r.tabContribution?.label||r.getAttribute("id"))||gr.NO_PART}render(){const e=te.get()?.tabContribution?.icon||"box";return p`
            <wa-button 
                appearance="plain"
                size="small"
                title="${gr.ACTIVE_PART}">
                <lyra-icon slot="start" name="${e}" label="Part"></lyra-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Cn=Go([L("lyra-part-name")],Cn);var Ko=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,zt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Vo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Ko(e,t,i),i};const Xo=Se("LyraExtensions"),O=await ut(Object.assign({"./extensions.de.json":()=>re(()=>import("./extensions.de-CZkqW0F1-C2K7_1Fj.js"),[]),"./extensions.en.json":()=>re(()=>import("./extensions.en-Dg9Oqudm-BWVq_zKr.js"),[])}));let Ke=class extends ce{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){H(yt,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(r){T.enable(r.id,!0),this.requestUpdate()}disable(r){T.disable(r.id,!0),this.requestUpdate()}isExtensionRequired(r){const e=Re.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(r)}selectionChanged(r){const e=r.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return T.getExtensions();const r=this.filterText.toLowerCase();return T.getExtensions().filter(e=>String(e.name).toLowerCase().includes(r)||(e.description?String(e.description).toLowerCase().includes(r):!1)||e.id.toLowerCase().includes(r))}getGroupedExtensions(){const r=this.getFilteredExtensions(),e=[],t=[];return r.forEach(n=>{T.isEnabled(n.id)?e.push(n):t.push(n)}),e.sort((n,i)=>String(n.name).localeCompare(String(i.name))),t.sort((n,i)=>String(n.name).localeCompare(String(i.name))),{enabled:e,available:t}}isExternalExtension(r){return r.external===!0}handleFilterInput(r){this.filterText=r.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const r=await po("Enter extension URL or source identifier:","",!1);if(!r)return;await rt.runAsync("Registering extension",async()=>{let e=r;me.isGitHubUrl(r)&&(e=me.convertGitHubUrlToSource(r));const t=me.parseSource(e);t?.type==="github"?await this.fetchGitHubMetadata(t,e):(this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(r){P(`Failed to register extension: ${r}`)}}async fetchGitHubMetadata(r,e){try{const t=await me.fetchGitHubPackageJson(r),n=r.owner,i=r.repo,s=t.name||`ext.${n}-${i}`,o=t.name||`${n}/${i}`,l=t.description||"",a=t.version||"",c=t.author||(typeof t.author=="string"?t.author:t.author?.name)||"";this.registerExtensionData={id:s,name:o,description:l,url:e,version:a,author:c,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(t){Xo.warn(`Could not fetch package.json, using defaults: ${t}`),this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){P("URL is required");return}if(!this.registerExtensionData.id){P("Extension ID is required");return}if(!this.registerExtensionData.name){P("Extension name is required");return}try{await rt.runAsync("Registering extension",async()=>{const r={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};T.registerExtension(r),await T.loadExtensionFromUrl(this.registerExtensionData.url,r.id),ke(`Extension ${r.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(r){P(`Failed to register extension: ${r}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return p`
            <wa-input
                placeholder="${O.FILTER_PLACEHOLDER}"
                .value=${this.filterText}
                @input=${r=>this.handleFilterInput(r)}
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
        `}render(){const r=this.getGroupedExtensions(),e=r.enabled.length>0||r.available.length>0;return p`
            ${N(this.showRegisterDialog,()=>p`
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
                                ${r.enabled.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                            ${O.INSTALLED} (${r.enabled.length})
                                        </span>
                                        ${r.enabled.map(t=>{const n=this.isExternalExtension(t);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                                    <span><lyra-icon name="${t.icon}"></lyra-icon></span> ${t.name}${n?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                                ${r.available.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                            ${O.AVAILABLE} (${r.available.length})
                                        </span>
                                        ${r.available.map(t=>{const n=this.isExternalExtension(t);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                                    <span><lyra-icon name="${t.icon}"></lyra-icon></span> ${t.name}${n?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
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
                    ${N(this.selectedExtension,t=>{const n=this.isExternalExtension(t),i=T.isEnabled(t.id);return p`
                                <h1><lyra-icon name="${t.icon}"></lyra-icon> ${t.name}${n?" (External)":""}</h1>
                                ${N(n,()=>p`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${O.EXTERNAL_EXTENSION}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${N(i,()=>p`
                                        <wa-button 
                                            title="${this.isExtensionRequired(t.id)?O.REQUIRED_HINT:O.DISABLE_TITLE}" 
                                            @click="${()=>this.disable(t)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(t.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${O.UNINSTALL}
                                        </wa-button>
                                        ${N(this.isExtensionRequired(t.id),()=>p`
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

                                ${N(t.experimental,()=>p`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${O.EXPERIMENTAL}</i></small>
                                    </div>
                                `)}

                                ${N(t.version||t.author,()=>p`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${N(t.version,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${O.VERSION} <strong>${t.version}</strong></span>
                                            </div>
                                        `)}
                                        ${N(t.author,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${O.AUTHOR} <strong>${t.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${t.description}</p>

                                ${N(t.dependencies&&t.dependencies.length>0,()=>p`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${O.DEPENDENCIES}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${t.dependencies.map(s=>{const o=T.getExtensions().find(a=>a.id===s),l=T.isEnabled(s);return p`
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
        `}};Ke.styles=F`
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
    `;zt([$()],Ke.prototype,"selectedExtension",2);zt([$()],Ke.prototype,"filterText",2);zt([$()],Ke.prototype,"showRegisterDialog",2);zt([$()],Ke.prototype,"registerExtensionData",2);Ke=zt([L("lyra-extensions")],Ke);var Yo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,or=(r,e,t,n)=>{for(var i=n>1?void 0:n?Zo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Yo(e,t,i),i};const z=await ut(Object.assign({"./logterminal.de.json":()=>re(()=>import("./logterminal.de-MX1cr5ek-EcKGbnDh.js"),[]),"./logterminal.en.json":()=>re(()=>import("./logterminal.en-BHVSaQqb-DpFjNbQM.js"),[])}));let at=class extends ce{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Pe()}connectedCallback(){super.connectedCallback(),this.loadSettings(),Ti(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Pi()}log(r,e,t="info"){const n={timestamp:new Date,level:t,source:r,message:e};this.messages=[...this.messages,n],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(r=>r.level===this.filter)}formatTimestamp(r){return r.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(r){switch(r){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(r){switch(r){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const r=this.messages.filter(i=>i.level==="info").length,e=this.messages.filter(i=>i.level==="warning").length,t=this.messages.filter(i=>i.level==="error").length,n=this.messages.filter(i=>i.level==="debug").length;return p`
            <lyra-command 
                icon="list"
                title="${z.ALL_LOGS}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${z.ALL} (${this.messages.length})
            </lyra-command>

            <lyra-command 
                icon="circle-info"
                title="${z.INFO_LOGS}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${z.INFO}${r>0?` (${r})`:""}
            </lyra-command>

            <lyra-command 
                icon="triangle-exclamation"
                title="${z.WARNING_LOGS}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${z.WARNINGS}${e>0?` (${e})`:""}
            </lyra-command>

            <lyra-command 
                icon="circle-xmark"
                title="${z.ERROR_LOGS}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${z.ERRORS}${t>0?` (${t})`:""}
            </lyra-command>

            <lyra-command 
                icon="bug"
                title="${z.DEBUG_LOGS}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${z.DEBUG}${n>0?` (${n})`:""}
            </lyra-command>

            <wa-divider orientation="vertical"></wa-divider>

            <lyra-command 
                icon="arrow-down" 
                title="${this.autoScroll?z.AUTO_SCROLL_ENABLED:z.AUTO_SCROLL_DISABLED}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?z.AUTO_SCROLL:z.MANUAL}
            </lyra-command>

            <lyra-command 
                icon="trash" 
                title="${z.CLEAR_LOGS}"
                .action=${()=>this.clear()}>
                ${z.CLEAR}
            </lyra-command>
        `}render(){const r=this.getFilteredMessages();return p`
            <div class="log-terminal">
                <div class="messages" ${Le(this.containerRef)}>
                    ${r.length===0?p`<div class="empty-state">${z.NO_LOG_MESSAGES}</div>`:r.map(e=>p`
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
        `}async loadSettings(){const r=await this.getDialogSetting();r&&(typeof r.filter=="string"&&(r.filter==="all"||["info","warning","error","debug"].includes(r.filter))&&(this.filter=r.filter),typeof r.autoScroll=="boolean"&&(this.autoScroll=r.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};at.styles=F`
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
    `;or([$()],at.prototype,"messages",2);or([$()],at.prototype,"autoScroll",2);or([$()],at.prototype,"filter",2);at=or([L("lyra-log-terminal")],at);var Qo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,ie=(r,e,t,n)=>{for(var i=n>1?void 0:n?Jo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Qo(e,t,i),i};const ea=await ut(Object.assign({"./fastviews.de.json":()=>re(()=>import("./fastviews.de-MGAlHTsp-CU9Rj7sS.js"),[]),"./fastviews.en.json":()=>re(()=>import("./fastviews.en-BoYc4WrC-DnZQwCTs.js"),[])}));let V=class extends Tt{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=Pe(),this.tabsRef=Pe(),this.resizeHandleRef=Pe(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(r){if(!this.disabled)if(this.containerId){const e=document.querySelector(`lyra-tabs#${this.containerId}`);if(!e){console.error(`fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(r)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(r)})}handleDrawerHide(){this.drawerOpen=!1}startResize(r){r.preventDefault(),r.stopPropagation();const e=this.drawerRef.value;if(!e)return;let n=(()=>{const o=e.shadowRoot?.querySelector('[part="panel"]');if(o&&o.offsetWidth>0)return o.offsetWidth;const c=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(c){const d=parseFloat(c[1]),u=c[2];if(u==="px")return d;if(u==="vw")return d/100*window.innerWidth;if(u==="vh")return d/100*window.innerHeight;if(u==="%")return d/100*window.innerWidth}return 0})();n===0&&(n=window.innerWidth*.5);const i=o=>{this.resizing&&(o.preventDefault(),o.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-o.clientX,a=Math.round(this.resizing.startSize+l),c=200,d=Math.round(window.innerWidth*.9);if(a>=c&&a<=d){this.drawerSize=`${a}px`;const u=this.drawerRef.value;u&&(u.style.setProperty("--size",this.drawerSize),u.style.setProperty("transition","none"))}this.resizing.rafId=null}))},s=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const o=this.drawerRef.value;o&&o.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:r.clientX,startSize:n,handleMouseMove:i,handleMouseUp:s,rafId:null},document.addEventListener("mousemove",i,{passive:!1}),document.addEventListener("mouseup",s,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),H(pe,r=>{this.target&&r.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const r=x.getContributions(this.target);this.tabContributions=r.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(r){return p`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(r)}>
                <lyra-icon name="${r.icon||""}" label="${r.label}" slot="icon"></lyra-icon>
                ${r.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?S:p`
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
                `:S}
                
                ${this.tabContributions.map(r=>this.renderTabContribution(r))}
            </wa-dropdown>

            ${this.containerId?S:p`
                <wa-drawer 
                    ${Le(this.drawerRef)}
                    label="${this.title||ea.FAST_VIEWS}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${Le(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <lyra-tabs 
                        ${Le(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </lyra-tabs>
                </wa-drawer>
            `}
        `:S}};V.styles=F`
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
    `;ie([m()],V.prototype,"target",2);ie([m()],V.prototype,"title",2);ie([m()],V.prototype,"icon",2);ie([m({type:Boolean})],V.prototype,"disabled",2);ie([m()],V.prototype,"appearance",2);ie([m()],V.prototype,"size",2);ie([m()],V.prototype,"placement",2);ie([m()],V.prototype,"containerId",2);ie([$()],V.prototype,"tabContributions",2);ie([$()],V.prototype,"drawerOpen",2);ie([$()],V.prototype,"drawerSize",2);V=ie([L("lyra-fastviews")],V);var ta=Object.getOwnPropertyDescriptor,ra=(r,e,t,n)=>{for(var i=n>1?void 0:n?ta(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(i)||i);return i};function na(){let r=document.getElementById("global-dialog-container");return r||(r=document.createElement("div"),r.id="global-dialog-container",document.body.appendChild(r)),r}const li=r=>{try{return new Intl.DisplayNames([r],{type:"language"}).of(r)||r.toUpperCase()}catch{return r.toUpperCase()}},ia=()=>[...Xr.get()].sort(),sa=async()=>{const r=ia(),e=Ge.get();return new Promise(t=>{const n=na();let i=!1;const s=()=>{const c=n.querySelector("wa-dialog");c&&!i&&(c.open=!1)},o=()=>{i||(i=!0,de(p``,n),t())},l=async c=>{await A.set(Jt,c),s()},a=p`
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
                    ${r.map(c=>p`
                        <div 
                            class="language-item ${c===e?"active":""}"
                            @click=${()=>l(c)}>
                            <span class="language-code">${c.toUpperCase()}</span>
                            <span class="language-name">${li(c)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;de(a,n)})};let Cr=class extends Ne{render(){const r=Ge.get(),e=li(r),t=`${r.toUpperCase()} ${e}`;return p`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>sa()}>
                ${t}
            </wa-button>
        `}};Cr.styles=F`
        :host {
            display: inline-block;
        }
    `;Cr=ra([L("lyra-language-selector")],Cr);var oa=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,ci=(r,e,t,n)=>{for(var i=n>1?void 0:n?aa(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&oa(e,t,i),i};let er=class extends Ne{constructor(){super(...arguments),this.currentLayoutId="standard"}doBeforeUI(){this.currentLayoutId=Re.getCurrentLayoutId();const r=()=>{this.currentLayoutId=Re.getCurrentLayoutId(),this.requestUpdate()};return window.addEventListener("app-loaded",r),window.addEventListener("layout-changed",r),()=>{window.removeEventListener("app-loaded",r),window.removeEventListener("layout-changed",r)}}async handleSelect(r){const e=r.detail?.item?.value;if(!(!e||e===this.currentLayoutId))try{await Re.setPreferredLayoutId(e)}catch(t){console.error("Failed to switch layout:",t)}}render(){const r=Re.getRegisteredLayouts();if(r.length<=1)return p``;const t=r.find(n=>n.id===this.currentLayoutId)?.name??this.currentLayoutId;return p`
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
                ${r.map(n=>p`
                        <wa-dropdown-item
                            value="${n.id}"
                            type="checkbox"
                            ?checked=${n.id===this.currentLayoutId}>
                            ${n.icon?p`<lyra-icon slot="icon" name="${n.icon}" label="${n.name}"></lyra-icon>`:""}
                            ${n.name}
                        </wa-dropdown-item>
                    `)}
            </wa-dropdown>
        `}};er.styles=F`
        :host {
            display: inline-block;
        }
    `;ci([$()],er.prototype,"currentLayoutId",2);er=ci([L("lyra-layout-switcher")],er);const la="view.filebrowser",ca="view.logTerminal",da="toolbar.info",pa="toolbar.fastViews",ua="toolbar.languageSelector",ha="toolbar.appSwitcher";x.registerContribution(Yt,{name:la,label:"Workspace",icon:"folder-open",component:r=>p`<lyra-filebrowser id="${r}"></lyra-filebrowser>`});x.registerContribution(Ur,{name:ca,label:"Log Messages",icon:"list",component:r=>p`<lyra-log-terminal id="${r}"></lyra-log-terminal>`});x.registerContribution(_t,{name:da,label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});x.registerContribution(_t,{name:pa,label:"Fast Views",component:'<lyra-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></lyra-fastviews>'});x.registerContribution(_t,{name:ua,label:"Language",component:()=>p`<lyra-language-selector></lyra-language-selector>`});x.registerContribution(ct,{name:ha,label:"App Switcher",component:()=>p`<lyra-layout-switcher></lyra-layout-switcher>`});var fa=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,Nt=(r,e,t,n)=>{for(var i=n>1?void 0:n?ga(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&fa(e,t,i),i};let lt=class extends Gr{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return p`
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
                <lyra-toolbar id=${qn}></lyra-toolbar>
                <lyra-toolbar id=${Hn}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${ct}></lyra-toolbar>
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
                                    <lyra-tabs id="${Yt}"></lyra-tabs>
                                    <lyra-tabs id="${Vn}"></lyra-tabs>
                                </lyra-resizable-grid>
                            `:p`<lyra-tabs id="${Yt}"></lyra-tabs>`}
                    `:S}
                
                ${this.showBottomPanel?p`
                        <lyra-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <lyra-tabs id="${xe}"></lyra-tabs>
                            <lyra-tabs id="${Ur}"></lyra-tabs>
                        </lyra-resizable-grid>
                    `:p`<lyra-tabs id="${xe}"></lyra-tabs>`}
                
                ${this.showAuxSidebar?p`<lyra-tabs id="${Xn}"></lyra-tabs>`:S}
            </lyra-resizable-grid>
            
            <div class="toolbar-bottom">
                <lyra-toolbar id=${Gn}></lyra-toolbar>
                <lyra-toolbar id=${nr}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${_t}></lyra-toolbar>
            </div>
        `}};Nt([m({type:Boolean,attribute:"show-bottom-sidebar"})],lt.prototype,"showBottomSidebar",2);Nt([m({type:Boolean,attribute:"show-bottom-panel"})],lt.prototype,"showBottomPanel",2);Nt([m({type:Boolean,attribute:"show-left-sidebar"})],lt.prototype,"showLeftSidebar",2);Nt([m({type:Boolean,attribute:"show-aux-sidebar"})],lt.prototype,"showAuxSidebar",2);lt=Nt([L("lyra-standard-layout")],lt);const ma=[{id:"standard",name:"Standard",label:"Standard",icon:"lyra layout-standard",component:"lyra-standard-layout"},{id:"standard-bottom-panel",name:"Standard (bottom panel)",label:"Standard (bottom panel)",icon:"lyra layout-standard-bottom-panel",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true"}}},{id:"standard-bottom-sidebar",name:"Standard (bottom sidebar)",label:"Standard (bottom sidebar)",icon:"lyra layout-standard-bottom-sidebar",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-sidebar":"true"}}},{id:"standard-full",name:"Standard (panel + sidebar)",label:"Standard (panel + sidebar)",icon:"lyra layout-standard-full",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true","show-bottom-sidebar":"true"}}}];for(const r of ma)x.registerContribution(Xt,r);async function ba(r,e=!0){const t=await y.getWorkspace();if(!t)return null;const n=r?.path;return e&&!n?null:{workspace:t,path:n||""}}function Qr(r){return r&&typeof r.getContent=="function"&&typeof r.getSelection=="function"&&typeof r.getSnippet=="function"&&typeof r.getLanguage=="function"&&typeof r.getFilePath=="function"}function Te(r=!1){const e={filePath:null,language:null};return r?{...e,snippet:null,cursorLine:null}:e}async function wa(r,e=!0){const t=await ba(r,e);if(!t)return null;const{workspace:n,path:i}=t;if(!i)return null;try{const s=await n.getResource(i);return!s||!(s instanceof W)?null:{workspace:n,path:i,file:s}}catch{return null}}D({command:{id:"disconnect_folder",name:"Disconnect folder",description:"Disconnects a folder from the workspace"},handler:{execute:async()=>{const r=he.get();if(!(r instanceof q&&r.getParent()===void 0)){P("Select a folder root to disconnect.");return}try{await y.disconnectFolder(r)}catch(e){P(e.message)}}},contribution:{target:"contextmenu:filebrowser",label:"Disconnect folder",icon:"folder-minus",disabled:()=>{const r=he.get();return!(r instanceof q&&r.getParent()===void 0)}}});D({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async r=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>y.connectWorkspace(e)).catch(e=>{P(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});D({command:{id:"connect_opfs",name:"OPFS",description:"Connect to Origin Private File System (browser storage)",parameters:[]},handler:{execute:async()=>{try{await y.connectFolder({opfs:!0})}catch(r){P(r.message)}}},contribution:{target:"filebrowser.connections",label:"OPFS (Browser Storage)",icon:"database"}});D({command:{id:"connect_indexeddb",name:"IndexedDB",description:"Connect to IndexedDB-backed workspace (browser storage)",parameters:[{name:"name",description:"Optional display name for this IndexedDB workspace root",required:!1}]},handler:{execute:async r=>{const e=r.params?.name;try{await y.connectFolder({indexeddb:!0,name:e})}catch(t){P(t.message)}}},contribution:{target:"filebrowser.connections",label:"IndexedDB (Browser Storage)",icon:"database"}});D({command:{id:"refresh_resource",name:"Refresh resource",description:"Refreshes the connected folder of the selected resource, or the whole workspace if nothing is selected",parameters:[]},handler:{execute:async()=>{const r=he.get();if(r){r.getWorkspace().touch();return}const e=await y.getWorkspace();if(!e){P("No workspace selected.");return}e.touch()}}});D({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"The path of the file to open within the workspace; if omitted, the active selection is opened",required:!1},{name:"editorId",description:"Open with this editor id; if omitted, use default editor",required:!1}]},handler:{execute:async r=>{const e=r.params?.path,t=r.params?.editorId;let n=null;if(e)n=(await wa({path:e}))?.file??null;else{const i=he.get();n=i instanceof W?i:null}n&&await ot.loadEditor(n,t)}}});D({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async r=>{const e=r.activeEditor;if(!Qr(e))return{...Te(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...Te(),content:null}}}}});D({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async r=>{const e=r.activeEditor;if(!Qr(e))return{...Te(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...Te(),selection:null}}}}});D({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async r=>{const e=r.activeEditor;if(!Qr(e))return Te(!0);try{const t=r.params?.lines?parseInt(r.params.lines,10):5;if(isNaN(t)||t<0)return Te(!0);const n=e.getSnippet(t);return n?{snippet:n.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:n.cursorLine}:Te(!0)}catch{return Te(!0)}}}});D({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async r=>{const e=Re.getCurrentApp();if(!e){P("No app loaded");return}const t=e.dependencies??{},n=Object.keys(t).length>0,i=n?p`
                    <wa-tree style="--indent-guide-width: 1px;">
                        <wa-tree-item expanded>
                            <span>${e.name??""}</span>
                            ${Object.entries(t).map(([C,I])=>p`
                                <wa-tree-item>
                                    <span>${C} <small>${I}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    </wa-tree>
                `:p``;let s=null;const o=()=>(s||(s=document.getElementById("global-dialog-container")||document.createElement("div"),s.id||(s.id="global-dialog-container",document.body.appendChild(s))),s),l=()=>{s&&de(p``,s)},a=C=>{const I=k.parse(C,{async:!1});return p`${Rt(I)}`};let c=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{c=await e.releaseHistory()}catch(C){console.error("Failed to load release history from app:",C),c=[]}else c=e.releaseHistory;const d=e.version??"0.0.0",u=c.length>0?c.findIndex(C=>C.tag_name===d):-1,f=u>=0?u:0;let h=f;const g=C=>{if(c.length===0)return"";const I=c[C],Ye=I.tag_name===d;let ee=`**Version:** ${I.tag_name}`;Ye&&(ee+=" (Current)"),ee+=`

`;const Fe=new Date(I.published_at).toLocaleDateString();if(ee+=`**Released:** ${Fe}

`,!Ye){const hi=d.replace(/^v/,""),fi=I.tag_name.replace(/^v/,""),Jr=hi.split(".").map(Number),en=fi.split(".").map(Number);let tn=!1;for(let Ft=0;Ft<Math.max(Jr.length,en.length);Ft++){const rn=Jr[Ft]||0,nn=en[Ft]||0;if(nn>rn){tn=!0;break}if(nn<rn)break}tn&&(ee+=`⚠️ **Update available - reload page to update**

`)}return I.body&&(ee+=`---

${I.body}`),ee},R=()=>{l()},_=()=>{l()},Y=C=>{const I=g(C),Ye=c.length>0,ee=p`
                    <wa-dialog 
                        label="About ${e.name??""} - ${e.version??"0.0.0"}"
                        open 
                        light-dismiss
                        style="--width: 600px;"
                        @wa-request-close=${R}
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
                                        ${a(I)}
                                    </wa-tab-panel>
                                `:""}
                                
                                ${n?p`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${i}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${Ye?p`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${C===c.length-1}
                                    @click=${()=>{C<c.length-1&&(h=C+1,Y(h))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${C===0}
                                    @click=${()=>{C>0&&(h=C-1,Y(h))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;de(ee,o())};return Y(f),new Promise(C=>{const I=()=>{s?.querySelector("wa-dialog[open]")?setTimeout(I,100):C()};I()})}}});D({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async r=>{const e=tt.get()||te.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const r=te.get();return!r||!r.isDirty()}}});const di="theme";async function pi(r){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(r)}async function ya(){const r=await A.get(di);await pi(r||"wa-dark")}async function va(r){await A.set(di,r)}D({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async r=>{const t=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await pi(t),await va(t)}},contribution:{target:ct,icon:"circle-half-stroke",label:"Theme Switcher"}});ya().catch(r=>{console.error("Failed to load theme preference:",r)});D({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async r=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:ct,icon:"expand",label:"Fullscreen"}});D({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:r=>{const e={title:"Extensions",data:{},key:"system.extensions",icon:"puzzle-piece",state:{},noOverflow:!0,component:()=>p`<lyra-extensions></lyra-extensions>`};ot.loadEditor(e,"extensions-editor").then()}},contribution:{target:ct,icon:"puzzle-piece",label:"Open Extensions"}});D({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async r=>T.getExtensions().map(t=>({id:t.id,name:t.name,description:t.description,experimental:t.experimental,enabled:T.isEnabled(t.id)}))}});D({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:r,type:e}})=>{r&&(e==="error"?P(r):ke(r))}}});const ui=`self.onmessage = async function(e) {
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
`,Rn=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",ui],{type:"text/javascript;charset=utf-8"});function xa(r){let e;try{if(e=Rn&&(self.URL||self.webkitURL).createObjectURL(Rn),!e)throw"";const t=new Worker(e,{type:"module",name:r?.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ui),{type:"module",name:r?.name})}}function ka(){let r=null,e=null;function t(){return r||(r=new xa,r.onmessage=n=>{const i=e;e=null,i&&(n.data.type==="result"?i.resolve(n.data.value):i.reject(new Error(n.data.message??"Unknown error")))},r.onerror=n=>{const i=e;e=null,i&&i.reject(new Error(n.message??"Worker error"))}),r}return{execute(n){return new Promise((i,s)=>{e={resolve:i,reject:s},t().postMessage(n)})},close(){r&&(r.terminate(),r=null),e=null}}}async function $a(r){if(r.code?.trim())return r.code.trim();if(!r.script)return P("Provide 'script' (file path) or 'code'."),null;const e=await y.getWorkspace();if(!e)return P("No workspace selected."),null;try{const t=await e.getResource(r.script);if(!t||!(t instanceof W))return P("File not found: "+r.script),null;const n=await t.getContents();return typeof n!="string"?(P("File is not a text file"),null):n}catch(t){return P(`Failed to access file: ${t instanceof Error?t.message:String(t)}`),null}}D({command:{id:"js",name:"Run JavaScript file",description:"Runs a script via JsRuntime (inline or file). Return value or self.postMessage(value) is shown.",parameters:[{name:"script",description:"workspace path to a .js file",required:!1},{name:"code",description:"inline JavaScript",required:!1}]},handler:{execute:async r=>{const e=await $a(r.params??{});if(!e)return;const t=ka();try{const n=await t.execute(e);return n!==void 0&&ke(String(n)),n}catch(n){P(n instanceof Error?n.message:String(n))}finally{t.close()}}}});D({command:{id:"open_view_as_editor",name:"Open view as editor",description:"Opens a dashboard view in the editor area",parameters:[{name:"name",description:"View contribution name",required:!0},{name:"sourceContributionSlot",description:"source contribution slot (default: SYSTEM_VIEWS)",required:!1}]},handler:{execute:async({params:r})=>{const e=r?.name;if(!e)return;const t=r?.sourceContributionSlot??Kn,i=x.getContributions(t).find(s=>s.name===e);i?.component&&await ot.openTab(i)}}});U.put("constants",Ls);ze.put("html",p);ze.put("render",de);ze.put("toastInfo",ke);ze.put("toastError",P);ze.put("toastWarning",Ai);ze.put("publish",w);ze.put("subscribe",H);export{ze as A,Hn as B,_t as C,q as D,pe as E,W as F,ve as G,_n as H,tt as I,br as J,Tt as K,ce as L,ka as M,Pa as N,te as O,Ur as P,Sa as Q,Ca as R,Ta as S,qn as T,Vn as U,Re as a,ct as b,x as c,ot as d,T as e,Se as f,Gn as g,Ne as h,ut as i,$e as j,Be as k,A as l,E as m,U as n,le as o,po as p,rt as q,D as r,Wr as s,P as t,ke as u,he as v,y as w,$r as x,J as y,Xn as z};
