import{h as e,m as t,u as n}from"./fs-access-D-fDaJ8V-4fi1R5VX.js";import{n as r}from"./events-B_ZxkU_G-T3WMQWFe.js";import{L as i,Q as a,U as o,_ as s,b as c,h as l,i as u,o as d,t as f,v as p,z as m}from"./repeat-jF3QiNU_.js";import{F as h,L as ee,P as g,R as _,T as v,a as te,d as ne,g as re,i as ie,n as ae,s as oe,v as y,w as se,y as ce}from"./dist-Bs3vRgSi.js";import{a as b,c as le,i as ue,l as x,n as de,o as fe,r as pe,s as me,t as he,u as ge}from"./ai-service-_8yd8pWc-DrYCaIXD.js";function _e(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var S=_e();function ve(e){S=e}var C={exec:()=>null};function w(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(T.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var ye=(()=>{try{return!0}catch{return!1}})(),T={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`)},be=/^(?:[ \t]*(?:\n|$))+/,xe=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Se=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,E=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ce=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,D=/(?:[*+-]|\d{1,9}[.)])/,we=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Te=w(we).replace(/bull/g,D).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Ee=w(we).replace(/bull/g,D).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),O=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,De=/^[^\n]+/,k=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Oe=w(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,k).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ke=w(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,D).getRegex(),A=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,j=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ae=w(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,j).replace(`tag`,A).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),je=w(O).replace(`hr`,E).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,A).getRegex(),M={blockquote:w(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,je).getRegex(),code:xe,def:Oe,fences:Se,heading:Ce,hr:E,html:Ae,lheading:Te,list:ke,newline:be,paragraph:je,table:C,text:De},Me=w(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,E).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,A).getRegex(),Ne={...M,lheading:Ee,table:Me,paragraph:w(O).replace(`hr`,E).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Me).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,A).getRegex()},Pe={...M,html:w(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,j).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:C,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:w(O).replace(`hr`,E).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Te).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Fe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ie=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Le=/^( {2,}|\\)\n(?!\s*$)/,Re=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,N=/[\p{P}\p{S}]/u,ze=/[\s\p{P}\p{S}]/u,Be=/[^\s\p{P}\p{S}]/u,Ve=w(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,ze).getRegex(),He=/(?!~)[\p{P}\p{S}]/u,Ue=/(?!~)[\s\p{P}\p{S}]/u,We=/(?:[^\s\p{P}\p{S}]|~)/u,Ge=w(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,ye?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Ke=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,qe=w(Ke,`u`).replace(/punct/g,N).getRegex(),Je=w(Ke,`u`).replace(/punct/g,He).getRegex(),Ye=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Xe=w(Ye,`gu`).replace(/notPunctSpace/g,Be).replace(/punctSpace/g,ze).replace(/punct/g,N).getRegex(),Ze=w(Ye,`gu`).replace(/notPunctSpace/g,We).replace(/punctSpace/g,Ue).replace(/punct/g,He).getRegex(),Qe=w(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Be).replace(/punctSpace/g,ze).replace(/punct/g,N).getRegex(),$e=w(/\\(punct)/,`gu`).replace(/punct/g,N).getRegex(),et=w(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),tt=w(j).replace(`(?:-->|$)`,`-->`).getRegex(),nt=w(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,tt).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),P=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,rt=w(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace(`label`,P).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),it=w(/^!?\[(label)\]\[(ref)\]/).replace(`label`,P).replace(`ref`,k).getRegex(),at=w(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,k).getRegex(),ot=w(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,it).replace(`nolink`,at).getRegex(),st=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ct={_backpedal:C,anyPunctuation:$e,autolink:et,blockSkip:Ge,br:Le,code:Ie,del:C,emStrongLDelim:qe,emStrongRDelimAst:Xe,emStrongRDelimUnd:Qe,escape:Fe,link:rt,nolink:at,punctuation:Ve,reflink:it,reflinkSearch:ot,tag:nt,text:Re,url:C},lt={...ct,link:w(/^!?\[(label)\]\((.*?)\)/).replace(`label`,P).getRegex(),reflink:w(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,P).getRegex()},ut={...ct,emStrongRDelimAst:Ze,emStrongLDelim:Je,url:w(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,st).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:w(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,st).getRegex()},dt={...ut,br:w(Le).replace(`{2,}`,`*`).getRegex(),text:w(ut.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},F={normal:M,gfm:Ne,pedantic:Pe},I={normal:ct,gfm:ut,breaks:dt,pedantic:lt},ft={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},pt=e=>ft[e];function L(e,t){if(t){if(T.escapeTest.test(e))return e.replace(T.escapeReplace,pt)}else if(T.escapeTestNoEncode.test(e))return e.replace(T.escapeReplaceNoEncode,pt);return e}function mt(e){try{e=encodeURI(e).replace(T.percentDecode,`%`)}catch{return null}return e}function ht(e,t){let n=e.replace(T.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(T.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(T.slashPipe,`|`);return n}function R(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function gt(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function _t(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function vt(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var z=class{options;rules;lexer;constructor(e){this.options=e||S}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:R(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=vt(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=R(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:R(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=R(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>` `.repeat(3*e.length)),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=t[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d);for(;e;){let f=e.split(`
`,1)[0],p;if(l=f,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),p=l):p=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||t.test(l)||n.test(l))break;if(p.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+p.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}!u&&!l.trim()&&(u=!0),r+=f+`
`,e=e.substring(f.length+1),c=p.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0));let f=null,p;this.options.gfm&&(f=this.rules.other.listIsTask.exec(s),f&&(p=f[0]!==`[ ] `,s=s.replace(this.rules.other.listReplaceTask,``))),i.items.push({type:`list_item`,raw:r,task:!!f,checked:p,loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e=0;e<i.items.length;e++)if(this.lexer.state.top=!1,i.items[e].tokens=this.lexer.blockTokens(i.items[e].text,[]),!i.loose){let t=i.items[e].tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(i.loose)for(let e=0;e<i.items.length;e++)i.items[e].loose=!0;return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ht(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(ht(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=R(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=gt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),_t(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return _t(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:`del`,raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},B=class e{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||S,this.options.tokenizer=this.options.tokenizer||new z,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:T,block:F.normal,inline:I.normal};this.options.pedantic?(t.block=F.pedantic,t.inline=I.pedantic):this.options.gfm&&(t.block=F.gfm,this.options.breaks?t.inline=I.breaks:t.inline=I.gfm),this.tokenizer.rules=t}static get rules(){return{block:F,inline:I}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(T.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(T.tabCharGlobal,`    `).replace(T.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},V=class{options;parser;constructor(e){this.options=e||S}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(T.notSpaceStart)?.[0],i=e.replace(T.endingNewline,``)+`
`;return r?`<pre><code class="language-`+L(r)+`">`+(n?i:L(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:L(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){let t=``;if(e.task){let n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type===`paragraph`?(e.tokens[0].text=n+` `+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type===`text`&&(e.tokens[0].tokens[0].text=n+` `+L(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:`text`,raw:n+` `,text:n+` `,escaped:!0}):t+=n+` `}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox">`}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${L(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=mt(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+L(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=mt(e);if(i===null)return L(n);e=i;let a=`<img src="${e}" alt="${n}"`;return t&&(a+=` title="${L(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:L(e.text)}},yt=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}},H=class e{options;renderer;textRenderer;constructor(e){this.options=e||S,this.options.renderer=this.options.renderer||new V,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new yt}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e,t=!0){let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=i,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(t!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){n+=t||``;continue}}let a=i;switch(a.type){case`space`:n+=this.renderer.space(a);continue;case`hr`:n+=this.renderer.hr(a);continue;case`heading`:n+=this.renderer.heading(a);continue;case`code`:n+=this.renderer.code(a);continue;case`table`:n+=this.renderer.table(a);continue;case`blockquote`:n+=this.renderer.blockquote(a);continue;case`list`:n+=this.renderer.list(a);continue;case`html`:n+=this.renderer.html(a);continue;case`def`:n+=this.renderer.def(a);continue;case`paragraph`:n+=this.renderer.paragraph(a);continue;case`text`:{let i=a,o=this.renderer.text(i);for(;r+1<e.length&&e[r+1].type===`text`;)i=e[++r],o+=`
`+this.renderer.text(i);t?n+=this.renderer.paragraph({type:`paragraph`,raw:o,text:o,tokens:[{type:`text`,raw:o,text:o,escaped:!0}]}):n+=o;continue}default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}parseInline(e,t=this.renderer){let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},U=class{options;block;constructor(e){this.options=e||S}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?B.lex:B.lexInline}provideParser(){return this.block?H.parse:H.parseInline}},W=new class{defaults=_e();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=H;Renderer=V;TextRenderer=yt;Lexer=B;Tokenizer=z;Hooks=U;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new V(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new z(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new U;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];U.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&U.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return B.lex(e,t??this.defaults)}parser(e,t){return H.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?B.lex:B.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser():e?H.parse:H.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer():e?B.lex:B.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?H.parse:H.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+L(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function G(e,t){return W.parse(e,t)}G.options=G.setOptions=function(e){return W.setOptions(e),G.defaults=W.defaults,ve(G.defaults),G},G.getDefaults=_e,G.defaults=S,G.use=function(...e){return W.use(...e),G.defaults=W.defaults,ve(G.defaults),G},G.walkTokens=function(e,t){return W.walkTokens(e,t)},G.parseInline=W.parseInline,G.Parser=H,G.parser=H.parse,G.Renderer=V,G.TextRenderer=yt,G.Lexer=B,G.lexer=B.lex,G.Tokenizer=z,G.Hooks=U,G.parse=G,G.options,G.setOptions,G.use,G.walkTokens,G.parseInline,H.parse,B.lex;var bt=`You are an assistant in a web application with workspace, editors, and AI chat.

**Tools:**
Commands are exposed as AI-callable tools. Tools are context-aware - available commands depend on active editor, selected files, and workspace state.

**Tool Usage Rules:**
1. If tools are available and match the request, use them - don't describe manual steps
2. Read tool descriptions/parameters to select the correct tool
3. Call tools in sequence for multi-step tasks
4. After successful tool execution, provide a final response - don't loop or call more tools unless explicitly requested
5. If no tools are available, explain what context is needed

Keep responses concise. Use tools when available rather than discussing alternatives.

`;for(let{label:e,...t}of[{label:`Ollama (Local)`,name:`ollama`,model:`gemma3:12b`,chatApiEndpoint:`https://<your-server>/v1/chat/completions`,apiKey:``},{label:`OpenWebUI (Self Hosted)`,name:`openwebui`,model:`gemma3:12b`,chatApiEndpoint:`https://<your-server>/api/v1/chat/completion`,apiKey:``},{label:`OpenAI`,name:`openai`,model:`gpt-4.1`,chatApiEndpoint:`https://api.openai.com/v1/chat/completions`,apiKey:`<your api key>`},{label:`Groq`,name:`groq`,model:`llama-3.1-8b-instant`,chatApiEndpoint:`https://api.groq.com/openai/v1/chat/completions`,apiKey:`<your api key>`},{label:`Cerebras`,name:`cerebras`,model:`llama3.1-8b`,chatApiEndpoint:`https://api.cerebras.ai/v1/chat/completions`,apiKey:`<your api key>`},{label:`WebLLM`,name:`webllm`,model:`gemma-2-9b-it-q4f16_1-MLC`,chatApiEndpoint:``,apiKey:``,parameters:{context_window_size:4096}},{label:`Mistral`,name:`mistral`,model:`mistral-large-latest`,chatApiEndpoint:`https://api.mistral.ai/v1/chat/completions`,apiKey:`<your api key>`},{label:`LiteLLM`,name:`litellm`,model:`gpt-3.5-turbo`,chatApiEndpoint:`https://<your-server>/v1/chat/completions`,apiKey:`<your api key>`}])h.registerContribution(de,{target:de,label:e,provider:t});h.registerContribution(pe,{label:`App State Enhancer`,enhancer:{priority:20,enhance:async(e,t)=>{try{let t=await n.getWorkspace(),r=ae.getEditorArea()?.getActiveEditor(),i={workspace:t?.getName()||null,activeEditor:r?{title:r.input?.title||null,editorId:r.input?.editorId||null}:null};return`${e}\n\n***App's state:***\n${JSON.stringify(i,null,2)}`}catch{return e}}}});var xt=class{constructor(){this.activeSession=null,this.pastSessions=[]}async load(){let e=await y.get(`aiChatSessions`);if(e){if(e.active&&Array.isArray(e.history))this.activeSession=e.active;else if(e.activeSessionId&&Array.isArray(e.sessions))this.activeSession=e.sessions.find(t=>t.id===e.activeSessionId)||null,this.pastSessions=e.sessions.filter(t=>t.id!==e.activeSessionId);else if(Array.isArray(e.all)){let[t,...n]=e.all.sort((e,t)=>t.updatedAt-e.updatedAt);this.activeSession=t||null,this.pastSessions=n}}}async persist(){let e=[];this.activeSession&&e.push(this.activeSession),e.push(...this.pastSessions),await y.set(`aiChatSessions`,{all:e,activeSessionId:this.activeSession?.id||null})}createSession(){let e={id:`session-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,history:[],title:`New Chat`,createdAt:Date.now(),updatedAt:Date.now()};return this.activeSession&&this.pastSessions.unshift(this.activeSession),this.activeSession=e,this.persist(),e}getActiveSession(){return this.activeSession}getActiveSessionId(){return this.activeSession?.id||``}switchToSession(e){if(this.activeSession?.id===e)return!0;let t=this.pastSessions.findIndex(t=>t.id===e);if(t===-1)return!1;let[n]=this.pastSessions.splice(t,1);return n?(this.activeSession&&this.pastSessions.unshift(this.activeSession),this.activeSession=n,this.persist(),!0):!1}getPastSessions(){return this.pastSessions}deletePastSession(e){let t=this.pastSessions.findIndex(t=>t.id===e);return t===-1?!1:(this.pastSessions.splice(t,1),this.persist(),!0)}addMessage(e){this.activeSession&&(this.activeSession.history.push(e),this.activeSession.updatedAt=Date.now(),this.persist())}setTitle(e){this.activeSession&&(this.activeSession.title=e,this.persist())}generateTitle(e){let t=e.trim();return t?t.length<=30?t:t.substring(0,30).trim()+`...`:`New Chat`}deleteActiveAndSwitchToFirst(){this.activeSession&&(this.activeSession=this.pastSessions.shift()||null,this.activeSession||this.createSession(),this.persist())}},St=class{constructor(e){this.streamingMessages=new Map,this.currentIndex=-1,this.pendingUpdate=!1,this.onUpdate=e}createStreamingMessage(e){let t=++this.currentIndex;return this.streamingMessages.set(t,{message:{role:e,content:``},isStreaming:!0}),t}updateStreamingMessage(e,t){let n=this.streamingMessages.get(e);n&&(n.message.content+=t,this.scheduleUpdate())}completeStreamingMessage(e,t){let n=this.streamingMessages.get(e);n&&(n.message=t,n.isStreaming=!1)}removeStreamingMessage(e){this.streamingMessages.delete(e)}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(t=>t.message.role===e)?.message}getAllStreamingMessages(){return Array.from(this.streamingMessages.values())}scheduleUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.rafHandle=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.onUpdate?.()}))}cancelUpdates(){this.rafHandle!==void 0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=void 0,this.pendingUpdate=!1)}reset(){this.streamingMessages.clear(),this.cancelUpdates(),this.currentIndex=-1}},Ct=`aiViewChat`,wt=class{constructor(e){this.aiService=e,this.providers=[],this.availableModels=[],this.loadingModels=!1,this.providerFactory=new fe}async initialize(){this.providers=await this.aiService.getProviders()||[];let e=await this.aiService.getDefaultProvider();e&&(this.selectedProvider=e)}getProviders(){return this.providers}getSelectedProvider(){return this.selectedProvider}setSelectedProvider(e){this.selectedProvider=e}getAvailableModels(){return this.availableModels}isLoadingModels(){return this.loadingModels}async saveSettings(e,t,n,r,i){let a={...await y.get(Ct)||{}};r!==void 0&&(a.requireToolApproval=r),i!==void 0&&(a.toolApprovalAllowlist=i),await y.set(Ct,a);let o=this.providers.find(t=>t.name===e);o&&(this.selectedProvider={...o,model:t,...n!==void 0&&{apiKey:n}},await this.updateProviderInAIConfig(e,{model:t,...n!==void 0&&{apiKey:n}}),await this.aiService.setDefaultProvider(e))}async updateProviderInAIConfig(e,t){let n=await y.get(`aiConfig`)||{};if(!n.providers||!Array.isArray(n.providers))return;let r=n.providers.findIndex(t=>t.name===e);r>=0&&(n.providers[r]={...n.providers[r],...t},await y.set(b,n))}async loadToolApprovalAllowlist(){return(await y.get(Ct)||{}).toolApprovalAllowlist||[]}async fetchModels(e){let t=this.providers.find(t=>t.name===e);if(t){this.loadingModels=!0,this.availableModels=[];try{this.availableModels=await this.providerFactory.getProvider(t).getAvailableModels?.(t)??[]}finally{this.loadingModels=!1}}}},Tt=class{constructor(){this.groups=new Map}createGroup(e,t,n,r,i){let a=`group-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;this.currentGroupId=a;let o={id:a,sessionId:e,userMessageIndex:t,userMessage:n,timestamp:new Date,agents:new Map,messageIndices:new Map};return r.forEach(e=>{let{label:t,icon:n}=i(e);o.agents.set(e,{role:e,label:t,icon:n,status:`streaming`})}),this.groups.set(a,o),a}getGroup(e){return this.groups.get(e)}updateAgentStatus(e,t,n,r,i){let a=this.groups.get(e);if(!a)return;let o=a.agents.get(t);o&&(o.status=n,r&&(o.message=r),i!==void 0&&(o.messageIndex=i,a.messageIndices.set(t,i)))}getGroupsForSession(e){return Array.from(this.groups.values()).filter(t=>t.sessionId===e)}findGroupForUserMessage(e,t,n){return Array.from(this.groups.values()).find(r=>r.sessionId===e&&r.userMessageIndex===t&&r.userMessage===n)}findGroupForMessage(e,t,n){return Array.from(this.groups.values()).find(r=>r.sessionId===e&&r.messageIndices.get(t)===n)}getCurrentGroupId(){return this.currentGroupId}setCurrentGroupId(e){this.currentGroupId=e}clearCurrentGroup(){this.currentGroupId=void 0}getAllGroups(){return Array.from(this.groups.values())}clearAll(){this.groups.clear(),this.currentGroupId=void 0}},K=class extends i{constructor(...e){super(...e),this.isStreaming=!1,this.showHeader=!0}updated(e){super.updated(e),(e.has(`message`)||!this.hasAttribute(`data-is-user`))&&this.updateAlignment()}updateAlignment(){this.message&&this.setAttribute(`data-is-user`,String(this.message.role===`user`))}copyToClipboard(e){navigator.clipboard.writeText(e).catch(e=>console.error(`Failed to copy:`,e))}processMarkdownContent(e){return e.includes(`code-blocwrapper`)?e:e.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi,(e,t,n)=>`
            <div class="code-blocwrapper">
                <div class="code-blocheader">
                    <wa-copy-button value="${this.escapeHtmlAttribute(n.trim())}" size="small" label="Copy code"></wa-copy-button>
                </div>
                <div class="code-bloccontent">
                    <pre><code${t}>${n}</code></pre>
                </div>
            </div>`)}escapeHtmlAttribute(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}handleResend(e){e?.preventDefault(),e?.stopPropagation(),this.message&&this.dispatchEvent(new CustomEvent(`resend`,{detail:{message:this.message,messageIndex:this.messageIndex},bubbles:!0,composed:!0}))}render(){if(!this.message)return o``;let e=this.message,t=e.role===`user`;return o`
            <div class="message-wrapper ${t?`user`:`assistant`} ${this.isStreaming?`streaming`:``}">
                ${u(this.showHeader&&!t,()=>o`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon name="robot" label="${e.role}"></wa-icon>
                            <span class="role-name">${e.role}</span>
                        </div>
                    <div class="message-actions">
                        <wa-button variant="neutral" appearance="plain" size="small" title="Copy"
                            @click="${()=>this.copyToClipboard(e.content)}">
                            <wa-icon slot="label" name="copy" label="Copy"></wa-icon>
                        </wa-button>
                    </div>
                    </div>
                `)}
                <div class="message-content-wrapper ${t?`user`:``}">
                    <div class="message-content">
                        ${d(this.processMarkdownContent(G.parse(e.content||``)))}
                        ${u(this.isStreaming,()=>o`<span class="streaming-cursor">▋</span>`)}
                    </div>
                    ${u(t,()=>o`
                        <wa-button variant="neutral" appearance="plain" size="small" title="Copy"
                            @click="${()=>this.copyToClipboard(e.content)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                        <wa-button variant="neutral" appearance="plain" size="small" title="Resend"
                            @click="${e=>this.handleResend(e)}">
                            <wa-icon name="rotate-right" label="Resend"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}static{this.styles=a`
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
    `}};v([p({type:Object,attribute:!1})],K.prototype,`message`,void 0),v([p({type:Boolean})],K.prototype,`isStreaming`,void 0),v([p({type:Boolean})],K.prototype,`showHeader`,void 0),v([p({type:Number,attribute:!1})],K.prototype,`messageIndex`,void 0),K=v([c(`docks-ai-chat-message`)],K);var q=class extends i{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent(`input-change`,{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(e){e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;let e=this.value;this.value=``,this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value=``,this.textareaElement.focus()),this.dispatchEvent(new CustomEvent(`send`,{detail:{value:e},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent(`cancel`,{bubbles:!0,composed:!0}))}render(){return o`
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
                    ${u(this.busy,()=>o`
                        <wa-button appearance="plain" size="small" @click="${this.cancel}">
                            <wa-icon name="stop" label="Stop"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}static{this.styles=a`
        :host { display: block; width: 100%; }
        .input-container { margin-bottom: 0.25rem; margin-left: 0.25rem; }
        .input-row { display: flex; gap: 0.5rem; align-items: flex-end; }
        wa-textarea { flex: 1; min-width: 0; }
    `}};v([p({type:String})],q.prototype,`value`,void 0),v([p({type:Boolean})],q.prototype,`disabled`,void 0),v([p({type:Boolean})],q.prototype,`busy`,void 0),v([p({type:Boolean})],q.prototype,`hasProvider`,void 0),v([l(`wa-textarea`)],q.prototype,`textareaElement`,void 0),q=v([c(`docks-ai-chat-input`)],q);var J=class extends i{copyToClipboard(e){navigator.clipboard.writeText(e).catch(e=>console.error(`Failed to copy:`,e))}renderStatusIcon(e){switch(e){case`streaming`:return o`<wa-icon name="spinner" class="spinning"></wa-icon>`;case`completed`:return o`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case`error`:return o`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}renderCard(e,t){return t?o`
            <div class="agent-card status-${e.status}">
                <div class="agent-card-header">
                    <wa-icon name="${e.icon}" label="${e.label}"></wa-icon>
                    <span>${e.label}</span>
                    ${this.renderStatusIcon(e.status)}
                    <div class="agent-card-actions">
                        <wa-button variant="neutral" appearance="plain" size="small" title="Copy"
                            @click="${()=>this.copyToClipboard(t.content||``)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                    </div>
                </div>
                <div class="agent-card-content">
                    <docks-ai-chat-message
                        .message="${t}"
                        .isStreaming="${e.status===`streaming`}"
                        .showHeader="${!1}"
                        .messageIndex="${e.messageIndex}">
                    </docks-ai-chat-message>
                </div>
            </div>
        `:o`
                <div class="agent-card status-${e.status}">
                    <div class="agent-card-header">
                        <wa-icon name="${e.icon}" label="${e.label}"></wa-icon>
                        <span>${e.label}</span>
                        ${this.renderStatusIcon(e.status)}
                    </div>
                    <div class="agent-card-content waiting">Waiting for response...</div>
                </div>
            `}render(){if(!this.group)return o``;let e=Array.from(this.group.agents.values()),t=e.filter(e=>e.status===`completed`).length,n=e.filter(e=>e.status===`streaming`).length,r=e.filter(e=>e.status===`error`).length,i=e.length>0&&t+r===e.length;return o`
            <div class="agent-response-group">
                ${u(e.length!==1,()=>o`
                    <div class="group-header">
                        <wa-icon name="robot" label="Multiple Agents"></wa-icon>
                        <span>Multiple Agents</span>
                        <span class="status-badge">
                            ${u(n>0,()=>o`<span class="streaming">${n} responding</span>`)}
                            ${u(i,()=>o`<span class="done">All completed (${t})</span>`)}
                        </span>
                    </div>
                `)}
                <div class="group-content">
                    ${f(e,e=>e.role,e=>{let t=e.message||(e.status===`streaming`&&this.findStreamingMessage?this.findStreamingMessage(e.role):void 0);return this.renderCard(e,t)})}
                </div>
            </div>
        `}static{this.styles=a`
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
    `}};v([p({type:Object,attribute:!1})],J.prototype,`group`,void 0),v([p({type:Function,attribute:!1})],J.prototype,`findStreamingMessage`,void 0),J=v([c(`docks-ai-agent-response-group`)],J);var Et=class extends i{constructor(...e){super(...e),this.pendingApprovals=new Map}approve(e,t){this.dispatchEvent(new CustomEvent(`approve`,{detail:{approvalId:e,approval:t},bubbles:!0,composed:!0})),t.resolve(!0),this.pendingApprovals.delete(e),this.requestUpdate()}deny(e,t){t.resolve(!1),this.pendingApprovals.delete(e),this.requestUpdate()}formatArgs(e){let t={};try{t=JSON.parse(e)}catch{}return Object.entries(t).map(([e,t])=>`${e}=${JSON.stringify(t)}`).join(`, `)}render(){return this.pendingApprovals.size===0?o``:o`
            <div class="approval-container">
                ${Array.from(this.pendingApprovals.entries()).map(([e,t])=>{let n=t.request.toolCalls,r=n[0];return o`
                        <wa-details class="approval-item">
                            <span slot="summary" class="approval-summary">
                                <span>${n.length===1?`AI wants to execute: ${r?.function.name}()`:`AI wants to execute ${n.length} tools`}</span>
                                <div class="approval-inline-actions">
                                    <wa-button appearance="plain" size="small" variant="neutral"
                                        @click="${n=>{n.stopPropagation(),this.deny(e,t)}}">
                                        <wa-icon name="xmark" label="Deny"></wa-icon>
                                    </wa-button>
                                    <wa-button appearance="plain" size="small" variant="success"
                                        @click="${async n=>{n.stopPropagation(),this.approve(e,t)}}">
                                        <wa-icon name="check" label="Approve"></wa-icon>
                                    </wa-button>
                                </div>
                            </span>
                            <div class="approval-detail">
                                <strong>${t.role} wants to execute:</strong>
                                <ul class="tool-list">
                                    ${f(n,e=>e.id,e=>{let n=this.formatArgs(e.function.arguments||`{}`);return o`
                                            <li class="tool-item">
                                                <label class="always-allow-label">
                                                    <wa-checkbox
                                                        ?checked="${t.alwaysAllowSelections.get(e.id)||!1}"
                                                        @change="${n=>{t.alwaysAllowSelections.set(e.id,n.target.checked),this.requestUpdate()}}">
                                                    </wa-checkbox>
                                                    <span>Always allow</span>
                                                </label>
                                                <code>${e.function.name}(${n})</code>
                                            </li>
                                        `})}
                                </ul>
                            </div>
                        </wa-details>
                    `})}
            </div>
        `}static{this.styles=a`
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
    `}};v([p({type:Map,attribute:!1})],Et.prototype,`pendingApprovals`,void 0),Et=v([c(`docks-ai-tool-approval`)],Et);var Y=class extends i{constructor(...e){super(...e),this.message=`No AI provider configured`,this.hint=`Click the settings icon to configure an AI provider`}render(){return o`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}static{this.styles=a`
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
    `}};v([p({type:String})],Y.prototype,`message`,void 0),v([p({type:String})],Y.prototype,`hint`,void 0),Y=v([c(`docks-ai-empty-state`)],Y);var Dt={running:`spinner`,completed:`check-circle`,failed:`exclamation-circle`,skipped:`forward`,pending:`circle`},Ot={running:`var(--wa-color-brand-50)`,completed:`var(--wa-color-success-60)`,failed:`var(--wa-color-danger-60)`,skipped:`var(--wa-color-neutral-40)`,pending:`var(--wa-color-neutral-40)`},X=class extends i{constructor(...e){super(...e),this.expanded=!0}render(){if(!this.plan)return o``;let e=this.plan.steps.filter(e=>e.status===`completed`).length,t=this.plan.steps.length;return o`
            <div class="taspanel">
                <div class="panel-header" @click="${()=>{this.expanded=!this.expanded}}">
                    <wa-icon name="diagram-project" label="Task Plan"></wa-icon>
                    <span class="panel-title">Task Plan</span>
                    <span class="progress-text">${e}/${t}</span>
                    <wa-progress-bar value="${t>0?Math.round(e/t*100):0}" class="progress-bar"></wa-progress-bar>
                    <wa-icon name="${this.expanded?`chevron-up`:`chevron-down`}" label="toggle"></wa-icon>
                </div>
                ${u(this.expanded,()=>o`
                    <div class="panel-body">
                        ${f(this.plan.steps,e=>e.id,e=>o`
                            <div class="step-row">
                                <wa-icon
                                    name="${Dt[e.status]??`circle`}"
                                    style="color: ${Ot[e.status]??`var(--wa-color-neutral-40)`}; ${e.status===`running`?`animation: spin 1s linear infinite;`:``}">
                                </wa-icon>
                                <div class="step-info">
                                    <span class="step-role">${e.role}</span>
                                    <span class="step-task">${e.subTask}</span>
                                </div>
                                ${u(e.revisions>0,()=>o`
                                    <span class="revisions-badge">${e.revisions} rev</span>
                                `)}
                            </div>
                        `)}
                    </div>
                `)}
            </div>
        `}static{this.styles=a`
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
    `}};v([p({type:Object,attribute:!1})],X.prototype,`plan`,void 0),v([s()],X.prototype,`expanded`,void 0),X=v([c(`docks-ai-task-progress-panel`)],X);var kt={code:`code`,json:`brackets-curly`,"file-list":`list`,plan:`diagram-project`,review:`magnifying-glass`,text:`file-lines`},Z=class extends i{constructor(...e){super(...e),this.artifacts=[],this.expanded=!1}render(){return this.artifacts.length===0?o``:o`
            <div class="workspace-panel">
                <div class="panel-header" @click="${()=>{this.expanded=!this.expanded,this.selectedArtifact=void 0}}">
                    <wa-icon name="folder-open" label="Workspace"></wa-icon>
                    <span class="panel-title">Workspace</span>
                    <span class="count-badge">${this.artifacts.length} artifact${this.artifacts.length===1?``:`s`}</span>
                    <wa-icon name="${this.expanded?`chevron-up`:`chevron-down`}" label="toggle"></wa-icon>
                </div>
                ${u(this.expanded,()=>o`
                    <div class="panel-body">
                        <div class="artifact-list">
                            ${f(this.artifacts,e=>e.id,e=>o`
                                <div
                                    class="artifact-item ${this.selectedArtifact?.id===e.id?`selected`:``}"
                                    @click="${()=>{this.selectedArtifact=this.selectedArtifact?.id===e.id?void 0:e}}">
                                    <wa-icon name="${kt[e.type]??`file-lines`}" label="${e.type}"></wa-icon>
                                    <div class="artifact-meta">
                                        <span class="artifact-id">${e.id}</span>
                                        <span class="artifact-producer">by ${e.producedBy}</span>
                                    </div>
                                    <span class="artifact-type">${e.type}</span>
                                </div>
                                ${u(this.selectedArtifact?.id===e.id,()=>o`
                                    <div class="artifact-content">
                                        <pre>${e.content}</pre>
                                    </div>
                                `)}
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        `}static{this.styles=a`
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
    `}};v([p({type:Array,attribute:!1})],Z.prototype,`artifacts`,void 0),v([s()],Z.prototype,`expanded`,void 0),v([s()],Z.prototype,`selectedArtifact`,void 0),Z=v([c(`docks-ai-workspace-panel`)],Z);var Q=class extends te{constructor(...e){super(...e),this.sessionManager=new xt,this.streamManager=new St(()=>{this.requestUpdate(),this.scrollDebounceTimer&&clearTimeout(this.scrollDebounceTimer),this.scrollDebounceTimer=setTimeout(async()=>{await this.updateComplete,this.scrollToBottom(),this.scrollDebounceTimer=void 0},100)}),this.providerManager=new wt(x),this.agentGroupManager=new Tt,this.busy=!1,this.inputValue=``,this.requireToolApproval=!0,this.showHistory=!1,this.currentArtifacts=[],this.pendingToolApprovals=new Map,this.toolApprovalAllowlist=new Set}async doBeforeUI(){this.subscribe(me,()=>this.onAIConfigChanged()),await this.sessionManager.load(),this.sessionManager.getActiveSession()||this.sessionManager.createSession(),await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async onAIConfigChanged(){await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async loadSettings(){this.requireToolApproval=(await y.get(`aiConfig`)||{}).requireToolApproval!==!1;let e=await this.providerManager.loadToolApprovalAllowlist();this.toolApprovalAllowlist=new Set(e)}async scrollToBottom(){await this.updateComplete;let e=this.shadowRoot?.querySelector(`wa-scroller.chat-messages`);if(!e)return;let t=e.shadowRoot?.querySelector(`.scroll-container`);t?t.scrollTop=t.scrollHeight:e.scrollTo&&e.scrollTo({top:e.scrollHeight,behavior:`smooth`})}resetViewState(){this.inputValue=``,this.showHistory=!1,this.currentTaskPlan=void 0,this.currentArtifacts=[],this.requestUpdate()}createNewSession(){this.sessionManager.createSession(),this.resetViewState()}switchToSession(e){this.sessionManager.switchToSession(e)&&this.resetViewState()}deletePastSession(e){this.sessionManager.deletePastSession(e),this.requestUpdate()}async sendMessage(){let e=this.inputValue.trim();!e||this.busy||(this.inputValue=``,await this.handlePrompt(e))}async handleResend(e){!e||e.role!==`user`||await this.handlePrompt(e.content)}cancelStream(){this.abortController?.abort(),this.abortController=void 0,this.busy=!1,this.streamManager.cancelUpdates()}async handlePrompt(t){if(t.startsWith(`/`)){await this.runCommand(t.substring(1));return}let n=this.providerManager.getSelectedProvider();if(!n){_(`Please configure an AI provider in settings`);return}let r=this.sessionManager.getActiveSession();if(!r)return;let i=x.createMessage(t);this.sessionManager.addMessage(i),r.history.length===1&&this.sessionManager.setTitle(this.sessionManager.generateTitle(t)),this.requestUpdate(),await this.updateComplete,this.scrollToBottom(),this.busy=!0,this.currentTaskPlan=void 0,this.currentArtifacts=[],this.abortController=new AbortController;let a=new Map,o={history:[...r.history]},s=r.id,c=g.createExecutionContext(),l=e.createChild({...c}),u=x.getAgentContributions();if(u.length===0){_(`No agents are registered.`),this.busy=!1;return}let d=u.filter(e=>!e.canHandle||e.canHandle({...l.getProxy(),userPrompt:t})).sort((e,t)=>(t.priority||0)-(e.priority||0));if(d.length===0){_(`No agents available. Available: ${u.map(e=>e.role).join(`, `)}`),this.busy=!1;return}let f=d.map(e=>e.role),p=this.sessionManager.getActiveSession();if(!p)return;let m=this.agentGroupManager.createGroup(s,p.history.length-1,i,f,e=>{let t=u.find(t=>t.role===e);return{label:t?.label||e,icon:t?.icon||`robot`}});se.runAsync(`Calling AI assistant`,async()=>x.executeAgentWorkflow({chatContext:o,chatConfig:n,callContext:l,execution:`parallel`,stream:!0,signal:this.abortController.signal,roles:f,requireToolApproval:this.requireToolApproval,onToolApprovalRequest:async(e,t)=>t.toolCalls.every(e=>this.toolApprovalAllowlist.has(e.function.name))?!0:new Promise(n=>{let r=`approval-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,i={role:e,request:t,resolve:n,alwaysAllowSelections:new Map};this.pendingToolApprovals.set(r,i),this.requestUpdate()}),onAgentStart:async e=>{let t=this.streamManager.createStreamingMessage(e);a.set(e,t),this.agentGroupManager.updateAgentStatus(m,e,`streaming`),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()},onToken:(e,t)=>{let n=a.get(e);n!==void 0&&this.streamManager.updateStreamingMessage(n,t)},onAgentComplete:async(e,t)=>{let n=this.sessionManager.getActiveSession();if(!n||n.id!==s)return;let r=a.get(e);if(r!==void 0){this.streamManager.completeStreamingMessage(r,t);let i=n.history.length;this.sessionManager.addMessage(t),a.delete(e),this.streamManager.removeStreamingMessage(r),this.agentGroupManager.updateAgentStatus(m,e,`completed`,t,i),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()}},onAgentError:(e,t)=>{let n=a.get(e);n!==void 0&&(this.streamManager.removeStreamingMessage(n),a.delete(e)),this.agentGroupManager.updateAgentStatus(m,e,`error`,{role:e,content:`Error: ${t.message}`}),this.requestUpdate(),_(`Agent ${e} error: ${t.message}`)}}).then(()=>{this.agentGroupManager.clearCurrentGroup()})).catch(e=>{e?.name!==`AbortError`&&_(`${e}`)}).finally(async()=>{this.busy=!1,this.abortController=void 0,this.streamManager.reset(),this.agentGroupManager.clearCurrentGroup(),this.requestUpdate()})}async runCommand(e){let t=e.trim().split(/\s+/);if(t.length===0)return;let n=t.shift(),r=g.getCommand(n);if(!r){_(`Command not found: ${n}`);return}let i={};t.forEach((e,t)=>{r.parameters?.[t]&&(i[r.parameters[t].name]=e)}),await g.execute(n,g.createExecutionContext(i)),this.requestUpdate()}handleToolApproval(e){let{approvalId:t,approval:n}=e.detail;Array.from(n.alwaysAllowSelections.entries()).filter(([,e])=>e).map(([e])=>e).forEach(e=>this.toolApprovalAllowlist.add(e)),this.pendingToolApprovals.delete(t),this.requestUpdate()}renderMessage(e,t,n=!1){return o`
            <docks-ai-chat-message
                .message="${e}"
                .isStreaming="${n}"
                .showHeader="${!0}"
                .messageIndex="${t}"
                @resend="${e=>this.handleResend(e.detail.message)}">
            </docks-ai-chat-message>
        `}renderToolbar(){let e=this.sessionManager.getPastSessions();return o`
            <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.875rem;font-weight:500;padding:0 0.25rem;">${this.sessionManager.getActiveSession()?.title||`New Chat`}</span>
            <wa-button appearance="plain" size="small" title="New chat"
                @click="${()=>this.createNewSession()}">
                <wa-icon name="plus" label="New chat"></wa-icon>
            </wa-button>
            ${e.length>0?o`
                <wa-dropdown
                    ?open="${this.showHistory}"
                    @wa-after-hide="${()=>{this.showHistory=!1}}"
                    placement="bottom-start">
                    <wa-button slot="trigger" appearance="plain" size="small" with-caret
                        title="Chat history"
                        @click="${()=>{this.showHistory=!this.showHistory}}">
                        <wa-icon name="clock-rotate-left" label="History"></wa-icon>
                    </wa-button>
                    ${e.map(e=>o`
                        <wa-dropdown-item @click="${()=>this.switchToSession(e.id)}">
                            <wa-icon name="message" label="Session" slot="icon"></wa-icon>
                            <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${e.title||`Unnamed Chat`}</span>
                            <wa-button slot="details" appearance="plain" size="small" title="Delete"
                                @click="${t=>{t.stopPropagation(),this.deletePastSession(e.id)}}">
                                <wa-icon name="trash" label="Delete"></wa-icon>
                            </wa-button>
                        </wa-dropdown-item>
                    `)}
                </wa-dropdown>
            `:m}
            <docks-command cmd="open_ai_config" icon="gear" title="AI Settings"></docks-command>
        `}renderContent(){let e=this.sessionManager.getActiveSession(),t=this.providerManager.getSelectedProvider();return o`
            <div class="chat-container">
                <wa-scroller class="chat-messages" orientation="vertical">
                    <div class="chat-content">
                        ${u(!t,()=>o`
                            <docks-ai-empty-state
                                message="No AI provider configured"
                                hint='Click the settings icon below to configure an AI provider'>
                            </docks-ai-empty-state>
                        `,()=>u(!e||e.history.length===0,()=>o`
                            <docks-ai-empty-state message="How can I help you?" hint=""></docks-ai-empty-state>
                        `,()=>o`
                            ${e.history.map((t,n)=>{let r=this.agentGroupManager.findGroupForUserMessage(e.id,n,t);return r&&t.role===`user`?o`
                                        <docks-ai-chat-message
                                            .message="${t}"
                                            .isStreaming="${!1}"
                                            .showHeader="${!0}"
                                            .messageIndex="${n}"
                                            @resend="${e=>this.handleResend(e.detail.message)}">
                                        </docks-ai-chat-message>
                                        <docks-ai-agent-response-group
                                            .group="${r}"
                                            .findStreamingMessage="${e=>this.streamManager.findStreamingMessage(e)}">
                                        </docks-ai-agent-response-group>
                                    `:this.agentGroupManager.findGroupForMessage(e.id,t.role,n)?o``:this.renderMessage(t,n)})}

                            ${this.streamManager.getAllStreamingMessages().filter(t=>!this.agentGroupManager.getAllGroups().some(n=>n.sessionId===e.id&&n.agents.has(t.message.role))).map(e=>this.renderMessage(e.message,-1,e.isStreaming))}

                            ${u(this.busy&&this.streamManager.getAllStreamingMessages().length===0,()=>o`
                                <div class="thinking-indicator">
                                    <wa-progress-ring indeterminate size="small"></wa-progress-ring>
                                    <span>Thinking…</span>
                                </div>
                            `)}
                        `))}

                        ${u(this.currentTaskPlan,()=>o`
                            <docks-ai-task-progress-panel .plan="${this.currentTaskPlan}"></docks-ai-task-progress-panel>
                        `)}

                        ${u(this.currentArtifacts.length>0,()=>o`
                            <docks-ai-workspace-panel .artifacts="${this.currentArtifacts}"></docks-ai-workspace-panel>
                        `)}
                    </div>
                </wa-scroller>

                ${u(this.pendingToolApprovals.size>0,()=>o`
                    <docks-ai-tool-approval
                        .pendingApprovals="${this.pendingToolApprovals}"
                        @approve="${e=>this.handleToolApproval(e)}">
                    </docks-ai-tool-approval>
                `)}

                <div class="input-area">
                    <docks-ai-chat-input
                        .value="${this.inputValue}"
                        .busy="${this.busy}"
                        .disabled="${!t}"
                        .hasProvider="${!!t}"
                        @input-change="${e=>{this.inputValue=e.detail.value}}"
                        @send="${e=>{this.inputValue=e.detail.value,this.sendMessage()}}"
                        @cancel="${()=>this.cancelStream()}">
                    </docks-ai-chat-input>
                </div>
            </div>
        `}static{this.styles=a`
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
    `}};v([s()],Q.prototype,`busy`,void 0),v([s()],Q.prototype,`inputValue`,void 0),v([s()],Q.prototype,`requireToolApproval`,void 0),v([s()],Q.prototype,`showHistory`,void 0),v([s()],Q.prototype,`currentTaskPlan`,void 0),v([s()],Q.prototype,`currentArtifacts`,void 0),v([s()],Q.prototype,`pendingToolApprovals`,void 0),Q=v([c(`docks-aiview`)],Q);var At=class extends ie{constructor(...e){super(...e),this.totalUsage={...ue},this.providerUsage={}}connectedCallback(){super.connectedCallback(),this.loadUsage(),r(le,()=>{this.loadUsage()})}async loadUsage(){this.totalUsage=await ge.getTotalUsage(),this.providerUsage=await ge.getAllProviderUsage(),this.requestUpdate()}formatNumber(e){return e>=1e6?(e/1e6).toFixed(2)+`M`:e>=1e3?(e/1e3).toFixed(1)+`K`:e.toString()}async handleReset(){await ce(`Reset all token usage statistics?`)&&(await ge.reset(),await this.loadUsage())}renderStatItem(e,t){return o`
            <div class="stat-item">
                <span class="stat-label">${e}</span>
                <span class="stat-value">${this.formatNumber(t)}</span>
            </div>
        `}render(){return this.totalUsage.totalTokens===0?o``:o`
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
                        ${this.renderStatItem(`Prompt`,this.totalUsage.promptTokens)}
                        ${this.renderStatItem(`Completion`,this.totalUsage.completionTokens)}
                        ${this.renderStatItem(`Total`,this.totalUsage.totalTokens)}
                        ${this.renderStatItem(`Requests`,this.totalUsage.requestCount)}
                    </div>
                </wa-dropdown-item>

                ${Object.keys(this.providerUsage).length>0?o`
                    <wa-divider></wa-divider>
                    <h6>By Provider</h6>
                    ${Object.entries(this.providerUsage).map(([e,t])=>o`
                        <wa-dropdown-item>
                            <span class="provider-name">${e}</span>
                            <div class="stats-row">
                                ${this.renderStatItem(`Prompt`,t.promptTokens)}
                                ${this.renderStatItem(`Completion`,t.completionTokens)}
                                ${this.renderStatItem(`Total`,t.totalTokens)}
                                ${this.renderStatItem(`Req`,t.requestCount)}
                            </div>
                        </wa-dropdown-item>
                    `)}
                `:``}

                <wa-divider></wa-divider>
                <wa-dropdown-item variant="danger" @click="${()=>this.handleReset()}">
                    <wa-icon name="trash" slot="icon"></wa-icon>
                    Reset statistics
                </wa-dropdown-item>
            </wa-dropdown>
        `}static{this.styles=a`
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
    `}};At=v([c(`docks-token-usage`)],At);var $=class extends te{constructor(...e){super(...e),this.providers=[],this.defaultProvider=``,this.hasChanges=!1,this.availableModels=[],this.loadingModels=!1,this.requireToolApproval=!0,this.smartToolDetection=!1,this.editingState={},this.providerFactory=new fe}async doInitUI(){await this.loadConfig(),r(me,()=>this.loadConfig()),r(re,()=>this.loadConfig())}async loadConfig(){let e=await y.get(b);this.aiConfig=e;let t=h.getContributions(de).map(e=>e.provider),n=e?.providers||[],r=new Set(n.map(e=>e.name));this.providers=[...n,...t.filter(e=>!r.has(e.name))],this.defaultProvider=e?.defaultProvider||``,this.requireToolApproval=e?.requireToolApproval!==!1,this.smartToolDetection=e?.smartToolDetection===void 0?!1:e.smartToolDetection,this.editingState={},this.hasChanges=!1,this.markDirty(!1)}getEditValue(e,t){let n=this.editingState[e];if(n&&t in n)return n[t]??``;let r=this.providers[e];return r?r[t]??``:``}setEditValue(e,t,n){this.editingState={...this.editingState,[e]:{...this.editingState[e]||{},[t]:n}},this.providers=this.providers.map((r,i)=>i===e?{...r,[t]:n}:r),this.markDirtyAndUpdate()}markDirtyAndUpdate(){this.hasChanges=!0,this.markDirty(!0)}async fetchModels(e){let t=this.providers[e];if(t){this.loadingModels=!0,this.availableModels=[];try{let e=this.providerFactory.getProvider(t);if(e.getAvailableModels){let n=await e.getAvailableModels(t);this.availableModels=Array.isArray(n)?n:[]}}finally{this.loadingModels=!1}}}async saveConfig(){let e={...this.aiConfig??{},defaultProvider:this.defaultProvider,providers:this.providers,requireToolApproval:this.requireToolApproval,smartToolDetection:this.smartToolDetection};await y.set(b,e),this.aiConfig=e,this.hasChanges=!1,this.markDirty(!1)}async save(){this.hasChanges&&await this.saveConfig()}addProvider(){this.providers=[...this.providers,{name:`new-provider`,model:``,apiKey:``,chatApiEndpoint:``}],this.markDirtyAndUpdate()}async deleteProvider(e){let t=this.providers[e];await ce(`Delete provider "${t.name}"?`)&&(this.defaultProvider===t.name&&(this.defaultProvider=``),this.providers=this.providers.filter((t,n)=>n!==e),this.markDirtyAndUpdate())}renderProviderField(e,t,n=`text`){let r=this.getEditValue(e,t);return o`
            <wa-input
                type="${n}"
                ?password-toggle="${n===`password`}"
                .value="${r}"
                @input="${n=>this.setEditValue(e,t,n.target.value)}">
            </wa-input>
        `}renderContent(){return o`
            <div class="editor">
                <div class="editor-header">
                    <h2>AI Providers</h2>
                    <wa-button variant="brand" appearance="filled" @click="${this.addProvider}">
                        Add Provider
                    </wa-button>
                </div>

                ${u(this.providers.length===0,()=>o`
                    <div class="empty-state"><p>No providers configured.</p></div>
                `,()=>o`
                    <div class="providers-list">
                        ${f(this.providers,(e,t)=>t,(e,t)=>o`
                            <div class="provider-card">
                                <div class="provider-card-header ${this.defaultProvider===e.name?`is-default`:``}">
                                    <span class="provider-name">${e.name}</span>
                                    ${this.defaultProvider===e.name?o`<span class="default-badge">Default</span>`:o`<wa-button appearance="plain" size="small" title="Set as default"
                                                @click="${()=>{this.defaultProvider=e.name,this.markDirtyAndUpdate()}}">
                                                Set default
                                            </wa-button>`}
                                    <wa-button variant="danger" appearance="plain" size="small"
                                        @click="${()=>this.deleteProvider(t)}">
                                        Delete
                                    </wa-button>
                                </div>
                                <div class="provider-fields">
                                    <div class="field-row">
                                        <label>Name</label>
                                        ${this.renderProviderField(t,`name`)}
                                    </div>
                                    <div class="field-row">
                                        <label>Model</label>
                                        <div class="model-row">
                                            ${this.renderProviderField(t,`model`)}
                                            <wa-button appearance="plain" size="small"
                                                @click="${async()=>{await this.fetchModels(t)}}"
                                                title="Fetch available models">
                                                <wa-icon name="refresh" label="Refresh"></wa-icon>
                                            </wa-button>
                                        </div>
                                        ${u(this.loadingModels,()=>o`
                                            <wa-progress-ring indeterminate size="small"></wa-progress-ring>
                                        `)}
                                        ${u(this.availableModels.length>0,()=>o`
                                            <wa-dropdown
                                                @wa-select="${e=>{e.detail.item?.value&&this.setEditValue(t,`model`,e.detail.item.value)}}">
                                                <wa-button slot="trigger" size="small" appearance="plain" with-caret>
                                                    Select model
                                                </wa-button>
                                                ${this.availableModels.map(e=>o`
                                                    <wa-dropdown-item value="${e.id}">${e.name||e.id}</wa-dropdown-item>
                                                `)}
                                            </wa-dropdown>
                                        `)}
                                    </div>
                                    <div class="field-row">
                                        <label>API Endpoint</label>
                                        ${this.renderProviderField(t,`chatApiEndpoint`)}
                                    </div>
                                    <div class="field-row">
                                        <label>API Key</label>
                                        ${this.renderProviderField(t,`apiKey`,`password`)}
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
                        @change="${e=>{this.requireToolApproval=e.target.checked,this.markDirtyAndUpdate()}}">
                        Require approval before executing tools
                    </wa-checkbox>
                    <wa-checkbox
                        ?checked="${this.smartToolDetection}"
                        @change="${e=>{this.smartToolDetection=e.target.checked,this.markDirtyAndUpdate()}}">
                        Smart tool detection (use ML to detect when tools are needed)
                    </wa-checkbox>
                </div>
            </div>
        `}static{this.styles=a`
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
    `}};v([p({attribute:!1})],$.prototype,`input`,void 0),v([s()],$.prototype,`providers`,void 0),v([s()],$.prototype,`defaultProvider`,void 0),v([s()],$.prototype,`hasChanges`,void 0),v([s()],$.prototype,`availableModels`,void 0),v([s()],$.prototype,`loadingModels`,void 0),v([s()],$.prototype,`requireToolApproval`,void 0),v([s()],$.prototype,`smartToolDetection`,void 0),v([s()],$.prototype,`editingState`,void 0),$=v([c(`docks-ai-config-editor`)],$),h.registerContribution(oe,{name:`aiview`,label:`AI Assistant`,icon:`robot`,component:e=>o`<docks-aiview id="${e}"></docks-aiview>`}),h.registerContribution(he,{label:`App Support`,description:`General-purpose assistant that can answer questions and execute app commands`,role:`appsupport`,priority:100,icon:`question-circle`,sysPrompt:bt,tools:async()=>({enabled:!0,smartToolDetection:(await y.get(`aiConfig`))?.smartToolDetection??!1})}),h.registerContribution(ne,{target:ne,label:`Token Usage`,component:`<docks-token-usage></docks-token-usage>`}),ae.registerEditorInputHandler({editorId:`system.ai-config-editor`,label:`AI Config`,ranking:1e3,canHandle:e=>e.key===`.system.ai-config`,handle:async e=>(e.component=t=>o`<docks-ai-config-editor id="${t}" .input=${e}></docks-ai-config-editor>`,e)}),ee({command:{id:`open_ai_config`,name:`Open AI Configuration`,description:`Open the AI system configuration editor`,parameters:[]},handler:{execute:e=>{ae.loadEditor({title:`AI Settings`,data:{},key:`.system.ai-config`,icon:`robot`,state:{}}).then()}}}),t.put(`aiService`,x);