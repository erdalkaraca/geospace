import{h as ze,F as ee,K as Qe,g as ve,i as _e,c as he,j as $e,b as Fe,t as Re,u as Ye,f as Ge,w as Ve,k as be}from"./main-Dla4KgeC.js";import{g as Xe,x as U,a as Je,n as Ze,r as fe,B as Oe,t as et}from"./index-C4bFKT08.js";const tt=`You are a requirements matching specialist. Analyze a company profile against a list of requirements and determine how well the company matches each requirement.

Company Profile:
{companyProfile}

Requirements:
{requirements}

For each requirement (identified by its REQ ID), determine the match quality:
- "perfect": The company fully meets or exceeds the requirement
- "good": The company mostly meets the requirement with minor gaps
- "normal": The company partially meets the requirement but has notable gaps
- "bad": The company does not meet the requirement or has significant gaps

Output format: CSV with two columns (no header row):
1. Requirement ID (format: REQ1, REQ2, etc.)
2. Match category (perfect, good, normal, or bad)

Output ONLY the CSV rows, one requirement per line. Use proper CSV escaping.

Example format:
REQ1,perfect
REQ2,good
REQ3,normal
REQ4,bad

`;var Ee={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var nt=Ee.exports,Me;function rt(){return Me||(Me=1,(function(n,a){((r,s)=>{n.exports=s()})(nt,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},o,u=!s.document&&!!s.postMessage,f=s.IS_PAPA_WORKER||!1,p={},_=0,c={};function S(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(t){var i=ce(t);i.chunkSize=parseInt(i.chunkSize),t.step||t.chunk||(i.chunkSize=null),this._handle=new J(i),(this._handle.streamer=this)._config=i}).call(this,e),this.parseChunk=function(t,i){var d=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<d){let b=this._config.newline;b||(l=this._config.quoteChar||'"',b=this._handle.guessLineEndings(t,l)),t=[...t.split(b).slice(d)].join(b)}this.isFirstChunk&&A(this._config.beforeFirstChunk)&&(l=this._config.beforeFirstChunk(t))!==void 0&&(t=l),this.isFirstChunk=!1,this._halted=!1;var d=this._partialLine+t,l=(this._partialLine="",this._handle.parse(d,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(t=l.meta.cursor,d=(this._finished||(this._partialLine=d.substring(t-this._baseIndex),this._baseIndex=t),l&&l.data&&(this._rowCount+=l.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),f)s.postMessage({results:l,workerId:c.WORKER_ID,finished:d});else if(A(this._config.chunk)&&!i){if(this._config.chunk(l,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=l=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(l.data),this._completeResults.errors=this._completeResults.errors.concat(l.errors),this._completeResults.meta=l.meta),this._completed||!d||!A(this._config.complete)||l&&l.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),d||l&&l.meta.paused||this._nextChunk(),l}this._halted=!0},this._sendError=function(t){A(this._config.error)?this._config.error(t):f&&this._config.error&&s.postMessage({workerId:c.WORKER_ID,error:t,finished:!1})}}function j(e){var t;(e=e||{}).chunkSize||(e.chunkSize=c.RemoteChunkSize),S.call(this,e),this._nextChunk=u?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(i){this._input=i,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),u||(t.onload=de(this._chunkLoaded,this),t.onerror=de(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!u),this._config.downloadRequestHeaders){var i,d=this._config.downloadRequestHeaders;for(i in d)t.setRequestHeader(i,d[i])}var l;this._config.chunkSize&&(l=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+l));try{t.send(this._config.downloadRequestBody)}catch(b){this._chunkError(b.message)}u&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(i=>(i=i.getResponseHeader("Content-Range"))!==null?parseInt(i.substring(i.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(i){i=t.statusText||i,this._sendError(new Error(i))}}function H(e){(e=e||{}).chunkSize||(e.chunkSize=c.LocalChunkSize),S.call(this,e);var t,i,d=typeof FileReader<"u";this.stream=function(l){this._input=l,i=l.slice||l.webkitSlice||l.mozSlice,d?((t=new FileReader).onload=de(this._chunkLoaded,this),t.onerror=de(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var l=this._input,b=(this._config.chunkSize&&(b=Math.min(this._start+this._config.chunkSize,this._input.size),l=i.call(l,this._start,b)),t.readAsText(l,this._config.encoding));d||this._chunkLoaded({target:{result:b}})},this._chunkLoaded=function(l){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(l.target.result)},this._chunkError=function(){this._sendError(t.error)}}function $(e){var t;S.call(this,e=e||{}),this.stream=function(i){return t=i,this._nextChunk()},this._nextChunk=function(){var i,d;if(!this._finished)return i=this._config.chunkSize,t=i?(d=t.substring(0,i),t.substring(i)):(d=t,""),this._finished=!t,this.parseChunk(d)}}function se(e){S.call(this,e=e||{});var t=[],i=!0,d=!1;this.pause=function(){S.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){S.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(l){this._input=l,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){d&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=de(function(l){try{t.push(typeof l=="string"?l:l.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(b){this._streamError(b)}},this),this._streamError=de(function(l){this._streamCleanUp(),this._sendError(l)},this),this._streamEnd=de(function(){this._streamCleanUp(),d=!0,this._streamData("")},this),this._streamCleanUp=de(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function J(e){var t,i,d,l,b=Math.pow(2,53),N=-b,Y=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,G=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,v=this,P=0,m=0,K=!1,w=!1,x=[],h={data:[],errors:[],meta:{}};function D(k){return e.skipEmptyLines==="greedy"?k.join("").trim()==="":k.length===1&&k[0].length===0}function F(){if(h&&d&&(V("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+c.DefaultDelimiter+"'"),d=!1),e.skipEmptyLines&&(h.data=h.data.filter(function(g){return!D(g)})),z()){let g=function(I,L){A(e.transformHeader)&&(I=e.transformHeader(I,L)),x.push(I)};if(h)if(Array.isArray(h.data[0])){for(var k=0;z()&&k<h.data.length;k++)h.data[k].forEach(g);h.data.splice(0,1)}else h.data.forEach(g)}function E(g,I){for(var L=e.header?{}:[],R=0;R<g.length;R++){var O=R,C=g[R],C=((Z,y)=>(q=>(e.dynamicTypingFunction&&e.dynamicTyping[q]===void 0&&(e.dynamicTyping[q]=e.dynamicTypingFunction(q)),(e.dynamicTyping[q]||e.dynamicTyping)===!0))(Z)?y==="true"||y==="TRUE"||y!=="false"&&y!=="FALSE"&&((q=>{if(Y.test(q)&&(q=parseFloat(q),N<q&&q<b))return 1})(y)?parseFloat(y):G.test(y)?new Date(y):y===""?null:y):y)(O=e.header?R>=x.length?"__parsed_extra":x[R]:O,C=e.transform?e.transform(C,O):C);O==="__parsed_extra"?(L[O]=L[O]||[],L[O].push(C)):L[O]=C}return e.header&&(R>x.length?V("FieldMismatch","TooManyFields","Too many fields: expected "+x.length+" fields but parsed "+R,m+I):R<x.length&&V("FieldMismatch","TooFewFields","Too few fields: expected "+x.length+" fields but parsed "+R,m+I)),L}var T;h&&(e.header||e.dynamicTyping||e.transform)&&(T=1,!h.data.length||Array.isArray(h.data[0])?(h.data=h.data.map(E),T=h.data.length):h.data=E(h.data,0),e.header&&h.meta&&(h.meta.fields=x),m+=T)}function z(){return e.header&&x.length===0}function V(k,E,T,g){k={type:k,code:E,message:T},g!==void 0&&(k.row=g),h.errors.push(k)}A(e.step)&&(l=e.step,e.step=function(k){h=k,z()?F():(F(),h.data.length!==0&&(P+=k.data.length,e.preview&&P>e.preview?i.abort():(h.data=h.data[0],l(h,v))))}),this.parse=function(k,E,T){var g=e.quoteChar||'"',g=(e.newline||(e.newline=this.guessLineEndings(k,g)),d=!1,e.delimiter?A(e.delimiter)&&(e.delimiter=e.delimiter(k),h.meta.delimiter=e.delimiter):((g=((I,L,R,O,C)=>{var Z,y,q,ue;C=C||[",","	","|",";",c.RECORD_SEP,c.UNIT_SEP];for(var we=0;we<C.length;we++){for(var ne,ke=C[we],B=0,re=0,M=0,W=(q=void 0,new Q({comments:O,delimiter:ke,newline:L,preview:10}).parse(I)),le=0;le<W.data.length;le++)R&&D(W.data[le])?M++:(ne=W.data[le].length,re+=ne,q===void 0?q=ne:0<ne&&(B+=Math.abs(ne-q),q=ne));0<W.data.length&&(re/=W.data.length-M),(y===void 0||B<=y)&&(ue===void 0||ue<re)&&1.99<re&&(y=B,Z=ke,ue=re)}return{successful:!!(e.delimiter=Z),bestDelimiter:Z}})(k,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=g.bestDelimiter:(d=!0,e.delimiter=c.DefaultDelimiter),h.meta.delimiter=e.delimiter),ce(e));return e.preview&&e.header&&g.preview++,t=k,i=new Q(g),h=i.parse(t,E,T),F(),K?{meta:{paused:!0}}:h||{meta:{paused:!1}}},this.paused=function(){return K},this.pause=function(){K=!0,i.abort(),t=A(e.chunk)?"":t.substring(i.getCharIndex())},this.resume=function(){v.streamer._halted?(K=!1,v.streamer.parseChunk(t,!0)):setTimeout(v.resume,3)},this.aborted=function(){return w},this.abort=function(){w=!0,i.abort(),h.meta.aborted=!0,A(e.complete)&&e.complete(h),t=""},this.guessLineEndings=function(I,g){I=I.substring(0,1048576);var g=new RegExp(oe(g)+"([^]*?)"+oe(g),"gm"),T=(I=I.replace(g,"")).split("\r"),g=I.split(`
`),I=1<g.length&&g[0].length<T[0].length;if(T.length===1||I)return`
`;for(var L=0,R=0;R<T.length;R++)T[R][0]===`
`&&L++;return L>=T.length/2?`\r
`:"\r"}}function oe(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Q(e){var t=(e=e||{}).delimiter,i=e.newline,d=e.comments,l=e.step,b=e.preview,N=e.fastMode,Y=null,G=!1,v=e.quoteChar==null?'"':e.quoteChar,P=v;if(e.escapeChar!==void 0&&(P=e.escapeChar),(typeof t!="string"||-1<c.BAD_DELIMITERS.indexOf(t))&&(t=","),d===t)throw new Error("Comment character same as delimiter");d===!0?d="#":(typeof d!="string"||-1<c.BAD_DELIMITERS.indexOf(d))&&(d=!1),i!==`
`&&i!=="\r"&&i!==`\r
`&&(i=`
`);var m=0,K=!1;this.parse=function(w,x,h){if(typeof w!="string")throw new Error("Input must be a string");var D=w.length,F=t.length,z=i.length,V=d.length,k=A(l),E=[],T=[],g=[],I=m=0;if(!w)return B();if(N||N!==!1&&w.indexOf(v)===-1){for(var L=w.split(i),R=0;R<L.length;R++){if(g=L[R],m+=g.length,R!==L.length-1)m+=i.length;else if(h)return B();if(!d||g.substring(0,V)!==d){if(k){if(E=[],ue(g.split(t)),re(),K)return B()}else ue(g.split(t));if(b&&b<=R)return E=E.slice(0,b),B(!0)}}return B()}for(var O=w.indexOf(t,m),C=w.indexOf(i,m),Z=new RegExp(oe(P)+oe(v),"g"),y=w.indexOf(v,m);;)if(w[m]===v)for(y=m,m++;;){if((y=w.indexOf(v,y+1))===-1)return h||T.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:E.length,index:m}),ne();if(y===D-1)return ne(w.substring(m,y).replace(Z,v));if(v===P&&w[y+1]===P)y++;else if(v===P||y===0||w[y-1]!==P){O!==-1&&O<y+1&&(O=w.indexOf(t,y+1));var q=we((C=C!==-1&&C<y+1?w.indexOf(i,y+1):C)===-1?O:Math.min(O,C));if(w.substr(y+1+q,F)===t){g.push(w.substring(m,y).replace(Z,v)),w[m=y+1+q+F]!==v&&(y=w.indexOf(v,m)),O=w.indexOf(t,m),C=w.indexOf(i,m);break}if(q=we(C),w.substring(y+1+q,y+1+q+z)===i){if(g.push(w.substring(m,y).replace(Z,v)),ke(y+1+q+z),O=w.indexOf(t,m),y=w.indexOf(v,m),k&&(re(),K))return B();if(b&&E.length>=b)return B(!0);break}T.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:E.length,index:m}),y++}}else if(d&&g.length===0&&w.substring(m,m+V)===d){if(C===-1)return B();m=C+z,C=w.indexOf(i,m),O=w.indexOf(t,m)}else if(O!==-1&&(O<C||C===-1))g.push(w.substring(m,O)),m=O+F,O=w.indexOf(t,m);else{if(C===-1)break;if(g.push(w.substring(m,C)),ke(C+z),k&&(re(),K))return B();if(b&&E.length>=b)return B(!0)}return ne();function ue(M){E.push(M),I=m}function we(M){var W=0;return W=M!==-1&&(M=w.substring(y+1,M))&&M.trim()===""?M.length:W}function ne(M){return h||(M===void 0&&(M=w.substring(m)),g.push(M),m=D,ue(g),k&&re()),B()}function ke(M){m=M,ue(g),g=[],C=w.indexOf(i,m)}function B(M){if(e.header&&!x&&E.length&&!G){var W=E[0],le=Object.create(null),Ae=new Set(W);let De=!1;for(let ye=0;ye<W.length;ye++){let ie=W[ye];if(le[ie=A(e.transformHeader)?e.transformHeader(ie,ye):ie]){let Ce,Le=le[ie];for(;Ce=ie+"_"+Le,Le++,Ae.has(Ce););Ae.add(Ce),W[ye]=Ce,le[ie]++,De=!0,(Y=Y===null?{}:Y)[Ce]=ie}else le[ie]=1,W[ye]=ie;Ae.add(ie)}De&&console.warn("Duplicate headers found and renamed."),G=!0}return{data:E,errors:T,meta:{delimiter:t,linebreak:i,aborted:K,truncated:!!M,cursor:I+(x||0),renamedHeaders:Y}}}function re(){l(B()),E=[],T=[]}},this.abort=function(){K=!0},this.getCharIndex=function(){return m}}function xe(e){var t=e.data,i=p[t.workerId],d=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var l={abort:function(){d=!0,ge(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:te,resume:te};if(A(i.userStep)){for(var b=0;b<t.results.data.length&&(i.userStep({data:t.results.data[b],errors:t.results.errors,meta:t.results.meta},l),!d);b++);delete t.results}else A(i.userChunk)&&(i.userChunk(t.results,l,t.file),delete t.results)}t.finished&&!d&&ge(t.workerId,t.results)}function ge(e,t){var i=p[e];A(i.userComplete)&&i.userComplete(t),i.terminate(),delete p[e]}function te(){throw new Error("Not implemented.")}function ce(e){if(typeof e!="object"||e===null)return e;var t,i=Array.isArray(e)?[]:{};for(t in e)i[t]=ce(e[t]);return i}function de(e,t){return function(){e.apply(t,arguments)}}function A(e){return typeof e=="function"}return c.parse=function(e,t){var i=(t=t||{}).dynamicTyping||!1;if(A(i)&&(t.dynamicTypingFunction=i,i={}),t.dynamicTyping=i,t.transform=!!A(t.transform)&&t.transform,!t.worker||!c.WORKERS_SUPPORTED)return i=null,c.NODE_STREAM_INPUT,typeof e=="string"?(e=(d=>d.charCodeAt(0)!==65279?d:d.slice(1))(e),i=new(t.download?j:$)(t)):e.readable===!0&&A(e.read)&&A(e.on)?i=new se(t):(s.File&&e instanceof File||e instanceof Object)&&(i=new H(t)),i.stream(e);(i=(()=>{var d;return!!c.WORKERS_SUPPORTED&&(d=(()=>{var l=s.URL||s.webkitURL||null,b=r.toString();return c.BLOB_URL||(c.BLOB_URL=l.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",b,")();"],{type:"text/javascript"})))})(),(d=new s.Worker(d)).onmessage=xe,d.id=_++,p[d.id]=d)})()).userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=A(t.step),t.chunk=A(t.chunk),t.complete=A(t.complete),t.error=A(t.error),delete t.worker,i.postMessage({input:e,config:t,workerId:i.id})},c.unparse=function(e,t){var i=!1,d=!0,l=",",b=`\r
`,N='"',Y=N+N,G=!1,v=null,P=!1,m=((()=>{if(typeof t=="object"){if(typeof t.delimiter!="string"||c.BAD_DELIMITERS.filter(function(x){return t.delimiter.indexOf(x)!==-1}).length||(l=t.delimiter),typeof t.quotes!="boolean"&&typeof t.quotes!="function"&&!Array.isArray(t.quotes)||(i=t.quotes),typeof t.skipEmptyLines!="boolean"&&typeof t.skipEmptyLines!="string"||(G=t.skipEmptyLines),typeof t.newline=="string"&&(b=t.newline),typeof t.quoteChar=="string"&&(N=t.quoteChar),typeof t.header=="boolean"&&(d=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw new Error("Option columns is empty");v=t.columns}t.escapeChar!==void 0&&(Y=t.escapeChar+N),t.escapeFormulae instanceof RegExp?P=t.escapeFormulae:typeof t.escapeFormulae=="boolean"&&t.escapeFormulae&&(P=/^[=+\-@\t\r].*$/)}})(),new RegExp(oe(N),"g"));if(typeof e=="string"&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return K(null,e,G);if(typeof e[0]=="object")return K(v||Object.keys(e[0]),e,G)}else if(typeof e=="object")return typeof e.data=="string"&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||v),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]=="object"?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]=="object"||(e.data=[e.data])),K(e.fields||[],e.data||[],G);throw new Error("Unable to serialize unrecognized input");function K(x,h,D){var F="",z=(typeof x=="string"&&(x=JSON.parse(x)),typeof h=="string"&&(h=JSON.parse(h)),Array.isArray(x)&&0<x.length),V=!Array.isArray(h[0]);if(z&&d){for(var k=0;k<x.length;k++)0<k&&(F+=l),F+=w(x[k],k);0<h.length&&(F+=b)}for(var E=0;E<h.length;E++){var T=(z?x:h[E]).length,g=!1,I=z?Object.keys(h[E]).length===0:h[E].length===0;if(D&&!z&&(g=D==="greedy"?h[E].join("").trim()==="":h[E].length===1&&h[E][0].length===0),D==="greedy"&&z){for(var L=[],R=0;R<T;R++){var O=V?x[R]:R;L.push(h[E][O])}g=L.join("").trim()===""}if(!g){for(var C=0;C<T;C++){0<C&&!I&&(F+=l);var Z=z&&V?x[C]:C;F+=w(h[E][Z],C)}E<h.length-1&&(!D||0<T&&!I)&&(F+=b)}}return F}function w(x,h){var D,F;return x==null?"":x.constructor===Date?JSON.stringify(x).slice(1,25):(F=!1,P&&typeof x=="string"&&P.test(x)&&(x="'"+x,F=!0),D=x.toString().replace(m,Y),(F=F||i===!0||typeof i=="function"&&i(x,h)||Array.isArray(i)&&i[h]||((z,V)=>{for(var k=0;k<V.length;k++)if(-1<z.indexOf(V[k]))return!0;return!1})(D,c.BAD_DELIMITERS)||-1<D.indexOf(l)||D.charAt(0)===" "||D.charAt(D.length-1)===" ")?N+D+N:D)}},c.RECORD_SEP="",c.UNIT_SEP="",c.BYTE_ORDER_MARK="\uFEFF",c.BAD_DELIMITERS=["\r",`
`,'"',c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!u&&!!s.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=",",c.Parser=Q,c.ParserHandle=J,c.NetworkStreamer=j,c.FileStreamer=H,c.StringStreamer=$,c.ReadableStreamStreamer=se,s.jQuery&&((o=s.jQuery).fn.parse=function(e){var t=e.config||{},i=[];return this.each(function(b){if(!(o(this).prop("tagName").toUpperCase()==="INPUT"&&o(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var N=0;N<this.files.length;N++)i.push({file:this.files[N],inputElem:this,instanceConfig:o.extend({},t)})}),d(),this;function d(){if(i.length===0)A(e.complete)&&e.complete();else{var b,N,Y,G,v=i[0];if(A(e.before)){var P=e.before(v.file,v.inputElem);if(typeof P=="object"){if(P.action==="abort")return b="AbortError",N=v.file,Y=v.inputElem,G=P.reason,void(A(e.error)&&e.error({name:b},N,Y,G));if(P.action==="skip")return void l();typeof P.config=="object"&&(v.instanceConfig=o.extend(v.instanceConfig,P.config))}else if(P==="skip")return void l()}var m=v.instanceConfig.complete;v.instanceConfig.complete=function(K){A(m)&&m(K,v.file,v.inputElem),l()},c.parse(v.file,v.instanceConfig)}}function l(){i.splice(0,1),d()}}),f&&(s.onmessage=function(e){e=e.data,c.WORKER_ID===void 0&&e&&(c.WORKER_ID=e.workerId),typeof e.input=="string"?s.postMessage({workerId:c.WORKER_ID,results:c.parse(e.input,e.config),finished:!0}):(s.File&&e.input instanceof File||e.input instanceof Object)&&(e=c.parse(e.input,e.config))&&s.postMessage({workerId:c.WORKER_ID,results:e,finished:!0})}),(j.prototype=Object.create(S.prototype)).constructor=j,(H.prototype=Object.create(S.prototype)).constructor=H,($.prototype=Object.create($.prototype)).constructor=$,(se.prototype=Object.create(S.prototype)).constructor=se,c})})(Ee)),Ee.exports}var it=rt();const Ie=Xe(it);var at=Object.defineProperty,st=Object.getOwnPropertyDescriptor,ae=(n,a,r,s)=>{for(var o=s>1?void 0:s?st(a,r):a,u=n.length-1,f;u>=0;u--)(f=n[u])&&(o=(s?f(a,r,o):f(o))||o);return s&&o&&at(a,r,o),o};const qe=["perfect","good","normal","bad"],Pe={perfect:{variant:"success",label:"Perfekt",score:100},good:{variant:"brand",label:"Gut",score:75},normal:{variant:"neutral",label:"Normal",score:50},bad:{variant:"danger",label:"Schlecht",score:25}},ot={critical:4,critique:4,kritisch:4,high:3,élevé:3,hoch:3,medium:2,moyen:2,mittel:2,low:1,faible:1,niedrig:1};function ct(n){return n.toLowerCase().trim()}function lt(n){const a=ct(n);return ot[a]||2}let pe=null;function dt(){return pe||(pe=document.getElementById("global-dialog-container"),pe||(pe=document.createElement("div"),pe.id="global-dialog-container",document.body.appendChild(pe))),pe}function Ue(n){return n instanceof ee&&n.getName().toLowerCase().endsWith(".txt")}ze.registerEditorInputHandler({canHandle:n=>n instanceof ee&&n.getName().toLowerCase().endsWith(".requirements.json"),handle:async n=>{const a={title:n.getName(),data:n,key:n.getName(),editorId:"requirements-table-editor",icon:"table",state:{}};return a.widgetFactory=()=>U`
            <k-requirements-table-editor .input=${a}></k-requirements-table-editor>`,a},ranking:1e3});let X=class extends Qe{constructor(){super(...arguments),this.requirements=[],this.loading=!0,this.matching=!1,this.txtFileSelected=!1}doClose(){this.input=void 0,this.requirements=[],this.loading=!0,this.companyProfileContent=void 0,this.companyProfileName=void 0,this.matching=!1}async doBeforeUI(){await this.loadContent()}doInitUI(){const n=r=>{this.txtFileSelected=Ue(r),this.selectedFileName=r instanceof ee?r.getName():void 0,this.requestUpdate()};this.watch(ve,n);const a=ve.get();this.txtFileSelected=Ue(a),this.selectedFileName=a instanceof ee?a.getName():void 0}async loadContent(){const n=this.input.data;if(n instanceof ee)try{const a=await n.getContents({contentType:_e.TEXT});try{const r=JSON.parse(a);this.requirements=r.requirements||[],this.metadata=r.metadata,this.metadata?.companyProfile&&(this.companyProfileName=this.metadata.companyProfile.fileName)}catch{const r=Ie.parse(a,{skipEmptyLines:!0,header:!1});if(r.data&&r.data.length>0){const s=r.data.slice(1);this.requirements=s.map((o,u)=>({id:u+1,source:o[0]||"",description:o[1]||"",importance:o[2]||"",match:o[3]||""}))}}this.requirements.forEach((r,s)=>{r.id||(r.id=s+1)})}catch(a){he(`Fehler beim Laden der Anforderungsdatei: ${a}`)}finally{this.loading=!1}}async save(){const n=this.input?.data;if(n instanceof ee)try{this.metadata||(this.metadata={});const a=new Date().toISOString();this.metadata.createdAt||(this.metadata.createdAt=a),this.metadata.updatedAt=a,this.companyProfileName&&(this.metadata.companyProfile={fileName:this.companyProfileName,loadedAt:a});const r={metadata:this.metadata,requirements:this.requirements};await n.saveContents(JSON.stringify(r,null,2),{contentType:_e.TEXT}),this.markDirty(!1),this.requestUpdate()}catch(a){throw he(`Fehler beim Speichern der Anforderungsdatei: ${a}`),a}}updateRequirement(n,a){Object.keys(a).some(r=>this.requirements[n][r]!==a[r])&&(this.requirements[n]={...this.requirements[n],...a},this.requirements=[...this.requirements],this.markDirty(!0),this.requestUpdate())}onBadgeClick(n,a){this.updateRequirement(n,{match:a})}calculateOverallMatch(){if(this.requirements.length===0)return null;const n=this.requirements.filter(f=>f.match&&f.match.trim().length>0);if(n.length===0)return null;let a=0,r=0;const s={};n.forEach(f=>{const p=f.match.toLowerCase(),_=Pe[p],c=lt(f.importance);if(_){const S=_.score*c;a+=S,r+=c,s[p]||(s[p]=0),s[p]++}});const o=r>0?Math.round(a/r):0,u=Math.round(n.length/this.requirements.length*100);return{overallScore:o,matchedPercentage:u,matchedCount:n.length,totalCount:this.requirements.length,categoryCounts:s}}renderMatchBadges(n,a){return U`
            <div class="match-badges">
                ${qe.map(r=>{const s=Pe[r],o=n.match.toLowerCase()===r.toLowerCase();return U`
                        <wa-badge
                            variant="${s.variant}"
                            appearance="${o?"filled-outlined":"outlined"}"
                            pill
                            class="match-badge"
                            @click="${()=>this.onBadgeClick(a,r)}"
                            title="${s.label}">
                            ${s.label}
                        </wa-badge>
                    `})}
            </div>
        `}async selectCompanyProfile(){const n=ve.get();try{const a=await n.getContents({contentType:_e.TEXT}),r=n.getName();if(!await this.showProfileConfirmDialog(a))return;this.companyProfileContent=a,this.companyProfileName=r,this.metadata||(this.metadata={}),this.metadata.companyProfile={fileName:this.companyProfileName,loadedAt:new Date().toISOString()},this.markDirty(!0),this.requestUpdate(),await this.matchProfileAgainstRequirements()}catch(a){he(`Fehler beim Laden des Unternehmensprofils: ${a.message||a}`)}}async showProfileConfirmDialog(n){return new Promise(a=>{const r=dt();Oe(U``,r);const s=()=>Oe(U``,r),o=()=>{s(),a(!0)},u=()=>{s(),a(!1)},f=U`
                <wa-dialog label="Unternehmensprofil bestätigen" open @wa-request-close=${u}>
                    <style>
                        .dialog-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 500px;
                            max-width: 700px;
                            max-height: 600px;
                        }
                        
                        .dialog-scroller {
                            flex: 1;
                            overflow-y: auto;
                            border: 1px solid var(--wa-color-neutral-border-normal);
                            border-radius: 4px;
                            padding: 12px;
                            background-color: var(--wa-color-surface-default);
                            font-family: monospace;
                            font-size: 0.875rem;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                            color: var(--wa-color-text-normal);
                            max-height: 400px;
                        }
                        
                        .dialog-message {
                            margin-bottom: 0.5rem;
                            color: var(--wa-color-text-normal);
                        }
                        
                        .dialog-actions {
                            display: flex;
                            gap: 0.5rem;
                            justify-content: flex-end;
                            margin-top: 0.5rem;
                        }
                    </style>
                    
                    <div class="dialog-content">
                        <div class="dialog-message">Bitte überprüfen Sie das Unternehmensprofil vor dem Abgleich:</div>
                        <div class="dialog-scroller">${n}</div>
                        
                        <div class="dialog-actions">
                            <wa-button variant="neutral" @click=${u}>
                                Abbrechen
                            </wa-button>
                            <wa-button variant="brand" @click=${o}>
                                Bestätigen
                            </wa-button>
                        </div>
                    </div>
                </wa-dialog>
            `;Oe(f,r)})}async getOpenAIProvider(){const a=(await $e.getProviders()).find(r=>r.name==="openai");if(!a)throw new Error("OpenAI provider not configured");return a}formatRequirementsForPrompt(){return this.requirements.map(n=>`REQ${n.id}: ${n.description} (Importance: ${n.importance})`).join(`
`)}async matchProfileAgainstRequirements(){if(!this.companyProfileContent){he("Bitte wählen Sie zuerst ein Unternehmensprofil aus");return}if(this.requirements.length===0){he("Keine Anforderungen zum Abgleich vorhanden");return}this.matching=!0,this.requestUpdate();try{const n=await this.getOpenAIProvider(),a=this.formatRequirementsForPrompt(),r=tt.replace("{companyProfile}",this.companyProfileContent).replace("{requirements}",a);await Fe.runAsync("Unternehmensprofil mit Anforderungen abgleichen",async s=>{s.message="Anfrage an GPT-4.1 senden...",s.progress=30;const o=await Ne(n,"",r);s.message="Abgleich-Ergebnisse werden verarbeitet...",s.progress=70,s.message="Abgleich-Ergebnisse werden aktualisiert...",s.progress=90;const u=Ie.parse(o,{skipEmptyLines:!0,header:!1}),f=new Map;u.data.forEach(p=>{const _=p[0]?.trim(),c=p[1]?.trim().toLowerCase();_&&c&&qe.includes(c)&&f.set(_,c)}),this.requirements.forEach((p,_)=>{const c=f.get(`REQ${p.id}`);c&&this.updateRequirement(_,{match:c})}),s.progress=100}),Re("Unternehmensprofil erfolgreich mit Anforderungen abgeglichen")}catch(n){he(`Fehler beim Abgleich des Unternehmensprofils: ${n}`)}finally{this.matching=!1,this.requestUpdate()}}render(){if(this.loading)return U`<div class="loading">Anforderungen werden geladen...</div>`;const n=this.calculateOverallMatch();return U`
            <div class="container">
                <div class="header">
                    <h2>Anforderungen</h2>
                </div>
                <div class="overall-match">
                    <div class="overall-match-header">
                        <div class="overall-match-left">
                            ${n?U`
                                <span class="overall-match-score">Gesamtübereinstimmung: ${n.overallScore}%</span>
                                <wa-badge variant="${n.overallScore>=75?"success":n.overallScore>=50?"brand":n.overallScore>=25?"neutral":"danger"}" pill>
                                    ${n.matchedCount}/${n.totalCount} bewertet
                                </wa-badge>
                            `:U`
                                <span class="overall-match-score">Anforderungen</span>
                            `}
                            ${this.metadata?.companyProfile?U`
                                <div class="company-profile-info">
                                    <span class="company-profile-label">Unternehmensprofil</span>
                                    <span class="company-profile-name">${this.metadata.companyProfile.fileName}</span>
                                </div>
                            `:this.companyProfileName?U`
                                <div class="company-profile-info">
                                    <span class="company-profile-label">Unternehmensprofil</span>
                                    <span class="company-profile-name">${this.companyProfileName}</span>
                                </div>
                            `:U`
                                <div class="hint-message">
                                    <span class="hint-text">Wählen Sie ein Unternehmensprofil (.txt-Datei) im Dateibrowser aus und klicken Sie dann auf die Datei-Schaltfläche, um es mit den Anforderungen abzugleichen</span>
                                </div>
                            `}
                        </div>
                        <div class="overall-match-right">
                            <div class="overall-match-actions">
                                <k-action
                                    variant="warning"
                                    appearance="outlined"
                                    size="large"
                                    icon="file"
                                    title="Unternehmensprofil aus aktiver Auswahl wählen"
                                    ?disabled="${!this.txtFileSelected||this.matching}"
                                    .action="${()=>this.selectCompanyProfile()}">
                                </k-action>
                                ${this.matching?U`
                                    <span class="company-profile-name">Abgleich läuft...</span>
                                `:""}
                            </div>
                            ${this.selectedFileName&&!this.matching?U`
                                <span class="company-profile-name">${this.selectedFileName}</span>
                            `:""}
                        </div>
                    </div>
                    ${n?U`
                        <div class="overall-match-details">
                            ${qe.map(a=>{const r=n.categoryCounts[a]||0;if(r===0)return null;const s=Pe[a];return U`
                                    <div class="overall-match-stat">
                                        <wa-badge variant="${s.variant}" pill>${r}</wa-badge>
                                        <span>${s.label}</span>
                                    </div>
                                `})}
                        </div>
                    `:""}
                </div>
                <table class="table ${this.matching?"matching":""}">
                    <thead>
                            <tr class="table-header">
                                <th class="table-cell-id">ID</th>
                                <th>Quelle im Markdown</th>
                                <th>Kurzbeschreibung der Anforderung</th>
                                <th>Wichtigkeit</th>
                                <th class="match-header">Übereinstimmung</th>
                            </tr>
                    </thead>
                    <tbody>
                        ${this.requirements.map((a,r)=>U`
                            <tr class="table-row">
                                <td class="table-cell table-cell-id">REQ${a.id}</td>
                                <td class="table-cell table-cell-source">${a.source}</td>
                                <td class="table-cell table-cell-description">${a.description}</td>
                                <td class="table-cell table-cell-importance">${a.importance}</td>
                                <td class="table-cell table-cell-match">
                                    ${this.renderMatchBadges(a,r)}
                                </td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `}};X.styles=Je`
        .container {
            padding: 20px;
            overflow: hidden;
            background-color: var(--wa-color-surface-default);
        }

        .header {
            margin-bottom: 20px;
        }

        .header h2 {
            color: var(--wa-color-text-normal);
            margin: 0;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            background-color: var(--wa-color-surface-raised);
        }

        .table-header {
            background-color: var(--wa-color-neutral-fill-quiet);
        }

        .table-header th {
            padding: 12px;
            border: 1px solid var(--wa-color-surface-border);
            color: var(--wa-color-text-normal);
            text-align: left;
        }


        .profile-name-display {
            color: var(--wa-color-text-quiet);
            font-size: 0.85rem;
            font-style: italic;
        }

        .overall-match {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 12px;
            background-color: var(--wa-color-surface-raised);
            border-radius: 4px;
            margin-bottom: 20px;
        }

        .overall-match-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .overall-match-left {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        }

        .overall-match-right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 8px;
        }

        .overall-match-actions {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .company-profile-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .company-profile-label {
            font-size: 0.75rem;
            color: var(--wa-color-text-quiet);
            text-transform: uppercase;
        }

        .company-profile-name {
            font-size: 0.9rem;
            color: var(--wa-color-text-normal);
            font-weight: 500;
        }

        .hint-message {
            padding: 8px 12px;
            background-color: var(--wa-color-info-fill-quiet);
            border: 1px solid var(--wa-color-info-border);
            border-radius: 4px;
            margin-top: 4px;
        }

        .hint-text {
            font-size: 0.875rem;
            color: var(--wa-color-info-text);
        }

        .overall-match-score {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .overall-match-details {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            font-size: 0.875rem;
            color: var(--wa-color-text-quiet);
        }

        .overall-match-stat {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .table-cell-id {
            font-family: monospace;
            color: var(--wa-color-text-quiet);
        }

        .table-row {
            background-color: var(--wa-color-surface-raised);
        }

        .table-cell {
            padding: 12px;
            border: 1px solid var(--wa-color-surface-border);
            color: var(--wa-color-text-normal);
        }

        .table-cell-source {
            word-wrap: break-word;
        }

        .table-cell-description {
            word-wrap: break-word;
        }

        .table-cell-importance {
            min-width: 100px;
        }

        .table-cell-match {
            min-width: 300px;
            padding: 12px;
        }

        .match-badges {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }

        .match-badge {
            cursor: pointer;
            user-select: none;
            transition: opacity 0.2s;
        }

        .match-badge:hover {
            opacity: 0.8;
        }

        .loading {
            padding: 20px;
            background-color: var(--wa-color-surface-default);
            color: var(--wa-color-text-normal);
        }


        .matching {
            opacity: 0.7;
        }
    `;ae([Ze({attribute:!1})],X.prototype,"input",2);ae([fe()],X.prototype,"requirements",2);ae([fe()],X.prototype,"loading",2);ae([fe()],X.prototype,"companyProfileContent",2);ae([fe()],X.prototype,"companyProfileName",2);ae([fe()],X.prototype,"matching",2);ae([fe()],X.prototype,"txtFileSelected",2);ae([fe()],X.prototype,"selectedFileName",2);ae([fe()],X.prototype,"metadata",2);X=ae([et("k-requirements-table-editor")],X);const ut=`You are a requirements extraction specialist. Analyze tender document markdown content and extract all requirements that logistics companies must fulfill to participate or make an offer.

IMPORTANT: Use the same language as the document content. Detect the language of the document and respond in that same language for all descriptions and text fields.

Output format: CSV with exactly three columns (comma-separated, with proper CSV escaping for fields containing commas, quotes, or newlines):
1. Source in markdown: The chapter/section number and paragraph number where the requirement is found. Use the document's language for chapter/section terminology (e.g., "Kapitel X, Abschnitt Y, Absatz Z" in German, "Chapitre X, Section Y, Paragraphe Z" in French, "Chapter X, Section Y, Paragraph Z" in English). Use the headers visible in the document. Count paragraphs within each section starting from 1. Be precise and consistent with paragraph numbering.
2. Short description of requirement: A brief, clear description of what logistics companies must fulfill, written in the same language as the document. Each requirement must be distinct and actionable.
3. Importance: Rate the importance using terminology in the document's language (e.g., "Kritisch/Hoch/Mittel/Niedrig" in German, "Critique/Élevé/Moyen/Faible" in French, "Critical/High/Medium/Low" in English) based on the requirement's impact on eligibility.

RULES FOR UNIQUENESS WITHIN THIS CHUNK:
- Extract each requirement only ONCE within this document section
- If the same requirement appears multiple times in this section, extract it from the first/primary location only
- Each requirement must be distinct - do not split a single requirement into multiple entries
- Focus on distinct, separate obligations that logistics companies must fulfill
NOTE: You are processing a single document section. Duplicate detection across the full document will be handled in a later consolidation step.

IMPORTANT: 
- Output ONLY the CSV rows, one requirement per line
- Do NOT include a header row
- Use proper CSV escaping: wrap fields containing commas, quotes, or newlines in double quotes, and escape any double quotes within the field by doubling them
- Focus on actionable requirements that logistics companies need to meet
- Be thorough but avoid duplication

Example format:
"Chapter 1, Section 2, Paragraph 3","ISO 9001 certification required","Critical"
"Chapter 1, Section 2, Paragraph 5","Minimum 5 years experience","High"
`,ht=`You are a requirements consolidation specialist. Review a list of extracted requirements from a tender document and identify duplicates or near-duplicates that describe the same obligation.

CRITICAL: Since requirements were extracted from multiple document chunks, the same requirement may appear multiple times with slightly different wording or from different source locations.

Your task:
1. Identify requirements that describe the same obligation (even if worded differently)
2. For duplicate requirements, keep the one with:
   - The most complete/clear description
   - The most specific source location (prefer deeper sections over shallow ones)
   - The higher importance rating if they differ
3. Merge any requirements that are clearly the same obligation into a single entry
4. Maintain the source location from the best representative requirement
5. Keep all truly distinct requirements

Input format: CSV with three columns:
1. Source in markdown
2. Short description of requirement
3. Importance

Output format: CSV with exactly the same three columns, with duplicates removed. Use proper CSV escaping.

IMPORTANT:
- Output ONLY the CSV rows (no header row)
- Each row must represent a unique, distinct requirement
- If requirements describe the same obligation, output only one row
- Preserve the original structure and language of descriptions
- Be conservative - only merge requirements that clearly describe the same obligation

Example:
Input:
"Chapter 1, Section 2, Paragraph 3","ISO 9001 certification required","Critical"
"Chapter 1, Section 2, Paragraph 4","ISO 9001 certification is required","Critical"
"Chapter 1, Section 3, Paragraph 1","Minimum 5 years experience","High"

Output:
"Chapter 1, Section 2, Paragraph 3","ISO 9001 certification required","Critical"
"Chapter 1, Section 3, Paragraph 1","Minimum 5 years experience","High"

`,je=8e3,Se="tendermatch",me={ocrProvider:"mistral",ocrModel:"mistral-ocr-latest",extractionProvider:"openai",extractionModel:"gpt-4.1"};async function Ke(){const n=await be.get(Se),a=await be.get("tendermatch.config");if(a&&(!n||!n.config)){const r={config:{...me,...a}};await be.set(Se,r),await be.set("tendermatch.config",void 0)}else if(!n||!n.config){const r={config:me};await be.set(Se,r)}}async function Be(){const n=await be.get(Se);return!n||!n.config?(await Ke(),me):{...me,...n.config}}function ft(n,a=je){const r=n.split(`
`),s=[];let o=[],u=0,f=[],p=0;for(let _=0;_<r.length;_++){const c=r[_],S=/^#{1,6}\s/.test(c),j=c.length+1,H=c.trim().length===0;if(S){const $=c.match(/^(#{1,6})/)?.[1].length||0,se=c.replace(/^#{1,6}\s*/,"").trim();f=f.slice(0,$-1),f[$-1]=se,f=f.slice(0,$),o.length>0&&u+j>a?(s.push({content:o.join(`
`),sectionPath:[...f.slice(0,-1)],startLine:p,endLine:_-1}),o=[c],u=j,p=_):(o.push(c),u+=j)}else if(!H&&o.length>0,o.push(c),u+=j,u>a&&o.length>1){const $=o.pop();o.length>0&&s.push({content:o.join(`
`),sectionPath:[...f],startLine:p,endLine:_-1}),o=[$],u=$.length+1,p=_,H||$.trim().length}}return o.length>0&&s.push({content:o.join(`
`),sectionPath:[...f],startLine:p,endLine:r.length-1}),s.filter(_=>_.content.trim().length>0)}function pt(n){return n.length===0?"Document":n.map((r,s)=>s===0?`Chapter ${s+1}: ${r}`:s===1?`Section ${s}: ${r}`:`Subsection ${s}: ${r}`).join(" > ")}async function mt(n){let a=`API request failed with status ${n.status}: ${n.statusText}`;try{const r=await n.json();r.error?.message?a=r.error.message:r.message&&(a=r.message)}catch{const r=await n.text().catch(()=>"");r&&!r.includes("<!DOCTYPE")&&(a=r.substring(0,200))}return a}async function Ne(n,a,r){const s=Ye.createChild({});try{const o=a?[{role:"system",content:a},{role:"user",content:r}]:[{role:"user",content:r}],f=(await $e.handleStreamingPromptDirect({chatContext:{history:o},chatConfig:n,callContext:s,stream:!1})).content?.trim()||"";if(!f)throw new Error("No content found in AI response");return f}finally{s.destroy()}}function He(n){const a=Ie.parse(n.trim(),{skipEmptyLines:!0,header:!1}),r=[];let s=1;return a.data.forEach(o=>{if(o.length>=3){const u=(o[0]||"").trim(),f=(o[1]||"").trim(),p=(o[2]||"").trim();u&&f&&p&&r.push({id:s++,source:u,description:f,importance:p,match:""})}}),r}function Te(n){return n.map((a,r)=>({...a,id:r+1}))}async function We(n){const r=(await $e.getProviders()).find(s=>s.name===n);if(!r)throw new Error(`${n} provider not configured`);return r}async function gt(n,a,r){if(n.length===0)return[];if(n.length<=10)return Te(n);const s=n.map(o=>{const u=o.source.replace(/"/g,'""'),f=o.description.replace(/"/g,'""'),p=o.importance.replace(/"/g,'""');return`"${u}","${f}","${p}"`}).join(`
`);r.message="Anforderungen werden an KI zur Konsolidierung gesendet...",r.progress=85;try{const o=await Ne(a,ht,s);r.message="Konsolidierte Anforderungen werden geparst...",r.progress=90;const u=He(o);return u.length>0?u:Te(n)}catch(o){return console.warn(`Consolidation failed, using deduplicated requirements: ${o}`),Te(n)}}async function wt(n,a,r,s,o){o.message=`Abschnitt ${a+1} von ${r} wird verarbeitet...`,o.progress=40+a/r*30;const u=pt(n.sectionPath),f=`Document location: ${u} (Lines ${n.startLine+1}-${n.endLine+1})

${n.content}`;try{return await Ne(s,ut,f)}catch(p){throw new Error(`Chunk ${a+1} (${u}) failed: ${p}`)}}async function yt(n,a,r){const s=await a.getResource(n.outputFileName);if(s instanceof ee)return Re(`${n.name} wird übersprungen: ${n.outputFileName} existiert bereits`),s;if(n.dependencies)for(const u of n.dependencies){const f=await a.getResource(u);if(!(f instanceof ee))throw new Error(`Dependency missing for ${n.name}: ${u} not found`);r.set(u,f)}await n.execute(r);const o=await a.getResource(n.outputFileName);if(!(o instanceof ee))throw new Error(`${n.name} failed: ${n.outputFileName} was not created`);return o}async function bt(n,a,r){const s=await Be(),o=s.ocrProvider||me.ocrProvider,u=await We(o);if(!u.ocrApiEndpoint)throw new Error(`${o} provider with OCR endpoint not configured`);const f=u.ocrApiEndpoint;await Fe.runAsync("Ausschreibungsdokument wird verarbeitet",async p=>{p.message="PDF-Datei wird gelesen...",p.progress=10;const _=await n.getContents({blob:!0});p.message="Wird in Base64 konvertiert...",p.progress=20;const c=await new Promise((J,oe)=>{const Q=new FileReader;Q.onloadend=()=>{const ge=Q.result.split(",")[1];J(ge)},Q.onerror=oe,Q.readAsDataURL(_)});p.message=`Wird an ${o} OCR gesendet...`,p.progress=40;const S=s.ocrModel||u.model||me.ocrModel,j=await fetch(f,{method:"POST",headers:{Authorization:`Bearer ${u.apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({model:S,document:{type:"document_url",document_url:`data:application/pdf;base64,${c}`},include_image_base64:!1})});if(j.status!==200){const J=await mt(j);throw new Error(`OCR request failed: ${J}`)}p.message="OCR-Antwort wird verarbeitet...",p.progress=70;const H=await j.json();if(!H.pages||!Array.isArray(H.pages))throw new Error("Invalid OCR response format: missing pages array");const $=H.pages.map(J=>J?.markdown||"").join(`

`);if(!$||$.trim().length===0)throw new Error("No markdown content found in OCR response");p.message="Markdown-Datei wird gespeichert...",p.progress=90,await(await a.getResource(r,{create:!0})).saveContents($,{contentType:_e.TEXT}),p.progress=100,Re(`Ausschreibungsdokument verarbeitet: ${r} nach scans/ gespeichert`)})}async function vt(n,a,r){let s=null;return await Fe.runAsync("Anforderungen werden extrahiert",async o=>{o.message="Markdown-Datei wird gelesen...",o.progress=10;const u=await n.getContents({contentType:_e.TEXT});if(!u||u.trim().length===0)throw new Error("Markdown file is empty");const f=await Be(),p=f.extractionProvider||me.extractionProvider;o.message=`${p}-Provider wird abgerufen...`,o.progress=15;const _=await We(p),c=f.extractionModel?{..._,model:f.extractionModel}:_;o.message="Markdown wird in Abschnitte aufgeteilt...",o.progress=20;const S=ft(u,je);if(S.length===0)throw new Error("Failed to split markdown into chunks");o.message=`${S.length} Abschnitt(e) werden verarbeitet...`,o.progress=25;const j=[];for(let te=0;te<S.length;te++)try{const ce=await wt(S[te],te,S.length,c,o);j.push(ce)}catch(ce){throw new Error(`Failed to process chunk ${te+1}: ${ce}`)}o.message="Ergebnisse werden kombiniert...",o.progress=75;const H=[];j.forEach(te=>{const ce=He(te);H.push(...ce)}),o.message="Anforderungen werden mit KI konsolidiert...",o.progress=80;const $=await gt(H,c,o),se={metadata:{createdAt:new Date().toISOString()},requirements:$};o.message="Anforderungsdatei wird gespeichert...",o.progress=90;const J=await a.getResource(r,{create:!0});await J.saveContents(JSON.stringify(se,null,2),{contentType:_e.TEXT}),o.progress=100;const oe=H.length,Q=$.length,xe=oe-Q,ge=xe>0?`Anforderungen aus ${S.length} Abschnitt(en) extrahiert: ${Q} eindeutige Anforderungen (${xe} Duplikate durch KI-Konsolidierung entfernt): ${r} nach scans/ gespeichert`:`Anforderungen aus ${S.length} Abschnitt(en) extrahiert: ${Q} Anforderungen: ${r} nach scans/ gespeichert`;Re(ge),s=J}),s}Ke().catch(n=>{console.warn("Failed to initialize tendermatch config:",n)});Ge({command:{id:"tendermatch.participate",name:"An Ausschreibung teilnehmen",description:"Interesse zur Teilnahme an diesem Ausschreibungsdokument registrieren",parameters:[]},handler:{canExecute:()=>{const n=ve.get();return n instanceof ee?n.getName().toLowerCase().endsWith(".pdf"):!1},execute:async()=>{const n=ve.get(),a=n.getName(),r=`${a}.md`,s=`${a}.requirements.json`,o=await Ve.getWorkspace();if(!o){he("Kein Arbeitsbereich ausgewählt");return}const u=await o.getResource("scans/",{create:!0});if(!u)throw new Error("Failed to create scans directory");const f=new Map;f.set("pdfFile",n),f.set("scansDir",u);const p=[{name:"OCR Processing",outputFileName:r,execute:async _=>{const c=_.get("pdfFile");await bt(c,u,r)}},{name:"Requirements Extraction",outputFileName:s,dependencies:[r],execute:async _=>{const c=_.get(r),S=await vt(c,u,s);_.set(s,S)}}];try{for(const c of p){const S=await yt(c,u,f);S&&f.set(c.outputFileName,S)}const _=f.get(s);_&&setTimeout(()=>{ze.loadEditor(_).catch(c=>{console.error("Failed to open editor:",c)})},100)}catch(_){throw he(`Pipeline fehlgeschlagen: ${_}`),_}finally{o.touch()}}},contribution:{target:"contextmenu:filebrowser",icon:"handshake",label:"Als Ausschreibung verarbeiten",disabled:()=>{const n=ve.get();return n instanceof ee?!n.getName().toLowerCase().endsWith(".pdf"):!0}}});export{Ne as callOpenAI};
