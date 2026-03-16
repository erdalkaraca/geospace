import{z as Re,b as k,h as N,s as Se,o as Te,c as Ae,e as ze,d as _e,i as Ie,n as Ee,r as y,t as qe}from"./repeat-Duk-1tMZ.js";import{L as Pe,C as Me,c as Ke,g as Le}from"./config-BnnWtrGw-CtyKT0bq.js";import{T as ie}from"./notebook-kernel-api--RBL5TaE-2imfStcI.js";function V(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var T=V();function de(t){T=t}var E={exec:()=>null};function p(t,e=""){let r=typeof t=="string"?t:t.source,s={replace:(n,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(x.caret,"$1"),r=r.replace(n,l),s},getRegex:()=>new RegExp(r,e)};return s}var Oe=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),x={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Be=/^(?:[ \t]*(?:\n|$))+/,De=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,He=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,q=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ne=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,j=/(?:[*+-]|\d{1,9}[.)])/,ge=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ke=p(ge).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ue=p(ge).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Q=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ze=/^[^\n]+/,G=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,We=p(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",G).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Fe=p(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,j).getRegex(),O="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",J=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ve=p("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",J).replace("tag",O).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),fe=p(Q).replace("hr",q).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex(),je=p(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fe).getRegex(),X={blockquote:je,code:De,def:We,fences:He,heading:Ne,hr:q,html:Ve,lheading:ke,list:Fe,newline:Be,paragraph:fe,table:E,text:Ze},ae=p("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",q).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex(),Qe={...X,lheading:Ue,table:ae,paragraph:p(Q).replace("hr",q).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ae).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex()},Ge={...X,html:p(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",J).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:E,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:p(Q).replace("hr",q).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ke).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Je=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Xe=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,be=/^( {2,}|\\)\n(?!\s*$)/,Ye=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,B=/[\p{P}\p{S}]/u,Y=/[\s\p{P}\p{S}]/u,we=/[^\s\p{P}\p{S}]/u,et=p(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Y).getRegex(),me=/(?!~)[\p{P}\p{S}]/u,tt=/(?!~)[\s\p{P}\p{S}]/u,nt=/(?:[^\s\p{P}\p{S}]|~)/u,rt=p(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Oe?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),xe=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,st=p(xe,"u").replace(/punct/g,B).getRegex(),lt=p(xe,"u").replace(/punct/g,me).getRegex(),ye="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",it=p(ye,"gu").replace(/notPunctSpace/g,we).replace(/punctSpace/g,Y).replace(/punct/g,B).getRegex(),at=p(ye,"gu").replace(/notPunctSpace/g,nt).replace(/punctSpace/g,tt).replace(/punct/g,me).getRegex(),ot=p("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,we).replace(/punctSpace/g,Y).replace(/punct/g,B).getRegex(),ct=p(/\\(punct)/,"gu").replace(/punct/g,B).getRegex(),ht=p(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),pt=p(J).replace("(?:-->|$)","-->").getRegex(),ut=p("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",pt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),M=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,dt=p(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",M).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),$e=p(/^!?\[(label)\]\[(ref)\]/).replace("label",M).replace("ref",G).getRegex(),Ce=p(/^!?\[(ref)\](?:\[\])?/).replace("ref",G).getRegex(),gt=p("reflink|nolink(?!\\()","g").replace("reflink",$e).replace("nolink",Ce).getRegex(),oe=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ee={_backpedal:E,anyPunctuation:ct,autolink:ht,blockSkip:rt,br:be,code:Xe,del:E,emStrongLDelim:st,emStrongRDelimAst:it,emStrongRDelimUnd:ot,escape:Je,link:dt,nolink:Ce,punctuation:et,reflink:$e,reflinkSearch:gt,tag:ut,text:Ye,url:E},kt={...ee,link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",M).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",M).getRegex()},Z={...ee,emStrongRDelimAst:at,emStrongLDelim:lt,url:p(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",oe).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:p(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",oe).getRegex()},ft={...Z,br:p(be).replace("{2,}","*").getRegex(),text:p(Z.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},P={normal:X,gfm:Qe,pedantic:Ge},z={normal:ee,gfm:Z,breaks:ft,pedantic:kt},bt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ce=t=>bt[t];function R(t,e){if(e){if(x.escapeTest.test(t))return t.replace(x.escapeReplace,ce)}else if(x.escapeTestNoEncode.test(t))return t.replace(x.escapeReplaceNoEncode,ce);return t}function he(t){try{t=encodeURI(t).replace(x.percentDecode,"%")}catch{return null}return t}function pe(t,e){let r=t.replace(x.findPipe,(i,l,o)=>{let a=!1,h=l;for(;--h>=0&&o[h]==="\\";)a=!a;return a?"|":" |"}),s=r.split(x.splitPipe),n=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(x.slashPipe,"|");return s}function _(t,e,r){let s=t.length;if(s===0)return"";let n=0;for(;n<s&&t.charAt(s-n-1)===e;)n++;return t.slice(0,s-n)}function wt(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let s=0;s<t.length;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])r++;else if(t[s]===e[1]&&(r--,r<0))return s;return r>0?-2:-1}function ue(t,e,r,s,n){let i=e.href,l=e.title||null,o=t[1].replace(n.other.outputLinkReplace,"$1");s.state.inLink=!0;let a={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:i,title:l,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,a}function mt(t,e,r){let s=t.match(r.other.indentCodeCompensation);if(s===null)return e;let n=s[1];return e.split(`
`).map(i=>{let l=i.match(r.other.beginningSpace);if(l===null)return i;let[o]=l;return o.length>=n.length?i.slice(n.length):i}).join(`
`)}var K=class{options;rules;lexer;constructor(t){this.options=t||T}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:_(r,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let r=e[0],s=mt(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let s=_(r,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(r=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:_(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let r=_(e[0],`
`).split(`
`),s="",n="",i=[];for(;r.length>0;){let l=!1,o=[],a;for(a=0;a<r.length;a++)if(this.rules.other.blockquoteStart.test(r[a]))o.push(r[a]),l=!0;else if(!l)o.push(r[a]);else break;r=r.slice(a);let h=o.join(`
`),c=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${h}`:h,n=n?`${n}
${c}`:c;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=g,r.length===0)break;let u=i.at(-1);if(u?.type==="code")break;if(u?.type==="blockquote"){let w=u,f=w.raw+`
`+r.join(`
`),$=this.blockquote(f);i[i.length-1]=$,s=s.substring(0,s.length-w.raw.length)+$.raw,n=n.substring(0,n.length-w.text.length)+$.text;break}else if(u?.type==="list"){let w=u,f=w.raw+`
`+r.join(`
`),$=this.list(f);i[i.length-1]=$,s=s.substring(0,s.length-u.raw.length)+$.raw,n=n.substring(0,n.length-w.raw.length)+$.raw,r=f.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r=e[1].trim(),s=r.length>1,n={type:"list",raw:"",ordered:s,start:s?+r.slice(0,-1):"",loose:!1,items:[]};r=s?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=s?r:"[*+-]");let i=this.rules.other.listItemRegex(r),l=!1;for(;t;){let a=!1,h="",c="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;h=e[0],t=t.substring(h.length);let g=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,D=>" ".repeat(3*D.length)),u=t.split(`
`,1)[0],w=!g.trim(),f=0;if(this.options.pedantic?(f=2,c=g.trimStart()):w?f=e[1].length+1:(f=e[2].search(this.rules.other.nonSpaceChar),f=f>4?1:f,c=g.slice(f),f+=e[1].length),w&&this.rules.other.blankLine.test(u)&&(h+=u+`
`,t=t.substring(u.length+1),a=!0),!a){let D=this.rules.other.nextBulletRegex(f),re=this.rules.other.hrRegex(f),se=this.rules.other.fencesBeginRegex(f),le=this.rules.other.headingBeginRegex(f),ve=this.rules.other.htmlBeginRegex(f);for(;t;){let H=t.split(`
`,1)[0],A;if(u=H,this.options.pedantic?(u=u.replace(this.rules.other.listReplaceNesting,"  "),A=u):A=u.replace(this.rules.other.tabCharGlobal,"    "),se.test(u)||le.test(u)||ve.test(u)||D.test(u)||re.test(u))break;if(A.search(this.rules.other.nonSpaceChar)>=f||!u.trim())c+=`
`+A.slice(f);else{if(w||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||se.test(g)||le.test(g)||re.test(g))break;c+=`
`+u}!w&&!u.trim()&&(w=!0),h+=H+`
`,t=t.substring(H.length+1),g=A.slice(f)}}n.loose||(l?n.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(l=!0));let $=null,ne;this.options.gfm&&($=this.rules.other.listIsTask.exec(c),$&&(ne=$[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),n.items.push({type:"list_item",raw:h,task:!!$,checked:ne,loose:!1,text:c,tokens:[]}),n.raw+=h}let o=n.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let a=0;a<n.items.length;a++)if(this.lexer.state.top=!1,n.items[a].tokens=this.lexer.blockTokens(n.items[a].text,[]),!n.loose){let h=n.items[a].tokens.filter(g=>g.type==="space"),c=h.length>0&&h.some(g=>this.rules.other.anyLine.test(g.raw));n.loose=c}if(n.loose)for(let a=0;a<n.items.length;a++)n.items[a].loose=!0;return n}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:s,title:n}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=pe(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===s.length){for(let l of s)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<r.length;l++)i.header.push({text:r[l],tokens:this.lexer.inline(r[l]),header:!0,align:i.align[l]});for(let l of n)i.rows.push(pe(l,i.header.length).map((o,a)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:i.align[a]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let i=_(r.slice(0,-1),"\\");if((r.length-i.length)%2===0)return}else{let i=wt(e[2],"()");if(i===-2)return;if(i>-1){let l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let s=e[2],n="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],n=i[3])}else n=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?s=s.slice(1):s=s.slice(1,-1)),ue(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let s=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=e[s.toLowerCase()];if(!n){let i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return ue(r,n,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||s[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!r||this.rules.inline.punctuation.exec(r))){let n=[...s[0]].length-1,i,l,o=n,a=0,h=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+n);(s=h.exec(e))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(l=[...i].length,s[3]||s[4]){o+=l;continue}else if((s[5]||s[6])&&n%3&&!((n+l)%3)){a+=l;continue}if(o-=l,o>0)continue;l=Math.min(l,l+o+a);let c=[...s[0]][0].length,g=t.slice(0,n+s.index+c+l);if(Math.min(n,l)%2){let w=g.slice(1,-1);return{type:"em",raw:g,text:w,tokens:this.lexer.inlineTokens(w)}}let u=g.slice(2,-2);return{type:"strong",raw:g,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(r),n=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return s&&n&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let r,s;return e[2]==="@"?(r=e[1],s="mailto:"+r):(r=e[1],s=r),{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let n;do n=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(n!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},C=class W{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||T,this.options.tokenizer=this.options.tokenizer||new K,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:x,block:P.normal,inline:z.normal};this.options.pedantic?(r.block=P.pedantic,r.inline=z.pedantic):this.options.gfm&&(r.block=P.gfm,this.options.breaks?r.inline=z.breaks:r.inline=z.gfm),this.tokenizer.rules=r}static get rules(){return{block:P,inline:z}}static lex(e,r){return new W(r).lex(e)}static lexInline(e,r){return new W(r).inlineTokens(e)}lex(e){e=e.replace(x.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let s=this.inlineQueue[r];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],s=!1){for(this.options.pedantic&&(e=e.replace(x.tabCharGlobal,"    ").replace(x.spaceLine,""));e;){let n;if(this.options.extensions?.block?.some(l=>(n=l.call({lexer:this},e,r))?(e=e.substring(n.raw.length),r.push(n),!0):!1))continue;if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length);let l=r.at(-1);n.raw.length===1&&l!==void 0?l.raw+=`
`:r.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length);let l=r.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+n.raw,l.text+=`
`+n.text,this.inlineQueue.at(-1).src=l.text):r.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length);let l=r.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+n.raw,l.text+=`
`+n.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title},r.push(n));continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),r.push(n);continue}let i=e;if(this.options.extensions?.startBlock){let l=1/0,o=e.slice(1),a;this.options.extensions.startBlock.forEach(h=>{a=h.call({lexer:this},o),typeof a=="number"&&a>=0&&(l=Math.min(l,a))}),l<1/0&&l>=0&&(i=e.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){let l=r.at(-1);s&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+n.raw,l.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):r.push(n),s=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length);let l=r.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+n.raw,l.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):r.push(n);continue}if(e){let l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let s=e,n=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)a.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,n.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)i=n[2]?n[2].length:0,s=s.slice(0,n.index+i)+"["+"a".repeat(n[0].length-i-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let l=!1,o="";for(;e;){l||(o=""),l=!1;let a;if(this.options.extensions?.inline?.some(c=>(a=c.call({lexer:this},e,r))?(e=e.substring(a.raw.length),r.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let c=r.at(-1);a.type==="text"&&c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):r.push(a);continue}if(a=this.tokenizer.emStrong(e,s,o)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.del(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),r.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),r.push(a);continue}let h=e;if(this.options.extensions?.startInline){let c=1/0,g=e.slice(1),u;this.options.extensions.startInline.forEach(w=>{u=w.call({lexer:this},g),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(h=e.substring(0,c+1))}if(a=this.tokenizer.inlineText(h)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(o=a.raw.slice(-1)),l=!0;let c=r.at(-1);c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):r.push(a);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return r}},L=class{options;parser;constructor(t){this.options=t||T}space(t){return""}code({text:t,lang:e,escaped:r}){let s=(e||"").match(x.notSpaceStart)?.[0],n=t.replace(x.endingNewline,"")+`
`;return s?'<pre><code class="language-'+R(s)+'">'+(r?n:R(n,!0))+`</code></pre>
`:"<pre><code>"+(r?n:R(n,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,r=t.start,s="";for(let l=0;l<t.items.length;l++){let o=t.items[l];s+=this.listitem(o)}let n=e?"ol":"ul",i=e&&r!==1?' start="'+r+'"':"";return"<"+n+i+`>
`+s+"</"+n+`>
`}listitem(t){let e="";if(t.task){let r=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+R(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let n=0;n<t.header.length;n++)r+=this.tablecell(t.header[n]);e+=this.tablerow({text:r});let s="";for(let n=0;n<t.rows.length;n++){let i=t.rows[n];r="";for(let l=0;l<i.length;l++)r+=this.tablecell(i[l]);s+=this.tablerow({text:r})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${R(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){let s=this.parser.parseInline(r),n=he(t);if(n===null)return s;t=n;let i='<a href="'+t+'"';return e&&(i+=' title="'+R(e)+'"'),i+=">"+s+"</a>",i}image({href:t,title:e,text:r,tokens:s}){s&&(r=this.parser.parseInline(s,this.parser.textRenderer));let n=he(t);if(n===null)return R(r);t=n;let i=`<img src="${t}" alt="${r}"`;return e&&(i+=` title="${R(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:R(t.text)}},te=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},v=class F{options;renderer;textRenderer;constructor(e){this.options=e||T,this.options.renderer=this.options.renderer||new L,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new te}static parse(e,r){return new F(r).parse(e)}static parseInline(e,r){return new F(r).parseInline(e)}parse(e,r=!0){let s="";for(let n=0;n<e.length;n++){let i=e[n];if(this.options.extensions?.renderers?.[i.type]){let o=i,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){s+=a||"";continue}}let l=i;switch(l.type){case"space":{s+=this.renderer.space(l);continue}case"hr":{s+=this.renderer.hr(l);continue}case"heading":{s+=this.renderer.heading(l);continue}case"code":{s+=this.renderer.code(l);continue}case"table":{s+=this.renderer.table(l);continue}case"blockquote":{s+=this.renderer.blockquote(l);continue}case"list":{s+=this.renderer.list(l);continue}case"html":{s+=this.renderer.html(l);continue}case"def":{s+=this.renderer.def(l);continue}case"paragraph":{s+=this.renderer.paragraph(l);continue}case"text":{let o=l,a=this.renderer.text(o);for(;n+1<e.length&&e[n+1].type==="text";)o=e[++n],a+=`
`+this.renderer.text(o);r?s+=this.renderer.paragraph({type:"paragraph",raw:a,text:a,tokens:[{type:"text",raw:a,text:a,escaped:!0}]}):s+=a;continue}default:{let o='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return s}parseInline(e,r=this.renderer){let s="";for(let n=0;n<e.length;n++){let i=e[n];if(this.options.extensions?.renderers?.[i.type]){let o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){s+=o||"";continue}}let l=i;switch(l.type){case"escape":{s+=r.text(l);break}case"html":{s+=r.html(l);break}case"link":{s+=r.link(l);break}case"image":{s+=r.image(l);break}case"strong":{s+=r.strong(l);break}case"em":{s+=r.em(l);break}case"codespan":{s+=r.codespan(l);break}case"br":{s+=r.br(l);break}case"del":{s+=r.del(l);break}case"text":{s+=r.text(l);break}default:{let o='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return s}},I=class{options;block;constructor(t){this.options=t||T}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?C.lex:C.lexInline}provideParser(){return this.block?v.parse:v.parseInline}},xt=class{defaults=V();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=v;Renderer=L;TextRenderer=te;Lexer=C;Tokenizer=K;Hooks=I;constructor(...t){this.use(...t)}walkTokens(t,e){let r=[];for(let s of t)switch(r=r.concat(e.call(this,s)),s.type){case"table":{let n=s;for(let i of n.header)r=r.concat(this.walkTokens(i.tokens,e));for(let i of n.rows)for(let l of i)r=r.concat(this.walkTokens(l.tokens,e));break}case"list":{let n=s;r=r.concat(this.walkTokens(n.items,e));break}default:{let n=s;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(i=>{let l=n[i].flat(1/0);r=r.concat(this.walkTokens(l,e))}):n.tokens&&(r=r.concat(this.walkTokens(n.tokens,e)))}}return r}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let s={...r};if(s.async=this.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let i=e.renderers[n.name];i?e.renderers[n.name]=function(...l){let o=n.renderer.apply(this,l);return o===!1&&(o=i.apply(this,l)),o}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[n.level];i?i.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),s.extensions=e),r.renderer){let n=this.defaults.renderer||new L(this.defaults);for(let i in r.renderer){if(!(i in n))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let l=i,o=r.renderer[l],a=n[l];n[l]=(...h)=>{let c=o.apply(n,h);return c===!1&&(c=a.apply(n,h)),c||""}}s.renderer=n}if(r.tokenizer){let n=this.defaults.tokenizer||new K(this.defaults);for(let i in r.tokenizer){if(!(i in n))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let l=i,o=r.tokenizer[l],a=n[l];n[l]=(...h)=>{let c=o.apply(n,h);return c===!1&&(c=a.apply(n,h)),c}}s.tokenizer=n}if(r.hooks){let n=this.defaults.hooks||new I;for(let i in r.hooks){if(!(i in n))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let l=i,o=r.hooks[l],a=n[l];I.passThroughHooks.has(i)?n[l]=h=>{if(this.defaults.async&&I.passThroughHooksRespectAsync.has(i))return(async()=>{let g=await o.call(n,h);return a.call(n,g)})();let c=o.call(n,h);return a.call(n,c)}:n[l]=(...h)=>{if(this.defaults.async)return(async()=>{let g=await o.apply(n,h);return g===!1&&(g=await a.apply(n,h)),g})();let c=o.apply(n,h);return c===!1&&(c=a.apply(n,h)),c}}s.hooks=n}if(r.walkTokens){let n=this.defaults.walkTokens,i=r.walkTokens;s.walkTokens=function(l){let o=[];return o.push(i.call(this,l)),n&&(o=o.concat(n.call(this,l))),o}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return C.lex(t,e??this.defaults)}parser(t,e){return v.parse(t,e??this.defaults)}parseMarkdown(t){return(e,r)=>{let s={...r},n={...this.defaults,...s},i=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=t),n.async)return(async()=>{let l=n.hooks?await n.hooks.preprocess(e):e,o=await(n.hooks?await n.hooks.provideLexer():t?C.lex:C.lexInline)(l,n),a=n.hooks?await n.hooks.processAllTokens(o):o;n.walkTokens&&await Promise.all(this.walkTokens(a,n.walkTokens));let h=await(n.hooks?await n.hooks.provideParser():t?v.parse:v.parseInline)(a,n);return n.hooks?await n.hooks.postprocess(h):h})().catch(i);try{n.hooks&&(e=n.hooks.preprocess(e));let l=(n.hooks?n.hooks.provideLexer():t?C.lex:C.lexInline)(e,n);n.hooks&&(l=n.hooks.processAllTokens(l)),n.walkTokens&&this.walkTokens(l,n.walkTokens);let o=(n.hooks?n.hooks.provideParser():t?v.parse:v.parseInline)(l,n);return n.hooks&&(o=n.hooks.postprocess(o)),o}catch(l){return i(l)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let s="<p>An error occurred:</p><pre>"+R(r.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(r);throw r}}},S=new xt;function d(t,e){return S.parse(t,e)}d.options=d.setOptions=function(t){return S.setOptions(t),d.defaults=S.defaults,de(d.defaults),d};d.getDefaults=V;d.defaults=T;d.use=function(...t){return S.use(...t),d.defaults=S.defaults,de(d.defaults),d};d.walkTokens=function(t,e){return S.walkTokens(t,e)};d.parseInline=S.parseInline;d.Parser=v;d.parser=v.parse;d.Renderer=L;d.TextRenderer=te;d.Lexer=C;d.lexer=C.lex;d.Tokenizer=K;d.Hooks=I;d.parse=d;d.options;d.setOptions;d.use;d.walkTokens;d.parseInline;v.parse;C.lex;var yt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,m=(t,e,r,s)=>{for(var n=s>1?void 0:s?$t(e,r):e,i=t.length-1,l;i>=0;i--)(l=t[i])&&(n=(s?l(e,r,n):l(n))||n);return s&&n&&yt(e,r,n),n};const U=Le("NotebookRuntime");let b=class extends Pe{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.availableKernels=[],this.selectedKernelId=null,this.kernel=null,this.kernelConnected=!1,this.kernelConnecting=!1,this.kernelVersion=void 0,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.highlightedCellIndex=-1,this.focusedCellIndex=-1,this.cancelRunAll=!1,this.cellWidgetRefs=new Map,this.cellHeights=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.cellWidgetRefs.clear(),this.cellHeights.clear(),this.focusedCellIndex=-1,this.unsubscribeContributionsToken&&(Re(this.unsubscribeContributionsToken),this.unsubscribeContributionsToken=void 0),this.kernel?.close&&Promise.resolve(this.kernel.close()),this.kernel=null,this.kernelConnected=!1,this.kernelVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.saveEditorContents(),this.notebook.cells.forEach((r,s)=>{if(r.cell_type==="code"){const n=this.cellOutputs.get(s);r.outputs=n?this.convertOutputToJupyter(n,r.execution_count):[]}});const t=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(t),this.markDirty(!1)}catch(t){throw console.error("Failed to save notebook:",t),t}}doBeforeUI(){this.loadNotebook()}async onKernelDropdownSelect(t){const r=(t.detail?.item?.value??"")||null;this.selectedKernelId!==r&&(this.kernel?.close&&Promise.resolve(this.kernel.close()),this.kernel=null,this.kernelConnected=!1,this.kernelVersion=void 0,this.selectedKernelId=r,this.notebook&&(this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.kernel=r??void 0),this.cellOutputs.clear(),this.executionCounter=0,this.notebook?.cells?.forEach(s=>{s.cell_type==="code"&&(s.execution_count=null,s.outputs=[])}),this.resetCellState(),await this.ensureKernelLoaded(),this.requestUpdate(),this.updateToolbar())}renderToolbar(){const t=this.availableKernels;t.length>0;const e=this.selectedKernelId?t.find(l=>l.id===this.selectedKernelId)?.label??this.selectedKernelId:"Select kernel",r=this.kernelConnecting?"Connecting...":this.kernelConnected?"Kernel connected":"Kernel disconnected",s=this.kernelConnecting?"Connecting...":this.kernelConnected?this.kernelVersion??"Connected":"Not connected",n=this.kernelConnected?"var(--wa-color-green-40)":this.kernelConnecting?"var(--wa-color-warning-500)":"var(--wa-color-red-40)",i=this.isRunningAll?k`
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
            <wa-dropdown
                class="kernel-select"
                placement="bottom-start"
                distance="4"
                size="small"
                @wa-select=${l=>{this.onKernelDropdownSelect(l)}}
            >
                <wa-button
                    slot="trigger"
                    appearance="plain"
                    size="small"
                    with-caret
                    title="Notebook kernel"
                >
                    ${e}
                </wa-button>
                ${t.map(l=>k`
                        <wa-dropdown-item
                            value=${l.id}
                            type="checkbox"
                            ?checked=${l.id===this.selectedKernelId}
                        >
                            ${l.label}
                        </wa-dropdown-item>
                    `)}
            </wa-dropdown>
            ${i}
            <wa-button
                size="small"
                appearance="plain"
                @click=${()=>this.clearAllOutputs()}
                title="Clear all outputs and reset execution counter"
            >
                <wa-icon name="eraser" label="Clear"></wa-icon>
                Clear Outputs
            </wa-button>
            ${this.kernel?.restart?k`
                <wa-button
                    size="small"
                    appearance="plain"
                    @click=${()=>{this.restartKernel()}}
                    title="Restart kernel"
                    ?disabled=${!this.kernelConnected||this.kernelConnecting}
                >
                    <wa-icon name="arrows-rotate" label="Restart"></wa-icon>
                    Restart Kernel
                </wa-button>
            `:""}
            ${this.kernel?.openPackageManager?k`
                <wa-button
                    size="small"
                    appearance="plain"
                    @click=${()=>this.openPackageManager()}
                    title="Manage packages"
                >
                    <wa-icon name="box" label="Packages"></wa-icon>
                    Packages
                </wa-button>
            `:""}
            ${this.kernel?this.kernel.connect?k`
                <wa-button
                    appearance="plain"
                    size="small"
                    style="display: flex; align-items: center; gap: 0.5rem;"
                    ?disabled=${this.kernelConnecting}
                    @click=${()=>{this.connectKernel()}}
                    title=${r}
                >
                    <wa-icon name="circle" label="Kernel status" style=${N({color:n})}></wa-icon>
                    ${s}
                </wa-button>
            `:k`
                <span style="display: flex; align-items: center; gap: 0.5rem;" title=${r}>
                    <wa-icon name="circle" label="Kernel status" style=${N({color:n})}></wa-icon>
                    ${s}
                </span>
            `:""}
        `}async connectKernel(){if(!(this.kernelConnecting||!this.kernel?.connect))try{this.kernelConnecting=!0,this.requestUpdate(),this.updateToolbar(),await this.kernel.connect({requiredPackages:this.notebook?.metadata?.required_packages}),this.kernelConnected=!0,this.kernel.getVersion&&(this.kernelVersion=await this.kernel.getVersion())}catch(t){U.error("Failed to connect kernel",t)}finally{this.kernelConnecting=!1,this.requestUpdate(),this.updateToolbar()}}async doInitUI(){this.unsubscribeContributionsToken=Se(Me,t=>{t?.target===ie&&this.refreshKernels()}),await this.refreshKernels()}resolveDefaultKernelId(t){if(!t.length)return null;const e=this.notebook?.metadata?.kernel;if(e&&t.some(n=>n.id===e))return e;const r=t.find(n=>n.id==="python");if(r)return r.id;const s=t.find(n=>n.id==="javascript");return s?s.id:t[0].id}async refreshKernels(){const t=Ke.getContributions(ie);this.availableKernels=t,!this.selectedKernelId&&t.length&&(this.selectedKernelId=this.resolveDefaultKernelId(t),this.notebook&&this.selectedKernelId&&(this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.kernel=this.selectedKernelId)),this.selectedKernelId&&!t.some(e=>e.id===this.selectedKernelId)&&(this.selectedKernelId=t.length?t[0].id:null),this.requestUpdate(),await this.ensureKernelLoaded(),this.updateToolbar()}async ensureKernelLoaded(){const t=this.selectedKernelId;if(!t||this.kernel?.id===t)return;this.kernel?.close&&Promise.resolve(this.kernel.close()),this.kernel=null,this.kernelConnected=!1,this.kernelVersion=void 0;const e=this.availableKernels.find(r=>r.id===t);if(e)try{this.kernelConnecting=!0,this.requestUpdate(),this.updateToolbar();const r=await e.loadKernel();if(this.selectedKernelId!==t)return;this.kernel=r,r.connect&&await r.connect({requiredPackages:this.notebook?.metadata?.required_packages}),this.kernelConnected=!0,r.getVersion&&(this.kernelVersion=await r.getVersion())}catch(r){U.error("Failed to load kernel",t,r)}finally{this.kernelConnecting=!1,this.requestUpdate(),this.updateToolbar()}}async loadNotebook(){const e=await this.input.data.getContents();try{this.notebook=JSON.parse(e)}catch(r){console.error("Failed to parse notebook:",r),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if(this.notebook?.metadata?.kernel&&(this.selectedKernelId=this.notebook.metadata.kernel),this.notebook?.cells){const r=this.notebook.cells.filter(s=>s.cell_type==="code").map(s=>s.execution_count??0).reduce((s,n)=>Math.max(s,n),0);this.executionCounter=r,this.notebook.cells.forEach((s,n)=>{if(s.cell_type==="code"&&s.outputs&&s.outputs.length>0){const i=this.convertOutputFromJupyter(s.outputs[0]);i&&this.cellOutputs.set(n,i)}})}this.refreshKernels()}getCellSource(t){return Array.isArray(t.source)?t.source.join(""):t.source}convertOutputToJupyter(t,e){if(t.type==="execute_result"){const r={};return t.imageData&&(r["image/png"]=t.imageData),t.data&&(r["text/plain"]=t.data),[{output_type:"execute_result",data:r,execution_count:e,metadata:{}}]}else if(t.type==="error")return[{output_type:"error",ename:"Error",evalue:t.data,traceback:[t.data]}];return[]}convertOutputFromJupyter(t){return t.output_type==="execute_result"&&t.data?{type:"execute_result",data:t.data["text/plain"]||"",imageData:t.data["image/png"]||void 0}:t.output_type==="error"?{type:"error",data:t.evalue||t.traceback?.join(`
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
`).map(r=>r+`
`);return e.length>0&&(e[e.length-1]=e[e.length-1].replace(/\n$/,"")),e}createCell(t){const e={cell_type:t,source:[""],metadata:{}};return t==="code"&&(e.execution_count=null,e.outputs=[]),e}async executeCell(t){const e=this.notebook.cells[t];if(e.cell_type==="code"){this.executingCells.add(t),this.requestUpdate();try{await this.ensureKernelLoaded();const r=this.kernel;if(!r){this.executingCells.has(t)&&this.cellOutputs.set(t,{type:"error",data:"No kernel selected"});return}const s=this.getCellWidgetRef(t).value,n=s?s.getContent():this.getCellSource(e);if(n==null)return;const i=await r.execute(n);i.error?this.cellOutputs.set(t,{type:"error",data:i.error}):this.cellOutputs.set(t,{type:"execute_result",data:i.data,imageData:i.imageData}),this.executionCounter++,e.execution_count=this.executionCounter,this.markDirty(!0)}catch(r){this.executingCells.has(t)&&this.cellOutputs.set(t,{type:"error",data:r instanceof Error?r.message:String(r)})}finally{this.executingCells.delete(t),this.requestUpdate()}}}cancelExecution(t){this.kernel?.interrupt?this.kernel.interrupt():(this.cellOutputs.set(t,{type:"error",data:"Cancellation not supported for this kernel"}),this.executingCells.delete(t),this.requestUpdate())}clearAllOutputs(){this.cellOutputs.clear(),this.executionCounter=0,this.notebook?.cells&&this.notebook.cells.forEach(t=>{t.cell_type==="code"&&(t.execution_count=null,t.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async restartKernel(){if(!(!this.kernel?.restart||this.kernelConnecting))try{this.kernelConnecting=!0,this.requestUpdate(),this.updateToolbar(),await this.kernel.restart(),this.kernelConnected=!0,this.kernel.getVersion&&(this.kernelVersion=await this.kernel.getVersion())}catch(t){U.error("Failed to restart kernel",t)}finally{this.kernelConnecting=!1,this.requestUpdate(),this.updateToolbar()}}async runAllCells(){if(this.notebook?.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let t=0;t<this.notebook.cells.length&&!this.cancelRunAll;t++)this.notebook.cells[t].cell_type==="code"&&await this.executeCell(t)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0,this.kernel?.interrupt?.()}toggleMarkdownEdit(t){this.editingMarkdownCells.has(t)?this.editingMarkdownCells.delete(t):this.editingMarkdownCells.add(t),this.requestUpdate()}saveMarkdownEdit(t,e){const s=e.target.value;if(this.notebook&&this.notebook.cells[t]){const n=this.notebook.cells[t],i=this.getCellSource(n);n.source=this.stringToSourceArray(s),i!==s&&this.markDirty(!0)}this.editingMarkdownCells.delete(t),this.requestUpdate()}renderMarkdownCell(t,e){const r=this.getCellSource(t),s=!r||r.trim()==="";if(this.editingMarkdownCells.has(e)){const o=k`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${a=>{const h=a.target.closest(".markdown-cell")?.querySelector("textarea");h&&this.saveMarkdownEdit(e,{target:h})}}
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
                                .value=${r}
                                @blur=${a=>this.saveMarkdownEdit(e,a)}
                                placeholder="Enter markdown content here... (# for headings, ** for bold, etc.)"></textarea>
                            ${this.renderFooterActions(e)}
                        </div>
                    </wa-animation>
                </div>
            `}const i=d.parse(r),l=k`
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
                            ${this.renderHeaderActions(e,l)}
                            <span class="cell-label"></span>
                        </div>
                        <div class="cell-content">
                            ${s?k`
                                <div class="markdown-placeholder">
                                    <wa-icon name="font" label="Markdown"></wa-icon>
                                    <span>Double-click or click the pencil icon to edit markdown</span>
                                </div>
                            `:Te(i)}
                        </div>
                        ${this.renderFooterActions(e)}
                    </div>
                </wa-animation>
            </div>
        `}renderCodeCell(t,e){const r=this.cellOutputs.get(e),s=this.executingCells.has(e),n=this.getCellSource(t),i=this.kernel?.language??"javascript",o=`${this.input?.data?.getWorkspacePath?.()??"notebook"}-cell-${e}`,a=this.cellHeights.get(e)??Math.max(100,n.split(`
`).length*19+10),h=s?k`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.cancelExecution(e)}
                title="Stop execution">
                <wa-icon name="stop" label="Stop" style="color: var(--wa-color-danger-500);"></wa-icon>
            </wa-button>
        `:k`
            <lyra-command 
                cmd="notebook.runCell"
                icon="play"
                title="Run cell"
                size="small"
                appearance="plain"
                .params=${{cellIndex:e}}>
            </lyra-command>
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
                            ${this.renderHeaderActions(e,h)}
                        </div>
                        <div
                            class="cell-input monaco-container"
                            style=${N({height:`${a}px`})}
                            @wheel=${c=>this.onCellWheel(e,c)}
                        >
                            <lyra-monaco-widget
                                .value=${n}
                                .language=${i}
                                .uri=${o}
                                ?autoLayout=${!0}
                                @content-change=${()=>this.markDirty(!0)}
                                @editor-focus=${()=>{this.focusedCellIndex=e}}
                                @editor-blur=${()=>{this.focusedCellIndex===e&&(this.focusedCellIndex=-1)}}
                                @content-height-changed=${c=>this.onCellHeightChange(e,c.detail.height)}
                                ${Ae(this.getCellWidgetRef(e))}
                            ></lyra-monaco-widget>
                        </div>
                        ${r?k`
                            <div class="cell-output ${r.type==="error"?"output-error":""}">
                                <div class="output-label">Out [${e+1}]:</div>
                                ${r.imageData?k`
                                    <img src="data:image/png;base64,${r.imageData}" alt="Output image" class="output-image" />
                                `:""}
                                ${r.data?k`<pre><code>${r.data}</code></pre>`:""}
                            </div>
                        `:""}
                        ${this.renderFooterActions(e)}
                    </div>
                </wa-animation>
            </div>
        `}renderCell(t,e){if(t.cell_type==="markdown")return this.renderMarkdownCell(t,e);if(t.cell_type==="code")return this.renderCodeCell(t,e);{const r=this.getCellSource(t);return k`
                <div class="cell raw-cell">
                    <pre><code>${r}</code></pre>
                </div>
            `}}addCell(t,e="code"){this.notebook&&(this.saveEditorContents(),this.shiftIndices(t,"up"),this.notebook.cells.splice(t,0,this.createCell(e)),e==="markdown"&&this.editingMarkdownCells.add(t),this.resetCellState(),this.highlightedCellIndex=t,this.updateComplete.then(()=>{this.scrollToCell(t)}))}scrollToCell(t){const e=this.shadowRoot?.querySelectorAll(".cell-wrapper")[t];if(!e)return;const r=this.closest("wa-scroller");if(!r){e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});return}const s=r.getBoundingClientRect(),n=e.getBoundingClientRect(),l=r.scrollTop+(n.top-s.top)-s.height/2+n.height/2;r.scrollTo({top:l,behavior:"smooth"})}saveEditorContents(){this.notebook?.cells.forEach((t,e)=>{if(t.cell_type!=="code")return;const s=this.getCellWidgetRef(e).value?.getContent();s!=null&&(t.source=this.stringToSourceArray(s))})}resetCellState(){this.markDirty(!0)}deleteCell(t){!this.notebook||this.notebook.cells.length<=1||(this.saveEditorContents(),this.cellOutputs.delete(t),this.executingCells.delete(t),this.editingMarkdownCells.delete(t),this.notebook.cells.splice(t,1),this.shiftIndices(t,"down"),this.resetCellState())}shiftIndices(t,e){const r=e==="up"?1:-1,s=e==="up"?o=>o>=t:o=>o>t,n=e==="up"?(o,a)=>a-o:(o,a)=>o-a,i=o=>{Array.from(o.keys()).filter(s).sort(n).forEach(h=>{const c=o.get(h);o.delete(h),o.set(h+r,c)})},l=o=>{Array.from(o).filter(s).sort(n).forEach(h=>{o.delete(h),o.add(h+r)})};i(this.cellOutputs),l(this.executingCells),l(this.editingMarkdownCells),i(this.cellWidgetRefs),i(this.cellHeights)}getCellWidgetRef(t){return this.cellWidgetRefs.has(t)||this.cellWidgetRefs.set(t,ze()),this.cellWidgetRefs.get(t)}onCellHeightChange(t,e){const n=Math.max(100,e+10);this.cellHeights.get(t)!==n&&(this.cellHeights=new Map(this.cellHeights),this.cellHeights.set(t,n),this.requestUpdate(),this.updateComplete.then(()=>this.getCellWidgetRef(t).value?.layout?.()))}onCellWheel(t,e){const s=this.getCellWidgetRef(t).value?.getEditor();if(!s)return;const n=s.getScrollTop(),i=s.getScrollHeight(),l=s.getContentHeight(),o=i>l,a=e.deltaY<0&&n<=0||e.deltaY>0&&n+l>=i;(!o||a)&&e.stopImmediatePropagation()}openPackageManager(){if(!this.kernel?.openPackageManager)return;const t=this.notebook?.metadata?.required_packages??[];this.kernel.openPackageManager({requiredPackages:t,onPackageAdded:e=>{this.notebook&&(this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.required_packages||(this.notebook.metadata.required_packages=[]),this.notebook.metadata.required_packages.includes(e)||(this.notebook.metadata.required_packages.push(e),this.markDirty(!0)))},onPackageRemoved:e=>{if(!this.notebook?.metadata?.required_packages)return;const r=this.notebook.metadata.required_packages.indexOf(e);r>-1&&(this.notebook.metadata.required_packages.splice(r,1),this.markDirty(!0))}})}updated(t){super.updated(t),(t.has("kernelConnected")||t.has("kernelConnecting")||t.has("kernelVersion")||t.has("isRunningAll")||t.has("availableKernels")||t.has("selectedKernelId"))&&this.updateToolbar()}render(){return this.notebook?k`
            <div class="noteboocells">
                ${_e(this.notebook.cells,(t,e)=>e,(t,e)=>this.renderCell(t,e))}
            </div>
        `:k`<div class="loading">Loading notebook...</div>`}};b.styles=Ie`
        :host {
            display: block;
            width: 100%;
        }

        .kernel-select {
            max-width: 10rem;
        }

        .noteboocells {
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
    `;m([Ee({attribute:!1})],b.prototype,"input",2);m([y()],b.prototype,"notebook",2);m([y()],b.prototype,"cellOutputs",2);m([y()],b.prototype,"executingCells",2);m([y()],b.prototype,"availableKernels",2);m([y()],b.prototype,"selectedKernelId",2);m([y()],b.prototype,"kernel",2);m([y()],b.prototype,"kernelConnected",2);m([y()],b.prototype,"kernelConnecting",2);m([y()],b.prototype,"kernelVersion",2);m([y()],b.prototype,"editingMarkdownCells",2);m([y()],b.prototype,"executionCounter",2);m([y()],b.prototype,"isRunningAll",2);m([y()],b.prototype,"highlightedCellIndex",2);m([y()],b.prototype,"cellHeights",2);b=m([qe("lyra-notebook-editor")],b);export{b as LyraNotebookEditor};
