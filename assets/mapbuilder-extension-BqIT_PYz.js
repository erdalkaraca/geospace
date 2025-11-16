import{x as Be,B as lt}from"./index-BahNKH7f.js";import{w as Je,l as zt,t as ht,a as mt,b as be,r as Gt,c as ot,G as Jt,F as Oe,d as ct,e as qt,D as Ht}from"./main-BNygSelY.js";var ze={exports:{}},ut;function Yt(){return ut||(ut=1,(function(J){(P=>{var x=Object.defineProperty,S=Object.getOwnPropertyDescriptor,T=Object.getOwnPropertyNames,A=Object.prototype.hasOwnProperty,I=(e,n)=>{for(var s in n)x(e,s,{get:n[s],enumerable:!0})},q=(e,n,s,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let p of T(n))!A.call(e,p)&&p!==s&&x(e,p,{get:()=>n[p],enumerable:!(o=S(n,p))||o.enumerable});return e},ne=e=>q(x({},"__esModule",{value:!0}),e),re=(e,n,s)=>new Promise((o,p)=>{var w=u=>{try{E(s.next(u))}catch(W){p(W)}},h=u=>{try{E(s.throw(u))}catch(W){p(W)}},E=u=>u.done?o(u.value):Promise.resolve(u.value).then(w,h);E((s=s.apply(e,n)).next())}),se={};I(se,{analyzeMetafile:()=>Rt,analyzeMetafileSync:()=>Nt,build:()=>jt,buildSync:()=>At,context:()=>Tt,default:()=>Bt,formatMessages:()=>Dt,formatMessagesSync:()=>It,initialize:()=>Wt,stop:()=>Ut,transform:()=>Ot,transformSync:()=>Ft,version:()=>Ct}),P.exports=ne(se);function ee(e){let n=o=>{if(o===null)s.write8(0);else if(typeof o=="boolean")s.write8(1),s.write8(+o);else if(typeof o=="number")s.write8(2),s.write32(o|0);else if(typeof o=="string")s.write8(3),s.write(ce(o));else if(o instanceof Uint8Array)s.write8(4),s.write(o);else if(o instanceof Array){s.write8(5),s.write32(o.length);for(let p of o)n(p)}else{let p=Object.keys(o);s.write8(6),s.write32(p.length);for(let w of p)s.write(ce(w)),n(o[w])}},s=new De;return s.write32(0),s.write32(e.id<<1|+!e.isRequest),n(e.value),Ve(s.buf,s.len-4,0),s.buf.subarray(0,s.len)}function ie(e){let n=()=>{switch(s.read8()){case 0:return null;case 1:return!!s.read8();case 2:return s.read32();case 3:return ve(s.read());case 4:return s.read();case 5:{let h=s.read32(),E=[];for(let u=0;u<h;u++)E.push(n());return E}case 6:{let h=s.read32(),E={};for(let u=0;u<h;u++)E[ve(s.read())]=n();return E}default:throw new Error("Invalid packet")}},s=new De(e),o=s.read32(),p=(o&1)===0;o>>>=1;let w=n();if(s.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:p,value:w}}var De=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let n=new Uint8Array((this.len+e)*2);n.set(this.buf),this.buf=n}return this.len+=e,this.len-e}write8(e){let n=this._write(1);this.buf[n]=e}write32(e){let n=this._write(4);Ve(this.buf,e,n)}write(e){let n=this._write(4+e.length);Ve(this.buf,e.length,n),this.buf.set(e,n+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return He(this.buf,this._read(4))}read(){let e=this.read32(),n=new Uint8Array(e),s=this._read(n.length);return n.set(this.buf.subarray(s,s+e)),n}},ce,ve,Le;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,n=new TextDecoder;ce=s=>e.encode(s),ve=s=>n.decode(s),Le='new TextEncoder().encode("")'}else if(typeof Buffer<"u")ce=e=>Buffer.from(e),ve=e=>{let{buffer:n,byteOffset:s,byteLength:o}=e;return Buffer.from(n,s,o).toString()},Le='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(ce("")instanceof Uint8Array))throw new Error(`Invariant violation: "${Le} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function He(e,n){return e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24}function Ve(e,n,s){e[s++]=n,e[s++]=n>>8,e[s++]=n>>16,e[s++]=n>>24}var te=JSON.stringify,Ye="warning",Ke="silent";function Ee(e,n){const s=[];for(const o of e){if(le(o,n),o.indexOf(",")>=0)throw new Error(`Invalid ${n}: ${o}`);s.push(o)}return s.join(",")}var Re=()=>null,K=e=>typeof e=="boolean"?null:"a boolean",D=e=>typeof e=="string"?null:"a string",Ae=e=>e instanceof RegExp?null:"a RegExp object",xe=e=>typeof e=="number"&&e===(e|0)?null:"an integer",pt=e=>typeof e=="number"&&e===(e|0)&&e>=0&&e<=65535?null:"a valid port number",Xe=e=>typeof e=="function"?null:"a function",me=e=>Array.isArray(e)?null:"an array",ae=e=>Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"an array of strings",ue=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",gt=e=>typeof e=="object"&&e!==null?null:"an array or an object",wt=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",Qe=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",Ze=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",yt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",et=e=>typeof e=="string"||Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"a string or an array of strings",tt=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array",vt=e=>typeof e=="string"||e instanceof URL?null:"a string or a URL";function i(e,n,s,o){let p=e[s];if(n[s+""]=!0,p===void 0)return;let w=o(p);if(w!==null)throw new Error(`${te(s)} must be ${w}`);return p}function Q(e,n,s){for(let o in e)if(!(o in n))throw new Error(`Invalid option ${s}: ${te(o)}`)}function bt(e){let n=Object.create(null),s=i(e,n,"wasmURL",vt),o=i(e,n,"wasmModule",wt),p=i(e,n,"worker",K);return Q(e,n,"in initialize() call"),{wasmURL:s,wasmModule:o,worker:p}}function nt(e){let n;if(e!==void 0){n=Object.create(null);for(let s in e){let o=e[s];if(typeof o=="string"||o===!1)n[s]=o;else throw new Error(`Expected ${te(s)} in mangle cache to map to either a string or false`)}}return n}function Fe(e,n,s,o,p){let w=i(n,s,"color",K),h=i(n,s,"logLevel",D),E=i(n,s,"logLimit",xe);w!==void 0?e.push(`--color=${w}`):o&&e.push("--color=true"),e.push(`--log-level=${h||p}`),e.push(`--log-limit=${E||0}`)}function le(e,n,s){if(typeof e!="string")throw new Error(`Expected value for ${n}${s!==void 0?" "+te(s):""} to be a string, got ${typeof e} instead`);return e}function st(e,n,s){let o=i(n,s,"legalComments",D),p=i(n,s,"sourceRoot",D),w=i(n,s,"sourcesContent",K),h=i(n,s,"target",et),E=i(n,s,"format",D),u=i(n,s,"globalName",D),W=i(n,s,"mangleProps",Ae),M=i(n,s,"reserveProps",Ae),F=i(n,s,"mangleQuoted",K),H=i(n,s,"minify",K),N=i(n,s,"minifySyntax",K),V=i(n,s,"minifyWhitespace",K),z=i(n,s,"minifyIdentifiers",K),O=i(n,s,"lineLimit",xe),X=i(n,s,"drop",ae),C=i(n,s,"dropLabels",ae),$=i(n,s,"charset",D),g=i(n,s,"treeShaking",K),f=i(n,s,"ignoreAnnotations",K),r=i(n,s,"jsx",D),l=i(n,s,"jsxFactory",D),d=i(n,s,"jsxFragment",D),b=i(n,s,"jsxImportSource",D),k=i(n,s,"jsxDev",K),c=i(n,s,"jsxSideEffects",K),m=i(n,s,"define",ue),t=i(n,s,"logOverride",ue),a=i(n,s,"supported",ue),y=i(n,s,"pure",ae),v=i(n,s,"keepNames",K),j=i(n,s,"platform",D),U=i(n,s,"tsconfigRaw",yt),Y=i(n,s,"absPaths",ae);if(o&&e.push(`--legal-comments=${o}`),p!==void 0&&e.push(`--source-root=${p}`),w!==void 0&&e.push(`--sources-content=${w}`),h&&e.push(`--target=${Ee(Array.isArray(h)?h:[h],"target")}`),E&&e.push(`--format=${E}`),u&&e.push(`--global-name=${u}`),j&&e.push(`--platform=${j}`),U&&e.push(`--tsconfig-raw=${typeof U=="string"?U:JSON.stringify(U)}`),H&&e.push("--minify"),N&&e.push("--minify-syntax"),V&&e.push("--minify-whitespace"),z&&e.push("--minify-identifiers"),O&&e.push(`--line-limit=${O}`),$&&e.push(`--charset=${$}`),g!==void 0&&e.push(`--tree-shaking=${g}`),f&&e.push("--ignore-annotations"),X)for(let _ of X)e.push(`--drop:${le(_,"drop")}`);if(C&&e.push(`--drop-labels=${Ee(C,"drop label")}`),Y&&e.push(`--abs-paths=${Ee(Y,"abs paths")}`),W&&e.push(`--mangle-props=${Ue(W)}`),M&&e.push(`--reserve-props=${Ue(M)}`),F!==void 0&&e.push(`--mangle-quoted=${F}`),r&&e.push(`--jsx=${r}`),l&&e.push(`--jsx-factory=${l}`),d&&e.push(`--jsx-fragment=${d}`),b&&e.push(`--jsx-import-source=${b}`),k&&e.push("--jsx-dev"),c&&e.push("--jsx-side-effects"),m)for(let _ in m){if(_.indexOf("=")>=0)throw new Error(`Invalid define: ${_}`);e.push(`--define:${_}=${le(m[_],"define",_)}`)}if(t)for(let _ in t){if(_.indexOf("=")>=0)throw new Error(`Invalid log override: ${_}`);e.push(`--log-override:${_}=${le(t[_],"log override",_)}`)}if(a)for(let _ in a){if(_.indexOf("=")>=0)throw new Error(`Invalid supported: ${_}`);const G=a[_];if(typeof G!="boolean")throw new Error(`Expected value for supported ${te(_)} to be a boolean, got ${typeof G} instead`);e.push(`--supported:${_}=${G}`)}if(y)for(let _ of y)e.push(`--pure:${le(_,"pure")}`);v&&e.push("--keep-names")}function xt(e,n,s,o,p){var w;let h=[],E=[],u=Object.create(null),W=null,M=null;Fe(h,n,u,s,o),st(h,n,u);let F=i(n,u,"sourcemap",Ze),H=i(n,u,"bundle",K),N=i(n,u,"splitting",K),V=i(n,u,"preserveSymlinks",K),z=i(n,u,"metafile",K),O=i(n,u,"outfile",D),X=i(n,u,"outdir",D),C=i(n,u,"outbase",D),$=i(n,u,"tsconfig",D),g=i(n,u,"resolveExtensions",ae),f=i(n,u,"nodePaths",ae),r=i(n,u,"mainFields",ae),l=i(n,u,"conditions",ae),d=i(n,u,"external",ae),b=i(n,u,"packages",D),k=i(n,u,"alias",ue),c=i(n,u,"loader",ue),m=i(n,u,"outExtension",ue),t=i(n,u,"publicPath",D),a=i(n,u,"entryNames",D),y=i(n,u,"chunkNames",D),v=i(n,u,"assetNames",D),j=i(n,u,"inject",ae),U=i(n,u,"banner",ue),Y=i(n,u,"footer",ue),_=i(n,u,"entryPoints",gt),G=i(n,u,"absWorkingDir",D),L=i(n,u,"stdin",ue),B=(w=i(n,u,"write",K))!=null?w:p,oe=i(n,u,"allowOverwrite",K),Z=i(n,u,"mangleCache",ue);if(u.plugins=!0,Q(n,u,`in ${e}() call`),F&&h.push(`--sourcemap${F===!0?"":`=${F}`}`),H&&h.push("--bundle"),oe&&h.push("--allow-overwrite"),N&&h.push("--splitting"),V&&h.push("--preserve-symlinks"),z&&h.push("--metafile"),O&&h.push(`--outfile=${O}`),X&&h.push(`--outdir=${X}`),C&&h.push(`--outbase=${C}`),$&&h.push(`--tsconfig=${$}`),b&&h.push(`--packages=${b}`),g&&h.push(`--resolve-extensions=${Ee(g,"resolve extension")}`),t&&h.push(`--public-path=${t}`),a&&h.push(`--entry-names=${a}`),y&&h.push(`--chunk-names=${y}`),v&&h.push(`--asset-names=${v}`),r&&h.push(`--main-fields=${Ee(r,"main field")}`),l&&h.push(`--conditions=${Ee(l,"condition")}`),d)for(let R of d)h.push(`--external:${le(R,"external")}`);if(k)for(let R in k){if(R.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${R}`);h.push(`--alias:${R}=${le(k[R],"alias",R)}`)}if(U)for(let R in U){if(R.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${R}`);h.push(`--banner:${R}=${le(U[R],"banner",R)}`)}if(Y)for(let R in Y){if(R.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${R}`);h.push(`--footer:${R}=${le(Y[R],"footer",R)}`)}if(j)for(let R of j)h.push(`--inject:${le(R,"inject")}`);if(c)for(let R in c){if(R.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${R}`);h.push(`--loader:${R}=${le(c[R],"loader",R)}`)}if(m)for(let R in m){if(R.indexOf("=")>=0)throw new Error(`Invalid out extension: ${R}`);h.push(`--out-extension:${R}=${le(m[R],"out extension",R)}`)}if(_)if(Array.isArray(_))for(let R=0,we=_.length;R<we;R++){let fe=_[R];if(typeof fe=="object"&&fe!==null){let he=Object.create(null),ye=i(fe,he,"in",D),de=i(fe,he,"out",D);if(Q(fe,he,"in entry point at index "+R),ye===void 0)throw new Error('Missing property "in" for entry point at index '+R);if(de===void 0)throw new Error('Missing property "out" for entry point at index '+R);E.push([de,ye])}else E.push(["",le(fe,"entry point at index "+R)])}else for(let R in _)E.push([R,le(_[R],"entry point",R)]);if(L){let R=Object.create(null),we=i(L,R,"contents",tt),fe=i(L,R,"resolveDir",D),he=i(L,R,"sourcefile",D),ye=i(L,R,"loader",D);Q(L,R,'in "stdin" object'),he&&h.push(`--sourcefile=${he}`),ye&&h.push(`--loader=${ye}`),fe&&(M=fe),typeof we=="string"?W=ce(we):we instanceof Uint8Array&&(W=we)}let ge=[];if(f)for(let R of f)R+="",ge.push(R);return{entries:E,flags:h,write:B,stdinContents:W,stdinResolveDir:M,absWorkingDir:G,nodePaths:ge,mangleCache:nt(Z)}}function kt(e,n,s,o){let p=[],w=Object.create(null);Fe(p,n,w,s,o),st(p,n,w);let h=i(n,w,"sourcemap",Ze),E=i(n,w,"sourcefile",D),u=i(n,w,"loader",D),W=i(n,w,"banner",D),M=i(n,w,"footer",D),F=i(n,w,"mangleCache",ue);return Q(n,w,`in ${e}() call`),h&&p.push(`--sourcemap=${h===!0?"external":h}`),E&&p.push(`--sourcefile=${E}`),u&&p.push(`--loader=${u}`),W&&p.push(`--banner=${W}`),M&&p.push(`--footer=${M}`),{flags:p,mangleCache:nt(F)}}function _t(e){const n={},s={didClose:!1,reason:""};let o={},p=0,w=0,h=new Uint8Array(16*1024),E=0,u=$=>{let g=E+$.length;if(g>h.length){let r=new Uint8Array(g*2);r.set(h),h=r}h.set($,E),E+=$.length;let f=0;for(;f+4<=E;){let r=He(h,f);if(f+4+r>E)break;f+=4,V(h.subarray(f,f+r)),f+=r}f>0&&(h.copyWithin(0,f,E),E-=f)},W=$=>{s.didClose=!0,$&&(s.reason=": "+($.message||$));const g="The service was stopped"+s.reason;for(let f in o)o[f](g,null);o={}},M=($,g,f)=>{if(s.didClose)return f("The service is no longer running"+s.reason,null);let r=p++;o[r]=(l,d)=>{try{f(l,d)}finally{$&&$.unref()}},$&&$.ref(),e.writeToStdin(ee({id:r,isRequest:!0,value:g}))},F=($,g)=>{if(s.didClose)throw new Error("The service is no longer running"+s.reason);e.writeToStdin(ee({id:$,isRequest:!1,value:g}))},H=($,g)=>re(null,null,function*(){try{if(g.command==="ping"){F($,{});return}if(typeof g.key=="number"){const f=n[g.key];if(!f)return;const r=f[g.command];if(r){yield r($,g);return}}throw new Error("Invalid command: "+g.command)}catch(f){const r=[ke(f,e,null,void 0,"")];try{F($,{errors:r})}catch{}}}),N=!0,V=$=>{if(N){N=!1;let f=String.fromCharCode(...$);if(f!=="0.25.11")throw new Error(`Cannot start service: Host version "0.25.11" does not match binary version ${te(f)}`);return}let g=ie($);if(g.isRequest)H(g.id,g.value);else{let f=o[g.id];delete o[g.id],g.value.error?f(g.value.error,{}):f(null,g.value)}};return{readFromStdout:u,afterClose:W,service:{buildOrContext:({callName:$,refs:g,options:f,isTTY:r,defaultWD:l,callback:d})=>{let b=0;const k=w++,c={},m={ref(){++b===1&&g&&g.ref()},unref(){--b===0&&(delete n[k],g&&g.unref())}};n[k]=c,m.ref(),Et($,k,M,F,m,e,c,f,r,l,(t,a)=>{try{d(t,a)}finally{m.unref()}})},transform:({callName:$,refs:g,input:f,options:r,isTTY:l,fs:d,callback:b})=>{const k=rt();let c=m=>{try{if(typeof f!="string"&&!(f instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:t,mangleCache:a}=kt($,r,l,Ke),y={command:"transform",flags:t,inputFS:m!==null,input:m!==null?ce(m):typeof f=="string"?ce(f):f};a&&(y.mangleCache=a),M(g,y,(v,j)=>{if(v)return b(new Error(v),null);let U=Se(j.errors,k),Y=Se(j.warnings,k),_=1,G=()=>{if(--_===0){let L={warnings:Y,code:j.code,map:j.map,mangleCache:void 0,legalComments:void 0};"legalComments"in j&&(L.legalComments=j?.legalComments),j.mangleCache&&(L.mangleCache=j?.mangleCache),b(null,L)}};if(U.length>0)return b(Pe("Transform failed",U,Y),null);j.codeFS&&(_++,d.readFile(j.code,(L,B)=>{L!==null?b(L,null):(j.code=B,G())})),j.mapFS&&(_++,d.readFile(j.map,(L,B)=>{L!==null?b(L,null):(j.map=B,G())})),G()})}catch(t){let a=[];try{Fe(a,r,{},l,Ke)}catch{}const y=ke(t,e,k,void 0,"");M(g,{command:"error",flags:a,error:y},()=>{y.detail=k.load(y.detail),b(Pe("Transform failed",[y],[]),null)})}};if((typeof f=="string"||f instanceof Uint8Array)&&f.length>1024*1024){let m=c;c=()=>d.writeFile(f,m)}c(null)},formatMessages:({callName:$,refs:g,messages:f,options:r,callback:l})=>{if(!r)throw new Error(`Missing second argument in ${$}() call`);let d={},b=i(r,d,"kind",D),k=i(r,d,"color",K),c=i(r,d,"terminalWidth",xe);if(Q(r,d,`in ${$}() call`),b===void 0)throw new Error(`Missing "kind" in ${$}() call`);if(b!=="error"&&b!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${$}() call`);let m={command:"format-msgs",messages:pe(f,"messages",null,"",c),isWarning:b==="warning"};k!==void 0&&(m.color=k),c!==void 0&&(m.terminalWidth=c),M(g,m,(t,a)=>{if(t)return l(new Error(t),null);l(null,a.messages)})},analyzeMetafile:({callName:$,refs:g,metafile:f,options:r,callback:l})=>{r===void 0&&(r={});let d={},b=i(r,d,"color",K),k=i(r,d,"verbose",K);Q(r,d,`in ${$}() call`);let c={command:"analyze-metafile",metafile:f};b!==void 0&&(c.color=b),k!==void 0&&(c.verbose=k),M(g,c,(m,t)=>{if(m)return l(new Error(m),null);l(null,t.result)})}}}}function Et(e,n,s,o,p,w,h,E,u,W,M){const F=rt(),H=e==="context",N=(O,X)=>{const C=[];try{Fe(C,E,{},u,Ye)}catch{}const $=ke(O,w,F,void 0,X);s(p,{command:"error",flags:C,error:$},()=>{$.detail=F.load($.detail),M(Pe(H?"Context failed":"Build failed",[$],[]),null)})};let V;if(typeof E=="object"){const O=E.plugins;if(O!==void 0){if(!Array.isArray(O))return N(new Error('"plugins" must be an array'),"");V=O}}if(V&&V.length>0){if(w.isSync)return N(new Error("Cannot use plugins in synchronous API calls"),"");St(n,s,o,p,w,h,E,V,F).then(O=>{if(!O.ok)return N(O.error,O.pluginName);try{z(O.requestPlugins,O.runOnEndCallbacks,O.scheduleOnDisposeCallbacks)}catch(X){N(X,"")}},O=>N(O,""));return}try{z(null,(O,X)=>X([],[]),()=>{})}catch(O){N(O,"")}function z(O,X,C){const $=w.hasFS,{entries:g,flags:f,write:r,stdinContents:l,stdinResolveDir:d,absWorkingDir:b,nodePaths:k,mangleCache:c}=xt(e,E,u,Ye,$);if(r&&!w.hasFS)throw new Error('The "write" option is unavailable in this environment');const m={command:"build",key:n,entries:g,flags:f,write:r,stdinContents:l,stdinResolveDir:d,absWorkingDir:b||W,nodePaths:k,context:H};O&&(m.plugins=O),c&&(m.mangleCache=c);const t=(v,j)=>{const U={errors:Se(v.errors,F),warnings:Se(v.warnings,F),outputFiles:void 0,metafile:void 0,mangleCache:void 0},Y=U.errors.slice(),_=U.warnings.slice();v.outputFiles&&(U.outputFiles=v.outputFiles.map(Pt)),v.metafile&&(U.metafile=JSON.parse(v.metafile)),v.mangleCache&&(U.mangleCache=v.mangleCache),v.writeToStdout!==void 0&&console.log(ve(v.writeToStdout).replace(/\n$/,"")),X(U,(G,L)=>{if(Y.length>0||G.length>0){const B=Pe("Build failed",Y.concat(G),_.concat(L));return j(B,null,G,L)}j(null,U,G,L)})};let a,y;H&&(h["on-end"]=(v,j)=>new Promise(U=>{t(j,(Y,_,G,L)=>{const B={errors:G,warnings:L};y&&y(Y,_),a=void 0,y=void 0,o(v,B),U()})})),s(p,m,(v,j)=>{if(v)return M(new Error(v),null);if(!H)return t(j,(_,G)=>(C(),M(_,G)));if(j.errors.length>0)return M(Pe("Context failed",j.errors,j.warnings),null);let U=!1;const Y={rebuild:()=>(a||(a=new Promise((_,G)=>{let L;y=(oe,Z)=>{L||(L=()=>oe?G(oe):_(Z))};const B=()=>{s(p,{command:"rebuild",key:n},(Z,ge)=>{Z?G(new Error(Z)):L?L():B()})};B()})),a),watch:(_={})=>new Promise((G,L)=>{if(!w.hasFS)throw new Error('Cannot use the "watch" API in this environment');const B={},oe=i(_,B,"delay",xe);Q(_,B,"in watch() call");const Z={command:"watch",key:n};oe&&(Z.delay=oe),s(p,Z,ge=>{ge?L(new Error(ge)):G(void 0)})}),serve:(_={})=>new Promise((G,L)=>{if(!w.hasFS)throw new Error('Cannot use the "serve" API in this environment');const B={},oe=i(_,B,"port",pt),Z=i(_,B,"host",D),ge=i(_,B,"servedir",D),R=i(_,B,"keyfile",D),we=i(_,B,"certfile",D),fe=i(_,B,"fallback",D),he=i(_,B,"cors",ue),ye=i(_,B,"onRequest",Xe);Q(_,B,"in serve() call");const de={command:"serve",key:n,onRequest:!!ye};if(oe!==void 0&&(de.port=oe),Z!==void 0&&(de.host=Z),ge!==void 0&&(de.servedir=ge),R!==void 0&&(de.keyfile=R),we!==void 0&&(de.certfile=we),fe!==void 0&&(de.fallback=fe),he){const je={},$e=i(he,je,"origin",et);Q(he,je,'on "cors" object'),Array.isArray($e)?de.corsOrigin=$e:$e!==void 0&&(de.corsOrigin=[$e])}s(p,de,(je,$e)=>{if(je)return L(new Error(je));ye&&(h["serve-request"]=(Lt,Vt)=>{ye(Vt.args),o(Lt,{})}),G($e)})}),cancel:()=>new Promise(_=>{if(U)return _();s(p,{command:"cancel",key:n},()=>{_()})}),dispose:()=>new Promise(_=>{if(U)return _();U=!0,s(p,{command:"dispose",key:n},()=>{_(),C(),p.unref()})})};p.ref(),M(null,Y)})}}var St=(e,n,s,o,p,w,h,E,u)=>re(null,null,function*(){let W=[],M=[],F={},H={},N=[],V=0,z=0,O=[],X=!1;E=[...E];for(let g of E){let f={};if(typeof g!="object")throw new Error(`Plugin at index ${z} must be an object`);const r=i(g,f,"name",D);if(typeof r!="string"||r==="")throw new Error(`Plugin at index ${z} is missing a name`);try{let l=i(g,f,"setup",Xe);if(typeof l!="function")throw new Error("Plugin is missing a setup function");Q(g,f,`on plugin ${te(r)}`);let d={name:r,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};z++;let k=l({initialOptions:h,resolve:(c,m={})=>{if(!X)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof c!="string")throw new Error("The path to resolve must be a string");let t=Object.create(null),a=i(m,t,"pluginName",D),y=i(m,t,"importer",D),v=i(m,t,"namespace",D),j=i(m,t,"resolveDir",D),U=i(m,t,"kind",D),Y=i(m,t,"pluginData",Re),_=i(m,t,"with",ue);return Q(m,t,"in resolve() call"),new Promise((G,L)=>{const B={command:"resolve",path:c,key:e,pluginName:r};if(a!=null&&(B.pluginName=a),y!=null&&(B.importer=y),v!=null&&(B.namespace=v),j!=null&&(B.resolveDir=j),U!=null)B.kind=U;else throw new Error('Must specify "kind" when calling "resolve"');Y!=null&&(B.pluginData=u.store(Y)),_!=null&&(B.with=$t(_,"with")),n(o,B,(oe,Z)=>{oe!==null?L(new Error(oe)):G({errors:Se(Z.errors,u),warnings:Se(Z.warnings,u),path:Z.path,external:Z.external,sideEffects:Z.sideEffects,namespace:Z.namespace,suffix:Z.suffix,pluginData:u.load(Z.pluginData)})})})},onStart(c){let m='This error came from the "onStart" callback registered here:',t=Ie(new Error(m),p,"onStart");W.push({name:r,callback:c,note:t}),d.onStart=!0},onEnd(c){let m='This error came from the "onEnd" callback registered here:',t=Ie(new Error(m),p,"onEnd");M.push({name:r,callback:c,note:t}),d.onEnd=!0},onResolve(c,m){let t='This error came from the "onResolve" callback registered here:',a=Ie(new Error(t),p,"onResolve"),y={},v=i(c,y,"filter",Ae),j=i(c,y,"namespace",D);if(Q(c,y,`in onResolve() call for plugin ${te(r)}`),v==null)throw new Error("onResolve() call is missing a filter");let U=V++;F[U]={name:r,callback:m,note:a},d.onResolve.push({id:U,filter:Ue(v),namespace:j||""})},onLoad(c,m){let t='This error came from the "onLoad" callback registered here:',a=Ie(new Error(t),p,"onLoad"),y={},v=i(c,y,"filter",Ae),j=i(c,y,"namespace",D);if(Q(c,y,`in onLoad() call for plugin ${te(r)}`),v==null)throw new Error("onLoad() call is missing a filter");let U=V++;H[U]={name:r,callback:m,note:a},d.onLoad.push({id:U,filter:Ue(v),namespace:j||""})},onDispose(c){N.push(c)},esbuild:p.esbuild});k&&(yield k),O.push(d)}catch(l){return{ok:!1,error:l,pluginName:r}}}w["on-start"]=(g,f)=>re(null,null,function*(){u.clear();let r={errors:[],warnings:[]};yield Promise.all(W.map(l=>re(null,[l],function*({name:d,callback:b,note:k}){try{let c=yield b();if(c!=null){if(typeof c!="object")throw new Error(`Expected onStart() callback in plugin ${te(d)} to return an object`);let m={},t=i(c,m,"errors",me),a=i(c,m,"warnings",me);Q(c,m,`from onStart() callback in plugin ${te(d)}`),t!=null&&r.errors.push(...pe(t,"errors",u,d,void 0)),a!=null&&r.warnings.push(...pe(a,"warnings",u,d,void 0))}}catch(c){r.errors.push(ke(c,p,u,k&&k(),d))}}))),s(g,r)}),w["on-resolve"]=(g,f)=>re(null,null,function*(){let r={},l="",d,b;for(let k of f.ids)try{({name:l,callback:d,note:b}=F[k]);let c=yield d({path:f.path,importer:f.importer,namespace:f.namespace,resolveDir:f.resolveDir,kind:f.kind,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onResolve() callback in plugin ${te(l)} to return an object`);let m={},t=i(c,m,"pluginName",D),a=i(c,m,"path",D),y=i(c,m,"namespace",D),v=i(c,m,"suffix",D),j=i(c,m,"external",K),U=i(c,m,"sideEffects",K),Y=i(c,m,"pluginData",Re),_=i(c,m,"errors",me),G=i(c,m,"warnings",me),L=i(c,m,"watchFiles",ae),B=i(c,m,"watchDirs",ae);Q(c,m,`from onResolve() callback in plugin ${te(l)}`),r.id=k,t!=null&&(r.pluginName=t),a!=null&&(r.path=a),y!=null&&(r.namespace=y),v!=null&&(r.suffix=v),j!=null&&(r.external=j),U!=null&&(r.sideEffects=U),Y!=null&&(r.pluginData=u.store(Y)),_!=null&&(r.errors=pe(_,"errors",u,l,void 0)),G!=null&&(r.warnings=pe(G,"warnings",u,l,void 0)),L!=null&&(r.watchFiles=Ne(L,"watchFiles")),B!=null&&(r.watchDirs=Ne(B,"watchDirs"));break}}catch(c){r={id:k,errors:[ke(c,p,u,b&&b(),l)]};break}s(g,r)}),w["on-load"]=(g,f)=>re(null,null,function*(){let r={},l="",d,b;for(let k of f.ids)try{({name:l,callback:d,note:b}=H[k]);let c=yield d({path:f.path,namespace:f.namespace,suffix:f.suffix,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onLoad() callback in plugin ${te(l)} to return an object`);let m={},t=i(c,m,"pluginName",D),a=i(c,m,"contents",tt),y=i(c,m,"resolveDir",D),v=i(c,m,"pluginData",Re),j=i(c,m,"loader",D),U=i(c,m,"errors",me),Y=i(c,m,"warnings",me),_=i(c,m,"watchFiles",ae),G=i(c,m,"watchDirs",ae);Q(c,m,`from onLoad() callback in plugin ${te(l)}`),r.id=k,t!=null&&(r.pluginName=t),a instanceof Uint8Array?r.contents=a:a!=null&&(r.contents=ce(a)),y!=null&&(r.resolveDir=y),v!=null&&(r.pluginData=u.store(v)),j!=null&&(r.loader=j),U!=null&&(r.errors=pe(U,"errors",u,l,void 0)),Y!=null&&(r.warnings=pe(Y,"warnings",u,l,void 0)),_!=null&&(r.watchFiles=Ne(_,"watchFiles")),G!=null&&(r.watchDirs=Ne(G,"watchDirs"));break}}catch(c){r={id:k,errors:[ke(c,p,u,b&&b(),l)]};break}s(g,r)});let C=(g,f)=>f([],[]);M.length>0&&(C=(g,f)=>{re(null,null,function*(){const r=[],l=[];for(const{name:d,callback:b,note:k}of M){let c,m;try{const t=yield b(g);if(t!=null){if(typeof t!="object")throw new Error(`Expected onEnd() callback in plugin ${te(d)} to return an object`);let a={},y=i(t,a,"errors",me),v=i(t,a,"warnings",me);Q(t,a,`from onEnd() callback in plugin ${te(d)}`),y!=null&&(c=pe(y,"errors",u,d,void 0)),v!=null&&(m=pe(v,"warnings",u,d,void 0))}}catch(t){c=[ke(t,p,u,k&&k(),d)]}if(c){r.push(...c);try{g.errors.push(...c)}catch{}}if(m){l.push(...m);try{g.warnings.push(...m)}catch{}}}f(r,l)})});let $=()=>{for(const g of N)setTimeout(()=>g(),0)};return X=!0,{ok:!0,requestPlugins:O,runOnEndCallbacks:C,scheduleOnDisposeCallbacks:$}});function rt(){const e=new Map;let n=0;return{clear(){e.clear()},load(s){return e.get(s)},store(s){if(s===void 0)return-1;const o=n++;return e.set(o,s),o}}}function Ie(e,n,s){let o,p=!1;return()=>{if(p)return o;p=!0;try{let w=(e.stack+"").split(`
`);w.splice(1,1);let h=it(n,w,s);if(h)return o={text:e.message,location:h},o}catch{}}}function ke(e,n,s,o,p){let w="Internal error",h=null;try{w=(e&&e.message||e)+""}catch{}try{h=it(n,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:p,text:w,location:h,notes:o?[o]:[],detail:s?s.store(e):-1}}function it(e,n,s){let o="    at ";if(e.readFileSync&&!n[0].startsWith(o)&&n[1].startsWith(o))for(let p=1;p<n.length;p++){let w=n[p];if(w.startsWith(o))for(w=w.slice(o.length);;){let h=/^(?:new |async )?\S+ \((.*)\)$/.exec(w);if(h){w=h[1];continue}if(h=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(w),h){w=h[1];continue}if(h=/^(\S+):(\d+):(\d+)$/.exec(w),h){let E;try{E=e.readFileSync(h[1],"utf8")}catch{break}let u=E.split(/\r\n|\r|\n|\u2028|\u2029/)[+h[2]-1]||"",W=+h[3]-1,M=u.slice(W,W+s.length)===s?s.length:0;return{file:h[1],namespace:"file",line:+h[2],column:ce(u.slice(0,W)).length,length:ce(u.slice(W,W+M)).length,lineText:u+`
`+n.slice(1).join(`
`),suggestion:""}}break}}return null}function Pe(e,n,s){let o=5;e+=n.length<1?"":` with ${n.length} error${n.length<2?"":"s"}:`+n.slice(0,o+1).map((w,h)=>{if(h===o)return`
...`;if(!w.location)return`
error: ${w.text}`;let{file:E,line:u,column:W}=w.location,M=w.pluginName?`[plugin: ${w.pluginName}] `:"";return`
${E}:${u}:${W}: ERROR: ${M}${w.text}`}).join("");let p=new Error(e);for(const[w,h]of[["errors",n],["warnings",s]])Object.defineProperty(p,w,{configurable:!0,enumerable:!0,get:()=>h,set:E=>Object.defineProperty(p,w,{configurable:!0,enumerable:!0,value:E})});return p}function Se(e,n){for(const s of e)s.detail=n.load(s.detail);return e}function at(e,n,s){if(e==null)return null;let o={},p=i(e,o,"file",D),w=i(e,o,"namespace",D),h=i(e,o,"line",xe),E=i(e,o,"column",xe),u=i(e,o,"length",xe),W=i(e,o,"lineText",D),M=i(e,o,"suggestion",D);if(Q(e,o,n),W){const F=W.slice(0,(E&&E>0?E:0)+(u&&u>0?u:0)+(s&&s>0?s:80));!/[\x7F-\uFFFF]/.test(F)&&!/\n/.test(W)&&(W=F)}return{file:p||"",namespace:w||"",line:h||0,column:E||0,length:u||0,lineText:W||"",suggestion:M||""}}function pe(e,n,s,o,p){let w=[],h=0;for(const E of e){let u={},W=i(E,u,"id",D),M=i(E,u,"pluginName",D),F=i(E,u,"text",D),H=i(E,u,"location",Qe),N=i(E,u,"notes",me),V=i(E,u,"detail",Re),z=`in element ${h} of "${n}"`;Q(E,u,z);let O=[];if(N)for(const X of N){let C={},$=i(X,C,"text",D),g=i(X,C,"location",Qe);Q(X,C,z),O.push({text:$||"",location:at(g,z,p)})}w.push({id:W||"",pluginName:M||o,text:F||"",location:at(H,z,p),notes:O,detail:s?s.store(V):-1}),h++}return w}function Ne(e,n){const s=[];for(const o of e){if(typeof o!="string")throw new Error(`${te(n)} must be an array of strings`);s.push(o)}return s}function $t(e,n){const s=Object.create(null);for(const o in e){const p=e[o];if(typeof p!="string")throw new Error(`key ${te(o)} in object ${te(n)} must be a string`);s[o]=p}return s}function Pt({path:e,contents:n,hash:s}){let o=null;return{path:e,contents:n,hash:s,get text(){const p=this.contents;return(o===null||p!==n)&&(n=p,o=ve(p)),o}}}function Ue(e){let n=e.source;return e.flags&&(n=`(?${e.flags})${n}`),n}var Ct="0.25.11",jt=e=>Ce().build(e),Tt=e=>Ce().context(e),Ot=(e,n)=>Ce().transform(e,n),Dt=(e,n)=>Ce().formatMessages(e,n),Rt=(e,n)=>Ce().analyzeMetafile(e,n),At=()=>{throw new Error('The "buildSync" API only works in node')},Ft=()=>{throw new Error('The "transformSync" API only works in node')},It=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Nt=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Ut=()=>(We&&We(),Promise.resolve()),_e,We,Me,Ce=()=>{if(Me)return Me;throw _e?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Wt=e=>{e=bt(e||{});let n=e.wasmURL,s=e.wasmModule,o=e.worker!==!1;if(!n&&!s)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(_e)throw new Error('Cannot call "initialize" more than once');return _e=Mt(n||"",s,o),_e.catch(()=>{_e=void 0}),_e},Mt=(e,n,s)=>re(null,null,function*(){let o,p;const w=new Promise(F=>p=F);if(s){let F=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const setInt32 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              _gotest: {
                add: (a, b) => a + b
              },
              gojs: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8)
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin) resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.25.11"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok) throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});o=new Worker(URL.createObjectURL(F))}else{let F=(N=>{var V=(C,$,g)=>new Promise((f,r)=>{var l=k=>{try{b(g.next(k))}catch(c){r(c)}},d=k=>{try{b(g.throw(k))}catch(c){r(c)}},b=k=>k.done?f(k.value):Promise.resolve(k.value).then(l,d);b((g=g.apply(C,$)).next())});let z,O={};for(let C=self;C;C=Object.getPrototypeOf(C))for(let $ of Object.getOwnPropertyNames(C))$ in O||Object.defineProperty(O,$,{get:()=>self[$]});(()=>{const C=()=>{const f=new Error("not implemented");return f.code="ENOSYS",f};if(!O.fs){let f="";O.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(r,l){f+=g.decode(l);const d=f.lastIndexOf(`
`);return d!=-1&&(console.log(f.substring(0,d)),f=f.substring(d+1)),l.length},write(r,l,d,b,k,c){if(d!==0||b!==l.length||k!==null){c(C());return}const m=this.writeSync(r,l);c(null,m)},chmod(r,l,d){d(C())},chown(r,l,d,b){b(C())},close(r,l){l(C())},fchmod(r,l,d){d(C())},fchown(r,l,d,b){b(C())},fstat(r,l){l(C())},fsync(r,l){l(null)},ftruncate(r,l,d){d(C())},lchown(r,l,d,b){b(C())},link(r,l,d){d(C())},lstat(r,l){l(C())},mkdir(r,l,d){d(C())},open(r,l,d,b){b(C())},read(r,l,d,b,k,c){c(C())},readdir(r,l){l(C())},readlink(r,l){l(C())},rename(r,l,d){d(C())},rmdir(r,l){l(C())},stat(r,l){l(C())},symlink(r,l,d){d(C())},truncate(r,l,d){d(C())},unlink(r,l){l(C())},utimes(r,l,d,b){b(C())}}}if(O.process||(O.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw C()},pid:-1,ppid:-1,umask(){throw C()},cwd(){throw C()},chdir(){throw C()}}),!O.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!O.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!O.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!O.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const $=new TextEncoder("utf-8"),g=new TextDecoder("utf-8");O.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const f=(t,a)=>{this.mem.setUint32(t+0,a,!0),this.mem.setUint32(t+4,Math.floor(a/4294967296),!0)},r=t=>{const a=this.mem.getUint32(t+0,!0),y=this.mem.getInt32(t+4,!0);return a+y*4294967296},l=t=>{const a=this.mem.getFloat64(t,!0);if(a===0)return;if(!isNaN(a))return a;const y=this.mem.getUint32(t,!0);return this._values[y]},d=(t,a)=>{if(typeof a=="number"&&a!==0){if(isNaN(a)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,a,!0);return}if(a===void 0){this.mem.setFloat64(t,0,!0);return}let v=this._ids.get(a);v===void 0&&(v=this._idPool.pop(),v===void 0&&(v=this._values.length),this._values[v]=a,this._goRefCounts[v]=0,this._ids.set(a,v)),this._goRefCounts[v]++;let j=0;switch(typeof a){case"object":a!==null&&(j=1);break;case"string":j=2;break;case"symbol":j=3;break;case"function":j=4;break}this.mem.setUint32(t+4,2146959360|j,!0),this.mem.setUint32(t,v,!0)},b=t=>{const a=r(t+0),y=r(t+8);return new Uint8Array(this._inst.exports.mem.buffer,a,y)},k=t=>{const a=r(t+0),y=r(t+8),v=new Array(y);for(let j=0;j<y;j++)v[j]=l(a+j*8);return v},c=t=>{const a=r(t+0),y=r(t+8);return g.decode(new DataView(this._inst.exports.mem.buffer,a,y))},m=Date.now()-performance.now();this.importObject={_gotest:{add:(t,a)=>t+a},gojs:{"runtime.wasmExit":t=>{t>>>=0;const a=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(a)},"runtime.wasmWrite":t=>{t>>>=0;const a=r(t+8),y=r(t+16),v=this.mem.getInt32(t+24,!0);O.fs.writeSync(a,new Uint8Array(this._inst.exports.mem.buffer,y,v))},"runtime.resetMemoryDataView":t=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,f(t+8,(m+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;const a=new Date().getTime();f(t+8,a/1e3),this.mem.setInt32(t+16,a%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;const a=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(a,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(a);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},r(t+8))),this.mem.setInt32(t+16,a,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;const a=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(a)),this._scheduledTimeouts.delete(a)},"runtime.getRandomData":t=>{t>>>=0,crypto.getRandomValues(b(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;const a=this.mem.getUint32(t+8,!0);if(this._goRefCounts[a]--,this._goRefCounts[a]===0){const y=this._values[a];this._values[a]=null,this._ids.delete(y),this._idPool.push(a)}},"syscall/js.stringVal":t=>{t>>>=0,d(t+24,c(t+8))},"syscall/js.valueGet":t=>{t>>>=0;const a=Reflect.get(l(t+8),c(t+16));t=this._inst.exports.getsp()>>>0,d(t+32,a)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(l(t+8),c(t+16),l(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(l(t+8),c(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,d(t+24,Reflect.get(l(t+8),r(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(l(t+8),r(t+16),l(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{const a=l(t+8),y=Reflect.get(a,c(t+16)),v=k(t+32),j=Reflect.apply(y,a,v);t=this._inst.exports.getsp()>>>0,d(t+56,j),this.mem.setUint8(t+64,1)}catch(a){t=this._inst.exports.getsp()>>>0,d(t+56,a),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{const a=l(t+8),y=k(t+16),v=Reflect.apply(a,void 0,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(a){t=this._inst.exports.getsp()>>>0,d(t+40,a),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{const a=l(t+8),y=k(t+16),v=Reflect.construct(a,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(a){t=this._inst.exports.getsp()>>>0,d(t+40,a),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,f(t+16,parseInt(l(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;const a=$.encode(String(l(t+8)));d(t+16,a),f(t+24,a.length)},"syscall/js.valueLoadString":t=>{t>>>=0;const a=l(t+8);b(t+16).set(a)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,l(t+8)instanceof l(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;const a=b(t+8),y=l(t+32);if(!(y instanceof Uint8Array||y instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,a.length);a.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;const a=l(t+8),y=b(t+16);if(!(a instanceof Uint8Array||a instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,a.length);a.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}run(f){return V(this,null,function*(){if(!(f instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=f,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,O,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[O,5],[this,6]]),this._idPool=[],this.exited=!1;let r=4096;const l=t=>{const a=r,y=$.encode(t+"\0");return new Uint8Array(this.mem.buffer,r,y.length).set(y),r+=y.length,r%8!==0&&(r+=8-r%8),a},d=this.argv.length,b=[];this.argv.forEach(t=>{b.push(l(t))}),b.push(0),Object.keys(this.env).sort().forEach(t=>{b.push(l(`${t}=${this.env[t]}`))}),b.push(0);const c=r;if(b.forEach(t=>{this.mem.setUint32(r,t,!0),this.mem.setUint32(r+4,0,!0),r+=8}),r>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(d,c),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(f){const r=this;return function(){const l={id:f,this:this,args:arguments};return r._pendingEvent=l,r._resume(),l.result}}}})(),z=({data:C})=>{let $=new TextDecoder,g=O.fs,f="";g.writeSync=(k,c)=>{if(k===1)N(c);else if(k===2){f+=$.decode(c);let m=f.split(`
`);m.length>1&&console.log(m.slice(0,-1).join(`
`)),f=m[m.length-1]}else throw new Error("Bad write");return c.length};let r=[],l,d=0;z=({data:k})=>(k.length>0&&(r.push(k),l&&l()),b),g.read=(k,c,m,t,a,y)=>{if(k!==0||m!==0||t!==c.length||a!==null)throw new Error("Bad read");if(r.length===0){l=()=>g.read(k,c,m,t,a,y);return}let v=r[0],j=Math.max(0,Math.min(t,v.length-d));c.set(v.subarray(d,d+j),m),d+=j,d===v.length&&(r.shift(),d=0),y(null,j)};let b=new O.Go;return b.argv=["","--service=0.25.11"],X(C,b).then(k=>{N(null),b.run(k)},k=>{N(k)}),b};function X(C,$){return V(this,null,function*(){if(C instanceof WebAssembly.Module)return WebAssembly.instantiate(C,$.importObject);const g=yield fetch(C);if(!g.ok)throw new Error(`Failed to download ${JSON.stringify(C)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(g.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(g,$.importObject)).instance;const f=yield g.arrayBuffer();return(yield WebAssembly.instantiate(f,$.importObject)).instance})}return C=>z(C)})(N=>o.onmessage({data:N})),H;o={onmessage:null,postMessage:N=>setTimeout(()=>{try{H=F({data:N})}catch(V){p(V)}}),terminate(){if(H)for(let N of H._scheduledTimeouts.values())clearTimeout(N)}}}let h,E;const u=new Promise((F,H)=>{h=F,E=H});o.onmessage=({data:F})=>{o.onmessage=({data:H})=>W(H),F?E(F):h()},o.postMessage(n||new URL(e,location.href).toString());let{readFromStdout:W,service:M}=_t({writeToStdin(F){o.postMessage(F)},isSync:!1,hasFS:!1,esbuild:se});yield u,We=()=>{o.terminate(),_e=void 0,We=void 0,Me=void 0},Me={build:F=>new Promise((H,N)=>{w.then(N),M.buildOrContext({callName:"build",refs:null,options:F,isTTY:!1,defaultWD:"/",callback:(V,z)=>V?N(V):H(z)})}),context:F=>new Promise((H,N)=>{w.then(N),M.buildOrContext({callName:"context",refs:null,options:F,isTTY:!1,defaultWD:"/",callback:(V,z)=>V?N(V):H(z)})}),transform:(F,H)=>new Promise((N,V)=>{w.then(V),M.transform({callName:"transform",refs:null,input:F,options:H||{},isTTY:!1,fs:{readFile(z,O){O(new Error("Internal error"),null)},writeFile(z,O){O(null)}},callback:(z,O)=>z?V(z):N(O)})}),formatMessages:(F,H)=>new Promise((N,V)=>{w.then(V),M.formatMessages({callName:"formatMessages",refs:null,messages:F,options:H,callback:(z,O)=>z?V(z):N(O)})}),analyzeMetafile:(F,H)=>new Promise((N,V)=>{w.then(V),M.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof F=="string"?F:JSON.stringify(F),options:H,callback:(z,O)=>z?V(z):N(O)})})}}),Bt=se})(J)})(ze)),ze.exports}var ft=Yt();const Kt="/assets/esbuild-TYJnwsB5.wasm",Xt="/",Qt="/",Zt="$PWA_NAME",en="standalone",tn="/",nn="$PWA_SHORT_NAME",sn="$PWA_DESCRIPTION",rn="$PWA_VERSION",an="any",ln=[],on=!1,cn=["window-controls-overlay"],un={client_mode:"focus-existing"},fn=[{src:"assets/icons/512x512.png",sizes:"512x512",type:"image/png"},{src:"assets/icons/192x192.png",sizes:"192x192",type:"image/png"},{src:"assets/icons/48x48.png",sizes:"48x48",type:"image/png"},{src:"assets/icons/24x24.png",sizes:"24x24",type:"image/png"}],dn=[],hn=["Cross Platform","fast","interactive"],mn=["mapping","geospatial","interaction"],pn=[],gn=[],wn={id:Xt,scope:Qt,name:Zt,display:en,start_url:tn,short_name:nn,description:sn,version:rn,orientation:an,related_applications:ln,prefer_related_applications:on,display_override:cn,launch_handler:un,icons:fn,screenshots:dn,features:hn,categories:mn,shortcuts:pn,widgets:gn},yn=J=>`
<!doctype html>
<html lang="en" translate="no">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="google" content="notranslate">
    
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="geospace-app" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    
    <link rel="icon" href="/assets/icons/icon_24.png" type="image/png" />
    <link rel="manifest" href="manifest.json" />
    
    <title>${J.title}</title>
    <link rel="stylesheet" href="app.css" />
    <style>
        html, body, .map-container {
            height: 100dvh;
            width: 100dvw;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        
        .no-touch {
            touch-action: none;
        }
    </style>
</head>
<body>
<div class="map-container"></div>
<script type="module">
    import {renderMap} from "./app.js"
    renderMap("div.map-container")
<\/script>
<script>
    if ('serviceWorker' in navigator) {
      window.onload = () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  if (confirm('A new version of the app is available. Reload to update?')) {
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                  }
                }
              });
            }
          });
          
          // Listen for service worker messages
          navigator.serviceWorker.addEventListener('message', event => {
            if (event.data && event.data.type === 'RELOAD') {
              window.location.reload();
            }
          });
        });
      }
    }
  <\/script>
</body>
</html>
`,vn=J=>{const P=[],x=[];return[...J.gsMap.controls||[],...J.gsMap.overlays||[]].forEach((T,A)=>{const I=T.src,q=`map_mod${A}`;P.push(`import ${q} from '${I}'`),x.push(`"${I}": ${q}`)}),`
import {gsLib} from "${J.libPath}"
${P.join(`
`)}
    
export const renderMap = (mapContainerSelector) => {
    const modules = {${x.join(",")}}
    return gsLib({
        containerSelector: mapContainerSelector,
        gsMap: ${JSON.stringify(J.gsMap)},
        mapOptions: {
            controls: {zoom: false, attribution: false}
        },
        env: ${JSON.stringify(J.env||{})},
        modules: modules
    })
}
`};function dt(J,P){if(J.startsWith("/"))return J.slice(1);const x=P.split("/").filter(A=>A),S=J.split("/").filter(A=>A);if(J.startsWith("./")||J.startsWith("../")||!J.startsWith("/")){const A=x.slice(0,-1);x.length=0,x.push(...A)}for(const A of S)A!=="."&&(A===".."?x.length>0&&x.pop():x.push(A));return x.join("/")}let bn={name:"workspace",setup(J){J.onResolve({filter:/.*/},P=>{if(!/^(?!https?:\/\/).+/.test(P.path))return;let x=P.path;if(x.startsWith("/")&&(x=x.slice(1)),P.importer&&P.importer!==""){let S=P.importer;S.startsWith("virtual-workspace:")&&(S=S.slice(18));const T=P.path.startsWith("./")||P.path.startsWith("../"),A=x.includes("/"),I=S.startsWith("build/");T?x=dt(P.path,S):!A&&!I&&(x=dt(x,S))}return{path:x,namespace:"virtual-workspace"}}),J.onLoad({filter:/.*/},async P=>{if(!/^(?!https?:\/\/).+/.test(P.path))return;const x=P.path,S=await Je.getWorkspace();let T=await S.getResource(x);if(T||(await S.listChildren(!0),T=await S.getResource(x)),!T)throw new Error(`Module not found: ${x}`);return{contents:await T.getContents()}})}};class xn{constructor(){this.initialized=!1,this.workspaceCache=null}async getWorkspace(){return this.workspaceCache||(this.workspaceCache=await Je.getWorkspace()),this.workspaceCache}async init(){this.initialized||(await ft.initialize({wasmURL:Kt}),this.initialized=!0)}async downloadFile(P,x){const S=await this.getWorkspace(),T=""+P,I=await(await fetch(T)).blob();await(await S.getResource(x,{create:!0})).saveContents(I)}async deleteDirectoryIfExists(P){const S=await(await this.getWorkspace()).getResource(P);S&&await S.delete()}async downloadIcons(P,x,S){for(const T of P){const A=T.split("/").pop()||T;x(++S.value,`Downloading icon: ${A}...`),await this.downloadFile(T,`dist/assets/icons/${A}`)}}async cleanBuildDirectories(P,x){P(++x.value,"Cleaning build directories..."),await Promise.all([this.deleteDirectoryIfExists("build"),this.deleteDirectoryIfExists("dist")])}async downloadCoreFiles(P,x,S){const T=[{path:"/lib/gs-lib.js",dest:P,message:"Downloading library files..."},{path:"/lib/gs-lib.css",dest:"dist/app.css",message:"Downloading stylesheet..."},{path:"/pwa/staticwebapp.config.json",dest:"dist/staticwebapp.config.json",message:"Downloading configuration files..."},{path:"/pwa/sw.js",dest:"dist/sw.js",message:"Downloading service worker..."}];for(const A of T)x(++S.value,A.message),await this.downloadFile(A.path,A.dest)}async processServiceWorker(P,x,S){x(++S.value,"Processing service worker...");const I=await(await(await this.getWorkspace()).getResource("dist/sw.js")).getContents();await this.createFile("dist/sw.js",q=>I.replace(/\$PWA_VERSION/g,q.version),P)}async createManifest(P,x,S){x(++S.value,"Creating manifest file..."),await this.createFile("dist/manifest.json",T=>{const A=JSON.parse(JSON.stringify(wn));return A.name=T.title,A.short_name=T.title,A.description=T.title,A.version=T.version,JSON.stringify(A)},P)}async copyWorkspaceAssets(P,x){P(++x.value,"Copying workspace assets...");const T=await(await this.getWorkspace()).getResource("assets");T&&await T.copyTo("dist/assets")}async generateBuildFiles(P,x,S,T,A){T(++A.value,"Generating application code..."),await this.createFile(P,vn,S),T(++A.value,"Generating HTML file..."),await this.createFile(x,yn,S)}async bundleCode(P,x,S,T){S(++T.value,"Bundling and minifying code...");const I=await(await this.getWorkspace()).getResource(x,{create:!0}),q=await ft.build({entryPoints:[P],bundle:!0,outfile:"app.js",format:"esm",minify:!0,plugins:[bn]});S(++T.value,"Saving bundled output..."),await I.saveContents(q.outputFiles[0].contents)}async cleanupBuild(P,x,S){(P===void 0||P)&&(x(++S.value,"Cleaning up temporary files..."),await this.deleteDirectoryIfExists("build"))}async build(P,x=void 0,S){const T=(ce,ve)=>{S&&(S.currentStep=ce,S.message=ve)};S&&(S.totalSteps=23);const I={value:0};T(++I.value,"Initializing build system..."),await this.init();const q="build/gs-lib.js",ne="build/app.js",re="dist/index.html",se="dist/app.js";await this.cleanBuildDirectories(T,I),await this.downloadCoreFiles(q,T,I);const ee={...P,libPath:q};await this.processServiceWorker(ee,T,I),await this.createManifest(ee,T,I);const ie=["/pwa/assets/icons/24x24.png","/pwa/assets/icons/48x48.png","/pwa/assets/icons/192x192.png","/pwa/assets/icons/512x512.png","/pwa/assets/icons/icon_24.png","/pwa/assets/icons/icon_48.png","/pwa/assets/icons/icon_192.png","/pwa/assets/icons/icon_512.png"];await this.downloadIcons(ie,T,I),await this.copyWorkspaceAssets(T,I),await this.generateBuildFiles(ne,re,ee,T,I),await this.bundleCode(ne,se,T,I),await this.cleanupBuild(x,T,I),T(++I.value,"Finalizing build..."),(await this.getWorkspace()).touch(),S&&(S.message="Build completed successfully!")}async createFile(P,x,S){await(await(await this.getWorkspace()).getResource(P,{create:!0})).saveContents(x(S))}async buildMapFile(P,x){const S=JSON.parse(await P.getContents()),T=await zt(x||".env");T.BUILD_TIME=new Date,ht.runAsync("Building map",async A=>{await qe.build({title:P.getName(),gsMap:S,env:T,version:T.VERSION||"0.0.0"},void 0,A)}).then(()=>{mt("🚀 Map files copied to 'dist' folder in your workspace!")}).catch(A=>{be(`💥 Map could not be built: ${A}`)})}}const qe=new xn;Gt.put("buildService",qe);const Te=".geospace",kn=".env",_n=["node_modules",".git","dist","build",".next",".cache",".vscode",".idea","coverage",".nyc_output",".parcel-cache",".turbo",".yarn",".pnp",".svelte-kit",".nuxt",".output","target","out",".temp",".tmp"];function En(J){const P=J.toLowerCase();return _n.some(x=>P===x.toLowerCase())}async function Ge(J,P,x,S={value:0}){const T=[],A=await J.listChildren(!0);for(const I of A){S.value++;const q=I.getWorkspacePath();if(x&&(x.message=`Scanning: ${q}`,x.currentStep=S.value),I instanceof Oe&&I.getName().toLowerCase().endsWith(P))T.push(q);else if(I instanceof Ht&&!En(I.getName())){const ne=await Ge(I,P,x,S);T.push(...ne)}}return T.sort()}function Sn(){let J=document.getElementById("global-dialog-container");return J||(J=document.createElement("div"),J.id="global-dialog-container",document.body.appendChild(J)),J}async function $n(J,P,x,S){return new Promise(T=>{const A=Sn();let I=x||"",q=S||"";const ne=()=>{lt(Be``,A)},re=()=>{ne(),T({geospaceFile:I||null,envFile:q||null})},se=()=>{ne(),T({geospaceFile:null,envFile:null})},ee=Be`
            <wa-dialog label="Select Files" open @wa-request-close=${se}>
                <style>
                    .dialog-content {
                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;
                        padding: 1rem;
                        min-width: 400px;
                    }
                    
                    .dialog-field {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    
                    .dialog-field label {
                        font-weight: 500;
                        color: var(--wa-color-neutral-700);
                    }
                    
                    .dialog-actions {
                        display: flex;
                        gap: 0.5rem;
                        justify-content: flex-end;
                        margin-top: 0.5rem;
                    }
                </style>
                
                <div class="dialog-content">
                    <div class="dialog-field">
                        <label>Geospace File:</label>
                        <wa-select 
                            value="${I}"
                            @change=${ie=>{I=ie.target.value}}>
                            <wa-option value="">None</wa-option>
                            ${J.map(ie=>Be`
                                <wa-option value="${ie}">${ie}</wa-option>
                            `)}
                        </wa-select>
                    </div>
                    
                    <div class="dialog-field">
                        <label>Environment File:</label>
                        <wa-select 
                            value="${q}"
                            @change=${ie=>{q=ie.target.value}}>
                            <wa-option value="">None (use .env)</wa-option>
                            ${P.map(ie=>Be`
                                <wa-option value="${ie}">${ie}</wa-option>
                            `)}
                        </wa-select>
                    </div>
                    
                    <div class="dialog-actions">
                        <wa-button variant="default" @click=${se}>
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click=${re}>
                            OK
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `;lt(ee,A)})}const jn=({commandRegistry:J})=>{J.registerAll({command:{id:"build_map",name:"Build map",description:"Builds a publishable map from a .geospace file",parameters:[{name:"file",description:"Path to the .geospace file relative to workspace root. If not provided, uses the active map editor or selected file.",required:!1},{name:"env",description:"Path to the environment file relative to workspace root (e.g., 'dev.env', 'prod.env'). Defaults to '.env' if not specified.",required:!1},{name:"ask",description:"If true, prompts for missing files (map file or env file) when not provided.",required:!1}]},handler:{execute:async P=>{let x=P.params?.env,S=P.params?.file;const T=P.params?.ask===!0||P.params?.ask==="true",A=await Je.getWorkspace();if(!A){be("No workspace available");return}let I;if(S){const q=await A.getResource(S);if(!q||!(q instanceof Oe)){be(`File not found: ${S}`);return}if(!q.getName().toLowerCase().endsWith(Te)){be(`File is not a .geospace file: ${S}`);return}I=q}else{const q=ot.get();if(q&&q.input)q.isDirty()&&(await q.save(),mt("Map saved automatically to run build.")),I=q.input.data;else{const ne=ct.get();ne instanceof Oe&&ne.getName().toLowerCase().endsWith(Te)&&(I=ne)}}if(T&&(!I||!x)){let q=[],ne=[];await ht.runAsync("Collecting files",async ee=>{ee.message="Scanning workspace for .geospace files...",q=await Ge(A,Te,ee,{value:0}),ee.message="Scanning workspace for .env files...",ee.currentStep=0,ne=await Ge(A,kn,ee,{value:0}),ee.message=`Found ${q.length} .geospace files and ${ne.length} .env files`});const re=I?.getWorkspacePath(),se=await $n(q,ne,re,x||".env");if(se.geospaceFile===null&&se.envFile===null)return;if(se.geospaceFile&&!I){S=se.geospaceFile;const ee=await A.getResource(S);if(!ee||!(ee instanceof Oe)){be(`File not found: ${S}`);return}if(!ee.getName().toLowerCase().endsWith(Te)){be(`File is not a .geospace file: ${S}`);return}I=ee}se.envFile!==null&&(x=se.envFile||".env")}else if(!I){be("No map editor active, no .geospace file selected, and no file path provided");return}if(!I){be("No map file available");return}return qe.buildMapFile(I,x)}},contribution:{target:"toolbar:map-editor",icon:"hammer",label:"Build map",disabled:()=>!(ot.get()instanceof Jt)}}),qt.registerContribution("contextmenu:filebrowser",{command:"build_map",icon:"hammer",label:"Build map",params:{ask:!0},disabled:()=>{const P=ct.get();return P instanceof Oe?!P.getName().toLowerCase().endsWith(Te):!0}})};export{jn as default};
