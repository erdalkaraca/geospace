const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/git-extension-K1HNFXIp.js","assets/index-DoDY4M9O.js","assets/index-C2t38aP0.css","assets/pyterminal-extension-COGrztbL.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-y0abSzTv.js","assets/webllmservice-fJ09LS6V.js","assets/p12-splitter-D7Hmzt9O.js","assets/package-manager-extension-xv9fmET4.js","assets/notebook-extension-DHOUg50l.js","assets/editor.main-CSvhx3Vv.js","assets/editor-BhPcksyq.css","assets/command-palette-extension-Bu8TH0oo.js","assets/download-extension-KXELZTlu.js","assets/unzip-extension-i1zd-_2p.js","assets/md-editor-extension-BEhCKII1.js","assets/media-viewer-extension-D9YQOIN4.js","assets/monaco-editor-extension-CdgQ3ry9.js","assets/memory-usage-extension-C6qVODD6.js","assets/webdav-extension-D_Ax-zGO.js","assets/settings-tree-extension-Dr_-A_Sd.js","assets/ai-system-extension-CrncE7rJ.js","assets/rag-system-extension-eBgOdqcZ.js","assets/mapbuilder-extension-Cn_qf1kM.js","assets/style-editor-extension-B_XPbZKb.js","assets/overpass-extension-B4x4APAj.js","assets/gtfs-extension-BRWH_7JF.js"])))=>i.map(i=>d[i]);
import{g as bi,x as V,B as Tr,P as Lo,a as $o,o as Un,i as la,b as Yt,t as Et,c as Do,n as Ve,r as At,e as yr,E as It,d as br,f as ca,h as ua,j as No,p as Mo,v as Ur,k as In,M as Pi,T as Fo,m as pa,l as qo,q as Ut,_ as mt,s as Es,u as zo,O as Uo,G as ur,w as jo,y as Wo,z as As,D as da,A as Ts,C as Bo,F as Go,H as Vo,I as Ho,J as Os,K as Ko,L as Yo}from"./index-DoDY4M9O.js";function ha(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var ii={exports:{}};var Jo=ii.exports,Rs;function Zo(){return Rs||(Rs=1,(function(t,e){(function(){var r,n,i,o,a,c,f,b,R,y,I,k,j,J,ve,xe,W,D,K,z,O,B,ee,Te,Pe,he,q,le,ye,Ie,X,se,me,Z,Ce,Ne,w,S,fe,Re,Ye,We,P,F,$,Q,ue,ae,G,ce,we=[].slice,qe={}.hasOwnProperty,Be=function(L,x){for(var N in x)qe.call(x,N)&&(L[N]=x[N]);function H(){this.constructor=L}return H.prototype=x.prototype,L.prototype=new H,L.__super__=x.prototype,L},ke=[].indexOf||function(L){for(var x=0,N=this.length;x<N;x++)if(x in this&&this[x]===L)return x;return-1},Ae=function(L,x){return function(){return L.apply(x,arguments)}};for(B={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},Ie=function(){var L;return(L=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance.now():void 0)!=null?L:+new Date},se=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,O=window.cancelAnimationFrame||window.mozCancelAnimationFrame,xe=function(L,x,N){return typeof L.addEventListener=="function"?L.addEventListener(x,N,!1):(function(){if(typeof L["on"+x]!="function"||typeof L["on"+x].eventListeners!="object"){var H=new b;typeof L["on"+x]=="function"&&H.on(x,L["on"+x]),L["on"+x]=function(Y){return H.trigger(x,Y)},L["on"+x].eventListeners=H}else var H=L["on"+x].eventListeners;H.on(x,N)})()},se==null&&(se=function(L){return setTimeout(L,50)},O=function(L){return clearTimeout(L)}),Z=function(L){var x,N;return x=Ie(),N=function(){var H;return H=Ie()-x,H>=33?(x=Ie(),L(H,function(){return se(N)})):setTimeout(N,33-H)},N()},me=function(){var L,x,N;return N=arguments[0],x=arguments[1],L=3<=arguments.length?we.call(arguments,2):[],typeof N[x]=="function"?N[x].apply(N,L):N[x]},ee=function(){var L,x,N,H,Y,te,_e;for(x=arguments[0],H=2<=arguments.length?we.call(arguments,1):[],te=0,_e=H.length;te<_e;te++)if(N=H[te],N)for(L in N)qe.call(N,L)&&(Y=N[L],x[L]!=null&&typeof x[L]=="object"&&Y!=null&&typeof Y=="object"?ee(x[L],Y):x[L]=Y);return x},D=function(L){var x,N,H,Y,te;for(N=x=0,Y=0,te=L.length;Y<te;Y++)H=L[Y],N+=Math.abs(H),x++;return N/x},Pe=function(L,x){var N,H,Y;if(L==null&&(L="options"),x==null&&(x=!0),Y=document.querySelector("[data-pace-"+L+"]"),!!Y){if(N=Y.getAttribute("data-pace-"+L),!x)return N;try{return JSON.parse(N)}catch(te){return H=te,typeof console<"u"&&console!==null?console.error("Error parsing inline pace options",H):void 0}}},f=(function(){function L(){}return L.prototype.on=function(x,N,H,Y){var te;return Y==null&&(Y=!1),this.bindings==null&&(this.bindings={}),(te=this.bindings)[x]==null&&(te[x]=[]),this.bindings[x].push({handler:N,ctx:H,once:Y})},L.prototype.once=function(x,N,H){return this.on(x,N,H,!0)},L.prototype.off=function(x,N){var H,Y,te;if(((Y=this.bindings)!=null?Y[x]:void 0)!=null){if(N==null)return delete this.bindings[x];for(H=0,te=[];H<this.bindings[x].length;)this.bindings[x][H].handler===N?te.push(this.bindings[x].splice(H,1)):te.push(H++);return te}},L.prototype.trigger=function(){var x,N,H,Y,te,_e,Le,Ke,it;if(H=arguments[0],x=2<=arguments.length?we.call(arguments,1):[],(Le=this.bindings)!=null&&Le[H]){for(te=0,it=[];te<this.bindings[H].length;)Ke=this.bindings[H][te],Y=Ke.handler,N=Ke.ctx,_e=Ke.once,Y.apply(N??this,x),_e?it.push(this.bindings[H].splice(te,1)):it.push(te++);return it}},L})(),y=window.Pace||{},window.Pace=y,ee(y,f.prototype),X=y.options=ee({},B,window.paceOptions,Pe()),ae=["ajax","document","eventLag","elements"],F=0,Q=ae.length;F<Q;F++)S=ae[F],X[S]===!0&&(X[S]=B[S]);R=(function(L){Be(x,L);function x(){return G=x.__super__.constructor.apply(this,arguments),G}return x})(Error),n=(function(){function L(){this.progress=0}return L.prototype.getElement=function(){var x;if(this.el==null){if(x=document.querySelector(X.target),!x)throw new R;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var N=X.className!==""?" "+X.className:"";this.el.innerHTML='<div class="pace-progress'+N+`">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div>`,x.firstChild!=null?x.insertBefore(this.el,x.firstChild):x.appendChild(this.el)}return this.el},L.prototype.finish=function(){var x;return x=this.getElement(),x.className=x.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},L.prototype.update=function(x){return this.progress=x,y.trigger("progress",x),this.render()},L.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(x){R=x}return this.el=void 0},L.prototype.render=function(){var x,N,H,Y,te,_e,Le;if(document.querySelector(X.target)==null)return!1;for(x=this.getElement(),Y="translate3d("+this.progress+"%, 0, 0)",Le=["webkitTransform","msTransform","transform"],te=0,_e=Le.length;te<_e;te++)N=Le[te],x.children[0].style[N]=Y;return(!this.lastRenderedProgress||this.lastRenderedProgress|this.progress!==0|0)&&(x.children[0].setAttribute("data-progress-text",""+(this.progress|0)+"%"),this.progress>=100?H="99":(H=this.progress<10?"0":"",H+=this.progress|0),x.children[0].setAttribute("data-progress",""+H)),y.trigger("change",this.progress),this.lastRenderedProgress=this.progress},L.prototype.done=function(){return this.progress>=100},L})(),b=(function(){function L(){this.bindings={}}return L.prototype.trigger=function(x,N){var H,Y,te,_e,Le;if(this.bindings[x]!=null){for(_e=this.bindings[x],Le=[],Y=0,te=_e.length;Y<te;Y++)H=_e[Y],Le.push(H.call(this,N));return Le}},L.prototype.on=function(x,N){var H;return(H=this.bindings)[x]==null&&(H[x]=[]),this.bindings[x].push(N)},L})(),P=window.XMLHttpRequest,We=window.XDomainRequest,Ye=window.WebSocket,Te=function(L,x){var N,H;H=[];for(N in x.prototype)try{L[N]==null&&typeof x[N]!="function"?typeof Object.defineProperty=="function"?H.push(Object.defineProperty(L,N,{get:(function(Y){return function(){return x.prototype[Y]}})(N),configurable:!0,enumerable:!0})):H.push(L[N]=x.prototype[N]):H.push(void 0)}catch{}return H},le=[],y.ignore=function(){var L,x,N;return x=arguments[0],L=2<=arguments.length?we.call(arguments,1):[],le.unshift("ignore"),N=x.apply(null,L),le.shift(),N},y.track=function(){var L,x,N;return x=arguments[0],L=2<=arguments.length?we.call(arguments,1):[],le.unshift("track"),N=x.apply(null,L),le.shift(),N},w=function(L){var x;if(L==null&&(L="GET"),le[0]==="track")return"force";if(!le.length&&X.ajax){if(L==="socket"&&X.ajax.trackWebSockets)return!0;if(x=L.toUpperCase(),ke.call(X.ajax.trackMethods,x)>=0)return!0}return!1},I=(function(L){Be(x,L);function x(){var N,H=this;x.__super__.constructor.apply(this,arguments),N=function(Y){var te;return te=Y.open,Y.open=function(_e,Le,Ke){return w(_e)&&H.trigger("request",{type:_e,url:Le,request:Y}),te.apply(Y,arguments)}},window.XMLHttpRequest=function(Y){var te;return te=new P(Y),N(te),te};try{Te(window.XMLHttpRequest,P)}catch{}if(We!=null){window.XDomainRequest=function(){var Y;return Y=new We,N(Y),Y};try{Te(window.XDomainRequest,We)}catch{}}if(Ye!=null&&X.ajax.trackWebSockets){window.WebSocket=function(Y,te){var _e;return te!=null?_e=new Ye(Y,te):_e=new Ye(Y),w("socket")&&H.trigger("request",{type:"socket",url:Y,protocols:te,request:_e}),_e};try{Te(window.WebSocket,Ye)}catch{}}}return x})(b),$=null,he=function(){return $==null&&($=new I),$},Ne=function(L){var x,N,H,Y;for(Y=X.ajax.ignoreURLs,N=0,H=Y.length;N<H;N++)if(x=Y[N],typeof x=="string"){if(L.indexOf(x)!==-1)return!0}else if(x.test(L))return!0;return!1},he().on("request",function(L){var x,N,H,Y,te;if(Y=L.type,H=L.request,te=L.url,!Ne(te)&&!y.running&&(X.restartOnRequestAfter!==!1||w(Y)==="force"))return N=arguments,x=X.restartOnRequestAfter||0,typeof x=="boolean"&&(x=0),setTimeout(function(){var _e,Le,Ke,it,kt,de;if(Y==="socket"?_e=H.readyState<1:_e=0<(it=H.readyState)&&it<4,_e){for(y.restart(),kt=y.sources,de=[],Le=0,Ke=kt.length;Le<Ke;Le++)if(S=kt[Le],S instanceof r){S.watch.apply(S,N);break}else de.push(void 0);return de}},x)}),r=(function(){function L(){this.complete=Ae(this.complete,this);var x=this;this.elements=[],he().on("request",function(){return x.watch.apply(x,arguments)})}return L.prototype.watch=function(x){var N,H,Y,te;if(Y=x.type,N=x.request,te=x.url,!Ne(te))return Y==="socket"?H=new J(N,this.complete):H=new ve(N,this.complete),this.elements.push(H)},L.prototype.complete=function(x){return this.elements=this.elements.filter(function(N){return N!==x})},L})(),ve=(function(){function L(x,N){var H,Y,te,_e,Le,Ke=this;if(this.progress=0,window.ProgressEvent!=null)for(xe(x,"progress",function(it){return it.lengthComputable?Ke.progress=100*it.loaded/it.total:Ke.progress=Ke.progress+(100-Ke.progress)/2},!1),Le=["load","abort","timeout","error"],Y=0,te=Le.length;Y<te;Y++)H=Le[Y],xe(x,H,function(){return N(Ke),Ke.progress=100},!1);else _e=x.onreadystatechange,x.onreadystatechange=function(){var it;return(it=x.readyState)===0||it===4?(N(Ke),Ke.progress=100):x.readyState===3&&(Ke.progress=50),typeof _e=="function"?_e.apply(null,arguments):void 0}}return L})(),J=(function(){function L(x,N){var H,Y,te,_e,Le=this;for(this.progress=0,_e=["error","open"],Y=0,te=_e.length;Y<te;Y++)H=_e[Y],xe(x,H,function(){return N(Le),Le.progress=100},!1)}return L})(),o=(function(){function L(x){var N,H,Y,te;for(x==null&&(x={}),this.complete=Ae(this.complete,this),this.elements=[],x.selectors==null&&(x.selectors=[]),te=x.selectors,H=0,Y=te.length;H<Y;H++)N=te[H],this.elements.push(new a(N,this.complete))}return L.prototype.complete=function(x){return this.elements=this.elements.filter(function(N){return N!==x})},L})(),a=(function(){function L(x,N){this.selector=x,this.completeCallback=N,this.progress=0,this.check()}return L.prototype.check=function(){var x=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return x.check()}),X.elements.checkInterval)},L.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},L})(),i=(function(){L.prototype.states={loading:0,interactive:50,complete:100};function L(){var x,N,H=this;this.progress=(N=this.states[document.readyState])!=null?N:100,x=document.onreadystatechange,document.onreadystatechange=function(){return H.states[document.readyState]!=null&&(H.progress=H.states[document.readyState]),typeof x=="function"?x.apply(null,arguments):void 0}}return L})(),c=(function(){function L(){var x,N,H,Y,te,_e=this;this.progress=0,x=0,te=[],Y=0,H=Ie(),N=setInterval(function(){var Le;return Le=Ie()-H-50,H=Ie(),te.push(Le),te.length>X.eventLag.sampleCount&&te.shift(),x=D(te),++Y>=X.eventLag.minSamples&&x<X.eventLag.lagThreshold?(_e.progress=100,clearInterval(N)):_e.progress=100*(3/(x+3))},50)}return L})(),j=(function(){function L(x){this.source=x,this.last=this.sinceLastUpdate=0,this.rate=X.initialRate,this.catchup=0,this.progress=this.lastProgress=0,this.source!=null&&(this.progress=me(this.source,"progress"))}return L.prototype.tick=function(x,N){var H;return N==null&&(N=me(this.source,"progress")),N>=100&&(this.done=!0),N===this.last?this.sinceLastUpdate+=x:(this.sinceLastUpdate&&(this.rate=(N-this.last)/this.sinceLastUpdate),this.catchup=(N-this.progress)/X.catchupTime,this.sinceLastUpdate=0,this.last=N),N>this.progress&&(this.progress+=this.catchup*x),H=1-Math.pow(this.progress/100,X.easeFactor),this.progress+=H*this.rate*x,this.progress=Math.min(this.lastProgress+X.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},L})(),fe=null,Ce=null,K=null,Re=null,W=null,z=null,y.running=!1,q=function(){if(X.restartOnPushState)return y.restart()},window.history.pushState!=null&&(ue=window.history.pushState,window.history.pushState=function(){return q(),ue.apply(window.history,arguments)}),window.history.replaceState!=null&&(ce=window.history.replaceState,window.history.replaceState=function(){return q(),ce.apply(window.history,arguments)}),k={ajax:r,elements:o,document:i,eventLag:c},(ye=function(){var L,x,N,H,Y,te,_e,Le;for(y.sources=fe=[],te=["ajax","elements","document","eventLag"],x=0,H=te.length;x<H;x++)L=te[x],X[L]!==!1&&fe.push(new k[L](X[L]));for(Le=(_e=X.extraSources)!=null?_e:[],N=0,Y=Le.length;N<Y;N++)S=Le[N],fe.push(new S(X));return y.bar=K=new n,Ce=[],Re=new j})(),y.stop=function(){return y.trigger("stop"),y.running=!1,K.destroy(),z=!0,W!=null&&(typeof O=="function"&&O(W),W=null),ye()},y.restart=function(){return y.trigger("restart"),y.stop(),y.start()},y.go=function(){var L;return y.running=!0,K.render(),L=Ie(),z=!1,W=Z(function(x,N){var H,Y,te,_e,Le,Ke,it,kt,de,rr,Qt,Tt,pt,Gt,He;for(100-K.progress,Y=rr=0,te=!0,Ke=Qt=0,pt=fe.length;Qt<pt;Ke=++Qt)for(S=fe[Ke],de=Ce[Ke]!=null?Ce[Ke]:Ce[Ke]=[],Le=(He=S.elements)!=null?He:[S],it=Tt=0,Gt=Le.length;Tt<Gt;it=++Tt)_e=Le[it],kt=de[it]!=null?de[it]:de[it]=new j(_e),te&=kt.done,!kt.done&&(Y++,rr+=kt.tick(x));return H=rr/Y,K.update(Re.tick(x,H)),K.done()||te||z?(K.update(100),y.trigger("done"),setTimeout(function(){return K.finish(),y.running=!1,y.trigger("hide")},Math.max(X.ghostTime,Math.max(X.minTime-(Ie()-L),0)))):N()})},y.start=function(L){ee(X,L),y.running=!0;try{K.render()}catch(x){R=x}return document.querySelector(".pace")?(y.trigger("start"),y.go()):setTimeout(y.start,50)},t.exports=y}).call(Jo)})(ii)),ii.exports}var Xo=Zo();const Qo=bi(Xo);Qo.start();const el="@kispace-io/geospace",tl="1.0.12",rl={"@kispace-io/appspace":"file:../appspace","esbuild-wasm":"^0.25.11",ol:"^10.6.1","ol-mapbox-style":"^13.1.0",osmtogeojson:"^3.0.0-beta.5","font-gis":"^1.0.6","pace-js":"^1.2.4","pubsub-js":"^1.9.5"},nl={"@testing-library/jest-dom":"^6.9.1","@types/node":"^24.9.2","@types/pubsub-js":"^1.8.6","@types/toastify-js":"^1.12.4","@vitest/coverage-v8":"^4.0.6","@vitest/ui":"^4.0.6","happy-dom":"^20.0.10",jsdom:"^27.1.0","rollup-plugin-visualizer":"^6.0.5",typescript:"~5.9.3",vite:"^7.1.12","vite-plugin-cross-origin-isolation":"^0.1.6","vite-plugin-mkcert":"^1.17.9","vite-plugin-static-copy":"^3.1.4","vite-plugin-zip":"^1.0.1",vitest:"^4.0.6",esbuild:"^0.25.11"},On={name:el,version:tl,dependencies:rl,devDependencies:nl};class Xi{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,r){return e[r]||this.parent?.getProxy()[r]}set(e,r,n){e[r]=n}put(e,r){this.variables[e]=r}getProxy(){return this.proxy}createChild(e={}){const r=new Xi(e);return r.parent=this,this.children.push(r),r}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const Bt=new Xi({}),xr=Bt.createChild({});xr.put("html",V);xr.put("render",Tr);const Ps={debug:0,info:1,warning:2,error:3};let il="debug";const Qr={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let ci=null;const Ui=[];function kn(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class sl{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,r){en(this.source,e,r)}}function al(t){return Ps[t]>=Ps[il]}function en(t,e,r){al(r)&&(ci?ci(t,e,r):(Ui.push({source:t,message:e,level:r}),Qr[r==="error"?"error":r==="warning"?"warn":r==="debug"?"debug":"log"](`[${t}] ${e}`)))}function ol(){console.log=function(...t){Qr.log.apply(console,t),en("Console",t.map(e=>kn(e)).join(" "),"info")},console.info=function(...t){Qr.info.apply(console,t),en("Console",t.map(e=>kn(e)).join(" "),"info")},console.warn=function(...t){Qr.warn.apply(console,t),en("Console",t.map(e=>kn(e)).join(" "),"warning")},console.error=function(...t){Qr.error.apply(console,t),en("Console",t.map(e=>kn(e)).join(" "),"error")},console.debug=function(...t){Qr.debug.apply(console,t),en("Console",t.map(e=>kn(e)).join(" "),"debug")}}ol();function ll(t){for(ci=t;Ui.length>0;){const e=Ui.shift();e&&t(e.source,e.message,e.level)}}function cl(){ci=null}function Vr(t){return new sl(t)}const nt=Vr("System");Bt.put("logger",nt);var ul=Object.defineProperty,pl=(t,e,r)=>e in t?ul(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Li=(t,e,r)=>(pl(t,typeof e!="symbol"?e+"":e,r),r),dl=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},$i=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Qn=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Ls=(t,e,r)=>(dl(t,e,"access private method"),r);function fa(t,e){return Object.is(t,e)}let St=null,Nn=!1,si=1;const ui=Symbol("SIGNAL");function rn(t){const e=St;return St=t,e}function hl(){return St}function fl(){return Nn}const Qi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function wi(t){if(Nn)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(St===null)return;St.consumerOnSignalRead(t);const e=St.nextProducerIndex++;if(un(St),e<St.producerNode.length&&St.producerNode[e]!==t&&ji(St)){const r=St.producerNode[e];xi(r,St.producerIndexOfThis[e])}St.producerNode[e]!==t&&(St.producerNode[e]=t,St.producerIndexOfThis[e]=ji(St)?va(t,St,e):0),St.producerLastReadVersion[e]=t.version}function ml(){si++}function ma(t){if(!(!t.dirty&&t.lastCleanEpoch===si)){if(!t.producerMustRecompute(t)&&!wl(t)){t.dirty=!1,t.lastCleanEpoch=si;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=si}}function ga(t){if(t.liveConsumerNode===void 0)return;const e=Nn;Nn=!0;try{for(const r of t.liveConsumerNode)r.dirty||vl(r)}finally{Nn=e}}function gl(){return St?.consumerAllowSignalWrites!==!1}function vl(t){var e;t.dirty=!0,ga(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function yl(t){return t&&(t.nextProducerIndex=0),rn(t)}function bl(t,e){if(rn(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(ji(t))for(let r=t.nextProducerIndex;r<t.producerNode.length;r++)xi(t.producerNode[r],t.producerIndexOfThis[r]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function wl(t){un(t);for(let e=0;e<t.producerNode.length;e++){const r=t.producerNode[e],n=t.producerLastReadVersion[e];if(n!==r.version||(ma(r),n!==r.version))return!0}return!1}function va(t,e,r){var n;if(es(t),un(t),t.liveConsumerNode.length===0){(n=t.watched)==null||n.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)t.producerIndexOfThis[i]=va(t.producerNode[i],t,i)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(e)-1}function xi(t,e){var r;if(es(t),un(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(r=t.unwatched)==null||r.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)xi(t.producerNode[i],t.producerIndexOfThis[i])}const n=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[n],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[n],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const i=t.liveConsumerIndexOfThis[e],o=t.liveConsumerNode[e];un(o),o.producerIndexOfThis[i]=e}}function ji(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function un(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function es(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}function ya(t){if(ma(t),wi(t),t.value===Wi)throw t.error;return t.value}function xl(t){const e=Object.create(Il);e.computation=t;const r=()=>ya(e);return r[ui]=e,r}const Di=Symbol("UNSET"),Ni=Symbol("COMPUTING"),Wi=Symbol("ERRORED"),Il={...Qi,value:Di,dirty:!0,error:null,equal:fa,producerMustRecompute(t){return t.value===Di||t.value===Ni},producerRecomputeValue(t){if(t.value===Ni)throw new Error("Detected cycle in computations.");const e=t.value;t.value=Ni;const r=yl(t);let n,i=!1;try{n=t.computation.call(t.wrapper),i=e!==Di&&e!==Wi&&t.equal.call(t.wrapper,e,n)}catch(o){n=Wi,t.error=o}finally{bl(t,r)}if(i){t.value=e;return}t.value=n,t.version++}};function kl(){throw new Error}let Sl=kl;function _l(){Sl()}function Cl(t){const e=Object.create(Tl);e.value=t;const r=()=>(wi(e),e.value);return r[ui]=e,r}function El(){return wi(this),this.value}function Al(t,e){gl()||_l(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,Ol(t))}const Tl={...Qi,equal:fa,value:void 0};function Ol(t){t.version++,ml(),ga(t)}const $t=Symbol("node");var wr;(t=>{var e,r,n,i;class o{constructor(f,b={}){Qn(this,r),Li(this,e);const y=Cl(f)[ui];if(this[$t]=y,y.wrapper=this,b){const I=b.equals;I&&(y.equal=I),y.watched=b[t.subtle.watched],y.unwatched=b[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return El.call(this[$t])}set(f){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(fl())throw new Error("Writes to signals not permitted during Watcher callback");const b=this[$t];Al(b,f)}}e=$t,r=new WeakSet,t.isState=c=>typeof c=="object"&&$i(r,c),t.State=o;class a{constructor(f,b){Qn(this,i),Li(this,n);const y=xl(f)[ui];if(y.consumerAllowSignalWrites=!0,this[$t]=y,y.wrapper=this,b){const I=b.equals;I&&(y.equal=I),y.watched=b[t.subtle.watched],y.unwatched=b[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return ya(this[$t])}}n=$t,i=new WeakSet,t.isComputed=c=>typeof c=="object"&&$i(i,c),t.Computed=a,(c=>{var f,b,R,y;function I(D){let K,z=null;try{z=rn(null),K=D()}finally{rn(z)}return K}c.untrack=I;function k(D){var K;if(!(0,t.isComputed)(D)&&!(0,t.isWatcher)(D))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((K=D[$t].producerNode)==null?void 0:K.map(z=>z.wrapper))??[]}c.introspectSources=k;function j(D){var K;if(!(0,t.isComputed)(D)&&!(0,t.isState)(D))throw new TypeError("Called introspectSinks without a Signal argument");return((K=D[$t].liveConsumerNode)==null?void 0:K.map(z=>z.wrapper))??[]}c.introspectSinks=j;function J(D){if(!(0,t.isComputed)(D)&&!(0,t.isState)(D))throw new TypeError("Called hasSinks without a Signal argument");const K=D[$t].liveConsumerNode;return K?K.length>0:!1}c.hasSinks=J;function ve(D){if(!(0,t.isComputed)(D)&&!(0,t.isWatcher)(D))throw new TypeError("Called hasSources without a Computed or Watcher argument");const K=D[$t].producerNode;return K?K.length>0:!1}c.hasSources=ve;class xe{constructor(K){Qn(this,b),Qn(this,R),Li(this,f);let z=Object.create(Qi);z.wrapper=this,z.consumerMarkedDirty=K,z.consumerIsAlwaysLive=!0,z.consumerAllowSignalWrites=!1,z.producerNode=[],this[$t]=z}watch(...K){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ls(this,R,y).call(this,K);const z=this[$t];z.dirty=!1;const O=rn(z);for(const B of K)wi(B[$t]);rn(O)}unwatch(...K){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ls(this,R,y).call(this,K);const z=this[$t];un(z);for(let O=z.producerNode.length-1;O>=0;O--)if(K.includes(z.producerNode[O].wrapper)){xi(z.producerNode[O],z.producerIndexOfThis[O]);const B=z.producerNode.length-1;if(z.producerNode[O]=z.producerNode[B],z.producerIndexOfThis[O]=z.producerIndexOfThis[B],z.producerNode.length--,z.producerIndexOfThis.length--,z.nextProducerIndex--,O<z.producerNode.length){const ee=z.producerIndexOfThis[O],Te=z.producerNode[O];es(Te),Te.liveConsumerIndexOfThis[ee]=O}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[$t].producerNode.filter(z=>z.dirty).map(z=>z.wrapper)}}f=$t,b=new WeakSet,R=new WeakSet,y=function(D){for(const K of D)if(!(0,t.isComputed)(K)&&!(0,t.isState)(K))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=D=>$i(b,D),c.Watcher=xe;function W(){var D;return(D=hl())==null?void 0:D.wrapper}c.currentComputed=W,c.watched=Symbol("watched"),c.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(wr||(wr={}));const Rl=Symbol("SignalWatcherBrand"),Pl=new FinalizationRegistry((({watcher:t,signal:e})=>{t.unwatch(e)})),$s=new WeakMap;function Ii(t){return t[Rl]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new wr.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new wr.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new wr.subtle.Watcher((function(){const r=$s.get(this);r!==void 0&&(r._$Si===!1&&r.requestUpdate(),this.watch())}));$s.set(e,this),Pl.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((r=>r.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,r,n){this._$So=!0,super.requestUpdate(e,r,n)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const r=this._$So;this.requestUpdate(),this._$So=r}m(e){this._$Sh.delete(e)}}}wr.State;wr.Computed;const Hr=(t,e)=>new wr.State(t,e),ba=Lo||$o,Kt=(t,e)=>{ba.subscribe(t,(r,n)=>e(n))},Xe=(t,e)=>{ba.publish(t,e)},wa=t=>function(e,r,n){const i=n.value;return i.topic=t,n};Bt.put("subscribe",Kt);Bt.put("publish",Xe);const Lr="events/contributionregistry/contributionsChanged";class Ll{constructor(){this.contributions=new Map}registerContribution(e,r){const n=this.getContributions(e);if(r.disabled instanceof Function){const i=r.disabled;r.disabled=new wr.Computed(i)}n.push(r),Xe(Lr,{target:e,contributions:n})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const Me=new Ll;Bt.put("contributionRegistry",Me);const $l={},at=Hr(null),an=Hr(null),Bi=Hr(null),xa=Hr(0),er=Hr(void 0);Hr({name:"",timestamp:0});class Ia{constructor(e,r,n,i,o){this.id=e,this.name=r,this.description=n,this.parameters=i||[],this.output=o||[]}}class ka{async execute(e,r){return je.execute(e,r)}async undo(){}async redo(){}}class Sa{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,r){this.handlers.has(e)||this.handlers.set(e,[]);const n=this.handlers.get(e);n.push(r),n.sort((i,o)=>(o.ranking??0)-(i.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:at.get(),activeEditor:an.get()}}execute(e,r={}){const n=this.getHandler(e);if(!n)throw nt.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const i=this.getCommand(e),o=r.params?` params: ${JSON.stringify(r.params)}`:"";nt.debug(`[CommandRegistry] Executing command: ${e}${i?` (${i.name})`:""}${o}`);for(const a of n)if(a.canExecute===void 0||a.canExecute(r))try{const c=a.execute(r);return nt.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${c})`),c}catch(c){const f=c instanceof Error?c.message:String(c);throw nt.error(`[CommandRegistry] Command execution failed: ${e} - ${f}`),c}nt.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,r,n,i,o){const a=new Ia(e,r,n,i);this.registerCommand(a),o&&this.registerHandler(e,o)}registerCommand(e){this.commands[e.id]=e,nt.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(r=>(je.getHandler(r.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(e))).reduce((r,n)=>(r[n.id]=n,r),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const r=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(r,e.handler),e.contribution&&e.contribution.target&&Me.registerContribution(e.contribution.target,{command:r,...e.contribution})}}const je=new Sa;Bt.put("commandRegistry",je);const lt=t=>{je.registerAll(t)},ed=Object.freeze(Object.defineProperty({__proto__:null,Command:Ia,CommandRegistry:Sa,CommandStack:ka,commandRegistry:je,registerAll:lt},Symbol.toStringTag,{value:"Module"}));class Dl{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=je.listCommands();Object.values(e).forEach(r=>{r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)})}watchCommandRegistry(){const e=je.registerCommand.bind(je);je.registerCommand=r=>{e(r),r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const r=e.toUpperCase().split("+").map(a=>a.trim());if(r.length===0)return null;const n={ctrl:!1,alt:!1,shift:!1,meta:!1},i=r[r.length-1],o=r.slice(0,-1);for(const a of o)switch(a){case"CTRL":case"CONTROL":n.ctrl=!0;break;case"ALT":case"OPTION":n.alt=!0;break;case"SHIFT":n.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":n.meta=!0;break;default:nt.warn(`Unknown modifier: ${a}`)}return n.key=this.normalizeKey(i),n}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const r=[];return e.ctrl&&r.push("ctrl"),e.alt&&r.push("alt"),e.shift&&r.push("shift"),e.meta&&r.push("meta"),r.sort(),`${r.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,r){const n=this.parseKeyBinding(r);if(!n)return nt.error(`Invalid key binding: ${r}`),!1;n.commandId=e;const i=this.getBindingKey(n);this.bindings.has(i)||this.bindings.set(i,[]);const o=this.bindings.get(i);return o.find(c=>c.commandId===e)?(nt.error(`Key binding ${r} already registered for command ${e}`),!1):(o.push(n),nt.debug(`Key binding registered: ${r} -> ${e}`),!0)}unregisterKeyBinding(e,r){if(r){const n=this.parseKeyBinding(r);if(n){const i=this.getBindingKey(n),o=this.bindings.get(i);if(o){const a=o.filter(c=>c.commandId!==e);a.length===0?this.bindings.delete(i):this.bindings.set(i,a)}}}else for(const[n,i]of this.bindings.entries()){const o=i.filter(a=>a.commandId!==e);o.length===0?this.bindings.delete(n):this.bindings.set(n,o)}}getKeyBindingsForCommand(e){const r=[];for(const n of this.bindings.values())for(const i of n)i.commandId===e&&r.push(this.formatKeyBinding(i));return r}formatKeyBinding(e){const r=[];e.ctrl&&r.push("Ctrl"),e.alt&&r.push("Alt"),e.shift&&r.push("Shift"),e.meta&&r.push("Cmd");let n=e.key;return n.length===1?n=n.toUpperCase():n=n.charAt(0).toUpperCase()+n.slice(1).toLowerCase(),r.push(n),r.join("+")}handleKeyDown(e){if(!this.enabled)return;const r=e.target;if(r&&(r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.isContentEditable)){const a=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&a==="P"))return}const n={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},i=this.getBindingKey(n),o=this.bindings.get(i);if(o&&o.length>0){const a=o[0];try{e.preventDefault(),e.stopPropagation();const c=je.createExecutionContext({});je.execute(a.commandId,c),nt.info(`Executed command via key binding: ${a.commandId}`)}catch(c){nt.error(`Failed to execute command ${a.commandId}: ${c.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}nt.debug("KeyBindingManager initializing...");const _a=new Dl;nt.debug("KeyBindingManager initialized");Bt.put("keyBindingManager",_a);function ts(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Kr=ts();function Ca(t){Kr=t}var Mn={exec:()=>null};function tt(t,e=""){let r=typeof t=="string"?t:t.source,n={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(Ht.caret,"$1"),r=r.replace(i,a),n},getRegex:()=>new RegExp(r,e)};return n}var Ht={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Nl=/^(?:[ \t]*(?:\n|$))+/,Ml=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Fl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,jn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ql=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,rs=/(?:[*+-]|\d{1,9}[.)])/,Ea=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Aa=tt(Ea).replace(/bull/g,rs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),zl=tt(Ea).replace(/bull/g,rs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ns=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ul=/^[^\n]+/,is=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,jl=tt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",is).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Wl=tt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,rs).getRegex(),ki="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ss=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Bl=tt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ss).replace("tag",ki).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ta=tt(ns).replace("hr",jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ki).getRegex(),Gl=tt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ta).getRegex(),as={blockquote:Gl,code:Ml,def:jl,fences:Fl,heading:ql,hr:jn,html:Bl,lheading:Aa,list:Wl,newline:Nl,paragraph:Ta,table:Mn,text:Ul},Ds=tt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ki).getRegex(),Vl={...as,lheading:zl,table:Ds,paragraph:tt(ns).replace("hr",jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ds).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ki).getRegex()},Hl={...as,html:tt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ss).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Mn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:tt(ns).replace("hr",jn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Aa).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Kl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Yl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Oa=/^( {2,}|\\)\n(?!\s*$)/,Jl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Si=/[\p{P}\p{S}]/u,os=/[\s\p{P}\p{S}]/u,Ra=/[^\s\p{P}\p{S}]/u,Zl=tt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,os).getRegex(),Pa=/(?!~)[\p{P}\p{S}]/u,Xl=/(?!~)[\s\p{P}\p{S}]/u,Ql=/(?:[^\s\p{P}\p{S}]|~)/u,ec=tt(/link|code|html/,"g").replace("link",new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code",new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html",/<(?! )[^<>]*?>/).getRegex(),La=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,tc=tt(La,"u").replace(/punct/g,Si).getRegex(),rc=tt(La,"u").replace(/punct/g,Pa).getRegex(),$a="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",nc=tt($a,"gu").replace(/notPunctSpace/g,Ra).replace(/punctSpace/g,os).replace(/punct/g,Si).getRegex(),ic=tt($a,"gu").replace(/notPunctSpace/g,Ql).replace(/punctSpace/g,Xl).replace(/punct/g,Pa).getRegex(),sc=tt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ra).replace(/punctSpace/g,os).replace(/punct/g,Si).getRegex(),ac=tt(/\\(punct)/,"gu").replace(/punct/g,Si).getRegex(),oc=tt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),lc=tt(ss).replace("(?:-->|$)","-->").getRegex(),cc=tt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",lc).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),pi=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,uc=tt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",pi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Da=tt(/^!?\[(label)\]\[(ref)\]/).replace("label",pi).replace("ref",is).getRegex(),Na=tt(/^!?\[(ref)\](?:\[\])?/).replace("ref",is).getRegex(),pc=tt("reflink|nolink(?!\\()","g").replace("reflink",Da).replace("nolink",Na).getRegex(),Ns=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ls={_backpedal:Mn,anyPunctuation:ac,autolink:oc,blockSkip:ec,br:Oa,code:Yl,del:Mn,emStrongLDelim:tc,emStrongRDelimAst:nc,emStrongRDelimUnd:sc,escape:Kl,link:uc,nolink:Na,punctuation:Zl,reflink:Da,reflinkSearch:pc,tag:cc,text:Jl,url:Mn},dc={...ls,link:tt(/^!?\[(label)\]\((.*?)\)/).replace("label",pi).getRegex(),reflink:tt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",pi).getRegex()},Gi={...ls,emStrongRDelimAst:ic,emStrongLDelim:rc,url:tt(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ns).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:tt(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ns).getRegex()},hc={...Gi,br:tt(Oa).replace("{2,}","*").getRegex(),text:tt(Gi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ei={normal:as,gfm:Vl,pedantic:Hl},Sn={normal:ls,gfm:Gi,breaks:hc,pedantic:dc},fc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ms=t=>fc[t];function fr(t,e){if(e){if(Ht.escapeTest.test(t))return t.replace(Ht.escapeReplace,Ms)}else if(Ht.escapeTestNoEncode.test(t))return t.replace(Ht.escapeReplaceNoEncode,Ms);return t}function Fs(t){try{t=encodeURI(t).replace(Ht.percentDecode,"%")}catch{return null}return t}function qs(t,e){let r=t.replace(Ht.findPipe,(o,a,c)=>{let f=!1,b=a;for(;--b>=0&&c[b]==="\\";)f=!f;return f?"|":" |"}),n=r.split(Ht.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(Ht.slashPipe,"|");return n}function _n(t,e,r){let n=t.length;if(n===0)return"";let i=0;for(;i<n&&t.charAt(n-i-1)===e;)i++;return t.slice(0,n-i)}function mc(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let n=0;n<t.length;n++)if(t[n]==="\\")n++;else if(t[n]===e[0])r++;else if(t[n]===e[1]&&(r--,r<0))return n;return r>0?-2:-1}function zs(t,e,r,n,i){let o=e.href,a=e.title||null,c=t[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let f={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:o,title:a,text:c,tokens:n.inlineTokens(c)};return n.state.inLink=!1,f}function gc(t,e,r){let n=t.match(r.other.indentCodeCompensation);if(n===null)return e;let i=n[1];return e.split(`
`).map(o=>{let a=o.match(r.other.beginningSpace);if(a===null)return o;let[c]=a;return c.length>=i.length?o.slice(i.length):o}).join(`
`)}var di=class{options;rules;lexer;constructor(t){this.options=t||Kr}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:_n(r,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let r=e[0],n=gc(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let n=_n(r,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(r=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:_n(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let r=_n(e[0],`
`).split(`
`),n="",i="",o=[];for(;r.length>0;){let a=!1,c=[],f;for(f=0;f<r.length;f++)if(this.rules.other.blockquoteStart.test(r[f]))c.push(r[f]),a=!0;else if(!a)c.push(r[f]);else break;r=r.slice(f);let b=c.join(`
`),R=b.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${b}`:b,i=i?`${i}
${R}`:R;let y=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(R,o,!0),this.lexer.state.top=y,r.length===0)break;let I=o.at(-1);if(I?.type==="code")break;if(I?.type==="blockquote"){let k=I,j=k.raw+`
`+r.join(`
`),J=this.blockquote(j);o[o.length-1]=J,n=n.substring(0,n.length-k.raw.length)+J.raw,i=i.substring(0,i.length-k.text.length)+J.text;break}else if(I?.type==="list"){let k=I,j=k.raw+`
`+r.join(`
`),J=this.list(j);o[o.length-1]=J,n=n.substring(0,n.length-I.raw.length)+J.raw,i=i.substring(0,i.length-k.raw.length)+J.raw,r=j.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:o,text:i}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r=e[1].trim(),n=r.length>1,i={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]};r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]");let o=this.rules.other.listItemRegex(r),a=!1;for(;t;){let f=!1,b="",R="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;b=e[0],t=t.substring(b.length);let y=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,xe=>" ".repeat(3*xe.length)),I=t.split(`
`,1)[0],k=!y.trim(),j=0;if(this.options.pedantic?(j=2,R=y.trimStart()):k?j=e[1].length+1:(j=e[2].search(this.rules.other.nonSpaceChar),j=j>4?1:j,R=y.slice(j),j+=e[1].length),k&&this.rules.other.blankLine.test(I)&&(b+=I+`
`,t=t.substring(I.length+1),f=!0),!f){let xe=this.rules.other.nextBulletRegex(j),W=this.rules.other.hrRegex(j),D=this.rules.other.fencesBeginRegex(j),K=this.rules.other.headingBeginRegex(j),z=this.rules.other.htmlBeginRegex(j);for(;t;){let O=t.split(`
`,1)[0],B;if(I=O,this.options.pedantic?(I=I.replace(this.rules.other.listReplaceNesting,"  "),B=I):B=I.replace(this.rules.other.tabCharGlobal,"    "),D.test(I)||K.test(I)||z.test(I)||xe.test(I)||W.test(I))break;if(B.search(this.rules.other.nonSpaceChar)>=j||!I.trim())R+=`
`+B.slice(j);else{if(k||y.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||D.test(y)||K.test(y)||W.test(y))break;R+=`
`+I}!k&&!I.trim()&&(k=!0),b+=O+`
`,t=t.substring(O.length+1),y=B.slice(j)}}i.loose||(a?i.loose=!0:this.rules.other.doubleBlankLine.test(b)&&(a=!0));let J=null,ve;this.options.gfm&&(J=this.rules.other.listIsTask.exec(R),J&&(ve=J[0]!=="[ ] ",R=R.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:b,task:!!J,checked:ve,loose:!1,text:R,tokens:[]}),i.raw+=b}let c=i.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let f=0;f<i.items.length;f++)if(this.lexer.state.top=!1,i.items[f].tokens=this.lexer.blockTokens(i.items[f].text,[]),!i.loose){let b=i.items[f].tokens.filter(y=>y.type==="space"),R=b.length>0&&b.some(y=>this.rules.other.anyLine.test(y.raw));i.loose=R}if(i.loose)for(let f=0;f<i.items.length;f++)i.items[f].loose=!0;return i}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:n,title:i}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=qs(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===n.length){for(let a of n)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<r.length;a++)o.header.push({text:r[a],tokens:this.lexer.inline(r[a]),header:!0,align:o.align[a]});for(let a of i)o.rows.push(qs(a,o.header.length).map((c,f)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[f]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let o=_n(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{let o=mc(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(n);o&&(n=o[1],i=o[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?n=n.slice(1):n=n.slice(1,-1)),zs(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let n=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[n.toLowerCase()];if(!i){let o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return zs(r,i,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let n=this.rules.inline.emStrongLDelim.exec(t);if(!(!n||n[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!r||this.rules.inline.punctuation.exec(r))){let i=[...n[0]].length-1,o,a,c=i,f=0,b=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(b.lastIndex=0,e=e.slice(-1*t.length+i);(n=b.exec(e))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(a=[...o].length,n[3]||n[4]){c+=a;continue}else if((n[5]||n[6])&&i%3&&!((i+a)%3)){f+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+f);let R=[...n[0]][0].length,y=t.slice(0,i+n.index+R+a);if(Math.min(i,a)%2){let k=y.slice(1,-1);return{type:"em",raw:y,text:k,tokens:this.lexer.inlineTokens(k)}}let I=y.slice(2,-2);return{type:"strong",raw:y,text:I,tokens:this.lexer.inlineTokens(I)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return n&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let r,n;return e[2]==="@"?(r=e[1],n="mailto:"+r):(r=e[1],n=r),{type:"link",raw:e[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let r,n;if(e[2]==="@")r=e[0],n="mailto:"+r;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);r=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},pr=class Vi{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Kr,this.options.tokenizer=this.options.tokenizer||new di,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Ht,block:ei.normal,inline:Sn.normal};this.options.pedantic?(r.block=ei.pedantic,r.inline=Sn.pedantic):this.options.gfm&&(r.block=ei.gfm,this.options.breaks?r.inline=Sn.breaks:r.inline=Sn.gfm),this.tokenizer.rules=r}static get rules(){return{block:ei,inline:Sn}}static lex(e,r){return new Vi(r).lex(e)}static lexInline(e,r){return new Vi(r).inlineTokens(e)}lex(e){e=e.replace(Ht.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let n=this.inlineQueue[r];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],n=!1){for(this.options.pedantic&&(e=e.replace(Ht.tabCharGlobal,"    ").replace(Ht.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,r))?(e=e.substring(i.raw.length),r.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=r.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:r.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=r.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):r.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=r.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},r.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),r.push(i);continue}let o=e;if(this.options.extensions?.startBlock){let a=1/0,c=e.slice(1),f;this.options.extensions.startBlock.forEach(b=>{f=b.call({lexer:this},c),typeof f=="number"&&f>=0&&(a=Math.min(a,f))}),a<1/0&&a>=0&&(o=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(o))){let a=r.at(-1);n&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):r.push(i),n=o.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=r.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):r.push(i);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let n=e,i=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let o=!1,a="";for(;e;){o||(a=""),o=!1;let c;if(this.options.extensions?.inline?.some(b=>(c=b.call({lexer:this},e,r))?(e=e.substring(c.raw.length),r.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let b=r.at(-1);c.type==="text"&&b?.type==="text"?(b.raw+=c.raw,b.text+=c.text):r.push(c);continue}if(c=this.tokenizer.emStrong(e,n,a)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),r.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),r.push(c);continue}let f=e;if(this.options.extensions?.startInline){let b=1/0,R=e.slice(1),y;this.options.extensions.startInline.forEach(I=>{y=I.call({lexer:this},R),typeof y=="number"&&y>=0&&(b=Math.min(b,y))}),b<1/0&&b>=0&&(f=e.substring(0,b+1))}if(c=this.tokenizer.inlineText(f)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(a=c.raw.slice(-1)),o=!0;let b=r.at(-1);b?.type==="text"?(b.raw+=c.raw,b.text+=c.text):r.push(c);continue}if(e){let b="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return r}},hi=class{options;parser;constructor(t){this.options=t||Kr}space(t){return""}code({text:t,lang:e,escaped:r}){let n=(e||"").match(Ht.notSpaceStart)?.[0],i=t.replace(Ht.endingNewline,"")+`
`;return n?'<pre><code class="language-'+fr(n)+'">'+(r?i:fr(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:fr(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,r=t.start,n="";for(let a=0;a<t.items.length;a++){let c=t.items[a];n+=this.listitem(c)}let i=e?"ol":"ul",o=e&&r!==1?' start="'+r+'"':"";return"<"+i+o+`>
`+n+"</"+i+`>
`}listitem(t){let e="";if(t.task){let r=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+fr(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let i=0;i<t.header.length;i++)r+=this.tablecell(t.header[i]);e+=this.tablerow({text:r});let n="";for(let i=0;i<t.rows.length;i++){let o=t.rows[i];r="";for(let a=0;a<o.length;a++)r+=this.tablecell(o[a]);n+=this.tablerow({text:r})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${fr(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){let n=this.parser.parseInline(r),i=Fs(t);if(i===null)return n;t=i;let o='<a href="'+t+'"';return e&&(o+=' title="'+fr(e)+'"'),o+=">"+n+"</a>",o}image({href:t,title:e,text:r,tokens:n}){n&&(r=this.parser.parseInline(n,this.parser.textRenderer));let i=Fs(t);if(i===null)return fr(r);t=i;let o=`<img src="${t}" alt="${r}"`;return e&&(o+=` title="${fr(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:fr(t.text)}},cs=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},dr=class Hi{options;renderer;textRenderer;constructor(e){this.options=e||Kr,this.options.renderer=this.options.renderer||new hi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new cs}static parse(e,r){return new Hi(r).parse(e)}static parseInline(e,r){return new Hi(r).parseInline(e)}parse(e,r=!0){let n="";for(let i=0;i<e.length;i++){let o=e[i];if(this.options.extensions?.renderers?.[o.type]){let c=o,f=this.options.extensions.renderers[c.type].call({parser:this},c);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(c.type)){n+=f||"";continue}}let a=o;switch(a.type){case"space":{n+=this.renderer.space(a);continue}case"hr":{n+=this.renderer.hr(a);continue}case"heading":{n+=this.renderer.heading(a);continue}case"code":{n+=this.renderer.code(a);continue}case"table":{n+=this.renderer.table(a);continue}case"blockquote":{n+=this.renderer.blockquote(a);continue}case"list":{n+=this.renderer.list(a);continue}case"html":{n+=this.renderer.html(a);continue}case"def":{n+=this.renderer.def(a);continue}case"paragraph":{n+=this.renderer.paragraph(a);continue}case"text":{let c=a,f=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],f+=`
`+this.renderer.text(c);r?n+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):n+=f;continue}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,r=this.renderer){let n="";for(let i=0;i<e.length;i++){let o=e[i];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=c||"";continue}}let a=o;switch(a.type){case"escape":{n+=r.text(a);break}case"html":{n+=r.html(a);break}case"link":{n+=r.link(a);break}case"image":{n+=r.image(a);break}case"strong":{n+=r.strong(a);break}case"em":{n+=r.em(a);break}case"codespan":{n+=r.codespan(a);break}case"br":{n+=r.br(a);break}case"del":{n+=r.del(a);break}case"text":{n+=r.text(a);break}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}},Rn=class{options;block;constructor(t){this.options=t||Kr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?pr.lex:pr.lexInline}provideParser(){return this.block?dr.parse:dr.parseInline}},vc=class{defaults=ts();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=dr;Renderer=hi;TextRenderer=cs;Lexer=pr;Tokenizer=di;Hooks=Rn;constructor(...t){this.use(...t)}walkTokens(t,e){let r=[];for(let n of t)switch(r=r.concat(e.call(this,n)),n.type){case"table":{let i=n;for(let o of i.header)r=r.concat(this.walkTokens(o.tokens,e));for(let o of i.rows)for(let a of o)r=r.concat(this.walkTokens(a.tokens,e));break}case"list":{let i=n;r=r.concat(this.walkTokens(i.items,e));break}default:{let i=n;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let a=i[o].flat(1/0);r=r.concat(this.walkTokens(a,e))}):i.tokens&&(r=r.concat(this.walkTokens(i.tokens,e)))}}return r}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let n={...r};if(n.async=this.defaults.async||n.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=e.renderers[i.name];o?e.renderers[i.name]=function(...a){let c=i.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[i.level];o?o.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),r.renderer){let i=this.defaults.renderer||new hi(this.defaults);for(let o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,c=r.renderer[a],f=i[a];i[a]=(...b)=>{let R=c.apply(i,b);return R===!1&&(R=f.apply(i,b)),R||""}}n.renderer=i}if(r.tokenizer){let i=this.defaults.tokenizer||new di(this.defaults);for(let o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,c=r.tokenizer[a],f=i[a];i[a]=(...b)=>{let R=c.apply(i,b);return R===!1&&(R=f.apply(i,b)),R}}n.tokenizer=i}if(r.hooks){let i=this.defaults.hooks||new Rn;for(let o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,c=r.hooks[a],f=i[a];Rn.passThroughHooks.has(o)?i[a]=b=>{if(this.defaults.async&&Rn.passThroughHooksRespectAsync.has(o))return(async()=>{let y=await c.call(i,b);return f.call(i,y)})();let R=c.call(i,b);return f.call(i,R)}:i[a]=(...b)=>{if(this.defaults.async)return(async()=>{let y=await c.apply(i,b);return y===!1&&(y=await f.apply(i,b)),y})();let R=c.apply(i,b);return R===!1&&(R=f.apply(i,b)),R}}n.hooks=i}if(r.walkTokens){let i=this.defaults.walkTokens,o=r.walkTokens;n.walkTokens=function(a){let c=[];return c.push(o.call(this,a)),i&&(c=c.concat(i.call(this,a))),c}}this.defaults={...this.defaults,...n}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return pr.lex(t,e??this.defaults)}parser(t,e){return dr.parse(t,e??this.defaults)}parseMarkdown(t){return(e,r)=>{let n={...r},i={...this.defaults,...n},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=t),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(e):e,c=await(i.hooks?await i.hooks.provideLexer():t?pr.lex:pr.lexInline)(a,i),f=i.hooks?await i.hooks.processAllTokens(c):c;i.walkTokens&&await Promise.all(this.walkTokens(f,i.walkTokens));let b=await(i.hooks?await i.hooks.provideParser():t?dr.parse:dr.parseInline)(f,i);return i.hooks?await i.hooks.postprocess(b):b})().catch(o);try{i.hooks&&(e=i.hooks.preprocess(e));let a=(i.hooks?i.hooks.provideLexer():t?pr.lex:pr.lexInline)(e,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let c=(i.hooks?i.hooks.provideParser():t?dr.parse:dr.parseInline)(a,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(a){return o(a)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let n="<p>An error occurred:</p><pre>"+fr(r.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(r);throw r}}},Br=new vc;function st(t,e){return Br.parse(t,e)}st.options=st.setOptions=function(t){return Br.setOptions(t),st.defaults=Br.defaults,Ca(st.defaults),st};st.getDefaults=ts;st.defaults=Kr;st.use=function(...t){return Br.use(...t),st.defaults=Br.defaults,Ca(st.defaults),st};st.walkTokens=function(t,e){return Br.walkTokens(t,e)};st.parseInline=Br.parseInline;st.Parser=dr;st.parser=dr.parse;st.Renderer=hi;st.TextRenderer=cs;st.Lexer=pr;st.lexer=pr.lex;st.Tokenizer=di;st.Hooks=Rn;st.parse=st;st.options;st.setOptions;st.use;st.walkTokens;st.parseInline;dr.parse;pr.lex;let Cn=null;function us(){return Cn||(Cn=document.createElement("div"),Cn.id="global-dialog-container",document.body.appendChild(Cn)),Cn}function ps(t){return new Promise(e=>{const r=us(),n=()=>{Tr(V``,r)},i=()=>{n(),e(t.confirmValue)},o=()=>{n(),e(t.cancelValue)},a=V`
            <wa-dialog label="${t.title}" open @wa-request-close=${o}>
                <style>
                    .dialog-content {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        padding: 1rem;
                        min-width: 400px;
                    }
                    
                    .dialog-message {
                        margin-bottom: 0.5rem;
                        color: var(--wa-color-neutral-700);
                    }
                    
                    .markdown-content {
                        line-height: 1.6;
                    }
                    
                    .markdown-content h1,
                    .markdown-content h2,
                    .markdown-content h3 {
                        margin-top: 1rem;
                        margin-bottom: 0.5rem;
                        font-weight: 600;
                    }
                    
                    .markdown-content h1 { font-size: 1.5rem; }
                    .markdown-content h2 { font-size: 1.3rem; }
                    .markdown-content h3 { font-size: 1.1rem; }
                    
                    .markdown-content p {
                        margin: 0.5rem 0;
                    }
                    
                    .markdown-content ul,
                    .markdown-content ol {
                        margin: 0.5rem 0;
                        padding-left: 1.5rem;
                    }
                    
                    .markdown-content code {
                        background: var(--wa-color-neutral-100);
                        padding: 0.125rem 0.25rem;
                        border-radius: 3px;
                        font-family: monospace;
                        font-size: 0.9em;
                    }
                    
                    .markdown-content pre {
                        background: var(--wa-color-neutral-100);
                        padding: 0.75rem;
                        border-radius: 4px;
                        overflow-x: auto;
                    }
                    
                    .markdown-content pre code {
                        background: none;
                        padding: 0;
                    }
                    
                    .markdown-content hr {
                        border: none;
                        border-top: 1px solid var(--wa-color-neutral-300);
                        margin: 1rem 0;
                    }
                    
                    .markdown-content blockquote {
                        border-left: 3px solid var(--wa-color-neutral-300);
                        padding-left: 1rem;
                        margin: 0.5rem 0;
                        color: var(--wa-color-neutral-600);
                    }
                    
                    .dialog-actions {
                        display: flex;
                        gap: 0.5rem;
                        justify-content: flex-end;
                        margin-top: 0.5rem;
                    }
                </style>
                
                <div class="dialog-content">
                    ${t.renderContent({onConfirm:i,onCancel:o})}
                </div>
            </wa-dialog>
        `;Tr(a,r),t.onAfterRender&&requestAnimationFrame(t.onAfterRender)})}function _i(t,e=!1){if(e){const r=st.parse(t,{async:!1});return V`<div class="dialog-message markdown-content" style="white-space: normal;">${Un(r)}</div>`}return V`<div class="dialog-message" style="white-space: pre-line;">${t}</div>`}const Wn=async(t,e="",r=!1)=>{let n=e;return ps({title:"Input",message:t,markdown:r,confirmValue:n,cancelValue:null,renderContent:({onConfirm:i,onCancel:o})=>{const a=f=>{n=f.target.value},c=f=>{f.key==="Enter"?(f.preventDefault(),i()):f.key==="Escape"&&(f.preventDefault(),o())};return V`
                ${_i(t,r)}
                <wa-input
                    value="${e}"
                    @input=${a}
                    @keydown=${c}
                    autofocus
                ></wa-input>
                
                <div class="dialog-actions">
                    <wa-button variant="default" @click=${o}>
                        Cancel
                    </wa-button>
                    <wa-button variant="primary" @click=${()=>{i()}}>
                        OK
                    </wa-button>
                </div>
            `},onAfterRender:()=>{const o=us().querySelector("wa-input");if(o){const a=o.shadowRoot?.querySelector("input");a&&(a.focus(),a.select())}}}).then(()=>n)},mn=async(t,e=!1)=>ps({title:"Confirm",message:t,markdown:e,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:r,onCancel:n})=>V`
            ${_i(t,e)}
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${n}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${r}>
                    OK
                </wa-button>
            </div>
        `}),yc=async(t,e,r=!1)=>{await ps({title:t,message:e,markdown:r,confirmValue:void 0,cancelValue:void 0,renderContent:({onConfirm:n})=>V`
            ${_i(e,r)}
            
            <div class="dialog-actions">
                <wa-button variant="primary" @click=${n}>
                    OK
                </wa-button>
            </div>
        `})},bc=async(t,e,r,n=!1)=>new Promise(i=>{const o=us();let a=!0;const c=()=>{a&&(a=!1,Tr(V``,o),i())},f=(b,R,y)=>{if(!a)return;const I=V`
                <wa-dialog label="${b}" open @wa-request-close=${c}>
                    <style>
                        .dialog-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 400px;
                            max-width: 600px;
                            height: 500px;
                        }
                        
                        .dialog-scroller {
                            flex: 1;
                            overflow-y: auto;
                        }
                        
                        .dialog-message {
                            margin-bottom: 0.5rem;
                            color: var(--wa-color-neutral-700);
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
                    </style>
                    
                    <div class="dialog-content">
                        <wa-scroller class="dialog-scroller">
                            ${_i(R,n)}
                        </wa-scroller>
                        
                        <div class="dialog-actions">
                            <div class="dialog-actions-left">
                                ${y.filter(k=>k.label!=="Close").map(k=>V`
                                    <wa-button 
                                        variant="${k.variant||"default"}"
                                        ?disabled=${k.disabled}
                                        @click=${()=>{k.callback()}}
                                    >
                                        ${k.label}
                                    </wa-button>
                                `)}
                            </div>
                            <div class="dialog-actions-right">
                                ${y.filter(k=>k.label==="Close").map(k=>V`
                                    <wa-button 
                                        variant="${k.variant||"primary"}"
                                        @click=${()=>{k.callback(),c()}}
                                    >
                                        ${k.label}
                                    </wa-button>
                                `)}
                            </div>
                        </div>
                    </div>
                </wa-dialog>
            `;Tr(I,o)};r.updateDialog=f,f(t,e,r)});xr.put("promptDialog",Wn);xr.put("confirmDialog",mn);xr.put("infoDialog",yc);xr.put("navigableInfoDialog",bc);var ai={exports:{}};var wc=ai.exports,Us;function xc(){return Us||(Us=1,(function(t){(function(e,r){t.exports?t.exports=r():e.Toastify=r()})(wc,function(e){var r=function(a){return new r.lib.init(a)},n="1.12.0";r.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},r.lib=r.prototype={toastify:n,constructor:r,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||r.defaults.text,this.options.node=a.node||r.defaults.node,this.options.duration=a.duration===0?0:a.duration||r.defaults.duration,this.options.selector=a.selector||r.defaults.selector,this.options.callback=a.callback||r.defaults.callback,this.options.destination=a.destination||r.defaults.destination,this.options.newWindow=a.newWindow||r.defaults.newWindow,this.options.close=a.close||r.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":r.defaults.gravity,this.options.positionLeft=a.positionLeft||r.defaults.positionLeft,this.options.position=a.position||r.defaults.position,this.options.backgroundColor=a.backgroundColor||r.defaults.backgroundColor,this.options.avatar=a.avatar||r.defaults.avatar,this.options.className=a.className||r.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?r.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||r.defaults.onClick,this.options.offset=a.offset||r.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:r.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||r.defaults.ariaLive,this.options.style=a.style||r.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var c in this.options.style)a.style[c]=this.options.style[c];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var f=document.createElement("img");f.src=this.options.avatar,f.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(f):a.insertAdjacentElement("afterbegin",f)}if(this.options.close===!0){var b=document.createElement("button");b.type="button",b.setAttribute("aria-label","Close"),b.className="toast-close",b.innerHTML="&#10006;",b.addEventListener("click",(function(ve){ve.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var R=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&R>360?a.insertAdjacentElement("afterbegin",b):a.appendChild(b)}if(this.options.stopOnFocus&&this.options.duration>0){var y=this;a.addEventListener("mouseover",function(ve){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){y.removeElement(a)},y.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(ve){ve.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(ve){ve.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var I=i("x",this.options),k=i("y",this.options),j=this.options.position=="left"?I:"-"+I,J=this.options.gravity=="toastify-top"?k:"-"+k;a.style.transform="translate("+j+","+J+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var c=r.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,c),r.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),r.reposition()}).bind(this),400)}},r.reposition=function(){for(var a={top:15,bottom:15},c={top:15,bottom:15},f={top:15,bottom:15},b=document.getElementsByClassName("toastify"),R,y=0;y<b.length;y++){o(b[y],"toastify-top")===!0?R="toastify-top":R="toastify-bottom";var I=b[y].offsetHeight;R=R.substr(9,R.length-1);var k=15,j=window.innerWidth>0?window.innerWidth:screen.width;j<=360?(b[y].style[R]=f[R]+"px",f[R]+=I+k):o(b[y],"toastify-left")===!0?(b[y].style[R]=a[R]+"px",a[R]+=I+k):(b[y].style[R]=c[R]+"px",c[R]+=I+k)}return this};function i(a,c){return c.offset[a]?isNaN(c.offset[a])?c.offset[a]:c.offset[a]+"px":"0px"}function o(a,c){return!a||typeof c!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(c)>-1)}return r.lib.init.prototype=r.lib,r})})(ai)),ai.exports}var Ma=xc();const Fa=bi(Ma),Ic=ha({__proto__:null,default:Fa},[Ma]),ds=Fa||Ic,tr=t=>{console.info("[TOAST] INFO: ",t),ds({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},Ze=t=>{console.error("[TOAST] ERROR: ",t),ds({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},kc=t=>{console.warn("[TOAST] WARNING: ",t),ds({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};xr.put("toastInfo",tr);xr.put("toastError",Ze);xr.put("toastWarning",kc);const qa=(t,e)=>{const r=new wr.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{r.watch()}});r.watch(t)},hs=t=>function(e,r,n){const i=n.value;return i.signal=t,n};Object.defineProperty(la.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Bn extends la{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r];if(n instanceof Function){const i=n;i.name.startsWith("on")&&"topic"in i&&this.subscribe(i.topic,i)}}),Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r];if(n instanceof Function){const i=n;i.name.startsWith("on")&&"signal"in i&&this.watch(i.signal,i)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,r){Kt(e,r.bind(this))}showInfo(e){tr(e)}showError(e){Ze(e)}nobubble(e){return r=>{r.stopPropagation(),e.bind(this)(r)}}command(e,r={}){return()=>{this.executeCommand(e,r)}}executeCommand(e,r){const n=je.createExecutionContext(r);je.execute(e,n)}watch(e,r){qa(e,r.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}function fs(t){return new Promise((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)})}function Sc(t,e){let r;const n=()=>{if(r)return r;const i=indexedDB.open(t);return i.onupgradeneeded=()=>i.result.createObjectStore(e),r=fs(i),r.then(o=>{o.onclose=()=>r=void 0},()=>{}),r};return(i,o)=>n().then(a=>o(a.transaction(e,i).objectStore(e)))}let Mi;function za(){return Mi||(Mi=Sc("keyval-store","keyval")),Mi}function _c(t,e=za()){return e("readonly",r=>fs(r.get(t)))}function Cc(t,e,r=za()){return r("readwrite",n=>(n.put(e,t),fs(n.transaction)))}class Ec{async persistObject(e,r){return Cc(e,r)}async getObject(e){return _c(e)}}const mr=new Ec;Bt.put("persistenceService",mr);const tn=".geospace/settings.json",oi="dialogSettings",Wr="events/settings/changed";class Ac{async checkSettings(){this.appSettings||(this.appSettings=await mr.getObject(tn),this.appSettings||(this.appSettings={},await mr.persistObject(tn,this.appSettings)),Xe(Wr,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,r){await this.checkSettings(),this.appSettings[e]=r,await mr.persistObject(tn,this.appSettings),Xe(Wr,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await mr.persistObject(tn,this.appSettings),Xe(Wr,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[oi]||{})[e]}async setDialogSetting(e,r){await this.checkSettings();const n=this.appSettings[oi]||{};n[e]=r,this.appSettings[oi]=n,await mr.persistObject(tn,this.appSettings),Xe(Wr,this.appSettings)}}const xt=new Ac;Bt.put("appSettings",xt);const td=Object.freeze(Object.defineProperty({__proto__:null,DIALOG_SETTINGS_KEY:oi,SETTINGS_FILE_PATH:tn,TOPIC_SETTINGS_CHANGED:Wr,appSettings:xt},Symbol.toStringTag,{value:"Module"}));class Yr extends Bn{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let r=this;for(;r&&r!==document.body&&r!==document.documentElement;){const n=r.getAttribute("id");if(n){e.unshift(`#${n}`);break}const i=r.tagName.toLowerCase(),o=r.parentElement;if(!o)break;const c=Array.from(o.children).filter(f=>f.tagName.toLowerCase()===i).indexOf(r);c>=0?e.unshift(`${i}:${c}`):e.unshift(i),r=o}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),r=this.getAttribute("id");if(r){this.settingsKey=`${e}:${r}`;return}const n=this.buildDOMTreePath();n&&(this.settingsKey=`${e}:${n}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await xt.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await xt.setDialogSetting(this.settingsKey,e)}}var Tc=Object.getOwnPropertyDescriptor,Oc=(t,e,r,n)=>{for(var i=n>1?void 0:n?Tc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};let Ki=class extends Yr{render(){return V`
            <slot></slot>
        `}};Ki.styles=Yt`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Ki=Oc([Et("k-app")],Ki);var Rc=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,gn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Pc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Rc(e,r,i),i};let Or=class extends Ii(Yr){constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Kt(Lr,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=Me.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),n=`${r}:*`,i=Me.getContributions(n),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const c of a){const f=`${r}:${c}`,b=Me.getContributions(f);o.push(...b)}}this.contributions=[...i,...o,...e]}contributionCreator(t){if("command"in t){const e=t,r=!!e.showLabel;return V`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${r?e.label:""}
                </wa-button>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():Un(e)}else return V`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return V`
            <div class="toolbar-items" style=${Do({"justify-content":this.position})}>
                <slot name="start">
                    ${this.contributions.filter(e=>e.slot==="start").map(this.contributionCreator.bind(this))}
                </slot>
                ${t}
                ${this.contributions.filter(e=>e.slot===void 0).map(this.contributionCreator.bind(this))}
                <slot>
                </slot>
                <slot name="end">
                    ${this.contributions.filter(e=>e.slot==="end").map(this.contributionCreator.bind(this))}
                </slot>
            </div>
        `}};Or.styles=Yt`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;gn([Ve()],Or.prototype,"position",2);gn([Ve({type:Boolean,attribute:"is-editor"})],Or.prototype,"isEditor",2);gn([Ve({attribute:!1})],Or.prototype,"partToolbarContent",2);gn([Ve({attribute:!1})],Or.prototype,"partToolbarRenderer",2);gn([At()],Or.prototype,"contributions",2);Or=gn([Et("k-toolbar")],Or);var Lc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,vn=(t,e,r,n)=>{for(var i=n>1?void 0:n?$c(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Lc(e,r,i),i};let Rr=class extends Ii(Yr){constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=yr(),this.dropdownRef=yr()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Kt(Lr,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=Me.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),n=`${r}:*`,i=Me.getContributions(n),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const c of a){const f=`${r}:${c}`,b=Me.getContributions(f);o.push(...b)}}this.contributions=[...i,...o,...e]}getElementFromPoint(t,e){let r=document.elementFromPoint(t,e);if(!r)return null;for(;r;){const n=r.shadowRoot;if(n){const i=n.elementFromPoint(t,e);if(i&&i!==r){r=i;continue}}break}return r}triggerClickUnderCursor(t){const e=this.getElementFromPoint(t.clientX,t.clientY);if(e){const r=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(r)}}show(t,e){e&&this.triggerClickUnderCursor(e),this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){if("command"in t){const e=t;return V`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?V`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():Un(e)}return It}render(){if(!this.isOpen)return It;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():It;return V`
            <wa-dropdown 
                ${br(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${br(this.anchorRef)}
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
        `}};Rr.styles=Yt`
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
        
        wa-dropdown::part(panel) {
            min-width: 200px;
        }
    `;vn([Ve({type:Boolean,attribute:"is-editor"})],Rr.prototype,"isEditor",2);vn([Ve({attribute:!1})],Rr.prototype,"partContextMenuRenderer",2);vn([At()],Rr.prototype,"contributions",2);vn([At()],Rr.prototype,"isOpen",2);vn([At()],Rr.prototype,"position",2);Rr=vn([Et("k-contextmenu")],Rr);class ms extends Yr{}const js=(t,e,r)=>{const n=new Map;for(let i=e;i<=r;i++)n.set(t[i],i);return n},Dc=ca(class extends ua{constructor(t){if(super(t),t.type!==No.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const i=[],o=[];let a=0;for(const c of t)i[a]=n?n(c,a):a,o[a]=r(c,a),a++;return{values:o,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){const i=Mo(t),{values:o,keys:a}=this.dt(e,r,n);if(!Array.isArray(i))return this.ut=a,o;const c=this.ut??=[],f=[];let b,R,y=0,I=i.length-1,k=0,j=o.length-1;for(;y<=I&&k<=j;)if(i[y]===null)y++;else if(i[I]===null)I--;else if(c[y]===a[k])f[k]=Ur(i[y],o[k]),y++,k++;else if(c[I]===a[j])f[j]=Ur(i[I],o[j]),I--,j--;else if(c[y]===a[j])f[j]=Ur(i[y],o[j]),In(t,f[j+1],i[y]),y++,j--;else if(c[I]===a[k])f[k]=Ur(i[I],o[k]),In(t,i[y],i[I]),I--,k++;else if(b===void 0&&(b=js(a,k,j),R=js(c,y,I)),b.has(c[y]))if(b.has(c[I])){const J=R.get(a[k]),ve=J!==void 0?i[J]:null;if(ve===null){const xe=In(t,i[y]);Ur(xe,o[k]),f[k]=xe}else f[k]=Ur(ve,o[k]),In(t,i[y],ve),i[J]=null;k++}else Pi(i[I]),I--;else Pi(i[y]),y++;for(;k<=j;){const J=In(t,f[j+1]);Ur(J,o[k]),f[k++]=J}for(;y<=I;){const J=i[y++];J!==null&&Pi(J)}return this.ut=a,pa(t,f),Fo}}),Nc="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Mc="/assets/jupyter-C78Cpfql.svg",Fc="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";qo("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":Nc,"../icons/jupyter.svg":Mc,"../icons/python.svg":Fc})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var qc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,Gn=(t,e,r,n)=>{for(var i=n>1?void 0:n?zc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&qc(e,r,i),i};let Gr=class extends Bn{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),r=t.pop();return V`
            <wa-icon library="${r||It}" variant="${this.variant||It}"
                         family="${this.family||It}" name=${e} label="${this.label||this.name||It}"></wa-icon>`}};Gr.styles=Yt`
        :host {
            display: contents;
        }
    `;Gn([Ve()],Gr.prototype,"name",2);Gn([Ve()],Gr.prototype,"family",2);Gn([Ve()],Gr.prototype,"variant",2);Gn([Ve()],Gr.prototype,"label",2);Gr=Gn([Et("k-icon")],Gr);var Uc=Object.defineProperty,jc=(t,e,r,n)=>{for(var i=void 0,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(e,r,i)||i);return i&&Uc(e,r,i),i};class jt extends ms{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return It}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return It}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Bi.set(null),Bi.set(this),at.set(null),at.set(this)}}jc([Ve()],jt.prototype,"dirty");const Ua="app-toolbars-main",yn="app-toolbars-main-right",Wc="app-toolbars-main-center",ja="app-toolbars-bottom",gs="app-toolbars-bottom-center",vs="app-toolbars-bottom-end",nn="editor-area-main",Wa="sidebar-main",Ba="sidebar-main-bottom",Ga="sidebar-auxiliary",rd="panel-bottom",Bc=!1;var Va=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(Va||{});class Gc{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,xa.set(this.updateCounter)}run(e,r){const n=this.createProgressMonitor(e);try{this.tasks.push(n),this.notifyUpdate(),r(n)}finally{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()}}async runAsync(e,r){const n=this.createProgressMonitor(e);return this.tasks.push(n),this.notifyUpdate(),r(n).finally(()=>{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()})}createProgressMonitor(e){const r={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(r,{set:(n,i,o)=>(n[i]=o,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const fi=new Gc;Bt.put("taskService",fi);const Pn="events/extensionsregistry/extensionsConfigChanged",En="extensions",Ws="extensions.external";class Vc{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,Kt(Wr,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(r=>this.isEnabled(r.id)).map(r=>this.load(r.id).catch(n=>{Ze("Extension could not be loaded: "+n.message)}))||[];await Promise.all(e)})})}async loadPersistedExternalExtensions(){try{const e=await xt.get(Ws);e&&Array.isArray(e)&&(e.forEach(r=>{this.extensions[r.id]=r}),nt.debug(`Loaded ${e.length} persisted external extensions`))}catch(e){nt.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(r=>r.external);await xt.set(Ws,e)}catch(e){nt.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await xt.get(En),this.extensionsSettings||(await xt.set(En,[]),this.extensionsSettings=await xt.get(En)),Xe(Pn,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,e.external&&this.savePersistedExternalExtensions().catch(r=>{nt.error(`Failed to persist external extension: ${r}`)}),Xe(Pn,this.extensionsSettings)}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(r=>r.id===e&&r.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,r=!1){this.isEnabled(e)||(nt.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,r)}).catch(n=>{nt.error(`Could not load extension: ${e}`)}))}async load(e,r=[]){if(this.loadedExtensions.has(e))return;const n=this.loadingPromises.get(e);if(n)return n;if(r.includes(e)){const a=[...r,e].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const i=this.extensions[e];if(!i)throw new Error("Extension not found: "+e);const o=(async()=>{try{if(i.dependencies&&i.dependencies.length>0){nt.debug(`Loading dependencies for ${e}: ${i.dependencies.join(", ")}`);const c=[...r,e];for(const f of i.dependencies)await this.load(f,c),this.isEnabled(f)||(await this.updateEnablementAsync(f,!0,!1),nt.debug(`Auto-enabled dependency: ${f}`))}const a=await fi.runAsync("Loading extension: "+i.name,()=>{if(i.loader)return i.loader();if(i.url)return import(i.url)});if(this.loadedExtensions.add(e),a?.default instanceof Function){nt.debug(`Executing extension function for: ${e}`);try{a?.default(xr.getProxy()),nt.debug(`Extension function executed successfully: ${e}`)}catch(c){throw nt.error(`Error executing extension function for ${e}: ${c}`),c}}else nt.warn(`Extension ${e} does not export a default function`);nt.debug(`Extension loaded: ${e}`)}catch(a){throw this.loadedExtensions.delete(e),a}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,o),o}disable(e,r=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,r)}updateEnablement(e,r,n){this.checkExtensionsConfig().then(()=>{const i=this.extensionsSettings?.find(o=>o.id==e);i?i.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),xt.set(En,this.extensionsSettings).then(()=>{if(n){const o=this.extensions[e];tr(r?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}Xe(Pn,this.extensionsSettings)})})}async updateEnablementAsync(e,r,n){await this.checkExtensionsConfig();const i=this.extensionsSettings?.find(o=>o.id==e);if(i?i.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),await xt.set(En,this.extensionsSettings),n){const o=this.extensions[e];tr(r?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}Xe(Pn,this.extensionsSettings)}}nt.debug("ExtensionRegistry initializing...");const Ue=new Vc;Bt.put("extensionRegistry",Ue);nt.debug("ExtensionRegistry initialized");const Ge=Vr("AppLoader");function An(t){return t instanceof Error?t.message:String(t)}function Hc(t){try{const r=new URL(t).pathname.split("/").filter(Boolean);return r.length>0?r[r.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function Kc(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const r=e[0];if(!(!r||r==="index.html"||r.endsWith(".html")))return r}class Yc{constructor(){this.apps=new Map,this.started=!1,this.container=document.body}registerApp(e,r){this.apps.has(e.id)&&Ge.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Ge.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),r?.defaultAppId&&(this.defaultAppId=r.defaultAppId),r?.container&&(this.container=r.container),r?.autoStart&&!this.started&&this.start()}async loadExtensionFromUrl(e){Ge.info(`Loading extension from URL: ${e}...`);try{const r=`url:${e}`;if(Ue.isEnabled(r)){Ge.info(`Extension from URL ${e} is already enabled`);return}const n={id:r,name:`Extension from ${e}`,description:`Extension loaded from URL: ${e}`,url:e};Ue.registerExtension(n),Ge.info(`Registered extension from URL: ${r}`),Ue.enable(r,!1),Ge.info(`Successfully enabled extension from URL: ${e}`)}catch(r){throw Ge.error(`Failed to load extension from URL ${e}: ${An(r)}`),r}}async loadAppFromUrl(e){Ge.info(`Loading app from URL: ${e}...`);try{const r=await import(e);if(!r.default)throw new Error(`Module at ${e} does not have a default export`);const n=r.default;if(!n.id||!n.name||!n.version)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return Ge.info(`Successfully loaded app definition from URL: ${n.name} (${n.id})`),n}catch(r){throw Ge.error(`Failed to load app from URL ${e}: ${An(r)}`),r}}async start(){if(this.started){Ge.debug("AppLoader already started");return}document.readyState==="loading"&&await new Promise(f=>{document.addEventListener("DOMContentLoaded",()=>f(),{once:!0})}),this.started=!0,Ge.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),r=e.get("app"),n=e.get("appId"),i=Kc(),o=this.apps.size;let a;if(r&&(a=Hc(r),a&&Ge.info(`Extracted app ID from URL path: ${a}`)),i&&Ge.info(`Extracted app ID from current page path: ${i}`),r)try{Ge.info(`URL parameter 'app' found: ${r}, attempting to load extension or app`);try{await this.loadExtensionFromUrl(r),Ge.info(`Successfully loaded extension from URL: ${r}`)}catch(f){Ge.info(`Failed to load as extension, trying as app definition: ${An(f)}`);try{const b=await this.loadAppFromUrl(r);this.registerApp(b),await this.loadApp(b.id,this.container),Ge.info(`Successfully loaded app from URL: ${r}`);return}catch(b){throw Ge.error(`Failed to load from URL as both extension and app: ${An(b)}`),b}}}catch(f){Ge.error(`Failed to load from URL parameter, falling back to default app: ${An(f)}`)}const c=this.selectAppToLoad({appIdFromUrl:n,appIdFromPath:i,appIdFromAppUrl:a,appsBeforeExtension:o});if(!c)throw new Error("No apps registered");await this.loadApp(c,this.container)}async loadApp(e,r){const n=this.apps.get(e);if(!n)throw new Error(`App '${e}' not found. Make sure it's registered.`);Ge.info(`Loading app: ${n.name}...`),this.currentApp&&(Ge.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Ge.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(i=>{Ue.disable(i)}))),n.contributions&&(Ge.info("Registering app contributions..."),n.contributions.ui&&(n.contributions.ui.forEach(i=>{const o=i.target;o&&Me.registerContribution(o,i)}),Ge.info(`Registered ${n.contributions.ui.length} UI contributions`)),n.contributions.extensions&&(n.contributions.extensions.forEach(i=>{Ue.registerExtension(i)}),Ge.info(`Registered ${n.contributions.extensions.length} app extensions`))),n.extensions&&(Ge.info(`Enabling ${n.extensions.length} extensions...`),n.extensions.forEach(i=>{Ue.enable(i)})),n.initialize&&(Ge.info(`Initializing ${n.name}...`),await n.initialize()),this.currentApp=n,Ge.info(`App ${n.name} loaded successfully`),this.updateDocumentMetadata(n),r&&this.renderApp(r)}updateDocumentMetadata(e){if(document.title=e.name,e.metadata?.favicon){const r=e.metadata.favicon;let n=document.querySelector("link[rel*='icon']");n||(n=document.createElement("link"),n.rel="icon",document.head.appendChild(n)),n.type="image/svg+xml",n.href=r}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const r=this.currentApp.render?this.currentApp.render():V`<k-standard-app></k-standard-app>`;Tr(r,e),Ge.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}selectAppToLoad(e){const{appIdFromUrl:r,appIdFromPath:n,appIdFromAppUrl:i,appsBeforeExtension:o}=e;if(r){if(this.apps.has(r))return Ge.info(`Loading app specified by URL parameter 'appId': ${r}`),r;Ge.warn(`App ID '${r}' from URL parameter not found`)}if(n){if(this.apps.has(n))return Ge.info(`Loading app from URL path: ${n}`),n;Ge.debug(`App ID '${n}' from URL path not found, continuing search`)}if(i&&this.apps.has(i))return Ge.info(`Loading app using ID extracted from app URL path: ${i}`),i;if(this.apps.size>o){const c=Array.from(this.apps.values()).slice(o);if(c.length>0){const f=c[0];return Ge.info(`Loading app registered by extension: ${f.name} (${f.id})`),f.id}}if(this.defaultAppId){if(this.apps.has(this.defaultAppId))return this.defaultAppId;Ge.warn(`Default app '${this.defaultAppId}' not found`)}const a=this.getRegisteredApps();if(a.length>0){const c=a[0];return Ge.info(`Loading first registered app: ${c.name} (${c.id})`),c.id}}}const Jr=new Yc;Bt.put("appLoaderService",Jr);var Jc=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,Ha=(t,e,r,n)=>{for(var i=n>1?void 0:n?Zc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Jc(e,r,i),i};let mi=class extends ms{constructor(){super(...arguments),this.contributions=[],this.tabGroup=yr(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&(this.updateToolbarFromComponent(r),requestAnimationFrame(()=>this.updateToolbarHeightVariable(r)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&this.updateContextMenuFromComponent(r)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,r=e.closest("wa-tab");if(r){const a=r.getAttribute("panel");if(a){const c=this.getTabPanel(a);if(c){const f=c.querySelector(".tab-content");if(f&&f.firstElementChild){const b=f.firstElementChild;b instanceof jt&&at.set(b)}}}return}const n=e.closest("wa-scroller.tab-content");if(!n)return;const i=n.closest("wa-tab-panel");if(!i)return;const o=i.querySelector(".tab-content");if(o&&o.firstElementChild){const a=o.firstElementChild;a instanceof jt&&at.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,r=e.target.closest("wa-scroller.tab-content");if(!r)return;e.preventDefault();const n=r.closest("wa-tab-panel");n&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(n);const i=n.querySelector("k-contextmenu");i&&i.show({x:e.clientX,y:e.clientY},e)})}))}),Kt(Lr,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===nn;this.contributions.forEach(r=>{const n=this.getTabPanel(r.name);if(!n)return;const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const o=i.firstElementChild;o instanceof jt&&(o.tabContribution=r,o.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(n))})}}has(t){return this.tabGroup.value?!!this.getTabPanel(t):!1}activate(t){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(t){if(this.contributions.find(r=>r.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const r=this.getTabPanel(t.name);if(r){const n=r.querySelector(".tab-content");if(n&&n.firstElementChild){const i=n.firstElementChild;i instanceof jt&&(i.tabContribution=t,i.isEditor=this.containerId===nn)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(r),this.updateToolbarHeightVariable(r),this.setupToolbarResizeObserver(r)})}})}handleTabAuxClick(t,e){t.button===Va.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await mn("Unsaved changes will be lost: Do you really want to close?"))return;const r=this.getTabPanel(e);if(!r)return;const n=this.contributions.find(o=>o.name===e);if(!n)return;this.cleanupTabInstance(r);const i=this.contributions.indexOf(n);i>-1&&this.contributions.splice(i,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:r})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=Me.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=this.resizeObservers.get(t);e&&(e.disconnect(),this.resizeObservers.delete(t));const r=t.querySelector(".tab-content");if(r&&r.firstElementChild){const n=r.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`):null}getTab(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`):null}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof jt)||!r.renderToolbar)return;const n=t.querySelector("k-toolbar");n&&(n.partToolbarRenderer=()=>r.renderToolbar(),n.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof jt)||!r.renderContextMenu)return;const n=t.querySelector("k-contextmenu");n&&(n.partContextMenuRenderer=()=>r.renderContextMenu(),n.requestUpdate())}updateToolbarHeightVariable(t){const e=t.querySelector(".tab-toolbar");if(!e)return;const r=e.offsetHeight;t.style.setProperty("--toolbar-height",`${r}px`)}setupToolbarResizeObserver(t){if(this.resizeObservers.has(t))return;const e=t.querySelector(".tab-toolbar");if(!e)return;const r=new ResizeObserver(()=>{this.updateToolbarHeightVariable(t)});r.observe(e),this.resizeObservers.set(t,r)}render(){const t=Jr.getCurrentApp();return V`
            <wa-tab-group ${br(this.tabGroup)}>
                ${Ut(this.contributions.length===0,()=>V`
                        <div class="empty-state">
                            ${Ut(t,()=>V`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${t.name}</h2>
                                        ${Ut(t.description,()=>V`<p class="empty-description">${t.description}</p>`)}
                                    </div>
                                `,()=>V`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>Dc(this.contributions,e=>e.name,e=>V`
                            <wa-tab panel="${e.name}"
                                    @auxclick="${r=>this.handleTabAuxClick(r,e)}">
                                <k-icon name="${e.icon}"></k-icon>
                                ${e.label}
                                ${Ut(e.closable,()=>V`
                                    <wa-icon name="xmark" label="Close"  @click="${r=>this.closeTab(r,e.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${e.name}">
                                <k-toolbar id="toolbar:${e.editorId??e.name}" 
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===nn}"></k-toolbar>
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${e.component?e.component(e.name):It}
                                </wa-scroller>
                                <k-contextmenu id="contextmenu:${e.name}"
                                               ?is-editor="${this.containerId===nn}"></k-contextmenu>
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};mi.styles=Yt`
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
    `;Ha([At()],mi.prototype,"contributions",2);mi=Ha([Et("k-tabs")],mi);var Xc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,Vn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Qc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Xc(e,r,i),i};let pn=class extends Yr{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=t=>{if(!this.resizing)return;const r=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,n=[...this.resizing.startSizes];n[this.resizing.handleIndex]+=r,n[this.resizing.handleIndex+1]-=r;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,o=i*.05;if(n[this.resizing.handleIndex]>=o&&n[this.resizing.handleIndex+1]>=o){this.resizing.currentSizes=n;const a=n.map((c,f)=>{const R=`${(c/i*100).toFixed(2)}%`;return f===n.length-1?R:`${R} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,r)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${r*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${r*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const r=this.orientation==="horizontal"?t.clientX:t.clientY,n=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(o=>o.endsWith("%")?parseFloat(o)/100*n:(o.endsWith("px"),parseFloat(o)));this.resizing={handleIndex:e,startPos:r,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return It;const t=this.gridSizes.flatMap((e,r)=>r===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",V`
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
            
            ${this.gridChildren.map((e,r)=>{if(r<this.gridChildren.length-1){const n=this.orientation==="horizontal"?`${r*2+2}`:"1",i=this.orientation==="vertical"?`${r*2+2}`:"1";return V`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${n};
                                grid-row: ${i};
                            "
                            @mousedown=${o=>this.startResize(o,r)}
                        ></div>
                    `}return It})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Vn([Ve()],pn.prototype,"orientation",2);Vn([Ve()],pn.prototype,"sizes",2);Vn([At()],pn.prototype,"gridSizes",2);Vn([At()],pn.prototype,"gridChildren",2);pn=Vn([Et("k-resizable-grid")],pn);var eu=Object.getOwnPropertyDescriptor,tu=(t,e,r,n)=>{for(var i=n>1?void 0:n?eu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};let Bs=class extends ms{createRenderRoot(){return this}render(){return V`
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
                
                k-standard-app {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                k-standard-app .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                k-standard-app .toolbar-bottom {
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
                
                k-standard-app .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                k-standard-app .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <div class="toolbar-top">
                <k-toolbar id=${Ua}></k-toolbar>
                <k-toolbar id=${Wc}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${yn}></k-toolbar>
            </div>
            
            <k-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes="15%, 65%, 20%">
                
                <k-resizable-grid 
                    id="left-sidebar-split" 
                    orientation="vertical" 
                    sizes="50%, 50%">
                    <k-tabs id="${Wa}"></k-tabs>
                    <k-tabs id="${Ba}"></k-tabs>
                </k-resizable-grid>
                
                <k-tabs id="${nn}"></k-tabs>
                
                <k-tabs id="${Ga}"></k-tabs>
            </k-resizable-grid>
            
            <div class="toolbar-bottom">
                <k-toolbar id=${ja}></k-toolbar>
                <k-toolbar id=${gs}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${vs}></k-toolbar>
            </div>
        `}};Bs=tu([Et("k-standard-app")],Bs);const vr="events/filesys/workspaceChanged",Fn="events/filesys/workspaceConnected";class gi{constructor(){this.state={}}getWorkspacePath(){const e=[];let r=this;for(;r;)e.push(r.getName()),r=r.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const r=e.getParent();if(r)e=r;else break}return e}}var Ka=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(Ka||{});class ir extends gi{}class on extends gi{}class ru extends ir{constructor(e,r){super(),this.contents=e,this.name=r}async getContents(e){return this.contents}async saveContents(e,r){this.contents=e}async size(){return this.contents.length||null}async copyTo(e){throw Error("Not supported")}delete(e,r){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class Gs extends ir{constructor(e,r){super(),this.fileHandle=e,this.parent=r}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const r=await this.fileHandle.getFile();return!e||e?.contentType==0?await r.text():e?.encoding==0||e?.uri?URL.createObjectURL(r):e?.blob?r:r.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,r){const n=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(n);else{const i=n.getWriter();try{await i.write(e)}finally{await i.close()}}}async copyTo(e){const r=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(r)}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):n}await r.listChildren(!0),Xe(vr,this.getWorkspace())}}}class Cr extends on{constructor(e,r){super(),this.dirHandle=e,this.parent=r}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const r={};try{for await(const n of this.dirHandle.values()){const o=n.kind==="file"?new Gs(n,this):new Cr(n,this);r[o.getName()]=o}}catch(n){if(n.name==="NotFoundError")return this.files={},[];throw n}return this.files=r,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,r){if(!e)throw new Error("No path provided");const n=e.split("/");let i=this,o=!1;try{for(let a=0;a<n.length;a++){let c=n[a];if(c&&(c=c.trim()),!c)break;if(i instanceof Cr){if(await i.listChildren(),!i.files)return null;const f=i.files[c];if(f)i=f;else if(r?.create)if(o=!0,a<n.length-1)try{const b=await i.dirHandle.getDirectoryHandle(c,{create:!0}),R=new Cr(b,i);i.files[c]=R,i=R,i instanceof Cr&&await i.listChildren();continue}catch(b){throw b.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${n.slice(0,a+1).join("/")}`):b}else try{const b=await i.dirHandle.getFileHandle(c,{create:!0}),R=new Gs(b,i);return i.files[c]=R,R}catch(b){throw b.name==="NotFoundError"?new Error(`File not found or not accessible: ${n.join("/")}`):b}else return null}}}finally{o&&Xe(vr,this.getWorkspace())}return i}touch(){Xe(vr,this.getWorkspace())}async delete(e,r=!0){if(!e){const n=this.getParent();return n instanceof Cr&&(await n.listChildren(),n.files&&delete n.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,n?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:r}).then(async()=>{this.files&&delete this.files[e],Xe(vr,this.getWorkspace())})}async copyTo(e){for(const r of await this.listChildren()){const n=[e,r.getName()].join("/");await r.copyTo(n)}}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):n}await r.listChildren(!0),Xe(vr,this.getWorkspace())}}}class nu{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&Xe(Fn,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await mr.getObject("workspace_data");if(!e)return;const r=this.contributions.get(e.type);if(!r){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(r.restore){const n=await r.restore(e.data);return n&&(this.currentType=e.type),n}}catch(n){console.error(`Failed to restore workspace of type ${e.type}:`,n)}}async connectWorkspace(e){const r=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!r)throw new Error("No workspace contribution can handle this input");const n=await r.connect(e),i=r.persist?await r.persist(n):e,o={type:r.type,data:i};return await mr.persistObject("workspace_data",o),this.currentType=r.type,this.workspace=Promise.resolve(n),Xe(Fn,n),n}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await mr.persistObject("workspace_data",null),await mr.persistObject("workspace",null)}}const Nt=new nu;Bt.put("workspaceService",Nt);Nt.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new Cr(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new Cr(t,void 0)},async persist(t){return t instanceof Cr?t.getHandle():null}});const Vs=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);class iu{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,Kt(Fn,()=>{}),Kt(Lr,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=Me.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((r,n)=>{const i=r.priority??0,o=n.priority??0;return o!==i?o-i:r.label.localeCompare(n.label)}),this.cachedIconContributions}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const r=o=>{const a=o.detail;a&&Array.from(a.querySelectorAll("*")).filter(f=>f instanceof jt).forEach(f=>{at.set(f),f.isEditor&&an.set(f)})};e.addEventListener("tab-shown",r);const n=o=>{const a=o.detail;Array.from(a.querySelectorAll("*")).filter(f=>f instanceof jt).forEach(f=>{at.get()==f&&at.set(null),an.get()==f&&an.set(null)})};e.addEventListener("tab-closed",n),qa(Bi,o=>{const c=o.closest("wa-tab-panel").getAttribute("name");e.markDirty(c,o.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((r,n)=>(n.ranking??0)-(r.ranking??0))}async handleInput(e){for(let r=0;r<this.editorInputHandlers.length;r++){const n=this.editorInputHandlers[r];if(n.canHandle(e))return await n.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${nn}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const r=this.getEditorArea();if(!r){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(r),r.has(e.key)){r.activate(e.key);return}r.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}getFileIcon(e){const r=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),n=this.getSortedIconContributions();if(n.length===0)return"file";for(const i of n)if(i.mappings&&i.mappings[r])return i.mappings[r];return"file"}}const $r=new iu;Bt.put("editorRegistry",$r);Me.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});var su=Object.defineProperty,au=Object.getOwnPropertyDescriptor,Ci=(t,e,r,n)=>{for(var i=n>1?void 0:n?au(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&su(e,r,i),i};let dn=class extends jt{constructor(){super(...arguments),this.treeRef=yr(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),Kt(Lr,t=>{t.target==="system.icons"&&this.requestUpdate()})}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await Nt.getWorkspace();t?await this.loadWorkspace(t):je.execute("help")}renderToolbar(){const t=er.get()instanceof gi;return V`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const t=er.get()instanceof gi;return V`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>Delete</k-command>
        `}async onWorkspaceChanged(t){er.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t,!0):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&er.set(e[0].model?.data)}async resourceToTreeNode(t,e=!1){const r=t instanceof ir,n={data:t,label:t.getName(),leaf:r,children:[]};if(t instanceof on&&e){for(const i of await t.listChildren(!1)){const o=await this.resourceToTreeNode(i,!1);n.children.push(o)}n.children.sort(Vs)}return n}createTreeItems(t,e=!1){if(!t)return V``;const r=!t.leaf&&t.children.length===0,n=t.data,i=n instanceof ir,o=i?$r.getFileIcon(n.getName()):t.icon||"folder-open";return V`
            <wa-tree-item 
                draggable=${i}
                @dragstart=${i?this.nobubble(a=>this.onDragStart(a,n)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(a=>this.onLazyLoad(a,t))}
                .model=${t} 
                ?expanded=${e}
                ?lazy=${r}>
                <span><wa-icon name=${o} label="${t.leaf?"File":"Folder"}"></wa-icon> ${t.label}</span>
                ${t.children.map(a=>this.createTreeItems(a,!1))}
            </wa-tree-item>`}onDragStart(t,e){if(!t.dataTransfer)return;const r=e.getWorkspacePath(),n=e.getName();if(t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain",r),t.dataTransfer.setData("application/x-workspace-file",r),t.dataTransfer.setData("text/uri-list",r),t.dataTransfer.setDragImage){const i=document.createElement("div");i.textContent=n,i.style.position="absolute",i.style.top="-1000px",i.style.padding="4px 8px",i.style.background="var(--wa-color-neutral-10)",i.style.border="1px solid var(--wa-color-neutral-30)",i.style.borderRadius="4px",document.body.appendChild(i),t.dataTransfer.setDragImage(i,0,0),setTimeout(()=>document.body.removeChild(i),0)}}async onLazyLoad(t,e){const r=e.data;r instanceof on&&e.children.length===0&&await this.loadNodeChildren(e,r)}async loadNodeChildren(t,e){if(!this.loadingNodes.has(t)){this.loadingNodes.add(t);try{for(const r of await e.listChildren(!1)){Bc&&r.getName().startsWith(".");const n=await this.resourceToTreeNode(r,!1);t.children.push(n)}t.children.sort(Vs),this.requestUpdate()}catch(r){console.error("Failed to load directory children:",r)}finally{this.loadingNodes.delete(t)}}}async onFileDoubleClicked(t){const r=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:r})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const r=e[0].model;er.set(r.data)}else er.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=o=>{if(!o.dataTransfer?.types.includes("Files"))return;o.preventDefault(),o.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const c=o.target.closest("wa-tree-item");c&&c!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=c,c.classList.add("drop-target"))},r=o=>{o.dataTransfer?.types.includes("Files")&&(o.preventDefault(),t.classList.add("drag-over"))},n=o=>{const a=t.getBoundingClientRect(),c=o.clientX,f=o.clientY;(c<=a.left||c>=a.right||f<=a.top||f>=a.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async o=>{if(o.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!o.dataTransfer||!this.workspaceDir)return;const a=Array.from(o.dataTransfer.files);if(a.length===0)return;const c=await this.getDropTarget(o);await this.handleFilesDrop(a,c)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",r),t.removeEventListener("dragleave",n),t.removeEventListener("drop",i),t.addEventListener("dragover",e),t.addEventListener("dragenter",r),t.addEventListener("dragleave",n),t.addEventListener("drop",i)}async getDropTarget(t){const r=t.target.closest("wa-tree-item");if(r){const i=r.model.data;if(i instanceof on)return i;const o=i.getParent();if(o)return o}return this.workspaceDir}async handleFilesDrop(t,e){const r=t.length;let n=0,i=0,o=0;for(const a of t)try{const c=this.buildTargetPath(e,a.name);if(await this.workspaceDir.getResource(c)&&!await mn(`File "${a.name}" already exists. Do you want to overwrite it?`)){o++;continue}await(await this.workspaceDir.getResource(c,{create:!0})).saveContents(a),n++}catch(c){console.error(`Failed to upload ${a.name}:`,c),i++}console.log(`Uploaded ${n}/${r} files${o>0?`, ${o} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const r=t.getWorkspacePath();return r?`${r}/${e}`:e}render(){return V`
            <div class="tree" ${br(this.treeRef)}>
                ${Ut(!this.workspaceDir,()=>V`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>V`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};dn.styles=Yt`
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
            content: '📁 Drop files here';
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
        
        wa-tree-item.drop-target {
            background-color: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            border-radius: var(--wa-border-radius-small);
            outline: 2px solid var(--wa-color-brand-border-loud);
            outline-offset: -2px;
        }
    `;Ci([At()],dn.prototype,"root",2);Ci([wa(vr)],dn.prototype,"onWorkspaceChanged",1);Ci([wa(Fn)],dn.prototype,"onWorkspaceConnected",1);dn=Ci([Et("k-filebrowser")],dn);var ou=Object.getOwnPropertyDescriptor,lu=(t,e,r,n)=>{for(var i=n>1?void 0:n?ou(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};Me.registerContribution(gs,{html:"<k-tasks></k-tasks>"});let Yi=class extends Ii(jt){render(){xa.get();const t=fi.getActiveTasks().length;if(t!=0)return V`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${t}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${t}
                </wa-button>
                ${fi.getActiveTasks().map(e=>{const r=e.progress>=0||e.totalSteps>0,n=e.progress>=0?e.progress:e.totalSteps>0?Math.round(e.currentStep/e.totalSteps*100):0,i=e.progress<0&&e.totalSteps>0;return V`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${e.name}</strong>: ${e.message}
                            </div>
                            ${r?V`
                                <wa-progress-bar value="${n}" style="--track-height: 1.25rem;">
                                    ${i?`${e.currentStep}/${e.totalSteps} - `:""}${n}%
                                </wa-progress-bar>
                            `:V`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};Yi.styles=Yt`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;Yi=lu([Et("k-tasks")],Yi);var cu=Object.getOwnPropertyDescriptor,uu=(t,e,r,n)=>{for(var i=n>1?void 0:n?cu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};const Hs="<no workspace>";let Ks=class extends Yr{constructor(){super(...arguments),this.workspaceName=Hs}doInitUI(){this.updateWorkspaceName(),Kt(Fn,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Nt.getWorkspace().then(t=>{this.workspaceName=t?.getName()||Hs,this.requestUpdate()})}handleLoadWorkspace(){je.execute("load_workspace",{source:this})}render(){return V`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};Ks=uu([Et("k-workspace-name")],Ks);var pu=Object.getOwnPropertyDescriptor,du=(t,e,r,n)=>{for(var i=n>1?void 0:n?pu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};const Ys="<no part>";Me.registerContribution(gs,{html:"<k-part-name></k-part-name>"});let Js=class extends Ii(Yr){getPartName(){const t=at.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||Ys}render(){const e=at.get()?.tabContribution?.icon||"box";return V`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Js=du([Et("k-part-name")],Js);var hu=Object.defineProperty,fu=Object.getOwnPropertyDescriptor,ys=(t,e,r,n)=>{for(var i=n>1?void 0:n?fu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&hu(e,r,i),i};let qn=class extends jt{constructor(){super(...arguments),this.filterText=""}doInitUI(){Kt(Pn,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){Ue.enable(t.id,!0),this.requestUpdate()}disable(t){Ue.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=Jr.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return Ue.getExtensions();const t=this.filterText.toLowerCase();return Ue.getExtensions().filter(e=>e.name.toLowerCase().includes(t)||(e.description?.toLowerCase().includes(t)??!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],r=[];return t.forEach(n=>{Ue.isEnabled(n.id)?e.push(n):r.push(n)}),e.sort((n,i)=>n.name.localeCompare(i.name)),r.sort((n,i)=>n.name.localeCompare(i.name)),{enabled:e,available:r}}isExternalExtension(t){return t.external===!0}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return V`
            <wa-input
                placeholder="Filter extensions..."
                .value=${this.filterText}
                @input=${t=>this.handleFilterInput(t)}
                @wa-clear=${()=>this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
        `}render(){const t=this.getGroupedExtensions(),e=t.enabled.length>0||t.available.length>0;return V`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${e?V`
                        ${t.enabled.length>0?V`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    Installed (${t.enabled.length})
                                </span>
                                ${t.enabled.map(r=>{const n=this.isExternalExtension(r);return V`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                            <span><k-icon name="${r.icon}"></k-icon></span> ${r.name}${n?V` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                        ${t.available.length>0?V`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${t.available.length})
                                </span>
                                ${t.available.map(r=>{const n=this.isExternalExtension(r);return V`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                            <span><k-icon name="${r.icon}"></k-icon></span> ${r.name}${n?V` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                    `:""}
                    ${e?"":V`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${Ut(this.selectedExtension,r=>{const n=this.isExternalExtension(r),i=Ue.isEnabled(r.id);return V`
                                <h1><k-icon name="${r.icon}"></k-icon> ${r.name}${n?" (External)":""}</h1>
                                ${Ut(n,()=>V`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>External Extension</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${Ut(i,()=>V`
                                        <wa-button 
                                            title="${this.isExtensionRequired(r.id)?"This extension is required by the current app and cannot be uninstalled":"Disable this extension"}" 
                                            @click="${()=>this.disable(r)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(r.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                        </wa-button>
                                        ${Ut(this.isExtensionRequired(r.id),()=>V`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>This extension is required by the current app and cannot be uninstalled</span>
                                            </div>
                                        `)}
                                    `,()=>V`
                                        <wa-button 
                                            title="Enable this extension" 
                                            @click="${()=>this.enable(r)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                        </wa-button>
                                    `)}
                                </div>

                                ${Ut(r.experimental,()=>V`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>This is an experimental extension!</i></small>
                                    </div>
                                `)}

                                ${Ut(r.version||r.author,()=>V`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${Ut(r.version,()=>V`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">Version: <strong>${r.version}</strong></span>
                                            </div>
                                        `)}
                                        ${Ut(r.author,()=>V`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">Author: <strong>${r.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${r.description}</p>

                                ${Ut(r.dependencies&&r.dependencies.length>0,()=>V`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            Dependencies
                                        </h3>
                                        <div class="dependencies-list">
                                            ${r.dependencies.map(o=>{const a=Ue.getExtensions().find(f=>f.id===o),c=Ue.isEnabled(o);return V`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${c?"check-circle":"circle"}" 
                                                            style="color: ${c?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        <k-icon name="${a?.icon||"puzzle-piece"}"></k-icon>
                                                        <span>${a?.name||o}</span>
                                                        ${c?"":V`
                                                            <span class="dependency-badge">Not Installed</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            Dependencies are automatically installed when this extension is enabled.
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
            </wa-split-panel>
        `}};qn.styles=Yt`
        :host {
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

        .dependency-item k-icon {
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
    `;ys([At()],qn.prototype,"selectedExtension",2);ys([At()],qn.prototype,"filterText",2);qn=ys([Et("k-extensions")],qn);var mu=Object.defineProperty,gu=Object.getOwnPropertyDescriptor,Ei=(t,e,r,n)=>{for(var i=n>1?void 0:n?gu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&mu(e,r,i),i};let hn=class extends jt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=yr()}connectedCallback(){super.connectedCallback(),this.loadSettings(),ll(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),cl()}log(t,e,r="info"){const n={timestamp:new Date,level:r,source:t,message:e};this.messages=[...this.messages,n],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(i=>i.level==="info").length,e=this.messages.filter(i=>i.level==="warning").length,r=this.messages.filter(i=>i.level==="error").length,n=this.messages.filter(i=>i.level==="debug").length;return V`
            <k-command 
                icon="list"
                title="All logs"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                All (${this.messages.length})
            </k-command>

            <k-command 
                icon="circle-info"
                title="Info logs"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                Info${t>0?` (${t})`:""}
            </k-command>

            <k-command 
                icon="triangle-exclamation"
                title="Warning logs"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                Warnings${e>0?` (${e})`:""}
            </k-command>

            <k-command 
                icon="circle-xmark"
                title="Error logs"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                Errors${r>0?` (${r})`:""}
            </k-command>

            <k-command 
                icon="bug"
                title="Debug logs"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                Debug${n>0?` (${n})`:""}
            </k-command>

            <wa-divider orientation="vertical"></wa-divider>

            <k-command 
                icon="arrow-down" 
                title="${this.autoScroll?"Auto-scroll enabled":"Auto-scroll disabled"}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?"Auto-scroll":"Manual"}
            </k-command>

            <k-command 
                icon="trash" 
                title="Clear logs"
                .action=${()=>this.clear()}>
                Clear
            </k-command>
        `}render(){const t=this.getFilteredMessages();return V`
            <div class="log-terminal">
                <div class="messages" ${br(this.containerRef)}>
                    ${t.length===0?V`<div class="empty-state">No log messages</div>`:t.map(e=>V`
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
        `}async loadSettings(){const t=await this.getDialogSetting();t&&(typeof t.filter=="string"&&(t.filter==="all"||["info","warning","error","debug"].includes(t.filter))&&(this.filter=t.filter),typeof t.autoScroll=="boolean"&&(this.autoScroll=t.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};hn.styles=Yt`
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
            word-break: break-word;
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
    `;Ei([At()],hn.prototype,"messages",2);Ei([At()],hn.prototype,"autoScroll",2);Ei([At()],hn.prototype,"filter",2);hn=Ei([Et("k-log-terminal")],hn);var vu=Object.defineProperty,yu=Object.getOwnPropertyDescriptor,Xt=(t,e,r,n)=>{for(var i=n>1?void 0:n?yu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&vu(e,r,i),i};let Wt=class extends Bn{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(t){if(!this.disabled){if(t&&t.stopPropagation(),this.action){this.action(t);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(t){const e=t.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const t=_a.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),Kt(Lr,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=Me.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,r=e.disabled?.get();return V`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${r}">
                    ${e.label}
                </k-command>
            `}if("html"in t){const r=t.html;return r instanceof Function?r():Un(r)}return It}render(){const t=this.getKeybinding();return this.isInDropdown()?V`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${t?V`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?V`
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
                        <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                        <slot></slot>
                        ${this.label?this.title:It}
                    </wa-button>
                    
                    ${this.title?V`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:It}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?V`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                            ${this.title}
                        </k-command>
                    `:It}
                </wa-dropdown>
            `:V`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${e=>this.handleClick(e)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};Wt.styles=Yt`
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
    `;Xt([Ve()],Wt.prototype,"cmd",2);Xt([Ve({type:Object,attribute:!1})],Wt.prototype,"action",2);Xt([Ve()],Wt.prototype,"title",2);Xt([Ve()],Wt.prototype,"label",2);Xt([Ve()],Wt.prototype,"icon",2);Xt([Ve({type:Boolean})],Wt.prototype,"disabled",2);Xt([Ve()],Wt.prototype,"appearance",2);Xt([Ve()],Wt.prototype,"variant",2);Xt([Ve()],Wt.prototype,"size",2);Xt([Ve({type:Object,attribute:!1})],Wt.prototype,"params",2);Xt([Ve()],Wt.prototype,"dropdown",2);Xt([Ve()],Wt.prototype,"placement",2);Xt([At()],Wt.prototype,"dropdownContributions",2);Wt=Xt([Et("k-command")],Wt);var bu=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,sr=(t,e,r,n)=>{for(var i=n>1?void 0:n?wu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&bu(e,r,i),i};let Jt=class extends Bn{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=yr(),this.tabsRef=yr(),this.resizeHandleRef=yr(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(t){if(!this.disabled)if(this.containerId){const e=document.querySelector(`k-tabs#${this.containerId}`);if(!e){console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(t)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(t)})}handleDrawerHide(){this.drawerOpen=!1}startResize(t){t.preventDefault(),t.stopPropagation();const e=this.drawerRef.value;if(!e)return;let n=(()=>{const a=e.shadowRoot?.querySelector('[part="panel"]');if(a&&a.offsetWidth>0)return a.offsetWidth;const b=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(b){const R=parseFloat(b[1]),y=b[2];if(y==="px")return R;if(y==="vw")return R/100*window.innerWidth;if(y==="vh")return R/100*window.innerHeight;if(y==="%")return R/100*window.innerWidth}return 0})();n===0&&(n=window.innerWidth*.5);const i=a=>{this.resizing&&(a.preventDefault(),a.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const c=this.resizing.startX-a.clientX,f=Math.round(this.resizing.startSize+c),b=200,R=Math.round(window.innerWidth*.9);if(f>=b&&f<=R){this.drawerSize=`${f}px`;const y=this.drawerRef.value;y&&(y.style.setProperty("--size",this.drawerSize),y.style.setProperty("transition","none"))}this.resizing.rafId=null}))},o=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const a=this.drawerRef.value;a&&a.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:t.clientX,startSize:n,handleMouseMove:i,handleMouseUp:o,rafId:null},document.addEventListener("mousemove",i,{passive:!1}),document.addEventListener("mouseup",o,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),Kt(Lr,t=>{this.target&&t.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const t=Me.getContributions(this.target);this.tabContributions=t.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(t){const e=t.disabled?.get();return V`
            <wa-dropdown-item 
                ?disabled=${e}
                @click=${()=>this.handleTabClick(t)}>
                <k-icon name="${t.icon||""}" label="${t.label}" slot="icon"></k-icon>
                ${t.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?It:V`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                    <slot></slot>
                </wa-button>
                
                ${this.title?V`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:It}
                
                ${this.tabContributions.map(t=>this.renderTabContribution(t))}
            </wa-dropdown>

            ${this.containerId?It:V`
                <wa-drawer 
                    ${br(this.drawerRef)}
                    label="${this.title||"Fast Views"}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${br(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <k-tabs 
                        ${br(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            `}
        `:It}};Jt.styles=Yt`
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
    `;sr([Ve()],Jt.prototype,"target",2);sr([Ve()],Jt.prototype,"title",2);sr([Ve()],Jt.prototype,"icon",2);sr([Ve({type:Boolean})],Jt.prototype,"disabled",2);sr([Ve()],Jt.prototype,"appearance",2);sr([Ve()],Jt.prototype,"size",2);sr([Ve()],Jt.prototype,"placement",2);sr([Ve()],Jt.prototype,"containerId",2);sr([At()],Jt.prototype,"tabContributions",2);sr([At()],Jt.prototype,"drawerOpen",2);sr([At()],Jt.prototype,"drawerSize",2);Jt=sr([Et("k-fastviews")],Jt);var xu=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,bs=(t,e,r,n)=>{for(var i=n>1?void 0:n?Iu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&xu(e,r,i),i};let zn=class extends Bn{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return V`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};zn.styles=Yt`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;bs([Ve()],zn.prototype,"message",2);bs([Ve()],zn.prototype,"icon",2);zn=bs([Et("k-no-content")],zn);Ue.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>mt(()=>import("./git-extension-K1HNFXIp.js"),__vite__mapDeps([0,1,2])),icon:"code-branch",experimental:!0});Ue.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>mt(()=>import("./pyterminal-extension-COGrztbL.js"),__vite__mapDeps([3,1,2,4])),icon:"k python",experimental:!0});Ue.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>mt(()=>import("./k-linuxterminal-y0abSzTv.js"),__vite__mapDeps([5,1,2,4])),icon:"terminal",experimental:!0});Ue.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>mt(()=>import("./webllmservice-fJ09LS6V.js"),__vite__mapDeps([6,1,2])),icon:"robot"});Ue.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>mt(()=>import("./p12-splitter-D7Hmzt9O.js"),__vite__mapDeps([7,1,2])),icon:"certificate"});Ue.registerExtension({id:"system.pythonpackagemanager",name:"Python Package Manager",description:"Manage Python packages for notebooks and other Python-based extensions",loader:()=>mt(()=>import("./package-manager-extension-xv9fmET4.js"),__vite__mapDeps([8,1,2])),icon:"box"});Ue.registerExtension({id:"system.notebook",name:"Jupyter-like Notebook Editor",description:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>mt(()=>import("./notebook-extension-DHOUg50l.js"),__vite__mapDeps([9,1,2,10,11,8])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});Ue.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>mt(()=>import("./command-palette-extension-Bu8TH0oo.js"),__vite__mapDeps([12,1,2])),icon:"terminal"});Ue.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>mt(()=>import("./download-extension-KXELZTlu.js"),__vite__mapDeps([13,1,2])),icon:"download"});Ue.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>mt(()=>import("./unzip-extension-i1zd-_2p.js"),__vite__mapDeps([14,1,2])),icon:"box-archive"});Ue.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>mt(()=>import("./md-editor-extension-BEhCKII1.js"),__vite__mapDeps([15,1,2])),icon:"book"});Ue.registerExtension({id:"system.mediaviewer",name:"Media Viewer",description:"View PDF, image, and HTML files in the browser",loader:()=>mt(()=>import("./media-viewer-extension-D9YQOIN4.js"),__vite__mapDeps([16,1,2])),icon:"image"});Ue.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>mt(()=>import("./monaco-editor-extension-CdgQ3ry9.js"),__vite__mapDeps([17,10,1,2,11,8])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});Ue.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>mt(()=>import("./memory-usage-extension-C6qVODD6.js"),__vite__mapDeps([18,1,2])),icon:"microchip"});Ue.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>mt(()=>import("./webdav-extension-D_Ax-zGO.js"),__vite__mapDeps([19,1,2])),icon:"cloud"});Ue.registerExtension({id:"system.settings-tree",name:"Settings Tree Editor",description:"Tree-based editor for settings with in-place editing",loader:()=>mt(()=>import("./settings-tree-extension-Dr_-A_Sd.js"),__vite__mapDeps([20,1,2])),icon:"sitemap"});Ue.registerExtension({id:"system.ai-system",name:"AI System",description:"Modern AI service with streaming support and agent workflows",loader:()=>mt(()=>import("./ai-system-extension-CrncE7rJ.js"),__vite__mapDeps([21,1,2])),icon:"robot"});Ue.registerExtension({id:"system.rag-system",name:"RAG System",description:"Retrieval-Augmented Generation system for document indexing, search and retrieval",loader:()=>mt(()=>import("./rag-system-extension-eBgOdqcZ.js").then(t=>t.b),__vite__mapDeps([22,1,2])),icon:"database",experimental:!0,dependencies:["system.ai-system"]});const Ya="events/aiservice/streamStarted",Ja="events/aiservice/streamChunk",Za="events/aiservice/streamComplete",li="events/aiservice/streamError",Xa="events/aiservice/aiConfigChanged",Qa="events/aiservice/agentWorkflowStarted",eo="events/aiservice/agentWorkflowComplete",to="events/aiservice/agentWorkflowError",Hn="aiservice.agents",Zt="aiservice.chatProviders",Kn="aiservice.promptEnhancers",Ln="aiConfig",ro={defaultProvider:"openai",providers:[]},Ji=10,nd=Object.freeze(Object.defineProperty({__proto__:null,AI_CONFIG_TEMPLATE:ro,CID_AGENTS:Hn,CID_CHAT_PROVIDERS:Zt,CID_PROMPT_ENHANCERS:Kn,KEY_AI_CONFIG:Ln,MAX_TOOL_ITERATIONS:Ji,TOPIC_AGENT_WORKFLOW_COMPLETE:eo,TOPIC_AGENT_WORKFLOW_ERROR:to,TOPIC_AGENT_WORKFLOW_STARTED:Qa,TOPIC_AICONFIG_CHANGED:Xa,TOPIC_AI_STREAM_CHUNK:Ja,TOPIC_AI_STREAM_COMPLETE:Za,TOPIC_AI_STREAM_ERROR:li,TOPIC_AI_STREAM_STARTED:Ya},Symbol.toStringTag,{value:"Module"}));class no{constructor(){this.decoder=new TextDecoder}*processLines(e){for(const r of e)r.trim()!==""&&(yield r)}}class ku extends no{async*parse(e){let r="";try{for(;;){const{done:n,value:i}=await e.read();if(n)break;r+=this.decoder.decode(i,{stream:!0});const o=r.split(`
`);r=o.pop()||"";for(const a of this.processLines(o))if(a.startsWith("data: ")){const c=a.slice(6).trim();if(c==="[DONE]"){yield{type:"done",content:""};continue}try{const f=JSON.parse(c);if(f.error){yield{type:"error",content:f.error.message||"Unknown error",metadata:f.error};continue}const b=this.parseChunk(f);b&&(yield b)}catch{continue}}}if(r.trim()&&r.startsWith("data: ")){const n=r.slice(6).trim();if(n!=="[DONE]")try{const i=JSON.parse(n),o=this.parseChunk(i);o&&(yield o)}catch{}}yield{type:"done",content:""}}finally{e.releaseLock()}}parseChunk(e){const r=e.choices?.[0]?.delta,n=e.choices?.[0];if(r?.content)return{type:"token",content:r.content,message:{role:r.role||"assistant",content:n?.message?.content||r.content}};if(n?.message?.tool_calls){const i=this.parseToolCalls(n.message.tool_calls,!0);if(i.length>0)return{type:"token",content:"",toolCalls:i}}else if(r?.tool_calls||n?.delta?.tool_calls){const i=this.parseToolCalls(r?.tool_calls||n?.delta?.tool_calls||[],!1);if(i.length>0)return{type:"token",content:"",toolCalls:i}}return null}parseToolCalls(e,r=!1){return e.filter(n=>n.function!==void 0).map((n,i)=>({id:n.id||`call_${n.index!==void 0?n.index:i}_${Date.now()}`,type:"function",function:{name:n.function?.name||"",arguments:n.function?.arguments||(r?"{}":"")},_index:n.index!==void 0?n.index:i}))}}class Su extends no{async*parse(e){let r="";try{for(;;){const{done:n,value:i}=await e.read();if(n)break;r+=this.decoder.decode(i,{stream:!0});const o=r.split(`
`);r=o.pop()||"";for(const a of this.processLines(o))try{const c=JSON.parse(a);if(c.error){yield{type:"error",content:c.error,metadata:c};continue}if(c.done){yield{type:"done",content:""};continue}c.message?.content?yield{type:"token",content:c.message.content,message:{role:c.message.role||"assistant",content:c.message.content}}:c.response&&(yield{type:"token",content:c.response,message:{role:"assistant",content:c.response}})}catch{continue}}if(r.trim())try{const n=JSON.parse(r);n.message?.content&&(yield{type:"token",content:n.message.content,message:{role:n.message.role||"assistant",content:n.message.content}})}catch{}yield{type:"done",content:""}}finally{e.releaseLock()}}}class io{createParser(e,r){return e.includes("text/event-stream")||r.includes("openai")?new ku:new Su}async*stream(e){const r={model:e.model,stream:!0,messages:e.messages,...e.chatConfig.parameters};e.tools&&e.tools.length>0&&(r.tools=e.tools,r.tool_choice="auto");const n=await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(r),signal:e.signal});if(!n.ok){const c=await n.text().catch(()=>"Unknown error");yield{type:"error",content:`HTTP ${n.status}: ${c}`,metadata:{status:n.status,statusText:n.statusText}};return}const i=n.headers.get("content-type")||"",o=n.body?.getReader();if(!o){yield{type:"error",content:"Response body is not readable"};return}const a=this.createParser(i,e.chatConfig.chatApiEndpoint);for await(const c of a.parse(o))yield c}}class _u extends io{constructor(){super(...arguments),this.name="openai"}canHandle(e){return e.chatApiEndpoint.includes("openai")||e.chatApiEndpoint.includes("v1/chat/completions")}}class Cu extends io{constructor(){super(...arguments),this.name="ollama"}canHandle(e){return e.name.toLowerCase()==="ollama"||e.chatApiEndpoint.includes("ollama")||e.chatApiEndpoint.includes("localhost:11434")}}class Eu{constructor(){this.providers=[],this.registerDefaultProviders()}registerDefaultProviders(){this.providers.push(new _u),this.providers.push(new Cu)}registerProvider(e){this.providers.push(e)}getProvider(e){const r=this.providers.find(n=>n.canHandle(e));return r||this.providers[0]}getAllProviders(){return[...this.providers]}}class Au{getAgentContributions(){return Me.getContributions(Hn)}filterAndSortAgents(e,r){return e.filter(n=>n.canHandle?n.canHandle(r):!0).sort((n,i)=>(i.priority||0)-(n.priority||0))}getDefaultAgent(){return{role:"assistant",label:"Assistant",description:"General assistant",sysPrompt:"You are a helpful AI assistant.",priority:0,tools:{enabled:!0}}}getMatchingAgents(e,r){const n=this.getAgentContributions();let i=n.filter(o=>r&&!r.includes(o.role)?!1:o.canHandle?o.canHandle(e):!0);if(r&&r.length>0){if(i=i.sort((o,a)=>(a.priority||0)-(o.priority||0)),i.length===0){const o=r.includes("assistant")?"assistant":r[0];if(o==="assistant")i.push(this.getDefaultAgent());else{const a=n.find(c=>c.role===o);a?i.push(a):i.push(this.getDefaultAgent())}}}else i=this.filterAndSortAgents(i,e),i.length===0&&i.push(this.getDefaultAgent());return i}}class so{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}commandToTool(e,r){const n={},i=[];return e.parameters?.forEach(c=>{const f=this.sanitizeFunctionName(c.name);n[f]={type:c.type||"string",description:c.description,...c.allowedValues&&{enum:c.allowedValues}},c.required===!0&&i.push(f)}),{type:"function",function:{name:this.sanitizeFunctionName(e.id),description:e.description||e.name,parameters:{type:"object",properties:n,required:i}}}}getAvailableTools(e,r){const n=je.listCommands();let i=Object.values(n);return r&&(i=i.filter(o=>r(o,e))),i.map(o=>this.commandToTool(o,e))}}class Tu{constructor(){this.toolRegistry=new so,this.enhancers=[]}addEnhancer(e){this.enhancers.push(e)}getSysPrompt(e){const r=e.sysPrompt;return typeof r=="function"?r():r}rewriteChatHistoryForAgent(e,r){return e.map(n=>n.role==="user"?{role:n.role,content:n.content}:n.role===r?{role:"assistant",content:n.content}:{role:"user",content:`***Agent '${n.role}' replied:***
${n.content}`})}getContributedEnhancers(){return Me.getContributions(Kn).map(r=>({...r.enhancer,priority:r.priority??r.enhancer.priority}))}async enhancePrompt(e,r,n){let i=e;const o=[...r.promptEnhancers||[],...this.enhancers,...this.getContributedEnhancers()].sort((a,c)=>(c.priority||0)-(a.priority||0));for(const a of o)i=await a.enhance(i,n);return i}async build(e,r,n,i){i?.beforeSend&&await i.beforeSend(r,n);const o=this.sanitizeMessagesForAPI(r),a=this.rewriteChatHistoryForAgent(o,e.role),c=a.length-1;let f=a[c],b;e.tools?.enabled&&(b=this.toolRegistry.getAvailableTools(n,e.tools.commandFilter));const R=await this.enhancePrompt(f.content,e,n);f.content=R;const y=this.getSysPrompt(e);return a.unshift({role:"system",content:y}),{messages:a,userPromptIndex:c,tools:b}}sanitizeMessageForAPI(e){const r={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(r.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(r.tool_calls=e.tool_calls),r}sanitizeMessagesForAPI(e){return e.map(r=>this.sanitizeMessageForAPI(r))}}class Ou{constructor(){this.processors=[]}addProcessor(e){this.processors.push(e)}getSortedProcessors(){return[...this.processors].sort((e,r)=>(r.priority||0)-(e.priority||0))}async process(e,r,n){let i={...e};const o=[...r.messageProcessors||[],...this.processors].sort((c,f)=>(f.priority||0)-(c.priority||0));for(const c of o)i=await c.process(i,n);const a=i.actions?.some(c=>c.requiresAttention)||i.attentionRequests?.some(c=>c.requiresAction)||!1;return{...i,requiresAttention:a}}checkRequiresAttention(e){return e.actions?.some(r=>r.requiresAttention)||e.attentionRequests?.some(r=>r.requiresAction)||!1}}class Ru{constructor(){this.accumulatedToolCalls=new Map,this.toolCallIndexMap=new Map}processChunk(e){if(e.type==="token"&&e.toolCalls&&e.toolCalls.length>0)for(const r of e.toolCalls){const n=r._index,i=r.id;let o,a;if(n!==void 0&&this.toolCallIndexMap.has(n)?(a=this.toolCallIndexMap.get(n),o=this.accumulatedToolCalls.get(a)):i&&this.accumulatedToolCalls.has(i)?(a=i,o=this.accumulatedToolCalls.get(a)):(a=i||`call_${n!==void 0?n:Date.now()}_${Math.random()}`,o=void 0),o){const c=o.function.arguments||"",f=r.function.arguments||"",b=c+f;this.accumulatedToolCalls.set(a,{id:a,type:r.type||o.type,function:{name:r.function.name||o.function.name,arguments:b}}),n!==void 0&&!this.toolCallIndexMap.has(n)&&this.toolCallIndexMap.set(n,a)}else this.accumulatedToolCalls.set(a,{...r,id:a}),n!==void 0&&this.toolCallIndexMap.set(n,a)}}getFinalToolCalls(){return Array.from(this.accumulatedToolCalls.values()).filter(e=>e.function.name&&e.function.name.trim().length>0).map(e=>{let r=e.function.arguments||"";return(!r||r.trim()==="")&&(r="{}"),{...e,function:{...e.function,arguments:r}}})}reset(){this.accumulatedToolCalls.clear(),this.toolCallIndexMap.clear()}}class ao{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}findCommand(e,r){const n=e.function.name,i=je.getCommand(n);if(i)return i;const o=je.listCommands();for(const[a,c]of Object.entries(o))if(this.sanitizeFunctionName(a)===n)return c;return null}parseArguments(e){if(!e||e.trim()===""||e==="{}")return{};try{const r=JSON.parse(e);return r&&typeof r=="object"?r:{}}catch(r){const n=r instanceof Error?r.message:String(r);return console.error(`[ToolExecutor] Failed to parse arguments: ${e} - ${n}`),{}}}sanitizeArguments(e,r){if(!r||!r.parameters||!e||typeof e!="object")return e||{};const n={};return r.parameters.forEach(i=>{const o=this.sanitizeFunctionName(i.name);o in e&&(n[i.name]=e[o])}),n}async executeToolCall(e,r){try{const n=this.findCommand(e,r),i=n?.id||e.function.name,o=e.function.arguments||"{}",a=this.parseArguments(o),c=this.sanitizeArguments(a,n),f=je.createExecutionContext(c),b={...r,...f,params:c};let R=await je.execute(i,b);const I={success:!0,message:`Command "${n?.name||i}" executed successfully`,command:i};if(c&&typeof c=="object"&&Object.keys(c).length>0&&(I.parameters=c),R){let k=R;if(k instanceof Promise&&(k=await k),I.result=k,n?.output&&n.output.length>0){const j=n.output.map(J=>`${J.name}: ${J.description||J.type||"value"}`).join(", ");I.output=j}}return{id:e.id,result:I}}catch(n){const i=n instanceof Error?n.message:String(n);let o=null;try{o=this.findCommand(e,r)}catch{o=null}const a=o?.name||e.function.name;let c=i;return i.includes("No handler found")||i.includes("No handlers registered")?c=`Command "${a}" cannot be executed. ${i}. This usually means the command is not available in the current context (e.g., a map editor may not be open or active).`:(i.includes("not available")||i.includes("GsMapEditor"))&&(c=`Command "${a}" cannot be executed: ${i}. Please ensure the required editor or component is open and active.`),{id:e.id,result:null,error:c}}}async executeToolCalls(e,r){const n=[];for(const i of e){const o=await this.executeToolCall(i,r);n.push(o)}return n}createToolCallAccumulator(){return new Ru}createToolCallSignature(e){const r=e.function.arguments||"{}";let n={};try{const o=JSON.parse(r);n=o&&typeof o=="object"?o:{}}catch{n={}}const i=n&&typeof n=="object"?Object.keys(n).sort().reduce((o,a)=>(o[a]=n[a],o),{}):{};return`${e.function.name}:${JSON.stringify(i)}`}}const id=Object.freeze(Object.defineProperty({__proto__:null,ToolExecutor:ao},Symbol.toStringTag,{value:"Module"}));class Pu{async execute(e,r,n,i){const o=r.chatConfig;if(!o)throw new Error("Chat config is required");const a=e.map(async c=>{try{await i(c,r.chatContext.history,n.sharedState,o,r,n)}catch(f){const b=f instanceof Error?f:new Error(String(f));n.errors.set(c.role,b),r.onAgentError?.(c.role,b)}});await Promise.all(a)}}class Lu{async execute(e,r,n,i){const o=r.chatConfig;if(!o)throw new Error("Chat config is required");let a=[...r.chatContext.history],c={...n.sharedState};for(const f of e)try{const b=this.createAgentContextWithPreviousAgents(c,r,n),R=await i(f,a,c,o,r,n);if(!R)break;const y=this.updateWorkflowState(R,a,c,b,n);a=y.currentMessages,c=y.accumulatedState}catch(b){const R=b instanceof Error?b:new Error(String(b));n.errors.set(f.role,R),r.onAgentError?.(f.role,R);break}}createAgentContextWithPreviousAgents(e,r,n){return{...e,...r.callContext.getProxy(),previousAgents:Array.from(n.messages.entries()).map(([i,o])=>({role:i,content:o.content}))}}updateWorkflowState(e,r,n,i,o){return r.push(e),n={...n,...i,message:e},o.sharedState=n,{currentMessages:r,accumulatedState:n}}}class $u{async execute(e,r,n,i){const o=r.chatConfig;if(!o)throw new Error("Chat config is required");let a=[...r.chatContext.history],c={...n.sharedState};for(const f of e)try{const b=this.createAgentContextWithPreviousAgents(c,r,n);if(f.canHandle&&!f.canHandle(b))continue;const R=await i(f,a,c,o,r,n);if(!R)break;const y=this.updateWorkflowState(R,a,c,b,n);a=y.currentMessages,c=y.accumulatedState}catch(b){const R=b instanceof Error?b:new Error(String(b));n.errors.set(f.role,R),r.onAgentError?.(f.role,R)}}createAgentContextWithPreviousAgents(e,r,n){return{...e,...r.callContext.getProxy(),previousAgents:Array.from(n.messages.entries()).map(([i,o])=>({role:i,content:o.content}))}}updateWorkflowState(e,r,n,i,o){return r.push(e),n={...n,...i,message:e},o.sharedState=n,{currentMessages:r,accumulatedState:n}}}class Du{constructor(){this.strategies=new Map([["parallel",new Pu],["sequential",new Lu],["conditional",new $u]])}registerStrategy(e,r){this.strategies.set(e,r)}async execute(e,r,n){const i=`workflow-${Date.now()}-${Math.random()}`,o=r.execution||"parallel",a=r.sharedState||{},c={messages:new Map,sharedState:{...a},errors:new Map};Xe(Qa,{workflowId:i,options:r});try{const f=this.strategies.get(o);if(!f)throw new Error(`Unknown workflow execution strategy: ${o}`);return await f.execute(e,r,c,n),Xe(eo,{workflowId:i,results:c}),c}catch(f){const b=f instanceof Error?f:new Error(String(f));throw Xe(to,{workflowId:i,error:b}),b}}}class Nu{constructor(){this.activeRequests=new Map,this.providerFactory=new Eu,this.agentRegistry=new Au,this.promptBuilder=new Tu,this.messageProcessor=new Ou,this.toolExecutor=new ao,this.workflowEngine=new Du,this.toolRegistry=new so,Kt(Wr,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.checkAIConfig().then()}getAgentContributions(){return this.agentRegistry.getAgentContributions()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const r=e.find(n=>n.name===this.aiConfig?.defaultProvider);if(r)return r}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig&&(this.aiConfig.defaultProvider=e,await xt.set(Ln,this.aiConfig)),this.getDefaultProvider()}createMessage(e){return{role:"user",content:e}}registerStreamingFetcher(e){this.providerFactory.registerProvider(e)}async checkAIConfig(){if(!this.aiConfig){if(this.aiConfig=await xt.get(Ln),!this.aiConfig){const r=Me.getContributions(Zt).map(i=>i.provider),n={...ro,providers:r};await xt.set(Ln,n),this.aiConfig=await xt.get(Ln)}Xe(Xa,this.aiConfig)}}createAgentContext(e,r,n={}){return{...e,...r.getProxy(),...n}}createFinalMessage(e,r){return{role:e.role,content:r.content,actions:r.actions,requiresAttention:r.requiresAttention,attentionRequests:r.attentionRequests,canContinue:r.canContinue}}async handleUserAttention(e,r,n,i){if(!r.requiresAttention||!n.userAttentionHandler)return!0;const o=[];if(r.attentionRequests&&o.push(...r.attentionRequests),r.actions)for(const f of r.actions)f.requiresAttention&&f.attentionRequest&&o.push(f.attentionRequest);if(o.length===0)return!0;if(i.pendingAttention||(i.pendingAttention=new Map),i.pendingAttention.set(e,o),n.onAttentionRequest)for(const f of o)n.onAttentionRequest(e,f);if(n.pauseOnAttention)return i.paused=!0,i.continuationToken=`${e}-${Date.now()}-${Math.random()}`,!1;const a=n.userAttentionHandler,c=this.createAgentContext(n.sharedState||{},n.callContext,{message:r});for(const f of o)if(a.onAttentionRequest){const b=await a.onAttentionRequest(f,c);if(f.requiresAction&&(b===!1||b===null))return!1;b&&typeof b=="string"&&(c[`attention_${f.type}_result`]=b)}else switch(f.type){case"confirmation":if(a.onConfirmation&&!await a.onConfirmation(f.message,c)&&f.requiresAction)return!1;break;case"input":if(a.onInput){const b=await a.onInput(f.message,void 0,c);if(!b&&f.requiresAction)return!1;b&&(c.attention_input_result=b)}break}return!0}async*streamCompletion(e){const r=`${Date.now()}-${Math.random()}`,n=new AbortController;this.activeRequests.set(r,n),e.signal&&e.signal.addEventListener("abort",()=>{n.abort()});const i=e.signal||n.signal;try{e.onStatus?.("starting"),Xe(Ya,{requestId:r,options:e});const o=e.chatConfig||await this.getDefaultProvider(),a=this.sanitizeMessagesForAPI(e.chatContext.history),c=this.providerFactory.getProvider(o),f=this.toolExecutor.createToolCallAccumulator();let b="",R={role:"assistant",content:""};for await(const k of c.stream({model:o.model,messages:a,chatConfig:o,tools:e.tools,signal:i})){if(k.type==="error"){e.onStatus?.("error"),Xe(li,{requestId:r,chunk:k}),yield k;break}if(k.type==="token")f.processChunk(k),(!k.toolCalls||k.toolCalls.length===0)&&(b+=k.content,R.content=b),k.message?.role&&(R.role=k.message.role),k.content&&e.onToken?.(k.content),e.onStatus?.("streaming"),e.onProgress?.({received:b.length}),Xe(Ja,{requestId:r,chunk:k}),yield k;else if(k.type==="done"){e.onStatus?.("complete"),Xe(Za,{requestId:r}),yield k;break}else yield k}const y=f.getFinalToolCalls();return{message:{role:R.role||"assistant",content:b||"",...y.length>0&&{toolCalls:y}}}}catch(o){if(o instanceof Error&&o.name==="AbortError")throw e.onStatus?.("error"),Xe(li,{requestId:r,error:"Request cancelled"}),o;e.onStatus?.("error");const a=o instanceof Error?o.message:String(o);throw Xe(li,{requestId:r,error:a}),yield{type:"error",content:a,metadata:{error:o}},o}finally{this.activeRequests.delete(r)}}async handleStreamingPromptDirect(e){const r=this.streamCompletion(e);let n;for(;;){if(n=await r.next(),n.done)return n.value.message;const i=n.value;if(i.type==="error")throw new Error(i.content);if(i.type==="done"){const o=await r.next();if(o.done&&o.value)return o.value.message;if(!o.done)continue;throw new Error("Stream completed without return value")}}}sanitizeMessageForAPI(e){const r={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(r.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(r.tool_calls=e.tool_calls),r}sanitizeMessagesForAPI(e){return e.map(r=>this.sanitizeMessageForAPI(r))}async handleStreamingPrompt(e){const r=e.callContext||Bt.createChild({}),n=this.createAgentContext({},r,{userPrompt:e.chatContext.history[e.chatContext.history.length-1]?.content||""}),i=this.agentRegistry.getMatchingAgents(n),o=i.length>0?i.map(f=>f.role):["assistant"],a=await this.executeAgentWorkflow({chatContext:e.chatContext,chatConfig:e.chatConfig,callContext:r,execution:"parallel",stream:e.stream,signal:e.signal,onToken:(f,b)=>{e.onToken?.(b)},onStatus:(f,b)=>{e.onStatus?.(b)},roles:o}),c=Array.from(a.messages.values());return c.length===1?c[0]:c}async continueWorkflow(e,r,n){const i={sharedState:{...n.sharedState,...Object.fromEntries(r)}},o={...n,sharedState:i.sharedState,pauseOnAttention:!1};return this.executeAgentWorkflow(o)}cancelRequest(e){const r=this.activeRequests.get(e);return r?(r.abort(),this.activeRequests.delete(e),!0):!1}async executeAgentWorkflow(e){const r=this.createAgentContext(e.sharedState||{},e.callContext),n=this.agentRegistry.getMatchingAgents(r,e.roles);return this.workflowEngine.execute(n,e,async(i,o,a,c,f,b)=>this.executeAgent(i,o,a,c,f,b))}async executeAgent(e,r,n,i,o,a){o.onAgentStart?.(e.role);const c=this.createAgentContext(n,o.callContext,{userPrompt:r[r.length-1]?.content||""}),{messages:f,tools:b}=await this.promptBuilder.build(e,r,c,e.hooks),R=f.map(xe=>{const W={role:xe.role,content:xe.content};return xe.tool_call_id&&(W.tool_call_id=xe.tool_call_id),xe.tool_calls&&(W.tool_calls=xe.tool_calls),W});let y=await this.handleStreamingPromptDirect({chatContext:{history:R},chatConfig:i,callContext:o.callContext,stream:o.stream??!0,signal:o.signal,tools:b}),I=0;const k=[...f];for(;y.toolCalls&&y.toolCalls.length>0;){if(I++,I>Ji){console.warn(`[AIService] Maximum tool call iterations (${Ji}) reached`);break}let xe=[];if(o.requireToolApproval&&o.onToolApprovalRequest){const B=y.toolCalls.map(Pe=>{const he=Pe.function.arguments||"{}";let q={};try{q=JSON.parse(he)}catch{q={}}return`${Pe.function.name}(${Object.entries(q).map(([le,ye])=>`${le}=${ye}`).join(", ")})`}).join(", "),ee={toolCalls:y.toolCalls,message:`The AI wants to execute: ${B}`};await o.onToolApprovalRequest(e.role,ee)?xe=await this.toolExecutor.executeToolCalls(y.toolCalls,c):xe=y.toolCalls.map(Pe=>({id:Pe.id,result:{success:!1,message:"Tool execution cancelled by user",cancelled:!0}}))}else xe=await this.toolExecutor.executeToolCalls(y.toolCalls,c);const W=xe.map(B=>({role:"tool",content:B.error?JSON.stringify({error:B.error}):JSON.stringify(B.result),tool_call_id:B.id})),D={role:"assistant",content:y.content||""};y.toolCalls&&y.toolCalls.length>0&&(D.tool_calls=y.toolCalls.filter(B=>B.function.name&&B.function.name.trim().length>0).map(B=>({id:B.id,type:B.type,function:{name:B.function.name,arguments:B.function.arguments||"{}"}}))),k.push(D,...W);const K=k;y=await this.handleStreamingPromptDirect({chatContext:{history:K.map(B=>({role:B.role,content:B.content,...B.tool_call_id&&{tool_call_id:B.tool_call_id},...B.tool_calls&&{tool_calls:B.tool_calls}}))},chatConfig:i,callContext:o.callContext,stream:o.stream??!0,signal:o.signal,tools:b});const z=y.content&&y.content.trim().length>0,O=y.toolCalls&&y.toolCalls.length>0;if(z&&!O)break;if(z&&O){console.warn("[AIService] Model provided content but also called tools - treating as completion");break}}const j=await this.messageProcessor.process(y,e,this.createAgentContext(n,o.callContext,{message:y}));e.hooks?.afterReceive&&await e.hooks.afterReceive(j,this.createAgentContext(n,o.callContext));const J=this.createFinalMessage(e,j);return!await this.handleUserAttention(e.role,J,o,a)&&o.pauseOnAttention?null:(a.messages.set(e.role,J),o.onAgentComplete?.(e.role,J),J)}}const sd=new Nu,Mu=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
The user will provide code snippets, and you will help them understand, debug, and extend their code.
Supported programming languages that geo!space can directly run:
- Python code is directly executed in the browser using Pyodide
- JavaScript code is executed in a worker

Code for other programming languages cannot be executed directly, but geo!space uses the monaco editor to offer basic IDE like functionality.

**Your Responsibilities:**

*   **Understand the User's Goal:**  Always start by clarifying what the user is trying to achieve with their Python code. Ask clarifying questions if necessary.
*   **Explain Python Code:**  If the user provides code, explain what it does, line by line if needed.  Point out potential issues or areas for improvement.
*   **Help with \`js\` Module Interaction:**  The user will likely want to call JavaScript functions from Python or pass data between Python and JavaScript.  Provide clear examples of how to use the \`js\` module for these interactions.  Explain the syntax and potential pitfalls.
*   **Provide Code Examples:**  Give concise, runnable code examples to illustrate concepts.
*   **Debug Code:**  If the user reports errors, help them identify the cause and suggest solutions.  Consider both Python and JavaScript errors.
*   **Suggest Improvements:**  Offer suggestions for making the code more efficient, readable, or robust.
*   **Focus on Browser Context:**  Remember that the code is running in a browser environment.  Be mindful of browser limitations and security considerations.
*   **Be Concise and Clear:**  Avoid jargon and explain concepts in a way that is easy to understand.
*   **Assume Basic Python Knowledge:**  While you should explain code, assume the user has a basic understanding of Python syntax.

**About the Python environment:**
A mount point is provided at /workspace which is linked to a folder on the user's local file system previously selected using the file system access api of the browser.
The working directory is automatically set to the /workspace folder. The user can access the workspace content in the web app's file browser titled "Workspace" in the UI.
The user can install additional Python packages by adding them as dependencies in the workspace file requirements.txt.
The dependencies within the requirements.txt are installed before any code is executed.`,Fu=`You are a JavaScript programming assistant for the geo!space IDE.
Your role is to help users write, understand, and debug geo!space modules—JavaScript files that export a function for dynamic interaction with OpenLayers-powered maps.

*Always follow these guidelines:*

- Explain concepts and code clearly, concisely, and at the experience level of the user.
- If a user shares module code, extract and summarize its structure (such as state, refs, UI, use of the map object, etc.) before offering feedback or improvements.
- When explaining, reference geo!space context, e.g., "This is how you add a map layer in geo!space..."
- For any questions or issues, focus help specifically on JavaScript, OpenLayers usage, and geo!space module patterns.
- Do not discuss topics outside JavaScript, OpenLayers, or geo!space modules.
- If a user's intent isn't clear, ask clarifying questions before answering.
- When a user requests a starter, skeleton, or minimal module, provide the following template and explain its structure:

\`\`\`javascript
// Export your module as a default function.
// The following parameters are available:
export default function ({ map, env, render, html, style, when, ref, createRef, events, settings }) {
    // Optional: local state for your module
    const state = {
        // Your state variables here
    };

    // Optional: references for interactive elements
    // const myRef = createRef();

    // Optional: run code when module loads
    // style({ /* ... custom styles or slotting ... */ })

    // Return a function that renders your UI
    return () => html\`
        <!-- Your module's UI goes here -->

        <div>
            <h3>Hello, geo!space!</h3>
            <button @click=\${() => {
                // Example: add a marker or interact with map
                alert("Button clicked! Add OpenLayers code here.");
            }}>
                Click me
            </button>
        </div>
    \`;
}
\`\`\``,oo=t=>t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function",qu={enhance:async(t,e)=>{const r=e.activeEditor;if(!oo(r))return t;const n=r.getEditor(),i=n.getModel(),o=i.getValueInRange(n.getSelection()),a=r.input?.data.getWorkspacePath();return o?`${t}

 Code selection within file "${a}":
${o}`:`${t}

Code in file "${a}":
${i.getValue()}`}},lo=(t,e,r)=>({label:r,description:`${r}`,role:`${t==="python"?"py":"js"}-programmer`,icon:"code",sysPrompt:e,canHandle:n=>{const i=n.activeEditor;return oo(i)&&i.getLanguage()===t},promptEnhancers:[qu]});Me.registerContribution(Hn,lo("python",Mu,"Python Assistant"));Me.registerContribution(Hn,lo("javascript",Fu,"JavaScript Assistant"));Me.registerContribution(Zt,{target:Zt,label:"Ollama",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""}});Me.registerContribution(Zt,{target:Zt,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});Me.registerContribution(Zt,{target:Zt,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});Me.registerContribution(Zt,{target:Zt,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});Me.registerContribution(Zt,{target:Zt,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});Me.registerContribution(Zt,{target:Zt,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr"}});Me.registerContribution(Wa,{name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>V`<k-filebrowser id="${t}"></k-filebrowser>`});Me.registerContribution(Ga,{name:"aiview",label:"AI",icon:"robot",component:t=>V`<k-aiview id="${t}"></k-aiview>`});Me.registerContribution("system.fastviews-bottomend",{name:"log-terminal",label:"Log Messages",icon:"list",component:t=>V`<k-log-terminal id="${t}"></k-log-terminal>`});Me.registerContribution(ja,{slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"});Me.registerContribution(vs,{label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});Me.registerContribution(vs,{label:"Fast Views",html:'<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>'});const Dt=Vr("MarketplaceRegistry"),Fi="events/marketplaceregistry/changed",Zs="marketplace.catalogUrls";class zu{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{Dt.error(`Failed to refresh catalogs on init: ${e.message}`)})}),Kt(Fi,()=>{this.registerMarketplaceExtensions()})}async loadCatalogUrls(){try{const e=await xt.get(Zs);this.catalogUrls=Array.isArray(e)?e:[],Dt.debug(`Loaded ${this.catalogUrls.length} catalog URLs`)}catch(e){Dt.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await xt.set(Zs,this.catalogUrls),Xe(Fi,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){Dt.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),Dt.info(`Added catalog URL: ${e}`);try{await this.fetchCatalog(e),this.registerMarketplaceExtensions()}catch(r){Dt.warn(`Failed to fetch catalog immediately after adding: ${r}`)}}async removeCatalogUrl(e){const r=this.catalogUrls.indexOf(e);r!==-1&&(this.catalogUrls.splice(r,1),await this.saveCatalogUrls(),Dt.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const r=new URL(e);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const r=this.loadingPromises.get(e);if(r)return r;const n=(async()=>{try{Dt.debug(`Fetching catalog from: ${e}`);const i=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const o=await i.json();if(!o.extensions||!Array.isArray(o.extensions))throw new Error("Invalid catalog format: extensions array is required");const a={name:o.name,description:o.description,extensions:o.extensions};return Dt.debug(`Successfully fetched catalog from ${e}: ${a.extensions.length} extensions`),a}catch(i){throw Dt.error(`Failed to fetch catalog from ${e}: ${i}`),i}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,n),n}async refreshCatalogs(){Dt.info(`Refreshing ${this.catalogUrls.length} catalogs...`);const e=this.catalogUrls.map(n=>this.fetchCatalog(n).catch(i=>(Dt.warn(`Failed to refresh catalog ${n}: ${i.message}`),null)));(await Promise.allSettled(e)).forEach((n,i)=>{n.status==="fulfilled"&&n.value&&n.value.extensions.forEach(a=>{if(!Ue.getExtensions().find(c=>c.id===a.id)){const c={...a,external:!0};Ue.registerExtension(c),Dt.debug(`Registered marketplace extension: ${a.id}`)}})}),Xe(Fi,{type:"refreshed"}),Dt.info("Catalog refresh completed")}registerMarketplaceExtensions(){}getMarketplaceExtensions(){return[]}getMarketplaceExtension(e){const r=Ue.getExtensions().find(n=>n.id===e);if(r&&r.external)return r}getCatalogsWithExtensions(){return[]}async installExtension(e){if(Ue.isEnabled(e.id)){Dt.info(`Extension ${e.id} is already installed`);return}Dt.info(`Installing marketplace extension: ${e.name} from ${e.url}`);const r={...e,external:!0};Ue.registerExtension(r),await Jr.loadExtensionFromUrl(e.url),Dt.info(`Successfully installed marketplace extension: ${e.id}`)}isMarketplaceExtension(e){const r=Ue.getExtensions().find(n=>n.id===e);return r!==void 0&&r.external===!0}}const co=new zu;Bt.put("marketplaceRegistry",co);const Uu=Vr("MarketplaceCatalogContributions");co.addCatalogUrl("https://marketplace.kispace.de/externals.json").catch(t=>{Uu.warn(`Failed to add commercial catalog: ${t}`)});const ju={enhance:async(t,e)=>{const r=Ue.getExtensions().map(i=>({id:i.id,name:i.name,description:i.description,experimental:i.experimental,installedAndEnabled:Ue.isEnabled(i.id)}));return`${`***Available Extensions:***
${JSON.stringify(r,null,2)}`}

${t}`},priority:10},Wu={enhance:async(t,e)=>Nt.getWorkspace().then(r=>{const n={workspace:r?.getName(),activeEditor:$r.getEditorArea()?.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(n,null,2)}`}

${t}`}),priority:20};Me.registerContribution(Kn,{label:"Extensions Enhancer",enhancer:ju});Me.registerContribution(Kn,{label:"App State Enhancer",enhancer:Wu});async function Ai(t,e=!0){const r=await Nt.getWorkspace();if(!r)return null;const n=t?.path;return e&&!n?null:{workspace:r,path:n||""}}async function Yn(t,e=!0){const r=await Ai(t,e);if(!r)return null;const{workspace:n,path:i}=r;if(!i)return null;try{const o=await n.getResource(i);return!o||!(o instanceof ir)?null:{workspace:n,path:i,file:o}}catch{return null}}lt({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async({params:t})=>{let e=t?.path;const r=t?.contents,n=t?.ask,i=t?.extension;if((n||!e)&&(e=await Wn("Enter path to new file (directories will be created if not exist):",e||""),!e))return;i&&!e.endsWith(i)&&(e+=i);const o=await Ai({path:e},!0);if(!o)return;const{workspace:a}=o;if(await a.getResource(e)&&!await mn(`File "${e}" already exists. Do you want to overwrite it?`))return;const f=await a.getResource(e,{create:!0});return f?(r&&await f.saveContents(r),nt.info("File created: "+e)):Ze("Could not create file: "+e),e}}});lt({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{let e,r=t.params&&t.params.path;if(r){const o=await Nt.getWorkspace();o&&(e=await o.getResource(r))}if(e||(e=er.get()),!e){Ze("No resource to rename provided!");return}const n=e.getName(),i=t.params?.newName||await Wn(`Enter new name for "${n}":`,n);if(!(!i||i===n))try{await e.rename(i),tr(`Resource renamed to: ${i}`)}catch(o){Ze(`Failed to rename ${n}: ${o.message}`)}}}});lt({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{let e,r=t.params&&t.params.path;if(r){const o=await Nt.getWorkspace();o&&(e=await o.getResource(r))}if(e||(e=er.get()),!e){Ze("No resource to delete provided!");return}r=e.getWorkspacePath();const n=t.params&&t.params.confirm;let i=!0;if((n===void 0||n===!0)&&(i=await mn(`Are you sure you want to delete ${r}?`)),i)try{await e.delete(),tr("Resource deleted: "+r)}catch(o){Ze(`Resource ${r} could not be deleted: ${o.message||o}`)}}}});lt({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Nt.connectWorkspace(e)).catch(e=>{Ze(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});lt({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Nt.getWorkspace();e||Ze("No workspace selected."),e.touch()}}});lt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Yn({path:t.params?.path});if(!e)return;const{file:r}=e;await $r.loadEditor(r)}}});lt({command:{id:"head_file",name:"Head - Show first lines",description:"Shows the first N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the beginning (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the first N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Yn(t);if(!e)return;const{file:r}=e,n=t?.lines?parseInt(t.lines,10):10;if(isNaN(n)||n<1){Ze("Number of lines must be a positive integer");return}try{const i=await r.getContents();if(typeof i!="string"){Ze("File is not a text file");return}return i.split(`
`).slice(0,n).join(`
`)}catch(i){Ze(`Failed to read file: ${i.message}`);return}}}});lt({command:{id:"tail_file",name:"Tail - Show last lines",description:"Shows the last N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the end (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the last N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Yn(t);if(!e)return;const{file:r}=e,n=t?.lines?parseInt(t.lines,10):10;if(isNaN(n)||n<1){Ze("Number of lines must be a positive integer");return}try{const i=await r.getContents();if(typeof i!="string"){Ze("File is not a text file");return}return i.split(`
`).slice(-n).join(`
`)}catch(i){Ze(`Failed to read file: ${i.message}`);return}}}});lt({command:{id:"cat_file",name:"Cat - Show file contents",description:"Shows the complete contents of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0}],output:[{name:"content",description:"the complete contents of the file"}]},handler:{execute:async({params:t})=>{const e=await Yn(t);if(!e)return;const{file:r}=e;try{const n=await r.getContents();if(typeof n!="string"){Ze("File is not a text file");return}return n}catch(n){Ze(`Failed to read file: ${n.message}`);return}}}});lt({command:{id:"wc_file",name:"Word count",description:"Counts lines, words, and characters in a file",parameters:[{name:"path",description:"the path of the file to analyze",required:!0}],output:[{name:"lines",description:"number of lines in the file"},{name:"words",description:"number of words in the file"},{name:"characters",description:"number of characters in the file"}]},handler:{execute:async({params:t})=>{const e=await Yn(t);if(!e)return;const{file:r}=e;try{const n=await r.getContents();if(typeof n!="string"){Ze("File is not a text file");return}const o=n.split(`
`).length,a=n.trim()===""?0:n.trim().split(/\s+/).filter(f=>f.length>0).length,c=n.length;return{lines:o,words:a,characters:c}}catch(n){Ze(`Failed to read file: ${n.message}`);return}}}});lt({command:{id:"file_exists",name:"Check if file exists",description:"Checks if a file exists at the given path",parameters:[{name:"path",description:"the path of the file to check, relative to the workspace",required:!0}],output:[{name:"exists",description:"true if the file exists, false otherwise"}]},handler:{execute:async({params:t})=>{const e=await Ai(t);if(!e)return!1;const{workspace:r,path:n}=e;try{return await r.getResource(n)instanceof ir}catch{return!1}}}});async function uo(t){const e=[],r=await t.listChildren(!0);for(const n of r)if(n instanceof ir)e.push(n.getWorkspacePath());else if(n instanceof on){const i=await uo(n);e.push(...i)}return e}lt({command:{id:"ls",name:"List files",description:"Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",parameters:[{name:"path",description:"the path of the directory to list, relative to the workspace. If not provided, uses workspace root",required:!1},{name:"recursive",description:"whether to recursively traverse all subdirectories",type:"boolean",required:!1}],output:[{name:"files",description:"array of file objects with path and size information"}]},handler:{execute:async({params:t})=>{const e=await Ai(t,!1);if(!e)return Ze("No workspace available"),[];const{workspace:r,path:n}=e,i=t?.recursive===!0||t?.recursive==="true";try{let o=r;if(n){const a=await r.getResource(n);if(!a)return Ze(`Path not found: ${n}`),[];if(!(a instanceof on))return Ze(`Path is not a directory: ${n}`),[];o=a}if(i){const a=await uo(o),c=[];for(const f of a){const b=await r.getResource(f);if(b instanceof ir){const R=await b.size();c.push({path:f,size:R})}}return c}else{const a=await o.listChildren(!0),c=[];for(const f of a)if(f instanceof ir){const b=await f.size();c.push({path:f.getWorkspacePath(),size:b})}return c}}catch(o){return Ze(`Failed to list files: ${o.message}`),[]}}}});var _r={},cr={},Xs;function Bu(){if(Xs)return cr;Xs=1,Object.defineProperty(cr,"__esModule",{value:!0});function t(p){const s=p||"";return function(){throw new Error("this method "+s+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(p,s){if(!p)throw new Error(s||"Assertion failed")}function r(p,s,l){let d;Object.defineProperty(p,s,{get(){return d||(d=l.call(this)),d}})}function n(p){return p&&Object.assign({},p)}function i(p,s){const l=[];for(;s-- >0;)l.push(p());return l}function o(p,s){return new Array(s+1).join(p)}function a(p,s){return i(()=>p,s)}function c(p){const s=[];for(let l=0;l<p.length;l++){const d=p[l];p.lastIndexOf(d)!==l&&s.indexOf(d)<0&&s.push(d)}return s}function f(p){const s=[];return p.forEach(l=>{s.indexOf(l)<0&&s.push(l)}),s}function b(p){const s=p[0];return s===s.toUpperCase()}function R(p){return!b(p)}function y(p,s,l){const d=l||" ";return p.length<s?o(d,s-p.length)+p:p}function I(){this.strings=[]}I.prototype.append=function(p){this.strings.push(p)},I.prototype.contents=function(){return this.strings.join("")};const k=p=>String.fromCodePoint(parseInt(p,16));function j(p){if(p.charAt(0)==="\\")switch(p.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return k(p.slice(2,4));case"u":return p.charAt(2)==="{"?k(p.slice(3,-1)):k(p.slice(2,6));default:return p.charAt(1)}else return p}function J(p){if(p==null)return String(p);const s=Object.prototype.toString.call(p);try{let l;return p.constructor&&p.constructor.name?l=p.constructor.name:s.indexOf("[object ")===0?l=s.slice(8,-1):l=typeof p,l+": "+JSON.stringify(String(p))}catch{return s}}var ve=Object.freeze({__proto__:null,abstract:t,assert:e,defineLazyProperty:r,clone:n,repeatFn:i,repeatStr:o,repeat:a,getDuplicates:c,copyWithoutDuplicates:f,isSyntactic:b,isLexical:R,padLeft:y,StringBuffer:I,unescapeCodePoint:j,unexpectedObjToString:J});const xe={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class W{constructor(){if(this.constructor===W)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(s){return s&&(this.source=s.trimmed()),this}}const D=Object.create(W.prototype),K=Object.create(W.prototype);class z extends W{constructor(s){super(),this.obj=s}}class O extends W{constructor(s,l){super(),this.from=s,this.to=l,this.matchCodePoint=s.length>1||l.length>1}}class B extends W{constructor(s){super(),this.index=s}}class ee extends W{constructor(s){super(),this.terms=s}}class Te extends ee{constructor(s,l,d){const v=s.rules[l].body;super([d,v]),this.superGrammar=s,this.name=l,this.body=d}}class Pe extends ee{constructor(s,l,d,v){const T=s.rules[l].body;super([...d,T,...v]),this.superGrammar=s,this.ruleName=l,this.expansionPos=d.length}}class he extends W{constructor(s){super(),this.factors=s}}class q extends W{constructor(s){super(),this.expr=s}}class le extends q{}class ye extends q{}class Ie extends q{}le.prototype.operator="*",ye.prototype.operator="+",Ie.prototype.operator="?",le.prototype.minNumMatches=0,ye.prototype.minNumMatches=1,Ie.prototype.minNumMatches=0,le.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ye.prototype.maxNumMatches=Number.POSITIVE_INFINITY,Ie.prototype.maxNumMatches=1;class X extends W{constructor(s){super(),this.expr=s}}class se extends W{constructor(s){super(),this.expr=s}}class me extends W{constructor(s){super(),this.expr=s}}class Z extends W{constructor(s,l=[]){super(),this.ruleName=s,this.args=l}isSyntactic(){return b(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class Ce extends W{constructor(s){super(),this.category=s,this.pattern=xe[s]}}function Ne(p,s){let l;return s?(l=new Error(s.getLineAndColumnMessage()+p),l.shortMessage=p,l.interval=s):l=new Error(p),l}function w(){return Ne("Interval sources don't match")}function S(p){const s=new Error;return Object.defineProperty(s,"message",{enumerable:!0,get(){return p.message}}),Object.defineProperty(s,"shortMessage",{enumerable:!0,get(){return"Expected "+p.getExpectedText()}}),s.interval=p.getInterval(),s}function fe(p,s,l){const d=s?`Grammar ${p} is not declared in namespace '${s}'`:"Undeclared grammar "+p;return Ne(d,l)}function Re(p,s){return Ne("Grammar "+p.name+" is already declared in this namespace")}function Ye(p){return Ne(`Grammar '${p.name}' does not support incremental parsing`)}function We(p,s,l){return Ne("Rule "+p+" is not declared in grammar "+s,l)}function P(p,s,l){return Ne("Cannot override rule "+p+" because it is not declared in "+s,l)}function F(p,s,l){return Ne("Cannot extend rule "+p+" because it is not declared in "+s,l)}function $(p,s,l,d){let v="Duplicate declaration for rule '"+p+"' in grammar '"+s+"'";return s!==l&&(v+=" (originally declared in '"+l+"')"),Ne(v,d)}function Q(p,s,l,d){return Ne("Wrong number of parameters for rule "+p+" (expected "+s+", got "+l+")",d)}function ue(p,s,l,d){return Ne("Wrong number of arguments for rule "+p+" (expected "+s+", got "+l+")",d)}function ae(p,s,l){return Ne("Duplicate parameter names in rule "+p+": "+s.join(", "),l)}function G(p,s){return Ne("Invalid parameter to rule "+p+": "+s+" has arity "+s.getArity()+", but parameter expressions must have arity 1",s.source)}const ce="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function we(p,s){return Ne("Cannot apply syntactic rule "+p+" from here (inside a lexical context)",s.source)}function qe(p){const{ruleName:s}=p;return Ne(`applySyntactic is for syntactic rules, but '${s}' is a lexical rule. `+ce,p.source)}function Be(p){return Ne("applySyntactic is not required here (in a syntactic context)",p.source)}function ke(p,s){return Ne("Incorrect argument type: expected "+p,s.source)}function Ae(p){return Ne("'...' can appear at most once in a rule body",p.source)}function L(p){const s=p._node;e(s&&s.isNonterminal()&&s.ctorName==="escapeChar_unicodeCodePoint");const l=p.children.slice(1,-1).map(v=>v.source),d=l[0].coverageWith(...l.slice(1));return Ne(`U+${d.contents} is not a valid Unicode code point`,d)}function x(p,s){const l=s.length>0?s[s.length-1].args:[];let v="Nullable expression "+p.expr.substituteParams(l)+" is not allowed inside '"+p.operator+"' (possible infinite loop)";if(s.length>0){const T=s.map(U=>new Z(U.ruleName,U.args)).join(`
`);v+=`
Application stack (most recent application last):
`+T}return Ne(v,p.expr.source)}function N(p,s,l,d){return Ne("Rule "+p+" involves an alternation which has inconsistent arity (expected "+s+", got "+l+")",d.source)}function H(p){const s=p.map(l=>l.message);return Ne(["Errors:"].concat(s).join(`
- `),p[0].interval)}function Y(p,s,l,d){let v=d.slice(0,-1).map(oe=>{const Se="  "+oe[0].name+" > "+oe[1];return oe.length===3?Se+" for '"+oe[2]+"'":Se}).join(`
`);v+=`
  `+s+" > "+p;let T="";p==="_iter"&&(T=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const U=[`Missing semantic action for '${p}' in ${l} '${s}'.${T}`,"Action stack (most recent call last):",v].join(`
`),pe=Ne(U);return pe.name="missingSemanticAction",pe}function te(p){if(p.length===1)throw p[0];if(p.length>1)throw H(p)}function _e(p){let s=0;return p.map(d=>{const v=d.toString();return s=Math.max(s,v.length),v}).map(d=>y(d,s))}function Le(p,s,l){const d=p.length,v=p.slice(0,l),T=p.slice(l+s.length);return(v+s+T).substr(0,d)}function Ke(...p){const s=this,{offset:l}=s,{repeatStr:d}=ve,v=new I;v.append("Line "+s.lineNum+", col "+s.colNum+`:
`);const T=_e([s.prevLine==null?0:s.lineNum-1,s.lineNum,s.nextLine==null?0:s.lineNum+1]),U=(ne,re,ge)=>{v.append(ge+T[ne]+" | "+re+`
`)};s.prevLine!=null&&U(0,s.prevLine,"  "),U(1,s.line,"> ");const pe=s.line.length;let oe=d(" ",pe+1);for(let ne=0;ne<p.length;++ne){let re=p[ne][0],ge=p[ne][1];e(re>=0&&re<=ge,"range start must be >= 0 and <= end");const $e=l-s.colNum+1;re=Math.max(0,re-$e),ge=Math.min(ge-$e,pe),oe=Le(oe,d("~",ge-re),re)}const Se=2+T[1].length+3;return v.append(d(" ",Se)),oe=Le(oe,"^",s.colNum-1),v.append(oe.replace(/ +$/,"")+`
`),s.nextLine!=null&&U(2,s.nextLine,"  "),v.contents()}let it=[];function kt(p){it.push(p)}function de(p){it.forEach(s=>{s(p)}),it=null}function rr(p,s){let l=1,d=1,v=0,T=0,U=null,pe=null,oe=-1;for(;v<s;){const re=p.charAt(v++);re===`
`?(l++,d=1,oe=T,T=v):re!=="\r"&&d++}let Se=p.indexOf(`
`,T);if(Se===-1)Se=p.length;else{const re=p.indexOf(`
`,Se+1);U=re===-1?p.slice(Se):p.slice(Se,re),U=U.replace(/^\r?\n/,"").replace(/\r$/,"")}oe>=0&&(pe=p.slice(oe,T).replace(/\r?\n$/,""));const ne=p.slice(T,Se).replace(/\r$/,"");return{offset:s,lineNum:l,colNum:d,line:ne,prevLine:pe,nextLine:U,toString:Ke}}function Qt(p,s,...l){return rr(p,s).toString(...l)}const Tt=(()=>{let p=0;return s=>""+s+p++})();class pt{constructor(s,l,d){this.sourceString=s,this.startIdx=l,this.endIdx=d}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...s){return pt.coverage(...s,this)}collapsedLeft(){return new pt(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new pt(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return rr(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const s=[this.startIdx,this.endIdx];return Qt(this.sourceString,this.startIdx,s)}minus(s){if(this.sourceString!==s.sourceString)throw w();return this.startIdx===s.startIdx&&this.endIdx===s.endIdx?[]:this.startIdx<s.startIdx&&s.endIdx<this.endIdx?[new pt(this.sourceString,this.startIdx,s.startIdx),new pt(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.endIdx&&s.endIdx<this.endIdx?[new pt(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.startIdx&&s.startIdx<this.endIdx?[new pt(this.sourceString,this.startIdx,s.startIdx)]:[this]}relativeTo(s){if(this.sourceString!==s.sourceString)throw w();return e(this.startIdx>=s.startIdx&&this.endIdx<=s.endIdx,"other interval does not cover this one"),new pt(this.sourceString,this.startIdx-s.startIdx,this.endIdx-s.startIdx)}trimmed(){const{contents:s}=this,l=this.startIdx+s.match(/^\s*/)[0].length,d=this.endIdx-s.match(/\s*$/)[0].length;return new pt(this.sourceString,l,d)}subInterval(s,l){const d=this.startIdx+s;return new pt(this.sourceString,d,d+l)}}pt.coverage=function(p,...s){let{startIdx:l,endIdx:d}=p;for(const v of s){if(v.sourceString!==p.sourceString)throw w();l=Math.min(l,v.startIdx),d=Math.max(d,v.endIdx)}return new pt(p.sourceString,l,d)};const Gt=65535;class He{constructor(s){this.source=s,this.pos=0,this.examinedLength=0}atEnd(){const s=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),s}next(){const s=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),s}nextCharCode(){const s=this.next();return s&&s.charCodeAt(0)}nextCodePoint(){const s=this.source.slice(this.pos++).codePointAt(0);return s>Gt&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),s}matchString(s,l){let d;if(l){for(d=0;d<s.length;d++){const v=this.next(),T=s[d];if(v==null||v.toUpperCase()!==T.toUpperCase())return!1}return!0}for(d=0;d<s.length;d++)if(this.next()!==s[d])return!1;return!0}sourceSlice(s,l){return this.source.slice(s,l)}interval(s,l){return new pt(this.source,s,l||this.pos)}}class m{constructor(s,l,d,v,T,U,pe){this.matcher=s,this.input=l,this.startExpr=d,this._cst=v,this._cstOffset=T,this._rightmostFailurePosition=U,this._rightmostFailures=pe,this.failed()&&(r(this,"message",function(){const oe="Expected "+this.getExpectedText();return Qt(this.input,this.getRightmostFailurePosition())+oe}),r(this,"shortMessage",function(){const oe="expected "+this.getExpectedText(),Se=rr(this.input,this.getRightmostFailurePosition());return"Line "+Se.lineNum+", col "+Se.colNum+": "+oe}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const s=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=s.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const s=new I;let l=this.getRightmostFailures();l=l.filter(d=>!d.isFluffy());for(let d=0;d<l.length;d++)d>0&&(d===l.length-1?s.append(l.length>2?", or ":" or "):s.append(", ")),s.append(l[d].toString());return s.contents()}getInterval(){const s=this.getRightmostFailurePosition();return new pt(this.input,s,s)}}class _{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(s){return this.applicationMemoKeyStack.indexOf(s.toMemoKey())>=0}enter(s){this.applicationMemoKeyStack.push(s.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(s,l){l.isLeftRecursion=!0,l.headApplication=s,l.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=l;const{applicationMemoKeyStack:d}=this,v=d.indexOf(s.toMemoKey())+1,T=d.slice(v);l.isInvolved=function(U){return T.indexOf(U)>=0},l.updateInvolvedApplicationMemoKeys=function(){for(let U=v;U<d.length;U++){const pe=d[U];this.isInvolved(pe)||T.push(pe)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(s){if(!s.isLeftRecursion)return!0;const{applicationMemoKeyStack:l}=this;for(let d=0;d<l.length;d++){const v=l[d];if(s.isInvolved(v))return!1}return!0}memoize(s,l){return this.memo[s]=l,this.maxExaminedLength=Math.max(this.maxExaminedLength,l.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,l.rightmostFailureOffset),l}clearObsoleteEntries(s,l){if(s+this.maxExaminedLength<=l)return;const{memo:d}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(d).forEach(v=>{const T=d[v];s+T.examinedLength>l?delete d[v]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,T.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,T.rightmostFailureOffset))})}}const E="✗",u="✓",h="⋅",g="⇒",A="␉",C="␊",M="␍",ie={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function be(p){return a(" ",p).join("")}function Ee(p,s,l){const d=Qe(p.slice(s,s+l));return d.length<l?d+a(" ",l-d.length).join(""):d}function Qe(p){return typeof p=="string"?p.replace(/ /g,h).replace(/\t/g,A).replace(/\n/g,C).replace(/\r/g,M):String(p)}class De{constructor(s,l,d,v,T,U,pe){this.input=s,this.pos=this.pos1=l,this.pos2=d,this.source=new pt(s,l,d),this.expr=v,this.bindings=U,this.children=pe||[],this.terminatingLREntry=null,this._flags=T?ie.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(s){const l=new De(this.input,this.pos,this.pos2,s,this.succeeded,this.bindings,this.children);return l.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,l.isImplicitSpaces=this.isImplicitSpaces,l.isMemoized=this.isMemoized,l.isRootNode=this.isRootNode,l.terminatesLR=this.terminatesLR,l.terminatingLREntry=this.terminatingLREntry,l}recordLRTermination(s,l){this.terminatingLREntry=new De(this.input,this.pos,this.pos2,this.expr,!1,[l],[s]),this.terminatingLREntry.terminatesLR=!0}walk(s,l){let d=s;typeof d=="function"&&(d={enter:d});function v(T,U,pe){let oe=!0;d.enter&&d.enter.call(l,T,U,pe)===De.prototype.SKIP&&(oe=!1),oe&&(T.children.forEach(Se=>{v(Se,T,pe+1)}),d.exit&&d.exit.call(l,T,U,pe))}this.isRootNode?this.children.forEach(T=>{v(T,null,0)}):v(this,null,0)}toString(){const s=new I;return this.walk((l,d,v)=>{if(!l)return this.SKIP;if(l.expr.constructor.name!=="Alt"){if(s.append(Ee(l.input,l.pos,10)+be(v*2+1)),s.append((l.succeeded?u:E)+" "+l.displayString),l.isHeadOfLeftRecursion&&s.append(" (LR)"),l.succeeded){const U=Qe(l.source.contents);s.append(" "+g+"  "),s.append(typeof U=="string"?'"'+U+'"':U)}s.append(`
`)}}),s.contents()}}De.prototype.SKIP={},Object.keys(ie).forEach(p=>{const s=ie[p];Object.defineProperty(De.prototype,p,{get(){return(this._flags&s)!==0},set(l){l?this._flags|=s:this._flags&=~s}})}),W.prototype.allowsSkippingPrecedingSpace=t("allowsSkippingPrecedingSpace"),D.allowsSkippingPrecedingSpace=K.allowsSkippingPrecedingSpace=Z.prototype.allowsSkippingPrecedingSpace=z.prototype.allowsSkippingPrecedingSpace=O.prototype.allowsSkippingPrecedingSpace=Ce.prototype.allowsSkippingPrecedingSpace=function(){return!0},ee.prototype.allowsSkippingPrecedingSpace=q.prototype.allowsSkippingPrecedingSpace=me.prototype.allowsSkippingPrecedingSpace=se.prototype.allowsSkippingPrecedingSpace=X.prototype.allowsSkippingPrecedingSpace=B.prototype.allowsSkippingPrecedingSpace=he.prototype.allowsSkippingPrecedingSpace=function(){return!1};let et;kt(p=>{et=p});let Je;W.prototype.assertAllApplicationsAreValid=function(p,s){Je=0,this._assertAllApplicationsAreValid(p,s)},W.prototype._assertAllApplicationsAreValid=t("_assertAllApplicationsAreValid"),D._assertAllApplicationsAreValid=K._assertAllApplicationsAreValid=z.prototype._assertAllApplicationsAreValid=O.prototype._assertAllApplicationsAreValid=B.prototype._assertAllApplicationsAreValid=Ce.prototype._assertAllApplicationsAreValid=function(p,s){},me.prototype._assertAllApplicationsAreValid=function(p,s){Je++,this.expr._assertAllApplicationsAreValid(p,s),Je--},ee.prototype._assertAllApplicationsAreValid=function(p,s){for(let l=0;l<this.terms.length;l++)this.terms[l]._assertAllApplicationsAreValid(p,s)},he.prototype._assertAllApplicationsAreValid=function(p,s){for(let l=0;l<this.factors.length;l++)this.factors[l]._assertAllApplicationsAreValid(p,s)},q.prototype._assertAllApplicationsAreValid=X.prototype._assertAllApplicationsAreValid=se.prototype._assertAllApplicationsAreValid=function(p,s){this.expr._assertAllApplicationsAreValid(p,s)},Z.prototype._assertAllApplicationsAreValid=function(p,s,l=!1){const d=s.rules[this.ruleName],v=b(p)&&Je===0;if(!d)throw We(this.ruleName,s.name,this.source);if(!l&&b(this.ruleName)&&!v)throw we(this.ruleName,this);const T=this.args.length,U=d.formals.length;if(T!==U)throw ue(this.ruleName,U,T,this.source);const pe=et&&d===et.rules.applySyntactic;if(et&&d===et.rules.caseInsensitive&&!(this.args[0]instanceof z))throw ke('a Terminal (e.g. "abc")',this.args[0]);if(pe){const Se=this.args[0];if(!(Se instanceof Z))throw ke("a syntactic rule application",Se);if(!b(Se.ruleName))throw qe(Se);if(v)throw Be(this)}this.args.forEach(Se=>{if(Se._assertAllApplicationsAreValid(p,s,pe),Se.getArity()!==1)throw G(this.ruleName,Se)})},W.prototype.assertChoicesHaveUniformArity=t("assertChoicesHaveUniformArity"),D.assertChoicesHaveUniformArity=K.assertChoicesHaveUniformArity=z.prototype.assertChoicesHaveUniformArity=O.prototype.assertChoicesHaveUniformArity=B.prototype.assertChoicesHaveUniformArity=me.prototype.assertChoicesHaveUniformArity=Ce.prototype.assertChoicesHaveUniformArity=function(p){},ee.prototype.assertChoicesHaveUniformArity=function(p){if(this.terms.length===0)return;const s=this.terms[0].getArity();for(let l=0;l<this.terms.length;l++){const d=this.terms[l];d.assertChoicesHaveUniformArity();const v=d.getArity();if(s!==v)throw N(p,s,v,d)}},Te.prototype.assertChoicesHaveUniformArity=function(p){const s=this.terms[0].getArity(),l=this.terms[1].getArity();if(s!==l)throw N(p,l,s,this.terms[0])},he.prototype.assertChoicesHaveUniformArity=function(p){for(let s=0;s<this.factors.length;s++)this.factors[s].assertChoicesHaveUniformArity(p)},q.prototype.assertChoicesHaveUniformArity=function(p){this.expr.assertChoicesHaveUniformArity(p)},X.prototype.assertChoicesHaveUniformArity=function(p){},se.prototype.assertChoicesHaveUniformArity=function(p){this.expr.assertChoicesHaveUniformArity(p)},Z.prototype.assertChoicesHaveUniformArity=function(p){},W.prototype.assertIteratedExprsAreNotNullable=t("assertIteratedExprsAreNotNullable"),D.assertIteratedExprsAreNotNullable=K.assertIteratedExprsAreNotNullable=z.prototype.assertIteratedExprsAreNotNullable=O.prototype.assertIteratedExprsAreNotNullable=B.prototype.assertIteratedExprsAreNotNullable=Ce.prototype.assertIteratedExprsAreNotNullable=function(p){},ee.prototype.assertIteratedExprsAreNotNullable=function(p){for(let s=0;s<this.terms.length;s++)this.terms[s].assertIteratedExprsAreNotNullable(p)},he.prototype.assertIteratedExprsAreNotNullable=function(p){for(let s=0;s<this.factors.length;s++)this.factors[s].assertIteratedExprsAreNotNullable(p)},q.prototype.assertIteratedExprsAreNotNullable=function(p){if(this.expr.assertIteratedExprsAreNotNullable(p),this.expr.isNullable(p))throw x(this,[])},Ie.prototype.assertIteratedExprsAreNotNullable=X.prototype.assertIteratedExprsAreNotNullable=se.prototype.assertIteratedExprsAreNotNullable=me.prototype.assertIteratedExprsAreNotNullable=function(p){this.expr.assertIteratedExprsAreNotNullable(p)},Z.prototype.assertIteratedExprsAreNotNullable=function(p){this.args.forEach(s=>{s.assertIteratedExprsAreNotNullable(p)})};class vt{constructor(s){this.matchLength=s}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(s){if(this.children)return this.children[s]}indexOfChild(s){return this.children.indexOf(s)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(s){const l=this.indexOfChild(s);if(l<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(l===0)throw new Error("cannot get child before first child");return this.childAt(l-1)}childAfter(s){const l=this.indexOfChild(s);if(l<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(l===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(l+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class ze extends vt{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class ht extends vt{constructor(s,l,d,v){super(v),this.ruleName=s,this.children=l,this.childOffsets=d}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return R(this.ctorName)}isSyntactic(){return b(this.ctorName)}}class Vt extends vt{constructor(s,l,d,v){super(d),this.children=s,this.childOffsets=l,this.optional=v}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}W.prototype.eval=t("eval"),D.eval=function(p){const{inputStream:s}=p,l=s.pos,d=s.nextCodePoint();return d!==void 0?(p.pushBinding(new ze(String.fromCodePoint(d).length),l),!0):(p.processFailure(l,this),!1)},K.eval=function(p){const{inputStream:s}=p,l=s.pos;return s.atEnd()?(p.pushBinding(new ze(0),l),!0):(p.processFailure(l,this),!1)},z.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos;return s.matchString(this.obj)?(p.pushBinding(new ze(this.obj.length),l),!0):(p.processFailure(l,this),!1)},O.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos,d=this.matchCodePoint?s.nextCodePoint():s.nextCharCode();return d!==void 0&&this.from.codePointAt(0)<=d&&d<=this.to.codePointAt(0)?(p.pushBinding(new ze(String.fromCodePoint(d).length),l),!0):(p.processFailure(l,this),!1)},B.prototype.eval=function(p){return p.eval(p.currentApplication().args[this.index])},me.prototype.eval=function(p){p.enterLexifiedContext();const s=p.eval(this.expr);return p.exitLexifiedContext(),s},ee.prototype.eval=function(p){for(let s=0;s<this.terms.length;s++)if(p.eval(this.terms[s]))return!0;return!1},he.prototype.eval=function(p){for(let s=0;s<this.factors.length;s++){const l=this.factors[s];if(!p.eval(l))return!1}return!0},q.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos,d=this.getArity(),v=[],T=[];for(;v.length<d;)v.push([]),T.push([]);let U=0,pe=l,oe;for(;U<this.maxNumMatches&&p.eval(this.expr);){if(s.pos===pe)throw x(this,p._applicationStack);pe=s.pos,U++;const ge=p._bindings.splice(p._bindings.length-d,d),$e=p._bindingOffsets.splice(p._bindingOffsets.length-d,d);for(oe=0;oe<ge.length;oe++)v[oe].push(ge[oe]),T[oe].push($e[oe])}if(U<this.minNumMatches)return!1;let Se=p.posToOffset(l),ne=0;if(U>0){const ge=v[d-1],$e=T[d-1],rt=$e[$e.length-1]+ge[ge.length-1].matchLength;Se=T[0][0],ne=rt-Se}const re=this instanceof Ie;for(oe=0;oe<v.length;oe++)p._bindings.push(new Vt(v[oe],T[oe],ne,re)),p._bindingOffsets.push(Se);return!0},X.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos;p.pushFailuresInfo();const d=p.eval(this.expr);return p.popFailuresInfo(),d?(p.processFailure(l,this),!1):(s.pos=l,!0)},se.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos;return p.eval(this.expr)?(s.pos=l,!0):!1},Z.prototype.eval=function(p){const s=p.currentApplication(),l=s?s.args:[],d=this.substituteParams(l),v=p.getCurrentPosInfo();if(v.isActive(d))return d.handleCycle(p);const T=d.toMemoKey(),U=v.memo[T];if(U&&v.shouldUseMemoizedResult(U)){if(p.hasNecessaryInfo(U))return p.useMemoizedResult(p.inputStream.pos,U);delete v.memo[T]}return d.reallyEval(p)},Z.prototype.handleCycle=function(p){const s=p.getCurrentPosInfo(),{currentLeftRecursion:l}=s,d=this.toMemoKey();let v=s.memo[d];return l&&l.headApplication.toMemoKey()===d?v.updateInvolvedApplicationMemoKeys():v||(v=s.memoize(d,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),s.startLeftRecursion(this,v)),p.useMemoizedResult(p.inputStream.pos,v)},Z.prototype.reallyEval=function(p){const{inputStream:s}=p,l=s.pos,d=p.getCurrentPosInfo(),v=p.grammar.rules[this.ruleName],{body:T}=v,{description:U}=v;p.enterApplication(d,this),U&&p.pushFailuresInfo();const pe=s.examinedLength;s.examinedLength=0;let oe=this.evalOnce(T,p);const Se=d.currentLeftRecursion,ne=this.toMemoKey(),re=Se&&Se.headApplication.toMemoKey()===ne;let ge;p.doNotMemoize?p.doNotMemoize=!1:re?(oe=this.growSeedResult(T,p,l,Se,oe),d.endLeftRecursion(),ge=Se,ge.examinedLength=s.examinedLength-l,ge.rightmostFailureOffset=p._getRightmostFailureOffset(),d.memoize(ne,ge)):(!Se||!Se.isInvolved(ne))&&(ge=d.memoize(ne,{matchLength:s.pos-l,examinedLength:s.examinedLength-l,value:oe,failuresAtRightmostPosition:p.cloneRecordedFailures(),rightmostFailureOffset:p._getRightmostFailureOffset()}));const $e=!!oe;if(U&&(p.popFailuresInfo(),$e||p.processFailure(l,this),ge&&(ge.failuresAtRightmostPosition=p.cloneRecordedFailures())),p.isTracing()&&ge){const rt=p.getTraceEntry(l,this,$e,$e?[oe]:[]);re&&(e(rt.terminatingLREntry!=null||!$e),rt.isHeadOfLeftRecursion=!0),ge.traceEntry=rt}return s.examinedLength=Math.max(s.examinedLength,pe),p.exitApplication(d,oe),$e},Z.prototype.evalOnce=function(p,s){const{inputStream:l}=s,d=l.pos;if(s.eval(p)){const v=p.getArity(),T=s._bindings.splice(s._bindings.length-v,v),U=s._bindingOffsets.splice(s._bindingOffsets.length-v,v),pe=l.pos-d;return new ht(this.ruleName,T,U,pe)}else return!1},Z.prototype.growSeedResult=function(p,s,l,d,v){if(!v)return!1;const{inputStream:T}=s;for(;;){if(d.matchLength=T.pos-l,d.value=v,d.failuresAtRightmostPosition=s.cloneRecordedFailures(),s.isTracing()){const U=s.trace[s.trace.length-1];d.traceEntry=new De(s.input,l,T.pos,this,!0,[v],[U.clone()])}if(T.pos=l,v=this.evalOnce(p,s),T.pos-l<=d.matchLength)break;s.isTracing()&&s.trace.splice(-2,1)}return s.isTracing()&&d.traceEntry.recordLRTermination(s.trace.pop(),v),T.pos=l+d.matchLength,d.value},Ce.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos,d=s.next();return d&&this.pattern.test(d)?(p.pushBinding(new ze(d.length),l),!0):(p.processFailure(l,this),!1)},W.prototype.getArity=t("getArity"),D.getArity=K.getArity=z.prototype.getArity=O.prototype.getArity=B.prototype.getArity=Z.prototype.getArity=Ce.prototype.getArity=function(){return 1},ee.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},he.prototype.getArity=function(){let p=0;for(let s=0;s<this.factors.length;s++)p+=this.factors[s].getArity();return p},q.prototype.getArity=function(){return this.expr.getArity()},X.prototype.getArity=function(){return 0},se.prototype.getArity=me.prototype.getArity=function(){return this.expr.getArity()};function ot(p,s){const l={};if(p.source&&s){const d=p.source.relativeTo(s);l.sourceInterval=[d.startIdx,d.endIdx]}return l}W.prototype.outputRecipe=t("outputRecipe"),D.outputRecipe=function(p,s){return["any",ot(this,s)]},K.outputRecipe=function(p,s){return["end",ot(this,s)]},z.prototype.outputRecipe=function(p,s){return["terminal",ot(this,s),this.obj]},O.prototype.outputRecipe=function(p,s){return["range",ot(this,s),this.from,this.to]},B.prototype.outputRecipe=function(p,s){return["param",ot(this,s),this.index]},ee.prototype.outputRecipe=function(p,s){return["alt",ot(this,s)].concat(this.terms.map(l=>l.outputRecipe(p,s)))},Te.prototype.outputRecipe=function(p,s){return this.terms[0].outputRecipe(p,s)},Pe.prototype.outputRecipe=function(p,s){const l=this.terms.slice(0,this.expansionPos),d=this.terms.slice(this.expansionPos+1);return["splice",ot(this,s),l.map(v=>v.outputRecipe(p,s)),d.map(v=>v.outputRecipe(p,s))]},he.prototype.outputRecipe=function(p,s){return["seq",ot(this,s)].concat(this.factors.map(l=>l.outputRecipe(p,s)))},le.prototype.outputRecipe=ye.prototype.outputRecipe=Ie.prototype.outputRecipe=X.prototype.outputRecipe=se.prototype.outputRecipe=me.prototype.outputRecipe=function(p,s){return[this.constructor.name.toLowerCase(),ot(this,s),this.expr.outputRecipe(p,s)]},Z.prototype.outputRecipe=function(p,s){return["app",ot(this,s),this.ruleName,this.args.map(l=>l.outputRecipe(p,s))]},Ce.prototype.outputRecipe=function(p,s){return["unicodeChar",ot(this,s),this.category]},W.prototype.introduceParams=t("introduceParams"),D.introduceParams=K.introduceParams=z.prototype.introduceParams=O.prototype.introduceParams=B.prototype.introduceParams=Ce.prototype.introduceParams=function(p){return this},ee.prototype.introduceParams=function(p){return this.terms.forEach((s,l,d)=>{d[l]=s.introduceParams(p)}),this},he.prototype.introduceParams=function(p){return this.factors.forEach((s,l,d)=>{d[l]=s.introduceParams(p)}),this},q.prototype.introduceParams=X.prototype.introduceParams=se.prototype.introduceParams=me.prototype.introduceParams=function(p){return this.expr=this.expr.introduceParams(p),this},Z.prototype.introduceParams=function(p){const s=p.indexOf(this.ruleName);if(s>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new B(s).withSource(this.source)}else return this.args.forEach((l,d,v)=>{v[d]=l.introduceParams(p)}),this},W.prototype.isNullable=function(p){return this._isNullable(p,Object.create(null))},W.prototype._isNullable=t("_isNullable"),D._isNullable=O.prototype._isNullable=B.prototype._isNullable=ye.prototype._isNullable=Ce.prototype._isNullable=function(p,s){return!1},K._isNullable=function(p,s){return!0},z.prototype._isNullable=function(p,s){return typeof this.obj=="string"?this.obj==="":!1},ee.prototype._isNullable=function(p,s){return this.terms.length===0||this.terms.some(l=>l._isNullable(p,s))},he.prototype._isNullable=function(p,s){return this.factors.every(l=>l._isNullable(p,s))},le.prototype._isNullable=Ie.prototype._isNullable=X.prototype._isNullable=se.prototype._isNullable=function(p,s){return!0},me.prototype._isNullable=function(p,s){return this.expr._isNullable(p,s)},Z.prototype._isNullable=function(p,s){const l=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(s,l)){const{body:d}=p.rules[this.ruleName],v=d.substituteParams(this.args);s[l]=!1,s[l]=v._isNullable(p,s)}return s[l]},W.prototype.substituteParams=t("substituteParams"),D.substituteParams=K.substituteParams=z.prototype.substituteParams=O.prototype.substituteParams=Ce.prototype.substituteParams=function(p){return this},B.prototype.substituteParams=function(p){return p[this.index]},ee.prototype.substituteParams=function(p){return new ee(this.terms.map(s=>s.substituteParams(p)))},he.prototype.substituteParams=function(p){return new he(this.factors.map(s=>s.substituteParams(p)))},q.prototype.substituteParams=X.prototype.substituteParams=se.prototype.substituteParams=me.prototype.substituteParams=function(p){return new this.constructor(this.expr.substituteParams(p))},Z.prototype.substituteParams=function(p){if(this.args.length===0)return this;{const s=this.args.map(l=>l.substituteParams(p));return new Z(this.ruleName,s)}};function Ir(p){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(p)}function dt(p){const s=Object.create(null);p.forEach(l=>{s[l]=(s[l]||0)+1}),Object.keys(s).forEach(l=>{if(s[l]<=1)return;let d=1;p.forEach((v,T)=>{v===l&&(p[T]=v+"_"+d++)})})}W.prototype.toArgumentNameList=t("toArgumentNameList"),D.toArgumentNameList=function(p,s){return["any"]},K.toArgumentNameList=function(p,s){return["end"]},z.prototype.toArgumentNameList=function(p,s){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+p]},O.prototype.toArgumentNameList=function(p,s){let l=this.from+"_to_"+this.to;return Ir(l)||(l="_"+l),Ir(l)||(l="$"+p),[l]},ee.prototype.toArgumentNameList=function(p,s){const l=this.terms.map(T=>T.toArgumentNameList(p,!0)),d=[],v=l[0].length;for(let T=0;T<v;T++){const U=[];for(let oe=0;oe<this.terms.length;oe++)U.push(l[oe][T]);const pe=f(U);d.push(pe.join("_or_"))}return s||dt(d),d},he.prototype.toArgumentNameList=function(p,s){let l=[];return this.factors.forEach(d=>{const v=d.toArgumentNameList(p,!0);l=l.concat(v),p+=v.length}),s||dt(l),l},q.prototype.toArgumentNameList=function(p,s){const l=this.expr.toArgumentNameList(p,s).map(d=>d[d.length-1]==="s"?d+"es":d+"s");return s||dt(l),l},Ie.prototype.toArgumentNameList=function(p,s){return this.expr.toArgumentNameList(p,s).map(l=>"opt"+l[0].toUpperCase()+l.slice(1))},X.prototype.toArgumentNameList=function(p,s){return[]},se.prototype.toArgumentNameList=me.prototype.toArgumentNameList=function(p,s){return this.expr.toArgumentNameList(p,s)},Z.prototype.toArgumentNameList=function(p,s){return[this.ruleName]},Ce.prototype.toArgumentNameList=function(p,s){return["$"+p]},B.prototype.toArgumentNameList=function(p,s){return["param"+this.index]},W.prototype.toDisplayString=t("toDisplayString"),ee.prototype.toDisplayString=he.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},D.toDisplayString=K.toDisplayString=q.prototype.toDisplayString=X.prototype.toDisplayString=se.prototype.toDisplayString=me.prototype.toDisplayString=z.prototype.toDisplayString=O.prototype.toDisplayString=B.prototype.toDisplayString=function(){return this.toString()},Z.prototype.toDisplayString=function(){if(this.args.length>0){const p=this.args.map(s=>s.toDisplayString());return this.ruleName+"<"+p.join(",")+">"}else return this.ruleName},Ce.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function Nr(p){return p==="description"||p==="string"||p==="code"}class yt{constructor(s,l,d){if(!Nr(d))throw new Error("invalid Failure type: "+d);this.pexpr=s,this.text=l,this.type=d,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(s){return this.getText()===s.getText()&&this.type===s.type&&(!this.isFluffy()||this.isFluffy()&&s.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const s=new yt(this.pexpr,this.text,this.type);return this.isFluffy()&&s.makeFluffy(),s}toKey(){return this.toString()+"#"+this.type}}W.prototype.toFailure=t("toFailure"),D.toFailure=function(p){return new yt(this,"any object","description")},K.toFailure=function(p){return new yt(this,"end of input","description")},z.prototype.toFailure=function(p){return new yt(this,this.obj,"string")},O.prototype.toFailure=function(p){return new yt(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},X.prototype.toFailure=function(p){const s=this.expr===D?"nothing":"not "+this.expr.toFailure(p);return new yt(this,s,"description")},se.prototype.toFailure=function(p){return this.expr.toFailure(p)},Z.prototype.toFailure=function(p){let{description:s}=p.rules[this.ruleName];return s||(s=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new yt(this,s,"description")},Ce.prototype.toFailure=function(p){return new yt(this,"a Unicode ["+this.category+"] character","description")},ee.prototype.toFailure=function(p){const l="("+this.terms.map(d=>d.toFailure(p)).join(" or ")+")";return new yt(this,l,"description")},he.prototype.toFailure=function(p){const l="("+this.factors.map(d=>d.toFailure(p)).join(" ")+")";return new yt(this,l,"description")},q.prototype.toFailure=function(p){const s="("+this.expr.toFailure(p)+this.operator+")";return new yt(this,s,"description")},W.prototype.toString=t("toString"),D.toString=function(){return"any"},K.toString=function(){return"end"},z.prototype.toString=function(){return JSON.stringify(this.obj)},O.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},B.prototype.toString=function(){return"$"+this.index},me.prototype.toString=function(){return"#("+this.expr.toString()+")"},ee.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(p=>p.toString()).join(" | ")+")"},he.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(p=>p.toString()).join(" ")+")"},q.prototype.toString=function(){return this.expr+this.operator},X.prototype.toString=function(){return"~"+this.expr},se.prototype.toString=function(){return"&"+this.expr},Z.prototype.toString=function(){if(this.args.length>0){const p=this.args.map(s=>s.toString());return this.ruleName+"<"+p.join(",")+">"}else return this.ruleName},Ce.prototype.toString=function(){return"\\p{"+this.category+"}"};class ar extends W{constructor(s){super(),this.obj=s}_getString(s){const l=s.currentApplication().args[this.obj.index];return e(l instanceof z,"expected a Terminal expression"),l.obj}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:l}=s,d=l.pos,v=this._getString(s);return l.matchString(v,!0)?(s.pushBinding(new ze(v.length),d),!0):(s.processFailure(d,this),!1)}getArity(){return 1}substituteParams(s){return new ar(this.obj.substituteParams(s))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(s){return new yt(this,this.obj.toFailure(s)+" (case-insensitive)","description")}_isNullable(s,l){return this.obj._isNullable(s,l)}}var Ri=Object.freeze({__proto__:null,CaseInsensitiveTerminal:ar,PExpr:W,any:D,end:K,Terminal:z,Range:O,Param:B,Alt:ee,Extend:Te,Splice:Pe,Seq:he,Iter:q,Star:le,Plus:ye,Opt:Ie,Not:X,Lookahead:se,Lex:me,Apply:Z,UnicodeChar:Ce});let Zn;kt(p=>{Zn=p.rules.applySyntactic.body});const bn=new Z("spaces");class Xn{constructor(s,l,d){this.matcher=s,this.startExpr=l,this.grammar=s.grammar,this.input=s.getInput(),this.inputStream=new He(this.input),this.memoTable=s._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],d!==void 0&&(this.positionToRecordFailures=d,this.recordedFailures=Object.create(null))}posToOffset(s){return s-this._posStack[this._posStack.length-1]}enterApplication(s,l){this._posStack.push(this.inputStream.pos),this._applicationStack.push(l),this.inLexifiedContextStack.push(!1),s.enter(l),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(s,l){const d=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),s.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),l&&this.pushBinding(l,d)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const s=this.currentApplication();return s?s.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(bn),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(s){return s.allowsSkippingPrecedingSpace()&&s!==bn?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(s,l){this._bindings.push(s),this._bindingOffsets.push(this.posToOffset(l))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(s){for(;this._bindings.length>s;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(s){let l=this.memoTable[s];return l||(l=this.memoTable[s]=new _),l}processFailure(s,l){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,s),this.recordedFailures&&s===this.positionToRecordFailures){const d=this.currentApplication();d&&(l=l.substituteParams(d.args)),this.recordFailure(l.toFailure(this.grammar),!1)}}recordFailure(s,l){const d=s.toKey();this.recordedFailures[d]?this.recordedFailures[d].isFluffy()&&!s.isFluffy()&&this.recordedFailures[d].clearFluffy():this.recordedFailures[d]=l?s.clone():s}recordFailures(s,l){Object.keys(s).forEach(d=>{this.recordFailure(s[d],l)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const s=Object.create(null);return Object.keys(this.recordedFailures).forEach(l=>{s[l]=this.recordedFailures[l].clone()}),s}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(s,l){const d=this.memoTable[s];if(d&&l instanceof Z){const v=d.memo[l.toMemoKey()];if(v&&v.traceEntry){const T=v.traceEntry.cloneWithExpr(l);return T.isMemoized=!0,T}}return null}getTraceEntry(s,l,d,v){if(l instanceof Z){const T=this.currentApplication(),U=T?T.args:[];l=l.substituteParams(U)}return this.getMemoizedTraceEntry(s,l)||new De(this.input,s,this.inputStream.pos,l,d,v,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(s){return this.trace&&!s.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+s.rightmostFailureOffset===this.positionToRecordFailures?!!s.failuresAtRightmostPosition:!0}useMemoizedResult(s,l){this.trace&&this.trace.push(l.traceEntry);const d=this.inputStream.pos+l.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,d),this.recordedFailures&&this.positionToRecordFailures===d&&l.failuresAtRightmostPosition&&this.recordFailures(l.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,l.examinedLength+s),l.value?(this.inputStream.pos+=l.matchLength,this.pushBinding(l.value,s),!0):!1}eval(s){const{inputStream:l}=this,d=this._bindings.length,v=this.userData;let T;this.recordedFailures&&(T=this.recordedFailures,this.recordedFailures=Object.create(null));const U=l.pos,pe=this.maybeSkipSpacesBefore(s);let oe;this.trace&&(oe=this.trace,this.trace=[]);const Se=s.eval(this);if(this.trace){const ne=this._bindings.slice(d),re=this.getTraceEntry(pe,s,Se,ne);re.isImplicitSpaces=s===bn,re.isRootNode=s===this.startExpr,oe.push(re),this.trace=oe}return Se?this.recordedFailures&&l.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(ne=>{this.recordedFailures[ne].makeFluffy()}):(l.pos=U,this.truncateBindings(d),this.userData=v),this.recordedFailures&&this.recordFailures(T,!1),s===Zn&&this.skipSpaces(),Se}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let s;this.recordedFailures&&(s=Object.keys(this.recordedFailures).map(d=>this.recordedFailures[d]));const l=this._bindings[0];return l&&(l.grammar=this.grammar),new m(this.matcher,this.input,this.startExpr,l,this._bindingOffsets[0],this.rightmostFailurePosition,s)}getTrace(){this.trace=[];const s=this.getMatchResult(),l=this.trace[this.trace.length-1];return l.result=s,l}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Fe{constructor(s){this.grammar=s,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(s){return this._input!==s&&this.replaceInputRange(0,this._input.length,s),this}replaceInputRange(s,l,d){const v=this._input,T=this._memoTable;if(s<0||s>v.length||l<0||l>v.length||s>l)throw new Error("Invalid indices: "+s+" and "+l);this._input=v.slice(0,s)+d+v.slice(l),this._input!==v&&T.length>0&&(this._isMemoTableStale=!0);const U=T.slice(l);T.length=s;for(let pe=0;pe<d.length;pe++)T.push(void 0);for(const pe of U)T.push(pe);for(let pe=0;pe<s;pe++){const oe=T[pe];oe&&oe.clearObsoleteEntries(pe,s)}return this}match(s,l={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:l.incremental,tracing:!1})}trace(s,l={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:l.incremental,tracing:!0})}_match(s,l={}){const d={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...l};if(!d.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Ye(this.grammar);const v=new Xn(this,s,d.positionToRecordFailures);return d.tracing?v.getTrace():v.getMatchResult()}_getStartExpr(s){const l=s||this.grammar.defaultStartRule;if(!l)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const d=this.grammar.parseApplication(l);return new he([d,K])}}const bt=[],kr=(p,s)=>Object.prototype.hasOwnProperty.call(p,s);class wn{constructor(s,l,d){this._node=s,this.source=l,this._baseInterval=d,s.isNonterminal()&&e(l===d),this._childWrappers=[]}_forgetMemoizedResultFor(s){delete this._node[this._semantics.attributeKeys[s]],this.children.forEach(l=>{l._forgetMemoizedResultFor(s)})}child(s){if(!(0<=s&&s<this._node.numChildren()))return;let l=this._childWrappers[s];if(!l){const d=this._node.childAt(s),v=this._node.childOffsets[s],T=this._baseInterval.subInterval(v,d.matchLength),U=d.isNonterminal()?T:this._baseInterval;l=this._childWrappers[s]=this._semantics.wrap(d,T,U)}return l}_children(){for(let s=0;s<this._node.numChildren();s++)this.child(s);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(s){const l=s||[],d=l.map(U=>U._node),v=new Vt(d,[],-1,!1),T=this._semantics.wrap(v,null,null);return T._childWrappers=l,T}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class Mt{constructor(s,l){const d=this;if(this.grammar=s,this.checkedActionDicts=!1,this.Wrapper=class extends(l?l.Wrapper:wn){constructor(v,T,U){super(v,T,U),d.checkActionDictsIfHaventAlready(),this._semantics=d}toString(){return"[semantics wrapper for "+d.grammar.name+"]"}},this.super=l,l){if(!(s.equals(this.super.grammar)||s._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+s.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const v in this.attributes)Object.defineProperty(this.attributeKeys,v,{value:Tt(v)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let s;for(s in this.operations)this.operations[s].checkActionDict(this.grammar);for(s in this.attributes)this.attributes[s].checkActionDict(this.grammar)}toRecipe(s){function l(v){return v.super!==Mt.BuiltInSemantics._getSemantics()}let d=`(function(g) {
`;if(l(this)){d+="  var semantics = "+this.super.toRecipe(!0)+"(g";const v=this.super.grammar;let T=this.grammar;for(;T!==v;)d+=".superGrammar",T=T.superGrammar;d+=`);
`,d+="  return g.extendSemantics(semantics)"}else d+="  return g.createSemantics()";return["Operation","Attribute"].forEach(v=>{const T=this[v.toLowerCase()+"s"];Object.keys(T).forEach(U=>{const{actionDict:pe,formals:oe,builtInDefault:Se}=T[U];let ne=U;oe.length>0&&(ne+="("+oe.join(", ")+")");let re;l(this)&&this.super[v.toLowerCase()+"s"][U]?re="extend"+v:re="add"+v,d+=`
    .`+re+"("+JSON.stringify(ne)+", {";const ge=[];Object.keys(pe).forEach($e=>{if(pe[$e]!==Se){let rt=pe[$e].toString().trim();rt=rt.replace(/^.*\(/,"function("),ge.push(`
      `+JSON.stringify($e)+": "+rt)}}),d+=ge.join(",")+`
    })`})}),d+=`;
  })`,s||(d=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+d+`(grammar);
  return semantics;
});
`),d}addOperationOrAttribute(s,l,d){const v=s+"s",T=Mr(l,s),{name:U}=T,{formals:pe}=T;this.assertNewName(U,s);const oe=Zr(s,U,re),Se={_default:oe};Object.keys(d).forEach(ge=>{Se[ge]=d[ge]});const ne=s==="operation"?new Oe(U,pe,Se,oe):new ct(U,Se,oe);ne.checkActionDict(this.grammar),this[v][U]=ne;function re(...ge){const $e=this._semantics[v][U];if(arguments.length!==$e.formals.length)throw new Error("Invalid number of arguments passed to "+U+" "+s+" (expected "+$e.formals.length+", got "+arguments.length+")");const rt=Object.create(null);for(const[zr,xn]of Object.entries(ge)){const Po=$e.formals[zr];rt[Po]=xn}const Ct=this.args;this.args=rt;const Lt=$e.execute(this._semantics,this);return this.args=Ct,Lt}s==="operation"?(this.Wrapper.prototype[U]=re,this.Wrapper.prototype[U].toString=function(){return"["+U+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,U,{get:re,configurable:!0}),Object.defineProperty(this.attributeKeys,U,{value:Tt(U)}))}extendOperationOrAttribute(s,l,d){const v=s+"s";if(Mr(l,"attribute"),!(this.super&&l in this.super[v]))throw new Error("Cannot extend "+s+" '"+l+"': did not inherit an "+s+" with that name");if(kr(this[v],l))throw new Error("Cannot extend "+s+" '"+l+"' again");const T=this[v][l].formals,U=this[v][l].actionDict,pe=Object.create(U);Object.keys(d).forEach(oe=>{pe[oe]=d[oe]}),this[v][l]=s==="operation"?new Oe(l,T,pe):new ct(l,pe),this[v][l].checkActionDict(this.grammar)}assertNewName(s,l){if(kr(wn.prototype,s))throw new Error("Cannot add "+l+" '"+s+"': that's a reserved name");if(s in this.operations)throw new Error("Cannot add "+l+" '"+s+"': an operation with that name already exists");if(s in this.attributes)throw new Error("Cannot add "+l+" '"+s+"': an attribute with that name already exists")}wrap(s,l,d){const v=d||l;return s instanceof this.Wrapper?s:new this.Wrapper(s,l,v)}}function Mr(p,s){if(!Mt.prototypeGrammar)return e(p.indexOf("(")===-1),{name:p,formals:[]};const l=Mt.prototypeGrammar.match(p,s==="operation"?"OperationSignature":"AttributeSignature");if(l.failed())throw new Error(l.message);return Mt.prototypeGrammarSemantics(l).parse()}function Zr(p,s,l){return function(...d){const T=(this._semantics.operations[s]||this._semantics.attributes[s]).formals.map(U=>this.args[U]);if(!this.isIteration()&&d.length===1)return l.apply(d[0],T);throw Y(this.ctorName,s,p,bt)}}Mt.createSemantics=function(p,s){const l=new Mt(p,s!==void 0?s:Mt.BuiltInSemantics._getSemantics()),d=function(T){if(!(T instanceof m))throw new TypeError("Semantics expected a MatchResult, but got "+J(T));if(T.failed())throw new TypeError("cannot apply Semantics to "+T.toString());const U=T._cst;if(U.grammar!==p)throw new Error("Cannot use a MatchResult from grammar '"+U.grammar.name+"' with a semantics for '"+p.name+"'");const pe=new He(T.input);return l.wrap(U,pe.interval(T._cstOffset,T.input.length))};return d.addOperation=function(v,T){return l.addOperationOrAttribute("operation",v,T),d},d.extendOperation=function(v,T){return l.extendOperationOrAttribute("operation",v,T),d},d.addAttribute=function(v,T){return l.addOperationOrAttribute("attribute",v,T),d},d.extendAttribute=function(v,T){return l.extendOperationOrAttribute("attribute",v,T),d},d._getActionDict=function(v){const T=l.operations[v]||l.attributes[v];if(!T)throw new Error('"'+v+'" is not a valid operation or attribute name in this semantics for "'+p.name+'"');return T.actionDict},d._remove=function(v){let T;return v in l.operations?(T=l.operations[v],delete l.operations[v]):v in l.attributes&&(T=l.attributes[v],delete l.attributes[v]),delete l.Wrapper.prototype[v],T},d.getOperationNames=function(){return Object.keys(l.operations)},d.getAttributeNames=function(){return Object.keys(l.attributes)},d.getGrammar=function(){return l.grammar},d.toRecipe=function(v){return l.toRecipe(v)},d.toString=l.toString.bind(l),d._getSemantics=function(){return l},d};class Oe{constructor(s,l,d,v){this.name=s,this.formals=l,this.actionDict=d,this.builtInDefault=v}checkActionDict(s){s._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(s,l){try{const{ctorName:d}=l._node;let v=this.actionDict[d];return v?(bt.push([this,d]),v.apply(l,l._children())):l.isNonterminal()&&(v=this.actionDict._nonterminal,v)?(bt.push([this,"_nonterminal",d]),v.apply(l,l._children())):(bt.push([this,"default action",d]),this.actionDict._default.apply(l,l._children()))}finally{bt.pop()}}}Oe.prototype.typeName="operation";class ct extends Oe{constructor(s,l,d){super(s,[],l,d)}execute(s,l){const d=l._node,v=s.attributeKeys[this.name];return kr(d,v)||(d[v]=Oe.prototype.execute.call(this,s,l)),d[v]}}ct.prototype.typeName="attribute";const _t=["_iter","_terminal","_nonterminal","_default"];function ut(p){return Object.keys(p.rules).sort().map(s=>p.rules[s])}const Ft=p=>p.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let or,Rt;class gt{constructor(s,l,d,v){if(this.name=s,this.superGrammar=l,this.rules=d,v){if(!(v in d))throw new Error("Invalid start rule: '"+v+"' is not a rule in grammar '"+s+"'");this.defaultStartRule=v}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Fe(this)}isBuiltIn(){return this===gt.ProtoBuiltInRules||this===gt.BuiltInRules}equals(s){if(this===s)return!0;if(s==null||this.name!==s.name||this.defaultStartRule!==s.defaultStartRule||!(this.superGrammar===s.superGrammar||this.superGrammar.equals(s.superGrammar)))return!1;const l=ut(this),d=ut(s);return l.length===d.length&&l.every((v,T)=>v.description===d[T].description&&v.formals.join(",")===d[T].formals.join(",")&&v.body.toString()===d[T].body.toString())}match(s,l){const d=this.matcher();return d.replaceInputRange(0,0,s),d.match(l)}trace(s,l){const d=this.matcher();return d.replaceInputRange(0,0,s),d.trace(l)}createSemantics(){return Mt.createSemantics(this)}extendSemantics(s){return Mt.createSemantics(this,s._getSemantics())}_checkTopDownActionDict(s,l,d){const v=[];for(const T in d){const U=d[T];if(!_t.includes(T)&&!(T in this.rules)){v.push(`'${T}' is not a valid semantic action for '${this.name}'`);continue}if(typeof U!="function"){v.push(`'${T}' must be a function in an action dictionary for '${this.name}'`);continue}const oe=U.length,Se=this._topDownActionArity(T);if(oe!==Se){let ne;T==="_iter"||T==="_nonterminal"?ne=`it should use a rest parameter, e.g. \`${T}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:ne=`expected ${Se}, got ${oe}`,v.push(`Semantic action '${T}' has the wrong arity: ${ne}`)}}if(v.length>0){const T=v.map(pe=>"- "+pe),U=new Error([`Found errors in the action dictionary of the '${l}' ${s}:`,...T].join(`
`));throw U.problems=v,U}}_topDownActionArity(s){return _t.includes(s)?0:this.rules[s].body.getArity()}_inheritsFrom(s){let l=this.superGrammar;for(;l;){if(l.equals(s,!0))return!0;l=l.superGrammar}return!1}toRecipe(s=void 0){const l={};this.source&&(l.source=this.source.contents);let d=null;this.defaultStartRule&&(d=this.defaultStartRule);const v={};Object.keys(this.rules).forEach(pe=>{const oe=this.rules[pe],{body:Se}=oe,ne=!this.superGrammar||!this.superGrammar.rules[pe];let re;ne?re="define":re=Se instanceof Te?"extend":"override";const ge={};if(oe.source&&this.source){const Ct=oe.source.relativeTo(this.source);ge.sourceInterval=[Ct.startIdx,Ct.endIdx]}const $e=ne?oe.description:null,rt=Se.outputRecipe(oe.formals,this.source);v[pe]=[re,ge,$e,oe.formals,rt]});let T="null";s?T=s:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(T=this.superGrammar.toRecipe());const U=[...["grammar",l,this.name].map(JSON.stringify),T,...[d,v].map(JSON.stringify)];return Ft(`[${U.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const s=new I;s.append("{");let l=!0;for(const d in this.rules){const{body:v}=this.rules[d];l?l=!1:s.append(","),s.append(`
`),s.append("  "),this.addSemanticActionTemplate(d,v,s)}return s.append(`
}`),s.contents()}addSemanticActionTemplate(s,l,d){d.append(s),d.append(": function(");const v=this._topDownActionArity(s);d.append(a("_",v).join(", ")),d.append(`) {
`),d.append("  }")}parseApplication(s){let l;if(s.indexOf("<")===-1)l=new Z(s);else{const v=or.match(s,"Base_application");l=Rt(v,{})}if(!(l.ruleName in this.rules))throw We(l.ruleName,this.name);const{formals:d}=this.rules[l.ruleName];if(d.length!==l.args.length){const{source:v}=this.rules[l.ruleName];throw Q(l.ruleName,d.length,l.args.length,v)}return l}_setUpMatchState(s){this._matchStateInitializer&&this._matchStateInitializer(s)}}gt.ProtoBuiltInRules=new gt("ProtoBuiltInRules",void 0,{any:{body:D,formals:[],description:"any character",primitive:!0},end:{body:K,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new ar(new B(0)),formals:["str"],primitive:!0},lower:{body:new Ce("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new Ce("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new Ce("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new le(new Z("space")),formals:[]},space:{body:new O("\0"," "),formals:[],description:"a space"}}),gt.initApplicationParser=function(p,s){or=p,Rt=s};class qt{constructor(s){this.name=s}sourceInterval(s,l){return this.source.subInterval(s,l-s)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?gt.ProtoBuiltInRules:gt.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(s,l){const d=this.ensureSuperGrammar().rules[s];if(!d)throw P(s,this.superGrammar.name,l);return d}installOverriddenOrExtendedRule(s,l,d,v){const T=c(l);if(T.length>0)throw ae(s,T,v);const U=this.ensureSuperGrammar().rules[s],pe=U.formals,oe=pe?pe.length:0;if(l.length!==oe)throw Q(s,oe,l.length,v);return this.install(s,l,d,U.description,v)}install(s,l,d,v,T,U=!1){return this.rules[s]={body:d.introduceParams(l),formals:l,description:v,source:T,primitive:U},this}withSuperGrammar(s){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=s,this.rules=Object.create(s.rules),s.isBuiltIn()||(this.defaultStartRule=s.defaultStartRule),this}withDefaultStartRule(s){return this.defaultStartRule=s,this}withSource(s){return this.source=new He(s).interval(0,s.length),this}build(){const s=new gt(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);s._matchStateInitializer=s.superGrammar._matchStateInitializer,s.supportsIncrementalParsing=s.superGrammar.supportsIncrementalParsing;const l=[];let d=!1;return Object.keys(s.rules).forEach(v=>{const{body:T}=s.rules[v];try{T.assertChoicesHaveUniformArity(v)}catch(U){l.push(U)}try{T.assertAllApplicationsAreValid(v,s)}catch(U){l.push(U),d=!0}}),d||Object.keys(s.rules).forEach(v=>{const{body:T}=s.rules[v];try{T.assertIteratedExprsAreNotNullable(s,[])}catch(U){l.push(U)}}),l.length>0&&te(l),this.source&&(s.source=this.source),s}define(s,l,d,v,T,U){if(this.ensureSuperGrammar(),this.superGrammar.rules[s])throw $(s,this.name,this.superGrammar.name,T);if(this.rules[s])throw $(s,this.name,this.name,T);const pe=c(l);if(pe.length>0)throw ae(s,pe,T);return this.install(s,l,d,v,T,U)}override(s,l,d,v,T){return this.ensureSuperGrammarRuleForOverriding(s,T),this.installOverriddenOrExtendedRule(s,l,d,T),this}extend(s,l,d,v,T){if(!this.ensureSuperGrammar().rules[s])throw F(s,this.superGrammar.name,T);const pe=new Te(this.superGrammar,s,d);return pe.source=d.source,this.installOverriddenOrExtendedRule(s,l,pe,T),this}}class zt{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(s){return new qt(s)}grammar(s,l,d,v,T){const U=new qt(l);return d&&U.withSuperGrammar(d instanceof gt?d:this.fromRecipe(d)),v&&U.withDefaultStartRule(v),s&&s.source&&U.withSource(s.source),this.currentDecl=U,Object.keys(T).forEach(pe=>{this.currentRuleName=pe;const oe=T[pe],Se=oe[0],ne=oe[1],re=oe[2],ge=oe[3],$e=this.fromRecipe(oe[4]);let rt;U.source&&ne&&ne.sourceInterval&&(rt=U.source.subInterval(ne.sourceInterval[0],ne.sourceInterval[1]-ne.sourceInterval[0])),U[Se](pe,ge,$e,re,rt)}),this.currentRuleName=this.currentDecl=null,U.build()}terminal(s){return new z(s)}range(s,l){return new O(s,l)}param(s){return new B(s)}alt(...s){let l=[];for(let d of s)d instanceof W||(d=this.fromRecipe(d)),d instanceof ee?l=l.concat(d.terms):l.push(d);return l.length===1?l[0]:new ee(l)}seq(...s){let l=[];for(let d of s)d instanceof W||(d=this.fromRecipe(d)),d instanceof he?l=l.concat(d.factors):l.push(d);return l.length===1?l[0]:new he(l)}star(s){return s instanceof W||(s=this.fromRecipe(s)),new le(s)}plus(s){return s instanceof W||(s=this.fromRecipe(s)),new ye(s)}opt(s){return s instanceof W||(s=this.fromRecipe(s)),new Ie(s)}not(s){return s instanceof W||(s=this.fromRecipe(s)),new X(s)}lookahead(s){return s instanceof W||(s=this.fromRecipe(s)),new se(s)}lex(s){return s instanceof W||(s=this.fromRecipe(s)),new me(s)}app(s,l){return l&&l.length>0&&(l=l.map(function(d){return d instanceof W?d:this.fromRecipe(d)},this)),new Z(s,l)}splice(s,l){return new Pe(this.currentDecl.superGrammar,this.currentRuleName,s.map(d=>this.fromRecipe(d)),l.map(d=>this.fromRecipe(d)))}fromRecipe(s){const l=s[0]==="grammar"?s.slice(1):s.slice(2),d=this[s[0]](...l),v=s[1];return v&&v.sourceInterval&&this.currentDecl&&d.withSource(this.currentDecl.sourceInterval(...v.sourceInterval)),d}}function ft(p){return typeof p=="function"?p.call(new zt):(typeof p=="string"&&(p=JSON.parse(p)),new zt().fromRecipe(p))}var Pt=ft(["grammar",{source:`BuiltInRules {

  alnum  (an alpha-numeric character)
    = letter
    | digit

  letter  (a letter)
    = lower
    | upper
    | unicodeLtmo

  digit  (a digit)
    = "0".."9"

  hexDigit  (a hexadecimal digit)
    = digit
    | "a".."f"
    | "A".."F"

  ListOf<elem, sep>
    = NonemptyListOf<elem, sep>
    | EmptyListOf<elem, sep>

  NonemptyListOf<elem, sep>
    = elem (sep elem)*

  EmptyListOf<elem, sep>
    = /* nothing */

  listOf<elem, sep>
    = nonemptyListOf<elem, sep>
    | emptyListOf<elem, sep>

  nonemptyListOf<elem, sep>
    = elem (sep elem)*

  emptyListOf<elem, sep>
    = /* nothing */

  // Allows a syntactic rule application within a lexical context.
  applySyntactic<app> = app
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);gt.BuiltInRules=Pt,de(gt.BuiltInRules);var Fr=ft(["grammar",{source:`Ohm {

  Grammars
    = Grammar*

  Grammar
    = ident SuperGrammar? "{" Rule* "}"

  SuperGrammar
    = "<:" ident

  Rule
    = ident Formals? ruleDescr? "="  RuleBody  -- define
    | ident Formals?            ":=" OverrideRuleBody  -- override
    | ident Formals?            "+=" RuleBody  -- extend

  RuleBody
    = "|"? NonemptyListOf<TopLevelTerm, "|">

  TopLevelTerm
    = Seq caseName  -- inline
    | Seq

  OverrideRuleBody
    = "|"? NonemptyListOf<OverrideTopLevelTerm, "|">

  OverrideTopLevelTerm
    = "..."  -- superSplice
    | TopLevelTerm

  Formals
    = "<" ListOf<ident, ","> ">"

  Params
    = "<" ListOf<Seq, ","> ">"

  Alt
    = NonemptyListOf<Seq, "|">

  Seq
    = Iter*

  Iter
    = Pred "*"  -- star
    | Pred "+"  -- plus
    | Pred "?"  -- opt
    | Pred

  Pred
    = "~" Lex  -- not
    | "&" Lex  -- lookahead
    | Lex

  Lex
    = "#" Base  -- lex
    | Base

  Base
    = ident Params? ~(ruleDescr? "=" | ":=" | "+=")  -- application
    | oneCharTerminal ".." oneCharTerminal           -- range
    | terminal                                       -- terminal
    | "(" Alt ")"                                    -- paren

  ruleDescr  (a rule description)
    = "(" ruleDescrText ")"

  ruleDescrText
    = (~")" any)*

  caseName
    = "--" (~"\\n" space)* name (~"\\n" space)* ("\\n" | &"}")

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

  ident  (an identifier)
    = name

  terminal
    = "\\"" terminalChar* "\\""

  oneCharTerminal
    = "\\"" terminalChar "\\""

  terminalChar
    = escapeChar
      | ~"\\\\" ~"\\"" ~"\\n" "\\u{0}".."\\u{10FFFF}"

  escapeChar  (an escape sequence)
    = "\\\\\\\\"                                     -- backslash
    | "\\\\\\""                                     -- doubleQuote
    | "\\\\\\'"                                     -- singleQuote
    | "\\\\b"                                      -- backspace
    | "\\\\n"                                      -- lineFeed
    | "\\\\r"                                      -- carriageReturn
    | "\\\\t"                                      -- tab
    | "\\\\u{" hexDigit hexDigit? hexDigit?
             hexDigit? hexDigit? hexDigit? "}"   -- unicodeCodePoint
    | "\\\\u" hexDigit hexDigit hexDigit hexDigit  -- unicodeEscape
    | "\\\\x" hexDigit hexDigit                    -- hexEscape

  space
   += comment

  comment
    = "//" (~"\\n" any)* &("\\n" | end)  -- singleLine
    | "/*" (~"*/" any)* "*/"  -- multiLine

  tokens = token*

  token = caseName | comment | ident | operator | punctuation | terminal | any

  operator = "<:" | "=" | ":=" | "+=" | "*" | "+" | "?" | "~" | "&"

  punctuation = "<" | ">" | "," | "--"
}`},"Ohm",null,"Grammars",{Grammars:["define",{sourceInterval:[9,32]},null,[],["star",{sourceInterval:[24,32]},["app",{sourceInterval:[24,31]},"Grammar",[]]]],Grammar:["define",{sourceInterval:[36,83]},null,[],["seq",{sourceInterval:[50,83]},["app",{sourceInterval:[50,55]},"ident",[]],["opt",{sourceInterval:[56,69]},["app",{sourceInterval:[56,68]},"SuperGrammar",[]]],["terminal",{sourceInterval:[70,73]},"{"],["star",{sourceInterval:[74,79]},["app",{sourceInterval:[74,78]},"Rule",[]]],["terminal",{sourceInterval:[80,83]},"}"]]],SuperGrammar:["define",{sourceInterval:[87,116]},null,[],["seq",{sourceInterval:[106,116]},["terminal",{sourceInterval:[106,110]},"<:"],["app",{sourceInterval:[111,116]},"ident",[]]]],Rule_define:["define",{sourceInterval:[131,181]},null,[],["seq",{sourceInterval:[131,170]},["app",{sourceInterval:[131,136]},"ident",[]],["opt",{sourceInterval:[137,145]},["app",{sourceInterval:[137,144]},"Formals",[]]],["opt",{sourceInterval:[146,156]},["app",{sourceInterval:[146,155]},"ruleDescr",[]]],["terminal",{sourceInterval:[157,160]},"="],["app",{sourceInterval:[162,170]},"RuleBody",[]]]],Rule_override:["define",{sourceInterval:[188,248]},null,[],["seq",{sourceInterval:[188,235]},["app",{sourceInterval:[188,193]},"ident",[]],["opt",{sourceInterval:[194,202]},["app",{sourceInterval:[194,201]},"Formals",[]]],["terminal",{sourceInterval:[214,218]},":="],["app",{sourceInterval:[219,235]},"OverrideRuleBody",[]]]],Rule_extend:["define",{sourceInterval:[255,305]},null,[],["seq",{sourceInterval:[255,294]},["app",{sourceInterval:[255,260]},"ident",[]],["opt",{sourceInterval:[261,269]},["app",{sourceInterval:[261,268]},"Formals",[]]],["terminal",{sourceInterval:[281,285]},"+="],["app",{sourceInterval:[286,294]},"RuleBody",[]]]],Rule:["define",{sourceInterval:[120,305]},null,[],["alt",{sourceInterval:[131,305]},["app",{sourceInterval:[131,170]},"Rule_define",[]],["app",{sourceInterval:[188,235]},"Rule_override",[]],["app",{sourceInterval:[255,294]},"Rule_extend",[]]]],RuleBody:["define",{sourceInterval:[309,362]},null,[],["seq",{sourceInterval:[324,362]},["opt",{sourceInterval:[324,328]},["terminal",{sourceInterval:[324,327]},"|"]],["app",{sourceInterval:[329,362]},"NonemptyListOf",[["app",{sourceInterval:[344,356]},"TopLevelTerm",[]],["terminal",{sourceInterval:[358,361]},"|"]]]]],TopLevelTerm_inline:["define",{sourceInterval:[385,408]},null,[],["seq",{sourceInterval:[385,397]},["app",{sourceInterval:[385,388]},"Seq",[]],["app",{sourceInterval:[389,397]},"caseName",[]]]],TopLevelTerm:["define",{sourceInterval:[366,418]},null,[],["alt",{sourceInterval:[385,418]},["app",{sourceInterval:[385,397]},"TopLevelTerm_inline",[]],["app",{sourceInterval:[415,418]},"Seq",[]]]],OverrideRuleBody:["define",{sourceInterval:[422,491]},null,[],["seq",{sourceInterval:[445,491]},["opt",{sourceInterval:[445,449]},["terminal",{sourceInterval:[445,448]},"|"]],["app",{sourceInterval:[450,491]},"NonemptyListOf",[["app",{sourceInterval:[465,485]},"OverrideTopLevelTerm",[]],["terminal",{sourceInterval:[487,490]},"|"]]]]],OverrideTopLevelTerm_superSplice:["define",{sourceInterval:[522,543]},null,[],["terminal",{sourceInterval:[522,527]},"..."]],OverrideTopLevelTerm:["define",{sourceInterval:[495,562]},null,[],["alt",{sourceInterval:[522,562]},["app",{sourceInterval:[522,527]},"OverrideTopLevelTerm_superSplice",[]],["app",{sourceInterval:[550,562]},"TopLevelTerm",[]]]],Formals:["define",{sourceInterval:[566,606]},null,[],["seq",{sourceInterval:[580,606]},["terminal",{sourceInterval:[580,583]},"<"],["app",{sourceInterval:[584,602]},"ListOf",[["app",{sourceInterval:[591,596]},"ident",[]],["terminal",{sourceInterval:[598,601]},","]]],["terminal",{sourceInterval:[603,606]},">"]]],Params:["define",{sourceInterval:[610,647]},null,[],["seq",{sourceInterval:[623,647]},["terminal",{sourceInterval:[623,626]},"<"],["app",{sourceInterval:[627,643]},"ListOf",[["app",{sourceInterval:[634,637]},"Seq",[]],["terminal",{sourceInterval:[639,642]},","]]],["terminal",{sourceInterval:[644,647]},">"]]],Alt:["define",{sourceInterval:[651,685]},null,[],["app",{sourceInterval:[661,685]},"NonemptyListOf",[["app",{sourceInterval:[676,679]},"Seq",[]],["terminal",{sourceInterval:[681,684]},"|"]]]],Seq:["define",{sourceInterval:[689,704]},null,[],["star",{sourceInterval:[699,704]},["app",{sourceInterval:[699,703]},"Iter",[]]]],Iter_star:["define",{sourceInterval:[719,736]},null,[],["seq",{sourceInterval:[719,727]},["app",{sourceInterval:[719,723]},"Pred",[]],["terminal",{sourceInterval:[724,727]},"*"]]],Iter_plus:["define",{sourceInterval:[743,760]},null,[],["seq",{sourceInterval:[743,751]},["app",{sourceInterval:[743,747]},"Pred",[]],["terminal",{sourceInterval:[748,751]},"+"]]],Iter_opt:["define",{sourceInterval:[767,783]},null,[],["seq",{sourceInterval:[767,775]},["app",{sourceInterval:[767,771]},"Pred",[]],["terminal",{sourceInterval:[772,775]},"?"]]],Iter:["define",{sourceInterval:[708,794]},null,[],["alt",{sourceInterval:[719,794]},["app",{sourceInterval:[719,727]},"Iter_star",[]],["app",{sourceInterval:[743,751]},"Iter_plus",[]],["app",{sourceInterval:[767,775]},"Iter_opt",[]],["app",{sourceInterval:[790,794]},"Pred",[]]]],Pred_not:["define",{sourceInterval:[809,824]},null,[],["seq",{sourceInterval:[809,816]},["terminal",{sourceInterval:[809,812]},"~"],["app",{sourceInterval:[813,816]},"Lex",[]]]],Pred_lookahead:["define",{sourceInterval:[831,852]},null,[],["seq",{sourceInterval:[831,838]},["terminal",{sourceInterval:[831,834]},"&"],["app",{sourceInterval:[835,838]},"Lex",[]]]],Pred:["define",{sourceInterval:[798,862]},null,[],["alt",{sourceInterval:[809,862]},["app",{sourceInterval:[809,816]},"Pred_not",[]],["app",{sourceInterval:[831,838]},"Pred_lookahead",[]],["app",{sourceInterval:[859,862]},"Lex",[]]]],Lex_lex:["define",{sourceInterval:[876,892]},null,[],["seq",{sourceInterval:[876,884]},["terminal",{sourceInterval:[876,879]},"#"],["app",{sourceInterval:[880,884]},"Base",[]]]],Lex:["define",{sourceInterval:[866,903]},null,[],["alt",{sourceInterval:[876,903]},["app",{sourceInterval:[876,884]},"Lex_lex",[]],["app",{sourceInterval:[899,903]},"Base",[]]]],Base_application:["define",{sourceInterval:[918,979]},null,[],["seq",{sourceInterval:[918,963]},["app",{sourceInterval:[918,923]},"ident",[]],["opt",{sourceInterval:[924,931]},["app",{sourceInterval:[924,930]},"Params",[]]],["not",{sourceInterval:[932,963]},["alt",{sourceInterval:[934,962]},["seq",{sourceInterval:[934,948]},["opt",{sourceInterval:[934,944]},["app",{sourceInterval:[934,943]},"ruleDescr",[]]],["terminal",{sourceInterval:[945,948]},"="]],["terminal",{sourceInterval:[951,955]},":="],["terminal",{sourceInterval:[958,962]},"+="]]]]],Base_range:["define",{sourceInterval:[986,1041]},null,[],["seq",{sourceInterval:[986,1022]},["app",{sourceInterval:[986,1001]},"oneCharTerminal",[]],["terminal",{sourceInterval:[1002,1006]},".."],["app",{sourceInterval:[1007,1022]},"oneCharTerminal",[]]]],Base_terminal:["define",{sourceInterval:[1048,1106]},null,[],["app",{sourceInterval:[1048,1056]},"terminal",[]]],Base_paren:["define",{sourceInterval:[1113,1168]},null,[],["seq",{sourceInterval:[1113,1124]},["terminal",{sourceInterval:[1113,1116]},"("],["app",{sourceInterval:[1117,1120]},"Alt",[]],["terminal",{sourceInterval:[1121,1124]},")"]]],Base:["define",{sourceInterval:[907,1168]},null,[],["alt",{sourceInterval:[918,1168]},["app",{sourceInterval:[918,963]},"Base_application",[]],["app",{sourceInterval:[986,1022]},"Base_range",[]],["app",{sourceInterval:[1048,1056]},"Base_terminal",[]],["app",{sourceInterval:[1113,1124]},"Base_paren",[]]]],ruleDescr:["define",{sourceInterval:[1172,1231]},"a rule description",[],["seq",{sourceInterval:[1210,1231]},["terminal",{sourceInterval:[1210,1213]},"("],["app",{sourceInterval:[1214,1227]},"ruleDescrText",[]],["terminal",{sourceInterval:[1228,1231]},")"]]],ruleDescrText:["define",{sourceInterval:[1235,1266]},null,[],["star",{sourceInterval:[1255,1266]},["seq",{sourceInterval:[1256,1264]},["not",{sourceInterval:[1256,1260]},["terminal",{sourceInterval:[1257,1260]},")"]],["app",{sourceInterval:[1261,1264]},"any",[]]]]],caseName:["define",{sourceInterval:[1270,1338]},null,[],["seq",{sourceInterval:[1285,1338]},["terminal",{sourceInterval:[1285,1289]},"--"],["star",{sourceInterval:[1290,1304]},["seq",{sourceInterval:[1291,1302]},["not",{sourceInterval:[1291,1296]},["terminal",{sourceInterval:[1292,1296]},`
`]],["app",{sourceInterval:[1297,1302]},"space",[]]]],["app",{sourceInterval:[1305,1309]},"name",[]],["star",{sourceInterval:[1310,1324]},["seq",{sourceInterval:[1311,1322]},["not",{sourceInterval:[1311,1316]},["terminal",{sourceInterval:[1312,1316]},`
`]],["app",{sourceInterval:[1317,1322]},"space",[]]]],["alt",{sourceInterval:[1326,1337]},["terminal",{sourceInterval:[1326,1330]},`
`],["lookahead",{sourceInterval:[1333,1337]},["terminal",{sourceInterval:[1334,1337]},"}"]]]]],name:["define",{sourceInterval:[1342,1382]},"a name",[],["seq",{sourceInterval:[1363,1382]},["app",{sourceInterval:[1363,1372]},"nameFirst",[]],["star",{sourceInterval:[1373,1382]},["app",{sourceInterval:[1373,1381]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[1386,1418]},null,[],["alt",{sourceInterval:[1402,1418]},["terminal",{sourceInterval:[1402,1405]},"_"],["app",{sourceInterval:[1412,1418]},"letter",[]]]],nameRest:["define",{sourceInterval:[1422,1452]},null,[],["alt",{sourceInterval:[1437,1452]},["terminal",{sourceInterval:[1437,1440]},"_"],["app",{sourceInterval:[1447,1452]},"alnum",[]]]],ident:["define",{sourceInterval:[1456,1489]},"an identifier",[],["app",{sourceInterval:[1485,1489]},"name",[]]],terminal:["define",{sourceInterval:[1493,1531]},null,[],["seq",{sourceInterval:[1508,1531]},["terminal",{sourceInterval:[1508,1512]},'"'],["star",{sourceInterval:[1513,1526]},["app",{sourceInterval:[1513,1525]},"terminalChar",[]]],["terminal",{sourceInterval:[1527,1531]},'"']]],oneCharTerminal:["define",{sourceInterval:[1535,1579]},null,[],["seq",{sourceInterval:[1557,1579]},["terminal",{sourceInterval:[1557,1561]},'"'],["app",{sourceInterval:[1562,1574]},"terminalChar",[]],["terminal",{sourceInterval:[1575,1579]},'"']]],terminalChar:["define",{sourceInterval:[1583,1660]},null,[],["alt",{sourceInterval:[1602,1660]},["app",{sourceInterval:[1602,1612]},"escapeChar",[]],["seq",{sourceInterval:[1621,1660]},["not",{sourceInterval:[1621,1626]},["terminal",{sourceInterval:[1622,1626]},"\\"]],["not",{sourceInterval:[1627,1632]},["terminal",{sourceInterval:[1628,1632]},'"']],["not",{sourceInterval:[1633,1638]},["terminal",{sourceInterval:[1634,1638]},`
`]],["range",{sourceInterval:[1639,1660]},"\0","􏿿"]]]],escapeChar_backslash:["define",{sourceInterval:[1703,1758]},null,[],["terminal",{sourceInterval:[1703,1709]},"\\\\"]],escapeChar_doubleQuote:["define",{sourceInterval:[1765,1822]},null,[],["terminal",{sourceInterval:[1765,1771]},'\\"']],escapeChar_singleQuote:["define",{sourceInterval:[1829,1886]},null,[],["terminal",{sourceInterval:[1829,1835]},"\\'"]],escapeChar_backspace:["define",{sourceInterval:[1893,1948]},null,[],["terminal",{sourceInterval:[1893,1898]},"\\b"]],escapeChar_lineFeed:["define",{sourceInterval:[1955,2009]},null,[],["terminal",{sourceInterval:[1955,1960]},"\\n"]],escapeChar_carriageReturn:["define",{sourceInterval:[2016,2076]},null,[],["terminal",{sourceInterval:[2016,2021]},"\\r"]],escapeChar_tab:["define",{sourceInterval:[2083,2132]},null,[],["terminal",{sourceInterval:[2083,2088]},"\\t"]],escapeChar_unicodeCodePoint:["define",{sourceInterval:[2139,2243]},null,[],["seq",{sourceInterval:[2139,2221]},["terminal",{sourceInterval:[2139,2145]},"\\u{"],["app",{sourceInterval:[2146,2154]},"hexDigit",[]],["opt",{sourceInterval:[2155,2164]},["app",{sourceInterval:[2155,2163]},"hexDigit",[]]],["opt",{sourceInterval:[2165,2174]},["app",{sourceInterval:[2165,2173]},"hexDigit",[]]],["opt",{sourceInterval:[2188,2197]},["app",{sourceInterval:[2188,2196]},"hexDigit",[]]],["opt",{sourceInterval:[2198,2207]},["app",{sourceInterval:[2198,2206]},"hexDigit",[]]],["opt",{sourceInterval:[2208,2217]},["app",{sourceInterval:[2208,2216]},"hexDigit",[]]],["terminal",{sourceInterval:[2218,2221]},"}"]]],escapeChar_unicodeEscape:["define",{sourceInterval:[2250,2309]},null,[],["seq",{sourceInterval:[2250,2291]},["terminal",{sourceInterval:[2250,2255]},"\\u"],["app",{sourceInterval:[2256,2264]},"hexDigit",[]],["app",{sourceInterval:[2265,2273]},"hexDigit",[]],["app",{sourceInterval:[2274,2282]},"hexDigit",[]],["app",{sourceInterval:[2283,2291]},"hexDigit",[]]]],escapeChar_hexEscape:["define",{sourceInterval:[2316,2371]},null,[],["seq",{sourceInterval:[2316,2339]},["terminal",{sourceInterval:[2316,2321]},"\\x"],["app",{sourceInterval:[2322,2330]},"hexDigit",[]],["app",{sourceInterval:[2331,2339]},"hexDigit",[]]]],escapeChar:["define",{sourceInterval:[1664,2371]},"an escape sequence",[],["alt",{sourceInterval:[1703,2371]},["app",{sourceInterval:[1703,1709]},"escapeChar_backslash",[]],["app",{sourceInterval:[1765,1771]},"escapeChar_doubleQuote",[]],["app",{sourceInterval:[1829,1835]},"escapeChar_singleQuote",[]],["app",{sourceInterval:[1893,1898]},"escapeChar_backspace",[]],["app",{sourceInterval:[1955,1960]},"escapeChar_lineFeed",[]],["app",{sourceInterval:[2016,2021]},"escapeChar_carriageReturn",[]],["app",{sourceInterval:[2083,2088]},"escapeChar_tab",[]],["app",{sourceInterval:[2139,2221]},"escapeChar_unicodeCodePoint",[]],["app",{sourceInterval:[2250,2291]},"escapeChar_unicodeEscape",[]],["app",{sourceInterval:[2316,2339]},"escapeChar_hexEscape",[]]]],space:["extend",{sourceInterval:[2375,2394]},null,[],["app",{sourceInterval:[2387,2394]},"comment",[]]],comment_singleLine:["define",{sourceInterval:[2412,2458]},null,[],["seq",{sourceInterval:[2412,2443]},["terminal",{sourceInterval:[2412,2416]},"//"],["star",{sourceInterval:[2417,2429]},["seq",{sourceInterval:[2418,2427]},["not",{sourceInterval:[2418,2423]},["terminal",{sourceInterval:[2419,2423]},`
`]],["app",{sourceInterval:[2424,2427]},"any",[]]]],["lookahead",{sourceInterval:[2430,2443]},["alt",{sourceInterval:[2432,2442]},["terminal",{sourceInterval:[2432,2436]},`
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const wt=Object.create(W.prototype);function qr(p,s){for(const l in p)if(l===s)return!0;return!1}function Sr(p,s,l){const d=new zt;let v,T,U,pe=!1;return(l||Fr).createSemantics().addOperation("visit",{Grammars(ne){return ne.children.map(re=>re.visit())},Grammar(ne,re,ge,$e,rt){const Ct=ne.visit();v=d.newGrammar(Ct),re.child(0)&&re.child(0).visit(),$e.children.map(zr=>zr.visit());const Lt=v.build();if(Lt.source=this.source.trimmed(),qr(s,Ct))throw Re(Lt);return s[Ct]=Lt,Lt},SuperGrammar(ne,re){const ge=re.visit();if(ge==="null")v.withSuperGrammar(null);else{if(!s||!qr(s,ge))throw fe(ge,s,re.source);v.withSuperGrammar(s[ge])}},Rule_define(ne,re,ge,$e,rt){T=ne.visit(),U=re.children.map(xn=>xn.visit())[0]||[],!v.defaultStartRule&&v.ensureSuperGrammar()!==gt.ProtoBuiltInRules&&v.withDefaultStartRule(T);const Ct=rt.visit(),Lt=ge.children.map(xn=>xn.visit())[0],zr=this.source.trimmed();return v.define(T,U,Ct,Lt,zr)},Rule_override(ne,re,ge,$e){T=ne.visit(),U=re.children.map(Lt=>Lt.visit())[0]||[];const rt=this.source.trimmed();v.ensureSuperGrammarRuleForOverriding(T,rt),pe=!0;const Ct=$e.visit();return pe=!1,v.override(T,U,Ct,null,rt)},Rule_extend(ne,re,ge,$e){T=ne.visit(),U=re.children.map(Lt=>Lt.visit())[0]||[];const rt=$e.visit(),Ct=this.source.trimmed();return v.extend(T,U,rt,null,Ct)},RuleBody(ne,re){return d.alt(...re.visit()).withSource(this.source)},OverrideRuleBody(ne,re){const ge=re.visit(),$e=ge.indexOf(wt);if($e>=0){const rt=ge.slice(0,$e),Ct=ge.slice($e+1);return Ct.forEach(Lt=>{if(Lt===wt)throw Ae(Lt)}),new Pe(v.superGrammar,T,rt,Ct).withSource(this.source)}else return d.alt(...ge).withSource(this.source)},Formals(ne,re,ge){return re.visit()},Params(ne,re,ge){return re.visit()},Alt(ne){return d.alt(...ne.visit()).withSource(this.source)},TopLevelTerm_inline(ne,re){const ge=T+"_"+re.visit(),$e=ne.visit(),rt=this.source.trimmed(),Ct=!(v.superGrammar&&v.superGrammar.rules[ge]);pe&&!Ct?v.override(ge,U,$e,null,rt):v.define(ge,U,$e,null,rt);const Lt=U.map(zr=>d.app(zr));return d.app(ge,Lt).withSource($e.source)},OverrideTopLevelTerm_superSplice(ne){return wt},Seq(ne){return d.seq(...ne.children.map(re=>re.visit())).withSource(this.source)},Iter_star(ne,re){return d.star(ne.visit()).withSource(this.source)},Iter_plus(ne,re){return d.plus(ne.visit()).withSource(this.source)},Iter_opt(ne,re){return d.opt(ne.visit()).withSource(this.source)},Pred_not(ne,re){return d.not(re.visit()).withSource(this.source)},Pred_lookahead(ne,re){return d.lookahead(re.visit()).withSource(this.source)},Lex_lex(ne,re){return d.lex(re.visit()).withSource(this.source)},Base_application(ne,re){const ge=re.children.map($e=>$e.visit())[0]||[];return d.app(ne.visit(),ge).withSource(this.source)},Base_range(ne,re,ge){return d.range(ne.visit(),ge.visit()).withSource(this.source)},Base_terminal(ne){return d.terminal(ne.visit()).withSource(this.source)},Base_paren(ne,re,ge){return re.visit()},ruleDescr(ne,re,ge){return re.visit()},ruleDescrText(ne){return this.sourceString.trim()},caseName(ne,re,ge,$e,rt){return ge.visit()},name(ne,re){return this.sourceString},nameFirst(ne){},nameRest(ne){},terminal(ne,re,ge){return re.children.map($e=>$e.visit()).join("")},oneCharTerminal(ne,re,ge){return re.visit()},escapeChar(ne){try{return j(this.sourceString)}catch(re){throw re instanceof RangeError&&re.message.startsWith("Invalid code point ")?L(ne):re}},NonemptyListOf(ne,re,ge){return[ne.visit()].concat(ge.children.map($e=>$e.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(p).visit()}var lr=ft(["grammar",{source:`OperationsAndAttributes {

  AttributeSignature =
    name

  OperationSignature =
    name Formals?

  Formals
    = "(" ListOf<name, ","> ")"

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Xr(gt.BuiltInRules),Ar(lr);function Xr(p){const s={empty(){return this.iteration()},nonEmpty(l,d,v){return this.iteration([l].concat(v.children))}};Mt.BuiltInSemantics=Mt.createSemantics(p,null).addOperation("asIteration",{emptyListOf:s.empty,nonemptyListOf:s.nonEmpty,EmptyListOf:s.empty,NonemptyListOf:s.nonEmpty})}function Ar(p){Mt.prototypeGrammarSemantics=p.createSemantics().addOperation("parse",{AttributeSignature(s){return{name:s.parse(),formals:[]}},OperationSignature(s,l){return{name:s.parse(),formals:l.children.map(d=>d.parse())[0]||[]}},Formals(s,l,d){return l.asIteration().children.map(v=>v.parse())},name(s,l){return this.sourceString}}),Mt.prototypeGrammar=p}function ko(p){let s=0;const l=[0],d=()=>l[l.length-1],v={},T=/( *).*(?:$|\r?\n|\r)/g;let U;for(;(U=T.exec(p))!=null;){const[pe,oe]=U;if(pe.length===0)break;const Se=oe.length,ne=d(),re=s+Se;if(Se>ne)l.push(Se),v[re]=1;else if(Se<ne){const ge=l.length;for(;d()!==Se;)l.pop();v[re]=-1*(ge-l.length)}s+=pe.length}return l.length>1&&(v[s]=1-l.length),v}const xs="an indented block",Is="a dedent",ks=1114112;class So extends He{constructor(s){super(s.input),this.state=s}_indentationAt(s){return this.state.userData[s]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),ks):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),ks):super.nextCodePoint()}}class Ss extends W{constructor(s=!0){super(),this.isIndent=s}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:l}=s,d=s.userData;s.doNotMemoize=!0;const v=l.pos,T=this.isIndent?1:-1;return(d[v]||0)*T>0?(s.userData=Object.create(d),s.userData[v]-=T,s.pushBinding(new ze(0),v),!0):(s.processFailure(v,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(s,l){}_isNullable(s,l){return!1}assertChoicesHaveUniformArity(s){}assertIteratedExprsAreNotNullable(s){}introduceParams(s){return this}substituteParams(s){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(s){const l=this.isIndent?xs:Is;return new yt(this,l,"description")}}const _o=new Z("indent"),Co=new Z("dedent"),Eo=new Pe(Pt,"any",[_o,Co],[]),_s=new zt().newGrammar("IndentationSensitive").withSuperGrammar(Pt).define("indent",[],new Ss(!0),xs,void 0,!0).define("dedent",[],new Ss(!1),Is,void 0,!0).extend("any",[],Eo,"any character",void 0).build();Object.assign(_s,{_matchStateInitializer(p){p.userData=ko(p.input),p.inputStream=new So(p)},supportsIncrementalParsing:!1});const Ao="17.1.0";gt.initApplicationParser(Fr,Sr);const To=p=>!!p.constructor&&typeof p.constructor.isBuffer=="function"&&p.constructor.isBuffer(p);function Oo(p,s){const l=Fr.match(p,"Grammars");if(l.failed())throw S(l);return Sr(l,s)}function Ro(p,s){const l=Cs(p,s),d=Object.keys(l);if(d.length===0)throw new Error("Missing grammar definition");if(d.length>1){const T=l[d[1]].source;throw new Error(Qt(T.sourceString,T.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return l[d[0]]}function Cs(p,s){const l=Object.create(s||{});if(typeof p!="string")if(To(p))p=p.toString();else throw new TypeError("Expected string as first argument, got "+J(p));return Oo(p,l),l}return cr.ExperimentalIndentationSensitive=_s,cr._buildGrammar=Sr,cr.grammar=Ro,cr.grammars=Cs,cr.makeRecipe=ft,cr.ohmGrammar=Fr,cr.pexprs=Ri,cr.version=Ao,cr}var qi,Qs;function po(){if(Qs)return qi;Qs=1;const{makeRecipe:t}=Bu();return qi=t(["grammar",{source:`PEP508 {
    // Grammar adapted from https://peps.python.org/pep-0508/#complete-grammar
    // (naming retained, just reordered and camelCased)
    File = ListOf<Line, "\\n">
    Line = Req? comment?
    Req = UrlReq | NameReq | RequirementsReq | ConstraintsReq

    NameReq = Name Extras? VersionSpec QuotedMarker?
    UrlReq  = Name Extras? UrlSpec (space QuotedMarker)?
    Extras  = "[" ListOf<identifier, ","> "]"
    Name    = identifier
    identifier    = alnum identifierEnd*
    identifierEnd = alnum -- single
                  | (("-" | "_" | "." )* alnum) -- multi

    // Requirements based on other requirements files (not in PEP 508, but supported by pip)
    RequirementsReq = "-r" filePath
    ConstraintsReq  = "-c" filePath
    filePath        = (~("\\n" | "#") any)+

    UrlSpec      = "@" uriReference
    uriReference = uri | relativeRef
    uri          = scheme ":" hierPart? ("?" query )? ("#" fragment)?
    hierPart     = ("//" authority pathAbempty) -- abempty
                 | pathAbsolute -- absolute
                 | pathRootless -- rootless
    absoluteUri  = scheme ":" hierPart? ("?" query )?
    relativeRef  = relativePart? ("?" query )? ("#" fragment )?
    relativePart = "//" authority pathAbempty -- abempty
                 | pathAbsolute -- absolute
                 | pathNoscheme -- noscheme
    scheme       = letter (alnum | "+" | "-" | ".")*
    authority    = (userinfo "@" )? host (":" port )?
    userinfo     = (unreserved | pctEncoded | subDelims | ":")*
    host         = ipLiteral | ipv4Address | regName
    port         = digit*
    ipLiteral    = "[" (ipv6Address | ipvFuture) "]"
    ipvFuture    = "v" hexdig+ "." (unreserved | subDelims | ":")+
    ipv6Address  = (hexdig | ":" | ".")+ // dumbed down a lot, mostly due to lack of quantifier support in Ohm
    ipv4Address  = decOctet "." decOctet "." decOctet "." decOctet
    nz           = ~"0" digit
    decOctet     = digit -- zeroToNine
                 | nz digit -- tenToNinetyNine
                 | "1" digit digit -- oneHundredToOneNinetyNine
                 | "2" ("0" | "1" | "2" | "3" | "4") digit -- twoHundredToTwoFortyNine
                 | "25" ("0" | "1" | "2" | "3" | "4" | "5") -- twoFiftyToTwoFiftyFive
    regName      = (unreserved | pctEncoded | subDelims)*
    path         = pathAbempty // begins with "/" or is empty
                 | pathAbsolute // begins with "/" but not "//"
                 | pathNoscheme // begins with a non-colon segment
                 | pathRootless // begins with a segment
    pathAbempty  = ("/" segment)*
    pathAbsolute = "/" (segmentNz ("/" segment)* )?
    pathNoscheme = segmentNzNc ("/" segment)*
    pathRootless = segmentNz ("/" segment)*
    segment      = pchar*
    segmentNz    = pchar+
    segmentNzNc  = (unreserved | pctEncoded | subDelims | "@")+ // non-zero-length segment without any colon ":"
    pchar        = unreserved | pctEncoded | subDelims | ":" | "@"
    query        = (pchar | "/" | "?")*
    fragment     = (pchar | "/" | "?")*
    pctEncoded   = "%" hexdig
    unreserved   = alnum | "-" | "." | "_" | "~"
    reserved     = genDelims | subDelims
    genDelims    = ":" | "/" | "?" | "#" | "(" | ")?" | "@"
    subDelims    = "!" | "$" | "&" | "'" | "(" | ")" | "*" | "+" | "," | ";" | "="
    hexdig       = digit | "a" | "A" | "b" | "B" | "c" | "C" | "d" | "D" | "e" | "E" | "f" | "F"

    // Environment markers
    QuotedMarker  = ";" Marker
    Marker        = MarkerOr
    MarkerOr      = MarkerAnd "or" MarkerAnd -- node
                  | MarkerAnd -- leaf
    MarkerAnd     = MarkerExpr "and" MarkerExpr -- node
                  | MarkerExpr -- leaf
    MarkerExpr    = MarkerVar markerOp MarkerVar -- leaf
                  | "(" Marker ")" -- node
    MarkerVar     = envVar | pythonStr
    markerOp      = versionCmp -- versionCmp
                  | "in" -- in
                  | ("not" space+ "in") -- notIn
    pythonStr     = "'" (pythonStrChar | "\\"")* "'"
                  | "\\"" (pythonStrChar | "'")* "\\""
    pythonStrChar = space | alnum | "(" | ")" | "." | "{" | "}" | "-" | "_" | "*" | "#" | ":" | ";" | "," | "/" | "?"
                  | "[" | "]" | "!" | "~" | "\`" | "@" | "$" | "%" | "^" | "&" | "=" | "+" | "|" | "<" | ">"
    envVar        = "python_version" | "python_full_version" | "os_name" | "sys_platform" | "platform_release"
                  | "platform_system" | "platform_version" | "platform_machine" | "platform_python_implementation"
                  | "implementation_name" | "implementation_version" | "extra" // ONLY when defined by a containing layer

    // Version specifiers, defined in PEP 440 (https://peps.python.org/pep-0440/)
    VersionSpec   = "(" VersionMany ")" -- parenthesized
                  | VersionMany -- direct
    VersionMany   = ListOf<VersionOne, ",">
    VersionOne    = versionCmp version
    versionCmp    = "<=" | "<" | "!=" | "==" | ">=" | ">" | "~=" | "==="
    version       = (alnum | "-" | "_" | "." | "*" | "+" | "!" )+

    comment = "#" (~"\\n" any)*

    space := " " | "\\t" // Overriding Ohm's definition of whitespace to kick out newlines and other Unicode whitespace

    // Loose grammar for parsing unfinished requirements - focused on extracting the name, extras, and version spec
    LooseFile         = ListOf<LooseLine, "\\n">
    LooseLine         = LooseReq comment?
    LooseReq          = LooseNonNameReq | LooseNameReq
    LooseNameReq      = Name LooseExtras? LooseVersionSpec LooseQuotedMarker?
    LooseNonNameReq   = (~(~(Name "@") Name) looseAnything) // Non-name req can start with Name only if followed by "@"
    LooseExtras       = "[" ListOf<identifier, ","> ","* "]"?
    LooseQuotedMarker = ";" looseAnything
    LooseVersionSpec  = "(" LooseVersionMany ")"? -- parenthesized
                      | LooseVersionMany -- direct
    LooseVersionMany  = ListOf<LooseVersionOne, ","> ","*
    LooseVersionOne   = looseVersionCmp looseVersion?
    looseVersionCmp   = ("<" | "=" | "!" | ">" | "~")+
    looseVersion      = (alnum | "-" | "_" | "." | "*" | "+" | "!" )+
    looseAnything     = (~("\\n" | "#") any)* // Any non-comment line content
}`},"PEP508",null,"File",{File:["define",{sourceInterval:[148,173]},null,[],["app",{sourceInterval:[155,173]},"ListOf",[["app",{sourceInterval:[162,166]},"Line",[]],["terminal",{sourceInterval:[168,172]},`
`]]]],Line:["define",{sourceInterval:[178,198]},null,[],["seq",{sourceInterval:[185,198]},["opt",{sourceInterval:[185,189]},["app",{sourceInterval:[185,188]},"Req",[]]],["opt",{sourceInterval:[190,198]},["app",{sourceInterval:[190,197]},"comment",[]]]]],Req:["define",{sourceInterval:[203,260]},null,[],["alt",{sourceInterval:[209,260]},["app",{sourceInterval:[209,215]},"UrlReq",[]],["app",{sourceInterval:[218,225]},"NameReq",[]],["app",{sourceInterval:[228,243]},"RequirementsReq",[]],["app",{sourceInterval:[246,260]},"ConstraintsReq",[]]]],NameReq:["define",{sourceInterval:[266,314]},null,[],["seq",{sourceInterval:[276,314]},["app",{sourceInterval:[276,280]},"Name",[]],["opt",{sourceInterval:[281,288]},["app",{sourceInterval:[281,287]},"Extras",[]]],["app",{sourceInterval:[289,300]},"VersionSpec",[]],["opt",{sourceInterval:[301,314]},["app",{sourceInterval:[301,313]},"QuotedMarker",[]]]]],UrlReq:["define",{sourceInterval:[319,371]},null,[],["seq",{sourceInterval:[329,371]},["app",{sourceInterval:[329,333]},"Name",[]],["opt",{sourceInterval:[334,341]},["app",{sourceInterval:[334,340]},"Extras",[]]],["app",{sourceInterval:[342,349]},"UrlSpec",[]],["opt",{sourceInterval:[350,371]},["seq",{sourceInterval:[351,369]},["app",{sourceInterval:[351,356]},"space",[]],["app",{sourceInterval:[357,369]},"QuotedMarker",[]]]]]],Extras:["define",{sourceInterval:[376,417]},null,[],["seq",{sourceInterval:[386,417]},["terminal",{sourceInterval:[386,389]},"["],["app",{sourceInterval:[390,413]},"ListOf",[["app",{sourceInterval:[397,407]},"identifier",[]],["terminal",{sourceInterval:[409,412]},","]]],["terminal",{sourceInterval:[414,417]},"]"]]],Name:["define",{sourceInterval:[422,442]},null,[],["app",{sourceInterval:[432,442]},"identifier",[]]],identifier:["define",{sourceInterval:[447,483]},null,[],["seq",{sourceInterval:[463,483]},["app",{sourceInterval:[463,468]},"alnum",[]],["star",{sourceInterval:[469,483]},["app",{sourceInterval:[469,482]},"identifierEnd",[]]]]],identifierEnd_single:["define",{sourceInterval:[504,519]},null,[],["app",{sourceInterval:[504,509]},"alnum",[]]],identifierEnd_multi:["define",{sourceInterval:[540,576]},null,[],["seq",{sourceInterval:[540,567]},["star",{sourceInterval:[541,560]},["alt",{sourceInterval:[542,557]},["terminal",{sourceInterval:[542,545]},"-"],["terminal",{sourceInterval:[548,551]},"_"],["terminal",{sourceInterval:[554,557]},"."]]],["app",{sourceInterval:[561,566]},"alnum",[]]]],identifierEnd:["define",{sourceInterval:[488,576]},null,[],["alt",{sourceInterval:[504,576]},["app",{sourceInterval:[504,509]},"identifierEnd_single",[]],["app",{sourceInterval:[540,567]},"identifierEnd_multi",[]]]],RequirementsReq:["define",{sourceInterval:[675,706]},null,[],["seq",{sourceInterval:[693,706]},["terminal",{sourceInterval:[693,697]},"-r"],["app",{sourceInterval:[698,706]},"filePath",[]]]],ConstraintsReq:["define",{sourceInterval:[711,742]},null,[],["seq",{sourceInterval:[729,742]},["terminal",{sourceInterval:[729,733]},"-c"],["app",{sourceInterval:[734,742]},"filePath",[]]]],filePath:["define",{sourceInterval:[747,785]},null,[],["plus",{sourceInterval:[765,785]},["seq",{sourceInterval:[766,783]},["not",{sourceInterval:[766,779]},["alt",{sourceInterval:[768,778]},["terminal",{sourceInterval:[768,772]},`
`],["terminal",{sourceInterval:[775,778]},"#"]]],["app",{sourceInterval:[780,783]},"any",[]]]]],UrlSpec:["define",{sourceInterval:[791,822]},null,[],["seq",{sourceInterval:[806,822]},["terminal",{sourceInterval:[806,809]},"@"],["app",{sourceInterval:[810,822]},"uriReference",[]]]],uriReference:["define",{sourceInterval:[827,859]},null,[],["alt",{sourceInterval:[842,859]},["app",{sourceInterval:[842,845]},"uri",[]],["app",{sourceInterval:[848,859]},"relativeRef",[]]]],uri:["define",{sourceInterval:[864,929]},null,[],["seq",{sourceInterval:[879,929]},["app",{sourceInterval:[879,885]},"scheme",[]],["terminal",{sourceInterval:[886,889]},":"],["opt",{sourceInterval:[890,899]},["app",{sourceInterval:[890,898]},"hierPart",[]]],["opt",{sourceInterval:[900,913]},["seq",{sourceInterval:[901,910]},["terminal",{sourceInterval:[901,904]},"?"],["app",{sourceInterval:[905,910]},"query",[]]]],["opt",{sourceInterval:[914,929]},["seq",{sourceInterval:[915,927]},["terminal",{sourceInterval:[915,918]},"#"],["app",{sourceInterval:[919,927]},"fragment",[]]]]]],hierPart_abempty:["define",{sourceInterval:[949,988]},null,[],["seq",{sourceInterval:[949,977]},["terminal",{sourceInterval:[950,954]},"//"],["app",{sourceInterval:[955,964]},"authority",[]],["app",{sourceInterval:[965,976]},"pathAbempty",[]]]],hierPart_absolute:["define",{sourceInterval:[1008,1032]},null,[],["app",{sourceInterval:[1008,1020]},"pathAbsolute",[]]],hierPart_rootless:["define",{sourceInterval:[1052,1076]},null,[],["app",{sourceInterval:[1052,1064]},"pathRootless",[]]],hierPart:["define",{sourceInterval:[934,1076]},null,[],["alt",{sourceInterval:[949,1076]},["app",{sourceInterval:[949,977]},"hierPart_abempty",[]],["app",{sourceInterval:[1008,1020]},"hierPart_absolute",[]],["app",{sourceInterval:[1052,1064]},"hierPart_rootless",[]]]],absoluteUri:["define",{sourceInterval:[1081,1130]},null,[],["seq",{sourceInterval:[1096,1130]},["app",{sourceInterval:[1096,1102]},"scheme",[]],["terminal",{sourceInterval:[1103,1106]},":"],["opt",{sourceInterval:[1107,1116]},["app",{sourceInterval:[1107,1115]},"hierPart",[]]],["opt",{sourceInterval:[1117,1130]},["seq",{sourceInterval:[1118,1127]},["terminal",{sourceInterval:[1118,1121]},"?"],["app",{sourceInterval:[1122,1127]},"query",[]]]]]],relativeRef:["define",{sourceInterval:[1135,1194]},null,[],["seq",{sourceInterval:[1150,1194]},["opt",{sourceInterval:[1150,1163]},["app",{sourceInterval:[1150,1162]},"relativePart",[]]],["opt",{sourceInterval:[1164,1177]},["seq",{sourceInterval:[1165,1174]},["terminal",{sourceInterval:[1165,1168]},"?"],["app",{sourceInterval:[1169,1174]},"query",[]]]],["opt",{sourceInterval:[1178,1194]},["seq",{sourceInterval:[1179,1191]},["terminal",{sourceInterval:[1179,1182]},"#"],["app",{sourceInterval:[1183,1191]},"fragment",[]]]]]],relativePart_abempty:["define",{sourceInterval:[1214,1251]},null,[],["seq",{sourceInterval:[1214,1240]},["terminal",{sourceInterval:[1214,1218]},"//"],["app",{sourceInterval:[1219,1228]},"authority",[]],["app",{sourceInterval:[1229,1240]},"pathAbempty",[]]]],relativePart_absolute:["define",{sourceInterval:[1271,1295]},null,[],["app",{sourceInterval:[1271,1283]},"pathAbsolute",[]]],relativePart_noscheme:["define",{sourceInterval:[1315,1339]},null,[],["app",{sourceInterval:[1315,1327]},"pathNoscheme",[]]],relativePart:["define",{sourceInterval:[1199,1339]},null,[],["alt",{sourceInterval:[1214,1339]},["app",{sourceInterval:[1214,1240]},"relativePart_abempty",[]],["app",{sourceInterval:[1271,1283]},"relativePart_absolute",[]],["app",{sourceInterval:[1315,1327]},"relativePart_noscheme",[]]]],scheme:["define",{sourceInterval:[1344,1392]},null,[],["seq",{sourceInterval:[1359,1392]},["app",{sourceInterval:[1359,1365]},"letter",[]],["star",{sourceInterval:[1366,1392]},["alt",{sourceInterval:[1367,1390]},["app",{sourceInterval:[1367,1372]},"alnum",[]],["terminal",{sourceInterval:[1375,1378]},"+"],["terminal",{sourceInterval:[1381,1384]},"-"],["terminal",{sourceInterval:[1387,1390]},"."]]]]],authority:["define",{sourceInterval:[1397,1446]},null,[],["seq",{sourceInterval:[1412,1446]},["opt",{sourceInterval:[1412,1428]},["seq",{sourceInterval:[1413,1425]},["app",{sourceInterval:[1413,1421]},"userinfo",[]],["terminal",{sourceInterval:[1422,1425]},"@"]]],["app",{sourceInterval:[1429,1433]},"host",[]],["opt",{sourceInterval:[1434,1446]},["seq",{sourceInterval:[1435,1443]},["terminal",{sourceInterval:[1435,1438]},":"],["app",{sourceInterval:[1439,1443]},"port",[]]]]]],userinfo:["define",{sourceInterval:[1451,1510]},null,[],["star",{sourceInterval:[1466,1510]},["alt",{sourceInterval:[1467,1508]},["app",{sourceInterval:[1467,1477]},"unreserved",[]],["app",{sourceInterval:[1480,1490]},"pctEncoded",[]],["app",{sourceInterval:[1493,1502]},"subDelims",[]],["terminal",{sourceInterval:[1505,1508]},":"]]]],host:["define",{sourceInterval:[1515,1563]},null,[],["alt",{sourceInterval:[1530,1563]},["app",{sourceInterval:[1530,1539]},"ipLiteral",[]],["app",{sourceInterval:[1542,1553]},"ipv4Address",[]],["app",{sourceInterval:[1556,1563]},"regName",[]]]],port:["define",{sourceInterval:[1568,1589]},null,[],["star",{sourceInterval:[1583,1589]},["app",{sourceInterval:[1583,1588]},"digit",[]]]],ipLiteral:["define",{sourceInterval:[1594,1642]},null,[],["seq",{sourceInterval:[1609,1642]},["terminal",{sourceInterval:[1609,1612]},"["],["alt",{sourceInterval:[1614,1637]},["app",{sourceInterval:[1614,1625]},"ipv6Address",[]],["app",{sourceInterval:[1628,1637]},"ipvFuture",[]]],["terminal",{sourceInterval:[1639,1642]},"]"]]],ipvFuture:["define",{sourceInterval:[1647,1709]},null,[],["seq",{sourceInterval:[1662,1709]},["terminal",{sourceInterval:[1662,1665]},"v"],["plus",{sourceInterval:[1666,1673]},["app",{sourceInterval:[1666,1672]},"hexdig",[]]],["terminal",{sourceInterval:[1674,1677]},"."],["plus",{sourceInterval:[1678,1709]},["alt",{sourceInterval:[1679,1707]},["app",{sourceInterval:[1679,1689]},"unreserved",[]],["app",{sourceInterval:[1692,1701]},"subDelims",[]],["terminal",{sourceInterval:[1704,1707]},":"]]]]],ipv6Address:["define",{sourceInterval:[1714,1750]},null,[],["plus",{sourceInterval:[1729,1750]},["alt",{sourceInterval:[1730,1748]},["app",{sourceInterval:[1730,1736]},"hexdig",[]],["terminal",{sourceInterval:[1739,1742]},":"],["terminal",{sourceInterval:[1745,1748]},"."]]]],ipv4Address:["define",{sourceInterval:[1825,1887]},null,[],["seq",{sourceInterval:[1840,1887]},["app",{sourceInterval:[1840,1848]},"decOctet",[]],["terminal",{sourceInterval:[1849,1852]},"."],["app",{sourceInterval:[1853,1861]},"decOctet",[]],["terminal",{sourceInterval:[1862,1865]},"."],["app",{sourceInterval:[1866,1874]},"decOctet",[]],["terminal",{sourceInterval:[1875,1878]},"."],["app",{sourceInterval:[1879,1887]},"decOctet",[]]]],nz:["define",{sourceInterval:[1892,1917]},null,[],["seq",{sourceInterval:[1907,1917]},["not",{sourceInterval:[1907,1911]},["terminal",{sourceInterval:[1908,1911]},"0"]],["app",{sourceInterval:[1912,1917]},"digit",[]]]],decOctet_zeroToNine:["define",{sourceInterval:[1937,1956]},null,[],["app",{sourceInterval:[1937,1942]},"digit",[]]],decOctet_tenToNinetyNine:["define",{sourceInterval:[1976,2003]},null,[],["seq",{sourceInterval:[1976,1984]},["app",{sourceInterval:[1976,1978]},"nz",[]],["app",{sourceInterval:[1979,1984]},"digit",[]]]],decOctet_oneHundredToOneNinetyNine:["define",{sourceInterval:[2023,2067]},null,[],["seq",{sourceInterval:[2023,2038]},["terminal",{sourceInterval:[2023,2026]},"1"],["app",{sourceInterval:[2027,2032]},"digit",[]],["app",{sourceInterval:[2033,2038]},"digit",[]]]],decOctet_twoHundredToTwoFortyNine:["define",{sourceInterval:[2087,2154]},null,[],["seq",{sourceInterval:[2087,2126]},["terminal",{sourceInterval:[2087,2090]},"2"],["alt",{sourceInterval:[2092,2119]},["terminal",{sourceInterval:[2092,2095]},"0"],["terminal",{sourceInterval:[2098,2101]},"1"],["terminal",{sourceInterval:[2104,2107]},"2"],["terminal",{sourceInterval:[2110,2113]},"3"],["terminal",{sourceInterval:[2116,2119]},"4"]],["app",{sourceInterval:[2121,2126]},"digit",[]]]],decOctet_twoFiftyToTwoFiftyFive:["define",{sourceInterval:[2174,2240]},null,[],["seq",{sourceInterval:[2174,2214]},["terminal",{sourceInterval:[2174,2178]},"25"],["alt",{sourceInterval:[2180,2213]},["terminal",{sourceInterval:[2180,2183]},"0"],["terminal",{sourceInterval:[2186,2189]},"1"],["terminal",{sourceInterval:[2192,2195]},"2"],["terminal",{sourceInterval:[2198,2201]},"3"],["terminal",{sourceInterval:[2204,2207]},"4"],["terminal",{sourceInterval:[2210,2213]},"5"]]]],decOctet:["define",{sourceInterval:[1922,2240]},null,[],["alt",{sourceInterval:[1937,2240]},["app",{sourceInterval:[1937,1942]},"decOctet_zeroToNine",[]],["app",{sourceInterval:[1976,1984]},"decOctet_tenToNinetyNine",[]],["app",{sourceInterval:[2023,2038]},"decOctet_oneHundredToOneNinetyNine",[]],["app",{sourceInterval:[2087,2126]},"decOctet_twoHundredToTwoFortyNine",[]],["app",{sourceInterval:[2174,2214]},"decOctet_twoFiftyToTwoFiftyFive",[]]]],regName:["define",{sourceInterval:[2245,2298]},null,[],["star",{sourceInterval:[2260,2298]},["alt",{sourceInterval:[2261,2296]},["app",{sourceInterval:[2261,2271]},"unreserved",[]],["app",{sourceInterval:[2274,2284]},"pctEncoded",[]],["app",{sourceInterval:[2287,2296]},"subDelims",[]]]]],path:["define",{sourceInterval:[2303,2523]},null,[],["alt",{sourceInterval:[2318,2523]},["app",{sourceInterval:[2318,2329]},"pathAbempty",[]],["app",{sourceInterval:[2380,2392]},"pathAbsolute",[]],["app",{sourceInterval:[2444,2456]},"pathNoscheme",[]],["app",{sourceInterval:[2511,2523]},"pathRootless",[]]]],pathAbempty:["define",{sourceInterval:[2553,2582]},null,[],["star",{sourceInterval:[2568,2582]},["seq",{sourceInterval:[2569,2580]},["terminal",{sourceInterval:[2569,2572]},"/"],["app",{sourceInterval:[2573,2580]},"segment",[]]]]],pathAbsolute:["define",{sourceInterval:[2587,2634]},null,[],["seq",{sourceInterval:[2602,2634]},["terminal",{sourceInterval:[2602,2605]},"/"],["opt",{sourceInterval:[2606,2634]},["seq",{sourceInterval:[2607,2631]},["app",{sourceInterval:[2607,2616]},"segmentNz",[]],["star",{sourceInterval:[2617,2631]},["seq",{sourceInterval:[2618,2629]},["terminal",{sourceInterval:[2618,2621]},"/"],["app",{sourceInterval:[2622,2629]},"segment",[]]]]]]]],pathNoscheme:["define",{sourceInterval:[2639,2680]},null,[],["seq",{sourceInterval:[2654,2680]},["app",{sourceInterval:[2654,2665]},"segmentNzNc",[]],["star",{sourceInterval:[2666,2680]},["seq",{sourceInterval:[2667,2678]},["terminal",{sourceInterval:[2667,2670]},"/"],["app",{sourceInterval:[2671,2678]},"segment",[]]]]]],pathRootless:["define",{sourceInterval:[2685,2724]},null,[],["seq",{sourceInterval:[2700,2724]},["app",{sourceInterval:[2700,2709]},"segmentNz",[]],["star",{sourceInterval:[2710,2724]},["seq",{sourceInterval:[2711,2722]},["terminal",{sourceInterval:[2711,2714]},"/"],["app",{sourceInterval:[2715,2722]},"segment",[]]]]]],segment:["define",{sourceInterval:[2729,2750]},null,[],["star",{sourceInterval:[2744,2750]},["app",{sourceInterval:[2744,2749]},"pchar",[]]]],segmentNz:["define",{sourceInterval:[2755,2776]},null,[],["plus",{sourceInterval:[2770,2776]},["app",{sourceInterval:[2770,2775]},"pchar",[]]]],segmentNzNc:["define",{sourceInterval:[2781,2840]},null,[],["plus",{sourceInterval:[2796,2840]},["alt",{sourceInterval:[2797,2838]},["app",{sourceInterval:[2797,2807]},"unreserved",[]],["app",{sourceInterval:[2810,2820]},"pctEncoded",[]],["app",{sourceInterval:[2823,2832]},"subDelims",[]],["terminal",{sourceInterval:[2835,2838]},"@"]]]],pchar:["define",{sourceInterval:[2894,2956]},null,[],["alt",{sourceInterval:[2909,2956]},["app",{sourceInterval:[2909,2919]},"unreserved",[]],["app",{sourceInterval:[2922,2932]},"pctEncoded",[]],["app",{sourceInterval:[2935,2944]},"subDelims",[]],["terminal",{sourceInterval:[2947,2950]},":"],["terminal",{sourceInterval:[2953,2956]},"@"]]],query:["define",{sourceInterval:[2961,2996]},null,[],["star",{sourceInterval:[2976,2996]},["alt",{sourceInterval:[2977,2994]},["app",{sourceInterval:[2977,2982]},"pchar",[]],["terminal",{sourceInterval:[2985,2988]},"/"],["terminal",{sourceInterval:[2991,2994]},"?"]]]],fragment:["define",{sourceInterval:[3001,3036]},null,[],["star",{sourceInterval:[3016,3036]},["alt",{sourceInterval:[3017,3034]},["app",{sourceInterval:[3017,3022]},"pchar",[]],["terminal",{sourceInterval:[3025,3028]},"/"],["terminal",{sourceInterval:[3031,3034]},"?"]]]],pctEncoded:["define",{sourceInterval:[3041,3066]},null,[],["seq",{sourceInterval:[3056,3066]},["terminal",{sourceInterval:[3056,3059]},"%"],["app",{sourceInterval:[3060,3066]},"hexdig",[]]]],unreserved:["define",{sourceInterval:[3071,3115]},null,[],["alt",{sourceInterval:[3086,3115]},["app",{sourceInterval:[3086,3091]},"alnum",[]],["terminal",{sourceInterval:[3094,3097]},"-"],["terminal",{sourceInterval:[3100,3103]},"."],["terminal",{sourceInterval:[3106,3109]},"_"],["terminal",{sourceInterval:[3112,3115]},"~"]]],reserved:["define",{sourceInterval:[3120,3156]},null,[],["alt",{sourceInterval:[3135,3156]},["app",{sourceInterval:[3135,3144]},"genDelims",[]],["app",{sourceInterval:[3147,3156]},"subDelims",[]]]],genDelims:["define",{sourceInterval:[3161,3216]},null,[],["alt",{sourceInterval:[3176,3216]},["terminal",{sourceInterval:[3176,3179]},":"],["terminal",{sourceInterval:[3182,3185]},"/"],["terminal",{sourceInterval:[3188,3191]},"?"],["terminal",{sourceInterval:[3194,3197]},"#"],["terminal",{sourceInterval:[3200,3203]},"("],["terminal",{sourceInterval:[3206,3210]},")?"],["terminal",{sourceInterval:[3213,3216]},"@"]]],subDelims:["define",{sourceInterval:[3221,3299]},null,[],["alt",{sourceInterval:[3236,3299]},["terminal",{sourceInterval:[3236,3239]},"!"],["terminal",{sourceInterval:[3242,3245]},"$"],["terminal",{sourceInterval:[3248,3251]},"&"],["terminal",{sourceInterval:[3254,3257]},"'"],["terminal",{sourceInterval:[3260,3263]},"("],["terminal",{sourceInterval:[3266,3269]},")"],["terminal",{sourceInterval:[3272,3275]},"*"],["terminal",{sourceInterval:[3278,3281]},"+"],["terminal",{sourceInterval:[3284,3287]},","],["terminal",{sourceInterval:[3290,3293]},";"],["terminal",{sourceInterval:[3296,3299]},"="]]],hexdig:["define",{sourceInterval:[3304,3396]},null,[],["alt",{sourceInterval:[3319,3396]},["app",{sourceInterval:[3319,3324]},"digit",[]],["terminal",{sourceInterval:[3327,3330]},"a"],["terminal",{sourceInterval:[3333,3336]},"A"],["terminal",{sourceInterval:[3339,3342]},"b"],["terminal",{sourceInterval:[3345,3348]},"B"],["terminal",{sourceInterval:[3351,3354]},"c"],["terminal",{sourceInterval:[3357,3360]},"C"],["terminal",{sourceInterval:[3363,3366]},"d"],["terminal",{sourceInterval:[3369,3372]},"D"],["terminal",{sourceInterval:[3375,3378]},"e"],["terminal",{sourceInterval:[3381,3384]},"E"],["terminal",{sourceInterval:[3387,3390]},"f"],["terminal",{sourceInterval:[3393,3396]},"F"]]],QuotedMarker:["define",{sourceInterval:[3429,3455]},null,[],["seq",{sourceInterval:[3445,3455]},["terminal",{sourceInterval:[3445,3448]},";"],["app",{sourceInterval:[3449,3455]},"Marker",[]]]],Marker:["define",{sourceInterval:[3460,3484]},null,[],["app",{sourceInterval:[3476,3484]},"MarkerOr",[]]],MarkerOr_node:["define",{sourceInterval:[3505,3537]},null,[],["seq",{sourceInterval:[3505,3529]},["app",{sourceInterval:[3505,3514]},"MarkerAnd",[]],["terminal",{sourceInterval:[3515,3519]},"or"],["app",{sourceInterval:[3520,3529]},"MarkerAnd",[]]]],MarkerOr_leaf:["define",{sourceInterval:[3558,3575]},null,[],["app",{sourceInterval:[3558,3567]},"MarkerAnd",[]]],MarkerOr:["define",{sourceInterval:[3489,3575]},null,[],["alt",{sourceInterval:[3505,3575]},["app",{sourceInterval:[3505,3529]},"MarkerOr_node",[]],["app",{sourceInterval:[3558,3567]},"MarkerOr_leaf",[]]]],MarkerAnd_node:["define",{sourceInterval:[3596,3631]},null,[],["seq",{sourceInterval:[3596,3623]},["app",{sourceInterval:[3596,3606]},"MarkerExpr",[]],["terminal",{sourceInterval:[3607,3612]},"and"],["app",{sourceInterval:[3613,3623]},"MarkerExpr",[]]]],MarkerAnd_leaf:["define",{sourceInterval:[3652,3670]},null,[],["app",{sourceInterval:[3652,3662]},"MarkerExpr",[]]],MarkerAnd:["define",{sourceInterval:[3580,3670]},null,[],["alt",{sourceInterval:[3596,3670]},["app",{sourceInterval:[3596,3623]},"MarkerAnd_node",[]],["app",{sourceInterval:[3652,3662]},"MarkerAnd_leaf",[]]]],MarkerExpr_leaf:["define",{sourceInterval:[3691,3727]},null,[],["seq",{sourceInterval:[3691,3719]},["app",{sourceInterval:[3691,3700]},"MarkerVar",[]],["app",{sourceInterval:[3701,3709]},"markerOp",[]],["app",{sourceInterval:[3710,3719]},"MarkerVar",[]]]],MarkerExpr_node:["define",{sourceInterval:[3748,3770]},null,[],["seq",{sourceInterval:[3748,3762]},["terminal",{sourceInterval:[3748,3751]},"("],["app",{sourceInterval:[3752,3758]},"Marker",[]],["terminal",{sourceInterval:[3759,3762]},")"]]],MarkerExpr:["define",{sourceInterval:[3675,3770]},null,[],["alt",{sourceInterval:[3691,3770]},["app",{sourceInterval:[3691,3719]},"MarkerExpr_leaf",[]],["app",{sourceInterval:[3748,3762]},"MarkerExpr_node",[]]]],MarkerVar:["define",{sourceInterval:[3775,3809]},null,[],["alt",{sourceInterval:[3791,3809]},["app",{sourceInterval:[3791,3797]},"envVar",[]],["app",{sourceInterval:[3800,3809]},"pythonStr",[]]]],markerOp_versionCmp:["define",{sourceInterval:[3830,3854]},null,[],["app",{sourceInterval:[3830,3840]},"versionCmp",[]]],markerOp_in:["define",{sourceInterval:[3875,3885]},null,[],["terminal",{sourceInterval:[3875,3879]},"in"]],markerOp_notIn:["define",{sourceInterval:[3906,3934]},null,[],["seq",{sourceInterval:[3906,3925]},["terminal",{sourceInterval:[3907,3912]},"not"],["plus",{sourceInterval:[3913,3919]},["app",{sourceInterval:[3913,3918]},"space",[]]],["terminal",{sourceInterval:[3920,3924]},"in"]]],markerOp:["define",{sourceInterval:[3814,3934]},null,[],["alt",{sourceInterval:[3830,3934]},["app",{sourceInterval:[3830,3840]},"markerOp_versionCmp",[]],["app",{sourceInterval:[3875,3879]},"markerOp_in",[]],["app",{sourceInterval:[3906,3925]},"markerOp_notIn",[]]]],pythonStr:["define",{sourceInterval:[3939,4039]},null,[],["alt",{sourceInterval:[3955,4039]},["seq",{sourceInterval:[3955,3986]},["terminal",{sourceInterval:[3955,3958]},"'"],["star",{sourceInterval:[3959,3982]},["alt",{sourceInterval:[3960,3980]},["app",{sourceInterval:[3960,3973]},"pythonStrChar",[]],["terminal",{sourceInterval:[3976,3980]},'"']]],["terminal",{sourceInterval:[3983,3986]},"'"]],["seq",{sourceInterval:[4007,4039]},["terminal",{sourceInterval:[4007,4011]},'"'],["star",{sourceInterval:[4012,4034]},["alt",{sourceInterval:[4013,4032]},["app",{sourceInterval:[4013,4026]},"pythonStrChar",[]],["terminal",{sourceInterval:[4029,4032]},"'"]]],["terminal",{sourceInterval:[4035,4039]},'"']]]],pythonStrChar:["define",{sourceInterval:[4044,4265]},null,[],["alt",{sourceInterval:[4060,4265]},["app",{sourceInterval:[4060,4065]},"space",[]],["app",{sourceInterval:[4068,4073]},"alnum",[]],["terminal",{sourceInterval:[4076,4079]},"("],["terminal",{sourceInterval:[4082,4085]},")"],["terminal",{sourceInterval:[4088,4091]},"."],["terminal",{sourceInterval:[4094,4097]},"{"],["terminal",{sourceInterval:[4100,4103]},"}"],["terminal",{sourceInterval:[4106,4109]},"-"],["terminal",{sourceInterval:[4112,4115]},"_"],["terminal",{sourceInterval:[4118,4121]},"*"],["terminal",{sourceInterval:[4124,4127]},"#"],["terminal",{sourceInterval:[4130,4133]},":"],["terminal",{sourceInterval:[4136,4139]},";"],["terminal",{sourceInterval:[4142,4145]},","],["terminal",{sourceInterval:[4148,4151]},"/"],["terminal",{sourceInterval:[4154,4157]},"?"],["terminal",{sourceInterval:[4178,4181]},"["],["terminal",{sourceInterval:[4184,4187]},"]"],["terminal",{sourceInterval:[4190,4193]},"!"],["terminal",{sourceInterval:[4196,4199]},"~"],["terminal",{sourceInterval:[4202,4205]},"`"],["terminal",{sourceInterval:[4208,4211]},"@"],["terminal",{sourceInterval:[4214,4217]},"$"],["terminal",{sourceInterval:[4220,4223]},"%"],["terminal",{sourceInterval:[4226,4229]},"^"],["terminal",{sourceInterval:[4232,4235]},"&"],["terminal",{sourceInterval:[4238,4241]},"="],["terminal",{sourceInterval:[4244,4247]},"+"],["terminal",{sourceInterval:[4250,4253]},"|"],["terminal",{sourceInterval:[4256,4259]},"<"],["terminal",{sourceInterval:[4262,4265]},">"]]],envVar:["define",{sourceInterval:[4270,4570]},null,[],["alt",{sourceInterval:[4286,4570]},["terminal",{sourceInterval:[4286,4302]},"python_version"],["terminal",{sourceInterval:[4305,4326]},"python_full_version"],["terminal",{sourceInterval:[4329,4338]},"os_name"],["terminal",{sourceInterval:[4341,4355]},"sys_platform"],["terminal",{sourceInterval:[4358,4376]},"platform_release"],["terminal",{sourceInterval:[4397,4414]},"platform_system"],["terminal",{sourceInterval:[4417,4435]},"platform_version"],["terminal",{sourceInterval:[4438,4456]},"platform_machine"],["terminal",{sourceInterval:[4459,4491]},"platform_python_implementation"],["terminal",{sourceInterval:[4512,4533]},"implementation_name"],["terminal",{sourceInterval:[4536,4560]},"implementation_version"],["terminal",{sourceInterval:[4563,4570]},"extra"]]],VersionSpec_parenthesized:["define",{sourceInterval:[4717,4753]},null,[],["seq",{sourceInterval:[4717,4736]},["terminal",{sourceInterval:[4717,4720]},"("],["app",{sourceInterval:[4721,4732]},"VersionMany",[]],["terminal",{sourceInterval:[4733,4736]},")"]]],VersionSpec_direct:["define",{sourceInterval:[4774,4795]},null,[],["app",{sourceInterval:[4774,4785]},"VersionMany",[]]],VersionSpec:["define",{sourceInterval:[4701,4795]},null,[],["alt",{sourceInterval:[4717,4795]},["app",{sourceInterval:[4717,4736]},"VersionSpec_parenthesized",[]],["app",{sourceInterval:[4774,4785]},"VersionSpec_direct",[]]]],VersionMany:["define",{sourceInterval:[4800,4839]},null,[],["app",{sourceInterval:[4816,4839]},"ListOf",[["app",{sourceInterval:[4823,4833]},"VersionOne",[]],["terminal",{sourceInterval:[4835,4838]},","]]]],VersionOne:["define",{sourceInterval:[4844,4878]},null,[],["seq",{sourceInterval:[4860,4878]},["app",{sourceInterval:[4860,4870]},"versionCmp",[]],["app",{sourceInterval:[4871,4878]},"version",[]]]],versionCmp:["define",{sourceInterval:[4883,4951]},null,[],["alt",{sourceInterval:[4899,4951]},["terminal",{sourceInterval:[4899,4903]},"<="],["terminal",{sourceInterval:[4906,4909]},"<"],["terminal",{sourceInterval:[4912,4916]},"!="],["terminal",{sourceInterval:[4919,4923]},"=="],["terminal",{sourceInterval:[4926,4930]},">="],["terminal",{sourceInterval:[4933,4936]},">"],["terminal",{sourceInterval:[4939,4943]},"~="],["terminal",{sourceInterval:[4946,4951]},"==="]]],version:["define",{sourceInterval:[4956,5017]},null,[],["plus",{sourceInterval:[4972,5017]},["alt",{sourceInterval:[4973,5014]},["app",{sourceInterval:[4973,4978]},"alnum",[]],["terminal",{sourceInterval:[4981,4984]},"-"],["terminal",{sourceInterval:[4987,4990]},"_"],["terminal",{sourceInterval:[4993,4996]},"."],["terminal",{sourceInterval:[4999,5002]},"*"],["terminal",{sourceInterval:[5005,5008]},"+"],["terminal",{sourceInterval:[5011,5014]},"!"]]]],comment:["define",{sourceInterval:[5023,5049]},null,[],["seq",{sourceInterval:[5033,5049]},["terminal",{sourceInterval:[5033,5036]},"#"],["star",{sourceInterval:[5037,5049]},["seq",{sourceInterval:[5038,5047]},["not",{sourceInterval:[5038,5043]},["terminal",{sourceInterval:[5039,5043]},`
`]],["app",{sourceInterval:[5044,5047]},"any",[]]]]]],space:["override",{sourceInterval:[5055,5074]},null,[],["alt",{sourceInterval:[5064,5074]},["terminal",{sourceInterval:[5064,5067]}," "],["terminal",{sourceInterval:[5070,5074]},"	"]]],LooseFile:["define",{sourceInterval:[5291,5334]},null,[],["app",{sourceInterval:[5311,5334]},"ListOf",[["app",{sourceInterval:[5318,5327]},"LooseLine",[]],["terminal",{sourceInterval:[5329,5333]},`
`]]]],LooseLine:["define",{sourceInterval:[5339,5376]},null,[],["seq",{sourceInterval:[5359,5376]},["app",{sourceInterval:[5359,5367]},"LooseReq",[]],["opt",{sourceInterval:[5368,5376]},["app",{sourceInterval:[5368,5375]},"comment",[]]]]],LooseReq:["define",{sourceInterval:[5381,5431]},null,[],["alt",{sourceInterval:[5401,5431]},["app",{sourceInterval:[5401,5416]},"LooseNonNameReq",[]],["app",{sourceInterval:[5419,5431]},"LooseNameReq",[]]]],LooseNameReq:["define",{sourceInterval:[5436,5509]},null,[],["seq",{sourceInterval:[5456,5509]},["app",{sourceInterval:[5456,5460]},"Name",[]],["opt",{sourceInterval:[5461,5473]},["app",{sourceInterval:[5461,5472]},"LooseExtras",[]]],["app",{sourceInterval:[5474,5490]},"LooseVersionSpec",[]],["opt",{sourceInterval:[5491,5509]},["app",{sourceInterval:[5491,5508]},"LooseQuotedMarker",[]]]]],LooseNonNameReq:["define",{sourceInterval:[5514,5569]},null,[],["seq",{sourceInterval:[5534,5569]},["not",{sourceInterval:[5535,5554]},["seq",{sourceInterval:[5537,5553]},["not",{sourceInterval:[5537,5548]},["seq",{sourceInterval:[5539,5547]},["app",{sourceInterval:[5539,5543]},"Name",[]],["terminal",{sourceInterval:[5544,5547]},"@"]]],["app",{sourceInterval:[5549,5553]},"Name",[]]]],["app",{sourceInterval:[5555,5568]},"looseAnything",[]]]],LooseExtras:["define",{sourceInterval:[5634,5691]},null,[],["seq",{sourceInterval:[5654,5691]},["terminal",{sourceInterval:[5654,5657]},"["],["app",{sourceInterval:[5658,5681]},"ListOf",[["app",{sourceInterval:[5665,5675]},"identifier",[]],["terminal",{sourceInterval:[5677,5680]},","]]],["star",{sourceInterval:[5682,5686]},["terminal",{sourceInterval:[5682,5685]},","]],["opt",{sourceInterval:[5687,5691]},["terminal",{sourceInterval:[5687,5690]},"]"]]]],LooseQuotedMarker:["define",{sourceInterval:[5696,5733]},null,[],["seq",{sourceInterval:[5716,5733]},["terminal",{sourceInterval:[5716,5719]},";"],["app",{sourceInterval:[5720,5733]},"looseAnything",[]]]],LooseVersionSpec_parenthesized:["define",{sourceInterval:[5758,5800]},null,[],["seq",{sourceInterval:[5758,5783]},["terminal",{sourceInterval:[5758,5761]},"("],["app",{sourceInterval:[5762,5778]},"LooseVersionMany",[]],["opt",{sourceInterval:[5779,5783]},["terminal",{sourceInterval:[5779,5782]},")"]]]],LooseVersionSpec_direct:["define",{sourceInterval:[5825,5851]},null,[],["app",{sourceInterval:[5825,5841]},"LooseVersionMany",[]]],LooseVersionSpec:["define",{sourceInterval:[5738,5851]},null,[],["alt",{sourceInterval:[5758,5851]},["app",{sourceInterval:[5758,5783]},"LooseVersionSpec_parenthesized",[]],["app",{sourceInterval:[5825,5841]},"LooseVersionSpec_direct",[]]]],LooseVersionMany:["define",{sourceInterval:[5856,5909]},null,[],["seq",{sourceInterval:[5876,5909]},["app",{sourceInterval:[5876,5904]},"ListOf",[["app",{sourceInterval:[5883,5898]},"LooseVersionOne",[]],["terminal",{sourceInterval:[5900,5903]},","]]],["star",{sourceInterval:[5905,5909]},["terminal",{sourceInterval:[5905,5908]},","]]]],LooseVersionOne:["define",{sourceInterval:[5914,5963]},null,[],["seq",{sourceInterval:[5934,5963]},["app",{sourceInterval:[5934,5949]},"looseVersionCmp",[]],["opt",{sourceInterval:[5950,5963]},["app",{sourceInterval:[5950,5962]},"looseVersion",[]]]]],looseVersionCmp:["define",{sourceInterval:[5968,6018]},null,[],["plus",{sourceInterval:[5988,6018]},["alt",{sourceInterval:[5989,6016]},["terminal",{sourceInterval:[5989,5992]},"<"],["terminal",{sourceInterval:[5995,5998]},"="],["terminal",{sourceInterval:[6001,6004]},"!"],["terminal",{sourceInterval:[6007,6010]},">"],["terminal",{sourceInterval:[6013,6016]},"~"]]]],looseVersion:["define",{sourceInterval:[6023,6088]},null,[],["plus",{sourceInterval:[6043,6088]},["alt",{sourceInterval:[6044,6085]},["app",{sourceInterval:[6044,6049]},"alnum",[]],["terminal",{sourceInterval:[6052,6055]},"-"],["terminal",{sourceInterval:[6058,6061]},"_"],["terminal",{sourceInterval:[6064,6067]},"."],["terminal",{sourceInterval:[6070,6073]},"*"],["terminal",{sourceInterval:[6076,6079]},"+"],["terminal",{sourceInterval:[6082,6085]},"!"]]]],looseAnything:["define",{sourceInterval:[6093,6133]},null,[],["star",{sourceInterval:[6113,6133]},["seq",{sourceInterval:[6114,6131]},["not",{sourceInterval:[6114,6127]},["alt",{sourceInterval:[6116,6126]},["terminal",{sourceInterval:[6116,6120]},`
`],["terminal",{sourceInterval:[6123,6126]},"#"]]],["app",{sourceInterval:[6128,6131]},"any",[]]]]]}]),qi}var Tn={},ea;function ta(){return ea||(ea=1,(function(t){var e=Tn&&Tn.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequirementsSyntaxError=t.semantics=void 0;const r=e(po());t.semantics=r.default.createSemantics();function n(a){return{startIdx:a.source.startIdx,endIdx:a.source.endIdx}}function i(a,c){return{data:c,location:n(a)}}t.semantics.addOperation("extract",{File:a=>a.asIteration().children.map(c=>c.extract()).filter(Boolean),Line:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extract())||null},NameReq:(a,c,f,b)=>{var R,y;return{type:"ProjectName",name:a.sourceString,versionSpec:f.extract(),extras:(R=c.child(0))===null||R===void 0?void 0:R.extract(),environmentMarkerTree:(y=b.child(0))===null||y===void 0?void 0:y.extract()}},UrlReq:(a,c,f,b,R)=>{var y,I;return{type:"ProjectURL",name:a.sourceString,url:f.extract(),extras:(y=c.child(0))===null||y===void 0?void 0:y.extract(),environmentMarkerTree:(I=R.child(0))===null||I===void 0?void 0:I.extract()}},Extras:(a,c,f)=>c.asIteration().children.map(b=>b.sourceString),RequirementsReq:(a,c)=>({type:"RequirementsFile",path:c.sourceString}),ConstraintsReq:(a,c)=>({type:"ConstraintsFile",path:c.sourceString}),UrlSpec:(a,c)=>c.sourceString,QuotedMarker:(a,c)=>c.extract(),MarkerOr_node:(a,c,f)=>({operator:"or",left:a.extract(),right:f.extract()}),MarkerAnd_node:(a,c,f)=>({operator:"and",left:a.extract(),right:f.extract()}),MarkerExpr_leaf:(a,c,f)=>({left:a.sourceString,operator:c.sourceString,right:f.sourceString}),MarkerExpr_node:(a,c,f)=>c.extract(),VersionSpec_parenthesized:(a,c,f)=>c.extract()||[],VersionMany:a=>{const c=a.asIteration().children;if(c.length!==0)return c.map(f=>f.extract())},VersionOne:(a,c)=>({operator:a.sourceString,version:c.sourceString})}),t.semantics.addOperation("extractLoosely",{LooseFile:a=>a.asIteration().children.map(c=>c.extractLoosely()).filter(Boolean),LooseLine:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLoosely())||null},LooseNameReq:(a,c,f,b)=>{var R;return{type:"ProjectName",name:a.sourceString,extras:(R=c.child(0))===null||R===void 0?void 0:R.extractLoosely(),versionSpec:f.extractLoosely()}},LooseNonNameReq:a=>null,LooseExtras:(a,c,f,b)=>c.asIteration().children.map(R=>R.sourceString),LooseVersionSpec_parenthesized:(a,c,f)=>c.extractLoosely()||[],LooseVersionMany:(a,c)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(b=>b.extractLoosely())},LooseVersionOne:(a,c)=>{const f={operator:a.sourceString};return c.sourceString&&(f.version=c.sourceString),f}}),t.semantics.addOperation("extractWithLocation",{File:a=>a.asIteration().children.map(c=>c.extractWithLocation()).filter(Boolean),Line:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractWithLocation())||null},NameReq:function(a,c,f,b){var R,y;return i(this,{type:"ProjectName",name:i(a,a.sourceString),versionSpec:f.extractWithLocation(),extras:(R=c.child(0))===null||R===void 0?void 0:R.extractWithLocation(),environmentMarkerTree:(y=b.child(0))===null||y===void 0?void 0:y.extractWithLocation()})},UrlReq:function(a,c,f,b,R){var y,I;return i(this,{type:"ProjectURL",name:i(a,a.sourceString),url:f.extractWithLocation(),extras:(y=c.child(0))===null||y===void 0?void 0:y.extractWithLocation(),environmentMarkerTree:(I=R.child(0))===null||I===void 0?void 0:I.extractWithLocation()})},Extras:function(a,c,f){return c.asIteration().children.map(b=>i(b,b.sourceString))},RequirementsReq:function(a,c){return i(this,{type:"RequirementsFile",path:c.sourceString})},ConstraintsReq:function(a,c){return i(this,{type:"ConstraintsFile",path:c.sourceString})},UrlSpec:function(a,c){return i(c,c.sourceString)},QuotedMarker:(a,c)=>i(c,c.extract()),VersionSpec_parenthesized:(a,c,f)=>c.extractWithLocation()||[],VersionMany:a=>{const c=a.asIteration().children;if(c.length!==0)return c.map(f=>f.extractWithLocation())},VersionOne:function(a,c){return i(this,{operator:i(a,a.sourceString),version:i(c,c.sourceString)})}}),t.semantics.addOperation("extractLooselyWithLocation",{LooseFile:a=>a.asIteration().children.map(c=>c.extractLooselyWithLocation()).filter(Boolean),LooseLine:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLooselyWithLocation())||null},LooseNameReq:function(a,c,f,b){var R;return i(this,{type:"ProjectName",name:i(a,a.sourceString),extras:(R=c.child(0))===null||R===void 0?void 0:R.extractLooselyWithLocation(),versionSpec:f.extractLooselyWithLocation()})},LooseNonNameReq:a=>null,LooseExtras:function(a,c,f,b){return c.asIteration().children.map(R=>i(R,R.sourceString))},LooseVersionSpec_parenthesized:(a,c,f)=>c.extractLooselyWithLocation()||[],LooseVersionMany:(a,c)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(b=>b.extractLooselyWithLocation())},LooseVersionOne:function(a,c){return i(this,{operator:i(a,a.sourceString),...c.sourceString?{version:i(c,c.sourceString)}:{}})}});class o extends Error{}t.RequirementsSyntaxError=o})(Tn)),Tn}var jr={},ra;function Gu(){if(ra)return jr;ra=1,Object.defineProperty(jr,"__esModule",{value:!0}),jr.VersionOperator=jr.EnvironmentMarkerVariable=void 0;var t;(function(r){r.PythonVersion="python_version",r.PythonFullVersion="python_full_version",r.OsName="os_name",r.SysPlatform="sys_platform",r.PlatformRelease="platform_release",r.PlatformSystem="platform_system",r.PlatformVersion="platform_version",r.PlatformMachine="platform_machine",r.PlatformPythonImplementation="platform_python_implementation",r.ImplementationName="implementation_name",r.ImplementationVersion="implementation_version",r.Extra="extra"})(t||(jr.EnvironmentMarkerVariable=t={}));var e;return(function(r){r.CompatibleRelease="~=",r.VersionMatching="==",r.VersionExclusion="!=",r.LessThanOrMatching="<=",r.GreaterThanOrMatching=">=",r.LessThan="<",r.GreaterThan=">",r.ArbitrarilyEqual="==="})(e||(jr.VersionOperator=e={})),jr}var na;function Vu(){return na||(na=1,(function(t){var e=_r&&_r.__createBinding||(Object.create?(function(y,I,k,j){j===void 0&&(j=k);var J=Object.getOwnPropertyDescriptor(I,k);(!J||("get"in J?!I.__esModule:J.writable||J.configurable))&&(J={enumerable:!0,get:function(){return I[k]}}),Object.defineProperty(y,j,J)}):(function(y,I,k,j){j===void 0&&(j=k),y[j]=I[k]})),r=_r&&_r.__exportStar||function(y,I){for(var k in y)k!=="default"&&!Object.prototype.hasOwnProperty.call(I,k)&&e(I,y,k)},n=_r&&_r.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(t,"__esModule",{value:!0}),t.parsePipRequirementsLineLoosely=t.parsePipRequirementsFileLoosely=t.parsePipRequirementsLine=t.parsePipRequirementsFile=t.RequirementsSyntaxError=void 0;const i=n(po()),o=ta();var a=ta();Object.defineProperty(t,"RequirementsSyntaxError",{enumerable:!0,get:function(){return a.RequirementsSyntaxError}}),r(Gu(),t);function c(y,I){const k=i.default.match(y,"File");if(k.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements file. ${k.shortMessage}`);return I?.includeLocations?(0,o.semantics)(k).extractWithLocation():(0,o.semantics)(k).extract()}t.parsePipRequirementsFile=c;function f(y,I){const k=i.default.match(y,"Line");if(k.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements line. ${k.shortMessage}`);return I?.includeLocations?(0,o.semantics)(k).extractWithLocation():(0,o.semantics)(k).extract()}t.parsePipRequirementsLine=f;function b(y,I){const k=i.default.match(y,"LooseFile");if(k.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${k.shortMessage}`);return I?.includeLocations?(0,o.semantics)(k).extractLooselyWithLocation():(0,o.semantics)(k).extractLoosely()}t.parsePipRequirementsFileLoosely=b;function R(y,I){const k=i.default.match(y,"LooseLine");if(k.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${k.shortMessage}`);return I?.includeLocations?(0,o.semantics)(k).extractLooselyWithLocation():(0,o.semantics)(k).extractLoosely()}t.parsePipRequirementsLineLoosely=R})(_r)),_r}var ho=Vu();const Hu=bi(ho),Ku=ha({__proto__:null,default:Hu},[ho]);function Yu(t){return new Worker("/assets/pyworker-Drd8fvVW.js",{type:"module",name:t?.name})}const{parsePipRequirementsFile:Ju}=Ku;let Zu=0;class Xu{constructor(){this.pendingMessages=new Map}async init(e,r){this.workspace=e,this.vars=r??{},this.worker=new Yu,this.worker.onmessage=n=>{this.handleWorkerMessage(n.data)},this.worker.onerror=n=>{console.error("Python Worker error:",n)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const n=e.payload.prompt||"Input:",i=window.prompt(n);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:i,cancelled:i===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:n,message:i}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",i,n);return}const r=this.pendingMessages.get(e.id);r&&(this.pendingMessages.delete(e.id),e.type==="success"?r.resolve(e.payload):e.type==="error"&&r.reject(new Error(e.payload.message)))}async sendMessage(e,r){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const n=`msg-${Zu++}`,i={id:n,type:e,payload:r};return new Promise((o,a)=>{this.pendingMessages.set(n,{resolve:o,reject:a}),this.worker.postMessage(i)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,r){const n=await this.sendMessage("runFunction",{name:e,args:r});return Xe(vr,this.workspace),n}async setGlobal(e,r){await this.sendMessage("setGlobal",{key:e,value:r})}async mountWorkspace(e="/workspace"){const r=await Nt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:r.getHandle(),mountPoint:e})}async installDependencies(){const e=await this.workspace?.getResource("requirements.txt");if(e){const r=(await e.getContents()).replaceAll("\r",""),n=Ju(r).filter(i=>"name"in i).map(i=>i.name);await this.loadPackages(n)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),Xe(vr,this.workspace)}async execCode(e){const r=await this.sendMessage("execCode",{code:e});return Xe(vr,this.workspace),r}async execScript(e){const r=e.split(".")[0],n=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(r,n)}async execModule(e,r){const n=await this.sendMessage("execModule",{moduleName:e,entryName:r,vars:this.vars});return Xe(vr,this.workspace),n}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class Qu{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?V``:V`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(e=>{const r=e.dependencies||{},n=Object.entries(r);return n.length===0?V``:V`
                        <wa-tree-item expanded>
                            <span>${e.name}</span>
                            ${n.map(([i,o])=>V`
                                <wa-tree-item>
                                    <span>${i} <small>${o}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const vi=new Qu,ep="https://api.github.com";function tp(){const t=Jr.getCurrentApp();if(t?.metadata?.github){const e=t.metadata.github;if(e.owner&&e.repo)return{owner:e.owner,repo:e.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function rp(t=100){try{const e=tp(),r=await fetch(`${ep}/repos/${e.owner}/${e.repo}/releases?per_page=${t}`);return r.ok?await r.json():[]}catch(e){return console.error("Failed to fetch releases:",e),[]}}function np(t,e){const r=t.replace(/^v/,""),n=e.replace(/^v/,""),i=r.split(".").map(Number),o=n.split(".").map(Number);for(let a=0;a<Math.max(i.length,o.length);a++){const c=i[a]||0,f=o[a]||0;if(f>c)return!0;if(f<c)return!1}return!1}lt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=Jr.getCurrentApp();if(!e){Ze("No app loaded");return}const r=vi.hasPackages(),n=vi.renderTree();let i=null;const o=()=>(i||(i=document.getElementById("global-dialog-container")||document.createElement("div"),i.id||(i.id="global-dialog-container",document.body.appendChild(i))),i),a=()=>{i&&Tr(V``,i)},c=J=>{const ve=st.parse(J,{async:!1});return V`${Un(ve)}`};let f=[];try{f=await rp()}catch{f=[]}const b=e.version==="0.0.0",R=f.length>0?f.findIndex(J=>J.tag_name===e.version):-1,y=R>=0?R:0;let I=y;const k=J=>{if(b)return`**Development Build**

${e.description||""}`;if(f.length===0)return`**Version:** ${e.version}

${e.description||""}`;const ve=f[J],xe=ve.tag_name===e.version;let W=`**Version:** ${ve.tag_name}`;xe&&(W+=" (Current)"),W+=`

`;const D=new Date(ve.published_at).toLocaleDateString();return W+=`**Released:** ${D}

`,!xe&&np(e.version,ve.tag_name)&&(W+=`⚠️ **Update available**

`),ve.body&&(W+=`---

${ve.body}`),W},j=J=>{const ve=k(J),xe=f.length>0,W=V`
                    <wa-dialog label="${e.name}" open @wa-request-close=${a}>
                        <style>
                            .dialog-content {
                                width: 600px;
                                height: 600px;
                            }
                            
                            wa-tree-item > span small {
                                color: var(--wa-color-neutral-60);
                                font-size: 0.875em;
                                margin-left: 0.5rem;
                            }
                        </style>
                        <div class="dialog-content">
                            <wa-tab-group>
                                <wa-tab slot="nav" panel="release">Release Info</wa-tab>
                                ${r?V`<wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>`:""}
                                
                                <wa-tab-panel name="release">
                                    ${c(ve)}
                                </wa-tab-panel>
                                
                                ${r?V`
                                    <wa-tab-panel name="packages">
                                        ${n}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${xe?V`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${J===f.length-1}
                                    @click=${()=>{J<f.length-1&&(I=J+1,j(I))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${J===0}
                                    @click=${()=>{J>0&&(I=J-1,j(I))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" @click=${a}>Close</wa-button>
                        </div>
                    </wa-dialog>
                `;Tr(W,o())};return j(y),new Promise(J=>{const ve=()=>{i?.querySelector("wa-dialog[open]")?setTimeout(ve,100):J()};ve()})}}});lt({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const r=new Xu,n=await Nt.getWorkspace();await r.init(n,t),await r.installDependencies(),await r.execScript(e)}}});lt({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});lt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=an.get()||at.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=at.get();return!t||!t.isDirty()}}});lt({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});const fo="theme";async function mo(t){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(t)}async function ip(){const t=await xt.get(fo);await mo(t||"wa-dark")}async function sp(t){await xt.set(fo,t)}lt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{const r=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await mo(r),await sp(r)}},contribution:{target:yn,icon:"circle-half-stroke",label:"Theme Switcher"}});ip().catch(t=>{console.error("Failed to load theme preference:",t)});lt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:yn,icon:"expand",label:"Fullscreen"}});lt({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:t=>{const e={title:"settings.json",data:{async getContents(){const r=await xt.getAll();return JSON.stringify(r,void 0,2)},getName(){return e.key},saveContents(r){const n=JSON.parse(r);return xt.setAll(n)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>V`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,$r.loadEditor(e).then()}},contribution:{target:yn,icon:"gear",label:"Open Settings"}});lt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>V`
                <k-extensions></k-extensions>`,$r.loadEditor(e).then()}},contribution:{target:yn,icon:"puzzle-piece",label:"Open Extensions"}});je.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?Ze(t):tr(t))}}});const ap="@kispace-io/appspace",op="1.0.12",lp={"@awesome.me/webawesome":"^3.0.0","@fortawesome/fontawesome-free":"^7.1.0","@fortawesome/fontawesome-svg-core":"^7.1.0","@fortawesome/free-solid-svg-icons":"^7.1.0","@langchain/textsplitters":"^1.0.0","@mlc-ai/web-llm":"^0.2.79","@xenova/transformers":"^2.17.2","@xterm/xterm":"^5.5.0",axios:"^1.13.1",dotenv:"^17.2.3","idb-keyval":"^6.2.2",jsonata:"^2.1.0",jszip:"^3.10.1","monaco-editor":"^0.54.0","pace-js":"^1.2.4","pdfjs-dist":"^4.0.0","pip-requirements-js":"^1.0.2","pubsub-js":"^1.9.5",pyodide:"^0.27.7",rxdb:"^15.0.0","toastify-js":"^1.12.0",uuid:"^13.0.0","wasm-git":"^0.0.13"},cp={typescript:"^5.9.3",vite:"^7.1.12","vite-plugin-dts":"^4.5.4"},ti={name:ap,version:op,dependencies:lp,devDependencies:cp};vi.addPackage({name:ti.name,version:ti.version,dependencies:ti.dependencies,devDependencies:ti.devDependencies});function ri(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var zi={exports:{}},ia;function up(){return ia||(ia=1,(function(t,e){(function(r){t.exports=r()})(function(){return(function(){function r(n,i,o){function a(b,R){if(!i[b]){if(!n[b]){var y=typeof ri=="function"&&ri;if(!R&&y)return y(b,!0);if(c)return c(b,!0);var I=new Error("Cannot find module '"+b+"'");throw I.code="MODULE_NOT_FOUND",I}var k=i[b]={exports:{}};n[b][0].call(k.exports,function(j){var J=n[b][1][j];return a(J||j)},k,k.exports,r,n,i,o)}return i[b].exports}for(var c=typeof ri=="function"&&ri,f=0;f<o.length;f++)a(o[f]);return a}return r})()({1:[function(r,n,i){const o=r("./utils"),a=(function(){const c=o.stringToArray,f=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],b=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],R=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],y=["Thousand","Million","Billion","Trillion"];function I(P,F){var $=function(ue,ae,G){var ce="";if(ue<=19)ce=(ae?" and ":"")+(G?b[ue]:f[ue]);else if(ue<100){const qe=Math.floor(ue/10),Be=ue%10;ce=(ae?" and ":"")+R[qe-2],Be>0?ce+="-"+$(Be,!1,G):G&&(ce=ce.substring(0,ce.length-1)+"ieth")}else if(ue<1e3){const qe=Math.floor(ue/100),Be=ue%100;ce=(ae?", ":"")+f[qe]+" Hundred",Be>0?ce+=$(Be,!0,G):G&&(ce+="th")}else{var we=Math.floor(Math.log10(ue)/3);we>y.length&&(we=y.length);const qe=Math.pow(10,we*3),Be=Math.floor(ue/qe),ke=ue-Be*qe;ce=(ae?", ":"")+$(Be,!1,!1)+" "+y[we-1],ke>0?ce+=$(ke,!0,G):G&&(ce+="th")}return ce},Q=$(P,!1,F);return Q}const k={};f.forEach(function(P,F){k[P.toLowerCase()]=F}),b.forEach(function(P,F){k[P.toLowerCase()]=F}),R.forEach(function(P,F){const $=P.toLowerCase();k[$]=(F+2)*10,k[$.substring(0,P.length-1)+"ieth"]=k[$]}),k.hundredth=100,y.forEach(function(P,F){const $=P.toLowerCase(),Q=Math.pow(10,(F+1)*3);k[$]=Q,k[$+"th"]=Q});function j(P){const $=P.split(/,\s|\sand\s|[\s\\-]/).map(ae=>k[ae]);let Q=[0];return $.forEach(ae=>{if(ae<100){let G=Q.pop();G>=1e3&&(Q.push(G),G=0),Q.push(G+ae)}else Q.push(Q.pop()*ae)}),Q.reduce((ae,G)=>ae+G,0)}const J=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],ve={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function xe(P){for(var F=0;F<J.length;F++){const $=J[F];if(P>=$[0])return $[1]+xe(P-$[0])}return""}function W(P){for(var F=0,$=1,Q=P.length-1;Q>=0;Q--){const ue=P[Q],ae=ve[ue];ae<$?F-=ae:($=ae,F+=ae)}return F}function D(P,F){for(var $=[],Q=F.charCodeAt(0);P>0;)$.unshift(String.fromCharCode((P-1)%26+Q)),P=Math.floor((P-1)/26);return $.join("")}function K(P,F){for(var $=F.charCodeAt(0),Q=0,ue=0;ue<P.length;ue++)Q+=(P.charCodeAt(P.length-ue-1)-$+1)*Math.pow(26,ue);return Q}function z(P,F){if(typeof P>"u")return;P=Math.floor(P);const $=Pe(F);return ee(P,$)}const O={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},B={UPPER:"upper",LOWER:"lower",TITLE:"title"};function ee(P,F){let $;const Q=P<0;switch(P=Math.abs(P),F.primary){case O.LETTERS:$=D(P,F.case===B.UPPER?"A":"a");break;case O.ROMAN:$=xe(P),F.case===B.UPPER&&($=$.toUpperCase());break;case O.WORDS:$=I(P,F.ordinal),F.case===B.UPPER?$=$.toUpperCase():F.case===B.LOWER&&($=$.toLowerCase());break;case O.DECIMAL:$=""+P;var ue=F.mandatoryDigits-$.length;if(ue>0){var ae=new Array(ue+1).join("0");$=ae+$}if(F.zeroCode!==48&&($=c($).map(qe=>String.fromCodePoint(qe.codePointAt(0)+F.zeroCode-48)).join("")),F.regular){const qe=Math.floor(($.length-1)/F.groupingSeparators.position);for(let Be=qe;Be>0;Be--){const ke=$.length-Be*F.groupingSeparators.position;$=$.substr(0,ke)+F.groupingSeparators.character+$.substr(ke)}}else F.groupingSeparators.reverse().forEach(qe=>{const Be=$.length-qe.position;$=$.substr(0,Be)+qe.character+$.substr(Be)});if(F.ordinal){var G={1:"st",2:"nd",3:"rd"},ce=$[$.length-1],we=G[ce];(!we||$.length>1&&$[$.length-2]==="1")&&(we="th"),$=$+we}break;case O.SEQUENCE:throw{code:"D3130",value:F.token}}return Q&&($="-"+$),$}const Te=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function Pe(P){const F={type:"integer",primary:O.DECIMAL,case:B.LOWER,ordinal:!1};let $,Q;const ue=P.lastIndexOf(";");switch(ue===-1?$=P:($=P.substring(0,ue),Q=P.substring(ue+1),Q[0]==="o"&&(F.ordinal=!0)),$){case"A":F.case=B.UPPER;case"a":F.primary=O.LETTERS;break;case"I":F.case=B.UPPER;case"i":F.primary=O.ROMAN;break;case"W":F.case=B.UPPER,F.primary=O.WORDS;break;case"Ww":F.case=B.TITLE,F.primary=O.WORDS;break;case"w":F.primary=O.WORDS;break;default:{let ae=null,G=0,ce=0,we=[],qe=0;if(c($).map(ke=>ke.codePointAt(0)).reverse().forEach(ke=>{let Ae=!1;for(let L=0;L<Te.length;L++){const x=Te[L];if(ke>=x&&ke<=x+9){if(Ae=!0,G++,qe++,ae===null)ae=x;else if(x!==ae)throw{code:"D3131"};break}}Ae||(ke===35?(qe++,ce++):we.push({position:qe,character:String.fromCodePoint(ke)}))}),G>0){F.primary=O.DECIMAL,F.zeroCode=ae,F.mandatoryDigits=G,F.optionalDigits=ce;const Ae=function(L){if(L.length===0)return 0;const x=L[0].character;for(let te=1;te<L.length;te++)if(L[te].character!==x)return 0;const N=L.map(te=>te.position),H=function(te,_e){return _e===0?te:H(_e,te%_e)},Y=N.reduce(H);for(let te=1;te<=N.length;te++)if(N.indexOf(te*Y)===-1)return 0;return Y}(we);Ae>0?(F.regular=!0,F.groupingSeparators={position:Ae,character:we[0].character}):(F.regular=!1,F.groupingSeparators=we)}else F.primary=O.SEQUENCE,F.token=$}}return F}const he={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function q(P){var F=[];const $={type:"datetime",parts:F},Q=function(Ae,L){if(L>Ae){let x=P.substring(Ae,L);x=x.split("]]").join("]"),F.push({type:"literal",value:x})}};for(var ue=0,ae=0;ae<P.length;){if(P.charAt(ae)==="["){if(P.charAt(ae+1)==="["){Q(ue,ae),F.push({type:"literal",value:"["}),ae+=2,ue=ae;continue}if(Q(ue,ae),ue=ae,ae=P.indexOf("]",ue),ae===-1)throw{code:"D3135"};let Ae=P.substring(ue+1,ae);Ae=Ae.split(/\s+/).join("");var G={type:"marker",component:Ae.charAt(0)},ce=Ae.lastIndexOf(","),we;if(ce!==-1){const L=Ae.substring(ce+1),x=L.indexOf("-");let N,H;const Y=function(_e){if(!(typeof _e>"u"||_e==="*"))return parseInt(_e)};x===-1?N=L:(N=L.substring(0,x),H=L.substring(x+1));const te={min:Y(N),max:Y(H)};G.width=te,we=Ae.substring(1,ce)}else we=Ae.substring(1);if(we.length===1)G.presentation1=we;else if(we.length>1){var qe=we.charAt(we.length-1);"atco".indexOf(qe)!==-1?(G.presentation2=qe,qe==="o"&&(G.ordinal=!0),G.presentation1=we.substring(0,we.length-1)):G.presentation1=we}else G.presentation1=he[G.component];if(typeof G.presentation1>"u")throw{code:"D3132",value:G.component};if(G.presentation1[0]==="n")G.names=B.LOWER;else if(G.presentation1[0]==="N")G.presentation1[1]==="n"?G.names=B.TITLE:G.names=B.UPPER;else if("YMDdFWwXxHhmsf".indexOf(G.component)!==-1){var Be=G.presentation1;if(G.presentation2&&(Be+=";"+G.presentation2),G.integerFormat=Pe(Be),G.width&&G.width.min!==void 0&&G.integerFormat.mandatoryDigits<G.width.min&&(G.integerFormat.mandatoryDigits=G.width.min),G.component==="Y")if(G.n=-1,G.width&&G.width.max!==void 0)G.n=G.width.max,G.integerFormat.mandatoryDigits=G.n;else{var ke=G.integerFormat.mandatoryDigits+G.integerFormat.optionalDigits;ke>=2&&(G.n=ke)}const L=F[F.length-1];L&&L.integerFormat&&(L.integerFormat.parseWidth=L.integerFormat.mandatoryDigits)}(G.component==="Z"||G.component==="z")&&(G.integerFormat=Pe(G.presentation1)),F.push(G),ue=ae+1}ae++}return Q(ue,ae),$}const le=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ye=["January","February","March","April","May","June","July","August","September","October","November","December"],Ie=1e3*60*60*24,X=function(P){const F=Date.UTC(P.year,P.month);var $=new Date(F).getUTCDay();return $===0&&($=7),$>4?F+(8-$)*Ie:F-($-1)*Ie},se=function(P,F){return{year:P,month:F,nextMonth:function(){return F===11?se(P+1,0):se(P,F+1)},previousMonth:function(){return F===0?se(P-1,11):se(P,F-1)},nextYear:function(){return se(P+1,F)},previousYear:function(){return se(P-1,F)}}},me=function(P,F){return(F-P)/(Ie*7)+1},Z=(P,F)=>{let $;switch(F){case"Y":$=P.getUTCFullYear();break;case"M":$=P.getUTCMonth()+1;break;case"D":$=P.getUTCDate();break;case"d":{const Q=Date.UTC(P.getUTCFullYear(),P.getUTCMonth(),P.getUTCDate()),ue=Date.UTC(P.getUTCFullYear(),0);$=(Q-ue)/Ie+1;break}case"F":$=P.getUTCDay(),$===0&&($=7);break;case"W":{const Q=se(P.getUTCFullYear(),0),ue=X(Q),ae=Date.UTC(Q.year,P.getUTCMonth(),P.getUTCDate());let G=me(ue,ae);if(G>52){const ce=X(Q.nextYear());ae>=ce&&(G=1)}else if(G<1){const ce=X(Q.previousYear());G=me(ce,ae)}$=Math.floor(G);break}case"w":{const Q=se(P.getUTCFullYear(),P.getUTCMonth()),ue=X(Q),ae=Date.UTC(Q.year,Q.month,P.getUTCDate());let G=me(ue,ae);if(G>4){const ce=X(Q.nextMonth());ae>=ce&&(G=1)}else if(G<1){const ce=X(Q.previousMonth());G=me(ce,ae)}$=Math.floor(G);break}case"X":{const Q=se(P.getUTCFullYear(),0),ue=X(Q),ae=X(Q.nextYear()),G=P.getTime();G<ue?$=Q.year-1:G>=ae?$=Q.year+1:$=Q.year;break}case"x":{const Q=se(P.getUTCFullYear(),P.getUTCMonth()),ue=X(Q),ae=Q.nextMonth(),G=X(ae),ce=P.getTime();ce<ue?$=Q.previousMonth().month+1:ce>=G?$=ae.month+1:$=Q.month+1;break}case"H":$=P.getUTCHours();break;case"h":$=P.getUTCHours(),$=$%12,$===0&&($=12);break;case"P":$=P.getUTCHours()>=12?"pm":"am";break;case"m":$=P.getUTCMinutes();break;case"s":$=P.getUTCSeconds();break;case"f":$=P.getUTCMilliseconds();break;case"Z":case"z":break;case"C":$="ISO";break;case"E":$="ISO";break}return $};let Ce=null;function Ne(P,F,$){var Q=0,ue=0;if(typeof $<"u"){const Be=parseInt($);Q=Math.floor(Be/100),ue=Be%100}var ae=function(Be,ke){var Ae=Z(Be,ke.component);if("YMDdFWwXxHhms".indexOf(ke.component)!==-1)if(ke.component==="Y"&&ke.n!==-1&&(Ae=Ae%Math.pow(10,ke.n)),ke.names){if(ke.component==="M"||ke.component==="x")Ae=ye[Ae-1];else if(ke.component==="F")Ae=le[Ae];else throw{code:"D3133",value:ke.component};ke.names===B.UPPER?Ae=Ae.toUpperCase():ke.names===B.LOWER&&(Ae=Ae.toLowerCase()),ke.width&&Ae.length>ke.width.max&&(Ae=Ae.substring(0,ke.width.max))}else Ae=ee(Ae,ke.integerFormat);else if(ke.component==="f")Ae=ee(Ae,ke.integerFormat);else if(ke.component==="Z"||ke.component==="z"){const L=Q*100+ue;if(ke.integerFormat.regular)Ae=ee(L,ke.integerFormat);else{const x=ke.integerFormat.mandatoryDigits;if(x===1||x===2)Ae=ee(Q,ke.integerFormat),ue!==0&&(Ae+=":"+z(ue,"00"));else if(x===3||x===4)Ae=ee(L,ke.integerFormat);else throw{code:"D3134",value:x}}L>=0&&(Ae="+"+Ae),ke.component==="z"&&(Ae="GMT"+Ae),L===0&&ke.presentation2==="t"&&(Ae="Z")}else ke.component==="P"&&ke.names===B.UPPER&&(Ae=Ae.toUpperCase());return Ae};let G;typeof F>"u"?(Ce===null&&(Ce=q("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),G=Ce):G=q(F);const ce=(60*Q+ue)*60*1e3,we=new Date(P+ce);let qe="";return G.parts.forEach(function(Be){Be.type==="literal"?qe+=Be.value:qe+=ae(we,Be)}),qe}function w(P){var F={};if(P.type==="datetime")F.type="datetime",F.parts=P.parts.map(function($){var Q={};if($.type==="literal")Q.regex=$.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if($.component==="Z"||$.component==="z"){let ae;Array.isArray($.integerFormat.groupingSeparators)||(ae=$.integerFormat.groupingSeparators),Q.regex="",$.component==="z"&&(Q.regex="GMT"),Q.regex+="[-+][0-9]+",ae&&(Q.regex+=ae.character+"[0-9]+"),Q.parse=function(G){$.component==="z"&&(G=G.substring(3));let ce=0,we=0;return ae?(ce=Number.parseInt(G.substring(0,G.indexOf(ae.character))),we=Number.parseInt(G.substring(G.indexOf(ae.character)+1))):G.length-1<=2?ce=Number.parseInt(G):(ce=Number.parseInt(G.substring(0,3)),we=Number.parseInt(G.substring(3))),ce*60+we}}else if($.integerFormat)Q=w($.integerFormat);else{Q.regex="[a-zA-Z]+";var ue={};if($.component==="M"||$.component==="x")ye.forEach(function(ae,G){$.width&&$.width.max?ue[ae.substring(0,$.width.max)]=G+1:ue[ae]=G+1});else if($.component==="F")le.forEach(function(ae,G){G>0&&($.width&&$.width.max?ue[ae.substring(0,$.width.max)]=G:ue[ae]=G)});else if($.component==="P")ue={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:$.component};Q.parse=function(ae){return ue[ae]}}return Q.component=$.component,Q});else{F.type="integer";const $=P.case===B.UPPER;switch(P.primary){case O.LETTERS:F.regex=$?"[A-Z]+":"[a-z]+",F.parse=function(Q){return K(Q,$?"A":"a")};break;case O.ROMAN:F.regex=$?"[MDCLXVI]+":"[mdclxvi]+",F.parse=function(Q){return W($?Q:Q.toUpperCase())};break;case O.WORDS:F.regex="(?:"+Object.keys(k).concat("and","[\\-, ]").join("|")+")+",F.parse=function(Q){return j(Q.toLowerCase())};break;case O.DECIMAL:F.regex="[0-9]",P.parseWidth?F.regex+=`{${P.parseWidth}}`:F.regex+="+",P.ordinal&&(F.regex+="(?:th|st|nd|rd)"),F.parse=function(Q){let ue=Q;return P.ordinal&&(ue=Q.substring(0,Q.length-2)),P.regular?ue=ue.split(",").join(""):P.groupingSeparators.forEach(ae=>{ue=ue.split(ae.character).join("")}),P.zeroCode!==48&&(ue=ue.split("").map(ae=>String.fromCodePoint(ae.codePointAt(0)-P.zeroCode+48)).join("")),parseInt(ue)};break;case O.SEQUENCE:throw{code:"D3130",value:P.token}}}return F}function S(P,F){if(typeof P>"u")return;const $=Pe(F);return w($).parse(P)}function fe(P,F){const $=q(F),Q=w($),ue="^"+Q.parts.map(we=>"("+we.regex+")").join("")+"$";var G=new RegExp(ue,"i").exec(P);if(G!==null){const x={};for(let He=1;He<G.length;He++){const m=Q.parts[He-1];m.parse&&(x[m.component]=m.parse(G[He]))}if(Object.getOwnPropertyNames(x).length===0)return;let N=0;const H=He=>{N<<=1,N+=He?1:0},Y=He=>!(~He&N)&&!!(He&N);"YXMxWwdD".split("").forEach(He=>H(x[He]));const _e=!Y(161)&&Y(130),Le=Y(84),Ke=!Le&&Y(72);N=0,"PHhmsf".split("").forEach(He=>H(x[He]));const kt=!Y(23)&&Y(47),Qt=(_e?"YD":Le?"XxwF":Ke?"XWF":"YMD")+(kt?"Phmsf":"Hmsf"),Tt=this.environment.timestamp;let pt=!1,Gt=!1;if(Qt.split("").forEach(He=>{if(typeof x[He]>"u")pt?(x[He]="MDd".indexOf(He)!==-1?1:0,Gt=!0):x[He]=Z(Tt,He);else if(pt=!0,Gt)throw{code:"D3136"}}),x.M>0?x.M-=1:x.M=0,_e){const He=Date.UTC(x.Y,0),m=(x.d-1)*1e3*60*60*24,_=new Date(He+m);x.M=_.getUTCMonth(),x.D=_.getUTCDate()}if(Le)throw{code:"D3136"};if(Ke)throw{code:"D3136"};kt&&(x.H=x.h===12?0:x.h,x.P===1&&(x.H+=12));var ce=Date.UTC(x.Y,x.M,x.D,x.H,x.m,x.s,x.f);return(x.Z||x.z)&&(ce-=(x.Z||x.z)*60*1e3),ce}}var Re=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ye(P,F){if(!(typeof P>"u"))if(typeof F>"u"){if(!Re.test(P))throw{stack:new Error().stack,code:"D3110",value:P};return Date.parse(P)}else return fe.call(this,P,F)}function We(P,F,$){if(!(typeof P>"u"))return Ne.call(this,P,F,$)}return{formatInteger:z,parseInteger:S,fromMillis:We,toMillis:Ye}})();n.exports=a},{"./utils":6}],2:[function(r,n,i){(function(o){(function(){var a=r("./utils");const c=(()=>{var f=a.isNumeric,b=a.isArrayOfStrings,R=a.isArrayOfNumbers,y=a.createSequence,I=a.isSequence,k=a.isFunction,j=a.isLambda,J=a.isPromise,ve=a.getFunctionArity,xe=a.isDeepEqual,W=a.stringToArray;function D(u){if(!(typeof u>"u")){var h=0;return u.forEach(function(g){h+=g}),h}}function K(u){return typeof u>"u"?0:u.length}function z(u){if(!(typeof u>"u"||u.length===0))return Math.max.apply(Math,u)}function O(u){if(!(typeof u>"u"||u.length===0))return Math.min.apply(Math,u)}function B(u){if(!(typeof u>"u"||u.length===0)){var h=0;return u.forEach(function(g){h+=g}),h/u.length}}function ee(u,h=!1){if(!(typeof u>"u")){var g;if(typeof u=="string")g=u;else if(k(u))g="";else{if(typeof u=="number"&&!isFinite(u))throw{code:"D3001",value:u,stack:new Error().stack};var A=h?2:0;Array.isArray(u)&&u.outerWrapper&&(u=u[0]),g=JSON.stringify(u,function(C,M){return typeof M<"u"&&M!==null&&M.toPrecision&&f(M)?Number(M.toPrecision(15)):M&&k(M)?"":M},A)}return g}}function Te(u,h,g){if(!(typeof u>"u")){var A=W(u),C=A.length;if(C+h<0&&(h=0),typeof g<"u"){if(g<=0)return"";var M=h>=0?h+g:C+h+g;return A.slice(h,M).join("")}return A.slice(h).join("")}}function Pe(u,h){if(!(typeof u>"u")){var g=u.indexOf(h);return g>-1?u.substr(0,g):u}}function he(u,h){if(!(typeof u>"u")){var g=u.indexOf(h);return g>-1?u.substr(g+h.length):u}}function q(u){if(!(typeof u>"u"))return u.toLowerCase()}function le(u){if(!(typeof u>"u"))return u.toUpperCase()}function ye(u){if(!(typeof u>"u"))return W(u).length}function Ie(u){if(!(typeof u>"u")){var h=u.replace(/[ \t\n\r]+/gm," ");return h.charAt(0)===" "&&(h=h.substring(1)),h.charAt(h.length-1)===" "&&(h=h.substring(0,h.length-1)),h}}function X(u,h,g){if(!(typeof u>"u")){(typeof g>"u"||g.length===0)&&(g=" ");var A;h=Math.trunc(h);var C=Math.abs(h)-ye(u);if(C>0){var M=new Array(C+1).join(g);g.length>1&&(M=Te(M,0,C)),h>0?A=u+M:A=M+u}else A=u;return A}}async function se(u,h){var g=u.apply(this,[h]);if(J(g)&&(g=await g),g&&!(typeof g.start=="number"||g.end==="number"||Array.isArray(g.groups)||k(g.next)))throw{code:"T1010",stack:new Error().stack};return g}async function me(u,h){if(!(typeof u>"u")){var g;if(typeof h=="string")g=u.indexOf(h)!==-1;else{var A=await se(h,u);g=typeof A<"u"}return g}}async function Z(u,h,g){if(!(typeof u>"u")){if(g<0)throw{stack:new Error().stack,value:g,code:"D3040",index:3};var A=y();if(typeof g>"u"||g>0){var C=0,M=await se(h,u);if(typeof M<"u")for(;typeof M<"u"&&(typeof g>"u"||C<g);)A.push({match:M.match,index:M.start,groups:M.groups}),M=await se(M.next),C++}return A}}async function Ce(u,h,g,A){if(!(typeof u>"u")){var C=this;if(h==="")throw{code:"D3010",stack:new Error().stack,value:h,index:2};if(A<0)throw{code:"D3011",stack:new Error().stack,value:A,index:4};var M;typeof g=="string"?M=function(Je){for(var vt="",ze=0,ht=g.indexOf("$",ze);ht!==-1&&ze<g.length;){vt+=g.substring(ze,ht),ze=ht+1;var Vt=g.charAt(ze);if(Vt==="$")vt+="$",ze++;else if(Vt==="0")vt+=Je.match,ze++;else{var ot;if(Je.groups.length===0?ot=1:ot=Math.floor(Math.log(Je.groups.length)*Math.LOG10E)+1,ht=parseInt(g.substring(ze,ze+ot),10),ot>1&&ht>Je.groups.length&&(ht=parseInt(g.substring(ze,ze+ot-1),10)),isNaN(ht))vt+="$";else{if(Je.groups.length>0){var Ir=Je.groups[ht-1];typeof Ir<"u"&&(vt+=Ir)}ze+=ht.toString().length}}ht=g.indexOf("$",ze)}return vt+=g.substring(ze),vt}:M=g;var ie="",be=0;if(typeof A>"u"||A>0){var Ee=0;if(typeof h=="string"){for(var Qe=u.indexOf(h,be);Qe!==-1&&(typeof A>"u"||Ee<A);)ie+=u.substring(be,Qe),ie+=g,be=Qe+h.length,Ee++,Qe=u.indexOf(h,be);ie+=u.substring(be)}else{var De=await se(h,u);if(typeof De<"u"){for(;typeof De<"u"&&(typeof A>"u"||Ee<A);){ie+=u.substring(be,De.start);var et=M.apply(C,[De]);if(J(et)&&(et=await et),typeof et=="string")ie+=et;else throw{code:"D3012",stack:new Error().stack,value:et};be=De.start+De.match.length,Ee++,De=await se(De.next)}ie+=u.substring(be)}else ie=u}}else ie=u;return ie}}function Ne(u){if(!(typeof u>"u")){var h=typeof window<"u"?window.btoa:function(g){return new o.Buffer.from(g,"binary").toString("base64")};return h(u)}}function w(u){if(!(typeof u>"u")){var h=typeof window<"u"?window.atob:function(g){return new o.Buffer.from(g,"base64").toString("binary")};return h(u)}}function S(u){if(!(typeof u>"u")){var h;try{h=encodeURIComponent(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"encodeUrlComponent"}}return h}}function fe(u){if(!(typeof u>"u")){var h;try{h=encodeURI(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"encodeUrl"}}return h}}function Re(u){if(!(typeof u>"u")){var h;try{h=decodeURIComponent(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"decodeUrlComponent"}}return h}}function Ye(u){if(!(typeof u>"u")){var h;try{h=decodeURI(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"decodeUrl"}}return h}}async function We(u,h,g){if(!(typeof u>"u")){if(g<0)throw{code:"D3020",stack:new Error().stack,value:g,index:3};var A=[];if(typeof g>"u"||g>0)if(typeof h=="string")A=u.split(h,g);else{var C=0,M=await se(h,u);if(typeof M<"u"){for(var ie=0;typeof M<"u"&&(typeof g>"u"||C<g);)A.push(u.substring(ie,M.start)),ie=M.end,M=await se(M.next),C++;(typeof g>"u"||C<g)&&A.push(u.substring(ie))}else A.push(u)}return A}}function P(u,h){if(!(typeof u>"u"))return typeof h>"u"&&(h=""),u.join(h)}function F(u,h,g){if(!(typeof u>"u")){var A={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},C=A;typeof g<"u"&&Object.keys(g).forEach(function(Oe){C[Oe]=g[Oe]});for(var M=[],ie=C["zero-digit"].charCodeAt(0),be=ie;be<ie+10;be++)M.push(String.fromCharCode(be));var Ee=M.concat([C["decimal-separator"],C["exponent-separator"],C["grouping-separator"],C.digit,C["pattern-separator"]]),Qe=h.split(C["pattern-separator"]);if(Qe.length>2)throw{code:"D3080",stack:new Error().stack};var De=function(Oe){var ct=(function(){for(var ft,Pt=0;Pt<Oe.length;Pt++)if(ft=Oe.charAt(Pt),Ee.indexOf(ft)!==-1&&ft!==C["exponent-separator"])return Oe.substring(0,Pt)})(),_t=(function(){for(var ft,Pt=Oe.length-1;Pt>=0;Pt--)if(ft=Oe.charAt(Pt),Ee.indexOf(ft)!==-1&&ft!==C["exponent-separator"])return Oe.substring(Pt+1)})(),ut=Oe.substring(ct.length,Oe.length-_t.length),Ft,or,Rt,gt,qt=Oe.indexOf(C["exponent-separator"],ct.length);qt===-1||qt>Oe.length-_t.length?(Ft=ut,or=void 0):(Ft=ut.substring(0,qt),or=ut.substring(qt+1));var zt=Ft.indexOf(C["decimal-separator"]);return zt===-1?(Rt=Ft,gt=_t):(Rt=Ft.substring(0,zt),gt=Ft.substring(zt+1)),{prefix:ct,suffix:_t,activePart:ut,mantissaPart:Ft,exponentPart:or,integerPart:Rt,fractionalPart:gt,subpicture:Oe}},et=function(Oe){var ct,_t,ut=Oe.subpicture,Ft=ut.indexOf(C["decimal-separator"]);Ft!==ut.lastIndexOf(C["decimal-separator"])&&(ct="D3081"),ut.indexOf(C.percent)!==ut.lastIndexOf(C.percent)&&(ct="D3082"),ut.indexOf(C["per-mille"])!==ut.lastIndexOf(C["per-mille"])&&(ct="D3083"),ut.indexOf(C.percent)!==-1&&ut.indexOf(C["per-mille"])!==-1&&(ct="D3084");var or=!1;for(_t=0;_t<Oe.mantissaPart.length;_t++){var Rt=Oe.mantissaPart.charAt(_t);if(M.indexOf(Rt)!==-1||Rt===C.digit){or=!0;break}}or||(ct="D3085");var gt=Oe.activePart.split("").map(function(ft){return Ee.indexOf(ft)===-1?"p":"a"}).join("");gt.indexOf("p")!==-1&&(ct="D3086"),Ft!==-1?(ut.charAt(Ft-1)===C["grouping-separator"]||ut.charAt(Ft+1)===C["grouping-separator"])&&(ct="D3087"):Oe.integerPart.charAt(Oe.integerPart.length-1)===C["grouping-separator"]&&(ct="D3088"),ut.indexOf(C["grouping-separator"]+C["grouping-separator"])!==-1&&(ct="D3089");var qt=Oe.integerPart.indexOf(C.digit);qt!==-1&&Oe.integerPart.substring(0,qt).split("").filter(function(ft){return M.indexOf(ft)>-1}).length>0&&(ct="D3090"),qt=Oe.fractionalPart.lastIndexOf(C.digit),qt!==-1&&Oe.fractionalPart.substring(qt).split("").filter(function(ft){return M.indexOf(ft)>-1}).length>0&&(ct="D3091");var zt=typeof Oe.exponentPart=="string";if(zt&&Oe.exponentPart.length>0&&(ut.indexOf(C.percent)!==-1||ut.indexOf(C["per-mille"])!==-1)&&(ct="D3092"),zt&&(Oe.exponentPart.length===0||Oe.exponentPart.split("").filter(function(ft){return M.indexOf(ft)===-1}).length>0)&&(ct="D3093"),ct)throw{code:ct,stack:new Error().stack}},Je=function(Oe){var ct=function(wt,qr){for(var Sr=[],lr=wt.indexOf(C["grouping-separator"]);lr!==-1;){var Xr=(qr?wt.substring(0,lr):wt.substring(lr)).split("").filter(function(Ar){return M.indexOf(Ar)!==-1||Ar===C.digit}).length;Sr.push(Xr),lr=Oe.integerPart.indexOf(C["grouping-separator"],lr+1)}return Sr},_t=ct(Oe.integerPart),ut=function(wt){if(wt.length===0)return 0;for(var qr=function(Xr,Ar){return Ar===0?Xr:qr(Ar,Xr%Ar)},Sr=wt.reduce(qr),lr=1;lr<=wt.length;lr++)if(wt.indexOf(lr*Sr)===-1)return 0;return Sr},Ft=ut(_t),or=ct(Oe.fractionalPart,!0),Rt=Oe.integerPart.split("").filter(function(wt){return M.indexOf(wt)!==-1}).length,gt=Rt,qt=Oe.fractionalPart.split(""),zt=qt.filter(function(wt){return M.indexOf(wt)!==-1}).length,ft=qt.filter(function(wt){return M.indexOf(wt)!==-1||wt===C.digit}).length,Pt=typeof Oe.exponentPart=="string";Rt===0&&ft===0&&(Pt?(zt=1,ft=1):Rt=1),Pt&&Rt===0&&Oe.integerPart.indexOf(C.digit)!==-1&&(Rt=1),Rt===0&&zt===0&&(zt=1);var Fr=0;return Pt&&(Fr=Oe.exponentPart.split("").filter(function(wt){return M.indexOf(wt)!==-1}).length),{integerPartGroupingPositions:_t,regularGrouping:Ft,minimumIntegerPartSize:Rt,scalingFactor:gt,prefix:Oe.prefix,fractionalPartGroupingPositions:or,minimumFactionalPartSize:zt,maximumFactionalPartSize:ft,minimumExponentSize:Fr,suffix:Oe.suffix,picture:Oe.subpicture}},vt=Qe.map(De);vt.forEach(et);var ze=vt.map(Je),ht=C["minus-sign"],Vt=C["zero-digit"],ot=C["decimal-separator"],Ir=C["grouping-separator"];ze.length===1&&(ze.push(JSON.parse(JSON.stringify(ze[0]))),ze[1].prefix=ht+ze[1].prefix);var dt;u>=0?dt=ze[0]:dt=ze[1];var Nr;dt.picture.indexOf(C.percent)!==-1?Nr=u*100:dt.picture.indexOf(C["per-mille"])!==-1?Nr=u*1e3:Nr=u;var yt,ar;if(dt.minimumExponentSize===0)yt=Nr;else{var Ri=Math.pow(10,dt.scalingFactor),Zn=Math.pow(10,dt.scalingFactor-1);for(yt=Nr,ar=0;yt<Zn;)yt*=10,ar-=1;for(;yt>Ri;)yt/=10,ar+=1}var bn=ce(yt,dt.maximumFactionalPartSize),Xn=function(Oe,ct){var _t=Math.abs(Oe).toFixed(ct);return Vt!=="0"&&(_t=_t.split("").map(function(ut){return ut>="0"&&ut<="9"?M[ut.charCodeAt(0)-48]:ut}).join("")),_t},Fe=Xn(bn,dt.maximumFactionalPartSize),bt=Fe.indexOf(".");for(bt===-1?Fe=Fe+ot:Fe=Fe.replace(".",ot);Fe.charAt(0)===Vt;)Fe=Fe.substring(1);for(;Fe.charAt(Fe.length-1)===Vt;)Fe=Fe.substring(0,Fe.length-1);bt=Fe.indexOf(ot);var kr=dt.minimumIntegerPartSize-bt,wn=dt.minimumFactionalPartSize-(Fe.length-bt-1);if(Fe=(kr>0?new Array(kr+1).join(Vt):"")+Fe,Fe=Fe+(wn>0?new Array(wn+1).join(Vt):""),bt=Fe.indexOf(ot),dt.regularGrouping>0)for(var Mt=Math.floor((bt-1)/dt.regularGrouping),Mr=1;Mr<=Mt;Mr++)Fe=[Fe.slice(0,bt-Mr*dt.regularGrouping),Ir,Fe.slice(bt-Mr*dt.regularGrouping)].join("");else dt.integerPartGroupingPositions.forEach(function(Oe){Fe=[Fe.slice(0,bt-Oe),Ir,Fe.slice(bt-Oe)].join(""),bt++});if(bt=Fe.indexOf(ot),dt.fractionalPartGroupingPositions.forEach(function(Oe){Fe=[Fe.slice(0,Oe+bt+1),Ir,Fe.slice(Oe+bt+1)].join("")}),bt=Fe.indexOf(ot),(dt.picture.indexOf(ot)===-1||bt===Fe.length-1)&&(Fe=Fe.substring(0,Fe.length-1)),typeof ar<"u"){var Zr=Xn(ar,0);kr=dt.minimumExponentSize-Zr.length,kr>0&&(Zr=new Array(kr+1).join(Vt)+Zr),Fe=Fe+C["exponent-separator"]+(ar<0?ht:"")+Zr}return Fe=dt.prefix+Fe+dt.suffix,Fe}}function $(u,h){if(!(typeof u>"u")){if(u=ce(u),typeof h>"u"?h=10:h=ce(h),h<2||h>36)throw{code:"D3100",stack:new Error().stack,value:h};var g=u.toString(h);return g}}function Q(u){var h;if(!(typeof u>"u")){if(typeof u=="number")h=u;else if(typeof u=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(u)&&!isNaN(parseFloat(u))&&isFinite(u))h=parseFloat(u);else if(typeof u=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(u))h=Number(u);else if(u===!0)h=1;else if(u===!1)h=0;else throw{code:"D3030",value:u,stack:new Error().stack,index:1};return h}}function ue(u){var h;if(!(typeof u>"u"))return h=Math.abs(u),h}function ae(u){var h;if(!(typeof u>"u"))return h=Math.floor(u),h}function G(u){var h;if(!(typeof u>"u"))return h=Math.ceil(u),h}function ce(u,h){var g;if(!(typeof u>"u")){if(h){var A=u.toString().split("e");u=+(A[0]+"e"+(A[1]?+A[1]+h:h))}g=Math.round(u);var C=g-u;return Math.abs(C)===.5&&Math.abs(g%2)===1&&(g=g-1),h&&(A=g.toString().split("e"),g=+(A[0]+"e"+(A[1]?+A[1]-h:-h))),Object.is(g,-0)&&(g=0),g}}function we(u){var h;if(!(typeof u>"u")){if(u<0)throw{stack:new Error().stack,code:"D3060",index:1,value:u};return h=Math.sqrt(u),h}}function qe(u,h){var g;if(!(typeof u>"u")){if(g=Math.pow(u,h),!isFinite(g))throw{stack:new Error().stack,code:"D3061",index:1,value:u,exp:h};return g}}function Be(){return Math.random()}function ke(u){if(!(typeof u>"u")){var h=!1;if(Array.isArray(u)){if(u.length===1)h=ke(u[0]);else if(u.length>1){var g=u.filter(function(A){return ke(A)});h=g.length>0}}else typeof u=="string"?u.length>0&&(h=!0):f(u)?u!==0&&(h=!0):u!==null&&typeof u=="object"&&!k(u)?Object.keys(u).length>0&&(h=!0):typeof u=="boolean"&&u===!0&&(h=!0);return h}}function Ae(u){if(!(typeof u>"u"))return!ke(u)}function L(u,h,g,A){var C=[h],M=ve(u);return M>=2&&C.push(g),M>=3&&C.push(A),C}async function x(u,h){if(!(typeof u>"u")){for(var g=y(),A=0;A<u.length;A++){var C=L(h,u[A],A,u),M=await h.apply(this,C);typeof M<"u"&&g.push(M)}return g}}async function N(u,h){if(!(typeof u>"u")){for(var g=y(),A=0;A<u.length;A++){var C=u[A],M=L(h,C,A,u),ie=await h.apply(this,M);ke(ie)&&g.push(C)}return g}}async function H(u,h){if(!(typeof u>"u")){for(var g=!1,A,C=0;C<u.length;C++){var M=u[C],ie=!0;if(typeof h<"u"){var be=L(h,M,C,u),Ee=await h.apply(this,be);ie=ke(Ee)}if(ie)if(!g)A=M,g=!0;else throw{stack:new Error().stack,code:"D3138",index:C}}if(!g)throw{stack:new Error().stack,code:"D3139"};return A}}function Y(){for(var u=[],h=Array.prototype.slice.call(arguments),g=Math.min.apply(Math,h.map(function(M){return Array.isArray(M)?M.length:0})),A=0;A<g;A++){var C=h.map(M=>M[A]);u.push(C)}return u}async function te(u,h,g){if(!(typeof u>"u")){var A,C=ve(h);if(C<2)throw{stack:new Error().stack,code:"D3050",index:1};var M;for(typeof g>"u"&&u.length>0?(A=u[0],M=1):(A=g,M=0);M<u.length;){var ie=[A,u[M]];C>=3&&ie.push(M),C>=4&&ie.push(u),A=await h.apply(this,ie),M++}return A}}function _e(u){var h=y();if(Array.isArray(u)){var g={};u.forEach(function(A){var C=_e(A);C.forEach(function(M){g[M]=!0})}),h=_e(g)}else u!==null&&typeof u=="object"&&!k(u)&&Object.keys(u).forEach(A=>h.push(A));return h}function Le(u,h){var g;if(Array.isArray(u)){g=y();for(var A=0;A<u.length;A++){var C=Le(u[A],h);typeof C<"u"&&(Array.isArray(C)?C.forEach(M=>g.push(M)):g.push(C))}}else u!==null&&typeof u=="object"&&!k(u)&&(g=u[h]);return g}function Ke(u,h){return typeof u>"u"?h:typeof h>"u"?u:(Array.isArray(u)||(u=y(u)),Array.isArray(h)||(h=[h]),u.concat(h))}function it(u){return!(typeof u>"u")}function kt(u){var h=y();if(Array.isArray(u))u.forEach(function(C){h=Ke(h,kt(C))});else if(u!==null&&typeof u=="object"&&!j(u))for(var g in u){var A={};A[g]=u[g],h.push(A)}else h=u;return h}function de(u){if(!(typeof u>"u")){var h={};return u.forEach(function(g){for(var A in g)h[A]=g[A]}),h}}function rr(u){if(!(typeof u>"u")){if(u.length<=1)return u;for(var h=u.length,g=new Array(h),A=0;A<h;A++)g[h-A-1]=u[A];return g}}async function Qt(u,h){var g=y();for(var A in u){var C=L(h,u[A],A,u),M=await h.apply(this,C);typeof M<"u"&&g.push(M)}return g}function Tt(u){throw{code:"D3137",stack:new Error().stack,message:u||"$error() function evaluated"}}function pt(u,h){if(!u)throw{code:"D3141",stack:new Error().stack,message:h||"$assert() statement failed"}}function Gt(u){if(u!==void 0)return u===null?"null":f(u)?"number":typeof u=="string"?"string":typeof u=="boolean"?"boolean":Array.isArray(u)?"array":k(u)?"function":"object"}async function He(u,h){if(!(typeof u>"u")){if(u.length<=1)return u;var g;if(typeof h>"u"){if(!R(u)&&!b(u))throw{stack:new Error().stack,code:"D3070",index:1};g=async function(ie,be){return ie>be}}else g=h;var A=async function(ie,be){var Ee=async function(De,et,Je){et.length===0?Array.prototype.push.apply(De,Je):Je.length===0?Array.prototype.push.apply(De,et):await g(et[0],Je[0])?(De.push(Je[0]),await Ee(De,et,Je.slice(1))):(De.push(et[0]),await Ee(De,et.slice(1),Je))},Qe=[];return await Ee(Qe,ie,be),Qe},C=async function(ie){if(!Array.isArray(ie)||ie.length<=1)return ie;var be=Math.floor(ie.length/2),Ee=ie.slice(0,be),Qe=ie.slice(be);return Ee=await C(Ee),Qe=await C(Qe),await A(Ee,Qe)},M=await C(u);return M}}function m(u){if(!(typeof u>"u")){if(u.length<=1)return u;for(var h=new Array(u.length),g=0;g<u.length;g++){var A=Math.floor(Math.random()*(g+1));g!==A&&(h[g]=h[A]),h[A]=u[g]}return h}}function _(u){if(!(typeof u>"u")){if(!Array.isArray(u)||u.length<=1)return u;for(var h=I(u)?y():[],g=0;g<u.length;g++){for(var A=u[g],C=!1,M=0;M<h.length;M++)if(xe(A,h[M])){C=!0;break}C||h.push(A)}return h}}async function E(u,h){var g={};for(var A in u){var C=u[A],M=L(h,C,A,u),ie=await h.apply(this,M);ke(ie)&&(g[A]=C)}return Object.keys(g).length===0&&(g=void 0),g}return{sum:D,count:K,max:z,min:O,average:B,string:ee,substring:Te,substringBefore:Pe,substringAfter:he,lowercase:q,uppercase:le,length:ye,trim:Ie,pad:X,match:Z,contains:me,replace:Ce,split:We,join:P,formatNumber:F,formatBase:$,number:Q,floor:ae,ceil:G,round:ce,abs:ue,sqrt:we,power:qe,random:Be,boolean:ke,not:Ae,map:x,zip:Y,filter:N,single:H,foldLeft:te,sift:E,keys:_e,lookup:Le,append:Ke,exists:it,spread:kt,merge:de,reverse:rr,each:Qt,error:Tt,assert:pt,type:Gt,sort:He,shuffle:m,distinct:_,base64encode:Ne,base64decode:w,encodeUrlComponent:S,encodeUrl:fe,decodeUrlComponent:Re,decodeUrl:Ye}})();n.exports=c}).call(this)}).call(this,typeof Es<"u"?Es:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(r,n,i){var o=r("./datetime"),a=r("./functions"),c=r("./utils"),f=r("./parser"),b=r("./signature"),R=(function(){var y=c.isNumeric,I=c.isArrayOfStrings,k=c.isArrayOfNumbers,j=c.createSequence,J=c.isSequence,ve=c.isFunction,xe=c.isLambda,W=c.isIterable,D=c.isPromise,K=c.getFunctionArity,z=c.isDeepEqual,O=Tt(null);async function B(m,_,E){var u,h=E.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(h&&await h(m,_,E),m.type){case"path":u=await ee(m,_,E);break;case"binary":u=await ye(m,_,E);break;case"unary":u=await Ie(m,_,E);break;case"name":u=X(m,_);break;case"string":case"number":case"value":u=se(m);break;case"wildcard":u=me(m,_);break;case"descendant":u=Ce(m,_);break;case"parent":u=E.lookup(m.slot.label);break;case"condition":u=await ae(m,_,E);break;case"block":u=await G(m,_,E);break;case"bind":u=await ue(m,_,E);break;case"regex":u=ce(m);break;case"function":u=await L(m,_,E);break;case"variable":u=we(m,_,E);break;case"lambda":u=H(m,_,E);break;case"partial":u=await Y(m,_,E);break;case"apply":u=await Ae(m,_,E);break;case"transform":u=Be(m,_,E);break}if(Object.prototype.hasOwnProperty.call(m,"predicate"))for(var g=0;g<m.predicate.length;g++)u=await le(m.predicate[g].expr,u,E);m.type!=="path"&&Object.prototype.hasOwnProperty.call(m,"group")&&(u=await F(m.group,u,E));var A=E.lookup(Symbol.for("jsonata.__evaluate_exit"));return A&&await A(m,_,E,u),u&&J(u)&&!u.tupleStream&&(m.keepArray&&(u.keepSingleton=!0),u.length===0?u=void 0:u.length===1&&(u=u.keepSingleton?u:u[0])),u}async function ee(m,_,E){var u;Array.isArray(_)&&m.steps[0].type!=="variable"?u=_:u=j(_);for(var h,g=!1,A=void 0,C=0;C<m.steps.length;C++){var M=m.steps[C];if(M.tuple&&(g=!0),C===0&&M.consarray?h=await B(M,u,E):g?A=await q(M,u,A,E):h=await Pe(M,u,E,C===m.steps.length-1),!g&&(typeof h>"u"||h.length===0))break;typeof M.focus>"u"&&(u=h)}if(g)if(m.tuple)h=A;else for(h=j(),C=0;C<A.length;C++)h.push(A[C]["@"]);return m.keepSingletonArray&&(Array.isArray(h)&&h.cons&&!h.sequence&&(h=j(h)),h.keepSingleton=!0),m.hasOwnProperty("group")&&(h=await F(m.group,g?A:h,E)),h}function Te(m,_){var E=Tt(m);for(const u in _)E.bind(u,_[u]);return E}async function Pe(m,_,E,u){var h;if(m.type==="sort")return h=await qe(m,_,E),m.stages&&(h=await he(m.stages,h,E)),h;h=j();for(var g=0;g<_.length;g++){var A=await B(m,_[g],E);if(m.stages)for(var C=0;C<m.stages.length;C++)A=await le(m.stages[C].expr,A,E);typeof A<"u"&&h.push(A)}var M=j();return u&&h.length===1&&Array.isArray(h[0])&&!J(h[0])?M=h[0]:h.forEach(function(ie){!Array.isArray(ie)||ie.cons?M.push(ie):ie.forEach(be=>M.push(be))}),M}async function he(m,_,E){for(var u=_,h=0;h<m.length;h++){var g=m[h];switch(g.type){case"filter":u=await le(g.expr,u,E);break;case"index":for(var A=0;A<u.length;A++){var C=u[A];C[g.value]=A}break}}return u}async function q(m,_,E,u){var h;if(m.type==="sort"){if(E)h=await qe(m,E,u);else{var g=await qe(m,_,u);h=j(),h.tupleStream=!0;for(var A=0;A<g.length;A++){var C={"@":g[A]};C[m.index]=A,h.push(C)}}return m.stages&&(h=await he(m.stages,h,u)),h}h=j(),h.tupleStream=!0;var M=u;E===void 0&&(E=_.map(Qe=>({"@":Qe})));for(var ie=0;ie<E.length;ie++){M=Te(u,E[ie]);var be=await B(m,E[ie]["@"],M);if(typeof be<"u"){Array.isArray(be)||(be=[be]);for(var Ee=0;Ee<be.length;Ee++)C={},Object.assign(C,E[ie]),be.tupleStream?Object.assign(C,be[Ee]):(m.focus?(C[m.focus]=be[Ee],C["@"]=E[ie]["@"]):C["@"]=be[Ee],m.index&&(C[m.index]=Ee),m.ancestor&&(C[m.ancestor.label]=E[ie]["@"])),h.push(C)}}return m.stages&&(h=await he(m.stages,h,u)),h}async function le(m,_,E){var u=j();if(_&&_.tupleStream&&(u.tupleStream=!0),Array.isArray(_)||(_=j(_)),m.type==="number"){var h=Math.floor(m.value);h<0&&(h=_.length+h);var g=await _[h];typeof g<"u"&&(Array.isArray(g)?u=g:u.push(g))}else for(h=0;h<_.length;h++){var g=_[h],A=g,C=E;_.tupleStream&&(A=g["@"],C=Te(E,g));var M=await B(m,A,C);y(M)&&(M=[M]),k(M)?M.forEach(function(be){var Ee=Math.floor(be);Ee<0&&(Ee=_.length+Ee),Ee===h&&u.push(g)}):a.boolean(M)&&u.push(g)}return u}async function ye(m,_,E){var u,h=await B(m.lhs,_,E),g=m.value,A=async()=>await B(m.rhs,_,E);if(g==="and"||g==="or")try{return await Ye(h,A,g)}catch(M){throw M.position=m.position,M.token=g,M}var C=await A();try{switch(g){case"+":case"-":case"*":case"/":case"%":u=w(h,C,g);break;case"=":case"!=":u=S(h,C,g);break;case"<":case"<=":case">":case">=":u=fe(h,C,g);break;case"&":u=P(h,C);break;case"..":u=Q(h,C);break;case"in":u=Re(h,C);break}}catch(M){throw M.position=m.position,M.token=g,M}return u}async function Ie(m,_,E){var u;switch(m.value){case"-":if(u=await B(m.expression,_,E),typeof u>"u")u=void 0;else if(y(u))u=-u;else throw{code:"D1002",stack:new Error().stack,position:m.position,token:m.value,value:u};break;case"[":u=[];let A=await Promise.all(m.expressions.map(async(C,M)=>(E.isParallelCall=M>0,[C,await B(C,_,E)])));for(let C of A){var[h,g]=C;typeof g<"u"&&(h.value==="["?u.push(g):u=a.append(u,g))}m.consarray&&Object.defineProperty(u,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":u=await F(m,_,E);break}return u}function X(m,_,E){return a.lookup(_,m.value)}function se(m){return m.value}function me(m,_){var E=j();return Array.isArray(_)&&_.outerWrapper&&_.length>0&&(_=_[0]),_!==null&&typeof _=="object"&&Object.keys(_).forEach(function(u){var h=_[u];Array.isArray(h)?(h=Z(h),E=a.append(E,h)):E.push(h)}),E}function Z(m,_){return typeof _>"u"&&(_=[]),Array.isArray(m)?m.forEach(function(E){Z(E,_)}):_.push(m),_}function Ce(m,_){var E,u=j();return typeof _<"u"&&(Ne(_,u),u.length===1?E=u[0]:E=u),E}function Ne(m,_){Array.isArray(m)||_.push(m),Array.isArray(m)?m.forEach(function(E){Ne(E,_)}):m!==null&&typeof m=="object"&&Object.keys(m).forEach(function(E){Ne(m[E],_)})}function w(m,_,E){var u;if(typeof m<"u"&&!y(m))throw{code:"T2001",stack:new Error().stack,value:m};if(typeof _<"u"&&!y(_))throw{code:"T2002",stack:new Error().stack,value:_};if(typeof m>"u"||typeof _>"u")return u;switch(E){case"+":u=m+_;break;case"-":u=m-_;break;case"*":u=m*_;break;case"/":u=m/_;break;case"%":u=m%_;break}return u}function S(m,_,E){var u,h=typeof m,g=typeof _;if(h==="undefined"||g==="undefined")return!1;switch(E){case"=":u=z(m,_);break;case"!=":u=!z(m,_);break}return u}function fe(m,_,E){var u,h=typeof m,g=typeof _,A=h==="undefined"||h==="string"||h==="number",C=g==="undefined"||g==="string"||g==="number";if(!A||!C)throw{code:"T2010",stack:new Error().stack,value:h==="string"||h==="number"?_:m};if(!(h==="undefined"||g==="undefined")){if(h!==g)throw{code:"T2009",stack:new Error().stack,value:m,value2:_};switch(E){case"<":u=m<_;break;case"<=":u=m<=_;break;case">":u=m>_;break;case">=":u=m>=_;break}return u}}function Re(m,_){var E=!1;if(typeof m>"u"||typeof _>"u")return!1;Array.isArray(_)||(_=[_]);for(var u=0;u<_.length;u++)if(_[u]===m){E=!0;break}return E}async function Ye(m,_,E){var u,h=We(m);switch(E){case"and":u=h&&We(await _());break;case"or":u=h||We(await _());break}return u}function We(m){var _=a.boolean(m);return typeof _>"u"?!1:_}function P(m,_){var E,u="",h="";return typeof m<"u"&&(u=a.string(m)),typeof _<"u"&&(h=a.string(_)),E=u.concat(h),E}async function F(m,_,E){var u={},h={},g=!!(_&&_.tupleStream);Array.isArray(_)||(_=j(_)),_.length===0&&_.push(void 0);for(var A=0;A<_.length;A++)for(var C=_[A],M=g?Te(E,C):E,ie=0;ie<m.lhs.length;ie++){var be=m.lhs[ie],Ee=await B(be[0],g?C["@"]:C,M);if(typeof Ee!="string"&&Ee!==void 0)throw{code:"T1003",stack:new Error().stack,position:m.position,value:Ee};if(Ee!==void 0){var Qe={data:C,exprIndex:ie};if(h.hasOwnProperty(Ee)){if(h[Ee].exprIndex!==ie)throw{code:"D1009",stack:new Error().stack,position:m.position,value:Ee};h[Ee].data=a.append(h[Ee].data,C)}else h[Ee]=Qe}}let De=await Promise.all(Object.keys(h).map(async(Je,vt)=>{let ze=h[Je];var ht=ze.data,Vt=E;if(g){var ot=$(ze.data);ht=ot["@"],delete ot["@"],Vt=Te(E,ot)}return E.isParallelCall=vt>0,[Je,await B(m.lhs[ze.exprIndex][1],ht,Vt)]}));for(let Je of De){var[Ee,et]=await Je;typeof et<"u"&&(u[Ee]=et)}return u}function $(m){if(!Array.isArray(m))return m;var _={};Object.assign(_,m[0]);for(var E=1;E<m.length;E++)for(const u in m[E])_[u]=a.append(_[u],m[E][u]);return _}function Q(m,_){var E;if(typeof m<"u"&&!Number.isInteger(m))throw{code:"T2003",stack:new Error().stack,value:m};if(typeof _<"u"&&!Number.isInteger(_))throw{code:"T2004",stack:new Error().stack,value:_};if(typeof m>"u"||typeof _>"u"||m>_)return E;var u=_-m+1;if(u>1e7)throw{code:"D2014",stack:new Error().stack,value:u};E=new Array(u);for(var h=m,g=0;h<=_;h++,g++)E[g]=h;return E.sequence=!0,E}async function ue(m,_,E){var u=await B(m.rhs,_,E);return E.bind(m.lhs.value,u),u}async function ae(m,_,E){var u,h=await B(m.condition,_,E);return a.boolean(h)?u=await B(m.then,_,E):typeof m.else<"u"&&(u=await B(m.else,_,E)),u}async function G(m,_,E){for(var u,h=Tt(E),g=0;g<m.expressions.length;g++)u=await B(m.expressions[g],_,h);return u}function ce(m){var _=new He.RegexEngine(m.value),E=function(u,h){var g;_.lastIndex=h||0;var A=_.exec(u);if(A!==null){if(g={match:A[0],start:A.index,end:A.index+A[0].length,groups:[]},A.length>1)for(var C=1;C<A.length;C++)g.groups.push(A[C]);g.next=function(){if(!(_.lastIndex>=u.length)){var M=E(u,_.lastIndex);if(M&&M.match==="")throw{code:"D1004",stack:new Error().stack,position:m.position,value:m.value.source};return M}}}return g};return E}function we(m,_,E){var u;return m.value===""?u=_&&_.outerWrapper?_[0]:_:u=E.lookup(m.value),u}async function qe(m,_,E){var u,h=_,g=!!_.tupleStream,A=async function(M,ie){for(var be=0,Ee=0;be===0&&Ee<m.terms.length;Ee++){var Qe=m.terms[Ee],De=M,et=E;g&&(De=M["@"],et=Te(E,M));var Je=await B(Qe.expression,De,et);De=ie,et=E,g&&(De=ie["@"],et=Te(E,ie));var vt=await B(Qe.expression,De,et),ze=typeof Je,ht=typeof vt;if(ze==="undefined"){be=ht==="undefined"?0:1;continue}if(ht==="undefined"){be=-1;continue}if(!(ze==="string"||ze==="number")||!(ht==="string"||ht==="number"))throw{code:"T2008",stack:new Error().stack,position:m.position,value:ze==="string"||ze==="number"?vt:Je};if(ze!==ht)throw{code:"T2007",stack:new Error().stack,position:m.position,value:Je,value2:vt};Je!==vt&&(Je<vt?be=-1:be=1,Qe.descending===!0&&(be=-be))}return be===1},C={environment:E,input:_};return u=await a.sort.apply(C,[h,A]),u}function Be(m,_,E){var u=async function(h){if(!(typeof h>"u")){var g=E.lookup("clone");if(!ve(g))throw{code:"T2013",stack:new Error().stack,position:m.position};var A=await x(g,[h],null,E),C=await B(m.pattern,A,E);if(typeof C<"u"){Array.isArray(C)||(C=[C]);for(var M=0;M<C.length;M++){var ie=C[M];if(ie&&(ie.isPrototypeOf(A)||ie instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:m.position};var be=await B(m.update,ie,E),Ee=typeof be;if(Ee!=="undefined"){if(Ee!=="object"||be===null||Array.isArray(be))throw{code:"T2011",stack:new Error().stack,position:m.update.position,value:be};for(var Qe in be)ie[Qe]=be[Qe]}if(typeof m.delete<"u"){var De=await B(m.delete,ie,E);if(typeof De<"u"){var et=De;if(Array.isArray(De)||(De=[De]),!I(De))throw{code:"T2012",stack:new Error().stack,position:m.delete.position,value:et};for(var Je=0;Je<De.length;Je++)typeof ie=="object"&&ie!==null&&delete ie[De[Je]]}}}}return A}};return de(u,"<(oa):o>")}var ke=f("function($f, $g) { function($x){ $g($f($x)) } }");async function Ae(m,_,E){var u,h=await B(m.lhs,_,E);if(m.rhs.type==="function")u=await L(m.rhs,_,E,{context:h});else{var g=await B(m.rhs,_,E);if(!ve(g))throw{code:"T2006",stack:new Error().stack,position:m.position,value:g};if(ve(h)){var A=await B(ke,null,E);u=await x(A,[h,g],null,E)}else u=await x(g,[h],null,E)}return u}async function L(m,_,E,u){var h,g=await B(m.procedure,_,E);if(typeof g>"u"&&m.procedure.type==="path"&&E.lookup(m.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:m.position,token:m.procedure.steps[0].value};var A=[];typeof u<"u"&&A.push(u.context);for(var C=0;C<m.arguments.length;C++){const ie=await B(m.arguments[C],_,E);if(ve(ie)){const be=async function(...Ee){return await x(ie,Ee,null,E)};be.arity=K(ie),A.push(be)}else A.push(ie)}var M=m.procedure.type==="path"?m.procedure.steps[0].value:m.procedure.value;try{typeof g=="object"&&(g.token=M,g.position=m.position),h=await x(g,A,_,E)}catch(ie){throw ie.position||(ie.position=m.position),ie.token||(ie.token=M),ie}return h}async function x(m,_,E,u){var h;for(h=await N(m,_,E,u);xe(h)&&h.thunk===!0;){var g=await B(h.body.procedure,h.input,h.environment);h.body.procedure.type==="variable"&&(g.token=h.body.procedure.value),g.position=h.body.procedure.position;for(var A=[],C=0;C<h.body.arguments.length;C++)A.push(await B(h.body.arguments[C],h.input,h.environment));h=await N(g,A,E,u)}return h}async function N(m,_,E,u){var h;try{var g=_;if(m&&(g=te(m.signature,_,E)),xe(m))h=await _e(m,g);else if(m&&m._jsonata_function===!0){var A={environment:u,input:E};h=m.implementation.apply(A,g),W(h)&&(h=h.next().value),D(h)&&(h=await h)}else if(typeof m=="function")h=m.apply(E,g),D(h)&&(h=await h);else throw{code:"T1006",stack:new Error().stack}}catch(C){throw m&&(typeof C.token>"u"&&typeof m.token<"u"&&(C.token=m.token),C.position=m.position||C.position),C}return h}function H(m,_,E){var u={_jsonata_lambda:!0,input:_,environment:E,arguments:m.arguments,signature:m.signature,body:m.body};return m.thunk===!0&&(u.thunk=!0),u.apply=async function(h,g){return await x(u,g,_,h?h.environment:E)},u}async function Y(m,_,E){for(var u,h=[],g=0;g<m.arguments.length;g++){var A=m.arguments[g];A.type==="operator"&&A.value==="?"?h.push(A):h.push(await B(A,_,E))}var C=await B(m.procedure,_,E);if(typeof C>"u"&&m.procedure.type==="path"&&E.lookup(m.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:m.position,token:m.procedure.steps[0].value};if(xe(C))u=Le(C,h);else if(C&&C._jsonata_function===!0)u=Ke(C.implementation,h);else if(typeof C=="function")u=Ke(C,h);else throw{code:"T1008",stack:new Error().stack,position:m.position,token:m.procedure.type==="path"?m.procedure.steps[0].value:m.procedure.value};return u}function te(m,_,E){if(typeof m>"u")return _;var u=m.validate(_,E);return u}async function _e(m,_){var E,u=Tt(m.environment);return m.arguments.forEach(function(h,g){u.bind(h.value,_[g])}),typeof m.body=="function"?E=await it(m.body,u):E=await B(m.body,m.input,u),E}function Le(m,_){var E=Tt(m.environment),u=[];m.arguments.forEach(function(g,A){var C=_[A];C&&C.type==="operator"&&C.value==="?"?u.push(g):E.bind(g.value,C)});var h={_jsonata_lambda:!0,input:m.input,environment:E,arguments:u,body:m.body};return h}function Ke(m,_){var E=kt(m);E=E.map(function(A){return"$"+A.trim()});var u="function("+E.join(", ")+"){ _ }",h=f(u);h.body=m;var g=Le(h,_);return g}async function it(m,_){var E=kt(m),u=E.map(function(A){return _.lookup(A.trim())}),h={environment:_},g=m.apply(h,u);return D(g)&&(g=await g),g}function kt(m){var _=m.toString(),E=/\(([^)]*)\)/.exec(_)[1],u=E.split(",");return u}function de(m,_){var E={_jsonata_function:!0,implementation:m};return typeof _<"u"&&(E.signature=b(_)),E}async function rr(m,_){if(!(typeof m>"u")){var E=this.input;typeof _<"u"&&(E=_,Array.isArray(E)&&!J(E)&&(E=j(E),E.outerWrapper=!0));try{var u=f(m,!1)}catch(g){throw Gt(g),{stack:new Error().stack,code:"D3120",value:g.message,error:g}}try{var h=await B(u,E,this.environment)}catch(g){throw Gt(g),{stack:new Error().stack,code:"D3121",value:g.message,error:g}}return h}}function Qt(m){if(!(typeof m>"u"))return JSON.parse(a.string(m))}function Tt(m){var _={};const E={bind:function(h,g){_[h]=g},lookup:function(h){var g;return _.hasOwnProperty(h)?g=_[h]:m&&(g=m.lookup(h)),g},timestamp:m?m.timestamp:null,async:m?m.async:!1,isParallelCall:m?m.isParallelCall:!1,global:m?m.global:{ancestry:[null]}};if(m){var u=m.lookup(Symbol.for("jsonata.__createFrame_push"));u&&u(m,E)}return E}O.bind("sum",de(a.sum,"<a<n>:n>")),O.bind("count",de(a.count,"<a:n>")),O.bind("max",de(a.max,"<a<n>:n>")),O.bind("min",de(a.min,"<a<n>:n>")),O.bind("average",de(a.average,"<a<n>:n>")),O.bind("string",de(a.string,"<x-b?:s>")),O.bind("substring",de(a.substring,"<s-nn?:s>")),O.bind("substringBefore",de(a.substringBefore,"<s-s:s>")),O.bind("substringAfter",de(a.substringAfter,"<s-s:s>")),O.bind("lowercase",de(a.lowercase,"<s-:s>")),O.bind("uppercase",de(a.uppercase,"<s-:s>")),O.bind("length",de(a.length,"<s-:n>")),O.bind("trim",de(a.trim,"<s-:s>")),O.bind("pad",de(a.pad,"<s-ns?:s>")),O.bind("match",de(a.match,"<s-f<s:o>n?:a<o>>")),O.bind("contains",de(a.contains,"<s-(sf):b>")),O.bind("replace",de(a.replace,"<s-(sf)(sf)n?:s>")),O.bind("split",de(a.split,"<s-(sf)n?:a<s>>")),O.bind("join",de(a.join,"<a<s>s?:s>")),O.bind("formatNumber",de(a.formatNumber,"<n-so?:s>")),O.bind("formatBase",de(a.formatBase,"<n-n?:s>")),O.bind("formatInteger",de(o.formatInteger,"<n-s:s>")),O.bind("parseInteger",de(o.parseInteger,"<s-s:n>")),O.bind("number",de(a.number,"<(nsb)-:n>")),O.bind("floor",de(a.floor,"<n-:n>")),O.bind("ceil",de(a.ceil,"<n-:n>")),O.bind("round",de(a.round,"<n-n?:n>")),O.bind("abs",de(a.abs,"<n-:n>")),O.bind("sqrt",de(a.sqrt,"<n-:n>")),O.bind("power",de(a.power,"<n-n:n>")),O.bind("random",de(a.random,"<:n>")),O.bind("boolean",de(a.boolean,"<x-:b>")),O.bind("not",de(a.not,"<x-:b>")),O.bind("map",de(a.map,"<af>")),O.bind("zip",de(a.zip,"<a+>")),O.bind("filter",de(a.filter,"<af>")),O.bind("single",de(a.single,"<af?>")),O.bind("reduce",de(a.foldLeft,"<afj?:j>")),O.bind("sift",de(a.sift,"<o-f?:o>")),O.bind("keys",de(a.keys,"<x-:a<s>>")),O.bind("lookup",de(a.lookup,"<x-s:x>")),O.bind("append",de(a.append,"<xx:a>")),O.bind("exists",de(a.exists,"<x:b>")),O.bind("spread",de(a.spread,"<x-:a<o>>")),O.bind("merge",de(a.merge,"<a<o>:o>")),O.bind("reverse",de(a.reverse,"<a:a>")),O.bind("each",de(a.each,"<o-f:a>")),O.bind("error",de(a.error,"<s?:x>")),O.bind("assert",de(a.assert,"<bs?:x>")),O.bind("type",de(a.type,"<x:s>")),O.bind("sort",de(a.sort,"<af?:a>")),O.bind("shuffle",de(a.shuffle,"<a:a>")),O.bind("distinct",de(a.distinct,"<x:x>")),O.bind("base64encode",de(a.base64encode,"<s-:s>")),O.bind("base64decode",de(a.base64decode,"<s-:s>")),O.bind("encodeUrlComponent",de(a.encodeUrlComponent,"<s-:s>")),O.bind("encodeUrl",de(a.encodeUrl,"<s-:s>")),O.bind("decodeUrlComponent",de(a.decodeUrlComponent,"<s-:s>")),O.bind("decodeUrl",de(a.decodeUrl,"<s-:s>")),O.bind("eval",de(rr,"<sx?:x>")),O.bind("toMillis",de(o.toMillis,"<s-s?:n>")),O.bind("fromMillis",de(o.fromMillis,"<n-s?s?:s>")),O.bind("clone",de(Qt,"<(oa)-:o>"));var pt={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Gt(m){var _=pt[m.code];if(typeof _<"u"){var E=_.replace(/\{\{\{([^}]+)}}}/g,function(){return m[arguments[1]]});E=E.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(m[arguments[1]])}),m.message=E}}function He(m,_){var E,u;try{E=f(m,_&&_.recover),u=E.errors,delete E.errors}catch(A){throw Gt(A),A}var h=Tt(O),g=new Date;return h.bind("now",de(function(A,C){return o.fromMillis(g.getTime(),A,C)},"<s?s?:s>")),h.bind("millis",de(function(){return g.getTime()},"<:n>")),_&&_.RegexEngine?He.RegexEngine=_.RegexEngine:He.RegexEngine=RegExp,{evaluate:async function(A,C,M){if(typeof u<"u"){var ie={code:"S0500",position:0};throw Gt(ie),ie}if(typeof C<"u"){var be;be=Tt(h);for(var Ee in C)be.bind(Ee,C[Ee])}else be=h;be.bind("$",A),g=new Date,be.timestamp=g,Array.isArray(A)&&!J(A)&&(A=j(A),A.outerWrapper=!0);var Qe;try{return Qe=await B(E,A,be),typeof M=="function"&&M(null,Qe),Qe}catch(De){throw Gt(De),De}},assign:function(A,C){h.bind(A,C)},registerFunction:function(A,C,M){var ie=de(C,M);h.bind(A,ie)},ast:function(){return E},errors:function(){return u}}}return He.parser=f,He})();n.exports=R},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(r,n,i){var o=r("./signature");const a=(()=>{var c={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,"?:":40,"??":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},b=function(y){var I=0,k=y.length,j=function(xe,W){var D={type:xe,value:W,position:I};return D},J=function(){for(var xe=I,W=0,D,K,z=function(B){if(y.charAt(B)==="/"&&W===0){for(var ee=0;y.charAt(B-(ee+1))==="\\";)ee++;if(ee%2===0)return!0}return!1};I<k;){var O=y.charAt(I);if(z(I)){if(D=y.substring(xe,I),D==="")throw{code:"S0301",stack:new Error().stack,position:I};for(I++,O=y.charAt(I),xe=I;O==="i"||O==="m";)I++,O=y.charAt(I);return K=y.substring(xe,I)+"g",new RegExp(D,K)}(O==="("||O==="["||O==="{")&&y.charAt(I-1)!=="\\"&&W++,(O===")"||O==="]"||O==="}")&&y.charAt(I-1)!=="\\"&&W--,I++}throw{code:"S0302",stack:new Error().stack,position:I}},ve=function(xe){if(I>=k)return null;for(var W=y.charAt(I);I<k&&` 	
\r\v`.indexOf(W)>-1;)I++,W=y.charAt(I);if(W==="/"&&y.charAt(I+1)==="*"){var D=I;for(I+=2,W=y.charAt(I);!(W==="*"&&y.charAt(I+1)==="/");)if(W=y.charAt(++I),I>=k)throw{code:"S0106",stack:new Error().stack,position:D};return I+=2,W=y.charAt(I),ve(xe)}if(xe!==!0&&W==="/")return I++,j("regex",J());if(W==="."&&y.charAt(I+1)===".")return I+=2,j("operator","..");if(W===":"&&y.charAt(I+1)==="=")return I+=2,j("operator",":=");if(W==="!"&&y.charAt(I+1)==="=")return I+=2,j("operator","!=");if(W===">"&&y.charAt(I+1)==="=")return I+=2,j("operator",">=");if(W==="<"&&y.charAt(I+1)==="=")return I+=2,j("operator","<=");if(W==="*"&&y.charAt(I+1)==="*")return I+=2,j("operator","**");if(W==="~"&&y.charAt(I+1)===">")return I+=2,j("operator","~>");if(W==="?"&&y.charAt(I+1)===":")return I+=2,j("operator","?:");if(W==="?"&&y.charAt(I+1)==="?")return I+=2,j("operator","??");if(Object.prototype.hasOwnProperty.call(c,W))return I++,j("operator",W);if(W==='"'||W==="'"){var K=W;I++;for(var z="";I<k;){if(W=y.charAt(I),W==="\\")if(I++,W=y.charAt(I),Object.prototype.hasOwnProperty.call(f,W))z+=f[W];else if(W==="u"){var O=y.substr(I+1,4);if(/^[0-9a-fA-F]+$/.test(O)){var B=parseInt(O,16);z+=String.fromCharCode(B),I+=4}else throw{code:"S0104",stack:new Error().stack,position:I}}else throw{code:"S0103",stack:new Error().stack,position:I,token:W};else{if(W===K)return I++,j("string",z);z+=W}I++}throw{code:"S0101",stack:new Error().stack,position:I}}var ee=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,Te=ee.exec(y.substring(I));if(Te!==null){var Pe=parseFloat(Te[0]);if(!isNaN(Pe)&&isFinite(Pe))return I+=Te[0].length,j("number",Pe);throw{code:"S0102",stack:new Error().stack,position:I,token:Te[0]}}var he;if(W==="`"){I++;var q=y.indexOf("`",I);if(q!==-1)return he=y.substring(I,q),I=q+1,j("name",he);throw I=k,{code:"S0105",stack:new Error().stack,position:I}}for(var le=I,ye;;)if(ye=y.charAt(le),le===k||` 	
\r\v`.indexOf(ye)>-1||Object.prototype.hasOwnProperty.call(c,ye)){if(y.charAt(I)==="$")return he=y.substring(I+1,le),I=le,j("variable",he);switch(he=y.substring(I,le),I=le,he){case"or":case"in":case"and":return j("operator",he);case"true":return j("value",!0);case"false":return j("value",!1);case"null":return j("value",null);default:return I===k&&he===""?null:j("name",he)}}else le++};return ve},R=function(y,I){var k,j,J={},ve=[],xe=function(){var w=[];k.id!=="(end)"&&w.push({type:k.type,value:k.value,position:k.position});for(var S=j();S!==null;)w.push(S),S=j();return w},W={nud:function(){var w={code:"S0211",token:this.value,position:this.position};if(I)return w.remaining=xe(),w.type="error",ve.push(w),w;throw w.stack=new Error().stack,w}},D=function(w,S){var fe=J[w];return S=S||0,fe?S>=fe.lbp&&(fe.lbp=S):(fe=Object.create(W),fe.id=fe.value=w,fe.lbp=S,J[w]=fe),fe},K=function(w){if(I){w.remaining=xe(),ve.push(w);var S=J["(error)"];return k=Object.create(S),k.error=w,k.type="(error)",k}else throw w.stack=new Error().stack,w},z=function(w,S){if(w&&k.id!==w){var fe;k.id==="(end)"?fe="S0203":fe="S0202";var Re={code:fe,position:k.position,token:k.value,value:w};return K(Re)}var Ye=j(S);if(Ye===null)return k=J["(end)"],k.position=y.length,k;var We=Ye.value,P=Ye.type,F;switch(P){case"name":case"variable":F=J["(name)"];break;case"operator":if(F=J[We],!F)return K({code:"S0204",stack:new Error().stack,position:Ye.position,token:We});break;case"string":case"number":case"value":F=J["(literal)"];break;case"regex":P="regex",F=J["(regex)"];break;default:return K({code:"S0205",stack:new Error().stack,position:Ye.position,token:We})}return k=Object.create(F),k.value=We,k.type=P,k.position=Ye.position,k},O=function(w){var S,fe=k;for(z(null,!0),S=fe.nud();w<k.lbp;)fe=k,z(),S=fe.led(S);return S},B=function(w){var S=D(w,0);S.nud=function(){return this}},ee=function(w,S,fe){var Re=S||c[w],Ye=D(w,Re);return Ye.led=fe||function(We){return this.lhs=We,this.rhs=O(Re),this.type="binary",this},Ye},Te=function(w,S,fe){var Re=D(w,S);return Re.led=fe,Re},Pe=function(w,S){var fe=D(w);return fe.nud=S||function(){return this.expression=O(70),this.type="unary",this},fe};B("(end)"),B("(name)"),B("(literal)"),B("(regex)"),D(":"),D(";"),D(","),D(")"),D("]"),D("}"),D(".."),ee("."),ee("+"),ee("-"),ee("*"),ee("/"),ee("%"),ee("="),ee("<"),ee(">"),ee("!="),ee("<="),ee(">="),ee("&"),ee("and"),ee("or"),ee("in"),B("and"),B("or"),B("in"),Pe("-"),ee("~>"),ee("??",c["??"],function(w){return this.type="condition",this.condition={type:"function",value:"(",procedure:{type:"variable",value:"exists"},arguments:[w]},this.then=w,this.else=O(0),this}),Te("(error)",10,function(w){return this.lhs=w,this.error=k.error,this.remaining=xe(),this.type="error",this}),Pe("*",function(){return this.type="wildcard",this}),Pe("**",function(){return this.type="descendant",this}),Pe("%",function(){return this.type="parent",this}),ee("(",c["("],function(w){if(this.procedure=w,this.type="function",this.arguments=[],k.id!==")")for(;k.type==="operator"&&k.id==="?"?(this.type="partial",this.arguments.push(k),z("?")):this.arguments.push(O(0)),k.id===",";)z(",");if(z(")",!0),w.type==="name"&&(w.value==="function"||w.value==="λ")){if(this.arguments.forEach(function(We,P){if(We.type!=="variable")return K({code:"S0208",stack:new Error().stack,position:We.position,token:We.value,value:P+1})}),this.type="lambda",k.id==="<"){for(var S=k.position,fe=1,Re="<";fe>0&&k.id!=="{"&&k.id!=="(end)";){var Ye=z();Ye.id===">"?fe--:Ye.id==="<"&&fe++,Re+=Ye.value}z(">");try{this.signature=o(Re)}catch(We){return We.position=S+We.offset,K(We)}}z("{"),this.body=O(0),z("}")}return this}),Pe("(",function(){for(var w=[];k.id!==")"&&(w.push(O(0)),k.id===";");)z(";");return z(")",!0),this.type="block",this.expressions=w,this}),Pe("[",function(){var w=[];if(k.id!=="]")for(;;){var S=O(0);if(k.id===".."){var fe={type:"binary",value:"..",position:k.position,lhs:S};z(".."),fe.rhs=O(0),S=fe}if(w.push(S),k.id!==",")break;z(",")}return z("]",!0),this.expressions=w,this.type="unary",this}),ee("[",c["["],function(w){if(k.id==="]"){for(var S=w;S&&S.type==="binary"&&S.value==="[";)S=S.lhs;return S.keepArray=!0,z("]"),w}else return this.lhs=w,this.rhs=O(c["]"]),this.type="binary",z("]",!0),this}),ee("^",c["^"],function(w){z("(");for(var S=[];;){var fe={descending:!1};if(k.id==="<"?z("<"):k.id===">"&&(fe.descending=!0,z(">")),fe.expression=O(0),S.push(fe),k.id!==",")break;z(",")}return z(")"),this.lhs=w,this.rhs=S,this.type="binary",this});var he=function(w){var S=[];if(k.id!=="}")for(;;){var fe=O(0);z(":");var Re=O(0);if(S.push([fe,Re]),k.id!==",")break;z(",")}return z("}",!0),typeof w>"u"?(this.lhs=S,this.type="unary"):(this.lhs=w,this.rhs=S,this.type="binary"),this};Pe("{",he),ee("{",c["{"],he),Te(":=",c[":="],function(w){return w.type!=="variable"?K({code:"S0212",stack:new Error().stack,position:w.position,token:w.value}):(this.lhs=w,this.rhs=O(c[":="]-1),this.type="binary",this)}),ee("@",c["@"],function(w){return this.lhs=w,this.rhs=O(c["@"]),this.rhs.type!=="variable"?K({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),ee("#",c["#"],function(w){return this.lhs=w,this.rhs=O(c["#"]),this.rhs.type!=="variable"?K({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),ee("?",c["?"],function(w){return this.type="condition",this.condition=w,this.then=O(0),k.id===":"&&(z(":"),this.else=O(0)),this}),ee("?:",c["?:"],function(w){return this.type="condition",this.condition=w,this.then=w,this.else=O(0),this}),Pe("|",function(){return this.type="transform",this.pattern=O(0),z("|"),this.update=O(0),k.id===","&&(z(","),this.delete=O(0)),z("|"),this});var q=function(w){var S;if(w.type==="function"&&!w.predicate){var fe={type:"lambda",thunk:!0,arguments:[],position:w.position};fe.body=w,S=fe}else if(w.type==="condition")w.then=q(w.then),typeof w.else<"u"&&(w.else=q(w.else)),S=w;else if(w.type==="block"){var Re=w.expressions.length;Re>0&&(w.expressions[Re-1]=q(w.expressions[Re-1])),S=w}else S=w;return S},le=0,ye=0,Ie=[],X=function(w,S){switch(w.type){case"name":case"wildcard":S.level--,S.level===0&&(typeof w.ancestor>"u"||(Ie[S.index].slot.label=w.ancestor.label),w.ancestor=S,w.tuple=!0);break;case"parent":S.level++;break;case"block":w.expressions.length>0&&(w.tuple=!0,S=X(w.expressions[w.expressions.length-1],S));break;case"path":w.tuple=!0;var fe=w.steps.length-1;for(S=X(w.steps[fe--],S);S.level>0&&fe>=0;)S=X(w.steps[fe--],S);break;default:throw{code:"S0217",token:w.type,position:w.position}}return S},se=function(w,S){if(typeof S.seekingParent<"u"||S.type==="parent"){var fe=typeof S.seekingParent<"u"?S.seekingParent:[];S.type==="parent"&&fe.push(S.slot),typeof w.seekingParent>"u"?w.seekingParent=fe:Array.prototype.push.apply(w.seekingParent,fe)}},me=function(w){var S=w.steps.length-1,fe=w.steps[S],Re=typeof fe.seekingParent<"u"?fe.seekingParent:[];fe.type==="parent"&&Re.push(fe.slot);for(var Ye=0;Ye<Re.length;Ye++){var We=Re[Ye];for(S=w.steps.length-2;We.level>0;){if(S<0){typeof w.seekingParent>"u"?w.seekingParent=[We]:w.seekingParent.push(We);break}for(var P=w.steps[S--];S>=0&&P.focus&&w.steps[S].focus;)P=w.steps[S--];We=X(P,We)}}},Z=function(w){var S;switch(w.type){case"binary":switch(w.value){case".":var fe=Z(w.lhs);fe.type==="path"?S=fe:S={type:"path",steps:[fe]},fe.type==="parent"&&(S.seekingParent=[fe.slot]);var Re=Z(w.rhs);Re.type==="function"&&Re.procedure.type==="path"&&Re.procedure.steps.length===1&&Re.procedure.steps[0].type==="name"&&S.steps[S.steps.length-1].type==="function"&&(S.steps[S.steps.length-1].nextFunction=Re.procedure.steps[0].value),Re.type==="path"?Array.prototype.push.apply(S.steps,Re.steps):(typeof Re.predicate<"u"&&(Re.stages=Re.predicate,delete Re.predicate),S.steps.push(Re)),S.steps.filter(function(ce){if(ce.type==="number"||ce.type==="value")throw{code:"S0213",stack:new Error().stack,position:ce.position,value:ce.value};return ce.type==="string"}).forEach(function(ce){ce.type="name"}),S.steps.filter(function(ce){return ce.keepArray===!0}).length>0&&(S.keepSingletonArray=!0);var Ye=S.steps[0];Ye.type==="unary"&&Ye.value==="["&&(Ye.consarray=!0);var We=S.steps[S.steps.length-1];We.type==="unary"&&We.value==="["&&(We.consarray=!0),me(S);break;case"[":S=Z(w.lhs);var P=S,F="predicate";if(S.type==="path"&&(P=S.steps[S.steps.length-1],F="stages"),typeof P.group<"u")throw{code:"S0209",stack:new Error().stack,position:w.position};typeof P[F]>"u"&&(P[F]=[]);var $=Z(w.rhs);typeof $.seekingParent<"u"&&($.seekingParent.forEach(ce=>{ce.level===1?X(P,ce):ce.level--}),se(P,$)),P[F].push({type:"filter",expr:$,position:w.position});break;case"{":if(S=Z(w.lhs),typeof S.group<"u")throw{code:"S0210",stack:new Error().stack,position:w.position};S.group={lhs:w.rhs.map(function(ce){return[Z(ce[0]),Z(ce[1])]}),position:w.position};break;case"^":S=Z(w.lhs),S.type!=="path"&&(S={type:"path",steps:[S]});var Q={type:"sort",position:w.position};Q.terms=w.rhs.map(function(ce){var we=Z(ce.expression);return se(Q,we),{descending:ce.descending,expression:we}}),S.steps.push(Q),me(S);break;case":=":S={type:"bind",value:w.value,position:w.position},S.lhs=Z(w.lhs),S.rhs=Z(w.rhs),se(S,S.rhs);break;case"@":if(S=Z(w.lhs),P=S,S.type==="path"&&(P=S.steps[S.steps.length-1]),typeof P.stages<"u"||typeof P.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:w.position};if(P.type==="sort")throw{code:"S0216",stack:new Error().stack,position:w.position};w.keepArray&&(P.keepArray=!0),P.focus=w.rhs.value,P.tuple=!0;break;case"#":S=Z(w.lhs),P=S,S.type==="path"?P=S.steps[S.steps.length-1]:(S={type:"path",steps:[S]},typeof P.predicate<"u"&&(P.stages=P.predicate,delete P.predicate)),typeof P.stages>"u"?P.index=w.rhs.value:P.stages.push({type:"index",value:w.rhs.value,position:w.position}),P.tuple=!0;break;case"~>":S={type:"apply",value:w.value,position:w.position},S.lhs=Z(w.lhs),S.rhs=Z(w.rhs),S.keepArray=S.lhs.keepArray||S.rhs.keepArray;break;default:S={type:w.type,value:w.value,position:w.position},S.lhs=Z(w.lhs),S.rhs=Z(w.rhs),se(S,S.lhs),se(S,S.rhs)}break;case"unary":S={type:w.type,value:w.value,position:w.position},w.value==="["?S.expressions=w.expressions.map(function(ce){var we=Z(ce);return se(S,we),we}):w.value==="{"?S.lhs=w.lhs.map(function(ce){var we=Z(ce[0]);se(S,we);var qe=Z(ce[1]);return se(S,qe),[we,qe]}):(S.expression=Z(w.expression),w.value==="-"&&S.expression.type==="number"?(S=S.expression,S.value=-S.value):se(S,S.expression));break;case"function":case"partial":S={type:w.type,name:w.name,value:w.value,position:w.position},S.arguments=w.arguments.map(function(ce){var we=Z(ce);return se(S,we),we}),S.procedure=Z(w.procedure);break;case"lambda":S={type:w.type,arguments:w.arguments,signature:w.signature,position:w.position};var ue=Z(w.body);S.body=q(ue);break;case"condition":S={type:w.type,position:w.position},S.condition=Z(w.condition),se(S,S.condition),S.then=Z(w.then),se(S,S.then),typeof w.else<"u"&&(S.else=Z(w.else),se(S,S.else));break;case"transform":S={type:w.type,position:w.position},S.pattern=Z(w.pattern),S.update=Z(w.update),typeof w.delete<"u"&&(S.delete=Z(w.delete));break;case"block":S={type:w.type,position:w.position},S.expressions=w.expressions.map(function(ce){var we=Z(ce);return se(S,we),(we.consarray||we.type==="path"&&we.steps[0].consarray)&&(S.consarray=!0),we});break;case"name":S={type:"path",steps:[w]},w.keepArray&&(S.keepSingletonArray=!0);break;case"parent":S={type:"parent",slot:{label:"!"+le++,level:1,index:ye++}},Ie.push(S);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":S=w;break;case"operator":if(w.value==="and"||w.value==="or"||w.value==="in")w.type="name",S=Z(w);else if(w.value==="?")S=w;else throw{code:"S0201",stack:new Error().stack,position:w.position,token:w.value};break;case"error":S=w,w.lhs&&(S=Z(w.lhs));break;default:var ae="S0206";w.id==="(end)"&&(ae="S0207");var G={code:ae,position:w.position,token:w.value};if(I)return ve.push(G),{type:"error",error:G};throw G.stack=new Error().stack,G}return w.keepArray&&(S.keepArray=!0),S};j=b(y),z();var Ce=O(0);if(k.id!=="(end)"){var Ne={code:"S0201",position:k.position,token:k.value};K(Ne)}if(Ce=Z(Ce),Ce.type==="parent"||typeof Ce.seekingParent<"u")throw{code:"S0217",token:Ce.type,position:Ce.position};return ve.length>0&&(Ce.errors=ve),Ce};return R})();n.exports=a},{"./signature":5}],5:[function(r,n,i){var o=r("./utils");const a=(()=>{var c={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function f(b){for(var R=1,y=[],I={},k=I;R<b.length;){var j=b.charAt(R);if(j===":")break;var J=function(){y.push(I),k=I,I={}},ve=function(ee,Te,Pe,he){for(var q=1,le=Te;le<ee.length;)if(le++,j=ee.charAt(le),j===he){if(q--,q===0)break}else j===Pe&&q++;return le};switch(j){case"s":case"n":case"b":case"l":case"o":I.regex="["+j+"m]",I.type=j,J();break;case"a":I.regex="[asnblfom]",I.type=j,I.array=!0,J();break;case"f":I.regex="f",I.type=j,J();break;case"j":I.regex="[asnblom]",I.type=j,J();break;case"x":I.regex="[asnblfom]",I.type=j,J();break;case"-":k.context=!0,k.contextRegex=new RegExp(k.regex),k.regex+="?";break;case"?":case"+":k.regex+=j;break;case"(":var xe=ve(b,R,"(",")"),W=b.substring(R+1,xe);if(W.indexOf("<")===-1)I.regex="["+W+"m]";else throw{code:"S0402",stack:new Error().stack,value:W,offset:R};I.type="("+W+")",R=xe,J();break;case"<":if(k.type==="a"||k.type==="f"){var D=ve(b,R,"<",">");k.subtype=b.substring(R+1,D),R=D}else throw{code:"S0401",stack:new Error().stack,value:k.type,offset:R};break}R++}var K="^"+y.map(function(ee){return"("+ee.regex+")"}).join("")+"$",z=new RegExp(K),O=function(ee){var Te;if(o.isFunction(ee))Te="f";else{var Pe=typeof ee;switch(Pe){case"string":Te="s";break;case"number":Te="n";break;case"boolean":Te="b";break;case"object":ee===null?Te="l":Array.isArray(ee)?Te="a":Te="o";break;case"undefined":default:Te="m"}}return Te},B=function(ee,Te){for(var Pe="^",he=0,q=0;q<y.length;q++){Pe+=y[q].regex;var le=Te.match(Pe);if(le===null)throw{code:"T0410",stack:new Error().stack,value:ee[he],index:he+1};he=le[0].length}throw{code:"T0410",stack:new Error().stack,value:ee[he],index:he+1}};return{definition:b,validate:function(ee,Te){var Pe="";ee.forEach(function(ye){Pe+=O(ye)});var he=z.exec(Pe);if(he){var q=[],le=0;return y.forEach(function(ye,Ie){var X=ee[le],se=he[Ie+1];if(se==="")if(ye.context&&ye.contextRegex){var me=O(Te);if(ye.contextRegex.test(me))q.push(Te);else throw{code:"T0411",stack:new Error().stack,value:Te,index:le+1}}else q.push(X),le++;else se.split("").forEach(function(Z){if(ye.type==="a"){if(Z==="m")X=void 0;else{X=ee[le];var Ce=!0;if(typeof ye.subtype<"u"){if(Z!=="a"&&se!==ye.subtype)Ce=!1;else if(Z==="a"&&X.length>0){var Ne=O(X[0]);if(Ne!==ye.subtype.charAt(0))Ce=!1;else{var w=X.filter(function(S){return O(S)!==Ne});Ce=w.length===0}}}if(!Ce)throw{code:"T0412",stack:new Error().stack,value:X,index:le+1,type:c[ye.subtype]};Z!=="a"&&(X=[X])}q.push(X),le++}else q.push(X),le++})}),q}B(ee,Pe)}}}return f})();n.exports=a},{"./utils":6}],6:[function(r,n,i){const o=(()=>{function a(D){var K=!1;if(typeof D=="number"&&(K=!isNaN(D),K&&!isFinite(D)))throw{code:"D1001",value:D,stack:new Error().stack};return K}function c(D){var K=!1;return Array.isArray(D)&&(K=D.filter(function(z){return typeof z!="string"}).length===0),K}function f(D){var K=!1;return Array.isArray(D)&&(K=D.filter(function(z){return!a(z)}).length===0),K}function b(){var D=[];return D.sequence=!0,arguments.length===1&&D.push(arguments[0]),D}function R(D){return D.sequence===!0&&Array.isArray(D)}function y(D){return D&&(D._jsonata_function===!0||D._jsonata_lambda===!0)||typeof D=="function"}function I(D){var K=typeof D.arity=="number"?D.arity:typeof D.implementation=="function"?D.implementation.length:typeof D.length=="number"?D.length:D.arguments.length;return K}function k(D){return D&&D._jsonata_lambda===!0}var j=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function J(D){return typeof D=="object"&&D!==null&&j in D&&"next"in D&&typeof D.next=="function"}function ve(D,K){if(D===K)return!0;if(typeof D=="object"&&typeof K=="object"&&D!==null&&K!==null){if(Array.isArray(D)&&Array.isArray(K)){if(D.length!==K.length)return!1;for(var z=0;z<D.length;z++)if(!ve(D[z],K[z]))return!1;return!0}var O=Object.getOwnPropertyNames(D),B=Object.getOwnPropertyNames(K);if(O.length!==B.length)return!1;for(O=O.sort(),B=B.sort(),z=0;z<O.length;z++)if(O[z]!==B[z])return!1;for(z=0;z<O.length;z++){var ee=O[z];if(!ve(D[ee],K[ee]))return!1}return!0}return!1}function xe(D){return typeof D=="object"&&D!==null&&"then"in D&&typeof D.then=="function"}function W(D){var K=[];for(let z of D)K.push(z);return K}return{isNumeric:a,isArrayOfStrings:c,isArrayOfNumbers:f,createSequence:b,isSequence:R,isFunction:y,isLambda:k,isIterable:J,getFunctionArity:I,isDeepEqual:ve,stringToArray:W,isPromise:xe}})();n.exports=o},{}]},{},[3])(3)})})(zi)),zi.exports}var pp=up();const go=bi(pp);var hr={exports:{}};const ni=zo(Uo),dp="17.2.3",hp={version:dp};var sa;function fp(){if(sa)return hr.exports;sa=1;var t={};const e=ni,r=ni,n=ni,i=ni,a=hp.version,c=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function f(){return c[Math.floor(Math.random()*c.length)]}function b(q){return typeof q=="string"?!["false","0","no","off",""].includes(q.toLowerCase()):!!q}function R(){return process.stdout.isTTY}function y(q){return R()?`\x1B[2m${q}\x1B[0m`:q}const I=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function k(q){const le={};let ye=q.toString();ye=ye.replace(/\r\n?/mg,`
`);let Ie;for(;(Ie=I.exec(ye))!=null;){const X=Ie[1];let se=Ie[2]||"";se=se.trim();const me=se[0];se=se.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),me==='"'&&(se=se.replace(/\\n/g,`
`),se=se.replace(/\\r/g,"\r")),le[X]=se}return le}function j(q){q=q||{};const le=K(q);q.path=le;const ye=he.configDotenv(q);if(!ye.parsed){const me=new Error(`MISSING_DATA: Cannot parse ${le} for an unknown reason`);throw me.code="MISSING_DATA",me}const Ie=W(q).split(","),X=Ie.length;let se;for(let me=0;me<X;me++)try{const Z=Ie[me].trim(),Ce=D(ye,Z);se=he.decrypt(Ce.ciphertext,Ce.key);break}catch(Z){if(me+1>=X)throw Z}return he.parse(se)}function J(q){console.error(`[dotenv@${a}][WARN] ${q}`)}function ve(q){console.log(`[dotenv@${a}][DEBUG] ${q}`)}function xe(q){console.log(`[dotenv@${a}] ${q}`)}function W(q){return q&&q.DOTENV_KEY&&q.DOTENV_KEY.length>0?q.DOTENV_KEY:t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:""}function D(q,le){let ye;try{ye=new URL(le)}catch(Z){if(Z.code==="ERR_INVALID_URL"){const Ce=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw Ce.code="INVALID_DOTENV_KEY",Ce}throw Z}const Ie=ye.password;if(!Ie){const Z=new Error("INVALID_DOTENV_KEY: Missing key part");throw Z.code="INVALID_DOTENV_KEY",Z}const X=ye.searchParams.get("environment");if(!X){const Z=new Error("INVALID_DOTENV_KEY: Missing environment part");throw Z.code="INVALID_DOTENV_KEY",Z}const se=`DOTENV_VAULT_${X.toUpperCase()}`,me=q.parsed[se];if(!me){const Z=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${se} in your .env.vault file.`);throw Z.code="NOT_FOUND_DOTENV_ENVIRONMENT",Z}return{ciphertext:me,key:Ie}}function K(q){let le=null;if(q&&q.path&&q.path.length>0)if(Array.isArray(q.path))for(const ye of q.path)e.existsSync(ye)&&(le=ye.endsWith(".vault")?ye:`${ye}.vault`);else le=q.path.endsWith(".vault")?q.path:`${q.path}.vault`;else le=r.resolve(process.cwd(),".env.vault");return e.existsSync(le)?le:null}function z(q){return q[0]==="~"?r.join(n.homedir(),q.slice(1)):q}function O(q){const le=b(t.DOTENV_CONFIG_DEBUG||q&&q.debug),ye=b(t.DOTENV_CONFIG_QUIET||q&&q.quiet);(le||!ye)&&xe("Loading env from encrypted .env.vault");const Ie=he._parseVault(q);let X=t;return q&&q.processEnv!=null&&(X=q.processEnv),he.populate(X,Ie,q),{parsed:Ie}}function B(q){const le=r.resolve(process.cwd(),".env");let ye="utf8",Ie=t;q&&q.processEnv!=null&&(Ie=q.processEnv);let X=b(Ie.DOTENV_CONFIG_DEBUG||q&&q.debug),se=b(Ie.DOTENV_CONFIG_QUIET||q&&q.quiet);q&&q.encoding?ye=q.encoding:X&&ve("No encoding is specified. UTF-8 is used by default");let me=[le];if(q&&q.path)if(!Array.isArray(q.path))me=[z(q.path)];else{me=[];for(const w of q.path)me.push(z(w))}let Z;const Ce={};for(const w of me)try{const S=he.parse(e.readFileSync(w,{encoding:ye}));he.populate(Ce,S,q)}catch(S){X&&ve(`Failed to load ${w} ${S.message}`),Z=S}const Ne=he.populate(Ie,Ce,q);if(X=b(Ie.DOTENV_CONFIG_DEBUG||X),se=b(Ie.DOTENV_CONFIG_QUIET||se),X||!se){const w=Object.keys(Ne).length,S=[];for(const fe of me)try{const Re=r.relative(process.cwd(),fe);S.push(Re)}catch(Re){X&&ve(`Failed to load ${fe} ${Re.message}`),Z=Re}xe(`injecting env (${w}) from ${S.join(",")} ${y(`-- tip: ${f()}`)}`)}return Z?{parsed:Ce,error:Z}:{parsed:Ce}}function ee(q){if(W(q).length===0)return he.configDotenv(q);const le=K(q);return le?he._configVault(q):(J(`You set DOTENV_KEY but you are missing a .env.vault file at ${le}. Did you forget to build it?`),he.configDotenv(q))}function Te(q,le){const ye=Buffer.from(le.slice(-64),"hex");let Ie=Buffer.from(q,"base64");const X=Ie.subarray(0,12),se=Ie.subarray(-16);Ie=Ie.subarray(12,-16);try{const me=i.createDecipheriv("aes-256-gcm",ye,X);return me.setAuthTag(se),`${me.update(Ie)}${me.final()}`}catch(me){const Z=me instanceof RangeError,Ce=me.message==="Invalid key length",Ne=me.message==="Unsupported state or unable to authenticate data";if(Z||Ce){const w=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw w.code="INVALID_DOTENV_KEY",w}else if(Ne){const w=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw w.code="DECRYPTION_FAILED",w}else throw me}}function Pe(q,le,ye={}){const Ie=!!(ye&&ye.debug),X=!!(ye&&ye.override),se={};if(typeof le!="object"){const me=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw me.code="OBJECT_REQUIRED",me}for(const me of Object.keys(le))Object.prototype.hasOwnProperty.call(q,me)?(X===!0&&(q[me]=le[me],se[me]=le[me]),Ie&&ve(X===!0?`"${me}" is already defined and WAS overwritten`:`"${me}" is already defined and was NOT overwritten`)):(q[me]=le[me],se[me]=le[me]);return se}const he={configDotenv:B,_configVault:O,_parseVault:j,config:ee,decrypt:Te,parse:k,populate:Pe};return hr.exports.configDotenv=he.configDotenv,hr.exports._configVault=he._configVault,hr.exports._parseVault=he._parseVault,hr.exports.config=he.config,hr.exports.decrypt=he.decrypt,hr.exports.parse=he.parse,hr.exports.populate=he.populate,hr.exports=he,hr.exports}var mp=fp();const vo={".geojson":ur.GeoJSON,".json":ur.GeoJSON,".kml":ur.KML,".gpx":ur.GPX,".tif":ur.GeoTIFF,".tiff":ur.GeoTIFF,".geotiff":ur.GeoTIFF},ws=t=>{const e=t.getName().toLowerCase();for(const[r,n]of Object.entries(vo))if(e.endsWith(r))return n;return null},yo=t=>ws(t)!==null,yi=async t=>{const e=await Nt.getWorkspace();if(!e)throw new Error("No workspace available");const r=await e.getResource(t);if(!r)throw new Error("Invalid URL: "+t);return await r.getContents({uri:!0})},bo=t=>t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:"),Ti={},sn=async(t,e,r)=>{const n=await go(`[**[${e}!='']]`).evaluate(t);for(const i of n){const o=i[e];if(bo(o))continue;let a;if(e==="src"&&r)try{a=(await r.resolveWorkspaceModule(o)).blobUrl}catch{a=await yi(o)}else a=await yi(o);Ti[a]=i[e],i[e]=a}},$n=t=>Ti[t],Dn=async(t,e)=>{const r=await go(`[**[${e}!='']]`).evaluate(t);for(const n of r){const i=n[e];!i||!i.startsWith("blob:")||(n[e]=Ti[i])}},wo=t=>{Me.registerContribution("catalog.root",{label:t.label,icon:t.icon,contributionId:t.contributionId});const e=t.contributionId??t.label;t.items?.forEach(r=>{Me.registerContribution(e,{label:r.label,icon:r.icon,contributionId:r.contributionId});const i=import.meta.resolve("/.");r.items.forEach(o=>{const a={label:o.label,icon:o.icon,state:{...o.state}};a.state?.url&&(a.state.url=a.state.url.replace("${baseURL}/",i)),Me.registerContribution(r.contributionId,a)})})},Zi=t=>{Object.entries(t).forEach(([e,r])=>{const n=/\${([a-zA-Z0-9_]+)}/g;t[e]=r.replace(n,(i,o)=>{const a=t[o];return a!==void 0?a:i})})},xo=async(...t)=>{const e=await Nt.getWorkspace(),r={};for(const n of t){const i=await e?.getResource(n);if(!i)continue;const o=await i.getContents(),a=mp.parse(o||"");Zi(a),Object.assign(r,a)}return Zi(r),r},gp=Object.freeze(Object.defineProperty({__proto__:null,FILE_EXTENSION_TO_SOURCE_TYPE:vo,_blobsLookup:Ti,getOriginalUri:$n,getSourceTypeFromFile:ws,isAbsoluteResource:bo,isSupportedSpatialFile:yo,loadEnvs:xo,registerCatalog:wo,replaceUris:sn,replaceVars:Zi,revertBlobUris:Dn,toBlobUri:yi},Symbol.toStringTag,{value:"Module"}));jo.resolveUrl=t=>yi(t);$r.registerEditorInputHandler({canHandle:t=>t instanceof ir&&t.getName().endsWith(".geospace"),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return e.widgetFactory=r=>V`
            <gs-map id="${r}" .input="${e}"></gs-map>`,e}});const vp=ca(class extends ua{constructor(){super(...arguments),this.key=It}render(t,e){return this.key=t,e}update(t,[e,r]){return e!==this.key&&(pa(t),this.key=e),r}});function ln(t,e){return t.layers.find(r=>r.uuid===e)}function cn(t,e){return t.layers.findIndex(r=>r.uuid===e)}function yp(t,e){return t.controls.findIndex(r=>r.uuid===e)}function bp(t,e){return t.overlays.findIndex(r=>r.uuid===e)}const wp=t=>new Proxy({},{get:(e,r)=>async(...n)=>{for(const i of t)await i[r](...n)}});var nr=(t=>(t[t.LOADED=0]="LOADED",t[t.LAYER_ADDED=1]="LAYER_ADDED",t[t.LAYER_DELETED=2]="LAYER_DELETED",t[t.LAYER_UPDATED=3]="LAYER_UPDATED",t[t.FEATURE_SELECTED=4]="FEATURE_SELECTED",t))(nr||{});const gr=Hr($l),xp=`:root,
:host {
  --ol-background-color: white;
  --ol-accent-background-color: #F5F5F5;
  --ol-subtle-background-color: rgba(128, 128, 128, 0.25);
  --ol-partial-background-color: rgba(255, 255, 255, 0.75);
  --ol-foreground-color: #333333;
  --ol-subtle-foreground-color: #666666;
  --ol-brand-color: #00AAFF;
}

.ol-box {
  box-sizing: border-box;
  border-radius: 2px;
  border: 1.5px solid var(--ol-background-color);
  background-color: var(--ol-partial-background-color);
}

.ol-mouse-position {
  top: 8px;
  right: 8px;
  position: absolute;
}

.ol-scale-line {
  background: var(--ol-partial-background-color);
  border-radius: 4px;
  bottom: 8px;
  left: 8px;
  padding: 2px;
  position: absolute;
}

.ol-scale-line-inner {
  border: 1px solid var(--ol-subtle-foreground-color);
  border-top: none;
  color: var(--ol-foreground-color);
  font-size: 10px;
  text-align: center;
  margin: 1px;
  will-change: contents, width;
  transition: all 0.25s;
}

.ol-scale-bar {
  position: absolute;
  bottom: 8px;
  left: 8px;
}

.ol-scale-bar-inner {
  display: flex;
}

.ol-scale-step-marker {
  width: 1px;
  height: 15px;
  background-color: var(--ol-foreground-color);
  float: right;
  z-index: 10;
}

.ol-scale-step-text {
  position: absolute;
  bottom: -5px;
  font-size: 10px;
  z-index: 11;
  color: var(--ol-foreground-color);
  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);
}

.ol-scale-text {
  position: absolute;
  font-size: 12px;
  text-align: center;
  bottom: 25px;
  color: var(--ol-foreground-color);
  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);
}

.ol-scale-singlebar {
  position: relative;
  height: 10px;
  z-index: 9;
  box-sizing: border-box;
  border: 1px solid var(--ol-foreground-color);
}

.ol-scale-singlebar-even {
  background-color: var(--ol-subtle-foreground-color);
}

.ol-scale-singlebar-odd {
  background-color: var(--ol-background-color);
}

.ol-unsupported {
  display: none;
}

.ol-viewport,
.ol-unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.ol-viewport canvas {
  all: unset;
  overflow: hidden;
}

.ol-viewport {
  touch-action: pan-x pan-y;
}

.ol-selectable {
  -webkit-touch-callout: default;
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text;
}

.ol-grabbing {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}

.ol-grab {
  cursor: move;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}

.ol-control {
  position: absolute;
  background-color: var(--ol-subtle-background-color);
  border-radius: 4px;
}

.ol-zoom {
  top: .5em;
  left: .5em;
}

.ol-rotate {
  top: .5em;
  right: .5em;
  transition: opacity .25s linear, visibility 0s linear;
}

.ol-rotate.ol-hidden {
  opacity: 0;
  visibility: hidden;
  transition: opacity .25s linear, visibility 0s linear .25s;
}

.ol-zoom-extent {
  top: 4.643em;
  left: .5em;
}

.ol-full-screen {
  right: .5em;
  top: .5em;
}

.ol-control button {
  display: block;
  margin: 1px;
  padding: 0;
  color: var(--ol-subtle-foreground-color);
  font-weight: bold;
  text-decoration: none;
  font-size: inherit;
  text-align: center;
  height: 1.375em;
  width: 1.375em;
  line-height: .4em;
  background-color: var(--ol-background-color);
  border: none;
  border-radius: 2px;
}

.ol-control button::-moz-focus-inner {
  border: none;
  padding: 0;
}

.ol-zoom-extent button {
  line-height: 1.4em;
}

.ol-compass {
  display: block;
  font-weight: normal;
  will-change: transform;
}

.ol-touch .ol-control button {
  font-size: 1.5em;
}

.ol-touch .ol-zoom-extent {
  top: 5.5em;
}

.ol-control button:hover,
.ol-control button:focus {
  text-decoration: none;
  outline: 1px solid var(--ol-subtle-foreground-color);
  color: var(--ol-foreground-color);
}

.ol-zoom .ol-zoom-in {
  border-radius: 2px 2px 0 0;
}

.ol-zoom .ol-zoom-out {
  border-radius: 0 0 2px 2px;
}

.ol-attribution {
  text-align: right;
  bottom: .5em;
  right: .5em;
  max-width: calc(100% - 1.3em);
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
}

.ol-attribution a {
  color: var(--ol-subtle-foreground-color);
  text-decoration: none;
}

.ol-attribution ul {
  margin: 0;
  padding: 1px .5em;
  color: var(--ol-foreground-color);
  text-shadow: 0 0 2px var(--ol-background-color);
  font-size: 12px;
}

.ol-attribution li {
  display: inline;
  list-style: none;
}

.ol-attribution li:not(:last-child):after {
  content: " ";
}

.ol-attribution img {
  max-height: 2em;
  max-width: inherit;
  vertical-align: middle;
}

.ol-attribution button {
  flex-shrink: 0;
}

.ol-attribution.ol-collapsed ul {
  display: none;
}

.ol-attribution:not(.ol-collapsed) {
  background: var(--ol-partial-background-color);
}

.ol-attribution.ol-uncollapsible {
  bottom: 0;
  right: 0;
  border-radius: 4px 0 0;
}

.ol-attribution.ol-uncollapsible img {
  margin-top: -.2em;
  max-height: 1.6em;
}

.ol-attribution.ol-uncollapsible button {
  display: none;
}

.ol-zoomslider {
  top: 4.5em;
  left: .5em;
  height: 200px;
}

.ol-zoomslider button {
  position: relative;
  height: 10px;
}

.ol-touch .ol-zoomslider {
  top: 5.5em;
}

.ol-overviewmap {
  left: 0.5em;
  bottom: 0.5em;
}

.ol-overviewmap.ol-uncollapsible {
  bottom: 0;
  left: 0;
  border-radius: 0 4px 0 0;
}

.ol-overviewmap .ol-overviewmap-map,
.ol-overviewmap button {
  display: block;
}

.ol-overviewmap .ol-overviewmap-map {
  border: 1px solid var(--ol-subtle-foreground-color);
  height: 150px;
  width: 150px;
}

.ol-overviewmap:not(.ol-collapsed) button {
  bottom: 0;
  left: 0;
  position: absolute;
}

.ol-overviewmap.ol-collapsed .ol-overviewmap-map,
.ol-overviewmap.ol-uncollapsible button {
  display: none;
}

.ol-overviewmap:not(.ol-collapsed) {
  background: var(--ol-subtle-background-color);
}

.ol-overviewmap-box {
  border: 1.5px dotted var(--ol-subtle-foreground-color);
}

.ol-overviewmap .ol-overviewmap-box:hover {
  cursor: move;
}

.ol-overviewmap .ol-viewport:hover {
  cursor: pointer;
}
`;function Ip(t){return t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:")}function aa(t,e){if(t.startsWith("/"))return t.slice(1);const r=e.split("/").filter(o=>o),n=t.split("/").filter(o=>o);if(t.startsWith("./")||t.startsWith("../")||!t.startsWith("/")){const o=r.slice(0,-1);r.length=0,r.push(...o)}for(const o of n)o!=="."&&(o===".."?r.length>0&&r.pop():r.push(o));return r.join("/")}function kp(t){const e=[],r=/import\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,n=/export\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,i=/import\s*\(\s*["']([^"']+)["']\s*\)/g;let o;for(;(o=r.exec(t))!==null;)e.push({fullMatch:o[0],importPath:o[1],isDynamic:!1,startIndex:o.index,endIndex:o.index+o[0].length});for(;(o=n.exec(t))!==null;)e.push({fullMatch:o[0],importPath:o[1],isDynamic:!1,startIndex:o.index,endIndex:o.index+o[0].length});for(;(o=i.exec(t))!==null;)e.push({fullMatch:o[0],importPath:o[1],isDynamic:!0,startIndex:o.index,endIndex:o.index+o[0].length});return e.sort((a,c)=>c.startIndex-a.startIndex)}class Sp{constructor(){this.blobUrlCache=new Map,this.moduleCache=new Map,this.resolvingModules=new Set,this.resolvingPromises=new Map}async resolveModuleRecursive(e){if(!await Nt.getWorkspace())throw new Error("Workspace not available");if(this.blobUrlCache.has(e))return this.blobUrlCache.get(e);if(this.resolvingPromises.has(e))return await this.resolvingPromises.get(e);if(this.resolvingModules.has(e))throw new Error(`Circular dependency detected: ${e}`);this.resolvingModules.add(e);const n=this.doResolveModule(e);this.resolvingPromises.set(e,n);try{return await n}finally{this.resolvingPromises.delete(e)}}async doResolveModule(e){const r=await Nt.getWorkspace();if(!r)throw new Error("Workspace not available");try{let n=await r.getResource(e);if(n||(await r.listChildren(!0),n=await r.getResource(e)),!n)throw new Error(`Module not found: ${e}`);let i=await n.getContents();const o=kp(i);for(const f of o){const b=f.importPath;if(!Ip(b))try{const R=aa(b,e),y=await this.resolveModuleRecursive(R);let I;if(f.isDynamic)I=`import("${y}")`;else{const k=f.fullMatch.search(/["']/);if(k===-1)I=f.fullMatch;else{const j=f.fullMatch[k],J=f.fullMatch.lastIndexOf(j);J!==-1&&J>k?I=f.fullMatch.slice(0,k+1)+y+f.fullMatch.slice(J):I=f.fullMatch}}i=i.slice(0,f.startIndex)+I+i.slice(f.endIndex)}catch{}}const a=new Blob([i],{type:"application/javascript"}),c=URL.createObjectURL(a);return this.blobUrlCache.set(e,c),this.moduleCache.set(e,{code:i,workspacePath:e,blobUrl:c}),c}catch(n){throw n}finally{this.resolvingModules.delete(e)}}async resolveWorkspaceModule(e,r){const n=r?aa(e,r):e;if(this.moduleCache.has(n))return this.moduleCache.get(n);await this.resolveModuleRecursive(n);const i=this.moduleCache.get(n);if(!i)throw new Error(`Failed to resolve module: ${n}`);return i}clear(){for(const e of this.blobUrlCache.values())e.startsWith("blob:")&&URL.revokeObjectURL(e);this.blobUrlCache.clear(),this.moduleCache.clear(),this.resolvingModules.clear()}}const _p="iframe-map-renderer.html";class Cp{constructor(e,r){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=r,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(r,n){return async(...i)=>await e.sendMessage(n,{...i})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=_p,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}async getViewExtent(){return(await this.sendMessage("getViewExtent",{}))?.extent||[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(e){this.onSyncCallback&&this.onSyncCallback(e)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,r){try{const{toBlobUri:n}=await mt(async()=>{const{toBlobUri:o}=await Promise.resolve().then(()=>gp);return{toBlobUri:o}},void 0),i=await n(r);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:i},"*")}catch(n){this.iframe.contentWindow.postMessage({id:e,success:!1,error:n instanceof Error?n.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{if(e.source!==this.iframe?.contentWindow)return;const{id:r,result:n,error:i,type:o,event:a}=e.data;if(r!==void 0&&this.pendingMessages.has(r)){const{resolve:c,reject:f}=this.pendingMessages.get(r);if(this.pendingMessages.delete(r),i)f(new Error(i));else{const b=n??Object.fromEntries(Object.entries(e.data).filter(([R])=>!["id","type","event","error"].includes(R)));c(b)}}o==="dirty"?this.onDirtyCallback?.():o==="sync"?this.onSyncCallback?.(a):o==="iframeClicked"?this.onClickCallback?.():o==="resolveAsset"&&this.handleAssetResolution(r,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const r=n=>{n.source===this.iframe?.contentWindow&&n.data.type==="rendererReady"&&(window.removeEventListener("message",r),e())};window.addEventListener("message",r)})}async sendMessage(e,r){if(!this.iframe)throw new Error("Iframe not initialized");const n=++this.messageId;return new Promise((i,o)=>{this.pendingMessages.set(n,{resolve:i,reject:o}),this.iframe.contentWindow.postMessage({id:n,method:e,params:r},"*"),setTimeout(()=>{this.pendingMessages.has(n)&&(this.pendingMessages.delete(n),o(new Error("Message timeout")))},5e3)})}}class Ep{constructor(e,r){this.gsMap=e,this.renderer=r}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,r){r?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){const r=cn(this.gsMap,e);r>=0&&(this.gsMap.layers.splice(r,1),this.triggerDirty())}async renameLayer(e,r){const n=ln(this.gsMap,e);n&&(n.name=r,this.triggerDirty())}async moveLayer(e,r){const n=cn(this.gsMap,e);if(n<0)return;let i;if(r){if(i=cn(this.gsMap,r),i<0||n===i)return}else i=n>0?n-1:n+1;if(i>=0&&i<this.gsMap.layers.length&&n!==i){const[o]=this.gsMap.layers.splice(n,1);this.gsMap.layers.splice(i,0,o),this.triggerDirty()}}async setLayerVisible(e,r){const n=ln(this.gsMap,e);n&&(n.visible=r,this.triggerDirty())}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){const r=yp(this.gsMap,e);r>=0&&(this.gsMap.controls.splice(r,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(e,r){this.gsMap.overlays.push({src:e,position:r||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){const r=bp(this.gsMap,e);r>=0&&(this.gsMap.overlays.splice(r,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(e,r){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class Ap{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,r){gr.set({part:this.source,event:nr.LAYER_ADDED})}async deleteLayer(e){gr.set({part:this.source,event:nr.LAYER_DELETED})}async renameLayer(e,r){gr.set({part:this.source,event:nr.LAYER_UPDATED})}async moveLayer(e,r){gr.set({part:this.source,event:nr.LAYER_UPDATED})}async setLayerVisible(e,r){}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,r){}async removeOverlay(e){}async enableDrawing(e,r){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){gr.set({part:this.source,event:nr.LAYER_UPDATED})}}var Tp=Object.defineProperty,Op=Object.getOwnPropertyDescriptor,Jn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Op(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Tp(e,r,i),i};const Rp=Vr("GsMapEditor");let Ot=class extends jt{constructor(){super(),this.mapContainer=yr(),this.isFirstConnection=!0,this.moduleResolver=new Sp,this.interactionMode="none",this.commandStack=new ka}getRenderer(){return this.renderer}getOperations(){return this.operations}onMapChanged({part:t,event:e}){t===this&&(e===nr.LAYER_ADDED||e===nr.LAYER_DELETED||e===nr.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const e=this.getGsMap()?.layers.filter(n=>{const i=n.type===As.VECTOR,o=n.source?.type===ur.Features;return i&&o})||[],r=this.activeDrawingLayerUuid!==void 0;return V`
            <k-command cmd="zoom_in" icon="magnifying-glass-plus" title="Zoom in"></k-command>
            <k-command cmd="zoom_out" icon="magnifying-glass-minus" title="Zoom out"></k-command>
            <k-command cmd="reset_view" icon="house" title="Reset view"></k-command>
            <k-command cmd="refresh_map" icon="rotate" title="Refresh map"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command cmd="toggle_color_mode" icon="circle-half-stroke" title="Toggle dark/light mode"></k-command>
            <k-command cmd="toggle_mobile_view" icon="mobile" title="Toggle mobile view"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command icon="plus" 
                      title="Create Drawing Layer"
                      .action=${()=>this.handleCreateDrawingLayer()}>
            </k-command>
            
            ${Ut(e.length>0,()=>{const n=e.map(i=>`${i.uuid}:${i.name}`).join("|");return V`
                ${vp(n,V`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${i=>{const o=i.target.value||void 0;this.activeDrawingLayerUuid=o,(o===void 0||i.target.value==="")&&(this.operations?.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${e.map(i=>V`
                            <wa-option value="${i.uuid}">${i.name||"Layer"}</wa-option>
                        `)}
                    </wa-select>
                `)}
                
                <k-command icon="location-dot" 
                          title="Draw Point"
                          ?disabled=${!r}
                          .action=${()=>this.handleDrawPoint()}>
                </k-command>
                <k-command icon="minus" 
                          title="Draw LineString"
                          ?disabled=${!r}
                          .action=${()=>this.handleDrawLine()}>
                </k-command>
                <k-command icon="draw-polygon" 
                          title="Draw Polygon"
                          ?disabled=${!r}
                          .action=${()=>this.handleDrawPolygon()}>
                </k-command>
                
                <k-command icon="trash" 
                          title="Delete Selected Features"
                          ?disabled=${this.interactionMode!=="select"}
                          .action=${()=>this.handleDeleteSelected()}>
                </k-command>

                <wa-divider orientation="vertical"></wa-divider>
            `})}
            
            <k-command icon="hand-pointer" 
                      title="Select Features"
                      .action=${()=>this.handleSelectFeatures()}>
            </k-command>

            <wa-divider orientation="vertical"></wa-divider>
        `}async connectedCallback(){if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}this.renderer?.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{at.set(this)}))}async doInitUI(){const t=this.input?.data,e=await xo(".env");e.BUILD_TIME=new Date;const r=await t.getContents();let n=r&&r.trim()?JSON.parse(r):da;n=this.migrateGsMap(n),Ts(n),await sn(n,"url"),await sn(n,"src",this.moduleResolver),this.gsMap=n,n.view&&(this.initialView={center:[...n.view.center],zoom:n.view.zoom}),this.renderer=new Cp(n,e);const i=this.renderer.getOperations(),o=new Ep(n,this.renderer),a=new Ap(this);this.operations=wp([o,i,a]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(c=>{if(this.gsMap){switch(c.type){case"viewChanged":this.gsMap.view.center=c.view.center,this.gsMap.view.zoom=c.view.zoom,c.view.rotation!==void 0&&c.view.rotation!==0&&(this.gsMap.view.rotation=c.view.rotation);break;case"featuresChanged":const f=ln(this.gsMap,c.layerUuid);f&&f.source?.type===ur.Features&&(f.source.features=c.features);break;case"featureSelected":const b={feature:c.feature,layerUuid:c.layerUuid,metrics:c.metrics};console.info("Feature metrics:",b.metrics),gr.set({part:this,event:nr.FEATURE_SELECTED,payload:b});break;case"featureDeselected":console.info("Feature deselected"),gr.set({part:this,event:nr.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),this.renderer.setOnClick?.(()=>{at.set(this)}),this.updateToolbar(),gr.set({part:this,event:nr.LOADED})}catch(c){console.error("Failed to render map:",c),Ze(`Failed to render map: ${c.message}`)}}migrateGsMap(t){const e={...t};let r=!1;return t.view||(console.log("Creating view field and migrating old properties..."),r=!0,e.view={},t.center!==void 0&&(e.view.center=t.center,delete e.center),t.zoom!==void 0&&(e.view.zoom=t.zoom,delete e.zoom),t.projection!==void 0&&(e.view.projection=t.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857")),(!t.styles||Object.keys(t.styles).length===0)&&(console.log("Adding default styles to map..."),r=!0,e.styles={...Bo}),(!t.styleRules||t.styleRules.length===0)&&(console.log("Adding default style rules to map..."),r=!0,e.styleRules=[...Go]),r&&console.log("Map migration completed"),e}getGsMap(){return this.gsMap}async save(){if(!this.renderer){Ze("Map not initialized");return}try{if(!this.gsMap){Ze("Map not initialized");return}const t=JSON.parse(JSON.stringify(this.gsMap));await Dn(t,"url"),await Dn(t,"src"),this.input?.data.saveContents(JSON.stringify(t,null,2)),this.markDirty(!1)}catch(t){Ze(`Save failed: ${t.message}`)}}get mapOperations(){return this.operations}edit(){tr("not yet implemented")}async refresh(){if(!this.renderer||!this.gsMap){Rp.error("Map not initialized");return}await Dn(this.gsMap,"url"),await Dn(this.gsMap,"src"),this.moduleResolver.clear(),await sn(this.gsMap,"url"),await sn(this.gsMap,"src",this.moduleResolver),await this.renderer.modelToUI(this.gsMap)}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Point",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("LineString",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Polygon",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){await this.operations?.enableFeatureSelection(),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){if(this.interactionMode==="select")try{await this.operations?.deleteSelectedFeatures(),tr("Selected features deleted")}catch(t){Ze(t.message)}}async handleCreateDrawingLayer(){if(!this.gsMap){Ze("Map not initialized");return}const t=await Wn("Enter name for new drawing layer:","Drawing Layer");if(!t)return;const e=Ts({name:t,type:As.VECTOR,source:{type:ur.Features,features:[]},visible:!0});await this.operations?.addLayer(e,!1);const r=this.gsMap?.layers.find(n=>n.uuid===e.uuid);r?.uuid&&(this.activeDrawingLayerUuid=r.uuid),await this.updateComplete,this.updateToolbar(),tr(`Created drawing layer: ${t}`)}doClose(){this.renderer?.destroy(),this.renderer=void 0,this.input=void 0,this.moduleResolver.clear()}render(){return V`
            <div class="gc-map-container" ${br(this.mapContainer)}>
            </div>
        `}};Ot.styles=[Wo(xp),Yt`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .gc-map-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
        }
    `];Jn([Ve({attribute:!1})],Ot.prototype,"input",2);Jn([Ve({type:String})],Ot.prototype,"activeDrawingLayerUuid",2);Jn([Ve({type:String})],Ot.prototype,"interactionMode",2);Jn([hs(gr)],Ot.prototype,"onMapChanged",1);Ot=Jn([Et("gs-map")],Ot);var Pp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Oi=(t,e,r,n)=>{for(var i=n>1?void 0:n?Lp(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Pp(e,r,i),i};let fn=class extends jt{onPartChanged(t){if(!(t==this||t==this.mapEditor)){if(!(t instanceof Ot)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=t,this.requestUpdate()}}onMapChanged({part:t}){t==this.mapEditor&&this.requestUpdate()}toggleVisible(t){const e=this.mapEditor.getGsMap(),r=ln(e,t);if(!r)return;const i=!(r.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(t,i),this.updateLater()}async confirmAction(t,e){await mn(t)&&e()}selectLayer(t){this.selectedLayerUuid=t,this.updateToolbar(),this.updateContextMenu()}renameLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const r=this.mapEditor.getGsMap();if(!ln(r,e))return;const i=cn(r,e),o=je.createExecutionContext({index:i+1});je.execute("rename_layer",o)}deleteLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const r=this.mapEditor.getGsMap(),n=ln(r,e);n&&this.confirmAction(`Delete layer "${n.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(e)))}moveLayerUp(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const r=cn(e,t);if(r<=0)return;const n=e.layers[r-1]?.uuid;n&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(t,n)),this.selectedLayerUuid=n)}moveLayerDown(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const r=cn(e,t);if(r<0||r>=e.layers.length-1)return;const n=e.layers[r+1]?.uuid;n&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(t,n)),this.selectedLayerUuid=n)}renderToolbar(){const t=this.selectedLayerUuid!==void 0;return V`
            <k-command ?disabled=${!t} 
                      title="Rename selected layer" 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
            </k-command>
            <k-command ?disabled=${!t} 
                      title="Delete selected layer" 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
            </k-command>
        `}renderContextMenu(){const t=this.selectedLayerUuid!==void 0;return V`
            <k-command ?disabled=${!t} 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
                Rename
            </k-command>
            <k-command ?disabled=${!t} 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
                Delete
            </k-command>
        `}render(){return Ut(!this.mapEditor,()=>V`
                    <k-no-content message="Select a map."></k-no-content>`,()=>V`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((t,e)=>V`
                            <wa-tree-item @click="${()=>t.uuid&&this.selectLayer(t.uuid)}" 
                                          class="${this.selectedLayerUuid===t.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${t.name??`Layer ${e+1}`}${e==0?V`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-command size="small"
                                                  icon="${t.visible!==!1?"eye":"eye-slash"}"
                                                  title="${t.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>t.uuid&&this.toggleVisible(t.uuid)}>
                                        </k-command>
                                        <k-command size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${e===0}"
                                                  .action=${()=>t.uuid&&this.moveLayerUp(t.uuid)}>
                                        </k-command>
                                        <k-command size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${e===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>t.uuid&&this.moveLayerDown(t.uuid)}>
                                        </k-command>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(t=>V`
                            <wa-tree-item>
                                <span>${$n(t.src)}</span>
                                <k-command size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{t.uuid&&this.confirmAction(`Delete control "${$n(t.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(t.uuid)))}}>
                                </k-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(t=>V`
                            <wa-tree-item>
                                <span>${$n(t.src)}</span>
                                <k-command size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{t.uuid&&this.confirmAction(`Delete overlay "${$n(t.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(t.uuid)))}}>
                                </k-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="highlighter"></k-icon> Styles
                        <wa-tree-item>
                            <span>Defined Styles: ${Object.keys(this.mapEditor.getGsMap()?.styles||{}).length}</span>
                        </wa-tree-item>
                        <wa-tree-item>
                            <span>Style Rules: ${this.mapEditor.getGsMap()?.styleRules?.length||0}</span>
                        </wa-tree-item>
                    </wa-tree-item>
                </wa-tree>
            `)}};fn.styles=Yt`
        :host {
            display: flex;
            flex-direction: column;
        }
        
        wa-tree-item.selected {
            background-color: var(--wa-color-primary-50);
        }
        
        .layer-item {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 4px;
        }
        
        .layer-name {
            flex: 1;
        }
        
        .layer-actions {
            display: flex;
            gap: 2px;
        }
    `;Oi([At()],fn.prototype,"selectedLayerUuid",2);Oi([hs(an)],fn.prototype,"onPartChanged",1);Oi([hs(gr)],fn.prototype,"onMapChanged",1);fn=Oi([Et("gs-map-props")],fn);var $p=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Io=(t,e,r,n)=>{for(var i=n>1?void 0:n?Dp(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&$p(e,r,i),i};const Np="catalog.root";let Pr=class extends jt{constructor(){super(...arguments),this.treeRef=yr()}doBeforeUI(){const t=Me.getContributions(Np);this.rootNodes=this.toTreeNodes(t)}renderToolbar(){const t=at.get()instanceof Pr&&er.get()!==void 0;return V`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!t} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(t){return t.map(e=>{const r={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const n=Me.getContributions(e.contributionId);r.leaf=n.length===0,r.children=this.toTreeNodes(n)}return r})}onItemDblClicked(t){const e=t.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(t){const e=t.detail.selection[0].model;er.set(e.data)}setAllExpanded(t){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(r=>{r.expanded=t})}refresh(){this.requestUpdate()}createTreeItems(t,e=!1){return t?V`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${t} ?expanded=${e}>
                <span><k-icon name="${t.icon}"></k-icon> ${t.label}</span>
                ${t.children?.map(r=>this.createTreeItems(r))}
            </wa-tree-item>`:V``}render(){return V`
            <wa-tree ${br(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${this.rootNodes?.map(t=>this.createTreeItems(t,!0))}
            </wa-tree>
        `}};Pr.styles=Yt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;Io([At()],Pr.prototype,"rootNodes",2);Pr=Io([Et("gs-catalog")],Pr);const Mp="geo!space catalog",Fp="earth",qp="catalog.root.geospace",zp=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],Up={label:Mp,icon:Fp,contributionId:qp,items:zp};lt({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async t=>{let e=t.params&&t.params.url;if(!e){const n=er.get();if(!n||!("url"in n))return;e=n.url}const r=await Nt.getWorkspace();if(!r){Ze("No workspace selected.");return}fetch(e,{method:"GET"}).then(n=>n.blob()).then(n=>{const i=new URL(e).pathname.split("/"),o=i[i.length-1];return r.getResource(o,{create:!0}).then(a=>a.saveContents(n,{contentType:Ka.BINARY}).then(()=>{tr("File checked out: "+o)}))}).catch(n=>{Ze(n)})}}});lt({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async t=>{const e=at.get();e instanceof Pr&&e.refresh()}}});lt({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=at.get();e instanceof Pr&&e.setAllExpanded(!0)}}});lt({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=at.get();e instanceof Pr&&e.setAllExpanded(!1)}}});wo(Up);const jp=Vr("GsCommandHandlers"),Er=t=>t.activeEditor instanceof Ot,Dr=t=>{const e=t.activeEditor;if(!(e instanceof Ot)||!e.getOperations())throw jp.error("GsMapEditor with renderer not available in context.activeEditor"),new Error("GsMapEditor with renderer not available in context.activeEditor");return e.getOperations()};je.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level (typically 0-20, where 0=world view, 5-9=country/region, 10-12=city, 13-15=street, 16-20=building detail)",required:!0}]},handler:{canExecute:Er,execute:async t=>{const e=Dr(t),r=Number(t.params.zoom).valueOf();return await e.setZoom(r),{zoom:r}}}});je.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:t=>at.get()instanceof Ot,execute:async t=>{const e=at.get(),r=e.getGsMap();if(r?.view?.zoom!==void 0){const n=e.mapOperations,i=r.view.zoom+1;return await n?.setZoom(i),i}return r?.view?.zoom}}});je.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:t=>at.get()instanceof Ot,execute:async t=>{const e=at.get(),r=e.getGsMap();if(r?.view?.zoom!==void 0){const n=e.mapOperations,i=r.view.zoom-1;return await n?.setZoom(i),i}return r?.view?.zoom}}});je.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the location (e.g., 52.52 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0},{name:"lon",description:"the longitude of the location (e.g., 13.405 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0}]},handler:{canExecute:Er,execute:async t=>{const e=Dr(t),r=Vo([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]);await e.setCenter([r[0],r[1]])}}});je.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(ur).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:Er,execute:async t=>{const e=Dr(t),r=t.params.source?.trim().toLowerCase(),n=t.params.url,i=Ho(r),o=t?.params&&t.params.basemap==!0;let a;n&&(a=n.split("/").pop()),!a&&i&&(a=i);const c=Os({name:a,type:Ko(r),source:Os({type:i,url:n??Yo(i)})});await sn(c,"url"),await e.addLayer(c,o)}}});je.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:Er,execute:async t=>{const e=Dr(t),n=t.activeEditor.getGsMap(),i=parseInt(t.params.index)-1;if(i<0||!n||i>=n.layers.length)return;const o=n.layers[i];o?.uuid&&await e.deleteLayer(o.uuid)}}});je.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:Er,execute:async t=>{const e=Dr(t),n=t.activeEditor.getGsMap(),i=parseInt(t.params.index)-1;if(i<0||!n||i>=n.layers.length)return;const o=n.layers[i];if(!o?.uuid)return;const a=o.name||`Layer ${i+1}`,c=t.params?.newName||await Wn(`Enter new name for "${a}":`,a);!c||c===a||await e.renameLayer(o.uuid,c)}}});je.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:Er,execute:async t=>{const e=Dr(t),r=t.params?.mode;await e.switchColorMode(r)}}});je.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:Er,execute:async t=>{const e=Dr(t),r=t.params.src,n=t.params.position;await e.addOverlayFromModule(r,n)}}});je.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:Er,execute:async t=>{const e=Dr(t),r=t.params.src;await e.addControlFromModule(r)}}});je.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates in WGS84 (EPSG:4326) format",type:"number[]"}]},handler:{canExecute:Er,execute:async t=>{const e=t.activeEditor,r=t.params.latlon,i=await e.getRenderer().getViewExtent();if(!i)throw new Error("Failed to get view extent");let o=i;if(r||r===void 0){const{transformExtent:a}=await mt(async()=>{const{transformExtent:c}=await import("./index-DoDY4M9O.js").then(f=>f.ah);return{transformExtent:c}},__vite__mapDeps([1,2]));o=a(i,"EPSG:3857","EPSG:4326"),[o[0],o[1]]=[o[1],o[0]],[o[2],o[3]]=[o[3],o[2]]}return t.viewExtent=o,o}}});je.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:t=>at.get()instanceof Ot,execute:async t=>{const e=at.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});je.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:t=>at.get()instanceof Ot,execute:async t=>{const e=at.get();e instanceof Ot&&await e.refresh()}}});je.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:t=>at.get()instanceof Ot,execute:async t=>{const e=at.get();e instanceof Ot&&await e.resetView()}}});je.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:t=>at.get()instanceof Ot,execute:async t=>{const r=at.get().mapOperations;r&&await r.switchColorMode()}}});const Wp=`You are an assistant embedded in a highly modular and extendable web application.
The application provides the following components:
- a workspace/file browser in the left sidebar
- an editor area in the center which shows a welcome message and how to get started if no workspace is selected
- an AI chat interface in the auxiliary sidebar (right side) with tab label "AI" to interact with you
- a bottom panel for logs and terminal output

The workspace component (file browser) allows to select a local folder as a workspace.
Once a workspace is connected, it will be restored when the user reloads the application.
If the user does not see a file they expect to be in the workspace,
they can choose to reload the workspace which will lead to syncing the workspace folder with the local file system.

Files are opened using appropriate editors based on their type.
The code editor has IDE like UI,
such as syntax highlighting and syntax checking for most well known programming languages and file formats.
The user can execute code in Python or JavaScript by pressing the run button in the open code editor.

If a file is dirty, i.e. the user made changes to its content, the tab title of the dirty editor will signal this
by showing an asterisk "*".

If the user prompt starts with "/<command>" where <command> is a command name,
the application will directly run the registered command.

Via a button with a puzzle icon in the top-right corner, the extensions editor can be opened.
The user can browse available extensions, install, or uninstall it (in this case a reload of the web app is required).

**Command Execution via Tools:**

The application exposes commands as AI-callable tools/functions. These tools represent actual commands you can execute directly in the application.

**Tool Architecture:**
- Tools are dynamically generated from available commands in the system
- Commands are **context-aware/context-sensitive** - different commands are available depending on the current application context (active editor, selected files, workspace state, etc.)
- The available tools you see at any given time reflect what commands can be executed in the current context
- Each tool includes:
  - A descriptive name and function description
  - Parameter definitions with types, descriptions, and whether they're required
  - Enum values for parameters where applicable
- You can call multiple tools in sequence to accomplish complex tasks
- The system prevents infinite loops with a maximum iteration limit

**Context Information:**
- You receive current application state with each user prompt, including:
  - The active workspace name (if a workspace is selected)
  - The currently active editor (if any editor is open)
- Use this contextual information to understand what the user is working with and provide relevant assistance

**Rules for using tools:**
1. **Always check for available tools first** - If tools are available and the user requests an action that can be performed via a tool, you MUST call that tool
2. **Never describe manual steps when tools are available** - If a tool exists for an action, use it. Do not tell the user to click buttons or use menus
3. **Read tool descriptions and parameters** - Each tool's description and parameters explain exactly what it does and what parameters it needs. Use this information to determine the correct tool and parameters.
4. **Call tools in sequence when needed** - For complex requests requiring multiple steps, call tools one after another.
5. **Provide final response after tool execution** - After executing tools and receiving successful results, you MUST provide a final text response to the user confirming the completion of the task. Do NOT call more tools after receiving success results unless the user explicitly requested additional steps.
6. **Do NOT loop tool calls** - Once you receive a tool result indicating success, do NOT call the same or similar tool again. The task is complete - provide your response to the user instead of calling more tools.

**If tools are NOT available:** This means the current context doesn't support command execution. In this case:
- Explain what context is needed for the requested action
- Describe manual steps or explain how to perform the action using the UI
- Suggest changing the context if needed (e.g., opening the appropriate file or editor)

**Important:** When tools are provided, they represent actual commands you can execute. Use them immediately rather than discussing alternatives. The tool descriptions tell you exactly what each tool does and what parameters it requires.

Answer technical requests not by code any technical terms, but by abstract and easy-to-understand concepts.
Keep your answer concise and as short as possible: specific requests are handled by other assistants.

`,Bp=`
**geo!space - WebGIS Application:**

geo!space is a WebGIS (Web Geographic Information System) application for creating, editing, and visualizing interactive maps.

**Core Capabilities:**
- Interactive map editor with zoom, pan, and layer management
- Support for multiple layer types: GeoJSON, WMS, WMTS, Vector Tiles, and more
- Drawing tools for creating and editing geographic features
- Style management for customizing layer appearance
- Map state persistence in .geospace files (JSON format containing map configuration, layers, view settings, and styles)

**Map Editor:**
When a .geospace file is open, the map editor provides:
- Interactive map view with coordinate system support (EPSG:3857, EPSG:4326, etc.)
- Layer panel for managing multiple data layers
- Drawing tools for creating points, lines, and polygons
- Style editor for customizing layer visualizations
- Catalog integration for browsing and adding spatial data
`,Gp={enhance:async(t,e)=>`${Bp}

${t}`,priority:5};function Vp(){Me.registerContribution(Kn,{label:"Geo!space Prompt Enhancer",enhancer:Gp})}const Hp=`# 🌐 geo!space
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/erdalkaraca/geospace)
[![Browser Support](https://img.shields.io/badge/Chrome%20%7C%20Opera-Supported-brightgreen)](#-browser-compatibility)
[![AI Providers](https://img.shields.io/badge/AI%20Providers-6-blue)](#-ai-configuration)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-purple)](#-key-features)
[![No Installation](https://img.shields.io/badge/Installation-None%20Required-orange)](#-quick-start)

**The Interactive Mapping IDE in Your Browser**

geo!space is a powerful web application that combines professional mapping capabilities with AI-powered automation tools. Create interactive maps, execute Python and JavaScript code, and automate repetitive tasks using natural language prompts - all without installing any software, directly in your browser.

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🌐 Browser Compatibility](#-browser-compatibility)
- [🌟 Use Cases](#-use-cases)
- [🚀 Getting Started](#-getting-started)
- [👨‍💻 Development](#-development)
- [💬 Commands & Natural Language](#-commands--natural-language)
- [💡 Examples](#-examples)
- [⚙️ AI Configuration](#️-ai-configuration)
- [🔧 Troubleshooting](#-troubleshooting)
- [❓ FAQ](#-faq)
- [🏗️ Technical Architecture](#️-technical-architecture)
- [🤝 Trusted by](#-trusted-by)
- [⚡ Quick Start](#-quick-start)

## ✨ Key Features

### 🗺️ **Professional Mapping**
- **Interactive Map Editor**: Create and edit maps using the custom \`.geospace\` format
- **Multiple Data Sources**: Support for OSM, XYZ tiles, GeoJSON, KML, GeoTIFF, GPX, Features, BM (basemap.de), WMS, WMTS, and Overpass API
- **Satellite Imagery**: Built-in access to Esri World Imagery and Sentinel-2 satellite imagery
- **Layer Management**: Vector layers, tile layers, and layer groups with full styling control
- **OpenLayers Integration**: Built on the industry-standard OpenLayers mapping library
- **Advanced Styling**: Dynamic style loading and management system
- **PWA Transformation**: Convert \`.geospace\` files into cross-platform Progressive Web Apps

### 🤖 **AI-Powered Automation**
- **Multiple AI Providers**: Ollama, OpenAI, Groq, Cerebras, and WebLLM support
- **Context-Aware Assistants**: Specialized AI roles for mapping, coding, and general assistance
- **Local AI Support**: Run AI models locally using WebLLM or Ollama
- **Natural Language Commands**: Control the application using conversational prompts

### 💻 **Development Environment**
- **Monaco Editor**: Full VS Code editor experience with syntax highlighting
- **Python Execution**: Complete Pyodide integration with package management and pip requirements
- **JavaScript Execution**: Direct browser JavaScript execution in workers
- **File System Access**: Direct browser integration with local files and workspace persistence
- **Dependency Management**: Automatic pip requirements handling and package installation

### 🔧 **Extensibility**
- **Extension System**: Browse, install, and uninstall extensions from the built-in extension manager
- **Built-in Extensions**: WebLLM, Python/JS terminals, Linux terminal
- **Extension Sources**: Add extensions from trusted URLs or the geo!space extension registry
- **Command Registry**: 20+ built-in commands + extensible command system
- **Build System**: Generate publishable maps from \`.geospace\` files

## 🌐 Browser Compatibility

**⚠️ Important**: geo!space uses the File System Access API which has limited browser support.

- ✅ **Fully Supported**: Chrome and Opera
- ⚠️ **Limited Support**: Firefox and Safari (partial File System Access API support)

For more details, see [File System API](https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker)

## 🌟 Use Cases

- **Data Analysts**: Create interactive maps for data visualization
- **Urban Planners**: Design and prototype mapping applications  
- **Developers**: Build geospatial applications without complex setup
- **Researchers**: Prototype location-based applications quickly
- **Educators**: Teach mapping and geospatial concepts interactively
- **App Creators**: Transform maps into cross-platform PWAs for mobile, desktop, and web deployment

## 🚀 Getting Started

### 1. **Connect a Workspace**
- In the Workspace tab, click the folder icon "Load workspace folder"
- Choose a local folder to use as your workspace
- This folder will be saved and restored when you reload geo!space

### 2. **Configure AI Assistant (Optional)**
- Open the settings editor using the settings button in the upper right corner
- Configure AI providers and models in the \`aiConfig\` section
- Set up API keys for your preferred AI services

### 3. **Working with Files**
- **\`.geospace\` files**: Map files that open in the interactive map editor
- **Python/JavaScript files**: Open in the Monaco code editor with syntax highlighting
- **Other files**: Open in the appropriate editor based on file type

### 4. **Creating Interactive Maps**
- Double-click \`.geospace\` files to open them in the map editor
- Use the map editor's UI to interact with layers, features, and styling
- Use the input field to run commands or interact with the map via natural language
- Add data sources: OSM tiles, GeoJSON files, KML, GeoTIFF, GPX, or custom features
- **Build PWA**: Use the "Build map" button to transform your \`.geospace\` file into a cross-platform Progressive Web App

### 5. **Code Development**
- Edit Python and JavaScript code in the Monaco editor
- Execute Python code using Pyodide (Python in the browser)
- Run JavaScript code directly in the browser
- Use the "Run" button to execute code snippets

### 6. **Resource Catalog**
- Browse the catalog view for curated maps, datasets, icons, and controls
- Select items from catalog categories (datasets, maps, overlays, controls, icons)
- Use the "Checkout" button to download items directly to your workspace
- Access pre-built basemaps (OpenStreetMap, basemap.de) and sample datasets

## 👨‍💻 Development

geo!space provides a powerful development environment for creating custom map controls and overlays using JavaScript modules.

### **Custom Modules**

Create interactive UI components for your maps using JavaScript modules. geo!space uses **Lit** for templating and **Web Awesome** for UI components - both are provided by default and based on browser standards only, so no build tools are required.

**Key Features:**
- **No Build Tools**: Write plain JavaScript modules that run directly in the browser
- **Lit Templating**: Use Lit's HTML template literals for reactive UI
- **Web Awesome Components**: Access to a full library of web-standard UI components
- **OpenLayers API**: Full access to OpenLayers through the \`ol\` namespace object
- **Module System**: Import and share modules within your workspace using relative paths or bare specifiers

**Getting Started:**
1. Create a JavaScript file in your workspace (e.g., \`my-control.js\`)
2. Export a default function that receives APIs via destructuring
3. Return a Lit template from your function
4. Add your module to a map's \`controls\` or \`overlays\` array in the \`.geospace\` file

**Example:**
\`\`\`javascript
export default function ({html, style, events, map}) {
    style({
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0"
    });

    return () => html\`
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
            <wa-button @click=\${() => events("drawer/openMenu")}>
                Menu
            </wa-button>
        </div>
    \`;
}
\`\`\`

**Learn More:**
- 📖 See the [User Modules Guide](packages/geospace/public/docs/user-modules.md) for complete documentation
- 🎨 Browse Web Awesome components: https://webawesome.com
- 🗺️ Explore OpenLayers API: https://openlayers.org/

## 💬 Commands & Natural Language

### **Slash Commands**
Use commands starting with \`/\` in the map editor's input field:

- \`/python\`: Execute Python code
- \`/js\`: Execute JavaScript code  
- \`/touch\`: Create a new, empty file
- \`/save\`: Save the current file
- \`/build_map\`: Build a publishable map from the current \`.geospace\` file

### **Rich Command Library**
geo!space includes 20+ built-in commands for mapping operations:
- **Map Navigation**: \`zoom_to_level\`, \`center_location\`
- **Layer Management**: \`add_layer\`, \`delete_layer\`, \`add_marker\`
- **Data Operations**: Import/export various geospatial formats
- **File Operations**: Create, save, and manage workspace files

### **Natural Language Interaction**
- **Map Editor**: Ask questions like "Add a marker at coordinates 52.5, 13.4" or "Change the style of all points to red"
- **Code Editor**: Request code assistance like "Create a function to calculate distance between two points"
- **General**: Ask about app features, get help with workflows, or request explanations

## 💡 Examples

### **Create a City Map**
\`\`\`
1. /touch city-map.geospace
2. "Add OpenStreetMap as base layer"
3. "Download buildings in the current view"
4. "Download trees in the current view"
5. /build_map
\`\`\`

### **Custom App Development**
\`\`\`
1. Create map with /touch app.geospace
2. Add custom controls using JavaScript with prepackaged libraries (Lit, WebAwesome)
3. Write Python scripts for data processing
4. /build_map for cross-platform deployment
\`\`\`

## ⚙️ AI Configuration

### **Context-Aware AI Assistants**
The AI assistant adapts its role based on your current context:

- **🗺️ Map Editor**: Specialized for mapping tasks, layer management, and geospatial operations
- **💻 Code Editor**: Focused on coding assistance, debugging, and code generation
- **🌐 General App**: Helps with app navigation, features, and general workflows

Each assistant can be identified by its icon and help hint in the AI view.

### **AI Provider Setup**
Configure AI providers in the app settings (accessible via the settings button in the upper right corner). The settings are stored in IndexedDB under the \`settings.json\` section:

\`\`\`json
{
  "aiConfig": {
    "defaultProvider": "openai",
    "providers": [
      {
        "name": "ollama",
        "model": "gemma3:12b",
        "chatApiEndpoint": "http://localhost:11434/v1/chat/completions",
        "apiKey": ""
      },
      {
        "name": "openai",
        "model": "gpt-4.1",
        "chatApiEndpoint": "https://api.openai.com/v1/chat/completions",
        "apiKey": "<your api key>"
      },
      {
        "name": "groq",
        "model": "llama-3.1-8b-instant",
        "chatApiEndpoint": "https://api.groq.com/openai/v1/chat/completions",
        "apiKey": "<your api key>"
      },
      {
        "name": "cerebras",
        "model": "llama3.1-8b",
        "chatApiEndpoint": "https://api.cerebras.ai/v1/chat/completions",
        "apiKey": "<your api key>"
      },
      {
        "name": "webllm",
        "model": "gemma-2-9b-it-q4f16_1-MLC",
        "chatApiEndpoint": "",
        "apiKey": "",
        "parameters": {
          "context_window_size": 4096
        }
      },
      {
        "name": "mistral",
        "model": "mistral-large-latest",
        "chatApiEndpoint": "https://api.mistral.ai/v1/chat/completions",
        "apiKey": "<your api key>",
        "ocrApiEndpoint": "https://api.mistral.ai/v1/ocr"
      }
    ]
  }
}
\`\`\`

**Setup Instructions:**
1. Open the settings editor using the settings button in the upper right corner
2. Replace \`<your api key>\` with your actual API keys for each provider
3. Set \`defaultProvider\` to your preferred provider name
4. For **Ollama**: Install locally and ensure it's running on \`localhost:11434\`
5. For **WebLLM**: No API key needed - runs models locally in the browser
   - **⚠️ GPU Requirement**: Requires a dedicated GPU with sufficient VRAM to run the selected model
   - Models like \`gemma-2-9b-it-q4f16_1-MLC\` typically need 8GB+ VRAM
6. Settings are automatically saved to IndexedDB - no manual file management required
7. You can change the default provider in the AI view after connecting to a workspace

## 🔧 Troubleshooting

### **Common Issues**

**File Not Found**
- If you don't see expected files, try reloading the workspace
- Ensure the workspace folder is properly connected

**AI Assistant Not Working**
- Verify settings are correctly configured in the app settings (stored in IndexedDB)
- Check that your API keys are valid and properly formatted
- For local providers (Ollama), ensure the service is running

**Browser Compatibility Issues**
- Use Chrome or Opera for full functionality
- Firefox and Safari have limited File System Access API support

**Map Not Loading**
- Check that \`.geospace\` files contain valid JSON
- Verify data source URLs are accessible
- Ensure required resources (icons, styles) are available

## ❓ FAQ

**Q: Do I need to install anything?**
A: No! geo!space runs entirely in your browser. Just open it in Chrome or Opera.

**Q: Is my data secure?**
A: Yes. All data stays in your browser and local workspace. No data is sent to external servers unless you explicitly use AI services.

**Q: Can I use geo!space offline?**
A: Yes, for basic mapping features. AI assistance requires internet connection (except for local providers like Ollama/WebLLM).

**Q: How do I share my maps?**
A: Use the "Build map" button to create a PWA that can be deployed anywhere or shared as a standalone app.

**Q: What file formats are supported?**
A: Maps: \`.geospace\` (JSON), Data: GeoJSON, KML, GPX, GeoTIFF, Features. Tile sources: OSM, XYZ, WMS, WMTS, BM (basemap.de), Satellite imagery (Esri, Sentinel-2). Code: Python, JavaScript, and more.

**Q: Can I customize the interface?**
A: Yes! Install extensions, create custom controls using WebAwesome components, or add your own extensions.

**Q: What extensions are available?**
A: Built-in extensions include WebLLM, Python/JS terminals, Linux terminal, and more. Browse and install from the extension manager.

## 🏗️ Technical Architecture

**Frontend Stack:**
- **Lit**: Web components framework
- **TypeScript**: Main development language  
- **Vite**: Build tool and development server
- **Monaco Editor**: VS Code's editor component
- **WebAwesome**: Web components library (also available for custom map controls)

**Mapping Stack:**
- **OpenLayers**: Professional mapping library
- **Custom Runtime**: Map-to-OpenLayers conversion system
- **Style Loader**: Dynamic style loading

**AI Stack:**
- **Multiple Providers**: Flexible AI provider system
- **WebLLM**: Local AI model execution
- **Context-Aware**: Specialized AI roles per context

## 🤝 Trusted by

- **[Kiosk Scout](https://finder.kioskscout.de)**: A cross-platform PWA for finding nearby vending machines
- **Want your geo!space app listed here?** Contact us!

---

## ⚡ Quick Start

**Get up and running in 3 minutes:**

1. **Open geo!space** in Chrome or Opera
2. **Connect workspace** - Click folder icon and select a local directory
3. **Create your first map** - Use \`/touch my-map.geospace\` or open existing files
4. **Try AI assistance** - Ask "Add a marker at [your location]" in the map editor
5. **Build your app** - Use \`/build_map\` to create a deployable PWA

### **First-Time Setup**
- **No AI needed**: Start mapping immediately without configuration
- **AI setup**: Open settings → configure API keys for enhanced assistance
- **Extensions**: Browse and install extensions from the extension manager

## 🎯 Ready to Start?

1. **Load the app** in Chrome or Opera
2. **Connect a workspace** folder
3. **Create your first map** or open an existing \`.geospace\` file
4. **Ask the AI** for help with mapping tasks
5. **Build and share** your interactive maps

**Happy mapping! 🗺️✨**`,Kp=On.version,oa=Vr("GeoSpaceApp"),Yp=["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage","system.pythonpackagemanager","system.settings-tree","system.ai-system"],Jp=[{target:Ua,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:"system.fastviews-bottomend",name:"catalog",label:"Catalog",icon:"book",component:t=>V`<gs-catalog id="${t}"></gs-catalog>`},{target:Ba,name:"map-props",label:"Map Properties",icon:"fg map-options",component:t=>V`<gs-map-props id="${t}"></gs-map-props>`},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const t=er.get();return t instanceof ir?!yo(t):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_map_file"}],Zp=[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>mt(()=>import("./mapbuilder-extension-Cn_qf1kM.js"),__vite__mapDeps([23,1,2])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>mt(()=>import("./style-editor-extension-B_XPbZKb.js"),__vite__mapDeps([24,1,2])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>mt(()=>import("./overpass-extension-B4x4APAj.js"),__vite__mapDeps([25,1,2])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>mt(()=>import("./gtfs-extension-BRWH_7JF.js"),__vite__mapDeps([26,1,2])),icon:"map-location-dot"}],Xp={id:"geospace",name:"🌐geo!space",version:Kp,description:"An IDE for working with geospatial data.",metadata:{github:{owner:"erdalkaraca",repo:"geospace"},favicon:"/geospace.svg"},extensions:Yp,contributions:{ui:Jp,extensions:Zp},async initialize(){vi.addPackage({name:On.name,version:On.version,dependencies:On.dependencies,devDependencies:On.devDependencies}),Vp(),Me.registerContribution(Hn,{label:"App Support",description:"General app support",role:"appsupport",priority:100,icon:"question-circle",sysPrompt:Wp,tools:{enabled:!0}}),Me.registerContribution("system.icons",{label:"geo!space File Icons",mappings:{geospace:"earth"},priority:1}),lt({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async t=>{const e=er.get();if(!(e instanceof ir))return;const r=ws(e);if(!r){oa.warn(`Unsupported file type: ${e.getName()}`);return}const n=e.getWorkspacePath(),i=je.createExecutionContext({source:r,url:n});await je.execute("add_layer",i)}}}),lt({command:{id:"create_map_file",name:"Create Geospace map file",description:"Creates a new .geospace map file with default map structure. This is specifically for creating geospace map files, not general files.",parameters:[{name:"path",description:"the path including name of the map file to be created (e.g., 'my-map.geospace' or 'my map'). The .geospace extension will be added automatically if missing. Must be relative to the workspace.",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async t=>{const e={...da,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}},r=t.params?.path||"map.geospace",n=r.endsWith(".geospace")?r:`${r}.geospace`;return await je.execute("create_file",{params:{path:n,contents:JSON.stringify(e,null,2),extension:".geospace",ask:r==="map.geospace"}})}}}),lt({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async t=>{const e=new ru(Hp,"README.md");await $r.loadEditor(e)}},contribution:{target:yn,icon:"question-circle",label:"Welcome"}}),oa.info("geo!space is ready!")}};Jr.registerApp(Xp,{defaultAppId:"geospace",autoStart:!0,container:document.body});export{Vr as A,Wr as B,xt as C,on as D,Wn as E,ir as F,Ot as G,mn as H,wa as I,Xa as J,Yr as K,xr as L,kc as M,Fn as N,yn as O,Xu as P,ed as Q,td as R,nd as S,Ua as T,id as U,tr as a,Ze as b,at as c,er as d,Me as e,an as f,nt as g,lt as h,rd as i,sd as j,jt as k,xo as l,st as m,Dc as n,Wc as o,je as p,Ka as q,Bt as r,Kt as s,fi as t,ri as u,$r as v,Nt as w,ja as x,Xe as y,vr as z};
