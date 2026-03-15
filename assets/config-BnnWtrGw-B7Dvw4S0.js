import{g as ui,j as ze,d as Sn,k as hi,S as Cn,p as w,u as fi,a as G,i as j,n as m,c as $,b as p,o as Ct,D as pe,l as gi,A as P,e as Ae,f as Le,m as N,h as mi,t as _,_ as ne}from"./webawesome-C6zoK8ho.js";var Nt={exports:{}};var bi=Nt.exports,rn;function wi(){return rn||(rn=1,(function(r){(function(e,t){r.exports?r.exports=t():e.Toastify=t()})(bi,function(e){var t=function(o){return new t.lib.init(o)},n="1.12.0";t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},t.lib=t.prototype={toastify:n,constructor:t,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||t.defaults.text,this.options.node=o.node||t.defaults.node,this.options.duration=o.duration===0?0:o.duration||t.defaults.duration,this.options.selector=o.selector||t.defaults.selector,this.options.callback=o.callback||t.defaults.callback,this.options.destination=o.destination||t.defaults.destination,this.options.newWindow=o.newWindow||t.defaults.newWindow,this.options.close=o.close||t.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=o.positionLeft||t.defaults.positionLeft,this.options.position=o.position||t.defaults.position,this.options.backgroundColor=o.backgroundColor||t.defaults.backgroundColor,this.options.avatar=o.avatar||t.defaults.avatar,this.options.className=o.className||t.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?t.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||t.defaults.onClick,this.options.offset=o.offset||t.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:t.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||t.defaults.ariaLive,this.options.style=o.style||t.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",(function(A){A.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var d=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&d>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var u=this;o.addEventListener("mouseover",function(A){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){u.removeElement(o)},u.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",(function(A){A.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",(function(A){A.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var f=i("x",this.options),h=i("y",this.options),g=this.options.position=="left"?f:"-"+f,C=this.options.gravity=="toastify-top"?h:"-"+h;o.style.transform="translate("+g+","+C+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=t.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),t.reposition()}).bind(this),400)}},t.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),d,u=0;u<c.length;u++){s(c[u],"toastify-top")===!0?d="toastify-top":d="toastify-bottom";var f=c[u].offsetHeight;d=d.substr(9,d.length-1);var h=15,g=window.innerWidth>0?window.innerWidth:screen.width;g<=360?(c[u].style[d]=l[d]+"px",l[d]+=f+h):s(c[u],"toastify-left")===!0?(c[u].style[d]=o[d]+"px",o[d]+=f+h):(c[u].style[d]=a[d]+"px",a[d]+=f+h)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function s(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return t.lib.init.prototype=t.lib,t})})(Nt)),Nt.exports}var yi=wi();const vi=ui(yi);class Sr{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,t){return e[t]||this.parent?.getProxy()[t]}set(e,t,n){e[t]=n}put(e,t){this.variables[e]=t}getProxy(){return this.proxy}createChild(e={}){const t=new Sr(e);return t.parent=this,this.children.push(t),t}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const F=new Sr({}),Ne=F.createChild({}),nn={debug:0,info:1,warning:2,error:3};let xi="debug";const Je={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let jt=null;const fr=[];function be(r){if(r===null)return"null";if(r===void 0)return"undefined";if(typeof r=="string")return r;if(typeof r=="number"||typeof r=="boolean")return String(r);if(r instanceof Error)return`${r.name}: ${r.message}`;try{return JSON.stringify(r)}catch{return String(r)}}class ki{constructor(e){this.source=e}info(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>be(i)).join(" ")}`;this.log(n,"info")}warning(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>be(i)).join(" ")}`;this.log(n,"warning")}warn(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>be(i)).join(" ")}`;this.log(n,"warning")}error(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>be(i)).join(" ")}`;this.log(n,"error")}debug(e,...t){const n=t.length===0?e:`${e} ${t.map(i=>be(i)).join(" ")}`;this.log(n,"debug")}log(e,t){et(this.source,e,t)}}function $i(r){return nn[r]>=nn[xi]}function et(r,e,t){$i(t)&&(jt?jt(r,e,t):(fr.push({source:r,message:e,level:t}),Je[t==="error"?"error":t==="warning"?"warn":t==="debug"?"debug":"log"](`[${r}] ${e}`)))}function Ei(){console.log=function(...r){Je.log.apply(console,r),et("Console",r.map(e=>be(e)).join(" "),"info")},console.info=function(...r){Je.info.apply(console,r),et("Console",r.map(e=>be(e)).join(" "),"info")},console.warn=function(...r){Je.warn.apply(console,r),et("Console",r.map(e=>be(e)).join(" "),"warning")},console.error=function(...r){Je.error.apply(console,r),et("Console",r.map(e=>be(e)).join(" "),"error")},console.debug=function(...r){Je.debug.apply(console,r),et("Console",r.map(e=>be(e)).join(" "),"debug")}}Ei();function Si(r){for(jt=r;fr.length>0;){const e=fr.shift();e&&r(e.source,e.message,e.level)}}function Ci(){jt=null}function Ce(r){return new ki(r)}const E=Ce("System");F.put("logger",E);const Cr=Ce("Toast"),Ri=4e3,Ti={duration:Ri,gravity:"bottom",position:"right",close:!0},Rr=(r,e)=>{vi({...Ti,text:r,style:e}).showToast()},$e=r=>{Cr.info(r),Rr(r,{background:"var(--wa-color-brand-50)",color:"var(--wa-color-brand-on)"})},T=r=>{Cr.error(r),Rr(r,{background:"var(--wa-color-danger-50)",color:"var(--wa-color-danger-on)"})},Pi=r=>{Cr.warn(r),Rr(r,{background:"var(--wa-color-warning-50)",color:"var(--wa-color-warning-on)"})};class Ai{constructor(){this.globalNameRemaps=new Map,this.appNameRemaps=new Map}setGlobalNameRemap(e,t){this.globalNameRemaps.set(e,this.normalizeTargets(t))}resetForTesting(){this.globalNameRemaps.clear(),this.appNameRemaps.clear()}applyAppNameRemaps(e){if(this.appNameRemaps.clear(),!!e)for(const t of e)this.appNameRemaps.set(t.name,this.normalizeTargets(t.targets))}getEffectiveTargets(e,t){const n=t.name;if(!n)return[e];const i=this.appNameRemaps.get(n);if(i)return i.length>0?i:[];const s=this.globalNameRemaps.get(n);return s?s.length>0?s:[]:[e]}listNameRemaps(){const e={},t=new Set([...this.globalNameRemaps.keys(),...this.appNameRemaps.keys()]);for(const n of t)e[n]={appTargets:this.appNameRemaps.get(n),globalTargets:this.globalNameRemaps.get(n)};return e}normalizeTargets(e){const t=new Set,n=[];for(const i of e)!i||t.has(i)||(t.add(i),n.push(i));return n}}const Wt=new Ai;F.put("contributionTargetMappingRegistry",Wt);const ue="events/contributionregistry/contributionsChanged";class Li{constructor(){this.contributions=new Map}registerContribution(e,t){const n=this.getOrCreateSlot(e);if("command"in t){const s=t;s.disabled instanceof Function&&(s.disabled=new Cn.Computed(s.disabled))}n.push(t),w(ue,{target:e,contributions:n});const i=Wt.getEffectiveTargets(e,t);for(const s of i){if(s===e)continue;const o=this.getContributions(s);w(ue,{target:s,contributions:o})}}getContributions(e){const t=[];for(const[n,i]of this.contributions.entries()){const s=i;for(const o of s)Wt.getEffectiveTargets(n,o).includes(e)&&t.push(o)}return t.length===0&&this.getOrCreateSlot(e),t}getOrCreateSlot(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const x=new Li;F.put("contributionRegistry",x);const xa={},re=ze(null),tt=ze(null),gr=ze(null),mr=ze(0),ge=ze(void 0);ze({name:"",timestamp:0});const Rn="events/commandregistry/commandRegistered";class _i{constructor(e,t,n,i,s){this.id=e,this.name=t,this.description=n,this.parameters=i||[],this.output=s||[]}}class ka{async execute(e,t){return Ee.execute(e,t)}async undo(){}async redo(){}}class Di{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,t){this.handlers.has(e)||this.handlers.set(e,[]);const n=this.handlers.get(e);n.push(t),n.sort((i,s)=>(s.ranking??0)-(i.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:re.get(),activeEditor:tt.get()}}execute(e,t={}){const n=this.getHandler(e);if(!n)throw E.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const i=this.getCommand(e),s=t.params?` params: ${JSON.stringify(t.params)}`:"";E.debug(`[CommandRegistry] Executing command: ${e}${i?` (${i.name})`:""}${s}`);for(const o of n)if(o.canExecute===void 0||o.canExecute(t))try{const a=o.execute(t);return E.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${a})`),a}catch(a){const l=a instanceof Error?a.message:String(a);throw E.error(`[CommandRegistry] Command execution failed: ${e} - ${l}`),a}E.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,t,n,i,s){const o=new _i(e,t,n,i);this.registerCommand(o),s&&this.registerHandler(e,s)}registerCommand(e){this.commands[e.id]=e,w(Rn,e)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(t=>(Ee.getHandler(t.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(e))).reduce((t,n)=>(t[n.id]=n,t),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const t=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(t,e.handler),e.contribution&&e.contribution.target&&x.registerContribution(e.contribution.target,{command:t,...e.contribution})}}const Ee=new Di;F.put("commandRegistry",Ee);const D=r=>{Ee.registerAll(r)},Tn=(r,e)=>{const t=new Cn.subtle.Watcher(async()=>{try{await 0,e(r.get())}finally{t.watch(r)}});return t.watch(r),r.get(),()=>{t.unwatch(r)}};Object.defineProperty(Sn.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});const Oi=hi(Sn);class Qt extends Oi{constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>fi(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,t){const n=G(e,t.bind(this));this.eventSubscriptions.add(n)}showInfo(e){$e(e)}showError(e){T(e)}nobubble(e){return t=>{t.stopPropagation(),e.bind(this)(t)}}command(e,t={}){return()=>{this.executeCommand(e,t)}}executeCommand(e,t){const n=Ee.createExecutionContext(t);Ee.execute(e,n)}watch(e,t){const n=Tn(e,t.bind(this));this.signalCleanups.add(n)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}function Tr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ve=Tr();function Pn(r){Ve=r}var je={exec:()=>null};function v(r,e=""){let t=typeof r=="string"?r:r.source,n={replace:(i,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(M.caret,"$1"),t=t.replace(i,o),n},getRegex:()=>new RegExp(t,e)};return n}var Ii=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),M={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}>`)},zi=/^(?:[ \t]*(?:\n|$))+/,Ni=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Fi=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Rt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ui=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Pr=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,An=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ln=v(An).replace(/bull/g,Pr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Bi=v(An).replace(/bull/g,Pr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ar=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ji=/^[^\n]+/,Lr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Wi=v(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Lr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Mi=v(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Pr).getRegex(),Jt="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",_r=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,qi=v("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",_r).replace("tag",Jt).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),_n=v(Ar).replace("hr",Rt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jt).getRegex(),Hi=v(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",_n).getRegex(),Dr={blockquote:Hi,code:Ni,def:Wi,fences:Fi,heading:Ui,hr:Rt,html:qi,lheading:Ln,list:Mi,newline:zi,paragraph:_n,table:je,text:ji},sn=v("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Rt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jt).getRegex(),Gi={...Dr,lheading:Bi,table:sn,paragraph:v(Ar).replace("hr",Rt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",sn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jt).getRegex()},Ki={...Dr,html:v(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",_r).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:je,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:v(Ar).replace("hr",Rt).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ln).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Vi=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Xi=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Dn=/^( {2,}|\\)\n(?!\s*$)/,Yi=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,er=/[\p{P}\p{S}]/u,Or=/[\s\p{P}\p{S}]/u,On=/[^\s\p{P}\p{S}]/u,Zi=v(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Or).getRegex(),In=/(?!~)[\p{P}\p{S}]/u,Qi=/(?!~)[\s\p{P}\p{S}]/u,Ji=/(?:[^\s\p{P}\p{S}]|~)/u,zn=/(?![*_])[\p{P}\p{S}]/u,es=/(?![*_])[\s\p{P}\p{S}]/u,ts=/(?:[^\s\p{P}\p{S}]|[*_])/u,rs=v(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Ii?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Nn=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ns=v(Nn,"u").replace(/punct/g,er).getRegex(),is=v(Nn,"u").replace(/punct/g,In).getRegex(),Fn="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ss=v(Fn,"gu").replace(/notPunctSpace/g,On).replace(/punctSpace/g,Or).replace(/punct/g,er).getRegex(),os=v(Fn,"gu").replace(/notPunctSpace/g,Ji).replace(/punctSpace/g,Qi).replace(/punct/g,In).getRegex(),as=v("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,On).replace(/punctSpace/g,Or).replace(/punct/g,er).getRegex(),ls=v(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,zn).getRegex(),cs="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",ds=v(cs,"gu").replace(/notPunctSpace/g,ts).replace(/punctSpace/g,es).replace(/punct/g,zn).getRegex(),ps=v(/\\(punct)/,"gu").replace(/punct/g,er).getRegex(),us=v(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),hs=v(_r).replace("(?:-->|$)","-->").getRegex(),fs=v("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",hs).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Mt=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,gs=v(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Mt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Un=v(/^!?\[(label)\]\[(ref)\]/).replace("label",Mt).replace("ref",Lr).getRegex(),Bn=v(/^!?\[(ref)\](?:\[\])?/).replace("ref",Lr).getRegex(),ms=v("reflink|nolink(?!\\()","g").replace("reflink",Un).replace("nolink",Bn).getRegex(),on=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ir={_backpedal:je,anyPunctuation:ps,autolink:us,blockSkip:rs,br:Dn,code:Xi,del:je,delLDelim:je,delRDelim:je,emStrongLDelim:ns,emStrongRDelimAst:ss,emStrongRDelimUnd:as,escape:Vi,link:gs,nolink:Bn,punctuation:Zi,reflink:Un,reflinkSearch:ms,tag:fs,text:Yi,url:je},bs={...Ir,link:v(/^!?\[(label)\]\((.*?)\)/).replace("label",Mt).getRegex(),reflink:v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Mt).getRegex()},br={...Ir,emStrongRDelimAst:os,emStrongLDelim:is,delLDelim:ls,delRDelim:ds,url:v(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",on).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:v(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",on).getRegex()},ws={...br,br:v(Dn).replace("{2,}","*").getRegex(),text:v(br.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},zt={normal:Dr,gfm:Gi,pedantic:Ki},ht={normal:Ir,gfm:br,breaks:ws,pedantic:bs},ys={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},an=r=>ys[r];function fe(r,e){if(e){if(M.escapeTest.test(r))return r.replace(M.escapeReplace,an)}else if(M.escapeTestNoEncode.test(r))return r.replace(M.escapeReplaceNoEncode,an);return r}function ln(r){try{r=encodeURI(r).replace(M.percentDecode,"%")}catch{return null}return r}function cn(r,e){let t=r.replace(M.findPipe,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),n=t.split(M.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(M.slashPipe,"|");return n}function ft(r,e,t){let n=r.length;if(n===0)return"";let i=0;for(;i<n&&r.charAt(n-i-1)===e;)i++;return r.slice(0,n-i)}function vs(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}function xs(r,e=0){let t=e,n="";for(let i of r)if(i==="	"){let s=4-t%4;n+=" ".repeat(s),t+=s}else n+=i,t++;return n}function dn(r,e,t,n,i){let s=e.href,o=e.title||null,a=r[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let l={type:r[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:o,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}function ks(r,e,t){let n=r.match(t.other.indentCodeCompensation);if(n===null)return e;let i=n[1];return e.split(`
`).map(s=>{let o=s.match(t.other.beginningSpace);if(o===null)return s;let[a]=o;return a.length>=i.length?s.slice(i.length):s}).join(`
`)}var qt=class{options;rules;lexer;constructor(r){this.options=r||Ve}space(r){let e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){let e=this.rules.block.code.exec(r);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:ft(t,`
`)}}}fences(r){let e=this.rules.block.fences.exec(r);if(e){let t=e[0],n=ks(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(r){let e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let n=ft(t,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(t=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){let e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:ft(e[0],`
`)}}blockquote(r){let e=this.rules.block.blockquote.exec(r);if(e){let t=ft(e[0],`
`).split(`
`),n="",i="",s=[];for(;t.length>0;){let o=!1,a=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))a.push(t[l]),o=!0;else if(!o)a.push(t[l]);else break;t=t.slice(l);let c=a.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${c}`:c,i=i?`${i}
${d}`:d;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,s,!0),this.lexer.state.top=u,t.length===0)break;let f=s.at(-1);if(f?.type==="code")break;if(f?.type==="blockquote"){let h=f,g=h.raw+`
`+t.join(`
`),C=this.blockquote(g);s[s.length-1]=C,n=n.substring(0,n.length-h.raw.length)+C.raw,i=i.substring(0,i.length-h.text.length)+C.text;break}else if(f?.type==="list"){let h=f,g=h.raw+`
`+t.join(`
`),C=this.list(g);s[s.length-1]=C,n=n.substring(0,n.length-f.raw.length)+C.raw,i=i.substring(0,i.length-h.raw.length)+C.raw,t=g.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:s,text:i}}}list(r){let e=this.rules.block.list.exec(r);if(e){let t=e[1].trim(),n=t.length>1,i={type:"list",raw:"",ordered:n,start:n?+t.slice(0,-1):"",loose:!1,items:[]};t=n?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=n?t:"[*+-]");let s=this.rules.other.listItemRegex(t),o=!1;for(;r;){let l=!1,c="",d="";if(!(e=s.exec(r))||this.rules.block.hr.test(r))break;c=e[0],r=r.substring(c.length);let u=xs(e[2].split(`
`,1)[0],e[1].length),f=r.split(`
`,1)[0],h=!u.trim(),g=0;if(this.options.pedantic?(g=2,d=u.trimStart()):h?g=e[1].length+1:(g=u.search(this.rules.other.nonSpaceChar),g=g>4?1:g,d=u.slice(g),g+=e[1].length),h&&this.rules.other.blankLine.test(f)&&(c+=f+`
`,r=r.substring(f.length+1),l=!0),!l){let C=this.rules.other.nextBulletRegex(g),A=this.rules.other.hrRegex(g),Z=this.rules.other.fencesBeginRegex(g),S=this.rules.other.headingBeginRegex(g),O=this.rules.other.htmlBeginRegex(g),Ye=this.rules.other.blockquoteBeginRegex(g);for(;r;){let te=r.split(`
`,1)[0],Ue;if(f=te,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),Ue=f):Ue=f.replace(this.rules.other.tabCharGlobal,"    "),Z.test(f)||S.test(f)||O.test(f)||Ye.test(f)||C.test(f)||A.test(f))break;if(Ue.search(this.rules.other.nonSpaceChar)>=g||!f.trim())d+=`
`+Ue.slice(g);else{if(h||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Z.test(u)||S.test(u)||A.test(u))break;d+=`
`+f}h=!f.trim(),c+=te+`
`,r=r.substring(te.length+1),u=Ue.slice(g)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(o=!0)),i.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),i.raw+=c}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}}let c=this.rules.other.listTaskCheckbox.exec(l.raw);if(c){let d={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};l.checked=d.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=d.raw+l.tokens[0].raw,l.tokens[0].text=d.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(d)):l.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):l.tokens.unshift(d)}}if(!i.loose){let c=l.tokens.filter(u=>u.type==="space"),d=c.length>0&&c.some(u=>this.rules.other.anyLine.test(u.raw));i.loose=d}}if(i.loose)for(let l of i.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return i}}html(r){let e=this.rules.block.html.exec(r);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(r){let e=this.rules.block.def.exec(r);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:n,title:i}}}table(r){let e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=cn(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===n.length){for(let o of n)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<t.length;o++)s.header.push({text:t[o],tokens:this.lexer.inline(t[o]),header:!0,align:s.align[o]});for(let o of i)s.rows.push(cn(o,s.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:s.align[l]})));return s}}lheading(r){let e=this.rules.block.lheading.exec(r);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(r){let e=this.rules.block.paragraph.exec(r);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){let e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){let e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){let e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){let e=this.rules.inline.link.exec(r);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=ft(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=vs(e[2],"()");if(s===-2)return;if(s>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(n);s&&(n=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?n=n.slice(1):n=n.slice(1,-1)),dn(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){let n=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[n.toLowerCase()];if(!i){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return dn(t,i,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let n=this.rules.inline.emStrongLDelim.exec(r);if(!(!n||n[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!t||this.rules.inline.punctuation.exec(t))){let i=[...n[0]].length-1,s,o,a=i,l=0,c=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*r.length+i);(n=c.exec(e))!=null;){if(s=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!s)continue;if(o=[...s].length,n[3]||n[4]){a+=o;continue}else if((n[5]||n[6])&&i%3&&!((i+o)%3)){l+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a+l);let d=[...n[0]][0].length,u=r.slice(0,i+n.index+d+o);if(Math.min(i,o)%2){let h=u.slice(1,-1);return{type:"em",raw:u,text:h,tokens:this.lexer.inlineTokens(h)}}let f=u.slice(2,-2);return{type:"strong",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(r){let e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return n&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){let e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r,e,t=""){let n=this.rules.inline.delLDelim.exec(r);if(n&&(!n[1]||!t||this.rules.inline.punctuation.exec(t))){let i=[...n[0]].length-1,s,o,a=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*r.length+i);(n=l.exec(e))!=null;){if(s=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!s||(o=[...s].length,o!==i))continue;if(n[3]||n[4]){a+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a);let c=[...n[0]][0].length,d=r.slice(0,i+n.index+c+o),u=d.slice(i,-i);return{type:"del",raw:d,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(r){let e=this.rules.inline.autolink.exec(r);if(e){let t,n;return e[2]==="@"?(t=e[1],n="mailto:"+t):(t=e[1],n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(r){let e;if(e=this.rules.inline.url.exec(r)){let t,n;if(e[2]==="@")t=e[0],n="mailto:"+t;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);t=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(r){let e=this.rules.inline.text.exec(r);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},ae=class wr{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ve,this.options.tokenizer=this.options.tokenizer||new qt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:M,block:zt.normal,inline:ht.normal};this.options.pedantic?(t.block=zt.pedantic,t.inline=ht.pedantic):this.options.gfm&&(t.block=zt.gfm,this.options.breaks?t.inline=ht.breaks:t.inline=ht.gfm),this.tokenizer.rules=t}static get rules(){return{block:zt,inline:ht}}static lex(e,t){return new wr(t).lex(e)}static lexInline(e,t){return new wr(t).inlineTokens(e)}lex(e){e=e.replace(M.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(M.tabCharGlobal,"    ").replace(M.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(o=>(i=o.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let o=t.at(-1);i.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let o=1/0,a=e.slice(1),l;this.options.extensions.startBlock.forEach(c=>{l=c.call({lexer:this},a),typeof l=="number"&&l>=0&&(o=Math.min(o,l))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){let o=t.at(-1);n&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i),n=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,i=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)l.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)s=i[2]?i[2].length:0,n=n.slice(0,i.index+s)+"["+"a".repeat(i[0].length-s-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let o=!1,a="";for(;e;){o||(a=""),o=!1;let l;if(this.options.extensions?.inline?.some(d=>(l=d.call({lexer:this},e,t))?(e=e.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let d=t.at(-1);l.type==="text"&&d?.type==="text"?(d.raw+=l.raw,d.text+=l.text):t.push(l);continue}if(l=this.tokenizer.emStrong(e,n,a)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.del(e,n,a)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),t.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),t.push(l);continue}let c=e;if(this.options.extensions?.startInline){let d=1/0,u=e.slice(1),f;this.options.extensions.startInline.forEach(h=>{f=h.call({lexer:this},u),typeof f=="number"&&f>=0&&(d=Math.min(d,f))}),d<1/0&&d>=0&&(c=e.substring(0,d+1))}if(l=this.tokenizer.inlineText(c)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(a=l.raw.slice(-1)),o=!0;let d=t.at(-1);d?.type==="text"?(d.raw+=l.raw,d.text+=l.text):t.push(l);continue}if(e){let d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}},Ht=class{options;parser;constructor(r){this.options=r||Ve}space(r){return""}code({text:r,lang:e,escaped:t}){let n=(e||"").match(M.notSpaceStart)?.[0],i=r.replace(M.endingNewline,"")+`
`;return n?'<pre><code class="language-'+fe(n)+'">'+(t?i:fe(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:fe(i,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){let e=r.ordered,t=r.start,n="";for(let o=0;o<r.items.length;o++){let a=r.items[o];n+=this.listitem(a)}let i=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
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
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${fe(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:t}){let n=this.parser.parseInline(t),i=ln(r);if(i===null)return n;r=i;let s='<a href="'+r+'"';return e&&(s+=' title="'+fe(e)+'"'),s+=">"+n+"</a>",s}image({href:r,title:e,text:t,tokens:n}){n&&(t=this.parser.parseInline(n,this.parser.textRenderer));let i=ln(r);if(i===null)return fe(t);r=i;let s=`<img src="${r}" alt="${fe(t)}"`;return e&&(s+=` title="${fe(e)}"`),s+=">",s}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:fe(r.text)}},zr=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}checkbox({raw:r}){return r}},le=class yr{options;renderer;textRenderer;constructor(e){this.options=e||Ve,this.options.renderer=this.options.renderer||new Ht,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new zr}static parse(e,t){return new yr(t).parse(e)}static parseInline(e,t){return new yr(t).parseInline(e)}parse(e){let t="";for(let n=0;n<e.length;n++){let i=e[n];if(this.options.extensions?.renderers?.[i.type]){let o=i,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){t+=a||"";continue}}let s=i;switch(s.type){case"space":{t+=this.renderer.space(s);break}case"hr":{t+=this.renderer.hr(s);break}case"heading":{t+=this.renderer.heading(s);break}case"code":{t+=this.renderer.code(s);break}case"table":{t+=this.renderer.table(s);break}case"blockquote":{t+=this.renderer.blockquote(s);break}case"list":{t+=this.renderer.list(s);break}case"checkbox":{t+=this.renderer.checkbox(s);break}case"html":{t+=this.renderer.html(s);break}case"def":{t+=this.renderer.def(s);break}case"paragraph":{t+=this.renderer.paragraph(s);break}case"text":{t+=this.renderer.text(s);break}default:{let o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}parseInline(e,t=this.renderer){let n="";for(let i=0;i<e.length;i++){let s=e[i];if(this.options.extensions?.renderers?.[s.type]){let a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=a||"";continue}}let o=s;switch(o.type){case"escape":{n+=t.text(o);break}case"html":{n+=t.html(o);break}case"link":{n+=t.link(o);break}case"image":{n+=t.image(o);break}case"checkbox":{n+=t.checkbox(o);break}case"strong":{n+=t.strong(o);break}case"em":{n+=t.em(o);break}case"codespan":{n+=t.codespan(o);break}case"br":{n+=t.br(o);break}case"del":{n+=t.del(o);break}case"text":{n+=t.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}},bt=class{options;block;constructor(r){this.options=r||Ve}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(){return this.block?ae.lex:ae.lexInline}provideParser(){return this.block?le.parse:le.parseInline}},$s=class{defaults=Tr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=le;Renderer=Ht;TextRenderer=zr;Lexer=ae;Tokenizer=qt;Hooks=bt;constructor(...r){this.use(...r)}walkTokens(r,e){let t=[];for(let n of r)switch(t=t.concat(e.call(this,n)),n.type){case"table":{let i=n;for(let s of i.header)t=t.concat(this.walkTokens(s.tokens,e));for(let s of i.rows)for(let o of s)t=t.concat(this.walkTokens(o.tokens,e));break}case"list":{let i=n;t=t.concat(this.walkTokens(i.items,e));break}default:{let i=n;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{let o=i[s].flat(1/0);t=t.concat(this.walkTokens(o,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...r){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(t=>{let n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let s=e.renderers[i.name];s?e.renderers[i.name]=function(...o){let a=i.renderer.apply(this,o);return a===!1&&(a=s.apply(this,o)),a}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),t.renderer){let i=this.defaults.renderer||new Ht(this.defaults);for(let s in t.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let o=s,a=t.renderer[o],l=i[o];i[o]=(...c)=>{let d=a.apply(i,c);return d===!1&&(d=l.apply(i,c)),d||""}}n.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new qt(this.defaults);for(let s in t.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,a=t.tokenizer[o],l=i[o];i[o]=(...c)=>{let d=a.apply(i,c);return d===!1&&(d=l.apply(i,c)),d}}n.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new bt;for(let s in t.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let o=s,a=t.hooks[o],l=i[o];bt.passThroughHooks.has(s)?i[o]=c=>{if(this.defaults.async&&bt.passThroughHooksRespectAsync.has(s))return(async()=>{let u=await a.call(i,c);return l.call(i,u)})();let d=a.call(i,c);return l.call(i,d)}:i[o]=(...c)=>{if(this.defaults.async)return(async()=>{let u=await a.apply(i,c);return u===!1&&(u=await l.apply(i,c)),u})();let d=a.apply(i,c);return d===!1&&(d=l.apply(i,c)),d}}n.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,s=t.walkTokens;n.walkTokens=function(o){let a=[];return a.push(s.call(this,o)),i&&(a=a.concat(i.call(this,o))),a}}this.defaults={...this.defaults,...n}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return ae.lex(r,e??this.defaults)}parser(r,e){return le.parse(r,e??this.defaults)}parseMarkdown(r){return(e,t)=>{let n={...t},i={...this.defaults,...n},s=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=r),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(e):e,a=await(i.hooks?await i.hooks.provideLexer():r?ae.lex:ae.lexInline)(o,i),l=i.hooks?await i.hooks.processAllTokens(a):a;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let c=await(i.hooks?await i.hooks.provideParser():r?le.parse:le.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(c):c})().catch(s);try{i.hooks&&(e=i.hooks.preprocess(e));let o=(i.hooks?i.hooks.provideLexer():r?ae.lex:ae.lexInline)(e,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let a=(i.hooks?i.hooks.provideParser():r?le.parse:le.parseInline)(o,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(o){return s(o)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let n="<p>An error occurred:</p><pre>"+fe(t.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(t);throw t}}},Me=new $s;function k(r,e){return Me.parse(r,e)}k.options=k.setOptions=function(r){return Me.setOptions(r),k.defaults=Me.defaults,Pn(k.defaults),k};k.getDefaults=Tr;k.defaults=Ve;k.use=function(...r){return Me.use(...r),k.defaults=Me.defaults,Pn(k.defaults),k};k.walkTokens=function(r,e){return Me.walkTokens(r,e)};k.parseInline=Me.parseInline;k.Parser=le;k.parser=le.parse;k.Renderer=Ht;k.TextRenderer=zr;k.Lexer=ae;k.lexer=ae.lex;k.Tokenizer=qt;k.Hooks=bt;k.parse=k;k.options;k.setOptions;k.use;k.walkTokens;k.parseInline;le.parse;ae.lex;const jn="app-toolbars-main",ct="app-toolbars-main-right",Wn="app-toolbars-main-center",Mn="app-toolbars-bottom",tr="app-toolbars-bottom-center",Tt="app-toolbars-bottom-end",qn="system-views",Gt="system.layouts",ke="editor-area-main",Kt="sidebar-main",Hn="sidebar-main-bottom",Gn="sidebar-auxiliary",Nr="panel-bottom",Es="command-save",Kn=!1;var Fr=(r=>(r[r.LEFT=0]="LEFT",r[r.MIDDLE=1]="MIDDLE",r[r.RIGHT=2]="RIGHT",r[r.BACK=3]="BACK",r[r.FORWARD=4]="FORWARD",r))(Fr||{});const Ss=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:Es,EDITOR_AREA_MAIN:ke,HIDE_DOT_RESOURCE:Kn,MouseButton:Fr,PANEL_BOTTOM:Nr,SIDEBAR_AUXILIARY:Gn,SIDEBAR_MAIN:Kt,SIDEBAR_MAIN_BOTTOM:Hn,SYSTEM_LAYOUTS:Gt,SYSTEM_VIEWS:qn,TOOLBAR_BOTTOM:Mn,TOOLBAR_BOTTOM_CENTER:tr,TOOLBAR_BOTTOM_END:Tt,TOOLBAR_MAIN:jn,TOOLBAR_MAIN_CENTER:Wn,TOOLBAR_MAIN_RIGHT:ct},Symbol.toStringTag,{value:"Module"})),Cs="eclipse-lyra-persistence",wt="keyval",Rs=1;let sr=null;function pn(){return sr||(sr=new Promise((r,e)=>{const t=indexedDB.open(Cs,Rs);t.onerror=()=>e(t.error),t.onsuccess=()=>r(t.result),t.onupgradeneeded=n=>{n.target.result.createObjectStore(wt)}})),sr}class Ts{async persistObject(e,t){const n=await pn();return new Promise((i,s)=>{const a=n.transaction(wt,"readwrite").objectStore(wt),l=t==null?a.delete(e):a.put(t,e);l.onsuccess=()=>i(),l.onerror=()=>s(l.error)})}async getObject(e){const t=await pn();return new Promise((n,i)=>{const o=t.transaction(wt,"readonly").objectStore(wt).get(e);o.onsuccess=()=>n(o.result),o.onerror=()=>i(o.error)})}}const ce=new Ts;F.put("persistenceService",ce);const Ze=".geospace/settings.json",or="dialogSettings",We="events/settings/changed";function Vn(r,e){if(e){for(const[t,n]of Object.entries(e))if(n&&typeof n=="object"){const i=r[t];i?.properties&&n.properties?Vn(i.properties,n.properties):r[t]={...n,properties:n.properties?{...n.properties}:void 0}}}}class Ps{constructor(){this.mergedSchema={type:"object",properties:{}}}async checkSettings(){this.appSettings||(this.appSettings=await ce.getObject(Ze),this.appSettings||(this.appSettings={},await ce.persistObject(Ze,this.appSettings)),w(We,this.appSettings))}registerSchema(e){const t=e.properties??(e.type==="object"?{}:void 0);t&&(this.mergedSchema.properties||(this.mergedSchema.properties={}),Vn(this.mergedSchema.properties,t))}getCategories(){const e=this.mergedSchema.properties;return e?Object.entries(e).filter(([,t])=>t&&typeof t=="object").map(([t,n])=>({id:t,label:n.title??t,order:typeof n.order=="number"?n.order:0,schema:n})).sort((t,n)=>t.order-n.order):[]}getSchemaForCategory(e){return this.mergedSchema.properties?.[e]}getSchemaForSettingKey(e){const t=e.split(".").filter(Boolean);if(t.length===0)return this.mergedSchema;let n=this.mergedSchema;for(const i of t)if(n=n?.properties?.[i],!n)return;return n}traversePath(e,t,n){if(t.length===0)return null;let i=e;const s=t.length-1;for(let o=0;o<s;o++){const a=t[o];if(i[a]===void 0){if(!n)return null;i[a]={}}if(i[a]===null||typeof i[a]!="object")return null;i=i[a]}return{parent:i,key:t[s]}}async getAt(e){await this.checkSettings();const t=e.split(".").filter(Boolean);if(t.length===0)return this.appSettings;const n=this.traversePath(this.appSettings,t,!1);if(n)return n.parent[n.key]}async setAt(e,t){await this.checkSettings();const n=e.split(".").filter(Boolean);if(n.length===0)return;const i=this.traversePath(this.appSettings,n,!0);i&&(i.parent[i.key]=t,await ce.persistObject(Ze,this.appSettings),w(We,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,t){await this.checkSettings(),this.appSettings[e]=t,await ce.persistObject(Ze,this.appSettings),w(We,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await ce.persistObject(Ze,this.appSettings),w(We,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[or]||{})[e]}async setDialogSetting(e,t){await this.checkSettings();const n=this.appSettings[or]||{};n[e]=t,this.appSettings[or]=n,await ce.persistObject(Ze,this.appSettings),w(We,this.appSettings)}}const L=new Ps;F.put("appSettings",L);class As{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,mr.set(this.updateCounter)}run(e,t){const n=this.createProgressMonitor(e);try{this.tasks.push(n),this.notifyUpdate(),t(n)}finally{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()}}async runAsync(e,t){const n=this.createProgressMonitor(e);return this.tasks.push(n),this.notifyUpdate(),t(n).finally(()=>{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()})}createProgressMonitor(e){const t={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(t,{set:(n,i,s)=>(n[i]=s,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const rt=new As;F.put("taskService",rt);const Ls=Ce("EsmShService"),Pt=class J{isEsmShUrl(e){try{const t=new URL(e);return t.hostname==="esm.sh"||t.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(e){return this.isEsmShUrl(e)||this.isHttpUrl(e)?!1:this.parseSource(e)!==null}isHttpUrl(e){try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}parseSource(e){return!e||typeof e!="string"||(e=e.trim(),this.isHttpUrl(e))?null:e.startsWith(J.GITHUB_PREFIX)?this.parseGitHubSource(e):e.startsWith(J.JSR_PREFIX)?this.parseJsrSource(e):e.startsWith(J.PR_PREFIX)?this.parsePrSource(e):this.parseNpmSource(e)}parseGitHubSource(e){const n=e.substring(J.GITHUB_PREFIX.length).split("/");if(n.length<2)return null;const i=n[0],s=n[1];let o,a,l;const c=s.match(/^(.+?)(@(.+))?$/);return c?(o=c[1],a=c[3],n.length>2&&(l=n.slice(2).join("/")),{type:"github",owner:i,repo:o,version:a,path:l}):null}parseJsrSource(e){const t=e.substring(J.JSR_PREFIX.length);if(!t.startsWith("@"))return null;const n=t.split("/");if(n.length<2)return null;const i=n[0],s=n[1];let o,a,l;const c=s.match(/^(.+?)(@(.+))?$/);return c?(o=`${i}/${c[1]}`,a=c[3],n.length>2&&(l=n.slice(2).join("/")),{type:"jsr",package:o,version:a,path:l}):null}parsePrSource(e){const n=e.substring(J.PR_PREFIX.length).split("/");if(n.length<2)return null;const i=n[0],s=n[1];let o,a;const l=s.match(/^(.+?)@(.+)$/);return l?(o=l[1],a=l[2]):o=s,{type:"pr",owner:i,repo:o,commit:a}}parseNpmSource(e){const t=e.split("/"),n=t[0];let i,s,o;const a=n.match(/^(.+?)(@(.+))?$/);return a?(i=a[1],s=a[3],t.length>1&&(o=t.slice(1).join("/")),{type:"npm",package:i,version:s,path:o}):null}buildEsmShUrl(e,t){let n=J.ESM_SH_BASE;switch(e.type){case"npm":n+=`/${e.package}`,e.version&&(n+=`@${e.version}`),e.path&&(n+=`/${e.path}`);break;case"github":n+=`/${J.GITHUB_PREFIX}${e.owner}/${e.repo}`,e.version&&(n+=`@${e.version}`),e.path&&(n+=`/${e.path}`);break;case"jsr":n+=`/${J.JSR_PREFIX}${e.package}`,e.version&&(n+=`@${e.version}`),e.path&&(n+=`/${e.path}`);break;case"pr":n+=`/${J.PR_PREFIX}${e.owner}/${e.repo}`,e.commit&&(n+=`@${e.commit}`);break}const i=[];if(t?.deps){const s=Object.entries(t.deps).map(([o,a])=>`${o}@${a}`).join(",");i.push(`deps=${encodeURIComponent(s)}`)}return t?.target&&i.push(`target=${encodeURIComponent(t.target)}`),t?.dev&&i.push("dev"),t?.bundle===!1?i.push("bundle=false"):t?.bundle===!0&&i.push("bundle"),i.length>0&&(n+=`?${i.join("&")}`),n}normalizeToEsmSh(e,t){if(this.isEsmShUrl(e)||this.isHttpUrl(e))return e;const n=this.parseSource(e);return n?this.buildEsmShUrl(n,t):(Ls.warn(`Could not parse source identifier: ${e}`),e)}extractPackageName(e){const t=this.parseSource(e);if(!t)return null;switch(t.type){case"npm":return t.package||null;case"github":return`${t.owner}/${t.repo}`;case"jsr":return t.package||null;case"pr":return`${t.owner}/${t.repo}`}}isGitHubUrl(e){try{const t=new URL(e);return t.hostname==="github.com"||t.hostname==="www.github.com"}catch{return e.startsWith("https://github.com/")||e.startsWith("http://github.com/")}}convertGitHubUrlToSource(e){try{const n=new URL(e).pathname.split("/").filter(c=>c);if(n.length<2)throw new Error("Invalid GitHub URL format");const i=n[0];let s=n[1].replace(/\.git$/,""),o,a;n.length>2&&(n[2]==="blob"||n[2]==="tree"?(o=n[3]||"main",n[2]==="blob"&&n.length>4&&(a=n.slice(4).join("/"))):n[2]==="commit"?o=n[3]:a=n.slice(2).join("/"));let l=`${J.GITHUB_PREFIX}${i}/${s}`;return o&&(l+=`@${o}`),a&&(l+=`/${a}`),l}catch{const t=e.match(/github\.com\/([^\/]+)\/([^\/]+)/);return t?`${J.GITHUB_PREFIX}${t[1]}/${t[2].replace(/\.git$/,"")}`:e}}async fetchGitHubPackageJson(e){if(e.type!=="github")throw new Error("Source must be a GitHub source");const t=e.owner,n=e.repo,i=e.version||"main",s=`https://raw.githubusercontent.com/${t}/${n}/${i}/package.json`,o=await fetch(s);if(!o.ok)throw new Error(`Failed to fetch package.json: ${o.statusText}`);return await o.json()}};Pt.ESM_SH_BASE="https://esm.sh";Pt.GITHUB_PREFIX="gh/";Pt.JSR_PREFIX="jsr/";Pt.PR_PREFIX="pr/";let _s=Pt;const we=new _s;F.put("esmShService",we);const yt="events/extensionsregistry/extensionsConfigChanged",gt="extensions",un="extensions.external";class Ds{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,G(We,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then()})}async loadPersistedExternalExtensions(){try{const e=await L.get(un);e&&Array.isArray(e)&&e.forEach(t=>{this.extensions[t.id]=t})}catch(e){E.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(t=>t.external);await L.set(un,e)}catch(e){E.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await L.get(gt),this.extensionsSettings||(await L.set(gt,[]),this.extensionsSettings=await L.get(gt)),w(yt,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,E.debug(`Registered extension: ${e.id}`),e.external&&this.savePersistedExternalExtensions().catch(t=>{E.error(`Failed to persist external extension: ${t}`)}),w(yt,this.extensionsSettings)}async loadExtensionFromUrl(e,t){E.info(`Loading extension from URL: ${e}...`);try{let n=e,i=`Extension from ${e}`;if(we.isSourceIdentifier(e)){const o=we.extractPackageName(e);o&&(i=`Extension: ${o}`),n=we.normalizeToEsmSh(e),E.debug(`Converted source identifier to esm.sh URL: ${e} -> ${n}`)}const s=t||`url:${n}`;if(this.isEnabled(s))return E.info(`Extension from URL ${n} is already enabled`),s;if(!this.extensions[s]){const o={id:s,name:i,description:`Extension loaded from: ${e}`,url:n};this.registerExtension(o),E.info(`Registered extension from URL: ${s}`)}return this.enable(s,!1),E.info(`Successfully enabled extension from URL: ${n}`),s}catch(n){throw E.error(`Failed to load extension from URL ${e}: ${n}`),n}}getExtensions(){return Object.values(this.extensions)}async loadEnabledExtensions(){await this.checkExtensionsConfig();const t=(this.extensionsSettings??[]).filter(n=>this.isEnabled(n.id)&&this.extensions[n.id]).map(n=>this.load(n.id).catch(i=>{T("Extension could not be loaded: "+i.message)}));await Promise.all(t)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(t=>t.id===e&&t.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,t=!1){this.isEnabled(e)||(E.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,t)}).catch(n=>{E.error(`Could not load extension: ${e}: ${n}`)}))}async enableAsync(e,t=!1){if(!this.isEnabled(e)){E.debug(`Loading extension: ${e}`);try{await this.load(e),this.updateEnablement(e,!0,t)}catch(n){throw E.error(`Could not load extension: ${e}: ${n}`),n}}}async load(e,t=[]){if(this.loadedExtensions.has(e))return;const n=this.loadingPromises.get(e);if(n)return n;if(t.includes(e)){const o=[...t,e].join(" → ");throw new Error(`Circular dependency detected: ${o}`)}const i=this.extensions[e];if(!i)throw new Error("Extension not found: "+e);const s=(async()=>{try{if(E.debug(`Loading extension: ${e}`),i.dependencies&&i.dependencies.length>0){const a=[...t,e];for(const l of i.dependencies)await this.load(l,a),this.isEnabled(l)||(await this.updateEnablementAsync(l,!0,!1),E.debug(`Auto-enabled dependency: ${l}`))}const o=await rt.runAsync("Loading extension: "+i.name,async()=>{if(i.loader)return i.loader();if(i.url){let a=i.url;return we.isSourceIdentifier(i.url)&&(a=we.normalizeToEsmSh(i.url),E.debug(`Normalized extension URL: ${i.url} -> ${a}`)),import(a)}});if(this.loadedExtensions.add(e),o?.default instanceof Function)try{o.default(Ne.getProxy())}catch(a){throw E.error(`Error executing extension function for ${e}: ${a}`),a}}catch(o){throw this.loadedExtensions.delete(e),o}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,s),s}disable(e,t=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,t)}updateEnablement(e,t,n){this.checkExtensionsConfig().then(()=>{const i=this.extensionsSettings?.find(s=>s.id==e);i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),L.set(gt,this.extensionsSettings).then(()=>{if(n){const s=this.extensions[e];$e(t?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}w(yt,this.extensionsSettings)})})}async updateEnablementAsync(e,t,n){await this.checkExtensionsConfig();const i=this.extensionsSettings?.find(s=>s.id==e);if(i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),await L.set(gt,this.extensionsSettings),n){const s=this.extensions[e];$e(t?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}w(yt,this.extensionsSettings)}}const R=new Ds;F.put("extensionRegistry",R);const hn=["alt","ctrl","meta","shift"],Xn={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},Os={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},Is={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},zs=new Set(Object.keys(Xn));function fn(r){return Is[r]??r}class Ns{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),G(Rn,e=>{e.keyBinding&&this.registerKeyBinding(e.id,e.keyBinding)})}registerExistingCommandBindings(){const e=Ee.listCommands();Object.values(e).forEach(t=>{t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)})}parseKeyBinding(e){if(!e||e.trim()==="")return null;const t=e.toUpperCase().split("+").map(o=>o.trim());if(t.length===0)return null;const n=t[t.length-1],i=t.slice(0,-1);if(t.length===1&&zs.has(n))return null;const s={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const o of i){const a=Xn[o];if(a===void 0)return null;s[a]=!0}return s.key=fn(n),s}getBindingKey(e){return[...hn.filter(n=>e[n]),e.key.toUpperCase()].join("+")}registerKeyBinding(e,t){const n=this.parseKeyBinding(t);if(!n)return E.error(`Invalid key binding: ${t}`),!1;n.commandId=e;const i=this.getBindingKey(n);this.bindings.has(i)||this.bindings.set(i,[]);const s=this.bindings.get(i);if(s.find(l=>l.commandId===e))return E.error(`Key binding ${t} already registered for command ${e}`),!1;const a=s.find(l=>l.commandId!==e);return a?(E.warn(`Key binding ${t} already used by command ${a.commandId}; refusing for ${e}`),!1):(s.push(n),!0)}unregisterKeyBinding(e,t){if(t){const n=this.parseKeyBinding(t);if(n){const i=this.getBindingKey(n),s=this.bindings.get(i);if(s){const o=s.filter(a=>a.commandId!==e);o.length===0?this.bindings.delete(i):this.bindings.set(i,o)}}}else for(const[n,i]of this.bindings.entries()){const s=i.filter(o=>o.commandId!==e);s.length===0?this.bindings.delete(n):this.bindings.set(n,s)}}getKeyBindingsForCommand(e){const t=[];for(const n of this.bindings.values())for(const i of n)i.commandId===e&&t.push(this.formatKeyBinding(i));return t.sort()}formatKeyBinding(e){const t=hn.filter(i=>e[i]).map(i=>Os[i]),n=e.key.length===1?e.key.toUpperCase():e.key.charAt(0).toUpperCase()+e.key.slice(1).toLowerCase();return t.push(n),t.join("+")}handleKeyDown(e){if(!this.enabled)return;const t={commandId:"",key:fn(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},n=this.getBindingKey(t),i=this.bindings.get(n);if(i&&i.length>0){const s=i[0];try{e.preventDefault(),e.stopPropagation();const o=Ee.createExecutionContext({});Ee.execute(s.commandId,o),E.debug(`Executed command via key binding: ${s.commandId}`)}catch(o){E.error(`Failed to execute command ${s.commandId}: ${o.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){const e=new Map;for(const[t,n]of this.bindings)e.set(t,[...n]);return e}clearAll(){this.bindings.clear()}}const Yn=new Ns;F.put("keyBindingManager",Yn);class Fe extends Qt{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let t=this;for(;t&&t!==document.body&&t!==document.documentElement;){const n=t.getAttribute("id");if(n){e.unshift(`#${n}`);break}const i=t.tagName.toLowerCase(),s=t.parentElement;if(!s)break;const a=Array.from(s.children).filter(l=>l.tagName.toLowerCase()===i).indexOf(t);a>=0?e.unshift(`${i}:${a}`):e.unshift(i),t=s}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),t=this.getAttribute("id");if(t){this.settingsKey=`${e}:${t}`;return}const n=this.buildDOMTreePath();n&&(this.settingsKey=`${e}:${n}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await L.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await L.setDialogSetting(this.settingsKey,e)}}const Zn=class extends Fe{dispose(){}getResult(){}renderMessage(e,t=!1){if(t){const n=k.parse(e,{async:!1});return p`<div class="dialog-message" style="white-space: normal;">${Ct(n)}</div>`}return p`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};Zn.styles=[j`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let Re=Zn;const Be=Ce("DialogService"),qe="dialogs",At={id:"ok",label:"OK",variant:"primary"},Ur={id:"cancel",label:"Cancel",variant:"default"},Fs={id:"close",label:"Close",variant:"default"};let Qe=null;function Us(){return(!Qe||!document.body.contains(Qe))&&(Qe=document.createElement("div"),Qe.id="global-dialog-container",document.body.appendChild(Qe)),Qe}class Bs{constructor(){this.contributions=new Map,this.contributionsChangeScheduled=!1,this.loadContributions(),G(ue,e=>{e.target===qe&&(this.contributionsChangeScheduled||(this.contributionsChangeScheduled=!0,queueMicrotask(()=>{this.contributionsChangeScheduled=!1,this.loadContributions()})))})}loadContributions(){const e=x.getContributions(qe);this.contributions.clear();for(const t of e){if(!t.id){Be.warn("Dialog contribution missing id, skipping");continue}if(!t.component){Be.warn(`Dialog contribution "${t.id}" has no component function, skipping`);continue}if(!t.onButton){Be.warn(`Dialog contribution "${t.id}" has no onButton callback, skipping`);continue}this.contributions.set(t.id,t)}}async open(e,t){const n=this.contributions.get(e);if(!n)throw Be.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(i=>{const s=Us();let o=!0,a=null;const l=async()=>{if(o){if(o=!1,a)try{await a.dispose()}catch(h){const g=h instanceof Error?h.message:String(h);Be.error(`Error disposing dialog content for "${e}": ${g}`)}try{const h=a?a.getResult():void 0;await n.onButton("close",h,u)}catch(h){const g=h instanceof Error?h.message:String(h);Be.error(`Error executing close callback for dialog "${e}": ${g}`)}pe(p``,s),i()}},c=async h=>{try{const g=a?a.getResult():void 0;await n.onButton(h,g,u)!==!1&&l()}catch(g){const C=g instanceof Error?g.message:String(g);Be.error(`Error executing button callback for dialog "${e}": ${C}`),l()}},d=n.buttons&&n.buttons.length>0?n.buttons:[At];t&&typeof t=="object"&&(t.close=l);const u={...t,close:l},f=p`
                <wa-dialog label="${n.label||e}" open @wa-request-close=${l}>
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
                         @dialog-cancel=${()=>{const h=d.find(g=>g.id==="cancel");h?c(h.id):l()}}>
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
            `;pe(f,s),(async()=>{const h=Array.from(s.querySelectorAll("*"));for(const g of h)if(g instanceof Re){await g.updateComplete,a=g;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const rr=new Bs;F.put("dialogService",rr);const ee="events/filesys/workspaceChanged",xe="events/filesys/workspaceConnected",U=Ce("WorkspaceService");class Qn{constructor(){this.state={}}getWorkspacePath(){const e=[];let t=this,n;for(;t;){e.push(t.getName());const s=t.getParent();s||(n=t),t=s}e.reverse();const i=typeof y?.getWorkspaceSync=="function"?y.getWorkspaceSync():void 0;if(i&&n&&"isDirectChild"in i&&typeof i.isDirectChild=="function"&&i.isDirectChild(n)){const s=i.getFolderNameForDirectory(n);if(s&&e.length>0)return e.length>1?s+"/"+e.slice(1).join("/"):s}return e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const t=e.getParent();if(t)e=t;else break}return e}}var Br=(r=>(r[r.TEXT=0]="TEXT",r[r.BINARY=1]="BINARY",r))(Br||{}),Jn=(r=>(r[r.BASE64=0]="BASE64",r))(Jn||{});class W extends Qn{}class q extends Qn{}class Ea extends W{constructor(e,t){super(),this.contents=e,this.name=t}async getContents(e){return this.contents}async saveContents(e,t){this.contents=e}async size(){return this.contents.length||null}async copyTo(e){throw Error("Not supported")}delete(e,t){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class js extends q{constructor(e,t="/"){super(),this.displayName=t,this.entriesByName=new Map(e.map(n=>[n.getName(),n]))}getFolderNameForDirectory(e){for(const[t,n]of this.entriesByName)if(n===e)return t}isDirectChild(e){return this.getFolderNameForDirectory(e)!==void 0}getName(){return this.displayName}getParent(){}async listChildren(e){return Array.from(this.entriesByName.values())}async getResource(e,t){const n=e?.replace(/^\/+/,"").trim();if(!n)return null;const i=n.indexOf("/"),s=i>=0?n.slice(0,i).trim():n.trim(),o=i>=0?n.slice(i+1).trim():"",a=this.entriesByName.get(s);return a?o?a.getResource(o,t):a:null}touch(){for(const e of this.entriesByName.values())e.touch()}async delete(e,t){throw new Error("Delete not supported on workspace root")}async copyTo(e){throw new Error("Copy not supported on workspace root")}async rename(e){throw new Error("Rename not supported on workspace root")}getFolderByName(e){return this.entriesByName.get(e)}}class ar extends q{constructor(e){super(),this.backendType=e.backendType,this.persistedData=e.data,this.name=e.name}getName(){return this.name}getParent(){}async listChildren(e){return[]}async getResource(e,t){throw new Error(`Workspace backend "${this.backendType}" is not available in this environment.`)}touch(){}async delete(e,t){throw new Error(`Cannot modify workspace folder for missing backend "${this.backendType}".`)}async copyTo(e){throw new Error(`Cannot copy from workspace folder for missing backend "${this.backendType}".`)}async rename(e){throw new Error(`Cannot rename workspace folder for missing backend "${this.backendType}".`)}}const lr="workspace_data",ei=class ti{constructor(){this._currentWorkspace=void 0,this.folders=[],this.contributions=new Map,this.restoredTypes=new Set;let e;this.initPromise=new Promise(t=>{e=t}),this.loadPersistedWorkspace(e)}getWorkspaceSync(){return this._currentWorkspace}registerContribution(e){this.contributions.set(e.type,e),this.tryRestoreForContribution(e)}getContributions(){return Array.from(this.contributions.values())}async tryRestoreForContribution(e){if(await this.initPromise,this.restoredTypes.has(e.type))return;if(this.folders.filter(a=>a.type===e.type).some(a=>!(a.directory instanceof ar))){this.restoredTypes.add(e.type);return}const i=await ce.getObject(lr);if(!i?.folders||!Array.isArray(i.folders)){this.restoredTypes.add(e.type);return}const s=i.folders.filter(a=>a.type===e.type);if(s.length===0){this.restoredTypes.add(e.type);return}this.folders=this.folders.filter(a=>!(a.type===e.type&&a.directory instanceof ar));for(const a of s)if(e.restore)try{const l=await e.restore(a.data);if(!l)continue;this.folders.push({type:e.type,data:a.data,directory:l})}catch(l){U.warn(`Failed to restore folder (${e.type}) on contribution registration:`,l)}if(this.folders.length===0){this.restoredTypes.add(e.type);return}const o=this.buildComposite();this.workspace=Promise.resolve(o),this._currentWorkspace=o??void 0,await this.persistFolders(),o&&(w(xe,o),U.debug(`Workspace folders restored for contribution type: ${e.type}`)),this.restoredTypes.add(e.type)}async loadPersistedWorkspace(e){U.debug("Restoring workspace from persistence");try{const t=await ce.getObject(lr);if(t||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),t?.folders&&Array.isArray(t.folders)&&t.folders.length>0){const n=t.folders.map(s=>({type:s.type,data:s.data}));await this.resolveFolders(n);const i=this.buildComposite();this.workspace=Promise.resolve(i),this._currentWorkspace=i??void 0,i&&(w(xe,i),U.debug("Workspace restored from persisted folders")),e();return}if(t&&t.type&&t.data!==void 0){const n=this.contributions.get(t.type);if(n?.restore)try{const i=await n.restore(t.data);if(i){this.folders=[{type:t.type,data:t.data,directory:i}];const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s??void 0,this.currentType=t.type,await this.persistFolders(),w(xe,s),U.debug("Workspace restored from legacy format")}}catch(i){U.error("Failed to restore legacy workspace:",i)}}this.workspace||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),e()}finally{if(this.folders.length===0)try{await this.connectFolder({indexeddb:!0,name:ti.DEFAULT_INDEXEDDB_FOLDER_NAME}),U.debug("Connected default IndexedDB workspace")}catch(t){U.warn("Failed to connect default IndexedDB folder",t)}}}async resolveFolders(e){this.folders=[];for(const t of e){const n=this.contributions.get(t.type);if(!n?.restore){const i=t.data&&typeof t.data=="object"&&t.data.name||`${t.type} (missing)`,s=new ar({backendType:t.type,name:i,data:t.data});this.folders.push({type:t.type,data:t.data,directory:s});continue}try{const i=await n.restore(t.data);i&&this.folders.push({type:t.type,data:t.data,directory:i})}catch(i){U.warn(`Failed to restore folder (${t.type}):`,i)}}}buildComposite(){if(this.folders.length!==0)return new js(this.folders.map(e=>e.directory))}async persistFolders(){const e=this.folders.length>0?{folders:this.folders.map(t=>({type:t.type,data:t.data}))}:null;await ce.persistObject(lr,e),await ce.persistObject("workspace",null),U.debug(`Persisted ${this.folders.length} folder(s)`)}async getFolders(){return await this.initPromise,this.folders.map(e=>({name:e.directory.getName(),type:e.type}))}async getFolderInfoForDirectory(e){await this.initPromise;const t=this.folders.find(o=>o.directory===e);if(!t)return;const n=t.data&&typeof t.data=="object"&&t.data.name||t.directory.getName(),s=this.contributions.get(t.type)?.name??t.type;return{name:n,type:t.type,backendName:s}}async updateFolderName(e,t){await this.initPromise;const n=this.folders.find(s=>s.directory===e);if(!n)return;n.data&&typeof n.data=="object"?n.data={...n.data,name:t}:n.data={name:t},await this.persistFolders();const i=this.buildComposite();this.workspace=Promise.resolve(i),this._currentWorkspace=i??void 0,w(xe,i),U.debug(`Updated folder name: ${t}`)}async connectFolder(e){await this.initPromise;const t=Array.from(this.contributions.values()).find(l=>l.canHandle(e));if(!t)throw new Error("No workspace contribution can handle this input");const n=e?.name??t.type;U.debug(`Connecting workspace: ${t.type}, ${n}`);const i=await t.connect(e),s=t.persist?await t.persist(i):e;this.folders.push({type:t.type,data:s,directory:i}),await this.persistFolders(),this.currentType=this.folders.length===1?t.type:void 0;const o=this.buildComposite();this.workspace=Promise.resolve(o),this._currentWorkspace=o,w(xe,o);const a=i.getName();return U.info(`Workspace connected: ${t.type} (${a})`),o}async disconnectFolder(e){await this.initPromise;const t=this.folders.findIndex(s=>s.directory===e);if(t<0)return;const n=this.folders[t];U.debug(`Disconnecting folder: ${n.directory.getName()} (${n.type})`),this.folders.splice(t,1),await this.persistFolders(),this.folders.length>0?this.currentType=this.folders[0].type:(this.currentType=void 0,U.info("Workspace disconnected"));const i=this.buildComposite();this.workspace=Promise.resolve(i),this._currentWorkspace=i??void 0,w(xe,i)}async connectWorkspace(e){return this.connectFolder(e)}async getWorkspace(){if(await this.initPromise,!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return this.folders.length>0}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){await this.initPromise,this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0,this.folders=[],this.currentType=void 0,await this.persistFolders(),w(xe,void 0),U.info("Workspace disconnected")}async copyResource(e,t,n){await this.initPromise;const i=this._currentWorkspace;if(!i)throw new Error("No workspace connected.");const s=n?.newName??e.getName(),o=t.getWorkspacePath(),a=o?`${o}/${s}`:s,l=async(d,u)=>{const f=await d.getContents({blob:!0}),h=await i.getResource(u,{create:!0});if(!h)throw new Error(`Failed to create target file: ${u}`);await h.saveContents(f)},c=async(d,u)=>{for(const f of await d.listChildren(!1)){const h=`${u}/${f.getName()}`;f instanceof W?await l(f,h):f instanceof q&&await c(f,h)}};if(e instanceof W)await l(e,a);else if(e instanceof q)await c(e,a);else throw new Error("Unsupported resource type for copy operation.");n?.move&&await e.delete(void 0,!0)}};ei.DEFAULT_INDEXEDDB_FOLDER_NAME="My Folder";let Ws=ei;const y=new Ws;F.put("workspaceService",y);class vr extends W{constructor(e,t){super(),this.fileHandle=e,this.parent=t}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const t=await this.fileHandle.getFile();return!e||e?.contentType==Br.TEXT?await t.text():e?.encoding==Jn.BASE64||e?.uri?URL.createObjectURL(t):e?.blob?t:t.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,t){const n=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(n);else{const i=n.getWriter();try{await i.write(e)}finally{await i.close()}}}async copyTo(e){const t=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(t)}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):n}await t.listChildren(!0),w(ee,y.getWorkspaceSync()??this.getWorkspace())}}}class ye extends q{constructor(e,t){super(),this.dirHandle=e,this.parent=t}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const t={};try{for await(const n of this.dirHandle.values()){const s=n.kind==="file"?new vr(n,this):new ye(n,this);t[s.getName()]=s}}catch(n){if(n.name==="NotFoundError")return this.files={},[];throw n}return this.files=t,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,t){if(!e)throw new Error("No path provided");const n=e.split("/");let i=this,s=!1;try{for(let o=0;o<n.length;o++){let a=n[o];if(a&&(a=a.trim()),!a)break;if(i instanceof ye){if(await i.listChildren(),!i.files)return null;const l=i.files[a];if(l)i=l;else if(t?.create)if(s=!0,o<n.length-1)try{const c=await i.dirHandle.getDirectoryHandle(a,{create:!0}),d=new ye(c,i);i.files[a]=d,i=d,i instanceof ye&&await i.listChildren();continue}catch(c){throw c.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${n.slice(0,o+1).join("/")}`):c}else try{const c=await i.dirHandle.getFileHandle(a,{create:!0}),d=new vr(c,i);return i.files[a]=d,d}catch(c){throw c.name==="NotFoundError"?new Error(`File not found or not accessible: ${n.join("/")}`):c}else return null}}}finally{s&&w(ee,y.getWorkspaceSync()??this.getWorkspace())}return i}touch(){w(ee,y.getWorkspaceSync()??this.getWorkspace())}async delete(e,t=!0){if(!e){const n=this.getParent();return n instanceof ye&&(await n.listChildren(),n.files&&delete n.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,n?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:t}).then(async()=>{this.files&&delete this.files[e],w(ee,y.getWorkspaceSync()??this.getWorkspace())})}async copyTo(e){for(const t of await this.listChildren()){const n=[e,t.getName()].join("/");await t.copyTo(n)}}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):n}await t.listChildren(!0),w(ee,y.getWorkspaceSync()??this.getWorkspace())}}}y.registerContribution({type:"filesystem",name:"fs",canHandle(r){return r&&"kind"in r&&r.kind==="directory"},async connect(r){return new ye(r)},async restore(r){if(r&&"kind"in r&&r.kind==="directory")return new ye(r,void 0)},async persist(r){return r instanceof ye?r.getHandle():null}});const gn=Object.freeze(Object.defineProperty({__proto__:null,FileSysDirHandleResource:ye,FileSysFileHandleResource:vr},Symbol.toStringTag,{value:"Module"})),Ms=".opfs";async function mn(){if(typeof navigator>"u"||!navigator.storage?.getDirectory)throw new Error("OPFS is not available in this environment");return await navigator.storage.getDirectory()}class cr extends q{constructor(e){super(),this.inner=e}getName(){return Ms}getParent(){return this.inner.getParent()}async listChildren(e){return this.inner.listChildren(e)}async getResource(e,t){return this.inner.getResource(e,t)}touch(){this.inner.touch()}async delete(e,t){return this.inner.delete(e,t)}async copyTo(e){return this.inner.copyTo(e)}async rename(e){return this.inner.rename(e)}}y.registerContribution({type:"opfs",name:"opfs",canHandle(r){return r&&typeof r=="object"&&r.opfs===!0},async connect(r){const e=await mn(),n=(await Promise.resolve().then(()=>gn)).FileSysDirHandleResource,i=new n(e);return new cr(i)},async restore(r){if(r&&typeof r=="object"&&r.opfs===!0){const e=await mn(),n=(await Promise.resolve().then(()=>gn)).FileSysDirHandleResource,i=new n(e);return new cr(i)}},async persist(r){return r instanceof cr?{opfs:!0}:null}});const qs="eclipse-lyra-workspace-idb",V="files";let dr=null;async function _e(){if(typeof indexedDB>"u")throw new Error("IndexedDB is not available in this environment");return dr||(dr=new Promise((r,e)=>{const t=indexedDB.open(qs,1);t.onerror=()=>e(t.error),t.onsuccess=()=>r(t.result),t.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(V)||i.createObjectStore(V)}})),dr}async function Hs(){const r="IndexedDB",e=await y.getFolders(),t=new Set(e.filter(i=>i.type==="indexeddb").map(i=>i.name));if(!t.has(r))return r;let n=1;for(;t.has(`${r} (${n})`);)n+=1;return`${r} (${n})`}function nt(r){return r?r.split("/").filter(Boolean).join("/"):""}function vt(r,e){const t=nt(r),n=nt(e);return t?n?`${t}/${n}`:t:n}function it(r,e){const t=nt(e);return t?`${r}/${t}`:r}function Gs(r,e){const t=nt(e);return t?`${r}/${t}/`:`${r}/`}async function Ft(r,e){const i=(await _e()).transaction(V,"readonly").objectStore(V),s=e?it(r,e):r;return await new Promise((o,a)=>{const l=i.get(s);l.onsuccess=()=>o(l.result),l.onerror=()=>a(l.error)})}async function kt(r,e,t){const s=(await _e()).transaction(V,"readwrite").objectStore(V),o=e?it(r,e):r;await new Promise((a,l)=>{const c=s.put(t,o);c.onsuccess=()=>a(),c.onerror=()=>l(c.error)})}async function bn(r,e){const i=(await _e()).transaction(V,"readwrite").objectStore(V),s=e?it(r,e):r;await new Promise((o,a)=>{const l=i.delete(s);l.onsuccess=()=>o(),l.onerror=()=>a(l.error)})}async function Ks(r,e){const i=(await _e()).transaction(V,"readwrite").objectStore(V),s=it(r,e),o=s+"/",a=i.openCursor();await new Promise((l,c)=>{a.onerror=()=>c(a.error),a.onsuccess=d=>{const u=d.target.result;if(!u){l();return}const f=String(u.key);(f===s||f.startsWith(o))&&u.delete(),u.continue()}})}async function Vs(r,e,t){const s=(await _e()).transaction(V,"readwrite").objectStore(V),o=it(r,e),a=it(r,t),l=s.openCursor(),c=[];await new Promise((d,u)=>{l.onerror=()=>u(l.error),l.onsuccess=f=>{const h=f.target.result;if(!h){d();return}const g=String(h.key);if(g===o||g.startsWith(o+"/")){const C=g.slice(o.length),A=a+C,Z=h.value;c.push(()=>{h.delete(),s.put(Z,A)})}h.continue()}});for(const d of c)d()}async function Xs(r,e){const i=(await _e()).transaction(V,"readonly").objectStore(V),s=Gs(r,e),o=i.openCursor(),a=new Set,l=new Map;await new Promise((d,u)=>{o.onerror=()=>u(o.error),o.onsuccess=f=>{const h=f.target.result;if(!h){d();return}const g=String(h.key),C=h.value;if(!g.startsWith(s)){h.continue();return}const A=g.slice(s.length);if(!A){h.continue();return}const Z=A.indexOf("/"),S=Z===-1?A:A.slice(0,Z);Z===-1?C.type==="dir"?a.add(S):l.set(S,C):a.add(S),h.continue()}});const c=[];for(const d of a)c.push({name:d,entry:{type:"dir"},type:"dir"});for(const[d,u]of l)a.has(d)||c.push({name:d,entry:u,type:"file"});return c}function Ys(r){return r instanceof me?r.getRootId():""}class pr extends W{constructor(e,t){super(),this.path=nt(e),this.parent=t}getName(){const e=this.path.split("/");return e[e.length-1]||""}getParent(){return this.parent}getRootId(){return Ys(this.parent)}async delete(){await bn(this.getRootId(),this.path),w(ee,y.getWorkspaceSync()??this.getWorkspace())}async getContents(e){const t=await Ft(this.getRootId(),this.path);let n=t?.content;if(typeof n=="string"){const s=new Blob([n],{type:t?.mimeType||"text/plain"});n=s,t&&(t.content=s,await kt(this.getRootId(),this.path,t))}if(!e||e.contentType===Br.TEXT)return n?await n.text():"";let i;return n?i=n:i=new Blob([],{type:t?.mimeType}),e.blob?i:e.uri?URL.createObjectURL(i):i.stream()}async saveContents(e,t){let n,i;if(e instanceof Blob)n=e,i=e.type||void 0;else if(typeof e=="string")i="text/plain",n=new Blob([e],{type:i});else if(e instanceof ReadableStream){const s=new Response(e);n=await s.blob(),i=s.headers.get("content-type")??void 0}else{const s=String(e??"");i="text/plain",n=new Blob([s],{type:i})}await kt(this.getRootId(),this.path,{type:"file",content:n,mimeType:i}),w(ee,y.getWorkspaceSync()??this.getWorkspace())}async size(){const t=(await Ft(this.getRootId(),this.path))?.content;return t?t.size:null}async copyTo(e){const t=await this.getContents({blob:!0}),n=await this.getWorkspace().getResource(e,{create:!0});if(!n)throw new Error(`Failed to create target file: ${e}`);await n.saveContents(t)}async rename(e){if(this.getName()===e)return;const t=this.getParent(),n=t instanceof me?t.getPath():"",i=vt(n,e),s=this.getRootId(),o=await Ft(s,this.path);if(!o)throw new Error("File not found in IndexedDB");await bn(s,this.path),await kt(s,i,o),w(ee,y.getWorkspaceSync()??this.getWorkspace())}}class me extends q{constructor(e,t){super(),this.path=nt(e),this.parent=t}getPath(){return this.path}getName(){if(!this.path)return"";const e=this.path.split("/");return e[e.length-1]}getParent(){return this.parent}getRoot(){const e=this.getParent();return e?e.getRoot():this}getRootId(){const e=this.getRoot();return e instanceof Ut?e.getRootId():""}async listChildren(e){const t=await Xs(this.getRootId(),this.path),n=[];for(const i of t){const s=vt(this.path,i.name);i.type==="dir"?n.push(new me(s,this)):n.push(new pr(s,this))}return n}async getResource(e,t){if(!e)throw new Error("No path provided");const n=e.split("/").filter(s=>s.trim());let i=this;for(let s=0;s<n.length;s++){const o=n[s],a=s===n.length-1,l=i.getPath(),c=vt(l,o),d=this.getRootId(),u=await Ft(d,c);if(!u){if(!t?.create)return null;if(a)return await kt(d,c,{type:"file",content:new Blob([])}),w(ee,y.getWorkspaceSync()??this.getWorkspace()),new pr(c,i);await kt(d,c,{type:"dir"}),i=new me(c,i);continue}if(a)return u.type==="dir"?new me(c,i):new pr(c,i);if(u.type!=="dir")return null;i=new me(c,i)}return i}touch(){w(ee,y.getWorkspaceSync()??this.getWorkspace())}async delete(e,t=!0){if(!e){const i=this.getParent();if(i instanceof me){await i.delete(this.getName());return}return}const n=vt(this.path,e);await Ks(this.getRootId(),n),w(ee,y.getWorkspaceSync()??this.getWorkspace())}async copyTo(e){for(const t of await this.listChildren(!1)){const n=[e,t.getName()].join("/");await t.copyTo(n)}}async rename(e){if(this.getName()===e)return;const t=this.getParent();if(!(t instanceof me))throw new Error("Cannot rename IndexedDB root directory");const n=this.getPath(),i=vt(t.getPath(),e);await Vs(this.getRootId(),n,i),w(ee,y.getWorkspaceSync()??this.getWorkspace())}}class Ut extends me{constructor(e,t){super(""),this.displayName=e||"IndexedDB",this.rootId=t}getRootId(){return this.rootId}getName(){return this.displayName}getParent(){}async rename(e){const t=String(e??"").trim();!t||t===this.displayName||(this.displayName=t,await y.updateFolderName(this,t))}}function Zs(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"default-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}y.registerContribution({type:"indexeddb",name:"idb",canHandle(r){return r&&typeof r=="object"&&r.indexeddb===!0},async connect(r){await _e();const e=r.name&&String(r.name).trim(),t=e&&e.length>0?e:await Hs(),n=Zs();return new Ut(t,n)},async restore(r){if(r&&typeof r=="object"&&r.indexeddb===!0&&r.rootId){await _e();const e=r.name&&String(r.name).trim()||"IndexedDB";return new Ut(e,String(r.rootId))}},async persist(r){return r instanceof Ut?{indexeddb:!0,name:r.getName(),rootId:r.getRootId()}:null}});const Q=Ce("MarketplaceRegistry"),wn="events/marketplaceregistry/changed",yn="marketplace.catalogUrls";class Qs{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{Q.error(`Failed to refresh catalogs on init: ${e.message}`)})})}async loadCatalogUrls(){try{const e=await L.get(yn);this.catalogUrls=Array.isArray(e)?e:[]}catch(e){Q.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await L.set(yn,this.catalogUrls),w(wn,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){Q.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),Q.debug(`Added catalog URL: ${e}`);try{await this.refreshCatalogs()}catch(t){Q.warn(`Failed to refresh catalogs immediately after adding: ${t}`)}}async addCatalogUrls(e){let t=0;for(const n of e){if(!this.isValidUrl(n)){Q.warn(`Skipping invalid catalog URL: ${n}`);continue}this.catalogUrls.includes(n)||(this.catalogUrls.push(n),Q.debug(`Added catalog URL: ${n}`),t++)}if(t!==0){await this.saveCatalogUrls();try{await this.refreshCatalogs()}catch(n){Q.warn(`Failed to refresh catalogs after adding URLs: ${n}`)}}}async removeCatalogUrl(e){const t=this.catalogUrls.indexOf(e);t!==-1&&(this.catalogUrls.splice(t,1),await this.saveCatalogUrls(),Q.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const t=this.loadingPromises.get(e);if(t)return t;const n=(async()=>{try{const i=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const s=await i.json();if(!s.extensions||!Array.isArray(s.extensions))throw new Error("Invalid catalog format: extensions array is required");return{name:s.name,description:s.description,extensions:s.extensions||[]}}catch(i){throw Q.error(`Failed to fetch catalog from ${e}: ${i}`),i}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,n),n}async refreshCatalogs(){const e=this.catalogUrls.map(i=>this.fetchCatalog(i).catch(s=>(Q.warn(`Failed to refresh catalog ${i}: ${s.message}`),null))),t=await Promise.allSettled(e);let n=0;t.forEach(i=>{if(i.status==="fulfilled"&&i.value){const s=i.value;s.extensions&&s.extensions.forEach(o=>{if(!R.getExtensions().find(a=>a.id===o.id)){const a={...o,external:!0};R.registerExtension(a),n++}})}}),Q.debug(`Refreshed ${this.catalogUrls.length} catalogs, ${n} extensions registered`),n>0&&Q.info(`Marketplace: ${n} new extension(s) available`),w(wn,{type:"refreshed"})}getMarketplaceExtension(e){const t=R.getExtensions().find(n=>n.id===e);if(t&&t.external)return t}isMarketplaceExtension(e){const t=R.getExtensions().find(n=>n.id===e);return t!==void 0&&t.external===!0}}const ri=new Qs;F.put("marketplaceRegistry",ri);const b=Ce("AppLoader");function vn(r){if(!r)return"standard";const e=r.layout??r.layoutId;return typeof e=="object"?e.id:e??"standard"}function Js(r){const e={};for(const[t,n]of Object.entries(r))e[t]=typeof n=="boolean"?n?"true":"false":n;return e}function he(r){return r instanceof Error?r.message:String(r)}function eo(r){try{const t=new URL(r).pathname.split("/").filter(Boolean);return t.length>0?t[t.length-1]:void 0}catch{const e=r.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function to(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const t=e[0];if(!(!t||t==="index.html"||t.endsWith(".html")))return t}const jr=class xt{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,t){if(t?.hostConfig===!0&&typeof __RESOLVED_PACKAGE_INFO__<"u"){const n=__RESOLVED_PACKAGE_INFO__;e.name===void 0&&(e.name=n.name),e.version===void 0&&(e.version=n.version),e.description===void 0&&(e.description=n.description),e.dependencies===void 0&&(e.dependencies=n.dependencies),e.marketplaceCatalogUrls===void 0&&(e.marketplaceCatalogUrls=n.marketplaceCatalogUrls)}e.name=e.name??"app",e.version=e.version??"0.0.0",this.apps.has(e.name)&&b.warn(`App '${e.name}' is already registered. Overwriting.`),e.marketplaceCatalogUrls?.length&&ri.addCatalogUrls(e.marketplaceCatalogUrls).catch(()=>{}),this.apps.set(e.name,e),t?.defaultAppName&&(this.defaultAppName=t.defaultAppName),t?.container&&(this.container=t.container),t?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadAppFromUrl(e){b.info(`Loading app from URL: ${e}...`);try{const t=await import(e);if(!t.default)throw new Error(`Module at ${e} does not have a default export`);const n=t.default;if(!n.name||!n.version)throw new Error(`Module at ${e} does not export a valid AppDefinition (name and version required)`);return b.info(`Successfully loaded app definition from URL: ${n.name}`),n}catch(t){throw b.error(`Failed to load app from URL ${e}: ${he(t)}`),t}}async start(){if(this.started){b.debug("AppLoader already started");return}this.started=!0;const e=new URLSearchParams(window.location.search),t=e.get("app"),n=e.get("appId"),i=to(),s=this.apps.size;let o;if(t&&(o=eo(t),o&&b.info(`Extracted app ID from URL path: ${o}`)),i&&b.info(`Extracted app ID from current page path: ${i}`),t)try{b.info(`URL parameter 'app' found: ${t}, attempting to load extension or app`);try{await R.loadExtensionFromUrl(t),b.info(`Successfully loaded extension from URL: ${t}`)}catch(l){b.info(`Failed to load as extension, trying as app definition: ${he(l)}`);try{const c=await this.loadAppFromUrl(t);if(this.registerApp(c),!c.name)throw new Error("App from URL has no name after registration");await this.loadApp(c.name,this.container),b.info(`Successfully loaded app from URL: ${t}`);return}catch(c){throw b.error(`Failed to load from URL as both extension and app: ${he(c)}`),c}}}catch(l){b.error(`Failed to load from URL parameter, falling back to default app: ${he(l)}`)}const a=await this.selectAppToLoad({appIdFromUrl:n,appIdFromPath:i,appIdFromAppUrl:o,appsBeforeExtension:s});if(!a)throw new Error("No apps registered");await this.loadApp(a,this.container)}findAppNameBySegment(e){if(this.apps.has(e))return e;for(const t of this.apps.values())if(t.path===e||t.name&&t.name.endsWith("/"+e))return t.name??void 0}dispatchLoadProgress(e){window.dispatchEvent(new CustomEvent("app-load-progress",{detail:{message:e}}))}async loadApp(e,t){const n=this.apps.get(e);if(!n)throw new Error(`App '${e}' not found. Make sure it's registered.`);if(this.dispatchLoadProgress("Starting…"),this.currentApp&&(b.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(b.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{R.disable(s)}))),Wt.applyAppNameRemaps(n.remaps),n.remaps?.length){const s=new Set;for(const o of n.remaps)for(const a of o.targets)s.add(a);for(const o of s){const a=x.getContributions(o);w(ue,{target:o,contributions:a})}}n.contributions&&(b.info("Registering app contributions..."),n.contributions.ui&&(n.contributions.ui.forEach(s=>{const o=s.target;o&&x.registerContribution(o,s)}),b.info(`Registered ${n.contributions.ui.length} UI contributions`)),n.contributions.extensions&&(n.contributions.extensions.forEach(s=>{R.registerExtension(s)}),b.info(`Registered ${n.contributions.extensions.length} app extensions`)));const i=new Set(n.extensions||[]);this.systemRequiredExtensions.forEach(s=>i.add(s)),n.extensions=Array.from(i),this.dispatchLoadProgress("Loading extensions…"),await R.loadEnabledExtensions(),n.extensions.length>0&&(this.dispatchLoadProgress("Enabling extensions…"),await Promise.all(n.extensions.map(s=>R.enableAsync(s).catch(o=>{b.error(`Failed to load extension ${s}: ${he(o)}`)})))),n.initialize&&(this.dispatchLoadProgress("Initializing…"),b.info(`Initializing ${n.name}...`),await n.initialize()),this.currentApp=n,b.info(`App ${n.name} loaded successfully`),this.preferredLayoutId=await this.getPreferredLayoutId(),this.updateDocumentMetadata(n),t&&(this.dispatchLoadProgress("Rendering layout…"),this.renderApp(t)),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appName:n.name}}))}updateDocumentMetadata(e){if(document.title=e.name??"",e.metadata?.favicon){const t=e.metadata.favicon;let n=document.querySelector("link[rel*='icon']");n||(n=document.createElement("link"),n.rel="icon",document.head.appendChild(n)),n.type="image/svg+xml",n.href=t}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const t=this.preferredLayoutId??vn(this.currentApp),n=x.getContributions(Gt);let i=n.find(l=>l.id===t);if(i||(b.warn(`Layout '${t}' not found, falling back to 'standard'`),i=n.find(l=>l.id==="standard")),!i)throw new Error(`No layout found for layoutId '${t}' and no 'standard' layout registered.`);const s=i.component;let o={};s&&typeof s=="object"&&"tag"in s&&s.attributes&&(o={...s.attributes});const a=this.currentApp?.layout;if(typeof a=="object"&&a.id===t&&a.props&&Object.assign(o,Js(a.props)),e.innerHTML="",typeof s=="string"){const l=document.createElement(s);for(const[c,d]of Object.entries(o))l.setAttribute(c,d);e.appendChild(l)}else if(s&&typeof s=="object"&&"tag"in s){const l=document.createElement(s.tag);for(const[c,d]of Object.entries(o))l.setAttribute(c,d);e.appendChild(l)}else if(typeof s=="function")pe(s(),e);else throw new Error(`Layout '${i.id}' has invalid component.`);i.onShow&&requestAnimationFrame(()=>{Promise.resolve(i.onShow()).catch(l=>b.error(`Layout onShow failed for '${i.id}': ${he(l)}`))})}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await L.get(xt.PREFERRED_APP_KEY)}catch(e){b.debug(`Failed to get preferred app ID from settings: ${he(e)}`);return}}async setPreferredAppId(e){if(!this.apps.has(e))throw new Error(`App '${e}' not found. Make sure it's registered.`);try{await L.set(xt.PREFERRED_APP_KEY,e),this.defaultAppName=e,b.info(`Set preferred app to: ${e}`)}catch(t){throw b.error(`Failed to persist preferred app: ${he(t)}`),t}}getRegisteredLayouts(){return x.getContributions(Gt)}getCurrentLayoutId(){return this.preferredLayoutId??vn(this.currentApp)}async getPreferredLayoutId(){try{return await L.get(xt.PREFERRED_LAYOUT_KEY)}catch(e){b.debug(`Failed to get preferred layout ID: ${he(e)}`);return}}async setPreferredLayoutId(e){if(!this.getRegisteredLayouts().some(n=>n.id===e))throw new Error(`Layout '${e}' not found.`);try{await L.set(xt.PREFERRED_LAYOUT_KEY,e),this.preferredLayoutId=e,b.info(`Set preferred layout to: ${e}`),this.currentApp&&this.container&&this.renderApp(this.container),window.dispatchEvent(new CustomEvent("layout-changed",{detail:{layoutId:e}}))}catch(n){throw b.error(`Failed to persist preferred layout: ${he(n)}`),n}}async selectAppToLoad(e){const{appIdFromUrl:t,appIdFromPath:n,appIdFromAppUrl:i,appsBeforeExtension:s}=e;if(t){const l=this.findAppNameBySegment(t)??t;if(this.apps.has(l))return b.info(`Loading app specified by URL parameter 'appId': ${l}`),l;b.warn(`App '${t}' from URL parameter not found`)}if(n){const l=this.findAppNameBySegment(n);if(l)return b.info(`Loading app from URL path: ${n}`),l;b.debug(`App for path '${n}' not found, continuing search`)}if(i){const l=this.findAppNameBySegment(i)??i;if(this.apps.has(l))return b.info(`Loading app using segment from app URL path: ${l}`),l}if(this.apps.size>s){const l=Array.from(this.apps.values()).slice(s);if(l.length>0){const c=l[0];return b.info(`Loading app registered by extension: ${c.name}`),c.name}}const o=await this.getPreferredAppId();if(o&&this.apps.has(o))return b.info(`Loading preferred app from settings: ${o}`),o;if(this.defaultAppName&&this.apps.has(this.defaultAppName))return this.defaultAppName;this.defaultAppName&&b.warn(`Default app '${this.defaultAppName}' not found`);const a=this.getRegisteredApps();if(a.length>0)return a[0].name}};jr.PREFERRED_APP_KEY="preferredAppName";jr.PREFERRED_LAYOUT_KEY="preferredLayoutId";let ro=jr;const Te=new ro;F.put("appLoaderService",Te);var no=Object.defineProperty,io=Object.getOwnPropertyDescriptor,Lt=(r,e,t,n)=>{for(var i=n>1?void 0:n?io(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&no(e,t,i),i};let He=class extends Re{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(r){super.firstUpdated(r),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const t=e.shadowRoot?.querySelector("input");t&&(t.focus(),t.select())}}getResult(){return this.inputValue}handleInput(r){this.inputValue=r.target.value}handleKeyDown(r){r.key==="Enter"?(r.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):r.key==="Escape"&&(r.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};He.styles=[...Re.styles,j`
            wa-input {
                width: 100%;
            }
        `];Lt([m({type:String})],He.prototype,"message",2);Lt([m({type:String,attribute:"default-value"})],He.prototype,"defaultValue",2);Lt([m({type:Boolean})],He.prototype,"markdown",2);Lt([$()],He.prototype,"inputValue",2);He=Lt([_("lyra-prompt-dialog-content")],He);x.registerContribution(qe,{id:"prompt",label:"Input",buttons:[At,Ur],component:r=>r?p`
            <lyra-prompt-dialog-content 
                .message="${r.message}"
                .defaultValue="${r.defaultValue}"
                .markdown="${r.markdown}"
            ></lyra-prompt-dialog-content>
        `:p`<div>Error: No prompt dialog state</div>`,onButton:async(r,e,t)=>(t&&(r==="ok"?t.resolve(e||""):t.resolve(null)),!0)});async function so(r,e="",t=!1){return new Promise(n=>{rr.open("prompt",{message:r,defaultValue:e,markdown:t,resolve:n})})}var oo=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,Wr=(r,e,t,n)=>{for(var i=n>1?void 0:n?ao(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&oo(e,t,i),i};let Vt=class extends Re{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};Wr([m({type:String})],Vt.prototype,"message",2);Wr([m({type:Boolean})],Vt.prototype,"markdown",2);Vt=Wr([_("lyra-info-dialog-content")],Vt);x.registerContribution(qe,{id:"info",label:"Information",buttons:[At],component:r=>r?p`
            <lyra-info-dialog-content 
                .message="${r.message}"
                .markdown="${r.markdown}"
            ></lyra-info-dialog-content>
        `:p`<div>Error: No info dialog state</div>`,onButton:async(r,e,t)=>(t&&t.resolve&&t.resolve(),!0)});var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,Mr=(r,e,t,n)=>{for(var i=n>1?void 0:n?co(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&lo(e,t,i),i};let Xt=class extends Re{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};Mr([m({type:String})],Xt.prototype,"message",2);Mr([m({type:Boolean})],Xt.prototype,"markdown",2);Xt=Mr([_("lyra-confirm-dialog-content")],Xt);x.registerContribution(qe,{id:"confirm",label:"Confirm",buttons:[At,Ur],component:r=>r?p`
            <lyra-confirm-dialog-content 
                .message="${r.message}"
                .markdown="${r.markdown}"
            ></lyra-confirm-dialog-content>
        `:p`<div>Error: No confirm dialog state</div>`,onButton:async(r,e,t)=>(t&&(r==="ok"?t.resolve(!0):t.resolve(!1)),!0)});async function xr(r,e=!1){return new Promise(t=>{rr.open("confirm",{message:r,markdown:e,resolve:t})})}var po=Object.defineProperty,uo=Object.getOwnPropertyDescriptor,Xe=(r,e,t,n)=>{for(var i=n>1?void 0:n?uo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&po(e,t,i),i};let Se=class extends Re{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(r){super.firstUpdated(r),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const t=this.closest(".dialog-service-content");if(t){const n=t.parentElement?.querySelector(".dialog-service-footer");n&&(n.style.display="none")}}updated(r){super.updated(r),r.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),r.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(r,e,t){this.currentTitle=r,this.currentMessage=e,this.actions=[...t],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(r){r.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const r=this.actions.filter(t=>t.label!=="Close"),e=this.actions.filter(t=>t.label==="Close");return p`
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
        `}};Se.styles=[...Re.styles,j`
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
        `];Xe([m({type:String})],Se.prototype,"title",2);Xe([m({type:String})],Se.prototype,"message",2);Xe([m({type:Boolean})],Se.prototype,"markdown",2);Xe([$()],Se.prototype,"actions",2);Xe([$()],Se.prototype,"currentTitle",2);Xe([$()],Se.prototype,"currentMessage",2);Se=Xe([_("lyra-navigable-info-dialog-content")],Se);x.registerContribution(qe,{id:"navigable-info",label:"Information",buttons:[Fs],component:r=>{if(!r)return p`<div>Error: No navigable info dialog state</div>`;const e=p`
            <lyra-navigable-info-dialog-content 
                .title="${r.title}"
                .message="${r.message}"
                .markdown="${r.markdown}"
            ></lyra-navigable-info-dialog-content>
        `;return(async()=>{const t=document.querySelector("lyra-navigable-info-dialog-content");t&&(await t.updateComplete,t.actions=r.actions||[],t.resolveCallback=r.resolve,r.updateDialogRef&&(r.updateDialogRef.current=(n,i,s)=>{t.updateDialog(n,i,s)}))})(),e},onButton:async(r,e,t)=>t&&r==="close"&&t.resolve?(t.resolve(),!0):!1});var ho=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,dt=(r,e,t,n)=>{for(var i=n>1?void 0:n?fo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ho(e,t,i),i};let De=class extends Re{constructor(){super(...arguments),this.mode="either",this.selectedPath=null,this.rootNodes=[],this.loading=!1,this.loadError=null}async doInitUI(){await this.loadWorkspaceTree()}firstUpdated(r){super.firstUpdated?.(r);const e=this.closest("wa-dialog");e&&e.setAttribute("label",this.dialogTitle)}updated(r){if(super.updated?.(r),r.has("mode")){const e=this.closest("wa-dialog");e&&e.setAttribute("label",this.dialogTitle)}}get dialogTitle(){return this.mode==="file"?"Choose a file":this.mode==="directory"?"Choose a directory":"Choose a file or directory"}getResult(){return this.selectedPath!=null?"/"+this.selectedPath:null}async loadWorkspaceTree(){this.loading=!0,this.loadError=null;try{const r=await y.getWorkspace();if(!r){this.rootNodes=[];return}const e=await r.listChildren(!1),t=[];for(const n of e)t.push(await this.resourceToTreeNode(n,!1));t.sort((n,i)=>n.label.localeCompare(i.label)),this.rootNodes=t}catch(r){const e=r instanceof Error?r.message:String(r);this.loadError=e,this.rootNodes=[]}finally{this.loading=!1}}async resourceToTreeNode(r,e=!0){const t=r instanceof W,n={resource:r,label:r.getName(),leaf:t,children:[]};if(r instanceof q&&e){for(const i of await r.listChildren(!1))n.children.push(await this.resourceToTreeNode(i,!1));n.children.sort((i,s)=>i.label.localeCompare(s.label))}return n}handleSelectionChange(r){const e=r.detail&&r.detail.selection||[];if(!e||e.length===0){this.selectedPath=null,this.requestUpdate();return}const n=e[0]?.model?.resource;if(!n){this.selectedPath=null,this.requestUpdate();return}const i=n instanceof q,s=n instanceof W;if(this.mode==="file"&&!s){this.selectedPath=null,this.requestUpdate();return}if(this.mode==="directory"&&s){const a=n.getParent?.();this.selectedPath=a?a.getWorkspacePath():null,this.requestUpdate();return}if(this.mode==="directory"&&!i){this.selectedPath=null,this.requestUpdate();return}const o=n.getWorkspacePath?.();this.selectedPath=typeof o=="string"?o:null,this.requestUpdate()}renderTreeNode(r){return p`
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
    `}};De.styles=[...Re.styles,j`
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
    `];dt([m({type:String})],De.prototype,"mode",2);dt([$()],De.prototype,"selectedPath",2);dt([$()],De.prototype,"rootNodes",2);dt([$()],De.prototype,"loading",2);dt([$()],De.prototype,"loadError",2);De=dt([_("lyra-filebrowser-dialog")],De);x.registerContribution(qe,{id:"filebrowser-dialog",label:"Select Path",buttons:[At,Ur],component:r=>p`<lyra-filebrowser-dialog .mode=${r?.mode??"either"}></lyra-filebrowser-dialog>`,onButton:async(r,e,t)=>(t&&(r==="ok"?t.resolve(e||null):t.resolve(null)),!0)});function Sa(r="either"){return new Promise(e=>{rr.open("filebrowser-dialog",{resolve:e,mode:r})})}function go(r){const e=(r??"").trim();if(!e)return{name:""};const t=e.split(/\s+/);if(t.length<=1)return{name:e};const n=t.pop(),i=t.join(" ");return{name:n,library:i}}function H(r,e){const{name:t,library:n}=go(r??"");return p`<wa-icon library=${n??P} name=${t} label=${e?.label??P} slot=${e?.slot??P}></wa-icon>`}var mo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,ve=(r,e,t,n)=>{for(var i=n>1?void 0:n?bo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&mo(e,t,i),i};const wo=150;function ur(r,e,t,n,i){const o=`Toolbar ${r??"default"}`,a=t.filter(c=>c.slot===r&&n(c)),l=r==="start"?p`<slot name="start"></slot>`:r==="end"?p`<slot name="end"></slot>`:p`<slot></slot>`;return p`
        <wa-button-group orientation=${e} label=${o}>
            ${l}
            ${a.map(i)}
        </wa-button-group>
    `}let ie=class extends Fe{constructor(){super(...arguments),this.position="start",this.orientation="horizontal",this.align="start",this.size="small",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[],this.compact=!1,this.resizeObserver=null,this.resizeDebounceTimer=null,this.overflowCheckScheduled=!1,this.onResize=()=>{this.resizeDebounceTimer!==null&&clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=setTimeout(()=>{this.resizeDebounceTimer=null,this.updateCompactFromSpace()},wo)}}updateCompactFromSpace(){const r=this.shadowRoot?.querySelector(".toolbar-items");if(!r)return;const e=r.scrollWidth>r.clientWidth;this.compact!==e&&(this.compact=e,this.requestUpdate())}scheduleOverflowCheck(){this.overflowCheckScheduled||(this.overflowCheckScheduled=!0,requestAnimationFrame(()=>{this.overflowCheckScheduled=!1,this.updateCompactFromSpace()}))}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=null,this.resizeDebounceTimer!==null&&(clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=null),super.disconnectedCallback()}updated(r){super.updated?.(r),this.compact||this.scheduleOverflowCheck()}doBeforeUI(){const r=this.getAttribute("id");r&&this.loadContributions(r),G(ue,e=>{if(!r)return;this.matchesTarget(r,e.target)&&(this.loadContributions(r),this.requestUpdate())})}matchesTarget(r,e){if(e===r)return!0;if(!r.includes(":"))return!1;const[t]=r.split(":");if(e===`${t}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&r.startsWith(`${t}:`)}return!1}loadContributions(r){const e=x.getContributions(r);if(!r.includes(":")){this.contributions=e;return}const[t]=r.split(":"),n=`${t}:*`,i=x.getContributions(n),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const a of o){const l=`${t}:${a}`,c=x.getContributions(l);s.push(...c)}}this.contributions=[...i,...s,...e]}isToolbarItem(r){return"command"in r||"component"in r}contributionCreator(r){if("command"in r){const e=r,t=!this.compact&&!!e.showLabel;return p`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size=${this.size}>
                    ${H(e.icon,{label:e.label})}
                    ${t?e.label:""}
                </wa-button>
            `}if("component"in r){const e=r.component;return e instanceof Function?e():Ct(e)}return p`<span>unknown contribution type: ${typeof r}</span>`}render(){const r=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"",e=this.orientation==="vertical"?"column":"row",t={start:"flex-start",center:"center",end:"flex-end"},n=this.contributionCreator.bind(this),i=this.isToolbarItem.bind(this);return p`
            <div class="toolbar-items" style=${gi({"flex-direction":e,"align-items":t[this.align],"justify-content":this.position})}>
                ${ur("start",this.orientation,this.contributions,i,n)}
                ${r}
                ${ur(void 0,this.orientation,this.contributions,i,n)}
                ${ur("end",this.orientation,this.contributions,i,n)}
            </div>
        `}};ie.styles=j`
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
    `;ve([m()],ie.prototype,"position",2);ve([m({reflect:!0})],ie.prototype,"orientation",2);ve([m({reflect:!0})],ie.prototype,"align",2);ve([m({reflect:!0})],ie.prototype,"size",2);ve([m({type:Boolean,attribute:"is-editor"})],ie.prototype,"isEditor",2);ve([m({attribute:!1})],ie.prototype,"partToolbarContent",2);ve([m({attribute:!1})],ie.prototype,"partToolbarRenderer",2);ve([$()],ie.prototype,"contributions",2);ve([$()],ie.prototype,"compact",2);ie=ve([_("lyra-toolbar")],ie);var yo=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,Y=(r,e,t,n)=>{for(var i=n>1?void 0:n?vo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&yo(e,t,i),i};let B=class extends Qt{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(r){if(!this.disabled){if(r&&r.stopPropagation(),this.action){this.action(r);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(r){const e=r.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const r=Yn.getKeyBindingsForCommand(this.cmd);return r.length>0?r[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),G(ue,r=>{this.dropdown&&r.target===this.dropdown&&(this.dropdownContributions=r.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=x.getContributions(this.dropdown),this.requestUpdate())}renderContribution(r){if("command"in r){const e=r,t=e.disabled?.get();return p`
                <lyra-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${t}">
                    ${e.label}
                </lyra-command>
            `}if("component"in r){const t=r.component;return t instanceof Function?t():Ct(t)}return P}render(){const r=this.getKeybinding();return this.isInDropdown()?p`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    ${H(this.icon,{label:this.title,slot:"icon"})}
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
                        ${H(this.icon,{label:this.title,slot:"start"})}
                        <slot></slot>
                        ${this.label?this.title:P}
                    </wa-button>
                    
                    ${this.title?p`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:P}
                    
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
                    `:P}
                </wa-dropdown>
            `:p`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${r?`${this.title} (${r})`:this.title}
                @click=${e=>this.handleClick(e)}>
                ${H(this.icon,{label:this.title,slot:"start"})}
                <slot></slot>
            </wa-button>
        `}};B.styles=j`
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
    `;Y([m()],B.prototype,"cmd",2);Y([m({type:Object,attribute:!1})],B.prototype,"action",2);Y([m()],B.prototype,"title",2);Y([m()],B.prototype,"label",2);Y([m()],B.prototype,"icon",2);Y([m({type:Boolean})],B.prototype,"disabled",2);Y([m()],B.prototype,"appearance",2);Y([m()],B.prototype,"variant",2);Y([m()],B.prototype,"size",2);Y([m({type:Object,attribute:!1})],B.prototype,"params",2);Y([m()],B.prototype,"dropdown",2);Y([m()],B.prototype,"placement",2);Y([$()],B.prototype,"dropdownContributions",2);B=Y([_("lyra-command")],B);var xo=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,pt=(r,e,t,n)=>{for(var i=n>1?void 0:n?ko(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&xo(e,t,i),i};let Oe=class extends Fe{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Ae(),this.dropdownRef=Ae(),this.boundHandleDocumentPointerDown=this.handleDocumentPointerDown.bind(this)}handleDocumentPointerDown(r){if(!this.isOpen)return;const e=r.composedPath();this.dropdownRef.value&&e.includes(this.dropdownRef.value)||e.some(t=>t.getAttribute?.("part")==="submenu")||this.onClose()}doBeforeUI(){const r=this.getAttribute("id");r&&this.loadContributions(r),G(ue,e=>{if(!r)return;this.matchesTarget(r,e.target)&&(this.loadContributions(r),this.requestUpdate())})}matchesTarget(r,e){if(e===r)return!0;if(!r.includes(":"))return!1;const[t]=r.split(":");if(e===`${t}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&r.startsWith(`${t}:`)}return!1}loadContributions(r){const e=x.getContributions(r);if(!r.includes(":")){this.contributions=e;return}const[t]=r.split(":"),n=`${t}:*`,i=x.getContributions(n),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const a of o){const l=`${t}:${a}`,c=x.getContributions(l);s.push(...c)}}this.contributions=[...i,...s,...e]}getElementFromPoint(r,e){let t=document.elementFromPoint(r,e);if(!t)return null;for(;t;){const n=t.shadowRoot;if(n){const i=n.elementFromPoint(r,e);if(i&&i!==t){t=i;continue}}break}return t}triggerClickUnderCursor(r){const e=this.getElementFromPoint(r.clientX,r.clientY);if(e){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(t)}}show(r,e){e&&this.triggerClickUnderCursor(e),this.position=r,this.isOpen=!0,this.updateComplete.then(()=>{document.addEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})})}onClose(){this.isOpen=!1,document.removeEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})}renderContribution(r){if("command"in r){const e=r,t=e.disabled?.get();return p`
                <lyra-command
                    cmd="${e.command}"
                    icon="${e.icon??""}"
                    .params=${e.params??{}}
                    ?disabled="${t}">
                    ${e.label}
                </lyra-command>
            `}else if("component"in r){const e=r.component;return e instanceof Function?e():Ct(e)}return P}render(){if(!this.isOpen)return P;const r=this.partContextMenuRenderer?this.partContextMenuRenderer():P;return p`
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
        `}};Oe.styles=j`
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
    `;pt([m({type:Boolean,attribute:"is-editor"})],Oe.prototype,"isEditor",2);pt([m({attribute:!1})],Oe.prototype,"partContextMenuRenderer",2);pt([$()],Oe.prototype,"contributions",2);pt([$()],Oe.prototype,"isOpen",2);pt([$()],Oe.prototype,"position",2);Oe=pt([_("lyra-contextmenu")],Oe);class qr extends Fe{}var $o=Object.defineProperty,Eo=(r,e,t,n)=>{for(var i=void 0,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(e,t,i)||i);return i&&$o(e,t,i),i};class de extends qr{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return P}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}activateContainingTab(){let e=this,t=null,n=null;for(;e;){const i=e.tagName?.toLowerCase();if(i==="wa-tab-panel"&&(t=e.getAttribute("name")),i==="lyra-tabs"){n=e;break}const s=e.parentElement;if(s)e=s;else{const o=e.getRootNode();e=o instanceof ShadowRoot?o.host:null}}n&&t!=null&&t!==""&&n.activate(t)}renderContextMenu(){return P}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,gr.set(null),gr.set(this),re.set(null),re.set(this)}}Eo([m()],de.prototype,"dirty");var So=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,Hr=(r,e,t,n)=>{for(var i=n>1?void 0:n?Co(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&So(e,t,i),i};let Ie=class extends qr{constructor(){super(...arguments),this.placement="top",this.contributions=[],this.tabGroup=Ae(),this.containerId=null,this.resizeObservers=new WeakMap,this.tabGroupListenersAttached=!1}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("lyra-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),G(ue,r=>{!this.containerId||r.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(r){if(super.updated(r),this.contributions.length>0&&this.tabGroup.value&&this.updateComplete.then(()=>this.ensureTabGroupListenersAndActivate()),r.has("contributions")){this.contributions.length===0&&(this.tabGroupListenersAttached=!1);const e=this.containerId===ke;this.contributions.forEach(t=>{const n=this.getTabPanel(t.name);if(!n)return;const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const s=i.firstElementChild;s instanceof de&&(s.tabContribution=t,s.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(n))})}}has(r){return this.tabGroup.value?!!this.getTabPanel(r):!1}activate(r){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",r)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(r){if(this.contributions.find(t=>t.name===r.name)){this.activate(r.name);const t=this.getTabPanel(r.name);t&&this.syncActiveSignalsFromPanel(t);return}this.contributions.push(r),this.requestUpdate(),this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.activate(r.name);const t=this.getTabPanel(r.name);if(!t)return;const n=t.querySelector(".tab-content");if(n?.firstElementChild instanceof de){const i=n.firstElementChild;i.tabContribution=r,i.isEditor=this.containerId===ke}this.syncActiveSignalsFromPanel(t),requestAnimationFrame(()=>{this.updateToolbarFromComponent(t),this.updateToolbarHeightVariable(t),this.setupToolbarResizeObserver(t)})})})}handleTabAuxClick(r,e){r.button===Fr.MIDDLE&&e.closable&&this.closeTab(r,e.name)}async closeTab(r,e){if(r.stopPropagation(),this.isDirty(e)&&!await xr("Unsaved changes will be lost: Do you really want to close?"))return;const t=this.getTabPanel(e);if(!t)return;const n=this.contributions.find(s=>s.name===e);if(!n)return;this.cleanupTabInstance(t),this.clearActiveSignalsIfPartInPanel(t);const i=this.contributions.indexOf(n);i>-1&&this.contributions.splice(i,1),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(r,e){this.getTab(r).classList.toggle("part-dirty",e)}isDirty(r){return this.getTab(r).classList.contains("part-dirty")}loadAndResolveContributions(){this.containerId&&(this.contributions=x.getContributions(this.containerId),this.requestUpdate())}cleanupTabInstance(r){const e=this.resizeObservers.get(r);e&&(e.disconnect(),this.resizeObservers.delete(r));const t=r.querySelector(".tab-content");if(t&&t.firstElementChild){const n=t.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}ensureTabGroupListenersAndActivate(){if(!this.tabGroup.value||this.tabGroupListenersAttached){this.activateNextAvailableTab();return}this.tabGroupListenersAttached=!0;const r=this.tabGroup.value;r.addEventListener("wa-tab-show",e=>{const t=this.getTabPanel(e.detail.name);t&&(this.syncActiveSignalsFromPanel(t),this.updateToolbarFromComponent(t),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(t),this.setupToolbarResizeObserver(t)}))}),r.addEventListener("part-toolbar-changed",e=>{const n=e.target.closest("wa-tab-panel");n&&(this.updateToolbarFromComponent(n),requestAnimationFrame(()=>this.updateToolbarHeightVariable(n)))}),r.addEventListener("part-contextmenu-changed",e=>{const n=e.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),r.addEventListener("click",e=>{const t=e.target,n=t.closest("wa-tab");if(n){const o=n.getAttribute("panel");if(o){const a=this.getTabPanel(o);a&&this.syncActiveSignalsFromPanel(a)}return}const i=t.closest("wa-scroller.tab-content");if(!i)return;const s=i.closest("wa-tab-panel");s&&this.syncActiveSignalsFromPanel(s)}),r.addEventListener("contextmenu",e=>{const t=e,n=t.target.closest("wa-scroller.tab-content");if(!n)return;t.preventDefault();const i=n.closest("wa-tab-panel");i&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const s=i.querySelector("lyra-contextmenu");s&&s.show({x:t.clientX,y:t.clientY},t)})}),this.dirtySignalCleanup?.(),this.dirtySignalCleanup=Tn(gr,e=>{if(!e)return;const t=e.closest("wa-tab-panel");if(!t||!this.contains(t))return;const n=t.getAttribute("name");n&&this.markDirty(n,e.isDirty())}),this.activateNextAvailableTab()}disconnectedCallback(){this.dirtySignalCleanup?.(),this.dirtySignalCleanup=void 0,super.disconnectedCallback()}activateNextAvailableTab(){if(!this.tabGroup.value)return;const r=this.tabGroup.value.querySelectorAll("wa-tab");if(r.length>0){const e=r.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(r){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${r}']`):null}getTab(r){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${r}']`):null}syncActiveSignalsFromPanel(r){const t=r.querySelector(".tab-content")?.firstElementChild;t instanceof de&&(re.set(null),tt.set(null),re.set(t),this.containerId===ke&&t.isEditor&&tt.set(t))}clearActiveSignalsIfPartInPanel(r){const e=Array.from(r.querySelectorAll("*")).filter(t=>t instanceof de);for(const t of e)re.get()===t&&re.set(null),tt.get()===t&&tt.set(null)}updateToolbarFromComponent(r){const e=r.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof de)||!t.renderToolbar)return;const n=r.querySelector("lyra-toolbar");n&&(n.partToolbarRenderer=()=>t.renderToolbar(),n.requestUpdate())}updateContextMenuFromComponent(r){const e=r.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof de)||!t.renderContextMenu)return;const n=r.querySelector("lyra-contextmenu");n&&(n.partContextMenuRenderer=()=>t.renderContextMenu(),n.requestUpdate())}updateToolbarHeightVariable(r){const e=r.querySelector(".tab-toolbar");if(!e)return;const t=e.offsetHeight;r.style.setProperty("--toolbar-height",`${t}px`)}setupToolbarResizeObserver(r){if(this.resizeObservers.has(r))return;const e=r.querySelector(".tab-toolbar");if(!e)return;const t=new ResizeObserver(()=>{this.updateToolbarHeightVariable(r)});t.observe(e),this.resizeObservers.set(r,t)}truncateTabLabel(r){if(!r||r.length<=Ie.MAX_TAB_LABEL)return r;const e="…",t=Ie.MAX_TAB_LABEL-e.length,n=Math.floor(t/2);return r.slice(0,n)+e+r.slice(-(t-n))}renderEmptyState(){const r=Te.getCurrentApp();return p`
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
                ${mi(this.contributions,r=>r.name,r=>{const e=r.label??r.name,t=this.truncateTabLabel(e);return p`
                        <wa-tab panel="${r.name}"
                                title="${e}"
                                @auxclick="${n=>this.handleTabAuxClick(n,r)}">
                            ${H(r.icon,{label:e})}
                            ${t}
                            ${N(r.closable,()=>p`
                                <wa-icon name="xmark" label="Close"  @click="${n=>this.closeTab(n,r.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${r.name}">
                            ${N(r.toolbar!==!1,()=>p`
                                <lyra-toolbar id="toolbar:${r.editorId??r.name}"
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===ke}"></lyra-toolbar>
                            `)}
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${r.component?r.component(r.name):P}
                            </wa-scroller>
                            ${N(r.contextMenu!==!1,()=>p`
                                <lyra-contextmenu id="contextmenu:${r.name}"
                                               ?is-editor="${this.containerId===ke}"></lyra-contextmenu>
                            `)}
                        </wa-tab-panel>
                    `})}
            </wa-tab-group>
        `}};Ie.MAX_TAB_LABEL=16;Ie.styles=j`
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
    `;Hr([m({reflect:!0})],Ie.prototype,"placement",2);Hr([$()],Ie.prototype,"contributions",2);Ie=Hr([_("lyra-tabs")],Ie);var Ro=Object.defineProperty,To=Object.getOwnPropertyDescriptor,_t=(r,e,t,n)=>{for(var i=n>1?void 0:n?To(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Ro(e,t,i),i};let st=class extends Fe{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=r=>{if(!this.resizing)return;const t=(this.orientation==="horizontal"?r.clientX:r.clientY)-this.resizing.startPos,n=[...this.resizing.startSizes];n[this.resizing.handleIndex]+=t,n[this.resizing.handleIndex+1]-=t;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=i*.05;if(n[this.resizing.handleIndex]>=s&&n[this.resizing.handleIndex+1]>=s){this.resizing.currentSizes=n;const o=n.map((a,l)=>{const d=`${(a/i*100).toFixed(2)}%`;return l===n.length-1?d:`${d} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=o:this.style.gridTemplateRows=o}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/r*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const r=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(r.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=r,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(r){super.updated(r),r.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,t)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${t*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${t*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(r,e){if(r.preventDefault(),e>=this.gridChildren.length-1)return;const t=this.orientation==="horizontal"?r.clientX:r.clientY,n=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(s=>s.endsWith("%")?parseFloat(s)/100*n:(s.endsWith("px"),parseFloat(s)));this.resizing={handleIndex:e,startPos:t,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return P;const r=this.gridSizes.flatMap((e,t)=>t===this.gridSizes.length-1?[e]:[e,"1px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=r,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=r),this.style.overflow="hidden",p`
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
                    `}return P})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};_t([m()],st.prototype,"orientation",2);_t([m()],st.prototype,"sizes",2);_t([$()],st.prototype,"gridSizes",2);_t([$()],st.prototype,"gridChildren",2);st=_t([_("lyra-resizable-grid")],st);var Po=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,Gr=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ao(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Po(e,t,i),i};let $t=class extends Qt{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return p`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};$t.styles=j`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;Gr([m()],$t.prototype,"message",2);Gr([m()],$t.prototype,"icon",2);$t=Gr([_("lyra-no-content")],$t);const Yt="language",Et="en";function Lo(r,e){return e?r.replace(/\{(\w+)\}/g,(t,n)=>e[n]!==void 0?e[n]:t):r}const Bt=new Set([Et]),Kr=ze(Bt);let Vr=null;function _o(r){let e=!1;for(const t of r){const n=t.toLowerCase().replace("-","_");Bt.has(n)||(Bt.add(n),e=!0)}if(e&&(Kr.set(new Set(Bt)),Vr===null)){const t=nr();t!==Ge.get()&&Ge.set(t)}}function nr(){const r=navigator.languages?.length?navigator.languages:[navigator.language||Et],e=Kr.get();for(const t of r){const n=t.split("-")[0].toLowerCase();if(e.has(n))return n}return Et}const Ge=ze(nr());async function Do(){const r=await L.get(Yt);Vr=r??null,Ge.set(r||nr())}G(We,r=>{Vr=r?.[Yt]??null,Ge.set(r?.[Yt]||nr())});Do();async function ut(r,e=!1){const t={};await Promise.all(Object.entries(r).map(async([o,a])=>{const l=await a(),c=l&&"default"in l?l.default:l,f=(o.match(/\.([a-zA-Z-_]+)\.json$/)?.[1]??Et).toLowerCase().replace("-","_");t[f]=c})),_o(Object.keys(t));const n=o=>{const l=Ge.get().toLowerCase().replace("-","_"),[c,d]=l.split("_"),u=d?[`${c}_${d}`,c]:[c];u.push(Et);for(const f of u){const h=t[f];if(h&&o in h)return h[o]}return o},i=Object.assign({},{then:void 0,catch:void 0,finally:void 0}),s={get(o,a){if(a in o)return o[a];const l=n(a),c=(d=>Lo(n(a),d));return c.toString=()=>e?n(a):l,c.valueOf=()=>e?n(a):l,c[Symbol.toPrimitive]=()=>e?n(a):l,e&&(c.toJSON=()=>n(a)),c}};return new Proxy(i,s)}class Oo{constructor(){this.editorInputHandlers=[],this.cachedIconContributions=null,G(xe,()=>{}),G(ue,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=x.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((t,n)=>{const i=t.priority??0,s=n.priority??0;return s!==i?s-i:t.label.localeCompare(n.label)}),this.cachedIconContributions}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((t,n)=>{const i=t.definition.ranking??0;return(n.definition.ranking??0)-i})}async ensureHandlerInitialized(e){const t=e.definition;!t.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(t.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(n=>{throw e.lazyInitPromise=void 0,n})),await e.lazyInitPromise)}getEditorOptionsForInput(e){const t=new Set,n=[];for(const i of this.editorInputHandlers){const s=i.definition;!s.canHandle(e)||t.has(s.editorId)||(t.add(s.editorId),n.push({editorId:s.editorId,title:s.label,icon:s.icon}))}return n}async handleInput(e,t){if(t!==void 0){const n=this.editorInputHandlers.find(i=>i.definition.editorId===t);if(n){await this.ensureHandlerInitialized(n);const i=await n.definition.handle(e);return i&&(i.editorId=n.definition.editorId),i}return}for(let n=0;n<this.editorInputHandlers.length;n++){const i=this.editorInputHandlers[n],s=i.definition;if(s.canHandle(e)){await this.ensureHandlerInitialized(i);const o=await s.handle(e);return o&&(o.editorId=s.editorId),o}}}getEditorArea(){return document.querySelector(`lyra-tabs#${ke}`)}async loadEditor(e,t){if(!e||("component"in e||(e=await this.handleInput(e,t)),!e||!("component"in e)))return;const n=e.editorId??t;n&&(e.editorId=n),await this.openTab({name:e.key,editorId:n,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.component})}async openTab(e){const t=this.getEditorArea();if(!t){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(t.has(e.name)){t.activate(e.name);return}t.open(e)}getFileIcon(e){const t=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),n=this.getSortedIconContributions();if(n.length===0)return"file";for(const i of n)if(i.mappings&&i.mappings[t])return i.mappings[t];return"file"}}const ot=new Oo;F.put("editorRegistry",ot);x.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const xn=(r,e)=>!r.leaf&&e.leaf?-1:r.leaf&&!e.leaf?1:r.label.localeCompare(e.label);var Io=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,Xr=(r,e,t,n)=>{for(var i=n>1?void 0:n?zo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Io(e,t,i),i};const oe=Ce("LyraFileBrowser"),K=await ut(Object.assign({"./filebrowser.de.json":()=>ne(()=>import("./filebrowser.de-5GQ10ols-BDyGxBGM.js"),[]),"./filebrowser.en.json":()=>ne(()=>import("./filebrowser.en-9Ng_7WE_-DuKn3BNV.js"),[])})),No=250;let St=class extends de{constructor(){super(...arguments),this.fileEditorOptions=[],this.treeRef=Ae(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),G(ue,r=>{r.target==="system.icons"&&this.requestUpdate()}),this.subscribe(ee,r=>this.onWorkspaceChanged(r)),this.subscribe(xe,r=>this.onWorkspaceConnected(r))}disconnectedCallback(){this.workspaceChangedDebounceId!==void 0&&(clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=void 0),this.pendingWorkspaceDir=void 0,super.disconnectedCallback()}firstUpdated(r){super.firstUpdated(r),this.setupDragAndDrop()}updated(r){super.updated(r),r.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const r=await y.getWorkspace();await this.loadWorkspace(r??void 0)}renderToolbar(){return p`
            <lyra-command icon="folder-open" title="${K.CONNECT_WORKSPACE}" dropdown="filebrowser.connections"></lyra-command>
            <lyra-command cmd="refresh_resource" icon="repeat" title="${K.REFRESH_RESOURCE}"></lyra-command>
            <lyra-command cmd="touch" icon="plus" title="${K.CREATE_NEW}" dropdown="filebrowser.create"></lyra-command>
        `}renderContextMenu(){const r=ge.get(),e=r instanceof W?r:null,t=e&&this.fileEditorOptions.length>0;return p`
            <lyra-command cmd="open_editor" icon="folder-open">${K.OPEN}</lyra-command>
            ${t?p`
                <wa-dropdown-item>
                    ${H("folder-open",{slot:"icon"})}
                    ${K.OPEN_WITH}
                    ${this.fileEditorOptions.map(n=>p`
                        <lyra-command
                            slot="submenu"
                            cmd="open_editor"
                            icon="${n.icon??"file"}"
                            .params=${{path:e.getWorkspacePath(),editorId:n.editorId}}>
                            ${n.title}
                        </lyra-command>
                    `)}
                </wa-dropdown-item>
            `:P}
            <lyra-command cmd="touch" icon="plus" dropdown="filebrowser.create">${K.CREATE_NEW}</lyra-command>
        `}onWorkspaceChanged(r){this.pendingWorkspaceDir=r,this.workspaceChangedDebounceId!==void 0&&clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=setTimeout(()=>{this.workspaceChangedDebounceId=void 0;const e=this.pendingWorkspaceDir;this.pendingWorkspaceDir=void 0,e?this.applyWorkspaceChange(e):this.loadWorkspace(void 0,!0)},No)}async applyWorkspaceChange(r){ge.set(void 0),await this.loadWorkspace(r,!0),await this.syncTreeSelection()}async onWorkspaceConnected(r){await this.loadWorkspace(r,!0)}async loadWorkspace(r,e=!1){this.workspaceDir=r,r?this.root=await this.resourceToTreeNode(r,!0,e):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&ge.set(e[0].model?.data)}async resourceToTreeNode(r,e=!1,t=!1){const n=r instanceof W,i={data:r,label:r.getName(),leaf:n,children:[]};if(r instanceof q&&!r.getParent())try{const s=await y.getFolderInfoForDirectory(r);s?.backendName&&(i.workspaceTag=s.backendName)}catch(s){oe.debug("Failed to get workspace info for directory",s)}if(r instanceof q&&e){for(const s of await r.listChildren(t)){const o=await this.resourceToTreeNode(s,!0,t);i.children.push(o)}i.children.sort(xn)}return i}createTreeItems(r,e=!1){if(!r)return p``;const t=!r.leaf&&r.children.length===0,n=r.data,i=n instanceof W,s=!!n.getParent(),o=i?ot.getFileIcon(n.getName()):r.icon||"folder-open",a=r.workspaceTag;return p`
            <wa-tree-item 
                draggable=${s}
                @dragstart=${s?this.nobubble(l=>this.onDragStart(l,n)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(l=>this.onLazyLoad(l,r))}
                .model=${r} 
                ?expanded=${e}
                ?lazy=${t}>
                <span class="tree-label">
                    ${H(o,{label:r.leaf?K.FILE:K.FOLDER})}
                    <span class="tree-label-text">${r.label}</span>
                    ${!r.leaf&&a?p`<wa-badge appearance="outlined" variant="neutral" style="font-size: var(--wa-font-size-xs);">${a}</wa-badge>`:null}
                </span>
                ${r.children.map(l=>this.createTreeItems(l,!1))}
            </wa-tree-item>`}onDragStart(r,e){if(!r.dataTransfer||!e.getParent())return;const n=r.currentTarget?.closest("wa-tree"),i=Array.isArray(n?.selectedItems)?n.selectedItems:[],s=[];if(i.length>0)for(const c of i){const u=c.model?.data;u&&u.getParent()&&s.push(u)}s.length===0&&s.push(e);const o=s.map(c=>c.getWorkspacePath()),a=s.length===1?s[0].getName():`${s.length} items`;r.dataTransfer.effectAllowed="copyMove";const l=o.join(`
`);if(r.dataTransfer.setData("text/plain",l),r.dataTransfer.setData("application/x-workspace-file",l),r.dataTransfer.setData("text/uri-list",l),r.dataTransfer.setDragImage){const c=document.createElement("div");c.textContent=a,c.style.position="absolute",c.style.top="-1000px",c.style.padding="4px 8px",c.style.background="var(--wa-color-neutral-10)",c.style.border="1px solid var(--wa-color-neutral-30)",c.style.borderRadius="4px",document.body.appendChild(c),r.dataTransfer.setDragImage(c,0,0),setTimeout(()=>document.body.removeChild(c),0)}}async onLazyLoad(r,e){const t=e.data;t instanceof q&&e.children.length===0&&await this.loadNodeChildren(e,t)}async loadNodeChildren(r,e){if(!this.loadingNodes.has(r)){this.loadingNodes.add(r);try{for(const t of await e.listChildren(!1)){Kn&&t.getName().startsWith(".");const n=await this.resourceToTreeNode(t,!1);r.children.push(n)}r.children.sort(xn),this.requestUpdate()}catch(t){oe.error("Failed to load directory children:",t)}finally{this.loadingNodes.delete(r)}}}async onFileDoubleClicked(r){const t=r.currentTarget.model.data;t instanceof W&&(ge.set(t),this.executeCommand("open_editor",{}))}onSelectionChanged(r){const e=r.detail.selection;if(e&&e.length>0){const n=e[0].model.data;ge.set(n),n instanceof W?(this.fileEditorOptions=ot.getEditorOptionsForInput(n),this.updateContextMenu()):(this.fileEditorOptions=[],this.updateContextMenu())}else ge.set(void 0),this.fileEditorOptions=[],this.updateContextMenu()}setupDragAndDrop(){const r=this.treeRef.value;if(!r)return;const e=s=>{const o=s.dataTransfer?.types;if(!o)return;const a=o.includes("Files"),l=o.includes("application/x-workspace-file");if(!a&&!l)return;s.preventDefault(),s.dataTransfer&&(l?s.dataTransfer.dropEffect=s.ctrlKey||s.metaKey?"copy":"move":s.dataTransfer.dropEffect="copy"),r.classList.add("drag-over");const d=s.target.closest("wa-tree-item");d&&d!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=d,d.classList.add("drop-target"))},t=s=>{const o=s.dataTransfer?.types;if(!o)return;const a=o.includes("Files"),l=o.includes("application/x-workspace-file");!a&&!l||(s.preventDefault(),r.classList.add("drag-over"))},n=s=>{const o=r.getBoundingClientRect(),a=s.clientX,l=s.clientY;(a<=o.left||a>=o.right||l<=o.top||l>=o.bottom)&&(r.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async s=>{if(s.preventDefault(),r.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!s.dataTransfer||!this.workspaceDir)return;const o=await this.getDropTarget(s),a=s.dataTransfer.types;if(a.includes("Files")){const l=Array.from(s.dataTransfer.files);if(l.length===0)return;await this.handleFilesDrop(l,o);return}if(a.includes("application/x-workspace-file")){await this.handleWorkspaceDrop(s,o);return}};r.removeEventListener("dragover",e),r.removeEventListener("dragenter",t),r.removeEventListener("dragleave",n),r.removeEventListener("drop",i),r.addEventListener("dragover",e),r.addEventListener("dragenter",t),r.addEventListener("dragleave",n),r.addEventListener("drop",i)}async getDropTarget(r){const t=r.target.closest("wa-tree-item");if(t){const i=t.model.data;if(i instanceof q)return i;const s=i.getParent();if(s)return s}return this.workspaceDir}async handleWorkspaceDrop(r,e){if(!r.dataTransfer)return;const t=r.dataTransfer.getData("application/x-workspace-file");if(!t)return;const n=t.split(/\r?\n/).map(f=>f.trim()).filter(f=>!!f);if(n.length===0)return;const i=await y.getWorkspace();if(!i){oe.warn("Workspace drop ignored because no workspace is connected");return}const s=async f=>{const h=f.getWorkspace(),g=e.getWorkspace();return!h||!g?!1:h===g&&!(r.ctrlKey||r.metaKey)},o=new Set,a=e.getWorkspace();let l=0,c=0;const d=[];for(const f of n)try{const h=await i.getResource(f);if(!h){oe.warn(`Workspace drop: source not found for path "${f}"`),c++;continue}d.push({path:f,resource:h});const g=h.getWorkspace();g&&o.add(g)}catch(h){oe.error(`Failed to handle workspace drop for "${f}":`,h),c++}if(d.length===0){c>0&&oe.info(`Workspace drop failed for ${c} item(s)`);return}let u=!1;if(a){for(const f of o)if(f!==a){u=!0;break}}if(u&&a)try{const f=Array.from(o),h=await y.getFolderInfoForDirectory(f[0]),g=await y.getFolderInfoForDirectory(a),C=h?.backendName??K.UNKNOWN_BACKEND,A=g?.backendName??K.UNKNOWN_BACKEND;if(!await xr(K.DND_CROSS_CONNECTION_CONFIRM({count:String(d.length),srcBackend:C,destBackend:A})))return}catch(f){oe.debug("Failed to resolve cross-connection info for DnD",f)}for(const{path:f,resource:h}of d)try{const g=await s(h);await y.copyResource(h,e,{move:g}),l++}catch(g){oe.error(`Failed to handle workspace drop for "${f}":`,g),c++}oe.info(`Workspace drop completed: ${l}/${d.length} items ${c>0?`, ${c} failed`:""}`),await this.loadWorkspace(this.workspaceDir,!0)}async handleFilesDrop(r,e){const t=r.length;let n=0,i=0,s=0;for(const o of r)try{const a=this.buildTargetPath(e,o.name);if(await this.workspaceDir.getResource(a)&&!await xr(K.FILE_EXISTS_OVERWRITE({fileName:o.name}))){s++;continue}await(await this.workspaceDir.getResource(a,{create:!0})).saveContents(o),n++}catch(a){oe.error(`Failed to upload ${o.name}:`,a),i++}oe.info(`Uploaded ${n}/${t} files${s>0?`, ${s} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(r,e){const t=r.getWorkspacePath();return t?`${t}/${e}`:e}render(){return p`
            <div class="tree" ${Le(this.treeRef)} style="--drop-files-text: '${K.DROP_FILES_HERE}'">
                ${N(!this.workspaceDir,()=>p`
                    <lyra-no-content message="${K.SELECT_WORKSPACE}"></lyra-no-content>`,()=>N(this.root,()=>p`
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.root.children.map(r=>this.createTreeItems(r,!0))}
                </wa-tree>`,()=>p``))}
            </div>
        `}};St.styles=j`
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
    `;Xr([$()],St.prototype,"root",2);Xr([$()],St.prototype,"fileEditorOptions",2);St=Xr([_("lyra-filebrowser")],St);var Fo=Object.getOwnPropertyDescriptor,Uo=(r,e,t,n)=>{for(var i=n>1?void 0:n?Fo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(i)||i);return i};const kr=await ut(Object.assign({"./tasks.de.json":()=>ne(()=>import("./tasks.de-Uc1ZhJAb-Bm0wNkDH.js"),[]),"./tasks.en.json":()=>ne(()=>import("./tasks.en-ErE1So2Z-eCglTKJa.js"),[])}));x.registerContribution(tr,{component:"<lyra-tasks></lyra-tasks>"});let mt=null;function ni(){return mt||(mt=document.createElement("div"),mt.id="progress-dialog-container",document.body.appendChild(mt)),mt}function kn(){return ni().querySelector("wa-dialog")}function Bo(){ii(!0)}function ii(r=!1){const e=ni(),t=rt.getActiveTasks();if(t.length===0){pe(p``,e);return}const i=kn();if(!(r||i?.open===!0))return;const o=()=>{const c=kn();c&&(c.open=!1)},a=()=>{pe(p``,e)},l=p`
        <wa-dialog 
            label="${kr.ACTIVE_TASKS}" 
            open
            light-dismiss
            style="--width: 600px;"
            @wa-request-close=${o}
            @wa-after-hide=${a}
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
    `;pe(l,e)}let $r=class extends de{doBeforeUI(){this.watch(mr,()=>{ii(),this.requestUpdate()})}handleIndicatorClick(){Bo()}render(){mr.get();const e=rt.getActiveTasks().length;return e===0?p``:p`
            <div class="tasindicator" @click=${this.handleIndicatorClick} title="${kr.ACTIVE_TASKS_TITLE({taskCount:e.toString()})}">
                <wa-spinner
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);"
                    label="${kr.ACTIVE_TASKS}"
                ></wa-spinner>
                <wa-badge appearance="outlined" variant="neutral" pill>${e}</wa-badge>
                <div class="tasbar-wrap"><wa-progress-bar indeterminate></wa-progress-bar></div>
            </div>
        `}};$r.styles=j`
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
    `;$r=Uo([_("lyra-tasks")],$r);var jo=Object.getOwnPropertyDescriptor,Wo=(r,e,t,n)=>{for(var i=n>1?void 0:n?jo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(i)||i);return i};const hr=await ut(Object.assign({"./partname.de.json":()=>ne(()=>import("./partname.de-FFi67qCi-iLAwhB2n.js"),[]),"./partname.en.json":()=>ne(()=>import("./partname.en-DvPivLXR-DGb3aT7k.js"),[])}));x.registerContribution(tr,{component:"<lyra-part-name></lyra-part-name>"});let $n=class extends Fe{doBeforeUI(){this.watch(re,()=>{this.requestUpdate()})}getPartName(){const r=re.get();return r&&(r.tabContribution?.label||r.getAttribute("id"))||hr.NO_PART}render(){const e=re.get()?.tabContribution?.icon||"box";return p`
            <wa-button 
                appearance="plain"
                size="small"
                title="${hr.ACTIVE_PART}">
                ${H(e,{label:"Part",slot:"start"})}
                ${this.getPartName()}
            </wa-button>
        `}};$n=Wo([_("lyra-part-name")],$n);var Mo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,Dt=(r,e,t,n)=>{for(var i=n>1?void 0:n?qo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Mo(e,t,i),i};const Ho=Ce("LyraExtensions"),I=await ut(Object.assign({"./extensions.de.json":()=>ne(()=>import("./extensions.de-CZkqW0F1-C2K7_1Fj.js"),[]),"./extensions.en.json":()=>ne(()=>import("./extensions.en-Dg9Oqudm-BWVq_zKr.js"),[])}));let Ke=class extends de{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){G(yt,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(r){R.enable(r.id,!0),this.requestUpdate()}disable(r){R.disable(r.id,!0),this.requestUpdate()}isExtensionRequired(r){const e=Te.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(r)}selectionChanged(r){const e=r.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return R.getExtensions();const r=this.filterText.toLowerCase();return R.getExtensions().filter(e=>String(e.name).toLowerCase().includes(r)||(e.description?String(e.description).toLowerCase().includes(r):!1)||e.id.toLowerCase().includes(r))}getGroupedExtensions(){const r=this.getFilteredExtensions(),e=[],t=[];return r.forEach(n=>{R.isEnabled(n.id)?e.push(n):t.push(n)}),e.sort((n,i)=>String(n.name).localeCompare(String(i.name))),t.sort((n,i)=>String(n.name).localeCompare(String(i.name))),{enabled:e,available:t}}isExternalExtension(r){return r.external===!0}handleFilterInput(r){this.filterText=r.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const r=await so("Enter extension URL or source identifier:","",!1);if(!r)return;await rt.runAsync("Registering extension",async()=>{let e=r;we.isGitHubUrl(r)&&(e=we.convertGitHubUrlToSource(r));const t=we.parseSource(e);t?.type==="github"?await this.fetchGitHubMetadata(t,e):(this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(r){T(`Failed to register extension: ${r}`)}}async fetchGitHubMetadata(r,e){try{const t=await we.fetchGitHubPackageJson(r),n=r.owner,i=r.repo,s=t.name||`ext.${n}-${i}`,o=t.name||`${n}/${i}`,a=t.description||"",l=t.version||"",c=t.author||(typeof t.author=="string"?t.author:t.author?.name)||"";this.registerExtensionData={id:s,name:o,description:a,url:e,version:l,author:c,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(t){Ho.warn(`Could not fetch package.json, using defaults: ${t}`),this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){T("URL is required");return}if(!this.registerExtensionData.id){T("Extension ID is required");return}if(!this.registerExtensionData.name){T("Extension name is required");return}try{await rt.runAsync("Registering extension",async()=>{const r={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};R.registerExtension(r),await R.loadExtensionFromUrl(this.registerExtensionData.url,r.id),$e(`Extension ${r.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(r){T(`Failed to register extension: ${r}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return p`
            <wa-input
                placeholder="${I.FILTER_PLACEHOLDER}"
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
                                            ${I.INSTALLED} (${r.enabled.length})
                                        </span>
                                        ${r.enabled.map(t=>{const n=this.isExternalExtension(t);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                                    <span>${H(t.icon)}</span> ${t.name}${n?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                                ${r.available.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                            ${I.AVAILABLE} (${r.available.length})
                                        </span>
                                        ${r.available.map(t=>{const n=this.isExternalExtension(t);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                                    <span>${H(t.icon)}</span> ${t.name}${n?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                            `:""}
                            ${e?"":p`
                                <div style="padding: 1em; text-align: center; opacity: 0.7;">
                                    ${I.NO_MATCHES({filterText:this.filterText})}
                                </div>
                            `}
                        </wa-tree>
                    </wa-scroller>
                </div>
                <wa-scroller slot="end" class="extensions-detail-scroller" orientation="vertical">
                <div class="extensions-detail-content">
                    ${N(this.selectedExtension,t=>{const n=this.isExternalExtension(t),i=R.isEnabled(t.id);return p`
                                <h1>${H(t.icon)} ${t.name}${n?" (External)":""}</h1>
                                ${N(n,()=>p`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${I.EXTERNAL_EXTENSION}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${N(i,()=>p`
                                        <wa-button 
                                            title="${this.isExtensionRequired(t.id)?I.REQUIRED_HINT:I.DISABLE_TITLE}" 
                                            @click="${()=>this.disable(t)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(t.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${I.UNINSTALL}
                                        </wa-button>
                                        ${N(this.isExtensionRequired(t.id),()=>p`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${I.REQUIRED_HINT}</span>
                                            </div>
                                        `)}
                                    `,()=>p`
                                        <wa-button 
                                            title="${I.ENABLE_TITLE}" 
                                            @click="${()=>this.enable(t)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${I.INSTALL}
                                        </wa-button>
                                    `)}
                                </div>

                                ${N(t.experimental,()=>p`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${I.EXPERIMENTAL}</i></small>
                                    </div>
                                `)}

                                ${N(t.version||t.author,()=>p`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${N(t.version,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${I.VERSION} <strong>${t.version}</strong></span>
                                            </div>
                                        `)}
                                        ${N(t.author,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${I.AUTHOR} <strong>${t.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${t.description}</p>

                                ${N(t.dependencies&&t.dependencies.length>0,()=>p`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${I.DEPENDENCIES}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${t.dependencies.map(s=>{const o=R.getExtensions().find(l=>l.id===s),a=R.isEnabled(s);return p`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${a?"check-circle":"circle"}" 
                                                            style="color: ${a?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        ${H(o?.icon??"puzzle-piece")}
                                                        <span>${o?.name||s}</span>
                                                        ${a?"":p`
                                                            <span class="dependency-badge">${I.NOT_INSTALLED}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${I.DEPENDENCIES_HINT}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
                </wa-scroller>
            </wa-split-panel>
        `}};Ke.styles=j`
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
    `;Dt([$()],Ke.prototype,"selectedExtension",2);Dt([$()],Ke.prototype,"filterText",2);Dt([$()],Ke.prototype,"showRegisterDialog",2);Dt([$()],Ke.prototype,"registerExtensionData",2);Ke=Dt([_("lyra-extensions")],Ke);var Go=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,ir=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ko(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Go(e,t,i),i};const z=await ut(Object.assign({"./logterminal.de.json":()=>ne(()=>import("./logterminal.de-MX1cr5ek-EcKGbnDh.js"),[]),"./logterminal.en.json":()=>ne(()=>import("./logterminal.en-BHVSaQqb-DpFjNbQM.js"),[])}));let at=class extends de{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Ae()}connectedCallback(){super.connectedCallback(),this.loadSettings(),Si(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Ci()}log(r,e,t="info"){const n={timestamp:new Date,level:t,source:r,message:e};this.messages=[...this.messages,n],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(r=>r.level===this.filter)}formatTimestamp(r){return r.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(r){switch(r){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(r){switch(r){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const r=this.messages.filter(i=>i.level==="info").length,e=this.messages.filter(i=>i.level==="warning").length,t=this.messages.filter(i=>i.level==="error").length,n=this.messages.filter(i=>i.level==="debug").length;return p`
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
        `}async loadSettings(){const r=await this.getDialogSetting();r&&(typeof r.filter=="string"&&(r.filter==="all"||["info","warning","error","debug"].includes(r.filter))&&(this.filter=r.filter),typeof r.autoScroll=="boolean"&&(this.autoScroll=r.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};at.styles=j`
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
    `;ir([$()],at.prototype,"messages",2);ir([$()],at.prototype,"autoScroll",2);ir([$()],at.prototype,"filter",2);at=ir([_("lyra-log-terminal")],at);var Vo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,se=(r,e,t,n)=>{for(var i=n>1?void 0:n?Xo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Vo(e,t,i),i};const Yo=await ut(Object.assign({"./fastviews.de.json":()=>ne(()=>import("./fastviews.de-MGAlHTsp-CU9Rj7sS.js"),[]),"./fastviews.en.json":()=>ne(()=>import("./fastviews.en-BoYc4WrC-DnZQwCTs.js"),[])}));let X=class extends Qt{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=Ae(),this.tabsRef=Ae(),this.resizeHandleRef=Ae(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(r){if(!this.disabled)if(this.containerId){const e=document.querySelector(`lyra-tabs#${this.containerId}`);if(!e){console.error(`fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(r)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(r)})}handleDrawerHide(){this.drawerOpen=!1}startResize(r){r.preventDefault(),r.stopPropagation();const e=this.drawerRef.value;if(!e)return;let n=(()=>{const o=e.shadowRoot?.querySelector('[part="panel"]');if(o&&o.offsetWidth>0)return o.offsetWidth;const c=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(c){const d=parseFloat(c[1]),u=c[2];if(u==="px")return d;if(u==="vw")return d/100*window.innerWidth;if(u==="vh")return d/100*window.innerHeight;if(u==="%")return d/100*window.innerWidth}return 0})();n===0&&(n=window.innerWidth*.5);const i=o=>{this.resizing&&(o.preventDefault(),o.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const a=this.resizing.startX-o.clientX,l=Math.round(this.resizing.startSize+a),c=200,d=Math.round(window.innerWidth*.9);if(l>=c&&l<=d){this.drawerSize=`${l}px`;const u=this.drawerRef.value;u&&(u.style.setProperty("--size",this.drawerSize),u.style.setProperty("transition","none"))}this.resizing.rafId=null}))},s=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const o=this.drawerRef.value;o&&o.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:r.clientX,startSize:n,handleMouseMove:i,handleMouseUp:s,rafId:null},document.addEventListener("mousemove",i,{passive:!1}),document.addEventListener("mouseup",s,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),G(ue,r=>{this.target&&r.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const r=x.getContributions(this.target);this.tabContributions=r.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(r){return p`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(r)}>
                ${H(r.icon,{label:r.label,slot:"icon"})}
                ${r.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?P:p`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    ${H(this.icon,{label:this.title,slot:"start"})}
                    <slot></slot>
                </wa-button>
                
                ${this.title?p`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:P}
                
                ${this.tabContributions.map(r=>this.renderTabContribution(r))}
            </wa-dropdown>

            ${this.containerId?P:p`
                <wa-drawer 
                    ${Le(this.drawerRef)}
                    label="${this.title||Yo.FAST_VIEWS}"
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
        `:P}};X.styles=j`
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
    `;se([m()],X.prototype,"target",2);se([m()],X.prototype,"title",2);se([m()],X.prototype,"icon",2);se([m({type:Boolean})],X.prototype,"disabled",2);se([m()],X.prototype,"appearance",2);se([m()],X.prototype,"size",2);se([m()],X.prototype,"placement",2);se([m()],X.prototype,"containerId",2);se([$()],X.prototype,"tabContributions",2);se([$()],X.prototype,"drawerOpen",2);se([$()],X.prototype,"drawerSize",2);X=se([_("lyra-fastviews")],X);var Zo=Object.getOwnPropertyDescriptor,Qo=(r,e,t,n)=>{for(var i=n>1?void 0:n?Zo(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=o(i)||i);return i};function Jo(){let r=document.getElementById("global-dialog-container");return r||(r=document.createElement("div"),r.id="global-dialog-container",document.body.appendChild(r)),r}const si=r=>{try{return new Intl.DisplayNames([r],{type:"language"}).of(r)||r.toUpperCase()}catch{return r.toUpperCase()}},ea=()=>[...Kr.get()].sort(),ta=async()=>{const r=ea(),e=Ge.get();return new Promise(t=>{const n=Jo();let i=!1;const s=()=>{const c=n.querySelector("wa-dialog");c&&!i&&(c.open=!1)},o=()=>{i||(i=!0,pe(p``,n),t())},a=async c=>{await L.set(Yt,c),s()},l=p`
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
                            @click=${()=>a(c)}>
                            <span class="language-code">${c.toUpperCase()}</span>
                            <span class="language-name">${si(c)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;pe(l,n)})};let Er=class extends Fe{render(){const r=Ge.get(),e=si(r),t=`${r.toUpperCase()} ${e}`;return p`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>ta()}>
                ${t}
            </wa-button>
        `}};Er.styles=j`
        :host {
            display: inline-block;
        }
    `;Er=Qo([_("lyra-language-selector")],Er);var ra=Object.defineProperty,na=Object.getOwnPropertyDescriptor,oi=(r,e,t,n)=>{for(var i=n>1?void 0:n?na(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ra(e,t,i),i};let Zt=class extends Fe{constructor(){super(...arguments),this.currentLayoutId="standard"}doBeforeUI(){this.currentLayoutId=Te.getCurrentLayoutId();const r=()=>{this.currentLayoutId=Te.getCurrentLayoutId(),this.requestUpdate()};return window.addEventListener("app-loaded",r),window.addEventListener("layout-changed",r),()=>{window.removeEventListener("app-loaded",r),window.removeEventListener("layout-changed",r)}}async handleSelect(r){const e=r.detail?.item?.value;if(!(!e||e===this.currentLayoutId))try{await Te.setPreferredLayoutId(e)}catch(t){console.error("Failed to switch layout:",t)}}render(){const r=Te.getRegisteredLayouts();if(r.length<=1)return p``;const t=r.find(n=>n.id===this.currentLayoutId)?.name??this.currentLayoutId;return p`
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
                            ${H(n.icon,{label:n.name,slot:"icon"})}
                            ${n.name}
                        </wa-dropdown-item>
                    `)}
            </wa-dropdown>
        `}};Zt.styles=j`
        :host {
            display: inline-block;
        }
    `;oi([$()],Zt.prototype,"currentLayoutId",2);Zt=oi([_("lyra-layout-switcher")],Zt);const ia="view.filebrowser",sa="view.logTerminal",oa="toolbar.info",aa="toolbar.fastViews",la="toolbar.languageSelector",ca="toolbar.appSwitcher";x.registerContribution(Kt,{name:ia,label:"Workspace",icon:"folder-open",component:r=>p`<lyra-filebrowser id="${r}"></lyra-filebrowser>`});x.registerContribution(Nr,{name:sa,label:"Log Messages",icon:"list",component:r=>p`<lyra-log-terminal id="${r}"></lyra-log-terminal>`});x.registerContribution(Tt,{name:oa,label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});x.registerContribution(Tt,{name:aa,label:"Fast Views",component:'<lyra-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></lyra-fastviews>'});x.registerContribution(Tt,{name:la,label:"Language",component:()=>p`<lyra-language-selector></lyra-language-selector>`});x.registerContribution(ct,{name:ca,label:"App Switcher",component:()=>p`<lyra-layout-switcher></lyra-layout-switcher>`});var da=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,Ot=(r,e,t,n)=>{for(var i=n>1?void 0:n?pa(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&da(e,t,i),i};let lt=class extends qr{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return p`
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
                <lyra-toolbar id=${jn}></lyra-toolbar>
                <lyra-toolbar id=${Wn}></lyra-toolbar>
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
                                    <lyra-tabs id="${Kt}"></lyra-tabs>
                                    <lyra-tabs id="${Hn}"></lyra-tabs>
                                </lyra-resizable-grid>
                            `:p`<lyra-tabs id="${Kt}"></lyra-tabs>`}
                    `:P}
                
                ${this.showBottomPanel?p`
                        <lyra-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <lyra-tabs id="${ke}"></lyra-tabs>
                            <lyra-tabs id="${Nr}"></lyra-tabs>
                        </lyra-resizable-grid>
                    `:p`<lyra-tabs id="${ke}"></lyra-tabs>`}
                
                ${this.showAuxSidebar?p`<lyra-tabs id="${Gn}"></lyra-tabs>`:P}
            </lyra-resizable-grid>
            
            <div class="toolbar-bottom">
                <lyra-toolbar id=${Mn}></lyra-toolbar>
                <lyra-toolbar id=${tr}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${Tt}></lyra-toolbar>
            </div>
        `}};Ot([m({type:Boolean,attribute:"show-bottom-sidebar"})],lt.prototype,"showBottomSidebar",2);Ot([m({type:Boolean,attribute:"show-bottom-panel"})],lt.prototype,"showBottomPanel",2);Ot([m({type:Boolean,attribute:"show-left-sidebar"})],lt.prototype,"showLeftSidebar",2);Ot([m({type:Boolean,attribute:"show-aux-sidebar"})],lt.prototype,"showAuxSidebar",2);lt=Ot([_("lyra-standard-layout")],lt);const ua=[{id:"standard",name:"Standard",label:"Standard",icon:"lyra layout-standard",component:"lyra-standard-layout"},{id:"standard-bottom-panel",name:"Standard (bottom panel)",label:"Standard (bottom panel)",icon:"lyra layout-standard-bottom-panel",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true"}}},{id:"standard-bottom-sidebar",name:"Standard (bottom sidebar)",label:"Standard (bottom sidebar)",icon:"lyra layout-standard-bottom-sidebar",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-sidebar":"true"}}},{id:"standard-full",name:"Standard (panel + sidebar)",label:"Standard (panel + sidebar)",icon:"lyra layout-standard-full",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true","show-bottom-sidebar":"true"}}}];for(const r of ua)x.registerContribution(Gt,r);async function ha(r,e=!0){const t=await y.getWorkspace();if(!t)return null;const n=r?.path;return e&&!n?null:{workspace:t,path:n||""}}function Yr(r){return r&&typeof r.getContent=="function"&&typeof r.getSelection=="function"&&typeof r.getSnippet=="function"&&typeof r.getLanguage=="function"&&typeof r.getFilePath=="function"}function Pe(r=!1){const e={filePath:null,language:null};return r?{...e,snippet:null,cursorLine:null}:e}async function fa(r,e=!0){const t=await ha(r,e);if(!t)return null;const{workspace:n,path:i}=t;if(!i)return null;try{const s=await n.getResource(i);return!s||!(s instanceof W)?null:{workspace:n,path:i,file:s}}catch{return null}}D({command:{id:"disconnect_folder",name:"Disconnect folder",description:"Disconnects a folder from the workspace"},handler:{execute:async()=>{const r=ge.get();if(!(r instanceof q&&r.getParent()===void 0)){T("Select a folder root to disconnect.");return}try{await y.disconnectFolder(r)}catch(e){T(e.message)}}},contribution:{target:"contextmenu:filebrowser",label:"Disconnect folder",icon:"folder-minus",disabled:()=>{const r=ge.get();return!(r instanceof q&&r.getParent()===void 0)}}});D({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async r=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>y.connectWorkspace(e)).catch(e=>{T(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});D({command:{id:"connect_opfs",name:"OPFS",description:"Connect to Origin Private File System (browser storage)",parameters:[]},handler:{execute:async()=>{try{await y.connectFolder({opfs:!0})}catch(r){T(r.message)}}},contribution:{target:"filebrowser.connections",label:"OPFS (Browser Storage)",icon:"database"}});D({command:{id:"connect_indexeddb",name:"IndexedDB",description:"Connect to IndexedDB-backed workspace (browser storage)",parameters:[{name:"name",description:"Optional display name for this IndexedDB workspace root",required:!1}]},handler:{execute:async r=>{const e=r.params?.name;try{await y.connectFolder({indexeddb:!0,name:e})}catch(t){T(t.message)}}},contribution:{target:"filebrowser.connections",label:"IndexedDB (Browser Storage)",icon:"database"}});D({command:{id:"refresh_resource",name:"Refresh resource",description:"Refreshes the connected folder of the selected resource, or the whole workspace if nothing is selected",parameters:[]},handler:{execute:async()=>{const r=ge.get();if(r){r.getWorkspace().touch();return}const e=await y.getWorkspace();if(!e){T("No workspace selected.");return}e.touch()}}});D({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"The path of the file to open within the workspace; if omitted, the active selection is opened",required:!1},{name:"editorId",description:"Open with this editor id; if omitted, use default editor",required:!1}]},handler:{execute:async r=>{const e=r.params?.path,t=r.params?.editorId;let n=null;if(e)n=(await fa({path:e}))?.file??null;else{const i=ge.get();n=i instanceof W?i:null}n&&await ot.loadEditor(n,t)}}});D({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async r=>{const e=r.activeEditor;if(!Yr(e))return{...Pe(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...Pe(),content:null}}}}});D({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async r=>{const e=r.activeEditor;if(!Yr(e))return{...Pe(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...Pe(),selection:null}}}}});D({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async r=>{const e=r.activeEditor;if(!Yr(e))return Pe(!0);try{const t=r.params?.lines?parseInt(r.params.lines,10):5;if(isNaN(t)||t<0)return Pe(!0);const n=e.getSnippet(t);return n?{snippet:n.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:n.cursorLine}:Pe(!0)}catch{return Pe(!0)}}}});D({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async r=>{const e=Te.getCurrentApp();if(!e){T("No app loaded");return}const t=e.dependencies??{},n=Object.keys(t).length>0,i=n?p`
                    <wa-tree style="--indent-guide-width: 1px;">
                        <wa-tree-item expanded>
                            <span>${e.name??""}</span>
                            ${Object.entries(t).map(([S,O])=>p`
                                <wa-tree-item>
                                    <span>${S} <small>${O}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    </wa-tree>
                `:p``;let s=null;const o=()=>(s||(s=document.getElementById("global-dialog-container")||document.createElement("div"),s.id||(s.id="global-dialog-container",document.body.appendChild(s))),s),a=()=>{s&&pe(p``,s)},l=S=>{const O=k.parse(S,{async:!1});return p`${Ct(O)}`};let c=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{c=await e.releaseHistory()}catch(S){console.error("Failed to load release history from app:",S),c=[]}else c=e.releaseHistory;const d=e.version??"0.0.0",u=c.length>0?c.findIndex(S=>S.tag_name===d):-1,f=u>=0?u:0;let h=f;const g=S=>{if(c.length===0)return"";const O=c[S],Ye=O.tag_name===d;let te=`**Version:** ${O.tag_name}`;Ye&&(te+=" (Current)"),te+=`

`;const Ue=new Date(O.published_at).toLocaleDateString();if(te+=`**Released:** ${Ue}

`,!Ye){const di=d.replace(/^v/,""),pi=O.tag_name.replace(/^v/,""),Zr=di.split(".").map(Number),Qr=pi.split(".").map(Number);let Jr=!1;for(let It=0;It<Math.max(Zr.length,Qr.length);It++){const en=Zr[It]||0,tn=Qr[It]||0;if(tn>en){Jr=!0;break}if(tn<en)break}Jr&&(te+=`⚠️ **Update available - reload page to update**

`)}return O.body&&(te+=`---

${O.body}`),te},C=()=>{a()},A=()=>{a()},Z=S=>{const O=g(S),Ye=c.length>0,te=p`
                    <wa-dialog 
                        label="About ${e.name??""} - ${e.version??"0.0.0"}"
                        open 
                        light-dismiss
                        style="--width: 600px;"
                        @wa-request-close=${C}
                        @wa-after-hide=${A}
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
                                        ${l(O)}
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
                                    ?disabled=${S===c.length-1}
                                    @click=${()=>{S<c.length-1&&(h=S+1,Z(h))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${S===0}
                                    @click=${()=>{S>0&&(h=S-1,Z(h))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;pe(te,o())};return Z(f),new Promise(S=>{const O=()=>{s?.querySelector("wa-dialog[open]")?setTimeout(O,100):S()};O()})}}});D({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async r=>{const e=tt.get()||re.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const r=re.get();return!r||!r.isDirty()}}});const ai="theme";async function li(r){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(r)}async function ga(){const r=await L.get(ai);await li(r||"wa-dark")}async function ma(r){await L.set(ai,r)}D({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async r=>{const t=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await li(t),await ma(t)}},contribution:{target:ct,icon:"circle-half-stroke",label:"Theme Switcher"}});ga().catch(r=>{console.error("Failed to load theme preference:",r)});D({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async r=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:ct,icon:"expand",label:"Fullscreen"}});D({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:r=>{const e={title:"Extensions",data:{},key:"system.extensions",icon:"puzzle-piece",state:{},noOverflow:!0,component:()=>p`<lyra-extensions></lyra-extensions>`};ot.loadEditor(e,"extensions-editor").then()}},contribution:{target:ct,icon:"puzzle-piece",label:"Open Extensions"}});D({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async r=>R.getExtensions().map(t=>({id:t.id,name:t.name,description:t.description,experimental:t.experimental,enabled:R.isEnabled(t.id)}))}});D({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:r,type:e}})=>{r&&(e==="error"?T(r):$e(r))}}});const ci=`self.onmessage = async function(e) {
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
`,En=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",ci],{type:"text/javascript;charset=utf-8"});function ba(r){let e;try{if(e=En&&(self.URL||self.webkitURL).createObjectURL(En),!e)throw"";const t=new Worker(e,{type:"module",name:r?.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ci),{type:"module",name:r?.name})}}function wa(){let r=null,e=null;function t(){return r||(r=new ba,r.onmessage=n=>{const i=e;e=null,i&&(n.data.type==="result"?i.resolve(n.data.value):i.reject(new Error(n.data.message??"Unknown error")))},r.onerror=n=>{const i=e;e=null,i&&i.reject(new Error(n.message??"Worker error"))}),r}return{execute(n){return new Promise((i,s)=>{e={resolve:i,reject:s},t().postMessage(n)})},close(){r&&(r.terminate(),r=null),e=null}}}async function ya(r){if(r.code?.trim())return r.code.trim();if(!r.script)return T("Provide 'script' (file path) or 'code'."),null;const e=await y.getWorkspace();if(!e)return T("No workspace selected."),null;try{const t=await e.getResource(r.script);if(!t||!(t instanceof W))return T("File not found: "+r.script),null;const n=await t.getContents();return typeof n!="string"?(T("File is not a text file"),null):n}catch(t){return T(`Failed to access file: ${t instanceof Error?t.message:String(t)}`),null}}D({command:{id:"js",name:"Run JavaScript file",description:"Runs a script via JsRuntime (inline or file). Return value or self.postMessage(value) is shown.",parameters:[{name:"script",description:"workspace path to a .js file",required:!1},{name:"code",description:"inline JavaScript",required:!1}]},handler:{execute:async r=>{const e=await ya(r.params??{});if(!e)return;const t=wa();try{const n=await t.execute(e);return n!==void 0&&$e(String(n)),n}catch(n){T(n instanceof Error?n.message:String(n))}finally{t.close()}}}});D({command:{id:"open_view_as_editor",name:"Open view as editor",description:"Opens a dashboard view in the editor area",parameters:[{name:"name",description:"View contribution name",required:!0},{name:"sourceContributionSlot",description:"source contribution slot (default: SYSTEM_VIEWS)",required:!1}]},handler:{execute:async({params:r})=>{const e=r?.name;if(!e)return;const t=r?.sourceContributionSlot??qn,i=x.getContributions(t).find(s=>s.name===e);i?.component&&await ot.openTab(i)}}});F.put("constants",Ss);Ne.put("html",p);Ne.put("render",pe);Ne.put("toastInfo",$e);Ne.put("toastError",T);Ne.put("toastWarning",Pi);Ne.put("publish",w);Ne.put("subscribe",G);export{Kt as A,ue as B,re as C,q as D,H as E,W as F,Gn as G,Ne as H,Wn as I,Tt as J,xe as K,de as L,Tn as M,tt as N,gr as O,Qt as P,wa as Q,Nr as R,Ea as S,jn as T,xa as U,ka as V,Hn as W,Te as a,ct as b,x as c,ot as d,R as e,Ce as f,Mn as g,Fe as h,ut as i,Ee as j,We as k,L as l,E as m,F as n,ce as o,so as p,Sa as q,D as r,rt as s,T as t,Br as u,$e as v,y as w,ge as x,xr as y,ee as z};
