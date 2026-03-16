import{i as _,n as y,f as ot,r as k,b as c,a as U,w as v,o as lt,d as te,A as ct,s as we,t as R}from"./repeat-Duk-1tMZ.js";import{c as H,H as pt,m as P,h as Oe,f as $e,b as dt,d as ht,o as ut,w as gt,L as He,t as B,k as ie,I as mt,u as ft,j as wt,z as Fe,l as bt}from"./config-BnnWtrGw-CtyKT0bq.js";import{a as be,C as vt,b as kt,K as j,c as W,T as Ze,E as yt,d as xt,t as me,P as Ve}from"./ai-service-DYY_iSJA-BG4rsu6W.js";function Se(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var L=Se();function Ke(t){L=t}var Y={exec:()=>null};function g(t,e=""){let r=typeof t=="string"?t:t.source,a={replace:(s,n)=>{let i=typeof n=="string"?n:n.source;return i=i.replace($.caret,"$1"),r=r.replace(s,i),a},getRegex:()=>new RegExp(r,e)};return a}var $t=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),$={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},St=/^(?:[ \t]*(?:\n|$))+/,At=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Tt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,se=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ct=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ae=/(?:[*+-]|\d{1,9}[.)])/,We=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Qe=g(We).replace(/bull/g,Ae).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Pt=g(We).replace(/bull/g,Ae).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Te=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Mt=/^[^\n]+/,Ce=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,It=g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ce).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),_t=g(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ae).getRegex(),de="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Pe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Rt=g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Pe).replace("tag",de).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ye=g(Te).replace("hr",se).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de).getRegex(),zt=g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ye).getRegex(),Me={blockquote:zt,code:At,def:It,fences:Tt,heading:Ct,hr:se,html:Rt,lheading:Qe,list:_t,newline:St,paragraph:Ye,table:Y,text:Mt},Ue=g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",se).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de).getRegex(),Et={...Me,lheading:Pt,table:Ue,paragraph:g(Te).replace("hr",se).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ue).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de).getRegex()},qt={...Me,html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Pe).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Y,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(Te).replace("hr",se).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Qe).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Dt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ot=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Xe=/^( {2,}|\\)\n(?!\s*$)/,Ut=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,he=/[\p{P}\p{S}]/u,Ie=/[\s\p{P}\p{S}]/u,Je=/[^\s\p{P}\p{S}]/u,Lt=g(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ie).getRegex(),et=/(?!~)[\p{P}\p{S}]/u,Gt=/(?!~)[\s\p{P}\p{S}]/u,Bt=/(?:[^\s\p{P}\p{S}]|~)/u,jt=g(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",$t?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),tt=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Nt=g(tt,"u").replace(/punct/g,he).getRegex(),Ht=g(tt,"u").replace(/punct/g,et).getRegex(),st="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ft=g(st,"gu").replace(/notPunctSpace/g,Je).replace(/punctSpace/g,Ie).replace(/punct/g,he).getRegex(),Zt=g(st,"gu").replace(/notPunctSpace/g,Bt).replace(/punctSpace/g,Gt).replace(/punct/g,et).getRegex(),Vt=g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Je).replace(/punctSpace/g,Ie).replace(/punct/g,he).getRegex(),Kt=g(/\\(punct)/,"gu").replace(/punct/g,he).getRegex(),Wt=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Qt=g(Pe).replace("(?:-->|$)","-->").getRegex(),Yt=g("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Qt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),oe=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Xt=g(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",oe).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),rt=g(/^!?\[(label)\]\[(ref)\]/).replace("label",oe).replace("ref",Ce).getRegex(),at=g(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ce).getRegex(),Jt=g("reflink|nolink(?!\\()","g").replace("reflink",rt).replace("nolink",at).getRegex(),Le=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,_e={_backpedal:Y,anyPunctuation:Kt,autolink:Wt,blockSkip:jt,br:Xe,code:Ot,del:Y,emStrongLDelim:Nt,emStrongRDelimAst:Ft,emStrongRDelimUnd:Vt,escape:Dt,link:Xt,nolink:at,punctuation:Lt,reflink:rt,reflinkSearch:Jt,tag:Yt,text:Ut,url:Y},es={..._e,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",oe).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",oe).getRegex()},ve={..._e,emStrongRDelimAst:Zt,emStrongLDelim:Ht,url:g(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Le).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:g(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Le).getRegex()},ts={...ve,br:g(Xe).replace("{2,}","*").getRegex(),text:g(ve.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ne={normal:Me,gfm:Et,pedantic:qt},V={normal:_e,gfm:ve,breaks:ts,pedantic:es},ss={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ge=t=>ss[t];function M(t,e){if(e){if($.escapeTest.test(t))return t.replace($.escapeReplace,Ge)}else if($.escapeTestNoEncode.test(t))return t.replace($.escapeReplaceNoEncode,Ge);return t}function Be(t){try{t=encodeURI(t).replace($.percentDecode,"%")}catch{return null}return t}function je(t,e){let r=t.replace($.findPipe,(n,i,l)=>{let o=!1,h=i;for(;--h>=0&&l[h]==="\\";)o=!o;return o?"|":" |"}),a=r.split($.splitPipe),s=0;if(a[0].trim()||a.shift(),a.length>0&&!a.at(-1)?.trim()&&a.pop(),e)if(a.length>e)a.splice(e);else for(;a.length<e;)a.push("");for(;s<a.length;s++)a[s]=a[s].trim().replace($.slashPipe,"|");return a}function K(t,e,r){let a=t.length;if(a===0)return"";let s=0;for(;s<a&&t.charAt(a-s-1)===e;)s++;return t.slice(0,a-s)}function rs(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let a=0;a<t.length;a++)if(t[a]==="\\")a++;else if(t[a]===e[0])r++;else if(t[a]===e[1]&&(r--,r<0))return a;return r>0?-2:-1}function Ne(t,e,r,a,s){let n=e.href,i=e.title||null,l=t[1].replace(s.other.outputLinkReplace,"$1");a.state.inLink=!0;let o={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:n,title:i,text:l,tokens:a.inlineTokens(l)};return a.state.inLink=!1,o}function as(t,e,r){let a=t.match(r.other.indentCodeCompensation);if(a===null)return e;let s=a[1];return e.split(`
`).map(n=>{let i=n.match(r.other.beginningSpace);if(i===null)return n;let[l]=i;return l.length>=s.length?n.slice(s.length):n}).join(`
`)}var le=class{options;rules;lexer;constructor(t){this.options=t||L}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:K(r,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let r=e[0],a=as(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:a}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let a=K(r,"#");(this.options.pedantic||!a||this.rules.other.endingSpaceChar.test(a))&&(r=a.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:K(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let r=K(e[0],`
`).split(`
`),a="",s="",n=[];for(;r.length>0;){let i=!1,l=[],o;for(o=0;o<r.length;o++)if(this.rules.other.blockquoteStart.test(r[o]))l.push(r[o]),i=!0;else if(!i)l.push(r[o]);else break;r=r.slice(o);let h=l.join(`
`),p=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${h}`:h,s=s?`${s}
${p}`:p;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,n,!0),this.lexer.state.top=f,r.length===0)break;let u=n.at(-1);if(u?.type==="code")break;if(u?.type==="blockquote"){let b=u,d=b.raw+`
`+r.join(`
`),m=this.blockquote(d);n[n.length-1]=m,a=a.substring(0,a.length-b.raw.length)+m.raw,s=s.substring(0,s.length-b.text.length)+m.text;break}else if(u?.type==="list"){let b=u,d=b.raw+`
`+r.join(`
`),m=this.list(d);n[n.length-1]=m,a=a.substring(0,a.length-u.raw.length)+m.raw,s=s.substring(0,s.length-b.raw.length)+m.raw,r=d.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:n,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r=e[1].trim(),a=r.length>1,s={type:"list",raw:"",ordered:a,start:a?+r.slice(0,-1):"",loose:!1,items:[]};r=a?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=a?r:"[*+-]");let n=this.rules.other.listItemRegex(r),i=!1;for(;t;){let o=!1,h="",p="";if(!(e=n.exec(t))||this.rules.block.hr.test(t))break;h=e[0],t=t.substring(h.length);let f=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,A=>" ".repeat(3*A.length)),u=t.split(`
`,1)[0],b=!f.trim(),d=0;if(this.options.pedantic?(d=2,p=f.trimStart()):b?d=e[1].length+1:(d=e[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,p=f.slice(d),d+=e[1].length),b&&this.rules.other.blankLine.test(u)&&(h+=u+`
`,t=t.substring(u.length+1),o=!0),!o){let A=this.rules.other.nextBulletRegex(d),G=this.rules.other.hrRegex(d),ae=this.rules.other.fencesBeginRegex(d),De=this.rules.other.headingBeginRegex(d),nt=this.rules.other.htmlBeginRegex(d);for(;t;){let ge=t.split(`
`,1)[0],Z;if(u=ge,this.options.pedantic?(u=u.replace(this.rules.other.listReplaceNesting,"  "),Z=u):Z=u.replace(this.rules.other.tabCharGlobal,"    "),ae.test(u)||De.test(u)||nt.test(u)||A.test(u)||G.test(u))break;if(Z.search(this.rules.other.nonSpaceChar)>=d||!u.trim())p+=`
`+Z.slice(d);else{if(b||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ae.test(f)||De.test(f)||G.test(f))break;p+=`
`+u}!b&&!u.trim()&&(b=!0),h+=ge+`
`,t=t.substring(ge.length+1),f=Z.slice(d)}}s.loose||(i?s.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(i=!0));let m=null,x;this.options.gfm&&(m=this.rules.other.listIsTask.exec(p),m&&(x=m[0]!=="[ ] ",p=p.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:h,task:!!m,checked:x,loose:!1,text:p,tokens:[]}),s.raw+=h}let l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let o=0;o<s.items.length;o++)if(this.lexer.state.top=!1,s.items[o].tokens=this.lexer.blockTokens(s.items[o].text,[]),!s.loose){let h=s.items[o].tokens.filter(f=>f.type==="space"),p=h.length>0&&h.some(f=>this.rules.other.anyLine.test(f.raw));s.loose=p}if(s.loose)for(let o=0;o<s.items.length;o++)s.items[o].loose=!0;return s}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:a,title:s}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=je(e[1]),a=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],n={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===a.length){for(let i of a)this.rules.other.tableAlignRight.test(i)?n.align.push("right"):this.rules.other.tableAlignCenter.test(i)?n.align.push("center"):this.rules.other.tableAlignLeft.test(i)?n.align.push("left"):n.align.push(null);for(let i=0;i<r.length;i++)n.header.push({text:r[i],tokens:this.lexer.inline(r[i]),header:!0,align:n.align[i]});for(let i of s)n.rows.push(je(i,n.header.length).map((l,o)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:n.align[o]})));return n}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let n=K(r.slice(0,-1),"\\");if((r.length-n.length)%2===0)return}else{let n=rs(e[2],"()");if(n===-2)return;if(n>-1){let i=(e[0].indexOf("!")===0?5:4)+e[1].length+n;e[2]=e[2].substring(0,n),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let a=e[2],s="";if(this.options.pedantic){let n=this.rules.other.pedanticHrefTitle.exec(a);n&&(a=n[1],s=n[3])}else s=e[3]?e[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?a=a.slice(1):a=a.slice(1,-1)),Ne(e,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let a=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[a.toLowerCase()];if(!s){let n=r[0].charAt(0);return{type:"text",raw:n,text:n}}return Ne(r,s,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let a=this.rules.inline.emStrongLDelim.exec(t);if(!(!a||a[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(a[1]||a[2])||!r||this.rules.inline.punctuation.exec(r))){let s=[...a[0]].length-1,n,i,l=s,o=0,h=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+s);(a=h.exec(e))!=null;){if(n=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!n)continue;if(i=[...n].length,a[3]||a[4]){l+=i;continue}else if((a[5]||a[6])&&s%3&&!((s+i)%3)){o+=i;continue}if(l-=i,l>0)continue;i=Math.min(i,i+l+o);let p=[...a[0]][0].length,f=t.slice(0,s+a.index+p+i);if(Math.min(s,i)%2){let b=f.slice(1,-1);return{type:"em",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}let u=f.slice(2,-2);return{type:"strong",raw:f,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),a=this.rules.other.nonSpaceChar.test(r),s=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return a&&s&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let r,a;return e[2]==="@"?(r=e[1],a="mailto:"+r):(r=e[1],a=r),{type:"link",raw:e[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let r,a;if(e[2]==="@")r=e[0],a="mailto:"+r;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(s!==e[0]);r=e[0],e[1]==="www."?a="http://"+e[0]:a=e[0]}return{type:"link",raw:e[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},T=class ke{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||L,this.options.tokenizer=this.options.tokenizer||new le,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:$,block:ne.normal,inline:V.normal};this.options.pedantic?(r.block=ne.pedantic,r.inline=V.pedantic):this.options.gfm&&(r.block=ne.gfm,this.options.breaks?r.inline=V.breaks:r.inline=V.gfm),this.tokenizer.rules=r}static get rules(){return{block:ne,inline:V}}static lex(e,r){return new ke(r).lex(e)}static lexInline(e,r){return new ke(r).inlineTokens(e)}lex(e){e=e.replace($.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let a=this.inlineQueue[r];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],a=!1){for(this.options.pedantic&&(e=e.replace($.tabCharGlobal,"    ").replace($.spaceLine,""));e;){let s;if(this.options.extensions?.block?.some(i=>(s=i.call({lexer:this},e,r))?(e=e.substring(s.raw.length),r.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);let i=r.at(-1);s.raw.length===1&&i!==void 0?i.raw+=`
`:r.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);let i=r.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+s.raw,i.text+=`
`+s.text,this.inlineQueue.at(-1).src=i.text):r.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);let i=r.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+s.raw,i.text+=`
`+s.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},r.push(s));continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),r.push(s);continue}let n=e;if(this.options.extensions?.startBlock){let i=1/0,l=e.slice(1),o;this.options.extensions.startBlock.forEach(h=>{o=h.call({lexer:this},l),typeof o=="number"&&o>=0&&(i=Math.min(i,o))}),i<1/0&&i>=0&&(n=e.substring(0,i+1))}if(this.state.top&&(s=this.tokenizer.paragraph(n))){let i=r.at(-1);a&&i?.type==="paragraph"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):r.push(s),a=n.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);let i=r.at(-1);i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):r.push(s);continue}if(e){let i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let a=e,s=null;if(this.tokens.links){let o=Object.keys(this.tokens.links);if(o.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)o.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,s.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let n;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)n=s[2]?s[2].length:0,a=a.slice(0,s.index+n)+"["+"a".repeat(s[0].length-n-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);a=this.options.hooks?.emStrongMask?.call({lexer:this},a)??a;let i=!1,l="";for(;e;){i||(l=""),i=!1;let o;if(this.options.extensions?.inline?.some(p=>(o=p.call({lexer:this},e,r))?(e=e.substring(o.raw.length),r.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let p=r.at(-1);o.type==="text"&&p?.type==="text"?(p.raw+=o.raw,p.text+=o.text):r.push(o);continue}if(o=this.tokenizer.emStrong(e,a,l)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.del(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),r.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),r.push(o);continue}let h=e;if(this.options.extensions?.startInline){let p=1/0,f=e.slice(1),u;this.options.extensions.startInline.forEach(b=>{u=b.call({lexer:this},f),typeof u=="number"&&u>=0&&(p=Math.min(p,u))}),p<1/0&&p>=0&&(h=e.substring(0,p+1))}if(o=this.tokenizer.inlineText(h)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(l=o.raw.slice(-1)),i=!0;let p=r.at(-1);p?.type==="text"?(p.raw+=o.raw,p.text+=o.text):r.push(o);continue}if(e){let p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return r}},ce=class{options;parser;constructor(t){this.options=t||L}space(t){return""}code({text:t,lang:e,escaped:r}){let a=(e||"").match($.notSpaceStart)?.[0],s=t.replace($.endingNewline,"")+`
`;return a?'<pre><code class="language-'+M(a)+'">'+(r?s:M(s,!0))+`</code></pre>
`:"<pre><code>"+(r?s:M(s,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,r=t.start,a="";for(let i=0;i<t.items.length;i++){let l=t.items[i];a+=this.listitem(l)}let s=e?"ol":"ul",n=e&&r!==1?' start="'+r+'"':"";return"<"+s+n+`>
`+a+"</"+s+`>
`}listitem(t){let e="";if(t.task){let r=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+M(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let s=0;s<t.header.length;s++)r+=this.tablecell(t.header[s]);e+=this.tablerow({text:r});let a="";for(let s=0;s<t.rows.length;s++){let n=t.rows[s];r="";for(let i=0;i<n.length;i++)r+=this.tablecell(n[i]);a+=this.tablerow({text:r})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+a+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${M(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){let a=this.parser.parseInline(r),s=Be(t);if(s===null)return a;t=s;let n='<a href="'+t+'"';return e&&(n+=' title="'+M(e)+'"'),n+=">"+a+"</a>",n}image({href:t,title:e,text:r,tokens:a}){a&&(r=this.parser.parseInline(a,this.parser.textRenderer));let s=Be(t);if(s===null)return M(r);t=s;let n=`<img src="${t}" alt="${r}"`;return e&&(n+=` title="${M(e)}"`),n+=">",n}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:M(t.text)}},Re=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},C=class ye{options;renderer;textRenderer;constructor(e){this.options=e||L,this.options.renderer=this.options.renderer||new ce,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Re}static parse(e,r){return new ye(r).parse(e)}static parseInline(e,r){return new ye(r).parseInline(e)}parse(e,r=!0){let a="";for(let s=0;s<e.length;s++){let n=e[s];if(this.options.extensions?.renderers?.[n.type]){let l=n,o=this.options.extensions.renderers[l.type].call({parser:this},l);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){a+=o||"";continue}}let i=n;switch(i.type){case"space":{a+=this.renderer.space(i);continue}case"hr":{a+=this.renderer.hr(i);continue}case"heading":{a+=this.renderer.heading(i);continue}case"code":{a+=this.renderer.code(i);continue}case"table":{a+=this.renderer.table(i);continue}case"blockquote":{a+=this.renderer.blockquote(i);continue}case"list":{a+=this.renderer.list(i);continue}case"html":{a+=this.renderer.html(i);continue}case"def":{a+=this.renderer.def(i);continue}case"paragraph":{a+=this.renderer.paragraph(i);continue}case"text":{let l=i,o=this.renderer.text(l);for(;s+1<e.length&&e[s+1].type==="text";)l=e[++s],o+=`
`+this.renderer.text(l);r?a+=this.renderer.paragraph({type:"paragraph",raw:o,text:o,tokens:[{type:"text",raw:o,text:o,escaped:!0}]}):a+=o;continue}default:{let l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return a}parseInline(e,r=this.renderer){let a="";for(let s=0;s<e.length;s++){let n=e[s];if(this.options.extensions?.renderers?.[n.type]){let l=this.options.extensions.renderers[n.type].call({parser:this},n);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){a+=l||"";continue}}let i=n;switch(i.type){case"escape":{a+=r.text(i);break}case"html":{a+=r.html(i);break}case"link":{a+=r.link(i);break}case"image":{a+=r.image(i);break}case"strong":{a+=r.strong(i);break}case"em":{a+=r.em(i);break}case"codespan":{a+=r.codespan(i);break}case"br":{a+=r.br(i);break}case"del":{a+=r.del(i);break}case"text":{a+=r.text(i);break}default:{let l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return a}},Q=class{options;block;constructor(t){this.options=t||L}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?T.lex:T.lexInline}provideParser(){return this.block?C.parse:C.parseInline}},is=class{defaults=Se();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=C;Renderer=ce;TextRenderer=Re;Lexer=T;Tokenizer=le;Hooks=Q;constructor(...t){this.use(...t)}walkTokens(t,e){let r=[];for(let a of t)switch(r=r.concat(e.call(this,a)),a.type){case"table":{let s=a;for(let n of s.header)r=r.concat(this.walkTokens(n.tokens,e));for(let n of s.rows)for(let i of n)r=r.concat(this.walkTokens(i.tokens,e));break}case"list":{let s=a;r=r.concat(this.walkTokens(s.items,e));break}default:{let s=a;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(n=>{let i=s[n].flat(1/0);r=r.concat(this.walkTokens(i,e))}):s.tokens&&(r=r.concat(this.walkTokens(s.tokens,e)))}}return r}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let a={...r};if(a.async=this.defaults.async||a.async||!1,r.extensions&&(r.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let n=e.renderers[s.name];n?e.renderers[s.name]=function(...i){let l=s.renderer.apply(this,i);return l===!1&&(l=n.apply(this,i)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let n=e[s.level];n?n.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),a.extensions=e),r.renderer){let s=this.defaults.renderer||new ce(this.defaults);for(let n in r.renderer){if(!(n in s))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;let i=n,l=r.renderer[i],o=s[i];s[i]=(...h)=>{let p=l.apply(s,h);return p===!1&&(p=o.apply(s,h)),p||""}}a.renderer=s}if(r.tokenizer){let s=this.defaults.tokenizer||new le(this.defaults);for(let n in r.tokenizer){if(!(n in s))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;let i=n,l=r.tokenizer[i],o=s[i];s[i]=(...h)=>{let p=l.apply(s,h);return p===!1&&(p=o.apply(s,h)),p}}a.tokenizer=s}if(r.hooks){let s=this.defaults.hooks||new Q;for(let n in r.hooks){if(!(n in s))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;let i=n,l=r.hooks[i],o=s[i];Q.passThroughHooks.has(n)?s[i]=h=>{if(this.defaults.async&&Q.passThroughHooksRespectAsync.has(n))return(async()=>{let f=await l.call(s,h);return o.call(s,f)})();let p=l.call(s,h);return o.call(s,p)}:s[i]=(...h)=>{if(this.defaults.async)return(async()=>{let f=await l.apply(s,h);return f===!1&&(f=await o.apply(s,h)),f})();let p=l.apply(s,h);return p===!1&&(p=o.apply(s,h)),p}}a.hooks=s}if(r.walkTokens){let s=this.defaults.walkTokens,n=r.walkTokens;a.walkTokens=function(i){let l=[];return l.push(n.call(this,i)),s&&(l=l.concat(s.call(this,i))),l}}this.defaults={...this.defaults,...a}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return T.lex(t,e??this.defaults)}parser(t,e){return C.parse(t,e??this.defaults)}parseMarkdown(t){return(e,r)=>{let a={...r},s={...this.defaults,...a},n=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return n(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return n(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return n(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=t),s.async)return(async()=>{let i=s.hooks?await s.hooks.preprocess(e):e,l=await(s.hooks?await s.hooks.provideLexer():t?T.lex:T.lexInline)(i,s),o=s.hooks?await s.hooks.processAllTokens(l):l;s.walkTokens&&await Promise.all(this.walkTokens(o,s.walkTokens));let h=await(s.hooks?await s.hooks.provideParser():t?C.parse:C.parseInline)(o,s);return s.hooks?await s.hooks.postprocess(h):h})().catch(n);try{s.hooks&&(e=s.hooks.preprocess(e));let i=(s.hooks?s.hooks.provideLexer():t?T.lex:T.lexInline)(e,s);s.hooks&&(i=s.hooks.processAllTokens(i)),s.walkTokens&&this.walkTokens(i,s.walkTokens);let l=(s.hooks?s.hooks.provideParser():t?C.parse:C.parseInline)(i,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(i){return n(i)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let a="<p>An error occurred:</p><pre>"+M(r.message+"",!0)+"</pre>";return e?Promise.resolve(a):a}if(e)return Promise.reject(r);throw r}}},D=new is;function w(t,e){return D.parse(t,e)}w.options=w.setOptions=function(t){return D.setOptions(t),w.defaults=D.defaults,Ke(w.defaults),w};w.getDefaults=Se;w.defaults=L;w.use=function(...t){return D.use(...t),w.defaults=D.defaults,Ke(w.defaults),w};w.walkTokens=function(t,e){return D.walkTokens(t,e)};w.parseInline=D.parseInline;w.Parser=C;w.parser=C.parse;w.Renderer=ce;w.TextRenderer=Re;w.Lexer=T;w.lexer=T.lex;w.Tokenizer=le;w.Hooks=Q;w.parse=w;w.options;w.setOptions;w.use;w.walkTokens;w.parseInline;C.parse;T.lex;const ns=`You are an assistant in a web application with workspace, editors, and AI chat.

**Tools:**
Commands are exposed as AI-callable tools. Tools are context-aware - available commands depend on active editor, selected files, and workspace state.

**Tool Usage Rules:**
1. If tools are available and match the request, use them - don't describe manual steps
2. Read tool descriptions/parameters to select the correct tool
3. Call tools in sequence for multi-step tasks
4. After successful tool execution, provide a final response - don't loop or call more tools unless explicitly requested
5. If no tools are available, explain what context is needed

Keep responses concise. Use tools when available rather than discussing alternatives.

`,os=[{label:"Ollama (Local)",name:"ollama",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:""},{label:"OpenWebUI (Self Hosted)",name:"openwebui",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/api/v1/chat/completion",apiKey:""},{label:"OpenAI",name:"openai",model:"gpt-4.1",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"},{label:"Groq",name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"},{label:"Cerebras",name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"},{label:"WebLLM",name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}},{label:"Mistral",name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>"},{label:"LiteLLM",name:"litellm",model:"gpt-3.5-turbo",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:"<your api key>"}];for(const{label:t,...e}of os)H.registerContribution(be,{target:be,label:t,provider:e});const ls={priority:20,enhance:async(t,e)=>{try{const r=await gt.getWorkspace(),a=$e.getEditorArea()?.getActiveEditor(),s={workspace:r?.getName()||null,activeEditor:a?{title:a.input?.title||null,editorId:a.input?.editorId||null}:null};return`${t}

***App's state:***
${JSON.stringify(s,null,2)}`}catch{return t}}};H.registerContribution(vt,{label:"App State Enhancer",enhancer:ls});class cs{constructor(){this.activeSession=null,this.pastSessions=[]}async load(){const e=await P.get("aiChatSessions");if(e){if(e.active&&Array.isArray(e.history))this.activeSession=e.active;else if(e.activeSessionId&&Array.isArray(e.sessions))this.activeSession=e.sessions.find(r=>r.id===e.activeSessionId)||null,this.pastSessions=e.sessions.filter(r=>r.id!==e.activeSessionId);else if(Array.isArray(e.all)){const[r,...a]=e.all.sort((s,n)=>n.updatedAt-s.updatedAt);this.activeSession=r||null,this.pastSessions=a}}}async persist(){const e=[];this.activeSession&&e.push(this.activeSession),e.push(...this.pastSessions),await P.set("aiChatSessions",{all:e,activeSessionId:this.activeSession?.id||null})}createSession(){const e={id:`session-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,history:[],title:"New Chat",createdAt:Date.now(),updatedAt:Date.now()};return this.activeSession&&this.pastSessions.unshift(this.activeSession),this.activeSession=e,this.persist(),e}getActiveSession(){return this.activeSession}getActiveSessionId(){return this.activeSession?.id||""}switchToSession(e){if(this.activeSession?.id===e)return!0;const r=this.pastSessions.findIndex(s=>s.id===e);if(r===-1)return!1;const[a]=this.pastSessions.splice(r,1);return a?(this.activeSession&&this.pastSessions.unshift(this.activeSession),this.activeSession=a,this.persist(),!0):!1}getPastSessions(){return this.pastSessions}deletePastSession(e){const r=this.pastSessions.findIndex(a=>a.id===e);return r===-1?!1:(this.pastSessions.splice(r,1),this.persist(),!0)}addMessage(e){this.activeSession&&(this.activeSession.history.push(e),this.activeSession.updatedAt=Date.now(),this.persist())}setTitle(e){this.activeSession&&(this.activeSession.title=e,this.persist())}generateTitle(e){const r=e.trim();return r?r.length<=30?r:r.substring(0,30).trim()+"...":"New Chat"}deleteActiveAndSwitchToFirst(){this.activeSession&&(this.activeSession=this.pastSessions.shift()||null,this.activeSession||this.createSession(),this.persist())}}class ps{constructor(e){this.streamingMessages=new Map,this.currentIndex=-1,this.pendingUpdate=!1,this.onUpdate=e}createStreamingMessage(e){const r=++this.currentIndex;return this.streamingMessages.set(r,{message:{role:e,content:""},isStreaming:!0}),r}updateStreamingMessage(e,r){const a=this.streamingMessages.get(e);a&&(a.message.content+=r,this.scheduleUpdate())}completeStreamingMessage(e,r){const a=this.streamingMessages.get(e);a&&(a.message=r,a.isStreaming=!1)}removeStreamingMessage(e){this.streamingMessages.delete(e)}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(r=>r.message.role===e)?.message}getAllStreamingMessages(){return Array.from(this.streamingMessages.values())}scheduleUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.rafHandle=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.onUpdate?.()}))}cancelUpdates(){this.rafHandle!==void 0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=void 0,this.pendingUpdate=!1)}reset(){this.streamingMessages.clear(),this.cancelUpdates(),this.currentIndex=-1}}const fe="aiViewChat";class ds{constructor(e){this.aiService=e,this.providers=[],this.availableModels=[],this.loadingModels=!1,this.providerFactory=new Ve}async initialize(){this.providers=await this.aiService.getProviders()||[];const e=await this.aiService.getDefaultProvider();e&&(this.selectedProvider=e)}getProviders(){return this.providers}getSelectedProvider(){return this.selectedProvider}setSelectedProvider(e){this.selectedProvider=e}getAvailableModels(){return this.availableModels}isLoadingModels(){return this.loadingModels}async saveSettings(e,r,a,s,n){const l={...await P.get(fe)||{}};s!==void 0&&(l.requireToolApproval=s),n!==void 0&&(l.toolApprovalAllowlist=n),await P.set(fe,l);const o=this.providers.find(h=>h.name===e);if(o){const h={...o,model:r,...a!==void 0&&{apiKey:a}};this.selectedProvider=h,await this.updateProviderInAIConfig(e,{model:r,...a!==void 0&&{apiKey:a}}),await this.aiService.setDefaultProvider(e)}}async updateProviderInAIConfig(e,r){const a=await P.get(j)||{};if(!a.providers||!Array.isArray(a.providers))return;const s=a.providers.findIndex(n=>n.name===e);s>=0&&(a.providers[s]={...a.providers[s],...r},await P.set(j,a))}async loadToolApprovalAllowlist(){return(await P.get(fe)||{}).toolApprovalAllowlist||[]}async fetchModels(e){const r=this.providers.find(a=>a.name===e);if(r){this.loadingModels=!0,this.availableModels=[];try{const a=this.providerFactory.getProvider(r);this.availableModels=await a.getAvailableModels?.(r)??[]}finally{this.loadingModels=!1}}}}class hs{constructor(){this.groups=new Map}createGroup(e,r,a,s,n){const i=`group-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;this.currentGroupId=i;const l={id:i,sessionId:e,userMessageIndex:r,userMessage:a,timestamp:new Date,agents:new Map,messageIndices:new Map};return s.forEach(o=>{const{label:h,icon:p}=n(o);l.agents.set(o,{role:o,label:h,icon:p,status:"streaming"})}),this.groups.set(i,l),i}getGroup(e){return this.groups.get(e)}updateAgentStatus(e,r,a,s,n){const i=this.groups.get(e);if(!i)return;const l=i.agents.get(r);l&&(l.status=a,s&&(l.message=s),n!==void 0&&(l.messageIndex=n,i.messageIndices.set(r,n)))}getGroupsForSession(e){return Array.from(this.groups.values()).filter(r=>r.sessionId===e)}findGroupForUserMessage(e,r,a){return Array.from(this.groups.values()).find(s=>s.sessionId===e&&s.userMessageIndex===r&&s.userMessage===a)}findGroupForMessage(e,r,a){return Array.from(this.groups.values()).find(s=>s.sessionId===e&&s.messageIndices.get(r)===a)}getCurrentGroupId(){return this.currentGroupId}setCurrentGroupId(e){this.currentGroupId=e}clearCurrentGroup(){this.currentGroupId=void 0}getAllGroups(){return Array.from(this.groups.values())}clearAll(){this.groups.clear(),this.currentGroupId=void 0}}var us=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,re=(t,e,r,a)=>{for(var s=a>1?void 0:a?gs(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&us(e,r,s),s};let O=class extends U{constructor(){super(...arguments),this.isStreaming=!1,this.showHeader=!0}updated(t){super.updated(t),(t.has("message")||!this.hasAttribute("data-is-user"))&&this.updateAlignment()}updateAlignment(){this.message&&this.setAttribute("data-is-user",String(this.message.role==="user"))}copyToClipboard(t){navigator.clipboard.writeText(t).catch(e=>console.error("Failed to copy:",e))}processMarkdownContent(t){return t.includes("code-blocwrapper")?t:t.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi,(e,r,a)=>`
            <div class="code-blocwrapper">
                <div class="code-blocheader">
                    <wa-copy-button value="${this.escapeHtmlAttribute(a.trim())}" size="small" label="Copy code"></wa-copy-button>
                </div>
                <div class="code-bloccontent">
                    <pre><code${r}>${a}</code></pre>
                </div>
            </div>`)}escapeHtmlAttribute(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}handleResend(t){t?.preventDefault(),t?.stopPropagation(),this.message&&this.dispatchEvent(new CustomEvent("resend",{detail:{message:this.message,messageIndex:this.messageIndex},bubbles:!0,composed:!0}))}render(){if(!this.message)return c``;const t=this.message,e=t.role==="user";return c`
            <div class="message-wrapper ${e?"user":"assistant"} ${this.isStreaming?"streaming":""}">
                ${v(this.showHeader&&!e,()=>c`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon name="robot" label="${t.role}"></wa-icon>
                            <span class="role-name">${t.role}</span>
                        </div>
                    <div class="message-actions">
                        <wa-button variant="neutral" appearance="plain" size="small" title="Copy"
                            @click="${()=>this.copyToClipboard(t.content)}">
                            <wa-icon slot="label" name="copy" label="Copy"></wa-icon>
                        </wa-button>
                    </div>
                    </div>
                `)}
                <div class="message-content-wrapper ${e?"user":""}">
                    <div class="message-content">
                        ${lt(this.processMarkdownContent(w.parse(t.content||"")))}
                        ${v(this.isStreaming,()=>c`<span class="streaming-cursor">▋</span>`)}
                    </div>
                    ${v(e,()=>c`
                        <wa-button variant="neutral" appearance="plain" size="small" title="Copy"
                            @click="${()=>this.copyToClipboard(t.content)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                        <wa-button variant="neutral" appearance="plain" size="small" title="Resend"
                            @click="${r=>this.handleResend(r)}">
                            <wa-icon name="rotate-right" label="Resend"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}};O.styles=_`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 85%;
            box-sizing: border-box;
            animation: slideIn 0.2s ease-out;
        }

        :host([data-is-user="true"]) { align-self: flex-end; }
        :host([data-is-user="false"]) { align-self: flex-start; }

        @keyframes slideIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .message-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            box-sizing: border-box;
        }

        .message-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.5rem;
            padding: 0 0.5rem;
        }

        .message-meta {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: var(--wa-color-text-quiet);
        }

        .role-name { text-transform: capitalize; }

        .message-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .message-wrapper:hover .message-actions,
        :host:hover .message-actions { opacity: 1; }

        .message-content-wrapper {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            width: 100%;
        }

        .message-content-wrapper.user {
            flex-direction: row;
            align-items: center;
        }

        .message-content {
            padding: 0.5rem 0.75rem;
            border-radius: 0.25rem;
            background-color: var(--wa-color-surface-default);
            word-break: breaword;
            overflow-wrap: breaword;
            max-width: 100%;
            box-sizing: border-box;
            line-height: 1.3;
            font-size: 0.9rem;
        }

        .message-content-wrapper.user .message-content {
            padding: 0.0625rem 0.75rem;
            background-color: var(--wa-color-brand-fill-quiet);
            color: var(--wa-color-text-normal);
            line-height: 1.4;
            flex: 1;
        }

        .message-content p { margin: 0; padding: 0; }
        .message-content ul, .message-content ol { margin: 0.25rem 0; padding-left: 1.25rem; }
        .message-content li { margin: 0.125rem 0; padding: 0; line-height: 1.3; }
        .message-content :first-child { margin-top: 0; padding-top: 0; }
        .message-content :last-child { margin-bottom: 0; padding-bottom: 0; }

        .message-content pre {
            white-space: pre-wrap;
            word-break: breaall;
            max-width: 100%;
            box-sizing: border-box;
            overflow-x: auto;
            margin: 0;
        }

        .message-content code {
            font-family: 'Courier New', monospace;
            background-color: var(--wa-color-surface-lowered);
            padding: 0.125rem 0.25rem;
            border-radius: 0.125rem;
        }

        .message-content pre code { background-color: transparent; padding: 0; display: block; }

        .code-blocwrapper {
            margin: 0.75rem 0;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
            background-color: var(--wa-color-surface-lowered);
            overflow: hidden;
        }

        .code-blocheader {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0.375rem 0.5rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }

        .code-bloccontent { padding: 0.75rem; overflow-x: auto; }
        .code-bloccontent pre { margin: 0; background-color: transparent; }
        .code-bloccontent code { background-color: transparent; padding: 0; }

        .streaming-cursor {
            display: inline-block;
            animation: blink 1s infinite;
            color: var(--wa-color-brand-50);
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;re([y({type:Object,attribute:!1})],O.prototype,"message",2);re([y({type:Boolean})],O.prototype,"isStreaming",2);re([y({type:Boolean})],O.prototype,"showHeader",2);re([y({type:Number,attribute:!1})],O.prototype,"messageIndex",2);O=re([R("lyra-ai-chat-message")],O);var ms=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,F=(t,e,r,a)=>{for(var s=a>1?void 0:a?fs(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&ms(e,r,s),s};let E=class extends U{constructor(){super(...arguments),this.value="",this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;const t=this.value;this.value="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),this.dispatchEvent(new CustomEvent("send",{detail:{value:t},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}render(){return c`
            <div class="input-container">
                <div class="input-row">
                    <wa-textarea
                        placeholder="Type a message... (Enter to send, Shift+Enter for new line)"
                        size="small"
                        resize="auto"
                        rows="1"
                        .value="${this.value}"
                        ?disabled="${this.disabled||!this.hasProvider}"
                        @input="${this.onInput}"
                        @keydown="${this.onKeyDown}">
                    </wa-textarea>
                    ${v(this.busy,()=>c`
                        <wa-button appearance="plain" size="small" @click="${this.cancel}">
                            <wa-icon name="stop" label="Stop"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}};E.styles=_`
        :host { display: block; width: 100%; }
        .input-container { margin-bottom: 0.25rem; margin-left: 0.25rem; }
        .input-row { display: flex; gap: 0.5rem; align-items: flex-end; }
        wa-textarea { flex: 1; min-width: 0; }
    `;F([y({type:String})],E.prototype,"value",2);F([y({type:Boolean})],E.prototype,"disabled",2);F([y({type:Boolean})],E.prototype,"busy",2);F([y({type:Boolean})],E.prototype,"hasProvider",2);F([ot("wa-textarea")],E.prototype,"textareaElement",2);E=F([R("lyra-ai-chat-input")],E);var ws=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,ze=(t,e,r,a)=>{for(var s=a>1?void 0:a?bs(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&ws(e,r,s),s};let X=class extends U{copyToClipboard(t){navigator.clipboard.writeText(t).catch(e=>console.error("Failed to copy:",e))}renderStatusIcon(t){switch(t){case"streaming":return c`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return c`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return c`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}renderCard(t,e){return e?c`
            <div class="agent-card status-${t.status}">
                <div class="agent-card-header">
                    <wa-icon name="${t.icon}" label="${t.label}"></wa-icon>
                    <span>${t.label}</span>
                    ${this.renderStatusIcon(t.status)}
                    <div class="agent-card-actions">
                        <wa-button variant="neutral" appearance="plain" size="small" title="Copy"
                            @click="${()=>this.copyToClipboard(e.content||"")}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                    </div>
                </div>
                <div class="agent-card-content">
                    <lyra-ai-chat-message
                        .message="${e}"
                        .isStreaming="${t.status==="streaming"}"
                        .showHeader="${!1}"
                        .messageIndex="${t.messageIndex}">
                    </lyra-ai-chat-message>
                </div>
            </div>
        `:c`
                <div class="agent-card status-${t.status}">
                    <div class="agent-card-header">
                        <wa-icon name="${t.icon}" label="${t.label}"></wa-icon>
                        <span>${t.label}</span>
                        ${this.renderStatusIcon(t.status)}
                    </div>
                    <div class="agent-card-content waiting">Waiting for response...</div>
                </div>
            `}render(){if(!this.group)return c``;const t=Array.from(this.group.agents.values()),e=t.filter(i=>i.status==="completed").length,r=t.filter(i=>i.status==="streaming").length,a=t.filter(i=>i.status==="error").length,s=t.length>0&&e+a===t.length,n=t.length===1;return c`
            <div class="agent-response-group">
                ${v(!n,()=>c`
                    <div class="group-header">
                        <wa-icon name="robot" label="Multiple Agents"></wa-icon>
                        <span>Multiple Agents</span>
                        <span class="status-badge">
                            ${v(r>0,()=>c`<span class="streaming">${r} responding</span>`)}
                            ${v(s,()=>c`<span class="done">All completed (${e})</span>`)}
                        </span>
                    </div>
                `)}
                <div class="group-content">
                    ${te(t,i=>i.role,i=>{const l=i.message||(i.status==="streaming"&&this.findStreamingMessage?this.findStreamingMessage(i.role):void 0);return this.renderCard(i,l)})}
                </div>
            </div>
        `}};X.styles=_`
        :host { display: block; width: 100%; box-sizing: border-box; }

        .agent-response-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
        }

        .group-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
            background-color: var(--wa-color-surface-lowered);
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            font-weight: 500;
        }

        .status-badge {
            display: flex;
            gap: 0.5rem;
            margin-left: auto;
            font-size: 0.875rem;
        }

        .streaming { color: var(--wa-color-brand-50); }
        .done { color: var(--wa-color-success-70); font-weight: 600; }

        .group-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
        }

        .agent-card {
            display: flex;
            flex-direction: column;
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            background-color: var(--wa-color-surface-default);
        }

        .agent-card.status-streaming { border-color: var(--wa-color-brand-border-quiet); }
        .agent-card.status-completed { border-color: var(--wa-color-success-border-quiet); }
        .agent-card.status-error { border-color: var(--wa-color-danger-border-quiet); }

        .agent-card-header {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            padding: 0.375rem 0.5rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            background-color: var(--wa-color-surface-lowered);
            font-weight: 500;
            font-size: 0.875rem;
        }

        .agent-card-actions { margin-left: auto; display: flex; gap: 0.25rem; }
        .agent-card-content { padding: 0.375rem; }
        .waiting { padding: 1rem; text-align: center; color: var(--wa-color-text-quiet); }

        .spinning { animation: spin 1s linear infinite; }
        .status-success { color: var(--wa-color-success-60); }
        .status-error { color: var(--wa-color-danger-60); }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    `;ze([y({type:Object,attribute:!1})],X.prototype,"group",2);ze([y({type:Function,attribute:!1})],X.prototype,"findStreamingMessage",2);X=ze([R("lyra-ai-agent-response-group")],X);var vs=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,it=(t,e,r,a)=>{for(var s=a>1?void 0:a?ks(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&vs(e,r,s),s};let pe=class extends U{constructor(){super(...arguments),this.pendingApprovals=new Map}approve(t,e){this.dispatchEvent(new CustomEvent("approve",{detail:{approvalId:t,approval:e},bubbles:!0,composed:!0})),e.resolve(!0),this.pendingApprovals.delete(t),this.requestUpdate()}deny(t,e){e.resolve(!1),this.pendingApprovals.delete(t),this.requestUpdate()}formatArgs(t){let e={};try{e=JSON.parse(t)}catch{}return Object.entries(e).map(([r,a])=>`${r}=${JSON.stringify(a)}`).join(", ")}render(){return this.pendingApprovals.size===0?c``:c`
            <div class="approval-container">
                ${Array.from(this.pendingApprovals.entries()).map(([t,e])=>{const r=e.request.toolCalls,a=r[0],s=r.length===1?`AI wants to execute: ${a?.function.name}()`:`AI wants to execute ${r.length} tools`;return c`
                        <wa-details class="approval-item">
                            <span slot="summary" class="approval-summary">
                                <span>${s}</span>
                                <div class="approval-inline-actions">
                                    <wa-button appearance="plain" size="small" variant="neutral"
                                        @click="${n=>{n.stopPropagation(),this.deny(t,e)}}">
                                        <wa-icon name="xmark" label="Deny"></wa-icon>
                                    </wa-button>
                                    <wa-button appearance="plain" size="small" variant="success"
                                        @click="${async n=>{n.stopPropagation(),this.approve(t,e)}}">
                                        <wa-icon name="check" label="Approve"></wa-icon>
                                    </wa-button>
                                </div>
                            </span>
                            <div class="approval-detail">
                                <strong>${e.role} wants to execute:</strong>
                                <ul class="tool-list">
                                    ${te(r,n=>n.id,n=>{const i=this.formatArgs(n.function.arguments||"{}"),l=e.alwaysAllowSelections.get(n.id)||!1;return c`
                                            <li class="tool-item">
                                                <label class="always-allow-label">
                                                    <wa-checkbox
                                                        ?checked="${l}"
                                                        @change="${o=>{e.alwaysAllowSelections.set(n.id,o.target.checked),this.requestUpdate()}}">
                                                    </wa-checkbox>
                                                    <span>Always allow</span>
                                                </label>
                                                <code>${n.function.name}(${i})</code>
                                            </li>
                                        `})}
                                </ul>
                            </div>
                        </wa-details>
                    `})}
            </div>
        `}};pe.styles=_`
        :host { display: block; }

        .approval-container {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-warning-border-normal);
            background-color: var(--wa-color-warning-fill-quiet);
        }

        .approval-summary {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            width: 100%;
        }

        .approval-inline-actions { display: flex; gap: 0.5rem; flex-shrink: 0; }

        .approval-detail {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.75rem 0;
            font-size: 0.875rem;
        }

        .tool-list { margin: 0.5rem 0 0 1.5rem; padding: 0; list-style: disc; }

        .tool-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0.5rem 0;
        }

        .always-allow-label {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            cursor: pointer;
        }

        code {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            padding: 0.125rem 0.25rem;
            background-color: var(--wa-color-neutral-fill-subtle);
            border-radius: var(--wa-border-radius-s);
        }
    `;it([y({type:Map,attribute:!1})],pe.prototype,"pendingApprovals",2);pe=it([R("lyra-ai-tool-approval")],pe);var ys=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,Ee=(t,e,r,a)=>{for(var s=a>1?void 0:a?xs(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&ys(e,r,s),s};let J=class extends U{constructor(){super(...arguments),this.message="No AI provider configured",this.hint="Click the settings icon to configure an AI provider"}render(){return c`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}};J.styles=_`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            color: var(--wa-color-text-quiet);
        }

        .empty-state p { margin: 0.5rem 0; }
        .hint { font-size: 0.875rem; opacity: 0.7; }
    `;Ee([y({type:String})],J.prototype,"message",2);Ee([y({type:String})],J.prototype,"hint",2);J=Ee([R("lyra-ai-empty-state")],J);var $s=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,qe=(t,e,r,a)=>{for(var s=a>1?void 0:a?Ss(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&$s(e,r,s),s};const As={running:"spinner",completed:"check-circle",failed:"exclamation-circle",skipped:"forward",pending:"circle"},Ts={running:"var(--wa-color-brand-50)",completed:"var(--wa-color-success-60)",failed:"var(--wa-color-danger-60)",skipped:"var(--wa-color-neutral-40)",pending:"var(--wa-color-neutral-40)"};let ee=class extends U{constructor(){super(...arguments),this.expanded=!0}render(){if(!this.plan)return c``;const t=this.plan.steps.filter(a=>a.status==="completed").length,e=this.plan.steps.length,r=e>0?Math.round(t/e*100):0;return c`
            <div class="taspanel">
                <div class="panel-header" @click="${()=>{this.expanded=!this.expanded}}">
                    <wa-icon name="diagram-project" label="Task Plan"></wa-icon>
                    <span class="panel-title">Task Plan</span>
                    <span class="progress-text">${t}/${e}</span>
                    <wa-progress-bar value="${r}" class="progress-bar"></wa-progress-bar>
                    <wa-icon name="${this.expanded?"chevron-up":"chevron-down"}" label="toggle"></wa-icon>
                </div>
                ${v(this.expanded,()=>c`
                    <div class="panel-body">
                        ${te(this.plan.steps,a=>a.id,a=>c`
                            <div class="step-row">
                                <wa-icon
                                    name="${As[a.status]??"circle"}"
                                    style="color: ${Ts[a.status]??"var(--wa-color-neutral-40)"}; ${a.status==="running"?"animation: spin 1s linear infinite;":""}">
                                </wa-icon>
                                <div class="step-info">
                                    <span class="step-role">${a.role}</span>
                                    <span class="step-task">${a.subTask}</span>
                                </div>
                                ${v(a.revisions>0,()=>c`
                                    <span class="revisions-badge">${a.revisions} rev</span>
                                `)}
                            </div>
                        `)}
                    </div>
                `)}
            </div>
        `}};ee.styles=_`
        :host { display: block; }

        .taspanel {
            border: solid var(--wa-border-width-s) var(--wa-color-brand-border-quiet);
            border-radius: var(--wa-border-radius-m);
            background: var(--wa-color-surface-default);
            margin: 0.5rem 0;
        }

        .panel-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
            cursor: pointer;
            user-select: none;
        }

        .panel-title {
            font-weight: 500;
            flex: 0 0 auto;
        }

        .progress-text {
            font-size: 0.8rem;
            color: var(--wa-color-text-quiet);
        }

        .progress-bar {
            flex: 1;
            min-width: 60px;
        }

        .panel-body {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            padding: 0.5rem 0.75rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
        }

        .step-row {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            padding: 0.25rem 0;
        }

        .step-info {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            flex: 1;
            min-width: 0;
        }

        .step-role {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--wa-color-text-quiet);
            text-transform: uppercase;
        }

        .step-task {
            font-size: 0.85rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .revisions-badge {
            font-size: 0.7rem;
            padding: 0.1rem 0.3rem;
            background: var(--wa-color-warning-fill-quiet);
            border-radius: var(--wa-border-radius-s);
            color: var(--wa-color-warning-70);
            flex-shrink: 0;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;qe([y({type:Object,attribute:!1})],ee.prototype,"plan",2);qe([k()],ee.prototype,"expanded",2);ee=qe([R("lyra-ai-task-progress-panel")],ee);var Cs=Object.defineProperty,Ps=Object.getOwnPropertyDescriptor,ue=(t,e,r,a)=>{for(var s=a>1?void 0:a?Ps(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&Cs(e,r,s),s};const Ms={code:"code",json:"brackets-curly","file-list":"list",plan:"diagram-project",review:"magnifying-glass",text:"file-lines"};let N=class extends U{constructor(){super(...arguments),this.artifacts=[],this.expanded=!1}render(){return this.artifacts.length===0?c``:c`
            <div class="workspace-panel">
                <div class="panel-header" @click="${()=>{this.expanded=!this.expanded,this.selectedArtifact=void 0}}">
                    <wa-icon name="folder-open" label="Workspace"></wa-icon>
                    <span class="panel-title">Workspace</span>
                    <span class="count-badge">${this.artifacts.length} artifact${this.artifacts.length!==1?"s":""}</span>
                    <wa-icon name="${this.expanded?"chevron-up":"chevron-down"}" label="toggle"></wa-icon>
                </div>
                ${v(this.expanded,()=>c`
                    <div class="panel-body">
                        <div class="artifact-list">
                            ${te(this.artifacts,t=>t.id,t=>c`
                                <div
                                    class="artifact-item ${this.selectedArtifact?.id===t.id?"selected":""}"
                                    @click="${()=>{this.selectedArtifact=this.selectedArtifact?.id===t.id?void 0:t}}">
                                    <wa-icon name="${Ms[t.type]??"file-lines"}" label="${t.type}"></wa-icon>
                                    <div class="artifact-meta">
                                        <span class="artifact-id">${t.id}</span>
                                        <span class="artifact-producer">by ${t.producedBy}</span>
                                    </div>
                                    <span class="artifact-type">${t.type}</span>
                                </div>
                                ${v(this.selectedArtifact?.id===t.id,()=>c`
                                    <div class="artifact-content">
                                        <pre>${t.content}</pre>
                                    </div>
                                `)}
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        `}};N.styles=_`
        :host { display: block; }

        .workspace-panel {
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
            border-radius: var(--wa-border-radius-m);
            background: var(--wa-color-surface-default);
            margin: 0.5rem 0;
        }

        .panel-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
            cursor: pointer;
            user-select: none;
        }

        .panel-title { font-weight: 500; }

        .count-badge {
            font-size: 0.8rem;
            color: var(--wa-color-text-quiet);
            margin-left: auto;
        }

        .panel-body {
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
        }

        .artifact-list { display: flex; flex-direction: column; }

        .artifact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.4rem 0.75rem;
            cursor: pointer;
        }

        .artifact-item:hover { background: var(--wa-color-surface-lowered); }
        .artifact-item.selected { background: var(--wa-color-brand-fill-quiet); }

        .artifact-meta {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-width: 0;
        }

        .artifact-id {
            font-size: 0.85rem;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .artifact-producer {
            font-size: 0.75rem;
            color: var(--wa-color-text-quiet);
        }

        .artifact-type {
            font-size: 0.75rem;
            padding: 0.1rem 0.3rem;
            background: var(--wa-color-surface-lowered);
            border-radius: var(--wa-border-radius-s);
        }

        .artifact-content {
            padding: 0.5rem 0.75rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
            background: var(--wa-color-surface-lowered);
        }

        .artifact-content pre {
            margin: 0;
            white-space: pre-wrap;
            word-break: breaword;
            font-size: 0.8rem;
            max-height: 200px;
            overflow-y: auto;
        }
    `;ue([y({type:Array,attribute:!1})],N.prototype,"artifacts",2);ue([k()],N.prototype,"expanded",2);ue([k()],N.prototype,"selectedArtifact",2);N=ue([R("lyra-ai-workspace-panel")],N);var Is=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,q=(t,e,r,a)=>{for(var s=a>1?void 0:a?_s(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&Is(e,r,s),s};let I=class extends He{constructor(){super(...arguments),this.sessionManager=new cs,this.streamManager=new ps(()=>{this.requestUpdate(),this.scrollDebounceTimer&&clearTimeout(this.scrollDebounceTimer),this.scrollDebounceTimer=setTimeout(async()=>{await this.updateComplete,this.scrollToBottom(),this.scrollDebounceTimer=void 0},100)}),this.providerManager=new ds(W),this.agentGroupManager=new hs,this.busy=!1,this.inputValue="",this.requireToolApproval=!0,this.showHistory=!1,this.currentArtifacts=[],this.pendingToolApprovals=new Map,this.toolApprovalAllowlist=new Set}async doBeforeUI(){this.subscribe(Ze,()=>this.onAIConfigChanged()),await this.sessionManager.load(),this.sessionManager.getActiveSession()||this.sessionManager.createSession(),await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async onAIConfigChanged(){await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async loadSettings(){const t=await P.get(j)||{};this.requireToolApproval=t.requireToolApproval!==!1;const e=await this.providerManager.loadToolApprovalAllowlist();this.toolApprovalAllowlist=new Set(e)}async scrollToBottom(){await this.updateComplete;const t=this.shadowRoot?.querySelector("wa-scroller.chat-messages");if(!t)return;const e=t.shadowRoot?.querySelector(".scroll-container");e?e.scrollTop=e.scrollHeight:t.scrollTo&&t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}resetViewState(){this.inputValue="",this.showHistory=!1,this.currentTaskPlan=void 0,this.currentArtifacts=[],this.requestUpdate(),this.updateToolbar()}createNewSession(){this.sessionManager.createSession(),this.resetViewState()}switchToSession(t){this.sessionManager.switchToSession(t)&&this.resetViewState()}deletePastSession(t){this.sessionManager.deletePastSession(t),this.requestUpdate(),this.updateToolbar()}async sendMessage(){const t=this.inputValue.trim();!t||this.busy||(this.inputValue="",await this.handlePrompt(t))}async handleResend(t){!t||t.role!=="user"||await this.handlePrompt(t.content)}cancelStream(){this.abortController?.abort(),this.abortController=void 0,this.busy=!1,this.streamManager.cancelUpdates()}async handlePrompt(t){if(t.startsWith("/")){await this.runCommand(t.substring(1));return}const e=this.providerManager.getSelectedProvider();if(!e){B("Please configure an AI provider in settings");return}const r=this.sessionManager.getActiveSession();if(!r)return;const a=W.createMessage(t);this.sessionManager.addMessage(a),r.history.length===1&&(this.sessionManager.setTitle(this.sessionManager.generateTitle(t)),this.updateToolbar()),this.requestUpdate(),await this.updateComplete,this.scrollToBottom(),this.busy=!0,this.currentTaskPlan=void 0,this.currentArtifacts=[],this.abortController=new AbortController;const s=new Map,n={history:[...r.history]},i=r.id,l=ie.createExecutionContext(),o=mt.createChild({...l}),h=W.getAgentContributions();if(h.length===0){B("No agents are registered."),this.busy=!1;return}const p=h.filter(d=>!d.canHandle||d.canHandle({...o.getProxy(),userPrompt:t})).sort((d,m)=>(m.priority||0)-(d.priority||0));if(p.length===0){B(`No agents available. Available: ${h.map(d=>d.role).join(", ")}`),this.busy=!1;return}const f=p.map(d=>d.role),u=this.sessionManager.getActiveSession();if(!u)return;const b=this.agentGroupManager.createGroup(i,u.history.length-1,a,f,d=>{const m=h.find(x=>x.role===d);return{label:m?.label||d,icon:m?.icon||"robot"}});ft.runAsync("Calling AI assistant",async()=>W.executeAgentWorkflow({chatContext:n,chatConfig:e,callContext:o,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:f,requireToolApproval:this.requireToolApproval,onToolApprovalRequest:async(d,m)=>m.toolCalls.every(A=>this.toolApprovalAllowlist.has(A.function.name))?!0:new Promise(A=>{const G=`approval-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,ae={role:d,request:m,resolve:A,alwaysAllowSelections:new Map};this.pendingToolApprovals.set(G,ae),this.requestUpdate()}),onAgentStart:async d=>{const m=this.streamManager.createStreamingMessage(d);s.set(d,m),this.agentGroupManager.updateAgentStatus(b,d,"streaming"),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()},onToken:(d,m)=>{const x=s.get(d);x!==void 0&&this.streamManager.updateStreamingMessage(x,m)},onAgentComplete:async(d,m)=>{const x=this.sessionManager.getActiveSession();if(!x||x.id!==i)return;const A=s.get(d);if(A!==void 0){this.streamManager.completeStreamingMessage(A,m);const G=x.history.length;this.sessionManager.addMessage(m),s.delete(d),this.streamManager.removeStreamingMessage(A),this.agentGroupManager.updateAgentStatus(b,d,"completed",m,G),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()}},onAgentError:(d,m)=>{const x=s.get(d);x!==void 0&&(this.streamManager.removeStreamingMessage(x),s.delete(d)),this.agentGroupManager.updateAgentStatus(b,d,"error",{role:d,content:`Error: ${m.message}`}),this.requestUpdate(),B(`Agent ${d} error: ${m.message}`)}}).then(()=>{this.agentGroupManager.clearCurrentGroup()})).catch(d=>{d?.name!=="AbortError"&&B(`${d}`)}).finally(async()=>{this.busy=!1,this.abortController=void 0,this.streamManager.reset(),this.agentGroupManager.clearCurrentGroup(),this.requestUpdate(),this.updateToolbar()})}async runCommand(t){const e=t.trim().split(/\s+/);if(e.length===0)return;const r=e.shift(),a=ie.getCommand(r);if(!a){B(`Command not found: ${r}`);return}const s={};e.forEach((n,i)=>{a.parameters?.[i]&&(s[a.parameters[i].name]=n)}),await ie.execute(r,ie.createExecutionContext(s)),this.requestUpdate()}handleToolApproval(t){const{approvalId:e,approval:r}=t.detail;Array.from(r.alwaysAllowSelections.entries()).filter(([,s])=>s).map(([s])=>s).forEach(s=>this.toolApprovalAllowlist.add(s)),this.pendingToolApprovals.delete(e),this.requestUpdate()}renderMessage(t,e,r=!1){return c`
            <lyra-ai-chat-message
                .message="${t}"
                .isStreaming="${r}"
                .showHeader="${!0}"
                .messageIndex="${e}"
                @resend="${a=>this.handleResend(a.detail.message)}">
            </lyra-ai-chat-message>
        `}renderToolbar(){const t=this.sessionManager.getPastSessions(),e=this.sessionManager.getActiveSession();return c`
            <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.875rem;font-weight:500;padding:0 0.25rem;">${e?.title||"New Chat"}</span>
            <wa-button appearance="plain" size="small" title="New chat"
                @click="${()=>this.createNewSession()}">
                <wa-icon name="plus" label="New chat"></wa-icon>
            </wa-button>
            ${t.length>0?c`
                <wa-dropdown
                    ?open="${this.showHistory}"
                    @wa-after-hide="${()=>{this.showHistory=!1}}"
                    placement="bottom-start">
                    <wa-button slot="trigger" appearance="plain" size="small" with-caret
                        title="Chat history"
                        @click="${()=>{this.showHistory=!this.showHistory}}">
                        <wa-icon name="clock-rotate-left" label="History"></wa-icon>
                    </wa-button>
                    ${t.map(r=>c`
                        <wa-dropdown-item @click="${()=>this.switchToSession(r.id)}">
                            <wa-icon name="message" label="Session" slot="icon"></wa-icon>
                            <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${r.title||"Unnamed Chat"}</span>
                            <wa-button slot="details" appearance="plain" size="small" title="Delete"
                                @click="${a=>{a.stopPropagation(),this.deletePastSession(r.id)}}">
                                <wa-icon name="trash" label="Delete"></wa-icon>
                            </wa-button>
                        </wa-dropdown-item>
                    `)}
                </wa-dropdown>
            `:ct}
            <lyra-command cmd="open_ai_config" icon="gear" title="AI Settings"></lyra-command>
        `}render(){const t=this.sessionManager.getActiveSession(),e=this.providerManager.getSelectedProvider();return c`
            <div class="chat-container">
                <wa-scroller class="chat-messages" orientation="vertical">
                    <div class="chat-content">
                        ${v(!e,()=>c`
                            <lyra-ai-empty-state
                                message="No AI provider configured"
                                hint='Click the settings icon below to configure an AI provider'>
                            </lyra-ai-empty-state>
                        `,()=>v(!t||t.history.length===0,()=>c`
                            <lyra-ai-empty-state message="How can I help you?" hint=""></lyra-ai-empty-state>
                        `,()=>c`
                            ${t.history.map((r,a)=>{const s=this.agentGroupManager.findGroupForUserMessage(t.id,a,r);return s&&r.role==="user"?c`
                                        <lyra-ai-chat-message
                                            .message="${r}"
                                            .isStreaming="${!1}"
                                            .showHeader="${!0}"
                                            .messageIndex="${a}"
                                            @resend="${n=>this.handleResend(n.detail.message)}">
                                        </lyra-ai-chat-message>
                                        <lyra-ai-agent-response-group
                                            .group="${s}"
                                            .findStreamingMessage="${n=>this.streamManager.findStreamingMessage(n)}">
                                        </lyra-ai-agent-response-group>
                                    `:this.agentGroupManager.findGroupForMessage(t.id,r.role,a)?c``:this.renderMessage(r,a)})}

                            ${this.streamManager.getAllStreamingMessages().filter(r=>!this.agentGroupManager.getAllGroups().some(a=>a.sessionId===t.id&&a.agents.has(r.message.role))).map(r=>this.renderMessage(r.message,-1,r.isStreaming))}

                            ${v(this.busy&&this.streamManager.getAllStreamingMessages().length===0,()=>c`
                                <div class="thinking-indicator">
                                    <wa-progress-ring indeterminate size="small"></wa-progress-ring>
                                    <span>Thinking…</span>
                                </div>
                            `)}
                        `))}

                        ${v(this.currentTaskPlan,()=>c`
                            <lyra-ai-task-progress-panel .plan="${this.currentTaskPlan}"></lyra-ai-task-progress-panel>
                        `)}

                        ${v(this.currentArtifacts.length>0,()=>c`
                            <lyra-ai-workspace-panel .artifacts="${this.currentArtifacts}"></lyra-ai-workspace-panel>
                        `)}
                    </div>
                </wa-scroller>

                ${v(this.pendingToolApprovals.size>0,()=>c`
                    <lyra-ai-tool-approval
                        .pendingApprovals="${this.pendingToolApprovals}"
                        @approve="${r=>this.handleToolApproval(r)}">
                    </lyra-ai-tool-approval>
                `)}

                <div class="input-area">
                    <lyra-ai-chat-input
                        .value="${this.inputValue}"
                        .busy="${this.busy}"
                        .disabled="${!e}"
                        .hasProvider="${!!e}"
                        @input-change="${r=>{this.inputValue=r.detail.value}}"
                        @send="${r=>{this.inputValue=r.detail.value,this.sendMessage()}}"
                        @cancel="${()=>this.cancelStream()}">
                    </lyra-ai-chat-input>
                </div>
            </div>
        `}};I.styles=_`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: hidden;
            background: var(--wa-color-surface-default);
        }

        .chat-container {
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: hidden;
        }

        .chat-messages {
            flex: 1;
            overflow: hidden;
        }

        .chat-content {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            padding: 1rem;
            min-height: 100%;
            box-sizing: border-box;
        }

        .thinking-indicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
            color: var(--wa-color-text-quiet);
            font-size: 0.875rem;
        }

        .input-area {
            padding: 0.5rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
            flex-shrink: 0;
        }
    `;q([k()],I.prototype,"busy",2);q([k()],I.prototype,"inputValue",2);q([k()],I.prototype,"requireToolApproval",2);q([k()],I.prototype,"showHistory",2);q([k()],I.prototype,"currentTaskPlan",2);q([k()],I.prototype,"currentArtifacts",2);q([k()],I.prototype,"pendingToolApprovals",2);I=q([R("lyra-aiview")],I);var Rs=Object.getOwnPropertyDescriptor,zs=(t,e,r,a)=>{for(var s=a>1?void 0:a?Rs(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=i(s)||s);return s};let xe=class extends wt{constructor(){super(...arguments),this.totalUsage={...yt},this.providerUsage={}}connectedCallback(){super.connectedCallback(),this.loadUsage(),we(xt,()=>{this.loadUsage()})}async loadUsage(){this.totalUsage=await me.getTotalUsage(),this.providerUsage=await me.getAllProviderUsage(),this.requestUpdate()}formatNumber(t){return t>=1e6?(t/1e6).toFixed(2)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}async handleReset(){await Fe("Reset all token usage statistics?")&&(await me.reset(),await this.loadUsage())}renderStatItem(t,e){return c`
            <div class="stat-item">
                <span class="stat-label">${t}</span>
                <span class="stat-value">${this.formatNumber(e)}</span>
            </div>
        `}render(){return this.totalUsage.totalTokens===0?c``:c`
            <wa-dropdown placement="top-end" distance="8">
                <wa-button slot="trigger" appearance="plain" size="small" title="Token usage">
                    <wa-icon name="database" label="Tokens" slot="start"></wa-icon>
                    ${this.formatNumber(this.totalUsage.totalTokens)} tokens
                </wa-button>

                <h3>Token Usage</h3>

                <h6>Total</h6>
                <wa-dropdown-item>
                    <span>All providers</span>
                    <div class="stats-row">
                        ${this.renderStatItem("Prompt",this.totalUsage.promptTokens)}
                        ${this.renderStatItem("Completion",this.totalUsage.completionTokens)}
                        ${this.renderStatItem("Total",this.totalUsage.totalTokens)}
                        ${this.renderStatItem("Requests",this.totalUsage.requestCount)}
                    </div>
                </wa-dropdown-item>

                ${Object.keys(this.providerUsage).length>0?c`
                    <wa-divider></wa-divider>
                    <h6>By Provider</h6>
                    ${Object.entries(this.providerUsage).map(([t,e])=>c`
                        <wa-dropdown-item>
                            <span class="provider-name">${t}</span>
                            <div class="stats-row">
                                ${this.renderStatItem("Prompt",e.promptTokens)}
                                ${this.renderStatItem("Completion",e.completionTokens)}
                                ${this.renderStatItem("Total",e.totalTokens)}
                                ${this.renderStatItem("Req",e.requestCount)}
                            </div>
                        </wa-dropdown-item>
                    `)}
                `:""}

                <wa-divider></wa-divider>
                <wa-dropdown-item variant="danger" @click="${()=>this.handleReset()}">
                    <wa-icon name="trash" slot="icon"></wa-icon>
                    Reset statistics
                </wa-dropdown-item>
            </wa-dropdown>
        `}};xe.styles=_`
        :host { display: inline-block; }

        wa-dropdown::part(menu) { min-width: 320px; max-width: 420px; }

        h3 {
            padding: var(--wa-space-s) var(--wa-space-m);
            margin: 0;
            font-weight: 600;
            font-size: 0.95em;
        }

        h6 {
            padding: var(--wa-space-xs) var(--wa-space-m);
            margin: 0;
            font-weight: 600;
            font-size: 0.85em;
            color: var(--wa-color-neutral-text-subtle);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .provider-name { font-weight: 500; }

        .stats-row { display: flex; gap: var(--wa-space-m); font-size: 0.875rem; }

        .stat-item {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .stat-label { font-size: 0.8em; color: var(--wa-color-neutral-text-subtle); }
        .stat-value { font-weight: 600; }
    `;xe=zs([R("lyra-token-usage")],xe);var Es=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,z=(t,e,r,a)=>{for(var s=a>1?void 0:a?qs(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&Es(e,r,s),s};let S=class extends He{constructor(){super(...arguments),this.providers=[],this.defaultProvider="",this.hasChanges=!1,this.availableModels=[],this.loadingModels=!1,this.requireToolApproval=!0,this.smartToolDetection=!1,this.editingState={},this.providerFactory=new Ve}async doInitUI(){await this.loadConfig(),we(Ze,()=>this.loadConfig()),we(bt,()=>this.loadConfig())}async loadConfig(){const t=await P.get(j);this.aiConfig=t;const e=H.getContributions(be).map(s=>s.provider),r=t?.providers||[],a=new Set(r.map(s=>s.name));this.providers=[...r,...e.filter(s=>!a.has(s.name))],this.defaultProvider=t?.defaultProvider||"",this.requireToolApproval=t?.requireToolApproval!==!1,this.smartToolDetection=t?.smartToolDetection!==void 0?t.smartToolDetection:!1,this.editingState={},this.hasChanges=!1,this.markDirty(!1)}getEditValue(t,e){const r=this.editingState[t];if(r&&e in r)return r[e]??"";const a=this.providers[t];return a?a[e]??"":""}setEditValue(t,e,r){this.editingState={...this.editingState,[t]:{...this.editingState[t]||{},[e]:r}},this.providers=this.providers.map((a,s)=>s===t?{...a,[e]:r}:a),this.markDirtyAndUpdate()}markDirtyAndUpdate(){this.hasChanges=!0,this.markDirty(!0)}async fetchModels(t){const e=this.providers[t];if(e){this.loadingModels=!0,this.availableModels=[];try{const r=this.providerFactory.getProvider(e);if(r.getAvailableModels){const a=await r.getAvailableModels(e);this.availableModels=Array.isArray(a)?a:[]}}finally{this.loadingModels=!1}}}async saveConfig(){const t={...this.aiConfig??{},defaultProvider:this.defaultProvider,providers:this.providers,requireToolApproval:this.requireToolApproval,smartToolDetection:this.smartToolDetection};await P.set(j,t),this.aiConfig=t,this.hasChanges=!1,this.markDirty(!1)}async save(){this.hasChanges&&await this.saveConfig()}addProvider(){this.providers=[...this.providers,{name:"new-provider",model:"",apiKey:"",chatApiEndpoint:""}],this.markDirtyAndUpdate()}async deleteProvider(t){const e=this.providers[t];await Fe(`Delete provider "${e.name}"?`)&&(this.defaultProvider===e.name&&(this.defaultProvider=""),this.providers=this.providers.filter((r,a)=>a!==t),this.markDirtyAndUpdate())}renderProviderField(t,e,r="text"){const a=this.getEditValue(t,e);return c`
            <wa-input
                type="${r}"
                ?password-toggle="${r==="password"}"
                .value="${a}"
                @input="${s=>this.setEditValue(t,e,s.target.value)}">
            </wa-input>
        `}render(){return c`
            <div class="editor">
                <div class="editor-header">
                    <h2>AI Providers</h2>
                    <wa-button variant="brand" appearance="filled" @click="${this.addProvider}">
                        Add Provider
                    </wa-button>
                </div>

                ${v(this.providers.length===0,()=>c`
                    <div class="empty-state"><p>No providers configured.</p></div>
                `,()=>c`
                    <div class="providers-list">
                        ${te(this.providers,(t,e)=>e,(t,e)=>c`
                            <div class="provider-card">
                                <div class="provider-card-header ${this.defaultProvider===t.name?"is-default":""}">
                                    <span class="provider-name">${t.name}</span>
                                    ${this.defaultProvider===t.name?c`<span class="default-badge">Default</span>`:c`<wa-button appearance="plain" size="small" title="Set as default"
                                                @click="${()=>{this.defaultProvider=t.name,this.markDirtyAndUpdate()}}">
                                                Set default
                                            </wa-button>`}
                                    <wa-button variant="danger" appearance="plain" size="small"
                                        @click="${()=>this.deleteProvider(e)}">
                                        Delete
                                    </wa-button>
                                </div>
                                <div class="provider-fields">
                                    <div class="field-row">
                                        <label>Name</label>
                                        ${this.renderProviderField(e,"name")}
                                    </div>
                                    <div class="field-row">
                                        <label>Model</label>
                                        <div class="model-row">
                                            ${this.renderProviderField(e,"model")}
                                            <wa-button appearance="plain" size="small"
                                                @click="${async()=>{await this.fetchModels(e)}}"
                                                title="Fetch available models">
                                                <wa-icon name="refresh" label="Refresh"></wa-icon>
                                            </wa-button>
                                        </div>
                                        ${v(this.loadingModels,()=>c`
                                            <wa-progress-ring indeterminate size="small"></wa-progress-ring>
                                        `)}
                                        ${v(this.availableModels.length>0,()=>c`
                                            <wa-dropdown
                                                @wa-select="${r=>{r.detail.item?.value&&this.setEditValue(e,"model",r.detail.item.value)}}">
                                                <wa-button slot="trigger" size="small" appearance="plain" with-caret>
                                                    Select model
                                                </wa-button>
                                                ${this.availableModels.map(r=>c`
                                                    <wa-dropdown-item value="${r.id}">${r.name||r.id}</wa-dropdown-item>
                                                `)}
                                            </wa-dropdown>
                                        `)}
                                    </div>
                                    <div class="field-row">
                                        <label>API Endpoint</label>
                                        ${this.renderProviderField(e,"chatApiEndpoint")}
                                    </div>
                                    <div class="field-row">
                                        <label>API Key</label>
                                        ${this.renderProviderField(e,"apiKey","password")}
                                    </div>
                                </div>
                            </div>
                        `)}
                    </div>
                `)}

                <div class="settings-section">
                    <h3>Tool Settings</h3>
                    <wa-checkbox
                        ?checked="${this.requireToolApproval}"
                        @change="${t=>{this.requireToolApproval=t.target.checked,this.markDirtyAndUpdate()}}">
                        Require approval before executing tools
                    </wa-checkbox>
                    <wa-checkbox
                        ?checked="${this.smartToolDetection}"
                        @change="${t=>{this.smartToolDetection=t.target.checked,this.markDirtyAndUpdate()}}">
                        Smart tool detection (use ML to detect when tools are needed)
                    </wa-checkbox>
                </div>
            </div>
        `}};S.styles=_`
        :host { display: block; height: 100%; overflow: auto; }

        .editor {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 1rem;
        }

        .editor-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .editor-header h2 { margin: 0; font-size: 1.25rem; }

        .providers-list { display: flex; flex-direction: column; gap: 1rem; }

        .provider-card {
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
            overflow: hidden;
        }

        .provider-card-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem 0.75rem;
            background: var(--wa-color-surface-lowered);
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
        }

        .provider-card-header.is-default {
            background: var(--wa-color-brand-fill-quiet);
            border-bottom-color: var(--wa-color-brand-border-quiet);
        }

        .default-badge {
            font-size: 0.75rem;
            font-weight: 600;
            padding: 0.1rem 0.4rem;
            background: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            border-radius: var(--wa-border-radius-s);
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .provider-name {
            font-weight: 500;
            flex: 1;
        }

        .provider-fields {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            padding: 0.75rem;
        }

        .field-row {
            display: grid;
            grid-template-columns: 120px 1fr;
            align-items: start;
            gap: 0.5rem;
        }

        .field-row label {
            font-size: 0.875rem;
            color: var(--wa-color-text-quiet);
            padding-top: 0.4rem;
        }

        .model-row { display: flex; gap: 0.25rem; align-items: center; }
        .model-row wa-input { flex: 1; }

        .settings-section {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            padding-top: 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
        }

        .settings-section h3 { margin: 0 0 0.5rem 0; font-size: 1rem; }

        .empty-state {
            display: flex;
            justify-content: center;
            padding: 3rem;
            color: var(--wa-color-text-subtle);
        }
    `;z([y({attribute:!1})],S.prototype,"input",2);z([k()],S.prototype,"providers",2);z([k()],S.prototype,"defaultProvider",2);z([k()],S.prototype,"hasChanges",2);z([k()],S.prototype,"availableModels",2);z([k()],S.prototype,"loadingModels",2);z([k()],S.prototype,"requireToolApproval",2);z([k()],S.prototype,"smartToolDetection",2);z([k()],S.prototype,"editingState",2);S=z([R("lyra-ai-config-editor")],S);H.registerContribution(pt,{name:"aiview",label:"AI Assistant",icon:"robot",component:t=>c`<lyra-aiview id="${t}"></lyra-aiview>`});H.registerContribution(kt,{label:"App Support",description:"General-purpose assistant that can answer questions and execute app commands",role:"appsupport",priority:100,icon:"question-circle",sysPrompt:ns,tools:async()=>({enabled:!0,smartToolDetection:(await P.get(j))?.smartToolDetection??!1})});H.registerContribution(Oe,{target:Oe,label:"Token Usage",component:"<lyra-token-usage></lyra-token-usage>"});$e.registerEditorInputHandler({editorId:"system.ai-config-editor",label:"AI Config",ranking:1e3,canHandle:t=>t.key===".system.ai-config",handle:async t=>(t.component=()=>c`<lyra-ai-config-editor .input="${t}"></lyra-ai-config-editor>`,t)});dt({command:{id:"open_ai_config",name:"Open AI Configuration",description:"Open the AI system configuration editor",parameters:[]},handler:{execute:t=>{const e={title:"AI Settings",data:{},key:".system.ai-config",icon:"robot",state:{}};$e.loadEditor(e).then()}},contribution:{target:ht,icon:"robot",label:"AI Config"}});ut.put("aiService",W);
