const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mapbuilder-extension-Bg2Rc52C.js","assets/index-Bz1SaEj3.js","assets/preload-helper-WQhrSmCl.js","assets/chunk.LTSJC6DR-BCCP1Gxs.js","assets/index-aP6FMjSZ.css","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/style-editor-extension-CPzZ0Aqp.js","assets/overpass-extension-CKmoEjSY.js","assets/gtfs-extension-DNRJynXa.js","assets/github-service-BirPRcev.js"])))=>i.map(i=>d[i]);
import{c as on,g as Fn,a as Rn,_ as kt}from"./preload-helper-WQhrSmCl.js";import{_ as Nn,G as tt,w as St,q as mt,r as $n,s as hn,x as Ce,u as Bt,y as jn,E as zn,z as Zt,A as mn,B as Wn,H as sn,I as gn,J as Gn,M as Fe,N as yn,O as cn,P as Ve,Q as Vn,R as Bn,T as Pt,U as Kt,W as vn,X as bn,Y as qn,Z as Qt,$ as Xt,a0 as en,a1 as wn,a2 as Yn,a3 as Jn,a4 as Oe,a5 as Lt,a6 as gt,a7 as kn,a8 as Hn,a9 as Zn,o as ln,aa as Kn,ab as Qn,ac as Xn,ad as er,ae as tr,af as nr,ag as rr,ah as ar,ai as or,aj as ir,ak as sr}from"./index-Bz1SaEj3.js";import{c as zt}from"./_commonjs-dynamic-modules-TDtrdbi3.js";const cr="@kispace-io/geospace",lr="1.0.41",ur={"@kispace-io/appspace":"^1.1.11","@kispace-io/gs-lib":"file:../gs-lib","esbuild-wasm":"^0.25.11",osmtogeojson:"^3.0.0-beta.5","font-gis":"^1.0.6","pace-js":"^1.2.4"},dr={"@testing-library/jest-dom":"^6.9.1","@types/node":"^24.9.2","@vitest/coverage-v8":"^4.0.6","@vitest/ui":"^4.0.6","happy-dom":"^20.0.10",jsdom:"^27.1.0","rollup-plugin-visualizer":"^6.0.5",typescript:"~5.9.3",vite:"^7.1.12","vite-plugin-cross-origin-isolation":"^0.1.6","vite-plugin-mkcert":"^1.17.9","vite-plugin-static-copy":"^3.1.4","vite-plugin-zip":"^1.0.1",vitest:"^4.0.6"},Ct={name:cr,version:lr,dependencies:ur,devDependencies:dr};var Jt={exports:{}},un;function fr(){return un||(un=1,(function(o,n){(function(s){o.exports=s()})(function(){return(function(){function s(p,y,E){function m(re,fe){if(!y[re]){if(!p[re]){var I=typeof zt=="function"&&zt;if(!fe&&I)return I(re,!0);if(M)return M(re,!0);var k=new Error("Cannot find module '"+re+"'");throw k.code="MODULE_NOT_FOUND",k}var S=y[re]={exports:{}};p[re][0].call(S.exports,function(N){var ie=p[re][1][N];return m(ie||N)},S,S.exports,s,p,y,E)}return y[re].exports}for(var M=typeof zt=="function"&&zt,ne=0;ne<E.length;ne++)m(E[ne]);return m}return s})()({1:[function(s,p,y){const E=s("./utils"),m=(function(){const M=E.stringToArray,ne=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],re=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],fe=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],I=["Thousand","Million","Billion","Trillion"];function k(h,w){var g=function(P,C,A){var _="";if(P<=19)_=(C?" and ":"")+(A?re[P]:ne[P]);else if(P<100){const de=Math.floor(P/10),ge=P%10;_=(C?" and ":"")+fe[de-2],ge>0?_+="-"+g(ge,!1,A):A&&(_=_.substring(0,_.length-1)+"ieth")}else if(P<1e3){const de=Math.floor(P/100),ge=P%100;_=(C?", ":"")+ne[de]+" Hundred",ge>0?_+=g(ge,!0,A):A&&(_+="th")}else{var H=Math.floor(Math.log10(P)/3);H>I.length&&(H=I.length);const de=Math.pow(10,H*3),ge=Math.floor(P/de),q=P-ge*de;_=(C?", ":"")+g(ge,!1,!1)+" "+I[H-1],q>0?_+=g(q,!0,A):A&&(_+="th")}return _},D=g(h,!1,w);return D}const S={};ne.forEach(function(h,w){S[h.toLowerCase()]=w}),re.forEach(function(h,w){S[h.toLowerCase()]=w}),fe.forEach(function(h,w){const g=h.toLowerCase();S[g]=(w+2)*10,S[g.substring(0,h.length-1)+"ieth"]=S[g]}),S.hundredth=100,I.forEach(function(h,w){const g=h.toLowerCase(),D=Math.pow(10,(w+1)*3);S[g]=D,S[g+"th"]=D});function N(h){const g=h.split(/,\s|\sand\s|[\s\\-]/).map(C=>S[C]);let D=[0];return g.forEach(C=>{if(C<100){let A=D.pop();A>=1e3&&(D.push(A),A=0),D.push(A+C)}else D.push(D.pop()*C)}),D.reduce((C,A)=>C+A,0)}const ie=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],me={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function be(h){for(var w=0;w<ie.length;w++){const g=ie[w];if(h>=g[0])return g[1]+be(h-g[0])}return""}function B(h){for(var w=0,g=1,D=h.length-1;D>=0;D--){const P=h[D],C=me[P];C<g?w-=C:(g=C,w+=C)}return w}function T(h,w){for(var g=[],D=w.charCodeAt(0);h>0;)g.unshift(String.fromCharCode((h-1)%26+D)),h=Math.floor((h-1)/26);return g.join("")}function ee(h,w){for(var g=w.charCodeAt(0),D=0,P=0;P<h.length;P++)D+=(h.charCodeAt(h.length-P-1)-g+1)*Math.pow(26,P);return D}function U(h,w){if(typeof h>"u")return;h=Math.floor(h);const g=pe(w);return j(h,g)}const b={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},L={UPPER:"upper",LOWER:"lower",TITLE:"title"};function j(h,w){let g;const D=h<0;switch(h=Math.abs(h),w.primary){case b.LETTERS:g=T(h,w.case===L.UPPER?"A":"a");break;case b.ROMAN:g=be(h),w.case===L.UPPER&&(g=g.toUpperCase());break;case b.WORDS:g=k(h,w.ordinal),w.case===L.UPPER?g=g.toUpperCase():w.case===L.LOWER&&(g=g.toLowerCase());break;case b.DECIMAL:g=""+h;var P=w.mandatoryDigits-g.length;if(P>0){var C=new Array(P+1).join("0");g=C+g}if(w.zeroCode!==48&&(g=M(g).map(de=>String.fromCodePoint(de.codePointAt(0)+w.zeroCode-48)).join("")),w.regular){const de=Math.floor((g.length-1)/w.groupingSeparators.position);for(let ge=de;ge>0;ge--){const q=g.length-ge*w.groupingSeparators.position;g=g.substr(0,q)+w.groupingSeparators.character+g.substr(q)}}else w.groupingSeparators.reverse().forEach(de=>{const ge=g.length-de.position;g=g.substr(0,ge)+de.character+g.substr(ge)});if(w.ordinal){var A={1:"st",2:"nd",3:"rd"},_=g[g.length-1],H=A[_];(!H||g.length>1&&g[g.length-2]==="1")&&(H="th"),g=g+H}break;case b.SEQUENCE:throw{code:"D3130",value:w.token}}return D&&(g="-"+g),g}const se=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function pe(h){const w={type:"integer",primary:b.DECIMAL,case:L.LOWER,ordinal:!1};let g,D;const P=h.lastIndexOf(";");switch(P===-1?g=h:(g=h.substring(0,P),D=h.substring(P+1),D[0]==="o"&&(w.ordinal=!0)),g){case"A":w.case=L.UPPER;case"a":w.primary=b.LETTERS;break;case"I":w.case=L.UPPER;case"i":w.primary=b.ROMAN;break;case"W":w.case=L.UPPER,w.primary=b.WORDS;break;case"Ww":w.case=L.TITLE,w.primary=b.WORDS;break;case"w":w.primary=b.WORDS;break;default:{let C=null,A=0,_=0,H=[],de=0;if(M(g).map(q=>q.codePointAt(0)).reverse().forEach(q=>{let X=!1;for(let le=0;le<se.length;le++){const V=se[le];if(q>=V&&q<=V+9){if(X=!0,A++,de++,C===null)C=V;else if(V!==C)throw{code:"D3131"};break}}X||(q===35?(de++,_++):H.push({position:de,character:String.fromCodePoint(q)}))}),A>0){w.primary=b.DECIMAL,w.zeroCode=C,w.mandatoryDigits=A,w.optionalDigits=_;const X=function(le){if(le.length===0)return 0;const V=le[0].character;for(let _e=1;_e<le.length;_e++)if(le[_e].character!==V)return 0;const Le=le.map(_e=>_e.position),Ze=function(_e,ze){return ze===0?_e:Ze(ze,_e%ze)},je=Le.reduce(Ze);for(let _e=1;_e<=Le.length;_e++)if(Le.indexOf(_e*je)===-1)return 0;return je}(H);X>0?(w.regular=!0,w.groupingSeparators={position:X,character:H[0].character}):(w.regular=!1,w.groupingSeparators=H)}else w.primary=b.SEQUENCE,w.token=g}}return w}const Q={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function x(h){var w=[];const g={type:"datetime",parts:w},D=function(X,le){if(le>X){let V=h.substring(X,le);V=V.split("]]").join("]"),w.push({type:"literal",value:V})}};for(var P=0,C=0;C<h.length;){if(h.charAt(C)==="["){if(h.charAt(C+1)==="["){D(P,C),w.push({type:"literal",value:"["}),C+=2,P=C;continue}if(D(P,C),P=C,C=h.indexOf("]",P),C===-1)throw{code:"D3135"};let X=h.substring(P+1,C);X=X.split(/\s+/).join("");var A={type:"marker",component:X.charAt(0)},_=X.lastIndexOf(","),H;if(_!==-1){const le=X.substring(_+1),V=le.indexOf("-");let Le,Ze;const je=function(ze){if(!(typeof ze>"u"||ze==="*"))return parseInt(ze)};V===-1?Le=le:(Le=le.substring(0,V),Ze=le.substring(V+1));const _e={min:je(Le),max:je(Ze)};A.width=_e,H=X.substring(1,_)}else H=X.substring(1);if(H.length===1)A.presentation1=H;else if(H.length>1){var de=H.charAt(H.length-1);"atco".indexOf(de)!==-1?(A.presentation2=de,de==="o"&&(A.ordinal=!0),A.presentation1=H.substring(0,H.length-1)):A.presentation1=H}else A.presentation1=Q[A.component];if(typeof A.presentation1>"u")throw{code:"D3132",value:A.component};if(A.presentation1[0]==="n")A.names=L.LOWER;else if(A.presentation1[0]==="N")A.presentation1[1]==="n"?A.names=L.TITLE:A.names=L.UPPER;else if("YMDdFWwXxHhmsf".indexOf(A.component)!==-1){var ge=A.presentation1;if(A.presentation2&&(ge+=";"+A.presentation2),A.integerFormat=pe(ge),A.width&&A.width.min!==void 0&&A.integerFormat.mandatoryDigits<A.width.min&&(A.integerFormat.mandatoryDigits=A.width.min),A.component==="Y")if(A.n=-1,A.width&&A.width.max!==void 0)A.n=A.width.max,A.integerFormat.mandatoryDigits=A.n;else{var q=A.integerFormat.mandatoryDigits+A.integerFormat.optionalDigits;q>=2&&(A.n=q)}const le=w[w.length-1];le&&le.integerFormat&&(le.integerFormat.parseWidth=le.integerFormat.mandatoryDigits)}(A.component==="Z"||A.component==="z")&&(A.integerFormat=pe(A.presentation1)),w.push(A),P=C+1}C++}return D(P,C),g}const W=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],K=["January","February","March","April","May","June","July","August","September","October","November","December"],oe=1e3*60*60*24,J=function(h){const w=Date.UTC(h.year,h.month);var g=new Date(w).getUTCDay();return g===0&&(g=7),g>4?w+(8-g)*oe:w-(g-1)*oe},z=function(h,w){return{year:h,month:w,nextMonth:function(){return w===11?z(h+1,0):z(h,w+1)},previousMonth:function(){return w===0?z(h-1,11):z(h,w-1)},nextYear:function(){return z(h+1,w)},previousYear:function(){return z(h-1,w)}}},Y=function(h,w){return(w-h)/(oe*7)+1},F=(h,w)=>{let g;switch(w){case"Y":g=h.getUTCFullYear();break;case"M":g=h.getUTCMonth()+1;break;case"D":g=h.getUTCDate();break;case"d":{const D=Date.UTC(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()),P=Date.UTC(h.getUTCFullYear(),0);g=(D-P)/oe+1;break}case"F":g=h.getUTCDay(),g===0&&(g=7);break;case"W":{const D=z(h.getUTCFullYear(),0),P=J(D),C=Date.UTC(D.year,h.getUTCMonth(),h.getUTCDate());let A=Y(P,C);if(A>52){const _=J(D.nextYear());C>=_&&(A=1)}else if(A<1){const _=J(D.previousYear());A=Y(_,C)}g=Math.floor(A);break}case"w":{const D=z(h.getUTCFullYear(),h.getUTCMonth()),P=J(D),C=Date.UTC(D.year,D.month,h.getUTCDate());let A=Y(P,C);if(A>4){const _=J(D.nextMonth());C>=_&&(A=1)}else if(A<1){const _=J(D.previousMonth());A=Y(_,C)}g=Math.floor(A);break}case"X":{const D=z(h.getUTCFullYear(),0),P=J(D),C=J(D.nextYear()),A=h.getTime();A<P?g=D.year-1:A>=C?g=D.year+1:g=D.year;break}case"x":{const D=z(h.getUTCFullYear(),h.getUTCMonth()),P=J(D),C=D.nextMonth(),A=J(C),_=h.getTime();_<P?g=D.previousMonth().month+1:_>=A?g=C.month+1:g=D.month+1;break}case"H":g=h.getUTCHours();break;case"h":g=h.getUTCHours(),g=g%12,g===0&&(g=12);break;case"P":g=h.getUTCHours()>=12?"pm":"am";break;case"m":g=h.getUTCMinutes();break;case"s":g=h.getUTCSeconds();break;case"f":g=h.getUTCMilliseconds();break;case"Z":case"z":break;case"C":g="ISO";break;case"E":g="ISO";break}return g};let he=null;function $e(h,w,g){var D=0,P=0;if(typeof g<"u"){const ge=parseInt(g);D=Math.floor(ge/100),P=ge%100}var C=function(ge,q){var X=F(ge,q.component);if("YMDdFWwXxHhms".indexOf(q.component)!==-1)if(q.component==="Y"&&q.n!==-1&&(X=X%Math.pow(10,q.n)),q.names){if(q.component==="M"||q.component==="x")X=K[X-1];else if(q.component==="F")X=W[X];else throw{code:"D3133",value:q.component};q.names===L.UPPER?X=X.toUpperCase():q.names===L.LOWER&&(X=X.toLowerCase()),q.width&&X.length>q.width.max&&(X=X.substring(0,q.width.max))}else X=j(X,q.integerFormat);else if(q.component==="f")X=j(X,q.integerFormat);else if(q.component==="Z"||q.component==="z"){const le=D*100+P;if(q.integerFormat.regular)X=j(le,q.integerFormat);else{const V=q.integerFormat.mandatoryDigits;if(V===1||V===2)X=j(D,q.integerFormat),P!==0&&(X+=":"+U(P,"00"));else if(V===3||V===4)X=j(le,q.integerFormat);else throw{code:"D3134",value:V}}le>=0&&(X="+"+X),q.component==="z"&&(X="GMT"+X),le===0&&q.presentation2==="t"&&(X="Z")}else q.component==="P"&&q.names===L.UPPER&&(X=X.toUpperCase());return X};let A;typeof w>"u"?(he===null&&(he=x("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),A=he):A=x(w);const _=(60*D+P)*60*1e3,H=new Date(h+_);let de="";return A.parts.forEach(function(ge){ge.type==="literal"?de+=ge.value:de+=C(H,ge)}),de}function i(h){var w={};if(h.type==="datetime")w.type="datetime",w.parts=h.parts.map(function(g){var D={};if(g.type==="literal")D.regex=g.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(g.component==="Z"||g.component==="z"){let C;Array.isArray(g.integerFormat.groupingSeparators)||(C=g.integerFormat.groupingSeparators),D.regex="",g.component==="z"&&(D.regex="GMT"),D.regex+="[-+][0-9]+",C&&(D.regex+=C.character+"[0-9]+"),D.parse=function(A){g.component==="z"&&(A=A.substring(3));let _=0,H=0;return C?(_=Number.parseInt(A.substring(0,A.indexOf(C.character))),H=Number.parseInt(A.substring(A.indexOf(C.character)+1))):A.length-1<=2?_=Number.parseInt(A):(_=Number.parseInt(A.substring(0,3)),H=Number.parseInt(A.substring(3))),_*60+H}}else if(g.integerFormat)D=i(g.integerFormat);else{D.regex="[a-zA-Z]+";var P={};if(g.component==="M"||g.component==="x")K.forEach(function(C,A){g.width&&g.width.max?P[C.substring(0,g.width.max)]=A+1:P[C]=A+1});else if(g.component==="F")W.forEach(function(C,A){A>0&&(g.width&&g.width.max?P[C.substring(0,g.width.max)]=A:P[C]=A)});else if(g.component==="P")P={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:g.component};D.parse=function(C){return P[C]}}return D.component=g.component,D});else{w.type="integer";const g=h.case===L.UPPER;switch(h.primary){case b.LETTERS:w.regex=g?"[A-Z]+":"[a-z]+",w.parse=function(D){return ee(D,g?"A":"a")};break;case b.ROMAN:w.regex=g?"[MDCLXVI]+":"[mdclxvi]+",w.parse=function(D){return B(g?D:D.toUpperCase())};break;case b.WORDS:w.regex="(?:"+Object.keys(S).concat("and","[\\-, ]").join("|")+")+",w.parse=function(D){return N(D.toLowerCase())};break;case b.DECIMAL:w.regex="[0-9]",h.parseWidth?w.regex+=`{${h.parseWidth}}`:w.regex+="+",h.ordinal&&(w.regex+="(?:th|st|nd|rd)"),w.parse=function(D){let P=D;return h.ordinal&&(P=D.substring(0,D.length-2)),h.regular?P=P.split(",").join(""):h.groupingSeparators.forEach(C=>{P=P.split(C.character).join("")}),h.zeroCode!==48&&(P=P.split("").map(C=>String.fromCodePoint(C.codePointAt(0)-h.zeroCode+48)).join("")),parseInt(P)};break;case b.SEQUENCE:throw{code:"D3130",value:h.token}}}return w}function l(h,w){if(typeof h>"u")return;const g=pe(w);return i(g).parse(h)}function $(h,w){const g=x(w),D=i(g),P="^"+D.parts.map(H=>"("+H.regex+")").join("")+"$";var A=new RegExp(P,"i").exec(h);if(A!==null){const V={};for(let ke=1;ke<A.length;ke++){const r=D.parts[ke-1];r.parse&&(V[r.component]=r.parse(A[ke]))}if(Object.getOwnPropertyNames(V).length===0)return;let Le=0;const Ze=ke=>{Le<<=1,Le+=ke?1:0},je=ke=>!(~ke&Le)&&!!(ke&Le);"YXMxWwdD".split("").forEach(ke=>Ze(V[ke]));const ze=!je(161)&&je(130),ot=je(84),ct=!ot&&je(72);Le=0,"PHhmsf".split("").forEach(ke=>Ze(V[ke]));const lt=!je(23)&&je(47),Dt=(ze?"YD":ot?"XxwF":ct?"XWF":"YMD")+(lt?"Phmsf":"Hmsf"),Xe=this.environment.timestamp;let yt=!1,nt=!1;if(Dt.split("").forEach(ke=>{if(typeof V[ke]>"u")yt?(V[ke]="MDd".indexOf(ke)!==-1?1:0,nt=!0):V[ke]=F(Xe,ke);else if(yt=!0,nt)throw{code:"D3136"}}),V.M>0?V.M-=1:V.M=0,ze){const ke=Date.UTC(V.Y,0),r=(V.d-1)*1e3*60*60*24,c=new Date(ke+r);V.M=c.getUTCMonth(),V.D=c.getUTCDate()}if(ot)throw{code:"D3136"};if(ct)throw{code:"D3136"};lt&&(V.H=V.h===12?0:V.h,V.P===1&&(V.H+=12));var _=Date.UTC(V.Y,V.M,V.D,V.H,V.m,V.s,V.f);return(V.Z||V.z)&&(_-=(V.Z||V.z)*60*1e3),_}}var ae=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ae(h,w){if(!(typeof h>"u"))if(typeof w>"u"){if(!ae.test(h))throw{stack:new Error().stack,code:"D3110",value:h};return Date.parse(h)}else return $.call(this,h,w)}function ve(h,w,g){if(!(typeof h>"u"))return $e.call(this,h,w,g)}return{formatInteger:U,parseInteger:l,fromMillis:ve,toMillis:Ae}})();p.exports=m},{"./utils":6}],2:[function(s,p,y){(function(E){(function(){var m=s("./utils");const M=(()=>{var ne=m.isNumeric,re=m.isArrayOfStrings,fe=m.isArrayOfNumbers,I=m.createSequence,k=m.isSequence,S=m.isFunction,N=m.isLambda,ie=m.isPromise,me=m.getFunctionArity,be=m.isDeepEqual,B=m.stringToArray;function T(e){if(!(typeof e>"u")){var t=0;return e.forEach(function(a){t+=a}),t}}function ee(e){return typeof e>"u"?0:e.length}function U(e){if(!(typeof e>"u"||e.length===0))return Math.max.apply(Math,e)}function b(e){if(!(typeof e>"u"||e.length===0))return Math.min.apply(Math,e)}function L(e){if(!(typeof e>"u"||e.length===0)){var t=0;return e.forEach(function(a){t+=a}),t/e.length}}function j(e,t=!1){if(!(typeof e>"u")){var a;if(typeof e=="string")a=e;else if(S(e))a="";else{if(typeof e=="number"&&!isFinite(e))throw{code:"D3001",value:e,stack:new Error().stack};var f=t?2:0;Array.isArray(e)&&e.outerWrapper&&(e=e[0]),a=JSON.stringify(e,function(u,v){return typeof v<"u"&&v!==null&&v.toPrecision&&ne(v)?Number(v.toPrecision(15)):v&&S(v)?"":v},f)}return a}}function se(e,t,a){if(!(typeof e>"u")){var f=B(e),u=f.length;if(u+t<0&&(t=0),typeof a<"u"){if(a<=0)return"";var v=t>=0?t+a:u+t+a;return f.slice(t,v).join("")}return f.slice(t).join("")}}function pe(e,t){if(!(typeof e>"u")){var a=e.indexOf(t);return a>-1?e.substr(0,a):e}}function Q(e,t){if(!(typeof e>"u")){var a=e.indexOf(t);return a>-1?e.substr(a+t.length):e}}function x(e){if(!(typeof e>"u"))return e.toLowerCase()}function W(e){if(!(typeof e>"u"))return e.toUpperCase()}function K(e){if(!(typeof e>"u"))return B(e).length}function oe(e){if(!(typeof e>"u")){var t=e.replace(/[ \t\n\r]+/gm," ");return t.charAt(0)===" "&&(t=t.substring(1)),t.charAt(t.length-1)===" "&&(t=t.substring(0,t.length-1)),t}}function J(e,t,a){if(!(typeof e>"u")){(typeof a>"u"||a.length===0)&&(a=" ");var f;t=Math.trunc(t);var u=Math.abs(t)-K(e);if(u>0){var v=new Array(u+1).join(a);a.length>1&&(v=se(v,0,u)),t>0?f=e+v:f=v+e}else f=e;return f}}async function z(e,t){var a=e.apply(this,[t]);if(ie(a)&&(a=await a),a&&!(typeof a.start=="number"||a.end==="number"||Array.isArray(a.groups)||S(a.next)))throw{code:"T1010",stack:new Error().stack};return a}async function Y(e,t){if(!(typeof e>"u")){var a;if(typeof t=="string")a=e.indexOf(t)!==-1;else{var f=await z(t,e);a=typeof f<"u"}return a}}async function F(e,t,a){if(!(typeof e>"u")){if(a<0)throw{stack:new Error().stack,value:a,code:"D3040",index:3};var f=I();if(typeof a>"u"||a>0){var u=0,v=await z(t,e);if(typeof v<"u")for(;typeof v<"u"&&(typeof a>"u"||u<a);)f.push({match:v.match,index:v.start,groups:v.groups}),v=await z(v.next),u++}return f}}async function he(e,t,a,f){if(!(typeof e>"u")){var u=this;if(t==="")throw{code:"D3010",stack:new Error().stack,value:t,index:2};if(f<0)throw{code:"D3011",stack:new Error().stack,value:f,index:4};var v;typeof a=="string"?v=function(we){for(var Ue="",ye=0,Te=a.indexOf("$",ye);Te!==-1&&ye<a.length;){Ue+=a.substring(ye,Te),ye=Te+1;var Ke=a.charAt(ye);if(Ke==="$")Ue+="$",ye++;else if(Ke==="0")Ue+=we.match,ye++;else{var Re;if(we.groups.length===0?Re=1:Re=Math.floor(Math.log(we.groups.length)*Math.LOG10E)+1,Te=parseInt(a.substring(ye,ye+Re),10),Re>1&&Te>we.groups.length&&(Te=parseInt(a.substring(ye,ye+Re-1),10)),isNaN(Te))Ue+="$";else{if(we.groups.length>0){var vt=we.groups[Te-1];typeof vt<"u"&&(Ue+=vt)}ye+=Te.toString().length}}Te=a.indexOf("$",ye)}return Ue+=a.substring(ye),Ue}:v=a;var O="",G=0;if(typeof f>"u"||f>0){var Z=0;if(typeof t=="string"){for(var Ee=e.indexOf(t,G);Ee!==-1&&(typeof f>"u"||Z<f);)O+=e.substring(G,Ee),O+=a,G=Ee+t.length,Z++,Ee=e.indexOf(t,G);O+=e.substring(G)}else{var ue=await z(t,e);if(typeof ue<"u"){for(;typeof ue<"u"&&(typeof f>"u"||Z<f);){O+=e.substring(G,ue.start);var xe=v.apply(u,[ue]);if(ie(xe)&&(xe=await xe),typeof xe=="string")O+=xe;else throw{code:"D3012",stack:new Error().stack,value:xe};G=ue.start+ue.match.length,Z++,ue=await z(ue.next)}O+=e.substring(G)}else O=e}}else O=e;return O}}function $e(e){if(!(typeof e>"u")){var t=typeof window<"u"?window.btoa:function(a){return new E.Buffer.from(a,"binary").toString("base64")};return t(e)}}function i(e){if(!(typeof e>"u")){var t=typeof window<"u"?window.atob:function(a){return new E.Buffer.from(a,"base64").toString("binary")};return t(e)}}function l(e){if(!(typeof e>"u")){var t;try{t=encodeURIComponent(e)}catch{throw{code:"D3140",stack:new Error().stack,value:e,functionName:"encodeUrlComponent"}}return t}}function $(e){if(!(typeof e>"u")){var t;try{t=encodeURI(e)}catch{throw{code:"D3140",stack:new Error().stack,value:e,functionName:"encodeUrl"}}return t}}function ae(e){if(!(typeof e>"u")){var t;try{t=decodeURIComponent(e)}catch{throw{code:"D3140",stack:new Error().stack,value:e,functionName:"decodeUrlComponent"}}return t}}function Ae(e){if(!(typeof e>"u")){var t;try{t=decodeURI(e)}catch{throw{code:"D3140",stack:new Error().stack,value:e,functionName:"decodeUrl"}}return t}}async function ve(e,t,a){if(!(typeof e>"u")){if(a<0)throw{code:"D3020",stack:new Error().stack,value:a,index:3};var f=[];if(typeof a>"u"||a>0)if(typeof t=="string")f=e.split(t,a);else{var u=0,v=await z(t,e);if(typeof v<"u"){for(var O=0;typeof v<"u"&&(typeof a>"u"||u<a);)f.push(e.substring(O,v.start)),O=v.end,v=await z(v.next),u++;(typeof a>"u"||u<a)&&f.push(e.substring(O))}else f.push(e)}return f}}function h(e,t){if(!(typeof e>"u"))return typeof t>"u"&&(t=""),e.join(t)}function w(e,t,a){if(!(typeof e>"u")){var f={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},u=f;typeof a<"u"&&Object.keys(a).forEach(function(te){u[te]=a[te]});for(var v=[],O=u["zero-digit"].charCodeAt(0),G=O;G<O+10;G++)v.push(String.fromCharCode(G));var Z=v.concat([u["decimal-separator"],u["exponent-separator"],u["grouping-separator"],u.digit,u["pattern-separator"]]),Ee=t.split(u["pattern-separator"]);if(Ee.length>2)throw{code:"D3080",stack:new Error().stack};var ue=function(te){var De=(function(){for(var Ie,He=0;He<te.length;He++)if(Ie=te.charAt(He),Z.indexOf(Ie)!==-1&&Ie!==u["exponent-separator"])return te.substring(0,He)})(),Ge=(function(){for(var Ie,He=te.length-1;He>=0;He--)if(Ie=te.charAt(He),Z.indexOf(Ie)!==-1&&Ie!==u["exponent-separator"])return te.substring(He+1)})(),Se=te.substring(De.length,te.length-Ge.length),Be,ut,qe,ht,Je=te.indexOf(u["exponent-separator"],De.length);Je===-1||Je>te.length-Ge.length?(Be=Se,ut=void 0):(Be=Se.substring(0,Je),ut=Se.substring(Je+1));var et=Be.indexOf(u["decimal-separator"]);return et===-1?(qe=Be,ht=Ge):(qe=Be.substring(0,et),ht=Be.substring(et+1)),{prefix:De,suffix:Ge,activePart:Se,mantissaPart:Be,exponentPart:ut,integerPart:qe,fractionalPart:ht,subpicture:te}},xe=function(te){var De,Ge,Se=te.subpicture,Be=Se.indexOf(u["decimal-separator"]);Be!==Se.lastIndexOf(u["decimal-separator"])&&(De="D3081"),Se.indexOf(u.percent)!==Se.lastIndexOf(u.percent)&&(De="D3082"),Se.indexOf(u["per-mille"])!==Se.lastIndexOf(u["per-mille"])&&(De="D3083"),Se.indexOf(u.percent)!==-1&&Se.indexOf(u["per-mille"])!==-1&&(De="D3084");var ut=!1;for(Ge=0;Ge<te.mantissaPart.length;Ge++){var qe=te.mantissaPart.charAt(Ge);if(v.indexOf(qe)!==-1||qe===u.digit){ut=!0;break}}ut||(De="D3085");var ht=te.activePart.split("").map(function(Ie){return Z.indexOf(Ie)===-1?"p":"a"}).join("");ht.indexOf("p")!==-1&&(De="D3086"),Be!==-1?(Se.charAt(Be-1)===u["grouping-separator"]||Se.charAt(Be+1)===u["grouping-separator"])&&(De="D3087"):te.integerPart.charAt(te.integerPart.length-1)===u["grouping-separator"]&&(De="D3088"),Se.indexOf(u["grouping-separator"]+u["grouping-separator"])!==-1&&(De="D3089");var Je=te.integerPart.indexOf(u.digit);Je!==-1&&te.integerPart.substring(0,Je).split("").filter(function(Ie){return v.indexOf(Ie)>-1}).length>0&&(De="D3090"),Je=te.fractionalPart.lastIndexOf(u.digit),Je!==-1&&te.fractionalPart.substring(Je).split("").filter(function(Ie){return v.indexOf(Ie)>-1}).length>0&&(De="D3091");var et=typeof te.exponentPart=="string";if(et&&te.exponentPart.length>0&&(Se.indexOf(u.percent)!==-1||Se.indexOf(u["per-mille"])!==-1)&&(De="D3092"),et&&(te.exponentPart.length===0||te.exponentPart.split("").filter(function(Ie){return v.indexOf(Ie)===-1}).length>0)&&(De="D3093"),De)throw{code:De,stack:new Error().stack}},we=function(te){var De=function(Ne,$t){for(var Ot=[],it=Ne.indexOf(u["grouping-separator"]);it!==-1;){var jt=($t?Ne.substring(0,it):Ne.substring(it)).split("").filter(function(wt){return v.indexOf(wt)!==-1||wt===u.digit}).length;Ot.push(jt),it=te.integerPart.indexOf(u["grouping-separator"],it+1)}return Ot},Ge=De(te.integerPart),Se=function(Ne){if(Ne.length===0)return 0;for(var $t=function(jt,wt){return wt===0?jt:$t(wt,jt%wt)},Ot=Ne.reduce($t),it=1;it<=Ne.length;it++)if(Ne.indexOf(it*Ot)===-1)return 0;return Ot},Be=Se(Ge),ut=De(te.fractionalPart,!0),qe=te.integerPart.split("").filter(function(Ne){return v.indexOf(Ne)!==-1}).length,ht=qe,Je=te.fractionalPart.split(""),et=Je.filter(function(Ne){return v.indexOf(Ne)!==-1}).length,Ie=Je.filter(function(Ne){return v.indexOf(Ne)!==-1||Ne===u.digit}).length,He=typeof te.exponentPart=="string";qe===0&&Ie===0&&(He?(et=1,Ie=1):qe=1),He&&qe===0&&te.integerPart.indexOf(u.digit)!==-1&&(qe=1),qe===0&&et===0&&(et=1);var an=0;return He&&(an=te.exponentPart.split("").filter(function(Ne){return v.indexOf(Ne)!==-1}).length),{integerPartGroupingPositions:Ge,regularGrouping:Be,minimumIntegerPartSize:qe,scalingFactor:ht,prefix:te.prefix,fractionalPartGroupingPositions:ut,minimumFactionalPartSize:et,maximumFactionalPartSize:Ie,minimumExponentSize:an,suffix:te.suffix,picture:te.subpicture}},Ue=Ee.map(ue);Ue.forEach(xe);var ye=Ue.map(we),Te=u["minus-sign"],Ke=u["zero-digit"],Re=u["decimal-separator"],vt=u["grouping-separator"];ye.length===1&&(ye.push(JSON.parse(JSON.stringify(ye[0]))),ye[1].prefix=Te+ye[1].prefix);var Me;e>=0?Me=ye[0]:Me=ye[1];var Tt;Me.picture.indexOf(u.percent)!==-1?Tt=e*100:Me.picture.indexOf(u["per-mille"])!==-1?Tt=e*1e3:Tt=e;var pt,bt;if(Me.minimumExponentSize===0)pt=Tt;else{var In=Math.pow(10,Me.scalingFactor),Pn=Math.pow(10,Me.scalingFactor-1);for(pt=Tt,bt=0;pt<Pn;)pt*=10,bt-=1;for(;pt>In;)pt/=10,bt+=1}var Ln=_(pt,Me.maximumFactionalPartSize),nn=function(te,De){var Ge=Math.abs(te).toFixed(De);return Ke!=="0"&&(Ge=Ge.split("").map(function(Se){return Se>="0"&&Se<="9"?v[Se.charCodeAt(0)-48]:Se}).join("")),Ge},ce=nn(Ln,Me.maximumFactionalPartSize),We=ce.indexOf(".");for(We===-1?ce=ce+Re:ce=ce.replace(".",Re);ce.charAt(0)===Ke;)ce=ce.substring(1);for(;ce.charAt(ce.length-1)===Ke;)ce=ce.substring(0,ce.length-1);We=ce.indexOf(Re);var Mt=Me.minimumIntegerPartSize-We,rn=Me.minimumFactionalPartSize-(ce.length-We-1);if(ce=(Mt>0?new Array(Mt+1).join(Ke):"")+ce,ce=ce+(rn>0?new Array(rn+1).join(Ke):""),We=ce.indexOf(Re),Me.regularGrouping>0)for(var Un=Math.floor((We-1)/Me.regularGrouping),Rt=1;Rt<=Un;Rt++)ce=[ce.slice(0,We-Rt*Me.regularGrouping),vt,ce.slice(We-Rt*Me.regularGrouping)].join("");else Me.integerPartGroupingPositions.forEach(function(te){ce=[ce.slice(0,We-te),vt,ce.slice(We-te)].join(""),We++});if(We=ce.indexOf(Re),Me.fractionalPartGroupingPositions.forEach(function(te){ce=[ce.slice(0,te+We+1),vt,ce.slice(te+We+1)].join("")}),We=ce.indexOf(Re),(Me.picture.indexOf(Re)===-1||We===ce.length-1)&&(ce=ce.substring(0,ce.length-1)),typeof bt<"u"){var Nt=nn(bt,0);Mt=Me.minimumExponentSize-Nt.length,Mt>0&&(Nt=new Array(Mt+1).join(Ke)+Nt),ce=ce+u["exponent-separator"]+(bt<0?Te:"")+Nt}return ce=Me.prefix+ce+Me.suffix,ce}}function g(e,t){if(!(typeof e>"u")){if(e=_(e),typeof t>"u"?t=10:t=_(t),t<2||t>36)throw{code:"D3100",stack:new Error().stack,value:t};var a=e.toString(t);return a}}function D(e){var t;if(!(typeof e>"u")){if(typeof e=="number")t=e;else if(typeof e=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(e)&&!isNaN(parseFloat(e))&&isFinite(e))t=parseFloat(e);else if(typeof e=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(e))t=Number(e);else if(e===!0)t=1;else if(e===!1)t=0;else throw{code:"D3030",value:e,stack:new Error().stack,index:1};return t}}function P(e){var t;if(!(typeof e>"u"))return t=Math.abs(e),t}function C(e){var t;if(!(typeof e>"u"))return t=Math.floor(e),t}function A(e){var t;if(!(typeof e>"u"))return t=Math.ceil(e),t}function _(e,t){var a;if(!(typeof e>"u")){if(t){var f=e.toString().split("e");e=+(f[0]+"e"+(f[1]?+f[1]+t:t))}a=Math.round(e);var u=a-e;return Math.abs(u)===.5&&Math.abs(a%2)===1&&(a=a-1),t&&(f=a.toString().split("e"),a=+(f[0]+"e"+(f[1]?+f[1]-t:-t))),Object.is(a,-0)&&(a=0),a}}function H(e){var t;if(!(typeof e>"u")){if(e<0)throw{stack:new Error().stack,code:"D3060",index:1,value:e};return t=Math.sqrt(e),t}}function de(e,t){var a;if(!(typeof e>"u")){if(a=Math.pow(e,t),!isFinite(a))throw{stack:new Error().stack,code:"D3061",index:1,value:e,exp:t};return a}}function ge(){return Math.random()}function q(e){if(!(typeof e>"u")){var t=!1;if(Array.isArray(e)){if(e.length===1)t=q(e[0]);else if(e.length>1){var a=e.filter(function(f){return q(f)});t=a.length>0}}else typeof e=="string"?e.length>0&&(t=!0):ne(e)?e!==0&&(t=!0):e!==null&&typeof e=="object"&&!S(e)?Object.keys(e).length>0&&(t=!0):typeof e=="boolean"&&e===!0&&(t=!0);return t}}function X(e){if(!(typeof e>"u"))return!q(e)}function le(e,t,a,f){var u=[t],v=me(e);return v>=2&&u.push(a),v>=3&&u.push(f),u}async function V(e,t){if(!(typeof e>"u")){for(var a=I(),f=0;f<e.length;f++){var u=le(t,e[f],f,e),v=await t.apply(this,u);typeof v<"u"&&a.push(v)}return a}}async function Le(e,t){if(!(typeof e>"u")){for(var a=I(),f=0;f<e.length;f++){var u=e[f],v=le(t,u,f,e),O=await t.apply(this,v);q(O)&&a.push(u)}return a}}async function Ze(e,t){if(!(typeof e>"u")){for(var a=!1,f,u=0;u<e.length;u++){var v=e[u],O=!0;if(typeof t<"u"){var G=le(t,v,u,e),Z=await t.apply(this,G);O=q(Z)}if(O)if(!a)f=v,a=!0;else throw{stack:new Error().stack,code:"D3138",index:u}}if(!a)throw{stack:new Error().stack,code:"D3139"};return f}}function je(){for(var e=[],t=Array.prototype.slice.call(arguments),a=Math.min.apply(Math,t.map(function(v){return Array.isArray(v)?v.length:0})),f=0;f<a;f++){var u=t.map(v=>v[f]);e.push(u)}return e}async function _e(e,t,a){if(!(typeof e>"u")){var f,u=me(t);if(u<2)throw{stack:new Error().stack,code:"D3050",index:1};var v;for(typeof a>"u"&&e.length>0?(f=e[0],v=1):(f=a,v=0);v<e.length;){var O=[f,e[v]];u>=3&&O.push(v),u>=4&&O.push(e),f=await t.apply(this,O),v++}return f}}function ze(e){var t=I();if(Array.isArray(e)){var a={};e.forEach(function(f){var u=ze(f);u.forEach(function(v){a[v]=!0})}),t=ze(a)}else e!==null&&typeof e=="object"&&!S(e)&&Object.keys(e).forEach(f=>t.push(f));return t}function ot(e,t){var a;if(Array.isArray(e)){a=I();for(var f=0;f<e.length;f++){var u=ot(e[f],t);typeof u<"u"&&(Array.isArray(u)?u.forEach(v=>a.push(v)):a.push(u))}}else e!==null&&typeof e=="object"&&!S(e)&&(a=e[t]);return a}function ct(e,t){return typeof e>"u"?t:typeof t>"u"?e:(Array.isArray(e)||(e=I(e)),Array.isArray(t)||(t=[t]),e.concat(t))}function Ut(e){return!(typeof e>"u")}function lt(e){var t=I();if(Array.isArray(e))e.forEach(function(u){t=ct(t,lt(u))});else if(e!==null&&typeof e=="object"&&!N(e))for(var a in e){var f={};f[a]=e[a],t.push(f)}else t=e;return t}function R(e){if(!(typeof e>"u")){var t={};return e.forEach(function(a){for(var f in a)t[f]=a[f]}),t}}function Ft(e){if(!(typeof e>"u")){if(e.length<=1)return e;for(var t=e.length,a=new Array(t),f=0;f<t;f++)a[t-f-1]=e[f];return a}}async function Dt(e,t){var a=I();for(var f in e){var u=le(t,e[f],f,e),v=await t.apply(this,u);typeof v<"u"&&a.push(v)}return a}function Xe(e){throw{code:"D3137",stack:new Error().stack,message:e||"$error() function evaluated"}}function yt(e,t){if(!e)throw{code:"D3141",stack:new Error().stack,message:t||"$assert() statement failed"}}function nt(e){if(e!==void 0)return e===null?"null":ne(e)?"number":typeof e=="string"?"string":typeof e=="boolean"?"boolean":Array.isArray(e)?"array":S(e)?"function":"object"}async function ke(e,t){if(!(typeof e>"u")){if(e.length<=1)return e;var a;if(typeof t>"u"){if(!fe(e)&&!re(e))throw{stack:new Error().stack,code:"D3070",index:1};a=async function(O,G){return O>G}}else a=t;var f=async function(O,G){var Z=async function(ue,xe,we){xe.length===0?Array.prototype.push.apply(ue,we):we.length===0?Array.prototype.push.apply(ue,xe):await a(xe[0],we[0])?(ue.push(we[0]),await Z(ue,xe,we.slice(1))):(ue.push(xe[0]),await Z(ue,xe.slice(1),we))},Ee=[];return await Z(Ee,O,G),Ee},u=async function(O){if(!Array.isArray(O)||O.length<=1)return O;var G=Math.floor(O.length/2),Z=O.slice(0,G),Ee=O.slice(G);return Z=await u(Z),Ee=await u(Ee),await f(Z,Ee)},v=await u(e);return v}}function r(e){if(!(typeof e>"u")){if(e.length<=1)return e;for(var t=new Array(e.length),a=0;a<e.length;a++){var f=Math.floor(Math.random()*(a+1));a!==f&&(t[a]=t[f]),t[f]=e[a]}return t}}function c(e){if(!(typeof e>"u")){if(!Array.isArray(e)||e.length<=1)return e;for(var t=k(e)?I():[],a=0;a<e.length;a++){for(var f=e[a],u=!1,v=0;v<t.length;v++)if(be(f,t[v])){u=!0;break}u||t.push(f)}return t}}async function d(e,t){var a={};for(var f in e){var u=e[f],v=le(t,u,f,e),O=await t.apply(this,v);q(O)&&(a[f]=u)}return Object.keys(a).length===0&&(a=void 0),a}return{sum:T,count:ee,max:U,min:b,average:L,string:j,substring:se,substringBefore:pe,substringAfter:Q,lowercase:x,uppercase:W,length:K,trim:oe,pad:J,match:F,contains:Y,replace:he,split:ve,join:h,formatNumber:w,formatBase:g,number:D,floor:C,ceil:A,round:_,abs:P,sqrt:H,power:de,random:ge,boolean:q,not:X,map:V,zip:je,filter:Le,single:Ze,foldLeft:_e,sift:d,keys:ze,lookup:ot,append:ct,exists:Ut,spread:lt,merge:R,reverse:Ft,each:Dt,error:Xe,assert:yt,type:nt,sort:ke,shuffle:r,distinct:c,base64encode:$e,base64decode:i,encodeUrlComponent:l,encodeUrl:$,decodeUrlComponent:ae,decodeUrl:Ae}})();p.exports=M}).call(this)}).call(this,typeof on<"u"?on:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(s,p,y){var E=s("./datetime"),m=s("./functions"),M=s("./utils"),ne=s("./parser"),re=s("./signature"),fe=(function(){var I=M.isNumeric,k=M.isArrayOfStrings,S=M.isArrayOfNumbers,N=M.createSequence,ie=M.isSequence,me=M.isFunction,be=M.isLambda,B=M.isIterable,T=M.isPromise,ee=M.getFunctionArity,U=M.isDeepEqual,b=Xe(null);async function L(r,c,d){var e,t=d.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(t&&await t(r,c,d),r.type){case"path":e=await j(r,c,d);break;case"binary":e=await K(r,c,d);break;case"unary":e=await oe(r,c,d);break;case"name":e=J(r,c);break;case"string":case"number":case"value":e=z(r);break;case"wildcard":e=Y(r,c);break;case"descendant":e=he(r,c);break;case"parent":e=d.lookup(r.slot.label);break;case"condition":e=await C(r,c,d);break;case"block":e=await A(r,c,d);break;case"bind":e=await P(r,c,d);break;case"regex":e=_(r);break;case"function":e=await le(r,c,d);break;case"variable":e=H(r,c,d);break;case"lambda":e=Ze(r,c,d);break;case"partial":e=await je(r,c,d);break;case"apply":e=await X(r,c,d);break;case"transform":e=ge(r,c,d);break}if(Object.prototype.hasOwnProperty.call(r,"predicate"))for(var a=0;a<r.predicate.length;a++)e=await W(r.predicate[a].expr,e,d);r.type!=="path"&&Object.prototype.hasOwnProperty.call(r,"group")&&(e=await w(r.group,e,d));var f=d.lookup(Symbol.for("jsonata.__evaluate_exit"));return f&&await f(r,c,d,e),e&&ie(e)&&!e.tupleStream&&(r.keepArray&&(e.keepSingleton=!0),e.length===0?e=void 0:e.length===1&&(e=e.keepSingleton?e:e[0])),e}async function j(r,c,d){var e;Array.isArray(c)&&r.steps[0].type!=="variable"?e=c:e=N(c);for(var t,a=!1,f=void 0,u=0;u<r.steps.length;u++){var v=r.steps[u];if(v.tuple&&(a=!0),u===0&&v.consarray?t=await L(v,e,d):a?f=await x(v,e,f,d):t=await pe(v,e,d,u===r.steps.length-1),!a&&(typeof t>"u"||t.length===0))break;typeof v.focus>"u"&&(e=t)}if(a)if(r.tuple)t=f;else for(t=N(),u=0;u<f.length;u++)t.push(f[u]["@"]);return r.keepSingletonArray&&(Array.isArray(t)&&t.cons&&!t.sequence&&(t=N(t)),t.keepSingleton=!0),r.hasOwnProperty("group")&&(t=await w(r.group,a?f:t,d)),t}function se(r,c){var d=Xe(r);for(const e in c)d.bind(e,c[e]);return d}async function pe(r,c,d,e){var t;if(r.type==="sort")return t=await de(r,c,d),r.stages&&(t=await Q(r.stages,t,d)),t;t=N();for(var a=0;a<c.length;a++){var f=await L(r,c[a],d);if(r.stages)for(var u=0;u<r.stages.length;u++)f=await W(r.stages[u].expr,f,d);typeof f<"u"&&t.push(f)}var v=N();return e&&t.length===1&&Array.isArray(t[0])&&!ie(t[0])?v=t[0]:t.forEach(function(O){!Array.isArray(O)||O.cons?v.push(O):O.forEach(G=>v.push(G))}),v}async function Q(r,c,d){for(var e=c,t=0;t<r.length;t++){var a=r[t];switch(a.type){case"filter":e=await W(a.expr,e,d);break;case"index":for(var f=0;f<e.length;f++){var u=e[f];u[a.value]=f}break}}return e}async function x(r,c,d,e){var t;if(r.type==="sort"){if(d)t=await de(r,d,e);else{var a=await de(r,c,e);t=N(),t.tupleStream=!0;for(var f=0;f<a.length;f++){var u={"@":a[f]};u[r.index]=f,t.push(u)}}return r.stages&&(t=await Q(r.stages,t,e)),t}t=N(),t.tupleStream=!0;var v=e;d===void 0&&(d=c.map(Ee=>({"@":Ee})));for(var O=0;O<d.length;O++){v=se(e,d[O]);var G=await L(r,d[O]["@"],v);if(typeof G<"u"){Array.isArray(G)||(G=[G]);for(var Z=0;Z<G.length;Z++)u={},Object.assign(u,d[O]),G.tupleStream?Object.assign(u,G[Z]):(r.focus?(u[r.focus]=G[Z],u["@"]=d[O]["@"]):u["@"]=G[Z],r.index&&(u[r.index]=Z),r.ancestor&&(u[r.ancestor.label]=d[O]["@"])),t.push(u)}}return r.stages&&(t=await Q(r.stages,t,e)),t}async function W(r,c,d){var e=N();if(c&&c.tupleStream&&(e.tupleStream=!0),Array.isArray(c)||(c=N(c)),r.type==="number"){var t=Math.floor(r.value);t<0&&(t=c.length+t);var a=await c[t];typeof a<"u"&&(Array.isArray(a)?e=a:e.push(a))}else for(t=0;t<c.length;t++){var a=c[t],f=a,u=d;c.tupleStream&&(f=a["@"],u=se(d,a));var v=await L(r,f,u);I(v)&&(v=[v]),S(v)?v.forEach(function(G){var Z=Math.floor(G);Z<0&&(Z=c.length+Z),Z===t&&e.push(a)}):m.boolean(v)&&e.push(a)}return e}async function K(r,c,d){var e,t=await L(r.lhs,c,d),a=r.value,f=async()=>await L(r.rhs,c,d);if(a==="and"||a==="or")try{return await Ae(t,f,a)}catch(v){throw v.position=r.position,v.token=a,v}var u=await f();try{switch(a){case"+":case"-":case"*":case"/":case"%":e=i(t,u,a);break;case"=":case"!=":e=l(t,u,a);break;case"<":case"<=":case">":case">=":e=$(t,u,a);break;case"&":e=h(t,u);break;case"..":e=D(t,u);break;case"in":e=ae(t,u);break}}catch(v){throw v.position=r.position,v.token=a,v}return e}async function oe(r,c,d){var e;switch(r.value){case"-":if(e=await L(r.expression,c,d),typeof e>"u")e=void 0;else if(I(e))e=-e;else throw{code:"D1002",stack:new Error().stack,position:r.position,token:r.value,value:e};break;case"[":e=[];let f=await Promise.all(r.expressions.map(async(u,v)=>(d.isParallelCall=v>0,[u,await L(u,c,d)])));for(let u of f){var[t,a]=u;typeof a<"u"&&(t.value==="["?e.push(a):e=m.append(e,a))}r.consarray&&Object.defineProperty(e,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":e=await w(r,c,d);break}return e}function J(r,c,d){return m.lookup(c,r.value)}function z(r){return r.value}function Y(r,c){var d=N();return Array.isArray(c)&&c.outerWrapper&&c.length>0&&(c=c[0]),c!==null&&typeof c=="object"&&Object.keys(c).forEach(function(e){var t=c[e];Array.isArray(t)?(t=F(t),d=m.append(d,t)):d.push(t)}),d}function F(r,c){return typeof c>"u"&&(c=[]),Array.isArray(r)?r.forEach(function(d){F(d,c)}):c.push(r),c}function he(r,c){var d,e=N();return typeof c<"u"&&($e(c,e),e.length===1?d=e[0]:d=e),d}function $e(r,c){Array.isArray(r)||c.push(r),Array.isArray(r)?r.forEach(function(d){$e(d,c)}):r!==null&&typeof r=="object"&&Object.keys(r).forEach(function(d){$e(r[d],c)})}function i(r,c,d){var e;if(typeof r<"u"&&!I(r))throw{code:"T2001",stack:new Error().stack,value:r};if(typeof c<"u"&&!I(c))throw{code:"T2002",stack:new Error().stack,value:c};if(typeof r>"u"||typeof c>"u")return e;switch(d){case"+":e=r+c;break;case"-":e=r-c;break;case"*":e=r*c;break;case"/":e=r/c;break;case"%":e=r%c;break}return e}function l(r,c,d){var e,t=typeof r,a=typeof c;if(t==="undefined"||a==="undefined")return!1;switch(d){case"=":e=U(r,c);break;case"!=":e=!U(r,c);break}return e}function $(r,c,d){var e,t=typeof r,a=typeof c,f=t==="undefined"||t==="string"||t==="number",u=a==="undefined"||a==="string"||a==="number";if(!f||!u)throw{code:"T2010",stack:new Error().stack,value:t==="string"||t==="number"?c:r};if(!(t==="undefined"||a==="undefined")){if(t!==a)throw{code:"T2009",stack:new Error().stack,value:r,value2:c};switch(d){case"<":e=r<c;break;case"<=":e=r<=c;break;case">":e=r>c;break;case">=":e=r>=c;break}return e}}function ae(r,c){var d=!1;if(typeof r>"u"||typeof c>"u")return!1;Array.isArray(c)||(c=[c]);for(var e=0;e<c.length;e++)if(c[e]===r){d=!0;break}return d}async function Ae(r,c,d){var e,t=ve(r);switch(d){case"and":e=t&&ve(await c());break;case"or":e=t||ve(await c());break}return e}function ve(r){var c=m.boolean(r);return typeof c>"u"?!1:c}function h(r,c){var d,e="",t="";return typeof r<"u"&&(e=m.string(r)),typeof c<"u"&&(t=m.string(c)),d=e.concat(t),d}async function w(r,c,d){var e={},t={},a=!!(c&&c.tupleStream);Array.isArray(c)||(c=N(c)),c.length===0&&c.push(void 0);for(var f=0;f<c.length;f++)for(var u=c[f],v=a?se(d,u):d,O=0;O<r.lhs.length;O++){var G=r.lhs[O],Z=await L(G[0],a?u["@"]:u,v);if(typeof Z!="string"&&Z!==void 0)throw{code:"T1003",stack:new Error().stack,position:r.position,value:Z};if(Z!==void 0){var Ee={data:u,exprIndex:O};if(t.hasOwnProperty(Z)){if(t[Z].exprIndex!==O)throw{code:"D1009",stack:new Error().stack,position:r.position,value:Z};t[Z].data=m.append(t[Z].data,u)}else t[Z]=Ee}}let ue=await Promise.all(Object.keys(t).map(async(we,Ue)=>{let ye=t[we];var Te=ye.data,Ke=d;if(a){var Re=g(ye.data);Te=Re["@"],delete Re["@"],Ke=se(d,Re)}return d.isParallelCall=Ue>0,[we,await L(r.lhs[ye.exprIndex][1],Te,Ke)]}));for(let we of ue){var[Z,xe]=await we;typeof xe<"u"&&(e[Z]=xe)}return e}function g(r){if(!Array.isArray(r))return r;var c={};Object.assign(c,r[0]);for(var d=1;d<r.length;d++)for(const e in r[d])c[e]=m.append(c[e],r[d][e]);return c}function D(r,c){var d;if(typeof r<"u"&&!Number.isInteger(r))throw{code:"T2003",stack:new Error().stack,value:r};if(typeof c<"u"&&!Number.isInteger(c))throw{code:"T2004",stack:new Error().stack,value:c};if(typeof r>"u"||typeof c>"u"||r>c)return d;var e=c-r+1;if(e>1e7)throw{code:"D2014",stack:new Error().stack,value:e};d=new Array(e);for(var t=r,a=0;t<=c;t++,a++)d[a]=t;return d.sequence=!0,d}async function P(r,c,d){var e=await L(r.rhs,c,d);return d.bind(r.lhs.value,e),e}async function C(r,c,d){var e,t=await L(r.condition,c,d);return m.boolean(t)?e=await L(r.then,c,d):typeof r.else<"u"&&(e=await L(r.else,c,d)),e}async function A(r,c,d){for(var e,t=Xe(d),a=0;a<r.expressions.length;a++)e=await L(r.expressions[a],c,t);return e}function _(r){var c=new ke.RegexEngine(r.value),d=function(e,t){var a;c.lastIndex=t||0;var f=c.exec(e);if(f!==null){if(a={match:f[0],start:f.index,end:f.index+f[0].length,groups:[]},f.length>1)for(var u=1;u<f.length;u++)a.groups.push(f[u]);a.next=function(){if(!(c.lastIndex>=e.length)){var v=d(e,c.lastIndex);if(v&&v.match==="")throw{code:"D1004",stack:new Error().stack,position:r.position,value:r.value.source};return v}}}return a};return d}function H(r,c,d){var e;return r.value===""?e=c&&c.outerWrapper?c[0]:c:e=d.lookup(r.value),e}async function de(r,c,d){var e,t=c,a=!!c.tupleStream,f=async function(v,O){for(var G=0,Z=0;G===0&&Z<r.terms.length;Z++){var Ee=r.terms[Z],ue=v,xe=d;a&&(ue=v["@"],xe=se(d,v));var we=await L(Ee.expression,ue,xe);ue=O,xe=d,a&&(ue=O["@"],xe=se(d,O));var Ue=await L(Ee.expression,ue,xe),ye=typeof we,Te=typeof Ue;if(ye==="undefined"){G=Te==="undefined"?0:1;continue}if(Te==="undefined"){G=-1;continue}if(!(ye==="string"||ye==="number")||!(Te==="string"||Te==="number"))throw{code:"T2008",stack:new Error().stack,position:r.position,value:ye==="string"||ye==="number"?Ue:we};if(ye!==Te)throw{code:"T2007",stack:new Error().stack,position:r.position,value:we,value2:Ue};we!==Ue&&(we<Ue?G=-1:G=1,Ee.descending===!0&&(G=-G))}return G===1},u={environment:d,input:c};return e=await m.sort.apply(u,[t,f]),e}function ge(r,c,d){var e=async function(t){if(!(typeof t>"u")){var a=d.lookup("clone");if(!me(a))throw{code:"T2013",stack:new Error().stack,position:r.position};var f=await V(a,[t],null,d),u=await L(r.pattern,f,d);if(typeof u<"u"){Array.isArray(u)||(u=[u]);for(var v=0;v<u.length;v++){var O=u[v];if(O&&(O.isPrototypeOf(f)||O instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:r.position};var G=await L(r.update,O,d),Z=typeof G;if(Z!=="undefined"){if(Z!=="object"||G===null||Array.isArray(G))throw{code:"T2011",stack:new Error().stack,position:r.update.position,value:G};for(var Ee in G)O[Ee]=G[Ee]}if(typeof r.delete<"u"){var ue=await L(r.delete,O,d);if(typeof ue<"u"){var xe=ue;if(Array.isArray(ue)||(ue=[ue]),!k(ue))throw{code:"T2012",stack:new Error().stack,position:r.delete.position,value:xe};for(var we=0;we<ue.length;we++)typeof O=="object"&&O!==null&&delete O[ue[we]]}}}}return f}};return R(e,"<(oa):o>")}var q=ne("function($f, $g) { function($x){ $g($f($x)) } }");async function X(r,c,d){var e,t=await L(r.lhs,c,d);if(r.rhs.type==="function")e=await le(r.rhs,c,d,{context:t});else{var a=await L(r.rhs,c,d);if(!me(a))throw{code:"T2006",stack:new Error().stack,position:r.position,value:a};if(me(t)){var f=await L(q,null,d);e=await V(f,[t,a],null,d)}else e=await V(a,[t],null,d)}return e}async function le(r,c,d,e){var t,a=await L(r.procedure,c,d);if(typeof a>"u"&&r.procedure.type==="path"&&d.lookup(r.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:r.position,token:r.procedure.steps[0].value};var f=[];typeof e<"u"&&f.push(e.context);for(var u=0;u<r.arguments.length;u++){const O=await L(r.arguments[u],c,d);if(me(O)){const G=async function(...Z){return await V(O,Z,null,d)};G.arity=ee(O),f.push(G)}else f.push(O)}var v=r.procedure.type==="path"?r.procedure.steps[0].value:r.procedure.value;try{typeof a=="object"&&(a.token=v,a.position=r.position),t=await V(a,f,c,d)}catch(O){throw O.position||(O.position=r.position),O.token||(O.token=v),O}return t}async function V(r,c,d,e){var t;for(t=await Le(r,c,d,e);be(t)&&t.thunk===!0;){var a=await L(t.body.procedure,t.input,t.environment);t.body.procedure.type==="variable"&&(a.token=t.body.procedure.value),a.position=t.body.procedure.position;for(var f=[],u=0;u<t.body.arguments.length;u++)f.push(await L(t.body.arguments[u],t.input,t.environment));t=await Le(a,f,d,e)}return t}async function Le(r,c,d,e){var t;try{var a=c;if(r&&(a=_e(r.signature,c,d)),be(r))t=await ze(r,a);else if(r&&r._jsonata_function===!0){var f={environment:e,input:d};t=r.implementation.apply(f,a),B(t)&&(t=t.next().value),T(t)&&(t=await t)}else if(typeof r=="function")t=r.apply(d,a),T(t)&&(t=await t);else throw{code:"T1006",stack:new Error().stack}}catch(u){throw r&&(typeof u.token>"u"&&typeof r.token<"u"&&(u.token=r.token),u.position=r.position||u.position),u}return t}function Ze(r,c,d){var e={_jsonata_lambda:!0,input:c,environment:d,arguments:r.arguments,signature:r.signature,body:r.body};return r.thunk===!0&&(e.thunk=!0),e.apply=async function(t,a){return await V(e,a,c,t?t.environment:d)},e}async function je(r,c,d){for(var e,t=[],a=0;a<r.arguments.length;a++){var f=r.arguments[a];f.type==="operator"&&f.value==="?"?t.push(f):t.push(await L(f,c,d))}var u=await L(r.procedure,c,d);if(typeof u>"u"&&r.procedure.type==="path"&&d.lookup(r.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:r.position,token:r.procedure.steps[0].value};if(be(u))e=ot(u,t);else if(u&&u._jsonata_function===!0)e=ct(u.implementation,t);else if(typeof u=="function")e=ct(u,t);else throw{code:"T1008",stack:new Error().stack,position:r.position,token:r.procedure.type==="path"?r.procedure.steps[0].value:r.procedure.value};return e}function _e(r,c,d){if(typeof r>"u")return c;var e=r.validate(c,d);return e}async function ze(r,c){var d,e=Xe(r.environment);return r.arguments.forEach(function(t,a){e.bind(t.value,c[a])}),typeof r.body=="function"?d=await Ut(r.body,e):d=await L(r.body,r.input,e),d}function ot(r,c){var d=Xe(r.environment),e=[];r.arguments.forEach(function(a,f){var u=c[f];u&&u.type==="operator"&&u.value==="?"?e.push(a):d.bind(a.value,u)});var t={_jsonata_lambda:!0,input:r.input,environment:d,arguments:e,body:r.body};return t}function ct(r,c){var d=lt(r);d=d.map(function(f){return"$"+f.trim()});var e="function("+d.join(", ")+"){ _ }",t=ne(e);t.body=r;var a=ot(t,c);return a}async function Ut(r,c){var d=lt(r),e=d.map(function(f){return c.lookup(f.trim())}),t={environment:c},a=r.apply(t,e);return T(a)&&(a=await a),a}function lt(r){var c=r.toString(),d=/\(([^)]*)\)/.exec(c)[1],e=d.split(",");return e}function R(r,c){var d={_jsonata_function:!0,implementation:r};return typeof c<"u"&&(d.signature=re(c)),d}async function Ft(r,c){if(!(typeof r>"u")){var d=this.input;typeof c<"u"&&(d=c,Array.isArray(d)&&!ie(d)&&(d=N(d),d.outerWrapper=!0));try{var e=ne(r,!1)}catch(a){throw nt(a),{stack:new Error().stack,code:"D3120",value:a.message,error:a}}try{var t=await L(e,d,this.environment)}catch(a){throw nt(a),{stack:new Error().stack,code:"D3121",value:a.message,error:a}}return t}}function Dt(r){if(!(typeof r>"u"))return JSON.parse(m.string(r))}function Xe(r){var c={};const d={bind:function(t,a){c[t]=a},lookup:function(t){var a;return c.hasOwnProperty(t)?a=c[t]:r&&(a=r.lookup(t)),a},timestamp:r?r.timestamp:null,async:r?r.async:!1,isParallelCall:r?r.isParallelCall:!1,global:r?r.global:{ancestry:[null]}};if(r){var e=r.lookup(Symbol.for("jsonata.__createFrame_push"));e&&e(r,d)}return d}b.bind("sum",R(m.sum,"<a<n>:n>")),b.bind("count",R(m.count,"<a:n>")),b.bind("max",R(m.max,"<a<n>:n>")),b.bind("min",R(m.min,"<a<n>:n>")),b.bind("average",R(m.average,"<a<n>:n>")),b.bind("string",R(m.string,"<x-b?:s>")),b.bind("substring",R(m.substring,"<s-nn?:s>")),b.bind("substringBefore",R(m.substringBefore,"<s-s:s>")),b.bind("substringAfter",R(m.substringAfter,"<s-s:s>")),b.bind("lowercase",R(m.lowercase,"<s-:s>")),b.bind("uppercase",R(m.uppercase,"<s-:s>")),b.bind("length",R(m.length,"<s-:n>")),b.bind("trim",R(m.trim,"<s-:s>")),b.bind("pad",R(m.pad,"<s-ns?:s>")),b.bind("match",R(m.match,"<s-f<s:o>n?:a<o>>")),b.bind("contains",R(m.contains,"<s-(sf):b>")),b.bind("replace",R(m.replace,"<s-(sf)(sf)n?:s>")),b.bind("split",R(m.split,"<s-(sf)n?:a<s>>")),b.bind("join",R(m.join,"<a<s>s?:s>")),b.bind("formatNumber",R(m.formatNumber,"<n-so?:s>")),b.bind("formatBase",R(m.formatBase,"<n-n?:s>")),b.bind("formatInteger",R(E.formatInteger,"<n-s:s>")),b.bind("parseInteger",R(E.parseInteger,"<s-s:n>")),b.bind("number",R(m.number,"<(nsb)-:n>")),b.bind("floor",R(m.floor,"<n-:n>")),b.bind("ceil",R(m.ceil,"<n-:n>")),b.bind("round",R(m.round,"<n-n?:n>")),b.bind("abs",R(m.abs,"<n-:n>")),b.bind("sqrt",R(m.sqrt,"<n-:n>")),b.bind("power",R(m.power,"<n-n:n>")),b.bind("random",R(m.random,"<:n>")),b.bind("boolean",R(m.boolean,"<x-:b>")),b.bind("not",R(m.not,"<x-:b>")),b.bind("map",R(m.map,"<af>")),b.bind("zip",R(m.zip,"<a+>")),b.bind("filter",R(m.filter,"<af>")),b.bind("single",R(m.single,"<af?>")),b.bind("reduce",R(m.foldLeft,"<afj?:j>")),b.bind("sift",R(m.sift,"<o-f?:o>")),b.bind("keys",R(m.keys,"<x-:a<s>>")),b.bind("lookup",R(m.lookup,"<x-s:x>")),b.bind("append",R(m.append,"<xx:a>")),b.bind("exists",R(m.exists,"<x:b>")),b.bind("spread",R(m.spread,"<x-:a<o>>")),b.bind("merge",R(m.merge,"<a<o>:o>")),b.bind("reverse",R(m.reverse,"<a:a>")),b.bind("each",R(m.each,"<o-f:a>")),b.bind("error",R(m.error,"<s?:x>")),b.bind("assert",R(m.assert,"<bs?:x>")),b.bind("type",R(m.type,"<x:s>")),b.bind("sort",R(m.sort,"<af?:a>")),b.bind("shuffle",R(m.shuffle,"<a:a>")),b.bind("distinct",R(m.distinct,"<x:x>")),b.bind("base64encode",R(m.base64encode,"<s-:s>")),b.bind("base64decode",R(m.base64decode,"<s-:s>")),b.bind("encodeUrlComponent",R(m.encodeUrlComponent,"<s-:s>")),b.bind("encodeUrl",R(m.encodeUrl,"<s-:s>")),b.bind("decodeUrlComponent",R(m.decodeUrlComponent,"<s-:s>")),b.bind("decodeUrl",R(m.decodeUrl,"<s-:s>")),b.bind("eval",R(Ft,"<sx?:x>")),b.bind("toMillis",R(E.toMillis,"<s-s?:n>")),b.bind("fromMillis",R(E.fromMillis,"<n-s?s?:s>")),b.bind("clone",R(Dt,"<(oa)-:o>"));var yt={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function nt(r){var c=yt[r.code];if(typeof c<"u"){var d=c.replace(/\{\{\{([^}]+)}}}/g,function(){return r[arguments[1]]});d=d.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(r[arguments[1]])}),r.message=d}}function ke(r,c){var d,e;try{d=ne(r,c&&c.recover),e=d.errors,delete d.errors}catch(f){throw nt(f),f}var t=Xe(b),a=new Date;return t.bind("now",R(function(f,u){return E.fromMillis(a.getTime(),f,u)},"<s?s?:s>")),t.bind("millis",R(function(){return a.getTime()},"<:n>")),c&&c.RegexEngine?ke.RegexEngine=c.RegexEngine:ke.RegexEngine=RegExp,{evaluate:async function(f,u,v){if(typeof e<"u"){var O={code:"S0500",position:0};throw nt(O),O}if(typeof u<"u"){var G;G=Xe(t);for(var Z in u)G.bind(Z,u[Z])}else G=t;G.bind("$",f),a=new Date,G.timestamp=a,Array.isArray(f)&&!ie(f)&&(f=N(f),f.outerWrapper=!0);var Ee;try{return Ee=await L(d,f,G),typeof v=="function"&&v(null,Ee),Ee}catch(ue){throw nt(ue),ue}},assign:function(f,u){t.bind(f,u)},registerFunction:function(f,u,v){var O=R(u,v);t.bind(f,O)},ast:function(){return d},errors:function(){return e}}}return ke.parser=ne,ke})();p.exports=fe},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(s,p,y){var E=s("./signature");const m=(()=>{var M={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,"?:":40,"??":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},ne={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},re=function(I){var k=0,S=I.length,N=function(be,B){var T={type:be,value:B,position:k};return T},ie=function(){for(var be=k,B=0,T,ee,U=function(L){if(I.charAt(L)==="/"&&B===0){for(var j=0;I.charAt(L-(j+1))==="\\";)j++;if(j%2===0)return!0}return!1};k<S;){var b=I.charAt(k);if(U(k)){if(T=I.substring(be,k),T==="")throw{code:"S0301",stack:new Error().stack,position:k};for(k++,b=I.charAt(k),be=k;b==="i"||b==="m";)k++,b=I.charAt(k);return ee=I.substring(be,k)+"g",new RegExp(T,ee)}(b==="("||b==="["||b==="{")&&I.charAt(k-1)!=="\\"&&B++,(b===")"||b==="]"||b==="}")&&I.charAt(k-1)!=="\\"&&B--,k++}throw{code:"S0302",stack:new Error().stack,position:k}},me=function(be){if(k>=S)return null;for(var B=I.charAt(k);k<S&&` 	
\r\v`.indexOf(B)>-1;)k++,B=I.charAt(k);if(B==="/"&&I.charAt(k+1)==="*"){var T=k;for(k+=2,B=I.charAt(k);!(B==="*"&&I.charAt(k+1)==="/");)if(B=I.charAt(++k),k>=S)throw{code:"S0106",stack:new Error().stack,position:T};return k+=2,B=I.charAt(k),me(be)}if(be!==!0&&B==="/")return k++,N("regex",ie());if(B==="."&&I.charAt(k+1)===".")return k+=2,N("operator","..");if(B===":"&&I.charAt(k+1)==="=")return k+=2,N("operator",":=");if(B==="!"&&I.charAt(k+1)==="=")return k+=2,N("operator","!=");if(B===">"&&I.charAt(k+1)==="=")return k+=2,N("operator",">=");if(B==="<"&&I.charAt(k+1)==="=")return k+=2,N("operator","<=");if(B==="*"&&I.charAt(k+1)==="*")return k+=2,N("operator","**");if(B==="~"&&I.charAt(k+1)===">")return k+=2,N("operator","~>");if(B==="?"&&I.charAt(k+1)===":")return k+=2,N("operator","?:");if(B==="?"&&I.charAt(k+1)==="?")return k+=2,N("operator","??");if(Object.prototype.hasOwnProperty.call(M,B))return k++,N("operator",B);if(B==='"'||B==="'"){var ee=B;k++;for(var U="";k<S;){if(B=I.charAt(k),B==="\\")if(k++,B=I.charAt(k),Object.prototype.hasOwnProperty.call(ne,B))U+=ne[B];else if(B==="u"){var b=I.substr(k+1,4);if(/^[0-9a-fA-F]+$/.test(b)){var L=parseInt(b,16);U+=String.fromCharCode(L),k+=4}else throw{code:"S0104",stack:new Error().stack,position:k}}else throw{code:"S0103",stack:new Error().stack,position:k,token:B};else{if(B===ee)return k++,N("string",U);U+=B}k++}throw{code:"S0101",stack:new Error().stack,position:k}}var j=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,se=j.exec(I.substring(k));if(se!==null){var pe=parseFloat(se[0]);if(!isNaN(pe)&&isFinite(pe))return k+=se[0].length,N("number",pe);throw{code:"S0102",stack:new Error().stack,position:k,token:se[0]}}var Q;if(B==="`"){k++;var x=I.indexOf("`",k);if(x!==-1)return Q=I.substring(k,x),k=x+1,N("name",Q);throw k=S,{code:"S0105",stack:new Error().stack,position:k}}for(var W=k,K;;)if(K=I.charAt(W),W===S||` 	
\r\v`.indexOf(K)>-1||Object.prototype.hasOwnProperty.call(M,K)){if(I.charAt(k)==="$")return Q=I.substring(k+1,W),k=W,N("variable",Q);switch(Q=I.substring(k,W),k=W,Q){case"or":case"in":case"and":return N("operator",Q);case"true":return N("value",!0);case"false":return N("value",!1);case"null":return N("value",null);default:return k===S&&Q===""?null:N("name",Q)}}else W++};return me},fe=function(I,k){var S,N,ie={},me=[],be=function(){var i=[];S.id!=="(end)"&&i.push({type:S.type,value:S.value,position:S.position});for(var l=N();l!==null;)i.push(l),l=N();return i},B={nud:function(){var i={code:"S0211",token:this.value,position:this.position};if(k)return i.remaining=be(),i.type="error",me.push(i),i;throw i.stack=new Error().stack,i}},T=function(i,l){var $=ie[i];return l=l||0,$?l>=$.lbp&&($.lbp=l):($=Object.create(B),$.id=$.value=i,$.lbp=l,ie[i]=$),$},ee=function(i){if(k){i.remaining=be(),me.push(i);var l=ie["(error)"];return S=Object.create(l),S.error=i,S.type="(error)",S}else throw i.stack=new Error().stack,i},U=function(i,l){if(i&&S.id!==i){var $;S.id==="(end)"?$="S0203":$="S0202";var ae={code:$,position:S.position,token:S.value,value:i};return ee(ae)}var Ae=N(l);if(Ae===null)return S=ie["(end)"],S.position=I.length,S;var ve=Ae.value,h=Ae.type,w;switch(h){case"name":case"variable":w=ie["(name)"];break;case"operator":if(w=ie[ve],!w)return ee({code:"S0204",stack:new Error().stack,position:Ae.position,token:ve});break;case"string":case"number":case"value":w=ie["(literal)"];break;case"regex":h="regex",w=ie["(regex)"];break;default:return ee({code:"S0205",stack:new Error().stack,position:Ae.position,token:ve})}return S=Object.create(w),S.value=ve,S.type=h,S.position=Ae.position,S},b=function(i){var l,$=S;for(U(null,!0),l=$.nud();i<S.lbp;)$=S,U(),l=$.led(l);return l},L=function(i){var l=T(i,0);l.nud=function(){return this}},j=function(i,l,$){var ae=l||M[i],Ae=T(i,ae);return Ae.led=$||function(ve){return this.lhs=ve,this.rhs=b(ae),this.type="binary",this},Ae},se=function(i,l,$){var ae=T(i,l);return ae.led=$,ae},pe=function(i,l){var $=T(i);return $.nud=l||function(){return this.expression=b(70),this.type="unary",this},$};L("(end)"),L("(name)"),L("(literal)"),L("(regex)"),T(":"),T(";"),T(","),T(")"),T("]"),T("}"),T(".."),j("."),j("+"),j("-"),j("*"),j("/"),j("%"),j("="),j("<"),j(">"),j("!="),j("<="),j(">="),j("&"),j("and"),j("or"),j("in"),L("and"),L("or"),L("in"),pe("-"),j("~>"),j("??",M["??"],function(i){return this.type="condition",this.condition={type:"function",value:"(",procedure:{type:"variable",value:"exists"},arguments:[i]},this.then=i,this.else=b(0),this}),se("(error)",10,function(i){return this.lhs=i,this.error=S.error,this.remaining=be(),this.type="error",this}),pe("*",function(){return this.type="wildcard",this}),pe("**",function(){return this.type="descendant",this}),pe("%",function(){return this.type="parent",this}),j("(",M["("],function(i){if(this.procedure=i,this.type="function",this.arguments=[],S.id!==")")for(;S.type==="operator"&&S.id==="?"?(this.type="partial",this.arguments.push(S),U("?")):this.arguments.push(b(0)),S.id===",";)U(",");if(U(")",!0),i.type==="name"&&(i.value==="function"||i.value==="λ")){if(this.arguments.forEach(function(ve,h){if(ve.type!=="variable")return ee({code:"S0208",stack:new Error().stack,position:ve.position,token:ve.value,value:h+1})}),this.type="lambda",S.id==="<"){for(var l=S.position,$=1,ae="<";$>0&&S.id!=="{"&&S.id!=="(end)";){var Ae=U();Ae.id===">"?$--:Ae.id==="<"&&$++,ae+=Ae.value}U(">");try{this.signature=E(ae)}catch(ve){return ve.position=l+ve.offset,ee(ve)}}U("{"),this.body=b(0),U("}")}return this}),pe("(",function(){for(var i=[];S.id!==")"&&(i.push(b(0)),S.id===";");)U(";");return U(")",!0),this.type="block",this.expressions=i,this}),pe("[",function(){var i=[];if(S.id!=="]")for(;;){var l=b(0);if(S.id===".."){var $={type:"binary",value:"..",position:S.position,lhs:l};U(".."),$.rhs=b(0),l=$}if(i.push(l),S.id!==",")break;U(",")}return U("]",!0),this.expressions=i,this.type="unary",this}),j("[",M["["],function(i){if(S.id==="]"){for(var l=i;l&&l.type==="binary"&&l.value==="[";)l=l.lhs;return l.keepArray=!0,U("]"),i}else return this.lhs=i,this.rhs=b(M["]"]),this.type="binary",U("]",!0),this}),j("^",M["^"],function(i){U("(");for(var l=[];;){var $={descending:!1};if(S.id==="<"?U("<"):S.id===">"&&($.descending=!0,U(">")),$.expression=b(0),l.push($),S.id!==",")break;U(",")}return U(")"),this.lhs=i,this.rhs=l,this.type="binary",this});var Q=function(i){var l=[];if(S.id!=="}")for(;;){var $=b(0);U(":");var ae=b(0);if(l.push([$,ae]),S.id!==",")break;U(",")}return U("}",!0),typeof i>"u"?(this.lhs=l,this.type="unary"):(this.lhs=i,this.rhs=l,this.type="binary"),this};pe("{",Q),j("{",M["{"],Q),se(":=",M[":="],function(i){return i.type!=="variable"?ee({code:"S0212",stack:new Error().stack,position:i.position,token:i.value}):(this.lhs=i,this.rhs=b(M[":="]-1),this.type="binary",this)}),j("@",M["@"],function(i){return this.lhs=i,this.rhs=b(M["@"]),this.rhs.type!=="variable"?ee({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),j("#",M["#"],function(i){return this.lhs=i,this.rhs=b(M["#"]),this.rhs.type!=="variable"?ee({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),j("?",M["?"],function(i){return this.type="condition",this.condition=i,this.then=b(0),S.id===":"&&(U(":"),this.else=b(0)),this}),j("?:",M["?:"],function(i){return this.type="condition",this.condition=i,this.then=i,this.else=b(0),this}),pe("|",function(){return this.type="transform",this.pattern=b(0),U("|"),this.update=b(0),S.id===","&&(U(","),this.delete=b(0)),U("|"),this});var x=function(i){var l;if(i.type==="function"&&!i.predicate){var $={type:"lambda",thunk:!0,arguments:[],position:i.position};$.body=i,l=$}else if(i.type==="condition")i.then=x(i.then),typeof i.else<"u"&&(i.else=x(i.else)),l=i;else if(i.type==="block"){var ae=i.expressions.length;ae>0&&(i.expressions[ae-1]=x(i.expressions[ae-1])),l=i}else l=i;return l},W=0,K=0,oe=[],J=function(i,l){switch(i.type){case"name":case"wildcard":l.level--,l.level===0&&(typeof i.ancestor>"u"||(oe[l.index].slot.label=i.ancestor.label),i.ancestor=l,i.tuple=!0);break;case"parent":l.level++;break;case"block":i.expressions.length>0&&(i.tuple=!0,l=J(i.expressions[i.expressions.length-1],l));break;case"path":i.tuple=!0;var $=i.steps.length-1;for(l=J(i.steps[$--],l);l.level>0&&$>=0;)l=J(i.steps[$--],l);break;default:throw{code:"S0217",token:i.type,position:i.position}}return l},z=function(i,l){if(typeof l.seekingParent<"u"||l.type==="parent"){var $=typeof l.seekingParent<"u"?l.seekingParent:[];l.type==="parent"&&$.push(l.slot),typeof i.seekingParent>"u"?i.seekingParent=$:Array.prototype.push.apply(i.seekingParent,$)}},Y=function(i){var l=i.steps.length-1,$=i.steps[l],ae=typeof $.seekingParent<"u"?$.seekingParent:[];$.type==="parent"&&ae.push($.slot);for(var Ae=0;Ae<ae.length;Ae++){var ve=ae[Ae];for(l=i.steps.length-2;ve.level>0;){if(l<0){typeof i.seekingParent>"u"?i.seekingParent=[ve]:i.seekingParent.push(ve);break}for(var h=i.steps[l--];l>=0&&h.focus&&i.steps[l].focus;)h=i.steps[l--];ve=J(h,ve)}}},F=function(i){var l;switch(i.type){case"binary":switch(i.value){case".":var $=F(i.lhs);$.type==="path"?l=$:l={type:"path",steps:[$]},$.type==="parent"&&(l.seekingParent=[$.slot]);var ae=F(i.rhs);ae.type==="function"&&ae.procedure.type==="path"&&ae.procedure.steps.length===1&&ae.procedure.steps[0].type==="name"&&l.steps[l.steps.length-1].type==="function"&&(l.steps[l.steps.length-1].nextFunction=ae.procedure.steps[0].value),ae.type==="path"?Array.prototype.push.apply(l.steps,ae.steps):(typeof ae.predicate<"u"&&(ae.stages=ae.predicate,delete ae.predicate),l.steps.push(ae)),l.steps.filter(function(_){if(_.type==="number"||_.type==="value")throw{code:"S0213",stack:new Error().stack,position:_.position,value:_.value};return _.type==="string"}).forEach(function(_){_.type="name"}),l.steps.filter(function(_){return _.keepArray===!0}).length>0&&(l.keepSingletonArray=!0);var Ae=l.steps[0];Ae.type==="unary"&&Ae.value==="["&&(Ae.consarray=!0);var ve=l.steps[l.steps.length-1];ve.type==="unary"&&ve.value==="["&&(ve.consarray=!0),Y(l);break;case"[":l=F(i.lhs);var h=l,w="predicate";if(l.type==="path"&&(h=l.steps[l.steps.length-1],w="stages"),typeof h.group<"u")throw{code:"S0209",stack:new Error().stack,position:i.position};typeof h[w]>"u"&&(h[w]=[]);var g=F(i.rhs);typeof g.seekingParent<"u"&&(g.seekingParent.forEach(_=>{_.level===1?J(h,_):_.level--}),z(h,g)),h[w].push({type:"filter",expr:g,position:i.position});break;case"{":if(l=F(i.lhs),typeof l.group<"u")throw{code:"S0210",stack:new Error().stack,position:i.position};l.group={lhs:i.rhs.map(function(_){return[F(_[0]),F(_[1])]}),position:i.position};break;case"^":l=F(i.lhs),l.type!=="path"&&(l={type:"path",steps:[l]});var D={type:"sort",position:i.position};D.terms=i.rhs.map(function(_){var H=F(_.expression);return z(D,H),{descending:_.descending,expression:H}}),l.steps.push(D),Y(l);break;case":=":l={type:"bind",value:i.value,position:i.position},l.lhs=F(i.lhs),l.rhs=F(i.rhs),z(l,l.rhs);break;case"@":if(l=F(i.lhs),h=l,l.type==="path"&&(h=l.steps[l.steps.length-1]),typeof h.stages<"u"||typeof h.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:i.position};if(h.type==="sort")throw{code:"S0216",stack:new Error().stack,position:i.position};i.keepArray&&(h.keepArray=!0),h.focus=i.rhs.value,h.tuple=!0;break;case"#":l=F(i.lhs),h=l,l.type==="path"?h=l.steps[l.steps.length-1]:(l={type:"path",steps:[l]},typeof h.predicate<"u"&&(h.stages=h.predicate,delete h.predicate)),typeof h.stages>"u"?h.index=i.rhs.value:h.stages.push({type:"index",value:i.rhs.value,position:i.position}),h.tuple=!0;break;case"~>":l={type:"apply",value:i.value,position:i.position},l.lhs=F(i.lhs),l.rhs=F(i.rhs),l.keepArray=l.lhs.keepArray||l.rhs.keepArray;break;default:l={type:i.type,value:i.value,position:i.position},l.lhs=F(i.lhs),l.rhs=F(i.rhs),z(l,l.lhs),z(l,l.rhs)}break;case"unary":l={type:i.type,value:i.value,position:i.position},i.value==="["?l.expressions=i.expressions.map(function(_){var H=F(_);return z(l,H),H}):i.value==="{"?l.lhs=i.lhs.map(function(_){var H=F(_[0]);z(l,H);var de=F(_[1]);return z(l,de),[H,de]}):(l.expression=F(i.expression),i.value==="-"&&l.expression.type==="number"?(l=l.expression,l.value=-l.value):z(l,l.expression));break;case"function":case"partial":l={type:i.type,name:i.name,value:i.value,position:i.position},l.arguments=i.arguments.map(function(_){var H=F(_);return z(l,H),H}),l.procedure=F(i.procedure);break;case"lambda":l={type:i.type,arguments:i.arguments,signature:i.signature,position:i.position};var P=F(i.body);l.body=x(P);break;case"condition":l={type:i.type,position:i.position},l.condition=F(i.condition),z(l,l.condition),l.then=F(i.then),z(l,l.then),typeof i.else<"u"&&(l.else=F(i.else),z(l,l.else));break;case"transform":l={type:i.type,position:i.position},l.pattern=F(i.pattern),l.update=F(i.update),typeof i.delete<"u"&&(l.delete=F(i.delete));break;case"block":l={type:i.type,position:i.position},l.expressions=i.expressions.map(function(_){var H=F(_);return z(l,H),(H.consarray||H.type==="path"&&H.steps[0].consarray)&&(l.consarray=!0),H});break;case"name":l={type:"path",steps:[i]},i.keepArray&&(l.keepSingletonArray=!0);break;case"parent":l={type:"parent",slot:{label:"!"+W++,level:1,index:K++}},oe.push(l);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":l=i;break;case"operator":if(i.value==="and"||i.value==="or"||i.value==="in")i.type="name",l=F(i);else if(i.value==="?")l=i;else throw{code:"S0201",stack:new Error().stack,position:i.position,token:i.value};break;case"error":l=i,i.lhs&&(l=F(i.lhs));break;default:var C="S0206";i.id==="(end)"&&(C="S0207");var A={code:C,position:i.position,token:i.value};if(k)return me.push(A),{type:"error",error:A};throw A.stack=new Error().stack,A}return i.keepArray&&(l.keepArray=!0),l};N=re(I),U();var he=b(0);if(S.id!=="(end)"){var $e={code:"S0201",position:S.position,token:S.value};ee($e)}if(he=F(he),he.type==="parent"||typeof he.seekingParent<"u")throw{code:"S0217",token:he.type,position:he.position};return me.length>0&&(he.errors=me),he};return fe})();p.exports=m},{"./signature":5}],5:[function(s,p,y){var E=s("./utils");const m=(()=>{var M={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function ne(re){for(var fe=1,I=[],k={},S=k;fe<re.length;){var N=re.charAt(fe);if(N===":")break;var ie=function(){I.push(k),S=k,k={}},me=function(j,se,pe,Q){for(var x=1,W=se;W<j.length;)if(W++,N=j.charAt(W),N===Q){if(x--,x===0)break}else N===pe&&x++;return W};switch(N){case"s":case"n":case"b":case"l":case"o":k.regex="["+N+"m]",k.type=N,ie();break;case"a":k.regex="[asnblfom]",k.type=N,k.array=!0,ie();break;case"f":k.regex="f",k.type=N,ie();break;case"j":k.regex="[asnblom]",k.type=N,ie();break;case"x":k.regex="[asnblfom]",k.type=N,ie();break;case"-":S.context=!0,S.contextRegex=new RegExp(S.regex),S.regex+="?";break;case"?":case"+":S.regex+=N;break;case"(":var be=me(re,fe,"(",")"),B=re.substring(fe+1,be);if(B.indexOf("<")===-1)k.regex="["+B+"m]";else throw{code:"S0402",stack:new Error().stack,value:B,offset:fe};k.type="("+B+")",fe=be,ie();break;case"<":if(S.type==="a"||S.type==="f"){var T=me(re,fe,"<",">");S.subtype=re.substring(fe+1,T),fe=T}else throw{code:"S0401",stack:new Error().stack,value:S.type,offset:fe};break}fe++}var ee="^"+I.map(function(j){return"("+j.regex+")"}).join("")+"$",U=new RegExp(ee),b=function(j){var se;if(E.isFunction(j))se="f";else{var pe=typeof j;switch(pe){case"string":se="s";break;case"number":se="n";break;case"boolean":se="b";break;case"object":j===null?se="l":Array.isArray(j)?se="a":se="o";break;case"undefined":default:se="m"}}return se},L=function(j,se){for(var pe="^",Q=0,x=0;x<I.length;x++){pe+=I[x].regex;var W=se.match(pe);if(W===null)throw{code:"T0410",stack:new Error().stack,value:j[Q],index:Q+1};Q=W[0].length}throw{code:"T0410",stack:new Error().stack,value:j[Q],index:Q+1}};return{definition:re,validate:function(j,se){var pe="";j.forEach(function(K){pe+=b(K)});var Q=U.exec(pe);if(Q){var x=[],W=0;return I.forEach(function(K,oe){var J=j[W],z=Q[oe+1];if(z==="")if(K.context&&K.contextRegex){var Y=b(se);if(K.contextRegex.test(Y))x.push(se);else throw{code:"T0411",stack:new Error().stack,value:se,index:W+1}}else x.push(J),W++;else z.split("").forEach(function(F){if(K.type==="a"){if(F==="m")J=void 0;else{J=j[W];var he=!0;if(typeof K.subtype<"u"){if(F!=="a"&&z!==K.subtype)he=!1;else if(F==="a"&&J.length>0){var $e=b(J[0]);if($e!==K.subtype.charAt(0))he=!1;else{var i=J.filter(function(l){return b(l)!==$e});he=i.length===0}}}if(!he)throw{code:"T0412",stack:new Error().stack,value:J,index:W+1,type:M[K.subtype]};F!=="a"&&(J=[J])}x.push(J),W++}else x.push(J),W++})}),x}L(j,pe)}}}return ne})();p.exports=m},{"./utils":6}],6:[function(s,p,y){const E=(()=>{function m(T){var ee=!1;if(typeof T=="number"&&(ee=!isNaN(T),ee&&!isFinite(T)))throw{code:"D1001",value:T,stack:new Error().stack};return ee}function M(T){var ee=!1;return Array.isArray(T)&&(ee=T.filter(function(U){return typeof U!="string"}).length===0),ee}function ne(T){var ee=!1;return Array.isArray(T)&&(ee=T.filter(function(U){return!m(U)}).length===0),ee}function re(){var T=[];return T.sequence=!0,arguments.length===1&&T.push(arguments[0]),T}function fe(T){return T.sequence===!0&&Array.isArray(T)}function I(T){return T&&(T._jsonata_function===!0||T._jsonata_lambda===!0)||typeof T=="function"}function k(T){var ee=typeof T.arity=="number"?T.arity:typeof T.implementation=="function"?T.implementation.length:typeof T.length=="number"?T.length:T.arguments.length;return ee}function S(T){return T&&T._jsonata_lambda===!0}var N=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function ie(T){return typeof T=="object"&&T!==null&&N in T&&"next"in T&&typeof T.next=="function"}function me(T,ee){if(T===ee)return!0;if(typeof T=="object"&&typeof ee=="object"&&T!==null&&ee!==null){if(Array.isArray(T)&&Array.isArray(ee)){if(T.length!==ee.length)return!1;for(var U=0;U<T.length;U++)if(!me(T[U],ee[U]))return!1;return!0}var b=Object.getOwnPropertyNames(T),L=Object.getOwnPropertyNames(ee);if(b.length!==L.length)return!1;for(b=b.sort(),L=L.sort(),U=0;U<b.length;U++)if(b[U]!==L[U])return!1;for(U=0;U<b.length;U++){var j=b[U];if(!me(T[j],ee[j]))return!1}return!0}return!1}function be(T){return typeof T=="object"&&T!==null&&"then"in T&&typeof T.then=="function"}function B(T){var ee=[];for(let U of T)ee.push(U);return ee}return{isNumeric:m,isArrayOfStrings:M,isArrayOfNumbers:ne,createSequence:re,isSequence:fe,isFunction:I,isLambda:S,isIterable:ie,getFunctionArity:k,isDeepEqual:me,stringToArray:B,isPromise:be}})();p.exports=E},{}]},{},[3])(3)})})(Jt)),Jt.exports}var pr=fr();const En=Fn(pr);var rt={exports:{}};const Wt=Rn(Nn),hr="17.2.3",mr={version:hr};var dn;function gr(){if(dn)return rt.exports;dn=1;var o={};const n=Wt,s=Wt,p=Wt,y=Wt,m=mr.version,M=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function ne(){return M[Math.floor(Math.random()*M.length)]}function re(x){return typeof x=="string"?!["false","0","no","off",""].includes(x.toLowerCase()):!!x}function fe(){return process.stdout.isTTY}function I(x){return fe()?`\x1B[2m${x}\x1B[0m`:x}const k=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function S(x){const W={};let K=x.toString();K=K.replace(/\r\n?/mg,`
`);let oe;for(;(oe=k.exec(K))!=null;){const J=oe[1];let z=oe[2]||"";z=z.trim();const Y=z[0];z=z.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),Y==='"'&&(z=z.replace(/\\n/g,`
`),z=z.replace(/\\r/g,"\r")),W[J]=z}return W}function N(x){x=x||{};const W=ee(x);x.path=W;const K=Q.configDotenv(x);if(!K.parsed){const Y=new Error(`MISSING_DATA: Cannot parse ${W} for an unknown reason`);throw Y.code="MISSING_DATA",Y}const oe=B(x).split(","),J=oe.length;let z;for(let Y=0;Y<J;Y++)try{const F=oe[Y].trim(),he=T(K,F);z=Q.decrypt(he.ciphertext,he.key);break}catch(F){if(Y+1>=J)throw F}return Q.parse(z)}function ie(x){console.error(`[dotenv@${m}][WARN] ${x}`)}function me(x){console.log(`[dotenv@${m}][DEBUG] ${x}`)}function be(x){console.log(`[dotenv@${m}] ${x}`)}function B(x){return x&&x.DOTENV_KEY&&x.DOTENV_KEY.length>0?x.DOTENV_KEY:o.DOTENV_KEY&&o.DOTENV_KEY.length>0?o.DOTENV_KEY:""}function T(x,W){let K;try{K=new URL(W)}catch(F){if(F.code==="ERR_INVALID_URL"){const he=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw he.code="INVALID_DOTENV_KEY",he}throw F}const oe=K.password;if(!oe){const F=new Error("INVALID_DOTENV_KEY: Missing key part");throw F.code="INVALID_DOTENV_KEY",F}const J=K.searchParams.get("environment");if(!J){const F=new Error("INVALID_DOTENV_KEY: Missing environment part");throw F.code="INVALID_DOTENV_KEY",F}const z=`DOTENV_VAULT_${J.toUpperCase()}`,Y=x.parsed[z];if(!Y){const F=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${z} in your .env.vault file.`);throw F.code="NOT_FOUND_DOTENV_ENVIRONMENT",F}return{ciphertext:Y,key:oe}}function ee(x){let W=null;if(x&&x.path&&x.path.length>0)if(Array.isArray(x.path))for(const K of x.path)n.existsSync(K)&&(W=K.endsWith(".vault")?K:`${K}.vault`);else W=x.path.endsWith(".vault")?x.path:`${x.path}.vault`;else W=s.resolve(process.cwd(),".env.vault");return n.existsSync(W)?W:null}function U(x){return x[0]==="~"?s.join(p.homedir(),x.slice(1)):x}function b(x){const W=re(o.DOTENV_CONFIG_DEBUG||x&&x.debug),K=re(o.DOTENV_CONFIG_QUIET||x&&x.quiet);(W||!K)&&be("Loading env from encrypted .env.vault");const oe=Q._parseVault(x);let J=o;return x&&x.processEnv!=null&&(J=x.processEnv),Q.populate(J,oe,x),{parsed:oe}}function L(x){const W=s.resolve(process.cwd(),".env");let K="utf8",oe=o;x&&x.processEnv!=null&&(oe=x.processEnv);let J=re(oe.DOTENV_CONFIG_DEBUG||x&&x.debug),z=re(oe.DOTENV_CONFIG_QUIET||x&&x.quiet);x&&x.encoding?K=x.encoding:J&&me("No encoding is specified. UTF-8 is used by default");let Y=[W];if(x&&x.path)if(!Array.isArray(x.path))Y=[U(x.path)];else{Y=[];for(const i of x.path)Y.push(U(i))}let F;const he={};for(const i of Y)try{const l=Q.parse(n.readFileSync(i,{encoding:K}));Q.populate(he,l,x)}catch(l){J&&me(`Failed to load ${i} ${l.message}`),F=l}const $e=Q.populate(oe,he,x);if(J=re(oe.DOTENV_CONFIG_DEBUG||J),z=re(oe.DOTENV_CONFIG_QUIET||z),J||!z){const i=Object.keys($e).length,l=[];for(const $ of Y)try{const ae=s.relative(process.cwd(),$);l.push(ae)}catch(ae){J&&me(`Failed to load ${$} ${ae.message}`),F=ae}be(`injecting env (${i}) from ${l.join(",")} ${I(`-- tip: ${ne()}`)}`)}return F?{parsed:he,error:F}:{parsed:he}}function j(x){if(B(x).length===0)return Q.configDotenv(x);const W=ee(x);return W?Q._configVault(x):(ie(`You set DOTENV_KEY but you are missing a .env.vault file at ${W}. Did you forget to build it?`),Q.configDotenv(x))}function se(x,W){const K=Buffer.from(W.slice(-64),"hex");let oe=Buffer.from(x,"base64");const J=oe.subarray(0,12),z=oe.subarray(-16);oe=oe.subarray(12,-16);try{const Y=y.createDecipheriv("aes-256-gcm",K,J);return Y.setAuthTag(z),`${Y.update(oe)}${Y.final()}`}catch(Y){const F=Y instanceof RangeError,he=Y.message==="Invalid key length",$e=Y.message==="Unsupported state or unable to authenticate data";if(F||he){const i=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw i.code="INVALID_DOTENV_KEY",i}else if($e){const i=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw i.code="DECRYPTION_FAILED",i}else throw Y}}function pe(x,W,K={}){const oe=!!(K&&K.debug),J=!!(K&&K.override),z={};if(typeof W!="object"){const Y=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw Y.code="OBJECT_REQUIRED",Y}for(const Y of Object.keys(W))Object.prototype.hasOwnProperty.call(x,Y)?(J===!0&&(x[Y]=W[Y],z[Y]=W[Y]),oe&&me(J===!0?`"${Y}" is already defined and WAS overwritten`:`"${Y}" is already defined and was NOT overwritten`)):(x[Y]=W[Y],z[Y]=W[Y]);return z}const Q={configDotenv:L,_configVault:b,_parseVault:N,config:j,decrypt:se,parse:S,populate:pe};return rt.exports.configDotenv=Q.configDotenv,rt.exports._configVault=Q._configVault,rt.exports._parseVault=Q._parseVault,rt.exports.config=Q.config,rt.exports.decrypt=Q.decrypt,rt.exports.parse=Q.parse,rt.exports.populate=Q.populate,rt.exports=Q,rt.exports}var yr=gr();const An={".geojson":tt.GeoJSON,".json":tt.GeoJSON,".kml":tt.KML,".gpx":tt.GPX,".tif":tt.GeoTIFF,".tiff":tt.GeoTIFF,".geotiff":tt.GeoTIFF},tn=o=>{const n=o.getName().toLowerCase();for(const[s,p]of Object.entries(An))if(n.endsWith(s))return p;return null},xn=o=>tn(o)!==null,Gt=async o=>{const n=await St.getWorkspace();if(!n)throw new Error("No workspace available");const s=await n.getResource(o);if(!s)throw new Error("Invalid URL: "+o);return await s.getContents({uri:!0})},Sn=o=>o.startsWith("blob:")||o.startsWith("http:")||o.startsWith("https:"),qt={},Et=async(o,n,s)=>{const p=await En(`[**[${n}!='']]`).evaluate(o);for(const y of p){const E=y[n];if(Sn(E))continue;let m;if(n==="src"&&s)try{m=(await s.resolveWorkspaceModule(E)).blobUrl}catch{m=await Gt(E)}else m=await Gt(E);qt[m]=y[n],y[n]=m}},_t=o=>qt[o],It=async(o,n)=>{const s=await En(`[**[${n}!='']]`).evaluate(o);for(const p of s){const y=p[n];!y||!y.startsWith("blob:")||(p[n]=qt[y])}},Dn=o=>{mt.registerContribution("catalog.root",{label:o.label,icon:o.icon,contributionId:o.contributionId});const n=o.contributionId??o.label;o.items?.forEach(s=>{mt.registerContribution(n,{label:s.label,icon:s.icon,contributionId:s.contributionId});const y=import.meta.resolve("/.");s.items.forEach(E=>{const m={label:E.label,icon:E.icon,state:{...E.state}};m.state?.url&&(m.state.url=m.state.url.replace("${baseURL}/",y)),mt.registerContribution(s.contributionId,m)})})},Ht=o=>{Object.entries(o).forEach(([n,s])=>{const p=/\${([a-zA-Z0-9_]+)}/g;o[n]=s.replace(p,(y,E)=>{const m=o[E];return m!==void 0?m:y})})},Tn=async(...o)=>{const n=await St.getWorkspace(),s={};for(const p of o){const y=await n?.getResource(p);if(!y)continue;const E=await y.getContents(),m=yr.parse(E||"");Ht(m),Object.assign(s,m)}return Ht(s),s},vr=Object.freeze(Object.defineProperty({__proto__:null,FILE_EXTENSION_TO_SOURCE_TYPE:An,_blobsLookup:qt,getOriginalUri:_t,getSourceTypeFromFile:tn,isAbsoluteResource:Sn,isSupportedSpatialFile:xn,loadEnvs:Tn,registerCatalog:Dn,replaceUris:Et,replaceVars:Ht,revertBlobUris:It,toBlobUri:Gt},Symbol.toStringTag,{value:"Module"}));$n.resolveUrl=o=>Gt(o);hn.registerEditorInputHandler({canHandle:o=>o instanceof Bt&&o.getName().endsWith(".geospace"),handle:async o=>{const n={title:o.getName(),data:o,key:o.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return n.widgetFactory=s=>Ce`
            <gs-map id="${s}" .input="${n}"></gs-map>`,n}});function At(o,n){return o.layers.find(s=>s.uuid===n)}function xt(o,n){return o.layers.findIndex(s=>s.uuid===n)}function br(o,n){return o.controls.findIndex(s=>s.uuid===n)}function wr(o,n){return o.overlays.findIndex(s=>s.uuid===n)}const kr=o=>new Proxy({},{get:(n,s)=>async(...p)=>{for(const y of o)await y[s](...p)}});var Qe=(o=>(o[o.LOADED=0]="LOADED",o[o.LAYER_ADDED=1]="LAYER_ADDED",o[o.LAYER_DELETED=2]="LAYER_DELETED",o[o.LAYER_UPDATED=3]="LAYER_UPDATED",o[o.FEATURE_SELECTED=4]="FEATURE_SELECTED",o))(Qe||{});const at=jn(zn),Er=`:root,
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
`;function Ar(o){return o.startsWith("blob:")||o.startsWith("http:")||o.startsWith("https:")}function fn(o,n){if(o.startsWith("/"))return o.slice(1);const s=n.split("/").filter(E=>E),p=o.split("/").filter(E=>E);if(o.startsWith("./")||o.startsWith("../")||!o.startsWith("/")){const E=s.slice(0,-1);s.length=0,s.push(...E)}for(const E of p)E!=="."&&(E===".."?s.length>0&&s.pop():s.push(E));return s.join("/")}function xr(o){const n=[],s=/import\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,p=/export\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,y=/import\s*\(\s*["']([^"']+)["']\s*\)/g;let E;for(;(E=s.exec(o))!==null;)n.push({fullMatch:E[0],importPath:E[1],isDynamic:!1,startIndex:E.index,endIndex:E.index+E[0].length});for(;(E=p.exec(o))!==null;)n.push({fullMatch:E[0],importPath:E[1],isDynamic:!1,startIndex:E.index,endIndex:E.index+E[0].length});for(;(E=y.exec(o))!==null;)n.push({fullMatch:E[0],importPath:E[1],isDynamic:!0,startIndex:E.index,endIndex:E.index+E[0].length});return n.sort((m,M)=>M.startIndex-m.startIndex)}class Sr{constructor(){this.blobUrlCache=new Map,this.moduleCache=new Map,this.resolvingModules=new Set,this.resolvingPromises=new Map}async resolveModuleRecursive(n){if(!await St.getWorkspace())throw new Error("Workspace not available");if(this.blobUrlCache.has(n))return this.blobUrlCache.get(n);if(this.resolvingPromises.has(n))return await this.resolvingPromises.get(n);if(this.resolvingModules.has(n))throw new Error(`Circular dependency detected: ${n}`);this.resolvingModules.add(n);const p=this.doResolveModule(n);this.resolvingPromises.set(n,p);try{return await p}finally{this.resolvingPromises.delete(n)}}async doResolveModule(n){const s=await St.getWorkspace();if(!s)throw new Error("Workspace not available");try{let p=await s.getResource(n);if(p||(await s.listChildren(!0),p=await s.getResource(n)),!p)throw new Error(`Module not found: ${n}`);let y=await p.getContents();const E=xr(y);for(const ne of E){const re=ne.importPath;if(!Ar(re))try{const fe=fn(re,n),I=await this.resolveModuleRecursive(fe);let k;if(ne.isDynamic)k=`import("${I}")`;else{const S=ne.fullMatch.search(/["']/);if(S===-1)k=ne.fullMatch;else{const N=ne.fullMatch[S],ie=ne.fullMatch.lastIndexOf(N);ie!==-1&&ie>S?k=ne.fullMatch.slice(0,S+1)+I+ne.fullMatch.slice(ie):k=ne.fullMatch}}y=y.slice(0,ne.startIndex)+k+y.slice(ne.endIndex)}catch{}}const m=new Blob([y],{type:"application/javascript"}),M=URL.createObjectURL(m);return this.blobUrlCache.set(n,M),this.moduleCache.set(n,{code:y,workspacePath:n,blobUrl:M}),M}catch(p){throw p}finally{this.resolvingModules.delete(n)}}async resolveWorkspaceModule(n,s){const p=s?fn(n,s):n;if(this.moduleCache.has(p))return this.moduleCache.get(p);await this.resolveModuleRecursive(p);const y=this.moduleCache.get(p);if(!y)throw new Error(`Failed to resolve module: ${p}`);return y}clear(){for(const n of this.blobUrlCache.values())n.startsWith("blob:")&&URL.revokeObjectURL(n);this.blobUrlCache.clear(),this.moduleCache.clear(),this.resolvingModules.clear()}}const Dr="iframe-map-renderer.html";class Mn{constructor(n,s){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=n,this.env=s,this.operations=this.createProxy(this)}createProxy(n){return new Proxy({},{get(s,p){return async(...y)=>await n.sendMessage(p,{...y})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(n){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=Dr,this.targetElement=typeof n=="string"?document.querySelector(n):n,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(n){await this.sendMessage("modelToUI",n??this.gsMap)}getOperations(){return this.operations}async getViewExtent(){return(await this.sendMessage("getViewExtent",{}))?.extent||[0,0,0,0]}setOnDirty(n){this.onDirtyCallback=n}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(n){this.onSyncCallback=n}setOnClick(n){this.onClickCallback=n}triggerSync(n){this.onSyncCallback&&this.onSyncCallback(n)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(n,s){try{const{toBlobUri:p}=await kt(async()=>{const{toBlobUri:E}=await Promise.resolve().then(()=>vr);return{toBlobUri:E}},void 0),y=await p(s);this.iframe.contentWindow.postMessage({id:n,success:!0,assetUrl:y},"*")}catch(p){this.iframe.contentWindow.postMessage({id:n,success:!1,error:p instanceof Error?p.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=n=>{if(n.source!==this.iframe?.contentWindow)return;const{id:s,result:p,error:y,type:E,event:m}=n.data;if(s!==void 0&&this.pendingMessages.has(s)){const{resolve:M,reject:ne}=this.pendingMessages.get(s);if(this.pendingMessages.delete(s),y)ne(new Error(y));else{const re=p??Object.fromEntries(Object.entries(n.data).filter(([fe])=>!["id","type","event","error"].includes(fe)));M(re)}}E==="dirty"?this.onDirtyCallback?.():E==="sync"?this.onSyncCallback?.(m):E==="iframeClicked"?this.onClickCallback?.():E==="resolveAsset"&&this.handleAssetResolution(s,n.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(n=>{const s=p=>{p.source===this.iframe?.contentWindow&&p.data.type==="rendererReady"&&(window.removeEventListener("message",s),n())};window.addEventListener("message",s)})}async sendMessage(n,s){if(!this.iframe)throw new Error("Iframe not initialized");const p=++this.messageId;return new Promise((y,E)=>{this.pendingMessages.set(p,{resolve:y,reject:E}),this.iframe.contentWindow.postMessage({id:p,method:n,params:s},"*"),setTimeout(()=>{this.pendingMessages.has(p)&&(this.pendingMessages.delete(p),E(new Error("Message timeout")))},5e3)})}}class Tr{constructor(n,s){this.gsMap=n,this.renderer=s}triggerDirty(){this.renderer.triggerDirty()}async setZoom(n){this.gsMap.view.zoom=n,this.triggerDirty()}async setCenter(n){this.gsMap.view.center=n,this.triggerDirty()}async switchColorMode(n){this.gsMap.view.colorMode=n,this.triggerDirty()}async addLayer(n,s){s?this.gsMap.layers.unshift(n):this.gsMap.layers.push(n),this.triggerDirty()}async deleteLayer(n){const s=xt(this.gsMap,n);s>=0&&(this.gsMap.layers.splice(s,1),this.triggerDirty())}async renameLayer(n,s){const p=At(this.gsMap,n);p&&(p.name=s,this.triggerDirty())}async moveLayer(n,s){const p=xt(this.gsMap,n);if(p<0)return;let y;if(s){if(y=xt(this.gsMap,s),y<0||p===y)return}else y=p>0?p-1:p+1;if(y>=0&&y<this.gsMap.layers.length&&p!==y){const[E]=this.gsMap.layers.splice(p,1);this.gsMap.layers.splice(y,0,E),this.triggerDirty()}}async setLayerVisible(n,s){const p=At(this.gsMap,n);p&&(p.visible=s,this.triggerDirty())}async addControlFromModule(n){this.gsMap.controls.push({src:n,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(n){const s=br(this.gsMap,n);s>=0&&(this.gsMap.controls.splice(s,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(n,s){this.gsMap.overlays.push({src:n,position:s||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(n){const s=wr(this.gsMap,n);s>=0&&(this.gsMap.overlays.splice(s,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(n,s){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class Mr{constructor(n){this.source=n}async setZoom(n){}async setCenter(n){}async switchColorMode(n){}async addLayer(n,s){at.set({part:this.source,event:Qe.LAYER_ADDED})}async deleteLayer(n){at.set({part:this.source,event:Qe.LAYER_DELETED})}async renameLayer(n,s){at.set({part:this.source,event:Qe.LAYER_UPDATED})}async moveLayer(n,s){at.set({part:this.source,event:Qe.LAYER_UPDATED})}async setLayerVisible(n,s){}async addControlFromModule(n){}async removeControl(n){}async addOverlayFromModule(n,s){}async removeOverlay(n){}async enableDrawing(n,s){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){at.set({part:this.source,event:Qe.LAYER_UPDATED})}}var Or=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Yt=(o,n,s,p)=>{for(var y=p>1?void 0:p?Cr(n,s):n,E=o.length-1,m;E>=0;E--)(m=o[E])&&(y=(p?m(n,s,y):m(y))||y);return p&&y&&Or(n,s,y),y};const _r=Kt("GsMapEditor");let Pe=class extends Zt{constructor(){super(),this.mapContainer=mn(),this.isFirstConnection=!0,this.moduleResolver=new Sr,this.interactionMode="none",this.commandStack=new Wn}getRenderer(){return this.renderer}getOperations(){return this.operations}doBeforeUI(){this.watch(at,({part:o,event:n})=>{this.onMapChanged({part:o,event:n})})}onMapChanged({part:o,event:n}){o===this&&(n===Qe.LAYER_ADDED||n===Qe.LAYER_DELETED||n===Qe.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const n=this.getGsMap()?.layers.filter(p=>{const y=p.type===sn.VECTOR,E=p.source?.type===tt.Features;return y&&E})||[],s=this.activeDrawingLayerUuid!==void 0;return Ce`
            <k-command cmd="zoom_in" icon="magnifying-glass-plus" title="Zoom in"></k-command>
            <k-command cmd="zoom_out" icon="magnifying-glass-minus" title="Zoom out"></k-command>
            <k-command cmd="reset_view" icon="house" title="Reset view"></k-command>
            <k-command cmd="refresh_map" icon="rotate" title="Refresh map"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command cmd="capture_map_screenshot" icon="camera" title="Capture screenshot"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command cmd="toggle_color_mode" icon="circle-half-stroke" title="Toggle dark/light mode"></k-command>
            <k-command cmd="toggle_mobile_view" icon="mobile" title="Toggle mobile view"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command icon="plus" 
                      title="Create Drawing Layer"
                      .action=${()=>this.handleCreateDrawingLayer()}>
            </k-command>
            
            ${gn(n.length>0,()=>{const p=n.map(y=>`${y.uuid}:${y.name}`).join("|");return Ce`
                ${Gn(p,Ce`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${y=>{const E=y.target.value||void 0;this.activeDrawingLayerUuid=E,(E===void 0||y.target.value==="")&&(this.operations?.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${n.map(y=>Ce`
                            <wa-option value="${y.uuid}">${y.name||"Layer"}</wa-option>
                        `)}
                    </wa-select>
                `)}
                
                <k-command icon="location-dot" 
                          title="Draw Point"
                          ?disabled=${!s}
                          .action=${()=>this.handleDrawPoint()}>
                </k-command>
                <k-command icon="minus" 
                          title="Draw LineString"
                          ?disabled=${!s}
                          .action=${()=>this.handleDrawLine()}>
                </k-command>
                <k-command icon="draw-polygon" 
                          title="Draw Polygon"
                          ?disabled=${!s}
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
        `}async connectedCallback(){if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}this.renderer?.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Fe.set(this)}))}async doInitUI(){const o=this.input?.data,n=await Tn(".env");n.BUILD_TIME=new Date;const s=await o.getContents();let p=s&&s.trim()?JSON.parse(s):yn;p=this.migrateGsMap(p),cn(p),await Et(p,"url"),await Et(p,"src",this.moduleResolver),this.gsMap=p,p.view&&(this.initialView={center:[...p.view.center],zoom:p.view.zoom}),this.renderer=new Mn(p,n);const y=this.renderer.getOperations(),E=new Tr(p,this.renderer),m=new Mr(this);this.operations=kr([E,y,m]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(M=>{if(this.gsMap){switch(M.type){case"viewChanged":this.gsMap.view.center=M.view.center,this.gsMap.view.zoom=M.view.zoom,M.view.rotation!==void 0&&M.view.rotation!==0&&(this.gsMap.view.rotation=M.view.rotation);break;case"featuresChanged":const ne=At(this.gsMap,M.layerUuid);ne&&ne.source?.type===tt.Features&&(ne.source.features=M.features);break;case"featureSelected":const re={feature:M.feature,layerUuid:M.layerUuid,metrics:M.metrics};console.info("Feature metrics:",re.metrics),at.set({part:this,event:Qe.FEATURE_SELECTED,payload:re});break;case"featureDeselected":console.info("Feature deselected"),at.set({part:this,event:Qe.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),this.renderer.setOnClick?.(()=>{Fe.set(this)}),this.updateToolbar(),at.set({part:this,event:Qe.LOADED})}catch(M){console.error("Failed to render map:",M),Ve(`Failed to render map: ${M.message}`)}}migrateGsMap(o){const n={...o};let s=!1;return o.view||(console.log("Creating view field and migrating old properties..."),s=!0,n.view={},o.center!==void 0&&(n.view.center=o.center,delete n.center),o.zoom!==void 0&&(n.view.zoom=o.zoom,delete n.zoom),o.projection!==void 0&&(n.view.projection=o.projection,delete n.projection),n.view.center===void 0&&(n.view.center=[0,0]),n.view.zoom===void 0&&(n.view.zoom=0),n.view.projection===void 0&&(n.view.projection="EPSG:3857")),(!o.styles||Object.keys(o.styles).length===0)&&(console.log("Adding default styles to map..."),s=!0,n.styles={...Vn}),(!o.styleRules||o.styleRules.length===0)&&(console.log("Adding default style rules to map..."),s=!0,n.styleRules=[...Bn]),s&&console.log("Map migration completed"),n}getGsMap(){return this.gsMap}async save(){if(!this.renderer){Ve("Map not initialized");return}try{if(!this.gsMap){Ve("Map not initialized");return}const o=JSON.parse(JSON.stringify(this.gsMap));await It(o,"url"),await It(o,"src"),this.input?.data.saveContents(JSON.stringify(o,null,2)),this.markDirty(!1)}catch(o){Ve(`Save failed: ${o.message}`)}}get mapOperations(){return this.operations}edit(){Pt("not yet implemented")}async refresh(){if(!this.renderer||!this.gsMap){_r.error("Map not initialized");return}await It(this.gsMap,"url"),await It(this.gsMap,"src"),this.moduleResolver.clear(),await Et(this.gsMap,"url"),await Et(this.gsMap,"src",this.moduleResolver),await this.renderer.modelToUI(this.gsMap)}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Point",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("LineString",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Polygon",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){await this.operations?.enableFeatureSelection(),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){if(this.interactionMode==="select")try{await this.operations?.deleteSelectedFeatures(),Pt("Selected features deleted")}catch(o){Ve(o.message)}}async handleCreateDrawingLayer(){if(!this.gsMap){Ve("Map not initialized");return}const o=await vn("Enter name for new drawing layer:","Drawing Layer");if(!o)return;const n=cn({name:o,type:sn.VECTOR,source:{type:tt.Features,features:[]},visible:!0});await this.operations?.addLayer(n,!1);const s=this.gsMap?.layers.find(p=>p.uuid===n.uuid);s?.uuid&&(this.activeDrawingLayerUuid=s.uuid),await this.updateComplete,this.updateToolbar(),Pt(`Created drawing layer: ${o}`)}doClose(){this.renderer?.destroy(),this.renderer=void 0,this.input=void 0,this.moduleResolver.clear()}render(){return Ce`
            <div class="gc-map-container" ${bn(this.mapContainer)}>
            </div>
        `}};Pe.styles=[qn(Er),Qt`
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
    `];Yt([Xt({attribute:!1})],Pe.prototype,"input",2);Yt([Xt({type:String})],Pe.prototype,"activeDrawingLayerUuid",2);Yt([Xt({type:String})],Pe.prototype,"interactionMode",2);Pe=Yt([en("gs-map")],Pe);var Ir=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,On=(o,n,s,p)=>{for(var y=p>1?void 0:p?Pr(n,s):n,E=o.length-1,m;E>=0;E--)(m=o[E])&&(y=(p?m(n,s,y):m(y))||y);return p&&y&&Ir(n,s,y),y};let Vt=class extends Zt{doBeforeUI(){this.watch(Yn,o=>{this.onPartChanged(o)}),this.watch(at,({part:o})=>{this.onMapChanged({part:o})})}onPartChanged(o){if(!(o==this||o==this.mapEditor)){if(!(o instanceof Pe)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=o,this.requestUpdate()}}onMapChanged({part:o}){o==this.mapEditor&&this.requestUpdate()}toggleVisible(o){const n=this.mapEditor.getGsMap(),s=At(n,o);if(!s)return;const y=!(s.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(o,y),this.updateLater()}async confirmAction(o,n){await Jn(o)&&n()}selectLayer(o){this.selectedLayerUuid=o,this.updateToolbar(),this.updateContextMenu()}renameLayer(o){if(!this.mapEditor)return;const n=o||this.selectedLayerUuid;if(!n)return;const s=this.mapEditor.getGsMap();if(!At(s,n))return;const y=xt(s,n),E=Oe.createExecutionContext({index:y+1});Oe.execute("rename_layer",E)}deleteLayer(o){if(!this.mapEditor)return;const n=o||this.selectedLayerUuid;if(!n)return;const s=this.mapEditor.getGsMap(),p=At(s,n);p&&this.confirmAction(`Delete layer "${p.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(n)))}moveLayerUp(o){if(!this.mapEditor)return;const n=this.mapEditor.getGsMap();if(!n)return;const s=xt(n,o);if(s<=0)return;const p=n.layers[s-1]?.uuid;p&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(o,p)),this.selectedLayerUuid=p)}moveLayerDown(o){if(!this.mapEditor)return;const n=this.mapEditor.getGsMap();if(!n)return;const s=xt(n,o);if(s<0||s>=n.layers.length-1)return;const p=n.layers[s+1]?.uuid;p&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(o,p)),this.selectedLayerUuid=p)}renderToolbar(){const o=this.selectedLayerUuid!==void 0;return Ce`
            <k-command ?disabled=${!o} 
                      title="Rename selected layer" 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
            </k-command>
            <k-command ?disabled=${!o} 
                      title="Delete selected layer" 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
            </k-command>
        `}renderContextMenu(){const o=this.selectedLayerUuid!==void 0;return Ce`
            <k-command ?disabled=${!o} 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
                Rename
            </k-command>
            <k-command ?disabled=${!o} 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
                Delete
            </k-command>
        `}render(){return gn(!this.mapEditor,()=>Ce`
                    <k-no-content message="Select a map."></k-no-content>`,()=>Ce`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((o,n)=>Ce`
                            <wa-tree-item @click="${()=>o.uuid&&this.selectLayer(o.uuid)}" 
                                          class="${this.selectedLayerUuid===o.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${o.name??`Layer ${n+1}`}${n==0?Ce`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-command size="small"
                                                  icon="${o.visible!==!1?"eye":"eye-slash"}"
                                                  title="${o.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>o.uuid&&this.toggleVisible(o.uuid)}>
                                        </k-command>
                                        <k-command size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${n===0}"
                                                  .action=${()=>o.uuid&&this.moveLayerUp(o.uuid)}>
                                        </k-command>
                                        <k-command size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${n===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>o.uuid&&this.moveLayerDown(o.uuid)}>
                                        </k-command>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(o=>Ce`
                            <wa-tree-item>
                                <span>${_t(o.src)}</span>
                                <k-command size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{o.uuid&&this.confirmAction(`Delete control "${_t(o.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(o.uuid)))}}>
                                </k-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(o=>Ce`
                            <wa-tree-item>
                                <span>${_t(o.src)}</span>
                                <k-command size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{o.uuid&&this.confirmAction(`Delete overlay "${_t(o.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(o.uuid)))}}>
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
            `)}};Vt.styles=Qt`
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
    `;On([wn()],Vt.prototype,"selectedLayerUuid",2);Vt=On([en("gs-map-props")],Vt);var Lr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Cn=(o,n,s,p)=>{for(var y=p>1?void 0:p?Ur(n,s):n,E=o.length-1,m;E>=0;E--)(m=o[E])&&(y=(p?m(n,s,y):m(y))||y);return p&&y&&Lr(n,s,y),y};const Fr="catalog.root";let dt=class extends Zt{constructor(){super(...arguments),this.treeRef=mn()}doBeforeUI(){const o=mt.getContributions(Fr);this.rootNodes=this.toTreeNodes(o)}renderToolbar(){const o=Fe.get()instanceof dt&&Lt.get()!==void 0;return Ce`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!o} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(o){return o.map(n=>{const s={data:n.state,icon:n.icon,label:n.label,leaf:!1};if(n.contributionId){const p=mt.getContributions(n.contributionId);s.leaf=p.length===0,s.children=this.toTreeNodes(p)}return s})}onItemDblClicked(o){const n=o.currentTarget.model.data.url;this.executeCommand("checkout",{url:n})}onSelectionChanged(o){const n=o.detail.selection[0].model;Lt.set(n.data)}setAllExpanded(o){const n=this.treeRef.value;n&&n.querySelectorAll("wa-tree-item").forEach(s=>{s.expanded=o})}refresh(){this.requestUpdate()}createTreeItems(o,n=!1){return o?Ce`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${o} ?expanded=${n}>
                <span><k-icon name="${o.icon}"></k-icon> ${o.label}</span>
                ${o.children?.map(s=>this.createTreeItems(s))}
            </wa-tree-item>`:Ce``}render(){return Ce`
            <wa-tree ${bn(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${this.rootNodes?.map(o=>this.createTreeItems(o,!0))}
            </wa-tree>
        `}};dt.styles=Qt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;Cn([wn()],dt.prototype,"rootNodes",2);dt=Cn([en("gs-catalog")],dt);const Rr="geo!space catalog",Nr="earth",$r="catalog.root.geospace",jr=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],zr={label:Rr,icon:Nr,contributionId:$r,items:jr};gt({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async o=>{let n=o.params&&o.params.url;if(!n){const p=Lt.get();if(!p||!("url"in p))return;n=p.url}const s=await St.getWorkspace();if(!s){Ve("No workspace selected.");return}fetch(n,{method:"GET"}).then(p=>p.blob()).then(p=>{const y=new URL(n).pathname.split("/"),E=y[y.length-1];return s.getResource(E,{create:!0}).then(m=>m.saveContents(p,{contentType:kn.BINARY}).then(()=>{Pt("File checked out: "+E)}))}).catch(p=>{Ve(p)})}}});gt({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async o=>{const n=Fe.get();n instanceof dt&&n.refresh()}}});gt({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async o=>{const n=Fe.get();n instanceof dt&&n.setAllExpanded(!0)}}});gt({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async o=>{const n=Fe.get();n instanceof dt&&n.setAllExpanded(!1)}}});Dn(zr);const Ye=Kt("GsCommandHandlers"),st=o=>o.activeEditor instanceof Pe,ft=o=>{const n=o.activeEditor;if(!(n instanceof Pe)||!n.getOperations())throw Ye.error("GsMapEditor with renderer not available in context.activeEditor"),new Error("GsMapEditor with renderer not available in context.activeEditor");return n.getOperations()};Oe.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level (typically 0-20, where 0=world view, 5-9=country/region, 10-12=city, 13-15=street, 16-20=building detail)",required:!0}]},handler:{canExecute:st,execute:async o=>{const n=ft(o),s=Number(o.params.zoom).valueOf();return await n.setZoom(s),{zoom:s}}}});Oe.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:o=>Fe.get()instanceof Pe,execute:async o=>{const n=Fe.get(),s=n.getGsMap();if(s?.view?.zoom!==void 0){const p=n.mapOperations,y=s.view.zoom+1;return await p?.setZoom(y),y}return s?.view?.zoom}}});Oe.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:o=>Fe.get()instanceof Pe,execute:async o=>{const n=Fe.get(),s=n.getGsMap();if(s?.view?.zoom!==void 0){const p=n.mapOperations,y=s.view.zoom-1;return await p?.setZoom(y),y}return s?.view?.zoom}}});Oe.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the location (e.g., 52.52 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0},{name:"lon",description:"the longitude of the location (e.g., 13.405 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0}]},handler:{canExecute:st,execute:async o=>{const n=ft(o),s=Hn([Number(o.params.lon).valueOf(),Number(o.params.lat).valueOf()]);await n.setCenter([s[0],s[1]])}}});Oe.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(tt).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:st,execute:async o=>{const n=ft(o),s=o.params.source?.trim().toLowerCase(),p=o.params.url,y=Zn(s),E=o?.params&&o.params.basemap==!0;let m;p&&(m=p.split("/").pop()),!m&&y&&(m=y);const M=ln({name:m,type:Kn(s),source:ln({type:y,url:p??Qn(y)})});await Et(M,"url"),await n.addLayer(M,E)}}});Oe.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:st,execute:async o=>{const n=ft(o),p=o.activeEditor.getGsMap(),y=parseInt(o.params.index)-1;if(y<0||!p||y>=p.layers.length)return;const E=p.layers[y];E?.uuid&&await n.deleteLayer(E.uuid)}}});Oe.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:st,execute:async o=>{const n=ft(o),p=o.activeEditor.getGsMap(),y=parseInt(o.params.index)-1;if(y<0||!p||y>=p.layers.length)return;const E=p.layers[y];if(!E?.uuid)return;const m=E.name||`Layer ${y+1}`,M=o.params?.newName||await vn(`Enter new name for "${m}":`,m);!M||M===m||await n.renameLayer(E.uuid,M)}}});Oe.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:st,execute:async o=>{const n=ft(o),s=o.params?.mode;await n.switchColorMode(s)}}});Oe.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:st,execute:async o=>{const n=ft(o),s=o.params.src,p=o.params.position;await n.addOverlayFromModule(s,p)}}});Oe.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:st,execute:async o=>{const n=ft(o),s=o.params.src;await n.addControlFromModule(s)}}});Oe.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates in WGS84 (EPSG:4326) format",type:"number[]"}]},handler:{canExecute:st,execute:async o=>{const n=o.activeEditor,s=o.params.latlon,y=await n.getRenderer().getViewExtent();if(!y)throw new Error("Failed to get view extent");let E=y;return(s||s===void 0)&&(E=Xn(y,"EPSG:3857","EPSG:4326"),[E[0],E[1]]=[E[1],E[0]],[E[2],E[3]]=[E[3],E[2]]),o.viewExtent=E,E}}});Oe.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:o=>Fe.get()instanceof Pe,execute:async o=>{const n=Fe.get().renderer;if(!n||!("toggleMobileView"in n))throw new Error("Mobile view toggle not available on this renderer");n.toggleMobileView()}}});Oe.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:o=>Fe.get()instanceof Pe,execute:async o=>{const n=Fe.get();n instanceof Pe&&await n.refresh()}}});Oe.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:o=>Fe.get()instanceof Pe,execute:async o=>{const n=Fe.get();n instanceof Pe&&await n.resetView()}}});Oe.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:o=>Fe.get()instanceof Pe,execute:async o=>{const s=Fe.get().mapOperations;s&&await s.switchColorMode()}}});Oe.registerAll({command:{id:"capture_map_screenshot",name:"Capture map screenshot",description:"Takes a screenshot of the currently visible OpenLayers map and returns it as a base64-encoded data URL. Useful for analyzing map imagery with ML tools.",parameters:[{name:"filePath",description:"Optional path for the screenshot file. If provided, the screenshot will be saved to this path. If not provided, a unique filename based on date and time will be generated and the screenshot will be saved (e.g., 'screenshot-2024-01-15-14-30-45.png').",type:"string",required:!1}],output:[{name:"dataUrl",description:"Base64-encoded data URL of the map screenshot (format: data:image/png;base64,...)",type:"string"},{name:"width",description:"Width of the captured image in pixels",type:"number"},{name:"height",description:"Height of the captured image in pixels",type:"number"},{name:"filePath",description:"Path of the saved file (always present as screenshot is always saved)",type:"string"}]},handler:{canExecute:o=>o.activeEditor instanceof Pe,execute:async o=>{try{const n=o.activeEditor;if(!(n instanceof Pe))return{error:"Active editor is not a map editor"};const s=n.getRenderer();return!s||!(s instanceof Mn)?{error:"Map renderer not available"}:await er.runAsync("Capturing map screenshot",async p=>{try{p.message="Capturing screenshot from map...",p.progress=10,Ye.info("Capturing map screenshot...");const y=await s.sendMessage("captureScreenshot",{});if(!y)throw Ye.error("No result from captureScreenshot"),Ve("Failed to capture screenshot: No result from iframe"),new Error("No result from screenshot capture");if(!y.success)throw Ye.error(`Screenshot capture failed: ${y.error||"Unknown error"}`),Ve(`Failed to capture screenshot: ${y.error||"Unknown error"}`),new Error(y.error||"Failed to capture screenshot");p.message="Preparing to save screenshot...",p.progress=50,Ye.info("Screenshot captured, saving to workspace...");const E=await St.getWorkspace();if(!E)throw Ye.error("No workspace available"),Ve("Failed to save screenshot: No workspace available"),new Error("No workspace available");let m=o.params?.filePath;if(!m){let k="map";n.input?.data instanceof Bt&&(k=n.input.data.getName().replace(/\.geospace$/i,""),k=k.replace(/[^a-zA-Z0-9_-]/g,"_"));const S=new Date,N=S.getFullYear(),ie=String(S.getMonth()+1).padStart(2,"0"),me=String(S.getDate()).padStart(2,"0"),be=String(S.getHours()).padStart(2,"0"),B=String(S.getMinutes()).padStart(2,"0"),T=String(S.getSeconds()).padStart(2,"0");m=`${k}-screenshot-${N}-${ie}-${me}-${be}-${B}-${T}.png`}const M=m.endsWith(".png")?m:`${m}.png`;if(p.message=`Saving screenshot to ${M}...`,p.progress=70,Ye.info(`Saving screenshot to: ${M}`),!y.dataUrl)throw Ye.error("No dataUrl in screenshot result"),Ve("Failed to save screenshot: No image data received"),new Error("No image data in screenshot result");const ne=y.dataUrl.split(",")[1];if(!ne)throw Ye.error("Invalid dataUrl format"),Ve("Failed to save screenshot: Invalid image data format"),new Error("Invalid image data format");p.message="Converting image data...",p.progress=80;const re=Uint8Array.from(atob(ne),k=>k.charCodeAt(0)),fe=new Blob([re],{type:"image/png"}),I=await E.getResource(M,{create:!0});if(!I)throw Ye.error(`Failed to create file resource: ${M}`),Ve(`Failed to save screenshot: Could not create file ${M}`),new Error(`Failed to create file: ${M}`);return p.message="Writing file to workspace...",p.progress=90,Ye.info(`Saving blob (size: ${fe.size} bytes) to file...`),await I.saveContents(fe,{contentType:kn.BINARY}),p.message="Screenshot saved successfully",p.progress=100,Ye.info(`Screenshot saved successfully to: ${M}`),Pt(`Screenshot saved: ${M}`),{dataUrl:y.dataUrl,width:y.width,height:y.height,filePath:M}}catch(y){throw Ye.error(`Screenshot capture failed: ${y.message}`),Ve(`Failed to capture screenshot: ${y.message}`),y}})}catch(n){return Ye.error(`Failed to capture map screenshot: ${n.message}`),Ve(`Failed to capture screenshot: ${n.message}`),{error:`Failed to capture map screenshot: ${n.message}`}}}}});const Wr=`
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
`,Gr={enhance:async(o,n)=>`${o}

${Wr}`,priority:5};function Vr(){mt.registerContribution(tr,{label:"Geo!space Prompt Enhancer",enhancer:Gr})}const Br=`# 🌐 geo!space
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

**Happy mapping! 🗺️✨**`,qr=Ct.version,pn=Kt("GeoSpaceApp"),Yr=["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.github-service","system.memoryusage","system.pythonpackagemanager","system.settings-tree","system.ai-system","system.howto"],Jr=[{target:nr,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:"system.fastviews-bottomend",name:"catalog",label:"Catalog",icon:"book",component:o=>Ce`<gs-catalog id="${o}"></gs-catalog>`},{target:rr,name:"map-props",label:"Map Properties",icon:"fg map-options",component:o=>Ce`<gs-map-props id="${o}"></gs-map-props>`},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const o=Lt.get();return o instanceof Bt?!xn(o):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_map_file"}],Hr=[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>kt(()=>import("./mapbuilder-extension-Bg2Rc52C.js"),__vite__mapDeps([0,1,2,3,4,5])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>kt(()=>import("./style-editor-extension-CPzZ0Aqp.js"),__vite__mapDeps([6,1,2,3,4,5])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>kt(()=>import("./overpass-extension-CKmoEjSY.js"),__vite__mapDeps([7,2,1,3,4])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>kt(()=>import("./gtfs-extension-DNRJynXa.js"),__vite__mapDeps([8,1,2,3,4])),icon:"map-location-dot"}],_n={id:"geospace",name:"🌐geo!space",version:qr,description:"An IDE for working with geospatial data.",metadata:{github:{owner:"erdalkaraca",repo:"geospace"},favicon:"/geospace.svg"},extensions:Yr,contributions:{ui:Jr,extensions:Hr},releaseHistory:async()=>{try{const{fetchReleases:o}=await kt(async()=>{const{fetchReleases:n}=await import("./github-service-BirPRcev.js");return{fetchReleases:n}},__vite__mapDeps([9,1,2,3,4]));return await o()}catch(o){return console.error("Failed to fetch release history from GitHub:",o),[]}},async initialize(){ar.addPackage({name:Ct.name,version:Ct.version,dependencies:Ct.dependencies,devDependencies:Ct.devDependencies}),Vr(),mt.registerContribution("system.icons",{label:"geo!space File Icons",mappings:{geospace:"earth"},priority:1}),gt({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async o=>{const n=Lt.get();if(!(n instanceof Bt))return;const s=tn(n);if(!s){pn.warn(`Unsupported file type: ${n.getName()}`);return}const p=n.getWorkspacePath(),y=Oe.createExecutionContext({source:s,url:p});await Oe.execute("add_layer",y)}}}),gt({command:{id:"create_map_file",name:"Create Geospace map file",description:"Creates a new .geospace map file with default map structure. This is specifically for creating geospace map files, not general files.",parameters:[{name:"path",description:"the path including name of the map file to be created (e.g., 'my-map.geospace' or 'my map'). The .geospace extension will be added automatically if missing. Must be relative to the workspace.",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async o=>{const n={...yn,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}},s=o.params?.path||"map.geospace",p=s.endsWith(".geospace")?s:`${s}.geospace`;return await Oe.execute("create_file",{params:{path:p,contents:JSON.stringify(n,null,2),extension:".geospace",ask:s==="map.geospace"}})}}}),gt({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async o=>{const n=new ir(Br,"README.md");await hn.loadEditor(n)}},contribution:{target:or,icon:"question-circle",label:"Welcome"}}),pn.info("geo!space is ready!")}};sr.registerApp(_n,{defaultAppId:"geospace",autoStart:!0,container:document.body});const Xr=Object.freeze(Object.defineProperty({__proto__:null,geospaceApp:_n},Symbol.toStringTag,{value:"Module"}));export{Pe as G,Xr as g,Tn as l};
