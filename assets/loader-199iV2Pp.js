import{o as e,t}from"./chunk-CYidjpOJ.js";import{m as n,n as r,t as i,u as a}from"./fs-access-D-fDaJ8V-4fi1R5VX.js";import{B as o,U as s}from"./repeat-jF3QiNU_.js";import{F as c,M as l,N as u,R as d,w as f,z as p}from"./dist-Bs3vRgSi.js";import{t as m}from"./preload-helper-Dd-HcVz_.js";import{u as h}from"./src-Der9vNwe.js";import"./lit-CjwmRm-7.js";import{s as g}from"./utils-YugBxwpM.js";import{t as _}from"./gs-map-editor-BPogudwq.js";import"./geo-BE8bRSfB.js";var v=e(t(((e,t)=>{(e=>{var t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,a=(e,n)=>{for(var r in n)t(e,r,{get:n[r],enumerable:!0})},o=(e,a,o,s)=>{if(a&&typeof a==`object`||typeof a==`function`)for(let c of r(a))!i.call(e,c)&&c!==o&&t(e,c,{get:()=>a[c],enumerable:!(s=n(a,c))||s.enumerable});return e},s=e=>o(t({},`__esModule`,{value:!0}),e),c=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())}),l={};a(l,{analyzeMetafile:()=>_e,analyzeMetafileSync:()=>xe,build:()=>pe,buildSync:()=>ve,context:()=>me,default:()=>De,formatMessages:()=>ge,formatMessagesSync:()=>be,initialize:()=>Te,stop:()=>Se,transform:()=>he,transformSync:()=>ye,version:()=>fe}),e.exports=s(l);function u(e){let t=e=>{if(e===null)n.write8(0);else if(typeof e==`boolean`)n.write8(1),n.write8(+e);else if(typeof e==`number`)n.write8(2),n.write32(e|0);else if(typeof e==`string`)n.write8(3),n.write(p(e));else if(e instanceof Uint8Array)n.write8(4),n.write(e);else if(e instanceof Array){n.write8(5),n.write32(e.length);for(let n of e)t(n)}else{let r=Object.keys(e);n.write8(6),n.write32(r.length);for(let i of r)n.write(p(i)),t(e[i])}},n=new f;return n.write32(0),n.write32(e.id<<1|!e.isRequest),t(e.value),_(n.buf,n.len-4,0),n.buf.subarray(0,n.len)}function d(e){let t=()=>{switch(n.read8()){case 0:return null;case 1:return!!n.read8();case 2:return n.read32();case 3:return m(n.read());case 4:return n.read();case 5:{let e=n.read32(),r=[];for(let n=0;n<e;n++)r.push(t());return r}case 6:{let e=n.read32(),r={};for(let i=0;i<e;i++)r[m(n.read())]=t();return r}default:throw Error(`Invalid packet`)}},n=new f(e),r=n.read32(),i=(r&1)==0;r>>>=1;let a=t();if(n.ptr!==e.length)throw Error(`Invalid packet`);return{id:r,isRequest:i,value:a}}var f=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);_(this.buf,e,t)}write(e){let t=this._write(4+e.length);_(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw Error(`Invalid packet`);return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return g(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),n=this._read(t.length);return t.set(this.buf.subarray(n,n+e)),t}},p,m,h;if(typeof TextEncoder<`u`&&typeof TextDecoder<`u`){let e=new TextEncoder,t=new TextDecoder;p=t=>e.encode(t),m=e=>t.decode(e),h=`new TextEncoder().encode("")`}else if(typeof Buffer<`u`)p=e=>Buffer.from(e),m=e=>{let{buffer:t,byteOffset:n,byteLength:r}=e;return Buffer.from(t,n,r).toString()},h=`Buffer.from("")`;else throw Error(`No UTF-8 codec found`);if(!(p(``)instanceof Uint8Array))throw Error(`Invariant violation: "${h} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function g(e,t){return e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24}function _(e,t,n){e[n++]=t,e[n++]=t>>8,e[n++]=t>>16,e[n++]=t>>24}var v=JSON.stringify,y=`warning`,b=`silent`;function x(e,t){let n=[];for(let r of e){if(H(r,t),r.indexOf(`,`)>=0)throw Error(`Invalid ${t}: ${r}`);n.push(r)}return n.join(`,`)}var S=()=>null,C=e=>typeof e==`boolean`?null:`a boolean`,w=e=>typeof e==`string`?null:`a string`,T=e=>e instanceof RegExp?null:`a RegExp object`,E=e=>typeof e==`number`&&e===(e|0)?null:`an integer`,D=e=>typeof e==`number`&&e===(e|0)&&e>=0&&e<=65535?null:`a valid port number`,O=e=>typeof e==`function`?null:`a function`,k=e=>Array.isArray(e)?null:`an array`,A=e=>Array.isArray(e)&&e.every(e=>typeof e==`string`)?null:`an array of strings`,j=e=>typeof e==`object`&&e&&!Array.isArray(e)?null:`an object`,M=e=>typeof e==`object`&&e?null:`an array or an object`,N=e=>e instanceof WebAssembly.Module?null:`a WebAssembly.Module`,P=e=>typeof e==`object`&&!Array.isArray(e)?null:`an object or null`,F=e=>typeof e==`string`||typeof e==`boolean`?null:`a string or a boolean`,ee=e=>typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)?null:`a string or an object`,te=e=>typeof e==`string`||Array.isArray(e)&&e.every(e=>typeof e==`string`)?null:`a string or an array of strings`,I=e=>typeof e==`string`||e instanceof Uint8Array?null:`a string or a Uint8Array`,L=e=>typeof e==`string`||e instanceof URL?null:`a string or a URL`;function R(e,t,n,r){let i=e[n];if(t[n+``]=!0,i===void 0)return;let a=r(i);if(a!==null)throw Error(`${v(n)} must be ${a}`);return i}function z(e,t,n){for(let r in e)if(!(r in t))throw Error(`Invalid option ${n}: ${v(r)}`)}function B(e){let t=Object.create(null),n=R(e,t,`wasmURL`,L),r=R(e,t,`wasmModule`,N),i=R(e,t,`worker`,C);return z(e,t,`in initialize() call`),{wasmURL:n,wasmModule:r,worker:i}}function ne(e){let t;if(e!==void 0){t=Object.create(null);for(let n in e){let r=e[n];if(typeof r==`string`||r===!1)t[n]=r;else throw Error(`Expected ${v(n)} in mangle cache to map to either a string or false`)}}return t}function V(e,t,n,r,i){let a=R(t,n,`color`,C),o=R(t,n,`logLevel`,w),s=R(t,n,`logLimit`,E);a===void 0?r&&e.push(`--color=true`):e.push(`--color=${a}`),e.push(`--log-level=${o||i}`),e.push(`--log-limit=${s||0}`)}function H(e,t,n){if(typeof e!=`string`)throw Error(`Expected value for ${t}${n===void 0?``:` `+v(n)} to be a string, got ${typeof e} instead`);return e}function U(e,t,n){let r=R(t,n,`legalComments`,w),i=R(t,n,`sourceRoot`,w),a=R(t,n,`sourcesContent`,C),o=R(t,n,`target`,te),s=R(t,n,`format`,w),c=R(t,n,`globalName`,w),l=R(t,n,`mangleProps`,T),u=R(t,n,`reserveProps`,T),d=R(t,n,`mangleQuoted`,C),f=R(t,n,`minify`,C),p=R(t,n,`minifySyntax`,C),m=R(t,n,`minifyWhitespace`,C),h=R(t,n,`minifyIdentifiers`,C),g=R(t,n,`lineLimit`,E),_=R(t,n,`drop`,A),y=R(t,n,`dropLabels`,A),b=R(t,n,`charset`,w),S=R(t,n,`treeShaking`,C),D=R(t,n,`ignoreAnnotations`,C),O=R(t,n,`jsx`,w),k=R(t,n,`jsxFactory`,w),M=R(t,n,`jsxFragment`,w),N=R(t,n,`jsxImportSource`,w),P=R(t,n,`jsxDev`,C),F=R(t,n,`jsxSideEffects`,C),I=R(t,n,`define`,j),L=R(t,n,`logOverride`,j),z=R(t,n,`supported`,j),B=R(t,n,`pure`,A),ne=R(t,n,`keepNames`,C),V=R(t,n,`platform`,w),U=R(t,n,`tsconfigRaw`,ee),W=R(t,n,`absPaths`,A);if(r&&e.push(`--legal-comments=${r}`),i!==void 0&&e.push(`--source-root=${i}`),a!==void 0&&e.push(`--sources-content=${a}`),o&&e.push(`--target=${x(Array.isArray(o)?o:[o],`target`)}`),s&&e.push(`--format=${s}`),c&&e.push(`--global-name=${c}`),V&&e.push(`--platform=${V}`),U&&e.push(`--tsconfig-raw=${typeof U==`string`?U:JSON.stringify(U)}`),f&&e.push(`--minify`),p&&e.push(`--minify-syntax`),m&&e.push(`--minify-whitespace`),h&&e.push(`--minify-identifiers`),g&&e.push(`--line-limit=${g}`),b&&e.push(`--charset=${b}`),S!==void 0&&e.push(`--tree-shaking=${S}`),D&&e.push(`--ignore-annotations`),_)for(let t of _)e.push(`--drop:${H(t,`drop`)}`);if(y&&e.push(`--drop-labels=${x(y,`drop label`)}`),W&&e.push(`--abs-paths=${x(W,`abs paths`)}`),l&&e.push(`--mangle-props=${de(l)}`),u&&e.push(`--reserve-props=${de(u)}`),d!==void 0&&e.push(`--mangle-quoted=${d}`),O&&e.push(`--jsx=${O}`),k&&e.push(`--jsx-factory=${k}`),M&&e.push(`--jsx-fragment=${M}`),N&&e.push(`--jsx-import-source=${N}`),P&&e.push(`--jsx-dev`),F&&e.push(`--jsx-side-effects`),I)for(let t in I){if(t.indexOf(`=`)>=0)throw Error(`Invalid define: ${t}`);e.push(`--define:${t}=${H(I[t],`define`,t)}`)}if(L)for(let t in L){if(t.indexOf(`=`)>=0)throw Error(`Invalid log override: ${t}`);e.push(`--log-override:${t}=${H(L[t],`log override`,t)}`)}if(z)for(let t in z){if(t.indexOf(`=`)>=0)throw Error(`Invalid supported: ${t}`);let n=z[t];if(typeof n!=`boolean`)throw Error(`Expected value for supported ${v(t)} to be a boolean, got ${typeof n} instead`);e.push(`--supported:${t}=${n}`)}if(B)for(let t of B)e.push(`--pure:${H(t,`pure`)}`);ne&&e.push(`--keep-names`)}function W(e,t,n,r,i){let a=[],o=[],s=Object.create(null),c=null,l=null;V(a,t,s,n,r),U(a,t,s);let u=R(t,s,`sourcemap`,F),d=R(t,s,`bundle`,C),f=R(t,s,`splitting`,C),m=R(t,s,`preserveSymlinks`,C),h=R(t,s,`metafile`,C),g=R(t,s,`outfile`,w),_=R(t,s,`outdir`,w),v=R(t,s,`outbase`,w),y=R(t,s,`tsconfig`,w),b=R(t,s,`resolveExtensions`,A),S=R(t,s,`nodePaths`,A),T=R(t,s,`mainFields`,A),E=R(t,s,`conditions`,A),D=R(t,s,`external`,A),O=R(t,s,`packages`,w),k=R(t,s,`alias`,j),N=R(t,s,`loader`,j),P=R(t,s,`outExtension`,j),ee=R(t,s,`publicPath`,w),te=R(t,s,`entryNames`,w),L=R(t,s,`chunkNames`,w),B=R(t,s,`assetNames`,w),W=R(t,s,`inject`,A),re=R(t,s,`banner`,j),ie=R(t,s,`footer`,j),G=R(t,s,`entryPoints`,M),ae=R(t,s,`absWorkingDir`,w),K=R(t,s,`stdin`,j),q=R(t,s,`write`,C)??i,J=R(t,s,`allowOverwrite`,C),oe=R(t,s,`mangleCache`,j);if(s.plugins=!0,z(t,s,`in ${e}() call`),u&&a.push(`--sourcemap${u===!0?``:`=${u}`}`),d&&a.push(`--bundle`),J&&a.push(`--allow-overwrite`),f&&a.push(`--splitting`),m&&a.push(`--preserve-symlinks`),h&&a.push(`--metafile`),g&&a.push(`--outfile=${g}`),_&&a.push(`--outdir=${_}`),v&&a.push(`--outbase=${v}`),y&&a.push(`--tsconfig=${y}`),O&&a.push(`--packages=${O}`),b&&a.push(`--resolve-extensions=${x(b,`resolve extension`)}`),ee&&a.push(`--public-path=${ee}`),te&&a.push(`--entry-names=${te}`),L&&a.push(`--chunk-names=${L}`),B&&a.push(`--asset-names=${B}`),T&&a.push(`--main-fields=${x(T,`main field`)}`),E&&a.push(`--conditions=${x(E,`condition`)}`),D)for(let e of D)a.push(`--external:${H(e,`external`)}`);if(k)for(let e in k){if(e.indexOf(`=`)>=0)throw Error(`Invalid package name in alias: ${e}`);a.push(`--alias:${e}=${H(k[e],`alias`,e)}`)}if(re)for(let e in re){if(e.indexOf(`=`)>=0)throw Error(`Invalid banner file type: ${e}`);a.push(`--banner:${e}=${H(re[e],`banner`,e)}`)}if(ie)for(let e in ie){if(e.indexOf(`=`)>=0)throw Error(`Invalid footer file type: ${e}`);a.push(`--footer:${e}=${H(ie[e],`footer`,e)}`)}if(W)for(let e of W)a.push(`--inject:${H(e,`inject`)}`);if(N)for(let e in N){if(e.indexOf(`=`)>=0)throw Error(`Invalid loader extension: ${e}`);a.push(`--loader:${e}=${H(N[e],`loader`,e)}`)}if(P)for(let e in P){if(e.indexOf(`=`)>=0)throw Error(`Invalid out extension: ${e}`);a.push(`--out-extension:${e}=${H(P[e],`out extension`,e)}`)}if(G)if(Array.isArray(G))for(let e=0,t=G.length;e<t;e++){let t=G[e];if(typeof t==`object`&&t){let n=Object.create(null),r=R(t,n,`in`,w),i=R(t,n,`out`,w);if(z(t,n,`in entry point at index `+e),r===void 0)throw Error(`Missing property "in" for entry point at index `+e);if(i===void 0)throw Error(`Missing property "out" for entry point at index `+e);o.push([i,r])}else o.push([``,H(t,`entry point at index `+e)])}else for(let e in G)o.push([e,H(G[e],`entry point`,e)]);if(K){let e=Object.create(null),t=R(K,e,`contents`,I),n=R(K,e,`resolveDir`,w),r=R(K,e,`sourcefile`,w),i=R(K,e,`loader`,w);z(K,e,`in "stdin" object`),r&&a.push(`--sourcefile=${r}`),i&&a.push(`--loader=${i}`),n&&(l=n),typeof t==`string`?c=p(t):t instanceof Uint8Array&&(c=t)}let Y=[];if(S)for(let e of S)e+=``,Y.push(e);return{entries:o,flags:a,write:q,stdinContents:c,stdinResolveDir:l,absWorkingDir:ae,nodePaths:Y,mangleCache:ne(oe)}}function re(e,t,n,r){let i=[],a=Object.create(null);V(i,t,a,n,r),U(i,t,a);let o=R(t,a,`sourcemap`,F),s=R(t,a,`sourcefile`,w),c=R(t,a,`loader`,w),l=R(t,a,`banner`,w),u=R(t,a,`footer`,w),d=R(t,a,`mangleCache`,j);return z(t,a,`in ${e}() call`),o&&i.push(`--sourcemap=${o===!0?`external`:o}`),s&&i.push(`--sourcefile=${s}`),c&&i.push(`--loader=${c}`),l&&i.push(`--banner=${l}`),u&&i.push(`--footer=${u}`),{flags:i,mangleCache:ne(d)}}function ie(e){let t={},n={didClose:!1,reason:``},r={},i=0,a=0,o=new Uint8Array(16*1024),s=0,l=e=>{let t=s+e.length;if(t>o.length){let e=new Uint8Array(t*2);e.set(o),o=e}o.set(e,s),s+=e.length;let n=0;for(;n+4<=s;){let e=g(o,n);if(n+4+e>s)break;n+=4,x(o.subarray(n,n+e)),n+=e}n>0&&(o.copyWithin(0,n,s),s-=n)},f=e=>{n.didClose=!0,e&&(n.reason=`: `+(e.message||e));let t=`The service was stopped`+n.reason;for(let e in r)r[e](t,null);r={}},m=(t,a,o)=>{if(n.didClose)return o(`The service is no longer running`+n.reason,null);let s=i++;r[s]=(e,n)=>{try{o(e,n)}finally{t&&t.unref()}},t&&t.ref(),e.writeToStdin(u({id:s,isRequest:!0,value:a}))},h=(t,r)=>{if(n.didClose)throw Error(`The service is no longer running`+n.reason);e.writeToStdin(u({id:t,isRequest:!1,value:r}))},_=(n,r)=>c(null,null,function*(){try{if(r.command===`ping`){h(n,{});return}if(typeof r.key==`number`){let e=t[r.key];if(!e)return;let i=e[r.command];if(i){yield i(n,r);return}}throw Error(`Invalid command: `+r.command)}catch(t){let r=[J(t,e,null,void 0,``)];try{h(n,{errors:r})}catch{}}}),y=!0,x=e=>{if(y){y=!1;let t=String.fromCharCode(...e);if(t!==`0.25.12`)throw Error(`Cannot start service: Host version "0.25.12" does not match binary version ${v(t)}`);return}let t=d(e);if(t.isRequest)_(t.id,t.value);else{let e=r[t.id];delete r[t.id],t.value.error?e(t.value.error,{}):e(null,t.value)}};return{readFromStdout:l,afterClose:f,service:{buildOrContext:({callName:n,refs:r,options:i,isTTY:o,defaultWD:s,callback:c})=>{let l=0,u=a++,d={},f={ref(){++l===1&&r&&r.ref()},unref(){--l===0&&(delete t[u],r&&r.unref())}};t[u]=d,f.ref(),G(n,u,m,h,f,e,d,i,o,s,(e,t)=>{try{c(e,t)}finally{f.unref()}})},transform:({callName:t,refs:n,input:r,options:i,isTTY:a,fs:o,callback:s})=>{let c=K(),l=l=>{try{if(typeof r!=`string`&&!(r instanceof Uint8Array))throw Error(`The input to "transform" must be a string or a Uint8Array`);let{flags:e,mangleCache:u}=re(t,i,a,b),d={command:`transform`,flags:e,inputFS:l!==null,input:l===null?typeof r==`string`?p(r):r:p(l)};u&&(d.mangleCache=u),m(n,d,(e,t)=>{if(e)return s(Error(e),null);let n=X(t.errors,c),r=X(t.warnings,c),i=1,a=()=>{if(--i===0){let e={warnings:r,code:t.code,map:t.map,mangleCache:void 0,legalComments:void 0};`legalComments`in t&&(e.legalComments=t?.legalComments),t.mangleCache&&(e.mangleCache=t?.mangleCache),s(null,e)}};if(n.length>0)return s(Y(`Transform failed`,n,r),null);t.codeFS&&(i++,o.readFile(t.code,(e,n)=>{e===null?(t.code=n,a()):s(e,null)})),t.mapFS&&(i++,o.readFile(t.map,(e,n)=>{e===null?(t.map=n,a()):s(e,null)})),a()})}catch(t){let r=[];try{V(r,i,{},a,b)}catch{}let o=J(t,e,c,void 0,``);m(n,{command:`error`,flags:r,error:o},()=>{o.detail=c.load(o.detail),s(Y(`Transform failed`,[o],[]),null)})}};if((typeof r==`string`||r instanceof Uint8Array)&&r.length>1024*1024){let e=l;l=()=>o.writeFile(r,e)}l(null)},formatMessages:({callName:e,refs:t,messages:n,options:r,callback:i})=>{if(!r)throw Error(`Missing second argument in ${e}() call`);let a={},o=R(r,a,`kind`,w),s=R(r,a,`color`,C),c=R(r,a,`terminalWidth`,E);if(z(r,a,`in ${e}() call`),o===void 0)throw Error(`Missing "kind" in ${e}() call`);if(o!==`error`&&o!==`warning`)throw Error(`Expected "kind" to be "error" or "warning" in ${e}() call`);let l={command:`format-msgs`,messages:Z(n,`messages`,null,``,c),isWarning:o===`warning`};s!==void 0&&(l.color=s),c!==void 0&&(l.terminalWidth=c),m(t,l,(e,t)=>{if(e)return i(Error(e),null);i(null,t.messages)})},analyzeMetafile:({callName:e,refs:t,metafile:n,options:r,callback:i})=>{r===void 0&&(r={});let a={},o=R(r,a,`color`,C),s=R(r,a,`verbose`,C);z(r,a,`in ${e}() call`);let c={command:`analyze-metafile`,metafile:n};o!==void 0&&(c.color=o),s!==void 0&&(c.verbose=s),m(t,c,(e,t)=>{if(e)return i(Error(e),null);i(null,t.result)})}}}}function G(e,t,n,r,i,a,o,s,c,l,u){let d=K(),f=e===`context`,p=(e,t)=>{let r=[];try{V(r,s,{},c,y)}catch{}let o=J(e,a,d,void 0,t);n(i,{command:`error`,flags:r,error:o},()=>{o.detail=d.load(o.detail),u(Y(f?`Context failed`:`Build failed`,[o],[]),null)})},h;if(typeof s==`object`){let e=s.plugins;if(e!==void 0){if(!Array.isArray(e))return p(Error(`"plugins" must be an array`),``);h=e}}if(h&&h.length>0){if(a.isSync)return p(Error(`Cannot use plugins in synchronous API calls`),``);ae(t,n,r,i,a,o,s,h,d).then(e=>{if(!e.ok)return p(e.error,e.pluginName);try{g(e.requestPlugins,e.runOnEndCallbacks,e.scheduleOnDisposeCallbacks)}catch(e){p(e,``)}},e=>p(e,``));return}try{g(null,(e,t)=>t([],[]),()=>{})}catch(e){p(e,``)}function g(p,h,g){let _=a.hasFS,{entries:v,flags:b,write:x,stdinContents:S,stdinResolveDir:C,absWorkingDir:T,nodePaths:k,mangleCache:A}=W(e,s,c,y,_);if(x&&!a.hasFS)throw Error(`The "write" option is unavailable in this environment`);let M={command:`build`,key:t,entries:v,flags:b,write:x,stdinContents:S,stdinResolveDir:C,absWorkingDir:T||l,nodePaths:k,context:f};p&&(M.plugins=p),A&&(M.mangleCache=A);let N=(e,t)=>{let n={errors:X(e.errors,d),warnings:X(e.warnings,d),outputFiles:void 0,metafile:void 0,mangleCache:void 0},r=n.errors.slice(),i=n.warnings.slice();e.outputFiles&&(n.outputFiles=e.outputFiles.map(ue)),e.metafile&&(n.metafile=JSON.parse(e.metafile)),e.mangleCache&&(n.mangleCache=e.mangleCache),e.writeToStdout!==void 0&&console.log(m(e.writeToStdout).replace(/\n$/,``)),h(n,(e,a)=>{if(r.length>0||e.length>0)return t(Y(`Build failed`,r.concat(e),i.concat(a)),null,e,a);t(null,n,e,a)})},P,F;f&&(o[`on-end`]=(e,t)=>new Promise(n=>{N(t,(t,i,a,o)=>{let s={errors:a,warnings:o};F&&F(t,i),P=void 0,F=void 0,r(e,s),n()})})),n(i,M,(e,s)=>{if(e)return u(Error(e),null);if(!f)return N(s,(e,t)=>(g(),u(e,t)));if(s.errors.length>0)return u(Y(`Context failed`,s.errors,s.warnings),null);let c=!1;i.ref(),u(null,{rebuild:()=>(P||=new Promise((e,r)=>{let a;F=(t,n)=>{a||=()=>t?r(t):e(n)};let o=()=>{n(i,{command:`rebuild`,key:t},(e,t)=>{e?r(Error(e)):a?a():o()})};o()}),P),watch:(e={})=>new Promise((r,o)=>{if(!a.hasFS)throw Error(`Cannot use the "watch" API in this environment`);let s={},c=R(e,s,`delay`,E);z(e,s,`in watch() call`);let l={command:`watch`,key:t};c&&(l.delay=c),n(i,l,e=>{e?o(Error(e)):r(void 0)})}),serve:(e={})=>new Promise((s,c)=>{if(!a.hasFS)throw Error(`Cannot use the "serve" API in this environment`);let l={},u=R(e,l,`port`,D),d=R(e,l,`host`,w),f=R(e,l,`servedir`,w),p=R(e,l,`keyfile`,w),m=R(e,l,`certfile`,w),h=R(e,l,`fallback`,w),g=R(e,l,`cors`,j),_=R(e,l,`onRequest`,O);z(e,l,`in serve() call`);let v={command:`serve`,key:t,onRequest:!!_};if(u!==void 0&&(v.port=u),d!==void 0&&(v.host=d),f!==void 0&&(v.servedir=f),p!==void 0&&(v.keyfile=p),m!==void 0&&(v.certfile=m),h!==void 0&&(v.fallback=h),g){let e={},t=R(g,e,`origin`,te);z(g,e,`on "cors" object`),Array.isArray(t)?v.corsOrigin=t:t!==void 0&&(v.corsOrigin=[t])}n(i,v,(e,t)=>{if(e)return c(Error(e));_&&(o[`serve-request`]=(e,t)=>{_(t.args),r(e,{})}),s(t)})}),cancel:()=>new Promise(e=>{if(c)return e();n(i,{command:`cancel`,key:t},()=>{e()})}),dispose:()=>new Promise(e=>{if(c)return e();c=!0,n(i,{command:`dispose`,key:t},()=>{e(),g(),i.unref()})})})})}}var ae=(e,t,n,r,i,a,o,s,l)=>c(null,null,function*(){let u=[],d=[],f={},m={},h=[],g=0,_=0,y=[],b=!1;s=[...s];for(let n of s){let a={};if(typeof n!=`object`)throw Error(`Plugin at index ${_} must be an object`);let s=R(n,a,`name`,w);if(typeof s!=`string`||s===``)throw Error(`Plugin at index ${_} is missing a name`);try{let c=R(n,a,`setup`,O);if(typeof c!=`function`)throw Error(`Plugin is missing a setup function`);z(n,a,`on plugin ${v(s)}`);let p={name:s,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};_++;let x=c({initialOptions:o,resolve:(n,i={})=>{if(!b)throw Error(`Cannot call "resolve" before plugin setup has completed`);if(typeof n!=`string`)throw Error(`The path to resolve must be a string`);let a=Object.create(null),o=R(i,a,`pluginName`,w),c=R(i,a,`importer`,w),u=R(i,a,`namespace`,w),d=R(i,a,`resolveDir`,w),f=R(i,a,`kind`,w),p=R(i,a,`pluginData`,S),m=R(i,a,`with`,j);return z(i,a,`in resolve() call`),new Promise((i,a)=>{let h={command:`resolve`,path:n,key:e,pluginName:s};if(o!=null&&(h.pluginName=o),c!=null&&(h.importer=c),u!=null&&(h.namespace=u),d!=null&&(h.resolveDir=d),f!=null)h.kind=f;else throw Error(`Must specify "kind" when calling "resolve"`);p!=null&&(h.pluginData=l.store(p)),m!=null&&(h.with=le(m,`with`)),t(r,h,(e,t)=>{e===null?i({errors:X(t.errors,l),warnings:X(t.warnings,l),path:t.path,external:t.external,sideEffects:t.sideEffects,namespace:t.namespace,suffix:t.suffix,pluginData:l.load(t.pluginData)}):a(Error(e))})})},onStart(e){let t=q(Error(`This error came from the "onStart" callback registered here:`),i,`onStart`);u.push({name:s,callback:e,note:t}),p.onStart=!0},onEnd(e){let t=q(Error(`This error came from the "onEnd" callback registered here:`),i,`onEnd`);d.push({name:s,callback:e,note:t}),p.onEnd=!0},onResolve(e,t){let n=q(Error(`This error came from the "onResolve" callback registered here:`),i,`onResolve`),r={},a=R(e,r,`filter`,T),o=R(e,r,`namespace`,w);if(z(e,r,`in onResolve() call for plugin ${v(s)}`),a==null)throw Error(`onResolve() call is missing a filter`);let c=g++;f[c]={name:s,callback:t,note:n},p.onResolve.push({id:c,filter:de(a),namespace:o||``})},onLoad(e,t){let n=q(Error(`This error came from the "onLoad" callback registered here:`),i,`onLoad`),r={},a=R(e,r,`filter`,T),o=R(e,r,`namespace`,w);if(z(e,r,`in onLoad() call for plugin ${v(s)}`),a==null)throw Error(`onLoad() call is missing a filter`);let c=g++;m[c]={name:s,callback:t,note:n},p.onLoad.push({id:c,filter:de(a),namespace:o||``})},onDispose(e){h.push(e)},esbuild:i.esbuild});x&&(yield x),y.push(p)}catch(e){return{ok:!1,error:e,pluginName:s}}}a[`on-start`]=(e,t)=>c(null,null,function*(){l.clear();let t={errors:[],warnings:[]};yield Promise.all(u.map(e=>c(null,[e],function*({name:e,callback:n,note:r}){try{let r=yield n();if(r!=null){if(typeof r!=`object`)throw Error(`Expected onStart() callback in plugin ${v(e)} to return an object`);let n={},i=R(r,n,`errors`,k),a=R(r,n,`warnings`,k);z(r,n,`from onStart() callback in plugin ${v(e)}`),i!=null&&t.errors.push(...Z(i,`errors`,l,e,void 0)),a!=null&&t.warnings.push(...Z(a,`warnings`,l,e,void 0))}}catch(n){t.errors.push(J(n,i,l,r&&r(),e))}}))),n(e,t)}),a[`on-resolve`]=(e,t)=>c(null,null,function*(){let r={},a=``,o,s;for(let e of t.ids)try{({name:a,callback:o,note:s}=f[e]);let n=yield o({path:t.path,importer:t.importer,namespace:t.namespace,resolveDir:t.resolveDir,kind:t.kind,pluginData:l.load(t.pluginData),with:t.with});if(n!=null){if(typeof n!=`object`)throw Error(`Expected onResolve() callback in plugin ${v(a)} to return an object`);let t={},i=R(n,t,`pluginName`,w),o=R(n,t,`path`,w),s=R(n,t,`namespace`,w),c=R(n,t,`suffix`,w),u=R(n,t,`external`,C),d=R(n,t,`sideEffects`,C),f=R(n,t,`pluginData`,S),p=R(n,t,`errors`,k),m=R(n,t,`warnings`,k),h=R(n,t,`watchFiles`,A),g=R(n,t,`watchDirs`,A);z(n,t,`from onResolve() callback in plugin ${v(a)}`),r.id=e,i!=null&&(r.pluginName=i),o!=null&&(r.path=o),s!=null&&(r.namespace=s),c!=null&&(r.suffix=c),u!=null&&(r.external=u),d!=null&&(r.sideEffects=d),f!=null&&(r.pluginData=l.store(f)),p!=null&&(r.errors=Z(p,`errors`,l,a,void 0)),m!=null&&(r.warnings=Z(m,`warnings`,l,a,void 0)),h!=null&&(r.watchFiles=ce(h,`watchFiles`)),g!=null&&(r.watchDirs=ce(g,`watchDirs`));break}}catch(t){r={id:e,errors:[J(t,i,l,s&&s(),a)]};break}n(e,r)}),a[`on-load`]=(e,t)=>c(null,null,function*(){let r={},a=``,o,s;for(let e of t.ids)try{({name:a,callback:o,note:s}=m[e]);let n=yield o({path:t.path,namespace:t.namespace,suffix:t.suffix,pluginData:l.load(t.pluginData),with:t.with});if(n!=null){if(typeof n!=`object`)throw Error(`Expected onLoad() callback in plugin ${v(a)} to return an object`);let t={},i=R(n,t,`pluginName`,w),o=R(n,t,`contents`,I),s=R(n,t,`resolveDir`,w),c=R(n,t,`pluginData`,S),u=R(n,t,`loader`,w),d=R(n,t,`errors`,k),f=R(n,t,`warnings`,k),m=R(n,t,`watchFiles`,A),h=R(n,t,`watchDirs`,A);z(n,t,`from onLoad() callback in plugin ${v(a)}`),r.id=e,i!=null&&(r.pluginName=i),o instanceof Uint8Array?r.contents=o:o!=null&&(r.contents=p(o)),s!=null&&(r.resolveDir=s),c!=null&&(r.pluginData=l.store(c)),u!=null&&(r.loader=u),d!=null&&(r.errors=Z(d,`errors`,l,a,void 0)),f!=null&&(r.warnings=Z(f,`warnings`,l,a,void 0)),m!=null&&(r.watchFiles=ce(m,`watchFiles`)),h!=null&&(r.watchDirs=ce(h,`watchDirs`));break}}catch(t){r={id:e,errors:[J(t,i,l,s&&s(),a)]};break}n(e,r)});let x=(e,t)=>t([],[]);return d.length>0&&(x=(e,t)=>{c(null,null,function*(){let n=[],r=[];for(let{name:t,callback:a,note:o}of d){let s,c;try{let n=yield a(e);if(n!=null){if(typeof n!=`object`)throw Error(`Expected onEnd() callback in plugin ${v(t)} to return an object`);let e={},r=R(n,e,`errors`,k),i=R(n,e,`warnings`,k);z(n,e,`from onEnd() callback in plugin ${v(t)}`),r!=null&&(s=Z(r,`errors`,l,t,void 0)),i!=null&&(c=Z(i,`warnings`,l,t,void 0))}}catch(e){s=[J(e,i,l,o&&o(),t)]}if(s){n.push(...s);try{e.errors.push(...s)}catch{}}if(c){r.push(...c);try{e.warnings.push(...c)}catch{}}}t(n,r)})}),b=!0,{ok:!0,requestPlugins:y,runOnEndCallbacks:x,scheduleOnDisposeCallbacks:()=>{for(let e of h)setTimeout(()=>e(),0)}}});function K(){let e=new Map,t=0;return{clear(){e.clear()},load(t){return e.get(t)},store(n){if(n===void 0)return-1;let r=t++;return e.set(r,n),r}}}function q(e,t,n){let r,i=!1;return()=>{if(i)return r;i=!0;try{let i=(e.stack+``).split(`
`);i.splice(1,1);let a=oe(t,i,n);if(a)return r={text:e.message,location:a},r}catch{}}}function J(e,t,n,r,i){let a=`Internal error`,o=null;try{a=(e&&e.message||e)+``}catch{}try{o=oe(t,(e.stack+``).split(`
`),``)}catch{}return{id:``,pluginName:i,text:a,location:o,notes:r?[r]:[],detail:n?n.store(e):-1}}function oe(e,t,n){let r=`    at `;if(e.readFileSync&&!t[0].startsWith(r)&&t[1].startsWith(r))for(let i=1;i<t.length;i++){let a=t[i];if(a.startsWith(r))for(a=a.slice(7);;){let r=/^(?:new |async )?\S+ \((.*)\)$/.exec(a);if(r){a=r[1];continue}if(r=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(a),r){a=r[1];continue}if(r=/^(\S+):(\d+):(\d+)$/.exec(a),r){let i;try{i=e.readFileSync(r[1],`utf8`)}catch{break}let a=i.split(/\r\n|\r|\n|\u2028|\u2029/)[r[2]-1]||``,o=r[3]-1,s=a.slice(o,o+n.length)===n?n.length:0;return{file:r[1],namespace:`file`,line:+r[2],column:p(a.slice(0,o)).length,length:p(a.slice(o,o+s)).length,lineText:a+`
`+t.slice(1).join(`
`),suggestion:``}}break}}return null}function Y(e,t,n){e+=t.length<1?``:` with ${t.length} error${t.length<2?``:`s`}:`+t.slice(0,6).map((e,t)=>{if(t===5)return`
...`;if(!e.location)return`
error: ${e.text}`;let{file:n,line:r,column:i}=e.location;return`
${n}:${r}:${i}: ERROR: ${e.pluginName?`[plugin: ${e.pluginName}] `:``}${e.text}`}).join(``);let r=Error(e);for(let[e,i]of[[`errors`,t],[`warnings`,n]])Object.defineProperty(r,e,{configurable:!0,enumerable:!0,get:()=>i,set:t=>Object.defineProperty(r,e,{configurable:!0,enumerable:!0,value:t})});return r}function X(e,t){for(let n of e)n.detail=t.load(n.detail);return e}function se(e,t,n){if(e==null)return null;let r={},i=R(e,r,`file`,w),a=R(e,r,`namespace`,w),o=R(e,r,`line`,E),s=R(e,r,`column`,E),c=R(e,r,`length`,E),l=R(e,r,`lineText`,w),u=R(e,r,`suggestion`,w);if(z(e,r,t),l){let e=l.slice(0,(s&&s>0?s:0)+(c&&c>0?c:0)+(n&&n>0?n:80));!/[\x7F-\uFFFF]/.test(e)&&!/\n/.test(l)&&(l=e)}return{file:i||``,namespace:a||``,line:o||0,column:s||0,length:c||0,lineText:l||``,suggestion:u||``}}function Z(e,t,n,r,i){let a=[],o=0;for(let s of e){let e={},c=R(s,e,`id`,w),l=R(s,e,`pluginName`,w),u=R(s,e,`text`,w),d=R(s,e,`location`,P),f=R(s,e,`notes`,k),p=R(s,e,`detail`,S),m=`in element ${o} of "${t}"`;z(s,e,m);let h=[];if(f)for(let e of f){let t={},n=R(e,t,`text`,w),r=R(e,t,`location`,P);z(e,t,m),h.push({text:n||``,location:se(r,m,i)})}a.push({id:c||``,pluginName:l||r,text:u||``,location:se(d,m,i),notes:h,detail:n?n.store(p):-1}),o++}return a}function ce(e,t){let n=[];for(let r of e){if(typeof r!=`string`)throw Error(`${v(t)} must be an array of strings`);n.push(r)}return n}function le(e,t){let n=Object.create(null);for(let r in e){let i=e[r];if(typeof i!=`string`)throw Error(`key ${v(r)} in object ${v(t)} must be a string`);n[r]=i}return n}function ue({path:e,contents:t,hash:n}){let r=null;return{path:e,contents:t,hash:n,get text(){let e=this.contents;return(r===null||e!==t)&&(t=e,r=m(e)),r}}}function de(e){let t=e.source;return e.flags&&(t=`(?${e.flags})${t}`),t}var fe=`0.25.12`,pe=e=>$().build(e),me=e=>$().context(e),he=(e,t)=>$().transform(e,t),ge=(e,t)=>$().formatMessages(e,t),_e=(e,t)=>$().analyzeMetafile(e,t),ve=()=>{throw Error(`The "buildSync" API only works in node`)},ye=()=>{throw Error(`The "transformSync" API only works in node`)},be=()=>{throw Error(`The "formatMessagesSync" API only works in node`)},xe=()=>{throw Error(`The "analyzeMetafileSync" API only works in node`)},Se=()=>(Ce&&Ce(),Promise.resolve()),Q,Ce,we,$=()=>{if(we)return we;throw Error(Q?`You need to wait for the promise returned from "initialize" to be resolved before calling this`:`You need to call "initialize" before calling this`)},Te=e=>{e=B(e||{});let t=e.wasmURL,n=e.wasmModule,r=e.worker!==!1;if(!t&&!n)throw Error(`Must provide either the "wasmURL" option or the "wasmModule" option`);if(Q)throw Error(`Cannot call "initialize" more than once`);return Q=Ee(t||``,n,r),Q.catch(()=>{Q=void 0}),Q},Ee=(e,t,n)=>c(null,null,function*(){let r,i,a=new Promise(e=>i=e);if(n){let e=new Blob([`onmessage=((postMessage) => {
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
        go.argv = ["", \`--service=\${"0.25.12"}\`];
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
    })(postMessage)`],{type:`text/javascript`});r=new Worker(URL.createObjectURL(e))}else{let e=(e=>{var t=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())});let n,r={};for(let e=self;e;e=Object.getPrototypeOf(e))for(let t of Object.getOwnPropertyNames(e))t in r||Object.defineProperty(r,t,{get:()=>self[t]});(()=>{let e=()=>{let e=Error(`not implemented`);return e.code=`ENOSYS`,e};if(!r.fs){let t=``;r.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(e,n){t+=i.decode(n);let r=t.lastIndexOf(`
`);return r!=-1&&(console.log(t.substring(0,r)),t=t.substring(r+1)),n.length},write(t,n,r,i,a,o){if(r!==0||i!==n.length||a!==null){o(e());return}o(null,this.writeSync(t,n))},chmod(t,n,r){r(e())},chown(t,n,r,i){i(e())},close(t,n){n(e())},fchmod(t,n,r){r(e())},fchown(t,n,r,i){i(e())},fstat(t,n){n(e())},fsync(e,t){t(null)},ftruncate(t,n,r){r(e())},lchown(t,n,r,i){i(e())},link(t,n,r){r(e())},lstat(t,n){n(e())},mkdir(t,n,r){r(e())},open(t,n,r,i){i(e())},read(t,n,r,i,a,o){o(e())},readdir(t,n){n(e())},readlink(t,n){n(e())},rename(t,n,r){r(e())},rmdir(t,n){n(e())},stat(t,n){n(e())},symlink(t,n,r){r(e())},truncate(t,n,r){r(e())},unlink(t,n){n(e())},utimes(t,n,r,i){i(e())}}}if(r.process||={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw e()},pid:-1,ppid:-1,umask(){throw e()},cwd(){throw e()},chdir(){throw e()}},!r.crypto)throw Error(`globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)`);if(!r.performance)throw Error(`globalThis.performance is not available, polyfill required (performance.now only)`);if(!r.TextEncoder)throw Error(`globalThis.TextEncoder is not available, polyfill required`);if(!r.TextDecoder)throw Error(`globalThis.TextDecoder is not available, polyfill required`);let n=new TextEncoder(`utf-8`),i=new TextDecoder(`utf-8`);r.Go=class{constructor(){this.argv=[`js`],this.env={},this.exit=e=>{e!==0&&console.warn(`exit code:`,e)},this._exitPromise=new Promise(e=>{this._resolveExitPromise=e}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;let e=(e,t)=>{this.mem.setUint32(e+0,t,!0),this.mem.setUint32(e+4,Math.floor(t/4294967296),!0)},t=e=>this.mem.getUint32(e+0,!0)+this.mem.getInt32(e+4,!0)*4294967296,a=e=>{let t=this.mem.getFloat64(e,!0);if(t===0)return;if(!isNaN(t))return t;let n=this.mem.getUint32(e,!0);return this._values[n]},o=(e,t)=>{let n=2146959360;if(typeof t==`number`&&t!==0){if(isNaN(t)){this.mem.setUint32(e+4,n,!0),this.mem.setUint32(e,0,!0);return}this.mem.setFloat64(e,t,!0);return}if(t===void 0){this.mem.setFloat64(e,0,!0);return}let r=this._ids.get(t);r===void 0&&(r=this._idPool.pop(),r===void 0&&(r=this._values.length),this._values[r]=t,this._goRefCounts[r]=0,this._ids.set(t,r)),this._goRefCounts[r]++;let i=0;switch(typeof t){case`object`:t!==null&&(i=1);break;case`string`:i=2;break;case`symbol`:i=3;break;case`function`:i=4;break}this.mem.setUint32(e+4,n|i,!0),this.mem.setUint32(e,r,!0)},s=e=>{let n=t(e+0),r=t(e+8);return new Uint8Array(this._inst.exports.mem.buffer,n,r)},c=e=>{let n=t(e+0),r=t(e+8),i=Array(r);for(let e=0;e<r;e++)i[e]=a(n+e*8);return i},l=e=>{let n=t(e+0),r=t(e+8);return i.decode(new DataView(this._inst.exports.mem.buffer,n,r))},u=Date.now()-performance.now();this.importObject={_gotest:{add:(e,t)=>e+t},gojs:{"runtime.wasmExit":e=>{e>>>=0;let t=this.mem.getInt32(e+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(t)},"runtime.wasmWrite":e=>{e>>>=0;let n=t(e+8),i=t(e+16),a=this.mem.getInt32(e+24,!0);r.fs.writeSync(n,new Uint8Array(this._inst.exports.mem.buffer,i,a))},"runtime.resetMemoryDataView":e=>{e>>>=0,this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,e(t+8,(u+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;let n=new Date().getTime();e(t+8,n/1e3),this.mem.setInt32(t+16,n%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":e=>{e>>>=0;let n=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(n,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(n);)console.warn(`scheduleTimeoutEvent: missed timeout event`),this._resume()},t(e+8))),this.mem.setInt32(e+16,n,!0)},"runtime.clearTimeoutEvent":e=>{e>>>=0;let t=this.mem.getInt32(e+8,!0);clearTimeout(this._scheduledTimeouts.get(t)),this._scheduledTimeouts.delete(t)},"runtime.getRandomData":e=>{e>>>=0,crypto.getRandomValues(s(e+8))},"syscall/js.finalizeRef":e=>{e>>>=0;let t=this.mem.getUint32(e+8,!0);if(this._goRefCounts[t]--,this._goRefCounts[t]===0){let e=this._values[t];this._values[t]=null,this._ids.delete(e),this._idPool.push(t)}},"syscall/js.stringVal":e=>{e>>>=0,o(e+24,l(e+8))},"syscall/js.valueGet":e=>{e>>>=0;let t=Reflect.get(a(e+8),l(e+16));e=this._inst.exports.getsp()>>>0,o(e+32,t)},"syscall/js.valueSet":e=>{e>>>=0,Reflect.set(a(e+8),l(e+16),a(e+32))},"syscall/js.valueDelete":e=>{e>>>=0,Reflect.deleteProperty(a(e+8),l(e+16))},"syscall/js.valueIndex":e=>{e>>>=0,o(e+24,Reflect.get(a(e+8),t(e+16)))},"syscall/js.valueSetIndex":e=>{e>>>=0,Reflect.set(a(e+8),t(e+16),a(e+24))},"syscall/js.valueCall":e=>{e>>>=0;try{let t=a(e+8),n=Reflect.get(t,l(e+16)),r=c(e+32),i=Reflect.apply(n,t,r);e=this._inst.exports.getsp()>>>0,o(e+56,i),this.mem.setUint8(e+64,1)}catch(t){e=this._inst.exports.getsp()>>>0,o(e+56,t),this.mem.setUint8(e+64,0)}},"syscall/js.valueInvoke":e=>{e>>>=0;try{let t=a(e+8),n=c(e+16),r=Reflect.apply(t,void 0,n);e=this._inst.exports.getsp()>>>0,o(e+40,r),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,o(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueNew":e=>{e>>>=0;try{let t=a(e+8),n=c(e+16),r=Reflect.construct(t,n);e=this._inst.exports.getsp()>>>0,o(e+40,r),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,o(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,e(t+16,parseInt(a(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;let r=n.encode(String(a(t+8)));o(t+16,r),e(t+24,r.length)},"syscall/js.valueLoadString":e=>{e>>>=0;let t=a(e+8);s(e+16).set(t)},"syscall/js.valueInstanceOf":e=>{e>>>=0,this.mem.setUint8(e+24,+(a(e+8)instanceof a(e+16)))},"syscall/js.copyBytesToGo":t=>{t>>>=0;let n=s(t+8),r=a(t+32);if(!(r instanceof Uint8Array||r instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}let i=r.subarray(0,n.length);n.set(i),e(t+40,i.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;let n=a(t+8),r=s(t+16);if(!(n instanceof Uint8Array||n instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}let i=r.subarray(0,n.length);n.set(i),e(t+40,i.length),this.mem.setUint8(t+48,1)},debug:e=>{console.log(e)}}}}run(e){return t(this,null,function*(){if(!(e instanceof WebAssembly.Instance))throw Error(`Go.run: WebAssembly.Instance expected`);this._inst=e,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,r,this],this._goRefCounts=Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[r,5],[this,6]]),this._idPool=[],this.exited=!1;let t=4096,i=e=>{let r=t,i=n.encode(e+`\0`);return new Uint8Array(this.mem.buffer,t,i.length).set(i),t+=i.length,t%8!=0&&(t+=8-t%8),r},a=this.argv.length,o=[];this.argv.forEach(e=>{o.push(i(e))}),o.push(0),Object.keys(this.env).sort().forEach(e=>{o.push(i(`${e}=${this.env[e]}`))}),o.push(0);let s=t;if(o.forEach(e=>{this.mem.setUint32(t,e,!0),this.mem.setUint32(t+4,0,!0),t+=8}),t>=12288)throw Error(`total length of command line and environment variables exceeds limit`);this._inst.exports.run(a,s),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw Error(`Go program has already exited`);this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(e){let t=this;return function(){let n={id:e,this:this,args:arguments};return t._pendingEvent=n,t._resume(),n.result}}}})(),n=({data:t})=>{let a=new TextDecoder,o=r.fs,s=``;o.writeSync=(t,n)=>{if(t===1)e(n);else if(t===2){s+=a.decode(n);let e=s.split(`
`);e.length>1&&console.log(e.slice(0,-1).join(`
`)),s=e[e.length-1]}else throw Error(`Bad write`);return n.length};let c=[],l,u=0;n=({data:e})=>(e.length>0&&(c.push(e),l&&l()),d),o.read=(e,t,n,r,i,a)=>{if(e!==0||n!==0||r!==t.length||i!==null)throw Error(`Bad read`);if(c.length===0){l=()=>o.read(e,t,n,r,i,a);return}let s=c[0],d=Math.max(0,Math.min(r,s.length-u));t.set(s.subarray(u,u+d),n),u+=d,u===s.length&&(c.shift(),u=0),a(null,d)};let d=new r.Go;return d.argv=[``,`--service=0.25.12`],i(t,d).then(t=>{e(null),d.run(t)},t=>{e(t)}),d};function i(e,n){return t(this,null,function*(){if(e instanceof WebAssembly.Module)return WebAssembly.instantiate(e,n.importObject);let t=yield fetch(e);if(!t.ok)throw Error(`Failed to download ${JSON.stringify(e)}`);if(`instantiateStreaming`in WebAssembly&&/^application\/wasm($|;)/i.test(t.headers.get(`Content-Type`)||``))return(yield WebAssembly.instantiateStreaming(t,n.importObject)).instance;let r=yield t.arrayBuffer();return(yield WebAssembly.instantiate(r,n.importObject)).instance})}return e=>n(e)})(e=>r.onmessage({data:e})),t;r={onmessage:null,postMessage:n=>setTimeout(()=>{try{t=e({data:n})}catch(e){i(e)}}),terminate(){if(t)for(let e of t._scheduledTimeouts.values())clearTimeout(e)}}}let o,s,c=new Promise((e,t)=>{o=e,s=t});r.onmessage=({data:e})=>{r.onmessage=({data:e})=>u(e),e?s(e):o()},r.postMessage(t||new URL(e,location.href).toString());let{readFromStdout:u,service:d}=ie({writeToStdin(e){r.postMessage(e)},isSync:!1,hasFS:!1,esbuild:l});yield c,Ce=()=>{r.terminate(),Q=void 0,Ce=void 0,we=void 0},we={build:e=>new Promise((t,n)=>{a.then(n),d.buildOrContext({callName:`build`,refs:null,options:e,isTTY:!1,defaultWD:`/`,callback:(e,r)=>e?n(e):t(r)})}),context:e=>new Promise((t,n)=>{a.then(n),d.buildOrContext({callName:`context`,refs:null,options:e,isTTY:!1,defaultWD:`/`,callback:(e,r)=>e?n(e):t(r)})}),transform:(e,t)=>new Promise((n,r)=>{a.then(r),d.transform({callName:`transform`,refs:null,input:e,options:t||{},isTTY:!1,fs:{readFile(e,t){t(Error(`Internal error`),null)},writeFile(e,t){t(null)}},callback:(e,t)=>e?r(e):n(t)})}),formatMessages:(e,t)=>new Promise((n,r)=>{a.then(r),d.formatMessages({callName:`formatMessages`,refs:null,messages:e,options:t,callback:(e,t)=>e?r(e):n(t)})}),analyzeMetafile:(e,t)=>new Promise((n,r)=>{a.then(r),d.analyzeMetafile({callName:`analyzeMetafile`,refs:null,metafile:typeof e==`string`?e:JSON.stringify(e),options:t,callback:(e,t)=>e?r(e):n(t)})})}}),De=l})(typeof t==`object`?t:{set exports(e){(typeof self<`u`?self:this).esbuild=e}})}))(),1),y=`/assets/esbuild-BHljloGq.wasm`;function b(e){let t=e.lastIndexOf(`/`);return t>=0?e.slice(0,t):``}function x(e,t){return e?`${e}/${t}`.replace(/\/+/g,`/`):t}function S(e,t){if(e.startsWith(`/`))return e.slice(1);let n=t.split(`/`).filter(e=>e),r=e.split(`/`).filter(e=>e);if(e.startsWith(`./`)||e.startsWith(`../`)||!e.startsWith(`/`)){let e=n.slice(0,-1);n.length=0,n.push(...e)}for(let e of r)if(e===`.`)continue;else e===`..`?n.length>0&&n.pop():n.push(e);return n.join(`/`)}var C=`../../gs-lib`,w={name:`workspace`,setup(e){e.onResolve({filter:/.*/},e=>{if(e.path.startsWith(`http://`)||e.path.startsWith(`https://`)||e.path.startsWith(`data:`))return;let t=e.path;if(t.startsWith(`/`)&&(t=t.slice(1)),e.importer&&e.importer!==``){let n=e.importer;n.startsWith(`virtual-workspace:`)&&(n=n.slice(18));let r=e.path.startsWith(`./`)||e.path.startsWith(`../`),i=t.includes(`/`),a=n.startsWith(`__build/`);r?t=S(e.path,n):!i&&!a&&(t=S(t,n))}return{path:t,namespace:`virtual-workspace`}}),e.onLoad({filter:/.*/},async e=>{if(!/^(?!https?:\/\/).+/.test(e.path))return;let t=e.path,n=await a.getWorkspace(),r=await n.getResource(t);if(r||=(await n.listChildren(!0),await n.getResource(t)),!r)throw Error(`Module not found: ${t}`);let i=await r.getContents(),o=t.split(`.`).pop()?.toLowerCase(),s;return o===`ts`||o===`tsx`?s=o===`tsx`?`tsx`:`ts`:o===`js`||o===`jsx`?s=o===`jsx`?`jsx`:`js`:o===`json`?s=`json`:o===`css`&&(s=`css`),{contents:i,loader:s}})}},T=new class{constructor(){this.initialized=!1,this.workspaceCache=null}async getWorkspace(){return this.workspaceCache||=await a.getWorkspace(),this.workspaceCache}async init(){this.initialized||=(await v.initialize({wasmURL:y}),!0)}createBrowserFileCopier(e){let t=this.getWorkspace.bind(this),n={"dist/index.js":()=>m(()=>import(`${C}/dist/index.js?raw`),[]),"dist/gs-lib.css":()=>m(()=>import(`${C}/dist/gs-lib.css?raw`),[]),"public/pwa/staticwebapp.config.json":()=>m(()=>import(`${C}/public/pwa/staticwebapp.config.json?raw`),[]),"public/pwa/sw.js":()=>m(()=>import(`${C}/public/pwa/sw.js?raw`),[]),"public/pwa/manifest.json":()=>m(()=>import(`${C}/public/pwa/manifest.json?raw`),[]),"public/index.html":()=>m(()=>import(`${C}/public/index.html?raw`),[]),"public/pwa/assets/icons/24x24.png":()=>m(()=>import(`${C}/public/pwa/assets/icons/24x24.png?url`),[]),"public/pwa/assets/icons/48x48.png":()=>m(()=>import(`${C}/public/pwa/assets/icons/48x48.png?url`),[]),"public/pwa/assets/icons/192x192.png":()=>m(()=>import(`${C}/public/pwa/assets/icons/192x192.png?url`),[]),"public/pwa/assets/icons/512x512.png":()=>m(()=>import(`${C}/public/pwa/assets/icons/512x512.png?url`),[]),"public/pwa/assets/icons/icon_24.png":()=>m(()=>import(`${C}/public/pwa/assets/icons/icon_24.png?url`),[]),"public/pwa/assets/icons/icon_48.png":()=>m(()=>import(`${C}/public/pwa/assets/icons/icon_48.png?url`),[]),"public/pwa/assets/icons/icon_192.png":()=>m(()=>import(`${C}/public/pwa/assets/icons/icon_192.png?url`),[]),"public/pwa/assets/icons/icon_512.png":()=>m(()=>import(`${C}/public/pwa/assets/icons/icon_512.png?url`),[])},r=async(r,i,a,o)=>{let s=n[r];if(!s)throw Error(`No import mapping for ${r}. Make sure gs-lib is built.`);let c;try{let e=await s();if(a)c=e.default,o&&(c=await o(c));else{let t=e.default,n=await fetch(t);if(!n.ok)throw Error(`Failed to fetch: ${n.statusText}`);c=await n.blob()}}catch(e){throw Error(`Failed to copy ${r}: ${e}. Make sure gs-lib is built (run: npm run build --workspace=@kispace-io/gs-lib)`)}let l=await t(),u=x(e,i);await(await l.getResource(u,{create:!0})).saveContents(c),c=void 0};return{async copyTextFile(e,t,n){await r(e,t,!0,n)},async copyBinaryFile(e,t){await r(e,t,!1)}}}async build(e,t=void 0,n,r){let a=(e,t)=>{n&&(n.currentStep=e,n.message=t)};a(0,`Initializing build system...`),await this.init();let o=await this.getWorkspace();await h(e,{async readFile(e){let t=x(r,e),n=await o.getResource(t);if(!n)throw Error(`File not found: ${t}`);return await n.getContents()},async writeFile(e,t){let n=x(r,e);await(await o.getResource(n,{create:!0})).saveContents(t)},async ensureDir(e){let t=x(r,e.endsWith(`/`)?e:e+`/`);await o.getResource(t,{create:!0})},async exists(e){let t=x(r,e);return await o.getResource(t)!==null},async deleteDir(e){let t=x(r,e),n=await o.getResource(t);n instanceof i&&await n.delete()}},w,v,{gsLibCopier:this.createBrowserFileCopier(r),cleanAfterBuild:t,copyAssets:async(e,t)=>{let n=x(r,`assets`),i=await o.getResource(n);i&&await i.copyTo(`${t}/assets`)}},a),a(0,`Finalizing build...`),o.touch(),n&&(n.message=`Build completed successfully!`)}async buildMapFile(e,t){let n=JSON.parse(await e.getContents()),r=b(e.getWorkspacePath()),i=await g([t||`.env`],r||void 0);f.runAsync(`Building map`,async t=>{await T.build({title:e.getName(),gsMap:n,env:i,version:i.VERSION||`0.0.0`},void 0,t,r||void 0)}).then(()=>{p(`🚀 Map files copied to 'dist' folder in your workspace!`)}).catch(e=>{d(`💥 Map could not be built: ${e}`)})}};n.put(`buildService`,T);var E=`.geospace`,D=`.env`,O=[`node_modules`,`.git`,`dist`,`build`,`.next`,`.cache`,`.vscode`,`.idea`,`coverage`,`.nyc_output`,`.parcel-cache`,`.turbo`,`.yarn`,`.pnp`,`.svelte-kit`,`.nuxt`,`.output`,`target`,`out`,`.temp`,`.tmp`];function k(e){let t=e.toLowerCase();return O.some(e=>t===e.toLowerCase())}async function A(e,t,n,a={value:0}){let o=[],s=await e.listChildren(!0);for(let e of s){a.value++;let s=e.getWorkspacePath();if(n&&(n.message=`Scanning: ${s}`,n.currentStep=a.value),e instanceof r&&e.getName().toLowerCase().endsWith(t))o.push(s);else if(e instanceof i&&!k(e.getName())){let r=await A(e,t,n,a);o.push(...r)}}return o.sort()}function j(){let e=document.getElementById(`global-dialog-container`);return e||(e=document.createElement(`div`),e.id=`global-dialog-container`,document.body.appendChild(e)),e}async function M(e,t,n,r){return new Promise(i=>{let a=j(),c=n||``,l=r||``,u=()=>{o(s``,a)},d=()=>{u(),i({geospaceFile:c||null,envFile:l||null})},f=()=>{u(),i({geospaceFile:null,envFile:null})};o(s`
            <wa-dialog
                label="Select Files"
                open
                @wa-request-close=${f}
            >
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
                            value="${c}"
                            @change=${e=>{c=e.target.value}}
                        >
                            <wa-option value="">None</wa-option>
                            ${e.map(e=>s`
                                        <wa-option value="${e}"
                                            >${e}</wa-option
                                        >
                                    `)}
                        </wa-select>
                    </div>

                    <div class="dialog-field">
                        <label>Environment File:</label>
                        <wa-select
                            value="${l}"
                            @change=${e=>{l=e.target.value}}
                        >
                            <wa-option value="">None (use .env)</wa-option>
                            ${t.map(e=>s`
                                        <wa-option value="${e}"
                                            >${e}</wa-option
                                        >
                                    `)}
                        </wa-select>
                    </div>

                    <div class="dialog-actions">
                        <wa-button variant="default" @click=${f}>
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click=${d}>
                            OK
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `,a)})}var N=({commandRegistry:e})=>{e.registerAll({command:{id:`build_map`,name:`Build map`,description:`Builds a publishable map from a .geospace file`,parameters:[{name:`file`,description:`Path to the .geospace file relative to workspace root. If not provided, uses the active map editor or selected file.`,required:!1},{name:`env`,description:`Path to the environment file relative to workspace root (e.g., 'dev.env', 'prod.env'). Defaults to '.env' if not specified.`,required:!1},{name:`ask`,description:`If true, prompts for missing files (map file or env file) when not provided.`,required:!1}]},handler:{execute:async e=>{let t=e.params?.env,n=e.params?.file,i=e.params?.ask===!0||e.params?.ask===`true`,o=await a.getWorkspace();if(!o){d(`No workspace available`);return}let s;if(n){let e=await o.getResource(n);if(!e||!(e instanceof r)){d(`File not found: ${n}`);return}if(!e.getName().toLowerCase().endsWith(E)){d(`File is not a .geospace file: ${n}`);return}s=e}else{let e=l.get();if(e&&e.input)e.isDirty()&&(await e.save(),p(`Map saved automatically to run build.`)),s=e.input.data;else{let e=u.get();e instanceof r&&e.getName().toLowerCase().endsWith(E)&&(s=e)}}if(i&&(!s||!t)){let e=[],i=[];await f.runAsync(`Collecting files`,async t=>{t.message=`Scanning workspace for .geospace files...`,e=await A(o,E,t,{value:0}),t.message=`Scanning workspace for .env files...`,t.currentStep=0,i=await A(o,D,t,{value:0}),t.message=`Found ${e.length} .geospace files and ${i.length} .env files`});let a=s?.getWorkspacePath(),c=await M(e,i,a,t||`.env`);if(c.geospaceFile===null&&c.envFile===null)return;if(c.geospaceFile&&!s){n=c.geospaceFile;let e=await o.getResource(n);if(!e||!(e instanceof r)){d(`File not found: ${n}`);return}if(!e.getName().toLowerCase().endsWith(E)){d(`File is not a .geospace file: ${n}`);return}s=e}c.envFile!==null&&(t=c.envFile||`.env`)}else if(!s){d(`No map editor active, no .geospace file selected, and no file path provided`);return}if(!s){d(`No map file available`);return}return T.buildMapFile(s,t)}},contribution:{target:`mapeditor.toolbar.misc`,icon:`hammer`,label:`Build map`,disabled:()=>!(l.get()instanceof _)}}),c.registerContribution(`contextmenu:filebrowser`,{command:`build_map`,icon:`hammer`,label:`Build map`,params:{ask:!0},disabled:()=>{let e=u.get();return e instanceof r?!e.getName().toLowerCase().endsWith(E):!0}})};export{N as default};