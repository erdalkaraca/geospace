import{g as Pe,i as Te,n as xe,r as G,b as z,a as ze,w as Fe,s as je,p as Ne,t as Le}from"./repeat-Duk-1tMZ.js";import{o as qe,c as Me,U as Ue,f as Ke,F as Ve,L as We,s as He,t as pe,q as B}from"./config-RT97oKMn-DH1WMsHN.js";import{v as Be}from"./third-party-BW12UeC1.js";const Qe="dataview/publish",Ie="dataview/added";var be={exports:{}};var Ze=be.exports,De;function Je(){return De||(De=1,(function(r,i){((n,a)=>{r.exports=a()})(Ze,function n(){var a=typeof self<"u"?self:typeof window<"u"?window:a!==void 0?a:{},u,S=!a.document&&!!a.postMessage,E=a.IS_PAPA_WORKER||!1,v={},Y=0,f={};function X(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(t){var s=Se(t);s.chunkSize=parseInt(s.chunkSize),t.step||t.chunk||(s.chunkSize=null),this._handle=new Ee(s),(this._handle.streamer=this)._config=s}).call(this,e),this.parseChunk=function(t,s){var l=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<l){let w=this._config.newline;w||(o=this._config.quoteChar||'"',w=this._handle.guessLineEndings(t,o)),t=[...t.split(w).slice(l)].join(w)}this.isFirstChunk&&C(this._config.beforeFirstChunk)&&(o=this._config.beforeFirstChunk(t))!==void 0&&(t=o),this.isFirstChunk=!1,this._halted=!1;var l=this._partialLine+t,o=(this._partialLine="",this._handle.parse(l,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(t=o.meta.cursor,l=(this._finished||(this._partialLine=l.substring(t-this._baseIndex),this._baseIndex=t),o&&o.data&&(this._rowCount+=o.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),E)a.postMessage({results:o,workerId:f.WORKER_ID,finished:l});else if(C(this._config.chunk)&&!s){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=o=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!l||!C(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(t){C(this._config.error)?this._config.error(t):E&&this._config.error&&a.postMessage({workerId:f.WORKER_ID,error:t,finished:!1})}}function we(e){var t;(e=e||{}).chunkSize||(e.chunkSize=f.RemoteChunkSize),X.call(this,e),this._nextChunk=S?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(s){this._input=s,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),S||(t.onload=re(this._chunkLoaded,this),t.onerror=re(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!S),this._config.downloadRequestHeaders){var s,l=this._config.downloadRequestHeaders;for(s in l)t.setRequestHeader(s,l[s])}var o;this._config.chunkSize&&(o=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+o));try{t.send(this._config.downloadRequestBody)}catch(w){this._chunkError(w.message)}S&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(s=>(s=s.getResponseHeader("Content-Range"))!==null?parseInt(s.substring(s.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(s){s=t.statusText||s,this._sendError(new Error(s))}}function me(e){(e=e||{}).chunkSize||(e.chunkSize=f.LocalChunkSize),X.call(this,e);var t,s,l=typeof FileReader<"u";this.stream=function(o){this._input=o,s=o.slice||o.webkitSlice||o.mozSlice,l?((t=new FileReader).onload=re(this._chunkLoaded,this),t.onerror=re(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var o=this._input,w=(this._config.chunkSize&&(w=Math.min(this._start+this._config.chunkSize,this._input.size),o=s.call(o,this._start,w)),t.readAsText(o,this._config.encoding));l||this._chunkLoaded({target:{result:w}})},this._chunkLoaded=function(o){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(o.target.result)},this._chunkError=function(){this._sendError(t.error)}}function ue(e){var t;X.call(this,e=e||{}),this.stream=function(s){return t=s,this._nextChunk()},this._nextChunk=function(){var s,l;if(!this._finished)return s=this._config.chunkSize,t=s?(l=t.substring(0,s),t.substring(s)):(l=t,""),this._finished=!t,this.parseChunk(l)}}function ye(e){X.call(this,e=e||{});var t=[],s=!0,l=!1;this.pause=function(){X.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){X.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(o){this._input=o,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){l&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):s=!0},this._streamData=re(function(o){try{t.push(typeof o=="string"?o:o.toString(this._config.encoding)),s&&(s=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(w){this._streamError(w)}},this),this._streamError=re(function(o){this._streamCleanUp(),this._sendError(o)},this),this._streamEnd=re(function(){this._streamCleanUp(),l=!0,this._streamData("")},this),this._streamCleanUp=re(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function Ee(e){var t,s,l,o,w=Math.pow(2,53),I=-w,U=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,K=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,m=this,O=0,h=0,N=!1,p=!1,y=[],c={data:[],errors:[],meta:{}};function $(b){return e.skipEmptyLines==="greedy"?b.join("").trim()==="":b.length===1&&b[0].length===0}function L(){if(c&&l&&(V("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),l=!1),e.skipEmptyLines&&(c.data=c.data.filter(function(d){return!$(d)})),j()){let d=function(T,P){C(e.transformHeader)&&(T=e.transformHeader(T,P)),y.push(T)};if(c)if(Array.isArray(c.data[0])){for(var b=0;j()&&b<c.data.length;b++)c.data[b].forEach(d);c.data.splice(0,1)}else c.data.forEach(d)}function k(d,T){for(var P=e.header?{}:[],x=0;x<d.length;x++){var A=x,_=d[x],_=((H,g)=>(R=>(e.dynamicTypingFunction&&e.dynamicTyping[R]===void 0&&(e.dynamicTyping[R]=e.dynamicTypingFunction(R)),(e.dynamicTyping[R]||e.dynamicTyping)===!0))(H)?g==="true"||g==="TRUE"||g!=="false"&&g!=="FALSE"&&((R=>{if(U.test(R)&&(R=parseFloat(R),I<R&&R<w))return 1})(g)?parseFloat(g):K.test(g)?new Date(g):g===""?null:g):g)(A=e.header?x>=y.length?"__parsed_extra":y[x]:A,_=e.transform?e.transform(_,A):_);A==="__parsed_extra"?(P[A]=P[A]||[],P[A].push(_)):P[A]=_}return e.header&&(x>y.length?V("FieldMismatch","TooManyFields","Too many fields: expected "+y.length+" fields but parsed "+x,h+T):x<y.length&&V("FieldMismatch","TooFewFields","Too few fields: expected "+y.length+" fields but parsed "+x,h+T)),P}var D;c&&(e.header||e.dynamicTyping||e.transform)&&(D=1,!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(k),D=c.data.length):c.data=k(c.data,0),e.header&&c.meta&&(c.meta.fields=y),h+=D)}function j(){return e.header&&y.length===0}function V(b,k,D,d){b={type:b,code:k,message:D},d!==void 0&&(b.row=d),c.errors.push(b)}C(e.step)&&(o=e.step,e.step=function(b){c=b,j()?L():(L(),c.data.length!==0&&(O+=b.data.length,e.preview&&O>e.preview?s.abort():(c.data=c.data[0],o(c,m))))}),this.parse=function(b,k,D){var d=e.quoteChar||'"',d=(e.newline||(e.newline=this.guessLineEndings(b,d)),l=!1,e.delimiter?C(e.delimiter)&&(e.delimiter=e.delimiter(b),c.meta.delimiter=e.delimiter):((d=((T,P,x,A,_)=>{var H,g,R,ie;_=_||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var le=0;le<_.length;le++){for(var Q,de=_[le],q=0,Z=0,F=0,M=(R=void 0,new ve({comments:A,delimiter:de,newline:P,preview:10}).parse(T)),ee=0;ee<M.data.length;ee++)x&&$(M.data[ee])?F++:(Q=M.data[ee].length,Z+=Q,R===void 0?R=Q:0<Q&&(q+=Math.abs(Q-R),R=Q));0<M.data.length&&(Z/=M.data.length-F),(g===void 0||q<=g)&&(ie===void 0||ie<Z)&&1.99<Z&&(g=q,H=de,ie=Z)}return{successful:!!(e.delimiter=H),bestDelimiter:H}})(b,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=d.bestDelimiter:(l=!0,e.delimiter=f.DefaultDelimiter),c.meta.delimiter=e.delimiter),Se(e));return e.preview&&e.header&&d.preview++,t=b,s=new ve(d),c=s.parse(t,k,D),L(),N?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return N},this.pause=function(){N=!0,s.abort(),t=C(e.chunk)?"":t.substring(s.getCharIndex())},this.resume=function(){m.streamer._halted?(N=!1,m.streamer.parseChunk(t,!0)):setTimeout(m.resume,3)},this.aborted=function(){return p},this.abort=function(){p=!0,s.abort(),c.meta.aborted=!0,C(e.complete)&&e.complete(c),t=""},this.guessLineEndings=function(T,d){T=T.substring(0,1048576);var d=new RegExp(he(d)+"([^]*?)"+he(d),"gm"),D=(T=T.replace(d,"")).split("\r"),d=T.split(`
`),T=1<d.length&&d[0].length<D[0].length;if(D.length===1||T)return`
`;for(var P=0,x=0;x<D.length;x++)D[x][0]===`
`&&P++;return P>=D.length/2?`\r
`:"\r"}}function he(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ve(e){var t=(e=e||{}).delimiter,s=e.newline,l=e.comments,o=e.step,w=e.preview,I=e.fastMode,U=null,K=!1,m=e.quoteChar==null?'"':e.quoteChar,O=m;if(e.escapeChar!==void 0&&(O=e.escapeChar),(typeof t!="string"||-1<f.BAD_DELIMITERS.indexOf(t))&&(t=","),l===t)throw new Error("Comment character same as delimiter");l===!0?l="#":(typeof l!="string"||-1<f.BAD_DELIMITERS.indexOf(l))&&(l=!1),s!==`
`&&s!=="\r"&&s!==`\r
`&&(s=`
`);var h=0,N=!1;this.parse=function(p,y,c){if(typeof p!="string")throw new Error("Input must be a string");var $=p.length,L=t.length,j=s.length,V=l.length,b=C(o),k=[],D=[],d=[],T=h=0;if(!p)return q();if(I||I!==!1&&p.indexOf(m)===-1){for(var P=p.split(s),x=0;x<P.length;x++){if(d=P[x],h+=d.length,x!==P.length-1)h+=s.length;else if(c)return q();if(!l||d.substring(0,V)!==l){if(b){if(k=[],ie(d.split(t)),Z(),N)return q()}else ie(d.split(t));if(w&&w<=x)return k=k.slice(0,w),q(!0)}}return q()}for(var A=p.indexOf(t,h),_=p.indexOf(s,h),H=new RegExp(he(O)+he(m),"g"),g=p.indexOf(m,h);;)if(p[h]===m)for(g=h,h++;;){if((g=p.indexOf(m,g+1))===-1)return c||D.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:k.length,index:h}),Q();if(g===$-1)return Q(p.substring(h,g).replace(H,m));if(m===O&&p[g+1]===O)g++;else if(m===O||g===0||p[g-1]!==O){A!==-1&&A<g+1&&(A=p.indexOf(t,g+1));var R=le((_=_!==-1&&_<g+1?p.indexOf(s,g+1):_)===-1?A:Math.min(A,_));if(p.substr(g+1+R,L)===t){d.push(p.substring(h,g).replace(H,m)),p[h=g+1+R+L]!==m&&(g=p.indexOf(m,h)),A=p.indexOf(t,h),_=p.indexOf(s,h);break}if(R=le(_),p.substring(g+1+R,g+1+R+j)===s){if(d.push(p.substring(h,g).replace(H,m)),de(g+1+R+j),A=p.indexOf(t,h),g=p.indexOf(m,h),b&&(Z(),N))return q();if(w&&k.length>=w)return q(!0);break}D.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:k.length,index:h}),g++}}else if(l&&d.length===0&&p.substring(h,h+V)===l){if(_===-1)return q();h=_+j,_=p.indexOf(s,h),A=p.indexOf(t,h)}else if(A!==-1&&(A<_||_===-1))d.push(p.substring(h,A)),h=A+L,A=p.indexOf(t,h);else{if(_===-1)break;if(d.push(p.substring(h,_)),de(_+j),b&&(Z(),N))return q();if(w&&k.length>=w)return q(!0)}return Q();function ie(F){k.push(F),T=h}function le(F){var M=0;return M=F!==-1&&(F=p.substring(g+1,F))&&F.trim()===""?F.length:M}function Q(F){return c||(F===void 0&&(F=p.substring(h)),d.push(F),h=$,ie(d),b&&Z()),q()}function de(F){h=F,ie(d),d=[],_=p.indexOf(s,h)}function q(F){if(e.header&&!y&&k.length&&!K){var M=k[0],ee=Object.create(null),ke=new Set(M);let Re=!1;for(let ce=0;ce<M.length;ce++){let J=M[ce];if(ee[J=C(e.transformHeader)?e.transformHeader(J,ce):J]){let fe,Oe=ee[J];for(;fe=J+"_"+Oe,Oe++,ke.has(fe););ke.add(fe),M[ce]=fe,ee[J]++,Re=!0,(U=U===null?{}:U)[fe]=J}else ee[J]=1,M[ce]=J;ke.add(J)}Re&&console.warn("Duplicate headers found and renamed."),K=!0}return{data:k,errors:D,meta:{delimiter:t,linebreak:s,aborted:N,truncated:!!F,cursor:T+(y||0),renamedHeaders:U}}}function Z(){o(q()),k=[],D=[]}},this.abort=function(){N=!0},this.getCharIndex=function(){return h}}function $e(e){var t=e.data,s=v[t.workerId],l=!1;if(t.error)s.userError(t.error,t.file);else if(t.results&&t.results.data){var o={abort:function(){l=!0,Ce(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:Ae,resume:Ae};if(C(s.userStep)){for(var w=0;w<t.results.data.length&&(s.userStep({data:t.results.data[w],errors:t.results.errors,meta:t.results.meta},o),!l);w++);delete t.results}else C(s.userChunk)&&(s.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!l&&Ce(t.workerId,t.results)}function Ce(e,t){var s=v[e];C(s.userComplete)&&s.userComplete(t),s.terminate(),delete v[e]}function Ae(){throw new Error("Not implemented.")}function Se(e){if(typeof e!="object"||e===null)return e;var t,s=Array.isArray(e)?[]:{};for(t in e)s[t]=Se(e[t]);return s}function re(e,t){return function(){e.apply(t,arguments)}}function C(e){return typeof e=="function"}return f.parse=function(e,t){var s=(t=t||{}).dynamicTyping||!1;if(C(s)&&(t.dynamicTypingFunction=s,s={}),t.dynamicTyping=s,t.transform=!!C(t.transform)&&t.transform,!t.worker||!f.WORKERS_SUPPORTED)return s=null,f.NODE_STREAM_INPUT,typeof e=="string"?(e=(l=>l.charCodeAt(0)!==65279?l:l.slice(1))(e),s=new(t.download?we:ue)(t)):e.readable===!0&&C(e.read)&&C(e.on)?s=new ye(t):(a.File&&e instanceof File||e instanceof Object)&&(s=new me(t)),s.stream(e);(s=(()=>{var l;return!!f.WORKERS_SUPPORTED&&(l=(()=>{var o=a.URL||a.webkitURL||null,w=n.toString();return f.BLOB_URL||(f.BLOB_URL=o.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",w,")();"],{type:"text/javascript"})))})(),(l=new a.Worker(l)).onmessage=$e,l.id=Y++,v[l.id]=l)})()).userStep=t.step,s.userChunk=t.chunk,s.userComplete=t.complete,s.userError=t.error,t.step=C(t.step),t.chunk=C(t.chunk),t.complete=C(t.complete),t.error=C(t.error),delete t.worker,s.postMessage({input:e,config:t,workerId:s.id})},f.unparse=function(e,t){var s=!1,l=!0,o=",",w=`\r
`,I='"',U=I+I,K=!1,m=null,O=!1,h=((()=>{if(typeof t=="object"){if(typeof t.delimiter!="string"||f.BAD_DELIMITERS.filter(function(y){return t.delimiter.indexOf(y)!==-1}).length||(o=t.delimiter),typeof t.quotes!="boolean"&&typeof t.quotes!="function"&&!Array.isArray(t.quotes)||(s=t.quotes),typeof t.skipEmptyLines!="boolean"&&typeof t.skipEmptyLines!="string"||(K=t.skipEmptyLines),typeof t.newline=="string"&&(w=t.newline),typeof t.quoteChar=="string"&&(I=t.quoteChar),typeof t.header=="boolean"&&(l=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw new Error("Option columns is empty");m=t.columns}t.escapeChar!==void 0&&(U=t.escapeChar+I),t.escapeFormulae instanceof RegExp?O=t.escapeFormulae:typeof t.escapeFormulae=="boolean"&&t.escapeFormulae&&(O=/^[=+\-@\t\r].*$/)}})(),new RegExp(he(I),"g"));if(typeof e=="string"&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return N(null,e,K);if(typeof e[0]=="object")return N(m||Object.keys(e[0]),e,K)}else if(typeof e=="object")return typeof e.data=="string"&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||m),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]=="object"?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]=="object"||(e.data=[e.data])),N(e.fields||[],e.data||[],K);throw new Error("Unable to serialize unrecognized input");function N(y,c,$){var L="",j=(typeof y=="string"&&(y=JSON.parse(y)),typeof c=="string"&&(c=JSON.parse(c)),Array.isArray(y)&&0<y.length),V=!Array.isArray(c[0]);if(j&&l){for(var b=0;b<y.length;b++)0<b&&(L+=o),L+=p(y[b],b);0<c.length&&(L+=w)}for(var k=0;k<c.length;k++){var D=(j?y:c[k]).length,d=!1,T=j?Object.keys(c[k]).length===0:c[k].length===0;if($&&!j&&(d=$==="greedy"?c[k].join("").trim()==="":c[k].length===1&&c[k][0].length===0),$==="greedy"&&j){for(var P=[],x=0;x<D;x++){var A=V?y[x]:x;P.push(c[k][A])}d=P.join("").trim()===""}if(!d){for(var _=0;_<D;_++){0<_&&!T&&(L+=o);var H=j&&V?y[_]:_;L+=p(c[k][H],_)}k<c.length-1&&(!$||0<D&&!T)&&(L+=w)}}return L}function p(y,c){var $,L;return y==null?"":y.constructor===Date?JSON.stringify(y).slice(1,25):(L=!1,O&&typeof y=="string"&&O.test(y)&&(y="'"+y,L=!0),$=y.toString().replace(h,U),(L=L||s===!0||typeof s=="function"&&s(y,c)||Array.isArray(s)&&s[c]||((j,V)=>{for(var b=0;b<V.length;b++)if(-1<j.indexOf(V[b]))return!0;return!1})($,f.BAD_DELIMITERS)||-1<$.indexOf(o)||$.charAt(0)===" "||$.charAt($.length-1)===" ")?I+$+I:$)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!S&&!!a.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=ve,f.ParserHandle=Ee,f.NetworkStreamer=we,f.FileStreamer=me,f.StringStreamer=ue,f.ReadableStreamStreamer=ye,a.jQuery&&((u=a.jQuery).fn.parse=function(e){var t=e.config||{},s=[];return this.each(function(w){if(!(u(this).prop("tagName").toUpperCase()==="INPUT"&&u(this).attr("type").toLowerCase()==="file"&&a.FileReader)||!this.files||this.files.length===0)return!0;for(var I=0;I<this.files.length;I++)s.push({file:this.files[I],inputElem:this,instanceConfig:u.extend({},t)})}),l(),this;function l(){if(s.length===0)C(e.complete)&&e.complete();else{var w,I,U,K,m=s[0];if(C(e.before)){var O=e.before(m.file,m.inputElem);if(typeof O=="object"){if(O.action==="abort")return w="AbortError",I=m.file,U=m.inputElem,K=O.reason,void(C(e.error)&&e.error({name:w},I,U,K));if(O.action==="skip")return void o();typeof O.config=="object"&&(m.instanceConfig=u.extend(m.instanceConfig,O.config))}else if(O==="skip")return void o()}var h=m.instanceConfig.complete;m.instanceConfig.complete=function(N){C(h)&&h(N,m.file,m.inputElem),o()},f.parse(m.file,m.instanceConfig)}}function o(){s.splice(0,1),l()}}),E&&(a.onmessage=function(e){e=e.data,f.WORKER_ID===void 0&&e&&(f.WORKER_ID=e.workerId),typeof e.input=="string"?a.postMessage({workerId:f.WORKER_ID,results:f.parse(e.input,e.config),finished:!0}):(a.File&&e.input instanceof File||e.input instanceof Object)&&(e=f.parse(e.input,e.config))&&a.postMessage({workerId:f.WORKER_ID,results:e,finished:!0})}),(we.prototype=Object.create(X.prototype)).constructor=we,(me.prototype=Object.create(X.prototype)).constructor=me,(ue.prototype=Object.create(ue.prototype)).constructor=ue,(ye.prototype=Object.create(X.prototype)).constructor=ye,f})})(be)),be.exports}var Ge=Je();const Ye=Pe(Ge),ge="dataview/",ne=ge+"index";class Xe{init(){this.subscriptionToken===void 0&&(this.subscriptionToken=je(Qe,i=>{this.handlePublish(i)}))}async handlePublish(i){const n=Be(),a=Date.now(),u={id:i.id??n,title:i.title,data:i.data,source:i.source,createdAt:a};await B.persistObject(ge+n,u);const S=await B.getObject(ne),E=Array.isArray(S)?S:[];E.push({storageKey:n,title:i.title,source:i.source,createdAt:a}),await B.persistObject(ne,E),Ne(Ie,{storageKey:n,title:i.title,createdAt:a})}async listViews(){const i=await B.getObject(ne);return!Array.isArray(i)||i.length===0?[]:typeof i[0]=="string"?i.map(a=>({storageKey:a,title:a,createdAt:0})):[...i].sort((a,u)=>a.createdAt-u.createdAt)}async getView(i){return await B.getObject(ge+i)??null}async deleteView(i){const n=await B.getObject(ne),a=Array.isArray(n)?n.filter(u=>u.storageKey!==i):[];await B.persistObject(ne,a),await B.persistObject(ge+i,null)}async clearAllViews(){const i=await B.getObject(ne),n=Array.isArray(i)?i:[];await Promise.all(n.map(a=>B.persistObject(ge+a.storageKey,null))),await B.persistObject(ne,[])}}const se=new Xe;var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,ae=(r,i,n,a)=>{for(var u=a>1?void 0:a?tt(i,n):i,S=r.length-1,E;S>=0;S--)(E=r[S])&&(u=(a?E(i,n,u):E(u))||u);return a&&u&&et(i,n,u),u};function _e(r){return r==null?"":String(r)}function rt(r,i){return r.length===0?!1:r.every(n=>{const a=n[i];if(a==null)return!0;const u=Number(a);return Number.isFinite(u)})}function it(r,i,n){if(n){const a=Number(r),u=Number(i);return Number.isFinite(a)?Number.isFinite(u)?a-u:-1:Number.isFinite(u)?1:0}return _e(r).localeCompare(_e(i),void 0,{numeric:!0})}let W=class extends ze{constructor(){super(...arguments),this.data={columns:[],rows:[]},this.emptyMessage="No data.",this.sortColumnIndex=null,this.sortDirection="asc",this.filterQuery="",this.pageSize=25,this.currentPage=0}get columns(){return Array.isArray(this.data?.columns)?this.data.columns:[]}get rows(){return Array.isArray(this.data?.rows)?this.data.rows:[]}get filteredRows(){const r=this.filterQuery.trim().toLowerCase();return r?this.rows.filter(i=>i.some(n=>_e(n).toLowerCase().includes(r))):this.rows}get sortedRows(){const r=this.filteredRows;if(this.sortColumnIndex==null||this.sortColumnIndex<0)return r;const i=this.sortColumnIndex,n=rt(r,i),a=this.sortDirection==="asc"?1:-1;return[...r].sort((u,S)=>{const E=u[i],v=S[i];return a*it(E,v,n)})}get totalRows(){return this.sortedRows.length}get pageCount(){const r=this.totalRows;return r===0?1:Math.ceil(r/this.pageSize)}get pagedRows(){const r=this.sortedRows,n=this.clampedPage*this.pageSize;return r.slice(n,n+this.pageSize)}get clampedPage(){const r=this.pageCount;return r<=0?0:Math.min(this.currentPage,r-1)}goToPage(r){const i=Math.max(0,this.pageCount-1);this.currentPage=Math.max(0,Math.min(r,i)),this.requestUpdate()}onPageSizeChange(r){const i=r.target.value,n=parseInt(i,10);!Number.isFinite(n)||n<1||(this.pageSize=n,this.currentPage=0,this.requestUpdate())}onSort(r){this.sortColumnIndex===r?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumnIndex=r,this.sortDirection="asc"),this.requestUpdate()}onFilterInput(r){this.filterQuery=r.target.value,this.requestUpdate()}clearFilter(){this.filterQuery="",this.requestUpdate()}getSortAria(r){return this.sortColumnIndex!==r?"none":this.sortDirection==="asc"?"ascending":"descending"}render(){const{columns:r}=this,i=this.totalRows,n=this.pagedRows,a=this.clampedPage,u=this.pageCount,S=i===0?0:a*this.pageSize+1,E=Math.min((a+1)*this.pageSize,i);return r.length===0&&i===0&&this.rows.length===0?z`<div class="table-empty">${this.emptyMessage}</div>`:z`
      <div class="table-toolbar">
        <wa-input
          class="filter-input"
          placeholder="Filter…"
          .value=${this.filterQuery}
          @input=${this.onFilterInput}
          @wa-clear=${this.clearFilter}
          with-clear
          size="small"
          aria-label="Filter rows"
        >
          <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
        </wa-input>
        <div class="paging-controls">
          <wa-select
            class="page-size-select"
            size="small"
            .value=${String(this.pageSize)}
            title="Rows per page"
            @change=${this.onPageSizeChange}
          >
            ${W.PAGE_SIZE_OPTIONS.map(v=>z`<wa-option value=${String(v)}>${v}</wa-option>`)}
          </wa-select>
          <span class="paging-summary" aria-live="polite">
            ${i===0?"0 rows":`${S}–${E} of ${i}`}
          </span>
          <wa-button
            size="small"
            appearance="plain"
            title="Previous page"
            ?disabled=${u<=1||a<=0}
            @click=${()=>this.goToPage(a-1)}
          >
            <wa-icon name="chevron-left" label="Previous"></wa-icon>
          </wa-button>
          <wa-button
            size="small"
            appearance="plain"
            title="Next page"
            ?disabled=${u<=1||a>=u-1}
            @click=${()=>this.goToPage(a+1)}
          >
            <wa-icon name="chevron-right" label="Next"></wa-icon>
          </wa-button>
        </div>
      </div>
      <div class="table-wrap">
        <table class="result-table">
          <thead>
            <tr>
              ${r.map((v,Y)=>z`
                  <th scope="col" role="columnheader" aria-sort=${this.getSortAria(Y)}>
                    <button
                      type="button"
                      class="th-sort"
                      @click=${()=>this.onSort(Y)}
                      title="Sort by ${v}"
                    >
                      <span class="th-label">${v}</span>
                      ${this.sortColumnIndex===Y?z`<wa-icon
                            name=${this.sortDirection==="asc"?"arrow-up":"arrow-down"}
                            label=${this.sortDirection}
                          ></wa-icon>`:z`<wa-icon name="arrows-up-down" label="Sort"></wa-icon>`}
                    </button>
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${n.length===0?z`<tr><td colspan=${r.length} class="table-empty-cell">No matching rows.</td></tr>`:n.map(v=>z`
                    <tr>
                      ${v.map(Y=>z`<td>${_e(Y)}</td>`)}
                    </tr>
                  `)}
          </tbody>
        </table>
      </div>
    `}};W.PAGE_SIZE_OPTIONS=[10,25,50,100];W.styles=Te`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
    }
    .table-empty {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    .table-toolbar {
      flex: none;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.25rem 0;
      flex-wrap: wrap;
    }
    .filter-input {
      max-width: 280px;
    }
    .paging-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
    }
    .page-size-select {
    }
    .paging-summary {
      font-size: 0.8125rem;
      color: var(--wa-color-text-quiet);
      min-width: 5rem;
    }
    .table-wrap {
      flex: 1;
      min-height: 0;
      overflow: auto;
      border: 1px solid var(--wa-color-neutral-border-quiet);
      border-radius: var(--wa-border-radius-medium, 0.25rem);
    }
    .result-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
      color: var(--wa-color-text-normal);
    }
    .result-table th,
    .result-table td {
      padding: 0.5rem 0.75rem;
      text-align: left;
      border-bottom: 1px solid var(--wa-color-neutral-border-quiet);
    }
    .result-table th {
      position: sticky;
      top: 0;
      z-index: 1;
      background: var(--wa-color-surface-lowered);
      font-weight: 600;
      white-space: nowrap;
      color: var(--wa-color-text-normal);
      box-shadow: 0 1px 0 0 var(--wa-color-neutral-border-quiet);
    }
    .result-table tbody tr:nth-child(even) td {
      background: var(--wa-color-surface-default);
    }
    .result-table tbody tr:nth-child(odd) td {
      background: var(--wa-color-surface-lowered);
    }
    .result-table tbody tr:hover td {
      background: var(--wa-color-neutral-fill-normal);
    }
    .th-sort {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      width: 100%;
      padding: 0;
      border: none;
      background: none;
      font: inherit;
      cursor: pointer;
      color: inherit;
      text-align: left;
    }
    .th-sort:hover {
      opacity: 0.85;
    }
    .th-label {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .th-sort wa-icon {
      flex-shrink: 0;
      opacity: 0.7;
      font-size: 0.75em;
    }
    .table-empty-cell {
      color: var(--wa-color-text-quiet);
      font-style: italic;
      text-align: center;
    }
  `;ae([xe({attribute:!1})],W.prototype,"data",2);ae([xe({type:String})],W.prototype,"emptyMessage",2);ae([G()],W.prototype,"sortColumnIndex",2);ae([G()],W.prototype,"sortDirection",2);ae([G()],W.prototype,"filterQuery",2);ae([G()],W.prototype,"pageSize",2);ae([G()],W.prototype,"currentPage",2);W=ae([Le("lyra-data-table")],W);var st=Object.defineProperty,at=Object.getOwnPropertyDescriptor,oe=(r,i,n,a)=>{for(var u=a>1?void 0:a?at(i,n):i,S=r.length-1,E;S>=0;S--)(E=r[S])&&(u=(a?E(i,n,u):E(u))||u);return a&&u&&st(i,n,u),u};let te=class extends We{constructor(){super(...arguments),this.dataview=null,this.persistedList=[],this.selectedStorageKey="",this.selectedView=null,this.loadingList=!0,this.autoActivateTab=!0}get displayed(){return this.selectedView??this.dataview}get hasData(){const r=this.displayed;if(!r)return!1;const{columns:i,rows:n}=r.data;return Array.isArray(i)&&Array.isArray(n)&&(i.length>0||n.length>0)}toCsv(r){const{columns:i,rows:n}=r.data,a=E=>{if(E==null)return"";const v=String(E);return/[",\n]/.test(v)?`"${v.replace(/"/g,'""')}"`:v},u=i.map(a).join(","),S=n.map(E=>E.map(a).join(",")).join(`
`);return S?`${u}
${S}`:u}async onExportCsv(){const r=this.displayed;if(!(!r||!this.hasData))try{const i=this.toCsv(r),n=r.title?.trim()||"dataview",a=new Date().toISOString().replace(/[:.]/g,"-"),u=`${n.replace(/[^a-zA-Z0-9-_]+/g,"_")}-${a}.csv`,S=await He("directory");if(!S)return;this.executeCommand("touch",{path:`${S}/${u}`,contents:i})}catch(i){pe(i instanceof Error?i.message:String(i))}}async doInitUI(){const r=await this.getDialogSetting();r&&typeof r.autoActivateTab=="boolean"&&(this.autoActivateTab=r.autoActivateTab),this.subscribe(Ie,async()=>{await this.refreshPersistedList(!0),this.autoActivateTab&&this.activateContainingTab()}),await this.refreshPersistedList(!1)}async refreshPersistedList(r){this.loadingList=!0,this.requestUpdate();try{if(this.persistedList=await se.listViews(),r&&this.persistedList.length>0){const i=this.persistedList[this.persistedList.length-1];this.selectedStorageKey=i.storageKey,this.selectedView=await se.getView(i.storageKey)}else this.selectedStorageKey?this.selectedView=await se.getView(this.selectedStorageKey):this.selectedView=null}catch(i){pe(i instanceof Error?i.message:String(i)),this.persistedList=[],this.selectedView=null}finally{this.loadingList=!1,this.requestUpdate(),this.updateToolbar()}}async selectStorageKey(r){if(this.selectedStorageKey=r,!r){this.selectedView=null,this.requestUpdate(),this.updateToolbar();return}try{this.selectedView=await se.getView(r)}catch(i){pe(i instanceof Error?i.message:String(i)),this.selectedView=null}this.requestUpdate(),this.updateToolbar()}async onAutoActivateChange(r){const i=r.target.checked;this.autoActivateTab=i;const n=await this.getDialogSetting()??{};await this.setDialogSetting({...n,autoActivateTab:i}),this.updateToolbar()}async onHistorySelect(r){const i=r.detail?.item?.value??"";!i||i==="__stats__"||await this.selectStorageKey(i)}async onDeleteView(r,i){r.stopPropagation(),r.preventDefault();try{await se.deleteView(i),this.selectedStorageKey===i&&(this.selectedStorageKey="",this.selectedView=null),await this.refreshPersistedList(!0)}catch(n){pe(n instanceof Error?n.message:String(n))}}async onClearHistory(){try{await se.clearAllViews(),this.selectedStorageKey="",this.selectedView=null,await this.refreshPersistedList(!1)}catch(r){pe(r instanceof Error?r.message:String(r))}}renderToolbar(){const r=this.selectedView??this.dataview,i=this.persistedList.find(v=>v.storageKey===this.selectedStorageKey),n=i?.title??r?.title??(this.persistedList.length>0?"Latest data view":"No data"),a=i?.createdAt??r?.createdAt?new Date(i?.createdAt??r?.createdAt).toLocaleString():null,u=r?.source??null,S=u?`${n} · ${u}`:n,E=a?`${S} (${a})`:S;return z`
        <wa-dropdown
          placement="bottom-start"
          distance="4"
          size="small"
          hoist
          @wa-select=${v=>this.onHistorySelect(v)}
        >
          <wa-button
            slot="trigger"
            appearance="plain"
            size="small"
            with-caret
            title="Data view history"
          >
            <wa-icon name="clock-rotate-left" label="History"></wa-icon>
          </wa-button>

          <wa-dropdown-item value="__stats__" disabled>
            ${this.persistedList.length} data view${this.persistedList.length===1?"":"s"}
            ${this.persistedList.length>0?z`
                  <wa-button
                    slot="details"
                    appearance="plain"
                    size="small"
                    title="Clear history"
                    @click=${()=>this.onClearHistory()}
                  >
                    <wa-icon name="trash" label="Clear history"></wa-icon>
                  </wa-button>
                `:null}
          </wa-dropdown-item>

          ${this.persistedList.map(v=>z`
              <wa-dropdown-item value=${v.storageKey}>
                ${v.source?`${v.title} · ${v.source}`:v.title}
                ${v.createdAt?z`<span style="opacity: 0.7; margin-left: 0.5rem; font-size: 0.75em;">
                      (${new Date(v.createdAt).toLocaleString()})
                    </span>`:null}
                <wa-button
                  slot="details"
                  appearance="plain"
                  size="small"
                  title="Delete data view"
                  @click=${Y=>this.onDeleteView(Y,v.storageKey)}
                >
                  <wa-icon name="trash" label="Delete"></wa-icon>
                </wa-button>
              </wa-dropdown-item>
            `)}

        </wa-dropdown>

        <wa-divider orientation="vertical"></wa-divider>

        <wa-button
          size="small"
          appearance="plain"
          title="Export current data view to CSV"
          ?disabled=${!this.hasData}
          @click=${()=>this.onExportCsv()}
        >
          <wa-icon name="file-csv" label="Export CSV"></wa-icon>
        </wa-button>

        <wa-switch
          ?checked=${this.autoActivateTab}
          size="small"
          title="Switch to this tab when new results arrive"
          @change=${v=>this.onAutoActivateChange(v)}
          style="margin-top: 0.5rem;"
        >
          Auto-show
        </wa-switch>

        ${Fe(r,()=>z`<wa-divider orientation="vertical"></wa-divider><span>${E}</span>`)}
    `}renderTable(r){return this.hasData?z`<lyra-data-table .data=${r.data}></lyra-data-table>`:z`<div class="result-empty">No data.</div>`}render(){const r=this.displayed;return r!=null?this.renderTable(r):z`<div class="result-empty">No data.</div>`}};te.styles=Te`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .result-empty {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
  `;oe([xe({attribute:!1})],te.prototype,"dataview",2);oe([G()],te.prototype,"persistedList",2);oe([G()],te.prototype,"selectedStorageKey",2);oe([G()],te.prototype,"selectedView",2);oe([G()],te.prototype,"loadingList",2);oe([G()],te.prototype,"autoActivateTab",2);te=oe([Le("lyra-dataview")],te);function nt(r){const i=Ye.parse(r,{header:!0,skipEmptyLines:!0}),n=i.meta.fields??[],a=i.data.map(u=>n.map(S=>u[S]));return{columns:n,rows:a}}se.init();qe.put("dataviewerService",se);Me.registerContribution(Ue,{name:"view.dataviewer",label:"Data Views",icon:"table",component:r=>z`<lyra-dataview id="${r}"></lyra-dataview>`});Ke.registerEditorInputHandler({editorId:"system.dataviewer-table",label:"Table",icon:"table",ranking:800,canHandle:r=>{if(!(r instanceof Ve))return!1;const i=r.getName().toLowerCase();return i.endsWith(".csv")||i.endsWith(".tsv")},handle:async r=>{r.getName();const i=await r.getContents(),{columns:n,rows:a}=nt(i??""),u={columns:n,rows:a};return{title:r.getWorkspacePath(),data:u,key:r.getWorkspacePath(),icon:"table",noOverflow:!1,state:{},component:()=>z`<lyra-data-table .data=${u}></lyra-data-table>`}}});function ut(){}export{ut as default};
