var e=`# @py-packages:`,t=/^#\s*@py-packages:\s*(.+)$/i;function n(e){let n=(e.split(`
`)[0]??``).match(t);return n?n[1].split(`,`).map(e=>e.trim()).filter(e=>e.length>0):[]}function r(n,r){let i=n.split(`
`),a=i.findIndex(e=>t.test(e)),o=r.length>0?`${e} ${r.join(`, `)}`:null;return a>=0?o?i[a]=o:i.splice(a,1):o&&i.unshift(o),i.join(`
`)}export{n,r as t};