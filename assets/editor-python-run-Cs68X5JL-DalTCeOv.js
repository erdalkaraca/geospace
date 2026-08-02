var e=/^#\s*@py-packages:\s*(.+)$/i;function t(t){let n=(t.split(`
`)[0]??``).match(e);return n?n[1].split(`,`).map(e=>e.trim()).filter(e=>e.length>0):[]}function n(t,n){let r=t.split(`
`),i=r.findIndex(t=>e.test(t)),a=n.length>0?`# @py-packages: ${n.join(`, `)}`:null;return i>=0?a?r[i]=a:r.splice(i,1):a&&r.unshift(a),r.join(`
`)}export{t as n,n as t};