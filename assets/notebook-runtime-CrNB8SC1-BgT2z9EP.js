import{K as $e,g as k,a8 as Ce,al as se,w as Se,o as Re,u as _e,B as Ae,ar as ze,z as Te,l as Ee,n as Pe,j as C,k as Ie}from"./geospace-app-BMMih8F8.js";import{P as qe}from"./pyservice-0pDiP3ts-CftwL_r4.js";import{p as Me}from"./package-manager-DE_KdNWp-S6d0iW6E.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.IVRNYRHD-89zOMqhG.js";function V(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var _=V();function pe(t){_=t}var P={exec:()=>null};function d(t,e=""){let n=typeof t=="string"?t:t.source,s={replace:(r,l)=>{let i=typeof l=="string"?l:l.source;return i=i.replace(b.caret,"$1"),n=n.replace(r,i),s},getRegex:()=>new RegExp(n,e)};return s}var Be=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),b={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Oe=/^(?:[ \t]*(?:\n|$))+/,Le=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,De=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,I=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,He=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Q=/(?:[*+-]|\d{1,9}[.)])/,ue=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,de=d(ue).replace(/bull/g,Q).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Fe=d(ue).replace(/bull/g,Q).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),G=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ze=/^[^\n]+/,J=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ne=d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",J).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ue=d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Q).getRegex(),D="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",W=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,je=d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",W).replace("tag",D).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ge=d(G).replace("hr",I).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D).getRegex(),Ve=d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ge).getRegex(),K={blockquote:Ve,code:Le,def:Ne,fences:De,heading:He,hr:I,html:je,lheading:de,list:Ue,newline:Oe,paragraph:ge,table:P,text:Ze},ie=d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",I).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D).getRegex(),Qe={...K,lheading:Fe,table:ie,paragraph:d(G).replace("hr",I).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ie).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D).getRegex()},Ge={...K,html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",W).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:P,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:d(G).replace("hr",I).replace("heading",` *#{1,6} *[^
]`).replace("lheading",de).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Je=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,We=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fe=/^( {2,}|\\)\n(?!\s*$)/,Ke=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,H=/[\p{P}\p{S}]/u,X=/[\s\p{P}\p{S}]/u,ke=/[^\s\p{P}\p{S}]/u,Xe=d(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,X).getRegex(),me=/(?!~)[\p{P}\p{S}]/u,Ye=/(?!~)[\s\p{P}\p{S}]/u,et=/(?:[^\s\p{P}\p{S}]|~)/u,tt=d(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Be?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),be=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,nt=d(be,"u").replace(/punct/g,H).getRegex(),rt=d(be,"u").replace(/punct/g,me).getRegex(),we="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",st=d(we,"gu").replace(/notPunctSpace/g,ke).replace(/punctSpace/g,X).replace(/punct/g,H).getRegex(),it=d(we,"gu").replace(/notPunctSpace/g,et).replace(/punctSpace/g,Ye).replace(/punct/g,me).getRegex(),lt=d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ke).replace(/punctSpace/g,X).replace(/punct/g,H).getRegex(),at=d(/\\(punct)/,"gu").replace(/punct/g,H).getRegex(),ot=d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ct=d(W).replace("(?:-->|$)","-->").getRegex(),ht=d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ct).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),B=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,pt=d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",B).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xe=d(/^!?\[(label)\]\[(ref)\]/).replace("label",B).replace("ref",J).getRegex(),ye=d(/^!?\[(ref)\](?:\[\])?/).replace("ref",J).getRegex(),ut=d("reflink|nolink(?!\\()","g").replace("reflink",xe).replace("nolink",ye).getRegex(),le=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Y={_backpedal:P,anyPunctuation:at,autolink:ot,blockSkip:tt,br:fe,code:We,del:P,emStrongLDelim:nt,emStrongRDelimAst:st,emStrongRDelimUnd:lt,escape:Je,link:pt,nolink:ye,punctuation:Xe,reflink:xe,reflinkSearch:ut,tag:ht,text:Ke,url:P},dt={...Y,link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",B).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",B).getRegex()},N={...Y,emStrongRDelimAst:it,emStrongLDelim:rt,url:d(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",le).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:d(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",le).getRegex()},gt={...N,br:d(fe).replace("{2,}","*").getRegex(),text:d(N.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},M={normal:K,gfm:Qe,pedantic:Ge},z={normal:Y,gfm:N,breaks:gt,pedantic:dt},ft={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ae=t=>ft[t];function S(t,e){if(e){if(b.escapeTest.test(t))return t.replace(b.escapeReplace,ae)}else if(b.escapeTestNoEncode.test(t))return t.replace(b.escapeReplaceNoEncode,ae);return t}function oe(t){try{t=encodeURI(t).replace(b.percentDecode,"%")}catch{return null}return t}function ce(t,e){let n=t.replace(b.findPipe,(l,i,o)=>{let a=!1,c=i;for(;--c>=0&&o[c]==="\\";)a=!a;return a?"|":" |"}),s=n.split(b.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(b.slashPipe,"|");return s}function T(t,e,n){let s=t.length;if(s===0)return"";let r=0;for(;r<s&&t.charAt(s-r-1)===e;)r++;return t.slice(0,s-r)}function kt(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let s=0;s<t.length;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])n++;else if(t[s]===e[1]&&(n--,n<0))return s;return n>0?-2:-1}function he(t,e,n,s,r){let l=e.href,i=e.title||null,o=t[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let a={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:l,title:i,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,a}function mt(t,e,n){let s=t.match(n.other.indentCodeCompensation);if(s===null)return e;let r=s[1];return e.split(`
`).map(l=>{let i=l.match(n.other.beginningSpace);if(i===null)return l;let[o]=i;return o.length>=r.length?l.slice(r.length):l}).join(`
`)}var O=class{options;rules;lexer;constructor(t){this.options=t||_}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:T(n,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],s=mt(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let s=T(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:T(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=T(e[0],`
`).split(`
`),s="",r="",l=[];for(;n.length>0;){let i=!1,o=[],a;for(a=0;a<n.length;a++)if(this.rules.other.blockquoteStart.test(n[a]))o.push(n[a]),i=!0;else if(!i)o.push(n[a]);else break;n=n.slice(a);let c=o.join(`
`),h=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${c}`:c,r=r?`${r}
${h}`:h;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,l,!0),this.lexer.state.top=u,n.length===0)break;let p=l.at(-1);if(p?.type==="code")break;if(p?.type==="blockquote"){let m=p,f=m.raw+`
`+n.join(`
`),x=this.blockquote(f);l[l.length-1]=x,s=s.substring(0,s.length-m.raw.length)+x.raw,r=r.substring(0,r.length-m.text.length)+x.text;break}else if(p?.type==="list"){let m=p,f=m.raw+`
`+n.join(`
`),x=this.list(f);l[l.length-1]=x,s=s.substring(0,s.length-p.raw.length)+x.raw,r=r.substring(0,r.length-m.raw.length)+x.raw,n=f.substring(l.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:l,text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let l=this.rules.other.listItemRegex(n),i=!1;for(;t;){let a=!1,c="",h="";if(!(e=l.exec(t))||this.rules.block.hr.test(t))break;c=e[0],t=t.substring(c.length);let u=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,F=>" ".repeat(3*F.length)),p=t.split(`
`,1)[0],m=!u.trim(),f=0;if(this.options.pedantic?(f=2,h=u.trimStart()):m?f=e[1].length+1:(f=e[2].search(this.rules.other.nonSpaceChar),f=f>4?1:f,h=u.slice(f),f+=e[1].length),m&&this.rules.other.blankLine.test(p)&&(c+=p+`
`,t=t.substring(p.length+1),a=!0),!a){let F=this.rules.other.nextBulletRegex(f),te=this.rules.other.hrRegex(f),ne=this.rules.other.fencesBeginRegex(f),re=this.rules.other.headingBeginRegex(f),ve=this.rules.other.htmlBeginRegex(f);for(;t;){let Z=t.split(`
`,1)[0],A;if(p=Z,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),A=p):A=p.replace(this.rules.other.tabCharGlobal,"    "),ne.test(p)||re.test(p)||ve.test(p)||F.test(p)||te.test(p))break;if(A.search(this.rules.other.nonSpaceChar)>=f||!p.trim())h+=`
`+A.slice(f);else{if(m||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ne.test(u)||re.test(u)||te.test(u))break;h+=`
`+p}!m&&!p.trim()&&(m=!0),c+=Z+`
`,t=t.substring(Z.length+1),u=A.slice(f)}}r.loose||(i?r.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(i=!0));let x=null,q;this.options.gfm&&(x=this.rules.other.listIsTask.exec(h),x&&(q=x[0]!=="[ ] ",h=h.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:c,task:!!x,checked:q,loose:!1,text:h,tokens:[]}),r.raw+=c}let o=r.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let a=0;a<r.items.length;a++)if(this.lexer.state.top=!1,r.items[a].tokens=this.lexer.blockTokens(r.items[a].text,[]),!r.loose){let c=r.items[a].tokens.filter(u=>u.type==="space"),h=c.length>0&&c.some(u=>this.rules.other.anyLine.test(u.raw));r.loose=h}if(r.loose)for(let a=0;a<r.items.length;a++)r.items[a].loose=!0;return r}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:s,title:r}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=ce(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],l={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let i of s)this.rules.other.tableAlignRight.test(i)?l.align.push("right"):this.rules.other.tableAlignCenter.test(i)?l.align.push("center"):this.rules.other.tableAlignLeft.test(i)?l.align.push("left"):l.align.push(null);for(let i=0;i<n.length;i++)l.header.push({text:n[i],tokens:this.lexer.inline(n[i]),header:!0,align:l.align[i]});for(let i of r)l.rows.push(ce(i,l.header.length).map((o,a)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:l.align[a]})));return l}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let l=T(n.slice(0,-1),"\\");if((n.length-l.length)%2===0)return}else{let l=kt(e[2],"()");if(l===-2)return;if(l>-1){let i=(e[0].indexOf("!")===0?5:4)+e[1].length+l;e[2]=e[2].substring(0,l),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){let l=this.rules.other.pedanticHrefTitle.exec(s);l&&(s=l[1],r=l[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),he(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[s.toLowerCase()];if(!r){let l=n[0].charAt(0);return{type:"text",raw:l,text:l}}return he(n,r,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let r=[...s[0]].length-1,l,i,o=r,a=0,c=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*t.length+r);(s=c.exec(e))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(i=[...l].length,s[3]||s[4]){o+=i;continue}else if((s[5]||s[6])&&r%3&&!((r+i)%3)){a+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o+a);let h=[...s[0]][0].length,u=t.slice(0,r+s.index+h+i);if(Math.min(r,i)%2){let m=u.slice(1,-1);return{type:"em",raw:u,text:m,tokens:this.lexer.inlineTokens(m)}}let p=u.slice(2,-2);return{type:"strong",raw:u,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,s;return e[2]==="@"?(n=e[1],s="mailto:"+n):(n=e[1],s=n),{type:"link",raw:e[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,s;if(e[2]==="@")n=e[0],s="mailto:"+n;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);n=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},v=class U{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||_,this.options.tokenizer=this.options.tokenizer||new O,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:b,block:M.normal,inline:z.normal};this.options.pedantic?(n.block=M.pedantic,n.inline=z.pedantic):this.options.gfm&&(n.block=M.gfm,this.options.breaks?n.inline=z.breaks:n.inline=z.gfm),this.tokenizer.rules=n}static get rules(){return{block:M,inline:z}}static lex(e,n){return new U(n).lex(e)}static lexInline(e,n){return new U(n).inlineTokens(e)}lex(e){e=e.replace(b.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],s=!1){for(this.options.pedantic&&(e=e.replace(b.tabCharGlobal,"    ").replace(b.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(i=>(r=i.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let i=n.at(-1);r.raw.length===1&&i!==void 0?i.raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.at(-1).src=i.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},n.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}let l=e;if(this.options.extensions?.startBlock){let i=1/0,o=e.slice(1),a;this.options.extensions.startBlock.forEach(c=>{a=c.call({lexer:this},o),typeof a=="number"&&a>=0&&(i=Math.min(i,a))}),i<1/0&&i>=0&&(l=e.substring(0,i+1))}if(this.state.top&&(r=this.tokenizer.paragraph(l))){let i=n.at(-1);s&&i?.type==="paragraph"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(r),s=l.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let i=n.at(-1);i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(r);continue}if(e){let i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let s=e,r=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)a.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let l;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)l=r[2]?r[2].length:0,s=s.slice(0,r.index+l)+"["+"a".repeat(r[0].length-l-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let i=!1,o="";for(;e;){i||(o=""),i=!1;let a;if(this.options.extensions?.inline?.some(h=>(a=h.call({lexer:this},e,n))?(e=e.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let h=n.at(-1);a.type==="text"&&h?.type==="text"?(h.raw+=a.raw,h.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(e,s,o)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),n.push(a);continue}let c=e;if(this.options.extensions?.startInline){let h=1/0,u=e.slice(1),p;this.options.extensions.startInline.forEach(m=>{p=m.call({lexer:this},u),typeof p=="number"&&p>=0&&(h=Math.min(h,p))}),h<1/0&&h>=0&&(c=e.substring(0,h+1))}if(a=this.tokenizer.inlineText(c)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(o=a.raw.slice(-1)),i=!0;let h=n.at(-1);h?.type==="text"?(h.raw+=a.raw,h.text+=a.text):n.push(a);continue}if(e){let h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}},L=class{options;parser;constructor(t){this.options=t||_}space(t){return""}code({text:t,lang:e,escaped:n}){let s=(e||"").match(b.notSpaceStart)?.[0],r=t.replace(b.endingNewline,"")+`
`;return s?'<pre><code class="language-'+S(s)+'">'+(n?r:S(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:S(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,s="";for(let i=0;i<t.items.length;i++){let o=t.items[i];s+=this.listitem(o)}let r=e?"ol":"ul",l=e&&n!==1?' start="'+n+'"':"";return"<"+r+l+`>
`+s+"</"+r+`>
`}listitem(t){let e="";if(t.task){let n=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=n+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=n+" "+S(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):e+=n+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let r=0;r<t.header.length;r++)n+=this.tablecell(t.header[r]);e+=this.tablerow({text:n});let s="";for(let r=0;r<t.rows.length;r++){let l=t.rows[r];n="";for(let i=0;i<l.length;i++)n+=this.tablecell(l[i]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${S(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){let s=this.parser.parseInline(n),r=oe(t);if(r===null)return s;t=r;let l='<a href="'+t+'"';return e&&(l+=' title="'+S(e)+'"'),l+=">"+s+"</a>",l}image({href:t,title:e,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let r=oe(t);if(r===null)return S(n);t=r;let l=`<img src="${t}" alt="${n}"`;return e&&(l+=` title="${S(e)}"`),l+=">",l}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:S(t.text)}},ee=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},$=class j{options;renderer;textRenderer;constructor(e){this.options=e||_,this.options.renderer=this.options.renderer||new L,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ee}static parse(e,n){return new j(n).parse(e)}static parseInline(e,n){return new j(n).parseInline(e)}parse(e,n=!0){let s="";for(let r=0;r<e.length;r++){let l=e[r];if(this.options.extensions?.renderers?.[l.type]){let o=l,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){s+=a||"";continue}}let i=l;switch(i.type){case"space":{s+=this.renderer.space(i);continue}case"hr":{s+=this.renderer.hr(i);continue}case"heading":{s+=this.renderer.heading(i);continue}case"code":{s+=this.renderer.code(i);continue}case"table":{s+=this.renderer.table(i);continue}case"blockquote":{s+=this.renderer.blockquote(i);continue}case"list":{s+=this.renderer.list(i);continue}case"html":{s+=this.renderer.html(i);continue}case"def":{s+=this.renderer.def(i);continue}case"paragraph":{s+=this.renderer.paragraph(i);continue}case"text":{let o=i,a=this.renderer.text(o);for(;r+1<e.length&&e[r+1].type==="text";)o=e[++r],a+=`
`+this.renderer.text(o);n?s+=this.renderer.paragraph({type:"paragraph",raw:a,text:a,tokens:[{type:"text",raw:a,text:a,escaped:!0}]}):s+=a;continue}default:{let o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return s}parseInline(e,n=this.renderer){let s="";for(let r=0;r<e.length;r++){let l=e[r];if(this.options.extensions?.renderers?.[l.type]){let o=this.options.extensions.renderers[l.type].call({parser:this},l);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){s+=o||"";continue}}let i=l;switch(i.type){case"escape":{s+=n.text(i);break}case"html":{s+=n.html(i);break}case"link":{s+=n.link(i);break}case"image":{s+=n.image(i);break}case"strong":{s+=n.strong(i);break}case"em":{s+=n.em(i);break}case"codespan":{s+=n.codespan(i);break}case"br":{s+=n.br(i);break}case"del":{s+=n.del(i);break}case"text":{s+=n.text(i);break}default:{let o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return s}},E=class{options;block;constructor(t){this.options=t||_}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?v.lex:v.lexInline}provideParser(){return this.block?$.parse:$.parseInline}},bt=class{defaults=V();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=$;Renderer=L;TextRenderer=ee;Lexer=v;Tokenizer=O;Hooks=E;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let s of t)switch(n=n.concat(e.call(this,s)),s.type){case"table":{let r=s;for(let l of r.header)n=n.concat(this.walkTokens(l.tokens,e));for(let l of r.rows)for(let i of l)n=n.concat(this.walkTokens(i.tokens,e));break}case"list":{let r=s;n=n.concat(this.walkTokens(r.items,e));break}default:{let r=s;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(l=>{let i=r[l].flat(1/0);n=n.concat(this.walkTokens(i,e))}):r.tokens&&(n=n.concat(this.walkTokens(r.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let l=e.renderers[r.name];l?e.renderers[r.name]=function(...i){let o=r.renderer.apply(this,i);return o===!1&&(o=l.apply(this,i)),o}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let l=e[r.level];l?l.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),s.extensions=e),n.renderer){let r=this.defaults.renderer||new L(this.defaults);for(let l in n.renderer){if(!(l in r))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;let i=l,o=n.renderer[i],a=r[i];r[i]=(...c)=>{let h=o.apply(r,c);return h===!1&&(h=a.apply(r,c)),h||""}}s.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new O(this.defaults);for(let l in n.tokenizer){if(!(l in r))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;let i=l,o=n.tokenizer[i],a=r[i];r[i]=(...c)=>{let h=o.apply(r,c);return h===!1&&(h=a.apply(r,c)),h}}s.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new E;for(let l in n.hooks){if(!(l in r))throw new Error(`hook '${l}' does not exist`);if(["options","block"].includes(l))continue;let i=l,o=n.hooks[i],a=r[i];E.passThroughHooks.has(l)?r[i]=c=>{if(this.defaults.async&&E.passThroughHooksRespectAsync.has(l))return(async()=>{let u=await o.call(r,c);return a.call(r,u)})();let h=o.call(r,c);return a.call(r,h)}:r[i]=(...c)=>{if(this.defaults.async)return(async()=>{let u=await o.apply(r,c);return u===!1&&(u=await a.apply(r,c)),u})();let h=o.apply(r,c);return h===!1&&(h=a.apply(r,c)),h}}s.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,l=n.walkTokens;s.walkTokens=function(i){let o=[];return o.push(l.call(this,i)),r&&(o=o.concat(r.call(this,i))),o}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return v.lex(t,e??this.defaults)}parser(t,e){return $.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let s={...n},r={...this.defaults,...s},l=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=t),r.async)return(async()=>{let i=r.hooks?await r.hooks.preprocess(e):e,o=await(r.hooks?await r.hooks.provideLexer():t?v.lex:v.lexInline)(i,r),a=r.hooks?await r.hooks.processAllTokens(o):o;r.walkTokens&&await Promise.all(this.walkTokens(a,r.walkTokens));let c=await(r.hooks?await r.hooks.provideParser():t?$.parse:$.parseInline)(a,r);return r.hooks?await r.hooks.postprocess(c):c})().catch(l);try{r.hooks&&(e=r.hooks.preprocess(e));let i=(r.hooks?r.hooks.provideLexer():t?v.lex:v.lexInline)(e,r);r.hooks&&(i=r.hooks.processAllTokens(i)),r.walkTokens&&this.walkTokens(i,r.walkTokens);let o=(r.hooks?r.hooks.provideParser():t?$.parse:$.parseInline)(i,r);return r.hooks&&(o=r.hooks.postprocess(o)),o}catch(i){return l(i)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let s="<p>An error occurred:</p><pre>"+S(n.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(n);throw n}}},R=new bt;function g(t,e){return R.parse(t,e)}g.options=g.setOptions=function(t){return R.setOptions(t),g.defaults=R.defaults,pe(g.defaults),g};g.getDefaults=V;g.defaults=_;g.use=function(...t){return R.use(...t),g.defaults=R.defaults,pe(g.defaults),g};g.walkTokens=function(t,e){return R.walkTokens(t,e)};g.parseInline=R.parseInline;g.Parser=$;g.parser=$.parse;g.Renderer=L;g.TextRenderer=ee;g.Lexer=v;g.lexer=v.lex;g.Tokenizer=O;g.Hooks=E;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;$.parse;v.lex;var wt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,y=(t,e,n,s)=>{for(var r=s>1?void 0:s?xt(e,n):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(r=(s?i(e,n,r):i(r))||r);return s&&r&&wt(e,n,r),r};let w=class extends $e{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.pyConnected=!1,this.pyConnecting=!1,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.highlightedCellIndex=-1,this.focusedCellIndex=-1,this.cancelRunAll=!1,this.monacoEditors=new Map,this.cellRefs=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.monacoEditors.forEach(t=>t.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.focusedCellIndex=-1,this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=void 0),this.pyenv&&(this.pyenv.close(),this.pyenv=void 0),this.pyConnected=!1,this.pyVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.saveEditorContents(),this.notebook.cells.forEach((n,s)=>{if(n.cell_type==="code"){const r=this.cellOutputs.get(s);n.outputs=r?this.convertOutputToJupyter(r,n.execution_count):[]}});const t=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(t),this.markDirty(!1)}catch(t){throw console.error("Failed to save notebook:",t),t}}doBeforeUI(){this.loadNotebook()}renderToolbar(){const t=this.pyConnecting?"Connecting to Python...":this.pyConnected?"Python Connected":"Python Disconnected - Click to connect",e=this.pyConnecting?"Connecting...":this.pyConnected&&this.pyVersion?`Python ${this.pyVersion}`:"Not connected",n=this.pyConnected?"var(--wa-color-green-40)":this.pyConnecting?"var(--wa-color-warning-500)":"var(--wa-color-red-40)",s=this.isRunningAll?k`
            <wa-button size="small" appearance="plain" @click=${()=>this.cancelAllCells()} title="Cancel running all cells">
                <wa-icon name="stop" label="Stop"></wa-icon>
                Cancel All
            </wa-button>
        `:k`
            <wa-button size="small" appearance="plain" @click=${()=>this.runAllCells()} title="Run all code cells sequentially">
                <wa-icon name="play" label="Run"></wa-icon>
                Run All
            </wa-button>
        `;return k`
            <wa-button 
                appearance="plain" 
                size="small"
                style="display: flex; align-items: center; gap: 0.5rem;"
                ?disabled=${this.pyConnecting}
                @click=${()=>this.connectPython()}
                title=${t}>
                <wa-icon 
                    name="circle"
                    label="Python status"
                    style=${Ce({color:n})}
                ></wa-icon>
                ${e}
            </wa-button>
            ${s}
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.clearAllOutputs()}
                title="Clear all outputs and reset execution counter">
                <wa-icon name="eraser" label="Clear"></wa-icon>
                Clear Outputs
            </wa-button>
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.restartKernel()}
                title="Restart Python kernel (clears all variables and state)"
                ?disabled=${!this.pyConnected||this.pyConnecting}>
                <wa-icon name="arrows-rotate" label="Restart"></wa-icon>
                Restart Kernel
            </wa-button>
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.openPackageManager()}
                title="Manage required packages for this notebook">
                <wa-icon name="box" label="Packages"></wa-icon>
                Packages
            </wa-button>
        `}doInitUI(){this.setupThemeObserver()}async loadNotebook(){const e=await this.input.data.getContents();try{this.notebook=JSON.parse(e)}catch(n){console.error("Failed to parse notebook:",n),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if(this.notebook?.cells){const n=this.notebook.cells.filter(s=>s.cell_type==="code").map(s=>s.execution_count??0).reduce((s,r)=>Math.max(s,r),0);this.executionCounter=n,this.notebook.cells.forEach((s,r)=>{if(s.cell_type==="code"&&s.outputs&&s.outputs.length>0){const l=this.convertOutputFromJupyter(s.outputs[0]);l&&this.cellOutputs.set(r,l)}})}}setupThemeObserver(){const t=document.documentElement;let e=this.getMonacoTheme();this.themeObserver=new MutationObserver(()=>{const n=this.getMonacoTheme();n!==e&&(e=n,se.setTheme(n))}),this.themeObserver.observe(t,{attributes:!0,attributeFilter:["class"]})}getCellSource(t){return Array.isArray(t.source)?t.source.join(""):t.source}convertOutputToJupyter(t,e){if(t.type==="execute_result"){const n={};return t.imageData&&(n["image/png"]=t.imageData),t.data&&(n["text/plain"]=t.data),[{output_type:"execute_result",data:n,execution_count:e,metadata:{}}]}else if(t.type==="error")return[{output_type:"error",ename:"Error",evalue:t.data,traceback:[t.data]}];return[]}convertOutputFromJupyter(t){return t.output_type==="execute_result"&&t.data?{type:"execute_result",data:t.data["text/plain"]||"",imageData:t.data["image/png"]||void 0}:t.output_type==="error"?{type:"error",data:t.evalue||t.traceback?.join(`
`)||"Unknown error"}:null}renderHeaderActions(t,e){return k`
            <div class="cell-header-actions">
                ${e||""}
                ${e?k`<span class="divider"></span>`:""}
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(t,"code")} title="Add code cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="code" label="Code"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(t,"markdown")} title="Add markdown cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="font" label="Markdown"></wa-icon>
                </wa-button>
                <span class="divider"></span>
                <wa-button size="small" appearance="plain" @click=${()=>this.deleteCell(t)} title="Delete cell" ?disabled=${this.notebook.cells.length<=1}>
                    <wa-icon name="trash" label="Delete cell"></wa-icon>
                </wa-button>
            </div>
        `}renderFooterActions(t){return k`
            <div class="cell-footer">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(t+1,"code")} title="Add code cell after">
                    <wa-icon name="code" label="Code"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(t+1,"markdown")} title="Add markdown cell after">
                    <wa-icon name="font" label="Markdown"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
            </div>
        `}stringToSourceArray(t){if(!t)return[""];const e=t.split(`
`).map(n=>n+`
`);return e.length>0&&(e[e.length-1]=e[e.length-1].replace(/\n$/,"")),e}createCell(t){const e={cell_type:t,source:[""],metadata:{}};return t==="code"&&(e.execution_count=null,e.outputs=[]),e}async initPyodide(){if(!this.pyenv){this.pyenv=new qe;const t=await Se.getWorkspace();if(t){await this.pyenv.init(t),this.pyConnected=!0;try{const n=await this.pyenv.execCode("import sys; sys.version.split()[0]");this.pyVersion=n?.result||"Unknown"}catch(n){console.error("Failed to get Python version:",n),this.pyVersion="Unknown"}const e=this.notebook?.metadata?.required_packages||[];if(e.length>0)try{await this.pyenv.loadPackages(e)}catch(n){console.error("Failed to load required packages:",n)}try{await this.pyenv.execCode(`
try:
    import matplotlib
    matplotlib.use('agg')
    
    import matplotlib.pyplot as plt
    import io
    import base64
    
    _original_show = plt.show
    _display_data = None
    
    def _patched_show(*args, **kwargs):
        """Patched plt.show() that captures the current figure for notebook display."""
        global _display_data
        if plt.get_fignums():
            fig = plt.gcf()
            buffer = io.BytesIO()
            fig.savefig(buffer, format='png', bbox_inches='tight', dpi=100)
            buffer.seek(0)
            _display_data = base64.b64encode(buffer.read()).decode('utf-8')
            plt.close(fig)
        # Don't call original show() as it would try to display in a window
    
    plt.show = _patched_show
except ImportError:
    # matplotlib not installed - skip configuration
    pass
`)}catch(n){console.error("Failed to configure matplotlib:",n)}}}}async executeCell(t){const e=this.notebook.cells[t];if(e.cell_type==="code"){this.executingCells.add(t),this.requestUpdate();try{await this.initPyodide();const n=this.monacoEditors.get(t);let s=n?n.getValue():this.getCellSource(e);const r=await this.pyenv.execCode(s),l=[];if(r&&typeof r=="object"&&"console"in r){const o=r.console;if(Array.isArray(o)&&o.length>0){const a=o.filter(c=>c&&c.trim());a.length>0&&l.push(...a)}}let i;try{const o=await this.pyenv.execCode('_display_data if "_display_data" in dir() else None'),a=o&&typeof o=="object"?o.result:o;a&&String(a)!=="None"&&String(a)!=="undefined"&&(i=String(a),await this.pyenv.execCode("_display_data = None"))}catch(o){console.debug("No display data to retrieve:",o)}if(!i){const o=r&&typeof r=="object"?r.result:r;if(o!=null&&String(o)!=="undefined"){const a=String(o);a&&a!=="undefined"&&l.push(a)}}this.cellOutputs.set(t,{type:"execute_result",data:l.length>0?l.join(`
`):void 0,imageData:i}),this.executionCounter++,e.execution_count=this.executionCounter,this.markDirty(!0)}catch(n){this.executingCells.has(t)&&this.cellOutputs.set(t,{type:"error",data:String(n)})}finally{this.executingCells.delete(t),this.requestUpdate()}}}async cancelExecution(t){if(this.pyenv)if(this.pyenv.canInterrupt())this.pyenv.interrupt();else{this.cellOutputs.set(t,{type:"error",data:"Execution cancelled by user (worker terminated - SharedArrayBuffer not available for graceful interrupt)"}),this.executingCells.delete(t),this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0;try{await this.initPyodide()}catch(e){console.error("Failed to reinitialize Python after cancellation:",e)}this.requestUpdate()}}clearAllOutputs(){this.cellOutputs.clear(),this.executionCounter=0,this.notebook?.cells&&this.notebook.cells.forEach(t=>{t.cell_type==="code"&&(t.execution_count=null,t.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async restartKernel(){if(!(!this.pyenv||this.pyConnecting))try{this.pyConnecting=!0,this.pyenv.close(),this.pyenv=void 0,this.pyConnected=!1,this.pyVersion=void 0,this.requestUpdate(),await this.initPyodide(),this.requestUpdate()}catch(t){console.error("Failed to restart kernel:",t)}finally{this.pyConnecting=!1}}async runAllCells(){if(this.notebook?.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let t=0;t<this.notebook.cells.length&&!this.cancelRunAll;t++)this.notebook.cells[t].cell_type==="code"&&await this.executeCell(t)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0}toggleMarkdownEdit(t){this.editingMarkdownCells.has(t)?this.editingMarkdownCells.delete(t):this.editingMarkdownCells.add(t),this.requestUpdate()}saveMarkdownEdit(t,e){const s=e.target.value;if(this.notebook&&this.notebook.cells[t]){const r=this.notebook.cells[t],l=this.getCellSource(r);r.source=this.stringToSourceArray(s),l!==s&&this.markDirty(!0)}this.editingMarkdownCells.delete(t),this.requestUpdate()}renderMarkdownCell(t,e){const n=this.getCellSource(t),s=!n||n.trim()==="";if(this.editingMarkdownCells.has(e)){const o=k`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${a=>{const c=a.target.closest(".markdown-cell")?.querySelector("textarea");c&&this.saveMarkdownEdit(e,{target:c})}}
                    title="Save changes">
                    <wa-icon name="check" label="Save"></wa-icon>
                </wa-button>
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${()=>this.toggleMarkdownEdit(e)}
                    title="Cancel editing">
                    <wa-icon name="xmark" label="Cancel"></wa-icon>
                </wa-button>
            `;return k`
                <div class="cell-wrapper">
                    <wa-animation 
                        name="bounce" 
                        duration="1000" 
                        iterations="1"
                        ?play=${this.highlightedCellIndex===e}
                        @wa-finish=${()=>this.highlightedCellIndex=-1}>
                        <div class="cell markdown-cell editing">
                            <div class="cell-header">
                                ${this.renderHeaderActions(e,o)}
                                <span class="cell-label">Markdown</span>
                            </div>
                            <textarea 
                                class="markdown-editor"
                                .value=${n}
                                @blur=${a=>this.saveMarkdownEdit(e,a)}
                                placeholder="Enter markdown content here... (# for headings, ** for bold, etc.)"></textarea>
                            ${this.renderFooterActions(e)}
                        </div>
                    </wa-animation>
                </div>
            `}const l=g.parse(n),i=k`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.toggleMarkdownEdit(e)}
                title="Edit markdown">
                <wa-icon name="pencil" label="Edit"></wa-icon>
            </wa-button>
        `;return k`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===e}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell markdown-cell ${s?"empty":""}" @dblclick=${()=>this.toggleMarkdownEdit(e)}>
                        <div class="cell-header">
                            ${this.renderHeaderActions(e,i)}
                            <span class="cell-label"></span>
                        </div>
                        <div class="cell-content">
                            ${s?k`
                                <div class="markdown-placeholder">
                                    <wa-icon name="font" label="Markdown"></wa-icon>
                                    <span>Double-click or click the pencil icon to edit markdown</span>
                                </div>
                            `:Re(l)}
                        </div>
                        ${this.renderFooterActions(e)}
                    </div>
                </wa-animation>
            </div>
        `}renderCodeCell(t,e){const n=this.cellOutputs.get(e),s=this.executingCells.has(e);this.cellRefs.has(e)||this.cellRefs.set(e,_e());const r=this.cellRefs.get(e),l=s?k`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.cancelExecution(e)}
                title="Stop execution">
                <wa-icon name="stop" label="Stop" style="color: var(--wa-color-danger-500);"></wa-icon>
            </wa-button>
        `:k`
            <k-command 
                cmd="python"
                icon="play"
                title="Run cell"
                size="small"
                appearance="plain"
                .params=${{cellIndex:e}}>
            </k-command>
        `;return k`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===e}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell code-cell ${s?"executing":""}">
                        <div class="cell-header">
                            <span class="cell-label">
                                ${s?k`
                                    In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${s}>
                                        <span class="executing-indicator">*</span>
                                    </wa-animation>]
                                `:k`
                                    In [${t.execution_count??" "}]
                                `}
                            </span>
                            ${this.renderHeaderActions(e,l)}
                        </div>
                        <div class="cell-input monaco-container" ${Ae(r)} data-cell-index="${e}"></div>
                        ${n?k`
                            <div class="cell-output ${n.type==="error"?"output-error":""}">
                                <div class="output-label">Out [${e+1}]:</div>
                                ${n.imageData?k`
                                    <img src="data:image/png;base64,${n.imageData}" alt="Output image" class="output-image" />
                                `:""}
                                ${n.data?k`<pre><code>${n.data}</code></pre>`:""}
                            </div>
                        `:""}
                        ${this.renderFooterActions(e)}
                    </div>
                </wa-animation>
            </div>
        `}renderCell(t,e){if(t.cell_type==="markdown")return this.renderMarkdownCell(t,e);if(t.cell_type==="code")return this.renderCodeCell(t,e);{const n=this.getCellSource(t);return k`
                <div class="cell raw-cell">
                    <pre><code>${n}</code></pre>
                </div>
            `}}async connectPython(){if(!(this.pyConnecting||this.pyConnected))try{this.pyConnecting=!0,await this.initPyodide()}catch(t){console.error("Failed to initialize Pyodide:",t)}finally{this.pyConnecting=!1}}addCell(t,e="code"){this.notebook&&(this.saveEditorContents(),this.shiftIndices(t,"up"),this.notebook.cells.splice(t,0,this.createCell(e)),e==="markdown"&&this.editingMarkdownCells.add(t),this.resetCellState(),this.highlightedCellIndex=t,this.updateComplete.then(()=>{this.scrollToCell(t)}))}scrollToCell(t){const e=this.shadowRoot?.querySelectorAll(".cell-wrapper")[t];if(!e)return;const n=this.closest("wa-scroller");if(!n){e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});return}const s=n.getBoundingClientRect(),r=e.getBoundingClientRect(),i=n.scrollTop+(r.top-s.top)-s.height/2+r.height/2;n.scrollTo({top:i,behavior:"smooth"})}saveEditorContents(){this.monacoEditors.forEach((t,e)=>{const n=this.notebook.cells[e];n&&n.cell_type==="code"&&(n.source=this.stringToSourceArray(t.getValue()))})}resetCellState(){this.monacoEditors.forEach(t=>t.dispose()),this.monacoEditors.clear(),this.cellRefs.clear(),this.markDirty(!0)}deleteCell(t){!this.notebook||this.notebook.cells.length<=1||(this.saveEditorContents(),this.cellOutputs.delete(t),this.executingCells.delete(t),this.editingMarkdownCells.delete(t),this.notebook.cells.splice(t,1),this.shiftIndices(t,"down"),this.resetCellState())}shiftIndices(t,e){const n=e==="up"?1:-1,s=e==="up"?o=>o>=t:o=>o>t,r=e==="up"?(o,a)=>a-o:(o,a)=>o-a,l=o=>{Array.from(o.keys()).filter(s).sort(r).forEach(c=>{const h=o.get(c);o.delete(c),o.set(c+n,h)})},i=o=>{Array.from(o).filter(s).sort(r).forEach(c=>{o.delete(c),o.add(c+n)})};l(this.cellOutputs),i(this.executingCells),i(this.editingMarkdownCells)}initializeMonacoEditor(t,e,n){const s=this.getCellSource(e),r=s.split(`
`).length,l=19,i=10,o=100,a=Math.max(o,r*l+i);t.style.height=`${a}px`;const c=se.create(t,{value:s,language:"python",theme:this.getMonacoTheme(),minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all",automaticLayout:!0,fontSize:14,tabSize:4,wordWrap:"on"});let h=!1;c.onDidFocusEditorText(()=>{h=!0,this.focusedCellIndex=n}),c.onDidBlurEditorText(()=>{h=!1,this.focusedCellIndex===n&&(this.focusedCellIndex=-1)}),t.addEventListener("wheel",u=>{if(!h){const p=c.getScrollTop(),m=c.getScrollHeight(),f=c.getContentHeight(),x=m>f,q=u.deltaY<0&&p<=0||u.deltaY>0&&p+f>=m;(!x||q)&&u.stopImmediatePropagation()}},{passive:!0,capture:!0}),c.onDidContentSizeChange(()=>{const u=c.getContentHeight();t.style.height=`${Math.max(o,u+i)}px`,c.layout()}),c.onDidChangeModelContent(()=>{const u=c.getValue(),p=this.getCellSource(e);u!==p&&this.markDirty(!0)}),this.monacoEditors.set(n,c)}getMonacoTheme(){const t=document.documentElement;return t.classList.contains("wa-dark")?"vs-dark":t.classList.contains("wa-light")?"vs":"vs-dark"}openPackageManager(){const t=this.notebook?.metadata?.required_packages||[];Me.showPackageManager({packages:t,pyenv:this.pyenv,onPackageAdded:e=>{this.notebook&&(this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.required_packages||(this.notebook.metadata.required_packages=[]),this.notebook.metadata.required_packages.includes(e)||(this.notebook.metadata.required_packages.push(e),this.markDirty(!0)))},onPackageRemoved:e=>{if(!this.notebook?.metadata?.required_packages)return;const n=this.notebook.metadata.required_packages.indexOf(e);n>-1&&(this.notebook.metadata.required_packages.splice(n,1),this.markDirty(!0))}})}updated(t){super.updated(t),(t.has("pyConnected")||t.has("pyConnecting")||t.has("pyVersion")||t.has("isRunningAll"))&&this.updateToolbar(),this.notebook?.cells&&this.notebook.cells.forEach((e,n)=>{if(e.cell_type==="code"){const s=this.cellRefs.get(n);s?.value&&!this.monacoEditors.has(n)&&this.initializeMonacoEditor(s.value,e,n)}})}render(){return this.notebook?k`
            <style>
                ${ze}
            </style>
            <div class="notebook-cells">
                ${Te(this.notebook.cells,(t,e)=>e,(t,e)=>this.renderCell(t,e))}
            </div>
        `:k`<div class="loading">Loading notebook...</div>`}};w.styles=Ee`
        :host {
            display: block;
            width: 100%;
        }

        .python-status {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .python-version {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        .notebook-cells {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
            width: 100%;
            box-sizing: border-box;
        }

        .cell-wrapper {
            position: relative;
        }

        .cell {
            border-radius: 4px;
            overflow: hidden;
            opacity: 0.9;
            position: relative;
        }

        .cell-header-actions {
            display: flex;
            gap: 0.25rem;
            align-items: center;
            opacity: 0.5;
            transition: opacity 0.2s;
        }

        .cell-header-actions .divider {
            width: 1px;
            height: 1rem;
            background: var(--wa-color-outline);
            margin: 0 0.25rem;
            opacity: 0.5;
        }

        .cell-header:hover .cell-header-actions {
            opacity: 1;
        }

        .cell-footer {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: flex-start;
            padding: 0.5rem;
            border-top: 1px solid var(--wa-color-outline);
            opacity: 0.5;
            transition: opacity 0.2s;
        }

        .cell-footer:hover {
            opacity: 1;
        }

        .markdown-cell {
            cursor: pointer;
            transition: opacity 0.2s;
        }

        .markdown-cell:hover:not(.editing) {
            opacity: 0.9;
        }
        
        .markdown-cell .cell-content {
            padding: 1rem;
        }

        .markdown-cell.editing {
            cursor: default;
            padding: 0;
        }
        
        .markdown-cell.editing .cell-actions {
            display: none;
        }

        .markdown-editor {
            width: 100%;
            min-height: 200px;
            padding: 1rem;
            font-family: monospace;
            font-size: 0.95rem;
            line-height: 1.6;
            border: none;
            outline: none;
            resize: vertical;
            background: transparent;
            color: inherit;
        }

        .code-cell {
            border-left: 3px solid var(--wa-color-primary-500);
            transition: all 0.3s ease;
        }
        
        .code-cell.executing {
            border-left: 4px solid var(--wa-color-primary-500);
            box-shadow: 0 0 0 2px var(--wa-color-primary-500, rgba(59, 130, 246, 0.3));
            animation: pulse-cell 2s ease-in-out infinite;
        }
        
        @keyframes pulse-cell {
            0%, 100% {
                box-shadow: 0 0 0 2px var(--wa-color-primary-500, rgba(59, 130, 246, 0.3));
                opacity: 1;
            }
            50% {
                box-shadow: 0 0 0 4px var(--wa-color-primary-500, rgba(59, 130, 246, 0.5));
                opacity: 0.95;
            }
        }

        .cell-header {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            flex-wrap: nowrap;
        }

        .cell-label {
            font-family: monospace;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .executing-indicator {
            display: inline-block;
            color: var(--wa-color-primary-500);
            font-weight: bold;
            font-size: 1.2em;
        }

        .cell-input {
            margin: 0;
        }

        .monaco-container {
            min-height: 100px;
            height: auto;
            width: 100%;
        }

        .cell-output {
            padding: 1rem;
        }

        .output-label {
            font-family: monospace;
            font-weight: bold;
            margin-bottom: 0.5rem;
            opacity: 0.7;
        }

        .cell-output pre {
            margin: 0;
            overflow-x: auto;
        }

        .cell-output code {
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
        }

        .output-image {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0.5rem 0;
            border-radius: 4px;
        }

        .output-error {
            border-left: 3px solid var(--wa-color-danger-500);
        }

        .raw-cell {
            padding: 1rem;
        }

        .raw-cell pre {
            margin: 0;
        }

        .loading {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-size: 1.2rem;
        }

        .markdown-placeholder {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            padding: 3rem 1rem;
            opacity: 0.5;
            font-style: italic;
            transition: opacity 0.2s;
        }

        .markdown-cell.empty:hover .markdown-placeholder {
            opacity: 0.8;
        }

        .markdown-placeholder wa-icon {
            font-size: 1.5rem;
        }
    `;y([Pe({attribute:!1})],w.prototype,"input",2);y([C()],w.prototype,"notebook",2);y([C()],w.prototype,"cellOutputs",2);y([C()],w.prototype,"executingCells",2);y([C()],w.prototype,"pyenv",2);y([C()],w.prototype,"pyConnected",2);y([C()],w.prototype,"pyConnecting",2);y([C()],w.prototype,"pyVersion",2);y([C()],w.prototype,"editingMarkdownCells",2);y([C()],w.prototype,"executionCounter",2);y([C()],w.prototype,"isRunningAll",2);y([C()],w.prototype,"highlightedCellIndex",2);w=y([Ie("k-notebook-editor")],w);export{w as KNotebookEditor};
